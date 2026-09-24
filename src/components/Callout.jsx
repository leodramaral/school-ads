export default function Callout({ kind = "def", title, children }) {
  return (
    <div className={`callout callout--${kind}`}>
      {title && <h4>{title}</h4>}
      {children}
    </div>
  );
}
