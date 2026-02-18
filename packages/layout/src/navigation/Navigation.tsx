'use client'

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { clsx } from '@midas-ds/components'
import { ModalOverlayProps } from 'react-aria-components'
import {
  NavigationLink,
  NavigationSubMenu,
  Drawer,
  NavigationLinkProps,
} from './components'
import styles from './Navigation.module.css'
import { useControlledState } from '../utils/useControlledState'
import { useIsMobileDevice } from '../utils/useIsMobileDevice'

export interface NavigationProps
  extends
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    Pick<ModalOverlayProps, 'isOpen' | 'onOpenChange' | 'defaultOpen'> {
  children?: ReactNode
  id: string
}

export const Navigation = ({
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

  const isMobileDevice = useIsMobileDevice()

  return isMobileDevice ? (
    <Drawer
      id={id}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <NavigationInner {...rest} />
    </Drawer>
  ) : (
    <NavigationInner {...rest} />
  )
}

const NavigationInner = ({
  className,
  children,
  ...rest
}: Omit<NavigationProps, 'id'>) => (
  <nav
    className={clsx(className, styles.navigation)}
    {...rest}
  >
    <ul>{children}</ul>
  </nav>
)

Navigation.Link = NavigationLink
Navigation.SubMenu = NavigationSubMenu

export type { NavigationLinkProps }
