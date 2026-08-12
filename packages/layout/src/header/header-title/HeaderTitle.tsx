import clsx from 'clsx'
import { type HTMLAttributes } from 'react'
import styles from './HeaderTitle.module.css'

export type HeaderTitleProps = HTMLAttributes<HTMLSpanElement>

export const HeaderTitle = ({ className, ...rest }: HeaderTitleProps) => (
  <span
    className={clsx(styles.headerTitle, className)}
    {...rest}
  />
)
