import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import {
  footerQuickLinks,
  footerServiceLinks,
  openingHours,
  site,
} from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>{site.tagline}</p>
            <ul className="footer-contact">
              <li>
                <PhoneIcon />
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
              </li>
              <li>
                <MailIcon />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <MapPinIcon />
                <span>{site.address.full}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              {footerServiceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") ? (
                    <a href={link.href} target="_blank" rel="noopener">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Opening Hours</h4>
            <ul className="footer-hours">
              {openingHours.map((entry) => (
                <li key={entry.day}>
                  <span>{entry.day}</span>
                  <span className={entry.open ? "open" : undefined}>{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>
            {site.legalName} &bull; Registered in England &amp; Wales &bull; Company No.{" "}
            {site.companyNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
