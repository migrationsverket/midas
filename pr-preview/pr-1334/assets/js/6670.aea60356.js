"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6670],{

/***/ 86670
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  qF: () => (/* binding */ $928221da08ecbc62$export$41f133550aa26f48),
  JC: () => (/* binding */ $928221da08ecbc62$export$7ff8f37d2d81a48d),
  nh: () => (/* binding */ $928221da08ecbc62$export$a11e76429ed99b4),
  CI: () => (/* binding */ $928221da08ecbc62$export$8e6d031a08cf56a1),
  rd: () => (/* binding */ $928221da08ecbc62$export$dca12b0bb56e4fc),
  DN: () => (/* binding */ $928221da08ecbc62$export$7c5906fe4f1f2af2)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Collection.mjs
var Collection = __webpack_require__(53658);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/DragAndDrop.mjs
var DragAndDrop = __webpack_require__(88928);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Header.mjs
var Header = __webpack_require__(75993);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Autocomplete.mjs
var Autocomplete = __webpack_require__(77314);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/SelectionIndicator.mjs
var SelectionIndicator = __webpack_require__(17863);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Separator.mjs
var Separator = __webpack_require__(40795);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/SharedElementTransition.mjs
var SharedElementTransition = __webpack_require__(17062);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Text.mjs
var Text = __webpack_require__(20987);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/listbox/utils.mjs
var listbox_utils = __webpack_require__(98858);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusWithin.mjs
var useFocusWithin = __webpack_require__(75655);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useId.mjs + 1 modules
var useId = __webpack_require__(19633);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/label/useLabel.mjs
var useLabel = __webpack_require__(60741);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/useSelectableList.mjs
var useSelectableList = __webpack_require__(70353);
;// ./node_modules/react-aria/dist/private/listbox/useListBox.mjs








/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






function $686593f99a1df089$export$50eacbbf140a3141(props, state, ref) {
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        labelable: true
    });
    // Use props instead of state here. We don't want this to change due to long press.
    let selectionBehavior = props.selectionBehavior || 'toggle';
    let orientation = props.orientation || 'vertical';
    let linkBehavior = props.linkBehavior || (selectionBehavior === 'replace' ? 'action' : 'override');
    if (selectionBehavior === 'toggle' && linkBehavior === 'action') // linkBehavior="action" does not work with selectionBehavior="toggle" because there is no way
    // to initiate selection (checkboxes are not allowed inside a listbox). Link items will not be
    // selectable in this configuration.
    linkBehavior = 'override';
    let { listProps: listProps } = (0, useSelectableList/* useSelectableList */.y)({
        ...props,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        linkBehavior: linkBehavior
    });
    let { focusWithinProps: focusWithinProps } = (0, useFocusWithin/* useFocusWithin */.R)({
        onFocusWithin: props.onFocus,
        onBlurWithin: props.onBlur,
        onFocusWithinChange: props.onFocusChange
    });
    // Share list id and some props with child options.
    let id = (0, useId/* useId */.Bi)(props.id);
    (0, listbox_utils/* listData */.b).set(state, {
        id: id,
        shouldUseVirtualFocus: props.shouldUseVirtualFocus,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp,
        shouldFocusOnHover: props.shouldFocusOnHover,
        isVirtualized: props.isVirtualized,
        onAction: props.onAction,
        linkBehavior: linkBehavior,
        // @ts-ignore
        UNSTABLE_itemBehavior: props['UNSTABLE_itemBehavior']
    });
    let { labelProps: labelProps, fieldProps: fieldProps } = (0, useLabel/* useLabel */.M)({
        ...props,
        id: id,
        // listbox is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    return {
        labelProps: labelProps,
        listBoxProps: (0, mergeProps/* mergeProps */.v)(domProps, focusWithinProps, state.selectionManager.selectionMode === 'multiple' ? {
            'aria-multiselectable': 'true'
        } : {}, {
            role: 'listbox',
            'aria-orientation': orientation,
            ...(0, mergeProps/* mergeProps */.v)(fieldProps, listProps)
        })
    };
}



//# sourceMappingURL=useListBox.mjs.map

;// ./node_modules/react-aria/dist/private/listbox/useListBoxSection.mjs


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $3d6c959d2ef57b72$export$c3f9f39876e4bc7(props) {
    let { heading: heading, 'aria-label': ariaLabel } = props;
    let headingId = (0, useId/* useId */.Bi)();
    return {
        itemProps: {
            role: 'presentation'
        },
        headingProps: heading ? {
            // Technically, listbox cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, using role="presentation",
            // and only use it as a visual label for the nested group.
            id: headingId,
            role: 'presentation',
            onMouseDown: (e)=>{
                // Prevent DOM focus from moving on mouse down when using virtual focus
                e.preventDefault();
            }
        } : {},
        groupProps: {
            role: 'group',
            'aria-label': ariaLabel,
            'aria-labelledby': heading ? headingId : undefined
        }
    };
}



//# sourceMappingURL=useListBoxSection.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/chain.mjs
var chain = __webpack_require__(96558);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(35692);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/useSelectableItem.mjs
var useSelectableItem = __webpack_require__(1904);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useHover.mjs
var useHover = __webpack_require__(68068);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/openLink.mjs
var openLink = __webpack_require__(46271);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/collections/getItemCount.mjs
var getItemCount = __webpack_require__(68276);
;// ./node_modules/react-aria/dist/private/listbox/useOption.mjs











/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 









function $dae966e193913d1b$export$497855f14858aa34(props, state, ref) {
    let { key: key } = props;
    let data = (0, listbox_utils/* listData */.b).get(state);
    let isDisabled = props.isDisabled ?? state.selectionManager.isDisabled(key);
    let isSelected = props.isSelected ?? state.selectionManager.isSelected(key);
    let shouldSelectOnPressUp = props.shouldSelectOnPressUp ?? data?.shouldSelectOnPressUp;
    let shouldFocusOnHover = props.shouldFocusOnHover ?? data?.shouldFocusOnHover;
    let shouldUseVirtualFocus = props.shouldUseVirtualFocus ?? data?.shouldUseVirtualFocus;
    let isVirtualized = props.isVirtualized ?? data?.isVirtualized;
    let labelId = (0, useId/* useSlotId */.X1)();
    let descriptionId = (0, useId/* useSlotId */.X1)();
    let optionProps = {
        role: 'option',
        'aria-disabled': isDisabled || undefined,
        'aria-selected': state.selectionManager.selectionMode !== 'none' ? isSelected : undefined,
        'aria-label': props['aria-label'],
        'aria-labelledby': labelId,
        'aria-describedby': descriptionId
    };
    let item = state.collection.getItem(key);
    if (isVirtualized) {
        let index = Number(item?.index);
        optionProps['aria-posinset'] = Number.isNaN(index) ? undefined : index + 1;
        optionProps['aria-setsize'] = (0, getItemCount/* getItemCount */.v)(state.collection);
    }
    let onAction = data?.onAction ? ()=>data?.onAction?.(key) : undefined;
    let id = (0, listbox_utils/* getItemId */.H)(state, key);
    let { itemProps: itemProps, isPressed: isPressed, isFocused: isFocused, hasAction: hasAction, allowsSelection: allowsSelection } = (0, useSelectableItem/* useSelectableItem */.p)({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        allowsDifferentPressOrigin: shouldSelectOnPressUp && shouldFocusOnHover,
        isVirtualized: isVirtualized,
        shouldUseVirtualFocus: shouldUseVirtualFocus,
        isDisabled: isDisabled,
        onAction: onAction || item?.props?.onAction ? (0, chain/* chain */.c)(item?.props?.onAction, onAction) : undefined,
        linkBehavior: data?.linkBehavior,
        // @ts-ignore
        UNSTABLE_itemBehavior: data?.['UNSTABLE_itemBehavior'],
        id: id
    });
    let { hoverProps: hoverProps } = (0, useHover/* useHover */.M)({
        isDisabled: isDisabled || !shouldFocusOnHover,
        onHoverStart () {
            if (!(0, useFocusVisible/* isFocusVisible */.pP)()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
        }
    });
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(item?.props);
    delete domProps.id;
    let linkProps = (0, openLink/* useLinkProps */._h)(item?.props);
    return {
        optionProps: {
            ...optionProps,
            ...(0, mergeProps/* mergeProps */.v)(domProps, itemProps, hoverProps, linkProps),
            id: id
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        isFocused: isFocused,
        isFocusVisible: isFocused && state.selectionManager.isFocused && (0, useFocusVisible/* isFocusVisible */.pP)(),
        isSelected: isSelected,
        isDisabled: isDisabled,
        isPressed: isPressed,
        allowsSelection: allowsSelection,
        hasAction: hasAction
    };
}



//# sourceMappingURL=useOption.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(11513);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/FocusScope.mjs
var FocusScope = __webpack_require__(46686);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/inertValue.mjs
var inertValue = __webpack_require__(22868);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/BaseCollection.mjs
var BaseCollection = __webpack_require__(2764);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/ListKeyboardDelegate.mjs
var ListKeyboardDelegate = __webpack_require__(88430);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/list/useListState.mjs
var useListState = __webpack_require__(40447);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useLoadMoreSentinel.mjs
var useLoadMoreSentinel = __webpack_require__(93323);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/useCollator.mjs
var useCollator = __webpack_require__(15435);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocus.mjs
var useFocus = __webpack_require__(21978);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/useFocusRing.mjs
var useFocusRing = __webpack_require__(66683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useKeyboard.mjs + 2 modules
var useKeyboard = __webpack_require__(91357);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/I18nProvider.mjs + 2 modules
var I18nProvider = __webpack_require__(78352);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useObjectRef.mjs
var useObjectRef = __webpack_require__(80716);
;// ./node_modules/react-aria-components/dist/private/ListBox.mjs





























/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



























const $928221da08ecbc62$export$7ff8f37d2d81a48d = /*#__PURE__*/ (0, react.createContext)(null);
const $928221da08ecbc62$export$7c5906fe4f1f2af2 = /*#__PURE__*/ (0, react.createContext)(null);
const $928221da08ecbc62$export$41f133550aa26f48 = /*#__PURE__*/ (0, react.forwardRef)(function ListBox(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $928221da08ecbc62$export$7ff8f37d2d81a48d);
    let state = (0, react.useContext)($928221da08ecbc62$export$7c5906fe4f1f2af2);
    // The structure of ListBox is a bit strange because it needs to work inside other components like ComboBox and Select.
    // Those components render two copies of their children so that the collection can be built even when the popover is closed.
    // The first copy sends a collection document via context which we render the collection portal into.
    // The second copy sends a ListState object via context which we use to render the ListBox without rebuilding the state.
    // Otherwise, we have a standalone ListBox, so we need to create a collection and state ourselves.
    if (state) return /*#__PURE__*/ (0, react).createElement($928221da08ecbc62$var$ListBoxInner, {
        state: state,
        props: props,
        listBoxRef: ref
    });
    return /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* Collection */.pM), props)
    }, (collection)=>/*#__PURE__*/ (0, react).createElement($928221da08ecbc62$var$StandaloneListBox, {
            props: props,
            listBoxRef: ref,
            collection: collection
        }));
});
function $928221da08ecbc62$var$StandaloneListBox({ props: props, listBoxRef: listBoxRef, collection: collection }) {
    props = {
        ...props,
        collection: collection,
        children: null,
        items: null
    };
    let { layoutDelegate: layoutDelegate } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let state = (0, useListState/* useListState */.p)({
        ...props,
        layoutDelegate: layoutDelegate
    });
    return /*#__PURE__*/ (0, react).createElement($928221da08ecbc62$var$ListBoxInner, {
        state: state,
        props: props,
        listBoxRef: listBoxRef
    });
}
function $928221da08ecbc62$var$ListBoxInner({ state: inputState, props: props, listBoxRef: listBoxRef }) {
    // oxlint-disable-next-line react/react-compiler
    [props, listBoxRef] = (0, utils/* useContextProps */.JT)(props, listBoxRef, (0, Autocomplete/* SelectableCollectionContext */.Co));
    let { dragAndDropHooks: dragAndDropHooks, layout: layout = 'stack', orientation: orientation = 'vertical', filter: filter } = props;
    // oxlint-disable-next-line react/react-compiler
    let state = (0, useListState/* UNSTABLE_useFilteredListState */.Z)(inputState, filter);
    let { collection: collection, selectionManager: selectionManager } = state;
    let isListDraggable = !!dragAndDropHooks?.useDraggableCollectionState;
    let isListDroppable = !!dragAndDropHooks?.useDroppableCollectionState;
    let { direction: direction } = (0, I18nProvider/* useLocale */.Y)();
    let { disabledBehavior: disabledBehavior, disabledKeys: disabledKeys } = selectionManager;
    let collator = (0, useCollator/* useCollator */.Q)({
        usage: 'search',
        sensitivity: 'base'
    });
    let { isVirtualized: isVirtualized, layoutDelegate: layoutDelegate, dropTargetDelegate: ctxDropTargetDelegate, CollectionRoot: CollectionRoot } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let keyboardDelegate = (0, react.useMemo)(// oxlint-disable-next-line react/react-compiler
    ()=>props.keyboardDelegate || new (0, ListKeyboardDelegate/* ListKeyboardDelegate */.n)({
            collection: collection,
            collator: collator,
            ref: listBoxRef,
            disabledKeys: disabledKeys,
            disabledBehavior: disabledBehavior,
            layout: layout,
            orientation: orientation,
            direction: direction,
            layoutDelegate: layoutDelegate
        }), [
        collection,
        collator,
        listBoxRef,
        disabledBehavior,
        disabledKeys,
        orientation,
        direction,
        props.keyboardDelegate,
        layout,
        layoutDelegate
    ]);
    let { listBoxProps: listBoxProps } = (0, $686593f99a1df089$export$50eacbbf140a3141)({
        ...props,
        shouldSelectOnPressUp: isListDraggable || props.shouldSelectOnPressUp,
        keyboardDelegate: keyboardDelegate,
        isVirtualized: isVirtualized
    }, state, listBoxRef);
    let dragHooksProvided = (0, react.useRef)(isListDraggable);
    let dropHooksProvided = (0, react.useRef)(isListDroppable);
    (0, react.useEffect)(()=>{
        if (true) return;
        // removed by dead control flow

        // removed by dead control flow

    }, [
        isListDraggable,
        isListDroppable
    ]);
    let dragState = undefined;
    let dropState = undefined;
    let droppableCollection = undefined;
    let isRootDropTarget = false;
    let dragPreview = null;
    let preview = (0, react.useRef)(null);
    if (isListDraggable && dragAndDropHooks) {
        // oxlint-disable-next-line react/react-compiler
        dragState = dragAndDropHooks.useDraggableCollectionState({
            collection: collection,
            selectionManager: selectionManager,
            preview: dragAndDropHooks.renderDragPreview ? preview : undefined
        });
        // oxlint-disable-next-line react/react-compiler
        dragAndDropHooks.useDraggableCollection({}, dragState, listBoxRef);
        let DragPreview = dragAndDropHooks.DragPreview;
        dragPreview = dragAndDropHooks.renderDragPreview ? /*#__PURE__*/ (0, react).createElement(DragPreview, {
            ref: preview
        }, dragAndDropHooks.renderDragPreview) : null;
    }
    if (isListDroppable && dragAndDropHooks) {
        // oxlint-disable-next-line react/react-compiler
        dropState = dragAndDropHooks.useDroppableCollectionState({
            collection: collection,
            selectionManager: selectionManager
        });
        let dropTargetDelegate = dragAndDropHooks.dropTargetDelegate || ctxDropTargetDelegate || new dragAndDropHooks.ListDropTargetDelegate(collection, listBoxRef, {
            orientation: orientation,
            layout: layout,
            direction: direction
        });
        // oxlint-disable-next-line react/react-compiler
        droppableCollection = dragAndDropHooks.useDroppableCollection({
            keyboardDelegate: keyboardDelegate,
            dropTargetDelegate: dropTargetDelegate
        }, dropState, listBoxRef);
        isRootDropTarget = dropState.isDropTarget({
            type: 'root'
        });
    }
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)();
    let isEmpty = state.collection.size === 0;
    let renderValues = {
        isDropTarget: isRootDropTarget,
        isEmpty: isEmpty,
        isFocused: isFocused,
        isFocusVisible: isFocusVisible,
        layout: props.layout || 'stack',
        orientation: orientation,
        state: state
    };
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        children: undefined,
        defaultClassName: 'react-aria-ListBox',
        values: renderValues
    });
    let emptyState = null;
    if (isEmpty && props.renderEmptyState) emptyState = /*#__PURE__*/ (0, react).createElement("div", {
        // eslint-disable-next-line
        role: "option",
        style: {
            display: 'contents'
        }
    }, props.renderEmptyState(renderValues));
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, react).createElement((0, FocusScope/* FocusScope */.n1), null, /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, listBoxProps, focusProps, droppableCollection?.collectionProps),
        ref: listBoxRef,
        slot: props.slot || undefined,
        onScroll: props.onScroll,
        "data-drop-target": isRootDropTarget || undefined,
        "data-empty": isEmpty || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-layout": props.layout || 'stack',
        "data-orientation": orientation
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $928221da08ecbc62$export$7ff8f37d2d81a48d,
                props
            ],
            [
                $928221da08ecbc62$export$7c5906fe4f1f2af2,
                state
            ],
            [
                (0, DragAndDrop/* DragAndDropContext */.Ux),
                {
                    dragAndDropHooks: dragAndDropHooks,
                    dragState: dragState,
                    dropState: dropState
                }
            ],
            [
                (0, Separator/* SeparatorContext */.$S),
                {
                    elementType: 'div'
                }
            ],
            [
                (0, DragAndDrop/* DropIndicatorContext */.U5),
                {
                    render: $928221da08ecbc62$var$ListBoxDropIndicatorWrapper
                }
            ],
            [
                (0, Collection/* SectionContext */.P2),
                {
                    name: 'ListBoxSection',
                    render: $928221da08ecbc62$var$ListBoxSectionInner
                }
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement((0, SharedElementTransition/* SharedElementTransition */.D), null, /*#__PURE__*/ (0, react).createElement(CollectionRoot, {
        collection: collection,
        scrollRef: listBoxRef,
        persistedKeys: (0, DragAndDrop/* useDndPersistedKeys */.XW)(selectionManager, dragAndDropHooks, dropState),
        renderDropIndicator: (0, DragAndDrop/* useRenderDropIndicator */.oC)(dragAndDropHooks, dropState)
    }))), emptyState, dragPreview));
}
function $928221da08ecbc62$var$ListBoxSectionInner(props, ref, section, className = 'react-aria-ListBoxSection') {
    let state = (0, react.useContext)($928221da08ecbc62$export$7c5906fe4f1f2af2);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, react.useContext)((0, DragAndDrop/* DragAndDropContext */.Ux));
    let { CollectionBranch: CollectionBranch } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let [headingRef, heading] = (0, utils/* useSlot */._E)();
    let { headingProps: headingProps, groupProps: groupProps } = (0, $3d6c959d2ef57b72$export$c3f9f39876e4bc7)({
        heading: heading,
        'aria-label': props['aria-label'] ?? undefined
    });
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        id: undefined,
        children: undefined,
        defaultClassName: className,
        values: undefined
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).section, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, groupProps),
        ref: ref
    }, /*#__PURE__*/ (0, react).createElement((0, Header/* HeaderContext */.B).Provider, {
        value: {
            ...headingProps,
            ref: headingRef
        }
    }, /*#__PURE__*/ (0, react).createElement(CollectionBranch, {
        collection: state.collection,
        parent: section,
        renderDropIndicator: (0, DragAndDrop/* useRenderDropIndicator */.oC)(dragAndDropHooks, dropState)
    })));
}
const $928221da08ecbc62$export$dca12b0bb56e4fc = /*#__PURE__*/ (0, CollectionBuilder/* createBranchComponent */.yq)((0, BaseCollection/* SectionNode */.ox), $928221da08ecbc62$var$ListBoxSectionInner);
const $928221da08ecbc62$export$a11e76429ed99b4 = /*#__PURE__*/ (0, CollectionBuilder/* createLeafComponent */.KU)((0, BaseCollection/* ItemNode */._B), function ListBoxItem(props, forwardedRef, item) {
    let ref = (0, useObjectRef/* useObjectRef */.U)(forwardedRef);
    let state = (0, react.useContext)($928221da08ecbc62$export$7c5906fe4f1f2af2);
    let { dragAndDropHooks: dragAndDropHooks, dragState: dragState, dropState: dropState } = (0, react.useContext)((0, DragAndDrop/* DragAndDropContext */.Ux));
    let isDraggable = dragState && !(dragState.isDisabled || dragState.selectionManager.isDisabled(item.key));
    let { optionProps: optionProps, labelProps: labelProps, descriptionProps: descriptionProps, ...states } = (0, $dae966e193913d1b$export$497855f14858aa34)({
        key: item.key,
        'aria-label': props?.['aria-label']
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* useHover */.M)({
        isDisabled: !states.allowsSelection && !states.hasAction && !isDraggable,
        onHoverStart: item.props.onHoverStart,
        onHoverChange: item.props.onHoverChange,
        onHoverEnd: item.props.onHoverEnd
    });
    let { keyboardProps: keyboardProps } = (0, useKeyboard/* useKeyboard */.d)(props);
    let { focusProps: focusProps } = (0, useFocus/* useFocus */.i)(props);
    let draggableItem = null;
    if (dragState && dragAndDropHooks) draggableItem = dragAndDropHooks.useDraggableItem({
        key: item.key,
        hasAction: states.hasAction
    }, dragState);
    let droppableItem = null;
    if (dropState && dragAndDropHooks) droppableItem = dragAndDropHooks.useDroppableItem({
        target: {
            type: 'item',
            key: item.key,
            dropPosition: 'on'
        }
    }, dropState, ref);
    let isDragging = dragState && dragState.isDragging(item.key);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        id: undefined,
        children: props.children,
        defaultClassName: 'react-aria-ListBoxItem',
        values: {
            ...states,
            isHovered: isHovered,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior,
            allowsDragging: !!dragState,
            isDragging: isDragging,
            isDropTarget: droppableItem?.isDropTarget
        }
    });
    (0, react.useEffect)(()=>{
        if (!item.textValue && "production" !== 'production') // removed by dead control flow
{}
    }, [
        item.textValue
    ]);
    let ElementType = props.href ? (0, utils/* dom */.tT).a : (0, utils/* dom */.tT).div;
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    if (props.href && optionProps.tabIndex == null) optionProps.tabIndex = -1;
    return /*#__PURE__*/ (0, react).createElement(ElementType, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, optionProps, hoverProps, keyboardProps, focusProps, draggableItem?.dragProps, droppableItem?.dropProps),
        ref: ref,
        "data-allows-dragging": !!dragState || undefined,
        "data-selected": states.isSelected || undefined,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": states.isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-dragging": isDragging || undefined,
        "data-drop-target": droppableItem?.isDropTarget || undefined,
        "data-selection-mode": state.selectionManager.selectionMode === 'none' ? undefined : state.selectionManager.selectionMode
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                (0, Text/* TextContext */.h),
                {
                    slots: {
                        [(0, utils/* DEFAULT_SLOT */.P_)]: labelProps,
                        label: labelProps,
                        description: descriptionProps
                    }
                }
            ],
            [
                (0, SelectionIndicator/* SelectionIndicatorContext */.r),
                {
                    isSelected: states.isSelected
                }
            ]
        ]
    }, renderProps.children));
});
function $928221da08ecbc62$var$ListBoxDropIndicatorWrapper(props, ref) {
    ref = (0, useObjectRef/* useObjectRef */.U)(ref);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, react.useContext)((0, DragAndDrop/* DragAndDropContext */.Ux));
    // oxlint-disable-next-line react/react-compiler
    let { dropIndicatorProps: dropIndicatorProps, isHidden: isHidden, isDropTarget: isDropTarget } = dragAndDropHooks.useDropIndicator(props, dropState, ref);
    if (isHidden) return null;
    return /*#__PURE__*/ (0, react).createElement($928221da08ecbc62$var$ListBoxDropIndicatorForwardRef, {
        ...props,
        dropIndicatorProps: dropIndicatorProps,
        isDropTarget: isDropTarget,
        ref: ref
    });
}
function $928221da08ecbc62$var$ListBoxDropIndicator(props, ref) {
    let { dropIndicatorProps: dropIndicatorProps, isDropTarget: isDropTarget, ...otherProps } = props;
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...otherProps,
        defaultClassName: 'react-aria-DropIndicator',
        values: {
            isDropTarget: isDropTarget
        }
    });
    return /*#__PURE__*/ (0, react).createElement((0, react).Fragment, null, /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...dropIndicatorProps,
        ...renderProps,
        role: "option",
        ref: ref,
        "data-drop-target": isDropTarget || undefined
    }));
}
const $928221da08ecbc62$var$ListBoxDropIndicatorForwardRef = /*#__PURE__*/ (0, react.forwardRef)($928221da08ecbc62$var$ListBoxDropIndicator);
const $928221da08ecbc62$export$8e6d031a08cf56a1 = (0, CollectionBuilder/* createLeafComponent */.KU)((0, BaseCollection/* LoaderNode */.OJ), function ListBoxLoadingIndicator(props, ref, item) {
    let state = (0, react.useContext)($928221da08ecbc62$export$7c5906fe4f1f2af2);
    let { isLoading: isLoading, onLoadMore: onLoadMore, scrollOffset: scrollOffset, ...otherProps } = props;
    let sentinelRef = (0, react.useRef)(null);
    let memoedLoadMoreProps = (0, react.useMemo)(()=>({
            onLoadMore: onLoadMore,
            collection: state?.collection,
            sentinelRef: sentinelRef,
            scrollOffset: scrollOffset
        }), [
        onLoadMore,
        scrollOffset,
        state?.collection
    ]);
    (0, useLoadMoreSentinel/* useLoadMoreSentinel */.n)(memoedLoadMoreProps, sentinelRef);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...otherProps,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-ListBoxLoadingIndicator',
        values: undefined
    });
    let optionProps = {
        // For Android talkback
        tabIndex: -1
    };
    return /*#__PURE__*/ (0, react).createElement((0, react).Fragment, null, /*#__PURE__*/ (0, react).createElement("div", {
        style: {
            position: 'relative',
            width: 0,
            height: 0
        },
        inert: (0, inertValue/* inertValue */.Y)(true)
    }, /*#__PURE__*/ (0, react).createElement("div", {
        "data-testid": "loadMoreSentinel",
        ref: sentinelRef,
        style: {
            position: 'absolute',
            height: 1,
            width: 1
        }
    })), isLoading && renderProps.children && /*#__PURE__*/ (0, react).createElement((0, react).Fragment, null, /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...(0, mergeProps/* mergeProps */.v)((0, filterDOMProps/* filterDOMProps */.$)(props, {
            global: true
        }), optionProps),
        ...renderProps,
        // aria-selected isn't needed here since this option is not selectable.
        role: "option",
        ref: ref
    }, renderProps.children)));
});



//# sourceMappingURL=ListBox.mjs.map


/***/ },

/***/ 98858
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ $cd088b5c0d7b27b4$export$9145995848b05025),
/* harmony export */   b: () => (/* binding */ $cd088b5c0d7b27b4$export$3585ede4d035bf14)
/* harmony export */ });
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $cd088b5c0d7b27b4$export$3585ede4d035bf14 = new WeakMap();
function $cd088b5c0d7b27b4$var$normalizeKey(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}
function $cd088b5c0d7b27b4$export$9145995848b05025(state, itemKey) {
    let data = $cd088b5c0d7b27b4$export$3585ede4d035bf14.get(state);
    if (!data) throw new Error('Unknown list');
    return `${data.id}-option-${$cd088b5c0d7b27b4$var$normalizeKey(itemKey)}`;
}



//# sourceMappingURL=utils.mjs.map


/***/ },

/***/ 94447
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ $f664a81d022446b5$export$d085fb9e920b5ca7)
/* harmony export */ });
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ class $f664a81d022446b5$export$d085fb9e920b5ca7 {
    constructor(nodes){
        this.keyMap = new Map();
        this.firstKey = null;
        this.lastKey = null;
        this.iterable = nodes;
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && node.type === 'section') for (let child of node.childNodes)visit(child);
        };
        for (let node of nodes)visit(node);
        let last = null;
        let index = 0;
        let size = 0;
        for (let [key, node] of this.keyMap){
            if (last) {
                last.nextKey = key;
                node.prevKey = last.key;
            } else {
                this.firstKey = key;
                node.prevKey = undefined;
            }
            if (node.type === 'item') node.index = index++;
            // Only count sections and items when determining size so that
            // loaders and separators in RAC/S2 don't influence the emptyState determination
            if (node.type === 'section' || node.type === 'item') size++;
            last = node;
            // Set nextKey as undefined since this might be the last node
            // If it isn't the last node, last.nextKey will properly set at start of new loop
            last.nextKey = undefined;
        }
        this._size = size;
        this.lastKey = last?.key ?? null;
    }
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this._size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        return node ? node.prevKey ?? null : null;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        return node ? node.nextKey ?? null : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(key) {
        return this.keyMap.get(key) ?? null;
    }
    at(idx) {
        const keys = [
            ...this.getKeys()
        ];
        return this.getItem(keys[idx]);
    }
    getChildren(key) {
        let node = this.keyMap.get(key);
        return node?.childNodes || [];
    }
}



//# sourceMappingURL=ListCollection.mjs.map


/***/ },

/***/ 40447
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ $b14b6f590b50af39$export$ba9d38c0f1bf2b36),
/* harmony export */   p: () => (/* binding */ $b14b6f590b50af39$export$2f645645f7bca764)
/* harmony export */ });
/* harmony import */ var _ListCollection_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94447);
/* harmony import */ var _selection_useMultipleSelectionState_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74219);
/* harmony import */ var _selection_SelectionManager_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93854);
/* harmony import */ var _collections_useCollection_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61052);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96540);






/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $b14b6f590b50af39$export$2f645645f7bca764(props) {
    let { filter: filter, layoutDelegate: layoutDelegate } = props;
    let selectionState = (0, _selection_useMultipleSelectionState_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useMultipleSelectionState */ .R)(props);
    let disabledKeys = (0, react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let factory = (0, react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((nodes)=>filter ? new (0, _ListCollection_mjs__WEBPACK_IMPORTED_MODULE_0__/* .ListCollection */ .J)(filter(nodes)) : new (0, _ListCollection_mjs__WEBPACK_IMPORTED_MODULE_0__/* .ListCollection */ .J)(nodes), [
        filter
    ]);
    let context = (0, react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>({
            suppressTextValueWarning: props.suppressTextValueWarning
        }), [
        props.suppressTextValueWarning
    ]);
    let collection = (0, _collections_useCollection_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useCollection */ .G)(props, factory, context);
    let selectionManager = (0, react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>new (0, _selection_SelectionManager_mjs__WEBPACK_IMPORTED_MODULE_2__/* .SelectionManager */ .Y)(collection, selectionState, {
            layoutDelegate: layoutDelegate
        }), [
        collection,
        selectionState,
        layoutDelegate
    ]);
    $b14b6f590b50af39$var$useFocusedKeyReset(collection, selectionManager);
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: selectionManager
    };
}
function $b14b6f590b50af39$export$ba9d38c0f1bf2b36(state, filterFn) {
    let collection = (0, react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>filterFn ? state.collection.filter(filterFn) : state.collection, [
        state.collection,
        filterFn
    ]);
    let selectionManager = state.selectionManager.withCollection(collection);
    $b14b6f590b50af39$var$useFocusedKeyReset(collection, selectionManager);
    return {
        collection: collection,
        selectionManager: selectionManager,
        disabledKeys: state.disabledKeys
    };
}
function $b14b6f590b50af39$var$useFocusedKeyReset(collection, selectionManager) {
    // Reset focused key if that item is deleted from the collection.
    const cachedCollection = (0, react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    (0, react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (selectionManager.focusedKey != null && !collection.getItem(selectionManager.focusedKey) && cachedCollection.current) {
            // Walk forward in the old collection to find the next key that still exists in the new collection.
            let key = cachedCollection.current.getKeyAfter(selectionManager.focusedKey);
            let nextFocusedKey = null;
            while(key != null){
                let node = collection.getItem(key);
                if (node && node.type === 'item' && !selectionManager.isDisabled(key)) {
                    nextFocusedKey = key;
                    break;
                }
                key = cachedCollection.current.getKeyAfter(key);
            }
            // If no such key exists, walk backward.
            if (nextFocusedKey == null) {
                key = cachedCollection.current.getKeyBefore(selectionManager.focusedKey);
                while(key != null){
                    let node = collection.getItem(key);
                    if (node && node.type === 'item' && !selectionManager.isDisabled(key)) {
                        nextFocusedKey = key;
                        break;
                    }
                    key = cachedCollection.current.getKeyBefore(key);
                }
            }
            selectionManager.setFocusedKey(nextFocusedKey);
        }
        cachedCollection.current = collection;
    }, [
        collection,
        selectionManager
    ]);
}



//# sourceMappingURL=useListState.mjs.map


/***/ }

}]);