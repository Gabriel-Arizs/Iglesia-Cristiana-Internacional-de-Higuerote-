import type { Step } from "../types";

export const steps: Step[] = [
  {
    icon: "🧭",
    title: "Explora",
    desc: "Participa en nuestras reuniones de bienvenida para conocer la visión de cada ministerio y encontrar dónde encaja tu talento único.",
    items: ["Charlas de Inducción", "Test de Dones"],
    accent: false,
  },
  {
    icon: "📚",
    title: "Capacítate",
    desc: "Ofrecemos talleres prácticos y formación espiritual para que tu servicio sea de excelencia y con un corazón alineado.",
    items: ["Talleres Específicos", "Mentoría Personalizada"],
    accent: false,
  },
  {
    icon: "❤️",
    title: "Sirve con Pasión",
    desc: "Únete activamente a los equipos de trabajo y empieza a transformar vidas a través de tu compromiso constante.",
    cta: "Iniciar Registro",
    accent: true,
  },
];
