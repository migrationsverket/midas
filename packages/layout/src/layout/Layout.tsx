import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Layout.module.css'
import { SkipToContent } from './skip-to-content'

export type LayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Layout = ({ children, className, ...rest }: LayoutProps) => {
  return (
    <div
      className={clsx(className, styles.layout)}
      {...rest}
    >
      <SkipToContent />
      {children}
    </div>
  )
}
