import { useButton } from "@react-aria/button";
import { FocusRing } from "@react-aria/focus";
import { mergeProps, useObjectRef } from '@react-aria/utils';
import { Item, Section } from "@react-stately/collections";
import { CollectionChildren, Key } from '@react-types/shared';
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { TagGroup, Tag, TagList, Button } from 'react-aria-components';
import { SelectListBox } from './SelectListBox';
import { SelectPopover } from './SelectPopover';
import { useMultiSelect } from './useMultiSelect';
import { useMultiSelectState, MultiSelectState } from './useMultiSelectState';
import styles from './MultiSelect.module.css'

export type OptionItem = {
  children?: never;

  id: string;

  name: string | React.ReactNode;

  /** Textual representation of `name` in case it is not a string. Used for searching. */
  textValue?: string;

  /** Allow additional properties for an option. */
  [prop: string]: unknown;
};

type OptionSection = {
  children: OptionItem[];
  name: string;
};

export type Option = OptionItem | OptionSection;

type SelectProps = {
  /** Whether the element should receive focus on render. */
  autoFocus?: boolean;

  children: CollectionChildren<Option>;

  /** Sets the CSS [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. */
  className?: string;

  /** Sets the default open state of the field (uncontrolled). */
  defaultOpen?: boolean;

  /** The initial selected keys in the collection (uncontrolled). */
  defaultSelectedKeys?: Parameters<
    typeof useMultiSelectState
  >['0']['defaultSelectedKeys'];

  /** The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with. */
  disabledKeys?: Parameters<typeof useMultiSelectState>['0']['disabledKeys'];

  excludeFromTabOrder?: boolean;

  items: Option[];

  /** Whether the field can be emptied. */
  isClearable?: boolean;

  /** Whether the field is disabled. */
  isDisabled?: boolean;

  /** Whether to show a button to select all items. */
  isSelectableAll?: boolean;

  /** Sets the open state of the field (controlled). */
  isOpen?: boolean;

  /** The content to display as the label. */
  label: string;

  /** Handler that is called when the select's open state changes. */
  onOpenChange?: Parameters<typeof useMultiSelectState>['0']['onOpenChange'];

  /** Handler that is called when the selection changes. */
  onSelectionChange?: Parameters<
    typeof useMultiSelectState
  >['0']['onSelectionChange'];

  /** The currently selected keys in the collection (controlled). */
  selectedKeys?: Parameters<typeof useMultiSelectState>['0']['selectedKeys'];

  /** The type of selection that is allowed in the collection. */
  selectionMode: 'single' | 'multiple';
};

export const SelectComponent = React.forwardRef<HTMLButtonElement, SelectProps>(
  (props, forwardedRef) => {
    const {
      autoFocus,
      className,
      excludeFromTabOrder,
      isClearable,
      isDisabled,
      isSelectableAll,
      label
    } = props;

    const refAllButton = useRef<HTMLInputElement>(null);
    const ref = useObjectRef(forwardedRef);
    const disallowEmptySelection = !isClearable;

    const state = useMultiSelectState({ ...props, disallowEmptySelection });
    const { labelProps, triggerProps, valueProps, menuProps } = useMultiSelect(
      {
        ...props,
        disallowEmptySelection
      },
      state,
      ref
    );
    const { buttonProps } = useButton(
      { ...triggerProps, autoFocus, excludeFromTabOrder, isDisabled },
      ref
    );

    const isActive = state.isOpen || state.selectedItems;
    const isAllSelection = state.selectionManager.isSelectAll;
    const isIndeterminateSelection =
      !isAllSelection && !state.selectionManager.isEmpty;
    const hasClearButton = isClearable && state.selectedItems;
    const hasHeader = isSelectableAll;

    const handleClear = () => state.selectionManager.clearSelection();
    const handleSelectAll = () => state.selectionManager.toggleSelectAll();
    const handleRemove = (key: Key) => {
      console.log('handleRemove', key);
      state.selectionManager.toggleSelection(key)
    };

        const formatItems = (
            items: NonNullable<MultiSelectState<Option>["selectedItems"]>
        ) => (
            <span className="truncate block">
        {items.length > 1 ? `${items.length} selected` : items[0].textValue}
      </span>
        );

        useEffect(() => {
            if (refAllButton.current) {
                refAllButton.current.indeterminate = isIndeterminateSelection;
            }
        }, [isIndeterminateSelection]);

    return (
            <div
                className={clsx(
                    "select-wrapper",
                    {
                        "select-wrapper--open": state.isOpen
                    },
                    className
                )}
            >
                <div className={styles.multiSelect}>
                    {label && (
                        <label
                            {...labelProps}
                            className={clsx("select__label", {
                                "select__label--active": isActive
                            })}
                        >
                            {label}
                        </label>
                    )}
                    <FocusRing focusRingClass={styles.buttonFocused} autoFocus={autoFocus}>
                        <button
                            {...buttonProps}
                            className={clsx(styles.button, {
                                "select--open": state.isOpen,
                                "select--active": state.selectedItems,
                                "select--disabled": isDisabled
                            })}
                            type="button"
                            ref={ref}
                        >
              <span {...valueProps}>
                {state.selectedItems
                  ? formatItems(state.selectedItems)
                  : undefined}
              </span>
                        <div>↓</div>
                      </button>
                    </FocusRing>
                  {state.isOpen && (
                        <SelectPopover
                            isOpen={state.isOpen}
                            onClose={state.close}
                            className={styles.popover}
                            triggerRef={ref}
                        >
                            {hasHeader && (
                                <>
                                    {isSelectableAll && (
                                        <button
                                            type="button"
                                            onClick={handleSelectAll}
                                            className="select__all-button"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={isAllSelection}
                                                ref={refAllButton}
                                                readOnly
                                                tabIndex={-1}
                                            />
                                            Select all
                                        </button>
                                    )}
                                    <div className="select__divider" />
                                </>
                            )}
                            <SelectListBox {...menuProps} state={state} />
                            {hasClearButton && (
                                <>
                                    <div className="select__divider" />
                                    {/* TODO: Focus is not restored back to the list once button unmounts, see https://github.com/adobe/react-spectrum/issues/2415 */}
                                    <button
                                        type="button"
                                        className={''}
                                        onClick={handleClear}
                                    >
                                        Clear
                                    </button>
                                </>
                            )}
                        </SelectPopover>
                    )}
                </div>
              {/*TODO FIX AND REFACTOR*/}
              <TagGroup aria-label={'Selected Items'} selectionBehavior={'toggle'} onRemove={(keys) => handleRemove([...keys][0])} {...mergeProps}>
                {/*@ts-ignore*/}
                <TagList items={state.selectedItems}>
                  {(item => (
                    <Tag key={item.key} textValue={item.textValue} id={item.key}>{item.textValue}<Button slot={'remove'}>X</Button></Tag>
                  ))}
                </TagList>
              </TagGroup>
            </div>
        );
    }
);

type SelectContainerProps = Omit<SelectProps, "children" | "items"> & {
    /** Item objects in the collection. */
    options: Option[];
};

export const Select = React.forwardRef<HTMLButtonElement, SelectContainerProps>(
    ({ options, ...props }, ref) => (
        <SelectComponent {...props} items={options} ref={ref}>
            {(section) =>
                section.children ? (
                    <Section
                        key={section.name}
                        items={section.children}
                        title={section.name}
                    >
                        {(item) => <Item textValue={item.textValue}>{item.name}</Item>}
                    </Section>
                ) : (
                    <Item textValue={section.textValue}>{section.name}</Item>
                )
            }
        </SelectComponent>
    )
);

Select.displayName = "Select";
