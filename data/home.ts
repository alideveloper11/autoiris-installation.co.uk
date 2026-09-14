import type { IconName } from "@/components/icons";

export type Stat = { count: number; suffix: string; label: string };

export const stats: Stat[] = [
  { count: 96, suffix: "", label: "Five-Star Reviews" },
  { count: 10, suffix: "+", label: "Years Experience" },
  { count: 24, suffix: "/7", label: "Emergency Service" },
  { count: 100, suffix: "%", label: "Satisfaction" },
];

export type WhyPoint = { icon: IconName; title: string; text: string };

export const whyPoints: WhyPoint[] = [
  {
    icon: "checkCircle",
    title: "Professional Service.",
    text: "Neat, tidy, friendly and on time.",
  },
  {
    icon: "globe",
    title: "Nationwide Coverage.",
    text: "We travel all over the UK.",
  },
  {
    icon: "shield",
    title: "Fully Insured.",
    text: "Complete peace of mind, guaranteed.",
  },
  {
    icon: "refresh",
    title: "24/7 Availability.",
    text: "Genuine round-the-clock support.",
  },
];

export const coveragePlaces: string[] = [
  "Barking (HQ)",
  "London",
  "Essex",
  "Kent",
  "Norfolk",
  "Folkestone",
  "Portsmouth",
  "Suffolk",
];

export const heroTrust: { icon: IconName | "stars"; label: string }[] = [
  { icon: "stars", label: "96 Five-Star Reviews" },
  { icon: "clock", label: "24/7 Emergency Callouts" },
  { icon: "shield", label: "Fully Insured" },
];
