import type { Metadata } from "next";
import FullScreenHero from "@/components/sections/FullScreenHero";
import Stats from "@/components/sections/Stats";
import AboutWhoWeAre from "@/components/sections/AboutWhoWeAre";
import WhyChoose from "@/components/sections/WhyChoose";
import AboutOneTeam from "@/components/sections/AboutOneTeam";
import CtaBanner from "@/components/sections/CtaBanner";
import EveryAngle from "@/components/sections/EveryAngle";
import ServicesIntro from "@/components/sections/ServicesIntro";
import Coverage from "@/components/sections/Coverage";
import Reviews from "@/components/sections/Reviews";
import Faqs from "@/components/sections/Faqs";
import { aboutContent as content, aboutMeta } from "@/data/about";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: aboutMeta.title },
  description: aboutMeta.description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/about",
    title: aboutMeta.socialTitle,
    description: aboutMeta.socialDescription,
    images: [aboutMeta.image],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: aboutMeta.socialTitle,
    description: aboutMeta.socialDescription,
    images: [aboutMeta.image],
  },
};

/** Describes the page as the company's About page. */
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: aboutMeta.title,
  url: `${site.url}/about`,
  mainEntity: { "@type": "LocalBusiness", "@id": `${site.url}/`, name: site.name },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <FullScreenHero {...content.hero} />

      <Stats {...content.stats} />

      <AboutWhoWeAre {...content.whoWeAre} />

      <WhyChoose {...content.values} />

      <AboutOneTeam {...content.oneTeam} />

      <CtaBanner {...content.localTeamCta} />

      <EveryAngle {...content.everyAngle} />

      <ServicesIntro {...content.localKnowledge} />

      <Coverage {...content.coverage} />

      <Reviews {...content.reviews} />

      <Faqs {...content.faqs} />
    </>
  );
}
