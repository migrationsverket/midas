"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[9255],{

/***/ 97918:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ $b1f0cad8af73213b$export$9145995848b05025),
/* harmony export */   b: () => (/* binding */ $b1f0cad8af73213b$export$3585ede4d035bf14)
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
 */ const $b1f0cad8af73213b$export$3585ede4d035bf14 = new WeakMap();
function $b1f0cad8af73213b$var$normalizeKey(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}
function $b1f0cad8af73213b$export$9145995848b05025(state, itemKey) {
    let data = $b1f0cad8af73213b$export$3585ede4d035bf14.get(state);
    if (!data) throw new Error('Unknown list');
    return `${data.id}-option-${$b1f0cad8af73213b$var$normalizeKey(itemKey)}`;
}



//# sourceMappingURL=utils.module.js.map


/***/ }),

/***/ 7471:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ $a02d57049d202695$export$d085fb9e920b5ca7)
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
 */ class $a02d57049d202695$export$d085fb9e920b5ca7 {
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        var _node_prevKey;
        return node ? (_node_prevKey = node.prevKey) !== null && _node_prevKey !== void 0 ? _node_prevKey : null : null;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        var _node_nextKey;
        return node ? (_node_nextKey = node.nextKey) !== null && _node_nextKey !== void 0 ? _node_nextKey : null : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(key) {
        var _this_keyMap_get;
        return (_this_keyMap_get = this.keyMap.get(key)) !== null && _this_keyMap_get !== void 0 ? _this_keyMap_get : null;
    }
    at(idx) {
        const keys = [
            ...this.getKeys()
        ];
        return this.getItem(keys[idx]);
    }
    getChildren(key) {
        let node = this.keyMap.get(key);
        return (node === null || node === void 0 ? void 0 : node.childNodes) || [];
    }
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
        for (let [key, node] of this.keyMap){
            if (last) {
                last.nextKey = key;
                node.prevKey = last.key;
            } else {
                this.firstKey = key;
                node.prevKey = undefined;
            }
            if (node.type === 'item') node.index = index++;
            last = node;
            // Set nextKey as undefined since this might be the last node
            // If it isn't the last node, last.nextKey will properly set at start of new loop
            last.nextKey = undefined;
        }
        var _last_key;
        this.lastKey = (_last_key = last === null || last === void 0 ? void 0 : last.key) !== null && _last_key !== void 0 ? _last_key : null;
    }
}



//# sourceMappingURL=ListCollection.module.js.map


/***/ }),

/***/ 46655:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ $e72dd72e1c76a225$export$2f645645f7bca764)
/* harmony export */ });
/* harmony import */ var _ListCollection_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7471);
/* harmony import */ var _react_stately_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73837);
/* harmony import */ var _react_stately_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60632);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_stately_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13796);





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



function $e72dd72e1c76a225$export$2f645645f7bca764(props) {
    let { filter: filter, layoutDelegate: layoutDelegate } = props;
    let selectionState = (0, _react_stately_selection__WEBPACK_IMPORTED_MODULE_1__/* .useMultipleSelectionState */ .R)(props);
    let disabledKeys = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let factory = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nodes)=>filter ? new (0, _ListCollection_mjs__WEBPACK_IMPORTED_MODULE_2__/* .ListCollection */ .J)(filter(nodes)) : new (0, _ListCollection_mjs__WEBPACK_IMPORTED_MODULE_2__/* .ListCollection */ .J)(nodes), [
        filter
    ]);
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            suppressTextValueWarning: props.suppressTextValueWarning
        }), [
        props.suppressTextValueWarning
    ]);
    let collection = (0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_3__/* .useCollection */ .G)(props, factory, context);
    let selectionManager = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new (0, _react_stately_selection__WEBPACK_IMPORTED_MODULE_4__/* .SelectionManager */ .Y)(collection, selectionState, {
            layoutDelegate: layoutDelegate
        }), [
        collection,
        selectionState,
        layoutDelegate
    ]);
    // Reset focused key if that item is deleted from the collection.
    const cachedCollection = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (selectionState.focusedKey != null && !collection.getItem(selectionState.focusedKey) && cachedCollection.current) {
            const startItem = cachedCollection.current.getItem(selectionState.focusedKey);
            const cachedItemNodes = [
                ...cachedCollection.current.getKeys()
            ].map((key)=>{
                const itemNode = cachedCollection.current.getItem(key);
                return (itemNode === null || itemNode === void 0 ? void 0 : itemNode.type) === 'item' ? itemNode : null;
            }).filter((node)=>node !== null);
            const itemNodes = [
                ...collection.getKeys()
            ].map((key)=>{
                const itemNode = collection.getItem(key);
                return (itemNode === null || itemNode === void 0 ? void 0 : itemNode.type) === 'item' ? itemNode : null;
            }).filter((node)=>node !== null);
            var _cachedItemNodes_length, _itemNodes_length;
            const diff = ((_cachedItemNodes_length = cachedItemNodes === null || cachedItemNodes === void 0 ? void 0 : cachedItemNodes.length) !== null && _cachedItemNodes_length !== void 0 ? _cachedItemNodes_length : 0) - ((_itemNodes_length = itemNodes === null || itemNodes === void 0 ? void 0 : itemNodes.length) !== null && _itemNodes_length !== void 0 ? _itemNodes_length : 0);
            var _startItem_index, _startItem_index1, _itemNodes_length1;
            let index = Math.min(diff > 1 ? Math.max(((_startItem_index = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index !== void 0 ? _startItem_index : 0) - diff + 1, 0) : (_startItem_index1 = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index1 !== void 0 ? _startItem_index1 : 0, ((_itemNodes_length1 = itemNodes === null || itemNodes === void 0 ? void 0 : itemNodes.length) !== null && _itemNodes_length1 !== void 0 ? _itemNodes_length1 : 0) - 1);
            let newNode = null;
            let isReverseSearching = false;
            while(index >= 0){
                if (!selectionManager.isDisabled(itemNodes[index].key)) {
                    newNode = itemNodes[index];
                    break;
                }
                // Find next, not disabled item.
                if (index < itemNodes.length - 1 && !isReverseSearching) index++;
                else {
                    isReverseSearching = true;
                    var _startItem_index2, _startItem_index3;
                    if (index > ((_startItem_index2 = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index2 !== void 0 ? _startItem_index2 : 0)) index = (_startItem_index3 = startItem === null || startItem === void 0 ? void 0 : startItem.index) !== null && _startItem_index3 !== void 0 ? _startItem_index3 : 0;
                    index--;
                }
            }
            selectionState.setFocusedKey(newNode ? newNode.key : null);
        }
        cachedCollection.current = collection;
    }, [
        collection,
        selectionManager,
        selectionState,
        selectionState.focusedKey
    ]);
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: selectionManager
    };
}



//# sourceMappingURL=useListState.module.js.map


/***/ }),

/***/ 79124:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U5: () => (/* binding */ $612b8eb6cb90e02d$export$f55761759794cf55),
/* harmony export */   Ux: () => (/* binding */ $612b8eb6cb90e02d$export$d188a835a7bc5783),
/* harmony export */   XW: () => (/* binding */ $612b8eb6cb90e02d$export$d1e8e3fbb7461f6),
/* harmony export */   oC: () => (/* binding */ $612b8eb6cb90e02d$export$971707d8a129a1f7)
/* harmony export */ });
/* unused harmony export DropIndicator */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $612b8eb6cb90e02d$export$d188a835a7bc5783 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $612b8eb6cb90e02d$export$f55761759794cf55 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $612b8eb6cb90e02d$export$62ed72bc21f6b8a6 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function DropIndicator(props, ref) {
    let { render: render } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($612b8eb6cb90e02d$export$f55761759794cf55);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, react__WEBPACK_IMPORTED_MODULE_0__).Fragment, null, render(props, ref));
});
function $612b8eb6cb90e02d$export$971707d8a129a1f7(dragAndDropHooks, dropState) {
    var _dragAndDropHooks_isVirtualDragging;
    let renderDropIndicator = dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.renderDropIndicator;
    let isVirtualDragging = dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : (_dragAndDropHooks_isVirtualDragging = dragAndDropHooks.isVirtualDragging) === null || _dragAndDropHooks_isVirtualDragging === void 0 ? void 0 : _dragAndDropHooks_isVirtualDragging.call(dragAndDropHooks);
    let fn = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((target)=>{
        // Only show drop indicators when virtual dragging or this is the current drop target.
        if (isVirtualDragging || (dropState === null || dropState === void 0 ? void 0 : dropState.isDropTarget(target))) return renderDropIndicator ? renderDropIndicator(target) : /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($612b8eb6cb90e02d$export$62ed72bc21f6b8a6, {
            target: target
        });
    // We invalidate whenever the target changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        dropState === null || dropState === void 0 ? void 0 : dropState.target,
        isVirtualDragging,
        renderDropIndicator
    ]);
    return (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDropIndicator) ? fn : undefined;
}
function $612b8eb6cb90e02d$export$d1e8e3fbb7461f6(selectionManager, dragAndDropHooks, dropState) {
    var _dragAndDropHooks_isVirtualDragging, _dropState_target;
    // Persist the focused key and the drop target key.
    let focusedKey = selectionManager.focusedKey;
    let dropTargetKey = null;
    if ((dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : (_dragAndDropHooks_isVirtualDragging = dragAndDropHooks.isVirtualDragging) === null || _dragAndDropHooks_isVirtualDragging === void 0 ? void 0 : _dragAndDropHooks_isVirtualDragging.call(dragAndDropHooks)) && (dropState === null || dropState === void 0 ? void 0 : (_dropState_target = dropState.target) === null || _dropState_target === void 0 ? void 0 : _dropState_target.type) === 'item') {
        dropTargetKey = dropState.target.key;
        var _dropState_collection_getKeyAfter;
        if (dropState.target.dropPosition === 'after') // Normalize to the "before" drop position since we only render those to the DOM.
        dropTargetKey = (_dropState_collection_getKeyAfter = dropState.collection.getKeyAfter(dropTargetKey)) !== null && _dropState_collection_getKeyAfter !== void 0 ? _dropState_collection_getKeyAfter : dropTargetKey;
    }
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return new Set([
            focusedKey,
            dropTargetKey
        ].filter((k)=>k != null));
    }, [
        focusedKey,
        dropTargetKey
    ]);
}



//# sourceMappingURL=DragAndDrop.module.js.map


/***/ }),

/***/ 79255:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  qF: () => (/* binding */ $eed445e0843c11d0$export$41f133550aa26f48),
  JC: () => (/* binding */ $eed445e0843c11d0$export$7ff8f37d2d81a48d),
  nh: () => (/* binding */ $eed445e0843c11d0$export$a11e76429ed99b4),
  DN: () => (/* binding */ $eed445e0843c11d0$export$7c5906fe4f1f2af2)
});

// UNUSED EXPORTS: ListBoxSection

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Collection.mjs
var Collection = __webpack_require__(64606);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/DragAndDrop.mjs
var DragAndDrop = __webpack_require__(79124);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Header.mjs
var Header = __webpack_require__(83181);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Separator.mjs
var Separator = __webpack_require__(31815);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Autocomplete.mjs
var Autocomplete = __webpack_require__(99350);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useCollator.mjs
var useCollator = __webpack_require__(82627);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/ListKeyboardDelegate.mjs
var ListKeyboardDelegate = __webpack_require__(96584);
// EXTERNAL MODULE: ./node_modules/@react-aria/listbox/dist/utils.mjs
var dist_utils = __webpack_require__(97918);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useId.mjs + 1 modules
var useId = __webpack_require__(84137);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
var useFocusWithin = __webpack_require__(59461);
// EXTERNAL MODULE: ./node_modules/@react-aria/label/dist/useLabel.mjs
var useLabel = __webpack_require__(64887);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useSelectableList.mjs
var useSelectableList = __webpack_require__(58579);
;// ./node_modules/@react-aria/listbox/dist/useListBox.mjs






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




function $c132121280ec012d$export$50eacbbf140a3141(props, state, ref) {
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        labelable: true
    });
    // Use props instead of state here. We don't want this to change due to long press.
    let selectionBehavior = props.selectionBehavior || 'toggle';
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
    (0, dist_utils/* listData */.b).set(state, {
        id: id,
        shouldUseVirtualFocus: props.shouldUseVirtualFocus,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp,
        shouldFocusOnHover: props.shouldFocusOnHover,
        isVirtualized: props.isVirtualized,
        onAction: props.onAction,
        linkBehavior: linkBehavior
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
            ...(0, mergeProps/* mergeProps */.v)(fieldProps, listProps)
        })
    };
}



//# sourceMappingURL=useListBox.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs + 1 modules
var FocusScope = __webpack_require__(68305);
;// ./node_modules/@react-aria/listbox/dist/useListBoxSection.mjs


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
function $af383d3bef1cfdc9$export$c3f9f39876e4bc7(props) {
    let { heading: heading, 'aria-label': ariaLabel } = props;
    let headingId = (0, useId/* useId */.Bi)();
    return {
        itemProps: {
            role: 'presentation'
        },
        headingProps: heading ? {
            // Techincally, listbox cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, using role="presentation",
            // and only use it as a visual label for the nested group.
            id: headingId,
            role: 'presentation'
        } : {},
        groupProps: {
            role: 'group',
            'aria-label': ariaLabel,
            'aria-labelledby': heading ? headingId : undefined
        }
    };
}



//# sourceMappingURL=useListBoxSection.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/platform.mjs
var platform = __webpack_require__(69202);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/chain.mjs
var chain = __webpack_require__(72166);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/openLink.mjs
var openLink = __webpack_require__(43831);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/getItemCount.mjs
var getItemCount = __webpack_require__(70732);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(95562);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useSelectableItem.mjs
var useSelectableItem = __webpack_require__(33462);
;// ./node_modules/@react-aria/listbox/dist/useOption.mjs






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




function $293f70390ea03370$export$497855f14858aa34(props, state, ref) {
    var _item_props, _item_props1;
    let { key: key } = props;
    let data = (0, dist_utils/* listData */.b).get(state);
    var _props_isDisabled;
    let isDisabled = (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : state.selectionManager.isDisabled(key);
    var _props_isSelected;
    let isSelected = (_props_isSelected = props.isSelected) !== null && _props_isSelected !== void 0 ? _props_isSelected : state.selectionManager.isSelected(key);
    var _props_shouldSelectOnPressUp;
    let shouldSelectOnPressUp = (_props_shouldSelectOnPressUp = props.shouldSelectOnPressUp) !== null && _props_shouldSelectOnPressUp !== void 0 ? _props_shouldSelectOnPressUp : data === null || data === void 0 ? void 0 : data.shouldSelectOnPressUp;
    var _props_shouldFocusOnHover;
    let shouldFocusOnHover = (_props_shouldFocusOnHover = props.shouldFocusOnHover) !== null && _props_shouldFocusOnHover !== void 0 ? _props_shouldFocusOnHover : data === null || data === void 0 ? void 0 : data.shouldFocusOnHover;
    var _props_shouldUseVirtualFocus;
    let shouldUseVirtualFocus = (_props_shouldUseVirtualFocus = props.shouldUseVirtualFocus) !== null && _props_shouldUseVirtualFocus !== void 0 ? _props_shouldUseVirtualFocus : data === null || data === void 0 ? void 0 : data.shouldUseVirtualFocus;
    var _props_isVirtualized;
    let isVirtualized = (_props_isVirtualized = props.isVirtualized) !== null && _props_isVirtualized !== void 0 ? _props_isVirtualized : data === null || data === void 0 ? void 0 : data.isVirtualized;
    let labelId = (0, useId/* useSlotId */.X1)();
    let descriptionId = (0, useId/* useSlotId */.X1)();
    let optionProps = {
        role: 'option',
        'aria-disabled': isDisabled || undefined,
        'aria-selected': state.selectionManager.selectionMode !== 'none' ? isSelected : undefined
    };
    // Safari with VoiceOver on macOS misreads options with aria-labelledby or aria-label as simply "text".
    // We should not map slots to the label and description on Safari and instead just have VoiceOver read the textContent.
    // https://bugs.webkit.org/show_bug.cgi?id=209279
    if (!((0, platform/* isMac */.cX)() && (0, platform/* isWebKit */.Tc)())) {
        optionProps['aria-label'] = props['aria-label'];
        optionProps['aria-labelledby'] = labelId;
        optionProps['aria-describedby'] = descriptionId;
    }
    let item = state.collection.getItem(key);
    if (isVirtualized) {
        let index = Number(item === null || item === void 0 ? void 0 : item.index);
        optionProps['aria-posinset'] = Number.isNaN(index) ? undefined : index + 1;
        optionProps['aria-setsize'] = (0, getItemCount/* getItemCount */.v)(state.collection);
    }
    let onAction = (data === null || data === void 0 ? void 0 : data.onAction) ? ()=>{
        var _data_onAction;
        return data === null || data === void 0 ? void 0 : (_data_onAction = data.onAction) === null || _data_onAction === void 0 ? void 0 : _data_onAction.call(data, key);
    } : undefined;
    let id = (0, dist_utils/* getItemId */.H)(state, key);
    let { itemProps: itemProps, isPressed: isPressed, isFocused: isFocused, hasAction: hasAction, allowsSelection: allowsSelection } = (0, useSelectableItem/* useSelectableItem */.p)({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        allowsDifferentPressOrigin: shouldSelectOnPressUp && shouldFocusOnHover,
        isVirtualized: isVirtualized,
        shouldUseVirtualFocus: shouldUseVirtualFocus,
        isDisabled: isDisabled,
        onAction: onAction || (item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.onAction) ? (0, chain/* chain */.c)(item === null || item === void 0 ? void 0 : (_item_props1 = item.props) === null || _item_props1 === void 0 ? void 0 : _item_props1.onAction, onAction) : undefined,
        linkBehavior: data === null || data === void 0 ? void 0 : data.linkBehavior,
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
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(item === null || item === void 0 ? void 0 : item.props);
    delete domProps.id;
    let linkProps = (0, openLink/* useLinkProps */._h)(item === null || item === void 0 ? void 0 : item.props);
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
        isFocusVisible: isFocused && (0, useFocusVisible/* isFocusVisible */.pP)(),
        isSelected: isSelected,
        isDisabled: isDisabled,
        isPressed: isPressed,
        allowsSelection: allowsSelection,
        hasAction: hasAction
    };
}



//# sourceMappingURL=useOption.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/@react-stately/list/dist/useListState.mjs
var useListState = __webpack_require__(46655);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useObjectRef.mjs
var useObjectRef = __webpack_require__(83908);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeRefs.mjs
var mergeRefs = __webpack_require__(17099);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria-components/dist/ListBox.mjs













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











const $eed445e0843c11d0$export$7ff8f37d2d81a48d = /*#__PURE__*/ (0, react.createContext)(null);
const $eed445e0843c11d0$export$7c5906fe4f1f2af2 = /*#__PURE__*/ (0, react.createContext)(null);
const $eed445e0843c11d0$export$41f133550aa26f48 = /*#__PURE__*/ (0, react.forwardRef)(function ListBox(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $eed445e0843c11d0$export$7ff8f37d2d81a48d);
    let state = (0, react.useContext)($eed445e0843c11d0$export$7c5906fe4f1f2af2);
    // The structure of ListBox is a bit strange because it needs to work inside other components like ComboBox and Select.
    // Those components render two copies of their children so that the collection can be built even when the popover is closed.
    // The first copy sends a collection document via context which we render the collection portal into.
    // The second copy sends a ListState object via context which we use to render the ListBox without rebuilding the state.
    // Otherwise, we have a standalone ListBox, so we need to create a collection and state ourselves.
    if (state) return /*#__PURE__*/ (0, react).createElement($eed445e0843c11d0$var$ListBoxInner, {
        state: state,
        props: props,
        listBoxRef: ref
    });
    return /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* Collection */.pM), props)
    }, (collection)=>/*#__PURE__*/ (0, react).createElement($eed445e0843c11d0$var$StandaloneListBox, {
            props: props,
            listBoxRef: ref,
            collection: collection
        }));
});
function $eed445e0843c11d0$var$StandaloneListBox({ props: props, listBoxRef: listBoxRef, collection: collection }) {
    props = {
        ...props,
        collection: collection,
        children: null,
        items: null
    };
    let { layoutDelegate: layoutDelegate } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let { filterFn: filterFn, collectionProps: collectionProps, collectionRef: collectionRef } = (0, react.useContext)((0, Autocomplete/* UNSTABLE_InternalAutocompleteContext */._P)) || {};
    // Memoed so that useAutocomplete callback ref is properly only called once on mount and not everytime a rerender happens
    listBoxRef = (0, useObjectRef/* useObjectRef */.U)((0, react.useMemo)(()=>(0, mergeRefs/* mergeRefs */.P)(listBoxRef, collectionRef !== undefined ? collectionRef : null), [
        collectionRef,
        listBoxRef
    ]));
    let filteredCollection = (0, react.useMemo)(()=>filterFn ? collection.filter(filterFn) : collection, [
        collection,
        filterFn
    ]);
    let state = (0, useListState/* useListState */.p)({
        ...props,
        collection: filteredCollection,
        layoutDelegate: layoutDelegate
    });
    return /*#__PURE__*/ (0, react).createElement($eed445e0843c11d0$var$ListBoxInner, {
        state: state,
        props: {
            ...props,
            ...collectionProps
        },
        listBoxRef: listBoxRef
    });
}
function $eed445e0843c11d0$var$ListBoxInner({ state: state, props: props, listBoxRef: listBoxRef }) {
    let { dragAndDropHooks: dragAndDropHooks, layout: layout = 'stack', orientation: orientation = 'vertical' } = props;
    let { collection: collection, selectionManager: selectionManager } = state;
    let isListDraggable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDraggableCollectionState);
    let isListDroppable = !!(dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDroppableCollectionState);
    let { direction: direction } = (0, context/* useLocale */.Y)();
    let { disabledBehavior: disabledBehavior, disabledKeys: disabledKeys } = selectionManager;
    let collator = (0, useCollator/* useCollator */.Q)({
        usage: 'search',
        sensitivity: 'base'
    });
    let { isVirtualized: isVirtualized, layoutDelegate: layoutDelegate, dropTargetDelegate: ctxDropTargetDelegate, CollectionRoot: CollectionRoot } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let keyboardDelegate = (0, react.useMemo)(()=>props.keyboardDelegate || new (0, ListKeyboardDelegate/* ListKeyboardDelegate */.n)({
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
    let { listBoxProps: listBoxProps } = (0, $c132121280ec012d$export$50eacbbf140a3141)({
        ...props,
        shouldSelectOnPressUp: isListDraggable || props.shouldSelectOnPressUp,
        keyboardDelegate: keyboardDelegate,
        isVirtualized: isVirtualized
    }, state, listBoxRef);
    let dragHooksProvided = (0, react.useRef)(isListDraggable);
    let dropHooksProvided = (0, react.useRef)(isListDroppable);
    (0, react.useEffect)(()=>{
        if (dragHooksProvided.current !== isListDraggable) console.warn('Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
        if (dropHooksProvided.current !== isListDroppable) console.warn('Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
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
            collection: collection,
            selectionManager: selectionManager,
            preview: dragAndDropHooks.renderDragPreview ? preview : undefined
        });
        dragAndDropHooks.useDraggableCollection({}, dragState, listBoxRef);
        let DragPreview = dragAndDropHooks.DragPreview;
        dragPreview = dragAndDropHooks.renderDragPreview ? /*#__PURE__*/ (0, react).createElement(DragPreview, {
            ref: preview
        }, dragAndDropHooks.renderDragPreview) : null;
    }
    if (isListDroppable && dragAndDropHooks) {
        dropState = dragAndDropHooks.useDroppableCollectionState({
            collection: collection,
            selectionManager: selectionManager
        });
        let dropTargetDelegate = dragAndDropHooks.dropTargetDelegate || ctxDropTargetDelegate || new dragAndDropHooks.ListDropTargetDelegate(collection, listBoxRef, {
            orientation: orientation,
            layout: layout,
            direction: direction
        });
        droppableCollection = dragAndDropHooks.useDroppableCollection({
            keyboardDelegate: keyboardDelegate,
            dropTargetDelegate: dropTargetDelegate
        }, dropState, listBoxRef);
        isRootDropTarget = dropState.isDropTarget({
            type: 'root'
        });
    }
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)();
    let renderValues = {
        isDropTarget: isRootDropTarget,
        isEmpty: state.collection.size === 0,
        isFocused: isFocused,
        isFocusVisible: isFocusVisible,
        layout: props.layout || 'stack',
        state: state
    };
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        className: props.className,
        style: props.style,
        defaultClassName: 'react-aria-ListBox',
        values: renderValues
    });
    let emptyState = null;
    if (state.collection.size === 0 && props.renderEmptyState) emptyState = /*#__PURE__*/ (0, react).createElement("div", {
        // eslint-disable-next-line
        role: "option",
        style: {
            display: 'contents'
        }
    }, props.renderEmptyState(renderValues));
    return /*#__PURE__*/ (0, react).createElement((0, FocusScope/* FocusScope */.n1), null, /*#__PURE__*/ (0, react).createElement("div", {
        ...(0, filterDOMProps/* filterDOMProps */.$)(props),
        ...(0, mergeProps/* mergeProps */.v)(listBoxProps, focusProps, droppableCollection === null || droppableCollection === void 0 ? void 0 : droppableCollection.collectionProps),
        ...renderProps,
        ref: listBoxRef,
        slot: props.slot || undefined,
        onScroll: props.onScroll,
        "data-drop-target": isRootDropTarget || undefined,
        "data-empty": state.collection.size === 0 || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-layout": props.layout || 'stack',
        "data-orientation": props.orientation || 'vertical'
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $eed445e0843c11d0$export$7ff8f37d2d81a48d,
                props
            ],
            [
                $eed445e0843c11d0$export$7c5906fe4f1f2af2,
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
                (0, Separator/* SeparatorContext */.$),
                {
                    elementType: 'div'
                }
            ],
            [
                (0, DragAndDrop/* DropIndicatorContext */.U5),
                {
                    render: $eed445e0843c11d0$var$ListBoxDropIndicatorWrapper
                }
            ],
            [
                (0, Collection/* SectionContext */.P2),
                {
                    name: 'ListBoxSection',
                    render: $eed445e0843c11d0$var$ListBoxSectionInner
                }
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement(CollectionRoot, {
        collection: collection,
        scrollRef: listBoxRef,
        persistedKeys: (0, DragAndDrop/* useDndPersistedKeys */.XW)(selectionManager, dragAndDropHooks, dropState),
        renderDropIndicator: (0, DragAndDrop/* useRenderDropIndicator */.oC)(dragAndDropHooks, dropState)
    })), emptyState, dragPreview));
}
function $eed445e0843c11d0$var$ListBoxSectionInner(props, ref, section, className = 'react-aria-ListBoxSection') {
    let state = (0, react.useContext)($eed445e0843c11d0$export$7c5906fe4f1f2af2);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, react.useContext)((0, DragAndDrop/* DragAndDropContext */.Ux));
    let { CollectionBranch: CollectionBranch } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let [headingRef, heading] = (0, utils/* useSlot */._E)();
    var _props_arialabel;
    let { headingProps: headingProps, groupProps: groupProps } = (0, $af383d3bef1cfdc9$export$c3f9f39876e4bc7)({
        heading: heading,
        'aria-label': (_props_arialabel = props['aria-label']) !== null && _props_arialabel !== void 0 ? _props_arialabel : undefined
    });
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        defaultClassName: className,
        className: props.className,
        style: props.style,
        values: {}
    });
    return /*#__PURE__*/ (0, react).createElement("section", {
        ...(0, filterDOMProps/* filterDOMProps */.$)(props),
        ...groupProps,
        ...renderProps,
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
const $eed445e0843c11d0$export$dca12b0bb56e4fc = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $e8Bmu$createBranchComponent)('section', $eed445e0843c11d0$var$ListBoxSectionInner)));
const $eed445e0843c11d0$export$a11e76429ed99b4 = /*#__PURE__*/ (0, CollectionBuilder/* createLeafComponent */.KU)('item', function ListBoxItem(props, forwardedRef, item) {
    let ref = (0, useObjectRef/* useObjectRef */.U)(forwardedRef);
    let state = (0, react.useContext)($eed445e0843c11d0$export$7c5906fe4f1f2af2);
    let { dragAndDropHooks: dragAndDropHooks, dragState: dragState, dropState: dropState } = (0, react.useContext)((0, DragAndDrop/* DragAndDropContext */.Ux));
    let { optionProps: optionProps, labelProps: labelProps, descriptionProps: descriptionProps, ...states } = (0, $293f70390ea03370$export$497855f14858aa34)({
        key: item.key,
        'aria-label': props === null || props === void 0 ? void 0 : props['aria-label']
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* useHover */.M)({
        isDisabled: !states.allowsSelection && !states.hasAction,
        onHoverStart: item.props.onHoverStart,
        onHoverChange: item.props.onHoverChange,
        onHoverEnd: item.props.onHoverEnd
    });
    let draggableItem = null;
    if (dragState && dragAndDropHooks) draggableItem = dragAndDropHooks.useDraggableItem({
        key: item.key
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
            isDropTarget: droppableItem === null || droppableItem === void 0 ? void 0 : droppableItem.isDropTarget
        }
    });
    (0, react.useEffect)(()=>{
        if (!item.textValue) console.warn('A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.');
    }, [
        item.textValue
    ]);
    let ElementType = props.href ? 'a' : 'div';
    return /*#__PURE__*/ (0, react).createElement(ElementType, {
        ...(0, mergeProps/* mergeProps */.v)(optionProps, hoverProps, draggableItem === null || draggableItem === void 0 ? void 0 : draggableItem.dragProps, droppableItem === null || droppableItem === void 0 ? void 0 : droppableItem.dropProps),
        ...renderProps,
        ref: ref,
        "data-allows-dragging": !!dragState || undefined,
        "data-selected": states.isSelected || undefined,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": states.isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-dragging": isDragging || undefined,
        "data-drop-target": (droppableItem === null || droppableItem === void 0 ? void 0 : droppableItem.isDropTarget) || undefined,
        "data-selection-mode": state.selectionManager.selectionMode === 'none' ? undefined : state.selectionManager.selectionMode
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                (0, Text/* TextContext */.h),
                {
                    slots: {
                        label: labelProps,
                        description: descriptionProps
                    }
                }
            ]
        ]
    }, renderProps.children));
});
function $eed445e0843c11d0$var$ListBoxDropIndicatorWrapper(props, ref) {
    ref = (0, useObjectRef/* useObjectRef */.U)(ref);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, react.useContext)((0, DragAndDrop/* DragAndDropContext */.Ux));
    let { dropIndicatorProps: dropIndicatorProps, isHidden: isHidden, isDropTarget: isDropTarget } = dragAndDropHooks.useDropIndicator(props, dropState, ref);
    if (isHidden) return null;
    return /*#__PURE__*/ (0, react).createElement($eed445e0843c11d0$var$ListBoxDropIndicatorForwardRef, {
        ...props,
        dropIndicatorProps: dropIndicatorProps,
        isDropTarget: isDropTarget,
        ref: ref
    });
}
function $eed445e0843c11d0$var$ListBoxDropIndicator(props, ref) {
    let { dropIndicatorProps: dropIndicatorProps, isDropTarget: isDropTarget, ...otherProps } = props;
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...otherProps,
        defaultClassName: 'react-aria-DropIndicator',
        values: {
            isDropTarget: isDropTarget
        }
    });
    return /*#__PURE__*/ (0, react).createElement("div", {
        ...dropIndicatorProps,
        ...renderProps,
        // eslint-disable-next-line
        role: "option",
        ref: ref,
        "data-drop-target": isDropTarget || undefined
    });
}
const $eed445e0843c11d0$var$ListBoxDropIndicatorForwardRef = /*#__PURE__*/ (0, react.forwardRef)($eed445e0843c11d0$var$ListBoxDropIndicator);



//# sourceMappingURL=ListBox.module.js.map


/***/ })

}]);