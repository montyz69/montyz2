import { Route, Routes } from 'react-router-dom'
import './App.css'
import { FloatingDockDemo } from './components/dock/dock'
import Projects from './pages/projects'
import Experience from './pages/experience'
import Home from './pages/home'

function App() {

  return (
    <>
    <FloatingDockDemo />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  )
}

export default App
