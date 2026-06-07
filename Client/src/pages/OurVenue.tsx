import Hero from "../components/ourVenue/components/sections/Hero"
import Sanctuary from "../components/ourVenue/components/sections/Sanctuary"
import LegacyImpact from "../components/ourVenue/components/sections/LegacyImpact"
import MinistriesGrid from "../components/ourVenue/components/sections/MinistriesGrid"
import VisitPlan from "../components/ourVenue/components/sections/VisitPlan"

export function OurVenue() {
  return (
    <>
      <Hero />
      <Sanctuary />
      <LegacyImpact />
      <MinistriesGrid />
      <VisitPlan />
    </>
  )
}

export { OurVenue as Component }
