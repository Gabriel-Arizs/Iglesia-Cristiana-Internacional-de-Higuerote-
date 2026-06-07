import BentoGrid from "../components/ourLegacy/components/sections/BentoGrid"
import CTASection from "../components/ourLegacy/components/sections/CtaSection"
import HeroLegado from "../components/ourLegacy/components/sections/Hero"
import NuestraHistoria from "../components/ourLegacy/components/sections/OurHistory"
import ThenAndNow from "../components/ourLegacy/components/sections/ThenAndNow"
import Timeline from "../components/ourLegacy/components/sections/Timeline"
import MisionVision from "../components/ourLegacy/components/sections/Vision"

export function OurLegacy() {
  return (
    <>
      <HeroLegado />
      <NuestraHistoria />
      <MisionVision />
      <ThenAndNow />
      <Timeline />
      <BentoGrid />
    </>
  )
}

export { OurLegacy as Component }
