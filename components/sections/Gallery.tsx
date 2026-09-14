"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { galleryItems, type GalleryItem } from "@/data/gallery";

type GalleryProps = {
  items?: GalleryItem[];
  /** Rendered above the grid; omitted on pages that supply their own heading. */
  withHeading?: boolean;
};

export default function Gallery({ items = galleryItems, withHeading = true }: GalleryProps) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close]);

  return (
    <section className="section" id="gallery">
      <div className="container">
        {withHeading && (
          <div className="section-head center">
            <span className="eyebrow reveal">Our Work</span>
            <h2 className="reveal">
              Recent <span className="highlight">Installations</span>
            </h2>
            <p className="lead reveal">
              A snapshot of the quality you can expect, from domestic CCTV to commercial
              door entry and emergency installs. Tap any photo to enlarge.
            </p>
          </div>
        )}

        <div className="gallery-grid">
          {items.map((item, index) => (
            <figure
              key={item.src + index}
              className={`gallery-item reveal${index % 3 ? ` reveal-delay-${index % 3}` : ""}`}
              onClick={() => setActive(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 600px) 50vw, 100vw"
              />
              <figcaption className="caption">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div
        className={`lightbox${active ? " open" : ""}`}
        role="dialog"
        aria-label="Image preview"
        onClick={close}
      >
        <button className="lightbox-close" aria-label="Close" onClick={close}>
          &times;
        </button>
        {active && (
          <Image
            src={active.src}
            alt={active.alt}
            width={1600}
            height={900}
            sizes="100vw"
          />
        )}
      </div>
    </section>
  );
}
