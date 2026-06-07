import type {
  HeroSectionData,
  SanctuaryData,
  LegacyImpactData,
  MinistryCardData,
  VisitPlanData
} from "../types"

import youthImg from "../../../assets/IMG_20260607_183816_782.jpg"
import socialImg from "../../../assets/IMG_20260607_183745_699.jpg"
import educationImg from "../../../assets/IMG_20260607_183653_961.jpg"

export const heroData: HeroSectionData = {
  label: "ICIH — Nuestra Sede",
  title: "Todo está listo para tu llegada.",
  subtitle:
    "Te invitamos a sumergirte en un espacio diseñado para la reflexión, la comunidad y el crecimiento espiritual. Una experiencia arquitectónica y humana sin precedentes.",
  primaryCta: "Explorar Ministerios",
  secondaryCta: "Conocer el Legado",
  backgroundImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBJvkSoRT-R-LyXISBnvZjKUbtb6Xlf4LvoP5_sXuBmC3aC7WjyWzzGjrghrbJt-bWNA48wkoT-ESpmnhB6uHM5XvM0T2c2dddjmlXXWDPtBS7T5u2Rxek1RugCbRIFYmEB68iAt_dqG_tJeN0CF0xCU6DDPTRXaPkSG40IS0YQJJ5iq-5UDS8KRJGMyQqyb9xoNCcx1c-2MhsuB25qltukJ1YkstHLc_aJjiUr_gViD6PaevPeZxywcKmAjwxULLeGpuy-QUuL42s"
}

export const sanctuaryData: SanctuaryData = {
  title: "Un Refugio de Luz.",
  description:
    "Cada rincón de nuestra sede ha sido concebido como un santuario contemporáneo. La luz natural guía el camino hacia la paz interior, creando una atmósfera donde el silencio habla con claridad y la fe encuentra su espacio.",
  ctaText: "Ver galería arquitectónica",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBD4DdlHGopmq4LrIhLdtR_Bnn5gLuTZW6c3Mh88bzpPUebt3eBG7DZUPASXutapYMXleaODUVP4YD_UHToiqw1h7TLOocmZqKcT3hFwvmKeUAwALn2Sszcjdz0XSBTenWP4oYs0-_BN5omPcUxMh1b0OTJnbBYv39zx_5wXP49GaicQUElH3cj-iUZtICDvRPcTAqE-_l9SCfcvvfiuMHqOKd92DZvQmh94a-fbLU_FHN9-gtEolKB-NS6MKSv--SLxAEOqKGUFwo"
}

export const legacyData: LegacyImpactData = {
  title: "El Peso del Legado.",
  description:
    "Nuestra historia no es solo pasado; es el cimiento de un futuro vibrante. En ICIH, la fe y la comunidad se entrelazan para formar una iglesia que trasciende generaciones.",
  stats: [
    { value: "50+", label: "Años de impacto" },
    { value: "12k", label: "Vidas transformadas" }
  ],
  decorativeText: "VISIT",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA1yMlbxGQKHat7SISa6CTCUKRm-R-Fh_QOps9U0WzJyJukw8RpFLKAuX0KehOnJOLolbCedjv4w81ACQyQgeRcTb6L3Phwu0xlXGiGnYFWoxA4SXakJHV7gEEnqjxhKSGLtG5O0gb6wCJ060cCiFVsP1r9AjyOfXTkfrp6OrHqFc8SNWvS0ys18QO9vMe-TS9cf0XxeRlSAkEwH_Y9mfg3pS7mOIf_j8ABTUONTUIG9lyI6YiDJDsHwikSxN6XwlYP2mamrBpgzMQ"
}

export const ministryCards: MinistryCardData[] = [
  {
    id: "jovenes",
    tag: "Juventud",
    title: "ADN Joven",
    subtitle:
      "Cuestionando, creciendo y sirviendo. Una generación que no se detiene.",
    image: youthImg
  },
  {
    id: "accion",
    tag: "Social",
    title: "Acción Social",
    subtitle:
      "Llevamos el mensaje a las calles a través del servicio tangible y el apoyo a los más necesitados.",
    image: socialImg
  },
  {
    id: "formacion",
    tag: "Educación",
    title: "Formación Teológica",
    subtitle:
      "Profundizando en la Palabra con rigor académico y pasión espiritual.",
    image: educationImg
  }
]

export const visitData: VisitPlanData = {
  title: "Planifica tu Visita.",
  subtitle:
    "Queremos asegurarnos de que tu experiencia sea perfecta. Completa el formulario y uno de nuestros anfitriones te recibirá personalmente.",
  addressTitle: "Ubicación Central",
  address: "Calle 22c # 31-01, Bogotá",
  scheduleTitle: "Horarios de Reunión",
  schedules: [{ day: "Domingos", times: ["9:00 AM", "11:30 AM", "6:00 PM"] }]
}
