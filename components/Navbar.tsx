import React, { useState, useEffect } from "react";
import { useLocale } from "../i18n/LocaleContext";
import { SupportedLocale } from "../i18n/types";

const localeLabels: Record<SupportedLocale, string> = {
  "pt-BR": "PT",
  en: "EN",
};

const Navbar: React.FC = () => {
  const { locale, setLocale, t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    setLocale(locale === "pt-BR" ? "en" : "pt-BR");
  };

  const navItems = [
    { name: t.navbar.projects, link: "#work" },
    { name: t.navbar.about, link: "#about" },
    { name: t.navbar.career, link: "#path" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3 border-b border-eggplant/10" : "py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 bg-eggplant rounded flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">blur_on</span>
          </div>
          <span className="text-lg font-black tracking-tighter text-charcoal uppercase">
            Matheus Góes
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-eggplant transition-colors"
              href={item.link}
            >
              {item.name}
            </a>
          ))}
          <a
            className="px-6 py-2 bg-eggplant text-white rounded text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-charcoal transition-all shadow-lg shadow-eggplant/20"
            href="#contact"
          >
            {t.navbar.contact}
          </a>
          {/* Language Toggle */}
          <button
            onClick={toggleLocale}
            className="ml-2 text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/50 hover:text-eggplant transition-colors border border-charcoal/20 rounded px-2 py-1"
            aria-label="Toggle language"
          >
            {localeLabels[locale]}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLocale}
            className="text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/50 hover:text-eggplant transition-colors border border-charcoal/20 rounded px-2 py-1"
            aria-label="Toggle language"
          >
            {localeLabels[locale]}
          </button>
          <button
            className="md:hidden text-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-charcoal/10 flex flex-col p-6 gap-4 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <a
              key={item.name}
              className="text-sm font-bold tracking-widest uppercase py-2 border-b border-charcoal/5"
              href={item.link}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            className="text-sm font-bold tracking-widest uppercase py-2 border-b border-charcoal/5"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.navbar.contact}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
