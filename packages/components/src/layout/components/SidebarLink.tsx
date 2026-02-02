'use client'

import { useState, useEffect } from 'react'
import clsx from '../../utils/clsx'
import { Link } from 'react-aria-components'
import { Tooltip, TooltipTrigger } from '../../tooltip'
import styles from '../Layout.module.css'
import { SidebarLinkProps } from '../Layout'
import { useLayoutContext } from '../context/LayoutContext'
import { Badge, BadgeContainer } from '../../badge'

export const SidebarLink = ({
  title,
  href,
  icon: IconComponent,
  active,
  hasBadge,
}: SidebarLinkProps) => {
  const { isCollapsed, setIsOpened, clientSideHref } = useLayoutContext()

  const hrefWithBasePath = clientSideHref ? clientSideHref(href) : href

  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMatch =
        window.location.pathname === hrefWithBasePath ||
        window.location.pathname.startsWith(hrefWithBasePath + '/')
      // eslint-disable-next-line
      setIsActive(active ?? isMatch)
    }
  }, [active, hrefWithBasePath])

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
