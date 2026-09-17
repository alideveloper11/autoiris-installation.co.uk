import type { AboutOneTeamProps } from "@/components/sections/AboutOneTeam";
import type { AboutWhoWeAreProps } from "@/components/sections/AboutWhoWeAre";
import type { CoverageProps } from "@/components/sections/Coverage";
import type { CtaBannerProps } from "@/components/sections/CtaBanner";
import type { EveryAngleProps } from "@/components/sections/EveryAngle";
import type { FaqsProps } from "@/components/sections/Faqs";
import type { FullScreenHeroProps } from "@/components/sections/FullScreenHero";
import type { ReviewsProps } from "@/components/sections/Reviews";
import type { ServicesIntroProps } from "@/components/sections/ServicesIntro";
import type { StatsProps } from "@/components/sections/Stats";
import type { WhyChooseProps } from "@/components/sections/WhyChoose";
import type { CtaLink } from "@/components/ui/CtaLinks";
import { rating, reviews as reviewItems } from "./reviews";
import { site, stats as statItems } from "./site";

/* About page content. Headings: "[words]" are highlighted, "\n" starts a new line. */

/** Page title and description for search results and link previews. */
export const aboutMeta = {
  title: "About Auto Iris Installations | Barking Security Installers",
  description:
    "Meet Auto Iris Installations, a certified, fully insured security company in Barking installing CCTV, alarms and access control across London & Essex.",
  socialTitle: "About Auto Iris Installations, Security Installers in Barking",
  socialDescription: `A certified, fully insured local team with 10+ years' experience and a ${rating.value} rating from ${rating.count} reviews.`,
  image: "/images/about-hero.jpg",
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
  eyebrow: "About Auto Iris",
  heading: "Trusted Security Installers\n[Based In Barking]",
  text: "Auto Iris Installations is a certified, fully insured security company installing and maintaining CCTV, intruder alarms, access control, door entry, aerial and satellite systems for homes and businesses across East London, Essex and surrounding areas.",
  image: aboutMeta.image,
  ctas: [callCta, quoteCta],
  trust: [
    { icon: "badgeCheck", label: "Certified Engineers" },
    { icon: "clock", label: "10+ Years Experience" },
    { icon: "lock", label: "Fully Insured" },
  ],
};

const stats: StatsProps = { items: statItems };

const whoWeAre: AboutWhoWeAreProps = {
  eyebrow: "Who We Are",
  heading: "A Trusted Local Security Team",
  text: "Auto Iris Installations combines practical advice, tidy installation and responsive aftercare. From our base in Barking we help homeowners, landlords, shops, offices and commercial properties across London and Essex choose, install and look after the right security systems.",
  checklist: [
    "Clear, honest recommendations",
    "Neat, fully tested installations",
    "One trusted point of contact",
    "Support and servicing after handover",
  ],
  image: {
    src: "/images/connected-protection-card.png",
    alt: "Diagram of a home protected by connected CCTV cameras, an intruder alarm and smart locks",
    width: 562,
    height: 357,
  },
};

const values: WhyChooseProps = {
  id: "values",
  className: "why-choose-grey",
  eyebrow: "What We Stand For",
  heading: "How We Work: Simple, Reliable, Professional",
  items: [
    {
      icon: "ear",
      title: "Listen First",
      text: "We learn about your property and priorities before recommending any CCTV, alarm or access control system.",
    },
    {
      icon: "hammer",
      title: "Do It Properly",
      text: "Every system is installed neatly, configured carefully and fully tested before we hand it over.",
    },
    {
      icon: "calendar",
      title: "Keep It Clear",
      text: "Straightforward options, honest pricing and plain English, with no confusing jargon.",
    },
    {
      icon: "checkCircle",
      title: "Stay Available",
      text: "Servicing, repairs and 24/7 emergency callouts whenever you need a hand.",
    },
  ],
};

const oneTeam: AboutOneTeamProps = {
  heading: "One Security Team, From Survey To Service",
  text: "From a single camera upgrade to a complete home or business security system, the same certified engineers survey your property, install your equipment and maintain it for years to come.",
  steps: ["Survey", "Install", "Maintain"],
};

const localTeamCta: CtaBannerProps = {
  className: "cta-banner-outline",
  heading: "Want To Work With [A Local Team]?",
  text: "Tell us about your property and get honest advice and a free quote from our Barking-based engineers.",
  ctas: [{ ...quoteCta, variant: "primary" }, whatsappCta],
};

const everyAngle: EveryAngleProps = {
  heading: "What We [Install & Maintain]",
  rows: [
    [
      "CCTV Cameras & Recorders",
      "Wired & Wireless Alarms",
      "Video Door Entry",
      "Keyless Access Control",
    ],
    ["TV Aerials", "Satellite Dishes", "Alarm Servicing", "CCTV Maintenance", "Emergency Repairs"],
  ],
};

const localKnowledge: ServicesIntroProps = {
  id: "local-knowledge",
  eyebrow: "Why Local Matters",
  heading: "Local Knowledge.\nProfessional Results.",
  paragraphs: [
    "Being based in Barking means we know the homes, flats, shops and business premises of East London and Essex, and we can get to you quickly for surveys, installations and emergency callouts.",
    "Our engineers are Hikvision certified and Pyronix trained, with City & Guilds, NCFE and BS7671 (18th Edition) qualifications. Every installation is fully insured and backed by a minimum 12-month guarantee.",
  ],
};

const coverage: CoverageProps = {
  id: "coverage",
  eyebrow: "Where We Work",
  heading: "Based in Barking.\n[Trusted Across London & Essex.]",
  paragraphs: [
    "Our engineers work from Barking across East London, Essex, Kent and the Home Counties, and travel as far as Norfolk, Suffolk, Portsmouth and Folkestone for larger projects.",
    "Wherever you are, you get the same standards: a free quote, a neat installation and 3 and 5 year warranties available on selected products.",
  ],
  places: [
    { label: "Barking (HQ)" },
    { label: "London" },
    { label: "Essex" },
    { label: "Kent" },
    { label: "Norfolk" },
    { label: "Suffolk" },
    { label: "Folkestone" },
    { label: "Portsmouth" },
  ],
  cta: { label: "Request a Free Quote", href: "/contact", variant: "primary", size: "md" },
};

const reviews: ReviewsProps = {
  className: "reviews-grey",
  eyebrow: "What Customers Say",
  items: reviewItems,
};

const faqs: FaqsProps = {
  eyebrow: "Getting To Know Us",
  heading: "Questions About Auto Iris",
  items: [
    {
      question: "Where is Auto Iris Installations based?",
      answer: `We're based in ${site.address.locality} (${site.address.postalCode}) and install and maintain security systems across London, Essex, Kent and beyond.`,
    },
    {
      question: "Are your engineers qualified?",
      answer:
        "Yes. Our team is Hikvision certified and Pyronix trained, with City & Guilds, NCFE and BS7671 (18th Edition) qualifications.",
    },
    {
      question: "Are you fully insured?",
      answer:
        "Yes. Auto Iris Installations is fully insured, so you have complete peace of mind while we work at your property.",
    },
    {
      question: "Do you guarantee your work?",
      answer:
        "Every installation is guaranteed for a minimum of 12 months, with 3 and 5 year warranties available on selected products.",
    },
    {
      question: "How much experience do you have?",
      answer:
        "Our team has over 10 years of experience installing CCTV, intruder alarms, access control and door entry systems for homes and businesses.",
    },
    {
      question: "Who do you work with?",
      answer:
        "We work with homeowners, landlords, shops, offices, warehouses and construction sites, from single-camera jobs to complete commercial security systems.",
    },
  ],
};

export const aboutContent = {
  hero,
  stats,
  whoWeAre,
  values,
  oneTeam,
  localTeamCta,
  everyAngle,
  localKnowledge,
  coverage,
  reviews,
  faqs,
};
