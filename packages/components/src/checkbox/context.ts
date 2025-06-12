import { CheckboxGroupState } from '@react-stately/checkbox'
import React from 'react'

export const CheckboxGroupContext =
  React.createContext<CheckboxGroupState | null>(null)
