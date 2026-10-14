import { RadioFieldProps } from 'react-aria-components'
import { RadioField } from './RadioField'
import { RadioButton } from './RadioButton'
import { splitDataAttributes } from '../utils/splitDataAttributes'

export type RadioProps = RadioFieldProps

export const Radio = ({ children, className, ...props }: RadioProps) => {
  // On the label, not the field wrapper, so clicking the test id selects it
  const [dataAttributes, rest] = splitDataAttributes(props)
  return (
    <RadioField {...rest}>
      <RadioButton
        {...dataAttributes}
        className={className}
      >
        {children}
      </RadioButton>
    </RadioField>
  )
}
