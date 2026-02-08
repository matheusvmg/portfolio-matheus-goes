
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7 space-y-12">
          <div>
            <span className="text-accent-purple font-bold uppercase tracking-[0.25em] text-[10px]">Engenharia de Software</span>
            <h2 className="text-4xl md:text-6xl font-black text-charcoal mt-6 mb-8 leading-[1.15]">
              Transformando Complexidade em <br />Soluções Escaláveis.
            </h2>
            <p className="text-xl text-charcoal/60 leading-relaxed font-light max-w-2xl">
              Engenheiro de Software Sênior com mais de 5 anos de experiência construindo aplicações mobile e web de alta performance para empresas como GM Financial e Claro Brasil. Especializado em arquitetura de software, desenvolvimento React Native/iOS e liderança técnica de times de engenharia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-10 bg-[#FCFCFC] border-l-4 border-eggplant group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl hover:shadow-eggplant/5">
              <h4 className="text-5xl font-black text-eggplant mb-2">05+</h4>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/40">Anos de Experiência</p>
              <p className="mt-6 text-sm text-charcoal/50 leading-relaxed">Expertise em React Native, iOS nativo, React.js, Node.js e TypeScript. Foco em arquitetura de software e design systems enterprise.</p>
            </div>
            <div className="p-10 bg-[#FCFCFC] border-l-4 border-accent-green group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl hover:shadow-accent-green/5">
              <h4 className="text-5xl font-black text-eggplant mb-2">10M+</h4>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/40">Usuários Impactados</p>
              <p className="mt-6 text-sm text-charcoal/50 leading-relaxed">Aplicações mobile e web utilizadas por milhões de usuários em projetos para GM Financial e Claro Brasil.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative z-10">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-soft-lilac grayscale hover:grayscale-0 transition-all duration-700">
              <img
                className="w-full h-full object-cover"
                alt="Retrato do Engenheiro de Software"
                src="/Selfie.jpg"
              />
            </div>
          </div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-spring-green rounded-full -z-0 blur-3xl opacity-50"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-soft-lilac rounded-2xl -z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
