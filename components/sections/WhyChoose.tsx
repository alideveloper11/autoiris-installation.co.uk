import { Icon } from "@/components/icons";
import type { IconItem, SectionHead } from "./types";
import RichText from "@/components/ui/RichText";

export type WhyChooseProps = SectionHead & {
  items: IconItem[];
  id?: string;
  /** Extra class for page-specific variants, e.g. "why-choose-grey". */
  className?: string;
};

export default function WhyChoose({
  eyebrow,
  heading,
  text,
  items,
  id = "why-choose",
  className,
}: WhyChooseProps) {
  return (
    <section className={`section why-choose${className ? ` ${className}` : ""}`} id={id}>
      <div className="container">
        <div className="why-choose-head">
          <span className="eyebrow-plain reveal">{eyebrow}</span>
          <h2 className="reveal reveal-delay-1">
            <RichText text={heading} />
          </h2>
          {text && <p className="reveal reveal-delay-2">{text}</p>}
        </div>

        <div className="why-choose-grid">
          {items.map((point, index) => (
            <article
              key={point.title}
              className={`why-choose-card reveal${index ? ` reveal-delay-${index}` : ""}`}
            >
              <Icon name={point.icon} />
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
