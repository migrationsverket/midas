"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["8582"], {
84874(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_7_0_0_mdx_52a_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_7_0_0_mdx_52a_json__rspack_import_0 = __webpack_require__(34547);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Release 7.0.0',
	authors: 'midas',
	date: new Date('2025-04-02T00:00:00.000Z')
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};

/*truncate*/


const toc = [{
  "value": "Migrera från 6.x.x till 7.0.0",
  "id": "migrera-från-6xx-till-700",
  "level": 2
}, {
  "value": "pattern",
  "id": "pattern",
  "level": 3
}, {
  "value": "validate",
  "id": "validate",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "migrera-från-6xx-till-700",
      children: "Migrera från 6.x.x till 7.0.0"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "TextField"
      }), " stödjer inte längre ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "validationType"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "pattern",
      children: "pattern"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Om du vill använda HTML native constraint validation, använd egenskapen ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "pattern"
      }), ".\nLäs mer om ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#pattern",
        children: "pattern på MDN"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "validate",
      children: "validate"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["För anpassad validering med tillhörande felmeddelande, använd ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "validate"
      }), ".\nLäs mer om egenskapen under vår ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/components/textfield/#egen-validering",
        children: "dokumentation för TextField"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Se alla förändringar i detalj på ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/migrationsverket/midas/releases/tag/v7.0.0",
        children: "changelog"
      }), "."]
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
34547(module) {
module.exports = JSON.parse('{"permalink":"/pr-preview/pr-1395/release-notes/7.0.0","source":"@site/blog/release-notes/7.0.0.mdx","title":"Release 7.0.0","description":"{/ truncate /}","date":"2025-04-02T00:00:00.000Z","tags":[],"readingTime":0.39,"hasTruncateMarker":true,"authors":[{"name":"Midas","title":"Midas Core Team","utl":"https://github.com/migrationsverket/midas","imageURL":"https://avatars.githubusercontent.com/u/110020437?s=200&v=4","key":"midas","page":null}],"frontMatter":{"title":"Release 7.0.0","authors":"midas","date":"2025-04-02T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Release 8.0.0","permalink":"/pr-preview/pr-1395/release-notes/8.0.0"},"nextItem":{"title":"Release 6.0.0","permalink":"/pr-preview/pr-1395/release-notes/6.0.0"}}')

},

}]);