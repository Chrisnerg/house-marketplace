import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PropertyContext from './context/propertyContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PropertyContext>
      <App />
    </PropertyContext>
  </StrictMode>,
)
