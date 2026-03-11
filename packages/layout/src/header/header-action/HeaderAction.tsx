'use client'

import { forwardRef, ReactNode } from 'react'
import { composeRenderProps } from 'react-aria-components'
import { type ButtonProps, Button } from '@midas-ds/components'
import styles from './HeaderAction.module.css'

export interface HeaderActionProps extends Omit<ButtonProps, 'icon'> {
  icon?: ReactNode
}

export const HeaderAction = forwardRef<HTMLButtonElement, HeaderActionProps>(
  ({ children, icon, ...props }, ref) => {
    if (
      !children &&
      !props['aria-label'] &&
      process.env.NODE_ENV !== 'production'
    ) {
      console.warn(
        "Please provide an 'aria-label' for HeaderAction components that doesnt have a visible label (children)",
      )
    }

    return (
      <Button
        ref={ref}
        size='medium'
        variant='tertiary'
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
