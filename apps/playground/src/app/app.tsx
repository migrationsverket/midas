import styles from './app.module.css'
import {
  Calendar,
  DateField,
  DatePicker,
  Button,
  Select,
} from '@midas-ds/components'
import React from 'react'
import { DateValue } from 'react-aria-components'

export function App() {
  const [date, setDate] = React.useState<DateValue | null>(null)
  const [invalid, setInvalid] = React.useState<boolean>(false)

  return (
    <div className={styles.container}>
      <DateField
        label={'label'}
        description={'description'}
        errorMessage={'hello'}
        onChange={setDate}
        value={date}
      />
      <DatePicker
        label={'label'}
        description={'description'}
      ></DatePicker>
      <DateField
        label={'label'}
        description={'description'}
        errorMessage={'hello'}
        isInvalid
      />
      <DatePicker
        label={'label'}
        description={'description'}
        errorMessage={'hello'}
        isInvalid
      ></DatePicker>
      <Calendar
        value={date}
        onChange={x => {
          console.log('change', x)
        }}
      ></Calendar>
      <span>{JSON.stringify(date)}</span>

      <div className={styles.container}>
        <Button onPress={() => setInvalid(p => !p)}>toggle invalid</Button>
        <Select
          errorMessage={'Error!'}
          isInvalid={invalid}
          label={'invalid testing'}
          selectionMode={'single'}
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
        />
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
    </div>
  )
}

export default App
