import type { IconName } from "@/components/icons";

export type Review = {
  quote: string;
  author: string;
  date: string;
};

export const rating = {
  value: "5.0",
  count: 96,
  meta: "Based on 96 verified reviews, 95 rated 5 stars",
};

export const reviews: Review[] = [
  {
    quote:
      "Absolute brilliant from start to finish — and an even better person. Top quality work, would highly recommend and use again and again.",
    author: "Mansur",
    date: "24 Mar 2025",
  },
  {
    quote:
      "Daniel is brilliant at what he does — extensive knowledge, professional work and excellent service. I would highly recommend his services to everyone.",
    author: "Rohail",
    date: "08 Oct 2024",
  },
  {
    quote:
      "Customer service 10/10, highly recommend to anyone. Daniel was extremely professional. Outstanding work — cannot fault anything. Very polite and friendly.",
    author: "Ru",
    date: "27 Aug 2023",
  },
  {
    quote:
      "A very professional service provided by Daniel. He explained everything in detail, installation was done quickly and seamlessly at a very reasonable price.",
    author: "Waleed",
    date: "07 May 2023",
  },
  {
    quote:
      "Had a burglary and called this company who attended my property the same day and gave me the cheapest quote compared to everywhere else I called. I 100% recommend.",
    author: "Iman",
    date: "15 Mar 2021",
  },
  {
    quote:
      "Daniel is very professional, responsive and has great attention to detail. He laid the cables neatly — you cannot tell they are there. Highly recommend him.",
    author: "Andrew",
    date: "15 Dec 2020",
  },
];

export type ReviewHighlight = {
  icon: IconName;
  title: string;
  /** A short excerpt from a real review above, backing up the title. */
  quote: string;
  author: string;
};

export const reviewHighlights: ReviewHighlight[] = [
  {
    icon: "thumbsUp",
    title: "Professional & Friendly",
    quote: "Daniel was extremely professional. Very polite and friendly.",
    author: "Ru",
  },
  {
    icon: "checkCircle",
    title: "Neat, Hidden Cabling",
    quote: "He laid the cables neatly — you cannot tell they are there.",
    author: "Andrew",
  },
  {
    icon: "clock",
    title: "Same-Day Response",
    quote: "Attended my property the same day.",
    author: "Iman",
  },
  {
    icon: "shield",
    title: "Fair, Honest Pricing",
    quote: "Installation was done quickly and seamlessly at a very reasonable price.",
    author: "Waleed",
  },
];
