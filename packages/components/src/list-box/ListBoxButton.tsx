import * as React from 'react'
import clsx from 'clsx'
import styles from './ListBox.module.css'

export const ListBoxButton: React.FC<
  React.HTMLAttributes<HTMLButtonElement>
> = ({ className, children, ...rest }) => (
  <button
    type='button'
    className={clsx(styles.listBoxItem, styles.listBoxButton, className)}
    {...rest}
  >
    {children}
  </button>
)
