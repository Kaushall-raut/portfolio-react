import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import ModernPortfolio from './pages/Home.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ModernPortfolio/>
  </StrictMode>,
)
