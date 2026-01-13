import {
  Input as AriaInput,
  InputProps as AriaInputProps,
  useContextProps,
  InputContext,
} from 'react-aria-components'
import { forwardRef } from 'react'
import clsx from '../utils/clsx'
import styles from './TextField.module.css'
import { PasswordField } from './PasswordField'

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

    return (
      <div className={styles.wrap}>
        <AriaInput
          {...props}
          ref={ref}
          className={clsx(styles.input, props.className)}
        />
        {props.type === 'password' && <PasswordField {...props} />}
      </div>
    )
  },
)
Input.displayName = 'Input'
