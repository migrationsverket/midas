'use client'

import React from 'react'
import {
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  CheckboxGroupStateContext,
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
  showSelectAll?: boolean
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export const CheckboxGroup = ({
  label,
  description,
  errorMessage,
  showSelectAll,
  children,
  ...props
}: CheckboxGroupProps) => {
  const [isAllSelected, setIsAllSelected] = React.useState<boolean>(false)

  const ToogleAll = () => {
    // Get the current state of the checkbox group
    const state = React.useContext(CheckboxGroupStateContext)

    // Retrieve all childern
    const childValues = React.Children.toArray(children)
      .filter(React.isValidElement)
      .map((child: React.ReactElement) => child.props.value)

    // Toogle all values
    function toggleAll() {
      setIsAllSelected(!isAllSelected)
      if (!isAllSelected) return state.setValue(['toggleAll', ...childValues])

      return state.setValue([])
    }

    //listen and change the select all accordingly
    React.useEffect(() => {
      if (state.value.length !== childValues.length + 1)
        state.removeValue('toggleAll')
      if (
        state.value.length === childValues.length &&
        !state.value.includes('toggleAll')
      ) {
        state.addValue('toggleAll')
        setIsAllSelected(true)
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [childValues.length, state.value])

    return (
      <Checkbox
        value="toggleAll"
        isSelected={isAllSelected}
        onChange={() => toggleAll()}
      >
        Välj alla
      </Checkbox>
    )
  }

  return (
    <AriaCheckboxGroup
      {...props}
      className={styles.checkboxGroup}
    >
      {({ isInvalid }) => (
        <>
          <div className={styles.labelGroup}>
            <Label className={styles.checkboxGroupLabel}>{label}</Label>
            {description && (
              <Text
                slot="description"
                className={styles.checkboxGroupDescription}
              >
                {description}
              </Text>
            )}
          </div>
          {showSelectAll && <ToogleAll />}
          {children}
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
  )
}
