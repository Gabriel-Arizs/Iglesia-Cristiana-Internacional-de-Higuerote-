import { Leadership } from "../../pages/Leadership";

interface YouthNetworkCardProps {
  className?: string;
}

// 1. Tarjeta de Jóvenes (Ya estaba correcta, se mantiene como base)
function YouthNetworkCard({ className = "" }: YouthNetworkCardProps) {
  return (
    <div className={`md:col-span-2 group relative overflow-hidden rounded-xl bg-background h-80 border border-outline-variant/30 ${className}`}>
     <img
        alt="Women Network"
        className="absolute object-top inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        src="/young.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 text-white z-10">
        <span className="text-xs font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded mb-4 inline-block">
          Generational Impact
        </span>
        <h3 className="text-3xl font-bold mb-2">Red de Jóvenes</h3>
        <p className="text-white/80 max-w-md">
          Coordinada por Mateo y Sofía, enfocada en activar el propósito de la nueva generación.
        </p>
      </div>
    </div>
  );
}

// 2. Tarjeta de Matrimonios (Actualizada con imagen de fondo)
function MarriageNetworkCard() {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-primary h-80">
      <img
        alt="Marriage Network"
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
        src="/marriage.jpg" // Cambiar por imagen real
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="relative z-10 p-8 flex flex-col h-full justify-end text-white">
        <div>
          <h3 className="text-2xl font-bold mb-2">Red de Matrimonios</h3>
          <p className="text-white/80 text-sm">
            Fortaleciendo el núcleo de la sociedad a través de principios bíblicos prácticos.
          </p>
        </div>
      </div>
    </div>
  );
}

const menLeaders = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT6fbRNK_orjcb0yNvJ5c3Uk0B39zacVj7ZAMmtu-5yfkX2pTfIK0BwQbsKoMI9g7CvQAOfjlwg3ww7cakiq41NodpUkfxMdEugWpygUV7GnY7l9vqA3RvCmfCaKWPnkb9pQaIZf-45JtE70WntfkBIZC-ZMuL4QPW8AYr6rB9tNVYBSMiauOf-hktDcafCh1dLM-AzJWQzIytyxf7zrEZA5ZLuwfiKzRs9yHqB2Fzqg3JaQZp2aYrBtsEZlUneP0INaWR5gm03pQ", alt: "Leader 1" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYySxf1DwhLbvzlGpDecgGNAiZSlDe8vxRKYCKSVI7scq3Ax-EViOYLhz_NElF6dzX8tTtUkLPEyQhPRl6TV0OwEdVLzN27JFzsyfeJfH_9X83lIZKTbknfSRcTchFExXHuDFJaNlxgCVmEtJQ4rFkiAEUj1NXeDqpO2WwqEjnvtuGZtpSOpp_aWwtU7l87CXzzoGekl915vLxidRpIPIVScuP0asa1K4r8BNQWQUztlqGsVp-RWg-6wQPeNBjMPq1Mvx7hsyvVXg", alt: "Leader 2" },
];

// 3. Tarjeta de Hombres (Actualizada con imagen de fondo)
function MenNetworkCard() {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-background border border-outline-variant/30 h-80 shadow-sm">
      <img
        alt="Men Network"
        className="absolute inset-0 w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-700"
        src="../../../public/men.jpeg" // Cambiar por imagen real
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      
      <div className="relative z-10 p-8 flex flex-col h-full justify-between text-white">
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-2">Red de Hombres</h3>
          <p className="text-white/80 text-sm">
            Liderazgo integral y hermandad coordinada por el equipo de ancianos.
          </p>
        </div>
        <div className="flex -space-x-3">
          {menLeaders.map((leader) => (
            <img
              key={leader.alt}
              alt={leader.alt}
              src={leader.src}
              className="w-10 h-10 rounded-full border-2 border-white/30 object-cover"
            />
          ))}
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-xs text-white border-2 border-white/30 font-bold">
            +12
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. Tarjeta de Mujeres (Rediseñada para coincidir con la de Jóvenes)
function WomenNetworkCard() {
  return (
    <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-primary-container h-80">
      <img
        alt="Women Network"
        className="absolute object-top inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
        src="../../../public/women.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-center text-white max-w-lg">
        <h3 className="text-3xl font-bold mb-4">Red de Mujeres</h3>
        <p className="text-white/80 mb-6">
          Un espacio de crecimiento, sanidad y mentoría para mujeres de todas las edades, bajo la
          dirección de la Pastora Elena.
        </p>
       
      </div>
    </div>
  );
}

export function LeadershipTeam() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black text-primary tracking-tight mb-4">
              Líderes
            </h2>
            <p className="text-on-surface-variant text-lg">
              El motor de nuestra comunidad: grupos de vida y células.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <YouthNetworkCard />
          <MarriageNetworkCard />
          <MenNetworkCard />
          <WomenNetworkCard />
        </div>
      </div>
    </section>
  );
}

export default Leadership;