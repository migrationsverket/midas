"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1493],{

/***/ 45439
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ $3a442827418ebe87$export$eb2fcfdbd7ba97d4),
/* harmony export */   t: () => (/* binding */ $3a442827418ebe87$export$f9c6924e160136d1)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95841);
/* harmony import */ var react_aria_useHover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68068);
/* harmony import */ var react_aria_mergeProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47425);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);
/* harmony import */ var react_aria_useFocusRing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66683);






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




const $3a442827418ebe87$export$f9c6924e160136d1 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});
const $3a442827418ebe87$export$eb2fcfdbd7ba97d4 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function Group(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $3a442827418ebe87$export$f9c6924e160136d1);
    let { isDisabled: isDisabled, isInvalid: isInvalid, isReadOnly: isReadOnly, onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    isDisabled ??= !!props['aria-disabled'] && props['aria-disabled'] !== 'false';
    isInvalid ??= !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria_useHover__WEBPACK_IMPORTED_MODULE_1__/* .useHover */ .M)({
        onHoverStart: onHoverStart,
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd,
        isDisabled: isDisabled
    });
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria_useFocusRing__WEBPACK_IMPORTED_MODULE_4__/* .useFocusRing */ .o)({
        within: true
    });
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useRenderProps */ .Sl)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocusWithin: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: isDisabled,
            isInvalid: isInvalid
        },
        defaultClassName: 'react-aria-Group'
    });
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT).div, {
        ...(0, react_aria_mergeProps__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(otherProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        role: props.role ?? 'group',
        slot: props.slot ?? undefined,
        "data-focus-within": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-invalid": isInvalid || undefined,
        "data-readonly": isReadOnly || undefined
    }, renderProps.children);
});



//# sourceMappingURL=Group.mjs.map


/***/ },

/***/ 36594
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $41fb335299a4a39e$export$37fb8590cf2c088c),
/* harmony export */   p: () => (/* binding */ $41fb335299a4a39e$export$f5b8910cec6cf069)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95841);
/* harmony import */ var react_aria_private_collections_Hidden__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61207);
/* harmony import */ var react_aria_mergeProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47425);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);
/* harmony import */ var react_aria_useFocusRing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66683);
/* harmony import */ var react_aria_useHover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68068);







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





const $41fb335299a4a39e$export$37fb8590cf2c088c = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});
let $41fb335299a4a39e$var$filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $41fb335299a4a39e$export$f5b8910cec6cf069 = /*#__PURE__*/ (0, react_aria_private_collections_Hidden__WEBPACK_IMPORTED_MODULE_1__/* .createHideableComponent */ .U7)(function Input(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $41fb335299a4a39e$export$37fb8590cf2c088c);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria_useHover__WEBPACK_IMPORTED_MODULE_5__/* .useHover */ .M)({
        ...props,
        isDisabled: props.disabled
    });
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria_useFocusRing__WEBPACK_IMPORTED_MODULE_4__/* .useFocusRing */ .o)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useRenderProps */ .Sl)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.disabled || false,
            isInvalid: isInvalid
        },
        defaultClassName: 'react-aria-Input'
    });
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT).input, {
        ...(0, react_aria_mergeProps__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)($41fb335299a4a39e$var$filterHoverProps(props), focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
});



//# sourceMappingURL=Input.mjs.map


/***/ },

/***/ 28896
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ $bd263d78e9bf3c56$export$f5c9f3c2c4054eec),
/* harmony export */   k: () => (/* binding */ $bd263d78e9bf3c56$export$2dc6166a7e65358c)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95841);
/* harmony import */ var react_aria_mergeProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47425);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);
/* harmony import */ var react_aria_useFocusRing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66683);
/* harmony import */ var react_aria_useHover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68068);











const $bd263d78e9bf3c56$export$2dc6166a7e65358c = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});
let $bd263d78e9bf3c56$var$filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $bd263d78e9bf3c56$export$f5c9f3c2c4054eec = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function TextArea(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $bd263d78e9bf3c56$export$2dc6166a7e65358c);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria_useHover__WEBPACK_IMPORTED_MODULE_4__/* .useHover */ .M)(props);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria_useFocusRing__WEBPACK_IMPORTED_MODULE_3__/* .useFocusRing */ .o)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useRenderProps */ .Sl)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.disabled || false,
            isInvalid: isInvalid
        },
        defaultClassName: 'react-aria-TextArea'
    });
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_2__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT).textarea, {
        ...(0, react_aria_mergeProps__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .v)($bd263d78e9bf3c56$var$filterHoverProps(props), focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
});



//# sourceMappingURL=TextArea.mjs.map


/***/ },

/***/ 41493
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ $b8dcdc58eeae0d40$export$2c73285ae9390cec),
/* harmony export */   H: () => (/* binding */ $b8dcdc58eeae0d40$export$2129e27b3ef0d483)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95841);
/* harmony import */ var _FieldError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3728);
/* harmony import */ var _Autocomplete_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77314);
/* harmony import */ var _Form_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70420);
/* harmony import */ var _Group_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45439);
/* harmony import */ var _Input_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36594);
/* harmony import */ var _Label_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37820);
/* harmony import */ var _TextArea_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28896);
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20987);
/* harmony import */ var react_aria_useTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65931);
/* harmony import */ var react_aria_private_collections_Hidden__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61207);
/* harmony import */ var react_aria_filterDOMProps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46683);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96540);














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












const $b8dcdc58eeae0d40$export$2129e27b3ef0d483 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_12__.createContext)(null);
const $b8dcdc58eeae0d40$export$2c73285ae9390cec = /*#__PURE__*/ (0, react_aria_private_collections_Hidden__WEBPACK_IMPORTED_MODULE_10__/* .createHideableComponent */ .U7)(function TextField(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $b8dcdc58eeae0d40$export$2129e27b3ef0d483);
    let { validationBehavior: formValidationBehavior } = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useSlottedContext */ .CC)((0, _Form_mjs__WEBPACK_IMPORTED_MODULE_3__/* .FormContext */ .c)) || {};
    let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? 'native';
    let inputRef = (0, react__WEBPACK_IMPORTED_MODULE_12__.useRef)(null);
    [props, inputRef] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, inputRef, (0, _Autocomplete_mjs__WEBPACK_IMPORTED_MODULE_2__/* .FieldInputContext */ .wv));
    let [labelRef, label] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useSlot */ ._E)(!props['aria-label'] && !props['aria-labelledby']);
    let [inputElementType, setInputElementType] = (0, react__WEBPACK_IMPORTED_MODULE_12__.useState)('input');
    let { labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, react_aria_useTextField__WEBPACK_IMPORTED_MODULE_9__/* .useTextField */ .v)({
        ...(0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .removeDataAttributes */ .SK)(props),
        inputElementType: inputElementType,
        label: label,
        validationBehavior: validationBehavior
    }, inputRef);
    // Intercept setting the input ref so we can determine what kind of element we have.
    // useTextField uses this to determine what props to include.
    let inputOrTextAreaRef = (0, react__WEBPACK_IMPORTED_MODULE_12__.useCallback)((el)=>{
        inputRef.current = el;
        if (el) setInputElementType(el instanceof HTMLTextAreaElement ? 'textarea' : 'input');
    }, [
        inputRef
    ]);
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useRenderProps */ .Sl)({
        ...props,
        values: {
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid,
            isReadOnly: props.isReadOnly || false,
            isRequired: props.isRequired || false
        },
        defaultClassName: 'react-aria-TextField'
    });
    let DOMProps = (0, react_aria_filterDOMProps__WEBPACK_IMPORTED_MODULE_11__/* .filterDOMProps */ .$)(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_12__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT).div, {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": validation.isInvalid || undefined,
        "data-readonly": props.isReadOnly || undefined,
        "data-required": props.isRequired || undefined
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_12__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .Provider */ .Kq), {
        values: [
            [
                (0, _Label_mjs__WEBPACK_IMPORTED_MODULE_6__/* .LabelContext */ .I),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ],
            [
                (0, _Input_mjs__WEBPACK_IMPORTED_MODULE_5__/* .InputContext */ .E),
                {
                    ...inputProps,
                    ref: inputOrTextAreaRef
                }
            ],
            [
                (0, _TextArea_mjs__WEBPACK_IMPORTED_MODULE_7__/* .TextAreaContext */ .k),
                {
                    ...inputProps,
                    ref: inputOrTextAreaRef
                }
            ],
            [
                (0, _Group_mjs__WEBPACK_IMPORTED_MODULE_4__/* .GroupContext */ .t),
                {
                    role: 'presentation',
                    isInvalid: validation.isInvalid,
                    isDisabled: props.isDisabled || false
                }
            ],
            [
                (0, _Text_mjs__WEBPACK_IMPORTED_MODULE_8__/* .TextContext */ .h),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            [
                (0, _FieldError_mjs__WEBPACK_IMPORTED_MODULE_1__/* .FieldErrorContext */ .C),
                validation
            ]
        ]
    }, renderProps.children));
});



//# sourceMappingURL=TextField.mjs.map


/***/ },

/***/ 80439
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ $191c9b6d48a0a4e2$export$294aa081a6c6f55d)
/* harmony export */ });
/* harmony import */ var _useLabel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60741);
/* harmony import */ var _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47425);
/* harmony import */ var _utils_useId_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19633);




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


function $191c9b6d48a0a4e2$export$294aa081a6c6f55d(props) {
    let { description: description, errorMessage: errorMessage, isInvalid: isInvalid, validationState: validationState } = props;
    let { labelProps: labelProps, fieldProps: fieldProps } = (0, _useLabel_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLabel */ .M)(props);
    let descriptionId = (0, _utils_useId_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useSlotId */ .X1)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    let errorMessageId = (0, _utils_useId_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useSlotId */ .X1)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    fieldProps = (0, _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .v)(fieldProps, {
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



//# sourceMappingURL=useField.mjs.map


/***/ },

/***/ 65931
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ $054f71d2330da2e3$export$712718f7aec83d5)
/* harmony export */ });
/* harmony import */ var _utils_filterDOMProps_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46683);
/* harmony import */ var _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62975);
/* harmony import */ var _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47425);
/* harmony import */ var _label_useField_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80439);
/* harmony import */ var _interactions_useFocusable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55602);
/* harmony import */ var _utils_useFormReset_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31199);
/* harmony import */ var _form_useFormValidation_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99276);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96540);
/* harmony import */ var react_stately_useControlledState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32240);
/* harmony import */ var react_stately_private_form_useFormValidationState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19804);











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









function $054f71d2330da2e3$export$712718f7aec83d5(props, ref) {
    let { inputElementType: inputElementType = 'input', isDisabled: isDisabled = false, isRequired: isRequired = false, isReadOnly: isReadOnly = false, type: type = 'text', validationBehavior: validationBehavior = 'aria' } = props;
    let [value, setValue] = (0, react_stately_useControlledState__WEBPACK_IMPORTED_MODULE_8__/* .useControlledState */ .P)(props.value, props.defaultValue || '', props.onChange);
    let { focusableProps: focusableProps } = (0, _interactions_useFocusable_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useFocusable */ .Wc)(props, ref);
    let validationState = (0, react_stately_private_form_useFormValidationState__WEBPACK_IMPORTED_MODULE_9__/* .useFormValidationState */ .KZ)({
        ...props,
        value: value
    });
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = validationState.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, _label_useField_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useField */ .M)({
        ...props,
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let domProps = (0, _utils_filterDOMProps_mjs__WEBPACK_IMPORTED_MODULE_0__/* .filterDOMProps */ .$)(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type: type,
        pattern: props.pattern
    };
    let [initialValue] = (0, react__WEBPACK_IMPORTED_MODULE_7__.useState)(value);
    (0, _utils_useFormReset_mjs__WEBPACK_IMPORTED_MODULE_5__/* .useFormReset */ .F)(ref, props.defaultValue ?? initialValue, setValue);
    (0, _form_useFormValidation_mjs__WEBPACK_IMPORTED_MODULE_6__/* .useFormValidation */ .X)(props, validationState, ref);
    return {
        labelProps: labelProps,
        inputProps: (0, _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(domProps, inputElementType === 'input' ? inputOnlyProps : undefined, {
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired && validationBehavior === 'native',
            'aria-required': isRequired && validationBehavior === 'aria' || undefined,
            'aria-invalid': isInvalid || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-activedescendant': props['aria-activedescendant'],
            'aria-autocomplete': props['aria-autocomplete'],
            'aria-haspopup': props['aria-haspopup'],
            'aria-controls': props['aria-controls'],
            value: value,
            onChange: (e)=>setValue((0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getEventTarget */ .wt)(e).value),
            autoComplete: props.autoComplete,
            autoCapitalize: props.autoCapitalize,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            form: props.form,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            autoCorrect: props.autoCorrect,
            spellCheck: props.spellCheck,
            [parseInt((0, react__WEBPACK_IMPORTED_MODULE_7__).version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: props.enterKeyHint,
            // Clipboard events
            onCopy: props.onCopy,
            onCut: props.onCut,
            onPaste: props.onPaste,
            // Composition events
            onCompositionEnd: props.onCompositionEnd,
            onCompositionStart: props.onCompositionStart,
            onCompositionUpdate: props.onCompositionUpdate,
            // Selection events
            onSelect: props.onSelect,
            // Input events
            onBeforeInput: props.onBeforeInput,
            onInput: props.onInput,
            ...focusableProps,
            ...fieldProps
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}



//# sourceMappingURL=useTextField.mjs.map


/***/ }

}]);