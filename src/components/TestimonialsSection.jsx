

// import { useState, useEffect, useRef } from "react";
// import SectionHeader from "./SectionHeader";

// const TESTIMONIALS = [
//   {
//     avatar: "../assets/priya.png",
//     initials: "PS",
//     name: "Priya S.",
//     role: "Founder, Skincare Brand",
//     company: "Skincare Brand",
//     stars: 5,
//     quote:
//       "Within 90 days, our Shopify store conversion rate went from 1.2% to 3.8%. The team understood D2C deeply and delivered results we didn't think were possible this fast.",
//   },
//   {
//     avatar: "../assets/arjun.png",
//     initials: "AK",
//     name: "Arjun K.",
//     role: "Co-founder, Fitness D2C",
//     company: "Fitness D2C",
//     stars: 5,
//     quote:
//       "Finally an agency that thinks like a business partner, not a vendor. Our SEO traffic alone pays for everything. The ROI has been extraordinary.",
//   },
//   {
//     avatar: "../assets/meera.png",
//     initials: "MR",
//     name: "Meera R.",
//     role: "CMO, Home Decor Brand",
//     company: "Home Decor Brand",
//     stars: 5,
//     quote:
//       "AEO was something we'd never heard of. Six months later, our brand appears in AI search results constantly. This team is ahead of the curve.",
//   },
// ];

// /* 🔥 DRAMATIC REVEAL (snap + tilt + zoom) */
// function DramaticReveal({ children, delay = 0 }) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           obs.unobserve(el);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible
//           ? "scale(1) rotate(0deg)"
//           : "scale(0.85) rotate(-6deg)",

//         transition: `
//           opacity 0.55s ease ${delay}ms,
//           transform 0.65s cubic-bezier(0.2, 1.4, 0.3, 1) ${delay}ms
//         `,
//         willChange: "opacity, transform",
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// export default function TestimonialsSection() {
//   const [activeCard, setActiveCard] = useState(null);
//   const [expanded, setExpanded] = useState({});

//   const toggleExpand = (i, e) => {
//     e.stopPropagation();
//     setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

//         .tc-wrap {
//           font-family: 'Poppins', sans-serif;
//           background: #F5F0E8;
//           padding: 88px 40px;
//         }

//         .tc-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 24px;
//           max-width: 1040px;
//           margin: 0 auto;
//         }

//         @media (max-width: 900px) {
//           .tc-grid { grid-template-columns: 1fr; }
//         }

//        .tc-card {
//   background: #fff;
//   border-radius: 16px;
//   border: 1px solid rgba(0,0,0,0.07);
//   overflow: hidden;
//   cursor: pointer;

//   /* ✅ FIXED HEIGHT STRUCTURE */
//   height: 100%;
//   display: flex;
//   flex-direction: column;

//   transition: transform 0.25s ease, box-shadow 0.25s ease;
// }

//         .tc-card:hover {
//           transform: translateY(-10px) scale(1.03);
//           box-shadow: 0 22px 60px rgba(217,119,87,0.18);
//         }

//         .tc-header {
//           background: #F5F0E8;
//           padding: 20px 22px;
//           display: flex;
//           gap: 14px;
//           border-bottom: 1px solid rgba(0,0,0,0.07);
//         }

//         .tc-avatar {
//           width: 54px;
//           height: 54px;
//           border-radius: 50%;
//           border: 2px solid #D97757;
//           overflow: hidden;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-weight: 700;
//           color: #D97757;
//         }

//         .tc-card:hover .tc-avatar {
//           background: #D97757;
//           color: #fff;
//         }

//         .tc-name {
//           font-weight: 700;
//           font-size: 0.95rem;
//           text-transform: uppercase;
//         }

//         .tc-role {
//           font-size: 0.78rem;
//           color: #D97757;
//         }

//         .tc-body {
//           padding: 22px;
//         }

//         .tc-stars {
//           color: #f5a623;
//           margin-bottom: 12px;
//         }

//         .tc-quote {
//           font-size: 0.85rem;
//           line-height: 1.8;
//           font-style: italic;
//           color: #444;
//         }

//         .tc-footer {
//           padding: 16px 22px;
//           display: flex;
//           justify-content: space-between;
//           border-top: 1px solid rgba(0,0,0,0.07);
//         }

//         .tc-company {
//           color: #D97757;
//           font-weight: 600;
//           font-size: 0.78rem;
//         }

//         .tc-read-more {
//           background: none;
//           border: none;
//           font-size: 0.72rem;
//           cursor: pointer;
//           text-decoration: underline;
//         }
//       `}</style>

//       <section className="tc-wrap">

//         {/* Header stays normal */}
//         <SectionHeader
//           tag="Client Results"
//           title="What our clients"
//           highlight="actually say."
//           subtitle=""
//         />

//         {/* DRAMATIC CARDS */}
//         <div className="tc-grid">
//           {TESTIMONIALS.map((t, i) => (
//             <DramaticReveal key={i} delay={i * 120}>
//               <div
//                 className="tc-card"
//                 onClick={() =>
//                   setActiveCard(activeCard === i ? null : i)
//                 }
//               >
//                 <div className="tc-header">
//                   <div className="tc-avatar">
//                     <img
//                       src={t.avatar}
//                       alt={t.name}
//                       onError={(e) =>
//                         (e.target.style.display = "none")
//                       }
//                     />
//                     <span>{t.initials}</span>
//                   </div>

//                   <div>
//                     <div className="tc-name">{t.name}</div>
//                     <div className="tc-role">{t.role}</div>
//                   </div>
//                 </div>

//                 <div className="tc-body">
//                   <div className="tc-stars">
//                     {"★".repeat(t.stars)}
//                   </div>
//                   <p className="tc-quote">{t.quote}</p>
//                 </div>

//                 <div className="tc-footer">
//                   <span className="tc-company">{t.company}</span>
//                   <button className="tc-read-more">
//                     Read more
//                   </button>
//                 </div>
//               </div>
//             </DramaticReveal>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

import { useState, useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";

const TESTIMONIALS = [
  {
    avatar: "../assets/priya.png",
    initials: "PS",
    name: "Priya S.",
    role: "Founder, Skincare Brand",
    company: "Skincare Brand",
    stars: 5,
    quote:
      "Within 90 days, our Shopify store conversion rate went from 1.2% to 3.8%. The team understood D2C deeply and delivered results we didn't think were possible this fast.",
  },
  {
    avatar: "../assets/arjun.png",
    initials: "AK",
    name: "Arjun K.",
    role: "Co-founder, Fitness D2C",
    company: "Fitness D2C",
    stars: 5,
    quote:
      "Finally an agency that thinks like a business partner, not a vendor. Our SEO traffic alone pays for everything. The ROI has been extraordinary.",
  },
  {
    avatar: "../assets/meera.png",
    initials: "MR",
    name: "Meera R.",
    role: "CMO, Home Decor Brand",
    company: "Home Decor Brand",
    stars: 5,
    quote:
      "AEO was something we'd never heard of. Six months later, our brand appears in AI search results constantly. This team is ahead of the curve.",
  },
];

export default function TestimonialsSection() {
  const [activeCard, setActiveCard] = useState(null);
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
      } else {
        // 🔥 IMPORTANT: reset when leaving viewport
        setAnimate(false);
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .tc-wrap {
          font-family: 'Poppins', sans-serif;
          background: bgMain;
          padding: 88px 40px;
        }

        .tc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1040px;
          margin: 0 auto;
        }

        @media (max-width: 900px) {
          .tc-grid {
            grid-template-columns: 1fr;
          }

          .tc-wrap {
            padding: 80px 20px;
          }
        }

        .tc-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.07);
          overflow: hidden;
          cursor: pointer;

          height: 100%;
          display: flex;
          flex-direction: column;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .tc-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 22px 60px rgba(217,119,87,0.18);
        }

        .tc-header {
          background: #F5F0E8;
          padding: 20px 22px;
          display: flex;
          gap: 14px;
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }

        .tc-avatar {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          border: 2px solid #D97757;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #D97757;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .tc-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tc-card:hover .tc-avatar {
          background: #D97757;
          color: #fff;
        }

        .tc-name {
          font-weight: 700;
          font-size: 0.95rem;
          text-transform: uppercase;
        }

        .tc-role {
          font-size: 0.78rem;
          color: #D97757;
          margin-top: 2px;
        }

        .tc-body {
          padding: 22px;
          flex: 1;
        }

        .tc-stars {
          color: #f5a623;
          margin-bottom: 12px;
          font-size: 1.1rem;
        }

        .tc-quote {
          font-size: 0.85rem;
          line-height: 1.8;
          font-style: italic;
          color: #444;
        }

        .tc-footer {
          padding: 16px 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(0,0,0,0.07);
        }

        .tc-company {
          color: #D97757;
          font-weight: 600;
          font-size: 0.78rem;
        }

        .tc-read-more {
          background: none;
          border: none;
          font-size: 0.72rem;
          cursor: pointer;
          text-decoration: underline;
          color: #1A1A1A;
        }

        /* ───────── SAME BELIEF SECTION ANIMATION ───────── */

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

      <section ref={sectionRef} className="tc-wrap">

        <SectionHeader
          tag="Client Results"
          title="What our clients"
          highlight="actually say."
          subtitle=""
        />

        <div className="tc-grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`
                tc-card
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
              onClick={() =>
                setActiveCard(activeCard === i ? null : i)
              }
            >
              <div className="tc-header">

                <div className="tc-avatar">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    onError={(e) =>
                      (e.target.style.display = "none")
                    }
                  />
                  <span>{t.initials}</span>
                </div>

                <div>
                  <div className="tc-name">{t.name}</div>
                  <div className="tc-role">{t.role}</div>
                </div>
              </div>

              <div className="tc-body">
                <div className="tc-stars">
                  {"★".repeat(t.stars)}
                </div>

                <p className="tc-quote">
                  {t.quote}
                </p>
              </div>

              <div className="tc-footer">
                <span className="tc-company">
                  {t.company}
                </span>

                <button className="tc-read-more">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}