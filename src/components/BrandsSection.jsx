

// import { useRef, useEffect } from "react";
// import metalImg from "../assets/metal-supermarket.png";
// import vosImg from "../assets/vos-motors.png";
// import flanneljaxImg from "../assets/flannel-jax.jpg";
// import anaImg from "../assets/ana-karina.jpg";
// import leitzImg from "../assets/leitz.jpg";
// import ghouseImg from "../assets/ghouse.png";
// import googleImg from "../assets/google.jpg";
// import lambtonImg from "../assets/lambton.png";
// import SectionHeader from "./SectionHeader";

// const CARDS = [
//   {
//     id: "metal",
//     name: "Metal Supermarkets",
//     category: "Industrial",
//     image: metalImg,
//     desc: "Global supplier of small-quantity metals for businesses and individuals.",
//   },
//   {
//     id: "vos",
//     name: "Vos Motors",
//     category: "Automotive",
//     image: vosImg,
//     desc: "Premium automotive solutions focused on performance and reliability.",
//   },
//   {
//     id: "flanneljax",
//     name: "FlannelJax",
//     category: "Entertainment",
//     image: flanneljaxImg,
//     desc: "Experiential entertainment brand redefining social gaming.",
//   },
//   {
//     id: "ana",
//     name: "Ana Karina Balloons",
//     category: "Events & Decor",
//     image: anaImg,
//     desc: "Creative balloon styling for luxury events and celebrations.",
//   },
//   {
//     id: "leitz",
//     name: "Leitz Tooling Systems",
//     category: "Manufacturing",
//     image: leitzImg,
//     desc: "Advanced precision tooling solutions for industrial applications.",
//   },
//   {
//     id: "ghouse",
//     name: "Ghouse Apparel",
//     category: "Fashion",
//     image: ghouseImg,
//     desc: "Modern apparel brand focused on quality and style.",
//   },
//   {
//     id: "google",
//     name: "Google",
//     category: "Technology",
//     image: googleImg,
//     desc: "Worked on campaigns aligned with global digital ecosystems.",
//   },
//   {
//     id: "lambton",
//     name: "Lambton College",
//     category: "Education",
//     image: lambtonImg,
//     desc: "Applied science & technology institution with global reach.",
//   },
// ];

// export default function BrandsSection() {
//   const trackRef = useRef(null);
//   const offsetRef = useRef(0);
//   const rafRef = useRef(null);
//   const pausedRef = useRef(false);
//   const isDraggingRef = useRef(false);
//   const dragStartXRef = useRef(0);
//   const dragStartOffsetRef = useRef(0);

//   const allCards = [...CARDS, ...CARDS];

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;
//     const speed = 0.7;

//     const animate = () => {
//       if (!pausedRef.current && !isDraggingRef.current) {
//         const halfWidth = track.scrollWidth / 2;
//         offsetRef.current += speed;

//         if (offsetRef.current >= halfWidth) {
//           offsetRef.current -= halfWidth;
//         }

//         track.style.transform = `translateX(${-offsetRef.current}px)`;
//       }

//       rafRef.current = requestAnimationFrame(animate);
//     };

//     rafRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(rafRef.current);
//   }, []);

//   const handleMouseEnter = () => (pausedRef.current = true);
//   const handleMouseLeave = () => {
//     pausedRef.current = false;
//     isDraggingRef.current = false;
//   };

//   const handleMouseDown = (e) => {
//     isDraggingRef.current = true;
//     dragStartXRef.current = e.clientX;
//     dragStartOffsetRef.current = offsetRef.current;
//   };

//   const handleMouseMove = (e) => {
//     if (!isDraggingRef.current) return;

//     const track = trackRef.current;
//     const halfWidth = track.scrollWidth / 2;
//     const delta = dragStartXRef.current - e.clientX;

//     let newOffset = dragStartOffsetRef.current + delta;

//     if (newOffset < 0) newOffset += halfWidth;
//     if (newOffset >= halfWidth) newOffset -= halfWidth;

//     offsetRef.current = newOffset;
//     track.style.transform = `translateX(${-newOffset}px)`;
//   };

//   const handleMouseUp = () => (isDraggingRef.current = false);

//   return (
//     <>
//       <style>{`
//         .bs-section {
//           width: 100%;
//           background: #F5F0E8;
//           padding-top: 80px;
//           padding-bottom: 60px;
//           font-family: 'Poppins', sans-serif;
//         }

//         .bs-header {
//           text-align: center;
//           padding: 0 24px;
//           margin-bottom: 52px;
//         }

//         .bs-pill {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: rgba(217,119,87,0.10);
//           border: 1px solid rgba(217,119,87,0.25);
//           border-radius: 999px;
//           padding: 6px 18px;
//           margin-bottom: 20px;
//         }

//         .bs-pill-dot {
//           width: 6px;
//           height: 6px;
//           border-radius: 50%;
//           background: #D97757;
//         }

//         .bs-pill-text {
//           font-size: 11px;
//           font-weight: 700;
//           color: #D97757;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//         }

//         .bs-headline {
//           font-size: clamp(2rem, 4vw, 3.2rem);
//           font-weight: 800;
//           color: #1A1A1A;
//           line-height: 1.1;
//           margin-bottom: 12px;
//         }

//         .bs-headline em {
//           color: #D97757;
//           font-style: normal;
//         }

//         .bs-subline {
//           color: #8C8C8C;
//           font-size: 1rem;
//           max-width: 480px;
//           margin: 0 auto;
//           line-height: 1.7;
//         }

//         .bs-track-outer {
//           position: relative;
//           overflow-x: hidden;
//         }

//         .bs-track {
//           display: flex;
//           gap: 20px;
//           width: max-content;
//           cursor: grab;
//         }

//         .bs-card {
//           flex: 0 0 260px;
//           height: 320px;
//           background: #F0EBE1;
//           border-radius: 16px;
//           overflow: hidden;
//           border: 1px solid rgba(0,0,0,0.05);
//           box-shadow: 0 10px 30px rgba(0,0,0,0.05);
//           transition: all 0.3s ease;
//         }

//         .bs-card:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 20px 50px rgba(217,119,87,0.15);
//         }

//         .bs-img-wrap {
//           height: 150px;
//           overflow: hidden;
//         }

//         .bs-img-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.4s ease;
//         }

//         .bs-card:hover img {
//           transform: scale(1.05);
//         }

//         .bs-card-body {
//           padding: 16px;
//         }

//         .bs-card-name {
//           font-weight: 700;
//           color: #1A1A1A;
//           margin-bottom: 4px;
//         }

//         .bs-card-cat {
//           font-size: 0.65rem;
//           color: #D97757;
//           text-transform: uppercase;
//           margin-bottom: 8px;
//         }

//         .bs-card-desc {
//           font-size: 0.75rem;
//           color: #8C8C8C;
//           line-height: 1.5;
//         }
//       `}</style>

//       <section className="bs-section">
//         {/* <div className="bs-header">
//           <div className="bs-pill">
//             <span className="bs-pill-dot" />
//             <span className="bs-pill-text">Brands</span>
//           </div>

//           <h2 className="bs-headline">
//             Trusted by Global <br />
//             <em>Brands.</em>
//           </h2>

//           <p className="bs-subline">
//             As a leading digital marketing company in India, ThelocalHub Media
//             works with global brands to deliver consistent, growth-focused results.
//           </p>
//         </div> */}
//         <SectionHeader
//   tag="Brands"
//   title="Trusted by Global"
//   highlight="Brands."
//   subtitle=" As a leading digital marketing company in India, ThelocalHub Media
//             works with global brands to deliver consistent, growth-focused results."
// />

//         <div className="bs-track-outer">
//           <div
//             ref={trackRef}
//             className="bs-track"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//           >
//             {allCards.map((card, i) => (
//               <div key={i} className="bs-card">
//                 <div className="bs-img-wrap">
//                   <img src={card.image} alt={card.name} draggable={false} />
//                 </div>

//                 <div className="bs-card-body">
//                   <p className="bs-card-name">{card.name}</p>
//                   <p className="bs-card-cat">{card.category}</p>
//                   <p className="bs-card-desc">{card.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { useRef, useEffect } from "react";
import metalImg from "../assets/metal-supermarket.png";
import vosImg from "../assets/vos-motors.png";
import flanneljaxImg from "../assets/flannel-jax.jpg";
import anaImg from "../assets/ana-karina.jpg";
import leitzImg from "../assets/leitz.jpg";
import ghouseImg from "../assets/ghouse.png";
import googleImg from "../assets/google.jpg";
import lambtonImg from "../assets/lambton.png";
import SectionHeader from "./SectionHeader";

const CARDS = [
  { id: "metal",     name: "Metal Supermarkets",    category: "Industrial",     image: metalImg,     desc: "Global supplier of small-quantity metals for businesses and individuals." },
  { id: "vos",       name: "Vos Motors",             category: "Automotive",     image: vosImg,       desc: "Premium automotive solutions focused on performance and reliability." },
  { id: "flanneljax",name: "FlannelJax",             category: "Entertainment",  image: flanneljaxImg,desc: "Experiential entertainment brand redefining social gaming." },
  { id: "ana",       name: "Ana Karina Balloons",    category: "Events & Decor", image: anaImg,       desc: "Creative balloon styling for luxury events and celebrations." },
  { id: "leitz",     name: "Leitz Tooling Systems",  category: "Manufacturing",  image: leitzImg,     desc: "Advanced precision tooling solutions for industrial applications." },
  { id: "ghouse",    name: "Ghouse Apparel",         category: "Fashion",        image: ghouseImg,    desc: "Modern apparel brand focused on quality and style." },
  { id: "google",    name: "Google",                 category: "Technology",     image: googleImg,    desc: "Worked on campaigns aligned with global digital ecosystems." },
  { id: "lambton",   name: "Lambton College",        category: "Education",      image: lambtonImg,   desc: "Applied science & technology institution with global reach." },
];

export default function BrandsSection() {
  const trackRef    = useRef(null);
  const offsetRef   = useRef(0);
  const rafRef      = useRef(null);
  const pausedRef   = useRef(false);
  const isDraggingRef      = useRef(false);
  const dragStartXRef      = useRef(0);
  const dragStartOffsetRef = useRef(0);

  // header reveal refs
  const headerRef = useRef(null);
  const trackWrapRef = useRef(null);

  const allCards = [...CARDS, ...CARDS];

  // auto-scroll
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

  // reveal header
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0) scale(1)";
      } else {
        el.style.opacity = "0";
        el.style.transform = "translateY(60px) scale(0.97)";
      }
    }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // reveal track
  useEffect(() => {
    const el = trackWrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0) scale(1)";
      } else {
        el.style.opacity = "0";
        el.style.transform = "translateY(60px) scale(0.97)";
      }
    }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleMouseEnter = () => (pausedRef.current = true);
  const handleMouseLeave = () => { pausedRef.current = false; isDraggingRef.current = false; };
  const handleMouseDown  = (e) => { isDraggingRef.current = true; dragStartXRef.current = e.clientX; dragStartOffsetRef.current = offsetRef.current; };
  const handleMouseMove  = (e) => {
    if (!isDraggingRef.current) return;
    const track = trackRef.current;
    const halfWidth = track.scrollWidth / 2;
    let newOffset = dragStartOffsetRef.current + (dragStartXRef.current - e.clientX);
    if (newOffset < 0) newOffset += halfWidth;
    if (newOffset >= halfWidth) newOffset -= halfWidth;
    offsetRef.current = newOffset;
    track.style.transform = `translateX(${-newOffset}px)`;
  };
  const handleMouseUp = () => (isDraggingRef.current = false);

  const revealStyle = {
    opacity: 0,
    transform: "translateY(60px) scale(0.97)",
    transition: "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)",
    willChange: "opacity, transform",
  };

  return (
    <>
      <style>{`
        .bs-section {
          width: 100%; background: #F5F0E8;
          padding-top: 80px; padding-bottom: 60px;
          font-family: 'Poppins', sans-serif;
        }
        .bs-track-outer { position: relative; overflow-x: hidden; }
        .bs-track { display: flex; gap: 20px; width: max-content; cursor: grab; }
        .bs-card {
          flex: 0 0 260px; height: 320px;
          background: #F0EBE1; border-radius: 16px;
          overflow: hidden; border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        .bs-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(217,119,87,0.15); }
        .bs-img-wrap { height: 150px; overflow: hidden; }
        .bs-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .bs-card:hover img { transform: scale(1.05); }
        .bs-card-body { padding: 16px; }
        .bs-card-name { font-weight: 700; color: #1A1A1A; margin-bottom: 4px; }
        .bs-card-cat { font-size: 0.65rem; color: #D97757; text-transform: uppercase; margin-bottom: 8px; }
        .bs-card-desc { font-size: 0.75rem; color: #8C8C8C; line-height: 1.5; }
      `}</style>

      <section className="bs-section">

        {/* Header reveals on scroll */}
        <div ref={headerRef} style={revealStyle}>
          <SectionHeader
            tag="Brands"
            title="Trusted by Global"
            highlight="Brands."
            subtitle="As a leading digital marketing company in India, ThelocalHub Media works with global brands to deliver consistent, growth-focused results."
          />
        </div>

        {/* Carousel reveals on scroll */}
        <div ref={trackWrapRef} style={{ ...revealStyle, transitionDelay: "120ms" }} className="bs-track-outer">
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
              <div key={i} className="bs-card">
                <div className="bs-img-wrap">
                  <img src={card.image} alt={card.name} draggable={false} />
                </div>
                <div className="bs-card-body">
                  <p className="bs-card-name">{card.name}</p>
                  <p className="bs-card-cat">{card.category}</p>
                  <p className="bs-card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}