import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Value", href: "#what-i-can-help" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function getCurrentSection() {
  const sections = navItems.map((item) => item.href.replace("#", ""));
  let current = sections[0];
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom > 80) {
        current = id;
        break;
      }
    }
  }
  return current;
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setActiveSection(getCurrentSection());
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll with effect
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all border-b border-border bg-background",
        "h-[60px]",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-xs" : ""
      )}
    >
      <div className="container flex items-center justify-between h-full">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Kien Nguyen</span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "relative px-2 py-1 text-foreground/80 hover:text-primary transition-colors duration-300",
                activeSection === item.href.replace("#", "") &&
                  "text-primary font-bold"
              )}
            >
              {item.name}
              {activeSection === item.href.replace("#", "") && (
                <span className="absolute left-0 right-0 -bottom-1 h-[3px] rounded bg-primary transition-all duration-300"></span>
              )}
            </a>
          ))}
        </div>

        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "relative px-2 py-1 text-foreground/80 hover:text-primary transition-colors duration-300",
                  activeSection === item.href.replace("#", "") &&
                    "text-primary font-bold"
                )}
              >
                {item.name}
                {activeSection === item.href.replace("#", "") && (
                  <span className="absolute left-0 right-0 -bottom-1 h-[3px] rounded bg-primary transition-all duration-300"></span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
