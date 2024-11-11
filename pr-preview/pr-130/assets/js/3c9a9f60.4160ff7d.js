"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2488],{

/***/ 76062:
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
const contentTitle = 'Knappar och länkar';
const metadata = {
  "id": "design-patterns/buttons-and-links",
  "title": "Knappar och länkar",
  "description": "Detta mönster är till för beskriva i vilka situationer Knapp, Länkknapp, Fristående länk respektive Länk ska användas",
  "source": "@site/docs/design-patterns/buttons-and-links.mdx",
  "sourceDirName": "design-patterns",
  "slug": "/design-patterns/buttons-and-links",
  "permalink": "/pr-preview/pr-130/design-patterns/buttons-and-links",
  "draft": false,
  "unlisted": false,
  "tags": [],
  "version": "current",
  "frontMatter": {},
  "sidebar": "sideBar",
  "previous": {
    "title": "Designmönster",
    "permalink": "/pr-preview/pr-130/design-patterns/"
  },
  "next": {
    "title": "Validering",
    "permalink": "/pr-preview/pr-130/design-patterns/error-message"
  }
};
const assets = {

};



const toc = [{
  "value": "Knapp",
  "id": "knapp",
  "level": 2
}, {
  "value": "Knapplänk",
  "id": "knapplänk",
  "level": 2
}, {
  "value": "Fristående länk",
  "id": "fristående-länk",
  "level": 2
}, {
  "value": "Länk",
  "id": "länk",
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
        id: "knappar-och-länkar",
        children: "Knappar och länkar"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Detta mönster är till för beskriva i vilka situationer Knapp, Länkknapp, Fristående länk respektive Länk ska användas"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "knapp",
      children: "Knapp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Använd knapp när det\nTex Skicka"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "knapplänk",
      children: "Knapplänk"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Vid navigering inom eller från en applikation används knapplänk."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "fristående-länk",
      children: "Fristående länk"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "länk",
      children: "Länk"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Länk används när länken är det är i ett textstycke."
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