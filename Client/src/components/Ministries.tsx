import type { Ministry } from "../types/ministry";
import { MinistryCard } from "./MinistryCard";

const ministries : Ministry[] =  [
  {
    id: 1,
    colSpan: "md:col-span-2",
    title: "Somos Uno",
    description: "Nuestra comunidad de jóvenes apasionados por el cambio.",
    gradient: "from-primary/90",
    titleSize: "text-3xl",
    imgAlt: "Energetic youth concert scene",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1etdQl5cY8Gn0guzV8b-dW07CDJDSXiqqcIzmQp0SP1UwUG-dQtn6UUMAop5HAPNCF3C1duexJiFk8Alk5o4ma-jhCHBCgXvvjJqEv8LenPKSuFSv5qRlmud_ScBYtr4zhPMsZMtKZCGxLz1a7kaPJDxZVPqdQnGUjIO3qdI1E0T_PzK_xXrb3VEVwPHh_1Kp426BYavlKW5mHBVmApD4G-IimYWE_hsuA-axMKzZ4YXNm5UVFB0-R2eELek7l_wA82CRXZAmW74",
  },
  {
    id: 2,
    colSpan: "",
    title: "Kids MCI",
    description: "Creciendo con valores desde el primer paso.",
    gradient: "from-primary-container/90",
    titleSize: "text-2xl",
    imgAlt: "Happy children in a classroom setting",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUnxHe5p9yo-IPSWKSjEuRPOc2G68FFIt2lBg-p-woMP8YdxGsKfkG-lmST4jibYlE7IMZQrR4bfiwRacBiWT-XRL5bC4o0PQ-foMQJgOyt8lSpm9LfgMxXdfpNQTrEmWTWOsrvla0Gvll1gknHlePu8L3gZ5aJDLdsbfLMqFZnKU82MnrWAE2TmTPLBdxmLaaUXoM0YIG8wo8p_WoD38wcIE8yVIOn4n0RHlU46Kg5ja3sBE86jX3qZa_E3RbySq6JNWv9X6U684",
  },
  {
    id: 3,
    colSpan: "",
    title: "Grupos de Vida",
    description: "Donde la iglesia se vuelve familia.",
    gradient: "from-secondary/90",
    titleSize: "text-2xl",
    imgAlt: "People talking in a living room",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTvzLq6-gwnjcoIngJlWELMkbw41B4lIF3GLEAajlIh4DbhqkqrOC-TyrcSZT4wBl8b-yphY5yoErWS6xRTIRAWaRB9SXvbUAuSeKSuoPwrUlxZnUv51i1fi0lJ7UVkf8EgxIvmNFm3INXzi4KyKT58cLEAGr0UH8ETk4uYaNfhngjhVyBRBVSQ3KHtTc5RxMgKgWPxXkn2D92cx9C0I-0r1WOHE0HJ6b73KUqSoizZ2G86ElbIqRe8sgGhW-x4RfZAHtxHsvUDkQ",
  },
  {
    id: 4,
    colSpan: "md:col-span-2",
    title: "Visión G12",
    description: "Formando los líderes del mañana a través del discipulado.",
    gradient: "from-slate-900/90",
    titleSize: "text-3xl",
    imgAlt: "Leadership training session",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXDaG76ro7FzSyq5upwUZkgBuTAd3DvGK98j0ndF8hD54qnVtQuCWBME4ZtBAghZ9s2pOmOOz44wQ0ZxszvCHSDzU_wZAm4R8kuudsH-H0Vz2F9LxeXHngHZNkDJiHPBmTsOJCVqXvi9VZVH7hE7QTGhjs4-8G4MqcrWY6-f6igb89GKlOi2Y61F-mDyeChSeeC9FvGFQJvj8XJpDHx_-F-pfvsTs5BN5k_xACyXZEvvf7LT7AKcRmGETslwqUUewHkPrvJGv6JBM",
  },
];


export default function Ministries() {
  return (
    <section className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <label className="text-primary-container font-bold uppercase tracking-widest text-xs mb-4 block">
              Comunidad
            </label>
            <h2 className="text-4xl font-extrabold text-primary tracking-tight">
              Ministerios
            </h2>
          </div>
          <button className="text-primary font-medium hover:underline">Ver todos</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ministries.map((ministry) => (
            <MinistryCard key={ministry.id} ministry={ministry} />
          ))}
        </div>
      </div>
    </section>
  );
}