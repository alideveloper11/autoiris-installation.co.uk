export type AreasHighlightsProps = { items: string[] };

export default function AreasHighlights({ items }: AreasHighlightsProps) {
  return (
    <section className="areas-highlights">
      <div className="container">
        <ul className="areas-highlights-list reveal">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
