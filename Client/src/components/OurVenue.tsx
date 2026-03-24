export default function OurVenue() { // Antes: NuestraSede
  return (
    <section className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[600px] rounded-xl overflow-hidden shadow-ambient">
          <img
            className="w-full h-full object-cover"
            alt="Main auditorium with modern blue lighting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB1RC21lYvDA1zvjoz1kUu8USGwIFNPP3ASdW_nBfbRzEKTJUN6EyAMaXmkDNOuQhNj0MDQIANa7ntcxBZ26eseRH3uNBje7jZ4a1ZGbbrYFLKSYj7Ab0aeD9-GEGbR-xnLlSsBGw5hP3ay0WRxueS7EzmPhtD2-A9NuJ9jgFBzb9WTFRGaKF95Xsj-YfRZZ0Uanwcx1zp8pi3nolb7ylXMjWIIDgy6eBSehdCGmWFRiG52N6Z9SHCnMM-8vC-6ubhb1n-TdIz5e0"
          />
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg">
            <p className="text-primary font-bold text-lg mb-1">Auditorio Principal</p>
            <p className="text-on-surface-variant text-sm">Calle 22c # 31-01, Bogotá</p>
          </div>
        </div>
        <div>
          <label className="text-primary-container font-bold uppercase tracking-widest text-xs mb-4 block">
            Nuestra Sede
          </label>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tight font-headline">
            Un Refugio Arquitectónico
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
            Diseñada con una visión de excelencia, nuestra sede principal es más
            que un edificio; es un punto de encuentro donde la arquitectura y la
            fe se entrelazan para crear una atmósfera de paz.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-ambient">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-4">groups</span>
              <h4 className="text-3xl font-bold text-primary mb-1">12,000</h4>
              <p className="text-on-surface-variant text-sm font-medium">Capacidad Total</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-ambient">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-4">local_parking</span>
              <h4 className="text-3xl font-bold text-primary mb-1">1,500</h4>
              <p className="text-on-surface-variant text-sm font-medium">Plazas de Parqueo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}