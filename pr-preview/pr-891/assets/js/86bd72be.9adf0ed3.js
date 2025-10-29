"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[7895],{

/***/ 6974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"listBox":"listBox_l3jg","listBoxPopover":"listBoxPopover_OG2Y","listBoxSectionHeading":"listBoxSectionHeading_R5mH","listBoxButton":"listBoxButton_LfGK","listBoxItem":"listBoxItem_eA9_","listBoxLoadMoreItem":"listBoxLoadMoreItem_RWDs"});

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
var CheckboxInner=/*#__PURE__*/react.forwardRef(function(props,ref){var _props$hoverResult=props.hoverResult,hoverProps=_props$hoverResult.hoverProps,isHovered=_props$hoverResult.isHovered;var _props$pressResult=props.pressResult,pressProps=_props$pressResult.pressProps,isPressed=_props$pressResult.isPressed;var _props$focusRingAria=props.focusRingAria,isFocused=_props$focusRingAria.isFocused,isFocusVisible=_props$focusRingAria.isFocusVisible,focusProps=_props$focusRingAria.focusProps;return/*#__PURE__*/(0,jsx_runtime.jsxs)("label",Object.assign({ref:ref},(0,mergeProps/* mergeProps */.v)(hoverProps,pressProps,props.labelProps),{slot:props.slot||undefined,className:(0,clsx/* clsx */.$)(Checkbox_module/* default */.A.checkbox,props.className),"data-hovered":isHovered||undefined,"data-selected":props.isSelected||undefined,"data-indeterminate":props.isIndeterminate||undefined,"data-pressed":isPressed||undefined,"data-disabled":props.isDisabled||undefined,"data-readonly":props.isReadOnly||undefined,"data-invalid":props.isInvalid||undefined,"data-focused":isFocused||undefined,"data-focus-visible":isFocusVisible||undefined,"data-required":props.isRequired||undefined,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* clsx */.$)(Checkbox_module/* default */.A.checkboxInner),children:props.isIndeterminate?/*#__PURE__*/(0,jsx_runtime.jsx)(minus/* default */.A,{size:16,viewBox:'0 0 24 24',color:src/* variables.iconOnColor */.E.w1t}):/*#__PURE__*/(0,jsx_runtime.jsx)(check/* default */.A,{size:16,viewBox:'0 0 24 24',color:src/* variables.iconOnColor */.E.w1t})}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("input",Object.assign({},(0,mergeProps/* mergeProps */.v)(props.inputProps,focusProps),{ref:props.inputRef}))}),props.children]}));});
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
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
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
'use client';var TextField_excluded=["className","list","type"];var TextField=/*#__PURE__*/react.forwardRef(function(_ref,ref){var className=_ref.className,list=_ref.list,type=_ref.type,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,TextField_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(TextFieldBase/* TextFieldBase */.J,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_Input,{className:(0,clsx/* default */.A)(className),list:list,ref:ref,type:type,skipContext:true})}));});

/***/ }),

/***/ 16025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"checkboxInner":"checkboxInner_Nam1","checkbox":"checkbox_J2GB","does-not-exist":"does-not-exist_qXZz","checkboxGroup":"checkboxGroup_iAq9"});

/***/ }),

/***/ 17366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
  jCJ: () => (textPlaceholder),
  eku: () => (textPrimary)
});

;// ./packages/theme/src/lib/style-dictionary-dist/token-dictionary.js
/**
 * Do not edit directly, this file was auto-generated.
 *//* harmony default export */ const token_dictionary = ({windowSizes:{sm:{key:"{windowSizes.sm}",$value:"480px",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"dimension",original:{$value:"480px",$type:"dimension",key:"{windowSizes.sm}"},name:"windowSizesSm",attributes:{},path:["windowSizes","sm"]},md:{key:"{windowSizes.md}",$value:"768px",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"dimension",original:{$value:"768px",$type:"dimension",key:"{windowSizes.md}"},name:"windowSizesMd",attributes:{},path:["windowSizes","md"]},lg:{key:"{windowSizes.lg}",$value:"1024px",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"dimension",original:{$value:"1024px",$type:"dimension",key:"{windowSizes.lg}"},name:"windowSizesLg",attributes:{},path:["windowSizes","lg"]},xl:{key:"{windowSizes.xl}",$value:"1280px",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"dimension",original:{$value:"1280px",$type:"dimension",key:"{windowSizes.xl}"},name:"windowSizesXl",attributes:{},path:["windowSizes","xl"]}},breakpoints:{xs:{key:"{breakpoints.xs}",$value:"(max-width: calc(480px - 1px))",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"(max-width: calc({windowSizes.sm} - 1px))",$type:"string",key:"{breakpoints.xs}"},name:"breakpointsXs",attributes:{},path:["breakpoints","xs"]},sm:{key:"{breakpoints.sm}",$value:"(min-width: 480px)",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"(min-width: {windowSizes.sm})",$type:"string",key:"{breakpoints.sm}"},name:"breakpointsSm",attributes:{},path:["breakpoints","sm"]},md:{key:"{breakpoints.md}",$value:"(min-width: 768px)",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"(min-width: {windowSizes.md})",$type:"string",key:"{breakpoints.md}"},name:"breakpointsMd",attributes:{},path:["breakpoints","md"]},lg:{key:"{breakpoints.lg}",$value:"(min-width: 1024px)",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"(min-width: {windowSizes.lg})",$type:"string",key:"{breakpoints.lg}"},name:"breakpointsLg",attributes:{},path:["breakpoints","lg"]},xl:{key:"{breakpoints.xl}",$value:"(min-width: 1280px)",$description:"This is the largest breakpoint",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"(min-width: {windowSizes.xl})",$description:"This is the largest breakpoint",$type:"string",key:"{breakpoints.xl}"},name:"breakpointsXl",attributes:{},path:["breakpoints","xl"]}},button:{background:{primary:{base:{key:"{button.background.primary.base}",$value:"light-dark(#143c50, #2e7ca5)",$description:"Färg på primärknapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.blue.100})",$description:"Färg på primärknapp",$type:"string",key:"{button.background.primary.base}"},name:"buttonBackgroundPrimaryBase",attributes:{},path:["button","background","primary","base"]},hover:{key:"{button.background.primary.hover}",$value:"light-dark(#25607f, #25607f)",$description:"Hover state på primärknapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.130}, {color.blue.130})",$description:"Hover state på primärknapp",$type:"string",key:"{button.background.primary.hover}"},name:"buttonBackgroundPrimaryHover",attributes:{},path:["button","background","primary","hover"]},active:{key:"{button.background.primary.active}",$value:"light-dark(#2e7ca5, #143c50)",$description:"Active state för primärknapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.100}, {color.blue.150})",$description:"Active state för primärknapp",$type:"string",key:"{button.background.primary.active}"},name:"buttonBackgroundPrimaryActive",attributes:{},path:["button","background","primary","active"]}},secondary:{base:{key:"{button.background.secondary.base}",$value:"light-dark(#fff, #171717)",$description:"Färg på sekundärknapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.base}, {color.gray.200})",$description:"Färg på sekundärknapp",$type:"string",key:"{button.background.secondary.base}"},name:"buttonBackgroundSecondaryBase",attributes:{},path:["button","background","secondary","base"]},hover:{key:"{button.background.secondary.hover}",$value:"light-dark(#e6e6e6, #212121)",$description:"Hover state på sekundärknapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.hover}, {color.gray.190})",$description:"Hover state på sekundärknapp",$type:"string",key:"{button.background.secondary.hover}"},name:"buttonBackgroundSecondaryHover",attributes:{},path:["button","background","secondary","hover"]},active:{key:"{button.background.secondary.active}",$value:"light-dark(#d9d9d9, #262626)",$description:"Active state för sekundärknapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.180})",$description:"Active state för sekundärknapp",$type:"string",key:"{button.background.secondary.active}"},name:"buttonBackgroundSecondaryActive",attributes:{},path:["button","background","secondary","active"]}},tertiary:{hover:{key:"{button.background.tertiary.hover}",$value:"light-dark(#0000000d, #ffffff21)",$description:"Hover state för tertiär knapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.black.opacity5}, {color.white.opacity13})",$description:"Hover state för tertiär knapp",$type:"string",key:"{button.background.tertiary.hover}"},name:"buttonBackgroundTertiaryHover",attributes:{},path:["button","background","tertiary","hover"]},active:{key:"{button.background.tertiary.active}",$value:"light-dark(#d9d9d9, #262626)",$description:"Active state för tertiär knapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.180})",$description:"Active state för tertiär knapp",$type:"string",key:"{button.background.tertiary.active}"},name:"buttonBackgroundTertiaryActive",attributes:{},path:["button","background","tertiary","active"]}},danger:{base:{key:"{button.background.danger.base}",$value:"light-dark(#e62323, #e62323)",$description:"Färg på danger knapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.100})",$description:"Färg på danger knapp",$type:"string",key:"{button.background.danger.base}"},name:"buttonBackgroundDangerBase",attributes:{},path:["button","background","danger","base"]},hover:{key:"{button.background.danger.hover}",$value:"light-dark(#bc1d1d, #bc1d1d)",$description:"Hover state för danger knapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.120}, {color.signalRed.120})",$description:"Hover state för danger knapp",$type:"string",key:"{button.background.danger.hover}"},name:"buttonBackgroundDangerHover",attributes:{},path:["button","background","danger","hover"]},active:{key:"{button.background.danger.active}",$value:"light-dark(#7d1313, #7d1313)",$description:"Active state för danger knapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.150}, {color.signalRed.150})",$description:"Active state för danger knapp",$type:"string",key:"{button.background.danger.active}"},name:"buttonBackgroundDangerActive",attributes:{},path:["button","background","danger","active"]}},disabled:{key:"{button.background.disabled}",$value:"light-dark(#f2f2f2, #262626)",$description:"Disabled state för knappar",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Disabled state för knappar",$type:"string",key:"{button.background.disabled}"},name:"buttonBackgroundDisabled",attributes:{},path:["button","background","disabled"]}},border:{secondary:{key:"{button.border.secondary}",$value:"light-dark(#143c50, #f2f2f2)",$description:"Kantfärg för sekundärknapp",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.gray.10})",$description:"Kantfärg för sekundärknapp",$type:"string",key:"{button.border.secondary}"},name:"buttonBorderSecondary",attributes:{},path:["button","border","secondary"]}},icon:{hover:{key:"{button.icon.hover}",$value:"light-dark(#0000000d, #ffffff21)",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark({color.black.opacity5}, {color.white.opacity13})",$type:"string",key:"{button.icon.hover}"},name:"buttonIconHover",attributes:{},path:["button","icon","hover"]},active:{key:"{button.icon.active}",$value:"light-dark(#00000033, #ffffff33)",$description:"Active state för ikoner",filePath:"packages/theme/tokens/buttons.json",isSource:true,$type:"string",original:{$value:"light-dark(#00000033, #ffffff33)",$description:"Active state för ikoner",$type:"string",key:"{button.icon.active}"},name:"buttonIconActive",attributes:{},path:["button","icon","active"]}}},color:{black:{base:{key:"{color.black.base}",$value:"#000",$description:"Black",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#000",$description:"Black",$type:"color",key:"{color.black.base}"},name:"colorBlackBase",attributes:{},path:["color","black","base"]},hover:{key:"{color.black.hover}",$value:"#0d0d0d",$description:"Black hover",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#0d0d0d",$description:"Black hover",$type:"color",key:"{color.black.hover}"},name:"colorBlackHover",attributes:{},path:["color","black","hover"]},opacity5:{key:"{color.black.opacity5}",$value:"#0000000d",$description:"Black with 5% opacity",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#0000000d",$description:"Black with 5% opacity",$type:"color",key:"{color.black.opacity5}"},name:"colorBlackOpacity5",attributes:{},path:["color","black","opacity5"]}},white:{base:{key:"{color.white.base}",$value:"#fff",$description:"White",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fff",$description:"White",$type:"color",key:"{color.white.base}"},name:"colorWhiteBase",attributes:{},path:["color","white","base"]},hover:{key:"{color.white.hover}",$value:"#e6e6e6",$description:"White hover",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#e6e6e6",$description:"White hover",$type:"color",key:"{color.white.hover}"},name:"colorWhiteHover",attributes:{},path:["color","white","hover"]},opacity13:{key:"{color.white.opacity13}",$value:"#ffffff21",$description:"White with 13% opacity",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffffff21",$description:"White with 13% opacity",$type:"color",key:"{color.white.opacity13}"},name:"colorWhiteOpacity13",attributes:{},path:["color","white","opacity13"]}},gray:{10:{key:"{color.gray.10}",$value:"#f2f2f2",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#f2f2f2",$type:"color",key:"{color.gray.10}"},name:"colorGray10",attributes:{},path:["color","gray","10"]},20:{key:"{color.gray.20}",$value:"#e6e6e6",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#e6e6e6",$type:"color",key:"{color.gray.20}"},name:"colorGray20",attributes:{},path:["color","gray","20"]},30:{key:"{color.gray.30}",$value:"#d9d9d9",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d9d9d9",$type:"color",key:"{color.gray.30}"},name:"colorGray30",attributes:{},path:["color","gray","30"]},40:{key:"{color.gray.40}",$value:"#ccc",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ccc",$type:"color",key:"{color.gray.40}"},name:"colorGray40",attributes:{},path:["color","gray","40"]},50:{key:"{color.gray.50}",$value:"#bfbfbf",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#bfbfbf",$type:"color",key:"{color.gray.50}"},name:"colorGray50",attributes:{},path:["color","gray","50"]},60:{key:"{color.gray.60}",$value:"#b3b3b3",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#b3b3b3",$type:"color",key:"{color.gray.60}"},name:"colorGray60",attributes:{},path:["color","gray","60"]},70:{key:"{color.gray.70}",$value:"#a6a6a6",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#a6a6a6",$type:"color",key:"{color.gray.70}"},name:"colorGray70",attributes:{},path:["color","gray","70"]},80:{key:"{color.gray.80}",$value:"#999",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#999",$type:"color",key:"{color.gray.80}"},name:"colorGray80",attributes:{},path:["color","gray","80"]},90:{key:"{color.gray.90}",$value:"#8c8c8c",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#8c8c8c",$type:"color",key:"{color.gray.90}"},name:"colorGray90",attributes:{},path:["color","gray","90"]},100:{key:"{color.gray.100}",$value:"#808080",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#808080",$type:"color",key:"{color.gray.100}"},name:"colorGray100",attributes:{},path:["color","gray","100"]},110:{key:"{color.gray.110}",$value:"#737373",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#737373",$type:"color",key:"{color.gray.110}"},name:"colorGray110",attributes:{},path:["color","gray","110"]},120:{key:"{color.gray.120}",$value:"#666",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#666",$type:"color",key:"{color.gray.120}"},name:"colorGray120",attributes:{},path:["color","gray","120"]},130:{key:"{color.gray.130}",$value:"#5d5d5d",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#5d5d5d",$type:"color",key:"{color.gray.130}"},name:"colorGray130",attributes:{},path:["color","gray","130"]},140:{key:"{color.gray.140}",$value:"#525252",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#525252",$type:"color",key:"{color.gray.140}"},name:"colorGray140",attributes:{},path:["color","gray","140"]},150:{key:"{color.gray.150}",$value:"#474747",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#474747",$type:"color",key:"{color.gray.150}"},name:"colorGray150",attributes:{},path:["color","gray","150"]},160:{key:"{color.gray.160}",$value:"#383838",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#383838",$type:"color",key:"{color.gray.160}"},name:"colorGray160",attributes:{},path:["color","gray","160"]},170:{key:"{color.gray.170}",$value:"#333",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#333",$type:"color",key:"{color.gray.170}"},name:"colorGray170",attributes:{},path:["color","gray","170"]},180:{key:"{color.gray.180}",$value:"#262626",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#262626",$type:"color",key:"{color.gray.180}"},name:"colorGray180",attributes:{},path:["color","gray","180"]},190:{key:"{color.gray.190}",$value:"#212121",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#212121",$type:"color",key:"{color.gray.190}"},name:"colorGray190",attributes:{},path:["color","gray","190"]},200:{key:"{color.gray.200}",$value:"#171717",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#171717",$type:"color",key:"{color.gray.200}"},name:"colorGray200",attributes:{},path:["color","gray","200"]}},blue:{10:{key:"{color.blue.10}",$value:"#eaf2f6",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#eaf2f6",$type:"color",key:"{color.blue.10}"},name:"colorBlue10",attributes:{},path:["color","blue","10"]},20:{key:"{color.blue.20}",$value:"#d5e5ed",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d5e5ed",$type:"color",key:"{color.blue.20}"},name:"colorBlue20",attributes:{},path:["color","blue","20"]},40:{key:"{color.blue.40}",$value:"#abcbdb",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#abcbdb",$type:"color",key:"{color.blue.40}"},name:"colorBlue40",attributes:{},path:["color","blue","40"]},50:{key:"{color.blue.50}",$value:"#94BCD1",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#94BCD1",$type:"color",key:"{color.blue.50}"},name:"colorBlue50",attributes:{},path:["color","blue","50"]},60:{key:"{color.blue.60}",$value:"#82b0c9",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#82b0c9",$type:"color",key:"{color.blue.60}"},name:"colorBlue60",attributes:{},path:["color","blue","60"]},70:{key:"{color.blue.70}",$value:"#6CA3C0",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#6CA3C0",$type:"color",key:"{color.blue.70}"},name:"colorBlue70",attributes:{},path:["color","blue","70"]},80:{key:"{color.blue.80}",$value:"#5897b8",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#5897b8",$type:"color",key:"{color.blue.80}"},name:"colorBlue80",attributes:{},path:["color","blue","80"]},90:{key:"{color.blue.90}",$value:"#4289ad",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#4289ad",$type:"color",key:"{color.blue.90}"},name:"colorBlue90",attributes:{},path:["color","blue","90"]},100:{key:"{color.blue.100}",$value:"#2e7ca5",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#2e7ca5",$type:"color",key:"{color.blue.100}"},name:"colorBlue100",attributes:{},path:["color","blue","100"]},110:{key:"{color.blue.110}",$value:"#2C7399",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#2C7399",$type:"color",key:"{color.blue.110}"},name:"colorBlue110",attributes:{},path:["color","blue","110"]},120:{key:"{color.blue.120}",$value:"#29698C",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#29698C",$type:"color",key:"{color.blue.120}"},name:"colorBlue120",attributes:{},path:["color","blue","120"]},130:{key:"{color.blue.130}",$value:"#25607f",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#25607f",$type:"color",key:"{color.blue.130}"},name:"colorBlue130",attributes:{},path:["color","blue","130"]},150:{key:"{color.blue.150}",$value:"#143c50",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#143c50",$type:"color",key:"{color.blue.150}"},name:"colorBlue150",attributes:{},path:["color","blue","150"]}},purple:{80:{key:"{color.purple.80}",$value:"#b46ab4",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#b46ab4",$type:"color",key:"{color.purple.80}"},name:"colorPurple80",attributes:{},path:["color","purple","80"]},110:{key:"{color.purple.110}",$value:"#954b95",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#954b95",$type:"color",key:"{color.purple.110}"},name:"colorPurple110",attributes:{},path:["color","purple","110"]}},red:{100:{key:"{color.red.100}",$value:"#b90835",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#b90835",$type:"color",key:"{color.red.100}"},name:"colorRed100",attributes:{},path:["color","red","100"]}},signalBlue:{10:{key:"{color.signalBlue.10}",$value:"#eaf2f6",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#eaf2f6",$type:"color",key:"{color.signalBlue.10}"},name:"colorSignalBlue10",attributes:{},path:["color","signalBlue","10"]},20:{key:"{color.signalBlue.20}",$value:"#d5e5ed",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d5e5ed",$type:"color",key:"{color.signalBlue.20}"},name:"colorSignalBlue20",attributes:{},path:["color","signalBlue","20"]},100:{key:"{color.signalBlue.100}",$value:"#06c",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#06c",$type:"color",key:"{color.signalBlue.100}"},name:"colorSignalBlue100",attributes:{},path:["color","signalBlue","100"]}},signalGreen:{20:{key:"{color.signalGreen.20}",$value:"#d5f2d9",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d5f2d9",$type:"color",key:"{color.signalGreen.20}"},name:"colorSignalGreen20",attributes:{},path:["color","signalGreen","20"]},30:{key:"{color.signalGreen.30}",$value:"#bae5c5",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#bae5c5",$type:"color",key:"{color.signalGreen.30}"},name:"colorSignalGreen30",attributes:{},path:["color","signalGreen","30"]},100:{key:"{color.signalGreen.100}",$value:"#008d3c",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#008d3c",$type:"color",key:"{color.signalGreen.100}"},name:"colorSignalGreen100",attributes:{},path:["color","signalGreen","100"]},150:{key:"{color.signalGreen.150}",$value:"#194B33",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#194B33",$type:"color",key:"{color.signalGreen.150}"},name:"colorSignalGreen150",attributes:{},path:["color","signalGreen","150"]}},signalYellow:{10:{key:"{color.signalYellow.10}",$value:"#fff8e2",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fff8e2",$type:"color",key:"{color.signalYellow.10}"},name:"colorSignalYellow10",attributes:{},path:["color","signalYellow","10"]},20:{key:"{color.signalYellow.20}",$value:"#fff1cd",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fff1cd",$type:"color",key:"{color.signalYellow.20}"},name:"colorSignalYellow20",attributes:{},path:["color","signalYellow","20"]},30:{key:"{color.signalYellow.30}",$value:"#ffeab8",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffeab8",$type:"color",key:"{color.signalYellow.30}"},name:"colorSignalYellow30",attributes:{},path:["color","signalYellow","30"]},40:{key:"{color.signalYellow.40}",$value:"#ffe3a3",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffe3a3",$type:"color",key:"{color.signalYellow.40}"},name:"colorSignalYellow40",attributes:{},path:["color","signalYellow","40"]},50:{key:"{color.signalYellow.50}",$value:"#ffdc8b",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffdc8b",$type:"color",key:"{color.signalYellow.50}"},name:"colorSignalYellow50",attributes:{},path:["color","signalYellow","50"]},60:{key:"{color.signalYellow.60}",$value:"#ffd47b",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffd47b",$type:"color",key:"{color.signalYellow.60}"},name:"colorSignalYellow60",attributes:{},path:["color","signalYellow","60"]},70:{key:"{color.signalYellow.70}",$value:"#fdcd5d",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fdcd5d",$type:"color",key:"{color.signalYellow.70}"},name:"colorSignalYellow70",attributes:{},path:["color","signalYellow","70"]},80:{key:"{color.signalYellow.80}",$value:"#fbc640",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fbc640",$type:"color",key:"{color.signalYellow.80}"},name:"colorSignalYellow80",attributes:{},path:["color","signalYellow","80"]},90:{key:"{color.signalYellow.90}",$value:"#fabf1b",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fabf1b",$type:"color",key:"{color.signalYellow.90}"},name:"colorSignalYellow90",attributes:{},path:["color","signalYellow","90"]},100:{key:"{color.signalYellow.100}",$value:"#fab900",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fab900",$type:"color",key:"{color.signalYellow.100}"},name:"colorSignalYellow100",attributes:{},path:["color","signalYellow","100"]},110:{key:"{color.signalYellow.110}",$value:"#daa105",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#daa105",$type:"color",key:"{color.signalYellow.110}"},name:"colorSignalYellow110",attributes:{},path:["color","signalYellow","110"]},120:{key:"{color.signalYellow.120}",$value:"#bd8c1e",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#bd8c1e",$type:"color",key:"{color.signalYellow.120}"},name:"colorSignalYellow120",attributes:{},path:["color","signalYellow","120"]},130:{key:"{color.signalYellow.130}",$value:"#a17927",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#a17927",$type:"color",key:"{color.signalYellow.130}"},name:"colorSignalYellow130",attributes:{},path:["color","signalYellow","130"]},140:{key:"{color.signalYellow.140}",$value:"#88672a",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#88672a",$type:"color",key:"{color.signalYellow.140}"},name:"colorSignalYellow140",attributes:{},path:["color","signalYellow","140"]},150:{key:"{color.signalYellow.150}",$value:"#70562b",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#70562b",$type:"color",key:"{color.signalYellow.150}"},name:"colorSignalYellow150",attributes:{},path:["color","signalYellow","150"]},160:{key:"{color.signalYellow.160}",$value:"#5a4629",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#5a4629",$type:"color",key:"{color.signalYellow.160}"},name:"colorSignalYellow160",attributes:{},path:["color","signalYellow","160"]},170:{key:"{color.signalYellow.170}",$value:"#453826",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#453826",$type:"color",key:"{color.signalYellow.170}"},name:"colorSignalYellow170",attributes:{},path:["color","signalYellow","170"]},180:{key:"{color.signalYellow.180}",$value:"#322a20",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#322a20",$type:"color",key:"{color.signalYellow.180}"},name:"colorSignalYellow180",attributes:{},path:["color","signalYellow","180"]},190:{key:"{color.signalYellow.190}",$value:"#201c18",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#201c18",$type:"color",key:"{color.signalYellow.190}"},name:"colorSignalYellow190",attributes:{},path:["color","signalYellow","190"]},200:{key:"{color.signalYellow.200}",$value:"#0f0e0e",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#0f0e0e",$type:"color",key:"{color.signalYellow.200}"},name:"colorSignalYellow200",attributes:{},path:["color","signalYellow","200"]}},signalRed:{10:{key:"{color.signalRed.10}",$value:"#ffefef",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffefef",$type:"color",key:"{color.signalRed.10}"},name:"colorSignalRed10",attributes:{},path:["color","signalRed","10"]},20:{key:"{color.signalRed.20}",$value:"#ffdfdf",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffdfdf",$type:"color",key:"{color.signalRed.20}"},name:"colorSignalRed20",attributes:{},path:["color","signalRed","20"]},30:{key:"{color.signalRed.30}",$value:"#fcc8c8",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fcc8c8",$type:"color",key:"{color.signalRed.30}"},name:"colorSignalRed30",attributes:{},path:["color","signalRed","30"]},40:{key:"{color.signalRed.40}",$value:"#f9b0b0",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#f9b0b0",$type:"color",key:"{color.signalRed.40}"},name:"colorSignalRed40",attributes:{},path:["color","signalRed","40"]},50:{key:"{color.signalRed.50}",$value:"#f69999",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#f69999",$type:"color",key:"{color.signalRed.50}"},name:"colorSignalRed50",attributes:{},path:["color","signalRed","50"]},60:{key:"{color.signalRed.60}",$value:"#f38181",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#f38181",$type:"color",key:"{color.signalRed.60}"},name:"colorSignalRed60",attributes:{},path:["color","signalRed","60"]},70:{key:"{color.signalRed.70}",$value:"#ef6a6a",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ef6a6a",$type:"color",key:"{color.signalRed.70}"},name:"colorSignalRed70",attributes:{},path:["color","signalRed","70"]},80:{key:"{color.signalRed.80}",$value:"#EC5252",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#EC5252",$type:"color",key:"{color.signalRed.80}"},name:"colorSignalRed80",attributes:{},path:["color","signalRed","80"]},90:{key:"{color.signalRed.90}",$value:"#e93b3b",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#e93b3b",$type:"color",key:"{color.signalRed.90}"},name:"colorSignalRed90",attributes:{},path:["color","signalRed","90"]},100:{key:"{color.signalRed.100}",$value:"#e62323",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#e62323",$type:"color",key:"{color.signalRed.100}"},name:"colorSignalRed100",attributes:{},path:["color","signalRed","100"]},110:{key:"{color.signalRed.110}",$value:"#d12020",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d12020",$type:"color",key:"{color.signalRed.110}"},name:"colorSignalRed110",attributes:{},path:["color","signalRed","110"]},120:{key:"{color.signalRed.120}",$value:"#bc1d1d",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#bc1d1d",$type:"color",key:"{color.signalRed.120}"},name:"colorSignalRed120",attributes:{},path:["color","signalRed","120"]},130:{key:"{color.signalRed.130}",$value:"#a71919",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#a71919",$type:"color",key:"{color.signalRed.130}"},name:"colorSignalRed130",attributes:{},path:["color","signalRed","130"]},140:{key:"{color.signalRed.140}",$value:"#921616",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#921616",$type:"color",key:"{color.signalRed.140}"},name:"colorSignalRed140",attributes:{},path:["color","signalRed","140"]},150:{key:"{color.signalRed.150}",$value:"#7d1313",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#7d1313",$type:"color",key:"{color.signalRed.150}"},name:"colorSignalRed150",attributes:{},path:["color","signalRed","150"]},160:{key:"{color.signalRed.160}",$value:"#691010",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#691010",$type:"color",key:"{color.signalRed.160}"},name:"colorSignalRed160",attributes:{},path:["color","signalRed","160"]},170:{key:"{color.signalRed.170}",$value:"#540d0d",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#540d0d",$type:"color",key:"{color.signalRed.170}"},name:"colorSignalRed170",attributes:{},path:["color","signalRed","170"]},180:{key:"{color.signalRed.180}",$value:"#3f0a0a",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#3f0a0a",$type:"color",key:"{color.signalRed.180}"},name:"colorSignalRed180",attributes:{},path:["color","signalRed","180"]},190:{key:"{color.signalRed.190}",$value:"#2a0606",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#2a0606",$type:"color",key:"{color.signalRed.190}"},name:"colorSignalRed190",attributes:{},path:["color","signalRed","190"]},200:{key:"{color.signalRed.200}",$value:"#150303",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#150303",$type:"color",key:"{color.signalRed.200}"},name:"colorSignalRed200",attributes:{},path:["color","signalRed","200"]}}},background:{base:{key:"{background.base}",$value:"light-dark(#fff, #171717)",$description:"Standardbakgrund för våra applikationer",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.base}, {color.gray.200})",$description:"Standardbakgrund för våra applikationer",$type:"string",key:"{background.base}"},name:"backgroundBase",attributes:{},path:["background","base"]},hover:{key:"{background.hover}",$value:"light-dark(#e6e6e6, #212121)",$description:"Hoverfärg för bakgrund",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.hover}, {color.gray.190})",$description:"Hoverfärg för bakgrund",$type:"string",key:"{background.hover}"},name:"backgroundHover",attributes:{},path:["background","hover"]},inverse:{key:"{background.inverse}",$value:"light-dark(#171717, #f2f2f2)",$description:"Bakgrund eller element i med hög kontrast",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.200}, {color.gray.10})",$description:"Bakgrund eller element i med hög kontrast",$type:"string",key:"{background.inverse}"},name:"backgroundInverse",attributes:{},path:["background","inverse"]}},layer:{"01":{base:{key:"{layer.01.base}",$value:"light-dark(#f2f2f2, #262626)",$description:"Yta som används på background. Sekundär bakgrundsfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Yta som används på background. Sekundär bakgrundsfärg",$type:"string",key:"{layer.01.base}"},name:"layer01Base",attributes:{},path:["layer","01","base"]},hover:{key:"{layer.01.hover}",$value:"light-dark(#e6e6e6, #333)",$description:"Hover state för layer01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.20}, {color.gray.170})",$description:"Hover state för layer01",$type:"string",key:"{layer.01.hover}"},name:"layer01Hover",attributes:{},path:["layer","01","hover"]},selected:{key:"{layer.01.selected}",$value:"light-dark(#d9d9d9, #383838)",$description:"Selected state för layer01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Selected state för layer01",$type:"string",key:"{layer.01.selected}"},name:"layer01Selected",attributes:{},path:["layer","01","selected"]},selectedHover:{key:"{layer.01.selectedHover}",$value:"light-dark(#ccc, #474747)",$description:"Hover state för layerSelected01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.40}, {color.gray.150})",$description:"Hover state för layerSelected01",$type:"string",key:"{layer.01.selectedHover}"},name:"layer01SelectedHover",attributes:{},path:["layer","01","selectedHover"]}},"02":{base:{key:"{layer.02.base}",$value:"light-dark(#fff, #383838)",$description:"Yta som ligger på layer01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.base}, {color.gray.160})",$description:"Yta som ligger på layer01",$type:"string",key:"{layer.02.base}"},name:"layer02Base",attributes:{},path:["layer","02","base"]},hover:{key:"{layer.02.hover}",$value:"light-dark(#e6e6e6, #474747)",$description:"Hover state för layer02",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.hover}, {color.gray.150})",$description:"Hover state för layer02",$type:"string",key:"{layer.02.hover}"},name:"layer02Hover",attributes:{},path:["layer","02","hover"]},selected:{key:"{layer.02.selected}",$value:"light-dark(#d9d9d9, #525252)",$description:"Selected state för layer02",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.140})",$description:"Selected state för layer02",$type:"string",key:"{layer.02.selected}"},name:"layer02Selected",attributes:{},path:["layer","02","selected"]},selectedHover:{key:"{layer.02.selectedHover}",$value:"light-dark(#ccc, #5d5d5d)",$description:"Hover state för layerSelected02",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.40}, {color.gray.130})",$description:"Hover state för layerSelected02",$type:"string",key:"{layer.02.selectedHover}"},name:"layer02SelectedHover",attributes:{},path:["layer","02","selectedHover"]}}},layerAccent:{"01":{base:{key:"{layerAccent.01.base}",$value:"light-dark(#d9d9d9, #383838)",$description:"Accentfärg som används tillsammans med layer01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Accentfärg som används tillsammans med layer01",$type:"string",key:"{layerAccent.01.base}"},name:"layerAccent01Base",attributes:{},path:["layerAccent","01","base"]},hover:{key:"{layerAccent.01.hover}",$value:"light-dark(#ccc, #474747)",$description:"Hover state för layerAccent01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.40}, {color.gray.150})",$description:"Hover state för layerAccent01",$type:"string",key:"{layerAccent.01.hover}"},name:"layerAccent01Hover",attributes:{},path:["layerAccent","01","hover"]},selected:{key:"{layerAccent.01.selected}",$value:"light-dark(#bfbfbf, #525252)",$description:"Selected state för layerAccent01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Selected state för layerAccent01",$type:"string",key:"{layerAccent.01.selected}"},name:"layerAccent01Selected",attributes:{},path:["layerAccent","01","selected"]}},"02":{base:{key:"{layerAccent.02.base}",$value:"light-dark(#f2f2f2, #262626)",$description:"Accentfärg som används tillsammans med layer02",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Accentfärg som används tillsammans med layer02",$type:"string",key:"{layerAccent.02.base}"},name:"layerAccent02Base",attributes:{},path:["layerAccent","02","base"]},hover:{key:"{layerAccent.02.hover}",$value:"light-dark(#e6e6e6, #333)",$description:"Hover state för layerAccent02",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.20}, {color.gray.170})",$description:"Hover state för layerAccent02",$type:"string",key:"{layerAccent.02.hover}"},name:"layerAccent02Hover",attributes:{},path:["layerAccent","02","hover"]},selected:{key:"{layerAccent.02.selected}",$value:"light-dark(#d9d9d9, #383838)",$description:"Selected state för layerAccent02",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Selected state för layerAccent02",$type:"string",key:"{layerAccent.02.selected}"},name:"layerAccent02Selected",attributes:{},path:["layerAccent","02","selected"]}}},brand:{primary:{key:"{brand.primary}",$value:"light-dark(#b90835, #b90835)",$description:"Primära röda färgen",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.red.100}, {color.red.100})",$description:"Primära röda färgen",$type:"string",key:"{brand.primary}"},name:"brandPrimary",attributes:{},path:["brand","primary"]}},border:{color:{primary:{key:"{border.color.primary}",$value:"light-dark(#171717, #f2f2f2)",$description:"Kantlinje med hög kontrast, används med field01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.200}, {color.gray.10})",$description:"Kantlinje med hög kontrast, används med field01",$type:"string",key:"{border.color.primary}"},name:"borderColorPrimary",attributes:{},path:["border","color","primary"]},secondary:{key:"{border.color.secondary}",$value:"light-dark(#737373, #8c8c8c)",$description:"Kantlinje med medelhög kontrast",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.110}, {color.gray.90})",$description:"Kantlinje med medelhög kontrast",$type:"string",key:"{border.color.secondary}"},name:"borderColorSecondary",attributes:{},path:["border","color","secondary"]},subtle:{key:"{border.color.subtle}",$value:"light-dark(#bfbfbf, #383838)",$description:"Kantlinje med låg kontrast",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.50}, {color.gray.160})",$description:"Kantlinje med låg kontrast",$type:"string",key:"{border.color.subtle}"},name:"borderColorSubtle",attributes:{},path:["border","color","subtle"]},tertiary:{key:"{border.color.tertiary}",$value:"light-dark(#143c50, #2e7ca5)",$description:"Primärblå kantlinje",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.blue.100})",$description:"Primärblå kantlinje",$type:"string",key:"{border.color.tertiary}"},name:"borderColorTertiary",attributes:{},path:["border","color","tertiary"]},disabled:{key:"{border.color.disabled}",$value:"light-dark(#bfbfbf, #525252)",$description:"Kantlinje för disabled state",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Kantlinje för disabled state",$type:"string",key:"{border.color.disabled}"},name:"borderColorDisabled",attributes:{},path:["border","color","disabled"]}},width:{key:"{border.width}",$value:"1px",$type:"dimension",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:{value:1,unit:"px"},$type:"dimension",key:"{border.width}"},name:"borderWidth",attributes:{},path:["border","width"]}},field:{"01":{base:{key:"{field.01.base}",$value:"light-dark(#f2f2f2, #262626)",$description:"Standardfärg för fält, som ligger på background",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Standardfärg för fält, som ligger på background",$type:"string",key:"{field.01.base}"},name:"field01Base",attributes:{},path:["field","01","base"]},hover:{key:"{field.01.hover}",$value:"light-dark(#e6e6e6, #333)",$description:"Hover state för field01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.20}, {color.gray.170})",$description:"Hover state för field01",$type:"string",key:"{field.01.hover}"},name:"field01Hover",attributes:{},path:["field","01","hover"]},active:{key:"{field.01.active}",$value:"light-dark(#d9d9d9, #383838)",$description:"Active state för field01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Active state för field01",$type:"string",key:"{field.01.active}"},name:"field01Active",attributes:{},path:["field","01","active"]}},"02":{base:{key:"{field.02.base}",$value:"light-dark(#fff, #383838)",$description:"Sekundfärfärg för fält, som ligger på layer01",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.base}, {color.gray.160})",$description:"Sekundfärfärg för fält, som ligger på layer01",$type:"string",key:"{field.02.base}"},name:"field02Base",attributes:{},path:["field","02","base"]},hover:{key:"{field.02.hover}",$value:"light-dark(#e6e6e6, #474747)",$description:"Hover state för field02",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.hover}, {color.gray.150})",$description:"Hover state för field02",$type:"string",key:"{field.02.hover}"},name:"field02Hover",attributes:{},path:["field","02","hover"]},active:{key:"{field.02.active}",$value:"light-dark(#d9d9d9, #525252)",$description:"Active state för field02",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.140})",$description:"Active state för field02",$type:"string",key:"{field.02.active}"},name:"field02Active",attributes:{},path:["field","02","active"]}},disabled:{key:"{field.disabled}",$value:"light-dark(#f2f2f2, #262626)",$description:"Disabled state för fält",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Disabled state för fält",$type:"string",key:"{field.disabled}"},name:"fieldDisabled",attributes:{},path:["field","disabled"]}},skeleton:{"01":{key:"{skeleton.01}",$value:"light-dark(#f2f2f2, #262626)",$description:"Standardfärg för skeleton",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Standardfärg för skeleton",$type:"string",key:"{skeleton.01}"},name:"skeleton01",attributes:{},path:["skeleton","01"]},"02":{key:"{skeleton.02}",$value:"light-dark(#d9d9d9, #383838)",$description:"Färg som används när Skeleton ligger på bakgrundsfärgen `layer01` eller `light-dark(#f2f2f2,#262626)`",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Färg som används när Skeleton ligger på bakgrundsfärgen `layer01` eller `light-dark(#f2f2f2,#262626)`",$type:"string",key:"{skeleton.02}"},name:"skeleton02",attributes:{},path:["skeleton","02"]}},icon:{primary:{key:"{icon.primary}",$value:"light-dark(#171717, #f2f2f2)",$description:"Primär ikonfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.200}, {color.gray.10})",$description:"Primär ikonfärg",$type:"string",key:"{icon.primary}"},name:"iconPrimary",attributes:{},path:["icon","primary"]},secondary:{key:"{icon.secondary}",$value:"light-dark(#525252, #a6a6a6)",$description:"Sekundär ikonfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.140}, {color.gray.70})",$description:"Sekundär ikonfärg",$type:"string",key:"{icon.secondary}"},name:"iconSecondary",attributes:{},path:["icon","secondary"]},tertiary:{key:"{icon.tertiary}",$value:"light-dark(#143c50, #f2f2f2)",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.gray.10})",$type:"string",key:"{icon.tertiary}"},name:"iconTertiary",attributes:{},path:["icon","tertiary"]},inverse:{key:"{icon.inverse}",$value:"light-dark(#fff, #171717)",$description:"Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.base}, {color.gray.200})",$description:"Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge",$type:"string",key:"{icon.inverse}"},name:"iconInverse",attributes:{},path:["icon","inverse"]},onColor:{key:"{icon.onColor}",$value:"light-dark(#fff, #fff)",$description:"Ikonfärg på färgade ytor som inte är lager",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.base}, {color.white.base})",$description:"Ikonfärg på färgade ytor som inte är lager",$type:"string",key:"{icon.onColor}"},name:"iconOnColor",attributes:{},path:["icon","onColor"]},disabled:{key:"{icon.disabled}",$value:"light-dark(#bfbfbf, #525252)",$description:"Ikoner som är disabled",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Ikoner som är disabled",$type:"string",key:"{icon.disabled}"},name:"iconDisabled",attributes:{},path:["icon","disabled"]},success:{key:"{icon.success}",$value:"light-dark(#008d3c, #008d3c)",$description:"Ikonfär för success state",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalGreen.100}, {color.signalGreen.100})",$description:"Ikonfär för success state",$type:"string",key:"{icon.success}"},name:"iconSuccess",attributes:{},path:["icon","success"]},info:{key:"{icon.info}",$value:"light-dark(#06c, #06c)",$description:"Ikonfärg för informationsikoner",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalBlue.100}, {color.signalBlue.100})",$description:"Ikonfärg för informationsikoner",$type:"string",key:"{icon.info}"},name:"iconInfo",attributes:{},path:["icon","info"]},warning:{key:"{icon.warning}",$value:"light-dark(#e62323, #e62323)",$description:"Ikonfärg för varningsikoner och invalid state",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.100})",$description:"Ikonfärg för varningsikoner och invalid state",$type:"string",key:"{icon.warning}"},name:"iconWarning",attributes:{},path:["icon","warning"]},important:{key:"{icon.important}",$value:"light-dark(#fab900, #fab900)",$description:"Ikonfärg för viktig information",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalYellow.100}, {color.signalYellow.100})",$description:"Ikonfärg för viktig information",$type:"string",key:"{icon.important}"},name:"iconImportant",attributes:{},path:["icon","important"]},readOnly:{key:"{icon.readOnly}",$value:"light-dark(#bfbfbf, #383838)",$description:"Ikonfärg för read-only state",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.50}, {color.gray.160})",$description:"Ikonfärg för read-only state",$type:"string",key:"{icon.readOnly}"},name:"iconReadOnly",attributes:{},path:["icon","readOnly"]}},link:{enabled:{key:"{link.enabled}",$value:"light-dark(#29698C, #6CA3C0)",$description:"Primärlänkfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.120}, {color.blue.70})",$description:"Primärlänkfärg",$type:"string",key:"{link.enabled}"},name:"linkEnabled",attributes:{},path:["link","enabled"]},hover:{key:"{link.hover}",$value:"light-dark(#143c50, #94BCD1)",$description:"Hover state för länkar",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.blue.50})",$description:"Hover state för länkar",$type:"string",key:"{link.hover}"},name:"linkHover",attributes:{},path:["link","hover"]},pressed:{key:"{link.pressed}",$value:"light-dark(#171717, #abcbdb)",$description:"Active/pressed state för länkar",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.200}, {color.blue.40})",$description:"Active/pressed state för länkar",$type:"string",key:"{link.pressed}"},name:"linkPressed",attributes:{},path:["link","pressed"]},visited:{key:"{link.visited}",$value:"light-dark(#954b95, #b46ab4)",$description:"Färg för besökta länkar",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.purple.110}, {color.purple.80})",$description:"Färg för besökta länkar",$type:"string",key:"{link.visited}"},name:"linkVisited",attributes:{},path:["link","visited"]}},support:{border:{success:{key:"{support.border.success}",$value:"light-dark(#008d3c, #008d3c)",$description:"Kantlinje för success-notifikationer",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalGreen.100}, {color.signalGreen.100})",$description:"Kantlinje för success-notifikationer",$type:"string",key:"{support.border.success}"},name:"supportBorderSuccess",attributes:{},path:["support","border","success"]},info:{key:"{support.border.info}",$value:"light-dark(#06c, #06c)",$description:"Kantlinje för notifikationer med information",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalBlue.100}, {color.signalBlue.100})",$description:"Kantlinje för notifikationer med information",$type:"string",key:"{support.border.info}"},name:"supportBorderInfo",attributes:{},path:["support","border","info"]},important:{key:"{support.border.important}",$value:"light-dark(#fab900, #fab900)",$description:"Kantlinje för notifikationer med viktig information",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalYellow.100}, {color.signalYellow.100})",$description:"Kantlinje för notifikationer med viktig information",$type:"string",key:"{support.border.important}"},name:"supportBorderImportant",attributes:{},path:["support","border","important"]},warning:{key:"{support.border.warning}",$value:"light-dark(#e62323, #e62323)",$description:"Kantlinje för notifikationer med varningar",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.100})",$description:"Kantlinje för notifikationer med varningar",$type:"string",key:"{support.border.warning}"},name:"supportBorderWarning",attributes:{},path:["support","border","warning"]}},background:{success:{key:"{support.background.success}",$value:"light-dark(#d5f2d9, #262626)",$description:"Bakgrund för success-notifikationer",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalGreen.20}, {color.gray.180})",$description:"Bakgrund för success-notifikationer",$type:"string",key:"{support.background.success}"},name:"supportBackgroundSuccess",attributes:{},path:["support","background","success"]},successHover:{key:"{support.background.successHover}",$value:"light-dark(#bae5c5, #333)",$description:"Hoverbakgrund för success-notifikationer",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalGreen.30}, {color.gray.170})",$description:"Hoverbakgrund för success-notifikationer",$type:"string",key:"{support.background.successHover}"},name:"supportBackgroundSuccessHover",attributes:{},path:["support","background","successHover"]},info:{key:"{support.background.info}",$value:"light-dark(#eaf2f6, #262626)",$description:"Bakgrund för notifikationer med information",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalBlue.10}, {color.gray.180})",$description:"Bakgrund för notifikationer med information",$type:"string",key:"{support.background.info}"},name:"supportBackgroundInfo",attributes:{},path:["support","background","info"]},infoHover:{key:"{support.background.infoHover}",$value:"light-dark(#d5e5ed, #333)",$description:"Hoverbakgrund för notifikationer med information",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalBlue.20}, {color.gray.170})",$description:"Hoverbakgrund för notifikationer med information",$type:"string",key:"{support.background.infoHover}"},name:"supportBackgroundInfoHover",attributes:{},path:["support","background","infoHover"]},important:{key:"{support.background.important}",$value:"light-dark(#fff8e2, #262626)",$description:"Bakgrund för notifikationer med viktig information",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalYellow.10}, {color.gray.180})",$description:"Bakgrund för notifikationer med viktig information",$type:"string",key:"{support.background.important}"},name:"supportBackgroundImportant",attributes:{},path:["support","background","important"]},importantHover:{key:"{support.background.importantHover}",$value:"light-dark(#fff1cd, #333)",$description:"Hoverbakgrund för notifikationer med viktig information",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalYellow.20}, {color.gray.170})",$description:"Hoverbakgrund för notifikationer med viktig information",$type:"string",key:"{support.background.importantHover}"},name:"supportBackgroundImportantHover",attributes:{},path:["support","background","importantHover"]},warning:{key:"{support.background.warning}",$value:"light-dark(#ffdfdf, #262626)",$description:"Bakgrund för notifikationer med varningar",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.20}, {color.gray.180})",$description:"Bakgrund för notifikationer med varningar",$type:"string",key:"{support.background.warning}"},name:"supportBackgroundWarning",attributes:{},path:["support","background","warning"]},warningHover:{key:"{support.background.warningHover}",$value:"light-dark(#fcc8c8, #333)",$description:"Hoverbakgrund för notifikationer med varningar",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.30}, {color.gray.170})",$description:"Hoverbakgrund för notifikationer med varningar",$type:"string",key:"{support.background.warningHover}"},name:"supportBackgroundWarningHover",attributes:{},path:["support","background","warningHover"]}}},text:{primary:{key:"{text.primary}",$value:"light-dark(#171717, #f2f2f2)",$description:"Primär textfärg. Rubriker och brödtext.",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.200}, {color.gray.10})",$description:"Primär textfärg. Rubriker och brödtext.",$type:"string",key:"{text.primary}"},name:"textPrimary",attributes:{},path:["text","primary"]},secondary:{key:"{text.secondary}",$value:"light-dark(#525252, #a6a6a6)",$description:"Sekundär textfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.140}, {color.gray.70})",$description:"Sekundär textfärg",$type:"string",key:"{text.secondary}"},name:"textSecondary",attributes:{},path:["text","secondary"]},tertiary:{key:"{text.tertiary}",$value:"light-dark(#143c50, #f2f2f2)",$description:"Textfärg på tertiär knapp",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.gray.10})",$description:"Textfärg på tertiär knapp",$type:"string",key:"{text.tertiary}"},name:"textTertiary",attributes:{},path:["text","tertiary"]},onColor:{key:"{text.onColor}",$value:"light-dark(#fff, #fff)",$description:"Textfärg på färgade bakgrunder som inte är lager",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.white.base}, {color.white.base})",$description:"Textfärg på färgade bakgrunder som inte är lager",$type:"string",key:"{text.onColor}"},name:"textOnColor",attributes:{},path:["text","onColor"]},inverse:{key:"{text.inverse}",$value:"light-dark(#f2f2f2, #171717)",$description:"Inverterad textfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.10}, {color.gray.200})",$description:"Inverterad textfärg",$type:"string",key:"{text.inverse}"},name:"textInverse",attributes:{},path:["text","inverse"]},disabled:{key:"{text.disabled}",$value:"light-dark(#bfbfbf, #525252)",$description:"Textfärg för disabled state",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Textfärg för disabled state",$type:"string",key:"{text.disabled}"},name:"textDisabled",attributes:{},path:["text","disabled"]},warning:{key:"{text.warning}",$value:"light-dark(#e62323, #EC5252)",$description:"Textfärg för felmeddelanden",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.80})",$description:"Textfärg för felmeddelanden",$type:"string",key:"{text.warning}"},name:"textWarning",attributes:{},path:["text","warning"]},placeholder:{key:"{text.placeholder}",$value:"light-dark(#a6a6a6, #525252)",$description:"Textfärg för platshållare",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.70}, {color.gray.140})",$description:"Textfärg för platshållare",$type:"string",key:"{text.placeholder}"},name:"textPlaceholder",attributes:{},path:["text","placeholder"]},readOnly:{key:"{text.readOnly}",$value:"light-dark(#737373, #999)",$description:"Textfärg för read-only state",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.110}, {color.gray.80})",$description:"Textfärg för read-only state",$type:"string",key:"{text.readOnly}"},name:"textReadOnly",attributes:{},path:["text","readOnly"]}},badge:{background:{key:"{badge.background}",$value:"light-dark(#e62323, #e62323)",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.100})",$type:"string",key:"{badge.background}"},name:"badgeBackground",attributes:{},path:["badge","background"]}},calendar:{date:{background:{hover:{key:"{calendar.date.background.hover}",$value:"light-dark(#0000001a, #ffffff1a)",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark(#0000001a, #ffffff1a)",$type:"string",key:"{calendar.date.background.hover}"},name:"calendarDateBackgroundHover",attributes:{},path:["calendar","date","background","hover"]},selected:{key:"{calendar.date.background.selected}",$value:"light-dark(#143c50, #5897b8)",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.blue.80})",$type:"string",key:"{calendar.date.background.selected}"},name:"calendarDateBackgroundSelected",attributes:{},path:["calendar","date","background","selected"]},startRange:{key:"{calendar.date.background.startRange}",$value:"light-dark(#143c50, #5897b8)",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.blue.80})",$type:"string",key:"{calendar.date.background.startRange}"},name:"calendarDateBackgroundStartRange",attributes:{},path:["calendar","date","background","startRange"]},inRange:{key:"{calendar.date.background.inRange}",$value:"light-dark(#d5e5ed, #143c50)",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.20}, {color.blue.150})",$type:"string",key:"{calendar.date.background.inRange}"},name:"calendarDateBackgroundInRange",attributes:{},path:["calendar","date","background","inRange"]},endRange:{key:"{calendar.date.background.endRange}",$value:"light-dark(#143c50, #5897b8)",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.blue.150}, {color.blue.80})",$type:"string",key:"{calendar.date.background.endRange}"},name:"calendarDateBackgroundEndRange",attributes:{},path:["calendar","date","background","endRange"]}}}},logo:{primary:{key:"{logo.primary}",$value:"light-dark(#b90835, #fff)",$description:"Färg på logotypen",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.red.100}, {color.white.base})",$description:"Färg på logotypen",$type:"string",key:"{logo.primary}"},name:"logoPrimary",attributes:{},path:["logo","primary"]}},menu:{item:{background:{hover:{key:"{menu.item.background.hover}",$value:"light-dark(#e6e6e6, #212121)",$description:"Bakgrundsfärg för menu vid hover",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.20}, {color.gray.190})",$description:"Bakgrundsfärg för menu vid hover",$type:"string",key:"{menu.item.background.hover}"},name:"menuItemBackgroundHover",attributes:{},path:["menu","item","background","hover"]},selected:{key:"{menu.item.background.selected}",$value:"light-dark(#f2f2f2, #262626)",$description:"Bakgrundsfärg för aktiv menu",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Bakgrundsfärg för aktiv menu",$type:"string",key:"{menu.item.background.selected}"},name:"menuItemBackgroundSelected",attributes:{},path:["menu","item","background","selected"]}}},text:{sectionHeader:{key:"{menu.text.sectionHeader}",$value:"light-dark(#525252, #a6a6a6)",filePath:"packages/theme/tokens/object-values.json",isSource:true,$type:"string",original:{$value:"light-dark({color.gray.140}, {color.gray.70})",$type:"string",key:"{menu.text.sectionHeader}"},name:"menuTextSectionHeader",attributes:{},path:["menu","text","sectionHeader"]}}},size:{10:{key:"{size.10}",$value:"0.125rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.125,unit:"rem"},$type:"dimension",key:"{size.10}"},name:"size10",attributes:{},path:["size","10"]},15:{key:"{size.15}",$value:"0.188rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.188,unit:"rem"},$type:"dimension",key:"{size.15}"},name:"size15",attributes:{},path:["size","15"]},20:{key:"{size.20}",$value:"0.25rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.25,unit:"rem"},$type:"dimension",key:"{size.20}"},name:"size20",attributes:{},path:["size","20"]},30:{key:"{size.30}",$value:"0.375rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.375,unit:"rem"},$type:"dimension",key:"{size.30}"},name:"size30",attributes:{},path:["size","30"]},40:{key:"{size.40}",$value:"0.5rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.5,unit:"rem"},$type:"dimension",key:"{size.40}"},name:"size40",attributes:{},path:["size","40"]},50:{key:"{size.50}",$value:"0.625rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.625,unit:"rem"},$type:"dimension",key:"{size.50}"},name:"size50",attributes:{},path:["size","50"]},60:{key:"{size.60}",$value:"0.75rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.75,unit:"rem"},$type:"dimension",key:"{size.60}"},name:"size60",attributes:{},path:["size","60"]},70:{key:"{size.70}",$value:"0.875rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.875,unit:"rem"},$type:"dimension",key:"{size.70}"},name:"size70",attributes:{},path:["size","70"]},75:{key:"{size.75}",$value:"0.938rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.938,unit:"rem"},$type:"dimension",key:"{size.75}"},name:"size75",attributes:{},path:["size","75"]},80:{key:"{size.80}",$value:"1rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:1,unit:"rem"},$type:"dimension",key:"{size.80}"},name:"size80",attributes:{},path:["size","80"]},90:{key:"{size.90}",$value:"1.25rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:1.25,unit:"rem"},$type:"dimension",key:"{size.90}"},name:"size90",attributes:{},path:["size","90"]},100:{key:"{size.100}",$value:"1.5rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:1.5,unit:"rem"},$type:"dimension",key:"{size.100}"},name:"size100",attributes:{},path:["size","100"]},110:{key:"{size.110}",$value:"1.75rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:1.75,unit:"rem"},$type:"dimension",key:"{size.110}"},name:"size110",attributes:{},path:["size","110"]},120:{key:"{size.120}",$value:"2rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:2,unit:"rem"},$type:"dimension",key:"{size.120}"},name:"size120",attributes:{},path:["size","120"]},130:{key:"{size.130}",$value:"2.5rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:2.5,unit:"rem"},$type:"dimension",key:"{size.130}"},name:"size130",attributes:{},path:["size","130"]},140:{key:"{size.140}",$value:"2.75rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:2.75,unit:"rem"},$type:"dimension",key:"{size.140}"},name:"size140",attributes:{},path:["size","140"]},150:{key:"{size.150}",$value:"3rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:3,unit:"rem"},$type:"dimension",key:"{size.150}"},name:"size150",attributes:{},path:["size","150"]},"00":{key:"{size.00}",$type:"dimension",$value:"0rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,original:{$type:"dimension",$value:{value:0,unit:"rem"},key:"{size.00}"},name:"size00",attributes:{},path:["size","00"]},"05":{key:"{size.05}",$value:"0.063rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:{value:0.063,unit:"rem"},$type:"dimension",key:"{size.05}"},name:"size05",attributes:{},path:["size","05"]}},spacing:{10:{key:"{spacing.10}",$value:"0.125rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:0.125,unit:"rem"},$type:"dimension",key:"{spacing.10}"},name:"spacing10",attributes:{},path:["spacing","10"]},20:{key:"{spacing.20}",$value:"0.25rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:0.25,unit:"rem"},$type:"dimension",key:"{spacing.20}"},name:"spacing20",attributes:{},path:["spacing","20"]},30:{key:"{spacing.30}",$value:"0.5rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:0.5,unit:"rem"},$type:"dimension",key:"{spacing.30}"},name:"spacing30",attributes:{},path:["spacing","30"]},40:{key:"{spacing.40}",$value:"0.75rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:0.75,unit:"rem"},$type:"dimension",key:"{spacing.40}"},name:"spacing40",attributes:{},path:["spacing","40"]},50:{key:"{spacing.50}",$value:"1rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:1,unit:"rem"},$type:"dimension",key:"{spacing.50}"},name:"spacing50",attributes:{},path:["spacing","50"]},60:{key:"{spacing.60}",$value:"1.5rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:1.5,unit:"rem"},$type:"dimension",key:"{spacing.60}"},name:"spacing60",attributes:{},path:["spacing","60"]},70:{key:"{spacing.70}",$value:"2rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:2,unit:"rem"},$type:"dimension",key:"{spacing.70}"},name:"spacing70",attributes:{},path:["spacing","70"]},80:{key:"{spacing.80}",$value:"2.5rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:2.5,unit:"rem"},$type:"dimension",key:"{spacing.80}"},name:"spacing80",attributes:{},path:["spacing","80"]},90:{key:"{spacing.90}",$value:"3rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:3,unit:"rem"},$type:"dimension",key:"{spacing.90}"},name:"spacing90",attributes:{},path:["spacing","90"]},100:{key:"{spacing.100}",$value:"4rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:4,unit:"rem"},$type:"dimension",key:"{spacing.100}"},name:"spacing100",attributes:{},path:["spacing","100"]},110:{key:"{spacing.110}",$value:"5rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:5,unit:"rem"},$type:"dimension",key:"{spacing.110}"},name:"spacing110",attributes:{},path:["spacing","110"]},120:{key:"{spacing.120}",$value:"6rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:{value:6,unit:"rem"},$type:"dimension",key:"{spacing.120}"},name:"spacing120",attributes:{},path:["spacing","120"]},xsmall:{key:"{spacing.xsmall}",$value:"0.25rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:"{size.20}",$type:"dimension",key:"{spacing.xsmall}"},name:"spacingXsmall",attributes:{},path:["spacing","xsmall"]},small:{key:"{spacing.small}",$value:"0.5rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:"{size.40}",$type:"dimension",key:"{spacing.small}"},name:"spacingSmall",attributes:{},path:["spacing","small"]},medium:{key:"{spacing.medium}",$value:"1rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:"{size.80}",$type:"dimension",key:"{spacing.medium}"},name:"spacingMedium",attributes:{},path:["spacing","medium"]},large:{key:"{spacing.large}",$value:"1.5rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:"{size.100}",$type:"dimension",key:"{spacing.large}"},name:"spacingLarge",attributes:{},path:["spacing","large"]},xlarge:{key:"{spacing.xlarge}",$value:"2rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,$type:"dimension",original:{$value:"{size.120}",$type:"dimension",key:"{spacing.xlarge}"},name:"spacingXlarge",attributes:{},path:["spacing","xlarge"]}},state:{focus:{key:"{state.focus}",$type:"string",$value:"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)",$description:"Focus style used when the component is focused (box-shadow).",filePath:"packages/theme/tokens/states.json",isSource:true,original:{$type:"string",$value:"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)",$description:"Focus style used when the component is focused (box-shadow).",key:"{state.focus}"},name:"stateFocus",attributes:{},path:["state","focus"]},focusInset:{key:"{state.focusInset}",$type:"string",$value:"inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)",$description:"Inset variant of the focus ring (box-shadow inset).",filePath:"packages/theme/tokens/states.json",isSource:true,original:{$type:"string",$value:"inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)",$description:"Inset variant of the focus ring (box-shadow inset).",key:"{state.focusInset}"},name:"stateFocusInset",attributes:{},path:["state","focusInset"]},focusContrastMode:{outline:{key:"{state.focusContrastMode.outline}",$value:"2px",$description:"Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.",filePath:"packages/theme/tokens/states.json",isSource:true,$type:"dimension",original:{$value:"2px",$description:"Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.",$type:"dimension",key:"{state.focusContrastMode.outline}"},name:"stateFocusContrastModeOutline",attributes:{},path:["state","focusContrastMode","outline"]},offset:{key:"{state.focusContrastMode.offset}",$value:"2px",$description:"Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active..",filePath:"packages/theme/tokens/states.json",isSource:true,$type:"dimension",original:{$value:"2px",$description:"Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active..",$type:"dimension",key:"{state.focusContrastMode.offset}"},name:"stateFocusContrastModeOffset",attributes:{},path:["state","focusContrastMode","offset"]}}},transition:{duration:{slow:{key:"{transition.duration.slow}",$value:"500ms",$type:"duration",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:"500ms",$type:"duration",key:"{transition.duration.slow}"},name:"transitionDurationSlow",attributes:{},path:["transition","duration","slow"]},normal:{key:"{transition.duration.normal}",$value:"300ms",$type:"duration",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:"300ms",$type:"duration",key:"{transition.duration.normal}"},name:"transitionDurationNormal",attributes:{},path:["transition","duration","normal"]},fast:{key:"{transition.duration.fast}",$value:"250ms",$type:"duration",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:"250ms",$type:"duration",key:"{transition.duration.fast}"},name:"transitionDurationFast",attributes:{},path:["transition","duration","fast"]}},timing:{easeOut:{key:"{transition.timing.easeOut}",$value:[0,0,0.58,1],$type:"cubicBezier",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:[0,0,0.58,1],$type:"cubicBezier",key:"{transition.timing.easeOut}"},name:"transitionTimingEaseOut",attributes:{},path:["transition","timing","easeOut"]},easeIn:{key:"{transition.timing.easeIn}",$value:[0.42,0,1,1],$type:"cubicBezier",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:[0.42,0,1,1],$type:"cubicBezier",key:"{transition.timing.easeIn}"},name:"transitionTimingEaseIn",attributes:{},path:["transition","timing","easeIn"]}},panel:{collapse:{key:"{transition.panel.collapse}",$value:{delay:"0ms",duration:"300ms",timingFunction:[0,0,0.58,1]},$type:"transition",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:{delay:"0ms",duration:"{transition.duration.normal}",timingFunction:"{transition.timing.easeOut}"},$type:"transition",key:"{transition.panel.collapse}"},name:"transitionPanelCollapse",attributes:{},path:["transition","panel","collapse"]},expand:{key:"{transition.panel.expand}",$value:{delay:"0ms",duration:"300ms",timingFunction:[0.42,0,1,1]},$type:"transition",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:{delay:"0ms",duration:"{transition.duration.normal}",timingFunction:"{transition.timing.easeIn}"},$type:"transition",key:"{transition.panel.expand}"},name:"transitionPanelExpand",attributes:{},path:["transition","panel","expand"]}}},typography:{font:{family:{key:"{typography.font.family}",$type:"fontFamily",$value:"Inter, sans-serif",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontFamily",$value:"Inter, sans-serif",key:"{typography.font.family}"},name:"typographyFontFamily",attributes:{},path:["typography","font","family"]},size:{10:{key:"{typography.font.size.10}",$value:"0.75rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:0.75,unit:"rem"},$type:"dimension",key:"{typography.font.size.10}"},name:"typographyFontSize10",attributes:{},path:["typography","font","size","10"]},20:{key:"{typography.font.size.20}",$value:"0.875rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:0.875,unit:"rem"},$type:"dimension",key:"{typography.font.size.20}"},name:"typographyFontSize20",attributes:{},path:["typography","font","size","20"]},30:{key:"{typography.font.size.30}",$value:"1rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1,unit:"rem"},$type:"dimension",key:"{typography.font.size.30}"},name:"typographyFontSize30",attributes:{},path:["typography","font","size","30"]},40:{key:"{typography.font.size.40}",$value:"1.125rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.125,unit:"rem"},$type:"dimension",key:"{typography.font.size.40}"},name:"typographyFontSize40",attributes:{},path:["typography","font","size","40"]},50:{key:"{typography.font.size.50}",$value:"1.25rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.25,unit:"rem"},$type:"dimension",key:"{typography.font.size.50}"},name:"typographyFontSize50",attributes:{},path:["typography","font","size","50"]},60:{key:"{typography.font.size.60}",$value:"1.5rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.5,unit:"rem"},$type:"dimension",key:"{typography.font.size.60}"},name:"typographyFontSize60",attributes:{},path:["typography","font","size","60"]},70:{key:"{typography.font.size.70}",$value:"1.625rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.625,unit:"rem"},$type:"dimension",key:"{typography.font.size.70}"},name:"typographyFontSize70",attributes:{},path:["typography","font","size","70"]},80:{key:"{typography.font.size.80}",$value:"2rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:2,unit:"rem"},$type:"dimension",key:"{typography.font.size.80}"},name:"typographyFontSize80",attributes:{},path:["typography","font","size","80"]},90:{key:"{typography.font.size.90}",$value:"2.25rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:2.25,unit:"rem"},$type:"dimension",key:"{typography.font.size.90}"},name:"typographyFontSize90",attributes:{},path:["typography","font","size","90"]},100:{key:"{typography.font.size.100}",$value:"2.625rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:2.625,unit:"rem"},$type:"dimension",key:"{typography.font.size.100}"},name:"typographyFontSize100",attributes:{},path:["typography","font","size","100"]}}},lineHeight:{10:{key:"{typography.lineHeight.10}",$value:"1rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.10}"},name:"typographyLineHeight10",attributes:{},path:["typography","lineHeight","10"]},20:{key:"{typography.lineHeight.20}",$value:"1.125rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.125,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.20}"},name:"typographyLineHeight20",attributes:{},path:["typography","lineHeight","20"]},30:{key:"{typography.lineHeight.30}",$value:"1.25rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.25,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.30}"},name:"typographyLineHeight30",attributes:{},path:["typography","lineHeight","30"]},40:{key:"{typography.lineHeight.40}",$value:"1.375rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.375,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.40}"},name:"typographyLineHeight40",attributes:{},path:["typography","lineHeight","40"]},50:{key:"{typography.lineHeight.50}",$value:"1.5rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.5,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.50}"},name:"typographyLineHeight50",attributes:{},path:["typography","lineHeight","50"]},60:{key:"{typography.lineHeight.60}",$value:"1.75rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:1.75,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.60}"},name:"typographyLineHeight60",attributes:{},path:["typography","lineHeight","60"]},70:{key:"{typography.lineHeight.70}",$value:"2rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:2,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.70}"},name:"typographyLineHeight70",attributes:{},path:["typography","lineHeight","70"]},80:{key:"{typography.lineHeight.80}",$value:"2.25rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:2.25,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.80}"},name:"typographyLineHeight80",attributes:{},path:["typography","lineHeight","80"]},90:{key:"{typography.lineHeight.90}",$value:"2.5rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:2.5,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.90}"},name:"typographyLineHeight90",attributes:{},path:["typography","lineHeight","90"]},100:{key:"{typography.lineHeight.100}",$value:"3rem",filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"dimension",original:{$value:{value:3,unit:"rem"},$type:"dimension",key:"{typography.lineHeight.100}"},name:"typographyLineHeight100",attributes:{},path:["typography","lineHeight","100"]}},weight:{thin:{key:"{typography.weight.thin}",$value:100,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:100,$type:"fontWeight",key:"{typography.weight.thin}"},name:"typographyWeightThin",attributes:{},path:["typography","weight","thin"]},extraLight:{key:"{typography.weight.extraLight}",$value:200,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:200,$type:"fontWeight",key:"{typography.weight.extraLight}"},name:"typographyWeightExtraLight",attributes:{},path:["typography","weight","extraLight"]},light:{key:"{typography.weight.light}",$value:300,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:300,$type:"fontWeight",key:"{typography.weight.light}"},name:"typographyWeightLight",attributes:{},path:["typography","weight","light"]},regular:{key:"{typography.weight.regular}",$value:400,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:400,$type:"fontWeight",key:"{typography.weight.regular}"},name:"typographyWeightRegular",attributes:{},path:["typography","weight","regular"]},medium:{key:"{typography.weight.medium}",$value:500,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:500,$type:"fontWeight",key:"{typography.weight.medium}"},name:"typographyWeightMedium",attributes:{},path:["typography","weight","medium"]},semiBold:{key:"{typography.weight.semiBold}",$value:600,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:600,$type:"fontWeight",key:"{typography.weight.semiBold}"},name:"typographyWeightSemiBold",attributes:{},path:["typography","weight","semiBold"]},bold:{key:"{typography.weight.bold}",$value:700,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:700,$type:"fontWeight",key:"{typography.weight.bold}"},name:"typographyWeightBold",attributes:{},path:["typography","weight","bold"]},extraBold:{key:"{typography.weight.extraBold}",$value:800,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:800,$type:"fontWeight",key:"{typography.weight.extraBold}"},name:"typographyWeightExtraBold",attributes:{},path:["typography","weight","extraBold"]},black:{key:"{typography.weight.black}",$value:900,filePath:"packages/theme/tokens/typography.json",isSource:true,$type:"fontWeight",original:{$value:900,$type:"fontWeight",key:"{typography.weight.black}"},name:"typographyWeightBlack",attributes:{},path:["typography","weight","black"]}}},zIndex:{base:{key:"{zIndex.base}",$value:1,filePath:"packages/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:1,$type:"number",key:"{zIndex.base}"},name:"zIndexBase",attributes:{},path:["zIndex","base"]},above:{key:"{zIndex.above}",$value:10,filePath:"packages/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:10,$type:"number",key:"{zIndex.above}"},name:"zIndexAbove",attributes:{},path:["zIndex","above"]},modal:{key:"{zIndex.modal}",$value:1000,filePath:"packages/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:1000,$type:"number",key:"{zIndex.modal}"},name:"zIndexModal",attributes:{},path:["zIndex","modal"]},toast:{key:"{zIndex.toast}",$value:1100,filePath:"packages/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:1100,$type:"number",key:"{zIndex.toast}"},name:"zIndexToast",attributes:{},path:["zIndex","toast"]},skipToContent:{key:"{zIndex.skipToContent}",$value:1200,filePath:"packages/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:1200,$type:"number",key:"{zIndex.skipToContent}"},name:"zIndexSkipToContent",attributes:{},path:["zIndex","skipToContent"]}}});
;// ./packages/theme/src/lib/style-dictionary-dist/variables.js
/**
 * Do not edit directly, this file was auto-generated.
 */var windowSizesSm="480px";var windowSizesMd="768px";var windowSizesLg="1024px";var windowSizesXl="1280px";var breakpointsXs="(max-width: calc(480px - 1px))";var breakpointsSm="(min-width: 480px)";var breakpointsMd="(min-width: 768px)";var breakpointsLg="(min-width: 1024px)";var breakpointsXl="(min-width: 1280px)";// This is the largest breakpoint
var buttonBackgroundPrimaryBase="light-dark(#143c50, #2e7ca5)";// Färg på primärknapp
var buttonBackgroundPrimaryHover="light-dark(#25607f, #25607f)";// Hover state på primärknapp
var buttonBackgroundPrimaryActive="light-dark(#2e7ca5, #143c50)";// Active state för primärknapp
var buttonBackgroundSecondaryBase="light-dark(#fff, #171717)";// Färg på sekundärknapp
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
var colorGray10="#f2f2f2";var colorGray20="#e6e6e6";var colorGray30="#d9d9d9";var colorGray40="#ccc";var colorGray50="#bfbfbf";var colorGray60="#b3b3b3";var colorGray70="#a6a6a6";var colorGray80="#999";var colorGray90="#8c8c8c";var colorGray100="#808080";var colorGray110="#737373";var colorGray120="#666";var colorGray130="#5d5d5d";var colorGray140="#525252";var colorGray150="#474747";var colorGray160="#383838";var colorGray170="#333";var colorGray180="#262626";var colorGray190="#212121";var colorGray200="#171717";var colorBlue10="#eaf2f6";var colorBlue20="#d5e5ed";var colorBlue40="#abcbdb";var colorBlue50="#94BCD1";var colorBlue60="#82b0c9";var colorBlue70="#6CA3C0";var colorBlue80="#5897b8";var colorBlue90="#4289ad";var colorBlue100="#2e7ca5";var colorBlue110="#2C7399";var colorBlue120="#29698C";var colorBlue130="#25607f";var colorBlue150="#143c50";var colorPurple80="#b46ab4";var colorPurple110="#954b95";var colorRed100="#b90835";var colorSignalBlue10="#eaf2f6";var colorSignalBlue20="#d5e5ed";var colorSignalBlue100="#06c";var colorSignalGreen20="#d5f2d9";var colorSignalGreen30="#bae5c5";var colorSignalGreen100="#008d3c";var colorSignalGreen150="#194B33";var colorSignalYellow10="#fff8e2";var colorSignalYellow20="#fff1cd";var colorSignalYellow30="#ffeab8";var colorSignalYellow40="#ffe3a3";var colorSignalYellow50="#ffdc8b";var colorSignalYellow60="#ffd47b";var colorSignalYellow70="#fdcd5d";var colorSignalYellow80="#fbc640";var colorSignalYellow90="#fabf1b";var colorSignalYellow100="#fab900";var colorSignalYellow110="#daa105";var colorSignalYellow120="#bd8c1e";var colorSignalYellow130="#a17927";var colorSignalYellow140="#88672a";var colorSignalYellow150="#70562b";var colorSignalYellow160="#5a4629";var colorSignalYellow170="#453826";var colorSignalYellow180="#322a20";var colorSignalYellow190="#201c18";var colorSignalYellow200="#0f0e0e";var colorSignalRed10="#ffefef";var colorSignalRed20="#ffdfdf";var colorSignalRed30="#fcc8c8";var colorSignalRed40="#f9b0b0";var colorSignalRed50="#f69999";var colorSignalRed60="#f38181";var colorSignalRed70="#ef6a6a";var colorSignalRed80="#EC5252";var colorSignalRed90="#e93b3b";var colorSignalRed100="#e62323";var colorSignalRed110="#d12020";var colorSignalRed120="#bc1d1d";var colorSignalRed130="#a71919";var colorSignalRed140="#921616";var colorSignalRed150="#7d1313";var colorSignalRed160="#691010";var colorSignalRed170="#540d0d";var colorSignalRed180="#3f0a0a";var colorSignalRed190="#2a0606";var colorSignalRed200="#150303";var backgroundBase="light-dark(#fff, #171717)";// Standardbakgrund för våra applikationer
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
var borderColorSubtle="light-dark(#bfbfbf, #383838)";// Kantlinje med låg kontrast
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
var iconImportant="light-dark(#fab900, #fab900)";// Ikonfärg för viktig information
var iconReadOnly="light-dark(#bfbfbf, #383838)";// Ikonfärg för read-only state
var linkEnabled="light-dark(#29698C, #6CA3C0)";// Primärlänkfärg
var linkHover="light-dark(#143c50, #94BCD1)";// Hover state för länkar
var linkPressed="light-dark(#171717, #abcbdb)";// Active/pressed state för länkar
var linkVisited="light-dark(#954b95, #b46ab4)";// Färg för besökta länkar
var supportBorderSuccess="light-dark(#008d3c, #008d3c)";// Kantlinje för success-notifikationer
var supportBorderInfo="light-dark(#06c, #06c)";// Kantlinje för notifikationer med information
var supportBorderImportant="light-dark(#fab900, #fab900)";// Kantlinje för notifikationer med viktig information
var supportBorderWarning="light-dark(#e62323, #e62323)";// Kantlinje för notifikationer med varningar
var supportBackgroundSuccess="light-dark(#d5f2d9, #262626)";// Bakgrund för success-notifikationer
var supportBackgroundSuccessHover="light-dark(#bae5c5, #333)";// Hoverbakgrund för success-notifikationer
var supportBackgroundInfo="light-dark(#eaf2f6, #262626)";// Bakgrund för notifikationer med information
var supportBackgroundInfoHover="light-dark(#d5e5ed, #333)";// Hoverbakgrund för notifikationer med information
var supportBackgroundImportant="light-dark(#fff8e2, #262626)";// Bakgrund för notifikationer med viktig information
var supportBackgroundImportantHover="light-dark(#fff1cd, #333)";// Hoverbakgrund för notifikationer med viktig information
var supportBackgroundWarning="light-dark(#ffdfdf, #262626)";// Bakgrund för notifikationer med varningar
var supportBackgroundWarningHover="light-dark(#fcc8c8, #333)";// Hoverbakgrund för notifikationer med varningar
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
var transitionDurationSlow="500ms";var transitionDurationNormal="300ms";var transitionDurationFast="250ms";var transitionTimingEaseOut=(/* unused pure expression or super */ null && ([0,0,0.58,1]));var transitionTimingEaseIn=(/* unused pure expression or super */ null && ([0.42,0,1,1]));var transitionPanelCollapse={delay:"0ms",duration:"300ms",timingFunction:[0,0,0.58,1]};var transitionPanelExpand={delay:"0ms",duration:"300ms",timingFunction:[0.42,0,1,1]};var typographyFontFamily="Inter, sans-serif";var typographyFontSize10="0.75rem";var typographyFontSize20="0.875rem";var typographyFontSize30="1rem";var typographyFontSize40="1.125rem";var typographyFontSize50="1.25rem";var typographyFontSize60="1.5rem";var typographyFontSize70="1.625rem";var typographyFontSize80="2rem";var typographyFontSize90="2.25rem";var typographyFontSize100="2.625rem";var typographyLineHeight10="1rem";var typographyLineHeight20="1.125rem";var typographyLineHeight30="1.25rem";var typographyLineHeight40="1.375rem";var typographyLineHeight50="1.5rem";var typographyLineHeight60="1.75rem";var typographyLineHeight70="2rem";var typographyLineHeight80="2.25rem";var typographyLineHeight90="2.5rem";var typographyLineHeight100="3rem";var typographyWeightThin=100;var typographyWeightExtraLight=200;var typographyWeightLight=300;var typographyWeightRegular=400;var typographyWeightMedium=500;var typographyWeightSemiBold=600;var typographyWeightBold=700;var typographyWeightExtraBold=800;var typographyWeightBlack=900;var zIndexBase=1;var zIndexAbove=10;var zIndexModal=1000;var zIndexToast=1100;var zIndexSkipToContent=1200;
;// ./packages/theme/src/lib/index.ts

;// ./packages/theme/src/index.ts


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
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
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

/***/ 22247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ ListBox)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Virtualizer.mjs + 9 modules
var Virtualizer = __webpack_require__(424);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ListBox.mjs + 3 modules
var dist_ListBox = __webpack_require__(79255);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/callSuper.js + 2 modules
var callSuper = __webpack_require__(31013);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(77387);
// EXTERNAL MODULE: ./node_modules/@react-stately/layout/dist/ListLayout.mjs + 2 modules
var ListLayout = __webpack_require__(12939);
;// ./packages/components/src/list-box/SectionedListLayout.ts
var SectionedListLayout=/*#__PURE__*/function(_ListLayout){function SectionedListLayout(){return (0,callSuper/* default */.A)(this,SectionedListLayout,arguments);}(0,inheritsLoose/* default */.A)(SectionedListLayout,_ListLayout);var _proto=SectionedListLayout.prototype;/**
   * When using the ListLayout our scroll container height is not calculated properly when the content is partially sectioned.
   * ```ts
   * const partiallySectionedContent = [
   *  {
   *    name: 'fruit section',
   *    children: [{ id: 'kiwi', name: 'Kiwi' }]
   *  },
   *  // berries have no section, because it's optional
   *  { id: 'lingonberries', name: 'Lingonberries' }
   * ];
   * ```
   * If we load the layout info for each key in the collection the calculation is correct.
   *
   * This might not be optional for performance, FYI
   */_proto.getContentSize=function getContentSize(){var _this$virtualizer,_this=this;var keys=this==null||(_this$virtualizer=this.virtualizer)==null?void 0:_this$virtualizer.collection.getKeys();Array.from(keys||[]).forEach(function(key){_this.getLayoutInfo(key);});return this.contentSize;};return SectionedListLayout;}(ListLayout/* ListLayout */.$);
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBox.module.css
var ListBox_module = __webpack_require__(6974);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/list-box/ListBox.tsx
var _excluded=["className","children"];var ListBox=function ListBox(_ref){var className=_ref.className,children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Virtualizer/* Virtualizer */.Y,{layout:SectionedListLayout,layoutOptions:{headingHeight:38},children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_ListBox/* ListBox */.qF,Object.assign({className:(0,clsx/* default */.A)(ListBox_module/* default */.A.listBox,className)},rest,{children:children}))});};

/***/ }),

/***/ 28777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
var _excluded=["children","className","offset","hideArrow"];function Popover_Popover(_ref){var children=_ref.children,className=_ref.className,_ref$offset=_ref.offset,offset=_ref$offset===void 0?4:_ref$offset,_ref$hideArrow=_ref.hideArrow,hideArrow=_ref$hideArrow===void 0?false:_ref$hideArrow,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Popover/* Popover */.A,Object.assign({},props,{offset:offset,className:(0,clsx/* default */.A)(Popover_module.popover,className),children:[!hideArrow&&/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Popover_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:8,height:8,viewBox:"0 0 8 8",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L4 4 L8 0"})})}),children]}));}

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

/***/ 50286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_tanstack_table_mdx_86b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-tanstack-table-mdx-86b.json
const site_docs_dev_tanstack_table_mdx_86b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/tanstack-table","title":"Tanstack Table","description":"Implementation av Tanstack Table","source":"@site/docs/dev/tanstack-table.mdx","sourceDirName":"dev","slug":"/dev/tanstack-table","permalink":"/pr-preview/pr-891/dev/tanstack-table","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Tanstack Table","description":"Implementation av Tanstack Table","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/examples/index.ts + 5 modules
var examples = __webpack_require__(61130);
;// ./apps/docs/docs/dev/tanstack-table.mdx


const frontMatter = {
	title: 'Tanstack Table',
	description: 'Implementation av Tanstack Table',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Tanstack Table';

const assets = {

};




const toc = [{
  "value": "När du ska använda Tanstack Table",
  "id": "när-du-ska-använda-tanstack-table",
  "level": 2
}, {
  "value": "Komma igång",
  "id": "komma-igång",
  "level": 2
}, {
  "value": "Användbara länkar",
  "id": "användbara-länkar",
  "level": 2
}, {
  "value": "Exempel",
  "id": "exempel",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "tanstack-table",
        children: "Tanstack Table"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "När du behöver mer avancerade funktioner för tabeller rekommenderar vi att du använder Tanstack Table. Det är ett\nkraftfullt \"headless\"-verktyg, vilket innebär att det inte renderar någon markup eller stilar åt dig. Detta ger dig\nfull kontroll över tabellens utseende, och vi har tillhandahållit stilar för att säkerställa att den matchar Midas utseende och känsla."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Stilarna för Tanstack Table är just nu i en tidig version och är ett arbete som pågår. Tanstack Table är inte en del av kärnbiblioteket i Midas, vilket innebär att supporten är begränsad. Vi är öppna för kodbidrag till vårt ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas",
          children: "repo"
        }), " och tar gärna emot förslag på stilar som saknas när du implementerar Tanstack Table."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "när-du-ska-använda-tanstack-table",
      children: "När du ska använda Tanstack Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använd Tanstack Table när du behöver funktioner som:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Paginering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sortering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Filtrering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Radmarkering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kolumnordning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Och mycket mer!"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För enklare tabeller som inte kräver denna funktionalitet kan du använda den grundläggande Midas-tabellkomponenten."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "komma-igång",
      children: "Komma igång"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För att använda Tanstack Table med Midas-stilar måste du först installera de nödvändiga beroendena:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @tanstack/react-table\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Importera sedan Midas-stilarna för tabellen:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "@import '@midas-ds/table-styles/tanstack-table.css';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "table"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<table className={'table'}>...</table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "användbara-länkar",
      children: "Användbara länkar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Här är några resurser som hjälper dig att komma igång med TanStack Table:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://tanstack.com/table/v8/docs/introduction",
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "TanStack Table v8 Docs"
          })
        }), ": Den officiella dokumentationen är den bästa platsen att lära sig om alla funktioner och hur man använder dem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://tanstack.com/table/v8/docs/framework/react/examples/basic",
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Exempel"
          })
        }), ": En stor samling exempel som visar hur man implementerar olika funktioner."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exempel",
      children: "Exempel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Här är ett exempel på en paginerad tabell byggd med Tanstack Table och stylad med Midas\n(exempel taget officiella dokumentationen):"
    }), "\n", (0,jsx_runtime.jsx)(examples/* PaginationExample */.F0, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"Table.tsx\"",
        children: "import React from 'react'\nimport '@midas-ds/table-styles/tanstack-table.css'\n\nimport {\n  type ColumnDef,\n  flexRender,\n  getCoreRowModel,\n  getPaginationRowModel,\n  useReactTable,\n} from '@tanstack/react-table'\nimport { makeData } from './makeData'\nimport { Button, TextField, Select } from '@midas-ds/components'\nimport { ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from 'lucide-react'\n\ntype Person = {\n  firstName: string\n  lastName: string\n  age: number\n  visits: number\n  status: string\n  progress: number\n}\n\nconst defaultColumns: ColumnDef<Person>[] = [\n  {\n    accessorKey: 'firstName',\n    header: () => 'First Name',\n    cell: info => info.getValue(),\n    footer: props => props.column.id,\n  },\n  {\n    accessorFn: row => row.lastName,\n    id: 'lastName',\n    cell: info => info.getValue(),\n    header: () => <span>Last Name</span>,\n    footer: props => props.column.id,\n  },\n  {\n    accessorKey: 'age',\n    header: () => 'Age',\n    footer: props => props.column.id,\n  },\n  {\n    accessorKey: 'visits',\n    header: () => <span>Visits</span>,\n    footer: props => props.column.id,\n  },\n  {\n    accessorKey: 'status',\n    header: 'Status',\n    footer: props => props.column.id,\n  },\n  {\n    accessorKey: 'progress',\n    header: 'Profile Progress',\n    footer: props => props.column.id,\n  },\n]\n\nexport const PaginationExample = () => {\n  const [data] = React.useState(() => makeData(1000))\n  const [columns] = React.useState<typeof defaultColumns>(() => [...defaultColumns])\n\n  // Create the table and pass your options\n  const table = useReactTable({\n    data,\n    columns,\n    getCoreRowModel: getCoreRowModel(),\n    getPaginationRowModel: getPaginationRowModel(),\n  })\n\n  // Manage your own state\n  const [state, setState] = React.useState(table.initialState)\n\n  // Override the state managers for the table to your own\n  table.setOptions(prev => ({\n    ...prev,\n    state,\n    onStateChange: setState,\n    // These are just table options, so if things\n    // need to change based on your state, you can\n    // derive them here\n  }))\n\n  return (\n    <div>\n      <table className={'table'}>\n        <thead>\n          {table.getHeaderGroups().map(headerGroup => (\n            <tr key={headerGroup.id}>\n              {headerGroup.headers.map(header => (\n                <th\n                  key={header.id}\n                  colSpan={header.colSpan}\n                >\n                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n                </th>\n              ))}\n            </tr>\n          ))}\n        </thead>\n        <tbody>\n          {table.getRowModel().rows.map(row => (\n            <tr key={row.id}>\n              {row.getVisibleCells().map(cell => (\n                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>\n              ))}\n            </tr>\n          ))}\n        </tbody>\n        <tfoot>\n          {table.getFooterGroups().map(footerGroup => (\n            <tr key={footerGroup.id}>\n              {footerGroup.headers.map(header => (\n                <th\n                  key={header.id}\n                  colSpan={header.colSpan}\n                >\n                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}\n                </th>\n              ))}\n            </tr>\n          ))}\n        </tfoot>\n      </table>\n      <div />\n      <div style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0' }}>\n        <Button\n          onPress={() => table.setPageIndex(0)}\n          isDisabled={!table.getCanPreviousPage()}\n        >\n          <ChevronsLeft />\n        </Button>\n        <Button\n          onPress={() => table.previousPage()}\n          isDisabled={!table.getCanPreviousPage()}\n        >\n          <ChevronLeft />\n        </Button>\n        <Button\n          onPress={() => table.nextPage()}\n          isDisabled={!table.getCanNextPage()}\n        >\n          <ChevronRight />\n        </Button>\n        <Button\n          onPress={() => table.setPageIndex(table.getPageCount() - 1)}\n          isDisabled={!table.getCanNextPage()}\n        >\n          <ChevronsRight />\n        </Button>\n      </div>\n      <div style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0' }}>\n        <TextField\n          value={`${table.getState().pagination.pageIndex + 1} of ${table.getPageCount()}`}\n          isReadOnly\n          label={'Page'}\n        />\n        <TextField\n          label={'Go to page'}\n          type='number'\n          min={1}\n          max={table.getPageCount()}\n          value={(table.getState().pagination.pageIndex + 1).toString()}\n          onChange={e => {\n            const page = e ? Number(e) - 1 : 0\n            table.setPageIndex(page)\n          }}\n        />\n        <Select\n          style={{ minWidth: '200px' }}\n          label='Rows per page'\n          selectedKeys={[table.getState().pagination.pageSize]}\n          onSelectionChange={keys => table.setPageSize(Number(Array.from(keys)[0]))}\n          options={[10, 20, 30, 40, 50].map(pageSize => ({\n            id: pageSize,\n            name: `Show ${pageSize}`,\n          }))}\n        ></Select>\n      </div>\n    </div>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        metastring: "title=makeData.ts",
        children: "import { faker } from '@faker-js/faker'\n\nexport type Person = {\n  firstName: string\n  lastName: string\n  age: number\n  visits: number\n  progress: number\n  status: 'relationship' | 'complicated' | 'single'\n  subRows?: Person[]\n}\n\nconst range = (len: number) => {\n  const arr: number[] = []\n  for (let i = 0; i < len; i++) {\n    arr.push(i)\n  }\n  return arr\n}\n\nconst newPerson = (): Person => {\n  return {\n    firstName: faker.person.firstName(),\n    lastName: faker.person.lastName(),\n    age: faker.number.int(40),\n    visits: faker.number.int(1000),\n    progress: faker.number.int(100),\n    status: faker.helpers.shuffle<Person['status']>(['relationship', 'complicated', 'single'])[0]!,\n  }\n}\n\nexport function makeData(...lens: number[]) {\n  const makeDataLevel = (depth = 0): Person[] => {\n    const len = lens[depth]!\n    return range(len).map((d): Person => {\n      return {\n        ...newPerson(),\n        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,\n      }\n    })\n  }\n\n  return makeDataLevel()\n}\n"
      })
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

/***/ 51397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Select_Select)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Select.mjs + 4 modules
var Select = __webpack_require__(84521);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs + 1 modules
var FocusScope = __webpack_require__(49336);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(34704);
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(19060);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx + 3 modules
var Checkbox = __webpack_require__(8807);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/select/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"clearAll":"Clear all","selectAll":"Select all","selectedItems":"Selected items","selected":"selected"},"sv":{"clearAll":"Rensa alla","selectAll":"Välj alla","selectedItems":"Valda objekt","selected":"valda"}}');
;// ./packages/components/src/select/Select.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Select_module = ({"select":"select_Fsxg","triggerContainer":"triggerContainer_JBm2","trigger":"trigger_YoQG","medium":"medium_IF05","icon":"icon_roiA","selectValue":"selectValue_pNd2","placeholder":"placeholder_R_6a","selectValueTag":"selectValueTag_Bx1C","clearButton":"clearButton_p8du","truncate":"truncate_J6cE","popover":"popover_Bl6D","selectAll":"selectAll_YD8u","tagGroup":"tagGroup_t6GX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/select/SelectAll.tsx
var SelectAll=function SelectAll(){var state=react.useContext(Select/* SelectStateContext */.nT);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var handleChange=function handleChange(){return state==null?void 0:state.setValue(state!=null&&state.selectionManager.isSelectAll?null:Array.from(state.collection.getKeys()));};return/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{className:Select_module.selectAll,isIndeterminate:!(state!=null&&state.selectionManager.isSelectAll)&&!(state!=null&&state.selectionManager.isEmpty),isSelected:state==null?void 0:state.selectionManager.isSelectAll,onChange:handleChange,children:strings.format('selectAll')});};
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
;// ./packages/components/src/select/SelectValueTag.tsx
var SelectValueTag=function SelectValueTag(_ref){var isDisabled=_ref.isDisabled,selectedItems=_ref.selectedItems,selectedText=_ref.selectedText;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var formatString=function formatString(){if(selectedItems.length===1){return selectedText;}return selectedItems.length+" "+strings.format('selected');};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.selectValueTag,"data-disabled":isDisabled||undefined,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Select_module.truncate,children:formatString()}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectClearButton,{isDisabled:isDisabled})]});};var SelectClearButton=function SelectClearButton(_ref2){var isDisabled=_ref2.isDisabled;var state=react.useContext(Select/* SelectStateContext */.nT);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var focusManager=(0,FocusScope/* useFocusManager */.H8)();var handlePress=function handlePress(){focusManager==null||focusManager.focusFirst();state==null||state.setValue(null);};return/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{"aria-label":strings.format('clearAll'),className:Select_module.clearButton,onPress:handlePress,slot:null,isDisabled:isDisabled,children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{width:20,height:20})});};
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBox.tsx + 1 modules
var ListBox = __webpack_require__(22247);
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(28777);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TagGroup.mjs + 40 modules
var TagGroup = __webpack_require__(99628);
// EXTERNAL MODULE: ./packages/components/src/tag/Tag.tsx + 1 modules
var Tag = __webpack_require__(74658);
;// ./packages/components/src/select/SelectTags.tsx
var SelectTags=function SelectTags(_ref){var showTags=_ref.showTags,isDisabled=_ref.isDisabled;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var state=(0,react.useContext)(Select/* SelectStateContext */.nT);var handleRemove=function handleRemove(keys){state==null||state.selectionManager.toggleSelection(Array.from(keys)[0]);};if(!(state!=null&&state.selectedItems.length)||!showTags){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* TagGroup */.C,{"aria-label":strings.format('selectedItems'),className:Select_module.tagGroup,onRemove:handleRemove,selectionBehavior:"toggle",children:/*#__PURE__*/(0,jsx_runtime.jsx)(TagGroup/* TagList */.LY,{items:state.selectedItems,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* Tag */.v,{dismissable:true,id:item.key,isDisabled:isDisabled,textValue:item.textValue,children:item.textValue},item.key);}})});};
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var dist_clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
;// ./packages/components/src/select/SelectTrigger.tsx
var SelectTrigger=function SelectTrigger(_ref){var _clsx;var size=_ref.size;var state=(0,react.useContext)(Select/* SelectStateContext */.nT);return/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{className:(0,dist_clsx/* default */.A)((_clsx={},_clsx[Select_module.medium]=size==='medium',_clsx),Select_module.trigger),"data-invalid":!!(state!=null&&state.displayValidation.isInvalid)||undefined,children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",style:{display:'flex'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20})})});};
;// ./packages/components/src/select/Select.tsx
var _excluded=["children","description","errorMessage","errorPosition","items","label","popover","size"];function Select_Select(_ref){var children=_ref.children,description=_ref.description,errorMessage=_ref.errorMessage,_ref$errorPosition=_ref.errorPosition,errorPosition=_ref$errorPosition===void 0?'top':_ref$errorPosition,items=_ref.items,label=_ref.label,popover=_ref.popover,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(FocusScope/* FocusScope */.n1,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Select/* Select */.l6,Object.assign({},props,{className:(0,clsx/* default */.A)(props.className,Select_module.select),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapper/* LabelWrapper */.cR,{popover:popover,children:label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{"data-disabled":props.isDisabled||undefined,children:label})}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:description}),errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:errorMessage}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.triggerContainer,"data-disabled":props.isDisabled||undefined,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SelectTrigger,{size:size}),/*#__PURE__*/(0,jsx_runtime.jsx)(Select/* SelectValue */.yv,{className:Select_module.selectValue,"data-disabled":props.isDisabled||undefined,children:function children(renderProps){return renderProps.isPlaceholder||props.selectionMode!=='multiple'?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(Select_module.placeholder),children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:(0,clsx/* default */.A)(Select_module.truncate),children:renderProps.defaultChildren})}):/*#__PURE__*/(0,jsx_runtime.jsx)(SelectValueTag,Object.assign({},props,renderProps));}})]}),errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:errorMessage}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Popover/* Popover */.A,{className:Select_module.popover,offset:0,hideArrow:true,children:[props.isSelectableAll&&/*#__PURE__*/(0,jsx_runtime.jsx)(SelectAll,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(ListBox/* ListBox */.q,{escapeKeyBehavior:"none",items:items,children:children})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectTags,Object.assign({},props))]}))});}

/***/ }),

/***/ 61130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  JV: () => (/* reexport */ DefaultReactDatepickerExample),
  N_: () => (/* reexport */ MonthSelectExample),
  F0: () => (/* reexport */ PaginationExample)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-table/build/lib/index.mjs
var lib = __webpack_require__(1530);
// EXTERNAL MODULE: ./node_modules/@tanstack/table-core/build/lib/index.mjs
var build_lib = __webpack_require__(33888);
// EXTERNAL MODULE: ./node_modules/@faker-js/faker/dist/chunk-4X5ZEQ5K.js + 2 modules
var chunk_4X5ZEQ5K = __webpack_require__(71556);
;// ./apps/docs/src/components/examples/tanstack-table/makeData.ts
var range=function range(len){var arr=[];for(var i=0;i<len;i++){arr.push(i);}return arr;};var newPerson=function newPerson(){return{firstName:chunk_4X5ZEQ5K.a.person.firstName(),lastName:chunk_4X5ZEQ5K.a.person.lastName(),age:chunk_4X5ZEQ5K.a.number["int"](40),visits:chunk_4X5ZEQ5K.a.number["int"](1000),progress:chunk_4X5ZEQ5K.a.number["int"](100),status:chunk_4X5ZEQ5K.a.helpers.shuffle(['relationship','complicated','single'])[0]};};function makeData(){for(var _len=arguments.length,lens=new Array(_len),_key=0;_key<_len;_key++){lens[_key]=arguments[_key];}var _makeDataLevel=function makeDataLevel(depth){if(depth===void 0){depth=0;}var len=lens[depth];return range(len).map(function(d){return Object.assign({},newPerson(),{subRows:lens[depth+1]?_makeDataLevel(depth+1):undefined});});};return _makeDataLevel();}
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx + 3 modules
var TextField = __webpack_require__(13332);
// EXTERNAL MODULE: ./packages/components/src/select/Select.tsx + 6 modules
var Select = __webpack_require__(51397);
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBoxItem.tsx
var ListBoxItem = __webpack_require__(98437);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevrons-left.js
var chevrons_left = __webpack_require__(33079);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(60250);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(87677);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevrons-right.js
var chevrons_right = __webpack_require__(63286);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/examples/tanstack-table/TanstackTableExamples.tsx
var defaultColumns=[{accessorKey:'firstName',header:function header(){return'First Name';},cell:function cell(info){return info.getValue();},footer:function footer(props){return props.column.id;}},{accessorFn:function accessorFn(row){return row.lastName;},id:'lastName',cell:function cell(info){return info.getValue();},header:function header(){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Last Name"});},footer:function footer(props){return props.column.id;}},{accessorKey:'age',header:function header(){return'Age';},footer:function footer(props){return props.column.id;}},{accessorKey:'visits',header:function header(){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Visits"});},footer:function footer(props){return props.column.id;}},{accessorKey:'status',header:'Status',footer:function footer(props){return props.column.id;}},{accessorKey:'progress',header:'Profile Progress',footer:function footer(props){return props.column.id;}}];var PaginationExample=function PaginationExample(){var _React$useState=react.useState(function(){return makeData(1000);}),data=_React$useState[0];var _React$useState2=react.useState(function(){return[].concat(defaultColumns);}),columns=_React$useState2[0];// Create the table and pass your options
var table=(0,lib/* useReactTable */.N4)({data:data,columns:columns,getCoreRowModel:(0,build_lib/* getCoreRowModel */.HT)(),getPaginationRowModel:(0,build_lib/* getPaginationRowModel */.kW)()});// Manage your own state
var _React$useState3=react.useState(table.initialState),state=_React$useState3[0],setState=_React$useState3[1];// Override the state managers for the table to your own
table.setOptions(function(prev){return Object.assign({},prev,{state:state,onStateChange:setState// These are just table options, so if things
// need to change based on your state, you can
// derive them here
});});return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{className:"table",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{children:table.getHeaderGroups().map(function(headerGroup){return/*#__PURE__*/(0,jsx_runtime.jsx)("tr",{children:headerGroup.headers.map(function(header){return/*#__PURE__*/(0,jsx_runtime.jsx)("th",{colSpan:header.colSpan,children:header.isPlaceholder?null:(0,lib/* flexRender */.Kv)(header.column.columnDef.header,header.getContext())},header.id);})},headerGroup.id);})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{children:table.getRowModel().rows.map(function(row){return/*#__PURE__*/(0,jsx_runtime.jsx)("tr",{children:row.getVisibleCells().map(function(cell){return/*#__PURE__*/(0,jsx_runtime.jsx)("td",{children:(0,lib/* flexRender */.Kv)(cell.column.columnDef.cell,cell.getContext())},cell.id);})},row.id);})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tfoot",{children:table.getFooterGroups().map(function(footerGroup){return/*#__PURE__*/(0,jsx_runtime.jsx)("tr",{children:footerGroup.headers.map(function(header){return/*#__PURE__*/(0,jsx_runtime.jsx)("th",{colSpan:header.colSpan,children:header.isPlaceholder?null:(0,lib/* flexRender */.Kv)(header.column.columnDef.footer,header.getContext())},header.id);})},footerGroup.id);})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',gap:'0.5rem',margin:'1rem 0'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return table.setPageIndex(0);},isDisabled:!table.getCanPreviousPage(),children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevrons_left/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return table.previousPage();},isDisabled:!table.getCanPreviousPage(),children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_left/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return table.nextPage();},isDisabled:!table.getCanNextPage(),children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return table.setPageIndex(table.getPageCount()-1);},isDisabled:!table.getCanNextPage(),children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevrons_right/* default */.A,{})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',gap:'0.5rem',margin:'1rem 0'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{value:table.getState().pagination.pageIndex+1+" of "+table.getPageCount(),isReadOnly:true,label:"Page"}),/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"Go to page",type:"number",min:1,max:table.getPageCount(),value:(table.getState().pagination.pageIndex+1).toString(),onChange:function onChange(e){var page=e?Number(e)-1:0;table.setPageIndex(page);}}),/*#__PURE__*/(0,jsx_runtime.jsx)(Select/* Select */.l,{style:{minWidth:'200px'},label:"Rows per page",value:table.getState().pagination.pageSize.toString(),onChange:function onChange(key){return key!==null&&table.setPageSize(typeof key==='string'?parseInt(key):key);},items:[10,20,30,40,50].map(function(pageSize){return{id:pageSize.toString(),name:"Show "+pageSize};}),children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(ListBoxItem/* ListBoxItem */.n,Object.assign({},item,{children:item.name}));}})]})]});};
;// ./apps/docs/src/components/examples/tanstack-table/index.ts

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar-days.js
var calendar_days = __webpack_require__(93347);
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/index.es.js + 134 modules
var index_es = __webpack_require__(7171);
// EXTERNAL MODULE: ./node_modules/date-fns/locale/sv.js + 5 modules
var sv = __webpack_require__(96967);
;// ./apps/docs/src/components/examples/react-datepicker/ReactDatepickerExamples.tsx
(0,index_es/* registerLocale */.E)('sv',sv.sv);(0,index_es/* setDefaultLocale */.YC)('sv');var DefaultReactDatepickerExample=function DefaultReactDatepickerExample(){var _useState=(0,react.useState)(null),selectedDate=_useState[0],setSelectedDate=_useState[1];return/*#__PURE__*/(0,jsx_runtime.jsx)(index_es/* default */.Ay,{showIcon:true,selected:selectedDate,onChange:function onChange(date){return setSelectedDate(date);},formatWeekDay:function formatWeekDay(date){return date[0].toUpperCase();},toggleCalendarOnIconClick:true,icon:/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_days/* default */.A,{height:20}),showPopperArrow:false,dateFormat:"dd-MM-yyyy",placeholderText:"Select a date"});};var MonthSelectExample=function MonthSelectExample(){var _useState2=(0,react.useState)(null),selectedDate=_useState2[0],setSelectedDate=_useState2[1];return/*#__PURE__*/(0,jsx_runtime.jsx)(index_es/* default */.Ay,{showPopperArrow:false,selected:selectedDate,showIcon:true,toggleCalendarOnIconClick:true,icon:/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_days/* default */.A,{height:20}),showMonthYearPicker:true,onChange:function onChange(date){return setSelectedDate(date);},dateFormat:"MM-yyyy",placeholderText:"Select a date"});};
;// ./apps/docs/src/components/examples/react-datepicker/index.ts

;// ./apps/docs/src/components/examples/index.ts


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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"textField":"textField_IarX","bottomError":"bottomError_XU77","textArea":"textArea_M6yF","input":"input_g6A6","wrap":"wrap_ljmz","medium":"medium_jalb","passwordText":"passwordText_gBIs","passwordButton":"passwordButton_kacG"});

/***/ }),

/***/ 74658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ Tag),
  C: () => (/* binding */ TagGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/components/src/tag/Tag.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tag_module = ({"button":"button_Loby","success":"success_GxEq","warning":"warning_MXCT","info":"info_xrqn","important":"important_QbWH","tag":"tag_WAeO","tagText":"tagText_f_lx","dismissable":"dismissable_Tfml","tagList":"tagList_sxPC"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TagGroup.mjs + 40 modules
var dist_TagGroup = __webpack_require__(99628);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/tag/Tag.tsx
var _excluded=["children"],_excluded2=["children","dismissable","className","type"];var TagGroup=function TagGroup(_ref){var children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagGroup */.CR,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagList */.LY,{className:Tag_module.tagList,children:children})}));};var Tag=function Tag(_ref2){var children=_ref2.children,dismissable=_ref2.dismissable,className=_ref2.className,type=_ref2.type,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_TagGroup/* Tag */.vw,Object.assign({className:(0,clsx/* default */.A)(Tag_module.tag,dismissable&&Tag_module.dismissable,type==='success'&&Tag_module.success,type==='info'&&Tag_module.info,type==='important'&&Tag_module.important,type==='warning'&&Tag_module.warning,className)},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Tag_module.tagText,children:children}),dismissable&&/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",size:"medium",className:Tag_module.button,slot:"remove",children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20})})]}));};

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

/***/ 98437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ ListBoxItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98587);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79255);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1160);
/* harmony import */ var _ListBox_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
var _excluded=["children","className","hideSelectionIndicator"];var ListBoxItem=function ListBoxItem(_ref){var children=_ref.children,className=_ref.className,hideSelectionIndicator=_ref.hideSelectionIndicator,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .ListBoxItem */ .nh,Object.assign({className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_ListBox_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.listBoxItem,className),"data-show-selection":!hideSelectionIndicator||undefined},rest,{children:children}));};

/***/ })

}]);