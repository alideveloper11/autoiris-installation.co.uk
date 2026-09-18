import type { ContactCardsProps } from "@/components/sections/ContactCards";
import type { ContactFormProps } from "@/components/sections/ContactForm";
import type { ContactInfoProps } from "@/components/sections/ContactInfo";
import type { CoverageProps } from "@/components/sections/Coverage";
import type { CtaBannerProps } from "@/components/sections/CtaBanner";
import type { MapEmbedProps } from "@/components/sections/MapEmbed";
import type { PageHeroProps } from "@/components/sections/PageHero";
import { rating } from "./reviews";
import { site } from "./site";

export const serviceOptions: string[] = [
  "CCTV Installation",
  "CCTV Monitoring / Maintenance",
  "Intruder / Burglar Alarm",
  "Alarm Maintenance / Repair",
  "Access Control / Door Entry",
  "Intercom System",
  "Repair / Emergency Callout",
  "Other",
];

/** The "Other" option reads differently to the value that gets emailed. */
export const serviceOptionLabels: Record<string, string> = {
  Other: "Something else",
};

export const urgencyOptions: string[] = [
  "Just looking for a quote",
  "Within the next week",
  "As soon as possible",
  "It's an emergency",
];

/** Searches for the business by name so the map shows the labelled Google listing pin. */
export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.name}, ${site.address.locality} ${site.address.postalCode}`,
)}&output=embed`;

/* Contact page content. Headings: "[words]" are highlighted, "\n" starts a new line. */

/** Page title and description for search results and link previews. */
export const contactMeta = {
  title: "Contact Us | CCTV & Alarm Quotes in London | Auto Iris",
  description: `Contact Auto Iris Installations in Barking for free CCTV, alarm and access control quotes across London & Essex. Call ${site.phoneDisplay} or send an enquiry.`,
  socialTitle: "Contact Auto Iris Installations for a Free Security Quote",
  socialDescription:
    "Free quotes for CCTV, intruder alarms, access control and door entry across London & Essex. Call, WhatsApp, email or send an enquiry.",
  image: "/images/nvr-monitor-multi-camera-grid.jpeg",
};

const hero: PageHeroProps = {
  breadcrumb: "Contact",
  heading: "Contact Our [CCTV & Alarm] Installers",
  text: "Get a free, no-obligation quote for CCTV, intruder alarms, access control or door entry. Call, WhatsApp, email or send an enquiry and our Barking-based team will get back to you quickly, with 24/7 emergency callouts available.",
  image: contactMeta.image,
};

const cards: ContactCardsProps = {
  cards: [
    {
      icon: "phone",
      title: "Call Us",
      link: { label: site.phoneDisplay, href: site.phoneHref },
      paragraphs: ["Mon to Fri, 9am to 5pm. Emergency callouts 24/7."],
    },
    {
      icon: "mail",
      title: "Email Us",
      link: { label: site.email, href: `mailto:${site.email}` },
      paragraphs: ["Send details of your property and we'll reply quickly."],
    },
    {
      icon: "mapPin",
      title: "Visit Us",
      paragraphs: [
        `${site.address.line1}\n${site.address.line2}`,
        "Based in Barking, covering London & Essex.",
      ],
    },
    {
      icon: "clock",
      title: "Opening Hours",
      paragraphs: [
        "Monday to Friday: [9am - 5pm]",
        "Saturday & Sunday: [Closed]\n24hr emergency callouts available.",
      ],
    },
  ],
};

const form: ContactFormProps = {
  heading: "Request Your Free [Security Quote]",
  text: "Tell us about your property and the CCTV, alarm or access control system you need, and we'll get back to you shortly, usually within the hour on working days.",
  submitLabel: "Send My Enquiry",
  call: {
    label: `Or Call ${site.phoneDisplay}`,
    href: site.phoneHref,
    variant: "dark",
    size: "md",
  },
  note: "Prefer to talk? Call us Mon to Fri, 9am to 5pm, or any time for an emergency, and speak to a real person.",
};

const info: ContactInfoProps = {
  eyebrow: "Good to know",
  heading: "Why Call [Auto Iris]?",
  rows: [
    {
      icon: "checkCircle",
      title: "Free, No-Obligation Quotes",
      text: "Honest prices for CCTV, alarms and access control, with no hidden extras.",
    },
    {
      icon: "shield",
      title: "12-Month Guarantee",
      text: "Every installation guaranteed, with 3 & 5 year warranties on selected products.",
    },
    {
      icon: "clock",
      title: "24/7 Emergency Callouts",
      text: "Help around the clock, day or night, weekends and bank holidays.",
    },
    {
      icon: "thumbsUp",
      title: "Certified & Qualified",
      text: "Hikvision certified installer, BS7671 (18th edition), City & Guilds, NCFE & Pyronix trained.",
    },
  ],
  rating: {
    title: `${rating.value} Rated (${rating.count} Reviews)`,
    text: "See what our customers say on our",
    link: { label: "reviews page", href: "/reviews" },
    suffix: ".",
  },
  badge: `Call ${site.phoneDisplay}`,
};

const coverage: CoverageProps = {
  eyebrow: "Areas We Cover",
  heading: "Based in Barking. [We Come To You.]",
  paragraphs: [
    "Don't see your postcode listed? Get in touch anyway. Our engineers travel across London, Essex and the South East to survey, install and repair CCTV, intruder alarms and access control systems.",
  ],
  places: [
    { label: "Barking & Dagenham" },
    { label: "East & South London" },
    { label: "Essex" },
    { label: "Kent" },
    { label: "Hertfordshire" },
    { label: "Surrey & Sussex" },
    { label: "Norfolk" },
    { label: "Portsmouth & Folkestone" },
  ],
  cta: {
    label: "Browse Areas We Cover",
    href: "/areas?section=areas-we-serve",
    variant: "primary",
    size: "md",
  },
};

const map: MapEmbedProps = {
  src: mapEmbedSrc,
  title: `Map to ${site.name}, ${site.address.full}`,
};

const cta: CtaBannerProps = {
  heading: "Need Security Help [Today]?",
  text: "One quick call is all it takes to book a survey, arrange a repair or get a free quote for your home or business.",
  ctas: [
    { label: `Call ${site.phoneDisplay}`, href: site.phoneHref, variant: "dark" },
    { label: "Email Us", href: `mailto:${site.email}`, variant: "outline" },
  ],
};

export const contactContent = { hero, cards, form, info, coverage, map, cta };
