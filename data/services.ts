import { site } from "./site";

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
    image: "/images/commercial-door-entry.jpeg",
    imageAlt: "Commercial door entry system",
    ctaLabel: "Get a quote",
    ctaHref: "/contact",
  },
  {
    number: "03",
    title: "Intruder Alarms Systems",
    description:
      "Pyronix, AX Pro & Yale, wired and wireless, for homes and businesses. Fully certified and fitted to standard.",
    image: "/images/modern-hallway-alarm.jpeg",
    imageAlt: "Modern intruder alarm installation in hallway",
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
