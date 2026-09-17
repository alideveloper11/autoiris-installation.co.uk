export type VisitUsProps = {
  eyebrow: string;
  hoursLabel: string;
  hours: { days: string; hours: string }[];
  locationLabel: string;
  /** `highlight` is shown in orange after `text`, e.g. the postcode. */
  address: { text: string; highlight: string };
  map: { src: string; title: string };
};

export default function VisitUs({
  eyebrow,
  hoursLabel,
  hours,
  locationLabel,
  address,
  map,
}: VisitUsProps) {
  return (
    <section className="section visit-us" id="visit-us">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">{eyebrow}</span>
        </div>

        <div className="visit-us-grid">
          <div className="visit-us-info reveal">
            <span className="eyebrow eyebrow-both">{hoursLabel}</span>
            <ul className="visit-us-hours">
              {hours.map((row) => (
                <li key={row.days}>
                  {row.days} | <span className="highlight">{row.hours}</span>
                </li>
              ))}
            </ul>

            <span className="eyebrow eyebrow-both">{locationLabel}</span>
            <address className="visit-us-address">
              {address.text} <span className="highlight">{address.highlight}</span>
            </address>
          </div>

          <div className="visit-us-map reveal reveal-delay-1">
            <iframe
              title={map.title}
              src={map.src}
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
