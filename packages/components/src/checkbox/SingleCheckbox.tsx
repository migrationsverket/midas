import { forwardRef } from 'react'
import { useCheckbox } from 'react-aria'
import { useToggleState } from '@react-stately/toggle'
import type { CheckboxComponentProps } from './types'
import { CheckboxInner } from './CheckboxInner'

export const SingleCheckbox = forwardRef<
  HTMLLabelElement,
  CheckboxComponentProps
>((props, ref) => {
  const item = useCheckbox(props, useToggleState(props), props.inputRef)

  return (
    <CheckboxInner
      {...props}
      {...item}
      ref={ref}
    />
  )
})
SingleCheckbox.displayName = 'SingleCheckbox'
