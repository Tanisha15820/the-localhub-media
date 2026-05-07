export default function SectionHeader({ tag, title, highlight, subtitle }) {
  return (
    <div className="bs-header">
      <div className="bs-pill">
        <span className="bs-pill-dot" />
        <span className="bs-pill-text">{tag}</span>
      </div>

      <h2 className="bs-headline">
        {title} <br />
        <em>{highlight}</em>
      </h2>

      <p className="bs-subline">{subtitle}</p>
    </div>
  );
}