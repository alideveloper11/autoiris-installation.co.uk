import Image from "next/image";
import Link from "next/link";
import RichText from "@/components/ui/RichText";

export type PageHeroProps = {
  /** Trailing crumb; "Home >" is always prepended. */
  breadcrumb: string;
  /** "[words]" are highlighted and "\n" starts a new line. */
  heading: string;
  text?: string;
  image: string;
};

export default function PageHero({ breadcrumb, heading, text, image }: PageHeroProps) {
  return (
    <section className="page-hero">
      <Image className="bg-img" src={image} alt="" aria-hidden="true" fill sizes="100vw" priority />
      <div className="page-overlay" />
      <div className="container">
        <span className="breadcrumb reveal">
          <Link href="/">Home</Link> &gt; {breadcrumb}
        </span>
        <h1 className="reveal reveal-delay-1">
          <RichText text={heading} />
        </h1>
        {text && <p className="reveal reveal-delay-2">{text}</p>}
      </div>
    </section>
  );
}
