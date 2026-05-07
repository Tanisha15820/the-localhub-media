// import Reveal from "../components/Reveal";
// import SectionHeader from "../components/SectionHeader";

// import {
//   Layers3,
//   SearchCheck,
//   BarChart3,
// } from "lucide-react";

// const beliefs = [
//   {
//     title: "Systems over sprints",
//     text: "Tactics get you a good month. Systems get you a defensible brand. We're not optimising campaigns — we're building infrastructure that compounds.",
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
//     icon: <Layers3 size={34} strokeWidth={2.1} />,
//   },

//   {
//     title: "Clarity before execution",
//     text: "We audit before we act. You'll always know exactly where you're losing before we touch anything. No guesswork. No billing for exploration.",
//     image:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
//     icon: <SearchCheck size={34} strokeWidth={2.1} />,
//   },

//   {
//     title: "Revenue is the only metric that matters",
//     text: "Impressions, followers, traffic — none of it means anything without revenue. Every decision we make is filtered through one question: does this move the number?",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
//     icon: <BarChart3 size={34} strokeWidth={2.1} />,
//   },
// ];

// export default function BeliefsSection() {
//   return (
//     <section className="relative py-28 px-6 md:px-20 bg-[#F5F0E8] overflow-hidden">

//       {/* Background blur */}
//       <div className="absolute top-[-120px] right-[-100px] w-[320px] h-[320px] bg-[#D97757]/10 blur-3xl rounded-full" />

//       <div className="absolute bottom-[-100px] left-[-80px] w-[260px] h-[260px] bg-[#D97757]/10 blur-3xl rounded-full" />

//       {/* Header */}
//       <SectionHeader
//         tag="What we believe"
//         title="Three things we'll never"
//         highlight="compromise on."
//         subtitle="The principles behind every strategy, campaign, and decision we make."
//       />

//       {/* Cards */}
//       <div className="grid md:grid-cols-3 gap-7 max-w-7xl mx-auto mt-20 items-stretch">

//         {beliefs.map((item, i) => (
//           <Reveal key={i} delay={i * 120}>

//             <div className="group bg-white border border-black/5 rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-500 h-full flex flex-col">

//               {/* Image */}
//               <div className="relative overflow-hidden h-[240px]">

//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
//                 />

//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

//                 {/* Icon */}
//                 <div className="absolute top-5 left-5 w-20 h-20 rounded-3xl bg-white/90 backdrop-blur flex items-center justify-center text-[#D97757] shadow-md group-hover:bg-[#D97757] group-hover:text-white transition duration-300">

//                   {item.icon}

//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-8 flex flex-col flex-1">

//                 <h3 className="text-2xl font-bold text-[#1A1A1A] leading-snug">
//                   {item.title}
//                 </h3>

//                 <p className="mt-5 text-[#6B6B6B] leading-[1.9] text-[0.98rem] flex-1">
//                   {item.text}
//                 </p>

//               </div>
//             </div>

//           </Reveal>
//         ))}

//       </div>
//     </section>
//   );
// }

import { useEffect, useRef, useState } from "react";
import SectionHeader from "../components/SectionHeader";

import {
  Layers3,
  SearchCheck,
  BarChart3,
} from "lucide-react";

const beliefs = [
  {
    title: "Systems over sprints",
    text: "Tactics get you a good month. Systems get you a defensible brand. We're not optimising campaigns — we're building infrastructure that compounds.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    icon: <Layers3 size={34} strokeWidth={2.1} />,
  },

  {
    title: "Clarity before execution",
    text: "We audit before we act. You'll always know exactly where you're losing before we touch anything. No guesswork. No billing for exploration.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    icon: <SearchCheck size={34} strokeWidth={2.1} />,
  },

  {
    title: "Revenue is the only metric that matters",
    text: "Impressions, followers, traffic — none of it means anything without revenue. Every decision we make is filtered through one question: does this move the number?",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    icon: <BarChart3 size={34} strokeWidth={2.1} />,
  },
];

export default function BeliefsSection() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false);

          setTimeout(() => {
            setAnimate(true);
          }, 50);
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 md:px-20 bg-[#F5F0E8] overflow-hidden"
    >

      {/* ───────── Custom Animation ───────── */}
      <style>{`
        @keyframes spreadLeft {
          0% {
            opacity: 0;
            transform:
              translateX(180px)
              translateY(40px)
              scale(0.2)
              rotate(12deg);
            filter: blur(12px);
          }

          100% {
            opacity: 1;
            transform:
              translateX(0)
              translateY(0)
              scale(1)
              rotate(0deg);
            filter: blur(0);
          }
        }

        @keyframes spreadCenter {
          0% {
            opacity: 0;
            transform:
              translateY(80px)
              scale(0.2);
            filter: blur(12px);
          }

          100% {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
            filter: blur(0);
          }
        }

        @keyframes spreadRight {
          0% {
            opacity: 0;
            transform:
              translateX(-180px)
              translateY(40px)
              scale(0.2)
              rotate(-12deg);
            filter: blur(12px);
          }

          100% {
            opacity: 1;
            transform:
              translateX(0)
              translateY(0)
              scale(1)
              rotate(0deg);
            filter: blur(0);
          }
        }

        .pre-animation {
          opacity: 0;
        }

        .spread-left.animate {
          animation: spreadLeft 1s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        .spread-center.animate {
          animation: spreadCenter 1s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.15s;
        }

        .spread-right.animate {
          animation: spreadRight 1s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.3s;
        }
      `}</style>

      {/* Background blur */}
      <div className="absolute top-[-120px] right-[-100px] w-[320px] h-[320px] bg-[#D97757]/10 blur-3xl rounded-full" />

      <div className="absolute bottom-[-100px] left-[-80px] w-[260px] h-[260px] bg-[#D97757]/10 blur-3xl rounded-full" />

      {/* Header */}
      <SectionHeader
        tag="What we believe"
        title="Three things we'll never"
        highlight="compromise on."
        subtitle="The principles behind every strategy, campaign, and decision we make."
      />

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-7 max-w-7xl mx-auto mt-20 items-stretch">

        {beliefs.map((item, i) => (

          <div
            key={i}
            className={`
              group
              bg-white
              border border-black/5
              rounded-[28px]
              overflow-hidden
              shadow-sm
              hover:shadow-2xl
              hover:-translate-y-2
              transition
              duration-500
              h-full
              flex
              flex-col
              pre-animation
              ${
                i === 0
                  ? "spread-left"
                  : i === 1
                  ? "spread-center"
                  : "spread-right"
              }
              ${animate ? "animate" : ""}
            `}
          >

            {/* Image */}
            <div className="relative overflow-hidden h-[240px]">

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

              {/* Icon */}
              <div className="absolute top-5 left-5 w-20 h-20 rounded-3xl bg-white/90 backdrop-blur flex items-center justify-center text-[#D97757] shadow-md group-hover:bg-[#D97757] group-hover:text-white transition duration-300">

                {item.icon}

              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">

              <h3 className="text-2xl font-bold text-[#1A1A1A] leading-snug">
                {item.title}
              </h3>

              <p className="mt-5 text-[#6B6B6B] leading-[1.9] text-[0.98rem] flex-1">
                {item.text}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}