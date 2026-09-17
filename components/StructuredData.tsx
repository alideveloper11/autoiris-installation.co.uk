import { site } from "@/data/site";
import { rating } from "@/data/reviews";
import { allServices } from "@/data/services";

/** LocalBusiness schema, emitted once from the root layout. */
export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/`,
    name: site.name,
    legalName: site.legalName,
    image: `${site.url}${site.heroImage}`,
    logo: `${site.url}${site.logo}`,
    url: `${site.url}/`,
    telephone: site.phoneIntl,
    email: site.email,
    priceRange: "££",
    description:
      "Professional CCTV, intruder alarm and access control installation for homes and businesses across London, Essex, Kent and beyond.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: site.areaServed,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.value,
      reviewCount: String(rating.count),
    },
    makesOffer: allServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `${site.url}/services/${service.slug}`,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
