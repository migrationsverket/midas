"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4579],{

/***/ 28294
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ $7cb39d07f245a780$export$70e2eed1a92976ad)
/* harmony export */ });
/* harmony import */ var _intlStrings_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37188);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84137);
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29571);





function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}



function $7cb39d07f245a780$export$70e2eed1a92976ad(props, state) {
    let { key: key } = props;
    let manager = state.selectionManager;
    let checkboxId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Bi)();
    let isDisabled = !state.selectionManager.canSelectItem(key);
    let isSelected = state.selectionManager.isSelected(key);
    // Checkbox should always toggle selection, regardless of selectionBehavior.
    let onChange = ()=>manager.toggleSelection(key);
    const stringFormatter = (0, _react_aria_i18n__WEBPACK_IMPORTED_MODULE_2__/* .useLocalizedStringFormatter */ .o)((0, ($parcel$interopDefault(_intlStrings_mjs__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A))), '@react-aria/grid');
    return {
        checkboxProps: {
            id: checkboxId,
            'aria-label': stringFormatter.format('select'),
            isSelected: isSelected,
            isDisabled: isDisabled,
            onChange: onChange
        }
    };
}



//# sourceMappingURL=useGridSelectionCheckbox.module.js.map


/***/ },

/***/ 32708
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Trash2)
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
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("trash-2", __iconNode);


//# sourceMappingURL=trash-2.js.map


/***/ },

/***/ 65379
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FK: () => (/* binding */ $72e60046c03fbe42$export$a7bfbda1311ca015),
  KP: () => (/* binding */ $72e60046c03fbe42$export$e96fc9a8407faa6b)
});

// UNUSED EXPORTS: GridListContext, GridListHeader, GridListHeaderContext, GridListHeaderInnerContext, GridListLoadMoreItem, GridListSection

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/RSPContexts.mjs
var RSPContexts = __webpack_require__(32373);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Collection.mjs
var Collection = __webpack_require__(64606);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/DragAndDrop.mjs
var DragAndDrop = __webpack_require__(79124);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ListBox.mjs + 3 modules
var ListBox = __webpack_require__(79255);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/SelectionIndicator.mjs
var SelectionIndicator = __webpack_require__(70291);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/SharedElementTransition.mjs
var SharedElementTransition = __webpack_require__(10266);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useCollator.mjs
var useCollator = __webpack_require__(82627);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/ListKeyboardDelegate.mjs
var ListKeyboardDelegate = __webpack_require__(96584);
// EXTERNAL MODULE: ./node_modules/@react-aria/gridlist/dist/useGridList.mjs
var useGridList = __webpack_require__(1981);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs
var FocusScope = __webpack_require__(85652);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/gridlist/dist/useGridListItem.mjs
var useGridListItem = __webpack_require__(31728);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/gridlist/dist/utils.mjs
var dist_utils = __webpack_require__(58839);
// EXTERNAL MODULE: ./node_modules/@react-aria/grid/dist/useGridSelectionCheckbox.mjs
var useGridSelectionCheckbox = __webpack_require__(28294);
;// ./node_modules/@react-aria/gridlist/dist/useGridListSelectionCheckbox.mjs



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

function $e52ffc04a4adbd52$export$e29f2573fabbf7b9(props, state) {
    let { key: key } = props;
    const { checkboxProps: checkboxProps } = (0, useGridSelectionCheckbox/* useGridSelectionCheckbox */.b)(props, state);
    return {
        checkboxProps: {
            ...checkboxProps,
            'aria-labelledby': `${checkboxProps.id} ${(0, dist_utils/* getRowId */.uk)(state, key)}`
        }
    };
}



//# sourceMappingURL=useGridListSelectionCheckbox.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(87979);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/BaseCollection.mjs
var BaseCollection = __webpack_require__(46540);
// EXTERNAL MODULE: ./node_modules/@react-stately/list/dist/useListState.mjs
var useListState = __webpack_require__(46655);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useObjectRef.mjs
var useObjectRef = __webpack_require__(83908);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLoadMoreSentinel.mjs
var useLoadMoreSentinel = __webpack_require__(84819);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/inertValue.mjs
var inertValue = __webpack_require__(34076);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria-components/dist/GridList.mjs















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













const $72e60046c03fbe42$export$54fe942636b6416d = /*#__PURE__*/ (0, react.createContext)(null);
const $72e60046c03fbe42$export$a7bfbda1311ca015 = /*#__PURE__*/ (0, react.forwardRef)(function GridList(props, ref) {
    // Render the portal first so that we have the collection by the time we render the DOM in SSR.
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $72e60046c03fbe42$export$54fe942636b6416d);
    return /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* Collection */.pM), props)
    }, (collection)=>/*#__PURE__*/ (0, react).createElement($72e60046c03fbe42$var$GridListInner, {
            props: props,
            collection: collection,
            gridListRef: ref
        }));
});
function $72e60046c03fbe42$var$GridListInner({ props: props, collection: collection, gridListRef: ref }) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, (0, RSPContexts/* SelectableCollectionContext */.Co));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { shouldUseVirtualFocus: shouldUseVirtualFocus, filter: filter, disallowTypeAhead: disallowTypeAhead, ...DOMCollectionProps } = props;
    let { dragAndDropHooks: dragAndDropHooks, keyboardNavigationBehavior: keyboardNavigationBehavior = 'arrow', layout: layout = 'stack' } = props;
    let { CollectionRoot: CollectionRoot, isVirtualized: isVirtualized, layoutDelegate: layoutDelegate, dropTargetDelegate: ctxDropTargetDelegate } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let gridlistState = (0, useListState/* useListState */.p)({
        ...DOMCollectionProps,
        collection: collection,
        children: undefined,
        layoutDelegate: layoutDelegate
    });
    let filteredState = (0, useListState/* UNSTABLE_useFilteredListState */.Z)(gridlistState, filter);
    let collator = (0, useCollator/* useCollator */.Q)({
        usage: 'search',
        sensitivity: 'base'
    });
    let { disabledBehavior: disabledBehavior, disabledKeys: disabledKeys } = filteredState.selectionManager;
    let { direction: direction } = (0, context/* useLocale */.Y)();
    let keyboardDelegate = (0, react.useMemo)(()=>new (0, ListKeyboardDelegate/* ListKeyboardDelegate */.n)({
            collection: filteredState.collection,
            collator: collator,
            ref: ref,
            disabledKeys: disabledKeys,
            disabledBehavior: disabledBehavior,
            layoutDelegate: layoutDelegate,
            layout: layout,
            direction: direction
        }), [
        filteredState.collection,
        ref,
        layout,
        disabledKeys,
        disabledBehavior,
        layoutDelegate,
        collator,
        direction
    ]);
    let { gridProps: gridProps } = (0, useGridList/* useGridList */.I)({
        ...DOMCollectionProps,
        keyboardDelegate: keyboardDelegate,
        // Only tab navigation is supported in grid layout.
        keyboardNavigationBehavior: layout === 'grid' ? 'tab' : keyboardNavigationBehavior,
        isVirtualized: isVirtualized,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp,
        disallowTypeAhead: disallowTypeAhead
    }, filteredState, ref);
    let selectionManager = filteredState.selectionManager;
    let isListDraggable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDraggableCollectionState);
    let isListDroppable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDroppableCollectionState);
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
        dragState = dragAndDropHooks.useDraggableCollectionState({
            collection: filteredState.collection,
            selectionManager: selectionManager,
            preview: dragAndDropHooks.renderDragPreview ? preview : undefined
        });
        dragAndDropHooks.useDraggableCollection({}, dragState, ref);
        let DragPreview = dragAndDropHooks.DragPreview;
        dragPreview = dragAndDropHooks.renderDragPreview ? /*#__PURE__*/ (0, react).createElement(DragPreview, {
            ref: preview
        }, dragAndDropHooks.renderDragPreview) : null;
    }
    if (isListDroppable && dragAndDropHooks) {
        dropState = dragAndDropHooks.useDroppableCollectionState({
            collection: filteredState.collection,
            selectionManager: selectionManager
        });
        let keyboardDelegate = new (0, ListKeyboardDelegate/* ListKeyboardDelegate */.n)({
            collection: filteredState.collection,
            disabledKeys: selectionManager.disabledKeys,
            disabledBehavior: selectionManager.disabledBehavior,
            ref: ref
        });
        let dropTargetDelegate = dragAndDropHooks.dropTargetDelegate || ctxDropTargetDelegate || new dragAndDropHooks.ListDropTargetDelegate(collection, ref, {
            layout: layout,
            direction: direction
        });
        droppableCollection = dragAndDropHooks.useDroppableCollection({
            keyboardDelegate: keyboardDelegate,
            dropTargetDelegate: dropTargetDelegate
        }, dropState, ref);
        isRootDropTarget = dropState.isDropTarget({
            type: 'root'
        });
    }
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)();
    let isEmpty = filteredState.collection.size === 0;
    let renderValues = {
        isDropTarget: isRootDropTarget,
        isEmpty: isEmpty,
        isFocused: isFocused,
        isFocusVisible: isFocusVisible,
        layout: layout,
        state: filteredState
    };
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        children: undefined,
        defaultClassName: 'react-aria-GridList',
        values: renderValues
    });
    let emptyState = null;
    let emptyStatePropOverrides = null;
    if (isEmpty && props.renderEmptyState) {
        let content = props.renderEmptyState(renderValues);
        emptyState = /*#__PURE__*/ (0, react).createElement("div", {
            role: "row",
            "aria-rowindex": 1,
            style: {
                display: 'contents'
            }
        }, /*#__PURE__*/ (0, react).createElement("div", {
            role: "gridcell",
            style: {
                display: 'contents'
            }
        }, content));
    }
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, react).createElement((0, FocusScope/* FocusScope */.n1), null, /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, gridProps, focusProps, droppableCollection === null || droppableCollection === void 0 ? void 0 : droppableCollection.collectionProps, emptyStatePropOverrides),
        ref: ref,
        slot: props.slot || undefined,
        onScroll: props.onScroll,
        "data-drop-target": isRootDropTarget || undefined,
        "data-empty": isEmpty || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-layout": layout
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                (0, ListBox/* ListStateContext */.DN),
                filteredState
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
                (0, DragAndDrop/* DropIndicatorContext */.U5),
                {
                    render: $72e60046c03fbe42$var$GridListDropIndicatorWrapper
                }
            ]
        ]
    }, isListDroppable && /*#__PURE__*/ (0, react).createElement($72e60046c03fbe42$var$RootDropIndicator, null), /*#__PURE__*/ (0, react).createElement((0, SharedElementTransition/* SharedElementTransition */.D), null, /*#__PURE__*/ (0, react).createElement(CollectionRoot, {
        collection: filteredState.collection,
        scrollRef: ref,
        persistedKeys: (0, DragAndDrop/* useDndPersistedKeys */.XW)(selectionManager, dragAndDropHooks, dropState),
        renderDropIndicator: (0, DragAndDrop/* useRenderDropIndicator */.oC)(dragAndDropHooks, dropState)
    }))), emptyState, dragPreview));
}
const $72e60046c03fbe42$export$e96fc9a8407faa6b = /*#__PURE__*/ (0, CollectionBuilder/* createLeafComponent */.KU)((0, BaseCollection/* ItemNode */._B), function GridListItem(props, forwardedRef, item) {
    let state = (0, react.useContext)((0, ListBox/* ListStateContext */.DN));
    let { dragAndDropHooks: dragAndDropHooks, dragState: dragState, dropState: dropState } = (0, react.useContext)((0, DragAndDrop/* DragAndDropContext */.Ux));
    let ref = (0, useObjectRef/* useObjectRef */.U)(forwardedRef);
    let { isVirtualized: isVirtualized } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let { rowProps: rowProps, gridCellProps: gridCellProps, descriptionProps: descriptionProps, ...states } = (0, useGridListItem/* useGridListItem */.n)({
        node: item,
        shouldSelectOnPressUp: !!dragState,
        isVirtualized: isVirtualized
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* useHover */.M)({
        isDisabled: !states.allowsSelection && !states.hasAction,
        onHoverStart: item.props.onHoverStart,
        onHoverChange: item.props.onHoverChange,
        onHoverEnd: item.props.onHoverEnd
    });
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, useFocusRing/* useFocusRing */.o)();
    let { checkboxProps: checkboxProps } = (0, $e52ffc04a4adbd52$export$e29f2573fabbf7b9)({
        key: item.key
    }, state);
    let buttonProps = state.selectionManager.disabledBehavior === 'all' && states.isDisabled ? {
        isDisabled: true
    } : {};
    let draggableItem = null;
    if (dragState && dragAndDropHooks) draggableItem = dragAndDropHooks.useDraggableItem({
        key: item.key,
        hasDragButton: true
    }, dragState);
    let dropIndicator = null;
    let dropIndicatorRef = (0, react.useRef)(null);
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, VisuallyHidden/* useVisuallyHidden */.B)();
    if (dropState && dragAndDropHooks) dropIndicator = dragAndDropHooks.useDropIndicator({
        target: {
            type: 'item',
            key: item.key,
            dropPosition: 'on'
        }
    }, dropState, dropIndicatorRef);
    let isDragging = dragState && dragState.isDragging(item.key);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-GridListItem',
        values: {
            ...states,
            isHovered: isHovered,
            isFocusVisible: isFocusVisible,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior,
            allowsDragging: !!dragState,
            isDragging: isDragging,
            isDropTarget: dropIndicator === null || dropIndicator === void 0 ? void 0 : dropIndicator.isDropTarget,
            id: item.key,
            state: state
        }
    });
    let dragButtonRef = (0, react.useRef)(null);
    (0, react.useEffect)(()=>{
        if (dragState && !dragButtonRef.current) console.warn('Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
    // eslint-disable-next-line
    }, []);
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
    return /*#__PURE__*/ (0, react).createElement((0, react).Fragment, null, dropIndicator && !dropIndicator.isHidden && /*#__PURE__*/ (0, react).createElement("div", {
        role: "row",
        style: {
            position: 'absolute'
        }
    }, /*#__PURE__*/ (0, react).createElement("div", {
        role: "gridcell"
    }, /*#__PURE__*/ (0, react).createElement("div", {
        role: "button",
        ...visuallyHiddenProps,
        ...dropIndicator === null || dropIndicator === void 0 ? void 0 : dropIndicator.dropIndicatorProps,
        ref: dropIndicatorRef
    }))), /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, rowProps, focusProps, hoverProps, draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragProps),
        ref: ref,
        "data-selected": states.isSelected || undefined,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-allows-dragging": !!dragState || undefined,
        "data-dragging": isDragging || undefined,
        "data-drop-target": (dropIndicator === null || dropIndicator === void 0 ? void 0 : dropIndicator.isDropTarget) || undefined,
        "data-selection-mode": state.selectionManager.selectionMode === 'none' ? undefined : state.selectionManager.selectionMode
    }, /*#__PURE__*/ (0, react).createElement("div", {
        ...gridCellProps,
        style: {
            display: 'contents'
        }
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                (0, RSPContexts/* CheckboxContext */.BP),
                {
                    slots: {
                        [(0, utils/* DEFAULT_SLOT */.P_)]: {},
                        selection: checkboxProps
                    }
                }
            ],
            [
                (0, Button/* ButtonContext */.k),
                {
                    slots: {
                        [(0, utils/* DEFAULT_SLOT */.P_)]: buttonProps,
                        drag: {
                            ...draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragButtonProps,
                            ref: dragButtonRef,
                            style: {
                                pointerEvents: 'none'
                            }
                        }
                    }
                }
            ],
            [
                (0, Text/* TextContext */.h),
                {
                    slots: {
                        [(0, utils/* DEFAULT_SLOT */.P_)]: {},
                        description: descriptionProps
                    }
                }
            ],
            [
                (0, Collection/* CollectionRendererContext */.zL),
                (0, Collection/* DefaultCollectionRenderer */.N)
            ],
            [
                (0, ListBox/* ListStateContext */.DN),
                null
            ],
            [
                (0, RSPContexts/* SelectableCollectionContext */.Co),
                null
            ],
            [
                (0, RSPContexts/* FieldInputContext */.wv),
                null
            ],
            [
                (0, SelectionIndicator/* SelectionIndicatorContext */.r),
                {
                    isSelected: states.isSelected
                }
            ]
        ]
    }, renderProps.children))));
});
function $72e60046c03fbe42$var$GridListDropIndicatorWrapper(props, ref) {
    ref = (0, useObjectRef/* useObjectRef */.U)(ref);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, react.useContext)((0, DragAndDrop/* DragAndDropContext */.Ux));
    let buttonRef = (0, react.useRef)(null);
    let { dropIndicatorProps: dropIndicatorProps, isHidden: isHidden, isDropTarget: isDropTarget } = dragAndDropHooks.useDropIndicator(props, dropState, buttonRef);
    if (isHidden) return null;
    return /*#__PURE__*/ (0, react).createElement($72e60046c03fbe42$var$GridListDropIndicatorForwardRef, {
        ...props,
        dropIndicatorProps: dropIndicatorProps,
        isDropTarget: isDropTarget,
        buttonRef: buttonRef,
        ref: ref
    });
}
function $72e60046c03fbe42$var$GridListDropIndicator(props, ref) {
    let { dropIndicatorProps: dropIndicatorProps, isDropTarget: isDropTarget, buttonRef: buttonRef, ...otherProps } = props;
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, VisuallyHidden/* useVisuallyHidden */.B)();
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...otherProps,
        defaultClassName: 'react-aria-DropIndicator',
        values: {
            isDropTarget: isDropTarget
        }
    });
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...renderProps,
        role: "row",
        ref: ref,
        "data-drop-target": isDropTarget || undefined
    }, /*#__PURE__*/ (0, react).createElement("div", {
        role: "gridcell"
    }, /*#__PURE__*/ (0, react).createElement("div", {
        ...visuallyHiddenProps,
        role: "button",
        ...dropIndicatorProps,
        ref: buttonRef
    }), renderProps.children));
}
const $72e60046c03fbe42$var$GridListDropIndicatorForwardRef = /*#__PURE__*/ (0, react.forwardRef)($72e60046c03fbe42$var$GridListDropIndicator);
function $72e60046c03fbe42$var$RootDropIndicator() {
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, react.useContext)((0, DragAndDrop/* DragAndDropContext */.Ux));
    let ref = (0, react.useRef)(null);
    let { dropIndicatorProps: dropIndicatorProps } = dragAndDropHooks.useDropIndicator({
        target: {
            type: 'root'
        }
    }, dropState, ref);
    let isDropTarget = dropState.isDropTarget({
        type: 'root'
    });
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, VisuallyHidden/* useVisuallyHidden */.B)();
    if (!isDropTarget && dropIndicatorProps['aria-hidden']) return null;
    return /*#__PURE__*/ (0, react).createElement("div", {
        role: "row",
        "aria-hidden": dropIndicatorProps['aria-hidden'],
        style: {
            position: 'absolute'
        }
    }, /*#__PURE__*/ (0, react).createElement("div", {
        role: "gridcell"
    }, /*#__PURE__*/ (0, react).createElement("div", {
        role: "button",
        ...visuallyHiddenProps,
        ...dropIndicatorProps,
        ref: ref
    })));
}
const $72e60046c03fbe42$export$392b9a0bbc7c7e43 = (0, CollectionBuilder/* createLeafComponent */.KU)((0, BaseCollection/* LoaderNode */.OJ), function GridListLoadingIndicator(props, ref, item) {
    let state = (0, react.useContext)((0, ListBox/* ListStateContext */.DN));
    let { isVirtualized: isVirtualized } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let { isLoading: isLoading, onLoadMore: onLoadMore, scrollOffset: scrollOffset, ...otherProps } = props;
    let sentinelRef = (0, react.useRef)(null);
    let memoedLoadMoreProps = (0, react.useMemo)(()=>({
            onLoadMore: onLoadMore,
            collection: state === null || state === void 0 ? void 0 : state.collection,
            sentinelRef: sentinelRef,
            scrollOffset: scrollOffset
        }), [
        onLoadMore,
        scrollOffset,
        state === null || state === void 0 ? void 0 : state.collection
    ]);
    (0, useLoadMoreSentinel/* useLoadMoreSentinel */.n)(memoedLoadMoreProps, sentinelRef);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...otherProps,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-GridListLoadingIndicator',
        values: undefined
    });
    // For now don't include aria-posinset and aria-setsize on loader since they aren't keyboard focusable
    // Arguably shouldn't include them ever since it might be confusing to the user to include the loaders as part of the
    // item count
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
    })), isLoading && renderProps.children && /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...renderProps,
        ...(0, filterDOMProps/* filterDOMProps */.$)(props, {
            global: true
        }),
        role: "row",
        ref: ref
    }, /*#__PURE__*/ (0, react).createElement("div", {
        "aria-colindex": isVirtualized ? 1 : undefined,
        role: "gridcell"
    }, renderProps.children)));
});
const $72e60046c03fbe42$export$f696877219115b14 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $jTmF7$createBranchComponent)((0, $jTmF7$SectionNode), (props, ref, item)=>{
    let state = (0, $jTmF7$useContext)((0, $eed445e0843c11d0$export$7c5906fe4f1f2af2));
    let { CollectionBranch: CollectionBranch } = (0, $jTmF7$useContext)((0, $7135fc7d473fd974$export$4feb769f8ddf26c5));
    let headingRef = (0, $jTmF7$useRef)(null);
    ref = (0, $jTmF7$useObjectRef)(ref);
    var _props_arialabel;
    let { rowHeaderProps: rowHeaderProps, rowProps: rowProps, rowGroupProps: rowGroupProps } = (0, $jTmF7$useGridListSection)({
        'aria-label': (_props_arialabel = props['aria-label']) !== null && _props_arialabel !== void 0 ? _props_arialabel : undefined
    }, state, ref);
    let renderProps = (0, $64fa3d84918910a7$export$4d86445c2cf5e3)({
        ...props,
        id: undefined,
        children: undefined,
        defaultClassName: 'react-aria-GridListSection',
        values: undefined
    });
    let DOMProps = (0, $jTmF7$filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $jTmF7$react).createElement((0, $64fa3d84918910a7$export$df3a06d6289f983e).div, {
        ...(0, $jTmF7$mergeProps)(DOMProps, renderProps, rowGroupProps),
        ref: ref
    }, /*#__PURE__*/ (0, $jTmF7$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $72e60046c03fbe42$export$87f5843bfb30d205,
                {
                    ...rowProps,
                    ref: headingRef
                }
            ],
            [
                $72e60046c03fbe42$export$bc7e8a4031ec2a33,
                {
                    ...rowHeaderProps
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $jTmF7$react).createElement(CollectionBranch, {
        collection: state.collection,
        parent: item
    })));
})));
const $72e60046c03fbe42$export$87f5843bfb30d205 = /*#__PURE__*/ (0, react.createContext)({});
const $72e60046c03fbe42$export$bc7e8a4031ec2a33 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $jTmF7$createContext)(null)));
const $72e60046c03fbe42$export$1b574dbdb0075ff6 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $jTmF7$createLeafComponent)((0, $jTmF7$HeaderNode), function Header(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $72e60046c03fbe42$export$87f5843bfb30d205);
    let rowHeaderProps = (0, $jTmF7$useContext)($72e60046c03fbe42$export$bc7e8a4031ec2a33);
    return /*#__PURE__*/ (0, $jTmF7$react).createElement((0, $64fa3d84918910a7$export$df3a06d6289f983e).div, {
        render: props.render,
        className: "react-aria-GridListHeader",
        ref: ref,
        ...props
    }, /*#__PURE__*/ (0, $jTmF7$react).createElement("div", {
        ...rowHeaderProps,
        style: {
            display: 'contents'
        }
    }, props.children));
})));



//# sourceMappingURL=GridList.module.js.map


/***/ }

}]);