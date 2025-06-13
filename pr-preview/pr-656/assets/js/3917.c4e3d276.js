"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[3917],{

/***/ 319:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ $a0d645289fe9b86b$export$e7f05e985daf4b5f)
/* harmony export */ });
/* harmony import */ var _useListState_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46655);
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8356);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);




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


function $a0d645289fe9b86b$export$e7f05e985daf4b5f(props) {
    var _props_defaultSelectedKey;
    let [selectedKey, setSelectedKey] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__/* .useControlledState */ .P)(props.selectedKey, (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : null, props.onSelectionChange);
    let selectedKeys = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>selectedKey != null ? [
            selectedKey
        ] : [], [
        selectedKey
    ]);
    let { collection: collection, disabledKeys: disabledKeys, selectionManager: selectionManager } = (0, _useListState_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useListState */ .p)({
        ...props,
        selectionMode: 'single',
        disallowEmptySelection: true,
        allowDuplicateSelectionEvents: true,
        selectedKeys: selectedKeys,
        onSelectionChange: (keys)=>{
            // impossible, but TS doesn't know that
            if (keys === 'all') return;
            var _keys_values_next_value;
            let key = (_keys_values_next_value = keys.values().next().value) !== null && _keys_values_next_value !== void 0 ? _keys_values_next_value : null;
            // Always fire onSelectionChange, even if the key is the same
            // as the current key (useControlledState does not).
            if (key === selectedKey && props.onSelectionChange) props.onSelectionChange(key);
            setSelectedKey(key);
        }
    });
    let selectedItem = selectedKey != null ? collection.getItem(selectedKey) : null;
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: selectionManager,
        selectedKey: selectedKey,
        setSelectedKey: setSelectedKey,
        selectedItem: selectedItem
    };
}



//# sourceMappingURL=useSingleSelectListState.module.js.map


/***/ }),

/***/ 63917:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  oz: () => (/* binding */ $5e8ad37a45e1c704$export$3e41faf802a29e71),
  wb: () => (/* binding */ $5e8ad37a45e1c704$export$e51a686c67fdaa2d),
  Kp: () => (/* binding */ $5e8ad37a45e1c704$export$3d96ec278d3efce4),
  tU: () => (/* binding */ $5e8ad37a45e1c704$export$b2539bed5023c21c)
});

// UNUSED EXPORTS: TabListStateContext, TabsContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Collection.mjs
var Collection = __webpack_require__(64606);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
;// ./node_modules/@react-aria/tabs/dist/utils.mjs
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
 */ const $99b62ae3ff97ec45$export$c5f62239608282b6 = new WeakMap();
function $99b62ae3ff97ec45$export$567fc7097e064344(state, key, role) {
    if (!state) // this case should only happen in the first render before the tabs are registered
    return '';
    if (typeof key === 'string') key = key.replace(/\s+/g, '');
    let baseId = $99b62ae3ff97ec45$export$c5f62239608282b6.get(state);
    return `${baseId}-${role}-${key}`;
}



//# sourceMappingURL=utils.module.js.map

;// ./node_modules/@react-aria/tabs/dist/TabsKeyboardDelegate.mjs
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
 */ class $bfc6f2d60b8a4c40$export$15010ca3c1abe90b {
    getKeyLeftOf(key) {
        if (this.flipDirection) return this.getNextKey(key);
        return this.getPreviousKey(key);
    }
    getKeyRightOf(key) {
        if (this.flipDirection) return this.getPreviousKey(key);
        return this.getNextKey(key);
    }
    isDisabled(key) {
        var _this_collection_getItem_props, _this_collection_getItem;
        return this.disabledKeys.has(key) || !!((_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : (_this_collection_getItem_props = _this_collection_getItem.props) === null || _this_collection_getItem_props === void 0 ? void 0 : _this_collection_getItem_props.isDisabled);
    }
    getFirstKey() {
        let key = this.collection.getFirstKey();
        if (key != null && this.isDisabled(key)) key = this.getNextKey(key);
        return key;
    }
    getLastKey() {
        let key = this.collection.getLastKey();
        if (key != null && this.isDisabled(key)) key = this.getPreviousKey(key);
        return key;
    }
    getKeyAbove(key) {
        if (this.tabDirection) return null;
        return this.getPreviousKey(key);
    }
    getKeyBelow(key) {
        if (this.tabDirection) return null;
        return this.getNextKey(key);
    }
    getNextKey(startKey) {
        let key = startKey;
        do {
            key = this.collection.getKeyAfter(key);
            if (key == null) key = this.collection.getFirstKey();
        }while (key != null && this.isDisabled(key));
        return key;
    }
    getPreviousKey(startKey) {
        let key = startKey;
        do {
            key = this.collection.getKeyBefore(key);
            if (key == null) key = this.collection.getLastKey();
        }while (key != null && this.isDisabled(key));
        return key;
    }
    constructor(collection, direction, orientation, disabledKeys = new Set()){
        this.collection = collection;
        this.flipDirection = direction === 'rtl' && orientation === 'horizontal';
        this.disabledKeys = disabledKeys;
        this.tabDirection = orientation === 'horizontal';
    }
}



//# sourceMappingURL=TabsKeyboardDelegate.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useId.mjs + 1 modules
var useId = __webpack_require__(84137);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLabels.mjs
var useLabels = __webpack_require__(37061);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useSelectableCollection.mjs + 2 modules
var useSelectableCollection = __webpack_require__(1243);
;// ./node_modules/@react-aria/tabs/dist/useTabList.mjs







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





function $58d314389b21fa3f$export$773e389e644c5874(props, state, ref) {
    let { orientation: orientation = 'horizontal', keyboardActivation: keyboardActivation = 'automatic' } = props;
    let { collection: collection, selectionManager: manager, disabledKeys: disabledKeys } = state;
    let { direction: direction } = (0, context/* useLocale */.Y)();
    let delegate = (0, react.useMemo)(()=>new (0, $bfc6f2d60b8a4c40$export$15010ca3c1abe90b)(collection, direction, orientation, disabledKeys), [
        collection,
        disabledKeys,
        orientation,
        direction
    ]);
    let { collectionProps: collectionProps } = (0, useSelectableCollection/* useSelectableCollection */.y)({
        ref: ref,
        selectionManager: manager,
        keyboardDelegate: delegate,
        selectOnFocus: keyboardActivation === 'automatic',
        disallowEmptySelection: true,
        scrollRef: ref,
        linkBehavior: 'selection'
    });
    // Compute base id for all tabs
    let tabsId = (0, useId/* useId */.Bi)();
    (0, $99b62ae3ff97ec45$export$c5f62239608282b6).set(state, tabsId);
    let tabListLabelProps = (0, useLabels/* useLabels */.b)({
        ...props,
        id: tabsId
    });
    return {
        tabListProps: {
            ...(0, mergeProps/* mergeProps */.v)(collectionProps, tabListLabelProps),
            role: 'tablist',
            'aria-orientation': orientation,
            tabIndex: undefined
        }
    };
}



//# sourceMappingURL=useTabList.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/openLink.mjs
var openLink = __webpack_require__(43831);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusable.mjs
var useFocusable = __webpack_require__(28940);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useSelectableItem.mjs
var useSelectableItem = __webpack_require__(33462);
;// ./node_modules/@react-aria/tabs/dist/useTab.mjs





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



function $0175d55c2a017ebc$export$fdf4756d5b8ef90a(props, state, ref) {
    let { key: key, isDisabled: propsDisabled, shouldSelectOnPressUp: shouldSelectOnPressUp } = props;
    let { selectionManager: manager, selectedKey: selectedKey } = state;
    let isSelected = key === selectedKey;
    let isDisabled = propsDisabled || state.isDisabled || state.selectionManager.isDisabled(key);
    let { itemProps: itemProps, isPressed: isPressed } = (0, useSelectableItem/* useSelectableItem */.p)({
        selectionManager: manager,
        key: key,
        ref: ref,
        isDisabled: isDisabled,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        linkBehavior: 'selection'
    });
    let tabId = (0, $99b62ae3ff97ec45$export$567fc7097e064344)(state, key, 'tab');
    let tabPanelId = (0, $99b62ae3ff97ec45$export$567fc7097e064344)(state, key, 'tabpanel');
    let { tabIndex: tabIndex } = itemProps;
    let item = state.collection.getItem(key);
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(item === null || item === void 0 ? void 0 : item.props, {
        labelable: true
    });
    delete domProps.id;
    let linkProps = (0, openLink/* useLinkProps */._h)(item === null || item === void 0 ? void 0 : item.props);
    let { focusableProps: focusableProps } = (0, useFocusable/* useFocusable */.Wc)({
        isDisabled: isDisabled
    }, ref);
    return {
        tabProps: (0, mergeProps/* mergeProps */.v)(domProps, focusableProps, linkProps, itemProps, {
            id: tabId,
            'aria-selected': isSelected,
            'aria-disabled': isDisabled || undefined,
            'aria-controls': isSelected ? tabPanelId : undefined,
            tabIndex: isDisabled ? undefined : tabIndex,
            role: 'tab'
        }),
        isSelected: isSelected,
        isDisabled: isDisabled,
        isPressed: isPressed
    };
}



//# sourceMappingURL=useTab.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useHasTabbableChild.mjs
var useHasTabbableChild = __webpack_require__(12152);
;// ./node_modules/@react-aria/tabs/dist/useTabPanel.mjs




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


function $34bce698202e07cb$export$fae0121b5afe572d(props, state, ref) {
    // The tabpanel should have tabIndex=0 when there are no tabbable elements within it.
    // Otherwise, tabbing from the focused tab should go directly to the first tabbable element
    // within the tabpanel.
    let tabIndex = (0, useHasTabbableChild/* useHasTabbableChild */.$)(ref) ? undefined : 0;
    var _props_id;
    const id = (0, $99b62ae3ff97ec45$export$567fc7097e064344)(state, (_props_id = props.id) !== null && _props_id !== void 0 ? _props_id : state === null || state === void 0 ? void 0 : state.selectedKey, 'tabpanel');
    const tabPanelProps = (0, useLabels/* useLabels */.b)({
        ...props,
        id: id,
        'aria-labelledby': (0, $99b62ae3ff97ec45$export$567fc7097e064344)(state, state === null || state === void 0 ? void 0 : state.selectedKey, 'tab')
    });
    return {
        tabPanelProps: (0, mergeProps/* mergeProps */.v)(tabPanelProps, {
            tabIndex: tabIndex,
            role: 'tabpanel',
            'aria-describedby': props['aria-describedby'],
            'aria-details': props['aria-details']
        })
    };
}



//# sourceMappingURL=useTabPanel.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/Hidden.mjs
var Hidden = __webpack_require__(75127);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useObjectRef.mjs
var useObjectRef = __webpack_require__(83908);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/inertValue.mjs
var inertValue = __webpack_require__(34076);
// EXTERNAL MODULE: ./node_modules/@react-stately/list/dist/useSingleSelectListState.mjs
var useSingleSelectListState = __webpack_require__(319);
;// ./node_modules/@react-stately/tabs/dist/useTabListState.mjs



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

function $76f919a04c5a7d14$export$4ba071daf4e486(props) {
    var _props_defaultSelectedKey, _ref;
    let state = (0, useSingleSelectListState/* useSingleSelectListState */.V)({
        ...props,
        onSelectionChange: props.onSelectionChange ? (key)=>{
            var _props_onSelectionChange;
            if (key != null) (_props_onSelectionChange = props.onSelectionChange) === null || _props_onSelectionChange === void 0 ? void 0 : _props_onSelectionChange.call(props, key);
        } : undefined,
        suppressTextValueWarning: true,
        defaultSelectedKey: (_ref = (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : $76f919a04c5a7d14$var$findDefaultSelectedKey(props.collection, props.disabledKeys ? new Set(props.disabledKeys) : new Set())) !== null && _ref !== void 0 ? _ref : undefined
    });
    let { selectionManager: selectionManager, collection: collection, selectedKey: currentSelectedKey } = state;
    let lastSelectedKey = (0, react.useRef)(currentSelectedKey);
    (0, react.useEffect)(()=>{
        // Ensure a tab is always selected (in case no selected key was specified or if selected item was deleted from collection)
        let selectedKey = currentSelectedKey;
        if (props.selectedKey == null && (selectionManager.isEmpty || selectedKey == null || !collection.getItem(selectedKey))) {
            selectedKey = $76f919a04c5a7d14$var$findDefaultSelectedKey(collection, state.disabledKeys);
            if (selectedKey != null) // directly set selection because replace/toggle selection won't consider disabled keys
            selectionManager.setSelectedKeys([
                selectedKey
            ]);
        }
        // If the tablist doesn't have focus and the selected key changes or if there isn't a focused key yet, change focused key to the selected key if it exists.
        if (selectedKey != null && selectionManager.focusedKey == null || !selectionManager.isFocused && selectedKey !== lastSelectedKey.current) selectionManager.setFocusedKey(selectedKey);
        lastSelectedKey.current = selectedKey;
    });
    return {
        ...state,
        isDisabled: props.isDisabled || false
    };
}
function $76f919a04c5a7d14$var$findDefaultSelectedKey(collection, disabledKeys) {
    let selectedKey = null;
    if (collection) {
        var _collection_getItem_props, _collection_getItem, _collection_getItem_props1, _collection_getItem1;
        selectedKey = collection.getFirstKey();
        // loop over tabs until we find one that isn't disabled and select that
        while(selectedKey != null && (disabledKeys.has(selectedKey) || ((_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : (_collection_getItem_props = _collection_getItem.props) === null || _collection_getItem_props === void 0 ? void 0 : _collection_getItem_props.isDisabled)) && selectedKey !== collection.getLastKey())selectedKey = collection.getKeyAfter(selectedKey);
        // if this check is true, then every item is disabled, it makes more sense to default to the first key than the last
        if (selectedKey != null && (disabledKeys.has(selectedKey) || ((_collection_getItem1 = collection.getItem(selectedKey)) === null || _collection_getItem1 === void 0 ? void 0 : (_collection_getItem_props1 = _collection_getItem1.props) === null || _collection_getItem_props1 === void 0 ? void 0 : _collection_getItem_props1.isDisabled)) && selectedKey === collection.getLastKey()) selectedKey = collection.getFirstKey();
    }
    return selectedKey;
}



//# sourceMappingURL=useTabListState.module.js.map

;// ./node_modules/react-aria-components/dist/Tabs.mjs








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






const $5e8ad37a45e1c704$export$cfa7aa87c26e7d1f = /*#__PURE__*/ (0, react.createContext)(null);
const $5e8ad37a45e1c704$export$364712098d2aa57c = /*#__PURE__*/ (0, react.createContext)(null);
const $5e8ad37a45e1c704$export$b2539bed5023c21c = /*#__PURE__*/ (0, react.forwardRef)(function Tabs(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $5e8ad37a45e1c704$export$cfa7aa87c26e7d1f);
    let { children: children, orientation: orientation = 'horizontal' } = props;
    children = (0, react.useMemo)(()=>typeof children === 'function' ? children({
            orientation: orientation,
            defaultChildren: null
        }) : children, [
        children,
        orientation
    ]);
    return /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: children
    }, (collection)=>/*#__PURE__*/ (0, react).createElement($5e8ad37a45e1c704$var$TabsInner, {
            props: props,
            collection: collection,
            tabsRef: ref
        }));
});
function $5e8ad37a45e1c704$var$TabsInner({ props: props, tabsRef: ref, collection: collection }) {
    let { orientation: orientation = 'horizontal' } = props;
    let state = (0, $76f919a04c5a7d14$export$4ba071daf4e486)({
        ...props,
        collection: collection,
        children: undefined
    });
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)({
        within: true
    });
    let values = (0, react.useMemo)(()=>({
            orientation: orientation,
            isFocusWithin: isFocused,
            isFocusVisible: isFocusVisible
        }), [
        orientation,
        isFocused,
        isFocusVisible
    ]);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-Tabs',
        values: values
    });
    return /*#__PURE__*/ (0, react).createElement("div", {
        ...(0, filterDOMProps/* filterDOMProps */.$)(props),
        ...focusProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": isFocused || undefined,
        "data-orientation": orientation,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": state.isDisabled || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $5e8ad37a45e1c704$export$cfa7aa87c26e7d1f,
                props
            ],
            [
                $5e8ad37a45e1c704$export$364712098d2aa57c,
                state
            ]
        ]
    }, renderProps.children));
}
const $5e8ad37a45e1c704$export$e51a686c67fdaa2d = /*#__PURE__*/ (0, react.forwardRef)(function TabList(props, ref) {
    let state = (0, react.useContext)($5e8ad37a45e1c704$export$364712098d2aa57c);
    return state ? /*#__PURE__*/ (0, react).createElement($5e8ad37a45e1c704$var$TabListInner, {
        props: props,
        forwardedRef: ref
    }) : /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* Collection */.pM), props);
});
function $5e8ad37a45e1c704$var$TabListInner({ props: props, forwardedRef: ref }) {
    let state = (0, react.useContext)($5e8ad37a45e1c704$export$364712098d2aa57c);
    let { CollectionRoot: CollectionRoot } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let { orientation: orientation = 'horizontal', keyboardActivation: keyboardActivation = 'automatic' } = (0, utils/* useSlottedContext */.CC)($5e8ad37a45e1c704$export$cfa7aa87c26e7d1f);
    let objectRef = (0, useObjectRef/* useObjectRef */.U)(ref);
    let { tabListProps: tabListProps } = (0, $58d314389b21fa3f$export$773e389e644c5874)({
        ...props,
        orientation: orientation,
        keyboardActivation: keyboardActivation
    }, state, objectRef);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        children: null,
        defaultClassName: 'react-aria-TabList',
        values: {
            orientation: orientation,
            state: state
        }
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, react).createElement("div", {
        ...DOMProps,
        ...tabListProps,
        ref: objectRef,
        ...renderProps,
        "data-orientation": orientation || undefined
    }, /*#__PURE__*/ (0, react).createElement(CollectionRoot, {
        collection: state.collection,
        persistedKeys: (0, Collection/* usePersistedKeys */.l2)(state.selectionManager.focusedKey)
    }));
}
const $5e8ad37a45e1c704$export$3e41faf802a29e71 = /*#__PURE__*/ (0, CollectionBuilder/* createLeafComponent */.KU)('item', (props, forwardedRef, item)=>{
    let state = (0, react.useContext)($5e8ad37a45e1c704$export$364712098d2aa57c);
    let ref = (0, useObjectRef/* useObjectRef */.U)(forwardedRef);
    let { tabProps: tabProps, isSelected: isSelected, isDisabled: isDisabled, isPressed: isPressed } = (0, $0175d55c2a017ebc$export$fdf4756d5b8ef90a)({
        key: item.key,
        ...props
    }, state, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* useHover */.M)({
        isDisabled: isDisabled,
        onHoverStart: props.onHoverStart,
        onHoverEnd: props.onHoverEnd,
        onHoverChange: props.onHoverChange
    });
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-Tab',
        values: {
            isSelected: isSelected,
            isDisabled: isDisabled,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isPressed: isPressed,
            isHovered: isHovered
        }
    });
    let ElementType = item.props.href ? 'a' : 'div';
    return /*#__PURE__*/ (0, react).createElement(ElementType, {
        ...(0, mergeProps/* mergeProps */.v)(tabProps, focusProps, hoverProps, renderProps),
        ref: ref,
        "data-selected": isSelected || undefined,
        "data-disabled": isDisabled || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": isPressed || undefined,
        "data-hovered": isHovered || undefined
    }, renderProps.children);
});
const $5e8ad37a45e1c704$export$3d96ec278d3efce4 = /*#__PURE__*/ (0, Hidden/* createHideableComponent */.U7)(function TabPanel(props, forwardedRef) {
    const state = (0, react.useContext)($5e8ad37a45e1c704$export$364712098d2aa57c);
    let ref = (0, useObjectRef/* useObjectRef */.U)(forwardedRef);
    let { tabPanelProps: tabPanelProps } = (0, $34bce698202e07cb$export$fae0121b5afe572d)(props, state, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)();
    let isSelected = state.selectedKey === props.id;
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-TabPanel',
        values: {
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isInert: !isSelected,
            state: state
        }
    });
    if (!isSelected && !props.shouldForceMount) return null;
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props);
    delete DOMProps.id;
    let domProps = isSelected ? (0, mergeProps/* mergeProps */.v)(DOMProps, tabPanelProps, focusProps, renderProps) : renderProps;
    return /*#__PURE__*/ (0, react).createElement("div", {
        ...domProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        // @ts-ignore
        inert: (0, inertValue/* inertValue */.Y)(!isSelected),
        "data-inert": !isSelected ? 'true' : undefined
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $5e8ad37a45e1c704$export$cfa7aa87c26e7d1f,
                null
            ],
            [
                $5e8ad37a45e1c704$export$364712098d2aa57c,
                null
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement((0, Collection/* CollectionRendererContext */.zL).Provider, {
        value: (0, Collection/* DefaultCollectionRenderer */.N)
    }, renderProps.children)));
});



//# sourceMappingURL=Tabs.module.js.map


/***/ })

}]);