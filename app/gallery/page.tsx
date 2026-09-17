import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Gallery from "@/components/sections/Gallery";
import CtaBanner from "@/components/sections/CtaBanner";
import { galleryContent as content, galleryItems, galleryMeta } from "@/data/gallery";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: galleryMeta.title },
  description: galleryMeta.description,
  alternates: { canonical: "/gallery" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/gallery",
    title: galleryMeta.socialTitle,
    description: galleryMeta.socialDescription,
    images: [galleryMeta.image],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: galleryMeta.socialTitle,
    description: galleryMeta.socialDescription,
    images: [galleryMeta.image],
  },
};

const galleryPageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: galleryMeta.title,
  description: galleryMeta.description,
  url: `${site.url}/gallery`,
  provider: { "@type": "LocalBusiness", "@id": `${site.url}/`, name: site.name },
  image: galleryItems.map((item) => ({
    "@type": "ImageObject",
    contentUrl: `${site.url}${item.src}`,
    name: item.caption,
    description: item.alt,
  })),
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryPageSchema) }}
      />

      <PageHero {...content.hero} />

      <Gallery {...content.gallery} />

      <CtaBanner {...content.cta} />
    </>
  );
}
