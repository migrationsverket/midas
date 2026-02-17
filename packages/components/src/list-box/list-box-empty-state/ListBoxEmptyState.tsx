import { Text, TextProps } from '../../text'
import clsx from '../../utils/clsx'
import styles from './ListBoxEmptyState.module.css'

export const ListBoxEmptyState = ({ className, ...rest }: TextProps) => (
  <Text
    className={clsx(className, styles.listBoxEmptyState)}
    {...rest}
  />
)
