import styles from './app.module.css'
import {
  Button,
  SearchField,
  Logo,
  TextField,
  Select,
} from '@midas-ds/components'

export function App() {
  return (
    <div className={styles.container}>
      <Button variant={'secondary'}>Secondary Button</Button>
      <Button>Primary Button</Button>
      <SearchField placeholder={'Search...'} />
      <Logo />
      <TextField label={'Text'} />
      <form>
        <Select
          label={'Select'}
          selectionMode='multiple'
          options={[
            {
              name: 'Option 1',
              id: '1',
            },
            {
              name: 'Option 2',
              id: '2',
            },
          ]}
          isRequired
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
