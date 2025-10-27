import clsx from 'clsx'
import { useContext } from 'react'
import { Button, SelectStateContext } from 'react-aria-components'
import { ChevronDown } from 'lucide-react'
import styles from './Select.module.css'
import { Size } from '../common/types'

interface SelectTriggerProps {
  size: Size
}

export const SelectTrigger = ({ size }: SelectTriggerProps) => {
  const state = useContext(SelectStateContext)

  return (
    <Button
      className={clsx(
        {
          [styles.medium]: size === 'medium',
        },
        styles.trigger,
      )}
      data-invalid={!!state?.displayValidation.isInvalid || undefined}
    >
      <span
        aria-hidden='true'
        style={{ display: 'flex' }}
      >
        <ChevronDown size={20} />
      </span>
    </Button>
  )
}
