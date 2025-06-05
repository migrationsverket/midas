import * as React from 'react'
import { AriaCheckboxGroupProps, useCheckboxGroup } from 'react-aria'
import { useCheckboxGroupState } from 'react-stately'
import { FieldErrorContext } from 'react-aria-components'
import { FieldError } from '../field-error'
import { Label } from '../label'
import { Text } from '../text'
import { useLocalizedStringFormatter } from '../utils/intl'
import { useSelectAll } from './useSelectAll'
import { Checkbox } from './Checkbox'
import { CheckboxGroupContext } from './context'
import messages from './intl/translations.json'
import styles from './Checkbox.module.css'

export interface CheckboxGroupProps extends AriaCheckboxGroupProps {
  children: React.ReactNode
  showSelectAll?: boolean
  selectAllLabel?: string
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  const state = useCheckboxGroupState(props)

  const stringFormatter = useLocalizedStringFormatter(messages)

  const { groupProps, labelProps, descriptionProps } = useCheckboxGroup(
    props,
    state,
  )

  const { allSelected, someSelected, checkboxValues } = useSelectAll(
    props.children,
    state,
  )

  const handleChange = (checked: boolean) => {
    state.setValue(checked ? checkboxValues : [])
  }

  return (
    <div
      {...groupProps}
      className={styles.checkboxGroup}
    >
      <Label {...labelProps}>{props.label}</Label>
      {props.description && (
        <Text
          slot='description'
          {...descriptionProps}
        >
          {props.description}
        </Text>
      )}
      {props.showSelectAll && (
        <Checkbox
          isSelected={allSelected}
          isIndeterminate={someSelected}
          onChange={handleChange}
        >
          {props.selectAllLabel || stringFormatter.format('selectAll')}
        </Checkbox>
      )}
      <CheckboxGroupContext.Provider value={state}>
        {props.children}
      </CheckboxGroupContext.Provider>
      <FieldErrorContext.Provider value={state.displayValidation}>
        <FieldError>{props.errorMessage}</FieldError>
      </FieldErrorContext.Provider>
    </div>
  )
}
