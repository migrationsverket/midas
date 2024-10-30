"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[532],{

/***/ 52185:
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


const frontMatter = {
	title: 'Typografi',
	sidebar_position: 3
};
const contentTitle = undefined;
const metadata = {
  "id": "basics/typography",
  "title": "Typografi",
  "description": "Migrationsverkets designsystem använder typsnittet Inter som är skapat av Rasmus Andersson.",
  "source": "@site/docs/basics/typography.mdx",
  "sourceDirName": "basics",
  "slug": "/basics/typography",
  "permalink": "/pr-preview/pr-108/basics/typography",
  "draft": false,
  "unlisted": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 3,
  "frontMatter": {
    "title": "Typografi",
    "sidebar_position": 3
  },
  "sidebar": "sideBar",
  "previous": {
    "title": "Designtokens",
    "permalink": "/pr-preview/pr-108/basics/tokens"
  },
  "next": {
    "title": "Ikoner",
    "permalink": "/pr-preview/pr-108/basics/icons"
  }
};
const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Migrationsverkets designsystem använder typsnittet Inter som är skapat av Rasmus Andersson.\nInter är utformat för digitala gränssnitt med fokus på hög läsbarhet. Typsnittet har stor variation i viktuppsättningen, vilket medför att det går att designa ett mer användarvänligt gränssnitt med tydliga kontraster mellan olika textkomponenter som till exempel rubriker, ingress, brödtext osv."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Arial är kvar som reservtypsnitt för äldre interna system."
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