'use client'

import clsx from 'clsx'
import { Checkbox as AriaCheckbox, CheckboxProps } from 'react-aria-components'
import styles from './Checkbox.module.css'

export const Checkbox = ({ children, ...props }: CheckboxProps) => {
  return (
    <AriaCheckbox
      className={clsx(styles.checkbox, props.className)}
      {...props}
    >
      {({ isIndeterminate }: { isIndeterminate: boolean }) => (
        <>
          <div className={styles.checkboxInner}>
            <svg
              width={16}
              height={16}
              viewBox='0 0 18 18'
              aria-hidden='true'
            >
              {isIndeterminate ? (
                <rect
                  x={4}
                  y={8}
                  width={10}
                  height={2}
                />
              ) : (
                <polyline points='3,9 7,13 15,4' />
              )}
            </svg>
          </div>
          {children}
        </>
      )}
    </AriaCheckbox>
  )
}
