import type { IconName } from "@/components/icons";

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

export type InfoRow = { icon: IconName; title: string; text: string };

export const infoRows: InfoRow[] = [
  {
    icon: "checkCircle",
    title: "Free Estimates",
    text: "Free estimates at honest prices, with no hidden extras.",
  },
  {
    icon: "shield",
    title: "12-Month Guarantee",
    text: "Every installation guaranteed, with 3 & 5 year warranties on selected products.",
  },
  {
    icon: "clock",
    title: "24/7 Support",
    text: "Emergency callouts around the clock, day or night, weekends and bank holidays.",
  },
  {
    icon: "thumbsUp",
    title: "Certified & Qualified",
    text: "Hikvision certified installer, BS7671 (18th edition), City & Guilds, NCFE & Pyronix trained.",
  },
];

export const contactCoveragePlaces: string[] = [
  "Barking & Dagenham",
  "East & South London",
  "Essex",
  "Kent",
  "Hertfordshire",
  "Surrey & Sussex",
  "Norfolk",
  "Portsmouth & Folkestone",
];

export const mapEmbedSrc =
  "https://www.google.com/maps?q=Jute+Court,+58+Abbey+Road,+Barking,+IG11+7FT&output=embed";
