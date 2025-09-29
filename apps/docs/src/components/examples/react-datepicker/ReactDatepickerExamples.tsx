import { DatePicker, registerLocale } from 'react-datepicker'
import {useState} from 'react'
import '../../../../../../packages/datepicker-styles/src/lib/react-datepicker.css'
import { sv } from 'date-fns/locale/sv'
import { CalendarDays } from 'lucide-react'

export const MonthRangePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  registerLocale('sv', sv)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const onChange = (dates: [any, any]) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  return (
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
  )
}
