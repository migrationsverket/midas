import * as React from 'react'
import { useCheckbox } from 'react-aria'
import { useToggleState } from '@react-stately/toggle'
import type { CheckboxComponentProps } from './types'
import { CheckboxInner } from './CheckboxInner'

export const SingleCheckbox: React.FC<CheckboxComponentProps> = ({
  ref,
  ...props
}) => {
  const item = useCheckbox(props, useToggleState(props), props.inputRef)

  return (
    <CheckboxInner
      {...props}
      {...item}
      ref={ref}
    />
  )
}
