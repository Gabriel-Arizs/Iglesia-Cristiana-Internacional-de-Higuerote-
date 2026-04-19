import { HandHeart } from 'lucide-react';
import type { GalleryImage } from '../../types';
import type { HeroProps} from './Hero.types';

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "../../../public/photo1.jpeg",
    alt: "Líder de adoración cantando",
    aspect: "aspect-[3/4]",
    wrapperClass: "pt-8"
  },
  {
    src: "../../../public/photo2.jpeg",
    alt: "Maestra cariñosa con niños",
    aspect: "aspect-square"
  },
  {
    src: "../../../public/photo3.jpeg",
    alt: "Líderes comunitarios conversando",
    aspect: "aspect-square"
  },
  {
    src: "../../../public/photo4.jpeg",
    alt: "Líder juvenil con adolescentes",
    aspect: "aspect-[3/4]"
  }
];

// Componente interno — no se exporta, es privado al módulo
function ImageColumn({ images }: { images: GalleryImage[] }) {
  return (
    <div className="space-y-4">
      {images.map((img, i) => (
        <div
          key={`${img.src}-${i}`}
          className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl 
                      transition-all duration-300 ${img.aspect} ${img.wrapperClass ?? ''}`}
        >
          <img
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            src={img.src}
            alt={img.alt}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export function Hero({ images = GALLERY_IMAGES }: HeroProps) {
  const leftImages = images.slice(0, 2);
  const rightImages = images.slice(2, 4);

  return (
    <section className=" relative w-full px-6 md:px-12 py-16 lg:py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="z-10 order-2 lg:order-1">
          <header>
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              Nuestro Liderazgo
            </span>
            <h1 className="text-slate-900 text-5xl md:text-7xl font-black mb-6 leading-[1.1]">
              Guiados por el <span className="text-primary">Espíritu.</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              Conoce a los hombres y mujeres que dedican su vida a servir, inspirar y caminar
              junto a nuestra congregación en cada etapa de la vida.
            </p>
          </header>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold 
                               flex items-center gap-3 hover:bg-primary/95 hover:-translate-y-1 
                               transition-all shadow-xl active:scale-95">
              Servir con nosotros
              <HandHeart />
            </button>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-4">
            <ImageColumn images={leftImages} />
            <ImageColumn images={rightImages} />
          </div>
          <div
            className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-[80px]"
            aria-hidden="true"
          />
        </div>

      </div>
    </section>
  );
}