import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Layout.module.css'

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type LayoutProps = DivProps
export type LayoutContentProps = DivProps

export const LayoutContent = ({ className, children, ...rest }: DivProps) => (
  <div
    className={`${className ?? ''} ${styles.content}`}
    {...rest}
  >
    {children}
  </div>
)

export const Layout = ({ className, children, ...rest }: LayoutProps) => (
  <div
    className={`${className ?? ''} ${styles.layout}`}
    {...rest}
  >
    {children}
  </div>
)
