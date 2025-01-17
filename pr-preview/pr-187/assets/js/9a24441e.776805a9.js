"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[7893],{

/***/ 36141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_personnummer_mdx_9a2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-personnummer-mdx-9a2.json
const site_docs_design_patterns_personnummer_mdx_9a2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/personnummer","title":"Personnummer","description":"Vi följer Skatteverkets regler gällande hur ett personnummer är formaterat. Personnummer består av födelsetid (ÅÅMMDD) och födelsenummer (NNNN) separerat med bindestreck - eller med plus + för personer som är äldre än hundra år. Ett personnummer skrivs alltså på formen ÅÅMMDD-NNNN och det är så vi anger det i hjälptexter m.m.","source":"@site/docs/design-patterns/personnummer.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/personnummer","permalink":"/pr-preview/pr-187/design-patterns/personnummer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/link/src/index.ts + 2 modules
var src = __webpack_require__(10515);
;// ./apps/docs/docs/design-patterns/personnummer.mdx


const frontMatter = {
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Personnummer';

const assets = {

};




const toc = [{
  "value": "Födelsetid",
  "id": "födelsetid",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "personnummer",
        children: "Personnummer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vi följer Skatteverkets regler gällande hur ett personnummer är formaterat. Personnummer består av födelsetid (ÅÅMMDD) och födelsenummer (NNNN) separerat med bindestreck ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-"
      }), " eller med plus ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " för personer som är äldre än hundra år. Ett personnummer skrivs alltså på formen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ÅÅMMDD-NNNN"
      }), " och det är så vi anger det i hjälptexter m.m."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Men för att göra det så lätt som möjligt för användaren att mata in personnummer finns det en förlåtande personnummerinmatning som en egenskap till ", (0,jsx_runtime.jsx)(src/* Link */.N, {
        href: "/components/textfield",
        children: "TextField"
      }), ". Med den accepteras alla möjliga sätt att skriva ett (giltigt) personnummer. Implementationen är uppbyggd så att den:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tillåter frivilliga sekelsiffor: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "19"
        }), " eller ", (0,jsx_runtime.jsx)(_components.code, {
          children: "20"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tillåter flera olika avgränsare: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "blanksteg"
        }), " eller inget"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(src/* Link */.N, {
      standalone: true,
      href: "/components/textfield/#personnummer",
      children: "Mer information om vår förlåtande personnummerinmatning"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "födelsetid",
      children: "Födelsetid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I flera av våra tjänster är endast födelsetid obligatoriskt då det inte är säkert att användaren har svenskt personnummer. Födelstid skrivs ÅÅMMDD."
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

/***/ 10515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* reexport */ Link)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/link/src/lib/Link.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Link_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","blue130":"#25607f","blue150":"#143c50","gray150":"#1f1f1f","gray50":"#bfbfbf","mediumWeight":"500","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","regularWeight":"400","linkVisited":"#663366","black":"#000000","link":"link_Db78","icon":"icon_uCwm","standalone":"standalone_ptM8","stretched":"stretched_fWsF"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var dist_Link = __webpack_require__(73099);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/link/src/lib/Link.tsx
'use client';var _excluded=["children","standalone","stretched","icon","className","as"];var Link=function Link(_ref){var children=_ref.children,standalone=_ref.standalone,stretched=_ref.stretched,IconComponent=_ref.icon,className=_ref.className,as=_ref.as,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||dist_Link/* Link */.N;return/*#__PURE__*/(0,jsx_runtime.jsx)(Component,Object.assign({className:(0,clsx/* default */.A)(Link_module.link,standalone&&Link_module.standalone,stretched&&Link_module.stretched,className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children,!standalone&&IconComponent&&/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,{size:20,className:Link_module.icon}),standalone&&/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_right/* default */.A,{size:20,className:Link_module.icon})]})}));};
;// ./packages/link/src/index.ts


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