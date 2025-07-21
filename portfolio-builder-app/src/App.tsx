import { Routes, Route } from 'react-router-dom'
import { PortfolioProvider } from './context/PortfolioContext'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Editor from './components/Editor'
import Preview from './components/Preview'
import './Portfolio.css'

function App() {
  return (
    <PortfolioProvider>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/preview" element={<Preview />} />
          </Routes>
        </main>
      </div>
    </PortfolioProvider>
  )
}

export default App
