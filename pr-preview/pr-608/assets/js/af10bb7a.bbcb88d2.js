"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[153],{

/***/ 48282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_select_mdx_af1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-select-mdx-af1.json
const site_docs_components_select_mdx_af1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/select","title":"Select","description":"<ComponentHeader","source":"@site/docs/components/select.mdx","sourceDirName":"components","slug":"/components/select","permalink":"/pr-preview/pr-608/components/select","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Select","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(53797);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(32980);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/select/Select.tsx + 8 modules
var Select = __webpack_require__(15151);
;// ./apps/docs/src/components/examples/select/SelectExamples.tsx
var BasicExample=function BasicExample(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(Select/* Select */.l,Object.assign({label:"Favoritfrukt",description:"V\xE4lj vilken du vill",placeholder:"V\xE4lj en frukt",selectionMode:"single",options:[{id:'apelsin',name:'Apelsin'},{id:'banan',name:'Banan'},{id:'citron',name:'Citron'},{id:'dadel',name:'Dadel'},{id:'fikon',name:'Fikon'}]},props));};var ControlledExample=function ControlledExample(){var options=[{id:'apelsin',name:'Apelsin'},{id:'banan',name:'Banan'},{id:'citron',name:'Citron'},{id:'dadel',name:'Dadel'},{id:'fikon',name:'Fikon'}];var _React$useState=react.useState(new Set()),selectedFruit=_React$useState[0],setSelectedFruit=_React$useState[1];var handleSelectionChange=function handleSelectionChange(keys){if(keys==='all'){return setSelectedFruit(new Set(options.map(function(_ref){var id=_ref.id;return id;})));}return setSelectedFruit(keys);};return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Select/* Select */.l,{label:"Favoritfrukt",description:"V\xE4lj vilken du vill",placeholder:"V\xE4lj en frukt",selectionMode:"multiple",selectedKeys:selectedFruit,onSelectionChange:handleSelectionChange,isSelectableAll:true,options:options}),/*#__PURE__*/(0,jsx_runtime.jsxs)("pre",{children:["Selected fruit: ",selectedFruit&&Array.from(selectedFruit).join(', ')]})]});};var SectionedExample=function SectionedExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)(Select/* Select */.l,{label:"Favoritfrukt eller gr\xF6nsak",description:"V\xE4lj vilken du vill",placeholder:"V\xE4lj en frukt eller gr\xF6nsak",selectionMode:"multiple",options:[{name:'Frukter',children:[{id:'kiwi',name:'Kiwi'},{id:'banana',name:'Banan'},{id:'apple',name:'Äpple'}]},{name:'Grönsaker',children:[{id:'carrot',name:'Morot'},{id:'broccoli',name:'Broccoli'}]}]});};
;// ./apps/docs/docs/components/select.mdx


const frontMatter = {
	title: 'Select',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};








const toc = [{
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "Beskrivning",
  "id": "beskrivning",
  "level": 2
}, {
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "Flerval",
  "id": "flerval",
  "level": 3
}, {
  "value": "Välj alla",
  "id": "välj-alla",
  "level": 3
}, {
  "value": "Visa etiketter",
  "id": "visa-etiketter",
  "level": 4
}, {
  "value": "Förvalda alternativ (okontrollerat)",
  "id": "förvalda-alternativ-okontrollerat",
  "level": 3
}, {
  "value": "Kontrollerade val",
  "id": "kontrollerade-val",
  "level": 3
}, {
  "value": "Sektioner",
  "id": "sektioner",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Select",
  "id": "select",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: "Select",
      friendlyName: "Flerval, väljare, dropdown, rullgardin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inmatningsfält som används för att välja ett eller flera fördefinierade alternativ."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Select\n  label='Favoritfrukt'\n  description='Välj vilken du vill'\n  placeholder='Välj en frukt'\n  selectionMode='single'\n  options={[\n    { id: 'apelsin', name: 'Apelsin' },\n    { id: 'banan', name: 'Banan' },\n    { id: 'citron', name: 'Citron' },\n    { id: 'dadel', name: 'Dadel' },\n    { id: 'fikon', name: 'Fikon' },\n  ]}\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(BasicExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "npm2yarn",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "npm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/components\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/components\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/components\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Select } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om det är färre alternativ än fem bör ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pr-preview/pr-608/components/radio",
        children: "Radio"
      }), " användas istället."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "beskrivning",
      children: "Beskrivning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Midas Select är en variant av React Aria ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Select"
      }), " med möjlighet till flerval."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flerval",
      children: "Flerval"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd egenskapen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "selectionMode=\"multiple\""
      }), " för att slå på flervalsläget."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Select\n  label='Favoritfrukt'\n  description='Välj vilken du vill'\n  placeholder='Välj en frukt'\n  // highlight-start\n  selectionMode='multiple'\n  // highlight-end\n  options={[\n    { id: 'apelsin', name: 'Apelsin' },\n    { id: 'banan', name: 'Banan' },\n    { id: 'citron', name: 'Citron' },\n    { id: 'dadel', name: 'Dadel' },\n    { id: 'fikon', name: 'Fikon' },\n  ]}\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(BasicExample, {
        selectionMode: "multiple"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "välj-alla",
      children: "Välj alla"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Egenskapen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isSelectableAll"
      }), " kan användas för att lägga till en \"Välj alla\"-knapp."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Select\n  label='Favoritfrukt'\n  description='Välj vilken du vill'\n  placeholder='Välj en frukt'\n  // highlight-start\n  selectionMode='multiple'\n  isSelectableAll\n  // highlight-end\n  options={[\n    { id: 'apelsin', name: 'Apelsin' },\n    { id: 'banan', name: 'Banan' },\n    { id: 'citron', name: 'Citron' },\n    { id: 'dadel', name: 'Dadel' },\n    { id: 'fikon', name: 'Fikon' },\n  ]}\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(BasicExample, {
        selectionMode: "multiple",
        isSelectableAll: true
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "visa-etiketter",
      children: "Visa etiketter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Egenskapen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "showTags"
      }), " kan användas för att visa valen som etiketter under rullgardinen."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Select\n  label='Favoritfrukt'\n  description='Välj vilken du vill'\n  placeholder='Välj en frukt'\n  // highlight-start\n  selectionMode='multiple'\n  showTags\n  // highlight-end\n  options={[\n    { id: 'apelsin', name: 'Apelsin' },\n    { id: 'banan', name: 'Banan' },\n    { id: 'citron', name: 'Citron' },\n    { id: 'dadel', name: 'Dadel' },\n    { id: 'fikon', name: 'Fikon' },\n  ]}\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(BasicExample, {
        selectionMode: "multiple",
        showTags: true
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "förvalda-alternativ-okontrollerat",
      children: "Förvalda alternativ (okontrollerat)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd egenskapen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "defaultSelectedKeys"
      }), " för att sätta ett initialt värde till komponenten."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Select\n  label='Favoritfrukt'\n  description='Välj vilken du vill'\n  placeholder='Välj en frukt'\n  // highlight-start\n  selectionMode='multiple'\n  defaultSelectedKeys={new Set(['banan', 'dadel'])}\n  // highlight-end\n  options={[\n    { id: 'apelsin', name: 'Apelsin' },\n    { id: 'banan', name: 'Banan' },\n    { id: 'citron', name: 'Citron' },\n    { id: 'dadel', name: 'Dadel' },\n    { id: 'fikon', name: 'Fikon' },\n  ]}\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(BasicExample, {
        selectionMode: "multiple",
        defaultSelectedKeys: new Set(['banan', 'dadel'])
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kontrollerade-val",
      children: "Kontrollerade val"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Användarens val kan kontrolleras med hjälp av attributet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "selectedKeys"
      }), " tillsammans med eventet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onSelectionChange"
      }), ".\nVärdet för ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), " skickas tillbaka i callbacken när användaren justerar sitt val, så kan du använda det för att uppdatera ditt state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import React from 'react'\nimport { Selection } from 'react-aria-components'\n\nconst options = [\n  { id: 'apelsin', name: 'Apelsin' },\n  { id: 'banan', name: 'Banan' },\n  { id: 'citron', name: 'Citron' },\n  { id: 'dadel', name: 'Dadel' },\n  { id: 'fikon', name: 'Fikon' },\n]\n\nconst [selectedFruit, setSelectedFruit] = React.useState<Selection>(new Set())\n\nconst handleSelectionChange = (keys: Selection) => {\n  if (keys === 'all') {\n    return setSelectedFruit(new Set(options.map(({ id }) => id)))\n  }\n  return setSelectedFruit(keys)\n}\n\nreturn (\n  <Select\n    label='Favoritfrukt'\n    description='Välj vilken du vill'\n    placeholder='Välj en frukt'\n    // highlight-start\n    selectionMode='multiple'\n    selectedKeys={selectedFruit}\n    onSelectionChange={handleSelectionChange\n    isSelectableAll\n    // highlight-end\n    options={options}\n  />\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(ControlledExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sektioner",
      children: "Sektioner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vid många val kan alternativen struktureras i sektioner genom att dela in dem enligt följande:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "const options = [\n  {\n    name: 'Frukter',\n    children: [\n      { id: 'kiwi', name: 'Kiwi' },\n      { id: 'banana', name: 'Banan' },\n      { id: 'apple', name: 'Äpple' },\n    ],\n  },\n  {\n    name: 'Grönsaker',\n    children: [\n      { id: 'carrot', name: 'Morot' },\n      { id: 'broccoli', name: 'Broccoli' },\n    ],\n  },\n]\n\nreturn (\n  <Select\n    label='Favoritfrukt eller grönsak'\n    description='Välj vilken du vill'\n    placeholder='Välj en frukt eller grönsak'\n    selectionMode='multiple'\n    options={options}\n  />\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(SectionedExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "select",
      children: "Select"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "Select"
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

/***/ 53797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ PropTable)
});

// UNUSED EXPORTS: DisplayCompositeTypes

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useGlobalData.js
var useGlobalData = __webpack_require__(72077);
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx
var Accordion = __webpack_require__(3348);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx
var AccordionItem = __webpack_require__(57389);
// EXTERNAL MODULE: ./packages/components/src/theme/tokens.ts
var tokens = __webpack_require__(66995);
;// ./apps/docs/src/css/propstable.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const propstable_module = ({"accordion":"accordion_M8EQ","propsGridTable":"propsGridTable_luj3","popover":"popover_gEf7","arrow":"arrow_kUCF"});
// EXTERNAL MODULE: ./node_modules/react-markdown/lib/index.js + 139 modules
var lib = __webpack_require__(56380);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/Lowlight.js + 2 modules
var Lowlight = __webpack_require__(80556);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/common.js + 38 modules
var common = __webpack_require__(48004);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/Pressable.mjs
var Pressable = __webpack_require__(94752);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(45745);
;// ./apps/docs/src/utils/jsdocLinkToMarkdown.ts
var jsdocLinkToMarkdown=function jsdocLinkToMarkdown(jsdocLink){if(!jsdocLink.includes('@link')){return jsdocLink;}var textBefore=jsdocLink.substring(0,jsdocLink.indexOf('{@link')).replace(/@\S*/g,'');var url=jsdocLink.substring(jsdocLink.indexOf('http'),jsdocLink.lastIndexOf('/'));var linkText=jsdocLink.substring(jsdocLink.lastIndexOf('/')+2,jsdocLink.lastIndexOf('}'));return textBefore+". See ["+linkText+"]("+url+").";};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/PropsTable.tsx
var DisplayCompositeTypes=function DisplayCompositeTypes(_ref){var props=_ref.props;switch(props.type.name){case'enum':{return/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Pressable/* Pressable */.o,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{role:"button",style:{cursor:'pointer'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props.type.raw,inline:true,language:"typescript",markers:[]})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Popover/* Popover */.A,{style:{'--background':tokens.semantic.background,'--border':tokens.semantic.borderPrimary},className:propstable_module.popover,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:propstable_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:12,height:12,viewBox:"0 0 12 12",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L6 6 L12 0"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Dialog/* Dialog */.lG,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"hljs-code",children:props.type.value.map(function(r,i){return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{children:[i===0?' ':' | ',/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:r.value.replace(/"/g,"'"),inline:true,language:"typescript",markers:[]})]},""+r.value+i);})})})]})]});}default:return/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props.type.name,inline:true,language:"typescript",markers:[]});}};var PropTable=function PropTable(_ref2){var _ComponentsDocs$find;var name=_ref2.name,_ref2$defaultOpen=_ref2.defaultOpen,defaultOpen=_ref2$defaultOpen===void 0?true:_ref2$defaultOpen;var globalData=(0,useGlobalData/* default */.Ay)();var ComponentsDocs=globalData['docusaurus-plugin-react-docgen-typescript']["default"];var props=(_ComponentsDocs$find=ComponentsDocs.find(function(componentDoc){return componentDoc.displayName===name;}))==null?void 0:_ComponentsDocs$find.props;if(!props){return null;}var _Object$entries$reduc=Object.entries(props).reduce(function(acc,_ref3){var key=_ref3[0],value=_ref3[1];if(key.startsWith('on')){acc.events[key]=value;}else if(key.startsWith('aria-')){acc.accessibility[key]=value;}else{acc.rest[key]=value;}return acc;},{events:{},accessibility:{},rest:{}}),events=_Object$entries$reduc.events,accessibility=_Object$entries$reduc.accessibility,rest=_Object$entries$reduc.rest;var Grid=function Grid(_ref4){var propGroup=_ref4.propGroup,_ref4$showDefault=_ref4.showDefault,showDefault=_ref4$showDefault===void 0?true:_ref4$showDefault;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:propstable_module.propsGridTable,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Name"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Type"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:showDefault&&'Default'}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Description"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{children:Object.keys(propGroup).map(function(key){return/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("td",{"data-title":"Name",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:key,inline:true,language:"typescript",markers:[]}),props[key].required&&' *']}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Type",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DisplayCompositeTypes,{props:props[key]})}),showDefault?/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Default",children:props[key].defaultValue?/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props[key].defaultValue.value,inline:true,language:"typescript",markers:[]}):'-'}):/*#__PURE__*/(0,jsx_runtime.jsx)("td",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Description",children:/*#__PURE__*/(0,jsx_runtime.jsx)(lib/* Markdown */.oz,{children:jsdocLinkToMarkdown(props[key].description)})})]},key);})})]})});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Accordion/* Accordion */.n,{className:propstable_module.accordion,allowsMultipleExpanded:true,defaultExpandedKeys:defaultOpen?['props']:[],children:[Object.getOwnPropertyNames(rest).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"props",title:"Props",className:propstable_module.accordionItem,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:rest})}),Object.getOwnPropertyNames(events).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"events",title:"Events",className:propstable_module.accordionItem,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:events,showDefault:false})}),Object.getOwnPropertyNames(accessibility).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"accessibility",title:"Tillg\xE4nglighet",className:propstable_module.accordionItem,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:accessibility,showDefault:false})})]});};

/***/ }),

/***/ 32980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ComponentHeader)
/* harmony export */ });
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39996);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52981);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45438);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92457);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42350);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40797);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
var CHROMATIC_APP_ID='6810d578d5507438df0f0d22';// move
var ComponentHeader=function ComponentHeader(_ref){var name=_ref.name,friendlyName=_ref.friendlyName,overrideHeadlessLink=_ref.overrideHeadlessLink,overrideHeadlessLinkTitle=_ref.overrideHeadlessLinkTitle;var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(),customFields=_useDocusaurusContext.siteConfig.customFields;var componentPath="?path=/docs/components-"+name.toLowerCase()+"--docs";var storybookHost= false?0:customFields!=null&&customFields.currentChromaticBranchUrl?"https://"+(customFields==null?void 0:customFields.currentChromaticBranchUrl)+"--"+CHROMATIC_APP_ID+".chromatic.com":"https://main--"+CHROMATIC_APP_ID+".chromatic.com";var storybookLink=storybookHost+"/"+componentPath;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section",{className:"component-header",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .s,{fluid:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",className:"friendlyName",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",className:"headerLink",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:storybookLink,variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,iconPlacement:"left",children:"Storybook"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",className:"headerLink",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,iconPlacement:"left",children:overrideHeadlessLinkTitle?overrideHeadlessLinkTitle:'React Aria'})})]})});};

/***/ }),

/***/ 3348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ Accordion)
/* harmony export */ });
/* unused harmony export ACCORDION_TEST_ID */
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var _Accordion_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43538);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48569);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["variant","children","className"];var ACCORDION_TEST_ID='accordion';/**
 * Accordions are used primarily to reduce the direct amount of information on a page and to sort it clearly.
 */var Accordion=function Accordion(_ref){var _ref$variant=_ref.variant,variant=_ref$variant===void 0?'uncontained':_ref$variant,children=_ref.children,className=_ref.className,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .DisclosureGroup */ .Tw,Object.assign({"data-testid":ACCORDION_TEST_ID,className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_Accordion_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.root,variant==='contained'?_Accordion_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.contained:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.uncontained,className)},props,{children:children}));};

/***/ }),

/***/ 57389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AccordionItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48569);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35518);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45773);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(418);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75107);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34164);
/* harmony import */ var _Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43538);
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55402);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["title","children","className","headingLevel","type","hasBackground"];var AccordionItem=function AccordionItem(_ref){var title=_ref.title,children=_ref.children,className=_ref.className,_ref$headingLevel=_ref.headingLevel,headingLevel=_ref$headingLevel===void 0?'h2':_ref$headingLevel,type=_ref.type,_ref$hasBackground=_ref.hasBackground,hasBackground=_ref$hasBackground===void 0?true:_ref$hasBackground,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var titleIsReactNode=typeof title==='object';var iconMap={success:lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,warning:lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,"default":null};var Icon=iconMap[type||'default'];var renderedIcon=Icon?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon,{size:20,className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.statusIcon}):null;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_aria_components__WEBPACK_IMPORTED_MODULE_6__/* .Disclosure */ .EN,Object.assign({},props,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.item,type==='success'&&_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.success,type==='warning'&&_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.warning,className),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.trigger,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .$,{className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.triggerButton,slot:"trigger",variant:"icon",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{size:20,className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.chevronIcon}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.triggerMainContent,children:titleIsReactNode?title:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heading__WEBPACK_IMPORTED_MODULE_10__/* .Heading */ .D,{level:3,elementType:headingLevel,className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.triggerText,children:title})}),renderedIcon]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_6__/* .DisclosurePanel */ .kS,{className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.panel,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.content,hasBackground&&_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.hasBackground),children:children})})]}));};

/***/ }),

/***/ 93284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98587);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2581);
/* harmony import */ var _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76578);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
'use client';var _excluded=["children"];var Checkbox=function Checkbox(_ref){var _children=_ref.children,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .Checkbox */ .Sc,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.checkbox,props.className)},props,{children:function children(_ref2){var isIndeterminate=_ref2.isIndeterminate;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.checkboxInner,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:16,height:16,viewBox:"0 0 18 18","aria-hidden":"true",children:isIndeterminate?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:4,y:8,width:10,height:2}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline",{points:"3,9 7,13 15,4"})})}),_children]});}}));};

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
/* harmony default export */ const FieldError_module = ({"tokens":"\"../theme/tokens.css\"","--text-warning":"light-dark(#e62323, #eb4e4e)","--font-family":"\"Inter\", sans-serif","fieldError":"fieldError_K9VX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/field-error/FieldError.tsx
var FieldError_FieldError=/*#__PURE__*/react.forwardRef(function(props,ref){var validation=react.useContext(FieldError/* FieldErrorContext */.C);if(!(validation!=null&&validation.isInvalid))return null;return/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,Object.assign({},props,{ref:ref,className:(0,clsx/* default */.A)(FieldError_module.fieldError,props.className)}));});

/***/ }),

/***/ 39996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ Flex)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Flex_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12682);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","fluid"];/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use FlexItem to manage each column.
 * FlexItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */var Flex=function Flex(_ref){var children=_ref.children,_ref$fluid=_ref.fluid,fluid=_ref$fluid===void 0?false:_ref$fluid,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({},rest,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.container,fluid&&_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fluid,rest.className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.flex,children:children})}));};

/***/ }),

/***/ 52981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FlexItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Flex_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12682);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","col","offset"];/**
 * Columns based on display: flex;
 * FlexItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */var FlexItem=function FlexItem(_ref){var children=_ref.children,col=_ref.col,offset=_ref.offset,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var colClass=col?"col-"+col:'';var offsetClass=offset?"offset-"+offset:'';return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({},props,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.col,_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[colClass],_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[offsetClass],props.className),children:children}));};

/***/ }),

/***/ 55402:
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
/* harmony default export */ const Heading_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--font-size-30":"1rem","--font-size-40":"1.125rem","--font-size-50":"1.25rem","--font-size-90":"2.25rem","--line-height-50":"1.5rem","--line-height-60":"1.75rem","--line-height-70":"2rem","h1":"h1_fQIH","h2":"h2_fBmz","h3":"h3_xOF5","h4":"h4_AF6p","h5":"h5_slY8","h6":"h6_loS0"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/heading/Heading.tsx
var _excluded=["children","className","isExpressive","level","elementType"];var Heading=function Heading(_ref){var children=_ref.children,className=_ref.className,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$level=_ref.level,level=_ref$level===void 0?3:_ref$level,elementType=_ref.elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var semanticLevel=elementType&&parseInt(elementType.split('h')[1]);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Heading/* Heading */.D,Object.assign({level:semanticLevel||level,className:(0,clsx/* default */.A)([Heading_module.h1,Heading_module.h2,Heading_module.h3,Heading_module.h4,Heading_module.h5,Heading_module.h6][level-1],className)},isExpressive&&{'data-expressive':true},rest,{children:children}));};

/***/ }),

/***/ 20143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Label)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var dist_Label = __webpack_require__(21704);
;// ./packages/components/src/label/Label.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Label_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--font-size-30":"1rem","--line-height-30":"1.25rem","--text-disabled":"light-dark(#bfbfbf, #525252)","labelBase":"labelBase_BRgo"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/Label.tsx
var _excluded=["children","className","elementType"];var DEFAULT_ELEMENT='label';var Label=function Label(_ref){var children=_ref.children,className=_ref.className,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var labelProps=Object.assign({className:(0,clsx/* default */.A)(Label_module.labelBase,className),elementType:elementType||DEFAULT_ELEMENT},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Label/* Label */.J,Object.assign({},labelProps,{children:children}));};

/***/ }),

/***/ 45438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
/* harmony default export */ const LinkButton_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--font-size-30":"1rem","--breakpoint-sm":"(max-width: 767px)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--button-border-secondary":"light-dark(light-dark(#143c50, #2e7ca5), #f2f2f2)","--text-on-color":"light-dark(#ffffff, #ffffff)","--button-background-primary-hover":"light-dark(#25607f, --blue-140)","--button-background-primary-active":"light-dark(#2e7ca5, #143c50)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--button-background-disabled":"light-dark(#f2f2f2, #262626)","--text-disabled":"light-dark(#bfbfbf, #525252)","--text-tertiary":"light-dark(#143c50, #f2f2f2)","--border-tertiary":"light-dark(#143c50, #2e7ca5)","--button-background-secondary":"light-dark(#ffffff, #171717)","--button-background-secondary-hover":"light-dark(#e6e6e6, #212121)","--button-background-secondary-active":"light-dark(#d9d9d9, #262626)","--border-disabled":"light-dark(#bfbfbf, #525252)","--button-background-tertiary-hover":"light-dark(#e6e6e6, #212121)","--button-background-tertiary-active":"light-dark(#d9d9d9, #262626)","--button-background-danger":"light-dark(#e62323, #e62323)","--button-background-danger-hover":"light-dark(#bc1d1d, #bc1d1d)","--button-background-danger-active":"light-dark(#7d1313, #7d1313)","--white":"#ffffff","--icon-secondary":"light-dark(#525252, #a6a6a6)","--button-background-icon-hover":"light-dark(rgba(0 0 0 / 10%), rgba(255 255 255 / 10%))","--icon-tertiary":"light-dark(#143c50, #f2f2f2)","linkButton":"linkButton_DlJV","secondary":"secondary_aNB6","icon":"icon_g3pu","tertiary":"tertiary_tl3f","danger":"danger_qkvT","iconBtn":"iconBtn_Ngss","iconLeft":"iconLeft_r90N","fullwidth":"fullwidth_yUSG","button":"button_CzNs"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
var square_arrow_out_up_right = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(60250);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(87677);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/link-button/LinkButton.tsx
'use client';var _excluded=["children","variant","fullwidth","icon","iconPlacement","className","as"];/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */var LinkButton=function LinkButton(_ref){var children=_ref.children,variant=_ref.variant,fullwidth=_ref.fullwidth,IconComponent=_ref.icon,iconPlacement=_ref.iconPlacement,className=_ref.className,as=_ref.as,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||Link/* Link */.N;var Icon=function Icon(){if(IconComponent)return/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,{size:20,className:LinkButton_module.icon});if(rest.target==='_blank')return/*#__PURE__*/(0,jsx_runtime.jsx)(square_arrow_out_up_right/* default */.A,{size:20,className:LinkButton_module.icon});if(iconPlacement==='left')return/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_left/* default */.A,{size:20,className:LinkButton_module.icon});return/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{size:20,className:LinkButton_module.icon});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,Object.assign({className:(0,clsx/* default */.A)(LinkButton_module.linkButton,variant==='primary'&&LinkButton_module.primary,variant==='secondary'&&LinkButton_module.secondary,variant==='tertiary'&&LinkButton_module.tertiary,variant==='danger'&&LinkButton_module.danger,variant==='icon'&&LinkButton_module.iconBtn,fullwidth&&LinkButton_module.fullwidth,iconPlacement==='left'&&LinkButton_module.iconLeft,className)},rest,{children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{})]}));};

/***/ }),

/***/ 15151:
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
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TagGroup.mjs + 40 modules
var TagGroup = __webpack_require__(99628);
;// ./packages/components/src/select/Select.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Select_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-disabled":"light-dark(#bfbfbf, #525252)","--border-primary":"light-dark(#171717, #f2f2f2)","--text-primary":"light-dark(#171717, #f2f2f2)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--focus-inset":"inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)","--layer-01":"light-dark(#f2f2f2, #262626)","--support-border-warning":"light-dark(#e62323, #e62323)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--layer-selected-01":"light-dark(#d9d9d9, #383838)","--layer-selected-hover-01":"light-dark(#cccccc, #474747)","--text-on-color":"light-dark(#ffffff, #ffffff)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--button-background-primary-hover":"light-dark(#25607f, --blue-140)","--field-disabled":"light-dark(#f2f2f2, #262626)","--border-disabled":"light-dark(#bfbfbf, #525252)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--button-background-disabled":"light-dark(#f2f2f2, #262626)","--text-warning":"light-dark(#e62323, #eb4e4e)","--size-130":"2.5rem","--size-150":"3rem","--size-70":"0.875rem","selectAllButton":"selectAllButton_vETM","selectLabel":"selectLabel_ym7d","selectLabelDisabled":"selectLabelDisabled_q13p","button":"button_qOaA","medium":"medium_IF05","buttonOpen":"buttonOpen_JL6G","icon":"icon_roiA","buttonDisabled":"buttonDisabled_hGbG","multiSelect":"multiSelect_fCqw","fieldError":"fieldError_DzbR","selectContainer":"selectContainer_ChZ6","tagGroup":"tagGroup_t6GX","popover":"popover_Bl6D","listBox":"listBox_BiFm","listBoxItem":"listBoxItem_yOJV","listBoxItemSelected":"listBoxItemSelected_USLD","listBoxItemDisabled":"listBoxItemDisabled_IkTb","listBoxItemFocused":"listBoxItemFocused_dAO1","listBoxItemFocusVisible":"listBoxItemFocusVisible_SKwl","listItemfocusRing":"listItemfocusRing_y9jm","listBoxItemCheckmark":"listBoxItemCheckmark_Dz5t","selectValueTag":"selectValueTag_Bx1C","selectValueTagDisabled":"selectValueTagDisabled_hNWH","truncate":"truncate_J6cE","clearButton":"clearButton_p8du","selectSectionHeading":"selectSectionHeading_AOh9","checkboxContainer":"checkboxContainer_u2A7"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(45773);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(20143);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ListBox.mjs + 3 modules
var ListBox = __webpack_require__(79255);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Header.mjs
var Header = __webpack_require__(83181);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Virtualizer.mjs + 9 modules
var Virtualizer = __webpack_require__(424);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx
var Checkbox = __webpack_require__(93284);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/callSuper.js + 2 modules
var callSuper = __webpack_require__(31013);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(77387);
// EXTERNAL MODULE: ./node_modules/@react-stately/layout/dist/ListLayout.mjs + 2 modules
var ListLayout = __webpack_require__(12939);
;// ./packages/components/src/select/SectionedListLayout.ts
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
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/select/SelectListBox.tsx
var _excluded=["state"];var Option=function Option(_ref){var item=_ref.item,state=_ref.state;return/*#__PURE__*/(0,jsx_runtime.jsx)(ListBox/* ListBoxItem */.nh,{id:item.key,className:function className(_ref2){var _clsx;var isDisabled=_ref2.isDisabled,isFocused=_ref2.isFocused,isFocusVisible=_ref2.isFocusVisible,isSelected=_ref2.isSelected;return (0,clsx/* default */.A)(Select_module.listBoxItem,(_clsx={},_clsx[Select_module.listBoxItemDisabled]=isDisabled,_clsx[Select_module.listBoxItemFocused]=isFocused,_clsx[Select_module.listBoxItemFocusVisible]=isFocusVisible,_clsx[Select_module.listBoxItemSelected]=isSelected,_clsx));},textValue:item.textValue,children:function children(_ref3){var isDisabled=_ref3.isDisabled,isSelected=_ref3.isSelected;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[state.selectionMode==='multiple'&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.checkboxContainer,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{isDisabled:isDisabled,isSelected:isSelected,isReadOnly:true})}),typeof item.rendered==='string'?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"truncate block",children:item.rendered}):item.rendered,isSelected&&state.selectionMode==='single'?/*#__PURE__*/(0,jsx_runtime.jsx)(check/* default */.A,{size:20,className:Select_module.listBoxItemCheckmark}):null]});}});};var SelectListBox_Section=function Section(_ref4){var _state$collection;var section=_ref4.section,state=_ref4.state;return/*#__PURE__*/(0,jsx_runtime.jsxs)(ListBox/* ListBoxSection */.rd,{id:section.key,children:[section.rendered?/*#__PURE__*/(0,jsx_runtime.jsx)(Header/* Header */.Y,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{elementType:"span",className:Select_module.selectSectionHeading,children:section.rendered})}):null,state.collection.getChildren?/*#__PURE__*/(0,jsx_runtime.jsx)(CollectionBuilder/* Collection */.pM,{items:(_state$collection=state.collection)==null?void 0:_state$collection.getChildren(section.key),children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Option,{item:item,state:state},item.key);}}):null]});};var SelectListBox=function SelectListBox(_ref5){var state=_ref5.state,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref5,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Virtualizer/* Virtualizer */.Y,{layout:SectionedListLayout,layoutOptions:{headingHeight:44},children:/*#__PURE__*/(0,jsx_runtime.jsx)(ListBox/* ListBox */.qF,Object.assign({},rest,state,{escapeKeyBehavior:"none",onSelectionChange:state.setSelectedKeys,className:Select_module.listBox,items:state.collection,children:function children(item){return item.type==='section'?/*#__PURE__*/(0,jsx_runtime.jsx)(SelectListBox_Section,{section:item,state:state},item.key):/*#__PURE__*/(0,jsx_runtime.jsx)(Option,{item:item,state:state},item.key);}}))});};
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
function useMultiSelectState(props){var _useState=(0,react.useState)(false),isFocused=_useState[0],setFocused=_useState[1];var triggerState=(0,useMenuTriggerState/* useMenuTriggerState */.I)(props);var isSingleSelect=props.selectionMode==='single';var multiSelectListState=useMultiSelectListState(Object.assign({},props,{onSelectionChange:function onSelectionChange(keys){props.onSelectionChange&&props.onSelectionChange(keys);if(isSingleSelect){triggerState.close();}}}));var validationState=(0,useFormValidationState/* useFormValidationState */.KZ)(Object.assign({},props,{validationBehavior:'native',value:multiSelectListState.selectedKeys}));var isCollectionEmpty=multiSelectListState.collection.size===0;var isAnyKeySelected=!!multiSelectListState.selectedKeys.size;// Reset validation for single selects when the selected key changes.
(0,react.useEffect)(function(){if(isSingleSelect&&isAnyKeySelected){validationState.resetValidation();validationState.commitValidation();}},[isAnyKeySelected,isSingleSelect,validationState]);return Object.assign({},multiSelectListState,triggerState,{close:function close(){triggerState.close();if(isAnyKeySelected){validationState.resetValidation();validationState.commitValidation();}},open:function open(){// Don't open if the collection is empty.
if(!isCollectionEmpty){triggerState.open();}},toggle:function toggle(focusStrategy){if(!isCollectionEmpty){triggerState.toggle(focusStrategy);}},isFocused:isFocused,setFocused:setFocused},validationState);}
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
// EXTERNAL MODULE: ./packages/components/src/tag/Tag.tsx + 1 modules
var Tag = __webpack_require__(20380);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(80554);
// EXTERNAL MODULE: ./packages/components/src/utils/useObserveElement.tsx
var useObserveElement = __webpack_require__(42934);
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
 */function useHiddenMultiSelect(_ref,state,triggerRef){var autoComplete=_ref.autoComplete,name=_ref.name,isDisabled=_ref.isDisabled,isRequired=_ref.isRequired,selectRef=_ref.selectRef;var _useVisuallyHidden=(0,VisuallyHidden/* useVisuallyHidden */.B)(),visuallyHiddenProps=_useVisuallyHidden.visuallyHiddenProps;(0,useFormReset/* useFormReset */.F)(selectRef,state.selectedKeys,state.setSelectedKeys);(0,useFormValidation/* useFormValidation */.X)({validationBehavior:'native',focus:function focus(){var _triggerRef$current;return(_triggerRef$current=triggerRef.current)==null?void 0:_triggerRef$current.focus();}},state,selectRef);// In Safari, the <select> cannot have `display: none` or `hidden` for autofill to work.
// In Firefox, there must be a <label> to identify the <select> whereas other browsers
// seem to identify it just by surrounding text.
// The solution is to use <VisuallyHidden> to hide the elements, which clips the elements to a
// 1px rectangle. In addition, we hide from screen readers with aria-hidden, and make the <select>
// non tabbable with tabIndex={-1}.
return{containerProps:Object.assign({},visuallyHiddenProps,{'aria-hidden':true,// @ts-expect-error - data-a11y-ignore is not a standard attribute
'data-react-aria-prevent-focus':true,'data-a11y-ignore':'aria-hidden-focus'}),inputProps:{style:{display:'none'}},selectProps:{tabIndex:-1,autoComplete:autoComplete,disabled:isDisabled,required:isRequired,name:name,value:Array.from(state.selectedKeys).map(function(key){return key.toString();}),onChange:function onChange(e){return state.setSelectedKeys(e.target.value);},multiple:true}};}/**
 * Renders a hidden native `<select>` element, which can be used to support browser
 * form autofill, mobile form navigation, and native form submission.
 */function HiddenMultiSelect(props){var state=props.state,triggerRef=props.triggerRef,label=props.label,name=props.name,isDisabled=props.isDisabled;var selectRef=(0,react.useRef)(null);var _useHiddenMultiSelect=useHiddenMultiSelect(Object.assign({},props,{selectRef:selectRef}),state,triggerRef),containerProps=_useHiddenMultiSelect.containerProps,selectProps=_useHiddenMultiSelect.selectProps;// If used in a <form>, use a hidden input so the value can be submitted to a server.
// If the collection isn't too big, use a hidden <select> element for this so that browser
// autofill will work. Otherwise, use an <input type="hidden">.
if(state.collection.size<=300){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},containerProps,{"data-testid":"hidden-select-container",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{children:[label,/*#__PURE__*/(0,jsx_runtime.jsxs)("select",Object.assign({},selectProps,{ref:selectRef,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("option",{}),[].concat(state.collection.getKeys()).map(function(key){var item=state.collection.getItem(key);if(item&&item.type==='item'){return/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:item.key,children:item.textValue},item.key);}return null;})]}))]})}));}else if(name){var _Array$from$map;return/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"hidden",autoComplete:selectProps.autoComplete,name:name,disabled:isDisabled,value:(_Array$from$map=Array.from(state.selectedKeys).map(function(key){return key.toString();}))!=null?_Array$from$map:['']});}return null;}
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(93361);
;// ./packages/components/src/select/Select.tsx
var Select_excluded=["selectionMode","errorPosition","size"],_excluded2=["options"];var SelectComponent=/*#__PURE__*/react.forwardRef(function(_ref,forwardedRef){var _clsx2,_clsx3,_clsx4;var _ref$selectionMode=_ref.selectionMode,selectionMode=_ref$selectionMode===void 0?'single':_ref$selectionMode,_ref$errorPosition=_ref.errorPosition,errorPosition=_ref$errorPosition===void 0?'top':_ref$errorPosition,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,Select_excluded);var props=Object.assign({selectionMode:selectionMode},rest);var autoFocus=props.autoFocus,className=props.className,excludeFromTabOrder=props.excludeFromTabOrder,_props$isClearable=props.isClearable,isClearable=_props$isClearable===void 0?true:_props$isClearable,isDisabled=props.isDisabled,isSelectableAll=props.isSelectableAll,label=props.label,description=props.description,placeholder=props.placeholder,showTags=props.showTags,errorMessage=props.errorMessage;var ref=(0,useObjectRef/* useObjectRef */.U)(forwardedRef);var disallowEmptySelection=!isClearable;var state=useMultiSelectState(Object.assign({},props,{disallowEmptySelection:disallowEmptySelection}));var _useMultiSelect=useMultiSelect(Object.assign({},props,{disallowEmptySelection:disallowEmptySelection}),state,ref),labelProps=_useMultiSelect.labelProps,triggerProps=_useMultiSelect.triggerProps,valueProps=_useMultiSelect.valueProps,menuProps=_useMultiSelect.menuProps;var _useButton=(0,useButton/* useButton */.s)(Object.assign({},triggerProps,{autoFocus:autoFocus,excludeFromTabOrder:excludeFromTabOrder,isDisabled:isDisabled}),ref),buttonProps=_useButton.buttonProps;var isActive=state.isOpen||state.selectedItems;var isAllSelection=state.selectionManager.isSelectAll;var isIndeterminateSelection=!isAllSelection&&!state.selectionManager.isEmpty;var hasClearButton=isClearable&&state.selectedItems;var hasHeader=isSelectableAll;var handleClear=function handleClear(){return state.selectionManager.clearSelection();};var handleSelectAll=function handleSelectAll(){return state.selectionManager.toggleSelectAll();};var handleRemove=function handleRemove(key){return state.selectionManager.toggleSelection(key);};var _useObserveElement=(0,useObserveElement/* default */.A)(ref.current),buttonWidth=_useObserveElement.width;var formatItems=function formatItems(items){var _clsx;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(Select_module.selectValueTag,(_clsx={},_clsx[Select_module.selectValueTagDisabled]=isDisabled,_clsx)),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Select_module.truncate,style:{maxWidth:buttonWidth-64},children:items.length>1?items.length+" valda":items[0].textValue}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{disabled:isDisabled,"aria-label":"Rensa alla",className:Select_module.clearButton,onClick:function onClick(){var _ref$current;handleClear();ref==null||(_ref$current=ref.current)==null||_ref$current.focus();},children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{width:20,height:20})})]});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HiddenMultiSelect,{isDisabled:props.isDisabled,isRequired:props.isRequired,name:props.name,state:state,triggerRef:ref,label:props.label+'-hidden'}),/*#__PURE__*/(0,jsx_runtime.jsxs)(TextField/* TextField */.A,Object.assign({},props,{"aria-label":label||'placeholder',className:(0,clsx/* default */.A)([Select_module.multiSelect],(_clsx2={},_clsx2[Select_module.multiSelectOpen]=state.isOpen,_clsx2),className),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.multiSelect,children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,Object.assign({},labelProps,{slot:"label",className:(0,clsx/* default */.A)(Select_module.selectLabel,(_clsx3={},_clsx3[Select_module.selectLabelActive]=isActive,_clsx3[Select_module.selectLabelDisabled]=isDisabled,_clsx3)),children:label})),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:description}),errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:errorMessage}),state.displayValidation.validationErrors.length?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.fieldError,children:errorMessage||state.displayValidation.validationErrors.map(function(error){return/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:error},error);})}):null]}),/*#__PURE__*/(0,jsx_runtime.jsx)(FocusRing/* FocusRing */.v,{focusRingClass:Select_module.buttonFocused,autoFocus:autoFocus,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.selectContainer,"data-disabled":isDisabled||undefined,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",Object.assign({},buttonProps,mergeProps/* mergeProps */.v,{className:(0,clsx/* default */.A)(Select_module.button,(_clsx4={},_clsx4[Select_module.buttonOpen]=state.isOpen,_clsx4[Select_module.buttonActive]=state.selectedItems,_clsx4[Select_module.buttonDisabled]=isDisabled,_clsx4[Select_module.medium]=size==='medium',_clsx4)),"data-invalid":state.displayValidation.validationErrors.length>0||state.displayValidation.isInvalid,type:"button",ref:ref,children:[state.selectionMode==='multiple'&&!state.selectedItems?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:placeholder}):null,state.selectionMode==='single'?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:state.selectedItems?state.selectedItems[0].textValue:placeholder}):null,/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.icon,"aria-hidden":"true",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20})})]})),state.selectionMode==='multiple'&&state.selectedItems?/*#__PURE__*/(0,jsx_runtime.jsx)("span",Object.assign({},valueProps,{children:formatItems(state.selectedItems)})):null]})}),errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:errorMessage}),state.displayValidation.validationErrors.length?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.fieldError,children:errorMessage||state.displayValidation.validationErrors.map(function(error){return/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:error},error);})}):null]}),state.isOpen&&/*#__PURE__*/(0,jsx_runtime.jsxs)(SelectPopover,{isOpen:state.isOpen,onClose:state.close,className:Select_module.popover,triggerRef:ref,children:[hasHeader&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[isSelectableAll&&/*#__PURE__*/(0,jsx_runtime.jsx)(FocusRing/* FocusRing */.v,{focusRingClass:Select_module.listItemfocusRing,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{type:"button",onClick:handleSelectAll,className:(0,clsx/* default */.A)(Select_module.listBoxItem,Select_module.selectAllButton),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.checkboxContainer,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{isSelected:isAllSelection,isIndeterminate:isIndeterminateSelection,isReadOnly:true,excludeFromTabOrder:true})}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Select All"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"selectDivider"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectListBox,Object.assign({},menuProps,{state:state})),hasClearButton&&false&&/*#__PURE__*/0]})]}),showTags&&state.selectedItems!==null&&/*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* TagGroup */.C,Object.assign({"aria-label":"Selected Items",selectionBehavior:"toggle",onRemove:function onRemove(keys){return handleRemove(Array.from(keys)[0]);},className:Select_module.tagGroup},mergeProps/* mergeProps */.v,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(TagGroup/* TagList */.LY,{items:state.selectedItems,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* Tag */.v,{textValue:item.textValue,id:item.key,dismissable:true,isDisabled:isDisabled,children:item.textValue},item.key);}})}))]}))]});});var Select=/*#__PURE__*/react.forwardRef(function(_ref2,ref){var options=_ref2.options,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(SelectComponent,Object.assign({},props,{items:options,ref:ref,children:function children(section){return section.children?/*#__PURE__*/(0,jsx_runtime.jsx)(Section/* Section */.w,{items:section.children,title:section.name,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Item/* Item */.q,{textValue:item.textValue,children:item.name});}},section.name):/*#__PURE__*/(0,jsx_runtime.jsx)(Item/* Item */.q,{textValue:section.textValue,children:section.name});}}));});Select.displayName='Select';

/***/ }),

/***/ 20380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ Tag),
  C: () => (/* binding */ TagGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/components/src/tag/Tag.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tag_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--field-01":"light-dark(#f2f2f2, #262626)","--text-disabled":"light-dark(#bfbfbf, #525252)","--field-active-01":"light-dark(#d9d9d9, #383838)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--icon-primary":"light-dark(#171717, #f2f2f2)","--support-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--support-background-info":"light-dark(#eaf2f6, light-dark(#f2f2f2, #262626))","--support-background-important":"light-dark(#fff8e1, light-dark(#f2f2f2, #262626))","--support-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--button-background-icon-hover":"light-dark(rgba(0 0 0 / 10%), rgba(255 255 255 / 10%))","--button-background-icon-active":"light-dark(rgba(0 0 0 / 20%), rgba(255 255 255 / 20%))","--border-primary":"light-dark(#171717, #f2f2f2)","--support-border-success":"light-dark(#008d3c, #008d3c)","--support-border-info":"light-dark(#0066cc, #0066cc)","--support-border-important":"light-dark(#fdb813, #fdb813)","--support-border-warning":"light-dark(#e62323, #e62323)","--text-primary":"light-dark(#171717, #f2f2f2)","--border-disabled":"light-dark(#bfbfbf, #525252)","button":"button_Loby","success":"success_GxEq","warning":"warning_MXCT","info":"info_xrqn","important":"important_QbWH","tag":"tag_WAeO","dismissable":"dismissable_Tfml","tagText":"tagText_f_lx","tagList":"tagList_sxPC"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TagGroup.mjs + 40 modules
var dist_TagGroup = __webpack_require__(99628);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(35518);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/tag/Tag.tsx
var _excluded=["children"],_excluded2=["children","dismissable","className","type"];var TagGroup=function TagGroup(_ref){var children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagGroup */.CR,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagList */.LY,{className:Tag_module.tagList,children:children})}));};var Tag=function Tag(_ref2){var children=_ref2.children,dismissable=_ref2.dismissable,className=_ref2.className,_ref2$type=_ref2.type,type=_ref2$type===void 0?'default':_ref2$type,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_TagGroup/* Tag */.vw,Object.assign({className:(0,clsx/* default */.A)(Tag_module.tag,dismissable&&Tag_module.dismissable,type==='success'&&Tag_module.success,type==='info'&&Tag_module.info,type==='important'&&Tag_module.important,type==='warning'&&Tag_module.warning,className)},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Tag_module.tagText,children:children}),dismissable&&/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",size:"medium",className:Tag_module.button,slot:"remove",children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20})})]}));};

/***/ }),

/***/ 93361:
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
/* harmony default export */ const Text_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--font-size-20":"0.875rem","--font-size-30":"1rem","--line-height-20":"1.125rem","--line-height-30":"1.25rem","--line-height-40":"1.375rem","--line-height-50":"1.5rem","--text-disabled":"light-dark(#bfbfbf, #525252)","body-01":"body-01_whJM","body-02":"body-02_Xi1v","description":"description_XYgX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","variant","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'body-02':_ref$variant,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames={'body-01':Text_module['body-01'],'body-02':Text_module['body-02']};var textProps=Object.assign({className:(0,clsx/* default */.A)(rest.slot==='description'?Text_module.description:classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

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
/* harmony export */   typography: () => (/* binding */ typography),
/* harmony export */   windowSizes: () => (/* binding */ windowSizes),
/* harmony export */   zIndex: () => (/* binding */ zIndex)
/* harmony export */ });
var baseColors={black:'#000000',white:'#ffffff',blackHover:'#0d0d0d',whiteHover:'#e6e6e6',gray10:'#f2f2f2',gray20:'#e6e6e6',gray30:'#d9d9d9',gray40:'#cccccc',gray50:'#bfbfbf',gray60:'#b3b3b3',gray70:'#a6a6a6',gray80:'#999999',gray90:'#8c8c8c',gray100:'#808080',gray110:'#737373',gray120:'#666666',gray130:'#5d5d5d',gray140:'#525252',gray150:'#474747',gray160:'#383838',gray170:'#333333',gray180:'#262626',gray190:'#212121',gray200:'#171717',blue10:'#eaf2f6',blue20:'#d5e5ed',blue40:'#abcbdb',blue50:'#94BCD1',blue60:'#82b0c9',blue70:'#6CA3C0',blue80:'#5897b8',blue90:'#4289ad',blue100:'#2e7ca5',blue110:'#2C7399',blue120:'#29698C',blue130:'#25607f',blue150:'#143c50',purple80:'#b46ab4',purple110:'#954b95',red100:'#b90835',signalBlue10:'#eaf2f6',signalBlue100:'#0066cc',signalGreen20:'#d5f2d9',signalGreen30:'#bae5c5',signalGreen100:'#008d3c',signalYellow10:'#fff8e1',signalYellow100:'#fdb813',signalRed10:'#ffefef',signalRed20:'#ffdfdf',signalRed30:'#fcc8c8',signalRed40:'#f9b0b0',signalRed50:'#f69999',signalRed60:'#f38181',signalRed70:'#ef6a6a',signalRed80:'#eb4e4e',signalRed90:'#e93b3b',signalRed100:'#e62323',signalRed110:'#d12020',signalRed120:'#bc1d1d',signalRed130:'#a71919',signalRed140:'#921616',signalRed150:'#7d1313',signalRed160:'#691010',signalRed170:'#540d0d',signalRed180:'#3f0a0a',signalRed190:'#2a0606',signalRed200:'#150303'};var typography={fontFamily:'"Inter", sans-serif',lineHeight10:1,// 16px
lineHeight20:1.125,// 18px (18/16)
lineHeight30:1.25,// 20px (20/16)
lineHeight40:1.375,// 22px (22/16)
lineHeight50:1.5,// 24px (24/16)
lineHeight60:1.75,// 28px (28/16)
lineHeight70:2,// 32px (32/16)
lineHeight80:2.25,// 36px (36/16)
lineHeight90:2.5,// 40px (40/16)
lineHeight100:2.75,// 44px (44/16)
fontSize10:'0.75rem',// 12px (12/16)
fontSize20:'0.875rem',// 14px (14/16)
fontSize30:'1rem',// 16px (16/16)
fontSize40:'1.125rem',// 18px (18/16)
fontSize50:'1.25rem',// 20px (20/16)
fontSize60:'1.5rem',// 24px (24/16)
fontSize70:'1.75rem',// 28px (28/16)
fontSize80:'2rem',// 32px (32/16)
fontSize90:'2.25rem',// 36px (36/16)
fontSize100:'2.625rem',// 42px (40/16)
weightThin:100,weightExtraLight:200,weightLight:300,weightRegular:400,weightMedium:500,weightSemiBold:600,weightBold:700,weightExtraBold:800,weightBlack:900};var spacing={'10':'0.125rem',// 2px
'20':'0.25rem',// 4px
'30':'0.5rem',// 8px
'40':'0.75rem',// 12px
'50':'1rem',// 16px
'60':'1.5rem',// 24px
'70':'2rem',// 32px
'80':'2.5rem',// 40px
'90':'3rem',// 48px
'100':'4rem',// 64px
'110':'5rem',// 80px
'120':'6rem'// 96px
};var states={focus:'0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)'};var transitions={slow:'500ms',normal:'300ms',fast:'250ms'};var windowSizes={md:768,lg:1200,xl:1440};var breakpoints={sm:"(max-width: "+(windowSizes.md-1)+"px)",md:"(min-width: "+windowSizes.md+"px)",lg:"(min-width: "+windowSizes.lg+"px)",xl:"(min-width: "+windowSizes.xl+"px)",forcedColorsMode:'(forced-colors: active)',darkMode:'(prefers-color-scheme: dark)',prefersReducedMotion:'(prefers-reduced-motion: reduced)'};var semantic={background:"light-dark("+baseColors.white+", "+baseColors.gray200+")",backgroundHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",backgroundInverse:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",layer01:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",layerHover01:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",layerSelected01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",layerSelectedHover01:"light-dark("+baseColors.gray40+", "+baseColors.gray150+")",layer02:"light-dark("+baseColors.white+", "+baseColors.gray160+")",layerHover02:"light-dark("+baseColors.whiteHover+", "+baseColors.gray150+")",layerSelected02:"light-dark("+baseColors.gray30+", "+baseColors.gray140+")",layerSelectedHover02:"light-dark("+baseColors.gray40+", "+baseColors.gray130+")",layerAccent01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",layerAccentHover01:"light-dark("+baseColors.gray40+", "+baseColors.gray150+")",layerAccentSelected01:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",layerAccent02:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",layerAccentHover02:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",layerAccentSelected02:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",brandPrimary:"light-dark("+baseColors.red100+", "+baseColors.red100+")",borderPrimary:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",borderSecondary:"light-dark("+baseColors.gray110+", "+baseColors.gray90+")",borderSubtle:"light-dark("+baseColors.gray50+", "+baseColors.gray160+")",borderTertiary:"light-dark("+baseColors.blue150+", "+baseColors.blue100+")",borderDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",field01:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",fieldHover01:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",fieldActive01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",field02:"light-dark("+baseColors.white+", "+baseColors.gray160+")",fieldHover02:"light-dark("+baseColors.whiteHover+", "+baseColors.gray150+")",fieldActive02:"light-dark("+baseColors.gray30+", "+baseColors.gray140+")",fieldDisabled:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",fieldSkeleton:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",iconPrimary:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",iconSecondary:"light-dark("+baseColors.gray140+", "+baseColors.gray70+")",iconTertiary:"light-dark("+baseColors.blue150+", "+baseColors.gray10+")",iconInverse:"light-dark("+baseColors.white+", "+baseColors.gray200+")",iconOnColor:"light-dark("+baseColors.white+", "+baseColors.white+")",iconDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",iconSuccess:"light-dark("+baseColors.signalGreen100+", "+baseColors.signalGreen100+")",iconInfo:"light-dark("+baseColors.signalBlue100+", "+baseColors.signalBlue100+")",iconWarning:"light-dark("+baseColors.signalRed100+", "+baseColors.signalRed100+")",iconImportant:"light-dark("+baseColors.signalYellow100+", "+baseColors.signalYellow100+")",linkEnabled:"light-dark("+baseColors.blue120+", "+baseColors.blue70+")",linkHover:"light-dark("+baseColors.blue150+", "+baseColors.blue50+")",linkPressed:"light-dark("+baseColors.gray200+", "+baseColors.blue40+")",linkVisited:"light-dark("+baseColors.purple110+", "+baseColors.purple80+")",supportBorderSuccess:"light-dark("+baseColors.signalGreen100+", "+baseColors.signalGreen100+")",supportBorderInfo:"light-dark("+baseColors.signalBlue100+", "+baseColors.signalBlue100+")",supportBorderImportant:"light-dark("+baseColors.signalYellow100+", "+baseColors.signalYellow100+")",supportBorderWarning:"light-dark("+baseColors.signalRed100+", "+baseColors.signalRed100+")",supportBackgroundSuccess:"light-dark("+baseColors.signalGreen20+", "+baseColors.gray180+")",supportBackgroundSuccessHover:"light-dark("+baseColors.signalGreen30+", "+baseColors.gray170+")",supportBackgroundInfo:"light-dark("+baseColors.signalBlue10+", "+baseColors.gray180+")",supportBackgroundImportant:"light-dark("+baseColors.signalYellow10+", "+baseColors.gray180+")",supportBackgroundWarning:"light-dark("+baseColors.signalRed20+", "+baseColors.gray180+")",supportBackgroundWarningHover:"light-dark("+baseColors.signalRed30+", "+baseColors.gray170+")",textPrimary:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",textSecondary:"light-dark("+baseColors.gray140+", "+baseColors.gray70+")",textTertiary:"light-dark("+baseColors.blue150+", "+baseColors.gray10+")",textOnColor:"light-dark("+baseColors.white+", "+baseColors.white+")",textInverse:"light-dark("+baseColors.gray10+", "+baseColors.gray200+")",textDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",textWarning:"light-dark("+baseColors.signalRed100+", "+baseColors.signalRed80+")",textPlaceholder:"light-dark("+baseColors.gray70+", "+baseColors.gray140+")",buttonBackgroundPrimary:"light-dark("+baseColors.blue150+", "+baseColors.blue100+")",buttonBackgroundPrimaryHover:"light-dark("+baseColors.blue130+", "+baseColors.blue130+")",buttonBackgroundPrimaryActive:"light-dark("+baseColors.blue100+", "+baseColors.blue150+")",buttonBackgroundSecondary:"light-dark("+baseColors.white+", "+baseColors.gray200+")",buttonBackgroundSecondaryHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",buttonBackgroundSecondaryActive:"light-dark("+baseColors.gray30+", "+baseColors.gray180+")",buttonBackgroundTertiaryHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",buttonBackgroundTertiaryActive:"light-dark("+baseColors.gray30+", "+baseColors.gray180+")",buttonBackgroundDanger:"light-dark("+baseColors.signalRed100+", "+baseColors.signalRed100+")",buttonBackgroundDangerHover:"light-dark("+baseColors.signalRed120+", "+baseColors.signalRed120+")",buttonBackgroundDangerActive:"light-dark("+baseColors.signalRed150+", "+baseColors.signalRed150+")",buttonBackgroundDisabled:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",buttonBackgroundSkeleton:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",buttonBorderSecondary:"light-dark("+baseColors.blue150+", "+baseColors.gray10+")",logoPrimary:"light-dark("+baseColors.red100+", "+baseColors.white+")",menuItemBackgroundHover:"light-dark("+baseColors.gray20+", "+baseColors.gray190+")",menuItemBackgroundSelected:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")"};var zIndex={base:1,above:10,modal:1000,toast:1100,skipToContent:1200};

/***/ }),

/***/ 42934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useObserveElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * Observe an elements size change on resize
 */function useObserveElement(element,options){if(options===void 0){options={};}var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({width:0,height:0}),size=_useState[0],setSize=_useState[1];var delay=options.delay===undefined?500:options.delay;var includePadding=!!options.includePadding;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(!element)return;var resizeObserver=new ResizeObserver(debounce(function(_ref){var entry=_ref[0];var _ref2=includePadding?entry.borderBoxSize[0]:entry.contentBoxSize[0],inlineSize=_ref2.inlineSize,blockSize=_ref2.blockSize;setSize({width:inlineSize,height:blockSize});},delay));resizeObserver.observe(element);return function(){resizeObserver.disconnect();};},[delay,element,includePadding]);return size;}function debounce(callback,delay){var timeout;return function(entries,observer){clearTimeout(timeout);timeout=setTimeout(function(){callback(entries,observer);},delay);};}

/***/ }),

/***/ 43538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--layer-01":"light-dark(#f2f2f2, #262626)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--normal-transition":"300ms","--text-primary":"light-dark(#171717, #f2f2f2)","--fast-transition":"250ms","--border-secondary":"light-dark(#737373, #8c8c8c)","--support-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--support-border-success":"light-dark(#008d3c, #008d3c)","--support-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--support-border-warning":"light-dark(#e62323, #e62323)","--icon-success":"light-dark(#008d3c, #008d3c)","--icon-warning":"light-dark(#e62323, #e62323)","--support-background-success-hover":"light-dark(#bae5c5, light-dark(#e6e6e6, #333333))","--support-background-warning-hover":"light-dark(#fcc8c8, light-dark(#e6e6e6, #333333))","--border-disabled":"light-dark(#bfbfbf, #525252)","--text-disabled":"light-dark(#bfbfbf, #525252)","--layer-02":"light-dark(#ffffff, #383838)","--background":"light-dark(#ffffff, #171717)","root":"root_dwc1","contained":"contained_snuo","item":"item_EcMn","success":"success_djlE","warning":"warning_tBhi","uncontained":"uncontained_kQy1","content":"content_eG9O","triggerButton":"triggerButton_v7ly","trigger":"trigger_H4x6","triggerMainContent":"triggerMainContent_lUNS","triggerText":"triggerText_v8dS","chevronIcon":"chevronIcon_mkt7","statusIcon":"statusIcon_PzPO","panel":"panel_aCgP","hasBackground":"hasBackground_K0Q9","header":"header_KTZ_"});

/***/ }),

/***/ 76578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--text-disabled":"light-dark(#bfbfbf, #525252)","--border-primary":"light-dark(#171717, #f2f2f2)","--border-disabled":"light-dark(#bfbfbf, #525252)","--breakpoint-sm":"(max-width: 767px)","--support-border-warning":"light-dark(#e62323, #e62323)","--icon-on-color":"light-dark(#ffffff, #ffffff)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--button-background-primary-active":"light-dark(#2e7ca5, #143c50)","--button-background-primary-hover":"light-dark(#25607f, --blue-140)","--field-disabled":"light-dark(#f2f2f2, #262626)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--line-height-30":"1.25rem","wrap":"wrap_YzPY","checkboxInner":"checkboxInner_Nam1","checkbox":"checkbox_J2GB","checkboxGroup":"checkboxGroup_iAq9"});

/***/ }),

/***/ 12682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--breakpoint-md":"(min-width: 768px)","--breakpoint-lg":"(min-width: 1200px)","--breakpoint-xl":"(min-width: 1440px)","container":"container_M2rG","flex":"flex_UojW","fluid":"fluid_lF5E","col":"col_Taxb","col-1":"col-1_z0bQ","col-2":"col-2_HAuY","col-3":"col-3_oSCH","col-4":"col-4_eIG4","col-5":"col-5_JlYB","col-6":"col-6_dZDY","col-7":"col-7_UoF_","col-8":"col-8_zyia","col-9":"col-9_H77l","col-10":"col-10_zbp5","col-11":"col-11_N7LS","col-12":"col-12_HChu","col-auto":"col-auto_JGok","offset-1":"offset-1_e_Jy","offset-2":"offset-2_p5mN","offset-3":"offset-3_Dz4V","offset-4":"offset-4_Uwlu","offset-5":"offset-5_DYvi","offset-6":"offset-6_pWn0","offset-7":"offset-7_iSDK","offset-8":"offset-8_RIDq","offset-9":"offset-9_Unq7","offset-10":"offset-10_OUtT","offset-11":"offset-11_ySZ3"});

/***/ }),

/***/ 59875:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sf: () => (/* binding */ $f57aed4a881a3485$export$b47c3594eab58386)
/* harmony export */ });
/* unused harmony exports ModalProvider, useModalProvider, OverlayProvider, useModal */
/* harmony import */ var _PortalProvider_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12354);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40961);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60415);





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



const $f57aed4a881a3485$var$Context = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext(null);
function $f57aed4a881a3485$export$178405afcd8c5eb(props) {
    let { children: children } = props;
    let parent = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f57aed4a881a3485$var$Context);
    let [modalCount, setModalCount] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            parent: parent,
            modalCount: modalCount,
            addModal () {
                setModalCount((count)=>count + 1);
                if (parent) parent.addModal();
            },
            removeModal () {
                setModalCount((count)=>count - 1);
                if (parent) parent.removeModal();
            }
        }), [
        parent,
        modalCount
    ]);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($f57aed4a881a3485$var$Context.Provider, {
        value: context
    }, children);
}
function $f57aed4a881a3485$export$d9aaed4c3ece1bc0() {
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f57aed4a881a3485$var$Context);
    return {
        modalProviderProps: {
            'aria-hidden': context && context.modalCount > 0 ? true : undefined
        }
    };
}
/**
 * Creates a root node that will be aria-hidden if there are other modals open.
 */ function $f57aed4a881a3485$var$OverlayContainerDOM(props) {
    let { modalProviderProps: modalProviderProps } = $f57aed4a881a3485$export$d9aaed4c3ece1bc0();
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("div", {
        "data-overlay-container": true,
        ...props,
        ...modalProviderProps
    });
}
function $f57aed4a881a3485$export$bf688221f59024e5(props) {
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($f57aed4a881a3485$export$178405afcd8c5eb, null, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($f57aed4a881a3485$var$OverlayContainerDOM, props));
}
function $f57aed4a881a3485$export$b47c3594eab58386(props) {
    let isSSR = (0, _react_aria_ssr__WEBPACK_IMPORTED_MODULE_2__/* .useIsSSR */ .wR)();
    let { portalContainer: portalContainer = isSSR ? null : document.body, ...rest } = props;
    let { getContainer: getContainer } = (0, _PortalProvider_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useUNSAFE_PortalContext */ .gX)();
    if (!props.portalContainer && getContainer) portalContainer = getContainer();
    (0, react__WEBPACK_IMPORTED_MODULE_0__).useEffect(()=>{
        if (portalContainer === null || portalContainer === void 0 ? void 0 : portalContainer.closest('[data-overlay-container]')) throw new Error('An OverlayContainer must not be inside another container. Please change the portalContainer prop.');
    }, [
        portalContainer
    ]);
    if (!portalContainer) return null;
    let contents = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($f57aed4a881a3485$export$bf688221f59024e5, rest);
    return /*#__PURE__*/ (0, react_dom__WEBPACK_IMPORTED_MODULE_1__).createPortal(contents, portalContainer);
}
function $f57aed4a881a3485$export$33ffd74ebf07f060(options) {
    // Add aria-hidden to all parent providers on mount, and restore on unmount.
    let context = (0, $4AOtR$useContext)($f57aed4a881a3485$var$Context);
    if (!context) throw new Error('Modal is not contained within a provider');
    (0, $4AOtR$useEffect)(()=>{
        if ((options === null || options === void 0 ? void 0 : options.isDisabled) || !context || !context.parent) return;
        // The immediate context is from the provider containing this modal, so we only
        // want to trigger aria-hidden on its parents not on the modal provider itself.
        context.parent.addModal();
        return ()=>{
            if (context && context.parent) context.parent.removeModal();
        };
    }, [
        context,
        context.parent,
        options === null || options === void 0 ? void 0 : options.isDisabled
    ]);
    return {
        modalProps: {
            'data-ismodal': !(options === null || options === void 0 ? void 0 : options.isDisabled)
        }
    };
}



//# sourceMappingURL=useModal.module.js.map


/***/ }),

/***/ 79950:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $3985021b0ad6602f$export$37fb8590cf2c088c),
/* harmony export */   p: () => (/* binding */ $3985021b0ad6602f$export$f5b8910cec6cf069)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5933);
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75127);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);





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



const $3985021b0ad6602f$export$37fb8590cf2c088c = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
let $3985021b0ad6602f$var$filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $3985021b0ad6602f$export$f5b8910cec6cf069 = /*#__PURE__*/ (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__/* .createHideableComponent */ .U7)(function Input(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useContextProps */ .JT)(props, ref, $3985021b0ad6602f$export$37fb8590cf2c088c);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .useHover */ .M)(props);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria__WEBPACK_IMPORTED_MODULE_4__/* .useFocusRing */ .o)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useRenderProps */ .Sl)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.disabled || false,
            isInvalid: isInvalid
        },
        defaultClassName: 'react-aria-Input'
    });
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("input", {
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_5__/* .mergeProps */ .v)($3985021b0ad6602f$var$filterHoverProps(props), focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
});



//# sourceMappingURL=Input.module.js.map


/***/ })

}]);