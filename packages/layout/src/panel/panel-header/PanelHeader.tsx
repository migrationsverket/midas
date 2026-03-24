import { DetailedHTMLProps, HTMLAttributes } from 'react'
import clsx from 'clsx'
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
