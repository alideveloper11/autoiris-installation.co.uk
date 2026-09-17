import { PhoneIcon } from "@/components/icons";
import CtaLinks, { type CtaLink } from "@/components/ui/CtaLinks";
import RichText from "@/components/ui/RichText";

export type CtaBannerProps = {
  heading: string;
  text: string;
  ctas: CtaLink[];
  /** Oversized phone number below the buttons; omitted when not supplied. */
  phone?: { label: string; href: string };
  /** Extra class for page-specific variants, e.g. "cta-banner-flat". */
  className?: string;
};

export default function CtaBanner({ heading, text, ctas, phone, className }: CtaBannerProps) {
  return (
    <section className={className ? `cta-banner ${className}` : "cta-banner"}>
      <div className="container reveal">
        <h2>
          <RichText text={heading} />
        </h2>
        <p>{text}</p>
        <div className="hero-ctas" style={{ justifyContent: "center" }}>
          <CtaLinks ctas={ctas} />
        </div>
        {phone && (
          <a className="phone-big" href={phone.href}>
            <PhoneIcon />
            {phone.label}
          </a>
        )}
      </div>
    </section>
  );
}
