import React from 'react'
import {
  parseDate,
  CalendarDate,
  today,
  getLocalTimeZone,
} from '@internationalized/date'
import { DatePicker } from '@midas-ds/components'
import { DateValue } from 'react-aria-components'

export const DatePickerExample = () => {
  const [value, setValue] = React.useState<CalendarDate | null>(
    parseDate('2026-05-29'),
  )
  return (
    <>
      <DatePicker
        label='Date (uncontrolled)'
        defaultValue={parseDate('2026-05-29')}
      />
      <DatePicker
        label='Date (controlled)'
        value={value}
        onChange={setValue}
      />
      <pre>Du valde datum: {value?.toString()}</pre>
    </>
  )
}

export const UnavailableDateExample = () => {
  const now = today(getLocalTimeZone())
  const isDateUnavailable = (date: DateValue) => {
    return date.compare(now.add({ weeks: 1 })) < 0
  }
  return (
    <DatePicker
      label='Välj ett datum'
      description={'Fast inte förrän om en vecka'}
      isDateUnavailable={isDateUnavailable}
      minValue={now}
    />
  )
}
