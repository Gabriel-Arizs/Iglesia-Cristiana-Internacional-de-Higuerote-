import { Suspense } from "react"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { Outlet } from "react-router"


function App() {

  return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </>
    )
}

export default App
