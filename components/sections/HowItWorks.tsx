import { howItWorksSteps } from "@/data/services";

export default function HowItWorks() {
  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <div className="how-it-works-head">
          <span className="eyebrow-plain reveal">How It Works</span>
          <h2 className="reveal reveal-delay-1">
            Secured In <span className="highlight">Four Simple Steps</span>
          </h2>
          <p className="reveal reveal-delay-2">
            From your first call to long-term aftercare, we keep the whole process quick, clear
            and hassle-free.
          </p>
        </div>

        <ol className="how-it-works-steps">
          {howItWorksSteps.map((step, index) => (
            <li
              key={step.number}
              className={`how-step reveal${index ? ` reveal-delay-${index}` : ""}`}
            >
              <span className="how-step-num" aria-hidden="true">
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
