"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4730],{

/***/ 82680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_grid_mdx_93f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-grid-mdx-93f.json
const site_docs_components_grid_mdx_93f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/grid","title":"Grid","description":"Grid baserat på tekniken display grid i css","source":"@site/docs/components/grid.mdx","sourceDirName":"components","slug":"/components/grid","permalink":"/pr-preview/pr-405/components/grid","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Grid","description":"Grid baserat på tekniken display grid i css","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./packages/components/src/grid/Grid.tsx
var Grid = __webpack_require__(12186);
// EXTERNAL MODULE: ./packages/components/src/grid/GridItem.tsx
var GridItem = __webpack_require__(85523);
// EXTERNAL MODULE: ./packages/components/src/theme/tokens.ts
var tokens = __webpack_require__(66995);
;// ./apps/docs/src/components/examples/grid/GridExamples.tsx
var Example=function Example(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* Grid */.x,{style:{paddingLeft:0,paddingRight:0},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem/* GridItem */.E,{col:12,style:{background:tokens.semantic.brandPrimary,height:'6rem',width:'100%',padding:'1rem'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:tokens.semantic.textOnColor,fontFamily:'Fira Code'},children:"col=12"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem/* GridItem */.E,{col:3,style:{background:tokens.semantic.iconSuccess,height:'6rem',width:'100%',padding:'1rem'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:tokens.semantic.textOnColor,fontFamily:'Fira Code'},children:"col=3"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem/* GridItem */.E,{col:4,style:{background:tokens.semantic.iconInfo,height:'6rem',width:'100%',padding:'1rem'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:tokens.semantic.textOnColor,fontFamily:'Fira Code'},children:"col=4"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem/* GridItem */.E,{col:5,style:{background:tokens.semantic.iconWarning,height:'6rem',width:'100%',padding:'1rem'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:tokens.semantic.textOnColor,fontFamily:'Fira Code'},children:"col=5"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem/* GridItem */.E,{col:4,style:{background:tokens.semantic.linkVisited,height:'6rem',width:'100%',padding:'1rem'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:tokens.semantic.textOnColor,fontFamily:'Fira Code'},children:"col=4"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem/* GridItem */.E,{col:4,style:{background:tokens.semantic.buttonBackgroundPrimary,height:'6rem',width:'100%',padding:'1rem'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:tokens.semantic.textOnColor,fontFamily:'Fira Code'},children:"col=4"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem/* GridItem */.E,{col:4,style:{background:tokens.semantic.buttonBackgroundPrimaryActive,height:'6rem',width:'100%',padding:'1rem'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:tokens.semantic.textOnColor,fontFamily:'Fira Code'},children:"col=4"})})]});};
;// ./apps/docs/docs/components/grid.mdx


const frontMatter = {
	title: 'Grid',
	description: 'Grid baserat på tekniken display grid i css',
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
  "value": "Grid",
  "id": "grid",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "När ska du använda Grid ?",
  "id": "när-ska-du-använda-grid-",
  "level": 3
}, {
  "value": "Så här använder du Grid",
  "id": "så-här-använder-du-grid",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Grid",
  "id": "grid-1",
  "level": 3
}, {
  "value": "GridItem",
  "id": "griditem",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'Grid',
      friendlyName: 'Rutnät',
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Grid baserat på tekniken ", (0,jsx_runtime.jsx)(_components.code, {
        children: "display: grid;"
      }), " i css. Grid är både en container för maxbredd och ett underliggande grid med marginaler och tomrum mellan underliggande element."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponenterna Grid och Flex har samma innebörd, använd den vars teknik du är mest bekväm med. För komplexa grid kan Grid vara enklare att hantera."
    }), "\n", (0,jsx_runtime.jsx)(Example, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        children: "import { Grid, GridItem } from '@midas-ds/components'\n\n;<Grid>\n  <GridItem col={12}>\n    <span>col=12</span>\n  </GridItem>\n  <GridItem col={3}>\n    <span>col=3</span>\n  </GridItem>\n  <GridItem col={4}>\n    <span>col=4</span>\n  </GridItem>\n  <GridItem col={5}>\n    <span>col=5</span>\n  </GridItem>\n  <GridItem col={4}>\n    <span>col=4</span>\n  </GridItem>\n  <GridItem col={4}>\n    <span>col=4</span>\n  </GridItem>\n  <GridItem col={4}>\n    <span>col=4</span>\n  </GridItem>\n</Grid>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "grid",
      children: "Grid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grids skalas enligt följande specifikation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skärmstorlek"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Yttre marginaler"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Underliggande element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kolumner"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inre marginaler"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0 - 767 px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skalas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 px"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "768 px - 1199 px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skalas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 px"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1200 px - 1440 px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skalas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24 px"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "> 1440 px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skalas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1368 px"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24 px"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "när-ska-du-använda-grid-",
      children: "När ska du använda Grid ?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grid används för att strukturera upp en sida och placera olika saker i kolumner. Med gridkomponenten får du med dig ovan justeringar för responsivitet samt mellanrum mellan kolumner."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "så-här-använder-du-grid",
      children: "Så här använder du Grid"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Grid></Grid>"
      }), " som komponent och justera de direkt underliggande komponenter till Grid justeras enligt griddets bestämmelser. Justera med barnkomponenten ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<GridItem col=\"antal-kolumner\"></GridItem>"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "grid-1",
      children: "Grid"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Grid"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "griditem",
      children: "GridItem"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "GridItem",
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

/***/ 12186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96708);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","fluid"];/**
 * Grid based on display: grid;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 */var Grid=function Grid(_ref){var children=_ref.children,_ref$fluid=_ref.fluid,fluid=_ref$fluid===void 0?false:_ref$fluid,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.container,fluid&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fluid,rest.className)},rest,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.grid,children:children})}));};

/***/ }),

/***/ 85523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ GridItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96708);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","col"];var GridItem=function GridItem(_ref){var children=_ref.children,col=_ref.col,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var colClass=col?"col-"+col:'';return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.col,_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[colClass],rest.className)},rest,{children:children}));};

/***/ }),

/***/ 96708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--breakpoint-md":"(min-width: 768px)","--breakpoint-lg":"(min-width: 1200px)","--breakpoint-xl":"(min-width: 1440px)","container":"container_uCKZ","grid":"grid_M0Fc","fluid":"fluid_Y1tE","col":"col_tmG6","col-1":"col-1_OVvW","col-2":"col-2_XfVI","col-3":"col-3_KxqE","col-4":"col-4_Ovxr","col-5":"col-5_uIyd","col-6":"col-6_i8WR","col-7":"col-7_devX","col-8":"col-8_tlAZ","col-9":"col-9_Nbjm","col-10":"col-10_rwyP","col-11":"col-11_ShOw","col-12":"col-12_eQeJ","offset-1":"offset-1_ZQkJ","offset-2":"offset-2_Reek","offset-3":"offset-3_SDkl","offset-4":"offset-4_L0XB","offset-5":"offset-5_Mz95","offset-6":"offset-6_Zp68","offset-7":"offset-7_ZApX","offset-8":"offset-8_UZTZ","offset-9":"offset-9_FiKS","offset-10":"offset-10_hN9R","offset-11":"offset-11_cqgv"});

/***/ })

}]);