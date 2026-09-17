import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import type { SectionHead } from "./types";
import RichText from "@/components/ui/RichText";

export type ServiceCardItem = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

export type ServicesProps = SectionHead & {
  items: ServiceCardItem[];
  chipsHeading: string;
  chips: string[];
};

function ServiceCard({ service, index }: { service: ServiceCardItem; index: number }) {
  const isExternal = service.ctaHref.startsWith("http");
  const cta = (
    <>
      {service.ctaLabel} <ArrowRightIcon />
    </>
  );

  return (
    <article className={`service-card reveal${index ? ` reveal-delay-${index}` : ""}`}>
      <div className="media">
        <span className="num">{service.number}</span>
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        {isExternal ? (
          <a href={service.ctaHref} className="link">
            {cta}
          </a>
        ) : (
          <Link href={service.ctaHref} className="link">
            {cta}
          </Link>
        )}
      </div>
    </article>
  );
}

export default function Services({
  eyebrow,
  heading,
  text,
  items,
  chipsHeading,
  chips,
}: ServicesProps) {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">{eyebrow}</span>
          <h2 className="reveal">
            <RichText text={heading} />
          </h2>
          {text && <p className="lead reveal">{text}</p>}
        </div>

        <div className="services-grid">
          {items.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="sub-services reveal">
          <h3 className="reveal">
            <RichText text={chipsHeading} />
          </h3>
          <div className="chip-grid">
            {chips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
