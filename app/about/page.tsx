import type { Metadata } from "next";
import CenteredHero, { type HeroTrustItem } from "@/components/sections/CenteredHero";
import Stats from "@/components/sections/Stats";
import AboutWhoWeAre from "@/components/sections/AboutWhoWeAre";
import AboutOneTeam from "@/components/sections/AboutOneTeam";
import EveryAngle from "@/components/sections/EveryAngle";
import ServicesCta from "@/components/sections/ServicesCta";
import ServicesIntro from "@/components/sections/ServicesIntro";
import Coverage from "@/components/sections/Coverage";
import Reviews from "@/components/sections/Reviews";
import Faqs from "@/components/sections/Faqs";
import { securitySolutionsParagraphs } from "@/data/services";
import WhyChoose from "@/components/sections/WhyChoose";
import { aboutValues } from "@/data/about";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us | Local CCTV, Alarm & Access Control Installers",
  description:
    "Auto Iris Installations provides dependable CCTV, intruder alarms, access control, door entry, aerial and satellite services for homes and businesses across East London, Essex and surrounding areas.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/about",
    title: "About Auto Iris Installations | Security Installed With Care",
    description:
      "Local, fully insured security installers covering East London, Essex and surrounding areas.",
    images: [site.heroImage],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Auto Iris Installations",
    description: "Security installed with care across East London, Essex and beyond.",
    images: [site.heroImage],
  },
};

const aboutHeroTrust: HeroTrustItem[] = [
  { icon: "shieldCheck", label: "Local Team" },
  { icon: "fastForward", label: "Fast Response" },
  { icon: "lock", label: "Fully Insured" },
];

export default function AboutPage() {
  return (
    <>
      <CenteredHero
        eyebrow="About Auto Iris"
        heading="Security Installed"
        highlightPrefix="With"
        highlight="Care."
        text="Auto Iris Installations provides dependable CCTV, intruder alarms, access control, door entry, aerial and satellite services for homes and businesses across East London, Essex and surrounding areas."
        image="/images/about-hero.jpg"
        trust={aboutHeroTrust}
      />

      <Stats />

      <AboutWhoWeAre />

      <WhyChoose
        id="values"
        className="why-choose-grey"
        eyebrow="What We Stand For"
        heading="Simple, Reliable, Professional"
        items={aboutValues}
      />

      <AboutOneTeam />

      <ServicesCta variant="outline" />

      <EveryAngle />

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

      <Coverage id="coverage" />

      <Reviews className="reviews-grey" showSummary={false} showMoreLink={false} />

      <Faqs />
    </>
  );
}
