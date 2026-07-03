"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6335],{

/***/ 87916
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HeaderExample)
});

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bell.js
var bell = __webpack_require__(49436);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.js
var user = __webpack_require__(48686);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/settings.js
var settings = __webpack_require__(80964);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/house.js
var house = __webpack_require__(91805);
// EXTERNAL MODULE: ./packages/layout/src/layout/Layout.tsx + 4 modules
var Layout = __webpack_require__(39685);
// EXTERNAL MODULE: ./packages/layout/src/header/Header.tsx + 1 modules
var Header = __webpack_require__(46468);
// EXTERNAL MODULE: ./packages/layout/src/header/header-logo/HeaderLogo.tsx + 1 modules
var HeaderLogo = __webpack_require__(34262);
// EXTERNAL MODULE: ./packages/layout/src/header/header-title/HeaderTitle.tsx + 1 modules
var HeaderTitle = __webpack_require__(34842);
// EXTERNAL MODULE: ./packages/layout/src/header/header-actions/HeaderActions.tsx + 1 modules
var HeaderActions = __webpack_require__(28911);
// EXTERNAL MODULE: ./packages/layout/src/header/header-action/HeaderAction.tsx + 1 modules
var HeaderAction = __webpack_require__(53467);
// EXTERNAL MODULE: ./packages/layout/src/layout/layout-content/LayoutContent.tsx + 1 modules
var LayoutContent = __webpack_require__(64546);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/panel-left-open.js
var panel_left_open = __webpack_require__(69910);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/panel-left-close.js
var panel_left_close = __webpack_require__(59644);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/useControlledState.mjs
var useControlledState = __webpack_require__(8356);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
;// ./packages/layout/src/panel/panel-body/PanelBody.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const PanelBody_module = ({"panelBody":"panelBody_OFgk"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/panel/panel-body/PanelBody.tsx
var _excluded=["className"];var PanelBody=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("aside",Object.assign({ref:ref,className:(0,clsx/* default */.A)(className,PanelBody_module.panelBody)},rest));});
;// ./packages/layout/src/panel/panel-header/PanelHeader.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const PanelHeader_module = ({"panelHeader":"panelHeader_K3Yg"});
;// ./packages/layout/src/panel/panel-header/PanelHeader.tsx
var PanelHeader_excluded=["className"];var PanelHeader=function PanelHeader(_ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,PanelHeader_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(className,PanelHeader_module.panelHeader)},rest));};
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var utils_clsx = __webpack_require__(1160);
;// ./packages/layout/src/panel/panel-title/PanelTitle.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const PanelTitle_module = ({"panelTitle":"panelTitle_z2zr"});
;// ./packages/layout/src/panel/panel-title/PanelTitle.tsx
var PanelTitle_excluded=["className","title"];var PanelTitle=function PanelTitle(_ref){var className=_ref.className,title=_ref.title,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,PanelTitle_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,Object.assign({className:(0,utils_clsx/* clsx */.$)(className,PanelTitle_module.panelTitle)},rest,{children:title}));};
;// ./packages/layout/src/panel/panel-content/PanelContent.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const PanelContent_module = ({"panelContent":"panelContent_WJah"});
;// ./packages/layout/src/panel/panel-content/PanelContent.tsx
var PanelContent_excluded=["className"];var PanelContent=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,PanelContent_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({ref:ref,tabIndex:0// eslint-disable-line jsx-a11y/no-noninteractive-tabindex -- WCAG 2.1.1: scrollable regions must be keyboard-reachable
,className:(0,clsx/* default */.A)(className,PanelContent_module.panelContent)},rest));});
;// ./packages/layout/src/sidebar/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"expandSidebar":"Expand sidebar","collapseSidebar":"Collapse sidebar"},"sv":{"expandSidebar":"Expandera sidopanel","collapseSidebar":"Minimera sidopanel"}}');
// EXTERNAL MODULE: ./packages/layout/src/utils/useIsMobileDevice.ts
var useIsMobileDevice = __webpack_require__(10855);
// EXTERNAL MODULE: ./packages/layout/src/sidebar/SidebarContext.tsx
var SidebarContext = __webpack_require__(16614);
;// ./packages/layout/src/sidebar/Sidebar.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Sidebar_module = ({"sidebar":"sidebar_aG_T","collapsed":"collapsed__6AI","sidebarHeader":"sidebarHeader_KGRi","sidebarTitle":"sidebarTitle_r6Dn","sidebarContent":"sidebarContent_dmFt"});
;// ./packages/layout/src/sidebar/Sidebar.tsx
'use client';var Sidebar_excluded=["children","className","title"];var Sidebar=function Sidebar(_ref){var _clsx,_clsx2,_clsx3;var children=_ref.children,className=_ref.className,title=_ref.title,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,Sidebar_excluded);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var isMobileDevice=(0,useIsMobileDevice/* useIsMobileDevice */.o)();var _useControlledState=(0,useControlledState/* useControlledState */.P)(props.isCollapsed,props.defaultCollapsed||false,props.onCollapseChange),isCollapsed=_useControlledState[0],setIsCollapsed=_useControlledState[1];var _React$useState=react.useState(false),isTransitioning=_React$useState[0],setIsTransitioning=_React$useState[1];var handlePress=function handlePress(){setIsTransitioning(true);setIsCollapsed(function(previouslyCollapsed){return!previouslyCollapsed;});};var handleTransitionEnd=function handleTransitionEnd(e){if(e.propertyName==='width'&&e.target===e.currentTarget){setIsTransitioning(false);}};return isMobileDevice?null:/*#__PURE__*/(0,jsx_runtime.jsx)(SidebarContext/* SidebarContext */.I.Provider,{value:{isCollapsed:isCollapsed},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(PanelBody,Object.assign({className:(0,clsx/* default */.A)(className,Sidebar_module.sidebar,(_clsx={},_clsx[Sidebar_module.collapsed]=isCollapsed,_clsx)),"data-transitioning":isTransitioning||undefined,onTransitionEnd:handleTransitionEnd},(0,filterDOMProps/* filterDOMProps */.$)(props),{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(PanelHeader,{className:(0,clsx/* default */.A)(Sidebar_module.sidebarHeader,(_clsx2={},_clsx2[Sidebar_module.collapsed]=isCollapsed,_clsx2)),children:[title?/*#__PURE__*/(0,jsx_runtime.jsx)(PanelTitle,{className:(0,clsx/* default */.A)(Sidebar_module.sidebarTitle,(_clsx3={},_clsx3[Sidebar_module.collapsed]=isCollapsed,_clsx3)),title:title}):/*#__PURE__*/(0,jsx_runtime.jsx)("div",{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{"aria-label":isCollapsed?strings.format('expandSidebar'):strings.format('collapseSidebar'),onPress:handlePress,variant:"icon",size:isCollapsed?'large':'medium',children:isCollapsed?/*#__PURE__*/(0,jsx_runtime.jsx)(panel_left_open/* default */.A,{size:20}):/*#__PURE__*/(0,jsx_runtime.jsx)(panel_left_close/* default */.A,{size:20})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(PanelContent,{className:Sidebar_module.sidebarContent,children:children})]}))});};
// EXTERNAL MODULE: ./packages/layout/src/navigation/Navigation.tsx + 1 modules
var Navigation = __webpack_require__(55229);
// EXTERNAL MODULE: ./packages/layout/src/navigation/navigation-item/NavigationItem.tsx + 1 modules
var NavigationItem = __webpack_require__(12089);
// EXTERNAL MODULE: ./packages/layout/src/navigation/navigation-link/NavigationLink.tsx + 1 modules
var NavigationLink = __webpack_require__(10550);
// EXTERNAL MODULE: ./packages/layout/src/main/Main.tsx + 1 modules
var Main = __webpack_require__(70606);
;// ./apps/docs/src/pages/layout-examples/header.tsx
function HeaderExample(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* Layout */.P,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Header/* Header */.Y,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderLogo/* HeaderLogo */.b,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderTitle/* HeaderTitle */.g,{children:"Mitt system"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(HeaderActions/* HeaderActions */.l,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderAction/* HeaderAction */.u,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(bell/* default */.A,{size:20}),children:"Notiser"}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderAction/* HeaderAction */.u,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(user/* default */.A,{size:20}),children:"Min profil"}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderAction/* HeaderAction */.u,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(settings/* default */.A,{size:20}),children:"Inst\xE4llningar"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(LayoutContent/* LayoutContent */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Sidebar,{title:"Mitt system",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Navigation/* Navigation */.V,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavigationItem/* NavigationItem */.s,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(NavigationLink/* NavigationLink */.T,{href:"#",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(house/* default */.A,{}),isActive:true,children:"Hem"})})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Main/* Main */.g,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{height:'100%',border:'dashed 2px var(--midas-border-color-subtle)',borderRadius:4,display:'flex',alignItems:'center',justifyContent:'center',color:'var(--midas-text-subtle)'},children:"App-inneh\xE5ll"})})]})]});}

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

/***/ 5031
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ Logo)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
;// ./packages/components/src/logo/Logo.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Logo_module = ({"container":"container_U3H4","noPadding":"noPadding__BF5","logo":"logo_GI7z","primary":"primary_TCiF","dark":"dark_F_Ks","xSmall":"xSmall_IZ4K","small":"small_KAZl","large":"large_iAB3"});
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/logo/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"logotype":"Logotype of the Swedish Migration Agency"},"sv":{"logotype":"Migrationsverkets logotyp"}}');
;// ./packages/components/src/logo/LogoContext.tsx
var LogoContext=/*#__PURE__*/(0,react.createContext)({size:undefined});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/logo/Logo.tsx
var _excluded=["primary","size","padding","className"];var Logo=function Logo(_ref){var _ref2;var _ref$primary=_ref.primary,primary=_ref$primary===void 0?true:_ref$primary,size=_ref.size,_ref$padding=_ref.padding,padding=_ref$padding===void 0?true:_ref$padding,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var context=(0,react.useContext)(LogoContext);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(Logo_module.container,padding===false&&Logo_module.noPadding,className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(SVG,{size:(_ref2=size!=null?size:context.size)!=null?_ref2:'medium',primary:primary})}));};var SVG=function SVG(_ref3){var size=_ref3.size,primary=_ref3.primary;var classNames=(0,clsx/* default */.A)(Logo_module.logo,primary?Logo_module.primary:Logo_module.dark,size==='x-small'&&Logo_module.xSmall,size==='medium'&&Logo_module.medium,size==='large'&&Logo_module.large,size==='small'&&Logo_module.small);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);if(size==='x-small')return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 92",className:classNames,role:"img","aria-hidden":"false",focusable:"false","aria-label":strings.format('logotype'),children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M99.99,91.69c-1.84-1.11-4.05-4.55-4.05-9.46V9.15c0-4.79,1.96-7.25,3.81-8.85h-14.75l-33.91,65.47L12.41.3H0c1.6,1.59,3.93,3.07,3.93,8.23v75.55c0,3.56-2.21,6.51-3.81,7.61h16.34c-1.72-1.22-3.93-4.18-3.93-7.98V25.97l36.24,61.42,33.04-63.26v58.96c0,5.53-2.21,7.61-3.81,8.6h21.99Z"})});return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 112 40",className:classNames,"aria-hidden":"false",focusable:"false","aria-label":strings.format('logotype'),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M97.78,21.61c-7.48-9.73-20.06-16.03-34.32-16.03-13.07,0-24.86,5.27-32.46,13.65,6.56-5.83,15.64-9.44,25.66-9.44,11.37,0,21.52,4.56,28.18,11.83h12.94Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M90.45,12.58C70.67-1.51,41.26,2.77,27.49,21.61h-12.23C30.56-2.89,68.29-7.47,90.45,12.58h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M11.89,37.13c-.22-.13-.48-.53-.48-1.11v-8.58c0-.56.23-.85.45-1.04h-1.73l-3.98,7.69-4.54-7.69H.15c.19.19.46.36.46.97v8.87c0,.42-.26.76-.45.89h1.92c-.2-.14-.46-.49-.46-.94v-6.78l4.25,7.21,3.88-7.43v6.92c0,.65-.26.89-.45,1.01h2.58Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M15.81,26.86c0-.45-.36-.81-.81-.81s-.81.36-.81.81.36.81.81.81.81-.36.81-.81h0ZM16.22,37.13c-.3-.23-.45-.5-.45-1.07v-6.4h-1.98c.37.19.49.58.49,1.17v5.23c0,.48-.09.79-.46,1.07h2.39Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M24.52,30.97c-.04-.33-.17-.68-.37-.95h-1.36c-.29-.26-.87-.58-1.96-.58-1.53,0-2.8.92-2.8,2.58,0,1.02.52,1.86,1.31,2.26-.43.37-1.38.98-1.38,1.61,0,.71.79.99,1.38,1.1-.88.26-1.67.82-1.67,1.59,0,1.14,1.73,1.41,2.64,1.41,1.54,0,3.91-.78,3.91-2.64,0-1.21-1.23-1.49-2.22-1.5-2.42-.06-2.51-.2-2.51-.56,0-.2.42-.68.55-.81.23.03.48.06.71.06,1.76,0,2.93-.94,2.93-2.7,0-.48-.14-.91-.29-1.11.12-.04.25-.04.37-.04.27,0,.55.12.76.27h0ZM22.27,32.21c0,.79-.37,1.61-1.36,1.61-1.07,0-1.47-1.21-1.47-2.09,0-.95.5-1.57,1.31-1.57,1.2,0,1.51,1.25,1.51,2.05h0ZM22.89,37.92c0,.76-.82,1.31-1.93,1.31-.59,0-1.7-.3-1.69-1.15,0-.45.26-.74.59-.99l1.96.04c.5.01,1.07.1,1.07.79h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M30.11,31.22l-.23-1.63c-.2-.1-.43-.14-.65-.14-.85,0-1.46.68-1.79,1.37v-1.15h-1.96c.45.27.48.76.48,1.14v5.19c0,.58-.1.89-.45,1.14h2.35c-.36-.29-.42-.63-.42-1.12v-4.27c.22-.58.78-1.04,1.43-1.04.46,0,.97.26,1.24.52h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M36.87,37.13c-.37-.33-.43-.59-.43-1.25v-3.89c0-2.21-1.43-2.55-2.8-2.55-.61,0-1.67.22-2.03.42-.2.4-.3,1.24-.4,1.67.46-.56,1.27-1.37,2.39-1.37,1.18,0,1.36.82,1.36,1.7v.39l-2.21.76c-1.04.36-1.87,1.08-1.87,2.26,0,1.31.88,2.08,2.15,2.08.87,0,1.46-.43,1.93-.94v.72h1.92ZM34.95,35.62c-.26.32-.74.85-1.37.85-.75,0-1.18-.79-1.18-1.54,0-.71.35-1.15.89-1.37l1.66-.63v2.7h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M42.58,36.15c-.29.27-.71.46-1.11.46-.87,0-1.07-.98-1.07-1.66v-4.51h.85c.43,0,.94.13,1.33.35l-.17-1.12h-2v-1.76c-.68.95-1.54,1.96-2.58,2.54h1.1v4.43c0,1.43.32,2.47,1.95,2.47.48,0,.98-.1,1.38-.36.14-.25.25-.55.33-.82h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M45.63,26.86c0-.45-.36-.81-.81-.81s-.81.36-.81.81.36.81.81.81.81-.36.81-.81h0ZM46.04,37.13c-.3-.23-.45-.5-.45-1.07v-6.4h-1.98c.37.19.49.58.49,1.17v5.23c0,.48-.09.79-.46,1.07h2.39Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M54.96,33.37c0-2.06-1.3-3.95-3.5-3.95s-3.84,1.76-3.84,4.01c0,2.06,1.28,3.95,3.49,3.95s3.85-1.76,3.85-4.01h0ZM53.43,34.04c0,1.27-.52,2.57-1.86,2.57-1.79,0-2.42-2.44-2.42-3.86,0-1.21.48-2.57,1.87-2.57,1.79,0,2.41,2.44,2.41,3.86h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M63.37,37.13c-.27-.22-.45-.42-.45-1.11v-3.94c0-1.63-.39-2.64-2.18-2.64-1.01,0-1.79.56-2.38,1.12v-.91h-1.98c.3.17.49.46.49,1.05v5.33c0,.59-.14.88-.48,1.08h2.39c-.23-.23-.43-.37-.43-1.17v-4.4c.32-.45,1.07-1.24,1.85-1.24,1.01,0,1.23,1.01,1.23,1.8v3.95c0,.74-.26.87-.46,1.05h2.39Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M69.79,35.2c0-2.21-3.42-2.71-3.42-4.07,0-.75.71-.98,1.34-.98s1.33.29,1.74.81l-.07-1.18c-.46-.17-1.11-.35-1.69-.35-1.44,0-2.68.63-2.68,1.89,0,2.36,3.46,2.68,3.46,4.25,0,.79-.62,1.05-1.31,1.05-1.01,0-1.86-.46-2.52-1.21v.1c0,.4-.03.99.3,1.27.53.43,1.53.56,2.18.56,1.36,0,2.67-.62,2.67-2.15h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M77.98,29.66h-1.43c.13.1.11.56-.19,1.33l-1.86,4.72-1.87-4.7c-.26-.65-.32-1.15-.16-1.34h-2.06c.19.1.49.85.82,1.67l2.31,5.8h1.31l2.35-5.97c.32-.81.56-1.36.78-1.5h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M84.91,33.54v-.23c0-1.92-.62-3.88-2.88-3.88s-3.56,2.02-3.56,4.11,1.41,3.81,3.58,3.81c.78,0,1.62-.17,2.13-.45.32-.35.49-.79.59-1.27-.69.5-1.41.84-2.31.84-1.49,0-2.35-1.57-2.38-2.88l4.83-.04h0ZM83.34,32.88c-1.1.09-2.16.1-3.27.1.01-.78.29-2.83,1.7-2.83,1.33,0,1.57,1.72,1.57,2.73h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M90.95,31.22l-.23-1.63c-.2-.1-.43-.14-.65-.14-.85,0-1.46.68-1.79,1.37v-1.15h-1.96c.45.27.48.76.48,1.14v5.19c0,.58-.1.89-.45,1.14h2.35c-.36-.29-.42-.63-.42-1.12v-4.27c.22-.58.78-1.04,1.43-1.04.46,0,.97.26,1.24.52h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M99.79,37.16c-2.26-.37-2.49-4.04-4.7-4.04l2.62-2.8c.22-.23.5-.48.75-.66h-1.77c.14.14.13.39-.13.66l-2.65,2.83v-7.07h-1.98c.33.2.49.56.49,1.01v9.01c0,.58-.22.81-.46,1.02h2.35c-.26-.25-.4-.49-.4-1.02v-2.57c.27,0,.62.13.82.26,1.28.82,1.95,3.11,2.67,3.45.14.07.94.1,1.14.1.45,0,.84-.03,1.25-.19h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M106.3,33.54v-.23c0-1.92-.62-3.88-2.88-3.88s-3.56,2.02-3.56,4.11,1.41,3.81,3.58,3.81c.78,0,1.62-.17,2.13-.45.32-.35.49-.79.59-1.27-.69.5-1.41.84-2.31.84-1.49,0-2.35-1.57-2.38-2.88l4.83-.04h0ZM104.73,32.88c-1.1.09-2.16.1-3.27.1.01-.78.29-2.83,1.7-2.83,1.33,0,1.57,1.72,1.57,2.73h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M111.85,36.15c-.29.27-.71.46-1.11.46-.86,0-1.07-.98-1.07-1.66v-4.51h.85c.43,0,.94.13,1.33.35l-.17-1.12h-2v-1.76c-.68.95-1.54,1.96-2.58,2.54h1.1v4.43c0,1.43.32,2.47,1.95,2.47.48,0,.98-.1,1.38-.36.14-.25.25-.55.33-.82h0Z"})]});};

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

/***/ 93509
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ Tooltip_Tooltip),
  k: () => (/* binding */ TooltipTrigger)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
;// ./packages/components/src/tooltip/Tooltip.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tooltip_module = ({"tooltip":"tooltip_L2zx","arrow":"arrow_bl7N"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Tooltip.mjs + 4 modules
var Tooltip = __webpack_require__(9741);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(45745);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/tooltip/Tooltip.tsx
var _excluded=["children","className"],_excluded2=["delay"];function Tooltip_Tooltip(_ref){var _children=_ref.children,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* Tooltip */.m_,Object.assign({className:(0,clsx/* default */.A)(Tooltip_module.tooltip,className)},props,{children:function children(renderProps){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Tooltip_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:8,height:8,viewBox:"0 0 8 8",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L4 4 L8 0"})})}),typeof _children==='function'?_children(renderProps):_children]});}}));}function TooltipTrigger(_ref2){var _ref2$delay=_ref2.delay,delay=_ref2$delay===void 0?0:_ref2$delay,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* TooltipTrigger */.k$,Object.assign({delay:delay},props));}

/***/ },

/***/ 46468
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* binding */ Header)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/layout/src/header/Header.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Header_module = ({"header":"header_cbgi"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/header/Header.tsx
'use client';var _excluded=["className"];var Header=function Header(_ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("header",Object.assign({className:(0,clsx/* default */.A)(className,Header_module.header)},rest));};

/***/ },

/***/ 53467
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ HeaderAction)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
;// ./packages/layout/src/header/header-action/HeaderAction.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const HeaderAction_module = ({"headerAction":"headerAction_l3SX","label":"label_Yxp2"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/header/header-action/HeaderAction.tsx
'use client';var _excluded=["children","icon","className"];var HeaderAction=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var children=_ref.children,icon=_ref.icon,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);if(!children&&!props['aria-label']&&"production"!=='production')// removed by dead control flow
{}return/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,Object.assign({ref:ref,size:"medium",variant:"tertiary",className:(0,clsx/* default */.A)(HeaderAction_module.headerAction,className)},props,{children:(0,utils/* composeRenderProps */.HW)(children,function(children){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[icon,typeof children!=='undefined'&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:HeaderAction_module.label,children:children})]});})}));});HeaderAction.displayName='HeaderAction';

/***/ },

/***/ 28911
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ HeaderActions)
});

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/layout/src/header/header-actions/HeaderActions.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const HeaderActions_module = ({"headerActions":"headerActions_r0j7"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/header/header-actions/HeaderActions.tsx
'use client';var HeaderActions=function HeaderActions(_ref){var children=_ref.children,className=_ref.className;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(HeaderActions_module.headerActions,className),children:children});};

/***/ },

/***/ 34262
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ HeaderLogo)
});

// EXTERNAL MODULE: ./packages/components/src/logo/Logo.tsx + 3 modules
var Logo = __webpack_require__(5031);
;// ./packages/layout/src/header/header-logo/HeaderLogo.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const HeaderLogo_module = ({"mobile":"mobile_uWfK","desktop":"desktop_I1ZT"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/header/header-logo/HeaderLogo.tsx
'use client';var HeaderLogo=function HeaderLogo(_ref){var primary=_ref.primary;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Logo/* Logo */.g,{size:"x-small",primary:primary,className:HeaderLogo_module.mobile}),/*#__PURE__*/(0,jsx_runtime.jsx)(Logo/* Logo */.g,{size:"small",primary:primary,className:HeaderLogo_module.desktop})]});};

/***/ },

/***/ 34842
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ HeaderTitle)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/layout/src/header/header-title/HeaderTitle.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const HeaderTitle_module = ({"headerTitle":"headerTitle_bJCT"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/header/header-title/HeaderTitle.tsx
var _excluded=["className"];var HeaderTitle=function HeaderTitle(_ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("span",Object.assign({className:(0,clsx/* default */.A)(HeaderTitle_module.headerTitle,className)},rest));};

/***/ },

/***/ 97757
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ MobileMenuContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
'use client';var MobileMenuContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

/***/ },

/***/ 39685
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/layout/src/layout/Layout.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Layout_module = ({"layout":"layout_MzRV"});
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
;// ./packages/layout/src/layout/skip-to-content/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"skipToContent":"Skip to main content"},"sv":{"skipToContent":"Hoppa till huvudinnehåll"}}');
;// ./packages/layout/src/layout/skip-to-content/SkipToContent.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SkipToContent_module = ({"skipToContent":"skipToContent_YFi8"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/layout/skip-to-content/SkipToContent.tsx
'use client';var SkipToContent=function SkipToContent(_ref){var _ref$selector=_ref.selector,selector=_ref$selector===void 0?'main:first-of-type':_ref$selector;var handlePress=function handlePress(){var container=document.querySelector(selector);if(container){container.tabIndex=-1;container.focus();container.addEventListener('blur',function(){return container.removeAttribute('tabindex');},{once:true});}};var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:handlePress,className:SkipToContent_module.skipToContent,children:strings.format('skipToContent')});};
;// ./packages/layout/src/layout/Layout.tsx
var _excluded=["children","className"];var Layout=function Layout(_ref){var children=_ref.children,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({className:(0,clsx/* default */.A)(className,Layout_module.layout)},rest,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SkipToContent,{}),children]}));};

/***/ },

/***/ 64546
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ LayoutContent)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/layout/src/layout/layout-content/LayoutContent.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const LayoutContent_module = ({"layoutContent":"layoutContent_KYbf"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/layout/layout-content/LayoutContent.tsx
var _excluded=["className"];var LayoutContent=function LayoutContent(_ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(className,LayoutContent_module.layoutContent)},rest));};

/***/ },

/***/ 70606
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ Main)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/layout/src/main/Main.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Main_module = ({"main":"main_P1t_"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/main/Main.tsx
var _excluded=["className"];var Main=function Main(_ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("main",Object.assign({className:(0,clsx/* default */.A)(className,Main_module.main)},rest));};

/***/ },

/***/ 55229
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ Navigation)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/layout/src/navigation/Navigation.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Navigation_module = ({"rootList":"rootList_h7yc"});
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/navigation/Navigation.tsx
'use client';var _excluded=["className","items","children","dependencies","idScope","addIdAndValue"];var Navigation=function Navigation(_ref){var className=_ref.className,items=_ref.items,children=_ref.children,dependencies=_ref.dependencies,idScope=_ref.idScope,addIdAndValue=_ref.addIdAndValue,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("nav",Object.assign({className:className},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:Navigation_module.rootList,children:/*#__PURE__*/(0,jsx_runtime.jsx)(CollectionBuilder/* Collection */.pM,{items:items,children:children,dependencies:dependencies,idScope:idScope,addIdAndValue:addIdAndValue})})}));};

/***/ },

/***/ 12089
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ NavigationItem)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/layout/src/sidebar/SidebarContext.tsx
var SidebarContext = __webpack_require__(16614);
;// ./packages/layout/src/navigation/navigation-item/NavigationItem.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const NavigationItem_module = ({"navigationItem":"navigationItem_i3Ha"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/navigation/navigation-item/NavigationItem.tsx
'use client';var _excluded=["className"];var NavigationItem=function NavigationItem(_ref){var _clsx;var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var sidebarContext=(0,react.useContext)(SidebarContext/* SidebarContext */.I);return/*#__PURE__*/(0,jsx_runtime.jsx)("li",Object.assign({className:(0,clsx/* default */.A)(className,NavigationItem_module.navigationItem,(_clsx={},_clsx[NavigationItem_module.collapsed]=sidebarContext==null?void 0:sidebarContext.isCollapsed,_clsx))},rest));};

/***/ },

/***/ 10550
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ NavigationLink)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var Link = __webpack_require__(73099);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusable.mjs
var useFocusable = __webpack_require__(28940);
// EXTERNAL MODULE: ./packages/components/src/tooltip/Tooltip.tsx + 1 modules
var Tooltip = __webpack_require__(93509);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
;// ./packages/layout/src/navigation/navigation-link/NavigationLink.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const NavigationLink_module = ({"navigationLink":"navigationLink_Q681","sidebar":"sidebar_A3L6","collapsed":"collapsed_ApWA","title":"title_iyJ5"});
// EXTERNAL MODULE: ./packages/layout/src/header/mobile-menu/MobileMenuContext.tsx
var MobileMenuContext = __webpack_require__(97757);
// EXTERNAL MODULE: ./packages/layout/src/sidebar/SidebarContext.tsx
var SidebarContext = __webpack_require__(16614);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/navigation/navigation-link/NavigationLink.tsx
'use client';var _excluded=["as","children","className","isActive","icon","aria-label"];var NavigationLink=function NavigationLink(_ref){var _clsx;var as=_ref.as,children=_ref.children,className=_ref.className,isActive=_ref.isActive,icon=_ref.icon,ariaLabel=_ref['aria-label'],rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var mobileMenuContext=(0,react.useContext)(MobileMenuContext/* MobileMenuContext */.x);var sidebarContext=(0,react.useContext)(SidebarContext/* SidebarContext */.I);var isCollapsed=sidebarContext==null?void 0:sidebarContext.isCollapsed;var ctx=(0,react.useContext)(Dialog/* OverlayTriggerStateContext */.RG);var Component=as||Link/* Link */.N;var toggle=function toggle(){if(ctx!=null&&ctx.isOpen){ctx==null||ctx.setOpen(false);}};var title=typeof children==='string'?children:undefined;if(!title&&!ariaLabel&&"production"!=='production')// removed by dead control flow
{}return/*#__PURE__*/(0,jsx_runtime.jsxs)(Tooltip/* TooltipTrigger */.k,{isDisabled:!isCollapsed||!title&&!ariaLabel,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(useFocusable/* Focusable */.zo,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,Object.assign({"aria-current":isActive&&'page',"aria-label":ariaLabel||(isCollapsed?title:undefined),className:(0,clsx/* clsx */.$)(className,NavigationLink_module.navigationLink,(_clsx={},_clsx[NavigationLink_module.sidebar]=sidebarContext||mobileMenuContext,_clsx[NavigationLink_module.collapsed]=isCollapsed,_clsx)),"data-active":isActive||undefined},as?{onClick:function onClick(e){toggle();rest.onClick==null||rest.onClick(e);}}:{onPress:function onPress(e){toggle();rest.onPress==null||rest.onPress(e);}},rest,{children:[icon,/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:NavigationLink_module.title,children:children})]}))}),/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* Tooltip */.m,{placement:"right",children:title})]});};

/***/ },

/***/ 16614
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ SidebarContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
'use client';var SidebarContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

/***/ },

/***/ 10855
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ useIsMobileDevice)
/* harmony export */ });
/* harmony import */ var _react_spectrum_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15886);
'use client';function useIsMobileDevice(){return (0,_react_spectrum_utils__WEBPACK_IMPORTED_MODULE_0__/* .useMediaQuery */ .U)('(max-width: 640px)');}

/***/ },

/***/ 49436
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Bell)
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
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("bell", __iconNode);


//# sourceMappingURL=bell.js.map


/***/ },

/***/ 91805
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ House)
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
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
];
const House = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("house", __iconNode);


//# sourceMappingURL=house.js.map


/***/ },

/***/ 8723
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LoaderCircle)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("loader-circle", __iconNode);


//# sourceMappingURL=loader-circle.js.map


/***/ },

/***/ 59644
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PanelLeftClose)
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
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
];
const PanelLeftClose = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("panel-left-close", __iconNode);


//# sourceMappingURL=panel-left-close.js.map


/***/ },

/***/ 69910
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PanelLeftOpen)
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
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
];
const PanelLeftOpen = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("panel-left-open", __iconNode);


//# sourceMappingURL=panel-left-open.js.map


/***/ },

/***/ 80964
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Settings)
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
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("settings", __iconNode);


//# sourceMappingURL=settings.js.map


/***/ },

/***/ 48686
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ User)
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
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("user", __iconNode);


//# sourceMappingURL=user.js.map


/***/ },

/***/ 15886
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ $3df547e395c4522f$export$32d5543ab307c01)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60415);



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

function $3df547e395c4522f$export$32d5543ab307c01(query) {
    let supportsMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia === 'function';
    let [matches, setMatches] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>supportsMatchMedia ? window.matchMedia(query).matches : false);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!supportsMatchMedia) return;
        let mq = window.matchMedia(query);
        let onChange = (evt)=>{
            setMatches(evt.matches);
        };
        mq.addListener(onChange);
        return ()=>{
            mq.removeListener(onChange);
        };
    }, [
        supportsMatchMedia,
        query
    ]);
    // If in SSR, the media query should never match. Once the page hydrates,
    // this will update and the real value will be returned.
    let isSSR = (0, _react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__/* .useIsSSR */ .wR)();
    return isSSR ? false : matches;
}



//# sourceMappingURL=useMediaQuery.module.js.map


/***/ },

/***/ 73099
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ $4f118338184dc1d9$export$a6c7ac8248d6e38a),
  s: () => (/* binding */ $4f118338184dc1d9$export$e2509388b49734e7)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/openLink.mjs
var openLink = __webpack_require__(43831);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusable.mjs
var useFocusable = __webpack_require__(28940);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/usePress.mjs + 6 modules
var usePress = __webpack_require__(35044);
;// ./node_modules/@react-aria/link/dist/useLink.mjs



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

function $298d61e98472621b$export$dcf14c9974fe2767(props, ref) {
    let { elementType: elementType = 'a', onPress: onPress, onPressStart: onPressStart, onPressEnd: onPressEnd, onClick: onClick, isDisabled: isDisabled, ...otherProps } = props;
    let linkProps = {};
    if (elementType !== 'a') linkProps = {
        role: 'link',
        tabIndex: !isDisabled ? 0 : undefined
    };
    let { focusableProps: focusableProps } = (0, useFocusable/* useFocusable */.Wc)(props, ref);
    let { pressProps: pressProps, isPressed: isPressed } = (0, usePress/* usePress */.d)({
        onPress: onPress,
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        onClick: onClick,
        isDisabled: isDisabled,
        ref: ref
    });
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(otherProps, {
        labelable: true
    });
    let interactionHandlers = (0, mergeProps/* mergeProps */.v)(focusableProps, pressProps);
    let router = (0, openLink/* useRouter */.rd)();
    let routerLinkProps = (0, openLink/* useLinkProps */._h)(props);
    return {
        isPressed: isPressed,
        linkProps: (0, mergeProps/* mergeProps */.v)(domProps, routerLinkProps, {
            ...interactionHandlers,
            ...linkProps,
            'aria-disabled': isDisabled || undefined,
            'aria-current': props['aria-current'],
            onClick: (e)=>{
                var _pressProps_onClick;
                (_pressProps_onClick = pressProps.onClick) === null || _pressProps_onClick === void 0 ? void 0 : _pressProps_onClick.call(pressProps, e);
                (0, openLink/* handleLinkClick */.PJ)(e, router, props.href, props.routerOptions);
            }
        })
    };
}



//# sourceMappingURL=useLink.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria-components/dist/Link.mjs





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



const $4f118338184dc1d9$export$e2509388b49734e7 = /*#__PURE__*/ (0, react.createContext)(null);
const $4f118338184dc1d9$export$a6c7ac8248d6e38a = /*#__PURE__*/ (0, react.forwardRef)(function Link(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $4f118338184dc1d9$export$e2509388b49734e7);
    let elementType = props.href && !props.isDisabled ? 'a' : 'span';
    let { linkProps: linkProps, isPressed: isPressed } = (0, $298d61e98472621b$export$dcf14c9974fe2767)({
        ...props,
        elementType: elementType
    }, ref);
    let ElementType = (0, utils/* dom */.tT)[elementType];
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* useHover */.M)(props);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)();
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-Link',
        values: {
            isCurrent: !!props['aria-current'],
            isDisabled: props.isDisabled || false,
            isPressed: isPressed,
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible
        }
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, react).createElement(ElementType, {
        ref: ref,
        slot: props.slot || undefined,
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, linkProps, hoverProps, focusProps),
        "data-focused": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-pressed": isPressed || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-current": !!props['aria-current'] || undefined,
        "data-disabled": props.isDisabled || undefined
    }, renderProps.children);
});



//# sourceMappingURL=Link.module.js.map


/***/ }

}]);