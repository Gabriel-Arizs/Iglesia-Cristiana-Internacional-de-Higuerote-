import React from "react";

export interface EraItem {
  periodLabel: string;
  title: string;
  description: string;
}

interface ThenAndNowProps {
  eras?: EraItem[];
  modernImageUrl?: string;
  vintageImageUrl?: string;
  floatingQuote?: string;
}

const defaultEras: EraItem[] = [
  {
    periodLabel: "Fundación (1950 - 1980)",
    title: "El Sacrificio de los Pioneros",
    description:
      "Nuestros fundadores caminaron por fe cuando no había caminos. Su visión arquitectónica no solo construyó muros, sino un refugio espiritual para la ciudad.",
  },
  {
    periodLabel: "Actualidad (2020 - Presente)",
    title: "Liderazgo Dinámico",
    description:
      "Hoy, transformamos el espacio digital con la misma pasión, llevando el mensaje a plataformas globales y conectando con el corazón de la Generación Z.",
  },
];

const ThenAndNow: React.FC<ThenAndNowProps> = ({
  eras = defaultEras,
  modernImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCpJo6-4VtIBkMKNkpEGb14lQ5eyO3fxAp5pOPz4aILtrAS0AVbsC2qEQKMbE8ql-QkQgheGgw05GmA7iOv9a6PxaL-VszCE0Fdw5r5CIjbfl7SZdTkI2eJFgEPM-J6m8794naTtVtDto_PMZBhcNn7wXxQnjbDsgIUMeJM_v-2wRrNusnTM1RELVBFlSEguq7_PFngJ0IOZ9Eog69xpj-Lh7L5LC1EWBuYay53HyuNixuityHLF3M_hwQuJEYt0tQvHXMY6MbYZCA",
  vintageImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBFWSpb5sufL6uRemAu3i68TGRQO5rxabmD8GbG0G29OOohv7u4l_UIWAdzltg-RY15rDe8SNHnXSiUgUMwTSTrXMPInocPfo4wIs0KhK6WhydzdMpuuvX9Gbw1mc80WdAq_74GpW_Jt3Qp9qd1Q0Z9IJpUfXObkfqaUTZbGuB1fnpQ0qTPWR5SMqcbO8cIIca5id_4Xs0-7sk5-VsEBiOahhBQBjvbNoH1-E_zjNIyFkdOpAak0l-czRC2RALpZZs-cQQj94KXl7A",
  floatingQuote = '"El legado no es lo que dejamos, sino en quién nos convertimos."',
}) => {
  const borderColors = ["border-secondary-container", "border-primary"];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Eras Text */}
          <div className="w-full md:w-5/12 order-2 md:order-1">
            <div className="space-y-12">
              {eras.map((era, i) => (
                <div
                  key={i}
                  className={`relative pl-8 border-l-4 ${borderColors[i % borderColors.length]}`}
                >
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-2">
                    {era.periodLabel}
                  </h4>
                  <h3 className="text-2xl font-bold text-primary mb-4">{era.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{era.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Layered Images */}
          <div className="w-full md:w-7/12 order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/5]">
              {/* Modern image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white">
                <img
                  src={modernImageUrl}
                  alt="Presente"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Vintage peek */}
              <div className="absolute -top-12 -right-12 w-64 aspect-square rounded-2xl overflow-hidden shadow-2xl z-0 transform rotate-12 bg-slate-300">
                <img
                  src={vintageImageUrl}
                  alt="Pasado"
                  className="w-full h-full object-cover grayscale brightness-75"
                />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
              </div>

              {/* Floating tag */}
              <div className="absolute bottom-12 -left-12 z-20 bg-white/80 backdrop-blur p-6 rounded-xl shadow-2xl max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-error rounded-full animate-pulse" />
                  <span className="text-xs font-black text-primary uppercase">
                    Misión en Vivo
                  </span>
                </div>
                <p className="text-sm font-bold text-primary">{floatingQuote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThenAndNow;
