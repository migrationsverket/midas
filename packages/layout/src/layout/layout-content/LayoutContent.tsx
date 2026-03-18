import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './LayoutContent.module.css'

export type LayoutContentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const LayoutContent = ({ className, ...rest }: LayoutContentProps) => (
  <div
    className={`${className ?? ''} ${styles.layoutContent}`}
    {...rest}
  />
)
