"use client";

import { useEnquirySubmit } from "@/hooks/useEnquirySubmit";

type ServiceQuoteFormProps = {
  /** Service name, shown in the heading and sent with the enquiry. */
  service: string;
};

export default function ServiceQuoteForm({ service }: ServiceQuoteFormProps) {
  const { status, statusRef, sending, handleSubmit } = useEnquirySubmit();

  return (
    <section className="section service-quote" id="quote">
      <div className="container">
        <div className="service-quote-card reveal">
          <h2>
            Get Your {service} <span className="highlight">Quote</span>
          </h2>

          {status && (
            <div
              ref={statusRef}
              className={`form-success${status.error ? " error" : ""}`}
              role="status"
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="quote-website">Website</label>
              <input
                type="text"
                id="quote-website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <input type="hidden" name="service" value={service} />

            <div className="service-quote-field">
              <label htmlFor="quote-name">Name</label>
              <input type="text" id="quote-name" name="name" autoComplete="name" required />
            </div>
            <div className="service-quote-field">
              <label htmlFor="quote-phone">Phone</label>
              <input type="tel" id="quote-phone" name="phone" autoComplete="tel" required />
            </div>
            <div className="service-quote-field">
              <label htmlFor="quote-email">Email</label>
              <input type="email" id="quote-email" name="email" autoComplete="email" />
            </div>
            <div className="service-quote-field">
              <label htmlFor="quote-message">Message</label>
              <textarea id="quote-message" name="message" />
            </div>

            <button
              type="submit"
              className="btn btn-primary service-quote-submit"
              disabled={sending}
            >
              {sending ? "Sending…" : "Request a Quote"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
