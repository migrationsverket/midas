import {
  Separator as AriaSeparator,
  type SeparatorProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Menu.module.css'

export type { SeparatorProps }

export const Separator = ({ className, ...rest }: SeparatorProps) => (
  <AriaSeparator
    className={clsx(className, styles.separator)}
    {...rest}
  />
)
