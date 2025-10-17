import { useContext } from 'react'
import { AriaListBoxOptions } from 'react-aria'
import {
  type Selection,
  SelectState,
  SelectStateContext,
} from 'react-aria-components'
import { ListBox } from '../list-box'
import { RacSelectProps } from './RacSelect'
import { SelectionMode } from '../rac-select'

type SelectListBoxProps<
  T extends object,
  M extends SelectionMode = 'single',
> = Pick<RacSelectProps<T, M>, 'children' | 'items'> & AriaListBoxOptions<T>

export const SelectListBox = <
  T extends object,
  M extends SelectionMode = 'single',
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
      // TODO: interfere with onAction if disallowEmptySelection is true?
      onSelectionChange={handleSelectionChange}
    />
  )
}
