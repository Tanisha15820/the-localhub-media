// import { Link, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";

// function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();
//   const isHome = location.pathname === "/";

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // On homepage: always transparent until scrolled
//   // On other pages: always solid bg
//   const isTransparent = isHome && !scrolled;

//   return (
//     <header
//       className={`
//         fixed top-0 left-0 right-0 z-50
//         px-8 md:px-14 py-4
//         flex items-center justify-between
//         font-main transition-all duration-300
//         ${isTransparent
//           ? "bg-transparent"
//           : "bg-[#0f0604]/90 backdrop-blur-md shadow-lg"
//         }
//       `}
//     >
//       {/* Logo */}
//       <Link to="/" className="text-xl font-bold text-primary tracking-tight">
//         ThelocalHub<span className="text-white"> Media</span>
//       </Link>

//       {/* Nav */}
//       <nav className="hidden md:flex items-center gap-8">
//         {[
//           { label: "Home",      to: "/" },
//           { label: "Services",  to: "/services" },
//           { label: "About",     to: "/about" },
//           { label: "Portfolio", to: "/portfolio" },
//           { label: "Contact",   to: "/contact" },
//         ].map(({ label, to }) => (
//           <Link
//             key={to}
//             to={to}
//             className={`
//               text-sm font-medium transition-colors duration-200
//               ${location.pathname === to
//                 ? "text-primary"
//                 : "text-white/80 hover:text-white"
//               }
//             `}
//           >
//             {label}
//           </Link>
//         ))}

//         {/* CTA Button */}
//         <Link
//           to="/contact"
//           className="ml-4 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
//         >
//           Get Started
//         </Link>
//       </nav>

//       {/* Mobile hamburger (basic) */}
//       <button className="md:hidden flex flex-col gap-1.5">
//         <span className="w-6 h-0.5 bg-white block" />
//         <span className="w-6 h-0.5 bg-white block" />
//         <span className="w-4 h-0.5 bg-white block" />
//       </button>
//     </header>
//   );
// }

// export default Header;

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home",      to: "/" },
  { label: "Services",  to: "/services" },
  { label: "About",     to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact",   to: "/contact" },
];

function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location                  = useLocation();
  const isHome                    = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isTransparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <style>{`
        .hdr-mobile-menu {
          position: fixed;
          inset: 0;
          top: 0;
          z-index: 49;
          background: #0f0604;
          display: flex;
          flex-direction: column;
          padding: 100px 32px 48px;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hdr-mobile-menu.open {
          transform: translateX(0);
        }
        .hdr-ham span {
          display: block;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
          transform-origin: center;
        }
        .hdr-ham.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); width: 24px !important; }
        .hdr-ham.open span:nth-child(2) { opacity: 0; }
        .hdr-ham.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); width: 24px !important; }
        .hdr-nav-link {
          font-size: 2rem;
          font-weight: 800;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          letter-spacing: -0.03em;
          font-family: 'Poppins', sans-serif;
          transition: color 0.2s;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: block;
        }
        .hdr-nav-link:hover,
        .hdr-nav-link.active { color: #D97757; }
        .hdr-nav-link:last-of-type { border-bottom: none; }
      `}</style>

      {/* ── HEADER BAR ── */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          px-6 md:px-14 py-4
          flex items-center justify-between
          font-main transition-all duration-300
          ${isTransparent
            ? "bg-transparent"
            : "bg-[#0f0604]/90 backdrop-blur-md shadow-lg"
          }
        `}
      >
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary tracking-tight" style={{ zIndex: 51, position: "relative" }}>
          ThelocalHub<span className="text-white"> Media</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`
                text-sm font-medium transition-colors duration-200
                ${location.pathname === to
                  ? "text-primary"
                  : "text-white/80 hover:text-white"
                }
              `}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`hdr-ham md:hidden flex flex-col gap-[5px] p-1 ${menuOpen ? "open" : ""}`}
          style={{ zIndex: 51, position: "relative", cursor: "pointer", background: "none", border: "none" }}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span style={{ width: 24 }} />
          <span style={{ width: 24 }} />
          <span style={{ width: 16 }} />
        </button>
      </header>

      {/* ── MOBILE FULL-SCREEN MENU ── */}
      <div className={`hdr-mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <nav style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`hdr-nav-link ${location.pathname === to ? "active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div style={{ marginTop: "auto", paddingTop: 32 }}>
          <Link
            to="/contact"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#D97757",
              color: "#fff",
              borderRadius: 12,
              padding: "16px 32px",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1rem",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Get Started →
          </Link>
          <p style={{ marginTop: 16, textAlign: "center", fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", fontFamily: "'Poppins', sans-serif" }}>
            Free strategy call • No commitment
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;