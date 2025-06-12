import * as React from 'react'
import { useFocusRing, useHover, usePress } from 'react-aria'
import {
  CheckboxContext,
  FormContext,
  useContextProps,
  useSlottedContext,
} from 'react-aria-components'
import { CheckboxGroupContext } from './context'
import { CheckboxProps } from './types'
import { CheckBoxGroupItem } from './CheckboxGroupItem'
import { SingleCheckbox } from './SingleCheckbox'

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  (props, ref) => {
    ;[props, ref] = useContextProps(props, ref, CheckboxContext)

    const formProps = useSlottedContext(FormContext)

    const validationBehavior =
      props.validationBehavior ?? formProps?.validationBehavior ?? 'native'

    const state = React.useContext(CheckboxGroupContext)

    const inputRef = React.useRef<HTMLInputElement>(null)

    const hoverResult = useHover(props)

    const pressResult = usePress({
      ref,
      isDisabled: props.isDisabled,
    })

    const focusRingAria = useFocusRing()

    if (state) {
      return (
        <CheckBoxGroupItem
          {...props}
          state={state}
          inputRef={inputRef}
          hoverResult={hoverResult}
          pressResult={pressResult}
          focusRingAria={focusRingAria}
          validationBehavior={validationBehavior}
        />
      )
    }

    return (
      <SingleCheckbox
        {...props}
        inputRef={inputRef}
        hoverResult={hoverResult}
        pressResult={pressResult}
        focusRingAria={focusRingAria}
        validationBehavior={validationBehavior}
      />
    )
  },
)
