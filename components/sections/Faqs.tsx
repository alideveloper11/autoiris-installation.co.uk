import { serviceFaqs } from "@/data/services";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: serviceFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Faqs() {
  return (
    <section className="section faqs" id="faqs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div className="faqs-head">
          <span className="eyebrow-plain reveal">Need To Know More?</span>
          <h2 className="reveal reveal-delay-1">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list reveal reveal-delay-2">
          {serviceFaqs.map((faq, index) => (
            <details
              key={faq.question}
              className="faq-item"
              // A shared name makes the group exclusive: opening one closes the rest.
              name="faqs"
              open={index === 0}
            >
              <summary>
                {faq.question}
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
