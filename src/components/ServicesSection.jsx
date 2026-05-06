// // import { useState } from "react";

// // /* ─── Folder mockup for "One place" card ─── */
// // function ProjectMockup() {
// //   return (
// //     <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 22px 22px", display: "flex", gap: 10, alignItems: "flex-end" }}>
// //       <div style={{ flex: 1, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 8px 24px rgba(0,0,0,0.5)" }}>
// //         <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&q=80" alt="Brand Project" style={{ width: "100%", height: 110, objectFit: "cover", display: "block" }} />
// //         <div style={{ padding: "6px 10px", background: "rgba(0,0,0,0.3)" }}>
// //           <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Brand Project</span>
// //         </div>
// //       </div>
// //       <div style={{ width: 100, flexShrink: 0, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 8px 24px rgba(0,0,0,0.5)", marginRight: -36 }}>
// //         <img src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=300&q=80" alt="Campaign Assets" style={{ width: "100%", height: 110, objectFit: "cover", display: "block" }} />
// //         <div style={{ padding: "6px 10px", background: "rgba(0,0,0,0.3)" }}>
// //           <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Campaign Assets</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ─── Launch mockup for "Go live" card ─── */
// // function LaunchMockup() {
// //   return (
// //     <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
// //       <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.65 }} />
// //       <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,30,46,0.55) 0%, rgba(8,30,46,0.1) 40%, rgba(8,30,46,0.1) 60%, rgba(8,30,46,0.92) 100%)" }} />
// //       <div style={{ position: "absolute", bottom: 26, left: "50%", transform: "translateX(-50%)", border: "2px solid #ec4899", borderRadius: 999, padding: "11px 30px", fontSize: 12, fontWeight: 800, color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap", backdropFilter: "blur(10px)", background: "rgba(236,72,153,0.12)" }}>
// //         Launch Campaign
// //       </div>
// //     </div>
// //   );
// // }

// // /* ─────────────────────────────────────────────────────────────
// //    MAIN COMPONENT
// // ───────────────────────────────────────────────────────────── */
// // export default function ServicesSection() {
// //   const [hov, setHov] = useState(null);

// //   const h = (id) => ({
// //     transition: "transform 0.3s ease, box-shadow 0.3s ease",
// //     transform: hov === id ? "translateY(-3px) scale(1.005)" : "translateY(0) scale(1)",
// //     boxShadow: hov === id ? "0 24px 60px rgba(0,0,0,0.22)" : "none",
// //   });

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
// //         .svc { font-family: 'Poppins', sans-serif; }
// //         .svc-tag { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; margin: 0 0 14px; display: block; }
// //         .svc-h3 { font-weight: 800; line-height: 1.18; letter-spacing: -0.025em; margin: 0 0 12px; }
// //         .svc-p  { font-size: 0.83rem; line-height: 1.75; margin: 0; }
// //         .filter-tab { padding: 6px 14px; border-radius: 999px; font-size: 10px; font-weight: 700; cursor: pointer; }
// //         .tool-row { display: flex; align-items: center; gap: 10px; padding: 9px 12px; border-radius: 9px; cursor: pointer; transition: background 0.2s; }
// //         .tool-row:hover { background: rgba(217,119,87,0.08); }
// //       `}</style>

// //       <section className="svc" style={{ width: "100%", background: "#F5F0E8", padding: "88px 20px 80px", boxSizing: "border-box" }}>
// //         <div style={{ maxWidth: 1260, margin: "0 auto" }}>

// //           {/* ── SECTION HEADER ── */}
// //           <div style={{ textAlign: "center", marginBottom: 52 }}>
// //             <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(217,119,87,0.10)", border: "1px solid rgba(217,119,87,0.25)", borderRadius: 999, padding: "6px 18px", marginBottom: 18 }}>
// //               <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D97757", flexShrink: 0 }} />
// //               <span style={{ fontSize: 11, fontWeight: 700, color: "#D97757", letterSpacing: "0.14em", textTransform: "uppercase" }}>Services</span>
// //             </div>
// //             <h2 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 14px" }}>
// //               Everything your brand needs<br />
// //               <span style={{ color: "#D97757" }}>in one place.</span>
// //             </h2>
// //             <p style={{ color: "#8C8C8C", fontSize: "1rem", maxWidth: 440, margin: "0 auto", lineHeight: 1.75 }}>
// //               AI, branding, growth, content — thirty-plus capabilities. Zero agency-hopping. Open what you need and get results.
// //             </p>
// //           </div>

// //           {/* ── BENTO GRID ── */}
// //           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "auto auto", gap: 12 }}>

// //             {/* ── CARD A ── */}
// //             <div
// //               onMouseEnter={() => setHov("a")} onMouseLeave={() => setHov(null)}
// //               style={{ gridColumn: "1/2", gridRow: "1/2", background: "#D8CFC2", borderRadius: 16, padding: "32px 26px", display: "flex", flexDirection: "column", ...h("a") }}
// //             >
// //               <span className="svc-tag" style={{ color: "#D97757" }}>✦ All-in-one</span>
// //               <h3 className="svc-h3" style={{ fontSize: "1.4rem", color: "#1A1A1A", marginBottom: 10 }}>
// //                 Every tool,<br />ready to go.
// //               </h3>
// //               <p className="svc-p" style={{ color: "#5A5A5A", marginBottom: 22, flex: 1 }}>
// //                 AI, video, branding, growth — all under one roof. No setup, no switching. Open what you need, make what you want.
// //               </p>
// //               <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
// //                 {[
// //                   { dot: "#D97757", label: "AI Marketing Automation" },
// //                   { dot: "#1A1A1A", label: "Brand Identity & Design" },
// //                   { dot: "#1A1A1A", label: "Performance Growth Ads" },
// //                   { dot: "#1A1A1A", label: "Analytics & Reporting" },
// //                 ].map(t => (
// //                   <div key={t.label} className="tool-row">
// //                     <span style={{ width: 7, height: 7, borderRadius: "50%", background: t.dot, flexShrink: 0 }} />
// //                     <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#1A1A1A" }}>{t.label}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* ══════════════════════════════════════════════════════
// //                 CARD B — AI Canvas REDESIGNED
// //                 Left: full text + feature pills
// //                 Right: full-height image, no bottom line
// //             ══════════════════════════════════════════════════════ */}
// //             <div
// //               onMouseEnter={() => setHov("b")} onMouseLeave={() => setHov(null)}
// //               style={{
// //                 gridColumn: "2/4", gridRow: "1/2",
// //                 background: "#0c0a1a", borderRadius: 16,
// //                 overflow: "hidden", position: "relative",
// //                 display: "flex",           /* row layout */
// //                 minHeight: 300,
// //                 ...h("b")
// //               }}
// //             >
// //               {/* LEFT — text column, fills full height */}
// //               <div style={{
// //                 flex: 1,
// //                 padding: "32px 32px",
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 justifyContent: "space-between",
// //                 position: "relative",
// //                 zIndex: 2,
// //               }}>
// //                 <div>
// //                   <span className="svc-tag" style={{ color: "rgba(167,139,250,0.85)" }}>✦ AI-Powered</span>
// //                   <h3 className="svc-h3" style={{ fontSize: "clamp(1.3rem,2vw,1.85rem)", color: "#fff", maxWidth: 340 }}>
// //                     Your entire marketing<br />on one AI canvas.
// //                   </h3>
// //                   <p className="svc-p" style={{ color: "rgba(255,255,255,0.52)", maxWidth: 360, marginTop: 10 }}>
// //                     All your campaigns. All your content. One infinite AI workspace — build ideas, compare versions, and ship with your team, all from one dashboard. No tab-switching, no briefing back and forth. Just results, faster.
// //                   </p>
// //                 </div>

// //                 {/* Feature pills at bottom of text col */}
// //                 <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 28 }}>
// //                   {[
// //                     { label: "AI Content Engine",  bg: "rgba(99,102,241,0.15)",  border: "rgba(99,102,241,0.3)",  color: "rgba(167,139,250,0.9)"  },
// //                     { label: "Auto-Optimisation",  bg: "rgba(168,85,247,0.15)",  border: "rgba(168,85,247,0.3)",  color: "rgba(192,132,252,0.9)"  },
// //                     { label: "Campaign Manager",   bg: "rgba(236,72,153,0.15)",  border: "rgba(236,72,153,0.3)",  color: "rgba(249,168,212,0.9)"  },
// //                   ].map(pill => (
// //                     <span key={pill.label} style={{
// //                       background: pill.bg,
// //                       border: `1px solid ${pill.border}`,
// //                       borderRadius: 999,
// //                       padding: "5px 14px",
// //                       fontSize: 10,
// //                       fontWeight: 700,
// //                       color: pill.color,
// //                       letterSpacing: "0.06em",
// //                     }}>
// //                       {pill.label}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* RIGHT — full-height image, no bottom SVG line */}
// //               <div style={{ width: 260, flexShrink: 0, position: "relative" }}>

// //                 {/* Node dot — top-left of image column */}
// //                 <div style={{
// //                   position: "absolute", top: 20, left: -8, zIndex: 3,
// //                   width: 16, height: 16, borderRadius: "50%",
// //                   background: "#6366f1", border: "2px solid #0c0a1a",
// //                   boxShadow: "0 0 10px rgba(99,102,241,0.8)"
// //                 }} />

// //                 {/* Image — covers full right column height */}
// //                 <img
// //                   src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&q=80"
// //                   alt="AI Canvas"
// //                   style={{
// //                     width: "100%",
// //                     height: "100%",
// //                     objectFit: "cover",
// //                     objectPosition: "center",
// //                     display: "block",
// //                   }}
// //                 />
                
// //               </div>

// //             </div>
// //             {/* ══════════════════════════════════════════════════════ */}

// //             {/* ── CARD C: Capabilities filter ── */}
// //             <div
// //               onMouseEnter={() => setHov("c")} onMouseLeave={() => setHov(null)}
// //               style={{ gridColumn: "1/2", gridRow: "2/3", background: "#fff", borderRadius: 16, padding: "26px 22px", display: "flex", flexDirection: "column", ...h("c") }}
// //             >
// //               <div style={{ display: "flex", gap: 6, marginBottom: 18, flexWrap: "wrap" }}>
// //                 {[["ALL", true], ["BRAND", false], ["ADS", false], ["SEO", false]].map(([t, active]) => (
// //                   <span key={t} className="filter-tab" style={{
// //                     background: active ? "#1A1A1A" : "transparent",
// //                     color: active ? "#fff" : "#8C8C8C",
// //                     border: "none",
// //                   }}>{t}</span>
// //                 ))}
// //               </div>
// //               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, flex: 1 }}>
// //                 {[
// //                   { src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&q=80", label: "Paid Social"  },
// //                   { src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&q=80", label: "Brand Design" },
// //                   { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80", label: "SEO & Growth" },
// //                   { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&q=80", label: "Campaigns"    },
// //                 ].map(item => (
// //                   <div key={item.label} style={{ position: "relative", borderRadius: 9, overflow: "hidden", aspectRatio: "1" }}>
// //                     <img src={item.src} alt={item.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
// //                     <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top,rgba(0,0,0,0.72),transparent)", padding: "18px 8px 7px" }}>
// //                       <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.8)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.label}</span>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* ── CARD D — Collaboration ── */}
// //             <div
// //               onMouseEnter={() => setHov("d")} onMouseLeave={() => setHov(null)}
// //               style={{ gridColumn: "2/3", gridRow: "2/3", background: "#3d0d1a", borderRadius: 16, padding: "30px 26px 200px", position: "relative", overflow: "hidden", ...h("d") }}
// //             >
// //               <ProjectMockup />
// //               <div style={{ position: "relative", zIndex: 1 }}>
// //                 <span className="svc-tag" style={{ color: "rgba(252,165,165,0.75)" }}>✦ Collaboration</span>
// //                 <h3 className="svc-h3" style={{ fontSize: "1.5rem", color: "#fff" }}>
// //                   One place,<br />whole team.
// //                 </h3>
// //                 <p className="svc-p" style={{ color: "rgba(255,255,255,0.48)" }}>
// //                   Organise brand assets, generated content, and live campaigns together. Your team stays in sync, your brand stays consistent.
// //                 </p>
// //               </div>
// //             </div>

// //             {/* ── CARD E: "Go live in one click" ── */}
// //             <div
// //               onMouseEnter={() => setHov("e")} onMouseLeave={() => setHov(null)}
// //               style={{ gridColumn: "3/4", gridRow: "2/3", background: "#081e2e", borderRadius: 16, position: "relative", overflow: "hidden", minHeight: 420, ...h("e") }}
// //             >
// //               <LaunchMockup />
// //               <div style={{ position: "relative", zIndex: 2, padding: "30px 26px 0" }}>
// //                 <span className="svc-tag" style={{ color: "rgba(56,189,248,0.8)" }}>✦ Automation</span>
// //                 <h3 className="svc-h3" style={{ fontSize: "1.5rem", color: "#fff" }}>
// //                   Go live<br />in one click.
// //                 </h3>
// //                 <p className="svc-p" style={{ color: "rgba(255,255,255,0.48)" }}>
// //                   Save any campaign as an app. The next time you launch, it runs itself — no brief, no back-and-forth.
// //                 </p>
// //               </div>
// //             </div>

// //           </div>

// //           {/* ── CTA ROW ── */}
// //           <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginTop: 44, flexWrap: "wrap" }}>
// //             <a href="#"
// //               style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1A1A1A", color: "#fff", borderRadius: 999, padding: "13px 30px", fontFamily: "'Poppins',sans-serif", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}
// //               onMouseEnter={e => e.currentTarget.style.background = "#D97757"}
// //               onMouseLeave={e => e.currentTarget.style.background = "#1A1A1A"}
// //             >
// //               Explore all services →
// //             </a>
// //             <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#1A1A1A", border: "1.5px solid rgba(26,26,26,0.18)", borderRadius: 999, padding: "12px 26px", fontFamily: "'Poppins',sans-serif", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>
// //               Book a free strategy call
// //             </a>
// //           </div>

// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// import { useState } from "react";

// function ProjectMockup() {
//   return (
//     <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 22px 22px", display: "flex", gap: 10, alignItems: "flex-end" }}>
//       <div style={{ flex: 1, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 8px 24px rgba(0,0,0,0.5)" }}>
//         <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&q=80" alt="Brand Project" style={{ width: "100%", height: 110, objectFit: "cover", display: "block" }} />
//         <div style={{ padding: "6px 10px", background: "rgba(0,0,0,0.3)" }}>
//           <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Brand Project</span>
//         </div>
//       </div>
//       <div style={{ width: 100, flexShrink: 0, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 8px 24px rgba(0,0,0,0.5)", marginRight: -36 }}>
//         <img src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=300&q=80" alt="Campaign Assets" style={{ width: "100%", height: 110, objectFit: "cover", display: "block" }} />
//         <div style={{ padding: "6px 10px", background: "rgba(0,0,0,0.3)" }}>
//           <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Campaign Assets</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function LaunchMockup() {
//   return (
//     <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
//       <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.65 }} />
//       <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,30,46,0.55) 0%, rgba(8,30,46,0.1) 40%, rgba(8,30,46,0.1) 60%, rgba(8,30,46,0.92) 100%)" }} />
//       <div style={{ position: "absolute", bottom: 26, left: "50%", transform: "translateX(-50%)", border: "2px solid #ec4899", borderRadius: 999, padding: "11px 30px", fontSize: 12, fontWeight: 800, color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap", backdropFilter: "blur(10px)", background: "rgba(236,72,153,0.12)" }}>
//         Launch Campaign
//       </div>
//     </div>
//   );
// }

// export default function ServicesSection() {
//   const [hov, setHov] = useState(null);

//   const h = (id) => ({
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     transform: hov === id ? "translateY(-3px) scale(1.005)" : "translateY(0) scale(1)",
//     boxShadow: hov === id ? "0 24px 60px rgba(0,0,0,0.22)" : "none",
//   });

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
//         .svc { font-family: 'Poppins', sans-serif; }
//         .svc-tag { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; margin: 0 0 14px; display: block; }
//         .svc-h3 { font-weight: 800; line-height: 1.18; letter-spacing: -0.025em; margin: 0 0 12px; }
//         .svc-p  { font-size: 0.83rem; line-height: 1.75; margin: 0; }
//         .filter-tab { padding: 6px 14px; border-radius: 999px; font-size: 10px; font-weight: 700; cursor: pointer; }
//         .tool-row { display: flex; align-items: center; gap: 10px; padding: 9px 12px; border-radius: 9px; cursor: pointer; transition: background 0.2s; }
//         .tool-row:hover { background: rgba(217,119,87,0.08); }

//         /* ── BENTO GRID ── */
//         .svc-bento {
//           display: grid;
//           grid-template-columns: 1fr 1fr 1fr;
//           grid-template-rows: auto auto;
//           gap: 12px;
//         }
//         .svc-card-a { grid-column: 1/2; grid-row: 1/2; }
//         .svc-card-b { grid-column: 2/4; grid-row: 1/2; }
//         .svc-card-c { grid-column: 1/2; grid-row: 2/3; }
//         .svc-card-d { grid-column: 2/3; grid-row: 2/3; }
//         .svc-card-e { grid-column: 3/4; grid-row: 2/3; }

//         /* Card B inner layout */
//         .svc-card-b-inner { display: flex; min-height: 300px; }
//         .svc-card-b-img   { width: 260px; flex-shrink: 0; position: relative; }

//         /* Card C grid */
//         .svc-cap-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; flex: 1; }

//         /* CTA row */
//         .svc-cta-row { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 44px; flex-wrap: wrap; }

//         /* ── TABLET (≤900px) ── */
//         @media (max-width: 900px) {
//           .svc-bento {
//             grid-template-columns: 1fr 1fr;
//             grid-template-rows: auto;
//           }
//           .svc-card-a { grid-column: 1/2; grid-row: 1/2; }
//           .svc-card-b { grid-column: 1/3; grid-row: 2/3; }
//           .svc-card-c { grid-column: 1/2; grid-row: 3/4; }
//           .svc-card-d { grid-column: 2/3; grid-row: 3/4; }
//           .svc-card-e { grid-column: 1/3; grid-row: 4/5; min-height: 300px; }
//         }

//         /* ── MOBILE (≤600px) ── */
//         @media (max-width: 600px) {
//           .svc-bento {
//             grid-template-columns: 1fr;
//             grid-template-rows: auto;
//           }
//           .svc-card-a,
//           .svc-card-b,
//           .svc-card-c,
//           .svc-card-d,
//           .svc-card-e { grid-column: 1/2 !important; grid-row: auto !important; }

//           /* Card B stacks vertically on mobile */
//           .svc-card-b-inner { flex-direction: column; min-height: unset; }
//           .svc-card-b-img   { width: 100%; height: 200px; flex-shrink: unset; }

//           /* Card D needs less bottom padding on mobile since mockup is shorter */
//           .svc-card-d { padding-bottom: 160px !important; }

//           /* Card E min-height on mobile */
//           .svc-card-e { min-height: 320px; }

//           .svc-cta-row { flex-direction: column; }
//           .svc-cta-row a { width: 100%; text-align: center; justify-content: center; }
//         }
//       `}</style>

//       <section className="svc" style={{ width: "100%", background: "#F5F0E8", padding: "88px 20px 80px", boxSizing: "border-box" }}>
//         <div style={{ maxWidth: 1260, margin: "0 auto" }}>

//           {/* ── SECTION HEADER ── */}
//           <div style={{ textAlign: "center", marginBottom: 52 }}>
//             <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(217,119,87,0.10)", border: "1px solid rgba(217,119,87,0.25)", borderRadius: 999, padding: "6px 18px", marginBottom: 18 }}>
//               <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D97757", flexShrink: 0 }} />
//               <span style={{ fontSize: 11, fontWeight: 700, color: "#D97757", letterSpacing: "0.14em", textTransform: "uppercase" }}>Services</span>
//             </div>
//             <h2 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 14px" }}>
//               Everything your brand needs<br />
//               <span style={{ color: "#D97757" }}>in one place.</span>
//             </h2>
//             <p style={{ color: "#8C8C8C", fontSize: "1rem", maxWidth: 440, margin: "0 auto", lineHeight: 1.75 }}>
//               AI, branding, growth, content — thirty-plus capabilities. Zero agency-hopping. Open what you need and get results.
//             </p>
//           </div>

//           {/* ── BENTO GRID ── */}
//           <div className="svc-bento">

//             {/* CARD A */}
//             <div
//               className="svc-card-a"
//               onMouseEnter={() => setHov("a")} onMouseLeave={() => setHov(null)}
//               style={{ background: "#D8CFC2", borderRadius: 16, padding: "32px 26px", display: "flex", flexDirection: "column", ...h("a") }}
//             >
//               <span className="svc-tag" style={{ color: "#D97757" }}>✦ All-in-one</span>
//               <h3 className="svc-h3" style={{ fontSize: "1.4rem", color: "#1A1A1A", marginBottom: 10 }}>
//                 Every tool,<br />ready to go.
//               </h3>
//               <p className="svc-p" style={{ color: "#5A5A5A", marginBottom: 22, flex: 1 }}>
//                 AI, video, branding, growth — all under one roof. No setup, no switching. Open what you need, make what you want.
//               </p>
//               <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//                 {[
//                   { dot: "#D97757", label: "AI Marketing Automation" },
//                   { dot: "#1A1A1A", label: "Brand Identity & Design" },
//                   { dot: "#1A1A1A", label: "Performance Growth Ads" },
//                   { dot: "#1A1A1A", label: "Analytics & Reporting" },
//                 ].map(t => (
//                   <div key={t.label} className="tool-row">
//                     <span style={{ width: 7, height: 7, borderRadius: "50%", background: t.dot, flexShrink: 0 }} />
//                     <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#1A1A1A" }}>{t.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* CARD B */}
//             <div
//               className="svc-card-b"
//               onMouseEnter={() => setHov("b")} onMouseLeave={() => setHov(null)}
//               style={{ background: "#0c0a1a", borderRadius: 16, overflow: "hidden", position: "relative", ...h("b") }}
//             >
//               <div className="svc-card-b-inner">
//                 {/* LEFT — text column */}
//                 <div style={{ flex: 1, padding: "32px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", zIndex: 2 }}>
//                   <div>
//                     <span className="svc-tag" style={{ color: "rgba(167,139,250,0.85)" }}>✦ AI-Powered</span>
//                     <h3 className="svc-h3" style={{ fontSize: "clamp(1.3rem,2vw,1.85rem)", color: "#fff", maxWidth: 340 }}>
//                       Your entire marketing<br />on one AI canvas.
//                     </h3>
//                     <p className="svc-p" style={{ color: "rgba(255,255,255,0.52)", maxWidth: 360, marginTop: 10 }}>
//                       All your campaigns. All your content. One infinite AI workspace — build ideas, compare versions, and ship with your team, all from one dashboard.
//                     </p>
//                   </div>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 28 }}>
//                     {[
//                       { label: "AI Content Engine",  bg: "rgba(99,102,241,0.15)",  border: "rgba(99,102,241,0.3)",  color: "rgba(167,139,250,0.9)" },
//                       { label: "Auto-Optimisation",  bg: "rgba(168,85,247,0.15)",  border: "rgba(168,85,247,0.3)",  color: "rgba(192,132,252,0.9)" },
//                       { label: "Campaign Manager",   bg: "rgba(236,72,153,0.15)",  border: "rgba(236,72,153,0.3)",  color: "rgba(249,168,212,0.9)" },
//                     ].map(pill => (
//                       <span key={pill.label} style={{ background: pill.bg, border: `1px solid ${pill.border}`, borderRadius: 999, padding: "5px 14px", fontSize: 10, fontWeight: 700, color: pill.color, letterSpacing: "0.06em" }}>
//                         {pill.label}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* RIGHT — image */}
//                 <div className="svc-card-b-img">
//                   <div style={{ position: "absolute", top: 20, left: -8, zIndex: 3, width: 16, height: 16, borderRadius: "50%", background: "#6366f1", border: "2px solid #0c0a1a", boxShadow: "0 0 10px rgba(99,102,241,0.8)" }} />
//                   <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&q=80" alt="AI Canvas" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
//                 </div>
//               </div>
//             </div>

//             {/* CARD C */}
//             <div
//               className="svc-card-c"
//               onMouseEnter={() => setHov("c")} onMouseLeave={() => setHov(null)}
//               style={{ background: "#fff", borderRadius: 16, padding: "26px 22px", display: "flex", flexDirection: "column", ...h("c") }}
//             >
//               <div style={{ display: "flex", gap: 6, marginBottom: 18, flexWrap: "wrap" }}>
//                 {[["ALL", true], ["BRAND", false], ["ADS", false], ["SEO", false]].map(([t, active]) => (
//                   <span key={t} className="filter-tab" style={{ background: active ? "#1A1A1A" : "transparent", color: active ? "#fff" : "#8C8C8C", border: "none" }}>{t}</span>
//                 ))}
//               </div>
//               <div className="svc-cap-grid">
//                 {[
//                   { src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&q=80", label: "Paid Social"  },
//                   { src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&q=80", label: "Brand Design" },
//                   { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80", label: "SEO & Growth" },
//                   { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&q=80", label: "Campaigns"    },
//                 ].map(item => (
//                   <div key={item.label} style={{ position: "relative", borderRadius: 9, overflow: "hidden", aspectRatio: "1" }}>
//                     <img src={item.src} alt={item.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
//                     <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top,rgba(0,0,0,0.72),transparent)", padding: "18px 8px 7px" }}>
//                       <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.8)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.label}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* CARD D */}
//             <div
//               className="svc-card-d"
//               onMouseEnter={() => setHov("d")} onMouseLeave={() => setHov(null)}
//               style={{ background: "#3d0d1a", borderRadius: 16, padding: "30px 26px 200px", position: "relative", overflow: "hidden", ...h("d") }}
//             >
//               <ProjectMockup />
//               <div style={{ position: "relative", zIndex: 1 }}>
//                 <span className="svc-tag" style={{ color: "rgba(252,165,165,0.75)" }}>✦ Collaboration</span>
//                 <h3 className="svc-h3" style={{ fontSize: "1.5rem", color: "#fff" }}>
//                   One place,<br />whole team.
//                 </h3>
//                 <p className="svc-p" style={{ color: "rgba(255,255,255,0.48)" }}>
//                   Organise brand assets, generated content, and live campaigns together. Your team stays in sync, your brand stays consistent.
//                 </p>
//               </div>
//             </div>

//             {/* CARD E */}
//             <div
//               className="svc-card-e"
//               onMouseEnter={() => setHov("e")} onMouseLeave={() => setHov(null)}
//               style={{ background: "#081e2e", borderRadius: 16, position: "relative", overflow: "hidden", minHeight: 420, ...h("e") }}
//             >
//               <LaunchMockup />
//               <div style={{ position: "relative", zIndex: 2, padding: "30px 26px 0" }}>
//                 <span className="svc-tag" style={{ color: "rgba(56,189,248,0.8)" }}>✦ Automation</span>
//                 <h3 className="svc-h3" style={{ fontSize: "1.5rem", color: "#fff" }}>
//                   Go live<br />in one click.
//                 </h3>
//                 <p className="svc-p" style={{ color: "rgba(255,255,255,0.48)" }}>
//                   Save any campaign as an app. The next time you launch, it runs itself — no brief, no back-and-forth.
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* ── CTA ROW ── */}
//           <div className="svc-cta-row">
//             <a href="#"
//               style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1A1A1A", color: "#fff", borderRadius: 999, padding: "13px 30px", fontFamily: "'Poppins',sans-serif", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}
//               onMouseEnter={e => e.currentTarget.style.background = "#D97757"}
//               onMouseLeave={e => e.currentTarget.style.background = "#1A1A1A"}
//             >
//               Explore all services →
//             </a>
//             <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#1A1A1A", border: "1.5px solid rgba(26,26,26,0.18)", borderRadius: 999, padding: "12px 26px", fontFamily: "'Poppins',sans-serif", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>
//               Book a free strategy call
//             </a>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }

import { useState } from "react";

const SERVICES = [
  {
    title: "Brand Development",
    sub: "Identity & positioning",
    color: "#F5A623",
    textColor: "#fff",
    size: "tall",
    img: "../assets/branding.png",
  },
  {
    title: "Content Marketing",
    sub: "Authority at scale",
    color: "#1AB394",
    textColor: "#fff",
    size: "short",
    img: "../assets/content.png",
  },
  {
    title: "Performance Marketing",
    sub: "Paid that converts",
    color: "#111111",
    textColor: "#fff",
    size: "tall",
    img: "../assets/performance.png",
  },
  {
    title: "Online Marketing",
    sub: "Full-funnel strategy",
    color: "#4A90D9",
    textColor: "#fff",
    size: "short",
    img: "../assets/online.png",
  },
  {
    title: "E-commerce Growth",
    sub: "Shopify & WordPress",
    color: "#4A6FE3",
    textColor: "#fff",
    size: "short",
    img: "../assets/ecommerce.png",
  },
  {
    title: "Paid Marketing",
    sub: "Ads that convert",
    color: "#E8605A",
    textColor: "#fff",
    size: "tall",
    img: "../assets/paid.png",
  },
  {
    title: "SEO",
    sub: "Search dominance",
    color: "#9B51E0",
    textColor: "#fff",
    size: "short",
    img: "../assets/seo.png",
  },
  {
    title: "Social Media Marketing",
    sub: "Community & reach",
    color: "#F5C842",
    textColor: "#1A1A1A",
    size: "short",
    img: "../assets/social.png",
  },
  {
    title: "AEO",
    sub: "AI engine optimisation",
    color: "#1AB394",
    textColor: "#fff",
    size: "short",
    img: "../assets/aeo.png",
  },
];

const TOOLS = [
  { name: "Meta Ads", icon: "../assets/tools/meta.png" },
  { name: "Google Ads", icon: "../assets/tools/google.png" },
  { name: "Shopify", icon: "../assets/tools/shopify.png" },
  { name: "WordPress", icon: "../assets/tools/wordpress.png" },
  { name: "OpenAI", icon: "../assets/tools/openai.png" },
  { name: "HubSpot", icon: "../assets/tools/hubspot.png" },
  { name: "Canva Pro", icon: "../assets/tools/canva.png" },
];

function ServiceCard({ s, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: s.color,
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0",
        position: "relative",
        gridRow: s.size === "tall" ? "span 2" : "span 1",
        cursor: "pointer",
        animation: `cardUp 0.6s cubic-bezier(0.22,1,0.36,1) both`,
        animationDelay: delay,
        transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? `0 20px 48px ${s.color}55`
          : "0 2px 12px rgba(0,0,0,0.08)",
        transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease",
        minHeight: s.size === "tall" ? "320px" : "155px",
      }}
    >
      {/* Image area — top 70% */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          bottom: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 20px 0",
        }}
      >
        <img
          src={s.img}
          alt={s.title}
          style={{
            maxWidth: "80%",
            maxHeight: s.size === "tall" ? "220px" : "90px",
            objectFit: "contain",
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.35s ease",
            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))",
          }}
        />
      </div>

      {/* Text strip — bottom */}
      <div
        style={{
          background: "rgba(0,0,0,0.22)",
          backdropFilter: "blur(2px)",
          padding: "12px 18px 14px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: s.size === "tall" ? "1.05rem" : "0.88rem",
            color: s.textColor,
            lineHeight: 1.2,
          }}
        >
          {s.title}
        </div>
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "0.72rem",
            color: s.textColor === "#fff" ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.55)",
            marginTop: "2px",
          }}
        >
          {s.sub}
        </div>
      </div>
    </div>
  );
}

export default function Section5WhatWeDo() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        @keyframes cardUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .s5-tool-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 999px;
          padding: 8px 18px 8px 10px;
          font-family: 'Poppins', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          color: #1A1A1A;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          cursor: default;
        }

        .s5-tool-pill:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(217,119,87,0.18);
          border-color: #D97757;
        }

        .s5-tool-pill img {
          width: 26px;
          height: 26px;
          object-fit: contain;
          border-radius: 6px;
        }

        .s5-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 160px;
          gap: 16px;
          max-width: 1040px;
          margin: 0 auto;
        }

        @media (max-width: 900px) {
          .s5-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 140px;
          }
        }

        @media (max-width: 540px) {
          .s5-grid {
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: 130px;
          }
        }
      `}</style>

      <section
        style={{
          background: "#F5F0E8",
          padding: "88px 40px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* ── Heading (matches other sections) ── */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(217,119,87,0.1)",
              border: "1px solid rgba(217,119,87,0.2)",
              borderRadius: "999px",
              padding: "6px 14px",
              marginBottom: "20px",
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
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#D97757",
                textTransform: "uppercase",
              }}
            >
              Section 5 — What we do
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#1A1A1A",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Every lever your D2C brand <br />
            <span style={{ color: "#D97757" }}>needs to grow.</span>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              color: "#6B6B6B",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            No referrals. No hand-offs.{" "}
            <span style={{ color: "#1A1A1A", fontWeight: 600 }}>
              One team that owns the full picture.
            </span>
          </p>
        </div>

        {/* ── Service Cards Grid ── */}
        <div className="s5-grid" style={{ marginBottom: "64px" }}>
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={s.title}
              s={s}
              delay={`${i * 0.08}s`}
            />
          ))}
        </div>

        {/* ── Tools Strip ── */}
        <div
          style={{
            maxWidth: "1040px",
            margin: "0 auto",
            animation: "fadeUp 0.7s ease both",
            animationDelay: "0.5s",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#9E9E9E",
              marginBottom: "20px",
            }}
          >
            Tools we use
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            {TOOLS.map((t) => (
              <div key={t.name} className="s5-tool-pill">
                <img src={t.icon} alt={t.name} />
                {t.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}