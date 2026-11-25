
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'

import Footer from '../components/Footer'

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">

      <a
        href="#main-content"
        className="skip-link"
      >

        Skip to Main Content

      </a>

      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1"
      >

        <Outlet />

      </main>

      <Footer />

    </div>
  )
}

export default MainLayout
