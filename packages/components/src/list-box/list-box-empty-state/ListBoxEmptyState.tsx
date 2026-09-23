import { Text, TextProps } from '../../text'
import { clsx } from '@midas-ds/utils'
import styles from './ListBoxEmptyState.module.css'

export const ListBoxEmptyState = ({ className, ...rest }: TextProps) => (
  <Text
    className={clsx(className, styles.listBoxEmptyState)}
    {...rest}
  />
)
