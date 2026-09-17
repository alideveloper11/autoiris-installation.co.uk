import Link from "next/link";
import CtaBanner from "@/components/sections/CtaBanner";
import { WhatsAppIcon } from "@/components/icons";
import { site } from "@/data/site";

type ServicesCtaProps = {
  /**
   * "flat": orange "Worried About Your Security?" banner.
   * "outline": white "Ready To Feel More Secure?" banner with an orange border.
   */
  variant: "flat" | "outline";
};

const whatsAppButton = (
  <a href={site.whatsapp} className="btn btn-whatsapp btn-lg">
    <WhatsAppIcon />
    WhatsApp Us
  </a>
);

export default function ServicesCta({ variant }: ServicesCtaProps) {
  if (variant === "outline") {
    return (
      <CtaBanner
        className="cta-banner-outline"
        heading={
          <>
            Ready To Feel More <span className="highlight">Secure</span>?
          </>
        }
        text="Talk to our team today and get a solution built around your property."
        showPhone={false}
        actions={
          <>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Request a Quote
            </Link>
            {whatsAppButton}
          </>
        }
      />
    );
  }

  return (
    <CtaBanner
      className="cta-banner-flat"
      showPhone={false}
      actions={
        <>
          {whatsAppButton}
          <Link href="/contact" className="btn btn-black btn-lg">
            Request a Quote
          </Link>
        </>
      }
    />
  );
}
