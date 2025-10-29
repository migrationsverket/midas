import * as React from 'react'
import { Header as AriaHeader } from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './ListBox.module.css'

export type ListBoxHeaderProps = React.HTMLAttributes<HTMLElement> &
  React.RefAttributes<object>

export const ListBoxHeader = ({ className, ...rest }: ListBoxHeaderProps) => (
  <AriaHeader
    className={clsx(styles.listBoxSectionHeading, className)}
    {...rest}
  />
)
