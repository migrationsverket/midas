"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[532],{

/***/ 46102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_basics_typography_mdx_30f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-basics-typography-mdx-30f.json
const site_docs_basics_typography_mdx_30f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"basics/typography","title":"Typografi","description":"Migrationsverkets designsystem använder typsnittet Inter som är skapat av Rasmus Andersson.","source":"@site/docs/basics/typography.mdx","sourceDirName":"basics","slug":"/basics/typography","permalink":"/pr-preview/pr-187/basics/typography","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Typografi","sidebar_position":3,"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/basics/typography.mdx


const frontMatter = {
	title: 'Typografi',
	sidebar_position: 3,
	pagination_prev: null,
	pagination_next: null
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
      children: "Migrationsverkets designsystem använder typsnittet Inter som är skapat av Rasmus Andersson.\nInter är utformat för digitala gränssnitt med fokus på hög läsbarhet. Typsnittet har stor variation i viktuppsättningen, vilket medför att det går att designa ett mer användarvänligt gränssnitt med tydliga kontraster mellan olika textkomponenter som till exempel rubriker, ingress, brödtext osv."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Arial är kvar som reservtypsnitt för äldre interna system."
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