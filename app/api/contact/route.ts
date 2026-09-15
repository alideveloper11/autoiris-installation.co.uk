import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/data/site";

/**
 * Contact form handler — the Next.js replacement for the old send-email.php.
 * Keeps the same JSON contract ({ ok, message }) the form has always consumed.
 *
 * Each enquiry is delivered to two channels at once:
 *   - Email, via SMTP (SMTP_* variables)
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

function transporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;

  const port = Number(SMTP_PORT ?? 587);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
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
  if (!response.ok) {
    throw new Error(`CallMeBot responded ${response.status}: ${await response.text()}`);
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

  const sendEmail = async () => {
    const mailer = transporter();
    if (!mailer) throw new Error("SMTP is not configured");
    await mailer.sendMail({
      to,
      from: `${site.name} <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      replyTo: `${fields.name} <${fields.email || to}>`,
      subject: `Website Enquiry: ${fields.service || "General"} - ${fields.name}`,
      text: body,
    });
  };

  const [email, whatsapp] = await Promise.allSettled([sendEmail(), sendWhatsApp(whatsappText)]);
  if (email.status === "rejected") console.error("[contact] Email failed:", email.reason);
  if (whatsapp.status === "rejected") console.error("[contact] WhatsApp failed:", whatsapp.reason);

  if (email.status === "rejected" && whatsapp.status === "rejected") return failure;

  return NextResponse.json({
    ok: true,
    message: `Thank you ${fields.name}! Your enquiry has been sent. We will get back to you shortly.`,
  });
}
