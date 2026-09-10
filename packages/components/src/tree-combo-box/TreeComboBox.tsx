'use client'
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEventHandler,
  type PointerEventHandler,
  type ReactNode,
} from 'react'
import { useControlledState } from '@react-stately/utils'
import {
  Button,
  Group,
  Input,
  type Key,
  type TreeData,
} from 'react-aria-components'
import { ChevronDown } from 'lucide-react'
import clsx from '../utils/clsx'
import { InfoPopoverProps, Label } from '../label'
import { LabelWrapper } from '../label/LabelWrapper'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { Size } from '../common/types'
import { Popover } from '../popover'
import { Checkbox } from '../checkbox'
import { Tree, TreeItem, useTreeSelection, type CheckedState } from '../tree'
import { ListBoxEmptyState } from '../list-box/list-box-empty-state/ListBoxEmptyState'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import { useFilteredTree } from './useFilteredTree'
import { TreeComboBoxValue } from './TreeComboBoxValue'
import styles from './TreeComboBox.module.css'

type TreeNode<T extends object> = NonNullable<
  ReturnType<TreeData<T>['getItem']>
>

export interface TreeComboBoxItemState {
  checkedState: CheckedState
  isDisabled: boolean
  toggle: () => void
}

export interface TreeComboBoxProps<T extends object> {
  /** The hierarchical data, from `useTreeData` — the caller owns this instance. */
  tree: TreeData<T>
  /** Searchable label for an item, also used as its `TreeItem` textValue. */
  getTextValue: (item: T) => string
  /**
   * This node's own display. Defaults to a `Checkbox` reflecting
   * `checkedState` with `getTextValue(item)` as its label.
   */
  renderItem?: (item: T, state: TreeComboBoxItemState) => ReactNode
  /** @default (node) => !node.children || node.children.length === 0 */
  isLeaf?: (node: TreeNode<T>) => boolean

  checkedKeys?: Iterable<Key>
  defaultCheckedKeys?: Iterable<Key>
  onCheckedChange?: (keys: Set<Key>) => void
  disabledKeys?: Iterable<Key>

  expandedKeys?: Iterable<Key>
  defaultExpandedKeys?: Iterable<Key>
  onExpandedChange?: (keys: Set<Key>) => void

  isOpen?: boolean
  defaultOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void

  inputValue?: string
  defaultInputValue?: string
  onInputChange?: (value: string) => void

  label?: string
  description?: string
  /**
   * Plain string only — unlike `ComboBox`/`Select`, this component has no
   * underlying `AriaComboBox`/`AriaSelect` providing real form-validation
   * context, so `isInvalid`/`errorMessage` are purely presentational: the
   * consumer decides when to set them (e.g. after a failed submit).
   */
  errorMessage?: string
  errorPosition?: 'top' | 'bottom'
  placeholder?: string
  isRequired?: boolean
  isInvalid?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  /** @default 'large' */
  size?: Size
  popover?: InfoPopoverProps
  className?: string
  'aria-label'?: string
}

export function TreeComboBox<T extends object>({
  tree,
  getTextValue,
  renderItem,
  isLeaf,
  checkedKeys: checkedKeysProp,
  defaultCheckedKeys,
  onCheckedChange,
  disabledKeys,
  expandedKeys: expandedKeysProp,
  defaultExpandedKeys,
  onExpandedChange,
  isOpen: isOpenProp,
  defaultOpen,
  onOpenChange,
  inputValue: inputValueProp,
  defaultInputValue,
  onInputChange,
  label,
  description,
  errorMessage,
  errorPosition = 'top',
  placeholder,
  isRequired,
  isInvalid,
  isDisabled,
  isReadOnly,
  size = 'large',
  popover,
  className,
  'aria-label': ariaLabel,
}: TreeComboBoxProps<T>) {
  const strings = useLocalizedStringFormatter(messages)

  const fieldRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)

  const [inputValue, setInputValue] = useControlledState(
    inputValueProp,
    defaultInputValue ?? '',
    onInputChange,
  )

  const [isOpenState, setIsOpenState] = useControlledState(
    isOpenProp,
    defaultOpen ?? false,
    onOpenChange,
  )

  const setIsOpen = (open: boolean) => {
    setIsOpenState(open)
    if (!open) {
      // Escape (focus still on a tree row when the popover dismisses) and an
      // explicit chevron close both leave focus somewhere inside the field
      // or popover — return it to the Input. An outside click that moves
      // focus to some other element on the page is left alone: by the time
      // this runs, document.activeElement already reflects that click.
      const activeElement = document.activeElement
      if (
        popoverRef.current?.contains(activeElement) ||
        fieldRef.current?.contains(activeElement)
      ) {
        inputRef.current?.focus()
      }
    }
  }

  // The popover is rendered isNonModal (see below — required so opening it
  // doesn't steal DOM focus away from the Input, which would otherwise cut
  // typing off after the first keystroke). That also opts out of RAC's
  // built-in "close on an outside press" handling (only its unconditional
  // close-on-blur stays wired), so a click on a non-focusable area outside
  // the field wouldn't otherwise close it — reimplement that one piece.
  useEffect(() => {
    if (!isOpenState) return

    const handlePointerDownOutside = (event: PointerEvent) => {
      const target = event.target as Node
      if (fieldRef.current?.contains(target)) return
      if (popoverRef.current?.contains(target)) return
      setIsOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDownOutside)
    return () =>
      document.removeEventListener('pointerdown', handlePointerDownOutside)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenState])

  const [checkedKeys, setCheckedKeys] = useControlledState<Set<Key>>(
    checkedKeysProp ? new Set(checkedKeysProp) : undefined,
    new Set(defaultCheckedKeys ?? []),
    onCheckedChange,
  )

  const disabledKeySet = useMemo(
    () => new Set(disabledKeys ?? []),
    [disabledKeys],
  )

  const { getCheckedState, toggleKey } = useTreeSelection({
    tree,
    checkedKeys,
    onCheckedChange: setCheckedKeys,
    disabledKeys: disabledKeySet,
    isLeaf,
  })

  const [expandedKeys, setExpandedKeys] = useControlledState<Set<Key>>(
    expandedKeysProp ? new Set(expandedKeysProp) : undefined,
    new Set(defaultExpandedKeys ?? []),
    onExpandedChange,
  )

  // Branches the user explicitly collapsed while they were only open because
  // the current filter force-expanded them (see effectiveExpandedKeys below)
  // — without this, forcedExpandedKeys would immediately re-open them on the
  // very next render, making a filter-forced branch impossible to collapse.
  const [manuallyCollapsedWhileFiltering, setManuallyCollapsedWhileFiltering] =
    useState<Set<Key>>(new Set())

  const { visibleKeys, forcedExpandedKeys } = useFilteredTree(
    tree,
    inputValue,
    getTextValue,
  )

  const effectiveExpandedKeys = useMemo(() => {
    if (!visibleKeys) return expandedKeys
    const next = new Set(expandedKeys)
    for (const key of forcedExpandedKeys) {
      if (!manuallyCollapsedWhileFiltering.has(key)) next.add(key)
    }
    return next
  }, [
    expandedKeys,
    forcedExpandedKeys,
    visibleKeys,
    manuallyCollapsedWhileFiltering,
  ])

  const handleTreeExpandedChange = (reported: Set<Key>) => {
    if (!visibleKeys) {
      setExpandedKeys(reported)
      return
    }

    const nextReal = new Set(expandedKeys)
    const nextCollapsed = new Set(manuallyCollapsedWhileFiltering)

    for (const key of effectiveExpandedKeys) {
      if (!reported.has(key)) {
        nextReal.delete(key)
        if (forcedExpandedKeys.has(key)) nextCollapsed.add(key)
      }
    }
    for (const key of reported) {
      if (!effectiveExpandedKeys.has(key)) {
        nextReal.add(key)
        nextCollapsed.delete(key)
      }
    }

    setExpandedKeys(nextReal)
    setManuallyCollapsedWhileFiltering(nextCollapsed)
  }

  const handleInputValueChange = (value: string) => {
    setInputValue(value)
    if (!value) setManuallyCollapsedWhileFiltering(new Set())
    if (value && !isOpenState) setIsOpen(true)
  }

  const handleInputKeyDown: KeyboardEventHandler<HTMLInputElement> = event => {
    // The popover's own Escape handling only fires for keydowns that
    // originate inside its DOM subtree — a keydown on the Input (outside
    // that subtree, in the trigger) never reaches it, since Input and
    // Popover are siblings, not ancestor/descendant. Handle it here instead.
    if (event.key === 'Escape' && isOpenState) {
      event.preventDefault()
      setIsOpen(false)
      return
    }

    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return

    event.preventDefault()
    if (!isOpenState) {
      setIsOpen(true)
      return
    }
    popoverRef.current?.querySelector<HTMLElement>('[role="row"]')?.focus()
  }

  const handleFieldPointerDown: PointerEventHandler<HTMLDivElement> = event => {
    const target = event.target as HTMLElement
    if (target.closest('button')) return
    inputRef.current?.focus()
  }

  const handleClearAll = () => {
    setCheckedKeys(new Set())
    inputRef.current?.focus()
  }

  const renderNode = (node: TreeNode<T>): ReactNode => {
    if (visibleKeys && !visibleKeys.has(node.key)) return null

    const checkedState = getCheckedState(node.key)
    const isItemDisabled = disabledKeySet.has(node.key)
    const toggle = () => toggleKey(node.key)

    const content = renderItem ? (
      renderItem(node.value, {
        checkedState,
        isDisabled: isItemDisabled,
        toggle,
      })
    ) : (
      <Checkbox
        isSelected={checkedState === 'checked'}
        isIndeterminate={checkedState === 'indeterminate'}
        isDisabled={isItemDisabled}
        onChange={toggle}
      >
        {getTextValue(node.value)}
      </Checkbox>
    )

    return (
      <TreeItem
        key={node.key}
        id={node.key}
        textValue={getTextValue(node.value)}
        isDisabled={isItemDisabled}
        content={content}
      >
        {node.children?.map(renderNode)}
      </TreeItem>
    )
  }

  return (
    <div className={clsx(styles.treeComboBox, className)}>
      <LabelWrapper popover={popover}>
        {label && <Label>{label}</Label>}
      </LabelWrapper>
      {description && <Text slot='description'>{description}</Text>}
      {errorPosition === 'top' && (
        <FieldError
          isInvalid={isInvalid}
          data-testid='fieldError'
        >
          {errorMessage}
        </FieldError>
      )}
      <Group
        ref={fieldRef}
        className={styles.wrap}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        data-readonly={isReadOnly || undefined}
        onPointerDown={handleFieldPointerDown}
      >
        <Input
          ref={inputRef}
          className={clsx(styles.inputField, {
            [styles.medium]: size === 'medium',
          })}
          value={inputValue}
          placeholder={placeholder}
          disabled={isDisabled}
          readOnly={isReadOnly}
          required={isRequired}
          aria-label={ariaLabel ?? label}
          aria-expanded={isOpenState}
          aria-haspopup='dialog'
          onChange={event => handleInputValueChange(event.target.value)}
          onKeyDown={handleInputKeyDown}
        />
        <TreeComboBoxValue
          checkedCount={checkedKeys.size}
          isDisabled={isDisabled}
          onClear={handleClearAll}
        />
        <Button
          className={clsx(styles.button, {
            [styles.medium]: size === 'medium',
          })}
          aria-label={strings.format('showList')}
          isDisabled={isDisabled}
          aria-expanded={isOpenState}
          onPress={() => setIsOpen(!isOpenState)}
        >
          <div
            className={styles.icon}
            aria-hidden='true'
          >
            <ChevronDown
              size={20}
              aria-hidden
            />
          </div>
        </Button>
      </Group>
      {errorPosition === 'bottom' && (
        <FieldError
          isInvalid={isInvalid}
          data-testid='fieldError'
        >
          {errorMessage}
        </FieldError>
      )}
      <Popover
        ref={popoverRef}
        triggerRef={fieldRef}
        isOpen={isOpenState}
        onOpenChange={setIsOpen}
        offset={4}
        hideArrow
        isNonModal
        className={styles.popover}
      >
        <Tree
          aria-label={ariaLabel ?? label ?? strings.format('showList')}
          selectionMode='none'
          disabledKeys={disabledKeySet}
          expandedKeys={effectiveExpandedKeys}
          onExpandedChange={handleTreeExpandedChange}
          onAction={key => toggleKey(key)}
          renderEmptyState={() => (
            <ListBoxEmptyState>
              {strings.format('noResultsFound')}
            </ListBoxEmptyState>
          )}
        >
          {tree.items.map(renderNode)}
        </Tree>
      </Popover>
    </div>
  )
}
