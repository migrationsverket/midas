import clsx from 'clsx'
import { type DetailedHTMLProps, type HTMLAttributes } from 'react'
import styles from './HeaderActions.module.css'

export type HeaderActionsProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const HeaderActions = ({ className, ...rest }: HeaderActionsProps) => (
  <div
    className={clsx(className, styles.headerActions)}
    {...rest}
  />
)
