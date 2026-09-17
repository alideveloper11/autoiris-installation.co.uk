import type { CtaBannerProps } from "@/components/sections/CtaBanner";
import type { Faq, FaqsProps } from "@/components/sections/Faqs";
import type { FullScreenHeroProps, HeroTrustItem } from "@/components/sections/FullScreenHero";
import type { GalleryProps } from "@/components/sections/Gallery";
import type { ReviewsProps } from "@/components/sections/Reviews";
import type { ServiceFeaturesProps } from "@/components/sections/ServiceFeatures";
import type { ServiceProcessProps } from "@/components/sections/ServiceProcess";
import type { ServicesIntroProps } from "@/components/sections/ServicesIntro";
import type { StatsProps } from "@/components/sections/Stats";
import type { IconItem } from "@/components/sections/types";
import type { WhyChooseProps } from "@/components/sections/WhyChoose";
import type { CtaLink } from "@/components/ui/CtaLinks";
import { galleryItems } from "./gallery";
import { reviews as reviewItems } from "./reviews";
import type { ServiceListItem } from "./services";
import { site, stats as statItems } from "./site";

/*
 * Service detail page content for every /services/[slug] page.
 * Each service has its own copy in `serviceCopy`; only the hero badges, stats and customer
 * reviews are shared. Headings: "[words]" are highlighted, "\n" starts a new line.
 */

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

const heroImage = "/images/services-detail-hero.jpg";

const heroTrust: HeroTrustItem[] = [
  { icon: "shieldCheck", label: "24/7 Coverage" },
  { icon: "fastForward", label: "Fast Response" },
  { icon: "lock", label: "Fully Insured" },
];

const areaList = `${site.areaServed.slice(0, -1).join(", ")} and ${site.areaServed.at(-1)}`;
/** Coverage answer for each service's FAQ, e.g. areasAnswer("CCTV installation"). */
const areasAnswer = (service: string) =>
  `We provide ${service} from our base in Barking across ${areaList}, and travel further across the UK for larger projects. Not sure if we cover you? Just ask.`;

type ServiceCopy = {
  /** Search result title (60 characters max) and description (155 max). */
  meta: { title: string; description: string };
  hero: Pick<FullScreenHeroProps, "eyebrow" | "heading" | "text">;
  secureCta: Pick<CtaBannerProps, "heading" | "text">;
  whyChoose: Pick<WhyChooseProps, "heading" | "text" | "items">;
  /** Gallery photos are file names from data/gallery.ts. */
  gallery: { heading: string; text: string; photos: string[] };
  features: ServiceFeaturesProps;
  propertyHeading: string;
  /** Cards for Home, Retail & Shop, Offices and Construction Sites. */
  propertyTypes: IconItem[];
  process: ServiceProcessProps;
  localKnowledgeHeading: string;
  localKnowledge: string[];
  faqs: Faq[];
};

/** Content unique to each service page, keyed by the slug in data/services.ts. */
const serviceCopy: Record<string, ServiceCopy> = {
  "cctv-installation": {
    meta: {
      title: "CCTV Installation in London & Essex | Auto Iris",
      description:
        "Professional CCTV installation for homes and businesses in London & Essex. HD cameras, neat cabling and phone viewing. Hikvision certified. Free quotes.",
    },
    hero: {
      eyebrow: "CCTV Installation Service",
      heading: "See Everything\n[Day And Night]",
      text: "Professional CCTV installation for homes and businesses across East London and Essex, with HD cameras, neat cabling and remote viewing from your phone",
    },
    secureCta: {
      heading: "Ready To Install [CCTV]?",
      text: "Talk to our team today and get a CCTV system designed around your property.",
    },
    whyChoose: {
      heading: "Why Choose Auto Iris For [CCTV Installation]?",
      text: "Our Hikvision certified engineers plan, install and test every CCTV system, so you get clear footage, tidy cabling and simple phone viewing.",
      items: [
        {
          icon: "badgeCheck",
          title: "Hikvision Certified",
          text: "Installed by certified engineers who know the equipment inside out",
        },
        {
          icon: "camera",
          title: "Full Coverage Planning",
          text: "Cameras positioned to cover entrances, driveways and blind spots",
        },
        {
          icon: "tools",
          title: "Tidy, Discreet Cabling",
          text: "Cables hidden or neatly clipped for a professional finish",
        },
        {
          icon: "smartphone",
          title: "Phone Viewing Set Up",
          text: "Remote viewing configured and explained before we leave",
        },
      ],
    },
    gallery: {
      heading: "Recent [CCTV Installations]",
      text: "Examples of CCTV cameras we have installed on homes, warehouses, car parks and commercial buildings. Tap any photo to enlarge.",
      photos: [
        "domestic-cctv-installation.jpg",
        "twin-turret-cameras-brick-arch.jpeg",
        "warehouse-entrance-cctv-cameras.jpeg",
        "dome-camera.jpeg",
        "industrial-brick-wall-cctv-camera.jpeg",
        "underground-car-park-cctv-camera.jpeg",
      ],
    },
    features: {
      eyebrow: "Why Choose Our CCTV Installation",
      heading: "Professional CCTV Installation For Homes And Businesses",
      text: "From a single camera to a complete surveillance system, we design and fit CCTV that captures clear footage day and night, with neat cabling and easy phone viewing.",
      linkLabel: "Learn More",
      items: [
        {
          icon: "camera",
          title: "HD Security Cameras",
          text: "High-definition wired and wireless cameras from trusted brands like Hikvision, positioned to cover entrances, driveways and blind spots.",
          href: "/contact",
        },
        {
          icon: "smartphone",
          title: "Remote Phone Viewing",
          text: "Watch live and recorded footage from anywhere on your phone, tablet or computer, set up and tested before we leave.",
          href: "/services/cctv-monitoring",
        },
        {
          icon: "tools",
          title: "Neat, Discreet Cabling",
          text: "Cables are routed tidily and hidden wherever possible, so your CCTV system looks as professional as it performs.",
          href: "/contact",
        },
      ],
    },
    propertyHeading: "CCTV For Every Type Of Property",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Cover driveways, doors and gardens, and check in from your phone",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Deter shoplifting and watch over tills, aisles and stock rooms",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Record entrances, car parks and reception areas around the clock",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Protect plant, tools and materials on site, day and night",
      },
    ],
    process: {
      eyebrow: "The CCTV Installation Process",
      heading: "How We Install Your CCTV",
      steps: [
        { number: "01", title: "Survey", text: "We Assess Your Property And Blind Spots" },
        { number: "02", title: "Plan", text: "Camera Positions Chosen For Full Coverage" },
        { number: "03", title: "Install", text: "Cameras Fitted With Tidy Cabling" },
        { number: "04", title: "Handover", text: "Phone Viewing Set Up And Explained" },
      ],
    },
    localKnowledgeHeading: "Local CCTV Installers.\nProfessional Results.",
    localKnowledge: [
      "Protect your property with professionally installed CCTV from a local team based in Barking. We install wired and wireless CCTV systems for homes, shops, offices, warehouses and construction sites across East London, Essex and surrounding areas.",
      "Every system is planned around your property, with HD cameras positioned to cover entrances, driveways and blind spots, tidy cabling and remote viewing set up on your phone before we leave.",
    ],
    faqs: [
      {
        question: "How much does CCTV installation cost?",
        answer:
          "Every property is different, so we give free, no-obligation quotes based on the number of cameras, the type of system and the cabling involved. You'll get a clear price before any work starts.",
      },
      {
        question: "Can I view my CCTV cameras on my phone?",
        answer:
          "Yes. We set up remote viewing so you can watch live and recorded footage on your phone, tablet or computer, and we show you how it works before we leave.",
      },
      {
        question: "Do you install wired or wireless CCTV?",
        answer:
          "Both. We recommend wired or wireless CCTV depending on your property, the distances involved and how reliable the connection needs to be.",
      },
      {
        question: "How long does a CCTV installation take?",
        answer:
          "Smaller home systems can often be fitted in a single visit, while larger commercial installations take longer. We'll confirm timings with your quote.",
      },
      {
        question: "Which areas do you cover for CCTV installation?",
        answer: areasAnswer("CCTV installation"),
      },
    ],
  },

  "cctv-monitoring": {
    meta: {
      title: "CCTV Monitoring Services in London & Essex | Auto Iris",
      description:
        "CCTV monitoring with live phone viewing, instant alerts and fast response for homes and businesses across London & Essex. Free, no-obligation quotes.",
    },
    hero: {
      eyebrow: "CCTV Camera Service",
      heading: "Keep An Eye On\n[What Matters]",
      text: "Professional CCTV monitoring gives you round-the-clock oversight, rapid alerts and the reassurance that your property is never left unprotected",
    },
    secureCta: {
      heading: "Ready To Monitor [Your Property]?",
      text: "Speak to our team about CCTV monitoring with live viewing and instant alerts.",
    },
    whyChoose: {
      heading: "Why Choose Auto Iris For [CCTV Monitoring]?",
      text: "We set up monitoring that fits the way you live and work, with clear alerts, fast access to footage and support whenever you need it.",
      items: [
        {
          icon: "eye",
          title: "Round-The-Clock Oversight",
          text: "Your cameras keep watch over your property day and night",
        },
        {
          icon: "siren",
          title: "Instant Alerts",
          text: "Notifications the moment unusual activity is detected",
        },
        {
          icon: "smartphone",
          title: "Footage On Demand",
          text: "Live and recorded video on your phone or computer",
        },
        {
          icon: "clock",
          title: "24/7 Support",
          text: "Emergency callouts whenever something needs attention",
        },
      ],
    },
    gallery: {
      heading: "CCTV [Monitoring] In Action",
      text: "Monitors and live camera views we have set up for shops, supermarkets and commercial properties. Tap any photo to enlarge.",
      photos: [
        "nvr-monitor-multi-camera-grid.jpeg",
        "supermarket-cctv-monitor-live-view.jpeg",
        "convenience-store-cctv-monitor.jpeg",
        "shop-wall-cctv-monitor-fisheye-view.jpeg",
        "supermarket-public-view-monitor-dome-cameras.jpeg",
        "supermarket-cctv-monitor-twin-domes.jpeg",
      ],
    },
    features: {
      eyebrow: "Why Choose Monitoring",
      heading: "How CCTV Monitoring Protects You",
      text: "Stay connected to what matters with reliable monitoring, clear alerts and support whenever you need it.",
      linkLabel: "Learn More",
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
    propertyHeading: "Monitoring For Every Type Of Property",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Get alerted to activity at your home while you are out or away",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Keep watch over your shop after hours and respond to incidents fast",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Keep an eye on entrances and car parks outside working hours",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Monitor sites and deter theft when no one is around",
      },
    ],
    process: {
      eyebrow: "The Monitoring Process",
      heading: "What Happens When An Alert Is Raised",
      steps: [
        { number: "01", title: "Detect", text: "Cameras Detect Unusual Activity" },
        { number: "02", title: "Verify", text: "Footage Is Checked Carefully" },
        { number: "03", title: "Notify", text: "The Customer Is Contacted" },
        { number: "04", title: "Respond", text: "You Or Your Nominated Contact Can Act" },
      ],
    },
    localKnowledgeHeading: "Local CCTV Monitoring.\nProfessional Results.",
    localKnowledge: [
      "Keep watch over your property with CCTV monitoring set up by a local team based in Barking. We install and configure monitored CCTV systems for homes, shops, offices, warehouses and construction sites across East London, Essex and surrounding areas.",
      "Every system is set up for clear live viewing, instant motion alerts and secure remote access, so you or your nominated contact can see what is happening and act quickly, day or night.",
    ],
    faqs: [
      {
        question: "What is CCTV monitoring?",
        answer:
          "CCTV monitoring keeps watch over your property through your cameras. When unusual activity is detected, the footage is checked and you or your nominated contact are told so action can be taken.",
      },
      {
        question: "Will I get alerts on my phone?",
        answer:
          "Yes. Compatible systems send instant notifications when motion or unusual activity is detected, so you can check the footage straight away.",
      },
      {
        question: "Can monitoring be added to my existing cameras?",
        answer:
          "Often, yes. We'll check your current cameras and recorder and let you know whether they can be used or need upgrading.",
      },
      {
        question: "Can I view my CCTV remotely?",
        answer:
          "Yes. We set up secure remote viewing on your phone, tablet or computer, so you can watch live and recorded footage from anywhere.",
      },
      {
        question: "Which areas do you cover for CCTV monitoring?",
        answer: areasAnswer("CCTV monitoring"),
      },
    ],
  },

  "intruder-alarms": {
    meta: {
      title: "Intruder Alarm Installation London & Essex | Auto Iris",
      description:
        "Wired and wireless burglar alarm installation from Pyronix, AX Pro and Yale for homes and businesses in London & Essex. Fully insured. Free quotes.",
    },
    hero: {
      eyebrow: "Intruder Alarm Service",
      heading: "Stop Intruders\n[Before They Get In]",
      text: "Wired and wireless intruder alarms from Pyronix, AX Pro and Yale, professionally installed to protect your home or business around the clock",
    },
    secureCta: {
      heading: "Ready For A [New Alarm]?",
      text: "Get a burglar alarm recommended and fitted to suit your home or business.",
    },
    whyChoose: {
      heading: "Why Choose Auto Iris For [Intruder Alarms]?",
      text: "We fit reliable, easy-to-use burglar alarms from brands we trust, and test every system fully so it works when it matters.",
      items: [
        {
          icon: "badgeCheck",
          title: "Pyronix Trained Engineers",
          text: "Alarms fitted by engineers trained on the systems they install",
        },
        {
          icon: "shieldCheck",
          title: "Trusted Alarm Brands",
          text: "Pyronix, AX Pro and Yale systems to suit every budget",
        },
        {
          icon: "smartphone",
          title: "Easy App Control",
          text: "Arm, disarm and get alerts from your phone",
        },
        {
          icon: "wrench",
          title: "Ongoing Servicing",
          text: "Maintenance and repairs that keep your alarm reliable",
        },
      ],
    },
    gallery: {
      heading: "Recent [Alarm Installations]",
      text: "Bell boxes, keypads and warning devices fitted by our engineers on homes and commercial buildings. Tap any photo to enlarge.",
      photos: [
        "hero-image.jpg",
        "auto-iris-branded-alarm-keypad.jpeg",
        "outdoor-warning-speaker.jpeg",
      ],
    },
    features: {
      eyebrow: "Why Choose Our Intruder Alarms",
      heading: "How An Intruder Alarm Protects Your Property",
      text: "A professionally installed burglar alarm deters break-ins, alerts you instantly and gives you peace of mind whether you are at home or away.",
      linkLabel: "Learn More",
      items: [
        {
          icon: "siren",
          title: "Loud Visible Deterrent",
          text: "Internal sirens and external bell boxes warn intruders off the moment a sensor is triggered.",
          href: "/contact",
        },
        {
          icon: "smartphone",
          title: "App Control & Alerts",
          text: "Arm, disarm and get instant notifications on your phone with wired and wireless systems from Pyronix, AX Pro and Yale.",
          href: "/contact",
        },
        {
          icon: "wrench",
          title: "Ongoing Alarm Servicing",
          text: "Regular maintenance keeps sensors, batteries and sirens working reliably and reduces false alarms.",
          href: "/services/alarm-maintenance",
        },
      ],
    },
    propertyHeading: "Burglar Alarms For Homes And Businesses",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Protect your family and belongings with an easy-to-use alarm",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Secure your stock and premises whenever the shop is closed",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Get alerted to break-ins overnight and at weekends",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Protect site cabins, stores and equipment from break-ins",
      },
    ],
    process: {
      eyebrow: "The Alarm Installation Process",
      heading: "How We Fit Your Intruder Alarm",
      steps: [
        { number: "01", title: "Survey", text: "We Identify Entry Points And Risks" },
        { number: "02", title: "Recommend", text: "Wired Or Wireless System Chosen To Suit" },
        { number: "03", title: "Install", text: "Sensors, Panel And Siren Fitted Neatly" },
        { number: "04", title: "Test", text: "Full System Test And Walkthrough" },
      ],
    },
    localKnowledgeHeading: "Local Alarm Installers.\nProfessional Results.",
    localKnowledge: [
      "Keep intruders out with a professionally installed burglar alarm from a local team based in Barking. We fit wired and wireless intruder alarm systems for homes and businesses across East London, Essex and surrounding areas.",
      "We work with trusted brands including Pyronix, AX Pro and Yale, choosing sensors, sirens and control panels to suit your property, and we test every system fully before handover.",
    ],
    faqs: [
      {
        question: "Should I choose a wired or wireless alarm?",
        answer:
          "Wired alarms suit renovations and new builds, while wireless alarms are quicker to fit with minimal disruption. We'll recommend the best option for your property.",
      },
      {
        question: "Which alarm brands do you install?",
        answer:
          "We install trusted brands including Pyronix, AX Pro and Yale, chosen to suit your property and budget.",
      },
      {
        question: "Can I control my alarm from my phone?",
        answer:
          "Many of the systems we install offer app control, so you can arm, disarm and receive alerts from your phone.",
      },
      {
        question: "Do you service alarms after installation?",
        answer:
          "Yes. We offer alarm maintenance to keep your system reliable, and emergency callouts are available 24/7 if something goes wrong.",
      },
      {
        question: "Which areas do you cover for intruder alarms?",
        answer: areasAnswer("intruder alarm installation"),
      },
    ],
  },

  "alarm-maintenance": {
    meta: {
      title: "Alarm Maintenance & Repairs London & Essex | Auto Iris",
      description:
        "Intruder alarm servicing, testing and repairs in London & Essex. Fewer false alarms, fast fixes and 24/7 emergency callouts. Book your alarm service.",
    },
    hero: {
      eyebrow: "Alarm Maintenance Service",
      heading: "Keep Your Alarm\n[Ready To Respond]",
      text: "Regular intruder alarm servicing, testing and repairs that keep your system reliable and cut down on false alarms",
    },
    secureCta: {
      heading: "Is Your Alarm [Due A Service]?",
      text: "Book an alarm service or repair with our local engineers today.",
    },
    whyChoose: {
      heading: "Why Choose Auto Iris For [Alarm Maintenance]?",
      text: "Our engineers find and fix alarm faults early, so your system stays reliable and false alarms become a thing of the past.",
      items: [
        {
          icon: "checkCircle",
          title: "Thorough Testing",
          text: "Every sensor, siren, panel and battery checked",
        },
        {
          icon: "wrench",
          title: "Quick Repairs",
          text: "Faulty parts repaired or replaced without delay",
        },
        {
          icon: "shieldSearch",
          title: "Any Alarm Serviced",
          text: "We service most systems, whoever installed them",
        },
        {
          icon: "clock",
          title: "24/7 Emergency Callouts",
          text: "Help day or night if your alarm fails",
        },
      ],
    },
    gallery: {
      heading: "Alarm Systems [We Look After]",
      text: "Control panels and security equipment our engineers install, service and repair. Tap any photo to enlarge.",
      photos: ["intruder-alarm-control-panel.jpeg", "wall-mounted-security-control-panel.jpeg"],
    },
    features: {
      eyebrow: "Why Service Your Alarm",
      heading: "Alarm Maintenance That Keeps You Protected",
      text: "Regular alarm servicing keeps your intruder alarm reliable, reduces false alarms and catches faults before they leave your property exposed.",
      linkLabel: "Learn More",
      items: [
        {
          icon: "checkCircle",
          title: "Full System Health Check",
          text: "We test every sensor, siren, keypad and control panel, and check the backup battery and signalling.",
          href: "/contact",
        },
        {
          icon: "siren",
          title: "Fewer False Alarms",
          text: "Faulty detectors and weak batteries are found and replaced, so your alarm only sounds when it matters.",
          href: "/contact",
        },
        {
          icon: "clock",
          title: "Fast Alarm Repairs",
          text: "If something fails, we repair or replace parts quickly, with 24/7 emergency callouts available.",
          href: "/contact",
        },
      ],
    },
    propertyHeading: "Alarm Servicing For Every Property",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Keep your home alarm reliable and free from false alarms",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Make sure your shop alarm works every time you lock up",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Scheduled servicing that keeps your office alarm dependable",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Checks for site alarms that face tough conditions",
      },
    ],
    process: {
      eyebrow: "The Service Process",
      heading: "What Happens During An Alarm Service",
      steps: [
        { number: "01", title: "Inspect", text: "Sensors, Panel And Siren Checked" },
        { number: "02", title: "Test", text: "Batteries And Signalling Tested" },
        { number: "03", title: "Fix", text: "Faulty Parts Repaired Or Replaced" },
        { number: "04", title: "Report", text: "Everything Explained Before We Leave" },
      ],
    },
    localKnowledgeHeading: "Local Alarm Engineers.\nProfessional Results.",
    localKnowledge: [
      "Regular alarm maintenance keeps your intruder alarm ready to respond. Our local engineers service and repair alarm systems for homes and businesses across East London, Essex and surrounding areas.",
      "Each visit covers sensors, sirens, keypads, control panels and backup batteries, so faults are fixed early, false alarms are reduced and your property stays protected.",
    ],
    faqs: [
      {
        question: "How often should my alarm be serviced?",
        answer:
          "We recommend servicing your intruder alarm at least once a year. Some insurers also require regular servicing, so it is worth checking your policy.",
      },
      {
        question: "Can you service an alarm you didn't install?",
        answer:
          "Yes. We service and repair most intruder alarm systems, even if they were fitted by another installer.",
      },
      {
        question: "Why does my alarm keep going off?",
        answer:
          "False alarms are often caused by faulty sensors, low batteries or detectors in the wrong place. A service finds and fixes the cause.",
      },
      {
        question: "Do you offer emergency alarm repairs?",
        answer:
          "Yes. Emergency callouts are available 24 hours a day, 7 days a week for alarm faults and repairs.",
      },
      {
        question: "Which areas do you cover for alarm maintenance?",
        answer: areasAnswer("alarm servicing and repairs"),
      },
    ],
  },

  "access-control": {
    meta: {
      title: "Access Control Systems London & Essex | Auto Iris",
      description:
        "Keyless access control installation with fobs, cards, PIN and app entry for offices, shops and residential blocks in London & Essex. Free quotes.",
    },
    hero: {
      eyebrow: "Access Control Service",
      heading: "Control Who Comes\n[Through Your Door]",
      text: "Keyless access control systems with fobs, cards, PIN codes and phone entry for offices, shops and residential buildings",
    },
    secureCta: {
      heading: "Ready To Go [Keyless]?",
      text: "Talk to us about an access control system built around your building.",
    },
    whyChoose: {
      heading: "Why Choose Auto Iris For [Access Control]?",
      text: "We design access control around how your building is really used, so staff, residents and visitors get in easily and everyone else stays out.",
      items: [
        {
          icon: "lock",
          title: "Secure Keyless Entry",
          text: "Fobs, cards, PIN codes and phone access",
        },
        {
          icon: "users",
          title: "Simple User Management",
          text: "Add, remove and schedule access in seconds",
        },
        {
          icon: "door",
          title: "Door Entry Integration",
          text: "Works alongside audio and video intercoms",
        },
        {
          icon: "tools",
          title: "Neat, Reliable Installs",
          text: "Readers, locks and wiring fitted and tested properly",
        },
      ],
    },
    gallery: {
      heading: "Recent [Access Control] Work",
      text: "Access control, entry devices and secure entrance systems we have installed. Tap any photo to enlarge.",
      photos: [
        "car-park-entrance-security-device.jpeg",
        "hikvision-keypad-video-intercom.jpeg",
      ],
    },
    features: {
      eyebrow: "Why Choose Access Control",
      heading: "Access Control Systems That Put You In Charge",
      text: "Decide exactly who can enter your building and when, with secure keypad, fob, card and app-based access control for offices, shops and residential blocks.",
      linkLabel: "Learn More",
      items: [
        {
          icon: "lock",
          title: "Keyless Secure Entry",
          text: "Replace keys with fobs, cards, PIN codes or phone access that is easy to manage and hard to misuse.",
          href: "/contact",
        },
        {
          icon: "users",
          title: "Control Who Gets In",
          text: "Add or remove users instantly and set access times for staff, tenants, contractors and visitors.",
          href: "/contact",
        },
        {
          icon: "door",
          title: "Works With Door Entry",
          text: "Combine access control with video intercom and door entry for complete control of every entrance.",
          href: "/services/door-entry-intercom",
        },
      ],
    },
    propertyHeading: "Access Control For Every Building",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Keyless entry for houses, garages and gated driveways",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Restrict stock rooms and back offices to authorised staff",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Manage staff entry with fobs, cards and time-based access",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Control who enters the site and when, with secure gate access",
      },
    ],
    process: {
      eyebrow: "The Setup Process",
      heading: "How We Set Up Your Access Control",
      steps: [
        { number: "01", title: "Assess", text: "We Review Every Entrance And User" },
        { number: "02", title: "Plan", text: "Readers, Locks And Credentials Chosen" },
        { number: "03", title: "Install", text: "Hardware Fitted And Configured" },
        { number: "04", title: "Handover", text: "Users Added And System Explained" },
      ],
    },
    localKnowledgeHeading: "Local Access Control Installers.\nProfessional Results.",
    localKnowledge: [
      "Take control of who enters your building with access control installed by a local team based in Barking. We fit keypad, fob, card and app-based systems for offices, shops, residential blocks and sites across East London, Essex and surrounding areas.",
      "Systems are configured around the way your property is used, with user management, access schedules and optional door entry integration, so you can add or remove access in seconds.",
    ],
    faqs: [
      {
        question: "What types of access control do you install?",
        answer:
          "We install keypad, fob, card and app-based access control, from single doors to multi-door systems for offices, shops and residential buildings.",
      },
      {
        question: "Can I add and remove users myself?",
        answer:
          "Yes. Most systems let you add or remove users and change access times quickly, and we show you how at handover.",
      },
      {
        question: "Can access control work with a door entry system?",
        answer:
          "Yes. Access control can be combined with audio or video intercoms, so you can manage staff or residents and visitors from one setup.",
      },
      {
        question: "What happens if a fob or card is lost?",
        answer:
          "It can be removed from the system straight away so it no longer opens any doors, and a replacement can be added.",
      },
      {
        question: "Which areas do you cover for access control?",
        answer: areasAnswer("access control installation"),
      },
    ],
  },

  "door-entry-intercom": {
    meta: {
      title: "Door Entry & Intercom Systems London & Essex | Auto Iris",
      description:
        "Audio and video door entry and intercom installation for houses, flats and commercial buildings in London & Essex. Upgrades and repairs. Free quotes.",
    },
    hero: {
      eyebrow: "Door Entry Service",
      heading: "Know Who Is Calling\n[Before You Open]",
      text: "Audio and video door entry and intercom systems for houses, flats and commercial buildings, installed and set up by a local professional",
    },
    secureCta: {
      heading: "Ready To Upgrade [Your Door Entry]?",
      text: "Get a video or audio intercom fitted to suit your property.",
    },
    whyChoose: {
      heading: "Why Choose Auto Iris For [Door Entry Systems]?",
      text: "We install door entry and intercom systems that are simple to use, secure and built to suit your property, from single homes to communal blocks.",
      items: [
        {
          icon: "eye",
          title: "Clear Video Calls",
          text: "See every caller clearly before you open",
        },
        {
          icon: "smartphone",
          title: "Answer On The Go",
          text: "Take door calls and release the lock from your phone",
        },
        {
          icon: "building",
          title: "Single Or Multi-Door",
          text: "Systems for houses, flats and offices",
        },
        {
          icon: "wrench",
          title: "Upgrades & Repairs",
          text: "Older intercoms repaired or upgraded to video",
        },
      ],
    },
    gallery: {
      heading: "Recent [Door Entry] Installations",
      text: "Video intercoms, video doorbells and door entry panels fitted for homes and commercial buildings. Tap any photo to enlarge.",
      photos: [
        "warehouse-door-entry-intercom.jpeg",
        "communal-door-video-doorbell.jpeg",
        "communal-entrance-turret-camera.jpeg",
      ],
    },
    features: {
      eyebrow: "Why Choose Door Entry",
      heading: "Door Entry And Intercom Systems Made Simple",
      text: "See and speak to visitors before you let them in, with audio and video intercom systems for homes, flats, offices and commercial buildings.",
      linkLabel: "Learn More",
      items: [
        {
          icon: "eye",
          title: "See Who Is At The Door",
          text: "HD video intercoms show you exactly who is calling before you open the door.",
          href: "/contact",
        },
        {
          icon: "smartphone",
          title: "Answer From Anywhere",
          text: "Take door calls and release the lock from your phone, even when you are away from the property.",
          href: "/contact",
        },
        {
          icon: "building",
          title: "For Homes And Communal Blocks",
          text: "Single-door intercoms for houses through to multi-apartment entry panels, with access control options.",
          href: "/services/access-control",
        },
      ],
    },
    propertyHeading: "Door Entry For Homes, Flats And Offices",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Answer the door from any room in the house or from your phone",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Screen deliveries and visitors at rear and staff entrances",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Manage visitors at reception and secure main entrances",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Control visitor access at site gates and welfare units",
      },
    ],
    process: {
      eyebrow: "The Door Entry Installation Process",
      heading: "How We Install Your Door Entry System",
      steps: [
        { number: "01", title: "Survey", text: "We Check Doors, Wiring And Power" },
        { number: "02", title: "Choose", text: "Audio Or Video Intercom Selected" },
        { number: "03", title: "Install", text: "Entry Panel And Handsets Fitted" },
        { number: "04", title: "Connect", text: "Door Release And App Tested" },
      ],
    },
    localKnowledgeHeading: "Local Intercom Installers.\nProfessional Results.",
    localKnowledge: [
      "Answer your door with confidence using a door entry or intercom system installed by a local team based in Barking. We install audio and video intercoms for houses, flats and commercial buildings across East London, Essex and surrounding areas.",
      "From single-door video intercoms to multi-apartment entry panels, every system is fitted neatly, connected to your door release and tested, so you can speak to visitors and let them in with ease.",
    ],
    faqs: [
      {
        question: "What is the difference between audio and video intercoms?",
        answer:
          "Audio intercoms let you speak to visitors, while video intercoms also let you see who is at the door before you let them in.",
      },
      {
        question: "Can I answer my intercom from my phone?",
        answer:
          "Many of the video intercoms we install can send calls to your phone, so you can speak to visitors and release the door from anywhere.",
      },
      {
        question: "Do you install intercoms for blocks of flats?",
        answer:
          "Yes. We install multi-apartment door entry panels for communal entrances as well as single-door systems for houses.",
      },
      {
        question: "Can you repair or upgrade an existing door entry system?",
        answer:
          "Yes. We repair faulty systems and can upgrade older audio intercoms to modern video door entry.",
      },
      {
        question: "Which areas do you cover for door entry systems?",
        answer: areasAnswer("door entry and intercom installation"),
      },
    ],
  },

  "satellite-dish": {
    meta: {
      title: "Satellite Dish Installation London & Essex | Auto Iris",
      description:
        "Satellite dish installation, alignment and repairs for clear, reliable TV in London & Essex. Multi-room setups and secure fitting. Free quotes.",
    },
    hero: {
      eyebrow: "Satellite Installation Service",
      heading: "Crystal-Clear TV\n[Without The Hassle]",
      text: "Expert satellite dish installation, alignment and repairs for clear, reliable reception tailored to your property",
    },
    secureCta: {
      heading: "Ready For [Clearer TV]?",
      text: "Book a satellite dish installation, realignment or repair today.",
    },
    whyChoose: {
      heading: "Why Choose Auto Iris For [Satellite Installation]?",
      text: "We fit satellite dishes properly the first time, with secure mounting, accurate alignment and tidy cabling for dependable TV.",
      items: [
        {
          icon: "satelliteDish",
          title: "Accurate Alignment",
          text: "A signal meter is used for the best reception",
        },
        {
          icon: "hammer",
          title: "Secure Mounting",
          text: "Brackets fitted to withstand wind and rain",
        },
        {
          icon: "home",
          title: "Multi-Room Options",
          text: "Extra points so you can watch in more rooms",
        },
        { icon: "tools", title: "Tidy Cabling", text: "Cables routed neatly inside and out" },
      ],
    },
    gallery: {
      heading: "Our [Installation Standards]",
      text: "Examples of the tidy cabling and weatherproof fitting we bring to every installation, including satellite dishes. Tap any photo to enlarge.",
      photos: ["weatherproof-installation.jpeg", "comms-room-distribution-panels.jpeg"],
    },
    features: {
      eyebrow: "Why Choose Our Satellite Installation",
      heading: "Satellite Dish Installation For Clear, Reliable TV",
      text: "Enjoy crisp, dependable satellite TV with a dish that is correctly positioned, securely mounted and aligned for the strongest possible signal.",
      linkLabel: "Learn More",
      items: [
        {
          icon: "satelliteDish",
          title: "Precise Dish Alignment",
          text: "Dishes are aligned with a signal meter for the best picture quality and fewer dropouts in bad weather.",
          href: "/contact",
        },
        {
          icon: "hammer",
          title: "Secure, Weatherproof Fitting",
          text: "Brackets and cables are fitted to withstand wind and rain, keeping your installation neat and safe.",
          href: "/contact",
        },
        {
          icon: "aerial",
          title: "Satellite And Aerial Together",
          text: "Pair your dish with a TV aerial installation for the widest choice of channels in every room.",
          href: "/services/aerial-installation",
        },
      ],
    },
    propertyHeading: "Satellite TV For Every Property",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Reliable satellite TV for houses and flats, with multi-room options",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "TV for cafés, waiting areas and customer spaces",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Satellite TV for staff rooms, receptions and meeting spaces",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "TV reception for site welfare cabins and staff facilities",
      },
    ],
    process: {
      eyebrow: "The Satellite Installation Process",
      heading: "How We Install Your Satellite Dish",
      steps: [
        { number: "01", title: "Survey", text: "We Find The Best Line Of Sight" },
        { number: "02", title: "Mount", text: "Dish Securely Fixed And Weatherproofed" },
        { number: "03", title: "Align", text: "Signal Fine-Tuned With A Meter" },
        { number: "04", title: "Test", text: "Channels Checked In Every Room" },
      ],
    },
    localKnowledgeHeading: "Local Satellite Installers.\nProfessional Results.",
    localKnowledge: [
      "Get reliable satellite TV with a dish installed by a local team based in Barking. We install, align and repair satellite dishes for homes and businesses across East London, Essex and surrounding areas.",
      "Every dish is securely mounted, weatherproofed and aligned with a signal meter, with extra points available so you can enjoy satellite TV in more than one room.",
    ],
    faqs: [
      {
        question: "Why is my satellite signal poor?",
        answer:
          "Poor signal is often caused by a misaligned dish, damaged cables or obstructions such as trees. We find the cause and fix it.",
      },
      {
        question: "Can you move or replace my satellite dish?",
        answer:
          "Yes. We can relocate, replace or realign existing dishes and tidy up the cabling at the same time.",
      },
      {
        question: "Can I watch satellite TV in more than one room?",
        answer:
          "Yes. We can add extra cabling and points so you can enjoy satellite TV in multiple rooms.",
      },
      {
        question: "Can you install a satellite dish on a flat?",
        answer:
          "Yes, where the building owner allows it. We'll advise on the best position and mounting for your property.",
      },
      {
        question: "Which areas do you cover for satellite installation?",
        answer: areasAnswer("satellite dish installation"),
      },
    ],
  },

  "aerial-installation": {
    meta: {
      title: "TV Aerial Installation & Repairs London & Essex | Auto Iris",
      description:
        "TV aerial installation, upgrades and repairs to fix poor reception and missing Freeview channels in London & Essex. Local engineers. Free quotes.",
    },
    hero: {
      eyebrow: "TV Aerial Service",
      heading: "Strong Signal,\n[Every Channel]",
      text: "TV aerial installation, upgrades and fault-finding that fix poor reception and bring back missing channels",
    },
    secureCta: {
      heading: "Tired Of [Poor Reception]?",
      text: "Book a TV aerial installation or repair with a local engineer today.",
    },
    whyChoose: {
      heading: "Why Choose Auto Iris For [Aerial Installation]?",
      text: "We diagnose reception problems properly and fit the right aerial and cabling, so your TV picture stays strong and stable.",
      items: [
        {
          icon: "aerial",
          title: "Signal Tested On Site",
          text: "Reception measured before any work starts",
        },
        {
          icon: "tools",
          title: "Honest Fault-Finding",
          text: "Repairs first, replacements only when needed",
        },
        { icon: "home", title: "Extra TV Points", text: "A clear signal in every room" },
        {
          icon: "building",
          title: "Homes & Businesses",
          text: "Aerial systems for houses, shops and offices",
        },
      ],
    },
    gallery: {
      heading: "Neat, [Reliable] Workmanship",
      text: "The same tidy cabling and weatherproof fitting goes into every aerial installation and repair we carry out. Tap any photo to enlarge.",
      photos: ["neat-tidy-comms.jpeg"],
    },
    features: {
      eyebrow: "Why Choose Our Aerial Services",
      heading: "TV Aerial Installation And Repairs You Can Rely On",
      text: "Say goodbye to pixelated pictures and missing channels with professional TV aerial installation, upgrades and fault-finding for homes and businesses.",
      linkLabel: "Learn More",
      items: [
        {
          icon: "aerial",
          title: "New Aerial Installation",
          text: "Quality aerials fitted and pointed at the best transmitter for strong, stable Freeview reception.",
          href: "/contact",
        },
        {
          icon: "tools",
          title: "Fault-Finding & Repairs",
          text: "We track down signal problems, damaged cables and faulty connections, then fix them properly.",
          href: "/contact",
        },
        {
          icon: "satelliteDish",
          title: "Satellite Dish Installation",
          text: "Add a correctly aligned satellite dish for even more channels alongside your aerial.",
          href: "/services/satellite-dish",
        },
      ],
    },
    propertyHeading: "TV Aerials For Every Property",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Clear Freeview reception in every room of your home",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Reliable TV signal for shops, pubs and waiting areas",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Aerial systems for receptions, staff rooms and meeting spaces",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Aerial setups for site cabins and welfare units",
      },
    ],
    process: {
      eyebrow: "The Aerial Process",
      heading: "How We Fix Your TV Reception",
      steps: [
        { number: "01", title: "Test", text: "Signal Strength Measured On Site" },
        { number: "02", title: "Diagnose", text: "Faults And Weak Points Identified" },
        { number: "03", title: "Install", text: "Aerial And Cabling Fitted Or Upgraded" },
        { number: "04", title: "Tune", text: "Channels Retuned And Checked" },
      ],
    },
    localKnowledgeHeading: "Local Aerial Installers.\nProfessional Results.",
    localKnowledge: [
      "Fix poor TV reception with professional aerial installation from a local team based in Barking. We install, upgrade and repair TV aerials for homes and businesses across East London, Essex and surrounding areas.",
      "We test your signal on site, find the cause of any problems and fit the right aerial and cabling, so you get strong, stable reception and every available channel.",
    ],
    faqs: [
      {
        question: "Why am I missing Freeview channels?",
        answer:
          "Missing channels are usually caused by a weak or misaligned aerial, damaged cables or a faulty connection. We test your signal and fix the cause.",
      },
      {
        question: "Do I need a new aerial or just a repair?",
        answer:
          "Not always a new one. We test your existing aerial and cabling first and only recommend a replacement if it is needed.",
      },
      {
        question: "Can you add TV points to other rooms?",
        answer:
          "Yes. We can install extra TV points and signal distribution so every room gets a clear picture.",
      },
      {
        question: "Do you install aerials for businesses?",
        answer:
          "Yes. We install and repair aerial systems for shops, offices, pubs and other commercial properties.",
      },
      {
        question: "Which areas do you cover for aerial installation?",
        answer: areasAnswer("TV aerial installation and repairs"),
      },
    ],
  },

  maintenance: {
    meta: {
      title: "Security System Maintenance London & Essex | Auto Iris",
      description:
        "Servicing and repairs for CCTV, intruder alarms, access control and aerial systems in London & Essex. One local team, 24/7 callouts. Free quotes.",
    },
    hero: {
      eyebrow: "Maintenance Service",
      heading: "Security Systems\n[That Keep Working]",
      text: "Servicing and repairs for CCTV, alarms, access control and aerial systems, all handled by one trusted local team",
    },
    secureCta: {
      heading: "Ready To Book [A Service]?",
      text: "Arrange maintenance for your CCTV, alarm, access control or aerial system today.",
    },
    whyChoose: {
      heading: "Why Choose Auto Iris For [Security Maintenance]?",
      text: "One local team looks after all your security and TV systems, so there is one number to call and one company keeping everything working.",
      items: [
        {
          icon: "tools",
          title: "All Systems Covered",
          text: "CCTV, alarms, access control and aerials",
        },
        {
          icon: "shieldSearch",
          title: "Any Installer's Systems",
          text: "We maintain systems other companies have fitted",
        },
        {
          icon: "calendar",
          title: "Planned Servicing",
          text: "Regular visits at times that suit you",
        },
        { icon: "clock", title: "24/7 Callouts", text: "Fast help when something goes wrong" },
      ],
    },
    gallery: {
      heading: "Systems [We Maintain]",
      text: "Cameras and security equipment in car parks, plant rooms, shops and entrances, installed and maintained by our team. Tap any photo to enlarge.",
      photos: [
        "basement-plant-room-turret-camera.jpeg",
        "bike-store-turret-camera.jpeg",
        "basement-car-park-turret-camera.jpeg",
        "retail-dome-camera-closeup.jpeg",
        "supermarket-ceiling-dome-camera.jpeg",
        "hikvision-turret-camera-closeup.jpeg",
      ],
    },
    features: {
      eyebrow: "Why Choose Our Maintenance",
      heading: "Security System Maintenance From One Local Team",
      text: "Keep your CCTV, alarms, access control and aerial systems working at their best with regular servicing and fast repairs from one trusted team.",
      linkLabel: "Learn More",
      items: [
        {
          icon: "camera",
          title: "CCTV Health Checks",
          text: "Cameras cleaned and refocused, recorders and hard drives tested, so you never miss important footage.",
          href: "/services/cctv-installation",
        },
        {
          icon: "shieldCheck",
          title: "Alarm & Access Servicing",
          text: "Sensors, panels, readers and door hardware tested and adjusted to keep your property secure.",
          href: "/services/alarm-maintenance",
        },
        {
          icon: "clock",
          title: "Fast Response Repairs",
          text: "When something goes wrong, we respond quickly, with 24/7 emergency callouts available.",
          href: "/contact",
        },
      ],
    },
    propertyHeading: "Maintenance For Every Property",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Keep your home CCTV, alarm and aerial working properly",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Servicing that keeps shop security systems reliable",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Planned maintenance for office security and entry systems",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Checks and repairs for site CCTV, alarms and access control",
      },
    ],
    process: {
      eyebrow: "The Maintenance Process",
      heading: "How Our Maintenance Visits Work",
      steps: [
        { number: "01", title: "Book", text: "Choose A Time That Suits You" },
        { number: "02", title: "Inspect", text: "Every System Checked And Tested" },
        { number: "03", title: "Repair", text: "Faults Fixed On The Spot Where Possible" },
        { number: "04", title: "Advise", text: "Clear Report And Next Steps" },
      ],
    },
    localKnowledgeHeading: "Local Maintenance Engineers.\nProfessional Results.",
    localKnowledge: [
      "Keep every security system working properly with maintenance from a local team based in Barking. We service and repair CCTV, intruder alarms, access control and aerial systems across East London, Essex and surrounding areas.",
      "One team looks after everything, from camera health checks and alarm testing to door hardware and aerial repairs, with fast response and 24/7 emergency callouts when you need them.",
    ],
    faqs: [
      {
        question: "Which systems do you maintain?",
        answer:
          "We maintain CCTV, intruder alarms, access control, door entry, satellite and aerial systems.",
      },
      {
        question: "Do you maintain systems installed by someone else?",
        answer:
          "Yes. We service and repair most systems, even if we didn't install them originally.",
      },
      {
        question: "How often should security systems be serviced?",
        answer:
          "We recommend servicing security systems at least once a year, or more often for busy commercial properties.",
      },
      {
        question: "Do you offer emergency repairs?",
        answer: "Yes. Emergency callouts are available 24 hours a day, 7 days a week.",
      },
      {
        question: "Which areas do you cover for maintenance?",
        answer: areasAnswer("security system maintenance"),
      },
    ],
  },
};

export function getServiceDetailContent(service: ServiceListItem) {
  const copy = serviceCopy[service.slug];
  // Fails the build if a service is added to data/services.ts without its page content.
  if (!copy) throw new Error(`Missing service page content for "${service.slug}"`);

  const hero: FullScreenHeroProps = {
    ...copy.hero,
    image: heroImage,
    ctas: [callCta, quoteCta],
    trust: heroTrust,
  };

  const stats: StatsProps = { items: statItems };

  const propertyTypes: WhyChooseProps = {
    id: "property-types",
    className: "why-choose-shaded",
    eyebrow: service.title,
    heading: copy.propertyHeading,
    items: copy.propertyTypes,
  };

  const secureCta: CtaBannerProps = {
    className: "cta-banner-outline",
    ...copy.secureCta,
    ctas: [{ ...quoteCta, variant: "primary" }, whatsappCta],
  };

  const whyChoose: WhyChooseProps = { eyebrow: "Why Choose Us", ...copy.whyChoose };

  const localKnowledge: ServicesIntroProps = {
    id: "local-knowledge",
    eyebrow: "Protection You Can Trust",
    heading: copy.localKnowledgeHeading,
    paragraphs: copy.localKnowledge,
  };

  const gallery: GalleryProps = {
    className: "gallery-spaced",
    head: { eyebrow: "Our Work", heading: copy.gallery.heading, text: copy.gallery.text },
    items: copy.gallery.photos.map((file) => {
      const photo = galleryItems.find((item) => item.src === `/images/${file}`);
      if (!photo) throw new Error(`Gallery photo "${file}" is not in data/gallery.ts`);
      return photo;
    }),
  };

  const reviews: ReviewsProps = {
    className: "reviews-grey",
    eyebrow: "Reviews",
    items: reviewItems,
  };

  const faqs: FaqsProps = {
    eyebrow: "Need To Know More?",
    heading: `${service.title} FAQs`,
    items: copy.faqs,
  };

  return {
    meta: copy.meta,
    hero,
    stats,
    features: copy.features,
    propertyTypes,
    process: copy.process,
    secureCta,
    whyChoose,
    localKnowledge,
    gallery,
    reviews,
    faqs,
  };
}
