

// import teamImg from "../assets/team.jpg";

// export default function ResultsSection() {
//   const stats = [
//    { 
//   num: "4.4", 
//   suffix: "×",   
//   label: "ROAS on Meta & Google ads\nfor D2C food brands",     
//   fill: 92 
// },
// { 
//   num: "+340", 
//   suffix: "%",  
//   label: "Organic traffic growth\nfor lifestyle & D2C brands",     
//   fill: 88 
// },
//     { num: "98",  suffix: "%",   label: "Client retention rate\nyear over year",        fill: 98 },
//   ];

//   const cases = [
//     { dot: "#D97757", name: "D2C Fashion Brand", category: "AI Marketing + Ads",        result: "4.2× ROAS"     },
//     { dot: "#1A1A1A", name: "SaaS Startup",       category: "Brand Identity + SEO",      result: "+340% Traffic" },
//     { dot: "#D97757", name: "Local F&B Chain",    category: "Social + Content Strategy", result: "2.9× Revenue"  },
//   ];

//   const steps = [
//     { n: "1", title: "Deep Brand Audit",    desc: "Full analysis of your market, audience & gaps"    },
//     { n: "2", title: "AI-Powered Strategy", desc: "Custom growth plan built by data, not guesswork"  },
//     { n: "3", title: "Execute & Optimise",  desc: "Live campaigns refined weekly for peak ROI"       },
//     { n: "4", title: "Scale & Compound",    desc: "Growth systems that get stronger every month"     },
//   ];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
//         .rs { font-family: 'Poppins', sans-serif; }
//         .rs-cta-primary  { display:inline-flex;align-items:center;gap:8px;background:#1A1A1A;color:#fff;border-radius:999px;padding:13px 30px;font-family:'Poppins',sans-serif;font-size:0.875rem;font-weight:600;text-decoration:none;transition:background 0.2s; }
//         .rs-cta-primary:hover  { background:#D97757; }
//         .rs-cta-secondary{ display:inline-flex;align-items:center;gap:8px;background:transparent;color:#1A1A1A;border:1.5px solid rgba(26,26,26,0.18);border-radius:999px;padding:12px 26px;font-family:'Poppins',sans-serif;font-size:0.875rem;font-weight:600;text-decoration:none; }
//         .rs-case-row { display:flex;align-items:center;justify-content:space-between;background:#fff;border-radius:10px;padding:12px 16px;border:1px solid rgba(26,26,26,0.07);transition:background 0.2s; }
//         .rs-case-row:hover { background:#f7f4ef; }
//         .rs-metric-card { background:#161412;border-radius:16px;padding:26px 22px;transition:transform 0.25s; }
//         .rs-metric-card:hover { transform:translateY(-3px); }

//         /* Top two-column grid */
//         .rs-top-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 12px;
//         }

//         /* Stats row inside dark panel */
//         .rs-stats-row {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//         }

//         /* Bottom metrics grid */
//         .rs-metrics-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 12px;
//           margin-top: 12px;
//         }

//         /* CTA row */
//         .rs-cta-row {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 14px;
//           margin-top: 44px;
//           flex-wrap: wrap;
//         }

//         /* ── TABLET (≤900px) ── */
//         @media (max-width: 900px) {
//           .rs-top-grid {
//             grid-template-columns: 1fr;
//           }
//           .rs-metrics-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         /* ── MOBILE (≤600px) ── */
//         @media (max-width: 600px) {
//           .rs-stats-row {
//             grid-template-columns: 1fr;
//           }
//           .rs-stats-row > div {
//             border-right: none !important;
//             border-bottom: 1px solid rgba(255,255,255,0.06);
//           }
//           .rs-stats-row > div:last-child {
//             border-bottom: none;
//           }
//           .rs-metrics-grid {
//             grid-template-columns: 1fr 1fr;
//           }
//           .rs-cta-row {
//             flex-direction: column;
//           }
//           .rs-cta-row a {
//             width: 100%;
//             text-align: center;
//             justify-content: center;
//           }
//         }
//       `}</style>

//       <section className="rs" style={{ width:"100%", background:"#F5F0E8", padding:"88px 20px 80px", boxSizing:"border-box" }}>
//         <div style={{ maxWidth:1260, margin:"0 auto" }}>

//           {/* HEADER */}
//           <div style={{ textAlign:"center", marginBottom:52 }}>
//             <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(217,119,87,0.10)", border:"1px solid rgba(217,119,87,0.25)", borderRadius:999, padding:"6px 18px", marginBottom:18 }}>
//               <span style={{ width:6, height:6, borderRadius:"50%", background:"#D97757", flexShrink:0 }}/>
//               <span style={{ fontSize:11, fontWeight:700, color:"#D97757", letterSpacing:"0.14em", textTransform:"uppercase" }}>Results</span>
//             </div>
//             <h2 style={{ fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:800, color:"#1A1A1A", lineHeight:1.1, letterSpacing:"0.02em", margin:"0 0 14px" }}>
//               Numbers that don't need <br/>
//               <span style={{ color:"#D97757" }}>explanation.</span>
//             </h2>
//             <p style={{ color:"#8C8C8C", fontSize:"1rem", maxWidth:460, margin:"0 auto", lineHeight:1.75 }}>
//               Real outcomes from real brands — across AI marketing, branding, and performance growth.
//             </p>
//           </div>

//           {/* TOP GRID */}
//           <div className="rs-top-grid">

//             {/* LEFT — dark panel */}
//             <div style={{ background:"#161412", borderRadius:20, overflow:"hidden", display:"flex", flexDirection:"column" }}>

//               {/* Stats */}
//               <div className="rs-stats-row">
//                 {stats.map((s,i) => (
//                   <div key={i} style={{ padding:"34px 22px", borderRight: i<2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
//                     <div style={{ fontSize:"2.6rem", fontWeight:800, color:"#fff", letterSpacing:"-0.04em", lineHeight:1 }}>
//                       {s.num}<span style={{ color:"#D97757" }}>{s.suffix}</span>
//                     </div>
//                     <div style={{ fontSize:"0.73rem", color:"rgba(255,255,255,0.38)", fontWeight:500, lineHeight:1.55, marginTop:8, whiteSpace:"pre-line" }}>
//                       {s.label}
//                     </div>
//                     <div style={{ height:3, background:"rgba(255,255,255,0.07)", borderRadius:99, marginTop:14, overflow:"hidden" }}>
//                       <div style={{ height:"100%", width:`${s.fill}%`, background:"#D97757", borderRadius:99 }}/>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Quote */}
//               <div style={{ padding:"28px 28px 24px", borderTop:"1px solid rgba(255,255,255,0.06)", display:"flex", gap:16, alignItems:"flex-start" }}>
//                 <div style={{ fontSize:"3.2rem", color:"#D97757", lineHeight:0.8, fontFamily:"Georgia,serif", flexShrink:0, marginTop:6 }}>"</div>
//                 <div>
//                   <p style={{ fontSize:"0.88rem", color:"rgba(255,255,255,0.72)", lineHeight:1.75, fontStyle:"italic", margin:0 }}>
//                     ThelocalHub didn't just run our ads — they rebuilt our entire growth engine. Revenue tripled in 8 months. We haven't looked back.
//                   </p>
//                   <div style={{ marginTop:14, display:"flex", alignItems:"center", gap:10 }}>
//                     <div style={{ width:34, height:34, borderRadius:"50%", background:"linear-gradient(135deg,#D97757,#C05A32)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:800, color:"#fff", flexShrink:0 }}>RS</div>
//                     <div>
//                       <div style={{ fontSize:"0.8rem", fontWeight:700, color:"#fff" }}>Rahul Sharma</div>
//                       <div style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.35)" }}>Founder, D2C Skincare Brand</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Team image */}
//               <div style={{ position:"relative", flex:1, minHeight:180, overflow:"hidden" }}>
//                 <img
//                   src={teamImg}
//                   alt="Team at work"
//                   style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block", minHeight:180 }}
//                 />
//                 <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(22,20,18,0.72) 0%, rgba(22,20,18,0.1) 40%, rgba(22,20,18,0.55) 100%)", pointerEvents:"none" }}/>
//                 <div style={{ position:"absolute", top:14, right:16, background:"rgba(217,119,87,0.88)", backdropFilter:"blur(8px)", borderRadius:8, padding:"5px 12px", fontSize:9.5, fontWeight:700, color:"#fff", letterSpacing:"0.08em", textTransform:"uppercase" }}>
//                   Our Team
//                 </div>
//                 <div style={{ position:"absolute", bottom:18, left:22 }}>
//                   <div style={{ fontSize:"0.88rem", fontWeight:700, color:"#fff", marginBottom:3 }}>Strategy. Execution. Results.</div>
//                   <div style={{ fontSize:"0.72rem", color:"rgba(255,255,255,0.5)" }}>A team of 30+ specialists in your corner</div>
//                 </div>
//               </div>

//             </div>

//             {/* RIGHT col */}
//             <div style={{ display:"flex", flexDirection:"column", gap:12 }}>

//               {/* Case highlights */}
//               <div style={{ background:"#EDE8D9", borderRadius:20, padding:"32px 28px" }}>
  
//   <div style={{ 
//     fontSize:11, 
//     fontWeight:800, 
//     color:"#D97757", 
//     letterSpacing:"0.18em", 
//     textTransform:"uppercase", 
//     marginBottom:12 
//   }}>
//     ✦ Case Highlights
//   </div>

//   <h3 style={{ 
//     fontSize:"1.6rem", 
//     fontWeight:800, 
//     color:"#1A1A1A", 
//     letterSpacing:"-0.03em", 
//     marginBottom:10, 
//     lineHeight:1.2 
//   }}>
//     Brands we've transformed.
//   </h3>

//   <p style={{ 
//     fontSize:"0.95rem", 
//     color:"#8C8C8C", 
//     lineHeight:1.8, 
//     marginBottom:22,
//     letterSpacing:"0.02em"
//   }}>
//     Across industries — from bootstrapped startups to established enterprises.
//   </p>

//   <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
//     {cases.map((c,i) => (
//       <div key={i} className="rs-case-row">
        
//         <div style={{ display:"flex", alignItems:"center", gap:12 }}>
//           <div style={{ width:9, height:9, borderRadius:"50%", background:c.dot, flexShrink:0 }} />

//           <div>
//             <div style={{ 
//               fontSize:"0.95rem", 
//               fontWeight:700, 
//               color:"#1A1A1A",
//               letterSpacing:"0.02em"
//             }}>
//               {c.name}
//             </div>

//             <div style={{ 
//               fontSize:"0.8rem", 
//               color:"#8C8C8C",
//               letterSpacing:"0.02em"
//             }}>
//               {c.category}
//             </div>
//           </div>
//         </div>

//         <div style={{ 
//           fontSize:"0.95rem", 
//           fontWeight:800, 
//           color:"#D97757",
//           letterSpacing:"0.02em"
//         }}>
//           {c.result}
//         </div>

//       </div>
//     ))}
//   </div>

// </div>

//               {/* Process steps */}
//               <div style={{ background:"#161412", borderRadius:20, padding:"28px 26px", flex:1 }}>
  
//   <div style={{ 
//     fontSize:11, 
//     fontWeight:800, 
//     color:"rgba(255,255,255,0.35)", 
//     letterSpacing:"0.18em", 
//     textTransform:"uppercase", 
//     marginBottom:20 
//   }}>
//     How We Deliver Results
//   </div>

//   <div style={{ display:"flex", flexDirection:"column" }}>
//     {steps.map((s,i) => (
//       <div 
//         key={i} 
//         style={{ 
//           display:"flex", 
//           gap:16, 
//           alignItems:"flex-start", 
//           paddingBottom: i < steps.length - 1 ? 22 : 0 
//         }}
//       >
        
//         {/* Step number + line */}
//         <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
          
//           <div style={{ 
//             width:34, 
//             height:34, 
//             borderRadius:"50%", 
//             background:"rgba(217,119,87,0.18)", 
//             border:"1px solid rgba(217,119,87,0.35)", 
//             display:"flex", 
//             alignItems:"center", 
//             justifyContent:"center", 
//             fontSize:12, 
//             fontWeight:800, 
//             color:"#D97757",
//             letterSpacing:"0.02em"
//           }}>
//             {s.n}
//           </div>

//           {i < steps.length - 1 && (
//             <div style={{ 
//               width:1, 
//               flex:1, 
//               background:"rgba(255,255,255,0.08)", 
//               marginTop:6, 
//               minHeight:26 
//             }} />
//           )}

//         </div>

//         {/* Text content */}
//         <div style={{ paddingTop:2 }}>
          
//           <div style={{ 
//             fontSize:"0.95rem", 
//             fontWeight:700, 
//             color:"#fff", 
//             marginBottom:4,
//             letterSpacing:"0.02em"
//           }}>
//             {s.title}
//           </div>

//           <div style={{ 
//             fontSize:"0.8rem", 
//             color:"rgba(255,255,255,0.45)", 
//             lineHeight:1.6,
//             letterSpacing:"0.02em"
//           }}>
//             {s.desc}
//           </div>

//         </div>

//       </div>
//     ))}
//   </div>

// </div>
//             </div>
//           </div>

//  {/* BOTTOM 3 CASE CARDS */}
// <div className="rs-metrics-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
  
//   {/* Card 1 */}
//   <div className="rs-metric-card">
    
//     <div style={{ 
//       fontSize: "1rem", 
//       fontWeight: 700, 
//       color: "#fff", 
//       marginBottom: 10,
//       letterSpacing: "0.08em",
//       textTransform: "uppercase"
//     }}>
//       D2C Fashion
//     </div>

//     <div style={{ 
//       fontSize: "2.6rem", 
//       fontWeight: 800, 
//       color: "#D97757", 
//       letterSpacing: "-0.02em", 
//       lineHeight: 1 
//     }}>
//       2.1×
//     </div>

//     <div style={{ 
//       fontSize: "0.95rem", 
//       fontWeight: 600, 
//       color: "#fff", 
//       marginTop: 8,
//       letterSpacing: "0.02em"
//     }}>
//       revenue in 4 months
//     </div>

//     <div style={{ 
//       fontSize: "0.8rem", 
//       color: "rgba(255,255,255,0.45)", 
//       marginTop: 12, 
//       lineHeight: 1.6,
//       letterSpacing: "0.02em"
//     }}>
//       Performance marketing + Shopify rebuild + brand refresh
//     </div>
//   </div>

//   {/* Card 2 */}
//   <div className="rs-metric-card">
    
//     <div style={{ 
//       fontSize: "1rem", 
//       fontWeight: 700, 
//       color: "#fff", 
//       marginBottom: 10,
//       letterSpacing: "0.08em",
//       textTransform: "uppercase"
//     }}>
//       Home & Lifestyle
//     </div>

//     <div style={{ 
//       fontSize: "2.6rem", 
//       fontWeight: 800, 
//       color: "#D97757", 
//       letterSpacing: "-0.02em", 
//       lineHeight: 1 
//     }}>
//       +340%
//     </div>

//     <div style={{ 
//       fontSize: "0.95rem", 
//       fontWeight: 600, 
//       color: "#fff", 
//       marginTop: 8,
//       letterSpacing: "0.02em"
//     }}>
//       organic traffic in 6 months
//     </div>

//     <div style={{ 
//       fontSize: "0.8rem", 
//       color: "rgba(255,255,255,0.45)", 
//       marginTop: 12, 
//       lineHeight: 1.6,
//       letterSpacing: "0.02em"
//     }}>
//       SEO + AEO + content marketing overhaul
//     </div>
//   </div>

//   {/* Card 3 */}
//   <div className="rs-metric-card">
    
//     <div style={{ 
//       fontSize: "1rem", 
//       fontWeight: 700, 
//       color: "#fff", 
//       marginBottom: 10,
//       letterSpacing: "0.08em",
//       textTransform: "uppercase"
//     }}>
//       D2C Food Brand
//     </div>

//     <div style={{ 
//       fontSize: "2.6rem", 
//       fontWeight: 800, 
//       color: "#D97757", 
//       letterSpacing: "-0.02em", 
//       lineHeight: 1 
//     }}>
//       4.4×
//     </div>

//     <div style={{ 
//       fontSize: "0.95rem", 
//       fontWeight: 600, 
//       color: "#fff", 
//       marginTop: 8,
//       letterSpacing: "0.02em"
//     }}>
//       ROAS on Meta & Google
//     </div>

//     <div style={{ 
//       fontSize: "0.8rem", 
//       color: "rgba(255,255,255,0.45)", 
//       marginTop: 12, 
//       lineHeight: 1.6,
//       letterSpacing: "0.02em"
//     }}>
//       Full-funnel ad strategy + landing page CRO
//     </div>
//   </div>

// </div>

//           {/* CTA */}
//           {/* <div className="rs-cta-row">
//             <a href="#" className="rs-cta-primary">See all case studies →</a>
//             <a href="#" className="rs-cta-secondary">Book a free strategy call</a>
//           </div> */}

//         </div>
//       </section>
//     </>
//   );
// }

import teamImg from "../assets/team.jpg";

export default function ResultsSection() {
  const stats = [
    {
      num: "4.4",
      suffix: "×",
      label: "ROAS on Meta & Google ads\nfor D2C food brands",
      fill: 92,
    },
    {
      num: "+340",
      suffix: "%",
      label: "Organic traffic growth\nfor lifestyle & D2C brands",
      fill: 88,
    },
    {
      num: "98",
      suffix: "%",
      label: "Client retention rate\nyear over year",
      fill: 98,
    },
  ];

  const cases = [
    {
      dot: "#D97757",
      name: "D2C Fashion Brand",
      category: "AI Marketing + Ads",
      result: "4.2× ROAS",
    },
    {
      dot: "#1A1A1A",
      name: "SaaS Startup",
      category: "Brand Identity + SEO",
      result: "+340% Traffic",
    },
    {
      dot: "#D97757",
      name: "Local F&B Chain",
      category: "Social + Content Strategy",
      result: "2.9× Revenue",
    },
  ];

  const steps = [
    {
      n: "1",
      title: "Deep Brand Audit",
      desc: "Full analysis of your market, audience & gaps",
    },
    {
      n: "2",
      title: "AI-Powered Strategy",
      desc: "Custom growth plan built by data, not guesswork",
    },
    {
      n: "3",
      title: "Execute & Optimise",
      desc: "Live campaigns refined weekly for peak ROI",
    },
    {
      n: "4",
      title: "Scale & Compound",
      desc: "Growth systems that get stronger every month",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .rs {
          font-family: 'Poppins', sans-serif;
        }

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

        .rs-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .rs-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 18px;
        }

        .rs-case-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FAF7F2;
          border-radius: 14px;
          padding: 14px 16px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .rs-case-row:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(217,119,87,0.08);
        }

        .rs-metric-card {
          background: #EBD2C1;
          border-radius: 20px;
          padding: 28px 24px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          transition: all 0.3s ease;
        }

        .rs-metric-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 40px rgba(217,119,87,0.12);
        }

        .rs-image-wrap {
          position: relative;
          flex: 1;
          min-height: 320px;
          overflow: hidden;
          margin-top: auto;
        }

        .rs-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 900px) {
          .rs-top-grid {
            grid-template-columns: 1fr;
          }

          .rs-metrics-grid {
            grid-template-columns: 1fr;
          }

          .rs-image-wrap {
            min-height: 260px;
          }
        }

        @media (max-width: 600px) {
          .rs-stats-row {
            grid-template-columns: 1fr;
          }

          .rs-stats-row > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(0,0,0,0.05);
          }

          .rs-stats-row > div:last-child {
            border-bottom: none;
          }
        }
      `}</style>

      <section
        className="rs"
        style={{
          width: "100%",
          background: "#F5F0E8",
          padding: "90px 20px 80px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: 1260, margin: "0 auto" }}>
          
          {/* HEADER */}
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(217,119,87,0.10)",
                border: "1px solid rgba(217,119,87,0.25)",
                borderRadius: 999,
                padding: "6px 18px",
                marginBottom: 18,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#D97757",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#D97757",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Results
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem,4vw,3.2rem)",
                fontWeight: 800,
                color: "#1A1A1A",
                lineHeight: 1.1,
                margin: "0 0 14px",
              }}
            >
              Numbers that don't need <br />
              <span style={{ color: "#D97757" }}>explanation.</span>
            </h2>

            <p
              style={{
                color: "#8C8C8C",
                fontSize: "1rem",
                maxWidth: 460,
                margin: "0 auto",
                lineHeight: 1.75,
              }}
            >
              Real outcomes from real brands — across AI marketing,
              branding, and performance growth.
            </p>
          </div>

          {/* TOP GRID */}
          <div className="rs-top-grid">

            {/* LEFT PANEL */}
            <div className="rs-left-panel">

              {/* STATS */}
              <div className="rs-stats-row">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "34px 24px",
                      borderRight:
                        i < 2
                          ? "1px solid rgba(0,0,0,0.05)"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "2.7rem",
                        fontWeight: 800,
                        color: "#1A1A1A",
                        lineHeight: 1,
                      }}
                    >
                      {s.num}
                      <span style={{ color: "#D97757" }}>
                        {s.suffix}
                      </span>
                    </div>

                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#6B6B6B",
                        lineHeight: 1.7,
                        marginTop: 10,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {s.label}
                    </div>

                    <div
                      style={{
                        height: 4,
                        background: "rgba(0,0,0,0.08)",
                        borderRadius: 999,
                        marginTop: 14,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${s.fill}%`,
                          height: "100%",
                          background: "#D97757",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* QUOTE */}
              <div
                style={{
                  padding: "30px 28px",
                  borderTop: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.9,
                    color: "#5F5F5F",
                    fontStyle: "italic",
                    marginBottom: 20,
                  }}
                >
                  “ThelocalHub didn't just run our ads — they rebuilt
                  our entire growth engine. Revenue tripled in 8 months.”
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "#D97757",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    RS
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "#1A1A1A",
                      }}
                    >
                      Rahul Sharma
                    </div>

                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#6B6B6B",
                      }}
                    >
                      Founder, D2C Skincare Brand
                    </div>
                  </div>
                </div>
              </div>

              {/* IMAGE */}
              <div className="rs-image-wrap">
                <img src={teamImg} alt="team" />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.45))",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: 24,
                    left: 24,
                  }}
                >
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 4,
                    }}
                  >
                    Strategy. Execution. Results.
                  </div>

                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    A team of 30+ specialists in your corner
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

              {/* CASE HIGHLIGHTS */}
              <div
                style={{
                  background: "#EBD2C1",
                  borderRadius: 24,
                  padding: "32px 28px",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#D97757",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    marginBottom: 14,
                  }}
                >
                  Case Highlights
                </div>

                <h3
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: 800,
                    color: "#1A1A1A",
                    marginBottom: 12,
                  }}
                >
                  Brands we've transformed.
                </h3>

                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#6B6B6B",
                    lineHeight: 1.8,
                    marginBottom: 22,
                  }}
                >
                  Across industries — from startups to established
                  enterprises.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {cases.map((c, i) => (
                    <div key={i} className="rs-case-row">
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: c.dot,
                          }}
                        />

                        <div>
                          <div
                            style={{
                              fontSize: "0.92rem",
                              fontWeight: 700,
                              color: "#1A1A1A",
                            }}
                          >
                            {c.name}
                          </div>

                          <div
                            style={{
                              fontSize: "0.78rem",
                              color: "#6B6B6B",
                            }}
                          >
                            {c.category}
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          fontSize: "0.92rem",
                          fontWeight: 800,
                          color: "#D97757",
                        }}
                      >
                        {c.result}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PROCESS */}
              <div
                style={{
                  background: "#EBD2C1",
                  borderRadius: 24,
                  padding: "30px 28px",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#D97757",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    marginBottom: 22,
                  }}
                >
                  How We Deliver Results
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {steps.map((s, i) => (
                    <div key={i} style={{ display: "flex", gap: 16 }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          background: "rgba(217,119,87,0.12)",
                          border: "1px solid rgba(217,119,87,0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#D97757",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {s.n}
                      </div>

                      <div>
                        <div
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: 700,
                            color: "#1A1A1A",
                            marginBottom: 4,
                          }}
                        >
                          {s.title}
                        </div>

                        <div
                          style={{
                            fontSize: "0.8rem",
                            color: "#6B6B6B",
                            lineHeight: 1.7,
                          }}
                        >
                          {s.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* BOTTOM CARDS */}
          <div className="rs-metrics-grid">
            {[
              {
                title: "D2C Fashion",
                metric: "2.1×",
                subtitle: "revenue in 4 months",
                desc: "Performance marketing + Shopify rebuild + brand refresh",
              },
              {
                title: "Home & Lifestyle",
                metric: "+340%",
                subtitle: "organic traffic in 6 months",
                desc: "SEO + AEO + content marketing overhaul",
              },
              {
                title: "D2C Food Brand",
                metric: "4.4×",
                subtitle: "ROAS on Meta & Google",
                desc: "Full-funnel ad strategy + landing page CRO",
              },
            ].map((card, i) => (
              <div key={i} className="rs-metric-card">

                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    marginBottom: 12,
                    textTransform: "uppercase",
                  }}
                >
                  {card.title}
                </div>

                <div
                  style={{
                    fontSize: "2.8rem",
                    fontWeight: 800,
                    color: "#D97757",
                    lineHeight: 1,
                  }}
                >
                  {card.metric}
                </div>

                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#1A1A1A",
                    marginTop: 10,
                  }}
                >
                  {card.subtitle}
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#6B6B6B",
                    marginTop: 14,
                    lineHeight: 1.7,
                  }}
                >
                  {card.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}