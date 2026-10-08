"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["434"], {
85131(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_2_0_0_mdx_cdb_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_2_0_0_mdx_cdb_json__rspack_import_0 = __webpack_require__(56845);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Release 2.0.0',
	authors: 'midas',
	date: new Date('2025-02-25T00:00:00.000Z')
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};

/*truncate*/


const toc = [{
  "value": "Migrera från 1.x.x till 2.0.0",
  "id": "migrera-från-1xx-till-200",
  "level": 2
}, {
  "value": "TextField, TextArea",
  "id": "textfield-textarea",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "migrera-från-1xx-till-200",
      children: "Migrera från 1.x.x till 2.0.0"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "textfield-textarea",
      children: "TextField, TextArea"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "maxCharacters"
      }), " byter namn till ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "maxLength"
      }), " för enhetlighet"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__rspack_import_1.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
56845(module) {
module.exports = JSON.parse('{"permalink":"/pr-preview/pr-1409/release-notes/2.0.0","source":"@site/blog/release-notes/2.0.0.mdx","title":"Release 2.0.0","description":"{/ truncate /}","date":"2025-02-25T00:00:00.000Z","tags":[],"readingTime":0.08,"hasTruncateMarker":true,"authors":[{"name":"Midas","title":"Midas Core Team","utl":"https://github.com/migrationsverket/midas","imageURL":"https://avatars.githubusercontent.com/u/110020437?s=200&v=4","key":"midas","page":null}],"frontMatter":{"title":"Release 2.0.0","authors":"midas","date":"2025-02-25T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Release 3.0.0","permalink":"/pr-preview/pr-1409/release-notes/3.0.0"}}')

},

}]);