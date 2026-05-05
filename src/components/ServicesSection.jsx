

import { useState } from "react";

/* ─── Folder mockup for "One place" card — 2 images, 1 full + 1 half ─── */
function ProjectMockup() {
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 22px 22px", display: "flex", gap: 10, alignItems: "flex-end" }}>

      {/* Image 1 — fully visible */}
      <div style={{ flex: 1, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 8px 24px rgba(0,0,0,0.5)" }}>
        <img
          src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&q=80"
          alt="Brand Project"
          style={{ width: "100%", height: 110, objectFit: "cover", display: "block" }}
        />
        <div style={{ padding: "6px 10px", background: "rgba(0,0,0,0.3)" }}>
          <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Brand Project
          </span>
        </div>
      </div>

      {/* Image 2 — half cut off on right edge */}
      <div style={{ width: 100, flexShrink: 0, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 8px 24px rgba(0,0,0,0.5)", marginRight: -36 }}>
        <img
          src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=300&q=80"
          alt="Campaign Assets"
          style={{ width: "100%", height: 110, objectFit: "cover", display: "block" }}
        />
        <div style={{ padding: "6px 10px", background: "rgba(0,0,0,0.3)" }}>
          <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Campaign Assets
          </span>
        </div>
      </div>

    </div>
  );
}

/* ─── Launch mockup for "Go live" card ─── */
function LaunchMockup() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <img
        src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80"
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.65 }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,30,46,0.55) 0%, rgba(8,30,46,0.1) 40%, rgba(8,30,46,0.1) 60%, rgba(8,30,46,0.92) 100%)" }} />
      <div style={{
        position: "absolute", bottom: 26, left: "50%", transform: "translateX(-50%)",
        border: "2px solid #ec4899", borderRadius: 999,
        padding: "11px 30px", fontSize: 12, fontWeight: 800, color: "#fff",
        letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap",
        backdropFilter: "blur(10px)", background: "rgba(236,72,153,0.12)",
      }}>
        Launch Campaign
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
export default function ServicesSection() {
  const [hov, setHov] = useState(null);

  const h = (id) => ({
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform: hov === id ? "translateY(-3px) scale(1.005)" : "translateY(0) scale(1)",
    boxShadow: hov === id ? "0 24px 60px rgba(0,0,0,0.22)" : "none",
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        .svc { font-family: 'Poppins', sans-serif; }
        .svc-tag { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; margin: 0 0 14px; display: block; }
        .svc-h3 { font-weight: 800; line-height: 1.18; letter-spacing: -0.025em; margin: 0 0 12px; }
        .svc-p  { font-size: 0.83rem; line-height: 1.75; margin: 0; }
        .filter-tab { padding: 6px 14px; border-radius: 999px; font-size: 10px; font-weight: 700; cursor: pointer; }
        .tool-row { display: flex; align-items: center; gap: 10px; padding: 9px 12px; border-radius: 9px; cursor: pointer; transition: background 0.2s; }
        .tool-row:hover { background: rgba(217,119,87,0.08); }
      `}</style>

      <section className="svc" style={{ width: "100%", background: "#F5F0E8", padding: "88px 20px 80px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: 1260, margin: "0 auto" }}>

          {/* ── SECTION HEADER ── */}
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(217,119,87,0.10)", border: "1px solid rgba(217,119,87,0.25)", borderRadius: 999, padding: "6px 18px", marginBottom: 18 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D97757", flexShrink: 0 }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: "#D97757", letterSpacing: "0.14em", textTransform: "uppercase" }}>Services</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 14px" }}>
              Everything your brand needs<br />
              <span style={{ color: "#D97757" }}>in one place.</span>
            </h2>
            <p style={{ color: "#8C8C8C", fontSize: "1rem", maxWidth: 440, margin: "0 auto", lineHeight: 1.75 }}>
              AI, branding, growth, content — thirty-plus capabilities. Zero agency-hopping. Open what you need and get results.
            </p>
          </div>

          {/* ── BENTO GRID ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "auto auto", gap: 12 }}>

            {/* ── CARD A: "Every tool, ready to go" — light ── */}
            <div
              onMouseEnter={() => setHov("a")} onMouseLeave={() => setHov(null)}
              style={{ gridColumn: "1/2", gridRow: "1/2", background: "#D8CFC2", borderRadius: 16, padding: "32px 26px", display: "flex", flexDirection: "column", ...h("a") }}
            >
              <span className="svc-tag" style={{ color: "#D97757" }}>✦ All-in-one</span>
              <h3 className="svc-h3" style={{ fontSize: "1.4rem", color: "#1A1A1A", marginBottom: 10 }}>
                Every tool,<br />ready to go.
              </h3>
              <p className="svc-p" style={{ color: "#5A5A5A", marginBottom: 22, flex: 1 }}>
                AI, video, branding, growth — all under one roof. No setup, no switching. Open what you need, make what you want.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {[
                  { dot: "#D97757", label: "AI Marketing Automation" },
                  { dot: "#1A1A1A", label: "Brand Identity & Design" },
                  { dot: "#1A1A1A", label: "Performance Growth Ads" },
                  { dot: "#1A1A1A", label: "Analytics & Reporting" },
                ].map(t => (
                  <div key={t.label} className="tool-row">
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: t.dot, flexShrink: 0 }} />
                    <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#1A1A1A" }}>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════
                CARD B — AI Canvas (SS1 style)
                Text on LEFT, single image on RIGHT, connector line below
            ══════════════════════════════════════════════════════ */}
            <div
              onMouseEnter={() => setHov("b")} onMouseLeave={() => setHov(null)}
              style={{
                gridColumn: "2/4", gridRow: "1/2",
                background: "#0c0a1a", borderRadius: 16,
                overflow: "hidden", position: "relative",
                minHeight: 300, display: "flex", flexDirection: "column",
                ...h("b")
              }}
            >
              {/* Top row: text left + image right */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "32px 32px 24px", gap: 20, flex: 1 }}>

                {/* LEFT — text */}
                <div style={{ flex: 1, position: "relative", zIndex: 2 }}>
                  <span className="svc-tag" style={{ color: "rgba(167,139,250,0.85)" }}>✦ AI-Powered</span>
                  <h3 className="svc-h3" style={{ fontSize: "clamp(1.3rem,2vw,1.85rem)", color: "#fff", maxWidth: 320 }}>
                    Your entire marketing<br />on one AI canvas.
                  </h3>
                  <p className="svc-p" style={{ color: "rgba(255,255,255,0.48)", maxWidth: 340 }}>
                    All your campaigns. All your content. One infinite AI workspace. Build ideas, compare versions, and ship with your team — all from one dashboard.
                  </p>
                </div>

                {/* RIGHT — single image with node dot + badge */}
                <div style={{ position: "relative", flexShrink: 0, marginTop: 6 }}>

                  {/* Node dot — top left of image */}
                  <div style={{
                    position: "absolute", top: -7, left: -7, zIndex: 3,
                    width: 16, height: 16, borderRadius: "50%",
                    background: "#6366f1", border: "2px solid #0c0a1a",
                    boxShadow: "0 0 10px rgba(99,102,241,0.7)"
                  }} />

                  {/* The image */}
                  <div style={{
                    width: 200, height: 148, borderRadius: 12, overflow: "hidden",
                    border: "1.5px solid rgba(255,255,255,0.18)",
                    boxShadow: "0 12px 36px rgba(0,0,0,0.7)"
                  }}>
                    <img
                      src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80"
                      alt="AI Campaign"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>

                  {/* User badge — bottom right of image */}
                  <div style={{
                    position: "absolute", bottom: -10, right: -10, zIndex: 3,
                    background: "#ec4899", borderRadius: 7,
                    padding: "5px 12px", fontSize: 10, fontWeight: 800,
                    color: "#fff", boxShadow: "0 4px 14px rgba(236,72,153,0.55)",
                    letterSpacing: "0.04em"
                  }}>
                    Campaign
                  </div>

                  {/* AI Engine badge — top right */}
                  <div style={{
                    position: "absolute", top: -10, right: -10, zIndex: 3,
                    background: "#3b82f6", borderRadius: 7,
                    padding: "5px 12px", fontSize: 10, fontWeight: 800,
                    color: "#fff", boxShadow: "0 4px 14px rgba(59,130,246,0.55)"
                  }}>
                    AI Engine
                  </div>
                </div>
              </div>

              {/* Connector curve at bottom */}
              <svg
                style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 64, pointerEvents: "none" }}
                viewBox="0 0 680 64"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.75" />
                  </linearGradient>
                </defs>
                <path d="M 60 20 C 200 20, 400 55, 600 55" stroke="url(#cg)" strokeWidth="2.5" fill="none" />
                <circle cx="60"  cy="20" r="5" fill="#6366f1" />
                <circle cx="600" cy="55" r="5" fill="#a855f7" />
              </svg>
            </div>

            {/* ── CARD C: Capabilities filter ── */}
            <div
              onMouseEnter={() => setHov("c")} onMouseLeave={() => setHov(null)}
              style={{ gridColumn: "1/2", gridRow: "2/3", background: "#fff", borderRadius: 16, padding: "26px 22px", display: "flex", flexDirection: "column", ...h("c") }}
            >
              <div style={{ display: "flex", gap: 6, marginBottom: 18, flexWrap: "wrap" }}>
                {[["ALL", true], ["BRAND", false], ["ADS", false], ["SEO", false]].map(([t, active]) => (
                  <span key={t} className="filter-tab" style={{
                    background: active ? "#1A1A1A" : "transparent",
                    color: active ? "#fff" : "#8C8C8C",
                    border:"none" ,
                  }}>{t}</span>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, flex: 1 }}>
                {[
                  { src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&q=80", label: "Paid Social" },
                  { src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&q=80", label: "Brand Design" },
                  { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80", label: "SEO & Growth" },
                  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&q=80", label: "Campaigns" },
                ].map(item => (
                  <div key={item.label} style={{ position: "relative", borderRadius: 9, overflow: "hidden", aspectRatio: "1" }}>
                    <img src={item.src} alt={item.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top,rgba(0,0,0,0.72),transparent)", padding: "18px 8px 7px" }}>
                      <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.8)", letterSpacing: "0.08em", textTransform: "uppercase" }}> {item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════
                CARD D — Collaboration (SS2 style)
                Text top, 2 images bottom (1 full + 1 half cut)
            ══════════════════════════════════════════════════════ */}
            <div
              onMouseEnter={() => setHov("d")} onMouseLeave={() => setHov(null)}
              style={{
                gridColumn: "2/3", gridRow: "2/3",
                background: "#3d0d1a", borderRadius: 16,
                padding: "30px 26px 200px",
                position: "relative", overflow: "hidden",
                ...h("d")
              }}
            >
              <ProjectMockup />
              <div style={{ position: "relative", zIndex: 1 }}>
                <span className="svc-tag" style={{ color: "rgba(252,165,165,0.75)" }}>✦ Collaboration</span>
                <h3 className="svc-h3" style={{ fontSize: "1.5rem", color: "#fff" }}>
                  One place,<br />whole team.
                </h3>
                <p className="svc-p" style={{ color: "rgba(255,255,255,0.48)" }}>
                  Organise brand assets, generated content, and live campaigns together. Your team stays in sync, your brand stays consistent.
                </p>
              </div>
            </div>

            {/* ── CARD E: "Go live in one click" ── */}
            <div
              onMouseEnter={() => setHov("e")} onMouseLeave={() => setHov(null)}
              style={{ gridColumn: "3/4", gridRow: "2/3", background: "#081e2e", borderRadius: 16, position: "relative", overflow: "hidden", minHeight: 420, ...h("e") }}
            >
              <LaunchMockup />
              <div style={{ position: "relative", zIndex: 2, padding: "30px 26px 0" }}>
                <span className="svc-tag" style={{ color: "rgba(56,189,248,0.8)" }}>✦ Automation</span>
                <h3 className="svc-h3" style={{ fontSize: "1.5rem", color: "#fff" }}>
                  Go live<br />in one click.
                </h3>
                <p className="svc-p" style={{ color: "rgba(255,255,255,0.48)" }}>
                  Save any campaign as an app. The next time you launch, it runs itself — no brief, no back-and-forth.
                </p>
              </div>
            </div>

          </div>

          {/* ── CTA ROW ── */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginTop: 44, flexWrap: "wrap" }}>
            <a href="#"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1A1A1A", color: "#fff", borderRadius: 999, padding: "13px 30px", fontFamily: "'Poppins',sans-serif", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.background = "#D97757"}
              onMouseLeave={e => e.currentTarget.style.background = "#1A1A1A"}
            >
              Explore all services →
            </a>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#1A1A1A", border: "1.5px solid rgba(26,26,26,0.18)", borderRadius: 999, padding: "12px 26px", fontFamily: "'Poppins',sans-serif", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>
              Book a free strategy call
            </a>
          </div>

        </div>
      </section>
    </>
  );
}