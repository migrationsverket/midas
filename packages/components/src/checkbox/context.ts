import { CheckboxGroupState } from 'react-stately'
import React from 'react'

export const CheckboxGroupContext =
  React.createContext<CheckboxGroupState | null>(null)
