'use client'

import clsx from 'clsx'
import { Link } from 'react-aria-components'
import { Tooltip, TooltipTrigger } from '../../tooltip'
import styles from '../Layout.module.css'
import { SidebarLinkProps } from '../Layout'
import * as React from 'react'
import { useLayoutContext } from '../context/LayoutContext'

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  title,
  href,
  icon: IconComponent,
  active,
}) => {
  const { isCollapsed, setIsOpened } = useLayoutContext()
  const [isActive, setIsActive] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsActive(active ?? window.location.pathname === href)
    }
  }, [active, href])

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
          <IconComponent
            size={20}
            aria-label={title}
          />
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
      <IconComponent size={20} />
      {title}
    </Link>
  )
}
