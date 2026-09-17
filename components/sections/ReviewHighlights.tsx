import { Icon } from "@/components/icons";
import type { ReviewHighlight } from "@/data/reviews";
import type { SectionHead } from "./types";
import RichText from "@/components/ui/RichText";

export type ReviewHighlightsProps = SectionHead & { items: ReviewHighlight[] };

export default function ReviewHighlights({ eyebrow, heading, text, items }: ReviewHighlightsProps) {
  return (
    <section className="section" id="highlights">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">{eyebrow}</span>
          <h2 className="reveal">
            <RichText text={heading} />
          </h2>
          {text && <p className="lead reveal">{text}</p>}
        </div>

        <div className="contact-cards review-highlights">
          {items.map((highlight, index) => (
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
