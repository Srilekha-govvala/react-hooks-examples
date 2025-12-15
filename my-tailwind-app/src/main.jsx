import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThrottleUse from './components/props/ThrottleUse.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ThrottleUse/>
  </StrictMode>,
)
