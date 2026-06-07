import { sanctuaryData } from "../../data"

export default function Sanctuary() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 md:w-2/3 ml-auto">
        <img
          className="w-full h-full object-cover"
          alt=""
          src={sanctuaryData.image}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-surface-container-lowest/90 backdrop-blur-xl p-12 md:p-24 max-w-2xl shadow-ambient rounded-xl">
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 tracking-tighter">
            {sanctuaryData.title}
          </h2>
          <p className="text-lg text-on-surface-variant leading-loose mb-8">
            {sanctuaryData.description}
          </p>
          <a
            className="inline-flex items-center text-primary font-bold group"
            href="#"
          >
            {sanctuaryData.ctaText}
            <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-2">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
