import styles from './app.module.css'
import { Input, Label, Text } from '@midas-ds/components'
import { TextField, FieldError } from 'react-aria-components'

export function App() {
  return (
    <div className={styles.container}>
      <TextField>
        <Label>Label</Label>
        <Text slot={'description'}>Description</Text>
        <Input
          placeholder={'placeholder'}
          type={'email'}
        />
        <FieldError/>
      </TextField>
    </div>
  )
}

export default App
