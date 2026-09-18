/** Single source of truth for business details, navigation and footer content. */

export const site = {
  name: "Auto Iris Installations",
  legalName: "Auto IRIS Installation LTD",
  companyNumber: "3454455",
  url: "https://autoiris-installation.co.uk",
  phoneDisplay: "07523 521215",
  phoneHref: "tel:+447523521215",
  phoneIntl: "+447523521215",
  whatsapp: "https://wa.me/447523521215",
  email: "info.autoiris@gmail.com",
  address: {
    street: "Flat 508 Jute Court, 58 Abbey Road",
    locality: "Barking",
    region: "London",
    postalCode: "IG11 7FT",
    country: "GB",
    full: "Flat 508 Jute Court, 58 Abbey Rd, Barking, IG11 7FT",
    line1: "Flat 508 Jute Court,",
    line2: "58 Abbey Rd, Barking, IG11 7FT",
  },
  /** Pin and link from the Google Business Profile listing. */
  geo: { latitude: 51.5315493, longitude: 0.0765876 },
  mapUrl: "https://maps.app.goo.gl/jYqDZLLmfJs262HBA",
  areaServed: [
    "London",
    "Essex",
    "Kent",
    "Norfolk",
    "Suffolk",
    "Folkestone",
    "Portsmouth",
  ],
  tagline:
    "Professional CCTV, intruder alarms and access control, trusted by homes and businesses across the UK.",
  logo: "/images/auto-iris-logo.png",
  heroImage: "/images/hero-image.jpg",
} as const;

export type Stat = { count: number; suffix: string; label: string };

/** Headline business figures, shown in the stats strip on several pages. */
export const stats: Stat[] = [
  { count: 96, suffix: "", label: "Five-Star Reviews" },
  { count: 10, suffix: "+", label: "Years Experience" },
  { count: 24, suffix: "/7", label: "Emergency Service" },
  { count: 100, suffix: "%", label: "Satisfaction" },
];

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Areas", href: "/areas" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "CCTV Installation", href: "/services" },
  { label: "CCTV Monitoring", href: "/services" },
  { label: "Intruder Alarms", href: "/services" },
  { label: "Alarm Maintenance", href: "/services" },
  { label: "Access Control", href: "/services" },
  { label: "Door Entry & Intercom", href: "/services" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Get a Quote", href: "/contact" },
];

export const openingHours: { day: string; hours: string; open: boolean }[] = [
  { day: "Monday", hours: "9am - 5pm", open: true },
  { day: "Tuesday", hours: "9am - 5pm", open: true },
  { day: "Wednesday", hours: "9am - 5pm", open: true },
  { day: "Thursday", hours: "9am - 5pm", open: true },
  { day: "Friday", hours: "9am - 5pm", open: true },
  { day: "Saturday", hours: "Closed", open: false },
  { day: "Sunday", hours: "Closed", open: false },
];

/** Collapses consecutive days with the same hours into one row, e.g. "Mon - Sat". */
export function groupOpeningHours(): { days: string; hours: string }[] {
  const groups: { first: string; last: string; hours: string }[] = [];
  for (const { day, hours } of openingHours) {
    const current = groups.at(-1);
    if (current && current.hours === hours) current.last = day;
    else groups.push({ first: day, last: day, hours });
  }
  return groups.map(({ first, last, hours }) => ({
    days: first === last ? first : `${first.slice(0, 3)} - ${last.slice(0, 3)}`,
    hours,
  }));
}

export const brands = {
  logo: "/images/auto-iris-logo-wide.jpeg",
  label: "Brands We Work With",
  list: "Orisec • Pyronix • AX Pro • Yale • Hikvision",
};
