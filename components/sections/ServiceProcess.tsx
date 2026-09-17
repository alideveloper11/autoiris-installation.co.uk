import type { NumberedStep } from "./types";
import RichText from "@/components/ui/RichText";

export type ServiceProcessProps = {
  eyebrow?: string;
  heading: string;
  steps: NumberedStep[];
  /** Extra class for page-specific variants, e.g. "service-process-compact". */
  className?: string;
};

export default function ServiceProcess({
  eyebrow,
  heading,
  steps,
  className,
}: ServiceProcessProps) {
  return (
    <section className={`section service-process${className ? ` ${className}` : ""}`} id="process">
      <div className="container">
        <div className="service-process-head">
          {eyebrow && <span className="eyebrow-plain reveal">{eyebrow}</span>}
          <h2 className="reveal reveal-delay-1">
            <RichText text={heading} />
          </h2>
        </div>

        <ol className="service-process-steps">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={`service-process-step reveal${index ? ` reveal-delay-${index}` : ""}`}
            >
              <span className="service-process-num" aria-hidden="true">
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
