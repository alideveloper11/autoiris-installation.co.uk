import type { AreaLocationProps } from "@/components/sections/AreaLocation";
import type { CtaBannerProps } from "@/components/sections/CtaBanner";
import type { Faq, FaqsProps } from "@/components/sections/Faqs";
import type { FullScreenHeroProps } from "@/components/sections/FullScreenHero";
import type { ReviewsProps } from "@/components/sections/Reviews";
import type { ServiceProcessProps } from "@/components/sections/ServiceProcess";
import type { ServicesIntroProps } from "@/components/sections/ServicesIntro";
import type { ServicesListProps } from "@/components/sections/ServicesList";
import type { StatsProps } from "@/components/sections/Stats";
import type { IconItem } from "@/components/sections/types";
import type { WhyChooseProps } from "@/components/sections/WhyChoose";
import type { CtaLink } from "@/components/ui/CtaLinks";
import { serviceAreas, type ServiceArea } from "./areas";
import { reviews as reviewItems } from "./reviews";
import { allServices } from "./services";
import { site, stats as statItems } from "./site";

/*
 * Area detail page content for every /areas/[slug] page.
 * Each area has its own copy in `areaCopy`; headings add the area name, and only the hero
 * badges, stats, service cards and customer reviews are shared.
 * Headings: "[words]" are highlighted, "\n" starts a new line.
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

type AreaCopy = {
  /** Search result description (155 characters max). */
  metaDescription: string;
  heroText: string;
  /** Intro above the service cards. */
  servicesText: string;
  /** Cards for Home, Retail & Shop, Offices and Construction Sites. */
  propertyTypes: IconItem[];
  /** Two paragraphs about security in this area. */
  paragraphs: string[];
  /** Text for the "Ready To Secure" banner. */
  ctaText: string;
  /** Neighbouring areas, named in the orange banner. */
  nearby: string[];
  faqs: Faq[];
};

/** Content unique to each area page, keyed by the slug in data/areas.ts. */
const areaCopy: Record<string, AreaCopy> = {
  barking: {
    metaDescription:
      "Auto Iris is based in Barking, installing CCTV, intruder alarms, access control and door entry for local homes and businesses. 24/7 callouts. Free quotes.",
    heroText:
      "From our base in Barking we install and maintain CCTV, intruder alarms, access control and door entry systems for homes and businesses across Barking and Dagenham",
    servicesText:
      "As Barking's local security installers, we offer every service we provide, from a single CCTV camera to complete access control systems, with engineers close by.",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "CCTV and alarms for Barking houses, flats and new-build apartments",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Protect shops and takeaways in and around Barking town centre",
      },
      {
        icon: "building",
        title: "Offices",
        text: "CCTV and entry control for offices, surgeries and community buildings",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Site CCTV and alarms for developments such as Barking Riverside",
      },
    ],
    paragraphs: [
      "Barking is where Auto Iris Installations is based, so local customers get engineers who know the area well. We install CCTV, intruder alarms, access control and video door entry across the town centre, Barking Riverside and the surrounding residential streets.",
      "Being close by means faster site surveys, quicker installations and rapid help when something goes wrong, with 24/7 emergency callouts for Barking homes and businesses.",
    ],
    ctaText: "Get a free quote from the security installers based right here in Barking.",
    nearby: ["Dagenham", "Ilford", "Chadwell Heath", "East Ham", "Beckton"],
    faqs: [
      {
        question: "Are you based in Barking?",
        answer:
          "Yes. Auto Iris Installations is based in Barking, so we can reach local properties quickly for surveys, installations and emergency callouts.",
      },
      {
        question: "Do you install CCTV in Barking Riverside?",
        answer:
          "Yes. We install CCTV, video door entry and alarms for homes and communal buildings across Barking Riverside and the rest of Barking.",
      },
      {
        question: "Can you secure a shop in Barking town centre?",
        answer:
          "Yes. We fit CCTV, intruder alarms and access control for shops, takeaways and small businesses in and around Barking town centre.",
      },
      {
        question: "Do you cover areas near Barking?",
        answer:
          "Yes. We regularly work in nearby Dagenham, Ilford, Chadwell Heath, East Ham and Beckton.",
      },
    ],
  },
  ilford: {
    metaDescription:
      "CCTV, burglar alarm and access control installation in Ilford for homes, flats, shops and offices. Local engineers from nearby Barking. Free quotes.",
    heroText:
      "Local CCTV, intruder alarm and access control installation for Ilford homes, flats, shops and offices, from engineers based nearby in Barking",
    servicesText:
      "From Victorian terraces to busy high street shops, we install and maintain the full range of security systems across Ilford.",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Discreet CCTV and alarms for Ilford terraces, semis and flats",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Deter theft at shops and restaurants along Ilford's busy high streets",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Entry control and CCTV for offices, clinics and professional premises",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Temporary CCTV and alarms for building and conversion projects",
      },
    ],
    paragraphs: [
      "Ilford is one of East London's busiest town centres, with high street shops, offices and a large mix of period homes and modern flats. We install HD CCTV, wired and wireless intruder alarms, video intercoms and access control to suit each type of property.",
      "Our engineers are based nearby in Barking, so Ilford customers benefit from quick site surveys, tidy installations and 24/7 emergency callouts when a system fails or a break-in happens.",
    ],
    ctaText: "Arrange a visit and a free quote for your Ilford home or business.",
    nearby: ["Barking", "Chadwell Heath", "Forest Gate", "Leytonstone", "Romford"],
    faqs: [
      {
        question: "Do you install CCTV in Ilford?",
        answer:
          "Yes. We install wired and wireless CCTV for Ilford homes, flats, shops and offices, with remote viewing set up on your phone.",
      },
      {
        question: "Can you fit an alarm in a Victorian terraced house?",
        answer:
          "Yes. Wireless alarms suit period homes well because they need minimal cabling and cause little disruption to your decor.",
      },
      {
        question: "How quickly can you get to Ilford?",
        answer:
          "Ilford is a short drive from our Barking base, so surveys can be arranged quickly and we respond fast to emergencies.",
      },
      {
        question: "Do you cover areas near Ilford?",
        answer:
          "Yes. We also work in Barking, Chadwell Heath, Forest Gate, Leytonstone and Romford.",
      },
    ],
  },
  stratford: {
    metaDescription:
      "CCTV, video door entry and access control installers in Stratford for apartments, shops and offices. Local, certified engineers. Free quotes.",
    heroText:
      "CCTV, video door entry, alarm and access control installation for Stratford apartments, homes, shops and offices, from certified local engineers",
    servicesText:
      "Stratford's new-build apartments, busy retail and growing office space all need different security. We install and maintain every system to suit.",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Video doorbells, CCTV and alarms for apartments and townhouses",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "CCTV and alarms for shops, cafés and restaurants in busy shopping areas",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Access control and intercoms for offices and shared workspaces",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Site security for Stratford's construction and regeneration projects",
      },
    ],
    paragraphs: [
      "Stratford has changed rapidly since the London 2012 Olympics, with new apartment blocks, offices and retail around Westfield Stratford City and the Queen Elizabeth Olympic Park. We install CCTV, video door entry and access control that suit modern buildings and busy commercial spaces.",
      "For residential blocks we fit door entry and access control for communal entrances, while homeowners and businesses choose HD CCTV and intruder alarms with app control and remote viewing.",
    ],
    ctaText: "Get a free quote for CCTV, door entry or access control in Stratford.",
    nearby: ["Forest Gate", "Leytonstone", "Canning Town", "East Ham", "Walthamstow"],
    faqs: [
      {
        question: "Do you install door entry in Stratford apartment blocks?",
        answer:
          "Yes. We install audio and video door entry and access control for communal entrances in apartment blocks and managed buildings.",
      },
      {
        question: "Can I get CCTV for a shop in Stratford?",
        answer:
          "Yes. We fit HD CCTV and intruder alarms for shops, cafés and restaurants, with live viewing so you can check your premises from anywhere.",
      },
      {
        question: "Do you secure construction sites in Stratford?",
        answer:
          "Yes. We install CCTV and alarm systems that help protect plant, tools and materials on construction and regeneration sites.",
      },
      {
        question: "Do you cover areas near Stratford?",
        answer:
          "Yes. We also work in Forest Gate, Leytonstone, Canning Town, East Ham and Walthamstow.",
      },
    ],
  },
  "east-ham-beckton": {
    metaDescription:
      "CCTV, burglar alarm and access control installation in East Ham and Beckton for homes, shops and industrial units. Local engineers. Free quotes.",
    heroText:
      "Local CCTV, alarm and access control installation for East Ham and Beckton homes, high street shops, retail parks and industrial units",
    servicesText:
      "From East Ham High Street to Beckton's retail and industrial estates, we install and maintain security for homes and businesses of every size.",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "CCTV and alarms for East Ham terraces and Beckton family homes",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Loss prevention CCTV for high street shops and retail park units",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Secure entry and CCTV for offices, surgeries and business units",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "CCTV and alarms for building sites, yards and industrial premises",
      },
    ],
    paragraphs: [
      "East Ham is known for its busy high street, while Beckton combines modern housing with retail parks and industrial estates. We install CCTV, intruder alarms and access control that suit everything from family homes to warehouses and trade counters.",
      "Businesses often combine CCTV with alarms and keyless entry to protect stock and staff, while homeowners choose discreet cameras and app-controlled alarms. Every installation is fully tested and backed by our 12-month guarantee.",
    ],
    ctaText: "Request a free quote for your East Ham or Beckton property.",
    nearby: ["Barking", "Canning Town", "Forest Gate", "Stratford", "Ilford"],
    faqs: [
      {
        question: "Do you fit CCTV for East Ham homes and businesses?",
        answer:
          "Yes. We install CCTV for East Ham homes and high street businesses, with clear footage and remote viewing on your phone.",
      },
      {
        question: "Can you secure an industrial unit in Beckton?",
        answer:
          "Yes. We install CCTV, intruder alarms and access control for industrial units, warehouses and yards across Beckton.",
      },
      {
        question: "Do you offer emergency callouts in East Ham and Beckton?",
        answer:
          "Yes. Emergency callouts are available 24 hours a day, 7 days a week if your alarm or CCTV develops a fault.",
      },
      {
        question: "Do you cover areas near East Ham and Beckton?",
        answer: "Yes. We also work in Barking, Canning Town, Forest Gate, Stratford and Ilford.",
      },
    ],
  },
  thurrock: {
    metaDescription:
      "CCTV, alarm and access control installers in Thurrock for homes, warehouses and logistics sites. Local engineers from nearby Barking. Free quotes.",
    heroText:
      "CCTV, intruder alarm and access control installation across Thurrock for homes, shops, warehouses and logistics businesses",
    servicesText:
      "Thurrock's mix of towns, villages and busy commercial areas means security needs vary. We install and maintain systems for every type of property.",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "CCTV and alarms for homes across Thurrock's towns and villages",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Security for shops and retail units, from high streets to retail parks",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Access control and CCTV for offices, depots and trade premises",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "CCTV and alarms protecting sites, yards and logistics compounds",
      },
    ],
    paragraphs: [
      "Thurrock stretches from Lakeside and West Thurrock through Grays and Tilbury to rural villages such as Orsett, with a strong base of warehousing and logistics. We install CCTV, intruder alarms and access control for large commercial sites as well as family homes.",
      "Warehouses and yards often need wide-area CCTV with remote viewing, while homeowners prefer discreet cameras and easy-to-use alarms. We plan each system around your property and test everything before handover.",
    ],
    ctaText: "Get a free quote for home or commercial security anywhere in Thurrock.",
    nearby: ["Grays", "Tilbury", "South Ockendon", "Orsett"],
    faqs: [
      {
        question: "Which parts of Thurrock do you cover?",
        answer:
          "We cover the whole of Thurrock, including Grays, Tilbury, South Ockendon, Orsett, West Thurrock and the surrounding villages.",
      },
      {
        question: "Do you install CCTV for warehouses in Thurrock?",
        answer:
          "Yes. We install CCTV, alarms and access control for warehouses, logistics yards and trade premises, with remote viewing for site managers.",
      },
      {
        question: "Can you protect a rural property in Thurrock?",
        answer:
          "Yes. We install CCTV and alarms for rural homes and outbuildings, choosing wired or wireless equipment to suit the site.",
      },
      {
        question: "Do you offer 24/7 callouts in Thurrock?",
        answer:
          "Yes. Emergency callouts are available 24 hours a day, 7 days a week across Thurrock.",
      },
    ],
  },
  grays: {
    metaDescription:
      "Local CCTV, burglar alarm and door entry installation in Grays, Essex for homes, flats and high street businesses. 24/7 callouts. Free quotes.",
    heroText:
      "Local CCTV, burglar alarm, door entry and access control installation for homes, flats and businesses across Grays and the surrounding area",
    servicesText:
      "From town centre shops to residential streets and riverside flats, we install and maintain every type of security system in Grays.",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "CCTV, alarms and video doorbells for Grays houses and flats",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Protect shops and businesses in and around Grays town centre",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Door entry and CCTV for offices, clinics and community buildings",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Temporary site CCTV and alarms for local building projects",
      },
    ],
    paragraphs: [
      "Grays is Thurrock's main town, with a busy high street, established residential streets and newer flats close to the riverside. We install CCTV, intruder alarms, video door entry and access control for homeowners, landlords and local businesses.",
      "Landlords often choose door entry and communal CCTV for flats, while shops and offices combine alarms with HD cameras. Every system is installed neatly by our own engineers and backed by a minimum 12-month guarantee.",
    ],
    ctaText: "Get a free, no-obligation security quote for your Grays property.",
    nearby: ["Tilbury", "South Ockendon", "Orsett", "Upminster", "Thurrock"],
    faqs: [
      {
        question: "Do you install burglar alarms in Grays?",
        answer:
          "Yes. We install wired and wireless burglar alarms from Pyronix, AX Pro and Yale for homes and businesses in Grays.",
      },
      {
        question: "Can you fit door entry for flats in Grays?",
        answer:
          "Yes. We install audio and video door entry systems for blocks of flats and communal entrances, including upgrades to older systems.",
      },
      {
        question: "Do you work with landlords in Grays?",
        answer:
          "Yes. We install and maintain CCTV, alarms and door entry for landlords and managing agents with properties in Grays.",
      },
      {
        question: "Do you cover areas near Grays?",
        answer:
          "Yes. We also work in Tilbury, South Ockendon, Orsett, Upminster and across Thurrock.",
      },
    ],
  },
  upminster: {
    metaDescription:
      "CCTV, intruder alarm and access control installation in Upminster for family homes and local businesses. Certified local engineers. Free quotes.",
    heroText:
      "Discreet CCTV, intruder alarms and access control for Upminster family homes, driveways and local businesses, installed by certified local engineers",
    servicesText:
      "Upminster homeowners and businesses trust us for tidy installations that protect their property without spoiling its appearance.",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Discreet CCTV for driveways, gardens and detached family homes",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Alarms and CCTV for independent shops and cafés",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Entry control and CCTV for offices and professional practices",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Security for extensions, renovations and new builds",
      },
    ],
    paragraphs: [
      "Upminster, on the edge of London and Essex, is known for its larger family homes, quiet residential roads and independent shops. We install CCTV, intruder alarms and access control that protect homes and businesses while blending in with their surroundings.",
      "Many Upminster homeowners choose cameras covering driveways and garden access, paired with app-controlled alarms so they can check on their property while away. We position every camera carefully and keep cabling neat and discreet.",
    ],
    ctaText: "Get a free quote for discreet home security in Upminster.",
    nearby: ["Hornchurch", "Romford", "South Ockendon", "Orsett", "Brentwood"],
    faqs: [
      {
        question: "Can you install CCTV to cover my driveway in Upminster?",
        answer:
          "Yes. We position HD cameras to cover driveways, gates and garden access, with remote viewing so you can check your property from anywhere.",
      },
      {
        question: "Will cameras spoil the look of my home?",
        answer:
          "No. We choose compact cameras, place them carefully and hide cabling wherever possible for a neat, discreet finish.",
      },
      {
        question: "Do you install smart alarms in Upminster?",
        answer:
          "Yes. We fit alarms with app control, so you can arm, disarm and receive alerts from your phone.",
      },
      {
        question: "Do you cover areas near Upminster?",
        answer: "Yes. We also work in Hornchurch, Romford, South Ockendon, Orsett and Brentwood.",
      },
    ],
  },
  orsett: {
    metaDescription:
      "CCTV, alarm and access control installation in Orsett for village homes, rural properties and outbuildings. Wired and wireless options. Free quotes.",
    heroText:
      "CCTV, intruder alarm and gate access installation for Orsett village homes, rural properties, outbuildings and local businesses",
    servicesText:
      "Rural and village properties bring their own security challenges. We design systems for Orsett that cover long driveways, gates and outbuildings.",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "CCTV and alarms for village homes, cottages and large plots",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Security for village shops, pubs and local businesses",
      },
      {
        icon: "building",
        title: "Offices",
        text: "CCTV and entry control for rural offices and business units",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Protect equipment on building, renovation and agricultural sites",
      },
    ],
    paragraphs: [
      "Orsett is a village in Thurrock surrounded by open countryside, with many homes set on larger plots with driveways, gates and outbuildings. We install CCTV, intruder alarms and gate access control designed for rural and semi-rural properties.",
      "Wide plots often need cameras that cover longer distances and wireless equipment where running cables is impractical. We survey each property carefully so every entrance, outbuilding and parking area is covered.",
    ],
    ctaText: "Arrange a free quote for rural or village security in Orsett.",
    nearby: ["Grays", "South Ockendon", "Tilbury", "Basildon", "Thurrock"],
    faqs: [
      {
        question: "Can you secure outbuildings and garages in Orsett?",
        answer:
          "Yes. We install CCTV and alarm sensors that protect garages, sheds and outbuildings as well as the main house.",
      },
      {
        question: "Is wireless CCTV suitable for a large rural plot?",
        answer:
          "Often, yes. Wireless equipment can cover areas where running cables is difficult, and we survey the site to recommend the most reliable option.",
      },
      {
        question: "Can you install access control on a driveway gate?",
        answer:
          "Yes. We install keypad, fob and intercom access control for driveway and property gates.",
      },
      {
        question: "Do you cover areas near Orsett?",
        answer:
          "Yes. We also work in Grays, South Ockendon, Tilbury, Basildon and across Thurrock.",
      },
    ],
  },
  dagenham: {
    metaDescription:
      "CCTV, alarm and door entry installation in Dagenham for homes, flats and industrial units. Local engineers from neighbouring Barking. Free quotes.",
    heroText:
      "CCTV, burglar alarm and door entry installation for Dagenham homes, flats and industrial businesses, from engineers based next door in Barking",
    servicesText:
      "Dagenham's large residential areas and industrial land need reliable, practical security. We install and maintain systems for both.",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Practical CCTV and alarms for Dagenham houses and flats",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "CCTV and alarms for local parades, shops and takeaways",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Access control and CCTV for offices and trade counters",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Security for industrial yards, depots and building sites",
      },
    ],
    paragraphs: [
      "Dagenham combines large residential areas, including the historic Becontree estate, with industrial land around Dagenham Dock. We install CCTV, intruder alarms and door entry for homeowners and landlords, and robust CCTV and access control for industrial businesses.",
      "As our neighbouring town, Dagenham is close to our Barking base, which means quick site surveys, efficient installations and fast help when your system needs attention.",
    ],
    ctaText: "Get a free quote from your neighbouring security installers in Barking.",
    nearby: ["Barking", "Chadwell Heath", "Romford", "Hornchurch", "Ilford"],
    faqs: [
      {
        question: "Can you install CCTV at my Dagenham home?",
        answer:
          "Yes. We install CCTV for Dagenham homes, flats and businesses, including remote viewing on your phone.",
      },
      {
        question: "Can you secure an industrial unit near Dagenham Dock?",
        answer:
          "Yes. We fit CCTV, intruder alarms and access control for industrial units, yards and depots.",
      },
      {
        question: "Do you install alarms for Dagenham landlords?",
        answer:
          "Yes. We install and maintain alarms, CCTV and door entry for landlords with houses and flats in Dagenham.",
      },
      {
        question: "Do you cover areas near Dagenham?",
        answer: "Yes. We also work in Barking, Chadwell Heath, Romford, Hornchurch and Ilford.",
      },
    ],
  },
  romford: {
    metaDescription:
      "CCTV, alarm and access control installers in Romford for homes, shops and offices. Certified engineers, 24/7 callouts and free, no-obligation quotes.",
    heroText:
      "CCTV, intruder alarm and access control installation for Romford homes, town centre shops, offices and commercial premises",
    servicesText:
      "As one of East London's biggest shopping towns, Romford has varied security needs. We cover them all, from family homes to busy retail units.",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "CCTV and alarms for Romford houses, flats and new developments",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Loss prevention CCTV for shops, market traders and restaurants",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Access control and intercoms for offices and commercial buildings",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Site CCTV and alarms for local building projects",
      },
    ],
    paragraphs: [
      "Romford is a major shopping and commercial centre, with a historic market, busy town centre and large residential areas around it. We install CCTV, intruder alarms and access control for retailers, offices and homeowners across the town.",
      "Retail customers often need clear footage of tills, entrances and stock areas, while offices choose keyless access control and video intercoms. Homeowners in Romford favour discreet CCTV and app-controlled alarms, all fitted neatly and fully tested.",
    ],
    ctaText: "Request a free quote for your Romford home or business.",
    nearby: ["Hornchurch", "Upminster", "Chadwell Heath", "Dagenham", "Brentwood"],
    faqs: [
      {
        question: "Can you install CCTV in a Romford shop?",
        answer:
          "Yes. We install HD CCTV covering tills, entrances and stock areas, with live and recorded footage available on your phone.",
      },
      {
        question: "Do you install access control for Romford offices?",
        answer:
          "Yes. We fit fob, card, PIN and app-based access control, and can combine it with video intercoms.",
      },
      {
        question: "Do you service alarms in Romford?",
        answer:
          "Yes. We service and repair intruder alarms in Romford, including systems fitted by other companies.",
      },
      {
        question: "Do you cover areas near Romford?",
        answer:
          "Yes. We also work in Hornchurch, Upminster, Chadwell Heath, Dagenham and Brentwood.",
      },
    ],
  },
  hornchurch: {
    metaDescription:
      "CCTV, burglar alarm and video doorbell installation in Hornchurch for family homes and local businesses. Neat, discreet fitting. Free quotes.",
    heroText:
      "CCTV, burglar alarm, video doorbell and access control installation for Hornchurch family homes and local businesses",
    servicesText:
      "Hornchurch homeowners want security that works reliably and looks tidy. We install and maintain systems that do both.",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Discreet CCTV and smart alarms for Hornchurch family homes",
      },
      { icon: "store", title: "Retail & Shop", text: "Security for local shops, cafés and salons" },
      {
        icon: "building",
        title: "Offices",
        text: "CCTV and entry control for offices, surgeries and studios",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Protection for extensions, loft conversions and renovations",
      },
    ],
    paragraphs: [
      "Hornchurch is a popular residential area with well-kept family homes, local shopping parades and a strong community feel. We install CCTV, intruder alarms, video doorbells and access control that give Hornchurch residents peace of mind.",
      "Many families choose video doorbells and front-of-house cameras to see who is calling and keep an eye on parcels, alongside alarms they can control from their phones. Every system is fitted neatly and explained clearly before we leave.",
    ],
    ctaText: "Get a free quote for home security in Hornchurch.",
    nearby: ["Romford", "Upminster", "Dagenham", "Chadwell Heath", "South Ockendon"],
    faqs: [
      {
        question: "Do you install video doorbells in Hornchurch?",
        answer:
          "Yes. We install video doorbells and intercoms so you can see and speak to callers from your phone.",
      },
      {
        question: "Can I control my Hornchurch alarm from my phone?",
        answer:
          "Yes. Many of the alarms we install have app control for arming, disarming and instant alerts.",
      },
      {
        question: "Do you install CCTV for small businesses in Hornchurch?",
        answer:
          "Yes. We install CCTV and alarms for shops, cafés, salons and offices across Hornchurch.",
      },
      {
        question: "Do you cover areas near Hornchurch?",
        answer:
          "Yes. We also work in Romford, Upminster, Dagenham, Chadwell Heath and South Ockendon.",
      },
    ],
  },
  "chadwell-heath": {
    metaDescription:
      "CCTV, intruder alarm and door entry installation in Chadwell Heath for homes, flats and local businesses. Engineers based nearby. Free quotes.",
    heroText:
      "CCTV, intruder alarm and door entry installation for Chadwell Heath homes, flats and local businesses, from engineers based a short drive away",
    servicesText:
      "Chadwell Heath's residential streets and High Road businesses are a short drive from our base, so help is never far away.",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "CCTV and alarms for Chadwell Heath houses and maisonettes",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Security for High Road shops, takeaways and services",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Door entry and CCTV for offices and small business premises",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "CCTV and alarms for local building and refurbishment sites",
      },
    ],
    paragraphs: [
      "Chadwell Heath sits between Romford, Ilford and Dagenham, with residential streets, a busy High Road and rail links on the Elizabeth line. We install CCTV, intruder alarms and door entry systems for homeowners, landlords and local businesses.",
      "Being close to our Barking base means we can survey, install and repair systems in Chadwell Heath quickly, with 24/7 emergency callouts available if your alarm or CCTV develops a fault.",
    ],
    ctaText: "Arrange a free security quote for your Chadwell Heath property.",
    nearby: ["Ilford", "Romford", "Dagenham", "Barking", "Hornchurch"],
    faqs: [
      {
        question: "Do you offer CCTV installation in Chadwell Heath?",
        answer:
          "Yes. We install CCTV for Chadwell Heath homes, flats and businesses, with remote viewing set up before we leave.",
      },
      {
        question: "Can you secure a shop on Chadwell Heath High Road?",
        answer:
          "Yes. We fit CCTV, intruder alarms and access control for shops, takeaways and service businesses.",
      },
      {
        question: "Do you repair existing alarms in Chadwell Heath?",
        answer:
          "Yes. We repair and service most intruder alarm systems, even if they were installed by another company.",
      },
      {
        question: "Do you cover areas near Chadwell Heath?",
        answer: "Yes. We also work in Ilford, Romford, Dagenham, Barking and Hornchurch.",
      },
    ],
  },
  "canning-town": {
    metaDescription:
      "CCTV, video door entry and access control installation in Canning Town for apartments, homes and businesses near the Royal Docks. Free quotes.",
    heroText:
      "CCTV, video door entry and access control installation for Canning Town apartments, homes and businesses around the Royal Docks",
    servicesText:
      "Regeneration has brought new homes and businesses to Canning Town. We install security that suits modern developments and established streets alike.",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Video intercoms, CCTV and alarms for apartments and family homes",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "CCTV and alarms for local shops and new retail units",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Access control for offices and workspaces near the Royal Docks",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Security for regeneration and new-build construction sites",
      },
    ],
    paragraphs: [
      "Canning Town has seen major regeneration, with new apartment developments and businesses close to the Royal Docks and ExCeL London. We install CCTV, video door entry and access control for modern residential blocks as well as long-established homes and businesses.",
      "Apartment owners and managing agents often need door entry and access control for communal areas, while businesses combine HD CCTV with alarms. We plan each installation around the building and test everything before handover.",
    ],
    ctaText: "Get a free quote for home or business security in Canning Town.",
    nearby: ["Stratford", "East Ham", "Beckton", "Forest Gate", "Barking"],
    faqs: [
      {
        question: "Do you install door entry in Canning Town developments?",
        answer:
          "Yes. We install video door entry and access control for apartment blocks, communal entrances and managed buildings.",
      },
      {
        question: "Can you provide CCTV for a building site in Canning Town?",
        answer:
          "Yes. We install CCTV and alarms that help protect equipment and materials on construction sites.",
      },
      {
        question: "Do you install home CCTV in Canning Town?",
        answer:
          "Yes. We install CCTV for houses and flats, with cameras positioned to cover entrances and remote viewing on your phone.",
      },
      {
        question: "Do you cover areas near Canning Town?",
        answer: "Yes. We also work in Stratford, East Ham, Beckton, Forest Gate and Barking.",
      },
    ],
  },
  "forest-gate": {
    metaDescription:
      "CCTV, burglar alarm and door entry installation in Forest Gate for Victorian homes, flats and local shops. Neat, discreet fitting. Free quotes.",
    heroText:
      "CCTV, burglar alarm and door entry installation for Forest Gate Victorian homes, converted flats and local shops",
    servicesText:
      "Forest Gate's period homes and converted flats need security that is effective without damaging original features. That is exactly what we install.",
    propertyTypes: [
      { icon: "home", title: "Home", text: "Wireless alarms and neat CCTV for Victorian houses" },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "CCTV and alarms for shops, cafés and restaurants on local high streets",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Entry control and CCTV for small offices and clinics",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Security for conversions, extensions and renovation projects",
      },
    ],
    paragraphs: [
      "Forest Gate is known for its tree-lined streets of Victorian houses, many now converted into flats, alongside independent shops and cafés. We install CCTV, intruder alarms and door entry systems that suit period properties and multi-occupancy buildings.",
      "Wireless alarms and carefully routed cabling help protect original features, while landlords of converted houses often add video door entry for each flat. Our engineers keep every installation neat and tidy.",
    ],
    ctaText: "Request a free quote for your Forest Gate property.",
    nearby: ["Stratford", "Leytonstone", "Ilford", "East Ham", "Canning Town"],
    faqs: [
      {
        question: "Can you install an alarm without damaging period features?",
        answer:
          "Yes. Wireless alarms need very little cabling, and we route any wiring carefully to protect original features.",
      },
      {
        question: "Do you install door entry for converted flats in Forest Gate?",
        answer:
          "Yes. We install audio and video door entry that lets each flat answer callers and release the front door.",
      },
      {
        question: "Do you install CCTV for Forest Gate shops?",
        answer:
          "Yes. We fit CCTV and alarms for shops, cafés and restaurants, with live viewing on your phone.",
      },
      {
        question: "Do you cover areas near Forest Gate?",
        answer: "Yes. We also work in Stratford, Leytonstone, Ilford, East Ham and Canning Town.",
      },
    ],
  },
  leytonstone: {
    metaDescription:
      "CCTV, intruder alarm and video doorbell installation in Leytonstone for homes, flats and independent businesses. Local engineers. Free quotes.",
    heroText:
      "CCTV, intruder alarm, video doorbell and door entry installation for Leytonstone homes, flats and independent businesses",
    servicesText:
      "From family homes to independent shops along the High Road, we install and maintain security systems throughout Leytonstone.",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Video doorbells, CCTV and alarms for Leytonstone homes and flats",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Security for independent shops, cafés and bars on the High Road",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Door entry and CCTV for studios, offices and small businesses",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "CCTV and alarms for renovation and building projects",
      },
    ],
    paragraphs: [
      "Leytonstone combines Victorian and Edwardian family homes with flats and a lively High Road of independent shops, cafés and bars. We install CCTV, intruder alarms, video doorbells and door entry that suit both homes and small businesses.",
      "Homeowners often want to keep an eye on deliveries and front doors, while independent businesses need reliable CCTV and alarms to protect stock after hours. Every system is installed tidily and set up so you can check it from your phone.",
    ],
    ctaText: "Arrange a free quote for your Leytonstone home or business.",
    nearby: ["Walthamstow", "Forest Gate", "Stratford", "Ilford", "Canning Town"],
    faqs: [
      {
        question: "Can you fit a video doorbell at my Leytonstone home?",
        answer:
          "Yes. We install video doorbells and intercoms so you can see callers and keep an eye on deliveries from your phone.",
      },
      {
        question: "Can you secure an independent business in Leytonstone?",
        answer:
          "Yes. We install CCTV, alarms and access control for shops, cafés, bars and studios.",
      },
      {
        question: "Do you install alarms in flats in Leytonstone?",
        answer:
          "Yes. We install wireless alarms that suit flats and maisonettes with minimal disruption.",
      },
      {
        question: "Do you cover areas near Leytonstone?",
        answer:
          "Yes. We also work in Walthamstow, Forest Gate, Stratford, Ilford and Canning Town.",
      },
    ],
  },
  walthamstow: {
    metaDescription:
      "CCTV, burglar alarm and door entry installation in Walthamstow for homes, flats, market traders and shops. Certified engineers. Free quotes.",
    heroText:
      "CCTV, burglar alarm and door entry installation for Walthamstow homes, flats, market traders and high street businesses",
    servicesText:
      "Walthamstow's busy market, shops and residential streets all benefit from reliable security. We install and maintain systems to suit each.",
    propertyTypes: [
      { icon: "home", title: "Home", text: "CCTV and alarms for Walthamstow terraces and flats" },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "CCTV for shops and businesses along Walthamstow's busy market street",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Access control and CCTV for offices and creative workspaces",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Security for renovation, extension and development sites",
      },
    ],
    paragraphs: [
      "Walthamstow is home to one of London's longest street markets, surrounded by streets of terraced houses, flats and growing creative businesses. We install CCTV, intruder alarms, door entry and access control for homes and businesses across the area.",
      "Shops and market-facing businesses benefit from HD CCTV and alarms that protect stock out of hours, while homeowners and landlords choose discreet cameras, wireless alarms and video door entry. We explain everything clearly and test each system before we leave.",
    ],
    ctaText: "Get your free Walthamstow security quote today.",
    nearby: ["Leytonstone", "Forest Gate", "Stratford", "Ilford", "Canning Town"],
    faqs: [
      {
        question: "Do you install CCTV for shops in Walthamstow?",
        answer:
          "Yes. We install HD CCTV and alarms for shops and businesses, with footage you can check from your phone.",
      },
      {
        question: "Can you install door entry for flats in Walthamstow?",
        answer:
          "Yes. We install audio and video door entry for converted houses and blocks of flats.",
      },
      {
        question: "Do you install wireless alarms in Walthamstow?",
        answer:
          "Yes. Wireless alarms are quick to fit with minimal disruption, making them popular for terraced houses and flats.",
      },
      {
        question: "Do you cover areas near Walthamstow?",
        answer:
          "Yes. We also work in Leytonstone, Forest Gate, Stratford, Ilford and Canning Town.",
      },
    ],
  },
  tilbury: {
    metaDescription:
      "CCTV, alarm and access control installation in Tilbury for homes, warehouses and port-side businesses. Wide-area site security. Free quotes.",
    heroText:
      "CCTV, intruder alarm and access control installation for Tilbury homes, warehouses, yards and port-side businesses",
    servicesText:
      "With busy logistics and commercial sites alongside residential streets, Tilbury needs dependable security. We install systems for both.",
    propertyTypes: [
      { icon: "home", title: "Home", text: "CCTV and alarms for Tilbury houses and flats" },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Security for local shops and convenience stores",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Access control and CCTV for depots, offices and trade premises",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Wide-area CCTV for yards, compounds and construction sites",
      },
    ],
    paragraphs: [
      "Tilbury is closely linked to the Port of Tilbury, with warehouses, logistics yards and commercial premises alongside established residential streets. We install CCTV, intruder alarms and access control for businesses operating large sites as well as local homes.",
      "Commercial sites often need cameras covering wide areas, vehicle entrances and loading bays, with remote viewing for managers. For homes, we fit discreet CCTV and reliable alarms, all installed neatly and tested before handover.",
    ],
    ctaText: "Get a free quote for commercial or home security in Tilbury.",
    nearby: ["Grays", "South Ockendon", "Orsett", "Basildon", "Thurrock"],
    faqs: [
      {
        question: "Can you provide CCTV for a warehouse or yard in Tilbury?",
        answer:
          "Yes. We install CCTV covering loading bays, vehicle entrances and yards, with remote viewing for site managers.",
      },
      {
        question: "Can you control access to a commercial site in Tilbury?",
        answer:
          "Yes. We install access control for doors and gates using fobs, cards, PIN codes or phone access.",
      },
      {
        question: "Can you fit CCTV at a house in Tilbury?",
        answer: "Yes. We install CCTV and alarms for houses and flats across Tilbury.",
      },
      {
        question: "Do you cover areas near Tilbury?",
        answer: "Yes. We also work in Grays, South Ockendon, Orsett, Basildon and across Thurrock.",
      },
    ],
  },
  "south-ockendon": {
    metaDescription:
      "CCTV, burglar alarm and video doorbell installation in South Ockendon for family homes and local businesses. 24/7 callouts. Free quotes.",
    heroText:
      "Video doorbells, CCTV, burglar alarms and access control for South Ockendon households, shopping parades and business units",
    servicesText:
      "South Ockendon families and businesses rely on us for practical, easy-to-use security systems installed properly the first time.",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "CCTV, alarms and video doorbells for South Ockendon family homes",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Security for local shops and neighbourhood parades",
      },
      {
        icon: "building",
        title: "Offices",
        text: "CCTV and access control for offices and business units",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Site security for extensions and building projects",
      },
    ],
    paragraphs: [
      "South Ockendon is a residential town in Thurrock with family homes, local shopping parades and nearby business areas. We install CCTV, intruder alarms, video doorbells and access control for households and businesses throughout the town.",
      "Families often start with a video doorbell and a few cameras covering the front and rear of the house, adding an app-controlled alarm for complete protection. We keep systems simple to use and show you how everything works before we leave.",
    ],
    ctaText: "Book a free quote for your South Ockendon home or business.",
    nearby: ["Grays", "Upminster", "Orsett", "Tilbury", "Hornchurch"],
    faqs: [
      {
        question: "Can you install CCTV at a South Ockendon property?",
        answer:
          "Yes. We install CCTV for homes and businesses in South Ockendon, with remote viewing on your phone.",
      },
      {
        question: "What security do you recommend for a family home?",
        answer:
          "Most families choose a video doorbell, cameras covering the front and back, and an app-controlled alarm. We tailor the setup to your home.",
      },
      {
        question: "Do you offer emergency callouts in South Ockendon?",
        answer: "Yes. Emergency callouts are available 24 hours a day, 7 days a week.",
      },
      {
        question: "Do you cover areas near South Ockendon?",
        answer: "Yes. We also work in Grays, Upminster, Orsett, Tilbury and Hornchurch.",
      },
    ],
  },
  brentwood: {
    metaDescription:
      "CCTV, intruder alarm and gate access installation in Brentwood for larger homes, offices and shops. Discreet, certified installers. Free quotes.",
    heroText:
      "CCTV, intruder alarm, gate access and door entry installation for Brentwood homes, offices and high street businesses",
    servicesText:
      "Brentwood's larger homes and busy business premises need security that is reliable and discreet. We design and install systems to that standard.",
    propertyTypes: [
      {
        icon: "home",
        title: "Home",
        text: "Discreet CCTV, alarms and gate access for larger Brentwood homes",
      },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "CCTV and alarms for shops, boutiques and restaurants",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Access control and intercoms for offices and professional premises",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "Security for new builds, extensions and renovations",
      },
    ],
    paragraphs: [
      "Brentwood is a sought-after Essex town with larger detached homes, a busy high street and a strong base of offices and professional firms. We install CCTV, intruder alarms, gate access control and door entry for homes and businesses across the town.",
      "Larger properties often need several cameras covering driveways, gates and gardens, combined with smart alarms and gate intercoms. We plan discreet camera positions and tidy cabling so your security protects the property without spoiling its appearance.",
    ],
    ctaText: "Get a free quote for discreet security in Brentwood.",
    nearby: ["Upminster", "Romford", "Hornchurch", "Basildon", "South Ockendon"],
    faqs: [
      {
        question: "Can you install CCTV for a large home in Brentwood?",
        answer:
          "Yes. We design multi-camera CCTV systems covering driveways, gates, gardens and outbuildings, with remote viewing on your phone.",
      },
      {
        question: "Do you install gate intercoms and access control?",
        answer:
          "Yes. We install video intercoms and keypad or fob access control for driveway and property gates.",
      },
      {
        question: "Do you install security for Brentwood offices?",
        answer:
          "Yes. We fit access control, CCTV and alarms for offices and professional premises.",
      },
      {
        question: "Do you cover areas near Brentwood?",
        answer: "Yes. We also work in Upminster, Romford, Hornchurch, Basildon and South Ockendon.",
      },
    ],
  },
  basildon: {
    metaDescription:
      "CCTV, alarm and access control installers in Basildon for homes, industrial estates and town centre businesses. Certified engineers. Free quotes.",
    heroText:
      "CCTV, intruder alarm and access control installation for Basildon homes, town centre shops and businesses on its industrial estates",
    servicesText:
      "Basildon's homes, town centre and large industrial estates all need dependable security. We install and maintain systems for each.",
    propertyTypes: [
      { icon: "home", title: "Home", text: "CCTV, alarms and video doorbells for Basildon homes" },
      {
        icon: "store",
        title: "Retail & Shop",
        text: "Loss prevention CCTV for town centre shops and retail units",
      },
      {
        icon: "building",
        title: "Offices",
        text: "Access control and CCTV for offices and business parks",
      },
      {
        icon: "construction",
        title: "Construction Sites",
        text: "CCTV and alarms for industrial units, yards and building sites",
      },
    ],
    paragraphs: [
      "Basildon is one of Essex's largest towns, with a busy town centre, extensive residential neighbourhoods and major industrial and business estates. We install CCTV, intruder alarms and access control for homeowners, retailers and commercial businesses.",
      "Businesses on industrial estates often combine CCTV, alarms and access control to protect premises, vehicles and stock around the clock, while homeowners choose discreet cameras and app-controlled alarms. Every system is installed neatly and tested before handover.",
    ],
    ctaText:
      "Ask for a free quote for security in Basildon, from family homes to industrial units.",
    nearby: ["Brentwood", "Orsett", "Tilbury", "Grays", "Thurrock"],
    faqs: [
      {
        question: "Do you install CCTV on Basildon industrial estates?",
        answer:
          "Yes. We install CCTV, alarms and access control for industrial units, warehouses and business premises.",
      },
      {
        question: "Can you install CCTV in a Basildon town centre shop?",
        answer:
          "Yes. We fit HD CCTV covering tills, entrances and stock areas, along with intruder alarms.",
      },
      {
        question: "Do you install home security in Basildon?",
        answer:
          "Yes. We install CCTV, video doorbells and alarms for houses and flats across Basildon.",
      },
      {
        question: "Do you cover areas near Basildon?",
        answer: "Yes. We also work in Brentwood, Orsett, Tilbury, Grays and across Thurrock.",
      },
    ],
  },
};

export function getAreaDetailContent(area: ServiceArea) {
  const copy = areaCopy[area.slug];
  // Fails the build if an area is added to data/areas.ts without its page content.
  if (!copy) throw new Error(`Missing area page content for "${area.slug}"`);

  const place = `${area.name}, ${area.region}`;

  const meta = {
    title: `CCTV & Alarm Installers in ${area.name} | Auto Iris`,
    description: copy.metaDescription,
  };

  const hero: FullScreenHeroProps = {
    eyebrow: `Auto Iris In ${area.name}`,
    heading: `Security Services\n[In ${place}.]`,
    text: copy.heroText,
    image: "/images/areas-detail-hero.jpg",
    ctas: [callCta, quoteCta],
    trust: [
      { icon: "shieldCheck", label: "Local Team" },
      { icon: "fastForward", label: "Fast Response" },
      { icon: "lock", label: "Fully Insured" },
    ],
  };

  const stats: StatsProps = { items: statItems };

  const services: ServicesListProps = {
    className: "services-list-grey",
    head: {
      eyebrow: `Services Available In ${area.name}`,
      heading: `Security Services For ${area.name} Properties`,
      text: copy.servicesText,
    },
    items: allServices,
    linkLabel: "Learn More",
  };

  const propertyTypes: WhyChooseProps = {
    id: "property-types",
    eyebrow: `Protecting ${area.name}`,
    heading: `Built Around ${area.name} Properties`,
    items: copy.propertyTypes,
  };

  const process: ServiceProcessProps = {
    className: "service-process-compact",
    heading: `How We Work In ${area.name}`,
    steps: [
      { number: "01", title: "Tell Us What You Need" },
      { number: "02", title: "Local Site Survey" },
      { number: "03", title: "Professional Installation" },
      { number: "04", title: "Ongoing Support" },
    ],
  };

  const secureCta: CtaBannerProps = {
    className: "cta-banner-outline",
    heading: `Ready To Secure Your [${area.name}] Property?`,
    text: copy.ctaText,
    ctas: [{ ...quoteCta, variant: "primary" }, whatsappCta],
  };

  const securitySolutions: ServicesIntroProps = {
    heading: `CCTV, Alarms & Access Control In ${area.name}`,
    paragraphs: copy.paragraphs,
  };

  const worriedCta: CtaBannerProps = {
    className: "cta-banner-flat",
    heading: `Need A Security Installer\nIn ${area.name}?`,
    text: `Free, no-obligation quotes and 24/7 emergency callouts for ${area.name} and nearby ${copy.nearby.slice(0, -1).join(", ")} and ${copy.nearby.at(-1)}.`,
    ctas: [whatsappCta, quoteCta],
  };

  const reviews: ReviewsProps = {
    className: "reviews-grey",
    eyebrow: "Customer Reviews",
    items: reviewItems,
  };

  const faqs: FaqsProps = {
    eyebrow: `${area.name} Questions`,
    heading: `Security Installation In ${area.name}: FAQs`,
    items: copy.faqs,
  };

  // Nearby areas first, then the rest of the list; the first 5 are linked.
  const byName = (name: string) => serviceAreas.find((other) => other.name === name);
  const otherAreas = [...copy.nearby.map(byName), ...serviceAreas].filter(
    (other, index, list): other is ServiceArea =>
      !!other && other.slug !== area.slug && list.indexOf(other) === index,
  );

  const mapQuery =
    area.mapQuery ?? `${area.name}, ${area.region === "Essex" ? "Essex" : "London"}, UK`;

  const location: AreaLocationProps = {
    eyebrow: "Location",
    heading: `${area.name} Map And [Other Areas]`,
    map: {
      label: "Area Map",
      heading: place,
      src: `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=12&output=embed`,
      title: `Map of ${place}`,
    },
    links: {
      label: "Other Areas",
      heading: "Areas Near You",
      text: `Browse our other area pages for security installers near ${area.name}.`,
      items: otherAreas.slice(0, 5).map((other) => ({
        label: other.region,
        name: other.name,
        href: `/areas/${other.slug}`,
      })),
      viewAll: {
        label: "View All Areas",
        href: "/areas?section=areas-we-serve",
        variant: "primary",
        size: "md",
      },
    },
  };

  return {
    meta,
    hero,
    stats,
    services,
    propertyTypes,
    process,
    secureCta,
    securitySolutions,
    worriedCta,
    reviews,
    faqs,
    location,
  };
}
