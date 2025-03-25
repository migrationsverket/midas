import clsx from 'clsx'
import * as React from 'react'
import {
  InputProps,
  useContextProps,
  InputContext,
} from 'react-aria-components'
import styles from './CharacterCounter.module.css'

export const CharacterCounter = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    ;[props, ref] = useContextProps(props, ref, InputContext)
    const { maxLength, value } = props
    const stringValue = value?.toString() ?? ''

    if (maxLength !== undefined) {
      return (
        <span
          className={clsx(
            styles.count,
            stringValue.length > maxLength && styles.countExceeded,
          )}
        >
          {stringValue.length} / {maxLength}
        </span>
      )
    }

    return <span className={styles.count}>{stringValue.length}</span>
  },
)
