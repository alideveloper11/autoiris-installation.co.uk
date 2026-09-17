"use client";

import { useEffect, useRef, useState } from "react";
import type { Stat } from "@/data/site";

const DURATION = 1600;

/** Counts up from zero the first time the stat scrolls into view. */
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(target);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;

    setValue(0);
    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          let start: number | null = null;
          const step = (timestamp: number) => {
            if (start === null) start = timestamp;
            const progress = Math.min((timestamp - start) / DURATION, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased));
            if (progress < 1) frame = requestAnimationFrame(step);
          };
          frame = requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <span className="num" ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export type StatsProps = { items: Stat[] };

export default function Stats({ items }: StatsProps) {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {items.map((stat) => (
            <div className="stat" key={stat.label}>
              <Counter target={stat.count} suffix={stat.suffix} />
              <span className="label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
