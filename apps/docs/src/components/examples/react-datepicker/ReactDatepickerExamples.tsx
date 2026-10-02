import { CalendarDays } from 'lucide-react'
import DatePicker from 'react-datepicker'
import { FieldError, Label } from '@midas-ds/components'
import { useState } from 'react'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import { sv } from 'date-fns/locale/sv'
import '@midas-ds/datepicker-styles/lib/react-datepicker.css'

registerLocale('sv', sv)
setDefaultLocale('sv')

export const DefaultReactDatepickerExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  return (
    <DatePicker
      showIcon
      selected={selectedDate}
      onChange={(date: Date | null) => setSelectedDate(date)}
      formatWeekDay={date => date[0].toUpperCase()}
      toggleCalendarOnIconClick
      icon={<CalendarDays height={20} />}
      showPopperArrow={false}
      dateFormat='dd-MM-yyyy'
      placeholderText='Select a date'
    />
  )
}

export const MonthSelectExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  return (
    <DatePicker
      showPopperArrow={false}
      selected={selectedDate}
      showIcon
      toggleCalendarOnIconClick
      icon={<CalendarDays height={20} />}
      showMonthYearPicker
      onChange={(date: Date | null) => setSelectedDate(date)}
      dateFormat='MM-yyyy'
      placeholderText='Select a date'
    />
  )
}

const isBeforeToday = (date: Date) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date < today
}

export const InvalidExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    return yesterday
  })
  const error =
    selectedDate && isBeforeToday(selectedDate)
      ? 'Datumet kan inte ligga bakåt i tiden'
      : undefined

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Label htmlFor='invalid-example-date'>Startdatum</Label>
      <DatePicker
        id='invalid-example-date'
        showPopperArrow={false}
        selected={selectedDate}
        showIcon
        toggleCalendarOnIconClick
        icon={<CalendarDays height={20} />}
        onChange={(date: Date | null) => setSelectedDate(date)}
        dateFormat='yyyy-MM-dd'
        placeholderText='ÅÅÅÅ-MM-DD'
        ariaInvalid={error ? 'true' : undefined}
        ariaDescribedBy={error ? 'invalid-example-error' : undefined}
      />
      {error && (
        <div id='invalid-example-error'>
          <FieldError isInvalid>{error}</FieldError>
        </div>
      )}
    </div>
  )
}

export const MultipleFormatsExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  return (
    <DatePicker
      showPopperArrow={false}
      selected={selectedDate}
      showIcon
      toggleCalendarOnIconClick
      icon={<CalendarDays height={20} />}
      onChange={(date: Date | null) => setSelectedDate(date)}
      dateFormat={['yyyy-MM-dd', 'yyMMdd']}
      placeholderText='ÅÅÅÅ-MM-DD'
    />
  )
}
