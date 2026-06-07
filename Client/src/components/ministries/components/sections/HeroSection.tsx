import { useEffect, useRef } from "react"

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
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3vmV8vFp1n2lCphx6mIbKk-8NEFOSQ5F7y5x7g0fURczSXT_UolvKs_T4O7lN6ZWtBxR7p1t02uxXB6xwlNXajmCjThXECV8VexuqE9oGdCOHombnrmt1H--ZzrPpS5hqFovDm4dZsla3zBi03rT7OBPOgqZt3BLpznpCdk_i7CzeEqXPaCwA8KjkExdxL45B9XZ3FkJfBvCSnavdzYVqClA8Ttjcif63BMnKWdcYiRwV9Ks8ZpuPaUskJKxoVjM8FecqaEym1CE",
    alt: "Kids ministry",
    className: "col-span-1 row-span-1"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoNPsuHXmGuyRFPfEZcbNL6y2g2tpNb2JITDoSUUGRoNqmnvvQJx-_TcqNPFesS9tX0RTWJyOrjDmQFGZ6M-h2Uv5AFsp71Cme8dhX_Q1XSrvr0E_y6BH2ONPhLcfIWY36NJuut8R8L9V7JH5k4UdVyZTrX3keZvCAKM3r_7DdBXglF6Kx7G96IffaSBoBGuoCaUCNZca_K8dTP4UNcM7bCSlSiFRIJsHuqtuVeT2pOHX7eIkbUzsUE42eDH7b4xE1DobDw72Ujzw",
    alt: "Community outreach",
    className: "col-span-1 row-span-2"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3vmV8vFp1n2lCphx6mIbKk-8NEFOSQ5F7y5x7g0fURczSXT_UolvKs_T4O7lN6ZWtBxR7p1t02uxXB6xwlNXajmCjThXECV8VexuqE9oGdCOHombnrmt1H--ZzrPpS5hqFovDm4dZsla3zBi03rT7OBPOgqZt3BLpznpCdk_i7CzeEqXPaCwA8KjkExdxL45B9XZ3FkJfBvCSnavdzYVqClA8Ttjcif63BMnKWdcYiRwV9Ks8ZpuPaUskJKxoVjM8FecqaEym1CE",
    alt: "Greeting at door",
    className: "col-span-1 row-span-1"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR1JTj5f2pj9cF44yymTJtBx8JwAs5oT0E1y6w_nBFj2TOmDYUDtNSd0WSa3ROdwkACtC_1iYY_ffenap0pLVI32of5O6Z0-Sn2FN54XoEQrv87zweI8_bYd0z5Y23k6Z9LOEqCYBhF9TTc67ndEEPOEZF0DKijEuYSlO0GJTnog73CatDTIlKqiG1xp2cAEk78hlWnjdvfCPaEF8RM1LcQsUAm9-wC_diObUFBeJGYUF_rSwJWwRnvHQA9CveSwqrFUH8L-8914g",
    alt: "Coffee and conversation",
    className: "col-span-2 row-span-1"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoNPsuHXmGuyRFPfEZcbNL6y2g2tpNb2JITDoSUUGRoNqmnvvQJx-_TcqNPFesS9tX0RTWJyOrjDmQFGZ6M-h2Uv5AFsp71Cme8dhX_Q1XSrvr0E_y6BH2ONPhLcfIWY36NJuut8R8L9V7JH5k4UdVyZTrX3keZvCAKM3r_7DdBXglF6Kx7G96IffaSBoBGuoCaUCNZca_K8dTP4UNcM7bCSlSiFRIJsHuqtuVeT2pOHX7eIkbUzsUE42eDH7b4xE1DobDw72Ujzw",
    alt: "Modern church architecture",
    className: "col-span-1 row-span-1"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR1JTj5f2pj9cF44yymTJtBx8JwAs5oT0E1y6w_nBFj2TOmDYUDtNSd0WSa3ROdwkACtC_1iYY_ffenap0pLVI32of5O6Z0-Sn2FN54XoEQrv87zweI8_bYd0z5Y23k6Z9LOEqCYBhF9TTc67ndEEPOEZF0DKijEuYSlO0GJTnog73CatDTIlKqiG1xp2cAEk78hlWnjdvfCPaEF8RM1LcQsUAm9-wC_diObUFBeJGYUF_rSwJWwRnvHQA9CveSwqrFUH8L-8914g",
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
