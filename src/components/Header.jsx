import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On homepage: always transparent until scrolled
  // On other pages: always solid bg
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        px-8 md:px-14 py-4
        flex items-center justify-between
        font-main transition-all duration-300
        ${isTransparent
          ? "bg-transparent"
          : "bg-[#0f0604]/90 backdrop-blur-md shadow-lg"
        }
      `}
    >
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-primary tracking-tight">
        ThelocalHub<span className="text-white"> Media</span>
      </Link>

      {/* Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {[
          { label: "Home",      to: "/" },
          { label: "Services",  to: "/services" },
          { label: "About",     to: "/about" },
          { label: "Portfolio", to: "/portfolio" },
          { label: "Contact",   to: "/contact" },
        ].map(({ label, to }) => (
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

        {/* CTA Button */}
        <Link
          to="/contact"
          className="ml-4 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
        >
          Get Started
        </Link>
      </nav>

      {/* Mobile hamburger (basic) */}
      <button className="md:hidden flex flex-col gap-1.5">
        <span className="w-6 h-0.5 bg-white block" />
        <span className="w-6 h-0.5 bg-white block" />
        <span className="w-4 h-0.5 bg-white block" />
      </button>
    </header>
  );
}

export default Header;