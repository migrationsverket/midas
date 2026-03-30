"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2349],{

/***/ 2214
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ $4547d1bf40011fdf$export$dd5580ae642f110f),
  O: () => (/* binding */ $4547d1bf40011fdf$export$bc53712daae3d6e6)
});

// EXTERNAL MODULE: ./node_modules/@react-aria/button/dist/useToggleButton.mjs
var useToggleButton = __webpack_require__(89869);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs
var FocusScope = __webpack_require__(85652);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(49953);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(99672);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
;// ./node_modules/@react-aria/toolbar/dist/useToolbar.mjs





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



function $2680b1829e803644$export$fa142eb1681c520(props, ref) {
    const { 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, orientation: orientation = 'horizontal' } = props;
    let [isInToolbar, setInToolbar] = (0, react.useState)(false);
    // should be safe because re-calling set state with the same value it already has is a no-op
    // this will allow us to react should a parent re-render and change its role though
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        var _ref_current_parentElement;
        setInToolbar(!!(ref.current && ((_ref_current_parentElement = ref.current.parentElement) === null || _ref_current_parentElement === void 0 ? void 0 : _ref_current_parentElement.closest('[role="toolbar"]'))));
    });
    const { direction: direction } = (0, context/* useLocale */.Y)();
    const shouldReverse = direction === 'rtl' && orientation === 'horizontal';
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
            e.stopPropagation();
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
            var _lastFocused_current;
            (_lastFocused_current = lastFocused.current) === null || _lastFocused_current === void 0 ? void 0 : _lastFocused_current.focus();
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



//# sourceMappingURL=useToolbar.module.js.map

;// ./node_modules/@react-aria/button/dist/useToggleButtonGroup.mjs



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

function $4547d1bf40011fdf$export$dd5580ae642f110f(props, state, ref) {
    let { isDisabled: isDisabled } = props;
    let { toolbarProps: toolbarProps } = (0, $2680b1829e803644$export$fa142eb1681c520)(props, ref);
    return {
        groupProps: {
            ...toolbarProps,
            role: state.selectionMode === 'single' ? 'radiogroup' : toolbarProps.role,
            'aria-disabled': isDisabled
        }
    };
}
function $4547d1bf40011fdf$export$bc53712daae3d6e6(props, state, ref) {
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
        buttonProps.role = 'radio';
        buttonProps['aria-checked'] = toggleState.isSelected;
        delete buttonProps['aria-pressed'];
    }
    return {
        isPressed: isPressed,
        isSelected: isSelected,
        isDisabled: isDisabled,
        buttonProps: buttonProps
    };
}



//# sourceMappingURL=useToggleButtonGroup.module.js.map


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

/***/ 51623
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ $3017fa7ffdddec74$export$8042c6c013fd5226)
/* harmony export */ });
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8356);
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

function $3017fa7ffdddec74$export$8042c6c013fd5226(props = {}) {
    let { isReadOnly: isReadOnly } = props;
    // have to provide an empty function so useControlledState doesn't throw a fit
    // can't use useControlledState's prop calling because we need the event object from the change
    let [isSelected, setSelected] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__/* .useControlledState */ .P)(props.isSelected, props.defaultSelected || false, props.onChange);
    let [initialValue] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(isSelected);
    function updateSelected(value) {
        if (!isReadOnly) setSelected(value);
    }
    function toggleState() {
        if (!isReadOnly) setSelected(!isSelected);
    }
    var _props_defaultSelected;
    return {
        isSelected: isSelected,
        defaultSelected: (_props_defaultSelected = props.defaultSelected) !== null && _props_defaultSelected !== void 0 ? _props_defaultSelected : initialValue,
        setSelected: updateSelected,
        toggle: toggleState
    };
}



//# sourceMappingURL=useToggleState.module.js.map


/***/ },

/***/ 76754
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ $efde0372d7a700fe$export$d2b052e7b4be1756)
/* harmony export */ });
/* unused harmony export ToggleButtonContext */
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5933);
/* harmony import */ var _SelectionIndicator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70291);
/* harmony import */ var _ToggleButtonGroup_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82597);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89869);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2214);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32217);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96540);
/* harmony import */ var react_stately__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51623);








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






const $efde0372d7a700fe$export$43506d75ebd2e218 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_9__.createContext)({});
const $efde0372d7a700fe$export$d2b052e7b4be1756 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_9__.forwardRef)(function ToggleButton(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $efde0372d7a700fe$export$43506d75ebd2e218);
    let groupState = (0, react__WEBPACK_IMPORTED_MODULE_9__.useContext)((0, _ToggleButtonGroup_mjs__WEBPACK_IMPORTED_MODULE_2__/* .ToggleGroupStateContext */ .G0));
    let state = (0, react_stately__WEBPACK_IMPORTED_MODULE_10__/* .useToggleState */ .H)(groupState && props.id != null ? {
        isSelected: groupState.selectedKeys.has(props.id),
        onChange (isSelected) {
            groupState.setSelected(props.id, isSelected);
        }
    } : props);
    let { buttonProps: buttonProps, isPressed: isPressed, isSelected: isSelected, isDisabled: isDisabled } = groupState && props.id != null ? (0, react_aria__WEBPACK_IMPORTED_MODULE_4__/* .useToggleButtonGroupItem */ .O)({
        ...props,
        id: props.id
    }, groupState, ref) : (0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .useToggleButton */ .q)({
        ...props,
        id: props.id != null ? String(props.id) : undefined
    }, state, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, react_aria__WEBPACK_IMPORTED_MODULE_5__/* .useFocusRing */ .o)(props);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_6__/* .useHover */ .M)({
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
    let DOMProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__/* .filterDOMProps */ .$)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_9__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT).button, {
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_7__/* .mergeProps */ .v)(DOMProps, renderProps, buttonProps, focusProps, hoverProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": isFocused || undefined,
        "data-disabled": isDisabled || undefined,
        "data-pressed": isPressed || undefined,
        "data-selected": isSelected || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_9__).createElement((0, _SelectionIndicator_mjs__WEBPACK_IMPORTED_MODULE_1__/* .SelectionIndicatorContext */ .r).Provider, {
        value: {
            isSelected: isSelected
        }
    }, renderProps.children));
});



//# sourceMappingURL=ToggleButton.module.js.map


/***/ },

/***/ 82597
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  WK: () => (/* binding */ $84b7d8702d4ff4a8$export$40258cc1d95ff477),
  G0: () => (/* binding */ $84b7d8702d4ff4a8$export$a8a71863db173133)
});

// UNUSED EXPORTS: ToggleButtonGroupContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/SharedElementTransition.mjs
var SharedElementTransition = __webpack_require__(10266);
// EXTERNAL MODULE: ./node_modules/@react-aria/button/dist/useToggleButtonGroup.mjs + 1 modules
var useToggleButtonGroup = __webpack_require__(2214);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/useControlledState.mjs
var useControlledState = __webpack_require__(8356);
;// ./node_modules/@react-stately/toggle/dist/useToggleGroupState.mjs



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

function $ad999b7f496648d1$export$8deac67f4addf270(props) {
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



//# sourceMappingURL=useToggleGroupState.module.js.map

;// ./node_modules/react-aria-components/dist/ToggleButtonGroup.mjs







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





const $84b7d8702d4ff4a8$export$298258635ae0dd97 = /*#__PURE__*/ (0, react.createContext)({});
const $84b7d8702d4ff4a8$export$a8a71863db173133 = /*#__PURE__*/ (0, react.createContext)(null);
const $84b7d8702d4ff4a8$export$40258cc1d95ff477 = /*#__PURE__*/ (0, react.forwardRef)(function ToggleButtonGroup(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $84b7d8702d4ff4a8$export$298258635ae0dd97);
    let state = (0, $ad999b7f496648d1$export$8deac67f4addf270)(props);
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
    }, /*#__PURE__*/ (0, react).createElement($84b7d8702d4ff4a8$export$a8a71863db173133.Provider, {
        value: state
    }, /*#__PURE__*/ (0, react).createElement((0, SharedElementTransition/* SharedElementTransition */.D), null, renderProps.children)));
});



//# sourceMappingURL=ToggleButtonGroup.module.js.map


/***/ },

/***/ 89869
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ $55f54f7887471b58$export$51e84d46ca0bc451)
/* harmony export */ });
/* harmony import */ var _useButton_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69229);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72166);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32217);



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

function $55f54f7887471b58$export$51e84d46ca0bc451(props, state, ref) {
    const { isSelected: isSelected } = state;
    const { isPressed: isPressed, buttonProps: buttonProps } = (0, _useButton_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useButton */ .s)({
        ...props,
        onPress: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .chain */ .c)(state.toggle, props.onPress)
    }, ref);
    return {
        isPressed: isPressed,
        isSelected: isSelected,
        isDisabled: props.isDisabled || false,
        buttonProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(buttonProps, {
            'aria-pressed': isSelected
        })
    };
}



//# sourceMappingURL=useToggleButton.module.js.map


/***/ }

}]);