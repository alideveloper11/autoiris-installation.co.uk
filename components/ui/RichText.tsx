import { Fragment } from "react";

type RichTextProps = {
  /** Plain copy from a data file: "[words]" are highlighted and "\n" starts a new line. */
  text: string;
  /** "span" renders the orange highlight; "strong" renders bold text. */
  highlight?: "span" | "strong";
};

/** Renders copy such as "Why Choose [Auto Iris]?" or "Local Knowledge.\nProfessional Results." */
export default function RichText({ text, highlight = "span" }: RichTextProps) {
  return (
    <>
      {text.split("\n").map((line, lineIndex) => (
        <Fragment key={lineIndex}>
          {lineIndex > 0 && <br />}
          {line.split(/(\[[^\]]*\])/).map((part, partIndex) => {
            if (!part.startsWith("[") || !part.endsWith("]")) return part;
            const inner = part.slice(1, -1);
            return highlight === "strong" ? (
              <strong key={partIndex}>{inner}</strong>
            ) : (
              <span key={partIndex} className="highlight">
                {inner}
              </span>
            );
          })}
        </Fragment>
      ))}
    </>
  );
}
