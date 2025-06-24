import React from 'react'
import { Popover, PopoverTrigger } from '../popover'
import { Button } from '../button'
import { Info } from 'lucide-react'
import styles from './LabelWrapper.module.css'
import { LabelWrapperContext } from './LabelWrapper'

/** Display an info-icon with popover next to the label to further explain what the user should enter in the field */
export interface InfoPopoverProps {
  /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
  children: React.ReactNode
  /** An aria-label for the info icon button trigger */
  'aria-label'?: string
}

export const InfoPopover: React.FC<InfoPopoverProps> = ({
  children,
  'aria-label': ariaLabel = 'Mer information',
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const ctx = React.useContext(LabelWrapperContext)

  return (
    <PopoverTrigger
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <Button
        variant='icon'
        size='medium'
        className={styles.labelPopoverTrigger}
        aria-label={ariaLabel}
        id={ctx?.popoverId}
      >
        <Info size={20} />
      </Button>
      <Popover>{children}</Popover>
    </PopoverTrigger>
  )
}
