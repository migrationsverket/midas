import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../button'
import { Heading } from '../heading'
import styles from './Calendar.module.css'
import { CalendarProps } from './Calendar'
import { CalendarMonthPicker } from './CalendarMonthPicker'
import { CalendarYearPicker } from './CalendarYearPicker'

type CalendarHeaderProps = Pick<
  CalendarProps,
  'isDisabled' | 'isReadOnly' | 'showMonthYearPicker'
>

export const CalendarHeader = ({
  isDisabled,
  isReadOnly,
  showMonthYearPicker,
}: CalendarHeaderProps) => (
  <header className={styles.header}>
    <Button
      slot='previous'
      size='medium'
      data-readonly={isReadOnly || undefined}
    >
      <ChevronLeft size={20} />
    </Button>
    {showMonthYearPicker ? (
      <div className={styles.pickers}>
        <CalendarMonthPicker
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
        />
        <CalendarYearPicker
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
        />
      </div>
    ) : (
      <Heading
        level={3}
        elementType='h2'
        data-disabled={isDisabled || undefined}
      />
    )}
    <Button
      slot='next'
      size='medium'
      data-readonly={isReadOnly || undefined}
    >
      <ChevronRight size={20} />
    </Button>
  </header>
)
