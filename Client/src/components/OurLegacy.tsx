export default function OurLegacy() { 
  return (
    <section className="py-32 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 z-10">
            <label className="text-primary-container font-bold uppercase tracking-widest text-xs mb-4 block">
              Historia y Visión
            </label>
            <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 tracking-tighter leading-none">
              Nuestro Legado
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Desde nuestra fundación, hemos creído que el amor de Dios puede
              transformar no solo vidas individuales, sino ciudades enteras.
              Nuestra historia está escrita con fe, perseverancia y una visión
              inquebrantable.
            </p>
            <a className="text-primary font-bold inline-flex items-center group" href="#">
              Conoce nuestra historia
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="lg:col-span-7 relative flex justify-end">
            <div className="relative w-full max-w-xl aspect-[4/5]">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-xl overflow-hidden shadow-2xl z-0 rotate-3">
                <img
                  className="w-full h-full object-cover grayscale "
                  alt="Historical photo of church founders"
                  src="./Ministro.jpeg"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 rounded-xl overflow-hidden shadow-2xl z-20 -rotate-2 border-8 border-white">
                <img
                  className="w-full h-full object-cover"
                  alt="Worship scene with crowds"
                  src="./Pastora.jpeg"
                />
              </div>
              <div className="absolute top-1/4 -left-12 w-48 h-48 bg-primary-container rounded-full flex items-center justify-center text-white z-30 shadow-xl">
                <div className="text-center">
                  <span className="text-4xl font-bold block">20+</span>
                  <span className="text-xs uppercase tracking-widest">Años de Fe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}