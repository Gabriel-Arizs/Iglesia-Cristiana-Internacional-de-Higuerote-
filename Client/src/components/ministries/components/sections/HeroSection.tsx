import { useEffect, useRef } from "react"

import mosaicKids from "../../../../assets/IMG_20260607_183838_455.jpg"
import mosaicOutreach from "../../../../assets/IMG_20260607_183851_907.jpg"
import mosaicGreeting from "../../../../assets/IMG_20260607_183746_042.jpg"
import mosaicCoffee from "../../../../assets/IMG_20260607_183653_764.jpg"
import mosaicArch from "../../../../assets/IMG_20260607_183653_806.jpg"
import mosaicMusic from "../../../../assets/IMG_20260607_183816_822.jpg"

interface MosaicImage {
  src: string
  alt: string
  className: string
}

const mosaicImages: MosaicImage[] = [
  {
    src: "./photo1.jpeg",
    alt: "Smiling church community",
    className: "col-span-2 row-span-2"
  },
  {
    src: "./photo2.jpeg",
    alt: "Worship moment",
    className: "col-span-1 row-span-1"
  },
  {
    src: "./photo3.jpeg",
    alt: "Person laughing",
    className: "col-span-1 row-span-2"
  },
  {
    src: "./photo4.jpeg",
    alt: "Small group gathering",
    className: "col-span-2 row-span-1"
  },
  {
    src: mosaicKids,
    alt: "Kids ministry",
    className: "col-span-1 row-span-1"
  },
  {
    src: mosaicOutreach,
    alt: "Community outreach",
    className: "col-span-1 row-span-2"
  },
  {
    src: mosaicGreeting,
    alt: "Greeting at door",
    className: "col-span-1 row-span-1"
  },
  {
    src: mosaicCoffee,
    alt: "Coffee and conversation",
    className: "col-span-2 row-span-1"
  },
  {
    src: mosaicArch,
    alt: "Modern church architecture",
    className: "col-span-1 row-span-1"
  },
  {
    src: mosaicMusic,
    alt: "Music team",
    className: "col-span-1 row-span-1"
  }
]

interface MosaicItemProps {
  image: MosaicImage
  index: number
}

const MosaicItem: React.FC<MosaicItemProps> = ({ image, index }) => {
  return (
    <div
      className={`mosaic-item ${image.className} rounded-2xl overflow-hidden shadow-md`}
      style={{
        animationDelay: `${index * 80}ms`,
        animation: "fadeInScale 0.6s ease-out both"
      }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
    </div>
  )
}

export const HeroSection: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      @keyframes fadeInScale {
        from {
          opacity: 0;
          transform: scale(0.92);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(24px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .hero-title {
        animation: slideUp 0.7s ease-out both;
      }
      .hero-subtitle {
        animation: slideUp 0.7s ease-out 0.15s both;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <section className="pt-12 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="hero-title text-5xl md:text-7xl font-bold tracking-tight">
            Nuestros<span className="text-primary"> Ministerios.</span>
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Através de nuestros ministerios, buscamos impactar vidas y
            comunidades, ofreciendo oportunidades para servir, crecer y conectar
            con otros en la fe.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-[150px] md:auto-rows-[200px]"
          aria-label="Community mosaic photo grid"
        >
          {mosaicImages.map((image, index) => (
            <MosaicItem key={index} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
