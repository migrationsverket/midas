'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { NavigationLink, NavigationLinkProps } from '@midas-ds/layout'

export const NavLink = ({
  href,
  ...props
}: NavigationLinkProps<typeof NextLink>) => {
  const pathname = usePathname()
  const active =
    href === '/' ? pathname === '/' : pathname.startsWith(href.toString())

  return (
    <NavigationLink
      as={NextLink}
      href={href}
      isActive={active}
      {...props}
    />
  )
}
