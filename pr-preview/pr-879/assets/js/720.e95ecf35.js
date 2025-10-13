"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[720],{

/***/ 45999:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ $2bc3a590c5373a4e$export$5159ec8b34d4ec12)
/* harmony export */ });
/* harmony import */ var _react_stately_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71144);
/* harmony import */ var _react_stately_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46655);
/* harmony import */ var _react_stately_overlays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71732);
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8356);
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




function $2bc3a590c5373a4e$export$5159ec8b34d4ec12(props) {
    let { selectionMode: selectionMode = 'single' } = props;
    let triggerState = (0, _react_stately_overlays__WEBPACK_IMPORTED_MODULE_1__/* .useOverlayTriggerState */ .T)(props);
    let [focusStrategy, setFocusStrategy] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    let defaultValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        var _props_defaultSelectedKey;
        return props.defaultValue !== undefined ? props.defaultValue : selectionMode === 'single' ? (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : null : [];
    }, [
        props.defaultValue,
        props.defaultSelectedKey,
        selectionMode
    ]);
    let value = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return props.value !== undefined ? props.value : selectionMode === 'single' ? props.selectedKey : undefined;
    }, [
        props.value,
        props.selectedKey,
        selectionMode
    ]);
    let [controlledValue, setControlledValue] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_2__/* .useControlledState */ .P)(value, defaultValue, props.onChange);
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
    let listState = (0, _react_stately_list__WEBPACK_IMPORTED_MODULE_3__/* .useListState */ .p)({
        ...props,
        selectionMode: selectionMode,
        disallowEmptySelection: selectionMode === 'single',
        allowDuplicateSelectionEvents: true,
        selectedKeys: (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>$2bc3a590c5373a4e$var$convertValue(displayValue), [
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
    let selectedItems = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return [
            ...listState.selectionManager.selectedKeys
        ].map((key)=>listState.collection.getItem(key)).filter((item)=>item != null);
    }, [
        listState.selectionManager.selectedKeys,
        listState.collection
    ]);
    let validationState = (0, _react_stately_form__WEBPACK_IMPORTED_MODULE_4__/* .useFormValidationState */ .KZ)({
        ...props,
        value: Array.isArray(displayValue) && displayValue.length === 0 ? null : displayValue
    });
    let [isFocused, setFocused] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let [initialValue] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(displayValue);
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


/***/ }),

/***/ 48639:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ $c1d7fb2ec91bae71$export$6d08773d2e66f8f2)
/* harmony export */ });
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
function $c1d7fb2ec91bae71$var$Item(props) {
    return null;
}
$c1d7fb2ec91bae71$var$Item.getCollectionNode = function* getCollectionNode(props, context) {
    let { childItems: childItems, title: title, children: children } = props;
    let rendered = props.title || props.children;
    let textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || '';
    // suppressTextValueWarning is used in components like Tabs, which don't have type to select support.
    if (!textValue && !(context === null || context === void 0 ? void 0 : context.suppressTextValueWarning) && "production" !== 'production') // removed by dead control flow
{}
    yield {
        type: 'item',
        props: props,
        rendered: rendered,
        textValue: textValue,
        'aria-label': props['aria-label'],
        hasChildNodes: $c1d7fb2ec91bae71$var$hasChildItems(props),
        *childNodes () {
            if (childItems) for (let child of childItems)yield {
                type: 'item',
                value: child
            };
            else if (title) {
                let items = [];
                (0, react__WEBPACK_IMPORTED_MODULE_0__).Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
function $c1d7fb2ec91bae71$var$hasChildItems(props) {
    if (props.hasChildItems != null) return props.hasChildItems;
    if (props.childItems) return true;
    if (props.title && (0, react__WEBPACK_IMPORTED_MODULE_0__).Children.count(props.children) > 0) return true;
    return false;
}
// We don't want getCollectionNode to show up in the type definition
let $c1d7fb2ec91bae71$export$6d08773d2e66f8f2 = $c1d7fb2ec91bae71$var$Item;



//# sourceMappingURL=Item.module.js.map


/***/ }),

/***/ 55437:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ $58aed456727eb0f3$export$e64b2f635402ca43),
/* harmony export */   f: () => (/* binding */ $58aed456727eb0f3$export$703601b7e90536f8)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5987);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32217);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84137);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72166);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_aria_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96584);
/* harmony import */ var _react_aria_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18399);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95562);
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82627);
/* harmony import */ var _react_aria_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85441);
/* harmony import */ var _react_aria_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25263);








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
    let collator = (0, _react_aria_i18n__WEBPACK_IMPORTED_MODULE_1__/* .useCollator */ .Q)({
        usage: 'search',
        sensitivity: 'base'
    });
    let delegate = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>keyboardDelegate || new (0, _react_aria_selection__WEBPACK_IMPORTED_MODULE_2__/* .ListKeyboardDelegate */ .n)(state.collection, state.disabledKeys, ref, collator), [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        collator,
        ref
    ]);
    let { menuTriggerProps: menuTriggerProps, menuProps: menuProps } = (0, _react_aria_menu__WEBPACK_IMPORTED_MODULE_3__/* .useMenuTrigger */ .V)({
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
    let { typeSelectProps: typeSelectProps } = (0, _react_aria_selection__WEBPACK_IMPORTED_MODULE_4__/* .useTypeSelect */ .I)({
        keyboardDelegate: delegate,
        selectionManager: state.selectionManager,
        onTypeSelect (key) {
            state.setSelectedKey(key);
        }
    });
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, _react_aria_label__WEBPACK_IMPORTED_MODULE_5__/* .useField */ .M)({
        ...props,
        labelElementType: 'span',
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    typeSelectProps.onKeyDown = typeSelectProps.onKeyDownCapture;
    delete typeSelectProps.onKeyDownCapture;
    if (state.selectionManager.selectionMode === 'multiple') typeSelectProps = {};
    let domProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__/* .filterDOMProps */ .$)(props, {
        labelable: true
    });
    let triggerProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_7__/* .mergeProps */ .v)(typeSelectProps, menuTriggerProps, fieldProps);
    let valueId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__/* .useId */ .Bi)();
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
                    (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_9__/* .setInteractionModality */ .Cl)('keyboard');
                }
            }
        },
        triggerProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_7__/* .mergeProps */ .v)(domProps, {
            ...triggerProps,
            isDisabled: isDisabled,
            onKeyDown: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_10__/* .chain */ .c)(triggerProps.onKeyDown, onKeyDown, props.onKeyDown),
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


/***/ }),

/***/ 55996:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ $bdd25dc72710631f$export$cbd84cdb2e668835)
/* harmony export */ });
/* unused harmony export useHiddenSelect */
/* harmony import */ var _useSelect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8343);
/* harmony import */ var _react_aria_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48868);
/* harmony import */ var _react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87979);






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
    let data = (0, _useSelect_mjs__WEBPACK_IMPORTED_MODULE_1__/* .selectData */ .f).get(state) || {};
    let { autoComplete: autoComplete, name: name = data.name, form: form = data.form, isDisabled: isDisabled = data.isDisabled } = props;
    let { validationBehavior: validationBehavior, isRequired: isRequired } = data;
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, _react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_2__/* .useVisuallyHidden */ .B)({
        style: {
            // Prevent page scrolling.
            position: 'fixed',
            top: 0,
            left: 0
        }
    });
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .useFormReset */ .F)(props.selectRef, state.defaultValue, state.setValue);
    (0, _react_aria_form__WEBPACK_IMPORTED_MODULE_4__/* .useFormValidation */ .X)({
        validationBehavior: validationBehavior,
        focus: ()=>{
            var _triggerRef_current;
            return (_triggerRef_current = triggerRef.current) === null || _triggerRef_current === void 0 ? void 0 : _triggerRef_current.focus();
        }
    }, state, props.selectRef);
    let setValue = state.setValue;
    let onChange = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
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
    let selectRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    let inputRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    let { containerProps: containerProps, selectProps: selectProps } = $bdd25dc72710631f$export$f809e80f58e251d1({
        ...props,
        selectRef: state.collection.size <= 300 ? selectRef : inputRef
    }, state, triggerRef);
    // If used in a <form>, use a hidden input so the value can be submitted to a server.
    // If the collection isn't too big, use a hidden <select> element for this so that browser
    // autofill will work. Otherwise, use an <input type="hidden">.
    if (state.collection.size <= 300) return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("div", {
        ...containerProps,
        "data-testid": "hidden-select-container"
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("label", null, label, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("select", {
        ...selectProps,
        ref: selectRef
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("option", null), [
        ...state.collection.getKeys()
    ].map((key)=>{
        let item = state.collection.getItem(key);
        if (item && item.type === 'item') return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("option", {
            key: item.key,
            value: item.key
        }, item.textValue);
    }))));
    else if (name) {
        let data = (0, _useSelect_mjs__WEBPACK_IMPORTED_MODULE_1__/* .selectData */ .f).get(state) || {};
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
            return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("input", {
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
            return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("input", {
                key: i,
                ...inputProps,
                ref: i === 0 ? inputRef : null
            });
        });
        return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, react__WEBPACK_IMPORTED_MODULE_0__).Fragment, null, res);
    }
    return null;
}



//# sourceMappingURL=HiddenSelect.module.js.map


/***/ }),

/***/ 72487:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ $9fc4852771d079eb$export$6e2c8f0811a474ce)
/* harmony export */ });
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
function $9fc4852771d079eb$var$Section(props) {
    return null;
}
$9fc4852771d079eb$var$Section.getCollectionNode = function* getCollectionNode(props) {
    let { children: children, title: title, items: items } = props;
    yield {
        type: 'section',
        props: props,
        hasChildNodes: true,
        rendered: title,
        'aria-label': props['aria-label'],
        *childNodes () {
            if (typeof children === 'function') {
                if (!items) throw new Error('props.children was a function but props.items is missing');
                for (let item of items)yield {
                    type: 'item',
                    value: item,
                    renderer: children
                };
            } else {
                let items = [];
                (0, react__WEBPACK_IMPORTED_MODULE_0__).Children.forEach(children, (child)=>{
                    items.push({
                        type: 'item',
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
// We don't want getCollectionNode to show up in the type definition
let $9fc4852771d079eb$export$6e2c8f0811a474ce = $9fc4852771d079eb$var$Section;



//# sourceMappingURL=Section.module.js.map


/***/ })

}]);