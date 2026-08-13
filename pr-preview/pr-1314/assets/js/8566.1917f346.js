"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8566],{

/***/ 4336
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ EditMetaRow)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(17559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28774);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"iconEdit":"iconEdit_Z9Sw"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/index.js
var _excluded=["className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconEdit(_ref){var className=_ref.className,restProps=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,clsx/* default */.A)(styles_module.iconEdit,className),"aria-hidden":"true"},restProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("g",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditThisPage(_ref){var editUrl=_ref.editUrl;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{to:editUrl,className:ThemeClassNames/* ThemeClassNames */.G.common.editThisPage,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconEdit,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/IntlUtils.js
var IntlUtils = __webpack_require__(36266);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/LastUpdated/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LastUpdatedAtDate(_ref){var lastUpdatedAt=_ref.lastUpdatedAt;var atDate=new Date(lastUpdatedAt);var dateTimeFormat=(0,IntlUtils/* useDateTimeFormat */.i)({day:'numeric',month:'short',year:'numeric',timeZone:'UTC'});var formattedLastUpdatedAt=dateTimeFormat.format(atDate);return/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("time",{dateTime:atDate.toISOString(),itemProp:"dateModified",children:formattedLastUpdatedAt})})},children:' on {date}'});}function LastUpdatedByUser(_ref2){var lastUpdatedBy=_ref2.lastUpdatedBy;return/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:lastUpdatedBy})},children:' by {user}'});}function LastUpdated(_ref3){var lastUpdatedAt=_ref3.lastUpdatedAt,lastUpdatedBy=_ref3.lastUpdatedBy;return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:ThemeClassNames/* ThemeClassNames */.G.common.lastUpdated,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:lastUpdatedAt?/*#__PURE__*/(0,jsx_runtime.jsx)(LastUpdatedAtDate,{lastUpdatedAt:lastUpdatedAt}):'',byUser:lastUpdatedBy?/*#__PURE__*/(0,jsx_runtime.jsx)(LastUpdatedByUser,{lastUpdatedBy:lastUpdatedBy}):''},children:'Last updated{atDate}{byUser}'}), false&&/*#__PURE__*/0]});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const EditMetaRow_styles_module = ({"lastUpdated":"lastUpdated_JAkA","noPrint":"noPrint_WFHX"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditMetaRow(_ref){var className=_ref.className,editUrl=_ref.editUrl,lastUpdatedAt=_ref.lastUpdatedAt,lastUpdatedBy=_ref.lastUpdatedBy;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('row',className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('col',EditMetaRow_styles_module.noPrint),children:editUrl&&/*#__PURE__*/(0,jsx_runtime.jsx)(EditThisPage,{editUrl:editUrl})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('col',EditMetaRow_styles_module.lastUpdated),children:(lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/(0,jsx_runtime.jsx)(LastUpdated,{lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy})})]});}

/***/ },

/***/ 82161
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MDXA)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28774);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73535);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXA(props){// MDX Footnotes have ids such as <a id="user-content-fn-1-953011" ...>
var anchorTargetClassName=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useAnchorTargetClassName */ .v)(props.id);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,Object.assign({},props,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(anchorTargetClassName,props.className)}));}

/***/ },

/***/ 73150
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ MDXCode)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js + 27 modules
var CodeBlock = __webpack_require__(83457);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Simple component used to render inline code blocks
// its purpose is to be swizzled and customized
// MDX 1 used to have a inlineCode comp, see https://mdxjs.com/migrating/v2/
function CodeInline(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("code",Object.assign({},props));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Code.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function shouldBeInline(props){return(// empty code blocks have no props.children,
// see https://github.com/facebook/docusaurus/pull/9704
typeof props.children!=='undefined'&&react.Children.toArray(props.children).every(function(el){return typeof el==='string'&&!el.includes('\n');}));}function MDXCode(props){return shouldBeInline(props)?/*#__PURE__*/(0,jsx_runtime.jsx)(CodeInline,Object.assign({},props)):/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlock/* default */.A,Object.assign({},props));}

/***/ },

/***/ 84971
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ MDXDetails)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(20454);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBrokenLinks.js + 1 modules
var useBrokenLinks = __webpack_require__(63427);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(92303);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(41422);
;// ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"details":"details_lb9f","isBrowser":"isBrowser_bmU9","collapsibleContent":"collapsibleContent_i85q"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-common/lib/components/Details/index.js
var _excluded=["summary","children"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isInSummary(node){if(!node){return false;}return node.tagName==='SUMMARY'||isInSummary(node.parentElement);}function hasParent(node,parent){if(!node){return false;}return node===parent||hasParent(node.parentElement,parent);}/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */function Details(_ref){var summary=_ref.summary,children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);(0,useBrokenLinks/* default */.A)().collectAnchor(props.id);var isBrowser=(0,useIsBrowser/* default */.A)();var detailsRef=(0,react.useRef)(null);var _useCollapsible=(0,Collapsible/* useCollapsible */.u)({initialState:!props.open}),collapsed=_useCollapsible.collapsed,setCollapsed=_useCollapsible.setCollapsed;// Use a separate state for the actual details prop, because it must be set
// only after animation completes, otherwise close animations won't work
var _useState=(0,react.useState)(props.open),open=_useState[0],setOpen=_useState[1];var summaryElement=/*#__PURE__*/react.isValidElement(summary)?summary:/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:summary!=null?summary:'Details'});return(/*#__PURE__*/// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
(0,jsx_runtime.jsxs)("details",Object.assign({},props,{ref:detailsRef,open:open,"data-collapsed":collapsed,className:(0,clsx/* default */.A)(styles_module.details,isBrowser&&styles_module.isBrowser,props.className),onMouseDown:function onMouseDown(e){var target=e.target;// Prevent a double-click to highlight summary text
if(isInSummary(target)&&e.detail>1){e.preventDefault();}},onClick:function onClick(e){e.stopPropagation();// For isolation of multiple nested details/summary
var target=e.target;var shouldToggle=isInSummary(target)&&hasParent(target,detailsRef.current);if(!shouldToggle){return;}e.preventDefault();if(collapsed){setCollapsed(false);setOpen(true);}else{setCollapsed(true);// Don't do this, it breaks close animation!
// setOpen(false);
}},children:[summaryElement,/*#__PURE__*/(0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N,{lazy:false// Content might matter for SEO in this case
,collapsed:collapsed,onCollapseTransitionEnd:function onCollapseTransitionEnd(newCollapsed){setCollapsed(newCollapsed);setOpen(!newCollapsed);},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.collapsibleContent,children:children})})]})));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Details_styles_module = ({"details":"details_b_Ee"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
var InfimaClasses='alert alert--info';function Details_Details(_ref){var props=Object.assign({},((0,objectDestructuringEmpty/* default */.A)(_ref),_ref));return/*#__PURE__*/(0,jsx_runtime.jsx)(Details,Object.assign({},props,{className:(0,clsx/* default */.A)(InfimaClasses,Details_styles_module.details,props.className)}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Details.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXDetails(props){var items=react.Children.toArray(props.children);// Split summary item from the rest to pass it as a separate prop to the
// Details theme component
var summary=items.find(function(item){return/*#__PURE__*/react.isValidElement(item)&&item.type==='summary';});var children=/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:items.filter(function(item){return item!==summary;})});return/*#__PURE__*/(0,jsx_runtime.jsx)(Details_Details,Object.assign({},props,{summary:summary,children:children}));}

/***/ },

/***/ 31795
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MDXHeading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51107);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXHeading(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,Object.assign({},props));}

/***/ },

/***/ 89724
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ MDXImg)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"img":"img_ev3q"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function transformImgClassName(className){return (0,clsx/* default */.A)(className,styles_module.img);}function MDXImg(props){return(/*#__PURE__*/// eslint-disable-next-line jsx-a11y/alt-text
(0,jsx_runtime.jsx)("img",Object.assign({decoding:"async",loading:"lazy"},props,{className:transformImgClassName(props.className)})));}

/***/ },

/***/ 14168
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MDXPre)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXPre(props){// With MDX 2, this element is only used for fenced code blocks
// It always receives a MDXComponents/Code as children
return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:props.children});}

/***/ },

/***/ 62710
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ MDXUl)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"containsTaskList":"containsTaskList_mC6p"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function transformUlClassName(className){// Fix https://github.com/facebook/docusaurus/issues/9098
if(typeof className==='undefined'){return undefined;}return (0,clsx/* default */.A)(className,// This class is set globally by GitHub/MDX. We keep the global class, and
// add another class to get a task list without the default ul styling
// See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
(className==null?void 0:className.includes('contains-task-list'))&&styles_module.containsTaskList);}function MDXUl(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",Object.assign({},props,{className:transformUlClassName(props.className)}));}

/***/ },

/***/ 77910
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);
/* harmony import */ var _theme_MDXComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87404);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXContent(_ref){var children=_ref.children;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .MDXProvider */ .x,{components:_theme_MDXComponents__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,children:children});}

/***/ },

/***/ 39022
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PaginatorNavLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28774);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function PaginatorNavLink(props){var permalink=props.permalink,title=props.title,subLabel=props.subLabel,isNext=props.isNext;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('pagination-nav__link',isNext?'pagination-nav__link--next':'pagination-nav__link--prev'),to:permalink,children:[subLabel&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"pagination-nav__sublabel",children:subLabel}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"pagination-nav__label",children:title})]});}

/***/ },

/***/ 56133
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28774);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_zVej","tagRegular":"tagRegular_sFm0","tagWithCount":"tagWithCount_h2kH"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag(_ref){var permalink=_ref.permalink,label=_ref.label,count=_ref.count,description=_ref.description;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{rel:"tag",href:permalink,title:description,className:(0,clsx/* default */.A)(styles_module.tag,count?styles_module.tagWithCount:styles_module.tagRegular),children:[label,count&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:count})]});}

/***/ },

/***/ 62053
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TagsListInline)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(56133);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tags":"tags_jXut","tag":"tag_QGVx"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsListInline(_ref){var tags=_ref.tags;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:(0,clsx/* default */.A)(styles_module.tags,'padding--none','margin-left--sm'),children:tags.map(function(tag){return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:styles_module.tag,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* default */.A,Object.assign({},tag))},tag.permalink);})})]});}

/***/ },

/***/ 36266
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ useDateTimeFormat)
/* harmony export */ });
/* unused harmony export useCalendar */
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44586);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useCalendar(){var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(),_useDocusaurusContext2=_useDocusaurusContext.i18n,currentLocale=_useDocusaurusContext2.currentLocale,localeConfigs=_useDocusaurusContext2.localeConfigs;return localeConfigs[currentLocale].calendar;}function useDateTimeFormat(options){if(options===void 0){options={};}var _useDocusaurusContext3=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(),currentLocale=_useDocusaurusContext3.i18n.currentLocale;var calendar=useCalendar();return new Intl.DateTimeFormat(currentLocale,Object.assign({calendar:calendar},options));}

/***/ },

/***/ 12352
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Mermaid)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ErrorBoundary.js + 1 modules
var ErrorBoundary = __webpack_require__(67489);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/errorBoundaryUtils.js + 1 modules
var errorBoundaryUtils = __webpack_require__(12181);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regenerator.js
var regenerator = __webpack_require__(22007);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(10467);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(95293);
;// ./node_modules/@docusaurus/theme-mermaid/lib/client/loadMermaid.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function loadMermaidAndRegisterLayouts(){return _loadMermaidAndRegisterLayouts.apply(this,arguments);}// Ensure we only try to register layouts once
function _loadMermaidAndRegisterLayouts(){_loadMermaidAndRegisterLayouts=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee(){var mermaid,elkLayout;return (0,regenerator/* default */.A)().w(function(_context){while(1)switch(_context.n){case 0:_context.n=1;return Promise.all(/* import() */[__webpack_require__.e(451), __webpack_require__.e(3923)]).then(__webpack_require__.bind(__webpack_require__, 23923));case 1:mermaid=_context.v["default"];if(false)// removed by dead control flow
{}_context.n=2;return __webpack_require__.e(/* import() */ 2227).then(__webpack_require__.bind(__webpack_require__, 92227));case 2:elkLayout=_context.v["default"];mermaid.registerLayoutLoaders(elkLayout);case 3:return _context.a(2,mermaid);}},_callee);}));return _loadMermaidAndRegisterLayouts.apply(this,arguments);}var MermaidPromise=null;// We load Mermaid with a dynamic import to code split / lazy load the library
// It is only called inside a useEffect, so loading can be deferred
// We memoize so that we don't load and register layouts multiple times
function loadMermaid(){return _loadMermaid.apply(this,arguments);}function _loadMermaid(){_loadMermaid=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee2(){return (0,regenerator/* default */.A)().w(function(_context2){while(1)switch(_context2.n){case 0:if(!MermaidPromise){MermaidPromise=loadMermaidAndRegisterLayouts();}return _context2.a(2,MermaidPromise);}},_callee2);}));return _loadMermaid.apply(this,arguments);}
;// ./node_modules/@docusaurus/theme-mermaid/lib/client/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Stable className to allow users to easily target with CSS
var MermaidContainerClassName='docusaurus-mermaid-container';function useMermaidThemeConfig(){return (0,useThemeConfig/* useThemeConfig */.p)().mermaid;}function useMermaidConfig(){var _useColorMode=(0,contexts_colorMode/* useColorMode */.G)(),colorMode=_useColorMode.colorMode;var mermaidThemeConfig=useMermaidThemeConfig();var theme=mermaidThemeConfig.theme[colorMode];var options=mermaidThemeConfig.options;return (0,react.useMemo)(function(){return Object.assign({startOnLoad:false},options,{theme:theme});},[theme,options]);}function useMermaidId(){/*
    Random client-only id, we don't care much but mermaid want an id so...
    Note: Mermaid doesn't like values provided by Rect.useId() and throws
    */// TODO Docusaurus v4: check if useId() now works
//  It could work thanks to https://github.com/facebook/react/pull/32001
// return useId(); // tried that, doesn't work ('#d:re:' is not a valid selector.)
return (0,react.useState)("mermaid-svg-"+Math.round(Math.random()*10000000))[0];}function renderMermaid(_x){return _renderMermaid.apply(this,arguments);}function _renderMermaid(){_renderMermaid=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee(_ref){var id,text,config,mermaid,_document$querySelect,_t;return (0,regenerator/* default */.A)().w(function(_context){while(1)switch(_context.p=_context.n){case 0:id=_ref.id,text=_ref.text,config=_ref.config;_context.n=1;return loadMermaid();case 1:mermaid=_context.v;/*
    Mermaid API is really weird :s
    It is a big mutable singleton with multiple config levels
    Note: most recent API type definitions are missing
  
    There are 2 kind of configs:
  
    - siteConfig: some kind of global/protected shared config
      you can only set with "initialize"
  
    - config/currentConfig
      the config the renderer will use
      it is reset to siteConfig before each render
      but it can be altered by the mermaid txt content itself through directives
  
    To use a new mermaid config (on colorMode change for example) we should
    update siteConfig, and it can only be done with initialize()
     */mermaid.initialize(config);_context.p=2;_context.n=3;return mermaid.render(id,text);case 3:return _context.a(2,_context.v);case 4:_context.p=4;_t=_context.v;// Because Mermaid add a weird SVG/Message to the DOM on error
// https://github.com/mermaid-js/mermaid/issues/3205#issuecomment-1719620183
(_document$querySelect=document.querySelector("#d"+id))==null||_document$querySelect.remove();throw _t;case 5:return _context.a(2);}},_callee,null,[[2,4]]);}));return _renderMermaid.apply(this,arguments);}function useMermaidRenderResult(_ref2){var text=_ref2.text,providedConfig=_ref2.config;var _useState=(0,react.useState)(null),result=_useState[0],setResult=_useState[1];var id=useMermaidId();/*
    For flexibility, we allow the hook to receive a custom Mermaid config
    The user could inject a modified version of the default config for example
     */var defaultMermaidConfig=useMermaidConfig();var config=providedConfig!=null?providedConfig:defaultMermaidConfig;(0,react.useEffect)(function(){renderMermaid({id:id,text:text,config:config})// TODO maybe try to use Suspense here and throw the promise?
// See also https://github.com/pmndrs/suspend-react
.then(setResult)["catch"](function(e){// Funky way to trigger parent React error boundary
// See https://x.com/sebastienlorber/status/1628340871899893768
setResult(function(){throw e;});});},[id,text,config]);return result;}
;// ./node_modules/@docusaurus/theme-mermaid/lib/theme/Mermaid/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"container":"container_lyt7"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-mermaid/lib/theme/Mermaid/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MermaidRenderResult(_ref){var renderResult=_ref.renderResult;var ref=(0,react.useRef)(null);(0,react.useEffect)(function(){var div=ref.current;renderResult.bindFunctions==null||renderResult.bindFunctions(div);},[renderResult]);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{ref:ref,className:MermaidContainerClassName+" "+styles_module.container// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:renderResult.svg}});}function MermaidRenderer(_ref2){var value=_ref2.value;var renderResult=useMermaidRenderResult({text:value});if(renderResult===null){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(MermaidRenderResult,{renderResult:renderResult});}function Mermaid(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundary/* default */.A,{fallback:function fallback(params){return/*#__PURE__*/(0,jsx_runtime.jsx)(errorBoundaryUtils/* ErrorBoundaryErrorMessageFallback */.MN,Object.assign({},params));},children:/*#__PURE__*/(0,jsx_runtime.jsx)(MermaidRenderer,Object.assign({},props))});}

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

/***/ 90232
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowLeft)
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
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("arrow-left", __iconNode);


//# sourceMappingURL=arrow-left.js.map


/***/ },

/***/ 48635
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowRight)
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
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("arrow-right", __iconNode);


//# sourceMappingURL=arrow-right.js.map


/***/ },

/***/ 8866
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SquareArrowOutUpRight)
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
  ["path", { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6", key: "y09zxi" }],
  ["path", { d: "m21 3-9 9", key: "mpx6sq" }],
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }]
];
const SquareArrowOutUpRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("square-arrow-out-up-right", __iconNode);


//# sourceMappingURL=square-arrow-out-up-right.js.map


/***/ },

/***/ 20454
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _objectDestructuringEmpty)
/* harmony export */ });
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}


/***/ },

/***/ 94353
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Qp: () => (/* binding */ $65dbe90f868fa5f4$export$dabcc1ec9dd9d1cc),
  BI: () => (/* binding */ $65dbe90f868fa5f4$export$2dc68d50d56fbbd)
});

// UNUSED EXPORTS: BreadcrumbsContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Collection.mjs
var Collection = __webpack_require__(53658);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Link.mjs + 1 modules
var Link = __webpack_require__(67452);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/ar-AE.mjs
var $487db6faca3494c5$exports = {};
$487db6faca3494c5$exports = {
    "breadcrumbs": `\u{639}\u{646}\u{627}\u{635}\u{631} \u{627}\u{644}\u{648}\u{627}\u{62C}\u{647}\u{629}`
};



//# sourceMappingURL=ar-AE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/bg-BG.mjs
var $02afdaf6eedc1651$exports = {};
$02afdaf6eedc1651$exports = {
    "breadcrumbs": `\u{422}\u{440}\u{43E}\u{445}\u{438} \u{445}\u{43B}\u{44F}\u{431}`
};



//# sourceMappingURL=bg-BG.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/cs-CZ.mjs
var $44818ec984fbda74$exports = {};
$44818ec984fbda74$exports = {
    "breadcrumbs": `Popis cesty`
};



//# sourceMappingURL=cs-CZ.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/da-DK.mjs
var $bd2b9d1b2cbc6238$exports = {};
$bd2b9d1b2cbc6238$exports = {
    "breadcrumbs": `Br\xf8dkrummer`
};



//# sourceMappingURL=da-DK.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/de-DE.mjs
var $ec25778fcc632081$exports = {};
$ec25778fcc632081$exports = {
    "breadcrumbs": `Breadcrumbs`
};



//# sourceMappingURL=de-DE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/el-GR.mjs
var $8f3062061aa45e2f$exports = {};
$8f3062061aa45e2f$exports = {
    "breadcrumbs": `\u{3A0}\u{3BB}\u{3BF}\u{3B7}\u{3B3}\u{3AE}\u{3C3}\u{3B5}\u{3B9}\u{3C2} breadcrumb`
};



//# sourceMappingURL=el-GR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/en-US.mjs
var $db0f279d17aa8dba$exports = {};
$db0f279d17aa8dba$exports = {
    "breadcrumbs": `Breadcrumbs`
};



//# sourceMappingURL=en-US.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/es-ES.mjs
var $a885cd759057f2ab$exports = {};
$a885cd759057f2ab$exports = {
    "breadcrumbs": `Migas de pan`
};



//# sourceMappingURL=es-ES.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/et-EE.mjs
var $5b807d2c6052d8dd$exports = {};
$5b807d2c6052d8dd$exports = {
    "breadcrumbs": `Lingiread`
};



//# sourceMappingURL=et-EE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/fi-FI.mjs
var $cb63ea5c57289e6c$exports = {};
$cb63ea5c57289e6c$exports = {
    "breadcrumbs": `Navigointilinkit`
};



//# sourceMappingURL=fi-FI.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/fr-FR.mjs
var $033defe7e90b6d7a$exports = {};
$033defe7e90b6d7a$exports = {
    "breadcrumbs": `Chemin de navigation`
};



//# sourceMappingURL=fr-FR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/he-IL.mjs
var $10e8c1ecf47ad433$exports = {};
$10e8c1ecf47ad433$exports = {
    "breadcrumbs": `\u{5E9}\u{5D1}\u{5D9}\u{5DC}\u{5D9} \u{5E0}\u{5D9}\u{5D5}\u{5D5}\u{5D8}`
};



//# sourceMappingURL=he-IL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/hr-HR.mjs
var $67fbf548bee75f33$exports = {};
$67fbf548bee75f33$exports = {
    "breadcrumbs": `Navigacijski putovi`
};



//# sourceMappingURL=hr-HR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/hu-HU.mjs
var $88924f3e26506958$exports = {};
$88924f3e26506958$exports = {
    "breadcrumbs": `Morzsamen\xfc`
};



//# sourceMappingURL=hu-HU.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/it-IT.mjs
var $73413cafa385c285$exports = {};
$73413cafa385c285$exports = {
    "breadcrumbs": `Breadcrumb`
};



//# sourceMappingURL=it-IT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/ja-JP.mjs
var $c2a645e4089e9749$exports = {};
$c2a645e4089e9749$exports = {
    "breadcrumbs": `\u{30D1}\u{30F3}\u{304F}\u{305A}\u{30EA}\u{30B9}\u{30C8}`
};



//# sourceMappingURL=ja-JP.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/ko-KR.mjs
var $2f008f619b8c5b27$exports = {};
$2f008f619b8c5b27$exports = {
    "breadcrumbs": `\u{D0D0}\u{C0C9} \u{D45C}\u{C2DC}`
};



//# sourceMappingURL=ko-KR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/lt-LT.mjs
var $fdb4abd522d45b2b$exports = {};
$fdb4abd522d45b2b$exports = {
    "breadcrumbs": `Nar\u{161}ymo kelias`
};



//# sourceMappingURL=lt-LT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/lv-LV.mjs
var $d700c23c0c1b247b$exports = {};
$d700c23c0c1b247b$exports = {
    "breadcrumbs": `Atpaka\u{13C}ce\u{13C}i`
};



//# sourceMappingURL=lv-LV.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/nb-NO.mjs
var $501df0ce1a709e1f$exports = {};
$501df0ce1a709e1f$exports = {
    "breadcrumbs": `Navigasjonsstier`
};



//# sourceMappingURL=nb-NO.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/nl-NL.mjs
var $4c962c1e2098dc65$exports = {};
$4c962c1e2098dc65$exports = {
    "breadcrumbs": `Broodkruimels`
};



//# sourceMappingURL=nl-NL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/pl-PL.mjs
var $b806487b79a47647$exports = {};
$b806487b79a47647$exports = {
    "breadcrumbs": `Struktura nawigacyjna`
};



//# sourceMappingURL=pl-PL.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/pt-BR.mjs
var $3701354d5ce12450$exports = {};
$3701354d5ce12450$exports = {
    "breadcrumbs": `Caminho detalhado`
};



//# sourceMappingURL=pt-BR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/pt-PT.mjs
var $9020b37a983f18c7$exports = {};
$9020b37a983f18c7$exports = {
    "breadcrumbs": `Categorias`
};



//# sourceMappingURL=pt-PT.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/ro-RO.mjs
var $b581497e2cb602cb$exports = {};
$b581497e2cb602cb$exports = {
    "breadcrumbs": `Miez de p\xe2ine`
};



//# sourceMappingURL=ro-RO.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/ru-RU.mjs
var $989ef7aae85fac12$exports = {};
$989ef7aae85fac12$exports = {
    "breadcrumbs": `\u{41D}\u{430}\u{432}\u{438}\u{433}\u{430}\u{446}\u{438}\u{44F}`
};



//# sourceMappingURL=ru-RU.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/sk-SK.mjs
var $d1d42e963e7060c9$exports = {};
$d1d42e963e7060c9$exports = {
    "breadcrumbs": `Naviga\u{10D}n\xe9 prvky Breadcrumbs`
};



//# sourceMappingURL=sk-SK.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/sl-SI.mjs
var $35f163cf34011e4d$exports = {};
$35f163cf34011e4d$exports = {
    "breadcrumbs": `Drobtine`
};



//# sourceMappingURL=sl-SI.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/sr-SP.mjs
var $5d32d81e97bfe96a$exports = {};
$5d32d81e97bfe96a$exports = {
    "breadcrumbs": `Putanje navigacije`
};



//# sourceMappingURL=sr-SP.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/sv-SE.mjs
var $8eb872c6e0dc69c6$exports = {};
$8eb872c6e0dc69c6$exports = {
    "breadcrumbs": `S\xf6kv\xe4gar`
};



//# sourceMappingURL=sv-SE.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/tr-TR.mjs
var $82fcf897ec5f2bf0$exports = {};
$82fcf897ec5f2bf0$exports = {
    "breadcrumbs": `\u{130}\xe7erik haritalar\u{131}`
};



//# sourceMappingURL=tr-TR.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/uk-UA.mjs
var $c42af6159e6cf5c7$exports = {};
$c42af6159e6cf5c7$exports = {
    "breadcrumbs": `\u{41D}\u{430}\u{432}\u{456}\u{433}\u{430}\u{446}\u{456}\u{439}\u{43D}\u{430} \u{441}\u{442}\u{435}\u{436}\u{43A}\u{430}`
};



//# sourceMappingURL=uk-UA.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/zh-CN.mjs
var $a9a6dc20ff9e364d$exports = {};
$a9a6dc20ff9e364d$exports = {
    "breadcrumbs": `\u{5BFC}\u{822A}\u{680F}`
};



//# sourceMappingURL=zh-CN.mjs.map

;// ./node_modules/react-aria/dist/private/intl/breadcrumbs/zh-TW.mjs
var $c561931cbd544a49$exports = {};
$c561931cbd544a49$exports = {
    "breadcrumbs": `\u{5C0E}\u{89BD}\u{5217}`
};



//# sourceMappingURL=zh-TW.mjs.map

;// ./node_modules/react-aria/dist/private/breadcrumbs/intlStrings.mjs



































var $fd96f54c158931cf$exports = {};


































$fd96f54c158931cf$exports = {
    "ar-AE": $487db6faca3494c5$exports,
    "bg-BG": $02afdaf6eedc1651$exports,
    "cs-CZ": $44818ec984fbda74$exports,
    "da-DK": $bd2b9d1b2cbc6238$exports,
    "de-DE": $ec25778fcc632081$exports,
    "el-GR": $8f3062061aa45e2f$exports,
    "en-US": $db0f279d17aa8dba$exports,
    "es-ES": $a885cd759057f2ab$exports,
    "et-EE": $5b807d2c6052d8dd$exports,
    "fi-FI": $cb63ea5c57289e6c$exports,
    "fr-FR": $033defe7e90b6d7a$exports,
    "he-IL": $10e8c1ecf47ad433$exports,
    "hr-HR": $67fbf548bee75f33$exports,
    "hu-HU": $88924f3e26506958$exports,
    "it-IT": $73413cafa385c285$exports,
    "ja-JP": $c2a645e4089e9749$exports,
    "ko-KR": $2f008f619b8c5b27$exports,
    "lt-LT": $fdb4abd522d45b2b$exports,
    "lv-LV": $d700c23c0c1b247b$exports,
    "nb-NO": $501df0ce1a709e1f$exports,
    "nl-NL": $4c962c1e2098dc65$exports,
    "pl-PL": $b806487b79a47647$exports,
    "pt-BR": $3701354d5ce12450$exports,
    "pt-PT": $9020b37a983f18c7$exports,
    "ro-RO": $b581497e2cb602cb$exports,
    "ru-RU": $989ef7aae85fac12$exports,
    "sk-SK": $d1d42e963e7060c9$exports,
    "sl-SI": $35f163cf34011e4d$exports,
    "sr-SP": $5d32d81e97bfe96a$exports,
    "sv-SE": $8eb872c6e0dc69c6$exports,
    "tr-TR": $82fcf897ec5f2bf0$exports,
    "uk-UA": $c42af6159e6cf5c7$exports,
    "zh-CN": $a9a6dc20ff9e364d$exports,
    "zh-TW": $c561931cbd544a49$exports
};



//# sourceMappingURL=intlStrings.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(57659);
;// ./node_modules/react-aria/dist/private/breadcrumbs/useBreadcrumbs.mjs





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


function $77c29a73b36f1605$export$8cefe241bd876ca0(props) {
    let { 'aria-label': ariaLabel, ...otherProps } = props;
    let strings = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault($fd96f54c158931cf$exports))), '@react-aria/breadcrumbs');
    return {
        navProps: {
            ...(0, filterDOMProps/* filterDOMProps */.$)(otherProps, {
                labelable: true
            }),
            'aria-label': ariaLabel || strings.format('breadcrumbs')
        }
    };
}



//# sourceMappingURL=useBreadcrumbs.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(11513);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/BaseCollection.mjs
var BaseCollection = __webpack_require__(2764);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria-components/dist/private/Breadcrumbs.mjs











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









const $65dbe90f868fa5f4$export$65596d3621b0a4a0 = /*#__PURE__*/ (0, react.createContext)(null);
const $65dbe90f868fa5f4$export$2dc68d50d56fbbd = /*#__PURE__*/ (0, react.forwardRef)(function Breadcrumbs(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $65dbe90f868fa5f4$export$65596d3621b0a4a0);
    let { CollectionRoot: CollectionRoot } = (0, react.useContext)((0, Collection/* CollectionRendererContext */.zL));
    let { navProps: navProps } = (0, $77c29a73b36f1605$export$8cefe241bd876ca0)(props);
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true,
        labelable: true
    });
    return /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* CollectionBuilder */.GQ), {
        content: /*#__PURE__*/ (0, react).createElement((0, CollectionBuilder/* Collection */.pM), props)
    }, (collection)=>/*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).ol, {
            render: props.render,
            ref: ref,
            ...(0, mergeProps/* mergeProps */.v)(DOMProps, navProps),
            slot: props.slot || undefined,
            style: props.style,
            className: props.className ?? 'react-aria-Breadcrumbs'
        }, /*#__PURE__*/ (0, react).createElement($65dbe90f868fa5f4$export$65596d3621b0a4a0.Provider, {
            value: props
        }, /*#__PURE__*/ (0, react).createElement(CollectionRoot, {
            collection: collection
        }))));
});
class $65dbe90f868fa5f4$var$BreadcrumbNode extends (0, BaseCollection/* CollectionNode */.Pt) {
    static{
        this.type = 'item';
    }
}
const $65dbe90f868fa5f4$export$dabcc1ec9dd9d1cc = /*#__PURE__*/ (0, CollectionBuilder/* createLeafComponent */.KU)($65dbe90f868fa5f4$var$BreadcrumbNode, function Breadcrumb(props, ref, node) {
    // Recreating useBreadcrumbItem because we want to use composition instead of having the link builtin.
    let isCurrent = node.nextKey == null;
    let { isDisabled: isDisabled, onAction: onAction } = (0, utils/* useSlottedContext */.CC)($65dbe90f868fa5f4$export$65596d3621b0a4a0);
    let linkProps = {
        'aria-current': isCurrent ? 'page' : null,
        isDisabled: isDisabled || isCurrent,
        onPress: ()=>onAction?.(node.key)
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
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).li, {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        "data-disabled": isDisabled || isCurrent || undefined,
        "data-current": isCurrent || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, Link/* LinkContext */.s).Provider, {
        value: linkProps
    }, renderProps.children));
});



//# sourceMappingURL=Breadcrumbs.mjs.map


/***/ },

/***/ 67452
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ $984a1fc08f87e4f3$export$a6c7ac8248d6e38a),
  s: () => (/* binding */ $984a1fc08f87e4f3$export$e2509388b49734e7)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/openLink.mjs
var openLink = __webpack_require__(46271);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var useFocusable = __webpack_require__(55602);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/usePress.mjs + 1 modules
var usePress = __webpack_require__(23580);
;// ./node_modules/react-aria/dist/private/link/useLink.mjs






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




function $40d752843fab8930$export$dcf14c9974fe2767(props, ref) {
    let { elementType: elementType = 'a', onPress: onPress, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressChange: onPressChange, onClick: onClick, isDisabled: isDisabled, ...otherProps } = props;
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
        onPressChange: onPressChange,
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
                pressProps.onClick?.(e);
                (0, openLink/* handleLinkClick */.PJ)(e, router, props.href, props.routerOptions);
            }
        })
    };
}



//# sourceMappingURL=useLink.mjs.map

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/useFocusRing.mjs
var useFocusRing = __webpack_require__(66683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useHover.mjs
var useHover = __webpack_require__(68068);
;// ./node_modules/react-aria-components/dist/private/Link.mjs








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






const $984a1fc08f87e4f3$export$e2509388b49734e7 = /*#__PURE__*/ (0, react.createContext)(null);
const $984a1fc08f87e4f3$export$a6c7ac8248d6e38a = /*#__PURE__*/ (0, react.forwardRef)(function Link(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $984a1fc08f87e4f3$export$e2509388b49734e7);
    let elementType = props.href && !props.isDisabled ? 'a' : 'span';
    let { linkProps: linkProps, isPressed: isPressed } = (0, $40d752843fab8930$export$dcf14c9974fe2767)({
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



//# sourceMappingURL=Link.mjs.map


/***/ },

/***/ 94426
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ $d11d85ad4808f162$export$49ff6f28c54f1cbe)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68444);
/* harmony import */ var _utils_filterDOMProps_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46683);
/* harmony import */ var _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47425);
/* harmony import */ var _label_useField_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80439);
/* harmony import */ var _interactions_useFocusWithin_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75655);






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




function $d11d85ad4808f162$export$49ff6f28c54f1cbe(props, state) {
    let { isDisabled: isDisabled, name: name, form: form, validationBehavior: validationBehavior = 'aria' } = props;
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, _label_useField_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useField */ .M)({
        ...props,
        // Checkbox group is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span',
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .checkboxGroupData */ .n).set(state, {
        name: name,
        form: form,
        descriptionId: descriptionProps.id,
        errorMessageId: errorMessageProps.id,
        validationBehavior: validationBehavior
    });
    let domProps = (0, _utils_filterDOMProps_mjs__WEBPACK_IMPORTED_MODULE_1__/* .filterDOMProps */ .$)(props, {
        labelable: true
    });
    let { focusWithinProps: focusWithinProps } = (0, _interactions_useFocusWithin_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useFocusWithin */ .R)({
        onBlurWithin: props.onBlur,
        onFocusWithin: props.onFocus,
        onFocusWithinChange: props.onFocusChange
    });
    return {
        groupProps: (0, _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(domProps, {
            role: 'group',
            'aria-disabled': isDisabled || undefined,
            ...fieldProps,
            ...focusWithinProps
        }),
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}



//# sourceMappingURL=useCheckboxGroup.mjs.map


/***/ },

/***/ 15300
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ $8cd68577ce0207f7$export$daff6da51032a415)
/* harmony export */ });
/* harmony import */ var _form_useFormValidationState_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19804);
/* harmony import */ var _utils_useControlledState_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32240);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);




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


function $8cd68577ce0207f7$export$daff6da51032a415(props = {}) {
    let [selectedValues, setValue] = (0, _utils_useControlledState_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useControlledState */ .P)(props.value, props.defaultValue || [], props.onChange);
    let [initialValues] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(selectedValues);
    let isRequired = !!props.isRequired && selectedValues.length === 0;
    let invalidValues = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(new Map());
    let validation = (0, _form_useFormValidationState_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useFormValidationState */ .KZ)({
        ...props,
        value: selectedValues
    });
    let isInvalid = validation.displayValidation.isInvalid;
    const state = {
        ...validation,
        value: selectedValues,
        defaultValue: props.defaultValue ?? initialValues,
        setValue (value) {
            if (props.isReadOnly || props.isDisabled) return;
            setValue(value);
        },
        isDisabled: props.isDisabled || false,
        isReadOnly: props.isReadOnly || false,
        isSelected (value) {
            return selectedValues.includes(value);
        },
        addValue (value) {
            if (props.isReadOnly || props.isDisabled) return;
            setValue((selectedValues)=>{
                if (!selectedValues.includes(value)) return selectedValues.concat(value);
                return selectedValues;
            });
        },
        removeValue (value) {
            if (props.isReadOnly || props.isDisabled) return;
            if (selectedValues.includes(value)) setValue(selectedValues.filter((existingValue)=>existingValue !== value));
        },
        toggleValue (value) {
            if (props.isReadOnly || props.isDisabled) return;
            if (selectedValues.includes(value)) setValue(selectedValues.filter((existingValue)=>existingValue !== value));
            else setValue(selectedValues.concat(value));
        },
        setInvalid (value, v) {
            let s = new Map(invalidValues.current);
            if (v.isInvalid) s.set(value, v);
            else s.delete(value);
            invalidValues.current = s;
            validation.updateValidation((0, _form_useFormValidationState_mjs__WEBPACK_IMPORTED_MODULE_0__/* .mergeValidation */ .cX)(...s.values()));
        },
        validationState: props.validationState ?? (isInvalid ? 'invalid' : null),
        isInvalid: isInvalid,
        isRequired: isRequired
    };
    return state;
}



//# sourceMappingURL=useCheckboxGroupState.mjs.map


/***/ }

}]);