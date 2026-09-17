import { serviceTagRows } from "@/data/services";

export default function EveryAngle() {
  return (
    <section className="every-angle">
      <div className="container">
        <h2 className="reveal">
          Every Angle <span className="highlight">Covered</span>
        </h2>
        <div className="every-angle-tags reveal reveal-delay-1">
          {serviceTagRows.map((row) => (
            <ul key={row[0]} className="every-angle-row">
              {row.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
