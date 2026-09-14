"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades `.reveal` elements in as they scroll into view.
 * Mounted once in the root layout; re-scans after every route change.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
