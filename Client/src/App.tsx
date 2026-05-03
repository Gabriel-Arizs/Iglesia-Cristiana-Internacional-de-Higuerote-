// App.tsx
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
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App