import { useState, useEffect } from 'react'
import styles from './app.module.css'
import {
  Button,
  SearchField,
  Logo,
  TextField,
  Skeleton,
} from '@midas-ds/components'

export function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className={styles.container}>
      <Button variant={'secondary'}>Secondary Button</Button>
      <Button>Primary Button</Button>
      <SearchField placeholder={'Search...'} />
      <Logo />

      {loading ? (
        <>
          <Skeleton
            variant='rectangular'
            animation='wave'
          />
          <Skeleton
            variant='rectangular'
            animation={false}
          />
        </>
      ) : (
        <div>
          <TextField label={'Text'} />
        </div>
      )}
    </div>
  )
}

export default App
