import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Experience from './pages/Experience/Experience'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Education from './pages/Education/Education'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'

import { Suspense } from 'react'
import GlobalLoader from './components/Loader/GlobalLoader'

function App() {
  return (
    <>
      {/* Global loader tied to Three.js loading */}
      <Suspense fallback={<GlobalLoader />}>
        <NavBar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </Suspense>
    </>
  )
}

export default App