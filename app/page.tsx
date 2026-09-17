import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Coverage from "@/components/sections/Coverage";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import VisitUs from "@/components/sections/VisitUs";
import CtaBanner from "@/components/sections/CtaBanner";
import { homeContent as content, homeMeta } from "@/data/home";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: homeMeta.title },
  description: homeMeta.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/",
    title: homeMeta.socialTitle,
    description: homeMeta.socialDescription,
    images: [site.heroImage],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: homeMeta.socialTitle,
    description: homeMeta.socialDescription,
    images: [site.heroImage],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero {...content.hero} />
      <Stats {...content.stats} />
      <About {...content.about} />
      <Services {...content.services} />
      <Coverage {...content.coverage} />
      <Gallery {...content.gallery} />
      <Reviews {...content.reviews} />
      <VisitUs {...content.visitUs} />
      <CtaBanner {...content.cta} />
    </>
  );
}
