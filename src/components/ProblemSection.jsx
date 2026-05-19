

// // import { useState } from "react";
// // // import adsImg from "../assets/ads.png";
// // import onlineImg from "../assets/online.png";
// // // import contentImg from "../assets/content.png";
// // import socialImg from "../assets/social.png";
// // // import websiteImg from "../assets/website.png";
// // import performanceImg from "../assets/performance.png";
// // // import brandImg from "../assets/brand.png";
// // import brandImg from "../assets/brand-development.png";
// // import SectionHeader from "./SectionHeader";
// // import Reveal from "./Reveal"; // ← bahar wala Reveal use ho raha hai

// // const PROBLEMS = [
// //   {
// //     // img: adsImg,
// //     img: onlineImg,
// //     title: "You run ads",
// //     desc: "but your landing page doesn't convert.",
// //     badge: "Low ROAS",
// //     badgeColor: "#92E3A9",
// //   },
// //   {
// //     // img: contentImg,
// //      img: socialImg,
// //     title: "You publish content",
// //     desc: "but no one finds it on Google or AI search.",
// //     badge: "0 Rankings",
// //     badgeColor: "#FFC727",
// //   },
// //   {
// //     // img: websiteImg,
// //     img: performanceImg,
// //     title: "You have a website",
// //     desc: "but it's slow, unbranded, and leaking revenue.",
// //     badge: "High Bounce",
// //     badgeColor: "#BA68C8",
// //   },
// //   {
// //     img: brandImg,
// //     title: "You have a brand",
// //     desc: "but it doesn't speak to the right buyer.",
// //     badge: "No Connect",
// //     badgeColor: "#407AFE",
// //   },
// // ];

// // export default function ProblemSection() {
// //   const [hovered, setHovered] = useState(null);

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

// //         .prob-section {
// //           // background: #F5F0E8;
// //            background: #ffffff;
// //           padding: 100px 24px 110px;
// //           font-family: 'Poppins', sans-serif;
// //           overflow: hidden;
// //           position: relative;
// //         }
// //         .prob-row {
// //           display: flex;
// //           justify-content: center;
// //           align-items: flex-start;
// //           flex-wrap: nowrap;
// //         }
// //         .prob-node {
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           text-align: center;
// //           flex: 1;
// //         }
// //         .prob-img-circle {
// //           width: 175px;
// //           height: 175px;
// //           border-radius: 50%;
// //           overflow: hidden;
// //           border: 4px solid #fff;
// //           box-shadow: 0 12px 40px rgba(217,119,87,0.22);
// //           transition: transform 0.35s ease, box-shadow 0.35s ease;
// //         }
// //         .prob-img-circle.hov {
// //           transform: scale(1.08) translateY(-8px);
// //           box-shadow: 0 28px 60px rgba(217,119,87,0.35);
// //         }
// //         .prob-img-circle img { width: 100%; height: 100%; object-fit: cover; }

// //         .prob-ring-outer {
// //           position: absolute;
// //           width: 230px; height: 230px;
// //           border-radius: 50%;
// //           border: 2px dashed rgba(217,119,87,0.35);
// //           top: -32px; left: -32px;
// //           animation: spin 14s linear infinite;
// //           pointer-events: none;
// //         }
// //         .prob-ring-inner {
// //           position: absolute;
// //           width: 200px; height: 200px;
// //           border-radius: 50%;
// //           border: 2px dashed rgba(217,119,87,0.18);
// //           top: -18px; left: -18px;
// //           animation: spin-rev 10s linear infinite;
// //           pointer-events: none;
// //         }
// //         @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
// //         @keyframes spin-rev { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }

// //         .prob-badge {
// //           position: absolute; bottom: -8px; right: -10px;
// //           padding: 5px 12px; border-radius: 999px;
// //           font-size: 10px; font-weight: 800; color: #fff; text-transform: uppercase;
// //         }
// //         .prob-title {
// //           margin-top: 26px; font-size: 1.15rem; font-weight: 700; color: #1A1A1A;
// //         }
// //         .prob-desc {
// //           font-size: 0.95rem; color: #8C8C8C; max-width: 180px; line-height: 1.6; margin: 0;
// //         }
// //         .prob-conn-svg {
// //           width: 80px; margin-top: 80px; flex-shrink: 0;
// //         }
// //         .bottom-text { text-align: center; margin-top: 70px; }
// //         .bottom-main { font-size: 1.25rem; font-weight: 700; color: #1A1A1A; }
// //         .pill {
// //           display: inline-flex; gap: 10px; margin-top: 28px;
// //           padding: 14px 30px; border-radius: 999px;
// //           background: linear-gradient(135deg, #1A1A1A, #2D1810);
// //           color: #fff; font-weight: 700;
// //         }
// //         @media (max-width: 820px) {
// //           .prob-row { flex-direction: column; gap: 50px; align-items: center; }
// //           .prob-conn-svg { display: none; }
// //         }
// //       `}</style>

// //       <section className="prob-section">

// //         {/* Header */}
// //         <Reveal>
// //           <SectionHeader
// //             tag="The Problem"
// //             title="Most D2C brands are"
// //             highlight="losing money on their digital presence."
// //             subtitle="Not because they're not working hard enough. Because they're working in silos."
// //           />
// //         </Reveal>

// //         {/* Cards */}
// //         <div className="prob-row">
// //           {PROBLEMS.map((item, i) => (
// //             <>
// //               <Reveal key={`card-${i}`} delay={i * 100} style={{ flex: 1 }}>
// //                 <div
// //                   className="prob-node"
// //                   onMouseEnter={() => setHovered(i)}
// //                   onMouseLeave={() => setHovered(null)}
// //                 >
// //                   <div style={{ position: "relative", width: 175, height: 175 }}>
// //                     <div className="prob-ring-outer" style={{ opacity: hovered === i ? 1 : 0, transition: "opacity 0.3s" }} />
// //                     <div className="prob-ring-inner" style={{ opacity: hovered === i ? 1 : 0, transition: "opacity 0.3s" }} />
// //                     <div className={`prob-img-circle${hovered === i ? " hov" : ""}`}>
// //                       <img src={item.img} alt={item.title} />
// //                     </div>
// //                     <div className="prob-badge" style={{ background: item.badgeColor }}>
// //                       {item.badge}
// //                     </div>
// //                   </div>
// //                   <p className="prob-title">{item.title}</p>
// //                   <p className="prob-desc">{item.desc}</p>
// //                 </div>
// //               </Reveal>

// //               {i < PROBLEMS.length - 1 && (
// //                 <Reveal key={`conn-${i}`} delay={i * 100 + 50}>
// //                   <svg className="prob-conn-svg" viewBox="0 0 60 2">
// //                     <line x1="0" y1="1" x2="60" y2="1" stroke="#D97757" strokeWidth="2" strokeDasharray="5 4" />
// //                   </svg>
// //                 </Reveal>
// //               )}
// //             </>
// //           ))}
// //         </div>

// //         {/* Bottom */}
// //         <div className="bottom-text">
// //           <Reveal>
// //             <div className="bottom-main">
// //               The brands winning in 2025 don't fix problems one by one.
// //             </div>
// //           </Reveal>
// //           <Reveal delay={150}>
// //             <div style={{ display: "flex", justifyContent: "center" }}>
// //               <div className="pill">They build systems — and so do we.</div>
// //             </div>
// //           </Reveal>
// //         </div>

// //       </section>
// //     </>
// //   );
// // }

// import { useState } from "react";
// import onlineImg from "../assets/online.png";
// import socialImg from "../assets/social.png";
// import performanceImg from "../assets/performance.png";
// import brandImg from "../assets/brand-development.png";
// import SectionHeader from "./SectionHeader";
// import Reveal from "./Reveal";

// const PROBLEMS = [
//   {
//     img: onlineImg,
//     title: "You run ads",
//     desc: "but your landing page doesn't convert.",
//     badge: "Low ROAS",
//     badgeColor: "#92E3A9",
//   },
//   {
//     img: socialImg,
//     title: "You publish content",
//     desc: "but no one finds it on Google or AI search.",
//     badge: "0 Rankings",
//     badgeColor: "#FFC727",
//   },
//   {
//     img: performanceImg,
//     title: "You have a website",
//     desc: "but it's slow, unbranded, and leaking revenue.",
//     badge: "High Bounce",
//     badgeColor: "#BA68C8",
//   },
//   {
//     img: brandImg,
//     title: "You have a brand",
//     desc: "but it doesn't speak to the right buyer.",
//     badge: "No Connect",
//     badgeColor: "#407AFE",
//   },
// ];

// export default function ProblemSection() {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

//         .prob-section {
//           background: #fff;
//           padding: 100px 24px 110px;
//           font-family: 'Poppins', sans-serif;
//           overflow: hidden;
//         }

//         .prob-row {
//           display: flex;
//           justify-content: center;
//           align-items: flex-start;
//           gap: 20px;
//         }

//         .prob-node {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//           flex: 1;

//           opacity: 0;
//           transform: translateY(40px) scale(0.95);
//           animation: nodeIn 0.9s ease forwards;
//         }

//         @keyframes nodeIn {
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .prob-node:nth-child(1) { animation-delay: 0.1s; }
//         .prob-node:nth-child(2) { animation-delay: 0.25s; }
//         .prob-node:nth-child(3) { animation-delay: 0.4s; }
//         .prob-node:nth-child(4) { animation-delay: 0.55s; }

//         /* IMAGE */
//         .prob-img-wrapper {
//           width: 185px;
//           height: 185px;
//           border-radius: 50%;
//           padding: 6px;
//           background: radial-gradient(circle at top left, #fff, #f3f3f3);
//           box-shadow: 0 18px 45px rgba(0,0,0,0.10);
//           position: relative;

//           transition: transform 0.4s ease, box-shadow 0.4s ease;
//           animation: float 4s ease-in-out infinite;
//         }

//         @keyframes float {
//           0%,100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }

//         .prob-img-wrapper:hover {
//           transform: translateY(-8px) scale(1.08);
//           box-shadow: 0 35px 70px rgba(0,0,0,0.20);
//         }

//         .prob-img {
//           width: 100%;
//           height: 100%;
//           border-radius: 50%;
//           object-fit: cover;
//         }

//         .prob-img-wrapper::before {
//           content: "";
//           position: absolute;
//           inset: 10px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(255,255,255,0.7), transparent 70%);
//           animation: glow 3s ease-in-out infinite;
//         }

//         @keyframes glow {
//           0%,100% { opacity: 0.6; }
//           50% { opacity: 1; }
//         }

//         /* RINGS */
//         .prob-ring-outer,
//         .prob-ring-inner {
//           position: absolute;
//           border-radius: 50%;
//           pointer-events: none;
//           opacity: 1;
//           filter: drop-shadow(0 0 6px var(--ring-color));
//         }

//         .prob-ring-outer {
//           width: 240px;
//           height: 240px;
//           border: 2px dashed var(--ring-color);
//           top: -28px;
//           left: -28px;
//           animation: spin 16s linear infinite;
//         }

//         .prob-ring-inner {
//           width: 210px;
//           height: 210px;
//           border: 2px dashed var(--ring-color);
//           top: -12px;
//           left: -12px;
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

//         .prob-badge {
//           position: absolute;
//           bottom: -8px;
//           right: -10px;
//           padding: 5px 12px;
//           border-radius: 999px;
//           font-size: 10px;
//           font-weight: 800;
//           color: #000;
//           text-transform: uppercase;
//           animation: pop 2s ease infinite alternate;
//         }

//         @keyframes pop {
//           from { transform: scale(1); }
//           to { transform: scale(1.08); }
//         }

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

//         /* 🔥 RESTORED BOTTOM SECTION */
//         .bottom-text {
//           text-align: center;
//           margin-top: 80px;
//         }

//         .bottom-main {
//           font-size: 1.25rem;
//           font-weight: 700;
//           color: #1A1A1A;
//         }

//         .pill {
//           display: inline-flex;
//           margin-top: 22px;
//           padding: 12px 28px;
//           border-radius: 999px;
//           background: linear-gradient(135deg, #1A1A1A, #2D1810);
//           color: #fff;
//           font-weight: 700;
//           font-size: 0.95rem;
//         }

//         @media (max-width: 820px) {
//           .prob-row {
//             flex-direction: column;
//             gap: 50px;
//             align-items: center;
//           }
//         }
//       `}</style>

//       <section className="prob-section">

//         <Reveal>
//           {/* <SectionHeader
//             tag="The Problem"
//             title="Most D2C brands are losing"
//             highlight="money on their digital presence."
//             subtitle="Not because they're not working hard enough. Because they're working in silos."
//           /> */}
//           <div className="max-w-6xl mx-auto">
//           <SectionHeader
//   tag="The Problem"
//   title="Most D2C brands are"
//   highlight="losing money"
//   endText="on their digital presence."
//   subtitle="Not because they're not working hard enough. Because they're working in silos."
// />
// </div>
//         </Reveal>

//         <div className="prob-row">
//           {PROBLEMS.map((item, i) => (
//             <div
//               key={i}
//               className="prob-node"
//               onMouseEnter={() => setHovered(i)}
//               onMouseLeave={() => setHovered(null)}
//             >
//               <div
//                 style={{
//                   position: "relative",
//                   width: 185,
//                   height: 185,
//                   "--ring-color": item.badgeColor,
//                 }}
//               >
//                 <div className="prob-ring-outer" />
//                 <div className="prob-ring-inner" />

//                 <div className="prob-img-wrapper">
//                   <img src={item.img} alt={item.title} className="prob-img" />
//                 </div>

//                 <div
//                   className="prob-badge"
//                   style={{ background: item.badgeColor }}
//                 >
//                   {item.badge}
//                 </div>
//               </div>

//               <p className="prob-title">{item.title}</p>
//               <p className="prob-desc">{item.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/*  RESTORED BOTTOM STORY BLOCK */}
//         <Reveal>
//           <div className="bottom-text">
//             <div className="bottom-main">
//               The brands winning in 2025 don't fix problems one by one.
//             </div>

//             <div style={{ display: "flex", justifyContent: "center" }}>
//               <div className="pill">
//                 They build systems — and so do we.
//               </div>
//             </div>
//           </div>
//         </Reveal>

//       </section>
//     </>
//   );
// }


import { useState } from "react";
import onlineImg from "../assets/online.png";
import socialImg from "../assets/social.png";
import performanceImg from "../assets/performance.png";
import brandImg from "../assets/brand-development.png";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const PROBLEMS = [
  {
    img: onlineImg,
    title: "You run ads",
    desc: "but your landing page doesn't convert.",
    badge: "Low ROAS",
  },
  {
    img: socialImg,
    title: "You publish content",
    desc: "but no one finds it on Google or AI search.",
    badge: "0 Rankings",
  },
  {
    img: performanceImg,
    title: "You have a website",
    desc: "but it's slow, unbranded, and leaking revenue.",
    badge: "High Bounce",
  },
  {
    img: brandImg,
    title: "You have a brand",
    desc: "but it doesn't speak to the right buyer.",
    badge: "No Connect",
  },
];

export default function ProblemSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        :root {
          --primary: #FFFFFF;
          --secondary: #2096F3;
          --accent: #110429;
        }

        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .prob-section {
          background: var(--primary);
          padding: 100px 24px 110px;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        .prob-row {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 20px;
        }

        .prob-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;

          opacity: 0;
          transform: translateY(40px) scale(0.95);
          animation: nodeIn 0.9s ease forwards;
        }

        @keyframes nodeIn {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .prob-node:nth-child(1) { animation-delay: 0.1s; }
        .prob-node:nth-child(2) { animation-delay: 0.25s; }
        .prob-node:nth-child(3) { animation-delay: 0.4s; }
        .prob-node:nth-child(4) { animation-delay: 0.55s; }

        .prob-img-wrapper {
          width: 185px;
          height: 185px;
          border-radius: 50%;
          padding: 6px;
          background: radial-gradient(circle at top left, #fff, #f3f3f3);
          box-shadow: 0 18px 45px rgba(0,0,0,0.10);
          position: relative;

          transition: transform 0.4s ease, box-shadow 0.4s ease;
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .prob-img-wrapper:hover {
          transform: translateY(-8px) scale(1.08);
          box-shadow: 0 35px 70px rgba(0,0,0,0.20);
        }

        .prob-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .prob-ring-outer,
        .prob-ring-inner {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          opacity: 1;
          filter: drop-shadow(0 0 6px var(--secondary));
        }

        .prob-ring-outer {
          width: 240px;
          height: 240px;
          border: 2px dashed var(--secondary);
          top: -28px;
          left: -28px;
          animation: spin 16s linear infinite;
        }

        .prob-ring-inner {
          width: 210px;
          height: 210px;
          border: 2px dashed var(--secondary);
          top: -12px;
          left: -12px;
          animation: spin-rev 10s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-rev {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .prob-badge {
          position: absolute;
          bottom: -8px;
          right: -10px;
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          background: var(--secondary);
          animation: pop 2s ease infinite alternate;
        }

        @keyframes pop {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }

        .prob-title {
          margin-top: 26px;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--accent);
        }

        .prob-desc {
          font-size: 0.95rem;
          color: rgba(17, 4, 41, 0.65);
          max-width: 180px;
          line-height: 1.6;
        }

        .bottom-text {
          text-align: center;
          margin-top: 80px;
        }

        .bottom-main {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--accent);
        }

        .pill {
          display: inline-flex;
          margin-top: 22px;
          padding: 12px 28px;
          border-radius: 999px;
          background: var(--accent);
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
        }

        @media (max-width: 820px) {
          .prob-row {
            flex-direction: column;
            gap: 50px;
            align-items: center;
          }
        }
      `}</style>

      <section className="prob-section">
        <Reveal>
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              tag="The Problem"
              title="Most D2C brands are"
              highlight="losing money"
              endText="on their digital presence."
              subtitle="Not because they're not working hard enough. Because they're working in silos."
            />
          </div>
        </Reveal>

        <div className="prob-row">
          {PROBLEMS.map((item, i) => (
            <div
              key={i}
              className="prob-node"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                style={{
                  position: "relative",
                  width: 185,
                  height: 185,
                }}
              >
                <div className="prob-ring-outer" />
                <div className="prob-ring-inner" />

                <div className="prob-img-wrapper">
                  <img src={item.img} alt={item.title} className="prob-img" />
                </div>

                <div className="prob-badge">
                  {item.badge}
                </div>
              </div>

              <p className="prob-title">{item.title}</p>
              <p className="prob-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <Reveal>
          <div className="bottom-text">
            <div className="bottom-main">
              The brands winning in 2025 don't fix problems one by one.
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="pill">
                They build systems — and so do we.
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}