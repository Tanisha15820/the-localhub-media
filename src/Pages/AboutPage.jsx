import BeliefsSection from "../components/BeliefsSection";
import NotForSection from "../components/NotForSection";
import NumbersSection from "../components/NumbersSection";
import Reveal from "../components/Reveal";
import {
  BarChart3,
  Globe,
  Megaphone,
  ShoppingBag,
  TrendingUp,
  Search,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#F0E8DC] font-[Poppins] overflow-hidden">
      
      {/* ───────── HERO SECTION ───────── */}
{/* ───────── HERO SECTION ───────── */}
<section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 overflow-hidden py-24 bg-[#F0E8DC]">

  {/* Background Blobs */}
  <div className="absolute w-[560px] h-[560px] bg-[#D97757]/20 blur-3xl rounded-full top-[-180px] right-[-120px] animate-pulse" />

  <div className="absolute w-[340px] h-[340px] bg-[#D97757]/10 blur-3xl rounded-full bottom-[-100px] left-[-80px]" />

  <div className="absolute w-[240px] h-[240px] bg-[#E8A87C]/20 blur-3xl rounded-full top-[40%] left-[45%]" />

  {/* Background Icons */}
 {/* Marketing Background Icons */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* Meta Ads */}
  <div className="absolute top-[14%] left-[8%] rotate-[-18deg] opacity-[0.25]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24 text-[#9F4B2D]"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
      10-4.48 10-10S17.52 2 12 2zm-1 15h-2V9h2v8zm4
      0h-2V7h2v10z"/>
    </svg>
  </div>

  {/* Analytics Chart */}
  <div className="absolute top-[20%] right-[10%] rotate-[12deg] opacity-[0.25]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-28 h-28 text-[#9F4B2D]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M4 19h16" />
      <path d="M7 16V10" />
      <path d="M12 16V6" />
      <path d="M17 16v-4" />
    </svg>
  </div>

  {/* Shopify Bag */}
  <div className="absolute bottom-[20%] left-[12%] rotate-[15deg] opacity-[0.25]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24 text-[#9F4B2D]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <path d="M6 7h12l-1 13H7L6 7z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </svg>
  </div>

  {/* SEO Search */}
  <div className="absolute bottom-[18%] right-[14%] rotate-[-12deg] opacity-[0.25]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24 text-[#9F4B2D]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  </div>

  {/* Content Marketing */}
  <div className="absolute top-[50%] left-[22%] rotate-[10deg] opacity-[0.25]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-20 text-[#9F4B2D]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </svg>
  </div>

  {/* Growth Arrow */}
  <div className="absolute top-[58%] right-[24%] rotate-[-10deg] opacity-[0.25]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24 text-[#9F4B2D]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M4 16l6-6 4 4 6-8" />
      <path d="M14 6h6v6" />
    </svg>
  </div>

</div>

  {/* Dots */}
  <div className="absolute top-20 right-10 grid grid-cols-6 gap-4 opacity-20">
    {Array.from({ length: 24 }).map((_, i) => (
      <div
        key={i}
        className="w-[3px] h-[3px] rounded-full bg-[#D97757]"
      />
    ))}
  </div>

  {/* Left Vertical Line */}
  <div className="absolute left-0 top-[15%] bottom-[15%] w-[3px] bg-gradient-to-b from-transparent via-[#D97757] to-transparent opacity-40 rounded-full" />

  {/* Main Content */}
  <div className="relative z-10 max-w-5xl text-center">

    {/* Tag */}
    <Reveal>
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#D97757]/20 shadow-sm mb-8">
        <span className="w-2 h-2 rounded-full bg-[#D97757] animate-pulse" />

        <span className="text-[#D97757] text-sm font-semibold">
          About — Who we are
        </span>
      </div>
    </Reveal>

    {/* Heading */}
    <Reveal delay={100}>
      <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] leading-[1.08] tracking-[-0.04em]">

        <span className="text-[#D97757]">
          We built this because
        </span>

        <br />

        <span className="relative inline-block">
          D2C founders deserved better.

          <svg
            viewBox="0 0 420 10"
            className="absolute -bottom-3 left-0 w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,7 Q52,1 105,7 Q157,13 210,7 Q262,1 315,7 Q367,13 420,7"
              stroke="#D97757"
              strokeWidth="2.5"
              fill="none"
              opacity="0.45"
              strokeLinecap="round"
            />
          </svg>
        </span>

      </h1>
    </Reveal>

    {/* Paragraphs */}
    <Reveal delay={200}>
      <div className="mt-10 max-w-3xl mx-auto space-y-6">

        <p className="text-[#6B6B6B] text-[1.05rem] leading-[1.9]">
          Not better ads. Not better SEO. A better model — where the team
          working on your brand actually thinks like a business owner, not a
          retainer manager.
        </p>

        <p className="text-[#6B6B6B] text-[1.05rem] leading-[1.9]">
          TheLocalHub Media was built around one conviction: digital
          marketing only works when every channel compounds the last. We
          don't sell services. We build systems.
        </p>

      </div>
    </Reveal>

  </div>

  {/* Bottom Wave */}
  <div className="absolute bottom-0 left-0 right-0 z-[5] leading-none pointer-events-none">
    <svg
      viewBox="0 0 1440 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block w-full"
    >
      <path
        d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,48 L0,48 Z"
        fill="#F5F0E8"
      />
    </svg>
  </div>

</section>


      {/* ───────── FOUNDER SECTION ───────── */}
<section className="relative bg-[#F5F0E8] py-24 px-6 md:px-20 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-[#D97757]/5 blur-3xl pointer-events-none" />

  <Reveal>
    <div className="relative max-w-6xl mx-auto bg-[#EFEAE3] rounded-[36px] p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

      {/* Inner Card */}
      <div className="relative overflow-hidden rounded-[28px] bg-[#D97757] px-8 py-12 md:px-14 md:py-16">

        {/* Decorative blobs */}
        <div className="absolute w-[260px] h-[260px] bg-white/10 rounded-full blur-3xl top-[-120px] right-[-60px]" />
        <div className="absolute w-[200px] h-[200px] bg-black/10 rounded-full blur-3xl bottom-[-100px] left-[-60px]" />

        {/* Content Grid */}
        <div className="relative z-10 grid md:grid-cols-[320px_1fr] items-center gap-10">

          {/* Founder Image Placeholder */}
          <Reveal delay={100}>
            {/* Founder Image */}
<div className="relative flex justify-center md:justify-start">

  {/* Star outline */}
  <svg
    viewBox="0 0 200 200"
    className="absolute left-0 top-10 w-40 opacity-20"
    fill="none"
  >
    <path
      d="M100 10 L122 74 L190 74 L136 116 L156 180 L100 140 L44 180 L64 116 L10 74 L78 74 Z"
      stroke="white"
      strokeWidth="2"
    />
  </svg>

  <div className="relative">

    {/* Glow */}
    <div className="absolute inset-0 bg-black/20 blur-2xl scale-90 rounded-full" />

    <img
      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
      alt="Founder"
      className="relative z-10 w-[260px] md:w-[300px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:scale-[1.02] transition duration-500"
    />

  </div>
</div>
          </Reveal>

          {/* Text */}
          <Reveal delay={200}>
            <div className="text-center md:text-left">

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.15em] mb-6">
                Founder
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.15] max-w-3xl">
                [Founder Name]
              </h2>

              <p className="text-white/80 text-lg mt-3 font-medium">
                Founder & Lead Strategist
              </p>

              <p className="text-white text-lg md:text-[1.4rem] leading-[1.7] mt-8 max-w-3xl font-medium">
                “After years of watching D2C brands burn budget on disconnected
                agencies, I built the team I wished existed — one that owns the
                full picture, not just the invoice.”
              </p>

              <p className="text-white/70 leading-[1.9] mt-8 max-w-3xl text-[1rem]">
                Replace the placeholder above with your actual founder story —
                a sentence or two on what you saw in the market, what frustrated
                you, and what made you start this. That specificity is what
                converts skeptical founders into clients.
              </p>

            </div>
          </Reveal>

        </div>

      </div>
    </div>
  </Reveal>
</section>

<BeliefsSection/>
<NotForSection/>
<NumbersSection/>

    </div>
  );
}