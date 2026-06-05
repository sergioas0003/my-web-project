import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';// i added this for bootstrap grid style
// Put any other imports below so that CSS from your components takes precedence over default styles.
import './index.css'//this is where css style is implemented
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
