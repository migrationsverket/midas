import { forwardRef } from 'react'
import { type SwitchFieldProps as AriaSwitchFieldProps } from 'react-aria-components'
import styles from './Switch.module.css'
import { SwitchField } from './SwitchField'
import { SwitchButton } from './SwitchButton'
import { splitDataAttributes } from '../utils/splitDataAttributes'
import clsx from 'clsx'
import { Size } from '../common/types'

export interface SwitchProps extends AriaSwitchFieldProps {
  description?: string
  size?: Size
}

export const Switch = forwardRef<HTMLLabelElement, SwitchProps>(
  ({ className, size = 'medium', children, ...fieldProps }, ref) => {
    // On the label, not the field wrapper, so clicking the test id checks it
    const [dataAttributes, props] = splitDataAttributes(fieldProps)
    const getSizeClassName = () => {
      return size === 'large' ? styles.large : styles.medium
    }
    return (
      <SwitchField {...props}>
        <SwitchButton
          {...dataAttributes}
          ref={ref}
          className={className}
        >
          {({ isDisabled }) => (
            <>
              {children}
              <div className={clsx(getSizeClassName(), styles.track)}>
                <div
                  data-disabled={isDisabled || undefined}

                  className={styles.handle}
                />
              </div>
            </>
          )}
        </SwitchButton>
      </SwitchField>
    )
  },
)

Switch.displayName = 'Switch'
