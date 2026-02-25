'use client'

import { ReactNode, useContext, type ElementType } from 'react'
import { Focusable, Link } from 'react-aria-components'
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
  children: ReactNode
  isActive?: boolean
  variant?: 'sidebar' | 'navbar'
  icon: ReactNode
  textValue?: string
}

export type NavigationLinkProps<C extends React.ElementType> =
  NavigationLinkComponentProps<C> &
    Omit<React.ComponentProps<C>, keyof LinkComponentProps<C>>

export const NavigationLink = <C extends React.ElementType = typeof Link>({
  as,
  children,
  className,
  isActive,
  'aria-label': ariaLabel,
  icon,
  ...rest
}: NavigationLinkProps<C>) => {
  const { variant } = useContext(PanelContext)
  const mobileMenuContext = useContext(MobileMenuContext)
  const { isCollapsed } = useContext(CollapsePanelContext)

  const textValue =
    typeof children === 'string' ? children : (rest.textValue ?? '')

  if (!textValue && process.env.NODE_ENV !== 'production') {
    console.warn(
      'A `textValue` prop is required for <NavigationLink> elements with non-plain text children for accessibility.',
    )
  }

  const Component = as || Link

  return (
    <TooltipTrigger isDisabled={!isCollapsed}>
      <Focusable>
        <Component
          aria-current={isActive && 'page'}
          aria-label={ariaLabel || (isCollapsed ? textValue : undefined)}
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
          {...rest}
        >
          {icon}
          <span className={styles.title}>{children}</span>
        </Component>
      </Focusable>
      <Tooltip placement='right'>{children}</Tooltip>
    </TooltipTrigger>
  )
}
