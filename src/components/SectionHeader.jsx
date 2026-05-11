import Reveal from "./Reveal";


export default function SectionHeader({
  tag,
  title,
  highlight,
  endText,
  subtitle,
}) {
  return (
    <div className="bs-header">

      {/* Tag */}
      <Reveal>
        <div className="bs-pill">
          <span className="bs-pill-dot" />
          <span className="bs-pill-text">{tag}</span>
        </div>
      </Reveal>

      {/* Heading */}
      <Reveal delay={120}>
        <h2 className="bs-headline">
          {title} <em>{highlight}</em> {endText}
        </h2>
      </Reveal>

      {/* Subtitle */}
      <Reveal delay={240}>
        <p className="bs-subline">{subtitle}</p>
      </Reveal>

    </div>
  );
}