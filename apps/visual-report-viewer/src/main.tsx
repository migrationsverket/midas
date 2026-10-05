import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@midas-ds/components/default.css'
import { App } from './app/App'
import './styles.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
