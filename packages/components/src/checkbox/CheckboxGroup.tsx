'use client'

import {
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  ValidationResult,
  composeRenderProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import { InfoPopoverProps, Label } from '../label'
import { LabelWrapper } from '../label/LabelWrapper'
import { Text } from '../text'
import { FieldError } from '../field-error'

import styles from './Checkbox.module.css'
import { SelectAllCheckbox } from './SelectAllCheckbox'

export interface CheckboxGroupProps extends AriaCheckboxGroupProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  showSelectAll?: boolean
  selectAllLabel?: string
  errorPosition?: 'top' | 'bottom'
  popover?: InfoPopoverProps
}

export const CheckboxGroup = ({
  label,
  description,
  errorMessage,
  errorPosition = 'top',
  popover,
  showSelectAll,
  selectAllLabel,
  className,
  children,
  ...props
}: CheckboxGroupProps) => {
  return (
    <AriaCheckboxGroup
      {...props}
      className={clsx(styles.checkboxGroup, className)}
    >
      {composeRenderProps(children, children => (
        <>
          <LabelWrapper popover={popover}>
            {label && <Label>{label}</Label>}
          </LabelWrapper>
          {description && <Text slot='description'>{description}</Text>}
          {errorPosition === 'top' && errorMessage && (
            <FieldError>{errorMessage}</FieldError>
          )}
          <div className={styles.checkboxList}>
            {showSelectAll && (
              <SelectAllCheckbox
                label={selectAllLabel}
                checkboxes={children}
              />
            )}
            {children}
          </div>
          {errorPosition === 'bottom' && errorMessage && (
            <FieldError>{errorMessage}</FieldError>
          )}
        </>
      ))}
    </AriaCheckboxGroup>
  )
}
