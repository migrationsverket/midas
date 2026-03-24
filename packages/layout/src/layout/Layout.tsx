import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Layout.module.css'

export type LayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Layout = ({ className, ...rest }: LayoutProps) => {
  return (
    <div
      className={clsx(className, styles.layout)}
      {...rest}
    />
  )
}
