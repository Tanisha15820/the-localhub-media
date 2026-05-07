

// import { useState } from "react";
// import SectionHeader from "./SectionHeader";

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
//   { title: "Brand Development", sub: "Identity & positioning", size: "tall", img: brandImg },
//   { title: "Content Marketing", sub: "Authority at scale", size: "short", img: contentImg },
//   { title: "Performance Marketing", sub: "Paid that converts", size: "tall", img: performanceImg },
//   { title: "Online Marketing", sub: "Full-funnel strategy", size: "short", img: onlineImg },
//   { title: "E-commerce Growth", sub: "Shopify & WordPress", size: "short", img: ecommerceImg },
//   { title: "Paid Marketing", sub: "Ads that convert", size: "tall", img: paidImg },
//   { title: "SEO", sub: "Search dominance", size: "short", img: seoImg },
//   { title: "Social Media Marketing", sub: "Community & reach", size: "short", img: socialImg },
//   { title: "AEO", sub: "AI engine optimisation", size: "short", img: aeoImg },
// ];

// const TOOLS = [
//   { name: "Meta Ads", sub: "Social campaigns", bgImg: metaBg },
//   { name: "Google Ads", sub: "Search & display", bgImg: googleBg },
//   { name: "Shopify", sub: "E-commerce", bgImg: shopifyBg },
//   { name: "OpenAI", sub: "AI automation", bgImg: openAIBg },
//   { name: "HubSpot", sub: "CRM & marketing", bgImg: hubspotBg },
//   { name: "Canva Pro", sub: "Design & creatives", bgImg: canvaBg },
//   { name: "WordPress", sub: "Development", bgImg: wordpressBg },
// ];

// function ServiceCard({ s, delay }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         borderRadius: 16,
//         overflow: "hidden",
//         position: "relative",
//         gridRow: s.size === "tall" ? "span 2" : "span 1",
//         cursor: "pointer",
//         animation: `cardUp 0.6s cubic-bezier(0.22,1,0.36,1) both`,
//         animationDelay: delay,
//         transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0)",
//         boxShadow: hovered ? "0 20px 50px rgba(0,0,0,0.25)" : "0 2px 12px rgba(0,0,0,0.08)",
//         transition: "all 0.3s ease",
//         minHeight: s.size === "tall" ? "320px" : "155px",
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
//     <section style={{ background: "#F5F0E8", padding: "80px 20px" }}>
      
//       {/* HEADER - FIXED SYSTEM */}
//       <SectionHeader
//         tag="What we do"
//         title="Every lever your brand"
//         highlight="needs to grow."
//         subtitle="No referrals. No hand-offs. One team that owns the full picture."
//       />

//       {/* SERVICES GRID */}
//       <div className="services-grid">
//         {SERVICES.map((s, i) => (
//           <ServiceCard key={i} s={s} delay={`${i * 0.08}s`} />
//         ))}
//       </div>

//       {/* TOOLS */}
//       <div style={{ marginTop: 60, textAlign: "center" }}>
//         <p style={{ marginBottom: 20, color: "#777", letterSpacing: "0.08em" }}>
//           Tools we use
//         </p>
//         <ToolsMarquee />
//       </div>

//       {/* ANIMATIONS */}
//       <style>{`
//         @keyframes cardUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes marqueeScroll {
//           0% { transform: translateX(0); }
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

import { useState } from "react";
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

const TOOLS = [
  { name: "Meta Ads", sub: "Social campaigns", bgImg: metaBg },
  { name: "Google Ads", sub: "Search & display", bgImg: googleBg },
  { name: "Shopify", sub: "E-commerce", bgImg: shopifyBg },
  { name: "OpenAI", sub: "AI automation", bgImg: openAIBg },
  { name: "HubSpot", sub: "CRM & marketing", bgImg: hubspotBg },
  { name: "Canva Pro", sub: "Design & creatives", bgImg: canvaBg },
  { name: "WordPress", sub: "Development", bgImg: wordpressBg },
];

function ServiceCard({ s, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal
  delay={delay}
  style={{
    display: "contents",
  }}
>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: 16,
          overflow: "hidden",
          position: "relative",
          gridRow: s.size === "tall" ? "span 2" : "span 1",
          cursor: "pointer",
          transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0)",
          boxShadow: hovered
            ? "0 20px 50px rgba(0,0,0,0.25)"
            : "0 2px 12px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          minHeight: s.size === "tall" ? "320px" : "155px",
          height: "100%",
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
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.4s ease",
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
          <div
            style={{
              fontWeight: 700,
              fontSize: s.size === "tall" ? "1.05rem" : "0.9rem",
            }}
          >
            {s.title}
          </div>

          <div
            style={{
              fontSize: "0.75rem",
              marginTop: 2,
              opacity: 0.85,
            }}
          >
            {s.sub}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

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
        boxShadow: hovered
          ? "0 8px 24px rgba(0,0,0,0.18)"
          : "none",
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
          transform: hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.35s ease",
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

      <div
        style={{
          position: "absolute",
          bottom: 0,
          padding: 10,
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 600 }}>
          {tool.name}
        </div>

        <div style={{ fontSize: 11, opacity: 0.7 }}>
          {tool.sub}
        </div>
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
  return (
    <section style={{ background: "#F5F0E8", padding: "80px 20px" }}>

      {/* HEADER */}
      <SectionHeader
        tag="What we do"
        title="Every lever your brand"
        highlight="needs to grow."
        subtitle="No referrals. No hand-offs. One team that owns the full picture."
      />

      {/* SERVICES GRID */}
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <ServiceCard key={i} s={s} delay={i * 100} />
        ))}
      </div>

      {/* TOOLS */}
      <Reveal delay={120}>
        <div style={{ marginTop: 60, textAlign: "center" }}>
          <p
            style={{
              marginBottom: 20,
              color: "#777",
              letterSpacing: "0.08em",
            }}
          >
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
