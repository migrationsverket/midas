'use client'

import React from 'react'
import {
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  CheckboxGroupStateContext,
  Group,
  ValidationResult,
} from 'react-aria-components'
import styles from './Checkbox.module.css'
import { Checkbox } from './Checkbox'
import { Label } from '../label'
import { Text } from '../text'
import { FieldError } from '../field-error'

export interface CheckboxGroupProps
  extends Omit<AriaCheckboxGroupProps, 'children'> {
  children?: React.ReactNode
  label?: string
  description?: string
  showSelectAll?: boolean
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
}

export const CheckboxGroup = ({
  label,
  description,
  errorMessage,
  showSelectAll,
  children,
  errorPosition = 'top',
  ...props
}: CheckboxGroupProps) => {
  const [isAllSelected, setIsAllSelected] = React.useState<
    'all' | 'some' | 'none'
  >()

  const ToogleAll = () => {
    // Get the current state of the checkbox group
    const state = React.useContext(CheckboxGroupStateContext)

    // Retrieve all childern
    const childValues = React.Children.toArray(children)
      .filter(React.isValidElement)
      .map((child: React.ReactElement) => child.props.value)

    // Toogle all values
    const toggleAll = () => {
      if (isAllSelected !== 'all') {
        setIsAllSelected('all')
        return state?.setValue(['toggleAll', ...childValues])
      }

      setIsAllSelected('none')
      return state?.setValue([])
    }

    //listen and change the select all accordingly
    React.useEffect(() => {
      const amountOfChildren = childValues.length
      const totalAmount = childValues.length + 1
      const currentAmount = state?.value?.length || 0

      if (currentAmount === 0) setIsAllSelected('none')

      if (currentAmount > 0 && currentAmount < amountOfChildren)
        setIsAllSelected('some')

      if (currentAmount !== totalAmount) state?.removeValue('toggleAll')

      if (
        currentAmount === amountOfChildren &&
        !state?.value?.includes('toggleAll')
      ) {
        state?.addValue('toggleAll')
        setIsAllSelected('all')
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [childValues.length, state?.value])

    return (
      <Checkbox
        value='toggleAll'
        isSelected={isAllSelected === 'all'}
        isIndeterminate={isAllSelected === 'some'}
        onChange={() => toggleAll()}
      >
        Välj alla
      </Checkbox>
    )
  }

  return (
    <AriaCheckboxGroup
      className={styles.checkboxGroup}
      {...props}
    >
      <Label variant='label-02'>{label}</Label>
      {description && <Text slot='description'>{description}</Text>}
      {errorPosition === 'top' && <FieldError>{errorMessage}</FieldError>}
      <Group className={styles.wrap}>
        {showSelectAll && <ToogleAll />}
        {children}
      </Group>
      {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
    </AriaCheckboxGroup>
  )
}
