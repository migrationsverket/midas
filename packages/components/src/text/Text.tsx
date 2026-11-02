import { forwardRef } from 'react'
import clsx from '../utils/clsx'
import {
  Text as AriaText,
  TextProps as AriaTextProps,
  useContextProps,
} from 'react-aria-components'
import { TextContext } from './TextContext'
import styles from './Text.module.css'

export type TextSize = 'small'

export interface TextProps extends AriaTextProps {
  /**
   * The size of the text. When omitted, uses the default size.
   * The style type (body vs description) is derived from the slot prop.
   */
  size?: TextSize
  /**
   * Use the external/expressive look
   */
  isExpressive?: boolean
}

const DEFAULT_ELEMENT = 'span'

export const Text = forwardRef<HTMLElement, TextProps>((props, ref) => {
  const [
    {
      className,
      size,
      isExpressive = false,
      elementType = DEFAULT_ELEMENT,
      ...rest
    },
    mergedRef,
  ] = useContextProps(props, ref, TextContext)

  const getClassName = () => {
    const isDescription = rest.slot === 'description'
    if (isDescription) {
      return size === 'small'
        ? styles['description-small']
        : styles['description']
    }
    return size === 'small' ? styles['body-small'] : styles['body']
  }

  const textProps: TextProps = {
    className: clsx(
      getClassName(),
      {
        [styles.bold]: ['b', 'strong'].includes(elementType),
        [styles.italic]: ['i', 'em'].includes(elementType),
      },
      className,
    ),
    elementType: elementType || DEFAULT_ELEMENT,
    ...(isExpressive && { 'data-expressive': true }),
    ...rest,
  }

  return (
    <AriaText
      ref={mergedRef}
      {...textProps}
    />
  )
})

Text.displayName = 'Text'
