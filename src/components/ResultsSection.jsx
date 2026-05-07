
// import teamImg from "../assets/team.jpg";
// import SectionHeader from "./SectionHeader";

// export default function ResultsSection() {
//   const stats = [
//     {
//       num: "4.4",
//       suffix: "×",
//       label: "ROAS on Meta & Google ads\nfor D2C food brands",
//       fill: 92,
//     },
//     {
//       num: "+340",
//       suffix: "%",
//       label: "Organic traffic growth\nfor lifestyle & D2C brands",
//       fill: 88,
//     },
//     {
//       num: "98",
//       suffix: "%",
//       label: "Client retention rate\nyear over year",
//       fill: 98,
//     },
//   ];

//   const cases = [
//     {
//       dot: "#D97757",
//       name: "D2C Fashion Brand",
//       category: "AI Marketing + Ads",
//       result: "4.2× ROAS",
//     },
//     {
//       dot: "#1A1A1A",
//       name: "SaaS Startup",
//       category: "Brand Identity + SEO",
//       result: "+340% Traffic",
//     },
//     {
//       dot: "#D97757",
//       name: "Local F&B Chain",
//       category: "Social + Content Strategy",
//       result: "2.9× Revenue",
//     },
//   ];

//   const steps = [
//     {
//       n: "1",
//       title: "Deep Brand Audit",
//       desc: "Full analysis of your market, audience & gaps",
//     },
//     {
//       n: "2",
//       title: "AI-Powered Strategy",
//       desc: "Custom growth plan built by data, not guesswork",
//     },
//     {
//       n: "3",
//       title: "Execute & Optimise",
//       desc: "Live campaigns refined weekly for peak ROI",
//     },
//     {
//       n: "4",
//       title: "Scale & Compound",
//       desc: "Growth systems that get stronger every month",
//     },
//   ];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

//         .rs {
//           font-family: 'Poppins', sans-serif;
//         }

//         .rs-top-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 18px;
//           align-items: stretch;
//         }

//         .rs-left-panel {
//           background: #EBD2C1;
//           border-radius: 24px;
//           overflow: hidden;
//           border: 1px solid rgba(0,0,0,0.05);
//           display: flex;
//           flex-direction: column;
//           height: 100%;
//         }

//         .rs-stats-row {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//         }

//         .rs-metrics-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 18px;
//           margin-top: 18px;
//         }

//         .rs-case-row {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           background: #FAF7F2;
//           border-radius: 14px;
//           padding: 14px 16px;
//           border: 1px solid rgba(0,0,0,0.05);
//           transition: all 0.3s ease;
//         }

//         .rs-case-row:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 12px 30px rgba(217,119,87,0.08);
//         }

//         .rs-metric-card {
//           background: #EBD2C1;
//           border-radius: 20px;
//           padding: 28px 24px;
//           border: 1px solid rgba(0,0,0,0.05);
//           box-shadow: 0 10px 30px rgba(0,0,0,0.03);
//           transition: all 0.3s ease;
//         }

//         .rs-metric-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 18px 40px rgba(217,119,87,0.12);
//         }

//         .rs-image-wrap {
//           position: relative;
//           flex: 1;
//           min-height: 320px;
//           overflow: hidden;
//           margin-top: auto;
//         }

//         .rs-image-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         @media (max-width: 900px) {
//           .rs-top-grid {
//             grid-template-columns: 1fr;
//           }

//           .rs-metrics-grid {
//             grid-template-columns: 1fr;
//           }

//           .rs-image-wrap {
//             min-height: 260px;
//           }
//         }

//         @media (max-width: 600px) {
//           .rs-stats-row {
//             grid-template-columns: 1fr;
//           }

//           .rs-stats-row > div {
//             border-right: none !important;
//             border-bottom: 1px solid rgba(0,0,0,0.05);
//           }

//           .rs-stats-row > div:last-child {
//             border-bottom: none;
//           }
//         }
//       `}</style>

//       <section
//         className="rs"
//         style={{
//           width: "100%",
//           background: "#F5F0E8",
//           padding: "90px 20px 80px",
//           boxSizing: "border-box",
//         }}
//       >
//         <div style={{ maxWidth: 1260, margin: "0 auto" }}>
          
//           {/* HEADER */}
//           <SectionHeader
//   tag="Results"
//   title="Numbers that don't need"
//   highlight="explanation."
//   subtitle="Real outcomes from real brands — across AI marketing, branding, and performance growth."
// />

//           {/* TOP GRID */}
//           <div className="rs-top-grid">

//             {/* LEFT PANEL */}
//             <div className="rs-left-panel">

//               {/* STATS */}
//               <div className="rs-stats-row">
//                 {stats.map((s, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       padding: "34px 24px",
//                       borderRight:
//                         i < 2
//                           ? "1px solid rgba(0,0,0,0.05)"
//                           : "none",
//                     }}
//                   >
//                     <div
//                       style={{
//                         fontSize: "2.7rem",
//                         fontWeight: 800,
//                         color: "#1A1A1A",
//                         lineHeight: 1,
//                       }}
//                     >
//                       {s.num}
//                       <span style={{ color: "#D97757" }}>
//                         {s.suffix}
//                       </span>
//                     </div>

//                     <div
//                       style={{
//                         fontSize: "0.75rem",
//                         color: "#6B6B6B",
//                         lineHeight: 1.7,
//                         marginTop: 10,
//                         whiteSpace: "pre-line",
//                       }}
//                     >
//                       {s.label}
//                     </div>

//                     <div
//                       style={{
//                         height: 4,
//                         background: "rgba(0,0,0,0.08)",
//                         borderRadius: 999,
//                         marginTop: 14,
//                         overflow: "hidden",
//                       }}
//                     >
//                       <div
//                         style={{
//                           width: `${s.fill}%`,
//                           height: "100%",
//                           background: "#D97757",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* QUOTE */}
//               <div
//                 style={{
//                   padding: "30px 28px",
//                   borderTop: "1px solid rgba(0,0,0,0.05)",
//                 }}
//               >
//                 <p
//                   style={{
//                     fontSize: "0.92rem",
//                     lineHeight: 1.9,
//                     color: "#5F5F5F",
//                     fontStyle: "italic",
//                     marginBottom: 20,
//                   }}
//                 >
//                   “ThelocalHub didn't just run our ads — they rebuilt
//                   our entire growth engine. Revenue tripled in 8 months.”
//                 </p>

//                 <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                   <div
//                     style={{
//                       width: 40,
//                       height: 40,
//                       borderRadius: "50%",
//                       background: "#D97757",
//                       color: "#fff",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       fontSize: 12,
//                       fontWeight: 700,
//                     }}
//                   >
//                     RS
//                   </div>

//                   <div>
//                     <div
//                       style={{
//                         fontSize: "0.9rem",
//                         fontWeight: 700,
//                         color: "#1A1A1A",
//                       }}
//                     >
//                       Rahul Sharma
//                     </div>

//                     <div
//                       style={{
//                         fontSize: "0.75rem",
//                         color: "#6B6B6B",
//                       }}
//                     >
//                       Founder, D2C Skincare Brand
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* IMAGE */}
//               <div className="rs-image-wrap">
//                 <img src={teamImg} alt="team" />

//                 <div
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     background:
//                       "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.45))",
//                   }}
//                 />

//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: 24,
//                     left: 24,
//                   }}
//                 >
//                   <div
//                     style={{
//                       fontSize: "1rem",
//                       fontWeight: 700,
//                       color: "#fff",
//                       marginBottom: 4,
//                     }}
//                   >
//                     Strategy. Execution. Results.
//                   </div>

//                   <div
//                     style={{
//                       fontSize: "0.8rem",
//                       color: "rgba(255,255,255,0.75)",
//                     }}
//                   >
//                     A team of 30+ specialists in your corner
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT SIDE */}
//             <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

//               {/* CASE HIGHLIGHTS */}
//               <div
//                 style={{
//                   background: "#EBD2C1",
//                   borderRadius: 24,
//                   padding: "32px 28px",
//                   border: "1px solid rgba(0,0,0,0.05)",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: 11,
//                     fontWeight: 700,
//                     color: "#D97757",
//                     letterSpacing: "0.16em",
//                     textTransform: "uppercase",
//                     marginBottom: 14,
//                   }}
//                 >
//                   Case Highlights
//                 </div>

//                 <h3
//                   style={{
//                     fontSize: "1.7rem",
//                     fontWeight: 800,
//                     color: "#1A1A1A",
//                     marginBottom: 12,
//                   }}
//                 >
//                   Brands we've transformed.
//                 </h3>

//                 <p
//                   style={{
//                     fontSize: "0.95rem",
//                     color: "#6B6B6B",
//                     lineHeight: 1.8,
//                     marginBottom: 22,
//                   }}
//                 >
//                   Across industries — from startups to established
//                   enterprises.
//                 </p>

//                 <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//                   {cases.map((c, i) => (
//                     <div key={i} className="rs-case-row">
//                       <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                         <div
//                           style={{
//                             width: 10,
//                             height: 10,
//                             borderRadius: "50%",
//                             background: c.dot,
//                           }}
//                         />

//                         <div>
//                           <div
//                             style={{
//                               fontSize: "0.92rem",
//                               fontWeight: 700,
//                               color: "#1A1A1A",
//                             }}
//                           >
//                             {c.name}
//                           </div>

//                           <div
//                             style={{
//                               fontSize: "0.78rem",
//                               color: "#6B6B6B",
//                             }}
//                           >
//                             {c.category}
//                           </div>
//                         </div>
//                       </div>

//                       <div
//                         style={{
//                           fontSize: "0.92rem",
//                           fontWeight: 800,
//                           color: "#D97757",
//                         }}
//                       >
//                         {c.result}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* PROCESS */}
//               <div
//                 style={{
//                   background: "#EBD2C1",
//                   borderRadius: 24,
//                   padding: "30px 28px",
//                   border: "1px solid rgba(0,0,0,0.05)",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: 11,
//                     fontWeight: 700,
//                     color: "#D97757",
//                     letterSpacing: "0.16em",
//                     textTransform: "uppercase",
//                     marginBottom: 22,
//                   }}
//                 >
//                   How We Deliver Results
//                 </div>

//                 <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
//                   {steps.map((s, i) => (
//                     <div key={i} style={{ display: "flex", gap: 16 }}>
//                       <div
//                         style={{
//                           width: 36,
//                           height: 36,
//                           borderRadius: "50%",
//                           background: "rgba(217,119,87,0.12)",
//                           border: "1px solid rgba(217,119,87,0.2)",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           color: "#D97757",
//                           fontWeight: 700,
//                           flexShrink: 0,
//                         }}
//                       >
//                         {s.n}
//                       </div>

//                       <div>
//                         <div
//                           style={{
//                             fontSize: "0.95rem",
//                             fontWeight: 700,
//                             color: "#1A1A1A",
//                             marginBottom: 4,
//                           }}
//                         >
//                           {s.title}
//                         </div>

//                         <div
//                           style={{
//                             fontSize: "0.8rem",
//                             color: "#6B6B6B",
//                             lineHeight: 1.7,
//                           }}
//                         >
//                           {s.desc}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* BOTTOM CARDS */}
//           <div className="rs-metrics-grid">
//             {[
//               {
//                 title: "D2C Fashion",
//                 metric: "2.1×",
//                 subtitle: "revenue in 4 months",
//                 desc: "Performance marketing + Shopify rebuild + brand refresh",
//               },
//               {
//                 title: "Home & Lifestyle",
//                 metric: "+340%",
//                 subtitle: "organic traffic in 6 months",
//                 desc: "SEO + AEO + content marketing overhaul",
//               },
//               {
//                 title: "D2C Food Brand",
//                 metric: "4.4×",
//                 subtitle: "ROAS on Meta & Google",
//                 desc: "Full-funnel ad strategy + landing page CRO",
//               },
//             ].map((card, i) => (
//               <div key={i} className="rs-metric-card">

//                 <div
//                   style={{
//                     fontSize: "0.95rem",
//                     fontWeight: 700,
//                     color: "#1A1A1A",
//                     marginBottom: 12,
//                     textTransform: "uppercase",
//                   }}
//                 >
//                   {card.title}
//                 </div>

//                 <div
//                   style={{
//                     fontSize: "2.8rem",
//                     fontWeight: 800,
//                     color: "#D97757",
//                     lineHeight: 1,
//                   }}
//                 >
//                   {card.metric}
//                 </div>

//                 <div
//                   style={{
//                     fontSize: "1rem",
//                     fontWeight: 600,
//                     color: "#1A1A1A",
//                     marginTop: 10,
//                   }}
//                 >
//                   {card.subtitle}
//                 </div>

//                 <div
//                   style={{
//                     fontSize: "0.8rem",
//                     color: "#6B6B6B",
//                     marginTop: 14,
//                     lineHeight: 1.7,
//                   }}
//                 >
//                   {card.desc}
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }

import teamImg from "../assets/team.jpg";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function ResultsSection() {
  const stats = [
    { num: "4.4", suffix: "×", label: "ROAS on Meta & Google ads\nfor D2C food brands",        fill: 92 },
    { num: "+340", suffix: "%", label: "Organic traffic growth\nfor lifestyle & D2C brands",   fill: 88 },
    { num: "98",  suffix: "%", label: "Client retention rate\nyear over year",                 fill: 98 },
  ];

  const cases = [
    { dot: "#D97757", name: "D2C Fashion Brand",  category: "AI Marketing + Ads",          result: "4.2× ROAS"      },
    { dot: "#1A1A1A", name: "SaaS Startup",        category: "Brand Identity + SEO",        result: "+340% Traffic"  },
    { dot: "#D97757", name: "Local F&B Chain",     category: "Social + Content Strategy",   result: "2.9× Revenue"   },
  ];

  const steps = [
    { n: "1", title: "Deep Brand Audit",      desc: "Full analysis of your market, audience & gaps"          },
    { n: "2", title: "AI-Powered Strategy",   desc: "Custom growth plan built by data, not guesswork"        },
    { n: "3", title: "Execute & Optimise",    desc: "Live campaigns refined weekly for peak ROI"             },
    { n: "4", title: "Scale & Compound",      desc: "Growth systems that get stronger every month"           },
  ];

  const bottomCards = [
    { title: "D2C Fashion",       metric: "2.1×",   subtitle: "revenue in 4 months",          desc: "Performance marketing + Shopify rebuild + brand refresh" },
    { title: "Home & Lifestyle",  metric: "+340%",  subtitle: "organic traffic in 6 months",  desc: "SEO + AEO + content marketing overhaul"                  },
    { title: "D2C Food Brand",    metric: "4.4×",   subtitle: "ROAS on Meta & Google",         desc: "Full-funnel ad strategy + landing page CRO"              },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        .rs { font-family: 'Poppins', sans-serif; }
        .rs-top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          align-items: stretch;
        }
        .rs-left-panel {
          background: #EBD2C1;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .rs-stats-row { display: grid; grid-template-columns: repeat(3, 1fr); }
        .rs-metrics-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 18px; }
        .rs-case-row {
          display: flex; align-items: center; justify-content: space-between;
          background: #FAF7F2; border-radius: 14px; padding: 14px 16px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        .rs-case-row:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(217,119,87,0.08); }
        .rs-metric-card {
          background: #EBD2C1; border-radius: 20px; padding: 28px 24px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          transition: all 0.3s ease;
        }
        .rs-metric-card:hover { transform: translateY(-5px); box-shadow: 0 18px 40px rgba(217,119,87,0.12); }
        .rs-image-wrap { position: relative; flex: 1; min-height: 320px; overflow: hidden; margin-top: auto; }
        .rs-image-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
        @media (max-width: 900px) {
          .rs-top-grid { grid-template-columns: 1fr; }
          .rs-metrics-grid { grid-template-columns: 1fr; }
          .rs-image-wrap { min-height: 260px; }
        }
        @media (max-width: 600px) {
          .rs-stats-row { grid-template-columns: 1fr; }
          .rs-stats-row > div { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.05); }
          .rs-stats-row > div:last-child { border-bottom: none; }
        }
      `}</style>

      <section className="rs" style={{ width: "100%", background: "#F5F0E8", padding: "90px 20px 80px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: 1260, margin: "0 auto" }}>

          {/* HEADER — SectionHeader has Reveal inside */}
          <SectionHeader
            tag="Results"
            title="Numbers that don't need"
            highlight="explanation."
            subtitle="Real outcomes from real brands — across AI marketing, branding, and performance growth."
          />

          {/* TOP GRID */}
          <div className="rs-top-grid">

            {/* LEFT PANEL */}
            <div className="rs-left-panel">

              {/* STATS — each stat reveals individually */}
              <div className="rs-stats-row">
                {stats.map((s, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <div style={{ padding: "34px 24px", borderRight: i < 2 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                      <div style={{ fontSize: "2.7rem", fontWeight: 800, color: "#1A1A1A", lineHeight: 1 }}>
                        {s.num}<span style={{ color: "#D97757" }}>{s.suffix}</span>
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#6B6B6B", lineHeight: 1.7, marginTop: 10, whiteSpace: "pre-line" }}>
                        {s.label}
                      </div>
                      <div style={{ height: 4, background: "rgba(0,0,0,0.08)", borderRadius: 999, marginTop: 14, overflow: "hidden" }}>
                        <div style={{ width: `${s.fill}%`, height: "100%", background: "#D97757" }} />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* QUOTE */}
              <Reveal delay={80}>
                <div style={{ padding: "30px 28px", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                  <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "#5F5F5F", fontStyle: "italic", marginBottom: 20 }}>
                    "ThelocalHub didn't just run our ads — they rebuilt our entire growth engine. Revenue tripled in 8 months."
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#D97757", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>RS</div>
                    <div>
                      <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1A1A1A" }}>Rahul Sharma</div>
                      <div style={{ fontSize: "0.75rem", color: "#6B6B6B" }}>Founder, D2C Skincare Brand</div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* IMAGE */}
              <Reveal>
                <div className="rs-image-wrap">
                  <img src={teamImg} alt="team" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.45))" }} />
                  <div style={{ position: "absolute", bottom: 24, left: 24 }}>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: 4 }}>Strategy. Execution. Results.</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.75)" }}>A team of 30+ specialists in your corner</div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT SIDE */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

              {/* CASE HIGHLIGHTS */}
              <Reveal>
                <div style={{ background: "#EBD2C1", borderRadius: 24, padding: "32px 28px", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#D97757", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 14 }}>Case Highlights</div>
                  <h3 style={{ fontSize: "1.7rem", fontWeight: 800, color: "#1A1A1A", marginBottom: 12 }}>Brands we've transformed.</h3>
                  <p style={{ fontSize: "0.95rem", color: "#6B6B6B", lineHeight: 1.8, marginBottom: 22 }}>Across industries — from startups to established enterprises.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {cases.map((c, i) => (
                      <Reveal key={i} delay={i * 80}>
                        <div className="rs-case-row">
                          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            <div style={{ width: 10, height: 10, borderRadius: "50%", background: c.dot }} />
                            <div>
                              <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A1A" }}>{c.name}</div>
                              <div style={{ fontSize: "0.78rem", color: "#6B6B6B" }}>{c.category}</div>
                            </div>
                          </div>
                          <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#D97757" }}>{c.result}</div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* PROCESS STEPS */}
              <Reveal>
                <div style={{ background: "#EBD2C1", borderRadius: 24, padding: "30px 28px", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#D97757", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 22 }}>How We Deliver Results</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {steps.map((s, i) => (
                      <Reveal key={i} delay={i * 80}>
                        <div style={{ display: "flex", gap: 16 }}>
                          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(217,119,87,0.12)", border: "1px solid rgba(217,119,87,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D97757", fontWeight: 700, flexShrink: 0 }}>
                            {s.n}
                          </div>
                          <div>
                            <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1A1A1A", marginBottom: 4 }}>{s.title}</div>
                            <div style={{ fontSize: "0.8rem", color: "#6B6B6B", lineHeight: 1.7 }}>{s.desc}</div>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>

            </div>
          </div>

          {/* BOTTOM CARDS */}
          <div className="rs-metrics-grid">
            {bottomCards.map((card, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="rs-metric-card">
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1A1A1A", marginBottom: 12, textTransform: "uppercase" }}>{card.title}</div>
                  <div style={{ fontSize: "2.8rem", fontWeight: 800, color: "#D97757", lineHeight: 1 }}>{card.metric}</div>
                  <div style={{ fontSize: "1rem", fontWeight: 600, color: "#1A1A1A", marginTop: 10 }}>{card.subtitle}</div>
                  <div style={{ fontSize: "0.8rem", color: "#6B6B6B", marginTop: 14, lineHeight: 1.7 }}>{card.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}