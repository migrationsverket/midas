"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8370],{

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
        defaultSelected: state.defaultValue.includes(props.value),
        onChange (isSelected) {
            if (isSelected) state.addValue(props.value);
            else state.removeValue(props.value);
            if (props.onChange) props.onChange(isSelected);
        }
    });
    let { name: name, form: form, descriptionId: descriptionId, errorMessageId: errorMessageId, validationBehavior: validationBehavior } = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .checkboxGroupData */ .n).get(state);
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
        form: props.form || form,
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

/***/ 51623:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ $3017fa7ffdddec74$export$8042c6c013fd5226)
/* harmony export */ });
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

function $3017fa7ffdddec74$export$8042c6c013fd5226(props = {}) {
    let { isReadOnly: isReadOnly } = props;
    // have to provide an empty function so useControlledState doesn't throw a fit
    // can't use useControlledState's prop calling because we need the event object from the change
    let [isSelected, setSelected] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__/* .useControlledState */ .P)(props.isSelected, props.defaultSelected || false, props.onChange);
    let [initialValue] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(isSelected);
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
    let { isDisabled: isDisabled = false, isReadOnly: isReadOnly = false, value: value, name: name, form: form, children: children, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, validationState: validationState = 'valid', isInvalid: isInvalid, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressChange: onPressChange, onPress: onPress, onPressUp: onPressUp, onClick: onClick } = props;
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
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        onPressChange: onPressChange,
        onPress: onPress,
        onPressUp: onPressUp,
        onClick: onClick,
        isDisabled: isDisabled
    });
    // Handle press state on the label.
    let { pressProps: labelProps, isPressed: isLabelPressed } = (0, usePress/* usePress */.d)({
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        onPressChange: onPressChange,
        onPressUp: onPressUp,
        onClick: onClick,
        onPress (e) {
            var _ref_current;
            onPress === null || onPress === void 0 ? void 0 : onPress(e);
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
    (0, useFormReset/* useFormReset */.F)(ref, state.defaultSelected, state.setSelected);
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
            form: form,
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
        labelProps: (0, mergeProps/* mergeProps */.v)(labelProps, pressProps, (0, react.useMemo)(()=>({
                // Prevent label from being focused when mouse down on it.
                // Note, this does not prevent the input from being focused in the `click` event.
                onMouseDown: (e)=>e.preventDefault()
            }), [])),
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

/***/ 71166:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ $df39c1238ae2b5f3$exports)
});

;// ./node_modules/react-aria-components/dist/ar-AE.mjs
var $e038a7e7a6d81989$exports = {};
$e038a7e7a6d81989$exports = {
    "colorSwatchPicker": `\u{62A}\u{63A}\u{64A}\u{64A}\u{631}\u{627}\u{62A} \u{627}\u{644}\u{623}\u{644}\u{648}\u{627}\u{646}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{62D}\u{62F}\u{62F} \u{639}\u{646}\u{635}\u{631}\u{64B}\u{627}`,
    "tableResizer": `\u{623}\u{62F}\u{627}\u{629} \u{62A}\u{63A}\u{64A}\u{64A}\u{631} \u{627}\u{644}\u{62D}\u{62C}\u{645}`
};



//# sourceMappingURL=ar-AE.module.js.map

;// ./node_modules/react-aria-components/dist/bg-BG.mjs
var $0ec14741b0133644$exports = {};
$0ec14741b0133644$exports = {
    "colorSwatchPicker": `\u{426}\u{432}\u{435}\u{442}\u{43E}\u{432}\u{438} \u{43C}\u{43E}\u{441}\u{442}\u{440}\u{438}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{418}\u{437}\u{431}\u{435}\u{440}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}`,
    "tableResizer": `\u{41F}\u{440}\u{435}\u{43E}\u{440}\u{430}\u{437}\u{43C}\u{435}\u{440}\u{438}\u{442}\u{435}\u{43B}`
};



//# sourceMappingURL=bg-BG.module.js.map

;// ./node_modules/react-aria-components/dist/cs-CZ.mjs
var $642f7badf2405784$exports = {};
$642f7badf2405784$exports = {
    "colorSwatchPicker": `Vzorky barev`,
    "dropzoneLabel": `M\xedsto pro p\u{159}eta\u{17E}en\xed`,
    "selectPlaceholder": `Vyberte polo\u{17E}ku`,
    "tableResizer": `Zm\u{11B}na velikosti`
};



//# sourceMappingURL=cs-CZ.module.js.map

;// ./node_modules/react-aria-components/dist/da-DK.mjs
var $30cee8d2535734ec$exports = {};
$30cee8d2535734ec$exports = {
    "colorSwatchPicker": `Farvepr\xf8ver`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `V\xe6lg et element`,
    "tableResizer": `St\xf8rrelses\xe6ndring`
};



//# sourceMappingURL=da-DK.module.js.map

;// ./node_modules/react-aria-components/dist/de-DE.mjs
var $c302d0504fca332a$exports = {};
$c302d0504fca332a$exports = {
    "colorSwatchPicker": `Farbfelder`,
    "dropzoneLabel": `Ablegebereich`,
    "selectPlaceholder": `Element w\xe4hlen`,
    "tableResizer": `Gr\xf6\xdfenanpassung`
};



//# sourceMappingURL=de-DE.module.js.map

;// ./node_modules/react-aria-components/dist/el-GR.mjs
var $0d0703f2bd7e421c$exports = {};
$0d0703f2bd7e421c$exports = {
    "colorSwatchPicker": `\u{3A7}\u{3C1}\u{3C9}\u{3BC}\u{3B1}\u{3C4}\u{3B9}\u{3BA}\u{3AC} \u{3B4}\u{3B5}\u{3AF}\u{3B3}\u{3BC}\u{3B1}\u{3C4}\u{3B1}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3BE}\u{3C4}\u{3B5} \u{3AD}\u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3C4}\u{3B9}\u{3BA}\u{3B5}\u{3AF}\u{3BC}\u{3B5}\u{3BD}\u{3BF}`,
    "tableResizer": `\u{391}\u{3BB}\u{3BB}\u{3B1}\u{3B3}\u{3AE} \u{3BC}\u{3B5}\u{3B3}\u{3AD}\u{3B8}\u{3BF}\u{3C5}\u{3C2}`
};



//# sourceMappingURL=el-GR.module.js.map

;// ./node_modules/react-aria-components/dist/en-US.mjs
var $cafa55beb2fc5ef3$exports = {};
$cafa55beb2fc5ef3$exports = {
    "selectPlaceholder": `Select an item`,
    "tableResizer": `Resizer`,
    "dropzoneLabel": `DropZone`,
    "colorSwatchPicker": `Color swatches`
};



//# sourceMappingURL=en-US.module.js.map

;// ./node_modules/react-aria-components/dist/es-ES.mjs
var $18ac2ceede598103$exports = {};
$18ac2ceede598103$exports = {
    "colorSwatchPicker": `Muestras de colores`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Seleccionar un art\xedculo`,
    "tableResizer": `Cambiador de tama\xf1o`
};



//# sourceMappingURL=es-ES.module.js.map

;// ./node_modules/react-aria-components/dist/et-EE.mjs
var $718705a15b8a633a$exports = {};
$718705a15b8a633a$exports = {
    "colorSwatchPicker": `V\xe4rvin\xe4idised`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Valige \xfcksus`,
    "tableResizer": `Suuruse muutja`
};



//# sourceMappingURL=et-EE.module.js.map

;// ./node_modules/react-aria-components/dist/fi-FI.mjs
var $bf36dae9ecc81ce0$exports = {};
$bf36dae9ecc81ce0$exports = {
    "colorSwatchPicker": `V\xe4rimallit`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Valitse kohde`,
    "tableResizer": `Koon muuttaja`
};



//# sourceMappingURL=fi-FI.module.js.map

;// ./node_modules/react-aria-components/dist/fr-FR.mjs
var $0b4828edb010b855$exports = {};
$0b4828edb010b855$exports = {
    "colorSwatchPicker": `\xc9chantillons de couleurs`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `S\xe9lectionner un \xe9l\xe9ment`,
    "tableResizer": `Redimensionneur`
};



//# sourceMappingURL=fr-FR.module.js.map

;// ./node_modules/react-aria-components/dist/he-IL.mjs
var $0030f210b040e540$exports = {};
$0030f210b040e540$exports = {
    "colorSwatchPicker": `\u{5D3}\u{5D5}\u{5D2}\u{5DE}\u{5D9}\u{5D5}\u{5EA} \u{5E6}\u{5D1}\u{5E2}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{5D1}\u{5D7}\u{5E8} \u{5E4}\u{5E8}\u{5D9}\u{5D8}`,
    "tableResizer": `\u{5E9}\u{5D9}\u{5E0}\u{5D5}\u{5D9} \u{5D2}\u{5D5}\u{5D3}\u{5DC}`
};



//# sourceMappingURL=he-IL.module.js.map

;// ./node_modules/react-aria-components/dist/hr-HR.mjs
var $1f0ebacf5a0c0fa1$exports = {};
$1f0ebacf5a0c0fa1$exports = {
    "colorSwatchPicker": `Uzorci boja`,
    "dropzoneLabel": `Zona spu\u{161}tanja`,
    "selectPlaceholder": `Odaberite stavku`,
    "tableResizer": `Promjena veli\u{10D}ine`
};



//# sourceMappingURL=hr-HR.module.js.map

;// ./node_modules/react-aria-components/dist/hu-HU.mjs
var $3a706ba61f3d6bba$exports = {};
$3a706ba61f3d6bba$exports = {
    "colorSwatchPicker": `Sz\xednt\xe1rak`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `V\xe1lasszon ki egy elemet`,
    "tableResizer": `\xc1tm\xe9retez\u{151}`
};



//# sourceMappingURL=hu-HU.module.js.map

;// ./node_modules/react-aria-components/dist/it-IT.mjs
var $0d17809e74607796$exports = {};
$0d17809e74607796$exports = {
    "colorSwatchPicker": `Campioni di colore`,
    "dropzoneLabel": `Zona di rilascio`,
    "selectPlaceholder": `Seleziona un elemento`,
    "tableResizer": `Ridimensionamento`
};



//# sourceMappingURL=it-IT.module.js.map

;// ./node_modules/react-aria-components/dist/ja-JP.mjs
var $65a71f9a56f1398f$exports = {};
$65a71f9a56f1398f$exports = {
    "colorSwatchPicker": `\u{30AB}\u{30E9}\u{30FC}\u{30B9}\u{30A6}\u{30A9}\u{30C3}\u{30C1}`,
    "dropzoneLabel": `\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{30BE}\u{30FC}\u{30F3}`,
    "selectPlaceholder": `\u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}`,
    "tableResizer": `\u{30B5}\u{30A4}\u{30BA}\u{5909}\u{66F4}\u{30C4}\u{30FC}\u{30EB}`
};



//# sourceMappingURL=ja-JP.module.js.map

;// ./node_modules/react-aria-components/dist/ko-KR.mjs
var $e5efad074a74abef$exports = {};
$e5efad074a74abef$exports = {
    "colorSwatchPicker": `\u{C0C9}\u{C0C1} \u{ACAC}\u{BCF8}`,
    "dropzoneLabel": `\u{B4DC}\u{B86D} \u{C601}\u{C5ED}`,
    "selectPlaceholder": `\u{D56D}\u{BAA9} \u{C120}\u{D0DD}`,
    "tableResizer": `\u{D06C}\u{AE30} \u{C870}\u{C815}\u{AE30}`
};



//# sourceMappingURL=ko-KR.module.js.map

;// ./node_modules/react-aria-components/dist/lt-LT.mjs
var $d70c2a849e55c607$exports = {};
$d70c2a849e55c607$exports = {
    "colorSwatchPicker": `Spalv\u{173} pavyzd\u{17E}iai`,
    "dropzoneLabel": `\u{201E}DropZone\u{201C}`,
    "selectPlaceholder": `Pasirinkite element\u{105}`,
    "tableResizer": `Dyd\u{17E}io keitiklis`
};



//# sourceMappingURL=lt-LT.module.js.map

;// ./node_modules/react-aria-components/dist/lv-LV.mjs
var $009bbbb440d0e907$exports = {};
$009bbbb440d0e907$exports = {
    "colorSwatchPicker": `Kr\u{101}su paraugi`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Izv\u{113}l\u{113}ties vienumu`,
    "tableResizer": `Izm\u{113}ra main\u{12B}t\u{101}js`
};



//# sourceMappingURL=lv-LV.module.js.map

;// ./node_modules/react-aria-components/dist/nb-NO.mjs
var $9366fe642464ee83$exports = {};
$9366fe642464ee83$exports = {
    "colorSwatchPicker": `Fargekart`,
    "dropzoneLabel": `Droppsone`,
    "selectPlaceholder": `Velg et element`,
    "tableResizer": `St\xf8rrelsesendrer`
};



//# sourceMappingURL=nb-NO.module.js.map

;// ./node_modules/react-aria-components/dist/nl-NL.mjs
var $62f9bc1f98ea21de$exports = {};
$62f9bc1f98ea21de$exports = {
    "colorSwatchPicker": `kleurstalen`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Selecteer een item`,
    "tableResizer": `Resizer`
};



//# sourceMappingURL=nl-NL.module.js.map

;// ./node_modules/react-aria-components/dist/pl-PL.mjs
var $4ec2e5b6623b1b76$exports = {};
$4ec2e5b6623b1b76$exports = {
    "colorSwatchPicker": `Pr\xf3bki kolor\xf3w`,
    "dropzoneLabel": `Strefa upuszczania`,
    "selectPlaceholder": `Wybierz element`,
    "tableResizer": `Zmiana rozmiaru`
};



//# sourceMappingURL=pl-PL.module.js.map

;// ./node_modules/react-aria-components/dist/pt-BR.mjs
var $e25098e26647cc04$exports = {};
$e25098e26647cc04$exports = {
    "colorSwatchPicker": `Amostras de cores`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Selecione um item`,
    "tableResizer": `Redimensionador`
};



//# sourceMappingURL=pt-BR.module.js.map

;// ./node_modules/react-aria-components/dist/pt-PT.mjs
var $dd39c57d242c8156$exports = {};
$dd39c57d242c8156$exports = {
    "colorSwatchPicker": `Amostras de cores`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Selecione um item`,
    "tableResizer": `Redimensionador`
};



//# sourceMappingURL=pt-PT.module.js.map

;// ./node_modules/react-aria-components/dist/ro-RO.mjs
var $3b4c1ba5afd57b35$exports = {};
$3b4c1ba5afd57b35$exports = {
    "colorSwatchPicker": `Specimene de culoare`,
    "dropzoneLabel": `Zon\u{103} de plasare`,
    "selectPlaceholder": `Selecta\u{21B}i un element`,
    "tableResizer": `Instrument de redimensionare`
};



//# sourceMappingURL=ro-RO.module.js.map

;// ./node_modules/react-aria-components/dist/ru-RU.mjs
var $a455b2cda79eb746$exports = {};
$a455b2cda79eb746$exports = {
    "colorSwatchPicker": `\u{426}\u{432}\u{435}\u{442}\u{43E}\u{432}\u{44B}\u{435} \u{43E}\u{431}\u{440}\u{430}\u{437}\u{446}\u{44B}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{412}\u{44B}\u{431}\u{435}\u{440}\u{438}\u{442}\u{435} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
    "tableResizer": `\u{421}\u{440}\u{435}\u{434}\u{441}\u{442}\u{432}\u{43E} \u{438}\u{437}\u{43C}\u{435}\u{43D}\u{435}\u{43D}\u{438}\u{44F} \u{440}\u{430}\u{437}\u{43C}\u{435}\u{440}\u{430}`
};



//# sourceMappingURL=ru-RU.module.js.map

;// ./node_modules/react-aria-components/dist/sk-SK.mjs
var $b983ca1383d5b960$exports = {};
$b983ca1383d5b960$exports = {
    "colorSwatchPicker": `Vzorkovn\xedky farieb`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Vyberte polo\u{17E}ku`,
    "tableResizer": `N\xe1stroj na zmenu ve\u{13E}kosti`
};



//# sourceMappingURL=sk-SK.module.js.map

;// ./node_modules/react-aria-components/dist/sl-SI.mjs
var $32a515ef673b0655$exports = {};
$32a515ef673b0655$exports = {
    "colorSwatchPicker": `Barvne palete`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Izberite element`,
    "tableResizer": `Spreminjanje velikosti`
};



//# sourceMappingURL=sl-SI.module.js.map

;// ./node_modules/react-aria-components/dist/sr-SP.mjs
var $89434176ab35446b$exports = {};
$89434176ab35446b$exports = {
    "colorSwatchPicker": `Uzorci boje`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Izaberite stavku`,
    "tableResizer": `Promena veli\u{10D}ine`
};



//# sourceMappingURL=sr-SP.module.js.map

;// ./node_modules/react-aria-components/dist/sv-SE.mjs
var $727da781aca847f9$exports = {};
$727da781aca847f9$exports = {
    "colorSwatchPicker": `F\xe4rgrutor`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `V\xe4lj en artikel`,
    "tableResizer": `Storleks\xe4ndrare`
};



//# sourceMappingURL=sv-SE.module.js.map

;// ./node_modules/react-aria-components/dist/tr-TR.mjs
var $fcd2d84b9a2d489c$exports = {};
$fcd2d84b9a2d489c$exports = {
    "colorSwatchPicker": `Renk \xf6rnekleri`,
    "dropzoneLabel": `B\u{131}rakma B\xf6lgesi`,
    "selectPlaceholder": `Bir \xf6\u{11F}e se\xe7in`,
    "tableResizer": `Yeniden boyutland\u{131}r\u{131}c\u{131}`
};



//# sourceMappingURL=tr-TR.module.js.map

;// ./node_modules/react-aria-components/dist/uk-UA.mjs
var $2422ac328687ee23$exports = {};
$2422ac328687ee23$exports = {
    "colorSwatchPicker": `\u{417}\u{440}\u{430}\u{437}\u{43A}\u{438} \u{43A}\u{43E}\u{43B}\u{44C}\u{43E}\u{440}\u{456}\u{432}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{412}\u{438}\u{431}\u{435}\u{440}\u{456}\u{442}\u{44C} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
    "tableResizer": `\u{417}\u{430}\u{441}\u{456}\u{431} \u{437}\u{43C}\u{456}\u{43D}\u{435}\u{43D}\u{43D}\u{44F} \u{440}\u{43E}\u{437}\u{43C}\u{456}\u{440}\u{443}`
};



//# sourceMappingURL=uk-UA.module.js.map

;// ./node_modules/react-aria-components/dist/zh-CN.mjs
var $c9a532d1c973af61$exports = {};
$c9a532d1c973af61$exports = {
    "colorSwatchPicker": `\u{989C}\u{8272}\u{8272}\u{677F}`,
    "dropzoneLabel": `\u{653E}\u{7F6E}\u{533A}\u{57DF}`,
    "selectPlaceholder": `\u{9009}\u{62E9}\u{4E00}\u{4E2A}\u{9879}\u{76EE}`,
    "tableResizer": `\u{5C3A}\u{5BF8}\u{8C03}\u{6574}\u{5668}`
};



//# sourceMappingURL=zh-CN.module.js.map

;// ./node_modules/react-aria-components/dist/zh-TW.mjs
var $34de119f14549a4b$exports = {};
$34de119f14549a4b$exports = {
    "colorSwatchPicker": `\u{8272}\u{7968}`,
    "dropzoneLabel": `\u{653E}\u{7F6E}\u{5340}`,
    "selectPlaceholder": `\u{9078}\u{53D6}\u{9805}\u{76EE}`,
    "tableResizer": `\u{5927}\u{5C0F}\u{8ABF}\u{6574}\u{5668}`
};



//# sourceMappingURL=zh-TW.module.js.map

;// ./node_modules/react-aria-components/dist/intlStrings.mjs



































var $df39c1238ae2b5f3$exports = {};


































$df39c1238ae2b5f3$exports = {
    "ar-AE": $e038a7e7a6d81989$exports,
    "bg-BG": $0ec14741b0133644$exports,
    "cs-CZ": $642f7badf2405784$exports,
    "da-DK": $30cee8d2535734ec$exports,
    "de-DE": $c302d0504fca332a$exports,
    "el-GR": $0d0703f2bd7e421c$exports,
    "en-US": $cafa55beb2fc5ef3$exports,
    "es-ES": $18ac2ceede598103$exports,
    "et-EE": $718705a15b8a633a$exports,
    "fi-FI": $bf36dae9ecc81ce0$exports,
    "fr-FR": $0b4828edb010b855$exports,
    "he-IL": $0030f210b040e540$exports,
    "hr-HR": $1f0ebacf5a0c0fa1$exports,
    "hu-HU": $3a706ba61f3d6bba$exports,
    "it-IT": $0d17809e74607796$exports,
    "ja-JP": $65a71f9a56f1398f$exports,
    "ko-KR": $e5efad074a74abef$exports,
    "lt-LT": $d70c2a849e55c607$exports,
    "lv-LV": $009bbbb440d0e907$exports,
    "nb-NO": $9366fe642464ee83$exports,
    "nl-NL": $62f9bc1f98ea21de$exports,
    "pl-PL": $4ec2e5b6623b1b76$exports,
    "pt-BR": $e25098e26647cc04$exports,
    "pt-PT": $dd39c57d242c8156$exports,
    "ro-RO": $3b4c1ba5afd57b35$exports,
    "ru-RU": $a455b2cda79eb746$exports,
    "sk-SK": $b983ca1383d5b960$exports,
    "sl-SI": $32a515ef673b0655$exports,
    "sr-SP": $89434176ab35446b$exports,
    "sv-SE": $727da781aca847f9$exports,
    "tr-TR": $fcd2d84b9a2d489c$exports,
    "uk-UA": $2422ac328687ee23$exports,
    "zh-CN": $c9a532d1c973af61$exports,
    "zh-TW": $34de119f14549a4b$exports
};



//# sourceMappingURL=intlStrings.module.js.map


/***/ }),

/***/ 84521:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l6: () => (/* binding */ $82d7e5349645de74$export$ef9b1a59e592288f),
  nT: () => (/* binding */ $82d7e5349645de74$export$ef445b55be0601bd),
  yv: () => (/* binding */ $82d7e5349645de74$export$e288731fd71264f0)
});

// UNUSED EXPORTS: SelectContext, SelectValueContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Form.mjs
var Form = __webpack_require__(23128);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/intlStrings.mjs + 34 modules
var intlStrings = __webpack_require__(71166);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ListBox.mjs + 3 modules
var ListBox = __webpack_require__(79255);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useId.mjs + 1 modules
var useId = __webpack_require__(84137);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/chain.mjs
var chain = __webpack_require__(72166);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/ListKeyboardDelegate.mjs
var ListKeyboardDelegate = __webpack_require__(96584);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useTypeSelect.mjs
var useTypeSelect = __webpack_require__(18399);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(95562);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useCollator.mjs
var useCollator = __webpack_require__(82627);
// EXTERNAL MODULE: ./node_modules/@react-aria/label/dist/useField.mjs
var useField = __webpack_require__(85441);
// EXTERNAL MODULE: ./node_modules/@react-aria/menu/dist/useMenuTrigger.mjs + 35 modules
var useMenuTrigger = __webpack_require__(25263);
;// ./node_modules/@react-aria/select/dist/useSelect.mjs








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






const $58aed456727eb0f3$export$703601b7e90536f8 = new WeakMap();
function $58aed456727eb0f3$export$e64b2f635402ca43(props, state, ref) {
    let { keyboardDelegate: keyboardDelegate, isDisabled: isDisabled, isRequired: isRequired, name: name, form: form, validationBehavior: validationBehavior = 'aria' } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = (0, useCollator/* useCollator */.Q)({
        usage: 'search',
        sensitivity: 'base'
    });
    let delegate = (0, react.useMemo)(()=>keyboardDelegate || new (0, ListKeyboardDelegate/* ListKeyboardDelegate */.n)(state.collection, state.disabledKeys, ref, collator), [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        collator,
        ref
    ]);
    let { menuTriggerProps: menuTriggerProps, menuProps: menuProps } = (0, useMenuTrigger/* useMenuTrigger */.V)({
        isDisabled: isDisabled,
        type: 'listbox'
    }, state, ref);
    let onKeyDown = (e)=>{
        if (state.selectionManager.selectionMode === 'multiple') return;
        switch(e.key){
            case 'ArrowLeft':
                {
                    var _delegate_getKeyAbove, _delegate_getFirstKey;
                    // prevent scrolling containers
                    e.preventDefault();
                    let key = state.selectedKey != null ? (_delegate_getKeyAbove = delegate.getKeyAbove) === null || _delegate_getKeyAbove === void 0 ? void 0 : _delegate_getKeyAbove.call(delegate, state.selectedKey) : (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate);
                    if (key) state.setSelectedKey(key);
                    break;
                }
            case 'ArrowRight':
                {
                    var _delegate_getKeyBelow, _delegate_getFirstKey1;
                    // prevent scrolling containers
                    e.preventDefault();
                    let key = state.selectedKey != null ? (_delegate_getKeyBelow = delegate.getKeyBelow) === null || _delegate_getKeyBelow === void 0 ? void 0 : _delegate_getKeyBelow.call(delegate, state.selectedKey) : (_delegate_getFirstKey1 = delegate.getFirstKey) === null || _delegate_getFirstKey1 === void 0 ? void 0 : _delegate_getFirstKey1.call(delegate);
                    if (key) state.setSelectedKey(key);
                    break;
                }
        }
    };
    let { typeSelectProps: typeSelectProps } = (0, useTypeSelect/* useTypeSelect */.I)({
        keyboardDelegate: delegate,
        selectionManager: state.selectionManager,
        onTypeSelect (key) {
            state.setSelectedKey(key);
        }
    });
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, useField/* useField */.M)({
        ...props,
        labelElementType: 'span',
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    typeSelectProps.onKeyDown = typeSelectProps.onKeyDownCapture;
    delete typeSelectProps.onKeyDownCapture;
    if (state.selectionManager.selectionMode === 'multiple') typeSelectProps = {};
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        labelable: true
    });
    let triggerProps = (0, mergeProps/* mergeProps */.v)(typeSelectProps, menuTriggerProps, fieldProps);
    let valueId = (0, useId/* useId */.Bi)();
    $58aed456727eb0f3$export$703601b7e90536f8.set(state, {
        isDisabled: isDisabled,
        isRequired: isRequired,
        name: name,
        form: form,
        validationBehavior: validationBehavior
    });
    return {
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                if (!props.isDisabled) {
                    var _ref_current;
                    (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.focus();
                    // Show the focus ring so the user knows where focus went
                    (0, useFocusVisible/* setInteractionModality */.Cl)('keyboard');
                }
            }
        },
        triggerProps: (0, mergeProps/* mergeProps */.v)(domProps, {
            ...triggerProps,
            isDisabled: isDisabled,
            onKeyDown: (0, chain/* chain */.c)(triggerProps.onKeyDown, onKeyDown, props.onKeyDown),
            onKeyUp: props.onKeyUp,
            'aria-labelledby': [
                valueId,
                triggerProps['aria-labelledby'],
                triggerProps['aria-label'] && !triggerProps['aria-labelledby'] ? triggerProps.id : null
            ].filter(Boolean).join(' '),
            onFocus (e) {
                if (state.isFocused) return;
                if (props.onFocus) props.onFocus(e);
                if (props.onFocusChange) props.onFocusChange(true);
                state.setFocused(true);
            },
            onBlur (e) {
                if (state.isOpen) return;
                if (props.onBlur) props.onBlur(e);
                if (props.onFocusChange) props.onFocusChange(false);
                state.setFocused(false);
            }
        }),
        valueProps: {
            id: valueId
        },
        menuProps: {
            ...menuProps,
            autoFocus: state.focusStrategy || true,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true,
            disallowEmptySelection: true,
            linkBehavior: 'selection',
            onBlur: (e)=>{
                if (e.currentTarget.contains(e.relatedTarget)) return;
                if (props.onBlur) props.onBlur(e);
                if (props.onFocusChange) props.onFocusChange(false);
                state.setFocused(false);
            },
            'aria-labelledby': [
                fieldProps['aria-labelledby'],
                triggerProps['aria-label'] && !fieldProps['aria-labelledby'] ? triggerProps.id : null
            ].filter(Boolean).join(' ')
        },
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails,
        hiddenSelectProps: {
            isDisabled: isDisabled,
            name: name,
            label: props.label,
            state: state,
            triggerRef: ref,
            form: form
        }
    };
}



//# sourceMappingURL=useSelect.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useFormReset.mjs
var useFormReset = __webpack_require__(8343);
// EXTERNAL MODULE: ./node_modules/@react-aria/form/dist/useFormValidation.mjs
var useFormValidation = __webpack_require__(48868);
// EXTERNAL MODULE: ./node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(87979);
;// ./node_modules/@react-aria/select/dist/HiddenSelect.mjs






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




function $bdd25dc72710631f$export$f809e80f58e251d1(props, state, triggerRef) {
    let data = (0, $58aed456727eb0f3$export$703601b7e90536f8).get(state) || {};
    let { autoComplete: autoComplete, name: name = data.name, form: form = data.form, isDisabled: isDisabled = data.isDisabled } = props;
    let { validationBehavior: validationBehavior, isRequired: isRequired } = data;
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, VisuallyHidden/* useVisuallyHidden */.B)({
        style: {
            // Prevent page scrolling.
            position: 'fixed',
            top: 0,
            left: 0
        }
    });
    (0, useFormReset/* useFormReset */.F)(props.selectRef, state.defaultValue, state.setValue);
    (0, useFormValidation/* useFormValidation */.X)({
        validationBehavior: validationBehavior,
        focus: ()=>{
            var _triggerRef_current;
            return (_triggerRef_current = triggerRef.current) === null || _triggerRef_current === void 0 ? void 0 : _triggerRef_current.focus();
        }
    }, state, props.selectRef);
    let setValue = state.setValue;
    let onChange = (0, react.useCallback)((e)=>{
        if (e.target.multiple) setValue(Array.from(e.target.selectedOptions, (option)=>option.value));
        else setValue(e.currentTarget.value);
    }, [
        setValue
    ]);
    var _state_value;
    // In Safari, the <select> cannot have `display: none` or `hidden` for autofill to work.
    // In Firefox, there must be a <label> to identify the <select> whereas other browsers
    // seem to identify it just by surrounding text.
    // The solution is to use <VisuallyHidden> to hide the elements, which clips the elements to a
    // 1px rectangle. In addition, we hide from screen readers with aria-hidden, and make the <select>
    // non tabbable with tabIndex={-1}.
    return {
        containerProps: {
            ...visuallyHiddenProps,
            'aria-hidden': true,
            // @ts-ignore
            ['data-react-aria-prevent-focus']: true,
            // @ts-ignore
            ['data-a11y-ignore']: 'aria-hidden-focus'
        },
        inputProps: {
            style: {
                display: 'none'
            }
        },
        selectProps: {
            tabIndex: -1,
            autoComplete: autoComplete,
            disabled: isDisabled,
            multiple: state.selectionManager.selectionMode === 'multiple',
            required: validationBehavior === 'native' && isRequired,
            name: name,
            form: form,
            value: (_state_value = state.value) !== null && _state_value !== void 0 ? _state_value : '',
            onChange: onChange,
            onInput: onChange
        }
    };
}
function $bdd25dc72710631f$export$cbd84cdb2e668835(props) {
    let { state: state, triggerRef: triggerRef, label: label, name: name, form: form, isDisabled: isDisabled } = props;
    let selectRef = (0, react.useRef)(null);
    let inputRef = (0, react.useRef)(null);
    let { containerProps: containerProps, selectProps: selectProps } = $bdd25dc72710631f$export$f809e80f58e251d1({
        ...props,
        selectRef: state.collection.size <= 300 ? selectRef : inputRef
    }, state, triggerRef);
    // If used in a <form>, use a hidden input so the value can be submitted to a server.
    // If the collection isn't too big, use a hidden <select> element for this so that browser
    // autofill will work. Otherwise, use an <input type="hidden">.
    if (state.collection.size <= 300) return /*#__PURE__*/ (0, react).createElement("div", {
        ...containerProps,
        "data-testid": "hidden-select-container"
    }, /*#__PURE__*/ (0, react).createElement("label", null, label, /*#__PURE__*/ (0, react).createElement("select", {
        ...selectProps,
        ref: selectRef
    }, /*#__PURE__*/ (0, react).createElement("option", null), [
        ...state.collection.getKeys()
    ].map((key)=>{
        let item = state.collection.getItem(key);
        if (item && item.type === 'item') return /*#__PURE__*/ (0, react).createElement("option", {
            key: item.key,
            value: item.key
        }, item.textValue);
    }))));
    else if (name) {
        let data = (0, $58aed456727eb0f3$export$703601b7e90536f8).get(state) || {};
        let { validationBehavior: validationBehavior } = data;
        // Always render at least one hidden input to ensure required form submission.
        let values = Array.isArray(state.value) ? state.value : [
            state.value
        ];
        if (values.length === 0) values = [
            null
        ];
        let res = values.map((value, i)=>{
            let inputProps = {
                type: 'hidden',
                autoComplete: selectProps.autoComplete,
                name: name,
                form: form,
                disabled: isDisabled,
                value: value !== null && value !== void 0 ? value : ''
            };
            if (validationBehavior === 'native') // Use a hidden <input type="text"> rather than <input type="hidden">
            // so that an empty value blocks HTML form submission when the field is required.
            return /*#__PURE__*/ (0, react).createElement("input", {
                key: i,
                ...inputProps,
                ref: i === 0 ? inputRef : null,
                style: {
                    display: 'none'
                },
                type: "text",
                required: i === 0 ? selectProps.required : false,
                onChange: ()=>{}
            });
            return /*#__PURE__*/ (0, react).createElement("input", {
                key: i,
                ...inputProps,
                ref: i === 0 ? inputRef : null
            });
        });
        return /*#__PURE__*/ (0, react).createElement((0, react).Fragment, null, res);
    }
    return null;
}



//# sourceMappingURL=HiddenSelect.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
;// ./node_modules/@react-aria/i18n/dist/useListFormatter.mjs



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

function $33bf17300c498528$export$a2f47a3d2973640(options = {}) {
    let { locale: locale } = (0, context/* useLocale */.Y)();
    return (0, react.useMemo)(()=>new Intl.ListFormat(locale, options), [
        locale,
        options
    ]);
}



//# sourceMappingURL=useListFormatter.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(29571);
// EXTERNAL MODULE: ./node_modules/@react-stately/form/dist/useFormValidationState.mjs
var useFormValidationState = __webpack_require__(71144);
// EXTERNAL MODULE: ./node_modules/@react-stately/list/dist/useListState.mjs
var useListState = __webpack_require__(46655);
// EXTERNAL MODULE: ./node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs
var useOverlayTriggerState = __webpack_require__(71732);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/useControlledState.mjs
var useControlledState = __webpack_require__(8356);
;// ./node_modules/@react-stately/select/dist/useSelectState.mjs






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




function $2bc3a590c5373a4e$export$5159ec8b34d4ec12(props) {
    let { selectionMode: selectionMode = 'single' } = props;
    let triggerState = (0, useOverlayTriggerState/* useOverlayTriggerState */.T)(props);
    let [focusStrategy, setFocusStrategy] = (0, react.useState)(null);
    let defaultValue = (0, react.useMemo)(()=>{
        var _props_defaultSelectedKey;
        return props.defaultValue !== undefined ? props.defaultValue : selectionMode === 'single' ? (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : null : [];
    }, [
        props.defaultValue,
        props.defaultSelectedKey,
        selectionMode
    ]);
    let value = (0, react.useMemo)(()=>{
        return props.value !== undefined ? props.value : selectionMode === 'single' ? props.selectedKey : undefined;
    }, [
        props.value,
        props.selectedKey,
        selectionMode
    ]);
    let [controlledValue, setControlledValue] = (0, useControlledState/* useControlledState */.P)(value, defaultValue, props.onChange);
    // Only display the first selected item if in single selection mode but the value is an array.
    let displayValue = selectionMode === 'single' && Array.isArray(controlledValue) ? controlledValue[0] : controlledValue;
    let setValue = (value)=>{
        if (selectionMode === 'single') {
            var _props_onSelectionChange;
            var _value_;
            let key = Array.isArray(value) ? (_value_ = value[0]) !== null && _value_ !== void 0 ? _value_ : null : value;
            setControlledValue(key);
            if (key !== displayValue) (_props_onSelectionChange = props.onSelectionChange) === null || _props_onSelectionChange === void 0 ? void 0 : _props_onSelectionChange.call(props, key);
        } else {
            let keys = [];
            if (Array.isArray(value)) keys = value;
            else if (value != null) keys = [
                value
            ];
            setControlledValue(keys);
        }
    };
    let listState = (0, useListState/* useListState */.p)({
        ...props,
        selectionMode: selectionMode,
        disallowEmptySelection: selectionMode === 'single',
        allowDuplicateSelectionEvents: true,
        selectedKeys: (0, react.useMemo)(()=>$2bc3a590c5373a4e$var$convertValue(displayValue), [
            displayValue
        ]),
        onSelectionChange: (keys)=>{
            // impossible, but TS doesn't know that
            if (keys === 'all') return;
            if (selectionMode === 'single') {
                var _keys_values_next_value;
                let key = (_keys_values_next_value = keys.values().next().value) !== null && _keys_values_next_value !== void 0 ? _keys_values_next_value : null;
                setValue(key);
                triggerState.close();
            } else setValue([
                ...keys
            ]);
            validationState.commitValidation();
        }
    });
    let selectedKey = listState.selectionManager.firstSelectedKey;
    let selectedItems = (0, react.useMemo)(()=>{
        return [
            ...listState.selectionManager.selectedKeys
        ].map((key)=>listState.collection.getItem(key)).filter((item)=>item != null);
    }, [
        listState.selectionManager.selectedKeys,
        listState.collection
    ]);
    let validationState = (0, useFormValidationState/* useFormValidationState */.KZ)({
        ...props,
        value: Array.isArray(displayValue) && displayValue.length === 0 ? null : displayValue
    });
    let [isFocused, setFocused] = (0, react.useState)(false);
    let [initialValue] = (0, react.useState)(displayValue);
    var _selectedItems_, _props_defaultSelectedKey;
    return {
        ...validationState,
        ...listState,
        ...triggerState,
        value: displayValue,
        defaultValue: defaultValue !== null && defaultValue !== void 0 ? defaultValue : initialValue,
        setValue: setValue,
        selectedKey: selectedKey,
        setSelectedKey: setValue,
        selectedItem: (_selectedItems_ = selectedItems[0]) !== null && _selectedItems_ !== void 0 ? _selectedItems_ : null,
        selectedItems: selectedItems,
        defaultSelectedKey: (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : props.selectionMode === 'single' ? initialValue : null,
        focusStrategy: focusStrategy,
        open (focusStrategy = null) {
            // Don't open if the collection is empty.
            if (listState.collection.size !== 0) {
                setFocusStrategy(focusStrategy);
                triggerState.open();
            }
        },
        toggle (focusStrategy = null) {
            if (listState.collection.size !== 0) {
                setFocusStrategy(focusStrategy);
                triggerState.toggle();
            }
        },
        isFocused: isFocused,
        setFocused: setFocused
    };
}
function $2bc3a590c5373a4e$var$convertValue(value) {
    if (value === undefined) return undefined;
    if (value === null) return [];
    return Array.isArray(value) ? value : [
        value
    ];
}



//# sourceMappingURL=useSelectState.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/Hidden.mjs
var Hidden = __webpack_require__(75127);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var useResizeObserver = __webpack_require__(77366);
;// ./node_modules/react-aria-components/dist/Select.mjs

















function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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














const $82d7e5349645de74$export$7540cee5be7dc19b = /*#__PURE__*/ (0, react.createContext)(null);
const $82d7e5349645de74$export$ef445b55be0601bd = /*#__PURE__*/ (0, react.createContext)(null);
const $82d7e5349645de74$export$ef9b1a59e592288f = /*#__PURE__*/ (0, react.forwardRef)(function Select(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $82d7e5349645de74$export$7540cee5be7dc19b);
    let { children: children, isDisabled: isDisabled = false, isInvalid: isInvalid = false, isRequired: isRequired = false } = props;
    let content = (0, react.useMemo)(()=>typeof children === 'function' ? children({
            isOpen: false,
            isDisabled: isDisabled,
            isInvalid: isInvalid,
            isRequired: isRequired,
            isFocused: false,
            isFocusVisible: false,
            defaultChildren: null
        }) : children, [
        children,
        isDisabled,
        isInvalid,
        isRequired
    ]);
    return /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: content
    }, (collection)=>/*#__PURE__*/ (0, react).createElement($82d7e5349645de74$var$SelectInner, {
            props: props,
            collection: collection,
            selectRef: ref
        }));
});
// Contexts to clear inside the popover.
const $82d7e5349645de74$var$CLEAR_CONTEXTS = [
    (0, Label/* LabelContext */.I),
    (0, Button/* ButtonContext */.k),
    (0, Text/* TextContext */.h)
];
function $82d7e5349645de74$var$SelectInner({ props: props, selectRef: ref, collection: collection }) {
    let { validationBehavior: formValidationBehavior } = (0, utils/* useSlottedContext */.CC)((0, Form/* FormContext */.c)) || {};
    var _props_validationBehavior, _ref;
    let validationBehavior = (_ref = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : formValidationBehavior) !== null && _ref !== void 0 ? _ref : 'native';
    let state = (0, $2bc3a590c5373a4e$export$5159ec8b34d4ec12)({
        ...props,
        collection: collection,
        children: undefined,
        validationBehavior: validationBehavior
    });
    let { isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, useFocusRing/* useFocusRing */.o)({
        within: true
    });
    // Get props for child elements from useSelect
    let buttonRef = (0, react.useRef)(null);
    let [labelRef, label] = (0, utils/* useSlot */._E)(!props['aria-label'] && !props['aria-labelledby']);
    let { labelProps: labelProps, triggerProps: triggerProps, valueProps: valueProps, menuProps: menuProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, hiddenSelectProps: hiddenSelectProps, ...validation } = (0, $58aed456727eb0f3$export$e64b2f635402ca43)({
        ...(0, utils/* removeDataAttributes */.SK)(props),
        label: label,
        validationBehavior: validationBehavior
    }, state, buttonRef);
    // Make menu width match input + button
    let [buttonWidth, setButtonWidth] = (0, react.useState)(null);
    let onResize = (0, react.useCallback)(()=>{
        if (buttonRef.current) setButtonWidth(buttonRef.current.offsetWidth + 'px');
    }, [
        buttonRef
    ]);
    (0, useResizeObserver/* useResizeObserver */.w)({
        ref: buttonRef,
        onResize: onResize
    });
    // Only expose a subset of state to renderProps function to avoid infinite render loop
    let renderPropsState = (0, react.useMemo)(()=>({
            isOpen: state.isOpen,
            isFocused: state.isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid || false,
            isRequired: props.isRequired || false
        }), [
        state.isOpen,
        state.isFocused,
        isFocusVisible,
        props.isDisabled,
        validation.isInvalid,
        props.isRequired
    ]);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        values: renderPropsState,
        defaultClassName: 'react-aria-Select'
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.id;
    let scrollRef = (0, react.useRef)(null);
    return /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $82d7e5349645de74$export$7540cee5be7dc19b,
                props
            ],
            [
                $82d7e5349645de74$export$ef445b55be0601bd,
                state
            ],
            [
                $82d7e5349645de74$export$f8f745c04421623f,
                valueProps
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
                (0, Button/* ButtonContext */.k),
                {
                    ...triggerProps,
                    ref: buttonRef,
                    isPressed: state.isOpen,
                    autoFocus: props.autoFocus
                }
            ],
            [
                (0, Dialog/* OverlayTriggerStateContext */.RG),
                state
            ],
            [
                (0, Popover/* PopoverContext */.n),
                {
                    trigger: 'Select',
                    triggerRef: buttonRef,
                    scrollRef: scrollRef,
                    placement: 'bottom start',
                    style: {
                        '--trigger-width': buttonWidth
                    },
                    'aria-labelledby': menuProps['aria-labelledby'],
                    clearContexts: $82d7e5349645de74$var$CLEAR_CONTEXTS
                }
            ],
            [
                (0, ListBox/* ListBoxContext */.JC),
                {
                    ...menuProps,
                    ref: scrollRef
                }
            ],
            [
                (0, ListBox/* ListStateContext */.DN),
                state
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
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, focusProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": state.isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-open": state.isOpen || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": validation.isInvalid || undefined,
        "data-required": props.isRequired || undefined
    }, renderProps.children, /*#__PURE__*/ (0, react).createElement((0, $bdd25dc72710631f$export$cbd84cdb2e668835), {
        ...hiddenSelectProps,
        autoComplete: props.autoComplete
    })));
}
const $82d7e5349645de74$export$f8f745c04421623f = /*#__PURE__*/ (0, react.createContext)(null);
const $82d7e5349645de74$export$e288731fd71264f0 = /*#__PURE__*/ (0, Hidden/* createHideableComponent */.U7)(function SelectValue(props, ref) {
    var _state_selectedItems_;
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $82d7e5349645de74$export$f8f745c04421623f);
    let state = (0, react.useContext)($82d7e5349645de74$export$ef445b55be0601bd);
    let { placeholder: placeholder } = (0, utils/* useSlottedContext */.CC)($82d7e5349645de74$export$7540cee5be7dc19b);
    let rendered = state.selectedItems.map((item)=>{
        var _item_props;
        let rendered = (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.children;
        // If the selected item has a function as a child, we need to call it to render to React.JSX.
        if (typeof rendered === 'function') {
            let fn = rendered;
            rendered = fn({
                isHovered: false,
                isPressed: false,
                isSelected: false,
                isFocused: false,
                isFocusVisible: false,
                isDisabled: false,
                selectionMode: 'single',
                selectionBehavior: 'toggle'
            });
        }
        return rendered;
    });
    let formatter = (0, $33bf17300c498528$export$a2f47a3d2973640)();
    let textValue = (0, react.useMemo)(()=>state.selectedItems.map((item)=>item === null || item === void 0 ? void 0 : item.textValue), [
        state.selectedItems
    ]);
    let selectionMode = state.selectionManager.selectionMode;
    let selectedText = (0, react.useMemo)(()=>{
        var _textValue_;
        return selectionMode === 'single' ? (_textValue_ = textValue[0]) !== null && _textValue_ !== void 0 ? _textValue_ : '' : formatter.format(textValue);
    }, [
        selectionMode,
        formatter,
        textValue
    ]);
    let defaultChildren = (0, react.useMemo)(()=>{
        if (selectionMode === 'single') return rendered[0];
        let parts = formatter.formatToParts(textValue);
        if (parts.length === 0) return null;
        let index = 0;
        return parts.map((part)=>{
            if (part.type === 'element') return /*#__PURE__*/ (0, react).createElement((0, react.Fragment), {
                key: index
            }, rendered[index++]);
            else return part.value;
        });
    }, [
        selectionMode,
        formatter,
        textValue,
        rendered
    ]);
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault(intlStrings/* default */.A))), 'react-aria-components');
    var _ref, _state_selectedItems__value;
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultChildren: (_ref = defaultChildren !== null && defaultChildren !== void 0 ? defaultChildren : placeholder) !== null && _ref !== void 0 ? _ref : stringFormatter.format('selectPlaceholder'),
        defaultClassName: 'react-aria-SelectValue',
        values: {
            selectedItem: (_state_selectedItems__value = (_state_selectedItems_ = state.selectedItems[0]) === null || _state_selectedItems_ === void 0 ? void 0 : _state_selectedItems_.value) !== null && _state_selectedItems__value !== void 0 ? _state_selectedItems__value : null,
            selectedItems: (0, react.useMemo)(()=>state.selectedItems.map((item)=>{
                    var _item_value;
                    return (_item_value = item.value) !== null && _item_value !== void 0 ? _item_value : null;
                }), [
                state.selectedItems
            ]),
            selectedText: selectedText,
            isPlaceholder: state.selectedItems.length === 0,
            state: state
        }
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, react).createElement("span", {
        ref: ref,
        ...DOMProps,
        ...renderProps,
        "data-placeholder": state.selectedItems.length === 0 || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, Text/* TextContext */.h).Provider, {
        value: undefined
    }, renderProps.children));
});



//# sourceMappingURL=Select.module.js.map


/***/ })

}]);