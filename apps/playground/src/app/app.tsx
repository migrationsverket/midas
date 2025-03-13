import { useState } from 'react'
import styles from './app.module.css'
import { ProgressBar } from '@midas-ds/components'

export function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = [
    { id: 0, title: 'Fyll diskmaskinen' },
    { id: 1, title: 'Sätt igång programmet' },
    { id: 2, title: 'Töm diskmaskinen' },
  ]

  return (
    <div className={styles.container}>
      <ProgressBar
        aria-label='progress'
        steps={steps}
        value={currentStep}
      />
      <button
        disabled={!currentStep}
        onClick={() => setCurrentStep(p => p - 1)}
      >
        Bakåt
      </button>
      <button
        disabled={currentStep === steps.length}
        onClick={() => setCurrentStep(p => p + 1)}
      >
        {currentStep < steps.length - 1 ? <>Framåt</> : <>Slutför</>}
      </button>
    </div>
  )
}

export default App
