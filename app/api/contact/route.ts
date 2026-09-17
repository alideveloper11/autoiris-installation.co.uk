import { NextResponse } from "next/server";
import { site } from "@/data/site";

/**
 * Contact form handler — the Next.js replacement for the old send-email.php.
 * Keeps the same JSON contract ({ ok, message }) the form has always consumed.
 *
 * Each enquiry is delivered to two channels at once:
 *   - Email, via Resend (RESEND_* variables)
 *   - WhatsApp, via CallMeBot (CALLMEBOT_* variables)
 * See .env.example. The visitor sees success if at least one channel delivered;
 * if neither is configured or both fail, they are asked to call or email instead.
 */

const MAX_LENGTHS = {
  name: 120,
  phone: 60,
  email: 190,
  postcode: 40,
  service: 120,
  urgency: 120,
  message: 4000,
} as const;

type Field = keyof typeof MAX_LENGTHS;

function clean(value: FormDataEntryValue | null, max: number) {
  return String(value ?? "")
    .replace(/<[^>]*>/g, "")
    // Strip control characters that have no place in an email body.
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "")
    .trim()
    .slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/** Sends the enquiry email through the Resend API. */
async function sendEmail(message: { to: string; subject: string; text: string; replyTo?: string }) {
  const { RESEND_API_KEY, RESEND_FROM } = process.env;
  if (!RESEND_API_KEY) throw new Error("Resend is not configured");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // resend.dev works before a domain is verified, but only delivers to the account's own email.
      from: RESEND_FROM ?? `${site.name} <onboarding@resend.dev>`,
      to: message.to,
      subject: message.subject,
      text: message.text,
      reply_to: message.replyTo,
    }),
    signal: AbortSignal.timeout(10_000),
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Resend responded ${response.status}: ${await response.text()}`);
  }
}

/** Sends a WhatsApp message to the business number through the CallMeBot API. */
async function sendWhatsApp(text: string) {
  const { CALLMEBOT_APIKEY, CALLMEBOT_PHONE } = process.env;
  if (!CALLMEBOT_APIKEY) throw new Error("CallMeBot is not configured");

  const url = new URL("https://api.callmebot.com/whatsapp.php");
  url.searchParams.set("phone", CALLMEBOT_PHONE ?? site.phoneIntl);
  url.searchParams.set("text", text);
  url.searchParams.set("apikey", CALLMEBOT_APIKEY);

  const response = await fetch(url, { signal: AbortSignal.timeout(10_000), cache: "no-store" });
  // CallMeBot reports failures (e.g. a bad API key) with a 2xx status and an HTML page
  // containing "ERROR: ...", so the body has to be checked as well as the status.
  const result = (await response.text()).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  if (!response.ok || /error|invalid/i.test(result)) {
    throw new Error(`CallMeBot responded ${response.status}: ${result.slice(0, 300)}`);
  }
}

export async function POST(request: Request) {
  const form = await request.formData();

  // Honeypot: a real browser never fills this in.
  if (clean(form.get("website"), 200)) {
    return NextResponse.json({ ok: true, message: "Thank you." });
  }

  const fields = Object.fromEntries(
    (Object.keys(MAX_LENGTHS) as Field[]).map((key) => [
      key,
      clean(form.get(key), MAX_LENGTHS[key]),
    ]),
  ) as Record<Field, string>;

  if (!fields.name || !fields.phone) {
    return NextResponse.json(
      { ok: false, message: "Please provide your name and phone number." },
      { status: 422 },
    );
  }

  if (fields.email && !isEmail(fields.email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  const failure = NextResponse.json(
    {
      ok: false,
      message: `We could not send your enquiry at this moment. Please call us on ${site.phoneDisplay} or email ${site.email}.`,
    },
    { status: 500 },
  );

  const to = process.env.CONTACT_TO ?? site.email;
  const body = [
    `New enquiry from the ${site.name} website`,
    "---------------------------------------------",
    `Name:     ${fields.name}`,
    `Phone:    ${fields.phone}`,
    `Email:    ${fields.email || "Not provided"}`,
    `Postcode: ${fields.postcode || "Not provided"}`,
    `Service:  ${fields.service || "General"}`,
    `Urgency:  ${fields.urgency || "Not specified"}`,
    "---------------------------------------------",
    "Message:",
    fields.message || "-",
  ].join("\n");

  const whatsappText = [
    `*New website enquiry*`,
    `*Name:* ${fields.name}`,
    `*Phone:* ${fields.phone}`,
    `*Email:* ${fields.email || "Not provided"}`,
    `*Postcode:* ${fields.postcode || "Not provided"}`,
    `*Service:* ${fields.service || "General"}`,
    `*Urgency:* ${fields.urgency || "Not specified"}`,
    "",
    // Keep the request URL a sensible length; the email carries the full message.
    fields.message ? fields.message.slice(0, 1500) : "-",
  ].join("\n");

  const [email, whatsapp] = await Promise.allSettled([
    sendEmail({
      to,
      subject: `Website Enquiry: ${fields.service || "General"} - ${fields.name}`,
      text: body,
      replyTo: fields.email || undefined,
    }),
    sendWhatsApp(whatsappText),
  ]);
  if (email.status === "rejected") console.error("[contact] Email failed:", email.reason);
  if (whatsapp.status === "rejected") console.error("[contact] WhatsApp failed:", whatsapp.reason);

  if (email.status === "rejected" && whatsapp.status === "rejected") return failure;

  return NextResponse.json({
    ok: true,
    message: `Thank you ${fields.name}! Your enquiry has been sent. We will get back to you shortly.`,
  });
}
