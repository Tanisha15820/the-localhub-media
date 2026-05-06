// import heroBanner from "../assets/hero-banner.png";
// // import heroBanner from "../assets/banner.svg";

// import BrandsSection from "../components/BrandsSection";
// import ContactCTA from "../components/ContactCTA";
// import Footer from "../components/Footer";
// import GuideSection from "../components/GuideSection";

// import ProblemSection from "../components/ProblemSection";
// import ResultsSection from "../components/ResultsSection";
// import ServicesSection from "../components/ServicesSection";
// import WhyWorkWithUs from "../components/Whyworkwithus";

// const featureItems = [
//   "Brand Identity",
//   "Content Marketing",
//   "Performance Marketing",
//   "SEO & AEO",
//   "Shopify Growth",
//   "Web Development",
//   "Paid Ads",
// ];

// const doubled = [...featureItems, ...featureItems];

// function HomePage() {
//   return (
//     <div>
//       {/* ═══ HERO ═══ */}
//       <section
//         style={{
//           position: "relative",
//           minHeight: "100svh",   
//           display: "flex",
//           alignItems: "center",
//           fontFamily: "var(--font-main, 'Poppins', sans-serif)",
//           backgroundImage: `url(${heroBanner})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <style>{`
//           /* ── Hero responsive ── */
//           .hero-inner {
//             position: relative;
//             z-index: 10;
//             width: 100%;
//             max-width: 1260px;
//             margin: 0 auto;
//             padding: 112px 32px 64px;
//             display: flex;
//             flex-direction: row;
//             align-items: center;
//             justify-content: space-between;
//             gap: 48px;
//           }
//           .hero-left  { max-width: 640px; }
//           .hero-right { display: flex; align-items: center; gap: 20px; flex-shrink: 0; }

//           .hero-h1 {
//             font-size: clamp(2.2rem, 5vw, 3.75rem);
//             font-weight: 800;
//             color: #fff;
//             line-height: 1.1;
//             letter-spacing: -0.03em;
//             margin: 0 0 20px;
//           }
//           .hero-sub {
//             color: rgba(255,255,255,0.6);
//             font-size: clamp(0.95rem, 2vw, 1.125rem);
//             line-height: 1.75;
//             max-width: 520px;
//             margin: 0 0 40px;
//           }
//           .hero-cta-row {
//             display: flex;
//             flex-wrap: wrap;
//             gap: 14px;
//           }

//           /* Feature scroll — hidden on small mobile, shown md+ */
//           .hero-right { display: flex; }
//           @media (max-width: 900px) {
//             .hero-inner {
//               flex-direction: column;
//               align-items: flex-start;
//               padding: 96px 24px 56px;
//               gap: 32px;
//             }
//             .hero-right {
//               width: 100%;
//               justify-content: flex-start;
//             }
//           }
//           @media (max-width: 600px) {
//             .hero-inner { padding: 88px 20px 48px; }
//             .hero-right { display: none; }   /* hide scroll list on very small screens */
//             .hero-h1 { font-size: 2rem; }
//             .hero-cta-row { flex-direction: column; }
//             .hero-cta-row button { width: 100%; justify-content: center; }
//           }
//         `}</style>

//         {/* Dark overlays */}
//         <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.42)", zIndex: 0 }} />
//         <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 160, background: "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)", zIndex: 0 }} />
//         <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 128, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)", zIndex: 0 }} />

//         <div className="hero-inner">

//           {/* LEFT CONTENT */}
//           <div className="hero-left">
//             {/* Badge */}
//             <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.10)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 999, padding: "8px 18px", marginBottom: 28 }}>
//               <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#D97757", flexShrink: 0 }} />
//               <span style={{ color: "#fff", fontSize: "0.875rem", fontWeight: 500 }}>#1 Digital Human + AI Lead Growth Agency</span>
//             </div>

//             {/* Headline */}
//             <h1 className="hero-h1">
//               Your brand deserves more than{" "}
//               <span style={{ color: "#D97757" }}>a good-looking website.</span>
//             </h1>

//             {/* Sub */}
//             <p className="hero-sub">
//               D2C brands that are scaling need a full-stack growth engine — one that builds authority, drives traffic, converts buyers, and compounds over time. That's not an agency. That's a partner.
//               </p>

//               <p className="hero-sub">
//              TheLocalHub Media builds the complete digital infrastructure your brand needs to grow — and keep growing.
//               </p>

//               {/* Stats Row */}
// <div
//   style={{
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "28px",
//     marginTop: "32px",
//   }}
// >
//   {[
//     "120+ brands scaled",
//     "98% client retention",
//     "4+ years experience",
//   ].map((item, i) => (
//     <div
//       key={i}
//       style={{
//         color: "#EDE8D9", // bgSoft tone for soft premium feel
//         fontSize: "0.9rem",
//         fontWeight: 500,
//         display: "flex",
//         alignItems: "center",
//         gap: "10px",
//       }}
//     >
//       {/* Dot */}
//       <span
//         style={{
//           width: "6px",
//           height: "6px",
//           borderRadius: "50%",
//           background: "#D97757", // primary color
//           display: "inline-block",
//         }}
//       />
//       {item}
//     </div>
//   ))}
// </div>

//             {/* CTAs */}
//             <div className="hero-cta-row" style={{ marginTop: "40px" }}>
//               <button style={{ background: "#fff", color: "#1A1A1A", padding: "14px 28px", borderRadius: 10, fontWeight: 700, fontSize: "0.9rem", border: "none", cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit" }}
//                 onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)"; }}
//                 onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
//               >
//                 Ready For Strategy Call
//               </button>
//               <button style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", padding: "14px 28px", borderRadius: 10, fontWeight: 500, fontSize: "0.9rem", cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit" }}
//                 onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
//                 onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = ""; }}
//               >
//                 <span  />
//                 Book A Brand Performance Audit
//               </button>
//             </div>
//           </div>

//           {/* RIGHT — Auto-scroll Feature List */}
//           <div className="hero-right">
//             <div className="play-arrow flex-shrink-0" />
//             <div className="feature-scroll-track">
//               <div className="feature-scroll-inner">
//                 {doubled.map((item, i) => (
//                   <p key={i} className="feature-scroll-item">{item}</p>
//                 ))}
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>
//       <ProblemSection/>
//       <GuideSection/>

//       {/* <WhyWorkWithUs /> */}
//       <ResultsSection />
//       <ServicesSection />
//       <ContactCTA />
//       <BrandsSection />
      
//       <Footer />
//     </div>
//   );
// }

// export default HomePage;

// HeroSection.jsx
// Replace the entire <section> hero block in HomePage.jsx with this component.
// Keep your imports for heroBanner etc. and pass it as a prop, or import directly here.

import heroBanner from "../assets/hero-banner.png";
import BrandsSection from "../components/BrandsSection";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import GuideSection from "../components/GuideSection";
import PlanSection from "../components/PlanSection";
import ProblemSection from "../components/ProblemSection";
import ResultsSection from "../components/ResultsSection";
import ServicesSection from "../components/ServicesSection";
import StakesSection from "../components/StakesSection";
import TestimonialsSection from "../components/TestimonialsSection";
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

const STATS = [
  { num: "120+", label: "brands scaled" },
  { num: "98%",  label: "client retention" },
  { num: "4+",   label: "years experience" },
];

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-animate {
          opacity: 0;
          animation: hero-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes scroll-up {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        .feat-scroll-inner {
          display: flex;
          flex-direction: column;
          animation: scroll-up 14s linear infinite;
        }
        .feat-scroll-inner:hover { animation-play-state: paused; }

        .feat-item {
          writing-mode: horizontal-tb;
          padding: 14px 22px;
          margin-bottom: 10px;
          border-radius: 12px;
          font-size: 0.82rem;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.01em;
          white-space: nowrap;
          cursor: default;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: background 0.22s ease, color 0.22s ease, transform 0.2s ease;
          background: #fff;
          color: #1A1A1A;
          border: 1px solid rgba(0,0,0,0.07);
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }
        .feat-item:hover {
          background: #D97757;
          color: #fff;
          transform: translateX(4px);
          border-color: transparent;
        }
        .feat-item:hover .feat-arrow {
          color: #fff;
        }
        .feat-arrow {
          color: #D97757;
          font-size: 1rem;
          font-weight: 700;
          flex-shrink: 0;
          transition: color 0.22s ease;
        }

        @keyframes dot-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(217,119,87,0.5); }
          50%       { box-shadow: 0 0 0 7px rgba(217,119,87,0); }
        }
        .pulse-dot { animation: dot-pulse 2s ease infinite; }

        .hero-stat {
          transition: transform 0.25s ease;
          cursor: default;
        }
        .hero-stat:hover { transform: translateY(-3px); }

        .hero-btn-primary {
          background: #D97757;
          color: #fff;
          padding: 15px 30px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          transition: all 0.25s ease;
          box-shadow: 0 8px 28px rgba(217,119,87,0.35);
          display: inline-flex; align-items: center; gap: 8px;
        }
        .hero-btn-primary:hover {
          background: #C05A32;
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(217,119,87,0.42);
        }

        .hero-btn-secondary {
          background: #fff;
          color: #1A1A1A;
          padding: 15px 30px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.9rem;
          border: 1.5px solid rgba(0,0,0,0.10);
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          transition: all 0.25s ease;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          display: inline-flex; align-items: center; gap: 8px;
        }
        .hero-btn-secondary:hover {
          border-color: #D97757;
          color: #D97757;
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(217,119,87,0.15);
        }

        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(18px, -22px) scale(1.04); }
          66%       { transform: translate(-12px, 14px) scale(0.97); }
        }
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(72px);
          pointer-events: none;
          animation: drift 12s ease-in-out infinite;
        }

        .hero-inner-light {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 120px 40px 80px;
          display: grid;
          grid-template-columns: 1fr 260px;
          align-items: center;
          gap: 56px;
        }
        @media (max-width: 960px) {
          .hero-inner-light {
            grid-template-columns: 1fr;
            padding: 100px 28px 64px;
            gap: 40px;
          }
          .hero-scroll-col { display: none !important; }
        }
        @media (max-width: 600px) {
          .hero-inner-light { padding: 88px 20px 56px; }
          .hero-cta-row-light { flex-direction: column !important; }
          .hero-cta-row-light button { width: 100%; justify-content: center; }
        }

        .hero-noise {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }
      `}</style>

      <div>
        <section
          style={{
            position: "relative",
            minHeight: "100svh",
            display: "flex",
            alignItems: "center",
            fontFamily: "'Poppins', sans-serif",
            // background: "#FDF9F4",
            background: "#F0E8DC",
            overflow: "hidden",
          }}
        >
          <div className="hero-noise" />

          <div className="hero-blob" style={{ width: 560, height: 560, background: "rgba(217,119,87,0.20)", top: -120, right: -80, animationDelay: "0s" }} />
          <div className="hero-blob" style={{ width: 380, height: 380, background: "rgba(232,168,124,0.18)", bottom: -60, left: -60, animationDelay: "-5s" }} />
          <div className="hero-blob" style={{ width: 260, height: 260, background: "rgba(217,119,87,0.08)", top: "40%", left: "42%", animationDelay: "-8s" }} />

          <div style={{ position: "absolute", top: 60, right: 40, display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 14, opacity: 0.2, pointerEvents: "none", zIndex: 1 }}>
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} style={{ width: 3, height: 3, borderRadius: "50%", background: "#D97757" }} />
            ))}
          </div>

          <div style={{ position: "absolute", bottom: 60, left: 40, display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 14, opacity: 0.12, pointerEvents: "none", zIndex: 1 }}>
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} style={{ width: 3, height: 3, borderRadius: "50%", background: "#1A1A1A" }} />
            ))}
          </div>

          <div style={{ position: "absolute", left: 0, top: "15%", bottom: "15%", width: 3, background: "linear-gradient(to bottom, transparent, #D97757 30%, #D97757 70%, transparent)", borderRadius: 99, opacity: 0.35, zIndex: 1 }} />

          <div className="hero-inner-light">

            {/* ══ LEFT CONTENT ══ */}
            <div>

              {/* Badge */}
              <div className="hero-animate" style={{ animationDelay: "0.05s" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(217,119,87,0.10)", border: "1px solid rgba(217,119,87,0.28)", borderRadius: 999, padding: "8px 18px", marginBottom: 28 }}>
                  <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#D97757", flexShrink: 0 }} />
                  <span style={{ color: "#D97757", fontSize: "0.82rem", fontWeight: 600 }}>
                    #1 Digital Human + AI Lead Growth Agency
                  </span>
                </div>
              </div>

              {/* Headline */}
              <div className="hero-animate" style={{ animationDelay: "0.15s" }}>
                <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 900, color: "#1A1A1A", lineHeight: 1.08, letterSpacing: "-0.035em", margin: "0 0 22px" }}>
                  Your brand deserves
                  <br />
                  more than{" "}
                  <span style={{ color: "#D97757", position: "relative", display: "inline-block" }}>
                    a good-looking
                    <svg viewBox="0 0 300 10" style={{ position: "absolute", bottom: -4, left: 0, width: "100%", height: 8 }} preserveAspectRatio="none">
                      <path d="M0,7 Q37,1 75,7 Q112,13 150,7 Q187,1 225,7 Q262,13 300,7" stroke="#D97757" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
                    </svg>
                  </span>{" "}website.
                </h1>
              </div>

              {/* Sub */}
              <div className="hero-animate" style={{ animationDelay: "0.25s" }}>
                <p style={{ color: "#6B6B6B", fontSize: "clamp(0.95rem, 1.8vw, 1.08rem)", lineHeight: 1.8, maxWidth: 540, margin: "0 0 10px" }}>
                  D2C brands that are scaling need a full-stack growth engine — one that builds authority, drives traffic, converts buyers, and compounds over time.
                </p>
                <p style={{ color: "#6B6B6B", fontSize: "clamp(0.95rem, 1.8vw, 1.08rem)", lineHeight: 1.8, maxWidth: 540, margin: "0 0 36px" }}>
                  <strong style={{ color: "#1A1A1A", fontWeight: 700 }}>TheLocalHub Media</strong> builds the complete digital infrastructure your brand needs to grow — and keep growing.
                </p>
              </div>

              {/* Stats row */}
              <div className="hero-animate" style={{ animationDelay: "0.35s" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 38 }}>
                  {STATS.map((s, i) => (
                    <div key={i} className="hero-stat" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 12, padding: "12px 20px", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                      <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#D97757", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.num}</span>
                      <span style={{ fontSize: "0.78rem", fontWeight: 500, color: "#8C8C8C", lineHeight: 1.3 }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="hero-animate hero-cta-row-light" style={{ animationDelay: "0.45s", display: "flex", flexWrap: "wrap", gap: 14 }}>
                <button className="hero-btn-primary">
                  Ready For Strategy Call
                  <span style={{ fontSize: "1rem" }}>→</span>
                </button>
                <button className="hero-btn-secondary">
                  Book A Brand Performance Audit
                </button>
              </div>

            </div>

            {/* ══ RIGHT — Vertical auto-scroll feature list ══ */}
            <div className="hero-scroll-col" style={{ height: 420, overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to bottom, #FDF9F4, transparent)", zIndex: 2, pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top, #FDF9F4, transparent)", zIndex: 2, pointerEvents: "none" }} />

              <div className="feat-scroll-inner">
                {doubled.map((item, i) => (
                  <div key={i} className="feat-item">
                    <span className="feat-arrow">→</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom wave */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 5, lineHeight: 0, pointerEvents: "none" }}>
            <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
              <path d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,48 L0,48 Z" fill="#F5F0E8" />
            </svg>
          </div>

        </section>

        <ProblemSection />
        <GuideSection />
        <ResultsSection />
        <TestimonialsSection/>
        {/* <WhyWorkWithUs/> */}
        <PlanSection/>
        <ServicesSection />
        <StakesSection/>
        <ContactCTA />
        {/* <BrandsSection /> */}
        <Footer />
      </div>
    </>
  );
}