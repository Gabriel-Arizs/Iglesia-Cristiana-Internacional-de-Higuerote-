import { ministryCards } from "../../data"

export default function MinistriesGrid() {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">
              Vibrante & Activo
            </span>
            <h2 className="text-6xl md:text-8xl font-bold text-primary tracking-tighter">
              Nuestros Ministerios.
            </h2>
          </div>
          <div className="pb-4">
            <a
              href="#/ministries"
              className="text-primary font-bold border-b-2 border-primary pb-1"
            >
              Ver todos los programas
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ministryCards.map((card, index) => {
            const offsetClasses = ["", "md:translate-y-12", "md:translate-y-24"]
            return (
              <a
                key={card.id}
                href={`#/ministries`}
                className={`group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-ambient h-[600px] block ${offsetClasses[index]}`}
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt=""
                  src={card.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <span className="text-xs font-bold tracking-widest uppercase mb-2 block text-on-primary-container">
                    {card.tag}
                  </span>
                  <h3 className="text-3xl font-bold mb-4 leading-none text-on-primary">
                    {card.title}
                  </h3>
                  <p className="text-on-primary/70 line-clamp-2 mb-6">
                    {card.subtitle}
                  </p>
                  <span className="material-symbols-outlined text-on-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                    trending_flat
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
