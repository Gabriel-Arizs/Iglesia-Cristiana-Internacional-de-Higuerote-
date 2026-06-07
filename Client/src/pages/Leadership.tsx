import { Hero } from "../components/leadership/components/sections/Hero"
import { LeadershipTeam } from "../components/leadership/components/sections/LeadershipTeam"
import MinisterialTeam from "../components/leadership/components/sections/MinisterialTeam"
import PastoralBody from "../components/leadership/components/sections/PastoralBody"

export function Leadership() {
  return (
    <>
      <Hero />
      <PastoralBody />
      <MinisterialTeam />
      <LeadershipTeam />
    </>
  )
}

export { Leadership as Component }
