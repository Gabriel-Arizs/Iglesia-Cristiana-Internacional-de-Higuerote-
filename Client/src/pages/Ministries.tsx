import {
  MinistriesGrid,
  ServingSteps,
  CTASection,
  MinistriesHero,
  HeroSection,
  StatsBar
} from "../components/ministries/components/sections"

export const Ministries: React.FC = () => (
  <main className="mt-24">
    <HeroSection />
    <StatsBar />
    <MinistriesGrid />
    <ServingSteps />
    <CTASection />
  </main>
)

export { Ministries as Component }
