import type { IconName } from "@/components/icons";
import type { CtaBannerProps } from "@/components/sections/CtaBanner";
import type { PageHeroProps } from "@/components/sections/PageHero";
import type { ReviewHighlightsProps } from "@/components/sections/ReviewHighlights";
import type { ReviewsProps } from "@/components/sections/Reviews";
import type { StatsProps } from "@/components/sections/Stats";
import { site, stats as statItems } from "./site";

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

/* Reviews page content. Headings: "[words]" are highlighted, "\n" starts a new line. */

/** Page title and description for search results and link previews. */
export const reviewsMeta = {
  title: `Auto Iris Reviews | ${rating.value} Rated CCTV & Alarm Installers`,
  description: `Read ${rating.count} customer reviews of Auto Iris Installations, rated ${rating.value} for CCTV, intruder alarm and access control installs across London & Essex.`,
  socialTitle: `Auto Iris Installations Reviews: Rated ${rating.value} Out Of 5`,
  socialDescription: `See what ${rating.count} homeowners and businesses say about our CCTV, alarm and access control installations.`,
  image: "/images/supermarket-ceiling-dome-camera.jpeg",
};

const hero: PageHeroProps = {
  breadcrumb: "Reviews",
  heading: "Customer Reviews Of Our\n[CCTV & Alarm Installations]",
  text: `Rated ${rating.value} out of 5 from ${rating.count} reviews. Read what homeowners, landlords and businesses across London and Essex say about our CCTV, intruder alarm and access control installations.`,
  image: reviewsMeta.image,
};

const stats: StatsProps = { items: statItems };

const reviewsSection: ReviewsProps = {
  eyebrow: "Real Customer Feedback",
  heading: "What Customers Say About [Our Installers]",
  rating: { score: rating.value, meta: rating.meta },
  items: reviews,
};

const highlights: ReviewHighlightsProps = {
  eyebrow: "What Stands Out",
  heading: "Why Customers [Recommend Us]",
  text: "From neat, hidden cabling to same-day callouts, these are the things customers mention most when they review our security installations.",
  items: reviewHighlights,
};

const cta: CtaBannerProps = {
  heading: `Join Our [${rating.count}+] Happy Customers`,
  text: "Get the same professional, tidy CCTV, alarm or access control installation at your home or business. Free, no-obligation quotes across London and Essex.",
  ctas: [
    { label: "Get a Free Quote", href: "/contact", variant: "dark" },
    { label: "WhatsApp Us", href: site.whatsapp, variant: "outline" },
  ],
  phone: { label: site.phoneDisplay, href: site.phoneHref },
};

export const reviewsContent = { hero, stats, reviews: reviewsSection, highlights, cta };
