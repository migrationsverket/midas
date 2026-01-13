import { forwardRef } from 'react'
import {
  InputProps,
  useContextProps,
  InputContext,
} from 'react-aria-components'
import styles from './CharacterCounter.module.css'

export interface CharacterCounterProps extends InputProps {
  isLonely?: boolean
}

export const CharacterCounter = forwardRef<
  HTMLInputElement,
  CharacterCounterProps
>((props, ref) => {
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
})
CharacterCounter.displayName = 'CharacterCounter'
