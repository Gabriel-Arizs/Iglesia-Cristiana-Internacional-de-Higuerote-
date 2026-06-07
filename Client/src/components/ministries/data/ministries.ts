import type { Ministry } from "../types"

import alabanzaImg from "../../../assets/IMG_20260607_183745_948.jpg"
import ninosImg from "../../../assets/IMG_20260607_183816_940.jpg"
import jovenesImg from "../../../assets/IMG_20260607_183745_693.jpg"
import comunidadImg from "../../../assets/IMG_20260607_183816_285.jpg"
import visionImg from "../../../assets/IMG_20260607_183745_404.jpg"

export const ministries: Ministry[] = [
  {
    id: "alabanza",
    title: "Alabanza",
    subtitle:
      "Elevando el corazón a través de la excelencia musical y la devoción sincera. Un espacio para artistas y adoradores.",
    cta: "Explorar Adoración",
    size: "feature",
    img: alabanzaImg,
    dark: true
  },
  {
    id: "ninos",
    title: "Niños",
    subtitle:
      "ADN KIDS: Sembrando fe y valores en un entorno creativo y seguro.",
    icon: "👶",
    size: "tall",
    img: ninosImg,
    dark: false
  },
  {
    id: "jovenes",
    title: "Jóvenes",
    subtitle:
      "ADN JOVEN: Cuestionando, creciendo y sirviendo. Una generación que no se detiene.",
    cta: "Ver Actividades",
    size: "medium",
    img: jovenesImg,
    dark: true,
    icon: "👥"
  },
  {
    id: "accion",
    title: "Acción Social",
    subtitle:
      "Llevamos el mensaje a las calles a través del servicio tangible y el apoyo a los más necesitados.",
    stat: "12k+",
    statLabel: "Vidas impactadas el último año",
    size: "text",
    tag: "Compromiso Comunitario"
  },
  {
    id: "formacion",
    title: "Formación Teológica",
    subtitle:
      "Profundizando en la Palabra con rigor académico y pasión espiritual.",
    size: "icon-card",
    icon: "🎓"
  },
  {
    id: "comunidad",
    title: "Comunidad",
    subtitle: "Grupos pequeños, grandes lazos. Donde cada uno importa.",
    size: "wide",
    img: comunidadImg,
    dark: true
  },
  {
    id: "vision",
    title: "Visión",
    subtitle: "Mirando hacia el futuro con fe y planeación estratégica.",
    size: "wide",
    img: visionImg,
    dark: true
  },
  {
    id: "misiones",
    title: "Misiones Globales",
    subtitle:
      "Llevando esperanza más allá de nuestras fronteras. Impacto real en naciones distantes.",
    cta: "Ver Proyectos Internacionales",
    size: "banner"
  },
  {
    id: "salud",
    title: "Salud Integral",
    subtitle: "Cuidado del alma, mente y cuerpo.",
    size: "small",
    icon: "🩺"
  },
  {
    id: "artes",
    title: "Artes & Creatividad",
    subtitle:
      "Expresando lo divino a través del diseño, la fotografía y el contenido digital que inspira.",
    size: "full",
    icons: ["🎨", "📷", "✏️"]
  }
]
