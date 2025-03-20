import clsx from 'clsx'
import styles from './ButtonGroup.module.css'
import { ButtonContext, ButtonProps, ContextValue } from 'react-aria-components'

interface ButtonContextValue extends ButtonProps {
  isPressed?: boolean
}
export interface MidasButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional props to pass to child Buttons */
  contextValue?: ContextValue<ButtonContextValue, HTMLButtonElement>
}

/**
 * Group several buttons together.
 *
 * @interface MidasButtonGroupProps
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */

export const ButtonGroup: React.FC<MidasButtonGroupProps> = ({
  children,
  className,
  contextValue,
  ...rest
}) => {
  return (
    <div
      role='group'
      className={clsx(styles.buttonGroup, className)}
      {...rest}
    >
      {contextValue ? (
        <ButtonContext.Provider value={contextValue}>
          {children}
        </ButtonContext.Provider>
      ) : (
        children
      )}
    </div>
  )
}
