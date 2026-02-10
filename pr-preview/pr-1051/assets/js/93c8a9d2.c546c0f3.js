"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6618],{

/***/ 16467
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SelectColumns: () => (/* binding */ SelectColumns),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_tables_mdx_93c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-tables-mdx-93c.json
const site_docs_design_patterns_tables_mdx_93c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/tables","title":"Tabeller","description":"Tabeller används för att presentera strukturerad data på ett tydligt och jämförbart sätt. För att stödja olika användarbehov och datamängder innehåller designsystemet ett antal etablerade mönster för tabeller.","source":"@site/docs/design-patterns/tables.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/tables","permalink":"/pr-preview/pr-1051/design-patterns/tables","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sideBar","previous":{"title":"Sök och filtrering","permalink":"/pr-preview/pr-1051/design-patterns/search-and-filter"},"next":{"title":"Validering i formulär","permalink":"/pr-preview/pr-1051/design-patterns/validation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(86025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/index.js + 2 modules
var ThemedImage = __webpack_require__(21122);
;// ./apps/docs/docs/design-patterns/tables.mdx


const frontMatter = {};
const contentTitle = 'Tabeller';

const assets = {

};





function SelectColumns() {
  const lightSrc = (0,useBaseUrl/* default */.Ay)('/img/select-columns-light.svg');
  const darkSrc = (0,useBaseUrl/* default */.Ay)('/img/select-columns-dark.svg');
  return (0,jsx_runtime.jsx)(ThemedImage/* default */.A, {
    alt: "Select columns",
    sources: {
      light: lightSrc,
      dark: darkSrc
    }
  });
}
const toc = [{
  "value": "Val av kolumner",
  "id": "val-av-kolumner",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "tabeller",
        children: "Tabeller"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tabeller används för att presentera strukturerad data på ett tydligt och jämförbart sätt. För att stödja olika användarbehov och datamängder innehåller designsystemet ett antal etablerade mönster för tabeller."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "val-av-kolumner",
      children: "Val av kolumner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För tabeller med många kolumner kan det vara lämpligt att låta användaren styra vilka kolumner som ska visas. Detta gör vi genom att ha en knapp placerad i anslutning till tabellen som öppnar en popover. Popovern innehåller en lista med kryssrutor där varje kryssruta representerar en kolumn i tabellen. Genom att markera eller avmarkera kryssrutorna kan användaren välja vilka kolumner som ska vara synliga."
    }), "\n", (0,jsx_runtime.jsx)(SelectColumns, {})]
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



/***/ }

}]);