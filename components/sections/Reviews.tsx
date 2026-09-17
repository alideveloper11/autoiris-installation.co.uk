import Link from "next/link";
import { Stars } from "@/components/icons";
import { rating, reviews as allReviews, type Review } from "@/data/reviews";

type ReviewsProps = {
  items?: Review[];
  /** The "Read More Reviews" link below the grid; hidden on the reviews page itself. */
  showMoreLink?: boolean;
  /** The heading and rating summary above the grid; the eyebrow always shows. */
  showSummary?: boolean;
  /** Extra class for page-specific variants, e.g. "reviews-grey". */
  className?: string;
};

export default function Reviews({
  items = allReviews,
  showMoreLink = true,
  showSummary = true,
  className,
}: ReviewsProps) {
  return (
    <section className={`section reviews${className ? ` ${className}` : ""}`} id="reviews">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow reveal">Reviews</span>
          {showSummary && (
            <h2 className="reveal">
              Rated <span className="highlight">{rating.value} out of 5</span> By Our Customers
            </h2>
          )}
        </div>

        {showSummary && (
          <div className="rating-hero reveal">
            <span className="score">{rating.value}</span>
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

        {showMoreLink && (
          <div className="reviews-footer reveal">
            <p>See why {rating.count} customers rate us five stars.</p>
            <Link href="/reviews" className="btn btn-dark">
              Read More Reviews
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
