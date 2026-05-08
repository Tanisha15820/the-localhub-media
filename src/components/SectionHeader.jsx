
import Reveal from "./Reveal";

export default function SectionHeader({ tag, title, highlight, subtitle }) {
  return (
    <div className="bs-header">

      {/* 1. Tag pill */}
      <Reveal>
        <div className="bs-pill">
          <span className="bs-pill-dot" />
          <span className="bs-pill-text">{tag}</span>
        </div>
      </Reveal>

      {/* 2. Headline */}
      <Reveal delay={120}>
        <h2 className="bs-headline">
          {title} <br />
          <em>{highlight}</em>
        </h2>
      </Reveal>

      {/* 3. Subtitle */}
      <Reveal delay={240}>
        <p className="bs-subline">{subtitle}</p>
      </Reveal>

    </div>
  );
}