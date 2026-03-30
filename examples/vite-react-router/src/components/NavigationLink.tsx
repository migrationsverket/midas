import {
  NavigationLink as MidasNavigationLink,
  type NavigationLinkProps,
} from '@midas-ds/layout'
import { Link, useLocation } from 'react-router'

export const NavigationLink = ({
  to,
  ...props
}: NavigationLinkProps<typeof Link>) => {
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
