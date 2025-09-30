"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6505],{

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
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
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
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74351);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93574);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56636);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92457);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42350);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
var ComponentHeader=function ComponentHeader(_ref){var name=_ref.name,friendlyName=_ref.friendlyName,overrideHeadlessLink=_ref.overrideHeadlessLink,overrideHeadlessLinkTitle=_ref.overrideHeadlessLinkTitle;var baseUrl=_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay;var componentPath="?path=/docs/components-"+name.toLowerCase()+"--docs";var storybookHost= false?0:baseUrl('/storybook');var storybookLink=storybookHost+"/"+componentPath;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section",{className:"component-header",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .Grid */ .x,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .GridItem */ .E,{size:"auto",className:"friendlyName",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:storybookLink,variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,iconPlacement:"left",children:"Storybook"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,iconPlacement:"left",children:overrideHeadlessLinkTitle?overrideHeadlessLinkTitle:'React Aria'})})]})});};

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
  tK4: () => (field01Base),
  c8U: () => (iconPrimary),
  ak9: () => (layer01Base),
  JI6: () => (layer02Base),
  jCJ: () => (textPlaceholder),
  eku: () => (textPrimary),
  Z2e: () => (windowSizesSm)
});

;// ./packages/theme/src/lib/style-dictionary-dist/token-dictionary.js
/**
 * Do not edit directly, this file was auto-generated.
 *//* harmony default export */ const token_dictionary = ({windowSizes:{sm:{key:"{windowSizes.sm}",$value:"480px",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"dimension",original:{$value:"480px",$type:"dimension",key:"{windowSizes.sm}"},name:"windowSizesSm",attributes:{},path:["windowSizes","sm"]},md:{key:"{windowSizes.md}",$value:"768px",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"dimension",original:{$value:"768px",$type:"dimension",key:"{windowSizes.md}"},name:"windowSizesMd",attributes:{},path:["windowSizes","md"]},lg:{key:"{windowSizes.lg}",$value:"1024px",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"dimension",original:{$value:"1024px",$type:"dimension",key:"{windowSizes.lg}"},name:"windowSizesLg",attributes:{},path:["windowSizes","lg"]},xl:{key:"{windowSizes.xl}",$value:"1280px",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"dimension",original:{$value:"1280px",$type:"dimension",key:"{windowSizes.xl}"},name:"windowSizesXl",attributes:{},path:["windowSizes","xl"]}},breakpoints:{xs:{key:"{breakpoints.xs}",$value:"(max-width: calc(480px - 1px))",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"(max-width: calc({windowSizes.sm} - 1px))",$type:"string",key:"{breakpoints.xs}"},name:"breakpointsXs",attributes:{},path:["breakpoints","xs"]},sm:{key:"{breakpoints.sm}",$value:"(min-width: 480px)",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"(min-width: {windowSizes.sm})",$type:"string",key:"{breakpoints.sm}"},name:"breakpointsSm",attributes:{},path:["breakpoints","sm"]},md:{key:"{breakpoints.md}",$value:"(min-width: 768px)",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"(min-width: {windowSizes.md})",$type:"string",key:"{breakpoints.md}"},name:"breakpointsMd",attributes:{},path:["breakpoints","md"]},lg:{key:"{breakpoints.lg}",$value:"(min-width: 1024px)",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"(min-width: {windowSizes.lg})",$type:"string",key:"{breakpoints.lg}"},name:"breakpointsLg",attributes:{},path:["breakpoints","lg"]},xl:{key:"{breakpoints.xl}",$value:"(min-width: 1280px)",$comment:"This is the largest breakpoint",filePath:"packages/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"(min-width: {windowSizes.xl})",$comment:"This is the largest breakpoint",$type:"string",key:"{breakpoints.xl}"},name:"breakpointsXl",attributes:{},path:["breakpoints","xl"]}},color:{black:{base:{key:"{color.black.base}",$value:"#000",$description:"Black",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#000",$description:"Black",$type:"color",key:"{color.black.base}"},name:"colorBlackBase",attributes:{},path:["color","black","base"]},hover:{key:"{color.black.hover}",$value:"#0d0d0d",$description:"Black hover",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#0d0d0d",$description:"Black hover",$type:"color",key:"{color.black.hover}"},name:"colorBlackHover",attributes:{},path:["color","black","hover"]}},white:{base:{key:"{color.white.base}",$value:"#fff",$description:"White",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fff",$description:"White",$type:"color",key:"{color.white.base}"},name:"colorWhiteBase",attributes:{},path:["color","white","base"]},hover:{key:"{color.white.hover}",$value:"#e6e6e6",$description:"White hover",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#e6e6e6",$description:"White hover",$type:"color",key:"{color.white.hover}"},name:"colorWhiteHover",attributes:{},path:["color","white","hover"]}},gray:{10:{key:"{color.gray.10}",$value:"#f2f2f2",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#f2f2f2",$type:"color",key:"{color.gray.10}"},name:"colorGray10",attributes:{},path:["color","gray","10"]},20:{key:"{color.gray.20}",$value:"#e6e6e6",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#e6e6e6",$type:"color",key:"{color.gray.20}"},name:"colorGray20",attributes:{},path:["color","gray","20"]},30:{key:"{color.gray.30}",$value:"#d9d9d9",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d9d9d9",$type:"color",key:"{color.gray.30}"},name:"colorGray30",attributes:{},path:["color","gray","30"]},40:{key:"{color.gray.40}",$value:"#ccc",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ccc",$type:"color",key:"{color.gray.40}"},name:"colorGray40",attributes:{},path:["color","gray","40"]},50:{key:"{color.gray.50}",$value:"#bfbfbf",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#bfbfbf",$type:"color",key:"{color.gray.50}"},name:"colorGray50",attributes:{},path:["color","gray","50"]},60:{key:"{color.gray.60}",$value:"#b3b3b3",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#b3b3b3",$type:"color",key:"{color.gray.60}"},name:"colorGray60",attributes:{},path:["color","gray","60"]},70:{key:"{color.gray.70}",$value:"#a6a6a6",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#a6a6a6",$type:"color",key:"{color.gray.70}"},name:"colorGray70",attributes:{},path:["color","gray","70"]},80:{key:"{color.gray.80}",$value:"#999",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#999",$type:"color",key:"{color.gray.80}"},name:"colorGray80",attributes:{},path:["color","gray","80"]},90:{key:"{color.gray.90}",$value:"#8c8c8c",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#8c8c8c",$type:"color",key:"{color.gray.90}"},name:"colorGray90",attributes:{},path:["color","gray","90"]},100:{key:"{color.gray.100}",$value:"#808080",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#808080",$type:"color",key:"{color.gray.100}"},name:"colorGray100",attributes:{},path:["color","gray","100"]},110:{key:"{color.gray.110}",$value:"#737373",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#737373",$type:"color",key:"{color.gray.110}"},name:"colorGray110",attributes:{},path:["color","gray","110"]},120:{key:"{color.gray.120}",$value:"#666",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#666",$type:"color",key:"{color.gray.120}"},name:"colorGray120",attributes:{},path:["color","gray","120"]},130:{key:"{color.gray.130}",$value:"#5d5d5d",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#5d5d5d",$type:"color",key:"{color.gray.130}"},name:"colorGray130",attributes:{},path:["color","gray","130"]},140:{key:"{color.gray.140}",$value:"#525252",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#525252",$type:"color",key:"{color.gray.140}"},name:"colorGray140",attributes:{},path:["color","gray","140"]},150:{key:"{color.gray.150}",$value:"#474747",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#474747",$type:"color",key:"{color.gray.150}"},name:"colorGray150",attributes:{},path:["color","gray","150"]},160:{key:"{color.gray.160}",$value:"#383838",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#383838",$type:"color",key:"{color.gray.160}"},name:"colorGray160",attributes:{},path:["color","gray","160"]},170:{key:"{color.gray.170}",$value:"#333",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#333",$type:"color",key:"{color.gray.170}"},name:"colorGray170",attributes:{},path:["color","gray","170"]},180:{key:"{color.gray.180}",$value:"#262626",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#262626",$type:"color",key:"{color.gray.180}"},name:"colorGray180",attributes:{},path:["color","gray","180"]},190:{key:"{color.gray.190}",$value:"#212121",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#212121",$type:"color",key:"{color.gray.190}"},name:"colorGray190",attributes:{},path:["color","gray","190"]},200:{key:"{color.gray.200}",$value:"#171717",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#171717",$type:"color",key:"{color.gray.200}"},name:"colorGray200",attributes:{},path:["color","gray","200"]}},blue:{10:{key:"{color.blue.10}",$value:"#eaf2f6",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#eaf2f6",$type:"color",key:"{color.blue.10}"},name:"colorBlue10",attributes:{},path:["color","blue","10"]},20:{key:"{color.blue.20}",$value:"#d5e5ed",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d5e5ed",$type:"color",key:"{color.blue.20}"},name:"colorBlue20",attributes:{},path:["color","blue","20"]},40:{key:"{color.blue.40}",$value:"#abcbdb",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#abcbdb",$type:"color",key:"{color.blue.40}"},name:"colorBlue40",attributes:{},path:["color","blue","40"]},50:{key:"{color.blue.50}",$value:"#94BCD1",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#94BCD1",$type:"color",key:"{color.blue.50}"},name:"colorBlue50",attributes:{},path:["color","blue","50"]},60:{key:"{color.blue.60}",$value:"#82b0c9",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#82b0c9",$type:"color",key:"{color.blue.60}"},name:"colorBlue60",attributes:{},path:["color","blue","60"]},70:{key:"{color.blue.70}",$value:"#6CA3C0",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#6CA3C0",$type:"color",key:"{color.blue.70}"},name:"colorBlue70",attributes:{},path:["color","blue","70"]},80:{key:"{color.blue.80}",$value:"#5897b8",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#5897b8",$type:"color",key:"{color.blue.80}"},name:"colorBlue80",attributes:{},path:["color","blue","80"]},90:{key:"{color.blue.90}",$value:"#4289ad",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#4289ad",$type:"color",key:"{color.blue.90}"},name:"colorBlue90",attributes:{},path:["color","blue","90"]},100:{key:"{color.blue.100}",$value:"#2e7ca5",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#2e7ca5",$type:"color",key:"{color.blue.100}"},name:"colorBlue100",attributes:{},path:["color","blue","100"]},110:{key:"{color.blue.110}",$value:"#2C7399",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#2C7399",$type:"color",key:"{color.blue.110}"},name:"colorBlue110",attributes:{},path:["color","blue","110"]},120:{key:"{color.blue.120}",$value:"#29698C",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#29698C",$type:"color",key:"{color.blue.120}"},name:"colorBlue120",attributes:{},path:["color","blue","120"]},130:{key:"{color.blue.130}",$value:"#25607f",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#25607f",$type:"color",key:"{color.blue.130}"},name:"colorBlue130",attributes:{},path:["color","blue","130"]},150:{key:"{color.blue.150}",$value:"#143c50",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#143c50",$type:"color",key:"{color.blue.150}"},name:"colorBlue150",attributes:{},path:["color","blue","150"]}},purple:{80:{key:"{color.purple.80}",$value:"#b46ab4",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#b46ab4",$type:"color",key:"{color.purple.80}"},name:"colorPurple80",attributes:{},path:["color","purple","80"]},110:{key:"{color.purple.110}",$value:"#954b95",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#954b95",$type:"color",key:"{color.purple.110}"},name:"colorPurple110",attributes:{},path:["color","purple","110"]}},red:{100:{key:"{color.red.100}",$value:"#b90835",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#b90835",$type:"color",key:"{color.red.100}"},name:"colorRed100",attributes:{},path:["color","red","100"]}},signalBlue:{10:{key:"{color.signalBlue.10}",$value:"#eaf2f6",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#eaf2f6",$type:"color",key:"{color.signalBlue.10}"},name:"colorSignalBlue10",attributes:{},path:["color","signalBlue","10"]},20:{key:"{color.signalBlue.20}",$value:"#d5e5ed",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d5e5ed",$type:"color",key:"{color.signalBlue.20}"},name:"colorSignalBlue20",attributes:{},path:["color","signalBlue","20"]},100:{key:"{color.signalBlue.100}",$value:"#06c",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#06c",$type:"color",key:"{color.signalBlue.100}"},name:"colorSignalBlue100",attributes:{},path:["color","signalBlue","100"]}},signalGreen:{20:{key:"{color.signalGreen.20}",$value:"#d5f2d9",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d5f2d9",$type:"color",key:"{color.signalGreen.20}"},name:"colorSignalGreen20",attributes:{},path:["color","signalGreen","20"]},30:{key:"{color.signalGreen.30}",$value:"#bae5c5",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#bae5c5",$type:"color",key:"{color.signalGreen.30}"},name:"colorSignalGreen30",attributes:{},path:["color","signalGreen","30"]},100:{key:"{color.signalGreen.100}",$value:"#008d3c",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#008d3c",$type:"color",key:"{color.signalGreen.100}"},name:"colorSignalGreen100",attributes:{},path:["color","signalGreen","100"]},150:{key:"{color.signalGreen.150}",$value:"#194B33",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#194B33",$type:"color",key:"{color.signalGreen.150}"},name:"colorSignalGreen150",attributes:{},path:["color","signalGreen","150"]}},signalYellow:{10:{key:"{color.signalYellow.10}",$value:"#fff8e2",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fff8e2",$type:"color",key:"{color.signalYellow.10}"},name:"colorSignalYellow10",attributes:{},path:["color","signalYellow","10"]},20:{key:"{color.signalYellow.20}",$value:"#fff1cd",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fff1cd",$type:"color",key:"{color.signalYellow.20}"},name:"colorSignalYellow20",attributes:{},path:["color","signalYellow","20"]},30:{key:"{color.signalYellow.30}",$value:"#ffeab8",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffeab8",$type:"color",key:"{color.signalYellow.30}"},name:"colorSignalYellow30",attributes:{},path:["color","signalYellow","30"]},40:{key:"{color.signalYellow.40}",$value:"#ffe3a3",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffe3a3",$type:"color",key:"{color.signalYellow.40}"},name:"colorSignalYellow40",attributes:{},path:["color","signalYellow","40"]},50:{key:"{color.signalYellow.50}",$value:"#ffdc8b",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffdc8b",$type:"color",key:"{color.signalYellow.50}"},name:"colorSignalYellow50",attributes:{},path:["color","signalYellow","50"]},60:{key:"{color.signalYellow.60}",$value:"#ffd47b",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffd47b",$type:"color",key:"{color.signalYellow.60}"},name:"colorSignalYellow60",attributes:{},path:["color","signalYellow","60"]},70:{key:"{color.signalYellow.70}",$value:"#fdcd5d",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fdcd5d",$type:"color",key:"{color.signalYellow.70}"},name:"colorSignalYellow70",attributes:{},path:["color","signalYellow","70"]},80:{key:"{color.signalYellow.80}",$value:"#fbc640",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fbc640",$type:"color",key:"{color.signalYellow.80}"},name:"colorSignalYellow80",attributes:{},path:["color","signalYellow","80"]},90:{key:"{color.signalYellow.90}",$value:"#fabf1b",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fabf1b",$type:"color",key:"{color.signalYellow.90}"},name:"colorSignalYellow90",attributes:{},path:["color","signalYellow","90"]},100:{key:"{color.signalYellow.100}",$value:"#fab900",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fab900",$type:"color",key:"{color.signalYellow.100}"},name:"colorSignalYellow100",attributes:{},path:["color","signalYellow","100"]},110:{key:"{color.signalYellow.110}",$value:"#daa105",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#daa105",$type:"color",key:"{color.signalYellow.110}"},name:"colorSignalYellow110",attributes:{},path:["color","signalYellow","110"]},120:{key:"{color.signalYellow.120}",$value:"#bd8c1e",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#bd8c1e",$type:"color",key:"{color.signalYellow.120}"},name:"colorSignalYellow120",attributes:{},path:["color","signalYellow","120"]},130:{key:"{color.signalYellow.130}",$value:"#a17927",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#a17927",$type:"color",key:"{color.signalYellow.130}"},name:"colorSignalYellow130",attributes:{},path:["color","signalYellow","130"]},140:{key:"{color.signalYellow.140}",$value:"#88672a",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#88672a",$type:"color",key:"{color.signalYellow.140}"},name:"colorSignalYellow140",attributes:{},path:["color","signalYellow","140"]},150:{key:"{color.signalYellow.150}",$value:"#70562b",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#70562b",$type:"color",key:"{color.signalYellow.150}"},name:"colorSignalYellow150",attributes:{},path:["color","signalYellow","150"]},160:{key:"{color.signalYellow.160}",$value:"#5a4629",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#5a4629",$type:"color",key:"{color.signalYellow.160}"},name:"colorSignalYellow160",attributes:{},path:["color","signalYellow","160"]},170:{key:"{color.signalYellow.170}",$value:"#453826",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#453826",$type:"color",key:"{color.signalYellow.170}"},name:"colorSignalYellow170",attributes:{},path:["color","signalYellow","170"]},180:{key:"{color.signalYellow.180}",$value:"#322a20",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#322a20",$type:"color",key:"{color.signalYellow.180}"},name:"colorSignalYellow180",attributes:{},path:["color","signalYellow","180"]},190:{key:"{color.signalYellow.190}",$value:"#201c18",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#201c18",$type:"color",key:"{color.signalYellow.190}"},name:"colorSignalYellow190",attributes:{},path:["color","signalYellow","190"]},200:{key:"{color.signalYellow.200}",$value:"#0f0e0e",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#0f0e0e",$type:"color",key:"{color.signalYellow.200}"},name:"colorSignalYellow200",attributes:{},path:["color","signalYellow","200"]}},signalRed:{10:{key:"{color.signalRed.10}",$value:"#ffefef",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffefef",$type:"color",key:"{color.signalRed.10}"},name:"colorSignalRed10",attributes:{},path:["color","signalRed","10"]},20:{key:"{color.signalRed.20}",$value:"#ffdfdf",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffdfdf",$type:"color",key:"{color.signalRed.20}"},name:"colorSignalRed20",attributes:{},path:["color","signalRed","20"]},30:{key:"{color.signalRed.30}",$value:"#fcc8c8",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fcc8c8",$type:"color",key:"{color.signalRed.30}"},name:"colorSignalRed30",attributes:{},path:["color","signalRed","30"]},40:{key:"{color.signalRed.40}",$value:"#f9b0b0",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#f9b0b0",$type:"color",key:"{color.signalRed.40}"},name:"colorSignalRed40",attributes:{},path:["color","signalRed","40"]},50:{key:"{color.signalRed.50}",$value:"#f69999",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#f69999",$type:"color",key:"{color.signalRed.50}"},name:"colorSignalRed50",attributes:{},path:["color","signalRed","50"]},60:{key:"{color.signalRed.60}",$value:"#f38181",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#f38181",$type:"color",key:"{color.signalRed.60}"},name:"colorSignalRed60",attributes:{},path:["color","signalRed","60"]},70:{key:"{color.signalRed.70}",$value:"#ef6a6a",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ef6a6a",$type:"color",key:"{color.signalRed.70}"},name:"colorSignalRed70",attributes:{},path:["color","signalRed","70"]},80:{key:"{color.signalRed.80}",$value:"#EC5252",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#EC5252",$type:"color",key:"{color.signalRed.80}"},name:"colorSignalRed80",attributes:{},path:["color","signalRed","80"]},90:{key:"{color.signalRed.90}",$value:"#e93b3b",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#e93b3b",$type:"color",key:"{color.signalRed.90}"},name:"colorSignalRed90",attributes:{},path:["color","signalRed","90"]},100:{key:"{color.signalRed.100}",$value:"#e62323",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#e62323",$type:"color",key:"{color.signalRed.100}"},name:"colorSignalRed100",attributes:{},path:["color","signalRed","100"]},110:{key:"{color.signalRed.110}",$value:"#d12020",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d12020",$type:"color",key:"{color.signalRed.110}"},name:"colorSignalRed110",attributes:{},path:["color","signalRed","110"]},120:{key:"{color.signalRed.120}",$value:"#bc1d1d",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#bc1d1d",$type:"color",key:"{color.signalRed.120}"},name:"colorSignalRed120",attributes:{},path:["color","signalRed","120"]},130:{key:"{color.signalRed.130}",$value:"#a71919",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#a71919",$type:"color",key:"{color.signalRed.130}"},name:"colorSignalRed130",attributes:{},path:["color","signalRed","130"]},140:{key:"{color.signalRed.140}",$value:"#921616",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#921616",$type:"color",key:"{color.signalRed.140}"},name:"colorSignalRed140",attributes:{},path:["color","signalRed","140"]},150:{key:"{color.signalRed.150}",$value:"#7d1313",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#7d1313",$type:"color",key:"{color.signalRed.150}"},name:"colorSignalRed150",attributes:{},path:["color","signalRed","150"]},160:{key:"{color.signalRed.160}",$value:"#691010",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#691010",$type:"color",key:"{color.signalRed.160}"},name:"colorSignalRed160",attributes:{},path:["color","signalRed","160"]},170:{key:"{color.signalRed.170}",$value:"#540d0d",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#540d0d",$type:"color",key:"{color.signalRed.170}"},name:"colorSignalRed170",attributes:{},path:["color","signalRed","170"]},180:{key:"{color.signalRed.180}",$value:"#3f0a0a",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#3f0a0a",$type:"color",key:"{color.signalRed.180}"},name:"colorSignalRed180",attributes:{},path:["color","signalRed","180"]},190:{key:"{color.signalRed.190}",$value:"#2a0606",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#2a0606",$type:"color",key:"{color.signalRed.190}"},name:"colorSignalRed190",attributes:{},path:["color","signalRed","190"]},200:{key:"{color.signalRed.200}",$value:"#150303",filePath:"packages/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#150303",$type:"color",key:"{color.signalRed.200}"},name:"colorSignalRed200",attributes:{},path:["color","signalRed","200"]}}},background:{base:{key:"{background.base}",$value:"light-dark(#fff, #171717)",$description:"Standardbakgrund för våra applikationer",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white.base}, {color.gray.200})",$description:"Standardbakgrund för våra applikationer",key:"{background.base}"},name:"backgroundBase",attributes:{},path:["background","base"]},hover:{key:"{background.hover}",$value:"light-dark(#e6e6e6, #212121)",$description:"Hoverfärg för bakgrund",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white.hover}, {color.gray.190})",$description:"Hoverfärg för bakgrund",key:"{background.hover}"},name:"backgroundHover",attributes:{},path:["background","hover"]},inverse:{key:"{background.inverse}",$value:"light-dark(#171717, #f2f2f2)",$description:"Bakgrund eller element i med hög kontrast",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.200}, {color.gray.10})",$description:"Bakgrund eller element i med hög kontrast",key:"{background.inverse}"},name:"backgroundInverse",attributes:{},path:["background","inverse"]}},layer:{"01":{base:{key:"{layer.01.base}",$value:"light-dark(#f2f2f2, #262626)",$description:"Yta som används på background. Sekundär bakgrundsfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Yta som används på background. Sekundär bakgrundsfärg",key:"{layer.01.base}"},name:"layer01Base",attributes:{},path:["layer","01","base"]},hover:{key:"{layer.01.hover}",$value:"light-dark(#e6e6e6, #333)",$description:"Hover state för layer01",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.20}, {color.gray.170})",$description:"Hover state för layer01",key:"{layer.01.hover}"},name:"layer01Hover",attributes:{},path:["layer","01","hover"]},selected:{key:"{layer.01.selected}",$value:"light-dark(#d9d9d9, #383838)",$description:"Selected state för layer01",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Selected state för layer01",key:"{layer.01.selected}"},name:"layer01Selected",attributes:{},path:["layer","01","selected"]},selectedHover:{key:"{layer.01.selectedHover}",$value:"light-dark(#ccc, #474747)",$description:"Hover state för layerSelected01",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.40}, {color.gray.150})",$description:"Hover state för layerSelected01",key:"{layer.01.selectedHover}"},name:"layer01SelectedHover",attributes:{},path:["layer","01","selectedHover"]}},"02":{base:{key:"{layer.02.base}",$value:"light-dark(#fff, #383838)",$description:"Yta som ligger på layer01",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white.base}, {color.gray.160})",$description:"Yta som ligger på layer01",key:"{layer.02.base}"},name:"layer02Base",attributes:{},path:["layer","02","base"]},hover:{key:"{layer.02.hover}",$value:"light-dark(#e6e6e6, #474747)",$description:"Hover state för layer02",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white.hover}, {color.gray.150})",$description:"Hover state för layer02",key:"{layer.02.hover}"},name:"layer02Hover",attributes:{},path:["layer","02","hover"]},selected:{key:"{layer.02.selected}",$value:"light-dark(#d9d9d9, #525252)",$description:"Selected state för layer02",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.140})",$description:"Selected state för layer02",key:"{layer.02.selected}"},name:"layer02Selected",attributes:{},path:["layer","02","selected"]},selectedHover:{key:"{layer.02.selectedHover}",$value:"light-dark(#ccc, #5d5d5d)",$description:"Hover state för layerSelected02",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.40}, {color.gray.130})",$description:"Hover state för layerSelected02",key:"{layer.02.selectedHover}"},name:"layer02SelectedHover",attributes:{},path:["layer","02","selectedHover"]}}},layerAccent:{"01":{base:{key:"{layerAccent.01.base}",$value:"light-dark(#d9d9d9, #383838)",$description:"Accentfärg som används tillsammans med layer01",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Accentfärg som används tillsammans med layer01",key:"{layerAccent.01.base}"},name:"layerAccent01Base",attributes:{},path:["layerAccent","01","base"]},hover:{key:"{layerAccent.01.hover}",$value:"light-dark(#ccc, #474747)",$description:"Hover state för layerAccent01",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.40}, {color.gray.150})",$description:"Hover state för layerAccent01",key:"{layerAccent.01.hover}"},name:"layerAccent01Hover",attributes:{},path:["layerAccent","01","hover"]},selected:{key:"{layerAccent.01.selected}",$value:"light-dark(#bfbfbf, #525252)",$description:"Selected state för layerAccent01",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Selected state för layerAccent01",key:"{layerAccent.01.selected}"},name:"layerAccent01Selected",attributes:{},path:["layerAccent","01","selected"]}},"02":{base:{key:"{layerAccent.02.base}",$value:"light-dark(#f2f2f2, #262626)",$description:"Accentfärg som används tillsammans med layer02",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Accentfärg som används tillsammans med layer02",key:"{layerAccent.02.base}"},name:"layerAccent02Base",attributes:{},path:["layerAccent","02","base"]},hover:{key:"{layerAccent.02.hover}",$value:"light-dark(#e6e6e6, #333)",$description:"Hover state för layerAccent02",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.20}, {color.gray.170})",$description:"Hover state för layerAccent02",key:"{layerAccent.02.hover}"},name:"layerAccent02Hover",attributes:{},path:["layerAccent","02","hover"]},selected:{key:"{layerAccent.02.selected}",$value:"light-dark(#d9d9d9, #383838)",$description:"Selected state för layerAccent02",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Selected state för layerAccent02",key:"{layerAccent.02.selected}"},name:"layerAccent02Selected",attributes:{},path:["layerAccent","02","selected"]}}},brand:{primary:{key:"{brand.primary}",$value:"light-dark(#b90835, #b90835)",$description:"Primära röda färgen",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.red.100}, {color.red.100})",$description:"Primära röda färgen",key:"{brand.primary}"},name:"brandPrimary",attributes:{},path:["brand","primary"]}},border:{color:{primary:{key:"{border.color.primary}",$value:"light-dark(#171717, #f2f2f2)",$description:"Kantlinje med hög kontrast, används med field01",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.200}, {color.gray.10})",$description:"Kantlinje med hög kontrast, används med field01",key:"{border.color.primary}"},name:"borderColorPrimary",attributes:{},path:["border","color","primary"]},secondary:{key:"{border.color.secondary}",$value:"light-dark(#737373, #8c8c8c)",$description:"Kantlinje med medelhög kontrast",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.110}, {color.gray.90})",$description:"Kantlinje med medelhög kontrast",key:"{border.color.secondary}"},name:"borderColorSecondary",attributes:{},path:["border","color","secondary"]},subtle:{key:"{border.color.subtle}",$value:"light-dark(#bfbfbf, #383838)",$description:"Kantlinje med låg kontrast",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.50}, {color.gray.160})",$description:"Kantlinje med låg kontrast",key:"{border.color.subtle}"},name:"borderColorSubtle",attributes:{},path:["border","color","subtle"]},tertiary:{key:"{border.color.tertiary}",$value:"light-dark(#143c50, #2e7ca5)",$description:"Primärblå kantlinje",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.blue.100})",$description:"Primärblå kantlinje",key:"{border.color.tertiary}"},name:"borderColorTertiary",attributes:{},path:["border","color","tertiary"]},disabled:{key:"{border.color.disabled}",$value:"light-dark(#bfbfbf, #525252)",$description:"Kantlinje för disabled state",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Kantlinje för disabled state",key:"{border.color.disabled}"},name:"borderColorDisabled",attributes:{},path:["border","color","disabled"]}},width:{key:"{border.width}",$type:"size",$value:"1px",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$type:"size",$value:"1px",key:"{border.width}"},name:"borderWidth",attributes:{},path:["border","width"]}},field:{"01":{base:{key:"{field.01.base}",$value:"light-dark(#f2f2f2, #262626)",$description:"Standardfärg för fält, som ligger på background",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Standardfärg för fält, som ligger på background",key:"{field.01.base}"},name:"field01Base",attributes:{},path:["field","01","base"]},hover:{key:"{field.01.hover}",$value:"light-dark(#e6e6e6, #333)",$description:"Hover state för field01",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.20}, {color.gray.170})",$description:"Hover state för field01",key:"{field.01.hover}"},name:"field01Hover",attributes:{},path:["field","01","hover"]},active:{key:"{field.01.active}",$value:"light-dark(#d9d9d9, #383838)",$description:"Active state för field01",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Active state för field01",key:"{field.01.active}"},name:"field01Active",attributes:{},path:["field","01","active"]}},"02":{base:{key:"{field.02.base}",$value:"light-dark(#fff, #383838)",$description:"Sekundfärfärg för fält, som ligger på layer01",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white.base}, {color.gray.160})",$description:"Sekundfärfärg för fält, som ligger på layer01",key:"{field.02.base}"},name:"field02Base",attributes:{},path:["field","02","base"]},hover:{key:"{field.02.hover}",$value:"light-dark(#e6e6e6, #474747)",$description:"Hover state för field02",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white.hover}, {color.gray.150})",$description:"Hover state för field02",key:"{field.02.hover}"},name:"field02Hover",attributes:{},path:["field","02","hover"]},active:{key:"{field.02.active}",$value:"light-dark(#d9d9d9, #525252)",$description:"Active state för field02",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.140})",$description:"Active state för field02",key:"{field.02.active}"},name:"field02Active",attributes:{},path:["field","02","active"]}},disabled:{key:"{field.disabled}",$value:"light-dark(#f2f2f2, #262626)",$description:"Disabled state för fält",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Disabled state för fält",key:"{field.disabled}"},name:"fieldDisabled",attributes:{},path:["field","disabled"]}},skeleton:{"01":{key:"{skeleton.01}",$value:"light-dark(#f2f2f2, #262626)",$description:"Standardfärg för skeleton",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Standardfärg för skeleton",key:"{skeleton.01}"},name:"skeleton01",attributes:{},path:["skeleton","01"]},"02":{key:"{skeleton.02}",$value:"light-dark(#d9d9d9, #383838)",$description:"Färg som används när Skeleton ligger på bakgrundsfärgen `layer01` eller `light-dark(#f2f2f2,#262626)`",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Färg som används när Skeleton ligger på bakgrundsfärgen `layer01` eller `light-dark(#f2f2f2,#262626)`",key:"{skeleton.02}"},name:"skeleton02",attributes:{},path:["skeleton","02"]}},icon:{primary:{key:"{icon.primary}",$value:"light-dark(#171717, #f2f2f2)",$description:"Primär ikonfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.200}, {color.gray.10})",$description:"Primär ikonfärg",key:"{icon.primary}"},name:"iconPrimary",attributes:{},path:["icon","primary"]},secondary:{key:"{icon.secondary}",$value:"light-dark(#525252, #a6a6a6)",$description:"Sekundär ikonfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.140}, {color.gray.70})",$description:"Sekundär ikonfärg",key:"{icon.secondary}"},name:"iconSecondary",attributes:{},path:["icon","secondary"]},tertiary:{key:"{icon.tertiary}",$value:"light-dark(#143c50, #f2f2f2)",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.gray.10})",key:"{icon.tertiary}"},name:"iconTertiary",attributes:{},path:["icon","tertiary"]},inverse:{key:"{icon.inverse}",$value:"light-dark(#fff, #171717)",$description:"Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white.base}, {color.gray.200})",$description:"Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge",key:"{icon.inverse}"},name:"iconInverse",attributes:{},path:["icon","inverse"]},onColor:{key:"{icon.onColor}",$value:"light-dark(#fff, #fff)",$description:"Ikonfärg på färgade ytor som inte är lager",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white.base}, {color.white.base})",$description:"Ikonfärg på färgade ytor som inte är lager",key:"{icon.onColor}"},name:"iconOnColor",attributes:{},path:["icon","onColor"]},disabled:{key:"{icon.disabled}",$value:"light-dark(#bfbfbf, #525252)",$description:"Ikoner som är disabled",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Ikoner som är disabled",key:"{icon.disabled}"},name:"iconDisabled",attributes:{},path:["icon","disabled"]},success:{key:"{icon.success}",$value:"light-dark(#008d3c, #008d3c)",$description:"Ikonfär för success state",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalGreen.100}, {color.signalGreen.100})",$description:"Ikonfär för success state",key:"{icon.success}"},name:"iconSuccess",attributes:{},path:["icon","success"]},info:{key:"{icon.info}",$value:"light-dark(#06c, #06c)",$description:"Ikonfärg för informationsikoner",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalBlue.100}, {color.signalBlue.100})",$description:"Ikonfärg för informationsikoner",key:"{icon.info}"},name:"iconInfo",attributes:{},path:["icon","info"]},warning:{key:"{icon.warning}",$value:"light-dark(#e62323, #e62323)",$description:"Ikonfärg för varningsikoner och invalid state",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.100})",$description:"Ikonfärg för varningsikoner och invalid state",key:"{icon.warning}"},name:"iconWarning",attributes:{},path:["icon","warning"]},important:{key:"{icon.important}",$value:"light-dark(#fab900, #fab900)",$description:"Ikonfärg för viktig information",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalYellow.100}, {color.signalYellow.100})",$description:"Ikonfärg för viktig information",key:"{icon.important}"},name:"iconImportant",attributes:{},path:["icon","important"]}},link:{enabled:{key:"{link.enabled}",$value:"light-dark(#29698C, #6CA3C0)",$description:"Primärlänkfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.120}, {color.blue.70})",$description:"Primärlänkfärg",key:"{link.enabled}"},name:"linkEnabled",attributes:{},path:["link","enabled"]},hover:{key:"{link.hover}",$value:"light-dark(#143c50, #94BCD1)",$description:"Hover state för länkar",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.blue.50})",$description:"Hover state för länkar",key:"{link.hover}"},name:"linkHover",attributes:{},path:["link","hover"]},pressed:{key:"{link.pressed}",$value:"light-dark(#171717, #abcbdb)",$description:"Active/pressed state för länkar",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.200}, {color.blue.40})",$description:"Active/pressed state för länkar",key:"{link.pressed}"},name:"linkPressed",attributes:{},path:["link","pressed"]},visited:{key:"{link.visited}",$value:"light-dark(#954b95, #b46ab4)",$description:"Färg för besökta länkar",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.purple.110}, {color.purple.80})",$description:"Färg för besökta länkar",key:"{link.visited}"},name:"linkVisited",attributes:{},path:["link","visited"]}},support:{border:{success:{key:"{support.border.success}",$value:"light-dark(#008d3c, #008d3c)",$description:"Kantlinje för success-notifikationer",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalGreen.100}, {color.signalGreen.100})",$description:"Kantlinje för success-notifikationer",key:"{support.border.success}"},name:"supportBorderSuccess",attributes:{},path:["support","border","success"]},info:{key:"{support.border.info}",$value:"light-dark(#06c, #06c)",$description:"Kantlinje för notifikationer med information",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalBlue.100}, {color.signalBlue.100})",$description:"Kantlinje för notifikationer med information",key:"{support.border.info}"},name:"supportBorderInfo",attributes:{},path:["support","border","info"]},important:{key:"{support.border.important}",$value:"light-dark(#fab900, #fab900)",$description:"Kantlinje för notifikationer med viktig information",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalYellow.100}, {color.signalYellow.100})",$description:"Kantlinje för notifikationer med viktig information",key:"{support.border.important}"},name:"supportBorderImportant",attributes:{},path:["support","border","important"]},warning:{key:"{support.border.warning}",$value:"light-dark(#e62323, #e62323)",$description:"Kantlinje för notifikationer med varningar",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.100})",$description:"Kantlinje för notifikationer med varningar",key:"{support.border.warning}"},name:"supportBorderWarning",attributes:{},path:["support","border","warning"]}},background:{success:{key:"{support.background.success}",$value:"light-dark(#d5f2d9, #262626)",$description:"Bakgrund för success-notifikationer",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalGreen.20}, {color.gray.180})",$description:"Bakgrund för success-notifikationer",key:"{support.background.success}"},name:"supportBackgroundSuccess",attributes:{},path:["support","background","success"]},successHover:{key:"{support.background.successHover}",$value:"light-dark(#bae5c5, #333)",$description:"Hoverbakgrund för success-notifikationer",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalGreen.30}, {color.gray.170})",$description:"Hoverbakgrund för success-notifikationer",key:"{support.background.successHover}"},name:"supportBackgroundSuccessHover",attributes:{},path:["support","background","successHover"]},info:{key:"{support.background.info}",$value:"light-dark(#eaf2f6, #262626)",$description:"Bakgrund för notifikationer med information",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalBlue.10}, {color.gray.180})",$description:"Bakgrund för notifikationer med information",key:"{support.background.info}"},name:"supportBackgroundInfo",attributes:{},path:["support","background","info"]},infoHover:{key:"{support.background.infoHover}",$value:"light-dark(#d5e5ed, #333)",$description:"Hoverbakgrund för notifikationer med information",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalBlue.20}, {color.gray.170})",$description:"Hoverbakgrund för notifikationer med information",key:"{support.background.infoHover}"},name:"supportBackgroundInfoHover",attributes:{},path:["support","background","infoHover"]},important:{key:"{support.background.important}",$value:"light-dark(#fff8e2, #262626)",$description:"Bakgrund för notifikationer med viktig information",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalYellow.10}, {color.gray.180})",$description:"Bakgrund för notifikationer med viktig information",key:"{support.background.important}"},name:"supportBackgroundImportant",attributes:{},path:["support","background","important"]},importantHover:{key:"{support.background.importantHover}",$value:"light-dark(#fff1cd, #333)",$description:"Hoverbakgrund för notifikationer med viktig information",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalYellow.20}, {color.gray.170})",$description:"Hoverbakgrund för notifikationer med viktig information",key:"{support.background.importantHover}"},name:"supportBackgroundImportantHover",attributes:{},path:["support","background","importantHover"]},warning:{key:"{support.background.warning}",$value:"light-dark(#ffdfdf, #262626)",$description:"Bakgrund för notifikationer med varningar",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.20}, {color.gray.180})",$description:"Bakgrund för notifikationer med varningar",key:"{support.background.warning}"},name:"supportBackgroundWarning",attributes:{},path:["support","background","warning"]},warningHover:{key:"{support.background.warningHover}",$value:"light-dark(#fcc8c8, #333)",$description:"Hoverbakgrund för notifikationer med varningar",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.30}, {color.gray.170})",$description:"Hoverbakgrund för notifikationer med varningar",key:"{support.background.warningHover}"},name:"supportBackgroundWarningHover",attributes:{},path:["support","background","warningHover"]}}},text:{primary:{key:"{text.primary}",$value:"light-dark(#171717, #f2f2f2)",$description:"Primär textfärg. Rubriker och brödtext.",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.200}, {color.gray.10})",$description:"Primär textfärg. Rubriker och brödtext.",key:"{text.primary}"},name:"textPrimary",attributes:{},path:["text","primary"]},secondary:{key:"{text.secondary}",$value:"light-dark(#525252, #a6a6a6)",$description:"Sekundär textfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.140}, {color.gray.70})",$description:"Sekundär textfärg",key:"{text.secondary}"},name:"textSecondary",attributes:{},path:["text","secondary"]},tertiary:{key:"{text.tertiary}",$value:"light-dark(#143c50, #f2f2f2)",$description:"Textfärg på tertiär knapp",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.gray.10})",$description:"Textfärg på tertiär knapp",key:"{text.tertiary}"},name:"textTertiary",attributes:{},path:["text","tertiary"]},onColor:{key:"{text.onColor}",$value:"light-dark(#fff, #fff)",$description:"Textfärg på färgade bakgrunder som inte är lager",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white.base}, {color.white.base})",$description:"Textfärg på färgade bakgrunder som inte är lager",key:"{text.onColor}"},name:"textOnColor",attributes:{},path:["text","onColor"]},inverse:{key:"{text.inverse}",$value:"light-dark(#f2f2f2, #171717)",$description:"Inverterad textfärg",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.10}, {color.gray.200})",$description:"Inverterad textfärg",key:"{text.inverse}"},name:"textInverse",attributes:{},path:["text","inverse"]},disabled:{key:"{text.disabled}",$value:"light-dark(#bfbfbf, #525252)",$description:"Textfärg för disabled state",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Textfärg för disabled state",key:"{text.disabled}"},name:"textDisabled",attributes:{},path:["text","disabled"]},warning:{key:"{text.warning}",$value:"light-dark(#e62323, #EC5252)",$description:"Textfärg för felmeddelanden",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.80})",$description:"Textfärg för felmeddelanden",key:"{text.warning}"},name:"textWarning",attributes:{},path:["text","warning"]},placeholder:{key:"{text.placeholder}",$value:"light-dark(#a6a6a6, #525252)",$description:"Textfärg för platshållare",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.70}, {color.gray.140})",$description:"Textfärg för platshållare",key:"{text.placeholder}"},name:"textPlaceholder",attributes:{},path:["text","placeholder"]}},button:{background:{primary:{base:{key:"{button.background.primary.base}",$value:"light-dark(#143c50, #2e7ca5)",$description:"Färg på primärknapp",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.blue.100})",$description:"Färg på primärknapp",key:"{button.background.primary.base}"},name:"buttonBackgroundPrimaryBase",attributes:{},path:["button","background","primary","base"]},hover:{key:"{button.background.primary.hover}",$value:"light-dark(#25607f, #25607f)",$description:"Hover state på primärknapp",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.130}, {color.blue.130})",$description:"Hover state på primärknapp",key:"{button.background.primary.hover}"},name:"buttonBackgroundPrimaryHover",attributes:{},path:["button","background","primary","hover"]},active:{key:"{button.background.primary.active}",$value:"light-dark(#2e7ca5, #143c50)",$description:"Active state för primärknapp",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.100}, {color.blue.150})",$description:"Active state för primärknapp",key:"{button.background.primary.active}"},name:"buttonBackgroundPrimaryActive",attributes:{},path:["button","background","primary","active"]}},secondary:{base:{key:"{button.background.secondary.base}",$value:"light-dark(#fff, #171717)",$description:"Färg på sekundärknapp",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white.base}, {color.gray.200})",$description:"Färg på sekundärknapp",key:"{button.background.secondary.base}"},name:"buttonBackgroundSecondaryBase",attributes:{},path:["button","background","secondary","base"]},hover:{key:"{button.background.secondary.hover}",$value:"light-dark(#e6e6e6, #212121)",$description:"Hover state på sekundärknapp",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white.hover}, {color.gray.190})",$description:"Hover state på sekundärknapp",key:"{button.background.secondary.hover}"},name:"buttonBackgroundSecondaryHover",attributes:{},path:["button","background","secondary","hover"]},active:{key:"{button.background.secondary.active}",$value:"light-dark(#d9d9d9, #262626)",$description:"Active state för sekundärknapp",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.180})",$description:"Active state för sekundärknapp",key:"{button.background.secondary.active}"},name:"buttonBackgroundSecondaryActive",attributes:{},path:["button","background","secondary","active"]}},tertiary:{hover:{key:"{button.background.tertiary.hover}",$value:"light-dark(#e6e6e6, #212121)",$description:"Hover state för tertiär knapp",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white.hover}, {color.gray.190})",$description:"Hover state för tertiär knapp",key:"{button.background.tertiary.hover}"},name:"buttonBackgroundTertiaryHover",attributes:{},path:["button","background","tertiary","hover"]},active:{key:"{button.background.tertiary.active}",$value:"light-dark(#d9d9d9, #262626)",$description:"Active state för tertiär knapp",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.180})",$description:"Active state för tertiär knapp",key:"{button.background.tertiary.active}"},name:"buttonBackgroundTertiaryActive",attributes:{},path:["button","background","tertiary","active"]}},danger:{base:{key:"{button.background.danger.base}",$value:"light-dark(#e62323, #e62323)",$description:"Färg på danger knapp",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.100})",$description:"Färg på danger knapp",key:"{button.background.danger.base}"},name:"buttonBackgroundDangerBase",attributes:{},path:["button","background","danger","base"]},hover:{key:"{button.background.danger.hover}",$value:"light-dark(#bc1d1d, #bc1d1d)",$description:"Hover state för danger knapp",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.120}, {color.signalRed.120})",$description:"Hover state för danger knapp",key:"{button.background.danger.hover}"},name:"buttonBackgroundDangerHover",attributes:{},path:["button","background","danger","hover"]},active:{key:"{button.background.danger.active}",$value:"light-dark(#7d1313, #7d1313)",$description:"Active state för danger knapp",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.150}, {color.signalRed.150})",$description:"Active state för danger knapp",key:"{button.background.danger.active}"},name:"buttonBackgroundDangerActive",attributes:{},path:["button","background","danger","active"]}},disabled:{key:"{button.background.disabled}",$value:"light-dark(#f2f2f2, #262626)",$description:"Disabled state för knappar",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Disabled state för knappar",key:"{button.background.disabled}"},name:"buttonBackgroundDisabled",attributes:{},path:["button","background","disabled"]}},border:{secondary:{key:"{button.border.secondary}",$value:"light-dark(#143c50, #f2f2f2)",$description:"Kantfärg för sekundärknapp",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.gray.10})",$description:"Kantfärg för sekundärknapp",key:"{button.border.secondary}"},name:"buttonBorderSecondary",attributes:{},path:["button","border","secondary"]}},icon:{hover:{key:"{button.icon.hover}",$value:"light-dark(#0000001a, #ffffff1a)",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark(#0000001a, #ffffff1a)",key:"{button.icon.hover}"},name:"buttonIconHover",attributes:{},path:["button","icon","hover"]},active:{key:"{button.icon.active}",$value:"light-dark(#00000033, #ffffff33)",$description:"Active state för ikoner",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark(#00000033, #ffffff33)",$description:"Active state för ikoner",key:"{button.icon.active}"},name:"buttonIconActive",attributes:{},path:["button","icon","active"]}}},badge:{background:{key:"{badge.background}",$value:"light-dark(#e62323, #e62323)",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.100})",key:"{badge.background}"},name:"badgeBackground",attributes:{},path:["badge","background"]}},calendar:{date:{background:{hover:{key:"{calendar.date.background.hover}",$value:"light-dark(#0000001a, #ffffff1a)",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark(#0000001a, #ffffff1a)",key:"{calendar.date.background.hover}"},name:"calendarDateBackgroundHover",attributes:{},path:["calendar","date","background","hover"]},selected:{key:"{calendar.date.background.selected}",$value:"light-dark(#143c50, #5897b8)",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.blue.80})",key:"{calendar.date.background.selected}"},name:"calendarDateBackgroundSelected",attributes:{},path:["calendar","date","background","selected"]},startRange:{key:"{calendar.date.background.startRange}",$value:"light-dark(#143c50, #5897b8)",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.blue.80})",key:"{calendar.date.background.startRange}"},name:"calendarDateBackgroundStartRange",attributes:{},path:["calendar","date","background","startRange"]},inRange:{key:"{calendar.date.background.inRange}",$value:"light-dark(#d5e5ed, #143c50)",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.20}, {color.blue.150})",key:"{calendar.date.background.inRange}"},name:"calendarDateBackgroundInRange",attributes:{},path:["calendar","date","background","inRange"]},endRange:{key:"{calendar.date.background.endRange}",$value:"light-dark(#143c50, #5897b8)",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.blue.80})",key:"{calendar.date.background.endRange}"},name:"calendarDateBackgroundEndRange",attributes:{},path:["calendar","date","background","endRange"]}}}},logo:{primary:{key:"{logo.primary}",$value:"light-dark(#b90835, #fff)",$description:"Färg på logotypen",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.red.100}, {color.white.base})",$description:"Färg på logotypen",key:"{logo.primary}"},name:"logoPrimary",attributes:{},path:["logo","primary"]}},menu:{item:{background:{hover:{key:"{menu.item.background.hover}",$value:"light-dark(#e6e6e6, #212121)",$description:"Bakgrundsfärg för menu vid hover",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.20}, {color.gray.190})",$description:"Bakgrundsfärg för menu vid hover",key:"{menu.item.background.hover}"},name:"menuItemBackgroundHover",attributes:{},path:["menu","item","background","hover"]},selected:{key:"{menu.item.background.selected}",$value:"light-dark(#f2f2f2, #262626)",$description:"Bakgrundsfärg för aktiv menu",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Bakgrundsfärg för aktiv menu",key:"{menu.item.background.selected}"},name:"menuItemBackgroundSelected",attributes:{},path:["menu","item","background","selected"]}}},text:{sectionHeader:{key:"{menu.text.sectionHeader}",$value:"light-dark(#525252, #a6a6a6)",filePath:"packages/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.140}, {color.gray.70})",key:"{menu.text.sectionHeader}"},name:"menuTextSectionHeader",attributes:{},path:["menu","text","sectionHeader"]}}},size:{10:{key:"{size.10}",$value:"0.125rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.125rem",$type:"dimension",key:"{size.10}"},name:"size10",attributes:{},path:["size","10"]},15:{key:"{size.15}",$value:"0.188rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.188rem",$type:"dimension",key:"{size.15}"},name:"size15",attributes:{},path:["size","15"]},20:{key:"{size.20}",$value:"0.25rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.25rem",$type:"dimension",key:"{size.20}"},name:"size20",attributes:{},path:["size","20"]},30:{key:"{size.30}",$value:"0.375rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.375rem",$type:"dimension",key:"{size.30}"},name:"size30",attributes:{},path:["size","30"]},40:{key:"{size.40}",$value:"0.5rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.5rem",$type:"dimension",key:"{size.40}"},name:"size40",attributes:{},path:["size","40"]},50:{key:"{size.50}",$value:"0.625rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.625rem",$type:"dimension",key:"{size.50}"},name:"size50",attributes:{},path:["size","50"]},60:{key:"{size.60}",$value:"0.75rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.75rem",$type:"dimension",key:"{size.60}"},name:"size60",attributes:{},path:["size","60"]},70:{key:"{size.70}",$value:"0.875rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.875rem",$type:"dimension",key:"{size.70}"},name:"size70",attributes:{},path:["size","70"]},75:{key:"{size.75}",$value:"0.938rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.938rem",$type:"dimension",key:"{size.75}"},name:"size75",attributes:{},path:["size","75"]},80:{key:"{size.80}",$value:"1rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"1rem",$type:"dimension",key:"{size.80}"},name:"size80",attributes:{},path:["size","80"]},90:{key:"{size.90}",$value:"1.25rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"1.25rem",$type:"dimension",key:"{size.90}"},name:"size90",attributes:{},path:["size","90"]},100:{key:"{size.100}",$value:"1.5rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"1.5rem",$type:"dimension",key:"{size.100}"},name:"size100",attributes:{},path:["size","100"]},110:{key:"{size.110}",$value:"1.75rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"1.75rem",$type:"dimension",key:"{size.110}"},name:"size110",attributes:{},path:["size","110"]},120:{key:"{size.120}",$value:"2rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"2rem",$type:"dimension",key:"{size.120}"},name:"size120",attributes:{},path:["size","120"]},130:{key:"{size.130}",$value:"2.5rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"2.5rem",$type:"dimension",key:"{size.130}"},name:"size130",attributes:{},path:["size","130"]},140:{key:"{size.140}",$value:"2.75rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"2.75rem",$type:"dimension",key:"{size.140}"},name:"size140",attributes:{},path:["size","140"]},150:{key:"{size.150}",$value:"3rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"3rem",$type:"dimension",key:"{size.150}"},name:"size150",attributes:{},path:["size","150"]},"00":{key:"{size.00}",$value:0,filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:0,$type:"dimension",key:"{size.00}"},name:"size00",attributes:{},path:["size","00"]},"05":{key:"{size.05}",$value:"0.063rem",filePath:"packages/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.063rem",$type:"dimension",key:"{size.05}"},name:"size05",attributes:{},path:["size","05"]}},spacing:{10:{key:"{spacing.10}",$type:"dimension",$value:"0.125rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"0.125rem",key:"{spacing.10}"},name:"spacing10",attributes:{},path:["spacing","10"]},20:{key:"{spacing.20}",$type:"dimension",$value:"0.25rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"0.25rem",key:"{spacing.20}"},name:"spacing20",attributes:{},path:["spacing","20"]},30:{key:"{spacing.30}",$type:"dimension",$value:"0.5rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"0.5rem",key:"{spacing.30}"},name:"spacing30",attributes:{},path:["spacing","30"]},40:{key:"{spacing.40}",$type:"dimension",$value:"0.75rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"0.75rem",key:"{spacing.40}"},name:"spacing40",attributes:{},path:["spacing","40"]},50:{key:"{spacing.50}",$type:"dimension",$value:"1rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"1rem",key:"{spacing.50}"},name:"spacing50",attributes:{},path:["spacing","50"]},60:{key:"{spacing.60}",$type:"dimension",$value:"1.5rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"1.5rem",key:"{spacing.60}"},name:"spacing60",attributes:{},path:["spacing","60"]},70:{key:"{spacing.70}",$type:"dimension",$value:"2rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"2rem",key:"{spacing.70}"},name:"spacing70",attributes:{},path:["spacing","70"]},80:{key:"{spacing.80}",$type:"dimension",$value:"2.5rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"2.5rem",key:"{spacing.80}"},name:"spacing80",attributes:{},path:["spacing","80"]},90:{key:"{spacing.90}",$type:"dimension",$value:"3rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"3rem",key:"{spacing.90}"},name:"spacing90",attributes:{},path:["spacing","90"]},100:{key:"{spacing.100}",$type:"dimension",$value:"4rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"4rem",key:"{spacing.100}"},name:"spacing100",attributes:{},path:["spacing","100"]},110:{key:"{spacing.110}",$type:"dimension",$value:"5rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"5rem",key:"{spacing.110}"},name:"spacing110",attributes:{},path:["spacing","110"]},120:{key:"{spacing.120}",$type:"dimension",$value:"6rem",filePath:"packages/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"6rem",key:"{spacing.120}"},name:"spacing120",attributes:{},path:["spacing","120"]}},state:{focus:{key:"{state.focus}",$type:"string",$value:"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)",filePath:"packages/theme/tokens/states.json",isSource:true,original:{$type:"string",$value:"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)",key:"{state.focus}"},name:"stateFocus",attributes:{},path:["state","focus"]},focusInset:{key:"{state.focusInset}",$type:"string",$value:"inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)",filePath:"packages/theme/tokens/states.json",isSource:true,original:{$type:"string",$value:"inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)",key:"{state.focusInset}"},name:"stateFocusInset",attributes:{},path:["state","focusInset"]}},transitions:{duration:{slow:{key:"{transitions.duration.slow}",$type:"time",$value:"500ms",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$type:"time",$value:"500ms",key:"{transitions.duration.slow}"},name:"transitionsDurationSlow",attributes:{},path:["transitions","duration","slow"]},normal:{key:"{transitions.duration.normal}",$type:"time",$value:"300ms",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$type:"time",$value:"300ms",key:"{transitions.duration.normal}"},name:"transitionsDurationNormal",attributes:{},path:["transitions","duration","normal"]},fast:{key:"{transitions.duration.fast}",$type:"time",$value:"250ms",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$type:"time",$value:"250ms",key:"{transitions.duration.fast}"},name:"transitionsDurationFast",attributes:{},path:["transitions","duration","fast"]}},timing:{easeOut:{key:"{transitions.timing.easeOut}",$value:"cubic-bezier(0, 0, 0.58, 1)",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:"cubic-bezier(0, 0, 0.58, 1)",key:"{transitions.timing.easeOut}"},name:"transitionsTimingEaseOut",attributes:{},path:["transitions","timing","easeOut"]},easeIn:{key:"{transitions.timing.easeIn}",$value:"cubic-bezier(0.42, 0, 1, 1)",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:"cubic-bezier(0.42, 0, 1, 1)",key:"{transitions.timing.easeIn}"},name:"transitionsTimingEaseIn",attributes:{},path:["transitions","timing","easeIn"]}},panel:{collapse:{key:"{transitions.panel.collapse}",$value:"all 300ms cubic-bezier(0, 0, 0.58, 1) allow-discrete",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:"all {transitions.duration.normal} {transitions.timing.easeOut} allow-discrete",key:"{transitions.panel.collapse}"},name:"transitionsPanelCollapse",attributes:{},path:["transitions","panel","collapse"]},expand:{key:"{transitions.panel.expand}",$value:"all 300ms cubic-bezier(0.42, 0, 1, 1) allow-discrete",filePath:"packages/theme/tokens/transitions.json",isSource:true,original:{$value:"all {transitions.duration.normal} {transitions.timing.easeIn} allow-discrete",key:"{transitions.panel.expand}"},name:"transitionsPanelExpand",attributes:{},path:["transitions","panel","expand"]}}},typography:{font:{family:{key:"{typography.font.family}",$type:"fontFamily",$value:"Inter, sans-serif",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontFamily",$value:"Inter, sans-serif",key:"{typography.font.family}"},name:"typographyFontFamily",attributes:{},path:["typography","font","family"]},size:{10:{key:"{typography.font.size.10}",$type:"fontSize",$value:"0.75rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"0.75rem",key:"{typography.font.size.10}"},name:"typographyFontSize10",attributes:{},path:["typography","font","size","10"]},20:{key:"{typography.font.size.20}",$type:"fontSize",$value:"0.875rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"0.875rem",key:"{typography.font.size.20}"},name:"typographyFontSize20",attributes:{},path:["typography","font","size","20"]},30:{key:"{typography.font.size.30}",$type:"fontSize",$value:"1rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"1rem",key:"{typography.font.size.30}"},name:"typographyFontSize30",attributes:{},path:["typography","font","size","30"]},40:{key:"{typography.font.size.40}",$type:"fontSize",$value:"1.125rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"1.125rem",key:"{typography.font.size.40}"},name:"typographyFontSize40",attributes:{},path:["typography","font","size","40"]},50:{key:"{typography.font.size.50}",$type:"fontSize",$value:"1.25rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"1.25rem",key:"{typography.font.size.50}"},name:"typographyFontSize50",attributes:{},path:["typography","font","size","50"]},60:{key:"{typography.font.size.60}",$type:"fontSize",$value:"1.5rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"1.5rem",key:"{typography.font.size.60}"},name:"typographyFontSize60",attributes:{},path:["typography","font","size","60"]},70:{key:"{typography.font.size.70}",$type:"fontSize",$value:"1.75rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"1.75rem",key:"{typography.font.size.70}"},name:"typographyFontSize70",attributes:{},path:["typography","font","size","70"]},80:{key:"{typography.font.size.80}",$type:"fontSize",$value:"2rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"2rem",key:"{typography.font.size.80}"},name:"typographyFontSize80",attributes:{},path:["typography","font","size","80"]},90:{key:"{typography.font.size.90}",$type:"fontSize",$value:"2.25rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"2.25rem",key:"{typography.font.size.90}"},name:"typographyFontSize90",attributes:{},path:["typography","font","size","90"]},100:{key:"{typography.font.size.100}",$type:"fontSize",$value:"2.625rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"2.625rem",key:"{typography.font.size.100}"},name:"typographyFontSize100",attributes:{},path:["typography","font","size","100"]}}},lineHeight:{10:{key:"{typography.lineHeight.10}",$type:"lineHeight",$value:"1rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"1rem",key:"{typography.lineHeight.10}"},name:"typographyLineHeight10",attributes:{},path:["typography","lineHeight","10"]},20:{key:"{typography.lineHeight.20}",$type:"lineHeight",$value:"1.125rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"1.125rem",key:"{typography.lineHeight.20}"},name:"typographyLineHeight20",attributes:{},path:["typography","lineHeight","20"]},30:{key:"{typography.lineHeight.30}",$type:"lineHeight",$value:"1.25rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"1.25rem",key:"{typography.lineHeight.30}"},name:"typographyLineHeight30",attributes:{},path:["typography","lineHeight","30"]},40:{key:"{typography.lineHeight.40}",$type:"lineHeight",$value:"1.375rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"1.375rem",key:"{typography.lineHeight.40}"},name:"typographyLineHeight40",attributes:{},path:["typography","lineHeight","40"]},50:{key:"{typography.lineHeight.50}",$type:"lineHeight",$value:"1.5rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"1.5rem",key:"{typography.lineHeight.50}"},name:"typographyLineHeight50",attributes:{},path:["typography","lineHeight","50"]},60:{key:"{typography.lineHeight.60}",$type:"lineHeight",$value:"1.75rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"1.75rem",key:"{typography.lineHeight.60}"},name:"typographyLineHeight60",attributes:{},path:["typography","lineHeight","60"]},70:{key:"{typography.lineHeight.70}",$type:"lineHeight",$value:"2rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"2rem",key:"{typography.lineHeight.70}"},name:"typographyLineHeight70",attributes:{},path:["typography","lineHeight","70"]},80:{key:"{typography.lineHeight.80}",$type:"lineHeight",$value:"2.25rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"2.25rem",key:"{typography.lineHeight.80}"},name:"typographyLineHeight80",attributes:{},path:["typography","lineHeight","80"]},90:{key:"{typography.lineHeight.90}",$type:"lineHeight",$value:"2.5rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"2.5rem",key:"{typography.lineHeight.90}"},name:"typographyLineHeight90",attributes:{},path:["typography","lineHeight","90"]},100:{key:"{typography.lineHeight.100}",$type:"lineHeight",$value:"2.75rem",filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"2.75rem",key:"{typography.lineHeight.100}"},name:"typographyLineHeight100",attributes:{},path:["typography","lineHeight","100"]}},weight:{thin:{key:"{typography.weight.thin}",$type:"fontWeight",$value:100,filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:100,key:"{typography.weight.thin}"},name:"typographyWeightThin",attributes:{},path:["typography","weight","thin"]},extraLight:{key:"{typography.weight.extraLight}",$type:"fontWeight",$value:200,filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:200,key:"{typography.weight.extraLight}"},name:"typographyWeightExtraLight",attributes:{},path:["typography","weight","extraLight"]},light:{key:"{typography.weight.light}",$type:"fontWeight",$value:300,filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:300,key:"{typography.weight.light}"},name:"typographyWeightLight",attributes:{},path:["typography","weight","light"]},regular:{key:"{typography.weight.regular}",$type:"fontWeight",$value:400,filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:400,key:"{typography.weight.regular}"},name:"typographyWeightRegular",attributes:{},path:["typography","weight","regular"]},medium:{key:"{typography.weight.medium}",$type:"fontWeight",$value:500,filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:500,key:"{typography.weight.medium}"},name:"typographyWeightMedium",attributes:{},path:["typography","weight","medium"]},semiBold:{key:"{typography.weight.semiBold}",$type:"fontWeight",$value:600,filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:600,key:"{typography.weight.semiBold}"},name:"typographyWeightSemiBold",attributes:{},path:["typography","weight","semiBold"]},bold:{key:"{typography.weight.bold}",$type:"fontWeight",$value:700,filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:700,key:"{typography.weight.bold}"},name:"typographyWeightBold",attributes:{},path:["typography","weight","bold"]},extraBold:{key:"{typography.weight.extraBold}",$type:"fontWeight",$value:800,filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:800,key:"{typography.weight.extraBold}"},name:"typographyWeightExtraBold",attributes:{},path:["typography","weight","extraBold"]},black:{key:"{typography.weight.black}",$type:"fontWeight",$value:900,filePath:"packages/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:900,key:"{typography.weight.black}"},name:"typographyWeightBlack",attributes:{},path:["typography","weight","black"]}}},zIndex:{base:{key:"{zIndex.base}",$value:1,filePath:"packages/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:1,$type:"number",key:"{zIndex.base}"},name:"zIndexBase",attributes:{},path:["zIndex","base"]},above:{key:"{zIndex.above}",$value:10,filePath:"packages/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:10,$type:"number",key:"{zIndex.above}"},name:"zIndexAbove",attributes:{},path:["zIndex","above"]},modal:{key:"{zIndex.modal}",$value:1000,filePath:"packages/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:1000,$type:"number",key:"{zIndex.modal}"},name:"zIndexModal",attributes:{},path:["zIndex","modal"]},toast:{key:"{zIndex.toast}",$value:1100,filePath:"packages/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:1100,$type:"number",key:"{zIndex.toast}"},name:"zIndexToast",attributes:{},path:["zIndex","toast"]},skipToContent:{key:"{zIndex.skipToContent}",$value:1200,filePath:"packages/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:1200,$type:"number",key:"{zIndex.skipToContent}"},name:"zIndexSkipToContent",attributes:{},path:["zIndex","skipToContent"]}}});
;// ./packages/theme/src/lib/style-dictionary-dist/variables.js
/**
 * Do not edit directly, this file was auto-generated.
 */var windowSizesSm="480px";var windowSizesMd="768px";var windowSizesLg="1024px";var windowSizesXl="1280px";var breakpointsXs="(max-width: calc(480px - 1px))";var breakpointsSm="(min-width: 480px)";var breakpointsMd="(min-width: 768px)";var breakpointsLg="(min-width: 1024px)";var breakpointsXl="(min-width: 1280px)";var colorBlackBase="#000";// Black
var colorBlackHover="#0d0d0d";// Black hover
var colorWhiteBase="#fff";// White
var colorWhiteHover="#e6e6e6";// White hover
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
var buttonBackgroundPrimaryBase="light-dark(#143c50, #2e7ca5)";// Färg på primärknapp
var buttonBackgroundPrimaryHover="light-dark(#25607f, #25607f)";// Hover state på primärknapp
var buttonBackgroundPrimaryActive="light-dark(#2e7ca5, #143c50)";// Active state för primärknapp
var buttonBackgroundSecondaryBase="light-dark(#fff, #171717)";// Färg på sekundärknapp
var buttonBackgroundSecondaryHover="light-dark(#e6e6e6, #212121)";// Hover state på sekundärknapp
var buttonBackgroundSecondaryActive="light-dark(#d9d9d9, #262626)";// Active state för sekundärknapp
var buttonBackgroundTertiaryHover="light-dark(#e6e6e6, #212121)";// Hover state för tertiär knapp
var buttonBackgroundTertiaryActive="light-dark(#d9d9d9, #262626)";// Active state för tertiär knapp
var buttonBackgroundDangerBase="light-dark(#e62323, #e62323)";// Färg på danger knapp
var buttonBackgroundDangerHover="light-dark(#bc1d1d, #bc1d1d)";// Hover state för danger knapp
var buttonBackgroundDangerActive="light-dark(#7d1313, #7d1313)";// Active state för danger knapp
var buttonBackgroundDisabled="light-dark(#f2f2f2, #262626)";// Disabled state för knappar
var buttonBorderSecondary="light-dark(#143c50, #f2f2f2)";// Kantfärg för sekundärknapp
var buttonIconHover="light-dark(#0000001a, #ffffff1a)";var buttonIconActive="light-dark(#00000033, #ffffff33)";// Active state för ikoner
var badgeBackground="light-dark(#e62323, #e62323)";var calendarDateBackgroundHover="light-dark(#0000001a, #ffffff1a)";var calendarDateBackgroundSelected="light-dark(#143c50, #5897b8)";var calendarDateBackgroundStartRange="light-dark(#143c50, #5897b8)";var calendarDateBackgroundInRange="light-dark(#d5e5ed, #143c50)";var calendarDateBackgroundEndRange="light-dark(#143c50, #5897b8)";var logoPrimary="light-dark(#b90835, #fff)";// Färg på logotypen
var menuItemBackgroundHover="light-dark(#e6e6e6, #212121)";// Bakgrundsfärg för menu vid hover
var menuItemBackgroundSelected="light-dark(#f2f2f2, #262626)";// Bakgrundsfärg för aktiv menu
var menuTextSectionHeader="light-dark(#525252, #a6a6a6)";var size10="0.125rem";var size15="0.188rem";var size20="0.25rem";var size30="0.375rem";var size40="0.5rem";var size50="0.625rem";var size60="0.75rem";var size70="0.875rem";var size75="0.938rem";var size80="1rem";var size90="1.25rem";var size100="1.5rem";var size110="1.75rem";var size120="2rem";var size130="2.5rem";var size140="2.75rem";var size150="3rem";var size00=0;var size05="0.063rem";var spacing10="0.125rem";var spacing20="0.25rem";var spacing30="0.5rem";var spacing40="0.75rem";var spacing50="1rem";var spacing60="1.5rem";var spacing70="2rem";var spacing80="2.5rem";var spacing90="3rem";var spacing100="4rem";var spacing110="5rem";var spacing120="6rem";var stateFocus="0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)";var stateFocusInset="inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)";var transitionsDurationSlow="500ms";var transitionsDurationNormal="300ms";var transitionsDurationFast="250ms";var transitionsTimingEaseOut="cubic-bezier(0, 0, 0.58, 1)";var transitionsTimingEaseIn="cubic-bezier(0.42, 0, 1, 1)";var transitionsPanelCollapse="all 300ms cubic-bezier(0, 0, 0.58, 1) allow-discrete";var transitionsPanelExpand="all 300ms cubic-bezier(0.42, 0, 1, 1) allow-discrete";var typographyFontFamily="Inter, sans-serif";var typographyFontSize10="0.75rem";var typographyFontSize20="0.875rem";var typographyFontSize30="1rem";var typographyFontSize40="1.125rem";var typographyFontSize50="1.25rem";var typographyFontSize60="1.5rem";var typographyFontSize70="1.75rem";var typographyFontSize80="2rem";var typographyFontSize90="2.25rem";var typographyFontSize100="2.625rem";var typographyLineHeight10="1rem";var typographyLineHeight20="1.125rem";var typographyLineHeight30="1.25rem";var typographyLineHeight40="1.375rem";var typographyLineHeight50="1.5rem";var typographyLineHeight60="1.75rem";var typographyLineHeight70="2rem";var typographyLineHeight80="2.25rem";var typographyLineHeight90="2.5rem";var typographyLineHeight100="2.75rem";var typographyWeightThin=100;var typographyWeightExtraLight=200;var typographyWeightLight=300;var typographyWeightRegular=400;var typographyWeightMedium=500;var typographyWeightSemiBold=600;var typographyWeightBold=700;var typographyWeightExtraBold=800;var typographyWeightBlack=900;var zIndexBase=1;var zIndexAbove=10;var zIndexModal=1000;var zIndexToast=1100;var zIndexSkipToContent=1200;
;// ./packages/theme/src/lib/index.ts

;// ./packages/theme/src/index.ts


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
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
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

/***/ 22622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_link_mdx_7d4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-link-mdx-7d4.json
const site_docs_components_link_mdx_7d4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/link","title":"Link","description":"Komponent som skapar en länk","source":"@site/docs/components/link.mdx","sourceDirName":"components","slug":"/components/link","permalink":"/pr-preview/pr-846/components/link","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Link","description":"Komponent som skapar en länk","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(68713);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var Link = __webpack_require__(25441);
// EXTERNAL MODULE: ./packages/theme/src/index.ts + 3 modules
var src = __webpack_require__(17366);
;// ./apps/docs/docs/components/link.mdx


const frontMatter = {
	title: 'Link',
	description: 'Komponent som skapar en länk',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};







const toc = [{
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "Länk",
  "id": "länk",
  "level": 3
}, {
  "value": "Fristående",
  "id": "fristående",
  "level": 3
}, {
  "value": "Stretched",
  "id": "stretched",
  "level": 3
}, {
  "value": "Ny flik",
  "id": "ny-flik",
  "level": 3
}, {
  "value": "Nedladdning",
  "id": "nedladdning",
  "level": 3
}, {
  "value": "Client Side Routing",
  "id": "client-side-routing",
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
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      name: "Link",
      friendlyName: "Länk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponenten Link skapar en länk som kan vara i ett textstycke eller fristående."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { Link } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Text>\n  En text med en <Link href='#'>länk</Link> i ett textstycke.\n</Text>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Text/* Text */.E, {
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En text med en ", (0,jsx_runtime.jsx)(Link/* Link */.N, {
            href: "#",
            children: "länk"
          }), " i ett textstycke."]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "länk",
      children: "Länk"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{2}",
        children: "<Text>\n  En text med en <Link href='#länk'>länk</Link> i ett textstycke.\n</Text>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Text/* Text */.E, {
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En text med en ", (0,jsx_runtime.jsx)(Link/* Link */.N, {
            href: "#länk",
            children: "länk"
          }), " i ett textstycke."]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fristående",
      children: "Fristående"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "standalone"
      }), " för att använda komponenten som en fristående länk under t.ex ett textblock."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{3}",
        children: "<Text>Text</Text>\n<Link\n  standalone\n  href=\"#fristående\"\n>\n  En länk som är fristående från text\n</Link>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      className: "card",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["För att visa en länk som en fristående komponent, använd propertyn ", (0,jsx_runtime.jsx)("code", {
          children: "standalone"
        }), ". Detta kan vara användbart\nnär du vill att länken ska stå ut från omgivande text eller när du vill placera den på en egen rad."]
      }), (0,jsx_runtime.jsx)(Link/* Link */.N, {
        standalone: true,
        href: "#fristående",
        children: 'En länk som är fristående från text'
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stretched",
      children: "Stretched"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stretched"
      }), " för att låta hela föräldraelementet vara klickbart till länken. Den klickbara ytan placeras med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position: absolute"
      }), " och sträcker sig över hela föräldraelementet. Placera därför ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position: relative"
      }), " på relevant element för att inte den klickbara ytan ska sträckas för långt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{1,5,10}",
        children: "<div style={{ position: 'relative' }}>\n  <p>Text</p>\n  <Link\n    standalone\n    stretched\n    href='#stretched'\n  >\n    En länk som sträcker sig över hela ytan\n  </Link>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)("div", {
        style: {
          position: 'relative',
          background: src/* variables.layer01Base */.E.ak9,
          padding: '1rem'
        },
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["En länk kan sträcka sig över en hel yta genom propertyn ", (0,jsx_runtime.jsx)("code", {
            children: "stretched"
          }), ". Detta kan vara användbart när du\nvill att hela ytan ska vara klickbar, till exempel i en kort eller en panel."]
        }), (0,jsx_runtime.jsx)(Link/* Link */.N, {
          standalone: true,
          stretched: true,
          href: "#stretched",
          children: 'En länk som sträcker sig över hela ytan'
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ny-flik",
      children: "Ny flik"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om en länk är satt till att öppnas i en ny flik förtydligas detta med en ikon. Detta görs genom att sätta ", (0,jsx_runtime.jsx)(_components.code, {
        children: "target='_blank'"
      }), " på länken."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{3}",
        children: "<Link\n  href='#länk'\n  target='_blank'\n>\n  En länk till en annan URL\n</Link>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Link/* Link */.N, {
        href: "#länk",
        target: "_blank",
        children: 'En länk till en annan URL'
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nedladdning",
      children: "Nedladdning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Även vid nedladdning förtydligas detta med en ikon. Detta görs genom att sätta ", (0,jsx_runtime.jsx)(_components.code, {
        children: "download"
      }), " på länken."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{3}",
        children: "<Link\n  href='#nedladdning'\n  download\n>\n  Ladda ned senaste rapporten\n</Link>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Link/* Link */.N, {
        href: "#nedladdning",
        download: true,
        children: 'Ladda ned senaste rapporten'
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "client-side-routing",
      children: "Client Side Routing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Läs mer om hur du kan använda komponenten med ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/client-side-routing",
        children: "Client Side Routing"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "val-av-komponent",
      children: "Val av komponent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Se mönstret ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/design-patterns/buttons-and-links",
        children: "Knappar och länkar"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "Link"
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

/***/ 25441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ Link)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(20454);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/link/Link.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Link_module = ({"link":"link_RCbb","icon":"icon_Bxuv","standalone":"standalone_Cg9F","stretched":"stretched_pvQw"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var dist_Link = __webpack_require__(73099);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js
var arrow_down_to_line = __webpack_require__(69750);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
var square_arrow_out_up_right = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/link/Link.tsx
'use client';var _excluded=["children","standalone","target","stretched","download","icon","className","as"];var Link=function Link(_ref){var children=_ref.children,standalone=_ref.standalone,target=_ref.target,stretched=_ref.stretched,download=_ref.download,IconComponent=_ref.icon,className=_ref.className,as=_ref.as,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||dist_Link/* Link */.N;var Icon=function Icon(_ref2){var rest=Object.assign({},((0,objectDestructuringEmpty/* default */.A)(_ref2),_ref2));if(IconComponent)return/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,Object.assign({},rest));if(download)return/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_down_to_line/* default */.A,Object.assign({},rest));if(target==='_blank')return/*#__PURE__*/(0,jsx_runtime.jsx)(square_arrow_out_up_right/* default */.A,Object.assign({},rest));if(standalone)return/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_right/* default */.A,Object.assign({},rest));return null;};return/*#__PURE__*/(0,jsx_runtime.jsx)(Component,Object.assign({className:(0,clsx/* default */.A)(Link_module.link,standalone&&Link_module.standalone,stretched&&Link_module.stretched,className)},rest,{target:target,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{size:16,className:Link_module.icon})]})}));};

/***/ }),

/***/ 28777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover_Popover)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
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

/***/ 45644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ AccordionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var AccordionContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

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

/***/ 69750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowDownToLine)
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
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
];
const ArrowDownToLine = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("arrow-down-to-line", __iconNode);


//# sourceMappingURL=arrow-down-to-line.js.map


/***/ }),

/***/ 74351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38739);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
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
 */var Grid=function Grid(_ref){var children=_ref.children,_ref$isContained=_ref.isContained,isContained=_ref$isContained===void 0?false:_ref$isContained,_ref$removeMargins=_ref.removeMargins,removeMargins=_ref$removeMargins===void 0?false:_ref$removeMargins,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({},rest,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.container,isContained&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.contained,removeMargins&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.removeMargins,rest.className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.flex,children:children})}));};

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
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Heading.mjs
var dist_Heading = __webpack_require__(57936);
;// ./packages/components/src/heading/Heading.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Heading_module = ({"h1":"h1_fQIH","h2":"h2_fBmz","h3":"h3_xOF5","h4":"h4_AF6p","h5":"h5_slY8","h6":"h6_loS0"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/heading/Heading.tsx
var _excluded=["children","className","isExpressive","level","elementType"];var Heading=function Heading(_ref){var children=_ref.children,className=_ref.className,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$level=_ref.level,level=_ref$level===void 0?3:_ref$level,elementType=_ref.elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var semanticLevel=elementType&&parseInt(elementType.split('h')[1]);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Heading/* Heading */.D,Object.assign({level:semanticLevel||level,className:(0,clsx/* default */.A)([Heading_module.h1,Heading_module.h2,Heading_module.h3,Heading_module.h4,Heading_module.h5,Heading_module.h6][level-1],className)},isExpressive&&{'data-expressive':true},rest,{children:children}));};

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
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
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

/***/ })

}]);