import styles from './app.module.css'
import {
  Calendar, DateField, DatePicker
} from '@midas-ds/components'
import React from 'react'

export function App() {
  const [date, setDate] = React.useState(null)
  return (
    <div className={styles.container}>
      <DateField label={'label'} description={'description'} errorMessage={'hello'} onChange={setDate} value={date}/>
      <DatePicker label={'label'} description={'description'}></DatePicker>
      <DateField label={'label'} description={'description'} errorMessage={'hello'} isInvalid/>
      <DatePicker label={'label'} description={'description'} errorMessage={'hello'} isInvalid></DatePicker>
      <Calendar
        value={date}
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
