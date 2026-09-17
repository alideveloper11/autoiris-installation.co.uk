import Link from "next/link";
import { Icon } from "@/components/icons";
import type { ServiceListItem } from "@/data/services";
import type { SectionHead } from "./types";
import RichText from "@/components/ui/RichText";

function ServiceTile({
  service,
  index,
  linkLabel,
}: {
  service: ServiceListItem;
  index: number;
  linkLabel: string;
}) {
  const delay = index % 3;

  return (
    <article className={`service-tile reveal${delay ? ` reveal-delay-${delay}` : ""}`}>
      <div className="service-tile-top">
        <span className="service-tile-num">{service.number}</span>
        <Icon name={service.icon} className="service-tile-icon" />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link
        href={`/services/${service.slug}`}
        className="service-tile-link"
        aria-label={`${linkLabel}: ${service.title}`}
      >
        {linkLabel} <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}

export type ServicesListProps = {
  /** Optional centred heading above the cards. */
  head?: SectionHead;
  items: ServiceListItem[];
  linkLabel: string;
  /** Extra class for page-specific variants, e.g. "services-list-grey". */
  className?: string;
};

export default function ServicesList({ head, items, linkLabel, className }: ServicesListProps) {
  return (
    <section
      className={`section services-list${head ? " why-choose" : ""}${className ? ` ${className}` : ""}`}
      id="services"
    >
      <div className="container">
        {head && (
          <div className="why-choose-head">
            <span className="eyebrow-plain reveal">{head.eyebrow}</span>
            <h2 className="reveal reveal-delay-1">
              <RichText text={head.heading} />
            </h2>
            {head.text && <p className="reveal reveal-delay-2">{head.text}</p>}
          </div>
        )}

        <div className="services-list-grid">
          {items.map((service, index) => (
            <ServiceTile
              key={service.number}
              service={service}
              index={index}
              linkLabel={linkLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
