// App.tsx
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
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
