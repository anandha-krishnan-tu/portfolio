import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Experience from './pages/Experience/Experience'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Education from './pages/Education/Education'
import Contact from './pages/Contact/Contact'
import Experiments from './pages/Experiments/Experiments'
import CaseStudy from './pages/CaseStudy/CaseStudy'
import HomeLayout from './layouts/HomeLayout'
import CaseStudyLayout from './layouts/CaseStudyLayout'

function App() {
  return (
      <Routes>

      {/* Home with NavBar + Footer */}
      <Route element={<HomeLayout />}>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Projects />
              <Skills />
              <Experience />
              <Experiments />
              <Education />
              <Contact />
            </>
          }
        />
      </Route>

      {/* CaseStudy with Footer only */}
      <Route element={<CaseStudyLayout />}>
        <Route
          path="/case-study/:projectId"
          element={<CaseStudy />}
        />
      </Route>

    </Routes>
  );
}

export default App