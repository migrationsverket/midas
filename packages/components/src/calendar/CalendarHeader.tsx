import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../button'
import { Heading } from '../heading'
import styles from './Calendar.module.css'
import { CalendarProps } from './Calendar'

type CalendarHeaderProps = Pick<CalendarProps, 'isDisabled' | 'isReadOnly'>

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  isDisabled,
  isReadOnly,
}) => (
  <header className={styles.header}>
    <Button
      slot='previous'
      size='medium'
      data-readonly={isReadOnly || undefined}
    >
      <ChevronLeft />
    </Button>
    <Heading
      level={3}
      elementType='h2'
      data-disabled={isDisabled || undefined}
    />
    <Button
      slot='next'
      size='medium'
      data-readonly={isReadOnly || undefined}
    >
      <ChevronRight />
    </Button>
  </header>
)
