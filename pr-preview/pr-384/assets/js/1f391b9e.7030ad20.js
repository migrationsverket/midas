"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6061,8401],{

/***/ 77434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ theme_MDXComponents)
});

// NAMESPACE OBJECT: ./apps/docs/src/components/mvdsExports.ts
var mvdsExports_namespaceObject = {};
__webpack_require__.r(mvdsExports_namespaceObject);
__webpack_require__.d(mvdsExports_namespaceObject, {
  Accordion: () => (Accordion/* Accordion */.n),
  AccordionItem: () => (AccordionItem/* AccordionItem */.A),
  Breadcrumbs: () => (Breadcrumbs/* Breadcrumbs */.B),
  Button: () => (Button/* Button */.$),
  Card: () => (Card/* Card */.Z),
  Checkbox: () => (Checkbox/* Checkbox */.S),
  CheckboxGroup: () => (CheckboxGroup/* CheckboxGroup */.$),
  Dropdown: () => (Dropdown/* Dropdown */.m),
  DropdownItem: () => (Dropdown/* DropdownItem */.t),
  FileUpload: () => (FileUpload/* FileUpload */.e),
  Flex: () => (Flex/* Flex */.s),
  FlexItem: () => (FlexItem/* FlexItem */.Z),
  Grid: () => (Grid/* Grid */.x),
  GridItem: () => (GridItem/* GridItem */.E),
  Link: () => (link_Link/* Link */.N),
  LinkButton: () => (LinkButton/* LinkButton */.z),
  Logo: () => (Logo/* Logo */.g),
  Radio: () => (Radio/* Radio */.s),
  RadioGroup: () => (Radio/* RadioGroup */.z),
  SearchField: () => (SearchField/* SearchField */.L),
  Select: () => (Select/* Select */.l),
  Spinner: () => (Spinner/* Spinner */.y),
  Tabs: () => (Tabs/* Tabs */.t),
  TextArea: () => (TextArea/* TextArea */.f),
  TextField: () => (TextField/* TextField */.A),
  Tooltip: () => (Tooltip/* Tooltip */.m),
  theme: () => (theme)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(27143);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-live-codeblock/lib/theme/CodeBlock/index.js + 23 modules
var CodeBlock = __webpack_require__(89014);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeInline/index.js
var CodeInline = __webpack_require__(21657);
// EXTERNAL MODULE: ./apps/docs/src/components/examples/fruits.ts
var fruits = __webpack_require__(87687);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/theme/MDXComponents/Code.js
function shouldBeInline(props){return(// empty code blocks have no props.children,
// see https://github.com/facebook/docusaurus/pull/9704
typeof props.children!=='undefined'&&react.Children.toArray(props.children).every(function(el){return typeof el==='string'&&!el.includes('\n');}));}function MDXCode(props){return shouldBeInline(props)?/*#__PURE__*/(0,jsx_runtime.jsx)(CodeInline/* default */.A,Object.assign({},props)):/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlock/* default */.A,Object.assign({},props));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(56289);
;// ./apps/docs/src/theme/MDXComponents/A.js
function MDXA(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,Object.assign({},props));}
;// ./apps/docs/src/theme/MDXComponents/Pre.js
function MDXPre(props){// With MDX 2, this element is only used for fenced code blocks
// It always receives a MDXComponents/Code as children
return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.children});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 3 modules
var Details = __webpack_require__(56701);
;// ./apps/docs/src/theme/MDXComponents/Details.js
function MDXDetails(props){var items=react.Children.toArray(props.children);// Split summary item from the rest to pass it as a separate prop to the
// Details theme component
var summary=items.find(function(item){return/*#__PURE__*/react.isValidElement(item)&&item.type==='summary';});var children=/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:items.filter(function(item){return item!==summary;})});return/*#__PURE__*/(0,jsx_runtime.jsx)(Details/* default */.A,Object.assign({},props,{summary:summary,children:children}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(9303);
;// ./apps/docs/src/theme/MDXComponents/Heading.js
function MDXHeading(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,Object.assign({},props));}
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./apps/docs/src/theme/MDXComponents/Ul/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"containsTaskList":"containsTaskList_kJf0"});
;// ./apps/docs/src/theme/MDXComponents/Ul/index.js
function transformUlClassName(className){// Fix https://github.com/facebook/docusaurus/issues/9098
if(typeof className==='undefined'){return undefined;}return (0,clsx/* default */.A)(className,// This class is set globally by GitHub/MDX. We keep the global class, and
// add another class to get a task list without the default ul styling
// See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
(className==null?void 0:className.includes('contains-task-list'))&&styles_module.containsTaskList);}function MDXUl(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",Object.assign({},props,{className:transformUlClassName(props.className)}));}
;// ./apps/docs/src/theme/MDXComponents/Img/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Img_styles_module = ({"img":"img_DqHw"});
;// ./apps/docs/src/theme/MDXComponents/Img/index.js
function transformImgClassName(className){return (0,clsx/* default */.A)(className,Img_styles_module.img);}function MDXImg(props){return(/*#__PURE__*/// eslint-disable-next-line jsx-a11y/alt-text
(0,jsx_runtime.jsx)("img",Object.assign({loading:"lazy"},props,{className:transformImgClassName(props.className)})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js + 15 modules
var Admonition = __webpack_require__(52362);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-mermaid/lib/theme/Mermaid/index.js + 8 modules
var Mermaid = __webpack_require__(86160);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx
var Accordion = __webpack_require__(3348);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx
var AccordionItem = __webpack_require__(57389);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx
var Checkbox = __webpack_require__(93284);
// EXTERNAL MODULE: ./packages/components/src/checkbox/CheckboxGroup.tsx
var CheckboxGroup = __webpack_require__(74183);
// EXTERNAL MODULE: ./packages/components/src/logo/Logo.tsx + 1 modules
var Logo = __webpack_require__(17911);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx
var TextField = __webpack_require__(69240);
// EXTERNAL MODULE: ./packages/components/src/file-upload/FileUpload.tsx + 1 modules
var FileUpload = __webpack_require__(57135);
// EXTERNAL MODULE: ./packages/components/src/radio/Radio.tsx + 1 modules
var Radio = __webpack_require__(80408);
// EXTERNAL MODULE: ./packages/components/src/breadcrumbs/Breadcrumbs.tsx + 1 modules
var Breadcrumbs = __webpack_require__(11743);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var link_Link = __webpack_require__(78815);
// EXTERNAL MODULE: ./packages/components/src/grid/Grid.tsx
var Grid = __webpack_require__(12186);
// EXTERNAL MODULE: ./packages/components/src/grid/GridItem.tsx
var GridItem = __webpack_require__(85523);
// EXTERNAL MODULE: ./packages/components/src/flex/Flex.tsx
var Flex = __webpack_require__(39996);
// EXTERNAL MODULE: ./packages/components/src/flex/FlexItem.tsx
var FlexItem = __webpack_require__(52981);
// EXTERNAL MODULE: ./packages/components/src/spinner/Spinner.tsx + 1 modules
var Spinner = __webpack_require__(99381);
// EXTERNAL MODULE: ./packages/components/src/card/Card.tsx + 1 modules
var Card = __webpack_require__(26333);
// EXTERNAL MODULE: ./packages/components/src/link-button/LinkButton.tsx + 2 modules
var LinkButton = __webpack_require__(1353);
// EXTERNAL MODULE: ./packages/components/src/search-field/SearchField.tsx + 1 modules
var SearchField = __webpack_require__(97100);
// EXTERNAL MODULE: ./packages/components/src/select/Select.tsx + 10 modules
var Select = __webpack_require__(81732);
// EXTERNAL MODULE: ./packages/components/src/tabs/Tabs.tsx + 1 modules
var Tabs = __webpack_require__(71383);
// EXTERNAL MODULE: ./packages/components/src/textarea/TextArea.tsx + 1 modules
var TextArea = __webpack_require__(75756);
// EXTERNAL MODULE: ./packages/components/src/tooltip/Tooltip.tsx + 1 modules
var Tooltip = __webpack_require__(39051);
// EXTERNAL MODULE: ./packages/components/src/dropdown/Dropdown.tsx + 1 modules
var Dropdown = __webpack_require__(94623);
// EXTERNAL MODULE: ./packages/components/src/theme/tokens.ts
var tokens = __webpack_require__(66995);
;// ./packages/components/src/theme/index.ts
var theme=Object.assign({},tokens);
;// ./apps/docs/src/components/mvdsExports.ts

;// ./apps/docs/src/theme/MDXComponents/index.js
var MDXComponents={Head:Head/* default */.A,details:MDXDetails,Details:MDXDetails,// This is a fix to allow for importing of our custom components in any code block
// code: MDXCode,
code:function code(props){var children=props.children;var scope=Object.assign({},react,mvdsExports_namespaceObject);if(typeof children==='string'){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXCode,Object.assign({},props,{scope:scope}));}return children;},a:MDXA,pre:MDXPre,ul:MDXUl,img:MDXImg,h1:function h1(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h1"},props));},h2:function h2(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h2"},props));},h3:function h3(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h3"},props));},h4:function h4(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h4"},props));},h5:function h5(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h5"},props));},h6:function h6(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h6"},props));},admonition:Admonition/* default */.A,mermaid:Mermaid/* default */.A};/* harmony default export */ const theme_MDXComponents = (MDXComponents);

/***/ }),

/***/ 39181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(81769);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(204);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 74 modules
var Layout = __webpack_require__(64948);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js
var MDXContent = __webpack_require__(57985);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(97959);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/index.js + 3 modules
var ContentVisibility = __webpack_require__(28467);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js + 6 modules
var EditMetaRow = __webpack_require__(81708);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"mdxPageWrapper":"mdxPageWrapper_j9I6"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXPage(props){var _assets$image;var MDXPageContent=props.content;var metadata=MDXPageContent.metadata,assets=MDXPageContent.assets;var title=metadata.title,editUrl=metadata.editUrl,description=metadata.description,frontMatter=metadata.frontMatter,lastUpdatedBy=metadata.lastUpdatedBy,lastUpdatedAt=metadata.lastUpdatedAt;var keywords=frontMatter.keywords,wrapperClassName=frontMatter.wrapperClassName,hideTableOfContents=frontMatter.hide_table_of_contents;var image=(_assets$image=assets.image)!=null?_assets$image:frontMatter.image;var canDisplayEditMetaRow=!!(editUrl||lastUpdatedAt||lastUpdatedBy);return/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* HtmlClassNameProvider */.e3,{className:(0,clsx/* default */.A)(wrapperClassName!=null?wrapperClassName:ThemeClassNames/* ThemeClassNames */.G.wrapper.mdxPages,ThemeClassNames/* ThemeClassNames */.G.page.mdxPage),children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{title:title,description:description,keywords:keywords,image:image}),/*#__PURE__*/(0,jsx_runtime.jsx)("main",{className:"container container--fluid margin-vert--lg",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('row',styles_module.mdxPageWrapper),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('col',!hideTableOfContents&&'col--8'),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ContentVisibility/* default */.A,{metadata:metadata}),/*#__PURE__*/(0,jsx_runtime.jsx)("article",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(MDXContent/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(MDXPageContent,{})})}),canDisplayEditMetaRow&&/*#__PURE__*/(0,jsx_runtime.jsx)(EditMetaRow/* default */.A,{className:(0,clsx/* default */.A)('margin-top--sm',ThemeClassNames/* ThemeClassNames */.G.pages.pageFooterEditMetaRow),editUrl:editUrl,lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy})]}),!hideTableOfContents&&MDXPageContent.toc.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col col--2",children:/*#__PURE__*/(0,jsx_runtime.jsx)(TOC/* default */.A,{toc:MDXPageContent.toc,minHeadingLevel:frontMatter.toc_min_heading_level,maxHeadingLevel:frontMatter.toc_max_heading_level})})]})})]})});}

/***/ }),

/***/ 11743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ Breadcrumbs)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Breadcrumbs.mjs + 36 modules
var dist_Breadcrumbs = __webpack_require__(57214);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var Link = __webpack_require__(78815);
;// ./packages/components/src/breadcrumbs/Breadcrumbs.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Breadcrumbs_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-disabled":"light-dark(#bfbfbf, #525252)","container":"container_QqG_"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/breadcrumbs/Breadcrumbs.tsx
var Breadcrumbs=function Breadcrumbs(_ref){var items=_ref.items;return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Breadcrumbs/* Breadcrumbs */.BI,{className:Breadcrumbs_module.container,children:items.map(function(item,index){return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Breadcrumbs/* Breadcrumb */.Qp,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* Link */.N,{href:item.href,isDisabled:item.isDisabled,children:item.title})},item.title.toLocaleLowerCase()+index);})});};

/***/ }),

/***/ 26333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Card)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var Link = __webpack_require__(78815);
;// ./packages/components/src/card/Card.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Card_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--border-strong":"light-dark(#171717, #f2f2f2)","--layer-02":"light-dark(#ffffff, #383838)","--layer-hover-02":"light-dark(#e6e6e6, #474747)","--layer-selected-02":"light-dark(#d9d9d9, #525252)","--focus":"0 0 0 2px white, 0 0 0 4px black","--fast-transition":"250ms","--text-primary":"light-dark(#171717, #f2f2f2)","--blue-20":"#d5e5ed","card":"card_Ssoo","content":"content_nzWb","heading":"heading_H8AC","image":"image_Lcl4","text":"text_WJq5"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/card/Card.tsx
'use client';var _excluded=["image","title","content","link","headingTag","customImageComponent","customLinkComponent","className"];/**
 * This component renders a card with optional image, title, content.
 *
 * @see {@link https://designsystem.migrationsverket.se/components/card/}
 */var Card=function Card(_ref){var image=_ref.image,title=_ref.title,content=_ref.content,link=_ref.link,_ref$headingTag=_ref.headingTag,HeadingTag=_ref$headingTag===void 0?'h1':_ref$headingTag,customImageComponent=_ref.customImageComponent,CustomLinkComponent=_ref.customLinkComponent,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var contentId=react.useId();return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({className:(0,clsx/* default */.A)(Card_module.card,className),"data-disabled":link==null?void 0:link.isDisabled},rest,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Card_module.content,children:[customImageComponent?customImageComponent:(image==null?void 0:image.source)&&/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:image.source,alt:image.description,className:Card_module.image}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{id:contentId,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HeadingTag,{className:Card_module.heading,children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:Card_module.text,children:content})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* Link */.N,Object.assign({"aria-describedby":contentId},link,{standalone:true,stretched:true,as:CustomLinkComponent}))]}));};

/***/ }),

/***/ 93284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98587);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92466);
/* harmony import */ var _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76578);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
'use client';var _excluded=["children"];var Checkbox=function Checkbox(_ref){var _children=_ref.children,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .Checkbox */ .Sc,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.checkbox,props.className)},props,{children:function children(_ref2){var isIndeterminate=_ref2.isIndeterminate;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.checkboxInner,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:16,height:16,viewBox:"0 0 18 18","aria-hidden":"true",children:isIndeterminate?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:4,y:8,width:10,height:2}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline",{points:"3,9 7,13 15,4"})})}),_children]});}}));};

/***/ }),

/***/ 74183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ CheckboxGroup)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92466);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63899);
/* harmony import */ var _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76578);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93284);
/* harmony import */ var _textfield__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69240);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["label","description","errorMessage","showSelectAll","children"];var CheckboxGroup=function CheckboxGroup(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,showSelectAll=_ref.showSelectAll,children=_ref.children,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(),isAllSelected=_React$useState[0],setIsAllSelected=_React$useState[1];var ToogleAll=function ToogleAll(){// Get the current state of the checkbox group
var state=react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .CheckboxGroupStateContext */ .pf);// Retrieve all childern
var childValues=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement).map(function(child){return child.props.value;});// Toogle all values
var toggleAll=function toggleAll(){if(isAllSelected!=='all'){setIsAllSelected('all');return state==null?void 0:state.setValue(['toggleAll'].concat(childValues));}setIsAllSelected('none');return state==null?void 0:state.setValue([]);};//listen and change the select all accordingly
react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function(){var _state$value,_state$value2;var amountOfChildren=childValues.length;var totalAmount=childValues.length+1;var currentAmount=(state==null||(_state$value=state.value)==null?void 0:_state$value.length)||0;if(currentAmount===0)setIsAllSelected('none');if(currentAmount>0&&currentAmount<amountOfChildren)setIsAllSelected('some');if(currentAmount!==totalAmount)state==null||state.removeValue('toggleAll');if(currentAmount===amountOfChildren&&!(state!=null&&(_state$value2=state.value)!=null&&_state$value2.includes('toggleAll'))){state==null||state.addValue('toggleAll');setIsAllSelected('all');}// eslint-disable-next-line react-hooks/exhaustive-deps
},[childValues.length,state==null?void 0:state.value]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_5__/* .Checkbox */ .S,{value:"toggleAll",isSelected:isAllSelected==='all',isIndeterminate:isAllSelected==='some',onChange:function onChange(){return toggleAll();},children:"V\xE4lj alla"});};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .CheckboxGroup */ .$Q,Object.assign({className:_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.checkboxGroup},props,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_textfield__WEBPACK_IMPORTED_MODULE_6__/* .InputWrapper */ .o,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_aria_components__WEBPACK_IMPORTED_MODULE_7__/* .Group */ .Y,{className:_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.wrap,children:[showSelectAll&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToogleAll,{}),children]})})}));};

/***/ }),

/***/ 94623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ Dropdown),
  t: () => (/* binding */ DropdownItem)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Menu.mjs + 7 modules
var Menu = __webpack_require__(6484);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js
var ellipsis_vertical = __webpack_require__(3213);
;// ./packages/components/src/dropdown/Dropdown.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Dropdown_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--focus":"0 0 0 2px white, 0 0 0 4px black","--button-background-tertiary-hover":"light-dark(#e6e6e6, #212121)","dropDownMenu":"dropDownMenu_VQGa","menuItem":"menuItem_ssbG"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/dropdown/Dropdown.tsx
var _excluded=["label","title","children"];function Dropdown(_ref){var label=_ref.label,title=_ref.title,children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Menu/* MenuTrigger */.cQ,Object.assign({},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* Button */.$,{"aria-label":label||props['aria-label'],variant:"icon",children:[title,/*#__PURE__*/(0,jsx_runtime.jsx)(ellipsis_vertical/* default */.A,{size:20,"aria-hidden":true})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Menu/* Menu */.W1,Object.assign({},props,{className:Dropdown_module.dropDownMenu,children:children}))})]}));}function DropdownItem(props){var textValue=props.textValue||(typeof props.children==='string'?props.children:undefined);return/*#__PURE__*/(0,jsx_runtime.jsx)(Menu/* MenuItem */.Dr,Object.assign({},props,{textValue:textValue,className:function className(_ref2){var isFocused=_ref2.isFocused,isOpen=_ref2.isOpen;return (0,clsx/* default */.A)(Dropdown_module.menuItem,props.className,isFocused&&'focused',isOpen&&'open');},children:function children(_ref3){var hasSubmenu=_ref3.hasSubmenu;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[props.children,hasSubmenu&&/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{className:"chevron",viewBox:"0 0 24 24",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"m9 18 6-6-6-6"})})]});}}));}

/***/ }),

/***/ 80554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ FieldError_FieldError)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/field-error/FieldError.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const FieldError_module = ({"tokens":"\"../theme/tokens.css\"","--text-invalid":"light-dark(#e62323, #e62323)","--font-family":"\"Inter\", sans-serif","fieldError":"fieldError_K9VX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/field-error/FieldError.tsx
var FieldError_FieldError=/*#__PURE__*/react.forwardRef(function(props,ref){var validation=react.useContext(FieldError/* FieldErrorContext */.C);if(!(validation!=null&&validation.isInvalid))return null;return/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,Object.assign({},props,{ref:ref,className:(0,clsx/* default */.A)(FieldError_module.fieldError,props.className)}));});

/***/ }),

/***/ 57135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ FileUpload)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90675);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(10467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/DropZone.mjs + 76 modules
var DropZone = __webpack_require__(95151);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FileTrigger.mjs
var FileTrigger = __webpack_require__(77064);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
;// ./packages/components/src/file-upload/FileUpload.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const FileUpload_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--field-01":"light-dark(#f2f2f2, #262626)","--background-01":"light-dark(#ffffff, #171717)","--background-hover-01":"light-dark(#e6e6e6, #212121)","--border-subtle":"light-dark(#bfbfbf, #383838)","box":"box_kaz6","list":"list_tzm4","container":"container_tPtu","label":"label_Rz6y","text":"text_R2tR","dropzone":"dropzone_bGZ8","input":"input_XAxQ"});
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx
var TextField = __webpack_require__(69240);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/file-upload/FileUpload.tsx
'use client';var _excluded=["allowsMultiple","label","description","dropzone"];var FileUpload=function FileUpload(_ref){var allowsMultiple=_ref.allowsMultiple,label=_ref.label,description=_ref.description,dropzone=_ref.dropzone,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _React$useState=react.useState(null),files=_React$useState[0],setFiles=_React$useState[1];var handleUpload=function handleUpload(files){setFiles(files!==null?Array.from(files):[]);// TODO: actually handle files?
};var handleDrop=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee(e){var filePromises,resolvedFiles;return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:filePromises=e.items.filter(function(file){return file.kind==='file';}).map(function(file){return file.getFile();});_context.next=3;return Promise.all(filePromises);case 3:resolvedFiles=_context.sent;setFiles(resolvedFiles);case 5:case"end":return _context.stop();}},_callee);}));return function handleDrop(_x){return _ref2.apply(this,arguments);};}();if(dropzone)return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:FileUpload_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DropZone/* DropZone */.w,{onDrop:handleDrop,className:FileUpload_module.dropzone,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",style:{display:'block'},children:"Dra och sl\xE4pp en fil inuti det streckade omr\xE5det"})}),files&&/*#__PURE__*/(0,jsx_runtime.jsx)(FileList,{files:files,setFiles:setFiles})]});return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:FileUpload_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* InputWrapper */.o,{label:label,description:description,children:/*#__PURE__*/(0,jsx_runtime.jsx)(FileTrigger/* FileTrigger */.F,Object.assign({allowsMultiple:allowsMultiple,onSelect:function onSelect(files){return handleUpload(files);}},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"secondary","aria-labelledby":"fileUpload",className:FileUpload_module.input,children:allowsMultiple?'Välj filer':'Välj fil'})}))}),files&&/*#__PURE__*/(0,jsx_runtime.jsx)(FileList,{files:files,setFiles:setFiles})]});};var FileList=function FileList(_ref3){var files=_ref3.files,setFiles=_ref3.setFiles;var handleRemove=function handleRemove(index){setFiles(files==null?void 0:files.filter(function(f,i){return i!==index;}));};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:FileUpload_module.list,children:files.map(function(file,index){return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{className:FileUpload_module.box,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:file.name}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",size:"small",onPress:function onPress(){return handleRemove(index);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})})]},index);})});};

/***/ }),

/***/ 12186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96708);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","fluid"];/**
 * Grid based on display: grid;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 */var Grid=function Grid(_ref){var children=_ref.children,_ref$fluid=_ref.fluid,fluid=_ref$fluid===void 0?false:_ref$fluid,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.container,fluid&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fluid,rest.className)},rest,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.grid,children:children})}));};

/***/ }),

/***/ 85523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ GridItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96708);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","col"];var GridItem=function GridItem(_ref){var children=_ref.children,col=_ref.col,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var colClass=col?"col-"+col:'';return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.col,_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[colClass],rest.className)},rest,{children:children}));};

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
/* harmony default export */ const Link_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--link-enabled":"light-dark(#2e7ca5, #4289ad)","--link-hover":"light-dark(#143c50, #5897b8)","--link-pressed":"light-dark(#171717, #82b0c9)","--link-visited":"light-dark(#954b95, #b46ab4)","--text-disabled":"light-dark(#bfbfbf, #525252)","--focus":"0 0 0 2px white, 0 0 0 4px black","link":"link_RCbb","icon":"icon_Bxuv","standalone":"standalone_Cg9F","stretched":"stretched_pvQw"});
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

/***/ 17911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ Logo)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/logo/Logo.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Logo_module = ({"tokens":"\"../theme/tokens.css\"","--logo-primary":"light-dark(#b90835, #ffffff)","--background-inverse-01":"light-dark(#171717, #f2f2f2)","container":"container_U3H4","noPadding":"noPadding__BF5","logo":"logo_GI7z","primary":"primary_TCiF","dark":"dark_F_Ks","xSmall":"xSmall_IZ4K","small":"small_KAZl","large":"large_iAB3"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/logo/Logo.tsx
var _excluded=["primary","size","padding","className"];var Logo=function Logo(_ref){var _ref$primary=_ref.primary,primary=_ref$primary===void 0?true:_ref$primary,_ref$size=_ref.size,size=_ref$size===void 0?'medium':_ref$size,_ref$padding=_ref.padding,padding=_ref$padding===void 0?true:_ref$padding,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames=(0,clsx/* default */.A)(Logo_module.logo,primary?Logo_module.primary:Logo_module.dark,size==='x-small'&&Logo_module.xSmall,size==='medium'&&Logo_module.medium,size==='large'&&Logo_module.large,size==='small'&&Logo_module.small);var SVG=function SVG(){if(size==='x-small')return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 92",className:classNames,role:"img","aria-hidden":"false",focusable:"false","aria-label":"Migrationsverkets logotyp",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M99.99,91.69c-1.84-1.11-4.05-4.55-4.05-9.46V9.15c0-4.79,1.96-7.25,3.81-8.85h-14.75l-33.91,65.47L12.41.3H0c1.6,1.59,3.93,3.07,3.93,8.23v75.55c0,3.56-2.21,6.51-3.81,7.61h16.34c-1.72-1.22-3.93-4.18-3.93-7.98V25.97l36.24,61.42,33.04-63.26v58.96c0,5.53-2.21,7.61-3.81,8.6h21.99Z"})});return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 112 40",className:classNames,"aria-hidden":"false",focusable:"false","aria-label":"Migrationsverkets logotyp",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M97.78,21.61c-7.48-9.73-20.06-16.03-34.32-16.03-13.07,0-24.86,5.27-32.46,13.65,6.56-5.83,15.64-9.44,25.66-9.44,11.37,0,21.52,4.56,28.18,11.83h12.94Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M90.45,12.58C70.67-1.51,41.26,2.77,27.49,21.61h-12.23C30.56-2.89,68.29-7.47,90.45,12.58h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M11.89,37.13c-.22-.13-.48-.53-.48-1.11v-8.58c0-.56.23-.85.45-1.04h-1.73l-3.98,7.69-4.54-7.69H.15c.19.19.46.36.46.97v8.87c0,.42-.26.76-.45.89h1.92c-.2-.14-.46-.49-.46-.94v-6.78l4.25,7.21,3.88-7.43v6.92c0,.65-.26.89-.45,1.01h2.58Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M15.81,26.86c0-.45-.36-.81-.81-.81s-.81.36-.81.81.36.81.81.81.81-.36.81-.81h0ZM16.22,37.13c-.3-.23-.45-.5-.45-1.07v-6.4h-1.98c.37.19.49.58.49,1.17v5.23c0,.48-.09.79-.46,1.07h2.39Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M24.52,30.97c-.04-.33-.17-.68-.37-.95h-1.36c-.29-.26-.87-.58-1.96-.58-1.53,0-2.8.92-2.8,2.58,0,1.02.52,1.86,1.31,2.26-.43.37-1.38.98-1.38,1.61,0,.71.79.99,1.38,1.1-.88.26-1.67.82-1.67,1.59,0,1.14,1.73,1.41,2.64,1.41,1.54,0,3.91-.78,3.91-2.64,0-1.21-1.23-1.49-2.22-1.5-2.42-.06-2.51-.2-2.51-.56,0-.2.42-.68.55-.81.23.03.48.06.71.06,1.76,0,2.93-.94,2.93-2.7,0-.48-.14-.91-.29-1.11.12-.04.25-.04.37-.04.27,0,.55.12.76.27h0ZM22.27,32.21c0,.79-.37,1.61-1.36,1.61-1.07,0-1.47-1.21-1.47-2.09,0-.95.5-1.57,1.31-1.57,1.2,0,1.51,1.25,1.51,2.05h0ZM22.89,37.92c0,.76-.82,1.31-1.93,1.31-.59,0-1.7-.3-1.69-1.15,0-.45.26-.74.59-.99l1.96.04c.5.01,1.07.1,1.07.79h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M30.11,31.22l-.23-1.63c-.2-.1-.43-.14-.65-.14-.85,0-1.46.68-1.79,1.37v-1.15h-1.96c.45.27.48.76.48,1.14v5.19c0,.58-.1.89-.45,1.14h2.35c-.36-.29-.42-.63-.42-1.12v-4.27c.22-.58.78-1.04,1.43-1.04.46,0,.97.26,1.24.52h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M36.87,37.13c-.37-.33-.43-.59-.43-1.25v-3.89c0-2.21-1.43-2.55-2.8-2.55-.61,0-1.67.22-2.03.42-.2.4-.3,1.24-.4,1.67.46-.56,1.27-1.37,2.39-1.37,1.18,0,1.36.82,1.36,1.7v.39l-2.21.76c-1.04.36-1.87,1.08-1.87,2.26,0,1.31.88,2.08,2.15,2.08.87,0,1.46-.43,1.93-.94v.72h1.92ZM34.95,35.62c-.26.32-.74.85-1.37.85-.75,0-1.18-.79-1.18-1.54,0-.71.35-1.15.89-1.37l1.66-.63v2.7h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M42.58,36.15c-.29.27-.71.46-1.11.46-.87,0-1.07-.98-1.07-1.66v-4.51h.85c.43,0,.94.13,1.33.35l-.17-1.12h-2v-1.76c-.68.95-1.54,1.96-2.58,2.54h1.1v4.43c0,1.43.32,2.47,1.95,2.47.48,0,.98-.1,1.38-.36.14-.25.25-.55.33-.82h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M45.63,26.86c0-.45-.36-.81-.81-.81s-.81.36-.81.81.36.81.81.81.81-.36.81-.81h0ZM46.04,37.13c-.3-.23-.45-.5-.45-1.07v-6.4h-1.98c.37.19.49.58.49,1.17v5.23c0,.48-.09.79-.46,1.07h2.39Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M54.96,33.37c0-2.06-1.3-3.95-3.5-3.95s-3.84,1.76-3.84,4.01c0,2.06,1.28,3.95,3.49,3.95s3.85-1.76,3.85-4.01h0ZM53.43,34.04c0,1.27-.52,2.57-1.86,2.57-1.79,0-2.42-2.44-2.42-3.86,0-1.21.48-2.57,1.87-2.57,1.79,0,2.41,2.44,2.41,3.86h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M63.37,37.13c-.27-.22-.45-.42-.45-1.11v-3.94c0-1.63-.39-2.64-2.18-2.64-1.01,0-1.79.56-2.38,1.12v-.91h-1.98c.3.17.49.46.49,1.05v5.33c0,.59-.14.88-.48,1.08h2.39c-.23-.23-.43-.37-.43-1.17v-4.4c.32-.45,1.07-1.24,1.85-1.24,1.01,0,1.23,1.01,1.23,1.8v3.95c0,.74-.26.87-.46,1.05h2.39Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M69.79,35.2c0-2.21-3.42-2.71-3.42-4.07,0-.75.71-.98,1.34-.98s1.33.29,1.74.81l-.07-1.18c-.46-.17-1.11-.35-1.69-.35-1.44,0-2.68.63-2.68,1.89,0,2.36,3.46,2.68,3.46,4.25,0,.79-.62,1.05-1.31,1.05-1.01,0-1.86-.46-2.52-1.21v.1c0,.4-.03.99.3,1.27.53.43,1.53.56,2.18.56,1.36,0,2.67-.62,2.67-2.15h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M77.98,29.66h-1.43c.13.1.11.56-.19,1.33l-1.86,4.72-1.87-4.7c-.26-.65-.32-1.15-.16-1.34h-2.06c.19.1.49.85.82,1.67l2.31,5.8h1.31l2.35-5.97c.32-.81.56-1.36.78-1.5h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M84.91,33.54v-.23c0-1.92-.62-3.88-2.88-3.88s-3.56,2.02-3.56,4.11,1.41,3.81,3.58,3.81c.78,0,1.62-.17,2.13-.45.32-.35.49-.79.59-1.27-.69.5-1.41.84-2.31.84-1.49,0-2.35-1.57-2.38-2.88l4.83-.04h0ZM83.34,32.88c-1.1.09-2.16.1-3.27.1.01-.78.29-2.83,1.7-2.83,1.33,0,1.57,1.72,1.57,2.73h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M90.95,31.22l-.23-1.63c-.2-.1-.43-.14-.65-.14-.85,0-1.46.68-1.79,1.37v-1.15h-1.96c.45.27.48.76.48,1.14v5.19c0,.58-.1.89-.45,1.14h2.35c-.36-.29-.42-.63-.42-1.12v-4.27c.22-.58.78-1.04,1.43-1.04.46,0,.97.26,1.24.52h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M99.79,37.16c-2.26-.37-2.49-4.04-4.7-4.04l2.62-2.8c.22-.23.5-.48.75-.66h-1.77c.14.14.13.39-.13.66l-2.65,2.83v-7.07h-1.98c.33.2.49.56.49,1.01v9.01c0,.58-.22.81-.46,1.02h2.35c-.26-.25-.4-.49-.4-1.02v-2.57c.27,0,.62.13.82.26,1.28.82,1.95,3.11,2.67,3.45.14.07.94.1,1.14.1.45,0,.84-.03,1.25-.19h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M106.3,33.54v-.23c0-1.92-.62-3.88-2.88-3.88s-3.56,2.02-3.56,4.11,1.41,3.81,3.58,3.81c.78,0,1.62-.17,2.13-.45.32-.35.49-.79.59-1.27-.69.5-1.41.84-2.31.84-1.49,0-2.35-1.57-2.38-2.88l4.83-.04h0ZM104.73,32.88c-1.1.09-2.16.1-3.27.1.01-.78.29-2.83,1.7-2.83,1.33,0,1.57,1.72,1.57,2.73h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M111.85,36.15c-.29.27-.71.46-1.11.46-.86,0-1.07-.98-1.07-1.66v-4.51h.85c.43,0,.94.13,1.33.35l-.17-1.12h-2v-1.76c-.68.95-1.54,1.96-2.58,2.54h1.1v4.43c0,1.43.32,2.47,1.95,2.47.48,0,.98-.1,1.38-.36.14-.25.25-.55.33-.82h0Z"})]});};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(Logo_module.container,padding===false&&Logo_module.noPadding,className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(SVG,{})}));};

/***/ }),

/***/ 80408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ Radio),
  z: () => (/* binding */ RadioGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/components/src/radio/Radio.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Radio_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-disabled":"light-dark(#bfbfbf, #525252)","--size-03":"1rem","--text-primary":"light-dark(#171717, #f2f2f2)","--border-strong":"light-dark(#171717, #f2f2f2)","--focus":"0 0 0 2px white, 0 0 0 4px black","--fast-transition":"250ms","--border-disabled":"light-dark(#bfbfbf, #525252)","--icon-secondary":"light-dark(#143c50, #2e7ca5)","--border-medium":"light-dark(#737373, #8c8c8c)","--border-subtle":"light-dark(#bfbfbf, #383838)","--breakpoint-sm":"(max-width: 767px)","--field-hover-02":"light-dark(#e6e6e6, #474747)","--border-invalid":"light-dark(#e62323, #e62323)","radioGroup":"radioGroup_EgZH","wrap":"wrap_R8gp","radio":"radio_U9gG"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/RadioGroup.mjs + 4 modules
var dist_RadioGroup = __webpack_require__(96325);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Group.mjs
var Group = __webpack_require__(63899);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx
var TextField = __webpack_require__(69240);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/radio/Radio.tsx
'use client';var _excluded=["label","description","errorMessage","children","className"];/**
 * RadioGroup is used to group several radio items together
 */var RadioGroup=function RadioGroup(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,children=_ref.children,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_RadioGroup/* RadioGroup */.z6,Object.assign({},props,{className:(0,clsx/* default */.A)(Radio_module.radioGroup,className),children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* InputWrapper */.o,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Group/* Group */.Y,{className:Radio_module.wrap,children:children})})}));};/**
 * Radio item
 * */var Radio=function Radio(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_RadioGroup/* Radio */.sx,Object.assign({className:Radio_module.radio},props));};

/***/ }),

/***/ 97100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ SearchField)
});

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.js
var search = __webpack_require__(98445);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(53502);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
;// ./packages/components/src/search-field/SearchField.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SearchField_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-invalid":"light-dark(#e62323, #e62323)","--field-01":"light-dark(#f2f2f2, #262626)","--border-strong":"light-dark(#171717, #f2f2f2)","--focus":"0 0 0 2px white, 0 0 0 4px black","--border-invalid":"light-dark(#e62323, #e62323)","--icon-primary":"light-dark(#171717, #f2f2f2)","--text-primary":"light-dark(#171717, #f2f2f2)","fieldError":"fieldError_ivkE","container":"container_o5YK","inputContainer":"inputContainer_hVqH","icon":"icon_KMPT","clear":"clear_cC1p","input":"input_Z0RI"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-stately/searchfield/dist/useSearchFieldState.mjs
var useSearchFieldState = __webpack_require__(7633);
// EXTERNAL MODULE: ./node_modules/@react-aria/searchfield/dist/useSearchField.mjs + 35 modules
var useSearchField = __webpack_require__(46243);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/search-field/SearchField.tsx
'use client';function isValidationError(error){return!!(error!=null&&error.length);}var SearchField=function SearchField(props){var _props$errorMessage;var _useSearchFieldState=(0,useSearchFieldState/* useSearchFieldState */.V)(props),value=_useSearchFieldState.value,setValue=_useSearchFieldState.setValue;var ref=react.useRef(null);var _useSearchField=(0,useSearchField/* useSearchField */.Q)(Object.assign({},props,{label:props.placeholder,validationBehavior:'native'}),{value:value,setValue:setValue},ref),inputProps=_useSearchField.inputProps,errorMessageProps=_useSearchField.errorMessageProps,isInvalid=_useSearchField.isInvalid,validationErrors=_useSearchField.validationErrors,clearButtonProps=_useSearchField.clearButtonProps;var handleChange=function handleChange(_ref){var target=_ref.target;return setValue(target.value);};var handleClear=function handleClear(){return setValue('');};var handleSubmit=function handleSubmit(){var reFocus=props.validate&&isValidationError(props.validate(value))||isInvalid||!value;if(reFocus){var _ref$current;(_ref$current=ref.current)==null||_ref$current.focus();return;}if(props.onSubmit){props.onSubmit(value);}};var handleKeyDown=function handleKeyDown(_ref2){var key=_ref2.key;if(key==='Enter'){handleSubmit();}};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[isInvalid&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},errorMessageProps,{className:SearchField_module.fieldError,children:(_props$errorMessage=props.errorMessage)!=null?_props$errorMessage:validationErrors.join(' ')})),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:SearchField_module.container,"data-disabled":inputProps.disabled,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:SearchField_module.inputContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(search/* default */.A,{size:20,className:SearchField_module.icon}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",Object.assign({},inputProps,inputProps.disabled&&{'data-disabled':true},{className:(0,clsx/* default */.A)(TextField_module/* default */.A.input,SearchField_module.input,inputProps.className),ref:ref,onChange:handleChange,value:value,"aria-invalid":isInvalid,onKeyDown:handleKeyDown,"aria-label":props.placeholder,"aria-labelledby":""})),value.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,Object.assign({variant:"icon",size:"small",className:SearchField_module.clear,onPress:handleClear},clearButtonProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})}))]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{isDisabled:props.isDisabled,excludeFromTabOrder:true,onPress:handleSubmit,type:"button",children:props.buttonText?props.buttonText:'Sök'})]})]});};

/***/ }),

/***/ 81732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Select)
});

// UNUSED EXPORTS: SelectComponent

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/@react-aria/button/dist/useButton.mjs
var useButton = __webpack_require__(69229);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusRing.mjs
var FocusRing = __webpack_require__(8494);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useObjectRef.mjs
var useObjectRef = __webpack_require__(83908);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/Section.mjs
var Section = __webpack_require__(72487);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/Item.mjs
var Item = __webpack_require__(48639);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextField.mjs
var TextField = __webpack_require__(32945);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TagGroup.mjs + 40 modules
var dist_TagGroup = __webpack_require__(99628);
// EXTERNAL MODULE: ./node_modules/@react-aria/listbox/dist/useOption.mjs
var useOption = __webpack_require__(407);
// EXTERNAL MODULE: ./node_modules/@react-aria/listbox/dist/useListBoxSection.mjs
var useListBoxSection = __webpack_require__(72016);
// EXTERNAL MODULE: ./node_modules/@react-aria/listbox/dist/useListBox.mjs
var useListBox = __webpack_require__(77059);
;// ./packages/components/src/select/Select.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Select_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-disabled":"light-dark(#bfbfbf, #525252)","--border-strong":"light-dark(#171717, #f2f2f2)","--text-primary":"light-dark(#171717, #f2f2f2)","--focus":"0 0 0 2px white, 0 0 0 4px black","--layer-02":"light-dark(#ffffff, #383838)","--border-invalid":"light-dark(#e62323, #e62323)","--layer-hover-02":"light-dark(#e6e6e6, #474747)","--layer-selected-02":"light-dark(#d9d9d9, #525252)","--layer-selected-hover-02":"light-dark(#cccccc, #5d5d5d)","--text-on-color":"light-dark(#ffffff, #ffffff)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--button-background-primary-hover":"light-dark(#25607f, #25607f)","--field-disabled":"light-dark(#f2f2f2, #262626)","--border-disabled":"light-dark(#bfbfbf, #525252)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--button-background-disabled":"light-dark(#f2f2f2, #262626)","--text-invalid":"light-dark(#e62323, #e62323)","selectAllButton":"selectAllButton_vETM","selectLabel":"selectLabel_ym7d","selectLabelDisabled":"selectLabelDisabled_q13p","button":"button_qOaA","buttonOpen":"buttonOpen_JL6G","icon":"icon_roiA","buttonDisabled":"buttonDisabled_hGbG","multiSelect":"multiSelect_fCqw","description":"description_Zgpc","descriptionInvalid":"descriptionInvalid_GyuZ","descriptionDisabled":"descriptionDisabled_gloN","popover":"popover_Bl6D","listBox":"listBox_BiFm","listBoxItem":"listBoxItem_yOJV","listBoxItemSelected":"listBoxItemSelected_USLD","listBoxItemDisabled":"listBoxItemDisabled_IkTb","listBoxItemFocused":"listBoxItemFocused_dAO1","listBoxItemFocusVisible":"listBoxItemFocusVisible_SKwl","listBoxItemCheckmark":"listBoxItemCheckmark_Dz5t","selectContainer":"selectContainer_ChZ6","selectValueTag":"selectValueTag_Bx1C","selectValueTagDisabled":"selectValueTagDisabled_hNWH","truncate":"truncate_J6cE","clearButton":"clearButton_p8du","fieldError":"fieldError_DzbR","checkboxContainer":"checkboxContainer_u2A7","checkbox":"checkbox_BLsk"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(45773);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/select/SelectListBox.tsx
var Option=function Option(_ref){var _clsx;var item=_ref.item,state=_ref.state;var ref=react.useRef(null);var _useOption=(0,useOption/* useOption */.x)({key:item.key},state,ref),optionProps=_useOption.optionProps,isDisabled=_useOption.isDisabled,isSelected=_useOption.isSelected,isFocused=_useOption.isFocused,isFocusVisible=_useOption.isFocusVisible;return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",Object.assign({},optionProps,{ref:ref,className:(0,clsx/* default */.A)(Select_module.listBoxItem,(_clsx={},_clsx[Select_module.listBoxItemDisabled]=isDisabled,_clsx[Select_module.listBoxItemFocused]=isFocused,_clsx[Select_module.listBoxItemFocusVisible]=isFocusVisible,_clsx[Select_module.listBoxItemSelected]=isSelected,_clsx)),children:[state.selectionMode==='multiple'&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.checkboxContainer,children:/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:Select_module.checkbox,type:"checkbox",disabled:isDisabled,checked:isSelected,readOnly:true})}),typeof item.rendered==='string'?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"truncate block",children:item.rendered}):item.rendered,isSelected&&state.selectionMode==='single'?/*#__PURE__*/(0,jsx_runtime.jsx)(check/* default */.A,{size:20,className:Select_module.listBoxItemCheckmark}):null]}));};var SelectListBox_Section=function Section(_ref2){var section=_ref2.section,state=_ref2.state;var _useListBoxSection=(0,useListBoxSection/* useListBoxSection */.u)({heading:section.rendered,'aria-label':section['aria-label']}),itemProps=_useListBoxSection.itemProps,headingProps=_useListBoxSection.headingProps,groupProps=_useListBoxSection.groupProps;return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",Object.assign({},itemProps,{className:'',children:[section.rendered&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",Object.assign({},headingProps,{className:Select_module.selectSectionHeading,children:section.rendered})),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",Object.assign({},groupProps,{children:Array.from(section.childNodes).map(function(node){return/*#__PURE__*/(0,jsx_runtime.jsx)(Option,{item:node,state:state},node.key);})}))]}));};var SelectListBox=function SelectListBox(props){var ref=react.useRef(null);var _props$listBoxRef=props.listBoxRef,listBoxRef=_props$listBoxRef===void 0?ref:_props$listBoxRef,state=props.state;var _useListBox=(0,useListBox/* useListBox */.X)(Object.assign({},props,{// When Select is clearable, do not clear the selection once ESC key is pressed, see https://github.com/adobe/react-spectrum/blob/main/packages/@react-aria/selection/src/useSelectableCollection.ts#L226
disallowEmptySelection:true}),state,listBoxRef),listBoxProps=_useListBox.listBoxProps;return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",Object.assign({},listBoxProps,{className:Select_module.listBox,ref:listBoxRef,children:Array.from(state.collection).map(function(item){return item.type==='section'?/*#__PURE__*/(0,jsx_runtime.jsx)(SelectListBox_Section,{section:item,state:state},item.key):/*#__PURE__*/(0,jsx_runtime.jsx)(Option,{item:item,state:state},item.key);})}));};
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs + 2 modules
var FocusScope = __webpack_require__(13560);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/useOverlay.mjs + 1 modules
var useOverlay = __webpack_require__(90757);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/useOverlayPosition.mjs + 1 modules
var useOverlayPosition = __webpack_require__(31364);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/useModal.mjs
var useModal = __webpack_require__(59875);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/DismissButton.mjs + 35 modules
var DismissButton = __webpack_require__(91821);
;// ./packages/components/src/select/SelectPopover.tsx
var SelectPopover=function SelectPopover(_ref){var _Object$assign;var isOpen=_ref.isOpen,onClose=_ref.onClose,children=_ref.children,className=_ref.className,triggerRef=_ref.triggerRef;var ref=react.useRef(null);var _useOverlay=(0,useOverlay/* useOverlay */.e)({isOpen:isOpen,onClose:onClose,isDismissable:true,shouldCloseOnBlur:true},ref),overlayProps=_useOverlay.overlayProps;var _useOverlayPosition=(0,useOverlayPosition/* useOverlayPosition */.v)({isOpen:isOpen,offset:0,crossOffset:0,containerPadding:0,overlayRef:ref,targetRef:triggerRef,placement:'bottom start'}),positionProps=_useOverlayPosition.overlayProps,updatePosition=_useOverlayPosition.updatePosition;// TODO: Remove once this is solved https://github.com/adobe/react-spectrum/blob/9ca62f94405cb8b930bd155f6e44c4854f0a20f3/packages/@react-spectrum/picker/src/Picker.tsx#L99
react.useLayoutEffect(function(){if(isOpen){requestAnimationFrame(function(){updatePosition();});}},[isOpen,updatePosition]);var style=Object.assign({},positionProps.style,(_Object$assign={},_Object$assign["--select-width"]=triggerRef.current?triggerRef.current.offsetWidth+"px":undefined,_Object$assign));return/*#__PURE__*/(0,jsx_runtime.jsx)(useModal/* OverlayContainer */.Sf,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},(0,mergeProps/* mergeProps */.v)(overlayProps,positionProps),{ref:ref,className:className,style:style,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(FocusScope/* FocusScope */.n1,{restoreFocus:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DismissButton/* DismissButton */.R,{onDismiss:onClose}),children,/*#__PURE__*/(0,jsx_runtime.jsx)(DismissButton/* DismissButton */.R,{onDismiss:onClose})]})}))});};
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useCollator.mjs
var useCollator = __webpack_require__(82627);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(95562);
// EXTERNAL MODULE: ./node_modules/@react-aria/label/dist/useField.mjs
var useField = __webpack_require__(85441);
// EXTERNAL MODULE: ./node_modules/@react-aria/menu/dist/useMenuTrigger.mjs + 35 modules
var useMenuTrigger = __webpack_require__(25263);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/ListKeyboardDelegate.mjs
var ListKeyboardDelegate = __webpack_require__(96584);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useTypeSelect.mjs
var useTypeSelect = __webpack_require__(18399);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useId.mjs + 1 modules
var useId = __webpack_require__(84137);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/chain.mjs
var chain = __webpack_require__(72166);
;// ./packages/components/src/select/useMultiSelect.ts
function useMultiSelect(props,state,ref){var disallowEmptySelection=props.disallowEmptySelection,isDisabled=props.isDisabled;var collator=(0,useCollator/* useCollator */.Q)({usage:'search',sensitivity:'base'});var delegate=(0,react.useMemo)(function(){return new ListKeyboardDelegate/* ListKeyboardDelegate */.n(state.collection,state.disabledKeys,null,collator);},[state.collection,state.disabledKeys,collator]);var _useMenuTrigger=(0,useMenuTrigger/* useMenuTrigger */.V)({isDisabled:isDisabled,type:'listbox'},state,ref),menuTriggerProps=_useMenuTrigger.menuTriggerProps,menuProps=_useMenuTrigger.menuProps;var triggerOnKeyDown=function triggerOnKeyDown(e){var selectedKeys=state.selectedKeys,selectionMode=state.selectionMode;var firstKey=selectedKeys.values().next().value;// Select items when trigger has focus - imitating default `<select>` behaviour.
// In multi selection mode it does not make sense.
if(selectionMode==='single'){switch(e.key){case'ArrowLeft':{// prevent scrolling containers
e.preventDefault();var key=selectedKeys.size>0?delegate.getKeyAbove(firstKey):delegate.getFirstKey();if(key){state.setSelectedKeys([key]);}break;}case'ArrowRight':{// prevent scrolling containers
e.preventDefault();var _key=selectedKeys.size>0?delegate.getKeyBelow(firstKey):delegate.getFirstKey();if(_key){state.setSelectedKeys([_key]);}break;}// no default
}}};// Typeahead functionality - imitating default `<select>` behaviour.
var _useTypeSelect=(0,useTypeSelect/* useTypeSelect */.I)({keyboardDelegate:delegate,selectionManager:state.selectionManager,onTypeSelect:function onTypeSelect(key){state.setSelectedKeys([key]);}}),typeSelectProps=_useTypeSelect.typeSelectProps;var _useField=(0,useField/* useField */.M)(Object.assign({},props,{labelElementType:'span'})),labelProps=_useField.labelProps,fieldProps=_useField.fieldProps;typeSelectProps.onKeyDown=typeSelectProps.onKeyDownCapture;delete typeSelectProps.onKeyDownCapture;var domProps=(0,filterDOMProps/* filterDOMProps */.$)(props,{labelable:true});var triggerProps=(0,mergeProps/* mergeProps */.v)(typeSelectProps,menuTriggerProps,fieldProps);var valueId=(0,useId/* useId */.Bi)();return{labelProps:Object.assign({},labelProps,{onClick:function onClick(){if(!props.isDisabled){var _ref$current;(_ref$current=ref.current)==null||_ref$current.focus();// Show the focus ring so the user knows where focus went
(0,useFocusVisible/* setInteractionModality */.Cl)('keyboard');}}}),triggerProps:(0,mergeProps/* mergeProps */.v)(domProps,Object.assign({},triggerProps,{onKeyDown:(0,chain/* chain */.c)(triggerProps.onKeyDown,triggerOnKeyDown,props.onKeyDown),onKeyUp:props.onKeyUp,'aria-labelledby':[triggerProps['aria-labelledby'],triggerProps['aria-label']&&!triggerProps['aria-labelledby']?triggerProps.id:null,valueId].filter(Boolean).join(' '),onFocus:function onFocus(e){if(state.isFocused){return;}if(props.onFocus){props.onFocus(e);}state.setFocused(true);},onBlur:function onBlur(e){if(state.isOpen){return;}if(props.onBlur){props.onBlur(e);}state.setFocused(false);}})),valueProps:{id:valueId},menuProps:Object.assign({},menuProps,{disallowEmptySelection:disallowEmptySelection,autoFocus:state.focusStrategy||true,shouldSelectOnPressUp:true,shouldFocusOnHover:true,onBlur:function onBlur(e){if(e.currentTarget.contains(e.relatedTarget)){return;}if(props.onBlur){props.onBlur(e);}state.setFocused(false);},'aria-labelledby':[fieldProps['aria-labelledby'],triggerProps['aria-label']&&!fieldProps['aria-labelledby']?triggerProps.id:null].filter(Boolean).join(' ')})};}
// EXTERNAL MODULE: ./node_modules/@react-stately/menu/dist/useMenuTriggerState.mjs
var useMenuTriggerState = __webpack_require__(55745);
// EXTERNAL MODULE: ./node_modules/@react-stately/list/dist/useListState.mjs
var useListState = __webpack_require__(46655);
;// ./packages/components/src/select/useMultiSelectListState.ts
function useMultiSelectListState(props){var _useListState=(0,useListState/* useListState */.p)(props),collection=_useListState.collection,disabledKeys=_useListState.disabledKeys,selectionManager=_useListState.selectionManager,_useListState$selecti=_useListState.selectionManager,setSelectedKeys=_useListState$selecti.setSelectedKeys,selectedKeys=_useListState$selecti.selectedKeys,selectionMode=_useListState$selecti.selectionMode;var missingKeys=[];var selectedItems=selectedKeys.size!==0?Array.from(selectedKeys).map(function(key){var item=collection.getItem(key);if(!item){missingKeys.push(key);}return item;})// Remove undefined values when some keys are not present in the collection
.filter(Boolean):null;if(missingKeys.length){// eslint-disable-next-line no-console
console.warn("Select: Keys \""+missingKeys.join(', ')+"\" passed to \"selectedKeys\" are not present in the collection.");}return{collection:collection,disabledKeys:disabledKeys,selectionManager:selectionManager,selectionMode:selectionMode,selectedKeys:selectedKeys,setSelectedKeys:setSelectedKeys.bind(selectionManager),selectedItems:selectedItems};}
// EXTERNAL MODULE: ./node_modules/@react-stately/form/dist/useFormValidationState.mjs
var useFormValidationState = __webpack_require__(71144);
;// ./packages/components/src/select/useMultiSelectState.ts
/** Added this for a better output, will see how this plays out */function useMultiSelectState(props){var _listState$selectedKe;var selectionMode=props.selectionMode;var _useState=(0,react.useState)(false),isFocused=_useState[0],setFocused=_useState[1];var triggerState=(0,useMenuTriggerState/* useMenuTriggerState */.I)(props);var listState=useMultiSelectListState(Object.assign({},props,{onSelectionChange:function onSelectionChange(keys){var onSelectionChange=props.onSelectionChange;if(onSelectionChange!=null){if(keys==='all'){// This may change back to "all" once we will implement async loading of additional
// items and differentiation between "select all" vs. "select visible".
onSelectionChange(Array.from(listState.collection.getKeys()));}else{selectionMode==='single'?onSelectionChange(keys.values().next().value):onSelectionChange(Array.from(keys));}}// Multi select stays open after item selection
if(selectionMode==='single'){triggerState.close();}}}));var validationState=(0,useFormValidationState/* useFormValidationState */.KZ)(Object.assign({},props,{validationBehavior:'native',value:selectionMode==='single'?(_listState$selectedKe=listState.selectedKeys.values().next().value)==null?void 0:_listState$selectedKe.toString():listState.selectedKeys}));// Reset validation for single selects when the selected key changes.
(0,react.useEffect)(function(){if(selectionMode==='single'&&listState.selectedKeys.size){validationState.resetValidation();validationState.commitValidation();}},[listState.selectedKeys.size,selectionMode,validationState]);return Object.assign({},listState,triggerState,{close:function close(){triggerState.close();if(listState.selectedKeys.size){validationState.resetValidation();validationState.commitValidation();}},open:function open(){// Don't open if the collection is empty.
if(listState.collection.size!==0){triggerState.open();}},toggle:function toggle(focusStrategy){if(listState.collection.size!==0){triggerState.toggle(focusStrategy);}},isFocused:isFocused,setFocused:setFocused},validationState);}
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
;// ./packages/components/src/tag/Tag.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tag_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--field-01":"light-dark(#f2f2f2, #262626)","--text-disabled":"light-dark(#bfbfbf, #525252)","--field-active-01":"light-dark(#d9d9d9, #383838)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--icon-primary":"light-dark(#171717, #f2f2f2)","button":"button_Loby","tag":"tag_WAeO","dismissable":"dismissable_Tfml","tagText":"tagText_f_lx","tagList":"tagList_sxPC"});
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
;// ./packages/components/src/tag/Tag.tsx
var _excluded=["children"],_excluded2=["children","dismissable","className"];var TagGroup=function TagGroup(_ref){var children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagGroup */.CR,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagList */.LY,{className:Tag_module.tagList,children:children})}));};var Tag=function Tag(_ref2){var children=_ref2.children,dismissable=_ref2.dismissable,className=_ref2.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_TagGroup/* Tag */.vw,Object.assign({className:(0,clsx/* default */.A)(Tag_module.tag,dismissable&&Tag_module.dismissable,className)},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Tag_module.tagText,children:children}),dismissable&&/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",size:"small",className:Tag_module.button,slot:"remove",children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20})})]}));};
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(80554);
;// ./packages/components/src/utils/useObserveElement.tsx
function useObserveElement(element){var debounce=function debounce(callback,delay){var timeout;return function(entries,observer){clearTimeout(timeout);timeout=setTimeout(function(){callback(entries,observer);},delay);};};var _useState=(0,react.useState)(0),width=_useState[0],setWidth=_useState[1];var _useState2=(0,react.useState)(0),height=_useState2[0],setHeight=_useState2[1];(0,react.useEffect)(function(){if(!element)return;var resizeObserver=new ResizeObserver(debounce(function(entries){var _entries$0$contentBox=entries[0].contentBoxSize[0],inlineSize=_entries$0$contentBox.inlineSize,blockSize=_entries$0$contentBox.blockSize;setWidth(inlineSize);setHeight(blockSize);},500));resizeObserver.observe(element);return function(){resizeObserver.disconnect();};},[element]);return{width:width,height:height};}
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useFormReset.mjs
var useFormReset = __webpack_require__(8343);
// EXTERNAL MODULE: ./node_modules/@react-aria/form/dist/useFormValidation.mjs
var useFormValidation = __webpack_require__(48868);
// EXTERNAL MODULE: ./node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(87979);
;// ./packages/components/src/select/HiddenMultiSelect.tsx
/**
 * Provides the behavior and accessibility implementation for a hidden `<select>` element, which
 * can be used in combination with `useSelect` to support browser form autofill, mobile form
 * navigation, and native HTML form submission.
 */function useHiddenMultiSelect(_ref,state,triggerRef){var _state$selectedKeys$v;var autoComplete=_ref.autoComplete,name=_ref.name,isDisabled=_ref.isDisabled,isRequired=_ref.isRequired,selectRef=_ref.selectRef;var _useVisuallyHidden=(0,VisuallyHidden/* useVisuallyHidden */.B)(),visuallyHiddenProps=_useVisuallyHidden.visuallyHiddenProps;(0,useFormReset/* useFormReset */.F)(selectRef,state.selectedKeys,state.setSelectedKeys);(0,useFormValidation/* useFormValidation */.X)({validationBehavior:'native',focus:function focus(){var _triggerRef$current;return(_triggerRef$current=triggerRef.current)==null?void 0:_triggerRef$current.focus();}},state,selectRef);// In Safari, the <select> cannot have `display: none` or `hidden` for autofill to work.
// In Firefox, there must be a <label> to identify the <select> whereas other browsers
// seem to identify it just by surrounding text.
// The solution is to use <VisuallyHidden> to hide the elements, which clips the elements to a
// 1px rectangle. In addition, we hide from screen readers with aria-hidden, and make the <select>
// non tabbable with tabIndex={-1}.
return{containerProps:Object.assign({},visuallyHiddenProps,{'aria-hidden':true,// @ts-expect-error - data-a11y-ignore is not a standard attribute
'data-react-aria-prevent-focus':true,'data-a11y-ignore':'aria-hidden-focus'}),inputProps:{style:{display:'none'}},selectProps:{tabIndex:-1,autoComplete:autoComplete,disabled:isDisabled,required:isRequired,name:name,value:state.selectionMode==='single'?(_state$selectedKeys$v=state.selectedKeys.values().next().value)==null?void 0:_state$selectedKeys$v.toString():Array.from(state.selectedKeys).map(function(key){return key.toString();}),onChange:function onChange(e){return state.setSelectedKeys(e.target.value);}}};}/**
 * Renders a hidden native `<select>` element, which can be used to support browser
 * form autofill, mobile form navigation, and native form submission.
 */function HiddenMultiSelect(props){var state=props.state,triggerRef=props.triggerRef,label=props.label,name=props.name,isDisabled=props.isDisabled;var selectRef=(0,react.useRef)(null);var _useHiddenMultiSelect=useHiddenMultiSelect(Object.assign({},props,{selectRef:selectRef}),state,triggerRef),containerProps=_useHiddenMultiSelect.containerProps,selectProps=_useHiddenMultiSelect.selectProps;// If used in a <form>, use a hidden input so the value can be submitted to a server.
// If the collection isn't too big, use a hidden <select> element for this so that browser
// autofill will work. Otherwise, use an <input type="hidden">.
if(state.collection.size<=300){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},containerProps,{"data-testid":"hidden-select-container",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{children:[label,/*#__PURE__*/(0,jsx_runtime.jsxs)("select",Object.assign({},selectProps,{ref:selectRef,multiple:state.selectionMode==='multiple',children:[/*#__PURE__*/(0,jsx_runtime.jsx)("option",{}),[].concat(state.collection.getKeys()).map(function(key){var item=state.collection.getItem(key);if(item&&item.type==='item'){return/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:item.key,children:item.textValue},item.key);}return null;})]}))]})}));}else if(name){var _state$selectedKeys$v2,_state$selectedKeys$v3,_Array$from$map;return/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"hidden",autoComplete:selectProps.autoComplete,name:name,disabled:isDisabled,value:state.selectionMode==='single'?(_state$selectedKeys$v2=(_state$selectedKeys$v3=state.selectedKeys.values().next().value)==null?void 0:_state$selectedKeys$v3.toString())!=null?_state$selectedKeys$v2:'':(_Array$from$map=Array.from(state.selectedKeys).map(function(key){return key.toString();}))!=null?_Array$from$map:''});}return null;}
;// ./packages/components/src/select/Select.tsx
var Select_excluded=["selectionMode"],Select_excluded2=["options"];var SelectComponent=/*#__PURE__*/react.forwardRef(function(_ref,forwardedRef){var _clsx2,_clsx3,_clsx4,_clsx5,_state$selectedItems;var _ref$selectionMode=_ref.selectionMode,selectionMode=_ref$selectionMode===void 0?'single':_ref$selectionMode,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,Select_excluded);var props=Object.assign({selectionMode:selectionMode},rest);var autoFocus=props.autoFocus,className=props.className,excludeFromTabOrder=props.excludeFromTabOrder,_props$isClearable=props.isClearable,isClearable=_props$isClearable===void 0?true:_props$isClearable,isDisabled=props.isDisabled,isSelectableAll=props.isSelectableAll,label=props.label,description=props.description,placeholder=props.placeholder,showTags=props.showTags,errorMessage=props.errorMessage;var refAllButton=(0,react.useRef)(null);var ref=(0,useObjectRef/* useObjectRef */.U)(forwardedRef);var disallowEmptySelection=!isClearable;var state=useMultiSelectState(Object.assign({},props,{disallowEmptySelection:disallowEmptySelection}));var _useMultiSelect=useMultiSelect(Object.assign({},props,{disallowEmptySelection:disallowEmptySelection}),state,ref),labelProps=_useMultiSelect.labelProps,triggerProps=_useMultiSelect.triggerProps,valueProps=_useMultiSelect.valueProps,menuProps=_useMultiSelect.menuProps;var _useButton=(0,useButton/* useButton */.s)(Object.assign({},triggerProps,{autoFocus:autoFocus,excludeFromTabOrder:excludeFromTabOrder,isDisabled:isDisabled}),ref),buttonProps=_useButton.buttonProps;var isActive=state.isOpen||state.selectedItems;var isAllSelection=state.selectionManager.isSelectAll;var isIndeterminateSelection=!isAllSelection&&!state.selectionManager.isEmpty;var hasClearButton=isClearable&&state.selectedItems;var hasHeader=isSelectableAll;var handleClear=function handleClear(){return state.selectionManager.clearSelection();};var handleSelectAll=function handleSelectAll(){return state.selectionManager.toggleSelectAll();};var handleRemove=function handleRemove(key){return state.selectionManager.toggleSelection(key);};var _useObserveElement=useObserveElement(ref.current),buttonWidth=_useObserveElement.width;var formatItems=function formatItems(items){var _clsx;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(Select_module.selectValueTag,(_clsx={},_clsx[Select_module.selectValueTagDisabled]=isDisabled,_clsx)),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Select_module.truncate,style:{maxWidth:buttonWidth-64},children:items.length>1?items.length+" valda":items[0].textValue}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{disabled:isDisabled,"aria-label":"Rensa alla",className:Select_module.clearButton,onClick:function onClick(){var _ref$current;handleClear();ref==null||(_ref$current=ref.current)==null||_ref$current.focus();},children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{width:20,height:20})})]});};(0,react.useEffect)(function(){if(refAllButton.current){refAllButton.current.indeterminate=isIndeterminateSelection;}},[isIndeterminateSelection]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HiddenMultiSelect,{isDisabled:props.isDisabled,isRequired:props.isRequired,name:props.name,state:state,triggerRef:ref,label:props.label+'-hidden'}),/*#__PURE__*/(0,jsx_runtime.jsxs)(TextField/* TextField */.A,Object.assign({},props,{className:(0,clsx/* default */.A)([Select_module.multiSelect],(_clsx2={},_clsx2[Select_module.multiSelectOpen]=state.isOpen,_clsx2),className),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.multiSelect,children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,Object.assign({},labelProps,{slot:'label',className:(0,clsx/* default */.A)(Select_module.selectLabel,(_clsx3={},_clsx3[Select_module.selectLabelActive]=isActive,_clsx3[Select_module.selectLabelDisabled]=isDisabled,_clsx3)),children:label})),description&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:(0,clsx/* default */.A)(Select_module.description,(_clsx4={},_clsx4[Select_module.descriptionDisabled]=isDisabled,_clsx4[Select_module.descriptionInvalid]=!!errorMessage,_clsx4)),slot:'description',children:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:errorMessage}),state.displayValidation.validationErrors.length?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.fieldError,children:errorMessage||state.displayValidation.validationErrors.map(function(error){return/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:error},error);})}):null,/*#__PURE__*/(0,jsx_runtime.jsx)(FocusRing/* FocusRing */.v,{focusRingClass:Select_module.buttonFocused,autoFocus:autoFocus,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.selectContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",Object.assign({},buttonProps,mergeProps/* mergeProps */.v,{className:(0,clsx/* default */.A)(Select_module.button,(_clsx5={},_clsx5[Select_module.buttonOpen]=state.isOpen,_clsx5[Select_module.buttonActive]=state.selectedItems,_clsx5[Select_module.buttonDisabled]=isDisabled,_clsx5)),"data-invalid":state.displayValidation.validationErrors.length>0||state.displayValidation.isInvalid,type:"button",ref:ref,children:[state.selectionMode==='multiple'&&!state.selectedItems?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:placeholder}):null,state.selectionMode!=='multiple'?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:((_state$selectedItems=state.selectedItems)==null?void 0:_state$selectedItems.length)===1?state.selectedItems[0].textValue:placeholder}):null,/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.icon,"aria-hidden":"true",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20})})]})),state.selectionMode==='multiple'&&state.selectedItems?/*#__PURE__*/(0,jsx_runtime.jsx)("span",Object.assign({},valueProps,{children:formatItems(state.selectedItems)})):null]})}),state.isOpen&&/*#__PURE__*/(0,jsx_runtime.jsxs)(SelectPopover,{isOpen:state.isOpen,onClose:state.close,className:Select_module.popover,triggerRef:ref,children:[hasHeader&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[isSelectableAll&&/*#__PURE__*/(0,jsx_runtime.jsx)(FocusRing/* FocusRing */.v,{focusRingClass:Select_module.listItemfocusRing,children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button",onClick:handleSelectAll,className:Select_module.selectAllButton,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.listBoxItem,tabIndex:-1,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.checkboxContainer,children:/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:Select_module.checkbox,type:"checkbox",checked:isAllSelection,ref:refAllButton,readOnly:true,tabIndex:-1})}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:'Select All'})]})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"selectDivider"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectListBox,Object.assign({},menuProps,{state:state})),hasClearButton&&false&&/*#__PURE__*/0]})]}),showTags&&state.selectedItems!==null&&/*#__PURE__*/(0,jsx_runtime.jsx)(TagGroup,Object.assign({"aria-label":'Selected Items',selectionBehavior:'toggle',onRemove:function onRemove(keys){return handleRemove([].concat(keys)[0]);}},mergeProps/* mergeProps */.v,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagList */.LY,{items:state.selectedItems,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Tag,{textValue:item.textValue,id:item.key,dismissable:true,isDisabled:isDisabled,children:item.textValue},item.key);}})}))]}))]});});var Select=/*#__PURE__*/react.forwardRef(function(_ref2,ref){var options=_ref2.options,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,Select_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(SelectComponent,Object.assign({},props,{items:options,ref:ref,children:function children(section){return section.children?/*#__PURE__*/(0,jsx_runtime.jsx)(Section/* Section */.w,{items:section.children,title:section.name,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Item/* Item */.q,{textValue:item.textValue,children:item.name});}},section.name):/*#__PURE__*/(0,jsx_runtime.jsx)(Item/* Item */.q,{textValue:section.textValue,children:section.name});}}));});Select.displayName='Select';

/***/ }),

/***/ 99381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ Spinner)
});

;// ./packages/components/src/spinner/Spinner.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Spinner_module = ({"tokens":"\"../theme/tokens.css\"","--icon-primary":"light-dark(#171717, #f2f2f2)","--icon-on-color":"light-dark(#ffffff, #ffffff)","container":"container_ytPE","spinner":"spinner_eR4D","rotating":"rotating_m95R","dark":"dark_YbwO","vsHidden":"vsHidden_wdPf"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(8723);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/spinner/Spinner.tsx
var Spinner=function Spinner(_ref){var small=_ref.small,dark=_ref.dark;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Spinner_module.container,role:"status",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(loader_circle/* default */.A,{className:(0,clsx/* default */.A)(Spinner_module.spinner,dark&&Spinner_module.dark),size:small?16:32,strokeWidth:small?2:3,absoluteStrokeWidth:true}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Spinner_module.vsHidden,children:"Laddar, v\xE4nligen v\xE4nta."})]});};

/***/ }),

/***/ 71383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Tabs.mjs + 7 modules
var dist_Tabs = __webpack_require__(19511);
;// ./packages/components/src/tabs/Tabs.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tabs_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--border-subtle":"light-dark(#bfbfbf, #383838)","--border-brand":"light-dark(#143c50, #143c50)","--focus":"0 0 0 2px white, 0 0 0 4px black","--breakpoint-sm":"(max-width: 767px)","container":"container_eqN_","list":"list_hLP_","listItem":"listItem_P0Ws","panel":"panel_Geh5"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/tabs/Tabs.tsx
'use client';// Define a type for children elements that can accept an id prop
var Tabs=function Tabs(_ref){var tabs=_ref.tabs,label=_ref.label,defaultSelected=_ref.defaultSelected,children=_ref.children;var childrenArray=react.Children.toArray(children);// Check if the number of children matches the number of tabs
if(childrenArray.length!==tabs.length){throw new Error("The number of children must match the number of tabs. Children: "+childrenArray.length+" Tabs: "+tabs.length);}// Create a map of tab titles to their corresponding content
var tabContentMap=childrenArray.reduce(function(acc,child,index){if(/*#__PURE__*/react.isValidElement(child)){var _tabs$index;var title=(_tabs$index=tabs[index])==null?void 0:_tabs$index.toLowerCase();if(title){acc[title]=/*#__PURE__*/react.cloneElement(child,{id:title});}}return acc;},{});return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_Tabs/* Tabs */.tU,{orientation:"vertical",defaultSelectedKey:defaultSelected&&defaultSelected.toLowerCase(),className:Tabs_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Tabs/* TabList */.wb,{"aria-label":label,className:Tabs_module.list,children:tabs.map(function(tab){return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Tabs/* Tab */.oz,{id:tab.toLowerCase(),className:Tabs_module.listItem,children:tab},tab);})}),tabs.map(function(tab){return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Tabs/* TabPanel */.Kp,{id:tab.toLowerCase(),className:Tabs_module.panel,children:tabContentMap[tab.toLowerCase()]},tab);})]});};

/***/ }),

/***/ 75756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ TextArea_TextArea)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextArea.mjs
var TextArea = __webpack_require__(43660);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/textarea/TextArea.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TextArea_module = ({"tokens":"\"../theme/tokens.css\"","--focus":"0 0 0 2px white, 0 0 0 4px black","--field-disabled":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--text-invalid":"light-dark(#e62323, #e62323)","--border-invalid":"light-dark(#e62323, #e62323)","--border-strong":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","textArea":"textArea_r3SS"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/textarea/TextArea.tsx
'use client';var TextArea_TextArea=/*#__PURE__*/react.forwardRef(function(props,ref){;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,TextArea/* TextAreaContext */.k);props=_useContextProps[0];ref=_useContextProps[1];return/*#__PURE__*/(0,jsx_runtime.jsx)(TextArea/* TextArea */.f,Object.assign({},props,{ref:ref,className:(0,clsx/* default */.A)(TextArea_module.textArea,props.className)}));});

/***/ }),

/***/ 69240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TextField),
/* harmony export */   o: () => (/* binding */ InputWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5933);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32945);
/* harmony import */ var _TextField_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53502);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var TextField=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(props,ref){var _ref,_props$defaultValue;;var _useContextProps=(0,react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .useContextProps */ .JT)(props,ref,react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .TextFieldContext */ .H);props=_useContextProps[0];ref=_useContextProps[1];var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState((_ref=(_props$defaultValue=props.defaultValue)!=null?_props$defaultValue:props.value)!=null?_ref:''),value=_React$useState[0],setValue=_React$useState[1];var handleChange=function handleChange(value){setValue(value);};var handleFocus=function handleFocus(event){setValue(event.target.value);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .TextField */ .A,Object.assign({},props,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.inputField,props.className),onChange:handleChange,onFocus:handleFocus,value:value,children:props.children}));});// TODO: Remove component
var InputWrapper=function InputWrapper(){return null;};

/***/ }),

/***/ 66995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baseColors: () => (/* binding */ baseColors),
/* harmony export */   breakpoints: () => (/* binding */ breakpoints),
/* harmony export */   semantic: () => (/* binding */ semantic),
/* harmony export */   spacing: () => (/* binding */ spacing),
/* harmony export */   states: () => (/* binding */ states),
/* harmony export */   transitions: () => (/* binding */ transitions),
/* harmony export */   typography: () => (/* binding */ typography)
/* harmony export */ });
var baseColors={black:'#000000',white:'#ffffff',blackHover:'#0d0d0d',whiteHover:'#e6e6e6',gray10:'#f2f2f2',gray20:'#e6e6e6',gray30:'#d9d9d9',gray40:'#cccccc',gray50:'#bfbfbf',gray60:'#b3b3b3',gray70:'#a6a6a6',gray80:'#999999',gray90:'#8c8c8c',gray100:'#808080',gray110:'#737373',gray120:'#666666',gray130:'#5d5d5d',gray140:'#525252',gray150:'#474747',gray160:'#383838',gray170:'#333333',gray180:'#262626',gray190:'#212121',gray200:'#171717',blue10:'#eaf2f6',blue20:'#d5e5ed',blue40:'#abcbdb',blue50:'#abcbdb',blue60:'#82b0c9',blue70:'#6ca3c0',blue80:'#5897b8',blue90:'#4289ad',blue100:'#2e7ca5',blue140:'#25607f',blue170:'#143c50',purple80:'#b46ab4',purple140:'#954b95',red100:'#b90835',signalBlue20:'#eaf2f6',signalBlue140:'#0066cc',signalGreen20:'#d5f2d9',signalGreen140:'#008d3c',signalRed20:'#ffdfdf',signalRed140:'#e62323',signalRed160:'#b31b1b',signalRed180:'#801313',signalYellow20:'#fff8e1',signalYellow140:'#fdb813'};var typography={fontFamily:'"Inter", sans-serif',lineHeight01:1,// 16px
lineHeight02:1.125,// 18px (18/16)
lineHeight03:1.25,// 20px (20/16)
lineHeight04:1.375,// 22px (22/16)
lineHeight05:1.5,// 24px (24/16)
lineHeight06:1.75,// 28px (28/16)
lineHeight07:2,// 32px (32/16)
lineHeight08:2.25,// 36px (36/16)
lineHeight09:2.5,// 40px (40/16)
size01:'0.75rem',// 12px (12/16)
size02:'0.875rem',// 14px (14/16)
size03:'1rem',// 16px (16/16)
size04:'1.125rem',// 18px (18/16)
size05:'1.25rem',// 20px (20/16)
size06:'1.5rem',// 24px (24/16)
size07:'1.75rem',// 28px (28/16)
size08:'2rem',// 32px (32/16)
size09:'2.25rem',// 36px (36/16)
size10:'2.625rem',// 42px (40/16)
weightThin:100,weightExtraLight:200,weightLight:300,weightRegular:400,weightMedium:500,weightSemiBold:600,weightBold:700,weightExtraBold:800,weightBlack:900};var spacing={'01':'0.125rem',// 2px
'02':'0.25rem',// 4px
'03':'0.5rem',// 8px
'04':'0.75rem',// 12px
'05':'1rem',// 16px
'06':'1.5rem',// 24px
'07':'2rem',// 32px
'08':'2.5rem',// 40px
'09':'3rem',// 48px
'10':'4rem',// 64px
'11':'5rem',// 80px
'12':'6rem'// 96px
};var states={focus:'0 0 0 2px white, 0 0 0 4px black'};var transitions={slow:'500ms',normal:'300ms',fast:'250ms'};var breakpoints={sm:'(max-width: 767px)',md:'(min-width: 768px)',lg:'(min-width: 1200px)',xl:'(min-width: 1440px)',forcedColorsMode:'(forced-colors: active)',darkMode:'(prefers-color-scheme: dark)',prefersReducedMotion:'(prefers-reduced-motion: reduced)'};var semantic={background01:"light-dark("+baseColors.white+", "+baseColors.gray30+")",backgroundHover01:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",backgroundInverse01:"light-dark("+baseColors.gray30+", "+baseColors.gray10+")",layer01:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",layerHover01:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",layerSelected01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",layerSelectedHover01:"light-dark("+baseColors.gray40+", "+baseColors.gray20+")",layer02:"light-dark("+baseColors.white+", "+baseColors.gray160+")",layerHover02:"light-dark("+baseColors.whiteHover+", "+baseColors.gray20+")",layerSelected02:"light-dark("+baseColors.gray30+", "+baseColors.gray140+")",layerSelectedHover02:"light-dark("+baseColors.gray40+", "+baseColors.gray130+")",layerAccent01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",layerAccentHover01:"light-dark("+baseColors.gray40+", "+baseColors.gray20+")",layerAccentSelected01:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",layerAccent02:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",layerAccentHover02:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",layerAccentSelected02:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",brandPrimary:"light-dark("+baseColors.red100+", "+baseColors.red100+")",borderStrong:"light-dark("+baseColors.gray30+", "+baseColors.gray10+")",borderMedium:"light-dark("+baseColors.gray110+", "+baseColors.gray90+")",borderSubtle:"light-dark("+baseColors.gray50+", "+baseColors.gray160+")",borderBrand:"light-dark("+baseColors.blue170+", "+baseColors.blue170+")",borderInvalid:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",borderDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",borderSkeleton:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",borderInverse:"light-dark("+baseColors.white+", "+baseColors.gray180+")",field01:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",fieldHover01:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",fieldActive01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",field02:"light-dark("+baseColors.white+", "+baseColors.gray160+")",fieldHover02:"light-dark("+baseColors.whiteHover+", "+baseColors.gray20+")",fieldActive02:"light-dark("+baseColors.gray30+", "+baseColors.gray140+")",fieldDisabled:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",fieldSkeleton:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",iconPrimary:"light-dark("+baseColors.gray30+", "+baseColors.gray10+")",iconSecondary:"light-dark("+baseColors.blue170+", "+baseColors.blue170+")",iconInverse:"light-dark("+baseColors.white+", "+baseColors.black+")",iconOnColor:"light-dark("+baseColors.white+", "+baseColors.white+")",iconDanger:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",iconDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",iconSuccess:"light-dark("+baseColors.signalGreen140+", "+baseColors.signalGreen140+")",iconInfo:"light-dark("+baseColors.signalBlue140+", "+baseColors.signalBlue140+")",iconWarning:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",iconImportant:"light-dark("+baseColors.signalYellow140+", "+baseColors.signalYellow140+")",linkEnabled:"light-dark("+baseColors.blue100+", "+baseColors.blue90+")",linkHover:"light-dark("+baseColors.blue170+", "+baseColors.blue80+")",linkPressed:"light-dark("+baseColors.gray200+", "+baseColors.blue60+")",linkVisited:"light-dark("+baseColors.purple140+", "+baseColors.purple80+")",notificationBorderSuccess:"light-dark("+baseColors.signalGreen140+", "+baseColors.signalGreen140+")",notificationBorderInfo:"light-dark("+baseColors.signalBlue140+", "+baseColors.signalBlue140+")",notificationBorderImportant:"light-dark("+baseColors.signalYellow140+", "+baseColors.signalYellow140+")",notificationBorderWarning:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",notificationBackgroundSuccess:"light-dark("+baseColors.signalGreen20+", "+baseColors.gray10+")",notificationBackgroundInfo:"light-dark("+baseColors.signalBlue20+", "+baseColors.gray10+")",notificationBackgroundImportant:"light-dark("+baseColors.signalYellow20+", "+baseColors.gray10+")",notificationBackgroundWarning:"light-dark("+baseColors.signalRed20+", "+baseColors.gray10+")",textPrimary:"light-dark("+baseColors.gray30+", "+baseColors.gray10+")",textSecondary:"light-dark("+baseColors.gray140+", "+baseColors.gray70+")",textBrand:"light-dark("+baseColors.blue170+", "+baseColors.gray10+")",textOnColor:"light-dark("+baseColors.white+", "+baseColors.white+")",textInverse:"light-dark("+baseColors.white+", "+baseColors.black+")",textSubtle:"light-dark("+baseColors.gray90+", "+baseColors.gray90+")",textDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",textInvalid:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",textPlaceholder:"light-dark("+baseColors.gray70+", "+baseColors.gray140+")",buttonBackgroundPrimary:"light-dark("+baseColors.blue170+", "+baseColors.blue100+")",buttonBackgroundPrimaryHover:"light-dark("+baseColors.blue140+", "+baseColors.blue140+")",buttonBackgroundPrimaryActive:"light-dark("+baseColors.blue100+", "+baseColors.blue170+")",buttonBackgroundSecondary:"light-dark("+baseColors.white+", "+baseColors.gray30+")",buttonBackgroundSecondaryHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",buttonBackgroundSecondaryActive:"light-dark("+baseColors.gray30+", "+baseColors.gray180+")",buttonBackgroundTertiaryHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",buttonBackgroundTertiaryActive:"light-dark("+baseColors.gray30+", "+baseColors.gray180+")",buttonBackgroundDanger:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",buttonBackgroundDangerHover:"light-dark("+baseColors.signalRed160+", "+baseColors.signalRed160+")",buttonBackgroundDangerActive:"light-dark("+baseColors.signalRed180+", "+baseColors.signalRed180+")",buttonBackgroundDisabled:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",buttonBackgroundSkeleton:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",buttonBackgroundGhostHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",buttonBackgroundGhostActive:"light-dark("+baseColors.gray30+", "+baseColors.gray190+")",buttonBorderPrimary:"light-dark("+baseColors.blue170+", "+baseColors.gray10+")",logoPrimary:"light-dark("+baseColors.red100+", "+baseColors.white+")"};

/***/ }),

/***/ 39051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ Tooltip_Tooltip),
  k: () => (/* binding */ TooltipTrigger)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/tooltip/Tooltip.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tooltip_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--background-inverse-01":"light-dark(#171717, #f2f2f2)","--text-inverse":"light-dark(#f2f2f2, #171717)","tooltip":"tooltip_L2zx","arrow":"arrow_bl7N"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Tooltip.mjs + 3 modules
var Tooltip = __webpack_require__(39013);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(45745);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/tooltip/Tooltip.tsx
var _excluded=["children","placement","className"],_excluded2=["children","delay"];function Tooltip_Tooltip(_ref){var children=_ref.children,placement=_ref.placement,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Tooltip/* Tooltip */.m_,Object.assign({className:(0,clsx/* default */.A)(Tooltip_module.tooltip,className),placement:placement},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Tooltip_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:8,height:8,viewBox:"0 0 8 8",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L4 4 L8 0"})})}),children]}));}function TooltipTrigger(_ref2){var children=_ref2.children,_ref2$delay=_ref2.delay,delay=_ref2$delay===void 0?0:_ref2$delay,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* TooltipTrigger */.k$,Object.assign({delay:delay},props,{children:children}));}

/***/ }),

/***/ 76578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--text-disabled":"light-dark(#bfbfbf, #525252)","--border-strong":"light-dark(#171717, #f2f2f2)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--border-disabled":"light-dark(#bfbfbf, #525252)","--breakpoint-sm":"(max-width: 767px)","--border-invalid":"light-dark(#e62323, #e62323)","--icon-on-color":"light-dark(#ffffff, #ffffff)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--button-background-primary-active":"light-dark(#2e7ca5, #143c50)","--button-background-primary-hover":"light-dark(#25607f, #25607f)","--field-disabled":"light-dark(#f2f2f2, #262626)","--focus":"0 0 0 2px white, 0 0 0 4px black","wrap":"wrap_YzPY","checkboxInner":"checkboxInner_Nam1","checkbox":"checkbox_J2GB","checkboxGroup":"checkboxGroup_iAq9"});

/***/ }),

/***/ 96708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--breakpoint-md":"(min-width: 768px)","--breakpoint-lg":"(min-width: 1200px)","--breakpoint-xl":"(min-width: 1440px)","container":"container_uCKZ","grid":"grid_M0Fc","fluid":"fluid_Y1tE","col":"col_tmG6","col-1":"col-1_OVvW","col-2":"col-2_XfVI","col-3":"col-3_KxqE","col-4":"col-4_Ovxr","col-5":"col-5_uIyd","col-6":"col-6_i8WR","col-7":"col-7_devX","col-8":"col-8_tlAZ","col-9":"col-9_Nbjm","col-10":"col-10_rwyP","col-11":"col-11_ShOw","col-12":"col-12_eQeJ","offset-1":"offset-1_ZQkJ","offset-2":"offset-2_Reek","offset-3":"offset-3_SDkl","offset-4":"offset-4_L0XB","offset-5":"offset-5_Mz95","offset-6":"offset-6_Zp68","offset-7":"offset-7_ZApX","offset-8":"offset-8_UZTZ","offset-9":"offset-9_FiKS","offset-10":"offset-10_hN9R","offset-11":"offset-11_cqgv"});

/***/ }),

/***/ 53502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--border-strong":"light-dark(#171717, #f2f2f2)","--border-invalid":"light-dark(#e62323, #e62323)","--text-disabled":"light-dark(#bfbfbf, #525252)","--text-invalid":"light-dark(#e62323, #e62323)","--field-disabled":"light-dark(#f2f2f2, #262626)","--focus":"0 0 0 2px white, 0 0 0 4px black","inputField":"inputField_NRYV","inputWrapper":"inputWrapper_NR0B","label":"label_UgTd","text":"text_E1GG","passwordText":"passwordText_gBIs","wrap":"wrap_ljmz","passwordButton":"passwordButton_kacG"});

/***/ })

}]);