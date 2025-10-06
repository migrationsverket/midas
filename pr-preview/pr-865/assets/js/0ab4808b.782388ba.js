"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1982],{

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
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74351);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93574);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56636);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92457);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42350);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
var ComponentHeader=function ComponentHeader(_ref){var name=_ref.name,friendlyName=_ref.friendlyName,overrideHeadlessLink=_ref.overrideHeadlessLink,overrideHeadlessLinkTitle=_ref.overrideHeadlessLinkTitle;var baseUrl=_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay;var componentPath="?path=/docs/components-"+name.toLowerCase()+"--docs";var storybookHost= false?0:baseUrl('/storybook');var storybookLink=storybookHost+"/"+componentPath;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section",{className:"component-header",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .Grid */ .x,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .GridItem */ .E,{size:"auto",className:"friendlyName",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:storybookLink,variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,iconPlacement:"left",children:"Storybook"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,iconPlacement:"left",children:overrideHeadlessLinkTitle?overrideHeadlessLinkTitle:'React Aria'})})]})});};

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

/***/ 45644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ AccordionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var AccordionContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

/***/ }),

/***/ 61139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_link_button_mdx_0ab_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-link-button-mdx-0ab.json
const site_docs_components_link_button_mdx_0ab_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/link-button","title":"LinkButton","description":"Komponent med samma utseende och beteende som knapp men avsedd att använda som länk internt eller externt i en applikation.","source":"@site/docs/components/link-button.mdx","sourceDirName":"components","slug":"/components/link-button","permalink":"/pr-preview/pr-865/components/link-button","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"LinkButton","description":"Komponent med samma utseende och beteende som knapp men avsedd att använda som länk internt eller externt i en applikation.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(68713);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js + 27 modules
var CodeBlock = __webpack_require__(83457);
// EXTERNAL MODULE: ./packages/components/src/link-button/LinkButton.tsx + 1 modules
var LinkButton = __webpack_require__(56636);
;// ./apps/docs/src/components/examples/link-button/LinkButtonExamples.tsx
var Example=function Example(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"card",style:{display:'flex',flexDirection:'row',gap:'1rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LinkButton/* LinkButton */.z,{href:"#",children:"Starta tj\xE4nst"}),/*#__PURE__*/(0,jsx_runtime.jsx)(LinkButton/* LinkButton */.z,{variant:"secondary",href:"#",children:"Starta tj\xE4nst"}),/*#__PURE__*/(0,jsx_runtime.jsx)(LinkButton/* LinkButton */.z,{variant:"tertiary",href:"#",children:"Starta tj\xE4nst"})]});};
;// ./node_modules/raw-loader/dist/cjs.js!./apps/docs/src/components/examples/link-button/LinkButtonExamples.tsx
/* harmony default export */ const LinkButtonExamples = ("import { LinkButton } from '@midas-ds/components'\n\nexport const Example = () => {\n  return (\n    <div\n      className='card'\n      style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}\n    >\n      <LinkButton href='#'>Starta tjänst</LinkButton>\n      <LinkButton\n        variant='secondary'\n        href='#'\n      >\n        Starta tjänst\n      </LinkButton>\n      <LinkButton\n        variant='tertiary'\n        href='#'\n      >\n        Starta tjänst\n      </LinkButton>\n    </div>\n  )\n}\n");
;// ./apps/docs/docs/components/link-button.mdx


const frontMatter = {
	title: 'LinkButton',
	description: 'Komponent med samma utseende och beteende som knapp men avsedd att använda som länk internt eller externt i en applikation.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};

/*eslint-disable-next-line import/no-webpack-loader-syntax*/







const toc = [{
  "value": "Client Side Routing",
  "id": "client-side-routing",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: "LinkButton",
      friendlyName: "Länkknapp",
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/Link.html"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Komponent med samma utseende och beteende som ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/button",
        children: "Button"
      }), " men avsedd att använda som länk internt eller externt i en applikation."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      language: "tsx",
      children: LinkButtonExamples
    }), "\n", (0,jsx_runtime.jsx)(Example, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Se mönstret ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/design-patterns/buttons-and-links",
        children: "Knappar och länkar"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "LinkButton"
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

/***/ })

}]);