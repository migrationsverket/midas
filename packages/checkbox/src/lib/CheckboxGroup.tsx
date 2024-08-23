'use client'

import React, { useState } from 'react'
import {
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  CheckboxGroupContext,
  CheckboxGroupStateContext,
  CheckboxProps,
  FieldError,
  Label,
  Text,
  ValidationResult,
} from 'react-aria-components'
import { TriangleAlert } from 'lucide-react'
import styles from './Checkbox.module.css'
import { Checkbox } from './Checkbox'

export interface CheckboxGroupProps
  extends Omit<AriaCheckboxGroupProps, 'children'> {
  children?: React.ReactNode
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export const CheckboxGroup = ({
  label,
  description,
  errorMessage,
  children,
  ...props
}: CheckboxGroupProps) => {
  const state = React.useContext(CheckboxGroupStateContext)
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  // Handle the "Select All" checkbox
  const handleSelectAll = (isChecked: boolean) => {
    if (isChecked) {
      // Select all values
      const allValues = React.Children.toArray(children)
        .map((child) => {
          if (React.isValidElement<CheckboxProps>(child) && child.props.value) {
            return child.props.value
          }
          return null
        })
        .filter((value): value is string => value !== null) // Filter out null

      setSelectedValues(allValues)
      state?.setValue(allValues)
    } else {
      // Deselect all values
      setSelectedValues([])
      state?.setValue([])
    }
  }

  // Handle individual checkbox change
  const handleCheckboxChange = (value: string) => {
    setSelectedValues((prevSelectedValues) => {
      const newSelectedValues = prevSelectedValues.includes(value)
        ? prevSelectedValues.filter((v) => v !== value)
        : [...prevSelectedValues, value]
      state?.setValue(newSelectedValues)
      return newSelectedValues
    })
  }

  // Check if all checkboxes are selected
  const isAllSelected =
    React.Children.count(children) > 0 &&
    selectedValues.length === React.Children.count(children)

  return (
    <CheckboxGroupContext.Provider value={{}}>
      <AriaCheckboxGroup
        {...props}
        className={styles.checkboxGroup}
      >
        {({ isInvalid }) => (
          <>
            <Label className={styles.checkboxGroupLabel}>{label}</Label>
            {description && <Text slot="description">{description}</Text>}
            <Checkbox
              value="select-all"
              isSelected={isAllSelected}
              onChange={(e) => handleSelectAll(e)}
            >
              Välj alla
            </Checkbox>
            {React.Children.map(children, (child) => {
              if (
                React.isValidElement<CheckboxProps>(child) &&
                child.props.value
              ) {
                return React.cloneElement(child, {
                  isSelected: selectedValues.includes(child.props.value),
                  onChange: () =>
                    handleCheckboxChange(
                      child.props.value ? child.props.value : ''
                    ),
                })
              }
              return null
            })}
            <span className={styles.fieldError}>
              {isInvalid && (
                <TriangleAlert
                  width={16}
                  height={16}
                />
              )}
              <FieldError>{errorMessage}</FieldError>
            </span>
          </>
        )}
      </AriaCheckboxGroup>
    </CheckboxGroupContext.Provider>
  )
}
