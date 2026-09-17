import type { CtaBannerProps } from "@/components/sections/CtaBanner";
import type { GalleryProps } from "@/components/sections/Gallery";
import type { PageHeroProps } from "@/components/sections/PageHero";
import { site } from "./site";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/communal-entrance-dome-cameras.jpeg",
    alt: "Dome CCTV cameras covering a communal building entrance",
    caption: "Communal entrance CCTV",
  },
  {
    src: "/images/auto-iris-branded-alarm-keypad.jpeg",
    alt: "Intruder alarm keypad displaying Auto Iris on screen",
    caption: "Alarm keypad setup",
  },
  {
    src: "/images/supermarket-public-view-monitor-dome-cameras.jpeg",
    alt: "Supermarket public view monitor with dome cameras mounted below",
    caption: "Supermarket public view monitor",
  },
  {
    src: "/images/hikvision-keypad-video-intercom.jpeg",
    alt: "Hikvision video intercom with keypad entry fitted beside a door",
    caption: "Keypad video intercom",
  },
  {
    src: "/images/hikvision-turret-camera-closeup.jpeg",
    alt: "Hikvision turret camera mounted under a roof edge",
    caption: "Hikvision turret camera",
  },
  {
    src: "/images/nvr-monitor-multi-camera-grid.jpeg",
    alt: "CCTV monitor showing a multi-camera grid view of a building",
    caption: "Multi-camera NVR view",
  },
  {
    src: "/images/warehouse-entrance-cctv-cameras.jpeg",
    alt: "CCTV cameras being installed above a warehouse entrance",
    caption: "Warehouse entrance CCTV",
  },
  {
    src: "/images/hero-image.jpg",
    alt: "Pyronix alarm bell box and keypad installed on a residential garage",
    caption: "Pyronix alarm & keypad install",
  },
  {
    src: "/images/twin-turret-cameras-brick-arch.jpeg",
    alt: "Two turret CCTV cameras mounted above a brick archway",
    caption: "Twin turret cameras",
  },
  {
    src: "/images/domestic-cctv-installation.jpg",
    alt: "Uniview bullet and turret CCTV cameras installed on metal wall cladding",
    caption: "Bullet & turret CCTV cameras",
  },
  {
    src: "/images/supermarket-ceiling-dome-camera.jpeg",
    alt: "Dome camera mounted beneath a supermarket ceiling monitor",
    caption: "Supermarket dome camera",
  },
  {
    src: "/images/warehouse-door-entry-intercom.jpeg",
    alt: "Door entry intercom panel fitted beside a warehouse door",
    caption: "Warehouse door entry",
  },
  {
    src: "/images/underground-car-park-cctv-camera.jpeg",
    alt: "CCTV camera covering an underground car park",
    caption: "Underground car park CCTV",
  },
  {
    src: "/images/intruder-alarm-control-panel.jpeg",
    alt: "Wall-mounted intruder alarm control panel",
    caption: "Alarm control panel",
  },
  {
    src: "/images/supermarket-cctv-monitor-live-view.jpeg",
    alt: "CCTV monitor showing live views of supermarket aisles and tills",
    caption: "Supermarket live CCTV view",
  },
  {
    src: "/images/communal-door-video-doorbell.jpeg",
    alt: "Video doorbell installed beside a communal entrance door",
    caption: "Communal video doorbell",
  },
  {
    src: "/images/turret-camera-brick-archway.jpeg",
    alt: "Turret CCTV camera fitted in a brick archway corner",
    caption: "Archway turret camera",
  },
  {
    src: "/images/convenience-store-cctv-monitor.jpeg",
    alt: "CCTV monitor showing multiple camera views of a convenience store",
    caption: "Convenience store CCTV",
  },
  {
    src: "/images/ip-access-control-installation.jpg",
    alt: "Turret CCTV camera installed on a brick wall beneath a red canopy",
    caption: "Brick wall turret camera",
  },
  {
    src: "/images/basement-plant-room-turret-camera.jpeg",
    alt: "Turret camera installed in a basement plant room",
    caption: "Plant room CCTV",
  },
  {
    src: "/images/supermarket-aisle-public-view-monitor.jpeg",
    alt: "Public view CCTV monitor above a supermarket aisle",
    caption: "Supermarket aisle monitor",
  },
  {
    src: "/images/comms-room-distribution-panels.jpeg",
    alt: "Neatly installed panels and cabling in a comms room",
    caption: "Comms room installation",
  },
  {
    src: "/images/dome-camera.jpeg",
    alt: "Dome CCTV camera installed on the corner of a brick house",
    caption: "External dome camera install",
  },
  {
    src: "/images/shop-wall-cctv-monitor-fisheye-view.jpeg",
    alt: "Wall-mounted shop CCTV monitor showing fisheye camera views",
    caption: "Shop CCTV monitor",
  },
  {
    src: "/images/industrial-brick-wall-cctv-camera.jpeg",
    alt: "CCTV camera mounted high on an industrial brick wall",
    caption: "Industrial wall camera",
  },
  {
    src: "/images/outdoor-warning-speaker.jpeg",
    alt: "Outdoor warning speaker mounted on a brick wall",
    caption: "Outdoor warning speaker",
  },
  {
    src: "/images/supermarket-cctv-monitor-twin-domes.jpeg",
    alt: "Supermarket CCTV in operation monitor with twin dome cameras",
    caption: "CCTV in operation display",
  },
  {
    src: "/images/bike-store-turret-camera.jpeg",
    alt: "Turret CCTV camera covering a bike store",
    caption: "Bike store CCTV",
  },
  {
    src: "/images/wall-mounted-security-control-panel.jpeg",
    alt: "Wall-mounted security control panel with neat trunking",
    caption: "Security control panel",
  },
  {
    src: "/images/retail-dome-camera-closeup.jpeg",
    alt: "Close-up of a retail dome CCTV camera",
    caption: "Retail dome camera",
  },
  {
    src: "/images/basement-car-park-turret-camera.jpeg",
    alt: "Turret camera installed on a basement car park wall",
    caption: "Basement car park CCTV",
  },
  {
    src: "/images/shop-ceiling-cctv-monitor.jpeg",
    alt: "Ceiling-mounted CCTV monitor with a dome camera in a shop",
    caption: "Shop ceiling monitor",
  },
  {
    src: "/images/neat-tidy-comms.jpeg",
    alt: "Neat and tidy communications installation",
    caption: "Neat & tidy comms setup",
  },
  {
    src: "/images/communal-entrance-turret-camera.jpeg",
    alt: "Turret camera above a communal entrance gate",
    caption: "Entrance gate camera",
  },
  {
    src: "/images/supermarket-aisle-cctv-monitor.jpeg",
    alt: "CCTV monitor above a supermarket aisle",
    caption: "Aisle CCTV monitor",
  },
  {
    src: "/images/weatherproof-installation.jpeg",
    alt: "Weatherproof CCTV installation in torrential rain",
    caption: "Weatherproof install, rain or shine",
  },
  {
    src: "/images/car-park-entrance-security-device.jpeg",
    alt: "Security device installed at a car park entrance",
    caption: "Car park entrance security",
  },
];

/** How many photos the home page shows before linking to the full gallery. */
export const homeGalleryLimit = 9;

/* Gallery page content. Headings: "[words]" are highlighted, "\n" starts a new line. */

/** Page title and description for search results and link previews. */
export const galleryMeta = {
  title: "CCTV & Alarm Installation Photos | Auto Iris Gallery",
  description:
    "Photos of real CCTV, intruder alarm, access control and door entry installations by Auto Iris Installations for homes and businesses in London & Essex.",
  socialTitle: "Auto Iris Installations: Security Installation Photo Gallery",
  socialDescription:
    "See real CCTV, alarm and door entry installations completed by our engineers across London and Essex.",
  image: "/images/weatherproof-installation.jpeg",
};

const hero: PageHeroProps = {
  breadcrumb: "Gallery",
  heading: "Our Security Installations, [Up Close]",
  text: "Browse real CCTV, intruder alarm, door entry and access control installations completed by our own engineers for homes, shops, warehouses and commercial buildings across London and Essex. Tap any photo to enlarge.",
  image: galleryMeta.image,
};

const gallery: GalleryProps = {
  head: {
    eyebrow: "Project Photos",
    heading: "CCTV, Alarm & Door Entry [Installations]",
    text: "From HD cameras covering car parks and entrances to alarm panels, video intercoms and neat comms cabinets, every photo shows work carried out by the Auto Iris team.",
  },
  items: galleryItems,
};

const cta: CtaBannerProps = {
  heading: "Want An Installation [Like These]?",
  text: "Get the same neat, reliable CCTV, alarm or access control installation at your home or business, with free, no-obligation quotes across London and Essex.",
  ctas: [
    { label: "Get a Free Quote", href: "/contact", variant: "dark" },
    { label: "WhatsApp Us", href: site.whatsapp, variant: "outline" },
  ],
  phone: { label: site.phoneDisplay, href: site.phoneHref },
};

export const galleryContent = { hero, gallery, cta };
