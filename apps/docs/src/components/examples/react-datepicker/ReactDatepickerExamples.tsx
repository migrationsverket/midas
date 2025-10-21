import { CalendarDays } from 'lucide-react'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
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
