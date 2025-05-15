"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5620],{

/***/ 53550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_releases_9_0_0_index_mdx_88f_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_releases_9_0_0_index_mdx_88f_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13385);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	title: 'Release 9.0.0',
	date: new Date('2025-05-08T00:00:00.000Z'),
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [],
};



const toc = [{
  "value": "Migrera från 8.x.x till 9.0.0",
  "id": "migrera-från-8xx-till-900",
  "level": 2
}, {
  "value": "lineHeight",
  "id": "lineheight",
  "level": 3
}, {
  "value": "size",
  "id": "size",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "migrera-från-8xx-till-900",
      children: "Migrera från 8.x.x till 9.0.0"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Strukturen på tokens för ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "lineHeight"
      }), " och ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "size"
      }), " under ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "typography"
      }), " har ändrats.\nImporterar du dessa värden behöver du justera din kod enligt:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "lineheight",
      children: "lineHeight"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { typography } from '@midas-ds/components/theme'\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-diff",
        children: "-   typography.lineHeight01\n+   typography.lineHeight10\n-   typography.lineHeight02\n+   typography.lineHeight20\n-   typography.lineHeight03\n+   typography.lineHeight30\n-   typography.lineHeight04\n+   typography.lineHeight40\n-   typography.lineHeight05\n+   typography.lineHeight50\n-   typography.lineHeight06\n+   typography.lineHeight60\n-   typography.lineHeight07\n+   typography.lineHeight70\n-   typography.lineHeight08\n+   typography.lineHeight80\n-   typography.lineHeight09\n+   typography.lineHeight90\n-   typography.lineHeight10\n+   typography.lineHeight100\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "size",
      children: "size"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { typography } from '@midas-ds/components/theme'\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-diff",
        children: "\n-   typography.size01\n+   typography.fontSize10\n-   typography.size02\n+   typography.fontSize20\n-   typography.size03\n+   typography.fontSize30\n-   typography.size04\n+   typography.fontSize40\n-   typography.size05\n+   typography.fontSize50\n-   typography.size06\n+   typography.fontSize60\n-   typography.size07\n+   typography.fontSize70\n-   typography.size08\n+   typography.fontSize80\n-   typography.size09\n+   typography.fontSize90\n-   typography.size10\n+   typography.fontSize100\n\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Kolla ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "/changelog/9.0.0",
        children: "changelog"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 13385:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/pr-preview/pr-575/blog/releases/9.0.0","source":"@site/blog/releases/9.0.0/index.mdx","title":"Release 9.0.0","description":"Migrera från 8.x.x till 9.0.0","date":"2025-05-08T00:00:00.000Z","tags":[],"readingTime":0.68,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Release 9.0.0","date":"2025-05-08T00:00:00.000Z","pagination_prev":null,"pagination_next":null},"unlisted":false,"prevItem":{"title":"Release 10.0.0","permalink":"/pr-preview/pr-575/blog/releases/10.0.0"}}');

/***/ })

}]);