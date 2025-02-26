"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[7686],{

/***/ 77686:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l6: () => (/* binding */ $82d7e5349645de74$export$ef9b1a59e592288f),
  yv: () => (/* binding */ $82d7e5349645de74$export$e288731fd71264f0)
});

// UNUSED EXPORTS: SelectContext, SelectStateContext, SelectValueContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs + 1 modules
var Button = __webpack_require__(44080);
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
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 40 modules
var Popover = __webpack_require__(20699);
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
    let { keyboardDelegate: keyboardDelegate, isDisabled: isDisabled, isRequired: isRequired, name: name, validationBehavior: validationBehavior = 'aria' } = props;
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
        collator
    ]);
    let { menuTriggerProps: menuTriggerProps, menuProps: menuProps } = (0, useMenuTrigger/* useMenuTrigger */.V)({
        isDisabled: isDisabled,
        type: 'listbox'
    }, state, ref);
    let onKeyDown = (e)=>{
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
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        labelable: true
    });
    let triggerProps = (0, mergeProps/* mergeProps */.v)(typeSelectProps, menuTriggerProps, fieldProps);
    let valueId = (0, useId/* useId */.Bi)();
    $58aed456727eb0f3$export$703601b7e90536f8.set(state, {
        isDisabled: isDisabled,
        isRequired: isRequired,
        name: name,
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
        validationDetails: validationDetails
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
    let { autoComplete: autoComplete, name: name = data.name, isDisabled: isDisabled = data.isDisabled } = props;
    let { validationBehavior: validationBehavior, isRequired: isRequired } = data;
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, VisuallyHidden/* useVisuallyHidden */.B)();
    (0, useFormReset/* useFormReset */.F)(props.selectRef, state.selectedKey, state.setSelectedKey);
    (0, useFormValidation/* useFormValidation */.X)({
        validationBehavior: validationBehavior,
        focus: ()=>{
            var _triggerRef_current;
            return (_triggerRef_current = triggerRef.current) === null || _triggerRef_current === void 0 ? void 0 : _triggerRef_current.focus();
        }
    }, state, props.selectRef);
    var _state_selectedKey;
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
            required: validationBehavior === 'native' && isRequired,
            name: name,
            value: (_state_selectedKey = state.selectedKey) !== null && _state_selectedKey !== void 0 ? _state_selectedKey : '',
            onChange: (e)=>state.setSelectedKey(e.target.value)
        }
    };
}
function $bdd25dc72710631f$export$cbd84cdb2e668835(props) {
    let { state: state, triggerRef: triggerRef, label: label, name: name, isDisabled: isDisabled } = props;
    let selectRef = (0, react.useRef)(null);
    let { containerProps: containerProps, selectProps: selectProps } = $bdd25dc72710631f$export$f809e80f58e251d1({
        ...props,
        selectRef: selectRef
    }, state, triggerRef);
    var _state_selectedKey;
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
    else if (name) return /*#__PURE__*/ (0, react).createElement("input", {
        type: "hidden",
        autoComplete: selectProps.autoComplete,
        name: name,
        disabled: isDisabled,
        value: (_state_selectedKey = state.selectedKey) !== null && _state_selectedKey !== void 0 ? _state_selectedKey : ''
    });
    return null;
}



//# sourceMappingURL=HiddenSelect.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(29571);
// EXTERNAL MODULE: ./node_modules/@react-stately/form/dist/useFormValidationState.mjs
var useFormValidationState = __webpack_require__(71144);
// EXTERNAL MODULE: ./node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs
var useOverlayTriggerState = __webpack_require__(71732);
// EXTERNAL MODULE: ./node_modules/@react-stately/list/dist/useSingleSelectListState.mjs
var useSingleSelectListState = __webpack_require__(319);
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
    let triggerState = (0, useOverlayTriggerState/* useOverlayTriggerState */.T)(props);
    let [focusStrategy, setFocusStrategy] = (0, react.useState)(null);
    let listState = (0, useSingleSelectListState/* useSingleSelectListState */.V)({
        ...props,
        onSelectionChange: (key)=>{
            if (props.onSelectionChange != null) props.onSelectionChange(key);
            triggerState.close();
            validationState.commitValidation();
        }
    });
    let validationState = (0, useFormValidationState/* useFormValidationState */.KZ)({
        ...props,
        value: listState.selectedKey
    });
    let [isFocused, setFocused] = (0, react.useState)(false);
    return {
        ...validationState,
        ...listState,
        ...triggerState,
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



//# sourceMappingURL=useSelectState.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
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
    let [labelRef, label] = (0, utils/* useSlot */._E)();
    let { labelProps: labelProps, triggerProps: triggerProps, valueProps: valueProps, menuProps: menuProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, $58aed456727eb0f3$export$e64b2f635402ca43)({
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
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props);
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
                    isPressed: state.isOpen
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
                    }
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
        ...DOMProps,
        ...renderProps,
        ...focusProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": state.isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-open": state.isOpen || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": validation.isInvalid || undefined,
        "data-required": props.isRequired || undefined
    }), /*#__PURE__*/ (0, react).createElement((0, $bdd25dc72710631f$export$cbd84cdb2e668835), {
        autoComplete: props.autoComplete,
        state: state,
        triggerRef: buttonRef,
        label: label,
        name: props.name,
        isDisabled: props.isDisabled
    }));
}
const $82d7e5349645de74$export$f8f745c04421623f = /*#__PURE__*/ (0, react.createContext)(null);
const $82d7e5349645de74$export$e288731fd71264f0 = /*#__PURE__*/ (0, react.forwardRef)(function SelectValue(props, ref) {
    var _state_selectedItem, _state_selectedItem1;
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $82d7e5349645de74$export$f8f745c04421623f);
    let state = (0, react.useContext)($82d7e5349645de74$export$ef445b55be0601bd);
    let { placeholder: placeholder } = (0, utils/* useSlottedContext */.CC)($82d7e5349645de74$export$7540cee5be7dc19b);
    let selectedItem = state.selectedKey != null ? state.collection.getItem(state.selectedKey) : null;
    let rendered = selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.props.children;
    if (typeof rendered === 'function') {
        // If the selected item has a function as a child, we need to call it to render to React.JSX.
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
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault(intlStrings/* default */.A))), 'react-aria-components');
    var _ref, _state_selectedItem_value, _state_selectedItem_textValue;
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultChildren: (_ref = rendered !== null && rendered !== void 0 ? rendered : placeholder) !== null && _ref !== void 0 ? _ref : stringFormatter.format('selectPlaceholder'),
        defaultClassName: 'react-aria-SelectValue',
        values: {
            selectedItem: (_state_selectedItem_value = (_state_selectedItem = state.selectedItem) === null || _state_selectedItem === void 0 ? void 0 : _state_selectedItem.value) !== null && _state_selectedItem_value !== void 0 ? _state_selectedItem_value : null,
            selectedText: (_state_selectedItem_textValue = (_state_selectedItem1 = state.selectedItem) === null || _state_selectedItem1 === void 0 ? void 0 : _state_selectedItem1.textValue) !== null && _state_selectedItem_textValue !== void 0 ? _state_selectedItem_textValue : null,
            isPlaceholder: !selectedItem
        }
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props);
    return /*#__PURE__*/ (0, react).createElement("span", {
        ref: ref,
        ...DOMProps,
        ...renderProps,
        "data-placeholder": !selectedItem || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, Text/* TextContext */.h).Provider, {
        value: undefined
    }, renderProps.children));
});



//# sourceMappingURL=Select.module.js.map


/***/ })

}]);