import clsx from 'clsx'
import { Link } from 'react-aria-components'
import { Tooltip, TooltipTrigger } from '../../tooltip'
import styles from '../Layout.module.css'
import { SidebarLinkProps } from '../Layout'
import * as React from 'react'

export const SidebarLink = ({
  title,
  href,
  active,
  icon: IconComponent,
  isCollapsed,
  setIsOpened,
}: SidebarLinkProps & {
  isCollapsed: boolean
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [showText, setShowText] = React.useState(false)

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (!isCollapsed) {
      timeoutId = setTimeout(() => {
        setShowText(true)
      }, 100)
    } else {
      setShowText(false)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [isCollapsed])

  if (isCollapsed)
    return (
      <TooltipTrigger>
        <Link
          href={href}
          aria-label={title}
          className={clsx(
            styles.listLink,
            styles.listLinkCollapsed,
            active && styles.active,
          )}
          onPressChange={() => setIsOpened(false)}
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
      className={clsx(styles.listLink, active && styles.active)}
      onPressChange={() => setIsOpened(false)}
    >
      <IconComponent size={20} />
      {showText && <span className={styles.linkText}>{title}</span>}
    </Link>
  )
}
