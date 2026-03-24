import type { Ministry } from "../types/ministry";

interface MinistryCardProps {
  ministry: Ministry;
}

export function MinistryCard({ ministry }: MinistryCardProps) {
  return (
    <div className={`${ministry.colSpan} group relative h-80 rounded-xl overflow-hidden shadow-ambient cursor-pointer`}>
      <img
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        alt={ministry.imgAlt}
        src={ministry.imgSrc}
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${ministry.gradient} to-transparent flex flex-col justify-end p-8`}>
        <h3 className={`${ministry.titleSize} font-bold text-white mb-2`}>{ministry.title}</h3>
        <p className="text-white/80 max-w-md">{ministry.description}</p>
      </div>
    </div>
  );
}

export default MinistryCard;       