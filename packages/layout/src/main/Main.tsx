import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Main.module.css'

export type MainProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

export const Main = ({ className, ...rest }: MainProps) => (
  <main
    className={clsx(className, styles.main)}
    {...rest}
  />
)
