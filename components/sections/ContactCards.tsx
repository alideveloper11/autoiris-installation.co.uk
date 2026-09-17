import { Icon, type IconName } from "@/components/icons";
import RichText from "@/components/ui/RichText";

export type ContactCard = {
  icon: IconName;
  title: string;
  /** Large link under the title, e.g. the phone number. */
  link?: { label: string; href: string };
  /** One entry per paragraph; "[words]" are bold and "\n" starts a new line. */
  paragraphs: string[];
};

export type ContactCardsProps = { cards: ContactCard[] };

export default function ContactCards({ cards }: ContactCardsProps) {
  return (
    <div className="contact-cards">
      {cards.map((card, index) => (
        <div
          key={card.title}
          className={`contact-card reveal${index ? ` reveal-delay-${index}` : ""}`}
        >
          <div className="icon">
            <Icon name={card.icon} />
          </div>
          <h3>{card.title}</h3>
          {card.link && (
            <a className="big-link" href={card.link.href}>
              {card.link.label}
            </a>
          )}
          {card.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} highlight="strong" />
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
