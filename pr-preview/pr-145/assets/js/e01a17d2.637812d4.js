"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6884],{

/***/ 6173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_basics_accessibility_mdx_e01_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-basics-accessibility-mdx-e01.json
const site_docs_basics_accessibility_mdx_e01_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"basics/accessibility","title":"Tillgänglighet","description":"Migrationsverket strävar efter att uppfylla riktlinjerna för nivå A och AA i WCAG 2.1 i sina system och digitala tjänster.","source":"@site/docs/basics/accessibility.mdx","sourceDirName":"basics","slug":"/basics/accessibility","permalink":"/pr-preview/pr-145/basics/accessibility","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"accessibility","title":"Tillgänglighet"},"sidebar":"sideBar","previous":{"title":"Ikoner","permalink":"/pr-preview/pr-145/basics/icons"},"next":{"title":"Språk och skrivregler","permalink":"/pr-preview/pr-145/basics/language"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/link/src/index.ts + 3 modules
var src = __webpack_require__(85560);
;// ./apps/docs/docs/basics/accessibility.mdx


const frontMatter = {
	id: 'accessibility',
	title: 'Tillgänglighet'
};
const contentTitle = undefined;

const assets = {

};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Migrationsverket strävar efter att uppfylla riktlinjerna för nivå A och AA i WCAG 2.1 i sina system och digitala tjänster."
    }), "\n", (0,jsx_runtime.jsx)(src/* Link */.N, {
      standalone: true,
      href: "https://www.digg.se/webbriktlinjer/alla-webbriktlinjer",
      children: "DIGGs Webbriktlinjer"
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



/***/ })

}]);