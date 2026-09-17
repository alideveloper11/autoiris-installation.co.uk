import Link from "next/link";
import { Icon } from "@/components/icons";
import type { IconItem, SectionHead } from "./types";
import RichText from "@/components/ui/RichText";

export type ServiceFeaturesProps = SectionHead & {
  items: (IconItem & { href: string })[];
  linkLabel: string;
};

export default function ServiceFeatures({
  eyebrow,
  heading,
  text,
  items,
  linkLabel,
}: ServiceFeaturesProps) {
  return (
    <section className="section why-choose service-features" id="features">
      <div className="container">
        <div className="why-choose-head">
          <span className="eyebrow-plain reveal">{eyebrow}</span>
          <h2 className="reveal reveal-delay-1">
            <RichText text={heading} />
          </h2>
          {text && <p className="reveal reveal-delay-2">{text}</p>}
        </div>

        <div className="services-list-grid">
          {items.map((item, index) => (
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
                aria-label={`${linkLabel}: ${item.title}`}
              >
                {linkLabel} <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
