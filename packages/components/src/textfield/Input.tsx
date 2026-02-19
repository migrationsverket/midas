import {
  Input as AriaInput,
  InputProps as AriaInputProps,
  useContextProps,
  InputContext,
} from 'react-aria-components'
import { forwardRef, useState } from 'react'
import clsx from '../utils/clsx'
import styles from './TextField.module.css'
import { PasswordToggle } from './PasswordToggle'

export interface InputProps extends AriaInputProps {
  /** If the component should use local props and ref instead of a parent context
   * @default false
   */
  skipContext?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ skipContext = false, ...localProps }, localRef) => {
    const [contextProps, contextRef] = useContextProps(
      localProps,
      localRef,
      InputContext,
    )
    const ref = skipContext ? localRef : contextRef
    const props = skipContext ? localProps : contextProps
    const isPassword = props.type === 'password'
    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className={styles.wrap}>
        <AriaInput
          {...props}
          ref={ref}
          type={isPassword && showPassword ? 'text' : props.type}
          className={clsx(styles.input, props.className)}
        />
        {isPassword && (
          <PasswordToggle
            showPassword={showPassword}
            onToggle={() => setShowPassword(prev => !prev)}
          />
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'
