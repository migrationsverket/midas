"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1547],{

/***/ 63899:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ $a049562f99e7db0e$export$eb2fcfdbd7ba97d4),
/* harmony export */   t: () => (/* binding */ $a049562f99e7db0e$export$f9c6924e160136d1)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5933);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32217);
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


const $a049562f99e7db0e$export$f9c6924e160136d1 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $a049562f99e7db0e$export$eb2fcfdbd7ba97d4 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Group(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, $a049562f99e7db0e$export$f9c6924e160136d1);
    let { isDisabled: isDisabled, isInvalid: isInvalid, onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_2__/* .useHover */ .M)({
        onHoverStart: onHoverStart,
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd,
        isDisabled: isDisabled
    });
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .useFocusRing */ .o)({
        within: true
    });
    isDisabled !== null && isDisabled !== void 0 ? isDisabled : isDisabled = !!props['aria-disabled'] && props['aria-disabled'] !== 'false';
    isInvalid !== null && isInvalid !== void 0 ? isInvalid : isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useRenderProps */ .Sl)({
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
    var _props_role, _props_slot;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("div", {
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_4__/* .mergeProps */ .v)(otherProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        role: (_props_role = props.role) !== null && _props_role !== void 0 ? _props_role : 'group',
        slot: (_props_slot = props.slot) !== null && _props_slot !== void 0 ? _props_slot : undefined,
        "data-focus-within": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-invalid": isInvalid || undefined
    }, renderProps.children);
});



//# sourceMappingURL=Group.module.js.map


/***/ }),

/***/ 96325:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  sx: () => (/* binding */ $b6c3ddc6086f204d$export$d7b12c4107be0d61),
  z6: () => (/* binding */ $b6c3ddc6086f204d$export$a98f0dcb43a68a25)
});

// UNUSED EXPORTS: RadioContext, RadioGroupContext, RadioGroupStateContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Form.mjs
var Form = __webpack_require__(23128);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
;// ./node_modules/@react-aria/radio/dist/utils.mjs
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
 */ const $884aeceb3d67f00f$export$37b65e5b5444d35c = new WeakMap();



//# sourceMappingURL=utils.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useId.mjs + 1 modules
var useId = __webpack_require__(84137);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs + 2 modules
var FocusScope = __webpack_require__(13560);
// EXTERNAL MODULE: ./node_modules/@react-aria/label/dist/useField.mjs
var useField = __webpack_require__(85441);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
var useFocusWithin = __webpack_require__(59461);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
;// ./node_modules/@react-aria/radio/dist/useRadioGroup.mjs







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





function $430f30ed08ec25fa$export$62b9571f283ff5c2(props, state) {
    let { name: name, isReadOnly: isReadOnly, isRequired: isRequired, isDisabled: isDisabled, orientation: orientation = 'vertical', validationBehavior: validationBehavior = 'aria' } = props;
    let { direction: direction } = (0, context/* useLocale */.Y)();
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, useField/* useField */.M)({
        ...props,
        // Radio group is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span',
        isInvalid: state.isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        labelable: true
    });
    // When the radio group loses focus, reset the focusable radio to null if
    // there is no selection. This allows tabbing into the group from either
    // direction to go to the first or last radio.
    let { focusWithinProps: focusWithinProps } = (0, useFocusWithin/* useFocusWithin */.R)({
        onBlurWithin (e) {
            var _props_onBlur;
            (_props_onBlur = props.onBlur) === null || _props_onBlur === void 0 ? void 0 : _props_onBlur.call(props, e);
            if (!state.selectedValue) state.setLastFocusedValue(null);
        },
        onFocusWithin: props.onFocus,
        onFocusWithinChange: props.onFocusChange
    });
    let onKeyDown = (e)=>{
        let nextDir;
        switch(e.key){
            case 'ArrowRight':
                if (direction === 'rtl' && orientation !== 'vertical') nextDir = 'prev';
                else nextDir = 'next';
                break;
            case 'ArrowLeft':
                if (direction === 'rtl' && orientation !== 'vertical') nextDir = 'next';
                else nextDir = 'prev';
                break;
            case 'ArrowDown':
                nextDir = 'next';
                break;
            case 'ArrowUp':
                nextDir = 'prev';
                break;
            default:
                return;
        }
        e.preventDefault();
        let walker = (0, FocusScope/* getFocusableTreeWalker */.N$)(e.currentTarget, {
            from: e.target
        });
        let nextElem;
        if (nextDir === 'next') {
            nextElem = walker.nextNode();
            if (!nextElem) {
                walker.currentNode = e.currentTarget;
                nextElem = walker.firstChild();
            }
        } else {
            nextElem = walker.previousNode();
            if (!nextElem) {
                walker.currentNode = e.currentTarget;
                nextElem = walker.lastChild();
            }
        }
        if (nextElem) {
            // Call focus on nextElem so that keyboard navigation scrolls the radio into view
            nextElem.focus();
            state.setSelectedValue(nextElem.value);
        }
    };
    let groupName = (0, useId/* useId */.Bi)(name);
    (0, $884aeceb3d67f00f$export$37b65e5b5444d35c).set(state, {
        name: groupName,
        descriptionId: descriptionProps.id,
        errorMessageId: errorMessageProps.id,
        validationBehavior: validationBehavior
    });
    return {
        radioGroupProps: (0, mergeProps/* mergeProps */.v)(domProps, {
            // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
            role: 'radiogroup',
            onKeyDown: onKeyDown,
            'aria-invalid': state.isInvalid || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-readonly': isReadOnly || undefined,
            'aria-required': isRequired || undefined,
            'aria-disabled': isDisabled || undefined,
            'aria-orientation': orientation,
            ...fieldProps,
            ...focusWithinProps
        }),
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}



//# sourceMappingURL=useRadioGroup.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useFormReset.mjs
var useFormReset = __webpack_require__(8343);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/usePress.mjs + 6 modules
var usePress = __webpack_require__(35044);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusable.mjs
var useFocusable = __webpack_require__(28940);
// EXTERNAL MODULE: ./node_modules/@react-aria/form/dist/useFormValidation.mjs
var useFormValidation = __webpack_require__(48868);
;// ./node_modules/@react-aria/radio/dist/useRadio.mjs





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



function $0d5c49892c1215da$export$37b0961d2f4751e2(props, state, ref) {
    let { value: value, children: children, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby } = props;
    const isDisabled = props.isDisabled || state.isDisabled;
    let hasChildren = children != null;
    let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
    if (!hasChildren && !hasAriaLabel && "production" !== 'production') {}
    let checked = state.selectedValue === value;
    let onChange = (e)=>{
        e.stopPropagation();
        state.setSelectedValue(value);
    };
    // Handle press state for keyboard interactions and cases where labelProps is not used.
    let { pressProps: pressProps, isPressed: isPressed } = (0, usePress/* usePress */.d)({
        isDisabled: isDisabled
    });
    // Handle press state on the label.
    let { pressProps: labelProps, isPressed: isLabelPressed } = (0, usePress/* usePress */.d)({
        isDisabled: isDisabled,
        onPress () {
            var _ref_current;
            state.setSelectedValue(value);
            (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.focus();
        }
    });
    let { focusableProps: focusableProps } = (0, useFocusable/* useFocusable */.Wc)((0, mergeProps/* mergeProps */.v)(props, {
        onFocus: ()=>state.setLastFocusedValue(value)
    }), ref);
    let interactions = (0, mergeProps/* mergeProps */.v)(pressProps, focusableProps);
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        labelable: true
    });
    let tabIndex = -1;
    if (state.selectedValue != null) {
        if (state.selectedValue === value) tabIndex = 0;
    } else if (state.lastFocusedValue === value || state.lastFocusedValue == null) tabIndex = 0;
    if (isDisabled) tabIndex = undefined;
    let { name: name, descriptionId: descriptionId, errorMessageId: errorMessageId, validationBehavior: validationBehavior } = (0, $884aeceb3d67f00f$export$37b65e5b5444d35c).get(state);
    (0, useFormReset/* useFormReset */.F)(ref, state.selectedValue, state.setSelectedValue);
    (0, useFormValidation/* useFormValidation */.X)({
        validationBehavior: validationBehavior
    }, state, ref);
    return {
        labelProps: (0, mergeProps/* mergeProps */.v)(labelProps, {
            onClick: (e)=>e.preventDefault()
        }),
        inputProps: (0, mergeProps/* mergeProps */.v)(domProps, {
            ...interactions,
            type: 'radio',
            name: name,
            tabIndex: tabIndex,
            disabled: isDisabled,
            required: state.isRequired && validationBehavior === 'native',
            checked: checked,
            value: value,
            onChange: onChange,
            'aria-describedby': [
                props['aria-describedby'],
                state.isInvalid ? errorMessageId : null,
                descriptionId
            ].filter(Boolean).join(' ') || undefined
        }),
        isDisabled: isDisabled,
        isSelected: checked,
        isPressed: isPressed || isLabelPressed
    };
}



//# sourceMappingURL=useRadio.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(87979);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useObjectRef.mjs
var useObjectRef = __webpack_require__(83908);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeRefs.mjs
var mergeRefs = __webpack_require__(17099);
// EXTERNAL MODULE: ./node_modules/@react-stately/form/dist/useFormValidationState.mjs
var useFormValidationState = __webpack_require__(71144);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/useControlledState.mjs
var useControlledState = __webpack_require__(8356);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@react-stately/radio/dist/useRadioGroupState.mjs




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


let $a54cdc5c1942b639$var$instance = Math.round(Math.random() * 10000000000);
let $a54cdc5c1942b639$var$i = 0;
function $a54cdc5c1942b639$export$bca9d026f8e704eb(props) {
    // Preserved here for backward compatibility. React Aria now generates the name instead of stately.
    let name = (0, react.useMemo)(()=>props.name || `radio-group-${$a54cdc5c1942b639$var$instance}-${++$a54cdc5c1942b639$var$i}`, [
        props.name
    ]);
    var _props_defaultValue;
    let [selectedValue, setSelected] = (0, useControlledState/* useControlledState */.P)(props.value, (_props_defaultValue = props.defaultValue) !== null && _props_defaultValue !== void 0 ? _props_defaultValue : null, props.onChange);
    let [lastFocusedValue, setLastFocusedValue] = (0, react.useState)(null);
    let validation = (0, useFormValidationState/* useFormValidationState */.KZ)({
        ...props,
        value: selectedValue
    });
    let setSelectedValue = (value)=>{
        if (!props.isReadOnly && !props.isDisabled) {
            setSelected(value);
            validation.commitValidation();
        }
    };
    let isInvalid = validation.displayValidation.isInvalid;
    return {
        ...validation,
        name: name,
        selectedValue: selectedValue,
        setSelectedValue: setSelectedValue,
        lastFocusedValue: lastFocusedValue,
        setLastFocusedValue: setLastFocusedValue,
        isDisabled: props.isDisabled || false,
        isReadOnly: props.isReadOnly || false,
        isRequired: props.isRequired || false,
        validationState: props.validationState || (isInvalid ? 'invalid' : null),
        isInvalid: isInvalid
    };
}



//# sourceMappingURL=useRadioGroupState.module.js.map

;// ./node_modules/react-aria-components/dist/RadioGroup.mjs










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








const $b6c3ddc6086f204d$export$a79eda4ff50e30b6 = /*#__PURE__*/ (0, react.createContext)(null);
const $b6c3ddc6086f204d$export$b118023277d4a5c3 = /*#__PURE__*/ (0, react.createContext)(null);
const $b6c3ddc6086f204d$export$29d84393af70866c = /*#__PURE__*/ (0, react.createContext)(null);
const $b6c3ddc6086f204d$export$a98f0dcb43a68a25 = /*#__PURE__*/ (0, react.forwardRef)(function RadioGroup(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $b6c3ddc6086f204d$export$a79eda4ff50e30b6);
    let { validationBehavior: formValidationBehavior } = (0, utils/* useSlottedContext */.CC)((0, Form/* FormContext */.c)) || {};
    var _props_validationBehavior, _ref;
    let validationBehavior = (_ref = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : formValidationBehavior) !== null && _ref !== void 0 ? _ref : 'native';
    let state = (0, $a54cdc5c1942b639$export$bca9d026f8e704eb)({
        ...props,
        validationBehavior: validationBehavior
    });
    let [labelRef, label] = (0, utils/* useSlot */._E)(!props['aria-label'] && !props['aria-labelledby']);
    let { radioGroupProps: radioGroupProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, $430f30ed08ec25fa$export$62b9571f283ff5c2)({
        ...props,
        label: label,
        validationBehavior: validationBehavior
    }, state);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        values: {
            orientation: props.orientation || 'vertical',
            isDisabled: state.isDisabled,
            isReadOnly: state.isReadOnly,
            isRequired: state.isRequired,
            isInvalid: state.isInvalid,
            state: state
        },
        defaultClassName: 'react-aria-RadioGroup'
    });
    return /*#__PURE__*/ (0, react).createElement("div", {
        ...radioGroupProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-orientation": props.orientation || 'vertical',
        "data-invalid": state.isInvalid || undefined,
        "data-disabled": state.isDisabled || undefined,
        "data-readonly": state.isReadOnly || undefined,
        "data-required": state.isRequired || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $b6c3ddc6086f204d$export$29d84393af70866c,
                state
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
    }, renderProps.children));
});
const $b6c3ddc6086f204d$export$d7b12c4107be0d61 = /*#__PURE__*/ (0, react.forwardRef)(function Radio(props, ref) {
    let { inputRef: userProvidedInputRef = null, ...otherProps } = props;
    [props, ref] = (0, utils/* useContextProps */.JT)(otherProps, ref, $b6c3ddc6086f204d$export$b118023277d4a5c3);
    let state = (0, react).useContext($b6c3ddc6086f204d$export$29d84393af70866c);
    let inputRef = (0, useObjectRef/* useObjectRef */.U)((0, mergeRefs/* mergeRefs */.P)(userProvidedInputRef, props.inputRef !== undefined ? props.inputRef : null));
    let { labelProps: labelProps, inputProps: inputProps, isSelected: isSelected, isDisabled: isDisabled, isPressed: isPressed } = (0, $0d5c49892c1215da$export$37b0961d2f4751e2)({
        ...(0, utils/* removeDataAttributes */.SK)(props),
        // ReactNode type doesn't allow function children.
        children: typeof props.children === 'function' ? true : props.children
    }, state, inputRef);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, useFocusRing/* useFocusRing */.o)();
    let interactionDisabled = isDisabled || state.isReadOnly;
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* useHover */.M)({
        ...props,
        isDisabled: interactionDisabled
    });
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-Radio',
        values: {
            isSelected: isSelected,
            isPressed: isPressed,
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: isDisabled,
            isReadOnly: state.isReadOnly,
            isInvalid: state.isInvalid,
            isRequired: state.isRequired
        }
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, react).createElement("label", {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, labelProps, hoverProps, renderProps),
        ref: ref,
        "data-selected": isSelected || undefined,
        "data-pressed": isPressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-readonly": state.isReadOnly || undefined,
        "data-invalid": state.isInvalid || undefined,
        "data-required": state.isRequired || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, VisuallyHidden/* VisuallyHidden */.s), {
        elementType: "span"
    }, /*#__PURE__*/ (0, react).createElement("input", {
        ...(0, mergeProps/* mergeProps */.v)(inputProps, focusProps),
        ref: inputRef
    })), renderProps.children);
});



//# sourceMappingURL=RadioGroup.module.js.map


/***/ })

}]);