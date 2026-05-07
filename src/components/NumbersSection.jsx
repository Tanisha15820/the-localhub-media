import { useEffect, useRef, useState } from "react";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";

import {
  TrendingUp,
  BadgeIndianRupee,
  BarChart3,
  ShieldCheck,
  Rocket,
  Clock3,
} from "lucide-react";

/* ───────── Count Up Hook ───────── */
function useCountUp(target, duration = 1800, visible = false) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;

    started.current = true;

    const numeric = parseFloat(
      String(target).replace(/[^0-9.]/g, "")
    );

    const start = performance.now();

    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      setCount((eased * numeric).toFixed(numeric % 1 ? 1 : 0));

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [target, duration, visible]);

  return count;
}

/* ───────── Stats Data ───────── */
const stats = [
  {
    icon: <BadgeIndianRupee size={24} />,
    value: "40",
    prefix: "₹",
    suffix: "Cr+",
    label: "revenue driven for clients",
  },
  {
    icon: <Rocket size={24} />,
    value: "120",
    suffix: "+",
    label: "D2C brands scaled",
  },
  {
    icon: <BarChart3 size={24} />,
    value: "3.8",
    suffix: "×",
    label: "average ROI delivered",
  },
  {
    icon: <ShieldCheck size={24} />,
    value: "98",
    suffix: "%",
    label: "client retention rate",
  },
  {
    icon: <TrendingUp size={24} />,
    value: "212",
    prefix: "+",
    suffix: "%",
    label: "avg growth delivered",
  },
  {
    icon: <Clock3 size={24} />,
    value: "4",
    suffix: "+ yrs",
    label: "in D2C digital growth",
  },
];

/* ───────── Stat Card ───────── */
function StatCard({ item, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const count = useCountUp(item.value, 1800, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  return (
    <Reveal delay={delay}>
      <div
        ref={ref}
        className="group relative bg-[#EFE7DB] border border-black/5 rounded-[24px] p-6 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 min-h-[185px]"
      >

        {/* left line */}
        <div className="absolute left-0 top-0 h-full w-[4px] bg-[#D97757]" />

        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-[#D97757]/10 text-[#D97757] flex items-center justify-center group-hover:bg-[#D97757] group-hover:text-white transition duration-300">
          {item.icon}
        </div>

        {/* Content */}
        <div className="mt-8">

          <h3 className="text-3xl font-extrabold tracking-[-0.04em] text-[#1A1A1A]">
            {item.prefix}
            {count}
            {item.suffix}
          </h3>

          <p className="mt-3 text-[#6B6B6B] leading-relaxed text-[0.95rem] font-medium">
            {item.label}
          </p>

        </div>
      </div>
    </Reveal>
  );
}

/* ───────── Main Component ───────── */
export default function NumbersSection() {
  return (
    <section className="relative py-24 px-6 md:px-20 bg-[#F5F0E8] overflow-hidden">

      {/* Blur */}
      <div className="absolute top-[-120px] left-[-100px] w-[300px] h-[300px] bg-[#D97757]/10 blur-3xl rounded-full" />

      {/* Header */}
      <SectionHeader
        tag="The numbers"
        title="Four years. 120 brands."
        highlight="One standard."
        subtitle="Focused on one thing only — measurable business growth."
      />

      {/* Grid */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {stats.map((item, i) => (
          <StatCard
            key={i}
            item={item}
            delay={i * 100}
          />
        ))}

      </div>

    </section>
  );
}