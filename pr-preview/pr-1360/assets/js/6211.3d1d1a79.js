"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6211],{

/***/ 86241
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Minus)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("minus", __iconNode);


//# sourceMappingURL=minus.js.map


/***/ },

/***/ 40829
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BP: () => (/* binding */ $ed8ccb2e23e76301$export$b085522c77523c51),
/* harmony export */   t7: () => (/* binding */ $ed8ccb2e23e76301$export$c32003b803b6c22e)
/* harmony export */ });
/* unused harmony exports CheckboxGroupContext, CheckboxGroupStateContext, CheckboxGroup, CheckboxField, Checkbox, CheckboxButton */
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$29f1550f4b0d4415;
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$fabf2dc03a41866e;
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$9d4c57ee4c6ffdd8;
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$4d86445c2cf5e3;
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$df3a06d6289f983e;
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$2881499e37b75b9a;
/* unused harmony import specifier */ var $7230ffa83bc0c2cf$export$ef03459518577ad4;
/* unused harmony import specifier */ var $1f3c3b1a70cec653$export$ff05c3ac10437e03;
/* unused harmony import specifier */ var $cdaed739b1139372$export$c24727297075ec6a;
/* unused harmony import specifier */ var $43a3b93638fe5db9$export$75b6ee27786ba447;
/* unused harmony import specifier */ var $efe09c6d1c304b50$export$9afb8bc826b033ea;
/* unused harmony import specifier */ var $j1L6B$useCheckboxGroup;
/* unused harmony import specifier */ var $j1L6B$useCheckboxGroupItem;
/* unused harmony import specifier */ var $j1L6B$useCheckbox;
/* unused harmony import specifier */ var $j1L6B$useCheckboxGroupState;
/* unused harmony import specifier */ var $j1L6B$filterDOMProps;
/* unused harmony import specifier */ var $j1L6B$mergeProps;
/* unused harmony import specifier */ var $j1L6B$mergeRefs;
/* unused harmony import specifier */ var $j1L6B$createContext;
/* unused harmony import specifier */ var $j1L6B$forwardRef;
/* unused harmony import specifier */ var $j1L6B$react;
/* unused harmony import specifier */ var $j1L6B$useContext;
/* unused harmony import specifier */ var $j1L6B$useMemo;
/* unused harmony import specifier */ var $j1L6B$useFocusRing;
/* unused harmony import specifier */ var $j1L6B$useHover;
/* unused harmony import specifier */ var $j1L6B$useObjectRef;
/* unused harmony import specifier */ var $j1L6B$useToggleState;
/* unused harmony import specifier */ var $j1L6B$VisuallyHidden;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


















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
















const $ed8ccb2e23e76301$export$b085522c77523c51 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $ed8ccb2e23e76301$export$c32003b803b6c22e = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $ed8ccb2e23e76301$export$baf37c4be89255b8 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $j1L6B$createContext)(null)));
const $ed8ccb2e23e76301$export$139c5b8563afc1fc = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $j1L6B$createContext)(null)));
const $ed8ccb2e23e76301$export$4aa08d5625cb8ead = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $j1L6B$forwardRef)(function CheckboxGroup(props, ref) {
    [props, ref] = (0, $7230ffa83bc0c2cf$export$29f1550f4b0d4415)(props, ref, $ed8ccb2e23e76301$export$baf37c4be89255b8);
    let { validationBehavior: formValidationBehavior } = (0, $7230ffa83bc0c2cf$export$fabf2dc03a41866e)((0, $cdaed739b1139372$export$c24727297075ec6a)) || {};
    let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? 'native';
    let state = (0, $j1L6B$useCheckboxGroupState)({
        ...props,
        validationBehavior: validationBehavior
    });
    let [labelRef, label] = (0, $7230ffa83bc0c2cf$export$9d4c57ee4c6ffdd8)(!props['aria-label'] && !props['aria-labelledby']);
    let { groupProps: groupProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, $j1L6B$useCheckboxGroup)({
        ...props,
        label: label,
        validationBehavior: validationBehavior
    }, state);
    let renderProps = (0, $7230ffa83bc0c2cf$export$4d86445c2cf5e3)({
        ...props,
        values: {
            isDisabled: state.isDisabled,
            isReadOnly: state.isReadOnly,
            isRequired: props.isRequired || false,
            isInvalid: state.isInvalid,
            state: state
        },
        defaultClassName: 'react-aria-CheckboxGroup'
    });
    let DOMProps = (0, $j1L6B$filterDOMProps)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, $j1L6B$react).createElement((0, $7230ffa83bc0c2cf$export$df3a06d6289f983e).div, {
        ...(0, $j1L6B$mergeProps)(DOMProps, renderProps, groupProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-readonly": state.isReadOnly || undefined,
        "data-required": props.isRequired || undefined,
        "data-invalid": state.isInvalid || undefined,
        "data-disabled": props.isDisabled || undefined
    }, /*#__PURE__*/ (0, $j1L6B$react).createElement((0, $7230ffa83bc0c2cf$export$2881499e37b75b9a), {
        values: [
            [
                $ed8ccb2e23e76301$export$139c5b8563afc1fc,
                state
            ],
            [
                (0, $43a3b93638fe5db9$export$75b6ee27786ba447),
                {
                    ...labelProps,
                    ref: labelRef,
                    elementType: 'span'
                }
            ],
            [
                (0, $efe09c6d1c304b50$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            [
                (0, $1f3c3b1a70cec653$export$ff05c3ac10437e03),
                validation
            ]
        ]
    }, renderProps.children));
})));
const $ed8ccb2e23e76301$var$InternalCheckboxContext = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $j1L6B$createContext)(null)));
const $ed8ccb2e23e76301$export$94195a47b94ed396 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $j1L6B$forwardRef)(function Checkbox(props, ref) {
    let { inputRef: userProvidedInputRef = null, ...otherProps } = props;
    [props, ref] = (0, $7230ffa83bc0c2cf$export$29f1550f4b0d4415)(otherProps, ref, $ed8ccb2e23e76301$export$c32003b803b6c22e);
    let groupState = (0, $j1L6B$useContext)($ed8ccb2e23e76301$export$139c5b8563afc1fc);
    let [aria, inputRef] = $ed8ccb2e23e76301$var$useCheckboxAria(props, userProvidedInputRef);
    let { descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, isSelected: isSelected, isDisabled: isDisabled, isReadOnly: isReadOnly, isInvalid: isInvalid, validationDetails: validationDetails, validationErrors: validationErrors } = aria;
    let renderProps = (0, $7230ffa83bc0c2cf$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: 'react-aria-CheckboxField',
        values: {
            isSelected: isSelected,
            isIndeterminate: props.isIndeterminate || false,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isInvalid: isInvalid,
            isRequired: props.isRequired || false
        }
    });
    let DOMProps = (0, $j1L6B$filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, $j1L6B$react).createElement((0, $7230ffa83bc0c2cf$export$df3a06d6289f983e).div, {
        ...(0, $j1L6B$mergeProps)(DOMProps, renderProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-selected": isSelected || undefined,
        "data-indeterminate": props.isIndeterminate || undefined,
        "data-disabled": isDisabled || undefined,
        "data-readonly": isReadOnly || undefined,
        "data-invalid": isInvalid || undefined,
        "data-required": props.isRequired || undefined
    }, /*#__PURE__*/ (0, $j1L6B$react).createElement((0, $7230ffa83bc0c2cf$export$2881499e37b75b9a), {
        values: [
            [
                $ed8ccb2e23e76301$var$InternalCheckboxContext,
                {
                    ...aria,
                    inputRef: inputRef,
                    defaultClassName: 'react-aria-CheckboxButton',
                    isIndeterminate: props.isIndeterminate,
                    isRequired: props.isRequired
                }
            ],
            [
                (0, $efe09c6d1c304b50$export$9afb8bc826b033ea),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            // In a CheckboxGroup, validation is handled at the group level instead of repeated on each checkbox.
            [
                (0, $1f3c3b1a70cec653$export$ff05c3ac10437e03),
                groupState ? null : {
                    isInvalid: isInvalid,
                    validationDetails: validationDetails,
                    validationErrors: validationErrors
                }
            ]
        ]
    }, renderProps.children));
})));
function $ed8ccb2e23e76301$var$useCheckboxAria(props, userProvidedInputRef) {
    let { validationBehavior: formValidationBehavior } = (0, $7230ffa83bc0c2cf$export$fabf2dc03a41866e)((0, $cdaed739b1139372$export$c24727297075ec6a)) || {};
    let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? 'native';
    let groupState = (0, $j1L6B$useContext)($ed8ccb2e23e76301$export$139c5b8563afc1fc);
    let inputRef = (0, $j1L6B$useObjectRef)((0, $j1L6B$useMemo)(()=>(0, $j1L6B$mergeRefs)(userProvidedInputRef, props.inputRef !== undefined ? props.inputRef : null), [
        userProvidedInputRef,
        props.inputRef
    ]));
    let checkboxProps = {
        ...(0, $7230ffa83bc0c2cf$export$ef03459518577ad4)(props),
        children: typeof props.children === 'function' ? true : props.children,
        value: props.value,
        validationBehavior: validationBehavior
    };
    let aria = groupState ? (0, $j1L6B$useCheckboxGroupItem)(checkboxProps, groupState, inputRef) : (0, $j1L6B$useCheckbox)(checkboxProps, (0, $j1L6B$useToggleState)(props), inputRef);
    return [
        aria,
        inputRef
    ];
}
const $ed8ccb2e23e76301$export$48513f6b9f8ce62d = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $j1L6B$forwardRef)(function Checkbox(props, ref) {
    let { inputRef: userProvidedInputRef = null, ...otherProps } = props;
    [props, ref] = (0, $7230ffa83bc0c2cf$export$29f1550f4b0d4415)(otherProps, ref, $ed8ccb2e23e76301$export$b085522c77523c51);
    let [aria, inputRef] = $ed8ccb2e23e76301$var$useCheckboxAria(props, userProvidedInputRef);
    return /*#__PURE__*/ (0, $j1L6B$react).createElement($ed8ccb2e23e76301$var$InternalCheckboxContext.Provider, {
        value: {
            ...aria,
            inputRef: inputRef,
            defaultClassName: 'react-aria-Checkbox',
            isIndeterminate: props.isIndeterminate,
            isRequired: props.isRequired
        }
    }, /*#__PURE__*/ (0, $j1L6B$react).createElement($ed8ccb2e23e76301$export$6e7a18c0548f3129, {
        ...props,
        ref: ref
    }));
})));
const $ed8ccb2e23e76301$export$6e7a18c0548f3129 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $j1L6B$forwardRef)(function CheckboxButton(props, ref) {
    let { labelProps: labelProps, inputProps: inputProps, isSelected: isSelected, isDisabled: isDisabled, isReadOnly: isReadOnly, isPressed: isPressed, isInvalid: isInvalid, inputRef: inputRef, defaultClassName: defaultClassName, isIndeterminate: isIndeterminate, isRequired: isRequired } = (0, $j1L6B$useContext)($ed8ccb2e23e76301$var$InternalCheckboxContext);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $j1L6B$useFocusRing)();
    let isInteractionDisabled = isDisabled || isReadOnly;
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, $j1L6B$useHover)({
        ...props,
        isDisabled: isInteractionDisabled
    });
    let renderProps = (0, $7230ffa83bc0c2cf$export$4d86445c2cf5e3)({
        ...props,
        defaultClassName: defaultClassName,
        values: {
            isSelected: isSelected,
            isIndeterminate: isIndeterminate || false,
            isPressed: isPressed,
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isInvalid: isInvalid,
            isRequired: isRequired || false
        }
    });
    let DOMProps = (0, $j1L6B$filterDOMProps)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, $j1L6B$react).createElement((0, $7230ffa83bc0c2cf$export$df3a06d6289f983e).label, {
        ...(0, $j1L6B$mergeProps)(DOMProps, labelProps, hoverProps, renderProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-selected": isSelected || undefined,
        "data-indeterminate": isIndeterminate || undefined,
        "data-pressed": isPressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-readonly": isReadOnly || undefined,
        "data-invalid": isInvalid || undefined,
        "data-required": isRequired || undefined
    }, /*#__PURE__*/ (0, $j1L6B$react).createElement((0, $j1L6B$VisuallyHidden), {
        elementType: "span"
    }, /*#__PURE__*/ (0, $j1L6B$react).createElement("input", {
        ...(0, $j1L6B$mergeProps)(inputProps, focusProps),
        ref: inputRef
    })), renderProps.children);
})));



//# sourceMappingURL=Checkbox.mjs.map


/***/ },

/***/ 10783
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ $dde212bea465bd23$export$e375f10ce42261c5)
});

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(62975);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var useFocusable = __webpack_require__(55602);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useFormReset.mjs
var useFormReset = __webpack_require__(31199);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/form/useFormValidation.mjs
var useFormValidation = __webpack_require__(99276);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/usePress.mjs + 1 modules
var usePress = __webpack_require__(23580);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useSlot.mjs
var useSlot = __webpack_require__(77140);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/form/useFormValidationState.mjs
var useFormValidationState = __webpack_require__(19804);
;// ./node_modules/react-aria/dist/private/toggle/useToggle.mjs











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









function $876b6f32ca5a04c3$export$cbe85ee05b554577(props, state, ref) {
    let { isDisabled: isDisabled = false, isReadOnly: isReadOnly = false, value: value, name: name, form: form, children: children, isRequired: isRequired, validationBehavior: validationBehavior = 'aria', 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, 'aria-describedby': ariaDescribedby, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressChange: onPressChange, onPress: onPress, onPressUp: onPressUp, onClick: onClick } = props;
    // Create validation state here because it doesn't make sense to add to general useToggleState.
    let validationState = (0, useFormValidationState/* useFormValidationState */.KZ)({
        ...props,
        value: state.isSelected
    });
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = validationState.displayValidation;
    (0, useFormValidation/* useFormValidation */.X)(props, validationState, ref);
    let onChange = (e)=>{
        // since we spread props on label, onChange will end up there as well as in here.
        // so we have to stop propagation at the lowest level that we care about
        e.stopPropagation();
        state.setSelected((0, DOMFunctions/* getEventTarget */.wt)(e).checked);
    };
    let hasChildren = children != null;
    let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
    if (!hasChildren && !hasAriaLabel && "production" !== 'production') // removed by dead control flow
{}
    // Handle press state for keyboard interactions and cases where labelProps is not used.
    let { pressProps: pressProps, isPressed: isPressed } = (0, usePress/* usePress */.d)({
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        onPressChange: onPressChange,
        onPress: onPress,
        onPressUp: onPressUp,
        onClick: onClick,
        isDisabled: isDisabled
    });
    // Handle press state on the label.
    let [isLabelPressed, setLabelPressed] = (0, react.useState)(false);
    let { pressProps: labelProps } = (0, usePress/* usePress */.d)({
        onPressStart (e) {
            // Keyboard interactions are handled directly on the input.
            if (e.pointerType === 'keyboard' || e.pointerType === 'virtual') {
                e.continuePropagation();
                return;
            }
            onPressStart?.(e);
            onPressChange?.(true);
            setLabelPressed(true);
        },
        onPressEnd (e) {
            // Keyboard interactions are handled directly on the input.
            if (e.pointerType === 'keyboard' || e.pointerType === 'virtual') {
                e.continuePropagation();
                return;
            }
            onPressEnd?.(e);
            onPressChange?.(false);
            setLabelPressed(false);
        },
        onPressUp (e) {
            if (e.pointerType === 'keyboard' || e.pointerType === 'virtual') {
                e.continuePropagation();
                return;
            }
            onPressUp?.(e);
        },
        onClick: onClick,
        onPress (e) {
            if (e.pointerType === 'keyboard' || e.pointerType === 'virtual') {
                e.continuePropagation();
                return;
            }
            onPress?.(e);
            state.toggle();
            ref.current?.focus();
            // @ts-expect-error
            let { [(0, useFormValidationState/* privateValidationStateProp */.Lf)]: groupValidationState } = props;
            // oxlint-disable-next-line react/react-compiler
            let { commitValidation: commitValidation } = groupValidationState ? groupValidationState : validationState;
            commitValidation();
        },
        isDisabled: isDisabled || isReadOnly
    });
    let { focusableProps: focusableProps } = (0, useFocusable/* useFocusable */.Wc)(props, ref);
    let interactions = (0, mergeProps/* mergeProps */.v)(pressProps, focusableProps);
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        labelable: true
    });
    (0, useFormReset/* useFormReset */.F)(ref, state.defaultSelected, state.setSelected);
    // Copied from useField because we don't want the label behavior that provides.
    let descriptionProps = (0, useSlot/* useSlotId2 */.L)();
    let errorMessageProps = (0, useSlot/* useSlotId2 */.L)();
    return {
        labelProps: (0, mergeProps/* mergeProps */.v)(labelProps, {
            onClick: (e)=>e.preventDefault()
        }),
        inputProps: (0, mergeProps/* mergeProps */.v)(domProps, {
            checked: state.isSelected,
            'aria-required': isRequired && validationBehavior === 'aria' || undefined,
            required: isRequired && validationBehavior === 'native',
            'aria-invalid': isInvalid || props.validationState === 'invalid' || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-controls': props['aria-controls'],
            'aria-readonly': isReadOnly || undefined,
            'aria-describedby': [
                descriptionProps.id,
                errorMessageProps.id,
                ariaDescribedby
            ].filter(Boolean).join(' ') || undefined,
            onChange: onChange,
            disabled: isDisabled,
            ...value == null ? {} : {
                value: value
            },
            name: name,
            form: form,
            type: 'checkbox',
            ...interactions
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isSelected: state.isSelected,
        isPressed: isPressed || isLabelPressed,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isInvalid: isInvalid || props.validationState === 'invalid',
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}



//# sourceMappingURL=useToggle.mjs.map

;// ./node_modules/react-aria/dist/private/checkbox/useCheckbox.mjs




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


function $dde212bea465bd23$export$e375f10ce42261c5(props, state, inputRef) {
    let { labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, isSelected: isSelected, isPressed: isPressed, isDisabled: isDisabled, isReadOnly: isReadOnly, isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = (0, $876b6f32ca5a04c3$export$cbe85ee05b554577)(props, state, inputRef);
    let { isIndeterminate: isIndeterminate } = props;
    (0, react.useEffect)(()=>{
        // indeterminate is a property, but it can only be set via javascript
        // https://css-tricks.com/indeterminate-checkboxes/
        if (inputRef.current) inputRef.current.indeterminate = !!isIndeterminate;
    });
    return {
        labelProps: (0, mergeProps/* mergeProps */.v)(labelProps, (0, react.useMemo)(()=>({
                // Prevent label from being focused when mouse down on it.
                // Note, this does not prevent the input from being focused in the `click` event.
                onMouseDown: (e)=>e.preventDefault()
            }), [])),
        inputProps: inputProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isSelected: isSelected,
        isPressed: isPressed,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}



//# sourceMappingURL=useCheckbox.mjs.map


/***/ },

/***/ 52911
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ $55cfc34eef47e1ca$export$353b32fc6898d37d)
/* harmony export */ });
/* harmony import */ var _useCheckbox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10783);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68444);
/* harmony import */ var react_stately_private_form_useFormValidationState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19804);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);
/* harmony import */ var react_stately_useToggleState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8895);






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




function $55cfc34eef47e1ca$export$353b32fc6898d37d(props, state, inputRef) {
    const toggleState = (0, react_stately_useToggleState__WEBPACK_IMPORTED_MODULE_4__/* .useToggleState */ .H)({
        isReadOnly: props.isReadOnly || state.isReadOnly,
        isSelected: state.isSelected(props.value),
        defaultSelected: state.defaultValue.includes(props.value),
        onChange (isSelected) {
            if (isSelected) state.addValue(props.value);
            else state.removeValue(props.value);
            if (props.onChange) props.onChange(isSelected);
        }
    });
    let { name: name, form: form, descriptionId: descriptionId, errorMessageId: errorMessageId, validationBehavior: validationBehavior } = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .checkboxGroupData */ .n).get(state);
    validationBehavior = props.validationBehavior ?? validationBehavior;
    // Local validation for this checkbox.
    let { realtimeValidation: realtimeValidation } = (0, react_stately_private_form_useFormValidationState__WEBPACK_IMPORTED_MODULE_2__/* .useFormValidationState */ .KZ)({
        ...props,
        value: toggleState.isSelected,
        // Server validation is handled at the group level.
        name: undefined,
        validationBehavior: 'aria'
    });
    // Update the checkbox group state when realtime validation changes.
    let nativeValidation = (0, react__WEBPACK_IMPORTED_MODULE_3__.useRef)((0, react_stately_private_form_useFormValidationState__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_VALIDATION_RESULT */ .YD));
    let updateValidation = ()=>{
        state.setInvalid(props.value, realtimeValidation.isInvalid ? realtimeValidation : nativeValidation.current);
    };
    (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(updateValidation);
    // Combine group and checkbox level validation.
    let combinedRealtimeValidation = state.realtimeValidation.isInvalid ? state.realtimeValidation : realtimeValidation;
    let displayValidation = validationBehavior === 'native' ? state.displayValidation : combinedRealtimeValidation;
    let res = (0, _useCheckbox_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useCheckbox */ .v)({
        ...props,
        isReadOnly: props.isReadOnly || state.isReadOnly,
        isDisabled: props.isDisabled || state.isDisabled,
        name: props.name || name,
        form: props.form || form,
        isRequired: props.isRequired ?? state.isRequired,
        validationBehavior: validationBehavior,
        [(0, react_stately_private_form_useFormValidationState__WEBPACK_IMPORTED_MODULE_2__/* .privateValidationStateProp */ .Lf)]: {
            realtimeValidation: combinedRealtimeValidation,
            displayValidation: displayValidation,
            resetValidation: state.resetValidation,
            commitValidation: state.commitValidation,
            updateValidation (v) {
                nativeValidation.current = v;
                updateValidation();
            }
        }
    }, toggleState, inputRef);
    return {
        ...res,
        inputProps: {
            ...res.inputProps,
            'aria-describedby': [
                res.inputProps['aria-describedby'],
                state.isInvalid ? errorMessageId : null,
                descriptionId
            ].filter(Boolean).join(' ') || undefined
        }
    };
}



//# sourceMappingURL=useCheckboxGroupItem.mjs.map


/***/ },

/***/ 68444
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ $0fffd24394d22962$export$ec98120685d4f57d)
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
 */ const $0fffd24394d22962$export$ec98120685d4f57d = new WeakMap();



//# sourceMappingURL=utils.mjs.map


/***/ },

/***/ 77140
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ $4c14b02d5228be26$export$ed2feabec4a533f4)
/* harmony export */ });
/* unused harmony export useSlot */
/* harmony import */ var _useId_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19633);
/* harmony import */ var _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74441);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);




/*
 * Copyright 2026 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $4c14b02d5228be26$export$9d4c57ee4c6ffdd8(initialState = true) {
    // Initial state is typically based on the parent having an aria-label or aria-labelledby.
    // If it does, this value should be false so that we don't update the state and cause a rerender when we go through the layoutEffect
    let [hasSlot, setHasSlot] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialState);
    let hasRun = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
    // A callback ref which will run when the slotted element mounts.
    // This should happen before the useLayoutEffect below.
    let ref = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((el)=>{
        hasRun.current = true;
        setHasSlot(!!el);
    }, []);
    // If the callback hasn't been called, then reset to false.
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .N)(()=>{
        if (!hasRun.current) setHasSlot(false);
    }, []);
    return [
        ref,
        hasSlot
    ];
}
function $4c14b02d5228be26$export$ed2feabec4a533f4(initialState = true) {
    let id = (0, _useId_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useId */ .Bi)();
    let [ref, hasSlot] = $4c14b02d5228be26$export$9d4c57ee4c6ffdd8(initialState);
    return {
        id: hasSlot ? id : undefined,
        ref: ref
    };
}



//# sourceMappingURL=useSlot.mjs.map


/***/ },

/***/ 8895
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ $fd3c5e01e837dc20$export$8042c6c013fd5226)
/* harmony export */ });
/* harmony import */ var _utils_useControlledState_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32240);
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

function $fd3c5e01e837dc20$export$8042c6c013fd5226(props = {}) {
    let { isReadOnly: isReadOnly } = props;
    // have to provide an empty function so useControlledState doesn't throw a fit
    // can't use useControlledState's prop calling because we need the event object from the change
    let [isSelected, setSelected] = (0, _utils_useControlledState_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useControlledState */ .P)(props.isSelected, props.defaultSelected || false, props.onChange);
    let [initialValue] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(isSelected);
    function updateSelected(value) {
        if (!isReadOnly) setSelected(value);
    }
    function toggleState() {
        if (!isReadOnly) setSelected(!isSelected);
    }
    return {
        isSelected: isSelected,
        defaultSelected: props.defaultSelected ?? initialValue,
        setSelected: updateSelected,
        toggle: toggleState
    };
}



//# sourceMappingURL=useToggleState.mjs.map


/***/ }

}]);