import { useState } from 'react'
import { DatePicker, registerLocale } from 'react-datepicker'
import {
  DatePicker as MidasDatePicker,
  DateRangePicker as MidasDateRangePicker,
} from '@midas-ds/components'
import { CalendarDays } from 'lucide-react'
import '../../../../packages/datepicker-styles/src/lib/react-datepicker.css'
import '../../../../packages/theme/src/lib/fonts.css'
import { sv } from 'date-fns/locale/sv'

export default function App() {
  registerLocale('sv', sv)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const onChange = (dates: [any, any]) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  return (
    <>
      <div>react datepicker</div>
      <DatePicker
        locale={sv}
        showIcon
        showPopperArrow={false}
        toggleCalendarOnIconClick
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        icon={<CalendarDays size={20} />}
      />
      <div>react monthpicker</div>
      <DatePicker
        locale={sv}
        showIcon
        showPopperArrow={false}
        toggleCalendarOnIconClick
        selected={selectedDate}
        dateFormat='YYYY-MM'
        showMonthYearPicker
        onChange={date => setSelectedDate(date)}
        icon={<CalendarDays size={20} />}
      />
      <div>range month</div>
      <DatePicker
        showIcon
        toggleCalendarOnIconClick
        locale={sv}
        selected={startDate}
        onChange={onChange}
        selectsRange
        showPopperArrow={false}
        startDate={startDate}
        endDate={endDate}
        dateFormat='YYYY-MM'
        showMonthYearPicker
        icon={<CalendarDays size={20} />}
      />
      <div>midas</div>

      <MidasDatePicker />

      <div>midas range</div>
      <MidasDateRangePicker />
    </>
  )
}
