import type { ServiceProcessContent } from "@/data/serviceDetails";

export default function ServiceProcess({ content }: { content: ServiceProcessContent }) {
  return (
    <section className="section service-process" id="process">
      <div className="container">
        <div className="service-process-head">
          <span className="eyebrow-plain reveal">{content.eyebrow}</span>
          <h2 className="reveal reveal-delay-1">{content.heading}</h2>
        </div>

        <ol className="service-process-steps">
          {content.steps.map((step, index) => (
            <li
              key={step.number}
              className={`service-process-step reveal${index ? ` reveal-delay-${index}` : ""}`}
            >
              <span className="service-process-num" aria-hidden="true">
                {step.number}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
