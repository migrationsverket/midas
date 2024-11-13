"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4347],{

/***/ 89289:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _packages_button_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81706);


const frontMatter = {};
const contentTitle = 'Fokus';
const metadata = {
  "id": "design-patterns/focus",
  "title": "Fokus",
  "description": "Fokusmarkering används för att visa användaren vilken komponent som har tabbfokus. Detta är till hjälp när användare navigerar på sidan med tangentbord eller andra tillgänglighetsverktyg. Fokus ska finnas tillgängligt på alla komponenter.",
  "source": "@site/docs/design-patterns/focus.mdx",
  "sourceDirName": "design-patterns",
  "slug": "/design-patterns/focus",
  "permalink": "/pr-preview/pr-133/design-patterns/focus",
  "draft": false,
  "unlisted": false,
  "tags": [],
  "version": "current",
  "frontMatter": {},
  "sidebar": "sideBar",
  "previous": {
    "title": "Validering",
    "permalink": "/pr-preview/pr-133/design-patterns/error-message"
  },
  "next": {
    "title": "Frågeformulär",
    "permalink": "/pr-preview/pr-133/design-patterns/forms"
  }
};
const assets = {

};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.header, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
        id: "fokus",
        children: "Fokus"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Fokusmarkering används för att visa användaren vilken komponent som har tabbfokus. Detta är till hjälp när användare navigerar på sidan med tangentbord eller andra tillgänglighetsverktyg. Fokus ska finnas tillgängligt på alla komponenter."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Fokus består av två ramar som läggs runt komponenten, en 2px vit innerram och en 2px Svart (#000000) ytterram på stora komponter. På små komponenter så är det 1px innerram och 2px ytterram"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_packages_button_src__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$, {
      autoFocus: true,
      children: "Knapp med tabbfokus"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
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