"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1196],{

/***/ 1981
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ $f47efb0c3a859cf2$export$664f9155035607eb)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58839);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84137);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32217);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5987);
/* harmony import */ var _react_aria_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56111);
/* harmony import */ var _react_aria_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1256);
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12152);
/* harmony import */ var _react_aria_selection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58579);






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




function $f47efb0c3a859cf2$export$664f9155035607eb(props, state, ref) {
    let { isVirtualized: isVirtualized, keyboardDelegate: keyboardDelegate, layoutDelegate: layoutDelegate, onAction: onAction, disallowTypeAhead: disallowTypeAhead, linkBehavior: linkBehavior = 'action', keyboardNavigationBehavior: keyboardNavigationBehavior = 'arrow', escapeKeyBehavior: escapeKeyBehavior = 'clearSelection', shouldSelectOnPressUp: shouldSelectOnPressUp } = props;
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let { listProps: listProps } = (0, _react_aria_selection__WEBPACK_IMPORTED_MODULE_7__/* .useSelectableList */ .y)({
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
        escapeKeyBehavior: escapeKeyBehavior
    });
    let id = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Bi)(props.id);
    (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .listMap */ .nV).set(state, {
        id: id,
        onAction: onAction,
        linkBehavior: linkBehavior,
        keyboardNavigationBehavior: keyboardNavigationBehavior,
        shouldSelectOnPressUp: shouldSelectOnPressUp
    });
    let descriptionProps = (0, _react_aria_grid__WEBPACK_IMPORTED_MODULE_4__/* .useHighlightSelectionDescription */ .m)({
        selectionManager: state.selectionManager,
        hasItemActions: !!onAction
    });
    let hasTabbableChild = (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_6__/* .useHasTabbableChild */ .$)(ref, {
        isDisabled: state.collection.size !== 0
    });
    let domProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .filterDOMProps */ .$)(props, {
        labelable: true
    });
    let gridProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(domProps, {
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
    (0, _react_aria_grid__WEBPACK_IMPORTED_MODULE_5__/* .useGridSelectionAnnouncement */ .H)({}, state);
    return {
        gridProps: gridProps
    };
}



//# sourceMappingURL=useGridList.module.js.map


/***/ },

/***/ 31728
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ $4e8b0456ef72939f$export$9610e69494fadfd2)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58839);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84137);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72166);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99672);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32217);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43831);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24514);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6868);
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85652);
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4175);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96540);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95562);
/* harmony import */ var _react_aria_selection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33462);
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39892);








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






const $4e8b0456ef72939f$var$EXPANSION_KEYS = {
    'expand': {
        ltr: 'ArrowRight',
        rtl: 'ArrowLeft'
    },
    'collapse': {
        ltr: 'ArrowLeft',
        rtl: 'ArrowRight'
    }
};
function $4e8b0456ef72939f$export$9610e69494fadfd2(props, state, ref) {
    var _node_props, _node_props1;
    // Copied from useGridCell + some modifications to make it not so grid specific
    let { node: node, isVirtualized: isVirtualized } = props;
    // let stringFormatter = useLocalizedStringFormatter(intlMessages, '@react-aria/gridlist');
    let { direction: direction } = (0, _react_aria_i18n__WEBPACK_IMPORTED_MODULE_13__/* .useLocale */ .Y)();
    let { onAction: onAction, linkBehavior: linkBehavior, keyboardNavigationBehavior: keyboardNavigationBehavior, shouldSelectOnPressUp: shouldSelectOnPressUp } = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .listMap */ .nV).get(state);
    let descriptionId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useSlotId */ .X1)();
    // We need to track the key of the item at the time it was last focused so that we force
    // focus to go to the item when the DOM node is reused for a different item in a virtualizer.
    let keyWhenFocused = (0, react__WEBPACK_IMPORTED_MODULE_10__.useRef)(null);
    let focus = ()=>{
        // Don't shift focus to the row if the active element is a element within the row already
        // (e.g. clicking on a row button)
        if (ref.current !== null && (keyWhenFocused.current != null && node.key !== keyWhenFocused.current || !(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .isFocusWithin */ .ae)(ref.current))) (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_9__/* .focusSafely */ .l)(ref.current);
    };
    let treeGridRowProps = {};
    let hasChildRows = props.hasChildItems;
    let hasLink = state.selectionManager.isLink(node.key);
    if (node != null && 'expandedKeys' in state) {
        var _state_collection_getChildren, _state_collection;
        // TODO: ideally node.hasChildNodes would be a way to tell if a row has child nodes, but the row's contents make it so that value is always
        // true...
        let children = (_state_collection_getChildren = (_state_collection = state.collection).getChildren) === null || _state_collection_getChildren === void 0 ? void 0 : _state_collection_getChildren.call(_state_collection, node.key);
        hasChildRows = hasChildRows || [
            ...children !== null && children !== void 0 ? children : []
        ].length > 1;
        if (onAction == null && !hasLink && state.selectionManager.selectionMode === 'none' && hasChildRows) onAction = ()=>state.toggleKey(node.key);
        let isExpanded = hasChildRows ? state.expandedKeys.has(node.key) : undefined;
        let setSize = 1;
        let index = node.index;
        if (node.level >= 0 && (node === null || node === void 0 ? void 0 : node.parentKey) != null) {
            let parent = state.collection.getItem(node.parentKey);
            if (parent) {
                // siblings must exist because our original node exists
                let siblings = $4e8b0456ef72939f$var$getDirectChildren(parent, state.collection);
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
    let { itemProps: itemProps, ...itemStates } = (0, _react_aria_selection__WEBPACK_IMPORTED_MODULE_12__/* .useSelectableItem */ .p)({
        selectionManager: state.selectionManager,
        key: node.key,
        ref: ref,
        isVirtualized: isVirtualized,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp || shouldSelectOnPressUp,
        onAction: onAction || ((_node_props = node.props) === null || _node_props === void 0 ? void 0 : _node_props.onAction) ? (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .chain */ .c)((_node_props1 = node.props) === null || _node_props1 === void 0 ? void 0 : _node_props1.onAction, onAction ? ()=>onAction(node.key) : undefined) : undefined,
        focus: focus,
        linkBehavior: linkBehavior
    });
    let onKeyDownCapture = (e)=>{
        let activeElement = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .getActiveElement */ .bq)();
        if (!(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .nodeContains */ .sD)(e.currentTarget, (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .getEventTarget */ .wt)(e)) || !ref.current || !activeElement) return;
        let walker = (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_8__/* .getFocusableTreeWalker */ .N$)(ref.current);
        walker.currentNode = activeElement;
        if ('expandedKeys' in state && activeElement === ref.current) {
            if (e.key === $4e8b0456ef72939f$var$EXPANSION_KEYS['expand'][direction] && state.selectionManager.focusedKey === node.key && hasChildRows && !state.expandedKeys.has(node.key)) {
                state.toggleKey(node.key);
                e.stopPropagation();
                return;
            } else if (e.key === $4e8b0456ef72939f$var$EXPANSION_KEYS['collapse'][direction] && state.selectionManager.focusedKey === node.key && hasChildRows && state.expandedKeys.has(node.key)) {
                state.toggleKey(node.key);
                e.stopPropagation();
                return;
            }
        }
        switch(e.key){
            case 'ArrowLeft':
                if (keyboardNavigationBehavior === 'arrow') {
                    // Find the next focusable element within the row.
                    let focusable = direction === 'rtl' ? walker.nextNode() : walker.previousNode();
                    if (focusable) {
                        e.preventDefault();
                        e.stopPropagation();
                        (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_9__/* .focusSafely */ .l)(focusable);
                        (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_7__/* .scrollIntoViewport */ .o)(focusable, {
                            containingElement: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__/* .getScrollParent */ .m)(ref.current)
                        });
                    } else {
                        // If there is no next focusable child, then return focus back to the row
                        e.preventDefault();
                        e.stopPropagation();
                        if (direction === 'rtl') {
                            (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_9__/* .focusSafely */ .l)(ref.current);
                            (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_7__/* .scrollIntoViewport */ .o)(ref.current, {
                                containingElement: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__/* .getScrollParent */ .m)(ref.current)
                            });
                        } else {
                            walker.currentNode = ref.current;
                            let lastElement = $4e8b0456ef72939f$var$last(walker);
                            if (lastElement) {
                                (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_9__/* .focusSafely */ .l)(lastElement);
                                (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_7__/* .scrollIntoViewport */ .o)(lastElement, {
                                    containingElement: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__/* .getScrollParent */ .m)(ref.current)
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
                        (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_9__/* .focusSafely */ .l)(focusable);
                        (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_7__/* .scrollIntoViewport */ .o)(focusable, {
                            containingElement: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__/* .getScrollParent */ .m)(ref.current)
                        });
                    } else {
                        e.preventDefault();
                        e.stopPropagation();
                        if (direction === 'ltr') {
                            (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_9__/* .focusSafely */ .l)(ref.current);
                            (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_7__/* .scrollIntoViewport */ .o)(ref.current, {
                                containingElement: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__/* .getScrollParent */ .m)(ref.current)
                            });
                        } else {
                            walker.currentNode = ref.current;
                            let lastElement = $4e8b0456ef72939f$var$last(walker);
                            if (lastElement) {
                                (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_9__/* .focusSafely */ .l)(lastElement);
                                (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_7__/* .scrollIntoViewport */ .o)(lastElement, {
                                    containingElement: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__/* .getScrollParent */ .m)(ref.current)
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
                if (!e.altKey && (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .nodeContains */ .sD)(ref.current, (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .getEventTarget */ .wt)(e))) {
                    var _ref_current_parentElement;
                    e.stopPropagation();
                    e.preventDefault();
                    (_ref_current_parentElement = ref.current.parentElement) === null || _ref_current_parentElement === void 0 ? void 0 : _ref_current_parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
                }
                break;
        }
    };
    let onFocus = (e)=>{
        keyWhenFocused.current = node.key;
        if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .getEventTarget */ .wt)(e) !== ref.current) {
            // useSelectableItem only handles setting the focused key when
            // the focused element is the row itself. We also want to
            // set the focused key when a child element receives focus.
            // If focus is currently visible (e.g. the user is navigating with the keyboard),
            // then skip this. We want to restore focus to the previously focused row
            // in that case since the list should act like a single tab stop.
            if (!(0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_11__/* .isFocusVisible */ .pP)()) state.selectionManager.setFocusedKey(node.key);
            return;
        }
    };
    let onKeyDown = (e)=>{
        let activeElement = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .getActiveElement */ .bq)();
        if (!(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .nodeContains */ .sD)(e.currentTarget, (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .getEventTarget */ .wt)(e)) || !ref.current || !activeElement) return;
        switch(e.key){
            case 'Tab':
                if (keyboardNavigationBehavior === 'tab') {
                    // If there is another focusable element within this item, stop propagation so the tab key
                    // is handled by the browser and not by useSelectableCollection (which would take us out of the list).
                    let walker = (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_8__/* .getFocusableTreeWalker */ .N$)(ref.current, {
                        tabbable: true
                    });
                    walker.currentNode = activeElement;
                    let next = e.shiftKey ? walker.previousNode() : walker.nextNode();
                    if (next) e.stopPropagation();
                }
        }
    };
    let syntheticLinkProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__/* .useSyntheticLinkProps */ .HI)(node.props);
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
    let rowProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .mergeProps */ .v)(itemProps, linkProps, {
        role: 'row',
        onKeyDownCapture: onKeyDownCapture,
        onKeyDown: onKeyDown,
        onFocus: onFocus,
        // 'aria-label': [(node.textValue || undefined), rowAnnouncement].filter(Boolean).join(', '),
        'aria-label': node['aria-label'] || node.textValue || undefined,
        'aria-selected': state.selectionManager.canSelectItem(node.key) ? state.selectionManager.isSelected(node.key) : undefined,
        'aria-disabled': state.selectionManager.isDisabled(node.key) || undefined,
        'aria-labelledby': descriptionId && (node['aria-label'] || node.textValue) ? `${(0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getRowId */ .uk)(state, node.key)} ${descriptionId}` : undefined,
        id: (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getRowId */ .uk)(state, node.key)
    });
    if (isVirtualized) {
        let { collection: collection } = state;
        let nodes = [
            ...collection
        ];
        // TODO: refactor ListCollection to store an absolute index of a node's position?
        rowProps['aria-rowindex'] = nodes.find((node)=>node.type === 'section') ? [
            ...collection.getKeys()
        ].filter((key)=>{
            var _collection_getItem;
            return ((_collection_getItem = collection.getItem(key)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.type) !== 'section';
        }).findIndex((key)=>key === node.key) + 1 : node.index + 1;
    }
    let gridCellProps = {
        role: 'gridcell',
        'aria-colindex': 1
    };
    // TODO: should isExpanded and hasChildRows be a item state that gets returned by the hook?
    return {
        rowProps: {
            ...(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .mergeProps */ .v)(rowProps, treeGridRowProps)
        },
        gridCellProps: gridCellProps,
        descriptionProps: {
            id: descriptionId
        },
        ...itemStates
    };
}
function $4e8b0456ef72939f$var$last(walker) {
    let next = null;
    let last = null;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last);
    return next;
}
function $4e8b0456ef72939f$var$getDirectChildren(parent, collection) {
    var _collection_getChildren;
    // We can't assume that we can use firstChildKey because if a person builds a tree using hooks, they would not have access to that property (using type Node vs CollectionNode)
    // Instead, get all children and start at the first node (rather than just using firstChildKey) and only look at its siblings
    let children = (_collection_getChildren = collection.getChildren) === null || _collection_getChildren === void 0 ? void 0 : _collection_getChildren.call(collection, parent.key);
    let childArray = children ? Array.from(children) : [];
    let node = childArray.length > 0 ? childArray[0] : null;
    let siblings = [];
    while(node){
        siblings.push(node);
        node = node.nextKey != null ? collection.getItem(node.nextKey) : null;
    }
    return siblings;
}



//# sourceMappingURL=useGridListItem.module.js.map


/***/ },

/***/ 58839
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nV: () => (/* binding */ $ce9b18daab526bbd$export$5b9bb410392e3991),
/* harmony export */   uk: () => (/* binding */ $ce9b18daab526bbd$export$f45c25170b9a99c2)
/* harmony export */ });
/* unused harmony export normalizeKey */
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
 */ const $ce9b18daab526bbd$export$5b9bb410392e3991 = new WeakMap();
function $ce9b18daab526bbd$export$f45c25170b9a99c2(state, key) {
    var _listMap_get;
    let { id: id } = (_listMap_get = $ce9b18daab526bbd$export$5b9bb410392e3991.get(state)) !== null && _listMap_get !== void 0 ? _listMap_get : {};
    if (!id) throw new Error('Unknown list');
    return `${id}-${$ce9b18daab526bbd$export$e0c709538cb8ae18(key)}`;
}
function $ce9b18daab526bbd$export$e0c709538cb8ae18(key) {
    if (typeof key === 'string') return key.replace(/\s*/g, '');
    return '' + key;
}



//# sourceMappingURL=utils.module.js.map


/***/ }

}]);