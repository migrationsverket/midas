'use client'

import clsx from '../../utils/clsx'
import { Link } from 'react-aria-components'
import { Tooltip, TooltipTrigger } from '../../tooltip'
import styles from '../Layout.module.css'
import { SidebarLinkProps } from '../Layout'
import * as React from 'react'
import { useLayoutContext } from '../context/LayoutContext'
import { Badge, BadgeContainer } from '../../badge'

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  title,
  href,
  icon: IconComponent,
  active,
  hasBadge,
}) => {
  const { isCollapsed, setIsOpened, clientSideHref } = useLayoutContext()

  const hrefWithBasePath = clientSideHref ? clientSideHref(href) : href

  const [isActive, setIsActive] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsActive(
        active ?? window.location.pathname.startsWith(hrefWithBasePath),
      )
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
