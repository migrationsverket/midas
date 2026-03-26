"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8809],{

/***/ 18066
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_17_10_0_mdx_5bc_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_17_10_0_mdx_5bc_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36995);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: '17.10.0',
	title: 'Release 17.10.0',
	authors: 'midas',
	tags: [
		'release-notes',
		'v17'
	],
	date: new Date('2026-03-19T00:00:00.000Z')
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "🆕 Ny komponent: FileList",
  "id": "-ny-komponent-filelist",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Sedan v17.0.0 har vi släppt en rad förbättringar — en ny komponent, nya props, semantiska förbättringar och ett par viktiga namnbyten på design tokens. Här är det viktigaste."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-ny-komponent-filelist",
      children: "🆕 Ny komponent: FileList"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "FileList"
      }), " och ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "FileListItem"
      }), " är nya komponenter för att visa uppladdade filer med stöd för borttagning. Perfekt att kombinera med ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "FileTrigger"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { FileList, FileListItem } from '@midas-ds/components'\n\n<FileList>\n  <FileListItem\n    fileName=\"dokument.pdf\"\n    fileSize={204800}\n    onDelete={() => handleDelete('dokument.pdf')}\n  />\n</FileList>\n"
      })
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



/***/ },

/***/ 36995
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/pr-preview/pr-1190/release-notes/17.10.0","source":"@site/blog/release-notes/17.10.0.mdx","title":"Release 17.10.0","description":"Sedan v17.0.0 har vi släppt en rad förbättringar — en ny komponent, nya props, semantiska förbättringar och ett par viktiga namnbyten på design tokens. Här är det viktigaste.","date":"2026-03-19T00:00:00.000Z","tags":[{"inline":true,"label":"release-notes","permalink":"/pr-preview/pr-1190/release-notes/tags/release-notes"},{"inline":true,"label":"v17","permalink":"/pr-preview/pr-1190/release-notes/tags/v-17"}],"readingTime":2.11,"hasTruncateMarker":true,"authors":[{"name":"Midas","title":"Midas Core Team","utl":"https://github.com/migrationsverket/midas","imageURL":"https://avatars.githubusercontent.com/u/110020437?s=200&v=4","key":"midas","page":null}],"frontMatter":{"slug":"17.10.0","title":"Release 17.10.0","authors":"midas","tags":["release-notes","v17"],"date":"2026-03-19T00:00:00.000Z"},"unlisted":false,"nextItem":{"title":"Release 17.0.0","permalink":"/pr-preview/pr-1190/release-notes/17.0.0"}}');

/***/ }

}]);