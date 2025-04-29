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
const site_docs_components_select_mdx_af1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/select","title":"Select","description":"<ComponentHeader","source":"@site/docs/components/select.mdx","sourceDirName":"components","slug":"/components/select","permalink":"/pr-preview/pr-523/components/select","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Select","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 187 modules
var propsTable = __webpack_require__(35926);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/select/Select.tsx + 9 modules
var Select = __webpack_require__(82661);
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
      name: 'Select',
      friendlyName: 'Flerval, väljare, dropdown, rullgardin'
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inmatningsfält som används för att välja ett eller flera fördefinerade alternativ."
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
        href: "/pr-preview/pr-523/components/radio",
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
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
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
/* harmony default export */ const FieldError_module = ({"tokens":"\"../theme/tokens.css\"","--text-invalid":"light-dark(#e62323, #eb4e4e)","--font-family":"\"Inter\", sans-serif","fieldError":"fieldError_K9VX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/field-error/FieldError.tsx
var FieldError_FieldError=/*#__PURE__*/react.forwardRef(function(props,ref){var validation=react.useContext(FieldError/* FieldErrorContext */.C);if(!(validation!=null&&validation.isInvalid))return null;return/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,Object.assign({},props,{ref:ref,className:(0,clsx/* default */.A)(FieldError_module.fieldError,props.className)}));});

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
/* harmony default export */ const Label_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--size-02":"0.875rem","--line-height-02":"1.125rem","--size-03":"1rem","--line-height-03":"1.25rem","--text-disabled":"light-dark(#bfbfbf, #525252)","labelBase":"labelBase_BRgo","label-01":"label-01_rWfb","label-02":"label-02_LZ3P"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/Label.tsx
var _excluded=["children","className","variant","elementType"];var DEFAULT_ELEMENT='label';var Label=function Label(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'label-02':_ref$variant,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames={'label-01':Label_module['label-01'],'label-02':Label_module['label-02']};var labelProps=Object.assign({className:(0,clsx/* default */.A)(Label_module.labelBase,classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Label/* Label */.J,Object.assign({},labelProps,{children:children}));};

/***/ }),

/***/ 82661:
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
var dist_TagGroup = __webpack_require__(99628);
// EXTERNAL MODULE: ./node_modules/@react-aria/listbox/dist/useOption.mjs
var useOption = __webpack_require__(407);
// EXTERNAL MODULE: ./node_modules/@react-aria/listbox/dist/useListBoxSection.mjs
var useListBoxSection = __webpack_require__(72016);
// EXTERNAL MODULE: ./node_modules/@react-aria/listbox/dist/useListBox.mjs
var useListBox = __webpack_require__(77059);
;// ./packages/components/src/select/Select.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Select_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-disabled":"light-dark(#bfbfbf, #525252)","--border-primary":"light-dark(#171717, #f2f2f2)","--text-primary":"light-dark(#171717, #f2f2f2)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--layer-02":"light-dark(#ffffff, #383838)","--border-invalid":"light-dark(#e62323, #eb4e4e)","--layer-hover-02":"light-dark(#e6e6e6, #474747)","--layer-selected-02":"light-dark(#d9d9d9, #525252)","--layer-selected-hover-02":"light-dark(#cccccc, #5d5d5d)","--text-on-color":"light-dark(#ffffff, #ffffff)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--button-background-primary-hover":"light-dark(#25607f, #25607f)","--field-disabled":"light-dark(#f2f2f2, #262626)","--border-disabled":"light-dark(#bfbfbf, #525252)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--button-background-disabled":"light-dark(#f2f2f2, #262626)","--text-invalid":"light-dark(#e62323, #eb4e4e)","selectAllButton":"selectAllButton_vETM","selectLabel":"selectLabel_ym7d","selectLabelDisabled":"selectLabelDisabled_q13p","button":"button_qOaA","buttonOpen":"buttonOpen_JL6G","icon":"icon_roiA","buttonDisabled":"buttonDisabled_hGbG","multiSelect":"multiSelect_fCqw","fieldError":"fieldError_DzbR","selectContainer":"selectContainer_ChZ6","tagGroup":"tagGroup_t6GX","popover":"popover_Bl6D","listBox":"listBox_BiFm","listBoxItem":"listBoxItem_yOJV","listBoxItemSelected":"listBoxItemSelected_USLD","listBoxItemDisabled":"listBoxItemDisabled_IkTb","listBoxItemFocused":"listBoxItemFocused_dAO1","listBoxItemFocusVisible":"listBoxItemFocusVisible_SKwl","listBoxItemCheckmark":"listBoxItemCheckmark_Dz5t","selectValueTag":"selectValueTag_Bx1C","selectValueTagDisabled":"selectValueTagDisabled_hNWH","truncate":"truncate_J6cE","clearButton":"clearButton_p8du","selectSectionHeading":"selectSectionHeading_AOh9","checkboxContainer":"checkboxContainer_u2A7","checkbox":"checkbox_BLsk"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(45773);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(20143);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/select/SelectListBox.tsx
var Option=function Option(_ref){var _clsx;var item=_ref.item,state=_ref.state;var ref=react.useRef(null);var _useOption=(0,useOption/* useOption */.x)({key:item.key},state,ref),optionProps=_useOption.optionProps,isDisabled=_useOption.isDisabled,isSelected=_useOption.isSelected,isFocused=_useOption.isFocused,isFocusVisible=_useOption.isFocusVisible;return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",Object.assign({},optionProps,{ref:ref,className:(0,clsx/* default */.A)(Select_module.listBoxItem,(_clsx={},_clsx[Select_module.listBoxItemDisabled]=isDisabled,_clsx[Select_module.listBoxItemFocused]=isFocused,_clsx[Select_module.listBoxItemFocusVisible]=isFocusVisible,_clsx[Select_module.listBoxItemSelected]=isSelected,_clsx)),children:[state.selectionMode==='multiple'&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.checkboxContainer,children:/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:Select_module.checkbox,type:"checkbox",disabled:isDisabled,checked:isSelected,readOnly:true})}),typeof item.rendered==='string'?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"truncate block",children:item.rendered}):item.rendered,isSelected&&state.selectionMode==='single'?/*#__PURE__*/(0,jsx_runtime.jsx)(check/* default */.A,{size:20,className:Select_module.listBoxItemCheckmark}):null]}));};var SelectListBox_Section=function Section(_ref2){var section=_ref2.section,state=_ref2.state;var _useListBoxSection=(0,useListBoxSection/* useListBoxSection */.u)({heading:section.rendered,'aria-label':section['aria-label']}),itemProps=_useListBoxSection.itemProps,headingProps=_useListBoxSection.headingProps,groupProps=_useListBoxSection.groupProps;return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",Object.assign({},itemProps,{className:"",children:[section.rendered&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,Object.assign({},headingProps,{variant:"label-02",elementType:"span",className:Select_module.selectSectionHeading,children:section.rendered})),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",Object.assign({},groupProps,{children:Array.from(section.childNodes).map(function(node){return/*#__PURE__*/(0,jsx_runtime.jsx)(Option,{item:node,state:state},node.key);})}))]}));};var SelectListBox=function SelectListBox(props){var ref=react.useRef(null);var _props$listBoxRef=props.listBoxRef,listBoxRef=_props$listBoxRef===void 0?ref:_props$listBoxRef,state=props.state;var _useListBox=(0,useListBox/* useListBox */.X)(Object.assign({},props,{// When Select is clearable, do not clear the selection once ESC key is pressed, see https://github.com/adobe/react-spectrum/blob/main/packages/@react-aria/selection/src/useSelectableCollection.ts#L226
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
function useMultiSelectState(props){var _useState=(0,react.useState)(false),isFocused=_useState[0],setFocused=_useState[1];var triggerState=(0,useMenuTriggerState/* useMenuTriggerState */.I)(props);var isSingleSelect=props.selectionMode==='single';var multiSelectListState=useMultiSelectListState(Object.assign({},props,{onSelectionChange:function onSelectionChange(keys){props.onSelectionChange&&props.onSelectionChange(keys);if(isSingleSelect){triggerState.close();}}}));var validationState=(0,useFormValidationState/* useFormValidationState */.KZ)(Object.assign({},props,{validationBehavior:'native',value:multiSelectListState.selectedKeys}));var isCollectionEmpty=multiSelectListState.collection.size===0;var isAnyKeySelected=!!multiSelectListState.selectedKeys.size;// Reset validation for single selects when the selected key changes.
(0,react.useEffect)(function(){if(isSingleSelect&&isAnyKeySelected){validationState.resetValidation();validationState.commitValidation();}},[isAnyKeySelected,isSingleSelect,validationState]);return Object.assign({},multiSelectListState,triggerState,{close:function close(){triggerState.close();if(isAnyKeySelected){validationState.resetValidation();validationState.commitValidation();}},open:function open(){// Don't open if the collection is empty.
if(!isCollectionEmpty){triggerState.open();}},toggle:function toggle(focusStrategy){if(!isCollectionEmpty){triggerState.toggle(focusStrategy);}},isFocused:isFocused,setFocused:setFocused},validationState);}
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
;// ./packages/components/src/tag/Tag.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tag_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--field-01":"light-dark(#f2f2f2, #262626)","--text-disabled":"light-dark(#bfbfbf, #525252)","--field-active-01":"light-dark(#d9d9d9, #383838)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--icon-primary":"light-dark(#171717, #f2f2f2)","button":"button_Loby","tag":"tag_WAeO","dismissable":"dismissable_Tfml","tagText":"tagText_f_lx","tagList":"tagList_sxPC"});
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(35518);
;// ./packages/components/src/tag/Tag.tsx
var _excluded=["children"],_excluded2=["children","dismissable","className"];var TagGroup=function TagGroup(_ref){var children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagGroup */.CR,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagList */.LY,{className:Tag_module.tagList,children:children})}));};var Tag=function Tag(_ref2){var children=_ref2.children,dismissable=_ref2.dismissable,className=_ref2.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_TagGroup/* Tag */.vw,Object.assign({className:(0,clsx/* default */.A)(Tag_module.tag,dismissable&&Tag_module.dismissable,className)},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Tag_module.tagText,children:children}),dismissable&&/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",size:"small",className:Tag_module.button,slot:"remove",children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20})})]}));};
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
var Select_excluded=["selectionMode","errorPosition"],Select_excluded2=["options"];var SelectComponent=/*#__PURE__*/react.forwardRef(function(_ref,forwardedRef){var _clsx2,_clsx3,_clsx4;var _ref$selectionMode=_ref.selectionMode,selectionMode=_ref$selectionMode===void 0?'single':_ref$selectionMode,_ref$errorPosition=_ref.errorPosition,errorPosition=_ref$errorPosition===void 0?'top':_ref$errorPosition,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,Select_excluded);var props=Object.assign({selectionMode:selectionMode},rest);var autoFocus=props.autoFocus,className=props.className,excludeFromTabOrder=props.excludeFromTabOrder,_props$isClearable=props.isClearable,isClearable=_props$isClearable===void 0?true:_props$isClearable,isDisabled=props.isDisabled,isSelectableAll=props.isSelectableAll,label=props.label,description=props.description,placeholder=props.placeholder,showTags=props.showTags,errorMessage=props.errorMessage;var refAllButton=(0,react.useRef)(null);var ref=(0,useObjectRef/* useObjectRef */.U)(forwardedRef);var disallowEmptySelection=!isClearable;var state=useMultiSelectState(Object.assign({},props,{disallowEmptySelection:disallowEmptySelection}));var _useMultiSelect=useMultiSelect(Object.assign({},props,{disallowEmptySelection:disallowEmptySelection}),state,ref),labelProps=_useMultiSelect.labelProps,triggerProps=_useMultiSelect.triggerProps,valueProps=_useMultiSelect.valueProps,menuProps=_useMultiSelect.menuProps;var _useButton=(0,useButton/* useButton */.s)(Object.assign({},triggerProps,{autoFocus:autoFocus,excludeFromTabOrder:excludeFromTabOrder,isDisabled:isDisabled}),ref),buttonProps=_useButton.buttonProps;var isActive=state.isOpen||state.selectedItems;var isAllSelection=state.selectionManager.isSelectAll;var isIndeterminateSelection=!isAllSelection&&!state.selectionManager.isEmpty;var hasClearButton=isClearable&&state.selectedItems;var hasHeader=isSelectableAll;var handleClear=function handleClear(){return state.selectionManager.clearSelection();};var handleSelectAll=function handleSelectAll(){return state.selectionManager.toggleSelectAll();};var handleRemove=function handleRemove(key){return state.selectionManager.toggleSelection(key);};var _useObserveElement=(0,useObserveElement/* default */.A)(ref.current),buttonWidth=_useObserveElement.width;var formatItems=function formatItems(items){var _clsx;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(Select_module.selectValueTag,(_clsx={},_clsx[Select_module.selectValueTagDisabled]=isDisabled,_clsx)),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Select_module.truncate,style:{maxWidth:buttonWidth-64},children:items.length>1?items.length+" valda":items[0].textValue}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{disabled:isDisabled,"aria-label":"Rensa alla",className:Select_module.clearButton,onClick:function onClick(){var _ref$current;handleClear();ref==null||(_ref$current=ref.current)==null||_ref$current.focus();},children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{width:20,height:20})})]});};(0,react.useEffect)(function(){if(refAllButton.current){refAllButton.current.indeterminate=isIndeterminateSelection;}},[isIndeterminateSelection]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HiddenMultiSelect,{isDisabled:props.isDisabled,isRequired:props.isRequired,name:props.name,state:state,triggerRef:ref,label:props.label+'-hidden'}),/*#__PURE__*/(0,jsx_runtime.jsxs)(TextField/* TextField */.A,Object.assign({},props,{className:(0,clsx/* default */.A)([Select_module.multiSelect],(_clsx2={},_clsx2[Select_module.multiSelectOpen]=state.isOpen,_clsx2),className),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.multiSelect,children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,Object.assign({variant:"label-02"},labelProps,{slot:'label',className:(0,clsx/* default */.A)(Select_module.selectLabel,(_clsx3={},_clsx3[Select_module.selectLabelActive]=isActive,_clsx3[Select_module.selectLabelDisabled]=isDisabled,_clsx3)),children:label})),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:'description',children:description}),errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:errorMessage}),state.displayValidation.validationErrors.length?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.fieldError,children:errorMessage||state.displayValidation.validationErrors.map(function(error){return/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:error},error);})}):null]}),/*#__PURE__*/(0,jsx_runtime.jsx)(FocusRing/* FocusRing */.v,{focusRingClass:Select_module.buttonFocused,autoFocus:autoFocus,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.selectContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",Object.assign({},buttonProps,mergeProps/* mergeProps */.v,{className:(0,clsx/* default */.A)(Select_module.button,(_clsx4={},_clsx4[Select_module.buttonOpen]=state.isOpen,_clsx4[Select_module.buttonActive]=state.selectedItems,_clsx4[Select_module.buttonDisabled]=isDisabled,_clsx4)),"data-invalid":state.displayValidation.validationErrors.length>0||state.displayValidation.isInvalid,type:"button",ref:ref,children:[state.selectionMode==='multiple'&&!state.selectedItems?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:placeholder}):null,state.selectionMode==='single'?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:state.selectedItems?state.selectedItems[0].textValue:placeholder}):null,/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.icon,"aria-hidden":"true",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20})})]})),state.selectionMode==='multiple'&&state.selectedItems?/*#__PURE__*/(0,jsx_runtime.jsx)("span",Object.assign({},valueProps,{children:formatItems(state.selectedItems)})):null]})}),errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:errorMessage}),state.displayValidation.validationErrors.length?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.fieldError,children:errorMessage||state.displayValidation.validationErrors.map(function(error){return/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:error},error);})}):null]}),state.isOpen&&/*#__PURE__*/(0,jsx_runtime.jsxs)(SelectPopover,{isOpen:state.isOpen,onClose:state.close,className:Select_module.popover,triggerRef:ref,children:[hasHeader&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[isSelectableAll&&/*#__PURE__*/(0,jsx_runtime.jsx)(FocusRing/* FocusRing */.v,{focusRingClass:Select_module.listItemfocusRing,children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button",onClick:handleSelectAll,className:Select_module.selectAllButton,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.listBoxItem,tabIndex:-1,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.checkboxContainer,children:/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:Select_module.checkbox,type:"checkbox",checked:isAllSelection,ref:refAllButton,readOnly:true,tabIndex:-1})}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:'Select All'})]})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"selectDivider"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectListBox,Object.assign({},menuProps,{state:state})),hasClearButton&&false&&/*#__PURE__*/0]})]}),showTags&&state.selectedItems!==null&&/*#__PURE__*/(0,jsx_runtime.jsx)(TagGroup,Object.assign({"aria-label":'Selected Items',selectionBehavior:'toggle',onRemove:function onRemove(keys){return handleRemove(Array.from(keys)[0]);},className:Select_module.tagGroup},mergeProps/* mergeProps */.v,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagList */.LY,{items:state.selectedItems,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Tag,{textValue:item.textValue,id:item.key,dismissable:true,isDisabled:isDisabled,children:item.textValue},item.key);}})}))]}))]});});var Select=/*#__PURE__*/react.forwardRef(function(_ref2,ref){var options=_ref2.options,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,Select_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(SelectComponent,Object.assign({},props,{items:options,ref:ref,children:function children(section){return section.children?/*#__PURE__*/(0,jsx_runtime.jsx)(Section/* Section */.w,{items:section.children,title:section.name,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Item/* Item */.q,{textValue:item.textValue,children:item.name});}},section.name):/*#__PURE__*/(0,jsx_runtime.jsx)(Item/* Item */.q,{textValue:section.textValue,children:section.name});}}));});Select.displayName='Select';

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
/* harmony default export */ const Text_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--size-02":"0.875rem","--size-03":"1rem","--line-height-02":"1.125rem","--line-height-03":"1.25rem","--line-height-04":"1.375rem","--line-height-05":"1.5rem","--text-disabled":"light-dark(#bfbfbf, #525252)","body-01":"body-01_whJM","body-02":"body-02_Xi1v","description":"description_XYgX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","variant","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'body-02':_ref$variant,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames={'body-01':Text_module['body-01'],'body-02':Text_module['body-02']};var textProps=Object.assign({className:(0,clsx/* default */.A)(rest.slot==='description'?Text_module.description:classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

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

/***/ 48697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);


//# sourceMappingURL=x.js.map


/***/ }),

/***/ 59875:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sf: () => (/* binding */ $f57aed4a881a3485$export$b47c3594eab58386)
/* harmony export */ });
/* unused harmony exports ModalProvider, useModalProvider, OverlayProvider, useModal */
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


/***/ })

}]);