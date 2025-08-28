"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1964],{

/***/ 2526:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ $1ae600c947479353$export$ec98120685d4f57d)
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
 */ const $1ae600c947479353$export$ec98120685d4f57d = new WeakMap();



//# sourceMappingURL=utils.module.js.map


/***/ }),

/***/ 8343:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ $99facab73266f662$export$5add1d006293d136)
/* harmony export */ });
/* harmony import */ var _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7049);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



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

function $99facab73266f662$export$5add1d006293d136(ref, initialValue, onReset) {
    let resetValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialValue);
    let handleReset = (0, _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .J)(()=>{
        if (onReset) onReset(resetValue.current);
    });
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        var _ref_current;
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        form === null || form === void 0 ? void 0 : form.addEventListener('reset', handleReset);
        return ()=>{
            form === null || form === void 0 ? void 0 : form.removeEventListener('reset', handleReset);
        };
    }, [
        ref,
        handleReset
    ]);
}



//# sourceMappingURL=useFormReset.module.js.map


/***/ }),

/***/ 23128:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ $d3e0e05bdfcf66bd$export$c24727297075ec6a),
/* harmony export */   l: () => (/* binding */ $d3e0e05bdfcf66bd$export$a7fed597f4b8afd8)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5933);
/* harmony import */ var react_stately__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71144);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);




/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $d3e0e05bdfcf66bd$export$c24727297075ec6a = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $d3e0e05bdfcf66bd$export$a7fed597f4b8afd8 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Form(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, $d3e0e05bdfcf66bd$export$c24727297075ec6a);
    let { validationErrors: validationErrors, validationBehavior: validationBehavior = 'native', children: children, className: className, ...domProps } = props;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("form", {
        noValidate: validationBehavior !== 'native',
        ...domProps,
        ref: ref,
        className: className || 'react-aria-Form'
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($d3e0e05bdfcf66bd$export$c24727297075ec6a.Provider, {
        value: {
            ...props,
            validationBehavior: validationBehavior
        }
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, react_stately__WEBPACK_IMPORTED_MODULE_2__/* .FormValidationContext */ .Xy).Provider, {
        value: validationErrors !== null && validationErrors !== void 0 ? validationErrors : {}
    }, children)));
});



//# sourceMappingURL=Form.module.js.map


/***/ }),

/***/ 26493:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ $fba3e38d5ca8983f$export$353b32fc6898d37d)
/* harmony export */ });
/* harmony import */ var _useCheckbox_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58044);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2526);
/* harmony import */ var _react_stately_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71144);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_stately_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51623);






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




function $fba3e38d5ca8983f$export$353b32fc6898d37d(props, state, inputRef) {
    const toggleState = (0, _react_stately_toggle__WEBPACK_IMPORTED_MODULE_1__/* .useToggleState */ .H)({
        isReadOnly: props.isReadOnly || state.isReadOnly,
        isSelected: state.isSelected(props.value),
        onChange (isSelected) {
            if (isSelected) state.addValue(props.value);
            else state.removeValue(props.value);
            if (props.onChange) props.onChange(isSelected);
        }
    });
    let { name: name, descriptionId: descriptionId, errorMessageId: errorMessageId, validationBehavior: validationBehavior } = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .checkboxGroupData */ .n).get(state);
    var _props_validationBehavior;
    validationBehavior = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : validationBehavior;
    // Local validation for this checkbox.
    let { realtimeValidation: realtimeValidation } = (0, _react_stately_form__WEBPACK_IMPORTED_MODULE_3__/* .useFormValidationState */ .KZ)({
        ...props,
        value: toggleState.isSelected,
        // Server validation is handled at the group level.
        name: undefined,
        validationBehavior: 'aria'
    });
    // Update the checkbox group state when realtime validation changes.
    let nativeValidation = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0, _react_stately_form__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_VALIDATION_RESULT */ .YD));
    let updateValidation = ()=>{
        state.setInvalid(props.value, realtimeValidation.isInvalid ? realtimeValidation : nativeValidation.current);
    };
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(updateValidation);
    // Combine group and checkbox level validation.
    let combinedRealtimeValidation = state.realtimeValidation.isInvalid ? state.realtimeValidation : realtimeValidation;
    let displayValidation = validationBehavior === 'native' ? state.displayValidation : combinedRealtimeValidation;
    var _props_isRequired;
    let res = (0, _useCheckbox_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useCheckbox */ .v)({
        ...props,
        isReadOnly: props.isReadOnly || state.isReadOnly,
        isDisabled: props.isDisabled || state.isDisabled,
        name: props.name || name,
        isRequired: (_props_isRequired = props.isRequired) !== null && _props_isRequired !== void 0 ? _props_isRequired : state.isRequired,
        validationBehavior: validationBehavior,
        [(0, _react_stately_form__WEBPACK_IMPORTED_MODULE_3__/* .privateValidationStateProp */ .Lf)]: {
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
                props['aria-describedby'],
                state.isInvalid ? errorMessageId : null,
                descriptionId
            ].filter(Boolean).join(' ') || undefined
        }
    };
}



//# sourceMappingURL=useCheckboxGroupItem.module.js.map


/***/ }),

/***/ 48868:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ $e93e671b31057976$export$b8473d3665f3a75a)
/* harmony export */ });
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95562);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49953);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7049);




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


function $e93e671b31057976$export$b8473d3665f3a75a(props, state, ref) {
    let { validationBehavior: validationBehavior, focus: focus } = props;
    // This is a useLayoutEffect so that it runs before the useEffect in useFormValidationState, which commits the validation change.
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .N)(()=>{
        if (validationBehavior === 'native' && (ref === null || ref === void 0 ? void 0 : ref.current) && !ref.current.disabled) {
            let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(' ') || 'Invalid value.' : '';
            ref.current.setCustomValidity(errorMessage);
            // Prevent default tooltip for validation message.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=605277
            if (!ref.current.hasAttribute('title')) ref.current.title = '';
            if (!state.realtimeValidation.isInvalid) state.updateValidation($e93e671b31057976$var$getNativeValidity(ref.current));
        }
    });
    let onReset = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .useEffectEvent */ .J)(()=>{
        state.resetValidation();
    });
    let onInvalid = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .useEffectEvent */ .J)((e)=>{
        var _ref_current;
        // Only commit validation if we are not already displaying one.
        // This avoids clearing server errors that the user didn't actually fix.
        if (!state.displayValidation.isInvalid) state.commitValidation();
        // Auto focus the first invalid input in a form, unless the error already had its default prevented.
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        if (!e.defaultPrevented && ref && form && $e93e671b31057976$var$getFirstInvalidInput(form) === ref.current) {
            var _ref_current1;
            if (focus) focus();
            else (_ref_current1 = ref.current) === null || _ref_current1 === void 0 ? void 0 : _ref_current1.focus();
            // Always show focus ring.
            (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_3__/* .setInteractionModality */ .Cl)('keyboard');
        }
        // Prevent default browser error UI from appearing.
        e.preventDefault();
    });
    let onChange = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .useEffectEvent */ .J)(()=>{
        state.commitValidation();
    });
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let input = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!input) return;
        let form = input.form;
        input.addEventListener('invalid', onInvalid);
        input.addEventListener('change', onChange);
        form === null || form === void 0 ? void 0 : form.addEventListener('reset', onReset);
        return ()=>{
            input.removeEventListener('invalid', onInvalid);
            input.removeEventListener('change', onChange);
            form === null || form === void 0 ? void 0 : form.removeEventListener('reset', onReset);
        };
    }, [
        ref,
        onInvalid,
        onChange,
        onReset,
        validationBehavior
    ]);
}
function $e93e671b31057976$var$getValidity(input) {
    // The native ValidityState object is live, meaning each property is a getter that returns the current state.
    // We need to create a snapshot of the validity state at the time this function is called to avoid unpredictable React renders.
    let validity = input.validity;
    return {
        badInput: validity.badInput,
        customError: validity.customError,
        patternMismatch: validity.patternMismatch,
        rangeOverflow: validity.rangeOverflow,
        rangeUnderflow: validity.rangeUnderflow,
        stepMismatch: validity.stepMismatch,
        tooLong: validity.tooLong,
        tooShort: validity.tooShort,
        typeMismatch: validity.typeMismatch,
        valueMissing: validity.valueMissing,
        valid: validity.valid
    };
}
function $e93e671b31057976$var$getNativeValidity(input) {
    return {
        isInvalid: !input.validity.valid,
        validationDetails: $e93e671b31057976$var$getValidity(input),
        validationErrors: input.validationMessage ? [
            input.validationMessage
        ] : []
    };
}
function $e93e671b31057976$var$getFirstInvalidInput(form) {
    for(let i = 0; i < form.elements.length; i++){
        let element = form.elements[i];
        if (!element.validity.valid) return element;
    }
    return null;
}



//# sourceMappingURL=useFormValidation.module.js.map


/***/ }),

/***/ 51623:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ $3017fa7ffdddec74$export$8042c6c013fd5226)
/* harmony export */ });
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8356);


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
    function updateSelected(value) {
        if (!isReadOnly) setSelected(value);
    }
    function toggleState() {
        if (!isReadOnly) setSelected(!isSelected);
    }
    return {
        isSelected: isSelected,
        setSelected: updateSelected,
        toggle: toggleState
    };
}



//# sourceMappingURL=useToggleState.module.js.map


/***/ }),

/***/ 58044:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ $406796ff087fe49b$export$e375f10ce42261c5)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-stately/form/dist/useFormValidationState.mjs
var useFormValidationState = __webpack_require__(71144);
// EXTERNAL MODULE: ./node_modules/@react-aria/form/dist/useFormValidation.mjs
var useFormValidation = __webpack_require__(48868);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/usePress.mjs + 6 modules
var usePress = __webpack_require__(35044);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useFormReset.mjs
var useFormReset = __webpack_require__(8343);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusable.mjs
var useFocusable = __webpack_require__(28940);
;// ./node_modules/@react-aria/toggle/dist/useToggle.mjs



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

function $d2c8e2b0480f3f34$export$cbe85ee05b554577(props, state, ref) {
    let { isDisabled: isDisabled = false, isReadOnly: isReadOnly = false, value: value, name: name, children: children, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, validationState: validationState = 'valid', isInvalid: isInvalid } = props;
    let onChange = (e)=>{
        // since we spread props on label, onChange will end up there as well as in here.
        // so we have to stop propagation at the lowest level that we care about
        e.stopPropagation();
        state.setSelected(e.target.checked);
    };
    let hasChildren = children != null;
    let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
    if (!hasChildren && !hasAriaLabel && "production" !== 'production') // removed by dead control flow
{}
    // Handle press state for keyboard interactions and cases where labelProps is not used.
    let { pressProps: pressProps, isPressed: isPressed } = (0, usePress/* usePress */.d)({
        isDisabled: isDisabled
    });
    // Handle press state on the label.
    let { pressProps: labelProps, isPressed: isLabelPressed } = (0, usePress/* usePress */.d)({
        onPress () {
            var _ref_current;
            state.toggle();
            (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.focus();
        },
        isDisabled: isDisabled || isReadOnly
    });
    let { focusableProps: focusableProps } = (0, useFocusable/* useFocusable */.Wc)(props, ref);
    let interactions = (0, mergeProps/* mergeProps */.v)(pressProps, focusableProps);
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        labelable: true
    });
    (0, useFormReset/* useFormReset */.F)(ref, state.isSelected, state.setSelected);
    return {
        labelProps: (0, mergeProps/* mergeProps */.v)(labelProps, {
            onClick: (e)=>e.preventDefault()
        }),
        inputProps: (0, mergeProps/* mergeProps */.v)(domProps, {
            'aria-invalid': isInvalid || validationState === 'invalid' || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-controls': props['aria-controls'],
            'aria-readonly': isReadOnly || undefined,
            onChange: onChange,
            disabled: isDisabled,
            ...value == null ? {} : {
                value: value
            },
            name: name,
            type: 'checkbox',
            ...interactions
        }),
        isSelected: state.isSelected,
        isPressed: isPressed || isLabelPressed,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isInvalid: isInvalid || validationState === 'invalid'
    };
}



//# sourceMappingURL=useToggle.module.js.map

;// ./node_modules/@react-aria/checkbox/dist/useCheckbox.mjs







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





function $406796ff087fe49b$export$e375f10ce42261c5(props, state, inputRef) {
    // Create validation state here because it doesn't make sense to add to general useToggleState.
    let validationState = (0, useFormValidationState/* useFormValidationState */.KZ)({
        ...props,
        value: state.isSelected
    });
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = validationState.displayValidation;
    let { labelProps: labelProps, inputProps: inputProps, isSelected: isSelected, isPressed: isPressed, isDisabled: isDisabled, isReadOnly: isReadOnly } = (0, $d2c8e2b0480f3f34$export$cbe85ee05b554577)({
        ...props,
        isInvalid: isInvalid
    }, state, inputRef);
    (0, useFormValidation/* useFormValidation */.X)(props, validationState, inputRef);
    let { isIndeterminate: isIndeterminate, isRequired: isRequired, validationBehavior: validationBehavior = 'aria' } = props;
    (0, react.useEffect)(()=>{
        // indeterminate is a property, but it can only be set via javascript
        // https://css-tricks.com/indeterminate-checkboxes/
        if (inputRef.current) inputRef.current.indeterminate = !!isIndeterminate;
    });
    // Reset validation state on label press for checkbox with a hidden input.
    let { pressProps: pressProps } = (0, usePress/* usePress */.d)({
        isDisabled: isDisabled || isReadOnly,
        onPress () {
            // @ts-expect-error
            let { [(0, useFormValidationState/* privateValidationStateProp */.Lf)]: groupValidationState } = props;
            let { commitValidation: commitValidation } = groupValidationState ? groupValidationState : validationState;
            commitValidation();
        }
    });
    return {
        labelProps: (0, mergeProps/* mergeProps */.v)(labelProps, pressProps),
        inputProps: {
            ...inputProps,
            checked: isSelected,
            'aria-required': isRequired && validationBehavior === 'aria' || undefined,
            required: isRequired && validationBehavior === 'native'
        },
        isSelected: isSelected,
        isPressed: isPressed,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}



//# sourceMappingURL=useCheckbox.module.js.map


/***/ }),

/***/ 71144:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KZ: () => (/* binding */ $e5be200c675c3b3a$export$fc1a364ae1f3ff10),
/* harmony export */   Lf: () => (/* binding */ $e5be200c675c3b3a$export$a763b9476acd3eb),
/* harmony export */   Xy: () => (/* binding */ $e5be200c675c3b3a$export$571b5131b7e65c11),
/* harmony export */   YD: () => (/* binding */ $e5be200c675c3b3a$export$dad6ae84456c676a),
/* harmony export */   cX: () => (/* binding */ $e5be200c675c3b3a$export$75ee7c75d68f5b0e),
/* harmony export */   oE: () => (/* binding */ $e5be200c675c3b3a$export$aca958c65c314e6c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


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
const $e5be200c675c3b3a$export$aca958c65c314e6c = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valueMissing: false,
    valid: true
};
const $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE = {
    ...$e5be200c675c3b3a$export$aca958c65c314e6c,
    customError: true,
    valid: false
};
const $e5be200c675c3b3a$export$dad6ae84456c676a = {
    isInvalid: false,
    validationDetails: $e5be200c675c3b3a$export$aca958c65c314e6c,
    validationErrors: []
};
const $e5be200c675c3b3a$export$571b5131b7e65c11 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $e5be200c675c3b3a$export$a763b9476acd3eb = '__formValidationState' + Date.now();
function $e5be200c675c3b3a$export$fc1a364ae1f3ff10(props) {
    // Private prop for parent components to pass state to children.
    if (props[$e5be200c675c3b3a$export$a763b9476acd3eb]) {
        let { realtimeValidation: realtimeValidation, displayValidation: displayValidation, updateValidation: updateValidation, resetValidation: resetValidation, commitValidation: commitValidation } = props[$e5be200c675c3b3a$export$a763b9476acd3eb];
        return {
            realtimeValidation: realtimeValidation,
            displayValidation: displayValidation,
            updateValidation: updateValidation,
            resetValidation: resetValidation,
            commitValidation: commitValidation
        };
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return $e5be200c675c3b3a$var$useFormValidationStateImpl(props);
}
function $e5be200c675c3b3a$var$useFormValidationStateImpl(props) {
    let { isInvalid: isInvalid, validationState: validationState, name: name, value: value, builtinValidation: builtinValidation, validate: validate, validationBehavior: validationBehavior = 'aria' } = props;
    // backward compatibility.
    if (validationState) isInvalid || (isInvalid = validationState === 'invalid');
    // If the isInvalid prop is controlled, update validation result in realtime.
    let controlledError = isInvalid !== undefined ? {
        isInvalid: isInvalid,
        validationErrors: [],
        validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
    } : null;
    // Perform custom client side validation.
    let clientError = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!validate || value == null) return null;
        let validateErrors = $e5be200c675c3b3a$var$runValidate(validate, value);
        return $e5be200c675c3b3a$var$getValidationResult(validateErrors);
    }, [
        validate,
        value
    ]);
    if (builtinValidation === null || builtinValidation === void 0 ? void 0 : builtinValidation.validationDetails.valid) builtinValidation = undefined;
    // Get relevant server errors from the form.
    let serverErrors = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($e5be200c675c3b3a$export$571b5131b7e65c11);
    let serverErrorMessages = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (name) return Array.isArray(name) ? name.flatMap((name)=>$e5be200c675c3b3a$var$asArray(serverErrors[name])) : $e5be200c675c3b3a$var$asArray(serverErrors[name]);
        return [];
    }, [
        serverErrors,
        name
    ]);
    // Show server errors when the form gets a new value, and clear when the user changes the value.
    let [lastServerErrors, setLastServerErrors] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(serverErrors);
    let [isServerErrorCleared, setServerErrorCleared] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    if (serverErrors !== lastServerErrors) {
        setLastServerErrors(serverErrors);
        setServerErrorCleared(false);
    }
    let serverError = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>$e5be200c675c3b3a$var$getValidationResult(isServerErrorCleared ? [] : serverErrorMessages), [
        isServerErrorCleared,
        serverErrorMessages
    ]);
    // Track the next validation state in a ref until commitValidation is called.
    let nextValidation = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let [currentValidity, setCurrentValidity] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let lastError = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let commitValidation = ()=>{
        if (!commitQueued) return;
        setCommitQueued(false);
        let error = clientError || builtinValidation || nextValidation.current;
        if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
            lastError.current = error;
            setCurrentValidity(error);
        }
    };
    let [commitQueued, setCommitQueued] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(commitValidation);
    // realtimeValidation is used to update the native input element's state based on custom validation logic.
    // displayValidation is the currently displayed validation state that the user sees (e.g. on input change/form submit).
    // With validationBehavior="aria", all errors are displayed in realtime rather than on submit.
    let realtimeValidation = controlledError || serverError || clientError || builtinValidation || $e5be200c675c3b3a$export$dad6ae84456c676a;
    let displayValidation = validationBehavior === 'native' ? controlledError || serverError || currentValidity : controlledError || serverError || clientError || builtinValidation || currentValidity;
    return {
        realtimeValidation: realtimeValidation,
        displayValidation: displayValidation,
        updateValidation (value) {
            // If validationBehavior is 'aria', update in realtime. Otherwise, store in a ref until commit.
            if (validationBehavior === 'aria' && !$e5be200c675c3b3a$var$isEqualValidation(currentValidity, value)) setCurrentValidity(value);
            else nextValidation.current = value;
        },
        resetValidation () {
            // Update the currently displayed validation state to valid on form reset,
            // even if the native validity says it isn't. It'll show again on the next form submit.
            let error = $e5be200c675c3b3a$export$dad6ae84456c676a;
            if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
                lastError.current = error;
                setCurrentValidity(error);
            }
            // Do not commit validation after the next render. This avoids a condition where
            // useSelect calls commitValidation inside an onReset handler.
            if (validationBehavior === 'native') setCommitQueued(false);
            setServerErrorCleared(true);
        },
        commitValidation () {
            // Commit validation state so the user sees it on blur/change/submit. Also clear any server errors.
            // Wait until after the next render to commit so that the latest value has been validated.
            if (validationBehavior === 'native') setCommitQueued(true);
            setServerErrorCleared(true);
        }
    };
}
function $e5be200c675c3b3a$var$asArray(v) {
    if (!v) return [];
    return Array.isArray(v) ? v : [
        v
    ];
}
function $e5be200c675c3b3a$var$runValidate(validate, value) {
    if (typeof validate === 'function') {
        let e = validate(value);
        if (e && typeof e !== 'boolean') return $e5be200c675c3b3a$var$asArray(e);
    }
    return [];
}
function $e5be200c675c3b3a$var$getValidationResult(errors) {
    return errors.length ? {
        isInvalid: true,
        validationErrors: errors,
        validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
    } : null;
}
function $e5be200c675c3b3a$var$isEqualValidation(a, b) {
    if (a === b) return true;
    return !!a && !!b && a.isInvalid === b.isInvalid && a.validationErrors.length === b.validationErrors.length && a.validationErrors.every((a, i)=>a === b.validationErrors[i]) && Object.entries(a.validationDetails).every(([k, v])=>b.validationDetails[k] === v);
}
function $e5be200c675c3b3a$export$75ee7c75d68f5b0e(...results) {
    let errors = new Set();
    let isInvalid = false;
    let validationDetails = {
        ...$e5be200c675c3b3a$export$aca958c65c314e6c
    };
    for (let v of results){
        var _validationDetails, _key;
        for (let e of v.validationErrors)errors.add(e);
        // Only these properties apply for checkboxes.
        isInvalid || (isInvalid = v.isInvalid);
        for(let key in validationDetails)(_validationDetails = validationDetails)[_key = key] || (_validationDetails[_key] = v.validationDetails[key]);
    }
    validationDetails.valid = !isInvalid;
    return {
        isInvalid: isInvalid,
        validationErrors: [
            ...errors
        ],
        validationDetails: validationDetails
    };
}



//# sourceMappingURL=useFormValidationState.module.js.map


/***/ })

}]);