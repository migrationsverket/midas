import styles from './app.module.css'
import { Select } from '@midas-ds/components'

export function App() {
  return (
    <div className={styles.container}>
      <Select
        selectionMode='multiple'
        options={Array.from({ length: 100 }, (v, i) => i).map(x => ({
          id: `${x}`,
          name: `${x}`,
        }))}
        label='derp'
      />
    </div>
  )
}

export default App
