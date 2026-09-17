import RichText from "@/components/ui/RichText";

export type Faq = { question: string; answer: string };

export type FaqsProps = {
  eyebrow: string;
  heading: string;
  /** Also emitted as FAQPage structured data. */
  items: Faq[];
};

export default function Faqs({ eyebrow, heading, items }: FaqsProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="section faqs" id="faqs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div className="faqs-head">
          <span className="eyebrow-plain reveal">{eyebrow}</span>
          <h2 className="reveal reveal-delay-1">
            <RichText text={heading} />
          </h2>
        </div>

        <div className="faq-list reveal reveal-delay-2">
          {items.map((faq, index) => (
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
