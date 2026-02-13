import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Header.module.css'
import { clsx } from '@midas-ds/components'

export type HeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

export const Header = ({ className, ...rest }: HeaderProps) => (
  <header
    className={clsx(className, styles.header)}
    {...rest}
  />
)
