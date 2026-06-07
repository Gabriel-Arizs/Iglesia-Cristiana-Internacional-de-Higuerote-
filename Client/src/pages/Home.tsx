import Hero from "../components/home/components/sections/Hero"
import LocationBanner from "../components/home/components/sections/LocationBanner"
import MinistrySection from "../components/home/components/sections/Ministries"
import OurLegacySection from "../components/home/components/sections/OurLegacy"
import OurVenue from "../components/home/components/sections/OurVenue"
import Testimonials from "../components/home/components/sections/Testimonials"
import VisitUs from "../components/home/components/sections/VisitUs"

export function Home() {
  return (
    <>
      <Hero />
      <OurVenue />
      <OurLegacySection />
      <MinistrySection />
      <LocationBanner />
      <Testimonials />
      <VisitUs />
    </>
  )
}

export { Home as Component }
