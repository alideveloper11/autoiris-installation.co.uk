"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** How long to show the top of the new page before scrolling down to the section. */
const SCROLL_DELAY = 600;

/**
 * Smoothly scrolls to a section after navigation, so visitors see the page open at the top
 * and then scroll down. Link to a page with `?section=<element id>`, e.g.
 * "/areas?section=areas-we-serve"; the parameter is removed from the address bar afterwards.
 * Mounted once in the root layout.
 */
export default function ScrollToSection() {
  const pathname = usePathname();

  useEffect(() => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("section");
    if (!id) return;

    url.searchParams.delete("section");
    window.history.replaceState(
      window.history.state,
      "",
      `${url.pathname}${url.search}${url.hash}`,
    );

    // Start from the very top so the scroll down to the section is visible.
    window.scrollTo({ top: 0, behavior: "instant" });
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, SCROLL_DELAY);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
