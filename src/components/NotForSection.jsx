import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import {
  AlertTriangle,
  ShieldAlert,
  XCircle,
} from "lucide-react";

const items = [
  {
    icon: <AlertTriangle size={20} />,
    title: "Brands that want cheap and fast.",
    text: "We're not the lowest quote you'll get. We're the last agency you'll need.",
  },
  {
    icon: <ShieldAlert size={20} />,
    title: "Founders who want to approve every post.",
    text: "We need room to move. Micromanagement kills compounding.",
  },
  {
    icon: <XCircle size={20} />,
    title: "Businesses without a product-market fit.",
    text: "We scale what works. We can't manufacture it.",
  },
];

export default function NotForSection() {
  return (
    <section className="relative py-24 px-6 md:px-20 bg-[#F5F0E8] overflow-hidden">

      {/* background blur */}
      <div className="absolute top-[-120px] right-[-100px] w-[300px] h-[300px] bg-[#D97757]/10 blur-3xl rounded-full" />

      {/* Header */}
      <SectionHeader
        tag="What we're not"
        title="Who this is not"
        highlight="for."
        subtitle="We work with a small number of brands at a time. That's intentional — and it means we have to be honest about fit."
      />

      {/* Layout */}
      <div className="max-w-7xl mx-auto mt-16 grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-7">

          {items.map((item, i) => (
            <Reveal key={i} delay={i * 120}>

              <div
                className="group flex gap-4 translate-x-[100px] opacity-0 animate-[slideLeft_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]"
                style={{
                  animationDelay: `${i * 0.15}s`,
                }}
              >

                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-2xl bg-[#D97757]/12 text-[#D97757] flex items-center justify-center group-hover:bg-[#D97757] group-hover:text-white transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[1.15rem] md:text-[1.25rem] font-bold text-[#1A1A1A] leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[#6B6B6B] leading-[1.8] text-[0.96rem] max-w-xl">
                    {item.text}
                  </p>
                </div>

              </div>

            </Reveal>
          ))}

          {/* Bottom text */}
          <Reveal delay={400}>
            <div className="pt-5 border-t border-black/10">
              <p className="text-[#1A1A1A] text-[1rem] leading-[1.8] font-medium max-w-2xl">
                If you're past that — if you have a product people buy and
                you're ready to build a brand around it — we should talk.
              </p>
            </div>
          </Reveal>

        </div>

        {/* RIGHT IMAGE */}
        <Reveal delay={200}>
          <div
            className="relative translate-x-[120px] opacity-0 animate-[slideLeft_1s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          >

            {/* glow */}
            <div className="absolute -inset-4 bg-[#D97757]/10 blur-3xl rounded-[32px]" />

            <div className="relative overflow-hidden rounded-[28px] shadow-xl border border-black/5 bg-white p-3">

              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop"
                alt="Agency strategy"
                className="w-full h-[380px] object-cover rounded-[22px]"
              />

              {/* floating badge */}
              <div className="absolute bottom-7 left-7 bg-white/90 backdrop-blur px-4 py-3 rounded-xl shadow-lg border border-black/5">
                <p className="text-[#1A1A1A] font-bold text-base">
                  Selective partnerships.
                </p>
                <p className="text-sm text-[#6B6B6B] mt-1">
                  Built for brands ready to scale.
                </p>
              </div>

            </div>

          </div>
        </Reveal>

      </div>

      {/* animations */}
      <style jsx>{`
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(120px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

    </section>
  );
}