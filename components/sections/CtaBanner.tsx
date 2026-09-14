import Link from "next/link";
import type { ReactNode } from "react";
import { PhoneIcon } from "@/components/icons";
import { site } from "@/data/site";

type CtaBannerProps = {
  heading?: ReactNode;
  text?: string;
  actions?: ReactNode;
  /** The oversized phone number below the buttons. */
  showPhone?: boolean;
};

const defaultHeading = (
  <>
    Worried About Your Security?
    <br />
    Let&apos;s Fix That Today.
  </>
);

const defaultActions = (
  <>
    <a href={site.whatsapp} className="btn btn-whatsapp btn-lg">
      WhatsApp Us
    </a>
    <Link href="/contact" className="btn btn-outline btn-lg">
      Request a Quote
    </Link>
  </>
);

export default function CtaBanner({
  heading = defaultHeading,
  text = "Get a fast, friendly, no-obligation estimate. Emergency callouts available 24 hours a day, 7 days a week.",
  actions = defaultActions,
  showPhone = true,
}: CtaBannerProps) {
  return (
    <section className="cta-banner">
      <div className="container reveal">
        <h2>{heading}</h2>
        <p>{text}</p>
        <div className="hero-ctas" style={{ justifyContent: "center" }}>
          {actions}
        </div>
        {showPhone && (
          <a className="phone-big" href={site.phoneHref}>
            <PhoneIcon />
            {site.phoneDisplay}
          </a>
        )}
      </div>
    </section>
  );
}
