import styles from './app.module.css'
import {
  Calendar,
  DatePicker,
} from '@midas-ds/components'
import React from 'react'

export function App() {
  const [date, setDate] = React.useState(null)
  return (
    <div className={styles.container}>
      <Calendar
        onChange={x => {
          setDate(x)
          console.log('change', x)
        }}
      ></Calendar>
      <span>{JSON.stringify(date)}</span>
    </div>
  )
}

export default App
