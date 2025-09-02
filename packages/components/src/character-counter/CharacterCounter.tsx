import * as React from 'react'
import {
  InputProps,
  useContextProps,
  InputContext,
} from 'react-aria-components'
import styles from './CharacterCounter.module.css'

export interface CharacterCounterProps extends InputProps {
  isLonely?: boolean
  ref?: React.RefObject<HTMLInputElement | null>
}

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  ref,
  ...props
}) => {
  ;[props] = useContextProps(props, ref, InputContext)
  const { maxLength, value, isLonely } = props
  const { length } = value?.toString() ?? ''
  const isMaxLengthDefined = maxLength !== undefined

  return (
    <span
      className={styles.characterCounter}
      data-exceeded={(isMaxLengthDefined && length > maxLength) || undefined}
      data-lonely={isLonely || undefined}
    >
      {isMaxLengthDefined ? `${length} / ${maxLength}` : length}
    </span>
  )
}
