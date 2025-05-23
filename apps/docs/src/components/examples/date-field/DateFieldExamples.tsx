import React from 'react'
import { DateField } from '@midas-ds/components'
import {
  now,
  toCalendarDate,
  getLocalTimeZone,
  CalendarDate,
} from '@internationalized/date'

export const DateFieldControlled = () => {
  const today = toCalendarDate(now(getLocalTimeZone()))
  const [date, setDate] = React.useState<CalendarDate>(today)
  return (
    <div className='card'>
      <DateField
        value={date}
        onChange={value => value && setDate(value as CalendarDate)}
      />
      <pre>Du har valt datumet: {date?.toString()}</pre>
    </div>
  )
}
