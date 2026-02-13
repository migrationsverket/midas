import { DetailedHTMLProps, HTMLAttributes, ReactNode, useContext } from 'react'
import { clsx, Text } from '@midas-ds/components'
import { PanelContext } from '../../../panel'
import styles from './NavigationListItem.module.css'

export interface NavigationListItemProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> {
  children?: ReactNode
  hasSubMenu?: boolean
  title?: string
}

export const NavigationListItem = ({
  children,
  className,
  hasSubMenu,
  title,
  ...rest
}: NavigationListItemProps) => {
  const { isCollapsed } = useContext(PanelContext)

  return (
    <li
      className={clsx(className, styles.navigationListItem, {
        [styles.hasSubmenu]: hasSubMenu,
        [styles.collapsed]: isCollapsed,
      })}
      {...rest}
    >
      {title && !isCollapsed && (
        <Text className={styles.sectionTitle}>{title}</Text>
      )}
      {children}
    </li>
  )
}
