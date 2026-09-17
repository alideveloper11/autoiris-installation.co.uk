import type { Metadata } from "next";
import CenteredHero from "@/components/sections/CenteredHero";
import ServicesList from "@/components/sections/ServicesList";
import EveryAngle from "@/components/sections/EveryAngle";
import ServicesCta from "@/components/sections/ServicesCta";
import ServicesWhyChoose from "@/components/sections/ServicesWhyChoose";
import HowItWorks from "@/components/sections/HowItWorks";
import ServicesIntro from "@/components/sections/ServicesIntro";
import { securitySolutionsParagraphs } from "@/data/services";
import ServicesQuote from "@/components/sections/ServicesQuote";
import ServicesTrust from "@/components/sections/ServicesTrust";
import Reviews from "@/components/sections/Reviews";
import Faqs from "@/components/sections/Faqs";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Services | CCTV, Intruder Alarms & Access Control Installation",
  description:
    "CCTV installation, intruder alarms, access control and door entry systems, supplied and fitted by a certified professional. Serving homes and businesses across London, Essex, Kent & beyond.",
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/services",
    title: "Our Services | Auto Iris Installations",
    description:
      "Security systems, supplied and fitted. CCTV, intruder alarms, access control and door entry for homes and businesses.",
    images: [site.heroImage],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Auto Iris Installations",
    description: "CCTV, intruder alarms, access control and door entry, supplied and fitted.",
    images: [site.heroImage],
  },
};

export default function ServicesPage() {
  return (
    <>
      <CenteredHero
        eyebrow="Our Services"
        heading="Security Systems,"
        highlight="Supplied & Fitted"
        text="Everything you need to protect and secure your home or business, installed by a certified professional"
        image="/images/services-hero.jpg"
      />

      <ServicesList />

      <EveryAngle />

      <ServicesCta variant="flat" />

      <ServicesWhyChoose />

      <HowItWorks />

      <ServicesIntro
        heading="Professional Security Solutions For Homes And Businesses"
        paragraphs={securitySolutionsParagraphs}
      />

      <ServicesCta variant="outline" />

      <ServicesQuote />

      <ServicesTrust />

      <Reviews className="reviews-grey" showSummary={false} showMoreLink={false} />

      <Faqs />
    </>
  );
}
