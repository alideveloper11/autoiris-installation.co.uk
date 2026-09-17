import type { SectionHead } from "./types";
import RichText from "@/components/ui/RichText";

export type ServicesTrustProps = SectionHead & {
  stats: { value: string; label: string }[];
};

export default function ServicesTrust({ eyebrow, heading, text, stats }: ServicesTrustProps) {
  return (
    <section className="section services-trust">
      <div className="container services-trust-grid">
        <div className="services-trust-copy">
          <span className="eyebrow-plain reveal">{eyebrow}</span>
          <h2 className="reveal reveal-delay-1">
            <RichText text={heading} />
          </h2>
          {text && <p className="reveal reveal-delay-2">{text}</p>}
        </div>

        <dl className="services-trust-stats">
          {stats.map((stat, index) => (
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
