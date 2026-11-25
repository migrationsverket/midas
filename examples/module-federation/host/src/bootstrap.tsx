// The host (the shell) owns Midas's global CSS and the app-wide providers.
// Remotes render inside them and don't set up their own.
import '@midas-ds/components/default.css'
import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Button,
  DialogTrigger,
  GlobalToastRegion,
  Heading,
  I18nProvider,
  Modal,
  Text,
  toastQueue,
} from '@midas-ds/components'

const Widget = lazy(() => import('remote/Widget'))

const reactOnly = import.meta.env.VITE_REACT_ONLY as boolean

function App() {
  return (
    <I18nProvider locale='sv-SE'>
      <GlobalToastRegion />
      <main style={{ padding: '2rem', display: 'grid', gap: '1.5rem' }}>
        <Heading level={1}>Host</Heading>
        <Text>
          {reactOnly
            ? 'Bara React delas. Remoten har en egen kopia av Midas: den följer inte värdens språk, dess toasts visas inte och dess Select går inte att öppna i modalen. Midas varnar i konsolen.'
            : 'React, Midas och React Aria delas som singletons, så remoten använder värdens språk, toasts och modal.'}
        </Text>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button
            onPress={() =>
              toastQueue.add({ message: 'Toast från värden', type: 'info' })
            }
          >
            Visa toast
          </Button>
          <DialogTrigger>
            <Button variant='secondary'>Öppna remoten i en modal</Button>
            <Modal title='Remote i värdens modal'>
              <Suspense fallback='Laddar…'>
                <Widget />
              </Suspense>
            </Modal>
          </DialogTrigger>
        </div>
        <Suspense fallback='Laddar remoten…'>
          <Widget />
        </Suspense>
      </main>
    </I18nProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
