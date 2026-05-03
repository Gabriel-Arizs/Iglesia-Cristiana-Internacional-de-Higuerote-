import React from "react";

interface CTASectionProps {
  title?: React.ReactNode;
  description?: string;
  primaryButtonText?: string;
  secondaryLinkText?: string;
  secondaryLinkHref?: string;
  onPrimaryClick?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = (
    <>
      La historia te está esperando.
      <br />
      ¿Escribirás el siguiente capítulo?
    </>
  ),
  description = "Únete a nuestro programa de liderazgo generacional y conecta con mentores que han guiado esta institución por décadas.",
  primaryButtonText = "Quiero Unirme",
  secondaryLinkText = "Ver eventos para jóvenes",
  secondaryLinkHref = "#",
  onPrimaryClick,
}) => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <div className="bg-gradient-to-br from-primary to-primary-container p-12 md:p-20 rounded-[3rem] relative overflow-hidden shadow-2xl">
          {/* Decorative blurs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/10 rounded-full -ml-32 -mb-32 blur-3xl" />

          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-8 relative z-10 leading-tight">
            {title}
          </h2>
          <p className="text-blue-100/70 text-lg mb-12 max-w-2xl mx-auto relative z-10">
            {description}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 relative z-10">
            <button
              onClick={onPrimaryClick}
              className="bg-white text-primary px-12 py-5 rounded-full font-black text-lg shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              {primaryButtonText}
            </button>
            <a
              href={secondaryLinkHref}
              className="text-white font-bold border-b-2 border-white/30 hover:border-white transition-colors py-1"
            >
              {secondaryLinkText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
