"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6530],{

/***/ 19044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28453);
/* harmony import */ var _site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29511);
/* harmony import */ var _midas_ds_textfield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42619);
/* harmony import */ var _midas_ds_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81706);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80697);
/* harmony import */ var _midas_ds_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24926);


const frontMatter = {
	title: 'Release 13',
	description: '.',
	slug: 'release-13',
	tags: [
		'releaser'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/pr-preview/pr-136/blog/release-13",
  "source": "@site/blog/release13.mdx",
  "title": "Release 13",
  "description": ".",
  "date": "2024-10-15T12:30:18.000Z",
  "tags": [
    {
      "inline": true,
      "label": "releaser",
      "permalink": "/pr-preview/pr-136/blog/tags/releaser"
    }
  ],
  "readingTime": 2.09,
  "hasTruncateMarker": true,
  "authors": [],
  "frontMatter": {
    "title": "Release 13",
    "description": ".",
    "slug": "release-13",
    "tags": [
      "releaser"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Release 14",
    "permalink": "/pr-preview/pr-136/blog/release-14"
  },
  "nextItem": {
    "title": "Release 12",
    "permalink": "/pr-preview/pr-136/blog/release-12"
  }
};
const assets = {
"authorsImageUrls": [],
};

/*truncate*/







const toc = [{
  "value": "Nya instruktioner för er som använder Remix",
  "id": "nya-instruktioner-för-er-som-använder-remix",
  "level": 2
}, {
  "value": "Remix med Vite",
  "id": "remix-med-vite",
  "level": 4
}, {
  "value": "Äldre Remix - Classic Remix Compiler",
  "id": "äldre-remix---classic-remix-compiler",
  "level": 4
}, {
  "value": "Ikoner på knappar",
  "id": "ikoner-på-knappar",
  "level": 2
}, {
  "value": "Validera personnummer",
  "id": "validera-personnummer",
  "level": 2
}, {
  "value": "Table",
  "id": "table",
  "level": 2
}, {
  "value": "UI-kit finns nu på Docwebben",
  "id": "ui-kit-finns-nu-på-docwebben",
  "level": 2
}, {
  "value": "Mindre justeringar",
  "id": "mindre-justeringar",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Nedan är en sammanfattning av nyheterna i release 13."
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "nya-instruktioner-för-er-som-använder-remix",
      children: "Nya instruktioner för er som använder Remix"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Vi har skrivit om grunden för hur komponenterna bundlas. Detta kommer lösa ett problem som upplevts av att komponenterna får sin styling \"försent\" eller att de \"glitchar\" lite när sidan laddas. För att använda komponenterna från designsystemet i Remix krävs ett litet tillägg i config för att CSS ska ladda korrekt. Instruktionerna finns också under ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/get-started/develop/",
        children: "Kom igång för utvecklare"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "remix-med-vite",
      children: "Remix med Vite"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{2-4} title=\"vite.config.ts\"",
        children: "export default defineConfig({\n  ssr: {\n    noExternal: [/^@midas-ds\\/.+/],\n  }\n})\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "äldre-remix---classic-remix-compiler",
      children: "Äldre Remix - Classic Remix Compiler"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Följ detta: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://remix.run/docs/en/main/styling/bundling",
        children: "CSS Bundling"
      }), " och ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://remix.run/docs/en/main/styling/css-imports",
        children: "CSS Imports"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"root.tsx\"",
        children: "import { cssBundleHref } from '@remix-run/css-bundle'\nimport type { LinksFunction } from '@remix-run/node'\n\n// ...\n\nexport const links: LinksFunction = () => [\n  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),\n  // ...\n]\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        metastring: "{4} title=\"remix.config.js\"",
        children: "// ...\nexport default {\n  // ...\n  serverDependenciesToBundle: [/^@midas-ds\\/.+/],\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "ikoner-på-knappar",
      children: "Ikoner på knappar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Våra knappar kan nu ha en ikon till vänster om texten. Använd ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "icon"
      }), " för att slå på det."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_midas_ds_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$, {
      variant: "tertiary",
      icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
      children: "Lägg till"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "validera-personnummer",
      children: "Validera personnummer"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Vi har skapat en förlåtande validering för personnummer baserat på Försäkringskassans referensimplementation. Den tillåter de flesta varianterna av ett personnummer så länge det är 10 eller 12 siffror. Använd ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "validationType=\"ssn\""
      }), " på Textfield för att slå på den. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/components/textfield/#personnummer",
        children: "Läs mer om det här"
      }), ". Fler valideringsmönster kommer tillkomma framöver. Det går även att lägga in en egen RegExp i ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "validationType"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      scope: {
        TextField: _midas_ds_textfield__WEBPACK_IMPORTED_MODULE_2__/* .TextField */ .A_
      },
      children: `<TextField 
  name="ssn"
  label="Personnummer"
  validationType="ssn"
  errorMessage="Fel format för ett personnummer"
/>`
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "table",
      children: "Table"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Dokumentationen för ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "<Table />"
      }), " har tillkommit samt en ny design ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "striped"
      }), " går att aktivera på tabellen."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      scope: {
        Table: _midas_ds_table__WEBPACK_IMPORTED_MODULE_4__/* .Table */ .XI,
        TableHeader: _midas_ds_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHeader */ .A0,
        TableBody: _midas_ds_table__WEBPACK_IMPORTED_MODULE_4__/* .TableBody */ .BF,
        Column: _midas_ds_table__WEBPACK_IMPORTED_MODULE_4__/* .Column */ .VP,
        Row: _midas_ds_table__WEBPACK_IMPORTED_MODULE_4__/* .Row */ .fI,
        Cell: _midas_ds_table__WEBPACK_IMPORTED_MODULE_4__/* .Cell */ .fh
      },
      children: `<Table
  striped
  aria-label="Frukter"
  selectionMode="multiple"
>
  <TableHeader columns={columns}>
      {(column) => (
          <Column isRowHeader={column.isRowHeader}>{column.name}</Column>
      )}
  </TableHeader>
  <TableBody items={rows}>
      {(item) => (
          <Row columns={columns}>
              {(column) => <Cell>{item[column.id]}</Cell>}
          </Row>
      )}
  </TableBody>
</Table>`
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "ui-kit-finns-nu-på-docwebben",
      children: "UI-kit finns nu på Docwebben"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Vårt UI-kit till XD finns nu att ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/get-started/design/",
        children: "ladda ner"
      }), " här på docwebben. UI-kitet uppdateras löpande!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "mindre-justeringar",
      children: "Mindre justeringar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "I förra releasen fick flertalet komponenter lite väl många dependencies. Det är nu åtgärdat."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "FlexItem"
        }), " och ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "GridItem"
        }), " accepterar nu samtliga egenskaper som en vanlig ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "div"
        }), ", främst efterfrågat är såklart ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "className"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Chevronikonen på ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Select"
        }), " och ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ComboBox"
        }), " animeras nu när man öppnar dem"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 29511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ CodeBlock)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.mjs
var dist = __webpack_require__(71765);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(44586);
// EXTERNAL MODULE: ./node_modules/react-live/dist/index.mjs + 58 modules
var react_live_dist = __webpack_require__(86850);
;// ./apps/docs/src/components/CodeBlock/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"playgroundEditor":"playgroundEditor_hiaS","playgroundPreview":"playgroundPreview_d6Ft"});
// EXTERNAL MODULE: ./apps/docs/src/components/examples/fruits.ts
var fruits = __webpack_require__(46638);
// EXTERNAL MODULE: ./packages/accordion/src/index.ts + 22 modules
var src = __webpack_require__(17986);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/CodeBlock/CodeBlock.tsx
var _excluded=["children","transformCode"];Array.prototype.shuffled=function(count){if(count===void 0){count=5;}var result=this.sort(function(){return Math.random()-Math.random();}).slice(0,count);return count===1?result[0]:result;};var columns=[{name:'Namn',id:'name',isRowHeader:true},{name:'Beskrivning',id:'desc'}];var rows=fruits/* fruits */.g.shuffled(7).map(function(fruit){return{id:fruit.value,name:fruit.name,desc:fruit.description};});function Playground(_ref){var children=_ref.children,transformCode=_ref.transformCode,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var theme=usePrismTheme();var _React$useState=react.useState(false),isOpened=_React$useState[0],setIsOpened=_React$useState[1];var scope=Object.assign({columns:columns,rows:rows,fruits:fruits/* fruits */.g},props.scope,{isOpened:isOpened,setIsOpened:setIsOpened});return/*#__PURE__*/(0,jsx_runtime.jsxs)(react_live_dist/* LiveProvider */.Q,Object.assign({code:children.replace(/\n$/,''),transformCode:transformCode||function(code){return code+";";},theme:theme},props,{scope:scope,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.playgroundPreview,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(react_live_dist/* LivePreview */.pA,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(react_live_dist/* LiveError */.p1,{})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.playgroundEditor,children:/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Accordion */.nD,{headingTag:"h3",type:"multiple",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* AccordionItem */.As,{value:"example",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionTrigger */.$m,{children:"Exempelkod"}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionContent */.ub,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(react_live_dist/* LiveEditor */.w,{})})]})})})]}));}/* harmony default export */ const CodeBlock = (Playground);/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var usePrismTheme=function usePrismTheme(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.A)(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig.themeConfig.prism,prism=_useDocusaurusContext2===void 0?{}:_useDocusaurusContext2;var prismTheme=dist/* themes */.Zj.github;return prismTheme;};

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
/* harmony default export */ const Checkbox_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","black":"#000000","primaryBackground":"#143c50","blue80":"#5897b8","blue130":"#25607f","signalRed10":"#ffdfdf","signalRed100":"#e62323","signalRed130":"#b31b1b","white":"#ffffff","gray10":"#f2f2f2","gray40":"#cccccc","gray100":"#808080","gray50":"#bfbfbf","gray20":"#e6e6e6","regularWeight":"400","mediumWeight":"500","smBreakpoint":"(max-width: 767px)","borderSecondary":"#b3b3b3","wrap":"wrap_gmzk","checkboxInner":"checkboxInner_QnDn","checkbox":"checkbox_Uv4H","checkboxGroup":"checkboxGroup_uby9"});
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
var toggleAll=function toggleAll(){if(isAllSelected!=='all'){setIsAllSelected('all');return state.setValue(['toggleAll'].concat(childValues));}setIsAllSelected('none');return state.setValue([]);};//listen and change the select all accordingly
react.useEffect(function(){var amountOfChildren=childValues.length;var totalAmount=childValues.length+1;var currentAmount=state.value.length;if(currentAmount===0)setIsAllSelected('none');if(currentAmount>0&&currentAmount<amountOfChildren)setIsAllSelected('some');if(currentAmount!==totalAmount)state.removeValue('toggleAll');if(currentAmount===amountOfChildren&&!state.value.includes('toggleAll')){state.addValue('toggleAll');setIsAllSelected('all');}// eslint-disable-next-line react-hooks/exhaustive-deps
},[childValues.length,state.value]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox,{value:"toggleAll",isSelected:isAllSelected==='all',isIndeterminate:isAllSelected==='some',onChange:function onChange(){return toggleAll();},children:"V\xE4lj alla"});};return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Checkbox/* CheckboxGroup */.$Q,Object.assign({className:Checkbox_module.checkboxGroup},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(src/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Group/* Group */.Y,{className:Checkbox_module.wrap,children:[showSelectAll&&/*#__PURE__*/(0,jsx_runtime.jsx)(ToogleAll,{}),children]})})}));};
;// ./packages/checkbox/src/lib/index.ts

;// ./packages/checkbox/src/index.ts


/***/ }),

/***/ 24926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fh: () => (/* reexport */ Cell),
  VP: () => (/* reexport */ Column),
  fI: () => (/* reexport */ Row),
  XI: () => (/* reexport */ Table),
  BF: () => (/* reexport */ dist_Table/* TableBody */.BF),
  A0: () => (/* reexport */ TableHeader)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(20454);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/table/src/lib/Table.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Table_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","gray10":"#f2f2f2","gray30":"#d9d9d9","gray40":"#cccccc","gray60":"#b3b3b3","mediumWeight":"500","cell":"cell_AsQp","table":"table_FqqN","narrow":"narrow_WZlN","striped":"striped__cZi","row":"row_evpi","tableHeader":"tableHeader_gdzy","column":"column_Ddxt"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Table.mjs + 55 modules
var dist_Table = __webpack_require__(53790);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs + 1 modules
var Button = __webpack_require__(44080);
// EXTERNAL MODULE: ./packages/checkbox/src/index.ts + 4 modules
var src = __webpack_require__(61813);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/grip-vertical.js
var grip_vertical = __webpack_require__(21436);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up-wide-narrow.js
var arrow_up_wide_narrow = __webpack_require__(4804);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down-narrow-wide.js
var arrow_down_narrow_wide = __webpack_require__(85785);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/table/src/lib/Table.tsx
'use client';var _excluded=["narrow","striped"],_excluded2=["id","columns","children"],_excluded3=["children"];var Table=function Table(_ref){var narrow=_ref.narrow,striped=_ref.striped,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames=(0,clsx/* default */.A)(Table_module.table,narrow&&Table_module.narrow,striped&&Table_module.striped);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Table/* Table */.XI,Object.assign({className:classNames},rest));};var TableHeader=function TableHeader(_ref2){var columns=_ref2.columns,children=_ref2.children;var _useTableOptions=(0,dist_Table/* useTableOptions */.mz)(),selectionBehavior=_useTableOptions.selectionBehavior,selectionMode=_useTableOptions.selectionMode,allowsDragging=_useTableOptions.allowsDragging;return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_Table/* TableHeader */.A0,{className:Table_module.tableHeader,children:[allowsDragging&&/*#__PURE__*/(0,jsx_runtime.jsx)(Column,{}),selectionBehavior==='toggle'&&/*#__PURE__*/(0,jsx_runtime.jsx)(Column,{width:50,children:selectionMode==='multiple'&&/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Checkbox */.S,{slot:"selection"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(CollectionBuilder/* Collection */.pM,{items:columns,children:children})]});};var Row=function Row(_ref3){var id=_ref3.id,columns=_ref3.columns,children=_ref3.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref3,_excluded2);var _useTableOptions2=(0,dist_Table/* useTableOptions */.mz)(),selectionBehavior=_useTableOptions2.selectionBehavior,allowsDragging=_useTableOptions2.allowsDragging;return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_Table/* Row */.fI,Object.assign({id:id,className:(0,clsx/* default */.A)(Table_module.row)},rest,{children:[allowsDragging&&/*#__PURE__*/(0,jsx_runtime.jsx)(Cell,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"drag",children:/*#__PURE__*/(0,jsx_runtime.jsx)(grip_vertical/* default */.A,{size:20})})}),selectionBehavior==='toggle'&&/*#__PURE__*/(0,jsx_runtime.jsx)(Cell,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Checkbox */.S,{slot:"selection"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(CollectionBuilder/* Collection */.pM,{items:columns,children:children})]}));};var Column=function Column(_ref4){var _children=_ref4.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref4,_excluded3);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Table/* Column */.VP,Object.assign({className:Table_module.column},rest,{children:function children(_ref5){var allowsSorting=_ref5.allowsSorting,sortDirection=_ref5.sortDirection;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[_children,allowsSorting&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",className:"sort-indicator",children:sortDirection==='ascending'?/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_up_wide_narrow/* default */.A,{size:20}):/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_down_narrow_wide/* default */.A,{size:20})})]});}}));};var Cell=function Cell(_ref6){var rest=Object.assign({},((0,objectDestructuringEmpty/* default */.A)(_ref6),_ref6));return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Table/* Cell */.fh,Object.assign({className:Table_module.cell},rest));};
;// ./packages/table/src/index.ts


/***/ }),

/***/ 42619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  oi: () => (/* reexport */ InputWrapper),
  A_: () => (/* reexport */ TextField),
  Ql: () => (/* reexport */ TextField_module)
});

// UNUSED EXPORTS: ssnRegEx

;// ./packages/textfield/src/lib/TextField.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TextField_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","signalRed10":"#ffdfdf","gray10":"#f2f2f2","gray20":"#e6e6e6","gray50":"#bfbfbf","black":"#000000","signalRed100":"#e62323","mediumWeight":"500","regularWeight":"400","inputText":"#1f1f1f","inputField":"inputField_kJaH","inputWrapper":"inputWrapper_RfiT","label":"label_Pxyb","text":"text_CvV8","fieldError":"fieldError_kz46","passwordText":"passwordText_Gtww","input":"input_B57n","wrap":"wrap_g1RZ","passwordButton":"passwordButton_bCY3"});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextField.mjs
var dist_TextField = __webpack_require__(32945);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(418);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 3 modules
var src = __webpack_require__(81706);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/textfield/src/lib/TextField.tsx
'use client';var _excluded=["label","description","errorMessage","validationType"];var TextField=function TextField(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,validationType=_ref.validationType,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _React$useState=react.useState(''),input=_React$useState[0],setInput=_React$useState[1];var _React$useState2=react.useState(true),isValid=_React$useState2[0],setIsValid=_React$useState2[1];var validateInput=function validateInput(value){if(validationType===undefined)return true;if(validationType==='ssn')setIsValid(ssnRegEx.test(value));if(validationType instanceof RegExp)setIsValid(new RegExp(validationType).test(value));};var handleInputBlur=function handleInputBlur(e){var value=e.target.value;validateInput(value);};var handleInputChange=function handleInputChange(e){setInput(e.target.value);};return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TextField/* TextField */.A,Object.assign({className:TextField_module.inputField,isInvalid:validationType!==undefined?!isValid:props.isInvalid},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(InputWrapper,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,{type:props.type,className:TextField_module.input,onChange:handleInputChange,onBlur:handleInputBlur}),/*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField,{type:props.type,input:input})]})})}));};var PasswordField=function PasswordField(_ref2){var type=_ref2.type,input=_ref2.input;var _React$useState3=react.useState(false),showPassword=_React$useState3[0],setShowPassword=_React$useState3[1];if(type==='password')return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showPassword&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module.passwordText,children:input}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$,{variant:"tertiary",onPress:function onPress(){return setShowPassword(!showPassword);},className:TextField_module.passwordButton,children:showPassword?'Dölj':'Visa'})]});return null;};var InputWrapper=function InputWrapper(_ref3){var label=_ref3.label,description=_ref3.description,errorMessage=_ref3.errorMessage,children=_ref3.children;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module.inputWrapper,children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{className:TextField_module.label,children:label}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module.text,children:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{className:TextField_module.fieldError,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(triangle_alert/* default */.A,{size:20,"aria-hidden":true}),errorMessage]})}),children]});};var ssnRegEx=new RegExp('^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$');
;// ./packages/textfield/src/lib/index.ts

;// ./packages/textfield/src/index.ts


/***/ }),

/***/ 80697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Plus)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Plus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);


//# sourceMappingURL=plus.js.map


/***/ })

}]);