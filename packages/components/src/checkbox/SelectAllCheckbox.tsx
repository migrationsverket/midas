import { ReactNode, useContext } from 'react'
import { CheckboxGroupStateContext } from 'react-aria-components'
import { useLocalizedStringFormatter } from '@midas-ds/utils'
import { useSelectAll } from './useSelectAll'
import { Checkbox } from './Checkbox'
import messages from './intl/translations.json'

export interface SelectAllCheckboxProps {
  checkboxes: ReactNode
  label?: string
}

export const SelectAllCheckbox = ({
  checkboxes,
  label,
}: SelectAllCheckboxProps) => {
  const state = useContext(CheckboxGroupStateContext)
  const stringFormatter = useLocalizedStringFormatter(messages)

  const { allSelected, someSelected, checkboxValues, disabledSelectedValues } =
    useSelectAll(checkboxes, state)

  const handleChange = (checked: boolean) => {
    state?.setValue(
      checked
        ? [...checkboxValues, ...disabledSelectedValues]
        : disabledSelectedValues,
    )
  }

  return (
    // Select-all mirrors the group's overall state instead of tracking a
    // value of its own, so it needs to opt out of the ambient
    // CheckboxGroupStateContext — otherwise the CheckboxField beneath it
    // would try to register/toggle itself as a valueless group item.
    <CheckboxGroupStateContext.Provider value={null}>
      <Checkbox
        isSelected={allSelected}
        isIndeterminate={someSelected}
        isReadOnly={state?.isReadOnly}
        isDisabled={state?.isDisabled}
        onChange={handleChange}
      >
        {label || stringFormatter.format('selectAll')}
      </Checkbox>
    </CheckboxGroupStateContext.Provider>
  )
}
