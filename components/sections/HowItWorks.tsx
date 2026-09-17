import type { NumberedStep, SectionHead } from "./types";
import RichText from "@/components/ui/RichText";

export type HowItWorksProps = SectionHead & { steps: NumberedStep[] };

export default function HowItWorks({ eyebrow, heading, text, steps }: HowItWorksProps) {
  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <div className="how-it-works-head">
          <span className="eyebrow-plain reveal">{eyebrow}</span>
          <h2 className="reveal reveal-delay-1">
            <RichText text={heading} />
          </h2>
          {text && <p className="reveal reveal-delay-2">{text}</p>}
        </div>

        <ol className="how-it-works-steps">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={`how-step reveal${index ? ` reveal-delay-${index}` : ""}`}
            >
              <span className="how-step-num" aria-hidden="true">
                {step.number}
              </span>
              <h3>{step.title}</h3>
              {step.text && <p>{step.text}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
