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
  yell: "https://www.yell.com/biz/auto-iris-installations-barking-8549853/",
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
  geo: { latitude: 51.5359, longitude: 0.0813 },
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

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
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
  { label: "About Us", href: "/#about" },
  { label: "Our Work", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Get a Quote", href: "/contact" },
  { label: "Yell Listing", href: site.yell },
];

export const openingHours: { day: string; hours: string; open: boolean }[] = [
  { day: "Monday", hours: "24 Hours", open: true },
  { day: "Tuesday", hours: "24 Hours", open: true },
  { day: "Wednesday", hours: "24 Hours", open: true },
  { day: "Thursday", hours: "24 Hours", open: true },
  { day: "Friday", hours: "24 Hours", open: true },
  { day: "Saturday", hours: "24 Hours", open: true },
  { day: "Sunday", hours: "Closed", open: false },
];

export const brands = {
  logo: "/images/auto-iris-logo-wide.jpeg",
  label: "Brands We Work With",
  list: "Orisec • Pyronix • AX Pro • Yale • Hikvision",
};
