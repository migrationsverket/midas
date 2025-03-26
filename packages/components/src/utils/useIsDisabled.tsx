import { useContext } from 'react'
import {
  DateFieldContext,
  InputContext,
  RadioGroupStateContext,
  useSlottedContext,
} from 'react-aria-components'

/**
 * Figure out if the surrounding context is disabled
 */
export default function useIsDisabled() {
  const inputProps = useSlottedContext(InputContext)
  const radioProps = useContext(RadioGroupStateContext)
  const dateFieldStartProps = useSlottedContext(DateFieldContext, 'start')
  const dateFieldEndProps = useSlottedContext(DateFieldContext, 'end')

  return (
    inputProps?.disabled ||
    radioProps?.isDisabled ||
    dateFieldStartProps?.isDisabled ||
    dateFieldEndProps?.isDisabled ||
    undefined
  )
}
