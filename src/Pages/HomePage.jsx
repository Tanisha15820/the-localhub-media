// import heroBanner from "../assets/hero-banner.png";
// import BrandsSection from "../components/BrandsSection";
// import ContactCTA from "../components/ContactCTA";
// import Footer from "../components/Footer";
// import ResultsSection from "../components/ResultsSection";
// import ServicesSection from "../components/ServicesSection";
// import WhyWorkWithUs from "../components/Whyworkwithus";

// const featureItems = [
//   "AI-Powered SEO Optimization",
//   "Smart Social Media Automation",
//   "Performance Marketing & Ads",
//   "AI Content Creation & Strategy",
//   "Brand Identity & Positioning",
//   "Data-Driven Growth Campaigns",
//   "Conversion-Focused Web Design",
// ];

// const doubled = [...featureItems, ...featureItems];

// function HomePage() {
//   return (
//     // ✅ FIX: removed overflow-hidden from wrapper — was trapping scroll
//     <div>
//       {/* ═══ HERO ═══ */}
//       <section
//         className="relative h-screen flex items-center font-main"
//         style={{
//           backgroundImage: `url(${heroBanner})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           // ✅ FIX: NO overflow-hidden here — it was clipping WhyWorkWithUs
//         }}
//       >
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/40 z-0" />
//         {/* Top vignette */}
//         <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/70 to-transparent z-0" />
//         {/* Bottom vignette */}
//         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-0" />

//         {/* ── INNER CONTENT ──
//             ✅ FIX: removed min-h-screen from this inner div
//             It was making the inner div taller than the section,
//             causing overflow that broke scrolling */}
//         <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-14 pt-24 pb-16 flex flex-col md:flex-row items-center justify-between gap-12">

//           {/* LEFT CONTENT */}
//           <div className="max-w-2xl animate-fadeUp">

//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-8">
//               <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
//               <span className="text-white/100 text-sm font-medium">
//                 #1 Digital Growth Agency
//               </span>
//             </div>

//             {/* Headline */}
//             <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
//               Grow Your Business with{" "}
//               <span className="text-primary">ThelocalHub Media</span>
//             </h1>

//             {/* Subheading */}
//             <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl">
//               We help brands grow faster with data-driven digital marketing,
//               creative content, and high-converting strategies.
//             </p>

//             {/* CTA Buttons */}
//             <div className="mt-10 flex flex-wrap gap-4">
//               <button className="bg-white text-textPrimary px-7 py-3.5 rounded-lg font-semibold text-sm hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200">
//                 Get Started
//               </button>
//               <button className="flex items-center gap-3 bg-white/8 backdrop-blur-md border border-white/25 text-white px-7 py-3.5 rounded-lg font-medium text-sm hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-200">
//                 <span className="play-icon" />
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* DIVIDER */}
//           {/* <div className="hidden md:block w-px h-56 bg-white/10 flex-shrink-0" /> */}

//           {/* RIGHT — Auto-scroll Feature List */}
//           <div className="flex items-center gap-5 animate-fadeUpDelay flex-shrink-0">
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

//         {/* Scroll indicator */}
//         {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
//           <p className="text-white/25 text-[10px] tracking-[0.2em] uppercase">scroll</p>
//           <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-scrollPulse" />
//         </div> */}
//       </section>

       
//       <WhyWorkWithUs />
//      <ServicesSection/>
//      <ContactCTA/>
//       <BrandsSection />
//       <ResultsSection/>

//   <Footer/>

//     </div>
//   );
// }

// export default HomePage;

import heroBanner from "../assets/hero-banner.png";
import BrandsSection from "../components/BrandsSection";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import ResultsSection from "../components/ResultsSection";
import ServicesSection from "../components/ServicesSection";
import WhyWorkWithUs from "../components/Whyworkwithus";

const featureItems = [
  "AI-Powered SEO Optimization",
  "Smart Social Media Automation",
  "Performance Marketing & Ads",
  "AI Content Creation & Strategy",
  "Brand Identity & Positioning",
  "Data-Driven Growth Campaigns",
  "Conversion-Focused Web Design",
];

const doubled = [...featureItems, ...featureItems];

function HomePage() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section
        style={{
          position: "relative",
          minHeight: "100svh",   /* svh collapses mobile browser chrome correctly */
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
              <span style={{ color: "#fff", fontSize: "0.875rem", fontWeight: 500 }}>#1 Digital Growth Agency</span>
            </div>

            {/* Headline */}
            <h1 className="hero-h1">
              Grow Your Business with{" "}
              <span style={{ color: "#D97757" }}>ThelocalHub Media</span>
            </h1>

            {/* Sub */}
            <p className="hero-sub">
              We help brands grow faster with data-driven digital marketing, creative content, and high-converting strategies.
            </p>

            {/* CTAs */}
            <div className="hero-cta-row">
              <button style={{ background: "#fff", color: "#1A1A1A", padding: "14px 28px", borderRadius: 10, fontWeight: 700, fontSize: "0.9rem", border: "none", cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
              >
                Get Started
              </button>
              <button style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", padding: "14px 28px", borderRadius: 10, fontWeight: 500, fontSize: "0.9rem", cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = ""; }}
              >
                <span className="play-icon" />
                Learn More
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

      <WhyWorkWithUs />
      <ServicesSection />
      <ContactCTA />
      <BrandsSection />
      <ResultsSection />
      <Footer />
    </div>
  );
}

export default HomePage;