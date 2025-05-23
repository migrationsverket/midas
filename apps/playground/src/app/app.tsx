import styles from './app.module.css'
import { Calendar1, Calendar } from '@midas-ds/components'
import { CalendarDate } from '@internationalized/date'
import React from 'react'

export function App() {
  const [focusedDate, setFocusedDate] = React.useState<CalendarDate>(
    () => new CalendarDate(2025, 5, 1), // Start with May 2025
  )
  const [selectedDate, setSelectedDate] = React.useState<CalendarDate | null>(
    null,
  )
  return (
    <div className={styles.container}>
      <div style={{ flexDirection: 'column', alignItems: 'start', gap: 20 }}>
        <Calendar />
      </div>

      <div>
        <Calendar1
          focusedValue={focusedDate}
          onFocusChange={setFocusedDate}
          value={selectedDate ?? undefined}
          onChange={date => {
            setSelectedDate(date as CalendarDate)
          }}
        />
        <p style={{ marginTop: 20 }}>
          {selectedDate
            ? `Chosen Date: ${selectedDate.day}.${selectedDate.month}.${selectedDate.year}`
            : 'No date selected'}
        </p>
      </div>
    </div>
  )
}

export default App
