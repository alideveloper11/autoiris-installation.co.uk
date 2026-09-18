"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import { PhoneIcon } from "@/components/icons";
import { navLinks, site } from "@/data/site";

function isActive(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Drop shadow once the page has scrolled away from the top. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock the page behind the mobile drawer, and close it on resize to desktop. */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="container header-inner">
          <Logo />

          <nav className="nav" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href, pathname) ? "active" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <a className="header-phone" href={site.phoneHref}>
              <PhoneIcon />
              <span>
                <small>Mon-Fri 9am-5pm</small>
                {site.phoneDisplay}
              </span>
            </a>
            {/* On the contact page the header points at the form instead. */}
            {pathname === "/contact" ? (
              <a href="#contact" className="btn btn-primary">
                Free Quote
              </a>
            ) : (
              <a href={site.whatsapp} className="btn btn-whatsapp">
                WhatsApp
              </a>
            )}
          </div>

          <button
            className={`burger${menuOpen ? " open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav className={`mobile-nav${menuOpen ? " open" : ""}`} aria-label="Mobile">
        <button className="menu-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          &times;
        </button>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
