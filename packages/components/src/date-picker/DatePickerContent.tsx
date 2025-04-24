import * as React from 'react'
import {
  Button,
  DateInput,
  DateSegment,
  Dialog,
  Group,
  Popover,
  ValidationResult,
} from 'react-aria-components'
import { CalendarDays } from 'lucide-react'
import { clsx } from 'clsx'
import styles from './DatePicker.module.css'
import { Calendar, RangeCalendar } from '../calendar'
import { FieldError } from '../field-error'
import { Text } from '../text'
import { Label } from '../label'

export interface DatePickerContentProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
  isRange?: boolean
  isInvalid?: boolean
  isDisabled?: boolean
}

export const DatePickerContent = React.forwardRef<
  HTMLDivElement,
  DatePickerContentProps
>(
  (
    {
      label,
      description,
      errorMessage,
      errorPosition,
      isRange = false,
      isInvalid,
      isDisabled,
    },
    ref,
  ) => (
    <>
      <Label variant='label-02'>{label}</Label>
      {description && <Text slot='description'>{description}</Text>}
      {errorPosition === 'top' && <FieldError>{errorMessage}</FieldError>}
      <Group className={clsx(styles.inputField)}>
        <DateInput
          slot='start'
          className={styles.date}
        >
          {segment => (
            <DateSegment
              className={styles.segment}
              segment={segment}
            />
          )}
        </DateInput>
        {isRange && (
          <>
            <span
              aria-hidden='true'
              className={styles.divider}
            >
              -
            </span>
            <DateInput
              slot='end'
              className={styles.date}
            >
              {segment => (
                <DateSegment
                  segment={segment}
                  className={styles.segment}
                />
              )}
            </DateInput>
          </>
        )}
        <Button
          className={clsx(isInvalid && styles.buttonInvalid)}
          isDisabled={isDisabled}
        >
          <CalendarDays
            size={20}
            aria-hidden
          />
        </Button>
      </Group>
      {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
      <Popover
        UNSTABLE_portalContainer={
          (typeof ref !== 'function' && ref?.current) || undefined
        }
      >
        <Dialog className={styles.dialog}>
          {isRange ? <RangeCalendar /> : <Calendar />}
        </Dialog>
      </Popover>
    </>
  ),
)
