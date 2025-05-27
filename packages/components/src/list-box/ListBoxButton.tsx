import { FocusRing } from 'react-aria'
import styles from './ListBox.module.css'
import React from 'react'
import clsx from 'clsx'

export const ListBoxButton: React.FC<
  React.HTMLAttributes<HTMLButtonElement>
> = ({ className, children, ...rest }) => {
  return (
    <FocusRing focusRingClass={styles.listBoxItemFocusRing}>
      <button
        type='button'
        className={clsx(styles.listBoxItem, styles.listBoxButton, className)}
        {...rest}
      >
        {children}
      </button>
    </FocusRing>
  )
}
