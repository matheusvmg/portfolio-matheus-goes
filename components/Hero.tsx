
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-48 pb-12 md:pb-20 px-6 min-h-screen flex flex-col items-center justify-center text-center bg-spring-green">
      <div className="max-w-5xl mx-auto">
        <span className="text-eggplant font-bold tracking-[0.25em] uppercase text-xs mb-6 block opacity-80 animate-fade-in">
          Engenharia de Software Full-stack & Mobile
        </span>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 text-charcoal leading-[1.05]">
          Desenvolvendo soluções <br />
          <span className="text-eggplant">robustas e escaláveis</span> <br />
          do Front ao Back-end.
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mt-8 md:mt-12">
          <a
            className="px-8 py-3 md:px-10 md:py-4 bg-charcoal text-white rounded font-bold text-xs tracking-[0.2em] uppercase hover:bg-eggplant transition-all shadow-xl shadow-charcoal/10"
            href="#work"
          >
            Explorar Portfólio
          </a>
          <a
            className="px-8 py-3 md:px-10 md:py-4 border-2 border-charcoal/10 hover:border-eggplant text-charcoal rounded font-bold text-xs tracking-[0.2em] uppercase transition-all"
            href="#contact"
          >
            Iniciar Projeto
          </a>
        </div>
      </div>
      <div className="mt-12 md:mt-20 w-full max-w-6xl aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border-4 md:border-[12px] border-white relative group">
        <img
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
          alt="Ambiente de desenvolvimento moderno"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD20XVAkV-9cjEMWOO1VzFIeYVM_f2DmcGtpVDuZb4HtF9seXidqawBT1QCd6puTi4NxT-7lZCVFAjAPnSjTsHQk0m_ufV7p4ig-lh1FZrkRJVralsVCagVzDH_8X4pxjRCL1NM1Bm7d4cfOoCw4ECRBx96E0z6gm2j8qE9xIcSsCc_T6RL_4FK96C8UcnNY4sUriFgRsayQ9Z_jiNrZWQY_cSemrnSuN0iml2cHPPKMNOb5CsoXXBdVYuHGgFI9x_CYiOYAjCyBGfO"
        />
        <div className="absolute inset-0 bg-eggplant/5 mix-blend-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
