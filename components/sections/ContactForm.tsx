"use client";

import { SendIcon } from "@/components/icons";
import { serviceOptionLabels, serviceOptions, urgencyOptions } from "@/data/contact";
import { CtaButton, type CtaLink } from "@/components/ui/CtaLinks";
import { useEnquirySubmit } from "@/hooks/useEnquirySubmit";
import RichText from "@/components/ui/RichText";

export type ContactFormProps = {
  heading: string;
  text: string;
  submitLabel: string;
  /** Secondary button beside the submit button. */
  call: CtaLink;
  note: string;
};

export default function ContactForm({ heading, text, submitLabel, call, note }: ContactFormProps) {
  const { status, statusRef, sending, handleSubmit } = useEnquirySubmit();

  return (
    <div className="form-card reveal">
      {status && (
        <div
          ref={statusRef}
          className={`form-success${status.error ? " error" : ""}`}
          role="status"
        >
          {status.message}
        </div>
      )}

      <h2>
        <RichText text={heading} />
      </h2>
      <p>{text}</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="form-grid">
          <div className="field">
            <label htmlFor="name">Your Name *</label>
            <input type="text" id="name" name="name" placeholder="Full name" required />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" placeholder="e.g. 07XXX XXXXXX" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" />
          </div>
          <div className="field">
            <label htmlFor="postcode">Your Postcode</label>
            <input type="text" id="postcode" name="postcode" placeholder="e.g. IG11 7FT" />
          </div>
          <div className="field">
            <label htmlFor="service">What do you need?</label>
            <select id="service" name="service" defaultValue={serviceOptions[0]}>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {serviceOptionLabels[option] ?? option}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="urgency">How urgent is it?</label>
            <select id="urgency" name="urgency" defaultValue={urgencyOptions[0]}>
              {urgencyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="field" style={{ gridColumn: "1/-1" }}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us a little about the job, like property type, number of rooms and what you need protecting."
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
            {sending ? "Sending…" : submitLabel}
            <SendIcon />
          </button>
          <CtaButton cta={call} />
          <p className="form-note">{note}</p>
        </div>
      </form>
    </div>
  );
}
