import React from "react";
import { PROJECTS } from "../constants";
import { useLocale } from "../i18n/LocaleContext";

const Portfolio: React.FC = () => {
  const { t } = useLocale();

  return (
    <section className="py-16 md:py-32 px-6 bg-white" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <span className="text-accent-green font-bold tracking-[0.3em] uppercase text-[10px]">
            {t.portfolio.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 text-charcoal tracking-tight">
            {t.portfolio.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((project, idx) => {
            const translatedProject = t.projectData[idx];
            return (
              <div
                key={project.id}
                className={`group p-6 rounded-2xl border border-charcoal/5 transition-all duration-500 cursor-pointer ${project.colorClass}`}
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={translatedProject.title}
                    src={project.imageUrl}
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-charcoal group-hover:text-eggplant transition-colors">
                  {translatedProject.title}
                </h3>
                <p className="text-[10px] text-charcoal/40 font-bold mb-6 uppercase tracking-[0.2em]">
                  {translatedProject.category}
                </p>
                <div className="h-[2px] bg-charcoal/10 w-full group-hover:bg-eggplant transition-all duration-500 origin-left scale-x-100"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
