import { useState, useEffect, useRef } from "react";
import brandingImg from "../assets/branding.jpg";
import aiImg from "../assets/ai-marketing.jpg";
import growthImg from "../assets/growth.jpg";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const TABS = [
  { id: "ai",       label: "AI Marketing" },
  { id: "branding", label: "Branding"     },
  { id: "growth",   label: "Growth"       },
];

const PANELS = {
  ai: {
    tag:      "AI-Powered",
    headline: "Campaigns that think\nfor themselves.",
    body:     "We deploy cutting-edge AI to automate, personalise and optimise every touchpoint — so your marketing works 24/7 without lifting a finger.",
    cta:      "See AI in action",
    features: [
      { icon: "✦", title: "AI Content Engine",    desc: "Blog posts, ad copy & social at scale"  },
      { icon: "◈", title: "Predictive Targeting", desc: "Audiences that convert before you ask"  },
      { icon: "⬡", title: "Auto-Optimisation",    desc: "Live A/B tests that never sleep"        },
    ],
    card: {
      badge:  "AI Tools",
      title:  "Campaign Manager",
      meta:   "MODEL",
      model:  "ThelocalHub AI v2",
      tags:   ["#AIMarketing", "#Automation"],
      prompt: "Launch a retargeting campaign for cart abandoners — target 3× ROAS",
      btn:    "Run Campaign",
    },
    image:  aiImg,
    imgPos: "center",
  },
  branding: {
    tag:      "Brand Identity",
    headline: "Brands people can't\nstop talking about.",
    body:     "From logo systems to complete visual identities, we craft brands rooted in strategy and expressed through world-class design that commands instant recognition.",
    cta:      "View brand work",
    features: [
      { icon: "◉", title: "Visual Identity",  desc: "Logo, palette, typography & full guidelines"   },
      { icon: "⬤", title: "Brand Strategy",   desc: "Positioning, voice & messaging framework"      },
      { icon: "▲", title: "Launch Campaigns", desc: "Brand activations that create cultural moments" },
    ],
    card: {
      badge:  "Brand Studio",
      title:  "Identity Suite",
      meta:   "STYLE",
      model:  "Luxury Minimal",
      tags:   ["#Branding", "#Design"],
      prompt: "Generate a brand system for a D2C wellness startup targeting Gen-Z",
      btn:    "Generate System",
    },
    image: brandingImg,
    imgPos: "center",
  },
  growth: {
    tag:      "Performance",
    headline: "Growth engines that\ncompound daily.",
    body:     "Paid media, SEO and conversion-rate optimisation woven into a single flywheel — we build growth systems that get more powerful every month.",
    cta:      "Explore our results",
    features: [
      { icon: "◆", title: "Performance Ads", desc: "Meta, Google & programmatic at scale"     },
      { icon: "⬟", title: "SEO & Content",   desc: "Organic traffic that actually converts"   },
      { icon: "▪", title: "CRO & Analytics", desc: "Turn every visitor into a loyal customer" },
    ],
    card: {
      badge:  "Growth Hub",
      title:  "Analytics Dashboard",
      meta:   "CHANNEL",
      model:  "Omnichannel Suite",
      tags:   ["#SEO", "#PaidAds"],
      prompt: "Analyse last-30-day funnel and surface the top 3 growth levers",
      btn:    "Analyse Now",
    },
    image:  growthImg,
    imgPos: "center top",
  },
};

const STATS = [
  { num: "3×",   label: "Average ROAS"     },
  { num: "120+", label: "Brands grown"     },
  { num: "98%",  label: "Client retention" },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function WhyWorkWithUs() {
  const [active,  setActive]  = useState("ai");
  const [visible, setVisible] = useState(true);
  const timerRef              = useRef(null);
  const p                     = PANELS[active];

  /* crossfade helper */
  function crossfadeTo(id) {
    setVisible(false);
    setTimeout(() => { setActive(id); setVisible(true); }, 300);
  }

  function switchTab(id) {
    if (id === active) return;
    clearInterval(timerRef.current);
    crossfadeTo(id);
    restartCycle();
  }

  function restartCycle() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const ids = ["ai", "branding", "growth"];
      setActive(cur => {
        const next = ids[(ids.indexOf(cur) + 1) % ids.length];
        setVisible(false);
        setTimeout(() => { setActive(next); setVisible(true); }, 300);
        return cur; // keep cur until timeout fires
      });
    }, 5500);
  }

  useEffect(() => {
    restartCycle();
    return () => clearInterval(timerRef.current);
  }, []);

  /* transition helpers */
  const fadeIn  = (delay = 0) => ({
    opacity:    visible ? 1 : 0,
    transform:  visible ? "translateY(0)" : "translateY(10px)",
    transition: `opacity 0.32s ease ${delay}s, transform 0.32s ease ${delay}s`,
  });
  const fadeOnly = (delay = 0) => ({
    opacity:    visible ? 1 : 0,
    transition: `opacity 0.32s ease ${delay}s`,
  });

  return (
    <>
      {/* ── inject keyframes & responsive grid once ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        .wwu-grid {
          display: grid;
          grid-template-columns: 350px 1fr;
        }
        @media (max-width: 900px) {
          .wwu-grid {
            grid-template-columns: 1fr;
          }
          .wwu-image-col {
            min-height: 380px !important;
          }
        }

        .wwu-tab-btn {
          padding: 10px 24px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          transition: background 0.3s, color 0.3s, box-shadow 0.3s;
        }
        .wwu-tab-btn.active {
          background: #1A1A1A;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(0,0,0,0.22);
        }
        .wwu-tab-btn.inactive {
          background: transparent;
          color: #8C8C8C;
        }
        .wwu-tab-btn.inactive:hover { color: #1A1A1A; }

        .wwu-dot {
          height: 3px;
          border-radius: 99px;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: width 0.45s ease, background 0.45s ease;
        }

        .wwu-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #D97757;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
        }
        .wwu-cta-link:hover { gap: 10px; }

        .wwu-run-btn {
          width: 100%;
          border-radius: 12px;
          padding: 10px 0;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.03em;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #D97757 0%, #C05A32 100%);
        }
        .wwu-run-btn:hover { opacity: 0.9; }
      `}</style>

      <section
        style={{
          width: "100%",
          marginTop: "40px",
          background: "#F5F0E8",
          padding: "80px 16px",
          fontFamily: "'Poppins', sans-serif",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>

          {/* ── SECTION HEADER ─────────────────────────────────── */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>

            {/* eyebrow pill */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(217,119,87,0.10)",
              border: "1px solid rgba(217,119,87,0.25)",
              borderRadius: 999, padding: "6px 18px", marginBottom: 20,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D97757", flexShrink: 0 }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: "#D97757", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                Why Work With Us
              </span>
            </div>

            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.12,
              letterSpacing: "-0.025em",
              margin: "0 0 14px",
            }}>
              One agency for every lever<br />
              <span style={{ color: "#D97757" }}>that grows your brand.</span>
            </h2>

            <p style={{ color: "#8C8C8C", fontSize: "1rem", maxWidth: 440, margin: "0 auto", lineHeight: 1.7 }}>
              Pick your starting point. Every strategy, every tool, every format — all under one roof.
            </p>
          </div>

          {/* ── TAB SWITCHER ────────────────────────────────────── */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
            <div style={{
              display: "inline-flex",
              background: "#EDE8D9",
              borderRadius: 999,
              padding: 6,
              gap: 4,
            }}>
              {TABS.map(t => (
                <button
                  key={t.id}
                  className={`wwu-tab-btn ${active === t.id ? "active" : "inactive"}`}
                  onClick={() => switchTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── MAIN DARK PANEL ─────────────────────────────────── */}
          <div style={{
            borderRadius: 20,
            overflow: "hidden",
            background: "#161412",
            boxShadow: "0 40px 100px rgba(0,0,0,0.32)",
          }}>

            {/* grid: sidebar | image */}
            <div className="wwu-grid">

              {/* ── LEFT SIDEBAR ── */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "44px 40px",
                borderRight: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div>

                  {/* service tag */}
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    background: "rgba(217,119,87,0.12)",
                    border: "1px solid rgba(217,119,87,0.26)",
                    borderRadius: 999, padding: "5px 14px",
                    marginBottom: 20,
                    fontSize: 10, fontWeight: 700,
                    color: "#D97757", letterSpacing: "0.14em", textTransform: "uppercase",
                    ...fadeOnly(0),
                  }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#D97757" }} />
                    {p.tag}
                  </div>

                  {/* headline */}
                  <h3 style={{
                    fontSize: "clamp(1.3rem, 1.8vw, 1.65rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.22,
                    letterSpacing: "-0.02em",
                    whiteSpace: "pre-line",
                    marginBottom: 14,
                    ...fadeIn(0),
                  }}>
                    {p.headline}
                  </h3>

                  {/* body */}
                  <p style={{
                    fontSize: "0.86rem",
                    color: "rgba(255,255,255,0.47)",
                    lineHeight: 1.75,
                    marginBottom: 18,
                    ...fadeOnly(0.05),
                  }}>
                    {p.body}
                  </p>

                  {/* CTA */}
                  <a href="#" className="wwu-cta-link" style={fadeOnly(0.08)}>
                    {p.cta} <span style={{ fontSize: "1rem" }}>→</span>
                  </a>

                  {/* divider */}
                  <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "28px 0" }} />

                  {/* features */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {p.features.map((f, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, ...fadeIn(0.06 + i * 0.07) }}>
                        <span style={{ color: "#D97757", fontSize: "1.1rem", marginTop: 2, lineHeight: 1, flexShrink: 0 }}>
                          {f.icon}
                        </span>
                        <div>
                          <p style={{ color: "#fff", fontSize: "0.86rem", fontWeight: 600, margin: 0 }}>{f.title}</p>
                          <p style={{ color: "rgba(255,255,255,0.37)", fontSize: "0.76rem", margin: "3px 0 0", lineHeight: 1.5 }}>{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* progress dots */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 36 }}>
                  {TABS.map(t => (
                    <button
                      key={t.id}
                      className="wwu-dot"
                      onClick={() => switchTab(t.id)}
                      style={{
                        width:      active === t.id ? 28 : 10,
                        background: active === t.id ? "#D97757" : "rgba(255,255,255,0.18)",
                      }}
                    />
                  ))}
                  <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.72rem", marginLeft: 8 }}>
                    {TABS.findIndex(t => t.id === active) + 1}/{TABS.length}
                  </span>
                </div>
              </div>

              {/* ── RIGHT: BIG IMAGE ── */}
              <div
                className="wwu-image-col"
                style={{ position: "relative", minHeight: 580, overflow: "hidden" }}
              >

                {/* full-bleed image */}
                <img
                  key={active}
                  src={p.image}
                  alt={p.tag}
                  style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    objectPosition: p.imgPos,
                    opacity:   visible ? 1 : 0,
                    transform: visible ? "scale(1)" : "scale(1.04)",
                    transition: "opacity 0.48s ease, transform 0.55s ease",
                  }}
                />

                {/* left-edge dark bleed */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to right, rgba(22,20,18,0.6) 0%, transparent 40%)",
                  pointerEvents: "none",
                }} />
                {/* bottom dark bleed */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(22,20,18,0.65) 0%, transparent 55%)",
                  pointerEvents: "none",
                }} />

                {/* active-tab badge top-left */}
                <div style={{
                  position: "absolute", top: 20, left: 20,
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(217,119,87,0.88)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 8, padding: "6px 14px",
                  ...fadeOnly(0),
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.85)" }} />
                  <span style={{ color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                    {TABS.find(t => t.id === active)?.label}
                  </span>
                </div>

                {/* ── FLOATING TOOL CARD ── */}
                <div style={{
                  position: "absolute", bottom: 24, right: 24,
                  width: 260,
                  background: "rgba(14,12,10,0.85)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 18,
                  padding: "18px 18px 14px",
                  boxShadow: "0 28px 70px rgba(0,0,0,0.65)",
                  opacity:   visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(14px)",
                  transition: "opacity 0.38s ease 0.14s, transform 0.38s ease 0.14s",
                }}>

                  {/* card badge */}
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: 7, padding: "4px 10px",
                    marginBottom: 12,
                    fontSize: 10, fontWeight: 700,
                    color: "rgba(255,255,255,0.42)", letterSpacing: "0.1em", textTransform: "uppercase",
                  }}>
                    ⠿ {p.card.badge}
                  </div>

                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.92rem", margin: "0 0 12px" }}>
                    {p.card.title}
                  </p>

                  {/* model row */}
                  <p style={{ color: "rgba(255,255,255,0.27)", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>
                    {p.card.meta}
                  </p>
                  <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    borderRadius: 9, padding: "8px 12px",
                    marginBottom: 10,
                  }}>
                    <span style={{ color: "#fff", fontSize: "0.78rem", fontWeight: 500 }}>◈ {p.card.model}</span>
                    <span style={{ color: "rgba(255,255,255,0.22)", fontSize: "0.75rem" }}>▾</span>
                  </div>

                  {/* tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                    {p.card.tags.map(tag => (
                      <span key={tag} style={{
                        background: "rgba(217,119,87,0.14)",
                        border: "1px solid rgba(217,119,87,0.28)",
                        borderRadius: 7, padding: "3px 9px",
                        fontSize: 10, fontWeight: 700, color: "#D97757",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* prompt */}
                  <p style={{ color: "rgba(255,255,255,0.27)", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>
                    PROMPT
                  </p>
                  <div style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 9, padding: "9px 12px",
                    fontSize: 11, color: "rgba(255,255,255,0.57)", lineHeight: 1.55,
                    marginBottom: 12,
                  }}>
                    {p.card.prompt}
                  </div>

                  {/* generate button */}
                  <button className="wwu-run-btn">
                    {p.card.btn} <span>✦</span>
                  </button>
                </div>
              </div>
            </div>

            {/* ── STATS BAR ─────────────────────────────────────── */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}>
              {STATS.map((s, i) => (
                <div key={i} style={{
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  padding: "24px 16px", gap: 4,
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}>
                  <span style={{ color: "#fff", fontSize: "1.6rem", fontWeight: 700, letterSpacing: "-0.03em" }}>{s.num}</span>
                  <span style={{ color: "rgba(255,255,255,0.32)", fontSize: "0.76rem", fontWeight: 500 }}>{s.label}</span>
                </div>
              ))}
            </div>

          </div>{/* end dark panel */}
        </div>
      </section>
    </>
  );
}