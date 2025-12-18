"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5462],{

/***/ 319:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ $a0d645289fe9b86b$export$e7f05e985daf4b5f)
/* harmony export */ });
/* harmony import */ var _useListState_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46655);
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8356);
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


function $a0d645289fe9b86b$export$e7f05e985daf4b5f(props) {
    var _props_defaultSelectedKey;
    let [selectedKey, setSelectedKey] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__/* .useControlledState */ .P)(props.selectedKey, (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : null, props.onSelectionChange);
    let selectedKeys = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>selectedKey != null ? [
            selectedKey
        ] : [], [
        selectedKey
    ]);
    let { collection: collection, disabledKeys: disabledKeys, selectionManager: selectionManager } = (0, _useListState_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useListState */ .p)({
        ...props,
        selectionMode: 'single',
        disallowEmptySelection: true,
        allowDuplicateSelectionEvents: true,
        selectedKeys: selectedKeys,
        onSelectionChange: (keys)=>{
            // impossible, but TS doesn't know that
            if (keys === 'all') return;
            var _keys_values_next_value;
            let key = (_keys_values_next_value = keys.values().next().value) !== null && _keys_values_next_value !== void 0 ? _keys_values_next_value : null;
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



//# sourceMappingURL=useSingleSelectListState.module.js.map


/***/ }),

/***/ 11811:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ $2d73ec29415bd339$export$712718f7aec83d5)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32217);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5987);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8343);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8356);
/* harmony import */ var _react_aria_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85441);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28940);
/* harmony import */ var _react_aria_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48868);
/* harmony import */ var _react_stately_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71144);








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






function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
    let { inputElementType: inputElementType = 'input', isDisabled: isDisabled = false, isRequired: isRequired = false, isReadOnly: isReadOnly = false, type: type = 'text', validationBehavior: validationBehavior = 'aria' } = props;
    let [value, setValue] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_4__/* .useControlledState */ .P)(props.value, props.defaultValue || '', props.onChange);
    let { focusableProps: focusableProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_6__/* .useFocusable */ .Wc)(props, ref);
    let validationState = (0, _react_stately_form__WEBPACK_IMPORTED_MODULE_8__/* .useFormValidationState */ .KZ)({
        ...props,
        value: value
    });
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = validationState.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, _react_aria_label__WEBPACK_IMPORTED_MODULE_5__/* .useField */ .M)({
        ...props,
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let domProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .filterDOMProps */ .$)(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type: type,
        pattern: props.pattern
    };
    let [initialValue] = (0, react__WEBPACK_IMPORTED_MODULE_3__.useState)(value);
    var _props_defaultValue;
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .useFormReset */ .F)(ref, (_props_defaultValue = props.defaultValue) !== null && _props_defaultValue !== void 0 ? _props_defaultValue : initialValue, setValue);
    (0, _react_aria_form__WEBPACK_IMPORTED_MODULE_7__/* .useFormValidation */ .X)(props, validationState, ref);
    return {
        labelProps: labelProps,
        inputProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .mergeProps */ .v)(domProps, inputElementType === 'input' ? inputOnlyProps : undefined, {
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
            onChange: (e)=>setValue(e.target.value),
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
            [parseInt((0, react__WEBPACK_IMPORTED_MODULE_3__).version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: props.enterKeyHint,
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



//# sourceMappingURL=useTextField.module.js.map


/***/ }),

/***/ 15371:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ $bb77f239b46e8c72$export$3274cf84b703fff)
/* harmony export */ });
/* harmony import */ var _useCollator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82627);
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

function $bb77f239b46e8c72$export$3274cf84b703fff(options) {
    let collator = (0, _useCollator_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useCollator */ .Q)({
        usage: 'search',
        ...options
    });
    // TODO(later): these methods don't currently support the ignorePunctuation option.
    let startsWith = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        // Normalize both strings so we can slice safely
        // TODO: take into account the ignorePunctuation option as well...
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(0, substring.length), substring) === 0;
    }, [
        collator
    ]);
    let endsWith = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        return collator.compare(string.slice(-substring.length), substring) === 0;
    }, [
        collator
    ]);
    let contains = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize('NFC');
        substring = substring.normalize('NFC');
        let scan = 0;
        let sliceLen = substring.length;
        for(; scan + sliceLen <= string.length; scan++){
            let slice = string.slice(scan, scan + sliceLen);
            if (collator.compare(substring, slice) === 0) return true;
        }
        return false;
    }, [
        collator
    ]);
    return (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            startsWith: startsWith,
            endsWith: endsWith,
            contains: contains
        }), [
        startsWith,
        endsWith,
        contains
    ]);
}



//# sourceMappingURL=useFilter.module.js.map


/***/ }),

/***/ 20050:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a3: () => (/* binding */ $d01f2c01039c0eec$export$72b9695b8216309a)
});

// UNUSED EXPORTS: ComboBoxContext, ComboBoxStateContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Form.mjs
var Form = __webpack_require__(23128);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Group.mjs
var Group = __webpack_require__(63899);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
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
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useFilter.mjs
var useFilter = __webpack_require__(15371);
;// ./node_modules/@react-aria/combobox/dist/ar-AE.mjs
var $02cb4c75c506befe$exports = {};
$02cb4c75c506befe$exports = {
    "buttonLabel": `\u{639}\u{631}\u{636} \u{627}\u{644}\u{645}\u{642}\u{62A}\u{631}\u{62D}\u{627}\u{62A}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{62E}\u{64A}\u{627}\u{631}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`
        })} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{627}\u{644}\u{645}\u{62C}\u{645}\u{648}\u{639}\u{629} \u{627}\u{644}\u{645}\u{62F}\u{62E}\u{644}\u{629} ${args.groupTitle}, \u{645}\u{639} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{62E}\u{64A}\u{627}\u{631}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{645}\u{62D}\u{62F}\u{62F}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{645}\u{642}\u{62A}\u{631}\u{62D}\u{627}\u{62A}`,
    "selectedAnnouncement": (args)=>`${args.optionText}\u{60C} \u{645}\u{62D}\u{62F}\u{62F}`
};



//# sourceMappingURL=ar-AE.module.js.map

;// ./node_modules/@react-aria/combobox/dist/bg-BG.mjs
var $568b8163f1e56faf$exports = {};
$568b8163f1e56faf$exports = {
    "buttonLabel": `\u{41F}\u{43E}\u{43A}\u{430}\u{436}\u{438} \u{43F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`
        })} \u{43D}\u{430} \u{440}\u{430}\u{437}\u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{435}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{412}\u{44A}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${args.groupTitle}, \u{441} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{41F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`
};



//# sourceMappingURL=bg-BG.module.js.map

;// ./node_modules/@react-aria/combobox/dist/cs-CZ.mjs
var $87581c0202d106b8$exports = {};
$87581c0202d106b8$exports = {
    "buttonLabel": `Zobrazit doporu\u{10D}en\xed`,
    "countAnnouncement": (args, formatter)=>`K dispozici ${formatter.plural(args.optionCount, {
            one: ()=>`je ${formatter.number(args.optionCount)} mo\u{17E}nost`,
            other: ()=>`jsou/je ${formatter.number(args.optionCount)} mo\u{17E}nosti/-\xed`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Zadan\xe1 skupina \u{201E}${args.groupTitle}\u{201C} ${formatter.plural(args.groupCount, {
                    one: ()=>`s ${formatter.number(args.groupCount)} mo\u{17E}nost\xed`,
                    other: ()=>`se ${formatter.number(args.groupCount)} mo\u{17E}nostmi`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: ` (vybr\xe1no)`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `N\xe1vrhy`,
    "selectedAnnouncement": (args)=>`${args.optionText}, vybr\xe1no`
};



//# sourceMappingURL=cs-CZ.module.js.map

;// ./node_modules/@react-aria/combobox/dist/da-DK.mjs
var $a10a0369f5433ed1$exports = {};
$a10a0369f5433ed1$exports = {
    "buttonLabel": `Vis forslag`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} mulighed tilg\xe6ngelig`,
            other: ()=>`${formatter.number(args.optionCount)} muligheder tilg\xe6ngelige`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Angivet gruppe ${args.groupTitle}, med ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} mulighed`,
                    other: ()=>`${formatter.number(args.groupCount)} muligheder`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valgt`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Forslag`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valgt`
};



//# sourceMappingURL=da-DK.module.js.map

;// ./node_modules/@react-aria/combobox/dist/de-DE.mjs
var $bfd288727d5cb166$exports = {};
$bfd288727d5cb166$exports = {
    "buttonLabel": `Empfehlungen anzeigen`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} Option`,
            other: ()=>`${formatter.number(args.optionCount)} Optionen`
        })} verf\xfcgbar.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Eingetretene Gruppe ${args.groupTitle}, mit ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} Option`,
                    other: ()=>`${formatter.number(args.groupCount)} Optionen`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, ausgew\xe4hlt`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Empfehlungen`,
    "selectedAnnouncement": (args)=>`${args.optionText}, ausgew\xe4hlt`
};



//# sourceMappingURL=de-DE.module.js.map

;// ./node_modules/@react-aria/combobox/dist/el-GR.mjs
var $ca177778f9a74e3c$exports = {};
$ca177778f9a74e3c$exports = {
    "buttonLabel": `\u{3A0}\u{3C1}\u{3BF}\u{3B2}\u{3BF}\u{3BB}\u{3AE} \u{3C0}\u{3C1}\u{3BF}\u{3C4}\u{3AC}\u{3C3}\u{3B5}\u{3C9}\u{3BD}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2} `
        })} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B5}\u{3C2}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3BF}\u{3BC}\u{3AC}\u{3B4}\u{3B1} ${args.groupTitle}, \u{3BC}\u{3B5} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{3A0}\u{3C1}\u{3BF}\u{3C4}\u{3AC}\u{3C3}\u{3B5}\u{3B9}\u{3C2}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5}`
};



//# sourceMappingURL=el-GR.module.js.map

;// ./node_modules/@react-aria/combobox/dist/en-US.mjs
var $9b5aa79ef84beb6c$exports = {};
$9b5aa79ef84beb6c$exports = {
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Entered group ${args.groupTitle}, with ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} option`,
                    other: ()=>`${formatter.number(args.groupCount)} options`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selected`,
            other: ``
        }, args.isSelected)}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} option`,
            other: ()=>`${formatter.number(args.optionCount)} options`
        })} available.`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selected`,
    "buttonLabel": `Show suggestions`,
    "listboxLabel": `Suggestions`
};



//# sourceMappingURL=en-US.module.js.map

;// ./node_modules/@react-aria/combobox/dist/es-ES.mjs
var $57968e8209de2557$exports = {};
$57968e8209de2557$exports = {
    "buttonLabel": `Mostrar sugerencias`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opci\xf3n`,
            other: ()=>`${formatter.number(args.optionCount)} opciones`
        })} disponible(s).`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Se ha unido al grupo ${args.groupTitle}, con ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opci\xf3n`,
                    other: ()=>`${formatter.number(args.groupCount)} opciones`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, seleccionado`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugerencias`,
    "selectedAnnouncement": (args)=>`${args.optionText}, seleccionado`
};



//# sourceMappingURL=es-ES.module.js.map

;// ./node_modules/@react-aria/combobox/dist/et-EE.mjs
var $60690790bf4c1c6a$exports = {};
$60690790bf4c1c6a$exports = {
    "buttonLabel": `Kuva soovitused`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} valik`,
            other: ()=>`${formatter.number(args.optionCount)} valikud`
        })} saadaval.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Sisestatud r\xfchm ${args.groupTitle}, valikuga ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} valik`,
                    other: ()=>`${formatter.number(args.groupCount)} valikud`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valitud`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Soovitused`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valitud`
};



//# sourceMappingURL=et-EE.module.js.map

;// ./node_modules/@react-aria/combobox/dist/fi-FI.mjs
var $1101246e8c7d9357$exports = {};
$1101246e8c7d9357$exports = {
    "buttonLabel": `N\xe4yt\xe4 ehdotukset`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} vaihtoehto`,
            other: ()=>`${formatter.number(args.optionCount)} vaihtoehdot`
        })} saatavilla.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Mentiin ryhm\xe4\xe4n ${args.groupTitle}, ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} vaihtoehdon`,
                    other: ()=>`${formatter.number(args.groupCount)} vaihtoehdon`
                })} kanssa.`,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valittu`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Ehdotukset`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valittu`
};



//# sourceMappingURL=fi-FI.module.js.map

;// ./node_modules/@react-aria/combobox/dist/fr-FR.mjs
var $6404b5cb5b241730$exports = {};
$6404b5cb5b241730$exports = {
    "buttonLabel": `Afficher les suggestions`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} option`,
            other: ()=>`${formatter.number(args.optionCount)} options`
        })} disponible(s).`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Groupe ${args.groupTitle} rejoint, avec ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} option`,
                    other: ()=>`${formatter.number(args.groupCount)} options`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, s\xe9lectionn\xe9(s)`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Suggestions`,
    "selectedAnnouncement": (args)=>`${args.optionText}, s\xe9lectionn\xe9`
};



//# sourceMappingURL=fr-FR.module.js.map

;// ./node_modules/@react-aria/combobox/dist/he-IL.mjs
var $dfeafa702e92e31f$exports = {};
$dfeafa702e92e31f$exports = {
    "buttonLabel": `\u{5D4}\u{5E6}\u{5D2} \u{5D4}\u{5E6}\u{5E2}\u{5D5}\u{5EA}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${formatter.number(args.optionCount)}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`
        })} \u{5D1}\u{5DE}\u{5E6}\u{5D1} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{5E0}\u{5DB}\u{5E0}\u{5E1} \u{5DC}\u{5E7}\u{5D1}\u{5D5}\u{5E6}\u{5D4} ${args.groupTitle}, \u{5E2}\u{5DD} ${formatter.plural(args.groupCount, {
                    one: ()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${formatter.number(args.groupCount)}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{5D4}\u{5E6}\u{5E2}\u{5D5}\u{5EA}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`
};



//# sourceMappingURL=he-IL.module.js.map

;// ./node_modules/@react-aria/combobox/dist/hr-HR.mjs
var $2d125e0b34676352$exports = {};
$2d125e0b34676352$exports = {
    "buttonLabel": `Prika\u{17E}i prijedloge`,
    "countAnnouncement": (args, formatter)=>`Dostupno jo\u{161}: ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcije/a`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Unesena skupina ${args.groupTitle}, s ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcijom`,
                    other: ()=>`${formatter.number(args.groupCount)} opcije/a`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, odabranih`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Prijedlozi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, odabrano`
};



//# sourceMappingURL=hr-HR.module.js.map

;// ./node_modules/@react-aria/combobox/dist/hu-HU.mjs
var $ea029611d7634059$exports = {};
$ea029611d7634059$exports = {
    "buttonLabel": `Javaslatok megjelen\xedt\xe9se`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} lehet\u{151}s\xe9g`,
            other: ()=>`${formatter.number(args.optionCount)} lehet\u{151}s\xe9g`
        })} \xe1ll rendelkez\xe9sre.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Bel\xe9pett a(z) ${args.groupTitle} csoportba, amely ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} lehet\u{151}s\xe9get`,
                    other: ()=>`${formatter.number(args.groupCount)} lehet\u{151}s\xe9get`
                })} tartalmaz. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, kijel\xf6lve`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Javaslatok`,
    "selectedAnnouncement": (args)=>`${args.optionText}, kijel\xf6lve`
};



//# sourceMappingURL=hu-HU.module.js.map

;// ./node_modules/@react-aria/combobox/dist/it-IT.mjs
var $77f075bb86ad7091$exports = {};
$77f075bb86ad7091$exports = {
    "buttonLabel": `Mostra suggerimenti`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opzione disponibile`,
            other: ()=>`${formatter.number(args.optionCount)} opzioni disponibili`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Ingresso nel gruppo ${args.groupTitle}, con ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opzione`,
                    other: ()=>`${formatter.number(args.groupCount)} opzioni`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selezionato`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Suggerimenti`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selezionato`
};



//# sourceMappingURL=it-IT.module.js.map

;// ./node_modules/@react-aria/combobox/dist/ja-JP.mjs
var $6e87462e84907983$exports = {};
$6e87462e84907983$exports = {
    "buttonLabel": `\u{5019}\u{88DC}\u{3092}\u{8868}\u{793A}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`
        })}\u{3092}\u{5229}\u{7528}\u{3067}\u{304D}\u{307E}\u{3059}\u{3002}`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{5165}\u{529B}\u{3055}\u{308C}\u{305F}\u{30B0}\u{30EB}\u{30FC}\u{30D7} ${args.groupTitle}\u{3001}${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`
                })}\u{3092}\u{542B}\u{3080}\u{3002}`,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{5019}\u{88DC}`,
    "selectedAnnouncement": (args)=>`${args.optionText}\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`
};



//# sourceMappingURL=ja-JP.module.js.map

;// ./node_modules/@react-aria/combobox/dist/ko-KR.mjs
var $9246f2c6edc6b232$exports = {};
$9246f2c6edc6b232$exports = {
    "buttonLabel": `\u{C81C}\u{C548} \u{C0AC}\u{D56D} \u{D45C}\u{C2DC}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)}\u{AC1C} \u{C635}\u{C158}`,
            other: ()=>`${formatter.number(args.optionCount)}\u{AC1C} \u{C635}\u{C158}`
        })}\u{C744} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{C785}\u{B825}\u{D55C} \u{ADF8}\u{B8F9} ${args.groupTitle}, ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)}\u{AC1C} \u{C635}\u{C158}`,
                    other: ()=>`${formatter.number(args.groupCount)}\u{AC1C} \u{C635}\u{C158}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{C120}\u{D0DD}\u{B428}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{C81C}\u{C548}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{C120}\u{D0DD}\u{B428}`
};



//# sourceMappingURL=ko-KR.module.js.map

;// ./node_modules/@react-aria/combobox/dist/lt-LT.mjs
var $e587accc6c0a434c$exports = {};
$e587accc6c0a434c$exports = {
    "buttonLabel": `Rodyti pasi\u{16B}lymus`,
    "countAnnouncement": (args, formatter)=>`Yra ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} parinktis`,
            other: ()=>`${formatter.number(args.optionCount)} parinktys (-i\u{173})`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{12E}vesta grup\u{117} ${args.groupTitle}, su ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} parinktimi`,
                    other: ()=>`${formatter.number(args.groupCount)} parinktimis (-i\u{173})`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, pasirinkta`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Pasi\u{16B}lymai`,
    "selectedAnnouncement": (args)=>`${args.optionText}, pasirinkta`
};



//# sourceMappingURL=lt-LT.module.js.map

;// ./node_modules/@react-aria/combobox/dist/lv-LV.mjs
var $03a1900e7400b5ab$exports = {};
$03a1900e7400b5ab$exports = {
    "buttonLabel": `R\u{101}d\u{12B}t ieteikumus`,
    "countAnnouncement": (args, formatter)=>`Pieejamo opciju skaits: ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcijas`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Ievad\u{12B}ta grupa ${args.groupTitle}, ar ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opciju`,
                    other: ()=>`${formatter.number(args.groupCount)} opcij\u{101}m`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, atlas\u{12B}ta`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Ieteikumi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, atlas\u{12B}ta`
};



//# sourceMappingURL=lv-LV.module.js.map

;// ./node_modules/@react-aria/combobox/dist/nb-NO.mjs
var $1387676441be6cf6$exports = {};
$1387676441be6cf6$exports = {
    "buttonLabel": `Vis forslag`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} alternativ`,
            other: ()=>`${formatter.number(args.optionCount)} alternativer`
        })} finnes.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Angitt gruppe ${args.groupTitle}, med ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} alternativ`,
                    other: ()=>`${formatter.number(args.groupCount)} alternativer`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valgt`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Forslag`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valgt`
};



//# sourceMappingURL=nb-NO.module.js.map

;// ./node_modules/@react-aria/combobox/dist/nl-NL.mjs
var $17e82ebf0f8ab91f$exports = {};
$17e82ebf0f8ab91f$exports = {
    "buttonLabel": `Suggesties weergeven`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} optie`,
            other: ()=>`${formatter.number(args.optionCount)} opties`
        })} beschikbaar.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Groep ${args.groupTitle} ingevoerd met ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} optie`,
                    other: ()=>`${formatter.number(args.groupCount)} opties`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, geselecteerd`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Suggesties`,
    "selectedAnnouncement": (args)=>`${args.optionText}, geselecteerd`
};



//# sourceMappingURL=nl-NL.module.js.map

;// ./node_modules/@react-aria/combobox/dist/pl-PL.mjs
var $2f5377d3471630e5$exports = {};
$2f5377d3471630e5$exports = {
    "buttonLabel": `Wy\u{15B}wietlaj sugestie`,
    "countAnnouncement": (args, formatter)=>`dost\u{119}pna/dost\u{119}pne(-nych) ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcja`,
            other: ()=>`${formatter.number(args.optionCount)} opcje(-i)`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Do\u{142}\u{105}czono do grupy ${args.groupTitle}, z ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcj\u{105}`,
                    other: ()=>`${formatter.number(args.groupCount)} opcjami`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, wybrano`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugestie`,
    "selectedAnnouncement": (args)=>`${args.optionText}, wybrano`
};



//# sourceMappingURL=pl-PL.module.js.map

;// ./node_modules/@react-aria/combobox/dist/pt-BR.mjs
var $dee9868b6fa95ffe$exports = {};
$dee9868b6fa95ffe$exports = {
    "buttonLabel": `Mostrar sugest\xf5es`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} op\xe7\xe3o`,
            other: ()=>`${formatter.number(args.optionCount)} op\xe7\xf5es`
        })} dispon\xedvel.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Grupo inserido ${args.groupTitle}, com ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} op\xe7\xe3o`,
                    other: ()=>`${formatter.number(args.groupCount)} op\xe7\xf5es`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selecionado`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugest\xf5es`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selecionado`
};



//# sourceMappingURL=pt-BR.module.js.map

;// ./node_modules/@react-aria/combobox/dist/pt-PT.mjs
var $f8b2e63637cbb5a6$exports = {};
$f8b2e63637cbb5a6$exports = {
    "buttonLabel": `Apresentar sugest\xf5es`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} op\xe7\xe3o`,
            other: ()=>`${formatter.number(args.optionCount)} op\xe7\xf5es`
        })} dispon\xedvel.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Grupo introduzido ${args.groupTitle}, com ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} op\xe7\xe3o`,
                    other: ()=>`${formatter.number(args.groupCount)} op\xe7\xf5es`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selecionado`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugest\xf5es`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selecionado`
};



//# sourceMappingURL=pt-PT.module.js.map

;// ./node_modules/@react-aria/combobox/dist/ro-RO.mjs
var $46a885db3b44ea95$exports = {};
$46a885db3b44ea95$exports = {
    "buttonLabel": `Afi\u{219}are sugestii`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} op\u{21B}iune`,
            other: ()=>`${formatter.number(args.optionCount)} op\u{21B}iuni`
        })} disponibile.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Grup ${args.groupTitle} introdus, cu ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} op\u{21B}iune`,
                    other: ()=>`${formatter.number(args.groupCount)} op\u{21B}iuni`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selectat`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugestii`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selectat`
};



//# sourceMappingURL=ro-RO.module.js.map

;// ./node_modules/@react-aria/combobox/dist/ru-RU.mjs
var $50d8a8f0afa9dee5$exports = {};
$50d8a8f0afa9dee5$exports = {
    "buttonLabel": `\u{41F}\u{43E}\u{43A}\u{430}\u{437}\u{430}\u{442}\u{44C} \u{43F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{432}`
        })} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{43D}\u{430}\u{44F} \u{433}\u{440}\u{443}\u{43F}\u{43F}\u{430} ${args.groupTitle}, \u{441} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{43C}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{430}\u{43C}\u{438}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{43C}\u{438}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{41F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
};



//# sourceMappingURL=ru-RU.module.js.map

;// ./node_modules/@react-aria/combobox/dist/sk-SK.mjs
var $2867ee6173245507$exports = {};
$2867ee6173245507$exports = {
    "buttonLabel": `Zobrazi\u{165} n\xe1vrhy`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} mo\u{17E}nos\u{165}`,
            other: ()=>`${formatter.number(args.optionCount)} mo\u{17E}nosti/-\xed`
        })} k dispoz\xedcii.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Zadan\xe1 skupina ${args.groupTitle}, s ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} mo\u{17E}nos\u{165}ou`,
                    other: ()=>`${formatter.number(args.groupCount)} mo\u{17E}nos\u{165}ami`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, vybrat\xe9`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `N\xe1vrhy`,
    "selectedAnnouncement": (args)=>`${args.optionText}, vybrat\xe9`
};



//# sourceMappingURL=sk-SK.module.js.map

;// ./node_modules/@react-aria/combobox/dist/sl-SI.mjs
var $0631b65beeb09b50$exports = {};
$0631b65beeb09b50$exports = {
    "buttonLabel": `Prika\u{17E}i predloge`,
    "countAnnouncement": (args, formatter)=>`Na voljo je ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcije`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Vnesena skupina ${args.groupTitle}, z ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcija`,
                    other: ()=>`${formatter.number(args.groupCount)} opcije`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, izbrano`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Predlogi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, izbrano`
};



//# sourceMappingURL=sl-SI.module.js.map

;// ./node_modules/@react-aria/combobox/dist/sr-SP.mjs
var $65fc749265dcd686$exports = {};
$65fc749265dcd686$exports = {
    "buttonLabel": `Prika\u{17E}i predloge`,
    "countAnnouncement": (args, formatter)=>`Dostupno jo\u{161}: ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcije/a`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Unesena grupa ${args.groupTitle}, s ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcijom`,
                    other: ()=>`${formatter.number(args.groupCount)} optione/a`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, izabranih`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Predlozi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, izabrano`
};



//# sourceMappingURL=sr-SP.module.js.map

;// ./node_modules/@react-aria/combobox/dist/sv-SE.mjs
var $69ba655c7853c08e$exports = {};
$69ba655c7853c08e$exports = {
    "buttonLabel": `Visa f\xf6rslag`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} alternativ`,
            other: ()=>`${formatter.number(args.optionCount)} alternativ`
        })} tillg\xe4ngliga.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Ingick i gruppen ${args.groupTitle} med ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} alternativ`,
                    other: ()=>`${formatter.number(args.groupCount)} alternativ`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valda`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `F\xf6rslag`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valda`
};



//# sourceMappingURL=sv-SE.module.js.map

;// ./node_modules/@react-aria/combobox/dist/tr-TR.mjs
var $a79794784d61577c$exports = {};
$a79794784d61577c$exports = {
    "buttonLabel": `\xd6nerileri g\xf6ster`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} se\xe7enek`,
            other: ()=>`${formatter.number(args.optionCount)} se\xe7enekler`
        })} kullan\u{131}labilir.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Girilen grup ${args.groupTitle}, ile ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} se\xe7enek`,
                    other: ()=>`${formatter.number(args.groupCount)} se\xe7enekler`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, se\xe7ildi`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\xd6neriler`,
    "selectedAnnouncement": (args)=>`${args.optionText}, se\xe7ildi`
};



//# sourceMappingURL=tr-TR.module.js.map

;// ./node_modules/@react-aria/combobox/dist/uk-UA.mjs
var $c2845791417ebaf4$exports = {};
$c2845791417ebaf4$exports = {
    "buttonLabel": `\u{41F}\u{43E}\u{43A}\u{430}\u{437}\u{430}\u{442}\u{438} \u{43F}\u{440}\u{43E}\u{43F}\u{43E}\u{437}\u{438}\u{446}\u{456}\u{457}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`
        })} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${args.groupTitle}, \u{437} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{41F}\u{440}\u{43E}\u{43F}\u{43E}\u{437}\u{438}\u{446}\u{456}\u{457}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
};



//# sourceMappingURL=uk-UA.module.js.map

;// ./node_modules/@react-aria/combobox/dist/zh-CN.mjs
var $29b642d0025cc7a4$exports = {};
$29b642d0025cc7a4$exports = {
    "buttonLabel": `\u{663E}\u{793A}\u{5EFA}\u{8BAE}`,
    "countAnnouncement": (args, formatter)=>`\u{6709} ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{4E2A}\u{9009}\u{9879}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{4E2A}\u{9009}\u{9879}`
        })}\u{53EF}\u{7528}\u{3002}`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{8FDB}\u{5165}\u{4E86} ${args.groupTitle} \u{7EC4}\u{FF0C}\u{5176}\u{4E2D}\u{6709} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{4E2A}\u{9009}\u{9879}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{4E2A}\u{9009}\u{9879}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{5DF2}\u{9009}\u{62E9}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{5EFA}\u{8BAE}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{5DF2}\u{9009}\u{62E9}`
};



//# sourceMappingURL=zh-CN.module.js.map

;// ./node_modules/@react-aria/combobox/dist/zh-TW.mjs
var $cd36dd33f9d46936$exports = {};
$cd36dd33f9d46936$exports = {
    "buttonLabel": `\u{986F}\u{793A}\u{5EFA}\u{8B70}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{9078}\u{9805}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{9078}\u{9805}`
        })} \u{53EF}\u{7528}\u{3002}`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{8F38}\u{5165}\u{7684}\u{7FA4}\u{7D44} ${args.groupTitle}, \u{6709} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{9078}\u{9805}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{9078}\u{9805}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{5DF2}\u{9078}\u{53D6}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{5EFA}\u{8B70}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{5DF2}\u{9078}\u{53D6}`
};



//# sourceMappingURL=zh-TW.module.js.map

;// ./node_modules/@react-aria/combobox/dist/intlStrings.mjs



































var $de5926a92e8ebc5b$exports = {};


































$de5926a92e8ebc5b$exports = {
    "ar-AE": $02cb4c75c506befe$exports,
    "bg-BG": $568b8163f1e56faf$exports,
    "cs-CZ": $87581c0202d106b8$exports,
    "da-DK": $a10a0369f5433ed1$exports,
    "de-DE": $bfd288727d5cb166$exports,
    "el-GR": $ca177778f9a74e3c$exports,
    "en-US": $9b5aa79ef84beb6c$exports,
    "es-ES": $57968e8209de2557$exports,
    "et-EE": $60690790bf4c1c6a$exports,
    "fi-FI": $1101246e8c7d9357$exports,
    "fr-FR": $6404b5cb5b241730$exports,
    "he-IL": $dfeafa702e92e31f$exports,
    "hr-HR": $2d125e0b34676352$exports,
    "hu-HU": $ea029611d7634059$exports,
    "it-IT": $77f075bb86ad7091$exports,
    "ja-JP": $6e87462e84907983$exports,
    "ko-KR": $9246f2c6edc6b232$exports,
    "lt-LT": $e587accc6c0a434c$exports,
    "lv-LV": $03a1900e7400b5ab$exports,
    "nb-NO": $1387676441be6cf6$exports,
    "nl-NL": $17e82ebf0f8ab91f$exports,
    "pl-PL": $2f5377d3471630e5$exports,
    "pt-BR": $dee9868b6fa95ffe$exports,
    "pt-PT": $f8b2e63637cbb5a6$exports,
    "ro-RO": $46a885db3b44ea95$exports,
    "ru-RU": $50d8a8f0afa9dee5$exports,
    "sk-SK": $2867ee6173245507$exports,
    "sl-SI": $0631b65beeb09b50$exports,
    "sr-SP": $65fc749265dcd686$exports,
    "sv-SE": $69ba655c7853c08e$exports,
    "tr-TR": $a79794784d61577c$exports,
    "uk-UA": $c2845791417ebaf4$exports,
    "zh-CN": $29b642d0025cc7a4$exports,
    "zh-TW": $cd36dd33f9d46936$exports
};



//# sourceMappingURL=intlStrings.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/live-announcer/dist/LiveAnnouncer.mjs
var LiveAnnouncer = __webpack_require__(60771);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/ariaHideOutside.mjs
var ariaHideOutside = __webpack_require__(2269);
// EXTERNAL MODULE: ./node_modules/@react-aria/listbox/dist/utils.mjs
var dist_utils = __webpack_require__(97918);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/openLink.mjs
var openLink = __webpack_require__(43831);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/chain.mjs
var chain = __webpack_require__(72166);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLabels.mjs
var useLabels = __webpack_require__(37061);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/platform.mjs
var platform = __webpack_require__(69202);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useUpdateEffect.mjs
var useUpdateEffect = __webpack_require__(22644);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(99672);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/domHelpers.mjs
var domHelpers = __webpack_require__(24836);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useEvent.mjs
var useEvent = __webpack_require__(17460);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/virtualFocus.mjs
var virtualFocus = __webpack_require__(55799);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/getChildNodes.mjs
var getChildNodes = __webpack_require__(80423);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/getItemCount.mjs
var getItemCount = __webpack_require__(70732);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/ListKeyboardDelegate.mjs
var ListKeyboardDelegate = __webpack_require__(96584);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useSelectableCollection.mjs + 2 modules
var useSelectableCollection = __webpack_require__(1243);
// EXTERNAL MODULE: ./node_modules/@react-stately/form/dist/useFormValidationState.mjs
var useFormValidationState = __webpack_require__(71144);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(29571);
// EXTERNAL MODULE: ./node_modules/@react-aria/menu/dist/useMenuTrigger.mjs + 35 modules
var useMenuTrigger = __webpack_require__(25263);
// EXTERNAL MODULE: ./node_modules/@react-aria/textfield/dist/useTextField.mjs
var useTextField = __webpack_require__(11811);
;// ./node_modules/@react-aria/combobox/dist/useComboBox.mjs















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












function $c350ade66beef0af$export$8c18d1b4f7232bbf(props, state) {
    let { buttonRef: buttonRef, popoverRef: popoverRef, inputRef: inputRef, listBoxRef: listBoxRef, keyboardDelegate: keyboardDelegate, layoutDelegate: layoutDelegate, shouldFocusWrap: // completionMode = 'suggest',
    shouldFocusWrap, isReadOnly: isReadOnly, isDisabled: isDisabled } = props;
    let backupBtnRef = (0, react.useRef)(null);
    buttonRef = buttonRef !== null && buttonRef !== void 0 ? buttonRef : backupBtnRef;
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault($de5926a92e8ebc5b$exports))), '@react-aria/combobox');
    let { menuTriggerProps: menuTriggerProps, menuProps: menuProps } = (0, useMenuTrigger/* useMenuTrigger */.V)({
        type: 'listbox',
        isDisabled: isDisabled || isReadOnly
    }, state, buttonRef);
    // Set listbox id so it can be used when calling getItemId later
    (0, dist_utils/* listData */.b).set(state, {
        id: menuProps.id
    });
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let { collection: collection } = state;
    let { disabledKeys: disabledKeys } = state.selectionManager;
    let delegate = (0, react.useMemo)(()=>keyboardDelegate || new (0, ListKeyboardDelegate/* ListKeyboardDelegate */.n)({
            collection: collection,
            disabledKeys: disabledKeys,
            ref: listBoxRef,
            layoutDelegate: layoutDelegate
        }), [
        keyboardDelegate,
        layoutDelegate,
        collection,
        disabledKeys,
        listBoxRef
    ]);
    // Use useSelectableCollection to get the keyboard handlers to apply to the textfield
    let { collectionProps: collectionProps } = (0, useSelectableCollection/* useSelectableCollection */.y)({
        selectionManager: state.selectionManager,
        keyboardDelegate: delegate,
        disallowTypeAhead: true,
        disallowEmptySelection: true,
        shouldFocusWrap: shouldFocusWrap,
        ref: inputRef,
        // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
        isVirtualized: true
    });
    let router = (0, openLink/* useRouter */.rd)();
    // For textfield specific keydown operations
    let onKeyDown = (e)=>{
        if (e.nativeEvent.isComposing) return;
        switch(e.key){
            case 'Enter':
            case 'Tab':
                // Prevent form submission if menu is open since we may be selecting a option
                if (state.isOpen && e.key === 'Enter') e.preventDefault();
                // If the focused item is a link, trigger opening it. Items that are links are not selectable.
                if (state.isOpen && listBoxRef.current && state.selectionManager.focusedKey != null) {
                    let collectionItem = state.collection.getItem(state.selectionManager.focusedKey);
                    if (collectionItem === null || collectionItem === void 0 ? void 0 : collectionItem.props.href) {
                        let item = listBoxRef.current.querySelector(`[data-key="${CSS.escape(state.selectionManager.focusedKey.toString())}"]`);
                        if (e.key === 'Enter' && item instanceof HTMLAnchorElement) router.open(item, e, collectionItem.props.href, collectionItem.props.routerOptions);
                        state.close();
                        break;
                    } else if (collectionItem === null || collectionItem === void 0 ? void 0 : collectionItem.props.onAction) {
                        collectionItem.props.onAction();
                        state.close();
                        break;
                    }
                }
                state.commit();
                break;
            case 'Escape':
                if (state.selectedKey !== null || state.inputValue === '' || props.allowsCustomValue) e.continuePropagation();
                state.revert();
                break;
            case 'ArrowDown':
                state.open('first', 'manual');
                break;
            case 'ArrowUp':
                state.open('last', 'manual');
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                state.selectionManager.setFocusedKey(null);
                break;
        }
    };
    let onBlur = (e)=>{
        var _popoverRef_current;
        let blurFromButton = (buttonRef === null || buttonRef === void 0 ? void 0 : buttonRef.current) && buttonRef.current === e.relatedTarget;
        let blurIntoPopover = (_popoverRef_current = popoverRef.current) === null || _popoverRef_current === void 0 ? void 0 : _popoverRef_current.contains(e.relatedTarget);
        // Ignore blur if focused moved to the button(if exists) or into the popover.
        if (blurFromButton || blurIntoPopover) return;
        if (props.onBlur) props.onBlur(e);
        state.setFocused(false);
    };
    let onFocus = (e)=>{
        if (state.isFocused) return;
        if (props.onFocus) props.onFocus(e);
        state.setFocused(true);
    };
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, useTextField/* useTextField */.v)({
        ...props,
        onChange: state.setInputValue,
        onKeyDown: !isReadOnly ? (0, chain/* chain */.c)(state.isOpen && collectionProps.onKeyDown, onKeyDown, props.onKeyDown) : props.onKeyDown,
        onBlur: onBlur,
        value: state.inputValue,
        defaultValue: state.defaultInputValue,
        onFocus: onFocus,
        autoComplete: 'off',
        validate: undefined,
        [(0, useFormValidationState/* privateValidationStateProp */.Lf)]: state
    }, inputRef);
    // Press handlers for the ComboBox button
    let onPress = (e)=>{
        if (e.pointerType === 'touch') {
            var // Focus the input field in case it isn't focused yet
            _inputRef_current;
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
            state.toggle(null, 'manual');
        }
    };
    let onPressStart = (e)=>{
        if (e.pointerType !== 'touch') {
            var _inputRef_current;
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
            state.toggle(e.pointerType === 'keyboard' || e.pointerType === 'virtual' ? 'first' : null, 'manual');
        }
    };
    let triggerLabelProps = (0, useLabels/* useLabels */.b)({
        id: menuTriggerProps.id,
        'aria-label': stringFormatter.format('buttonLabel'),
        'aria-labelledby': props['aria-labelledby'] || labelProps.id
    });
    let listBoxProps = (0, useLabels/* useLabels */.b)({
        id: menuProps.id,
        'aria-label': stringFormatter.format('listboxLabel'),
        'aria-labelledby': props['aria-labelledby'] || labelProps.id
    });
    // If a touch happens on direct center of ComboBox input, might be virtual click from iPad so open ComboBox menu
    let lastEventTime = (0, react.useRef)(0);
    let onTouchEnd = (e)=>{
        if (isDisabled || isReadOnly) return;
        // Sometimes VoiceOver on iOS fires two touchend events in quick succession. Ignore the second one.
        if (e.timeStamp - lastEventTime.current < 500) {
            var _inputRef_current;
            e.preventDefault();
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
            return;
        }
        let rect = e.target.getBoundingClientRect();
        let touch = e.changedTouches[0];
        let centerX = Math.ceil(rect.left + .5 * rect.width);
        let centerY = Math.ceil(rect.top + .5 * rect.height);
        if (touch.clientX === centerX && touch.clientY === centerY) {
            var _inputRef_current1;
            e.preventDefault();
            (_inputRef_current1 = inputRef.current) === null || _inputRef_current1 === void 0 ? void 0 : _inputRef_current1.focus();
            state.toggle(null, 'manual');
            lastEventTime.current = e.timeStamp;
        }
    };
    // VoiceOver has issues with announcing aria-activedescendant properly on change
    // (especially on iOS). We use a live region announcer to announce focus changes
    // manually. In addition, section titles are announced when navigating into a new section.
    let focusedItem = state.selectionManager.focusedKey != null && state.isOpen ? state.collection.getItem(state.selectionManager.focusedKey) : undefined;
    var _focusedItem_parentKey;
    let sectionKey = (_focusedItem_parentKey = focusedItem === null || focusedItem === void 0 ? void 0 : focusedItem.parentKey) !== null && _focusedItem_parentKey !== void 0 ? _focusedItem_parentKey : null;
    var _state_selectionManager_focusedKey;
    let itemKey = (_state_selectionManager_focusedKey = state.selectionManager.focusedKey) !== null && _state_selectionManager_focusedKey !== void 0 ? _state_selectionManager_focusedKey : null;
    let lastSection = (0, react.useRef)(sectionKey);
    let lastItem = (0, react.useRef)(itemKey);
    (0, react.useEffect)(()=>{
        if ((0, platform/* isAppleDevice */.lg)() && focusedItem != null && itemKey != null && itemKey !== lastItem.current) {
            let isSelected = state.selectionManager.isSelected(itemKey);
            let section = sectionKey != null ? state.collection.getItem(sectionKey) : null;
            let sectionTitle = (section === null || section === void 0 ? void 0 : section['aria-label']) || (typeof (section === null || section === void 0 ? void 0 : section.rendered) === 'string' ? section.rendered : '') || '';
            var _ref;
            let announcement = stringFormatter.format('focusAnnouncement', {
                isGroupChange: (_ref = section && sectionKey !== lastSection.current) !== null && _ref !== void 0 ? _ref : false,
                groupTitle: sectionTitle,
                groupCount: section ? [
                    ...(0, getChildNodes/* getChildNodes */.iQ)(section, state.collection)
                ].length : 0,
                optionText: focusedItem['aria-label'] || focusedItem.textValue || '',
                isSelected: isSelected
            });
            (0, LiveAnnouncer/* announce */.iP)(announcement);
        }
        lastSection.current = sectionKey;
        lastItem.current = itemKey;
    });
    // Announce the number of available suggestions when it changes
    let optionCount = (0, getItemCount/* getItemCount */.v)(state.collection);
    let lastSize = (0, react.useRef)(optionCount);
    let lastOpen = (0, react.useRef)(state.isOpen);
    (0, react.useEffect)(()=>{
        // Only announce the number of options available when the menu opens if there is no
        // focused item, otherwise screen readers will typically read e.g. "1 of 6".
        // The exception is VoiceOver since this isn't included in the message above.
        let didOpenWithoutFocusedItem = state.isOpen !== lastOpen.current && (state.selectionManager.focusedKey == null || (0, platform/* isAppleDevice */.lg)());
        if (state.isOpen && (didOpenWithoutFocusedItem || optionCount !== lastSize.current)) {
            let announcement = stringFormatter.format('countAnnouncement', {
                optionCount: optionCount
            });
            (0, LiveAnnouncer/* announce */.iP)(announcement);
        }
        lastSize.current = optionCount;
        lastOpen.current = state.isOpen;
    });
    // Announce when a selection occurs for VoiceOver. Other screen readers typically do this automatically.
    let lastSelectedKey = (0, react.useRef)(state.selectedKey);
    (0, react.useEffect)(()=>{
        if ((0, platform/* isAppleDevice */.lg)() && state.isFocused && state.selectedItem && state.selectedKey !== lastSelectedKey.current) {
            let optionText = state.selectedItem['aria-label'] || state.selectedItem.textValue || '';
            let announcement = stringFormatter.format('selectedAnnouncement', {
                optionText: optionText
            });
            (0, LiveAnnouncer/* announce */.iP)(announcement);
        }
        lastSelectedKey.current = state.selectedKey;
    });
    (0, react.useEffect)(()=>{
        if (state.isOpen) return (0, ariaHideOutside/* ariaHideOutside */.h)([
            inputRef.current,
            popoverRef.current
        ].filter((element)=>element != null));
    }, [
        state.isOpen,
        inputRef,
        popoverRef
    ]);
    (0, useUpdateEffect/* useUpdateEffect */.w)(()=>{
        // Re-show focus ring when there is no virtually focused item.
        if (!focusedItem && inputRef.current && (0, DOMFunctions/* getActiveElement */.bq)((0, domHelpers/* getOwnerDocument */.TW)(inputRef.current)) === inputRef.current) (0, virtualFocus/* dispatchVirtualFocus */.Ig)(inputRef.current, null);
    }, [
        focusedItem
    ]);
    (0, useEvent/* useEvent */._)(listBoxRef, 'react-aria-item-action', state.isOpen ? ()=>{
        state.close();
    } : undefined);
    return {
        labelProps: labelProps,
        buttonProps: {
            ...menuTriggerProps,
            ...triggerLabelProps,
            excludeFromTabOrder: true,
            preventFocusOnPress: true,
            onPress: onPress,
            onPressStart: onPressStart,
            isDisabled: isDisabled || isReadOnly
        },
        inputProps: (0, mergeProps/* mergeProps */.v)(inputProps, {
            role: 'combobox',
            'aria-expanded': menuTriggerProps['aria-expanded'],
            'aria-controls': state.isOpen ? menuProps.id : undefined,
            // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
            'aria-autocomplete': 'list',
            'aria-activedescendant': focusedItem ? (0, dist_utils/* getItemId */.H)(state, focusedItem.key) : undefined,
            onTouchEnd: onTouchEnd,
            // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
            autoCorrect: 'off',
            // This disable's the macOS Safari spell check auto corrections.
            spellCheck: 'false'
        }),
        listBoxProps: (0, mergeProps/* mergeProps */.v)(menuProps, listBoxProps, {
            autoFocus: state.focusStrategy || true,
            shouldUseVirtualFocus: true,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true,
            linkBehavior: 'selection',
            ['UNSTABLE_itemBehavior']: 'action'
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}



//# sourceMappingURL=useComboBox.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-stately/list/dist/useSingleSelectListState.mjs
var useSingleSelectListState = __webpack_require__(319);
// EXTERNAL MODULE: ./node_modules/@react-stately/list/dist/ListCollection.mjs
var ListCollection = __webpack_require__(7471);
// EXTERNAL MODULE: ./node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs
var useOverlayTriggerState = __webpack_require__(71732);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/useControlledState.mjs
var useControlledState = __webpack_require__(8356);
;// ./node_modules/@react-stately/combobox/dist/useComboBoxState.mjs







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





function $a9e7382a7d111cb5$export$b453a3bfd4a5fa9e(props) {
    var _collection_getItem;
    let { defaultFilter: defaultFilter, menuTrigger: menuTrigger = 'input', allowsEmptyCollection: allowsEmptyCollection = false, allowsCustomValue: allowsCustomValue, shouldCloseOnBlur: shouldCloseOnBlur = true } = props;
    let [showAllItems, setShowAllItems] = (0, react.useState)(false);
    let [isFocused, setFocusedState] = (0, react.useState)(false);
    let [focusStrategy, setFocusStrategy] = (0, react.useState)(null);
    let onSelectionChange = (key)=>{
        if (props.onSelectionChange) props.onSelectionChange(key);
        // If key is the same, reset the inputValue and close the menu
        // (scenario: user clicks on already selected option)
        if (key === selectedKey) {
            resetInputValue();
            closeMenu();
        }
    };
    var _props_items;
    let { collection: collection, selectionManager: selectionManager, selectedKey: selectedKey, setSelectedKey: setSelectedKey, selectedItem: selectedItem, disabledKeys: disabledKeys } = (0, useSingleSelectListState/* useSingleSelectListState */.V)({
        ...props,
        onSelectionChange: onSelectionChange,
        items: (_props_items = props.items) !== null && _props_items !== void 0 ? _props_items : props.defaultItems
    });
    let [inputValue, setInputValue] = (0, useControlledState/* useControlledState */.P)(props.inputValue, $a9e7382a7d111cb5$var$getDefaultInputValue(props.defaultInputValue, selectedKey, collection) || '', props.onInputChange);
    let [initialSelectedKey] = (0, react.useState)(selectedKey);
    let [initialValue] = (0, react.useState)(inputValue);
    // Preserve original collection so we can show all items on demand
    let originalCollection = collection;
    let filteredCollection = (0, react.useMemo)(()=>// No default filter if items are controlled.
        props.items != null || !defaultFilter ? collection : $a9e7382a7d111cb5$var$filterCollection(collection, inputValue, defaultFilter), [
        collection,
        inputValue,
        defaultFilter,
        props.items
    ]);
    let [lastCollection, setLastCollection] = (0, react.useState)(filteredCollection);
    // Track what action is attempting to open the menu
    let menuOpenTrigger = (0, react.useRef)('focus');
    let onOpenChange = (open)=>{
        if (props.onOpenChange) props.onOpenChange(open, open ? menuOpenTrigger.current : undefined);
        selectionManager.setFocused(open);
        if (!open) selectionManager.setFocusedKey(null);
    };
    let triggerState = (0, useOverlayTriggerState/* useOverlayTriggerState */.T)({
        ...props,
        onOpenChange: onOpenChange,
        isOpen: undefined,
        defaultOpen: undefined
    });
    let open = (focusStrategy = null, trigger)=>{
        let displayAllItems = trigger === 'manual' || trigger === 'focus' && menuTrigger === 'focus';
        // Prevent open operations from triggering if there is nothing to display
        // Also prevent open operations from triggering if items are uncontrolled but defaultItems is empty, even if displayAllItems is true.
        // This is to prevent comboboxes with empty defaultItems from opening but allow controlled items comboboxes to open even if the inital list is empty (assumption is user will provide swap the empty list with a base list via onOpenChange returning `menuTrigger` manual)
        if (allowsEmptyCollection || filteredCollection.size > 0 || displayAllItems && originalCollection.size > 0 || props.items) {
            if (displayAllItems && !triggerState.isOpen && props.items === undefined) // Show all items if menu is manually opened. Only care about this if items are undefined
            setShowAllItems(true);
            menuOpenTrigger.current = trigger;
            setFocusStrategy(focusStrategy);
            triggerState.open();
        }
    };
    let toggle = (focusStrategy = null, trigger)=>{
        let displayAllItems = trigger === 'manual' || trigger === 'focus' && menuTrigger === 'focus';
        // If the menu is closed and there is nothing to display, early return so toggle isn't called to prevent extraneous onOpenChange
        if (!(allowsEmptyCollection || filteredCollection.size > 0 || displayAllItems && originalCollection.size > 0 || props.items) && !triggerState.isOpen) return;
        if (displayAllItems && !triggerState.isOpen && props.items === undefined) // Show all items if menu is toggled open. Only care about this if items are undefined
        setShowAllItems(true);
        // Only update the menuOpenTrigger if menu is currently closed
        if (!triggerState.isOpen) menuOpenTrigger.current = trigger;
        toggleMenu(focusStrategy);
    };
    let updateLastCollection = (0, react.useCallback)(()=>{
        setLastCollection(showAllItems ? originalCollection : filteredCollection);
    }, [
        showAllItems,
        originalCollection,
        filteredCollection
    ]);
    // If menu is going to close, save the current collection so we can freeze the displayed collection when the
    // user clicks outside the popover to close the menu. Prevents the menu contents from updating as the menu closes.
    let toggleMenu = (0, react.useCallback)((focusStrategy = null)=>{
        if (triggerState.isOpen) updateLastCollection();
        setFocusStrategy(focusStrategy);
        triggerState.toggle();
    }, [
        triggerState,
        updateLastCollection
    ]);
    let closeMenu = (0, react.useCallback)(()=>{
        if (triggerState.isOpen) {
            updateLastCollection();
            triggerState.close();
        }
    }, [
        triggerState,
        updateLastCollection
    ]);
    let [lastValue, setLastValue] = (0, react.useState)(inputValue);
    let resetInputValue = ()=>{
        var _collection_getItem;
        var _collection_getItem_textValue;
        let itemText = selectedKey != null ? (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : '' : '';
        setLastValue(itemText);
        setInputValue(itemText);
    };
    var _props_selectedKey, _ref;
    let lastSelectedKey = (0, react.useRef)((_ref = (_props_selectedKey = props.selectedKey) !== null && _props_selectedKey !== void 0 ? _props_selectedKey : props.defaultSelectedKey) !== null && _ref !== void 0 ? _ref : null);
    var _collection_getItem_textValue;
    let lastSelectedKeyText = (0, react.useRef)(selectedKey != null ? (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : '' : '');
    // intentional omit dependency array, want this to happen on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, react.useEffect)(()=>{
        var _collection_getItem;
        // Open and close menu automatically when the input value changes if the input is focused,
        // and there are items in the collection or allowEmptyCollection is true.
        if (isFocused && (filteredCollection.size > 0 || allowsEmptyCollection) && !triggerState.isOpen && inputValue !== lastValue && menuTrigger !== 'manual') open(null, 'input');
        // Close the menu if the collection is empty. Don't close menu if filtered collection size is 0
        // but we are currently showing all items via button press
        if (!showAllItems && !allowsEmptyCollection && triggerState.isOpen && filteredCollection.size === 0) closeMenu();
        // Close when an item is selected.
        if (selectedKey != null && selectedKey !== lastSelectedKey.current) closeMenu();
        // Clear focused key when input value changes and display filtered collection again.
        if (inputValue !== lastValue) {
            selectionManager.setFocusedKey(null);
            setShowAllItems(false);
            // Set selectedKey to null when the user clears the input.
            // If controlled, this is the application developer's responsibility.
            if (inputValue === '' && (props.inputValue === undefined || props.selectedKey === undefined)) setSelectedKey(null);
        }
        // If the selectedKey changed, update the input value.
        // Do nothing if both inputValue and selectedKey are controlled.
        // In this case, it's the user's responsibility to update inputValue in onSelectionChange.
        if (selectedKey !== lastSelectedKey.current && (props.inputValue === undefined || props.selectedKey === undefined)) resetInputValue();
        else if (lastValue !== inputValue) setLastValue(inputValue);
        var _collection_getItem_textValue;
        // Update the inputValue if the selected item's text changes from its last tracked value.
        // This is to handle cases where a selectedKey is specified but the items aren't available (async loading) or the selected item's text value updates.
        // Only reset if the user isn't currently within the field so we don't erroneously modify user input.
        // If inputValue is controlled, it is the user's responsibility to update the inputValue when items change.
        let selectedItemText = selectedKey != null ? (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : '' : '';
        if (!isFocused && selectedKey != null && props.inputValue === undefined && selectedKey === lastSelectedKey.current) {
            if (lastSelectedKeyText.current !== selectedItemText) {
                setLastValue(selectedItemText);
                setInputValue(selectedItemText);
            }
        }
        lastSelectedKey.current = selectedKey;
        lastSelectedKeyText.current = selectedItemText;
    });
    let validation = (0, useFormValidationState/* useFormValidationState */.KZ)({
        ...props,
        value: (0, react.useMemo)(()=>({
                inputValue: inputValue,
                selectedKey: selectedKey
            }), [
            inputValue,
            selectedKey
        ])
    });
    // Revert input value and close menu
    let revert = ()=>{
        if (allowsCustomValue && selectedKey == null) commitCustomValue();
        else commitSelection();
    };
    let commitCustomValue = ()=>{
        lastSelectedKey.current = null;
        setSelectedKey(null);
        closeMenu();
    };
    let commitSelection = ()=>{
        // If multiple things are controlled, call onSelectionChange
        if (props.selectedKey !== undefined && props.inputValue !== undefined) {
            var _props_onSelectionChange, _collection_getItem;
            (_props_onSelectionChange = props.onSelectionChange) === null || _props_onSelectionChange === void 0 ? void 0 : _props_onSelectionChange.call(props, selectedKey);
            var _collection_getItem_textValue;
            // Stop menu from reopening from useEffect
            let itemText = selectedKey != null ? (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : '' : '';
            setLastValue(itemText);
            closeMenu();
        } else {
            // If only a single aspect of combobox is controlled, reset input value and close menu for the user
            resetInputValue();
            closeMenu();
        }
    };
    const commitValue = ()=>{
        if (allowsCustomValue) {
            var _collection_getItem;
            var _collection_getItem_textValue;
            const itemText = selectedKey != null ? (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : '' : '';
            inputValue === itemText ? commitSelection() : commitCustomValue();
        } else // Reset inputValue and close menu
        commitSelection();
    };
    let commit = ()=>{
        if (triggerState.isOpen && selectionManager.focusedKey != null) {
            // Reset inputValue and close menu here if the selected key is already the focused key. Otherwise
            // fire onSelectionChange to allow the application to control the closing.
            if (selectedKey === selectionManager.focusedKey) commitSelection();
            else setSelectedKey(selectionManager.focusedKey);
        } else commitValue();
    };
    let valueOnFocus = (0, react.useRef)(inputValue);
    let setFocused = (isFocused)=>{
        if (isFocused) {
            valueOnFocus.current = inputValue;
            if (menuTrigger === 'focus' && !props.isReadOnly) open(null, 'focus');
        } else {
            if (shouldCloseOnBlur) commitValue();
            if (inputValue !== valueOnFocus.current) validation.commitValidation();
        }
        setFocusedState(isFocused);
    };
    let displayedCollection = (0, react.useMemo)(()=>{
        if (triggerState.isOpen) {
            if (showAllItems) return originalCollection;
            else return filteredCollection;
        } else return lastCollection;
    }, [
        triggerState.isOpen,
        originalCollection,
        filteredCollection,
        showAllItems,
        lastCollection
    ]);
    var _props_defaultSelectedKey;
    let defaultSelectedKey = (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : initialSelectedKey;
    var _getDefaultInputValue;
    return {
        ...validation,
        ...triggerState,
        focusStrategy: focusStrategy,
        toggle: toggle,
        open: open,
        close: commitValue,
        selectionManager: selectionManager,
        selectedKey: selectedKey,
        defaultSelectedKey: defaultSelectedKey,
        setSelectedKey: setSelectedKey,
        disabledKeys: disabledKeys,
        isFocused: isFocused,
        setFocused: setFocused,
        selectedItem: selectedItem,
        collection: displayedCollection,
        inputValue: inputValue,
        defaultInputValue: (_getDefaultInputValue = $a9e7382a7d111cb5$var$getDefaultInputValue(props.defaultInputValue, defaultSelectedKey, collection)) !== null && _getDefaultInputValue !== void 0 ? _getDefaultInputValue : initialValue,
        setInputValue: setInputValue,
        commit: commit,
        revert: revert
    };
}
function $a9e7382a7d111cb5$var$filterCollection(collection, inputValue, filter) {
    return new (0, ListCollection/* ListCollection */.J)($a9e7382a7d111cb5$var$filterNodes(collection, collection, inputValue, filter));
}
function $a9e7382a7d111cb5$var$filterNodes(collection, nodes, inputValue, filter) {
    let filteredNode = [];
    for (let node of nodes){
        if (node.type === 'section' && node.hasChildNodes) {
            let filtered = $a9e7382a7d111cb5$var$filterNodes(collection, (0, getChildNodes/* getChildNodes */.iQ)(node, collection), inputValue, filter);
            if ([
                ...filtered
            ].some((node)=>node.type === 'item')) filteredNode.push({
                ...node,
                childNodes: filtered
            });
        } else if (node.type === 'item' && filter(node.textValue, inputValue)) filteredNode.push({
            ...node
        });
        else if (node.type !== 'item') filteredNode.push({
            ...node
        });
    }
    return filteredNode;
}
function $a9e7382a7d111cb5$var$getDefaultInputValue(defaultInputValue, selectedKey, collection) {
    if (defaultInputValue == null) {
        var _collection_getItem;
        var _collection_getItem_textValue;
        if (selectedKey != null) return (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : '';
    }
    return defaultInputValue;
}



//# sourceMappingURL=useComboBoxState.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var useResizeObserver = __webpack_require__(77366);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
;// ./node_modules/react-aria-components/dist/ComboBox.mjs

















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















const $d01f2c01039c0eec$export$d414ccceff7063c3 = /*#__PURE__*/ (0, react.createContext)(null);
const $d01f2c01039c0eec$export$c02625b26074192c = /*#__PURE__*/ (0, react.createContext)(null);
const $d01f2c01039c0eec$export$72b9695b8216309a = /*#__PURE__*/ (0, react.forwardRef)(function ComboBox(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $d01f2c01039c0eec$export$d414ccceff7063c3);
    let { children: children, isDisabled: isDisabled = false, isInvalid: isInvalid = false, isRequired: isRequired = false } = props;
    let content = (0, react.useMemo)(()=>{
        var _props_items;
        return /*#__PURE__*/ (0, react).createElement((0, ListBox/* ListBoxContext */.JC).Provider, {
            value: {
                items: (_props_items = props.items) !== null && _props_items !== void 0 ? _props_items : props.defaultItems
            }
        }, typeof children === 'function' ? children({
            isOpen: false,
            isDisabled: isDisabled,
            isInvalid: isInvalid,
            isRequired: isRequired,
            defaultChildren: null
        }) : children);
    }, [
        children,
        isDisabled,
        isInvalid,
        isRequired,
        props.items,
        props.defaultItems
    ]);
    return /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: content
    }, (collection)=>/*#__PURE__*/ (0, react).createElement($d01f2c01039c0eec$var$ComboBoxInner, {
            props: props,
            collection: collection,
            comboBoxRef: ref
        }));
});
// Contexts to clear inside the popover.
const $d01f2c01039c0eec$var$CLEAR_CONTEXTS = [
    (0, Label/* LabelContext */.I),
    (0, Button/* ButtonContext */.k),
    (0, Input/* InputContext */.E),
    (0, Group/* GroupContext */.t),
    (0, Text/* TextContext */.h)
];
function $d01f2c01039c0eec$var$ComboBoxInner({ props: props, collection: collection, comboBoxRef: ref }) {
    let { name: name, formValue: formValue = 'key', allowsCustomValue: allowsCustomValue } = props;
    if (allowsCustomValue) formValue = 'text';
    let { validationBehavior: formValidationBehavior } = (0, utils/* useSlottedContext */.CC)((0, Form/* FormContext */.c)) || {};
    var _props_validationBehavior, _ref;
    let validationBehavior = (_ref = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : formValidationBehavior) !== null && _ref !== void 0 ? _ref : 'native';
    let { contains: contains } = (0, useFilter/* useFilter */.U)({
        sensitivity: 'base'
    });
    let state = (0, $a9e7382a7d111cb5$export$b453a3bfd4a5fa9e)({
        defaultFilter: props.defaultFilter || contains,
        ...props,
        // If props.items isn't provided, rely on collection filtering (aka listbox.items is provided or defaultItems provided to Combobox)
        items: props.items,
        children: undefined,
        collection: collection,
        validationBehavior: validationBehavior
    });
    let buttonRef = (0, react.useRef)(null);
    let inputRef = (0, react.useRef)(null);
    let listBoxRef = (0, react.useRef)(null);
    let popoverRef = (0, react.useRef)(null);
    let [labelRef, label] = (0, utils/* useSlot */._E)(!props['aria-label'] && !props['aria-labelledby']);
    let { buttonProps: buttonProps, inputProps: inputProps, listBoxProps: listBoxProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, $c350ade66beef0af$export$8c18d1b4f7232bbf)({
        ...(0, utils/* removeDataAttributes */.SK)(props),
        label: label,
        inputRef: inputRef,
        buttonRef: buttonRef,
        listBoxRef: listBoxRef,
        popoverRef: popoverRef,
        name: formValue === 'text' ? name : undefined,
        validationBehavior: validationBehavior
    }, state);
    // Make menu width match input + button
    let [menuWidth, setMenuWidth] = (0, react.useState)(null);
    let onResize = (0, react.useCallback)(()=>{
        if (inputRef.current) {
            var _buttonRef_current;
            let buttonRect = (_buttonRef_current = buttonRef.current) === null || _buttonRef_current === void 0 ? void 0 : _buttonRef_current.getBoundingClientRect();
            let inputRect = inputRef.current.getBoundingClientRect();
            let minX = buttonRect ? Math.min(buttonRect.left, inputRect.left) : inputRect.left;
            let maxX = buttonRect ? Math.max(buttonRect.right, inputRect.right) : inputRect.right;
            setMenuWidth(maxX - minX + 'px');
        }
    }, [
        buttonRef,
        inputRef,
        setMenuWidth
    ]);
    (0, useResizeObserver/* useResizeObserver */.w)({
        ref: inputRef,
        onResize: onResize
    });
    // Only expose a subset of state to renderProps function to avoid infinite render loop
    let renderPropsState = (0, react.useMemo)(()=>({
            isOpen: state.isOpen,
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid || false,
            isRequired: props.isRequired || false
        }), [
        state.isOpen,
        props.isDisabled,
        validation.isInvalid,
        props.isRequired
    ]);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        values: renderPropsState,
        defaultClassName: 'react-aria-ComboBox'
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.id;
    var _state_selectedKey;
    return /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $d01f2c01039c0eec$export$c02625b26074192c,
                state
            ],
            [
                (0, Label/* LabelContext */.I),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ],
            [
                (0, Button/* ButtonContext */.k),
                {
                    ...buttonProps,
                    ref: buttonRef,
                    isPressed: state.isOpen
                }
            ],
            [
                (0, Input/* InputContext */.E),
                {
                    ...inputProps,
                    ref: inputRef
                }
            ],
            [
                (0, Dialog/* OverlayTriggerStateContext */.RG),
                state
            ],
            [
                (0, Popover/* PopoverContext */.n),
                {
                    ref: popoverRef,
                    triggerRef: inputRef,
                    scrollRef: listBoxRef,
                    placement: 'bottom start',
                    isNonModal: true,
                    trigger: 'ComboBox',
                    style: {
                        '--trigger-width': menuWidth
                    },
                    clearContexts: $d01f2c01039c0eec$var$CLEAR_CONTEXTS
                }
            ],
            [
                (0, ListBox/* ListBoxContext */.JC),
                {
                    ...listBoxProps,
                    ref: listBoxRef
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
                (0, Group/* GroupContext */.t),
                {
                    isInvalid: validation.isInvalid,
                    isDisabled: props.isDisabled || false
                }
            ],
            [
                (0, FieldError/* FieldErrorContext */.C),
                validation
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement("div", {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": state.isFocused || undefined,
        "data-open": state.isOpen || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": validation.isInvalid || undefined,
        "data-required": props.isRequired || undefined
    }), name && formValue === 'key' && /*#__PURE__*/ (0, react).createElement("input", {
        type: "hidden",
        name: name,
        form: props.form,
        value: (_state_selectedKey = state.selectedKey) !== null && _state_selectedKey !== void 0 ? _state_selectedKey : ''
    }));
}



//# sourceMappingURL=ComboBox.module.js.map


/***/ }),

/***/ 22644:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ $4f58c5f72bcf79f7$export$496315a1608d9602)
/* harmony export */ });
/* harmony import */ var _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7049);
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

function $4f58c5f72bcf79f7$export$496315a1608d9602(cb, dependencies) {
    const isInitialMount = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    const lastDeps = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    let cbEvent = (0, _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useEffectEvent */ .J)(cb);
    (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let prevDeps = lastDeps.current;
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!prevDeps || dependencies.some((dep, i)=>!Object.is(dep, prevDeps[i]))) cbEvent();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}



//# sourceMappingURL=useUpdateEffect.module.js.map


/***/ }),

/***/ 34076:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ $cdc5a6778b766db2$export$a9d04c5684123369)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



function $cdc5a6778b766db2$export$a9d04c5684123369(value) {
    const pieces = (0, react__WEBPACK_IMPORTED_MODULE_0__.version).split('.');
    const major = parseInt(pieces[0], 10);
    if (major >= 19) return value;
    // compatibility with React < 19
    return value ? 'true' : undefined;
}



//# sourceMappingURL=inertValue.module.js.map


/***/ }),

/***/ 44300:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ $ee014567cb39d3f0$export$ff05c3ac10437e03),
/* harmony export */   b: () => (/* binding */ $ee014567cb39d3f0$export$f551688fc98f2e09)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5933);
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27279);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);





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



const $ee014567cb39d3f0$export$ff05c3ac10437e03 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__.createContext)(null);
const $ee014567cb39d3f0$export$f551688fc98f2e09 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function FieldError(props, ref) {
    let validation = (0, react__WEBPACK_IMPORTED_MODULE_3__.useContext)($ee014567cb39d3f0$export$ff05c3ac10437e03);
    if (!(validation === null || validation === void 0 ? void 0 : validation.isInvalid)) return null;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__).createElement($ee014567cb39d3f0$var$FieldErrorInner, {
        ...props,
        ref: ref
    });
});
const $ee014567cb39d3f0$var$FieldErrorInner = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)((props, ref)=>{
    let validation = (0, react__WEBPACK_IMPORTED_MODULE_3__.useContext)($ee014567cb39d3f0$export$ff05c3ac10437e03);
    let domProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .filterDOMProps */ .$)(props, {
        global: true
    });
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useRenderProps */ .Sl)({
        ...props,
        defaultClassName: 'react-aria-FieldError',
        defaultChildren: validation.validationErrors.length === 0 ? undefined : validation.validationErrors.join(' '),
        values: validation
    });
    if (renderProps.children == null) return null;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__).createElement((0, _Text_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .E), {
        slot: "errorMessage",
        ...domProps,
        ...renderProps,
        ref: ref
    });
});



//# sourceMappingURL=FieldError.module.js.map


/***/ }),

/***/ 63899:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ $a049562f99e7db0e$export$eb2fcfdbd7ba97d4),
/* harmony export */   t: () => (/* binding */ $a049562f99e7db0e$export$f9c6924e160136d1)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5933);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96540);




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


const $a049562f99e7db0e$export$f9c6924e160136d1 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_4__.createContext)({});
const $a049562f99e7db0e$export$eb2fcfdbd7ba97d4 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function Group(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $a049562f99e7db0e$export$f9c6924e160136d1);
    let { isDisabled: isDisabled, isInvalid: isInvalid, isReadOnly: isReadOnly, onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    isDisabled !== null && isDisabled !== void 0 ? isDisabled : isDisabled = !!props['aria-disabled'] && props['aria-disabled'] !== 'false';
    isInvalid !== null && isInvalid !== void 0 ? isInvalid : isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_2__/* .useHover */ .M)({
        onHoverStart: onHoverStart,
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd,
        isDisabled: isDisabled
    });
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria__WEBPACK_IMPORTED_MODULE_1__/* .useFocusRing */ .o)({
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
    var _props_role, _props_slot;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_4__).createElement("div", {
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .mergeProps */ .v)(otherProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        role: (_props_role = props.role) !== null && _props_role !== void 0 ? _props_role : 'group',
        slot: (_props_slot = props.slot) !== null && _props_slot !== void 0 ? _props_slot : undefined,
        "data-focus-within": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-invalid": isInvalid || undefined,
        "data-readonly": isReadOnly || undefined
    }, renderProps.children);
});



//# sourceMappingURL=Group.module.js.map


/***/ }),

/***/ 79124:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U5: () => (/* binding */ $612b8eb6cb90e02d$export$f55761759794cf55),
/* harmony export */   Ux: () => (/* binding */ $612b8eb6cb90e02d$export$d188a835a7bc5783),
/* harmony export */   XW: () => (/* binding */ $612b8eb6cb90e02d$export$d1e8e3fbb7461f6),
/* harmony export */   oC: () => (/* binding */ $612b8eb6cb90e02d$export$971707d8a129a1f7)
/* harmony export */ });
/* unused harmony export DropIndicator */
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
const $612b8eb6cb90e02d$export$d188a835a7bc5783 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $612b8eb6cb90e02d$export$f55761759794cf55 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $612b8eb6cb90e02d$export$62ed72bc21f6b8a6 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function DropIndicator(props, ref) {
    let { render: render } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($612b8eb6cb90e02d$export$f55761759794cf55);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, react__WEBPACK_IMPORTED_MODULE_0__).Fragment, null, render(props, ref));
});
function $612b8eb6cb90e02d$export$971707d8a129a1f7(dragAndDropHooks, dropState) {
    var _dragAndDropHooks_isVirtualDragging;
    let renderDropIndicator = dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.renderDropIndicator;
    let isVirtualDragging = dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : (_dragAndDropHooks_isVirtualDragging = dragAndDropHooks.isVirtualDragging) === null || _dragAndDropHooks_isVirtualDragging === void 0 ? void 0 : _dragAndDropHooks_isVirtualDragging.call(dragAndDropHooks);
    let fn = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((target)=>{
        // Only show drop indicators when virtual dragging or this is the current drop target.
        if (isVirtualDragging || (dropState === null || dropState === void 0 ? void 0 : dropState.isDropTarget(target))) return renderDropIndicator ? renderDropIndicator(target) : /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($612b8eb6cb90e02d$export$62ed72bc21f6b8a6, {
            target: target
        });
    // We invalidate whenever the target changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        dropState === null || dropState === void 0 ? void 0 : dropState.target,
        isVirtualDragging,
        renderDropIndicator
    ]);
    return (dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : dragAndDropHooks.useDropIndicator) ? fn : undefined;
}
function $612b8eb6cb90e02d$export$d1e8e3fbb7461f6(selectionManager, dragAndDropHooks, dropState) {
    var _dragAndDropHooks_isVirtualDragging, _dropState_target;
    // Persist the focused key and the drop target key.
    let focusedKey = selectionManager.focusedKey;
    let dropTargetKey = null;
    if ((dragAndDropHooks === null || dragAndDropHooks === void 0 ? void 0 : (_dragAndDropHooks_isVirtualDragging = dragAndDropHooks.isVirtualDragging) === null || _dragAndDropHooks_isVirtualDragging === void 0 ? void 0 : _dragAndDropHooks_isVirtualDragging.call(dragAndDropHooks)) && (dropState === null || dropState === void 0 ? void 0 : (_dropState_target = dropState.target) === null || _dropState_target === void 0 ? void 0 : _dropState_target.type) === 'item') {
        dropTargetKey = dropState.target.key;
        if (dropState.target.dropPosition === 'after') {
            // Normalize to the "before" drop position since we only render those to the DOM.
            let nextKey = dropState.collection.getKeyAfter(dropTargetKey);
            let lastDescendantKey = null;
            if (nextKey != null) {
                var _dropState_collection_getItem;
                var _dropState_collection_getItem_level;
                let targetLevel = (_dropState_collection_getItem_level = (_dropState_collection_getItem = dropState.collection.getItem(dropTargetKey)) === null || _dropState_collection_getItem === void 0 ? void 0 : _dropState_collection_getItem.level) !== null && _dropState_collection_getItem_level !== void 0 ? _dropState_collection_getItem_level : 0;
                // Skip over any rows that are descendants of the target ("after" position should be after all children)
                while(nextKey){
                    let node = dropState.collection.getItem(nextKey);
                    // eslint-disable-next-line max-depth
                    if (!node) break;
                    // Skip over non-item nodes (e.g., loaders) since they can't be drop targets.
                    // eslint-disable-next-line max-depth
                    if (node.type !== 'item') {
                        nextKey = dropState.collection.getKeyAfter(nextKey);
                        continue;
                    }
                    var _node_level;
                    // Stop once we find an item at the same level or higher
                    // eslint-disable-next-line max-depth
                    if (((_node_level = node.level) !== null && _node_level !== void 0 ? _node_level : 0) <= targetLevel) break;
                    lastDescendantKey = nextKey;
                    nextKey = dropState.collection.getKeyAfter(nextKey);
                }
            }
            var _ref;
            // If nextKey is null (end of collection), use the last descendant
            dropTargetKey = (_ref = nextKey !== null && nextKey !== void 0 ? nextKey : lastDescendantKey) !== null && _ref !== void 0 ? _ref : dropTargetKey;
        }
    }
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return new Set([
            focusedKey,
            dropTargetKey
        ].filter((k)=>k != null));
    }, [
        focusedKey,
        dropTargetKey
    ]);
}



//# sourceMappingURL=DragAndDrop.module.js.map


/***/ }),

/***/ 79950:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $3985021b0ad6602f$export$37fb8590cf2c088c),
/* harmony export */   p: () => (/* binding */ $3985021b0ad6602f$export$f5b8910cec6cf069)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5933);
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75127);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96540);





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



const $3985021b0ad6602f$export$37fb8590cf2c088c = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_5__.createContext)({});
let $3985021b0ad6602f$var$filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $3985021b0ad6602f$export$f5b8910cec6cf069 = /*#__PURE__*/ (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__/* .createHideableComponent */ .U7)(function Input(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $3985021b0ad6602f$export$37fb8590cf2c088c);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .useHover */ .M)({
        ...props,
        isDisabled: props.disabled
    });
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria__WEBPACK_IMPORTED_MODULE_2__/* .useFocusRing */ .o)({
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
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_5__).createElement("input", {
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_4__/* .mergeProps */ .v)($3985021b0ad6602f$var$filterHoverProps(props), focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
});



//# sourceMappingURL=Input.module.js.map


/***/ }),

/***/ 84819:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ $a5fa973c1850dd36$export$ccaea96c28e8b9e7)
/* harmony export */ });
/* harmony import */ var _getScrollParent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24514);
/* harmony import */ var _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7049);
/* harmony import */ var _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);





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



function $a5fa973c1850dd36$export$ccaea96c28e8b9e7(props, ref) {
    let { collection: collection, onLoadMore: onLoadMore, scrollOffset: scrollOffset = 1 } = props;
    let sentinelObserver = (0, react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    let triggerLoadMore = (0, _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .J)((entries)=>{
        // Use "isIntersecting" over an equality check of 0 since it seems like there is cases where
        // a intersection ratio of 0 can be reported when isIntersecting is actually true
        for (let entry of entries)// Note that this will be called if the collection changes, even if onLoadMore was already called and is being processed.
        // Up to user discretion as to how to handle these multiple onLoadMore calls
        if (entry.isIntersecting && onLoadMore) onLoadMore();
    });
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useLayoutEffect */ .N)(()=>{
        if (ref.current) {
            // Tear down and set up a new IntersectionObserver when the collection changes so that we can properly trigger additional loadMores if there is room for more items
            // Need to do this tear down and set up since using a large rootMargin will mean the observer's callback isn't called even when scrolling the item into view beause its visibility hasn't actually changed
            // https://codesandbox.io/p/sandbox/magical-swanson-dhgp89?file=%2Fsrc%2FApp.js%3A21%2C21
            sentinelObserver.current = new IntersectionObserver(triggerLoadMore, {
                root: (0, _getScrollParent_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getScrollParent */ .m)(ref === null || ref === void 0 ? void 0 : ref.current),
                rootMargin: `0px ${100 * scrollOffset}% ${100 * scrollOffset}% ${100 * scrollOffset}%`
            });
            sentinelObserver.current.observe(ref.current);
        }
        return ()=>{
            if (sentinelObserver.current) sentinelObserver.current.disconnect();
        };
    }, [
        collection,
        ref,
        scrollOffset
    ]);
}



//# sourceMappingURL=useLoadMoreSentinel.module.js.map


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

/***/ 91705:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w: () => (/* binding */ $f86e6c1ec7da6ebb$export$bc3384a35de93d66)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@react-stately/data/dist/useListData.mjs


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
function $0d86e9c8f07f9a7b$export$762f73dccccd255d(options) {
    let { initialItems: initialItems = [], initialSelectedKeys: initialSelectedKeys, getKey: getKey = (item)=>{
        var _item_id;
        return (_item_id = item.id) !== null && _item_id !== void 0 ? _item_id : item.key;
    }, filter: filter, initialFilterText: initialFilterText = '' } = options;
    // Store both items and filteredItems in state so we can go back to the unfiltered list
    let [state, setState] = (0, $bc4N1$useState)({
        items: initialItems,
        selectedKeys: initialSelectedKeys === 'all' ? 'all' : new Set(initialSelectedKeys || []),
        filterText: initialFilterText
    });
    let filteredItems = (0, $bc4N1$useMemo)(()=>filter ? state.items.filter((item)=>filter(item, state.filterText)) : state.items, [
        state.items,
        state.filterText,
        filter
    ]);
    return {
        ...state,
        items: filteredItems,
        ...$0d86e9c8f07f9a7b$export$79c0c687a5963b0a({
            getKey: getKey
        }, setState),
        getItem (key) {
            return state.items.find((item)=>getKey(item) === key);
        }
    };
}
function $0d86e9c8f07f9a7b$export$79c0c687a5963b0a(opts, dispatch) {
    let { cursor: cursor, getKey: getKey } = opts;
    return {
        setSelectedKeys (selectedKeys) {
            dispatch((state)=>({
                    ...state,
                    selectedKeys: selectedKeys
                }));
        },
        addKeysToSelection (selectedKeys) {
            dispatch((state)=>{
                if (state.selectedKeys === 'all') return state;
                if (selectedKeys === 'all') return {
                    ...state,
                    selectedKeys: 'all'
                };
                return {
                    ...state,
                    selectedKeys: new Set([
                        ...state.selectedKeys,
                        ...selectedKeys
                    ])
                };
            });
        },
        removeKeysFromSelection (selectedKeys) {
            dispatch((state)=>{
                if (selectedKeys === 'all') return {
                    ...state,
                    selectedKeys: new Set()
                };
                let selection = state.selectedKeys === 'all' ? new Set(state.items.map(getKey)) : new Set(state.selectedKeys);
                for (let key of selectedKeys)selection.delete(key);
                return {
                    ...state,
                    selectedKeys: selection
                };
            });
        },
        setFilterText (filterText) {
            dispatch((state)=>({
                    ...state,
                    filterText: filterText
                }));
        },
        insert (index, ...values) {
            dispatch((state)=>$0d86e9c8f07f9a7b$var$insert(state, index, ...values));
        },
        insertBefore (key, ...values) {
            dispatch((state)=>{
                let index = state.items.findIndex((item)=>(getKey === null || getKey === void 0 ? void 0 : getKey(item)) === key);
                if (index === -1) {
                    if (state.items.length === 0) index = 0;
                    else return state;
                }
                return $0d86e9c8f07f9a7b$var$insert(state, index, ...values);
            });
        },
        insertAfter (key, ...values) {
            dispatch((state)=>{
                let index = state.items.findIndex((item)=>(getKey === null || getKey === void 0 ? void 0 : getKey(item)) === key);
                if (index === -1) {
                    if (state.items.length === 0) index = 0;
                    else return state;
                }
                return $0d86e9c8f07f9a7b$var$insert(state, index + 1, ...values);
            });
        },
        prepend (...values) {
            dispatch((state)=>$0d86e9c8f07f9a7b$var$insert(state, 0, ...values));
        },
        append (...values) {
            dispatch((state)=>$0d86e9c8f07f9a7b$var$insert(state, state.items.length, ...values));
        },
        remove (...keys) {
            dispatch((state)=>{
                let keySet = new Set(keys);
                let items = state.items.filter((item)=>!keySet.has(getKey(item)));
                let selection = 'all';
                if (state.selectedKeys !== 'all') {
                    selection = new Set(state.selectedKeys);
                    for (let key of keys)selection.delete(key);
                }
                if (cursor == null && items.length === 0) selection = new Set();
                return {
                    ...state,
                    items: items,
                    selectedKeys: selection
                };
            });
        },
        removeSelectedItems () {
            dispatch((state)=>{
                if (state.selectedKeys === 'all') return {
                    ...state,
                    items: [],
                    selectedKeys: new Set()
                };
                let selectedKeys = state.selectedKeys;
                let items = state.items.filter((item)=>!selectedKeys.has(getKey(item)));
                return {
                    ...state,
                    items: items,
                    selectedKeys: new Set()
                };
            });
        },
        move (key, toIndex) {
            dispatch((state)=>{
                let index = state.items.findIndex((item)=>getKey(item) === key);
                if (index === -1) return state;
                let copy = state.items.slice();
                let [item] = copy.splice(index, 1);
                copy.splice(toIndex, 0, item);
                return {
                    ...state,
                    items: copy
                };
            });
        },
        moveBefore (key, keys) {
            dispatch((state)=>{
                let toIndex = state.items.findIndex((item)=>getKey(item) === key);
                if (toIndex === -1) return state;
                // Find indices of keys to move. Sort them so that the order in the list is retained.
                let keyArray = Array.isArray(keys) ? keys : [
                    ...keys
                ];
                let indices = keyArray.map((key)=>state.items.findIndex((item)=>getKey(item) === key)).sort((a, b)=>a - b);
                return $0d86e9c8f07f9a7b$var$move(state, indices, toIndex);
            });
        },
        moveAfter (key, keys) {
            dispatch((state)=>{
                let toIndex = state.items.findIndex((item)=>getKey(item) === key);
                if (toIndex === -1) return state;
                let keyArray = Array.isArray(keys) ? keys : [
                    ...keys
                ];
                let indices = keyArray.map((key)=>state.items.findIndex((item)=>getKey(item) === key)).sort((a, b)=>a - b);
                return $0d86e9c8f07f9a7b$var$move(state, indices, toIndex + 1);
            });
        },
        update (key, newValue) {
            dispatch((state)=>{
                let index = state.items.findIndex((item)=>getKey(item) === key);
                if (index === -1) return state;
                let updatedValue;
                if (typeof newValue === 'function') updatedValue = newValue(state.items[index]);
                else updatedValue = newValue;
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, index),
                        updatedValue,
                        ...state.items.slice(index + 1)
                    ]
                };
            });
        }
    };
}
function $0d86e9c8f07f9a7b$var$insert(state, index, ...values) {
    return {
        ...state,
        items: [
            ...state.items.slice(0, index),
            ...values,
            ...state.items.slice(index)
        ]
    };
}
function $0d86e9c8f07f9a7b$var$move(state, indices, toIndex) {
    // Shift the target down by the number of items being moved from before the target
    toIndex -= indices.filter((index)=>index < toIndex).length;
    let moves = indices.map((from)=>({
            from: from,
            to: toIndex++
        }));
    // Shift later from indices down if they have a larger index
    for(let i = 0; i < moves.length; i++){
        let a = moves[i].from;
        for(let j = i; j < moves.length; j++){
            let b = moves[j].from;
            if (b > a) moves[j].from--;
        }
    }
    // Interleave the moves so they can be applied one by one rather than all at once
    for(let i = 0; i < moves.length; i++){
        let a = moves[i];
        for(let j = moves.length - 1; j > i; j--){
            let b = moves[j];
            if (b.from < a.to) a.to++;
            else b.from++;
        }
    }
    let copy = state.items.slice();
    for (let move of moves){
        let [item] = copy.splice(move.from, 1);
        copy.splice(move.to, 0, item);
    }
    return {
        ...state,
        items: copy
    };
}



//# sourceMappingURL=useListData.module.js.map

;// ./node_modules/@react-stately/data/dist/useAsyncList.mjs



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

function $f86e6c1ec7da6ebb$var$reducer(data, action) {
    let selectedKeys;
    switch(data.state){
        case 'idle':
        case 'error':
            switch(action.type){
                case 'loading':
                case 'loadingMore':
                case 'sorting':
                case 'filtering':
                    var _action_filterText, _action_sortDescriptor;
                    return {
                        ...data,
                        filterText: (_action_filterText = action.filterText) !== null && _action_filterText !== void 0 ? _action_filterText : data.filterText,
                        state: action.type,
                        // Reset items to an empty list if loading, but not when sorting.
                        items: action.type === 'loading' ? [] : data.items,
                        sortDescriptor: (_action_sortDescriptor = action.sortDescriptor) !== null && _action_sortDescriptor !== void 0 ? _action_sortDescriptor : data.sortDescriptor,
                        abortController: action.abortController
                    };
                case 'update':
                    var _action_updater;
                    return {
                        ...data,
                        ...(_action_updater = action.updater) === null || _action_updater === void 0 ? void 0 : _action_updater.call(action, data)
                    };
                case 'success':
                case 'error':
                    return data;
                default:
                    throw new Error(`Invalid action "${action.type}" in state "${data.state}"`);
            }
        case 'loading':
        case 'sorting':
        case 'filtering':
            switch(action.type){
                case 'success':
                    // Ignore if there is a newer abortcontroller in state.
                    // This means that multiple requests were going at once.
                    // We want to take only the latest result.
                    if (action.abortController !== data.abortController) return data;
                    var _action_selectedKeys;
                    selectedKeys = (_action_selectedKeys = action.selectedKeys) !== null && _action_selectedKeys !== void 0 ? _action_selectedKeys : data.selectedKeys;
                    var _action_filterText1, _action_items, _action_sortDescriptor1;
                    return {
                        ...data,
                        filterText: (_action_filterText1 = action.filterText) !== null && _action_filterText1 !== void 0 ? _action_filterText1 : data.filterText,
                        state: 'idle',
                        items: [
                            ...(_action_items = action.items) !== null && _action_items !== void 0 ? _action_items : []
                        ],
                        selectedKeys: selectedKeys === 'all' ? 'all' : new Set(selectedKeys),
                        sortDescriptor: (_action_sortDescriptor1 = action.sortDescriptor) !== null && _action_sortDescriptor1 !== void 0 ? _action_sortDescriptor1 : data.sortDescriptor,
                        abortController: undefined,
                        cursor: action.cursor
                    };
                case 'error':
                    if (action.abortController !== data.abortController) return data;
                    return {
                        ...data,
                        state: 'error',
                        error: action.error,
                        abortController: undefined
                    };
                case 'loading':
                case 'loadingMore':
                case 'sorting':
                case 'filtering':
                    var // We're already loading, and another load was triggered at the same time.
                    // We need to abort the previous load and start a new one.
                    _data_abortController;
                    (_data_abortController = data.abortController) === null || _data_abortController === void 0 ? void 0 : _data_abortController.abort('aborting current load and starting new one');
                    var _action_filterText2;
                    return {
                        ...data,
                        filterText: (_action_filterText2 = action.filterText) !== null && _action_filterText2 !== void 0 ? _action_filterText2 : data.filterText,
                        state: action.type,
                        // Reset items to an empty list if loading, but not when sorting.
                        items: action.type === 'loading' ? [] : data.items,
                        abortController: action.abortController
                    };
                case 'update':
                    var _action_updater1;
                    // We're already loading, and an update happened at the same time (e.g. selectedKey changed).
                    // Update data but don't abort previous load.
                    return {
                        ...data,
                        ...(_action_updater1 = action.updater) === null || _action_updater1 === void 0 ? void 0 : _action_updater1.call(action, data)
                    };
                default:
                    throw new Error(`Invalid action "${action.type}" in state "${data.state}"`);
            }
        case 'loadingMore':
            switch(action.type){
                case 'success':
                    var _action_selectedKeys1;
                    selectedKeys = data.selectedKeys === 'all' || action.selectedKeys === 'all' ? 'all' : new Set([
                        ...data.selectedKeys,
                        ...(_action_selectedKeys1 = action.selectedKeys) !== null && _action_selectedKeys1 !== void 0 ? _action_selectedKeys1 : []
                    ]);
                    var _action_items1, _action_sortDescriptor2;
                    // Append the new items
                    return {
                        ...data,
                        state: 'idle',
                        items: [
                            ...data.items,
                            ...(_action_items1 = action.items) !== null && _action_items1 !== void 0 ? _action_items1 : []
                        ],
                        selectedKeys: selectedKeys,
                        sortDescriptor: (_action_sortDescriptor2 = action.sortDescriptor) !== null && _action_sortDescriptor2 !== void 0 ? _action_sortDescriptor2 : data.sortDescriptor,
                        abortController: undefined,
                        cursor: action.cursor
                    };
                case 'error':
                    if (action.abortController !== data.abortController) return data;
                    return {
                        ...data,
                        state: 'error',
                        error: action.error
                    };
                case 'loading':
                case 'sorting':
                case 'filtering':
                    var // We're already loading more, and another load was triggered at the same time.
                    // We need to abort the previous load more and start a new one.
                    _data_abortController1;
                    (_data_abortController1 = data.abortController) === null || _data_abortController1 === void 0 ? void 0 : _data_abortController1.abort();
                    var _action_filterText3;
                    return {
                        ...data,
                        filterText: (_action_filterText3 = action.filterText) !== null && _action_filterText3 !== void 0 ? _action_filterText3 : data.filterText,
                        state: action.type,
                        // Reset items to an empty list if loading, but not when sorting.
                        items: action.type === 'loading' ? [] : data.items,
                        abortController: action.abortController
                    };
                case 'loadingMore':
                    var // If already loading more and another loading more is triggered, abort the new load more since
                    // it is a duplicate request since the cursor hasn't been updated.
                    // Do not overwrite the data.abortController
                    _action_abortController;
                    (_action_abortController = action.abortController) === null || _action_abortController === void 0 ? void 0 : _action_abortController.abort();
                    return data;
                case 'update':
                    var _action_updater2;
                    // We're already loading, and an update happened at the same time (e.g. selectedKey changed).
                    // Update data but don't abort previous load.
                    return {
                        ...data,
                        ...(_action_updater2 = action.updater) === null || _action_updater2 === void 0 ? void 0 : _action_updater2.call(action, data)
                    };
                default:
                    throw new Error(`Invalid action "${action.type}" in state "${data.state}"`);
            }
        default:
            throw new Error(`Invalid state "${data.state}"`);
    }
}
function $f86e6c1ec7da6ebb$export$bc3384a35de93d66(options) {
    const { load: load, sort: sort, initialSelectedKeys: initialSelectedKeys, initialSortDescriptor: initialSortDescriptor, getKey: getKey = (item)=>item.id || item.key, initialFilterText: initialFilterText = '' } = options;
    let [data, dispatch] = (0, react.useReducer)($f86e6c1ec7da6ebb$var$reducer, {
        state: 'idle',
        error: undefined,
        items: [],
        selectedKeys: initialSelectedKeys === 'all' ? 'all' : new Set(initialSelectedKeys),
        sortDescriptor: initialSortDescriptor,
        filterText: initialFilterText
    });
    const dispatchFetch = async (action, fn)=>{
        let abortController = new AbortController();
        try {
            dispatch({
                ...action,
                abortController: abortController
            });
            var _action_filterText;
            let previousFilterText = (_action_filterText = action.filterText) !== null && _action_filterText !== void 0 ? _action_filterText : data.filterText;
            var _action_sortDescriptor;
            let response = await fn({
                items: data.items.slice(),
                selectedKeys: data.selectedKeys,
                sortDescriptor: (_action_sortDescriptor = action.sortDescriptor) !== null && _action_sortDescriptor !== void 0 ? _action_sortDescriptor : data.sortDescriptor,
                signal: abortController.signal,
                cursor: action.type === 'loadingMore' ? data.cursor : undefined,
                filterText: previousFilterText,
                loadingState: data.state
            });
            var _response_filterText;
            let filterText = (_response_filterText = response.filterText) !== null && _response_filterText !== void 0 ? _response_filterText : previousFilterText;
            dispatch({
                type: 'success',
                ...response,
                abortController: abortController
            });
            // Fetch a new filtered list if filterText is updated via `load` response func rather than list.setFilterText
            // Only do this if not aborted (e.g. user triggers another filter action before load completes)
            if (filterText && filterText !== previousFilterText && !abortController.signal.aborted) dispatchFetch({
                type: 'filtering',
                filterText: filterText
            }, load);
        } catch (e) {
            dispatch({
                type: 'error',
                error: e,
                abortController: abortController
            });
        }
    };
    let didDispatchInitialFetch = (0, react.useRef)(false);
    (0, react.useEffect)(()=>{
        if (!didDispatchInitialFetch.current) {
            dispatchFetch({
                type: 'loading'
            }, load);
            didDispatchInitialFetch.current = true;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        items: data.items,
        selectedKeys: data.selectedKeys,
        sortDescriptor: data.sortDescriptor,
        isLoading: data.state === 'loading' || data.state === 'loadingMore' || data.state === 'sorting' || data.state === 'filtering',
        loadingState: data.state,
        error: data.error,
        filterText: data.filterText,
        getItem (key) {
            return data.items.find((item)=>getKey(item) === key);
        },
        reload () {
            dispatchFetch({
                type: 'loading'
            }, load);
        },
        loadMore () {
            // Ignore if already loading more or if performing server side filtering.
            if (data.state === 'loading' || data.state === 'loadingMore' || data.state === 'filtering' || data.cursor == null) return;
            dispatchFetch({
                type: 'loadingMore'
            }, load);
        },
        sort (sortDescriptor) {
            dispatchFetch({
                type: 'sorting',
                sortDescriptor: sortDescriptor
            }, sort || load);
        },
        ...(0, $0d86e9c8f07f9a7b$export$79c0c687a5963b0a)({
            ...options,
            getKey: getKey,
            cursor: data.cursor
        }, (fn)=>{
            dispatch({
                type: 'update',
                updater: fn
            });
        }),
        setFilterText (filterText) {
            dispatchFetch({
                type: 'filtering',
                filterText: filterText
            }, load);
        }
    };
}



//# sourceMappingURL=useAsyncList.module.js.map


/***/ })

}]);