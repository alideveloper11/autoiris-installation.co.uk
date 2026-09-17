import type { AboutOneTeamProps } from "@/components/sections/AboutOneTeam";
import type { AreasGridProps } from "@/components/sections/AreasGrid";
import type { AreasHighlightsProps } from "@/components/sections/AreasHighlights";
import type { CtaBannerProps } from "@/components/sections/CtaBanner";
import type { FaqsProps } from "@/components/sections/Faqs";
import type { FullScreenHeroProps } from "@/components/sections/FullScreenHero";
import type { ReviewsProps } from "@/components/sections/Reviews";
import type { ServiceFeaturesProps } from "@/components/sections/ServiceFeatures";
import type { ServicesIntroProps } from "@/components/sections/ServicesIntro";
import type { WhyChooseProps } from "@/components/sections/WhyChoose";
import type { CtaLink } from "@/components/ui/CtaLinks";
import { rating, reviews as reviewItems } from "./reviews";
import { allServices } from "./services";
import { site } from "./site";

export type ServiceArea = {
  /** URL segment for the area page, e.g. /areas/grays. */
  slug: string;
  name: string;
  region: "East London" | "Essex";
  /** Google Maps search, when "name, London/Essex, UK" would find the wrong place. */
  mapQuery?: string;
};

/** Towns and districts we cover; each gets an /areas/[slug] page. */
export const serviceAreas: ServiceArea[] = [
  { slug: "barking", name: "Barking", region: "East London" },
  { slug: "ilford", name: "Ilford", region: "East London" },
  { slug: "stratford", name: "Stratford", region: "East London" },
  {
    slug: "east-ham-beckton",
    name: "East Ham & Beckton",
    region: "East London",
    mapQuery: "East Ham, London, UK",
  },
  { slug: "thurrock", name: "Thurrock", region: "Essex" },
  { slug: "grays", name: "Grays", region: "Essex" },
  { slug: "upminster", name: "Upminster", region: "Essex" },
  { slug: "orsett", name: "Orsett", region: "Essex" },
  { slug: "dagenham", name: "Dagenham", region: "East London" },
  { slug: "romford", name: "Romford", region: "East London" },
  { slug: "hornchurch", name: "Hornchurch", region: "East London" },
  { slug: "chadwell-heath", name: "Chadwell Heath", region: "East London" },
  { slug: "canning-town", name: "Canning Town", region: "East London" },
  { slug: "forest-gate", name: "Forest Gate", region: "East London" },
  { slug: "leytonstone", name: "Leytonstone", region: "East London" },
  { slug: "walthamstow", name: "Walthamstow", region: "East London" },
  { slug: "tilbury", name: "Tilbury", region: "Essex" },
  { slug: "south-ockendon", name: "South Ockendon", region: "Essex" },
  { slug: "brentwood", name: "Brentwood", region: "Essex" },
  { slug: "basildon", name: "Basildon", region: "Essex" },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

/* Areas page content. Headings: "[words]" are highlighted, "\n" starts a new line. */

/** Page title and description for search results and link previews. */
export const areasMeta = {
  title: "Areas We Cover in East London & Essex | Auto Iris",
  description:
    "Local CCTV, intruder alarm and access control installers covering Barking, Ilford, Romford, Stratford, Grays and more across East London & Essex.",
  socialTitle: "Security Installers Covering East London & Essex",
  socialDescription: `CCTV, alarm and access control installation in ${serviceAreas.length} towns and districts across East London and Essex.`,
  image: "/images/areas-hero.jpg",
};

const callCta: CtaLink = {
  label: `Call ${site.phoneDisplay}`,
  href: site.phoneHref,
  variant: "primary",
  icon: "phoneSolid",
};
const quoteCta: CtaLink = { label: "Request a Quote", href: "/contact", variant: "black" };
const whatsappCta: CtaLink = {
  label: "WhatsApp Us",
  href: site.whatsapp,
  variant: "whatsapp",
  icon: "whatsapp",
};

const hero: FullScreenHeroProps = {
  align: "left",
  eyebrow: "Areas We Cover",
  heading: "Security Installers Across\n[East London & Essex]",
  text: `CCTV, intruder alarm, access control, door entry, aerial and satellite installation for homes and businesses in ${serviceAreas.length} towns and districts across East London and Essex, from Barking and Ilford to Grays and Basildon.`,
  image: areasMeta.image,
  ctas: [callCta, quoteCta],
};

const highlights: AreasHighlightsProps = {
  items: [
    `${serviceAreas.length}+ Areas Covered`,
    "24/7 Emergency Callouts",
    `${allServices.length} Security Services`,
    "Fast Local Response",
  ],
};

const features: ServiceFeaturesProps = {
  eyebrow: "Local Service",
  heading: "Security Installation Services Near You",
  text: "Wherever you are in East London or Essex, the same local team surveys your property, installs your CCTV, alarm or access control system and keeps it running.",
  linkLabel: "Learn More",
  items: [
    {
      icon: "mapPin",
      title: "Local Site Surveys",
      text: "Our engineers visit your home or business to plan the right security system for the space.",
      href: "/contact",
    },
    {
      icon: "badgeCheck",
      title: "Certified Local Installers",
      text: "Hikvision certified and Pyronix trained engineers based in Barking.",
      href: "/about",
    },
    {
      icon: "wrench",
      title: "Maintenance & Repairs",
      text: "Servicing, fault-finding and 24/7 emergency callouts across every area we cover.",
      href: "/services/maintenance",
    },
  ],
};

const areasGrid: AreasGridProps = {
  eyebrow: "Find Your Area",
  heading: "Areas We Serve In [East London & Essex]",
  text: "Select your town or district to see the CCTV, alarm and access control services available locally.",
  areas: serviceAreas,
  linkLabel: "View Area",
};

const oneTeam: AboutOneTeamProps = {
  heading: "One Local Team For Every Area",
  text: "Whether you're in Stratford, Romford or Thurrock, the same engineers survey your property, install your system and maintain it afterwards, so you always know who is looking after your security.",
  steps: ["Survey", "Install", "Maintain"],
};

const securitySolutions: ServicesIntroProps = {
  heading: "Security Systems For East London Homes And Businesses",
  paragraphs: [
    "East London's mix of terraced homes, flats, shops, warehouses and industrial estates needs security that fits each property. We install HD CCTV, wired and wireless intruder alarms, keyless access control and video door entry for homeowners, landlords and businesses from Barking and Dagenham to Stratford, Canning Town and Walthamstow.",
    "Every system is planned around how the building is used, fitted neatly by our own engineers and backed by a minimum 12-month guarantee, with remote viewing and app control set up wherever your system supports it.",
  ],
};

const whyChoose: WhyChooseProps = {
  eyebrow: "Why Choose Us",
  heading: "Why Local Customers Choose [Auto Iris]",
  text: "Homeowners and businesses across East London and Essex choose us for honest advice, tidy installations and a local team that responds quickly when it matters.",
  items: [
    {
      icon: "mapPin",
      title: "Based In Barking",
      text: "A local team close to customers across East London and Essex",
    },
    {
      icon: "fastForward",
      title: "Quick Response",
      text: "24/7 emergency callouts across the areas we cover",
    },
    {
      icon: "badgeCheck",
      title: "Certified Engineers",
      text: "Hikvision certified and Pyronix trained installers",
    },
    {
      icon: "star",
      title: `${rating.value} Rated`,
      text: `Rated ${rating.value} out of 5 from ${rating.count} customer reviews`,
    },
  ],
};

const localKnowledge: ServicesIntroProps = {
  id: "essex-coverage",
  eyebrow: "Covering Essex Too",
  heading: "Local Security Installers\nAcross Essex",
  paragraphs: [
    "Beyond East London, we install and maintain security systems across Essex, including Thurrock, Grays, Tilbury, South Ockendon, Upminster, Orsett, Brentwood and Basildon, for homes, commercial units, warehouses and construction sites.",
    "Larger properties can combine CCTV, intruder alarms and access control into one system, with remote viewing so you can check on your property from anywhere. Get in touch for honest advice and a free quote.",
  ],
};

const worriedCta: CtaBannerProps = {
  className: "cta-banner-flat",
  heading: "Need Security In\nYour Area?",
  text: "Tell us where you are and what you need protecting. Free, no-obligation quotes and 24/7 emergency callouts across East London and Essex.",
  ctas: [whatsappCta, quoteCta],
};

const reviews: ReviewsProps = {
  className: "reviews-grey",
  eyebrow: "Reviews From Local Customers",
  items: reviewItems,
};

const faqs: FaqsProps = {
  eyebrow: "Area Questions",
  heading: "Areas We Cover: FAQs",
  items: [
    {
      question: "Which towns and districts do you cover?",
      answer: `We cover ${serviceAreas.length} towns and districts across East London and Essex, including Barking, Ilford, Stratford, Romford, Grays and Basildon, and travel further across London, Kent and the South East for larger projects.`,
    },
    {
      question: "Is my area covered if it isn't listed?",
      answer:
        "Probably. The towns listed are where we work most often, but our engineers travel across London, Essex, Kent and beyond. Call or message us with your postcode to check.",
    },
    {
      question: "How quickly can you get to me?",
      answer:
        "Being based in Barking means we can reach most of East London and Essex quickly, and emergency callouts are available 24 hours a day, 7 days a week.",
    },
    {
      question: "Do you work with homes and businesses in every area?",
      answer:
        "Yes. In every area we cover, we install and maintain security for houses, flats, landlords, shops, offices, warehouses and construction sites.",
    },
    {
      question: "Can I book a site survey in my area?",
      answer:
        "Yes. Send us your address and what you need, and we'll arrange a convenient time to visit, assess your property and give you a free quote.",
    },
    {
      question: "Will you maintain a system someone else installed?",
      answer:
        "Yes. We service and repair most CCTV, alarm and access control systems across our coverage area, even if another company fitted them.",
    },
  ],
};

export const areasContent = {
  hero,
  highlights,
  features,
  areasGrid,
  oneTeam,
  securitySolutions,
  whyChoose,
  localKnowledge,
  worriedCta,
  reviews,
  faqs,
};
