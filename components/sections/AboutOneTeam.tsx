const steps = ["Survey", "Install", "Maintain"];

export default function AboutOneTeam() {
  return (
    <section className="section about-one-team" id="one-team">
      <div className="container">
        <h2 className="reveal">One Team, Wherever You Need</h2>
        <p className="reveal reveal-delay-1">
          From a single camera upgrade to a complete home or business security system, our local
          team can survey, install and maintain your equipment.
        </p>
        <ul className="about-one-team-steps reveal reveal-delay-2">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
