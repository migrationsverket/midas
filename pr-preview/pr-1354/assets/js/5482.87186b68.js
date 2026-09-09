"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5482],{

/***/ 48697
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ X)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("x", __iconNode);


//# sourceMappingURL=x.js.map


/***/ },

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

/***/ 17282
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  vw: () => (/* binding */ $3df3ddf5bafbc7b1$export$3288d34c523a1192),
  CR: () => (/* binding */ $3df3ddf5bafbc7b1$export$67ea30858aaf75e3),
  TB: () => (/* binding */ $3df3ddf5bafbc7b1$export$5b07b5dd2cbd96e3),
  LY: () => (/* binding */ $3df3ddf5bafbc7b1$export$f9fef0f55402315b),
  sM: () => (/* binding */ $3df3ddf5bafbc7b1$export$e755ce3685dd0ca9)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Button.mjs
var Button = __webpack_require__(93426);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Collection.mjs
var Collection = __webpack_require__(53658);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Label.mjs
var Label = __webpack_require__(37820);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/ListBox.mjs + 3 modules
var ListBox = __webpack_require__(86670);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Autocomplete.mjs
var Autocomplete = __webpack_require__(77314);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/SelectionIndicator.mjs
var SelectionIndicator = __webpack_require__(17863);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/SharedElementTransition.mjs
var SharedElementTransition = __webpack_require__(17062);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Text.mjs
var Text = __webpack_require__(20987);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
;// ./node_modules/react-aria/dist/private/gridlist/utils.mjs
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
 */ const $c1c90317e8bffe4d$export$5b9bb410392e3991 = new WeakMap();
function $c1c90317e8bffe4d$export$f45c25170b9a99c2(state, key) {
    let { id: id } = $c1c90317e8bffe4d$export$5b9bb410392e3991.get(state) ?? {};
    if (!id) throw new Error('Unknown list');
    return `${id}-${$c1c90317e8bffe4d$export$e0c709538cb8ae18(key)}`;
}
function $c1c90317e8bffe4d$export$e0c709538cb8ae18(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}



//# sourceMappingURL=utils.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/grid/useGridSelectionAnnouncement.mjs
var useGridSelectionAnnouncement = __webpack_require__(53140);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/useHasTabbableChild.mjs
var useHasTabbableChild = __webpack_require__(16466);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/grid/useHighlightSelectionDescription.mjs
var useHighlightSelectionDescription = __webpack_require__(62755);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useId.mjs + 1 modules
var useId = __webpack_require__(19633);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/useSelectableList.mjs
var useSelectableList = __webpack_require__(70353);
;// ./node_modules/react-aria/dist/private/gridlist/useGridList.mjs









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







function $34d813d3524a584a$export$664f9155035607eb(props, state, ref) {
    let { isVirtualized: isVirtualized, keyboardDelegate: keyboardDelegate, layoutDelegate: layoutDelegate, onAction: onAction, disallowTypeAhead: disallowTypeAhead, linkBehavior: linkBehavior = 'action', keyboardNavigationBehavior: keyboardNavigationBehavior = 'arrow', escapeKeyBehavior: escapeKeyBehavior = 'clearSelection', shouldSelectOnPressUp: shouldSelectOnPressUp } = props;
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let { listProps: listProps } = (0, useSelectableList/* useSelectableList */.y)({
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        ref: ref,
        keyboardDelegate: keyboardDelegate,
        layoutDelegate: layoutDelegate,
        isVirtualized: isVirtualized,
        selectOnFocus: state.selectionManager.selectionBehavior === 'replace',
        shouldFocusWrap: props.shouldFocusWrap,
        linkBehavior: linkBehavior,
        disallowTypeAhead: disallowTypeAhead,
        autoFocus: props.autoFocus,
        escapeKeyBehavior: escapeKeyBehavior,
        UNSTABLE_focusOnEntry: props.UNSTABLE_focusOnEntry
    });
    let id = (0, useId/* useId */.Bi)(props.id);
    (0, $c1c90317e8bffe4d$export$5b9bb410392e3991).set(state, {
        id: id,
        onAction: onAction,
        linkBehavior: linkBehavior,
        keyboardNavigationBehavior: keyboardNavigationBehavior,
        shouldSelectOnPressUp: shouldSelectOnPressUp
    });
    let descriptionProps = (0, useHighlightSelectionDescription/* useHighlightSelectionDescription */.m)({
        selectionManager: state.selectionManager,
        hasItemActions: !!onAction
    });
    let hasTabbableChild = (0, useHasTabbableChild/* useHasTabbableChild */.$)(ref, {
        isDisabled: state.collection.size !== 0
    });
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        labelable: true
    });
    let gridProps = (0, mergeProps/* mergeProps */.v)(domProps, {
        role: 'grid',
        id: id,
        'aria-multiselectable': state.selectionManager.selectionMode === 'multiple' ? 'true' : undefined
    }, // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    state.collection.size === 0 ? {
        tabIndex: hasTabbableChild ? -1 : 0
    } : listProps, descriptionProps);
    if (isVirtualized) {
        gridProps['aria-rowcount'] = state.collection.size;
        gridProps['aria-colcount'] = 1;
    }
    (0, useGridSelectionAnnouncement/* useGridSelectionAnnouncement */.H)({}, state);
    return {
        gridProps: gridProps
    };
}



//# sourceMappingURL=useGridList.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/ListKeyboardDelegate.mjs
var ListKeyboardDelegate = __webpack_require__(88430);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/label/useField.mjs
var useField = __webpack_require__(80439);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusWithin.mjs
var useFocusWithin = __webpack_require__(75655);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/I18nProvider.mjs + 2 modules
var I18nProvider = __webpack_require__(78352);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria/dist/private/tag/useTagGroup.mjs









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







const $223860f9cb8a07a2$export$653eddfc964b0f8a = new WeakMap();
function $223860f9cb8a07a2$export$4f8b5cda58b7e8ff(props, state, ref) {
    let { direction: direction } = (0, I18nProvider/* useLocale */.Y)();
    let keyboardDelegate = props.keyboardDelegate || new (0, ListKeyboardDelegate/* ListKeyboardDelegate */.n)({
        collection: state.collection,
        ref: ref,
        orientation: 'horizontal',
        direction: direction,
        disabledKeys: state.disabledKeys,
        disabledBehavior: state.selectionManager.disabledBehavior
    });
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, useField/* useField */.M)({
        ...props,
        labelElementType: 'span'
    });
    let { gridProps: gridProps } = (0, $34d813d3524a584a$export$664f9155035607eb)({
        ...props,
        ...fieldProps,
        keyboardDelegate: keyboardDelegate,
        shouldFocusWrap: true,
        linkBehavior: 'override',
        keyboardNavigationBehavior: 'tab'
    }, state, ref);
    let [isFocusWithin, setFocusWithin] = (0, react.useState)(false);
    let { focusWithinProps: focusWithinProps } = (0, useFocusWithin/* useFocusWithin */.R)({
        onFocusWithinChange: setFocusWithin
    });
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props);
    // If the last tag is removed, focus the container.
    let prevCount = (0, react.useRef)(state.collection.size);
    (0, react.useEffect)(()=>{
        if (ref.current && prevCount.current > 0 && state.collection.size === 0 && isFocusWithin) ref.current.focus();
        prevCount.current = state.collection.size;
    }, [
        state.collection.size,
        isFocusWithin,
        ref
    ]);
    $223860f9cb8a07a2$export$653eddfc964b0f8a.set(state, {
        onRemove: props.onRemove
    });
    return {
        gridProps: (0, mergeProps/* mergeProps */.v)(gridProps, domProps, {
            role: state.collection.size ? 'grid' : 'group',
            'aria-atomic': false,
            'aria-relevant': 'additions',
            'aria-live': isFocusWithin ? 'polite' : 'off',
            ...focusWithinProps,
            ...fieldProps
        }),
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}



//# sourceMappingURL=useTagGroup.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/ar-AE.mjs
var $20280e7751d18882$exports = {};
$20280e7751d18882$exports = {
    "removeButtonLabel": `\u{625}\u{632}\u{627}\u{644}\u{629}`,
    "removeDescription": `\u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} \u{645}\u{641}\u{62A}\u{627}\u{62D} DELETE \u{644}\u{625}\u{632}\u{627}\u{644}\u{629} \u{639}\u{644}\u{627}\u{645}\u{629}.`
};



//# sourceMappingURL=ar-AE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/bg-BG.mjs
var $f1187d4416e18442$exports = {};
$f1187d4416e18442$exports = {
    "removeButtonLabel": `\u{41F}\u{440}\u{435}\u{43C}\u{430}\u{445}\u{432}\u{430}\u{43D}\u{435}`,
    "removeDescription": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Delete, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{440}\u{435}\u{43C}\u{430}\u{445}\u{43D}\u{435}\u{442}\u{435} \u{43C}\u{430}\u{440}\u{43A}\u{435}\u{440}\u{430}.`
};



//# sourceMappingURL=bg-BG.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/cs-CZ.mjs
var $be15883e6181a852$exports = {};
$be15883e6181a852$exports = {
    "removeButtonLabel": `Odebrat`,
    "removeDescription": `Stisknut\xedm kl\xe1vesy Delete odeberete zna\u{10D}ku.`
};



//# sourceMappingURL=cs-CZ.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/da-DK.mjs
var $87bbc6bd6a045cd5$exports = {};
$87bbc6bd6a045cd5$exports = {
    "removeButtonLabel": `Fjern`,
    "removeDescription": `Tryk p\xe5 Slet for at fjerne tag.`
};



//# sourceMappingURL=da-DK.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/de-DE.mjs
var $9205ee863542906a$exports = {};
$9205ee863542906a$exports = {
    "removeButtonLabel": `Entfernen`,
    "removeDescription": `Auf \u{201E}L\xf6schen\u{201C} dr\xfccken, um das Tag zu entfernen.`
};



//# sourceMappingURL=de-DE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/el-GR.mjs
var $cbf667bd46d90afe$exports = {};
$cbf667bd46d90afe$exports = {
    "removeButtonLabel": `\u{39A}\u{3B1}\u{3C4}\u{3AC}\u{3C1}\u{3B3}\u{3B7}\u{3C3}\u{3B7}`,
    "removeDescription": `\u{3A0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} \u{394}\u{3B9}\u{3B1}\u{3B3}\u{3C1}\u{3B1}\u{3C6}\u{3AE} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BA}\u{3B1}\u{3C4}\u{3B1}\u{3C1}\u{3B3}\u{3AE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7}\u{3BD} \u{3B5}\u{3C4}\u{3B9}\u{3BA}\u{3AD}\u{3C4}\u{3B1}.`
};



//# sourceMappingURL=el-GR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/en-US.mjs
var $86befe85692caa5e$exports = {};
$86befe85692caa5e$exports = {
    "removeDescription": `Press Delete to remove tag.`,
    "removeButtonLabel": `Remove`
};



//# sourceMappingURL=en-US.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/es-ES.mjs
var $820860ff69b4d53e$exports = {};
$820860ff69b4d53e$exports = {
    "removeButtonLabel": `Quitar`,
    "removeDescription": `Pulse Eliminar para quitar la etiqueta.`
};



//# sourceMappingURL=es-ES.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/et-EE.mjs
var $69db28e4ed958394$exports = {};
$69db28e4ed958394$exports = {
    "removeButtonLabel": `Eemalda`,
    "removeDescription": `Sildi eemaldamiseks vajutage kustutusklahvi Delete.`
};



//# sourceMappingURL=et-EE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/fi-FI.mjs
var $39d81641bfeda51f$exports = {};
$39d81641bfeda51f$exports = {
    "removeButtonLabel": `Poista`,
    "removeDescription": `Poista tunniste painamalla Poista-painiketta.`
};



//# sourceMappingURL=fi-FI.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/fr-FR.mjs
var $25dc53e39d7a27ee$exports = {};
$25dc53e39d7a27ee$exports = {
    "removeButtonLabel": `Supprimer`,
    "removeDescription": `Appuyez sur Supprimer pour supprimer l\u{2019}\xe9tiquette.`
};



//# sourceMappingURL=fr-FR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/he-IL.mjs
var $5e9e2094eb0f96cf$exports = {};
$5e9e2094eb0f96cf$exports = {
    "removeButtonLabel": `\u{5D4}\u{5E1}\u{5E8}`,
    "removeDescription": `\u{5DC}\u{5D7}\u{5E5} \u{5E2}\u{5DC} \u{5DE}\u{5D7}\u{5E7} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5E1}\u{5D9}\u{5E8} \u{5EA}\u{5D2}.`
};



//# sourceMappingURL=he-IL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/hr-HR.mjs
var $6157c9954e0b6191$exports = {};
$6157c9954e0b6191$exports = {
    "removeButtonLabel": `Ukloni`,
    "removeDescription": `Pritisnite Delete za uklanjanje oznake.`
};



//# sourceMappingURL=hr-HR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/hu-HU.mjs
var $f0c9ecd45a629623$exports = {};
$f0c9ecd45a629623$exports = {
    "removeButtonLabel": `Elt\xe1vol\xedt\xe1s`,
    "removeDescription": `Nyomja meg a Delete billenty\u{171}t a c\xedmke elt\xe1vol\xedt\xe1s\xe1hoz.`
};



//# sourceMappingURL=hu-HU.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/it-IT.mjs
var $2dd1894272e6d5f5$exports = {};
$2dd1894272e6d5f5$exports = {
    "removeButtonLabel": `Rimuovi`,
    "removeDescription": `Premi Elimina per rimuovere il tag.`
};



//# sourceMappingURL=it-IT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/ja-JP.mjs
var $a2ec1bfcd7856caa$exports = {};
$a2ec1bfcd7856caa$exports = {
    "removeButtonLabel": `\u{524A}\u{9664}`,
    "removeDescription": `\u{30BF}\u{30B0}\u{3092}\u{524A}\u{9664}\u{3059}\u{308B}\u{306B}\u{306F}\u{3001}Delete \u{30AD}\u{30FC}\u{3092}\u{62BC}\u{3057}\u{307E}\u{3059}\u{3002}`
};



//# sourceMappingURL=ja-JP.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/ko-KR.mjs
var $0b4f3a4ee068274f$exports = {};
$0b4f3a4ee068274f$exports = {
    "removeButtonLabel": `\u{C81C}\u{AC70}`,
    "removeDescription": `\u{D0DC}\u{ADF8}\u{B97C} \u{C81C}\u{AC70}\u{D558}\u{B824}\u{BA74} Delete \u{D0A4}\u{B97C} \u{B204}\u{B974}\u{C2ED}\u{C2DC}\u{C624}.`
};



//# sourceMappingURL=ko-KR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/lt-LT.mjs
var $94ea096d46664c2a$exports = {};
$94ea096d46664c2a$exports = {
    "removeButtonLabel": `Pa\u{161}alinti`,
    "removeDescription": `Nor\u{117}dami pa\u{161}alinti \u{17E}ym\u{105}, paspauskite \u{201E}Delete\u{201C} klavi\u{161}\u{105}.`
};



//# sourceMappingURL=lt-LT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/lv-LV.mjs
var $5ab25ba52a4fc5fe$exports = {};
$5ab25ba52a4fc5fe$exports = {
    "removeButtonLabel": `No\u{146}emt`,
    "removeDescription": `Nospiediet Delete [Dz\u{113}st], lai no\u{146}emtu tagu.`
};



//# sourceMappingURL=lv-LV.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/nb-NO.mjs
var $8664c125579aad3b$exports = {};
$8664c125579aad3b$exports = {
    "removeButtonLabel": `Fjern`,
    "removeDescription": `Trykk p\xe5 Slett for \xe5 fjerne taggen.`
};



//# sourceMappingURL=nb-NO.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/nl-NL.mjs
var $8b8307f7979e9601$exports = {};
$8b8307f7979e9601$exports = {
    "removeButtonLabel": `Verwijderen`,
    "removeDescription": `Druk op Verwijderen om de tag te verwijderen.`
};



//# sourceMappingURL=nl-NL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/pl-PL.mjs
var $fc2b20ad3e18d428$exports = {};
$fc2b20ad3e18d428$exports = {
    "removeButtonLabel": `Usu\u{144}`,
    "removeDescription": `Naci\u{15B}nij Usu\u{144}, aby usun\u{105}\u{107} znacznik.`
};



//# sourceMappingURL=pl-PL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/pt-BR.mjs
var $10f26aa1cfdb1c9f$exports = {};
$10f26aa1cfdb1c9f$exports = {
    "removeButtonLabel": `Remover`,
    "removeDescription": `Pressione Delete para remover a tag.`
};



//# sourceMappingURL=pt-BR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/pt-PT.mjs
var $32bc609604120001$exports = {};
$32bc609604120001$exports = {
    "removeButtonLabel": `Eliminar`,
    "removeDescription": `Prima Delete para eliminar a tag.`
};



//# sourceMappingURL=pt-PT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/ro-RO.mjs
var $3bbcff21376a0476$exports = {};
$3bbcff21376a0476$exports = {
    "removeButtonLabel": `\xcendep\u{103}rta\u{163}i`,
    "removeDescription": `Ap\u{103}sa\u{21B}i pe Delete (\u{218}tergere) pentru a elimina eticheta.`
};



//# sourceMappingURL=ro-RO.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/ru-RU.mjs
var $54717c47d92e7a92$exports = {};
$54717c47d92e7a92$exports = {
    "removeButtonLabel": `\u{423}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{44C}`,
    "removeDescription": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} DELETE, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{443}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{44C} \u{442}\u{435}\u{433}.`
};



//# sourceMappingURL=ru-RU.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/sk-SK.mjs
var $59aa54360d27f339$exports = {};
$59aa54360d27f339$exports = {
    "removeButtonLabel": `Odstr\xe1ni\u{165}`,
    "removeDescription": `Ak chcete odstr\xe1ni\u{165} zna\u{10D}ku, stla\u{10D}te kl\xe1ves Delete.`
};



//# sourceMappingURL=sk-SK.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/sl-SI.mjs
var $de07b4eb19bfbc3a$exports = {};
$de07b4eb19bfbc3a$exports = {
    "removeButtonLabel": `Odstrani`,
    "removeDescription": `Pritisnite Delete, da odstranite oznako.`
};



//# sourceMappingURL=sl-SI.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/sr-SP.mjs
var $e99d9c77cf4a7b4f$exports = {};
$e99d9c77cf4a7b4f$exports = {
    "removeButtonLabel": `Ukloni`,
    "removeDescription": `Pritisnite Obri\u{161}i da biste uklonili oznaku.`
};



//# sourceMappingURL=sr-SP.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/sv-SE.mjs
var $710e3e95d2a199c9$exports = {};
$710e3e95d2a199c9$exports = {
    "removeButtonLabel": `Ta bort`,
    "removeDescription": `Tryck p\xe5 Radera f\xf6r att ta bort taggen.`
};



//# sourceMappingURL=sv-SE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/tr-TR.mjs
var $0e55c776c1bcfcb6$exports = {};
$0e55c776c1bcfcb6$exports = {
    "removeButtonLabel": `Kald\u{131}r`,
    "removeDescription": `Etiketi kald\u{131}rmak i\xe7in Sil tu\u{15F}una bas\u{131}n.`
};



//# sourceMappingURL=tr-TR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/uk-UA.mjs
var $18523129a261d712$exports = {};
$18523129a261d712$exports = {
    "removeButtonLabel": `\u{412}\u{438}\u{43B}\u{443}\u{447}\u{438}\u{442}\u{438}`,
    "removeDescription": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} Delete, \u{449}\u{43E}\u{431} \u{432}\u{438}\u{43B}\u{443}\u{447}\u{438}\u{442}\u{438} \u{442}\u{435}\u{433}.`
};



//# sourceMappingURL=uk-UA.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/zh-CN.mjs
var $2407c222bf8df5ec$exports = {};
$2407c222bf8df5ec$exports = {
    "removeButtonLabel": `\u{5220}\u{9664}`,
    "removeDescription": `\u{6309}\u{4E0B}\u{201C}\u{5220}\u{9664}\u{201D}\u{4EE5}\u{5220}\u{9664}\u{6807}\u{8BB0}\u{3002}`
};



//# sourceMappingURL=zh-CN.mjs.map

;// ./node_modules/react-aria/dist/private/intl/tag/zh-TW.mjs
var $b96bdf8456dd3b44$exports = {};
$b96bdf8456dd3b44$exports = {
    "removeButtonLabel": `\u{79FB}\u{9664}`,
    "removeDescription": `\u{6309} Delete \u{9375}\u{4EE5}\u{79FB}\u{9664}\u{6A19}\u{8A18}\u{3002}`
};



//# sourceMappingURL=zh-TW.mjs.map

;// ./node_modules/react-aria/dist/private/tag/intlStrings.mjs



































var $c861dd473ab3d00c$exports = {};


































$c861dd473ab3d00c$exports = {
    "ar-AE": $20280e7751d18882$exports,
    "bg-BG": $f1187d4416e18442$exports,
    "cs-CZ": $be15883e6181a852$exports,
    "da-DK": $87bbc6bd6a045cd5$exports,
    "de-DE": $9205ee863542906a$exports,
    "el-GR": $cbf667bd46d90afe$exports,
    "en-US": $86befe85692caa5e$exports,
    "es-ES": $820860ff69b4d53e$exports,
    "et-EE": $69db28e4ed958394$exports,
    "fi-FI": $39d81641bfeda51f$exports,
    "fr-FR": $25dc53e39d7a27ee$exports,
    "he-IL": $5e9e2094eb0f96cf$exports,
    "hr-HR": $6157c9954e0b6191$exports,
    "hu-HU": $f0c9ecd45a629623$exports,
    "it-IT": $2dd1894272e6d5f5$exports,
    "ja-JP": $a2ec1bfcd7856caa$exports,
    "ko-KR": $0b4f3a4ee068274f$exports,
    "lt-LT": $94ea096d46664c2a$exports,
    "lv-LV": $5ab25ba52a4fc5fe$exports,
    "nb-NO": $8664c125579aad3b$exports,
    "nl-NL": $8b8307f7979e9601$exports,
    "pl-PL": $fc2b20ad3e18d428$exports,
    "pt-BR": $10f26aa1cfdb1c9f$exports,
    "pt-PT": $32bc609604120001$exports,
    "ro-RO": $3bbcff21376a0476$exports,
    "ru-RU": $54717c47d92e7a92$exports,
    "sk-SK": $59aa54360d27f339$exports,
    "sl-SI": $de07b4eb19bfbc3a$exports,
    "sr-SP": $e99d9c77cf4a7b4f$exports,
    "sv-SE": $710e3e95d2a199c9$exports,
    "tr-TR": $0e55c776c1bcfcb6$exports,
    "uk-UA": $18523129a261d712$exports,
    "zh-CN": $2407c222bf8df5ec$exports,
    "zh-TW": $b96bdf8456dd3b44$exports
};



//# sourceMappingURL=intlStrings.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useDescription.mjs
var useDescription = __webpack_require__(67010);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var useFocusable = __webpack_require__(55602);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/chain.mjs
var chain = __webpack_require__(96558);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/focusSafely.mjs
var focusSafely = __webpack_require__(75105);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(62975);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/FocusScope.mjs
var FocusScope = __webpack_require__(46686);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/domHelpers.mjs
var domHelpers = __webpack_require__(1612);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/getScrollParent.mjs
var getScrollParent = __webpack_require__(99597);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(35692);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/scrollIntoView.mjs + 1 modules
var scrollIntoView = __webpack_require__(58796);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/useSelectableItem.mjs
var useSelectableItem = __webpack_require__(1904);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/openLink.mjs
var openLink = __webpack_require__(46271);
;// ./node_modules/react-aria/dist/private/gridlist/useGridListItem.mjs
















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














const $be7bed9611dd7497$var$EXPANSION_KEYS = {
    expand: {
        ltr: 'ArrowRight',
        rtl: 'ArrowLeft'
    },
    collapse: {
        ltr: 'ArrowLeft',
        rtl: 'ArrowRight'
    }
};
function $be7bed9611dd7497$export$9610e69494fadfd2(props, state, ref) {
    // Copied from useGridCell + some modifications to make it not so grid specific
    let { node: node, isVirtualized: isVirtualized, focusMode: focusMode = 'row', allowsArrowNavigation: allowsArrowNavigation } = props;
    // let stringFormatter = useLocalizedStringFormatter(intlMessages, '@react-aria/gridlist');
    let { direction: direction } = (0, I18nProvider/* useLocale */.Y)();
    let { onAction: onAction, linkBehavior: linkBehavior, keyboardNavigationBehavior: keyboardNavigationBehavior, shouldSelectOnPressUp: shouldSelectOnPressUp } = (0, $c1c90317e8bffe4d$export$5b9bb410392e3991).get(state);
    let descriptionId = (0, useId/* useSlotId */.X1)();
    // We need to track the key of the item at the time it was last focused so that we force
    // focus to go to the item when the DOM node is reused for a different item in a virtualizer.
    let keyWhenFocused = (0, react.useRef)(null);
    let focus = ()=>{
        if (ref.current === null) return;
        if (focusMode === 'child') {
            // If focus is already on a focusable child within the row, early return so we don't shift focus
            if ((0, DOMFunctions/* isFocusWithin */.ae)(ref.current) && ref.current !== (0, DOMFunctions/* getActiveElement */.bq)((0, domHelpers/* getOwnerDocument */.TW)(ref.current))) return;
            let treeWalker = (0, FocusScope/* getFocusableTreeWalker */.N$)(ref.current, {
                tabbable: true
            });
            let focusable = treeWalker.firstChild();
            if (focusable) {
                (0, focusSafely/* focusSafely */.l)(focusable);
                (0, scrollIntoView/* scrollIntoViewport */.o)(focusable, {
                    containingElement: (0, getScrollParent/* getScrollParent */.m)(focusable)
                });
                return;
            }
        }
        // Don't shift focus to the row if the active element is a element within the row already
        // (e.g. clicking on a row button)
        if (keyWhenFocused.current != null && node.key !== keyWhenFocused.current || !(0, DOMFunctions/* isFocusWithin */.ae)(ref.current)) (0, focusSafely/* focusSafely */.l)(ref.current);
    };
    let treeGridRowProps = {};
    let hasChildRows = props.hasChildItems;
    let hasLink = state.selectionManager.isLink(node.key);
    if (node != null && 'expandedKeys' in state) {
        // TODO: ideally node.hasChildNodes would be a way to tell if a row has child nodes, but the row's contents make it so that value is always
        // true...
        let children = state.collection.getChildren?.(node.key);
        hasChildRows = hasChildRows || [
            ...children ?? []
        ].length > 1;
        if (onAction == null && !hasLink && state.selectionManager.selectionMode === 'none' && hasChildRows) onAction = ()=>state.toggleKey(node.key);
        let isExpanded = hasChildRows ? state.expandedKeys.has(node.key) : undefined;
        let setSize = 1;
        let index = node.index;
        if (node.level >= 0 && node?.parentKey != null) {
            let parent = state.collection.getItem(node.parentKey);
            if (parent) {
                // siblings must exist because our original node exists
                let siblings = $be7bed9611dd7497$var$getDirectChildren(parent, state.collection);
                setSize = [
                    ...siblings
                ].filter((row)=>row.type === 'item').length;
                if (index > 0 && siblings[0].type !== 'item') index -= 1; // subtract one for the parent item's content node
            }
        } else setSize = [
            ...state.collection
        ].filter((row)=>row.level === 0 && row.type === 'item').length;
        treeGridRowProps = {
            'aria-expanded': isExpanded,
            'aria-level': node.level + 1,
            'aria-posinset': index + 1,
            'aria-setsize': setSize
        };
    }
    let { itemProps: itemProps, ...itemStates } = (0, useSelectableItem/* useSelectableItem */.p)({
        selectionManager: state.selectionManager,
        key: node.key,
        ref: ref,
        isVirtualized: isVirtualized,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp || shouldSelectOnPressUp,
        onAction: onAction || node.props?.onAction ? (0, chain/* chain */.c)(node.props?.onAction, onAction ? ()=>onAction(node.key) : undefined) : undefined,
        focus: focus,
        linkBehavior: linkBehavior
    });
    let onKeyDownCapture = (e)=>{
        let activeElement = (0, DOMFunctions/* getActiveElement */.bq)((0, domHelpers/* getOwnerDocument */.TW)(ref.current));
        if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e)) || !ref.current || !activeElement) return;
        let walker = (0, FocusScope/* getFocusableTreeWalker */.N$)(ref.current);
        walker.currentNode = activeElement;
        if ($be7bed9611dd7497$var$handleTreeExpansionKeys(e, state, node, hasChildRows, direction, activeElement, ref.current, allowsArrowNavigation)) return;
        switch(e.key){
            case 'ArrowLeft':
                if (keyboardNavigationBehavior === 'arrow') {
                    // Find the next focusable element within the row.
                    let focusable = direction === 'rtl' ? walker.nextNode() : walker.previousNode();
                    if (focusable) {
                        e.preventDefault();
                        e.stopPropagation();
                        (0, focusSafely/* focusSafely */.l)(focusable);
                        (0, scrollIntoView/* scrollIntoViewport */.o)(focusable, {
                            containingElement: (0, getScrollParent/* getScrollParent */.m)(ref.current)
                        });
                    } else {
                        // If there is no next focusable child, then return focus back to the row
                        e.preventDefault();
                        e.stopPropagation();
                        if (direction === 'rtl') {
                            (0, focusSafely/* focusSafely */.l)(ref.current);
                            (0, scrollIntoView/* scrollIntoViewport */.o)(ref.current, {
                                containingElement: (0, getScrollParent/* getScrollParent */.m)(ref.current)
                            });
                        } else {
                            walker.currentNode = ref.current;
                            let lastElement = $be7bed9611dd7497$var$last(walker);
                            // oxlint-disable-next-line max-depth
                            if (lastElement) {
                                (0, focusSafely/* focusSafely */.l)(lastElement);
                                (0, scrollIntoView/* scrollIntoViewport */.o)(lastElement, {
                                    containingElement: (0, getScrollParent/* getScrollParent */.m)(ref.current)
                                });
                            }
                        }
                    }
                }
                break;
            case 'ArrowRight':
                if (keyboardNavigationBehavior === 'arrow') {
                    let focusable = direction === 'rtl' ? walker.previousNode() : walker.nextNode();
                    if (focusable) {
                        e.preventDefault();
                        e.stopPropagation();
                        (0, focusSafely/* focusSafely */.l)(focusable);
                        (0, scrollIntoView/* scrollIntoViewport */.o)(focusable, {
                            containingElement: (0, getScrollParent/* getScrollParent */.m)(ref.current)
                        });
                    } else {
                        e.preventDefault();
                        e.stopPropagation();
                        if (direction === 'ltr') {
                            (0, focusSafely/* focusSafely */.l)(ref.current);
                            (0, scrollIntoView/* scrollIntoViewport */.o)(ref.current, {
                                containingElement: (0, getScrollParent/* getScrollParent */.m)(ref.current)
                            });
                        } else {
                            walker.currentNode = ref.current;
                            let lastElement = $be7bed9611dd7497$var$last(walker);
                            // oxlint-disable-next-line max-depth
                            if (lastElement) {
                                (0, focusSafely/* focusSafely */.l)(lastElement);
                                (0, scrollIntoView/* scrollIntoViewport */.o)(lastElement, {
                                    containingElement: (0, getScrollParent/* getScrollParent */.m)(ref.current)
                                });
                            }
                        }
                    }
                }
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                // Prevent this event from reaching row children, e.g. menu buttons. We want arrow keys to navigate
                // to the row above/below instead. We need to re-dispatch the event from a higher parent so it still
                // bubbles and gets handled by useSelectableCollection.
                if (!e.altKey && (0, DOMFunctions/* nodeContains */.sD)(ref.current, (0, DOMFunctions/* getEventTarget */.wt)(e))) {
                    e.stopPropagation();
                    e.preventDefault();
                    ref.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                }
                break;
        }
    };
    let onFocus = (e)=>{
        keyWhenFocused.current = node.key;
        if ((0, DOMFunctions/* getEventTarget */.wt)(e) !== ref.current) {
            // useSelectableItem only handles setting the focused key when
            // the focused element is the row itself. We also want to
            // set the focused key when a child element receives focus.
            // If focus is currently visible (e.g. the user is navigating with the keyboard),
            // then skip this. We want to restore focus to the previously focused row
            // in that case since the list should act like a single tab stop.
            if (!(0, useFocusVisible/* isFocusVisible */.pP)()) state.selectionManager.setFocusedKey(node.key);
            return;
        }
        // if focus goes back to cell from child, make sure we don't refocus the cell if we are in focusMode=child
        // since that would be a focus trap
        if (focusMode === 'child' && e.relatedTarget && (0, DOMFunctions/* nodeContains */.sD)(ref.current, e.relatedTarget)) return;
        // If the cell itself is focused, wait a frame so that focus finishes propagating
        // up to the tree, and move focus to a focusable child if possible.
        requestAnimationFrame(()=>{
            if (focusMode === 'child' && (0, DOMFunctions/* getActiveElement */.bq)((0, domHelpers/* getOwnerDocument */.TW)(ref.current)) === ref.current) focus();
        });
    };
    let onKeyDown = (e)=>{
        let activeElement = (0, DOMFunctions/* getActiveElement */.bq)((0, domHelpers/* getOwnerDocument */.TW)(ref.current));
        if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e)) || !ref.current || !activeElement) return;
        if (keyboardNavigationBehavior === 'tab') {
            // Stop propagation for all events that originate from the children of the gridlist item since we don't want to trigger
            // grid level interactions (row navigation/typeselect/etc)
            // exception made for Tab since that needs to propagate to useSelectableCollection to tab out of the gridlist, might be others?
            if ((0, DOMFunctions/* getEventTarget */.wt)(e) !== ref.current && e.key !== 'Tab') {
                e.stopPropagation();
                return;
            }
            if ($be7bed9611dd7497$var$handleTreeExpansionKeys(e, state, node, hasChildRows, direction, activeElement, ref.current, allowsArrowNavigation)) return;
        }
        switch(e.key){
            case 'Tab':
                if (keyboardNavigationBehavior === 'tab') {
                    // If there is another focusable element within this item, stop propagation so the tab key
                    // is handled by the browser and not by useSelectableCollection (which would take us out of the list).
                    let walker = (0, FocusScope/* getFocusableTreeWalker */.N$)(ref.current, {
                        tabbable: true
                    });
                    walker.currentNode = activeElement;
                    let next = e.shiftKey ? walker.previousNode() : walker.nextNode();
                    if (next) e.stopPropagation();
                }
        }
    };
    let syntheticLinkProps = (0, openLink/* useSyntheticLinkProps */.HI)(node.props);
    let linkProps = itemStates.hasAction ? syntheticLinkProps : {};
    // TODO: re-add when we get translations and fix this for iOS VO
    // let rowAnnouncement;
    // if (onAction) {
    //   rowAnnouncement = stringFormatter.format('hasActionAnnouncement');
    // } else if (hasLink) {
    //   rowAnnouncement = stringFormatter.format('hasLinkAnnouncement', {
    //     link: node.props.href
    //   });
    // }
    // oxlint-disable-next-line react/react-compiler
    let rowProps = (0, mergeProps/* mergeProps */.v)(itemProps, linkProps, {
        role: 'row',
        onKeyDownCapture: keyboardNavigationBehavior === 'arrow' || allowsArrowNavigation ? onKeyDownCapture : undefined,
        onFocus: onFocus,
        // 'aria-label': [(node.textValue || undefined), rowAnnouncement].filter(Boolean).join(', '),
        'aria-label': node['aria-label'] || node.textValue || undefined,
        'aria-selected': state.selectionManager.canSelectItem(node.key) ? state.selectionManager.isSelected(node.key) : undefined,
        'aria-disabled': state.selectionManager.isDisabled(node.key) || undefined,
        'aria-labelledby': descriptionId && (node['aria-label'] || node.textValue) ? `${(0, $c1c90317e8bffe4d$export$f45c25170b9a99c2)(state, node.key)} ${descriptionId}` : undefined,
        id: (0, $c1c90317e8bffe4d$export$f45c25170b9a99c2)(state, node.key)
    });
    if (focusMode === 'child' && allowsArrowNavigation && keyboardNavigationBehavior === 'tab') rowProps.tabIndex = -1;
    // we need to guard against space/enter triggering selection/row link via usePress (from itemProps) so check if propagation
    // is stopped. this also fixes space not working in a textfield in a tree parent row
    let baseOnKeyDown = rowProps.onKeyDown;
    rowProps.onKeyDown = (e)=>{
        onKeyDown(e);
        if (!e.isPropagationStopped()) baseOnKeyDown?.(e);
    };
    if (isVirtualized) {
        let { collection: collection } = state;
        let nodes = [
            ...collection
        ];
        // TODO: refactor ListCollection to store an absolute index of a node's position?
        rowProps['aria-rowindex'] = nodes.find((node)=>node.type === 'section') ? [
            ...collection.getKeys()
        ].filter((key)=>collection.getItem(key)?.type !== 'section').findIndex((key)=>key === node.key) + 1 : node.index + 1;
    }
    let gridCellProps = {
        role: 'gridcell',
        'aria-colindex': 1
    };
    // TODO: should isExpanded and hasChildRows be a item state that gets returned by the hook?
    // oxlint-disable react/react-compiler
    return {
        rowProps: {
            ...(0, mergeProps/* mergeProps */.v)(rowProps, treeGridRowProps)
        },
        gridCellProps: gridCellProps,
        descriptionProps: {
            id: descriptionId
        },
        ...itemStates
    };
// oxlint-enable react/react-compiler
}
function $be7bed9611dd7497$var$handleTreeExpansionKeys(e, state, node, hasChildRows, direction, activeElement, rowRef, allowsArrowNavigation) {
    if (!('expandedKeys' in state) || !allowsArrowNavigation && activeElement !== rowRef) return false;
    if (e.key === $be7bed9611dd7497$var$EXPANSION_KEYS['expand'][direction] && state.selectionManager.focusedKey === node.key && hasChildRows && !state.expandedKeys.has(node.key)) {
        state.toggleKey(node.key);
        e.stopPropagation();
        return true;
    } else if (e.key === $be7bed9611dd7497$var$EXPANSION_KEYS['collapse'][direction] && state.selectionManager.focusedKey === node.key) {
        // If item is collapsible, collapse it; else move to parent
        if (hasChildRows && state.expandedKeys.has(node.key)) {
            state.toggleKey(node.key);
            e.stopPropagation();
            return true;
        } else if (!state.expandedKeys.has(node.key) && node.parentKey && state.collection.getItem(node.parentKey)?.type === 'item') {
            // Item is a leaf or already collapsed, move focus to parent
            state.selectionManager.setFocusedKey(node.parentKey);
            e.stopPropagation();
            return true;
        }
    }
    return false;
}
function $be7bed9611dd7497$var$last(walker) {
    let next = null;
    let last = null;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last);
    return next;
}
function $be7bed9611dd7497$var$getDirectChildren(parent, collection) {
    // We can't assume that we can use firstChildKey because if a person builds a tree using hooks, they would not have access to that property (using type Node vs CollectionNode)
    // Instead, get all children and start at the first node (rather than just using firstChildKey) and only look at its siblings
    let children = collection.getChildren?.(parent.key);
    let childArray = children ? Array.from(children) : [];
    let node = childArray.length > 0 ? childArray[0] : null;
    let siblings = [];
    while(node){
        siblings.push(node);
        node = node.nextKey != null ? collection.getItem(node.nextKey) : null;
    }
    return siblings;
}



//# sourceMappingURL=useGridListItem.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useKeyboard.mjs + 2 modules
var useKeyboard = __webpack_require__(91357);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(57659);
;// ./node_modules/react-aria/dist/private/tag/useTag.mjs














function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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











function $8b763916586fd6a6$export$3f568fff7dff2f03(props, state, ref) {
    let { item: item } = props;
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault($c861dd473ab3d00c$exports))), '@react-aria/tag');
    let buttonId = (0, useId/* useId */.Bi)();
    let { onRemove: onRemove } = (0, $223860f9cb8a07a2$export$653eddfc964b0f8a).get(state) || {};
    let { rowProps: rowProps, gridCellProps: gridCellProps, ...states } = (0, $be7bed9611dd7497$export$9610e69494fadfd2)({
        node: item
    }, state, ref);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { descriptionProps: _, ...stateWithoutDescription } = states;
    let isDisabled = state.disabledKeys.has(item.key) || item.props.isDisabled;
    let { keyboardProps: keyboardProps } = (0, useKeyboard/* useKeyboard */.d)({
        isDisabled: isDisabled,
        shortcuts: {
            Delete: ()=>{
                if (state.selectionManager.isSelected(item.key)) onRemove?.(new Set(state.selectionManager.selectedKeys));
                else onRemove?.(new Set([
                    item.key
                ]));
            },
            Backspace: ()=>{
                if (state.selectionManager.isSelected(item.key)) onRemove?.(new Set(state.selectionManager.selectedKeys));
                else onRemove?.(new Set([
                    item.key
                ]));
            }
        },
        allowRepeats: true
    });
    let modality = (0, useFocusVisible/* useInteractionModality */.lb)();
    if (modality === 'virtual' && typeof window !== 'undefined' && 'ontouchstart' in window) modality = 'pointer';
    let description = onRemove && (modality === 'keyboard' || modality === 'virtual') ? stringFormatter.format('removeDescription') : '';
    let descProps = (0, useDescription/* useDescription */.I)(description);
    let isItemFocused = item.key === state.selectionManager.focusedKey;
    let isFocused = state.selectionManager.focusedKey != null;
    let tabIndex = -1;
    if (!isDisabled && (isItemFocused || !isFocused)) tabIndex = 0;
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(item.props);
    let linkProps = (0, openLink/* useSyntheticLinkProps */.HI)(item.props);
    let { focusableProps: focusableProps } = (0, useFocusable/* useFocusable */.Wc)({
        ...item.props,
        isDisabled: isDisabled
    }, ref);
    return {
        removeButtonProps: {
            'aria-label': stringFormatter.format('removeButtonLabel'),
            'aria-labelledby': `${buttonId} ${rowProps.id}`,
            isDisabled: isDisabled,
            id: buttonId,
            onPress: ()=>onRemove ? onRemove(new Set([
                    item.key
                ])) : null
        },
        rowProps: (0, mergeProps/* mergeProps */.v)(focusableProps, rowProps, domProps, linkProps, {
            tabIndex: tabIndex,
            ...onRemove ? keyboardProps : {},
            'aria-describedby': descProps['aria-describedby']
        }),
        gridCellProps: (0, mergeProps/* mergeProps */.v)(gridCellProps, {
            'aria-errormessage': props['aria-errormessage'],
            'aria-label': props['aria-label']
        }),
        ...stateWithoutDescription,
        allowsRemoving: !!onRemove
    };
}



//# sourceMappingURL=useTag.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(11513);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/BaseCollection.mjs
var BaseCollection = __webpack_require__(2764);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/list/useListState.mjs
var useListState = __webpack_require__(40447);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/useFocusRing.mjs
var useFocusRing = __webpack_require__(66683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useHover.mjs
var useHover = __webpack_require__(68068);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useObjectRef.mjs
var useObjectRef = __webpack_require__(80716);
;// ./node_modules/react-aria-components/dist/private/TagGroup.mjs





















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



















const $3df3ddf5bafbc7b1$export$5b07b5dd2cbd96e3 = /*#__PURE__*/ (0, react.createContext)(null);
const $3df3ddf5bafbc7b1$export$e755ce3685dd0ca9 = /*#__PURE__*/ (0, react.createContext)(null);
const $3df3ddf5bafbc7b1$export$67ea30858aaf75e3 = /*#__PURE__*/ (0, react.forwardRef)(function TagGroup(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $3df3ddf5bafbc7b1$export$5b07b5dd2cbd96e3);
    return /*#__PURE__*/ (0, react).createElement((0, ListBox/* ListStateContext */.DN).Provider, {
        value: null
    }, /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: props.children
    }, (collection)=>/*#__PURE__*/ (0, react).createElement($3df3ddf5bafbc7b1$var$TagGroupInner, {
            props: props,
            forwardedRef: ref,
            collection: collection
        })));
});
function $3df3ddf5bafbc7b1$var$TagGroupInner({ props: props, forwardedRef: ref, collection: collection }) {
    let tagListRef = (0, react.useRef)(null);
    // Extract the user provided id so it doesn't clash with the collection id provided by Autocomplete
    let { id: id, ...otherProps } = props;
    [otherProps, tagListRef] = (0, utils/* useContextProps */.JT)(otherProps, tagListRef, (0, Autocomplete/* SelectableCollectionContext */.Co));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { filter: filter, shouldUseVirtualFocus: shouldUseVirtualFocus, ...DOMCollectionProps } = otherProps;
    let [labelRef, label] = (0, utils/* useSlot */._E)(!props['aria-label'] && !props['aria-labelledby']);
    let tagGroupState = (0, useListState/* useListState */.p)({
        ...DOMCollectionProps,
        children: undefined,
        collection: collection
    });
    // oxlint-disable-next-line react/react-compiler
    let filteredState = (0, useListState/* UNSTABLE_useFilteredListState */.Z)(tagGroupState, filter);
    // Prevent DOM props from going to two places.
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(otherProps, {
        global: true
    });
    let domPropOverrides = Object.fromEntries(Object.entries(domProps).map(([k, val])=>[
            k,
            k === 'id' ? val : undefined
        ]));
    let { gridProps: gridProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, $223860f9cb8a07a2$export$4f8b5cda58b7e8ff)({
        ...DOMCollectionProps,
        ...domPropOverrides,
        label: label
    }, filteredState, tagListRef);
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        render: props.render,
        ...domProps,
        id: id,
        ref: ref,
        slot: props.slot || undefined,
        className: props.className ?? 'react-aria-TagGroup',
        style: props.style
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                (0, Label/* LabelContext */.I),
                {
                    ...labelProps,
                    elementType: 'span',
                    ref: labelRef
                }
            ],
            [
                $3df3ddf5bafbc7b1$export$e755ce3685dd0ca9,
                {
                    ...gridProps,
                    ref: tagListRef
                }
            ],
            [
                (0, ListBox/* ListStateContext */.DN),
                filteredState
            ],
            [
                (0, Text/* TextContext */.h),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ]
        ]
    }, props.children));
}
const $3df3ddf5bafbc7b1$export$f9fef0f55402315b = /*#__PURE__*/ (0, react.forwardRef)(function TagList(props, ref) {
    let state = (0, react.useContext)((0, ListBox/* ListStateContext */.DN));
    return state ? /*#__PURE__*/ (0, react).createElement($3df3ddf5bafbc7b1$var$TagListInner, {
        props: props,
        forwardedRef: ref
    }) : /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* Collection */.pM), props);
});
function $3df3ddf5bafbc7b1$var$TagListInner({ props: props, forwardedRef: forwardedRef }) {
    let state = (0, react.useContext)((0, ListBox/* ListStateContext */.DN));
    let { CollectionRoot: CollectionRoot } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let [gridProps, ref] = (0, utils/* useContextProps */.JT)({}, forwardedRef, $3df3ddf5bafbc7b1$export$e755ce3685dd0ca9);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)();
    let renderValues = {
        isEmpty: state.collection.size === 0,
        isFocused: isFocused,
        isFocusVisible: isFocusVisible,
        state: state
    };
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        children: undefined,
        defaultClassName: 'react-aria-TagList',
        values: renderValues
    });
    let persistedKeys = (0, Collection/* usePersistedKeys */.l2)(state.selectionManager.focusedKey);
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, gridProps, focusProps),
        ref: ref,
        "data-empty": state.collection.size === 0 || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, SharedElementTransition/* SharedElementTransition */.D), null, state.collection.size === 0 && props.renderEmptyState ? props.renderEmptyState(renderValues) : /*#__PURE__*/ (0, react).createElement(CollectionRoot, {
        collection: state.collection,
        persistedKeys: persistedKeys
    })));
}
const $3df3ddf5bafbc7b1$export$3288d34c523a1192 = /*#__PURE__*/ (0, CollectionBuilder/* createLeafComponent */.KU)((0, BaseCollection/* ItemNode */._B), (props, forwardedRef, item)=>{
    let state = (0, react.useContext)((0, ListBox/* ListStateContext */.DN));
    let ref = (0, useObjectRef/* useObjectRef */.U)(forwardedRef);
    let { focusProps: focusProps, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)({
        within: false
    });
    let { rowProps: rowProps, gridCellProps: gridCellProps, removeButtonProps: removeButtonProps, ...states } = (0, $8b763916586fd6a6$export$3f568fff7dff2f03)({
        item: item
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* useHover */.M)({
        isDisabled: !states.allowsSelection && !states.hasAction,
        onHoverStart: item.props.onHoverStart,
        onHoverChange: item.props.onHoverChange,
        onHoverEnd: item.props.onHoverEnd
    });
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-Tag',
        values: {
            ...states,
            isFocusVisible: isFocusVisible,
            isHovered: isHovered,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior
        }
    });
    (0, react.useEffect)(()=>{
        if (!item.textValue && "production" !== 'production') // removed by dead control flow
{}
    }, [
        item.textValue
    ]);
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ref: ref,
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, rowProps, focusProps, hoverProps),
        "data-selected": states.isSelected || undefined,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-allows-removing": states.allowsRemoving || undefined,
        "data-selection-mode": state.selectionManager.selectionMode === 'none' ? undefined : state.selectionManager.selectionMode
    }, /*#__PURE__*/ (0, react).createElement("div", {
        ...gridCellProps,
        style: {
            display: 'contents'
        }
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                (0, Button/* ButtonContext */.k),
                {
                    slots: {
                        remove: removeButtonProps
                    }
                }
            ],
            [
                (0, Collection/* CollectionRendererContext */.zL),
                (0, Collection/* DefaultCollectionRenderer */.N)
            ],
            [
                (0, SelectionIndicator/* SelectionIndicatorContext */.r),
                {
                    isSelected: states.isSelected
                }
            ]
        ]
    }, renderProps.children)));
});



//# sourceMappingURL=TagGroup.mjs.map


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