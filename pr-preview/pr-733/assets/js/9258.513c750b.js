"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[9258],{

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


/***/ }),

/***/ 85441:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ $2baaea4c71418dea$export$294aa081a6c6f55d)
/* harmony export */ });
/* harmony import */ var _useLabel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64887);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84137);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32217);



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

function $2baaea4c71418dea$export$294aa081a6c6f55d(props) {
    let { description: description, errorMessage: errorMessage, isInvalid: isInvalid, validationState: validationState } = props;
    let { labelProps: labelProps, fieldProps: fieldProps } = (0, _useLabel_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLabel */ .M)(props);
    let descriptionId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useSlotId */ .X1)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    let errorMessageId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useSlotId */ .X1)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    fieldProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(fieldProps, {
        'aria-describedby': [
            descriptionId,
            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
            errorMessageId,
            props['aria-describedby']
        ].filter(Boolean).join(' ') || undefined
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps,
        descriptionProps: {
            id: descriptionId
        },
        errorMessageProps: {
            id: errorMessageId
        }
    };
}



//# sourceMappingURL=useField.module.js.map


/***/ }),

/***/ 93347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CalendarDays)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("calendar-days", __iconNode);


//# sourceMappingURL=calendar-days.js.map


/***/ }),

/***/ 98013:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  lr: () => (/* binding */ $06d5b8ec9ee5d538$export$5109c6dd95d8fb00),
  Ur: () => (/* binding */ $06d5b8ec9ee5d538$export$17334619f3ac2224)
});

// UNUSED EXPORTS: DatePickerContext, DatePickerStateContext, DateRangePickerContext, DateRangePickerStateContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Calendar.mjs + 44 modules
var Calendar = __webpack_require__(88519);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/DateField.mjs + 41 modules
var DateField = __webpack_require__(68407);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Form.mjs
var Form = __webpack_require__(23128);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Group.mjs
var Group = __webpack_require__(63899);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@react-aria/datepicker/dist/intlStrings.mjs + 34 modules
var intlStrings = __webpack_require__(71794);
// EXTERNAL MODULE: ./node_modules/@react-aria/datepicker/dist/useDateField.mjs
var useDateField = __webpack_require__(31093);
// EXTERNAL MODULE: ./node_modules/@react-aria/datepicker/dist/useDatePickerGroup.mjs
var useDatePickerGroup = __webpack_require__(77458);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs + 2 modules
var FocusScope = __webpack_require__(13560);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useId.mjs + 1 modules
var useId = __webpack_require__(84137);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useDescription.mjs
var useDescription = __webpack_require__(44346);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-stately/form/dist/useFormValidationState.mjs
var useFormValidationState = __webpack_require__(71144);
// EXTERNAL MODULE: ./node_modules/@react-aria/label/dist/useField.mjs
var useField = __webpack_require__(85441);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
var useFocusWithin = __webpack_require__(59461);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(29571);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@react-aria/datepicker/dist/useDatePicker.mjs












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









function $6057a3d2a53a12fd$export$42df105a73306d51(props, state, ref) {
    let buttonId = (0, useId/* useId */.Bi)();
    let dialogId = (0, useId/* useId */.Bi)();
    let fieldId = (0, useId/* useId */.Bi)();
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault(intlStrings/* default */.A))), '@react-aria/datepicker');
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, useField/* useField */.M)({
        ...props,
        labelElementType: 'span',
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let groupProps = (0, useDatePickerGroup/* useDatePickerGroup */.P)(state, ref);
    let labelledBy = fieldProps['aria-labelledby'] || fieldProps.id;
    let { locale: locale } = (0, context/* useLocale */.Y)();
    let date = state.formatValue(locale, {
        month: 'long'
    });
    let description = date ? stringFormatter.format('selectedDateDescription', {
        date: date
    }) : '';
    let descProps = (0, useDescription/* useDescription */.I)(description);
    let ariaDescribedBy = [
        descProps['aria-describedby'],
        fieldProps['aria-describedby']
    ].filter(Boolean).join(' ') || undefined;
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props);
    let focusManager = (0, react.useMemo)(()=>(0, FocusScope/* createFocusManager */.C7)(ref), [
        ref
    ]);
    let isFocused = (0, react.useRef)(false);
    let { focusWithinProps: focusWithinProps } = (0, useFocusWithin/* useFocusWithin */.R)({
        ...props,
        isDisabled: state.isOpen,
        onBlurWithin: (e)=>{
            // Ignore when focus moves into the popover.
            let dialog = document.getElementById(dialogId);
            if (!(dialog === null || dialog === void 0 ? void 0 : dialog.contains(e.relatedTarget))) {
                var _props_onBlur, _props_onFocusChange;
                isFocused.current = false;
                (_props_onBlur = props.onBlur) === null || _props_onBlur === void 0 ? void 0 : _props_onBlur.call(props, e);
                (_props_onFocusChange = props.onFocusChange) === null || _props_onFocusChange === void 0 ? void 0 : _props_onFocusChange.call(props, false);
            }
        },
        onFocusWithin: (e)=>{
            if (!isFocused.current) {
                var _props_onFocus, _props_onFocusChange;
                isFocused.current = true;
                (_props_onFocus = props.onFocus) === null || _props_onFocus === void 0 ? void 0 : _props_onFocus.call(props, e);
                (_props_onFocusChange = props.onFocusChange) === null || _props_onFocusChange === void 0 ? void 0 : _props_onFocusChange.call(props, true);
            }
        }
    });
    return {
        groupProps: (0, mergeProps/* mergeProps */.v)(domProps, groupProps, fieldProps, descProps, focusWithinProps, {
            role: 'group',
            'aria-disabled': props.isDisabled || null,
            'aria-labelledby': labelledBy,
            'aria-describedby': ariaDescribedBy,
            onKeyDown (e) {
                if (state.isOpen) return;
                if (props.onKeyDown) props.onKeyDown(e);
            },
            onKeyUp (e) {
                if (state.isOpen) return;
                if (props.onKeyUp) props.onKeyUp(e);
            }
        }),
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                focusManager.focusFirst();
            }
        },
        fieldProps: {
            ...fieldProps,
            id: fieldId,
            [(0, useDateField/* roleSymbol */.pK)]: 'presentation',
            'aria-describedby': ariaDescribedBy,
            value: state.value,
            onChange: state.setValue,
            placeholderValue: props.placeholderValue,
            hideTimeZone: props.hideTimeZone,
            hourCycle: props.hourCycle,
            shouldForceLeadingZeros: props.shouldForceLeadingZeros,
            granularity: props.granularity,
            isDisabled: props.isDisabled,
            isReadOnly: props.isReadOnly,
            isRequired: props.isRequired,
            validationBehavior: props.validationBehavior,
            // DatePicker owns the validation state for the date field.
            [(0, useFormValidationState/* privateValidationStateProp */.Lf)]: state,
            autoFocus: props.autoFocus,
            name: props.name
        },
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        buttonProps: {
            ...descProps,
            id: buttonId,
            'aria-haspopup': 'dialog',
            'aria-label': stringFormatter.format('calendar'),
            'aria-labelledby': `${buttonId} ${labelledBy}`,
            'aria-describedby': ariaDescribedBy,
            'aria-expanded': state.isOpen,
            isDisabled: props.isDisabled || props.isReadOnly,
            onPress: ()=>state.setOpen(true)
        },
        dialogProps: {
            id: dialogId,
            'aria-labelledby': `${buttonId} ${labelledBy}`
        },
        calendarProps: {
            autoFocus: true,
            value: state.dateValue,
            onChange: state.setDateValue,
            minValue: props.minValue,
            maxValue: props.maxValue,
            isDisabled: props.isDisabled,
            isReadOnly: props.isReadOnly,
            isDateUnavailable: props.isDateUnavailable,
            defaultFocusedValue: state.dateValue ? undefined : props.placeholderValue,
            isInvalid: state.isInvalid,
            errorMessage: typeof props.errorMessage === 'function' ? props.errorMessage(state.displayValidation) : props.errorMessage || state.displayValidation.validationErrors.join(' ')
        },
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}



//# sourceMappingURL=useDatePicker.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
;// ./node_modules/@react-aria/datepicker/dist/useDateRangePicker.mjs












function useDateRangePicker_$parcel$interopDefault(a) {
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









function $887cac91b7cc8801$export$12fd5f0e9f4bb192(props, state, ref) {
    var _state_value, _state_value1, _state_dateRange;
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, (useDateRangePicker_$parcel$interopDefault(intlStrings/* default */.A))), '@react-aria/datepicker');
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, useField/* useField */.M)({
        ...props,
        labelElementType: 'span',
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let labelledBy = fieldProps['aria-labelledby'] || fieldProps.id;
    let { locale: locale } = (0, context/* useLocale */.Y)();
    let range = state.formatValue(locale, {
        month: 'long'
    });
    let description = range ? stringFormatter.format('selectedRangeDescription', {
        startDate: range.start,
        endDate: range.end
    }) : '';
    let descProps = (0, useDescription/* useDescription */.I)(description);
    let startFieldProps = {
        'aria-label': stringFormatter.format('startDate'),
        'aria-labelledby': labelledBy
    };
    let endFieldProps = {
        'aria-label': stringFormatter.format('endDate'),
        'aria-labelledby': labelledBy
    };
    let buttonId = (0, useId/* useId */.Bi)();
    let dialogId = (0, useId/* useId */.Bi)();
    let groupProps = (0, useDatePickerGroup/* useDatePickerGroup */.P)(state, ref);
    let ariaDescribedBy = [
        descProps['aria-describedby'],
        fieldProps['aria-describedby']
    ].filter(Boolean).join(' ') || undefined;
    let focusManager = (0, react.useMemo)(()=>(0, FocusScope/* createFocusManager */.C7)(ref, {
            // Exclude the button from the focus manager.
            accept: (element)=>element.id !== buttonId
        }), [
        ref,
        buttonId
    ]);
    let commonFieldProps = {
        [(0, useDateField/* focusManagerSymbol */.so)]: focusManager,
        [(0, useDateField/* roleSymbol */.pK)]: 'presentation',
        'aria-describedby': ariaDescribedBy,
        placeholderValue: props.placeholderValue,
        hideTimeZone: props.hideTimeZone,
        hourCycle: props.hourCycle,
        granularity: props.granularity,
        shouldForceLeadingZeros: props.shouldForceLeadingZeros,
        isDisabled: props.isDisabled,
        isReadOnly: props.isReadOnly,
        isRequired: props.isRequired,
        validationBehavior: props.validationBehavior
    };
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props);
    let isFocused = (0, react.useRef)(false);
    let { focusWithinProps: focusWithinProps } = (0, useFocusWithin/* useFocusWithin */.R)({
        ...props,
        isDisabled: state.isOpen,
        onBlurWithin: (e)=>{
            // Ignore when focus moves into the popover.
            let dialog = document.getElementById(dialogId);
            if (!(dialog === null || dialog === void 0 ? void 0 : dialog.contains(e.relatedTarget))) {
                var _props_onBlur, _props_onFocusChange;
                isFocused.current = false;
                (_props_onBlur = props.onBlur) === null || _props_onBlur === void 0 ? void 0 : _props_onBlur.call(props, e);
                (_props_onFocusChange = props.onFocusChange) === null || _props_onFocusChange === void 0 ? void 0 : _props_onFocusChange.call(props, false);
            }
        },
        onFocusWithin: (e)=>{
            if (!isFocused.current) {
                var _props_onFocus, _props_onFocusChange;
                isFocused.current = true;
                (_props_onFocus = props.onFocus) === null || _props_onFocus === void 0 ? void 0 : _props_onFocus.call(props, e);
                (_props_onFocusChange = props.onFocusChange) === null || _props_onFocusChange === void 0 ? void 0 : _props_onFocusChange.call(props, true);
            }
        }
    });
    let startFieldValidation = (0, react.useRef)((0, useFormValidationState/* DEFAULT_VALIDATION_RESULT */.YD));
    let endFieldValidation = (0, react.useRef)((0, useFormValidationState/* DEFAULT_VALIDATION_RESULT */.YD));
    var _state_value_start, _state_value_end;
    return {
        groupProps: (0, mergeProps/* mergeProps */.v)(domProps, groupProps, fieldProps, descProps, focusWithinProps, {
            role: 'group',
            'aria-disabled': props.isDisabled || null,
            'aria-describedby': ariaDescribedBy,
            onKeyDown (e) {
                if (state.isOpen) return;
                if (props.onKeyDown) props.onKeyDown(e);
            },
            onKeyUp (e) {
                if (state.isOpen) return;
                if (props.onKeyUp) props.onKeyUp(e);
            }
        }),
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                focusManager.focusFirst();
            }
        },
        buttonProps: {
            ...descProps,
            id: buttonId,
            'aria-haspopup': 'dialog',
            'aria-label': stringFormatter.format('calendar'),
            'aria-labelledby': `${buttonId} ${labelledBy}`,
            'aria-describedby': ariaDescribedBy,
            'aria-expanded': state.isOpen,
            isDisabled: props.isDisabled || props.isReadOnly,
            onPress: ()=>state.setOpen(true)
        },
        dialogProps: {
            id: dialogId,
            'aria-labelledby': `${buttonId} ${labelledBy}`
        },
        startFieldProps: {
            ...startFieldProps,
            ...commonFieldProps,
            value: (_state_value_start = (_state_value = state.value) === null || _state_value === void 0 ? void 0 : _state_value.start) !== null && _state_value_start !== void 0 ? _state_value_start : null,
            onChange: (start)=>state.setDateTime('start', start),
            autoFocus: props.autoFocus,
            name: props.startName,
            [(0, useFormValidationState/* privateValidationStateProp */.Lf)]: {
                realtimeValidation: state.realtimeValidation,
                displayValidation: state.displayValidation,
                updateValidation (e) {
                    startFieldValidation.current = e;
                    state.updateValidation((0, useFormValidationState/* mergeValidation */.cX)(e, endFieldValidation.current));
                },
                resetValidation: state.resetValidation,
                commitValidation: state.commitValidation
            }
        },
        endFieldProps: {
            ...endFieldProps,
            ...commonFieldProps,
            value: (_state_value_end = (_state_value1 = state.value) === null || _state_value1 === void 0 ? void 0 : _state_value1.end) !== null && _state_value_end !== void 0 ? _state_value_end : null,
            onChange: (end)=>state.setDateTime('end', end),
            name: props.endName,
            [(0, useFormValidationState/* privateValidationStateProp */.Lf)]: {
                realtimeValidation: state.realtimeValidation,
                displayValidation: state.displayValidation,
                updateValidation (e) {
                    endFieldValidation.current = e;
                    state.updateValidation((0, useFormValidationState/* mergeValidation */.cX)(startFieldValidation.current, e));
                },
                resetValidation: state.resetValidation,
                commitValidation: state.commitValidation
            }
        },
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        calendarProps: {
            autoFocus: true,
            value: ((_state_dateRange = state.dateRange) === null || _state_dateRange === void 0 ? void 0 : _state_dateRange.start) && state.dateRange.end ? state.dateRange : null,
            onChange: state.setDateRange,
            minValue: props.minValue,
            maxValue: props.maxValue,
            isDisabled: props.isDisabled,
            isReadOnly: props.isReadOnly,
            isDateUnavailable: props.isDateUnavailable,
            allowsNonContiguousRanges: props.allowsNonContiguousRanges,
            defaultFocusedValue: state.dateRange ? undefined : props.placeholderValue,
            isInvalid: state.isInvalid,
            errorMessage: typeof props.errorMessage === 'function' ? props.errorMessage(state.displayValidation) : props.errorMessage || state.displayValidation.validationErrors.join(' ')
        },
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}



//# sourceMappingURL=useDateRangePicker.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-stately/datepicker/dist/utils.mjs + 35 modules
var dist_utils = __webpack_require__(81856);
// EXTERNAL MODULE: ./node_modules/@internationalized/date/dist/conversion.mjs
var conversion = __webpack_require__(40277);
// EXTERNAL MODULE: ./node_modules/@internationalized/date/dist/DateFormatter.mjs
var DateFormatter = __webpack_require__(93321);
// EXTERNAL MODULE: ./node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs
var useOverlayTriggerState = __webpack_require__(71732);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/useControlledState.mjs
var useControlledState = __webpack_require__(8356);
;// ./node_modules/@react-stately/datepicker/dist/useDatePickerState.mjs







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





function $ab5bf3f618090389$export$87194bb378cc3ac2(props) {
    let overlayState = (0, useOverlayTriggerState/* useOverlayTriggerState */.T)(props);
    let [value, setValue] = (0, useControlledState/* useControlledState */.P)(props.value, props.defaultValue || null, props.onChange);
    let v = value || props.placeholderValue || null;
    let [granularity, defaultTimeZone] = (0, dist_utils/* useDefaultProps */.bf)(v, props.granularity);
    let dateValue = value != null ? value.toDate(defaultTimeZone !== null && defaultTimeZone !== void 0 ? defaultTimeZone : 'UTC') : null;
    let hasTime = granularity === 'hour' || granularity === 'minute' || granularity === 'second';
    var _props_shouldCloseOnSelect;
    let shouldCloseOnSelect = (_props_shouldCloseOnSelect = props.shouldCloseOnSelect) !== null && _props_shouldCloseOnSelect !== void 0 ? _props_shouldCloseOnSelect : true;
    let [selectedDate, setSelectedDate] = (0, react.useState)(null);
    let [selectedTime, setSelectedTime] = (0, react.useState)(null);
    if (value) {
        selectedDate = value;
        if ('hour' in value) selectedTime = value;
    }
    // props.granularity must actually exist in the value if one is provided.
    if (v && !(granularity in v)) throw new Error('Invalid granularity ' + granularity + ' for value ' + v.toString());
    let showEra = (value === null || value === void 0 ? void 0 : value.calendar.identifier) === 'gregory' && value.era === 'BC';
    let formatOpts = (0, react.useMemo)(()=>({
            granularity: granularity,
            timeZone: defaultTimeZone,
            hideTimeZone: props.hideTimeZone,
            hourCycle: props.hourCycle,
            shouldForceLeadingZeros: props.shouldForceLeadingZeros,
            showEra: showEra
        }), [
        granularity,
        props.hourCycle,
        props.shouldForceLeadingZeros,
        defaultTimeZone,
        props.hideTimeZone,
        showEra
    ]);
    let { minValue: minValue, maxValue: maxValue, isDateUnavailable: isDateUnavailable } = props;
    let builtinValidation = (0, react.useMemo)(()=>(0, dist_utils/* getValidationResult */.nz)(value, minValue, maxValue, isDateUnavailable, formatOpts), [
        value,
        minValue,
        maxValue,
        isDateUnavailable,
        formatOpts
    ]);
    let validation = (0, useFormValidationState/* useFormValidationState */.KZ)({
        ...props,
        value: value,
        builtinValidation: builtinValidation
    });
    let isValueInvalid = validation.displayValidation.isInvalid;
    let validationState = props.validationState || (isValueInvalid ? 'invalid' : null);
    let commitValue = (date, time)=>{
        setValue('timeZone' in time ? time.set((0, conversion/* toCalendarDate */.gw)(date)) : (0, conversion/* toCalendarDateTime */.tR)(date, time));
        setSelectedDate(null);
        setSelectedTime(null);
        validation.commitValidation();
    };
    // Intercept setValue to make sure the Time section is not changed by date selection in Calendar
    let selectDate = (newValue)=>{
        let shouldClose = typeof shouldCloseOnSelect === 'function' ? shouldCloseOnSelect() : shouldCloseOnSelect;
        if (hasTime) {
            if (selectedTime || shouldClose) commitValue(newValue, selectedTime || (0, dist_utils/* getPlaceholderTime */.$l)(props.defaultValue || props.placeholderValue));
            else setSelectedDate(newValue);
        } else {
            setValue(newValue);
            validation.commitValidation();
        }
        if (shouldClose) overlayState.setOpen(false);
    };
    let selectTime = (newValue)=>{
        if (selectedDate && newValue) commitValue(selectedDate, newValue);
        else setSelectedTime(newValue);
    };
    return {
        ...validation,
        value: value,
        setValue: setValue,
        dateValue: selectedDate,
        timeValue: selectedTime,
        setDateValue: selectDate,
        setTimeValue: selectTime,
        granularity: granularity,
        hasTime: hasTime,
        ...overlayState,
        setOpen (isOpen) {
            // Commit the selected date when the calendar is closed. Use a placeholder time if one wasn't set.
            // If only the time was set and not the date, don't commit. The state will be preserved until
            // the user opens the popover again.
            if (!isOpen && !value && selectedDate && hasTime) commitValue(selectedDate, selectedTime || (0, dist_utils/* getPlaceholderTime */.$l)(props.defaultValue || props.placeholderValue));
            overlayState.setOpen(isOpen);
        },
        validationState: validationState,
        isInvalid: isValueInvalid,
        formatValue (locale, fieldOptions) {
            if (!dateValue) return '';
            let formatOptions = (0, dist_utils/* getFormatOptions */.id)(fieldOptions, formatOpts);
            let formatter = new (0, DateFormatter/* DateFormatter */.p)(locale, formatOptions);
            return formatter.format(dateValue);
        },
        getDateFormatter (locale, formatOptions) {
            let newOptions = {
                ...formatOpts,
                ...formatOptions
            };
            let newFormatOptions = (0, dist_utils/* getFormatOptions */.id)({}, newOptions);
            return new (0, DateFormatter/* DateFormatter */.p)(locale, newFormatOptions);
        }
    };
}



//# sourceMappingURL=useDatePickerState.module.js.map

;// ./node_modules/@react-stately/datepicker/dist/useDateRangePickerState.mjs







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





function $93c38a5e28be6249$export$e50a61c1de9f574(props) {
    var _value_start, _value_end;
    let overlayState = (0, useOverlayTriggerState/* useOverlayTriggerState */.T)(props);
    let [controlledValue, setControlledValue] = (0, useControlledState/* useControlledState */.P)(props.value, props.defaultValue || null, props.onChange);
    let [placeholderValue, setPlaceholderValue] = (0, react.useState)(()=>controlledValue || {
            start: null,
            end: null
        });
    // Reset the placeholder if the value prop is set to null.
    if (controlledValue == null && placeholderValue.start && placeholderValue.end) {
        placeholderValue = {
            start: null,
            end: null
        };
        setPlaceholderValue(placeholderValue);
    }
    let value = controlledValue || placeholderValue;
    let setValue = (value)=>{
        setPlaceholderValue(value || {
            start: null,
            end: null
        });
        if ($93c38a5e28be6249$var$isCompleteRange(value)) setControlledValue(value);
        else setControlledValue(null);
    };
    let v = (value === null || value === void 0 ? void 0 : value.start) || (value === null || value === void 0 ? void 0 : value.end) || props.placeholderValue || null;
    let [granularity, defaultTimeZone] = (0, dist_utils/* useDefaultProps */.bf)(v, props.granularity);
    let hasTime = granularity === 'hour' || granularity === 'minute' || granularity === 'second';
    var _props_shouldCloseOnSelect;
    let shouldCloseOnSelect = (_props_shouldCloseOnSelect = props.shouldCloseOnSelect) !== null && _props_shouldCloseOnSelect !== void 0 ? _props_shouldCloseOnSelect : true;
    let [dateRange, setSelectedDateRange] = (0, react.useState)(null);
    let [timeRange, setSelectedTimeRange] = (0, react.useState)(null);
    if (value && $93c38a5e28be6249$var$isCompleteRange(value)) {
        dateRange = value;
        if ('hour' in value.start) timeRange = value;
    }
    let commitValue = (dateRange, timeRange)=>{
        setValue({
            start: 'timeZone' in timeRange.start ? timeRange.start.set((0, conversion/* toCalendarDate */.gw)(dateRange.start)) : (0, conversion/* toCalendarDateTime */.tR)(dateRange.start, timeRange.start),
            end: 'timeZone' in timeRange.end ? timeRange.end.set((0, conversion/* toCalendarDate */.gw)(dateRange.end)) : (0, conversion/* toCalendarDateTime */.tR)(dateRange.end, timeRange.end)
        });
        setSelectedDateRange(null);
        setSelectedTimeRange(null);
        validation.commitValidation();
    };
    // Intercept setValue to make sure the Time section is not changed by date selection in Calendar
    let setDateRange = (range)=>{
        let shouldClose = typeof shouldCloseOnSelect === 'function' ? shouldCloseOnSelect() : shouldCloseOnSelect;
        if (hasTime) {
            // Set a placeholder time if the popover is closing so we don't leave the field in an incomplete state.
            if ($93c38a5e28be6249$var$isCompleteRange(range) && (shouldClose || (timeRange === null || timeRange === void 0 ? void 0 : timeRange.start) && (timeRange === null || timeRange === void 0 ? void 0 : timeRange.end))) commitValue(range, {
                start: (timeRange === null || timeRange === void 0 ? void 0 : timeRange.start) || (0, dist_utils/* getPlaceholderTime */.$l)(props.placeholderValue),
                end: (timeRange === null || timeRange === void 0 ? void 0 : timeRange.end) || (0, dist_utils/* getPlaceholderTime */.$l)(props.placeholderValue)
            });
            else setSelectedDateRange(range);
        } else if ($93c38a5e28be6249$var$isCompleteRange(range)) {
            setValue(range);
            validation.commitValidation();
        } else setSelectedDateRange(range);
        if (shouldClose) overlayState.setOpen(false);
    };
    let setTimeRange = (range)=>{
        if ($93c38a5e28be6249$var$isCompleteRange(dateRange) && $93c38a5e28be6249$var$isCompleteRange(range)) commitValue(dateRange, range);
        else setSelectedTimeRange(range);
    };
    let showEra = (value === null || value === void 0 ? void 0 : (_value_start = value.start) === null || _value_start === void 0 ? void 0 : _value_start.calendar.identifier) === 'gregory' && value.start.era === 'BC' || (value === null || value === void 0 ? void 0 : (_value_end = value.end) === null || _value_end === void 0 ? void 0 : _value_end.calendar.identifier) === 'gregory' && value.end.era === 'BC';
    let formatOpts = (0, react.useMemo)(()=>({
            granularity: granularity,
            timeZone: defaultTimeZone,
            hideTimeZone: props.hideTimeZone,
            hourCycle: props.hourCycle,
            shouldForceLeadingZeros: props.shouldForceLeadingZeros,
            showEra: showEra
        }), [
        granularity,
        props.hourCycle,
        props.shouldForceLeadingZeros,
        defaultTimeZone,
        props.hideTimeZone,
        showEra
    ]);
    let { minValue: minValue, maxValue: maxValue, isDateUnavailable: isDateUnavailable } = props;
    let builtinValidation = (0, react.useMemo)(()=>(0, dist_utils/* getRangeValidationResult */.eD)(value, minValue, maxValue, isDateUnavailable, formatOpts), [
        value,
        minValue,
        maxValue,
        isDateUnavailable,
        formatOpts
    ]);
    let validation = (0, useFormValidationState/* useFormValidationState */.KZ)({
        ...props,
        value: controlledValue,
        name: (0, react.useMemo)(()=>[
                props.startName,
                props.endName
            ].filter((n)=>n != null), [
            props.startName,
            props.endName
        ]),
        builtinValidation: builtinValidation
    });
    let isValueInvalid = validation.displayValidation.isInvalid;
    let validationState = props.validationState || (isValueInvalid ? 'invalid' : null);
    return {
        ...validation,
        value: value,
        setValue: setValue,
        dateRange: dateRange,
        timeRange: timeRange,
        granularity: granularity,
        hasTime: hasTime,
        setDate (part, date) {
            var _dateRange_end, _dateRange_start;
            if (part === 'start') setDateRange({
                start: date,
                end: (_dateRange_end = dateRange === null || dateRange === void 0 ? void 0 : dateRange.end) !== null && _dateRange_end !== void 0 ? _dateRange_end : null
            });
            else setDateRange({
                start: (_dateRange_start = dateRange === null || dateRange === void 0 ? void 0 : dateRange.start) !== null && _dateRange_start !== void 0 ? _dateRange_start : null,
                end: date
            });
        },
        setTime (part, time) {
            var _timeRange_end, _timeRange_start;
            if (part === 'start') setTimeRange({
                start: time,
                end: (_timeRange_end = timeRange === null || timeRange === void 0 ? void 0 : timeRange.end) !== null && _timeRange_end !== void 0 ? _timeRange_end : null
            });
            else setTimeRange({
                start: (_timeRange_start = timeRange === null || timeRange === void 0 ? void 0 : timeRange.start) !== null && _timeRange_start !== void 0 ? _timeRange_start : null,
                end: time
            });
        },
        setDateTime (part, dateTime) {
            var _value_end, _value_start;
            if (part === 'start') setValue({
                start: dateTime,
                end: (_value_end = value === null || value === void 0 ? void 0 : value.end) !== null && _value_end !== void 0 ? _value_end : null
            });
            else setValue({
                start: (_value_start = value === null || value === void 0 ? void 0 : value.start) !== null && _value_start !== void 0 ? _value_start : null,
                end: dateTime
            });
        },
        setDateRange: setDateRange,
        setTimeRange: setTimeRange,
        ...overlayState,
        setOpen (isOpen) {
            // Commit the selected date range when the calendar is closed. Use a placeholder time if one wasn't set.
            // If only the time range was set and not the date range, don't commit. The state will be preserved until
            // the user opens the popover again.
            if (!isOpen && !((value === null || value === void 0 ? void 0 : value.start) && (value === null || value === void 0 ? void 0 : value.end)) && $93c38a5e28be6249$var$isCompleteRange(dateRange) && hasTime) commitValue(dateRange, {
                start: (timeRange === null || timeRange === void 0 ? void 0 : timeRange.start) || (0, dist_utils/* getPlaceholderTime */.$l)(props.placeholderValue),
                end: (timeRange === null || timeRange === void 0 ? void 0 : timeRange.end) || (0, dist_utils/* getPlaceholderTime */.$l)(props.placeholderValue)
            });
            overlayState.setOpen(isOpen);
        },
        validationState: validationState,
        isInvalid: isValueInvalid,
        formatValue (locale, fieldOptions) {
            if (!value || !value.start || !value.end) return null;
            let startTimeZone = 'timeZone' in value.start ? value.start.timeZone : undefined;
            let startGranularity = props.granularity || (value.start && 'minute' in value.start ? 'minute' : 'day');
            let endTimeZone = 'timeZone' in value.end ? value.end.timeZone : undefined;
            let endGranularity = props.granularity || (value.end && 'minute' in value.end ? 'minute' : 'day');
            let startOptions = (0, dist_utils/* getFormatOptions */.id)(fieldOptions, {
                granularity: startGranularity,
                timeZone: startTimeZone,
                hideTimeZone: props.hideTimeZone,
                hourCycle: props.hourCycle,
                showEra: value.start.calendar.identifier === 'gregory' && value.start.era === 'BC' || value.end.calendar.identifier === 'gregory' && value.end.era === 'BC'
            });
            let startDate = value.start.toDate(startTimeZone || 'UTC');
            let endDate = value.end.toDate(endTimeZone || 'UTC');
            let startFormatter = new (0, DateFormatter/* DateFormatter */.p)(locale, startOptions);
            let endFormatter;
            if (startTimeZone === endTimeZone && startGranularity === endGranularity && value.start.compare(value.end) !== 0) {
                // Use formatRange, as it results in shorter output when some of the fields
                // are shared between the start and end dates (e.g. the same month).
                // Formatting will fail if the end date is before the start date. Fall back below when that happens.
                try {
                    let parts = startFormatter.formatRangeToParts(startDate, endDate);
                    // Find the separator between the start and end date. This is determined
                    // by finding the last shared literal before the end range.
                    let separatorIndex = -1;
                    for(let i = 0; i < parts.length; i++){
                        let part = parts[i];
                        if (part.source === 'shared' && part.type === 'literal') separatorIndex = i;
                        else if (part.source === 'endRange') break;
                    }
                    // Now we can combine the parts into start and end strings.
                    let start = '';
                    let end = '';
                    for(let i = 0; i < parts.length; i++){
                        if (i < separatorIndex) start += parts[i].value;
                        else if (i > separatorIndex) end += parts[i].value;
                    }
                    return {
                        start: start,
                        end: end
                    };
                } catch  {
                // ignore
                }
                endFormatter = startFormatter;
            } else {
                let endOptions = (0, dist_utils/* getFormatOptions */.id)(fieldOptions, {
                    granularity: endGranularity,
                    timeZone: endTimeZone,
                    hideTimeZone: props.hideTimeZone,
                    hourCycle: props.hourCycle
                });
                endFormatter = new (0, DateFormatter/* DateFormatter */.p)(locale, endOptions);
            }
            return {
                start: startFormatter.format(startDate),
                end: endFormatter.format(endDate)
            };
        },
        getDateFormatter (locale, formatOptions) {
            let newOptions = {
                ...formatOpts,
                ...formatOptions
            };
            let newFormatOptions = (0, dist_utils/* getFormatOptions */.id)({}, newOptions);
            return new (0, DateFormatter/* DateFormatter */.p)(locale, newFormatOptions);
        }
    };
}
function $93c38a5e28be6249$var$isCompleteRange(value) {
    return (value === null || value === void 0 ? void 0 : value.start) != null && value.end != null;
}



//# sourceMappingURL=useDateRangePickerState.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var useResizeObserver = __webpack_require__(77366);
;// ./node_modules/react-aria-components/dist/DatePicker.mjs
















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














const $06d5b8ec9ee5d538$export$cf316c7f3b44c11e = /*#__PURE__*/ (0, react.createContext)(null);
const $06d5b8ec9ee5d538$export$8282edba42ee28a = /*#__PURE__*/ (0, react.createContext)(null);
const $06d5b8ec9ee5d538$export$50a10c048fdcdee9 = /*#__PURE__*/ (0, react.createContext)(null);
const $06d5b8ec9ee5d538$export$80d7ae1f804790be = /*#__PURE__*/ (0, react.createContext)(null);
// Contexts to clear inside the popover.
const $06d5b8ec9ee5d538$var$CLEAR_CONTEXTS = [
    (0, Group/* GroupContext */.t),
    (0, Button/* ButtonContext */.k),
    (0, Label/* LabelContext */.I),
    (0, Text/* TextContext */.h)
];
const $06d5b8ec9ee5d538$export$5109c6dd95d8fb00 = /*#__PURE__*/ (0, react.forwardRef)(function DatePicker(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $06d5b8ec9ee5d538$export$cf316c7f3b44c11e);
    let { validationBehavior: formValidationBehavior } = (0, utils/* useSlottedContext */.CC)((0, Form/* FormContext */.c)) || {};
    var _props_validationBehavior, _ref;
    let validationBehavior = (_ref = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : formValidationBehavior) !== null && _ref !== void 0 ? _ref : 'native';
    let state = (0, $ab5bf3f618090389$export$87194bb378cc3ac2)({
        ...props,
        validationBehavior: validationBehavior
    });
    let groupRef = (0, react.useRef)(null);
    let [labelRef, label] = (0, utils/* useSlot */._E)(!props['aria-label'] && !props['aria-labelledby']);
    let { groupProps: groupProps, labelProps: labelProps, fieldProps: fieldProps, buttonProps: buttonProps, dialogProps: dialogProps, calendarProps: calendarProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, $6057a3d2a53a12fd$export$42df105a73306d51)({
        ...(0, utils/* removeDataAttributes */.SK)(props),
        label: label,
        validationBehavior: validationBehavior
    }, state, groupRef);
    // Allows calendar width to match input group
    let [groupWidth, setGroupWidth] = (0, react.useState)(null);
    let onResize = (0, react.useCallback)(()=>{
        if (groupRef.current) setGroupWidth(groupRef.current.offsetWidth + 'px');
    }, []);
    (0, useResizeObserver/* useResizeObserver */.w)({
        ref: groupRef,
        onResize: onResize
    });
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)({
        within: true
    });
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        values: {
            state: state,
            isFocusWithin: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.isDisabled || false,
            isInvalid: state.isInvalid,
            isOpen: state.isOpen
        },
        defaultClassName: 'react-aria-DatePicker'
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $06d5b8ec9ee5d538$export$50a10c048fdcdee9,
                state
            ],
            [
                (0, Group/* GroupContext */.t),
                {
                    ...groupProps,
                    ref: groupRef,
                    isInvalid: state.isInvalid
                }
            ],
            [
                (0, DateField/* DateFieldContext */.cQ),
                fieldProps
            ],
            [
                (0, Button/* ButtonContext */.k),
                {
                    ...buttonProps,
                    isPressed: state.isOpen
                }
            ],
            [
                (0, Label/* LabelContext */.I),
                {
                    ...labelProps,
                    ref: labelRef,
                    elementType: 'span'
                }
            ],
            [
                (0, Calendar/* CalendarContext */.Yi),
                calendarProps
            ],
            [
                (0, Dialog/* OverlayTriggerStateContext */.RG),
                state
            ],
            [
                (0, Popover/* PopoverContext */.n),
                {
                    trigger: 'DatePicker',
                    triggerRef: groupRef,
                    placement: 'bottom start',
                    style: {
                        '--trigger-width': groupWidth
                    },
                    clearContexts: $06d5b8ec9ee5d538$var$CLEAR_CONTEXTS
                }
            ],
            [
                (0, Dialog/* DialogContext */.MV),
                dialogProps
            ],
            [
                (0, Text/* TextContext */.h),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            [
                (0, FieldError/* FieldErrorContext */.C),
                validation
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement("div", {
        ...focusProps,
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focus-within": isFocused || undefined,
        "data-invalid": state.isInvalid || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-open": state.isOpen || undefined
    }));
});
const $06d5b8ec9ee5d538$export$17334619f3ac2224 = /*#__PURE__*/ (0, react.forwardRef)(function DateRangePicker(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $06d5b8ec9ee5d538$export$8282edba42ee28a);
    let { validationBehavior: formValidationBehavior } = (0, utils/* useSlottedContext */.CC)((0, Form/* FormContext */.c)) || {};
    var _props_validationBehavior, _ref;
    let validationBehavior = (_ref = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : formValidationBehavior) !== null && _ref !== void 0 ? _ref : 'native';
    let state = (0, $93c38a5e28be6249$export$e50a61c1de9f574)({
        ...props,
        validationBehavior: validationBehavior
    });
    let groupRef = (0, react.useRef)(null);
    let [labelRef, label] = (0, utils/* useSlot */._E)(!props['aria-label'] && !props['aria-labelledby']);
    let { groupProps: groupProps, labelProps: labelProps, startFieldProps: startFieldProps, endFieldProps: endFieldProps, buttonProps: buttonProps, dialogProps: dialogProps, calendarProps: calendarProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, $887cac91b7cc8801$export$12fd5f0e9f4bb192)({
        ...(0, utils/* removeDataAttributes */.SK)(props),
        label: label,
        validationBehavior: validationBehavior
    }, state, groupRef);
    // Allows calendar width to match input group
    let [groupWidth, setGroupWidth] = (0, react.useState)(null);
    let onResize = (0, react.useCallback)(()=>{
        if (groupRef.current) setGroupWidth(groupRef.current.offsetWidth + 'px');
    }, []);
    (0, useResizeObserver/* useResizeObserver */.w)({
        ref: groupRef,
        onResize: onResize
    });
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)({
        within: true
    });
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        values: {
            state: state,
            isFocusWithin: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.isDisabled || false,
            isInvalid: state.isInvalid,
            isOpen: state.isOpen
        },
        defaultClassName: 'react-aria-DateRangePicker'
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $06d5b8ec9ee5d538$export$80d7ae1f804790be,
                state
            ],
            [
                (0, Group/* GroupContext */.t),
                {
                    ...groupProps,
                    ref: groupRef,
                    isInvalid: state.isInvalid
                }
            ],
            [
                (0, Button/* ButtonContext */.k),
                {
                    ...buttonProps,
                    isPressed: state.isOpen
                }
            ],
            [
                (0, Label/* LabelContext */.I),
                {
                    ...labelProps,
                    ref: labelRef,
                    elementType: 'span'
                }
            ],
            [
                (0, Calendar/* RangeCalendarContext */.pr),
                calendarProps
            ],
            [
                (0, Dialog/* OverlayTriggerStateContext */.RG),
                state
            ],
            [
                (0, Popover/* PopoverContext */.n),
                {
                    trigger: 'DateRangePicker',
                    triggerRef: groupRef,
                    placement: 'bottom start',
                    style: {
                        '--trigger-width': groupWidth
                    },
                    clearContexts: $06d5b8ec9ee5d538$var$CLEAR_CONTEXTS
                }
            ],
            [
                (0, Dialog/* DialogContext */.MV),
                dialogProps
            ],
            [
                (0, DateField/* DateFieldContext */.cQ),
                {
                    slots: {
                        start: startFieldProps,
                        end: endFieldProps
                    }
                }
            ],
            [
                (0, Text/* TextContext */.h),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            [
                (0, FieldError/* FieldErrorContext */.C),
                validation
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement("div", {
        ...focusProps,
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focus-within": isFocused || undefined,
        "data-invalid": state.isInvalid || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-open": state.isOpen || undefined
    }));
});



//# sourceMappingURL=DatePicker.module.js.map


/***/ })

}]);