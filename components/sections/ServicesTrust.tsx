import { serviceStats } from "@/data/services";

export default function ServicesTrust() {
  return (
    <section className="section services-trust">
      <div className="container services-trust-grid">
        <div className="services-trust-copy">
          <span className="eyebrow-plain reveal">Protection You Can Trust</span>
          <h2 className="reveal reveal-delay-1">Built For Homes And Businesses</h2>
          <p className="reveal reveal-delay-2">
            Every system is planned around your property, your people and the way you use your
            space
          </p>
        </div>

        <dl className="services-trust-stats">
          {serviceStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`services-trust-stat reveal${index ? ` reveal-delay-${index}` : ""}`}
            >
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
