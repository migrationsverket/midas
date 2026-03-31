"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1508],{

/***/ 418
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TriangleAlert)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
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
/* harmony default export */ const Text_module = ({"body":"body_Vxmv","body-small":"body-small_JwBE","description":"description_XYgX","description-small":"description-small_tno4","bold":"bold_YLmd","italic":"italic_CnUx"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","size","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var _clsx;var children=_ref.children,className=_ref.className,size=_ref.size,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var getClassName=function getClassName(){var isDescription=rest.slot==='description';if(isDescription){return size==='small'?Text_module['description-small']:Text_module['description'];}return size==='small'?Text_module['body-small']:Text_module['body'];};var textProps=Object.assign({className:(0,clsx/* default */.A)(getClassName(),(_clsx={},_clsx[Text_module.bold]=['b','strong'].includes(elementType),_clsx[Text_module.italic]=['i','em'].includes(elementType),_clsx),className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

/***/ },

/***/ 28777
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover_Popover)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(45745);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
;// ./packages/components/src/popover/Popover.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Popover_module = ({"popover":"popover_qr_p","arrow":"arrow_bhQK"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/popover/Popover.tsx
var _excluded=["className","hideArrow","offset"];/**
 * @deprecated since v17.0.0 please use `PopoverProps` instead
 */var Popover_Popover=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,Popover/* PopoverContext */.n),mergedProps=_useContextProps[0],mergedRef=_useContextProps[1];var className=mergedProps.className,_mergedProps$hideArro=mergedProps.hideArrow,hideArrow=_mergedProps$hideArro===void 0?false:_mergedProps$hideArro,_mergedProps$offset=mergedProps.offset,offset=_mergedProps$offset===void 0?4:_mergedProps$offset,rest=(0,objectWithoutPropertiesLoose/* default */.A)(mergedProps,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,Object.assign({className:(0,clsx/* default */.A)(Popover_module.popover,className),offset:offset,ref:mergedRef},rest,{children:(0,utils/* composeRenderProps */.HW)(mergedProps.children,function(children){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!hideArrow&&/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Popover_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{height:16,viewBox:"0 0 16 16",width:16,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L8 8 L16 0"})})}),children]});})}));});

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

/***/ 37195
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ Spinner)
});

;// ./packages/components/src/spinner/Spinner.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Spinner_module = ({"container":"container_ytPE","spinner":"spinner_eR4D","rotating":"rotating_m95R","large":"large_hgjo"});
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
var Spinner=function Spinner(_ref){var small=_ref.small,color=_ref.color,className=_ref.className;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(Spinner_module.container,className),role:"status",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(loader_circle/* default */.A,{className:(0,clsx/* default */.A)(Spinner_module.spinner,!small&&Spinner_module.large),size:small?20:96,strokeWidth:small?2:8,absoluteStrokeWidth:true,color:color}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:strings.format('loadingPleaseWait')})]});};

/***/ },

/***/ 38601
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
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"hide":"Hide","show":"Show","showPassword":"Show password"},"sv":{"hide":"Dölj","show":"Visa","showPassword":"Visa lösenord"}}');
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/textfield/PasswordToggle.tsx
var PasswordToggle=function PasswordToggle(_ref){var showPassword=_ref.showPassword,onToggle=_ref.onToggle;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{"aria-label":strings.format('showPassword'),"aria-pressed":showPassword,variant:"tertiary",onPress:onToggle,className:TextField_module/* default */.A.passwordButton,children:showPassword?strings.format('hide'):strings.format('show')});};
;// ./packages/components/src/textfield/Input.tsx
var _excluded=["skipContext"];var Input_Input=/*#__PURE__*/(0,react.forwardRef)(function(_ref,localRef){var _ref$skipContext=_ref.skipContext,skipContext=_ref$skipContext===void 0?false:_ref$skipContext,localProps=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _useContextProps=(0,utils/* useContextProps */.JT)(localProps,localRef,Input/* InputContext */.E),contextProps=_useContextProps[0],contextRef=_useContextProps[1];var ref=skipContext?localRef:contextRef;var props=skipContext?localProps:contextProps;var isPassword=props.type==='password';var _useState=(0,react.useState)(false),showPassword=_useState[0],setShowPassword=_useState[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module/* default */.A.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,Object.assign({},props,{ref:ref,type:isPassword&&showPassword?'text':props.type,className:(0,clsx/* default */.A)(TextField_module/* default */.A.input,props.className)})),isPassword&&/*#__PURE__*/(0,jsx_runtime.jsx)(PasswordToggle,{showPassword:showPassword,onToggle:function onToggle(){return setShowPassword(function(prev){return!prev;});}})]});});Input_Input.displayName='Input';
;// ./packages/components/src/textfield/TextField.tsx
'use client';var TextField_excluded=["className","list","type","min","max","form"];var TextField=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var className=_ref.className,list=_ref.list,type=_ref.type,min=_ref.min,max=_ref.max,form=_ref.form,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,TextField_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(TextFieldBase/* TextFieldBase */.J,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_Input,{className:(0,clsx/* default */.A)(className),form:form,list:list,min:min,max:max,ref:ref,type:type,skipContext:true})}));});TextField.displayName='TextField';

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

/***/ 45773
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Check)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("check", __iconNode);


//# sourceMappingURL=check.js.map


/***/ },

/***/ 48697
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ X)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("x", __iconNode);


//# sourceMappingURL=x.js.map


/***/ },

/***/ 49208
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_read_only_mdx_e53_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-read-only-mdx-e53.json
const site_docs_design_patterns_read_only_mdx_e53_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/read-only","title":"Read-only","description":"Normalfallet i ett gränssnitt är att alla kontroller, till exempel textfält eller kryssrutor, går att interagera med. Om det uppstår ett läge där en specifik kontroll och dess information inte är relevant är huvudregeln att inte visa kontrollen för användaren. Men, i de fall där informationen i kontrollen är relevant men användaren inte ska kunna interagera med kontrollen kan vi sätta komponenterna i read-only-läge. I detta läge har kontrollen ett annorlunda utseende för att indikera att den inte går att interagera med.","source":"@site/docs/design-patterns/read-only.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/read-only","permalink":"/pr-preview/pr-1203/design-patterns/read-only","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sideBar","previous":{"title":"Laddningsindikatorer","permalink":"/pr-preview/pr-1203/design-patterns/page-loading"},"next":{"title":"Sökning och filtrering","permalink":"/pr-preview/pr-1203/design-patterns/search-and-filter"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/components/src/info-banner/InfoBanner.tsx + 2 modules
var InfoBanner = __webpack_require__(59560);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx + 3 modules
var textfield_TextField = __webpack_require__(38601);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./apps/docs/src/components/examples/read-only/ReadOnlyExamples.tsx
var AccessLevelExample=function AccessLevelExample(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"card",style:{gap:'16px'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(InfoBanner/* InfoBanner */.z,{type:"info",message:"Du har endast beh\xF6righet att redigera vissa f\xE4lt. Kontakta din administrat\xF6r om f\xF6r beh\xF6righetsfr\xE5gor."}),/*#__PURE__*/(0,jsx_runtime.jsx)(textfield_TextField/* TextField */.A,{label:"Kortnummer",value:"12345678",isReadOnly:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(textfield_TextField/* TextField */.A,{label:"Anv\xE4ndarnamn"})]});};var EditFormExample=function EditFormExample(){var _useState=useState(true),isReadOnly=_useState[0],setReadonly=_useState[1];var _useState2=useState({kortnummer:'12345678',anvandarnamn:'Midas'}),formData=_useState2[0],setFormData=_useState2[1];var handleChange=function handleChange(field,value){setFormData(function(prev){var _Object$assign;return Object.assign({},prev,(_Object$assign={},_Object$assign[field]=value,_Object$assign));});};var handleToggle=function handleToggle(){setReadonly(function(prev){return!prev;});};return/*#__PURE__*/_jsxs("div",{className:"card",style:{gap:'16px'},children:[/*#__PURE__*/_jsx(TextField,{label:"Kortnummer",value:formData.kortnummer,onChange:function onChange(value){return handleChange('kortnummer',value);},isReadOnly:isReadOnly}),/*#__PURE__*/_jsx(TextField,{label:"Anv\xE4ndarnamn",value:formData.anvandarnamn,onChange:function onChange(value){return handleChange('anvandarnamn',value);},isReadOnly:isReadOnly}),/*#__PURE__*/_jsx(Button,{onPress:handleToggle,children:isReadOnly?'Redigera':'Spara'})]});};
;// ./apps/docs/docs/design-patterns/read-only.mdx


const frontMatter = {};
const contentTitle = 'Read-only';

const assets = {

};




const toc = [{
  "value": "När använder vi read-only",
  "id": "när-använder-vi-read-only",
  "level": 2
}, {
  "value": "När använder vi inte read-only",
  "id": "när-använder-vi-inte-read-only",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "read-only",
        children: "Read-only"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Normalfallet i ett gränssnitt är att alla kontroller, till exempel textfält eller kryssrutor, går att interagera med. Om det uppstår ett läge där en specifik kontroll och dess information inte är relevant är huvudregeln att inte visa kontrollen för användaren. Men, i de fall där informationen i kontrollen är relevant men användaren inte ska kunna interagera med kontrollen kan vi sätta komponenterna i read-only-läge. I detta läge har kontrollen ett annorlunda utseende för att indikera att den inte går att interagera med."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Read-only finns till ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/calendar",
        children: "Calendar"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/checkbox",
        children: "Checkbox"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/combobox",
        children: "Combobox"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/datefield",
        children: "DateField"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/date-picker",
        children: "DatePicker"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/radio",
        children: "Radio"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/textarea",
        children: "TextArea"
      }), " och ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/textfield",
        children: "Textfield"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Read-only finns inte till Select",
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Vi har bara read-only till de komponenter där React Aria har property isReadOnly. Deras Select, som vår Select bygger på, har inte det i dagsläget. Om du har en Select som du vill göra read-only rekommenderar vi att använda Textfield och fylla den med informationen från Select."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "när-använder-vi-read-only",
      children: "När använder vi read-only"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typexemplet på när det är lämpligt att använda read-only är när en användare har begränsad behörighet. Den kan inte ändra vissa kontroller men behöver kunna se informationen i fälten. Vi bör alltid komplettera med information till användaren om varför vissa av kontrollerna är read-only."
    }), "\n", (0,jsx_runtime.jsx)(AccessLevelExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "när-använder-vi-inte-read-only",
      children: "När använder vi inte read-only"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi använder inte read-only som ett alternativ till Disabled eller vice versa. Disabled och read-only har två helt olika syften."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi använder inte read-only för att presentera information. När vi ska presentera information eller data så är huvudregeln att vi visar det som text."
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

/***/ 54031
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65014);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5933);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1160);
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37195);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86707);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74848);
'use client';var _excluded=["className","fullwidth","icon","iconPlacement","iconSize","isPending","size","variant"];/**
 * Button to perform various actions.
 *
 * @interface ButtonProps
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 *//**
 * @deprecated since v17.0.0 please use `ButtonProps` instead
 */var Button=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(props,ref){var _useContextProps=(0,react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .useContextProps */ .JT)(props,ref,react_aria_components__WEBPACK_IMPORTED_MODULE_2__/* .ButtonContext */ .k),mergedProps=_useContextProps[0],mergedRef=_useContextProps[1];var className=mergedProps.className,fullwidth=mergedProps.fullwidth,IconComponent=mergedProps.icon,iconPlacement=mergedProps.iconPlacement,iconSize=mergedProps.iconSize,isPending=mergedProps.isPending,_mergedProps$size=mergedProps.size,size=_mergedProps$size===void 0?'large':_mergedProps$size,_mergedProps$variant=mergedProps.variant,variant=_mergedProps$variant===void 0?'primary':_mergedProps$variant,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(mergedProps,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$,Object.assign({className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.button,variant==='primary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.primary,variant==='secondary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.secondary,variant==='tertiary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.tertiary,variant==='danger'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.danger,variant==='icon'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.iconBtn,fullwidth&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.fullwidth,size==='medium'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.medium,iconPlacement==='right'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.iconRight,className),ref:mergedRef},rest,{children:(0,react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .composeRenderProps */ .HW)(mergedProps.children,function(children){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[IconComponent&&!isPending&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(IconComponent,{"aria-hidden":true,size:iconSize!=null?iconSize:20}),isPending&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_spinner__WEBPACK_IMPORTED_MODULE_5__/* .Spinner */ .y,{small:true}),children]});})}));});Button.displayName='Button';

/***/ },

/***/ 59155
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Flag)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
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


/***/ },

/***/ 59560
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ InfoBanner)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
;// ./packages/components/src/info-banner/InfoBanner.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const InfoBanner_module = ({"infoBanner":"infoBanner_SGaB","success":"success_tp2_","info":"info_M4dU","important":"important_LJBl","warning":"warning_El6H","content":"content_DhUR","heading":"heading_iaBZ","text":"text_FCS8","icon":"icon_F71c","dismissable":"dismissable_tG9p"});
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/info-banner/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"close":"Close"},"sv":{"close":"Stäng"}}');
// EXTERNAL MODULE: ./packages/components/src/common/FeedbackStatusIcon.tsx + 1 modules
var FeedbackStatusIcon = __webpack_require__(74890);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/useControlledState.mjs
var useControlledState = __webpack_require__(8356);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/info-banner/InfoBanner.tsx
var _excluded=["title","message","type","children","isDismissable","defaultOpen","isOpen","onOpenChange"];/**
 * Displays a static message as an inline banner
 */var InfoBanner=function InfoBanner(_ref){var title=_ref.title,message=_ref.message,type=_ref.type,children=_ref.children,_ref$isDismissable=_ref.isDismissable,isDismissable=_ref$isDismissable===void 0?false:_ref$isDismissable,_ref$defaultOpen=_ref.defaultOpen,defaultOpen=_ref$defaultOpen===void 0?true:_ref$defaultOpen,controlledIsOpen=_ref.isOpen,onOpenChange=_ref.onOpenChange,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _useControlledState=(0,useControlledState/* useControlledState */.P)(controlledIsOpen,defaultOpen,onOpenChange),isOpen=_useControlledState[0],setIsOpen=_useControlledState[1];var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var handleClose=function handleClose(){setIsOpen(false);};if(!isOpen){return null;}return/*#__PURE__*/(0,jsx_runtime.jsxs)("aside",Object.assign({},rest,{className:(0,clsx/* default */.A)(InfoBanner_module.infoBanner,InfoBanner_module[type],rest.className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FeedbackStatusIcon/* FeedbackStatusIcon */.$,{"aria-hidden":true,className:InfoBanner_module.icon,status:type}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:InfoBanner_module.content,children:[title&&/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{className:InfoBanner_module.heading,children:title}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:InfoBanner_module.text,children:[message,children]})]}),isDismissable&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:InfoBanner_module.dismissable,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon","aria-label":strings.format('close'),onPress:handleClose,children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20})})})]}));};

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
/** Display an info-icon with popover next to the label to further explain what the user should enter in the field */var InfoPopover=function InfoPopover(_ref){var children=_ref.children,ariaLabel=_ref['aria-label'];var ctx=(0,react.useContext)(LabelWrapperContext);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",size:"medium",className:LabelWrapper_module.labelPopoverTrigger,"aria-label":ariaLabel||strings.format('moreInfo'),id:ctx==null?void 0:ctx.popoverId,children:/*#__PURE__*/(0,jsx_runtime.jsx)(info/* default */.A,{size:20})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:children})]});};
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

/***/ 86707
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"button":"button_RcXK","secondary":"secondary_h5I_","tertiary":"tertiary_xq7E","iconBtn":"iconBtn__8qK","medium":"medium_uqO9","danger":"danger_iFp6","iconRight":"iconRight_iW1e","fullwidth":"fullwidth_WWNT","primary":"primary_JNNk"});

/***/ },

/***/ 88413
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oe: () => (/* binding */ useLocalizedStringFormatter)
/* harmony export */ });
/* unused harmony export useLocalizedStringDictionary */
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92122);
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57612);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39892);
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
 */var DEFAULT_LANGUAGE='sv';var cache=new WeakMap();function getCachedDictionary(strings){var dictionary=cache.get(strings);if(!dictionary){dictionary=new _internationalized_string__WEBPACK_IMPORTED_MODULE_0__/* .LocalizedStringDictionary */ .B(strings,DEFAULT_LANGUAGE);cache.set(strings,dictionary);}return dictionary;}/**
 * Returns a cached LocalizedStringDictionary for the given strings.
 */function useLocalizedStringDictionary(strings,packageName){return packageName&&_internationalized_string__WEBPACK_IMPORTED_MODULE_0__/* .LocalizedStringDictionary */ .B.getGlobalDictionaryForPackage(packageName)||getCachedDictionary(strings);}/**
 * Provides localized string formatting for the current locale. Supports interpolating variables,
 * selecting the correct pluralization, and formatting numbers. Automatically updates when the locale changes.
 * @param strings - A mapping of languages to localized strings by key.
 */function useLocalizedStringFormatter(strings,packageName){if(!strings||typeof strings!=='object'||!(DEFAULT_LANGUAGE in strings)){throw new Error("useLocalizedStringFormatter: Default language \""+DEFAULT_LANGUAGE+"\" must be defined in dictionary.");}var _useLocale=(0,react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .useLocale */ .Y)(),locale=_useLocale.locale;var dictionary=useLocalizedStringDictionary(strings,packageName);return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function(){return new _internationalized_string__WEBPACK_IMPORTED_MODULE_1__/* .LocalizedStringFormatter */ .J(locale,dictionary);},[dictionary,locale]);}

/***/ }

}]);