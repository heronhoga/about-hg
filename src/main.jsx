import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlassNavbar from './components/GlassNavbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlassNavbar/>
    <App />
  </StrictMode>,
)
