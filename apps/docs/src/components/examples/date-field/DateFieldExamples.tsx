import React from 'react'
import { DateField } from '@midas-ds/components'
import { now, toCalendarDate, getLocalTimeZone, CalendarDate } from '@internationalized/date'

export const DateFieldControlled = () => {
  const today = toCalendarDate(now(getLocalTimeZone()))
  const [date, setDate] = React.useState<CalendarDate | null>(today)
  return (
    <>
      <DateField
        value={date}
        onChange={setDate}
      ></DateField>
      <pre>Du har valt datumet: {date?.toString()}</pre>
    </>
  )
}
