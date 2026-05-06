import { useState } from "react";

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
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (i, e) => {
    e.stopPropagation();
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        @keyframes tcard-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .tc-wrap {
          font-family: 'Poppins', sans-serif;
          background: #F5F0E8;
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
          .tc-grid { grid-template-columns: 1fr; max-width: 480px; }
        }

        .tc-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.07);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          animation: tcard-up 0.6s cubic-bezier(0.22,1,0.36,1) both;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.25s ease;
        }

        .tc-card:hover {
          transform: translateY(-8px) scale(1.025);
          box-shadow: 0 20px 56px rgba(217,119,87,0.16);
          border-color: #D97757;
        }

        .tc-card.active {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 24px 64px rgba(217,119,87,0.22);
          border-color: #D97757;
        }

        .tc-card:active {
          transform: scale(0.98);
        }

        /* TOP HEADER — beige strip with avatar + name */
        .tc-header {
          background: #F5F0E8;
          padding: 20px 22px;
          display: flex;
          align-items: center;
          gap: 14px;
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }

        .tc-avatar {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          border: 2px solid #D97757;
          background: rgba(217,119,87,0.12);
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: #D97757;
          transition: background 0.25s, color 0.25s;
        }

        .tc-card.active .tc-avatar,
        .tc-card:hover .tc-avatar {
          background: #D97757;
          color: #fff;
        }

        .tc-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tc-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1A1A1A;
          letter-spacing: -0.01em;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .tc-role {
          font-size: 0.78rem;
          color: #D97757;
          font-weight: 600;
          margin-top: 2px;
        }

        /* BODY */
        .tc-body {
          padding: 22px 22px 0;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .tc-stars {
          color: #f5a623;
          font-size: 1.1rem;
          letter-spacing: 3px;
          margin-bottom: 14px;
        }

        .tc-quote-wrap {
          flex: 1;
          position: relative;
          overflow: hidden;
        }

        .tc-quote {
          font-size: 0.855rem;
          color: #4A4A4A;
          line-height: 1.85;
          font-style: italic;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .tc-quote.expanded {
          display: block;
          -webkit-line-clamp: unset;
          overflow: visible;
        }

        .tc-quote::before {
          content: '\\201C';
          font-size: 2.2rem;
          color: #D97757;
          line-height: 0;
          vertical-align: -0.45rem;
          margin-right: 3px;
          font-style: normal;
        }

        /* FOOTER */
        .tc-footer {
          padding: 16px 22px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(0,0,0,0.07);
          margin-top: 18px;
        }

        .tc-company {
          font-size: 0.78rem;
          font-weight: 600;
          color: #D97757;
          letter-spacing: 0.01em;
        }

        .tc-read-more {
          font-size: 0.72rem;
          font-weight: 600;
          color: #888;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          transition: color 0.2s;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .tc-read-more:hover { color: #D97757; }
      `}</style>

      <section className="tc-wrap">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px", fontFamily: "'Poppins', sans-serif" }}>
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
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D97757" }} />
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "#D97757", textTransform: "uppercase" }}>
              Client Results
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#1A1A1A",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            What our clients <br />
            <span style={{ color: "#D97757" }}>actually say.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="tc-grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`tc-card ${activeCard === i ? "active" : ""}`}
              style={{ animationDelay: `${i * 0.12}s` }}
              onClick={() => setActiveCard(activeCard === i ? null : i)}
            >
              {/* Header strip */}
              <div className="tc-header">
                <div className="tc-avatar">
                  <img src={t.avatar} alt={t.name} onError={(e) => { e.target.style.display = "none"; }} />
                  <span style={{ position: "absolute" }}>{t.initials}</span>
                </div>
                <div>
                  <div className="tc-name">{t.name}</div>
                  <div className="tc-role">{t.role.split(",")[0]}</div>
                </div>
              </div>

              {/* Body */}
              <div className="tc-body">
                <div className="tc-stars">{"★".repeat(t.stars)}</div>
                <div className="tc-quote-wrap">
                  <p className={`tc-quote ${expanded[i] ? "expanded" : ""}`}>{t.quote}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="tc-footer">
                <span className="tc-company">{t.company}</span>
                <button className="tc-read-more" onClick={(e) => toggleExpand(i, e)}>
                  {expanded[i] ? "Show less" : "Read more..."}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}