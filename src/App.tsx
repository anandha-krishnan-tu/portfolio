import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Experience from './pages/Experience/Experience'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Education from './pages/Education/Education'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import Experiments from './pages/Experiments/Experiments'

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Experiments />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App