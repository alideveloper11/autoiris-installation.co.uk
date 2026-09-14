import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactCards from "@/components/sections/ContactCards";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import Coverage from "@/components/sections/Coverage";
import MapEmbed from "@/components/sections/MapEmbed";
import CtaBanner from "@/components/sections/CtaBanner";
import { contactCoveragePlaces } from "@/data/contact";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title:
    "Contact Auto Iris Installations | Free CCTV, Alarm & Access Control Quotes in Barking",
  description:
    "Contact Auto Iris Installations for CCTV, intruder alarms and access control quotes. Call 07523 521215 or email info.autoiris@gmail.com. 24/7 emergency callouts across London, Essex, Kent & beyond.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/contact",
    title: "Contact Auto Iris Installations | Free Quotes",
    description:
      "Request a free quote for CCTV, intruder alarms and access control. Call 07523 521215. 24/7 emergency callouts across London and beyond.",
    images: [site.heroImage],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Auto Iris Installations | Free Quotes",
    description:
      "CCTV, intruder alarms and access control quotes. Call 07523 521215. 24/7 service.",
    images: [site.heroImage],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${site.name}`,
  url: `${site.url}/contact`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: site.name,
    url: `${site.url}/`,
    image: `${site.url}${site.heroImage}`,
    telephone: site.phoneIntl,
    email: site.email,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    openingHours: ["Mo-Sa 00:00-24:00"],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <PageHero
        breadcrumb="Contact"
        heading={
          <>
            Get In Touch For A <span className="highlight">Free Quote</span>
          </>
        }
        text="Fast, friendly and honest. Tell us what you need and we'll come back to you with everything you need to know. Emergency callouts available 24/7."
        image="/images/commercial-office-installation.jpeg"
      />

      <section className="section" id="contact">
        <div className="container">
          <ContactCards />
          <div className="contact-wrap">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <Coverage
        eyebrow="Areas We Cover"
        heading={
          <>
            Based in Barking. <span className="highlight">We Come To You.</span>
          </>
        }
        body={
          <p>
            Don&apos;t worry if your postcode isn&apos;t listed. Get in touch. If you can
            see it, we can probably get to it. We routinely travel across the south east and
            beyond.
          </p>
        }
        places={contactCoveragePlaces}
        ctaLabel=""
        ctaHref=""
      />

      <MapEmbed />

      <CtaBanner
        heading="Ready When You Are."
        text="One quick call is all it takes to start protecting what matters."
        showPhone={false}
        actions={
          <>
            <a href={site.phoneHref} className="btn btn-dark btn-lg">
              Call {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="btn btn-outline btn-lg">
              Email Us
            </a>
          </>
        }
      />
    </>
  );
}
