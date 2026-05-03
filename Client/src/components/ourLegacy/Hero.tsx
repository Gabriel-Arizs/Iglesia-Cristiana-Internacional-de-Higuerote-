import React from "react";

interface HeroLegadoProps {
  badge?: string;
  title?: React.ReactNode;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  backgroundImageUrl?: string;
  foregroundImageUrl?: string;
  vintageImageUrl?: string;
}

const HeroLegado: React.FC<HeroLegadoProps> = ({
  badge = "Legado Vivo",
  title = (
    <>
      Honramos el <span className="text-secondary-container">Ayer</span>,
      <br />
      Construimos el{" "}
      <span className="text-white underline decoration-secondary-container decoration-4 underline-offset-8">
        Mañana
      </span>
      .
    </>
  ),
  description = "Nuestra historia no está escrita en piedra, sino en el corazón de cada generación. Un puente eterno entre la sabiduría de nuestros fundadores y la pasión de nuestra juventud.",
  primaryButtonText = "Sé Parte de la Historia",
  secondaryButtonText = "Nuestra Trayectoria",
  onPrimaryClick,
  onSecondaryClick,
  backgroundImageUrl = "./menLegacy.jpg",
  foregroundImageUrl = "./womenLegacy.jpg",
  vintageImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCGJ9-mANmJZcg8-XMSfj7j9hNxgSW6qz7QlrJKCuvMScvk-hiKyRyVNzABkIVbbmPoDI1gPO_-tJmFwK1RlBwgQ-RhiV6Bmc5I4IZzdsgfNIy4-eRbTHu9m5VbghQTilao3rLSL5R9fADAFEkukvfIMecV2bIUIVHdhK0nARpUh9RPUNwvMutPkXCG0aU_oHykn5H-FUrDLBe5nchMoaHq9L7YDilOHW88y_ERj6U0dRMqfY9F-PvOmEKk4jW-_Nc97W7wLK0g12I",
}) => {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden bg-primary">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/10 to-transparent z-10" />
        <img
          src={backgroundImageUrl}
          alt="Hero background"
          className="w-full h-full object-top object-cover grayscale opacity-60"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full relative z-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-sm font-bold tracking-widest uppercase mb-6">
            {badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-tight tracking-tighter mb-8">
            {title}
          </h1>
          <p className="text-xl text-blue-100/80 leading-relaxed mb-10 max-w-lg">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onPrimaryClick}
              className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-white transition-all transform hover:-translate-y-1"
            >
              {primaryButtonText}
            </button>
            <button
              onClick={onSecondaryClick}
              className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              {secondaryButtonText}
            </button>
          </div>
        </div>

        {/* Layered Images */}
        <div className="relative hidden md:block">
          <div className="relative z-20 w-full aspect-square rounded-3xl overflow-hidden shadow-2xl transform rotate-3">
            <img
              src={foregroundImageUrl}
              alt="Legado vivo"
              className="w-full h-full object-cover brightness-90"
            />
          </div>
          <div className="absolute -top-12 -left-12 z-10 w-64 aspect-square rounded-2xl overflow-hidden shadow-2xl transform -rotate-6 border-4 border-white">
            <img
              src={vintageImageUrl}
              alt="Fundadores"
              className="w-full h-full object-cover grayscale brightness-90"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 z-0 w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroLegado;
