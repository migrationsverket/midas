'use client'

import { ReactNode, useContext, type ElementType } from 'react'
import {
  Focusable,
  Link,
  OverlayTriggerStateContext,
} from 'react-aria-components'
import {
  clsx,
  Tooltip,
  TooltipTrigger,
  type LinkComponentProps,
} from '@midas-ds/components'
import { CollapsePanelContext, PanelContext } from '../../../panel'
import styles from './NavigationLink.module.css'
import { MobileMenuContext } from '../../../header'

export interface NavigationLinkComponentProps<
  C extends ElementType,
> extends Pick<LinkComponentProps<C>, 'className' | 'as'> {
  /** The icon to display. */
  children: ReactNode
  /** The visible label text and tooltip content. */
  title: string
  isActive?: boolean
  variant?: 'sidebar' | 'navbar'
}

export type NavigationLinkProps<C extends React.ElementType> =
  NavigationLinkComponentProps<C> &
    Omit<React.ComponentProps<C>, keyof LinkComponentProps<C>>

export const NavigationLink = <C extends React.ElementType = typeof Link>({
  as,
  children,
  className,
  isActive,
  title,
  'aria-label': ariaLabel,
  ...rest
}: NavigationLinkProps<C>) => {
  const { variant } = useContext(PanelContext)
  const mobileMenuContext = useContext(MobileMenuContext)
  const { isCollapsed } = useContext(CollapsePanelContext)

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
          className={clsx(
            className,
            styles.navigationLink,
            variant && styles[variant],
            mobileMenuContext && styles.collapse,
            {
              [styles.collapsed]: isCollapsed,
            },
          )}
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
