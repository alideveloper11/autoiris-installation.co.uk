import Link from "next/link";
import { Icon } from "@/components/icons";
import { allServices, type ServiceListItem } from "@/data/services";

function ServiceTile({ service, index }: { service: ServiceListItem; index: number }) {
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
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}

export default function ServicesList() {
  return (
    <section className="section services-list" id="services">
      <div className="container">
        <div className="services-list-grid">
          {allServices.map((service, index) => (
            <ServiceTile key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
