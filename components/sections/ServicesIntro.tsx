import type { ReactNode } from "react";

type ServicesIntroProps = {
  eyebrow?: string;
  heading: ReactNode;
  paragraphs: string[];
  id?: string;
};

export default function ServicesIntro({
  eyebrow,
  heading,
  paragraphs,
  id = "security-solutions",
}: ServicesIntroProps) {
  return (
    <section className="section services-intro" id={id}>
      <div className="container">
        {eyebrow && <span className="eyebrow-plain reveal">{eyebrow}</span>}
        <h2 className="reveal">{heading}</h2>
        <div className="services-intro-body reveal reveal-delay-1">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
