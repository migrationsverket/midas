'use client'

import {
  ReactNode,
  useContext,
  type ElementType,
  type ComponentProps,
} from 'react'
import {
  Focusable,
  Link,
  OverlayTriggerStateContext,
} from 'react-aria-components'
import { clsx, Tooltip, TooltipTrigger } from '@midas-ds/components'
import styles from './NavigationLink.module.css'
import { MobileMenuContext } from '../../header'
import { SidebarContext } from '../../sidebar'

export interface NavigationLinkComponentProps<C extends ElementType> {
  /** The icon to display. */
  children: ReactNode
  /** The visible label text and tooltip content. */
  title: string
  isActive?: boolean
  variant?: 'sidebar' | 'navbar'
  className?: string
  /** Replace base component with any Client Side Routing link instead.
   * @see {@link https://designsystem.migrationsverket.se/dev/client-side-routing/|Client side routing}
   */
  as?: C
}

export type NavigationLinkProps<C extends ElementType> =
  NavigationLinkComponentProps<C> &
    Omit<ComponentProps<C>, keyof NavigationLinkComponentProps<C>>

export const NavigationLink = <C extends ElementType = typeof Link>({
  as,
  children,
  className,
  isActive,
  title,
  'aria-label': ariaLabel,
  ...rest
}: NavigationLinkProps<C>) => {
  const mobileMenuContext = useContext(MobileMenuContext)
  const sidebarContext = useContext(SidebarContext)
  const isCollapsed = sidebarContext?.isCollapsed

  const ctx = useContext(OverlayTriggerStateContext)

  const Component = as || Link

  const toggle = () => {
    if (ctx?.isOpen) {
      ctx?.setOpen(false)
    }
  }

  return (
    <TooltipTrigger isDisabled={!isCollapsed}>
      <Focusable>
        <Component
          aria-current={isActive && 'page'}
          aria-label={ariaLabel || (isCollapsed ? title : undefined)}
          className={clsx(className, styles.navigationLink, {
            [styles.sidebar]: sidebarContext || mobileMenuContext,
            [styles.collapsed]: isCollapsed,
          })}
          data-active={isActive || undefined}
          {...(as
            ? {
                onClick: e => {
                  toggle()
                  rest.onClick?.(e)
                },
              }
            : {
                onPress: e => {
                  toggle()
                  rest.onPress?.(e)
                },
              })}
          {...rest}
        >
          {children}
          <span className={styles.title}>{title}</span>
        </Component>
      </Focusable>
      <Tooltip placement='right'>{title}</Tooltip>
    </TooltipTrigger>
  )
}
