import RichText from "@/components/ui/RichText";

export type ServicesIntroProps = {
  eyebrow?: string;
  heading: string;
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
        <h2 className="reveal">
          <RichText text={heading} />
        </h2>
        <div className="services-intro-body reveal reveal-delay-1">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
