// // ═══════════════════════════════════════════
// // VERSION A — White "Awards & Recognition"
// // card below Rahul Sharma quote
// // ═══════════════════════════════════════════
// export default function ResultsSection() {
//   const stats = [
//     { num: "3.8", suffix: "×",   label: "Average ROAS across\npaid media campaigns", fill: 76 },
//     { num: "+212", suffix: "%",  label: "Organic traffic growth\nwithin 6 months",     fill: 88 },
//     { num: "98",  suffix: "%",   label: "Client retention rate\nyear over year",        fill: 98 },
//   ];

//   const cases = [
//     { dot: "#D97757", name: "D2C Fashion Brand", category: "AI Marketing + Ads",        result: "4.2× ROAS"     },
//     { dot: "#1A1A1A", name: "SaaS Startup",       category: "Brand Identity + SEO",      result: "+340% Traffic" },
//     { dot: "#D97757", name: "Local F&B Chain",    category: "Social + Content Strategy", result: "2.9× Revenue"  },
//   ];

//   const awards = [
//     { num: "#1",   label: "Digital Agency\nNorth India 2024"        },
//     { num: "4.9★", label: "Average client\nrating (120+ reviews)"   },
//     { num: "G10",  label: "Google Partner\nPremier Badge"           },
//   ];

//   const steps = [
//     { n: "1", title: "Deep Brand Audit",    desc: "Full analysis of your market, audience & gaps"    },
//     { n: "2", title: "AI-Powered Strategy", desc: "Custom growth plan built by data, not guesswork"  },
//     { n: "3", title: "Execute & Optimise",  desc: "Live campaigns refined weekly for peak ROI"       },
//     { n: "4", title: "Scale & Compound",    desc: "Growth systems that get stronger every month"     },
//   ];

//   const metrics = [
//     { icon: "◈", val: "120",  suffix: "+",   label: "Brands grown across India & globally",           tag: "All Industries" },
//     { icon: "✦", val: "₹40",  suffix: "Cr+", label: "Ad spend managed with proven ROI",               tag: "Meta + Google"  },
//     { icon: "◉", val: "2.4",  suffix: "M+",  label: "Organic impressions generated monthly",          tag: "SEO + Social"   },
//     { icon: "▲", val: "48",   suffix: "h",   label: "Average time from brief to first campaign live",  tag: "AI-Powered"     },
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
//       `}</style>

//       <section className="rs" style={{ width:"100%", background:"#F5F0E8", padding:"88px 20px 80px", boxSizing:"border-box" }}>
//         <div style={{ maxWidth:1260, margin:"0 auto" }}>

//           {/* HEADER */}
//           <div style={{ textAlign:"center", marginBottom:52 }}>
//             <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(217,119,87,0.10)", border:"1px solid rgba(217,119,87,0.25)", borderRadius:999, padding:"6px 18px", marginBottom:18 }}>
//               <span style={{ width:6, height:6, borderRadius:"50%", background:"#D97757", flexShrink:0 }}/>
//               <span style={{ fontSize:11, fontWeight:700, color:"#D97757", letterSpacing:"0.14em", textTransform:"uppercase" }}>Results</span>
//             </div>
//             <h2 style={{ fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:800, color:"#1A1A1A", lineHeight:1.1, letterSpacing:"-0.03em", margin:"0 0 14px" }}>
//               Numbers that speak<br/>
//               <span style={{ color:"#D97757" }}>louder than promises.</span>
//             </h2>
//             <p style={{ color:"#8C8C8C", fontSize:"1rem", maxWidth:460, margin:"0 auto", lineHeight:1.75 }}>
//               Real outcomes from real brands — across AI marketing, branding, and performance growth.
//             </p>
//           </div>

//           {/* TOP GRID */}
//           <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>

//             {/* LEFT — dark panel */}
//             <div style={{ background:"#161412", borderRadius:20, overflow:"hidden", display:"flex", flexDirection:"column" }}>

//               {/* Stats */}
//               <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)" }}>
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

//               {/* ── WHITE AWARDS CARD (Version A) ── */}
//               <div style={{ margin:"0 16px 18px", background:"#EDE8D9", borderRadius:16, padding:"24px 22px" }}>
//                 <div style={{ fontSize:10, fontWeight:700, color:"#D97757", letterSpacing:"0.13em", textTransform:"uppercase", marginBottom:8 }}>✦ Awards & Recognition</div>
//                 <h4 style={{ fontSize:"1.05rem", fontWeight:800, color:"#1A1A1A", marginBottom:8, lineHeight:1.2 }}>
//                   Recognised by the<br/>industry's best.
//                 </h4>
//                 <p style={{ fontSize:"0.77rem", color:"#8C8C8C", lineHeight:1.65, marginBottom:16 }}>
//                   Top-ranked across performance, creativity and client satisfaction — three years running.
//                 </p>
//                 <div style={{ display:"flex", gap:8 }}>
//                   {awards.map((a,i) => (
//                     <div key={i} style={{ flex:1, background:"#fff", borderRadius:10, padding:"12px 10px", border:"1px solid rgba(26,26,26,0.07)" }}>
//                       <div style={{ fontSize:"1.25rem", fontWeight:800, color:"#D97757", lineHeight:1 }}>{a.num}</div>
//                       <div style={{ fontSize:"0.68rem", color:"#8C8C8C", marginTop:4, lineHeight:1.4, whiteSpace:"pre-line" }}>{a.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </div>

//             {/* RIGHT col */}
//             <div style={{ display:"flex", flexDirection:"column", gap:12 }}>

//               {/* Case highlights */}
//               <div style={{ background:"#EDE8D9", borderRadius:20, padding:"32px 28px" }}>
//                 <div style={{ fontSize:10, fontWeight:700, color:"#D97757", letterSpacing:"0.13em", textTransform:"uppercase", marginBottom:10 }}>✦ Case Highlights</div>
//                 <h3 style={{ fontSize:"1.3rem", fontWeight:800, color:"#1A1A1A", letterSpacing:"-0.02em", marginBottom:8, lineHeight:1.2 }}>
//                   Brands we've<br/>transformed.
//                 </h3>
//                 <p style={{ fontSize:"0.82rem", color:"#8C8C8C", lineHeight:1.7, marginBottom:20 }}>
//                   Across industries — from bootstrapped startups to established enterprises.
//                 </p>
//                 <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
//                   {cases.map((c,i) => (
//                     <div key={i} className="rs-case-row">
//                       <div style={{ display:"flex", alignItems:"center", gap:10 }}>
//                         <div style={{ width:8, height:8, borderRadius:"50%", background:c.dot, flexShrink:0 }}/>
//                         <div>
//                           <div style={{ fontSize:"0.8rem", fontWeight:600, color:"#1A1A1A" }}>{c.name}</div>
//                           <div style={{ fontSize:"0.7rem", color:"#8C8C8C" }}>{c.category}</div>
//                         </div>
//                       </div>
//                       <div style={{ fontSize:"0.85rem", fontWeight:800, color:"#D97757" }}>{c.result}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Process steps */}
//               <div style={{ background:"#161412", borderRadius:20, padding:"28px 26px", flex:1 }}>
//                 <div style={{ fontSize:10, fontWeight:700, color:"rgba(255,255,255,0.28)", letterSpacing:"0.13em", textTransform:"uppercase", marginBottom:18 }}>
//                   How We Deliver Results
//                 </div>
//                 <div style={{ display:"flex", flexDirection:"column" }}>
//                   {steps.map((s,i) => (
//                     <div key={i} style={{ display:"flex", gap:14, alignItems:"flex-start", paddingBottom: i<steps.length-1 ? 18 : 0 }}>
//                       <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
//                         <div style={{ width:30, height:30, borderRadius:"50%", background:"rgba(217,119,87,0.15)", border:"1px solid rgba(217,119,87,0.3)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:800, color:"#D97757" }}>
//                           {s.n}
//                         </div>
//                         {i < steps.length-1 && <div style={{ width:1, flex:1, background:"rgba(255,255,255,0.07)", marginTop:4, minHeight:22 }}/>}
//                       </div>
//                       <div style={{ paddingTop:4 }}>
//                         <div style={{ fontSize:"0.82rem", fontWeight:700, color:"#fff", marginBottom:2 }}>{s.title}</div>
//                         <div style={{ fontSize:"0.72rem", color:"rgba(255,255,255,0.38)", lineHeight:1.5 }}>{s.desc}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* BOTTOM 4 METRICS */}
//           <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginTop:12 }}>
//             {metrics.map((m,i) => (
//               <div key={i} className="rs-metric-card">
//                 <div style={{ fontSize:18, marginBottom:14, color:"#D97757" }}>{m.icon}</div>
//                 <div style={{ fontSize:"2rem", fontWeight:800, color:"#fff", letterSpacing:"-0.03em", lineHeight:1, marginBottom:4 }}>
//                   {m.val}<span style={{ color:"#D97757" }}>{m.suffix}</span>
//                 </div>
//                 <div style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.38)", lineHeight:1.55 }}>{m.label}</div>
//                 <div style={{ display:"inline-flex", alignItems:"center", gap:5, marginTop:14, background:"rgba(217,119,87,0.12)", border:"1px solid rgba(217,119,87,0.22)", borderRadius:6, padding:"3px 9px" }}>
//                   <div style={{ width:5, height:5, borderRadius:"50%", background:"#D97757" }}/>
//                   <span style={{ fontSize:9.5, fontWeight:700, color:"#D97757", letterSpacing:"0.08em", textTransform:"uppercase" }}>{m.tag}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:14, marginTop:44, flexWrap:"wrap" }}>
//             <a href="#" className="rs-cta-primary">See all case studies →</a>
//             <a href="#" className="rs-cta-secondary">Book a free strategy call</a>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }

// ═══════════════════════════════════════════
// VERSION B — Cinematic team image
// below Rahul Sharma quote
// ═══════════════════════════════════════════
import teamImg from "../assets/team.jpg";

export default function ResultsSection() {
  const stats = [
    { num: "3.8", suffix: "×",   label: "Average ROAS across\npaid media campaigns", fill: 76 },
    { num: "+212", suffix: "%",  label: "Organic traffic growth\nwithin 6 months",     fill: 88 },
    { num: "98",  suffix: "%",   label: "Client retention rate\nyear over year",        fill: 98 },
  ];

  const cases = [
    { dot: "#D97757", name: "D2C Fashion Brand", category: "AI Marketing + Ads",        result: "4.2× ROAS"     },
    { dot: "#1A1A1A", name: "SaaS Startup",       category: "Brand Identity + SEO",      result: "+340% Traffic" },
    { dot: "#D97757", name: "Local F&B Chain",    category: "Social + Content Strategy", result: "2.9× Revenue"  },
  ];

  const steps = [
    { n: "1", title: "Deep Brand Audit",    desc: "Full analysis of your market, audience & gaps"    },
    { n: "2", title: "AI-Powered Strategy", desc: "Custom growth plan built by data, not guesswork"  },
    { n: "3", title: "Execute & Optimise",  desc: "Live campaigns refined weekly for peak ROI"       },
    { n: "4", title: "Scale & Compound",    desc: "Growth systems that get stronger every month"     },
  ];

  const metrics = [
    { icon: "◈", val: "120",  suffix: "+",   label: "Brands grown across India & globally",           tag: "All Industries" },
    { icon: "✦", val: "₹40",  suffix: "Cr+", label: "Ad spend managed with proven ROI",               tag: "Meta + Google"  },
    { icon: "◉", val: "2.4",  suffix: "M+",  label: "Organic impressions generated monthly",          tag: "SEO + Social"   },
    { icon: "▲", val: "48",   suffix: "h",   label: "Average time from brief to first campaign live",  tag: "AI-Powered"     },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        .rs { font-family: 'Poppins', sans-serif; }
        .rs-cta-primary  { display:inline-flex;align-items:center;gap:8px;background:#1A1A1A;color:#fff;border-radius:999px;padding:13px 30px;font-family:'Poppins',sans-serif;font-size:0.875rem;font-weight:600;text-decoration:none;transition:background 0.2s; }
        .rs-cta-primary:hover  { background:#D97757; }
        .rs-cta-secondary{ display:inline-flex;align-items:center;gap:8px;background:transparent;color:#1A1A1A;border:1.5px solid rgba(26,26,26,0.18);border-radius:999px;padding:12px 26px;font-family:'Poppins',sans-serif;font-size:0.875rem;font-weight:600;text-decoration:none; }
        .rs-case-row { display:flex;align-items:center;justify-content:space-between;background:#fff;border-radius:10px;padding:12px 16px;border:1px solid rgba(26,26,26,0.07);transition:background 0.2s; }
        .rs-case-row:hover { background:#f7f4ef; }
        .rs-metric-card { background:#161412;border-radius:16px;padding:26px 22px;transition:transform 0.25s; }
        .rs-metric-card:hover { transform:translateY(-3px); }
      `}</style>

      <section className="rs" style={{ width:"100%", background:"#F5F0E8", padding:"88px 20px 80px", boxSizing:"border-box" }}>
        <div style={{ maxWidth:1260, margin:"0 auto" }}>

          {/* HEADER */}
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(217,119,87,0.10)", border:"1px solid rgba(217,119,87,0.25)", borderRadius:999, padding:"6px 18px", marginBottom:18 }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#D97757", flexShrink:0 }}/>
              <span style={{ fontSize:11, fontWeight:700, color:"#D97757", letterSpacing:"0.14em", textTransform:"uppercase" }}>Results</span>
            </div>
            <h2 style={{ fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:800, color:"#1A1A1A", lineHeight:1.1, letterSpacing:"-0.03em", margin:"0 0 14px" }}>
              Numbers that speak<br/>
              <span style={{ color:"#D97757" }}>louder than promises.</span>
            </h2>
            <p style={{ color:"#8C8C8C", fontSize:"1rem", maxWidth:460, margin:"0 auto", lineHeight:1.75 }}>
              Real outcomes from real brands — across AI marketing, branding, and performance growth.
            </p>
          </div>

          {/* TOP GRID */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>

            {/* LEFT — dark panel */}
            <div style={{ background:"#161412", borderRadius:20, overflow:"hidden", display:"flex", flexDirection:"column" }}>

              {/* Stats */}
              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)" }}>
                {stats.map((s,i) => (
                  <div key={i} style={{ padding:"34px 22px", borderRight: i<2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <div style={{ fontSize:"2.6rem", fontWeight:800, color:"#fff", letterSpacing:"-0.04em", lineHeight:1 }}>
                      {s.num}<span style={{ color:"#D97757" }}>{s.suffix}</span>
                    </div>
                    <div style={{ fontSize:"0.73rem", color:"rgba(255,255,255,0.38)", fontWeight:500, lineHeight:1.55, marginTop:8, whiteSpace:"pre-line" }}>
                      {s.label}
                    </div>
                    <div style={{ height:3, background:"rgba(255,255,255,0.07)", borderRadius:99, marginTop:14, overflow:"hidden" }}>
                      <div style={{ height:"100%", width:`${s.fill}%`, background:"#D97757", borderRadius:99 }}/>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div style={{ padding:"28px 28px 24px", borderTop:"1px solid rgba(255,255,255,0.06)", display:"flex", gap:16, alignItems:"flex-start" }}>
                <div style={{ fontSize:"3.2rem", color:"#D97757", lineHeight:0.8, fontFamily:"Georgia,serif", flexShrink:0, marginTop:6 }}>"</div>
                <div>
                  <p style={{ fontSize:"0.88rem", color:"rgba(255,255,255,0.72)", lineHeight:1.75, fontStyle:"italic", margin:0 }}>
                    ThelocalHub didn't just run our ads — they rebuilt our entire growth engine. Revenue tripled in 8 months. We haven't looked back.
                  </p>
                  <div style={{ marginTop:14, display:"flex", alignItems:"center", gap:10 }}>
                    <div style={{ width:34, height:34, borderRadius:"50%", background:"linear-gradient(135deg,#D97757,#C05A32)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:800, color:"#fff", flexShrink:0 }}>RS</div>
                    <div>
                      <div style={{ fontSize:"0.8rem", fontWeight:700, color:"#fff" }}>Rahul Sharma</div>
                      <div style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.35)" }}>Founder, D2C Skincare Brand</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── CINEMATIC IMAGE (Version B) ── */}
              <div style={{ position:"relative", flex:1, minHeight:180, overflow:"hidden" }}>
                <img
                  src={teamImg} 
                  alt="Team at work"
                  style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block", minHeight:180 }}
                />
                {/* dark overlay top — blends with dark card above */}
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(22,20,18,0.72) 0%, rgba(22,20,18,0.1) 40%, rgba(22,20,18,0.55) 100%)", pointerEvents:"none" }}/>
                {/* badge */}
                <div style={{ position:"absolute", top:14, right:16, background:"rgba(217,119,87,0.88)", backdropFilter:"blur(8px)", borderRadius:8, padding:"5px 12px", fontSize:9.5, fontWeight:700, color:"#fff", letterSpacing:"0.08em", textTransform:"uppercase" }}>
                  Our Team
                </div>
                {/* bottom caption */}
                <div style={{ position:"absolute", bottom:18, left:22 }}>
                  <div style={{ fontSize:"0.88rem", fontWeight:700, color:"#fff", marginBottom:3 }}>Strategy. Execution. Results.</div>
                  <div style={{ fontSize:"0.72rem", color:"rgba(255,255,255,0.5)" }}>A team of 30+ specialists in your corner</div>
                </div>
              </div>

            </div>

            {/* RIGHT col */}
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>

              {/* Case highlights */}
              <div style={{ background:"#EDE8D9", borderRadius:20, padding:"32px 28px" }}>
                <div style={{ fontSize:10, fontWeight:700, color:"#D97757", letterSpacing:"0.13em", textTransform:"uppercase", marginBottom:10 }}>✦ Case Highlights</div>
                <h3 style={{ fontSize:"1.3rem", fontWeight:800, color:"#1A1A1A", letterSpacing:"-0.02em", marginBottom:8, lineHeight:1.2 }}>
                  Brands we've<br/>transformed.
                </h3>
                <p style={{ fontSize:"0.82rem", color:"#8C8C8C", lineHeight:1.7, marginBottom:20 }}>
                  Across industries — from bootstrapped startups to established enterprises.
                </p>
                <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                  {cases.map((c,i) => (
                    <div key={i} className="rs-case-row">
                      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                        <div style={{ width:8, height:8, borderRadius:"50%", background:c.dot, flexShrink:0 }}/>
                        <div>
                          <div style={{ fontSize:"0.8rem", fontWeight:600, color:"#1A1A1A" }}>{c.name}</div>
                          <div style={{ fontSize:"0.7rem", color:"#8C8C8C" }}>{c.category}</div>
                        </div>
                      </div>
                      <div style={{ fontSize:"0.85rem", fontWeight:800, color:"#D97757" }}>{c.result}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process steps */}
              <div style={{ background:"#161412", borderRadius:20, padding:"28px 26px", flex:1 }}>
                <div style={{ fontSize:10, fontWeight:700, color:"rgba(255,255,255,0.28)", letterSpacing:"0.13em", textTransform:"uppercase", marginBottom:18 }}>
                  How We Deliver Results
                </div>
                <div style={{ display:"flex", flexDirection:"column" }}>
                  {steps.map((s,i) => (
                    <div key={i} style={{ display:"flex", gap:14, alignItems:"flex-start", paddingBottom: i<steps.length-1 ? 18 : 0 }}>
                      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
                        <div style={{ width:30, height:30, borderRadius:"50%", background:"rgba(217,119,87,0.15)", border:"1px solid rgba(217,119,87,0.3)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:800, color:"#D97757" }}>
                          {s.n}
                        </div>
                        {i < steps.length-1 && <div style={{ width:1, flex:1, background:"rgba(255,255,255,0.07)", marginTop:4, minHeight:22 }}/>}
                      </div>
                      <div style={{ paddingTop:4 }}>
                        <div style={{ fontSize:"0.82rem", fontWeight:700, color:"#fff", marginBottom:2 }}>{s.title}</div>
                        <div style={{ fontSize:"0.72rem", color:"rgba(255,255,255,0.38)", lineHeight:1.5 }}>{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM 4 METRICS */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginTop:12 }}>
            {metrics.map((m,i) => (
              <div key={i} className="rs-metric-card">
                <div style={{ fontSize:18, marginBottom:14, color:"#D97757" }}>{m.icon}</div>
                <div style={{ fontSize:"2rem", fontWeight:800, color:"#fff", letterSpacing:"-0.03em", lineHeight:1, marginBottom:4 }}>
                  {m.val}<span style={{ color:"#D97757" }}>{m.suffix}</span>
                </div>
                <div style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.38)", lineHeight:1.55 }}>{m.label}</div>
                <div style={{ display:"inline-flex", alignItems:"center", gap:5, marginTop:14, background:"rgba(217,119,87,0.12)", border:"1px solid rgba(217,119,87,0.22)", borderRadius:6, padding:"3px 9px" }}>
                  <div style={{ width:5, height:5, borderRadius:"50%", background:"#D97757" }}/>
                  <span style={{ fontSize:9.5, fontWeight:700, color:"#D97757", letterSpacing:"0.08em", textTransform:"uppercase" }}>{m.tag}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:14, marginTop:44, flexWrap:"wrap" }}>
            <a href="#" className="rs-cta-primary">See all case studies →</a>
            <a href="#" className="rs-cta-secondary">Book a free strategy call</a>
          </div>

        </div>
      </section>
    </>
  );
}