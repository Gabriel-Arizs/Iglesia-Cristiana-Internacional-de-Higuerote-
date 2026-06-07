import { visitData } from "../../data"

const groupOptions = ["Vengo solo", "Con mi familia (2-4)", "Grupo grande (5+)"]

export default function VisitPlan() {
  return (
    <section className="relative bg-primary py-32 overflow-hidden">
      <div className="absolute top-0 right-0 text-[20vw] font-black text-white/5 leading-none select-none pointer-events-none -translate-y-1/4">
        VISIT
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-12">
              {visitData.title}
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-12">
              {visitData.subtitle}
            </p>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container flex-shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    {visitData.addressTitle}
                  </h4>
                  <p className="text-white/50">{visitData.address}</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container flex-shrink-0">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    {visitData.scheduleTitle}
                  </h4>
                  {visitData.schedules.map((schedule) => (
                    <p key={schedule.day} className="text-white/50">
                      {schedule.day}: {schedule.times.join(", ")}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-10 md:p-16 rounded-xl shadow-ambient">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary">
                    Nombre Completo
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary">
                    Email
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="email@ejemplo.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary">
                  Fecha de Visita
                </label>
                <input
                  className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all"
                  type="date"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary">
                  ¿Vienes acompañado?
                </label>
                <select className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all">
                  {groupOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="pt-4">
                <button
                  className="w-full bg-primary text-white font-bold py-5 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all shadow-lg"
                  type="submit"
                >
                  Confirmar mi llegada
                </button>
              </div>
              <p className="text-center text-xs text-on-surface-variant/60">
                Recibirás un código de acceso preferencial y detalles de parqueo
                vía email.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
