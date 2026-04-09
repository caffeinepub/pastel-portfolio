import { useEffect, useState } from "react";
import { navItems } from "../data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const reversed = [...sections].reverse();
      for (const section of reversed) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      data-ocid="nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <button
          type="button"
          onClick={() => {
            const el = document.getElementById("about");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="font-display font-semibold text-lg text-foreground hover:text-primary transition-smooth bg-transparent border-0 p-0 cursor-pointer"
        >
          <span className="text-gradient-soft">Akshaya</span>
        </button>

        {/* Desktop nav */}
        <nav aria-label="Main navigation">
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    data-ocid={`nav-link-${id}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium font-body transition-smooth inline-block ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted/60"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg text-foreground/70 hover:bg-muted transition-smooth"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border/50 px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="py-2 px-3 rounded-lg text-sm font-medium font-body text-foreground/80 hover:bg-primary/10 hover:text-primary transition-smooth"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
