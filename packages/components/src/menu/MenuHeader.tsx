import type * as React from 'react'
import {
  Header as AriaHeader,
  type HeaderProps as AriaHeaderProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Menu.module.css'

export type MenuHeaderProps = AriaHeaderProps & React.RefAttributes<HTMLElement>

export const MenuHeader = ({ className, ...rest }: MenuHeaderProps) => (
  <AriaHeader
    className={clsx(className, styles.menuSectionHeader)}
    {...rest}
  />
)
