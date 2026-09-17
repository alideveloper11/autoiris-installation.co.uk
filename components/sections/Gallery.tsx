"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { CtaButton, type CtaLink } from "@/components/ui/CtaLinks";
import type { GalleryItem } from "@/data/gallery";
import type { SectionHead } from "./types";
import RichText from "@/components/ui/RichText";

export type GalleryProps = {
  items: GalleryItem[];
  /** Rendered above the grid; omitted on pages that supply their own heading. */
  head?: SectionHead;
  /** Show only the first N photos. */
  limit?: number;
  /** Link shown under the grid when photos are hidden by `limit`. */
  viewAll?: CtaLink;
  /** Extra class for page-specific variants, e.g. "gallery-spaced". */
  className?: string;
};

export default function Gallery({ items, head, limit, viewAll, className }: GalleryProps) {
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
    <section className={className ? `section ${className}` : "section"} id="gallery">
      <div className="container">
        {head && (
          <div className="section-head center">
            <span className="eyebrow reveal">{head.eyebrow}</span>
            <h2 className="reveal">
              <RichText text={head.heading} />
            </h2>
            {head.text && <p className="lead reveal">{head.text}</p>}
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

        {viewAll && limit !== undefined && items.length > limit && (
          <div className="gallery-footer reveal">
            <CtaButton cta={viewAll} />
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
              <Image src={active.src} alt={active.alt} width={1600} height={900} sizes="100vw" />
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
