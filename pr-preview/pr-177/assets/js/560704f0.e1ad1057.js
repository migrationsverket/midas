"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4347],{

/***/ 16208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_focus_mdx_560_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-focus-mdx-560.json
const site_docs_design_patterns_focus_mdx_560_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/focus","title":"Fokus","description":"Fokusmarkering används för att visa användaren vilken komponent som har tabbfokus. Detta är till hjälp när användare navigerar på sidan med tangentbord eller andra tillgänglighetsverktyg. Fokus ska finnas tillgängligt på alla komponenter.","source":"@site/docs/design-patterns/focus.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/focus","permalink":"/pr-preview/pr-177/design-patterns/focus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var src = __webpack_require__(63918);
;// ./apps/docs/docs/design-patterns/focus.mdx


const frontMatter = {
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Fokus';

const assets = {

};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "fokus",
        children: "Fokus"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fokusmarkering används för att visa användaren vilken komponent som har tabbfokus. Detta är till hjälp när användare navigerar på sidan med tangentbord eller andra tillgänglighetsverktyg. Fokus ska finnas tillgängligt på alla komponenter."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fokus består av två ramar som läggs runt komponenten, en 2px vit innerram och en 2px Svart (#000000) ytterram på stora komponter. På små komponenter så är det 1px innerram och 2px ytterram"
    }), "\n", (0,jsx_runtime.jsx)(src/* Button */.$n, {
      autoFocus: true,
      children: "Knapp med tabbfokus"
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