"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[7470],{

/***/ 73873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_multi_select_mdx_725_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-multi-select-mdx-725.json
const site_docs_components_multi_select_mdx_725_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/multi-select","title":"MultiSelect","description":"<ComponentHeader","source":"@site/docs/components/multi-select.mdx","sourceDirName":"components","slug":"/components/multi-select","permalink":"/pr-preview/pr-187/components/multi-select","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MultiSelect","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(11470);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(19365);
// EXTERNAL MODULE: ./packages/multi-select/src/index.ts + 5 modules
var src = __webpack_require__(21464);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 1 modules
var propsTable = __webpack_require__(4928);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(29511);
;// ./apps/docs/docs/components/multi-select.mdx


const frontMatter = {
	title: 'MultiSelect',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};









const toc = [{
  "value": "Installation och användning",
  "id": "installation-och-användning",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "Val av komponent",
  "id": "val-av-komponent",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    mermaid: "mermaid",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'MultiSelect',
      friendlyName: 'Flerval, multiväljare, dropdown',
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MultiSelect är en typ av inmatningsfält som används för att välja ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ett eller flera"
      }), " alternativ från en längre lista. Om det är endast är ett fåtal alternativ bör ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pr-preview/pr-187/components/checkbox",
        children: "Checkbox"
      }), " användas istället."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation-och-användning",
      children: "Installation och användning"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "npm2yarn",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "npm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/select\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/select\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/select\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { MultiSelect } from '@midas-ds/multi-select'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        MultiSelect: src/* MultiSelect */.K
      },
      children: `<MultiSelect
      label="Vad är din favoritfrukt?"
      items={fruits.map(fruit => {return {id: fruit.value, name: fruit.name}})}
/>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "val-av-komponent",
      children: "Val av komponent"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD;\n  A[Hur många val ska presenteras för användaren?]:::primary\n  A ---> B[1]\n  A ---> C[2 - 4]\n  A ---> D[5 - 10]:::primary\n  A ---> E[11 +]\n  B ---> F[Använd Checkbox]\n  C ---> G[Hur många val kan göras?]\n  G --->|Flera| F\n  G --->|Ett| H[Använd Radio]\n  D ---> I[Hur många val kan göras?]:::primary\n  I --->|Flera| J[Använd MultiSelect]:::primary\n  I --->|Ett| K[Använd Select]\n  E ---> L[Hur många val kan göras?]\n  L -.Flera.-> M[Använd ComboBox multiple]\n  L --->|Ett| N[Använd ComboBox]"
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

/***/ 13225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ComponentHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86025);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2543);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _midas_ds_link_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80269);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9245);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92457);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42350);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
var ComponentHeader=function ComponentHeader(_ref){var name=_ref.name,friendlyName=_ref.friendlyName,overrideHeadlessLink=_ref.overrideHeadlessLink,overrideHeadlessLinkTitle=_ref.overrideHeadlessLinkTitle;var storybookLink= false?0:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)("/storybook/?path=/docs/components-"+name.toLowerCase()+"--docs");return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section",{style:{marginBottom:32,marginTop:-20},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .s,{fluid:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__/* .FlexItem */ .Z,{style:{alignSelf:'center'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__/* .FlexItem */ .Z,{col:"auto",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_link_button__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:"https://github.com/migrationsverket/midas/tree/main/packages/"+(0,lodash__WEBPACK_IMPORTED_MODULE_3__.kebabCase)(name)+"/CHANGELOG.md",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,iconPlacement:"left",children:"Versionslogg"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__/* .FlexItem */ .Z,{col:"auto",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_link_button__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:storybookLink,variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,iconPlacement:"left",children:"Storybook"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__/* .FlexItem */ .Z,{col:"auto",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_link_button__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,iconPlacement:"left",children:overrideHeadlessLinkTitle?overrideHeadlessLinkTitle:'React Aria'})})]})});};

/***/ }),

/***/ 4928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ PropTable)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useGlobalData.js
var useGlobalData = __webpack_require__(66588);
// EXTERNAL MODULE: ./packages/accordion/src/index.ts + 22 modules
var src = __webpack_require__(17986);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./apps/docs/src/css/propstable.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const propstable_module = ({"table":"table_p75e","thead":"thead_NOJG","tbody":"tbody_wu48","item":"item_chxT"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/propsTable.tsx
var PropTable=function PropTable(_ref){var _ComponentsDocs$find;var name=_ref.name,_ref$defaultOpen=_ref.defaultOpen,defaultOpen=_ref$defaultOpen===void 0?true:_ref$defaultOpen;var globalData=(0,useGlobalData/* default */.Ay)();var ComponentsDocs=globalData['docusaurus-plugin-react-docgen-typescript']["default"];var props=(_ComponentsDocs$find=ComponentsDocs.find(function(componentDoc){return componentDoc.displayName===name;}))==null?void 0:_ComponentsDocs$find.props;if(!props){return null;}var _Object$entries$reduc=Object.entries(props).reduce(function(acc,_ref2){var key=_ref2[0],value=_ref2[1];if(key.startsWith('on')){acc.events[key]=value;}else if(key.startsWith('aria-')){acc.accessibility[key]=value;}else{acc.rest[key]=value;}return acc;},{events:{},accessibility:{},rest:{}}),events=_Object$entries$reduc.events,accessibility=_Object$entries$reduc.accessibility,rest=_Object$entries$reduc.rest;var Table=function Table(_ref3){var propGroup=_ref3.propGroup;return/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{className:propstable_module.table,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{className:propstable_module.thead,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Namn"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Typ"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Standard"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Beskrivning"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{className:propstable_module.tbody,children:Object.keys(propGroup).map(function(key){var _props$key$type;return/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("td",{style:{verticalAlign:'top'},children:[key," ",props[key].required&&' *']}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{verticalAlign:'top',maxWidth:'250px'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("code",{children:(_props$key$type=props[key].type)==null?void 0:_props$key$type.name})}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{verticalAlign:'top',maxWidth:'50px'},children:props[key].defaultValue?/*#__PURE__*/(0,jsx_runtime.jsx)("code",{children:props[key].defaultValue.value}):'-'}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{verticalAlign:'top'},children:props[key].description})]},key);})})]});};return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* Accordion */.nD,{headingTag:"h3",type:"multiple",defaultValue:defaultOpen?['props']:[],children:[Object.getOwnPropertyNames(rest).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* AccordionItem */.As,{value:"props",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionTrigger */.$m,{children:"Props"}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionContent */.ub,{className:propstable_module.item,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Table,{propGroup:rest})})]}),Object.getOwnPropertyNames(events).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* AccordionItem */.As,{value:"events",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionTrigger */.$m,{children:"Events"}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionContent */.ub,{className:propstable_module.item,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Table,{propGroup:events})})]}),Object.getOwnPropertyNames(accessibility).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* AccordionItem */.As,{value:"accessibility",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionTrigger */.$m,{children:"Tillg\xE4nglighet"}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionContent */.ub,{className:propstable_module.item,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Table,{propGroup:accessibility})})]})]})});};

/***/ }),

/***/ 61813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* reexport */ Checkbox),
  $: () => (/* reexport */ CheckboxGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Checkbox.mjs + 7 modules
var dist_Checkbox = __webpack_require__(92466);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Group.mjs
var Group = __webpack_require__(63899);
;// ./packages/checkbox/src/lib/Checkbox.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Checkbox_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","black":"#000000","primaryBackground":"#143c50","blue80":"#5897b8","blue130":"#25607f","signalRed10":"#ffdfdf","signalRed100":"#e62323","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","signalRed130":"#b31b1b","white":"#ffffff","gray10":"#f2f2f2","gray40":"#cccccc","gray100":"#808080","gray50":"#bfbfbf","gray20":"#e6e6e6","regularWeight":"400","mediumWeight":"500","smBreakpoint":"(max-width: 767px)","borderSecondary":"#b3b3b3","wrap":"wrap_gmzk","checkboxInner":"checkboxInner_QnDn","checkbox":"checkbox_Uv4H","checkboxGroup":"checkboxGroup_uby9"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/checkbox/src/lib/Checkbox.tsx
'use client';var _excluded=["children"];var Checkbox=function Checkbox(_ref){var _children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Checkbox/* Checkbox */.Sc,Object.assign({className:(0,clsx/* default */.A)(Checkbox_module.checkbox,props.className)},props,{children:function children(_ref2){var isIndeterminate=_ref2.isIndeterminate;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Checkbox_module.checkboxInner,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:16,height:16,viewBox:"0 0 18 18","aria-hidden":"true",children:isIndeterminate?/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:4,y:8,width:10,height:2}):/*#__PURE__*/(0,jsx_runtime.jsx)("polyline",{points:"3,9 7,13 15,4"})})}),_children]});}}));};
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
;// ./packages/checkbox/src/lib/CheckboxGroup.tsx
'use client';var CheckboxGroup_excluded=["label","description","errorMessage","showSelectAll","children"];var CheckboxGroup=function CheckboxGroup(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,showSelectAll=_ref.showSelectAll,children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,CheckboxGroup_excluded);var _React$useState=react.useState(),isAllSelected=_React$useState[0],setIsAllSelected=_React$useState[1];var ToogleAll=function ToogleAll(){// Get the current state of the checkbox group
var state=react.useContext(dist_Checkbox/* CheckboxGroupStateContext */.pf);// Retrieve all childern
var childValues=react.Children.toArray(children).filter(react.isValidElement).map(function(child){return child.props.value;});// Toogle all values
var toggleAll=function toggleAll(){if(isAllSelected!=='all'){setIsAllSelected('all');return state==null?void 0:state.setValue(['toggleAll'].concat(childValues));}setIsAllSelected('none');return state==null?void 0:state.setValue([]);};//listen and change the select all accordingly
react.useEffect(function(){var _state$value,_state$value2;var amountOfChildren=childValues.length;var totalAmount=childValues.length+1;var currentAmount=(state==null||(_state$value=state.value)==null?void 0:_state$value.length)||0;if(currentAmount===0)setIsAllSelected('none');if(currentAmount>0&&currentAmount<amountOfChildren)setIsAllSelected('some');if(currentAmount!==totalAmount)state==null||state.removeValue('toggleAll');if(currentAmount===amountOfChildren&&!(state!=null&&(_state$value2=state.value)!=null&&_state$value2.includes('toggleAll'))){state==null||state.addValue('toggleAll');setIsAllSelected('all');}// eslint-disable-next-line react-hooks/exhaustive-deps
},[childValues.length,state==null?void 0:state.value]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox,{value:"toggleAll",isSelected:isAllSelected==='all',isIndeterminate:isAllSelected==='some',onChange:function onChange(){return toggleAll();},children:"V\xE4lj alla"});};return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Checkbox/* CheckboxGroup */.$Q,Object.assign({className:Checkbox_module.checkboxGroup},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(src/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Group/* Group */.Y,{className:Checkbox_module.wrap,children:[showSelectAll&&/*#__PURE__*/(0,jsx_runtime.jsx)(ToogleAll,{}),children]})})}));};
;// ./packages/checkbox/src/lib/index.ts

;// ./packages/checkbox/src/index.ts


/***/ }),

/***/ 21464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* reexport */ MultiSelect)
});

;// ./packages/multi-select/src/lib/MultiSelect.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const MultiSelect_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","black":"#000000","signalRed130":"#b31b1b","smBreakpoint":"(max-width: 767px)","gray50":"#bfbfbf","gray20":"#e6e6e6","backgroundSecondary":"#f2f2f2","button":"button_ICtj","icon":"icon_D7C5","multiSelect":"multiSelect_Eode","popover":"popover_jYDN","listBoxItem":"listBoxItem_c3_5"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 3 modules
var Dialog = __webpack_require__(17772);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs + 1 modules
var Button = __webpack_require__(44080);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 44 modules
var Popover = __webpack_require__(86351);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/GridList.mjs + 1 modules
var GridList = __webpack_require__(65379);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
// EXTERNAL MODULE: ./packages/checkbox/src/index.ts + 4 modules
var checkbox_src = __webpack_require__(61813);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/tag/src/lib/Tag.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tag_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","black":"#000000","signalRed130":"#b31b1b","smBreakpoint":"(max-width: 767px)","gray50":"#bfbfbf","gray30":"#d9d9d9","gray20":"#e6e6e6","gray10":"#f2f2f2","backgroundSecondary":"#f2f2f2","button":"button_KL5r","tag":"tag_QfCn","dismissable":"dismissable_Ta3F","tagText":"tagText_tTSG","tagList":"tagList_CRsJ"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TagGroup.mjs + 37 modules
var dist_TagGroup = __webpack_require__(2790);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var button_src = __webpack_require__(63918);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/tag/src/lib/Tag.tsx
var _excluded=["children"],_excluded2=["children","dismissable"];var TagGroup=function TagGroup(_ref){var children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagGroup */.CR,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagList */.LY,{className:Tag_module.tagList,children:children})}));};var Tag=function Tag(_ref2){var children=_ref2.children,dismissable=_ref2.dismissable,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_TagGroup/* Tag */.vw,Object.assign({className:(0,clsx/* default */.A)(Tag_module.tag,dismissable&&Tag_module.dismissable)},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Tag_module.tagText,children:children}),dismissable&&/*#__PURE__*/(0,jsx_runtime.jsx)(button_src/* Button */.$n,{variant:"icon",size:"small",className:Tag_module.button,slot:"remove",children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20})})]}));};
;// ./packages/tag/src/index.ts

// EXTERNAL MODULE: ./node_modules/@react-stately/data/dist/useListData.mjs
var useListData = __webpack_require__(7424);
;// ./packages/multi-select/src/lib/MultiSelect.tsx
'use client';var MultiSelect=function MultiSelect(_ref){var label=_ref.label,description=_ref.description,items=_ref.items,onSelectionChange=_ref.onSelectionChange,selectedKeys=_ref.selectedKeys,defaultSelectedKeys=_ref.defaultSelectedKeys,isDisabled=_ref.isDisabled,isInvalid=_ref.isInvalid,errorMessage=_ref.errorMessage;var triggerRef=react.useRef(null);var _React$useState=react.useState(undefined),popoverWidth=_React$useState[0],setPopoverWidth=_React$useState[1];var list=(0,useListData/* useListData */.u)({initialItems:items,initialSelectedKeys:defaultSelectedKeys});react.useEffect(function(){var updatePopoverWidth=function updatePopoverWidth(){if(triggerRef.current){setPopoverWidth(triggerRef.current.offsetWidth-2);}};updatePopoverWidth();window.addEventListener('resize',updatePopoverWidth);return function(){window.removeEventListener('resize',updatePopoverWidth);};},[]);react.useEffect(function(){if(onSelectionChange)onSelectionChange(new Set(list.selectedKeys));},[list.selectedKeys,onSelectionChange]);react.useEffect(function(){if(selectedKeys)list.setSelectedKeys(new Set(selectedKeys));// eslint-disable-next-line react-hooks/exhaustive-deps
},[selectedKeys]);var tagList=list.selectedKeys==='all'?new Set(list.items.map(function(item){return item.id;})):list.selectedKeys;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:MultiSelect_module.multiSelect,"data-disabled":isDisabled,"data-invalid":isInvalid,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(utils/* Provider */.Kq,{values:[[// we should maybe add more here
// [LabelContext, {...labelProps, ref: labelRef}],
// [InputContext, {...inputProps, ref: inputOrTextAreaRef}],
// [TextAreaContext, {...inputProps, ref: inputOrTextAreaRef}],
// [TextContext, {
//   slots: {
//     description: descriptionProps,
//     errorMessage: errorMessageProps
//   }
// }],
FieldError/* FieldErrorContext */.C,{isInvalid:isInvalid?isInvalid:false,validationErrors:[],validationDetails:{customError:isInvalid?isInvalid:false,badInput:false,patternMismatch:false,rangeOverflow:false,rangeUnderflow:false,stepMismatch:false,tooLong:false,tooShort:false,typeMismatch:false,valid:false,valueMissing:false}}]],children:[/*#__PURE__*/(0,jsx_runtime.jsx)(src/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* Button */.$,{className:MultiSelect_module.button,ref:triggerRef,isDisabled:isDisabled,children:["V\xE4lj",/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:MultiSelect_module.icon,"aria-hidden":"true",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{className:MultiSelect_module.popover,style:{width:popoverWidth},offset:0,UNSTABLE_portalContainer:triggerRef.current||undefined,children:/*#__PURE__*/(0,jsx_runtime.jsx)(GridList/* GridList */.FK,{"aria-label":label,selectionMode:"multiple",selectedKeys:list.selectedKeys,onSelectionChange:list.setSelectedKeys,children:list.items.map(function(item){return/*#__PURE__*/(0,jsx_runtime.jsxs)(GridList/* GridListItem */.KP,{id:item.id,textValue:item.name,className:MultiSelect_module.listBoxItem,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_src/* Checkbox */.S,{slot:"selection"}),item.name]},item.id);})})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(TagGroup,{"aria-label":"Valda",onRemove:function onRemove(keys){list.setSelectedKeys(new Set(Array.from(list.selectedKeys).filter(function(k){return!keys.has(k);})));},children:Array.from(tagList).map(function(key){var item=list.getItem(key);return/*#__PURE__*/(0,jsx_runtime.jsx)(Tag,{id:item==null?void 0:item.id,textValue:item==null?void 0:item.name,isDisabled:isDisabled,dismissable:true,children:item==null?void 0:item.name},item==null?void 0:item.id);})})]})});};/* harmony default export */ const lib_MultiSelect = ((/* unused pure expression or super */ null && (MultiSelect)));
;// ./packages/multi-select/src/index.ts


/***/ })

}]);