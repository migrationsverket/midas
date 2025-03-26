import { ValidationResult } from 'react-aria-components'
import { Label } from '../label'
import { Text } from '../text'
import { FieldError } from '../field-error'

interface InputWrapperProps {
  label?: string
  description?: string
  /** String to display as error message or function to handle the result and produce the error message */
  errorMessage?: string | ((validation: ValidationResult) => string)
  children?: React.ReactNode
}
export const InputWrapper: React.FC<InputWrapperProps> = ({
  label,
  description,
  errorMessage,
  children,
}) => (
  <>
    {label && <Label variant='label-02'>{label}</Label>}
    {description && <Text slot='description'>{description}</Text>}
    <FieldError data-testid='fieldError'>{errorMessage}</FieldError>
    {children}
  </>
)
