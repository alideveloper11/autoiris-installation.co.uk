import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { site } from "@/data/site";

export default function ContactCards() {
  return (
    <div className="contact-cards">
      <div className="contact-card reveal">
        <div className="icon">
          <PhoneIcon />
        </div>
        <h3>Call Us</h3>
        <a className="big-link" href={site.phoneHref}>
          {site.phoneDisplay}
        </a>
        <p>Call any time. We answer 24/7.</p>
      </div>

      <div className="contact-card reveal reveal-delay-1">
        <div className="icon">
          <MailIcon />
        </div>
        <h3>Email Us</h3>
        <a className="big-link" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <p>We reply fast to every enquiry.</p>
      </div>

      <div className="contact-card reveal reveal-delay-2">
        <div className="icon">
          <MapPinIcon />
        </div>
        <h3>Visit Us</h3>
        <p>
          {site.address.line1}
          <br />
          {site.address.line2}
        </p>
        <p>Based in Barking, we travel all over.</p>
      </div>

      <div className="contact-card reveal reveal-delay-3">
        <div className="icon">
          <ClockIcon />
        </div>
        <h3>Open 24/7</h3>
        <p>
          Monday to Saturday: <strong>24 Hours</strong>
        </p>
        <p>
          Sunday: <strong>Closed</strong>
          <br />
          24hr emergency callouts available.
        </p>
      </div>
    </div>
  );
}
