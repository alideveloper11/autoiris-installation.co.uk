import Link from "next/link";
import { Fragment } from "react";
import { Icon, PhoneSolidIcon, StarIcon } from "@/components/icons";
import type { IconItem } from "./types";
import RichText from "@/components/ui/RichText";

export type ContactInfoProps = {
  eyebrow: string;
  heading: string;
  rows: IconItem[];
  /** Final row with the star icon: "{text} {link}{suffix}". */
  rating: { title: string; text: string; link: { label: string; href: string }; suffix: string };
  badge: string;
};

export default function ContactInfo({ eyebrow, heading, rows, rating, badge }: ContactInfoProps) {
  return (
    <aside className="info-card reveal reveal-delay-1">
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        <RichText text={heading} />
      </h2>

      {rows.map((row) => (
        <Fragment key={row.title}>
          <div className="row">
            <Icon name={row.icon} />
            <div>
              <strong>{row.title}</strong>
              <p>{row.text}</p>
            </div>
          </div>
          <hr />
        </Fragment>
      ))}

      <div className="row">
        <StarIcon aria-hidden="true" />
        <div>
          <strong>{rating.title}</strong>
          <p>
            {rating.text} <Link href={rating.link.href}>{rating.link.label}</Link>
            {rating.suffix}
          </p>
        </div>
      </div>

      <span className="badge">
        <PhoneSolidIcon />
        {badge}
      </span>
    </aside>
  );
}
