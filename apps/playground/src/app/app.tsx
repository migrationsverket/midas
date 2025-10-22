import { useState } from 'react'
import DatePicker from 'react-datepicker'
import {
  DateRangePicker,
  DatePicker as MidasDatePicker,
} from '@midas-ds/components'
import '@midas-ds/datepicker-styles/lib/react-datepicker.css'
import { CalendarDays } from 'lucide-react'
import { I18nProvider } from '@midas-ds/components/utils/intl'

const RangeMonthPicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(
    new Date('2014/02/08'),
  )
  const [endDate, setEndDate] = useState<Date | null>(new Date('2014/04/08'))

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date: Date | null) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat='MM/yyyy'
      />
      <DatePicker
        selected={endDate}
        onChange={(date: Date | null) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        dateFormat='MM/yyyy'
      />
    </>
  )
}

export default function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const renderMonthContent = (month, shortMonth, longMonth, day) => {
    const fullYear = new Date(day).getFullYear()
    const tooltipText = `Tooltip for month: ${longMonth} ${fullYear}`

    return <span title={tooltipText}>{shortMonth}</span>
  }
  return (
    <div>
      <h2>React Datepicker Example Month Selector</h2>
      <DatePicker
        showPopperArrow={false}
        selected={selectedDate}
        showIcon
        preventOpenOnFocus
        toggleCalendarOnIconClick
        icon={<CalendarDays height={20} />}
        renderMonthContent={renderMonthContent}
        showMonthYearPicker
        onChange={(date: Date | null) => setSelectedDate(date)}
        dateFormat='MM-yyyy'
        placeholderText='Select a date'
      />
      <h2>React Datepicker Example standard</h2>
      <DatePicker
        showIcon
        preventOpenOnFocus
        toggleCalendarOnIconClick
        icon={<CalendarDays height={20} />}
        showPopperArrow={false}
        dateFormat='MM-yyyy'
        placeholderText='Select a date'
        show
      />
      <h2>Variants..</h2>
      <RangeMonthPicker />
      {selectedDate && <p>Selected Date: {selectedDate.toDateString()}</p>}
      <h2>Midas</h2>
      <I18nProvider locale='en-US'>
        <MidasDatePicker />
        <DateRangePicker />
      </I18nProvider>
    </div>
  )
}
