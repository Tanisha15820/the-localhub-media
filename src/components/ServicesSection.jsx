// import { useState } from "react";
// import SectionHeader from "./SectionHeader";
// import Reveal from "./Reveal";

// import brandImg from "../assets/brand-development.png";
// import contentImg from "../assets/content.png";
// import performanceImg from "../assets/performance.png";
// import onlineImg from "../assets/online.png";
// import ecommerceImg from "../assets/ecommerce.png";
// import paidImg from "../assets/paid.png";
// import seoImg from "../assets/seo.png";
// import socialImg from "../assets/social.png";
// import aeoImg from "../assets/aeo.png";

// import metaBg from "../assets/meta.jpg";
// import googleBg from "../assets/google.jpg";
// import shopifyBg from "../assets/shopify.jpg";
// import openAIBg from "../assets/openAI.jpg";
// import hubspotBg from "../assets/hubspot.jpg";
// import canvaBg from "../assets/canva.jpg";
// import wordpressBg from "../assets/wordpress.jpg";

// const SERVICES = [
//   { title: "Brand Development",     sub: "Identity & positioning", size: "tall",  img: brandImg },
//   { title: "Content Marketing",     sub: "Authority at scale",     size: "short", img: contentImg },
//   { title: "Performance Marketing", sub: "Paid that converts",     size: "tall",  img: performanceImg },
//   { title: "Online Marketing",      sub: "Full-funnel strategy",   size: "short", img: onlineImg },
//   { title: "E-commerce Growth",     sub: "Shopify & WordPress",    size: "short", img: ecommerceImg },
//   { title: "Paid Marketing",        sub: "Ads that convert",       size: "tall",  img: paidImg },
//   { title: "SEO",                   sub: "Search dominance",       size: "short", img: seoImg },
//   { title: "Social Media Marketing",sub: "Community & reach",      size: "short", img: socialImg },
//   { title: "AEO",                   sub: "AI engine optimisation", size: "short", img: aeoImg },
// ];

// const TOOLS = [
//   { name: "Meta Ads",   sub: "Social campaigns",   bgImg: metaBg },
//   { name: "Google Ads", sub: "Search & display",   bgImg: googleBg },
//   { name: "Shopify",    sub: "E-commerce",          bgImg: shopifyBg },
//   { name: "OpenAI",     sub: "AI automation",       bgImg: openAIBg },
//   { name: "HubSpot",    sub: "CRM & marketing",     bgImg: hubspotBg },
//   { name: "Canva Pro",  sub: "Design & creatives",  bgImg: canvaBg },
//   { name: "WordPress",  sub: "Development",         bgImg: wordpressBg },
// ];

// function ServiceCard({ s }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         borderRadius: 16,
//         overflow: "hidden",
//         position: "relative",
//         width: "100%",
//         height: "100%",
//         cursor: "pointer",
//         transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0)",
//         boxShadow: hovered
//           ? "0 20px 50px rgba(0,0,0,0.25)"
//           : "0 2px 12px rgba(0,0,0,0.08)",
//         transition: "all 0.3s ease",
//       }}
//     >
//       <img
//         src={s.img}
//         alt={s.title}
//         style={{
//           position: "absolute",
//           inset: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           transform: hovered ? "scale(1.08)" : "scale(1)",
//           transition: "transform 0.4s ease",
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background: "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.15))",
//         }}
//       />
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           padding: "16px 18px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           height: "100%",
//           color: "#fff",
//         }}
//       >
//         <div style={{ fontWeight: 700, fontSize: s.size === "tall" ? "1.05rem" : "0.9rem" }}>
//           {s.title}
//         </div>
//         <div style={{ fontSize: "0.75rem", marginTop: 2, opacity: 0.85 }}>
//           {s.sub}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ToolCard({ tool }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         flex: "0 0 160px",
//         height: 110,
//         borderRadius: 12,
//         overflow: "hidden",
//         position: "relative",
//         cursor: "pointer",
//         transform: hovered ? "translateY(-4px)" : "none",
//         boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.18)" : "none",
//         transition: "all 0.25s ease",
//       }}
//     >
//       <img
//         src={tool.bgImg}
//         alt={tool.name}
//         style={{
//           position: "absolute",
//           inset: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           transform: hovered ? "scale(1.07)" : "scale(1)",
//           transition: "transform 0.35s ease",
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background: "linear-gradient(to top, rgba(0,0,0,0.68), rgba(0,0,0,0.12))",
//         }}
//       />
//       <div style={{ position: "absolute", bottom: 0, padding: 10, color: "#fff" }}>
//         <div style={{ fontSize: 13, fontWeight: 600 }}>{tool.name}</div>
//         <div style={{ fontSize: 11, opacity: 0.7 }}>{tool.sub}</div>
//       </div>
//     </div>
//   );
// }

// function ToolsMarquee() {
//   const items = [...TOOLS, ...TOOLS];
//   return (
//     <div style={{ overflow: "hidden" }}>
//       <div
//         style={{
//           display: "flex",
//           gap: 16,
//           width: "max-content",
//           animation: "marqueeScroll 18s linear infinite",
//         }}
//       >
//         {items.map((t, i) => (
//           <ToolCard key={i} tool={t} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function ServicesSection() {
//   return (
//     <section style={{ background: "#fff", padding: "80px 20px" }}>

//       {/* HEADER */}
//       <SectionHeader
//         tag="What we do"
//         title="Every lever your brand"
//         highlight="needs to grow."
//         subtitle="No referrals. No hand-offs. One team that owns the full picture."
//       />

//       {/* SERVICES GRID — gridRow span Reveal div pe hai */}
//       <div className="services-grid">
//         {SERVICES.map((s, i) => (
//           <Reveal
//             key={i}
//             delay={i * 80}
//             style={{
//               gridRow: s.size === "tall" ? "span 2" : "span 1",
//               minHeight: s.size === "tall" ? "320px" : "155px",
//             }}
//           >
//             <ServiceCard s={s} />
//           </Reveal>
//         ))}
//       </div>

//       {/* TOOLS */}
//       <Reveal delay={200}>
//         <div style={{ marginTop: 60, textAlign: "center" }}>
//           <p style={{ marginBottom: 20, color: "#777", letterSpacing: "0.08em" }}>
//             Tools we use
//           </p>
//           <ToolsMarquee />
//         </div>
//       </Reveal>

//       <style>{`
//         @keyframes marqueeScroll {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .services-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           grid-auto-rows: 160px;
//           gap: 16px;
//           max-width: 1040px;
//           margin: 0 auto;
//         }
//         @media (max-width: 900px) {
//           .services-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

import { useState, useRef } from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

import brandImg from "../assets/brand-development.png";
import contentImg from "../assets/content.png";
import performanceImg from "../assets/performance.png";
import onlineImg from "../assets/online.png";
import ecommerceImg from "../assets/ecommerce.png";
import paidImg from "../assets/paid.png";
import seoImg from "../assets/seo.png";
import socialImg from "../assets/social.png";
import aeoImg from "../assets/aeo.png";

import metaBg from "../assets/meta.jpg";
import googleBg from "../assets/google.jpg";
import shopifyBg from "../assets/shopify.jpg";
import openAIBg from "../assets/openAI.jpg";
import hubspotBg from "../assets/hubspot.jpg";
import canvaBg from "../assets/canva.jpg";
import wordpressBg from "../assets/wordpress.jpg";

/* ---------------- SERVICES ---------------- */
const SERVICES = [
  { title: "Brand Development", sub: "Identity & positioning", size: "tall", img: brandImg },
  { title: "Content Marketing", sub: "Authority at scale", size: "short", img: contentImg },
  { title: "Performance Marketing", sub: "Paid that converts", size: "tall", img: performanceImg },
  { title: "Online Marketing", sub: "Full-funnel strategy", size: "short", img: onlineImg },
  { title: "E-commerce Growth", sub: "Shopify & WordPress", size: "short", img: ecommerceImg },
  { title: "Paid Marketing", sub: "Ads that convert", size: "tall", img: paidImg },
  { title: "SEO", sub: "Search dominance", size: "short", img: seoImg },
  { title: "Social Media Marketing", sub: "Community & reach", size: "short", img: socialImg },
  { title: "AEO", sub: "AI engine optimisation", size: "short", img: aeoImg },
];

/* ---------------- SERVICE DETAILS ---------------- */
const SERVICE_DETAILS = {
  "Brand Development": {
    title: "Brand Development",
    img: brandImg,
    para1:
      "We craft a strong and memorable brand identity that helps your business stand out in a crowded market.",
    para2:
      "From positioning and messaging to visual identity, we build a brand that connects emotionally with your audience and builds long-term trust."
  },
  "Content Marketing": {
    title: "Content Marketing",
    img: contentImg,
    para1:
      "We create strategic content that positions your brand as an authority in your industry.",
    para2:
      "Our content drives engagement, builds trust, and converts audiences into loyal customers through storytelling and value-driven messaging."
  },
  "Performance Marketing": {
    title: "Performance Marketing",
    img: performanceImg,
    para1:
      "We run data-driven ad campaigns focused purely on results and ROI.",
    para2:
      "Every campaign is optimized for conversions, ensuring maximum leads and revenue at minimum cost."
  },
  "Online Marketing": {
    title: "Online Marketing",
    img: onlineImg,
    para1:
      "We design full-funnel digital marketing strategies tailored to your business goals.",
    para2:
      "From awareness to conversion, we ensure your brand reaches the right audience at every stage."
  },
  "E-commerce Growth": {
    title: "E-commerce Growth",
    img: ecommerceImg,
    para1:
      "We help e-commerce brands scale through optimization and marketing systems.",
    para2:
      "From Shopify setup to scaling sales, we focus on improving store performance and revenue."
  },
  "Paid Marketing": {
    title: "Paid Marketing",
    img: paidImg,
    para1:
      "We create high-performance Meta and Google ad campaigns.",
    para2:
      "Our goal is maximum ROI through smart targeting and optimization."
  },
  SEO: {
    title: "SEO",
    img: seoImg,
    para1:
      "We help your brand rank higher on Google and drive organic traffic.",
    para2:
      "Our SEO strategies improve visibility, authority, and long-term search performance."
  },
  "Social Media Marketing": {
    title: "Social Media Marketing",
    img: socialImg,
    para1:
      "We build strong social media presence through engaging content.",
    para2:
      "We grow audience, engagement, and conversions through consistent strategy."
  },
  AEO: {
    title: "AEO (Answer Engine Optimization)",
    img: aeoImg,
    para1:
      "We optimize your content for AI search and voice assistants.",
    para2:
      "This ensures your brand appears in AI answers, snippets, and future search systems."
  }
};

/* ---------------- TOOLS ---------------- */
const TOOLS = [
  { name: "Meta Ads", sub: "Social campaigns", bgImg: metaBg },
  { name: "Google Ads", sub: "Search & display", bgImg: googleBg },
  { name: "Shopify", sub: "E-commerce", bgImg: shopifyBg },
  { name: "OpenAI", sub: "AI automation", bgImg: openAIBg },
  { name: "HubSpot", sub: "CRM & marketing", bgImg: hubspotBg },
  { name: "Canva Pro", sub: "Design & creatives", bgImg: canvaBg },
  { name: "WordPress", sub: "Development", bgImg: wordpressBg },
];

/* ---------------- SERVICE CARD ---------------- */
function ServiceCard({ s, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 16,
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "100%",
        cursor: "pointer",
        transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 50px rgba(0,0,0,0.25)"
          : "0 2px 12px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
      }}
    >
      <img
        src={s.img}
        alt={s.title}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.15))",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "16px 18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "100%",
          color: "#fff",
        }}
      >
        <div style={{ fontWeight: 700 }}>{s.title}</div>
        <div style={{ fontSize: "0.75rem", opacity: 0.85 }}>{s.sub}</div>
      </div>
    </div>
  );
}

/* ---------------- TOOLS MARQUEE (RESTORED EXACT) ---------------- */
function ToolCard({ tool }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "0 0 160px",
        height: 110,
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        transform: hovered ? "translateY(-4px)" : "none",
        transition: "all 0.25s ease",
      }}
    >
      <img
        src={tool.bgImg}
        alt={tool.name}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.68), rgba(0,0,0,0.12))",
        }}
      />
      <div style={{ position: "absolute", bottom: 0, padding: 10, color: "#fff" }}>
        <div style={{ fontSize: 13, fontWeight: 600 }}>{tool.name}</div>
        <div style={{ fontSize: 11, opacity: 0.7 }}>{tool.sub}</div>
      </div>
    </div>
  );
}

function ToolsMarquee() {
  const items = [...TOOLS, ...TOOLS];

  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          gap: 16,
          width: "max-content",
          animation: "marqueeScroll 18s linear infinite",
        }}
      >
        {items.map((t, i) => (
          <ToolCard key={i} tool={t} />
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);
  const detailsRef = useRef(null);

  return (
    <section style={{ background: "#fff", padding: "80px 20px" }}>

      <SectionHeader
        tag="What we do"
        title="Every lever your brand"
        highlight="needs to grow."
        subtitle="No referrals. No hand-offs. One team that owns the full picture."
      />

      {/* SERVICES GRID */}
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <Reveal
            key={i}
            delay={i * 80}
            style={{
              gridRow: s.size === "tall" ? "span 2" : "span 1",
              minHeight: s.size === "tall" ? "320px" : "155px",
            }}
          >
            <ServiceCard
              s={s}
              onClick={() => {
                setActiveService(s.title);
                setTimeout(() => {
                  // detailsRef.current?.scrollIntoView({ behavior: "smooth" });
                  detailsRef.current?.scrollIntoView({
  behavior: "smooth",
  block: "start",
  inline: "nearest"
});
                }, 100);
              }}
            />
          </Reveal>
        ))}
      </div>

      {/* DETAILS */}
      {activeService && (
        <Reveal>
          <div
            ref={detailsRef}
            style={{
              marginTop: 90,
              maxWidth: 1000,
              marginInline: "auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              alignItems: "center",
              padding: "30px",
              borderRadius: 24,
              background: "#111",
              color: "#fff",
            }}
          >
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: 15 }}>
                {SERVICE_DETAILS[activeService].title}
              </h2>

              <p style={{ opacity: 0.8, lineHeight: 1.8, marginBottom: 12 }}>
                {SERVICE_DETAILS[activeService].para1}
              </p>

              <p style={{ opacity: 0.75, lineHeight: 1.8 }}>
                {SERVICE_DETAILS[activeService].para2}
              </p>

              <button
                onClick={() => setActiveService(null)}
                style={{
                  marginTop: 25,
                  padding: "10px 18px",
                  borderRadius: 10,
                  background: "#D97757",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>

            <div>
              <img
                src={SERVICE_DETAILS[activeService].img}
                alt={activeService}
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: 20,
                }}
              />
            </div>
          </div>
        </Reveal>
      )}

      {/* TOOLS (RESTORED) */}
      <Reveal delay={200}>
        <div style={{ marginTop: 60, textAlign: "center" }}>
          <p style={{ marginBottom: 20, color: "#777", letterSpacing: "0.08em" }}>
            Tools we use
          </p>
          <ToolsMarquee />
        </div>
      </Reveal>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 160px;
          gap: 16px;
          max-width: 1040px;
          margin: 0 auto;
        }

        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}