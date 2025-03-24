"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4583],{

/***/ 66276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Startpage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 74 modules
var Layout = __webpack_require__(64948);
// EXTERNAL MODULE: ./packages/components/src/button/ButtonGroup.tsx + 1 modules
var ButtonGroup = __webpack_require__(94839);
// EXTERNAL MODULE: ./packages/components/src/link-button/LinkButton.tsx + 2 modules
var LinkButton = __webpack_require__(1353);
// EXTERNAL MODULE: ./packages/components/src/toast/Toast.tsx + 1 modules
var Toast = __webpack_require__(66712);
;// ./apps/docs/src/css/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"text":"text_ysZI","code":"code_BaOa","display1":"display1_tOb_","image":"image_HbCB"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(56289);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(29030);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-live-codeblock/lib/theme/CodeBlock/index.js + 23 modules
var CodeBlock = __webpack_require__(89014);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/BrowserOnly.js
var BrowserOnly = __webpack_require__(35363);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(8532);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/pages/index.tsx
function Startpage(){return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{title:"Migrationsverkets designsystem",description:"Midas \xE4r Migrationsverkets designsystem f\xF6r att skapa anv\xE4ndarv\xE4nliga, tillg\xE4ngliga och enhetliga tj\xE4nster och produkter. Det inneh\xE5ller designkomponenter, kod och riktlinjer som underl\xE4ttar utveckling och design.",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container container--fullscreen",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"row row--no-gutters",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col col--6 textColumn",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:index_module.text,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:index_module.display1,children:"Midas"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Midas \xE4r Migrationsverkets designsystem f\xF6r att skapa anv\xE4ndarv\xE4nliga, tillg\xE4ngliga och enhetliga tj\xE4nster och produkter. Det inneh\xE5ller designkomponenter, kod och riktlinjer som underl\xE4ttar utveckling och design."}),/*#__PURE__*/(0,jsx_runtime.jsxs)(ButtonGroup/* ButtonGroup */.e,{"aria-label":"L\xE4nkar",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LinkButton/* LinkButton */.z,{as:Link/* default */.A,to:"/get-started/use",children:"Kom ig\xE5ng"}),/*#__PURE__*/(0,jsx_runtime.jsx)(LinkButton/* LinkButton */.z,{variant:"secondary",as:Link/* default */.A,to:"/components/accordion",children:"Komponenter"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlock/* default */.A,{className:index_module.code,children:"npm install @midas-ds/components"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col col--6",children:/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderImage,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(AprilFools,{})]})})});}function HeaderImage(){var imgSrc=(0,useBaseUrl/* default */.Ay)('/img/HeroImage.png');var imgSrcDark=(0,useBaseUrl/* default */.Ay)('/img/HeroImageDark.png');var _useColorMode=(0,contexts_colorMode/* useColorMode */.G)(),colorMode=_useColorMode.colorMode;return/*#__PURE__*/(0,jsx_runtime.jsx)(BrowserOnly/* default */.A,{children:function children(){return/*#__PURE__*/(0,jsx_runtime.jsx)("img",{className:index_module.image,src:colorMode==='light'?imgSrc:imgSrcDark,alt:""});}});}function AprilFools(){react.useEffect(function(){document.body.style.transform='rotateY(180deg)';var timer=setTimeout(function(){document.body.style.transition='transform 0.3s';document.body.style.transform='';},3000);var toastTimer=setTimeout(function(){Toast/* toastQueue */.ni.add({message:'April, april!',type:'success'},{timeout:10000});},3500);return function(){document.body.style.transform='';clearTimeout(timer);clearTimeout(toastTimer);};},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)(BrowserOnly/* default */.A,{children:function children(){return/*#__PURE__*/(0,jsx_runtime.jsx)(Toast/* GlobalToastRegion */.r$,{});}});}

/***/ }),

/***/ 94839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ ButtonGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/button/ButtonGroup.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ButtonGroup_module = ({"tokens":"\"../theme/tokens.css\"","--breakpoint-sm":"(max-width: 767px)","buttonGroup":"buttonGroup_mVqm"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/button/ButtonGroup.tsx
var _excluded=["children","className","aria-label"];/**
 * Group several buttons together.
 *
 * @interface React.HTMLAttributes<HTMLDivElement>
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */var ButtonGroup=function ButtonGroup(_ref){var children=_ref.children,className=_ref.className,ariaLabel=_ref['aria-label'],rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({role:"group","aria-label":ariaLabel,className:(0,clsx/* default */.A)(ButtonGroup_module.buttonGroup,className)},rest,{children:children}));};

/***/ }),

/***/ 66712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r$: () => (/* binding */ GlobalToastRegion),
  ni: () => (/* binding */ toastQueue)
});

// UNUSED EXPORTS: Toast, ToastProvider, ToastRegion, useToastState

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
// EXTERNAL MODULE: ./node_modules/@react-aria/toast/dist/useToastRegion.mjs + 1 modules
var useToastRegion = __webpack_require__(96766);
// EXTERNAL MODULE: ./node_modules/@react-aria/toast/dist/useToast.mjs
var useToast = __webpack_require__(93187);
// EXTERNAL MODULE: ./node_modules/@react-stately/toast/dist/useToastState.mjs
var useToastState = __webpack_require__(8737);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
;// ./packages/components/src/toast/Toast.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Toast_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--notification-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--notification-border-success":"light-dark(#008d3c, #008d3c)","--notification-background-info":"light-dark(#eaf2f6, light-dark(#f2f2f2, #262626))","--notification-border-info":"light-dark(#0066cc, #0066cc)","--notification-background-important":"light-dark(#fff8e1, light-dark(#f2f2f2, #262626))","--notification-border-important":"light-dark(#fdb813, #fdb813)","--notification-border-warning":"light-dark(#e62323, #e62323)","--notification-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--breakpoint-md":"(min-width: 768px)","--focus":"0 0 0 2px white, 0 0 0 4px black","toastRegion":"toastRegion_KbVp","toast":"toast_gxso","success":"success_KyPa","info":"info_RCx7","important":"important_YYqr","warning":"warning_Rmak","icon":"icon_ZuqY","toastContent":"toastContent_LoSC","toastMessage":"toastMessage_HVa6","slideInTop":"slideInTop_NcfI","slideInEnd":"slideInEnd_Alfu","slideOutTop":"slideOutTop_Hd_W","slideOutEnd":"slideOutEnd_O0VY"});
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
'use client';var _excluded=(/* unused pure expression or super */ null && (["children"])),_excluded2=["state"],_excluded3=["state"];var iconMap={success:circle_check/* default */.A,info:info/* default */.A,important:circle_alert/* default */.A,warning:triangle_alert/* default */.A};var toastStateProps={wrapUpdate:function wrapUpdate(fn){if('startViewTransition'in document){document.startViewTransition(function(){(0,react_dom.flushSync)(fn);});}else{fn();}},maxVisibleToasts:5};/**
 * Temporary implementation of https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/toast/src/useToastState.ts#L59
 * TODO: Erase this as soon as react-stately is released
 */function Toast_useToastState(props){if(props===void 0){props={};}var _props=props,_props$maxVisibleToas=_props.maxVisibleToasts,maxVisibleToasts=_props$maxVisibleToas===void 0?1:_props$maxVisibleToas,wrapUpdate=_props.wrapUpdate;var queue=useMemo(function(){return new ToastQueue({maxVisibleToasts:maxVisibleToasts,wrapUpdate:wrapUpdate});},[maxVisibleToasts,wrapUpdate]);return useToastQueue(queue);}var toastQueue=new useToastState/* ToastQueue */.Vv(toastStateProps);var GlobalToastRegion=function GlobalToastRegion(props){var state=(0,useToastState/* useToastQueue */.oS)(toastQueue);return state.visibleToasts.length>0?/*#__PURE__*/(0,react_dom.createPortal)(/*#__PURE__*/(0,jsx_runtime.jsx)(ToastRegion,Object.assign({},props,{state:state})),document.body):null;};var ToastProvider=function ToastProvider(_ref){var children=_ref.children,props=_objectWithoutPropertiesLoose(_ref,_excluded);var state=Toast_useToastState(toastStateProps);return/*#__PURE__*/_jsxs(_Fragment,{children:[typeof children==='function'?children(state):children,state.visibleToasts.length>0&&/*#__PURE__*/_jsx(ToastRegion,Object.assign({},props,{state:state}))]});};function ToastRegion(_ref2){var state=_ref2.state,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);var ref=react.useRef(null);var _useToastRegion=(0,useToastRegion/* useToastRegion */.J)(props,state,ref),regionProps=_useToastRegion.regionProps;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},regionProps,{ref:ref,className:Toast_module.toastRegion,children:state.visibleToasts.map(function(toast){return/*#__PURE__*/(0,jsx_runtime.jsx)(Toast,{toast:toast,state:state},toast.key);})}));}function Toast(_ref3){var state=_ref3.state,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref3,_excluded3);var ref=react.useRef(null);var _useToast=(0,useToast/* useToast */.d)(props,state,ref),toastProps=_useToast.toastProps,contentProps=_useToast.contentProps,titleProps=_useToast.titleProps,closeButtonProps=_useToast.closeButtonProps;var Icon=iconMap[props.toast.content.type];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({},toastProps,{ref:ref,className:(0,clsx/* default */.A)(Toast_module.toast,Toast_module[props.toast.content.type]),style:{viewTransitionName:props.toast.key},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({className:Toast_module.toastContent},contentProps,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{className:Toast_module.icon,size:20,"aria-hidden":true}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",Object.assign({className:Toast_module.toastMessage},titleProps,{children:props.toast.content.message})),props.toast.content.children]})]})),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,Object.assign({variant:"icon"},closeButtonProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})}))]}));}

/***/ })

}]);