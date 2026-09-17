import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Stats from "@/components/sections/Stats";
import Reviews from "@/components/sections/Reviews";
import ReviewHighlights from "@/components/sections/ReviewHighlights";
import CtaBanner from "@/components/sections/CtaBanner";
import { rating, reviews } from "@/data/reviews";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Customer Reviews | Rated ${rating.value} From ${rating.count} Reviews`,
  description: `Read what customers say about Auto Iris Installations. Rated ${rating.value} out of 5 from ${rating.count} verified reviews for CCTV, intruder alarm and access control installations across London and beyond.`,
  alternates: { canonical: "/reviews" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/reviews",
    title: `Customer Reviews | Rated ${rating.value} | Auto Iris Installations`,
    description: `Rated ${rating.value} out of 5 from ${rating.count} verified reviews. See why customers recommend Auto Iris Installations.`,
    images: [site.heroImage],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `Customer Reviews | Rated ${rating.value} | Auto Iris Installations`,
    description: `${rating.count} verified reviews for CCTV, alarm and access control installs.`,
    images: [site.heroImage],
  },
};

const reviewsPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${site.name} Customer Reviews`,
  url: `${site.url}/reviews`,
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": `${site.url}/`,
    name: site.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.value,
      reviewCount: String(rating.count),
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.author },
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

      <PageHero
        breadcrumb="Reviews"
        heading={
          <>
            Don&apos;t Just Take <span className="highlight">Our Word</span> For It
          </>
        }
        text={`Rated ${rating.value} out of 5 from ${rating.count} verified reviews. Here's what homeowners and businesses say about working with us.`}
        image="/images/supermarket-ceiling-dome-camera.jpeg"
      />

      <Stats />

      <Reviews showMoreLink={false} />

      <ReviewHighlights />

      <CtaBanner
        heading={`Join ${rating.count}+ Happy Customers.`}
        text="Get the same professional, tidy installation at your home or business. Free, no-obligation quotes."
        actions={
          <>
            <Link href="/contact" className="btn btn-dark btn-lg">
              Get a Free Quote
            </Link>
            <a href={site.whatsapp} className="btn btn-outline btn-lg">
              WhatsApp Us
            </a>
          </>
        }
      />
    </>
  );
}
