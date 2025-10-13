import type { CollectionChildren } from '@react-types/shared'
import type { AriaSelectOptions } from 'react-aria'
import type { SelectionMode } from '@react-types/select'
import type { Size } from '../common/types'
import type { ListBoxOption } from '../list-box/'

export type { SelectionMode }

export interface SelectProps<
  T extends ListBoxOption,
  M extends SelectionMode = 'single',
> extends AriaSelectOptions<T, M> {
  children: CollectionChildren<T>
  /**
   * Sets the CSS [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.
   */
  className?: string
  /**
   * Whether the field can be emptied.
   *  @default true
   */
  isClearable?: boolean
  /**
   * Whether to show a button to select all items.
   */
  isSelectableAll?: boolean
  /**
   * The content to display as the label.
   */
  label: string
  /**
   * Optional description
   */
  description?: string
  /**
   * Placeholder value
   */
  placeholder?: string
  /**
   * Show selected items as tags below select
   */
  showTags?: boolean
  /**
   * Error message to be displayed in case of invalid state
   */
  errorMessage?: string
  /**
   * The position of the error message
   * @default "top"
   */
  errorPosition?: 'top' | 'bottom'
  /** Component size (large: height 48px, medium: height 40px)
   *  @default 'large'
   */
  size?: Size
}

export type SelectContainerProps<
  T extends ListBoxOption,
  M extends SelectionMode = 'single',
> = Omit<SelectProps<T, M>, 'children' | 'items'> & {
  /** Item objects in the collection. */
  options: T[]
}
