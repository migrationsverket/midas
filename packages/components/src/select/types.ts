import type { MenuTriggerState } from '@react-stately/menu'
import type { FormValidationState } from '@react-stately/form'
import type { OverlayTriggerProps } from '@react-types/overlays'
import type { ListState } from '@react-stately/list'
import type {
  AsyncLoadable,
  CollectionBase,
  FocusableProps,
  InputBase,
  LabelableProps,
  MultipleSelection,
  TextInputBase,
  Validation,
  Key,
  Node,
  CollectionChildren,
} from '@react-types/shared'
import type { HTMLAttributes } from 'react'
import type { AriaListBoxOptions } from 'react-aria'
import type { AriaButtonProps } from '@react-types/button'
import type { AriaSelectProps } from '@react-types/select'
import type { Size } from '../common/types'
import type {
  ListBoxItemElement,
  ListBoxOption,
  ListBoxSectionElement,
} from '../list-box/'

/**
 * Props used for setting up the list state
 */
export interface MultiSelectListProps<T extends ListBoxOption>
  extends CollectionBase<T>,
    MultipleSelection {}

/**
 * The state of the select list
 */
export interface MultiSelectListState<T extends ListBoxOption>
  extends ListState<T> {
  /**
   * The keys for the currently selected items.
   */
  selectedKeys: Set<Key>
  /**
   * Sets the selected keys.
   */
  setSelectedKeys(keys: Iterable<Key>): void
  /**
   * The value of the currently selected items.
   */
  selectedItems: Node<T>[] | null
  /**
   * The type of selection.
   */
  selectionMode: MultiSelectListProps<T>['selectionMode']
}

/**
 * Props used for setting up the select component state
 */
export interface MultiSelectStateProps<T extends ListBoxOption>
  extends MultiSelectListProps<T>,
    AsyncLoadable,
    FocusableProps,
    LabelableProps,
    Omit<InputBase, 'isReadOnly'>,
    OverlayTriggerProps,
    TextInputBase,
    Validation {
  /**
   * Whether the menu should automatically flip direction when space is limited.
   * @default true
   */
  shouldFlip?: boolean
}

/**
 * The state of the select component
 */
export interface MultiSelectState<T extends ListBoxOption>
  extends MultiSelectListState<T>,
    MenuTriggerState,
    FormValidationState {
  /**
   * Whether the select is currently focused.
   */
  isFocused: boolean
  /**
   * Sets whether the select is focused.
   */
  setFocused(isFocused: boolean): void
}

/**
 * Props for setting up the select component parts
 */
export interface MultiSelectProps<T extends ListBoxOption>
  extends Omit<AriaSelectProps<T>, 'onSelectionChange'> {
  /**
   * Wheter to allow an empty selection or not
   */
  disallowEmptySelection?: boolean
  onSelectionChange?: MultiSelectStateProps<T>['onSelectionChange']
}

/**
 * DOM attributes for rendering the parts of the Select component
 */
export interface MultiSelectDOMProps<T extends ListBoxOption> {
  /**
   * Props for the label element.
   */
  labelProps: HTMLAttributes<HTMLElement>
  /**
   * Props for the popup trigger element.
   */
  triggerProps: AriaButtonProps
  /**
   * Props for the element representing the selected value.
   */
  valueProps: HTMLAttributes<HTMLElement>
  /**
   * Props for the popup.
   */
  menuProps: AriaListBoxOptions<T>
}

export type SelectionMode = 'single' | 'multiple'

export interface SelectProps extends MultiSelectStateProps<ListBoxOption> {
  /**
   * Whether the element should receive focus on render.
   */
  autoFocus?: boolean
  children: CollectionChildren<ListBoxOption>
  /**
   * Sets the CSS [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.
   */
  className?: string
  /**
   * Sets the default open state of the field (uncontrolled).
   */
  defaultOpen?: boolean
  excludeFromTabOrder?: boolean
  items: ListBoxOption[]
  /**
   * Whether the field can be emptied.
   *  @default true
   */
  isClearable?: boolean
  /**
   * Whether the field is disabled.
   */
  isDisabled?: boolean
  /**
   * Whether to show a button to select all items.
   */
  isSelectableAll?: boolean
  /**
   * Sets the open state of the field (controlled).
   */
  isOpen?: boolean
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
   * The type of selection that is allowed in the collection.
   * @default 'single'
   */
  selectionMode?: SelectionMode
  /**
   * The selection is valid or not
   */
  isInvalid?: boolean
  /**
   * Error message to be displayed in case of invalid state
   */
  errorMessage?: string
  /**
   * Whether the field is required.
   */
  isRequired?: boolean
  /**
   * Name of the field, for uncontrolled use
   */
  name?: string
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

export type SelectContainerProps = Omit<SelectProps, 'children' | 'items'> & {
  /** Item objects in the collection. */
  options: ListBoxOption[]
}

/**
 * @deprecated since v10.1.0 please use `ListBoxOption` intead
 */
export type Option = ListBoxOption

/**
 * @deprecated since v10.1.0 please use `ListBoxItemElement` intead
 */
export type OptionItem = ListBoxItemElement

/**
 * @deprecated since v10.1.0 please use `ListBoxSectionElement` intead
 */
export type OptionSection = ListBoxSectionElement
