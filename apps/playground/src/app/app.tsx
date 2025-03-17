import styles from './app.module.css'
import { Button, Kalender } from '@midas-ds/components'
export function App() {
  return (
    <div className={styles.container}>
      <Button />
      <Kalender locale={'se-SE'} />
    </div>
  )
}

export default App
