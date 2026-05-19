

// import {
//   BarChart3,
//   Users,
//   TrendingUp,
//   ShieldCheck,
//   Rocket,
//   ShoppingCart,
// } from "lucide-react";
// import SectionHeader from "./SectionHeader";
// import Reveal from "./Reveal";

// const guideData = [
//   {
//     icon: BarChart3,
//     title: "Support Brand Value",
//     desc: "Build authority and stand out in a competitive market with strong positioning.",
//   },
//   {
//     icon: Users,
//     title: "Boost User Relationships",
//     desc: "Understand your audience deeply and create meaningful connections.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Drive More Traffic",
//     desc: "Scale your reach across multiple channels with performance strategies.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Stay On Top",
//     desc: "Use data-driven insights to stay ahead of competitors consistently.",
//   },
//   {
//     icon: Rocket,
//     title: "Increase Growth",
//     desc: "Accelerate your brand with high-impact campaigns and automation.",
//   },
//   {
//     icon: ShoppingCart,
//     title: "Improve Conversions",
//     desc: "Turn visitors into customers with optimized funnels and UX.",
//   },
// ];

// export default function GuideSection() {
//   return (
//     <section className="relative bg-bgMain py-20 px-6 font-main overflow-hidden">

//       {/*  ambient glow background */}
//       <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-400/10 blur-[120px] animate-pulse" />
//       <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-400/10 blur-[120px] animate-pulse" />

//       <div className="max-w-6xl mx-auto relative z-10">

//         {/* HEADER */}
//         {/* <SectionHeader
//           tag="The Guide"
//           title="We've helped D2C brands go from"
//           highlight="invisible to inevitable."
//           subtitle=""
//         /> */}
//         <div className="max-w-6xl mx-auto">
//   <SectionHeader
//     tag="The Guide"
//     title="We've helped D2C brands go from"
//     highlight="invisible"
//     endText="to inevitable."
//     subtitle=""
//   />
// </div>

//         {/* CARDS GRID */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

//           {guideData.map((item, i) => {
//             const Icon = item.icon;

//             return (
//               <Reveal
//                 key={i}
//                 delay={(i % 3) * 120 + Math.floor(i / 3) * 60}
//               >
//                 <div
//                   className="group relative bg-card border border-black/5 rounded-2xl p-8 text-center
//                   transition-all duration-500 ease-out
//                   hover:bg-primary hover:-translate-y-3 hover:shadow-2xl
//                   overflow-hidden animate-float"
//                 >

//                   {/*  shine effect */}
//                   <div className="absolute inset-0 before:absolute before:content-[''] before:top-0 before:left-[-100%] before:w-[60%] before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-700 group-hover:before:left-[120%]" />

//                   {/* ICON */}
//                   <div className="flex justify-center mb-5">
//                     <div className="relative p-4 rounded-xl bg-primary/10 group-hover:bg-white/10 transition-all duration-500">

//                       <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 blur-md transition duration-500" />

//                       <Icon
//                         size={30}
//                         className="relative z-10 text-primary group-hover:text-white
//                         transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 animate-iconFloat"
//                       />
//                     </div>
//                   </div>

//                   {/* TITLE */}
//                   <h3
//                     className="text-lg font-semibold text-textPrimary
//                     group-hover:text-white mb-3 transition-all duration-300 group-hover:-translate-y-1"
//                   >
//                     {item.title}
//                   </h3>

//                   {/* DESC */}
//                   <p
//                     className="text-sm text-textSecondary
//                     group-hover:text-white/80 transition-all duration-300 leading-relaxed"
//                   >
//                     {item.desc}
//                   </p>
//                 </div>
//               </Reveal>
//             );
//           })}

//         </div>

//         {/* TESTIMONIAL */}
//         <Reveal delay={100}>
//           <div className="mt-24 max-w-3xl mx-auto text-center">
//             <p className="text-xl md:text-2xl font-medium text-textPrimary leading-relaxed">
//               "They didn't just run our ads. They rebuilt how our entire digital presence worked —
//               <span className="text-primary font-semibold"> and revenue doubled in 4 months.</span>"
//             </p>

//             <div className="w-12 h-[2px] bg-primary mx-auto my-6 opacity-60" />

//             <p className="text-sm text-textSecondary">
//               <span className="font-semibold text-textPrimary">Rahul S.</span> · Founder, D2C Fashion Brand
//             </p>
//           </div>
//         </Reveal>

//       </div>

//       {/* CSS ANIMATIONS */}
//       <style>{`
//         @keyframes float {
//           0%,100% { transform: translateY(0px); }
//           50% { transform: translateY(-6px); }
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }

//         @keyframes iconFloat {
//           0%,100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-4px) rotate(3deg); }
//         }

//         .animate-iconFloat {
//           animation: iconFloat 3s ease-in-out infinite;
//         }
//       `}</style>

//     </section>
//   );
// }



import {
  BarChart3,
  Users,
  TrendingUp,
  ShieldCheck,
  Rocket,
  ShoppingCart,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

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
    <section className="relative guide-section py-20 px-6 overflow-hidden">

      {/* ambient glow background */}
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="The Guide"
            title="We've helped D2C brands go from"
            highlight="invisible"
            endText="to inevitable."
            subtitle=""
          />
        </div>

        {/* CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {guideData.map((item, i) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={i}
                delay={(i % 3) * 120 + Math.floor(i / 3) * 60}
              >
                <div className="card group">

                  {/* shine */}
                  <div className="shine" />

                  {/* ICON */}
                  <div className="icon-wrapper">
                    <div className="icon-bg" />

                    <Icon size={30} className="icon" />
                  </div>

                  {/* TITLE */}
                  <h3 className="title">{item.title}</h3>

                  {/* DESC */}
                  <p className="desc">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* TESTIMONIAL */}
        <Reveal delay={100}>
          <div className="mt-24 max-w-3xl mx-auto text-center">
            <p className="testimonial-text">
              "They didn't just run our ads. They rebuilt how our entire digital presence worked —
              <span> and revenue doubled in 4 months.</span>"
            </p>

            <div className="divider" />

            <p className="testimonial-meta">
              <span>Rahul S.</span> · Founder, D2C Fashion Brand
            </p>
          </div>
        </Reveal>

      </div>

      <style>{`
        :root {
          --primary: #ffffff;
          --secondary: #2096F3;
          --accent: #110429;
        }

        .guide-section {
          background: var(--primary);
        }

        /* glow */
        .glow {
          position: absolute;
          width: 600px;
          height: 600px;
          filter: blur(120px);
          opacity: 0.12;
          animation: pulse 6s infinite ease-in-out;
        }

        .glow-left {
          top: -200px;
          left: -200px;
          background: var(--secondary);
        }

        .glow-right {
          bottom: -200px;
          right: -200px;
          background: var(--accent);
        }

        @keyframes pulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        /* CARD */
        .card {
          position: relative;
          background: #fff;
          border: 1px solid rgba(17, 4, 41, 0.08);
          border-radius: 18px;
          padding: 32px;
          text-align: center;
          transition: all 0.5s ease;
          overflow: hidden;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(17, 4, 41, 0.12);
          background: var(--secondary);
        }

        /* shine */
        .shine {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .shine::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255,255,255,0.25),
            transparent
          );
          transition: 0.7s;
        }

        .card:hover .shine::before {
          left: 140%;
        }

        /* ICON */
        .icon-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 18px;
          position: relative;
        }

        .icon-bg {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(32, 150, 243, 0.12);
          transition: 0.4s;
        }

        .card:hover .icon-bg {
          background: rgba(255,255,255,0.15);
          transform: scale(1.2);
        }

        .icon {
          position: relative;
          z-index: 10;
          color: var(--secondary);
          transition: all 0.4s ease;
        }

        .card:hover .icon {
          color: #fff;
          transform: rotate(8deg) scale(1.1);
        }

        /* TEXT */
        .title {
          font-size: 18px;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 10px;
          transition: 0.3s;
        }

        .card:hover .title {
          color: #fff;
        }

        .desc {
          font-size: 13.5px;
          color: rgba(17, 4, 41, 0.65);
          line-height: 1.6;
          transition: 0.3s;
        }

        .card:hover .desc {
          color: rgba(255,255,255,0.85);
        }

        /* TESTIMONIAL */
        .testimonial-text {
          font-size: 20px;
          font-weight: 500;
          color: var(--accent);
          line-height: 1.6;
        }

        .testimonial-text span {
          color: var(--secondary);
          font-weight: 700;
        }

        .divider {
          width: 48px;
          height: 2px;
          background: var(--secondary);
          margin: 24px auto;
          opacity: 0.7;
        }

        .testimonial-meta {
          font-size: 13px;
          color: rgba(17, 4, 41, 0.6);
        }

        .testimonial-meta span {
          font-weight: 700;
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}