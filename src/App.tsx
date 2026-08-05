import { Routes, Route, Navigate } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Education from "./pages/Education"
import Contact from "./pages/Contact"
import useScrollReveal from "./hooks/useScrollReveal"
import NotFound from "./pages/NotFound"

function App() {
  useScrollReveal()
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App