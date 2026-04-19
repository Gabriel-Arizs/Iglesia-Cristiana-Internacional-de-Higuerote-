import { Hero } from "../components/leadership/Hero";
import { LeadershipTeam } from "../components/leadership/LeadershipTeam";
import MinisterialTeam from "../components/leadership/MinisterialTeam";
import PastoralBody from "../components/leadership/PastoralBody";

export function Leadership() {
  return (
   <>
    <Hero />
    <PastoralBody />
    <MinisterialTeam />
    <LeadershipTeam />
   </>
  );
};

export default Leadership;