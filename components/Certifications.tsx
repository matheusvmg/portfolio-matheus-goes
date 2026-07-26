import React from "react";
import { CERTIFICATIONS } from "../constants";
import { useLocale } from "../i18n/LocaleContext";

const Certifications: React.FC = () => {
  const { t } = useLocale();

  return (
    <section className="py-16 md:py-32 px-6 bg-white" id="certifications">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <span className="text-accent-green font-bold tracking-[0.3em] uppercase text-[10px]">
            {t.certifications.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 text-charcoal tracking-tight">
            {t.certifications.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {CERTIFICATIONS.map((cert, idx) => {
            const translatedCert = t.certificationData[idx];
            return (
              <a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 md:p-10 bg-[#FCFCFC] border-l-4 ${
                  idx % 2 === 0 ? "border-eggplant" : "border-accent-green"
                } group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl hover:shadow-eggplant/5 block`}
              >
                <h4 className="text-2xl md:text-3xl font-black text-eggplant mb-2">
                  {translatedCert.title}
                </h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/40">
                  {translatedCert.category}
                </p>
                <p className="mt-6 text-sm text-charcoal/50 leading-relaxed">
                  {translatedCert.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
