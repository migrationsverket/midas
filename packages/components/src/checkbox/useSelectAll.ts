import * as React from 'react'
import { CheckboxGroupState } from 'react-stately'
import { Checkbox } from './Checkbox'
import { CheckboxProps } from './types'

export const useSelectAll = (
  children: React.ReactNode,
  { value: selectedItems }: CheckboxGroupState,
) => {
  const checkboxes = React.Children.toArray(children).filter(
    child => React.isValidElement(child) && child.type === Checkbox,
  )

  const numberOfCheckboxes = React.Children.count(checkboxes)

  const checkboxValues: string[] = React.Children.toArray(children)
    .filter(child => React.isValidElement(child))
    .filter(child => !!child && child.type === Checkbox)
    .map(child => (child.props as CheckboxProps).value || '')

  const noneSelected = selectedItems.length === 0

  const allSelected = selectedItems.length === numberOfCheckboxes

  const someSelected = !noneSelected && !allSelected

  return {
    allSelected,
    someSelected,
    checkboxValues,
  }
}
