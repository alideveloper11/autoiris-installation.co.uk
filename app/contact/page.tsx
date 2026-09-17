import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactCards from "@/components/sections/ContactCards";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import Coverage from "@/components/sections/Coverage";
import MapEmbed from "@/components/sections/MapEmbed";
import CtaBanner from "@/components/sections/CtaBanner";
import { contactContent as content, contactMeta } from "@/data/contact";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: contactMeta.title },
  description: contactMeta.description,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/contact",
    title: contactMeta.socialTitle,
    description: contactMeta.socialDescription,
    images: [contactMeta.image],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: contactMeta.socialTitle,
    description: contactMeta.socialDescription,
    images: [contactMeta.image],
  },
};

/** Contact details linked to the site-wide LocalBusiness entry via its @id. */
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: contactMeta.title,
  url: `${site.url}/contact`,
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": `${site.url}/`,
    name: site.name,
    url: `${site.url}/`,
    telephone: site.phoneIntl,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.phoneIntl,
      email: site.email,
      areaServed: "GB",
      availableLanguage: "English",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <PageHero {...content.hero} />

      <section className="section" id="contact">
        <div className="container">
          <ContactCards {...content.cards} />
          <div className="contact-wrap">
            <ContactForm {...content.form} />
            <ContactInfo {...content.info} />
          </div>
        </div>
      </section>

      <Coverage {...content.coverage} />

      <MapEmbed {...content.map} />

      <CtaBanner {...content.cta} />
    </>
  );
}
