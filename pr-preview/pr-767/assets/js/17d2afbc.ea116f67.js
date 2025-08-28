"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2017],{

/***/ 6632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowUp)
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
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
];
const ArrowUp = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("arrow-up", __iconNode);


//# sourceMappingURL=arrow-up.js.map


/***/ }),

/***/ 7344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ iconMap)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45773);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97213);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59155);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(418);
var iconMap={success:lucide_react__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,info:lucide_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,important:lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,warning:lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A};

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

/***/ 11046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ Accordion)
});

// UNUSED EXPORTS: ACCORDION_TEST_ID

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/accordion/Accordion.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Accordion_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--text-disabled":"light-dark(#bfbfbf, #525252)","root":"root_dwc1","contained":"contained_snuo","triggerButton":"triggerButton_v7ly"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(48569);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(45644);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/accordion/Accordion.tsx
'use client';var _excluded=["variant","children","className","isContained"];var ACCORDION_TEST_ID='accordion';/**
 * Accordions help reduce visual clutter on a page by organizing content into collapsible sections.
 */var Accordion=function Accordion(_ref){var variant=_ref.variant,children=_ref.children,className=_ref.className,isContainedFromProp=_ref.isContained,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var isContained=isContainedFromProp||variant==='contained';return/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionContext/* AccordionContext */.C.Provider,{value:{isContained:isContained},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Disclosure/* DisclosureGroup */.Tw,Object.assign({"data-testid":ACCORDION_TEST_ID,className:(0,clsx/* default */.A)(Accordion_module.root,isContained?Accordion_module.contained:Accordion_module.uncontained,className)},props,{children:children}))});};

/***/ }),

/***/ 13225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ComponentHeader)
/* harmony export */ });
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74351);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93574);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56636);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92457);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42350);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
var ComponentHeader=function ComponentHeader(_ref){var name=_ref.name,friendlyName=_ref.friendlyName,overrideHeadlessLink=_ref.overrideHeadlessLink,overrideHeadlessLinkTitle=_ref.overrideHeadlessLinkTitle;var baseUrl=_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay;var componentPath="?path=/docs/components-"+name.toLowerCase()+"--docs";var storybookHost= false?0:baseUrl('/storybook');var storybookLink=storybookHost+"/"+componentPath;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section",{className:"component-header",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .Grid */ .x,{fluid:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .GridItem */ .E,{size:"auto",className:"friendlyName",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:storybookLink,variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,iconPlacement:"left",children:"Storybook"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,iconPlacement:"left",children:overrideHeadlessLinkTitle?overrideHeadlessLinkTitle:'React Aria'})})]})});};

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
var PasswordField=function PasswordField(_ref){var value=_ref.value;var _React$useState=react.useState(false),showPassword=_React$useState[0],setShowPassword=_React$useState[1];var handlePress=function handlePress(){return setShowPassword(function(previousValue){return!previousValue;});};var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showPassword&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module/* default */.A.passwordText,children:value}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"tertiary",onPress:handlePress,className:TextField_module/* default */.A.passwordButton,children:showPassword?strings.format('hide'):strings.format('show')})]});};
;// ./packages/components/src/textfield/Input.tsx
var Input_Input=/*#__PURE__*/react.forwardRef(function(props,ref){;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,Input/* InputContext */.E);props=_useContextProps[0];ref=_useContextProps[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module/* default */.A.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,Object.assign({},props,{ref:ref,className:(0,clsx/* default */.A)(TextField_module/* default */.A.input,props.className)})),props.type==='password'&&/*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField,Object.assign({},props))]});});
;// ./packages/components/src/textfield/TextField.tsx
'use client';var _excluded=["className","form","list"];var TextField=/*#__PURE__*/react.forwardRef(function(_ref,ref){var className=_ref.className,form=_ref.form,list=_ref.list,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(TextFieldBase/* TextFieldBase */.J,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_Input,{className:(0,clsx/* default */.A)(className),form:form,list:list,ref:ref})}));});

/***/ }),

/***/ 15117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Laptop)
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
  [
    "path",
    {
      d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
      key: "1pdavp"
    }
  ],
  ["path", { d: "M20.054 15.987H3.946", key: "14rxg9" }]
];
const Laptop = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("laptop", __iconNode);


//# sourceMappingURL=laptop.js.map


/***/ }),

/***/ 16025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--text-disabled":"light-dark(#bfbfbf, #525252)","--border-primary":"light-dark(#171717, #f2f2f2)","--border-disabled":"light-dark(#bfbfbf, #525252)","--breakpoint-xs":"(max-width: 479px)","--support-border-warning":"light-dark(#e62323, #e62323)","--icon-on-color":"light-dark(#ffffff, #ffffff)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--button-background-primary-active":"light-dark(#2e7ca5, #143c50)","--button-background-primary-hover":"light-dark(#25607f, #25607f)","--field-disabled":"light-dark(#f2f2f2, #262626)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--line-height-30":"1.25rem","checkboxInner":"checkboxInner_Nam1","checkbox":"checkbox_J2GB","checkboxGroup":"checkboxGroup_iAq9"});

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
/* harmony default export */ const FieldError_module = ({"tokens":"\"../theme/tokens.css\"","--text-warning":"light-dark(#e62323, #eb4e4e)","--font-family":"\"Inter\", sans-serif","fieldError":"fieldError_K9VX"});
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
/* harmony default export */ const Text_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--font-size-20":"0.875rem","--font-size-30":"1rem","--line-height-20":"1.125rem","--line-height-30":"1.25rem","--line-height-40":"1.375rem","--line-height-50":"1.5rem","--text-disabled":"light-dark(#bfbfbf, #525252)","body-01":"body-01_whJM","body-02":"body-02_Xi1v","description":"description_XYgX"});
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
/* harmony default export */ const Popover_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--layer-01":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--font-size-20":"0.875rem","--size-80":"1rem","popover":"popover_qr_p","arrow":"arrow_bhQK"});
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

/***/ 32945:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ $bcdf0525bf22703d$export$2c73285ae9390cec),
/* harmony export */   H: () => (/* binding */ $bcdf0525bf22703d$export$2129e27b3ef0d483)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5933);
/* harmony import */ var _FieldError_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44300);
/* harmony import */ var _Form_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23128);
/* harmony import */ var _Input_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79950);
/* harmony import */ var _Label_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21704);
/* harmony import */ var _TextArea_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43660);
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27279);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11811);
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75127);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5987);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32217);
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










const $bcdf0525bf22703d$export$2129e27b3ef0d483 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $bcdf0525bf22703d$export$2c73285ae9390cec = /*#__PURE__*/ (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__/* .createHideableComponent */ .U7)(function TextField(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useContextProps */ .JT)(props, ref, $bcdf0525bf22703d$export$2129e27b3ef0d483);
    let { validationBehavior: formValidationBehavior } = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useSlottedContext */ .CC)((0, _Form_mjs__WEBPACK_IMPORTED_MODULE_3__/* .FormContext */ .c)) || {};
    var _props_validationBehavior, _ref;
    let validationBehavior = (_ref = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : formValidationBehavior) !== null && _ref !== void 0 ? _ref : 'native';
    let inputRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    let [inputContextProps, mergedInputRef] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useContextProps */ .JT)({}, inputRef, (0, _Input_mjs__WEBPACK_IMPORTED_MODULE_4__/* .InputContext */ .E));
    let [labelRef, label] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useSlot */ ._E)(!props['aria-label'] && !props['aria-labelledby']);
    let [inputElementType, setInputElementType] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)('input');
    let { labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, react_aria__WEBPACK_IMPORTED_MODULE_5__/* .useTextField */ .v)({
        ...(0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .removeDataAttributes */ .SK)(props),
        inputElementType: inputElementType,
        label: label,
        validationBehavior: validationBehavior
    }, mergedInputRef);
    // Intercept setting the input ref so we can determine what kind of element we have.
    // useTextField uses this to determine what props to include.
    let inputOrTextAreaRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((el)=>{
        mergedInputRef.current = el;
        if (el) setInputElementType(el instanceof HTMLTextAreaElement ? 'textarea' : 'input');
    }, [
        mergedInputRef
    ]);
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useRenderProps */ .Sl)({
        ...props,
        values: {
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid,
            isReadOnly: props.isReadOnly || false,
            isRequired: props.isRequired || false
        },
        defaultClassName: 'react-aria-TextField'
    });
    let DOMProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__/* .filterDOMProps */ .$)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("div", {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": validation.isInvalid || undefined,
        "data-readonly": props.isReadOnly || undefined,
        "data-required": props.isRequired || undefined
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Provider */ .Kq), {
        values: [
            [
                (0, _Label_mjs__WEBPACK_IMPORTED_MODULE_7__/* .LabelContext */ .I),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ],
            [
                (0, _Input_mjs__WEBPACK_IMPORTED_MODULE_4__/* .InputContext */ .E),
                {
                    ...(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__/* .mergeProps */ .v)(inputProps, inputContextProps),
                    ref: inputOrTextAreaRef
                }
            ],
            [
                (0, _TextArea_mjs__WEBPACK_IMPORTED_MODULE_9__/* .TextAreaContext */ .k),
                {
                    ...inputProps,
                    ref: inputOrTextAreaRef
                }
            ],
            [
                (0, _Text_mjs__WEBPACK_IMPORTED_MODULE_10__/* .TextContext */ .h),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            [
                (0, _FieldError_mjs__WEBPACK_IMPORTED_MODULE_11__/* .FieldErrorContext */ .C),
                validation
            ]
        ]
    }, renderProps.children));
});



//# sourceMappingURL=TextField.module.js.map


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
/* harmony default export */ const Label_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--font-size-30":"1rem","--line-height-30":"1.25rem","--text-disabled":"light-dark(#bfbfbf, #525252)","--support-border-info":"light-dark(#0066cc, #0066cc)","labelBase":"labelBase_BRgo"});
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/Label.tsx
var _excluded=["children","className","elementType"];var DEFAULT_ELEMENT='label';var Label=function Label(_ref){var children=_ref.children,className=_ref.className,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var labelProps=Object.assign({className:(0,clsx/* default */.A)(Label_module.labelBase,className),elementType:elementType||DEFAULT_ELEMENT},rest);var ctx=react.useContext(LabelWrapper/* LabelWrapperContext */.d$);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Label/* Label */.J,Object.assign({},labelProps,{"aria-describedby":ctx==null?void 0:ctx.popoverId,children:children}));};

/***/ }),

/***/ 38739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--breakpoint-xs":"(max-width: 479px)","--breakpoint-sm":"(min-width: 480px)","--breakpoint-md":"(min-width: 768px)","--breakpoint-lg":"(min-width: 1024px)","--breakpoint-xl":"(min-width: 1280px)","container":"container_uCKZ","removeMargins":"removeMargins_rQ9U","contained":"contained_R9lB","flex":"flex_LQ20","fluid":"fluid_Y1tE","col":"col_tmG6","col-1":"col-1_OVvW","col-2":"col-2_XfVI","col-3":"col-3_KxqE","col-quarter":"col-quarter_eUut","col-4":"col-4_Ovxr","col-third":"col-third_FUaF","col-5":"col-5_uIyd","col-6":"col-6_i8WR","col-half":"col-half_GzSn","col-7":"col-7_devX","col-8":"col-8_tlAZ","col-9":"col-9_Nbjm","col-10":"col-10_rwyP","col-11":"col-11_ShOw","col-12":"col-12_eQeJ","col-full":"col-full_K_XT","col-auto":"col-auto_nMhH","col-grow":"col-grow_TBON","col-xs-1":"col-xs-1_Bg_O","col-xs-2":"col-xs-2_UhmL","col-xs-3":"col-xs-3_mEvh","col-xs-quarter":"col-xs-quarter_mtoI","col-xs-4":"col-xs-4_Uv5i","col-xs-third":"col-xs-third_AHrM","col-xs-5":"col-xs-5_Gdnm","col-xs-6":"col-xs-6_z366","col-xs-half":"col-xs-half_vH6m","col-xs-7":"col-xs-7_HNwO","col-xs-8":"col-xs-8_Vwih","col-xs-9":"col-xs-9_vfTc","col-xs-10":"col-xs-10_wJWt","col-xs-11":"col-xs-11_KTEA","col-xs-12":"col-xs-12_TaE_","col-xs-full":"col-xs-full_enWi","col-xs-auto":"col-xs-auto_G2jj","col-xs-grow":"col-xs-grow_kY1W","col-sm-1":"col-sm-1_YvIs","col-sm-2":"col-sm-2_NSCq","col-sm-3":"col-sm-3_cJ0H","col-sm-quarter":"col-sm-quarter_WWBJ","col-sm-4":"col-sm-4_dtZx","col-sm-third":"col-sm-third_g3dG","col-sm-5":"col-sm-5_C87q","col-sm-6":"col-sm-6_SkMd","col-sm-half":"col-sm-half_QX4f","col-sm-7":"col-sm-7_wa6s","col-sm-8":"col-sm-8_zH5I","col-sm-9":"col-sm-9_ym4Z","col-sm-10":"col-sm-10_jE4j","col-sm-11":"col-sm-11_Va2g","col-sm-12":"col-sm-12_BgjD","col-sm-full":"col-sm-full_Nb6O","col-sm-auto":"col-sm-auto_Qj4m","col-sm-grow":"col-sm-grow_mAH5","col-md-1":"col-md-1_Zeqd","col-md-2":"col-md-2_DR6K","col-md-3":"col-md-3_OZK7","col-md-quarter":"col-md-quarter_AmxM","col-md-4":"col-md-4_NxEu","col-md-third":"col-md-third_J4Ja","col-md-5":"col-md-5_cBkY","col-md-6":"col-md-6_it5t","col-md-half":"col-md-half_aEv_","col-md-7":"col-md-7__sAT","col-md-8":"col-md-8_WfW7","col-md-9":"col-md-9_orzQ","col-md-10":"col-md-10_wh5t","col-md-11":"col-md-11_Wsgq","col-md-12":"col-md-12_gZQg","col-md-full":"col-md-full_Ow4Z","col-md-auto":"col-md-auto_e67j","col-md-grow":"col-md-grow_quHq","col-lg-1":"col-lg-1_e1au","col-lg-2":"col-lg-2_fUsj","col-lg-3":"col-lg-3_EhhM","col-lg-quarter":"col-lg-quarter_SI9I","col-lg-4":"col-lg-4_VuKz","col-lg-third":"col-lg-third_Lf2A","col-lg-5":"col-lg-5_TF5r","col-lg-6":"col-lg-6_E93v","col-lg-half":"col-lg-half_ZdoE","col-lg-7":"col-lg-7_L5CO","col-lg-8":"col-lg-8_ZBHN","col-lg-9":"col-lg-9_TbUu","col-lg-10":"col-lg-10_Tsqu","col-lg-11":"col-lg-11_Eg8x","col-lg-12":"col-lg-12_eNvi","col-lg-full":"col-lg-full_SaRE","col-lg-auto":"col-lg-auto_fNRO","col-lg-grow":"col-lg-grow_XTrt","col-xl-1":"col-xl-1_BRna","col-xl-2":"col-xl-2_eGSK","col-xl-3":"col-xl-3_RrW2","col-xl-quarter":"col-xl-quarter_V_Yw","col-xl-4":"col-xl-4_R4AZ","col-xl-third":"col-xl-third_W3hT","col-xl-5":"col-xl-5_k7Gx","col-xl-6":"col-xl-6_xZyb","col-xl-half":"col-xl-half_V9xE","col-xl-7":"col-xl-7_lJfg","col-xl-8":"col-xl-8_zErQ","col-xl-9":"col-xl-9_oYwQ","col-xl-10":"col-xl-10_cLTa","col-xl-11":"col-xl-11_xqWK","col-xl-12":"col-xl-12_Vrsf","col-xl-full":"col-xl-full_vVSm","col-xl-auto":"col-xl-auto_YBap","col-xl-grow":"col-xl-grow_YMBn","offset-1":"offset-1_ZQkJ","offset-2":"offset-2_Reek","offset-3":"offset-3_SDkl","offset-quarter":"offset-quarter_ho5e","offset-4":"offset-4_L0XB","offset-third":"offset-third_dE8e","offset-5":"offset-5_Mz95","offset-6":"offset-6_Zp68","offset-half":"offset-half_nGtc","offset-7":"offset-7_ZApX","offset-8":"offset-8_UZTZ","offset-9":"offset-9_FiKS","offset-10":"offset-10_hN9R","offset-11":"offset-11_cqgv","offset-auto":"offset-auto_ZBrI","offset-xs-1":"offset-xs-1__ZrT","offset-xs-2":"offset-xs-2_WySR","offset-xs-3":"offset-xs-3_u9Tb","offset-xs-quarter":"offset-xs-quarter_Pd1o","offset-xs-4":"offset-xs-4_Bibg","offset-xs-third":"offset-xs-third_CeeW","offset-xs-5":"offset-xs-5_OgED","offset-xs-6":"offset-xs-6_ihSu","offset-xs-half":"offset-xs-half_Vrdz","offset-xs-7":"offset-xs-7_TtZQ","offset-xs-8":"offset-xs-8_Ftc2","offset-xs-9":"offset-xs-9_HptZ","offset-xs-10":"offset-xs-10_umjb","offset-xs-11":"offset-xs-11_Suix","offset-xs-auto":"offset-xs-auto_fxe8","offset-sm-1":"offset-sm-1_knSM","offset-sm-2":"offset-sm-2_zWxo","offset-sm-3":"offset-sm-3_oqp6","offset-sm-quarter":"offset-sm-quarter_Nav1","offset-sm-4":"offset-sm-4_EvUX","offset-sm-third":"offset-sm-third_tGgh","offset-sm-5":"offset-sm-5_raNi","offset-sm-6":"offset-sm-6_KTA8","offset-sm-half":"offset-sm-half_ab81","offset-sm-7":"offset-sm-7_duQl","offset-sm-8":"offset-sm-8_uRxp","offset-sm-9":"offset-sm-9_AqYl","offset-sm-10":"offset-sm-10_Wt6J","offset-sm-11":"offset-sm-11_yAYq","offset-sm-auto":"offset-sm-auto_FAp6","offset-md-1":"offset-md-1_OpgB","offset-md-2":"offset-md-2_U24n","offset-md-3":"offset-md-3_YxnQ","offset-md-quarter":"offset-md-quarter_y53T","offset-md-4":"offset-md-4_ZaOC","offset-md-third":"offset-md-third_HZWP","offset-md-5":"offset-md-5_KVFL","offset-md-6":"offset-md-6_bZvL","offset-md-half":"offset-md-half_yilA","offset-md-7":"offset-md-7_fs04","offset-md-8":"offset-md-8_QmYF","offset-md-9":"offset-md-9_QoVc","offset-md-10":"offset-md-10_OrE0","offset-md-11":"offset-md-11_reKz","offset-md-auto":"offset-md-auto_ETdh","offset-lg-1":"offset-lg-1_zi3j","offset-lg-2":"offset-lg-2_YgjU","offset-lg-3":"offset-lg-3_CHdw","offset-lg-quarter":"offset-lg-quarter_Chor","offset-lg-4":"offset-lg-4_NOCF","offset-lg-third":"offset-lg-third_LTbL","offset-lg-5":"offset-lg-5_dGzM","offset-lg-6":"offset-lg-6_kXXi","offset-lg-half":"offset-lg-half_vFHN","offset-lg-7":"offset-lg-7_jIth","offset-lg-8":"offset-lg-8_T0Jx","offset-lg-9":"offset-lg-9_mYmL","offset-lg-10":"offset-lg-10_clJ6","offset-lg-11":"offset-lg-11_zFW2","offset-lg-auto":"offset-lg-auto_W3q4","offset-xl-1":"offset-xl-1_pRWH","offset-xl-2":"offset-xl-2_FX3q","offset-xl-3":"offset-xl-3_P8xx","offset-xl-quarter":"offset-xl-quarter_RLTy","offset-xl-4":"offset-xl-4_n7Vy","offset-xl-third":"offset-xl-third_w0fc","offset-xl-5":"offset-xl-5_vC_8","offset-xl-6":"offset-xl-6_BvQ2","offset-xl-half":"offset-xl-half_HQ16","offset-xl-7":"offset-xl-7_m1bv","offset-xl-8":"offset-xl-8_FJ1u","offset-xl-9":"offset-xl-9_oAbC","offset-xl-10":"offset-xl-10_wwaH","offset-xl-11":"offset-xl-11_HpDF","offset-xl-auto":"offset-xl-auto_Dv5P"});

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
/* harmony default export */ const CharacterCounter_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--line-height-20":"1.125rem","--font-size-20":"0.875rem","--text-warning":"light-dark(#e62323, #eb4e4e)","--text-primary":"light-dark(#171717, #f2f2f2)","characterCounter":"characterCounter_Rd9H"});
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

/***/ 43660:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ $216918bed6669f72$export$f5c9f3c2c4054eec),
/* harmony export */   k: () => (/* binding */ $216918bed6669f72$export$2dc6166a7e65358c)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5933);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);







const $216918bed6669f72$export$2dc6166a7e65358c = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
let $216918bed6669f72$var$filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $216918bed6669f72$export$f5c9f3c2c4054eec = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function TextArea(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, $216918bed6669f72$export$2dc6166a7e65358c);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_2__/* .useHover */ .M)(props);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .useFocusRing */ .o)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useRenderProps */ .Sl)({
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
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("textarea", {
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_4__/* .mergeProps */ .v)($216918bed6669f72$var$filterHoverProps(props), focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
});



//# sourceMappingURL=TextArea.module.js.map


/***/ }),

/***/ 45644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ AccordionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var AccordionContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

/***/ }),

/***/ 48852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Save)
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
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
];
const Save = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("save", __iconNode);


//# sourceMappingURL=save.js.map


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

/***/ 56636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ LinkButton)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(20454);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var Link = __webpack_require__(73099);
;// ./packages/components/src/link-button/LinkButton.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const LinkButton_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--font-size-30":"1rem","--breakpoint-xs":"(max-width: 479px)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--button-border-secondary":"light-dark(light-dark(#143c50, #2e7ca5), #f2f2f2)","--text-on-color":"light-dark(#ffffff, #ffffff)","--button-background-primary-hover":"light-dark(#25607f, #25607f)","--button-background-primary-active":"light-dark(#2e7ca5, #143c50)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--button-background-disabled":"light-dark(#f2f2f2, #262626)","--text-disabled":"light-dark(#bfbfbf, #525252)","--text-tertiary":"light-dark(#143c50, #f2f2f2)","--border-tertiary":"light-dark(#143c50, #2e7ca5)","--button-background-secondary":"light-dark(#ffffff, #171717)","--button-background-secondary-hover":"light-dark(#e6e6e6, #212121)","--button-background-secondary-active":"light-dark(#d9d9d9, #262626)","--border-disabled":"light-dark(#bfbfbf, #525252)","--button-background-tertiary-hover":"light-dark(#e6e6e6, #212121)","--button-background-tertiary-active":"light-dark(#d9d9d9, #262626)","--button-background-danger":"light-dark(#e62323, #e62323)","--button-background-danger-hover":"light-dark(#bc1d1d, #bc1d1d)","--button-background-danger-active":"light-dark(#7d1313, #7d1313)","--white":"#ffffff","--icon-secondary":"light-dark(#525252, #a6a6a6)","--button-background-icon-hover":"light-dark(rgba(0 0 0 / 10%), rgba(255 255 255 / 10%))","--icon-tertiary":"light-dark(#143c50, #f2f2f2)","--size-50":"0.625rem","--size-100":"1.5rem","--size-70":"0.875rem","--size-80":"1rem","linkButton":"linkButton_DlJV","secondary":"secondary_aNB6","icon":"icon_g3pu","tertiary":"tertiary_tl3f","danger":"danger_qkvT","iconBtn":"iconBtn_Ngss","medium":"medium_St93","iconLeft":"iconLeft_r90N","fullwidth":"fullwidth_yUSG","button":"button_CzNs"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
var square_arrow_out_up_right = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.js
var arrow_left = __webpack_require__(90232);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/link-button/LinkButton.tsx
'use client';var _excluded=["children","variant","fullwidth","icon","iconPlacement","className","as","size"];/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */var LinkButton=function LinkButton(_ref){var children=_ref.children,variant=_ref.variant,fullwidth=_ref.fullwidth,IconComponent=_ref.icon,iconPlacement=_ref.iconPlacement,className=_ref.className,as=_ref.as,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||Link/* Link */.N;var Icon=function Icon(_ref2){var rest=Object.assign({},((0,objectDestructuringEmpty/* default */.A)(_ref2),_ref2));if(IconComponent)return/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,Object.assign({},rest));if(rest.target==='_blank')return/*#__PURE__*/(0,jsx_runtime.jsx)(square_arrow_out_up_right/* default */.A,Object.assign({},rest));if(iconPlacement==='left')return/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_left/* default */.A,Object.assign({},rest));return/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_right/* default */.A,Object.assign({},rest));};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,Object.assign({className:(0,clsx/* default */.A)(LinkButton_module.linkButton,variant==='primary'&&LinkButton_module.primary,variant==='secondary'&&LinkButton_module.secondary,variant==='tertiary'&&LinkButton_module.tertiary,variant==='danger'&&LinkButton_module.danger,variant==='icon'&&LinkButton_module.iconBtn,size==='medium'&&LinkButton_module.medium,fullwidth&&LinkButton_module.fullwidth,iconPlacement==='left'&&LinkButton_module.iconLeft,className)},rest,{children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{size:20,className:LinkButton_module.icon})]}));};

/***/ }),

/***/ 62119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_popover_mdx_17d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-popover-mdx-17d.json
const site_docs_components_popover_mdx_17d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/popover","title":"Popover","description":"Popover kan användas för att förklara en knapp eller annan interaktion när det inte går att få plats med informationen i knappen.","source":"@site/docs/components/popover.mdx","sourceDirName":"components","slug":"/components/popover","permalink":"/pr-preview/pr-767/components/popover","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Popover","description":"Popover kan användas för att förklara en knapp eller annan interaktion när det inte går att få plats med informationen i knappen.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(68713);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(28777);
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(93683);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/checkbox/CheckboxGroup.tsx + 3 modules
var CheckboxGroup = __webpack_require__(75394);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx + 3 modules
var Checkbox = __webpack_require__(8807);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx + 3 modules
var TextField = __webpack_require__(13332);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/save.js
var save = __webpack_require__(48852);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/laptop.js
var laptop = __webpack_require__(15117);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(84722);
;// ./node_modules/lucide-react/dist/esm/icons/user-cog.js
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2", key: "1nfge6" }],
  ["path", { d: "m14.305 16.53.923-.382", key: "1itpsq" }],
  ["path", { d: "m15.228 13.852-.923-.383", key: "eplpkm" }],
  ["path", { d: "m16.852 12.228-.383-.923", key: "13v3q0" }],
  ["path", { d: "m16.852 17.772-.383.924", key: "1i8mnm" }],
  ["path", { d: "m19.148 12.228.383-.923", key: "1q8j1v" }],
  ["path", { d: "m19.53 18.696-.382-.924", key: "vk1qj3" }],
  ["path", { d: "m20.772 13.852.924-.383", key: "n880s0" }],
  ["path", { d: "m20.772 16.148.924.383", key: "1g6xey" }],
  ["circle", { cx: "18", cy: "15", r: "3", key: "gjjjvw" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const UserCog = (0,createLucideIcon/* default */.A)("user-cog", __iconNode);


//# sourceMappingURL=user-cog.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.js
var arrow_left = __webpack_require__(90232);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up.js
var arrow_up = __webpack_require__(6632);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/Pressable.mjs
var Pressable = __webpack_require__(94752);
;// ./apps/docs/src/components/examples/popover/PopoverExamples.tsx
var PopoverExample=function PopoverExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",style:{display:'block'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon","aria-label":"Spara",children:/*#__PURE__*/(0,jsx_runtime.jsx)(save/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:"Spara"})]})});};var PopoverTextExample=function PopoverTextExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",style:{display:'block'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon","aria-label":"Din dator",children:/*#__PURE__*/(0,jsx_runtime.jsx)(laptop/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Popover/* Popover */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{children:"H\xE5rddiskutrymme"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{children:"Din dator har 150gb kvar i hemkatalogen."})]})]})});};var PopoverFormExample=function PopoverFormExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",style:{display:'block'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon","aria-label":"Tillg\xE4nglighetsinst\xE4llningar",children:/*#__PURE__*/(0,jsx_runtime.jsx)(UserCog,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(CheckboxGroup/* CheckboxGroup */.$,{description:"Justera inst\xE4llningar f\xF6r att f\xF6rb\xE4ttra din anv\xE4ndarupplevelse.",label:"Tillg\xE4nglighetsinst\xE4llningar",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{value:"compact",children:"Kompakt l\xE4ge"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{value:"animations",children:"Animationer"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{value:"contrast",children:"H\xF6gkontrastl\xE4ge"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{value:"dark-mode",children:"M\xF6rkt l\xE4ge"})]})})]})});};var PopoverPlacement=function PopoverPlacement(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"card",style:{display:'flex',alignItems:'center',flexDirection:'row',gap:'1rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_left/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{placement:"left",children:"Popover visas till v\xE4nster om trigger-elementet"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_up/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{placement:"top",children:"Popover visas p\xE5 ovansidan av trigger-elementet"})]})]});};var ControlledPopover=function ControlledPopover(){var _React$useState=react.useState(false),isOpen=_React$useState[0],setOpen=_React$useState[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{isOpen:isOpen,onOpenChange:setOpen,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{children:"Klicka p\xE5 mig"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:"Enligt botanisk definition r\xE4knas bananer faktiskt som b\xE4r, medan jordgubbar inte g\xF6r det."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("pre",{children:["Popover ",isOpen?'visas':'visas inte']})]});};var CustomTriggerPopover=function CustomTriggerPopover(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Pressable/* Pressable */.o,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{role:"button",children:"Trigger"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:"Med hj\xE4lp av Pressable kan vilket element som helst bli en trigger!"})]});};var PopoverContentExample=function PopoverContentExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"E-post",description:"Ange din e-postadress f\xF6r att f\xE5 nyhetsbrev.",popover:{children:'Vi kommer att skicka nyhetsbrev till den här adressen.'}})});};
;// ./apps/docs/docs/components/popover.mdx


const frontMatter = {
	title: 'Popover',
	description: 'Popover kan användas för att förklara en knapp eller annan interaktion när det inte går att få plats med informationen i knappen.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};






const toc = [{
  "value": "Funktioner",
  "id": "funktioner",
  "level": 2
}, {
  "value": "Layout",
  "id": "layout",
  "level": 3
}, {
  "value": "Placement",
  "id": "placement",
  "level": 3
}, {
  "value": "Controlled state",
  "id": "controlled-state",
  "level": 3
}, {
  "value": "Valfritt element som Trigger",
  "id": "valfritt-element-som-trigger",
  "level": 3
}, {
  "value": "Med inputfält",
  "id": "med-inputfält",
  "level": 3
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Popover",
  "id": "popover",
  "level": 3
}, {
  "value": "DialogTrigger",
  "id": "dialogtrigger",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: "Popover",
      friendlyName: "Hjälptext, hjälpinnehåll"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Popover kan användas för att förklara en knapp eller annan interaktion när det inte går att få plats med informationen i knappen. Till skillnad från ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../tooltip",
        children: "Tooltip"
      }), " så triggas Popover på klick istället för hover och är öppen tills användare klickar bort från den. Popover kan även fyllas med vad som helst till skillnad från Tooltip som bara tar en kort hjälptext."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Popover, DialogTrigger, Button } from '@midas-ds/components'\nimport { Save } from 'lucide-react'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<DialogTrigger>\n  <Button\n    variant='icon'\n    aria-label='Spara'\n  >\n    <Save />\n  </Button>\n  <Popover>Spara</Popover>\n</DialogTrigger>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PopoverExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "funktioner",
      children: "Funktioner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Popover är byggd på ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/Popover.html",
        children: "React Aria Popover"
      }), " och med det\nföljer inbyggd tillgänglighet som till exempel sammankoppling mellan trigger och popover. För mer detaljerad\ndokumentation hänvisas till React Aria."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layout",
      children: "Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Till skillad från Tooltip så kan Popover innehålla mer än bara en kort text. Innehållet kan t.ex förtydligas med rubriknivåer, bekräftelseknappar eller andra interaktiva komponenter."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<DialogTrigger>\n  <Button\n    variant='icon'\n    aria-label='Din dator'\n  >\n    <Laptop />\n  </Button>\n  <Popover>\n    <Heading>Hårddiskutrymme</Heading>\n    <Text>Din dator har 150gb kvar i hemkatalogen.</Text>\n  </Popover>\n</DialogTrigger>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PopoverTextExample, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<DialogTrigger>\n  <Button\n    variant='icon'\n    aria-label='Tillgänglighetsinställningar'\n  >\n    <UserCog />\n  </Button>\n  <Popover>\n    <CheckboxGroup\n      description='Justera inställningar för att förbättra din användarupplevelse.'\n      label='Tillgänglighetsinställningar'\n    >\n      <Checkbox value='compact'>Kompakt läge</Checkbox>\n      <Checkbox value='animations'>Animationer</Checkbox>\n      <Checkbox value='contrast'>Högkontrastläge</Checkbox>\n      <Checkbox value='dark-mode'>Mörkt läge</Checkbox>\n    </CheckboxGroup>\n  </Popover>\n</DialogTrigger>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PopoverFormExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "placement",
      children: "Placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Placering av Popover i förhållande till dess trigger-element kan justeras med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "placement"
      }), " (i mån av plats)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<DialogTrigger>\n  <Button>\n    <ArrowLeft />\n  </Button>\n  <Popover placement='left'>\n    Popover visas till vänster om trigger-elementet\n  </Popover>\n</DialogTrigger>\n<DialogTrigger>\n  <Button>\n    <ArrowUp />\n  </Button>\n  <Popover placement='top'>\n    Popover visas på ovansidan av trigger-elementet\n  </Popover>\n</DialogTrigger>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PopoverPlacement, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "controlled-state",
      children: "Controlled state"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "export const ControlledPopover = () => {\n  const [isOpen, setOpen] = React.useState(false)\n\n  return (\n    <>\n      <DialogTrigger\n        isOpen={isOpen}\n        onOpenChange={setOpen}\n        delay={500}\n      >\n        <Button>Klicka på mig</Button>\n        <Popover>Meddelande</Popover>\n      </DialogTrigger>\n      <pre>Popover {isOpen ? 'visas' : 'visas inte'}</pre>\n    </>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(ControlledPopover, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "valfritt-element-som-trigger",
      children: "Valfritt element som Trigger"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DialogTrigger fungerar direkt med alla ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "focusable"
      }), " React Aria-komponenter (t.ex. Button, Link, etc.). Anpassade trigger-element,\nsåsom tredjepartskomponenter och andra DOM-element, stöds också genom att de omsluts med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Pressable>"
      }), "-komponenten."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Pressable } from 'react-aria-components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<DialogTrigger>\n  <Pressable>\n    <span role='button'>Trigger</span>\n  </Pressable>\n  <Popover>Med hjälp av Pressable kan vilket element som helst bli en trigger!</Popover>\n</DialogTrigger>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        display: 'block'
      },
      children: (0,jsx_runtime.jsx)(CustomTriggerPopover, {})
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Observera att element under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Pressable>"
      }), " måste ha en ARIA-roll eller använda ett lämpligt semantiskt HTML-element\nså att skärmläsare kan läsa upp innehållet i verktygstipset. Detta gäller bara element som inte redan är ", (0,jsx_runtime.jsx)(_components.em, {
        children: "focusable"
      }), "\neller ", (0,jsx_runtime.jsx)(_components.em, {
        children: "pressable"
      }), ". Se ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/Popover.html#custom-trigger",
        children: "React Aria Popover Custom trigger"
      }), "\nför referens."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "med-inputfält",
      children: "Med inputfält"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Popover är inbyggt i samtliga inputfält i Midas. Det innebär att du kan använda Popover för att ge mer information om vad går att göra med label eller description. Använd propertyn ", (0,jsx_runtime.jsx)(_components.code, {
        children: "popover"
      }), " på inputfältet för att visa en Popover med mer information på ett enhetligt sätt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { TextField } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<TextField\n  label='E-post'\n  description='Ange din e-postadress för att få nyhetsbrev.'\n  popover={{\n    children: 'Vi kommer att skicka nyhetsbrev till den här adressen.',\n  }}\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PopoverContentExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "I första hand skall elementet vara tydligt nog så användaren förstår innebörden. Popover är till för en design där detta\ninte är möjligt och vi måste gömma undan informationen."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Popover kan också användas för att berätta mer information än vad som framkommer visuellt på knappen."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eftersom Popover kan husera vilka komponenter som helst kan det vara ett bra alternativ till Modal när det inte är mer komplext än t.ex en bekräftelseruta för fortsätt eller avbryt."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "popover",
      children: "Popover"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "Popover"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dialogtrigger",
      children: "DialogTrigger"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "DialogTrigger",
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
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

/***/ 68713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ PropTable)
});

// UNUSED EXPORTS: DisplayCompositeTypes

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useGlobalData.js
var useGlobalData = __webpack_require__(66588);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(28777);
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx + 1 modules
var Accordion = __webpack_require__(11046);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx + 1 modules
var AccordionItem = __webpack_require__(93777);
;// ./apps/docs/src/css/propstable.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const propstable_module = ({"accordion":"accordion_M8EQ","propsGridTable":"propsGridTable_luj3","popover":"popover_gEf7","arrow":"arrow_kUCF"});
// EXTERNAL MODULE: ./node_modules/react-markdown/lib/index.js + 138 modules
var lib = __webpack_require__(61522);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/Lowlight.js + 2 modules
var Lowlight = __webpack_require__(80556);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/common.js + 38 modules
var common = __webpack_require__(48004);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/Pressable.mjs
var Pressable = __webpack_require__(94752);
;// ./apps/docs/src/utils/jsdocLinkToMarkdown.ts
var jsdocLinkToMarkdown=function jsdocLinkToMarkdown(jsdocLink){if(!jsdocLink.includes('@link')){return jsdocLink;}var textBefore=jsdocLink.substring(0,jsdocLink.indexOf('{@link')).replace(/@\S*/g,'');var url=jsdocLink.substring(jsdocLink.indexOf('http'),jsdocLink.lastIndexOf('/'));var linkText=jsdocLink.substring(jsdocLink.lastIndexOf('/')+2,jsdocLink.lastIndexOf('}'));return textBefore+". See ["+linkText+"]("+url+").";};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/PropsTable.tsx
var DisplayCompositeTypes=function DisplayCompositeTypes(_ref){var props=_ref.props;switch(props.type.name){case'enum':{return/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Pressable/* Pressable */.o,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{role:"button",style:{cursor:'pointer'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props.type.raw,inline:true,language:"typescript",markers:[]})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"hljs-code",children:props.type.value.map(function(r,i){return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{children:[i===0?' ':' | ',/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:r.value.replace(/"/g,"'"),inline:true,language:"typescript",markers:[]})]},""+r.value+i);})})})]});}default:return/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props.type.name,inline:true,language:"typescript",markers:[]});}};var PropTable=function PropTable(_ref2){var _ComponentsDocs$find;var name=_ref2.name,_ref2$defaultOpen=_ref2.defaultOpen,defaultOpen=_ref2$defaultOpen===void 0?true:_ref2$defaultOpen;var globalData=(0,useGlobalData/* default */.Ay)();var ComponentsDocs=globalData['docusaurus-plugin-react-docgen-typescript']["default"];var props=(_ComponentsDocs$find=ComponentsDocs.find(function(componentDoc){return componentDoc.displayName===name;}))==null?void 0:_ComponentsDocs$find.props;if(!props){return null;}var _Object$entries$reduc=Object.entries(props).reduce(function(acc,_ref3){var key=_ref3[0],value=_ref3[1];if(key.startsWith('on')){acc.events[key]=value;}else if(key.startsWith('aria-')){acc.accessibility[key]=value;}else{acc.rest[key]=value;}return acc;},{events:{},accessibility:{},rest:{}}),events=_Object$entries$reduc.events,accessibility=_Object$entries$reduc.accessibility,rest=_Object$entries$reduc.rest;var Grid=function Grid(_ref4){var propGroup=_ref4.propGroup,_ref4$showDefault=_ref4.showDefault,showDefault=_ref4$showDefault===void 0?true:_ref4$showDefault;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:propstable_module.propsGridTable,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Name"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Type"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:showDefault&&'Default'}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Description"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{children:Object.keys(propGroup).map(function(key){return/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("td",{"data-title":"Name",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:key,inline:true,language:"typescript",markers:[]}),props[key].required&&' *']}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Type",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DisplayCompositeTypes,{props:props[key]})}),showDefault?/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Default",children:props[key].defaultValue?/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props[key].defaultValue.value,inline:true,language:"typescript",markers:[]}):'-'}):/*#__PURE__*/(0,jsx_runtime.jsx)("td",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Description",children:/*#__PURE__*/(0,jsx_runtime.jsx)(lib/* Markdown */.oz,{children:jsdocLinkToMarkdown(props[key].description)})})]},key);})})]})});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Accordion/* Accordion */.n,{className:propstable_module.accordion,allowsMultipleExpanded:true,defaultExpandedKeys:defaultOpen?['props']:[],children:[Object.getOwnPropertyNames(rest).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"props",title:"Props",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:rest})}),Object.getOwnPropertyNames(events).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"events",title:"Events",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:events,showDefault:false})}),Object.getOwnPropertyNames(accessibility).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"accessibility",title:"Tillg\xE4nglighet",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:accessibility,showDefault:false})})]});};

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
/* harmony default export */ const LabelWrapper_module = ({"tokens":"\"../theme/tokens.css\"","--support-border-info":"light-dark(#0066cc, #0066cc)","labelPopover":"labelPopover_QNhJ","labelPopoverTrigger":"labelPopoverTrigger_iTpE"});
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--border-disabled":"light-dark(#bfbfbf, #525252)","--field-disabled":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--support-border-warning":"light-dark(#e62323, #e62323)","--border-primary":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--font-family":"\"Inter\", sans-serif","--text-disabled":"light-dark(#bfbfbf, #525252)","--z-index-base":"1","--z-index-above":"10","--size-130":"2.5rem","--size-150":"3rem","textField":"textField_IarX","bottomError":"bottomError_XU77","textArea":"textArea_M6yF","wrap":"wrap_ljmz","medium":"medium_jalb","input":"input_g6A6","passwordText":"passwordText_gBIs","passwordButton":"passwordButton_kacG"});

/***/ }),

/***/ 74351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38739);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","isContained","removeMargins"];/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/grid}
 */var Grid=function Grid(_ref){var children=_ref.children,_ref$isContained=_ref.isContained,isContained=_ref$isContained===void 0?false:_ref$isContained,_ref$removeMargins=_ref.removeMargins,removeMargins=_ref$removeMargins===void 0?false:_ref$removeMargins,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({},rest,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.container,isContained&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.contained,removeMargins&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.removeMargins,rest.className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.flex,children:children})}));};

/***/ }),

/***/ 75394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ CheckboxGroup)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/checkbox/dist/useCheckboxGroup.mjs
var useCheckboxGroup = __webpack_require__(91936);
// EXTERNAL MODULE: ./node_modules/@react-stately/checkbox/dist/useCheckboxGroupState.mjs
var useCheckboxGroupState = __webpack_require__(34650);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(34704);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx + 3 modules
var Checkbox = __webpack_require__(8807);
;// ./packages/components/src/checkbox/useSelectAll.ts
var useSelectAll=function useSelectAll(children,_ref){var selectedItems=_ref.value;var checkboxes=react.Children.toArray(children).filter(function(child){return/*#__PURE__*/react.isValidElement(child)&&child.type===Checkbox/* Checkbox */.S;});var numberOfCheckboxes=react.Children.count(checkboxes);var checkboxValues=react.Children.toArray(children).filter(function(child){return/*#__PURE__*/react.isValidElement(child);}).filter(function(child){return!!child&&child.type===Checkbox/* Checkbox */.S;}).map(function(child){return child.props.value;});var noneSelected=selectedItems.length===0;var allSelected=selectedItems.length===numberOfCheckboxes;var someSelected=!noneSelected&&!allSelected;return{allSelected:allSelected,someSelected:someSelected,checkboxValues:checkboxValues};};
// EXTERNAL MODULE: ./packages/components/src/checkbox/context.ts
var context = __webpack_require__(20011);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var field_error_FieldError = __webpack_require__(19060);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/checkbox/CheckboxGroupFieldError.tsx
var CheckboxGroupFieldError=function CheckboxGroupFieldError(_ref){var state=_ref.state,errorMessage=_ref.errorMessage;return/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldErrorContext */.C.Provider,{value:state.displayValidation,children:/*#__PURE__*/(0,jsx_runtime.jsx)(field_error_FieldError/* FieldError */.b,{children:errorMessage})});};
;// ./packages/components/src/checkbox/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"selectAll":"Select all"},"sv":{"selectAll":"Välj alla"}}');
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.module.css
var Checkbox_module = __webpack_require__(16025);
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
;// ./packages/components/src/checkbox/CheckboxGroup.tsx
function CheckboxGroup(props){var state=(0,useCheckboxGroupState/* useCheckboxGroupState */.h)(props);var stringFormatter=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var _useCheckboxGroup=(0,useCheckboxGroup/* useCheckboxGroup */.M)(props,state),groupProps=_useCheckboxGroup.groupProps,labelProps=_useCheckboxGroup.labelProps,descriptionProps=_useCheckboxGroup.descriptionProps;var _useSelectAll=useSelectAll(props.children,state),allSelected=_useSelectAll.allSelected,someSelected=_useSelectAll.someSelected,checkboxValues=_useSelectAll.checkboxValues;var handleChange=function handleChange(checked){state.setValue(checked?checkboxValues:[]);};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({},groupProps,{className:Checkbox_module/* default */.A.checkboxGroup,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapper/* LabelWrapper */.cR,{popover:props.popover,children:props.label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,Object.assign({},labelProps,{children:props.label}))}),props.description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,Object.assign({slot:"description"},descriptionProps,{children:props.description})),props.errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxGroupFieldError,Object.assign({},props,{state:state})),props.showSelectAll&&/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{isSelected:allSelected,isIndeterminate:someSelected,onChange:handleChange,children:props.selectAllLabel||stringFormatter.format('selectAll')}),/*#__PURE__*/(0,jsx_runtime.jsx)(context/* CheckboxGroupContext */.I.Provider,{value:state,children:props.children}),props.errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxGroupFieldError,Object.assign({},props,{state:state}))]}));}

/***/ }),

/***/ 79950:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $3985021b0ad6602f$export$37fb8590cf2c088c),
/* harmony export */   p: () => (/* binding */ $3985021b0ad6602f$export$f5b8910cec6cf069)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5933);
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75127);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32217);
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



const $3985021b0ad6602f$export$37fb8590cf2c088c = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
let $3985021b0ad6602f$var$filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $3985021b0ad6602f$export$f5b8910cec6cf069 = /*#__PURE__*/ (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__/* .createHideableComponent */ .U7)(function Input(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useContextProps */ .JT)(props, ref, $3985021b0ad6602f$export$37fb8590cf2c088c);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .useHover */ .M)(props);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria__WEBPACK_IMPORTED_MODULE_4__/* .useFocusRing */ .o)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useRenderProps */ .Sl)({
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
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("input", {
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_5__/* .mergeProps */ .v)($3985021b0ad6602f$var$filterHoverProps(props), focusProps, hoverProps),
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

/***/ 86707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--button-background-primary-hover":"light-dark(#25607f, #25607f)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--icon-primary":"light-dark(#171717, #f2f2f2)","--button-background-primary-active":"light-dark(#2e7ca5, #143c50)","--button-background-secondary":"light-dark(#ffffff, #171717)","--font-size-30":"1rem","--text-on-color":"light-dark(#ffffff, #ffffff)","--button-border-secondary":"light-dark(light-dark(#143c50, #2e7ca5), #f2f2f2)","--button-background-secondary-hover":"light-dark(#e6e6e6, #212121)","--button-background-disabled":"light-dark(#f2f2f2, #262626)","--white":"#ffffff","--border-disabled":"light-dark(#bfbfbf, #525252)","--button-background-secondary-active":"light-dark(#d9d9d9, #262626)","--button-background-tertiary-hover":"light-dark(#e6e6e6, #212121)","--button-background-tertiary-active":"light-dark(#d9d9d9, #262626)","--text-tertiary":"light-dark(#143c50, #f2f2f2)","--button-background-danger":"light-dark(#e62323, #e62323)","--button-background-danger-hover":"light-dark(#bc1d1d, #bc1d1d)","--text-disabled":"light-dark(#bfbfbf, #525252)","--button-background-danger-active":"light-dark(#7d1313, #7d1313)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--button-background-icon-hover":"light-dark(rgba(0 0 0 / 10%), rgba(255 255 255 / 10%))","--button-background-icon-active":"light-dark(rgba(0 0 0 / 20%), rgba(255 255 255 / 20%))","--size-50":"0.625rem","--size-70":"0.875rem","--size-80":"1rem","--size-100":"1.5rem","--size-130":"2.5rem","--size-150":"3rem","--line-height-30":"1.25rem","button":"button_RcXK","secondary":"secondary_h5I_","tertiary":"tertiary_xq7E","iconBtn":"iconBtn__8qK","medium":"medium_uqO9","danger":"danger_iFp6","iconRight":"iconRight_iW1e","fullwidth":"fullwidth_WWNT","primary":"primary_JNNk"});

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

/***/ 93574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ GridItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38739);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","size","offset"];/**
 * Columns based on display: flex;
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */var GridItem=function GridItem(_ref){var children=_ref.children,size=_ref.size,offset=_ref.offset,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var offsetClass=offset?"offset-"+offset:'';var sizeClasses=getSizeClasses(size);var offsetClasses=getOffsetClasses(offset);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({},props,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.col,_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[offsetClass],sizeClasses.map(function(cls){return _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[cls];}),offsetClasses.map(function(cls){return _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[cls];}),props.className),children:children}));};var getSizeClasses=function getSizeClasses(size){if(!size)return[];if(typeof size==='object'){return Object.entries(size).map(function(_ref2){var breakpoint=_ref2[0],value=_ref2[1];return breakpoint==='xs'?"col-"+value:"col-"+breakpoint+"-"+value;});}return["col-"+size];};var getOffsetClasses=function getOffsetClasses(offset){if(!offset)return[];if(typeof offset==='object'){return Object.entries(offset).map(function(_ref3){var breakpoint=_ref3[0],value=_ref3[1];return breakpoint==='xs'?"offset-"+value:"offset-"+breakpoint+"-"+value;});}return["offset-"+offset];};

/***/ }),

/***/ 93683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ Heading)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Heading.mjs
var dist_Heading = __webpack_require__(57936);
;// ./packages/components/src/heading/Heading.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Heading_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--font-size-30":"1rem","--font-size-40":"1.125rem","--font-size-50":"1.25rem","--font-size-90":"2.25rem","--line-height-50":"1.5rem","--line-height-60":"1.75rem","--line-height-70":"2rem","h1":"h1_fQIH","h2":"h2_fBmz","h3":"h3_xOF5","h4":"h4_AF6p","h5":"h5_slY8","h6":"h6_loS0"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/heading/Heading.tsx
var _excluded=["children","className","isExpressive","level","elementType"];var Heading=function Heading(_ref){var children=_ref.children,className=_ref.className,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$level=_ref.level,level=_ref$level===void 0?3:_ref$level,elementType=_ref.elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var semanticLevel=elementType&&parseInt(elementType.split('h')[1]);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Heading/* Heading */.D,Object.assign({level:semanticLevel||level,className:(0,clsx/* default */.A)([Heading_module.h1,Heading_module.h2,Heading_module.h3,Heading_module.h4,Heading_module.h5,Heading_module.h6][level-1],className)},isExpressive&&{'data-expressive':true},rest,{children:children}));};

/***/ }),

/***/ 93777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccordionItem)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/common/icon-map.ts
var icon_map = __webpack_require__(7344);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(48569);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/accordion/AccordionItem.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const AccordionItem_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--layer-01":"light-dark(#f2f2f2, #262626)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--normal-transition":"300ms","--text-primary":"light-dark(#171717, #f2f2f2)","--fast-transition":"250ms","--border-secondary":"light-dark(#737373, #8c8c8c)","--support-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--support-border-success":"light-dark(#008d3c, #008d3c)","--support-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--support-border-warning":"light-dark(#e62323, #e62323)","--icon-success":"light-dark(#008d3c, #008d3c)","--icon-warning":"light-dark(#e62323, #e62323)","--support-background-success-hover":"light-dark(#bae5c5, light-dark(#e6e6e6, #333333))","--support-background-warning-hover":"light-dark(#fcc8c8, light-dark(#e6e6e6, #333333))","--border-disabled":"light-dark(#bfbfbf, #525252)","--text-disabled":"light-dark(#bfbfbf, #525252)","--layer-02":"light-dark(#ffffff, #383838)","--background":"light-dark(#ffffff, #171717)","--support-background-info":"light-dark(#eaf2f6, light-dark(#f2f2f2, #262626))","--support-border-info":"light-dark(#0066cc, #0066cc)","--icon-info":"light-dark(#0066cc, #0066cc)","--support-background-info-hover":"light-dark(#d5e5ed, light-dark(#e6e6e6, #333333))","--support-background-important":"light-dark(#fff8e1, light-dark(#f2f2f2, #262626))","--support-border-important":"light-dark(#fdb813, #fdb813)","--icon-important":"light-dark(#fdb813, #fdb813)","--support-background-important-hover":"light-dark(#FFEBA8, light-dark(#e6e6e6, #333333))","item":"item_VttG","contained":"contained_ub98","success":"success_cpFV","warning":"warning_NxFE","info":"info_suK1","important":"important_n_K6","triggerButton":"triggerButton_En7k","triggerText":"triggerText_VvwO","trigger":"trigger_dCCq","triggerMainContent":"triggerMainContent_WoSV","chevronIcon":"chevronIcon_kSND","statusIcon":"statusIcon_DtWQ","panel":"panel_RCRU","content":"content_EuZw","hasBackground":"hasBackground_E4qK","header":"header_kp5y"});
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(93683);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(45644);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/accordion/AccordionItem.tsx
var _excluded=["title","children","className","headingLevel","type","hasBackground","isContained"];var AccordionItem=function AccordionItem(_ref){var _ref2;var title=_ref.title,children=_ref.children,className=_ref.className,_ref$headingLevel=_ref.headingLevel,headingLevel=_ref$headingLevel===void 0?'h2':_ref$headingLevel,type=_ref.type,_ref$hasBackground=_ref.hasBackground,hasBackground=_ref$hasBackground===void 0?true:_ref$hasBackground,isContainedFromProp=_ref.isContained,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var context=(0,react.useContext)(AccordionContext/* AccordionContext */.C);var isContained=(_ref2=isContainedFromProp!=null?isContainedFromProp:context==null?void 0:context.isContained)!=null?_ref2:false;var titleIsReactNode=typeof title==='object';(0,react.useEffect)(function(){if(type&&!isContained){console.warn("AccordionItem: When 'type' is set, it is recommended to also set 'isContained' to true for visual consistency.");}},[type,isContained]);var Icon=type?icon_map/* iconMap */.K[type]:null;var renderedIcon=Icon?/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{size:20,className:AccordionItem_module.statusIcon}):null;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Disclosure/* Disclosure */.EN,Object.assign({},props,{className:(0,clsx/* default */.A)(AccordionItem_module.item,type&&AccordionItem_module[type],isContained&&AccordionItem_module.contained,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:AccordionItem_module.trigger,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* Button */.$,{className:AccordionItem_module.triggerButton,slot:"trigger",variant:"icon",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20,className:AccordionItem_module.chevronIcon}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:AccordionItem_module.triggerMainContent,children:titleIsReactNode?title:/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{level:3,elementType:headingLevel,className:AccordionItem_module.triggerText,children:title})}),renderedIcon]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Disclosure/* DisclosurePanel */.kS,{className:AccordionItem_module.panel,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(AccordionItem_module.content,hasBackground&&AccordionItem_module.hasBackground),children:children})})]}));};

/***/ })

}]);