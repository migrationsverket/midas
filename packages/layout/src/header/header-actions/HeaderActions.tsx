'use client'

import { forwardRef, type ReactNode } from 'react'
import { Button, type MidasButton } from '@midas-ds/components'
import styles from './HeaderActions.module.css'

type HeaderActionsButtonProps = Omit<MidasButton, 'icon'> & {
  icon?: ReactNode
}

const HeaderActionsButton = forwardRef<HTMLButtonElement, HeaderActionsButtonProps>(
  ({ children, icon, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size='medium'
        variant='tertiary'
        {...props}
      >
        {icon}
        {children && <span className={styles.label}>{children}</span>}
      </Button>
    )
  },
)

HeaderActionsButton.displayName = 'HeaderActionsButton'

const HeaderActionsRoot = ({ children }: { children: ReactNode }) => (
  <div className={styles.headerActions}>{children}</div>
)

export const HeaderActions = Object.assign(HeaderActionsRoot, {
  Button: HeaderActionsButton,
})
