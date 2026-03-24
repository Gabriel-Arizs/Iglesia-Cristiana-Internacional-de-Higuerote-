import Footer from "../components/Footer"
import Hero from "../components/Hero"
import LocationBanner from "../components/LocationBanner"
import Ministries from "../components/Ministries"
import NavBar from "../components/NavBar"
import OurLegacy from "../components/OurLegacy"
import OurVenue from "../components/OurVenue"
import Testimonials from "../components/Testimonials"
import VisitUs from "../components/VisitUs"

export function Home() {
    return (
       <>
       <NavBar />
       <Hero />
       <OurVenue />
       <OurLegacy />
       <Ministries />
       <LocationBanner />
       <Testimonials />
       <VisitUs />
       <Footer />
       </>
    )
}

export default Home