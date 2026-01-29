"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2017],{

/***/ 8807
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/minus.js
var minus = __webpack_require__(86241);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(45773);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.module.css
var Checkbox_module = __webpack_require__(16025);
// EXTERNAL MODULE: ./packages/theme/src/index.ts + 3 modules
var src = __webpack_require__(17366);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/checkbox/CheckboxInner.tsx
var CheckboxInner=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){var _props$hoverResult=props.hoverResult,hoverProps=_props$hoverResult.hoverProps,isHovered=_props$hoverResult.isHovered;var _props$pressResult=props.pressResult,pressProps=_props$pressResult.pressProps,isPressed=_props$pressResult.isPressed;var _props$focusRingAria=props.focusRingAria,isFocused=_props$focusRingAria.isFocused,isFocusVisible=_props$focusRingAria.isFocusVisible,focusProps=_props$focusRingAria.focusProps;return/*#__PURE__*/(0,jsx_runtime.jsxs)("label",Object.assign({ref:ref},(0,mergeProps/* mergeProps */.v)(hoverProps,pressProps,props.labelProps),{slot:props.slot||undefined,className:(0,clsx/* clsx */.$)(Checkbox_module/* default */.A.checkbox,props.className),"data-hovered":isHovered||undefined,"data-selected":props.isSelected||undefined,"data-indeterminate":props.isIndeterminate||undefined,"data-pressed":isPressed||undefined,"data-disabled":props.isDisabled||undefined,"data-readonly":props.isReadOnly||undefined,"data-invalid":props.isInvalid||undefined,"data-focused":isFocused||undefined,"data-focus-visible":isFocusVisible||undefined,"data-required":props.isRequired||undefined,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* clsx */.$)(Checkbox_module/* default */.A.checkboxInner),children:props.isIndeterminate?/*#__PURE__*/(0,jsx_runtime.jsx)(minus/* default */.A,{size:14,color:src/* variables.iconOnColor */.E.w1t}):/*#__PURE__*/(0,jsx_runtime.jsx)(check/* default */.A,{size:14,color:src/* variables.iconOnColor */.E.w1t})}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("input",Object.assign({},(0,mergeProps/* mergeProps */.v)(props.inputProps,focusProps),{ref:props.inputRef}))}),props.children]}));});CheckboxInner.displayName='CheckboxInner';
;// ./packages/components/src/checkbox/CheckboxGroupItem.tsx
var CheckBoxGroupItem=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){var checkboxGroupItem=(0,useCheckboxGroupItem/* useCheckboxGroupItem */.B)(Object.assign({},props,{value:props.value||''}),props.state,props.inputRef);return/*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxInner,Object.assign({},props,checkboxGroupItem,{ref:ref}));});CheckBoxGroupItem.displayName='CheckBoxGroupItem';
// EXTERNAL MODULE: ./node_modules/@react-aria/checkbox/dist/useCheckbox.mjs + 1 modules
var useCheckbox = __webpack_require__(58044);
// EXTERNAL MODULE: ./node_modules/@react-stately/toggle/dist/useToggleState.mjs
var useToggleState = __webpack_require__(51623);
;// ./packages/components/src/checkbox/SingleCheckbox.tsx
var SingleCheckbox=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){var item=(0,useCheckbox/* useCheckbox */.v)(props,(0,useToggleState/* useToggleState */.H)(props),props.inputRef);return/*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxInner,Object.assign({},props,item,{ref:ref}));});SingleCheckbox.displayName='SingleCheckbox';
;// ./packages/components/src/checkbox/Checkbox.tsx
var Checkbox=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){var _ref,_props$validationBeha;;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,RSPContexts/* CheckboxContext */.BP);props=_useContextProps[0];ref=_useContextProps[1];var formProps=(0,utils/* useSlottedContext */.CC)(Form/* FormContext */.c);var validationBehavior=(_ref=(_props$validationBeha=props.validationBehavior)!=null?_props$validationBeha:formProps==null?void 0:formProps.validationBehavior)!=null?_ref:'native';var state=(0,react.useContext)(context/* CheckboxGroupContext */.I);var inputRef=(0,react.useRef)(null);var hoverResult=(0,useHover/* useHover */.M)(props);var pressResult=(0,usePress/* usePress */.d)({ref:ref,isDisabled:props.isDisabled});var focusRingAria=(0,useFocusRing/* useFocusRing */.o)();if(state){return/*#__PURE__*/(0,jsx_runtime.jsx)(CheckBoxGroupItem,Object.assign({},props,{state:state,inputRef:inputRef,hoverResult:hoverResult,pressResult:pressResult,focusRingAria:focusRingAria,validationBehavior:validationBehavior}));}return/*#__PURE__*/(0,jsx_runtime.jsx)(SingleCheckbox,Object.assign({},props,{inputRef:inputRef,hoverResult:hoverResult,pressResult:pressResult,focusRingAria:focusRingAria,validationBehavior:validationBehavior}));});Checkbox.displayName='Checkbox';

/***/ },

/***/ 11046
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ Accordion)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/accordion/Accordion.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Accordion_module = ({"root":"root_dwc1","contained":"contained_snuo","triggerButton":"triggerButton_v7ly"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(48569);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(45644);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/accordion/Accordion.tsx
'use client';var _excluded=["children","className","isContained","size"];/**
 * @deprecated since v 16.4.1 please use AccordionProps instead
 *//**
 * Accordions help reduce visual clutter on a page by organizing content into collapsible sections.
 */var Accordion=function Accordion(_ref){var children=_ref.children,className=_ref.className,isContained=_ref.isContained,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionContext/* AccordionContext */.C.Provider,{value:{isContained:isContained,size:size},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Disclosure/* DisclosureGroup */.Tw,Object.assign({className:(0,clsx/* default */.A)(Accordion_module.root,isContained?Accordion_module.contained:Accordion_module.uncontained,className)},props,{children:children}))});};

/***/ },

/***/ 13225
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ComponentHeader)
/* harmony export */ });
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74351);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56636);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93574);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42350);
/* harmony import */ var _site_src_components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75575);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74848);
/* eslint-disable @nx/enforce-module-boundaries */var ComponentHeader=function ComponentHeader(_ref){var name=_ref.name,friendlyName=_ref.friendlyName,overrideHeadlessLink=_ref.overrideHeadlessLink,overrideHeadlessLinkTitle=_ref.overrideHeadlessLinkTitle;var baseUrl=_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay;var componentPath="?path=/docs/components-"+name.toLowerCase()+"--docs";var storybookHost= false?0:baseUrl('/storybook');var storybookLink=storybookHost+"/"+componentPath;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section",{className:"component-header",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_0__/* .Grid */ .x,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .GridItem */ .E,{size:"auto",className:"friendlyName",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_1__/* .LinkButton */ .z,{href:storybookLink,variant:"tertiary",icon:_site_src_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .EmptyIcon */ .F,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_site_src_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .StorybookIcon */ .q,{size:24,color:"#FF4785"}),"Storybook"]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_1__/* .LinkButton */ .z,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,iconPlacement:"left",children:overrideHeadlessLinkTitle?overrideHeadlessLinkTitle:'React Aria'})})]})});};

/***/ },

/***/ 13332
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(73413);
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
var PasswordField=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,Input/* InputContext */.E);props=_useContextProps[0];ref=_useContextProps[1];var _useState=(0,react.useState)(false),showPassword=_useState[0],setShowPassword=_useState[1];var handlePress=function handlePress(){return setShowPassword(function(previousValue){return!previousValue;});};var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showPassword&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module/* default */.A.passwordText,children:props.value}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"tertiary",onPress:handlePress,className:TextField_module/* default */.A.passwordButton,children:showPassword?strings.format('hide'):strings.format('show')})]});});PasswordField.displayName='PasswordField';
;// ./packages/components/src/textfield/Input.tsx
var _excluded=["skipContext"];var Input_Input=/*#__PURE__*/(0,react.forwardRef)(function(_ref,localRef){var _ref$skipContext=_ref.skipContext,skipContext=_ref$skipContext===void 0?false:_ref$skipContext,localProps=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _useContextProps=(0,utils/* useContextProps */.JT)(localProps,localRef,Input/* InputContext */.E),contextProps=_useContextProps[0],contextRef=_useContextProps[1];var ref=skipContext?localRef:contextRef;var props=skipContext?localProps:contextProps;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module/* default */.A.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,Object.assign({},props,{ref:ref,className:(0,clsx/* default */.A)(TextField_module/* default */.A.input,props.className)})),props.type==='password'&&/*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField,Object.assign({},props))]});});Input_Input.displayName='Input';
;// ./packages/components/src/textfield/TextField.tsx
'use client';var TextField_excluded=["className","list","type","min","max","form"];var TextField=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var className=_ref.className,list=_ref.list,type=_ref.type,min=_ref.min,max=_ref.max,form=_ref.form,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,TextField_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(TextFieldBase/* TextFieldBase */.J,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_Input,{className:(0,clsx/* default */.A)(className),form:form,list:list,min:min,max:max,ref:ref,type:type,skipContext:true})}));});TextField.displayName='TextField';

/***/ },

/***/ 16025
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"checkboxInner":"checkboxInner_Nam1","checkbox":"checkbox_J2GB","does-not-exist":"does-not-exist_qXZz","checkboxGroup":"checkboxGroup_iAq9","checkboxList":"checkboxList_R4Jt"});

/***/ },

/***/ 17366
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* reexport */ token_dictionary),
  E: () => (/* reexport */ variables_namespaceObject)
});

// NAMESPACE OBJECT: ./packages/theme/src/lib/style-dictionary-dist/variables.js
var variables_namespaceObject = {};
__webpack_require__.r(variables_namespaceObject);
__webpack_require__.d(variables_namespaceObject, {
  w$9: () => (backgroundBase),
  _2e: () => (borderColorPrimary),
  l9i: () => (borderColorSubtle),
  A1M: () => (brandPrimary),
  Qni: () => (buttonBackgroundPrimaryBase),
  jc5: () => (colorGray200),
  tK4: () => (field01Base),
  w1t: () => (iconOnColor),
  c8U: () => (iconPrimary),
  ak9: () => (layer01Base),
  JI6: () => (layer02Base),
  lvK: () => (spacing50),
  EWd: () => (stateFocus),
  jCJ: () => (textPlaceholder),
  eku: () => (textPrimary)
});

;// ./packages/theme/src/lib/style-dictionary-dist/token-dictionary.js
/**
 * Do not edit directly, this file was auto-generated.
 *//* harmony default export */ const token_dictionary = ({windowSizes:{sm:{key:"{windowSizes.sm}",$value:"480px",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"dimension",original:{$value:"480px",$type:"dimension",key:"{windowSizes.sm}"},name:"windowSizesSm",attributes:{},path:["windowSizes","sm"]},md:{key:"{windowSizes.md}",$value:"768px",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"dimension",original:{$value:"768px",$type:"dimension",key:"{windowSizes.md}"},name:"windowSizesMd",attributes:{},path:["windowSizes","md"]},lg:{key:"{windowSizes.lg}",$value:"1024px",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"dimension",original:{$value:"1024px",$type:"dimension",key:"{windowSizes.lg}"},name:"windowSizesLg",attributes:{},path:["windowSizes","lg"]},xl:{key:"{windowSizes.xl}",$value:"1280px",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"dimension",original:{$value:"1280px",$type:"dimension",key:"{windowSizes.xl}"},name:"windowSizesXl",attributes:{},path:["windowSizes","xl"]}},breakpoints:{xs:{key:"{breakpoints.xs}",$value:"(max-width: calc(480px - 1px))",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"(max-width: calc({windowSizes.sm} - 1px))",$type:"string",key:"{breakpoints.xs}"},name:"breakpointsXs",attributes:{},path:["breakpoints","xs"]},sm:{key:"{breakpoints.sm}",$value:"(min-width: 480px)",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"(min-width: {windowSizes.sm})",$type:"string",key:"{breakpoints.sm}"},name:"breakpointsSm",attributes:{},path:["breakpoints","sm"]},md:{key:"{breakpoints.md}",$value:"(min-width: 768px)",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"(min-width: {windowSizes.md})",$type:"string",key:"{breakpoints.md}"},name:"breakpointsMd",attributes:{},path:["breakpoints","md"]},lg:{key:"{breakpoints.lg}",$value:"(min-width: 1024px)",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"(min-width: {windowSizes.lg})",$type:"string",key:"{breakpoints.lg}"},name:"breakpointsLg",attributes:{},path:["breakpoints","lg"]},xl:{key:"{breakpoints.xl}",$value:"(min-width: 1280px)",$description:"This is the largest breakpoint",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"(min-width: {windowSizes.xl})",$description:"This is the largest breakpoint",$type:"string",key:"{breakpoints.xl}"},name:"breakpointsXl",attributes:{},path:["breakpoints","xl"]}},button:{background:{primary:{base:{key:"{button.background.primary.base}",$value:"light-dark(#143c50, #2e7ca5)",$description:"Färg på primärknapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.blue.100})",$description:"Färg på primärknapp",$type:"string",key:"{button.background.primary.base}"},name:"buttonBackgroundPrimaryBase",attributes:{},path:["button","background","primary","base"]},hover:{key:"{button.background.primary.hover}",$value:"light-dark(#25607f, #25607f)",$description:"Hover state på primärknapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.130}, {color.blue.130})",$description:"Hover state på primärknapp",$type:"string",key:"{button.background.primary.hover}"},name:"buttonBackgroundPrimaryHover",attributes:{},path:["button","background","primary","hover"]},active:{key:"{button.background.primary.active}",$value:"light-dark(#2e7ca5, #143c50)",$description:"Active state för primärknapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.100}, {color.blue.150})",$description:"Active state för primärknapp",$type:"string",key:"{button.background.primary.active}"},name:"buttonBackgroundPrimaryActive",attributes:{},path:["button","background","primary","active"]}},secondary:{base:{key:"{button.background.secondary.base}",$value:"transparent",$description:"Färg på sekundärknapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"transparent",$description:"Färg på sekundärknapp",$type:"string",key:"{button.background.secondary.base}"},name:"buttonBackgroundSecondaryBase",attributes:{},path:["button","background","secondary","base"]},hover:{key:"{button.background.secondary.hover}",$value:"light-dark(#e6e6e6, #212121)",$description:"Hover state på sekundärknapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.hover}, {color.gray.190})",$description:"Hover state på sekundärknapp",$type:"string",key:"{button.background.secondary.hover}"},name:"buttonBackgroundSecondaryHover",attributes:{},path:["button","background","secondary","hover"]},active:{key:"{button.background.secondary.active}",$value:"light-dark(#d9d9d9, #262626)",$description:"Active state för sekundärknapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.180})",$description:"Active state för sekundärknapp",$type:"string",key:"{button.background.secondary.active}"},name:"buttonBackgroundSecondaryActive",attributes:{},path:["button","background","secondary","active"]}},tertiary:{hover:{key:"{button.background.tertiary.hover}",$value:"light-dark(#0000000d, #ffffff21)",$description:"Hover state för tertiär knapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.black.opacity5}, {color.white.opacity13})",$description:"Hover state för tertiär knapp",$type:"string",key:"{button.background.tertiary.hover}"},name:"buttonBackgroundTertiaryHover",attributes:{},path:["button","background","tertiary","hover"]},active:{key:"{button.background.tertiary.active}",$value:"light-dark(#d9d9d9, #262626)",$description:"Active state för tertiär knapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.180})",$description:"Active state för tertiär knapp",$type:"string",key:"{button.background.tertiary.active}"},name:"buttonBackgroundTertiaryActive",attributes:{},path:["button","background","tertiary","active"]}},danger:{base:{key:"{button.background.danger.base}",$value:"light-dark(#e62323, #e62323)",$description:"Färg på danger knapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.100})",$description:"Färg på danger knapp",$type:"string",key:"{button.background.danger.base}"},name:"buttonBackgroundDangerBase",attributes:{},path:["button","background","danger","base"]},hover:{key:"{button.background.danger.hover}",$value:"light-dark(#bc1d1d, #bc1d1d)",$description:"Hover state för danger knapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.120}, {color.signalRed.120})",$description:"Hover state för danger knapp",$type:"string",key:"{button.background.danger.hover}"},name:"buttonBackgroundDangerHover",attributes:{},path:["button","background","danger","hover"]},active:{key:"{button.background.danger.active}",$value:"light-dark(#7d1313, #7d1313)",$description:"Active state för danger knapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.150}, {color.signalRed.150})",$description:"Active state för danger knapp",$type:"string",key:"{button.background.danger.active}"},name:"buttonBackgroundDangerActive",attributes:{},path:["button","background","danger","active"]}},disabled:{key:"{button.background.disabled}",$value:"light-dark(#f2f2f2, #262626)",$description:"Disabled state för knappar",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Disabled state för knappar",$type:"string",key:"{button.background.disabled}"},name:"buttonBackgroundDisabled",attributes:{},path:["button","background","disabled"]}},border:{secondary:{key:"{button.border.secondary}",$value:"light-dark(#143c50, #f2f2f2)",$description:"Kantfärg för sekundärknapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.gray.10})",$description:"Kantfärg för sekundärknapp",$type:"string",key:"{button.border.secondary}"},name:"buttonBorderSecondary",attributes:{},path:["button","border","secondary"]}},icon:{hover:{key:"{button.icon.hover}",$value:"light-dark(#0000000d, #ffffff21)",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.black.opacity5}, {color.white.opacity13})",$type:"string",key:"{button.icon.hover}"},name:"buttonIconHover",attributes:{},path:["button","icon","hover"]},active:{key:"{button.icon.active}",$value:"light-dark(#00000033, #ffffff33)",$description:"Active state för ikoner",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark(#00000033, #ffffff33)",$description:"Active state för ikoner",$type:"string",key:"{button.icon.active}"},name:"buttonIconActive",attributes:{},path:["button","icon","active"]}}},color:{black:{base:{key:"{color.black.base}",$value:"#000",$description:"Black",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#000",$description:"Black",$type:"color",key:"{color.black.base}"},name:"colorBlackBase",attributes:{},path:["color","black","base"]},hover:{key:"{color.black.hover}",$value:"#0d0d0d",$description:"Black hover",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#0d0d0d",$description:"Black hover",$type:"color",key:"{color.black.hover}"},name:"colorBlackHover",attributes:{},path:["color","black","hover"]},opacity5:{key:"{color.black.opacity5}",$value:"#0000000d",$description:"Black with 5% opacity",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#0000000d",$description:"Black with 5% opacity",$type:"color",key:"{color.black.opacity5}"},name:"colorBlackOpacity5",attributes:{},path:["color","black","opacity5"]}},white:{base:{key:"{color.white.base}",$value:"#fff",$description:"White",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fff",$description:"White",$type:"color",key:"{color.white.base}"},name:"colorWhiteBase",attributes:{},path:["color","white","base"]},hover:{key:"{color.white.hover}",$value:"#e6e6e6",$description:"White hover",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#e6e6e6",$description:"White hover",$type:"color",key:"{color.white.hover}"},name:"colorWhiteHover",attributes:{},path:["color","white","hover"]},opacity13:{key:"{color.white.opacity13}",$value:"#ffffff21",$description:"White with 13% opacity",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffffff21",$description:"White with 13% opacity",$type:"color",key:"{color.white.opacity13}"},name:"colorWhiteOpacity13",attributes:{},path:["color","white","opacity13"]}},gray:{10:{key:"{color.gray.10}",$value:"#f2f2f2",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#f2f2f2",$type:"color",key:"{color.gray.10}"},name:"colorGray10",attributes:{},path:["color","gray","10"]},20:{key:"{color.gray.20}",$value:"#e6e6e6",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#e6e6e6",$type:"color",key:"{color.gray.20}"},name:"colorGray20",attributes:{},path:["color","gray","20"]},30:{key:"{color.gray.30}",$value:"#d9d9d9",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d9d9d9",$type:"color",key:"{color.gray.30}"},name:"colorGray30",attributes:{},path:["color","gray","30"]},40:{key:"{color.gray.40}",$value:"#ccc",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ccc",$type:"color",key:"{color.gray.40}"},name:"colorGray40",attributes:{},path:["color","gray","40"]},50:{key:"{color.gray.50}",$value:"#bfbfbf",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#bfbfbf",$type:"color",key:"{color.gray.50}"},name:"colorGray50",attributes:{},path:["color","gray","50"]},60:{key:"{color.gray.60}",$value:"#b3b3b3",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#b3b3b3",$type:"color",key:"{color.gray.60}"},name:"colorGray60",attributes:{},path:["color","gray","60"]},70:{key:"{color.gray.70}",$value:"#a6a6a6",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#a6a6a6",$type:"color",key:"{color.gray.70}"},name:"colorGray70",attributes:{},path:["color","gray","70"]},80:{key:"{color.gray.80}",$value:"#999",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#999",$type:"color",key:"{color.gray.80}"},name:"colorGray80",attributes:{},path:["color","gray","80"]},90:{key:"{color.gray.90}",$value:"#8c8c8c",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#8c8c8c",$type:"color",key:"{color.gray.90}"},name:"colorGray90",attributes:{},path:["color","gray","90"]},100:{key:"{color.gray.100}",$value:"#808080",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#808080",$type:"color",key:"{color.gray.100}"},name:"colorGray100",attributes:{},path:["color","gray","100"]},110:{key:"{color.gray.110}",$value:"#737373",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#737373",$type:"color",key:"{color.gray.110}"},name:"colorGray110",attributes:{},path:["color","gray","110"]},120:{key:"{color.gray.120}",$value:"#666",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#666",$type:"color",key:"{color.gray.120}"},name:"colorGray120",attributes:{},path:["color","gray","120"]},130:{key:"{color.gray.130}",$value:"#5d5d5d",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#5d5d5d",$type:"color",key:"{color.gray.130}"},name:"colorGray130",attributes:{},path:["color","gray","130"]},140:{key:"{color.gray.140}",$value:"#525252",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#525252",$type:"color",key:"{color.gray.140}"},name:"colorGray140",attributes:{},path:["color","gray","140"]},150:{key:"{color.gray.150}",$value:"#474747",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#474747",$type:"color",key:"{color.gray.150}"},name:"colorGray150",attributes:{},path:["color","gray","150"]},160:{key:"{color.gray.160}",$value:"#383838",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#383838",$type:"color",key:"{color.gray.160}"},name:"colorGray160",attributes:{},path:["color","gray","160"]},170:{key:"{color.gray.170}",$value:"#333",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#333",$type:"color",key:"{color.gray.170}"},name:"colorGray170",attributes:{},path:["color","gray","170"]},180:{key:"{color.gray.180}",$value:"#262626",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#262626",$type:"color",key:"{color.gray.180}"},name:"colorGray180",attributes:{},path:["color","gray","180"]},190:{key:"{color.gray.190}",$value:"#212121",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#212121",$type:"color",key:"{color.gray.190}"},name:"colorGray190",attributes:{},path:["color","gray","190"]},200:{key:"{color.gray.200}",$value:"#171717",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#171717",$type:"color",key:"{color.gray.200}"},name:"colorGray200",attributes:{},path:["color","gray","200"]}},blue:{10:{key:"{color.blue.10}",$value:"#eaf2f6",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#eaf2f6",$type:"color",key:"{color.blue.10}"},name:"colorBlue10",attributes:{},path:["color","blue","10"]},20:{key:"{color.blue.20}",$value:"#d5e5ed",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d5e5ed",$type:"color",key:"{color.blue.20}"},name:"colorBlue20",attributes:{},path:["color","blue","20"]},40:{key:"{color.blue.40}",$value:"#abcbdb",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#abcbdb",$type:"color",key:"{color.blue.40}"},name:"colorBlue40",attributes:{},path:["color","blue","40"]},50:{key:"{color.blue.50}",$value:"#94BCD1",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#94BCD1",$type:"color",key:"{color.blue.50}"},name:"colorBlue50",attributes:{},path:["color","blue","50"]},60:{key:"{color.blue.60}",$value:"#82b0c9",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#82b0c9",$type:"color",key:"{color.blue.60}"},name:"colorBlue60",attributes:{},path:["color","blue","60"]},70:{key:"{color.blue.70}",$value:"#6CA3C0",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#6CA3C0",$type:"color",key:"{color.blue.70}"},name:"colorBlue70",attributes:{},path:["color","blue","70"]},80:{key:"{color.blue.80}",$value:"#5897b8",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#5897b8",$type:"color",key:"{color.blue.80}"},name:"colorBlue80",attributes:{},path:["color","blue","80"]},90:{key:"{color.blue.90}",$value:"#4289ad",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#4289ad",$type:"color",key:"{color.blue.90}"},name:"colorBlue90",attributes:{},path:["color","blue","90"]},100:{key:"{color.blue.100}",$value:"#2e7ca5",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#2e7ca5",$type:"color",key:"{color.blue.100}"},name:"colorBlue100",attributes:{},path:["color","blue","100"]},110:{key:"{color.blue.110}",$value:"#2C7399",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#2C7399",$type:"color",key:"{color.blue.110}"},name:"colorBlue110",attributes:{},path:["color","blue","110"]},120:{key:"{color.blue.120}",$value:"#29698C",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#29698C",$type:"color",key:"{color.blue.120}"},name:"colorBlue120",attributes:{},path:["color","blue","120"]},130:{key:"{color.blue.130}",$value:"#25607f",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#25607f",$type:"color",key:"{color.blue.130}"},name:"colorBlue130",attributes:{},path:["color","blue","130"]},150:{key:"{color.blue.150}",$value:"#143c50",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#143c50",$type:"color",key:"{color.blue.150}"},name:"colorBlue150",attributes:{},path:["color","blue","150"]}},purple:{80:{key:"{color.purple.80}",$value:"#b46ab4",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#b46ab4",$type:"color",key:"{color.purple.80}"},name:"colorPurple80",attributes:{},path:["color","purple","80"]},110:{key:"{color.purple.110}",$value:"#954b95",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#954b95",$type:"color",key:"{color.purple.110}"},name:"colorPurple110",attributes:{},path:["color","purple","110"]}},red:{100:{key:"{color.red.100}",$value:"#b90835",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#b90835",$type:"color",key:"{color.red.100}"},name:"colorRed100",attributes:{},path:["color","red","100"]}},orange:{100:{key:"{color.orange.100}",$value:"oklch(0.66 0.18 45)",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"oklch(0.66 0.18 45)",$type:"color",key:"{color.orange.100}"},name:"colorOrange100",attributes:{},path:["color","orange","100"]}},signalBlue:{10:{key:"{color.signalBlue.10}",$value:"#eaf2f6",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#eaf2f6",$type:"color",key:"{color.signalBlue.10}"},name:"colorSignalBlue10",attributes:{},path:["color","signalBlue","10"]},20:{key:"{color.signalBlue.20}",$value:"#d5e5ed",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d5e5ed",$type:"color",key:"{color.signalBlue.20}"},name:"colorSignalBlue20",attributes:{},path:["color","signalBlue","20"]},100:{key:"{color.signalBlue.100}",$value:"#06c",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#06c",$type:"color",key:"{color.signalBlue.100}"},name:"colorSignalBlue100",attributes:{},path:["color","signalBlue","100"]},170:{key:"{color.signalBlue.170}",$value:"#162b33",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#162b33",$type:"color",key:"{color.signalBlue.170}"},name:"colorSignalBlue170",attributes:{},path:["color","signalBlue","170"]},180:{key:"{color.signalBlue.180}",$value:"#112127",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#112127",$type:"color",key:"{color.signalBlue.180}"},name:"colorSignalBlue180",attributes:{},path:["color","signalBlue","180"]}},signalGreen:{20:{key:"{color.signalGreen.20}",$value:"#d5f2d9",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d5f2d9",$type:"color",key:"{color.signalGreen.20}"},name:"colorSignalGreen20",attributes:{},path:["color","signalGreen","20"]},30:{key:"{color.signalGreen.30}",$value:"#bae5c5",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#bae5c5",$type:"color",key:"{color.signalGreen.30}"},name:"colorSignalGreen30",attributes:{},path:["color","signalGreen","30"]},100:{key:"{color.signalGreen.100}",$value:"#008d3c",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#008d3c",$type:"color",key:"{color.signalGreen.100}"},name:"colorSignalGreen100",attributes:{},path:["color","signalGreen","100"]},150:{key:"{color.signalGreen.150}",$value:"#194B33",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#194B33",$type:"color",key:"{color.signalGreen.150}"},name:"colorSignalGreen150",attributes:{},path:["color","signalGreen","150"]},170:{key:"{color.signalGreen.170}",$value:"#163328",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#163328",$type:"color",key:"{color.signalGreen.170}"},name:"colorSignalGreen170",attributes:{},path:["color","signalGreen","170"]},180:{key:"{color.signalGreen.180}",$value:"#112722",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#112722",$type:"color",key:"{color.signalGreen.180}"},name:"colorSignalGreen180",attributes:{},path:["color","signalGreen","180"]}},signalYellow:{10:{key:"{color.signalYellow.10}",$value:"#fff8e2",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fff8e2",$type:"color",key:"{color.signalYellow.10}"},name:"colorSignalYellow10",attributes:{},path:["color","signalYellow","10"]},20:{key:"{color.signalYellow.20}",$value:"#fff1cd",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fff1cd",$type:"color",key:"{color.signalYellow.20}"},name:"colorSignalYellow20",attributes:{},path:["color","signalYellow","20"]},30:{key:"{color.signalYellow.30}",$value:"#ffeab8",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffeab8",$type:"color",key:"{color.signalYellow.30}"},name:"colorSignalYellow30",attributes:{},path:["color","signalYellow","30"]},40:{key:"{color.signalYellow.40}",$value:"#ffe3a3",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffe3a3",$type:"color",key:"{color.signalYellow.40}"},name:"colorSignalYellow40",attributes:{},path:["color","signalYellow","40"]},50:{key:"{color.signalYellow.50}",$value:"#ffdc8b",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffdc8b",$type:"color",key:"{color.signalYellow.50}"},name:"colorSignalYellow50",attributes:{},path:["color","signalYellow","50"]},60:{key:"{color.signalYellow.60}",$value:"#ffd47b",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffd47b",$type:"color",key:"{color.signalYellow.60}"},name:"colorSignalYellow60",attributes:{},path:["color","signalYellow","60"]},70:{key:"{color.signalYellow.70}",$value:"#fdcd5d",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fdcd5d",$type:"color",key:"{color.signalYellow.70}"},name:"colorSignalYellow70",attributes:{},path:["color","signalYellow","70"]},80:{key:"{color.signalYellow.80}",$value:"#fbc640",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fbc640",$type:"color",key:"{color.signalYellow.80}"},name:"colorSignalYellow80",attributes:{},path:["color","signalYellow","80"]},90:{key:"{color.signalYellow.90}",$value:"#fabf1b",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fabf1b",$type:"color",key:"{color.signalYellow.90}"},name:"colorSignalYellow90",attributes:{},path:["color","signalYellow","90"]},100:{key:"{color.signalYellow.100}",$value:"#fab900",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fab900",$type:"color",key:"{color.signalYellow.100}"},name:"colorSignalYellow100",attributes:{},path:["color","signalYellow","100"]},110:{key:"{color.signalYellow.110}",$value:"#daa105",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#daa105",$type:"color",key:"{color.signalYellow.110}"},name:"colorSignalYellow110",attributes:{},path:["color","signalYellow","110"]},120:{key:"{color.signalYellow.120}",$value:"#bd8c1e",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#bd8c1e",$type:"color",key:"{color.signalYellow.120}"},name:"colorSignalYellow120",attributes:{},path:["color","signalYellow","120"]},130:{key:"{color.signalYellow.130}",$value:"#a17927",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#a17927",$type:"color",key:"{color.signalYellow.130}"},name:"colorSignalYellow130",attributes:{},path:["color","signalYellow","130"]},140:{key:"{color.signalYellow.140}",$value:"#88672a",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#88672a",$type:"color",key:"{color.signalYellow.140}"},name:"colorSignalYellow140",attributes:{},path:["color","signalYellow","140"]},150:{key:"{color.signalYellow.150}",$value:"#70562b",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#70562b",$type:"color",key:"{color.signalYellow.150}"},name:"colorSignalYellow150",attributes:{},path:["color","signalYellow","150"]},160:{key:"{color.signalYellow.160}",$value:"#5a4629",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#5a4629",$type:"color",key:"{color.signalYellow.160}"},name:"colorSignalYellow160",attributes:{},path:["color","signalYellow","160"]},170:{key:"{color.signalYellow.170}",$value:"#453826",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#453826",$type:"color",key:"{color.signalYellow.170}"},name:"colorSignalYellow170",attributes:{},path:["color","signalYellow","170"]},180:{key:"{color.signalYellow.180}",$value:"#322a20",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#322a20",$type:"color",key:"{color.signalYellow.180}"},name:"colorSignalYellow180",attributes:{},path:["color","signalYellow","180"]},190:{key:"{color.signalYellow.190}",$value:"#201c18",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#201c18",$type:"color",key:"{color.signalYellow.190}"},name:"colorSignalYellow190",attributes:{},path:["color","signalYellow","190"]},200:{key:"{color.signalYellow.200}",$value:"#0f0e0e",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#0f0e0e",$type:"color",key:"{color.signalYellow.200}"},name:"colorSignalYellow200",attributes:{},path:["color","signalYellow","200"]}},signalRed:{10:{key:"{color.signalRed.10}",$value:"#ffefef",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffefef",$type:"color",key:"{color.signalRed.10}"},name:"colorSignalRed10",attributes:{},path:["color","signalRed","10"]},20:{key:"{color.signalRed.20}",$value:"#ffdfdf",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffdfdf",$type:"color",key:"{color.signalRed.20}"},name:"colorSignalRed20",attributes:{},path:["color","signalRed","20"]},30:{key:"{color.signalRed.30}",$value:"#fcc8c8",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fcc8c8",$type:"color",key:"{color.signalRed.30}"},name:"colorSignalRed30",attributes:{},path:["color","signalRed","30"]},40:{key:"{color.signalRed.40}",$value:"#f9b0b0",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#f9b0b0",$type:"color",key:"{color.signalRed.40}"},name:"colorSignalRed40",attributes:{},path:["color","signalRed","40"]},50:{key:"{color.signalRed.50}",$value:"#f69999",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#f69999",$type:"color",key:"{color.signalRed.50}"},name:"colorSignalRed50",attributes:{},path:["color","signalRed","50"]},60:{key:"{color.signalRed.60}",$value:"#f38181",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#f38181",$type:"color",key:"{color.signalRed.60}"},name:"colorSignalRed60",attributes:{},path:["color","signalRed","60"]},70:{key:"{color.signalRed.70}",$value:"#ef6a6a",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ef6a6a",$type:"color",key:"{color.signalRed.70}"},name:"colorSignalRed70",attributes:{},path:["color","signalRed","70"]},80:{key:"{color.signalRed.80}",$value:"#EC5252",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#EC5252",$type:"color",key:"{color.signalRed.80}"},name:"colorSignalRed80",attributes:{},path:["color","signalRed","80"]},90:{key:"{color.signalRed.90}",$value:"#e93b3b",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#e93b3b",$type:"color",key:"{color.signalRed.90}"},name:"colorSignalRed90",attributes:{},path:["color","signalRed","90"]},100:{key:"{color.signalRed.100}",$value:"#e62323",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#e62323",$type:"color",key:"{color.signalRed.100}"},name:"colorSignalRed100",attributes:{},path:["color","signalRed","100"]},110:{key:"{color.signalRed.110}",$value:"#d12020",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d12020",$type:"color",key:"{color.signalRed.110}"},name:"colorSignalRed110",attributes:{},path:["color","signalRed","110"]},120:{key:"{color.signalRed.120}",$value:"#bc1d1d",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#bc1d1d",$type:"color",key:"{color.signalRed.120}"},name:"colorSignalRed120",attributes:{},path:["color","signalRed","120"]},130:{key:"{color.signalRed.130}",$value:"#a71919",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#a71919",$type:"color",key:"{color.signalRed.130}"},name:"colorSignalRed130",attributes:{},path:["color","signalRed","130"]},140:{key:"{color.signalRed.140}",$value:"#921616",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#921616",$type:"color",key:"{color.signalRed.140}"},name:"colorSignalRed140",attributes:{},path:["color","signalRed","140"]},150:{key:"{color.signalRed.150}",$value:"#7d1313",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#7d1313",$type:"color",key:"{color.signalRed.150}"},name:"colorSignalRed150",attributes:{},path:["color","signalRed","150"]},160:{key:"{color.signalRed.160}",$value:"#691010",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#691010",$type:"color",key:"{color.signalRed.160}"},name:"colorSignalRed160",attributes:{},path:["color","signalRed","160"]},170:{key:"{color.signalRed.170}",$value:"#540d0d",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#540d0d",$type:"color",key:"{color.signalRed.170}"},name:"colorSignalRed170",attributes:{},path:["color","signalRed","170"]},180:{key:"{color.signalRed.180}",$value:"#3f0a0a",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#3f0a0a",$type:"color",key:"{color.signalRed.180}"},name:"colorSignalRed180",attributes:{},path:["color","signalRed","180"]},190:{key:"{color.signalRed.190}",$value:"#2a0606",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#2a0606",$type:"color",key:"{color.signalRed.190}"},name:"colorSignalRed190",attributes:{},path:["color","signalRed","190"]},200:{key:"{color.signalRed.200}",$value:"#150303",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#150303",$type:"color",key:"{color.signalRed.200}"},name:"colorSignalRed200",attributes:{},path:["color","signalRed","200"]}}},background:{base:{key:"{background.base}",$value:"light-dark(#fff, #171717)",$description:"Standardbakgrund för våra applikationer",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.base}, {color.gray.200})",$description:"Standardbakgrund för våra applikationer",$type:"string",key:"{background.base}"},name:"backgroundBase",attributes:{},path:["background","base"]},hover:{key:"{background.hover}",$value:"light-dark(#e6e6e6, #212121)",$description:"Hoverfärg för bakgrund",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.hover}, {color.gray.190})",$description:"Hoverfärg för bakgrund",$type:"string",key:"{background.hover}"},name:"backgroundHover",attributes:{},path:["background","hover"]},inverse:{key:"{background.inverse}",$value:"light-dark(#171717, #f2f2f2)",$description:"Bakgrund eller element i med hög kontrast",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.200}, {color.gray.10})",$description:"Bakgrund eller element i med hög kontrast",$type:"string",key:"{background.inverse}"},name:"backgroundInverse",attributes:{},path:["background","inverse"]}},layer:{"01":{base:{key:"{layer.01.base}",$value:"light-dark(#f2f2f2, #262626)",$description:"Yta som används på background. Sekundär bakgrundsfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Yta som används på background. Sekundär bakgrundsfärg",$type:"string",key:"{layer.01.base}"},name:"layer01Base",attributes:{},path:["layer","01","base"]},hover:{key:"{layer.01.hover}",$value:"light-dark(#e6e6e6, #333)",$description:"Hover state för layer01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.20}, {color.gray.170})",$description:"Hover state för layer01",$type:"string",key:"{layer.01.hover}"},name:"layer01Hover",attributes:{},path:["layer","01","hover"]},selected:{key:"{layer.01.selected}",$value:"light-dark(#d9d9d9, #383838)",$description:"Selected state för layer01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Selected state för layer01",$type:"string",key:"{layer.01.selected}"},name:"layer01Selected",attributes:{},path:["layer","01","selected"]},selectedHover:{key:"{layer.01.selectedHover}",$value:"light-dark(#ccc, #474747)",$description:"Hover state för layerSelected01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.40}, {color.gray.150})",$description:"Hover state för layerSelected01",$type:"string",key:"{layer.01.selectedHover}"},name:"layer01SelectedHover",attributes:{},path:["layer","01","selectedHover"]}},"02":{base:{key:"{layer.02.base}",$value:"light-dark(#fff, #383838)",$description:"Yta som ligger på layer01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.base}, {color.gray.160})",$description:"Yta som ligger på layer01",$type:"string",key:"{layer.02.base}"},name:"layer02Base",attributes:{},path:["layer","02","base"]},hover:{key:"{layer.02.hover}",$value:"light-dark(#e6e6e6, #474747)",$description:"Hover state för layer02",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.hover}, {color.gray.150})",$description:"Hover state för layer02",$type:"string",key:"{layer.02.hover}"},name:"layer02Hover",attributes:{},path:["layer","02","hover"]},selected:{key:"{layer.02.selected}",$value:"light-dark(#d9d9d9, #525252)",$description:"Selected state för layer02",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.140})",$description:"Selected state för layer02",$type:"string",key:"{layer.02.selected}"},name:"layer02Selected",attributes:{},path:["layer","02","selected"]},selectedHover:{key:"{layer.02.selectedHover}",$value:"light-dark(#ccc, #5d5d5d)",$description:"Hover state för layerSelected02",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.40}, {color.gray.130})",$description:"Hover state för layerSelected02",$type:"string",key:"{layer.02.selectedHover}"},name:"layer02SelectedHover",attributes:{},path:["layer","02","selectedHover"]}}},layerAccent:{"01":{base:{key:"{layerAccent.01.base}",$value:"light-dark(#d9d9d9, #383838)",$description:"Accentfärg som används tillsammans med layer01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Accentfärg som används tillsammans med layer01",$type:"string",key:"{layerAccent.01.base}"},name:"layerAccent01Base",attributes:{},path:["layerAccent","01","base"]},hover:{key:"{layerAccent.01.hover}",$value:"light-dark(#ccc, #474747)",$description:"Hover state för layerAccent01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.40}, {color.gray.150})",$description:"Hover state för layerAccent01",$type:"string",key:"{layerAccent.01.hover}"},name:"layerAccent01Hover",attributes:{},path:["layerAccent","01","hover"]},selected:{key:"{layerAccent.01.selected}",$value:"light-dark(#bfbfbf, #525252)",$description:"Selected state för layerAccent01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Selected state för layerAccent01",$type:"string",key:"{layerAccent.01.selected}"},name:"layerAccent01Selected",attributes:{},path:["layerAccent","01","selected"]}},"02":{base:{key:"{layerAccent.02.base}",$value:"light-dark(#f2f2f2, #262626)",$description:"Accentfärg som används tillsammans med layer02",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Accentfärg som används tillsammans med layer02",$type:"string",key:"{layerAccent.02.base}"},name:"layerAccent02Base",attributes:{},path:["layerAccent","02","base"]},hover:{key:"{layerAccent.02.hover}",$value:"light-dark(#e6e6e6, #333)",$description:"Hover state för layerAccent02",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.20}, {color.gray.170})",$description:"Hover state för layerAccent02",$type:"string",key:"{layerAccent.02.hover}"},name:"layerAccent02Hover",attributes:{},path:["layerAccent","02","hover"]},selected:{key:"{layerAccent.02.selected}",$value:"light-dark(#d9d9d9, #383838)",$description:"Selected state för layerAccent02",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Selected state för layerAccent02",$type:"string",key:"{layerAccent.02.selected}"},name:"layerAccent02Selected",attributes:{},path:["layerAccent","02","selected"]}}},brand:{primary:{key:"{brand.primary}",$value:"light-dark(#b90835, #b90835)",$description:"Primära röda färgen",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.red.100}, {color.red.100})",$description:"Primära röda färgen",$type:"string",key:"{brand.primary}"},name:"brandPrimary",attributes:{},path:["brand","primary"]}},border:{color:{primary:{key:"{border.color.primary}",$value:"light-dark(#171717, #f2f2f2)",$description:"Kantlinje med hög kontrast, används med field01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.200}, {color.gray.10})",$description:"Kantlinje med hög kontrast, används med field01",$type:"string",key:"{border.color.primary}"},name:"borderColorPrimary",attributes:{},path:["border","color","primary"]},secondary:{key:"{border.color.secondary}",$value:"light-dark(#737373, #8c8c8c)",$description:"Kantlinje med medelhög kontrast",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.110}, {color.gray.90})",$description:"Kantlinje med medelhög kontrast",$type:"string",key:"{border.color.secondary}"},name:"borderColorSecondary",attributes:{},path:["border","color","secondary"]},subtle:{key:"{border.color.subtle}",$value:"light-dark(#bfbfbf, #525252)",$description:"Kantlinje med låg kontrast",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Kantlinje med låg kontrast",$type:"string",key:"{border.color.subtle}"},name:"borderColorSubtle",attributes:{},path:["border","color","subtle"]},tertiary:{key:"{border.color.tertiary}",$value:"light-dark(#143c50, #2e7ca5)",$description:"Primärblå kantlinje",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.blue.100})",$description:"Primärblå kantlinje",$type:"string",key:"{border.color.tertiary}"},name:"borderColorTertiary",attributes:{},path:["border","color","tertiary"]},disabled:{key:"{border.color.disabled}",$value:"light-dark(#bfbfbf, #525252)",$description:"Kantlinje för disabled state",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Kantlinje för disabled state",$type:"string",key:"{border.color.disabled}"},name:"borderColorDisabled",attributes:{},path:["border","color","disabled"]}},width:{key:"{border.width}",$value:"1px",$type:"dimension",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:{value:1,unit:"px"},$type:"dimension",key:"{border.width}"},name:"borderWidth",attributes:{},path:["border","width"]}},field:{"01":{base:{key:"{field.01.base}",$value:"light-dark(#f2f2f2, #262626)",$description:"Standardfärg för fält, som ligger på background",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Standardfärg för fält, som ligger på background",$type:"string",key:"{field.01.base}"},name:"field01Base",attributes:{},path:["field","01","base"]},hover:{key:"{field.01.hover}",$value:"light-dark(#e6e6e6, #333)",$description:"Hover state för field01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.20}, {color.gray.170})",$description:"Hover state för field01",$type:"string",key:"{field.01.hover}"},name:"field01Hover",attributes:{},path:["field","01","hover"]},active:{key:"{field.01.active}",$value:"light-dark(#d9d9d9, #383838)",$description:"Active state för field01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Active state för field01",$type:"string",key:"{field.01.active}"},name:"field01Active",attributes:{},path:["field","01","active"]}},"02":{base:{key:"{field.02.base}",$value:"light-dark(#fff, #383838)",$description:"Sekundfärfärg för fält, som ligger på layer01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.base}, {color.gray.160})",$description:"Sekundfärfärg för fält, som ligger på layer01",$type:"string",key:"{field.02.base}"},name:"field02Base",attributes:{},path:["field","02","base"]},hover:{key:"{field.02.hover}",$value:"light-dark(#e6e6e6, #474747)",$description:"Hover state för field02",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.hover}, {color.gray.150})",$description:"Hover state för field02",$type:"string",key:"{field.02.hover}"},name:"field02Hover",attributes:{},path:["field","02","hover"]},active:{key:"{field.02.active}",$value:"light-dark(#d9d9d9, #525252)",$description:"Active state för field02",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.140})",$description:"Active state för field02",$type:"string",key:"{field.02.active}"},name:"field02Active",attributes:{},path:["field","02","active"]}},disabled:{key:"{field.disabled}",$value:"light-dark(#f2f2f2, #262626)",$description:"Disabled state för fält",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Disabled state för fält",$type:"string",key:"{field.disabled}"},name:"fieldDisabled",attributes:{},path:["field","disabled"]}},skeleton:{"01":{key:"{skeleton.01}",$value:"light-dark(#f2f2f2, #262626)",$description:"Standardfärg för skeleton",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Standardfärg för skeleton",$type:"string",key:"{skeleton.01}"},name:"skeleton01",attributes:{},path:["skeleton","01"]},"02":{key:"{skeleton.02}",$value:"light-dark(#d9d9d9, #383838)",$description:"Färg som används när Skeleton ligger på bakgrundsfärgen `layer01` eller `light-dark(#f2f2f2,#262626)`",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Färg som används när Skeleton ligger på bakgrundsfärgen `layer01` eller `light-dark(#f2f2f2,#262626)`",$type:"string",key:"{skeleton.02}"},name:"skeleton02",attributes:{},path:["skeleton","02"]}},icon:{primary:{key:"{icon.primary}",$value:"light-dark(#171717, #f2f2f2)",$description:"Primär ikonfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.200}, {color.gray.10})",$description:"Primär ikonfärg",$type:"string",key:"{icon.primary}"},name:"iconPrimary",attributes:{},path:["icon","primary"]},secondary:{key:"{icon.secondary}",$value:"light-dark(#525252, #a6a6a6)",$description:"Sekundär ikonfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.140}, {color.gray.70})",$description:"Sekundär ikonfärg",$type:"string",key:"{icon.secondary}"},name:"iconSecondary",attributes:{},path:["icon","secondary"]},tertiary:{key:"{icon.tertiary}",$value:"light-dark(#143c50, #f2f2f2)",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.gray.10})",$type:"string",key:"{icon.tertiary}"},name:"iconTertiary",attributes:{},path:["icon","tertiary"]},inverse:{key:"{icon.inverse}",$value:"light-dark(#fff, #171717)",$description:"Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.base}, {color.gray.200})",$description:"Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge",$type:"string",key:"{icon.inverse}"},name:"iconInverse",attributes:{},path:["icon","inverse"]},onColor:{key:"{icon.onColor}",$value:"light-dark(#fff, #fff)",$description:"Ikonfärg på färgade ytor som inte är lager",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.base}, {color.white.base})",$description:"Ikonfärg på färgade ytor som inte är lager",$type:"string",key:"{icon.onColor}"},name:"iconOnColor",attributes:{},path:["icon","onColor"]},disabled:{key:"{icon.disabled}",$value:"light-dark(#bfbfbf, #525252)",$description:"Ikoner som är disabled",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Ikoner som är disabled",$type:"string",key:"{icon.disabled}"},name:"iconDisabled",attributes:{},path:["icon","disabled"]},success:{key:"{icon.success}",$value:"light-dark(#008d3c, #008d3c)",$description:"Ikonfär för success state",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalGreen.100}, {color.signalGreen.100})",$description:"Ikonfär för success state",$type:"string",key:"{icon.success}"},name:"iconSuccess",attributes:{},path:["icon","success"]},info:{key:"{icon.info}",$value:"light-dark(#06c, #06c)",$description:"Ikonfärg för informationsikoner",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalBlue.100}, {color.signalBlue.100})",$description:"Ikonfärg för informationsikoner",$type:"string",key:"{icon.info}"},name:"iconInfo",attributes:{},path:["icon","info"]},warning:{key:"{icon.warning}",$value:"light-dark(#e62323, #e62323)",$description:"Ikonfärg för varningsikoner och invalid state",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.100})",$description:"Ikonfärg för varningsikoner och invalid state",$type:"string",key:"{icon.warning}"},name:"iconWarning",attributes:{},path:["icon","warning"]},important:{key:"{icon.important}",$type:"color",$value:"oklch(0.66 0.18 45)",$description:"Ikonfärg för viktig information",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$type:"color",$value:"{color.orange.100}",$description:"Ikonfärg för viktig information",key:"{icon.important}"},name:"iconImportant",attributes:{},path:["icon","important"]},readOnly:{key:"{icon.readOnly}",$value:"light-dark(#bfbfbf, #383838)",$description:"Ikonfärg för read-only state",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.50}, {color.gray.160})",$description:"Ikonfärg för read-only state",$type:"string",key:"{icon.readOnly}"},name:"iconReadOnly",attributes:{},path:["icon","readOnly"]}},link:{enabled:{key:"{link.enabled}",$value:"light-dark(#29698C, #6CA3C0)",$description:"Primärlänkfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.120}, {color.blue.70})",$description:"Primärlänkfärg",$type:"string",key:"{link.enabled}"},name:"linkEnabled",attributes:{},path:["link","enabled"]},hover:{key:"{link.hover}",$value:"light-dark(#143c50, #94BCD1)",$description:"Hover state för länkar",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.blue.50})",$description:"Hover state för länkar",$type:"string",key:"{link.hover}"},name:"linkHover",attributes:{},path:["link","hover"]},pressed:{key:"{link.pressed}",$value:"light-dark(#171717, #abcbdb)",$description:"Active/pressed state för länkar",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.200}, {color.blue.40})",$description:"Active/pressed state för länkar",$type:"string",key:"{link.pressed}"},name:"linkPressed",attributes:{},path:["link","pressed"]},visited:{key:"{link.visited}",$value:"light-dark(#954b95, #b46ab4)",$description:"Färg för besökta länkar",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.purple.110}, {color.purple.80})",$description:"Färg för besökta länkar",$type:"string",key:"{link.visited}"},name:"linkVisited",attributes:{},path:["link","visited"]}},support:{border:{success:{key:"{support.border.success}",$value:"light-dark(#008d3c, #008d3c)",$description:"Kantlinje för success-notifikationer",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalGreen.100}, {color.signalGreen.100})",$description:"Kantlinje för success-notifikationer",$type:"string",key:"{support.border.success}"},name:"supportBorderSuccess",attributes:{},path:["support","border","success"]},info:{key:"{support.border.info}",$value:"light-dark(#06c, #06c)",$description:"Kantlinje för notifikationer med information",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalBlue.100}, {color.signalBlue.100})",$description:"Kantlinje för notifikationer med information",$type:"string",key:"{support.border.info}"},name:"supportBorderInfo",attributes:{},path:["support","border","info"]},important:{key:"{support.border.important}",$type:"color",$value:"oklch(0.66 0.18 45)",$description:"Kantlinje för notifikationer med viktig information",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$type:"color",$value:"{color.orange.100}",$description:"Kantlinje för notifikationer med viktig information",key:"{support.border.important}"},name:"supportBorderImportant",attributes:{},path:["support","border","important"]},warning:{key:"{support.border.warning}",$value:"light-dark(#e62323, #e62323)",$description:"Kantlinje för notifikationer med varningar",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.100})",$description:"Kantlinje för notifikationer med varningar",$type:"string",key:"{support.border.warning}"},name:"supportBorderWarning",attributes:{},path:["support","border","warning"]}},background:{success:{key:"{support.background.success}",$value:"light-dark(#d5f2d9, #112722)",$description:"Bakgrund för success-notifikationer",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalGreen.20}, {color.signalGreen.180})",$description:"Bakgrund för success-notifikationer",$type:"string",key:"{support.background.success}"},name:"supportBackgroundSuccess",attributes:{},path:["support","background","success"]},successHover:{key:"{support.background.successHover}",$value:"light-dark(#bae5c5, #163328)",$description:"Hoverbakgrund för success-notifikationer",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalGreen.30}, {color.signalGreen.170})",$description:"Hoverbakgrund för success-notifikationer",$type:"string",key:"{support.background.successHover}"},name:"supportBackgroundSuccessHover",attributes:{},path:["support","background","successHover"]},info:{key:"{support.background.info}",$value:"light-dark(#eaf2f6, #112127)",$description:"Bakgrund för notifikationer med information",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalBlue.10}, {color.signalBlue.180})",$description:"Bakgrund för notifikationer med information",$type:"string",key:"{support.background.info}"},name:"supportBackgroundInfo",attributes:{},path:["support","background","info"]},infoHover:{key:"{support.background.infoHover}",$value:"light-dark(#d5e5ed, #162b33)",$description:"Hoverbakgrund för notifikationer med information",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalBlue.20}, {color.signalBlue.170})",$description:"Hoverbakgrund för notifikationer med information",$type:"string",key:"{support.background.infoHover}"},name:"supportBackgroundInfoHover",attributes:{},path:["support","background","infoHover"]},important:{key:"{support.background.important}",$value:"light-dark(#fff8e2, #322a20)",$description:"Bakgrund för notifikationer med viktig information",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalYellow.10}, {color.signalYellow.180})",$description:"Bakgrund för notifikationer med viktig information",$type:"string",key:"{support.background.important}"},name:"supportBackgroundImportant",attributes:{},path:["support","background","important"]},importantHover:{key:"{support.background.importantHover}",$value:"light-dark(#fff1cd, #453826)",$description:"Hoverbakgrund för notifikationer med viktig information",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalYellow.20}, {color.signalYellow.170})",$description:"Hoverbakgrund för notifikationer med viktig information",$type:"string",key:"{support.background.importantHover}"},name:"supportBackgroundImportantHover",attributes:{},path:["support","background","importantHover"]},warning:{key:"{support.background.warning}",$value:"light-dark(#ffdfdf, #3f0a0a)",$description:"Bakgrund för notifikationer med varningar",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.20}, {color.signalRed.180})",$description:"Bakgrund för notifikationer med varningar",$type:"string",key:"{support.background.warning}"},name:"supportBackgroundWarning",attributes:{},path:["support","background","warning"]},warningHover:{key:"{support.background.warningHover}",$value:"light-dark(#fcc8c8, #540d0d)",$description:"Hoverbakgrund för notifikationer med varningar",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.30}, {color.signalRed.170})",$description:"Hoverbakgrund för notifikationer med varningar",$type:"string",key:"{support.background.warningHover}"},name:"supportBackgroundWarningHover",attributes:{},path:["support","background","warningHover"]}}},text:{primary:{key:"{text.primary}",$value:"light-dark(#171717, #f2f2f2)",$description:"Primär textfärg. Rubriker och brödtext.",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.200}, {color.gray.10})",$description:"Primär textfärg. Rubriker och brödtext.",$type:"string",key:"{text.primary}"},name:"textPrimary",attributes:{},path:["text","primary"]},secondary:{key:"{text.secondary}",$value:"light-dark(#525252, #a6a6a6)",$description:"Sekundär textfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.140}, {color.gray.70})",$description:"Sekundär textfärg",$type:"string",key:"{text.secondary}"},name:"textSecondary",attributes:{},path:["text","secondary"]},tertiary:{key:"{text.tertiary}",$value:"light-dark(#143c50, #f2f2f2)",$description:"Textfärg på tertiär knapp",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.gray.10})",$description:"Textfärg på tertiär knapp",$type:"string",key:"{text.tertiary}"},name:"textTertiary",attributes:{},path:["text","tertiary"]},onColor:{key:"{text.onColor}",$value:"light-dark(#fff, #fff)",$description:"Textfärg på färgade bakgrunder som inte är lager",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.base}, {color.white.base})",$description:"Textfärg på färgade bakgrunder som inte är lager",$type:"string",key:"{text.onColor}"},name:"textOnColor",attributes:{},path:["text","onColor"]},inverse:{key:"{text.inverse}",$value:"light-dark(#f2f2f2, #171717)",$description:"Inverterad textfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.10}, {color.gray.200})",$description:"Inverterad textfärg",$type:"string",key:"{text.inverse}"},name:"textInverse",attributes:{},path:["text","inverse"]},disabled:{key:"{text.disabled}",$value:"light-dark(#bfbfbf, #525252)",$description:"Textfärg för disabled state",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Textfärg för disabled state",$type:"string",key:"{text.disabled}"},name:"textDisabled",attributes:{},path:["text","disabled"]},warning:{key:"{text.warning}",$value:"light-dark(#e62323, #EC5252)",$description:"Textfärg för felmeddelanden",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.80})",$description:"Textfärg för felmeddelanden",$type:"string",key:"{text.warning}"},name:"textWarning",attributes:{},path:["text","warning"]},placeholder:{key:"{text.placeholder}",$value:"light-dark(#a6a6a6, #525252)",$description:"Textfärg för platshållare",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.70}, {color.gray.140})",$description:"Textfärg för platshållare",$type:"string",key:"{text.placeholder}"},name:"textPlaceholder",attributes:{},path:["text","placeholder"]},readOnly:{key:"{text.readOnly}",$value:"light-dark(#737373, #999)",$description:"Textfärg för read-only state",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.110}, {color.gray.80})",$description:"Textfärg för read-only state",$type:"string",key:"{text.readOnly}"},name:"textReadOnly",attributes:{},path:["text","readOnly"]}},badge:{background:{key:"{badge.background}",$value:"light-dark(#e62323, #e62323)",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.100})",$type:"string",key:"{badge.background}"},name:"badgeBackground",attributes:{},path:["badge","background"]}},calendar:{date:{background:{hover:{key:"{calendar.date.background.hover}",$value:"light-dark(#0000001a, #ffffff1a)",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark(#0000001a, #ffffff1a)",$type:"string",key:"{calendar.date.background.hover}"},name:"calendarDateBackgroundHover",attributes:{},path:["calendar","date","background","hover"]},selected:{key:"{calendar.date.background.selected}",$value:"light-dark(#143c50, #5897b8)",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.blue.80})",$type:"string",key:"{calendar.date.background.selected}"},name:"calendarDateBackgroundSelected",attributes:{},path:["calendar","date","background","selected"]},startRange:{key:"{calendar.date.background.startRange}",$value:"light-dark(#143c50, #5897b8)",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.blue.80})",$type:"string",key:"{calendar.date.background.startRange}"},name:"calendarDateBackgroundStartRange",attributes:{},path:["calendar","date","background","startRange"]},inRange:{key:"{calendar.date.background.inRange}",$value:"light-dark(#d5e5ed, #143c50)",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.20}, {color.blue.150})",$type:"string",key:"{calendar.date.background.inRange}"},name:"calendarDateBackgroundInRange",attributes:{},path:["calendar","date","background","inRange"]},endRange:{key:"{calendar.date.background.endRange}",$value:"light-dark(#143c50, #5897b8)",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.blue.80})",$type:"string",key:"{calendar.date.background.endRange}"},name:"calendarDateBackgroundEndRange",attributes:{},path:["calendar","date","background","endRange"]}}}},logo:{primary:{key:"{logo.primary}",$value:"light-dark(#b90835, #fff)",$description:"Färg på logotypen",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.red.100}, {color.white.base})",$description:"Färg på logotypen",$type:"string",key:"{logo.primary}"},name:"logoPrimary",attributes:{},path:["logo","primary"]}},menu:{item:{background:{hover:{key:"{menu.item.background.hover}",$value:"light-dark(#e6e6e6, #212121)",$description:"Bakgrundsfärg för menu vid hover",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.20}, {color.gray.190})",$description:"Bakgrundsfärg för menu vid hover",$type:"string",key:"{menu.item.background.hover}"},name:"menuItemBackgroundHover",attributes:{},path:["menu","item","background","hover"]},selected:{key:"{menu.item.background.selected}",$value:"light-dark(#f2f2f2, #262626)",$description:"Bakgrundsfärg för aktiv menu",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Bakgrundsfärg för aktiv menu",$type:"string",key:"{menu.item.background.selected}"},name:"menuItemBackgroundSelected",attributes:{},path:["menu","item","background","selected"]}}},text:{sectionHeader:{key:"{menu.text.sectionHeader}",$value:"light-dark(#525252, #a6a6a6)",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.140}, {color.gray.70})",$type:"string",key:"{menu.text.sectionHeader}"},name:"menuTextSectionHeader",attributes:{},path:["menu","text","sectionHeader"]}}},size:{10:{key:"{size.10}",$value:"0.125rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.125,unit:"rem"},$type:"dimension",key:"{size.10}"},name:"size10",attributes:{},path:["size","10"]},15:{key:"{size.15}",$value:"0.188rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.188,unit:"rem"},$type:"dimension",key:"{size.15}"},name:"size15",attributes:{},path:["size","15"]},20:{key:"{size.20}",$value:"0.25rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.25,unit:"rem"},$type:"dimension",key:"{size.20}"},name:"size20",attributes:{},path:["size","20"]},30:{key:"{size.30}",$value:"0.375rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.375,unit:"rem"},$type:"dimension",key:"{size.30}"},name:"size30",attributes:{},path:["size","30"]},40:{key:"{size.40}",$value:"0.5rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.5,unit:"rem"},$type:"dimension",key:"{size.40}"},name:"size40",attributes:{},path:["size","40"]},50:{key:"{size.50}",$value:"0.625rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.625,unit:"rem"},$type:"dimension",key:"{size.50}"},name:"size50",attributes:{},path:["size","50"]},60:{key:"{size.60}",$value:"0.75rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.75,unit:"rem"},$type:"dimension",key:"{size.60}"},name:"size60",attributes:{},path:["size","60"]},70:{key:"{size.70}",$value:"0.875rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.875,unit:"rem"},$type:"dimension",key:"{size.70}"},name:"size70",attributes:{},path:["size","70"]},75:{key:"{size.75}",$value:"0.938rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.938,unit:"rem"},$type:"dimension",key:"{size.75}"},name:"size75",attributes:{},path:["size","75"]},80:{key:"{size.80}",$value:"1rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:1,unit:"rem"},$type:"dimension",key:"{size.80}"},name:"size80",attributes:{},path:["size","80"]},90:{key:"{size.90}",$value:"1.25rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:1.25,unit:"rem"},$type:"dimension",key:"{size.90}"},name:"size90",attributes:{},path:["size","90"]},100:{key:"{size.100}",$value:"1.5rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:1.5,unit:"rem"},$type:"dimension",key:"{size.100}"},name:"size100",attributes:{},path:["size","100"]},110:{key:"{size.110}",$value:"1.75rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:1.75,unit:"rem"},$type:"dimension",key:"{size.110}"},name:"size110",attributes:{},path:["size","110"]},120:{key:"{size.120}",$value:"2rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:2,unit:"rem"},$type:"dimension",key:"{size.120}"},name:"size120",attributes:{},path:["size","120"]},130:{key:"{size.130}",$value:"2.5rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:2.5,unit:"rem"},$type:"dimension",key:"{size.130}"},name:"size130",attributes:{},path:["size","130"]},140:{key:"{size.140}",$value:"2.75rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:2.75,unit:"rem"},$type:"dimension",key:"{size.140}"},name:"size140",attributes:{},path:["size","140"]},150:{key:"{size.150}",$value:"3rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:3,unit:"rem"},$type:"dimension",key:"{size.150}"},name:"size150",attributes:{},path:["size","150"]},"00":{key:"{size.00}",$type:"dimension",$value:"0rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,original:{$type:"dimension",$value:{value:0,unit:"rem"},key:"{size.00}"},name:"size00",attributes:{},path:["size","00"]},"05":{key:"{size.05}",$value:"0.063rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.063,unit:"rem"},$type:"dimension",key:"{size.05}"},name:"size05",attributes:{},path:["size","05"]}},spacing:{10:{key:"{spacing.10}",$value:"0.125rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:0.125,unit:"rem"},$type:"dimension",key:"{spacing.10}"},name:"spacing10",attributes:{},path:["spacing","10"]},20:{key:"{spacing.20}",$value:"0.25rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:0.25,unit:"rem"},$type:"dimension",key:"{spacing.20}"},name:"spacing20",attributes:{},path:["spacing","20"]},30:{key:"{spacing.30}",$value:"0.5rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:0.5,unit:"rem"},$type:"dimension",key:"{spacing.30}"},name:"spacing30",attributes:{},path:["spacing","30"]},40:{key:"{spacing.40}",$value:"0.75rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:0.75,unit:"rem"},$type:"dimension",key:"{spacing.40}"},name:"spacing40",attributes:{},path:["spacing","40"]},50:{key:"{spacing.50}",$value:"1rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:1,unit:"rem"},$type:"dimension",key:"{spacing.50}"},name:"spacing50",attributes:{},path:["spacing","50"]},60:{key:"{spacing.60}",$value:"1.5rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:1.5,unit:"rem"},$type:"dimension",key:"{spacing.60}"},name:"spacing60",attributes:{},path:["spacing","60"]},70:{key:"{spacing.70}",$value:"2rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:2,unit:"rem"},$type:"dimension",key:"{spacing.70}"},name:"spacing70",attributes:{},path:["spacing","70"]},80:{key:"{spacing.80}",$value:"2.5rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:2.5,unit:"rem"},$type:"dimension",key:"{spacing.80}"},name:"spacing80",attributes:{},path:["spacing","80"]},90:{key:"{spacing.90}",$value:"3rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:3,unit:"rem"},$type:"dimension",key:"{spacing.90}"},name:"spacing90",attributes:{},path:["spacing","90"]},100:{key:"{spacing.100}",$value:"4rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:4,unit:"rem"},$type:"dimension",key:"{spacing.100}"},name:"spacing100",attributes:{},path:["spacing","100"]},110:{key:"{spacing.110}",$value:"5rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:5,unit:"rem"},$type:"dimension",key:"{spacing.110}"},name:"spacing110",attributes:{},path:["spacing","110"]},120:{key:"{spacing.120}",$value:"6rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:6,unit:"rem"},$type:"dimension",key:"{spacing.120}"},name:"spacing120",attributes:{},path:["spacing","120"]},xsmall:{key:"{spacing.xsmall}",$value:"0.25rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:"{size.20}",$type:"dimension",key:"{spacing.xsmall}"},name:"spacingXsmall",attributes:{},path:["spacing","xsmall"]},small:{key:"{spacing.small}",$value:"0.5rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:"{size.40}",$type:"dimension",key:"{spacing.small}"},name:"spacingSmall",attributes:{},path:["spacing","small"]},medium:{key:"{spacing.medium}",$value:"1rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:"{size.80}",$type:"dimension",key:"{spacing.medium}"},name:"spacingMedium",attributes:{},path:["spacing","medium"]},large:{key:"{spacing.large}",$value:"1.5rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:"{size.100}",$type:"dimension",key:"{spacing.large}"},name:"spacingLarge",attributes:{},path:["spacing","large"]},xlarge:{key:"{spacing.xlarge}",$value:"2rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:"{size.120}",$type:"dimension",key:"{spacing.xlarge}"},name:"spacingXlarge",attributes:{},path:["spacing","xlarge"]}},state:{focus:{key:"{state.focus}",$type:"string",$value:"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)",$description:"Focus style used when the component is focused (box-shadow).",filePath:"packages/theme/tokens/states.json",isSource:true,original:{$type:"string",$value:"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)",$description:"Focus style used when the component is focused (box-shadow).",key:"{state.focus}"},name:"stateFocus",attributes:{},path:["state","focus"]},focusInset:{key:"{state.focusInset}",$type:"string",$value:"inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)",$description:"Inset variant of the focus ring (box-shadow inset).",filePath:"packages/theme/tokens/states.json",isSource:true,original:{$type:"string",$value:"inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)",$description:"Inset variant of the focus ring (box-shadow inset).",key:"{state.focusInset}"},name:"stateFocusInset",attributes:{},path:["state","focusInset"]},focusContrastMode:{outline:{key:"{state.focusContrastMode.outline}",$value:"2px",$description:"Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.",filePath:"packages/theme/tokens/states.json",isSource:true,$type:"dimension",original:{$value:"2px",$description:"Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.",$type:"dimension",key:"{state.focusContrastMode.outline}"},name:"stateFocusContrastModeOutline",attributes:{},path:["state","focusContrastMode","outline"]},offset:{key:"{state.focusContrastMode.offset}",$value:"2px",$description:"Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active..",filePath:"packages/theme/tokens/states.json",isSource:true,$type:"dimension",original:{$value:"2px",$description:"Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active..",$type:"dimension",key:"{state.focusContrastMode.offset}"},name:"stateFocusContrastModeOffset",attributes:{},path:["state","focusContrastMode","offset"]}},invalid:{key:"{state.invalid}",$type:"string",$value:"inset 0 0 0 2px light-dark(#e62323, #e62323)",$description:"Invalid state style for form fields (box-shadow).",filePath:"packages/theme/tokens/states.json",isSource:true,original:{$type:"string",$value:"inset 0 0 0 2px {support.border.warning}",$description:"Invalid state style for form fields (box-shadow).",key:"{state.invalid}"},name:"stateInvalid",attributes:{},path:["state","invalid"]}},transition:{duration:{slow:{key:"{transition.duration.slow}",$value:"500ms",$type:"duration",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:"500ms",$type:"duration",key:"{transition.duration.slow}"},name:"transitionDurationSlow",attributes:{},path:["transition","duration","slow"]},normal:{key:"{transition.duration.normal}",$value:"300ms",$type:"duration",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:"300ms",$type:"duration",key:"{transition.duration.normal}"},name:"transitionDurationNormal",attributes:{},path:["transition","duration","normal"]},fast:{key:"{transition.duration.fast}",$value:"250ms",$type:"duration",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:"250ms",$type:"duration",key:"{transition.duration.fast}"},name:"transitionDurationFast",attributes:{},path:["transition","duration","fast"]}},timing:{easeOut:{key:"{transition.timing.easeOut}",$value:[0,0,0.58,1],$type:"cubicBezier",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:[0,0,0.58,1],$type:"cubicBezier",key:"{transition.timing.easeOut}"},name:"transitionTimingEaseOut",attributes:{},path:["transition","timing","easeOut"]},easeIn:{key:"{transition.timing.easeIn}",$value:[0.42,0,1,1],$type:"cubicBezier",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:[0.42,0,1,1],$type:"cubicBezier",key:"{transition.timing.easeIn}"},name:"transitionTimingEaseIn",attributes:{},path:["transition","timing","easeIn"]}},panel:{collapse:{key:"{transition.panel.collapse}",$value:{delay:"0ms",duration:"300ms",timingFunction:[0,0,0.58,1]},$type:"transition",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:{delay:"0ms",duration:"{transition.duration.normal}",timingFunction:"{transition.timing.easeOut}"},$type:"transition",key:"{transition.panel.collapse}"},name:"transitionPanelCollapse",attributes:{},path:["transition","panel","collapse"]},expand:{key:"{transition.panel.expand}",$value:{delay:"0ms",duration:"300ms",timingFunction:[0.42,0,1,1]},$type:"transition",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:{delay:"0ms",duration:"{transition.duration.normal}",timingFunction:"{transition.timing.easeIn}"},$type:"transition",key:"{transition.panel.expand}"},name:"transitionPanelExpand",attributes:{},path:["transition","panel","expand"]}}},typography:{font:{family:{key:"{typography.font.family}",$type:"fontFamily",$value:"Inter, sans-serif",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontFamily",$value:"Inter, sans-serif",key:"{typography.font.family}"},name:"typographyFontFamily",attributes:{},path:["typography","font","family"]},size:{10:{key:"{typography.font.size.10}",$value:"0.75rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:0.75,unit:"rem"},$type:"dimension",key:"{typography.font.size.10}"},name:"typographyFontSize10",attributes:{},path:["typography","font","size","10"]},20:{key:"{typography.font.size.20}",$value:"0.875rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:0.875,unit:"rem"},$type:"dimension",key:"{typography.font.size.20}"},name:"typographyFontSize20",attributes:{},path:["typography","font","size","20"]},30:{key:"{typography.font.size.30}",$value:"1rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1,unit:"rem"},$type:"dimension",key:"{typography.font.size.30}"},name:"typographyFontSize30",attributes:{},path:["typography","font","size","30"]},40:{key:"{typography.font.size.40}",$value:"1.125rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.125,unit:"rem"},$type:"dimension",key:"{typography.font.size.40}"},name:"typographyFontSize40",attributes:{},path:["typography","font","size","40"]},50:{key:"{typography.font.size.50}",$value:"1.25rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.25,unit:"rem"},$type:"dimension",key:"{typography.font.size.50}"},name:"typographyFontSize50",attributes:{},path:["typography","font","size","50"]},60:{key:"{typography.font.size.60}",$value:"1.5rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.5,unit:"rem"},$type:"dimension",key:"{typography.font.size.60}"},name:"typographyFontSize60",attributes:{},path:["typography","font","size","60"]},70:{key:"{typography.font.size.70}",$value:"1.625rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.625,unit:"rem"},$type:"dimension",key:"{typography.font.size.70}"},name:"typographyFontSize70",attributes:{},path:["typography","font","size","70"]},80:{key:"{typography.font.size.80}",$value:"2rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:2,unit:"rem"},$type:"dimension",key:"{typography.font.size.80}"},name:"typographyFontSize80",attributes:{},path:["typography","font","size","80"]},90:{key:"{typography.font.size.90}",$value:"2.25rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:2.25,unit:"rem"},$type:"dimension",key:"{typography.font.size.90}"},name:"typographyFontSize90",attributes:{},path:["typography","font","size","90"]},100:{key:"{typography.font.size.100}",$value:"2.625rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:2.625,unit:"rem"},$type:"dimension",key:"{typography.font.size.100}"},name:"typographyFontSize100",attributes:{},path:["typography","font","size","100"]}}},lineHeight:{10:{key:"{typography.lineHeight.10}",$value:"1rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.10}"},name:"typographyLineHeight10",attributes:{},path:["typography","lineHeight","10"]},20:{key:"{typography.lineHeight.20}",$value:"1.125rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.125,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.20}"},name:"typographyLineHeight20",attributes:{},path:["typography","lineHeight","20"]},30:{key:"{typography.lineHeight.30}",$value:"1.25rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.25,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.30}"},name:"typographyLineHeight30",attributes:{},path:["typography","lineHeight","30"]},40:{key:"{typography.lineHeight.40}",$value:"1.375rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.375,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.40}"},name:"typographyLineHeight40",attributes:{},path:["typography","lineHeight","40"]},50:{key:"{typography.lineHeight.50}",$value:"1.5rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.5,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.50}"},name:"typographyLineHeight50",attributes:{},path:["typography","lineHeight","50"]},60:{key:"{typography.lineHeight.60}",$value:"1.75rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.75,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.60}"},name:"typographyLineHeight60",attributes:{},path:["typography","lineHeight","60"]},70:{key:"{typography.lineHeight.70}",$value:"2rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:2,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.70}"},name:"typographyLineHeight70",attributes:{},path:["typography","lineHeight","70"]},80:{key:"{typography.lineHeight.80}",$value:"2.25rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:2.25,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.80}"},name:"typographyLineHeight80",attributes:{},path:["typography","lineHeight","80"]},90:{key:"{typography.lineHeight.90}",$value:"2.5rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:2.5,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.90}"},name:"typographyLineHeight90",attributes:{},path:["typography","lineHeight","90"]},100:{key:"{typography.lineHeight.100}",$value:"3rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:3,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.100}"},name:"typographyLineHeight100",attributes:{},path:["typography","lineHeight","100"]}},weight:{thin:{key:"{typography.weight.thin}",$value:100,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:100,$type:"fontWeight",key:"{typography.weight.thin}"},name:"typographyWeightThin",attributes:{},path:["typography","weight","thin"]},extraLight:{key:"{typography.weight.extraLight}",$value:200,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:200,$type:"fontWeight",key:"{typography.weight.extraLight}"},name:"typographyWeightExtraLight",attributes:{},path:["typography","weight","extraLight"]},light:{key:"{typography.weight.light}",$value:300,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:300,$type:"fontWeight",key:"{typography.weight.light}"},name:"typographyWeightLight",attributes:{},path:["typography","weight","light"]},regular:{key:"{typography.weight.regular}",$value:400,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:400,$type:"fontWeight",key:"{typography.weight.regular}"},name:"typographyWeightRegular",attributes:{},path:["typography","weight","regular"]},medium:{key:"{typography.weight.medium}",$value:500,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:500,$type:"fontWeight",key:"{typography.weight.medium}"},name:"typographyWeightMedium",attributes:{},path:["typography","weight","medium"]},semiBold:{key:"{typography.weight.semiBold}",$value:600,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:600,$type:"fontWeight",key:"{typography.weight.semiBold}"},name:"typographyWeightSemiBold",attributes:{},path:["typography","weight","semiBold"]},bold:{key:"{typography.weight.bold}",$value:700,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:700,$type:"fontWeight",key:"{typography.weight.bold}"},name:"typographyWeightBold",attributes:{},path:["typography","weight","bold"]},extraBold:{key:"{typography.weight.extraBold}",$value:800,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:800,$type:"fontWeight",key:"{typography.weight.extraBold}"},name:"typographyWeightExtraBold",attributes:{},path:["typography","weight","extraBold"]},black:{key:"{typography.weight.black}",$value:900,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:900,$type:"fontWeight",key:"{typography.weight.black}"},name:"typographyWeightBlack",attributes:{},path:["typography","weight","black"]}},body:{key:"{typography.body}",$type:"typography",$value:{fontFamily:"Inter, sans-serif",fontSize:"1rem",fontWeight:400,lineHeight:"1.25rem"},filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"typography",$value:{fontFamily:"{typography.font.family}",fontSize:"{typography.font.size.30}",fontWeight:"{typography.weight.regular}",lineHeight:"{typography.lineHeight.30}"},key:"{typography.body}"},name:"typographyBody",attributes:{},path:["typography","body"]},"body-small":{key:"{typography.body-small}",$type:"typography",$value:{fontFamily:"Inter, sans-serif",fontSize:"0.875rem",fontWeight:400,lineHeight:"1.125rem"},filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"typography",$value:{fontFamily:"{typography.font.family}",fontSize:"{typography.font.size.20}",fontWeight:"{typography.weight.regular}",lineHeight:"{typography.lineHeight.20}"},key:"{typography.body-small}"},name:"typographyBodySmall",attributes:{},path:["typography","body-small"]},description:{key:"{typography.description}",$type:"typography",$value:{fontFamily:"Inter, sans-serif",fontSize:"0.875rem",fontWeight:400,lineHeight:"1.125rem"},filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"typography",$value:{fontFamily:"{typography.font.family}",fontSize:"{typography.font.size.20}",fontWeight:"{typography.weight.regular}",lineHeight:"{typography.lineHeight.20}"},key:"{typography.description}"},name:"typographyDescription",attributes:{},path:["typography","description"]},"description-small":{key:"{typography.description-small}",$type:"typography",$value:{fontFamily:"Inter, sans-serif",fontSize:"0.75rem",fontWeight:400,lineHeight:"1rem"},filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"typography",$value:{fontFamily:"{typography.font.family}",fontSize:"{typography.font.size.10}",fontWeight:"{typography.weight.regular}",lineHeight:"{typography.lineHeight.10}"},key:"{typography.description-small}"},name:"typographyDescriptionSmall",attributes:{},path:["typography","description-small"]}},zIndex:{base:{key:"{zIndex.base}",$value:1,filePath:"packages/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:1,$type:"number",key:"{zIndex.base}"},name:"zIndexBase",attributes:{},path:["zIndex","base"]},above:{key:"{zIndex.above}",$value:10,filePath:"packages/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:10,$type:"number",key:"{zIndex.above}"},name:"zIndexAbove",attributes:{},path:["zIndex","above"]},sidebar:{key:"{zIndex.sidebar}",$value:500,filePath:"packages/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:500,$type:"number",key:"{zIndex.sidebar}"},name:"zIndexSidebar",attributes:{},path:["zIndex","sidebar"]},modal:{key:"{zIndex.modal}",$value:1000,filePath:"packages/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:1000,$type:"number",key:"{zIndex.modal}"},name:"zIndexModal",attributes:{},path:["zIndex","modal"]},toast:{key:"{zIndex.toast}",$value:1100,filePath:"packages/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:1100,$type:"number",key:"{zIndex.toast}"},name:"zIndexToast",attributes:{},path:["zIndex","toast"]},skipToContent:{key:"{zIndex.skipToContent}",$value:1200,filePath:"packages/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:1200,$type:"number",key:"{zIndex.skipToContent}"},name:"zIndexSkipToContent",attributes:{},path:["zIndex","skipToContent"]}}});
;// ./packages/theme/src/lib/style-dictionary-dist/variables.js
/**
 * Do not edit directly, this file was auto-generated.
 */var windowSizesSm="480px";var windowSizesMd="768px";var windowSizesLg="1024px";var windowSizesXl="1280px";var breakpointsXs="(max-width: calc(480px - 1px))";var breakpointsSm="(min-width: 480px)";var breakpointsMd="(min-width: 768px)";var breakpointsLg="(min-width: 1024px)";var breakpointsXl="(min-width: 1280px)";// This is the largest breakpoint
var buttonBackgroundPrimaryBase="light-dark(#143c50, #2e7ca5)";// Färg på primärknapp
var buttonBackgroundPrimaryHover="light-dark(#25607f, #25607f)";// Hover state på primärknapp
var buttonBackgroundPrimaryActive="light-dark(#2e7ca5, #143c50)";// Active state för primärknapp
var buttonBackgroundSecondaryBase="transparent";// Färg på sekundärknapp
var buttonBackgroundSecondaryHover="light-dark(#e6e6e6, #212121)";// Hover state på sekundärknapp
var buttonBackgroundSecondaryActive="light-dark(#d9d9d9, #262626)";// Active state för sekundärknapp
var buttonBackgroundTertiaryHover="light-dark(#0000000d, #ffffff21)";// Hover state för tertiär knapp
var buttonBackgroundTertiaryActive="light-dark(#d9d9d9, #262626)";// Active state för tertiär knapp
var buttonBackgroundDangerBase="light-dark(#e62323, #e62323)";// Färg på danger knapp
var buttonBackgroundDangerHover="light-dark(#bc1d1d, #bc1d1d)";// Hover state för danger knapp
var buttonBackgroundDangerActive="light-dark(#7d1313, #7d1313)";// Active state för danger knapp
var buttonBackgroundDisabled="light-dark(#f2f2f2, #262626)";// Disabled state för knappar
var buttonBorderSecondary="light-dark(#143c50, #f2f2f2)";// Kantfärg för sekundärknapp
var buttonIconHover="light-dark(#0000000d, #ffffff21)";var buttonIconActive="light-dark(#00000033, #ffffff33)";// Active state för ikoner
var colorBlackBase="#000";// Black
var colorBlackHover="#0d0d0d";// Black hover
var colorBlackOpacity5="#0000000d";// Black with 5% opacity
var colorWhiteBase="#fff";// White
var colorWhiteHover="#e6e6e6";// White hover
var colorWhiteOpacity13="#ffffff21";// White with 13% opacity
var colorGray10="#f2f2f2";var colorGray20="#e6e6e6";var colorGray30="#d9d9d9";var colorGray40="#ccc";var colorGray50="#bfbfbf";var colorGray60="#b3b3b3";var colorGray70="#a6a6a6";var colorGray80="#999";var colorGray90="#8c8c8c";var colorGray100="#808080";var colorGray110="#737373";var colorGray120="#666";var colorGray130="#5d5d5d";var colorGray140="#525252";var colorGray150="#474747";var colorGray160="#383838";var colorGray170="#333";var colorGray180="#262626";var colorGray190="#212121";var colorGray200="#171717";var colorBlue10="#eaf2f6";var colorBlue20="#d5e5ed";var colorBlue40="#abcbdb";var colorBlue50="#94BCD1";var colorBlue60="#82b0c9";var colorBlue70="#6CA3C0";var colorBlue80="#5897b8";var colorBlue90="#4289ad";var colorBlue100="#2e7ca5";var colorBlue110="#2C7399";var colorBlue120="#29698C";var colorBlue130="#25607f";var colorBlue150="#143c50";var colorPurple80="#b46ab4";var colorPurple110="#954b95";var colorRed100="#b90835";var colorOrange100="oklch(0.66 0.18 45)";var colorSignalBlue10="#eaf2f6";var colorSignalBlue20="#d5e5ed";var colorSignalBlue100="#06c";var colorSignalBlue170="#162b33";var colorSignalBlue180="#112127";var colorSignalGreen20="#d5f2d9";var colorSignalGreen30="#bae5c5";var colorSignalGreen100="#008d3c";var colorSignalGreen150="#194B33";var colorSignalGreen170="#163328";var colorSignalGreen180="#112722";var colorSignalYellow10="#fff8e2";var colorSignalYellow20="#fff1cd";var colorSignalYellow30="#ffeab8";var colorSignalYellow40="#ffe3a3";var colorSignalYellow50="#ffdc8b";var colorSignalYellow60="#ffd47b";var colorSignalYellow70="#fdcd5d";var colorSignalYellow80="#fbc640";var colorSignalYellow90="#fabf1b";var colorSignalYellow100="#fab900";var colorSignalYellow110="#daa105";var colorSignalYellow120="#bd8c1e";var colorSignalYellow130="#a17927";var colorSignalYellow140="#88672a";var colorSignalYellow150="#70562b";var colorSignalYellow160="#5a4629";var colorSignalYellow170="#453826";var colorSignalYellow180="#322a20";var colorSignalYellow190="#201c18";var colorSignalYellow200="#0f0e0e";var colorSignalRed10="#ffefef";var colorSignalRed20="#ffdfdf";var colorSignalRed30="#fcc8c8";var colorSignalRed40="#f9b0b0";var colorSignalRed50="#f69999";var colorSignalRed60="#f38181";var colorSignalRed70="#ef6a6a";var colorSignalRed80="#EC5252";var colorSignalRed90="#e93b3b";var colorSignalRed100="#e62323";var colorSignalRed110="#d12020";var colorSignalRed120="#bc1d1d";var colorSignalRed130="#a71919";var colorSignalRed140="#921616";var colorSignalRed150="#7d1313";var colorSignalRed160="#691010";var colorSignalRed170="#540d0d";var colorSignalRed180="#3f0a0a";var colorSignalRed190="#2a0606";var colorSignalRed200="#150303";var backgroundBase="light-dark(#fff, #171717)";// Standardbakgrund för våra applikationer
var backgroundHover="light-dark(#e6e6e6, #212121)";// Hoverfärg för bakgrund
var backgroundInverse="light-dark(#171717, #f2f2f2)";// Bakgrund eller element i med hög kontrast
var layer01Base="light-dark(#f2f2f2, #262626)";// Yta som används på background. Sekundär bakgrundsfärg
var layer01Hover="light-dark(#e6e6e6, #333)";// Hover state för layer01
var layer01Selected="light-dark(#d9d9d9, #383838)";// Selected state för layer01
var layer01SelectedHover="light-dark(#ccc, #474747)";// Hover state för layerSelected01
var layer02Base="light-dark(#fff, #383838)";// Yta som ligger på layer01
var layer02Hover="light-dark(#e6e6e6, #474747)";// Hover state för layer02
var layer02Selected="light-dark(#d9d9d9, #525252)";// Selected state för layer02
var layer02SelectedHover="light-dark(#ccc, #5d5d5d)";// Hover state för layerSelected02
var layerAccent01Base="light-dark(#d9d9d9, #383838)";// Accentfärg som används tillsammans med layer01
var layerAccent01Hover="light-dark(#ccc, #474747)";// Hover state för layerAccent01
var layerAccent01Selected="light-dark(#bfbfbf, #525252)";// Selected state för layerAccent01
var layerAccent02Base="light-dark(#f2f2f2, #262626)";// Accentfärg som används tillsammans med layer02
var layerAccent02Hover="light-dark(#e6e6e6, #333)";// Hover state för layerAccent02
var layerAccent02Selected="light-dark(#d9d9d9, #383838)";// Selected state för layerAccent02
var brandPrimary="light-dark(#b90835, #b90835)";// Primära röda färgen
var borderColorPrimary="light-dark(#171717, #f2f2f2)";// Kantlinje med hög kontrast, används med field01
var borderColorSecondary="light-dark(#737373, #8c8c8c)";// Kantlinje med medelhög kontrast
var borderColorSubtle="light-dark(#bfbfbf, #525252)";// Kantlinje med låg kontrast
var borderColorTertiary="light-dark(#143c50, #2e7ca5)";// Primärblå kantlinje
var borderColorDisabled="light-dark(#bfbfbf, #525252)";// Kantlinje för disabled state
var borderWidth="1px";var field01Base="light-dark(#f2f2f2, #262626)";// Standardfärg för fält, som ligger på background
var field01Hover="light-dark(#e6e6e6, #333)";// Hover state för field01
var field01Active="light-dark(#d9d9d9, #383838)";// Active state för field01
var field02Base="light-dark(#fff, #383838)";// Sekundfärfärg för fält, som ligger på layer01
var field02Hover="light-dark(#e6e6e6, #474747)";// Hover state för field02
var field02Active="light-dark(#d9d9d9, #525252)";// Active state för field02
var fieldDisabled="light-dark(#f2f2f2, #262626)";// Disabled state för fält
var skeleton01="light-dark(#f2f2f2, #262626)";// Standardfärg för skeleton
var skeleton02="light-dark(#d9d9d9, #383838)";// Färg som används när Skeleton ligger på bakgrundsfärgen `layer01` eller `light-dark(#f2f2f2,#262626)`
var iconPrimary="light-dark(#171717, #f2f2f2)";// Primär ikonfärg
var iconSecondary="light-dark(#525252, #a6a6a6)";// Sekundär ikonfärg
var iconTertiary="light-dark(#143c50, #f2f2f2)";var iconInverse="light-dark(#fff, #171717)";// Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge
var iconOnColor="light-dark(#fff, #fff)";// Ikonfärg på färgade ytor som inte är lager
var iconDisabled="light-dark(#bfbfbf, #525252)";// Ikoner som är disabled
var iconSuccess="light-dark(#008d3c, #008d3c)";// Ikonfär för success state
var iconInfo="light-dark(#06c, #06c)";// Ikonfärg för informationsikoner
var iconWarning="light-dark(#e62323, #e62323)";// Ikonfärg för varningsikoner och invalid state
var iconImportant="oklch(0.66 0.18 45)";// Ikonfärg för viktig information
var iconReadOnly="light-dark(#bfbfbf, #383838)";// Ikonfärg för read-only state
var linkEnabled="light-dark(#29698C, #6CA3C0)";// Primärlänkfärg
var linkHover="light-dark(#143c50, #94BCD1)";// Hover state för länkar
var linkPressed="light-dark(#171717, #abcbdb)";// Active/pressed state för länkar
var linkVisited="light-dark(#954b95, #b46ab4)";// Färg för besökta länkar
var supportBorderSuccess="light-dark(#008d3c, #008d3c)";// Kantlinje för success-notifikationer
var supportBorderInfo="light-dark(#06c, #06c)";// Kantlinje för notifikationer med information
var supportBorderImportant="oklch(0.66 0.18 45)";// Kantlinje för notifikationer med viktig information
var supportBorderWarning="light-dark(#e62323, #e62323)";// Kantlinje för notifikationer med varningar
var supportBackgroundSuccess="light-dark(#d5f2d9, #112722)";// Bakgrund för success-notifikationer
var supportBackgroundSuccessHover="light-dark(#bae5c5, #163328)";// Hoverbakgrund för success-notifikationer
var supportBackgroundInfo="light-dark(#eaf2f6, #112127)";// Bakgrund för notifikationer med information
var supportBackgroundInfoHover="light-dark(#d5e5ed, #162b33)";// Hoverbakgrund för notifikationer med information
var supportBackgroundImportant="light-dark(#fff8e2, #322a20)";// Bakgrund för notifikationer med viktig information
var supportBackgroundImportantHover="light-dark(#fff1cd, #453826)";// Hoverbakgrund för notifikationer med viktig information
var supportBackgroundWarning="light-dark(#ffdfdf, #3f0a0a)";// Bakgrund för notifikationer med varningar
var supportBackgroundWarningHover="light-dark(#fcc8c8, #540d0d)";// Hoverbakgrund för notifikationer med varningar
var textPrimary="light-dark(#171717, #f2f2f2)";// Primär textfärg. Rubriker och brödtext.
var textSecondary="light-dark(#525252, #a6a6a6)";// Sekundär textfärg
var textTertiary="light-dark(#143c50, #f2f2f2)";// Textfärg på tertiär knapp
var textOnColor="light-dark(#fff, #fff)";// Textfärg på färgade bakgrunder som inte är lager
var textInverse="light-dark(#f2f2f2, #171717)";// Inverterad textfärg
var textDisabled="light-dark(#bfbfbf, #525252)";// Textfärg för disabled state
var textWarning="light-dark(#e62323, #EC5252)";// Textfärg för felmeddelanden
var textPlaceholder="light-dark(#a6a6a6, #525252)";// Textfärg för platshållare
var textReadOnly="light-dark(#737373, #999)";// Textfärg för read-only state
var badgeBackground="light-dark(#e62323, #e62323)";var calendarDateBackgroundHover="light-dark(#0000001a, #ffffff1a)";var calendarDateBackgroundSelected="light-dark(#143c50, #5897b8)";var calendarDateBackgroundStartRange="light-dark(#143c50, #5897b8)";var calendarDateBackgroundInRange="light-dark(#d5e5ed, #143c50)";var calendarDateBackgroundEndRange="light-dark(#143c50, #5897b8)";var logoPrimary="light-dark(#b90835, #fff)";// Färg på logotypen
var menuItemBackgroundHover="light-dark(#e6e6e6, #212121)";// Bakgrundsfärg för menu vid hover
var menuItemBackgroundSelected="light-dark(#f2f2f2, #262626)";// Bakgrundsfärg för aktiv menu
var menuTextSectionHeader="light-dark(#525252, #a6a6a6)";var size10="0.125rem";var size15="0.188rem";var size20="0.25rem";var size30="0.375rem";var size40="0.5rem";var size50="0.625rem";var size60="0.75rem";var size70="0.875rem";var size75="0.938rem";var size80="1rem";var size90="1.25rem";var size100="1.5rem";var size110="1.75rem";var size120="2rem";var size130="2.5rem";var size140="2.75rem";var size150="3rem";var size00="0rem";var size05="0.063rem";var spacing10="0.125rem";var spacing20="0.25rem";var spacing30="0.5rem";var spacing40="0.75rem";var spacing50="1rem";var spacing60="1.5rem";var spacing70="2rem";var spacing80="2.5rem";var spacing90="3rem";var spacing100="4rem";var spacing110="5rem";var spacing120="6rem";var spacingXsmall="0.25rem";var spacingSmall="0.5rem";var spacingMedium="1rem";var spacingLarge="1.5rem";var spacingXlarge="2rem";var stateFocus="0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)";// Focus style used when the component is focused (box-shadow).
var stateFocusInset="inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)";// Inset variant of the focus ring (box-shadow inset).
var stateFocusContrastModeOutline="2px";// Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.
var stateFocusContrastModeOffset="2px";// Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active..
var stateInvalid="inset 0 0 0 2px light-dark(#e62323, #e62323)";// Invalid state style for form fields (box-shadow).
var transitionDurationSlow="500ms";var transitionDurationNormal="300ms";var transitionDurationFast="250ms";var transitionTimingEaseOut=(/* unused pure expression or super */ null && ([0,0,0.58,1]));var transitionTimingEaseIn=(/* unused pure expression or super */ null && ([0.42,0,1,1]));var transitionPanelCollapse={delay:"0ms",duration:"300ms",timingFunction:[0,0,0.58,1]};var transitionPanelExpand={delay:"0ms",duration:"300ms",timingFunction:[0.42,0,1,1]};var typographyFontFamily="Inter, sans-serif";var typographyFontSize10="0.75rem";var typographyFontSize20="0.875rem";var typographyFontSize30="1rem";var typographyFontSize40="1.125rem";var typographyFontSize50="1.25rem";var typographyFontSize60="1.5rem";var typographyFontSize70="1.625rem";var typographyFontSize80="2rem";var typographyFontSize90="2.25rem";var typographyFontSize100="2.625rem";var typographyLineHeight10="1rem";var typographyLineHeight20="1.125rem";var typographyLineHeight30="1.25rem";var typographyLineHeight40="1.375rem";var typographyLineHeight50="1.5rem";var typographyLineHeight60="1.75rem";var typographyLineHeight70="2rem";var typographyLineHeight80="2.25rem";var typographyLineHeight90="2.5rem";var typographyLineHeight100="3rem";var typographyWeightThin=100;var typographyWeightExtraLight=200;var typographyWeightLight=300;var typographyWeightRegular=400;var typographyWeightMedium=500;var typographyWeightSemiBold=600;var typographyWeightBold=700;var typographyWeightExtraBold=800;var typographyWeightBlack=900;var typographyBody={fontFamily:"Inter, sans-serif",fontSize:"1rem",fontWeight:400,lineHeight:"1.25rem"};var typographyBodySmall={fontFamily:"Inter, sans-serif",fontSize:"0.875rem",fontWeight:400,lineHeight:"1.125rem"};var typographyDescription={fontFamily:"Inter, sans-serif",fontSize:"0.875rem",fontWeight:400,lineHeight:"1.125rem"};var typographyDescriptionSmall={fontFamily:"Inter, sans-serif",fontSize:"0.75rem",fontWeight:400,lineHeight:"1rem"};var zIndexBase=1;var zIndexAbove=10;var zIndexSidebar=500;var zIndexModal=1000;var zIndexToast=1100;var zIndexSkipToContent=1200;
;// ./packages/theme/src/lib/index.ts

;// ./packages/theme/src/index.ts


/***/ },

/***/ 19060
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ FieldError_FieldError)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
;// ./packages/components/src/field-error/FieldError.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const FieldError_module = ({"fieldError":"fieldError_K9VX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/field-error/FieldError.tsx
var FieldError_FieldError=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){var children=props.children,isInvalid=props.isInvalid;var className=(0,clsx/* default */.A)(FieldError_module.fieldError,props.className);var context=(0,react.useContext)(FieldError/* FieldErrorContext */.C);if(!context&&isInvalid&&typeof children!=='function'){return/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{className:className,children:children});}if(!(context!=null&&context.isInvalid))return null;return/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,Object.assign({},props,{ref:ref,className:className}));});FieldError_FieldError.displayName='FieldError';

/***/ },

/***/ 19615
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var dist_Text = __webpack_require__(27279);
;// ./packages/components/src/text/Text.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Text_module = ({"body":"body_Vxmv","body-01":"body-01_whJM","body-02":"body-02_Xi1v","body-small":"body-small_JwBE","description":"description_XYgX","description-small":"description-small_tno4","bold":"bold_YLmd","italic":"italic_CnUx"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","size","variant","isExpressive","elementType"];/**
 * @deprecated since v15.0.0 Use size prop instead. Only kept for backwards compatibility with body-01 and body-02.
 */var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var _clsx;var children=_ref.children,className=_ref.className,size=_ref.size,variant=_ref.variant,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var getClassName=function getClassName(){if(variant==='body-01'){return Text_module['body-01'];}if(variant==='body-02'){return Text_module['body-02'];}var isDescription=rest.slot==='description';if(isDescription){return size==='small'?Text_module['description-small']:Text_module['description'];}return size==='small'?Text_module['body-small']:Text_module['body'];};var textProps=Object.assign({className:(0,clsx/* default */.A)(getClassName(),(_clsx={},_clsx[Text_module.bold]=['b','strong'].includes(elementType),_clsx[Text_module.italic]=['i','em'].includes(elementType),_clsx),className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

/***/ },

/***/ 20011
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ CheckboxGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var CheckboxGroupContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

/***/ },

/***/ 28777
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover_Popover)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
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
var _excluded=["children","className","offset","hideArrow"];function Popover_Popover(_ref){var children=_ref.children,className=_ref.className,_ref$offset=_ref.offset,offset=_ref$offset===void 0?4:_ref$offset,_ref$hideArrow=_ref.hideArrow,hideArrow=_ref$hideArrow===void 0?false:_ref$hideArrow,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Popover/* Popover */.A,Object.assign({},props,{offset:offset,className:(0,clsx/* default */.A)(Popover_module.popover,className),children:[!hideArrow&&/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Popover_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L8 8 L16 0"})})}),children]}));}

/***/ },

/***/ 30699
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
const site_docs_components_popover_mdx_17d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/popover","title":"Popover","description":"Popover kan användas för att förklara en knapp eller annan interaktion när det inte går att få plats med informationen i knappen.","source":"@site/docs/components/popover.mdx","sourceDirName":"components","slug":"/components/popover","permalink":"/pr-preview/pr-1024/components/popover","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Popover","description":"Popover kan användas för att förklara en knapp eller annan interaktion när det inte går att få plats med informationen i knappen."},"sidebar":"sideBar","previous":{"title":"Modal","permalink":"/pr-preview/pr-1024/components/modal"},"next":{"title":"ProgressBar","permalink":"/pr-preview/pr-1024/components/progress-bar"}}');
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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user-cog.js
var user_cog = __webpack_require__(55812);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.js
var arrow_left = __webpack_require__(90232);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up.js
var arrow_up = __webpack_require__(6632);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/Pressable.mjs
var Pressable = __webpack_require__(94752);
;// ./apps/docs/src/components/examples/popover/PopoverExamples.tsx
var PopoverExample=function PopoverExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",style:{display:'block'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon","aria-label":"Spara",children:/*#__PURE__*/(0,jsx_runtime.jsx)(save/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:"Spara"})]})});};var PopoverTextExample=function PopoverTextExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",style:{display:'block'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon","aria-label":"Din dator",children:/*#__PURE__*/(0,jsx_runtime.jsx)(laptop/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Popover/* Popover */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{children:"H\xE5rddiskutrymme"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{children:"Din dator har 150gb kvar i hemkatalogen."})]})]})});};var PopoverFormExample=function PopoverFormExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",style:{display:'block'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon","aria-label":"Tillg\xE4nglighetsinst\xE4llningar",children:/*#__PURE__*/(0,jsx_runtime.jsx)(user_cog/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(CheckboxGroup/* CheckboxGroup */.$,{description:"Justera inst\xE4llningar f\xF6r att f\xF6rb\xE4ttra din anv\xE4ndarupplevelse.",label:"Tillg\xE4nglighetsinst\xE4llningar",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{value:"compact",children:"Kompakt l\xE4ge"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{value:"animations",children:"Animationer"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{value:"contrast",children:"H\xF6gkontrastl\xE4ge"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{value:"dark-mode",children:"M\xF6rkt l\xE4ge"})]})})]})});};var PopoverPlacement=function PopoverPlacement(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"card",style:{display:'flex',alignItems:'center',flexDirection:'row',gap:'1rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_left/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{placement:"left",children:"Popover visas till v\xE4nster om trigger-elementet"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_up/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{placement:"top",children:"Popover visas p\xE5 ovansidan av trigger-elementet"})]})]});};var ControlledPopover=function ControlledPopover(){var _React$useState=react.useState(false),isOpen=_React$useState[0],setOpen=_React$useState[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{isOpen:isOpen,onOpenChange:setOpen,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{children:"Klicka p\xE5 mig"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:"Enligt botanisk definition r\xE4knas bananer faktiskt som b\xE4r, medan jordgubbar inte g\xF6r det."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("pre",{children:["Popover ",isOpen?'visas':'visas inte']})]});};var CustomTriggerPopover=function CustomTriggerPopover(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Pressable/* Pressable */.o,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{role:"button",children:"Trigger"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:"Med hj\xE4lp av Pressable kan vilket element som helst bli en trigger!"})]});};var PopoverContentExample=function PopoverContentExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"E-post",description:"Ange din e-postadress f\xF6r att f\xE5 nyhetsbrev.",popover:{children:'Vi kommer att skicka nyhetsbrev till den här adressen.'}})});};
;// ./apps/docs/docs/components/popover.mdx


const frontMatter = {
	title: 'Popover',
	description: 'Popover kan användas för att förklara en knapp eller annan interaktion när det inte går att få plats med informationen i knappen.'
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



/***/ },

/***/ 34704
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Label)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
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

/***/ },

/***/ 38739
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container_uCKZ","removeMargins":"removeMargins_rQ9U","contained":"contained_R9lB","flex":"flex_LQ20","fluid":"fluid_Y1tE","col":"col_tmG6","col-1":"col-1_OVvW","col-2":"col-2_XfVI","col-3":"col-3_KxqE","col-quarter":"col-quarter_eUut","col-4":"col-4_Ovxr","col-third":"col-third_FUaF","col-5":"col-5_uIyd","col-6":"col-6_i8WR","col-half":"col-half_GzSn","col-7":"col-7_devX","col-8":"col-8_tlAZ","col-9":"col-9_Nbjm","col-10":"col-10_rwyP","col-11":"col-11_ShOw","col-12":"col-12_eQeJ","col-full":"col-full_K_XT","col-auto":"col-auto_nMhH","col-grow":"col-grow_TBON","col-xs-1":"col-xs-1_Bg_O","col-xs-2":"col-xs-2_UhmL","col-xs-3":"col-xs-3_mEvh","col-xs-quarter":"col-xs-quarter_mtoI","col-xs-4":"col-xs-4_Uv5i","col-xs-third":"col-xs-third_AHrM","col-xs-5":"col-xs-5_Gdnm","col-xs-6":"col-xs-6_z366","col-xs-half":"col-xs-half_vH6m","col-xs-7":"col-xs-7_HNwO","col-xs-8":"col-xs-8_Vwih","col-xs-9":"col-xs-9_vfTc","col-xs-10":"col-xs-10_wJWt","col-xs-11":"col-xs-11_KTEA","col-xs-12":"col-xs-12_TaE_","col-xs-full":"col-xs-full_enWi","col-xs-auto":"col-xs-auto_G2jj","col-xs-grow":"col-xs-grow_kY1W","col-sm-1":"col-sm-1_YvIs","col-sm-2":"col-sm-2_NSCq","col-sm-3":"col-sm-3_cJ0H","col-sm-quarter":"col-sm-quarter_WWBJ","col-sm-4":"col-sm-4_dtZx","col-sm-third":"col-sm-third_g3dG","col-sm-5":"col-sm-5_C87q","col-sm-6":"col-sm-6_SkMd","col-sm-half":"col-sm-half_QX4f","col-sm-7":"col-sm-7_wa6s","col-sm-8":"col-sm-8_zH5I","col-sm-9":"col-sm-9_ym4Z","col-sm-10":"col-sm-10_jE4j","col-sm-11":"col-sm-11_Va2g","col-sm-12":"col-sm-12_BgjD","col-sm-full":"col-sm-full_Nb6O","col-sm-auto":"col-sm-auto_Qj4m","col-sm-grow":"col-sm-grow_mAH5","col-md-1":"col-md-1_Zeqd","col-md-2":"col-md-2_DR6K","col-md-3":"col-md-3_OZK7","col-md-quarter":"col-md-quarter_AmxM","col-md-4":"col-md-4_NxEu","col-md-third":"col-md-third_J4Ja","col-md-5":"col-md-5_cBkY","col-md-6":"col-md-6_it5t","col-md-half":"col-md-half_aEv_","col-md-7":"col-md-7__sAT","col-md-8":"col-md-8_WfW7","col-md-9":"col-md-9_orzQ","col-md-10":"col-md-10_wh5t","col-md-11":"col-md-11_Wsgq","col-md-12":"col-md-12_gZQg","col-md-full":"col-md-full_Ow4Z","col-md-auto":"col-md-auto_e67j","col-md-grow":"col-md-grow_quHq","col-lg-1":"col-lg-1_e1au","col-lg-2":"col-lg-2_fUsj","col-lg-3":"col-lg-3_EhhM","col-lg-quarter":"col-lg-quarter_SI9I","col-lg-4":"col-lg-4_VuKz","col-lg-third":"col-lg-third_Lf2A","col-lg-5":"col-lg-5_TF5r","col-lg-6":"col-lg-6_E93v","col-lg-half":"col-lg-half_ZdoE","col-lg-7":"col-lg-7_L5CO","col-lg-8":"col-lg-8_ZBHN","col-lg-9":"col-lg-9_TbUu","col-lg-10":"col-lg-10_Tsqu","col-lg-11":"col-lg-11_Eg8x","col-lg-12":"col-lg-12_eNvi","col-lg-full":"col-lg-full_SaRE","col-lg-auto":"col-lg-auto_fNRO","col-lg-grow":"col-lg-grow_XTrt","col-xl-1":"col-xl-1_BRna","col-xl-2":"col-xl-2_eGSK","col-xl-3":"col-xl-3_RrW2","col-xl-quarter":"col-xl-quarter_V_Yw","col-xl-4":"col-xl-4_R4AZ","col-xl-third":"col-xl-third_W3hT","col-xl-5":"col-xl-5_k7Gx","col-xl-6":"col-xl-6_xZyb","col-xl-half":"col-xl-half_V9xE","col-xl-7":"col-xl-7_lJfg","col-xl-8":"col-xl-8_zErQ","col-xl-9":"col-xl-9_oYwQ","col-xl-10":"col-xl-10_cLTa","col-xl-11":"col-xl-11_xqWK","col-xl-12":"col-xl-12_Vrsf","col-xl-full":"col-xl-full_vVSm","col-xl-auto":"col-xl-auto_YBap","col-xl-grow":"col-xl-grow_YMBn","offset-1":"offset-1_ZQkJ","offset-2":"offset-2_Reek","offset-3":"offset-3_SDkl","offset-quarter":"offset-quarter_ho5e","offset-4":"offset-4_L0XB","offset-third":"offset-third_dE8e","offset-5":"offset-5_Mz95","offset-6":"offset-6_Zp68","offset-half":"offset-half_nGtc","offset-7":"offset-7_ZApX","offset-8":"offset-8_UZTZ","offset-9":"offset-9_FiKS","offset-10":"offset-10_hN9R","offset-11":"offset-11_cqgv","offset-auto":"offset-auto_ZBrI","offset-xs-1":"offset-xs-1__ZrT","offset-xs-2":"offset-xs-2_WySR","offset-xs-3":"offset-xs-3_u9Tb","offset-xs-quarter":"offset-xs-quarter_Pd1o","offset-xs-4":"offset-xs-4_Bibg","offset-xs-third":"offset-xs-third_CeeW","offset-xs-5":"offset-xs-5_OgED","offset-xs-6":"offset-xs-6_ihSu","offset-xs-half":"offset-xs-half_Vrdz","offset-xs-7":"offset-xs-7_TtZQ","offset-xs-8":"offset-xs-8_Ftc2","offset-xs-9":"offset-xs-9_HptZ","offset-xs-10":"offset-xs-10_umjb","offset-xs-11":"offset-xs-11_Suix","offset-xs-auto":"offset-xs-auto_fxe8","offset-sm-1":"offset-sm-1_knSM","offset-sm-2":"offset-sm-2_zWxo","offset-sm-3":"offset-sm-3_oqp6","offset-sm-quarter":"offset-sm-quarter_Nav1","offset-sm-4":"offset-sm-4_EvUX","offset-sm-third":"offset-sm-third_tGgh","offset-sm-5":"offset-sm-5_raNi","offset-sm-6":"offset-sm-6_KTA8","offset-sm-half":"offset-sm-half_ab81","offset-sm-7":"offset-sm-7_duQl","offset-sm-8":"offset-sm-8_uRxp","offset-sm-9":"offset-sm-9_AqYl","offset-sm-10":"offset-sm-10_Wt6J","offset-sm-11":"offset-sm-11_yAYq","offset-sm-auto":"offset-sm-auto_FAp6","offset-md-1":"offset-md-1_OpgB","offset-md-2":"offset-md-2_U24n","offset-md-3":"offset-md-3_YxnQ","offset-md-quarter":"offset-md-quarter_y53T","offset-md-4":"offset-md-4_ZaOC","offset-md-third":"offset-md-third_HZWP","offset-md-5":"offset-md-5_KVFL","offset-md-6":"offset-md-6_bZvL","offset-md-half":"offset-md-half_yilA","offset-md-7":"offset-md-7_fs04","offset-md-8":"offset-md-8_QmYF","offset-md-9":"offset-md-9_QoVc","offset-md-10":"offset-md-10_OrE0","offset-md-11":"offset-md-11_reKz","offset-md-auto":"offset-md-auto_ETdh","offset-lg-1":"offset-lg-1_zi3j","offset-lg-2":"offset-lg-2_YgjU","offset-lg-3":"offset-lg-3_CHdw","offset-lg-quarter":"offset-lg-quarter_Chor","offset-lg-4":"offset-lg-4_NOCF","offset-lg-third":"offset-lg-third_LTbL","offset-lg-5":"offset-lg-5_dGzM","offset-lg-6":"offset-lg-6_kXXi","offset-lg-half":"offset-lg-half_vFHN","offset-lg-7":"offset-lg-7_jIth","offset-lg-8":"offset-lg-8_T0Jx","offset-lg-9":"offset-lg-9_mYmL","offset-lg-10":"offset-lg-10_clJ6","offset-lg-11":"offset-lg-11_zFW2","offset-lg-auto":"offset-lg-auto_W3q4","offset-xl-1":"offset-xl-1_pRWH","offset-xl-2":"offset-xl-2_FX3q","offset-xl-3":"offset-xl-3_P8xx","offset-xl-quarter":"offset-xl-quarter_RLTy","offset-xl-4":"offset-xl-4_n7Vy","offset-xl-third":"offset-xl-third_w0fc","offset-xl-5":"offset-xl-5_vC_8","offset-xl-6":"offset-xl-6_BvQ2","offset-xl-half":"offset-xl-half_HQ16","offset-xl-7":"offset-xl-7_m1bv","offset-xl-8":"offset-xl-8_FJ1u","offset-xl-9":"offset-xl-9_oAbC","offset-xl-10":"offset-xl-10_wwaH","offset-xl-11":"offset-xl-11_HpDF","offset-xl-auto":"offset-xl-auto_Dv5P"});

/***/ },

/***/ 39107
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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
var CharacterCounter=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){var _value$toString;;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,Input/* InputContext */.E);props=_useContextProps[0];var _props=props,maxLength=_props.maxLength,value=_props.value,isLonely=_props.isLonely;var _ref=(_value$toString=value==null?void 0:value.toString())!=null?_value$toString:'',length=_ref.length;var isMaxLengthDefined=maxLength!==undefined;return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:CharacterCounter_module.characterCounter,"data-exceeded":isMaxLengthDefined&&length>maxLength||undefined,"data-lonely":isLonely||undefined,children:isMaxLengthDefined?length+" / "+maxLength:length});});CharacterCounter.displayName='CharacterCounter';
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(34704);
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
;// ./packages/components/src/textfield/TextFieldBase.tsx
var TextFieldBase=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){var _clsx;;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,TextField/* TextFieldContext */.H);props=_useContextProps[0];var _props=props,label=_props.label,description=_props.description,errorMessage=_props.errorMessage,showCounter=_props.showCounter,_props$errorPosition=_props.errorPosition,errorPosition=_props$errorPosition===void 0?'top':_props$errorPosition,_props$size=_props.size,size=_props$size===void 0?'large':_props$size,popover=_props.popover,children=_props.children;return/*#__PURE__*/(0,jsx_runtime.jsxs)(TextField/* TextField */.A,Object.assign({},props,{className:(0,clsx/* clsx */.$)(TextField_module/* default */.A.textField,(_clsx={},_clsx[TextField_module/* default */.A.medium]=size==='medium',_clsx)),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapper/* LabelWrapper */.cR,{popover:popover,children:label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{children:label})}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:description}),showCounter&&/*#__PURE__*/(0,jsx_runtime.jsx)(CharacterCounter,{isLonely:!description}),errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",children:errorMessage}),children,errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",className:TextField_module/* default */.A.bottomError,children:errorMessage})]}));});TextFieldBase.displayName='TextFieldBase';

/***/ },

/***/ 45644
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ AccordionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var AccordionContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

/***/ },

/***/ 56636
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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
/* harmony default export */ const LinkButton_module = ({"linkButton":"linkButton_DlJV","secondary":"secondary_aNB6","icon":"icon_g3pu","tertiary":"tertiary_tl3f","danger":"danger_qkvT","iconBtn":"iconBtn_Ngss","medium":"medium_St93","iconLeft":"iconLeft_r90N","fullwidth":"fullwidth_yUSG","button":"button_CzNs"});
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
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

/***/ },

/***/ 68713
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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
var common = __webpack_require__(12665);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/Pressable.mjs
var Pressable = __webpack_require__(94752);
;// ./apps/docs/src/utils/jsdocLinkToMarkdown.ts
var jsdocLinkToMarkdown=function jsdocLinkToMarkdown(jsdocLink){if(!jsdocLink.includes('@link')){return jsdocLink;}var textBefore=jsdocLink.substring(0,jsdocLink.indexOf('{@link')).replace(/@\S*/g,'');var url=jsdocLink.substring(jsdocLink.indexOf('http'),jsdocLink.lastIndexOf('/'));var linkText=jsdocLink.substring(jsdocLink.lastIndexOf('/')+2,jsdocLink.lastIndexOf('}'));return textBefore+". See ["+linkText+"]("+url+").";};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/PropsTable.tsx
var DisplayCompositeTypes=function DisplayCompositeTypes(_ref){var props=_ref.props;switch(props.type.name){case'enum':{return/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Pressable/* Pressable */.o,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{role:"button",style:{cursor:'pointer'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props.type.raw,inline:true,language:"typescript",markers:[]})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"hljs-code",children:props.type.value.map(function(r,i){return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{children:[i===0?' ':' | ',/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:r.value.replace(/"/g,"'"),inline:true,language:"typescript",markers:[]})]},""+r.value+i);})})})]});}default:return/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props.type.name,inline:true,language:"typescript",markers:[]});}};var PropTable=function PropTable(_ref2){var _globalData$docusauru,_componentsDocs$find;var name=_ref2.name,_ref2$defaultOpen=_ref2.defaultOpen,defaultOpen=_ref2$defaultOpen===void 0?true:_ref2$defaultOpen;var globalData=(0,useGlobalData/* default */.Ay)();var componentsDocs=(_globalData$docusauru=globalData['docusaurus-plugin-react-docgen-typescript'])==null?void 0:_globalData$docusauru["default"];if(!componentsDocs){return null;}var props=(_componentsDocs$find=componentsDocs.find(function(componentDoc){return componentDoc.displayName===name;}))==null?void 0:_componentsDocs$find.props;if(!props){return null;}var _Object$entries$reduc=Object.entries(props).reduce(function(acc,_ref3){var key=_ref3[0],value=_ref3[1];if(key.startsWith('on')){acc.events[key]=value;}else if(key.startsWith('aria-')){acc.accessibility[key]=value;}else{acc.rest[key]=value;}return acc;},{events:{},accessibility:{},rest:{}}),events=_Object$entries$reduc.events,accessibility=_Object$entries$reduc.accessibility,rest=_Object$entries$reduc.rest;var Grid=function Grid(_ref4){var propGroup=_ref4.propGroup,_ref4$showDefault=_ref4.showDefault,showDefault=_ref4$showDefault===void 0?true:_ref4$showDefault;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:propstable_module.propsGridTable,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Name"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Type"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:showDefault&&'Default'}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Description"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{children:Object.keys(propGroup).map(function(key){return/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("td",{"data-title":"Name",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:key,inline:true,language:"typescript",markers:[]}),props[key].required&&' *']}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Type",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DisplayCompositeTypes,{props:props[key]})}),showDefault?/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Default",children:props[key].defaultValue?/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props[key].defaultValue.value,inline:true,language:"typescript",markers:[]}):'-'}):/*#__PURE__*/(0,jsx_runtime.jsx)("td",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Description",children:/*#__PURE__*/(0,jsx_runtime.jsx)(lib/* Markdown */.oz,{children:jsdocLinkToMarkdown(props[key].description)})})]},key);})})]})});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Accordion/* Accordion */.n,{className:propstable_module.accordion,allowsMultipleExpanded:true,defaultExpandedKeys:defaultOpen?['props']:[],children:[Object.getOwnPropertyNames(rest).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"props",title:"Props",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:rest})}),Object.getOwnPropertyNames(events).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"events",title:"Events",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:events,showDefault:false})}),Object.getOwnPropertyNames(accessibility).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"accessibility",title:"Tillg\xE4nglighet",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:accessibility,showDefault:false})})]});};

/***/ },

/***/ 73202
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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

/***/ },

/***/ 73413
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"textField":"textField_IarX","bottomError":"bottomError_XU77","textArea":"textArea_M6yF","input":"input_g6A6","wrap":"wrap_ljmz","medium":"medium_jalb","passwordText":"passwordText_gBIs","passwordButton":"passwordButton_kacG"});

/***/ },

/***/ 74351
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38739);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1160);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
var _excluded=["children","isContained","removeMargins"];/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/grid}
 */var Grid=function Grid(_ref){var children=_ref.children,_ref$isContained=_ref.isContained,isContained=_ref$isContained===void 0?false:_ref$isContained,_ref$removeMargins=_ref.removeMargins,removeMargins=_ref$removeMargins===void 0?false:_ref$removeMargins,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",Object.assign({},rest,{className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.container,isContained&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.contained,removeMargins&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.removeMargins,rest.className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.flex,children:children})}));};

/***/ },

/***/ 74890
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ FeedbackStatusIcon)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(45773);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(97213);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/flag.js
var flag = __webpack_require__(59155);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(418);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/common/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"ok":"okay","information":"information","importantInformation":"important information","warning":"warning"},"sv":{"ok":"okej","information":"information","importantInformation":"viktig information","warning":"varning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/common/FeedbackStatusIcon.tsx
var _excluded=["status","aria-label","size"];var icons={success:check/* default */.A,info:info/* default */.A,important:flag/* default */.A,warning:triangle_alert/* default */.A};var labels={success:'ok',info:'information',important:'importantInformation',warning:'warning'};var FeedbackStatusIcon=function FeedbackStatusIcon(_ref){var status=_ref.status,ariaLabel=_ref['aria-label'],_ref$size=_ref.size,size=_ref$size===void 0?20:_ref$size,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var Icon=icons[status];return/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,Object.assign({"aria-label":ariaLabel||strings.format(labels[status]),size:size},rest));};

/***/ },

/***/ 75394
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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
var useSelectAll=function useSelectAll(children,_ref){var selectedItems=_ref.value;var checkboxes=react.Children.toArray(children).filter(function(child){return/*#__PURE__*/react.isValidElement(child)&&child.type===Checkbox/* Checkbox */.S;});var numberOfCheckboxes=react.Children.count(checkboxes);var checkboxValues=react.Children.toArray(children).filter(function(child){return/*#__PURE__*/react.isValidElement(child);}).filter(function(child){return!!child&&child.type===Checkbox/* Checkbox */.S;}).map(function(child){return child.props.value||'';});var noneSelected=selectedItems.length===0;var allSelected=selectedItems.length===numberOfCheckboxes;var someSelected=!noneSelected&&!allSelected;return{allSelected:allSelected,someSelected:someSelected,checkboxValues:checkboxValues};};
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
function CheckboxGroup(props){var state=(0,useCheckboxGroupState/* useCheckboxGroupState */.h)(props);var stringFormatter=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var _useCheckboxGroup=(0,useCheckboxGroup/* useCheckboxGroup */.M)(props,state),groupProps=_useCheckboxGroup.groupProps,labelProps=_useCheckboxGroup.labelProps,descriptionProps=_useCheckboxGroup.descriptionProps;var _useSelectAll=useSelectAll(props.children,state),allSelected=_useSelectAll.allSelected,someSelected=_useSelectAll.someSelected,checkboxValues=_useSelectAll.checkboxValues;var handleChange=function handleChange(checked){state.setValue(checked?checkboxValues:[]);};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({},groupProps,{className:Checkbox_module/* default */.A.checkboxGroup,"data-readonly":props.isReadOnly||undefined,"data-disabled":props.isDisabled||undefined,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapper/* LabelWrapper */.cR,{popover:props.popover,children:props.label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,Object.assign({},labelProps,{children:props.label}))}),props.description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,Object.assign({slot:"description"},descriptionProps,{children:props.description})),props.errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxGroupFieldError,Object.assign({},props,{state:state})),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Checkbox_module/* default */.A.checkboxList,children:[props.showSelectAll&&/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{isSelected:allSelected,isIndeterminate:someSelected,isReadOnly:props.isReadOnly,onChange:handleChange,children:props.selectAllLabel||stringFormatter.format('selectAll')}),/*#__PURE__*/(0,jsx_runtime.jsx)(context/* CheckboxGroupContext */.I.Provider,{value:state,children:props.children})]}),props.errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxGroupFieldError,Object.assign({},props,{state:state}))]}));}

/***/ },

/***/ 75575
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* reexport */ EmptyIcon),
  q: () => (/* reexport */ StorybookIcon)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/icons/Storybook.tsx
var _excluded=["color","size"];var StorybookIcon=/* @__PURE__ */react.forwardRef(function(_ref,forwardedRef){var _ref$color=_ref.color,color=_ref$color===void 0?'currentColor':_ref$color,_ref$size=_ref.size,size=_ref$size===void 0?20:_ref$size,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{viewBox:"-31.5 0 319 319",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",fill:"#000000",width:size,height:size,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),/*#__PURE__*/(0,jsx_runtime.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("defs",{children:[' ',/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z",id:"path-1",children:' '}),' ']}),' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{children:[' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("mask",{id:"mask-2",fill:"white",children:[' ',/*#__PURE__*/(0,jsx_runtime.jsx)("use",{href:"#path-1",children:" "}),' ']}),' ',/*#__PURE__*/(0,jsx_runtime.jsx)("use",{fill:color,fillRule:"nonzero",href:"#path-1",children:' '}),' ',/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z",fill:"#FFFFFF",fillRule:"nonzero",mask:"url(#mask-2)",children:' '}),' ']}),' ']})]});});
;// ./apps/docs/src/components/icons/Empty.tsx
var EmptyIcon=function EmptyIcon(){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{height:0,width:0});};
;// ./apps/docs/src/components/icons/index.ts


/***/ },

/***/ 93574
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ GridItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38739);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1160);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
var _excluded=["children","size","offset"];/**
 * Columns based on display: flex;
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */var GridItem=function GridItem(_ref){var children=_ref.children,size=_ref.size,offset=_ref.offset,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref,_excluded);var offsetClass=offset?"offset-"+offset:'';var sizeClasses=getSizeClasses(size);var offsetClasses=getOffsetClasses(offset);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",Object.assign({},props,{className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.col,_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A[offsetClass],sizeClasses.map(function(cls){return _Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A[cls];}),offsetClasses.map(function(cls){return _Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A[cls];}),props.className),children:children}));};var getSizeClasses=function getSizeClasses(size){if(!size)return[];if(typeof size==='object'){return Object.entries(size).map(function(_ref2){var breakpoint=_ref2[0],value=_ref2[1];return breakpoint==='xs'?"col-"+value:"col-"+breakpoint+"-"+value;});}return["col-"+size];};var getOffsetClasses=function getOffsetClasses(offset){if(!offset)return[];if(typeof offset==='object'){return Object.entries(offset).map(function(_ref3){var breakpoint=_ref3[0],value=_ref3[1];return breakpoint==='xs'?"offset-"+value:"offset-"+breakpoint+"-"+value;});}return["offset-"+offset];};

/***/ },

/***/ 93683
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ Heading)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Heading.mjs
var dist_Heading = __webpack_require__(57936);
;// ./packages/components/src/heading/Heading.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Heading_module = ({"h1":"h1_fQIH","h2":"h2_fBmz","h3":"h3_xOF5","h4":"h4_AF6p","h5":"h5_slY8","h6":"h6_loS0"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/heading/Heading.tsx
var _excluded=["children","className","enableMargins","isExpressive","level","elementType"];var Heading=function Heading(_ref){var children=_ref.children,className=_ref.className,_ref$enableMargins=_ref.enableMargins,enableMargins=_ref$enableMargins===void 0?false:_ref$enableMargins,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$level=_ref.level,level=_ref$level===void 0?3:_ref$level,elementType=_ref.elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var semanticLevel=elementType&&parseInt(elementType.split('h')[1]);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Heading/* Heading */.D,Object.assign({level:semanticLevel||level,className:(0,clsx/* default */.A)([Heading_module.h1,Heading_module.h2,Heading_module.h3,Heading_module.h4,Heading_module.h5,Heading_module.h6][level-1],className)},isExpressive&&{'data-expressive':true},enableMargins&&{'data-margin':true},rest,{children:children}));};

/***/ },

/***/ 93777
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccordionItem)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(48569);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
;// ./packages/components/src/accordion/AccordionItem.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const AccordionItem_module = ({"item":"item_VttG","contained":"contained_ub98","medium":"medium_WM8r","success":"success_cpFV","warning":"warning_NxFE","info":"info_suK1","important":"important_n_K6","triggerButton":"triggerButton_En7k","triggerText":"triggerText_VvwO","trigger":"trigger_dCCq","triggerMainContent":"triggerMainContent_WoSV","\t":"\t_YXX_","chevronIcon":"chevronIcon_kSND","statusIcon":"statusIcon_DtWQ","panel":"panel_RCRU","content":"content_EuZw","hasBackground":"hasBackground_E4qK","header":"header_kp5y"});
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(93683);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(45644);
// EXTERNAL MODULE: ./packages/components/src/common/FeedbackStatusIcon.tsx + 1 modules
var FeedbackStatusIcon = __webpack_require__(74890);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/accordion/AccordionItem.tsx
var _excluded=["title","children","className","headingLevel","type","hasBackground","size","isContained","iconAriaLabel"];var AccordionItem=function AccordionItem(_ref){var _ref2;var title=_ref.title,children=_ref.children,className=_ref.className,_ref$headingLevel=_ref.headingLevel,headingLevel=_ref$headingLevel===void 0?'h2':_ref$headingLevel,type=_ref.type,_ref$hasBackground=_ref.hasBackground,hasBackground=_ref$hasBackground===void 0?true:_ref$hasBackground,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,isContainedFromProp=_ref.isContained,iconAriaLabel=_ref.iconAriaLabel,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var context=(0,react.useContext)(AccordionContext/* AccordionContext */.C);var isContained=(_ref2=isContainedFromProp!=null?isContainedFromProp:context==null?void 0:context.isContained)!=null?_ref2:false;var titleIsReactNode=typeof title==='object';(0,react.useEffect)(function(){if(type&&!isContained){console.warn("AccordionItem: When 'type' is set, it is recommended to also set 'isContained' to true for visual consistency.");}},[type,isContained]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Disclosure/* Disclosure */.EN,Object.assign({},props,{className:(0,clsx/* default */.A)(AccordionItem_module.item,type&&AccordionItem_module[type],(size==='medium'||(context==null?void 0:context.size)==='medium')&&AccordionItem_module.medium,isContained&&AccordionItem_module.contained,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:AccordionItem_module.trigger,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* Button */.$,{className:AccordionItem_module.triggerButton,slot:"trigger",variant:"icon",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20,className:AccordionItem_module.chevronIcon}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:AccordionItem_module.triggerMainContent,children:titleIsReactNode?title:/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{level:3,elementType:headingLevel,className:AccordionItem_module.triggerText,children:title})}),type&&/*#__PURE__*/(0,jsx_runtime.jsx)(FeedbackStatusIcon/* FeedbackStatusIcon */.$,{"aria-label":iconAriaLabel,className:AccordionItem_module.statusIcon,status:type})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Disclosure/* DisclosurePanel */.kS,{className:AccordionItem_module.panel,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(AccordionItem_module.content,hasBackground&&AccordionItem_module.hasBackground),children:children})})]}));};

/***/ }

}]);