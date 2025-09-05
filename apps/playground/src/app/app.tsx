import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerCustom.css';
import {CalendarDays} from 'lucide-react'

export default function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const renderMonthContent = (month, shortMonth, longMonth, day) => {
    const fullYear = new Date(day).getFullYear();
    const tooltipText = `Tooltip for month: ${longMonth} ${fullYear}`;

    return <span title={tooltipText}>{shortMonth}</span>;
  };
  return (
    <>
      <div className="datepicker-container">
        <h2>React Datepicker Example Month Selector</h2>
        <DatePicker
          selected={selectedDate}
          showIcon
          preventOpenOnFocus
          toggleCalendarOnIconClick
          icon={<CalendarDays />}
          renderMonthContent={renderMonthContent}
          showPopperArrow={false}
          showMonthYearPicker
          onChange={(date: Date | null) => setSelectedDate(date)}
          dateFormat="MM-yyyy"
          placeholderText="Select a date"
        />
        <h2>React Datepicker Example standard</h2>
        <DatePicker
          showIcon
          preventOpenOnFocus
          toggleCalendarOnIconClick
          icon={<CalendarDays />}
          showPopperArrow={false}
          dateFormat="MM-yyyy"
          placeholderText="Select a date"
        />
        {selectedDate && <p>Selected Date: {selectedDate.toDateString()}</p>}
      </div>
    </>
  );
}
