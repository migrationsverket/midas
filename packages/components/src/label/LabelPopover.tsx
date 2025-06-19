import React from 'react'
import { Popover, PopoverTrigger } from '../popover'
import { Button } from '../button'
import { Info } from 'lucide-react'
import styles from './Label.module.css'

export const LabelPopover: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <PopoverTrigger
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <Button
        variant='icon'
        size='medium'
        className={styles.labelPopoverTrigger}
      >
        <Info size={20} />
      </Button>
      <Popover>{children}</Popover>
    </PopoverTrigger>
  )
}
