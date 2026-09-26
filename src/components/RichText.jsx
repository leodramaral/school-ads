import { InlineMath } from "react-katex";

// Renderiza um texto que pode conter trechos $...$ com LaTeX misturados com texto comum.
export default function RichText({ text }) {
  const parts = text.split(/(\$[^$]+\$)/g).filter((p) => p !== "");
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("$") && part.endsWith("$") ? (
          <InlineMath key={i} math={part.slice(1, -1)} />
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
