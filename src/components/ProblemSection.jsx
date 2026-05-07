// import { useEffect, useRef, useState } from "react";
// import adsImg from "../assets/ads.png";
// import contentImg from "../assets/content.png";
// import websiteImg from "../assets/website.png";
// import brandImg from "../assets/brand.png";
// import SectionHeader from "./SectionHeader";

// function useInView(threshold = 0.1) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const obs = new IntersectionObserver(([e]) => {
//       if (e.isIntersecting) {
//         setVisible(true);
//         obs.disconnect();
//       }
//     }, { threshold });

//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);

//   return [ref, visible];
// }

// const PROBLEMS = [
//   {
//     img: adsImg,
//     title: "You run ads",
//     desc: "but your landing page doesn't convert.",
//     badge: "Low ROAS",
//     badgeColor: "#E05A3A",
//   },
//   {
//     img: contentImg,
//     title: "You publish content",
//     desc: "but no one finds it on Google or AI search.",
//     badge: "0 Rankings",
//     badgeColor: "#C05A32",
//   },
//   {
//     img: websiteImg,
//     title: "You have a website",
//     desc: "but it's slow, unbranded, and leaking revenue.",
//     badge: "High Bounce",
//     badgeColor: "#D97757",
//   },
//   {
//     img: brandImg,
//     title: "You have a brand",
//     desc: "but it doesn't speak to the right buyer.",
//     badge: "No Connect",
//     badgeColor: "#A8432A",
//   },
// ];

// export default function ProblemSection() {
//   const [sectionRef, visible] = useInView(0.08);
//   const [hovered, setHovered] = useState(null);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

//         .prob-section {
//           background: #F5F0E8;
//           padding: 100px 24px 110px;
//           font-family: 'Poppins', sans-serif;
//           overflow: hidden;
//           position: relative;
//         }

//         /* HEADER */
//         .prob-header {
//           text-align: center;
//           margin-bottom: 80px;
//         }

//         .eyebrow {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: rgba(217,119,87,0.10);
//           border: 1px solid rgba(217,119,87,0.25);
//           border-radius: 999px;
//           padding: 6px 18px;
//           margin-bottom: 24px;
//         }

//         .eyebrow-dot {
//           width: 7px;
//           height: 7px;
//           border-radius: 50%;
//           background: #D97757;
//         }

//         .eyebrow-text {
//           font-size: 11px;
//           font-weight: 700;
//           color: #D97757;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//         }

//         .main-heading {
//           font-size: clamp(2rem, 4.5vw, 3.4rem);
//           font-weight: 800;
//           color: #1A1A1A;
//           line-height: 1.1;
//         }

//         .highlight {
//           color: #D97757;
//         }

//         .subtext {
//           margin-top: 18px;
//           color: #8C8C8C;
//           max-width: 520px;
//           margin-left: auto;
//           margin-right: auto;
//           line-height: 1.7;
//         }

//         /* FLOW */
//         .prob-row {
//           display: flex;
//           justify-content: center;
//           align-items: flex-start;
//         }

//         .prob-node {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//           flex: 1;
//         }

//         /* IMAGE */
//         .prob-img-circle {
//           width: 175px;
//           height: 175px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 4px solid #fff;
//           box-shadow: 0 12px 40px rgba(217,119,87,0.22);
//           transition: 0.35s ease;
//         }

//         .prob-img-circle.hov {
//           transform: scale(1.08) translateY(-8px);
//           box-shadow: 0 28px 60px rgba(217,119,87,0.35);
//         }

//         .prob-img-circle img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         /* OUTER RING */
//         .prob-ring-outer {
//           position: absolute;
//           width: 230px;
//           height: 230px;
//           border-radius: 50%;
//           border: 2px dashed rgba(217,119,87,0.35);
//           top: -32px;
//           left: -32px;
//           animation: spin 14s linear infinite;
//         }

//         /* INNER RING */
//         .prob-ring-inner {
//           position: absolute;
//           width: 200px;
//           height: 200px;
//           border-radius: 50%;
//           border: 2px dashed rgba(217,119,87,0.18);
//           top: -18px;
//           left: -18px;
//           animation: spin-rev 10s linear infinite;
//         }

//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes spin-rev {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(-360deg); }
//         }

//         /* BADGE */
//         .prob-badge {
//           position: absolute;
//           bottom: -8px;
//           right: -10px;
//           padding: 5px 12px;
//           border-radius: 999px;
//           font-size: 10px;
//           font-weight: 800;
//           color: #fff;
//           text-transform: uppercase;
//         }

//         /* TEXT */
//         .prob-title {
//           margin-top: 26px;
//           font-size: 1.15rem;
//           font-weight: 700;
//           color: #1A1A1A;
//         }

//         .prob-desc {
//           font-size: 0.95rem;
//           color: #8C8C8C;
//           max-width: 180px;
//           line-height: 1.6;
//         }

//         .prob-conn-svg {
//           width: 80px;
//           margin-top: 80px;
//         }

//         /* BOTTOM SECTION */
//         .bottom-text {
//           text-align: center;
//           margin-top: 70px;
//         }

//         .bottom-main {
//           font-size: 1.25rem;
//           font-weight: 700;
//           color: #1A1A1A;
//         }

//         .pill {
//           display: inline-flex;
//           gap: 10px;
//           margin-top: 28px;
//           padding: 14px 30px;
//           border-radius: 999px;
//           background: linear-gradient(135deg, #1A1A1A, #2D1810);
//           color: #fff;
//           font-weight: 700;
//         }

//         @media (max-width: 820px) {
//           .prob-row {
//             flex-direction: column;
//             gap: 50px;
//           }
//         }
//       `}</style>

//       <section className="prob-section" ref={sectionRef}>

//         {/* HEADER */}
//         <SectionHeader
//   tag="The Problem"
//   title="Most D2C brands are"
//   highlight="losing money on their digital presence."
//   subtitle="Not because they're not working hard enough. Because they're working in silos."
// />

//         {/* FLOW */}
//         <div className="prob-row">

//           {PROBLEMS.map((item, i) => (
//             <>
//               <div
//                 key={i}
//                 className="prob-node"
//                 onMouseEnter={() => setHovered(i)}
//                 onMouseLeave={() => setHovered(null)}
//               >
//                 <div style={{ position: "relative", width: 175, height: 175 }}>

//                   <div className="prob-ring-outer" style={{ opacity: hovered === i ? 1 : 0 }} />
//                   <div className="prob-ring-inner" style={{ opacity: hovered === i ? 1 : 0 }} />

//                   <div className={`prob-img-circle ${hovered === i ? "hov" : ""}`}>
//                     <img src={item.img} alt={item.title} />
//                   </div>

//                   <div
//                     className="prob-badge"
//                     style={{ background: item.badgeColor }}
//                   >
//                     {item.badge}
//                   </div>
//                 </div>

//                 <p className="prob-title">{item.title}</p>
//                 <p className="prob-desc">{item.desc}</p>
//               </div>

//               {i < PROBLEMS.length - 1 && (
//                 <svg className="prob-conn-svg" viewBox="0 0 60 2">
//                   <line
//                     x1="0"
//                     y1="1"
//                     x2="60"
//                     y2="1"
//                     stroke="#D97757"
//                     strokeWidth="2"
//                     strokeDasharray="5 4"
//                   />
//                 </svg>
//               )}
//             </>
//           ))}

//         </div>

//         {/* BOTTOM */}
//         <div className="bottom-text">
//           <div className="bottom-main">
//             The brands winning in 2025 don’t fix problems one by one.
//           </div>

//           <div className="pill">
//             They build systems — and so do we.
//           </div>
//         </div>

//       </section>
//     </>
//   );
// }

import { useState } from "react";
import adsImg from "../assets/ads.png";
import contentImg from "../assets/content.png";
import websiteImg from "../assets/website.png";
import brandImg from "../assets/brand.png";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal"; // ← bahar wala Reveal use ho raha hai

const PROBLEMS = [
  {
    img: adsImg,
    title: "You run ads",
    desc: "but your landing page doesn't convert.",
    badge: "Low ROAS",
    badgeColor: "#E05A3A",
  },
  {
    img: contentImg,
    title: "You publish content",
    desc: "but no one finds it on Google or AI search.",
    badge: "0 Rankings",
    badgeColor: "#C05A32",
  },
  {
    img: websiteImg,
    title: "You have a website",
    desc: "but it's slow, unbranded, and leaking revenue.",
    badge: "High Bounce",
    badgeColor: "#D97757",
  },
  {
    img: brandImg,
    title: "You have a brand",
    desc: "but it doesn't speak to the right buyer.",
    badge: "No Connect",
    badgeColor: "#A8432A",
  },
];

export default function ProblemSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .prob-section {
          background: #F5F0E8;
          padding: 100px 24px 110px;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
          position: relative;
        }
        .prob-row {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: nowrap;
        }
        .prob-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
        }
        .prob-img-circle {
          width: 175px;
          height: 175px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #fff;
          box-shadow: 0 12px 40px rgba(217,119,87,0.22);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .prob-img-circle.hov {
          transform: scale(1.08) translateY(-8px);
          box-shadow: 0 28px 60px rgba(217,119,87,0.35);
        }
        .prob-img-circle img { width: 100%; height: 100%; object-fit: cover; }

        .prob-ring-outer {
          position: absolute;
          width: 230px; height: 230px;
          border-radius: 50%;
          border: 2px dashed rgba(217,119,87,0.35);
          top: -32px; left: -32px;
          animation: spin 14s linear infinite;
          pointer-events: none;
        }
        .prob-ring-inner {
          position: absolute;
          width: 200px; height: 200px;
          border-radius: 50%;
          border: 2px dashed rgba(217,119,87,0.18);
          top: -18px; left: -18px;
          animation: spin-rev 10s linear infinite;
          pointer-events: none;
        }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes spin-rev { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }

        .prob-badge {
          position: absolute; bottom: -8px; right: -10px;
          padding: 5px 12px; border-radius: 999px;
          font-size: 10px; font-weight: 800; color: #fff; text-transform: uppercase;
        }
        .prob-title {
          margin-top: 26px; font-size: 1.15rem; font-weight: 700; color: #1A1A1A;
        }
        .prob-desc {
          font-size: 0.95rem; color: #8C8C8C; max-width: 180px; line-height: 1.6; margin: 0;
        }
        .prob-conn-svg {
          width: 80px; margin-top: 80px; flex-shrink: 0;
        }
        .bottom-text { text-align: center; margin-top: 70px; }
        .bottom-main { font-size: 1.25rem; font-weight: 700; color: #1A1A1A; }
        .pill {
          display: inline-flex; gap: 10px; margin-top: 28px;
          padding: 14px 30px; border-radius: 999px;
          background: linear-gradient(135deg, #1A1A1A, #2D1810);
          color: #fff; font-weight: 700;
        }
        @media (max-width: 820px) {
          .prob-row { flex-direction: column; gap: 50px; align-items: center; }
          .prob-conn-svg { display: none; }
        }
      `}</style>

      <section className="prob-section">

        {/* Header */}
        <Reveal>
          <SectionHeader
            tag="The Problem"
            title="Most D2C brands are"
            highlight="losing money on their digital presence."
            subtitle="Not because they're not working hard enough. Because they're working in silos."
          />
        </Reveal>

        {/* Cards */}
        <div className="prob-row">
          {PROBLEMS.map((item, i) => (
            <>
              <Reveal key={`card-${i}`} delay={i * 100} style={{ flex: 1 }}>
                <div
                  className="prob-node"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div style={{ position: "relative", width: 175, height: 175 }}>
                    <div className="prob-ring-outer" style={{ opacity: hovered === i ? 1 : 0, transition: "opacity 0.3s" }} />
                    <div className="prob-ring-inner" style={{ opacity: hovered === i ? 1 : 0, transition: "opacity 0.3s" }} />
                    <div className={`prob-img-circle${hovered === i ? " hov" : ""}`}>
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="prob-badge" style={{ background: item.badgeColor }}>
                      {item.badge}
                    </div>
                  </div>
                  <p className="prob-title">{item.title}</p>
                  <p className="prob-desc">{item.desc}</p>
                </div>
              </Reveal>

              {i < PROBLEMS.length - 1 && (
                <Reveal key={`conn-${i}`} delay={i * 100 + 50}>
                  <svg className="prob-conn-svg" viewBox="0 0 60 2">
                    <line x1="0" y1="1" x2="60" y2="1" stroke="#D97757" strokeWidth="2" strokeDasharray="5 4" />
                  </svg>
                </Reveal>
              )}
            </>
          ))}
        </div>

        {/* Bottom */}
        <div className="bottom-text">
          <Reveal>
            <div className="bottom-main">
              The brands winning in 2025 don't fix problems one by one.
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="pill">They build systems — and so do we.</div>
            </div>
          </Reveal>
        </div>

      </section>
    </>
  );
}