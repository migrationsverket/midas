import { AriaCheckboxGroupProps, useCheckboxGroup } from 'react-aria'
import React from 'react'
import { useCheckboxGroupState } from 'react-stately'
import { useSelectAll } from './useSelectAll'
import { FieldError, Label, Text } from '@midas-ds/components'
import { Checkbox } from './Checkbox'
import { CheckboxGroupContext } from './context'
import styles from './Checkbox.module.css'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'

export function CheckboxGroup(
  props: AriaCheckboxGroupProps & {
    children: React.ReactNode
    showSelectAll?: boolean
    selectAllLabel?: string
  },
) {
  const { children, label, description, showSelectAll, selectAllLabel, errorMessage } = props
  const state = useCheckboxGroupState(props)
  const {
    groupProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
  } = useCheckboxGroup(props, state)

  const { allSelected, someSelected, checkboxValues } = useSelectAll(
    children,
    state,
  )

  const handleChange = (checked: boolean) => {
    if (!checked) return state.setValue([])
    return state.setValue([...checkboxValues])
  }

  const stringFormatter = useLocalizedStringFormatter(messages)

  return (
    <div
      {...groupProps}
      className={styles.checkboxGroup}
    >
      <Label {...labelProps}>{label}</Label>
      {description && (
        <Text
          slot={'description'}
          {...descriptionProps}
        >
          {description}
        </Text>
      )}
      {showSelectAll ? (
        <Checkbox
          isSelected={allSelected}
          isIndeterminate={someSelected}
          onChange={handleChange}
        >
          {!!selectAllLabel ? selectAllLabel : stringFormatter.format('selectAll')}
        </Checkbox>
      ) : (
        <></>
      )}
      <CheckboxGroupContext.Provider value={state}>
        {children}
      </CheckboxGroupContext.Provider>
      {isInvalid && (
        <div
          {...errorMessageProps}
          style={{ color: 'red', fontSize: 12 }}
        >
          {validationErrors.join(' ')}
        </div>
      )}
    </div>
  )
}
