"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[3809],{

/***/ 23809
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  oz: () => (/* binding */ $b4f18e3395fe64d7$export$3e41faf802a29e71),
  wb: () => (/* binding */ $b4f18e3395fe64d7$export$e51a686c67fdaa2d),
  Kp: () => (/* binding */ $b4f18e3395fe64d7$export$3d96ec278d3efce4),
  tU: () => (/* binding */ $b4f18e3395fe64d7$export$b2539bed5023c21c)
});

// UNUSED EXPORTS: TabListStateContext, TabPanels, TabsContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Collection.mjs
var Collection = __webpack_require__(53658);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/SelectionIndicator.mjs
var SelectionIndicator = __webpack_require__(17863);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/SharedElementTransition.mjs
var SharedElementTransition = __webpack_require__(17062);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
;// ./node_modules/react-aria/dist/private/tabs/utils.mjs
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
 */ const $a251981b23baaa12$export$c5f62239608282b6 = new WeakMap();
function $a251981b23baaa12$export$567fc7097e064344(state, key, role) {
    if (!state) // this case should only happen in the first render before the tabs are registered
    return '';
    if (typeof key === 'string') key = key.replace(/\s+/g, '');
    let baseId = $a251981b23baaa12$export$c5f62239608282b6.get(state);
    if (false) // removed by dead control flow
{}
    return `${baseId}-${role}-${key}`;
}



//# sourceMappingURL=utils.mjs.map

;// ./node_modules/react-aria/dist/private/tabs/TabsKeyboardDelegate.mjs
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
 */ class $a226bee26c88efd7$export$15010ca3c1abe90b {
    constructor(collection, direction, orientation, disabledKeys = new Set()){
        this.collection = collection;
        this.flipDirection = direction === 'rtl' && orientation === 'horizontal';
        this.disabledKeys = disabledKeys;
        this.tabDirection = orientation === 'horizontal';
    }
    getKeyLeftOf(key) {
        if (this.flipDirection) return this.getNextKey(key);
        return this.getPreviousKey(key);
    }
    getKeyRightOf(key) {
        if (this.flipDirection) return this.getPreviousKey(key);
        return this.getNextKey(key);
    }
    isDisabled(key) {
        return this.disabledKeys.has(key) || !!this.collection.getItem(key)?.props?.isDisabled;
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
        }while (key != null && this.isDisabled(key) && key !== startKey);
        return key;
    }
    getPreviousKey(startKey) {
        let key = startKey;
        do {
            key = this.collection.getKeyBefore(key);
            if (key == null) key = this.collection.getLastKey();
        }while (key != null && this.isDisabled(key) && key !== startKey);
        return key;
    }
}



//# sourceMappingURL=TabsKeyboardDelegate.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useId.mjs + 1 modules
var useId = __webpack_require__(19633);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useLabels.mjs
var useLabels = __webpack_require__(72765);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/I18nProvider.mjs + 2 modules
var I18nProvider = __webpack_require__(78352);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/useSelectableCollection.mjs + 2 modules
var useSelectableCollection = __webpack_require__(68365);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria/dist/private/tabs/useTabList.mjs









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







function $83428e53deb13caf$export$773e389e644c5874(props, state, ref) {
    let { orientation: orientation = 'horizontal', keyboardActivation: keyboardActivation = 'automatic' } = props;
    let { collection: collection, selectionManager: manager, disabledKeys: disabledKeys } = state;
    let { direction: direction } = (0, I18nProvider/* useLocale */.Y)();
    let delegate = (0, react.useMemo)(()=>new (0, $a226bee26c88efd7$export$15010ca3c1abe90b)(collection, direction, orientation, disabledKeys), [
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
    (0, $a251981b23baaa12$export$c5f62239608282b6).set(state, tabsId);
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



//# sourceMappingURL=useTabList.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var useFocusable = __webpack_require__(55602);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/openLink.mjs
var openLink = __webpack_require__(46271);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/useSelectableItem.mjs
var useSelectableItem = __webpack_require__(1904);
;// ./node_modules/react-aria/dist/private/tabs/useTab.mjs







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





function $1b6fa05bad3d7740$export$fdf4756d5b8ef90a(props, state, ref) {
    let { key: key, isDisabled: propsDisabled, shouldSelectOnPressUp: shouldSelectOnPressUp } = props;
    let { selectionManager: manager, selectedKey: selectedKey } = state;
    let isSelected = key === selectedKey;
    let isDisabled = propsDisabled || state.isDisabled || state.selectionManager.isDisabled(key);
    let item = state.collection.getItem(key);
    let { itemProps: itemProps, isPressed: isPressed } = (0, useSelectableItem/* useSelectableItem */.p)({
        selectionManager: manager,
        key: key,
        ref: ref,
        isDisabled: isDisabled,
        // Link tabs should behave like native anchors (navigate on press up)
        // This avoids reopening beforeunload dialogs when browsers replay
        // queued pointer enter/leave events after cancellation.
        shouldSelectOnPressUp: shouldSelectOnPressUp ?? item?.props.href != null,
        linkBehavior: 'selection'
    });
    let tabId = (0, $a251981b23baaa12$export$567fc7097e064344)(state, key, 'tab');
    let tabPanelId = (0, $a251981b23baaa12$export$567fc7097e064344)(state, key, 'tabpanel');
    let { tabIndex: tabIndex } = itemProps;
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(item?.props, {
        labelable: true
    });
    delete domProps.id;
    let linkProps = (0, openLink/* useLinkProps */._h)(item?.props);
    let { focusableProps: focusableProps } = (0, useFocusable/* useFocusable */.Wc)({
        ...item?.props,
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



//# sourceMappingURL=useTab.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/useHasTabbableChild.mjs
var useHasTabbableChild = __webpack_require__(16466);
;// ./node_modules/react-aria/dist/private/tabs/useTabPanel.mjs





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



function $7d951241dadd72e4$export$fae0121b5afe572d(props, state, ref) {
    // The tabpanel should have tabIndex=0 when there are no tabbable elements within it.
    // Otherwise, tabbing from the focused tab should go directly to the first tabbable element
    // within the tabpanel.
    let tabIndex = (0, useHasTabbableChild/* useHasTabbableChild */.$)(ref) ? undefined : 0;
    const id = (0, $a251981b23baaa12$export$567fc7097e064344)(state, props.id ?? state?.selectedKey, 'tabpanel');
    const tabPanelProps = (0, useLabels/* useLabels */.b)({
        ...props,
        id: id,
        'aria-labelledby': (0, $a251981b23baaa12$export$567fc7097e064344)(state, state?.selectedKey, 'tab')
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



//# sourceMappingURL=useTabPanel.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(11513);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/BaseCollection.mjs
var BaseCollection = __webpack_require__(2764);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/Hidden.mjs
var Hidden = __webpack_require__(61207);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/inertValue.mjs
var inertValue = __webpack_require__(22868);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/list/useListState.mjs
var useListState = __webpack_require__(40447);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/utils/useControlledState.mjs
var useControlledState = __webpack_require__(32240);
;// ./node_modules/react-stately/dist/private/list/useSingleSelectListState.mjs




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


function $0fdb127d377ffd84$export$e7f05e985daf4b5f(props) {
    let [selectedKey, setSelectedKey] = (0, useControlledState/* useControlledState */.P)(props.selectedKey, props.defaultSelectedKey ?? null, props.onSelectionChange);
    let selectedKeys = (0, react.useMemo)(()=>selectedKey != null ? [
            selectedKey
        ] : [], [
        selectedKey
    ]);
    let { collection: collection, disabledKeys: disabledKeys, selectionManager: selectionManager } = (0, useListState/* useListState */.p)({
        ...props,
        selectionMode: 'single',
        disallowEmptySelection: true,
        allowDuplicateSelectionEvents: true,
        selectedKeys: selectedKeys,
        onSelectionChange: (keys)=>{
            // impossible, but TS doesn't know that
            if (keys === 'all') return;
            let key = keys.values().next().value ?? null;
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



//# sourceMappingURL=useSingleSelectListState.mjs.map

;// ./node_modules/react-stately/dist/private/tabs/useTabListState.mjs



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

function $caeb030f09a278a1$export$4ba071daf4e486(props) {
    let state = (0, $0fdb127d377ffd84$export$e7f05e985daf4b5f)({
        ...props,
        onSelectionChange: props.onSelectionChange ? (key)=>{
            if (key != null) props.onSelectionChange?.(key);
        } : undefined,
        suppressTextValueWarning: true,
        defaultSelectedKey: props.defaultSelectedKey ?? $caeb030f09a278a1$var$findDefaultSelectedKey(props.collection, props.disabledKeys ? new Set(props.disabledKeys) : new Set()) ?? undefined
    });
    let { selectionManager: selectionManager, collection: collection, selectedKey: currentSelectedKey } = state;
    let lastSelectedKey = (0, react.useRef)(currentSelectedKey);
    (0, react.useEffect)(()=>{
        // Ensure a tab is always selected (in case no selected key was specified or if selected item was deleted from collection)
        let selectedKey = currentSelectedKey;
        if (props.selectedKey == null && (selectionManager.isEmpty || selectedKey == null || !collection.getItem(selectedKey))) {
            selectedKey = $caeb030f09a278a1$var$findDefaultSelectedKey(collection, state.disabledKeys);
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
function $caeb030f09a278a1$var$findDefaultSelectedKey(collection, disabledKeys) {
    let selectedKey = null;
    if (collection) {
        selectedKey = collection.getFirstKey();
        // loop over tabs until we find one that isn't disabled and select that
        while(selectedKey != null && (disabledKeys.has(selectedKey) || collection.getItem(selectedKey)?.props?.isDisabled) && selectedKey !== collection.getLastKey())selectedKey = collection.getKeyAfter(selectedKey);
        // if this check is true, then every item is disabled, it makes more sense to default to the first key than the last
        if (selectedKey != null && (disabledKeys.has(selectedKey) || collection.getItem(selectedKey)?.props?.isDisabled) && selectedKey === collection.getLastKey()) selectedKey = collection.getFirstKey();
    }
    return selectedKey;
}



//# sourceMappingURL=useTabListState.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/animation.mjs
var animation = __webpack_require__(26855);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/useFocusRing.mjs
var useFocusRing = __webpack_require__(66683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useHover.mjs
var useHover = __webpack_require__(68068);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useObjectRef.mjs
var useObjectRef = __webpack_require__(80716);
;// ./node_modules/react-aria-components/dist/private/Tabs.mjs
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$df3a06d6289f983e;
/* unused harmony import specifier */ var $4KeVI$Collection;
/* unused harmony import specifier */ var $4KeVI$createHideableComponent;
/* unused harmony import specifier */ var $4KeVI$filterDOMProps;
/* unused harmony import specifier */ var $4KeVI$useContext;
/* unused harmony import specifier */ var $4KeVI$useRef;
/* unused harmony import specifier */ var $4KeVI$react;
/* unused harmony import specifier */ var $4KeVI$useLayoutEffect;
/* unused harmony import specifier */ var $4KeVI$useObjectRef;




















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


















const $b4f18e3395fe64d7$export$cfa7aa87c26e7d1f = /*#__PURE__*/ (0, react.createContext)(null);
const $b4f18e3395fe64d7$export$364712098d2aa57c = /*#__PURE__*/ (0, react.createContext)(null);
const $b4f18e3395fe64d7$export$b2539bed5023c21c = /*#__PURE__*/ (0, react.forwardRef)(function Tabs(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $b4f18e3395fe64d7$export$cfa7aa87c26e7d1f);
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
    }, (collection)=>/*#__PURE__*/ (0, react).createElement($b4f18e3395fe64d7$var$TabsInner, {
            props: props,
            collection: collection,
            tabsRef: ref
        }));
});
function $b4f18e3395fe64d7$var$TabsInner({ props: props, tabsRef: ref, collection: collection }) {
    let { orientation: orientation = 'horizontal' } = props;
    let state = (0, $caeb030f09a278a1$export$4ba071daf4e486)({
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
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, focusProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": isFocused || undefined,
        "data-orientation": orientation,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": state.isDisabled || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $b4f18e3395fe64d7$export$cfa7aa87c26e7d1f,
                props
            ],
            [
                $b4f18e3395fe64d7$export$364712098d2aa57c,
                state
            ]
        ]
    }, renderProps.children));
}
const $b4f18e3395fe64d7$export$e51a686c67fdaa2d = /*#__PURE__*/ (0, react.forwardRef)(function TabList(props, ref) {
    let state = (0, react.useContext)($b4f18e3395fe64d7$export$364712098d2aa57c);
    return state ? /*#__PURE__*/ (0, react).createElement($b4f18e3395fe64d7$var$TabListInner, {
        props: props,
        forwardedRef: ref
    }) : /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* Collection */.pM), props);
});
function $b4f18e3395fe64d7$var$TabListInner({ props: props, forwardedRef: ref }) {
    let state = (0, react.useContext)($b4f18e3395fe64d7$export$364712098d2aa57c);
    let { CollectionRoot: CollectionRoot } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let { orientation: orientation = 'horizontal', keyboardActivation: keyboardActivation = 'automatic' } = (0, utils/* useSlottedContext */.CC)($b4f18e3395fe64d7$export$cfa7aa87c26e7d1f);
    let objectRef = (0, useObjectRef/* useObjectRef */.U)(ref);
    let { tabListProps: tabListProps } = (0, $83428e53deb13caf$export$773e389e644c5874)({
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
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, tabListProps),
        ref: objectRef,
        "data-orientation": orientation || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, SharedElementTransition/* SharedElementTransition */.D), null, /*#__PURE__*/ (0, react).createElement(CollectionRoot, {
        collection: state.collection,
        persistedKeys: (0, Collection/* usePersistedKeys */.l2)(state.selectionManager.focusedKey)
    })));
}
class $b4f18e3395fe64d7$var$TabItemNode extends (0, BaseCollection/* CollectionNode */.Pt) {
    static{
        this.type = 'item';
    }
}
const $b4f18e3395fe64d7$export$3e41faf802a29e71 = /*#__PURE__*/ (0, CollectionBuilder/* createLeafComponent */.KU)($b4f18e3395fe64d7$var$TabItemNode, (props, forwardedRef, item)=>{
    let state = (0, react.useContext)($b4f18e3395fe64d7$export$364712098d2aa57c);
    let ref = (0, useObjectRef/* useObjectRef */.U)(forwardedRef);
    let { tabProps: tabProps, isSelected: isSelected, isDisabled: isDisabled, isPressed: isPressed } = (0, $1b6fa05bad3d7740$export$fdf4756d5b8ef90a)({
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
    let ElementType = item.props.href ? (0, utils/* dom */.tT).a : (0, utils/* dom */.tT).div;
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, react).createElement(ElementType, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, tabProps, focusProps, hoverProps),
        ref: ref,
        "data-selected": isSelected || undefined,
        "data-disabled": isDisabled || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": isPressed || undefined,
        "data-hovered": isHovered || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, SelectionIndicator/* SelectionIndicatorContext */.r).Provider, {
        value: {
            isSelected: isSelected
        }
    }, renderProps.children));
});
const $b4f18e3395fe64d7$export$5dae8d435677f210 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $4KeVI$createHideableComponent)(function TabPanels(props, forwardedRef) {
    let state = (0, $4KeVI$useContext)($b4f18e3395fe64d7$export$364712098d2aa57c);
    let ref = (0, $4KeVI$useObjectRef)(forwardedRef);
    let selectedKeyRef = (0, $4KeVI$useRef)(state.selectedKey);
    let prevSize = (0, $4KeVI$useRef)(null);
    let hasTransition = (0, $4KeVI$useRef)(null);
    (0, $4KeVI$useLayoutEffect)(()=>{
        let el = ref.current;
        if (!el) return;
        if (hasTransition.current == null) hasTransition.current = /width|height|block-size|inline-size|all/.test(window.getComputedStyle(el).transition);
        if (hasTransition.current && selectedKeyRef.current != null && selectedKeyRef.current !== state.selectedKey) {
            // Measure auto size.
            el.style.setProperty('--tab-panel-width', 'auto');
            el.style.setProperty('--tab-panel-height', 'auto');
            let { width: width, height: height } = el.getBoundingClientRect();
            if (prevSize.current && (prevSize.current.width !== width || prevSize.current.height !== height)) {
                // Revert to previous size.
                el.style.setProperty('--tab-panel-width', prevSize.current.width + 'px');
                el.style.setProperty('--tab-panel-height', prevSize.current.height + 'px');
                // Force style re-calculation to trigger animations.
                window.getComputedStyle(el).height;
                // Animate to current pixel size.
                el.style.setProperty('--tab-panel-width', width + 'px');
                el.style.setProperty('--tab-panel-height', height + 'px');
                // When animations complete, revert back to auto size.
                Promise.all(el.getAnimations().map((a)=>a.finished)).then(()=>{
                    el.style.setProperty('--tab-panel-width', 'auto');
                    el.style.setProperty('--tab-panel-height', 'auto');
                }).catch(()=>{});
            }
        }
        selectedKeyRef.current = state.selectedKey;
    }, [
        ref,
        state.selectedKey
    ]);
    // Store previous size before DOM updates occur.
    // This breaks the rules of hooks because there is no effect that runs _before_ DOM updates.
    if (state.selectedKey != null && // eslint-disable-next-line rsp-rules/pure-render
    state.selectedKey !== selectedKeyRef.current && ref.current && // eslint-disable-next-line rsp-rules/pure-render
    hasTransition.current) // eslint-disable-next-line rsp-rules/pure-render
    prevSize.current = ref.current.getBoundingClientRect();
    let DOMProps = (0, $4KeVI$filterDOMProps)(props, {
        labelable: true,
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, $4KeVI$react).createElement((0, $7230ffa83bc0c2cf$export$df3a06d6289f983e).div, {
        render: props.render,
        ...DOMProps,
        ref: ref,
        style: props.style,
        className: props.className || 'react-aria-TabPanels'
    }, /*#__PURE__*/ (0, $4KeVI$react).createElement((0, $4KeVI$Collection), props));
})));
const $b4f18e3395fe64d7$export$3d96ec278d3efce4 = /*#__PURE__*/ (0, Hidden/* createHideableComponent */.U7)(function TabPanel(props, forwardedRef) {
    const state = (0, react.useContext)($b4f18e3395fe64d7$export$364712098d2aa57c);
    let ref = (0, useObjectRef/* useObjectRef */.U)(forwardedRef);
    // Track if the tab panel was initially selected on mount (after extra render to populate the collection).
    // In this case, we don't want to trigger animations.
    let isSelected = state.selectedKey === props.id;
    let [isInitiallySelected, setInitiallySelected] = (0, react.useState)(state.selectedKey != null ? isSelected : null);
    if (isInitiallySelected == null && state.selectedKey != null) setInitiallySelected(isSelected);
    else if (!isSelected && isInitiallySelected) setInitiallySelected(false);
    let isExiting = (0, animation/* useExitAnimation */.O)(ref, isSelected);
    if (!isSelected && !props.shouldForceMount && !isExiting) return null;
    return /*#__PURE__*/ (0, react).createElement($b4f18e3395fe64d7$var$TabPanelInner, {
        ...props,
        tabPanelRef: ref,
        isInitiallySelected: isInitiallySelected || false,
        isExiting: isExiting
    });
});
function $b4f18e3395fe64d7$var$TabPanelInner(props) {
    let state = (0, react.useContext)($b4f18e3395fe64d7$export$364712098d2aa57c);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { id: id, tabPanelRef: ref, isInitiallySelected: isInitiallySelected, isExiting: isExiting, ...otherProps } = props;
    let { tabPanelProps: tabPanelProps } = (0, $7d951241dadd72e4$export$fae0121b5afe572d)(props, state, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)();
    let isSelected = state.selectedKey === props.id;
    let isEntering = (0, animation/* useEnterAnimation */._)(ref) && !isInitiallySelected;
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-TabPanel',
        values: {
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            // @ts-ignore - compatibility with React < 19
            isInert: (0, inertValue/* inertValue */.Y)(!isSelected),
            isEntering: isEntering,
            isExiting: isExiting,
            state: state
        }
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(otherProps, {
        global: true
    });
    delete DOMProps.id;
    let domProps = isSelected ? (0, mergeProps/* mergeProps */.v)(DOMProps, tabPanelProps, focusProps, renderProps) : (0, mergeProps/* mergeProps */.v)(DOMProps, renderProps);
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...domProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        // @ts-ignore
        inert: (0, inertValue/* inertValue */.Y)(!isSelected || props.inert),
        "data-inert": !isSelected ? 'true' : undefined,
        "data-entering": isEntering || undefined,
        "data-exiting": isExiting || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $b4f18e3395fe64d7$export$cfa7aa87c26e7d1f,
                null
            ],
            [
                $b4f18e3395fe64d7$export$364712098d2aa57c,
                null
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement((0, Collection/* CollectionRendererContext */.zL).Provider, {
        value: (0, Collection/* DefaultCollectionRenderer */.N)
    }, renderProps.children)));
}



//# sourceMappingURL=Tabs.mjs.map


/***/ }

}]);