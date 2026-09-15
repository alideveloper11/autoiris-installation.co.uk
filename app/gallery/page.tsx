import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Gallery from "@/components/sections/Gallery";
import CtaBanner from "@/components/sections/CtaBanner";
import { galleryItems } from "@/data/gallery";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Work Gallery | CCTV, Alarm & Access Control Installations",
  description:
    "Browse photos of recent Auto Iris Installations projects: domestic and commercial CCTV, intruder alarms, access control and door entry installs across London, Essex, Kent & beyond.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/gallery",
    title: "Our Work Gallery | Auto Iris Installations",
    description:
      "Photos of recent CCTV, intruder alarm and access control installations by Auto Iris Installations.",
    images: [site.heroImage],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work Gallery | Auto Iris Installations",
    description: "Recent CCTV, alarm and access control installations across London and beyond.",
    images: [site.heroImage],
  },
};

const galleryPageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: `${site.name} Work Gallery`,
  url: `${site.url}/gallery`,
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

      <PageHero
        breadcrumb="Gallery"
        heading={
          <>
            Our Work, <span className="highlight">Up Close</span>
          </>
        }
        text="Real installations by our own engineers, from domestic CCTV and alarms to commercial door entry and 2 AM emergency callouts. Tap any photo to enlarge."
        image="/images/weatherproof-installation.jpeg"
      />

      <Gallery withHeading={false} />

      <CtaBanner
        heading="Like What You See?"
        text="Get the same neat, reliable installation at your home or business. Free, no-obligation quotes."
        actions={
          <>
            <Link href="/contact" className="btn btn-dark btn-lg">
              Get a Free Quote
            </Link>
            <a href={site.whatsapp} className="btn btn-outline btn-lg">
              WhatsApp Us
            </a>
          </>
        }
      />
    </>
  );
}
