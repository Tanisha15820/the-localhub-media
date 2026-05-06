import heroBanner from "../assets/hero-banner.png";
// import heroBanner from "../assets/banner.svg";

import BrandsSection from "../components/BrandsSection";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import GuideSection from "../components/GuideSection";

import ProblemSection from "../components/ProblemSection";
import ResultsSection from "../components/ResultsSection";
import ServicesSection from "../components/ServicesSection";
import WhyWorkWithUs from "../components/Whyworkwithus";

const featureItems = [
  "Brand Identity",
  "Content Marketing",
  "Performance Marketing",
  "SEO & AEO",
  "Shopify Growth",
  "Web Development",
  "Paid Ads",
];

const doubled = [...featureItems, ...featureItems];

function HomePage() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section
        style={{
          position: "relative",
          minHeight: "100svh",   
          display: "flex",
          alignItems: "center",
          fontFamily: "var(--font-main, 'Poppins', sans-serif)",
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <style>{`
          /* ── Hero responsive ── */
          .hero-inner {
            position: relative;
            z-index: 10;
            width: 100%;
            max-width: 1260px;
            margin: 0 auto;
            padding: 112px 32px 64px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 48px;
          }
          .hero-left  { max-width: 640px; }
          .hero-right { display: flex; align-items: center; gap: 20px; flex-shrink: 0; }

          .hero-h1 {
            font-size: clamp(2.2rem, 5vw, 3.75rem);
            font-weight: 800;
            color: #fff;
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin: 0 0 20px;
          }
          .hero-sub {
            color: rgba(255,255,255,0.6);
            font-size: clamp(0.95rem, 2vw, 1.125rem);
            line-height: 1.75;
            max-width: 520px;
            margin: 0 0 40px;
          }
          .hero-cta-row {
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
          }

          /* Feature scroll — hidden on small mobile, shown md+ */
          .hero-right { display: flex; }
          @media (max-width: 900px) {
            .hero-inner {
              flex-direction: column;
              align-items: flex-start;
              padding: 96px 24px 56px;
              gap: 32px;
            }
            .hero-right {
              width: 100%;
              justify-content: flex-start;
            }
          }
          @media (max-width: 600px) {
            .hero-inner { padding: 88px 20px 48px; }
            .hero-right { display: none; }   /* hide scroll list on very small screens */
            .hero-h1 { font-size: 2rem; }
            .hero-cta-row { flex-direction: column; }
            .hero-cta-row button { width: 100%; justify-content: center; }
          }
        `}</style>

        {/* Dark overlays */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.42)", zIndex: 0 }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 160, background: "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 128, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)", zIndex: 0 }} />

        <div className="hero-inner">

          {/* LEFT CONTENT */}
          <div className="hero-left">
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.10)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 999, padding: "8px 18px", marginBottom: 28 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#D97757", flexShrink: 0 }} />
              <span style={{ color: "#fff", fontSize: "0.875rem", fontWeight: 500 }}>#1 Digital Human + AI Lead Growth Agency</span>
            </div>

            {/* Headline */}
            <h1 className="hero-h1">
              Your brand deserves more than{" "}
              <span style={{ color: "#D97757" }}>a good-looking website.</span>
            </h1>

            {/* Sub */}
            <p className="hero-sub">
              D2C brands that are scaling need a full-stack growth engine — one that builds authority, drives traffic, converts buyers, and compounds over time. That's not an agency. That's a partner.
              </p>

              <p className="hero-sub">
             TheLocalHub Media builds the complete digital infrastructure your brand needs to grow — and keep growing.
              </p>

              {/* Stats Row */}
<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "28px",
    marginTop: "32px",
  }}
>
  {[
    "120+ brands scaled",
    "98% client retention",
    "4+ years experience",
  ].map((item, i) => (
    <div
      key={i}
      style={{
        color: "#EDE8D9", // bgSoft tone for soft premium feel
        fontSize: "0.9rem",
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {/* Dot */}
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#D97757", // primary color
          display: "inline-block",
        }}
      />
      {item}
    </div>
  ))}
</div>

            {/* CTAs */}
            <div className="hero-cta-row" style={{ marginTop: "40px" }}>
              <button style={{ background: "#fff", color: "#1A1A1A", padding: "14px 28px", borderRadius: 10, fontWeight: 700, fontSize: "0.9rem", border: "none", cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
              >
                Ready For Strategy Call
              </button>
              <button style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", padding: "14px 28px", borderRadius: 10, fontWeight: 500, fontSize: "0.9rem", cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = ""; }}
              >
                <span  />
                Book A Brand Performance Audit
              </button>
            </div>
          </div>

          {/* RIGHT — Auto-scroll Feature List */}
          <div className="hero-right">
            <div className="play-arrow flex-shrink-0" />
            <div className="feature-scroll-track">
              <div className="feature-scroll-inner">
                {doubled.map((item, i) => (
                  <p key={i} className="feature-scroll-item">{item}</p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
      <ProblemSection/>
      <GuideSection/>

      {/* <WhyWorkWithUs /> */}
      <ResultsSection />
      <ServicesSection />
      <ContactCTA />
      <BrandsSection />
      
      <Footer />
    </div>
  );
}

export default HomePage;

