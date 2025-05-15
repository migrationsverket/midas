import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../button'
import { Heading } from '../heading'
import styles from './Calendar.module.css'

export const CalendarHeader: React.FC = () => (
  <header className={styles.header}>
    <Button
      slot='previous'
      size='medium'
    >
      <ChevronLeft />
    </Button>
    <Heading
      level={3}
      elementType='h2'
    />
    <Button
      slot='next'
      size='medium'
    >
      <ChevronRight />
    </Button>
  </header>
)
