import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FloatingDockDemo } from "./components/dock/dock";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Home from "./pages/home";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Floating Dock - fixed at bottom */}
      <FloatingDockDemo />

      {/* Main Content */}
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
