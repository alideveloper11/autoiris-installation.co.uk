import type { IconName } from "@/components/icons";
import type { HeroTrustItem } from "@/components/sections/CenteredHero";
import type { WhyPoint } from "./home";
import { allServices, type HowStep, type ServiceListItem } from "./services";

export type ServiceHeroContent = {
  eyebrow: string;
  heading: string;
  highlight: string;
  text: string;
  image: string;
};

export type ServiceFeature = { icon: IconName; title: string; text: string; href: string };

export type ServiceFeaturesContent = {
  eyebrow: string;
  heading: string;
  text: string;
  items: ServiceFeature[];
};

export type ServiceProcessContent = {
  eyebrow: string;
  heading: string;
  steps: HowStep[];
};

export type ServiceDetail = ServiceListItem & {
  hero: ServiceHeroContent;
  /** "Why choose" feature cards; the section is skipped when a service has none. */
  features?: ServiceFeaturesContent;
  /** Numbered process steps on a dark band; skipped when a service has none. */
  process?: ServiceProcessContent;
};

/** Hero photo shared by service detail pages; override per service in heroContent. */
const defaultHeroImage = "/images/services-detail-hero.jpg";

/** Badges under the hero buttons, shared by every service detail page. */
export const serviceHeroTrust: HeroTrustItem[] = [
  { icon: "shieldCheck", label: "24/7 Coverage" },
  { icon: "fastForward", label: "Fast Response" },
  { icon: "lock", label: "Fully Insured" },
];

/** "Built For Real Life" property types, shared by every service detail page. */
export const propertyTypes: WhyPoint[] = [
  {
    icon: "home",
    title: "Home",
    text: "Discreet, easy-to-use protection for houses, flats and driveways",
  },
  {
    icon: "store",
    title: "Retail & Shop",
    text: "Deter theft and cover tills, aisles, entrances and stock rooms",
  },
  {
    icon: "building",
    title: "Offices",
    text: "Secure entrances, staff areas and equipment around the clock",
  },
  {
    icon: "construction",
    title: "Construction Sites",
    text: "Protect plant, materials and site perimeters, day and night",
  },
];

/** Designed hero copy per service slug; services without an entry use a generated fallback. */
const heroContent: Record<string, ServiceHeroContent> = {
  "cctv-monitoring": {
    eyebrow: "CCTV Camera Service",
    heading: "Keep An Eye On",
    highlight: "What Matters",
    text: "Professional CCTV monitoring gives you round-the-clock oversight, rapid alerts and the reassurance that your property is never left unprotected",
    image: defaultHeroImage,
  },
};

/** Feature cards per service slug. */
const featuresContent: Record<string, ServiceFeaturesContent> = {
  "cctv-monitoring": {
    eyebrow: "Why Choose Monitoring",
    heading: "How CCTV Monitoring Protects You",
    text: "Stay connected to what matters with reliable monitoring, clear alerts and support whenever you need it.",
    items: [
      {
        icon: "smartphone",
        title: "Live Viewing",
        text: "Watch live and recorded footage on your phone, tablet or computer, wherever you are, with secure remote access set up for you.",
        href: "/contact",
      },
      {
        icon: "siren",
        title: "Smart Alerts",
        text: "Get instant notifications when motion or unusual activity is detected, so you know about a problem the moment it happens.",
        href: "/contact",
      },
      {
        icon: "message",
        title: "Rapid Response",
        text: "When an alert needs action, act fast with the footage to hand and our team on call 24/7 for emergency support.",
        href: "/contact",
      },
    ],
  },
};

/** Process steps per service slug. */
const processContent: Record<string, ServiceProcessContent> = {
  "cctv-monitoring": {
    eyebrow: "The Monitoring Process",
    heading: "What Happens When An Alert Is Raised",
    steps: [
      { number: "01", title: "Detect", text: "Cameras Detect Unusual Activity" },
      { number: "02", title: "Verify", text: "Footage Is Checked Carefully" },
      { number: "03", title: "Notify", text: "The Customer Is Contacted" },
      { number: "04", title: "Respond", text: "You Or Your Nominated Contact Can Act" },
    ],
  },
};

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  const service = allServices.find((item) => item.slug === slug);
  if (!service) return undefined;

  return {
    ...service,
    hero: heroContent[slug] ?? {
      eyebrow: "Our Services",
      heading: "Professional",
      highlight: service.title,
      text: service.description,
      image: defaultHeroImage,
    },
    features: featuresContent[slug],
    process: processContent[slug],
  };
}
