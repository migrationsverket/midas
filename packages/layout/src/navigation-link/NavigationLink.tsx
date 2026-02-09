import { type ElementType } from 'react'
import { Link } from 'react-aria-components'
import { type LinkComponentProps } from '@midas-ds/components'

export interface NavigationLinkComponentProps<
  C extends ElementType,
> extends Pick<LinkComponentProps<C>, 'children' | 'className' | 'as'> {
  isActive?: boolean
}

export type NavigationLinkProps<C extends React.ElementType> =
  NavigationLinkComponentProps<C> &
    Omit<React.ComponentProps<C>, keyof LinkComponentProps<C>>

export const NavigationLink = <C extends React.ElementType = typeof Link>({
  as,
  className,
  isActive,
  ...rest
}: NavigationLinkProps<C>) => {
  const Component = as || Link

  return (
    <Component
      aria-current={isActive && 'page'}
      className={className}
      data-active={isActive || undefined}
      {...rest}
    />
  )
}
