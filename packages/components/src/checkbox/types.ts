import type {
  AriaCheckboxProps,
  CheckboxAria,
  FocusRingAria,
  HoverResult,
  PressResult,
} from 'react-aria'
import type { SlotProps, ValidationResult } from 'react-aria-components'
import { CheckboxGroupState } from 'react-stately'

export type CheckboxProps = AriaCheckboxProps &
  SlotProps & {
    className?: string
    description?: string
    errorMessage?: string | ((validation: ValidationResult) => string)
    errorPosition?: 'top' | 'bottom'
  }

export interface CheckboxComponentProps extends CheckboxProps {
  focusRingAria: FocusRingAria
  pressResult: PressResult
  hoverResult: HoverResult
  inputRef: React.RefObject<HTMLInputElement | null>
}

export interface CheckboxGroupItemProps extends CheckboxComponentProps {
  state: CheckboxGroupState
}

export type CheckboxInnerProps = CheckboxComponentProps & CheckboxAria
