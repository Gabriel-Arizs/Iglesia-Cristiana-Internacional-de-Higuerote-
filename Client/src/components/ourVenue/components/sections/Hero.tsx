import { heroData } from "../../data"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt=""
          src={heroData.backgroundImage}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent" />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <span className="inline-block text-primary font-bold tracking-widest uppercase text-xs mb-6">
            {heroData.label}
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary leading-[0.9] tracking-tighter mb-8">
            {heroData.title}
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
            {heroData.subtitle}
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="#/ministries"
              className="bg-primary text-on-primary px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:bg-primary-container hover:text-on-primary-container transition-all"
            >
              {heroData.primaryCta}
            </a>
            <a
              href="#/our-legacy"
              className="border border-outline-variant text-primary px-10 py-5 rounded-full text-lg font-bold hover:bg-surface-container-low transition-all"
            >
              {heroData.secondaryCta}
            </a>
          </div>
        </div>
      </div>
      <div className="absolute right-12 bottom-24 hidden lg:block">
        <div className="flex items-center gap-4 text-primary opacity-30">
          <span className="text-sm font-bold tracking-widest uppercase -rotate-90 origin-right">
            Scroll para Descubrir
          </span>
          <span className="material-symbols-outlined animate-bounce">
            south
          </span>
        </div>
      </div>
    </section>
  )
}
