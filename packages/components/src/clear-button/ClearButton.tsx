'use client'

import * as React from 'react'
import { Button } from '../button'
import { X } from 'lucide-react'
import { Size } from '../common/types'

export interface ClearButtonProps {
  /** Handler called when the clear button is pressed */
  onPress: () => void
  /** Component size */
  size?: Size
  /** Whether the button is disabled */
  isDisabled?: boolean
  /** Accessible label for screen readers */
  'aria-label': string
  /** Additional CSS class for positioning/styling */
  className?: string
  /** Allow spreading additional props for react-aria integration */
  [key: string]: any
}

export const ClearButton: React.FC<ClearButtonProps> = ({
  onPress,
  size = 'large',
  isDisabled = false,
  'aria-label': ariaLabel,
  className,
  ...restProps
}) => {
  return (
    <Button
      variant='icon'
      size={size}
      className={className}
      onPress={onPress}
      isDisabled={isDisabled}
      aria-label={ariaLabel}
      excludeFromTabOrder={true}
      preventFocusOnPress={true}
      {...restProps}
    >
      <X size={20} aria-hidden />
    </Button>
  )
}
