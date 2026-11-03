import { composeRenderProps, RadioFieldProps } from 'react-aria-components'
import { RadioField } from './RadioField'
import { RadioButton } from './RadioButton'
import { splitDataAttributes } from '../utils/splitDataAttributes'
import { ClearContexts } from '../utils/ClearContexts'
import { useContextPropsWithoutRef } from '../utils/useContextPropsWithoutRef'
import { RadioContext } from './RadioContext'

export type RadioProps = RadioFieldProps

export const Radio = (localProps: RadioProps) => {
  const { children, className, ...props } = useContextPropsWithoutRef(
    localProps,
    RadioContext,
  )
  // On the label, not the field wrapper, so clicking the test id selects it
  const [dataAttributes, rest] = splitDataAttributes(props)
  return (
    <RadioField {...rest}>
      <RadioButton
        {...dataAttributes}
        className={className}
      >
        {composeRenderProps(children, children => (
          <ClearContexts>{children}</ClearContexts>
        ))}
      </RadioButton>
    </RadioField>
  )
}
