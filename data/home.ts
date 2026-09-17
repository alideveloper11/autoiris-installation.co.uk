import type { AboutProps } from "@/components/sections/About";
import type { CoverageProps } from "@/components/sections/Coverage";
import type { CtaBannerProps } from "@/components/sections/CtaBanner";
import type { GalleryProps } from "@/components/sections/Gallery";
import type { HeroProps } from "@/components/sections/Hero";
import type { ReviewsProps } from "@/components/sections/Reviews";
import type { ServicesProps } from "@/components/sections/Services";
import type { StatsProps } from "@/components/sections/Stats";
import type { VisitUsProps } from "@/components/sections/VisitUs";
import { serviceAreas } from "./areas";
import { mapEmbedSrc } from "./contact";
import { galleryItems, homeGalleryLimit } from "./gallery";
import { rating, reviews as reviewItems } from "./reviews";
import { groupOpeningHours, site, stats as statItems } from "./site";

/* Home page content. Headings: "[words]" are highlighted, "\n" starts a new line. */

/** Page title and description for search results and link previews. */
export const homeMeta = {
  title: "CCTV & Alarm Installers in London & Essex | Auto Iris",
  description: `CCTV, intruder alarm and access control installers based in Barking, covering London & Essex. ${rating.value} rated, fully insured, 24/7 callouts. Free quotes.`,
  socialTitle: "CCTV, Alarm & Access Control Installers in London & Essex",
  socialDescription: `Professional CCTV, burglar alarm and access control installation for homes and businesses. Rated ${rating.value} from ${rating.count} reviews. Call ${site.phoneDisplay}.`,
};

const hero: HeroProps = {
  image: {
    src: site.heroImage,
    alt: "Pyronix intruder alarm bell box and keypad installed on a home by Auto Iris Installations",
  },
  badge: `${rating.value} Rated • Fully Insured • 24/7 Callouts`,
  heading: "CCTV & Alarm Installers\n[In London & Essex]",
  text: `Auto Iris Installations fits CCTV cameras, intruder alarms, access control and door entry systems for homes and businesses across London, Essex and the South East. Based in Barking, rated ${rating.value} from ${rating.count} reviews and backed by 10+ years' experience.`,
  ctas: [
    {
      label: `Call ${site.phoneDisplay}`,
      href: site.phoneHref,
      variant: "primary",
      icon: "phoneSolid",
    },
    { label: "WhatsApp Us", href: site.whatsapp, variant: "whatsapp", icon: "whatsapp" },
  ],
  trust: [
    { icon: "stars", label: `${rating.count} Five-Star Reviews` },
    { icon: "clock", label: "24/7 Emergency Callouts" },
    { icon: "shield", label: "Fully Insured" },
  ],
};

const stats: StatsProps = { items: statItems };

const about: AboutProps = {
  image: {
    src: "/images/warehouse-entrance-cctv-cameras.jpeg",
    alt: "Auto Iris engineer installing commercial CCTV cameras above a warehouse entrance",
  },
  badge: { value: "10+", label: "Years of\nExperience" },
  eyebrow: "About Auto Iris",
  heading: "Local Security Installers You Can [Trust & Rely On]",
  paragraphs: [
    "Auto Iris Installations is a Barking-based security company installing CCTV, intruder alarms and access control for homeowners, landlords and businesses across London and Essex. With over 10 years' experience, every system is planned around your property, fitted neatly and tested before we leave.",
    "Every installation is backed by a minimum 12-month guarantee, with 3 and 5 year warranties available on selected products. As a Hikvision certified installer trained on Pyronix systems, we use trusted brands and give honest advice, so you only pay for the security you need.",
  ],
  points: [
    {
      icon: "checkCircle",
      title: "Certified Installers.",
      text: "Hikvision certified and Pyronix trained.",
    },
    { icon: "shield", title: "Fully Insured.", text: "Peace of mind on every job." },
    { icon: "clock", title: "24/7 Emergency Callouts.", text: "Help day or night." },
    { icon: "globe", title: "London & Essex Coverage.", text: "Local engineers who come to you." },
  ],
  cta: { label: "Call for a Free Quote", href: site.phoneHref, variant: "dark", size: "md" },
};

const services: ServicesProps = {
  eyebrow: "Our Security Services",
  heading: "CCTV, Alarms & Access Control, [Supplied & Fitted]",
  text: "From a single camera to a complete security system, we supply, install and maintain CCTV, intruder alarms and access control for homes and businesses across London and Essex.",
  items: [
    {
      number: "01",
      title: "CCTV Installation",
      description:
        "HD wired and wireless CCTV cameras for homes and businesses, with neat cabling, clear day and night footage and remote viewing on your phone.",
      image: "/images/domestic-cctv-installation.jpg",
      imageAlt: "Uniview bullet and turret CCTV cameras installed on metal wall cladding",
      ctaLabel: "Explore CCTV installation",
      ctaHref: "/services/cctv-installation",
    },
    {
      number: "02",
      title: "Intruder Alarms",
      description:
        "Wired and wireless burglar alarms from Pyronix, AX Pro and Yale, with app control, loud visible deterrents and full testing on handover.",
      image: "/images/auto-iris-branded-alarm-keypad.jpeg",
      imageAlt: "Intruder alarm keypad installed by Auto Iris Installations",
      ctaLabel: "Explore intruder alarms",
      ctaHref: "/services/intruder-alarms",
    },
    {
      number: "03",
      title: "Access Control & Door Entry",
      description:
        "Keyless fob, card and PIN access control plus audio and video intercoms that put you in charge of who enters your building.",
      image: "/images/hikvision-keypad-video-intercom.jpeg",
      imageAlt: "Hikvision keypad video intercom door entry system beside a front door",
      ctaLabel: "Explore access control",
      ctaHref: "/services/access-control",
    },
  ],
  chipsHeading: "More Ways We [Protect Your Property]",
  chips: [
    "CCTV Monitoring & Remote Viewing",
    "Alarm Maintenance & Repair",
    "Door Entry & Intercom Systems",
    "Wireless Access Control",
    "Wired & Wireless Alarms",
    "TV Aerial Installation",
    "Satellite Dish Installation",
    "Security System Maintenance",
    "24/7 Emergency Callouts",
  ],
};

const coverage: CoverageProps = {
  id: "coverage",
  eyebrow: "Areas We Cover",
  heading: "Based in Barking.\n[Installing Across London & Essex.]",
  paragraphs: [
    "From our base in Barking we install and maintain security systems across East London, Essex, Kent and the Home Counties, including Ilford, Romford, Dagenham, Stratford and Thurrock. For the right project we also travel as far as Norfolk, Suffolk, Portsmouth and Folkestone.",
    "Wherever you are, you get the same local service: a free quote, honest advice and a tidy installation backed by our minimum 12-month guarantee.",
  ],
  places: serviceAreas
    .slice(0, 10)
    .map((area) => ({ label: area.name, href: `/areas/${area.slug}` })),
  cta: {
    label: "View All Areas",
    href: "/areas?section=areas-we-serve",
    variant: "primary",
    size: "md",
  },
};

const gallery: GalleryProps = {
  head: {
    eyebrow: "Our Work",
    heading: "Recent CCTV & Alarm [Installations]",
    text: "Real CCTV, intruder alarm, access control and door entry installations completed by our team for homes and businesses. Tap any photo to enlarge.",
  },
  items: galleryItems,
  limit: homeGalleryLimit,
  viewAll: {
    label: `View All ${galleryItems.length} Installation Photos`,
    href: "/gallery",
    variant: "primary",
    size: "md",
  },
};

const reviews: ReviewsProps = {
  eyebrow: "Customer Reviews",
  heading: `Rated [${rating.value} out of 5] By Local Customers`,
  rating: { score: rating.value, meta: rating.meta },
  items: reviewItems,
  more: {
    text: `See why ${rating.count} homeowners and businesses rate our installations five stars.`,
    cta: { label: "Read All Reviews", href: "/reviews", variant: "dark", size: "md" },
  },
};

const visitUs: VisitUsProps = {
  eyebrow: "Visit Us",
  hoursLabel: "Opening Hours",
  hours: groupOpeningHours(),
  locationLabel: "Our Address",
  address: {
    text: `${site.address.street}, ${site.address.locality},`,
    highlight: site.address.postalCode,
  },
  map: {
    src: mapEmbedSrc,
    title: `Map showing ${site.name} in ${site.address.locality}, ${site.address.postalCode}`,
  },
};

const cta: CtaBannerProps = {
  heading: "Need CCTV Or An Alarm Fitted?\nGet A Free Quote Today.",
  text: "Speak to a local installer about CCTV, intruder alarms or access control for your home or business. Free, no-obligation quotes and 24/7 emergency callouts across London and Essex.",
  ctas: [
    { label: "WhatsApp Us", href: site.whatsapp, variant: "whatsapp" },
    { label: "Request a Free Quote", href: "/contact", variant: "outline" },
  ],
  phone: { label: site.phoneDisplay, href: site.phoneHref },
};

export const homeContent = {
  hero,
  stats,
  about,
  services,
  coverage,
  gallery,
  reviews,
  visitUs,
  cta,
};
