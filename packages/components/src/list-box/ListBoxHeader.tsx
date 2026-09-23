import * as React from 'react'
import { Header as AriaHeader } from 'react-aria-components'
import { clsx } from '@midas-ds/utils'
import styles from './ListBox.module.css'

export type ListBoxHeaderProps = React.HTMLAttributes<HTMLElement> &
  React.RefAttributes<HTMLElement>

export const ListBoxHeader = ({ className, ...rest }: ListBoxHeaderProps) => (
  <AriaHeader
    className={clsx(styles.listBoxSectionHeading, className)}
    {...rest}
  />
)
