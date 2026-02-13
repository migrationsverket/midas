import { ReactNode, useContext, type ElementType } from 'react'
import { Link } from 'react-aria-components'
import {
  clsx,
  Tooltip,
  TooltipTrigger,
  type LinkComponentProps,
} from '@midas-ds/components'
import { NavigationListItem } from '..'
import { PanelContext } from '../../../panel'
import styles from './NavigationLink.module.css'

export interface NavigationLinkComponentProps<
  C extends ElementType,
> extends Pick<LinkComponentProps<C>, 'className' | 'as'> {
  children: ReactNode
  isActive?: boolean
  title: string
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
  variant = 'sidebar',
  'aria-label': ariaLabel,
  ...rest
}: NavigationLinkProps<C>) => {
  const { isCollapsed } = useContext(PanelContext)

  const Component = as || Link

  return (
    <NavigationListItem>
      <TooltipTrigger isDisabled={!isCollapsed}>
        <Component
          aria-current={isActive && 'page'}
          aria-label={ariaLabel || (isCollapsed ? title : undefined)}
          className={clsx(
            className,
            styles.navigationLink,
            variant && styles[variant],
            {
              [styles.collapsed]: isCollapsed,
            },
          )}
          data-active={isActive || undefined}
          {...rest}
        >
          {children}
          <span className={styles.title}>{title}</span>
        </Component>
        <Tooltip placement='right'>{title}</Tooltip>
      </TooltipTrigger>
    </NavigationListItem>
  )
}
