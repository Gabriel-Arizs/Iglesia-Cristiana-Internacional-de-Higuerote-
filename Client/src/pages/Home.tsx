import Hero from "../components/Hero"
import LocationBanner from "../components/LocationBanner"
import Ministries from "../components/Ministries"
import OurLegacy from "../components/OurLegacy"
import OurVenue from "../components/OurVenue"
import Testimonials from "../components/Testimonials"
import VisitUs from "../components/VisitUs"

export function Home() {
    return (
       <>
       <Hero />
       <OurVenue />
       <OurLegacy />
       <Ministries />
       <LocationBanner />
       <Testimonials />
       <VisitUs />
       </>
    )
}

export default Home