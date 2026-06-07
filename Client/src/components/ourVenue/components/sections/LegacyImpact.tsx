import { legacyData } from "../../data"

export default function LegacyImpact() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 md:w-2/3 mr-auto">
        <img
          className="w-full h-full object-cover"
          alt=""
          src={legacyData.image}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10 flex justify-end">
        <div className="bg-primary p-12 md:p-24 max-w-2xl shadow-ambient rounded-xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-on-primary-container">
            {legacyData.title}
          </h2>
          <p className="text-lg text-on-primary-container/80 leading-loose mb-8">
            {legacyData.description}
          </p>
          <div className="grid grid-cols-2 gap-8">
            {legacyData.stats.map((stat) => (
              <div key={stat.label}>
                <span className="block text-4xl font-black text-on-primary-container">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-on-primary-container/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 text-[20vw] font-black text-white/5 leading-none select-none pointer-events-none -translate-y-1/4">
        {legacyData.decorativeText}
      </div>
    </section>
  )
}
