import styles from './app.module.css'
import {
  Button,
  SearchField,
  Logo,
  TextField,
} from '@midas-ds/components'

export function App() {
  return (
    <div className={styles.container}>
      <Button variant={'secondary'}>Secondary Button</Button>
      <Button>Primary Button</Button>
      <SearchField placeholder={'Search...'} />
      <Logo/>
      <TextField label={'Text'}/>
    </div>
  )
}

export default App
