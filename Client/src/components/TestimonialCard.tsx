import type { Testimonial } from "../types/testimonial";
interface TestimonialCardProps {
  testimonial: Testimonial;
}


export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-ambient">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={testimonial.imgAlt}
          src={testimonial.imgSrc}
        />
        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-white text-6xl">play_circle</span>
        </div>
      </div>
      <h4 className="text-xl font-bold text-primary mb-1">{testimonial.title}</h4>
      <p className="text-on-surface-variant text-sm">Testimonio de {testimonial.author}</p>
    </div>
  );
}

export default TestimonialCard