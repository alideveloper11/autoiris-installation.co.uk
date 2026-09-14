import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/data/site";

/**
 * Contact form handler — the Next.js replacement for the old send-email.php.
 * Keeps the same JSON contract ({ ok, message }) the form has always consumed.
 *
 * Sending needs SMTP credentials in the environment (see .env.example). Without
 * them this responds with an error, which makes the form fall back to opening
 * the visitor's mail app — exactly what the PHP version did when mail() failed.
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
      message: `We could not send the email at this moment. Please call us on ${site.phoneDisplay} or email ${site.email}.`,
    },
    { status: 500 },
  );

  const mailer = transporter();
  if (!mailer) return failure;

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

  try {
    await mailer.sendMail({
      to,
      from: `${site.name} <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      replyTo: `${fields.name} <${fields.email || to}>`,
      subject: `Website Enquiry: ${fields.service || "General"} - ${fields.name}`,
      text: body,
    });
  } catch {
    return failure;
  }

  return NextResponse.json({
    ok: true,
    message: `Thank you ${fields.name}! Your enquiry has been sent. We will get back to you shortly.`,
  });
}
