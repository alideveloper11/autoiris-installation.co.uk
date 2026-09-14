import Image from "next/image";
import {
  Icon,
  PhoneSolidIcon,
  ShieldIcon,
  Stars,
  WhatsAppIcon,
} from "@/components/icons";
import { heroTrust } from "@/data/home";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media">
        <Image
          src={site.heroImage}
          alt="Professional CCTV installation by Auto Iris Installations"
          fill
          sizes="100vw"
          priority
        />
      </div>
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge reveal">
            <ShieldIcon />
            5.0 Rated &bull; Fully Insured &bull; Open 24/7
          </span>
          <h1 className="reveal reveal-delay-1">
            Your Security,
            <br />
            Professionally <span className="highlight">Installed</span>
          </h1>
          <p className="reveal reveal-delay-2">
            CCTV, intruder alarms and access control, installed to the highest standard
            across London &amp; beyond. Backed by 10+ years of experience and a 5.0 rating
            from 96 happy customers.
          </p>
          <div className="hero-ctas reveal reveal-delay-3">
            <a href={site.phoneHref} className="btn btn-primary btn-lg">
              <PhoneSolidIcon />
              Call {site.phoneDisplay}
            </a>
            <a href={site.whatsapp} className="btn btn-whatsapp btn-lg">
              <WhatsAppIcon />
              WhatsApp Us
            </a>
          </div>
          <div className="hero-trust reveal reveal-delay-4">
            {heroTrust.map((item) => (
              <span key={item.label}>
                {item.icon === "stars" ? (
                  <Stars className="hero-stars" />
                ) : (
                  <Icon name={item.icon} />
                )}
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
