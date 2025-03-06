import * as React from 'react';
import { CalendarCell, CalendarGridProps, CalendarProps, DateValue } from 'react-aria-components'
import {Text, Calendar as AriaCalendar, CalendarGrid, Button, Heading} from 'react-aria-components';
import styles from './Calendar.module.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface MidasCalendarProps<T extends DateValue> extends CalendarProps<T>, Pick<CalendarGridProps, 'weekdayStyle'> {
  errorMessage?: string;
}

export function Calendar<T extends DateValue>(
  { errorMessage, weekdayStyle = 'short', ...props }: MidasCalendarProps<T>
) {
  return (
    <AriaCalendar {...props} className={styles.calendar}>
      <header className={styles.header}>
        <Button slot="previous"><ChevronLeft /></Button>
        <Heading className={styles.heading}/>
        <Button slot="next"><ChevronRight /></Button>
      </header>
      <CalendarGrid className={styles.calendar} weekdayStyle={weekdayStyle}>
        {(date) => <CalendarCell date={date} className={styles.day}/>}
      </CalendarGrid>
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </AriaCalendar>
  );
}
