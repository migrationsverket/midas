"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5489],{

/***/ 45773
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Check)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("check", __iconNode);


//# sourceMappingURL=check.js.map


/***/ },

/***/ 97213
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Info)
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
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("info", __iconNode);


//# sourceMappingURL=info.js.map


/***/ },

/***/ 20454
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _objectDestructuringEmpty)
/* harmony export */ });
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}


/***/ },

/***/ 54158
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ $75afe627ae0cc0fa$export$d2b052e7b4be1756)
/* harmony export */ });
/* unused harmony export ToggleButtonContext */
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95841);
/* harmony import */ var _SelectionIndicator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17863);
/* harmony import */ var _ToggleButtonGroup_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95132);
/* harmony import */ var react_aria_useToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71397);
/* harmony import */ var react_aria_filterDOMProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46683);
/* harmony import */ var react_aria_mergeProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47425);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96540);
/* harmony import */ var react_stately_useToggleState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8895);
/* harmony import */ var react_aria_useFocusRing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66683);
/* harmony import */ var react_aria_useHover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68068);
/* harmony import */ var react_aria_useToggleButtonGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49184);












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










const $75afe627ae0cc0fa$export$43506d75ebd2e218 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_6__.createContext)({});
const $75afe627ae0cc0fa$export$d2b052e7b4be1756 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function ToggleButton(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $75afe627ae0cc0fa$export$43506d75ebd2e218);
    let groupState = (0, react__WEBPACK_IMPORTED_MODULE_6__.useContext)((0, _ToggleButtonGroup_mjs__WEBPACK_IMPORTED_MODULE_2__/* .ToggleGroupStateContext */ .G0));
    let state = (0, react_stately_useToggleState__WEBPACK_IMPORTED_MODULE_7__/* .useToggleState */ .H)(groupState && props.id != null ? {
        isSelected: groupState.selectedKeys.has(props.id),
        onChange (isSelected) {
            groupState.setSelected(props.id, isSelected);
        }
    } : props);
    let { buttonProps: buttonProps, isPressed: isPressed, isSelected: isSelected, isDisabled: isDisabled } = groupState && props.id != null ? (0, react_aria_useToggleButtonGroup__WEBPACK_IMPORTED_MODULE_10__/* .useToggleButtonGroupItem */ .O)({
        ...props,
        id: props.id
    }, groupState, ref) : (0, react_aria_useToggleButton__WEBPACK_IMPORTED_MODULE_3__/* .useToggleButton */ .q)({
        ...props,
        id: props.id != null ? String(props.id) : undefined
    }, state, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, react_aria_useFocusRing__WEBPACK_IMPORTED_MODULE_8__/* .useFocusRing */ .o)(props);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria_useHover__WEBPACK_IMPORTED_MODULE_9__/* .useHover */ .M)({
        ...props,
        isDisabled: isDisabled
    });
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useRenderProps */ .Sl)({
        ...props,
        id: undefined,
        values: {
            isHovered: isHovered,
            isPressed: isPressed,
            isFocused: isFocused,
            isSelected: state.isSelected,
            isFocusVisible: isFocusVisible,
            isDisabled: isDisabled,
            state: state
        },
        defaultClassName: 'react-aria-ToggleButton'
    });
    let DOMProps = (0, react_aria_filterDOMProps__WEBPACK_IMPORTED_MODULE_4__/* .filterDOMProps */ .$)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_6__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT).button, {
        ...(0, react_aria_mergeProps__WEBPACK_IMPORTED_MODULE_5__/* .mergeProps */ .v)(DOMProps, renderProps, buttonProps, focusProps, hoverProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": isFocused || undefined,
        "data-disabled": isDisabled || undefined,
        "data-pressed": isPressed || undefined,
        "data-selected": isSelected || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_6__).createElement((0, _SelectionIndicator_mjs__WEBPACK_IMPORTED_MODULE_1__/* .SelectionIndicatorContext */ .r).Provider, {
        value: {
            isSelected: isSelected
        }
    }, renderProps.children));
});



//# sourceMappingURL=ToggleButton.mjs.map


/***/ },

/***/ 95132
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  WK: () => (/* binding */ $bc25b811ec97a172$export$40258cc1d95ff477),
  G0: () => (/* binding */ $bc25b811ec97a172$export$a8a71863db173133)
});

// UNUSED EXPORTS: ToggleButtonGroupContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/SharedElementTransition.mjs
var SharedElementTransition = __webpack_require__(17062);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/button/useToggleButtonGroup.mjs + 1 modules
var useToggleButtonGroup = __webpack_require__(49184);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/utils/useControlledState.mjs
var useControlledState = __webpack_require__(32240);
;// ./node_modules/react-stately/dist/private/toggle/useToggleGroupState.mjs



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

function $3d8ad31c4c1725e9$export$8deac67f4addf270(props) {
    let { selectionMode: selectionMode = 'single', disallowEmptySelection: disallowEmptySelection, isDisabled: isDisabled = false } = props;
    let [selectedKeys, setSelectedKeys] = (0, useControlledState/* useControlledState */.P)((0, react.useMemo)(()=>props.selectedKeys ? new Set(props.selectedKeys) : undefined, [
        props.selectedKeys
    ]), (0, react.useMemo)(()=>props.defaultSelectedKeys ? new Set(props.defaultSelectedKeys) : new Set(), [
        props.defaultSelectedKeys
    ]), props.onSelectionChange);
    return {
        selectionMode: selectionMode,
        isDisabled: isDisabled,
        selectedKeys: selectedKeys,
        setSelectedKeys: setSelectedKeys,
        toggleKey (key) {
            let keys;
            if (selectionMode === 'multiple') {
                keys = new Set(selectedKeys);
                if (keys.has(key) && (!disallowEmptySelection || keys.size > 1)) keys.delete(key);
                else keys.add(key);
            } else keys = new Set(selectedKeys.has(key) && !disallowEmptySelection ? [] : [
                key
            ]);
            setSelectedKeys(keys);
        },
        setSelected (key, isSelected) {
            if (isSelected !== selectedKeys.has(key)) this.toggleKey(key);
        }
    };
}



//# sourceMappingURL=useToggleGroupState.mjs.map

;// ./node_modules/react-aria-components/dist/private/ToggleButtonGroup.mjs








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






const $bc25b811ec97a172$export$298258635ae0dd97 = /*#__PURE__*/ (0, react.createContext)({});
const $bc25b811ec97a172$export$a8a71863db173133 = /*#__PURE__*/ (0, react.createContext)(null);
const $bc25b811ec97a172$export$40258cc1d95ff477 = /*#__PURE__*/ (0, react.forwardRef)(function ToggleButtonGroup(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $bc25b811ec97a172$export$298258635ae0dd97);
    let state = (0, $3d8ad31c4c1725e9$export$8deac67f4addf270)(props);
    let { groupProps: groupProps } = (0, useToggleButtonGroup/* useToggleButtonGroup */.$)(props, state, ref);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        values: {
            orientation: props.orientation || 'horizontal',
            isDisabled: state.isDisabled,
            state: state
        },
        defaultClassName: 'react-aria-ToggleButtonGroup'
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, groupProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-orientation": props.orientation || 'horizontal',
        "data-disabled": props.isDisabled || undefined
    }, /*#__PURE__*/ (0, react).createElement($bc25b811ec97a172$export$a8a71863db173133.Provider, {
        value: state
    }, /*#__PURE__*/ (0, react).createElement((0, SharedElementTransition/* SharedElementTransition */.D), null, renderProps.children)));
});



//# sourceMappingURL=ToggleButtonGroup.mjs.map


/***/ },

/***/ 71397
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ $b54a524c670b905d$export$51e84d46ca0bc451)
/* harmony export */ });
/* harmony import */ var _useButton_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96645);
/* harmony import */ var _utils_chain_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96558);
/* harmony import */ var _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47425);




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


function $b54a524c670b905d$export$51e84d46ca0bc451(props, state, ref) {
    const { isSelected: isSelected } = state;
    const { isPressed: isPressed, buttonProps: buttonProps } = (0, _useButton_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useButton */ .s)({
        ...props,
        onPress: (0, _utils_chain_mjs__WEBPACK_IMPORTED_MODULE_1__/* .chain */ .c)(state.toggle, props.onPress)
    }, ref);
    return {
        isPressed: isPressed,
        isSelected: isSelected,
        isDisabled: props.isDisabled || false,
        buttonProps: (0, _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(buttonProps, {
            'aria-pressed': isSelected
        })
    };
}



//# sourceMappingURL=useToggleButton.mjs.map


/***/ },

/***/ 49184
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ $162557ba4d6f08dd$export$dd5580ae642f110f),
  O: () => (/* binding */ $162557ba4d6f08dd$export$bc53712daae3d6e6)
});

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/button/useToggleButton.mjs
var useToggleButton = __webpack_require__(71397);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/FocusScope.mjs
var FocusScope = __webpack_require__(46686);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(62975);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(74441);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/I18nProvider.mjs + 2 modules
var I18nProvider = __webpack_require__(78352);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria/dist/private/toolbar/useToolbar.mjs







/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





function $afa781ff67c1cd08$export$fa142eb1681c520(props, ref) {
    const { 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, orientation: orientation = 'horizontal' } = props;
    let [isInToolbar, setInToolbar] = (0, react.useState)(false);
    // should be safe because re-calling set state with the same value it already has is a no-op
    // this will allow us to react should a parent re-render and change its role though
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        setInToolbar(!!(ref.current && ref.current.parentElement?.closest('[role="toolbar"]')));
    });
    const { direction: direction } = (0, I18nProvider/* useLocale */.Y)();
    const shouldReverse = direction === 'rtl' && orientation === 'horizontal';
    // oxlint-disable-next-line react/react-compiler
    let focusManager = (0, FocusScope/* createFocusManager */.C7)(ref);
    const onKeyDown = (e)=>{
        // don't handle portalled events
        if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e))) return;
        if (orientation === 'horizontal' && e.key === 'ArrowRight' || orientation === 'vertical' && e.key === 'ArrowDown') {
            if (shouldReverse) focusManager.focusPrevious();
            else focusManager.focusNext();
        } else if (orientation === 'horizontal' && e.key === 'ArrowLeft' || orientation === 'vertical' && e.key === 'ArrowUp') {
            if (shouldReverse) focusManager.focusNext();
            else focusManager.focusPrevious();
        } else if (e.key === 'Tab') {
            // When the tab key is pressed, we want to move focus
            // out of the entire toolbar. To do this, move focus
            // to the first or last focusable child, and let the
            // browser handle the Tab key as usual from there.
            lastFocused.current = (0, DOMFunctions/* getActiveElement */.bq)();
            if (e.shiftKey) focusManager.focusFirst();
            else focusManager.focusLast();
            return;
        } else // if we didn't handle anything, return early so we don't preventDefault
        return;
        // Prevent arrow keys from being handled by nested action groups.
        e.stopPropagation();
        e.preventDefault();
    };
    // Record the last focused child when focus moves out of the toolbar.
    const lastFocused = (0, react.useRef)(null);
    const onBlur = (e)=>{
        if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, e.relatedTarget) && !lastFocused.current) lastFocused.current = (0, DOMFunctions/* getEventTarget */.wt)(e);
    };
    // Restore focus to the last focused child when focus returns into the toolbar.
    // If the element was removed, do nothing, either the first item in the first group,
    // or the last item in the last group will be focused, depending on direction.
    const onFocus = (e)=>{
        if (lastFocused.current && !(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, e.relatedTarget) && (0, DOMFunctions/* nodeContains */.sD)(ref.current, (0, DOMFunctions/* getEventTarget */.wt)(e))) {
            lastFocused.current?.focus();
            lastFocused.current = null;
        }
    };
    return {
        toolbarProps: {
            ...(0, filterDOMProps/* filterDOMProps */.$)(props, {
                labelable: true
            }),
            role: !isInToolbar ? 'toolbar' : 'group',
            'aria-orientation': orientation,
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabel == null ? ariaLabelledBy : undefined,
            onKeyDownCapture: !isInToolbar ? onKeyDown : undefined,
            onFocusCapture: !isInToolbar ? onFocus : undefined,
            onBlurCapture: !isInToolbar ? onBlur : undefined
        }
    };
}



//# sourceMappingURL=useToolbar.mjs.map

;// ./node_modules/react-aria/dist/private/button/useToggleButtonGroup.mjs



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

function $162557ba4d6f08dd$export$dd5580ae642f110f(props, state, ref) {
    let { isDisabled: isDisabled } = props;
    let { toolbarProps: toolbarProps } = (0, $afa781ff67c1cd08$export$fa142eb1681c520)(props, ref);
    return {
        groupProps: {
            ...toolbarProps,
            role: state.selectionMode === 'single' ? 'radiogroup' : toolbarProps.role,
            'aria-disabled': isDisabled
        }
    };
}
function $162557ba4d6f08dd$export$bc53712daae3d6e6(props, state, ref) {
    let toggleState = {
        isSelected: state.selectedKeys.has(props.id),
        defaultSelected: false,
        setSelected (isSelected) {
            state.setSelected(props.id, isSelected);
        },
        toggle () {
            state.toggleKey(props.id);
        }
    };
    let { isPressed: isPressed, isSelected: isSelected, isDisabled: isDisabled, buttonProps: buttonProps } = (0, useToggleButton/* useToggleButton */.q)({
        ...props,
        id: undefined,
        isDisabled: props.isDisabled || state.isDisabled
    }, toggleState, ref);
    if (state.selectionMode === 'single') {
        // oxlint-disable-next-line react/react-compiler
        buttonProps.role = 'radio';
        // oxlint-disable-next-line react/react-compiler
        buttonProps['aria-checked'] = toggleState.isSelected;
        // oxlint-disable-next-line react/react-compiler
        delete buttonProps['aria-pressed'];
    }
    return {
        isPressed: isPressed,
        isSelected: isSelected,
        isDisabled: isDisabled,
        buttonProps: buttonProps
    };
}



//# sourceMappingURL=useToggleButtonGroup.mjs.map


/***/ }

}]);