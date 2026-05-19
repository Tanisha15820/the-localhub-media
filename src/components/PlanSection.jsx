

// import { useEffect, useRef } from "react";
// import SectionHeader from "./SectionHeader";

// const AuditIcon = () => (
//   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M9 11l3 3L22 4" />
//     <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
//   </svg>
// );
// const BuildIcon = () => (
//   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
//   </svg>
// );
// const GrowIcon = () => (
//   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
//     <polyline points="16 7 22 7 22 13" />
//   </svg>
// );

// const steps = [
//   {
//     icon: <AuditIcon />,
//     tag: "Audit",
//     title: "We audit your entire digital ecosystem",
//     desc: "Brand, website, SEO, AEO, content, ads — we map exactly where you're losing ground and where the real opportunity is hiding.",
//     pills: ["Brand health", "Website review", "SEO & AEO gaps", "Content audit", "Paid ads analysis"],
//     colors: { tag: "bg-blue-50 text-blue-800", iconHover: "group-hover:bg-blue-50 group-hover:border-blue-400", pillHover: "group-hover:border-blue-300 group-hover:text-blue-800", line: "group-hover:bg-blue-200" },
//   },
//   {
//     icon: <BuildIcon />,
//     tag: "Build",
//     title: "We build the infrastructure for scale",
//     desc: "Performance-grade Shopify or WordPress builds, content that ranks on Google and AI engines, and ads engineered to convert — not just spend.",
//     pills: ["Shopify & WordPress", "Rank-ready content", "Conversion-led ads", "AI engine optimisation"],
//     colors: { tag: "bg-emerald-50 text-emerald-800", iconHover: "group-hover:bg-emerald-50 group-hover:border-emerald-400", pillHover: "group-hover:border-emerald-300 group-hover:text-emerald-800", line: "group-hover:bg-emerald-200" },
//   },
//   {
//     icon: <GrowIcon />,
//     tag: "Grow",
//     title: "We compound your growth month over month",
//     desc: "SEO, AEO, performance marketing, and brand — all working together, all measured, all improving. Growth that builds on itself.",
//     pills: ["Monthly reporting", "SEO compounding", "Performance marketing", "Brand momentum"],
//     colors: { tag: "bg-violet-50 text-violet-800", iconHover: "group-hover:bg-violet-50 group-hover:border-violet-400", pillHover: "group-hover:border-violet-300 group-hover:text-violet-800", line: "group-hover:bg-violet-200" },
//   },
// ];

// // Per-step hook — reveals & hides on scroll in/out
// function useStepReveal(ref, lineRef, index) {
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // animate in
//           setTimeout(() => {
//             el.style.opacity = "1";
//             el.style.transform = "translateY(0px) scale(1)";
//           }, index * 150);
//           if (lineRef?.current) {
//             setTimeout(() => {
//               lineRef.current.style.transform = "translateX(-50%) scaleY(1)";
//             }, 300 + index * 150);
//           }
//         } else {
//           // animate out (reset for repeat)
//           el.style.opacity = "0";
//           el.style.transform = "translateY(60px) scale(0.97)";
//           if (lineRef?.current) {
//             lineRef.current.style.transform = "translateX(-50%) scaleY(0)";
//           }
//         }
//       },
//       { threshold: 0.1 }
//     );

//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [ref, lineRef, index]);
// }

// function Step({ step, index, isLast }) {
//   const ref     = useRef(null);
//   const lineRef = useRef(null);

//   useStepReveal(ref, isLast ? null : lineRef, index);

//   return (
//     <div
//       ref={ref}
//       className="group grid"
//       style={{
//         gridTemplateColumns: "96px minmax(0,1fr)",
//         gap: "0 2.5rem",
//         opacity: 0,
//         transform: "translateY(60px) scale(0.97)",
//         transition: "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)",
//         willChange: "opacity, transform",
//       }}
//     >
//       {/* Icon column */}
//       <div className="flex flex-col items-center pt-1 relative">
//         <div className={`w-20 h-20 rounded-full border-2 border-[#E7D8CA] bg-[#FAF7F2] flex items-center justify-center relative z-10 transition-all duration-300 ${step.colors.iconHover} group-hover:scale-110 shadow-sm`}>
//           {step.icon}
//         </div>
//         {!isLast && (
//           <div
//             ref={lineRef}
//             className={`absolute w-px bg-[#E7D8CA] transition-colors duration-300 ${step.colors.line}`}
//             style={{
//               left: "50%",
//               transform: "translateX(-50%) scaleY(0)",
//               transformOrigin: "top",
//               top: "84px",
//               bottom: "-48px",
//               transition: "transform 0.5s ease, background-color 0.3s ease",
//             }}
//           />
//         )}
//       </div>

//       {/* Content */}
//       <div className="pb-16">
//         <span className={`inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-5 transition-transform duration-200 group-hover:translate-x-1 ${step.colors.tag}`}>
//           {step.tag}
//         </span>
//         <h3 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] leading-snug mb-4">{step.title}</h3>
//         <p className="text-[15px] text-[#6B6B6B] leading-relaxed mb-7 max-w-xl">{step.desc}</p>
//         <div className="flex flex-wrap gap-3">
//           {step.pills.map((pill) => (
//             <span key={pill} className={`text-xs text-[#6B6B6B] border border-[#E7D8CA] rounded-full px-4 py-2 bg-[#FAF7F2] transition-all duration-200 cursor-default hover:-translate-y-0.5 ${step.colors.pillHover}`}>
//               {pill}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function PlanSection() {
//   return (
//     <section className="py-24 px-6 bg-bgMain">
//       {/* <div className="max-w-3xl mx-auto"> */}
//       <div className="max-w-6xl mx-auto">

//         <div className="max-w-6xl mx-auto">
//         <SectionHeader
//           tag="The plan"
//           title="A complete growth system"
//           highlight="built in three moves."
//         />
//         </div>
        

//         {/* Steps — each animates in/out individually */}
//         <div className="relative">
//           {steps.map((step, i) => (
//             <Step key={step.tag} step={step} index={i} isLast={i === steps.length - 1} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }




import { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";

const AuditIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2096F3"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const BuildIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2096F3"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const GrowIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2096F3"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const steps = [
  {
    icon: <AuditIcon />,
    tag: "Audit",
    title: "We audit your entire digital ecosystem",
    desc: "Brand, website, SEO, AEO, content, ads — we map exactly where you're losing ground and where the real opportunity is hiding.",
    pills: [
      "Brand health",
      "Website review",
      "SEO & AEO gaps",
      "Content audit",
      "Paid ads analysis",
    ],
  },
  {
    icon: <BuildIcon />,
    tag: "Build",
    title: "We build the infrastructure for scale",
    desc: "Performance-grade Shopify or WordPress builds, content that ranks on Google and AI engines, and ads engineered to convert — not just spend.",
    pills: [
      "Shopify & WordPress",
      "Rank-ready content",
      "Conversion-led ads",
      "AI engine optimisation",
    ],
  },
  {
    icon: <GrowIcon />,
    tag: "Grow",
    title: "We compound your growth month over month",
    desc: "SEO, AEO, performance marketing, and brand — all working together, all measured, all improving. Growth that builds on itself.",
    pills: [
      "Monthly reporting",
      "SEO compounding",
      "Performance marketing",
      "Brand momentum",
    ],
  },
];

/* ── Per-step reveal hook ── */
function useStepReveal(ref, lineRef, index) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0px) scale(1)";
          }, index * 150);

          if (lineRef?.current) {
            setTimeout(() => {
              lineRef.current.style.transform =
                "translateX(-50%) scaleY(1)";
            }, 300 + index * 150);
          }
        } else {
          el.style.opacity = "0";
          el.style.transform = "translateY(60px) scale(0.97)";

          if (lineRef?.current) {
            lineRef.current.style.transform =
              "translateX(-50%) scaleY(0)";
          }
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [ref, lineRef, index]);
}

function Step({ step, index, isLast }) {
  const ref = useRef(null);
  const lineRef = useRef(null);

  useStepReveal(ref, isLast ? null : lineRef, index);

  return (
    <div
      ref={ref}
      className="group grid"
      style={{
        gridTemplateColumns: "96px minmax(0,1fr)",
        gap: "0 2.5rem",
        opacity: 0,
        transform: "translateY(60px) scale(0.97)",
        transition:
          "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)",
        willChange: "opacity, transform",
      }}
    >
      {/* Icon */}
      <div className="flex flex-col items-center pt-1 relative">
        <div
          className="
            w-20 h-20 rounded-full
            border border-[#cfe8fb]
            bg-[#f5fbff]
            flex items-center justify-center
            relative z-10
            transition-all duration-300
            group-hover:scale-110
            group-hover:bg-[#eaf6ff]
            group-hover:border-[#2096F3]
            shadow-sm
          "
        >
          {step.icon}
        </div>

        {!isLast && (
          <div
            ref={lineRef}
            className="absolute w-px bg-[#cfe8fb] transition-colors duration-300 group-hover:bg-[#2096F3]"
            style={{
              left: "50%",
              transform: "translateX(-50%) scaleY(0)",
              transformOrigin: "top",
              top: "84px",
              bottom: "-48px",
              transition:
                "transform 0.5s ease, background-color 0.3s ease",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-16">
        <span
          className="
            inline-flex items-center gap-2
            text-xs font-medium tracking-widest uppercase
            px-3 py-1 rounded-full mb-5
            transition-transform duration-200
            group-hover:translate-x-1
            bg-[#eaf6ff]
            text-[#2096F3]
          "
        >
          {step.tag}
        </span>

        <div
          className="
            bg-[#f5fbff]
            border border-[#dbeefe]
            rounded-[22px]
            p-7
            transition-all duration-300
            group-hover:border-[#2096F3]/30
            group-hover:shadow-[0_18px_45px_rgba(32,150,243,0.10)]
          "
        >
          <h3 className="text-[24px] md:text-[28px] font-semibold text-[#110429] leading-snug mb-4">
            {step.title}
          </h3>

          <p className="text-[15px] text-[rgba(17,4,41,0.68)] leading-relaxed mb-7 max-w-xl">
            {step.desc}
          </p>

          <div className="flex flex-wrap gap-3">
            {step.pills.map((pill) => (
              <span
                key={pill}
                className="
                  text-xs
                  text-[rgba(17,4,41,0.72)]
                  border border-[#cfe8fb]
                  rounded-full
                  px-4 py-2
                  bg-white
                  transition-all duration-200
                  cursor-default
                  hover:-translate-y-0.5
                  hover:border-[#2096F3]
                  hover:text-[#2096F3]
                "
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlanSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="The plan"
            title="A complete growth system"
            highlight="built in three moves."
          />
        </div>

        {/* Steps */}
        <div className="relative mt-10">
          {steps.map((step, i) => (
            <Step
              key={step.tag}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}