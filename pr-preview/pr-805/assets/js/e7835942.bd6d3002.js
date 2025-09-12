"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[9636],{

/***/ 2214:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ $4547d1bf40011fdf$export$dd5580ae642f110f),
  O: () => (/* binding */ $4547d1bf40011fdf$export$bc53712daae3d6e6)
});

// EXTERNAL MODULE: ./node_modules/@react-aria/button/dist/useToggleButton.mjs
var useToggleButton = __webpack_require__(89869);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs + 1 modules
var FocusScope = __webpack_require__(49336);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(49953);
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
        if (!e.currentTarget.contains(e.target)) return;
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
            lastFocused.current = document.activeElement;
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
        if (!e.currentTarget.contains(e.relatedTarget) && !lastFocused.current) lastFocused.current = e.target;
    };
    // Restore focus to the last focused child when focus returns into the toolbar.
    // If the element was removed, do nothing, either the first item in the first group,
    // or the last item in the last group will be focused, depending on direction.
    const onFocus = (e)=>{
        var _ref_current;
        if (lastFocused.current && !e.currentTarget.contains(e.relatedTarget) && ((_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.contains(e.target))) {
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


/***/ }),

/***/ 8807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ Checkbox)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/usePress.mjs + 6 modules
var usePress = __webpack_require__(35044);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/RSPContexts.mjs
var RSPContexts = __webpack_require__(32373);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Form.mjs
var Form = __webpack_require__(23128);
// EXTERNAL MODULE: ./packages/components/src/checkbox/context.ts
var context = __webpack_require__(20011);
// EXTERNAL MODULE: ./node_modules/@react-aria/checkbox/dist/useCheckboxGroupItem.mjs
var useCheckboxGroupItem = __webpack_require__(26493);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(87979);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.module.css
var Checkbox_module = __webpack_require__(16025);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/checkbox/CheckboxInner.tsx
var CheckboxInner=/*#__PURE__*/react.forwardRef(function(props,ref){var _props$hoverResult=props.hoverResult,hoverProps=_props$hoverResult.hoverProps,isHovered=_props$hoverResult.isHovered;var _props$pressResult=props.pressResult,pressProps=_props$pressResult.pressProps,isPressed=_props$pressResult.isPressed;var _props$focusRingAria=props.focusRingAria,isFocused=_props$focusRingAria.isFocused,isFocusVisible=_props$focusRingAria.isFocusVisible,focusProps=_props$focusRingAria.focusProps;return/*#__PURE__*/(0,jsx_runtime.jsxs)("label",Object.assign({ref:ref},(0,mergeProps/* mergeProps */.v)(hoverProps,pressProps,props.labelProps),{slot:props.slot||undefined,className:(0,clsx/* clsx */.$)(Checkbox_module/* default */.A.checkbox,props.className),"data-hovered":isHovered||undefined,"data-selected":props.isSelected||undefined,"data-indeterminate":props.isIndeterminate||undefined,"data-pressed":isPressed||undefined,"data-disabled":props.isDisabled||undefined,"data-readonly":props.isReadOnly||undefined,"data-invalid":props.isInvalid||undefined,"data-focused":isFocused||undefined,"data-focus-visible":isFocusVisible||undefined,"data-required":props.isRequired||undefined,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* clsx */.$)(Checkbox_module/* default */.A.checkboxInner),children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:16,height:16,viewBox:"0 0 18 18","aria-hidden":"true",children:props.isIndeterminate?/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:4,y:8,width:10,height:2}):/*#__PURE__*/(0,jsx_runtime.jsx)("polyline",{points:"3,9 7,13 15,4"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("input",Object.assign({},(0,mergeProps/* mergeProps */.v)(props.inputProps,focusProps),{ref:props.inputRef}))}),props.children]}));});
;// ./packages/components/src/checkbox/CheckboxGroupItem.tsx
var CheckBoxGroupItem=/*#__PURE__*/react.forwardRef(function(props,ref){var checkboxGroupItem=(0,useCheckboxGroupItem/* useCheckboxGroupItem */.B)(Object.assign({},props,{value:props.value||''}),props.state,props.inputRef);return/*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxInner,Object.assign({},props,checkboxGroupItem,{ref:ref}));});
// EXTERNAL MODULE: ./node_modules/@react-aria/checkbox/dist/useCheckbox.mjs + 1 modules
var useCheckbox = __webpack_require__(58044);
// EXTERNAL MODULE: ./node_modules/@react-stately/toggle/dist/useToggleState.mjs
var useToggleState = __webpack_require__(51623);
;// ./packages/components/src/checkbox/SingleCheckbox.tsx
var SingleCheckbox=/*#__PURE__*/react.forwardRef(function(props,ref){var item=(0,useCheckbox/* useCheckbox */.v)(props,(0,useToggleState/* useToggleState */.H)(props),props.inputRef);return/*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxInner,Object.assign({},props,item,{ref:ref}));});
;// ./packages/components/src/checkbox/Checkbox.tsx
var Checkbox=/*#__PURE__*/react.forwardRef(function(props,ref){var _ref,_props$validationBeha;;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,RSPContexts/* CheckboxContext */.BP);props=_useContextProps[0];ref=_useContextProps[1];var formProps=(0,utils/* useSlottedContext */.CC)(Form/* FormContext */.c);var validationBehavior=(_ref=(_props$validationBeha=props.validationBehavior)!=null?_props$validationBeha:formProps==null?void 0:formProps.validationBehavior)!=null?_ref:'native';var state=react.useContext(context/* CheckboxGroupContext */.I);var inputRef=react.useRef(null);var hoverResult=(0,useHover/* useHover */.M)(props);var pressResult=(0,usePress/* usePress */.d)({ref:ref,isDisabled:props.isDisabled});var focusRingAria=(0,useFocusRing/* useFocusRing */.o)();if(state){return/*#__PURE__*/(0,jsx_runtime.jsx)(CheckBoxGroupItem,Object.assign({},props,{state:state,inputRef:inputRef,hoverResult:hoverResult,pressResult:pressResult,focusRingAria:focusRingAria,validationBehavior:validationBehavior}));}return/*#__PURE__*/(0,jsx_runtime.jsx)(SingleCheckbox,Object.assign({},props,{inputRef:inputRef,hoverResult:hoverResult,pressResult:pressResult,focusRingAria:focusRingAria,validationBehavior:validationBehavior}));});

/***/ }),

/***/ 13332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TextField)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextFieldBase.tsx + 2 modules
var TextFieldBase = __webpack_require__(39107);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(73413);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/textfield/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"hide":"Hide","show":"Show"},"sv":{"hide":"Dölj","show":"Visa"}}');
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/textfield/PasswordField.tsx
var PasswordField=/*#__PURE__*/react.forwardRef(function(props,ref){;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,Input/* InputContext */.E);props=_useContextProps[0];ref=_useContextProps[1];var _React$useState=react.useState(false),showPassword=_React$useState[0],setShowPassword=_React$useState[1];var handlePress=function handlePress(){return setShowPassword(function(previousValue){return!previousValue;});};var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showPassword&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module/* default */.A.passwordText,children:props.value}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"tertiary",onPress:handlePress,className:TextField_module/* default */.A.passwordButton,children:showPassword?strings.format('hide'):strings.format('show')})]});});
;// ./packages/components/src/textfield/Input.tsx
var _excluded=["skipContext"];var Input_Input=/*#__PURE__*/react.forwardRef(function(_ref,localRef){var _ref$skipContext=_ref.skipContext,skipContext=_ref$skipContext===void 0?false:_ref$skipContext,localProps=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _useContextProps=(0,utils/* useContextProps */.JT)(localProps,localRef,Input/* InputContext */.E),contextProps=_useContextProps[0],contextRef=_useContextProps[1];var ref=skipContext?localRef:contextRef;var props=skipContext?localProps:contextProps;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module/* default */.A.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,Object.assign({},props,{ref:ref,className:(0,clsx/* default */.A)(TextField_module/* default */.A.input,props.className)})),props.type==='password'&&/*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField,Object.assign({},props))]});});
;// ./packages/components/src/textfield/TextField.tsx
'use client';var TextField_excluded=["className","form","list","type"];var TextField=/*#__PURE__*/react.forwardRef(function(_ref,ref){var className=_ref.className,form=_ref.form,list=_ref.list,type=_ref.type,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,TextField_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(TextFieldBase/* TextFieldBase */.J,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_Input,{className:(0,clsx/* default */.A)(className),form:form,list:list,ref:ref,type:type,skipContext:true})}));});

/***/ }),

/***/ 16025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"checkboxInner":"checkboxInner_Nam1","checkbox":"checkbox_J2GB","checkboxGroup":"checkboxGroup_iAq9"});

/***/ }),

/***/ 18980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ DateSegment)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/DateField.mjs + 41 modules
var DateField = __webpack_require__(68407);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/date-field/DateSegment.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DateSegment_module = ({"dateSegment":"dateSegment_nh76"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/date-field/DateSegment.tsx
var _excluded=["className"];var DateSegment=function DateSegment(_ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateSegment */.Eu,Object.assign({className:(0,clsx/* default */.A)(DateSegment_module.dateSegment,className)},rest));};

/***/ }),

/***/ 19060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ FieldError_FieldError)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
;// ./packages/components/src/field-error/FieldError.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const FieldError_module = ({"fieldError":"fieldError_K9VX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/field-error/FieldError.tsx
var FieldError_FieldError=/*#__PURE__*/react.forwardRef(function(props,ref){var children=props.children,isInvalid=props.isInvalid;var className=(0,clsx/* default */.A)(FieldError_module.fieldError,props.className);var context=react.useContext(FieldError/* FieldErrorContext */.C);if(!context&&isInvalid&&typeof children!=='function'){return/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{className:className,children:children});}if(!(context!=null&&context.isInvalid))return null;return/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,Object.assign({},props,{ref:ref,className:className}));});

/***/ }),

/***/ 19615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var dist_Text = __webpack_require__(27279);
;// ./packages/components/src/text/Text.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Text_module = ({"body-01":"body-01_whJM","body-02":"body-02_Xi1v","description":"description_XYgX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","variant","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'body-02':_ref$variant,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames={'body-01':Text_module['body-01'],'body-02':Text_module['body-02']};var textProps=Object.assign({className:(0,clsx/* default */.A)(rest.slot==='description'?Text_module.description:classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

/***/ }),

/***/ 20011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ CheckboxGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var CheckboxGroupContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

/***/ }),

/***/ 20454:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _objectDestructuringEmpty)
/* harmony export */ });
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}


/***/ }),

/***/ 28777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover_Popover)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/popover/Popover.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Popover_module = ({"popover":"popover_qr_p","arrow":"arrow_bhQK"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(45745);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/popover/Popover.tsx
var _excluded=["children","className","offset"];function Popover_Popover(_ref){var children=_ref.children,className=_ref.className,_ref$offset=_ref.offset,offset=_ref$offset===void 0?4:_ref$offset,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Popover/* Popover */.A,Object.assign({},props,{offset:offset,className:(0,clsx/* default */.A)(Popover_module.popover,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Popover_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:8,height:8,viewBox:"0 0 8 8",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L4 4 L8 0"})})}),children]}));}

/***/ }),

/***/ 32793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ ToggleButtonGroup)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20454);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82597);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85468);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var ToggleButtonGroup=function ToggleButtonGroup(_ref){var rest=Object.assign({},((0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref),_ref));return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .ToggleButtonGroup */ .WK,Object.assign({},rest,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.group,rest.className)}));};

/***/ }),

/***/ 34704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Label)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var dist_Label = __webpack_require__(21704);
;// ./packages/components/src/label/Label.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Label_module = ({"labelBase":"labelBase_BRgo"});
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/Label.tsx
var _excluded=["children","className","elementType"];var DEFAULT_ELEMENT='label';var Label=function Label(_ref){var children=_ref.children,className=_ref.className,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var labelProps=Object.assign({className:(0,clsx/* default */.A)(Label_module.labelBase,className),elementType:elementType||DEFAULT_ELEMENT},rest);var ctx=react.useContext(LabelWrapper/* LabelWrapperContext */.d$);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Label/* Label */.J,Object.assign({},labelProps,{"aria-describedby":ctx==null?void 0:ctx.popoverId,children:children}));};

/***/ }),

/***/ 39107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ TextFieldBase)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextField.mjs
var TextField = __webpack_require__(32945);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(73413);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(19060);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
;// ./packages/components/src/character-counter/CharacterCounter.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CharacterCounter_module = ({"characterCounter":"characterCounter_Rd9H"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/character-counter/CharacterCounter.tsx
var CharacterCounter=/*#__PURE__*/react.forwardRef(function(props,ref){var _value$toString;;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,Input/* InputContext */.E);props=_useContextProps[0];var _props=props,maxLength=_props.maxLength,value=_props.value,isLonely=_props.isLonely;var _ref=(_value$toString=value==null?void 0:value.toString())!=null?_value$toString:'',length=_ref.length;var isMaxLengthDefined=maxLength!==undefined;return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:CharacterCounter_module.characterCounter,"data-exceeded":isMaxLengthDefined&&length>maxLength||undefined,"data-lonely":isLonely||undefined,children:isMaxLengthDefined?length+" / "+maxLength:length});});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(34704);
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
;// ./packages/components/src/textfield/TextFieldBase.tsx
var TextFieldBase=/*#__PURE__*/react.forwardRef(function(props,ref){var _clsx;;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,TextField/* TextFieldContext */.H);props=_useContextProps[0];var _props=props,label=_props.label,description=_props.description,errorMessage=_props.errorMessage,showCounter=_props.showCounter,_props$errorPosition=_props.errorPosition,errorPosition=_props$errorPosition===void 0?'top':_props$errorPosition,_props$size=_props.size,size=_props$size===void 0?'large':_props$size,popover=_props.popover,children=_props.children;return/*#__PURE__*/(0,jsx_runtime.jsxs)(TextField/* TextField */.A,Object.assign({},props,{className:(0,clsx/* clsx */.$)(TextField_module/* default */.A.textField,(_clsx={},_clsx[TextField_module/* default */.A.medium]=size==='medium',_clsx)),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapper/* LabelWrapper */.cR,{popover:popover,children:label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{children:label})}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:description}),showCounter&&/*#__PURE__*/(0,jsx_runtime.jsx)(CharacterCounter,{isLonely:!description}),errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",children:errorMessage}),children,errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",className:TextField_module/* default */.A.bottomError,children:errorMessage})]}));});

/***/ }),

/***/ 41390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"dateInput":"dateInput_Y5ix","divider":"divider_BL_i"});

/***/ }),

/***/ 48292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ DateField)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/DateField.mjs + 41 modules
var dist_DateField = __webpack_require__(68407);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/date-field/DateInput.tsx
var DateInput = __webpack_require__(79980);
// EXTERNAL MODULE: ./packages/components/src/date-field/DateSegment.tsx + 1 modules
var DateSegment = __webpack_require__(18980);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(19060);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(34704);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
;// ./packages/components/src/date-field/DateField.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DateField_module = ({"dateField":"dateField_w_5V","inputField":"inputField_RpLn","medium":"medium_OzpD"});
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/date-field/DateField.tsx
var _excluded=["className","description","errorMessage","errorPosition","isDisabled","label","size","popover"];var DateField=function DateField(_ref){var _clsx;var className=_ref.className,description=_ref.description,errorMessage=_ref.errorMessage,_ref$errorPosition=_ref.errorPosition,errorPosition=_ref$errorPosition===void 0?'top':_ref$errorPosition,isDisabled=_ref.isDisabled,label=_ref.label,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,popover=_ref.popover,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_DateField/* DateField */.vM,Object.assign({},rest,{className:(0,clsx/* default */.A)(DateField_module.dateField,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapper/* LabelWrapper */.cR,{popover:popover,children:label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{children:label})}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:description}),errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:errorMessage}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(DateField_module.inputField,(_clsx={},_clsx[DateField_module.medium]=size==='medium',_clsx)),"data-disabled":isDisabled||undefined,"data-testid":"date-field_input-field",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DateInput/* DateInput */.J,{children:function children(segment){return/*#__PURE__*/(0,jsx_runtime.jsx)(DateSegment/* DateSegment */.E,{segment:segment});}})}),errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:errorMessage})]}));};

/***/ }),

/***/ 54031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86707);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65014);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["variant","fullwidth","className","iconPlacement","size","icon","iconSize"];/**
 * Button to perform various actions.
 *
 * @interface MidasButton
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */var Button=function Button(_ref){var _ref$variant=_ref.variant,variant=_ref$variant===void 0?'primary':_ref$variant,fullwidth=_ref.fullwidth,className=_ref.className,iconPlacement=_ref.iconPlacement,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,IconComponent=_ref.icon,iconSize=_ref.iconSize,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.button,variant==='primary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.primary,variant==='secondary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.secondary,variant==='tertiary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.tertiary,variant==='danger'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.danger,variant==='icon'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.iconBtn,fullwidth&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fullwidth,size==='medium'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.medium,iconPlacement==='right'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.iconRight,className)},rest,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[IconComponent&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IconComponent,{"aria-hidden":true,size:iconSize!=null?iconSize:20}),rest.children]})}));};

/***/ }),

/***/ 73202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  cR: () => (/* binding */ LabelWrapper),
  d$: () => (/* binding */ LabelWrapperContext)
});

// UNUSED EXPORTS: useLabelWrapperContext

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/components/src/label/LabelWrapper.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const LabelWrapper_module = ({"labelPopover":"labelPopover_QNhJ","labelPopoverTrigger":"labelPopoverTrigger_iTpE"});
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(28777);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(97213);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/label/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"moreInfo":"More info"},"sv":{"moreInfo":"Mer information"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/InfoPopover.tsx
/** Display an info-icon with popover next to the label to further explain what the user should enter in the field */var InfoPopover=function InfoPopover(_ref){var children=_ref.children,ariaLabel=_ref['aria-label'];var _React$useState=react.useState(false),isOpen=_React$useState[0],setIsOpen=_React$useState[1];var ctx=react.useContext(LabelWrapperContext);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{isOpen:isOpen,onOpenChange:setIsOpen,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",size:"medium",className:LabelWrapper_module.labelPopoverTrigger,"aria-label":ariaLabel||strings.format('moreInfo'),id:ctx==null?void 0:ctx.popoverId,children:/*#__PURE__*/(0,jsx_runtime.jsx)(info/* default */.A,{size:20})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:children})]});};
;// ./packages/components/src/label/LabelWrapper.tsx
var LabelWrapperContext=/*#__PURE__*/react.createContext(undefined);var useLabelWrapperContext=function useLabelWrapperContext(){return React.useContext(LabelWrapperContext);};var LabelWrapper=function LabelWrapper(_ref){var children=_ref.children,popover=_ref.popover;var popoverId=react.useId();if(popover)return/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapperContext.Provider,{value:{popoverId:popoverId},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:LabelWrapper_module.labelPopover,children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(InfoPopover,Object.assign({},popover))]})});return children;};

/***/ }),

/***/ 73413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"textField":"textField_IarX","bottomError":"bottomError_XU77","textArea":"textArea_M6yF","wrap":"wrap_ljmz","medium":"medium_jalb","input":"input_g6A6","passwordText":"passwordText_gBIs","passwordButton":"passwordButton_kacG"});

/***/ }),

/***/ 79980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ DateInput)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68407);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var _DateInput_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41390);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["className"];var DateInput=function DateInput(_ref){var className=_ref.className,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .DateInput */ .J3,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_DateInput_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.dateInput,className)},rest));};

/***/ }),

/***/ 82597:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  WK: () => (/* binding */ $84b7d8702d4ff4a8$export$40258cc1d95ff477),
  G0: () => (/* binding */ $84b7d8702d4ff4a8$export$a8a71863db173133)
});

// UNUSED EXPORTS: ToggleButtonGroupContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
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
            isDisabled: state.isDisabled,
            state: state
        },
        defaultClassName: 'react-aria-ToggleButtonGroup'
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, react).createElement("div", {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, groupProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-orientation": props.orientation || 'horizontal',
        "data-disabled": props.isDisabled || undefined
    }, /*#__PURE__*/ (0, react).createElement($84b7d8702d4ff4a8$export$a8a71863db173133.Provider, {
        value: state
    }, renderProps.children));
});



//# sourceMappingURL=ToggleButtonGroup.module.js.map


/***/ }),

/***/ 85468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"group":"group_RECg","toggleButton":"toggleButton_vLWl"});

/***/ }),

/***/ 86707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"button":"button_RcXK","secondary":"secondary_h5I_","tertiary":"tertiary_xq7E","iconBtn":"iconBtn__8qK","medium":"medium_uqO9","danger":"danger_iFp6","iconRight":"iconRight_iW1e","fullwidth":"fullwidth_WWNT","primary":"primary_JNNk"});

/***/ }),

/***/ 88413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oe: () => (/* binding */ useLocalizedStringFormatter)
/* harmony export */ });
/* unused harmony export useLocalizedStringDictionary */
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92122);
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57612);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39892);
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
 */var DEFAULT_LANGUAGE='sv';var cache=new WeakMap();function getCachedDictionary(strings){var dictionary=cache.get(strings);if(!dictionary){dictionary=new _internationalized_string__WEBPACK_IMPORTED_MODULE_1__/* .LocalizedStringDictionary */ .B(strings,DEFAULT_LANGUAGE);cache.set(strings,dictionary);}return dictionary;}/**
 * Returns a cached LocalizedStringDictionary for the given strings.
 */function useLocalizedStringDictionary(strings,packageName){return packageName&&_internationalized_string__WEBPACK_IMPORTED_MODULE_1__/* .LocalizedStringDictionary */ .B.getGlobalDictionaryForPackage(packageName)||getCachedDictionary(strings);}/**
 * Provides localized string formatting for the current locale. Supports interpolating variables,
 * selecting the correct pluralization, and formatting numbers. Automatically updates when the locale changes.
 * @param strings - A mapping of languages to localized strings by key.
 */function useLocalizedStringFormatter(strings,packageName){if(!strings||typeof strings!=='object'||!(DEFAULT_LANGUAGE in strings)){throw new Error("useLocalizedStringFormatter: Default language \""+DEFAULT_LANGUAGE+"\" must be defined in dictionary.");}var _useLocale=(0,react_aria_components__WEBPACK_IMPORTED_MODULE_2__/* .useLocale */ .Y)(),locale=_useLocale.locale;var dictionary=useLocalizedStringDictionary(strings,packageName);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return new _internationalized_string__WEBPACK_IMPORTED_MODULE_3__/* .LocalizedStringFormatter */ .J(locale,dictionary);},[dictionary,locale]);}

/***/ }),

/***/ 88693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ ToggleButton)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(20454);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ToggleButtonGroup.mjs + 1 modules
var ToggleButtonGroup = __webpack_require__(82597);
// EXTERNAL MODULE: ./node_modules/@react-aria/button/dist/useToggleButtonGroup.mjs + 1 modules
var useToggleButtonGroup = __webpack_require__(2214);
// EXTERNAL MODULE: ./node_modules/@react-aria/button/dist/useToggleButton.mjs
var useToggleButton = __webpack_require__(89869);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-stately/toggle/dist/useToggleState.mjs
var useToggleState = __webpack_require__(51623);
;// ./node_modules/react-aria-components/dist/ToggleButton.mjs







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





const $efde0372d7a700fe$export$43506d75ebd2e218 = /*#__PURE__*/ (0, react.createContext)({});
const $efde0372d7a700fe$export$d2b052e7b4be1756 = /*#__PURE__*/ (0, react.forwardRef)(function ToggleButton(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $efde0372d7a700fe$export$43506d75ebd2e218);
    let groupState = (0, react.useContext)((0, ToggleButtonGroup/* ToggleGroupStateContext */.G0));
    let state = (0, useToggleState/* useToggleState */.H)(groupState && props.id != null ? {
        isSelected: groupState.selectedKeys.has(props.id),
        onChange (isSelected) {
            groupState.setSelected(props.id, isSelected);
        }
    } : props);
    let { buttonProps: buttonProps, isPressed: isPressed, isSelected: isSelected, isDisabled: isDisabled } = groupState && props.id != null ? (0, useToggleButtonGroup/* useToggleButtonGroupItem */.O)({
        ...props,
        id: props.id
    }, groupState, ref) : (0, useToggleButton/* useToggleButton */.q)({
        ...props,
        id: props.id != null ? String(props.id) : undefined
    }, state, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)(props);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* useHover */.M)(props);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
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
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, react).createElement("button", {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, buttonProps, focusProps, hoverProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": isFocused || undefined,
        "data-disabled": isDisabled || undefined,
        "data-pressed": isPressed || undefined,
        "data-selected": isSelected || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined
    });
});



//# sourceMappingURL=ToggleButton.module.js.map

// EXTERNAL MODULE: ./packages/components/src/button/Button.module.css
var Button_module = __webpack_require__(86707);
// EXTERNAL MODULE: ./packages/components/src/toggle-button/ToggleButton.module.css
var ToggleButton_module = __webpack_require__(85468);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/toggle-button/ToggleButton.tsx
var ToggleButton=function ToggleButton(_ref){var rest=Object.assign({},((0,objectDestructuringEmpty/* default */.A)(_ref),_ref));return/*#__PURE__*/(0,jsx_runtime.jsx)($efde0372d7a700fe$export$d2b052e7b4be1756,Object.assign({},rest,{className:(0,clsx/* default */.A)(Button_module/* default */.A.button,Button_module/* default */.A.iconBtn,ToggleButton_module/* default */.A.toggleButton,rest.className)}));};

/***/ }),

/***/ 89869:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ 90706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_localization_mdx_e78_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-localization-mdx-e78.json
const site_docs_dev_localization_mdx_e78_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/localization","title":"Lokalisering","description":"React Aria har en rad inbyggda funktioner som underlättar skapandet av tillgängliga","source":"@site/docs/dev/localization.mdx","sourceDirName":"dev","slug":"/dev/localization","permalink":"/pr-preview/pr-805/dev/localization","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Lokalisering","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
// EXTERNAL MODULE: ./node_modules/@internationalized/date/dist/string.mjs
var string = __webpack_require__(77282);
// EXTERNAL MODULE: ./packages/components/src/table/Table.tsx + 1 modules
var Table = __webpack_require__(99982);
// EXTERNAL MODULE: ./packages/components/src/toggle-button/ToggleButtonGroup.tsx
var ToggleButtonGroup = __webpack_require__(32793);
// EXTERNAL MODULE: ./packages/components/src/toggle-button/ToggleButton.tsx + 1 modules
var ToggleButton = __webpack_require__(88693);
// EXTERNAL MODULE: ./packages/components/src/date-field/DateField.tsx + 1 modules
var DateField = __webpack_require__(48292);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx + 3 modules
var TextField = __webpack_require__(13332);
;// ./apps/docs/src/components/examples/LocalizationExamples.tsx
var LocaleExample=function LocaleExample(){var _useLocale=(0,context/* useLocale */.Y)(),locale=_useLocale.locale,direction=_useLocale.direction;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{lang:locale,dir:direction,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* Table */.XI,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* TableHeader */.A0,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Column */.VP,{isRowHeader:true,children:"Nuvarande spr\xE5k"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Column */.VP,{children:"Nuvarande textriktning"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* TableBody */.BF,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* Row */.fI,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Cell */.fh,{children:locale}),/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Cell */.fh,{children:direction})]})})]})});};var I18nExample=function I18nExample(){var _locale$keys$next$val,_locale$keys$next$val2;var _React$useState=react.useState(new Set(['fr-FR'])),locale=_React$useState[0],setLocale=_React$useState[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(ToggleButtonGroup/* ToggleButtonGroup */.W,{style:{marginBottom:'1rem'},selectionMode:"single",selectedKeys:locale,onSelectionChange:function onSelectionChange(selectedLocale){return setLocale(selectedLocale);},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ToggleButton/* ToggleButton */.f,{id:"fr-FR",children:"Fran\xE7ais"}),/*#__PURE__*/(0,jsx_runtime.jsx)(ToggleButton/* ToggleButton */.f,{id:"sv",children:"Svenska"}),/*#__PURE__*/(0,jsx_runtime.jsx)(ToggleButton/* ToggleButton */.f,{id:"en",children:"English"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{lang:(_locale$keys$next$val=locale.keys().next().value)==null?void 0:_locale$keys$next$val.toString(),dir:"ltr",children:/*#__PURE__*/(0,jsx_runtime.jsx)(context/* I18nProvider */.C,{locale:(_locale$keys$next$val2=locale.keys().next().value)==null?void 0:_locale$keys$next$val2.toString(),children:/*#__PURE__*/(0,jsx_runtime.jsx)(CurrentDate,{})})})]});};function CurrentDate(){return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateField */.v,{defaultValue:(0,string/* parseDate */._U)('2025-02-28'),label:"Datumv\xE4ljare",description:"Format kan styras med i18nProvider"});}var ErrorMessageExample=function ErrorMessageExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"Skriv e-post",type:"email",description:"Validering och felmeddelanden beror av inst\xE4llningarna i webbl\xE4saren"});};
;// ./apps/docs/docs/dev/localization.mdx


const frontMatter = {
	title: 'Lokalisering',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Lokalisering';

const assets = {

};




const toc = [{
  "value": "useLocale",
  "id": "uselocale",
  "level": 2
}, {
  "value": "I18nProvider",
  "id": "i18nprovider",
  "level": 2
}, {
  "value": "useLocalizedStringFormatter",
  "id": "uselocalizedstringformatter",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "lokalisering",
        children: "Lokalisering"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["React Aria har en rad inbyggda funktioner som underlättar skapandet av tillgängliga\noch internationella användargränssnitt. Komponenterna i Midas, som bygger på React Aria,\nuppdateras automatiskt när språkmiljön ändras. Som standard används användarens språkinställning\ni webbläsaren för att välja språk och lokalisering i komponenterna. Om användarens inställning\ninte motsvarar något av de språk som stöds används svenska som standard. För närvarande\nstöder Midas officiellt svenska och engelska, medan React Aria har stöd för ytterligare språk.\nFör mer detaljerad dokumentation, se ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/internationalization.html",
        children: "React Aria Internationalization"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Det finns flera sätt att kontrollera och anpassa lokaliseringen. Nedan följer en översikt över de viktigaste funktionerna."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uselocale",
      children: "useLocale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att läsa av aktuell språkinställning och riktning (LTR/RTL) i applikationen kan du använda", (0,jsx_runtime.jsx)(_components.code, {
        children: "useLocale"
      }), " från React Aria.\nNormalt fungerar ", (0,jsx_runtime.jsx)(_components.code, {
        children: "locale"
      }), " utan att behöva importeras explicit, men vid till exempel SSR bör ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useLocale"
      }), " användas,\nse ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/internationalization.html",
        children: "React Aria"
      }), " för mer information."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useLocale } from 'react-aria-components'\n\nexport default function App() {\n  const { locale, direction } = useLocale()\n\n  return (\n    <html\n      lang={locale}\n      dir={direction}\n    >\n      {/* your app here */}\n    </html>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(LocaleExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "i18nprovider",
      children: "I18nProvider"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om det finns behov av att åsidosätta användarens inställningar kan detta göras via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "I18nProvider"
      }), ".\nMed I18nProvider kan du styra beteendet för datum- och tidsrelaterade komponenter, men inte ta kontroll\növer felmeddelanden eller annan information, då detta styrs av webbläsaren."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { I18nProvider } from 'react-aria-components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<I18nProvider locale={locale}>\n  <DateField />\n</I18nProvider>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(I18nExample, {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(ErrorMessageExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uselocalizedstringformatter",
      children: "useLocalizedStringFormatter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att översätta eller anpassa enskilda textsträngar kan du använda  ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/i18n/src/useLocalizedStringFormatter.ts",
        children: "useLocalizedStringFormatter"
      }), ".\nFör siffror och valutor finns motsvarande funktionalitet i ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/useNumberFormatter.html",
        children: "useNumberFormatter"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 99982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fh: () => (/* binding */ Cell),
  VP: () => (/* binding */ Column),
  fI: () => (/* binding */ Row),
  XI: () => (/* binding */ Table),
  BF: () => (/* binding */ TableBody),
  A0: () => (/* binding */ TableHeader)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/table/Table.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Table_module = ({"table":"table_nvoM","tableHeader":"tableHeader_BmsY","column":"column_NPIT","selection":"selection_ckia","row":"row_o3yW","cell":"cell_BlIu","narrow":"narrow_Jh7A","medium":"medium_q_Iz","striped":"striped_wp0e"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Table.mjs + 55 modules
var dist_Table = __webpack_require__(43444);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx + 3 modules
var Checkbox = __webpack_require__(8807);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/grip-vertical.js
var grip_vertical = __webpack_require__(21436);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up-wide-narrow.js
var arrow_up_wide_narrow = __webpack_require__(4804);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down-narrow-wide.js
var arrow_down_narrow_wide = __webpack_require__(85785);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/table/Table.tsx
'use client';var _excluded=["size","striped","className"],_excluded2=["id","columns","children","className"],_excluded3=["children","className"],_excluded4=["className"],_excluded5=["className"];var Table=function Table(_ref){var _clsx;var _ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,_ref$striped=_ref.striped,striped=_ref$striped===void 0?false:_ref$striped,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Table/* Table */.XI,Object.assign({className:(0,clsx/* default */.A)(Table_module.table,className,(_clsx={},_clsx[Table_module.medium]=size==='medium',_clsx[Table_module.striped]=striped,_clsx))},rest));};var TableHeader=function TableHeader(_ref2){var columns=_ref2.columns,children=_ref2.children,className=_ref2.className;var _useTableOptions=(0,dist_Table/* useTableOptions */.mz)(),selectionBehavior=_useTableOptions.selectionBehavior,selectionMode=_useTableOptions.selectionMode,allowsDragging=_useTableOptions.allowsDragging;return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_Table/* TableHeader */.A0,{className:(0,clsx/* default */.A)(className,Table_module.tableHeader),children:[allowsDragging&&/*#__PURE__*/(0,jsx_runtime.jsx)(Column,{}),selectionBehavior==='toggle'&&/*#__PURE__*/(0,jsx_runtime.jsx)(Column,{width:50,children:selectionMode==='multiple'&&/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{className:Table_module.selection,slot:"selection"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(CollectionBuilder/* Collection */.pM,{items:columns,children:children})]});};var Row=function Row(_ref3){var id=_ref3.id,columns=_ref3.columns,children=_ref3.children,className=_ref3.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref3,_excluded2);var _useTableOptions2=(0,dist_Table/* useTableOptions */.mz)(),selectionBehavior=_useTableOptions2.selectionBehavior,allowsDragging=_useTableOptions2.allowsDragging;return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_Table/* Row */.fI,Object.assign({id:id,className:(0,clsx/* default */.A)(className,Table_module.row)},rest,{children:[allowsDragging&&/*#__PURE__*/(0,jsx_runtime.jsx)(Cell,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"drag",children:/*#__PURE__*/(0,jsx_runtime.jsx)(grip_vertical/* default */.A,{size:20})})}),selectionBehavior==='toggle'&&/*#__PURE__*/(0,jsx_runtime.jsx)(Cell,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{className:Table_module.selection,slot:"selection"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(CollectionBuilder/* Collection */.pM,{items:columns,children:children})]}));};var Column=function Column(_ref4){var _children=_ref4.children,className=_ref4.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref4,_excluded3);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Table/* Column */.VP,Object.assign({className:(0,clsx/* default */.A)(className,Table_module.column)},rest,{children:function children(_ref5){var allowsSorting=_ref5.allowsSorting,sortDirection=_ref5.sortDirection;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[_children,allowsSorting&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",className:"sort-indicator",children:sortDirection==='ascending'?/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_up_wide_narrow/* default */.A,{size:20}):/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_down_narrow_wide/* default */.A,{size:20})})]});}}));};var Cell=function Cell(_ref6){var className=_ref6.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref6,_excluded4);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Table/* Cell */.fh,Object.assign({className:(0,clsx/* default */.A)(className,Table_module.cell)},rest));};var TableBody=function TableBody(_ref7){var className=_ref7.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref7,_excluded5);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Table/* TableBody */.BF,Object.assign({className:(0,clsx/* default */.A)(className,Table_module.tableBody)},rest));};

/***/ })

}]);