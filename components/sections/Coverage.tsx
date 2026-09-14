import Link from "next/link";
import type { ReactNode } from "react";
import { MapPinIcon } from "@/components/icons";
import { coveragePlaces } from "@/data/home";

type CoverageProps = {
  id?: string;
  eyebrow?: string;
  heading?: ReactNode;
  body?: ReactNode;
  places?: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

const defaultHeading = (
  <>
    Based in Barking.
    <br />
    <span className="highlight">Covering All of London &amp; Beyond.</span>
  </>
);

const defaultBody = (
  <>
    <p>
      We&apos;re based in Barking, but we don&apos;t let postcodes stop us. We regularly
      travel across London, Essex, Kent and the Home Counties, and as far as Norfolk,
      Portsmouth and Folkestone for the right job.
    </p>
    <p style={{ marginTop: 16 }}>
      Every job is backed by a minimum 12-month guarantee, with 3 and 5 year no-quibble
      warranties available on selected products.
    </p>
  </>
);

export default function Coverage({
  id,
  eyebrow = "Where We Work",
  heading = defaultHeading,
  body = defaultBody,
  places = coveragePlaces,
  ctaLabel = "Request a Visit",
  ctaHref = "/contact",
}: CoverageProps) {
  return (
    <section className="section coverage" id={id}>
      <div className="container">
        <div className="coverage-grid">
          <div className="reveal">
            <span className="eyebrow">{eyebrow}</span>
            <h2>{heading}</h2>
            {body}
            {ctaLabel && ctaHref && (
              <Link href={ctaHref} className="btn btn-primary" style={{ marginTop: 26 }}>
                {ctaLabel}
              </Link>
            )}
          </div>

          <ul className="coverage-places">
            {places.map((place, index) => (
              <li
                key={place}
                className={`reveal reveal-delay-${Math.floor(index / 2) + 1}`}
              >
                <MapPinIcon />
                {place}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
