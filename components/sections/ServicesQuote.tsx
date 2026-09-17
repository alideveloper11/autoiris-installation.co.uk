import { Fragment } from "react";
import RichText from "@/components/ui/RichText";

export type ServicesQuoteProps = {
  heading: string;
  /** Each line starts on a new line. */
  lines: string[];
};

export default function ServicesQuote({ heading, lines }: ServicesQuoteProps) {
  return (
    <section className="section services-quote" id="quote">
      <div className="container">
        <h2 className="reveal">
          <RichText text={heading} />
        </h2>
        <p className="reveal reveal-delay-1">
          {lines.map((line, index) => (
            <Fragment key={line}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}
