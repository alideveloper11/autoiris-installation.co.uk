import Link from "next/link";
import { ArrowRightIcon, MapPinIcon } from "@/components/icons";
import { CtaButton, type CtaLink } from "@/components/ui/CtaLinks";
import RichText from "@/components/ui/RichText";
import type { SectionHead } from "./types";

export type AreaLocationProps = SectionHead & {
  map: {
    label: string;
    heading: string;
    /** Google Maps embed URL. */
    src: string;
    title: string;
  };
  links: {
    label: string;
    heading: string;
    text: string;
    /** `label` is the small line above each area name, e.g. its region. */
    items: { label: string; name: string; href: string }[];
    /** Button under the list, e.g. to the full areas page. */
    viewAll?: CtaLink;
  };
};

export default function AreaLocation({ eyebrow, heading, text, map, links }: AreaLocationProps) {
  return (
    <section className="section area-location" id="location">
      <div className="container">
        <div className="area-location-head">
          <span className="eyebrow-plain reveal">{eyebrow}</span>
          <h2 className="reveal reveal-delay-1">
            <RichText text={heading} />
          </h2>
          {text && <p className="reveal reveal-delay-2">{text}</p>}
        </div>

        <div className="area-location-grid">
          <div className="area-location-map reveal">
            <div className="area-location-map-head">
              <span className="area-location-icon">
                <MapPinIcon />
              </span>
              <div>
                <span className="area-location-label">{map.label}</span>
                <h3>{map.heading}</h3>
              </div>
            </div>
            <iframe
              title={map.title}
              src={map.src}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <aside className="area-location-links reveal reveal-delay-1">
            <span className="area-location-label">{links.label}</span>
            <h3>{links.heading}</h3>
            <p>{links.text}</p>
            <ul>
              {links.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="area-location-link-text">
                      <span className="area-location-label">{item.label}</span>
                      <strong>{item.name}</strong>
                    </span>
                    <ArrowRightIcon />
                  </Link>
                </li>
              ))}
            </ul>
            {links.viewAll && (
              <div className="area-location-view-all">
                <CtaButton cta={links.viewAll} />
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
