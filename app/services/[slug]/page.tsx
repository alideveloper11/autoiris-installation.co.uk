import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CenteredHero from "@/components/sections/CenteredHero";
import Stats from "@/components/sections/Stats";
import ServiceFeatures from "@/components/sections/ServiceFeatures";
import WhyChoose from "@/components/sections/WhyChoose";
import ServiceProcess from "@/components/sections/ServiceProcess";
import ServicesCta from "@/components/sections/ServicesCta";
import ServiceQuoteForm from "@/components/sections/ServiceQuoteForm";
import ServicesWhyChoose from "@/components/sections/ServicesWhyChoose";
import ServicesIntro from "@/components/sections/ServicesIntro";
import Gallery from "@/components/sections/Gallery";
import { galleryItems, homeGalleryLimit } from "@/data/gallery";
import Reviews from "@/components/sections/Reviews";
import Faqs from "@/components/sections/Faqs";
import { allServices, securitySolutionsParagraphs } from "@/data/services";
import { getServiceDetail, propertyTypes, serviceHeroTrust } from "@/data/serviceDetails";
import { site } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

/** Only the slugs in data/services.ts exist; anything else 404s. */
export const dynamicParams = false;

export function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return {};

  const url = `/services/${service.slug}`;
  const title = `${service.title} | London, Essex & Kent`;

  return {
    title,
    description: service.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.name,
      url,
      title: `${service.title} | ${site.name}`,
      description: service.description,
      images: [service.hero.image],
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${site.name}`,
      description: service.description,
      images: [service.hero.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${site.url}/services/${service.slug}`,
    areaServed: site.areaServed,
    provider: { "@type": "LocalBusiness", "@id": `${site.url}/`, name: site.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <CenteredHero {...service.hero} trust={serviceHeroTrust} />

      <Stats />

      {service.features && <ServiceFeatures content={service.features} />}

      <WhyChoose
        id="property-types"
        eyebrow="Protection For Every Property"
        heading="Built For Real Life"
        items={propertyTypes}
      />

      {service.process && <ServiceProcess content={service.process} />}

      <ServicesCta variant="outline" />

      <ServiceQuoteForm service={service.title} />

      <ServicesWhyChoose />

      <ServicesIntro
        id="local-knowledge"
        eyebrow="Protection You Can Trust"
        heading={
          <>
            Local Knowledge.
            <br />
            Professional Results.
          </>
        }
        paragraphs={securitySolutionsParagraphs}
      />

      <Gallery className="gallery-spaced" items={galleryItems.slice(0, homeGalleryLimit)} />

      <Reviews className="reviews-grey" showSummary={false} showMoreLink={false} />

      <Faqs />
    </>
  );
}
