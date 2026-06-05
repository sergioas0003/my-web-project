import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'//this is where css style is implemented
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
