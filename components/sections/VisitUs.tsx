import { mapEmbedSrc } from "@/data/contact";
import { openingHours, site } from "@/data/site";

type HoursRow = { days: string; hours: string };

/** Collapses consecutive days with the same hours into one row, e.g. "Mon - Sat". */
function groupOpeningHours(): HoursRow[] {
  const groups: { first: string; last: string; hours: string }[] = [];
  for (const { day, hours } of openingHours) {
    const current = groups.at(-1);
    if (current && current.hours === hours) current.last = day;
    else groups.push({ first: day, last: day, hours });
  }
  return groups.map(({ first, last, hours }) => ({
    days: first === last ? first : `${first.slice(0, 3)} - ${last.slice(0, 3)}`,
    hours,
  }));
}

export default function VisitUs() {
  return (
    <section className="section visit-us" id="visit-us">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">Visit Us</span>
        </div>

        <div className="visit-us-grid">
          <div className="visit-us-info reveal">
            <span className="eyebrow eyebrow-both">Timing</span>
            <ul className="visit-us-hours">
              {groupOpeningHours().map((row) => (
                <li key={row.days}>
                  {row.days} | <span className="highlight">{row.hours}</span>
                </li>
              ))}
            </ul>

            <span className="eyebrow eyebrow-both">Location</span>
            <address className="visit-us-address">
              {site.address.street}, {site.address.locality},{" "}
              <span className="highlight">{site.address.postalCode}</span>
            </address>
          </div>

          <div className="visit-us-map reveal reveal-delay-1">
            <iframe
              title={`${site.name} location map`}
              src={mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
