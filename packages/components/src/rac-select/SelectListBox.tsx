import { useContext } from 'react'
import { AriaListBoxOptions } from 'react-aria'
import {
  type Selection,
  SelectState,
  SelectStateContext,
} from 'react-aria-components'
import { ListBox } from '../list-box'
import { RacSelectProps } from './RacSelect'

type SelectListBoxProps<
  T extends object,
  M extends 'single' | 'multiple' = 'single',
> = Pick<RacSelectProps<T, M>, 'children' | 'items'> & AriaListBoxOptions<T>

export const SelectListBox = <
  T extends object,
  M extends 'single' | 'multiple' = 'single',
>(
  props: SelectListBoxProps<T, M>,
) => {
  const state = useContext(SelectStateContext) as SelectState<T, M> | null

  const handleSelectionChange = (keys: Selection) => {
    state?.selectionManager.setSelectedKeys(keys)
  }

  return (
    <ListBox
      {...props}
      escapeKeyBehavior='none'
      selectionMode={state?.selectionManager.selectionMode}
      onSelectionChange={handleSelectionChange}
    />
  )
}
