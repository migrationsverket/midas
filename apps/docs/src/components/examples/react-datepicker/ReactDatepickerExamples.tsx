import { CalendarDays } from 'lucide-react'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import { sv } from 'date-fns/locale/sv'
registerLocale('sv', sv)
setDefaultLocale('sv')
import '@midas-ds/datepicker-styles/lib/react-datepicker.css'

export const DefaultReactDatepickerExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  return (
    <DatePicker
      showIcon
      selected={selectedDate}
      onChange={(date: Date | null) => setSelectedDate(date)}
      preventOpenOnFocus
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
      preventOpenOnFocus
      toggleCalendarOnIconClick
      icon={<CalendarDays height={20} />}
      /*renderMonthContent={renderMonthContent}*/
      showMonthYearPicker
      onChange={(date: Date | null) => setSelectedDate(date)}
      dateFormat='MM-yyyy'
      placeholderText='Select a date'
    />
  )
}
