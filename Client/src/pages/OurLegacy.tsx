import BentoGrid from "../components/ourLegacy/BentoGrid"
import CTASection from "../components/ourLegacy/CTASection"
import HeroLegado from "../components/ourLegacy/Hero"
import NuestraHistoria from "../components/ourLegacy/OurHistory"
import ThenAndNow from "../components/ourLegacy/ThenAndNow"
import Timeline from "../components/ourLegacy/Timeline"
import MisionVision from "../components/ourLegacy/Vision"

export function OurLegacy () {
 return (<>
 <HeroLegado />
 <NuestraHistoria />
 <MisionVision />
 <ThenAndNow />
 <Timeline />
 <BentoGrid />
 </>)
}

export { OurLegacy as Component } 