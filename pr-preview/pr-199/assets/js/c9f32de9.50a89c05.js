"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5426],{

/***/ 42392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_src_pages_about_mdx_c9f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-pages/default/site-src-pages-about-mdx-c9f.json
const site_src_pages_about_mdx_c9f_namespaceObject = /*#__PURE__*/JSON.parse('{"type":"mdx","permalink":"/pr-preview/pr-199/about","source":"@site/src/pages/about.mdx","title":"Om Designsystemet","description":"Midas","frontMatter":{"title":"Om Designsystemet","description":"Midas","hide_table_of_contents":true,"pagination_prev":null,"pagination_next":null},"unlisted":false}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/src/pages/about.mdx


const frontMatter = {
	title: 'Om Designsystemet',
	description: 'Midas',
	hide_table_of_contents: true,
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Om designsystemet';

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
        id: "om-designsystemet",
        children: "Om designsystemet"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "row",
      children: (0,jsx_runtime.jsxs)("div", {
        className: "col col--8",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "Designsystem består av två delar: verktygslådan som samlar verktyg, processer och riktlinjer på ett ställe och människorna som samarbetar kring designsystemet med målet att tillsammans ta fram så bra produkter och tjänster för våra användare som möjligt."
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Dokumentationswebben är verktygslådan, vilket innefattar kvalitetssäkrade gemensamma komponenter samt visualisering och dokumentation om hur de ska användas i våra produkter och tjänster. Komponenterna är utformade enligt Migrationsverket grafiska profil, utifrån god kodstandard, utifrån användbarhetsprinciper och enligt regler för digital tillgänglighet.\nPrecis som att vår design och våra guidande principer förändras över tid för att möta förändrade användarbehov så är designsystemet ett levande material."
        })]
      })
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