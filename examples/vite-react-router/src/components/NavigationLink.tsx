import {
  NavigationLink as MidasNavigationLink,
  type NavigationLinkComponentProps,
} from '@midas-ds/layout'
import type { ComponentProps } from 'react'
import { Link, useLocation } from 'react-router'

// TODO: Something wonky about this type in @midas-ds/layout
type NavigationLinkProps = NavigationLinkComponentProps<typeof Link> &
  Omit<
    ComponentProps<typeof Link>,
    keyof NavigationLinkComponentProps<typeof Link>
  >

export const NavigationLink = ({ to, ...props }: NavigationLinkProps) => {
  const { pathname } = useLocation()
  const active =
    to === '/' ? pathname === '/' : pathname.startsWith(to.toString())

  return (
    <MidasNavigationLink
      to={to}
      as={Link}
      isActive={active}
      {...props}
    />
  )
}
