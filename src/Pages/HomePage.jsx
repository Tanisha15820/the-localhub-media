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
    // ✅ FIX: removed overflow-hidden from wrapper — was trapping scroll
    <div>
      {/* ═══ HERO ═══ */}
      <section
        className="relative h-screen flex items-center font-main"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // ✅ FIX: NO overflow-hidden here — it was clipping WhyWorkWithUs
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        {/* Top vignette */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/70 to-transparent z-0" />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-0" />

        {/* ── INNER CONTENT ──
            ✅ FIX: removed min-h-screen from this inner div
            It was making the inner div taller than the section,
            causing overflow that broke scrolling */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-14 pt-24 pb-16 flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl animate-fadeUp">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-white/100 text-sm font-medium">
                #1 Digital Growth Agency
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Grow Your Business with{" "}
              <span className="text-primary">ThelocalHub Media</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl">
              We help brands grow faster with data-driven digital marketing,
              creative content, and high-converting strategies.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-white text-textPrimary px-7 py-3.5 rounded-lg font-semibold text-sm hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200">
                Get Started
              </button>
              <button className="flex items-center gap-3 bg-white/8 backdrop-blur-md border border-white/25 text-white px-7 py-3.5 rounded-lg font-medium text-sm hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-200">
                <span className="play-icon" />
                Learn More
              </button>
            </div>
          </div>

          {/* DIVIDER */}
          {/* <div className="hidden md:block w-px h-56 bg-white/10 flex-shrink-0" /> */}

          {/* RIGHT — Auto-scroll Feature List */}
          <div className="flex items-center gap-5 animate-fadeUpDelay flex-shrink-0">
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

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <p className="text-white/25 text-[10px] tracking-[0.2em] uppercase">scroll</p>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-scrollPulse" />
        </div> */}
      </section>

       
      <WhyWorkWithUs />
     <ServicesSection/>
     <ContactCTA/>
      <BrandsSection />
      <ResultsSection/>

  <Footer/>

    </div>
  );
}

export default HomePage;