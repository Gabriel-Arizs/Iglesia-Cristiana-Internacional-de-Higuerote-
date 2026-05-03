import React from "react";

interface CardData {
  icon: string;
  title: string;
  description: string;
}

interface MisionVisionProps {
  cards?: CardData[];
}

const defaultCards: CardData[] = [
  {
    icon: "auto_awesome",
    title: "Nuestra Misión",
    description:
      "Establecer el Reino de Dios a través de la excelencia institucional, formando líderes íntegros que transformen su entorno mediante el mensaje eterno de Jesucristo y el servicio desinteresado.",
  },
  {
    icon: "visibility",
    title: "Nuestra Visión",
    description:
      "Ser referentes globales de una fe madura y arquitectónica, donde la tradición y la innovación convergen para iluminar el futuro de las próximas siete generaciones.",
  },
];

const MisionVision: React.FC<MisionVisionProps> = ({
  cards = defaultCards,
}) => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest p-12 rounded-xl border border-blue-100/50 shadow-sm transition-all hover:shadow-blue-900/5"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {card.icon}
                </span>
              </div>
              <h3 className="text-3xl font-black text-primary mb-6">
                {card.title}
              </h3>
              <p className="text-lg text-on-surface-variant leading-relaxed font-light">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MisionVision;
