
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-16 md:py-32 px-6 bg-soft-lilac/30" id="path">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 md:mb-20">
          <span className="text-eggplant font-bold tracking-[0.3em] uppercase text-[10px]">Trajetória de Carreira</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 text-charcoal tracking-tight">Experiência Profissional</h2>
        </div>

        <div className="space-y-0 divide-y divide-charcoal/10">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="py-8 md:py-12 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-start justify-between group">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <span className="text-[10px] font-black text-eggplant uppercase tracking-[0.25em]">
                  {exp.year}
                </span>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-charcoal group-hover:text-eggplant transition-colors duration-300">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-charcoal/50 mb-2 uppercase tracking-widest">
                  {exp.company}
                </p>
                <p className="text-xs text-charcoal/40 mb-6 italic">
                  {exp.location}
                </p>
                <p className="text-charcoal/60 text-base leading-relaxed font-light mb-4">
                  {exp.description}
                </p>

                {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {exp.bulletPoints.map((point, pointIdx) => (
                      <li key={pointIdx} className="text-charcoal/60 text-sm leading-relaxed flex items-start">
                        <span className="text-eggplant mr-2 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 bg-eggplant/10 text-eggplant text-xs font-semibold rounded-full hover:bg-eggplant hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
