import Link from "next/link";
import { MapPinIcon } from "@/components/icons";
import { CtaButton, type CtaLink } from "@/components/ui/CtaLinks";
import RichText from "@/components/ui/RichText";

export type CoverageProps = {
  id?: string;
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  /** Places with an `href` link to their page, e.g. an area page. */
  places: { label: string; href?: string }[];
  /** Optional button under the text. */
  cta?: CtaLink;
};

export default function Coverage({ id, eyebrow, heading, paragraphs, places, cta }: CoverageProps) {
  return (
    <section className="section coverage" id={id}>
      <div className="container">
        <div className="coverage-grid">
          <div className="reveal">
            <span className="eyebrow">{eyebrow}</span>
            <h2>
              <RichText text={heading} />
            </h2>
            {paragraphs.map((paragraph, index) => (
              <p key={paragraph} style={index ? { marginTop: 16 } : undefined}>
                {paragraph}
              </p>
            ))}
            {cta && (
              <div style={{ marginTop: 26 }}>
                <CtaButton cta={cta} />
              </div>
            )}
          </div>

          <ul className="coverage-places">
            {places.map((place, index) => (
              <li
                key={place.label}
                className={`reveal reveal-delay-${Math.min(Math.floor(index / 2) + 1, 4)}${place.href ? " has-link" : ""}`}
              >
                {place.href ? (
                  <Link href={place.href} className="coverage-place-link">
                    <MapPinIcon />
                    {place.label}
                  </Link>
                ) : (
                  <>
                    <MapPinIcon />
                    {place.label}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
