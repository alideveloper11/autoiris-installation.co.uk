import Image from "next/image";
import { Icon, type IconName } from "@/components/icons";
import CtaLinks, { type CtaLink } from "@/components/ui/CtaLinks";
import RichText from "@/components/ui/RichText";

export type HeroTrustItem = { icon: IconName; label: string };

export type FullScreenHeroProps = {
  eyebrow: string;
  /** "[words]" are highlighted and "\n" starts a new line, e.g. "Security Systems,\n[Supplied & Fitted]". */
  heading: string;
  text: string;
  image: string;
  ctas: CtaLink[];
  /** Optional badges under the buttons. */
  trust?: HeroTrustItem[];
  /** Content alignment; defaults to centred. */
  align?: "center" | "left";
};

export default function FullScreenHero({
  eyebrow,
  heading,
  text,
  image,
  ctas,
  trust,
  align = "center",
}: FullScreenHeroProps) {
  return (
    <section className={`services-hero${align === "left" ? " services-hero-left" : ""}`}>
      <Image className="bg-img" src={image} alt="" aria-hidden="true" fill sizes="100vw" priority />
      <div className="services-hero-overlay" />
      <div className="container">
        <div className="services-hero-content">
          <span className="eyebrow-plain reveal">{eyebrow}</span>
          <h1 className="reveal reveal-delay-1">
            <RichText text={heading} />
          </h1>
          <p className="reveal reveal-delay-2">{text}</p>
          <div className="services-hero-ctas reveal reveal-delay-3">
            <CtaLinks ctas={ctas} />
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
