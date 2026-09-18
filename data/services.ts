import type { IconName } from "@/components/icons";
import type { CtaBannerProps } from "@/components/sections/CtaBanner";
import type { EveryAngleProps } from "@/components/sections/EveryAngle";
import type { FaqsProps } from "@/components/sections/Faqs";
import type { FullScreenHeroProps } from "@/components/sections/FullScreenHero";
import type { HowItWorksProps } from "@/components/sections/HowItWorks";
import type { ReviewsProps } from "@/components/sections/Reviews";
import type { ServicesIntroProps } from "@/components/sections/ServicesIntro";
import type { ServicesListProps } from "@/components/sections/ServicesList";
import type { ServicesQuoteProps } from "@/components/sections/ServicesQuote";
import type { ServicesTrustProps } from "@/components/sections/ServicesTrust";
import type { WhyChooseProps } from "@/components/sections/WhyChoose";
import type { CtaLink } from "@/components/ui/CtaLinks";
import { reviews as reviewItems } from "./reviews";
import { site } from "./site";

export type ServiceListItem = {
  number: string;
  /** URL segment for the detail page, e.g. /services/cctv-installation. */
  slug: string;
  title: string;
  description: string;
  icon: IconName;
};

/** Every service; each gets a /services/[slug] page. */
export const allServices: ServiceListItem[] = [
  {
    number: "01",
    slug: "cctv-installation",
    title: "CCTV Installation",
    description:
      "Wired & wireless CCTV systems for home and business, with neat cabling and remote phone viewing.",
    icon: "camera",
  },
  {
    number: "02",
    slug: "cctv-monitoring",
    title: "CCTV Monitoring",
    description:
      "24/7 CCTV monitoring to help detect suspicious activity and provide an added layer of protection and peace of mind.",
    icon: "eye",
  },
  {
    number: "03",
    slug: "intruder-alarms",
    title: "Intruder Alarms",
    description:
      "Reliable intruder alarm systems designed to detect unauthorised entry and protect your property around the clock.",
    icon: "shieldSearch",
  },
  {
    number: "04",
    slug: "alarm-maintenance",
    title: "Alarm Maintenance",
    description:
      "Regular alarm servicing and maintenance to keep your security system working efficiently and reliably.",
    icon: "wrench",
  },
  {
    number: "05",
    slug: "access-control",
    title: "Access Control",
    description:
      "Secure access control solutions that help manage and restrict entry to your property, giving you greater control over who can enter.",
    icon: "controlPanel",
  },
  {
    number: "06",
    slug: "door-entry-intercom",
    title: "Door Entry & Intercom",
    description:
      "Professional door entry and intercom systems providing convenient, secure communication and controlled access to your property.",
    icon: "door",
  },
  {
    number: "07",
    slug: "satellite-dish",
    title: "Satellite Dish",
    description:
      "Expert satellite dish and TV aerial installation for clear, reliable reception, tailored to your property and viewing requirements.",
    icon: "satelliteDish",
  },
  {
    number: "08",
    slug: "aerial-installation",
    title: "Aerial Installation",
    description:
      "Reliable maintenance and fault-finding services to keep your satellite dishes and aerial systems performing at their best.",
    icon: "aerial",
  },
  {
    number: "09",
    slug: "maintenance",
    title: "Maintenance",
    description:
      "Professional maintenance services to keep your security, CCTV, alarm, access control, and aerial systems operating reliably, safely, and efficiently.",
    icon: "tools",
  },
];

export function getService(slug: string): ServiceListItem | undefined {
  return allServices.find((service) => service.slug === slug);
}

/* Services page content. Headings: "[words]" are highlighted, "\n" starts a new line. */

/** Page title and description for search results and link previews. */
export const servicesMeta = {
  title: "CCTV, Alarm & Access Control Services | Auto Iris",
  description:
    "CCTV, intruder alarm, access control, door entry, aerial and maintenance services for homes and businesses across London & Essex. Free quotes.",
  socialTitle: "Security Installation Services in London & Essex",
  socialDescription:
    "CCTV installation and monitoring, burglar alarms, access control, door entry and system maintenance from one certified local team.",
  image: "/images/services/services.webp",
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
  eyebrow: "Our Security Services",
  heading: "Security Installation Services\n[In London & Essex]",
  text: "CCTV installation and monitoring, intruder alarms, access control, door entry, TV aerials and system maintenance for homes and businesses, all supplied and fitted by one certified local team",
  image: servicesMeta.image,
  ctas: [callCta, quoteCta],
};

const servicesList: ServicesListProps = {
  className: "services-list-grey",
  items: allServices,
  linkLabel: "Learn More",
};

const everyAngle: EveryAngleProps = {
  heading: "Every Security Need [Covered]",
  rows: [
    [
      "CCTV Monitoring & Remote Viewing",
      "Wired & Wireless CCTV",
      "Intruder Alarms",
      "Alarm Maintenance & Repair",
    ],
    [
      "Aerial Installation",
      "Satellite Dish",
      "Access Control",
      "Door Entry & Intercom",
      "Home & Business Security",
    ],
  ],
};

const worriedCta: CtaBannerProps = {
  className: "cta-banner-flat",
  heading: "Worried About Your Security?\nLet's Fix That Today.",
  text: "Get a fast, friendly, no-obligation quote for CCTV, alarms or access control. Emergency callouts available 24 hours a day, 7 days a week.",
  ctas: [whatsappCta, quoteCta],
};

const whyChoose: WhyChooseProps = {
  eyebrow: "Why Choose Us",
  heading: "Why Choose [Auto Iris] For Your Security?",
  text: "From the first site survey to ongoing maintenance, our certified engineers make protecting your home or business in London and Essex simple, reliable and stress-free.",
  items: [
    {
      icon: "badgeCheck",
      title: "Qualified Installers",
      text: "Hikvision certified and Pyronix trained engineers on every job",
    },
    {
      icon: "fastForward",
      title: "Fast Response Times",
      text: "24/7 emergency callouts across London and Essex",
    },
    {
      icon: "tools",
      title: "Quality Equipment",
      text: "Trusted brands including Hikvision, Pyronix, AX Pro and Yale",
    },
    {
      icon: "users",
      title: "One Trusted Team",
      text: "CCTV, alarms, access control and maintenance from one company",
    },
  ],
};

const howItWorks: HowItWorksProps = {
  eyebrow: "How It Works",
  heading: "Your Security System In [Four Simple Steps]",
  text: "From your first call to long-term aftercare, getting CCTV, an alarm or access control installed with Auto Iris is quick, clear and hassle-free.",
  steps: [
    {
      number: "01",
      title: "Get A Free Quote",
      text: "Call, WhatsApp or message us about what you need to protect and get honest advice with a free, no-obligation quote.",
    },
    {
      number: "02",
      title: "Site Survey",
      text: "We visit your property, check entry points and blind spots, and recommend the right security system.",
    },
    {
      number: "03",
      title: "Professional Installation",
      text: "Our certified engineers fit your system neatly, on time and to standard, then test everything.",
    },
    {
      number: "04",
      title: "Aftercare & Support",
      text: "We show you how it all works and stay on hand for servicing, repairs and 24/7 emergency callouts.",
    },
  ],
};

const securitySolutions: ServicesIntroProps = {
  heading: "Professional Security Solutions For Homes And Businesses",
  paragraphs: [
    "Protect your property with professionally installed CCTV, intruder alarms, access control and door entry systems from Auto Iris Installations. We design and fit complete security solutions for homes, offices, retail stores, warehouses, commercial buildings and construction sites across London and Essex.",
    "From HD CCTV cameras that capture clear footage in changing light to wireless burglar alarms, keyless entry and video intercoms, every system is tailored to your property, installed neatly and backed by a minimum 12-month guarantee.",
  ],
};

const secureCta: CtaBannerProps = {
  className: "cta-banner-outline",
  heading: "Ready To Feel More [Secure]?",
  text: "Talk to our team today and get a CCTV, alarm or access control system built around your property.",
  ctas: [{ ...quoteCta, variant: "primary" }, whatsappCta],
};

const quote: ServicesQuoteProps = {
  heading: "Get A CCTV & Security System Quote",
  lines: [
    "Need CCTV installation, an intruder alarm, access control, door entry or a complete security system?",
    "Contact us today to discuss your requirements and arrange a professional security assessment or free installation quote.",
    "Secure your home or business in London and Essex with the right security solution — contact us today.",
  ],
};

const trust: ServicesTrustProps = {
  eyebrow: "Protection You Can Trust",
  heading: "Security Systems Built For Homes And Businesses",
  text: "Every CCTV, alarm and access control system is planned around your property, your people and the way you use your space.",
  stats: [
    { value: "24/7", label: "Support available" },
    { value: String(allServices.length), label: "Specialist services" },
    { value: "1", label: "Trusted team" },
    { value: "100%", label: "Tested before handover" },
  ],
};

const reviews: ReviewsProps = {
  className: "reviews-grey",
  eyebrow: "Customer Reviews",
  items: reviewItems,
};

const areaList = `${site.areaServed.slice(0, -1).join(", ")} and ${site.areaServed.at(-1)}`;

const faqs: FaqsProps = {
  eyebrow: "Need To Know More?",
  heading: "Security Services FAQs",
  items: [
    {
      question: "Do you provide free quotes?",
      answer:
        "Yes. Every quote for CCTV, intruder alarms, access control or door entry is free and no-obligation. Tell us what you need and we'll recommend the right system with a clear price before any work starts.",
    },
    {
      question: "Can you work around my schedule?",
      answer:
        "Our office hours are Monday to Friday, 9am to 5pm, and we'll book your survey or installation at a time that suits you. Emergency callouts are available 24/7.",
    },
    {
      question: "Do you offer emergency callouts?",
      answer:
        "Yes. Emergency callouts are available 24 hours a day, 7 days a week across London and Essex, whether it's a break-in, a faulty alarm or CCTV that has stopped recording.",
    },
    {
      question: "Can I view my CCTV remotely?",
      answer:
        "Yes. We set up remote viewing on your phone, tablet or computer so you can watch live and recorded CCTV footage from anywhere, and we show you how it works before we leave.",
    },
    {
      question: "Do you maintain existing systems?",
      answer:
        "Yes. We service, repair and upgrade existing CCTV, intruder alarm, access control and aerial systems, even if another company installed them.",
    },
    {
      question: "Which areas do you cover?",
      answer: `We're based in Barking and cover ${areaList}, and we regularly travel further across the UK. If you're not sure we cover your area, just get in touch.`,
    },
  ],
};

export const servicesContent = {
  hero,
  servicesList,
  everyAngle,
  worriedCta,
  whyChoose,
  howItWorks,
  securitySolutions,
  secureCta,
  quote,
  trust,
  reviews,
  faqs,
};
