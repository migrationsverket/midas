import { Input as AriaInput, InputProps } from 'react-aria-components'
import * as React from 'react'
import clsx from 'clsx'
import styles from './TextField.module.css'
import { useContextProps, InputContext } from 'react-aria-components'
import { Text } from '../text'
import { Button } from '../button'

export type { InputProps }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    ;[props, ref] = useContextProps(props, ref, InputContext)

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

const PasswordField: React.FC<InputProps> = ({ value }) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const handlePress = () => setShowPassword(previousValue => !previousValue)

  return (
    <>
      {showPassword && (
        <Text
          slot='description'
          className={styles.passwordText}
        >
          {value}
        </Text>
      )}
      <Button
        variant='tertiary'
        onPress={handlePress}
        className={styles.passwordButton}
      >
        {showPassword ? 'Dölj' : 'Visa'}
      </Button>
    </>
  )
}
