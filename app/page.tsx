import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Coverage from "@/components/sections/Coverage";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import CtaBanner from "@/components/sections/CtaBanner";
import { homeGalleryLimit } from "@/data/gallery";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Coverage id="coverage" />
      <Gallery limit={homeGalleryLimit} />
      <Reviews />
      <CtaBanner />
    </>
  );
}
