import clsx from '../utils/clsx'
import { useIsTruncated } from './useIsTruncated'
import styles from './TruncatedText.module.css'
import { Focusable } from 'react-aria-components'
import { Tooltip, TooltipTrigger } from '../tooltip'
import { Text, TextProps } from '../text'

export interface TruncatedTextProps extends Omit<TextProps, 'elementType'> {
  className?: string
}

export const TruncatedText = ({
  className,
  children,
  ...rest
}: TruncatedTextProps) => {
  const { ref, isTruncated } = useIsTruncated()

  return (
    <TooltipTrigger isDisabled={!isTruncated}>
      <Focusable>
        <div
          role='button'
          tabIndex={isTruncated ? undefined : -1}
          className={clsx(className, styles.text, {
            [styles.truncated]: isTruncated,
          })}
          ref={ref}
        >
          <Text {...rest}>{children}</Text>
        </div>
      </Focusable>
      <Tooltip
        style={{ maxWidth: 'none' }}
        placement='bottom'
      >
        {children}
      </Tooltip>
    </TooltipTrigger>
  )
}
