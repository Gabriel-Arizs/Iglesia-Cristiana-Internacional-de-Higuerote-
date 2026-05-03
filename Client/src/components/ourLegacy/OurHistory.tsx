import React from "react";

interface NuestraHistoriaProps {
  label?: string;
  title?: string;
  paragraphs?: string[];
  linkText?: string;
  linkHref?: string;
  imageUrl?: string;
  imageAlt?: string;
  quote?: string;
  quoteAuthor?: string;
}

const NuestraHistoria: React.FC<NuestraHistoriaProps> = ({
  label = "Raíces de Esperanza",
  title = "Una visión que trasciende el tiempo.",
  paragraphs = [
    "En el corazón de nuestra congregación yace una narrativa de fe inquebrantable. Lo que comenzó como un pequeño grupo de oración en un hogar local, se ha transformado en un faro de esperanza institucional para miles.",
    "Nuestro legado no se mide en metros cuadrados ni en cifras, sino en las vidas restauradas y en los valores eternos que hemos sembrado en cada rincón de nuestra comunidad. Cada piedra de este santuario cuenta una historia de sacrificio y victoria.",
  ],
  linkText = "Descubre el inicio",
  linkHref = "#",
  imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDkIBp6eM7O837MMRMvQ_cDLoPBrOVLfecvhSZRt7OHlvWQYl7TRLMvsDzhn9AkwcOlbIspOsQ81xrmiklf3RrCBxYg154R3U_ZGo7e_Ekdbb-vmPnAiO1uJtf7Sn5bFxMSn07y-20YVxL0w6GO-8Gan0aQCpS1gXnXgJKoTiA5oWncmeh0Y_5XJshd7tJ7Ezd-HyxOFaJ5vQcP4v8nFYhXVuHrTYfLwP1asoajhVmD9Ixv-WqeXBak9xIWTNLjItpVXNbjXb1OE7E",
  imageAlt = "Historia",
  quote = '"La fe de ayer es el cimiento de nuestra gloria futura."',
  quoteAuthor = "Fundadores ICIH, 1984",
}) => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Text Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <label className="text-primary-container font-bold text-sm tracking-widest uppercase block">
              {label}
            </label>
            <h2 className="text-5xl font-black text-primary tracking-tight leading-[1.1]">
              {title}
            </h2>
          </div>

          <div className="space-y-6 text-lg text-on-surface-variant leading-loose font-light">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="pt-4">
            <a
              href={linkHref}
              className="inline-flex items-center space-x-2 text-primary font-bold hover:translate-x-2 transition-transform"
            >
              <span>{linkText}</span>
              <span className="material-symbols-outlined">trending_flat</span>
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shadow-blue-900/10">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote Card */}
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden lg:block">
            <p className="text-blue-900 font-bold italic text-lg leading-snug">
              {quote}
            </p>
            <p className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              {quoteAuthor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestraHistoria;
