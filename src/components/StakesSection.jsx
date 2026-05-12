
// import stakesImg from "../assets/stakes.png";
// import SectionHeader from "./SectionHeader";
// import Reveal from "./Reveal";

// export default function StakesSection() {
//   return (
//     <section className="bg-bgMain py-20 md:py-24 px-6 md:px-16 font-main">

//       <SectionHeader
//         tag="Stakes"
//         title="This isn't just growth."
//         highlight="It's survival."
//         subtitle="The brands building systems today are the ones dominating tomorrow."
//       />

//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center -mt-4">

//         <div>
//           <Reveal delay={0}>
//             <p className="text-textSecondary text-base md:text-lg leading-relaxed mb-5">
//               Every month without a system is a month your competitor compounds.
//             </p>
//           </Reveal>

//           <Reveal delay={100}>
//             <p className="text-textSecondary text-base md:text-lg leading-relaxed mb-5">
//               D2C is not slowing down — it's consolidating. The brands investing in{" "}
//               <span className="text-textPrimary font-semibold">full-stack digital infrastructure</span>{" "}
//               today will own the category in 18 months.
//             </p>
//           </Reveal>

//           <Reveal delay={200}>
//             <p className="text-textSecondary text-base md:text-lg leading-relaxed mb-8">
//               The ones patching tactics will{" "}
//               <span className="text-primary font-semibold">spend more to grow less.</span>
//             </p>
//           </Reveal>

//           <Reveal delay={300}>
//             <p className="text-textPrimary text-lg md:text-xl font-semibold leading-snug mb-10">
//               The question isn't whether you can afford to build this. <br />
//               <span className="text-primary">It's whether you can afford not to.</span>
//             </p>
//           </Reveal>

//           <Reveal delay={400}>
//             <button className="bg-primary text-white px-7 py-3.5 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300">
//               Book a Strategy Call
//             </button>
//           </Reveal>
//         </div>

//         <Reveal delay={150}>
//           <div className="relative flex justify-center md:justify-end -mt-12 md:-mt-20">
//             <div className="absolute w-100 h-110 bg-primary/10 rounded-full blur-3xl" />
//             <img
//               src={stakesImg}
//               alt="Growth visual"
//               className="relative z-10 w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain hover:scale-105 transition duration-500"
//             />
//           </div>
//         </Reveal>

//       </div>
//     </section>
//   );
// }
import { useEffect, useRef, useState } from "react";
import stakesImg from "../assets/stakes.png";
import SectionHeader from "./SectionHeader";

function SlideInRight({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          // 🔥 delay BEFORE movement starts
          setTimeout(() => {
            setAnimate(true);
          }, 600); // pause effect

          obs.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: animate
          ? "translateX(0px)"
          : "translateX(180px)",

        transition: animate
          ? "transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)"
          : "opacity 0.6s ease",

        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export default function StakesSection() {
  return (
    <section
      className="bg-bgMain py-20 md:py-24 px-6 md:px-16 font-main"
      style={{ overflow: "hidden" }}
    >

      {/* Header stays normal (already animated inside SectionHeader) */}
      <SectionHeader
        tag="Stakes"
        title="This isn't just growth."
        highlight="It's survival."
        subtitle="The brands building systems today are the ones dominating tomorrow."
      />

      {/* 🔥 ONE UNIFIED ANIMATION WRAPPER */}
      <SlideInRight>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center -mt-4">

          {/* LEFT CONTENT (NO INDIVIDUAL ANIMATION) */}
          <div>

            <p className="text-textSecondary text-base md:text-lg leading-relaxed mb-5">
              Every month without a system is a month your competitor compounds.
            </p>

            <p className="text-textSecondary text-base md:text-lg leading-relaxed mb-5">
              D2C is not slowing down — it's consolidating. The brands investing in{" "}
              <span className="text-textPrimary font-semibold">
                full-stack digital infrastructure
              </span>{" "}
              today will own the category in 18 months.
            </p>

            <p className="text-textSecondary text-base md:text-lg leading-relaxed mb-8">
              The ones patching tactics will{" "}
              <span className="text-primary font-semibold">
                spend more to grow less.
              </span>
            </p>

            <p className="text-textPrimary text-lg md:text-xl font-semibold leading-snug mb-10">
              The question isn't whether you can afford to build this. <br />
              <span className="text-primary">
                It's whether you can afford not to.
              </span>
            </p>

          <a
  href=" https://calendly.com/connect-kushgupta/screening-meeting"
  target="_blank"
  rel="noopener noreferrer"
  className="hdr-cta-btn bg-primary text-white px-7 py-3.5 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 inline-block"
>
  Book a Strategy Call
</a>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end -mt-12 md:-mt-20">

            {/* Glow */}
            <div
              style={{
                position: "absolute",
                width: 340,
                height: 340,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(217,119,87,0.18) 0%, transparent 70%)",
                filter: "blur(40px)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            />

            {/* Ring */}
            <div
              style={{
                position: "absolute",
                width: 320,
                height: 320,
                borderRadius: "50%",
                border: "1.5px dashed rgba(217,119,87,0.25)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                animation: "spin-slow 18s linear infinite",
                pointerEvents: "none",
              }}
            />

            <img
              src={stakesImg}
              alt="Growth visual"
              className="relative z-10 w-full max-w-lg md:max-w-xl lg:max-w-2xl object-contain"
              style={{
                filter: "drop-shadow(0 24px 48px rgba(217,119,87,0.18))",
                animation: "float 5s ease-in-out infinite",
              }}
            />
          </div>

        </div>
      </SlideInRight>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

    </section>
  );
}