import { forwardRef } from 'react'
import { useCheckboxGroupItem } from 'react-aria'
import type { CheckboxGroupItemProps } from './types'
import { CheckboxInner } from './CheckboxInner'

export const CheckBoxGroupItem = forwardRef<
  HTMLLabelElement,
  CheckboxGroupItemProps
>((props, ref) => {
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
})
