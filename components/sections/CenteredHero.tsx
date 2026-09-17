import Image from "next/image";
import Link from "next/link";
import { Icon, PhoneSolidIcon, type IconName } from "@/components/icons";
import { site } from "@/data/site";

export type HeroTrustItem = { icon: IconName; label: string };

type CenteredHeroProps = {
  eyebrow: string;
  /** First heading line, in white. */
  heading: string;
  /** Second heading line, in orange. */
  highlight: string;
  /** Optional white words before the orange part of the second line. */
  highlightPrefix?: string;
  text: string;
  image: string;
  /** Optional badges under the buttons. */
  trust?: HeroTrustItem[];
};

export default function CenteredHero({
  eyebrow,
  heading,
  highlight,
  highlightPrefix,
  text,
  image,
  trust,
}: CenteredHeroProps) {
  return (
    <section className="services-hero">
      <Image className="bg-img" src={image} alt="" aria-hidden="true" fill sizes="100vw" priority />
      <div className="services-hero-overlay" />
      <div className="container">
        <div className="services-hero-content">
          <span className="eyebrow-plain reveal">{eyebrow}</span>
          <h1 className="reveal reveal-delay-1">
            {heading}
            <br />
            {highlightPrefix && `${highlightPrefix} `}
            <span className="highlight">{highlight}</span>
          </h1>
          <p className="reveal reveal-delay-2">{text}</p>
          <div className="services-hero-ctas reveal reveal-delay-3">
            <a href={site.phoneHref} className="btn btn-primary btn-lg">
              <PhoneSolidIcon />
              Call {site.phoneDisplay}
            </a>
            <Link href="/contact" className="btn btn-black btn-lg">
              Request a Quote
            </Link>
          </div>
          {trust && (
            <ul className="services-hero-trust reveal reveal-delay-4">
              {trust.map((item) => (
                <li key={item.label}>
                  <Icon name={item.icon} />
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
