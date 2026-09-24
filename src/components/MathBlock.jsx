import { BlockMath } from "react-katex";

export default function MathBlock({ math }) {
  return (
    <div className="math-block">
      <BlockMath math={math} />
    </div>
  );
}
