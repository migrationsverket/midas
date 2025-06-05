import * as React from 'react'
import { useCheckboxGroupItem } from 'react-aria'
import { CheckboxGroupItemProps } from './types'
import { CheckboxInner } from './CheckboxInner'

export const CheckBoxGroupItem = React.forwardRef<
  HTMLLabelElement,
  CheckboxGroupItemProps
>((props, ref) => {
  // TODO: Did I just break this?
  // Only pass isRequired to react-aria if they came from
  // the props for this individual checkbox, and not from the group via context.
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
