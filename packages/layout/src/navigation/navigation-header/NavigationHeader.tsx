import { useContext } from 'react'
import { clsx, Text, TextProps } from '@midas-ds/components'
import { CollapsePanelContext } from '../../panel'
import styles from './NavigationHeader.module.css'

export type NavigationHeaderProps = TextProps

export const NavigationHeader = ({
  className,
  ...rest
}: NavigationHeaderProps) => {
  const { isCollapsed } = useContext(CollapsePanelContext)

  return (
    <Text
      className={clsx(className, styles.navigationHeader, {
        [styles.collapsed]: isCollapsed,
      })}
      {...rest}
    />
  )
}
