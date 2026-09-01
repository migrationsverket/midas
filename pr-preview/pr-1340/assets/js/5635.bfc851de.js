"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5635],{

/***/ 58493
(__unused_webpack_module, exports, __webpack_require__) {

/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var React = __webpack_require__(96540);
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is,
  useState = React.useState,
  useEffect = React.useEffect,
  useLayoutEffect = React.useLayoutEffect,
  useDebugValue = React.useDebugValue;
function useSyncExternalStore$2(subscribe, getSnapshot) {
  var value = getSnapshot(),
    _useState = useState({ inst: { value: value, getSnapshot: getSnapshot } }),
    inst = _useState[0].inst,
    forceUpdate = _useState[1];
  useLayoutEffect(
    function () {
      inst.value = value;
      inst.getSnapshot = getSnapshot;
      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
    },
    [subscribe, value, getSnapshot]
  );
  useEffect(
    function () {
      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
      return subscribe(function () {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
      });
    },
    [subscribe]
  );
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return !0;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot) {
  return getSnapshot();
}
var shim =
  "undefined" === typeof window ||
  "undefined" === typeof window.document ||
  "undefined" === typeof window.document.createElement
    ? useSyncExternalStore$1
    : useSyncExternalStore$2;
exports.useSyncExternalStore =
  void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;


/***/ },

/***/ 19888
(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(58493);
} else // removed by dead control flow
{}


/***/ },

/***/ 77314
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Co: () => (/* binding */ $4b38b5b75ecc6208$export$b0d3ecf7112093a7),
/* harmony export */   wv: () => (/* binding */ $4b38b5b75ecc6208$export$698f465ec27e93df)
/* harmony export */ });
/* unused harmony exports AutocompleteContext, AutocompleteStateContext, Autocomplete */
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$fabf2dc03a41866e;
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$ef03459518577ad4;
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$2881499e37b75b9a;
/* unused harmony import specifier */ var $1J3Gn$useAutocomplete;
/* unused harmony import specifier */ var $1J3Gn$useAutocompleteState;
/* unused harmony import specifier */ var $1J3Gn$mergeProps;
/* unused harmony import specifier */ var $1J3Gn$createContext;
/* unused harmony import specifier */ var $1J3Gn$useRef;
/* unused harmony import specifier */ var $1J3Gn$react;
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




const $4b38b5b75ecc6208$export$36e687af51cd0967 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $1J3Gn$createContext)(null)));
const $4b38b5b75ecc6208$export$68ee3368b6d68148 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $1J3Gn$createContext)(null)));
const $4b38b5b75ecc6208$export$b0d3ecf7112093a7 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4b38b5b75ecc6208$export$698f465ec27e93df = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
function $4b38b5b75ecc6208$export$2f2b9559550c7bbc(props) {
    let ctx = (0, $7230ffa83bc0c2cf$export$fabf2dc03a41866e)($4b38b5b75ecc6208$export$36e687af51cd0967, props.slot);
    props = (0, $1J3Gn$mergeProps)(ctx, props);
    let { filter: filter, disableAutoFocusFirst: disableAutoFocusFirst } = props;
    let state = (0, $1J3Gn$useAutocompleteState)(props);
    let inputRef = (0, $1J3Gn$useRef)(null);
    let collectionRef = (0, $1J3Gn$useRef)(null);
    let { inputProps: inputProps, collectionProps: collectionProps, collectionRef: mergedCollectionRef, filter: filterFn } = (0, $1J3Gn$useAutocomplete)({
        ...(0, $7230ffa83bc0c2cf$export$ef03459518577ad4)(props),
        filter: filter,
        disableAutoFocusFirst: disableAutoFocusFirst,
        inputRef: inputRef,
        collectionRef: collectionRef
    }, state);
    return /*#__PURE__*/ (0, $1J3Gn$react).createElement((0, $7230ffa83bc0c2cf$export$2881499e37b75b9a), {
        values: [
            [
                $4b38b5b75ecc6208$export$68ee3368b6d68148,
                state
            ],
            [
                $4b38b5b75ecc6208$export$698f465ec27e93df,
                {
                    ...inputProps,
                    ref: inputRef
                }
            ],
            [
                $4b38b5b75ecc6208$export$b0d3ecf7112093a7,
                {
                    ...collectionProps,
                    filter: filterFn,
                    ref: mergedCollectionRef
                }
            ]
        ]
    }, props.children);
}



//# sourceMappingURL=Autocomplete.mjs.map


/***/ },

/***/ 53658
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cv: () => (/* binding */ $263ab7fc0f95ccdb$export$2dbbd341daed716d),
/* harmony export */   N: () => (/* binding */ $263ab7fc0f95ccdb$export$a164736487e3f0ae),
/* harmony export */   P2: () => (/* binding */ $263ab7fc0f95ccdb$export$d40e14dec8b060a8),
/* harmony export */   l2: () => (/* binding */ $263ab7fc0f95ccdb$export$90e00781bc59d8f9),
/* harmony export */   zL: () => (/* binding */ $263ab7fc0f95ccdb$export$4feb769f8ddf26c5)
/* harmony export */ });
/* unused harmony export Section */
/* unused harmony import specifier */ var $f0m83$createBranchComponent;
/* unused harmony import specifier */ var $f0m83$useContext;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_private_collections_useCachedChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15855);




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


const $263ab7fc0f95ccdb$export$d40e14dec8b060a8 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $263ab7fc0f95ccdb$export$6e2c8f0811a474ce = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $f0m83$createBranchComponent)('section', (props, ref, section)=>{
    let { name: name, render: render } = (0, $f0m83$useContext)($263ab7fc0f95ccdb$export$d40e14dec8b060a8);
    if (false) // removed by dead control flow
{}
    return render(props, ref, section, 'react-aria-Section');
})));
const $263ab7fc0f95ccdb$export$a164736487e3f0ae = {
    CollectionRoot ({ collection: collection, renderDropIndicator: renderDropIndicator }) {
        return $263ab7fc0f95ccdb$var$useCollectionRender(collection, null, renderDropIndicator);
    },
    CollectionBranch ({ collection: collection, parent: parent, renderDropIndicator: renderDropIndicator }) {
        return $263ab7fc0f95ccdb$var$useCollectionRender(collection, parent, renderDropIndicator);
    }
};
function $263ab7fc0f95ccdb$var$useCollectionRender(collection, parent, renderDropIndicator) {
    return (0, react_aria_private_collections_useCachedChildren__WEBPACK_IMPORTED_MODULE_1__/* .useCachedChildren */ .p)({
        items: parent ? collection.getChildren(parent.key) : collection,
        dependencies: [
            renderDropIndicator
        ],
        children (node) {
            // Return a empty fragment since we don't want to render the content twice
            // If we don't skip the content node here, we end up rendering them twice in a Tree since we also render the content node in TreeItem
            if (node.type === 'content') return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, react__WEBPACK_IMPORTED_MODULE_0__).Fragment, null);
            let rendered = node.render(node);
            if (!renderDropIndicator || node.type !== 'item') return rendered;
            return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, react__WEBPACK_IMPORTED_MODULE_0__).Fragment, null, renderDropIndicator({
                type: 'item',
                key: node.key,
                dropPosition: 'before'
            }), rendered, $263ab7fc0f95ccdb$export$2dbbd341daed716d(collection, node, renderDropIndicator));
        }
    });
}
function $263ab7fc0f95ccdb$export$2dbbd341daed716d(collection, node, renderDropIndicator) {
    let key = node.key;
    let keyAfter = collection.getKeyAfter(key);
    let nextItemInFlattenedCollection = keyAfter != null ? collection.getItem(keyAfter) : null;
    while(nextItemInFlattenedCollection != null && nextItemInFlattenedCollection.type !== 'item'){
        keyAfter = collection.getKeyAfter(nextItemInFlattenedCollection.key);
        nextItemInFlattenedCollection = keyAfter != null ? collection.getItem(keyAfter) : null;
    }
    let nextItemInSameLevel = node.nextKey != null ? collection.getItem(node.nextKey) : null;
    while(nextItemInSameLevel != null && nextItemInSameLevel.type !== 'item')nextItemInSameLevel = nextItemInSameLevel.nextKey != null ? collection.getItem(nextItemInSameLevel.nextKey) : null;
    // Render one or more "after" drop indicators when the next item in the flattened collection
    // has a smaller level, is not an item, or there are no more items in the collection.
    // Otherwise, the "after" position is equivalent to the next item's "before" position.
    let afterIndicators = [];
    if (nextItemInSameLevel == null) {
        let current = node;
        while(current?.type === 'item' && (!nextItemInFlattenedCollection || current.parentKey !== nextItemInFlattenedCollection.parentKey && nextItemInFlattenedCollection.level < current.level)){
            let indicator = renderDropIndicator({
                type: 'item',
                key: current.key,
                dropPosition: 'after'
            });
            if (/*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(indicator)) afterIndicators.push(/*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(indicator, {
                key: `${current.key}-after`
            }));
            current = current.parentKey != null ? collection.getItem(current.parentKey) : null;
        }
    }
    return afterIndicators;
}
const $263ab7fc0f95ccdb$export$4feb769f8ddf26c5 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)($263ab7fc0f95ccdb$export$a164736487e3f0ae);
function $263ab7fc0f95ccdb$export$90e00781bc59d8f9(focusedKey) {
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>focusedKey != null ? new Set([
            focusedKey
        ]) : null, [
        focusedKey
    ]);
}



//# sourceMappingURL=Collection.mjs.map


/***/ },

/***/ 99592
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  lG: () => (/* binding */ $f2ff30fde7b014be$export$3ddf2d174ce01153),
  MV: () => (/* binding */ $f2ff30fde7b014be$export$8b93a07348a7730c),
  zM: () => (/* binding */ $f2ff30fde7b014be$export$2e1e1122cf0cba88),
  RG: () => (/* binding */ $f2ff30fde7b014be$export$d2f961adcb0afbe)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Button.mjs
var Button = __webpack_require__(93426);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Heading.mjs
var Heading = __webpack_require__(91820);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Popover.mjs + 1 modules
var Popover = __webpack_require__(51146);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Menu.mjs + 7 modules
var Menu = __webpack_require__(70863);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Text.mjs
var Text = __webpack_require__(20987);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/focusSafely.mjs
var focusSafely = __webpack_require__(75105);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(62975);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/Overlay.mjs
var Overlay = __webpack_require__(33463);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useId.mjs + 1 modules
var useId = __webpack_require__(19633);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria/dist/private/dialog/useDialog.mjs







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





function $13150e6629d46e45$export$d55e7ee900f34e93(props, ref) {
    let { role: role = 'dialog' } = props;
    let titleId = (0, useId/* useSlotId */.X1)();
    titleId = props['aria-label'] ? undefined : titleId;
    let contentId = (0, useId/* useSlotId */.X1)();
    contentId = role === 'alertdialog' && !props['aria-describedby'] ? contentId : undefined;
    let isRefocusing = (0, react.useRef)(false);
    // Focus the dialog itself on mount, unless a child element is already focused.
    (0, react.useEffect)(()=>{
        if (ref.current && !(0, DOMFunctions/* isFocusWithin */.ae)(ref.current)) {
            (0, focusSafely/* focusSafely */.l)(ref.current);
            // Safari on iOS does not move the VoiceOver cursor to the dialog
            // or announce that it has opened until it has rendered. A workaround
            // is to wait for half a second, then blur and re-focus the dialog.
            let timeout = setTimeout(()=>{
                // Check that the dialog is still focused, or focused was lost to the body.
                if ((0, DOMFunctions/* getActiveElement */.bq)() === ref.current || (0, DOMFunctions/* getActiveElement */.bq)() === document.body) {
                    isRefocusing.current = true;
                    if (ref.current) {
                        ref.current.blur();
                        (0, focusSafely/* focusSafely */.l)(ref.current);
                    }
                    isRefocusing.current = false;
                }
            }, 500);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        ref
    ]);
    (0, Overlay/* useOverlayFocusContain */.Se)();
    // Warn in dev mode if the dialog has no accessible title.
    // This catches a common mistake where useDialog and useOverlayTriggerState
    // are used in the same component, causing the title element to not be
    // in the DOM when useSlotId queries for it.
    // Check the DOM element directly since aria-labelledby may be added by
    // wrapper components (e.g. RAC Dialog uses trigger ID as a fallback).
    let hasWarned = (0, react.useRef)(false);
    (0, react.useEffect)(()=>{
        if (false) // removed by dead control flow
{}
    });
    let ariaDescribedby = props['aria-describedby'] ?? contentId;
    // We do not use aria-modal due to a Safari bug which forces the first focusable element to be focused
    // on mount when inside an iframe, no matter which element we programmatically focus.
    // See https://bugs.webkit.org/show_bug.cgi?id=211934.
    // useModal sets aria-hidden on all elements outside the dialog, so the dialog will behave as a modal
    // even without aria-modal on the dialog itself.
    return {
        dialogProps: {
            ...(0, filterDOMProps/* filterDOMProps */.$)(props, {
                labelable: true
            }),
            role: role,
            tabIndex: -1,
            'aria-labelledby': props['aria-labelledby'] ?? titleId,
            'aria-describedby': ariaDescribedby,
            // Prevent blur events from reaching useOverlay, which may cause
            // popovers to close. Since focus is contained within the dialog,
            // we don't want this to occur due to the above useEffect.
            onBlur: (e)=>{
                if (isRefocusing.current) e.stopPropagation();
            }
        },
        titleProps: {
            id: titleId
        },
        contentProps: {
            id: contentId
        }
    };
}



//# sourceMappingURL=useDialog.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/PressResponder.mjs
var PressResponder = __webpack_require__(2864);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/menu/useMenuTriggerState.mjs
var useMenuTriggerState = __webpack_require__(98775);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/useOverlayTrigger.mjs
var useOverlayTrigger = __webpack_require__(55646);
;// ./node_modules/react-aria-components/dist/private/Dialog.mjs















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













const $f2ff30fde7b014be$export$8b93a07348a7730c = /*#__PURE__*/ (0, react.createContext)(null);
const $f2ff30fde7b014be$export$d2f961adcb0afbe = /*#__PURE__*/ (0, react.createContext)(null);
function $f2ff30fde7b014be$export$2e1e1122cf0cba88(props) {
    // Use useMenuTriggerState instead of useOverlayTriggerState in case a menu is embedded in the dialog.
    // This is needed to handle submenus.
    let state = (0, useMenuTriggerState/* useMenuTriggerState */.I)(props);
    let buttonRef = (0, react.useRef)(null);
    let { triggerProps: triggerProps, overlayProps: overlayProps } = (0, useOverlayTrigger/* useOverlayTrigger */.o)({
        type: 'dialog'
    }, state, buttonRef);
    // Label dialog by the trigger as a fallback if there is no title slot.
    // This is done in RAC instead of hooks because otherwise we cannot distinguish
    // between context and props. Normally aria-labelledby overrides the title
    // but when sent by context we want the title to win.
    // oxlint-disable-next-line react/react-compiler
    triggerProps.id = (0, useId/* useId */.Bi)();
    // oxlint-disable-next-line react/react-compiler
    overlayProps['aria-labelledby'] = triggerProps.id;
    return /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $f2ff30fde7b014be$export$d2f961adcb0afbe,
                state
            ],
            [
                (0, Menu/* RootMenuTriggerStateContext */.gI),
                state
            ],
            [
                $f2ff30fde7b014be$export$8b93a07348a7730c,
                overlayProps
            ],
            [
                (0, Popover/* PopoverContext */.n),
                {
                    trigger: 'DialogTrigger',
                    triggerRef: buttonRef,
                    id: overlayProps.id,
                    'aria-labelledby': overlayProps['aria-labelledby']
                }
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement((0, PressResponder/* PressResponder */.Y), {
        ...triggerProps,
        ref: buttonRef,
        isPressed: state.isOpen
    }, props.children));
}
const $f2ff30fde7b014be$export$3ddf2d174ce01153 = /*#__PURE__*/ (0, react.forwardRef)(function Dialog(props, ref) {
    let originalAriaLabelledby = props['aria-labelledby'];
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $f2ff30fde7b014be$export$8b93a07348a7730c);
    let { dialogProps: dialogProps, titleProps: titleProps, contentProps: contentProps } = (0, $13150e6629d46e45$export$d55e7ee900f34e93)({
        ...props,
        // Only pass aria-labelledby from props, not context.
        // Context is used as a fallback below.
        'aria-labelledby': originalAriaLabelledby
    }, ref);
    let state = (0, react.useContext)($f2ff30fde7b014be$export$d2f961adcb0afbe);
    if (!dialogProps['aria-label'] && !dialogProps['aria-labelledby']) {
        // If aria-labelledby exists on props, we know it came from context.
        // Use that as a fallback in case there is no title slot.
        if (props['aria-labelledby']) dialogProps['aria-labelledby'] = props['aria-labelledby'];
        else if (false) // removed by dead control flow
{}
    }
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        defaultClassName: 'react-aria-Dialog',
        className: props.className,
        style: props.style,
        children: props.children,
        values: {
            close: state?.close || (()=>{})
        }
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).section, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, dialogProps),
        render: props.render,
        ref: ref,
        slot: props.slot || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                (0, Heading/* HeadingContext */.A),
                {
                    slots: {
                        [(0, utils/* DEFAULT_SLOT */.P_)]: {},
                        title: {
                            ...titleProps,
                            level: 2
                        }
                    }
                }
            ],
            [
                (0, Text/* TextContext */.h),
                {
                    slots: {
                        [(0, utils/* DEFAULT_SLOT */.P_)]: {},
                        description: contentProps
                    }
                }
            ],
            [
                (0, Button/* ButtonContext */.k),
                {
                    slots: {
                        [(0, utils/* DEFAULT_SLOT */.P_)]: {},
                        close: {
                            onPress: ()=>state?.close()
                        }
                    }
                }
            ]
        ]
    }, renderProps.children));
});



//# sourceMappingURL=Dialog.mjs.map


/***/ },

/***/ 75993
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ $53e61d82d8b8611d$export$e0e4026c12a8bdbb),
/* harmony export */   Y: () => (/* binding */ $53e61d82d8b8611d$export$8b251419efc915eb)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95841);
/* harmony import */ var react_aria_CollectionBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11513);
/* harmony import */ var react_aria_private_collections_BaseCollection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2764);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);





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



const $53e61d82d8b8611d$export$e0e4026c12a8bdbb = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});
const $53e61d82d8b8611d$export$8b251419efc915eb = /*#__PURE__*/ (0, react_aria_CollectionBuilder__WEBPACK_IMPORTED_MODULE_1__/* .createLeafComponent */ .KU)((0, react_aria_private_collections_BaseCollection__WEBPACK_IMPORTED_MODULE_2__/* .HeaderNode */ .EH), function Header(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $53e61d82d8b8611d$export$e0e4026c12a8bdbb);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT).header, {
        className: "react-aria-Header",
        ...props,
        ref: ref
    }, props.children);
});



//# sourceMappingURL=Header.mjs.map


/***/ },

/***/ 91820
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ $2ec61d1d4f780267$export$d688439359537581),
/* harmony export */   D: () => (/* binding */ $2ec61d1d4f780267$export$a8a3e93435678ff9)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95841);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);



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

const $2ec61d1d4f780267$export$d688439359537581 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const $2ec61d1d4f780267$export$a8a3e93435678ff9 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Heading(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $2ec61d1d4f780267$export$d688439359537581);
    let { children: children, level: level = 3, className: className, ...domProps } = props;
    let Element = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT)[`h${level}`];
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__).createElement(Element, {
        ...domProps,
        ref: ref,
        className: className ?? 'react-aria-Heading'
    }, children);
});



//# sourceMappingURL=Heading.mjs.map


/***/ },

/***/ 70863
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W1: () => (/* binding */ $49319ee1285aa241$export$d9b273488cd8ce6f),
  Dr: () => (/* binding */ $49319ee1285aa241$export$2ce376c2cc3355c8),
  cQ: () => (/* binding */ $49319ee1285aa241$export$27d2ad3c5815583e),
  gI: () => (/* binding */ $49319ee1285aa241$export$795aec4671cbae19)
});

// UNUSED EXPORTS: MenuContext, MenuSection, MenuStateContext, SubmenuTrigger

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Collection.mjs
var Collection = __webpack_require__(53658);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Autocomplete.mjs
var Autocomplete = __webpack_require__(77314);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Header.mjs
var Header = __webpack_require__(75993);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria-components/dist/private/Keyboard.mjs
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$29f1550f4b0d4415;
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$df3a06d6289f983e;
/* unused harmony import specifier */ var $91cTq$forwardRef;
/* unused harmony import specifier */ var $91cTq$react;



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

const $650bea62ab5f5f0f$export$744d98a3b8a94e1c = /*#__PURE__*/ (0, react.createContext)({});
const $650bea62ab5f5f0f$export$16e4d70cc375e707 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $91cTq$forwardRef)(function Keyboard(props, ref) {
    [props, ref] = (0, $7230ffa83bc0c2cf$export$29f1550f4b0d4415)(props, ref, $650bea62ab5f5f0f$export$744d98a3b8a94e1c);
    return /*#__PURE__*/ (0, $91cTq$react).createElement((0, $7230ffa83bc0c2cf$export$df3a06d6289f983e).kbd, {
        dir: "ltr",
        ...props,
        ref: ref
    });
})));



//# sourceMappingURL=Keyboard.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(99592);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Popover.mjs + 1 modules
var Popover = __webpack_require__(51146);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/SelectionIndicator.mjs
var SelectionIndicator = __webpack_require__(17863);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Separator.mjs
var Separator = __webpack_require__(40795);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/SharedElementTransition.mjs
var SharedElementTransition = __webpack_require__(17062);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Text.mjs
var Text = __webpack_require__(20987);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/menu/useMenuTrigger.mjs + 36 modules
var useMenuTrigger = __webpack_require__(67680);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
;// ./node_modules/react-aria/dist/private/menu/utils.mjs
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
 */ const $d5765cd7be93edd1$export$6f49b4016bfc8d56 = new WeakMap();



//# sourceMappingURL=utils.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/useSelectableList.mjs
var useSelectableList = __webpack_require__(70353);
;// ./node_modules/react-aria/dist/private/menu/useMenu.mjs





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



function $a2d69d6ee8486855$export$38eaa17faae8f579(props, state, ref) {
    let { shouldFocusWrap: shouldFocusWrap = true, onKeyDown: onKeyDown, onKeyUp: onKeyUp, ...otherProps } = props;
    if (!props['aria-label'] && !props['aria-labelledby'] && "production" !== 'production') // removed by dead control flow
{}
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
    (0, $d5765cd7be93edd1$export$6f49b4016bfc8d56).set(state, {
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
                // don't clear the menu selected keys if the user is presses escape since escape closes the menu
                if (e.key !== 'Escape' || props.shouldUseVirtualFocus) listProps.onKeyDown?.(e);
            }
        })
    };
}



//# sourceMappingURL=useMenu.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useId.mjs + 1 modules
var useId = __webpack_require__(19633);
;// ./node_modules/react-aria/dist/private/menu/useMenuSection.mjs


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
function $7355d4e5c49461b6$export$73f7a44322579622(props) {
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



//# sourceMappingURL=useMenuSection.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(62975);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/openLink.mjs
var openLink = __webpack_require__(46271);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(35692);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var useFocusable = __webpack_require__(55602);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useHover.mjs
var useHover = __webpack_require__(68068);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useKeyboard.mjs + 2 modules
var useKeyboard = __webpack_require__(91357);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/usePress.mjs + 1 modules
var usePress = __webpack_require__(23580);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/useSelectableItem.mjs
var useSelectableItem = __webpack_require__(1904);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/collections/getItemCount.mjs
var getItemCount = __webpack_require__(68276);
;// ./node_modules/react-aria/dist/private/menu/useMenuItem.mjs















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













function $1a9c2c840fd36413$export$9d32628fc2aea7da(props, state, ref) {
    let { id: id, key: key, closeOnSelect: closeOnSelect, shouldCloseOnSelect: shouldCloseOnSelect, isVirtualized: isVirtualized, 'aria-haspopup': hasPopup, onPressStart: onPressStart, onPressUp: pressUpProp, onPress: onPress, onPressChange: pressChangeProp, onPressEnd: onPressEnd, onClick: onClickProp, onHoverStart: hoverStartProp, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onFocus: onFocus, onFocusChange: onFocusChange, onBlur: onBlur, selectionManager: selectionManager = state.selectionManager } = props;
    let isTrigger = !!hasPopup;
    let isTriggerExpanded = isTrigger && props['aria-expanded'] === 'true';
    let isDisabled = props.isDisabled ?? selectionManager.isDisabled(key);
    let isSelected = props.isSelected ?? selectionManager.isSelected(key);
    let data = (0, $d5765cd7be93edd1$export$6f49b4016bfc8d56).get(state);
    let item = state.collection.getItem(key);
    let onClose = props.onClose || data.onClose;
    let router = (0, openLink/* useRouter */.rd)();
    let performAction = ()=>{
        if (isTrigger) return;
        if (item?.props?.onAction) item.props.onAction();
        else if (props.onAction) props.onAction(key);
        if (data.onAction) {
            // Must reassign to variable otherwise `this` binding gets messed up. Something to do with WeakMap.
            let onAction = data.onAction;
            onAction(key, item?.value);
        }
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
            props['aria-describedby'],
            descriptionId,
            keyboardId
        ].filter(Boolean).join(' ') || undefined,
        'aria-controls': props['aria-controls'],
        'aria-haspopup': hasPopup,
        'aria-expanded': props['aria-expanded']
    };
    if (selectionManager.selectionMode !== 'none' && !isTrigger) ariaProps['aria-checked'] = isSelected;
    if (isVirtualized) {
        let index = Number(item?.index);
        ariaProps['aria-posinset'] = Number.isNaN(index) ? undefined : index + 1;
        ariaProps['aria-setsize'] = (0, getItemCount/* getItemCount */.v)(state.collection);
    }
    let isPressedRef = (0, react.useRef)(false);
    let onPressChange = (isPressed)=>{
        pressChangeProp?.(isPressed);
        isPressedRef.current = isPressed;
    };
    let interaction = (0, react.useRef)(null);
    let onPressUp = (e)=>{
        if (e.pointerType !== 'keyboard') interaction.current = {
            pointerType: e.pointerType
        };
        // If interacting with mouse, allow the user to mouse down on the trigger button,
        // drag, and release over an item (matching native behavior).
        if (e.pointerType === 'mouse') {
            if (!isPressedRef.current) e.target.click();
        }
        pressUpProp?.(e);
    };
    let onClick = (e)=>{
        onClickProp?.(e);
        performAction();
        (0, openLink/* handleLinkClick */.PJ)(e, router, item.props.href, item?.props.routerOptions);
        let shouldClose = interaction.current?.pointerType === 'keyboard' ? interaction.current?.key === 'Enter' || selectionManager.selectionMode === 'none' || selectionManager.isLink(key) : selectionManager.selectionMode !== 'multiple' || selectionManager.isLink(key);
        shouldClose = shouldCloseOnSelect ?? closeOnSelect ?? shouldClose;
        if (onClose && !isTrigger && shouldClose) onClose();
        interaction.current = null;
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
            if (!(0, useFocusVisible/* isFocusVisible */.pP)() && !(isTriggerExpanded && hasPopup)) {
                selectionManager.setFocused(true);
                selectionManager.setFocusedKey(key);
            }
            hoverStartProp?.(e);
        },
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd
    });
    let { keyboardProps: keyboardProps } = (0, useKeyboard/* useKeyboard */.d)({
        shortcuts: {
            ' ': (e)=>{
                interaction.current = {
                    pointerType: 'keyboard',
                    key: ' '
                };
                (0, DOMFunctions/* getEventTarget */.wt)(e).click();
                // click above sets modality to "virtual", need to set interaction modality back to 'keyboard' so focusSafely calls properly move focus
                // to the newly opened submenu's first item.
                (0, useFocusVisible/* setInteractionModality */.Cl)('keyboard');
            },
            Enter: (e)=>{
                interaction.current = {
                    pointerType: 'keyboard',
                    key: 'Enter'
                };
                let target = (0, DOMFunctions/* getEventTarget */.wt)(e);
                // Trigger click unless this is a link. Links with real DOM focus activate on Enter natively.
                // With virtual focus (e.g. Autocomplete) focus stays on the input and useAutocomplete dispatches
                // keydown here then follows with a synthetic click only if dispatchEvent was not canceled—so
                // links must not preventDefault on that keydown.
                if (target.tagName !== 'A') {
                    target.click();
                    (0, useFocusVisible/* setInteractionModality */.Cl)('keyboard');
                    return;
                }
                (0, useFocusVisible/* setInteractionModality */.Cl)('keyboard');
                return {
                    shouldPreventDefault: false,
                    shouldContinuePropagation: false
                };
            }
        },
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp
    });
    let { focusableProps: focusableProps } = (0, useFocusable/* useFocusable */.Wc)({
        onBlur: onBlur,
        onFocus: onFocus,
        onFocusChange: onFocusChange
    }, ref);
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(item?.props);
    delete domProps.id;
    let linkProps = (0, openLink/* useLinkProps */._h)(item?.props);
    return {
        menuItemProps: {
            ...ariaProps,
            ...(0, mergeProps/* mergeProps */.v)(domProps, linkProps, isTrigger ? {
                onFocus: itemProps.onFocus,
                'data-collection': itemProps['data-collection'],
                'data-key': itemProps['data-key']
            } : itemProps, pressProps, hoverProps, keyboardProps, focusableProps, // Prevent DOM focus from moving on mouse down when using virtual focus or this is a submenu/subdialog trigger.
            data.shouldUseVirtualFocus || isTrigger ? {
                onMouseDown: (e)=>e.preventDefault()
            } : undefined, // oxlint-disable-next-line react/react-compiler
            isDisabled ? undefined : {
                onClick: onClick
            }),
            // If a submenu is expanded, set the tabIndex to -1 so that shift tabbing goes out of the menu instead of the parent menu item.
            tabIndex: itemProps.tabIndex != null && isTriggerExpanded && !data.shouldUseVirtualFocus ? -1 : itemProps.tabIndex
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
        isFocusVisible: isFocused && selectionManager.isFocused && (0, useFocusVisible/* isFocusVisible */.pP)() && !isTriggerExpanded,
        isSelected: isSelected,
        isPressed: isPressed,
        isDisabled: isDisabled
    };
}



//# sourceMappingURL=useMenuItem.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/BaseCollection.mjs
var BaseCollection = __webpack_require__(2764);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/menu/useMenuTriggerState.mjs
var useMenuTriggerState = __webpack_require__(98775);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(11513);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/FocusScope.mjs
var FocusScope = __webpack_require__(46686);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/PressResponder.mjs
var PressResponder = __webpack_require__(2864);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/selection/SelectionManager.mjs
var SelectionManager = __webpack_require__(93854);
;// ./node_modules/react-stately/dist/private/tree/TreeCollection.mjs
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
 */ class $df1fcc684d3b021a$export$863faf230ee2118a {
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
        this.lastKey = last?.key ?? null;
    }
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
}



//# sourceMappingURL=TreeCollection.mjs.map

// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/collections/useCollection.mjs + 1 modules
var useCollection = __webpack_require__(61052);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/utils/useControlledState.mjs
var useControlledState = __webpack_require__(32240);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/selection/useMultipleSelectionState.mjs
var useMultipleSelectionState = __webpack_require__(74219);
;// ./node_modules/react-stately/dist/private/tree/useTreeState.mjs







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





function $6b915bde6cd300dd$export$728d6ba534403756(props) {
    let { onExpandedChange: onExpandedChange } = props;
    let [expandedKeys, setExpandedKeys] = (0, useControlledState/* useControlledState */.P)(props.expandedKeys ? new Set(props.expandedKeys) : undefined, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : new Set(), onExpandedChange);
    let selectionState = (0, useMultipleSelectionState/* useMultipleSelectionState */.R)(props);
    let disabledKeys = (0, react.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let tree = (0, useCollection/* useCollection */.G)(props, (0, react.useCallback)((nodes)=>new (0, $df1fcc684d3b021a$export$863faf230ee2118a)(nodes, {
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
        setExpandedKeys($6b915bde6cd300dd$var$toggleKey(expandedKeys, key));
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
function $6b915bde6cd300dd$var$toggleKey(set, key) {
    let res = new Set(set);
    if (res.has(key)) res.delete(key);
    else res.add(key);
    return res;
}



//# sourceMappingURL=useTreeState.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/Hidden.mjs
var Hidden = __webpack_require__(61207);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useObjectRef.mjs
var useObjectRef = __webpack_require__(80716);
;// ./node_modules/react-aria-components/dist/private/Menu.mjs
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$2881499e37b75b9a;
/* unused harmony import specifier */ var $263ab7fc0f95ccdb$export$4feb769f8ddf26c5;
/* unused harmony import specifier */ var $f2ff30fde7b014be$export$d2f961adcb0afbe;
/* unused harmony import specifier */ var $542a13ca2fa5b484$export$9b9a0cd73afb7ca4;
/* unused harmony import specifier */ var $7xe5e$useSubmenuTrigger;
/* unused harmony import specifier */ var $7xe5e$SectionNode;
/* unused harmony import specifier */ var $7xe5e$useSubmenuTriggerState;
/* unused harmony import specifier */ var $7xe5e$createBranchComponent;
/* unused harmony import specifier */ var $7xe5e$useContext;
/* unused harmony import specifier */ var $7xe5e$useRef;
/* unused harmony import specifier */ var $7xe5e$react;
/* unused harmony import specifier */ var $7xe5e$useObjectRef;




























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


























const $49319ee1285aa241$export$c7e742effb1c51e2 = /*#__PURE__*/ (0, react.createContext)(null);
const $49319ee1285aa241$export$24aad8519b95b41b = /*#__PURE__*/ (0, react.createContext)(null);
const $49319ee1285aa241$export$795aec4671cbae19 = /*#__PURE__*/ (0, react.createContext)(null);
const $49319ee1285aa241$var$SelectionManagerContext = /*#__PURE__*/ (0, react.createContext)(null);
function $49319ee1285aa241$export$27d2ad3c5815583e(props) {
    let state = (0, useMenuTriggerState/* useMenuTriggerState */.I)(props);
    let ref = (0, react.useRef)(null);
    let { menuTriggerProps: menuTriggerProps, menuProps: menuProps } = (0, useMenuTrigger/* useMenuTrigger */.V)({
        ...props,
        type: 'menu'
    }, state, ref);
    let scrollRef = (0, react.useRef)(null);
    // If within a collection (e.g. Tabs), render nothing.
    // Not using createHideableComponent for this because that also creates a forwardRef.
    let isHidden = (0, Hidden/* useIsHidden */.m_)();
    if (isHidden) return null;
    return /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $49319ee1285aa241$export$c7e742effb1c51e2,
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
                $49319ee1285aa241$export$795aec4671cbae19,
                state
            ],
            [
                (0, Popover/* PopoverContext */.n),
                {
                    trigger: 'MenuTrigger',
                    triggerRef: ref,
                    scrollRef: scrollRef,
                    placement: 'bottom start',
                    'aria-labelledby': menuProps['aria-labelledby'],
                    offset: props.trigger === 'contextMenu' ? 0 : undefined
                }
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement((0, PressResponder/* PressResponder */.Y), {
        ...menuTriggerProps,
        ref: ref,
        isPressed: state.isOpen
    }, props.children));
}
const $49319ee1285aa241$var$SubmenuTriggerContext = /*#__PURE__*/ (0, react.createContext)(null);
class $49319ee1285aa241$var$SubmenuTriggerNode extends (0, BaseCollection/* CollectionNode */.Pt) {
    static{
        this.type = 'submenutrigger';
    }
    filter(collection, newCollection, filterFn) {
        let triggerNode = collection.getItem(this.firstChildKey);
        if (triggerNode && filterFn(triggerNode.textValue, this)) {
            let clone = this.clone();
            newCollection.addDescendants(clone, collection);
            return clone;
        }
        return null;
    }
}
const $49319ee1285aa241$export$ecabc99eeffab7ca = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $7xe5e$createBranchComponent)($49319ee1285aa241$var$SubmenuTriggerNode, (props, ref, item)=>{
    let { CollectionBranch: CollectionBranch } = (0, $7xe5e$useContext)((0, $263ab7fc0f95ccdb$export$4feb769f8ddf26c5));
    let state = (0, $7xe5e$useContext)($49319ee1285aa241$export$24aad8519b95b41b);
    let rootMenuTriggerState = (0, $7xe5e$useContext)($49319ee1285aa241$export$795aec4671cbae19);
    let submenuTriggerState = (0, $7xe5e$useSubmenuTriggerState)({
        triggerKey: item.key
    }, rootMenuTriggerState);
    let submenuRef = (0, $7xe5e$useRef)(null);
    let itemRef = (0, $7xe5e$useObjectRef)(ref);
    let { parentMenuRef: parentMenuRef, shouldUseVirtualFocus: shouldUseVirtualFocus } = (0, $7xe5e$useContext)($49319ee1285aa241$var$SubmenuTriggerContext);
    let { submenuTriggerProps: submenuTriggerProps, submenuProps: submenuProps, popoverProps: popoverProps } = (0, $7xe5e$useSubmenuTrigger)({
        parentMenuRef: parentMenuRef,
        submenuRef: submenuRef,
        delay: props.delay,
        shouldUseVirtualFocus: shouldUseVirtualFocus
    }, submenuTriggerState, itemRef);
    return /*#__PURE__*/ (0, $7xe5e$react).createElement((0, $7230ffa83bc0c2cf$export$2881499e37b75b9a), {
        values: [
            [
                $49319ee1285aa241$var$MenuItemContext,
                {
                    ...submenuTriggerProps,
                    onAction: undefined,
                    ref: itemRef
                }
            ],
            [
                $49319ee1285aa241$export$c7e742effb1c51e2,
                {
                    ref: submenuRef,
                    ...submenuProps
                }
            ],
            [
                (0, $f2ff30fde7b014be$export$d2f961adcb0afbe),
                submenuTriggerState
            ],
            [
                (0, $542a13ca2fa5b484$export$9b9a0cd73afb7ca4),
                {
                    trigger: 'SubmenuTrigger',
                    triggerRef: itemRef,
                    placement: 'end top',
                    'aria-labelledby': submenuProps['aria-labelledby'],
                    ...popoverProps
                }
            ]
        ]
    }, /*#__PURE__*/ (0, $7xe5e$react).createElement(CollectionBranch, {
        collection: state.collection,
        parent: item
    }), props.children[1]);
}, (props)=>props.children[0])));
const $49319ee1285aa241$export$d9b273488cd8ce6f = /*#__PURE__*/ (0, react.forwardRef)(function Menu(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $49319ee1285aa241$export$c7e742effb1c51e2);
    // Delay rendering the actual menu until we have the collection so that auto focus works properly.
    return /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* Collection */.pM), props)
    }, (collection)=>/*#__PURE__*/ (0, react).createElement($49319ee1285aa241$var$MenuInner, {
            props: props,
            collection: collection,
            menuRef: ref
        }));
});
function $49319ee1285aa241$var$MenuInner({ props: props, collection: collection, menuRef: ref }) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, (0, Autocomplete/* SelectableCollectionContext */.Co));
    let { filter: filter, ...autocompleteMenuProps } = props;
    let filteredCollection = (0, react.useMemo)(()=>filter ? collection.filter(filter) : collection, [
        collection,
        filter
    ]);
    let state = (0, $6b915bde6cd300dd$export$728d6ba534403756)({
        ...props,
        collection: filteredCollection,
        children: undefined
    });
    let triggerState = (0, react.useContext)($49319ee1285aa241$export$795aec4671cbae19);
    let { isVirtualized: isVirtualized, CollectionRoot: CollectionRoot } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let { menuProps: menuProps } = (0, $a2d69d6ee8486855$export$38eaa17faae8f579)({
        ...props,
        isVirtualized: isVirtualized,
        onClose: props.onClose || triggerState?.close
    }, state, ref);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        children: undefined,
        defaultClassName: 'react-aria-Menu',
        values: {
            isEmpty: state.collection.size === 0
        }
    });
    let emptyState = null;
    if (state.collection.size === 0 && props.renderEmptyState) emptyState = /*#__PURE__*/ (0, react).createElement("div", {
        role: "menuitem",
        style: {
            display: 'contents'
        }
    }, props.renderEmptyState());
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, react).createElement((0, FocusScope/* FocusScope */.n1), null, /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, menuProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-empty": state.collection.size === 0 || undefined,
        onScroll: props.onScroll
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $49319ee1285aa241$export$24aad8519b95b41b,
                state
            ],
            [
                (0, Separator/* SeparatorContext */.$S),
                {
                    elementType: 'div'
                }
            ],
            [
                (0, Collection/* SectionContext */.P2),
                {
                    name: 'MenuSection',
                    render: $49319ee1285aa241$var$MenuSectionInner
                }
            ],
            [
                $49319ee1285aa241$var$SubmenuTriggerContext,
                {
                    parentMenuRef: ref,
                    shouldUseVirtualFocus: autocompleteMenuProps?.shouldUseVirtualFocus
                }
            ],
            [
                $49319ee1285aa241$var$MenuItemContext,
                {
                    shouldCloseOnSelect: props.shouldCloseOnSelect
                }
            ],
            [
                (0, Autocomplete/* SelectableCollectionContext */.Co),
                null
            ],
            [
                (0, Autocomplete/* FieldInputContext */.wv),
                null
            ],
            [
                $49319ee1285aa241$var$SelectionManagerContext,
                state.selectionManager
            ],
            /* Ensure root MenuTriggerState is defined, in case Menu is rendered outside a MenuTrigger. */ /* We assume the context can never change between defined and undefined. */ // oxlint-disable-next-line react/react-compiler, react-hooks/rules-of-hooks
            [
                $49319ee1285aa241$export$795aec4671cbae19,
                triggerState ?? (0, useMenuTriggerState/* useMenuTriggerState */.I)({})
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement((0, SharedElementTransition/* SharedElementTransition */.D), null, /*#__PURE__*/ (0, react).createElement(CollectionRoot, {
        collection: state.collection,
        persistedKeys: (0, Collection/* usePersistedKeys */.l2)(state.selectionManager.focusedKey),
        scrollRef: ref
    }))), emptyState));
}
// A subclass of SelectionManager that forwards focus-related properties to the parent,
// but has its own local selection state.
class $49319ee1285aa241$var$GroupSelectionManager extends (0, SelectionManager/* SelectionManager */.Y) {
    constructor(parent, state){
        super(parent.collection, state);
        this.parent = parent;
    }
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
}
function $49319ee1285aa241$var$MenuSectionInner(props, ref, section, className = 'react-aria-MenuSection') {
    let state = (0, react.useContext)($49319ee1285aa241$export$24aad8519b95b41b);
    let { CollectionBranch: CollectionBranch } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let [headingRef, heading] = (0, utils/* useSlot */._E)();
    let { headingProps: headingProps, groupProps: groupProps } = (0, $7355d4e5c49461b6$export$73f7a44322579622)({
        heading: heading,
        'aria-label': section.props['aria-label'] ?? undefined
    });
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        id: undefined,
        children: undefined,
        defaultClassName: className,
        className: section.props?.className,
        style: section.props?.style,
        values: undefined
    });
    let parent = (0, react.useContext)($49319ee1285aa241$var$SelectionManagerContext);
    let selectionState = (0, useMultipleSelectionState/* useMultipleSelectionState */.R)(props);
    let manager = props.selectionMode != null ? new $49319ee1285aa241$var$GroupSelectionManager(parent, selectionState) : parent;
    let closeOnSelect = (0, utils/* useSlottedContext */.CC)($49319ee1285aa241$var$MenuItemContext)?.shouldCloseOnSelect;
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).section, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, groupProps),
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
                $49319ee1285aa241$var$SelectionManagerContext,
                manager
            ],
            [
                $49319ee1285aa241$var$MenuItemContext,
                {
                    shouldCloseOnSelect: props.shouldCloseOnSelect ?? closeOnSelect
                }
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement(CollectionBranch, {
        collection: state.collection,
        parent: section
    })));
}
const $49319ee1285aa241$export$4b1545b4f2016d26 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $7xe5e$createBranchComponent)((0, $7xe5e$SectionNode), $49319ee1285aa241$var$MenuSectionInner)));
const $49319ee1285aa241$var$MenuItemContext = /*#__PURE__*/ (0, react.createContext)(null);
const $49319ee1285aa241$export$2ce376c2cc3355c8 = /*#__PURE__*/ (0, CollectionBuilder/* createLeafComponent */.KU)((0, BaseCollection/* ItemNode */._B), function MenuItem(props, forwardedRef, item) {
    [props, forwardedRef] = (0, utils/* useContextProps */.JT)(props, forwardedRef, $49319ee1285aa241$var$MenuItemContext);
    let id = (0, utils/* useSlottedContext */.CC)($49319ee1285aa241$var$MenuItemContext)?.id;
    let state = (0, react.useContext)($49319ee1285aa241$export$24aad8519b95b41b);
    let ref = (0, useObjectRef/* useObjectRef */.U)(forwardedRef);
    let selectionManager = (0, react.useContext)($49319ee1285aa241$var$SelectionManagerContext);
    let { isVirtualized: isVirtualized } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let { menuItemProps: menuItemProps, labelProps: labelProps, descriptionProps: descriptionProps, keyboardShortcutProps: keyboardShortcutProps, ...states } = (0, $1a9c2c840fd36413$export$9d32628fc2aea7da)({
        ...props,
        id: id,
        key: item.key,
        selectionManager: selectionManager,
        isVirtualized: isVirtualized
    }, state, ref);
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
            isFocusVisible: states.isFocusVisible,
            selectionMode: selectionManager.selectionMode,
            selectionBehavior: selectionManager.selectionBehavior,
            hasSubmenu: !!props['aria-haspopup'],
            isOpen: props['aria-expanded'] === 'true'
        }
    });
    let ElementType = props.href ? (0, utils/* dom */.tT).a : (0, utils/* dom */.tT).div;
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, react).createElement(ElementType, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, menuItemProps, hoverProps),
        ref: ref,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": states.isFocusVisible || undefined,
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
                        [(0, utils/* DEFAULT_SLOT */.P_)]: labelProps,
                        label: labelProps,
                        description: descriptionProps
                    }
                }
            ],
            [
                (0, $650bea62ab5f5f0f$export$744d98a3b8a94e1c),
                keyboardShortcutProps
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



//# sourceMappingURL=Menu.mjs.map


/***/ },

/***/ 51146
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ $542a13ca2fa5b484$export$5b6b19405a83ff9d),
  n: () => (/* binding */ $542a13ca2fa5b484$export$9b9a0cd73afb7ca4)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(57653);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(99592);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/ariaHideOutside.mjs
var ariaHideOutside = __webpack_require__(61251);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/useOverlayPosition.mjs + 1 modules
var useOverlayPosition = __webpack_require__(49902);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusWithin.mjs
var useFocusWithin = __webpack_require__(75655);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/useOverlay.mjs + 1 modules
var useOverlay = __webpack_require__(71314);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/usePreventScroll.mjs
var usePreventScroll = __webpack_require__(47347);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria/dist/private/overlays/usePopover.mjs








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






function $f8a024fbad3a5a2e$export$542a6fd13ac93354(props, state) {
    let { triggerRef: triggerRef, popoverRef: popoverRef, groupRef: groupRef, isNonModal: isNonModal, isKeyboardDismissDisabled: isKeyboardDismissDisabled, shouldCloseOnInteractOutside: shouldCloseOnInteractOutside, ...otherProps } = props;
    let isSubmenu = otherProps['trigger'] === 'SubmenuTrigger';
    let { overlayProps: overlayProps, underlayProps: underlayProps } = (0, useOverlay/* useOverlay */.e)({
        isOpen: state.isOpen,
        onClose: state.close,
        shouldCloseOnBlur: true,
        isDismissable: !isNonModal || isSubmenu,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        shouldCloseOnInteractOutside: shouldCloseOnInteractOutside
    }, groupRef ?? popoverRef);
    let { overlayProps: positionProps, arrowProps: arrowProps, placement: placement, triggerAnchorPoint: origin } = (0, useOverlayPosition/* useOverlayPosition */.v)({
        ...otherProps,
        targetRef: triggerRef,
        overlayRef: popoverRef,
        isOpen: state.isOpen,
        onClose: isNonModal && !isSubmenu ? state.close : null,
        getTargetRect: otherProps.getTargetRect ?? (state.point ? ()=>new DOMRect(state.point.x, state.point.y, 0, 0) : undefined)
    });
    (0, usePreventScroll/* usePreventScroll */.H)({
        isDisabled: isNonModal || !state.isOpen
    });
    (0, react.useEffect)(()=>{
        if (state.isOpen && popoverRef.current) {
            if (isNonModal) return (0, ariaHideOutside/* keepVisible */.O)(groupRef?.current ?? popoverRef.current);
            else return (0, ariaHideOutside/* ariaHideOutside */.h)([
                groupRef?.current ?? popoverRef.current
            ], {
                shouldUseInert: true
            });
        }
    }, [
        isNonModal,
        state.isOpen,
        popoverRef,
        groupRef
    ]);
    let { focusWithinProps: focusWithinProps } = (0, useFocusWithin/* useFocusWithin */.R)(props);
    return {
        popoverProps: (0, mergeProps/* mergeProps */.v)(overlayProps, positionProps, focusWithinProps),
        arrowProps: arrowProps,
        underlayProps: underlayProps,
        placement: placement,
        triggerAnchorPoint: origin
    };
}



//# sourceMappingURL=usePopover.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/DismissButton.mjs + 35 modules
var DismissButton = __webpack_require__(85328);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/Overlay.mjs
var Overlay = __webpack_require__(33463);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/focusSafely.mjs
var focusSafely = __webpack_require__(75105);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(35692);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(62975);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/overlays/useOverlayTriggerState.mjs
var useOverlayTriggerState = __webpack_require__(42946);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/animation.mjs
var animation = __webpack_require__(26855);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/Hidden.mjs
var Hidden = __webpack_require__(61207);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(74441);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/I18nProvider.mjs + 2 modules
var I18nProvider = __webpack_require__(78352);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useResizeObserver.mjs
var useResizeObserver = __webpack_require__(10494);
;// ./node_modules/react-aria-components/dist/private/Popover.mjs


















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
















const $542a13ca2fa5b484$export$9b9a0cd73afb7ca4 = /*#__PURE__*/ (0, react.createContext)(null);
// Stores a ref for the portal container for a group of popovers (e.g. submenus).
const $542a13ca2fa5b484$var$PopoverGroupContext = /*#__PURE__*/ (0, react.createContext)(null);
const $542a13ca2fa5b484$export$5b6b19405a83ff9d = /*#__PURE__*/ (0, react.forwardRef)(function Popover(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $542a13ca2fa5b484$export$9b9a0cd73afb7ca4);
    let contextState = (0, react.useContext)((0, Dialog/* OverlayTriggerStateContext */.RG));
    let localState = (0, useOverlayTriggerState/* useOverlayTriggerState */.T)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    // Skip the automatic exit animation when closing instantly (e.g. swapping between previews
    // during warmup). An explicitly provided isExiting prop still takes precedence.
    let exitAnimation = (0, animation/* useExitAnimation */.O)(ref, state.isOpen);
    let isExiting = props.isExiting || !props.shouldSkipAnimation && exitAnimation || false;
    let isHidden = (0, Hidden/* useIsHidden */.m_)();
    let { direction: direction } = (0, I18nProvider/* useLocale */.Y)();
    // If we are in a hidden tree, we still need to preserve our children.
    if (isHidden) {
        let children = props.children;
        if (typeof children === 'function') children = children({
            trigger: props.trigger || null,
            placement: 'bottom',
            isEntering: false,
            isExiting: false,
            defaultChildren: null
        });
        return /*#__PURE__*/ (0, react).createElement((0, react).Fragment, null, children);
    }
    if (state && !state.isOpen && !isExiting) return null;
    return /*#__PURE__*/ (0, react).createElement($542a13ca2fa5b484$var$PopoverInner, {
        ...props,
        triggerRef: props.triggerRef,
        state: state,
        popoverRef: ref,
        isExiting: isExiting,
        dir: direction
    });
});
function $542a13ca2fa5b484$var$PopoverInner({ state: state, isExiting: isExiting, UNSTABLE_portalContainer: UNSTABLE_portalContainer, clearContexts: clearContexts, ...props }) {
    // Calculate the arrow size internally (and remove props.arrowSize from PopoverProps)
    // Referenced from: packages/@react-spectrum/tooltip/src/TooltipTrigger.tsx
    let arrowRef = (0, react.useRef)(null);
    let containerRef = (0, react.useRef)(null);
    let groupCtx = (0, react.useContext)($542a13ca2fa5b484$var$PopoverGroupContext);
    let isSubPopover = groupCtx && props.trigger === 'SubmenuTrigger';
    let { popoverProps: popoverProps, underlayProps: underlayProps, arrowProps: arrowProps, placement: placement, triggerAnchorPoint: triggerAnchorPoint } = (0, $f8a024fbad3a5a2e$export$542a6fd13ac93354)({
        ...props,
        offset: props.offset ?? 8,
        arrowRef: arrowRef,
        // If this is a submenu/subdialog, use the root popover's container
        // to detect outside interaction and add aria-hidden.
        groupRef: isSubPopover ? groupCtx : containerRef
    }, state);
    let ref = props.popoverRef;
    // Skip the automatic entry animation when opening instantly (e.g. swapping between previews
    // during warmup). An explicitly provided isEntering prop still takes precedence.
    let enterAnimation = (0, animation/* useEnterAnimation */._)(ref, !!placement);
    // oxlint-disable-next-line react/react-compiler
    let isEntering = props.isEntering || !props.shouldSkipAnimation && enterAnimation || false;
    // oxlint-disable-next-line react/react-compiler
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        // oxlint-disable-next-line react/react-compiler
        ...props,
        defaultClassName: 'react-aria-Popover',
        // oxlint-disable-next-line react/react-compiler
        values: {
            // oxlint-disable-next-line react/react-compiler
            trigger: props.trigger || null,
            placement: placement,
            isEntering: // oxlint-disable-next-line react/react-compiler
            isEntering,
            isExiting: isExiting
        }
    });
    // Automatically render Popover with role=dialog except when isNonModal is true,
    // or a dialog is already nested inside the popover.
    let shouldBeDialog = // oxlint-disable-next-line react/react-compiler
    !props.isNonModal || props.trigger === 'SubmenuTrigger' || props.trigger === 'PreviewTrigger';
    // oxlint-disable-next-line react/react-compiler
    let [isDialog, setDialog] = (0, react.useState)(props.trigger === 'PreviewTrigger');
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        if (ref.current) setDialog(shouldBeDialog && !ref.current.querySelector('[role=dialog]'));
    }, [
        ref,
        shouldBeDialog
    ]);
    // Focus the popover itself on mount, unless a child element is already focused.
    // Skip this for submenus since hovering a submenutrigger should keep focus on the trigger
    // oxlint-disable react/react-compiler
    (0, react.useEffect)(()=>{
        if (isDialog && props.trigger !== 'PreviewTrigger' && (props.trigger !== 'SubmenuTrigger' || (0, useFocusVisible/* getInteractionModality */.ME)() !== 'pointer') && ref.current && !(0, DOMFunctions/* isFocusWithin */.ae)(ref.current)) (0, focusSafely/* focusSafely */.l)(ref.current);
    }, [
        isDialog,
        ref,
        props.trigger
    ]);
    // oxlint-enable react/react-compiler
    let children = (0, react.useMemo)(()=>{
        let children = renderProps.children;
        if (clearContexts) for (let Context of clearContexts)children = /*#__PURE__*/ (0, react).createElement(Context.Provider, {
            value: null
        }, children);
        return children;
    }, [
        renderProps.children,
        clearContexts
    ]);
    let [triggerWidth, setTriggerWidth] = (0, react.useState)(null);
    // oxlint-disable-next-line react/react-compiler
    let onResize = (0, react.useCallback)(()=>{
        if (props.triggerRef.current) setTriggerWidth(props.triggerRef.current.getBoundingClientRect().width + 'px');
    }, [
        props.triggerRef
    ]);
    (0, useLayoutEffect/* useLayoutEffect */.N)(onResize, [
        onResize
    ]);
    // oxlint-disable-next-line react/react-compiler
    (0, useResizeObserver/* useResizeObserver */.w)({
        // oxlint-disable-next-line react/react-compiler
        ref: renderProps.style?.['--trigger-width'] ? undefined : props.triggerRef,
        onResize: onResize
    });
    let style = {
        ...popoverProps.style,
        '--trigger-anchor-point': triggerAnchorPoint ? `${triggerAnchorPoint.x}px ${triggerAnchorPoint.y}px` : undefined,
        ...renderProps.style,
        '--trigger-width': renderProps.style?.['--trigger-width'] || triggerWidth
    };
    // oxlint-disable react/react-compiler
    let overlay = /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...(0, mergeProps/* mergeProps */.v)((0, filterDOMProps/* filterDOMProps */.$)(props, {
            global: true
        }), popoverProps),
        ...renderProps,
        id: isDialog ? props.id : undefined,
        role: isDialog ? 'dialog' : undefined,
        tabIndex: isDialog ? -1 : undefined,
        "aria-label": props['aria-label'],
        "aria-labelledby": props['aria-labelledby'],
        ref: ref,
        slot: props.slot || undefined,
        style: style,
        dir: props.dir,
        "data-trigger": props.trigger,
        "data-placement": placement,
        "data-entering": isEntering || undefined,
        "data-exiting": isExiting || undefined
    }, !props.isNonModal && /*#__PURE__*/ (0, react).createElement((0, DismissButton/* DismissButton */.R), {
        onDismiss: state.close
    }), /*#__PURE__*/ (0, react).createElement((0, OverlayArrow/* OverlayArrowContext */.J).Provider, {
        value: {
            ...arrowProps,
            placement: placement,
            ref: arrowRef
        }
    }, children), /*#__PURE__*/ (0, react).createElement((0, DismissButton/* DismissButton */.R), {
        onDismiss: state.close
    }));
    // oxlint-enable react/react-compiler
    // If this is a root popover, render an extra div to act as the portal container for submenus/subdialogs.
    if (!isSubPopover) // oxlint-disable react/react-compiler
    return /*#__PURE__*/ (0, react).createElement((0, Overlay/* Overlay */.hJ), {
        ...props,
        shouldContainFocus: isDialog && props.trigger !== 'PreviewTrigger',
        isExiting: isExiting,
        portalContainer: UNSTABLE_portalContainer
    }, !props.isNonModal && state.isOpen && /*#__PURE__*/ (0, react).createElement("div", {
        "data-testid": "underlay",
        ...underlayProps,
        style: {
            position: 'fixed',
            inset: 0
        }
    }), /*#__PURE__*/ (0, react).createElement("div", {
        ref: containerRef,
        style: {
            display: 'contents'
        }
    }, /*#__PURE__*/ (0, react).createElement($542a13ca2fa5b484$var$PopoverGroupContext.Provider, {
        value: containerRef
    }, overlay)));
    // Submenus/subdialogs are mounted into the root popover's container.
    // oxlint-disable react/react-compiler
    return /*#__PURE__*/ (0, react).createElement((0, Overlay/* Overlay */.hJ), {
        ...props,
        shouldContainFocus: isDialog && props.trigger !== 'PreviewTrigger',
        isExiting: isExiting,
        portalContainer: UNSTABLE_portalContainer ?? groupCtx?.current ?? undefined
    }, overlay);
// oxlint-enable react/react-compiler
}



//# sourceMappingURL=Popover.mjs.map


/***/ },

/***/ 40795
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $S: () => (/* binding */ $e28ab3efe3e87743$export$6615d83f6de245ce)
/* harmony export */ });
/* unused harmony exports SeparatorNode, Separator */
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$29f1550f4b0d4415;
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$df3a06d6289f983e;
/* unused harmony import specifier */ var $adn6H$useSeparator;
/* unused harmony import specifier */ var $adn6H$createLeafComponent;
/* unused harmony import specifier */ var $adn6H$filterDOMProps;
/* unused harmony import specifier */ var $adn6H$mergeProps;
/* unused harmony import specifier */ var $adn6H$react;
/* harmony import */ var react_aria_private_collections_BaseCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2764);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);








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






const $e28ab3efe3e87743$export$6615d83f6de245ce = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
class $e28ab3efe3e87743$export$7750289ca694c0b5 extends (0, react_aria_private_collections_BaseCollection__WEBPACK_IMPORTED_MODULE_0__/* .CollectionNode */ .Pt) {
    static{
        this.type = 'separator';
    }
    filter(collection, newCollection) {
        let prevItem = newCollection.getItem(this.prevKey);
        if (prevItem && prevItem.type !== 'separator') {
            let clone = this.clone();
            newCollection.addDescendants(clone, collection);
            return clone;
        }
        return null;
    }
}
const $e28ab3efe3e87743$export$1ff3c3f08ae963c0 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $adn6H$createLeafComponent)($e28ab3efe3e87743$export$7750289ca694c0b5, function Separator(props, ref) {
    [props, ref] = (0, $7230ffa83bc0c2cf$export$29f1550f4b0d4415)(props, ref, $e28ab3efe3e87743$export$6615d83f6de245ce);
    let { elementType: elementType, orientation: orientation, style: style, className: className, slot: slot, ...otherProps } = props;
    let Element = elementType || 'hr';
    if (Element === 'hr' && orientation === 'vertical') Element = 'div';
    let ElementType = (0, $7230ffa83bc0c2cf$export$df3a06d6289f983e)[Element];
    let { separatorProps: separatorProps } = (0, $adn6H$useSeparator)({
        ...otherProps,
        elementType: elementType,
        orientation: orientation
    });
    let DOMProps = (0, $adn6H$filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, $adn6H$react).createElement(ElementType, {
        render: props.render,
        ...(0, $adn6H$mergeProps)(DOMProps, separatorProps),
        style: style,
        className: className ?? 'react-aria-Separator',
        ref: ref,
        slot: slot || undefined
    });
})));



//# sourceMappingURL=Separator.mjs.map


/***/ },

/***/ 20987
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $efe09c6d1c304b50$export$5f1af8db9871e1d6),
/* harmony export */   h: () => (/* binding */ $efe09c6d1c304b50$export$9afb8bc826b033ea)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95841);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);



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

const $efe09c6d1c304b50$export$9afb8bc826b033ea = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const $efe09c6d1c304b50$export$5f1af8db9871e1d6 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Text(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $efe09c6d1c304b50$export$9afb8bc826b033ea);
    let { elementType: elementType = 'span', ...domProps } = props;
    let ElementType = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT)[elementType];
    // @ts-ignore
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__).createElement(ElementType, {
        className: "react-aria-Text",
        ...domProps,
        ref: ref
    });
});



//# sourceMappingURL=Text.mjs.map


/***/ },

/***/ 2764
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EH: () => (/* binding */ $6f0c29017aeec335$export$5ae2504e948afce5),
/* harmony export */   OJ: () => (/* binding */ $6f0c29017aeec335$export$8258a0665a675899),
/* harmony export */   Pt: () => (/* binding */ $6f0c29017aeec335$export$d68d59712b04d9d1),
/* harmony export */   Wk: () => (/* binding */ $6f0c29017aeec335$export$408d25a4e12db025),
/* harmony export */   _B: () => (/* binding */ $6f0c29017aeec335$export$fd11f34e1d07f134),
/* harmony export */   ox: () => (/* binding */ $6f0c29017aeec335$export$437f11dc9b403b78),
/* harmony export */   ru: () => (/* binding */ $6f0c29017aeec335$export$b1918e978f1ee46f)
/* harmony export */ });
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
 */ class $6f0c29017aeec335$export$d68d59712b04d9d1 {
    constructor(key){
        this.value = null;
        this.level = 0;
        this.hasChildNodes = false;
        this.rendered = null;
        this.textValue = '';
        this['aria-label'] = undefined;
        this.index = 0;
        this.parentKey = null;
        this.prevKey = null;
        this.nextKey = null;
        this.firstChildKey = null;
        this.lastChildKey = null;
        this.props = {};
        this.colSpan = null;
        this.colIndex = null;
        this.type = this.constructor.type;
        this.key = key;
    }
    get childNodes() {
        throw new Error('childNodes is not supported');
    }
    clone() {
        let node = new this.constructor(this.key);
        node.value = this.value;
        node.level = this.level;
        node.hasChildNodes = this.hasChildNodes;
        node.rendered = this.rendered;
        node.textValue = this.textValue;
        node['aria-label'] = this['aria-label'];
        node.index = this.index;
        node.parentKey = this.parentKey;
        node.prevKey = this.prevKey;
        node.nextKey = this.nextKey;
        node.firstChildKey = this.firstChildKey;
        node.lastChildKey = this.lastChildKey;
        node.props = this.props;
        node.render = this.render;
        node.colSpan = this.colSpan;
        node.colIndex = this.colIndex;
        return node;
    }
    filter(collection, newCollection, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    filterFn) {
        let clone = this.clone();
        newCollection.addDescendants(clone, collection);
        return clone;
    }
}
class $6f0c29017aeec335$export$b1918e978f1ee46f extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
    filter(collection, newCollection, filterFn) {
        let [firstKey, lastKey] = $6f0c29017aeec335$var$filterChildren(collection, newCollection, this.firstChildKey, filterFn);
        let newNode = this.clone();
        newNode.firstChildKey = firstKey;
        newNode.lastChildKey = lastKey;
        return newNode;
    }
}
class $6f0c29017aeec335$export$5ae2504e948afce5 extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
    static{
        this.type = 'header';
    }
}
class $6f0c29017aeec335$export$8258a0665a675899 extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
    static{
        this.type = 'loader';
    }
}
class $6f0c29017aeec335$export$fd11f34e1d07f134 extends $6f0c29017aeec335$export$b1918e978f1ee46f {
    static{
        this.type = 'item';
    }
    filter(collection, newCollection, filterFn) {
        if (filterFn(this.textValue, this)) {
            let clone = this.clone();
            newCollection.addDescendants(clone, collection);
            return clone;
        }
        return null;
    }
}
class $6f0c29017aeec335$export$437f11dc9b403b78 extends $6f0c29017aeec335$export$b1918e978f1ee46f {
    static{
        this.type = 'section';
    }
    filter(collection, newCollection, filterFn) {
        let filteredSection = super.filter(collection, newCollection, filterFn);
        if (filteredSection) {
            if (filteredSection.lastChildKey !== null) {
                let lastChild = collection.getItem(filteredSection.lastChildKey);
                if (lastChild && lastChild.type !== 'header') return filteredSection;
            }
        }
        return null;
    }
}
class $6f0c29017aeec335$export$408d25a4e12db025 {
    get size() {
        return this.itemCount;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    *[Symbol.iterator]() {
        let node = this.firstKey != null ? this.keyMap.get(this.firstKey) : undefined;
        while(node){
            yield node;
            node = node.nextKey != null ? this.keyMap.get(node.nextKey) : undefined;
        }
    }
    getChildren(key) {
        let keyMap = this.keyMap;
        return {
            *[Symbol.iterator] () {
                let parent = keyMap.get(key);
                let node = parent?.firstChildKey != null ? keyMap.get(parent.firstChildKey) : null;
                while(node){
                    yield node;
                    node = node.nextKey != null ? keyMap.get(node.nextKey) : undefined;
                }
            }
        };
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        if (!node) return null;
        if (node.prevKey != null) {
            node = this.keyMap.get(node.prevKey);
            while(node && node.type !== 'item' && node.lastChildKey != null)node = this.keyMap.get(node.lastChildKey);
            return node?.key ?? null;
        }
        return node.parentKey;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        if (!node) return null;
        if (node.type !== 'item' && node.firstChildKey != null) return node.firstChildKey;
        while(node){
            if (node.nextKey != null) return node.nextKey;
            if (node.parentKey != null) node = this.keyMap.get(node.parentKey);
            else return null;
        }
        return null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        let node = this.lastKey != null ? this.keyMap.get(this.lastKey) : null;
        while(node?.lastChildKey != null)node = this.keyMap.get(node.lastChildKey);
        return node?.key ?? null;
    }
    getItem(key) {
        return this.keyMap.get(key) ?? null;
    }
    at() {
        throw new Error('Not implemented');
    }
    clone() {
        // We need to clone using this.constructor so that subclasses have the right prototype.
        // TypeScript isn't happy about this yet.
        // https://github.com/microsoft/TypeScript/issues/3841
        let Constructor = this.constructor;
        let collection = new Constructor();
        collection.keyMap = new Map(this.keyMap);
        collection.firstKey = this.firstKey;
        collection.lastKey = this.lastKey;
        collection.itemCount = this.itemCount;
        return collection;
    }
    addNode(node) {
        if (this.frozen) throw new Error('Cannot add a node to a frozen collection');
        if (node.type === 'item' && this.keyMap.get(node.key) == null) this.itemCount++;
        this.keyMap.set(node.key, node);
    }
    // Deeply add a node and its children to the collection from another collection, primarily used when filtering a collection
    addDescendants(node, oldCollection) {
        this.addNode(node);
        let children = oldCollection.getChildren(node.key);
        for (let child of children)this.addDescendants(child, oldCollection);
    }
    removeNode(key) {
        if (this.frozen) throw new Error('Cannot remove a node to a frozen collection');
        let node = this.keyMap.get(key);
        if (node != null && node.type === 'item') this.itemCount--;
        this.keyMap.delete(key);
    }
    commit(firstKey, lastKey, isSSR = false) {
        if (this.frozen) throw new Error('Cannot commit a frozen collection');
        this.firstKey = firstKey;
        this.lastKey = lastKey;
        this.frozen = !isSSR;
    }
    filter(filterFn) {
        let newCollection = new this.constructor();
        let [firstKey, lastKey] = $6f0c29017aeec335$var$filterChildren(this, newCollection, this.firstKey, filterFn);
        newCollection?.commit(firstKey, lastKey);
        return newCollection;
    }
    constructor(){
        this.keyMap = new Map();
        this.firstKey = null;
        this.lastKey = null;
        this.frozen = false;
        this.itemCount = 0;
    }
}
function $6f0c29017aeec335$var$filterChildren(collection, newCollection, firstChildKey, filterFn) {
    // loop over the siblings for firstChildKey
    // create new nodes based on calling node.filter for each child
    // if it returns null then don't include it, otherwise update its prev/next keys
    // add them to the newCollection
    if (firstChildKey == null) return [
        null,
        null
    ];
    let firstNode = null;
    let lastNode = null;
    let currentNode = collection.getItem(firstChildKey);
    while(currentNode != null){
        let newNode = currentNode.filter(collection, newCollection, filterFn);
        if (newNode != null) {
            newNode.nextKey = null;
            if (lastNode) {
                newNode.prevKey = lastNode.key;
                lastNode.nextKey = newNode.key;
            }
            if (firstNode == null) firstNode = newNode;
            newCollection.addNode(newNode);
            lastNode = newNode;
        }
        currentNode = currentNode.nextKey != null ? collection.getItem(currentNode.nextKey) : null;
    }
    // TODO: this is pretty specific to dividers but doesn't feel like there is a good way to get around it since we only can know
    // to filter the last separator in a collection only after performing a filter for the rest of the contents after it
    // Its gross that it needs to live here, might be nice if somehow we could have this live in the separator code
    if (lastNode && lastNode.type === 'separator') {
        let prevKey = lastNode.prevKey;
        newCollection.removeNode(lastNode.key);
        if (prevKey != null) {
            lastNode = newCollection.getItem(prevKey);
            lastNode.nextKey = null;
        } else lastNode = null;
    }
    return [
        firstNode?.key ?? null,
        lastNode?.key ?? null
    ];
}



//# sourceMappingURL=BaseCollection.mjs.map


/***/ },

/***/ 11513
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  pM: () => (/* binding */ $42ceafc619f9c3ba$export$fb8073518f34e6ec),
  GQ: () => (/* binding */ $42ceafc619f9c3ba$export$bf788dd355e3a401),
  yq: () => (/* binding */ $42ceafc619f9c3ba$export$e953bb1cd0f19726),
  KU: () => (/* binding */ $42ceafc619f9c3ba$export$18af5c7a9e9b3664)
});

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/BaseCollection.mjs
var BaseCollection = __webpack_require__(2764);
;// ./node_modules/react-aria/dist/private/collections/Document.mjs
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
 */ class $96ead35620b8fd36$export$410b0c854570d131 {
    constructor(ownerDocument){
        this._firstChild = null;
        this._lastChild = null;
        this._previousSibling = null;
        this._nextSibling = null;
        this._parentNode = null;
        this._minInvalidChildIndex = null;
        this.ownerDocument = ownerDocument;
    }
    *[Symbol.iterator]() {
        let node = this.firstChild;
        while(node){
            yield node;
            node = node.nextSibling;
        }
    }
    get firstChild() {
        return this._firstChild;
    }
    set firstChild(firstChild) {
        this._firstChild = firstChild;
        this.ownerDocument.markDirty(this);
    }
    get lastChild() {
        return this._lastChild;
    }
    set lastChild(lastChild) {
        this._lastChild = lastChild;
        this.ownerDocument.markDirty(this);
    }
    get previousSibling() {
        return this._previousSibling;
    }
    set previousSibling(previousSibling) {
        this._previousSibling = previousSibling;
        this.ownerDocument.markDirty(this);
    }
    get nextSibling() {
        return this._nextSibling;
    }
    set nextSibling(nextSibling) {
        this._nextSibling = nextSibling;
        this.ownerDocument.markDirty(this);
    }
    get parentNode() {
        return this._parentNode;
    }
    set parentNode(parentNode) {
        this._parentNode = parentNode;
        this.ownerDocument.markDirty(this);
    }
    get isConnected() {
        return this.parentNode?.isConnected || false;
    }
    invalidateChildIndices(child) {
        if (this._minInvalidChildIndex == null || !this._minInvalidChildIndex.isConnected || child.index < this._minInvalidChildIndex.index) {
            this._minInvalidChildIndex = child;
            this.ownerDocument.markDirty(this);
        }
    }
    updateChildIndices() {
        let node = this._minInvalidChildIndex;
        while(node){
            node.index = node.previousSibling ? node.previousSibling.index + 1 : 0;
            node = node.nextSibling;
        }
        this._minInvalidChildIndex = null;
    }
    appendChild(child) {
        if (child.parentNode) child.parentNode.removeChild(child);
        if (this.firstChild == null) this.firstChild = child;
        if (this.lastChild) {
            this.lastChild.nextSibling = child;
            child.index = this.lastChild.index + 1;
            child.previousSibling = this.lastChild;
        } else {
            child.previousSibling = null;
            child.index = 0;
        }
        child.parentNode = this;
        child.nextSibling = null;
        this.lastChild = child;
        this.ownerDocument.markDirty(this);
        if (this.isConnected) this.ownerDocument.queueUpdate();
    }
    insertBefore(newNode, referenceNode) {
        if (referenceNode == null) return this.appendChild(newNode);
        if (newNode.parentNode) newNode.parentNode.removeChild(newNode);
        newNode.nextSibling = referenceNode;
        newNode.previousSibling = referenceNode.previousSibling;
        // Ensure that the newNode's index is less than that of the reference node so that
        // invalidateChildIndices will properly use the newNode as the _minInvalidChildIndex, thus making sure
        // we will properly update the indexes of all sibiling nodes after the newNode. The value here doesn't matter
        // since updateChildIndices should calculate the proper indexes.
        newNode.index = referenceNode.index - 1;
        if (this.firstChild === referenceNode) this.firstChild = newNode;
        else if (referenceNode.previousSibling) referenceNode.previousSibling.nextSibling = newNode;
        referenceNode.previousSibling = newNode;
        newNode.parentNode = referenceNode.parentNode;
        this.invalidateChildIndices(newNode);
        if (this.isConnected) this.ownerDocument.queueUpdate();
    }
    removeChild(child) {
        if (child.parentNode !== this) return;
        if (this._minInvalidChildIndex === child) this._minInvalidChildIndex = null;
        if (child.nextSibling) {
            this.invalidateChildIndices(child.nextSibling);
            child.nextSibling.previousSibling = child.previousSibling;
        }
        if (child.previousSibling) child.previousSibling.nextSibling = child.nextSibling;
        if (this.firstChild === child) this.firstChild = child.nextSibling;
        if (this.lastChild === child) this.lastChild = child.previousSibling;
        child.parentNode = null;
        child.nextSibling = null;
        child.previousSibling = null;
        child.index = 0;
        this.ownerDocument.markDirty(child);
        if (this.isConnected) this.ownerDocument.queueUpdate();
    }
    addEventListener() {}
    removeEventListener() {}
    get previousVisibleSibling() {
        let node = this.previousSibling;
        while(node && node.isHidden)node = node.previousSibling;
        return node;
    }
    get nextVisibleSibling() {
        let node = this.nextSibling;
        while(node && node.isHidden)node = node.nextSibling;
        return node;
    }
    get firstVisibleChild() {
        let node = this.firstChild;
        while(node && node.isHidden)node = node.nextSibling;
        return node;
    }
    get lastVisibleChild() {
        let node = this.lastChild;
        while(node && node.isHidden)node = node.previousSibling;
        return node;
    }
}
class $96ead35620b8fd36$export$dc064fe9e59310fd extends $96ead35620b8fd36$export$410b0c854570d131 {
    constructor(type, ownerDocument){
        super(ownerDocument), this.nodeType = 8 // COMMENT_NODE (we'd use ELEMENT_NODE but React DevTools will fail to get its dimensions)
        , this.isMutated = true, this._index = 0, this.isHidden = false;
        this.node = null;
    }
    get index() {
        return this._index;
    }
    set index(index) {
        this._index = index;
        this.ownerDocument.markDirty(this);
    }
    get level() {
        if (this.parentNode instanceof $96ead35620b8fd36$export$dc064fe9e59310fd) return this.parentNode.level + (this.parentNode.node?.type === 'item' ? 1 : 0);
        return 0;
    }
    /**
   * Lazily gets a mutable instance of a Node. If the node has already
   * been cloned during this update cycle, it just returns the existing one.
   */ getMutableNode() {
        if (this.node == null) return null;
        if (!this.isMutated) {
            this.node = this.node.clone();
            this.isMutated = true;
        }
        this.ownerDocument.markDirty(this);
        return this.node;
    }
    updateNode() {
        let nextSibling = this.nextVisibleSibling;
        let node = this.getMutableNode();
        if (node == null) return;
        node.index = this.index;
        node.level = this.level;
        node.parentKey = this.parentNode instanceof $96ead35620b8fd36$export$dc064fe9e59310fd ? this.parentNode.node?.key ?? null : null;
        node.prevKey = this.previousVisibleSibling?.node?.key ?? null;
        node.nextKey = nextSibling?.node?.key ?? null;
        node.hasChildNodes = !!this.firstChild;
        node.firstChildKey = this.firstVisibleChild?.node?.key ?? null;
        node.lastChildKey = this.lastVisibleChild?.node?.key ?? null;
        // Update the colIndex of sibling nodes if this node has a colSpan.
        if ((node.colSpan != null || node.colIndex != null) && nextSibling) {
            // This queues the next sibling for update, which means this happens recursively.
            let nextColIndex = (node.colIndex ?? node.index) + (node.colSpan ?? 1);
            if (nextSibling.node != null && nextColIndex !== nextSibling.node.colIndex) {
                let siblingNode = nextSibling.getMutableNode();
                siblingNode.colIndex = nextColIndex;
            }
        }
    }
    setProps(obj, ref, CollectionNodeClass, rendered, render) {
        let node;
        let { value: value1, textValue: textValue, id: id, ...props } = obj;
        if (this.node == null) {
            node = new CollectionNodeClass(id ?? `react-aria-${++this.ownerDocument.nodeId}`);
            this.node = node;
        } else node = this.getMutableNode();
        props.ref = ref;
        node.props = props;
        node.rendered = rendered;
        node.render = render;
        node.value = value1;
        if (obj['aria-label']) node['aria-label'] = obj['aria-label'];
        node.textValue = textValue || (typeof props.children === 'string' ? props.children : '') || obj['aria-label'] || '';
        if (id != null && id !== node.key) throw new Error('Cannot change the id of an item');
        if (props.colSpan != null) node.colSpan = props.colSpan;
        if (this.isConnected) this.ownerDocument.queueUpdate();
    }
    get style() {
        // React sets display: none to hide elements during Suspense.
        // We'll handle this by setting the element to hidden and invalidating
        // its siblings/parent. Hidden elements remain in the Document, but
        // are removed from the Collection.
        let element = this;
        return {
            get display () {
                return element.isHidden ? 'none' : '';
            },
            set display (value){
                let isHidden = value === 'none';
                if (element.isHidden !== isHidden) {
                    // Mark parent node dirty if this element is currently the first or last visible child.
                    if (element.parentNode?.firstVisibleChild === element || element.parentNode?.lastVisibleChild === element) element.ownerDocument.markDirty(element.parentNode);
                    // Mark sibling visible elements dirty.
                    let prev = element.previousVisibleSibling;
                    let next = element.nextVisibleSibling;
                    if (prev) element.ownerDocument.markDirty(prev);
                    if (next) element.ownerDocument.markDirty(next);
                    // Mark self dirty.
                    element.isHidden = isHidden;
                    element.ownerDocument.markDirty(element);
                }
            }
        };
    }
    hasAttribute() {}
    setAttribute() {}
    setAttributeNS() {}
    removeAttribute() {}
}
class $96ead35620b8fd36$export$b34a105447964f9f extends $96ead35620b8fd36$export$410b0c854570d131 {
    constructor(collection){
        // @ts-ignore
        super(null), this.nodeType = 11 // DOCUMENT_FRAGMENT_NODE
        , this.ownerDocument = this, this.dirtyNodes = new Set(), this.isSSR = false, this.nodeId = 0, this.nodesByProps = new WeakMap(), this.nextCollection = null, this.subscriptions = new Set(), this.queuedRender = false, this.inSubscription = false;
        this.collection = collection;
        this.nextCollection = collection;
    }
    get isConnected() {
        return true;
    }
    createElement(type) {
        return new $96ead35620b8fd36$export$dc064fe9e59310fd(type, this);
    }
    getMutableCollection() {
        if (!this.nextCollection) this.nextCollection = this.collection.clone();
        return this.nextCollection;
    }
    markDirty(node) {
        this.dirtyNodes.add(node);
    }
    addNode(element) {
        if (element.isHidden || element.node == null) return;
        let collection = this.getMutableCollection();
        if (!collection.getItem(element.node.key)) for (let child of element)this.addNode(child);
        collection.addNode(element.node);
    }
    removeNode(node) {
        for (let child of node)this.removeNode(child);
        if (node.node) {
            let collection = this.getMutableCollection();
            collection.removeNode(node.node.key);
        }
    }
    /** Finalizes the collection update, updating all nodes and freezing the collection. */ getCollection() {
        // If in a subscription update, return return the existing collection.
        // React will call getCollection again during render, at which point all the updates will be complete.
        if (this.inSubscription) return this.collection;
        // Reset queuedRender to false when getCollection is called during render.
        this.queuedRender = false;
        this.updateCollection();
        return this.collection;
    }
    updateCollection() {
        // First, remove disconnected nodes and update the indices of dirty element children.
        for (let element of this.dirtyNodes)if (element instanceof $96ead35620b8fd36$export$dc064fe9e59310fd && (!element.isConnected || element.isHidden)) this.removeNode(element);
        else element.updateChildIndices();
        // Next, update dirty collection nodes.
        for (let element of this.dirtyNodes)if (element instanceof $96ead35620b8fd36$export$dc064fe9e59310fd) {
            if (element.isConnected && !element.isHidden) {
                element.updateNode();
                this.addNode(element);
            }
            if (element.node) this.dirtyNodes.delete(element);
            element.isMutated = false;
        } else this.dirtyNodes.delete(element);
        // Finally, update the collection.
        if (this.nextCollection) {
            this.nextCollection.commit(this.firstVisibleChild?.node?.key ?? null, this.lastVisibleChild?.node?.key ?? null, this.isSSR);
            if (!this.isSSR) {
                this.collection = this.nextCollection;
                this.nextCollection = null;
            }
        }
    }
    queueUpdate() {
        if (this.dirtyNodes.size === 0 || this.queuedRender) return;
        // Only trigger subscriptions once during an update, when the first item changes.
        // React's useSyncExternalStore will call getCollection immediately, to check whether the snapshot changed.
        // If so, React will queue a render to happen after the current commit to our fake DOM finishes.
        // We track whether getCollection is called in a subscription, and once it is called during render,
        // we reset queuedRender back to false.
        this.queuedRender = true;
        this.inSubscription = true;
        // Clone the collection to ensure that React queues a render. It will call getCollection again
        // during render, at which point all the updates will be complete and we can return
        // the new collection.
        if (!this.isSSR) this.collection = this.collection.clone();
        for (let fn of this.subscriptions)fn();
        this.inSubscription = false;
    }
    subscribe(fn) {
        this.subscriptions.add(fn);
        // Ensure that React reads the collection if we re-subscribe after updates were
        // already queued. When a hidden Activity is revealed, child nodes re-attach and call
        // queueUpdate before we can re-subscribe, so the notification is lost.
        if (this.queuedRender) fn();
        return ()=>this.subscriptions.delete(fn);
    }
    resetAfterSSR() {
        if (this.isSSR) {
            this.isSSR = false;
            this.firstChild = null;
            this.lastChild = null;
            this.nodeId = 0;
        }
    }
}



//# sourceMappingURL=Document.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/useCachedChildren.mjs
var useCachedChildren = __webpack_require__(15855);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var useFocusable = __webpack_require__(55602);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/Hidden.mjs
var Hidden = __webpack_require__(61207);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/ssr/SSRProvider.mjs
var SSRProvider = __webpack_require__(51601);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/use-sync-external-store/shim/index.js
var shim = __webpack_require__(19888);
;// ./node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs










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








const $42ceafc619f9c3ba$var$ShallowRenderContext = /*#__PURE__*/ (0, react.createContext)(false);
const $42ceafc619f9c3ba$var$CollectionDocumentContext = /*#__PURE__*/ (0, react.createContext)(null);
function $42ceafc619f9c3ba$export$bf788dd355e3a401(props) {
    // If a document was provided above us, we're already in a hidden tree. Just render the content.
    let doc = (0, react.useContext)($42ceafc619f9c3ba$var$CollectionDocumentContext);
    if (doc) // The React types prior to 18 did not allow returning ReactNode from components
    // even though the actual implementation since React 16 did.
    // We must return ReactElement so that TS does not complain that <CollectionBuilder>
    // is not a valid JSX element with React 16 and 17 types.
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20544
    return props.content;
    // Otherwise, render a hidden copy of the children so that we can build the collection before constructing the state.
    // This should always come before the real DOM content so we have built the collection by the time it renders during SSR.
    // This is fine. CollectionDocumentContext never changes after mounting.
    // oxlint-disable-next-line react/react-compiler, react-hooks/rules-of-hooks
    let { collection: collection, document: document } = $42ceafc619f9c3ba$var$useCollectionDocument(props.createCollection);
    return /*#__PURE__*/ (0, react).createElement((0, react).Fragment, null, /*#__PURE__*/ (0, react).createElement((0, Hidden/* Hidden */.jZ), null, /*#__PURE__*/ (0, react).createElement($42ceafc619f9c3ba$var$CollectionDocumentContext.Provider, {
        value: document
    }, props.content)), /*#__PURE__*/ (0, react).createElement($42ceafc619f9c3ba$var$CollectionInner, {
        render: props.children,
        collection: collection
    }));
}
function $42ceafc619f9c3ba$var$CollectionInner({ collection: collection, render: render }) {
    return render(collection);
}
// React 16 and 17 don't support useSyncExternalStore natively, and the shim provided by React does not support getServerSnapshot.
// This wrapper uses the shim, but additionally calls getServerSnapshot during SSR (according to SSRProvider).
function $42ceafc619f9c3ba$var$useSyncExternalStoreFallback(subscribe, getSnapshot, getServerSnapshot) {
    let isSSR = (0, SSRProvider/* useIsSSR */.wR)();
    let isSSRRef = (0, react.useRef)(isSSR);
    // This is read immediately inside the wrapper, which also runs during render.
    // We just need a ref to avoid invalidating the callback itself, which
    // would cause React to re-run the callback more than necessary.
    // eslint-disable-next-line rsp-rules/pure-render
    // oxlint-disable-next-line react/react-compiler, rsp-rules/pure-render
    isSSRRef.current = isSSR;
    let getSnapshotWrapper = (0, react.useCallback)(()=>{
        return isSSRRef.current ? getServerSnapshot() : getSnapshot();
    }, [
        getSnapshot,
        getServerSnapshot
    ]);
    return (0, shim.useSyncExternalStore)(subscribe, getSnapshotWrapper);
}
const $42ceafc619f9c3ba$var$useSyncExternalStore = typeof (0, react)['useSyncExternalStore'] === 'function' ? (0, react)['useSyncExternalStore'] : $42ceafc619f9c3ba$var$useSyncExternalStoreFallback;
function $42ceafc619f9c3ba$var$useCollectionDocument(createCollection) {
    // The document instance is mutable, and should never change between renders.
    // useSyncExternalStore is used to subscribe to updates, which vends immutable Collection objects.
    let [document] = (0, react.useState)(()=>new (0, $96ead35620b8fd36$export$b34a105447964f9f)(createCollection?.() || new (0, BaseCollection/* BaseCollection */.Wk)()));
    let subscribe = (0, react.useCallback)((fn)=>document.subscribe(fn), [
        document
    ]);
    let getSnapshot = (0, react.useCallback)(()=>{
        let collection = document.getCollection();
        if (document.isSSR) // After SSR is complete, reset the document to empty so it is ready for React to render the portal into.
        // We do this _after_ getting the collection above so that the collection still has content in it from SSR
        // during the current render, before React has finished the client render.
        document.resetAfterSSR();
        return collection;
    }, [
        document
    ]);
    let getServerSnapshot = (0, react.useCallback)(()=>{
        // oxlint-disable-next-line react/react-compiler
        document.isSSR = true;
        return document.getCollection();
    }, [
        document
    ]);
    let collection = $42ceafc619f9c3ba$var$useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    return {
        collection: collection,
        document: document
    };
}
const $42ceafc619f9c3ba$var$SSRContext = /*#__PURE__*/ (0, react.createContext)(null);
function $42ceafc619f9c3ba$var$createCollectionNodeClass(type) {
    let NodeClass = class extends (0, BaseCollection/* CollectionNode */.Pt) {
        static{
            this.type = type;
        }
    };
    return NodeClass;
}
function $42ceafc619f9c3ba$var$useSSRCollectionNode(CollectionNodeClass, props, ref, rendered, children, render) {
    // To prevent breaking change, if CollectionNodeClass is a string, create a CollectionNodeClass using the string as the type
    if (typeof CollectionNodeClass === 'string') // oxlint-disable-next-line react/react-compiler
    CollectionNodeClass = $42ceafc619f9c3ba$var$createCollectionNodeClass(CollectionNodeClass);
    // During SSR, portals are not supported, so the collection children will be wrapped in an SSRContext.
    // Since SSR occurs only once, we assume that the elements are rendered in order and never re-render.
    // Therefore we can create elements in our collection document during render so that they are in the
    // collection by the time we need to use the collection to render to the real DOM.
    // After hydration, we switch to client rendering using the portal.
    let itemRef = (0, react.useCallback)((element)=>{
        element?.setProps(props, ref, CollectionNodeClass, rendered, render);
    }, [
        props,
        ref,
        rendered,
        render,
        CollectionNodeClass
    ]);
    let parentNode = (0, react.useContext)($42ceafc619f9c3ba$var$SSRContext);
    if (parentNode) {
        // Guard against double rendering in strict mode.
        let element = parentNode.ownerDocument.nodesByProps.get(props);
        if (!element) {
            element = parentNode.ownerDocument.createElement(CollectionNodeClass.type);
            element.setProps(props, ref, CollectionNodeClass, rendered, render);
            parentNode.appendChild(element);
            parentNode.ownerDocument.updateCollection();
            parentNode.ownerDocument.nodesByProps.set(props, element);
        }
        return children ? /*#__PURE__*/ (0, react).createElement($42ceafc619f9c3ba$var$SSRContext.Provider, {
            value: element
        }, children) : null;
    }
    // @ts-ignore
    return /*#__PURE__*/ (0, react).createElement(CollectionNodeClass.type, {
        ref: itemRef
    }, children);
}
function $42ceafc619f9c3ba$export$18af5c7a9e9b3664(CollectionNodeClass, render) {
    let Component = ({ node: node })=>render(node.props, node.props.ref, node);
    let Result = (0, react.forwardRef)((props, ref)=>{
        let focusableProps = (0, react.useContext)((0, useFocusable/* FocusableContext */.gY));
        let isShallow = (0, react.useContext)($42ceafc619f9c3ba$var$ShallowRenderContext);
        if (!isShallow) {
            if (render.length >= 3) throw new Error(render.name + ' cannot be rendered outside a collection.');
            return render(props, ref);
        }
        return $42ceafc619f9c3ba$var$useSSRCollectionNode(CollectionNodeClass, props, ref, 'children' in props ? props.children : null, null, (node)=>// Forward FocusableContext to real DOM tree so tooltips work.
            /*#__PURE__*/ (0, react).createElement((0, useFocusable/* FocusableContext */.gY).Provider, {
                value: focusableProps
            }, /*#__PURE__*/ (0, react).createElement(Component, {
                node: node
            })));
    });
    // @ts-ignore
    Result.displayName = render.name;
    return Result;
}
function $42ceafc619f9c3ba$export$e953bb1cd0f19726(CollectionNodeClass, render, useChildren = $42ceafc619f9c3ba$var$useCollectionChildren) {
    let Component = ({ node: node })=>render(node.props, node.props.ref, node);
    let Result = (0, react.forwardRef)((props, ref)=>{
        let children = useChildren(props);
        return $42ceafc619f9c3ba$var$useSSRCollectionNode(CollectionNodeClass, props, ref, null, children, (node)=>/*#__PURE__*/ (0, react).createElement(Component, {
                node: node
            })) ?? /*#__PURE__*/ (0, react).createElement((0, react).Fragment, null);
    });
    // @ts-ignore
    Result.displayName = render.name;
    return Result;
}
function $42ceafc619f9c3ba$var$useCollectionChildren(options) {
    return (0, useCachedChildren/* useCachedChildren */.p)({
        ...options,
        addIdAndValue: true
    });
}
const $42ceafc619f9c3ba$var$CollectionContext = /*#__PURE__*/ (0, react.createContext)(null);
function $42ceafc619f9c3ba$export$fb8073518f34e6ec(props) {
    let ctx = (0, react.useContext)($42ceafc619f9c3ba$var$CollectionContext);
    let dependencies = (ctx?.dependencies || []).concat(props.dependencies);
    let idScope = props.idScope ?? ctx?.idScope;
    let children = $42ceafc619f9c3ba$var$useCollectionChildren({
        ...props,
        idScope: idScope,
        dependencies: dependencies
    });
    let doc = (0, react.useContext)($42ceafc619f9c3ba$var$CollectionDocumentContext);
    if (doc) children = /*#__PURE__*/ (0, react).createElement($42ceafc619f9c3ba$var$CollectionRoot, null, children);
    // Propagate dependencies and idScope to child collections.
    ctx = (0, react.useMemo)(()=>({
            dependencies: // oxlint-disable-next-line react-hooks/exhaustive-deps
            dependencies,
            idScope: idScope
        }), // eslint-disable-next-line react-hooks/exhaustive-deps
    // oxlint-disable-next-line react/react-compiler, react-hooks/exhaustive-deps
    [
        idScope,
        ...dependencies
    ]);
    return /*#__PURE__*/ (0, react).createElement($42ceafc619f9c3ba$var$CollectionContext.Provider, {
        value: ctx
    }, children);
}
function $42ceafc619f9c3ba$var$CollectionRoot({ children: children }) {
    let doc = (0, react.useContext)($42ceafc619f9c3ba$var$CollectionDocumentContext);
    let wrappedChildren = (0, react.useMemo)(()=>/*#__PURE__*/ (0, react).createElement($42ceafc619f9c3ba$var$CollectionDocumentContext.Provider, {
            value: null
        }, /*#__PURE__*/ (0, react).createElement($42ceafc619f9c3ba$var$ShallowRenderContext.Provider, {
            value: true
        }, children)), [
        children
    ]);
    // During SSR, we render the content directly, and append nodes to the document during render.
    // The collection children return null so that nothing is actually rendered into the HTML.
    return (0, SSRProvider/* useIsSSR */.wR)() ? /*#__PURE__*/ (0, react).createElement($42ceafc619f9c3ba$var$SSRContext.Provider, {
        value: doc
    }, wrappedChildren) : /*#__PURE__*/ (0, react_dom.createPortal)(wrappedChildren, doc);
}



//# sourceMappingURL=CollectionBuilder.mjs.map


/***/ },

/***/ 15855
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ $a80bd3e9349588e7$export$727c8fc270210f13)
/* harmony export */ });
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
function $a80bd3e9349588e7$export$727c8fc270210f13(props) {
    let { children: children, items: items, idScope: idScope, addIdAndValue: addIdAndValue, dependencies: dependencies = [] } = props;
    // In development, invalidate when the children function updates (e.g. HMR).
    let childrenString = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=> false ? 0 : undefined, [
        children
    ]);
    // Invalidate the cache whenever dependencies change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // oxlint-disable-next-line react/react-compiler, react-hooks/exhaustive-deps
    let cache = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new WeakMap(), [
        ...dependencies,
        childrenString
    ]);
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (items && typeof children === 'function') {
            let res = [];
            for (let item of items){
                let cacheKey = $a80bd3e9349588e7$var$isWeakKey(item) ? item : null;
                let rendered = cacheKey ? cache.get(cacheKey) : null;
                if (!rendered) {
                    rendered = children(item);
                    // @ts-ignore
                    let id = rendered.props.id ?? item?.key ?? item?.id;
                    if (idScope != null && rendered.props.id == null && id != null) id = idScope + ':' + id;
                    // If no id is inferred from data, use the index as the React key.
                    // An id will be generated by the collection document.
                    let key = id ?? res.length;
                    // Note: only works if wrapped Item passes through id...
                    rendered = (0, react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(rendered, addIdAndValue ? {
                        key: key,
                        id: id,
                        value: item
                    } : {
                        key: key
                    });
                    if (cacheKey) cache.set(cacheKey, rendered);
                }
                res.push(rendered);
            }
            return res;
        } else if (typeof children !== 'function') return children;
    }, [
        children,
        items,
        cache,
        idScope,
        addIdAndValue
    ]);
}
function $a80bd3e9349588e7$var$isWeakKey(value) {
    switch(typeof value){
        case 'object':
            return value != null;
        case 'function':
        case 'symbol':
            return true;
        default:
            return false;
    }
}



//# sourceMappingURL=useCachedChildren.mjs.map


/***/ },

/***/ 93653
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ig: () => (/* binding */ $b72f3f7b3b5f42c6$export$2b35b76d2e30e129),
/* harmony export */   vX: () => (/* binding */ $b72f3f7b3b5f42c6$export$76e4e37e5339496d)
/* harmony export */ });
/* unused harmony exports getVirtuallyFocusedElement, dispatchVirtualBlur */
/* harmony import */ var _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62975);
/* harmony import */ var _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1612);





function $b72f3f7b3b5f42c6$export$76e4e37e5339496d(to) {
    let from = $b72f3f7b3b5f42c6$export$759df0d867455a91((0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .TW)(to));
    if (from !== to) {
        if (from) $b72f3f7b3b5f42c6$export$6c5dc7e81d2cc29a(from, to);
        if (to) $b72f3f7b3b5f42c6$export$2b35b76d2e30e129(to, from);
    }
}
function $b72f3f7b3b5f42c6$export$6c5dc7e81d2cc29a(from, to) {
    from.dispatchEvent(new FocusEvent('blur', {
        relatedTarget: to
    }));
    from.dispatchEvent(new FocusEvent('focusout', {
        bubbles: true,
        relatedTarget: to
    }));
}
function $b72f3f7b3b5f42c6$export$2b35b76d2e30e129(to, from) {
    to.dispatchEvent(new FocusEvent('focus', {
        relatedTarget: from
    }));
    to.dispatchEvent(new FocusEvent('focusin', {
        bubbles: true,
        relatedTarget: from
    }));
}
function $b72f3f7b3b5f42c6$export$759df0d867455a91(document) {
    let activeElement = (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getActiveElement */ .bq)(document);
    let activeDescendant = activeElement?.getAttribute('aria-activedescendant');
    if (activeDescendant) return document.getElementById(activeDescendant) || activeElement;
    return activeElement;
}



//# sourceMappingURL=virtualFocus.mjs.map


/***/ },

/***/ 15435
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ $673d46fce3e5717d$export$a16aca283550c30d)
/* harmony export */ });
/* harmony import */ var _I18nProvider_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78352);


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
let $673d46fce3e5717d$var$cache = new Map();
function $673d46fce3e5717d$export$a16aca283550c30d(options) {
    let { locale: locale } = (0, _I18nProvider_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLocale */ .Y)();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($673d46fce3e5717d$var$cache.has(cacheKey)) return $673d46fce3e5717d$var$cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    $673d46fce3e5717d$var$cache.set(cacheKey, formatter);
    return formatter;
}



//# sourceMappingURL=useCollator.mjs.map


/***/ },

/***/ 57659
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ $cf2482eff2eeeec2$export$87b761675e8eaa10),
/* harmony export */   o: () => (/* binding */ $cf2482eff2eeeec2$export$f12b703ca79dfbb1)
/* harmony export */ });
/* harmony import */ var _I18nProvider_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78352);
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62230);
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56480);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);




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


const $cf2482eff2eeeec2$var$cache = new WeakMap();
function $cf2482eff2eeeec2$var$getCachedDictionary(strings) {
    let dictionary = $cf2482eff2eeeec2$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new (0, _internationalized_string__WEBPACK_IMPORTED_MODULE_1__/* .LocalizedStringDictionary */ .B)(strings);
        $cf2482eff2eeeec2$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $cf2482eff2eeeec2$export$87b761675e8eaa10(strings, packageName) {
    return packageName && (0, _internationalized_string__WEBPACK_IMPORTED_MODULE_1__/* .LocalizedStringDictionary */ .B).getGlobalDictionaryForPackage(packageName) || $cf2482eff2eeeec2$var$getCachedDictionary(strings);
}
function $cf2482eff2eeeec2$export$f12b703ca79dfbb1(strings, packageName) {
    let { locale: locale } = (0, _I18nProvider_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLocale */ .Y)();
    let dictionary = $cf2482eff2eeeec2$export$87b761675e8eaa10(strings, packageName);
    return (0, react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>new (0, _internationalized_string__WEBPACK_IMPORTED_MODULE_2__/* .LocalizedStringFormatter */ .J)(locale, dictionary), [
        locale,
        dictionary
    ]);
}



//# sourceMappingURL=useLocalizedStringFormatter.mjs.map


/***/ },

/***/ 2864
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ $0d47b37c475c5231$export$cf75428e0b9ed1ea),
/* harmony export */   Y: () => (/* binding */ $0d47b37c475c5231$export$3351871ee4b288b8)
/* harmony export */ });
/* harmony import */ var _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47425);
/* harmony import */ var _context_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64874);
/* harmony import */ var _utils_useObjectRef_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80716);
/* harmony import */ var _utils_useSyncRef_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80428);
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




const $0d47b37c475c5231$export$3351871ee4b288b8 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_4__).forwardRef(({ children: children, ...props }, ref)=>{
    let isRegistered = (0, react__WEBPACK_IMPORTED_MODULE_4__.useRef)(false);
    let prevContext = (0, react__WEBPACK_IMPORTED_MODULE_4__.useContext)((0, _context_mjs__WEBPACK_IMPORTED_MODULE_1__/* .PressResponderContext */ .F));
    // oxlint-disable-next-line react/react-compiler
    let context = (0, _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_0__/* .mergeProps */ .v)(prevContext || {}, {
        ...props,
        register () {
            isRegistered.current = true;
            if (prevContext) prevContext.register();
        }
    });
    context.ref = (0, _utils_useObjectRef_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useObjectRef */ .U)(ref || prevContext?.ref);
    (0, _utils_useSyncRef_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useSyncRef */ .w)(prevContext, context.ref);
    (0, react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!isRegistered.current) {
            if (false) // removed by dead control flow
{}
            isRegistered.current = true; // only warn once in strict mode.
        }
    }, []);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_4__).createElement((0, _context_mjs__WEBPACK_IMPORTED_MODULE_1__/* .PressResponderContext */ .F).Provider, {
        value: context
    }, children);
});
function $0d47b37c475c5231$export$cf75428e0b9ed1ea({ children: children }) {
    let context = (0, react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>({
            register: ()=>{}
        }), []);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_4__).createElement((0, _context_mjs__WEBPACK_IMPORTED_MODULE_1__/* .PressResponderContext */ .F).Provider, {
        value: context
    }, children);
}



//# sourceMappingURL=PressResponder.mjs.map


/***/ },

/***/ 9805
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ $7b01448eaad0fe7c$export$c24ed0104d07eab9)
/* harmony export */ });
/* harmony import */ var _utils_focusWithoutScrolling_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1612);
/* harmony import */ var _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47425);
/* harmony import */ var _utils_useDescription_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67010);
/* harmony import */ var _utils_useGlobalListeners_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74876);
/* harmony import */ var _usePress_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23580);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96540);








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






const $7b01448eaad0fe7c$var$DEFAULT_THRESHOLD = 500;
function $7b01448eaad0fe7c$export$c24ed0104d07eab9(props) {
    let { isDisabled: isDisabled, pointerType: pointerType, onLongPressStart: onLongPressStart, onLongPressEnd: onLongPressEnd, onLongPress: onLongPress, threshold: threshold = $7b01448eaad0fe7c$var$DEFAULT_THRESHOLD, accessibilityDescription: accessibilityDescription } = props;
    const timeRef = (0, react__WEBPACK_IMPORTED_MODULE_6__.useRef)(undefined);
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = (0, _utils_useGlobalListeners_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useGlobalListeners */ .A)();
    let isAcceptedPointerType = (e)=>pointerType ? e.pointerType === pointerType : e.pointerType === 'mouse' || e.pointerType === 'touch';
    let { pressProps: pressProps } = (0, _usePress_mjs__WEBPACK_IMPORTED_MODULE_5__/* .usePress */ .d)({
        isDisabled: isDisabled,
        onPressStart (e) {
            e.continuePropagation();
            if (isAcceptedPointerType(e)) {
                if (onLongPressStart) onLongPressStart({
                    ...e,
                    type: 'longpressstart'
                });
                timeRef.current = setTimeout(()=>{
                    // Prevent other usePress handlers from also handling this event.
                    e.target.dispatchEvent(new PointerEvent('pointercancel', {
                        bubbles: true
                    }));
                    // Prevent default click action (e.g. opening a link) after a long press.
                    addGlobalListener(e.target, 'click', (e)=>e.preventDefault(), {
                        once: true
                    });
                    // Ensure target is focused. On touch devices, browsers typically focus on pointer up.
                    if ((0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .TW)(e.target).activeElement !== e.target) (0, _utils_focusWithoutScrolling_mjs__WEBPACK_IMPORTED_MODULE_0__/* .focusWithoutScrolling */ .e)(e.target);
                    if (onLongPress) onLongPress({
                        ...e,
                        type: 'longpress'
                    });
                    timeRef.current = undefined;
                }, threshold);
                // Prevent context menu, which may be opened on long press on touch devices
                if (e.pointerType === 'touch') addGlobalListener(e.target, 'contextmenu', (e)=>e.preventDefault(), {
                    once: true
                });
                let ownerWindow = (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .mD)(e.target);
                addGlobalListener(ownerWindow, 'pointerup', ()=>{
                    // If no contextmenu/click event is fired quickly after pointerup, remove the handler
                    // so future events outside a long press are not prevented.
                    setTimeout(()=>{
                        removeAllGlobalListeners();
                    }, 100);
                }, {
                    once: true
                });
            }
        },
        onPressEnd (e) {
            if (timeRef.current) clearTimeout(timeRef.current);
            if (onLongPressEnd && isAcceptedPointerType(e)) onLongPressEnd({
                ...e,
                type: 'longpressend'
            });
        }
    });
    let descriptionProps = (0, _utils_useDescription_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useDescription */ .I)(onLongPress && !isDisabled ? accessibilityDescription : undefined);
    return {
        longPressProps: (0, _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(pressProps, descriptionProps)
    };
}



//# sourceMappingURL=useLongPress.mjs.map


/***/ },

/***/ 67680
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ $f19b83c1486f45cc$export$dc9c12ed27dd1b49)
});

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/focusWithoutScrolling.mjs
var focusWithoutScrolling = __webpack_require__(5460);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(62975);
;// ./node_modules/react-aria/dist/private/intl/menu/ar-AE.mjs
var $50608029e06fcc45$exports = {};
$50608029e06fcc45$exports = {
    "longPressMessage": `\u{627}\u{636}\u{63A}\u{637} \u{645}\u{637}\u{648}\u{644}\u{627}\u{64B} \u{623}\u{648} \u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} Alt + \u{627}\u{644}\u{633}\u{647}\u{645} \u{644}\u{623}\u{633}\u{641}\u{644} \u{644}\u{641}\u{62A}\u{62D} \u{627}\u{644}\u{642}\u{627}\u{626}\u{645}\u{629}`
};



//# sourceMappingURL=ar-AE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/bg-BG.mjs
var $0ce6c09c3e669100$exports = {};
$0ce6c09c3e669100$exports = {
    "longPressMessage": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{43E}\u{434}\u{44A}\u{43B}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{43D}\u{43E} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Alt+ \u{441}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{43D}\u{430}\u{434}\u{43E}\u{43B}\u{443}, \u{437}\u{430} \u{434}\u{430} \u{43E}\u{442}\u{432}\u{43E}\u{440}\u{438}\u{442}\u{435} \u{43C}\u{435}\u{43D}\u{44E}\u{442}\u{43E}`
};



//# sourceMappingURL=bg-BG.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/cs-CZ.mjs
var $a9daab48d18bec17$exports = {};
$a9daab48d18bec17$exports = {
    "longPressMessage": `Dlouh\xfdm stiskem nebo stisknut\xedm kl\xe1ves Alt + \u{161}ipka dol\u{16F} otev\u{159}ete nab\xeddku`
};



//# sourceMappingURL=cs-CZ.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/da-DK.mjs
var $a7897057abd4dedc$exports = {};
$a7897057abd4dedc$exports = {
    "longPressMessage": `Langt tryk eller tryk p\xe5 Alt + pil ned for at \xe5bne menuen`
};



//# sourceMappingURL=da-DK.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/de-DE.mjs
var $a48782afe17e416a$exports = {};
$a48782afe17e416a$exports = {
    "longPressMessage": `Dr\xfccken Sie lange oder dr\xfccken Sie Alt + Nach-unten, um das Men\xfc zu \xf6ffnen`
};



//# sourceMappingURL=de-DE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/el-GR.mjs
var $b4a078a1f4803013$exports = {};
$b4a078a1f4803013$exports = {
    "longPressMessage": `\u{3A0}\u{3B9}\u{3AD}\u{3C3}\u{3C4}\u{3B5} \u{3C0}\u{3B1}\u{3C1}\u{3B1}\u{3C4}\u{3B5}\u{3C4}\u{3B1}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3AE} \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Alt + \u{3BA}\u{3AC}\u{3C4}\u{3C9} \u{3B2}\u{3AD}\u{3BB}\u{3BF}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3BF}\u{3AF}\u{3BE}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3BF} \u{3BC}\u{3B5}\u{3BD}\u{3BF}\u{3CD}`
};



//# sourceMappingURL=el-GR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/en-US.mjs
var $788d77bcaab07d29$exports = {};
$788d77bcaab07d29$exports = {
    "longPressMessage": `Long press or press Alt + ArrowDown to open menu`
};



//# sourceMappingURL=en-US.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/es-ES.mjs
var $8fc1e38f2f738334$exports = {};
$8fc1e38f2f738334$exports = {
    "longPressMessage": `Mantenga pulsado o pulse Alt + flecha abajo para abrir el men\xfa`
};



//# sourceMappingURL=es-ES.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/et-EE.mjs
var $0c79cbd512713d63$exports = {};
$0c79cbd512713d63$exports = {
    "longPressMessage": `Men\xfc\xfc avamiseks vajutage pikalt v\xf5i vajutage klahve Alt + allanool`
};



//# sourceMappingURL=et-EE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/fi-FI.mjs
var $6e578cb07f661d0f$exports = {};
$6e578cb07f661d0f$exports = {
    "longPressMessage": `Avaa valikko painamalla pohjassa tai n\xe4pp\xe4inyhdistelm\xe4ll\xe4 Alt + Alanuoli`
};



//# sourceMappingURL=fi-FI.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/fr-FR.mjs
var $44177fdbbad1a686$exports = {};
$44177fdbbad1a686$exports = {
    "longPressMessage": `Appuyez de mani\xe8re prolong\xe9e ou appuyez sur Alt\xa0+\xa0Fl\xe8che vers le bas pour ouvrir le menu.`
};



//# sourceMappingURL=fr-FR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/he-IL.mjs
var $990dfee85fc94a6a$exports = {};
$990dfee85fc94a6a$exports = {
    "longPressMessage": `\u{5DC}\u{5D7}\u{5E5} \u{5DC}\u{5D7}\u{5D9}\u{5E6}\u{5D4} \u{5D0}\u{5E8}\u{5D5}\u{5DB}\u{5D4} \u{5D0}\u{5D5} \u{5D4}\u{5E7}\u{5E9} Alt + ArrowDown \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E4}\u{5EA}\u{5D5}\u{5D7} \u{5D0}\u{5EA} \u{5D4}\u{5EA}\u{5E4}\u{5E8}\u{5D9}\u{5D8}`
};



//# sourceMappingURL=he-IL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/hr-HR.mjs
var $10d7c2a1d55e74cf$exports = {};
$10d7c2a1d55e74cf$exports = {
    "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika`
};



//# sourceMappingURL=hr-HR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/hu-HU.mjs
var $d3182189bfd1bf3b$exports = {};
$d3182189bfd1bf3b$exports = {
    "longPressMessage": `Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny\xedl gombot a men\xfc megnyit\xe1s\xe1hoz`
};



//# sourceMappingURL=hu-HU.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/it-IT.mjs
var $fbfac0c9f82929a4$exports = {};
$fbfac0c9f82929a4$exports = {
    "longPressMessage": `Premi a lungo o premi Alt + Freccia gi\xf9 per aprire il menu`
};



//# sourceMappingURL=it-IT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/ja-JP.mjs
var $18b8fa80cdc50d05$exports = {};
$18b8fa80cdc50d05$exports = {
    "longPressMessage": `\u{9577}\u{62BC}\u{3057}\u{307E}\u{305F}\u{306F} Alt+\u{4E0B}\u{77E2}\u{5370}\u{30AD}\u{30FC}\u{3067}\u{30E1}\u{30CB}\u{30E5}\u{30FC}\u{3092}\u{958B}\u{304F}`
};



//# sourceMappingURL=ja-JP.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/ko-KR.mjs
var $a8f49035a51fdb32$exports = {};
$a8f49035a51fdb32$exports = {
    "longPressMessage": `\u{AE38}\u{AC8C} \u{B204}\u{B974}\u{AC70}\u{B098} Alt + \u{C544}\u{B798}\u{CABD} \u{D654}\u{C0B4}\u{D45C}\u{B97C} \u{B20C}\u{B7EC} \u{BA54}\u{B274} \u{C5F4}\u{AE30}`
};



//# sourceMappingURL=ko-KR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/lt-LT.mjs
var $06546dd9bbf0f542$exports = {};
$06546dd9bbf0f542$exports = {
    "longPressMessage": `Nor\u{117}dami atidaryti meniu, nuspaud\u{119} palaikykite arba paspauskite \u{201E}Alt + ArrowDown\u{201C}.`
};



//# sourceMappingURL=lt-LT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/lv-LV.mjs
var $9a7348e0caa19677$exports = {};
$9a7348e0caa19677$exports = {
    "longPressMessage": `Lai atv\u{113}rtu izv\u{113}lni, turiet nospiestu vai nospiediet tausti\u{146}u kombin\u{101}ciju Alt + lejupv\u{113}rst\u{101} bulti\u{146}a`
};



//# sourceMappingURL=lv-LV.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/nb-NO.mjs
var $e16c55913ae3971e$exports = {};
$e16c55913ae3971e$exports = {
    "longPressMessage": `Langt trykk eller trykk Alt + PilNed for \xe5 \xe5pne menyen`
};



//# sourceMappingURL=nb-NO.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/nl-NL.mjs
var $d92f6e92c51016e2$exports = {};
$d92f6e92c51016e2$exports = {
    "longPressMessage": `Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen`
};



//# sourceMappingURL=nl-NL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/pl-PL.mjs
var $5475104f6d631fa8$exports = {};
$5475104f6d631fa8$exports = {
    "longPressMessage": `Naci\u{15B}nij i przytrzymaj lub naci\u{15B}nij klawisze Alt + Strza\u{142}ka w d\xf3\u{142}, aby otworzy\u{107} menu`
};



//# sourceMappingURL=pl-PL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/pt-BR.mjs
var $e97402d4778a500f$exports = {};
$e97402d4778a500f$exports = {
    "longPressMessage": `Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu`
};



//# sourceMappingURL=pt-BR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/pt-PT.mjs
var $8ffff1f90e4445ad$exports = {};
$8ffff1f90e4445ad$exports = {
    "longPressMessage": `Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu`
};



//# sourceMappingURL=pt-PT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/ro-RO.mjs
var $3b65c017e2338742$exports = {};
$3b65c017e2338742$exports = {
    "longPressMessage": `Ap\u{103}sa\u{21B}i lung sau ap\u{103}sa\u{21B}i pe Alt + s\u{103}geat\u{103} \xeen jos pentru a deschide meniul`
};



//# sourceMappingURL=ro-RO.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/ru-RU.mjs
var $5dc65e8d5bb20c3e$exports = {};
$5dc65e8d5bb20c3e$exports = {
    "longPressMessage": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{438} \u{443}\u{434}\u{435}\u{440}\u{436}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} Alt + \u{421}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{44C} \u{43C}\u{435}\u{43D}\u{44E}`
};



//# sourceMappingURL=ru-RU.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/sk-SK.mjs
var $754ea877f466b46b$exports = {};
$754ea877f466b46b$exports = {
    "longPressMessage": `Ponuku otvor\xedte dlh\xfdm stla\u{10D}en\xedm alebo stla\u{10D}en\xedm kl\xe1vesu Alt + kl\xe1vesu so \u{161}\xedpkou nadol`
};



//# sourceMappingURL=sk-SK.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/sl-SI.mjs
var $371167f8ab40ff4e$exports = {};
$371167f8ab40ff4e$exports = {
    "longPressMessage": `Za odprtje menija pritisnite in dr\u{17E}ite gumb ali pritisnite Alt+pu\u{161}\u{10D}ica navzdol`
};



//# sourceMappingURL=sl-SI.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/sr-SP.mjs
var $000e668e4e84b579$exports = {};
$000e668e4e84b579$exports = {
    "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni`
};



//# sourceMappingURL=sr-SP.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/sv-SE.mjs
var $fc088db6dd370743$exports = {};
$fc088db6dd370743$exports = {
    "longPressMessage": `H\xe5ll nedtryckt eller tryck p\xe5 Alt + pil ned\xe5t f\xf6r att \xf6ppna menyn`
};



//# sourceMappingURL=sv-SE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/tr-TR.mjs
var $eef33ec9131405b8$exports = {};
$eef33ec9131405b8$exports = {
    "longPressMessage": `Men\xfcy\xfc a\xe7mak i\xe7in uzun bas\u{131}n veya Alt + A\u{15F}a\u{11F}\u{131} Ok tu\u{15F}una bas\u{131}n`
};



//# sourceMappingURL=tr-TR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/uk-UA.mjs
var $17ca43fe2ce333c0$exports = {};
$17ca43fe2ce333c0$exports = {
    "longPressMessage": `\u{414}\u{43E}\u{432}\u{433}\u{43E} \u{430}\u{431}\u{43E} \u{437}\u{432}\u{438}\u{447}\u{430}\u{439}\u{43D}\u{43E} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{43A}\u{43E}\u{43C}\u{431}\u{456}\u{43D}\u{430}\u{446}\u{456}\u{44E} \u{43A}\u{43B}\u{430}\u{432}\u{456}\u{448} Alt \u{456} \u{441}\u{442}\u{440}\u{456}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{449}\u{43E}\u{431} \u{432}\u{456}\u{434}\u{43A}\u{440}\u{438}\u{442}\u{438} \u{43C}\u{435}\u{43D}\u{44E}`
};



//# sourceMappingURL=uk-UA.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/zh-CN.mjs
var $ce0bee578e53860c$exports = {};
$ce0bee578e53860c$exports = {
    "longPressMessage": `\u{957F}\u{6309}\u{6216}\u{6309} Alt + \u{5411}\u{4E0B}\u{65B9}\u{5411}\u{952E}\u{4EE5}\u{6253}\u{5F00}\u{83DC}\u{5355}`
};



//# sourceMappingURL=zh-CN.mjs.map

;// ./node_modules/react-aria/dist/private/intl/menu/zh-TW.mjs
var $a146d231f9c4bbf9$exports = {};
$a146d231f9c4bbf9$exports = {
    "longPressMessage": `\u{9577}\u{6309}\u{6216}\u{6309} Alt+\u{5411}\u{4E0B}\u{9375}\u{4EE5}\u{958B}\u{555F}\u{529F}\u{80FD}\u{8868}`
};



//# sourceMappingURL=zh-TW.mjs.map

;// ./node_modules/react-aria/dist/private/menu/intlStrings.mjs



































var $bdff4dd8fb5956de$exports = {};


































$bdff4dd8fb5956de$exports = {
    "ar-AE": $50608029e06fcc45$exports,
    "bg-BG": $0ce6c09c3e669100$exports,
    "cs-CZ": $a9daab48d18bec17$exports,
    "da-DK": $a7897057abd4dedc$exports,
    "de-DE": $a48782afe17e416a$exports,
    "el-GR": $b4a078a1f4803013$exports,
    "en-US": $788d77bcaab07d29$exports,
    "es-ES": $8fc1e38f2f738334$exports,
    "et-EE": $0c79cbd512713d63$exports,
    "fi-FI": $6e578cb07f661d0f$exports,
    "fr-FR": $44177fdbbad1a686$exports,
    "he-IL": $990dfee85fc94a6a$exports,
    "hr-HR": $10d7c2a1d55e74cf$exports,
    "hu-HU": $d3182189bfd1bf3b$exports,
    "it-IT": $fbfac0c9f82929a4$exports,
    "ja-JP": $18b8fa80cdc50d05$exports,
    "ko-KR": $a8f49035a51fdb32$exports,
    "lt-LT": $06546dd9bbf0f542$exports,
    "lv-LV": $9a7348e0caa19677$exports,
    "nb-NO": $e16c55913ae3971e$exports,
    "nl-NL": $d92f6e92c51016e2$exports,
    "pl-PL": $5475104f6d631fa8$exports,
    "pt-BR": $e97402d4778a500f$exports,
    "pt-PT": $8ffff1f90e4445ad$exports,
    "ro-RO": $3b65c017e2338742$exports,
    "ru-RU": $5dc65e8d5bb20c3e$exports,
    "sk-SK": $754ea877f466b46b$exports,
    "sl-SI": $371167f8ab40ff4e$exports,
    "sr-SP": $000e668e4e84b579$exports,
    "sv-SE": $fc088db6dd370743$exports,
    "tr-TR": $eef33ec9131405b8$exports,
    "uk-UA": $17ca43fe2ce333c0$exports,
    "zh-CN": $ce0bee578e53860c$exports,
    "zh-TW": $a146d231f9c4bbf9$exports
};



//# sourceMappingURL=intlStrings.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/platform.mjs
var platform = __webpack_require__(87082);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useLongPress.mjs
var useLongPress = __webpack_require__(9805);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria/dist/private/interactions/useContextMenu.mjs





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



function $00dce70c89c7306c$export$2464060fb1e12fa6(props) {
    // How to trigger context menu events on various platforms:
    // - macOS
    //   - Mouse right click
    //   - Control + click
    //   - Control + Enter (does not fire the contextmenu event in certain WebKit / Chrome versions - https://bugs.webkit.org/show_bug.cgi?id=302049, https://issues.chromium.org/issues/369897039)
    //   - Control + Option + Shift + M with VoiceOver
    // - Windows / Linux
    //   - Mouse right click
    //   - Shift + F10
    //   - Long press on a touch screen
    // - iOS
    //   - Long press (does not fire contextmenu event - https://bugs.webkit.org/show_bug.cgi?id=213953)
    // - Android
    //   - Long press
    let { onContextMenu: onContextMenu } = props;
    let firedContextMenuEvent = (0, react.useRef)(false);
    // iOS does not fire the contextmenu event, so use long press.
    let { longPressProps: longPressProps } = (0, useLongPress/* useLongPress */.H)({
        onLongPressStart () {
            firedContextMenuEvent.current = false;
        },
        onLongPress (e) {
            if (!firedContextMenuEvent.current) onContextMenu?.({
                target: e.target,
                x: e.x,
                y: e.y
            });
            else firedContextMenuEvent.current = false;
        }
    });
    if (!onContextMenu) return {
        contextMenuProps: {}
    };
    return {
        // oxlint-disable-next-line react/react-compiler - it says we are reading a ref during render but that's not true...
        contextMenuProps: (0, mergeProps/* mergeProps */.v)((0, platform/* isIOS */.un)() ? longPressProps : {}, {
            onContextMenu (e) {
                e.stopPropagation();
                e.preventDefault();
                firedContextMenuEvent.current = true;
                let rect = e.currentTarget.getBoundingClientRect();
                onContextMenu({
                    target: e.currentTarget,
                    x: e.clientX - rect.x,
                    y: e.clientY - rect.y
                });
            },
            onKeyDown (e) {
                // macOS has a default keyboard shortcut to show the contextmenu: Ctrl + Enter.
                // However, some versions of Safari and Chrome do not trigger the contextmenu event.
                // Fixed in https://github.com/WebKit/WebKit/pull/62278 (currently in WekKit nightly) and
                // https://github.com/chromium/chromium/commit/268c876c191cd4712c2d1043aab9760fb71d9be5 (Chrome 147).
                // Remove this workaround once those are broadly available.
                // An additional bug still occurs when the target has a border-radius: https://bugs.webkit.org/show_bug.cgi?id=317496
                if ((0, platform/* isMac */.cX)()) {
                    if (e.ctrlKey && e.key === 'Enter') {
                        firedContextMenuEvent.current = false;
                        let target = e.currentTarget;
                        e.stopPropagation();
                        setTimeout(()=>{
                            if (!firedContextMenuEvent.current) {
                                let rect = target.getBoundingClientRect();
                                onContextMenu({
                                    target: target,
                                    x: rect.width / 2,
                                    y: rect.height / 2
                                });
                            } else firedContextMenuEvent.current = false;
                        }, 10);
                    }
                }
            }
        })
    };
}



//# sourceMappingURL=useContextMenu.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useId.mjs + 1 modules
var useId = __webpack_require__(19633);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useKeyboard.mjs + 2 modules
var useKeyboard = __webpack_require__(91357);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(57659);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/overlays/useOverlayTrigger.mjs
var useOverlayTrigger = __webpack_require__(55646);
;// ./node_modules/react-aria/dist/private/menu/useMenuTrigger.mjs












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









function $f19b83c1486f45cc$export$dc9c12ed27dd1b49(props, state, ref) {
    let { type: type = 'menu', isDisabled: isDisabled, trigger: trigger = 'press' } = props;
    let menuTriggerId = (0, useId/* useId */.Bi)();
    let { triggerProps: triggerProps, overlayProps: overlayProps } = (0, useOverlayTrigger/* useOverlayTrigger */.o)({
        type: type
    }, state, ref);
    let open = (shouldOpen, e, focusStrategy = 'first')=>{
        if (!shouldOpen || e.isDefaultPrevented()) return false;
        state.toggle(focusStrategy);
    };
    // React puts listeners on the same root, so even if propagation was stopped, immediate propagation is still possible.
    // useTypeSelect will handle the spacebar first if it's running, so we don't want to open if it's handled it already.
    // We use isDefaultPrevented() instead of isPropagationStopped() because createEventHandler stops propagation by default.
    // And default prevented means that the event was handled by something else (typeahead), so we don't want to open the menu.
    let { keyboardProps: keyboardProps } = (0, useKeyboard/* useKeyboard */.d)({
        isDisabled: isDisabled,
        shortcuts: {
            Enter: (e)=>{
                return open(trigger !== 'longPress', e, 'first');
            },
            ' ': (e)=>{
                return open(trigger !== 'longPress', e, 'first');
            },
            ArrowDown: (e)=>{
                return open(trigger !== 'longPress', e, 'first');
            },
            ArrowUp: (e)=>{
                return open(trigger !== 'longPress', e, 'last');
            },
            'Alt+Enter': (e)=>{
                return open(trigger === 'longPress', e, 'first');
            },
            'Alt+ ': (e)=>{
                return open(trigger === 'longPress', e, 'first');
            },
            // Alt+Arrow* must open for both trigger modes: for `press` it matches the same `e.key` cases as
            // plain Arrow*; for `longPress`, plain arrows are ignored elsewhere and Alt+Arrow is the opener
            // (see legacy `if (trigger === 'longPress' && !e.altKey) return` before the ArrowDown/Up switch).
            'Alt+ArrowDown': (e)=>{
                return open(true, e, 'first');
            },
            'Alt+ArrowUp': (e)=>{
                return open(true, e, 'last');
            }
        }
    });
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault($bdff4dd8fb5956de$exports))), '@react-aria/menu');
    let { longPressProps: longPressProps } = (0, useLongPress/* useLongPress */.H)({
        isDisabled: isDisabled || trigger !== 'longPress',
        accessibilityDescription: stringFormatter.format('longPressMessage'),
        onLongPressStart () {
            state.close();
        },
        onLongPress () {
            state.open('first');
        }
    });
    let pressProps = {
        preventFocusOnPress: true,
        onPressStart (e) {
            // For consistency with native, open the menu on mouse/key down, but touch up.
            if (e.pointerType !== 'touch' && e.pointerType !== 'keyboard' && !isDisabled) {
                // Ensure trigger has focus before opening the menu so it can be restored by FocusScope on close.
                (0, focusWithoutScrolling/* focusWithoutScrolling */.e)(e.target);
                // If opened with a screen reader, auto focus the first item.
                // Otherwise, the menu itself will be focused.
                state.open(e.pointerType === 'virtual' ? 'first' : null);
            }
        },
        onPress (e) {
            if (e.pointerType === 'touch' && !isDisabled) {
                // Ensure trigger has focus before opening the menu so it can be restored by FocusScope on close.
                (0, focusWithoutScrolling/* focusWithoutScrolling */.e)(e.target);
                state.toggle();
            }
        }
    };
    // omit onPress from triggerProps since we override it above.
    // oxlint-disable-next-line react/react-compiler
    delete triggerProps.onPress;
    let { contextMenuProps: contextMenuProps } = (0, $00dce70c89c7306c$export$2464060fb1e12fa6)({
        onContextMenu (e) {
            // This is not a DOM event, so the linter is incorrect.
            // eslint-disable-next-line rsp-rules/safe-event-target
            let rect = e.target.getBoundingClientRect();
            state.setPoint({
                x: rect.x + e.x,
                y: rect.y + e.y
            });
            state.open();
        }
    });
    (0, react.useEffect)(()=>{
        // Close context menus when right clicking outside. The browser's context menu will appear instead.
        if (state.isOpen && trigger === 'contextMenu') {
            let onContextMenu = (e)=>{
                // Checking if the target is the body works because everything outside the menu is inert.
                if ((e.button === 2 || e.button === 0 && e.ctrlKey === true) && (0, DOMFunctions/* getEventTarget */.wt)(e) === document.body) state.close();
            };
            document.addEventListener('mousedown', onContextMenu);
            return ()=>document.removeEventListener('mousedown', onContextMenu);
        }
    }, [
        state,
        trigger
    ]);
    let interactionProps;
    if (trigger === 'press') interactionProps = {
        ...pressProps,
        ...keyboardProps
    };
    else if (trigger === 'longPress') interactionProps = {
        ...longPressProps,
        ...keyboardProps
    };
    else if (trigger === 'contextMenu') {
        interactionProps = contextMenuProps;
        // Remove aria-haspopup and associated attributes from context menu triggers.
        // aria-haspopup indicates that the trigger opens a menu on activation (i.e. click/Enter),
        // which is not the case for context menus, so this would lead to confusing announcements.
        // Context menus are equally discoverable (or not) by sighted and non-sighted users,
        // so we don't need a screen reader specific announcement.
        // See https://github.com/w3c/aria/issues/1971 for further discussion.
        let { 'aria-haspopup': _a, 'aria-expanded': _b, 'aria-controls': _c, ...rest } = triggerProps;
        triggerProps = rest;
    }
    return {
        // @ts-ignore - TODO we pass out both DOMAttributes AND AriaButtonProps, but useButton will discard the longPress event handlers, it's only through PressResponder magic that this works for RSP and RAC. it does not work in aria examples
        menuTriggerProps: {
            ...triggerProps,
            ...interactionProps,
            id: menuTriggerId
        },
        menuProps: {
            ...overlayProps,
            'aria-labelledby': menuTriggerId,
            autoFocus: state.focusStrategy || true,
            onClose: state.close
        }
    };
}



//# sourceMappingURL=useMenuTrigger.mjs.map


/***/ },

/***/ 85328
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* binding */ $081058010ef8962e$export$2317d149ed6f78c4)
});

;// ./node_modules/react-aria/dist/private/intl/overlays/ar-AE.mjs
var $e5024b484f7c3e21$exports = {};
$e5024b484f7c3e21$exports = {
    "dismiss": `\u{62A}\u{62C}\u{627}\u{647}\u{644}`
};



//# sourceMappingURL=ar-AE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/bg-BG.mjs
var $0c4209a7da92851c$exports = {};
$0c4209a7da92851c$exports = {
    "dismiss": `\u{41E}\u{442}\u{445}\u{432}\u{44A}\u{440}\u{43B}\u{44F}\u{43D}\u{435}`
};



//# sourceMappingURL=bg-BG.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/cs-CZ.mjs
var $75fa0397632d287b$exports = {};
$75fa0397632d287b$exports = {
    "dismiss": `Odstranit`
};



//# sourceMappingURL=cs-CZ.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/da-DK.mjs
var $3fc6e6880cad247e$exports = {};
$3fc6e6880cad247e$exports = {
    "dismiss": `Luk`
};



//# sourceMappingURL=da-DK.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/de-DE.mjs
var $5f637eb0c91d0f64$exports = {};
$5f637eb0c91d0f64$exports = {
    "dismiss": `Schlie\xdfen`
};



//# sourceMappingURL=de-DE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/el-GR.mjs
var $5a0b3a154dcf111b$exports = {};
$5a0b3a154dcf111b$exports = {
    "dismiss": `\u{391}\u{3C0}\u{3CC}\u{3C1}\u{3C1}\u{3B9}\u{3C8}\u{3B7}`
};



//# sourceMappingURL=el-GR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/en-US.mjs
var $ea518f18e6f13288$exports = {};
$ea518f18e6f13288$exports = {
    "dismiss": `Dismiss`
};



//# sourceMappingURL=en-US.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/es-ES.mjs
var $3bf3cb0ce48a8078$exports = {};
$3bf3cb0ce48a8078$exports = {
    "dismiss": `Descartar`
};



//# sourceMappingURL=es-ES.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/et-EE.mjs
var $a416146243e75233$exports = {};
$a416146243e75233$exports = {
    "dismiss": `L\xf5peta`
};



//# sourceMappingURL=et-EE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/fi-FI.mjs
var $2872659e6c428111$exports = {};
$2872659e6c428111$exports = {
    "dismiss": `Hylk\xe4\xe4`
};



//# sourceMappingURL=fi-FI.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/fr-FR.mjs
var $657a7a1f03941145$exports = {};
$657a7a1f03941145$exports = {
    "dismiss": `Rejeter`
};



//# sourceMappingURL=fr-FR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/he-IL.mjs
var $9f18aee5ddbe5e0f$exports = {};
$9f18aee5ddbe5e0f$exports = {
    "dismiss": `\u{5D4}\u{5EA}\u{5E2}\u{5DC}\u{5DD}`
};



//# sourceMappingURL=he-IL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/hr-HR.mjs
var $e2e63adb0c1f3db6$exports = {};
$e2e63adb0c1f3db6$exports = {
    "dismiss": `Odbaci`
};



//# sourceMappingURL=hr-HR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/hu-HU.mjs
var $46fbd53e8bc70315$exports = {};
$46fbd53e8bc70315$exports = {
    "dismiss": `Elutas\xedt\xe1s`
};



//# sourceMappingURL=hu-HU.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/it-IT.mjs
var $47234f3018c55486$exports = {};
$47234f3018c55486$exports = {
    "dismiss": `Ignora`
};



//# sourceMappingURL=it-IT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/ja-JP.mjs
var $0dfacfad01736641$exports = {};
$0dfacfad01736641$exports = {
    "dismiss": `\u{9589}\u{3058}\u{308B}`
};



//# sourceMappingURL=ja-JP.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/ko-KR.mjs
var $a9056b50f6fbb1ef$exports = {};
$a9056b50f6fbb1ef$exports = {
    "dismiss": `\u{BB34}\u{C2DC}`
};



//# sourceMappingURL=ko-KR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/lt-LT.mjs
var $217b78056fce917f$exports = {};
$217b78056fce917f$exports = {
    "dismiss": `Atmesti`
};



//# sourceMappingURL=lt-LT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/lv-LV.mjs
var $c32f8c2b8956f20a$exports = {};
$c32f8c2b8956f20a$exports = {
    "dismiss": `Ner\u{101}d\u{12B}t`
};



//# sourceMappingURL=lv-LV.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/nb-NO.mjs
var $f65392426e2dae6a$exports = {};
$f65392426e2dae6a$exports = {
    "dismiss": `Lukk`
};



//# sourceMappingURL=nb-NO.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/nl-NL.mjs
var $1d0fa5f3cc68e5b0$exports = {};
$1d0fa5f3cc68e5b0$exports = {
    "dismiss": `Negeren`
};



//# sourceMappingURL=nl-NL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/pl-PL.mjs
var $ff8aa6518e51f809$exports = {};
$ff8aa6518e51f809$exports = {
    "dismiss": `Zignoruj`
};



//# sourceMappingURL=pl-PL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/pt-BR.mjs
var $fe3a4eb3eebfb0a2$exports = {};
$fe3a4eb3eebfb0a2$exports = {
    "dismiss": `Descartar`
};



//# sourceMappingURL=pt-BR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/pt-PT.mjs
var $f692c6bcabd26695$exports = {};
$f692c6bcabd26695$exports = {
    "dismiss": `Dispensar`
};



//# sourceMappingURL=pt-PT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/ro-RO.mjs
var $627fbb16c92fb654$exports = {};
$627fbb16c92fb654$exports = {
    "dismiss": `Revocare`
};



//# sourceMappingURL=ro-RO.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/ru-RU.mjs
var $2c9c1dfc72c7bac2$exports = {};
$2c9c1dfc72c7bac2$exports = {
    "dismiss": `\u{41F}\u{440}\u{43E}\u{43F}\u{443}\u{441}\u{442}\u{438}\u{442}\u{44C}`
};



//# sourceMappingURL=ru-RU.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/sk-SK.mjs
var $7e7ece760f897013$exports = {};
$7e7ece760f897013$exports = {
    "dismiss": `Zru\u{161}i\u{165}`
};



//# sourceMappingURL=sk-SK.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/sl-SI.mjs
var $1e894e47be1bf217$exports = {};
$1e894e47be1bf217$exports = {
    "dismiss": `Opusti`
};



//# sourceMappingURL=sl-SI.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/sr-SP.mjs
var $f4ce49adf6ef095f$exports = {};
$f4ce49adf6ef095f$exports = {
    "dismiss": `Odbaci`
};



//# sourceMappingURL=sr-SP.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/sv-SE.mjs
var $7c9dc206185355b5$exports = {};
$7c9dc206185355b5$exports = {
    "dismiss": `Avvisa`
};



//# sourceMappingURL=sv-SE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/tr-TR.mjs
var $c288097c5ef4ae98$exports = {};
$c288097c5ef4ae98$exports = {
    "dismiss": `Kapat`
};



//# sourceMappingURL=tr-TR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/uk-UA.mjs
var $d5863f94ad4c3f07$exports = {};
$d5863f94ad4c3f07$exports = {
    "dismiss": `\u{421}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}`
};



//# sourceMappingURL=uk-UA.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/zh-CN.mjs
var $34a6eb7890264192$exports = {};
$34a6eb7890264192$exports = {
    "dismiss": `\u{53D6}\u{6D88}`
};



//# sourceMappingURL=zh-CN.mjs.map

;// ./node_modules/react-aria/dist/private/intl/overlays/zh-TW.mjs
var $79ae244e9d286cb7$exports = {};
$79ae244e9d286cb7$exports = {
    "dismiss": `\u{95DC}\u{9589}`
};



//# sourceMappingURL=zh-TW.mjs.map

;// ./node_modules/react-aria/dist/private/overlays/intlStrings.mjs



































var $8ad4f9eb0c0f6434$exports = {};


































$8ad4f9eb0c0f6434$exports = {
    "ar-AE": $e5024b484f7c3e21$exports,
    "bg-BG": $0c4209a7da92851c$exports,
    "cs-CZ": $75fa0397632d287b$exports,
    "da-DK": $3fc6e6880cad247e$exports,
    "de-DE": $5f637eb0c91d0f64$exports,
    "el-GR": $5a0b3a154dcf111b$exports,
    "en-US": $ea518f18e6f13288$exports,
    "es-ES": $3bf3cb0ce48a8078$exports,
    "et-EE": $a416146243e75233$exports,
    "fi-FI": $2872659e6c428111$exports,
    "fr-FR": $657a7a1f03941145$exports,
    "he-IL": $9f18aee5ddbe5e0f$exports,
    "hr-HR": $e2e63adb0c1f3db6$exports,
    "hu-HU": $46fbd53e8bc70315$exports,
    "it-IT": $47234f3018c55486$exports,
    "ja-JP": $0dfacfad01736641$exports,
    "ko-KR": $a9056b50f6fbb1ef$exports,
    "lt-LT": $217b78056fce917f$exports,
    "lv-LV": $c32f8c2b8956f20a$exports,
    "nb-NO": $f65392426e2dae6a$exports,
    "nl-NL": $1d0fa5f3cc68e5b0$exports,
    "pl-PL": $ff8aa6518e51f809$exports,
    "pt-BR": $fe3a4eb3eebfb0a2$exports,
    "pt-PT": $f692c6bcabd26695$exports,
    "ro-RO": $627fbb16c92fb654$exports,
    "ru-RU": $2c9c1dfc72c7bac2$exports,
    "sk-SK": $7e7ece760f897013$exports,
    "sl-SI": $1e894e47be1bf217$exports,
    "sr-SP": $f4ce49adf6ef095f$exports,
    "sv-SE": $7c9dc206185355b5$exports,
    "tr-TR": $c288097c5ef4ae98$exports,
    "uk-UA": $d5863f94ad4c3f07$exports,
    "zh-CN": $34a6eb7890264192$exports,
    "zh-TW": $79ae244e9d286cb7$exports
};



//# sourceMappingURL=intlStrings.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useLabels.mjs
var useLabels = __webpack_require__(72765);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(57659);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(81013);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria/dist/private/overlays/DismissButton.mjs







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




function $081058010ef8962e$export$2317d149ed6f78c4(props) {
    let { onDismiss: onDismiss, ...otherProps } = props;
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault($8ad4f9eb0c0f6434$exports))), '@react-aria/overlays');
    let labels = (0, useLabels/* useLabels */.b)(otherProps, stringFormatter.format('dismiss'));
    let onClick = ()=>{
        if (onDismiss) onDismiss();
    };
    return /*#__PURE__*/ (0, react).createElement((0, VisuallyHidden/* VisuallyHidden */.s), null, /*#__PURE__*/ (0, react).createElement("button", {
        ...labels,
        tabIndex: -1,
        onClick: onClick,
        style: {
            width: 1,
            height: 1
        }
    }));
}



//# sourceMappingURL=DismissButton.mjs.map


/***/ },

/***/ 33463
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Se: () => (/* binding */ $d7a937236970dc7f$export$14c98a7594375490),
/* harmony export */   hJ: () => (/* binding */ $d7a937236970dc7f$export$c6fdb837b070b4ff)
/* harmony export */ });
/* unused harmony export OverlayContext */
/* harmony import */ var _interactions_PressResponder_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2864);
/* harmony import */ var _interactions_useFocusable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55602);
/* harmony import */ var _focus_FocusScope_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46686);
/* harmony import */ var _ssr_SSRProvider_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51601);
/* harmony import */ var _utils_useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74441);
/* harmony import */ var _PortalProvider_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14488);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96540);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40961);









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







const $d7a937236970dc7f$export$a2200b96afd16271 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_6__).createContext(null);
function $d7a937236970dc7f$export$c6fdb837b070b4ff(props) {
    let isSSR = (0, _ssr_SSRProvider_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useIsSSR */ .wR)();
    let { portalContainer: portalContainer = isSSR ? null : document.body, isExiting: isExiting } = props;
    let [contain, setContain] = (0, react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    let contextValue = (0, react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>({
            contain: contain,
            setContain: setContain
        }), [
        contain,
        setContain
    ]);
    let { getContainer: getContainer } = (0, _PortalProvider_mjs__WEBPACK_IMPORTED_MODULE_5__/* .useUNSAFE_PortalContext */ .gX)();
    if (!props.portalContainer && getContainer) portalContainer = getContainer();
    if (!portalContainer) return null;
    let contents = props.children;
    if (!props.disableFocusManagement) contents = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_6__).createElement((0, _focus_FocusScope_mjs__WEBPACK_IMPORTED_MODULE_2__/* .FocusScope */ .n1), {
        restoreFocus: true,
        contain: (props.shouldContainFocus || contain) && !isExiting
    }, contents);
    contents = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_6__).createElement($d7a937236970dc7f$export$a2200b96afd16271.Provider, {
        value: contextValue
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_6__).createElement((0, _interactions_PressResponder_mjs__WEBPACK_IMPORTED_MODULE_0__/* .ClearPressResponder */ .N), null, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_6__).createElement((0, _interactions_useFocusable_mjs__WEBPACK_IMPORTED_MODULE_1__/* .FocusableContext */ .gY).Provider, {
        value: null
    }, contents)));
    return /*#__PURE__*/ (0, react_dom__WEBPACK_IMPORTED_MODULE_7__).createPortal(contents, portalContainer);
}
function $d7a937236970dc7f$export$14c98a7594375490() {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_6__.useContext)($d7a937236970dc7f$export$a2200b96afd16271);
    let setContain = ctx?.setContain;
    (0, _utils_useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useLayoutEffect */ .N)(()=>{
        setContain?.(true);
    }, [
        setContain
    ]);
}



//# sourceMappingURL=Overlay.mjs.map


/***/ },

/***/ 61251
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ $58196c8d6a1f38fc$export$1020fa7f77e17884),
/* harmony export */   h: () => (/* binding */ $58196c8d6a1f38fc$export$1c3ebcada18427bf)
/* harmony export */ });
/* harmony import */ var _utils_shadowdom_ShadowTreeWalker_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23394);
/* harmony import */ var _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1612);
/* harmony import */ var _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62975);
/* harmony import */ var react_stately_private_flags_flags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92589);





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



const $58196c8d6a1f38fc$var$supportsInert = typeof HTMLElement !== 'undefined' && 'inert' in HTMLElement.prototype;
function $58196c8d6a1f38fc$var$isAlwaysVisibleNode(node) {
    return node.dataset.liveAnnouncer === 'true' || node.dataset.reactAriaTopLayer !== undefined;
}
// Keeps a ref count of all hidden elements. Added to when hiding an element, and
// subtracted from when showing it again. When it reaches zero, aria-hidden is removed.
let $58196c8d6a1f38fc$var$refCountMap = new WeakMap();
let $58196c8d6a1f38fc$var$observerStack = [];
function $58196c8d6a1f38fc$export$1c3ebcada18427bf(targets, options) {
    let windowObj = (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .mD)(targets?.[0]);
    let opts = options instanceof windowObj.Element ? {
        root: options
    } : options;
    let root = opts?.root ?? document.body;
    let shouldUseInert = opts?.shouldUseInert && $58196c8d6a1f38fc$var$supportsInert;
    let visibleNodes = new Set(targets);
    let hiddenNodes = new Set();
    let getHidden = (element)=>{
        return shouldUseInert && element instanceof windowObj.HTMLElement ? element.inert : element.getAttribute('aria-hidden') === 'true';
    };
    let setHidden = (element, hidden)=>{
        if (shouldUseInert && element instanceof windowObj.HTMLElement) element.inert = hidden;
        else if (hidden) element.setAttribute('aria-hidden', 'true');
        else {
            element.removeAttribute('aria-hidden');
            if (element instanceof windowObj.HTMLElement) // We only ever call setHidden with hidden = false when the nodeCount is 1 aka
            // we are trying to make the element visible to screen readers again, so remove inert as well
            element.inert = false;
        }
    };
    let shadowRootsToWatch = new Set();
    if ((0, react_stately_private_flags_flags__WEBPACK_IMPORTED_MODULE_3__/* .shadowDOM */ .Nf)()) {
        // Find all shadow roots that enclose the targets, walking up the host chain
        // until we reach the tree that `root` lives in. Each enclosing ShadowRoot
        // needs its own MutationObserver because it does not cross shadow
        // boundaries, so the observer on `root` cannot see mutations inside them.
        let boundary = root.getRootNode();
        for (let target of targets){
            let current = target.getRootNode();
            while((0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isShadowRoot */ .Ng)(current) && current !== boundary){
                shadowRootsToWatch.add(current);
                current = current.host.getRootNode();
            }
        }
    }
    let walk = (root)=>{
        // Keep live announcer and top layer elements (e.g. toasts) visible.
        for (let element of root.querySelectorAll('[data-live-announcer], [data-react-aria-top-layer]'))visibleNodes.add(element);
        let acceptNode = (node)=>{
            // Skip this node and its children if it is one of the target nodes, or a live announcer.
            // Also skip children of already hidden nodes, as aria-hidden is recursive. An exception is
            // made for elements with role="row" since VoiceOver on iOS has issues hiding elements with role="row".
            // For that case we want to hide the cells inside as well (https://bugs.webkit.org/show_bug.cgi?id=222623).
            if (hiddenNodes.has(node) || visibleNodes.has(node) || node.parentElement && hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute('role') !== 'row') return NodeFilter.FILTER_REJECT;
            // Skip this node but continue to children if one of the targets is inside the node.
            for (let target of visibleNodes){
                if ((0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_2__/* .nodeContains */ .sD)(node, target)) return NodeFilter.FILTER_SKIP;
            }
            return NodeFilter.FILTER_ACCEPT;
        };
        let walker = (0, _utils_shadowdom_ShadowTreeWalker_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createShadowTreeWalker */ .H)((0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .TW)(root), root, NodeFilter.SHOW_ELEMENT, {
            acceptNode: acceptNode
        });
        // TreeWalker does not include the root.
        let acceptRoot = acceptNode(root);
        if (acceptRoot === NodeFilter.FILTER_ACCEPT) hide(root);
        if (acceptRoot !== NodeFilter.FILTER_REJECT) {
            let node = walker.nextNode();
            while(node != null){
                hide(node);
                node = walker.nextNode();
            }
        }
    };
    let hide = (node)=>{
        let refCount = $58196c8d6a1f38fc$var$refCountMap.get(node) ?? 0;
        // If already aria-hidden, and the ref count is zero, then this element
        // was already hidden and there's nothing for us to do.
        if (getHidden(node) && refCount === 0) return;
        if (refCount === 0) setHidden(node, true);
        hiddenNodes.add(node);
        $58196c8d6a1f38fc$var$refCountMap.set(node, refCount + 1);
    };
    // If there is already a MutationObserver listening from a previous call,
    // disconnect it so the new on takes over.
    if ($58196c8d6a1f38fc$var$observerStack.length) $58196c8d6a1f38fc$var$observerStack[$58196c8d6a1f38fc$var$observerStack.length - 1].disconnect();
    walk(root);
    let observer = new MutationObserver((changes)=>{
        for (let change of changes){
            if (change.type !== 'childList') continue;
            // If the parent element of the added nodes is not within one of the targets,
            // and not already inside a hidden node, hide all of the new children.
            if (change.target.isConnected && ![
                ...visibleNodes,
                ...hiddenNodes
            ].some((node)=>(0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_2__/* .nodeContains */ .sD)(node, change.target))) for (let node of change.addedNodes){
                if ((node instanceof HTMLElement || node instanceof SVGElement) && $58196c8d6a1f38fc$var$isAlwaysVisibleNode(node)) visibleNodes.add(node);
                else if (node instanceof Element) walk(node);
            }
            if ((0, react_stately_private_flags_flags__WEBPACK_IMPORTED_MODULE_3__/* .shadowDOM */ .Nf)()) {
                // if any of the observed shadow roots were removed, stop observing them
                for (let shadowRoot of shadowRootsToWatch)if (!shadowRoot.isConnected) {
                    observer.disconnect();
                    break;
                }
            }
        }
    });
    observer.observe(root, {
        childList: true,
        subtree: true
    });
    let shadowObservers = new Set();
    if ((0, react_stately_private_flags_flags__WEBPACK_IMPORTED_MODULE_3__/* .shadowDOM */ .Nf)()) for (let shadowRoot of shadowRootsToWatch){
        // Disconnect single target instead of all https://github.com/whatwg/dom/issues/126
        let shadowObserver = new MutationObserver((changes)=>{
            for (let change of changes){
                if (change.type !== 'childList') continue;
                // If the parent element of the added nodes is not within one of the targets,
                // and not already inside a hidden node, hide all of the new children.
                if (change.target.isConnected && ![
                    ...visibleNodes,
                    ...hiddenNodes
                ].some((node)=>(0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_2__/* .nodeContains */ .sD)(node, change.target))) for (let node of change.addedNodes){
                    if ((node instanceof HTMLElement || node instanceof SVGElement) && $58196c8d6a1f38fc$var$isAlwaysVisibleNode(node)) visibleNodes.add(node);
                    else if (node instanceof Element) walk(node);
                }
                if ((0, react_stately_private_flags_flags__WEBPACK_IMPORTED_MODULE_3__/* .shadowDOM */ .Nf)()) {
                    // if any of the observed shadow roots were removed, stop observing them
                    for (let shadowRoot of shadowRootsToWatch)if (!shadowRoot.isConnected) {
                        observer.disconnect();
                        break;
                    }
                }
            }
        });
        shadowObserver.observe(shadowRoot, {
            childList: true,
            subtree: true
        });
        shadowObservers.add(shadowObserver);
    }
    let observerWrapper = {
        visibleNodes: visibleNodes,
        hiddenNodes: hiddenNodes,
        observe () {
            observer.observe(root, {
                childList: true,
                subtree: true
            });
        },
        disconnect () {
            observer.disconnect();
        }
    };
    $58196c8d6a1f38fc$var$observerStack.push(observerWrapper);
    return ()=>{
        observer.disconnect();
        if ((0, react_stately_private_flags_flags__WEBPACK_IMPORTED_MODULE_3__/* .shadowDOM */ .Nf)()) for (let shadowObserver of shadowObservers)shadowObserver.disconnect();
        for (let node of hiddenNodes){
            let count = $58196c8d6a1f38fc$var$refCountMap.get(node);
            if (count == null) continue;
            if (count === 1) {
                setHidden(node, false);
                $58196c8d6a1f38fc$var$refCountMap.delete(node);
            } else $58196c8d6a1f38fc$var$refCountMap.set(node, count - 1);
        }
        // Remove this observer from the stack, and start the previous one.
        if (observerWrapper === $58196c8d6a1f38fc$var$observerStack[$58196c8d6a1f38fc$var$observerStack.length - 1]) {
            $58196c8d6a1f38fc$var$observerStack.pop();
            if ($58196c8d6a1f38fc$var$observerStack.length) $58196c8d6a1f38fc$var$observerStack[$58196c8d6a1f38fc$var$observerStack.length - 1].observe();
        } else $58196c8d6a1f38fc$var$observerStack.splice($58196c8d6a1f38fc$var$observerStack.indexOf(observerWrapper), 1);
    };
}
function $58196c8d6a1f38fc$export$1020fa7f77e17884(element) {
    let observer = $58196c8d6a1f38fc$var$observerStack[$58196c8d6a1f38fc$var$observerStack.length - 1];
    if (observer && !observer.visibleNodes.has(element)) {
        observer.visibleNodes.add(element);
        return ()=>{
            observer.visibleNodes.delete(element);
        };
    }
}



//# sourceMappingURL=ariaHideOutside.mjs.map


/***/ },

/***/ 71314
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ $77844860df94ba23$export$ea8f71083e90600f)
});

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(62975);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/FocusScope.mjs
var FocusScope = __webpack_require__(46686);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusWithin.mjs
var useFocusWithin = __webpack_require__(75655);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/domHelpers.mjs
var domHelpers = __webpack_require__(1612);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useEffectEvent.mjs
var useEffectEvent = __webpack_require__(83265);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria/dist/private/interactions/useInteractOutside.mjs





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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions




function $e260d131964da0f9$export$872b660ac5a1ff98(props) {
    let { ref: ref, onInteractOutside: onInteractOutside, isDisabled: isDisabled, onInteractOutsideStart: onInteractOutsideStart } = props;
    let stateRef = (0, react.useRef)({
        isPointerDown: false,
        ignoreEmulatedMouseEvents: false
    });
    let onPointerDown = (0, useEffectEvent/* useEffectEvent */.J)((e)=>{
        if (onInteractOutside && $e260d131964da0f9$var$isValidEvent(e, ref)) {
            if (onInteractOutsideStart) onInteractOutsideStart(e);
            stateRef.current.isPointerDown = true;
        }
    });
    let triggerInteractOutside = (0, useEffectEvent/* useEffectEvent */.J)((e)=>{
        if (onInteractOutside) onInteractOutside(e);
    });
    (0, react.useEffect)(()=>{
        let state = stateRef.current;
        if (isDisabled) return;
        const element = ref.current;
        const documentObject = (0, domHelpers/* getOwnerDocument */.TW)(element);
        // Use pointer events if available. Otherwise, fall back to mouse and touch events.
        if (typeof PointerEvent !== 'undefined') {
            let onClick = (e)=>{
                if (state.isPointerDown && $e260d131964da0f9$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            // changing these to capture phase fixed combobox
            // Use click instead of pointerup to avoid Android Chrome issue
            // https://issues.chromium.org/issues/40732224
            documentObject.addEventListener('pointerdown', onPointerDown, true);
            documentObject.addEventListener('click', onClick, true);
            return ()=>{
                documentObject.removeEventListener('pointerdown', onPointerDown, true);
                documentObject.removeEventListener('click', onClick, true);
            };
        } else if (false) // removed by dead control flow
{}
    }, [
        ref,
        isDisabled
    ]);
}
function $e260d131964da0f9$var$isValidEvent(event, ref) {
    if (event.button > 0) return false;
    let target = (0, DOMFunctions/* getEventTarget */.wt)(event);
    if (target) {
        // if the event target is no longer in the document, ignore
        const ownerDocument = target.ownerDocument;
        if (!ownerDocument || !(0, DOMFunctions/* nodeContains */.sD)(ownerDocument.documentElement, target)) return false;
        // If the target is within a top layer element (e.g. toasts), ignore.
        if (target.closest('[data-react-aria-top-layer]')) return false;
    }
    if (!ref.current) return false;
    // When the event source is inside a Shadow DOM, event.target is just the shadow root.
    // Using event.composedPath instead means we can get the actual element inside the shadow root.
    // This only works if the shadow root is open, there is no way to detect if it is closed.
    // If the event composed path contains the ref, interaction is inside.
    return !event.composedPath().includes(ref.current);
}



//# sourceMappingURL=useInteractOutside.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useKeyboard.mjs + 2 modules
var useKeyboard = __webpack_require__(91357);
;// ./node_modules/react-aria/dist/private/overlays/useOverlay.mjs







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





const $77844860df94ba23$var$visibleOverlays = [];
function $77844860df94ba23$export$ea8f71083e90600f(props, ref) {
    let { onClose: onClose, shouldCloseOnBlur: shouldCloseOnBlur, isOpen: isOpen, isDismissable: isDismissable = false, isKeyboardDismissDisabled: isKeyboardDismissDisabled = false, shouldCloseOnInteractOutside: shouldCloseOnInteractOutside } = props;
    let lastVisibleOverlay = (0, react.useRef)(undefined);
    // Add the overlay ref to the stack of visible overlays on mount, and remove on unmount.
    (0, react.useEffect)(()=>{
        if (isOpen && !$77844860df94ba23$var$visibleOverlays.includes(ref)) {
            $77844860df94ba23$var$visibleOverlays.push(ref);
            return ()=>{
                let index = $77844860df94ba23$var$visibleOverlays.indexOf(ref);
                if (index >= 0) $77844860df94ba23$var$visibleOverlays.splice(index, 1);
            };
        }
    }, [
        isOpen,
        ref
    ]);
    // Only hide the overlay when it is the topmost visible overlay in the stack
    let onHide = ()=>{
        if ($77844860df94ba23$var$visibleOverlays[$77844860df94ba23$var$visibleOverlays.length - 1] === ref && onClose) onClose();
    };
    let onInteractOutsideStart = (e)=>{
        const topMostOverlay = $77844860df94ba23$var$visibleOverlays[$77844860df94ba23$var$visibleOverlays.length - 1];
        lastVisibleOverlay.current = topMostOverlay;
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside((0, DOMFunctions/* getEventTarget */.wt)(e))) {
            if (topMostOverlay === ref) e.stopPropagation();
        }
    };
    let onInteractOutside = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside((0, DOMFunctions/* getEventTarget */.wt)(e))) {
            if ($77844860df94ba23$var$visibleOverlays[$77844860df94ba23$var$visibleOverlays.length - 1] === ref) e.stopPropagation();
            if (lastVisibleOverlay.current === ref) onHide();
        }
        lastVisibleOverlay.current = undefined;
    };
    // Handle the escape key
    let { keyboardProps: keyboardProps } = (0, useKeyboard/* useKeyboard */.d)({
        shortcuts: {
            Escape: ()=>{
                if (!isKeyboardDismissDisabled) {
                    onHide();
                    return;
                }
                return false;
            }
        }
    });
    // Handle clicking outside the overlay to close it
    (0, $e260d131964da0f9$export$872b660ac5a1ff98)({
        ref: ref,
        onInteractOutside: isDismissable && isOpen ? onInteractOutside : undefined,
        onInteractOutsideStart: onInteractOutsideStart
    });
    let { focusWithinProps: focusWithinProps } = (0, useFocusWithin/* useFocusWithin */.R)({
        isDisabled: !shouldCloseOnBlur,
        onBlurWithin: (e)=>{
            // Do not close if relatedTarget is null, which means focus is lost to the body.
            // That can happen when switching tabs, or due to a VoiceOver/Chrome bug with Control+Option+Arrow navigation.
            // Clicking on the body to close the overlay should already be handled by useInteractOutside.
            // https://github.com/adobe/react-spectrum/issues/4130
            // https://github.com/adobe/react-spectrum/issues/4922
            //
            // If focus is moving into a child focus scope (e.g. menu inside a dialog),
            // do not close the outer overlay. At this point, the active scope should
            // still be the outer overlay, since blur events run before focus.
            if (!e.relatedTarget || (0, FocusScope/* isElementInChildOfActiveScope */.Pu)(e.relatedTarget)) return;
            if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose?.();
        }
    });
    return {
        overlayProps: {
            ...keyboardProps,
            ...focusWithinProps
        },
        underlayProps: {}
    };
}



//# sourceMappingURL=useOverlay.mjs.map


/***/ },

/***/ 55646
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ $f282e36c29c025e8$export$f9d5c8beee7d008d)
/* harmony export */ });
/* harmony import */ var _useCloseOnScroll_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42686);
/* harmony import */ var _utils_useId_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19633);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);




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


function $f282e36c29c025e8$export$f9d5c8beee7d008d(props, state, ref) {
    let { type: type } = props;
    let { isOpen: isOpen } = state;
    // Backward compatibility. Share state close function with useOverlayPosition so it can close on scroll
    // without forcing users to pass onClose.
    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (ref && ref.current) (0, _useCloseOnScroll_mjs__WEBPACK_IMPORTED_MODULE_0__/* .onCloseMap */ .a).set(ref.current, state.close);
    });
    // Aria 1.1 supports multiple values for aria-haspopup other than just menus.
    // https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
    // However, we only add it for menus for now because screen readers often
    // announce it as a menu even for other values.
    let ariaHasPopup = undefined;
    if (type === 'menu') ariaHasPopup = true;
    else if (type === 'listbox') ariaHasPopup = 'listbox';
    let overlayId = (0, _utils_useId_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Bi)();
    return {
        triggerProps: {
            'aria-haspopup': ariaHasPopup,
            'aria-expanded': isOpen,
            'aria-controls': isOpen ? overlayId : undefined,
            onPress: state.toggle
        },
        overlayProps: {
            id: overlayId
        }
    };
}



//# sourceMappingURL=useOverlayTrigger.mjs.map


/***/ },

/***/ 47347
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ $0644e3663365bfe5$export$ee0f7cc6afcd1c18)
/* harmony export */ });
/* harmony import */ var _utils_chain_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96558);
/* harmony import */ var _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62975);
/* harmony import */ var _utils_getNonce_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52662);
/* harmony import */ var _utils_getScrollParent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99597);
/* harmony import */ var _utils_platform_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87082);
/* harmony import */ var _utils_isScrollable_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38848);
/* harmony import */ var _utils_useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74441);
/* harmony import */ var _utils_keyboard_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40208);









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







const $0644e3663365bfe5$var$visualViewport = typeof document !== 'undefined' && window.visualViewport;
// The number of active usePreventScroll calls. Used to determine whether to revert back to the original page style/scroll position
let $0644e3663365bfe5$var$preventScrollCount = 0;
let $0644e3663365bfe5$var$restore;
function $0644e3663365bfe5$export$ee0f7cc6afcd1c18(options = {}) {
    let { isDisabled: isDisabled } = options;
    (0, _utils_useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_6__/* .useLayoutEffect */ .N)(()=>{
        if (isDisabled) return;
        $0644e3663365bfe5$var$preventScrollCount++;
        if ($0644e3663365bfe5$var$preventScrollCount === 1) {
            if ((0, _utils_platform_mjs__WEBPACK_IMPORTED_MODULE_4__/* .isIOS */ .un)() && (0, _utils_platform_mjs__WEBPACK_IMPORTED_MODULE_4__/* .isWebKit */ .Tc)()) $0644e3663365bfe5$var$restore = $0644e3663365bfe5$var$preventScrollMobileWebKit();
            else $0644e3663365bfe5$var$restore = $0644e3663365bfe5$var$preventScrollStandard();
        }
        return ()=>{
            $0644e3663365bfe5$var$preventScrollCount--;
            if ($0644e3663365bfe5$var$preventScrollCount === 0) $0644e3663365bfe5$var$restore();
        };
    }, [
        isDisabled
    ]);
}
// For most browsers, all we need to do is set `overflow: hidden` on the root element, and
// add some padding to prevent the page from shifting when the scrollbar is hidden.
function $0644e3663365bfe5$var$preventScrollStandard() {
    let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    return (0, _utils_chain_mjs__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .c)(scrollbarWidth > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
    ('scrollbarGutter' in document.documentElement.style ? $0644e3663365bfe5$var$setStyle(document.documentElement, 'scrollbarGutter', 'stable') : $0644e3663365bfe5$var$setStyle(document.documentElement, 'paddingRight', `${scrollbarWidth}px`)), $0644e3663365bfe5$var$setStyle(document.documentElement, 'overflow', 'hidden'));
}
// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Set `overscroll-behavior: contain` on nested scrollable regions so they do not scroll the page when at
//    the top or bottom. Work around a bug where this does not work when the element does not actually overflow
//    by preventing default in a `touchmove` event. This is best effort: we can't prevent default when pinch
//    zooming or when an element contains text selection, which may allow scrolling in some cases.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
function $0644e3663365bfe5$var$preventScrollMobileWebKit() {
    // Set overflow hidden so scrollIntoViewport() (useSelectableCollection) sees isScrollPrevented and
    // scrolls only scroll parents instead of calling native scrollIntoView() which moves the window.
    let restoreOverflow = $0644e3663365bfe5$var$setStyle(document.documentElement, 'overflow', 'hidden');
    let scrollable;
    let allowTouchMove = false;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        let target = (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getEventTarget */ .wt)(e);
        scrollable = (0, _utils_isScrollable_mjs__WEBPACK_IMPORTED_MODULE_5__/* .isScrollable */ .o)(target) ? target : (0, _utils_getScrollParent_mjs__WEBPACK_IMPORTED_MODULE_3__/* .getScrollParent */ .m)(target, true);
        allowTouchMove = false;
        // If the target is selected, don't preventDefault in touchmove to allow user to adjust selection.
        let selection = target.ownerDocument.defaultView.getSelection();
        if (selection && !selection.isCollapsed && selection.containsNode(target, true)) allowTouchMove = true;
        // If this is a range input, allow touch move to allow user to adjust the slider value
        if (e.composedPath().some((el)=>el instanceof HTMLInputElement && el.type === 'range')) allowTouchMove = true;
        // If this is a focused input element with a selected range, allow user to drag the selection handles.
        if ('selectionStart' in target && 'selectionEnd' in target && target.selectionStart < target.selectionEnd && target.ownerDocument.activeElement === target) allowTouchMove = true;
    };
    // Prevent scrolling up when at the top and scrolling down when at the bottom
    // of a nested scrollable area, otherwise mobile Safari will start scrolling
    // the window instead.
    // This must be applied before the touchstart event as of iOS 26, so inject it as a <style> element.
    let style = document.createElement('style');
    let nonce = (0, _utils_getNonce_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getNonce */ .m)();
    if (nonce) style.nonce = nonce;
    style.textContent = `
@layer {
  * {
    overscroll-behavior: contain;
  }
}`.trim();
    document.head.prepend(style);
    let onTouchMove = (e)=>{
        // Allow pinch-zooming.
        if (e.touches.length === 2 || allowTouchMove) return;
        // Prevent scrolling the window.
        if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
            e.preventDefault();
            return;
        }
        // overscroll-behavior should prevent scroll chaining, but currently does not
        // if the element doesn't actually overflow. https://bugs.webkit.org/show_bug.cgi?id=243452
        // This checks that both the width and height do not overflow, otherwise we might
        // block horizontal scrolling too. In that case, adding `touch-action: pan-x` to
        // the element will prevent vertical page scrolling. We can't add that automatically
        // because it must be set before the touchstart event.
        if (scrollable.scrollHeight === scrollable.clientHeight && scrollable.scrollWidth === scrollable.clientWidth) e.preventDefault();
    };
    let onBlur = (e)=>{
        let target = (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getEventTarget */ .wt)(e);
        let relatedTarget = e.relatedTarget;
        if (relatedTarget && (0, _utils_keyboard_mjs__WEBPACK_IMPORTED_MODULE_7__/* .willOpenKeyboard */ .o)(relatedTarget)) {
            // Focus without scrolling the whole page, and then scroll into view manually.
            relatedTarget.focus({
                preventScroll: true
            });
            $0644e3663365bfe5$var$scrollIntoViewWhenReady(relatedTarget, (0, _utils_keyboard_mjs__WEBPACK_IMPORTED_MODULE_7__/* .willOpenKeyboard */ .o)(target));
        } else if (!relatedTarget) {
            // When tapping the Done button on the keyboard, focus moves to the body.
            // FocusScope will then restore focus back to the input. Later when tapping
            // the same input again, it is already focused, so no blur event will fire,
            // resulting in the flow above never running and Safari's native scrolling occurring.
            // Instead, move focus to the parent focusable element (e.g. the dialog).
            let focusable = target.parentElement?.closest('[tabindex]');
            focusable?.focus({
                preventScroll: true
            });
        }
    };
    // Override programmatic focus to scroll into view without scrolling the whole page.
    let focus = HTMLElement.prototype.focus;
    HTMLElement.prototype.focus = function(opts) {
        // Track whether the keyboard was already visible before.
        let activeElement = (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getActiveElement */ .bq)();
        let wasKeyboardVisible = activeElement != null && (0, _utils_keyboard_mjs__WEBPACK_IMPORTED_MODULE_7__/* .willOpenKeyboard */ .o)(activeElement);
        // Focus the element without scrolling the page.
        focus.call(this, {
            ...opts,
            preventScroll: true
        });
        if (!opts || !opts.preventScroll) $0644e3663365bfe5$var$scrollIntoViewWhenReady(this, wasKeyboardVisible);
    };
    let removeEvents = (0, _utils_chain_mjs__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .c)($0644e3663365bfe5$var$addEvent(document, 'touchstart', onTouchStart, {
        passive: false,
        capture: true
    }), $0644e3663365bfe5$var$addEvent(document, 'touchmove', onTouchMove, {
        passive: false,
        capture: true
    }), $0644e3663365bfe5$var$addEvent(document, 'blur', onBlur, true));
    return ()=>{
        restoreOverflow();
        removeEvents();
        style.remove();
        HTMLElement.prototype.focus = focus;
    };
}
// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function $0644e3663365bfe5$var$setStyle(element, style, value) {
    let cur = element.style[style];
    element.style[style] = value;
    return ()=>{
        element.style[style] = cur;
    };
}
// Adds an event listener to an element, and returns a function to remove it.
function $0644e3663365bfe5$var$addEvent(target, event, handler, options) {
    // internal function, so it's ok to ignore the difficult to fix type error
    // @ts-ignore
    target.addEventListener(event, handler, options);
    return ()=>{
        // @ts-ignore
        target.removeEventListener(event, handler, options);
    };
}
function $0644e3663365bfe5$var$scrollIntoViewWhenReady(target, wasKeyboardVisible) {
    if (wasKeyboardVisible || !$0644e3663365bfe5$var$visualViewport) // If the keyboard was already visible, scroll the target into view immediately.
    $0644e3663365bfe5$var$scrollIntoView(target);
    else // Otherwise, wait for the visual viewport to resize before scrolling so we can
    // measure the correct position to scroll to.
    $0644e3663365bfe5$var$visualViewport.addEventListener('resize', ()=>$0644e3663365bfe5$var$scrollIntoView(target), {
        once: true
    });
}
function $0644e3663365bfe5$var$scrollIntoView(target) {
    let root = document.scrollingElement || document.documentElement;
    let nextTarget = target;
    while(nextTarget && nextTarget !== root){
        // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
        let scrollable = (0, _utils_getScrollParent_mjs__WEBPACK_IMPORTED_MODULE_3__/* .getScrollParent */ .m)(nextTarget);
        if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== nextTarget) {
            let scrollableRect = scrollable.getBoundingClientRect();
            let targetRect = nextTarget.getBoundingClientRect();
            if (targetRect.top < scrollableRect.top || targetRect.bottom > scrollableRect.top + nextTarget.clientHeight) {
                let bottom = scrollableRect.bottom;
                if ($0644e3663365bfe5$var$visualViewport) bottom = Math.min(bottom, $0644e3663365bfe5$var$visualViewport.offsetTop + $0644e3663365bfe5$var$visualViewport.height);
                // Center within the viewport.
                let adjustment = targetRect.top - scrollableRect.top - ((bottom - scrollableRect.top) / 2 - targetRect.height / 2);
                scrollable.scrollTo({
                    // Clamp to the valid range to prevent over-scrolling.
                    top: Math.max(0, Math.min(scrollable.scrollHeight - scrollable.clientHeight, scrollable.scrollTop + adjustment)),
                    behavior: 'smooth'
                });
            }
        }
        nextTarget = scrollable.parentElement;
    }
}



//# sourceMappingURL=usePreventScroll.mjs.map


/***/ },

/***/ 75823
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ $a83747cc3f035330$export$8f5ed9ff9f511381)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72711);


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
class $a83747cc3f035330$export$8f5ed9ff9f511381 {
    constructor(ref){
        this.ref = ref;
    }
    getItemRect(key) {
        let container = this.ref.current;
        if (!container) return null;
        let item = key != null ? (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getItemElement */ .au)(this.ref, key) : null;
        if (!item) return null;
        let containerRect = container.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        return {
            x: itemRect.left - containerRect.left - container.clientLeft + container.scrollLeft,
            y: itemRect.top - containerRect.top - container.clientTop + container.scrollTop,
            width: itemRect.width,
            height: itemRect.height
        };
    }
    getContentSize() {
        let container = this.ref.current;
        return {
            width: container?.scrollWidth ?? 0,
            height: container?.scrollHeight ?? 0
        };
    }
    getVisibleRect() {
        let container = this.ref.current;
        return {
            x: container?.scrollLeft ?? 0,
            y: container?.scrollTop ?? 0,
            width: container?.clientWidth ?? 0,
            height: container?.clientHeight ?? 0
        };
    }
}



//# sourceMappingURL=DOMLayoutDelegate.mjs.map


/***/ },

/***/ 88430
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ $ae8f8d98b2b18f2f$export$a05409b8bb224a5a)
/* harmony export */ });
/* harmony import */ var _DOMLayoutDelegate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75823);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72711);
/* harmony import */ var _utils_isScrollable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38848);




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


class $ae8f8d98b2b18f2f$export$a05409b8bb224a5a {
    constructor(...args){
        if (args.length === 1) {
            let opts = args[0];
            this.collection = opts.collection;
            this.ref = opts.ref;
            this.collator = opts.collator;
            this.disabledKeys = opts.disabledKeys || new Set();
            this.disabledBehavior = opts.disabledBehavior || 'all';
            this.orientation = opts.orientation || 'vertical';
            this.direction = opts.direction;
            this.layout = opts.layout || 'stack';
            this.layoutDelegate = opts.layoutDelegate || new (0, _DOMLayoutDelegate_mjs__WEBPACK_IMPORTED_MODULE_0__/* .DOMLayoutDelegate */ .K)(opts.ref);
        } else {
            this.collection = args[0];
            this.disabledKeys = args[1];
            this.ref = args[2];
            this.collator = args[3];
            this.layout = 'stack';
            this.orientation = 'vertical';
            this.disabledBehavior = 'all';
            this.layoutDelegate = new (0, _DOMLayoutDelegate_mjs__WEBPACK_IMPORTED_MODULE_0__/* .DOMLayoutDelegate */ .K)(this.ref);
        }
        // If this is a vertical stack, remove the left/right methods completely
        // so they aren't called by useDroppableCollection.
        if (this.layout === 'stack' && this.orientation === 'vertical') {
            this.getKeyLeftOf = undefined;
            this.getKeyRightOf = undefined;
        }
    }
    isDisabled(item) {
        return this.disabledBehavior === 'all' && (item.props?.isDisabled || this.disabledKeys.has(item.key)) && item.props?.disabledBehavior !== 'selection';
    }
    findNextNonDisabled(key, getNext, includeDisabled = false) {
        let nextKey = key;
        while(nextKey != null){
            let item = this.collection.getItem(nextKey);
            if (item?.type === 'item' && (includeDisabled || !this.isDisabled(item))) return nextKey;
            nextKey = getNext(nextKey);
        }
        return null;
    }
    getNextKey(key, options) {
        let nextKey = key;
        nextKey = this.collection.getKeyAfter(nextKey);
        return this.findNextNonDisabled(nextKey, (key)=>this.collection.getKeyAfter(key), options?.includeDisabled);
    }
    getPreviousKey(key, options) {
        let nextKey = key;
        nextKey = this.collection.getKeyBefore(nextKey);
        return this.findNextNonDisabled(nextKey, (key)=>this.collection.getKeyBefore(key), options?.includeDisabled);
    }
    findKey(key, nextKey, shouldSkip) {
        let tempKey = key;
        let itemRect = this.layoutDelegate.getItemRect(tempKey);
        if (!itemRect || tempKey == null) return null;
        // Find the item above or below in the same column.
        let prevRect = itemRect;
        do {
            tempKey = nextKey(tempKey);
            if (tempKey == null) break;
            itemRect = this.layoutDelegate.getItemRect(tempKey);
        }while (itemRect && shouldSkip(prevRect, itemRect) && tempKey != null);
        return tempKey;
    }
    isSameRow(prevRect, itemRect) {
        return prevRect.y === itemRect.y || prevRect.x !== itemRect.x;
    }
    isSameColumn(prevRect, itemRect) {
        return prevRect.x === itemRect.x || prevRect.y !== itemRect.y;
    }
    // checks to see if the next/prev key is spatially above/below the current key. If not, that means we are in
    // a reversed column layout and need to adjust appropriately
    // TODO: still need to see how this works with virtualizer once there is handling for the reverse layout
    // this felt like a simpler approach then changing getKeyAbove/Below to be purely spatial calculations
    isReversed(key) {
        let nextKey = this.getNextKey(key);
        let currentEl = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getItemElement */ .au)(this.ref, key);
        if (nextKey != null) {
            let nextEl = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getItemElement */ .au)(this.ref, nextKey);
            if (!currentEl || !nextEl) return false;
            return currentEl.getBoundingClientRect().top > nextEl.getBoundingClientRect().top;
        }
        let prevKey = this.getPreviousKey(key);
        if (prevKey != null) {
            let prevEl = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getItemElement */ .au)(this.ref, prevKey);
            if (!currentEl || !prevEl) return false;
            return prevEl.getBoundingClientRect().top > currentEl.getBoundingClientRect().top;
        }
        return false;
    }
    getKeyBelow(key, options) {
        if (this.layout === 'grid' && this.orientation === 'vertical') return this.findKey(key, (key)=>this.getNextKey(key, options), this.isSameRow);
        else if (this.orientation === 'vertical') return this.isReversed(key) ? this.getPreviousKey(key, options) : this.getNextKey(key, options);
        else return this.getNextKey(key, options);
    }
    getKeyAbove(key, options) {
        if (this.layout === 'grid' && this.orientation === 'vertical') return this.findKey(key, (key)=>this.getPreviousKey(key, options), this.isSameRow);
        else if (this.orientation === 'vertical') return this.isReversed(key) ? this.getNextKey(key, options) : this.getPreviousKey(key, options);
        else return this.getPreviousKey(key, options);
    }
    getNextColumn(key, right, options) {
        return right ? this.getPreviousKey(key, options) : this.getNextKey(key, options);
    }
    getKeyRightOf(key, options) {
        // This is a temporary solution for CardView until we refactor useSelectableCollection.
        // https://github.com/orgs/adobe/projects/19/views/32?pane=issue&itemId=77825042
        let layoutDelegateMethod = this.direction === 'ltr' ? 'getKeyRightOf' : 'getKeyLeftOf';
        if (this.layoutDelegate[layoutDelegateMethod]) {
            key = this.layoutDelegate[layoutDelegateMethod](key);
            return this.findNextNonDisabled(key, (key)=>this.layoutDelegate[layoutDelegateMethod](key), options?.includeDisabled);
        }
        if (this.layout === 'grid') {
            if (this.orientation === 'vertical') return this.getNextColumn(key, this.direction === 'rtl', options);
            else return this.findKey(key, (key)=>this.getNextColumn(key, this.direction === 'rtl', options), this.isSameColumn);
        } else if (this.orientation === 'horizontal') return this.getNextColumn(key, this.direction === 'rtl', options);
        return null;
    }
    getKeyLeftOf(key, options) {
        let layoutDelegateMethod = this.direction === 'ltr' ? 'getKeyLeftOf' : 'getKeyRightOf';
        if (this.layoutDelegate[layoutDelegateMethod]) {
            key = this.layoutDelegate[layoutDelegateMethod](key);
            return this.findNextNonDisabled(key, (key)=>this.layoutDelegate[layoutDelegateMethod](key), options?.includeDisabled);
        }
        if (this.layout === 'grid') {
            if (this.orientation === 'vertical') return this.getNextColumn(key, this.direction === 'ltr', options);
            else return this.findKey(key, (key)=>this.getNextColumn(key, this.direction === 'ltr', options), this.isSameColumn);
        } else if (this.orientation === 'horizontal') return this.getNextColumn(key, this.direction === 'ltr', options);
        return null;
    }
    getFirstKey() {
        let key = this.collection.getFirstKey();
        return this.findNextNonDisabled(key, (key)=>this.collection.getKeyAfter(key));
    }
    getLastKey() {
        let key = this.collection.getLastKey();
        return this.findNextNonDisabled(key, (key)=>this.collection.getKeyBefore(key));
    }
    getKeyPageAbove(key) {
        let menu = this.ref.current;
        let itemRect = this.layoutDelegate.getItemRect(key);
        if (!itemRect) return null;
        let reversed = this.isReversed(key);
        if (menu && !(0, _utils_isScrollable_mjs__WEBPACK_IMPORTED_MODULE_2__/* .isScrollable */ .o)(menu)) return this.getFirstKey();
        let nextKey = key;
        if (this.orientation === 'horizontal') {
            let pageX = Math.max(0, itemRect.x + itemRect.width - this.layoutDelegate.getVisibleRect().width);
            while(itemRect && itemRect.x > pageX && nextKey != null){
                nextKey = this.getKeyAbove(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        } else {
            let visibleRect = this.layoutDelegate.getVisibleRect();
            // column reverse makes y negative for items so we need to instead do current pos - height instead
            let pageY = reversed ? itemRect.y - visibleRect.height : Math.max(0, itemRect.y + itemRect.height - visibleRect.height);
            while(itemRect && itemRect.y > pageY && nextKey != null){
                nextKey = this.getKeyAbove(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        }
        return nextKey ?? (reversed ? this.getLastKey() : this.getFirstKey());
    }
    getKeyPageBelow(key) {
        let menu = this.ref.current;
        let itemRect = this.layoutDelegate.getItemRect(key);
        if (!itemRect) return null;
        let reversed = this.isReversed(key);
        if (menu && !(0, _utils_isScrollable_mjs__WEBPACK_IMPORTED_MODULE_2__/* .isScrollable */ .o)(menu)) return this.getLastKey();
        let nextKey = key;
        if (this.orientation === 'horizontal') {
            let pageX = Math.min(this.layoutDelegate.getContentSize().width, itemRect.x - itemRect.width + this.layoutDelegate.getVisibleRect().width);
            while(itemRect && itemRect.x < pageX && nextKey != null){
                nextKey = this.getKeyBelow(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        } else {
            let pageY = Math.min(this.layoutDelegate.getContentSize().height, itemRect.y - itemRect.height + this.layoutDelegate.getVisibleRect().height);
            while(itemRect && itemRect.y < pageY && nextKey != null){
                nextKey = this.getKeyBelow(nextKey);
                itemRect = nextKey == null ? null : this.layoutDelegate.getItemRect(nextKey);
            }
        }
        return nextKey ?? (reversed ? this.getFirstKey() : this.getLastKey());
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey || this.getFirstKey();
        while(key != null){
            let item = collection.getItem(key);
            if (!item) return null;
            let substring = item.textValue.slice(0, search.length);
            if (item.textValue && this.collator.compare(substring, search) === 0) return key;
            key = this.getNextKey(key);
        }
        return null;
    }
}



//# sourceMappingURL=ListKeyboardDelegate.mjs.map


/***/ },

/***/ 68365
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ $d667c2af82d35a98$export$d6daf82dcd84e87c)
});

;// ./node_modules/react-aria/dist/private/utils/constants.mjs
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
 */ // Custom event names for updating the autocomplete's aria-activedecendant.
const $8b2399d051d06d4c$export$447a38995de2c711 = 'react-aria-clear-focus';
const $8b2399d051d06d4c$export$831c820ad60f9d12 = 'react-aria-focus';



//# sourceMappingURL=constants.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/virtualFocus.mjs
var virtualFocus = __webpack_require__(93653);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/focusSafely.mjs
var focusSafely = __webpack_require__(75105);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/focusWithoutScrolling.mjs
var focusWithoutScrolling = __webpack_require__(5460);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(62975);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/FocusScope.mjs
var FocusScope = __webpack_require__(46686);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(35692);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/utils.mjs
var utils = __webpack_require__(72711);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/keyboard.mjs
var keyboard = __webpack_require__(40208);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/platform.mjs
var platform = __webpack_require__(87082);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/isFocusable.mjs
var isFocusable = __webpack_require__(53685);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/scrollIntoView.mjs + 1 modules
var scrollIntoView = __webpack_require__(58796);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useEvent.mjs
var useEvent = __webpack_require__(49644);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useKeyboard.mjs + 2 modules
var useKeyboard = __webpack_require__(91357);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/I18nProvider.mjs + 2 modules
var I18nProvider = __webpack_require__(78352);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/openLink.mjs
var openLink = __webpack_require__(46271);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/selection/useTypeSelect.mjs
var useTypeSelect = __webpack_require__(80741);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(74441);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria/dist/private/utils/useUpdateLayoutEffect.mjs



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

function $a475cdc2445827b5$export$72ef708ab07251f1(effect, dependencies) {
    const isInitialMount = (0, react.useRef)(true);
    const lastDeps = (0, react.useRef)(null);
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!lastDeps.current || dependencies.some((dep, i)=>!Object.is(dep, lastDeps[i]))) effect();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}



//# sourceMappingURL=useUpdateLayoutEffect.mjs.map

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
;// ./node_modules/react-aria/dist/private/selection/useSelectableCollection.mjs






















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




















function $d667c2af82d35a98$export$d6daf82dcd84e87c(options) {
    let { selectionManager: manager, keyboardDelegate: delegate, ref: ref, autoFocus: autoFocus = false, shouldFocusWrap: shouldFocusWrap = false, disallowEmptySelection: disallowEmptySelection = false, disallowSelectAll: disallowSelectAll = false, escapeKeyBehavior: escapeKeyBehavior = 'clearSelection', selectOnFocus: selectOnFocus = manager.selectionBehavior === 'replace', disallowTypeAhead: disallowTypeAhead = false, shouldUseVirtualFocus: shouldUseVirtualFocus, allowsTabNavigation: allowsTabNavigation = false, scrollRef: // If no scrollRef is provided, assume the collection ref is the scrollable region
    scrollRef = ref, linkBehavior: linkBehavior = 'action', UNSTABLE_focusOnEntry: UNSTABLE_focusOnEntry } = options;
    let { direction: direction } = (0, I18nProvider/* useLocale */.Y)();
    let router = (0, openLink/* useRouter */.rd)();
    const navigateToKey = (e, key, childFocus)=>{
        if (key != null) {
            if (manager.isLink(key) && linkBehavior === 'selection' && selectOnFocus && !(0, utils/* isNonContiguousSelectionModifier */.N9)(e)) {
                // Set focused key and re-render synchronously to bring item into view if needed.
                (0, react_dom.flushSync)(()=>{
                    manager.setFocusedKey(key, childFocus);
                });
                let item = (0, utils/* getItemElement */.au)(ref, key);
                let itemProps = manager.getItemProps(key);
                if (item) {
                    router.open(item, e, itemProps.href, itemProps.routerOptions);
                    return;
                }
                return false;
            }
            manager.setFocusedKey(key, childFocus);
            if (manager.isLink(key) && linkBehavior === 'override') return false;
            if (e.shiftKey && manager.selectionMode === 'multiple') {
                manager.extendSelection(key);
                return;
            } else if (selectOnFocus && !(0, utils/* isNonContiguousSelectionModifier */.N9)(e)) {
                manager.replaceSelection(key);
                return;
            }
        }
        return false;
    };
    let arrowDown = (e)=>{
        if (delegate.getKeyBelow) {
            let nextKey = manager.focusedKey != null ? delegate.getKeyBelow?.(manager.focusedKey) : delegate.getFirstKey?.();
            if (nextKey == null && shouldFocusWrap) nextKey = delegate.getFirstKey?.(manager.focusedKey);
            if (nextKey != null) {
                navigateToKey(e, nextKey);
                return;
            }
        }
        return false;
    };
    let arrowUp = (e)=>{
        if (delegate.getKeyAbove) {
            let nextKey = manager.focusedKey != null ? delegate.getKeyAbove?.(manager.focusedKey) : delegate.getLastKey?.();
            if (nextKey == null && shouldFocusWrap) nextKey = delegate.getLastKey?.(manager.focusedKey);
            if (nextKey != null) {
                navigateToKey(e, nextKey);
                return;
            }
        }
        return false;
    };
    let home = (e)=>{
        if (delegate.getFirstKey) {
            if (manager.focusedKey === null && e.shiftKey) return false;
            // TODO: should Home and End also be reversed in column reverse aka Home goes to top? Or should Home always to to the "first" (bottom)
            let firstKey = delegate.getFirstKey(manager.focusedKey, (0, keyboard/* isCtrlKeyPressed */.B)(e));
            manager.setFocusedKey(firstKey);
            if (firstKey != null) {
                if ((0, keyboard/* isCtrlKeyPressed */.B)(e) && e.shiftKey && manager.selectionMode === 'multiple') {
                    manager.extendSelection(firstKey);
                    return;
                } else if (selectOnFocus) {
                    manager.replaceSelection(firstKey);
                    return;
                }
            }
        }
        return false;
    };
    let arrowLeft = (e)=>{
        if (delegate.getKeyLeftOf) {
            let nextKey = manager.focusedKey != null ? delegate.getKeyLeftOf?.(manager.focusedKey) : delegate.getFirstKey?.();
            if (nextKey == null && shouldFocusWrap) nextKey = direction === 'rtl' ? delegate.getFirstKey?.(manager.focusedKey) : delegate.getLastKey?.(manager.focusedKey);
            if (nextKey != null) {
                navigateToKey(e, nextKey, direction === 'rtl' ? 'first' : 'last');
                return;
            }
        }
        return false;
    };
    let arrowRight = (e)=>{
        if (delegate.getKeyRightOf) {
            let nextKey = manager.focusedKey != null ? delegate.getKeyRightOf?.(manager.focusedKey) : delegate.getFirstKey?.();
            if (nextKey == null && shouldFocusWrap) nextKey = direction === 'rtl' ? delegate.getLastKey?.(manager.focusedKey) : delegate.getFirstKey?.(manager.focusedKey);
            if (nextKey != null) {
                navigateToKey(e, nextKey, direction === 'rtl' ? 'last' : 'first');
                return;
            }
        }
        return false;
    };
    let end = (e)=>{
        if (delegate.getLastKey) {
            if (manager.focusedKey === null && e.shiftKey) return false;
            let lastKey = delegate.getLastKey(manager.focusedKey, (0, keyboard/* isCtrlKeyPressed */.B)(e));
            manager.setFocusedKey(lastKey);
            if (lastKey != null) {
                if ((0, keyboard/* isCtrlKeyPressed */.B)(e) && e.shiftKey && manager.selectionMode === 'multiple') {
                    manager.extendSelection(lastKey);
                    return;
                } else if (selectOnFocus) {
                    manager.replaceSelection(lastKey);
                    return;
                }
            }
        }
        return false;
    };
    let pageDown = (e)=>{
        if (delegate.getKeyPageBelow && manager.focusedKey != null) {
            let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
            if (nextKey != null) return navigateToKey(e, nextKey);
        }
        return false;
    };
    let pageUp = (e)=>{
        if (delegate.getKeyPageAbove && manager.focusedKey != null) {
            let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
            if (nextKey != null) return navigateToKey(e, nextKey);
        }
        return false;
    };
    let aHandler = ()=>{
        if (manager.selectionMode === 'multiple' && disallowSelectAll !== true) {
            manager.selectAll();
            return;
        }
        return false;
    };
    let escape = ()=>{
        if (escapeKeyBehavior === 'clearSelection' && !disallowEmptySelection && manager.selectedKeys.size !== 0) {
            manager.clearSelection();
            return;
        }
        return false;
    };
    let tab = ()=>{
        if (!allowsTabNavigation && ref.current) {
            // There may be elements that are "tabbable" inside a collection (e.g. in a grid cell).
            // However, collections should be treated as a single tab stop, with arrow key navigation internally.
            // We don't control the rendering of these, so we can't override the tabIndex to prevent tabbing.
            // Instead, we handle the Tab key, and move focus manually to the first/last tabbable element
            // in the collection, so that the browser default behavior will apply starting from that element
            // rather than the currently focused one.
            let walker = (0, FocusScope/* getFocusableTreeWalker */.N$)(ref.current, {
                tabbable: true
            });
            let next = undefined;
            let last;
            do {
                last = walker.lastChild();
                if (last) next = last;
            }while (last);
            // If the active element is NOT tabbable but is contained by an element that IS tabbable (aka the cell), the browser will actually move focus to
            // the containing element. We need to special case this so that tab will move focus out of the grid instead of looping between
            // focusing the containing cell and back to the non-tabbable child element
            let activeElement = (0, DOMFunctions/* getActiveElement */.bq)();
            if (next && (!(0, DOMFunctions/* isFocusWithin */.ae)(next) || activeElement && !(0, isFocusable/* isTabbable */.A)(activeElement))) (0, focusWithoutScrolling/* focusWithoutScrolling */.e)(next);
        }
        return {
            shouldContinuePropagation: true,
            shouldPreventDefault: false
        };
    };
    let shiftTab = ()=>{
        if (!allowsTabNavigation && ref.current) ref.current.focus();
        return {
            shouldContinuePropagation: true,
            shouldPreventDefault: false
        };
    };
    let withShiftSel = (key, callback)=>{
        return {
            [(0, platform/* isMac */.cX)() ? key + '+Shift+Alt' : key + '+Shift+Control']: callback,
            [key + '+Shift']: callback,
            [(0, platform/* isMac */.cX)() ? key + '+Alt' : key + '+Control']: callback,
            [key]: callback
        };
    };
    // oxlint-disable react/react-compiler
    let { keyboardProps: repeatKeyboardProps } = (0, useKeyboard/* useKeyboard */.d)({
        shortcuts: {
            ...withShiftSel('ArrowDown', arrowDown),
            ...withShiftSel('ArrowUp', arrowUp),
            ...withShiftSel('ArrowLeft', arrowLeft),
            ...withShiftSel('ArrowRight', arrowRight),
            ...withShiftSel('PageDown', pageDown),
            ...withShiftSel('PageUp', pageUp)
        },
        allowRepeats: true
    });
    // oxlint-disable react/react-compiler
    let { keyboardProps: keyboardProps } = (0, useKeyboard/* useKeyboard */.d)({
        shortcuts: {
            ...withShiftSel('Home', home),
            ...withShiftSel('End', end),
            'Mod+A': aHandler,
            Escape: escape,
            Tab: tab,
            'Tab+Shift': shiftTab
        }
    });
    // oxlint-enable react/react-compiler
    // Store the scroll position so we can restore it later.
    /// TODO: should this happen all the time??
    let scrollPos = (0, react.useRef)({
        top: 0,
        left: 0
    });
    (0, useEvent/* useEvent */._)(scrollRef, 'scroll', ()=>{
        scrollPos.current = {
            top: scrollRef.current?.scrollTop ?? 0,
            left: scrollRef.current?.scrollLeft ?? 0
        };
    });
    let onFocus = (e)=>{
        if (manager.isFocused) {
            // If a focus event bubbled through a portal, reset focus state.
            if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e))) manager.setFocused(false);
            return;
        }
        // Focus events can bubble through portals. Ignore these events.
        if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e))) return;
        let modality = (0, useFocusVisible/* getInteractionModality */.ME)();
        manager.setFocused(true);
        let navigateToKey = (key)=>{
            if (key != null) {
                manager.setFocusedKey(key);
                if (selectOnFocus && !manager.isSelected(key)) manager.replaceSelection(key);
            }
        };
        // we need the "virtual" modality case checks here because shift tabbing from the prompt field's attachment card back into the
        // thread is a virtual focus event (the tab handler in onKeyDown focuses the ref of the attachmentList aka TagGroup via a focus() call, hence the virtual modality)
        if (UNSTABLE_focusOnEntry && (modality === 'keyboard' || modality === 'virtual')) // always go to the first item in the Thread when tabbing forwards/backwards into the collection
        // since it is probably more important to the user to see the new prompt reply rather than go to the last focused key
        navigateToKey(UNSTABLE_focusOnEntry === 'first' ? delegate.getFirstKey?.() : delegate.getLastKey?.());
        else if (manager.focusedKey == null) {
            // If the user hasn't yet interacted with the collection, there will be no focusedKey set.
            // Attempt to detect whether the user is tabbing forward or backward into the collection
            // and either focus the first or last item accordingly.
            let relatedTarget = e.relatedTarget;
            if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) navigateToKey(manager.lastSelectedKey ?? delegate.getLastKey?.());
            else navigateToKey(manager.firstSelectedKey ?? delegate.getFirstKey?.());
        } else if (scrollRef.current) {
            // Restore the scroll position to what it was before.
            scrollRef.current.scrollTop = scrollPos.current.top;
            scrollRef.current.scrollLeft = scrollPos.current.left;
        }
        if (manager.focusedKey != null && scrollRef.current) {
            // Refocus and scroll the focused item into view if it exists within the scrollable region.
            let element = (0, utils/* getItemElement */.au)(ref, manager.focusedKey);
            if (element instanceof HTMLElement) {
                // This prevents a flash of focus on the first/last element in the collection, or the collection itself.
                if (!(0, DOMFunctions/* isFocusWithin */.ae)(element) && !shouldUseVirtualFocus) (0, focusWithoutScrolling/* focusWithoutScrolling */.e)(element);
                if (modality === 'keyboard' || UNSTABLE_focusOnEntry && modality === 'virtual') (0, scrollIntoView/* scrollIntoViewport */.o)(element, {
                    containingElement: ref.current
                });
            }
        }
    };
    let onBlur = (e)=>{
        // Don't set blurred and then focused again if moving focus within the collection.
        if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, e.relatedTarget)) manager.setFocused(false);
    };
    // Ref to track whether the first item in the collection should be automatically focused. Specifically used for autocomplete when user types
    // to focus the first key AFTER the collection updates.
    // TODO: potentially expand the usage of this
    let shouldVirtualFocusFirst = (0, react.useRef)(false);
    // Add event listeners for custom virtual events. These handle updating the focused key in response to various keyboard events
    // at the autocomplete level
    // TODO: fix type later
    (0, useEvent/* useEvent */._)(ref, (0, $8b2399d051d06d4c$export$831c820ad60f9d12), !shouldUseVirtualFocus ? undefined : (e)=>{
        let { detail: detail } = e;
        e.stopPropagation();
        manager.setFocused(true);
        // If the user is typing forwards, autofocus the first option in the list.
        if (detail?.focusStrategy === 'first') shouldVirtualFocusFirst.current = true;
    });
    // update active descendant
    let firstKey = delegate.getFirstKey?.() ?? null;
    (0, $a475cdc2445827b5$export$72ef708ab07251f1)(()=>{
        if (shouldVirtualFocusFirst.current) {
            // If no focusable items exist in the list, make sure to clear any activedescendant that may still exist and move focus back to
            // the original active element (e.g. the autocomplete input)
            if (firstKey == null) {
                let previousActiveElement = (0, DOMFunctions/* getActiveElement */.bq)();
                (0, virtualFocus/* moveVirtualFocus */.vX)(ref.current);
                (0, virtualFocus/* dispatchVirtualFocus */.Ig)(previousActiveElement, null);
                // If there wasn't a focusable key but the collection had items, then that means we aren't in an intermediate load state and all keys are disabled.
                // Reset shouldVirtualFocusFirst so that we don't erronously autofocus an item when the collection is filtered again.
                if (manager.collection.size > 0) shouldVirtualFocusFirst.current = false;
            } else {
                manager.setFocusedKey(firstKey);
                // Only set shouldVirtualFocusFirst to false if we've successfully set the first key as the focused key
                // If there wasn't a key to focus, we might be in a temporary loading state so we'll want to still focus the first key
                // after the collection updates after load
                shouldVirtualFocusFirst.current = false;
            }
        }
    }, [
        firstKey,
        manager.collection.size
    ]);
    // reset focus first flag
    (0, $a475cdc2445827b5$export$72ef708ab07251f1)(()=>{
        // If user causes the focused key to change in any other way, clear shouldVirtualFocusFirst so we don't
        // accidentally move focus from under them. Skip this if the collection was empty because we might be in a load
        // state and will still want to focus the first item after load
        if (manager.collection.size > 0) shouldVirtualFocusFirst.current = false;
    }, [
        manager.focusedKey
    ]);
    (0, useEvent/* useEvent */._)(ref, (0, $8b2399d051d06d4c$export$447a38995de2c711), !shouldUseVirtualFocus ? undefined : (e)=>{
        e.stopPropagation();
        manager.setFocused(false);
        if (e.detail?.clearFocusKey) manager.setFocusedKey(null);
    });
    const autoFocusRef = (0, react.useRef)(autoFocus);
    const didAutoFocusRef = (0, react.useRef)(false);
    (0, react.useEffect)(()=>{
        if (autoFocusRef.current) {
            let focusedKey = null;
            // Check focus strategy to determine which item to focus
            if (autoFocus === 'first') focusedKey = delegate.getFirstKey?.() ?? null;
            if (autoFocus === 'last') focusedKey = delegate.getLastKey?.() ?? null;
            // If there are any selected keys, make the first one the new focus target
            let selectedKeys = manager.selectedKeys;
            if (selectedKeys.size) {
                for (let key of selectedKeys)if (manager.canSelectItem(key)) {
                    focusedKey = key;
                    break;
                }
            }
            manager.setFocused(true);
            manager.setFocusedKey(focusedKey);
            // If no default focus key is selected, focus the collection itself.
            if (focusedKey == null && !shouldUseVirtualFocus && ref.current) (0, focusSafely/* focusSafely */.l)(ref.current);
            // Wait until the collection has items to autofocus.
            if (manager.collection.size > 0) {
                autoFocusRef.current = false;
                didAutoFocusRef.current = true;
            }
        }
    });
    // Scroll the focused element into view when the focusedKey changes.
    let lastFocusedKey = (0, react.useRef)(manager.focusedKey);
    let raf = (0, react.useRef)(null);
    (0, react.useEffect)(()=>{
        if (manager.isFocused && manager.focusedKey != null && (manager.focusedKey !== lastFocusedKey.current || didAutoFocusRef.current) && scrollRef.current && ref.current) {
            let modality = (0, useFocusVisible/* getInteractionModality */.ME)();
            let element = (0, utils/* getItemElement */.au)(ref, manager.focusedKey);
            if (!(element instanceof HTMLElement)) // If item element wasn't found, return early (don't update autoFocusRef and lastFocusedKey).
            // The collection may initially be empty (e.g. virtualizer), so wait until the element exists.
            return;
            if (modality === 'keyboard' || didAutoFocusRef.current) {
                if (raf.current) cancelAnimationFrame(raf.current);
                raf.current = requestAnimationFrame(()=>{
                    if (scrollRef.current) {
                        (0, scrollIntoView/* scrollIntoView */.R)(scrollRef.current, element);
                        // Avoid scroll in iOS VO, since it may cause overlay to close (i.e. RAC submenu)
                        if (modality !== 'virtual') (0, scrollIntoView/* scrollIntoViewport */.o)(element, {
                            containingElement: ref.current
                        });
                    }
                });
            }
        }
        // If the focused key becomes null (e.g. the last item is deleted), focus the whole collection.
        if (!shouldUseVirtualFocus && manager.isFocused && manager.focusedKey == null && lastFocusedKey.current != null && ref.current) (0, focusSafely/* focusSafely */.l)(ref.current);
        lastFocusedKey.current = manager.focusedKey;
        didAutoFocusRef.current = false;
    });
    (0, react.useEffect)(()=>{
        return ()=>{
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, []);
    // Intercept FocusScope restoration since virtualized collections can reuse DOM nodes.
    (0, useEvent/* useEvent */._)(ref, 'react-aria-focus-scope-restore', (e)=>{
        e.preventDefault();
        manager.setFocused(true);
    });
    let handlers = {
        ...(0, mergeProps/* mergeProps */.v)(keyboardProps, repeatKeyboardProps),
        onFocus: onFocus,
        onBlur: onBlur,
        onMouseDown (e) {
            // Ignore events that bubbled through portals.
            if (scrollRef.current === (0, DOMFunctions/* getEventTarget */.wt)(e)) // Prevent focus going to the collection when clicking on the scrollbar.
            e.preventDefault();
        }
    };
    let { typeSelectProps: typeSelectProps } = (0, useTypeSelect/* useTypeSelect */.I)({
        keyboardDelegate: delegate,
        selectionManager: manager
    });
    if (!disallowTypeAhead) // oxlint-disable-next-line react/react-compiler
    handlers = (0, mergeProps/* mergeProps */.v)(typeSelectProps, handlers);
    // If nothing is focused within the collection, make the collection itself tabbable.
    // This will be marshalled to either the first or last item depending on where focus came from.
    let tabIndex = undefined;
    if (!shouldUseVirtualFocus) tabIndex = manager.focusedKey == null ? 0 : -1;
    let collectionId = (0, utils/* useCollectionId */.j5)(manager.collection);
    return {
        // oxlint-disable-next-line react/react-compiler
        collectionProps: (0, mergeProps/* mergeProps */.v)(handlers, {
            tabIndex: tabIndex,
            'data-collection': collectionId
        })
    };
}



//# sourceMappingURL=useSelectableCollection.mjs.map


/***/ },

/***/ 1904
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ $f6ba6936bfd098a0$export$ecf600387e221c37)
/* harmony export */ });
/* harmony import */ var _utils_chain_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96558);
/* harmony import */ var _interactions_focusSafely_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75105);
/* harmony import */ var _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62975);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72711);
/* harmony import */ var _utils_keyboard_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40208);
/* harmony import */ var _utils_isFocusable_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53685);
/* harmony import */ var _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47425);
/* harmony import */ var _focus_virtualFocus_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93653);
/* harmony import */ var _utils_openLink_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46271);
/* harmony import */ var _interactions_usePress_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23580);
/* harmony import */ var _utils_useId_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19633);
/* harmony import */ var _interactions_useLongPress_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9805);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96540);














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












function $f6ba6936bfd098a0$export$ecf600387e221c37(options) {
    let { id: id, selectionManager: manager, key: key, ref: ref, shouldSelectOnPressUp: shouldSelectOnPressUp, shouldUseVirtualFocus: shouldUseVirtualFocus, focus: focus, isDisabled: isDisabled, onAction: onAction, allowsDifferentPressOrigin: allowsDifferentPressOrigin, linkBehavior: linkBehavior = 'action' } = options;
    let router = (0, _utils_openLink_mjs__WEBPACK_IMPORTED_MODULE_8__/* .useRouter */ .rd)();
    id = (0, _utils_useId_mjs__WEBPACK_IMPORTED_MODULE_10__/* .useId */ .Bi)(id);
    let onSelect = (e)=>{
        if (e.pointerType === 'keyboard' && (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_3__/* .isNonContiguousSelectionModifier */ .N9)(e)) manager.toggleSelection(key);
        else {
            if (manager.selectionMode === 'none') return;
            if (manager.isLink(key)) {
                if (linkBehavior === 'selection' && ref.current) {
                    let itemProps = manager.getItemProps(key);
                    router.open(ref.current, e, itemProps.href, itemProps.routerOptions);
                    // Always set selected keys back to what they were so that select and combobox close.
                    manager.setSelectedKeys(manager.selectedKeys);
                    return;
                } else if (linkBehavior === 'override' || linkBehavior === 'none') return;
            }
            if (manager.selectionMode === 'single') {
                if (manager.isSelected(key) && !manager.disallowEmptySelection) manager.toggleSelection(key);
                else manager.replaceSelection(key);
            } else if (e && e.shiftKey) manager.extendSelection(key);
            else if (manager.selectionBehavior === 'toggle' || e && ((0, _utils_keyboard_mjs__WEBPACK_IMPORTED_MODULE_4__/* .isCtrlKeyPressed */ .B)(e) || e.pointerType === 'touch' || e.pointerType === 'virtual')) // if touch or virtual (VO) then we just want to toggle, otherwise it's impossible to multi select because they don't have modifier keys
            manager.toggleSelection(key);
            else manager.replaceSelection(key);
        }
    };
    // Focus the associated DOM node when this item becomes the focusedKey
    // TODO: can't make this useLayoutEffect bacause it breaks menus inside dialogs
    // However, if this is a useEffect, it runs twice and dispatches two blur events and immediately sets
    // aria-activeDescendant in useAutocomplete... I've worked around this for now
    (0, react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{
        let isFocused = key === manager.focusedKey;
        if (isFocused && manager.isFocused) {
            if (!shouldUseVirtualFocus) {
                if (focus) focus();
                else if ((0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getActiveElement */ .bq)() !== ref.current && ref.current) (0, _interactions_focusSafely_mjs__WEBPACK_IMPORTED_MODULE_1__/* .focusSafely */ .l)(ref.current);
            } else (0, _focus_virtualFocus_mjs__WEBPACK_IMPORTED_MODULE_7__/* .moveVirtualFocus */ .vX)(ref.current);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        ref,
        key,
        manager.focusedKey,
        manager.childFocusStrategy,
        manager.isFocused,
        shouldUseVirtualFocus
    ]);
    isDisabled = isDisabled || manager.isDisabled(key);
    // Set tabIndex to 0 if the element is focused, or -1 otherwise so that only the last focused
    // item is tabbable.  If using virtual focus, don't set a tabIndex at all so that VoiceOver
    // on iOS 14 doesn't try to move real DOM focus to the item anyway.
    let itemProps = {};
    if (!shouldUseVirtualFocus && !isDisabled) itemProps = {
        tabIndex: key === manager.focusedKey ? 0 : -1,
        onFocus (e) {
            if ((0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getEventTarget */ .wt)(e) === ref.current) manager.setFocusedKey(key);
        }
    };
    else if (isDisabled) itemProps.onMouseDown = (e)=>{
        // Prevent focus going to the body when clicking on a disabled item.
        e.preventDefault();
    };
    (0, react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{
        if (isDisabled && manager.focusedKey === key) manager.setFocusedKey(null);
    }, [
        manager,
        isDisabled,
        key
    ]);
    // With checkbox selection, onAction (i.e. navigation) becomes primary, and occurs on a single click of the row.
    // Clicking the checkbox enters selection mode, after which clicking anywhere on any row toggles selection for that row.
    // With highlight selection, onAction is secondary, and occurs on double click. Single click selects the row.
    // With touch, onAction occurs on single tap, and long press enters selection mode.
    let isLinkOverride = manager.isLink(key) && linkBehavior === 'override';
    let isActionOverride = onAction && options['UNSTABLE_itemBehavior'] === 'action';
    let hasLinkAction = manager.isLink(key) && linkBehavior !== 'selection' && linkBehavior !== 'none';
    let allowsSelection = !isDisabled && manager.canSelectItem(key) && !isLinkOverride && !isActionOverride;
    let allowsActions = (onAction || hasLinkAction) && !isDisabled;
    let hasPrimaryAction = allowsActions && (manager.selectionBehavior === 'replace' ? !allowsSelection : !allowsSelection || manager.isEmpty);
    let hasSecondaryAction = allowsActions && allowsSelection && manager.selectionBehavior === 'replace';
    let hasAction = hasPrimaryAction || hasSecondaryAction;
    let modality = (0, react__WEBPACK_IMPORTED_MODULE_12__.useRef)(null);
    let longPressEnabled = hasAction && allowsSelection;
    let longPressEnabledOnPressStart = (0, react__WEBPACK_IMPORTED_MODULE_12__.useRef)(false);
    let hadPrimaryActionOnPressStart = (0, react__WEBPACK_IMPORTED_MODULE_12__.useRef)(false);
    let collectionItemProps = manager.getItemProps(key);
    let performAction = (e)=>{
        if (onAction) {
            onAction();
            ref.current?.dispatchEvent(new CustomEvent('react-aria-item-action', {
                bubbles: true
            }));
        }
        if (hasLinkAction && ref.current) router.open(ref.current, e, collectionItemProps.href, collectionItemProps.routerOptions);
    };
    // By default, selection occurs on pointer down. This can be strange if selecting an
    // item causes the UI to disappear immediately (e.g. menus).
    // If shouldSelectOnPressUp is true, we use onPressUp instead of onPressStart.
    // onPress requires a pointer down event on the same element as pointer up. For menus,
    // we want to be able to have the pointer down on the trigger that opens the menu and
    // the pointer up on the menu item rather than requiring a separate press.
    // For keyboard events, selection still occurs on key down.
    let itemPressProps = {
        ref: ref
    };
    if (shouldSelectOnPressUp) {
        // oxlint-disable-next-line react/react-compiler
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            longPressEnabledOnPressStart.current = longPressEnabled;
            if (e.pointerType === 'keyboard' && (!hasAction || $f6ba6936bfd098a0$var$isSelectionKey(e.key))) onSelect(e);
        };
        // If allowsDifferentPressOrigin and interacting with mouse, make selection happen on pressUp (e.g. open menu on press down, selection on menu item happens on press up.)
        // Otherwise, have selection happen onPress (prevents listview row selection when clicking on interactable elements in the row)
        if (!allowsDifferentPressOrigin) // oxlint-disable-next-line react/react-compiler
        itemPressProps.onPress = (e)=>{
            if (hasPrimaryAction || hasSecondaryAction && e.pointerType !== 'mouse') {
                if (e.pointerType === 'keyboard' && !$f6ba6936bfd098a0$var$isActionKey(e.key)) return;
                performAction(e);
            } else if (e.pointerType !== 'keyboard' && allowsSelection) onSelect(e);
        };
        else {
            // oxlint-disable-next-line react/react-compiler
            itemPressProps.onPressUp = hasPrimaryAction ? undefined : (e)=>{
                if (e.pointerType === 'mouse' && allowsSelection) onSelect(e);
            };
            // oxlint-disable-next-line react/react-compiler
            itemPressProps.onPress = hasPrimaryAction ? performAction : (e)=>{
                if (e.pointerType !== 'keyboard' && e.pointerType !== 'mouse' && allowsSelection) onSelect(e);
            };
        }
    } else {
        // oxlint-disable-next-line react/react-compiler
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            longPressEnabledOnPressStart.current = longPressEnabled;
            hadPrimaryActionOnPressStart.current = hasPrimaryAction;
            // Select on mouse down unless there is a primary action which will occur on mouse up.
            // For keyboard, select on key down. If there is an action, the Space key selects on key down,
            // and the Enter key performs onAction on key up.
            if (allowsSelection && (e.pointerType === 'mouse' && !hasPrimaryAction || e.pointerType === 'keyboard' && (!allowsActions || $f6ba6936bfd098a0$var$isSelectionKey(e.key)))) onSelect(e);
        };
        // oxlint-disable-next-line react/react-compiler
        itemPressProps.onPress = (e)=>{
            // Selection occurs on touch up. Primary actions always occur on pointer up.
            // Both primary and secondary actions occur on Enter key up. The only exception
            // is secondary actions, which occur on double click with a mouse.
            if (e.pointerType === 'touch' || e.pointerType === 'pen' || e.pointerType === 'virtual' || e.pointerType === 'keyboard' && hasAction && $f6ba6936bfd098a0$var$isActionKey(e.key) || e.pointerType === 'mouse' && hadPrimaryActionOnPressStart.current) {
                if (hasAction) performAction(e);
                else if (allowsSelection) onSelect(e);
            }
        };
    }
    let collectionId = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_3__/* .getCollectionId */ .EG)(manager.collection);
    itemProps['data-collection'] = collectionId;
    itemProps['data-key'] = key;
    // oxlint-disable-next-line react/react-compiler
    itemPressProps.preventFocusOnPress = shouldUseVirtualFocus;
    // When using virtual focus, make sure the focused key gets updated on press.
    if (shouldUseVirtualFocus) // oxlint-disable-next-line react/react-compiler
    itemPressProps = (0, _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_6__/* .mergeProps */ .v)(itemPressProps, {
        onPressStart (e) {
            if (e.pointerType !== 'touch') {
                manager.setFocused(true);
                manager.setFocusedKey(key);
            }
        },
        onPress (e) {
            if (e.pointerType === 'touch') {
                manager.setFocused(true);
                manager.setFocusedKey(key);
            }
        }
    });
    if (collectionItemProps) {
        for (let key of [
            'onPressStart',
            'onPressEnd',
            'onPressChange',
            'onPress',
            'onPressUp',
            'onClick'
        ])if (collectionItemProps[key]) // oxlint-disable-next-line react/react-compiler
        itemPressProps[key] = (0, _utils_chain_mjs__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .c)(itemPressProps[key], collectionItemProps[key]);
    }
    let { pressProps: pressProps, isPressed: isPressed } = (0, _interactions_usePress_mjs__WEBPACK_IMPORTED_MODULE_9__/* .usePress */ .d)(itemPressProps);
    // Double clicking with a mouse with selectionBehavior = 'replace' performs an action.
    let onDoubleClick = hasSecondaryAction ? (e)=>{
        if (modality.current === 'mouse') {
            e.stopPropagation();
            e.preventDefault();
            performAction(e);
        }
    } : undefined;
    // Long pressing an item with touch when selectionBehavior = 'replace' switches the selection behavior
    // to 'toggle'. This changes the single tap behavior from performing an action (i.e. navigating) to
    // selecting, and may toggle the appearance of a UI affordance like checkboxes on each item.
    let { longPressProps: longPressProps } = (0, _interactions_useLongPress_mjs__WEBPACK_IMPORTED_MODULE_11__/* .useLongPress */ .H)({
        isDisabled: !longPressEnabled,
        onLongPress (e) {
            if (e.pointerType === 'touch') {
                onSelect(e);
                manager.setSelectionBehavior('toggle');
            }
        }
    });
    // Prevent native drag and drop on long press if we also select on long press.
    // Once the user is in selection mode, they can long press again to drag.
    // Use a capturing listener to ensure this runs before useDrag, regardless of
    // the order the props get merged.
    let onDragStartCapture = (e)=>{
        if (modality.current === 'touch' && longPressEnabledOnPressStart.current) e.preventDefault();
    };
    // Prevent default on link clicks so that we control exactly
    // when they open (to match selection behavior).
    let onClick = linkBehavior !== 'none' && manager.isLink(key) ? (e)=>{
        if (!(0, _utils_openLink_mjs__WEBPACK_IMPORTED_MODULE_8__/* .openLink */ .Fe).isOpening) e.preventDefault();
    } : undefined;
    let mergedItemProps = (0, _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_6__/* .mergeProps */ .v)(// oxlint-disable-next-line react/react-compiler
    itemProps, allowsSelection || hasPrimaryAction || shouldUseVirtualFocus && !isDisabled ? pressProps : {}, longPressEnabled ? longPressProps : {}, // oxlint-disable-next-line react/react-compiler
    {
        onDoubleClick: onDoubleClick,
        onDragStartCapture: onDragStartCapture,
        onClick: onClick,
        id: id
    }, // Prevent DOM focus from moving on mouse down when using virtual focus
    shouldUseVirtualFocus ? {
        onMouseDown: (e)=>e.preventDefault()
    } : undefined);
    // Guard against presses triggering selection when they happen on interactive children or collection items from different collections
    // will need to trigger selection if the target is itself a collection item belonging to the same collection parent (aka a cell in a row) but
    // not if the target is a child of a different collections aka taggroup in table cell.
    let isChildInteraction = (target)=>{
        let el = target;
        while(el && el !== ref.current){
            let elCollection = el.getAttribute('data-collection');
            if (elCollection != null) return elCollection !== collectionId;
            el = el.parentElement;
        }
        return (0, _utils_isFocusable_mjs__WEBPACK_IMPORTED_MODULE_5__/* .isTabbable */ .A)(target);
    };
    let baseOnPointerDown = mergedItemProps.onPointerDown;
    mergedItemProps.onPointerDown = (e)=>{
        let target = (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getEventTarget */ .wt)(e);
        if (target && target !== ref.current && isChildInteraction(target)) {
            e.stopPropagation();
            return;
        }
        baseOnPointerDown?.(e);
    };
    let baseOnMouseDown = mergedItemProps.onMouseDown;
    mergedItemProps.onMouseDown = (e)=>{
        let target = (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getEventTarget */ .wt)(e);
        if (target && target !== ref.current && isChildInteraction(target)) {
            e.stopPropagation();
            return;
        }
        baseOnMouseDown?.(e);
    };
    return {
        itemProps: mergedItemProps,
        isPressed: isPressed,
        isSelected: manager.isSelected(key),
        isFocused: manager.isFocused && manager.focusedKey === key,
        isDisabled: isDisabled,
        allowsSelection: allowsSelection,
        hasAction: hasAction
    };
}
function $f6ba6936bfd098a0$var$isActionKey(key) {
    return key === 'Enter';
}
function $f6ba6936bfd098a0$var$isSelectionKey(key) {
    return key === ' ';
}



//# sourceMappingURL=useSelectableItem.mjs.map


/***/ },

/***/ 70353
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ $64903b4b31b6bb2a$export$b95089534ab7c1fd)
/* harmony export */ });
/* harmony import */ var _useSelectableCollection_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68365);
/* harmony import */ var _ListKeyboardDelegate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88430);
/* harmony import */ var _i18n_useCollator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15435);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);





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



function $64903b4b31b6bb2a$export$b95089534ab7c1fd(props) {
    let { selectionManager: selectionManager, collection: collection, disabledKeys: disabledKeys, ref: ref, keyboardDelegate: keyboardDelegate, layoutDelegate: layoutDelegate, orientation: orientation } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = (0, _i18n_useCollator_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useCollator */ .Q)({
        usage: 'search',
        sensitivity: 'base'
    });
    let disabledBehavior = selectionManager.disabledBehavior;
    let delegate = (0, react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>keyboardDelegate || new (0, _ListKeyboardDelegate_mjs__WEBPACK_IMPORTED_MODULE_1__/* .ListKeyboardDelegate */ .n)({
            collection: collection,
            disabledKeys: disabledKeys,
            disabledBehavior: disabledBehavior,
            ref: ref,
            collator: collator,
            layoutDelegate: layoutDelegate,
            orientation: orientation
        }), [
        keyboardDelegate,
        layoutDelegate,
        collection,
        disabledKeys,
        ref,
        collator,
        disabledBehavior,
        orientation
    ]);
    let { collectionProps: collectionProps } = (0, _useSelectableCollection_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useSelectableCollection */ .y)({
        ...props,
        ref: ref,
        selectionManager: selectionManager,
        keyboardDelegate: delegate
    });
    return {
        listProps: collectionProps
    };
}



//# sourceMappingURL=useSelectableList.mjs.map


/***/ },

/***/ 80741
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ $f5a4a9a3486154da$export$e32c88dfddc6e1d8)
/* harmony export */ });
/* harmony import */ var _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62975);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);



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

/**
 * Controls how long to wait before clearing the typeahead buffer.
 */ const $f5a4a9a3486154da$var$TYPEAHEAD_DEBOUNCE_WAIT_MS = 1000; // 1 second
function $f5a4a9a3486154da$export$e32c88dfddc6e1d8(options) {
    let { keyboardDelegate: keyboardDelegate, selectionManager: selectionManager, onTypeSelect: onTypeSelect } = options;
    let state = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
        search: '',
        timeout: undefined
    });
    let onKeyDownCapture = (e)=>{
        // if we're in the middle of a search, then a spacebar should be treated as a search and we should not propagate the event
        // since we handle this one in a capture phase, we should ignore it in the bubble phase
        if (state.current.search.length > 0 && e.key === ' ') {
            e.preventDefault();
            if (!('continuePropagation' in e) || 'continuePropagation' in e && !e.isPropagationStopped()) e.stopPropagation();
            state.current.search += ' ';
            if (keyboardDelegate.getKeyForSearch != null) {
                // Use the delegate to find a key to focus.
                // Prioritize items after the currently focused item, falling back to searching the whole list.
                let key = keyboardDelegate.getKeyForSearch(state.current.search, selectionManager.focusedKey);
                // If no key found, search from the top.
                if (key == null) key = keyboardDelegate.getKeyForSearch(state.current.search);
                if (key != null) {
                    selectionManager.setFocusedKey(key);
                    if (onTypeSelect) onTypeSelect(key);
                }
            }
            clearTimeout(state.current.timeout);
            state.current.timeout = setTimeout(()=>{
                state.current.search = '';
            }, $f5a4a9a3486154da$var$TYPEAHEAD_DEBOUNCE_WAIT_MS);
        }
    };
    let onKeyDown = (e)=>{
        let character = $f5a4a9a3486154da$var$getStringForKey(e.key);
        if (!character || e.ctrlKey || e.metaKey || e.altKey || !(0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .nodeContains */ .sD)(e.currentTarget, (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getEventTarget */ .wt)(e)) || state.current.search.length === 0 && character === ' ') return;
        state.current.search += character;
        if (keyboardDelegate.getKeyForSearch != null) {
            // Use the delegate to find a key to focus.
            // Prioritize items after the currently focused item, falling back to searching the whole list.
            let key = keyboardDelegate.getKeyForSearch(state.current.search, selectionManager.focusedKey);
            if (key == null) key = keyboardDelegate.getKeyForSearch(state.current.search);
            if (key != null) {
                selectionManager.setFocusedKey(key);
                if (onTypeSelect) onTypeSelect(key);
                e.preventDefault();
                if (!('continuePropagation' in e)) e.stopPropagation();
            } else {
                // if still nothing then the type to select is done and everything is reset
                state.current.search = '';
                clearTimeout(state.current.timeout);
                state.current.timeout = undefined;
                return;
            }
        }
        clearTimeout(state.current.timeout);
        state.current.timeout = setTimeout(()=>{
            state.current.search = '';
        }, $f5a4a9a3486154da$var$TYPEAHEAD_DEBOUNCE_WAIT_MS);
    };
    (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let timeout = state.current.timeout;
        return ()=>{
            clearTimeout(timeout);
        };
    }, [
        state
    ]);
    return {
        typeSelectProps: {
            // Using a capturing listener to catch the keydown event before
            // other hooks in order to handle the Spacebar event.
            onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDownCapture : undefined,
            onKeyDown: keyboardDelegate.getKeyForSearch ? onKeyDown : undefined
        }
    };
}
function $f5a4a9a3486154da$var$getStringForKey(key) {
    // If the key is of length 1, it is an ASCII value.
    // Otherwise, if there are no ASCII characters in the key name,
    // it is a Unicode character.
    // See https://www.w3.org/TR/uievents-key/
    if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
    return '';
}



//# sourceMappingURL=useTypeSelect.mjs.map


/***/ },

/***/ 72711
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EG: () => (/* binding */ $22bbea12c2567021$export$6aeb1680a0ae8741),
/* harmony export */   N9: () => (/* binding */ $22bbea12c2567021$export$d3e3bd3e26688c04),
/* harmony export */   au: () => (/* binding */ $22bbea12c2567021$export$c3d8340acf92597f),
/* harmony export */   j5: () => (/* binding */ $22bbea12c2567021$export$881eb0d9f3605d9d)
/* harmony export */ });
/* harmony import */ var _utils_platform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87082);
/* harmony import */ var _utils_useId_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19633);



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

function $22bbea12c2567021$export$d3e3bd3e26688c04(e) {
    // Ctrl + Arrow Up/Arrow Down has a system wide meaning on macOS, so use Alt instead.
    // On Windows and Ubuntu, Alt + Space has a system wide meaning.
    return (0, _utils_platform_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isAppleDevice */ .lg)() ? e.altKey : e.ctrlKey;
}
function $22bbea12c2567021$export$c3d8340acf92597f(collectionRef, key) {
    let selector = `[data-key="${CSS.escape(String(key))}"]`;
    let collection = collectionRef.current?.dataset.collection;
    if (collection) selector = `[data-collection="${CSS.escape(collection)}"]${selector}`;
    return collectionRef.current?.querySelector(selector);
}
const $22bbea12c2567021$var$collectionMap = new WeakMap();
function $22bbea12c2567021$export$881eb0d9f3605d9d(collection) {
    let id = (0, _utils_useId_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Bi)();
    $22bbea12c2567021$var$collectionMap.set(collection, id);
    return id;
}
function $22bbea12c2567021$export$6aeb1680a0ae8741(collection) {
    return $22bbea12c2567021$var$collectionMap.get(collection);
}



//# sourceMappingURL=utils.mjs.map


/***/ },

/***/ 99597
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ $3578607fe3d4b096$export$cfa2225e87938781)
/* harmony export */ });
/* harmony import */ var _isScrollable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38848);


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
function $3578607fe3d4b096$export$cfa2225e87938781(node, checkForOverflow) {
    let scrollableNode = node;
    if ((0, _isScrollable_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isScrollable */ .o)(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
    while(scrollableNode && !(0, _isScrollable_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isScrollable */ .o)(scrollableNode, checkForOverflow))scrollableNode = scrollableNode.parentElement;
    return scrollableNode || document.scrollingElement || document.documentElement;
}



//# sourceMappingURL=getScrollParent.mjs.map


/***/ },

/***/ 38848
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ $901761b40e390936$export$2bb74740c4e19def)
/* harmony export */ });
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
 */ function $901761b40e390936$export$2bb74740c4e19def(node, checkForOverflow) {
    if (!node) return false;
    let style = window.getComputedStyle(node);
    let root = document.scrollingElement || document.documentElement;
    let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
    // Root element has `visible` overflow by default, but is scrollable nonetheless.
    if (node === root && style.overflow !== 'hidden') isScrollable = true;
    if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
    return isScrollable;
}



//# sourceMappingURL=isScrollable.mjs.map


/***/ },

/***/ 40208
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ $bb39c0fc1c19b34c$export$16792effe837dba3),
/* harmony export */   o: () => (/* binding */ $bb39c0fc1c19b34c$export$c57958e35f31ed73)
/* harmony export */ });
/* harmony import */ var _platform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87082);


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
function $bb39c0fc1c19b34c$export$16792effe837dba3(e) {
    if ((0, _platform_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isMac */ .cX)()) return e.metaKey;
    return e.ctrlKey;
}
// HTML input types that do not cause the software keyboard to appear.
const $bb39c0fc1c19b34c$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
function $bb39c0fc1c19b34c$export$c57958e35f31ed73(target) {
    return target instanceof HTMLInputElement && !$bb39c0fc1c19b34c$var$nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}



//# sourceMappingURL=keyboard.mjs.map


/***/ },

/***/ 58796
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* binding */ $51a3e22a5186a962$export$53a0910f038337bd),
  o: () => (/* binding */ $51a3e22a5186a962$export$c826860796309d1b)
});

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/isScrollable.mjs
var isScrollable = __webpack_require__(38848);
;// ./node_modules/react-aria/dist/private/utils/getScrollParents.mjs


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
function $76d97191f0f90600$export$94ed1c92c7beeb22(node, checkForOverflow) {
    let parentElements = [];
    let root = document.scrollingElement || document.documentElement;
    while(node){
        if ((0, isScrollable/* isScrollable */.o)(node, checkForOverflow)) parentElements.push(node);
        if (node === root) break;
        node = node.parentElement;
    }
    return parentElements;
}



//# sourceMappingURL=getScrollParents.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/platform.mjs
var platform = __webpack_require__(87082);
;// ./node_modules/react-aria/dist/private/utils/scrollIntoView.mjs



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

function $51a3e22a5186a962$export$53a0910f038337bd(scrollView, element, opts = {}) {
    let { block: block = 'nearest', inline: inline = 'nearest' } = opts;
    if (scrollView === element) return;
    let y = scrollView.scrollTop;
    let x = scrollView.scrollLeft;
    let target = element.getBoundingClientRect();
    let view = scrollView.getBoundingClientRect();
    let itemStyle = window.getComputedStyle(element);
    let viewStyle = window.getComputedStyle(scrollView);
    let root = document.scrollingElement || document.documentElement;
    let isRoot = scrollView === root;
    let viewTop = scrollView === root ? 0 : view.top;
    let viewBottom = scrollView === root ? scrollView.clientHeight : view.bottom;
    let viewLeft = scrollView === root ? 0 : view.left;
    let viewRight = scrollView === root ? scrollView.clientWidth : view.right;
    let scrollMarginTop = parseFloat(itemStyle.scrollMarginTop) || 0;
    let scrollMarginBottom = parseFloat(itemStyle.scrollMarginBottom) || 0;
    let scrollMarginLeft = parseFloat(itemStyle.scrollMarginLeft) || 0;
    let scrollMarginRight = parseFloat(itemStyle.scrollMarginRight) || 0;
    let scrollPaddingTop = parseFloat(viewStyle.scrollPaddingTop) || 0;
    let scrollPaddingBottom = parseFloat(viewStyle.scrollPaddingBottom) || 0;
    let scrollPaddingLeft = parseFloat(viewStyle.scrollPaddingLeft) || 0;
    let scrollPaddingRight = parseFloat(viewStyle.scrollPaddingRight) || 0;
    let borderTopWidth = parseFloat(viewStyle.borderTopWidth) || 0;
    let borderBottomWidth = parseFloat(viewStyle.borderBottomWidth) || 0;
    let borderLeftWidth = parseFloat(viewStyle.borderLeftWidth) || 0;
    let borderRightWidth = parseFloat(viewStyle.borderRightWidth) || 0;
    let scrollAreaTop = target.top - scrollMarginTop;
    let scrollAreaBottom = target.bottom + scrollMarginBottom;
    let scrollAreaLeft = target.left - scrollMarginLeft;
    let scrollAreaRight = target.right + scrollMarginRight;
    let scrollBarOffsetX = scrollView === root ? 0 : borderLeftWidth + borderRightWidth;
    let scrollBarOffsetY = scrollView === root ? 0 : borderTopWidth + borderBottomWidth;
    let scrollBarWidth = scrollView === root ? 0 : scrollView.offsetWidth - scrollView.clientWidth - scrollBarOffsetX;
    let scrollBarHeight = scrollView === root ? 0 : scrollView.offsetHeight - scrollView.clientHeight - scrollBarOffsetY;
    let scrollPortTop = viewTop + (isRoot ? 0 : borderTopWidth) + scrollPaddingTop;
    let scrollPortBottom = viewBottom - (isRoot ? 0 : borderBottomWidth) - scrollPaddingBottom - scrollBarHeight;
    let scrollPortLeft = viewLeft + (isRoot ? 0 : borderLeftWidth) + scrollPaddingLeft;
    let scrollPortRight = viewRight - (isRoot ? 0 : borderRightWidth) - scrollPaddingRight;
    // WebKit on iOS always positions the scrollbar on the right ¯\_(ツ)_/¯
    if ((0, platform/* isIOS */.un)() && (0, platform/* isWebKit */.Tc)() || viewStyle.direction === 'ltr') scrollPortRight -= scrollBarWidth;
    else if (viewStyle.direction === 'rtl') scrollPortLeft += scrollBarWidth;
    let shouldScrollBlock = scrollAreaTop < scrollPortTop || scrollAreaBottom > scrollPortBottom;
    let shouldScrollInline = scrollAreaLeft < scrollPortLeft || scrollAreaRight > scrollPortRight;
    if (shouldScrollBlock && block === 'start') y += scrollAreaTop - scrollPortTop;
    else if (shouldScrollBlock && block === 'center') y += (scrollAreaTop + scrollAreaBottom) / 2 - (scrollPortTop + scrollPortBottom) / 2;
    else if (shouldScrollBlock && block === 'end') y += scrollAreaBottom - scrollPortBottom;
    else if (shouldScrollBlock && block === 'nearest') {
        let start = scrollAreaTop - scrollPortTop;
        let end = scrollAreaBottom - scrollPortBottom;
        y += Math.abs(start) <= Math.abs(end) ? start : end;
    }
    if (shouldScrollInline && inline === 'start') x += scrollAreaLeft - scrollPortLeft;
    else if (shouldScrollInline && inline === 'center') x += (scrollAreaLeft + scrollAreaRight) / 2 - (scrollPortLeft + scrollPortRight) / 2;
    else if (shouldScrollInline && inline === 'end') x += scrollAreaRight - scrollPortRight;
    else if (shouldScrollInline && inline === 'nearest') {
        let start = scrollAreaLeft - scrollPortLeft;
        let end = scrollAreaRight - scrollPortRight;
        x += Math.abs(start) <= Math.abs(end) ? start : end;
    }
    if (false) // removed by dead control flow
{}
    scrollView.scrollTo({
        left: x,
        top: y
    });
}
function $51a3e22a5186a962$export$c826860796309d1b(targetElement, opts = {}) {
    let { containingElement: containingElement } = opts;
    if (targetElement && targetElement.isConnected) {
        let root = document.scrollingElement || document.documentElement;
        let isScrollPrevented = window.getComputedStyle(root).overflow === 'hidden';
        if (!isScrollPrevented) {
            let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
            // use scrollIntoView({block: 'nearest'}) instead of .focus to check if the element is fully in view or not since .focus()
            // won't cause a scroll if the element is already focused and doesn't behave consistently when an element is partially out of view horizontally vs vertically
            targetElement?.scrollIntoView?.({
                block: 'nearest'
            });
            let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                containingElement?.scrollIntoView?.({
                    block: 'center',
                    inline: 'center'
                });
                targetElement.scrollIntoView?.({
                    block: 'nearest'
                });
            }
        } else {
            let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
            // If scrolling is prevented, we don't want to scroll the body since it might move the overlay partially offscreen and the user can't scroll it back into view.
            let scrollParents = (0, $76d97191f0f90600$export$94ed1c92c7beeb22)(targetElement, true);
            for (let scrollParent of scrollParents)$51a3e22a5186a962$export$53a0910f038337bd(scrollParent, targetElement);
            let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                scrollParents = containingElement ? (0, $76d97191f0f90600$export$94ed1c92c7beeb22)(containingElement, true) : [];
                // scroll containing element into view first, then rescroll target element into view like the non chrome flow above
                for (let scrollParent of scrollParents)$51a3e22a5186a962$export$53a0910f038337bd(scrollParent, containingElement, {
                    block: 'center',
                    inline: 'center'
                });
                for (let scrollParent of (0, $76d97191f0f90600$export$94ed1c92c7beeb22)(targetElement, true))$51a3e22a5186a962$export$53a0910f038337bd(scrollParent, targetElement);
            }
        }
    }
}



//# sourceMappingURL=scrollIntoView.mjs.map


/***/ },

/***/ 67010
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ $121970af65029459$export$f8aeda7b10753fa1)
/* harmony export */ });
/* harmony import */ var _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74441);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);



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

let $121970af65029459$var$descriptionId = 0;
const $121970af65029459$var$descriptionNodes = new Map();
function $121970af65029459$export$f8aeda7b10753fa1(description) {
    let [id, setId] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLayoutEffect */ .N)(()=>{
        if (!description) return;
        let desc = $121970af65029459$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$121970af65029459$var$descriptionId++}`;
            setId(id);
            let node = document.createElement('div');
            node.id = id;
            node.style.display = 'none';
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $121970af65029459$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (desc && --desc.refCount === 0) {
                desc.element.remove();
                $121970af65029459$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        'aria-describedby': description ? id : undefined
    };
}



//# sourceMappingURL=useDescription.mjs.map


/***/ },

/***/ 49644
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ $600b3cf69ae46262$export$90fc3a17d93f704c)
/* harmony export */ });
/* harmony import */ var _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83265);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);



/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $600b3cf69ae46262$export$90fc3a17d93f704c(ref, event, handler, options) {
    let handleEvent = (0, _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useEffectEvent */ .J)(handler);
    let isDisabled = handler == null;
    (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isDisabled || !ref.current) return;
        let element = ref.current;
        element.addEventListener(event, handleEvent, options);
        return ()=>{
            element.removeEventListener(event, handleEvent, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled
    ]);
}



//# sourceMappingURL=useEvent.mjs.map


/***/ },

/***/ 20079
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ $cd5ea4b915021f1d$export$7475b2c64539e4cf),
/* harmony export */   cj: () => (/* binding */ $cd5ea4b915021f1d$export$5f3398f8733f90e2),
/* harmony export */   iQ: () => (/* binding */ $cd5ea4b915021f1d$export$1005530eda016c13),
/* harmony export */   o3: () => (/* binding */ $cd5ea4b915021f1d$export$8c434b3a7a4dad6),
/* harmony export */   ue: () => (/* binding */ $cd5ea4b915021f1d$export$fbdeaa6a76694f71)
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
 */ function $cd5ea4b915021f1d$export$1005530eda016c13(node, collection) {
    // New API: call collection.getChildren with the node key.
    if (typeof collection.getChildren === 'function') return collection.getChildren(node.key);
    // Old API: access childNodes directly.
    return node.childNodes;
}
function $cd5ea4b915021f1d$export$fbdeaa6a76694f71(iterable) {
    return $cd5ea4b915021f1d$export$5f3398f8733f90e2(iterable, 0);
}
function $cd5ea4b915021f1d$export$5f3398f8733f90e2(iterable, index) {
    if (index < 0) return undefined;
    let i = 0;
    for (let item of iterable){
        if (i === index) return item;
        i++;
    }
}
function $cd5ea4b915021f1d$export$7475b2c64539e4cf(iterable) {
    let lastItem = undefined;
    for (let value of iterable)lastItem = value;
    return lastItem;
}
function $cd5ea4b915021f1d$export$8c434b3a7a4dad6(collection, a, b) {
    // If the two nodes have the same parent, compare their indices.
    if (a.parentKey === b.parentKey) return a.index - b.index;
    // Otherwise, collect all of the ancestors from each node, and find the first one that doesn't match starting from the root.
    // Include the base nodes in case we are comparing nodes of different levels so that we can compare the higher node to the lower level node's
    // ancestor of the same level
    let aAncestors = [
        ...$cd5ea4b915021f1d$var$getAncestors(collection, a),
        a
    ];
    let bAncestors = [
        ...$cd5ea4b915021f1d$var$getAncestors(collection, b),
        b
    ];
    let firstNonMatchingAncestor = aAncestors.slice(0, bAncestors.length).findIndex((a, i)=>a !== bAncestors[i]);
    if (firstNonMatchingAncestor !== -1) {
        // Compare the indices of two children within the common ancestor.
        a = aAncestors[firstNonMatchingAncestor];
        b = bAncestors[firstNonMatchingAncestor];
        return a.index - b.index;
    }
    // If there isn't a non matching ancestor, we might be in a case where one of the nodes is the ancestor of the other.
    if (aAncestors.findIndex((node)=>node === b) >= 0) return 1;
    else if (bAncestors.findIndex((node)=>node === a) >= 0) return -1;
    // 🤷
    return -1;
}
function $cd5ea4b915021f1d$var$getAncestors(collection, node) {
    let parents = [];
    let currNode = node;
    while(currNode?.parentKey != null){
        currNode = collection.getItem(currNode.parentKey);
        if (currNode) parents.unshift(currNode);
    }
    return parents;
}



//# sourceMappingURL=getChildNodes.mjs.map


/***/ },

/***/ 68276
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ $2efe10d3f1f9e31e$export$77d5aafae4e095b2)
/* harmony export */ });
/* harmony import */ var _getChildNodes_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20079);


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
const $2efe10d3f1f9e31e$var$cache = new WeakMap();
function $2efe10d3f1f9e31e$export$77d5aafae4e095b2(collection) {
    let count = $2efe10d3f1f9e31e$var$cache.get(collection);
    if (count != null) return count;
    // TS isn't smart enough to know we've ensured count is a number, so use a new variable
    let counter = 0;
    let countItems = (items)=>{
        for (let item of items){
            if (item.type === 'section') countItems((0, _getChildNodes_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getChildNodes */ .iQ)(item, collection));
            else if (item.type === 'item') counter++;
        }
    };
    countItems(collection);
    $2efe10d3f1f9e31e$var$cache.set(collection, counter);
    return counter;
}



//# sourceMappingURL=getItemCount.mjs.map


/***/ },

/***/ 61052
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ $d03379b88399b8c5$export$6cd28814d92fa9c9)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-stately/dist/private/collections/CollectionBuilder.mjs


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
class $bda7a7e55e1ff206$export$bf788dd355e3a401 {
    build(props, context) {
        this.context = context;
        return $bda7a7e55e1ff206$var$iterable(()=>this.iterateCollection(props));
    }
    *iterateCollection(props) {
        let { children: children, items: items } = props;
        if ((0, react).isValidElement(children) && children.type === (0, react).Fragment) yield* this.iterateCollection({
            children: children.props.children,
            items: items
        });
        else if (typeof children === 'function') {
            if (!items) throw new Error('props.children was a function but props.items is missing');
            let index = 0;
            for (let item of items){
                yield* this.getFullNode({
                    value: item,
                    index: index
                }, {
                    renderer: children
                });
                index++;
            }
        } else {
            let items = [];
            (0, react).Children.forEach(children, (child)=>{
                if (child) items.push(child);
            });
            let index = 0;
            for (let item of items){
                let nodes = this.getFullNode({
                    element: item,
                    index: index
                }, {});
                for (let node of nodes){
                    index++;
                    yield node;
                }
            }
        }
    }
    getKey(item, partialNode, state, parentKey) {
        if (item.key != null) return item.key;
        if (partialNode.type === 'cell' && partialNode.key != null) return `${parentKey}${partialNode.key}`;
        let v = partialNode.value;
        if (v != null) {
            let key = v.key ?? v.id;
            if (key == null) throw new Error('No key found for item');
            return key;
        }
        return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
    }
    getChildState(state, partialNode) {
        return {
            renderer: partialNode.renderer || state.renderer
        };
    }
    *getFullNode(partialNode, state, parentKey, parentNode) {
        if ((0, react).isValidElement(partialNode.element) && partialNode.element.type === (0, react).Fragment) {
            let children = [];
            (0, react).Children.forEach(partialNode.element.props.children, (child)=>{
                children.push(child);
            });
            let index = partialNode.index ?? 0;
            for (const child of children)yield* this.getFullNode({
                element: child,
                index: index++
            }, state, parentKey, parentNode);
            return;
        }
        // If there's a value instead of an element on the node, and a parent renderer function is available,
        // use it to render an element for the value.
        let element = partialNode.element;
        if (!element && partialNode.value && state && state.renderer) {
            let cached = this.cache.get(partialNode.value);
            if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
                cached.index = partialNode.index;
                cached.parentKey = parentNode ? parentNode.key : null;
                yield cached;
                return;
            }
            element = state.renderer(partialNode.value);
        }
        // If there's an element with a getCollectionNode function on its type, then it's a supported component.
        // Call this function to get a partial node, and recursively build a full node from there.
        if ((0, react).isValidElement(element)) {
            let type = element.type;
            if (typeof type !== 'function' && typeof type.getCollectionNode !== 'function') {
                let name = element.type;
                throw new Error(`Unknown element <${name}> in collection.`);
            }
            let childNodes = type.getCollectionNode(element.props, this.context);
            let index = partialNode.index ?? 0;
            let result = childNodes.next();
            while(!result.done && result.value){
                let childNode = result.value;
                partialNode.index = index;
                let nodeKey = childNode.key ?? null;
                if (nodeKey == null) nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
                let nodes = this.getFullNode({
                    ...childNode,
                    key: nodeKey,
                    index: index,
                    wrapper: $bda7a7e55e1ff206$var$compose(partialNode.wrapper, childNode.wrapper)
                }, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode);
                let children = [
                    ...nodes
                ];
                for (let node of children){
                    // Cache the node based on its value
                    node.value = childNode.value ?? partialNode.value ?? null;
                    if (node.value) this.cache.set(node.value, node);
                    // The partial node may have specified a type for the child in order to specify a constraint.
                    // Verify that the full node that was built recursively matches this type.
                    if (partialNode.type && node.type !== partialNode.type) throw new Error(`Unsupported type <${$bda7a7e55e1ff206$var$capitalize(node.type)}> in <${$bda7a7e55e1ff206$var$capitalize(parentNode?.type ?? 'unknown parent type')}>. Only <${$bda7a7e55e1ff206$var$capitalize(partialNode.type)}> is supported.`);
                    index++;
                    yield node;
                }
                result = childNodes.next(children);
            }
            return;
        }
        // Ignore invalid elements
        if (partialNode.key == null || partialNode.type == null) return;
        // Create full node
        let builder = this;
        let node = {
            type: partialNode.type,
            props: partialNode.props,
            key: partialNode.key,
            parentKey: parentNode ? parentNode.key : null,
            value: partialNode.value ?? null,
            level: (parentNode?.level ?? 0) + (parentNode?.type === 'item' ? 1 : 0),
            index: partialNode.index,
            rendered: partialNode.rendered,
            textValue: partialNode.textValue ?? '',
            'aria-label': partialNode['aria-label'],
            wrapper: partialNode.wrapper,
            shouldInvalidate: partialNode.shouldInvalidate,
            hasChildNodes: partialNode.hasChildNodes || false,
            childNodes: $bda7a7e55e1ff206$var$iterable(function*() {
                if (!partialNode.hasChildNodes || !partialNode.childNodes) return;
                let index = 0;
                for (let child of partialNode.childNodes()){
                    // Ensure child keys are globally unique by prepending the parent node's key
                    if (child.key != null) // TODO: Remove this line entirely and enforce that users always provide unique keys.
                    // Currently this line will have issues when a parent has a key `a` and a child with key `bc`
                    // but another parent has key `ab` and its child has a key `c`. The combined keys would result in both
                    // children having a key of `abc`.
                    child.key = `${node.key}${child.key}`;
                    let nodes = builder.getFullNode({
                        ...child,
                        index: index
                    }, builder.getChildState(state, child), node.key, node);
                    for (let node of nodes){
                        index++;
                        yield node;
                    }
                }
            })
        };
        yield node;
    }
    constructor(){
        this.cache = new WeakMap();
    }
}
// Wraps an iterator function as an iterable object, and caches the results.
function $bda7a7e55e1ff206$var$iterable(iterator) {
    let cache = [];
    let iterable = null;
    return {
        *[Symbol.iterator] () {
            for (let item of cache)yield item;
            if (!iterable) iterable = iterator();
            for (let item of iterable){
                cache.push(item);
                yield item;
            }
        }
    };
}
function $bda7a7e55e1ff206$var$compose(outer, inner) {
    if (outer && inner) return (element)=>outer(inner(element));
    if (outer) return outer;
    if (inner) return inner;
}
function $bda7a7e55e1ff206$var$capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}



//# sourceMappingURL=CollectionBuilder.mjs.map

;// ./node_modules/react-stately/dist/private/collections/useCollection.mjs



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

function $d03379b88399b8c5$export$6cd28814d92fa9c9(props, factory, context) {
    let builder = (0, react.useMemo)(()=>new (0, $bda7a7e55e1ff206$export$bf788dd355e3a401)(), []);
    let { children: children, items: items, collection: collection } = props;
    let result = (0, react.useMemo)(()=>{
        if (collection) return collection;
        let nodes = builder.build({
            children: children,
            items: items
        }, context);
        return factory(nodes);
    }, [
        builder,
        children,
        items,
        collection,
        context,
        factory
    ]);
    return result;
}



//# sourceMappingURL=useCollection.mjs.map


/***/ },

/***/ 98775
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ $e3403870bfb691da$export$79fefeb1c2091ac3)
/* harmony export */ });
/* harmony import */ var _overlays_useOverlayTriggerState_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42946);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);



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

function $e3403870bfb691da$export$79fefeb1c2091ac3(props) {
    let overlayTriggerState = (0, _overlays_useOverlayTriggerState_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useOverlayTriggerState */ .T)(props);
    let [focusStrategy, setFocusStrategy] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    let [expandedKeysStack, setExpandedKeysStack] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    let closeAll = ()=>{
        setExpandedKeysStack([]);
        overlayTriggerState.close();
    };
    let openSubmenu = (triggerKey, level)=>{
        setExpandedKeysStack((oldStack)=>{
            if (level > oldStack.length) return oldStack;
            return [
                ...oldStack.slice(0, level),
                triggerKey
            ];
        });
    };
    let closeSubmenu = (triggerKey, level)=>{
        setExpandedKeysStack((oldStack)=>{
            let key = oldStack[level];
            if (key === triggerKey) return oldStack.slice(0, level);
            else return oldStack;
        });
    };
    return {
        focusStrategy: focusStrategy,
        ...overlayTriggerState,
        open (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.open();
        },
        toggle (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.toggle();
        },
        close () {
            closeAll();
        },
        expandedKeysStack: expandedKeysStack,
        openSubmenu: openSubmenu,
        closeSubmenu: closeSubmenu
    };
}



//# sourceMappingURL=useMenuTriggerState.mjs.map


/***/ },

/***/ 48661
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ $8b2540e09867b15e$export$52baac22726c72bf)
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
 */ class $8b2540e09867b15e$export$52baac22726c72bf extends Set {
    constructor(keys, anchorKey, currentKey){
        super(keys);
        if (keys instanceof $8b2540e09867b15e$export$52baac22726c72bf) {
            this.anchorKey = anchorKey ?? keys.anchorKey;
            this.currentKey = currentKey ?? keys.currentKey;
        } else {
            this.anchorKey = anchorKey ?? null;
            this.currentKey = currentKey ?? null;
        }
    }
}



//# sourceMappingURL=Selection.mjs.map


/***/ },

/***/ 93854
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ $4a07ac835f260f78$export$6c8a5aaad13c9852)
/* harmony export */ });
/* harmony import */ var _collections_getChildNodes_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20079);
/* harmony import */ var _Selection_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48661);



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

class $4a07ac835f260f78$export$6c8a5aaad13c9852 {
    constructor(collection, state, options){
        this.collection = collection;
        this.state = state;
        this.allowsCellSelection = options?.allowsCellSelection ?? false;
        this._isSelectAll = null;
        this.layoutDelegate = options?.layoutDelegate || null;
        this.fullCollection = options?.fullCollection || null;
    }
    /**
   * The type of selection that is allowed in the collection.
   */ get selectionMode() {
        return this.state.selectionMode;
    }
    /**
   * Whether the collection allows empty selection.
   */ get disallowEmptySelection() {
        return this.state.disallowEmptySelection;
    }
    /**
   * The selection behavior for the collection.
   */ get selectionBehavior() {
        return this.state.selectionBehavior;
    }
    /**
   * Sets the selection behavior for the collection.
   */ setSelectionBehavior(selectionBehavior) {
        this.state.setSelectionBehavior(selectionBehavior);
    }
    /**
   * Whether the collection is currently focused.
   */ get isFocused() {
        return this.state.isFocused;
    }
    /**
   * Sets whether the collection is focused.
   */ setFocused(isFocused) {
        this.state.setFocused(isFocused);
    }
    /**
   * The current focused key in the collection.
   */ get focusedKey() {
        return this.state.focusedKey;
    }
    /** Whether the first or last child of the focused key should receive focus. */ get childFocusStrategy() {
        return this.state.childFocusStrategy;
    }
    /**
   * Sets the focused key.
   */ setFocusedKey(key, childFocusStrategy) {
        if (key == null || this.collection.getItem(key)) this.state.setFocusedKey(key, childFocusStrategy);
    }
    /**
   * The currently selected keys in the collection.
   */ get selectedKeys() {
        return this.state.selectedKeys === 'all' ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
    }
    /**
   * The raw selection value for the collection.
   * Either 'all' for select all, or a set of keys.
   */ get rawSelection() {
        return this.state.selectedKeys;
    }
    /**
   * Returns whether a key is selected.
   */ isSelected(key) {
        if (this.state.selectionMode === 'none') return false;
        let mappedKey = this.getKey(key);
        if (mappedKey == null) return false;
        return this.state.selectedKeys === 'all' ? this.canSelectItem(mappedKey) : this.state.selectedKeys.has(mappedKey);
    }
    /**
   * Whether the selection is empty.
   */ get isEmpty() {
        return this.state.selectedKeys !== 'all' && this.state.selectedKeys.size === 0;
    }
    /**
   * Whether all items in the collection are selected.
   */ get isSelectAll() {
        if (this.isEmpty) return false;
        if (this.state.selectedKeys === 'all') return true;
        if (this._isSelectAll != null) return this._isSelectAll;
        let allKeys = this.getSelectAllKeys();
        let selectedKeys = this.state.selectedKeys;
        this._isSelectAll = allKeys.every((k)=>selectedKeys.has(k));
        return this._isSelectAll;
    }
    get firstSelectedKey() {
        let first = null;
        for (let key of this.state.selectedKeys){
            let item = this.collection.getItem(key);
            if (!first || item && (0, _collections_getChildNodes_mjs__WEBPACK_IMPORTED_MODULE_0__/* .compareNodeOrder */ .o3)(this.collection, item, first) < 0) first = item;
        }
        return first?.key ?? null;
    }
    get lastSelectedKey() {
        let last = null;
        for (let key of this.state.selectedKeys){
            let item = this.collection.getItem(key);
            if (!last || item && (0, _collections_getChildNodes_mjs__WEBPACK_IMPORTED_MODULE_0__/* .compareNodeOrder */ .o3)(this.collection, item, last) > 0) last = item;
        }
        return last?.key ?? null;
    }
    get disabledKeys() {
        return this.state.disabledKeys;
    }
    get disabledBehavior() {
        return this.state.disabledBehavior;
    }
    /**
   * Extends the selection to the given key.
   */ extendSelection(toKey) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single') {
            this.replaceSelection(toKey);
            return;
        }
        let mappedToKey = this.getKey(toKey);
        if (mappedToKey == null) return;
        let selection;
        // Only select the one key if coming from a select all.
        if (this.state.selectedKeys === 'all') selection = new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .L)([
            mappedToKey
        ], mappedToKey, mappedToKey);
        else {
            let selectedKeys = this.state.selectedKeys;
            let anchorKey = selectedKeys.anchorKey ?? mappedToKey;
            selection = new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .L)(selectedKeys, anchorKey, mappedToKey);
            for (let key of this.getKeyRange(anchorKey, selectedKeys.currentKey ?? mappedToKey))selection.delete(key);
            for (let key of this.getKeyRange(mappedToKey, anchorKey))if (this.canSelectItem(key)) selection.add(key);
        }
        this.state.setSelectedKeys(selection);
    }
    getKeyRange(from, to) {
        let fromItem = this.collection.getItem(from);
        let toItem = this.collection.getItem(to);
        if (fromItem && toItem) {
            if ((0, _collections_getChildNodes_mjs__WEBPACK_IMPORTED_MODULE_0__/* .compareNodeOrder */ .o3)(this.collection, fromItem, toItem) <= 0) return this.getKeyRangeInternal(from, to);
            return this.getKeyRangeInternal(to, from);
        }
        return [];
    }
    getKeyRangeInternal(from, to) {
        if (this.layoutDelegate?.getKeyRange) return this.layoutDelegate.getKeyRange(from, to);
        let keys = [];
        let key = from;
        while(key != null){
            let item = this.collection.getItem(key);
            if (item && (item.type === 'item' || item.type === 'cell' && this.allowsCellSelection)) keys.push(key);
            if (key === to) return keys;
            key = this.collection.getKeyAfter(key);
        }
        return [];
    }
    getKey(key) {
        let item = this.collection.getItem(key);
        if (!item) // ¯\_(ツ)_/¯
        return key;
        // If cell selection is allowed, just return the key.
        if (item.type === 'cell' && this.allowsCellSelection) return key;
        // Find a parent item to select
        while(item && item.type !== 'item' && item.parentKey != null)item = this.collection.getItem(item.parentKey);
        if (!item || item.type !== 'item') return null;
        return item.key;
    }
    /**
   * Toggles whether the given key is selected.
   */ toggleSelection(key) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single' && !this.isSelected(key)) {
            this.replaceSelection(key);
            return;
        }
        let mappedKey = this.getKey(key);
        if (mappedKey == null) return;
        let keys = new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .L)(this.state.selectedKeys === 'all' ? this.getSelectAllKeys() : this.state.selectedKeys);
        if (keys.has(mappedKey)) keys.delete(mappedKey);
        else if (this.canSelectItem(mappedKey)) {
            keys.add(mappedKey);
            keys.anchorKey = mappedKey;
            keys.currentKey = mappedKey;
        }
        if (this.disallowEmptySelection && keys.size === 0) return;
        this.state.setSelectedKeys(keys);
    }
    /**
   * Replaces the selection with only the given key.
   */ replaceSelection(key) {
        if (this.selectionMode === 'none') return;
        let mappedKey = this.getKey(key);
        if (mappedKey == null) return;
        let selection = this.canSelectItem(mappedKey) ? new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .L)([
            mappedKey
        ], mappedKey, mappedKey) : new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .L)();
        this.state.setSelectedKeys(selection);
    }
    /**
   * Replaces the selection with the given keys.
   */ setSelectedKeys(keys) {
        if (this.selectionMode === 'none') return;
        let selection = new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .L)();
        for (let key of keys){
            let mappedKey = this.getKey(key);
            if (mappedKey != null) {
                selection.add(mappedKey);
                if (this.selectionMode === 'single') break;
            }
        }
        this.state.setSelectedKeys(selection);
    }
    getSelectAllKeys() {
        // Use the full (unfiltered) collection when available so that materializing
        // the 'all' selection includes items that are currently filtered out (e.g. by Autocomplete).
        let collection = this.fullCollection ?? this.collection;
        let keys = [];
        let addKeys = (key)=>{
            while(key != null){
                if (this.canSelectItemIn(key, collection)) {
                    let item = collection.getItem(key);
                    if (item?.type === 'item') keys.push(key);
                    // Add child keys. If cell selection is allowed, then include item children too.
                    if (item?.hasChildNodes && (this.allowsCellSelection || item.type !== 'item')) addKeys((0, _collections_getChildNodes_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getFirstItem */ .ue)((0, _collections_getChildNodes_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getChildNodes */ .iQ)(item, collection))?.key ?? null);
                }
                key = collection.getKeyAfter(key);
            }
        };
        addKeys(collection.getFirstKey());
        return keys;
    }
    /**
   * Selects all items in the collection.
   */ selectAll() {
        if (!this.isSelectAll && this.selectionMode === 'multiple') this.state.setSelectedKeys('all');
    }
    /**
   * Removes all keys from the selection.
   */ clearSelection() {
        if (!this.disallowEmptySelection && (this.state.selectedKeys === 'all' || this.state.selectedKeys.size > 0)) this.state.setSelectedKeys(new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .L)());
    }
    /**
   * Toggles between select all and an empty selection.
   */ toggleSelectAll() {
        if (this.isSelectAll) this.clearSelection();
        else this.selectAll();
    }
    select(key, e) {
        if (this.selectionMode === 'none') return;
        if (this.selectionMode === 'single') {
            if (this.isSelected(key) && !this.disallowEmptySelection) this.toggleSelection(key);
            else this.replaceSelection(key);
        } else if (this.selectionBehavior === 'toggle' || e && (e.pointerType === 'touch' || e.pointerType === 'virtual')) // if touch or virtual (VO) then we just want to toggle, otherwise it's impossible to multi select because they don't have modifier keys
        this.toggleSelection(key);
        else this.replaceSelection(key);
    }
    /**
   * Returns whether the current selection is equal to the given selection.
   */ isSelectionEqual(selection) {
        if (selection === this.state.selectedKeys) return true;
        // Check if the set of keys match.
        let selectedKeys = this.selectedKeys;
        if (selection.size !== selectedKeys.size) return false;
        for (let key of selection){
            if (!selectedKeys.has(key)) return false;
        }
        for (let key of selectedKeys){
            if (!selection.has(key)) return false;
        }
        return true;
    }
    canSelectItem(key) {
        return this.canSelectItemIn(key, this.collection);
    }
    canSelectItemIn(key, collection) {
        if (this.state.selectionMode === 'none' || this.state.disabledKeys.has(key)) return false;
        let item = collection.getItem(key);
        if (!item || item?.props?.isDisabled || item.type === 'cell' && !this.allowsCellSelection) return false;
        return true;
    }
    isDisabled(key) {
        let item = this.collection.getItem(key);
        return this.state.disabledBehavior === 'all' && (this.state.disabledKeys.has(key) || !!item?.props?.isDisabled) && item?.props?.disabledBehavior !== 'selection';
    }
    isLink(key) {
        return !!this.collection.getItem(key)?.props?.href;
    }
    getItemProps(key) {
        return this.collection.getItem(key)?.props;
    }
    withCollection(collection) {
        return new $4a07ac835f260f78$export$6c8a5aaad13c9852(collection, this.state, {
            allowsCellSelection: this.allowsCellSelection,
            layoutDelegate: this.layoutDelegate || undefined,
            fullCollection: this.fullCollection ?? this.collection
        });
    }
}



//# sourceMappingURL=SelectionManager.mjs.map


/***/ },

/***/ 74219
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ $60f19cefd567a3e4$export$253fe78d46329472)
/* harmony export */ });
/* harmony import */ var _Selection_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48661);
/* harmony import */ var _utils_useControlledState_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32240);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);




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


function $60f19cefd567a3e4$var$equalSets(setA, setB) {
    if (setA.size !== setB.size) return false;
    for (let item of setA){
        if (!setB.has(item)) return false;
    }
    return true;
}
function $60f19cefd567a3e4$export$253fe78d46329472(props) {
    let { selectionMode: selectionMode = 'none', disallowEmptySelection: disallowEmptySelection = false, allowDuplicateSelectionEvents: allowDuplicateSelectionEvents, selectionBehavior: selectionBehaviorProp = 'toggle', disabledBehavior: disabledBehavior = 'all' } = props;
    // We want synchronous updates to `isFocused` and `focusedKey` after their setters are called.
    // But we also need to trigger a react re-render. So, we have both a ref (sync) and state (async).
    let isFocusedRef = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
    let [, setFocused] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    let focusedKeyRef = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    let childFocusStrategyRef = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    let [, setFocusedKey] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    let selectedKeysProp = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>$60f19cefd567a3e4$var$convertSelection(props.selectedKeys), [
        props.selectedKeys
    ]);
    let defaultSelectedKeys = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>$60f19cefd567a3e4$var$convertSelection(props.defaultSelectedKeys, new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .L)()), [
        props.defaultSelectedKeys
    ]);
    let [selectedKeys, setSelectedKeys] = (0, _utils_useControlledState_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useControlledState */ .P)(selectedKeysProp, defaultSelectedKeys, props.onSelectionChange);
    let disabledKeysProp = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let [selectionBehavior, setSelectionBehavior] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(selectionBehaviorProp);
    // If the selectionBehavior prop is set to replace, but the current state is toggle (e.g. due to long press
    // to enter selection mode on touch), and the selection becomes empty, reset the selection behavior.
    if (selectionBehaviorProp === 'replace' && selectionBehavior === 'toggle' && typeof selectedKeys === 'object' && selectedKeys.size === 0) setSelectionBehavior('replace');
    // If the selectionBehavior prop changes, update the state as well.
    let lastSelectionBehavior = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(selectionBehaviorProp);
    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (selectionBehaviorProp !== lastSelectionBehavior.current) {
            setSelectionBehavior(selectionBehaviorProp);
            lastSelectionBehavior.current = selectionBehaviorProp;
        }
    }, [
        selectionBehaviorProp
    ]);
    return {
        selectionMode: selectionMode,
        disallowEmptySelection: disallowEmptySelection,
        selectionBehavior: selectionBehavior,
        setSelectionBehavior: setSelectionBehavior,
        get isFocused () {
            return isFocusedRef.current;
        },
        setFocused (f) {
            isFocusedRef.current = f;
            setFocused(f);
        },
        get focusedKey () {
            return focusedKeyRef.current;
        },
        get childFocusStrategy () {
            return childFocusStrategyRef.current;
        },
        setFocusedKey (k, childFocusStrategy = 'first') {
            focusedKeyRef.current = k;
            childFocusStrategyRef.current = childFocusStrategy;
            setFocusedKey(k);
        },
        selectedKeys: selectedKeys,
        setSelectedKeys (keys) {
            if (allowDuplicateSelectionEvents || !$60f19cefd567a3e4$var$equalSets(keys, selectedKeys)) setSelectedKeys(keys);
        },
        disabledKeys: disabledKeysProp,
        disabledBehavior: disabledBehavior
    };
}
function $60f19cefd567a3e4$var$convertSelection(selection, defaultValue) {
    if (!selection) return defaultValue;
    return selection === 'all' ? 'all' : new (0, _Selection_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .L)(selection);
}



//# sourceMappingURL=useMultipleSelectionState.mjs.map


/***/ }

}]);