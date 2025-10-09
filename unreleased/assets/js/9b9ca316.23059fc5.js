"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5095],{

/***/ 6974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"listBox":"listBox_l3jg","listBoxPopover":"listBoxPopover_OG2Y","listBoxSectionHeading":"listBoxSectionHeading_R5mH","listBoxButton":"listBoxButton_LfGK","listBoxItem":"listBoxItem_eA9_","listBoxLoadMoreItem":"listBoxLoadMoreItem_RWDs"});

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

/***/ 11046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
'use client';var _excluded=["variant","children","className","isContained"];/**
 * Accordions help reduce visual clutter on a page by organizing content into collapsible sections.
 */var Accordion=function Accordion(_ref){var variant=_ref.variant,children=_ref.children,className=_ref.className,isContainedFromProp=_ref.isContained,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var isContained=isContainedFromProp||variant==='contained';return/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionContext/* AccordionContext */.C.Provider,{value:{isContained:isContained},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Disclosure/* DisclosureGroup */.Tw,Object.assign({className:(0,clsx/* default */.A)(Accordion_module.root,isContained?Accordion_module.contained:Accordion_module.uncontained,className)},props,{children:children}))});};

/***/ }),

/***/ 13225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ComponentHeader)
/* harmony export */ });
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74351);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93574);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56636);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42350);
/* harmony import */ var _site_src_components_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75575);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
/* eslint-disable @nx/enforce-module-boundaries */var ComponentHeader=function ComponentHeader(_ref){var name=_ref.name,friendlyName=_ref.friendlyName,overrideHeadlessLink=_ref.overrideHeadlessLink,overrideHeadlessLinkTitle=_ref.overrideHeadlessLinkTitle;var baseUrl=_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay;var componentPath="?path=/docs/components-"+name.toLowerCase()+"--docs";var storybookHost= false?0:baseUrl('/storybook');var storybookLink=storybookHost+"/"+componentPath;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section",{className:"component-header",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .Grid */ .x,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .GridItem */ .E,{size:"auto",className:"friendlyName",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_5__/* .LinkButton */ .z,{href:storybookLink,variant:"tertiary",icon:_site_src_components_icons__WEBPACK_IMPORTED_MODULE_0__/* .EmptyIcon */ .F,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_site_src_components_icons__WEBPACK_IMPORTED_MODULE_0__/* .StorybookIcon */ .q,{size:24,color:'#FF4785'}),"Storybook"]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_5__/* .LinkButton */ .z,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,iconPlacement:"left",children:overrideHeadlessLinkTitle?overrideHeadlessLinkTitle:'React Aria'})})]})});};

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
var _excluded=["className","children"];var ListBox=function ListBox(_ref){var className=_ref.className,children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Virtualizer/* Virtualizer */.Y,{layout:SectionedListLayout,layoutOptions:{headingHeight:44},children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_ListBox/* ListBox */.qF,Object.assign({className:(0,clsx/* default */.A)(ListBox_module/* default */.A.listBox,className)},rest,{children:children}))});};

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

/***/ 45644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ AccordionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var AccordionContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

/***/ }),

/***/ 48001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ ListBoxPopover)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1160);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21416);
/* harmony import */ var _ListBox_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["className","children"];var ListBoxPopover=function ListBoxPopover(_ref){var className=_ref.className,children=_ref.children,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .Popover */ .A,Object.assign({className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(className,_ListBox_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.listBoxPopover),offset:0},rest,{children:children}));};

/***/ }),

/***/ 64657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_combobox_mdx_9b9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-combobox-mdx-9b9.json
const site_docs_components_combobox_mdx_9b9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/combobox","title":"ComboBox","description":"Sökbar version av Select","source":"@site/docs/components/combobox.mdx","sourceDirName":"components","slug":"/components/combobox","permalink":"/unreleased/components/combobox","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ComboBox","description":"Sökbar version av Select","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regenerator.js
var regenerator = __webpack_require__(22007);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(10467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/combobox/ComboBox.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ComboBox_module = ({"combobox":"combobox_kSJb","inputField":"inputField_oWSg","medium":"medium_ptka","text":"text_ngKo","wrap":"wrap_JKDx","button":"button_yH32","icon":"icon_C34F","emptyState":"emptyState_X_hw"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ComboBox.mjs + 37 modules
var ComboBox = __webpack_require__(20050);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(34704);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(19060);
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBoxPopover.tsx
var ListBoxPopover = __webpack_require__(48001);
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBox.tsx + 1 modules
var ListBox = __webpack_require__(22247);
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBoxItem.tsx
var ListBoxItem = __webpack_require__(98437);
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBoxSection.tsx
var ListBoxSection = __webpack_require__(73807);
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/combobox/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"showList":"Show list","noResultsFound":"No results found"},"sv":{"showList":"Visa lista","noResultsFound":"Inga träffar"}}');
;// ./packages/components/src/combobox/ComboBox.tsx
'use client';var _excluded=["label","description","errorMessage","children","items","className","errorPosition","size","popover"];function ComboBox_ComboBox(_ref){var _clsx,_clsx2;var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,children=_ref.children,items=_ref.items,className=_ref.className,_ref$errorPosition=_ref.errorPosition,errorPosition=_ref$errorPosition===void 0?'top':_ref$errorPosition,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,popover=_ref.popover,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var inputRef=react.useRef(null);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var handleMouseUp=function handleMouseUp(event){if(event.currentTarget.value){var _inputRef$current;(_inputRef$current=inputRef.current)==null||_inputRef$current.select();}};return/*#__PURE__*/(0,jsx_runtime.jsxs)(ComboBox/* ComboBox */.a3,Object.assign({className:(0,clsx/* default */.A)(ComboBox_module.combobox,className)},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapper/* LabelWrapper */.cR,{popover:popover,children:label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{children:label})}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:description}),errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",children:errorMessage}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:ComboBox_module.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,{className:(0,clsx/* default */.A)(ComboBox_module.inputField,(_clsx={},_clsx[ComboBox_module.medium]=size==='medium',_clsx)),onMouseUp:handleMouseUp,ref:inputRef}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{className:(0,clsx/* default */.A)(ComboBox_module.button,(_clsx2={},_clsx2[ComboBox_module.medium]=size==='medium',_clsx2)),"aria-label":strings.format('showList'),children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:ComboBox_module.icon,"aria-hidden":"true",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20,"aria-hidden":true})})})]}),errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",children:errorMessage}),/*#__PURE__*/(0,jsx_runtime.jsx)(ListBoxPopover/* ListBoxPopover */.f,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ListBox/* ListBox */.q,{items:items,renderEmptyState:function renderEmptyState(){return/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{className:ComboBox_module.emptyState,children:strings.format('noResultsFound')});},children:children})})]}));}function ComboBoxItem(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(ListBoxItem/* ListBoxItem */.n,Object.assign({},props));}function ComboBoxSection(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(ListBoxSection/* ListBoxSection */.r,Object.assign({},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(CollectionBuilder/* Collection */.pM,{items:props.children,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(ComboBoxItem,{children:item.name},item.id);}})}));}
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ListBox.mjs + 3 modules
var dist_ListBox = __webpack_require__(79255);
// EXTERNAL MODULE: ./packages/components/src/spinner/Spinner.tsx + 2 modules
var Spinner = __webpack_require__(37195);
;// ./packages/components/src/list-box/intl/translations.json
const list_box_intl_translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"loading...":"Loading..."},"sv":{"loading...":"Laddar..."}}');
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBox.module.css
var ListBox_module = __webpack_require__(6974);
;// ./packages/components/src/list-box/ListBoxLoadMoreItem.tsx
var ListBoxLoadMoreItem_excluded=["className","children","isLoading"];var ListBoxLoadMoreItem=function ListBoxLoadMoreItem(_ref){var className=_ref.className,children=_ref.children,isLoading=_ref.isLoading,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,ListBoxLoadMoreItem_excluded);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(list_box_intl_translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_ListBox/* ListBoxLoadMoreItem */.CI,Object.assign({className:(0,clsx/* default */.A)(ListBox_module/* default */.A.listBoxLoadMoreItem,className),isLoading:isLoading},rest,{children:children||/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Spinner/* Spinner */.y,{small:true}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{"aria-hidden":true,children:strings.format('loading...')})]})}));};
// EXTERNAL MODULE: ./node_modules/@react-stately/data/dist/useAsyncList.mjs + 1 modules
var useAsyncList = __webpack_require__(91705);
;// ./apps/docs/src/components/examples/combobox/ComboboxExamples.tsx
var BasicExample=function BasicExample(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(ComboBox_ComboBox,{label:"V\xE4lj din favoritfrukt",description:"Du kan bara v\xE4lja en",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ComboBoxItem,{id:"Lime",children:"Lime"}),/*#__PURE__*/(0,jsx_runtime.jsx)(ComboBoxItem,{id:"\xC4pple",children:"\xC4pple"}),/*#__PURE__*/(0,jsx_runtime.jsx)(ComboBoxItem,{id:"Banan",children:"Banan"}),/*#__PURE__*/(0,jsx_runtime.jsx)(ComboBoxItem,{id:"Kiwi",children:"Kiwi"}),/*#__PURE__*/(0,jsx_runtime.jsx)(ComboBoxItem,{id:"Apelsin",children:"Apelsin"})]});};var ControlledExample=function ControlledExample(){var _React$useState=react.useState(null),selectedFruit=_React$useState[0],setSelectedFruit=_React$useState[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(ComboBox_ComboBox,{label:"V\xE4lj din favoritfrukt",description:"Du kan bara v\xE4lja en",selectedKey:selectedFruit,onSelectionChange:setSelectedFruit,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ComboBoxItem,{id:"Lime",children:"Lime"}),/*#__PURE__*/(0,jsx_runtime.jsx)(ComboBoxItem,{id:"\xC4pple",children:"\xC4pple"}),/*#__PURE__*/(0,jsx_runtime.jsx)(ComboBoxItem,{id:"Banan",children:"Banan"}),/*#__PURE__*/(0,jsx_runtime.jsx)(ComboBoxItem,{id:"Kiwi",children:"Kiwi"}),/*#__PURE__*/(0,jsx_runtime.jsx)(ComboBoxItem,{id:"Apelsin",children:"Apelsin"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("pre",{style:{marginTop:'1rem'},children:["Vald frukt: ",selectedFruit]})]});};var SectionedExample=function SectionedExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)(ComboBox_ComboBox,{label:"V\xE4lj din favoritfrukt eller gr\xF6nsak",description:"Du kan bara v\xE4lja en",items:[{name:'Grönsaker',children:[{name:'Morot',id:2},{name:'Broccoli',id:3},{name:'Spenat',id:4},{name:'Potatis',id:5},{name:'Tomat',id:6}]},{name:'Frukter',children:[{name:'Äpple',id:11},{name:'Banan',id:12},{name:'Kiwi',id:13},{name:'Fläder',id:14},{name:'Nektarin',id:15}]}],children:function children(section){return/*#__PURE__*/(0,jsx_runtime.jsx)(ComboBoxSection,Object.assign({},section,{id:section.name}));}});};var AsyncExample=function AsyncExample(){var list=(0,useAsyncList/* useAsyncList */.w)({load:function load(_ref){return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee(){var signal,cursor,filterText,res,_yield$res$json,results,next;return (0,regenerator/* default */.A)().w(function(_context){while(1)switch(_context.n){case 0:signal=_ref.signal,cursor=_ref.cursor,filterText=_ref.filterText;if(cursor){cursor=cursor.replace(/^http:\/\//i,'https://');}_context.n=1;return fetch(cursor||"https://swapi.py4e.com/api/people/?search="+filterText,{signal:signal});case 1:res=_context.v;_context.n=2;return res.json();case 2:_yield$res$json=_context.v;results=_yield$res$json.results;next=_yield$res$json.next;return _context.a(2,{items:results,cursor:next});}},_callee);}))();}});return/*#__PURE__*/(0,jsx_runtime.jsxs)(ComboBox_ComboBox,{label:"Star Wars Character Lookup",placeholder:"V\xE4lj eller s\xF6k karakt\xE4r",description:"Anropar ett externt API",inputValue:list.filterText,onInputChange:list.setFilterText,allowsEmptyCollection:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(CollectionBuilder/* Collection */.pM,{items:list.items,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(ComboBoxItem,{id:item.name,children:item.name});}}),list.isLoading&&/*#__PURE__*/(0,jsx_runtime.jsx)(ListBoxLoadMoreItem,{isLoading:list.isLoading})]});};
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(68713);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
;// ./apps/docs/docs/components/combobox.mdx


const frontMatter = {
	title: 'ComboBox',
	description: 'Sökbar version av Select',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};






const toc = [{
  "value": "Kontrollerat val",
  "id": "kontrollerat-val",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "Val av komponent",
  "id": "val-av-komponent",
  "level": 3
}, {
  "value": "Sektioner",
  "id": "sektioner",
  "level": 2
}, {
  "value": "Asynkron laddning",
  "id": "asynkron-laddning",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "ComboBox",
  "id": "combobox",
  "level": 3
}, {
  "value": "ComboBoxItem",
  "id": "comboboxitem",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
      name: "Combobox",
      friendlyName: "Flerval med sök, väljare med sök, dropdown med sök",
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/ComboBox.html"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En ComboBox är en sökbar version av Select. Combobox används för att välja ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ett"
      }), " alternativ av fler än fyra (4) alternativ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { ComboBox, ComboBoxItem } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ComboBox\n  label='Välj din favoritfrukt'\n  description='Du kan bara välja en'\n>\n  <ComboBoxItem id='Lime'>Lime</ComboBoxItem>\n  <ComboBoxItem id='Äpple'>Äpple</ComboBoxItem>\n  <ComboBoxItem id='Banan'>Banan</ComboBoxItem>\n  <ComboBoxItem id='Kiwi'>Kiwi</ComboBoxItem>\n  <ComboBoxItem id='Apelsin'>Apelsin</ComboBoxItem>\n</ComboBox>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(BasicExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kontrollerat-val",
      children: "Kontrollerat val"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd attributet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), " och eventet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onSelectionChange"
      }), " för att använda controlled value på ComboBox.\nDen valda ComboBoxItems värde skickas till callbacken, så kan du använda det för att uppdatera ditt state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import React from 'react'\nimport { Key } from 'react-aria-components'\n\nconst [selectedFruit, setSelectedFruit] = React.useState<Key | null>(null)\n\nreturn (\n  <ComboBox\n    label='Välj din favoritfrukt eller grönsak'\n    description='Du kan bara välja en'\n    selectedKey={selectedFruit}\n    onSelectionChange={setSelectedFruit}\n  >\n    <ComboBoxItem id='Lime'>Lime</ComboBoxItem>\n    <ComboBoxItem id='Äpple'>Äpple</ComboBoxItem>\n    <ComboBoxItem id='Banan'>Banan</ComboBoxItem>\n    <ComboBoxItem id='Kiwi'>Kiwi</ComboBoxItem>\n    <ComboBoxItem id='Apelsin'>Apelsin</ComboBoxItem>\n  </ComboBox>\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(ControlledExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "val-av-komponent",
      children: "Val av komponent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Om det ska gå att välja flera eller inga alternativ är det ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/components/checkbox",
          children: "Checkbox"
        }), " eller ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/components/select",
          children: "Select"
        }), " som ska användas."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Om det är färre alternativ än fyra (4) används med fördel ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/components/radio",
          children: "Radio"
        }), " istället."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sektioner",
      children: "Sektioner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vid många val kan alternativen struktureras i sektioner genom att dela in dem enligt följande:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { ComboBoxSection } from '@midas-ds/components'\n\nconst options = [\n  {\n    name: 'Grönsaker',\n    children: [\n      { name: 'Morot', id: 2 },\n      { name: 'Broccoli', id: 3 },\n      { name: 'Spenat', id: 4 },\n      { name: 'Potatis', id: 5 },\n      { name: 'Tomat', id: 6 },\n    ],\n  },\n  {\n    name: 'Frukter',\n    children: [\n      { name: 'Äpple', id: 11 },\n      { name: 'Banan', id: 12 },\n      { name: 'Kiwi', id: 13 },\n      { name: 'Fläder', id: 14 },\n      { name: 'Nektarin', id: 15 },\n    ],\n  },\n]\n\nreturn (\n  <ComboBox\n    label='Välj din favoritfrukt eller grönsak'\n    description='Du kan bara välja en'\n    items={options}\n  >\n    {section => (\n      <ComboBoxSection\n        {...section}\n        id={section.name}\n      />\n    )}\n  </ComboBox>\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(SectionedExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "asynkron-laddning",
      children: "Asynkron laddning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om data finns på en server kan en laddningsindikator visas med en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ListBoxLoadMoreItem"
      }), "-komponent."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "allowsEmptyCollection"
      }), " hos ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ComboBox"
      }), " och rendera bara ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ListBoxLoadMoreItem"
      }), " vid laddning för att visa ett \"inga-träffar\"-meddelande om sökfrågan inte gav något resultat."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useAsyncList } from 'react-stately'\nimport { Collection } from 'react-aria-components'\nimport { ComboBox, ComboBoxItem, ListBoxLoadMoreItem } from '@midas-ds/components'\n\nconst list = useAsyncList<{ name: string }>({\n  async load({ signal, cursor, filterText }) {\n    if (cursor) {\n      cursor = cursor.replace(/^http:\\/\\//i, 'https://')\n    }\n\n    const res = await fetch(cursor || `https://swapi.py4e.com/api/people/?search=${filterText}`, { signal })\n\n    const { results, next } = await res.json()\n\n    return {\n      items: results,\n      cursor: next,\n    }\n  },\n})\n\nreturn (\n  <ComboBox\n    label='Star Wars Character Lookup'\n    placeholder='Välj eller sök karaktär'\n    description='Anropar ett externt API'\n    inputValue={list.filterText}\n    onInputChange={list.setFilterText}\n    // highlight-next-line\n    allowsEmptyCollection\n  >\n    // highlight-start\n    <Collection items={list.items}>\n      {item => {\n        return <ComboBoxItem id={item.name}>{item.name}</ComboBoxItem>\n      }}\n    </Collection>\n    {list.isLoading && <ListBoxLoadMoreItem isLoading={list.isLoading} />}\n    // highlight-end\n  </ComboBox>\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fler exempel med bland annat infinite scroll finns i ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/ComboBox.html#asynchronous-loading",
        children: "React Arias dokumentation för ComboBox"
      })]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(AsyncExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "combobox",
      children: "ComboBox"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "ComboBox"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comboboxitem",
      children: "ComboBoxItem"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "ComboBoxItem",
      defaultOpen: false
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

/***/ 68713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
var common = __webpack_require__(48004);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/Pressable.mjs
var Pressable = __webpack_require__(94752);
;// ./apps/docs/src/utils/jsdocLinkToMarkdown.ts
var jsdocLinkToMarkdown=function jsdocLinkToMarkdown(jsdocLink){if(!jsdocLink.includes('@link')){return jsdocLink;}var textBefore=jsdocLink.substring(0,jsdocLink.indexOf('{@link')).replace(/@\S*/g,'');var url=jsdocLink.substring(jsdocLink.indexOf('http'),jsdocLink.lastIndexOf('/'));var linkText=jsdocLink.substring(jsdocLink.lastIndexOf('/')+2,jsdocLink.lastIndexOf('}'));return textBefore+". See ["+linkText+"]("+url+").";};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/PropsTable.tsx
var DisplayCompositeTypes=function DisplayCompositeTypes(_ref){var props=_ref.props;switch(props.type.name){case'enum':{return/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Pressable/* Pressable */.o,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{role:"button",style:{cursor:'pointer'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props.type.raw,inline:true,language:"typescript",markers:[]})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"hljs-code",children:props.type.value.map(function(r,i){return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{children:[i===0?' ':' | ',/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:r.value.replace(/"/g,"'"),inline:true,language:"typescript",markers:[]})]},""+r.value+i);})})})]});}default:return/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props.type.name,inline:true,language:"typescript",markers:[]});}};var PropTable=function PropTable(_ref2){var _ComponentsDocs$find;var name=_ref2.name,_ref2$defaultOpen=_ref2.defaultOpen,defaultOpen=_ref2$defaultOpen===void 0?true:_ref2$defaultOpen;var globalData=(0,useGlobalData/* default */.Ay)();var ComponentsDocs=globalData['docusaurus-plugin-react-docgen-typescript']["default"];var props=(_ComponentsDocs$find=ComponentsDocs.find(function(componentDoc){return componentDoc.displayName===name;}))==null?void 0:_ComponentsDocs$find.props;if(!props){return null;}var _Object$entries$reduc=Object.entries(props).reduce(function(acc,_ref3){var key=_ref3[0],value=_ref3[1];if(key.startsWith('on')){acc.events[key]=value;}else if(key.startsWith('aria-')){acc.accessibility[key]=value;}else{acc.rest[key]=value;}return acc;},{events:{},accessibility:{},rest:{}}),events=_Object$entries$reduc.events,accessibility=_Object$entries$reduc.accessibility,rest=_Object$entries$reduc.rest;var Grid=function Grid(_ref4){var propGroup=_ref4.propGroup,_ref4$showDefault=_ref4.showDefault,showDefault=_ref4$showDefault===void 0?true:_ref4$showDefault;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:propstable_module.propsGridTable,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Name"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Type"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:showDefault&&'Default'}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Description"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{children:Object.keys(propGroup).map(function(key){return/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("td",{"data-title":"Name",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:key,inline:true,language:"typescript",markers:[]}),props[key].required&&' *']}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Type",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DisplayCompositeTypes,{props:props[key]})}),showDefault?/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Default",children:props[key].defaultValue?/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props[key].defaultValue.value,inline:true,language:"typescript",markers:[]}):'-'}):/*#__PURE__*/(0,jsx_runtime.jsx)("td",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Description",children:/*#__PURE__*/(0,jsx_runtime.jsx)(lib/* Markdown */.oz,{children:jsdocLinkToMarkdown(props[key].description)})})]},key);})})]})});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Accordion/* Accordion */.n,{className:propstable_module.accordion,allowsMultipleExpanded:true,defaultExpandedKeys:defaultOpen?['props']:[],children:[Object.getOwnPropertyNames(rest).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"props",title:"Props",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:rest})}),Object.getOwnPropertyNames(events).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"events",title:"Events",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:events,showDefault:false})}),Object.getOwnPropertyNames(accessibility).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"accessibility",title:"Tillg\xE4nglighet",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:accessibility,showDefault:false})})]});};

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

/***/ 73807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ ListBoxSection)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79255);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83181);
/* harmony import */ var _ListBox_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","name"];var ListBoxSection=function ListBoxSection(_ref){var children=_ref.children,name=_ref.name,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .ListBoxSection */ .rd,Object.assign({},rest,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_5__/* .Header */ .Y,{className:_ListBox_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.listBoxSectionHeading,children:name}),children]}));};

/***/ }),

/***/ 74351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38739);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1160);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","isContained","removeMargins"];/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/grid}
 */var Grid=function Grid(_ref){var children=_ref.children,_ref$isContained=_ref.isContained,isContained=_ref$isContained===void 0?false:_ref$isContained,_ref$removeMargins=_ref.removeMargins,removeMargins=_ref$removeMargins===void 0?false:_ref$removeMargins,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({},rest,{className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.container,isContained&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.contained,removeMargins&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.removeMargins,rest.className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.flex,children:children})}));};

/***/ }),

/***/ 75575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
var _excluded=["color","size"];var StorybookIcon=/* @__PURE__ */react.forwardRef(function(_ref,forwardedRef){var _ref$color=_ref.color,color=_ref$color===void 0?'currentColor':_ref$color,_ref$size=_ref.size,size=_ref$size===void 0?20:_ref$size,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{viewBox:"-31.5 0 319 319",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",fill:"#000000",width:size,height:size,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),/*#__PURE__*/(0,jsx_runtime.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("defs",{children:[' ',/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z",id:"path-1",children:' '}),' ']}),' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{children:[' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("mask",{id:"mask-2",fill:"white",children:[' ',/*#__PURE__*/(0,jsx_runtime.jsx)("use",{href:"#path-1",children:" "}),' ']}),' ',/*#__PURE__*/(0,jsx_runtime.jsx)("use",{fill:color,"fill-rule":"nonzero",href:"#path-1",children:' '}),' ',/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z",fill:"#FFFFFF","fill-rule":"nonzero",mask:"url(#mask-2)",children:' '}),' ']}),' ']})]});});
;// ./apps/docs/src/components/icons/Empty.tsx
var EmptyIcon=function EmptyIcon(){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{height:0,width:0});};
;// ./apps/docs/src/components/icons/index.ts


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

/***/ 93683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ }),

/***/ 93777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccordionItem)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/common/icon-map.ts
var icon_map = __webpack_require__(7344);
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
/* harmony default export */ const AccordionItem_module = ({"item":"item_VttG","contained":"contained_ub98","success":"success_cpFV","warning":"warning_NxFE","info":"info_suK1","important":"important_n_K6","triggerButton":"triggerButton_En7k","triggerText":"triggerText_VvwO","trigger":"trigger_dCCq","triggerMainContent":"triggerMainContent_WoSV","\t":"\t_YXX_","chevronIcon":"chevronIcon_kSND","statusIcon":"statusIcon_DtWQ","panel":"panel_RCRU","content":"content_EuZw","hasBackground":"hasBackground_E4qK","header":"header_kp5y"});
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(93683);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(45644);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/accordion/AccordionItem.tsx
var _excluded=["title","children","className","headingLevel","type","hasBackground","isContained"];var AccordionItem=function AccordionItem(_ref){var _ref2;var title=_ref.title,children=_ref.children,className=_ref.className,_ref$headingLevel=_ref.headingLevel,headingLevel=_ref$headingLevel===void 0?'h2':_ref$headingLevel,type=_ref.type,_ref$hasBackground=_ref.hasBackground,hasBackground=_ref$hasBackground===void 0?true:_ref$hasBackground,isContainedFromProp=_ref.isContained,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var context=(0,react.useContext)(AccordionContext/* AccordionContext */.C);var isContained=(_ref2=isContainedFromProp!=null?isContainedFromProp:context==null?void 0:context.isContained)!=null?_ref2:false;var titleIsReactNode=typeof title==='object';(0,react.useEffect)(function(){if(type&&!isContained){console.warn("AccordionItem: When 'type' is set, it is recommended to also set 'isContained' to true for visual consistency.");}},[type,isContained]);var Icon=type?icon_map/* iconMap */.K[type]:null;var renderedIcon=Icon?/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{size:20,className:AccordionItem_module.statusIcon}):null;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Disclosure/* Disclosure */.EN,Object.assign({},props,{className:(0,clsx/* default */.A)(AccordionItem_module.item,type&&AccordionItem_module[type],isContained&&AccordionItem_module.contained,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:AccordionItem_module.trigger,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* Button */.$,{className:AccordionItem_module.triggerButton,slot:"trigger",variant:"icon",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20,className:AccordionItem_module.chevronIcon}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:AccordionItem_module.triggerMainContent,children:titleIsReactNode?title:/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{level:3,elementType:headingLevel,className:AccordionItem_module.triggerText,children:title})}),renderedIcon]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Disclosure/* DisclosurePanel */.kS,{className:AccordionItem_module.panel,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(AccordionItem_module.content,hasBackground&&AccordionItem_module.hasBackground),children:children})})]}));};

/***/ }),

/***/ 98437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ ListBoxItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1160);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79255);
/* harmony import */ var _ListBox_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","className"];var ListBoxItem=function ListBoxItem(_ref){var children=_ref.children,className=_ref.className,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .ListBoxItem */ .nh,Object.assign({className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_ListBox_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.listBoxItem,className)},rest,{children:children}));};

/***/ })

}]);