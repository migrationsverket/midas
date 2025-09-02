import * as React from 'react'
import { useCheckboxGroupItem } from 'react-aria'
import type { CheckboxGroupItemProps } from './types'
import { CheckboxInner } from './CheckboxInner'

export const CheckBoxGroupItem: React.FC<CheckboxGroupItemProps> = ({
  ref,
  ...props
}) => {
  const checkboxGroupItem = useCheckboxGroupItem(
    {
      ...props,
      value: props.value || '',
    },
    props.state,
    props.inputRef,
  )

  return (
    <CheckboxInner
      {...props}
      {...checkboxGroupItem}
      ref={ref}
    />
  )
}
