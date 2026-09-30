"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6960],{

/***/ 60220
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_spinner_mdx_98d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-spinner-mdx-98d.json
const site_docs_components_spinner_mdx_98d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/spinner","title":"Spinner","description":"Upplys användaren om att systemet/tjänsten laddar","source":"@site/docs/components/spinner.mdx","sourceDirName":"components","slug":"/components/spinner","permalink":"/pr-preview/pr-1391/components/spinner","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Spinner","description":"Upplys användaren om att systemet/tjänsten laddar"},"sidebar":"sideBar","previous":{"title":"Skeleton","permalink":"/pr-preview/pr-1391/components/skeleton"},"next":{"title":"Table","permalink":"/pr-preview/pr-1391/components/table"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(68713);
;// ./dist/api/components/Spinner.json
const Spinner_namespaceObject = /*#__PURE__*/JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"Spinner","description":"","sourceFile":"packages/components/src/spinner/Spinner.tsx","props":{"small":{"defaultValue":{"value":"false"},"description":"Displays a smaller spinner when set to true","name":"small","required":false,"parent":{"fileName":"midas/packages/components/src/spinner/Spinner.tsx","name":"SpinnerProps"},"declarations":[{"fileName":"midas/packages/components/src/spinner/Spinner.tsx","name":"SpinnerProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"color":{"defaultValue":null,"description":"User defined color","name":"color","required":false,"parent":{"fileName":"midas/packages/components/src/spinner/Spinner.tsx","name":"SpinnerProps"},"declarations":[{"fileName":"midas/packages/components/src/spinner/Spinner.tsx","name":"SpinnerProps"}],"type":{"name":"string","raw":"string"}},"className":{"defaultValue":null,"description":"","name":"className","required":false,"parent":{"fileName":"midas/packages/components/src/spinner/Spinner.tsx","name":"SpinnerProps"},"declarations":[{"fileName":"midas/packages/components/src/spinner/Spinner.tsx","name":"SpinnerProps"}],"type":{"name":"string","raw":"string"}}},"types":{}}');
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
// EXTERNAL MODULE: ./packages/components/src/spinner/Spinner.tsx + 3 modules
var Spinner = __webpack_require__(41326);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/theme/src/lib/style-dictionary-dist/variables.js
var variables = __webpack_require__(90904);
;// ./apps/docs/docs/components/spinner.mdx


const frontMatter = {
	title: 'Spinner',
	description: 'Upplys användaren om att systemet/tjänsten laddar'
};
const contentTitle = undefined;

const assets = {

};








const toc = [{
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "Storlek",
  "id": "storlek",
  "level": 3
}, {
  "value": "Färg",
  "id": "färg",
  "level": 3
}, {
  "value": "Valfri färg",
  "id": "valfri-färg",
  "level": 3
}, {
  "value": "Knapp med spinner",
  "id": "knapp-med-spinner",
  "level": 3
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
      name: "Spinner",
      friendlyName: "Laddningsindikator",
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Komponent som används för att upplysa användaren om att systemet/tjänsten laddar eller jobbar på något i bakgrunden.\nLäs mer om hur spinner används i ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/design-patterns/page-loading",
        children: "Mönster för laddningsindikatorer"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Spinner } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Spinner />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Spinner/* Spinner */.y, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "storlek",
      children: "Storlek"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Standardstorleken är helskärmsspinner. Använd varianten ", (0,jsx_runtime.jsx)(_components.code, {
        children: "small"
      }), " när spinner ligger bredvid andra komponenter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Spinner small />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Spinner/* Spinner */.y, {
        small: true
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "färg",
      children: "Färg"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spinnern ärver sin färg från textfärgen på det element den placeras i."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Spinner />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Spinner/* Spinner */.y, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "valfri-färg",
      children: "Valfri färg"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Spinner\n  color={variables.iconOnColor}\n  small\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        backgroundColor: variables/* colorGray200 */.jc5
      },
      children: (0,jsx_runtime.jsx)(Spinner/* Spinner */.y, {
        color: variables/* iconOnColor */.w1t,
        small: true
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "knapp-med-spinner",
      children: "Knapp med spinner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att visa en spinner i Button används property ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isPending"
      }), " på ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/button",
        children: "Button"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Button isPending>Laddar...</Button>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        display: 'block'
      },
      children: (0,jsx_runtime.jsx)(Button/* Button */.$, {
        isPending: true,
        children: "Laddar..."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Om det väntas ta mer än 10 sekunder att ladda sidan bör det förutom en spinner finnas ett meddelande till användaren om det."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      doc: Spinner_namespaceObject
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

/***/ 68713
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ PropTable)
});

// UNUSED EXPORTS: DisplayCompositeTypes

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(99592);
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(28777);
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx + 1 modules
var Accordion = __webpack_require__(11046);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx + 1 modules
var AccordionItem = __webpack_require__(93777);
;// ./apps/docs/src/css/propstable.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const propstable_module = ({"accordion":"accordion_M8EQ","propsGridTable":"propsGridTable_luj3","membersTable":"membersTable_K5oi","popover":"popover_gEf7","arrow":"arrow_kUCF"});
// EXTERNAL MODULE: ./node_modules/react-markdown/lib/index.js + 139 modules
var lib = __webpack_require__(24792);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/Lowlight.js + 2 modules
var Lowlight = __webpack_require__(80556);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/common.js + 38 modules
var common = __webpack_require__(12665);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/Pressable.mjs
var Pressable = __webpack_require__(45210);
;// ./apps/docs/src/utils/jsdocLinkToMarkdown.ts
var jsdocLinkToMarkdown=function jsdocLinkToMarkdown(comment){return(// {@link URL|Text} or {@link URL Text} format (JSDoc style)
comment.replace(/\{@link\s+([^|\s}]+)\s*\|?\s*([^}]+)\}/g,function(match,url,text){return"["+text.trim()+"]("+url+")";})// Replace @see with "See " at the beginning of lines
.replace(/^\s*@see\s+/gm,'See ')// Remove @link tags from the beginning of lines (but keep the markdown link)
.replace(/^\s*@link\s+/gm,'')// Remove any extra @link tags that might be inline
.replace(/\s*@link\s+/g,' '));};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/PropsTable.tsx
var _excluded=["membersRef"],_excluded2=["membersRef","value"],_excluded3=["membersRef"];/**
 * Generated docs store drill-down members once per file in `doc.types` and
 * refer to them by key. Resolves those references into nested `members`.
 */function resolveProps(doc){var tables=new Map();var _resolve=function resolve(ref){if(!ref)return undefined;if(!tables.has(ref)){tables.set(ref,doc.types[ref].map(function(_ref){var membersRef=_ref.membersRef,member=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return Object.assign({},member,{members:_resolve(membersRef)});}));}return tables.get(ref);};return Object.fromEntries(Object.entries(doc.props).map(function(_ref2){var key=_ref2[0],prop=_ref2[1];var _prop$type=prop.type,membersRef=_prop$type.membersRef,value=_prop$type.value,type=(0,objectWithoutPropertiesLoose/* default */.A)(_prop$type,_excluded2);return[key,Object.assign({},prop,{type:Object.assign({},type,{value:value==null?void 0:value.map(function(_ref3){var membersRef=_ref3.membersRef,entry=(0,objectWithoutPropertiesLoose/* default */.A)(_ref3,_excluded3);return Object.assign({},entry,{members:_resolve(membersRef)});}),members:_resolve(membersRef)})})];}));}function hasMembers(type){return Array.isArray(type.members)&&type.members.length>0;}/** Renders a type name — clickable with drill-down popover if it has members */var DrillableType=function DrillableType(_ref4){var typeStr=_ref4.typeStr,members=_ref4.members;if(members&&members.length>0){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Pressable/* Pressable */.o,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{role:"button",style:{cursor:'pointer'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:typeStr,inline:true,language:"typescript",markers:[]})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{style:{maxWidth:'min(90vw, 800px)'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(MembersTable,{members:members})})]});}return/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:typeStr,inline:true,language:"typescript",markers:[]});};var MembersTable=function MembersTable(_ref5){var members=_ref5.members;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:propstable_module.membersTable,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Name"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Type"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Description"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{children:members.map(function(member){return/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("td",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:""+member.name+(member.required?'':'?'),inline:true,language:"typescript",markers:[]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(DrillableType,{typeStr:member.type,members:member.members})}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{children:member.description||'-'})]},member.name);})})]})});};var DisplayCompositeTypes=function DisplayCompositeTypes(_ref6){var props=_ref6.props;if(hasMembers(props.type)){return/*#__PURE__*/(0,jsx_runtime.jsx)(DrillableType,{typeStr:props.type.name,members:props.type.members});}switch(props.type.name){case'enum':{var _props$type$value;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Pressable/* Pressable */.o,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{role:"button",style:{cursor:'pointer'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props.type.raw,inline:true,language:"typescript",markers:[]})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"hljs-code",children:(_props$type$value=props.type.value)==null?void 0:_props$type$value.map(function(r,i){return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{children:[i===0?' ':' | ',/*#__PURE__*/(0,jsx_runtime.jsx)(DrillableType,{typeStr:r.value.replace(/"/g,"'"),members:r.members})]},""+r.value+i);})})})]});}default:return/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props.type.name,inline:true,language:"typescript",markers:[]});}};/**
 * Props table for a component. Import the component's generated API doc in
 * the MDX file and pass it as `doc`:
 *
 * ```mdx
 * import ButtonApi from '@midas-ds/api/components/Button.json'
 *
 * <PropTable doc={ButtonApi} />
 * ```
 */var PropTable=function PropTable(_ref7){var doc=_ref7.doc,_ref7$defaultOpen=_ref7.defaultOpen,defaultOpen=_ref7$defaultOpen===void 0?true:_ref7$defaultOpen;var props=(0,react.useMemo)(function(){return resolveProps(doc);},[doc]);var _Object$entries$reduc=Object.entries(props).reduce(function(acc,_ref8){var key=_ref8[0],value=_ref8[1];if(key.startsWith('on')){acc.events[key]=value;}else if(key.startsWith('aria-')){acc.accessibility[key]=value;}else{acc.rest[key]=value;}return acc;},{events:{},accessibility:{},rest:{}}),events=_Object$entries$reduc.events,accessibility=_Object$entries$reduc.accessibility,rest=_Object$entries$reduc.rest;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Accordion/* Accordion */.n,{className:propstable_module.accordion,allowsMultipleExpanded:true,defaultExpandedKeys:defaultOpen?['props']:[],children:[Object.getOwnPropertyNames(rest).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"props",title:"Props",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:rest,props:props})}),Object.getOwnPropertyNames(events).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"events",title:"Events",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:events,props:props,showDefault:false})}),Object.getOwnPropertyNames(accessibility).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"accessibility",title:"Tillg\xE4nglighet",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:accessibility,props:props,showDefault:false})})]});};var Grid=function Grid(_ref9){var propGroup=_ref9.propGroup,props=_ref9.props,_ref9$showDefault=_ref9.showDefault,showDefault=_ref9$showDefault===void 0?true:_ref9$showDefault;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:propstable_module.propsGridTable,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Name"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Type"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:showDefault&&'Default'}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Description"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{children:Object.keys(propGroup).map(function(key){return/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("td",{"data-title":"Name",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:key,inline:true,language:"typescript",markers:[]}),props[key].required&&' *']}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Type",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DisplayCompositeTypes,{props:props[key]})}),showDefault?/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Default",children:props[key].defaultValue?/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props[key].defaultValue.value,inline:true,language:"typescript",markers:[]}):'-'}):/*#__PURE__*/(0,jsx_runtime.jsx)("td",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Description",children:/*#__PURE__*/(0,jsx_runtime.jsx)(lib/* Markdown */.oz,{children:jsdocLinkToMarkdown(props[key].description)})})]},key);})})]})});};

/***/ },

/***/ 13225
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ComponentHeader)
/* harmony export */ });
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74351);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10809);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93574);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42350);
/* harmony import */ var _site_src_components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75575);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74848);
/* eslint-disable @nx/enforce-module-boundaries */var ComponentHeader=function ComponentHeader(_ref){var name=_ref.name,friendlyName=_ref.friendlyName,overrideHeadlessLink=_ref.overrideHeadlessLink,overrideHeadlessLinkTitle=_ref.overrideHeadlessLinkTitle,hideStorybookLink=_ref.hideStorybookLink,overrideStorybookPath=_ref.overrideStorybookPath;var baseUrl=_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay;var componentPath=overrideStorybookPath!=null?overrideStorybookPath:"?path=/docs/components-"+name.toLowerCase()+"--docs";var storybookHost= false?0:baseUrl('/storybook');var storybookLink=storybookHost+"/"+componentPath;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section",{className:"component-header",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_0__/* .Grid */ .x,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .GridItem */ .E,{size:"auto",className:"friendlyName",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b",{children:friendlyName})}),!hideStorybookLink&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_1__/* .LinkButton */ .z,{href:storybookLink,variant:"tertiary",icon:_site_src_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .EmptyIcon */ .F,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_site_src_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .StorybookIcon */ .q,{size:24,color:"#FF4785"}),"Storybook"]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_1__/* .LinkButton */ .z,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,iconPlacement:"left",children:overrideHeadlessLinkTitle?overrideHeadlessLinkTitle:'React Aria'})})]})});};

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
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(96154);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(45644);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/accordion/Accordion.tsx
'use client';var _excluded=["children","className","isContained","size"];/**
 * Accordions help reduce visual clutter on a page by organizing content into collapsible sections.
 */var Accordion=function Accordion(_ref){var children=_ref.children,className=_ref.className,isContained=_ref.isContained,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionContext/* AccordionContext */.C.Provider,{value:{isContained:isContained,size:size},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Disclosure/* DisclosureGroup */.Tw,Object.assign({className:(0,clsx/* default */.A)(Accordion_module.root,isContained?Accordion_module.contained:Accordion_module.uncontained,className)},props,{children:children}))});};

/***/ },

/***/ 45644
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ AccordionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var AccordionContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

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
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(96154);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
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
var _excluded=["title","children","className","headingLevel","type","hasBackground","size","isContained","iconAriaLabel"];var AccordionItem=function AccordionItem(_ref){var _ref2;var title=_ref.title,children=_ref.children,className=_ref.className,_ref$headingLevel=_ref.headingLevel,headingLevel=_ref$headingLevel===void 0?'h2':_ref$headingLevel,type=_ref.type,_ref$hasBackground=_ref.hasBackground,hasBackground=_ref$hasBackground===void 0?true:_ref$hasBackground,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,isContainedFromProp=_ref.isContained,iconAriaLabel=_ref.iconAriaLabel,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var context=(0,react.useContext)(AccordionContext/* AccordionContext */.C);var isContained=(_ref2=isContainedFromProp!=null?isContainedFromProp:context==null?void 0:context.isContained)!=null?_ref2:false;var titleIsReactNode=typeof title==='object';(0,react.useEffect)(function(){if(type&&!isContained){console.warn("AccordionItem: When 'type' is set, it is recommended to also set 'isContained' to true for visual consistency.");}},[type,isContained]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Disclosure/* Disclosure */.EN,Object.assign({},props,{className:(0,clsx/* default */.A)(AccordionItem_module.item,type&&isContained&&AccordionItem_module[type],(size==='medium'||(context==null?void 0:context.size)==='medium')&&AccordionItem_module.medium,isContained&&AccordionItem_module.contained,className),children:(0,utils/* composeRenderProps */.HW)(children,function(children){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:AccordionItem_module.trigger,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* Button */.$,{className:AccordionItem_module.triggerButton,slot:"trigger",variant:"icon",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20,className:AccordionItem_module.chevronIcon}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:AccordionItem_module.triggerMainContent,children:titleIsReactNode?title:/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{level:3,elementType:headingLevel,className:AccordionItem_module.triggerText,children:title})}),type&&isContained&&/*#__PURE__*/(0,jsx_runtime.jsx)(FeedbackStatusIcon/* FeedbackStatusIcon */.$,{"aria-label":iconAriaLabel,className:AccordionItem_module.statusIcon,status:type})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Disclosure/* DisclosurePanel */.kS,{className:AccordionItem_module.panel,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(AccordionItem_module.content,hasBackground&&AccordionItem_module.hasBackground),children:children})})]});})}));};

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
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Heading.mjs
var private_Heading = __webpack_require__(91820);
;// ./packages/components/src/heading/Heading.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Heading_module = ({"h1":"h1_fQIH","h2":"h2_fBmz","h3":"h3_xOF5","h4":"h4_AF6p","h5":"h5_slY8","h6":"h6_loS0"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/heading/Heading.tsx
var _excluded=["children","className","enableMargins","isExpressive","level","elementType"];var Heading=function Heading(_ref){var children=_ref.children,className=_ref.className,_ref$enableMargins=_ref.enableMargins,enableMargins=_ref$enableMargins===void 0?false:_ref$enableMargins,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$level=_ref.level,level=_ref$level===void 0?3:_ref$level,elementType=_ref.elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var semanticLevel=elementType&&parseInt(elementType.split('h')[1]);return/*#__PURE__*/(0,jsx_runtime.jsx)(private_Heading/* Heading */.D,Object.assign({level:semanticLevel||level,className:(0,clsx/* default */.A)([Heading_module.h1,Heading_module.h2,Heading_module.h3,Heading_module.h4,Heading_module.h5,Heading_module.h6][level-1],className)},isExpressive&&{'data-expressive':true},enableMargins&&{'data-margin':true},rest,{children:children}));};

/***/ },

/***/ 10809
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
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Link.mjs + 1 modules
var Link = __webpack_require__(67452);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(81013);
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
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/link-button/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"opensInNewTab":"Opens in new tab"},"sv":{"opensInNewTab":"Öppnas i ny flik"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/link-button/LinkButton.tsx
'use client';var _excluded=["children","variant","fullwidth","icon","iconPlacement","className","as","size"],_excluded2=["icon"];/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */var LinkButton=function LinkButton(_ref){var children=_ref.children,variant=_ref.variant,fullwidth=_ref.fullwidth,customIcon=_ref.icon,iconPlacement=_ref.iconPlacement,className=_ref.className,as=_ref.as,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||Link/* Link */.N;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var getIcon=function getIcon(){if(customIcon)return{icon:customIcon};if(rest.target==='_blank')return{icon:square_arrow_out_up_right/* default */.A,label:strings.format('opensInNewTab')};if(iconPlacement==='left')return{icon:arrow_left/* default */.A};return{icon:arrow_right/* default */.A};};var iconConfig=getIcon();return/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,Object.assign({className:(0,clsx/* default */.A)(LinkButton_module.linkButton,variant==='primary'&&LinkButton_module.primary,variant==='secondary'&&LinkButton_module.secondary,variant==='tertiary'&&LinkButton_module.tertiary,variant==='danger'&&LinkButton_module.danger,variant==='icon'&&LinkButton_module.iconBtn,size==='medium'&&LinkButton_module.medium,fullwidth&&LinkButton_module.fullwidth,iconPlacement==='left'&&LinkButton_module.iconLeft,className)},rest,{children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{className:LinkButton_module.icon,icon:iconConfig.icon,size:20,"aria-hidden":true}),iconConfig.label&&/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:iconConfig.label})]}));};var Icon=function Icon(_ref2){var IconComponent=_ref2.icon,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,Object.assign({},rest));};

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
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Popover.mjs + 1 modules
var Popover = __webpack_require__(51146);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(57653);
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

/***/ 90904
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A1M: () => (/* binding */ brandPrimary),
/* harmony export */   EWd: () => (/* binding */ stateFocus),
/* harmony export */   JI6: () => (/* binding */ layer02Base),
/* harmony export */   Q0Q: () => (/* binding */ textOnColor),
/* harmony export */   Qni: () => (/* binding */ buttonBackgroundPrimaryBase),
/* harmony export */   Sjf: () => (/* binding */ spaceMedium),
/* harmony export */   _2e: () => (/* binding */ borderColorPrimary),
/* harmony export */   ak9: () => (/* binding */ layer01Base),
/* harmony export */   eku: () => (/* binding */ textPrimary),
/* harmony export */   jc5: () => (/* binding */ colorGray200),
/* harmony export */   l9i: () => (/* binding */ borderColorSubtle),
/* harmony export */   tK4: () => (/* binding */ field01Base),
/* harmony export */   w$9: () => (/* binding */ backgroundBase),
/* harmony export */   w1t: () => (/* binding */ iconOnColor)
/* harmony export */ });
/* unused harmony exports base10, base15, base20, base30, base40, base50, base60, base70, base75, base80, base90, base100, base110, base120, base130, base140, base150, base00, base05, windowSizesSm, windowSizesMd, windowSizesLg, windowSizesXl, breakpointsXs, breakpointsSm, breakpointsMd, breakpointsLg, breakpointsXl, buttonBackgroundPrimaryHover, buttonBackgroundPrimaryActive, buttonBackgroundSecondaryBase, buttonBackgroundSecondaryHover, buttonBackgroundSecondaryActive, buttonBackgroundTertiaryHover, buttonBackgroundTertiaryActive, buttonBackgroundDangerBase, buttonBackgroundDangerHover, buttonBackgroundDangerActive, buttonBackgroundDisabled, buttonBorderSecondary, buttonIconHover, buttonIconActive, colorBlackBase, colorBlackHover, colorBlackOpacity5, colorBlackOpacity10, colorWhiteBase, colorWhiteHover, colorWhiteOpacity13, colorWhiteOpacity15, colorGray10, colorGray20, colorGray30, colorGray40, colorGray50, colorGray60, colorGray70, colorGray80, colorGray90, colorGray100, colorGray110, colorGray120, colorGray130, colorGray140, colorGray150, colorGray160, colorGray170, colorGray180, colorGray190, colorBlue10, colorBlue20, colorBlue40, colorBlue50, colorBlue60, colorBlue70, colorBlue80, colorBlue90, colorBlue100, colorBlue110, colorBlue120, colorBlue130, colorBlue150, colorPurple80, colorPurple110, colorRed100, colorOrange100, colorSignalBlue10, colorSignalBlue20, colorSignalBlue100, colorSignalBlue170, colorSignalBlue180, colorSignalGreen20, colorSignalGreen30, colorSignalGreen100, colorSignalGreen150, colorSignalGreen170, colorSignalGreen180, colorSignalYellow10, colorSignalYellow20, colorSignalYellow30, colorSignalYellow40, colorSignalYellow50, colorSignalYellow60, colorSignalYellow70, colorSignalYellow80, colorSignalYellow90, colorSignalYellow100, colorSignalYellow110, colorSignalYellow120, colorSignalYellow130, colorSignalYellow140, colorSignalYellow150, colorSignalYellow160, colorSignalYellow170, colorSignalYellow180, colorSignalYellow190, colorSignalYellow200, colorSignalRed10, colorSignalRed20, colorSignalRed30, colorSignalRed40, colorSignalRed50, colorSignalRed60, colorSignalRed70, colorSignalRed80, colorSignalRed90, colorSignalRed100, colorSignalRed110, colorSignalRed120, colorSignalRed130, colorSignalRed140, colorSignalRed150, colorSignalRed160, colorSignalRed170, colorSignalRed180, colorSignalRed190, colorSignalRed200, colorSky20, colorSky60, colorSky180, colorMint20, colorMint60, colorMint180, colorCream20, colorCream60, colorCream180, colorTeal20, colorTeal60, colorTeal180, colorLagoon20, colorLagoon60, colorLagoon180, colorLavender20, colorLavender60, colorLavender180, colorPeach20, colorPeach60, colorPeach180, colorPippin20, colorPippin60, colorPippin180, spacing10, spacing20, spacing30, spacing40, spacing50, spacing60, spacing70, spacing80, spacing90, spacingXsmall, spacingSmall, spacingMedium, spacingLarge, spacingXlarge, size10, size15, size20, size30, size40, size50, size60, size70, size75, size80, size90, size100, size110, size120, size130, size140, size150, size00, size05, sizeControlSm, sizeIcon, sizeIconSm, sizeOption, sizeControlMd, sizeControl, backgroundHover, backgroundInverse, layer01Hover, layer01Selected, layer01SelectedHover, layer02Hover, layer02Selected, layer02SelectedHover, layerAccent01Base, layerAccent01Hover, layerAccent01Selected, layerAccent02Base, layerAccent02Hover, layerAccent02Selected, borderColorSecondary, borderColorTertiary, borderColorDisabled, borderWidth, field01Hover, field01Active, field01Disabled, field02Base, field02Hover, field02Active, field02Disabled, skeleton01, skeleton02, iconPrimary, iconSecondary, iconTertiary, iconInverse, iconDisabled, iconSuccess, iconInfo, iconWarning, iconImportant, iconReadOnly, linkEnabled, linkHover, linkPressed, linkVisited, progressBarTrackBackground, progressBarIndicatorBackground, supportBorderSuccess, supportBorderInfo, supportBorderImportant, supportBorderWarning, supportBackgroundSuccess, supportBackgroundSuccessHover, supportBackgroundInfo, supportBackgroundInfoHover, supportBackgroundImportant, supportBackgroundImportantHover, supportBackgroundWarning, supportBackgroundWarningHover, tagSkyBackground, tagSkyBorderColor, tagBlueBackground, tagBlueBorderColor, tagMintBackground, tagMintBorderColor, tagGreenBackground, tagGreenBorderColor, tagCreamBackground, tagCreamBorderColor, tagYellowBackground, tagYellowBorderColor, tagTealBackground, tagTealBorderColor, tagLagoonBackground, tagLagoonBorderColor, tagLagoonblueBackground, tagLagoonblueBorderColor, tagLavenderBackground, tagLavenderBorderColor, tagPurpleBackground, tagPurpleBorderColor, tagPeachBackground, tagPeachBorderColor, tagOrangeBackground, tagOrangeBorderColor, tagPippinBackground, tagPippinBorderColor, tagRedBackground, tagRedBorderColor, textSecondary, textTertiary, textInverse, textDisabled, textWarning, textPlaceholder, textReadOnly, badgeBackground, calendarDateBackgroundHover, calendarDateBackgroundSelected, calendarDateBackgroundStartRange, calendarDateBackgroundInRange, calendarDateBackgroundEndRange, logoPrimary, menuItemBackgroundHover, menuItemBackgroundSelected, menuTextSectionHeader, navigationLinkBackgroundHover, navigationLinkBackgroundSelected, navigationLinkBackgroundSelectedHover, overlayBackground, overlayBlur, cardBackgroundBase, cardShadow, panelShadow, space10, space30, space50, space60, space70, space75, space90, space130, space150, spaceXsmall, spaceSmall, spaceLarge, spaceXlarge, space05, stateFocusInset, stateFocusContrastModeOutline, stateFocusContrastModeOffset, stateInvalid, transitionDurationSlow, transitionDurationNormal, transitionDurationFast, transitionDurationQuick, transitionDurationInstant, transitionTimingEaseOut, transitionTimingEaseIn, transitionTimingEaseInOut, transitionPanelCollapse, transitionPanelExpand, typographyFontFamily, typographyFontSize10, typographyFontSize20, typographyFontSize30, typographyFontSize40, typographyFontSize50, typographyFontSize60, typographyFontSize70, typographyFontSize80, typographyFontSize90, typographyFontSize100, typographyLineHeight10, typographyLineHeight20, typographyLineHeight30, typographyLineHeight40, typographyLineHeight50, typographyLineHeight60, typographyLineHeight70, typographyLineHeight80, typographyLineHeight90, typographyLineHeight100, typographyWeightThin, typographyWeightExtraLight, typographyWeightLight, typographyWeightRegular, typographyWeightMedium, typographyWeightSemiBold, typographyWeightBold, typographyWeightExtraBold, typographyWeightBlack, typographyBody, typographyBodySmall, typographyDescription, typographyDescriptionSmall, zIndexBase, zIndexAbove, zIndexSidebar, zIndexModal, zIndexToast, zIndexSkipToContent */
/**
 * Do not edit directly, this file was auto-generated.
 */var base10="0.125rem";var base15="0.188rem";var base20="0.25rem";var base30="0.375rem";var base40="0.5rem";var base50="0.625rem";var base60="0.75rem";var base70="0.875rem";var base75="0.938rem";var base80="1rem";var base90="1.25rem";var base100="1.5rem";var base110="1.75rem";var base120="2rem";var base130="2.5rem";var base140="2.75rem";var base150="3rem";var base00="0rem";var base05="0.063rem";var windowSizesSm="480px";// Liten skärmstorlek. 480px.
var windowSizesMd="768px";// Mellanstor skärmstorlek. 768px.
var windowSizesLg="1024px";// Stor skärmstorlek. 1024px.
var windowSizesXl="1280px";// Extra stor skärmstorlek. 1280px.
var breakpointsXs="(max-width: calc(480px - 1px))";// Extra liten skärm. Upp till 479px (max-width).
var breakpointsSm="(min-width: 480px)";// Liten skärm och uppåt. Från 480px (min-width).
var breakpointsMd="(min-width: 768px)";// Mellanstor skärm och uppåt. Från 768px (min-width).
var breakpointsLg="(min-width: 1024px)";// Stor skärm och uppåt. Från 1024px (min-width).
var breakpointsXl="(min-width: 1280px)";// Extra stor skärm och uppåt. Från 1280px (min-width).
var buttonBackgroundPrimaryBase="light-dark(#143c50, #2e7ca5)";// Färg på primärknapp
var buttonBackgroundPrimaryHover="light-dark(#25607f, #25607f)";// Hover state på primärknapp
var buttonBackgroundPrimaryActive="light-dark(#2e7ca5, #143c50)";// Active state för primärknapp
var buttonBackgroundSecondaryBase="transparent";// Färg på sekundärknapp
var buttonBackgroundSecondaryHover="light-dark(#0000000d, #ffffff21)";// Hover state på sekundärknapp
var buttonBackgroundSecondaryActive="light-dark(#0000001a, #ffffff26)";// Active state för sekundärknapp
var buttonBackgroundTertiaryHover="light-dark(#0000000d, #ffffff21)";// Hover state för tertiär knapp
var buttonBackgroundTertiaryActive="light-dark(#0000001a, #ffffff26)";// Active state för tertiär knapp
var buttonBackgroundDangerBase="light-dark(#e62323, #e62323)";// Färg på danger knapp
var buttonBackgroundDangerHover="light-dark(#bc1d1d, #bc1d1d)";// Hover state för danger knapp
var buttonBackgroundDangerActive="light-dark(#7d1313, #7d1313)";// Active state för danger knapp
var buttonBackgroundDisabled="light-dark(#0000000d,#ffffff21)";// Disabled state för knappar
var buttonBorderSecondary="light-dark(#143c50, #f2f2f2)";// Kantfärg för sekundärknapp
var buttonIconHover="light-dark(#0000000d, #ffffff21)";// Hover state för ikonknappar
var buttonIconActive="light-dark(#00000033, #ffffff33)";// Active state för ikoner
var colorBlackBase="#000";// Black
var colorBlackHover="#0d0d0d";// Black hover
var colorBlackOpacity5="#0000000d";// Black with 5% opacity
var colorBlackOpacity10="#0000001a";// Black with 10% opacity
var colorWhiteBase="#fff";// White
var colorWhiteHover="#e6e6e6";// White hover
var colorWhiteOpacity13="#ffffff21";// White with 13% opacity
var colorWhiteOpacity15="#ffffff26";// White with 15% opacity
var colorGray10="#f2f2f2";var colorGray20="#e6e6e6";var colorGray30="#d9d9d9";var colorGray40="#ccc";var colorGray50="#bfbfbf";var colorGray60="#b3b3b3";var colorGray70="#a6a6a6";var colorGray80="#999";var colorGray90="#8c8c8c";var colorGray100="#808080";var colorGray110="#737373";var colorGray120="#666";var colorGray130="#5d5d5d";var colorGray140="#525252";var colorGray150="#474747";var colorGray160="#383838";var colorGray170="#333";var colorGray180="#262626";var colorGray190="#212121";var colorGray200="#171717";var colorBlue10="#eaf2f6";var colorBlue20="#d5e5ed";var colorBlue40="#abcbdb";var colorBlue50="#94BCD1";var colorBlue60="#82b0c9";var colorBlue70="#6CA3C0";var colorBlue80="#5897b8";var colorBlue90="#4289ad";var colorBlue100="#2e7ca5";var colorBlue110="#2C7399";var colorBlue120="#29698C";var colorBlue130="#25607f";var colorBlue150="#143c50";var colorPurple80="#b46ab4";var colorPurple110="#954b95";var colorRed100="#b90835";var colorOrange100="oklch(0.66 0.18 45)";var colorSignalBlue10="#eaf2f6";var colorSignalBlue20="#d5e5ed";var colorSignalBlue100="#06c";var colorSignalBlue170="#162b33";var colorSignalBlue180="#112127";var colorSignalGreen20="#d5f2d9";var colorSignalGreen30="#bae5c5";var colorSignalGreen100="#008d3c";var colorSignalGreen150="#194B33";var colorSignalGreen170="#163328";var colorSignalGreen180="#112722";var colorSignalYellow10="#fff8e2";var colorSignalYellow20="#fff1cd";var colorSignalYellow30="#ffeab8";var colorSignalYellow40="#ffe3a3";var colorSignalYellow50="#ffdc8b";var colorSignalYellow60="#ffd47b";var colorSignalYellow70="#fdcd5d";var colorSignalYellow80="#fbc640";var colorSignalYellow90="#fabf1b";var colorSignalYellow100="#fab900";var colorSignalYellow110="#daa105";var colorSignalYellow120="#bd8c1e";var colorSignalYellow130="#a17927";var colorSignalYellow140="#88672a";var colorSignalYellow150="#70562b";var colorSignalYellow160="#5a4629";var colorSignalYellow170="#453826";var colorSignalYellow180="#322a20";var colorSignalYellow190="#201c18";var colorSignalYellow200="#0f0e0e";var colorSignalRed10="#ffefef";var colorSignalRed20="#ffdfdf";var colorSignalRed30="#fcc8c8";var colorSignalRed40="#f9b0b0";var colorSignalRed50="#f69999";var colorSignalRed60="#f38181";var colorSignalRed70="#ef6a6a";var colorSignalRed80="#EC5252";var colorSignalRed90="#e93b3b";var colorSignalRed100="#e62323";var colorSignalRed110="#d12020";var colorSignalRed120="#bc1d1d";var colorSignalRed130="#a71919";var colorSignalRed140="#921616";var colorSignalRed150="#7d1313";var colorSignalRed160="#691010";var colorSignalRed170="#540d0d";var colorSignalRed180="#3f0a0a";var colorSignalRed190="#2a0606";var colorSignalRed200="#150303";var colorSky20="#cde6f3";var colorSky60="#4a95df";var colorSky180="#101037";var colorMint20="#d5f2d9";var colorMint60="#75b47d";var colorMint180="#07270b";var colorCream20="#fff5db";var colorCream60="#ecbe4a";var colorCream180="#2c2719";var colorTeal20="#cdf2f2";var colorTeal60="#43bcbc";var colorTeal180="#0d2c2c";var colorLagoon20="#d2daf9";var colorLagoon60="#7088e0";var colorLagoon180="#0a1332";var colorLavender20="#f6d0f9";var colorLavender60="#b77dbc";var colorLavender180="#391c3b";var colorPeach20="#ffe6d9";var colorPeach60="#e87031";var colorPeach180="#421d0a";var colorPippin20="#ffe0e0";var colorPippin60="#f17575";var colorPippin180="#431919";var spacing10="0.125rem";// @deprecated Use space.10 (--midas-space-10) instead
var spacing20="0.25rem";// @deprecated Use space.xsmall (--midas-space-xsmall) instead
var spacing30="0.5rem";// @deprecated Use space.small (--midas-space-small) instead
var spacing40="0.75rem";// @deprecated Use space.60 (--midas-space-60) instead
var spacing50="1rem";// @deprecated Use space.medium (--midas-space-medium) instead
var spacing60="1.5rem";// @deprecated Use space.large (--midas-space-large) instead
var spacing70="2rem";// @deprecated Use space.xlarge (--midas-space-xlarge) instead
var spacing80="2.5rem";// @deprecated Use space.130 (--midas-space-130) instead
var spacing90="3rem";// @deprecated Use space.150 (--midas-space-150) instead
var spacingXsmall="0.25rem";// @deprecated Use space.xsmall (--midas-space-xsmall) instead
var spacingSmall="0.5rem";// @deprecated Use space.small (--midas-space-small) instead
var spacingMedium="1rem";// @deprecated Use space.medium (--midas-space-medium) instead
var spacingLarge="1.5rem";// @deprecated Use space.large (--midas-space-large) instead
var spacingXlarge="2rem";// @deprecated Use space.xlarge (--midas-space-xlarge) instead
var size10="0.125rem";// @deprecated Use base.10 (--midas-base-10) instead
var size15="0.188rem";// @deprecated Use base.15 (--midas-base-15) instead
var size20="0.25rem";// @deprecated Use base.20 (--midas-base-20) instead
var size30="0.375rem";// @deprecated Use base.30 (--midas-base-30) instead
var size40="0.5rem";// @deprecated Use base.40 (--midas-base-40) instead
var size50="0.625rem";// @deprecated Use base.50 (--midas-base-50) instead
var size60="0.75rem";// @deprecated Use base.60 (--midas-base-60) instead
var size70="0.875rem";// @deprecated Use base.70 (--midas-base-70) instead
var size75="0.938rem";// @deprecated Use base.75 (--midas-base-75) instead
var size80="1rem";// @deprecated Use base.80 (--midas-base-80) instead
var size90="1.25rem";// @deprecated Use base.90 (--midas-base-90) instead
var size100="1.5rem";// @deprecated Use base.100 (--midas-base-100) instead
var size110="1.75rem";// @deprecated Use base.110 (--midas-base-110) instead
var size120="2rem";// @deprecated Use base.120 (--midas-base-120) instead
var size130="2.5rem";// @deprecated Use base.130 (--midas-base-130) instead
var size140="2.75rem";// @deprecated Use base.140 (--midas-base-140) instead
var size150="3rem";// @deprecated Use base.150 (--midas-base-150) instead
var size00="0rem";// @deprecated Use base.00 (--midas-base-00) instead
var size05="0.063rem";// @deprecated Use base.05 (--midas-base-05) instead
var sizeControlSm="2.5rem";// @deprecated Use size.control-md (--midas-size-control-md) instead
var sizeIcon="1.25rem";// Standardstorlek för ikoner. 1.25rem / 20px.
var sizeIconSm="1rem";// Liten ikonstorlek för kompakta kontexter. 1rem / 16px.
var sizeOption="2rem";// Höjd för alternativ i dropdown-listor, t.ex. Select och Combobox. 2rem / 32px.
var sizeControlMd="2.5rem";// Medelstor interaktiv kontrollhöjd. 2.5rem / 40px.
var sizeControl="3rem";// Standardhöjd för interaktiva kontroller, t.ex. TextField och Button. 3rem / 48px.
var backgroundBase="light-dark(#fff, #171717)";// Standardbakgrund för våra applikationer
var backgroundHover="light-dark(#e6e6e6, #212121)";// Hoverfärg för bakgrund
var backgroundInverse="light-dark(#171717, #f2f2f2)";// Bakgrund med inverterade färger
var layer01Base="light-dark(#f2f2f2, #262626)";// Färg för lager som läggs på Background.
var layer01Hover="light-dark(#e6e6e6, #333)";// Hover state för layer01
var layer01Selected="light-dark(#d9d9d9, #383838)";// Selected state för layer01
var layer01SelectedHover="light-dark(#ccc, #474747)";// Hover state för layerSelected01
var layer02Base="light-dark(#fff, #383838)";// Färg för lager som läggs på layer 01
var layer02Hover="light-dark(#e6e6e6, #474747)";// Hover state för layer02
var layer02Selected="light-dark(#d9d9d9, #525252)";// Selected state för layer02
var layer02SelectedHover="light-dark(#ccc, #5d5d5d)";// Hover state för layerSelected02
var layerAccent01Base="light-dark(#d9d9d9, #383838)";// Accentfärg som används tillsammans med layer 01
var layerAccent01Hover="light-dark(#ccc, #474747)";// Hover state för layerAccent01
var layerAccent01Selected="light-dark(#bfbfbf, #525252)";// Selected state för layerAccent01
var layerAccent02Base="light-dark(#d9d9d9, #383838)";// Accentfärg som används tillsammans med layer 02
var layerAccent02Hover="light-dark(#ccc, #474747)";// Hover state för layerAccent02
var layerAccent02Selected="light-dark(#bfbfbf, #525252)";// Selected state för layerAccent02
var brandPrimary="light-dark(#b90835, #b90835)";// Migrationsverkets primära röda färg
var borderColorPrimary="light-dark(#171717, #f2f2f2)";// Kantlinje med hög kontrast
var borderColorSecondary="light-dark(#737373, #8c8c8c)";// Kantlinje med medelhög kontrast
var borderColorSubtle="light-dark(#bfbfbf, #525252)";// Kantlinje med låg kontrast
var borderColorTertiary="light-dark(#143c50, #2e7ca5)";// Primärblå kantlinje
var borderColorDisabled="light-dark(#bfbfbf, #525252)";// Kantlinje för disabled state
var borderWidth="1px";var field01Base="light-dark(#f2f2f2, #262626)";// färg för fält som ligger på Background
var field01Hover="light-dark(#e6e6e6, #333)";// Hover state för field01
var field01Active="light-dark(#d9d9d9, #383838)";// Active state för field01
var field01Disabled="light-dark(#f2f2f2, #262626)";// Disabled state för fält som ligger på Background
var field02Base="light-dark(#fff, #383838)";// Färg för fält som ligger på layer 01
var field02Hover="light-dark(#e6e6e6, #474747)";// Hover state för field02
var field02Active="light-dark(#d9d9d9, #525252)";// Active state för field02
var field02Disabled="light-dark(#fff, #383838)";// Disabled state för fält som ligger på layer 01
var skeleton01="light-dark(#f2f2f2, #262626)";// Färg som används när Skeleton ligger på Background
var skeleton02="light-dark(#d9d9d9, #383838)";// Färg som används när Skeleton ligger på Layer 01
var iconPrimary="light-dark(#171717, #f2f2f2)";// Primär ikonfärg
var iconSecondary="light-dark(#525252, #a6a6a6)";// Sekundär ikonfärg
var iconTertiary="light-dark(#143c50, #f2f2f2)";// Tertiär ikonfärg, används för ikoner i tertiary-knappar
var iconInverse="light-dark(#fff, #171717)";// Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge
var iconOnColor="light-dark(#fff, #fff)";// Ikonfärg på färgade ytor som inte är lager
var iconDisabled="light-dark(#bfbfbf, #525252)";// Färg för ikoner som är disabled
var iconSuccess="light-dark(#008d3c, #008d3c)";// Ikonfärg för success state
var iconInfo="light-dark(#06c, #06c)";// Ikonfärg för informationsikoner
var iconWarning="light-dark(#e62323, #e62323)";// Ikonfärg för varningsikoner och invalid state
var iconImportant="oklch(0.66 0.18 45)";// Ikonfärg för viktig information
var iconReadOnly="light-dark(#bfbfbf, #383838)";// Färg för ikoner som är read-only
var linkEnabled="light-dark(#29698C, #6CA3C0)";// Primär länkfärg
var linkHover="light-dark(#143c50, #94BCD1)";// Hover state för länkar
var linkPressed="light-dark(#171717, #abcbdb)";// Active/pressed state för länkar
var linkVisited="light-dark(#954b95, #b46ab4)";// Färg för besökta länkar
var progressBarTrackBackground="light-dark(#d9d9d9, #383838)";// Bakgrundsfärg för progress bar track
var progressBarIndicatorBackground="#008d3c";// Bakgrundsfärg för progress bar indicator
var supportBorderSuccess="light-dark(#008d3c, #008d3c)";// Kantlinje för success-notifikationer
var supportBorderInfo="light-dark(#06c, #06c)";// Kantlinje för notifikationer med information
var supportBorderImportant="oklch(0.66 0.18 45)";// Kantlinje för notifikationer med viktig information
var supportBorderWarning="light-dark(#e62323, #e62323)";// Kantlinje för notifikationer med varningar
var supportBackgroundSuccess="light-dark(#d5f2d9, #112722)";// Bakgrund för success-notifikationer
var supportBackgroundSuccessHover="light-dark(#bae5c5, #163328)";// Hoverbakgrund för success-notifikationer
var supportBackgroundInfo="light-dark(#eaf2f6, #112127)";// Bakgrund för notifikationer med information
var supportBackgroundInfoHover="light-dark(#d5e5ed, #162b33)";// Hoverbakgrund för notifikationer med information
var supportBackgroundImportant="light-dark(#fff8e2, #322a20)";// Bakgrund för notifikationer med viktig information
var supportBackgroundImportantHover="light-dark(#fff1cd, #453826)";// Hoverbakgrund för notifikationer med viktig information
var supportBackgroundWarning="light-dark(#ffdfdf, #3f0a0a)";// Bakgrund för notifikationer med varningar
var supportBackgroundWarningHover="light-dark(#fcc8c8, #540d0d)";// Hoverbakgrund för notifikationer med varningar
var tagSkyBackground="light-dark(#cde6f3, #101037)";// Tag bakgrund blå
var tagSkyBorderColor="#4a95df";// Tag kantlinje blå
var tagBlueBackground="light-dark(#cde6f3, #101037)";// @deprecated Använd tag.sky istället.
var tagBlueBorderColor="#4a95df";// @deprecated Använd tag.sky istället.
var tagMintBackground="light-dark(#d5f2d9, #07270b)";// Tag bakgrund grön
var tagMintBorderColor="#75b47d";// Tag kantlinje grön
var tagGreenBackground="light-dark(#d5f2d9, #07270b)";// @deprecated Använd tag.mint istället.
var tagGreenBorderColor="#75b47d";// @deprecated Använd tag.mint istället.
var tagCreamBackground="light-dark(#fff5db, #2c2719)";// Tag bakgrund gul
var tagCreamBorderColor="#ecbe4a";// Tag kantlinje gul
var tagYellowBackground="light-dark(#fff5db, #2c2719)";// @deprecated Använd tag.cream istället.
var tagYellowBorderColor="#ecbe4a";// @deprecated Använd tag.cream istället.
var tagTealBackground="light-dark(#cdf2f2, #0d2c2c)";// Tag bakgrund blågrön
var tagTealBorderColor="#43bcbc";// Tag kantlinje blågrön
var tagLagoonBackground="light-dark(#d2daf9, #0a1332)";// Tag bakgrund lagunblå
var tagLagoonBorderColor="#7088e0";// Tag kantlinje lagunblå
var tagLagoonblueBackground="light-dark(#d2daf9, #0a1332)";// @deprecated Använd tag.lagoon istället.
var tagLagoonblueBorderColor="#7088e0";// @deprecated Använd tag.lagoon istället.
var tagLavenderBackground="light-dark(#f6d0f9, #391c3b)";// Tag bakgrund lila
var tagLavenderBorderColor="#b77dbc";// Tag kantlinje lila
var tagPurpleBackground="light-dark(#f6d0f9, #391c3b)";// @deprecated Använd tag.lavender istället.
var tagPurpleBorderColor="#b77dbc";// @deprecated Använd tag.lavender istället.
var tagPeachBackground="light-dark(#ffe6d9, #421d0a)";// Tag bakgrund orange
var tagPeachBorderColor="#e87031";// Tag kantlinje orange
var tagOrangeBackground="light-dark(#ffe6d9, #421d0a)";// @deprecated Använd tag.peach istället.
var tagOrangeBorderColor="#e87031";// @deprecated Använd tag.peach istället.
var tagPippinBackground="light-dark(#ffe0e0, #431919)";// Tag bakgrund röd
var tagPippinBorderColor="#f17575";// Tag kantlinje röd
var tagRedBackground="light-dark(#ffe0e0, #431919)";// @deprecated Använd tag.pippin istället.
var tagRedBorderColor="#f17575";// @deprecated Använd tag.pippin istället.
var textPrimary="light-dark(#171717, #f2f2f2)";// Primär textfärg.
var textSecondary="light-dark(#525252, #a6a6a6)";// Sekundär textfärg
var textTertiary="light-dark(#143c50, #f2f2f2)";// Textfärg på tertiär knapp
var textOnColor="light-dark(#fff, #fff)";// Textfärg på färgade bakgrunder som inte är lager
var textInverse="light-dark(#f2f2f2, #171717)";// Inverterad textfärg
var textDisabled="light-dark(#bfbfbf, #525252)";// Färg för disabled text
var textWarning="light-dark(#e62323, #EC5252)";// Färg för felmeddelanden
var textPlaceholder="light-dark(#a6a6a6, #525252)";// Färg för platshållare
var textReadOnly="light-dark(#737373, #999)";// Färg för read-only state
var badgeBackground="light-dark(#e62323, #e62323)";// Bakgrundsfärg för badge
var calendarDateBackgroundHover="light-dark(#0000001a, #ffffff1a)";// Hover-bakgrund för datumcell
var calendarDateBackgroundSelected="light-dark(#143c50, #5897b8)";// Bakgrund för ett valt datum
var calendarDateBackgroundStartRange="light-dark(#143c50, #5897b8)";// Bakgrund för det första datumet i ett intervallval
var calendarDateBackgroundInRange="light-dark(#d5e5ed, #143c50)";// Bakgrund för datum som ligger inom ett valt intervall
var calendarDateBackgroundEndRange="light-dark(#143c50, #5897b8)";// Bakgrund för det sista datumet i ett intervallval
var logoPrimary="light-dark(#b90835, #fff)";// Färg på logotypen
var menuItemBackgroundHover="light-dark(#e6e6e6, #212121)";// Bakgrundsfärg för menu vid hover
var menuItemBackgroundSelected="light-dark(#f2f2f2, #262626)";// Bakgrundsfärg för aktiv menu
var menuTextSectionHeader="light-dark(#525252, #a6a6a6)";// Textfärg för sektionsrubriker i navigationsmenyn
var navigationLinkBackgroundHover="light-dark(#e6e6e6, #212121)";// Bakgrundsfärg vid hover
var navigationLinkBackgroundSelected="light-dark(#f2f2f2, #262626)";// Bakgrundsfärg för aktiv länk
var navigationLinkBackgroundSelectedHover="light-dark(#e6e6e6, #212121)";// Bakgrundsfärg vid hover på aktiv länk
var overlayBackground="rgba(0 0 0 / 30%)";// Bakrundsfärg för overlays
var overlayBlur="blur(2px)";// Blur för overlays
var cardBackgroundBase="light-dark(#fff, #262626)";// Bakrundsfärg för Card
var cardShadow="0 3px 5px 0 rgba(0, 0, 0, 0.30)";// Skugga för Card
var panelShadow="-2px 0px 12px -2px rgba(0, 0, 0, 0.10)";// Skugga för Panel
var space10="0.125rem";// 0.125rem / 2px.
var space30="0.375rem";// 0.375rem / 6px.
var space50="0.625rem";// 0.625rem / 10px.
var space60="0.75rem";// 0.75rem / 12px.
var space70="0.875rem";// 0.875rem / 14px.
var space75="0.938rem";// 0.938rem / 15px.
var space90="1.25rem";// 1.25rem / 20px.
var space130="2.5rem";// 2.5rem / 40px.
var space150="3rem";// 3rem / 48px.
var spaceXsmall="0.25rem";// Extra litet avstånd. 0.25rem / 4px.
var spaceSmall="0.5rem";// Litet avstånd. 0.5rem / 8px.
var spaceMedium="1rem";// Medelstort avstånd. 1rem / 16px.
var spaceLarge="1.5rem";// Stort avstånd. 1.5rem / 24px.
var spaceXlarge="2rem";// Extra stort avstånd. 2rem / 32px.
var space05="0.063rem";// 0.063rem / 1px.
var stateFocus="0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)";// Focus style used when the component is focused (box-shadow).
var stateFocusInset="inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)";// Inset variant of the focus ring (box-shadow inset).
var stateFocusContrastModeOutline="2px";// Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.
var stateFocusContrastModeOffset="2px";// Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active.
var stateInvalid="inset 0 0 0 2px light-dark(#e62323, #e62323)";// Invalid state style for form fields (box-shadow).
var transitionDurationSlow="400ms";// Långsam övergång. 400ms. Används för större layoutförändringar som sidopaneler och expanderbara sektioner.
var transitionDurationNormal="300ms";// Normal övergångshastighet. 300ms. Standardval för de flesta animationer.
var transitionDurationFast="250ms";// Snabb övergång. 250ms. Används för kortlivade övergångar som tooltips och dropdowns — inte hover.
var transitionDurationQuick="150ms";// Kort mikroanimation. 150ms. Används för snabba overlay-rörelser som modaler och select-öppningar som är perceptibelt animerade men ändå snabba.
var transitionDurationInstant="100ms";// Omedelbar återkoppling. 100ms. Används för direkta tillståndsförändringar som hover-bakgrunder och färgövergångar — allt längre upplevs som tröghet.
var transitionTimingEaseOut=(/* unused pure expression or super */ null && ([0,0,0.58,1]));// Decelererar mot slutet. Används för element som glider in i vyn.
var transitionTimingEaseIn=(/* unused pure expression or super */ null && ([0.42,0,1,1]));// Accelererar mot slutet. Används för element som lämnar vyn.
var transitionTimingEaseInOut=(/* unused pure expression or super */ null && ([0.42,0,0.58,1]));// Accelererar sedan decelererar symmetriskt. Används för element som rör sig mellan två positioner på skärmen.
var transitionPanelCollapse=(/* unused pure expression or super */ null && ({delay:"0ms",duration:"300ms",timingFunction:[0,0,0.58,1]}));// Komprimerar en panel med easeOut-timing. Används i Accordion och expanderbara ytor.
var transitionPanelExpand=(/* unused pure expression or super */ null && ({delay:"0ms",duration:"300ms",timingFunction:[0.42,0,1,1]}));// Expanderar en panel med easeIn-timing. Används i Accordion och expanderbara ytor.
var typographyFontFamily="Inter, sans-serif";// Primär typsnittsfamilj för hela design systemet.
var typographyFontSize10="0.75rem";// 0.75rem / 12px.
var typographyFontSize20="0.875rem";// 0.875rem / 14px.
var typographyFontSize30="1rem";// 1rem / 16px.
var typographyFontSize40="1.125rem";// 1.125rem / 18px.
var typographyFontSize50="1.25rem";// 1.25rem / 20px.
var typographyFontSize60="1.5rem";// 1.5rem / 24px.
var typographyFontSize70="1.625rem";// 1.625rem / 26px.
var typographyFontSize80="2rem";// 2rem / 32px.
var typographyFontSize90="2.25rem";// 2.25rem / 36px.
var typographyFontSize100="2.625rem";// 2.625rem / 42px.
var typographyLineHeight10="1rem";// 1rem / 16px.
var typographyLineHeight20="1.125rem";// 1.125rem / 18px.
var typographyLineHeight30="1.25rem";// 1.25rem / 20px.
var typographyLineHeight40="1.375rem";// 1.375rem / 22px.
var typographyLineHeight50="1.5rem";// 1.5rem / 24px.
var typographyLineHeight60="1.75rem";// 1.75rem / 28px.
var typographyLineHeight70="2rem";// 2rem / 32px.
var typographyLineHeight80="2.25rem";// 2.25rem / 36px.
var typographyLineHeight90="2.5rem";// 2.5rem / 40px.
var typographyLineHeight100="3rem";// 3rem / 48px.
var typographyWeightThin=100;// 100 – Tunnast möjliga vikt.
var typographyWeightExtraLight=200;// 200 – Extra tunn.
var typographyWeightLight=300;// 300 – Tunn.
var typographyWeightRegular=400;// 400 – Standardvikt för brödtext.
var typographyWeightMedium=500;// 500 – Mellantung, för betoning utan fet stil.
var typographyWeightSemiBold=600;// 600 – Halvfet, för underrubriker och etiketter.
var typographyWeightBold=700;// 700 – Fet, för rubriker och framhävning.
var typographyWeightExtraBold=800;// 800 – Extra fet.
var typographyWeightBlack=900;// 900 – Tyngsta möjliga vikt.
var typographyBody=(/* unused pure expression or super */ null && ({fontFamily:"Inter, sans-serif",fontSize:"1rem",fontWeight:400,lineHeight:"1.25rem"}));// Standardtypografi för brödtext. Används i löptext, listor och stycken.
var typographyBodySmall=(/* unused pure expression or super */ null && ({fontFamily:"Inter, sans-serif",fontSize:"0.875rem",fontWeight:400,lineHeight:"1.125rem"}));// Liten brödtextstil. Används för kompakt text i t.ex. tabeller och listor.
var typographyDescription=(/* unused pure expression or super */ null && ({fontFamily:"Inter, sans-serif",fontSize:"0.875rem",fontWeight:400,lineHeight:"1.125rem"}));// Beskrivningstext, t.ex. för hjälptexter och ledtexter i formulär.
var typographyDescriptionSmall=(/* unused pure expression or super */ null && ({fontFamily:"Inter, sans-serif",fontSize:"0.75rem",fontWeight:400,lineHeight:"1rem"}));// Liten beskrivningstext, t.ex. för felmeddelanden och teckenräknare i formulär.
var zIndexBase=1;// Basnivå för normala element. z-index: 1.
var zIndexAbove=10;// Placerar element ovanför normala element, t.ex. tooltips i flödet. z-index: 10.
var zIndexSidebar=500;// Z-index för sidopaneler och navigationsdrawers. z-index: 500.
var zIndexModal=1000;// Z-index för modaler och dialoger. z-index: 1000.
var zIndexToast=1100;// Z-index för toast-notifikationer, ovanför modaler. z-index: 1100.
var zIndexSkipToContent=1200;// Z-index för 'hoppa till innehåll'-länken för tillgänglighet, alltid överst. z-index: 1200.

/***/ },

/***/ 38739
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container_uCKZ","removeMargins":"removeMargins_rQ9U","contained":"contained_R9lB","flex":"flex_LQ20","fluid":"fluid_Y1tE","col":"col_tmG6","col-1":"col-1_OVvW","col-2":"col-2_XfVI","col-3":"col-3_KxqE","col-quarter":"col-quarter_eUut","col-4":"col-4_Ovxr","col-third":"col-third_FUaF","col-5":"col-5_uIyd","col-6":"col-6_i8WR","col-half":"col-half_GzSn","col-7":"col-7_devX","col-8":"col-8_tlAZ","col-9":"col-9_Nbjm","col-10":"col-10_rwyP","col-11":"col-11_ShOw","col-12":"col-12_eQeJ","col-full":"col-full_K_XT","col-auto":"col-auto_nMhH","col-grow":"col-grow_TBON","col-xs-1":"col-xs-1_Bg_O","col-xs-2":"col-xs-2_UhmL","col-xs-3":"col-xs-3_mEvh","col-xs-quarter":"col-xs-quarter_mtoI","col-xs-4":"col-xs-4_Uv5i","col-xs-third":"col-xs-third_AHrM","col-xs-5":"col-xs-5_Gdnm","col-xs-6":"col-xs-6_z366","col-xs-half":"col-xs-half_vH6m","col-xs-7":"col-xs-7_HNwO","col-xs-8":"col-xs-8_Vwih","col-xs-9":"col-xs-9_vfTc","col-xs-10":"col-xs-10_wJWt","col-xs-11":"col-xs-11_KTEA","col-xs-12":"col-xs-12_TaE_","col-xs-full":"col-xs-full_enWi","col-xs-auto":"col-xs-auto_G2jj","col-xs-grow":"col-xs-grow_kY1W","col-sm-1":"col-sm-1_YvIs","col-sm-2":"col-sm-2_NSCq","col-sm-3":"col-sm-3_cJ0H","col-sm-quarter":"col-sm-quarter_WWBJ","col-sm-4":"col-sm-4_dtZx","col-sm-third":"col-sm-third_g3dG","col-sm-5":"col-sm-5_C87q","col-sm-6":"col-sm-6_SkMd","col-sm-half":"col-sm-half_QX4f","col-sm-7":"col-sm-7_wa6s","col-sm-8":"col-sm-8_zH5I","col-sm-9":"col-sm-9_ym4Z","col-sm-10":"col-sm-10_jE4j","col-sm-11":"col-sm-11_Va2g","col-sm-12":"col-sm-12_BgjD","col-sm-full":"col-sm-full_Nb6O","col-sm-auto":"col-sm-auto_Qj4m","col-sm-grow":"col-sm-grow_mAH5","col-md-1":"col-md-1_Zeqd","col-md-2":"col-md-2_DR6K","col-md-3":"col-md-3_OZK7","col-md-quarter":"col-md-quarter_AmxM","col-md-4":"col-md-4_NxEu","col-md-third":"col-md-third_J4Ja","col-md-5":"col-md-5_cBkY","col-md-6":"col-md-6_it5t","col-md-half":"col-md-half_aEv_","col-md-7":"col-md-7__sAT","col-md-8":"col-md-8_WfW7","col-md-9":"col-md-9_orzQ","col-md-10":"col-md-10_wh5t","col-md-11":"col-md-11_Wsgq","col-md-12":"col-md-12_gZQg","col-md-full":"col-md-full_Ow4Z","col-md-auto":"col-md-auto_e67j","col-md-grow":"col-md-grow_quHq","col-lg-1":"col-lg-1_e1au","col-lg-2":"col-lg-2_fUsj","col-lg-3":"col-lg-3_EhhM","col-lg-quarter":"col-lg-quarter_SI9I","col-lg-4":"col-lg-4_VuKz","col-lg-third":"col-lg-third_Lf2A","col-lg-5":"col-lg-5_TF5r","col-lg-6":"col-lg-6_E93v","col-lg-half":"col-lg-half_ZdoE","col-lg-7":"col-lg-7_L5CO","col-lg-8":"col-lg-8_ZBHN","col-lg-9":"col-lg-9_TbUu","col-lg-10":"col-lg-10_Tsqu","col-lg-11":"col-lg-11_Eg8x","col-lg-12":"col-lg-12_eNvi","col-lg-full":"col-lg-full_SaRE","col-lg-auto":"col-lg-auto_fNRO","col-lg-grow":"col-lg-grow_XTrt","col-xl-1":"col-xl-1_BRna","col-xl-2":"col-xl-2_eGSK","col-xl-3":"col-xl-3_RrW2","col-xl-quarter":"col-xl-quarter_V_Yw","col-xl-4":"col-xl-4_R4AZ","col-xl-third":"col-xl-third_W3hT","col-xl-5":"col-xl-5_k7Gx","col-xl-6":"col-xl-6_xZyb","col-xl-half":"col-xl-half_V9xE","col-xl-7":"col-xl-7_lJfg","col-xl-8":"col-xl-8_zErQ","col-xl-9":"col-xl-9_oYwQ","col-xl-10":"col-xl-10_cLTa","col-xl-11":"col-xl-11_xqWK","col-xl-12":"col-xl-12_Vrsf","col-xl-full":"col-xl-full_vVSm","col-xl-auto":"col-xl-auto_YBap","col-xl-grow":"col-xl-grow_YMBn","offset-1":"offset-1_ZQkJ","offset-2":"offset-2_Reek","offset-3":"offset-3_SDkl","offset-quarter":"offset-quarter_ho5e","offset-4":"offset-4_L0XB","offset-third":"offset-third_dE8e","offset-5":"offset-5_Mz95","offset-6":"offset-6_Zp68","offset-half":"offset-half_nGtc","offset-7":"offset-7_ZApX","offset-8":"offset-8_UZTZ","offset-9":"offset-9_FiKS","offset-10":"offset-10_hN9R","offset-11":"offset-11_cqgv","offset-auto":"offset-auto_ZBrI","offset-xs-1":"offset-xs-1__ZrT","offset-xs-2":"offset-xs-2_WySR","offset-xs-3":"offset-xs-3_u9Tb","offset-xs-quarter":"offset-xs-quarter_Pd1o","offset-xs-4":"offset-xs-4_Bibg","offset-xs-third":"offset-xs-third_CeeW","offset-xs-5":"offset-xs-5_OgED","offset-xs-6":"offset-xs-6_ihSu","offset-xs-half":"offset-xs-half_Vrdz","offset-xs-7":"offset-xs-7_TtZQ","offset-xs-8":"offset-xs-8_Ftc2","offset-xs-9":"offset-xs-9_HptZ","offset-xs-10":"offset-xs-10_umjb","offset-xs-11":"offset-xs-11_Suix","offset-xs-auto":"offset-xs-auto_fxe8","offset-sm-1":"offset-sm-1_knSM","offset-sm-2":"offset-sm-2_zWxo","offset-sm-3":"offset-sm-3_oqp6","offset-sm-quarter":"offset-sm-quarter_Nav1","offset-sm-4":"offset-sm-4_EvUX","offset-sm-third":"offset-sm-third_tGgh","offset-sm-5":"offset-sm-5_raNi","offset-sm-6":"offset-sm-6_KTA8","offset-sm-half":"offset-sm-half_ab81","offset-sm-7":"offset-sm-7_duQl","offset-sm-8":"offset-sm-8_uRxp","offset-sm-9":"offset-sm-9_AqYl","offset-sm-10":"offset-sm-10_Wt6J","offset-sm-11":"offset-sm-11_yAYq","offset-sm-auto":"offset-sm-auto_FAp6","offset-md-1":"offset-md-1_OpgB","offset-md-2":"offset-md-2_U24n","offset-md-3":"offset-md-3_YxnQ","offset-md-quarter":"offset-md-quarter_y53T","offset-md-4":"offset-md-4_ZaOC","offset-md-third":"offset-md-third_HZWP","offset-md-5":"offset-md-5_KVFL","offset-md-6":"offset-md-6_bZvL","offset-md-half":"offset-md-half_yilA","offset-md-7":"offset-md-7_fs04","offset-md-8":"offset-md-8_QmYF","offset-md-9":"offset-md-9_QoVc","offset-md-10":"offset-md-10_OrE0","offset-md-11":"offset-md-11_reKz","offset-md-auto":"offset-md-auto_ETdh","offset-lg-1":"offset-lg-1_zi3j","offset-lg-2":"offset-lg-2_YgjU","offset-lg-3":"offset-lg-3_CHdw","offset-lg-quarter":"offset-lg-quarter_Chor","offset-lg-4":"offset-lg-4_NOCF","offset-lg-third":"offset-lg-third_LTbL","offset-lg-5":"offset-lg-5_dGzM","offset-lg-6":"offset-lg-6_kXXi","offset-lg-half":"offset-lg-half_vFHN","offset-lg-7":"offset-lg-7_jIth","offset-lg-8":"offset-lg-8_T0Jx","offset-lg-9":"offset-lg-9_mYmL","offset-lg-10":"offset-lg-10_clJ6","offset-lg-11":"offset-lg-11_zFW2","offset-lg-auto":"offset-lg-auto_W3q4","offset-xl-1":"offset-xl-1_pRWH","offset-xl-2":"offset-xl-2_FX3q","offset-xl-3":"offset-xl-3_P8xx","offset-xl-quarter":"offset-xl-quarter_RLTy","offset-xl-4":"offset-xl-4_n7Vy","offset-xl-third":"offset-xl-third_w0fc","offset-xl-5":"offset-xl-5_vC_8","offset-xl-6":"offset-xl-6_BvQ2","offset-xl-half":"offset-xl-half_HQ16","offset-xl-7":"offset-xl-7_m1bv","offset-xl-8":"offset-xl-8_FJ1u","offset-xl-9":"offset-xl-9_oAbC","offset-xl-10":"offset-xl-10_wwaH","offset-xl-11":"offset-xl-11_HpDF","offset-xl-auto":"offset-xl-auto_Dv5P"});
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);