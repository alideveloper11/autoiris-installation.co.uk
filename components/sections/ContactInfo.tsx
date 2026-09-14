import { Fragment } from "react";
import { Icon, PhoneSolidIcon, StarIcon } from "@/components/icons";
import { infoRows } from "@/data/contact";
import { rating } from "@/data/reviews";
import { site } from "@/data/site";

export default function ContactInfo() {
  return (
    <aside className="info-card reveal reveal-delay-1">
      <span className="eyebrow">Good to know</span>
      <h2>
        Why Call <span style={{ color: "var(--primary)" }}>Auto Iris</span>?
      </h2>

      {infoRows.map((row) => (
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
          <strong>
            {rating.value} Rated ({rating.count} Reviews)
          </strong>
          <p>
            See what our customers say on our{" "}
            <a href={site.yell} target="_blank" rel="noopener">
              Yell page
            </a>
            .
          </p>
        </div>
      </div>

      <span className="badge">
        <PhoneSolidIcon />
        Call {site.phoneDisplay}
      </span>
    </aside>
  );
}
