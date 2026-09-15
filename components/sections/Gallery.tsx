"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { galleryItems, type GalleryItem } from "@/data/gallery";

type GalleryProps = {
  items?: GalleryItem[];
  /** Rendered above the grid; omitted on pages that supply their own heading. */
  withHeading?: boolean;
  /** Show only the first N photos, followed by a link to the full gallery page. */
  limit?: number;
};

export default function Gallery({ items = galleryItems, withHeading = true, limit }: GalleryProps) {
  const visible = limit ? items.slice(0, limit) : items;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : visible[activeIndex];

  const close = useCallback(() => setActiveIndex(null), []);
  const step = useCallback(
    (direction: 1 | -1) =>
      setActiveIndex((index) =>
        index === null ? index : (index + direction + visible.length) % visible.length,
      ),
    [visible.length],
  );

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close, step]);

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
          {visible.map((item, index) => (
            <figure
              key={item.src + index}
              className={`gallery-item reveal${index % 3 ? ` reveal-delay-${index % 3}` : ""}`}
              onClick={() => setActiveIndex(index)}
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

        {limit !== undefined && items.length > limit && (
          <div className="gallery-footer reveal">
            <Link href="/gallery" className="btn btn-primary">
              View All {items.length} Photos
            </Link>
          </div>
        )}
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
        {active && activeIndex !== null && (
          <>
            <button
              className="lightbox-nav prev"
              aria-label="Previous photo"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
            >
              &lsaquo;
            </button>
            <figure className="lightbox-figure">
              <Image
                src={active.src}
                alt={active.alt}
                width={1600}
                height={900}
                sizes="100vw"
              />
              <figcaption>
                {active.caption}
                <span>
                  {activeIndex + 1} / {visible.length}
                </span>
              </figcaption>
            </figure>
            <button
              className="lightbox-nav next"
              aria-label="Next photo"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
            >
              &rsaquo;
            </button>
          </>
        )}
      </div>
    </section>
  );
}
