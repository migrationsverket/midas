import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { clsx } from '@midas-ds/components'
import styles from './Panel.module.css'

export interface PanelProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> {
  children?: ReactNode
}

export const Panel = ({ children, className, ...rest }: PanelProps) => (
  <aside
    className={clsx(className, styles.panel)}
    {...rest}
  >
    {children}
  </aside>
)
