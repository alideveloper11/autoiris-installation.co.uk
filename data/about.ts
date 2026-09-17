import type { WhyPoint } from "./home";

/** Checklist beside the "A Trusted Team For The Job" intro. */
export const aboutChecklist: string[] = [
  "Clear recommendations",
  "Neat, tested installations",
  "One trusted point of contact",
  "Support after handover",
];

/** "Simple, Reliable, Professional" values. */
export const aboutValues: WhyPoint[] = [
  {
    icon: "ear",
    title: "Listen First",
    text: "We understand your property and priorities before recommending a solution.",
  },
  {
    icon: "hammer",
    title: "Do It Properly",
    text: "Every system is installed neatly, configured carefully and tested before handover.",
  },
  {
    icon: "calendar",
    title: "Keep It Clear",
    text: "Straightforward options, honest communication and no confusing jargon.",
  },
  {
    icon: "checkCircle",
    title: "Stay Available",
    text: "Responsive maintenance and support whenever you need a hand.",
  },
];
