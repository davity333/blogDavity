import { useState, useEffect } from "react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-950/90 backdrop-blur-md shadow-lg shadow-cyan-500/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-cyan-400 font-mono font-bold text-lg tracking-widest">
          &lt;David /&gt;
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 font-mono"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-cyan-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-md border-t border-gray-800">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-6 py-3 text-sm text-gray-400 hover:text-cyan-400 hover:bg-gray-900 transition-colors font-mono"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}