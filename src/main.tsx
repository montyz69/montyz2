import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <BrowserRouter>
    <div className="min-h-screen w-full relative bg-[#171717]">
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `
        linear-gradient(90deg, #171717 1px, transparent 1px),
        linear-gradient(180deg, #171717 1px, transparent 1px),
        linear-gradient(90deg, #262626 1px, transparent 1px),
        linear-gradient(180deg, #262626 1px, transparent 1px)
      `,
      backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
    }}
  />
  <App  />
</div>
</BrowserRouter>
    
  </StrictMode>,
)
