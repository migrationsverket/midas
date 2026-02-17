import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Navigation, NavigationLinkProps } from '@midas-ds/layout'

export const NavLink = ({
  href,
  ...props
}: NavigationLinkProps<typeof NextLink>) => {
  const pathname = usePathname()
  const active =
    href === '/' ? pathname === '/' : pathname.startsWith(href.toString())

  return (
    <Navigation.Link
      as={NextLink}
      href={href}
      isActive={active}
      {...props}
    />
  )
}
