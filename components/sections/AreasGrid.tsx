import Link from "next/link";
import { MapPinIcon } from "@/components/icons";
import type { ServiceArea } from "@/data/areas";
import type { SectionHead } from "./types";
import RichText from "@/components/ui/RichText";

export type AreasGridProps = SectionHead & {
  areas: ServiceArea[];
  linkLabel: string;
};

export default function AreasGrid({ eyebrow, heading, text, areas, linkLabel }: AreasGridProps) {
  return (
    <section className="section areas-grid-section" id="areas-we-serve">
      <div className="container">
        <div className="areas-grid-head">
          <span className="eyebrow-plain reveal">{eyebrow}</span>
          <h2 className="reveal reveal-delay-1">
            <RichText text={heading} />
          </h2>
          {text && <p className="reveal reveal-delay-2">{text}</p>}
        </div>

        <ul className="areas-grid">
          {areas.map((area, index) => (
            <li
              key={area.slug}
              className={`area-card reveal${index % 4 ? ` reveal-delay-${index % 4}` : ""}`}
            >
              <MapPinIcon />
              <h3>{area.name}</h3>
              <p>{area.region}</p>
              <Link href={`/areas/${area.slug}`} aria-label={`${linkLabel}: ${area.name}`}>
                {linkLabel} <span aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
