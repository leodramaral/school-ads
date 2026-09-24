export default function TOC({ items }) {
  return (
    <nav className="toc" aria-label="Sumário da página">
      <p className="eyebrow">Nesta página</p>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
