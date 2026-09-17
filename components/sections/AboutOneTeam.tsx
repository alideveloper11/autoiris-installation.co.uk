import RichText from "@/components/ui/RichText";

export type AboutOneTeamProps = {
  heading: string;
  text: string;
  /** Short labels with an orange bar, e.g. "Survey". */
  steps: string[];
};

export default function AboutOneTeam({ heading, text, steps }: AboutOneTeamProps) {
  return (
    <section className="section about-one-team" id="one-team">
      <div className="container">
        <h2 className="reveal">
          <RichText text={heading} />
        </h2>
        <p className="reveal reveal-delay-1">{text}</p>
        <ul className="about-one-team-steps reveal reveal-delay-2">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
