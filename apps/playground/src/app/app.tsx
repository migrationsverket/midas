import styles from './app.module.css'
import { Skeleton, TextField } from '@midas-ds/components'

export function App() {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: 'flex',
          alignItems: 'start',
          gap: '2rem',
          border: '1px solid salmon',
        }}
      >
        <TextField
          label='Medium'
          description='size component'
          size='medium'
          defaultValue='this is medium'
        />
        <TextField
          size='large'
          label='Large'
          defaultValue='this is large'
          description='size component'
        />
      </div>

      <div style={{ backgroundColor: '#f2f2f2', padding: '1rem' }}>
        <Skeleton isOnLayer01 />
      </div>
    </div>
  )
}

export default App
