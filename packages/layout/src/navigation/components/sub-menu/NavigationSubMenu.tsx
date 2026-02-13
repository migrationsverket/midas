import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { clsx } from '@midas-ds/components'
import { NavigationListItem } from '..'
import styles from './NavigationSubMenu.module.css'

export interface NavigationSubMenuProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> {
  children?: ReactNode
  title?: string
}

export const NavigationSubMenu = ({
  children,
  className,
  title,
  ...rest
}: NavigationSubMenuProps) => {
  return (
    <NavigationListItem
      hasSubMenu
      title={title}
    >
      <ul
        className={clsx(className, styles.navigationSubMenu)}
        {...rest}
      >
        {children}
      </ul>
    </NavigationListItem>
  )
}
