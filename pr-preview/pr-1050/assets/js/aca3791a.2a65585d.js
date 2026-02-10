"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6253],{

/***/ 1328
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ MenuItem)
/* harmony export */ });
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1160);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6484);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45773);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87677);
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77121);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
var MenuItem=function MenuItem(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_1__/* .MenuItem */ .Dr,Object.assign({},props,{textValue:props.textValue||(typeof props.children==='string'?props.children:undefined),className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.menuItem,props.className),children:function children(renderProps){var children=props.children;var selectionMode=renderProps.selectionMode,isSelected=renderProps.isSelected,hasSubmenu=renderProps.hasSubmenu;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[selectionMode!=='none'&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{size:16,className:_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.checkMark,"data-selected":isSelected||undefined}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.mainContent,children:typeof children==='function'?children(renderProps):children}),hasSubmenu&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{size:20})]});}}));};

/***/ },

/***/ 10225
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ Breadcrumbs)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57214);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1160);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25441);
/* harmony import */ var _Breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90305);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
var _excluded=["className"],_excluded2=["items"];/** @deprecated since v16.6.3 Use the compound `<Breadcrumbs>` + `<Breadcrumb>` API instead. */function isDeprecatedUsage(props){if(!('items'in props)||!Array.isArray(props.items))return false;if(props.children!=null&&typeof props.children==='function')return false;var first=props.items[0];return first!=null&&'href'in first&&'title'in first;}var Breadcrumbs=function Breadcrumbs(_ref){var className=_ref.className,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref,_excluded);if(isDeprecatedUsage(rest)){if(false)// removed by dead control flow
{}var items=rest.items,ariaProps=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(rest,_excluded2);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_1__/* .Breadcrumbs */ .BI,Object.assign({className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_Breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.container,className)},ariaProps,{children:items.map(function(_ref2,index){var title=_ref2.title,href=_ref2.href,isDisabled=_ref2.isDisabled;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_1__/* .Breadcrumb */ .Qp,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_link__WEBPACK_IMPORTED_MODULE_3__/* .Link */ .N,{href:href,isDisabled:isDisabled,children:title})},title.toLocaleLowerCase()+index);})}));}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_1__/* .Breadcrumbs */ .BI,Object.assign({className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_Breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.container,className)},rest));};

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

/***/ 25441
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ Link)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/link/Link.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Link_module = ({"link":"link_RCbb","icon":"icon_Bxuv","standalone":"standalone_Cg9F","stretched":"stretched_pvQw"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var dist_Link = __webpack_require__(73099);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js
var arrow_down_to_line = __webpack_require__(69750);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
var square_arrow_out_up_right = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/link/Link.tsx
'use client';var _excluded=["children","standalone","target","stretched","download","icon","className","as"],_excluded2=["icon"];var Link=function Link(_ref){var children=_ref.children,standalone=_ref.standalone,target=_ref.target,stretched=_ref.stretched,download=_ref.download,customIcon=_ref.icon,className=_ref.className,as=_ref.as,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||dist_Link/* Link */.N;var getIcon=function getIcon(){if(customIcon)return customIcon;if(download)return arrow_down_to_line/* default */.A;if(target==='_blank')return square_arrow_out_up_right/* default */.A;if(standalone)return arrow_right/* default */.A;return null;};var icon=getIcon();return/*#__PURE__*/(0,jsx_runtime.jsx)(Component,Object.assign({className:(0,clsx/* default */.A)(Link_module.link,standalone&&Link_module.standalone,stretched&&Link_module.stretched,className)},rest,{target:target,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children,icon?/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{className:Link_module.icon,icon:icon,size:16}):null]})}));};var Icon=function Icon(_ref2){var IconComponent=_ref2.icon,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,Object.assign({},rest));};

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

/***/ 38739
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container_uCKZ","removeMargins":"removeMargins_rQ9U","contained":"contained_R9lB","flex":"flex_LQ20","fluid":"fluid_Y1tE","col":"col_tmG6","col-1":"col-1_OVvW","col-2":"col-2_XfVI","col-3":"col-3_KxqE","col-quarter":"col-quarter_eUut","col-4":"col-4_Ovxr","col-third":"col-third_FUaF","col-5":"col-5_uIyd","col-6":"col-6_i8WR","col-half":"col-half_GzSn","col-7":"col-7_devX","col-8":"col-8_tlAZ","col-9":"col-9_Nbjm","col-10":"col-10_rwyP","col-11":"col-11_ShOw","col-12":"col-12_eQeJ","col-full":"col-full_K_XT","col-auto":"col-auto_nMhH","col-grow":"col-grow_TBON","col-xs-1":"col-xs-1_Bg_O","col-xs-2":"col-xs-2_UhmL","col-xs-3":"col-xs-3_mEvh","col-xs-quarter":"col-xs-quarter_mtoI","col-xs-4":"col-xs-4_Uv5i","col-xs-third":"col-xs-third_AHrM","col-xs-5":"col-xs-5_Gdnm","col-xs-6":"col-xs-6_z366","col-xs-half":"col-xs-half_vH6m","col-xs-7":"col-xs-7_HNwO","col-xs-8":"col-xs-8_Vwih","col-xs-9":"col-xs-9_vfTc","col-xs-10":"col-xs-10_wJWt","col-xs-11":"col-xs-11_KTEA","col-xs-12":"col-xs-12_TaE_","col-xs-full":"col-xs-full_enWi","col-xs-auto":"col-xs-auto_G2jj","col-xs-grow":"col-xs-grow_kY1W","col-sm-1":"col-sm-1_YvIs","col-sm-2":"col-sm-2_NSCq","col-sm-3":"col-sm-3_cJ0H","col-sm-quarter":"col-sm-quarter_WWBJ","col-sm-4":"col-sm-4_dtZx","col-sm-third":"col-sm-third_g3dG","col-sm-5":"col-sm-5_C87q","col-sm-6":"col-sm-6_SkMd","col-sm-half":"col-sm-half_QX4f","col-sm-7":"col-sm-7_wa6s","col-sm-8":"col-sm-8_zH5I","col-sm-9":"col-sm-9_ym4Z","col-sm-10":"col-sm-10_jE4j","col-sm-11":"col-sm-11_Va2g","col-sm-12":"col-sm-12_BgjD","col-sm-full":"col-sm-full_Nb6O","col-sm-auto":"col-sm-auto_Qj4m","col-sm-grow":"col-sm-grow_mAH5","col-md-1":"col-md-1_Zeqd","col-md-2":"col-md-2_DR6K","col-md-3":"col-md-3_OZK7","col-md-quarter":"col-md-quarter_AmxM","col-md-4":"col-md-4_NxEu","col-md-third":"col-md-third_J4Ja","col-md-5":"col-md-5_cBkY","col-md-6":"col-md-6_it5t","col-md-half":"col-md-half_aEv_","col-md-7":"col-md-7__sAT","col-md-8":"col-md-8_WfW7","col-md-9":"col-md-9_orzQ","col-md-10":"col-md-10_wh5t","col-md-11":"col-md-11_Wsgq","col-md-12":"col-md-12_gZQg","col-md-full":"col-md-full_Ow4Z","col-md-auto":"col-md-auto_e67j","col-md-grow":"col-md-grow_quHq","col-lg-1":"col-lg-1_e1au","col-lg-2":"col-lg-2_fUsj","col-lg-3":"col-lg-3_EhhM","col-lg-quarter":"col-lg-quarter_SI9I","col-lg-4":"col-lg-4_VuKz","col-lg-third":"col-lg-third_Lf2A","col-lg-5":"col-lg-5_TF5r","col-lg-6":"col-lg-6_E93v","col-lg-half":"col-lg-half_ZdoE","col-lg-7":"col-lg-7_L5CO","col-lg-8":"col-lg-8_ZBHN","col-lg-9":"col-lg-9_TbUu","col-lg-10":"col-lg-10_Tsqu","col-lg-11":"col-lg-11_Eg8x","col-lg-12":"col-lg-12_eNvi","col-lg-full":"col-lg-full_SaRE","col-lg-auto":"col-lg-auto_fNRO","col-lg-grow":"col-lg-grow_XTrt","col-xl-1":"col-xl-1_BRna","col-xl-2":"col-xl-2_eGSK","col-xl-3":"col-xl-3_RrW2","col-xl-quarter":"col-xl-quarter_V_Yw","col-xl-4":"col-xl-4_R4AZ","col-xl-third":"col-xl-third_W3hT","col-xl-5":"col-xl-5_k7Gx","col-xl-6":"col-xl-6_xZyb","col-xl-half":"col-xl-half_V9xE","col-xl-7":"col-xl-7_lJfg","col-xl-8":"col-xl-8_zErQ","col-xl-9":"col-xl-9_oYwQ","col-xl-10":"col-xl-10_cLTa","col-xl-11":"col-xl-11_xqWK","col-xl-12":"col-xl-12_Vrsf","col-xl-full":"col-xl-full_vVSm","col-xl-auto":"col-xl-auto_YBap","col-xl-grow":"col-xl-grow_YMBn","offset-1":"offset-1_ZQkJ","offset-2":"offset-2_Reek","offset-3":"offset-3_SDkl","offset-quarter":"offset-quarter_ho5e","offset-4":"offset-4_L0XB","offset-third":"offset-third_dE8e","offset-5":"offset-5_Mz95","offset-6":"offset-6_Zp68","offset-half":"offset-half_nGtc","offset-7":"offset-7_ZApX","offset-8":"offset-8_UZTZ","offset-9":"offset-9_FiKS","offset-10":"offset-10_hN9R","offset-11":"offset-11_cqgv","offset-auto":"offset-auto_ZBrI","offset-xs-1":"offset-xs-1__ZrT","offset-xs-2":"offset-xs-2_WySR","offset-xs-3":"offset-xs-3_u9Tb","offset-xs-quarter":"offset-xs-quarter_Pd1o","offset-xs-4":"offset-xs-4_Bibg","offset-xs-third":"offset-xs-third_CeeW","offset-xs-5":"offset-xs-5_OgED","offset-xs-6":"offset-xs-6_ihSu","offset-xs-half":"offset-xs-half_Vrdz","offset-xs-7":"offset-xs-7_TtZQ","offset-xs-8":"offset-xs-8_Ftc2","offset-xs-9":"offset-xs-9_HptZ","offset-xs-10":"offset-xs-10_umjb","offset-xs-11":"offset-xs-11_Suix","offset-xs-auto":"offset-xs-auto_fxe8","offset-sm-1":"offset-sm-1_knSM","offset-sm-2":"offset-sm-2_zWxo","offset-sm-3":"offset-sm-3_oqp6","offset-sm-quarter":"offset-sm-quarter_Nav1","offset-sm-4":"offset-sm-4_EvUX","offset-sm-third":"offset-sm-third_tGgh","offset-sm-5":"offset-sm-5_raNi","offset-sm-6":"offset-sm-6_KTA8","offset-sm-half":"offset-sm-half_ab81","offset-sm-7":"offset-sm-7_duQl","offset-sm-8":"offset-sm-8_uRxp","offset-sm-9":"offset-sm-9_AqYl","offset-sm-10":"offset-sm-10_Wt6J","offset-sm-11":"offset-sm-11_yAYq","offset-sm-auto":"offset-sm-auto_FAp6","offset-md-1":"offset-md-1_OpgB","offset-md-2":"offset-md-2_U24n","offset-md-3":"offset-md-3_YxnQ","offset-md-quarter":"offset-md-quarter_y53T","offset-md-4":"offset-md-4_ZaOC","offset-md-third":"offset-md-third_HZWP","offset-md-5":"offset-md-5_KVFL","offset-md-6":"offset-md-6_bZvL","offset-md-half":"offset-md-half_yilA","offset-md-7":"offset-md-7_fs04","offset-md-8":"offset-md-8_QmYF","offset-md-9":"offset-md-9_QoVc","offset-md-10":"offset-md-10_OrE0","offset-md-11":"offset-md-11_reKz","offset-md-auto":"offset-md-auto_ETdh","offset-lg-1":"offset-lg-1_zi3j","offset-lg-2":"offset-lg-2_YgjU","offset-lg-3":"offset-lg-3_CHdw","offset-lg-quarter":"offset-lg-quarter_Chor","offset-lg-4":"offset-lg-4_NOCF","offset-lg-third":"offset-lg-third_LTbL","offset-lg-5":"offset-lg-5_dGzM","offset-lg-6":"offset-lg-6_kXXi","offset-lg-half":"offset-lg-half_vFHN","offset-lg-7":"offset-lg-7_jIth","offset-lg-8":"offset-lg-8_T0Jx","offset-lg-9":"offset-lg-9_mYmL","offset-lg-10":"offset-lg-10_clJ6","offset-lg-11":"offset-lg-11_zFW2","offset-lg-auto":"offset-lg-auto_W3q4","offset-xl-1":"offset-xl-1_pRWH","offset-xl-2":"offset-xl-2_FX3q","offset-xl-3":"offset-xl-3_P8xx","offset-xl-quarter":"offset-xl-quarter_RLTy","offset-xl-4":"offset-xl-4_n7Vy","offset-xl-third":"offset-xl-third_w0fc","offset-xl-5":"offset-xl-5_vC_8","offset-xl-6":"offset-xl-6_BvQ2","offset-xl-half":"offset-xl-half_HQ16","offset-xl-7":"offset-xl-7_m1bv","offset-xl-8":"offset-xl-8_FJ1u","offset-xl-9":"offset-xl-9_oAbC","offset-xl-10":"offset-xl-10_wwaH","offset-xl-11":"offset-xl-11_HpDF","offset-xl-auto":"offset-xl-auto_Dv5P"});

/***/ },

/***/ 44628
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ Breadcrumb)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57214);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1160);
/* harmony import */ var _Breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90305);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
var _excluded=["className","children"];var Breadcrumb=function Breadcrumb(_ref){var className=_ref.className,_children=_ref.children,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_1__/* .Breadcrumb */ .Qp,Object.assign({className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(className)},rest,{children:function children(renderProps){var showSeparator=!renderProps.isCurrent;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[typeof _children==='function'?_children(renderProps):_children,showSeparator?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{"aria-hidden":"true",className:_Breadcrumbs_module_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.separator,children:"/"}):null]});}}));};

/***/ },

/***/ 45644
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ AccordionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var AccordionContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

/***/ },

/***/ 51523
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DynamicExample: () => (/* binding */ DynamicExample),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_breadcrumbs_mdx_aca_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-breadcrumbs-mdx-aca.json
const site_docs_components_breadcrumbs_mdx_aca_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/breadcrumbs","title":"Breadcrumbs","description":"Brödsmulor används för att visa användaren vart hen är i ett navigationsträd.","source":"@site/docs/components/breadcrumbs.mdx","sourceDirName":"components","slug":"/components/breadcrumbs","permalink":"/pr-preview/pr-1050/components/breadcrumbs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Breadcrumbs","description":"Brödsmulor används för att visa användaren vart hen är i ett navigationsträd."},"sidebar":"sideBar","previous":{"title":"Badge","permalink":"/pr-preview/pr-1050/components/badge"},"next":{"title":"Button","permalink":"/pr-preview/pr-1050/components/button"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(68713);
// EXTERNAL MODULE: ./packages/components/src/breadcrumbs/Breadcrumbs.tsx
var Breadcrumbs = __webpack_require__(10225);
// EXTERNAL MODULE: ./packages/components/src/breadcrumbs/Breadcrumb.tsx
var Breadcrumb = __webpack_require__(44628);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var Link = __webpack_require__(25441);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Menu.mjs + 7 modules
var Menu = __webpack_require__(6484);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/menu/MenuPopover.tsx
var MenuPopover = __webpack_require__(51950);
// EXTERNAL MODULE: ./packages/components/src/menu/Menu.tsx
var menu_Menu = __webpack_require__(86401);
// EXTERNAL MODULE: ./packages/components/src/menu/MenuItem.tsx
var MenuItem = __webpack_require__(1328);
;// ./apps/docs/src/components/examples/breadcrumbs/BreadcrumbsExamples.tsx
var CollapsedBreadcrumbsExample=function CollapsedBreadcrumbsExample(){var handleAction=function handleAction(id){return console.log('Navigera till:',id);};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Breadcrumbs/* Breadcrumbs */.B,{onAction:handleAction,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Breadcrumb/* Breadcrumb */.Q,{id:"start",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* Link */.N,{children:"Start"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Breadcrumb/* Breadcrumb */.Q,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Menu/* MenuTrigger */.cQ,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{"aria-label":"Fler br\xF6dsmulor",style:{minWidth:'auto',padding:0,height:'auto'},variant:"icon",children:"\u2026"}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuPopover/* MenuPopover */.b,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(menu_Menu/* Menu */.W,{onAction:handleAction,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* MenuItem */.D,{id:"produkter",children:"Produkter"}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* MenuItem */.D,{id:"kategori",children:"Kategori"}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* MenuItem */.D,{id:"underkategori",children:"Underkategori"})]})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Breadcrumb/* Breadcrumb */.Q,{id:"artikel",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* Link */.N,{children:"Artikel"})})]})});};
;// ./apps/docs/docs/components/breadcrumbs.mdx


const frontMatter = {
	title: 'Breadcrumbs',
	description: 'Brödsmulor används för att visa användaren vart hen är i ett navigationsträd.'
};
const contentTitle = undefined;

const assets = {

};







const DynamicExample = () => {
  const items = [{
    id: 1,
    label: 'Start'
  }, {
    id: 2,
    label: 'Du vill förlänga'
  }, {
    id: 3,
    label: 'Studera'
  }];
  return (0,jsx_runtime.jsx)(Breadcrumbs/* Breadcrumbs */.B, {
    items: items,
    children: item => (0,jsx_runtime.jsx)(Breadcrumb/* Breadcrumb */.Q, {
      id: item.id,
      children: (0,jsx_runtime.jsx)(Link/* Link */.N, {
        href: "#",
        children: item.label
      })
    })
  });
};
const toc = [{
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "Inaktiverad länk",
  "id": "inaktiverad-länk",
  "level": 3
}, {
  "value": "Dynamiskt innehåll",
  "id": "dynamiskt-innehåll",
  "level": 3
}, {
  "value": "onAction",
  "id": "onaction",
  "level": 3
}, {
  "value": "Kollapsade brödsmulor",
  "id": "kollapsade-brödsmulor",
  "level": 3
}, {
  "value": "Tillgänglighet",
  "id": "tillgänglighet",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Breadcrumbs",
  "id": "breadcrumbs",
  "level": 3
}, {
  "value": "Breadcrumb",
  "id": "breadcrumb",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: "Breadcrumbs",
      friendlyName: "Brödsmulor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponent som används för att visa användaren var den är i ett navigationsträd."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Breadcrumbs, Breadcrumb, Link } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Breadcrumbs>\n  <Breadcrumb>\n    <Link href='/'>Start</Link>\n  </Breadcrumb>\n  <Breadcrumb>\n    <Link href='/du-vill-forlanga'>Du vill förlänga</Link>\n  </Breadcrumb>\n  <Breadcrumb>\n    <Link href='/du-vill-forlanga/studera'>Studera</Link>\n  </Breadcrumb>\n</Breadcrumbs>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(Breadcrumbs/* Breadcrumbs */.B, {
        children: [(0,jsx_runtime.jsx)(Breadcrumb/* Breadcrumb */.Q, {
          children: (0,jsx_runtime.jsx)(Link/* Link */.N, {
            href: "#",
            children: "Start"
          })
        }), (0,jsx_runtime.jsx)(Breadcrumb/* Breadcrumb */.Q, {
          children: (0,jsx_runtime.jsx)(Link/* Link */.N, {
            href: "#",
            children: "Du vill förlänga"
          })
        }), (0,jsx_runtime.jsx)(Breadcrumb/* Breadcrumb */.Q, {
          children: (0,jsx_runtime.jsx)(Link/* Link */.N, {
            href: "#",
            children: "Studera"
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inaktiverad-länk",
      children: "Inaktiverad länk"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sätt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isDisabled"
      }), " på ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Link"
      }), " för att inaktivera en enskild brödsmula."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Breadcrumbs>\n  <Breadcrumb>\n    <Link href='/'>Start</Link>\n  </Breadcrumb>\n  <Breadcrumb>\n    <Link\n      href='/du-vill-forlanga'\n      isDisabled\n    >\n      Du vill förlänga\n    </Link>\n  </Breadcrumb>\n  <Breadcrumb>\n    <Link href='/du-vill-forlanga/studera'>Studera</Link>\n  </Breadcrumb>\n</Breadcrumbs>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(Breadcrumbs/* Breadcrumbs */.B, {
        children: [(0,jsx_runtime.jsx)(Breadcrumb/* Breadcrumb */.Q, {
          children: (0,jsx_runtime.jsx)(Link/* Link */.N, {
            href: "#",
            children: "Start"
          })
        }), (0,jsx_runtime.jsx)(Breadcrumb/* Breadcrumb */.Q, {
          children: (0,jsx_runtime.jsx)(Link/* Link */.N, {
            href: "#",
            isDisabled: true,
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Du vill förlänga"
            })
          })
        }), (0,jsx_runtime.jsx)(Breadcrumb/* Breadcrumb */.Q, {
          children: (0,jsx_runtime.jsx)(Link/* Link */.N, {
            href: "#",
            children: "Studera"
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dynamiskt-innehåll",
      children: "Dynamiskt innehåll"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "items"
      }), " tillsammans med en render-funktion för att rendera brödsmulor från dynamisk data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "const items = [\n  { id: 1, label: 'Start' },\n  { id: 2, label: 'Du vill förlänga' },\n  { id: 3, label: 'Studera' },\n]\n\n<Breadcrumbs items={items}>\n  {(item) => (\n    <Breadcrumb id={item.id}>\n      <Link href=\"#\">{item.label}</Link>\n    </Breadcrumb>\n  )}\n</Breadcrumbs>\n"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(DynamicExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onaction",
      children: "onAction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onAction"
      }), " på ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Breadcrumbs"
      }), " för att själv hantera interaktionen. Callbacken tar emot ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), " för den klickade brödsmulan."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Breadcrumbs onAction={id => console.log(id)}>\n  <Breadcrumb id='start'>Start</Breadcrumb>\n  <Breadcrumb id='forlanga'>Du vill förlänga</Breadcrumb>\n  <Breadcrumb id='studera'>Studera</Breadcrumb>\n</Breadcrumbs>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kollapsade-brödsmulor",
      children: "Kollapsade brödsmulor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vid djupa navigationsträd kan det vara lämpligt att dölja mellanliggande brödsmulor bakom en ellipsis-meny. Här är ett exempel på hur detta kan implementeras:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import type { Key } from 'react-aria-components'\nimport {\n  Breadcrumbs,\n  Breadcrumb,\n  Link,\n  Button,\n  Menu,\n  MenuItem,\n  MenuPopover,\n  MenuTrigger,\n} from '@midas-ds/components'\n\nexport const CollapsedBreadcrumbs = () => {\n  const handleAction = (id: Key) => console.log('Navigera till:', id)\n\n  return (\n    <Breadcrumbs onAction={handleAction}>\n      <Breadcrumb id='start'>\n        <Link>Start</Link>\n      </Breadcrumb>\n      <Breadcrumb>\n        <MenuTrigger>\n          <Button\n            aria-label='Fler brödsmulor'\n            style={{ minWidth: 'auto', padding: 0, height: 'auto' }}\n            variant='icon'\n          >\n            …\n          </Button>\n          <MenuPopover>\n            <Menu onAction={handleAction}>\n              <MenuItem id='produkter'>Produkter</MenuItem>\n              <MenuItem id='kategori'>Kategori</MenuItem>\n              <MenuItem id='underkategori'>Underkategori</MenuItem>\n            </Menu>\n          </MenuPopover>\n        </MenuTrigger>\n      </Breadcrumb>\n      <Breadcrumb id='artikel'>\n        <Link>Artikel</Link>\n      </Breadcrumb>\n    </Breadcrumbs>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(CollapsedBreadcrumbsExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tillgänglighet",
      children: "Tillgänglighet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "Navigationslandmärke",
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["När brödsmulor används som huvudnavigation på en sida bör de placeras i ett ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<nav>"
        }), "-element med ett beskrivande ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aria-label"
        }), ". Detta skapar ett navigationslandmärke som hjälper användare med hjälpmedel att snabbt hitta till rätt del av sidan."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "<nav aria-label='Brödsmulor'>\n  <Breadcrumbs>\n    <Breadcrumb>\n      <Link href='/'>Start</Link>\n    </Breadcrumb>\n    <Breadcrumb>\n      <Link href='/om'>Om oss</Link>\n    </Breadcrumb>\n  </Breadcrumbs>\n</nav>\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "breadcrumbs",
      children: "Breadcrumbs"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "Breadcrumbs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "breadcrumb",
      children: "Breadcrumb"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "Breadcrumb"
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

/***/ 51950
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ MenuPopover)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1160);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21416);
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77121);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
var _excluded=["className"];var MenuPopover=function MenuPopover(_ref){var className=_ref.className,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_2__/* .Popover */ .A,Object.assign({className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(className,_Menu_module_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.menuPopover),offset:4},rest));};

/***/ },

/***/ 56636
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ LinkButton)
});

// UNUSED EXPORTS: RouterProvider

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
'use client';var _excluded=["children","variant","fullwidth","icon","iconPlacement","className","as","size"],_excluded2=["icon"];/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */var LinkButton=function LinkButton(_ref){var children=_ref.children,variant=_ref.variant,fullwidth=_ref.fullwidth,customIcon=_ref.icon,iconPlacement=_ref.iconPlacement,className=_ref.className,as=_ref.as,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||Link/* Link */.N;var getIcon=function getIcon(){if(customIcon)return customIcon;if(rest.target==='_blank')return square_arrow_out_up_right/* default */.A;if(iconPlacement==='left')return arrow_left/* default */.A;return arrow_right/* default */.A;};var icon=getIcon();return/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,Object.assign({className:(0,clsx/* default */.A)(LinkButton_module.linkButton,variant==='primary'&&LinkButton_module.primary,variant==='secondary'&&LinkButton_module.secondary,variant==='tertiary'&&LinkButton_module.tertiary,variant==='danger'&&LinkButton_module.danger,variant==='icon'&&LinkButton_module.iconBtn,size==='medium'&&LinkButton_module.medium,fullwidth&&LinkButton_module.fullwidth,iconPlacement==='left'&&LinkButton_module.iconLeft,className)},rest,{children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{className:LinkButton_module.icon,icon:icon,size:20})]}));};var Icon=function Icon(_ref2){var IconComponent=_ref2.icon,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,Object.assign({},rest));};

/***/ },

/***/ 57214
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Qp: () => (/* binding */ $778035c5624f61e7$export$dabcc1ec9dd9d1cc),
  BI: () => (/* binding */ $778035c5624f61e7$export$2dc68d50d56fbbd)
});

// UNUSED EXPORTS: BreadcrumbsContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Collection.mjs
var Collection = __webpack_require__(64606);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var Link = __webpack_require__(73099);
;// ./node_modules/@react-aria/breadcrumbs/dist/ar-AE.mjs
var $b91590b2dc47de39$exports = {};
$b91590b2dc47de39$exports = {
    "breadcrumbs": `\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{648}\u{627}\u{62C}\u{647}\u{629}`
};



//# sourceMappingURL=ar-AE.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/bg-BG.mjs
var $55b0693b2cf3fe91$exports = {};
$55b0693b2cf3fe91$exports = {
    "breadcrumbs": `\u{422}\u{440}\u{43E}\u{445}\u{438} \u{445}\u{43B}\u{44F}\u{431}`
};



//# sourceMappingURL=bg-BG.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/cs-CZ.mjs
var $6ec1ed7729e948cc$exports = {};
$6ec1ed7729e948cc$exports = {
    "breadcrumbs": `Popis cesty`
};



//# sourceMappingURL=cs-CZ.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/da-DK.mjs
var $5a41bb2baa6861e4$exports = {};
$5a41bb2baa6861e4$exports = {
    "breadcrumbs": `Br\xf8dkrummer`
};



//# sourceMappingURL=da-DK.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/de-DE.mjs
var $f28bbea439e87eca$exports = {};
$f28bbea439e87eca$exports = {
    "breadcrumbs": `Breadcrumbs`
};



//# sourceMappingURL=de-DE.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/el-GR.mjs
var $b3eca51cb720961a$exports = {};
$b3eca51cb720961a$exports = {
    "breadcrumbs": `\u{3A0}\u{3BB}\u{3BF}\u{3B7}\u{3B3}\u{3AE}\u{3C3}\u{3B5}\u{3B9}\u{3C2} breadcrumb`
};



//# sourceMappingURL=el-GR.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/en-US.mjs
var $0b39b205118db415$exports = {};
$0b39b205118db415$exports = {
    "breadcrumbs": `Breadcrumbs`
};



//# sourceMappingURL=en-US.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/es-ES.mjs
var $f467c0ee7bfb0950$exports = {};
$f467c0ee7bfb0950$exports = {
    "breadcrumbs": `Migas de pan`
};



//# sourceMappingURL=es-ES.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/et-EE.mjs
var $ab711d2ffb4cdf3d$exports = {};
$ab711d2ffb4cdf3d$exports = {
    "breadcrumbs": `Lingiread`
};



//# sourceMappingURL=et-EE.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/fi-FI.mjs
var $b63105d663e6f9d5$exports = {};
$b63105d663e6f9d5$exports = {
    "breadcrumbs": `Navigointilinkit`
};



//# sourceMappingURL=fi-FI.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/fr-FR.mjs
var $9d2ed7be7fcdc2a1$exports = {};
$9d2ed7be7fcdc2a1$exports = {
    "breadcrumbs": `Chemin de navigation`
};



//# sourceMappingURL=fr-FR.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/he-IL.mjs
var $c5704294d85c7b5d$exports = {};
$c5704294d85c7b5d$exports = {
    "breadcrumbs": `\u{5E9}\u{5D1}\u{5D9}\u{5DC}\u{5D9} \u{5E0}\u{5D9}\u{5D5}\u{5D5}\u{5D8}`
};



//# sourceMappingURL=he-IL.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/hr-HR.mjs
var $20c975671d6bbc63$exports = {};
$20c975671d6bbc63$exports = {
    "breadcrumbs": `Navigacijski putovi`
};



//# sourceMappingURL=hr-HR.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/hu-HU.mjs
var $2569ca3917233115$exports = {};
$2569ca3917233115$exports = {
    "breadcrumbs": `Morzsamen\xfc`
};



//# sourceMappingURL=hu-HU.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/it-IT.mjs
var $caa152f7f8e96c85$exports = {};
$caa152f7f8e96c85$exports = {
    "breadcrumbs": `Breadcrumb`
};



//# sourceMappingURL=it-IT.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/ja-JP.mjs
var $cbc6af0cc98fad10$exports = {};
$cbc6af0cc98fad10$exports = {
    "breadcrumbs": `\u{30D1}\u{30F3}\u{304F}\u{305A}\u{30EA}\u{30B9}\u{30C8}`
};



//# sourceMappingURL=ja-JP.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/ko-KR.mjs
var $ad9be5d332b4d607$exports = {};
$ad9be5d332b4d607$exports = {
    "breadcrumbs": `\u{D0D0}\u{C0C9} \u{D45C}\u{C2DC}`
};



//# sourceMappingURL=ko-KR.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/lt-LT.mjs
var $659de19a00ff9617$exports = {};
$659de19a00ff9617$exports = {
    "breadcrumbs": `Nar\u{161}ymo kelias`
};



//# sourceMappingURL=lt-LT.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/lv-LV.mjs
var $173e9fb4d14fe309$exports = {};
$173e9fb4d14fe309$exports = {
    "breadcrumbs": `Atpaka\u{13C}ce\u{13C}i`
};



//# sourceMappingURL=lv-LV.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/nb-NO.mjs
var $d8e2640a066567a9$exports = {};
$d8e2640a066567a9$exports = {
    "breadcrumbs": `Navigasjonsstier`
};



//# sourceMappingURL=nb-NO.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/nl-NL.mjs
var $d71fd764236c0d12$exports = {};
$d71fd764236c0d12$exports = {
    "breadcrumbs": `Broodkruimels`
};



//# sourceMappingURL=nl-NL.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/pl-PL.mjs
var $f4ad3faf9f4aaec6$exports = {};
$f4ad3faf9f4aaec6$exports = {
    "breadcrumbs": `Struktura nawigacyjna`
};



//# sourceMappingURL=pl-PL.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/pt-BR.mjs
var $9703be9d55d8e9c2$exports = {};
$9703be9d55d8e9c2$exports = {
    "breadcrumbs": `Caminho detalhado`
};



//# sourceMappingURL=pt-BR.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/pt-PT.mjs
var $7e23baec8a14f309$exports = {};
$7e23baec8a14f309$exports = {
    "breadcrumbs": `Categorias`
};



//# sourceMappingURL=pt-PT.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/ro-RO.mjs
var $568f95594049d56e$exports = {};
$568f95594049d56e$exports = {
    "breadcrumbs": `Miez de p\xe2ine`
};



//# sourceMappingURL=ro-RO.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/ru-RU.mjs
var $625df06cecc70764$exports = {};
$625df06cecc70764$exports = {
    "breadcrumbs": `\u{41D}\u{430}\u{432}\u{438}\u{433}\u{430}\u{446}\u{438}\u{44F}`
};



//# sourceMappingURL=ru-RU.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/sk-SK.mjs
var $b5a67525f3a2f594$exports = {};
$b5a67525f3a2f594$exports = {
    "breadcrumbs": `Naviga\u{10D}n\xe9 prvky Breadcrumbs`
};



//# sourceMappingURL=sk-SK.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/sl-SI.mjs
var $16125922964febca$exports = {};
$16125922964febca$exports = {
    "breadcrumbs": `Drobtine`
};



//# sourceMappingURL=sl-SI.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/sr-SP.mjs
var $de104bf355206bcf$exports = {};
$de104bf355206bcf$exports = {
    "breadcrumbs": `Putanje navigacije`
};



//# sourceMappingURL=sr-SP.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/sv-SE.mjs
var $d5ab76bcbadc9c07$exports = {};
$d5ab76bcbadc9c07$exports = {
    "breadcrumbs": `S\xf6kv\xe4gar`
};



//# sourceMappingURL=sv-SE.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/tr-TR.mjs
var $a6a1af5968159b55$exports = {};
$a6a1af5968159b55$exports = {
    "breadcrumbs": `\u{130}\xe7erik haritalar\u{131}`
};



//# sourceMappingURL=tr-TR.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/uk-UA.mjs
var $5204a30f0d17ffec$exports = {};
$5204a30f0d17ffec$exports = {
    "breadcrumbs": `\u{41D}\u{430}\u{432}\u{456}\u{433}\u{430}\u{446}\u{456}\u{439}\u{43D}\u{430} \u{441}\u{442}\u{435}\u{436}\u{43A}\u{430}`
};



//# sourceMappingURL=uk-UA.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/zh-CN.mjs
var $8d15e736e12d3dfd$exports = {};
$8d15e736e12d3dfd$exports = {
    "breadcrumbs": `\u{5BFC}\u{822A}\u{680F}`
};



//# sourceMappingURL=zh-CN.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/zh-TW.mjs
var $f8c49dd804b75140$exports = {};
$f8c49dd804b75140$exports = {
    "breadcrumbs": `\u{5C0E}\u{89BD}\u{5217}`
};



//# sourceMappingURL=zh-TW.module.js.map

;// ./node_modules/@react-aria/breadcrumbs/dist/intlStrings.mjs



































var $8229b34715874f89$exports = {};


































$8229b34715874f89$exports = {
    "ar-AE": $b91590b2dc47de39$exports,
    "bg-BG": $55b0693b2cf3fe91$exports,
    "cs-CZ": $6ec1ed7729e948cc$exports,
    "da-DK": $5a41bb2baa6861e4$exports,
    "de-DE": $f28bbea439e87eca$exports,
    "el-GR": $b3eca51cb720961a$exports,
    "en-US": $0b39b205118db415$exports,
    "es-ES": $f467c0ee7bfb0950$exports,
    "et-EE": $ab711d2ffb4cdf3d$exports,
    "fi-FI": $b63105d663e6f9d5$exports,
    "fr-FR": $9d2ed7be7fcdc2a1$exports,
    "he-IL": $c5704294d85c7b5d$exports,
    "hr-HR": $20c975671d6bbc63$exports,
    "hu-HU": $2569ca3917233115$exports,
    "it-IT": $caa152f7f8e96c85$exports,
    "ja-JP": $cbc6af0cc98fad10$exports,
    "ko-KR": $ad9be5d332b4d607$exports,
    "lt-LT": $659de19a00ff9617$exports,
    "lv-LV": $173e9fb4d14fe309$exports,
    "nb-NO": $d8e2640a066567a9$exports,
    "nl-NL": $d71fd764236c0d12$exports,
    "pl-PL": $f4ad3faf9f4aaec6$exports,
    "pt-BR": $9703be9d55d8e9c2$exports,
    "pt-PT": $7e23baec8a14f309$exports,
    "ro-RO": $568f95594049d56e$exports,
    "ru-RU": $625df06cecc70764$exports,
    "sk-SK": $b5a67525f3a2f594$exports,
    "sl-SI": $16125922964febca$exports,
    "sr-SP": $de104bf355206bcf$exports,
    "sv-SE": $d5ab76bcbadc9c07$exports,
    "tr-TR": $a6a1af5968159b55$exports,
    "uk-UA": $5204a30f0d17ffec$exports,
    "zh-CN": $8d15e736e12d3dfd$exports,
    "zh-TW": $f8c49dd804b75140$exports
};



//# sourceMappingURL=intlStrings.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(29571);
;// ./node_modules/@react-aria/breadcrumbs/dist/useBreadcrumbs.mjs





function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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


function $848231d7a2b3998e$export$8cefe241bd876ca0(props) {
    let { 'aria-label': ariaLabel, ...otherProps } = props;
    let strings = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault($8229b34715874f89$exports))), '@react-aria/breadcrumbs');
    return {
        navProps: {
            ...(0, filterDOMProps/* filterDOMProps */.$)(otherProps, {
                labelable: true
            }),
            'aria-label': ariaLabel || strings.format('breadcrumbs')
        }
    };
}



//# sourceMappingURL=useBreadcrumbs.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/BaseCollection.mjs
var BaseCollection = __webpack_require__(46540);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria-components/dist/Breadcrumbs.mjs








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






const $778035c5624f61e7$export$65596d3621b0a4a0 = /*#__PURE__*/ (0, react.createContext)(null);
const $778035c5624f61e7$export$2dc68d50d56fbbd = /*#__PURE__*/ (0, react.forwardRef)(function Breadcrumbs(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $778035c5624f61e7$export$65596d3621b0a4a0);
    let { CollectionRoot: CollectionRoot } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let { navProps: navProps } = (0, $848231d7a2b3998e$export$8cefe241bd876ca0)(props);
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true,
        labelable: true
    });
    return /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* Collection */.pM), props)
    }, (collection)=>{
        var _props_className;
        return /*#__PURE__*/ (0, react).createElement("ol", {
            ref: ref,
            ...(0, mergeProps/* mergeProps */.v)(DOMProps, navProps),
            slot: props.slot || undefined,
            style: props.style,
            className: (_props_className = props.className) !== null && _props_className !== void 0 ? _props_className : 'react-aria-Breadcrumbs'
        }, /*#__PURE__*/ (0, react).createElement($778035c5624f61e7$export$65596d3621b0a4a0.Provider, {
            value: props
        }, /*#__PURE__*/ (0, react).createElement(CollectionRoot, {
            collection: collection
        })));
    });
});
class $778035c5624f61e7$var$BreadcrumbNode extends (0, BaseCollection/* CollectionNode */.Pt) {
}
$778035c5624f61e7$var$BreadcrumbNode.type = 'item';
const $778035c5624f61e7$export$dabcc1ec9dd9d1cc = /*#__PURE__*/ (0, CollectionBuilder/* createLeafComponent */.KU)($778035c5624f61e7$var$BreadcrumbNode, function Breadcrumb(props, ref, node) {
    // Recreating useBreadcrumbItem because we want to use composition instead of having the link builtin.
    let isCurrent = node.nextKey == null;
    let { isDisabled: isDisabled, onAction: onAction } = (0, utils/* useSlottedContext */.CC)($778035c5624f61e7$export$65596d3621b0a4a0);
    let linkProps = {
        'aria-current': isCurrent ? 'page' : null,
        isDisabled: isDisabled || isCurrent,
        onPress: ()=>onAction === null || onAction === void 0 ? void 0 : onAction(node.key)
    };
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...node.props,
        children: node.rendered,
        values: {
            isDisabled: isDisabled || isCurrent,
            isCurrent: isCurrent
        },
        defaultClassName: 'react-aria-Breadcrumb'
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true,
        labelable: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, react).createElement("li", {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        "data-disabled": isDisabled || isCurrent || undefined,
        "data-current": isCurrent || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, Link/* LinkContext */.s).Provider, {
        value: linkProps
    }, renderProps.children));
});



//# sourceMappingURL=Breadcrumbs.module.js.map


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
var DisplayCompositeTypes=function DisplayCompositeTypes(_ref){var props=_ref.props;switch(props.type.name){case'enum':{return/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Pressable/* Pressable */.o,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{role:"button",style:{cursor:'pointer'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props.type.raw,inline:true,language:"typescript",markers:[]})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"hljs-code",children:props.type.value.map(function(r,i){return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{children:[i===0?' ':' | ',/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:r.value.replace(/"/g,"'"),inline:true,language:"typescript",markers:[]})]},""+r.value+i);})})})]});}default:return/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props.type.name,inline:true,language:"typescript",markers:[]});}};var PropTable=function PropTable(_ref2){var _globalData$docusauru,_componentsDocs$find;var name=_ref2.name,_ref2$defaultOpen=_ref2.defaultOpen,defaultOpen=_ref2$defaultOpen===void 0?true:_ref2$defaultOpen;var globalData=(0,useGlobalData/* default */.Ay)();var componentsDocs=(_globalData$docusauru=globalData['docusaurus-plugin-react-docgen-typescript'])==null?void 0:_globalData$docusauru["default"];if(!componentsDocs){return null;}var props=(_componentsDocs$find=componentsDocs.find(function(componentDoc){return componentDoc.displayName===name;}))==null?void 0:_componentsDocs$find.props;if(!props){return null;}var _Object$entries$reduc=Object.entries(props).reduce(function(acc,_ref3){var key=_ref3[0],value=_ref3[1];if(key.startsWith('on')){acc.events[key]=value;}else if(key.startsWith('aria-')){acc.accessibility[key]=value;}else{acc.rest[key]=value;}return acc;},{events:{},accessibility:{},rest:{}}),events=_Object$entries$reduc.events,accessibility=_Object$entries$reduc.accessibility,rest=_Object$entries$reduc.rest;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Accordion/* Accordion */.n,{className:propstable_module.accordion,allowsMultipleExpanded:true,defaultExpandedKeys:defaultOpen?['props']:[],children:[Object.getOwnPropertyNames(rest).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"props",title:"Props",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:rest,props:props})}),Object.getOwnPropertyNames(events).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"events",title:"Events",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:events,props:props,showDefault:false})}),Object.getOwnPropertyNames(accessibility).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"accessibility",title:"Tillg\xE4nglighet",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:accessibility,props:props,showDefault:false})})]});};var Grid=function Grid(_ref4){var propGroup=_ref4.propGroup,props=_ref4.props,_ref4$showDefault=_ref4.showDefault,showDefault=_ref4$showDefault===void 0?true:_ref4$showDefault;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:propstable_module.propsGridTable,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Name"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Type"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:showDefault&&'Default'}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Description"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{children:Object.keys(propGroup).map(function(key){return/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("td",{"data-title":"Name",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:key,inline:true,language:"typescript",markers:[]}),props[key].required&&' *']}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Type",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DisplayCompositeTypes,{props:props[key]})}),showDefault?/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Default",children:props[key].defaultValue?/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props[key].defaultValue.value,inline:true,language:"typescript",markers:[]}):'-'}):/*#__PURE__*/(0,jsx_runtime.jsx)("td",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Description",children:/*#__PURE__*/(0,jsx_runtime.jsx)(lib/* Markdown */.oz,{children:jsdocLinkToMarkdown(props[key].description)})})]},key);})})]})});};

/***/ },

/***/ 69750
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowDownToLine)
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
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
];
const ArrowDownToLine = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("arrow-down-to-line", __iconNode);


//# sourceMappingURL=arrow-down-to-line.js.map


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

/***/ 77121
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"menu":"menu_V22E","menuSection":"menuSection_CHG7","medium":"medium_Ooqg","menuItem":"menuItem_xt3h","mainContent":"mainContent_GA8r","checkMark":"checkMark_KYFR","separator":"separator_YUxq","menuPopover":"menuPopover_c4Km"});

/***/ },

/***/ 86401
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6484);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1160);
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77121);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
var _excluded=["className","size"];/**
 * @deprecated Links are not enforced in menus.
 */var Menu=function Menu(_ref){var className=_ref.className,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_1__/* .Menu */ .W1,Object.assign({className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(className,_Menu_module_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.menu,size==='medium'&&_Menu_module_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.medium)},rest));};

/***/ },

/***/ 87677
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ChevronRight)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("chevron-right", __iconNode);


//# sourceMappingURL=chevron-right.js.map


/***/ },

/***/ 90305
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container_QqG_","separator":"separator_DGV7"});

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