'use client'

import clsx from '../../utils/clsx'
import { Link } from 'react-aria-components'
import { Tooltip, TooltipTrigger } from '../../tooltip'
import styles from '../Layout.module.css'
import { SidebarLinkProps } from '../Layout'
import { useLayoutContext } from '../context/LayoutContext'
import { Badge, BadgeContainer } from '../../badge'

const isPathnameMatch = (href: string): boolean => {
  if (typeof window === 'undefined') {
    return false
  }

  return (
    window.location.pathname === href ||
    window.location.pathname.startsWith(href + '/')
  )
}

export const SidebarLink = ({
  title,
  href,
  icon: IconComponent,
  active,
  hasBadge,
}: SidebarLinkProps) => {
  const { isCollapsed, setIsOpened, clientSideHref } = useLayoutContext()

  const hrefWithBasePath = clientSideHref ? clientSideHref(href) : href

  const isActive =
    typeof active === 'boolean' ? active : isPathnameMatch(hrefWithBasePath)

  if (isCollapsed)
    return (
      <TooltipTrigger>
        <Link
          href={href}
          aria-label={title}
          className={clsx(
            styles.listLink,
            styles.listLinkCollapsed,
            isActive && styles.active,
          )}
          onPress={() => setIsOpened?.(false)}
        >
          <BadgeContainer>
            <IconComponent
              size={20}
              aria-label={title}
            />
            {hasBadge && <Badge />}
          </BadgeContainer>
        </Link>
        <Tooltip placement='right'>{title}</Tooltip>
      </TooltipTrigger>
    )

  return (
    <Link
      href={href}
      aria-label={title}
      className={clsx(styles.listLink, isActive && styles.active)}
      onPress={() => setIsOpened?.(false)}
    >
      <BadgeContainer>
        <IconComponent size={20} />
        {hasBadge && <Badge />}
      </BadgeContainer>
      {title}
    </Link>
  )
}
