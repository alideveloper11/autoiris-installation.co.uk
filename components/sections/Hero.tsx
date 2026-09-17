import Image from "next/image";
import { Icon, ShieldIcon, Stars, type IconName } from "@/components/icons";
import CtaLinks, { type CtaLink } from "@/components/ui/CtaLinks";
import RichText from "@/components/ui/RichText";

export type HeroProps = {
  image: { src: string; alt: string };
  badge: string;
  heading: string;
  text: string;
  ctas: CtaLink[];
  /** "stars" renders the five-star row instead of an icon. */
  trust: { icon: IconName | "stars"; label: string }[];
};

export default function Hero({ image, badge, heading, text, ctas, trust }: HeroProps) {
  return (
    <section className="hero" id="home">
      <div className="hero-media">
        <Image src={image.src} alt={image.alt} fill sizes="100vw" priority />
      </div>
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge reveal">
            <ShieldIcon />
            {badge}
          </span>
          <h1 className="reveal reveal-delay-1">
            <RichText text={heading} />
          </h1>
          <p className="reveal reveal-delay-2">{text}</p>
          <div className="hero-ctas reveal reveal-delay-3">
            <CtaLinks ctas={ctas} />
          </div>
          <div className="hero-trust reveal reveal-delay-4">
            {trust.map((item) => (
              <span key={item.label}>
                {item.icon === "stars" ? (
                  <Stars className="hero-stars" />
                ) : (
                  <Icon name={item.icon} />
                )}
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
