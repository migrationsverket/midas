// Only used when the remote runs on its own, at http://localhost:5001.
// This is the only place the remote imports Midas's global CSS: the module
// it exposes doesn't, so it never overrides the host's design tokens.
import '@midas-ds/components/default.css'
import { createRoot } from 'react-dom/client'
import { GlobalToastRegion } from '@midas-ds/components'
import Widget from './Widget'

createRoot(document.getElementById('root')!).render(
  <main style={{ padding: '2rem' }}>
    <GlobalToastRegion />
    <Widget />
  </main>,
)
