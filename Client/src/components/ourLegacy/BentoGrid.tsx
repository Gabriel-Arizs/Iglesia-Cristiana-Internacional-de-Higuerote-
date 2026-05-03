import React from "react";

interface BentoRootsCard {
  year?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageUrl?: string;
}

interface BentoYouthCard {
  title?: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
  imageUrl?: string;
}

interface BentoStatCard {
  value?: string;
  label?: string;
  icon?: string;
}

interface BentoDonateCard {
  title?: string;
  description?: string;
  onClick?: () => void;
}

interface BentoGridProps {
  sectionTitle?: string;
  sectionDescription?: string;
  roots?: BentoRootsCard;
  youth?: BentoYouthCard;
  stat?: BentoStatCard;
  donate?: BentoDonateCard;
}

const BentoGrid: React.FC<BentoGridProps> = ({
  sectionTitle = "Fragmentos de Eternidad",
  sectionDescription = "Explora cómo cada década ha moldeado la visión que hoy nos impulsa a alcanzar nuevas fronteras.",
  roots = {
    year: "1954",
    title: "Raíces Profundas",
    description: "Todo comenzó con una oración en una pequeña sala. Hoy, esa misma fe sostiene a miles.",
    buttonText: "Ver el documental",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSAzQvpzT5Xy3Ntir5A0W2ixgPU1kQ9mAeEPZq_u4HjUSE9_5Fc8TztKzQ1h_upJcvWHUaxOSIdAggloxjIPelbni5eNIDhhJ7zf4dGZ3lhu6F8-D3WUUpGsF3IoQ7yg8vT3qFTVxXT7ThirdFns3iDqWvU-Tml2B0_XbNEnPfI4LeRVk5_gR_v7t1i4FyI23jBCgVHoM6Xqkojg1QV0h1E2RHo0zEoAKat4xgZqA2sQ2FZFioBNNbxRRgTApXV267n8L6stT0ShI",
  },
  youth = {
    title: "ADN Joven",
    description: "Inyectando innovación y energía fresca a la misión institucional.",
    linkText: "Conoce ICIH Youth",
    linkHref: "#",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQhNQc5P3Qh0FL8QY-bJGxCAWkFZyh6ayf1XEntAmjyHZRhx2rWTC_b8eYZgNHbG6jvWijKk6NGARjYL3cv_29UkJcUGhQhrS_KR8ovm0TZDeM128xaBVzz3ktVixf6rNgQVY5Bzkl5DWgNNekLyk3vpyPeJrAMIZgtGzfSl9ktZHu8gtaHhe7ncrTjl-F42vi3FiSpcJe-gHHsYw_CpF47fR7-noZf22q45TIoV0_KQhzE77eP77-s8RlVEBI-0e6cIEm2x2ceu8",
  },
  stat = {
    value: "12+",
    label: "Naciones Alcanzadas",
    icon: "public",
  },
  donate = {
    title: "Siembra Futuro",
    description: "Tu apoyo expande el legado a la siguiente milla.",
  },
}) => {
  return (
    <section className="py-24 bg-surface px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-display font-bold text-primary tracking-tight mb-4">
            {sectionTitle}
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl">
            {sectionDescription}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Roots — large */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-primary min-h-[400px]">
            <img
              src={roots.imageUrl}
              alt={roots.title}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
            <div className="absolute bottom-0 p-10">
              <span className="text-secondary-container font-black text-6xl opacity-30 mb-4 block">
                {roots.year}
              </span>
              <h3 className="text-3xl font-bold text-white mb-4">{roots.title}</h3>
              <p className="text-blue-100/70 mb-6 text-lg">{roots.description}</p>
              <button
                onClick={roots.onButtonClick}
                className="flex items-center gap-2 text-white font-bold group"
              >
                {roots.buttonText}
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
                  arrow_right_alt
                </span>
              </button>
            </div>
          </div>

          {/* Youth Card */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-xl bg-surface-container-highest">
            <div className="flex h-full flex-col md:flex-row">
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-primary mb-3">{youth.title}</h3>
                <p className="text-on-surface-variant mb-4">{youth.description}</p>
                <a
                  href={youth.linkHref}
                  className="text-primary font-black underline decoration-secondary-container underline-offset-4"
                >
                  {youth.linkText}
                </a>
              </div>
              <div className="md:w-1/2 relative min-h-[200px]">
                <img
                  src={youth.imageUrl}
                  alt={youth.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Stat Card */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-xl shadow-blue-900/5 flex flex-col justify-between border border-blue-50">
            <span
              className="material-symbols-outlined text-4xl text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {stat.icon}
            </span>
            <div>
              <div className="text-4xl font-black text-primary mb-1">{stat.value}</div>
              <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          </div>

          {/* Donate Card */}
          <div
            onClick={donate.onClick}
            className="bg-secondary-container p-8 rounded-xl flex flex-col justify-between group cursor-pointer hover:bg-primary transition-colors duration-300"
          >
            <div className="text-on-secondary-container group-hover:text-white transition-colors">
              <h3 className="text-xl font-bold mb-2">{donate.title}</h3>
              <p className="text-sm opacity-80">{donate.description}</p>
            </div>
            <span className="material-symbols-outlined text-4xl text-on-secondary-container group-hover:text-white group-hover:translate-x-2 transition-all">
              volunteer_activism
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
