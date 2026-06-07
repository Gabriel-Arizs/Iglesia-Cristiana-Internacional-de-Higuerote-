import { ministries } from "../../data/ministries"
import {
  FeatureCard,
  TallCard,
  MediumDarkCard,
  StatCard,
  IconCard,
  WideCard,
  BannerCard,
  SmallCard,
  FullCard
} from "../cards"

export const MinistriesGrid: React.FC = () => {
  const byId = Object.fromEntries(ministries.map((m) => [m.id, m]))

  return (
    <section
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 24px 80px",
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: 20
      }}
    >
      <FeatureCard ministry={byId.alabanza} />
      <TallCard ministry={byId.ninos} />
      <MediumDarkCard ministry={byId.jovenes} />
      <StatCard ministry={byId.accion} />
      <IconCard ministry={byId.formacion} />
      <WideCard ministry={byId.comunidad} />
      <WideCard ministry={byId.vision} />
      <BannerCard ministry={byId.misiones} />
      <SmallCard ministry={byId.salud} />
      <FullCard ministry={byId.artes} />
    </section>
  )
}

export default MinistriesGrid
