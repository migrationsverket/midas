import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Layout.module.css'

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const Content = ({ className, children, ...rest }: DivProps) => (
  <div
    className={`${className ?? ''} ${styles.content}`}
    {...rest}
  >
    {children}
  </div>
)

export type LayoutProps = DivProps

export const Layout = Object.assign(
  ({ className, children, ...rest }: LayoutProps) => (
    <div
      className={`${className ?? ''} ${styles.layout}`}
      {...rest}
    >
      {children}
    </div>
  ),
  { Content },
)
