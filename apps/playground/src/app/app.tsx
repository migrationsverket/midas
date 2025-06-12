import styles from './app.module.css'
import { Skeleton } from '@midas-ds/components'

export function App() {
  return (
    <body>
      <div className={styles.container}>
        <Skeleton height={100} />
      </div>
    </body>
  )
}

export default App
