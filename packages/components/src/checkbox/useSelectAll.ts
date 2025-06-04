import { CheckboxGroupState } from 'react-stately';
import * as React from 'react';
import { Checkbox } from './Checkbox';

export const useSelectAll = (children: React.ReactNode, state: CheckboxGroupState) => {

  const actualChildren = React.Children.toArray(children).filter(child => React.isValidElement(child) && child.type === Checkbox);
  const numberOfCheckboxes = React.Children.count(actualChildren);
  const checkboxValues: string[] = React.Children
    .toArray(children)
    .filter(child => React.isValidElement(child))
    .filter(child => !!child && child.type === Checkbox)
    .map((child) => child.props.value);
  const noneSelected = state.value.length === 0
  const allSelected = state.value.length === numberOfCheckboxes
  const someSelected = !noneSelected && !allSelected

  return {
    allSelected,
    someSelected,
    checkboxValues
  }

}
