"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5856],{

/***/ 3213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ EllipsisVertical)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const EllipsisVertical = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("EllipsisVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);


//# sourceMappingURL=ellipsis-vertical.js.map


/***/ }),

/***/ 6484:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W1: () => (/* binding */ $3674c52c6b3c5bce$export$d9b273488cd8ce6f),
  Dr: () => (/* binding */ $3674c52c6b3c5bce$export$2ce376c2cc3355c8),
  cQ: () => (/* binding */ $3674c52c6b3c5bce$export$27d2ad3c5815583e)
});

// UNUSED EXPORTS: MenuContext, MenuSection, MenuStateContext, RootMenuTriggerStateContext, SubmenuTrigger

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Collection.mjs
var Collection = __webpack_require__(64606);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Header.mjs
var Header = __webpack_require__(83181);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria-components/dist/Keyboard.mjs



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

const $63df2425e2108aa8$export$744d98a3b8a94e1c = /*#__PURE__*/ (0, react.createContext)({});
const $63df2425e2108aa8$export$16e4d70cc375e707 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $3zqIJ$forwardRef)(function Keyboard(props, ref) {
    [props, ref] = (0, $64fa3d84918910a7$export$29f1550f4b0d4415)(props, ref, $63df2425e2108aa8$export$744d98a3b8a94e1c);
    return /*#__PURE__*/ (0, $3zqIJ$react).createElement("kbd", {
        dir: "ltr",
        ...props,
        ref: ref
    });
})));



//# sourceMappingURL=Keyboard.module.js.map

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs
var Dialog = __webpack_require__(54194);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Separator.mjs
var Separator = __webpack_require__(31815);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Autocomplete.mjs
var Autocomplete = __webpack_require__(99350);
// EXTERNAL MODULE: ./node_modules/@react-aria/menu/dist/useMenuTrigger.mjs + 35 modules
var useMenuTrigger = __webpack_require__(25263);
;// ./node_modules/@react-aria/menu/dist/utils.mjs
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
 */ const $fc79756100351201$export$6f49b4016bfc8d56 = new WeakMap();



//# sourceMappingURL=utils.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useSelectableList.mjs
var useSelectableList = __webpack_require__(58579);
;// ./node_modules/@react-aria/menu/dist/useMenu.mjs




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


function $d5336fe17ce95402$export$38eaa17faae8f579(props, state, ref) {
    let { shouldFocusWrap: shouldFocusWrap = true, onKeyDown: onKeyDown, onKeyUp: onKeyUp, ...otherProps } = props;
    if (!props['aria-label'] && !props['aria-labelledby']) console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        labelable: true
    });
    let { listProps: listProps } = (0, useSelectableList/* useSelectableList */.y)({
        ...otherProps,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        shouldFocusWrap: shouldFocusWrap,
        linkBehavior: 'override'
    });
    (0, $fc79756100351201$export$6f49b4016bfc8d56).set(state, {
        onClose: props.onClose,
        onAction: props.onAction,
        shouldUseVirtualFocus: props.shouldUseVirtualFocus
    });
    return {
        menuProps: (0, mergeProps/* mergeProps */.v)(domProps, {
            onKeyDown: onKeyDown,
            onKeyUp: onKeyUp
        }, {
            role: 'menu',
            ...listProps,
            onKeyDown: (e)=>{
                var _listProps_onKeyDown;
                // don't clear the menu selected keys if the user is presses escape since escape closes the menu
                if (e.key !== 'Escape' || props.shouldUseVirtualFocus) (_listProps_onKeyDown = listProps.onKeyDown) === null || _listProps_onKeyDown === void 0 ? void 0 : _listProps_onKeyDown.call(listProps, e);
            }
        })
    };
}



//# sourceMappingURL=useMenu.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs + 1 modules
var FocusScope = __webpack_require__(68305);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useId.mjs + 1 modules
var useId = __webpack_require__(84137);
;// ./node_modules/@react-aria/menu/dist/useMenuSection.mjs


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
function $3e5eb2498db5b506$export$73f7a44322579622(props) {
    let { heading: heading, 'aria-label': ariaLabel } = props;
    let headingId = (0, useId/* useId */.Bi)();
    return {
        itemProps: {
            role: 'presentation'
        },
        headingProps: heading ? {
            // Techincally, menus cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, using role="presentation",
            // and only use it as a label for the nested group.
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



//# sourceMappingURL=useMenuSection.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/openLink.mjs
var openLink = __webpack_require__(43831);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/getItemCount.mjs
var getItemCount = __webpack_require__(70732);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/usePress.mjs + 6 modules
var usePress = __webpack_require__(35044);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(95562);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useKeyboard.mjs + 1 modules
var useKeyboard = __webpack_require__(63029);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocus.mjs
var useFocus = __webpack_require__(33424);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useSelectableItem.mjs
var useSelectableItem = __webpack_require__(33462);
;// ./node_modules/@react-aria/menu/dist/useMenuItem.mjs






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




function $a2e5df62f93c7633$export$9d32628fc2aea7da(props, state, ref) {
    let { id: id, key: key, closeOnSelect: closeOnSelect, isVirtualized: isVirtualized, 'aria-haspopup': hasPopup, onPressStart: pressStartProp, onPressUp: pressUpProp, onPress: pressProp, onPressChange: onPressChange, onPressEnd: onPressEnd, onHoverStart: hoverStartProp, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onFocus: onFocus, onFocusChange: onFocusChange, onBlur: onBlur, selectionManager: selectionManager = state.selectionManager } = props;
    let isTrigger = !!hasPopup;
    let isTriggerExpanded = isTrigger && props['aria-expanded'] === 'true';
    var _props_isDisabled;
    let isDisabled = (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : selectionManager.isDisabled(key);
    var _props_isSelected;
    let isSelected = (_props_isSelected = props.isSelected) !== null && _props_isSelected !== void 0 ? _props_isSelected : selectionManager.isSelected(key);
    let data = (0, $fc79756100351201$export$6f49b4016bfc8d56).get(state);
    let item = state.collection.getItem(key);
    let onClose = props.onClose || data.onClose;
    let router = (0, openLink/* useRouter */.rd)();
    let performAction = (e)=>{
        var _item_props;
        if (isTrigger) return;
        if (item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.onAction) item.props.onAction();
        else if (props.onAction) props.onAction(key);
        if (data.onAction) {
            // Must reassign to variable otherwise `this` binding gets messed up. Something to do with WeakMap.
            let onAction = data.onAction;
            onAction(key);
        }
        if (e.target instanceof HTMLAnchorElement && item) router.open(e.target, e, item.props.href, item.props.routerOptions);
    };
    let role = 'menuitem';
    if (!isTrigger) {
        if (selectionManager.selectionMode === 'single') role = 'menuitemradio';
        else if (selectionManager.selectionMode === 'multiple') role = 'menuitemcheckbox';
    }
    let labelId = (0, useId/* useSlotId */.X1)();
    let descriptionId = (0, useId/* useSlotId */.X1)();
    let keyboardId = (0, useId/* useSlotId */.X1)();
    let ariaProps = {
        id: id,
        'aria-disabled': isDisabled || undefined,
        role: role,
        'aria-label': props['aria-label'],
        'aria-labelledby': labelId,
        'aria-describedby': [
            descriptionId,
            keyboardId
        ].filter(Boolean).join(' ') || undefined,
        'aria-controls': props['aria-controls'],
        'aria-haspopup': hasPopup,
        'aria-expanded': props['aria-expanded']
    };
    if (selectionManager.selectionMode !== 'none' && !isTrigger) ariaProps['aria-checked'] = isSelected;
    if (isVirtualized) {
        ariaProps['aria-posinset'] = item === null || item === void 0 ? void 0 : item.index;
        ariaProps['aria-setsize'] = (0, getItemCount/* getItemCount */.v)(state.collection);
    }
    let onPressStart = (e)=>{
        if (e.pointerType === 'keyboard') performAction(e);
        pressStartProp === null || pressStartProp === void 0 ? void 0 : pressStartProp(e);
    };
    let maybeClose = ()=>{
        // Pressing a menu item should close by default in single selection mode but not multiple
        // selection mode, except if overridden by the closeOnSelect prop.
        if (!isTrigger && onClose && (closeOnSelect !== null && closeOnSelect !== void 0 ? closeOnSelect : selectionManager.selectionMode !== 'multiple' || selectionManager.isLink(key))) onClose();
    };
    let onPressUp = (e)=>{
        // If interacting with mouse, allow the user to mouse down on the trigger button,
        // drag, and release over an item (matching native behavior).
        if (e.pointerType === 'mouse') {
            performAction(e);
            maybeClose();
        }
        pressUpProp === null || pressUpProp === void 0 ? void 0 : pressUpProp(e);
    };
    let onPress = (e)=>{
        if (e.pointerType !== 'keyboard' && e.pointerType !== 'mouse') {
            performAction(e);
            maybeClose();
        }
        pressProp === null || pressProp === void 0 ? void 0 : pressProp(e);
    };
    let { itemProps: itemProps, isFocused: isFocused } = (0, useSelectableItem/* useSelectableItem */.p)({
        id: id,
        selectionManager: selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: true,
        allowsDifferentPressOrigin: true,
        // Disable all handling of links in useSelectable item
        // because we handle it ourselves. The behavior of menus
        // is slightly different from other collections because
        // actions are performed on key down rather than key up.
        linkBehavior: 'none',
        shouldUseVirtualFocus: data.shouldUseVirtualFocus
    });
    let { pressProps: pressProps, isPressed: isPressed } = (0, usePress/* usePress */.d)({
        onPressStart: onPressStart,
        onPress: onPress,
        onPressUp: onPressUp,
        onPressChange: onPressChange,
        onPressEnd: onPressEnd,
        isDisabled: isDisabled
    });
    let { hoverProps: hoverProps } = (0, useHover/* useHover */.M)({
        isDisabled: isDisabled,
        onHoverStart (e) {
            // Hovering over an already expanded sub dialog trigger should keep focus in the dialog.
            if (!(0, useFocusVisible/* isFocusVisible */.pP)() && !(isTriggerExpanded && hasPopup === 'dialog')) {
                selectionManager.setFocused(true);
                selectionManager.setFocusedKey(key);
            }
            hoverStartProp === null || hoverStartProp === void 0 ? void 0 : hoverStartProp(e);
        },
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd
    });
    let { keyboardProps: keyboardProps } = (0, useKeyboard/* useKeyboard */.d)({
        onKeyDown: (e)=>{
            // Ignore repeating events, which may have started on the menu trigger before moving
            // focus to the menu item. We want to wait for a second complete key press sequence.
            if (e.repeat) {
                e.continuePropagation();
                return;
            }
            switch(e.key){
                case ' ':
                    if (!isDisabled && selectionManager.selectionMode === 'none' && !isTrigger && closeOnSelect !== false && onClose) onClose();
                    break;
                case 'Enter':
                    // The Enter key should always close on select, except if overridden.
                    if (!isDisabled && closeOnSelect !== false && !isTrigger && onClose) onClose();
                    break;
                default:
                    if (!isTrigger) e.continuePropagation();
                    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
                    break;
            }
        },
        onKeyUp: onKeyUp
    });
    let { focusProps: focusProps } = (0, useFocus/* useFocus */.i)({
        onBlur: onBlur,
        onFocus: onFocus,
        onFocusChange: onFocusChange
    });
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(item === null || item === void 0 ? void 0 : item.props);
    delete domProps.id;
    let linkProps = (0, openLink/* useLinkProps */._h)(item === null || item === void 0 ? void 0 : item.props);
    return {
        menuItemProps: {
            ...ariaProps,
            ...(0, mergeProps/* mergeProps */.v)(domProps, linkProps, isTrigger ? {
                onFocus: itemProps.onFocus,
                'data-key': itemProps['data-key']
            } : itemProps, pressProps, hoverProps, keyboardProps, focusProps),
            // If a submenu is expanded, set the tabIndex to -1 so that shift tabbing goes out of the menu instead of the parent menu item.
            tabIndex: itemProps.tabIndex != null && isTriggerExpanded ? -1 : itemProps.tabIndex
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        keyboardShortcutProps: {
            id: keyboardId
        },
        isFocused: isFocused,
        isSelected: isSelected,
        isPressed: isPressed,
        isDisabled: isDisabled
    };
}



//# sourceMappingURL=useMenuItem.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/@react-stately/menu/dist/useMenuTriggerState.mjs
var useMenuTriggerState = __webpack_require__(55745);
;// ./node_modules/@react-stately/tree/dist/TreeCollection.mjs
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
 */ class $05ca4cd7c4a5a999$export$863faf230ee2118a {
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
    constructor(nodes, { expandedKeys: expandedKeys } = {}){
        this.keyMap = new Map();
        this.firstKey = null;
        this.lastKey = null;
        this.iterable = nodes;
        expandedKeys = expandedKeys || new Set();
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && (node.type === 'section' || expandedKeys.has(node.key))) for (let child of node.childNodes)visit(child);
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



//# sourceMappingURL=TreeCollection.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-stately/selection/dist/useMultipleSelectionState.mjs
var useMultipleSelectionState = __webpack_require__(73837);
// EXTERNAL MODULE: ./node_modules/@react-stately/selection/dist/SelectionManager.mjs
var SelectionManager = __webpack_require__(60632);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/useCollection.mjs + 1 modules
var useCollection = __webpack_require__(13796);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/useControlledState.mjs
var useControlledState = __webpack_require__(8356);
;// ./node_modules/@react-stately/tree/dist/useTreeState.mjs






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




function $875d6693e12af071$export$728d6ba534403756(props) {
    let { onExpandedChange: onExpandedChange } = props;
    let [expandedKeys, setExpandedKeys] = (0, useControlledState/* useControlledState */.P)(props.expandedKeys ? new Set(props.expandedKeys) : undefined, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : new Set(), onExpandedChange);
    let selectionState = (0, useMultipleSelectionState/* useMultipleSelectionState */.R)(props);
    let disabledKeys = (0, react.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let tree = (0, useCollection/* useCollection */.G)(props, (0, react.useCallback)((nodes)=>new (0, $05ca4cd7c4a5a999$export$863faf230ee2118a)(nodes, {
            expandedKeys: expandedKeys
        }), [
        expandedKeys
    ]), null);
    // Reset focused key if that item is deleted from the collection.
    (0, react.useEffect)(()=>{
        if (selectionState.focusedKey != null && !tree.getItem(selectionState.focusedKey)) selectionState.setFocusedKey(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        tree,
        selectionState.focusedKey
    ]);
    let onToggle = (key)=>{
        setExpandedKeys($875d6693e12af071$var$toggleKey(expandedKeys, key));
    };
    return {
        collection: tree,
        expandedKeys: expandedKeys,
        disabledKeys: disabledKeys,
        toggleKey: onToggle,
        setExpandedKeys: setExpandedKeys,
        selectionManager: new (0, SelectionManager/* SelectionManager */.Y)(tree, selectionState)
    };
}
function $875d6693e12af071$var$toggleKey(set, key) {
    let res = new Set(set);
    if (res.has(key)) res.delete(key);
    else res.add(key);
    return res;
}



//# sourceMappingURL=useTreeState.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var useResizeObserver = __webpack_require__(77366);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useObjectRef.mjs
var useObjectRef = __webpack_require__(83908);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeRefs.mjs
var mergeRefs = __webpack_require__(17099);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/PressResponder.mjs
var PressResponder = __webpack_require__(83362);
;// ./node_modules/react-aria-components/dist/Menu.mjs



















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

















const $3674c52c6b3c5bce$export$c7e742effb1c51e2 = /*#__PURE__*/ (0, react.createContext)(null);
const $3674c52c6b3c5bce$export$24aad8519b95b41b = /*#__PURE__*/ (0, react.createContext)(null);
const $3674c52c6b3c5bce$export$795aec4671cbae19 = /*#__PURE__*/ (0, react.createContext)(null);
const $3674c52c6b3c5bce$var$SelectionManagerContext = /*#__PURE__*/ (0, react.createContext)(null);
function $3674c52c6b3c5bce$export$27d2ad3c5815583e(props) {
    let state = (0, useMenuTriggerState/* useMenuTriggerState */.I)(props);
    let ref = (0, react.useRef)(null);
    let { menuTriggerProps: menuTriggerProps, menuProps: menuProps } = (0, useMenuTrigger/* useMenuTrigger */.V)({
        ...props,
        type: 'menu'
    }, state, ref);
    // Allows menu width to match button
    let [buttonWidth, setButtonWidth] = (0, react.useState)(null);
    let onResize = (0, react.useCallback)(()=>{
        if (ref.current) setButtonWidth(ref.current.offsetWidth + 'px');
    }, [
        ref
    ]);
    (0, useResizeObserver/* useResizeObserver */.w)({
        ref: ref,
        onResize: onResize
    });
    let scrollRef = (0, react.useRef)(null);
    return /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $3674c52c6b3c5bce$export$c7e742effb1c51e2,
                {
                    ...menuProps,
                    ref: scrollRef
                }
            ],
            [
                (0, Dialog/* OverlayTriggerStateContext */.RG),
                state
            ],
            [
                $3674c52c6b3c5bce$export$795aec4671cbae19,
                state
            ],
            [
                (0, Popover/* PopoverContext */.n),
                {
                    trigger: 'MenuTrigger',
                    triggerRef: ref,
                    scrollRef: scrollRef,
                    placement: 'bottom start',
                    style: {
                        '--trigger-width': buttonWidth
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement((0, PressResponder/* PressResponder */.Y), {
        ...menuTriggerProps,
        ref: ref,
        isPressed: state.isOpen
    }, props.children));
}
const $3674c52c6b3c5bce$var$SubmenuTriggerContext = /*#__PURE__*/ (0, react.createContext)(null);
const $3674c52c6b3c5bce$export$ecabc99eeffab7ca = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $kM2ZM$createBranchComponent)('submenutrigger', (props, ref, item)=>{
    let { CollectionBranch: CollectionBranch } = (0, $kM2ZM$useContext)((0, $7135fc7d473fd974$export$4feb769f8ddf26c5));
    let state = (0, $kM2ZM$useContext)($3674c52c6b3c5bce$export$24aad8519b95b41b);
    let rootMenuTriggerState = (0, $kM2ZM$useContext)($3674c52c6b3c5bce$export$795aec4671cbae19);
    let submenuTriggerState = (0, $kM2ZM$useSubmenuTriggerState)({
        triggerKey: item.key
    }, rootMenuTriggerState);
    let submenuRef = (0, $kM2ZM$useRef)(null);
    let itemRef = (0, $kM2ZM$useObjectRef)(ref);
    let { parentMenuRef: parentMenuRef } = (0, $kM2ZM$useContext)($3674c52c6b3c5bce$var$SubmenuTriggerContext);
    let { submenuTriggerProps: submenuTriggerProps, submenuProps: submenuProps, popoverProps: popoverProps } = (0, $kM2ZM$useSubmenuTrigger)({
        parentMenuRef: parentMenuRef,
        submenuRef: submenuRef,
        delay: props.delay
    }, submenuTriggerState, itemRef);
    return /*#__PURE__*/ (0, $kM2ZM$react).createElement((0, $64fa3d84918910a7$export$2881499e37b75b9a), {
        values: [
            [
                $3674c52c6b3c5bce$var$MenuItemContext,
                {
                    ...submenuTriggerProps,
                    onAction: undefined,
                    ref: itemRef
                }
            ],
            [
                $3674c52c6b3c5bce$export$c7e742effb1c51e2,
                submenuProps
            ],
            [
                (0, $de32f1b87079253c$export$d2f961adcb0afbe),
                submenuTriggerState
            ],
            [
                (0, $07b14b47974efb58$export$9b9a0cd73afb7ca4),
                {
                    ref: submenuRef,
                    trigger: 'SubmenuTrigger',
                    triggerRef: itemRef,
                    placement: 'end top',
                    // Prevent parent popover from hiding submenu.
                    // @ts-ignore
                    'data-react-aria-top-layer': true,
                    ...popoverProps
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $kM2ZM$react).createElement(CollectionBranch, {
        collection: state.collection,
        parent: item
    }), props.children[1]);
}, (props)=>props.children[0])));
const $3674c52c6b3c5bce$export$d9b273488cd8ce6f = /*#__PURE__*/ (0, react.forwardRef)(function Menu(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $3674c52c6b3c5bce$export$c7e742effb1c51e2);
    // Delay rendering the actual menu until we have the collection so that auto focus works properly.
    return /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* Collection */.pM), props)
    }, (collection)=>collection.size > 0 && /*#__PURE__*/ (0, react).createElement($3674c52c6b3c5bce$var$MenuInner, {
            props: props,
            collection: collection,
            menuRef: ref
        }));
});
function $3674c52c6b3c5bce$var$MenuInner({ props: props, collection: collection, menuRef: ref }) {
    let { filterFn: filterFn, collectionProps: autocompleteMenuProps, collectionRef: collectionRef } = (0, react.useContext)((0, Autocomplete/* UNSTABLE_InternalAutocompleteContext */._P)) || {};
    // Memoed so that useAutocomplete callback ref is properly only called once on mount and not everytime a rerender happens
    ref = (0, useObjectRef/* useObjectRef */.U)((0, react.useMemo)(()=>(0, mergeRefs/* mergeRefs */.P)(ref, collectionRef !== undefined ? collectionRef : null), [
        collectionRef,
        ref
    ]));
    let filteredCollection = (0, react.useMemo)(()=>filterFn ? collection.filter(filterFn) : collection, [
        collection,
        filterFn
    ]);
    let state = (0, $875d6693e12af071$export$728d6ba534403756)({
        ...props,
        collection: filteredCollection,
        children: undefined
    });
    let triggerState = (0, react.useContext)($3674c52c6b3c5bce$export$795aec4671cbae19);
    let { isVirtualized: isVirtualized, CollectionRoot: CollectionRoot } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let { menuProps: menuProps } = (0, $d5336fe17ce95402$export$38eaa17faae8f579)({
        ...props,
        ...autocompleteMenuProps,
        isVirtualized: isVirtualized,
        onClose: props.onClose || (triggerState === null || triggerState === void 0 ? void 0 : triggerState.close)
    }, state, ref);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        defaultClassName: 'react-aria-Menu',
        className: props.className,
        style: props.style,
        values: {}
    });
    return /*#__PURE__*/ (0, react).createElement((0, FocusScope/* FocusScope */.n1), null, /*#__PURE__*/ (0, react).createElement("div", {
        ...(0, filterDOMProps/* filterDOMProps */.$)(props),
        ...menuProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        onScroll: props.onScroll
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $3674c52c6b3c5bce$export$24aad8519b95b41b,
                state
            ],
            [
                (0, Separator/* SeparatorContext */.$),
                {
                    elementType: 'div'
                }
            ],
            [
                (0, Collection/* SectionContext */.P2),
                {
                    name: 'MenuSection',
                    render: $3674c52c6b3c5bce$var$MenuSectionInner
                }
            ],
            [
                $3674c52c6b3c5bce$var$SubmenuTriggerContext,
                {
                    parentMenuRef: ref
                }
            ],
            [
                $3674c52c6b3c5bce$var$MenuItemContext,
                null
            ],
            [
                $3674c52c6b3c5bce$var$SelectionManagerContext,
                state.selectionManager
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement(CollectionRoot, {
        collection: state.collection,
        persistedKeys: (0, Collection/* usePersistedKeys */.l2)(state.selectionManager.focusedKey),
        scrollRef: ref
    }))));
}
// A subclass of SelectionManager that forwards focus-related properties to the parent,
// but has its own local selection state.
class $3674c52c6b3c5bce$var$GroupSelectionManager extends (0, SelectionManager/* SelectionManager */.Y) {
    get focusedKey() {
        return this.parent.focusedKey;
    }
    get isFocused() {
        return this.parent.isFocused;
    }
    setFocusedKey(key, childFocusStrategy) {
        return this.parent.setFocusedKey(key, childFocusStrategy);
    }
    setFocused(isFocused) {
        this.parent.setFocused(isFocused);
    }
    get childFocusStrategy() {
        return this.parent.childFocusStrategy;
    }
    constructor(parent, state){
        super(parent.collection, state);
        this.parent = parent;
    }
}
function $3674c52c6b3c5bce$var$MenuSectionInner(props, ref, section, className = 'react-aria-MenuSection') {
    var _section_props, _section_props1;
    let state = (0, react.useContext)($3674c52c6b3c5bce$export$24aad8519b95b41b);
    let { CollectionBranch: CollectionBranch } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let [headingRef, heading] = (0, utils/* useSlot */._E)();
    var _section_props_arialabel;
    let { headingProps: headingProps, groupProps: groupProps } = (0, $3e5eb2498db5b506$export$73f7a44322579622)({
        heading: heading,
        'aria-label': (_section_props_arialabel = section.props['aria-label']) !== null && _section_props_arialabel !== void 0 ? _section_props_arialabel : undefined
    });
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        defaultClassName: className,
        className: (_section_props = section.props) === null || _section_props === void 0 ? void 0 : _section_props.className,
        style: (_section_props1 = section.props) === null || _section_props1 === void 0 ? void 0 : _section_props1.style,
        values: {}
    });
    let parent = (0, react.useContext)($3674c52c6b3c5bce$var$SelectionManagerContext);
    let selectionState = (0, useMultipleSelectionState/* useMultipleSelectionState */.R)(props);
    let manager = props.selectionMode != null ? new $3674c52c6b3c5bce$var$GroupSelectionManager(parent, selectionState) : parent;
    return /*#__PURE__*/ (0, react).createElement("section", {
        ...(0, filterDOMProps/* filterDOMProps */.$)(props),
        ...groupProps,
        ...renderProps,
        ref: ref
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                (0, Header/* HeaderContext */.B),
                {
                    ...headingProps,
                    ref: headingRef
                }
            ],
            [
                $3674c52c6b3c5bce$var$SelectionManagerContext,
                manager
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement(CollectionBranch, {
        collection: state.collection,
        parent: section
    })));
}
const $3674c52c6b3c5bce$export$4b1545b4f2016d26 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $kM2ZM$createBranchComponent)('section', $3674c52c6b3c5bce$var$MenuSectionInner)));
const $3674c52c6b3c5bce$var$MenuItemContext = /*#__PURE__*/ (0, react.createContext)(null);
const $3674c52c6b3c5bce$export$2ce376c2cc3355c8 = /*#__PURE__*/ (0, CollectionBuilder/* createLeafComponent */.KU)('item', function MenuItem(props, forwardedRef, item) {
    var _useSlottedContext;
    [props, forwardedRef] = (0, utils/* useContextProps */.JT)(props, forwardedRef, $3674c52c6b3c5bce$var$MenuItemContext);
    let id = (_useSlottedContext = (0, utils/* useSlottedContext */.CC)($3674c52c6b3c5bce$var$MenuItemContext)) === null || _useSlottedContext === void 0 ? void 0 : _useSlottedContext.id;
    let state = (0, react.useContext)($3674c52c6b3c5bce$export$24aad8519b95b41b);
    let ref = (0, useObjectRef/* useObjectRef */.U)(forwardedRef);
    let selectionManager = (0, react.useContext)($3674c52c6b3c5bce$var$SelectionManagerContext);
    let { menuItemProps: menuItemProps, labelProps: labelProps, descriptionProps: descriptionProps, keyboardShortcutProps: keyboardShortcutProps, ...states } = (0, $a2e5df62f93c7633$export$9d32628fc2aea7da)({
        ...props,
        id: id,
        key: item.key,
        selectionManager: selectionManager
    }, state, ref);
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, useFocusRing/* useFocusRing */.o)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* useHover */.M)({
        isDisabled: states.isDisabled
    });
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-MenuItem',
        values: {
            ...states,
            isHovered: isHovered,
            isFocusVisible: isFocusVisible,
            selectionMode: selectionManager.selectionMode,
            selectionBehavior: selectionManager.selectionBehavior,
            hasSubmenu: !!props['aria-haspopup'],
            isOpen: props['aria-expanded'] === 'true'
        }
    });
    let ElementType = props.href ? 'a' : 'div';
    return /*#__PURE__*/ (0, react).createElement(ElementType, {
        ...(0, mergeProps/* mergeProps */.v)(menuItemProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-selected": states.isSelected || undefined,
        "data-selection-mode": selectionManager.selectionMode === 'none' ? undefined : selectionManager.selectionMode,
        "data-has-submenu": !!props['aria-haspopup'] || undefined,
        "data-open": props['aria-expanded'] === 'true' || undefined
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
            ],
            [
                (0, $63df2425e2108aa8$export$744d98a3b8a94e1c),
                keyboardShortcutProps
            ]
        ]
    }, renderProps.children));
});



//# sourceMappingURL=Menu.module.js.map


/***/ })

}]);