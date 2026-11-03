import { Text, TextProps } from '../../text'
import clsx from '../../utils/clsx'
import styles from './ListBoxEmptyState.module.css'
import { ClearContexts } from '../../utils/ClearContexts'

export const ListBoxEmptyState = ({ className, ...rest }: TextProps) => (
  <ClearContexts>
    <Text
      className={clsx(className, styles.listBoxEmptyState)}
      {...rest}
    />
  </ClearContexts>
)
