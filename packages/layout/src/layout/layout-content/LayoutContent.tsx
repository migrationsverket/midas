import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { PanelRegion } from '../../panel'
import styles from './LayoutContent.module.css'

export type LayoutContentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const LayoutContent = ({
  className,
  children,
  ...rest
}: LayoutContentProps) => (
  <div
    className={`${className ?? ''} ${styles.layoutContent}`}
    {...rest}
  >
    {children}
    <PanelRegion />
  </div>
)
