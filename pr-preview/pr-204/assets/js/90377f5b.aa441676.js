"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8116],{

/***/ 16802:
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
const site_docs_components_table_mdx_903_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/table","title":"Table","description":"En enkel tabell för att visualisera data.","source":"@site/docs/components/table.mdx","sourceDirName":"components","slug":"/components/table","permalink":"/pr-preview/pr-204/components/table","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Table","description":"En enkel tabell för att visualisera data.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(11470);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(19365);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 1 modules
var propsTable = __webpack_require__(4928);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 3 modules
var getComponentMetaData = __webpack_require__(32705);
// EXTERNAL MODULE: ./packages/table/src/index.ts + 2 modules
var src = __webpack_require__(24926);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(29511);
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
  "value": "Installation och användning",
  "id": "installation-och-användning",
  "level": 2
}, {
  "value": "Väljbara rader",
  "id": "väljbara-rader",
  "level": 3
}, {
  "value": "Smalare rader",
  "id": "smalare-rader",
  "level": 3
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
      name: 'Table',
      friendlyName: 'Tabell'
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En enkel tabell för att visualisera data. Går att kombinera med andra komponenter som till exemepel ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Select"
      }), " för att filtrera eller liknande."]
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
            children: "npm install @midas-ds/table\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/table\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/table\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Table } from '@midas-ds/table'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För en tabell behövs data för hur kolumnerna och raderna ska populeras. Vi kommer basera samliga tabeller på följande dataset. Börja med att sätta upp dina kolumner. Raderna ska sedan referera till kolumnernas ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "const columns = [\n  { name: 'Namn', id: 'name', isRowHeader: true },\n  { name: 'Beskrivning', id: 'desc', width: 'max-content' }\n]\n\nconst rows = fruits.map(fruit => {\n  return {\n    id: fruit.value,\n    name: fruit.name,\n    desc: fruit.description\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Table: src/* Table */.XI,
        TableHeader: src/* TableHeader */.A0,
        TableBody: src/* TableBody */.BF,
        Column: src/* Column */.VP,
        Row: src/* Row */.fI,
        Cell: src/* Cell */.fh
      },
      children: `<Table
  aria-label="Frukter"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "väljbara-rader",
      children: "Väljbara rader"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tabellen har inbyggd funktion för att kunna välja en eller flera rader med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "selectionMode"
      }), " vilket kan vara antingen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "single"
      }), " eller ", (0,jsx_runtime.jsx)(_components.code, {
        children: "multiple"
      })]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Table: src/* Table */.XI,
        TableHeader: src/* TableHeader */.A0,
        TableBody: src/* TableBody */.BF,
        Column: src/* Column */.VP,
        Row: src/* Row */.fI,
        Cell: src/* Cell */.fh
      },
      children: `<Table
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "smalare-rader",
      children: "Smalare rader"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "narrow"
      }), " om du vill ha en mindre tabell."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Table: src/* Table */.XI,
        TableHeader: src/* TableHeader */.A0,
        TableBody: src/* TableBody */.BF,
        Column: src/* Column */.VP,
        Row: src/* Row */.fI,
        Cell: src/* Cell */.fh
      },
      children: `<Table
  narrow
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "randiga-rader",
      children: "Randiga rader"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "striped"
      }), " om du vill ha en randig tabell."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Table: src/* Table */.XI,
        TableHeader: src/* TableHeader */.A0,
        TableBody: src/* TableBody */.BF,
        Column: src/* Column */.VP,
        Row: src/* Row */.fI,
        Cell: src/* Cell */.fh
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


/***/ })

}]);