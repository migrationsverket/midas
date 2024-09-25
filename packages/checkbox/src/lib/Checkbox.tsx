'use client'

import clsx from 'clsx'
import { Checkbox as AriaCheckbox, CheckboxProps } from 'react-aria-components'
import styles from './Checkbox.module.css'
import { Check } from 'lucide-react'
import { Minus } from 'lucide-react'

export const Checkbox = ({ children, ...props }: CheckboxProps) => {
  return (
    <AriaCheckbox
      className={clsx(styles.checkbox, props.className)}
      {...props}
    >
      {({ isIndeterminate }: { isIndeterminate: boolean }) => (
        <>
          <div
            className={styles.checkboxInner}
            aria-hidden="true"
          >
            {isIndeterminate ? <Minus></Minus> : <Check></Check>}
          </div>
          {children}
        </>
      )}
    </AriaCheckbox>
  )
}
