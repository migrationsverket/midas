'use client'

import clsx from 'clsx'
import { forwardRef, ReactNode, useContext } from 'react'
import { composeRenderProps } from 'react-aria-components'
import { type ButtonProps, Button } from '@midas-ds/components'
import { HeaderActionsContext } from '../header-actions/HeaderActionsContext'
import styles from './HeaderAction.module.css'

export interface HeaderActionProps extends Omit<ButtonProps, 'icon'> {
  /** The action's icon, 20px, e.g. `<Bell size={20} />` */
  icon?: ReactNode
  /**
   * The label. In horizontal HeaderActions it's hidden on small screens,
   * where only the icon shows, but screen readers still read it. Without a
   * label, give the action an `aria-label`
   */
  children?: ButtonProps['children']
}

export const HeaderAction = forwardRef<HTMLButtonElement, HeaderActionProps>(
  ({ children, icon, className, ...props }, ref) => {
    if (
      !children &&
      !props['aria-label'] &&
      process.env.NODE_ENV !== 'production'
    ) {
      console.warn(
        "Please provide an 'aria-label' for HeaderAction components that doesnt have a visible label (children)",
      )
    }
    const { orientation } = useContext(HeaderActionsContext)

    return (
      <Button
        ref={ref}
        size='medium'
        variant='tertiary'
        className={clsx(styles.headerAction, className)}
        data-orientation={orientation}
        data-icon-only={children === undefined || undefined}
        {...props}
      >
        {composeRenderProps(children, children => (
          <>
            {icon}
            {typeof children !== 'undefined' && (
              <span className={styles.label}>{children}</span>
            )}
          </>
        ))}
      </Button>
    )
  },
)

HeaderAction.displayName = 'HeaderAction'
