'use client'

import { DetailedHTMLProps, HTMLAttributes, ReactNode, useState } from 'react'
import { clsx } from '@midas-ds/components'
import { ModalOverlayProps } from 'react-aria-components'
import { NavigationLink, NavigationSubMenu, Drawer } from './components'
import styles from './Navigation.module.css'
import { useControlledState } from '../../utils'

export interface NavigationProps
  extends
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    Pick<ModalOverlayProps, 'isOpen' | 'onOpenChange' | 'defaultOpen'> {
  children?: ReactNode
  id: string
}

export const Navigation = ({
  children,
  className,
  id,
  isOpen: isOpenProp,
  defaultOpen = false,
  onOpenChange,
  ...rest
}: NavigationProps) => {
  const [isOpen, setIsOpen] = useControlledState(
    isOpenProp,
    defaultOpen,
    onOpenChange,
  )

  const [hasBeenOpened, sethasBeenOpened] = useState(false)

  if (!hasBeenOpened && isOpen) {
    sethasBeenOpened(true)
  }

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
          onOpenChange={setIsOpen}
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
