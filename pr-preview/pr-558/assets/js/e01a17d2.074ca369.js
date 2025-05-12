"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6884],{

/***/ 47885:
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
const site_docs_basics_accessibility_mdx_e01_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"basics/accessibility","title":"Tillgänglighet","description":"Kraven på tillgänglig utformning av IT-system och tjänster, som nyttjas inom ramen för Migrationsverkets verksamhet, är högt ställda. Migrationsverkets IT-system och tjänster ska kunna användas av bredast möjlig krets av användare, oavsett funktionsförmåga. Personer med funktionsnedsättning ska kunna arbeta och anställas på Migrationsverket på likvärdiga villkor som andra. De som vänder sig till Migrationsverket ska oavsett funktionsförmåga kunna ta del av Migrationsverkets service på likvärdiga villkor.","source":"@site/docs/basics/accessibility.mdx","sourceDirName":"basics","slug":"/basics/accessibility","permalink":"/pr-preview/pr-558/basics/accessibility","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"accessibility","title":"Tillgänglighet","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var link_Link = __webpack_require__(78815);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var exports_Link = __webpack_require__(56289);
;// ./apps/docs/src/components/Link.tsx
/**
 * A wrapper to implement docusaurus broken link collector around Midas Link
 */var Link=function Link(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(link_Link/* Link */.N,Object.assign({as:exports_Link/* default */.A},props));};
;// ./apps/docs/docs/basics/accessibility.mdx


const frontMatter = {
	id: 'accessibility',
	title: 'Tillgänglighet',
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
      children: "Kraven på tillgänglig utformning av IT-system och tjänster, som nyttjas inom ramen för Migrationsverkets verksamhet, är högt ställda. Migrationsverkets IT-system och tjänster ska kunna användas av bredast möjlig krets av användare, oavsett funktionsförmåga. Personer med funktionsnedsättning ska kunna arbeta och anställas på Migrationsverket på likvärdiga villkor som andra. De som vänder sig till Migrationsverket ska oavsett funktionsförmåga kunna ta del av Migrationsverkets service på likvärdiga villkor."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Migrationsverket e-tjänster och webbar ska uppfylla kraven i nivå A och AA i WCAG 2.1. På DIGGs webbplats finns alla krav presenterade med länkar till källan (WCAG) för fördjupning. Listan som visas i länken nedan är filtrerad så att det bara är de\nkrav som ställs på myndigheten som finns med."
    }), "\n", (0,jsx_runtime.jsx)(Link, {
      standalone: true,
      href: "https://www.digg.se/webbriktlinjer/alla-webbriktlinjer?sort=en&legalrequirements=true",
      children: 'DIGGs webbriktlinjer som innehåller lagkrav'
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



/***/ }),

/***/ 78815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ Link)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/link/Link.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Link_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--link-enabled":"light-dark(#2e7ca5, #4289ad)","--link-hover":"light-dark(#143c50, #5897b8)","--link-pressed":"light-dark(#171717, #82b0c9)","--link-visited":"light-dark(#954b95, #b46ab4)","--text-disabled":"light-dark(#bfbfbf, #525252)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--z-index-base":"1","link":"link_RCbb","icon":"icon_Bxuv","standalone":"standalone_Cg9F","stretched":"stretched_pvQw"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var dist_Link = __webpack_require__(73099);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/link/Link.tsx
'use client';var _excluded=["children","standalone","stretched","icon","className","as"];var Link=function Link(_ref){var children=_ref.children,standalone=_ref.standalone,stretched=_ref.stretched,IconComponent=_ref.icon,className=_ref.className,as=_ref.as,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||dist_Link/* Link */.N;return/*#__PURE__*/(0,jsx_runtime.jsx)(Component,Object.assign({className:(0,clsx/* default */.A)(Link_module.link,standalone&&Link_module.standalone,stretched&&Link_module.stretched,className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children,!standalone&&IconComponent&&/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,{size:20,className:Link_module.icon}),standalone&&/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_right/* default */.A,{size:20,className:Link_module.icon})]})}));};

/***/ }),

/***/ 48635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ArrowRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);


//# sourceMappingURL=arrow-right.js.map


/***/ })

}]);