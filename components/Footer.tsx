
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [{
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/matheusvmg/'
  }, {
    name: 'GitHub',
    url: 'https://github.com/matheusvmg'
  }, {
    name: 'Substack',
    url: 'https://mvmg.substack.com'
  }];

  return (
    <footer className="py-16 md:py-32 px-6 bg-eggplant text-white overflow-hidden relative" id="contact">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-8xl font-black mb-10 md:mb-16 leading-[1.1] tracking-tighter">
          Vamos construir <br />
          seu próximo <span className="text-spring-green italic font-light">grande projeto.</span>
        </h2>

        <div className="mb-12 md:mb-24">
          <a
            className="text-xl md:text-4xl font-light hover:text-spring-green transition-colors underline decoration-spring-green/30 underline-offset-[12px] decoration-2 break-all sm:break-normal"
            href="mailto:matheusvmg@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            matheusvmg@gmail.com
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-10 md:pt-16">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              className="group flex flex-col items-center gap-3"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase group-hover:text-spring-green transition-colors">
                {link.name}
              </span>
              <div className="w-1 h-1 bg-spring-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          ))}
        </div>

        <div className="mt-20 md:mt-40 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 text-[9px] font-bold uppercase tracking-[0.3em]">
          <p>© 2026 MATHEUS GÓES. TODOS OS DIREITOS RESERVADOS.</p>
          <button
            className="hover:text-white transition-colors flex items-center gap-3 group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Voltar ao topo
            <span className="material-symbols-outlined text-sm group-hover:-translate-y-1 transition-transform">north</span>
          </button>
        </div>
      </div>

      {/* Decorative BG element */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-white/5 rounded-full blur-[60px] md:blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
    </footer>
  );
};

export default Footer;
