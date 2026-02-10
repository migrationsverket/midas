import { type ElementType } from 'react'
import { Link } from 'react-aria-components'
import { clsx, type LinkComponentProps } from '@midas-ds/components'
import styles from './NavigationLink.module.css'
export interface NavigationLinkComponentProps<
  C extends ElementType,
> extends Pick<LinkComponentProps<C>, 'children' | 'className' | 'as'> {
  variant?: 'sidebar' | 'navbar'
  isActive?: boolean
}

export type NavigationLinkProps<C extends React.ElementType> =
  NavigationLinkComponentProps<C> &
    Omit<React.ComponentProps<C>, keyof LinkComponentProps<C>>

export const NavigationLink = <C extends React.ElementType = typeof Link>({
  as,
  className,
  isActive,
  variant = 'sidebar',
  ...rest
}: NavigationLinkProps<C>) => {
  const Component = as || Link

  return (
    <Component
      aria-current={isActive && 'page'}
      className={clsx(className, styles.navigationLink, {
        [styles.sidebar]: variant === 'sidebar',
        [styles.navbar]: variant === 'navbar',
      })}
      data-active={isActive || undefined}
      {...rest}
    />
  )
}
