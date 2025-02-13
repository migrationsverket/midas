import { useState, useEffect } from 'react'
import styles from './app.module.css'
import {
  Button,
  SearchField,
  Logo,
  TextField,
  Skeleton
} from '@midas-ds/components'

export function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
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
            height={10}
            width='50px'
            animation='pulse'
          />
          <Skeleton variant='text' />
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
