import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Stats from "@/components/sections/Stats";
import Reviews from "@/components/sections/Reviews";
import ReviewHighlights from "@/components/sections/ReviewHighlights";
import CtaBanner from "@/components/sections/CtaBanner";
import { rating, reviews, reviewsContent as content, reviewsMeta } from "@/data/reviews";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: reviewsMeta.title },
  description: reviewsMeta.description,
  alternates: { canonical: "/reviews" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/reviews",
    title: reviewsMeta.socialTitle,
    description: reviewsMeta.socialDescription,
    images: [reviewsMeta.image],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: reviewsMeta.socialTitle,
    description: reviewsMeta.socialDescription,
    images: [reviewsMeta.image],
  },
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Converts a display date like "24 Mar 2025" to "2025-03-24" for structured data. */
function toIsoDate(date: string) {
  const [day, month, year] = date.split(" ");
  return `${year}-${String(MONTHS.indexOf(month) + 1).padStart(2, "0")}-${day.padStart(2, "0")}`;
}

const reviewsPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: reviewsMeta.title,
  url: `${site.url}/reviews`,
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": `${site.url}/`,
    name: site.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.value,
      reviewCount: String(rating.count),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.author },
      datePublished: toIsoDate(review.date),
      reviewBody: review.quote,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    })),
  },
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsPageSchema) }}
      />

      <PageHero {...content.hero} />

      <Stats {...content.stats} />

      <Reviews {...content.reviews} />

      <ReviewHighlights {...content.highlights} />

      <CtaBanner {...content.cta} />
    </>
  );
}
