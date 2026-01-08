import * as React from 'react'
import {
  Button,
  Group,
  DatePickerStateContext,
  DateRangePickerStateContext,
} from 'react-aria-components'
import { CalendarDays } from 'lucide-react'
import { clsx } from 'clsx'
import { ClearButton } from '../clear-button'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import styles from './DatePicker.module.css'
import { DatePickerProps } from './DatePicker'

interface DatePickerInputFieldProps
  extends Pick<
    DatePickerProps,
    'isDisabled' | 'isInvalid' | 'isReadOnly' | 'size' | 'isClearable'
  > {
  children?: React.ReactNode
}

export const DatePickerInputField: React.FC<DatePickerInputFieldProps> = ({
  children,
  isDisabled,
  isInvalid,
  isReadOnly,
  size = 'large',
  isClearable = false,
}) => {
  const strings = useLocalizedStringFormatter(messages)
  const datePickerState = React.useContext(DatePickerStateContext)
  const dateRangePickerState = React.useContext(DateRangePickerStateContext)
  const groupRef = React.useRef<HTMLDivElement>(null)

  // Use the appropriate state based on picker type
  const state = dateRangePickerState ?? datePickerState

  const handleClear = () => {
    state?.setValue(null)

    // Focus the first date segment after clearing
    setTimeout(() => {
      const firstSegment = groupRef.current?.querySelector(
        '[role="spinbutton"]',
      ) as HTMLElement
      firstSegment?.focus()
    }, 0)
  }

  const currentValue = state?.value
  const isClearButtonVisible =
    isClearable && currentValue != null && !isReadOnly

  return (
    <Group
      ref={groupRef}
      className={clsx(styles.inputField, {
        [styles.medium]: size === 'medium',
        [styles.readOnly]: isReadOnly,
      })}
    >
      {children}
      <div className={styles.buttonGroup}>
        {isClearButtonVisible && (
          <ClearButton
            onPress={handleClear}
            size={size}
            isDisabled={isDisabled}
            aria-label={strings.format('clear')}
            className={clsx(styles.clearButton, {
              [styles.medium]: size === 'medium',
            })}
          />
        )}
        <Button
          className={clsx(styles.calendarButton, {
            [styles.medium]: size === 'medium',
            [styles.readOnly]: isReadOnly,
          })}
          data-invalid={isInvalid || undefined}
          isDisabled={isDisabled}
        >
          <CalendarDays
            aria-hidden
            size={20}
          />
        </Button>
      </div>
    </Group>
  )
}
