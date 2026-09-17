import Link from "next/link";
import { Icon } from "@/components/icons";
import type { ServiceFeaturesContent } from "@/data/serviceDetails";

export default function ServiceFeatures({ content }: { content: ServiceFeaturesContent }) {
  return (
    <section className="section why-choose service-features" id="features">
      <div className="container">
        <div className="why-choose-head">
          <span className="eyebrow-plain reveal">{content.eyebrow}</span>
          <h2 className="reveal reveal-delay-1">{content.heading}</h2>
          <p className="reveal reveal-delay-2">{content.text}</p>
        </div>

        <div className="services-list-grid">
          {content.items.map((item, index) => (
            <article
              key={item.title}
              className={`service-tile service-feature reveal${index ? ` reveal-delay-${index}` : ""}`}
            >
              <div className="service-tile-top">
                <Icon name={item.icon} className="service-tile-icon" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link
                href={item.href}
                className="service-tile-link"
                aria-label={`Learn more about ${item.title}`}
              >
                Learn More <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
