"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8116],{

/***/ 23704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_table_mdx_903_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-table-mdx-903.json
const site_docs_components_table_mdx_903_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/table","title":"Table","description":"En enkel tabell för att visualisera data.","source":"@site/docs/components/table.mdx","sourceDirName":"components","slug":"/components/table","permalink":"/pr-preview/pr-556/components/table","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Table","description":"En enkel tabell för att visualisera data.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./packages/components/src/table/Table.tsx + 1 modules
var Table = __webpack_require__(7465);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Table.mjs + 55 modules
var dist_Table = __webpack_require__(43444);
;// ./apps/docs/src/components/examples/table/TableExamples.tsx
var columns=[{name:'Namn',id:'name'},{name:'Beskrivning',id:'description',width:'max-content'}];var rows=[{id:'apple',name:'Apple',description:'Pink lady is a good one'},{id:'banana',name:'Banana',description:'A yellow fruit'},{id:'pear',name:'Pear',description:'Usually green'}];var BasicExample=function BasicExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* Table */.XI,{"aria-label":"Fruit",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* TableHeader */.A0,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Column */.VP,{isRowHeader:true,children:"Name"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Column */.VP,{children:"Description"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_Table/* TableBody */.BF,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* Row */.fI,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Cell */.fh,{children:"Banana"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Cell */.fh,{children:"A yellow fruit"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* Row */.fI,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Cell */.fh,{children:"Pear"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Cell */.fh,{children:"Usually green"})]})]})]})});};var FullExample=function FullExample(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* Table */.XI,Object.assign({"aria-label":"Fruit"},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* TableHeader */.A0,{columns:columns,children:function children(column){return/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Column */.VP,{children:column.name});}}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Table/* TableBody */.BF,{items:rows,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Row */.fI,{columns:columns,children:function children(column){return/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Cell */.fh,{children:item[column.id]});}});}})]}))});};var ControlledExample=function ControlledExample(props){var _React$useState=react.useState(new Set(['apple'])),selectedKeys=_React$useState[0],setSelectedKeys=_React$useState[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FullExample,Object.assign({selectedKeys:selectedKeys,onSelectionChange:setSelectedKeys,selectionMode:"multiple"},props)),"Valda rader: ",Array.from(selectedKeys).join(', ')]});};
;// ./apps/docs/docs/components/table.mdx


const frontMatter = {
	title: 'Table',
	description: 'En enkel tabell för att visualisera data.',
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
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "Standardtabell",
  "id": "standardtabell",
  "level": 3
}, {
  "value": "Kompakt tabell",
  "id": "kompakt-tabell",
  "level": 3
}, {
  "value": "Valbara rader",
  "id": "valbara-rader",
  "level": 3
}, {
  "value": "Kontrollerade val",
  "id": "kontrollerade-val",
  "level": 4
}, {
  "value": "Randiga rader",
  "id": "randiga-rader",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Table",
  "id": "table",
  "level": 3
}, {
  "value": "TableHeader",
  "id": "tableheader",
  "level": 3
}, {
  "value": "Row",
  "id": "row",
  "level": 3
}, {
  "value": "Column",
  "id": "column",
  "level": 3
}, {
  "value": "Cell",
  "id": "cell",
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
      name: "Table",
      friendlyName: "Tabell"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Komponent för att visualisera data. Kan kombineras med andra komponenter, till exemepel ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/select",
        children: "Select"
      }), ",\nför att filtrera eller ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/search-field",
        children: "SearchField"
      }), " för att söka osv."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Table aria-label='Fruit'>\n  <TableHeader>\n    <Column>Name</Column>\n    <Column>Description</Column>\n  </TableHeader>\n  <TableBody>\n    <Row>\n      <Cell>Banana</Cell>\n      <Cell>A yellow fruit</Cell>\n    </Row>\n    <Row>\n      <Cell>Pear</Cell>\n      <Cell>Usually green</Cell>\n    </Row>\n  </TableBody>\n</Table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(BasicExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        children: "import { Table, TableHeader, Column, TableBody, Row, Cell } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För en tabell behövs data för hur kolumnerna och raderna ska populeras. Vi kommer basera samliga tabeller på följande dataset.\nBörja med att sätta upp dina kolumner. Nycklarna på raderna ska sedan referera till värdet för kolumnernas ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), ", i det här fallet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "description"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "const columns = [\n  { name: 'Namn', id: 'name' },\n  { name: 'Beskrivning', id: 'description', width: 'max-content' },\n]\n\nconst rows = [\n  {\n    id: 'apple',\n    name: 'Apple',\n    description: 'Pink lady is a good one',\n  },\n  {\n    id: 'banana',\n    name: 'Banana',\n    description: 'A yellow fruit',\n  },\n  {\n    id: 'pear',\n    name: 'Pear',\n    description: 'Usually green',\n  },\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "standardtabell",
      children: "Standardtabell"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Table aria-label='Fruit'>\n  <TableHeader columns={columns}>\n    {column => {\n      return <Column>{column.name}</Column>\n    }}\n  </TableHeader>\n  <TableBody items={rows}>\n    {item => {\n      return (\n        <Row columns={columns}>\n          {column => {\n            return <Cell>{item[column.id]}</Cell>\n          }}\n        </Row>\n      )\n    }}\n  </TableBody>\n</Table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(FullExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kompakt-tabell",
      children: "Kompakt tabell"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "narrow"
      }), " om du vill ha en kompaktare tabell."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Table\n  aria-label='Fruit'\n  // highlight-start\n  narrow\n  // highlight-end\n>\n  ...\n</Table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(FullExample, {
      narrow: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "valbara-rader",
      children: "Valbara rader"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tabellen har inbyggd funktion för att kunna välja en eller flera rader med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "selectionMode"
      }), " vilket kan vara antingen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "single"
      }), " eller ", (0,jsx_runtime.jsx)(_components.code, {
        children: "multiple"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"single\"",
        children: "<Table\n  aria-label='Fruit'\n  // highlight-start\n  selectionMode='single'\n  // highlight-end\n>\n  ...\n</Table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(FullExample, {
      selectionMode: "single"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"multiple\"",
        children: "<Table\n  aria-label='Fruit'\n  // highlight-start\n  selectionMode='multiple'\n  // highlight-end\n>\n  ...\n</Table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(FullExample, {
      selectionMode: "multiple"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kontrollerade-val",
      children: "Kontrollerade val"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om du själv vill ha kontroll över vilka eller vilken rad som är vald kan du använda ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useState"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import type React from 'react'\nimport type { Selection } from 'react-aria-components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(['apple']))\n\n<Table\n  aria-label='Fruit'\n  // highlight-start\n  selectedKeys={selectedKeys}\n  onSelectionChange={setSelectedKeys}\n  selectionMode='multiple'\n  // highlight-end\n>\n  ...\n</Table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(ControlledExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "randiga-rader",
      children: "Randiga rader"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "striped"
      }), " om du vill att raderna ska alternera mellan vit och grå."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Table\n  aria-label='Fruit'\n  // highlight-start\n  striped\n  // highlight-end\n>\n  ...\n</Table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(FullExample, {
      striped: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "table",
      children: "Table"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tableheader",
      children: "TableHeader"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "TableHeader",
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "row",
      children: "Row"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Row",
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "column",
      children: "Column"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Column",
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cell",
      children: "Cell"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Cell",
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

/***/ 7465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fh: () => (/* binding */ Cell),
  VP: () => (/* binding */ Column),
  fI: () => (/* binding */ Row),
  XI: () => (/* binding */ Table),
  A0: () => (/* binding */ TableHeader)
});

// UNUSED EXPORTS: TableBody

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(20454);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/table/Table.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Table_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--layer-accent-01":"light-dark(#d9d9d9, #383838)","--layer-01":"light-dark(#f2f2f2, #262626)","--border-subtle":"light-dark(#bfbfbf, #383838)","--layer-accent-hover-01":"light-dark(#cccccc, #474747)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--border-primary":"light-dark(#171717, #f2f2f2)","--text-primary":"light-dark(#171717, #f2f2f2)","cell":"cell_BlIu","table":"table_nvoM","narrow":"narrow_Jh7A","striped":"striped_wp0e","row":"row_o3yW","tableHeader":"tableHeader_BmsY","column":"column_NPIT"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Table.mjs + 55 modules
var dist_Table = __webpack_require__(43444);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx
var Checkbox = __webpack_require__(93284);
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
;// ./packages/components/src/table/Table.tsx
'use client';var _excluded=["narrow","striped","className"],_excluded2=["id","columns","children"],_excluded3=["children"];var Table=function Table(_ref){var narrow=_ref.narrow,striped=_ref.striped,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames=(0,clsx/* default */.A)(Table_module.table,narrow&&Table_module.narrow,striped&&Table_module.striped,className);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Table/* Table */.XI,Object.assign({className:classNames},rest));};var TableHeader=function TableHeader(_ref2){var columns=_ref2.columns,children=_ref2.children;var _useTableOptions=(0,dist_Table/* useTableOptions */.mz)(),selectionBehavior=_useTableOptions.selectionBehavior,selectionMode=_useTableOptions.selectionMode,allowsDragging=_useTableOptions.allowsDragging;return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_Table/* TableHeader */.A0,{className:Table_module.tableHeader,children:[allowsDragging&&/*#__PURE__*/(0,jsx_runtime.jsx)(Column,{}),selectionBehavior==='toggle'&&/*#__PURE__*/(0,jsx_runtime.jsx)(Column,{width:50,children:selectionMode==='multiple'&&/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{slot:"selection"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(CollectionBuilder/* Collection */.pM,{items:columns,children:children})]});};var Row=function Row(_ref3){var id=_ref3.id,columns=_ref3.columns,children=_ref3.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref3,_excluded2);var _useTableOptions2=(0,dist_Table/* useTableOptions */.mz)(),selectionBehavior=_useTableOptions2.selectionBehavior,allowsDragging=_useTableOptions2.allowsDragging;return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_Table/* Row */.fI,Object.assign({id:id,className:(0,clsx/* default */.A)(Table_module.row)},rest,{children:[allowsDragging&&/*#__PURE__*/(0,jsx_runtime.jsx)(Cell,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"drag",children:/*#__PURE__*/(0,jsx_runtime.jsx)(grip_vertical/* default */.A,{size:20})})}),selectionBehavior==='toggle'&&/*#__PURE__*/(0,jsx_runtime.jsx)(Cell,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{slot:"selection"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(CollectionBuilder/* Collection */.pM,{items:columns,children:children})]}));};var Column=function Column(_ref4){var _children=_ref4.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref4,_excluded3);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Table/* Column */.VP,Object.assign({className:Table_module.column},rest,{children:function children(_ref5){var allowsSorting=_ref5.allowsSorting,sortDirection=_ref5.sortDirection;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[_children,allowsSorting&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",className:"sort-indicator",children:sortDirection==='ascending'?/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_up_wide_narrow/* default */.A,{size:20}):/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_down_narrow_wide/* default */.A,{size:20})})]});}}));};var Cell=function Cell(_ref6){var rest=Object.assign({},((0,objectDestructuringEmpty/* default */.A)(_ref6),_ref6));return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Table/* Cell */.fh,Object.assign({className:Table_module.cell},rest));};

/***/ }),

/***/ 76578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--text-disabled":"light-dark(#bfbfbf, #525252)","--border-primary":"light-dark(#171717, #f2f2f2)","--border-disabled":"light-dark(#bfbfbf, #525252)","--breakpoint-sm":"(max-width: 767px)","--support-border-warning":"light-dark(#e62323, #e62323)","--icon-on-color":"light-dark(#ffffff, #ffffff)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--button-background-primary-active":"light-dark(#2e7ca5, #143c50)","--button-background-primary-hover":"light-dark(#25607f, #25607f)","--field-disabled":"light-dark(#f2f2f2, #262626)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--line-height-30":"1.25rem","wrap":"wrap_YzPY","checkboxInner":"checkboxInner_Nam1","checkbox":"checkbox_J2GB","checkboxGroup":"checkboxGroup_iAq9"});

/***/ })

}]);