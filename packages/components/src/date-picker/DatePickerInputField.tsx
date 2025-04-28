import * as React from 'react'
import { Button, Group } from 'react-aria-components'
import { CalendarDays } from 'lucide-react'
import { clsx } from 'clsx'
import styles from './DatePicker.module.css'

interface DatePickerInputFieldProps {
  children?: React.ReactNode
  isDisabled?: boolean
  isInvalid?: boolean
}

export const DatePickerInputField: React.FC<DatePickerInputFieldProps> = ({
  children,
  isDisabled,
  isInvalid,
}) => (
  <Group className={clsx(styles.inputField)}>
    {children}
    <Button
      className={styles.calendarButton}
      data-invalid={isInvalid || undefined}
      isDisabled={isDisabled}
    >
      <CalendarDays
        aria-hidden
        size={20}
      />
    </Button>
  </Group>
)
