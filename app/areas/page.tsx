import type { Metadata } from "next";
import FullScreenHero from "@/components/sections/FullScreenHero";
import AreasHighlights from "@/components/sections/AreasHighlights";
import ServiceFeatures from "@/components/sections/ServiceFeatures";
import AreasGrid from "@/components/sections/AreasGrid";
import AboutOneTeam from "@/components/sections/AboutOneTeam";
import ServicesIntro from "@/components/sections/ServicesIntro";
import WhyChoose from "@/components/sections/WhyChoose";
import CtaBanner from "@/components/sections/CtaBanner";
import Reviews from "@/components/sections/Reviews";
import Faqs from "@/components/sections/Faqs";
import { areasContent as content, areasMeta, serviceAreas } from "@/data/areas";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: areasMeta.title },
  description: areasMeta.description,
  alternates: { canonical: "/areas" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/areas",
    title: areasMeta.socialTitle,
    description: areasMeta.socialDescription,
    images: [areasMeta.image],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: areasMeta.socialTitle,
    description: areasMeta.socialDescription,
    images: [areasMeta.image],
  },
};

/** Lists every area page so search engines can find and understand them. */
const areasSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Areas covered by ${site.name}`,
  itemListElement: serviceAreas.map((area, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: `${area.name}, ${area.region}`,
    url: `${site.url}/areas/${area.slug}`,
  })),
};

export default function AreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areasSchema) }}
      />

      <FullScreenHero {...content.hero} />

      <AreasHighlights {...content.highlights} />

      <ServiceFeatures {...content.features} />

      <AreasGrid {...content.areasGrid} />

      <AboutOneTeam {...content.oneTeam} />

      <ServicesIntro {...content.securitySolutions} />

      <WhyChoose {...content.whyChoose} />

      <ServicesIntro {...content.localKnowledge} />

      <CtaBanner {...content.worriedCta} />

      <Reviews {...content.reviews} />

      <Faqs {...content.faqs} />
    </>
  );
}
