import type { Testimonial } from "../types/testimonial";
import { TestimonialCard } from "./TestimonialCard";

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "La restauración de mi hogar",
    author: "Andrés Pérez",
    imgAlt: "Portrait of a smiling young man",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8AtdQTOqbs1cZrR-e8H8XLRo_3IDYvIONnSPls60B4fQaEgiuP2eZWecXEzLbz6W-h2VSYE3hFailQK4QeWzDwwxJnVvXhtR6qtA5fG0XCCqsJ31dX9ZhrW-77kHCXTRHrTbd6T_jdV325CCi8dlIiAdFJ-mVXBieOpzRIW6dSAGevh1qnNKJrYp-lew4sTy_Ox49m61tBAgGjbSq1LVsRqMYdJilpGipEIkYweIg31oNIEkcGOgmNui9TEdu0Pq2Yg_1jfmsW_o",
  },
  {
    id: 2,
    title: "Un nuevo comienzo",
    author: "Maria Clara",
    imgAlt: "Portrait of a smiling woman",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFN8LJ0BlIJlkCrtB5n82RniQvRqOp8R1VAEwtM3maL49DPdR16X7BYexW7o2vNtelFUl2l7DX6b0z4YDJg8LqaLbKWim9-QCBdbCl9_vzy0xjMNLPTpqovnMXIqdBJa7YRVdtgPh39AX0mqZZI9PbC7YM2i-OkUVUE_wAnTdTw6q4Ekn7s5OsPDh-_f-7XfUHZFnFCHQk51fYQzg2kULiVWBo83Hr1DRwrdA6YfAjRWcRjdunuJU2aJTlS0z_cVhPA003U8GchyI",
  },
  {
    id: 3,
    title: "Sanidad y Esperanza",
    author: "Juan Diego",
    imgAlt: "Portrait of an older man",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5Q8m74VRGk5fdB3K5AC4x9Vro4WQjZluu2-v_BANkSJavp5_lqlQqm14aSo4rcK_yOBiqkQ5kl2Nk9g98wyyRO9q-PiOyrdYLvBG3R00qS-zp8BdFnFpd21OHBPg3qbK95Rd5-5rinflJTVMoebeS3nCTMeKWIm0qiiUlLj3a5L0Q-tX4fUExrQA2ZK4lfEI5VcFjY3RNAWSgP7rNhTtEXQ1iXTPiiec6UKzk7Q23QR3O050YEnTse5j7R8f98TJEDeZxNWQkHq8",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <label className="text-primary-container font-bold uppercase tracking-widest text-xs mb-4 block">
            Historias
          </label>
          <h2 className="text-4xl font-extrabold text-primary tracking-tight">
            Vidas Transformadas
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
}