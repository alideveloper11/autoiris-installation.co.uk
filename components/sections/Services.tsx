import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { services, subServiceChips, type Service } from "@/data/services";

function ServiceCard({ service, index }: { service: Service; index: number }) {
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

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">Our Services</span>
          <h2 className="reveal">
            Security Systems, <span className="highlight">Supplied &amp; Fitted</span>
          </h2>
          <p className="lead reveal">
            Everything you need to protect and secure your home or business, installed by a
            certified professional.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="sub-services reveal">
          <h3 className="reveal">
            Every Angle <span>Covered</span>
          </h3>
          <div className="chip-grid">
            {subServiceChips.map((chip) => (
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
