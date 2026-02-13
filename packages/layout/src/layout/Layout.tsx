import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { clsx } from '@midas-ds/components'
import styles from './Layout.module.css'

export type LayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  dismissPanel?: ReactNode
  header?: ReactNode
  sidebar?: ReactNode
  navbar?: ReactNode
}

export const Layout = ({
  className,
  children,
  dismissPanel,
  sidebar,
  header,
  navbar,
  ...rest
}: LayoutProps) => (
  <div
    className={clsx(className, styles.layout)}
    {...rest}
  >
    {header}
    <div className={styles.restContainer}>
      <div className={styles.mainContainer}>
        {sidebar}
        {children}
      </div>
      {navbar}
      {dismissPanel}
    </div>
  </div>
)
