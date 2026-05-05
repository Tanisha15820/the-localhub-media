
import { useRef, useEffect } from "react";
import metaImg from "../assets/meta.jpg";
import googleImg from "../assets/google.jpg";
import openAIImg from "../assets/openAI.jpg";
import semrushImg from "../assets/semrush.jpg";
import canvaImg from "../assets/canva.jpg";
import shopifyImg from "../assets/shopify.jpg";
import hubspotImg from "../assets/hubspot.jpg";

const CARDS = [
  {
    id: "meta",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.87 8.16 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0021.96 12c0-5.5-4.46-9.96-9.96-9.96z" />
      </svg>
    ),
    name: "Meta Ads",
    category: "Paid Social",
    image: metaImg,
    desc: "Precision-targeted campaigns across Facebook & Instagram.",
  },
  {
    id: "google",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    ),
    name: "Google Ads",
    category: "Search & Display",
    image: googleImg,
    desc: "Dominate search and display with data-driven campaigns.",
  },
  {
    id: "openai",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M22.28 9.29a5.44 5.44 0 00-.46-4.48 5.56 5.56 0 00-5.97-2.66A5.44 5.44 0 0011.76 0a5.56 5.56 0 00-5.3 3.85 5.44 5.44 0 00-3.63 2.64 5.56 5.56 0 00.68 6.51 5.44 5.44 0 00.46 4.48 5.56 5.56 0 005.97 2.66A5.44 5.44 0 0014.03 24a5.56 5.56 0 005.3-3.85 5.44 5.44 0 003.63-2.64 5.56 5.56 0 00-.68-6.22zM14.04 22.42a4.12 4.12 0 01-2.64-.96l.13-.07 4.38-2.53a.72.72 0 00.36-.63v-6.18l1.85 1.07a.07.07 0 01.04.05v5.11a4.15 4.15 0 01-4.12 4.14zm-8.87-3.8a4.12 4.12 0 01-.49-2.77l.13.08 4.38 2.53a.72.72 0 00.72 0l5.35-3.09v2.14a.07.07 0 01-.03.06L10.8 19.9a4.15 4.15 0 01-5.63-1.28zm-1.15-9.6a4.12 4.12 0 012.15-1.82v5.2a.72.72 0 00.36.63l5.35 3.09-1.85 1.07a.07.07 0 01-.07 0L5.53 14.6a4.15 4.15 0 01-.51-5.58zm15.23 3.56l-5.35-3.09 1.85-1.07a.07.07 0 01.07 0l4.38 2.53a4.14 4.14 0 01-.64 7.48v-5.2a.72.72 0 00-.31-.65zm1.84-2.79l-.13-.08-4.38-2.53a.72.72 0 00-.72 0L10.51 10.7V8.56a.07.07 0 01.03-.06l4.38-2.53a4.14 4.14 0 016.17 4.32zm-11.56 3.8l-1.85-1.07a.07.07 0 01-.04-.05V7.36a4.14 4.14 0 016.79-3.18l-.13.07-4.38 2.53a.72.72 0 00-.36.63l-.03 6.18zm1-2.16L12 10.37l2.25 1.3v2.59L12 15.56l-2.25-1.3-.03-2.59z" />
      </svg>
    ),
    name: "OpenAI / GPT",
    category: "AI Content",
    image: openAIImg,
    desc: "GPT-4 powers on-brand copy and personalisation at scale.",
  },
  {
    id: "semrush",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 110 16A8 8 0 0112 4zm0 2a6 6 0 100 12A6 6 0 0012 6zm0 2a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
    name: "SEMrush",
    category: "SEO & Analytics",
    image: semrushImg,
    desc: "Deep SEO insights, keyword research and competitor analysis.",
  },
  {
    id: "canva",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm3.384 14.28c-.46.764-1.29 1.22-2.18 1.22-1.42 0-2.58-1.16-2.58-2.58s1.16-2.58 2.58-2.58c.78 0 1.52.35 2.03.94l1.5-1.18A4.437 4.437 0 0013.204 8.5c-2.45 0-4.44 1.99-4.44 4.44s1.99 4.44 4.44 4.44c1.28 0 2.5-.56 3.34-1.53l-1.16-1.57z" />
      </svg>
    ),
    name: "Canva Pro",
    category: "Brand Design",
    image: canvaImg,
    desc: "Stunning on-brand visuals created fast — no designer needed.",
  },
  {
    id: "shopify",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M15.337.276a.4.4 0 00-.36-.276c-.156-.012-3.396-.072-3.396-.072s-2.256-2.184-2.496-2.424V24l8.652-1.872S19.2 2.448 19.212 2.364a.408.408 0 00-.348-.408l-3.528-.168zM13.2 1.308l-1.476 4.548a4.104 4.104 0 00-2.988-.696c-2.376.348-2.4 2.952-.024 3.336.804.132 1.632.228 2.424.42 2.004.516 2.676 1.848 2.508 3.468-.252 2.436-2.088 3.948-4.584 4.116a6.96 6.96 0 01-3.804-.9l.516-2.196s1.32.996 2.892.876c1.056-.072 1.512-.924 1.464-1.524-.072-.864-.888-1.164-1.884-1.452C6.576 10.8 5.4 9.66 5.628 7.404c.24-2.34 2.112-3.96 4.608-4.236a6.36 6.36 0 012.964.14z" />
      </svg>
    ),
    name: "Shopify",
    category: "E-commerce",
    image: shopifyImg,
    desc: "Connect your store to supercharge e-commerce campaigns.",
  },
  {
    id: "hubspot",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M22.214 9.847a5.894 5.894 0 00-2.761-1.584V6.34a1.97 1.97 0 001.17-1.787V4.5a1.97 1.97 0 00-1.97-1.97h-.053a1.97 1.97 0 00-1.97 1.97v.053a1.97 1.97 0 001.17 1.787v1.923a5.894 5.894 0 00-2.414.974L7.9 4.31a2.632 2.632 0 10-.843.977l7.254 4.86a5.91 5.91 0 101.903 7.88l2.96 1.982a2.106 2.106 0 102.04-3.162z" />
      </svg>
    ),
    name: "HubSpot",
    category: "CRM & Automation",
    image: hubspotImg,
    desc: "Automate your funnel and keep CRM perfectly in sync.",
  },
];

export default function BrandsSection() {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);

  // duplicate for seamless infinite loop
  const allCards = [...CARDS, ...CARDS];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const speed = 0.7;
    const animate = () => {
      if (!pausedRef.current && !isDraggingRef.current) {
        const halfWidth = track.scrollWidth / 2;
        offsetRef.current += speed;
        if (offsetRef.current >= halfWidth) offsetRef.current -= halfWidth;
        track.style.transform = `translateX(${-offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseEnter = () => { pausedRef.current = true; };
  const handleMouseLeave = () => { pausedRef.current = false; isDraggingRef.current = false; };
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
  };
  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const track = trackRef.current;
    const halfWidth = track.scrollWidth / 2;
    const delta = dragStartXRef.current - e.clientX;
    let newOffset = dragStartOffsetRef.current + delta;
    if (newOffset < 0) newOffset += halfWidth;
    if (newOffset >= halfWidth) newOffset -= halfWidth;
    offsetRef.current = newOffset;
    track.style.transform = `translateX(${-newOffset}px)`;
  };
  const handleMouseUp = () => { isDraggingRef.current = false; };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        .bs-section {
          width: 100%;
          background: #F5F0E8;
          padding-top: 80px;
          padding-bottom: 60px;
          font-family: 'Poppins', sans-serif;
          /* KEY FIX: do NOT use overflow:hidden here — that clips page scroll */
          overflow: visible;
        }

        .bs-header {
          text-align: center;
          padding: 0 24px;
          margin-bottom: 52px;
        }
        .bs-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(217,119,87,0.10);
          border: 1px solid rgba(217,119,87,0.25);
          border-radius: 999px;
          padding: 6px 18px;
          margin-bottom: 20px;
        }
        .bs-pill-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #D97757;
          flex-shrink: 0;
        }
        .bs-pill-text {
          font-size: 11px;
          font-weight: 700;
          color: #D97757;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .bs-headline {
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 700;
          color: #1A1A1A;
          line-height: 1.12;
          letter-spacing: -0.025em;
          margin: 0 0 14px;
        }
        .bs-headline em {
          font-style: normal;
          color: #D97757;
        }
        .bs-subline {
          color: #8C8C8C;
          font-size: 1rem;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Outer wrapper: clips horizontal overflow ONLY */
        .bs-track-outer {
          position: relative;
          width: 100%;
          /* clip-path clips only horizontally without blocking vertical page scroll */
          overflow-x: hidden;
          overflow-y: visible;
          border-top: 1px solid rgba(26,26,26,0.08);
          border-bottom: 1px solid rgba(26,26,26,0.08);
        }
        .bs-track-outer::before,
        .bs-track-outer::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }
        .bs-track-outer::before {
          left: 0;
          background: linear-gradient(to right, #F5F0E8, transparent);
        }
        .bs-track-outer::after {
          right: 0;
          background: linear-gradient(to left, #F5F0E8, transparent);
        }

        .bs-track {
          display: flex;
          width: max-content;
          cursor: grab;
          user-select: none;
          will-change: transform;
        }
        .bs-track:active { cursor: grabbing; }

        /* Every card: image top + dark text area bottom */
        .bs-card {
          flex: 0 0 240px;
          height: 320px;
          background: #1A1A1A;
          border-right: 1px solid rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: background 0.25s;
        }
        .bs-card:hover { background: #111; }

        .bs-img-wrap {
          width: 100%;
          height: 160px;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
        }
        .bs-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .bs-card:hover .bs-img-wrap img {
          transform: scale(1.06);
        }
        .bs-img-wrap::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 60px;
          background: linear-gradient(to bottom, transparent, #1A1A1A);
          pointer-events: none;
        }

        .bs-card-body {
          padding: 14px 20px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .bs-icon-wrap {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(217,119,87,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          color: #D97757;
          flex-shrink: 0;
        }

        .bs-card-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.01em;
          margin: 0 0 3px;
        }
        .bs-card-cat {
          font-size: 0.62rem;
          font-weight: 600;
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.09em;
          text-transform: uppercase;
          margin: 0 0 8px;
        }
        .bs-card-desc {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.6;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <section className="bs-section">
        <div className="bs-header">
          <div className="bs-pill">
            <span className="bs-pill-dot" />
            <span className="bs-pill-text">Tools & Platforms</span>
          </div>
          <h2 className="bs-headline">
            With all the best-in-class<br />
            <em>tools in your corner.</em>
          </h2>
          <p className="bs-subline">
            We work with the world's leading platforms so you never have to
            choose between the best tools and the smoothest workflow.
          </p>
        </div>

        <div className="bs-track-outer">
          <div
            ref={trackRef}
            className="bs-track"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {allCards.map((card, i) => (
              <div key={`${card.id}-${i}`} className="bs-card">
                <div className="bs-img-wrap">
                  <img src={card.image} alt={card.name} draggable={false} />
                </div>
                <div className="bs-card-body">
                  <div className="bs-icon-wrap">{card.icon}</div>
                  <p className="bs-card-name">{card.name}</p>
                  <p className="bs-card-cat">{card.category}</p>
                  {card.desc && <p className="bs-card-desc">{card.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}