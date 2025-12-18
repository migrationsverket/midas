import clsx from 'clsx'
import { useContext } from 'react'
import { Button, SelectStateContext, SelectValue } from 'react-aria-components'
import { ChevronDown } from 'lucide-react'
import styles from './Select.module.css'
import { Size } from '../common/types'
import { MidasSelectProps } from './Select'
import { SelectionMode } from '.'

interface SelectTriggerProps<
  T extends object,
  M extends SelectionMode = 'single',
> extends Pick<MidasSelectProps<T, M>, 'isDisabled' | 'selectionMode'> {
  size: Size
}

export const SelectTrigger = <
  T extends object,
  M extends SelectionMode = 'single',
>({
  isDisabled,
  selectionMode,
  size,
}: SelectTriggerProps<T, M>) => {
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
      <SelectValue
        className={styles.selectValue}
        data-disabled={isDisabled || undefined}
      >
        {({ selectedText, defaultChildren }) => (
          <div className={styles.placeholder}>
            <span className={styles.truncate}>
              {selectionMode === 'multiple' && selectedText ? (
                <></>
              ) : (
                selectedText || defaultChildren
              )}
            </span>
          </div>
        )}
      </SelectValue>

      <span
        aria-hidden='true'
        style={{ display: 'flex' }}
      >
        <ChevronDown size={20} />
      </span>
    </Button>
  )
}
