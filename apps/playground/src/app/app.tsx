import styles from './app.module.css'
import {
  Button,
  SearchField,
  Logo,
  TextField,
  Select,
  Accordion,
  AccordionItem,
} from '@midas-ds/components'
import React from 'react'

export function App() {
  const [invalid, setInvalid] = React.useState<boolean>(false)
  return (
    <div className={styles.container}>
      <Button onPress={() => setInvalid(p => !p)}>toggle invalid</Button>
      <Select errorMessage={'Error!'} isInvalid={invalid} label={'invalid testing'} selectionMode={'single'} options={[
        {
          name: 'Option 1',
          id: '1',
        },
        {
          name: 'Option 2',
          id: '2',
        },
      ]}/>
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
          name='multiple'
        />
        <Select
          label={'Select'}
          selectionMode='single'
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
          name='single'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
