'use client'

import { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { clsx } from '@midas-ds/components'
import { ModalOverlayProps } from 'react-aria-components'
import { NavigationLink, NavigationSubMenu, Drawer } from './components'
import styles from './Navigation.module.css'

export interface NavigationProps
  extends
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    Pick<ModalOverlayProps, 'isOpen' | 'onOpenChange'> {
  children?: ReactNode
  id: string
}

export const Navigation = ({
  children,
  className,
  id,
  isOpen,
  onOpenChange,
  ...rest
}: NavigationProps) => {
  const [hasBeenOpened, setHasBeenOpened] = useState(false)

  useEffect(() => {
    if (isOpen) setHasBeenOpened(true)
  }, [isOpen])

  return (
    <>
      <nav
        className={clsx(className, styles.navigation)}
        {...rest}
      >
        <ul>{children}</ul>
      </nav>
      {hasBeenOpened && (
        <Drawer
          id={id}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <nav
            id={id}
            className={clsx(className, styles.navigation)}
            {...rest}
          >
            <ul>{children}</ul>
          </nav>
        </Drawer>
      )}
    </>
  )
}

Navigation.Link = NavigationLink
Navigation.SubMenu = NavigationSubMenu
