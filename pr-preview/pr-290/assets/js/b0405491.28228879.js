"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[7376],{

/***/ 76286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_17_mdx_b04_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_17_mdx_b04_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94324);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28453);
/* harmony import */ var _site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71372);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69240);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66712);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86559);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78815);


const frontMatter = {
	title: 'Release 17',
	description: '.',
	slug: 'release-17',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [],
};

/*truncate*/




const toc = [{
  "value": "Räknare till Textfield",
  "id": "räknare-till-textfield",
  "level": 2
}, {
  "value": "Toast",
  "id": "toast",
  "level": 2
}, {
  "value": "Mindre justeringar",
  "id": "mindre-justeringar",
  "level": 2
}, {
  "value": "Uppdaterade komponenter",
  "id": "uppdaterade-komponenter",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Nedan är en sammanfattning av nyheterna i release 17."
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "räknare-till-textfield",
      children: "Räknare till Textfield"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Textfield har fått en räknare som kan slås på via prop ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "showCounter"
      }), ". Antalet tecken som ska matas in i fältet kan styras med ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "maxCharacters"
      }), " precis som hos TextArea."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      scope: {
        TextField: _midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .TextField */ .A_
      },
      children: `<TextField
  label="Skriv så många tecken du vill"
  description="Antalet tecken du skrivit ser du på räknaren till höger"
  showCounter
/>`
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "toast",
      children: "Toast"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "För att Toast ska vara lättare för användarna att se så har vi ändrat så att de dyker upp högst upp till höger på stora skärmar och högst upp i mitten på mindre skärmar. Vi har även gjort små justeringar i utseendet."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_5__/* .GlobalToastRegion */ .r$, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$, {
      onPress: () => _midas_ds_components__WEBPACK_IMPORTED_MODULE_5__/* .toastQueue */ .ni.add({
        type: 'success',
        message: 'Här är din notifiering!'
      }, {
        timeout: 5000
      }),
      children: 'Tryck här för en notifiering'
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ToastProvider>\n  {state => (\n    <Button onPress={() => state.add({ message: 'Allt funkar som det ska!', type: 'success' }, { timeout: 5000 })}>\n      Tryck här för en notifiering\n    </Button>\n  )}\n</ToastProvider>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "mindre-justeringar",
      children: "Mindre justeringar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Lagt till ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_7__/* .Link */ .N, {
          href: "/basics/principles#designprinciper-för-extern-webbplats",
          children: "designprinciper för externwebb"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Tydligare felmeddelande när användaren skriver in fler tecken än vad som tillåts av ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "maxCharacter"
        }), " på Textfield och TextArea"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "uppdaterade-komponenter",
      children: "Uppdaterade komponenter"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Button (1.2.1)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "TextField (1.1.0)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "SearchField (1.0.8)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Toast (1.0.5)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "FileUpload (1.0.6)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "MultiSelect (0.1.9)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Tag (0.1.4)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "InfoBanner (1.0.6)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "DatePicker (1.0.8)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "UI (0.7.19)"
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 78815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ Link)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/link/Link.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Link_module = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","blue130":"#25607f","blue150":"#143c50","gray150":"#1f1f1f","gray50":"#bfbfbf","mediumWeight":"500","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","regularWeight":"400","linkVisited":"#663366","black":"#000000","link":"link_RCbb","icon":"icon_Bxuv","standalone":"standalone_Cg9F","stretched":"stretched_pvQw"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var dist_Link = __webpack_require__(73099);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/link/Link.tsx
'use client';var _excluded=["children","standalone","stretched","icon","className","as"];var Link=function Link(_ref){var children=_ref.children,standalone=_ref.standalone,stretched=_ref.stretched,IconComponent=_ref.icon,className=_ref.className,as=_ref.as,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||dist_Link/* Link */.N;return/*#__PURE__*/(0,jsx_runtime.jsx)(Component,Object.assign({className:(0,clsx/* default */.A)(Link_module.link,standalone&&Link_module.standalone,stretched&&Link_module.stretched,className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children,!standalone&&IconComponent&&/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,{size:20,className:Link_module.icon}),standalone&&/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_right/* default */.A,{size:20,className:Link_module.icon})]})}));};

/***/ }),

/***/ 69240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A_: () => (/* binding */ TextField),
/* harmony export */   oi: () => (/* binding */ InputWrapper)
/* harmony export */ });
/* unused harmony export ssnRegEx */
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32945);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79950);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27279);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21704);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44300);
/* harmony import */ var _TextField_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53502);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86559);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["label","description","errorMessage","validationType","validate","maxLength","showCounter","className"];var TextField=function TextField(_ref){var _ref2,_props$defaultValue;var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,validationType=_ref.validationType,validate=_ref.validate,maxLength=_ref.maxLength,showCounter=_ref.showCounter,className=_ref.className,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState((_ref2=(_props$defaultValue=props.defaultValue)!=null?_props$defaultValue:props.value)!=null?_ref2:''),value=_React$useState[0],setValue=_React$useState[1];var handleChange=function handleChange(event){var newValue=event.target.value;setValue(newValue);};var validateInput=function validateInput(value){if(validationType==='ssn')return ssnRegEx.test(value)?null:'Felaktigt personnummer';if(validationType==='dossnr')return dossNrRegEx.test(value)?null:'Felaktigt dossiernummer';if(validationType instanceof RegExp)return new RegExp(validationType).test(value)?null:errorMessage==null?void 0:errorMessage.toString();if(maxLength)return maxLength&&value.length>maxLength?"Du har angett "+(value.length-maxLength)+" tecken f\xF6r mycket. F\xE4ltet \xE4r begr\xE4nsat till "+maxLength+" tecken.":null;if(validate)return validate(value);return true;};var Count=function Count(){if(maxLength){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.count,value.length>maxLength&&_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.countExceeded),children:[value.length," / ",maxLength]});}if(showCounter){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.count,children:value.length});}return null;};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_5__/* .TextField */ .A,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.inputField,className),validate:validateInput},props,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(InputWrapper,{label:label,description:description,errorMessage:errorMessage,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Count,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.wrap,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_6__/* .Input */ .p,{type:props.type,className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.input,onChange:handleChange,onBlur:handleChange}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PasswordField,{type:props.type,input:value})]})]})}));};var PasswordField=function PasswordField(_ref3){var type=_ref3.type,input=_ref3.input;var _React$useState2=react__WEBPACK_IMPORTED_MODULE_0__.useState(false),showPassword=_React$useState2[0],setShowPassword=_React$useState2[1];if(type==='password')return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[showPassword&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .E,{slot:"description",className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.passwordText,children:input}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .$,{variant:"tertiary",onPress:function onPress(){return setShowPassword(!showPassword);},className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.passwordButton,children:showPassword?'Dölj':'Visa'})]});return null;};var InputWrapper=function InputWrapper(_ref4){var label=_ref4.label,description=_ref4.description,errorMessage=_ref4.errorMessage,children=_ref4.children;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.inputWrapper,children:[label&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_9__/* .Label */ .J,{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.label,children:label}),description&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .E,{slot:"description",className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.text,children:description}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_10__/* .FieldError */ .b,{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fieldError,children:errorMessage}),children]});};var ssnRegEx=new RegExp('^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$');var dossNrRegEx=new RegExp('^(\\d{1,2}\\+\\d{6}-\\d{1,2}$|\\d{1,2}-\\d{6}(/\\d{1,2})?$|\\d{1,2}\\d{6}$|\\d{6,8}$)');

/***/ }),

/***/ 66712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r$: () => (/* binding */ GlobalToastRegion),
  ni: () => (/* binding */ toastQueue)
});

// UNUSED EXPORTS: Toast, ToastProvider, ToastRegion

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
// EXTERNAL MODULE: ./node_modules/@react-aria/toast/dist/useToastRegion.mjs + 1 modules
var useToastRegion = __webpack_require__(96766);
// EXTERNAL MODULE: ./node_modules/@react-aria/toast/dist/useToast.mjs
var useToast = __webpack_require__(93187);
// EXTERNAL MODULE: ./node_modules/@react-stately/toast/dist/useToastState.mjs
var dist_useToastState = __webpack_require__(8737);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
;// ./packages/components/src/toast/Toast.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Toast_module = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","signalGreen10":"#d5f2d9","signalGreen100":"#008d3c","signalBlue10":"#eaf2f6","signalBlue100":"#0066cc","signalYellow10":"#fff8e1","signalYellow100":"#f1c21b","signalRed10":"#ffdfdf","signalRed100":"#e62323","gray150":"#1f1f1f","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","mdBreakpoint":"(min-width: 768px)","toastRegion":"toastRegion_KbVp","toast":"toast_gxso","success":"success_KyPa","info":"info_RCx7","important":"important_YYqr","warning":"warning_Rmak","icon":"icon_ZuqY","toastContent":"toastContent_LoSC","toastMessage":"toastMessage_HVa6","slideInTop":"slideInTop_NcfI","slideInEnd":"slideInEnd_Alfu","slideOutTop":"slideOutTop_Hd_W","slideOutEnd":"slideOutEnd_O0VY"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-check.js
var circle_check = __webpack_require__(79804);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(97213);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-alert.js
var circle_alert = __webpack_require__(37946);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(418);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/toast/Toast.tsx
'use client';var _excluded=(/* unused pure expression or super */ null && (["children"])),_excluded2=["state"],_excluded3=["state"];var iconMap={success:circle_check/* default */.A,info:info/* default */.A,important:circle_alert/* default */.A,warning:triangle_alert/* default */.A};var toastQueue=new dist_useToastState/* ToastQueue */.Vv({maxVisibleToasts:5,hasExitAnimation:true});var GlobalToastRegion=function GlobalToastRegion(props){var state=(0,dist_useToastState/* useToastQueue */.oS)(toastQueue);return state.visibleToasts.length>0?/*#__PURE__*/(0,react_dom.createPortal)(/*#__PURE__*/(0,jsx_runtime.jsx)(ToastRegion,Object.assign({},props,{state:state})),document.body):null;};var ToastProvider=function ToastProvider(_ref){var children=_ref.children,props=_objectWithoutPropertiesLoose(_ref,_excluded);var state=useToastState({maxVisibleToasts:5,hasExitAnimation:true});return/*#__PURE__*/_jsxs(_Fragment,{children:[typeof children==='function'?children(state):children,state.visibleToasts.length>0&&/*#__PURE__*/_jsx(ToastRegion,Object.assign({},props,{state:state}))]});};function ToastRegion(_ref2){var state=_ref2.state,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);var ref=react.useRef(null);var _useToastRegion=(0,useToastRegion/* useToastRegion */.J)(props,state,ref),regionProps=_useToastRegion.regionProps;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},regionProps,{ref:ref,className:Toast_module.toastRegion,children:state.visibleToasts.map(function(toast){return/*#__PURE__*/(0,jsx_runtime.jsx)(Toast,{toast:toast,state:state},toast.key);})}));}function Toast(_ref3){var state=_ref3.state,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref3,_excluded3);var ref=react.useRef(null);var _useToast=(0,useToast/* useToast */.d)(props,state,ref),toastProps=_useToast.toastProps,contentProps=_useToast.contentProps,titleProps=_useToast.titleProps,closeButtonProps=_useToast.closeButtonProps;var Icon=iconMap[props.toast.content.type];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({},toastProps,{ref:ref,className:(0,clsx/* default */.A)(Toast_module.toast,Toast_module[props.toast.content.type]),"data-animation":props.toast.animation,onAnimationEnd:function onAnimationEnd(){if(props.toast.animation==='exiting'){state.remove(props.toast.key);}},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({className:Toast_module.toastContent},contentProps,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{className:Toast_module.icon,size:20,"aria-hidden":true}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",Object.assign({className:Toast_module.toastMessage},titleProps,{children:props.toast.content.message})),props.toast.content.children]})]})),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,Object.assign({variant:"icon"},closeButtonProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})}))]}));}

/***/ }),

/***/ 48635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ArrowRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);


//# sourceMappingURL=arrow-right.js.map


/***/ }),

/***/ 53502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","signalRed10":"#ffdfdf","gray10":"#f2f2f2","gray20":"#e6e6e6","gray50":"#bfbfbf","black":"#000000","signalRed100":"#e62323","mediumWeight":"500","regularWeight":"400","inputText":"#1f1f1f","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","inputField":"inputField_NRYV","inputWrapper":"inputWrapper_NR0B","label":"label_UgTd","text":"text_E1GG","fieldError":"fieldError_GOHN","passwordText":"passwordText_gBIs","count":"count_PsfX","countExceeded":"countExceeded_hrAA","input":"input_g6A6","wrap":"wrap_ljmz","passwordButton":"passwordButton_kacG"});

/***/ }),

/***/ 94324:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/pr-preview/pr-290/blog/release-17","source":"@site/blog/release17.mdx","title":"Release 17","description":".","date":"2024-12-13T12:24:58.000Z","tags":[],"readingTime":1.26,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Release 17","description":".","slug":"release-17","pagination_prev":null,"pagination_next":null},"unlisted":false,"prevItem":{"title":"Release 18","permalink":"/pr-preview/pr-290/blog/release-18"},"nextItem":{"title":"Release 16","permalink":"/pr-preview/pr-290/blog/release-16"}}');

/***/ })

}]);