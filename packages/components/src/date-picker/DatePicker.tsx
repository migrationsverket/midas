'use client'

import * as React from 'react'
import {
  DatePicker as AriaDatePicker,
  type DatePickerProps as AriaDatePickerProps,
  type DateValue,
  type ValidationResult,
} from 'react-aria-components'
import { clsx } from 'clsx'
import { DatePickerInputField } from './DatePickerInputField'
import { DatePickerPopover } from './DatePickerPopover'
import { Calendar } from '../calendar'
import { DateInput, DateSegment } from '../date-field'
import { FieldError } from '../field-error'
import { Label } from '../label'
import { Text } from '../text'
import styles from './DatePicker.module.css'
import { Size } from '../common/types'
import { LabelWrapper } from '../label/LabelWrapper'
import { InfoPopoverProps } from '../label/InfoPopover'

interface DatePickerProps extends AriaDatePickerProps<DateValue> {
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
  label?: string
  /** Component size (large: height 48px, medium: height 40px)
   *  @default 'large'
   * */
  size?: Size
  /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
  popover?: InfoPopoverProps
}

export const DatePicker: React.FC<DatePickerProps> = ({
  className,
  description,
  errorMessage,
  errorPosition = 'top',
  label,
  popover,
  ...rest
}) => {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <AriaDatePicker
      className={clsx(styles.datePicker, className)}
      ref={ref}
      {...rest}
    >
      <LabelWrapper popover={popover}>
        {label && <Label>{label}</Label>}
      </LabelWrapper>
      {description && <Text slot='description'>{description}</Text>}
      {errorPosition === 'top' && <FieldError>{errorMessage}</FieldError>}
      <DatePickerInputField {...rest}>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      </DatePickerInputField>
      {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
      <DatePickerPopover ref={ref}>
        <Calendar />
      </DatePickerPopover>
    </AriaDatePicker>
  )
}
