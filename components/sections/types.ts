import type { IconName } from "@/components/icons";

/** Label, heading and optional intro text shown above a section's content. */
export type SectionHead = {
  eyebrow: string;
  /** "[words]" are highlighted and "\n" starts a new line. */
  heading: string;
  text?: string;
};

/** A card or list item with an icon, a title and a short line of text. */
export type IconItem = { icon: IconName; title: string; text: string };

/** A numbered step; text is optional for title-only rows. */
export type NumberedStep = { number: string; title: string; text?: string };
