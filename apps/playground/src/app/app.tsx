import styles from './app.module.css'
import {
  CharacterCounter,
  Input,
  Label,
  Text,
  TextField,
  FieldError,
} from '@midas-ds/components'

export function App() {
  return (
    <div className={styles.container}>
      <TextField maxLength={4}>
        <Label>Label</Label>
        <Text slot={'description'}>Description</Text>
        <CharacterCounter />
        <Input
          placeholder={'placeholder'}
          type={'email'}
        />
        <FieldError />
      </TextField>
      <TextField>
        <Label>Label</Label>
        <Text slot={'description'}>Description</Text>
        <Input placeholder={'placeholder'} />
        <FieldError />
      </TextField>
    </div>
  )
}

export default App
