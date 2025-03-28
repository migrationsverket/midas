import * as React from 'react'
import {
  InputProps,
  useContextProps,
  InputContext,
} from 'react-aria-components'
import styles from './CharacterCounter.module.css'

export const CharacterCounter = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    ;[props] = useContextProps(props, ref, InputContext)
    const { maxLength, value } = props
    const { length } = value?.toString() ?? ''
    const isMaxLengthDefined = maxLength !== undefined

    return (
      <span
        className={styles.characterCounter}
        data-exceeded={(isMaxLengthDefined && length > maxLength) || undefined}
      >
        {isMaxLengthDefined ? `${length} / ${maxLength}` : length}
      </span>
    )
  },
)
