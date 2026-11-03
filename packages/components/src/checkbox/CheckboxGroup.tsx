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
import { CheckboxGroupContext } from './CheckboxGroupContext'
import { ClearContexts } from '../utils/ClearContexts'
import { useContextPropsWithoutRef } from '../utils/useContextPropsWithoutRef'

export interface CheckboxGroupProps extends AriaCheckboxGroupProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  showSelectAll?: boolean
  selectAllLabel?: string
  errorPosition?: 'top' | 'bottom'
  popover?: InfoPopoverProps
}

export const CheckboxGroup = (localProps: CheckboxGroupProps) => {
  const {
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
  } = useContextPropsWithoutRef(localProps, CheckboxGroupContext)
  return (
    <AriaCheckboxGroup
      {...props}
      className={clsx(styles.checkboxGroup, className)}
    >
      {composeRenderProps(children, children => (
        <>
          <ClearContexts>
            <LabelWrapper popover={popover}>
              {label && <Label>{label}</Label>}
            </LabelWrapper>
            {description && <Text slot='description'>{description}</Text>}
            {errorPosition === 'top' && errorMessage && (
              <FieldError>{errorMessage}</FieldError>
            )}
          </ClearContexts>
          <div className={styles.checkboxList}>
            {showSelectAll && (
              <ClearContexts>
                <SelectAllCheckbox
                  label={selectAllLabel}
                  checkboxes={children}
                />
              </ClearContexts>
            )}
            {/* The consumer's checkboxes, so they get the consumer's contexts */}
            {children}
          </div>
          {errorPosition === 'bottom' && errorMessage && (
            <ClearContexts>
              <FieldError>{errorMessage}</FieldError>
            </ClearContexts>
          )}
        </>
      ))}
    </AriaCheckboxGroup>
  )
}
