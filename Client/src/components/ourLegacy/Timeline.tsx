import React from "react";

export interface TimelineItem {
  year: string;
  icon: string;
  title: string;
  description: string;
}

interface TimelineProps {
  label?: string;
  title?: string;
  items?: TimelineItem[];
}

const defaultItems: TimelineItem[] = [
  {
    year: "1984",
    icon: "star",
    title: "La Semilla de Fe",
    description:
      "Fundación de la primera congregación bajo una visión de restauración familiar profunda.",
  },
  {
    year: "2005",
    icon: "church",
    title: "Expansión Arquitectónica",
    description:
      "Consagración de nuestro actual santuario, un espacio diseñado para la excelencia y el encuentro.",
  },
  {
    year: "2020",
    icon: "public",
    title: "Trascendencia Digital",
    description:
      "Lanzamiento del ministerio global, rompiendo fronteras físicas para llevar luz a cada nación.",
  },
];

const Timeline: React.FC<TimelineProps> = ({
  label = "Nuestra Trayectoria",
  title = "Momentos que definieron nuestro ADN.",
  items = defaultItems,
}) => {
  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <label className="text-primary-container font-bold text-sm tracking-widest uppercase block">
            {label}
          </label>
          <h2 className="text-5xl font-black text-primary tracking-tight">
            {title}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative space-y-24 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-200 before:to-transparent">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="material-symbols-outlined text-sm">
                  {item.icon}
                </span>
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 bg-surface-container-low rounded-xl shadow-lg shadow-blue-900/5 transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl font-black text-primary">
                    {item.year}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-on-surface mb-3">
                  {item.title}
                </h4>
                <p className="text-on-surface-variant leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
