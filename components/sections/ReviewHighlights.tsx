import { Icon } from "@/components/icons";
import { reviewHighlights } from "@/data/reviews";

export default function ReviewHighlights() {
  return (
    <section className="section" id="highlights">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">What Stands Out</span>
          <h2 className="reveal">
            What Our Customers <span className="highlight">Mention Most</span>
          </h2>
          <p className="lead reveal">
            The same things come up again and again in our reviews, in our customers&apos;
            own words.
          </p>
        </div>

        <div className="contact-cards review-highlights">
          {reviewHighlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className={`contact-card reveal${index ? ` reveal-delay-${index}` : ""}`}
            >
              <div className="icon">
                <Icon name={highlight.icon} />
              </div>
              <h3>{highlight.title}</h3>
              <blockquote>&quot;{highlight.quote}&quot;</blockquote>
              <cite>{highlight.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
