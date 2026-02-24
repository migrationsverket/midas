import { useContext, DetailedHTMLProps, HTMLAttributes } from 'react'
import { clsx } from '@midas-ds/components'
import { PanelContext } from '../../../panel'
import styles from './NavigationSubMenu.module.css'

export type NavigationSubMenuProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>

export const NavigationSubMenu = ({
  className,
  ...rest
}: NavigationSubMenuProps) => {
  const { isCollapsed } = useContext(PanelContext)

  return (
    <ul
      className={clsx(className, styles.navigationSubMenu, {
        [styles.collapsed]: isCollapsed,
      })}
      {...rest}
    />
  )
}
