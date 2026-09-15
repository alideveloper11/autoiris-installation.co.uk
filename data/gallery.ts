export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/engineer-branded-service.jpeg",
    alt: "Engineer in branded uniform on site",
    caption: "On site in branded uniform",
  },
  {
    src: "/images/technical-wiring-detail.jpeg",
    alt: "Technical wiring detail",
    caption: "Precision technical wiring",
  },
  {
    src: "/images/evening-emergency-response.jpeg",
    alt: "Evening emergency response",
    caption: "Evening emergency response",
  },
  {
    src: "/images/domestic-cctv-installation.jpg",
    alt: "Domestic CCTV installation",
    caption: "Domestic CCTV installation",
  },
  {
    src: "/images/commercial-office-installation.jpeg",
    alt: "Commercial office CCTV installation",
    caption: "Commercial office install",
  },
  {
    src: "/images/4k-ipad-live-feed.jpeg",
    alt: "4K CCTV live feed viewed on iPad",
    caption: "4K live feed on iPad",
  },
  {
    src: "/images/modern-hallway-alarm.jpeg",
    alt: "Modern hallway alarm installation",
    caption: "Modern hallway alarm",
  },
  {
    src: "/images/external-bell-box.jpeg",
    alt: "External alarm bell box installation",
    caption: "External bell box installation",
  },
  {
    src: "/images/customer-training-session.jpeg",
    alt: "Customer training session on new security system",
    caption: "Customer training session",
  },
  {
    src: "/images/ip-access-control-installation.jpg",
    alt: "IP access control installation",
    caption: "IP access control work",
  },
  {
    src: "/images/commercial-door-entry.jpeg",
    alt: "Commercial door entry system",
    caption: "Commercial door entry",
  },
  {
    src: "/images/industrial-distribution-board.jpeg",
    alt: "Commercial security system installation work",
    caption: "Commercial installation work",
  },
  {
    src: "/images/emergency-gate-2am.jpeg",
    alt: "Emergency 2am security callout",
    caption: "2 AM emergency callout",
  },
  {
    src: "/images/weatherproof-installation.jpeg",
    alt: "Weatherproof CCTV installation in torrential rain",
    caption: "Weatherproof install, rain or shine",
  },
  {
    src: "/images/neat-tidy-comms.jpeg",
    alt: "Neat and tidy communications installation",
    caption: "Neat & tidy comms setup",
  },
  {
    src: "/images/hero-image.jpg",
    alt: "Pyronix alarm bell box and keypad installed on a residential garage",
    caption: "Pyronix alarm & keypad install",
  },
  {
    src: "/images/dome-camera.jpeg",
    alt: "Dome CCTV camera installed on the corner of a brick house",
    caption: "External dome camera install",
  },
];

/** How many photos the home page shows before linking to the full gallery. */
export const homeGalleryLimit = 15;
