import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { clsx } from '@midas-ds/components'
import styles from './PanelHeader.module.css'

export type PanelHeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const PanelHeader = ({ className, ...rest }: PanelHeaderProps) => (
  <div
    className={clsx(className, styles.panelHeader)}
    {...rest}
  />
)
