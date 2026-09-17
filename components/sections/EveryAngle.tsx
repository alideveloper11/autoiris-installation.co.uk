import RichText from "@/components/ui/RichText";

export type EveryAngleProps = {
  heading: string;
  /** One array per desktop row. */
  rows: string[][];
};

export default function EveryAngle({ heading, rows }: EveryAngleProps) {
  return (
    <section className="every-angle">
      <div className="container">
        <h2 className="reveal">
          <RichText text={heading} />
        </h2>
        <div className="every-angle-tags reveal reveal-delay-1">
          {rows.map((row) => (
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
