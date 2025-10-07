"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8849],{

/***/ 418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TriangleAlert)
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
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("triangle-alert", __iconNode);


//# sourceMappingURL=triangle-alert.js.map


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

/***/ 8723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LoaderCircle)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("loader-circle", __iconNode);


//# sourceMappingURL=loader-circle.js.map


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
var _excluded=["children","className","offset"];function Popover_Popover(_ref){var children=_ref.children,className=_ref.className,_ref$offset=_ref.offset,offset=_ref$offset===void 0?4:_ref$offset,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Popover/* Popover */.A,Object.assign({},props,{offset:offset,className:(0,clsx/* default */.A)(Popover_module.popover,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Popover_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:8,height:8,viewBox:"0 0 8 8",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L4 4 L8 0"})})}),children]}));}

/***/ }),

/***/ 30601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r$: () => (/* binding */ GlobalToastRegion),
  ni: () => (/* binding */ toastQueue)
});

// UNUSED EXPORTS: Toast, ToastProvider, ToastRegion, useToastState

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/@react-aria/toast/dist/useToastRegion.mjs + 1 modules
var useToastRegion = __webpack_require__(96766);
// EXTERNAL MODULE: ./node_modules/@react-aria/toast/dist/useToast.mjs
var useToast = __webpack_require__(15568);
// EXTERNAL MODULE: ./node_modules/@react-stately/toast/dist/useToastState.mjs
var useToastState = __webpack_require__(8737);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
;// ./packages/components/src/toast/Toast.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Toast_module = ({"toastRegion":"toastRegion_KbVp","toast":"toast_gxso","success":"success_KyPa","info":"info_RCx7","important":"important_YYqr","warning":"warning_Rmak","icon":"icon_ZuqY","toastContent":"toastContent_LoSC","toastMessage":"toastMessage_HVa6","slideInTop":"slideInTop_NcfI","slideInEnd":"slideInEnd_Alfu","slideOutTop":"slideOutTop_Hd_W","slideOutEnd":"slideOutEnd_O0VY"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/common/icon-map.ts
var icon_map = __webpack_require__(7344);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/toast/Toast.tsx
'use client';var _excluded=(/* unused pure expression or super */ null && (["children"])),_excluded2=["state","className"],_excluded3=["state","className"];var toastStateProps={wrapUpdate:function wrapUpdate(fn){if('startViewTransition'in document){document.startViewTransition(function(){(0,react_dom.flushSync)(fn);});}else{fn();}},maxVisibleToasts:5};/**
 * Temporary implementation of https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/toast/src/useToastState.ts#L59
 * TODO: Erase this as soon as react-stately is released
 */function Toast_useToastState(props){if(props===void 0){props={};}var _props=props,_props$maxVisibleToas=_props.maxVisibleToasts,maxVisibleToasts=_props$maxVisibleToas===void 0?1:_props$maxVisibleToas,wrapUpdate=_props.wrapUpdate;var queue=useMemo(function(){return new ToastQueue({maxVisibleToasts:maxVisibleToasts,wrapUpdate:wrapUpdate});},[maxVisibleToasts,wrapUpdate]);return useToastQueue(queue);}var toastQueue=new useToastState/* ToastQueue */.Vv(toastStateProps);var GlobalToastRegion=function GlobalToastRegion(props){var state=(0,useToastState/* useToastQueue */.oS)(toastQueue);return state.visibleToasts.length>0?/*#__PURE__*/(0,react_dom.createPortal)(/*#__PURE__*/(0,jsx_runtime.jsx)(ToastRegion,Object.assign({},props,{state:state})),document.body):null;};var ToastProvider=function ToastProvider(_ref){var children=_ref.children,props=_objectWithoutPropertiesLoose(_ref,_excluded);var state=Toast_useToastState(toastStateProps);return/*#__PURE__*/_jsxs(_Fragment,{children:[typeof children==='function'?children(state):children,state.visibleToasts.length>0&&/*#__PURE__*/_jsx(ToastRegion,Object.assign({},props,{state:state}))]});};function ToastRegion(_ref2){var state=_ref2.state,className=_ref2.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);var ref=react.useRef(null);var _useToastRegion=(0,useToastRegion/* useToastRegion */.J)(props,state,ref),regionProps=_useToastRegion.regionProps;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},regionProps,{ref:ref,className:(0,clsx/* default */.A)(Toast_module.toastRegion,className),children:state.visibleToasts.map(function(toast){return/*#__PURE__*/(0,jsx_runtime.jsx)(Toast,{toast:toast,state:state},toast.key);})}));}function Toast(_ref3){var state=_ref3.state,className=_ref3.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref3,_excluded3);var ref=react.useRef(null);var _useToast=(0,useToast/* useToast */.d)(props,state,ref),toastProps=_useToast.toastProps,contentProps=_useToast.contentProps,titleProps=_useToast.titleProps,closeButtonProps=_useToast.closeButtonProps;var Icon=icon_map/* iconMap */.K[props.toast.content.type];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({},toastProps,{ref:ref,className:(0,clsx/* default */.A)(Toast_module.toast,Toast_module[props.toast.content.type],className),style:{viewTransitionName:props.toast.key},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({},contentProps,{className:(0,clsx/* default */.A)(Toast_module.toastContent,contentProps.className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{className:Toast_module.icon,size:20,"aria-hidden":true}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",Object.assign({className:Toast_module.toastMessage},titleProps,{children:props.toast.content.message})),props.toast.content.children]})]})),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,Object.assign({variant:"icon"},closeButtonProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})}))]}));}

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

/***/ 37195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ Spinner)
});

;// ./packages/components/src/spinner/Spinner.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Spinner_module = ({"container":"container_ytPE","spinner":"spinner_eR4D","rotating":"rotating_m95R","dark":"dark_YbwO"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(8723);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/spinner/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"loadingPleaseWait":"Loading, please wait..."},"sv":{"loadingPleaseWait":"Laddar, vänligen vänta..."}}');
// EXTERNAL MODULE: ./node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(87979);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/spinner/Spinner.tsx
var Spinner=function Spinner(_ref){var small=_ref.small,_ref$isOnColor=_ref.isOnColor,isOnColor=_ref$isOnColor===void 0?false:_ref$isOnColor,className=_ref.className;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(Spinner_module.container,className),role:"status",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(loader_circle/* default */.A,{className:(0,clsx/* default */.A)(Spinner_module.spinner,isOnColor&&Spinner_module.dark),size:small?16:32,strokeWidth:small?2:3,absoluteStrokeWidth:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:strings.format('loadingPleaseWait')})]});};

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

/***/ 45773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Check)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("check", __iconNode);


//# sourceMappingURL=check.js.map


/***/ }),

/***/ 58857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Skeleton)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/components/src/skeleton/Skeleton.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Skeleton_module = ({"skeleton":"skeleton_r1UF","circle":"circle_V2WO","wave":"wave_h9Fk","onLayer01":"onLayer01_cFCw"});
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/skeleton/Skeleton.tsx
var _excluded=["variant","width","height","isAnimated","className","style","isOnLayer01"];var Skeleton=function Skeleton(_ref){var _ref$variant=_ref.variant,variant=_ref$variant===void 0?'rectangle':_ref$variant,width=_ref.width,height=_ref.height,_ref$isAnimated=_ref.isAnimated,isAnimated=_ref$isAnimated===void 0?true:_ref$isAnimated,className=_ref.className,style=_ref.style,isOnLayer01=_ref.isOnLayer01,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);if(variant==='circle'&&height!==undefined){console.warn('Height is not allowed when using circle, control size with width');}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(Skeleton_module.skeleton,Skeleton_module[variant],isAnimated&&Skeleton_module.wave,isOnLayer01&&Skeleton_module.onLayer01,className),style:Object.assign({width:width,height:height},style)},rest));};

/***/ }),

/***/ 59155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Flag)
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
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
];
const Flag = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("flag", __iconNode);


//# sourceMappingURL=flag.js.map


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

/***/ 89728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_page_loading_mdx_4b1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-page-loading-mdx-4b1.json
const site_docs_design_patterns_page_loading_mdx_4b1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/page-loading","title":"Laddningsindikatorer","description":"Laddningsindikatorer är visuella platshållare för komponenter eller information som visas medan de laddar. Detta mönster beskriver hur och när vi använder olika laddningsindikatorer.","source":"@site/docs/design-patterns/page-loading.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/page-loading","permalink":"/pr-preview/pr-868/design-patterns/page-loading","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regenerator.js
var regenerator = __webpack_require__(22007);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(10467);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/toast/Toast.tsx + 1 modules
var Toast = __webpack_require__(30601);
// EXTERNAL MODULE: ./packages/components/src/grid/Grid.tsx
var Grid = __webpack_require__(74351);
// EXTERNAL MODULE: ./packages/components/src/grid/GridItem.tsx
var GridItem = __webpack_require__(93574);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx + 3 modules
var TextField = __webpack_require__(13332);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/spinner/Spinner.tsx + 2 modules
var Spinner = __webpack_require__(37195);
// EXTERNAL MODULE: ./packages/components/src/skeleton/Skeleton.tsx + 1 modules
var Skeleton = __webpack_require__(58857);
;// ./apps/docs/src/components/examples/loading/LoadingExamples.tsx
var ButtonLoadingExample=function ButtonLoadingExample(){var _useState=(0,react.useState)(false),isSubmitting=_useState[0],setSubmitting=_useState[1];function handleSubmit(){return _handleSubmit.apply(this,arguments);}function _handleSubmit(){_handleSubmit=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee(){return (0,regenerator/* default */.A)().w(function(_context){while(1)switch(_context.n){case 0:setSubmitting(true);// Simulate a slow API call
_context.n=1;return new Promise(function(resolve){return setTimeout(resolve,2000);});case 1:setSubmitting(false);// Show success toast
Toast/* toastQueue */.ni.add({message:'Formuläret skickades!',type:'success'},{timeout:5000});case 2:return _context.a(2);}},_callee);}));return _handleSubmit.apply(this,arguments);}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.x,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Toast/* GlobalToastRegion */.r$,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem/* GridItem */.E,{size:12,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"Ange ditt namn",description:"B\xE5de f\xF6r och efternamn"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem/* GridItem */.E,{size:{xs:12,sm:12,md:2,lg:2},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:handleSubmit,children:isSubmitting?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Spinner/* Spinner */.y,{small:true,isOnColor:true}),"Skickar..."]}):'Skicka'})})]})});};var InlineSpinnerExample=function InlineSpinnerExample(){var _useState2=(0,react.useState)(false),isChecking=_useState2[0],setIsChecking=_useState2[1];function handleBlur(){return _handleBlur.apply(this,arguments);}function _handleBlur(){_handleBlur=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee2(){return (0,regenerator/* default */.A)().w(function(_context2){while(1)switch(_context2.n){case 0:setIsChecking(true);// Simulate an async database check
_context2.n=1;return new Promise(function(resolve){return setTimeout(resolve,2500);});case 1:setIsChecking(false);case 2:return _context2.a(2);}},_callee2);}));return _handleBlur.apply(this,arguments);}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.x,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem/* GridItem */.E,{size:12,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"field-and-spinner",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"Ange ditt kortnummer",description:"Ditt kortnummer kontrolleras mot databasen. Det kan ta en liten stund",onBlur:handleBlur}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"spinner-box",children:isChecking&&/*#__PURE__*/(0,jsx_runtime.jsx)(Spinner/* Spinner */.y,{small:true})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem/* GridItem */.E,{size:"auto",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{isDisabled:isChecking,children:isChecking?'Kontrollerar...':'Skicka'})})]})});};var SkeletonExample=function SkeletonExample(){var _useState3=(0,react.useState)(true),isLoading=_useState3[0],setIsLoading=_useState3[1];(0,react.useEffect)(function(){// Simulate data fetch delay
var timer=setTimeout(function(){setIsLoading(false);},2500);return function(){return clearTimeout(timer);};},[]);var handleReload=function handleReload(){setIsLoading(true);setTimeout(function(){setIsLoading(false);},2000);};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.x,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem/* GridItem */.E,{size:12,children:isLoading?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"skeleton-container",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Skeleton/* Skeleton */.E,{width:"20%",height:"16px",isAnimated:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(Skeleton/* Skeleton */.E,{width:"100%",height:"48px",isAnimated:true})]}):/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"Ange ditt namn"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem/* GridItem */.E,{size:3,children:isLoading?/*#__PURE__*/(0,jsx_runtime.jsx)(Skeleton/* Skeleton */.E,{width:"100%",height:"48px",isAnimated:true}):/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:handleReload,children:"Ladda om"})})]})});};var FullScreenLoadingExample=function FullScreenLoadingExample(){var _useState4=(0,react.useState)(false),isLoading=_useState4[0],setIsLoading=_useState4[1];var _useState5=(0,react.useState)(false),showForm=_useState5[0],setShowForm=_useState5[1];var handleSubmit=function handleSubmit(){setIsLoading(true);// Simulate async request
setTimeout(function(){setIsLoading(false);},2500);};var loadForm=function loadForm(){setIsLoading(true);setShowForm(true);// Simulate async request
setTimeout(function(){setIsLoading(false);},2500);};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"card",children:[!showForm&&/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:loadForm,children:"Ladda formul\xE4r"}),showForm&&!isLoading&&/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.x,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem/* GridItem */.E,{size:12,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"F\xF6rnamn"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem/* GridItem */.E,{size:12,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"Efternamn"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem/* GridItem */.E,{size:12,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:handleSubmit,children:"Ladda om"})})]}),isLoading&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"overlay",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"overlay-content",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Spinner/* Spinner */.y,{isOnColor:true})})})]});};
;// ./apps/docs/docs/design-patterns/page-loading.mdx


const frontMatter = {
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Laddningsindikatorer';

const assets = {

};





const toc = [{
  "value": "Snabbreferens",
  "id": "snabbreferens",
  "level": 2
}, {
  "value": "Skeleton",
  "id": "skeleton",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 3
}, {
  "value": "Helskärmsspinner",
  "id": "helskärmsspinner",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer-1",
  "level": 3
}, {
  "value": "Spinner i Button",
  "id": "spinner-i-button",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer-2",
  "level": 3
}, {
  "value": "Inline loading",
  "id": "inline-loading",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer-3",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "laddningsindikatorer",
        children: "Laddningsindikatorer"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laddningsindikatorer är visuella platshållare för komponenter eller information som visas medan de laddar. Detta mönster beskriver hur och när vi använder olika laddningsindikatorer."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Vi visar inga laddningsindikatorer om det laddar mindre än 1 sekund eftersom det upplevs som att gränssnittet flimrar"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "snabbreferens",
      children: "Snabbreferens"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laddar sidan för första gången: Skeleton eller Helskärmsspinner beroende på om du vet hur det kommer se ut eller inte"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laddar data i tex en tabell: Skeleton"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laddar det en kort stund efter ett knapptryck: Spinner i button."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Laddar det för att ett fält behöver göra en kontroll mot en databas: Inline spinner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "skeleton",
      children: "Skeleton"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/components/skeleton",
        children: "Skeleton"
      }), " används när vi vet hur layouten eller komponenten kommer att se ut när det har laddat klart. Det ger användaren en bra bild av hur gränssnittet kommer se ut när det har laddat klart och är den rekommenderade laddningsindikatorn när en komponent, en del av gränssnittet eller hela gränssnittet laddas första gången."]
    }), "\n", (0,jsx_runtime.jsx)(SkeletonExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Anpassa storleken/ formen på ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/components/skeleton",
          children: "Skeleton"
        }), " för att efterlikna de komponenter som kommer finnas i gränssnittet"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Undvik när:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vi inte vet hur innehållet ser ut. Använd fullskärmsspinner istället."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "helskärmsspinner",
      children: "Helskärmsspinner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Används när hela sidan eller appen är otillgänglig tills det har laddat klart."
    }), "\n", (0,jsx_runtime.jsx)(FullScreenLoadingExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "riktlinjer-1",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Visa en Spinner centrerat på skärmen och tona ner bakgrunden."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Undvik när:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vi vet hur gränssnittet kommer att se ut. Använd skeleton istället"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Endast en del av sidan laddas. Använd en spinner eller Skeleton på en komponenten/delen istället"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "spinner-i-button",
      children: "Spinner i Button"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Används när användaren via knappen triggar en process som kräver att systemet laddar en kortare tid, tex när ett formulär skickas in."
    }), "\n", (0,jsx_runtime.jsx)(ButtonLoadingExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "riktlinjer-2",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Visa ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/components/spinner",
          children: "Spinner"
        }), " i knappen, till vänster om etiketten."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ändra texten i knappen till presensformen av verbet (skicka -> skickar)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Låt knappen vara ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enabled"
        }), " men blockera interaktion"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Meddela användaren när systemet laddat klart, tex med en toast"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inline-loading",
      children: "Inline loading"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Används när det är ett fält som laddar, tex vid kontroll mot databas. Optimalt ska detta inte ta så lång tid att användaren behöver vänta men i de fall där anropen tar lång tid kan en spinner läggas bredvid fältet som laddar. I nedan exempel syns en spinner så fort du lämnar fältet."
    }), "\n", (0,jsx_runtime.jsx)(InlineSpinnerExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "riktlinjer-3",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Visa en ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/components/spinner",
          children: "Spinner"
        }), " bredvid fältet under tiden som det laddar"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Undvik när:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kontrollen/valideringen sker post submit. Använd istället en fullskärmsspinner"
      }), "\n"]
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



/***/ })

}]);