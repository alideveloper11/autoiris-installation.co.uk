import Image from "next/image";
import type { SectionHead } from "./types";
import RichText from "@/components/ui/RichText";

export type AboutWhoWeAreProps = SectionHead & {
  checklist: string[];
  image: { src: string; alt: string; width: number; height: number };
};

export default function AboutWhoWeAre({
  eyebrow,
  heading,
  text,
  checklist,
  image,
}: AboutWhoWeAreProps) {
  return (
    <section className="section about-who" id="who-we-are">
      <div className="container">
        <div className="about-who-head">
          <span className="eyebrow-plain reveal">{eyebrow}</span>
          <h2 className="reveal reveal-delay-1">
            <RichText text={heading} />
          </h2>
        </div>

        <div className="about-who-grid">
          <div className="about-who-copy reveal">
            {text && <p>{text}</p>}
            <ul className="about-who-list">
              {checklist.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-who-media reveal reveal-delay-1">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
