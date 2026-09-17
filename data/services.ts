import { site } from "./site";
import type { IconName } from "@/components/icons";
import type { WhyPoint } from "./home";

export type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "CCTV Installation",
    description:
      "Wired & wireless CCTV systems for homes and businesses, with neat, discreet cabling and remote phone viewing.",
    image: "/images/domestic-cctv-installation.jpg",
    imageAlt: "Domestic CCTV camera installation",
    ctaLabel: "Get a quote",
    ctaHref: "/contact",
  },
  {
    number: "02",
    title: "Access Control & Door Entry",
    description:
      "Wireless access control, intercom and door entry systems, IP and wired, that lock down and control who enters.",
    image: "/images/hikvision-keypad-video-intercom.jpeg",
    imageAlt: "Hikvision keypad video intercom door entry system",
    ctaLabel: "Get a quote",
    ctaHref: "/contact",
  },
  {
    number: "03",
    title: "Intruder Alarms Systems",
    description:
      "Pyronix, AX Pro & Yale, wired and wireless, for homes and businesses. Fully certified and fitted to standard.",
    image: "/images/auto-iris-branded-alarm-keypad.jpeg",
    imageAlt: "Intruder alarm keypad installed by Auto Iris",
    ctaLabel: "WhatsApp us",
    ctaHref: site.whatsapp,
  },
];

export const subServiceChips: string[] = [
  "CCTV Monitoring & Remote Viewing",
  "Wired & Wireless CCTV",
  "Surveillance Systems",
  "Intercom & Door Entry Systems",
  "Wireless Access Control",
  "Alarm Maintenance & Repair",
  "Wired & Wireless Alarms",
  "Alarm Systems (Pyronix, AX Pro, Yale)",
  "Home & Business Security",
];

export type ServiceListItem = {
  number: string;
  /** URL segment for the detail page, e.g. /services/cctv-installation. */
  slug: string;
  title: string;
  description: string;
  icon: IconName;
};

/** Full service list shown on the /services page. */
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

/** "Why Choose Auto Iris?" points on the /services page. */
export const serviceWhyPoints: WhyPoint[] = [
  {
    icon: "badgeCheck",
    title: "Qualified Installers",
    text: "Professional workmanship on every installation",
  },
  {
    icon: "fastForward",
    title: "Fast Response Times",
    text: "Emergency support available 24 hours a day",
  },
  {
    icon: "tools",
    title: "Quality Equipment",
    text: "Reliable products selected for long-term performance",
  },
  {
    icon: "users",
    title: "One Trusted Team",
    text: "Installation, monitoring and maintenance in one place",
  },
];

export type HowStep = { number: string; title: string; text: string };

/** "How It Works" steps on the /services page. */
export const howItWorksSteps: HowStep[] = [
  {
    number: "01",
    title: "Get In Touch",
    text: "Call, WhatsApp or send us a message and tell us what you need protecting.",
  },
  {
    number: "02",
    title: "Free Site Survey",
    text: "We visit your property, assess it and recommend the right system for you.",
  },
  {
    number: "03",
    title: "Professional Installation",
    text: "Our certified engineers fit everything neatly, on time and to standard.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    text: "We show you how it all works and stay on hand for maintenance and 24/7 callouts.",
  },
];

export type ServiceStat = { value: string; label: string };

/** Highlight figures beside "Built For Homes And Businesses" on the /services page. */
export const serviceStats: ServiceStat[] = [
  { value: "24/7", label: "Support available" },
  { value: String(allServices.length), label: "Specialist services" },
  { value: "1", label: "Trusted team" },
  { value: "100%", label: "Tested before handover" },
];

export type Faq = { question: string; answer: string };

const areaList = `${site.areaServed.slice(0, -1).join(", ")} and ${site.areaServed.at(-1)}`;

/** FAQs on the /services page; also emitted as FAQPage structured data. */
export const serviceFaqs: Faq[] = [
  {
    question: "Do you provide free quotes?",
    answer:
      "Yes. All quotes are free and no-obligation. Tell us what you need and we'll recommend the right system and give you a clear price before any work starts.",
  },
  {
    question: "Can you work around my schedule?",
    answer:
      "Absolutely. We're open 24 hours Monday to Saturday, so we can book your survey or installation at a time that suits you, including early mornings and evenings.",
  },
  {
    question: "Do you offer emergency callouts?",
    answer:
      "Yes. Emergency callouts are available 24 hours a day, 7 days a week. Whether it's a break-in, a faulty alarm or a system that has stopped recording, call us and we'll get to you as quickly as possible.",
  },
  {
    question: "Can I view my CCTV remotely?",
    answer:
      "Yes. We set up remote viewing on your phone, tablet or computer, so you can watch live footage and play back recordings from anywhere. We'll show you how it all works before we leave.",
  },
  {
    question: "Do you maintain existing systems?",
    answer:
      "Yes. We service, repair and upgrade existing CCTV, intruder alarm, access control and aerial systems, even if we didn't install them originally.",
  },
  {
    question: "Which areas do you cover?",
    answer: `We're based in Barking and cover ${areaList}, and we regularly travel further across the UK. If you're not sure we cover your area, just get in touch.`,
  },
];

/** "Every Angle Covered" pills on the /services page, one array per desktop row. */
export const serviceTagRows: string[][] = [
  [
    "CCTV Monitoring & Remote viewing",
    "Wired & wireless CCTV",
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
];

/** Intro paragraphs shared by the "Professional Security Solutions" and "Local Knowledge" sections. */
export const securitySolutionsParagraphs: string[] = [
  "Protect your property with reliable, professionally installed CCTV, Auto Iris cameras, intruder alarms, access control systems, and complete security solutions. We provide high-quality security system installation designed to help homes, offices, retail stores, warehouses, commercial buildings, and other properties stay monitored and protected.",
  "From Auto Iris CCTV cameras that deliver clear images in changing lighting conditions to advanced surveillance and alarm systems, we provide practical security solutions tailored to your property and requirements.",
];
