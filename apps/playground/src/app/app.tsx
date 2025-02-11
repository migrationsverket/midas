import styles from './app.module.css'
import {
  Button,
  SearchField,
  Logo,
  TextField,
  Skeleton,
} from '@midas-ds/components'

export function App() {
  return (
    <div className={styles.container}>
      <Button variant={'secondary'}>Secondary Button</Button>
      <Button>Primary Button</Button>
      <SearchField placeholder={'Search...'} />
      <Logo/>
      <TextField label={'Text'}/>
      <Skeleton variant="rectangle"/>
    </div>
  )
}

export default App
