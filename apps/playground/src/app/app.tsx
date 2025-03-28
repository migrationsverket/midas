import styles from './app.module.css'
import { TextField } from '@midas-ds/components'

export function App() {
  return (
    <div className={styles.container}>
      <TextField
        label='Label'
        description='Description'
        showCounter
        type='email'
        maxLength={4}
      />
      <TextField
        label='Label'
        description='Description'
        type='password'
      />
    </div>
  )
}

export default App
