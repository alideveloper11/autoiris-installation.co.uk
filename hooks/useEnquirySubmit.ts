"use client";

import { useRef, useState } from "react";
import { site } from "@/data/site";

export type EnquiryStatus = { message: string; error: boolean } | null;

/** Opens the visitor's mail app with the enquiry pre-filled. */
function mailtoFallback(data: FormData) {
  const get = (key: string) => String(data.get(key) ?? "");
  const name = get("name") || "Customer";
  const lines = [
    `Name: ${name}`,
    `Phone: ${get("phone") || "Not provided"}`,
    `Email: ${get("email") || "Not provided"}`,
    `Service: ${get("service") || "General"}`,
    `Postcode: ${get("postcode") || "Not provided"}`,
    `Message: ${get("message")}`,
  ];
  const subject = `Enquiry from ${name} via Auto Iris Website`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

/**
 * Submit handling shared by the enquiry forms: validates name + phone, posts to
 * /api/contact, and falls back to the visitor's mail app if the request can't be made.
 */
export function useEnquirySubmit() {
  const statusRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<EnquiryStatus>(null);
  const [sending, setSending] = useState(false);

  function show(message: string, error = false) {
    setStatus({ message, error });
    requestAnimationFrame(() =>
      statusRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      }),
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!data.get("name") || !data.get("phone")) {
      show("Please fill in your name and phone number so we can get back to you.", true);
      return;
    }

    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      const body = await response.json();

      if (response.ok && body.ok) {
        show(body.message || "Thank you! Your enquiry has been sent.");
        form.reset();
      } else {
        show(
          body.message ||
            `Something went wrong. Please try again or call us on ${site.phoneDisplay}.`,
          true,
        );
      }
    } catch {
      window.location.href = mailtoFallback(data);
      show(
        `Thank you! We opened your email app so you can send the enquiry directly. If nothing opened, email ${site.email}.`,
      );
    } finally {
      setSending(false);
    }
  }

  return { status, statusRef, sending, handleSubmit };
}
