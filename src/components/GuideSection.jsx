import {
  BarChart3,
  Users,
  TrendingUp,
  ShieldCheck,
  Rocket,
  ShoppingCart,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const guideData = [
  {
    icon: BarChart3,
    title: "Support Brand Value",
    desc: "Build authority and stand out in a competitive market with strong positioning.",
  },
  {
    icon: Users,
    title: "Boost User Relationships",
    desc: "Understand your audience deeply and create meaningful connections.",
  },
  {
    icon: TrendingUp,
    title: "Drive More Traffic",
    desc: "Scale your reach across multiple channels with performance strategies.",
  },
  {
    icon: ShieldCheck,
    title: "Stay On Top",
    desc: "Use data-driven insights to stay ahead of competitors consistently.",
  },
  {
    icon: Rocket,
    title: "Increase Growth",
    desc: "Accelerate your brand with high-impact campaigns and automation.",
  },
  {
    icon: ShoppingCart,
    title: "Improve Conversions",
    desc: "Turn visitors into customers with optimized funnels and UX.",
  },
];

export default function GuideSection() {
  return (
    <section className="bg-bgMain py-20 px-6 font-main">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
       <SectionHeader
  tag="The Guide"
  title="We've helped D2C brands go from"
  highlight="invisible to inevitable."
  subtitle=""
/>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {guideData.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group bg-card border border-black/5 rounded-2xl p-8 text-center 
                transition-all duration-500 ease-out 
                hover:bg-primary hover:-translate-y-3 hover:shadow-2xl"
              >

                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="relative p-4 rounded-xl bg-primary/10 group-hover:bg-white/10 transition-all duration-500">
                    
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>

                    <Icon
                      size={30}
                      className="relative z-10 text-primary group-hover:text-white 
                      transition-all duration-500 
                      group-hover:scale-110 group-hover:rotate-6"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-textPrimary 
                group-hover:text-white mb-3 transition-all duration-300 
                group-hover:-translate-y-1">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-textSecondary 
                group-hover:text-white/80 transition-all duration-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

        {/* Testimonial */}
        <div className="mt-24 max-w-3xl mx-auto text-center">

          <p className="text-xl md:text-2xl font-medium text-textPrimary leading-relaxed">
            “They didn't just run our ads. They rebuilt how our entire digital presence worked —
            <span className="text-primary font-semibold">
              {" "}and revenue doubled in 4 months.
            </span>”
          </p>

          <div className="w-12 h-[2px] bg-primary mx-auto my-6 opacity-60" />

          <p className="text-sm text-textSecondary">
            <span className="font-semibold text-textPrimary">Rahul S.</span> · Founder, D2C Fashion Brand
          </p>

        </div>

      </div>
    </section>
  );
}