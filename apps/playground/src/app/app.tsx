import styles from './app.module.css'
import { Select } from '@midas-ds/components/'

export function App() {
  return (
    <div className={styles.container}>
      <form>
        <Select
          isRequired
          selectionMode='single'
          label='My select'
          options={[{ id: '1', name: 'Ett' }]}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
