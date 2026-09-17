import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";

/** A call-to-action button, supplied as content by each page. */
export type CtaLink = {
  label: string;
  /** Internal routes ("/contact") use client navigation; tel:, mailto: and external URLs use a plain link. */
  href: string;
  variant: "primary" | "dark" | "black" | "whatsapp" | "outline";
  icon?: IconName;
  /** Defaults to "lg". */
  size?: "md" | "lg";
};

export function CtaButton({ cta, className: extra }: { cta: CtaLink; className?: string }) {
  const className = `btn btn-${cta.variant}${cta.size === "md" ? "" : " btn-lg"}${extra ? ` ${extra}` : ""}`;
  const content = (
    <>
      {cta.icon && <Icon name={cta.icon} />}
      {cta.label}
    </>
  );

  return cta.href.startsWith("/") ? (
    <Link href={cta.href} className={className}>
      {content}
    </Link>
  ) : (
    <a href={cta.href} className={className}>
      {content}
    </a>
  );
}

export default function CtaLinks({ ctas }: { ctas: CtaLink[] }) {
  return (
    <>
      {ctas.map((cta) => (
        <CtaButton key={cta.label} cta={cta} />
      ))}
    </>
  );
}
