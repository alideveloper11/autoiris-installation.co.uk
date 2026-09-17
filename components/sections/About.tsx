import Image from "next/image";
import { Icon } from "@/components/icons";
import { CtaButton, type CtaLink } from "@/components/ui/CtaLinks";
import type { IconItem } from "./types";
import RichText from "@/components/ui/RichText";

export type AboutProps = {
  image: { src: string; alt: string };
  /** `label` may use "\n" for a line break. */
  badge: { value: string; label: string };
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  points: IconItem[];
  cta: CtaLink;
};

export default function About({
  image,
  badge,
  eyebrow,
  heading,
  paragraphs,
  points,
  cta,
}: AboutProps) {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-media reveal">
            <span className="frame" aria-hidden="true" />
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" />
            <div className="about-badge">
              <strong>{badge.value}</strong>
              <RichText text={badge.label} />
            </div>
          </div>

          <div className="about-text">
            <span className="eyebrow reveal">{eyebrow}</span>
            <h2 className="reveal">
              <RichText text={heading} />
            </h2>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="reveal">
                {paragraph}
              </p>
            ))}
            <ul className="why-list">
              {points.map((point, index) => (
                <li key={point.title} className={`reveal reveal-delay-${index + 1}`}>
                  <Icon name={point.icon} />
                  <span>
                    <strong>{point.title}</strong> {point.text}
                  </span>
                </li>
              ))}
            </ul>
            <CtaButton cta={cta} className="reveal reveal-delay-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
