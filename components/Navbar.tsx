
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Projetos', link: '#work' },
    { name: 'Sobre', link: '#about' },
    { name: 'Carreira', link: '#path' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 border-b border-eggplant/10' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 bg-eggplant rounded flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">blur_on</span>
          </div>
          <span className="text-lg font-black tracking-tighter text-charcoal uppercase">Matheus Góes</span>
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
            Contato
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-charcoal" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
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
            Contato
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
