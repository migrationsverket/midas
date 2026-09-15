import * as React from 'react'
import { type CheckboxGroupState } from 'react-stately'
import { Checkbox, type CheckboxProps } from './Checkbox'

export const useSelectAll = (
  children: React.ReactNode,
  state: CheckboxGroupState | null,
) => {
  const selectedItems = state?.value ?? []

  const checkboxes = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<CheckboxProps> =>
      React.isValidElement(child) && child.type === Checkbox,
  )

  // A disabled checkbox can't be toggled individually, so select-all/clear-all
  // shouldn't be able to change it either — its existing selection state is
  // preserved regardless of which way the header checkbox is toggled.
  const checkboxValues = checkboxes
    .filter(child => !child.props.isDisabled)
    .map(child => child.props.value || '')

  const disabledSelectedValues = checkboxes
    .filter(child => child.props.isDisabled)
    .map(child => child.props.value || '')
    .filter(value => selectedItems.includes(value))

  const selectedCount = selectedItems.filter(value =>
    checkboxValues.includes(value),
  ).length

  const noneSelected = selectedCount === 0

  const allSelected = selectedCount === checkboxValues.length

  const someSelected = !noneSelected && !allSelected

  return {
    allSelected,
    someSelected,
    checkboxValues,
    disabledSelectedValues,
  }
}
