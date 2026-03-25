import type { HeroSectionProps } from "../types/Hero.types";

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Un nuevo comienzo en Jesús, Salvación y esperanza para tu familia.",
  subtitle = "Nos reunimos para adorar, ser transformados y compartir el mensaje de esperanza con nuestra ciudad y el mundo.",
  backgroundImage = "https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?auto=format&fit=crop&q=80", 
  buttonText = "Nosotros",
  onButtonClick,
}) => {
  return (
    <section className="relative pt-24 pb-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto relative h-[600px] md:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl">
        
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            alt="Hero background"
            src={backgroundImage}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 font-headline">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col items-center gap-8">
            <button
              onClick={onButtonClick}
              className="bg-[#cee5ff] text-[#001d33] px-12 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-lg uppercase tracking-wider"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;