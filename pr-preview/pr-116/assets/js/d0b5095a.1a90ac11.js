"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1343],{

/***/ 58376:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {};
const contentTitle = 'Frågeformulär';
const metadata = {
  "id": "design-patterns/forms",
  "title": "Frågeformulär",
  "description": "Obligatorisk vs valfri",
  "source": "@site/docs/design-patterns/forms.md",
  "sourceDirName": "design-patterns",
  "slug": "/design-patterns/forms",
  "permalink": "/pr-preview/pr-116/design-patterns/forms",
  "draft": false,
  "unlisted": false,
  "tags": [],
  "version": "current",
  "frontMatter": {},
  "sidebar": "sideBar",
  "previous": {
    "title": "Fokus",
    "permalink": "/pr-preview/pr-116/design-patterns/focus"
  }
};
const assets = {

};



const toc = [{
  "value": "Obligatorisk vs valfri",
  "id": "obligatorisk-vs-valfri",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.header, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
        id: "frågeformulär",
        children: "Frågeformulär"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "obligatorisk-vs-valfri",
      children: "Obligatorisk vs valfri"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Huvudregeln är att bara fråga användaren om uppgifter som är nödvändiga för att ta ett beslut eller liknande.\nFöljer vi den regeln faller det sig naturligt att de flesta fält i ett formulär är obligatoriska."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Grundregel: Vi markerar endast eventuella valfria fält med text ”(valfritt)”."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Undantag 1: Valfria fält är fler än de obligatoriska – markera obligatoriska fält med svart asterisk\noch informera över formuläret att obligatoriska fält markeras med en asterisk."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Undantag 2: Valfria fält och obligatoriska fält är (ungefär) lika många – markera valfria fält med\n”(valfritt)” och obligatoriska fält med svart asterisk och informera över formuläret att obligatoriska fält\nmarkeras med en asterisk."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);