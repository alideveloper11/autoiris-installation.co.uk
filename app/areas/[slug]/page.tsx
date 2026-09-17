import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FullScreenHero from "@/components/sections/FullScreenHero";
import Stats from "@/components/sections/Stats";
import ServicesList from "@/components/sections/ServicesList";
import WhyChoose from "@/components/sections/WhyChoose";
import ServiceProcess from "@/components/sections/ServiceProcess";
import CtaBanner from "@/components/sections/CtaBanner";
import ServicesIntro from "@/components/sections/ServicesIntro";
import Reviews from "@/components/sections/Reviews";
import Faqs from "@/components/sections/Faqs";
import AreaLocation from "@/components/sections/AreaLocation";
import { getAreaDetailContent } from "@/data/areaDetail";
import { getServiceArea, serviceAreas } from "@/data/areas";
import { site } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

/** Only the areas in data/areas.ts exist; anything else 404s. */
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) return {};
  const { hero, meta } = getAreaDetailContent(area);
  const heroImage = hero.image;
  const { description } = meta;

  const url = `/areas/${area.slug}`;

  return {
    title: { absolute: meta.title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.name,
      url,
      title: meta.title,
      description,
      images: [heroImage],
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description,
      images: [heroImage],
    },
  };
}

export default async function AreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();
  const content = getAreaDetailContent(area);

  const place = `${area.name}, ${area.region}`;

  const areaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Security installation in ${place}`,
    description: content.meta.description,
    serviceType: "CCTV, intruder alarm and access control installation",
    url: `${site.url}/areas/${area.slug}`,
    areaServed: { "@type": "Place", name: place },
    provider: { "@type": "LocalBusiness", "@id": `${site.url}/`, name: site.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />

      <FullScreenHero {...content.hero} />

      <Stats {...content.stats} />

      <ServicesList {...content.services} />

      <WhyChoose {...content.propertyTypes} />

      <ServiceProcess {...content.process} />

      <CtaBanner {...content.secureCta} />

      <ServicesIntro {...content.securitySolutions} />

      <CtaBanner {...content.worriedCta} />

      <Reviews {...content.reviews} />

      <Faqs {...content.faqs} />

      <AreaLocation {...content.location} />
    </>
  );
}
