import { Stars } from "@/components/icons";
import { CtaButton, type CtaLink } from "@/components/ui/CtaLinks";
import type { Review } from "@/data/reviews";
import RichText from "@/components/ui/RichText";

export type ReviewsProps = {
  eyebrow: string;
  heading?: string;
  /** Score box above the grid; omitted when not supplied. */
  rating?: { score: string; meta: string };
  items: Review[];
  /** Text and button below the grid; omitted when not supplied. */
  more?: { text: string; cta: CtaLink };
  /** Extra class for page-specific variants, e.g. "reviews-grey". */
  className?: string;
};

export default function Reviews({
  eyebrow,
  heading,
  rating,
  items,
  more,
  className,
}: ReviewsProps) {
  return (
    <section className={`section reviews${className ? ` ${className}` : ""}`} id="reviews">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">{eyebrow}</span>
          {heading && (
            <h2 className="reveal">
              <RichText text={heading} />
            </h2>
          )}
        </div>

        {rating && (
          <div className="rating-hero reveal">
            <span className="score">{rating.score}</span>
            <Stars className="hero-stars" />
            <span className="meta">{rating.meta}</span>
          </div>
        )}

        <div className="reviews-grid">
          {items.map((review, index) => (
            <article
              key={review.author + review.date}
              className={`review-card reveal${index % 3 ? ` reveal-delay-${index % 3}` : ""}`}
            >
              <Stars />
              <blockquote>&quot;{review.quote}&quot;</blockquote>
              <div className="who">
                <strong>{review.author}</strong>
                <span>{review.date}</span>
              </div>
            </article>
          ))}
        </div>

        {more && (
          <div className="reviews-footer reveal">
            <p>{more.text}</p>
            <CtaButton cta={more.cta} />
          </div>
        )}
      </div>
    </section>
  );
}
