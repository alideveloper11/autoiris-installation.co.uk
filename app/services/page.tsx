import type { Metadata } from "next";
import FullScreenHero from "@/components/sections/FullScreenHero";
import ServicesList from "@/components/sections/ServicesList";
import EveryAngle from "@/components/sections/EveryAngle";
import CtaBanner from "@/components/sections/CtaBanner";
import WhyChoose from "@/components/sections/WhyChoose";
import HowItWorks from "@/components/sections/HowItWorks";
import ServicesIntro from "@/components/sections/ServicesIntro";
import ServicesQuote from "@/components/sections/ServicesQuote";
import ServicesTrust from "@/components/sections/ServicesTrust";
import Reviews from "@/components/sections/Reviews";
import Faqs from "@/components/sections/Faqs";
import { allServices, servicesContent as content, servicesMeta } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: servicesMeta.title },
  description: servicesMeta.description,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/services",
    title: servicesMeta.socialTitle,
    description: servicesMeta.socialDescription,
    images: [servicesMeta.image],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: servicesMeta.socialTitle,
    description: servicesMeta.socialDescription,
    images: [servicesMeta.image],
  },
};

/** Lists every service page so search engines understand the page structure. */
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${site.name} Security Services`,
  itemListElement: allServices.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `${site.url}/services/${service.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <FullScreenHero {...content.hero} />

      <ServicesList {...content.servicesList} />

      <EveryAngle {...content.everyAngle} />

      <CtaBanner {...content.worriedCta} />

      <WhyChoose {...content.whyChoose} />

      <HowItWorks {...content.howItWorks} />

      <ServicesIntro {...content.securitySolutions} />

      <CtaBanner {...content.secureCta} />

      <ServicesQuote {...content.quote} />

      <ServicesTrust {...content.trust} />

      <Reviews {...content.reviews} />

      <Faqs {...content.faqs} />
    </>
  );
}
