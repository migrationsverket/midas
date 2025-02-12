import { useState, useEffect } from 'react';
import styles from './app.module.css'
import {
  Button,
  SearchField,
  Logo,
  TextField,
  Skeleton,
} from '@midas-ds/components'

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate API call
  }, []);

  return (
    <div className={styles.container}>
      <Button variant={'secondary'}>Secondary Button</Button>
      <Button>Primary Button</Button>
      <SearchField placeholder={'Search...'} />
      <Logo/>
      {loading ? (
         <>
         <Skeleton variant='rectangular' height={10} width='40px'/>
        <Skeleton variant="text" />
        </>) : (
          <div>
          <TextField label={'Text'}/>
          </div>
        )
}
      
    </div>
  )
}

export default App
