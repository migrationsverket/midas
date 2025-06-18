"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8849],{

/***/ 8723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LoaderCircle)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const LoaderCircle = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);


//# sourceMappingURL=loader-circle.js.map


/***/ }),

/***/ 30882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_page_loading_mdx_4b1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-page-loading-mdx-4b1.json
const site_docs_design_patterns_page_loading_mdx_4b1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/page-loading","title":"Laddningsindikatorer","description":"Laddningsindikatorer är visuella platshållare för komponenter eller information som visas medan de laddas.","source":"@site/docs/design-patterns/page-loading.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/page-loading","permalink":"/pr-preview/pr-662/design-patterns/page-loading","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/components/src/skeleton/Skeleton.tsx + 1 modules
var Skeleton = __webpack_require__(58857);
// EXTERNAL MODULE: ./packages/components/src/spinner/Spinner.tsx + 1 modules
var Spinner = __webpack_require__(69336);
;// ./apps/docs/docs/design-patterns/page-loading.mdx


const frontMatter = {
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Laddningsindikatorer';

const assets = {

};




const toc = [{
  "value": "Skeleton",
  "id": "skeleton",
  "level": 2
}, {
  "value": "Spinner",
  "id": "spinner",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "laddningsindikatorer",
        children: "Laddningsindikatorer"
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laddningsindikatorer är visuella platshållare för komponenter eller information som visas medan de laddas.\nVi använder oss av två olika laddningsindikator: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/skeleton",
        children: "Skeleton"
      }), " och ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/spinner",
        children: "Spinner"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi använder i regel Skeleton som laddningsindikator. Undantagen är 1) när sidan laddar utan att någon ändras eller 2) när du inte vet hur gränssnittet kommer att se ut efter att det har laddat klart"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "skeleton",
      children: "Skeleton"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Skeleton är vår primära laddningsindikator. Den är en minimal representation av de komponenter som kommer finnas i gränssnittet, vilket ger användaren en bra förståelse för hur det färdiga gränssnittet kommer vara strukturerat."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Skeleton height='48px' />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Skeleton/* Skeleton */.E, {
        height: "48px"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "spinner",
      children: "Spinner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spinner används primärt när gränssnittet inte ändras, till exempel när en fil laddas upp i bakgrunden. Om det väntas ta mer än 10 sekunder att ladda bör det finnas ett meddelande till användaren om det."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Spinner />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Spinner/* Spinner */.y, {})
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

/***/ 58857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Skeleton)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/components/src/skeleton/Skeleton.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Skeleton_module = ({"tokens":"\"../theme/tokens.css\"","--skeleton-01":"light-dark(#f2f2f2, #262626)","--skeleton-02":"light-dark(#d9d9d9, #383838)","--layer-01":"light-dark(#f2f2f2, #262626)","--background-inverse":"light-dark(#171717, #f2f2f2)","skeleton":"skeleton_r1UF","circle":"circle_V2WO","wave":"wave_h9Fk","onLayer01":"onLayer01_cFCw"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/skeleton/Skeleton.tsx
var _excluded=["variant","width","height","isAnimated","className","style","isOnLayer01"];var Skeleton=function Skeleton(_ref){var _ref$variant=_ref.variant,variant=_ref$variant===void 0?'rectangle':_ref$variant,width=_ref.width,height=_ref.height,_ref$isAnimated=_ref.isAnimated,isAnimated=_ref$isAnimated===void 0?true:_ref$isAnimated,className=_ref.className,style=_ref.style,isOnLayer01=_ref.isOnLayer01,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);if(variant==='circle'&&height!==undefined){console.warn('Height is not allowed when using circle, control size with width');}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(Skeleton_module.skeleton,Skeleton_module[variant],isAnimated&&Skeleton_module.wave,isOnLayer01&&Skeleton_module.onLayer01,className),style:Object.assign({width:width,height:height},style)},rest));};

/***/ }),

/***/ 69336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ Spinner)
});

;// ./packages/components/src/spinner/Spinner.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Spinner_module = ({"tokens":"\"../theme/tokens.css\"","--icon-primary":"light-dark(#171717, #f2f2f2)","--icon-on-color":"light-dark(#ffffff, #ffffff)","container":"container_ytPE","spinner":"spinner_eR4D","rotating":"rotating_m95R","dark":"dark_YbwO","vsHidden":"vsHidden_wdPf"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(8723);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/spinner/Spinner.tsx
var Spinner=function Spinner(_ref){var small=_ref.small,_ref$isOnColor=_ref.isOnColor,isOnColor=_ref$isOnColor===void 0?false:_ref$isOnColor;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Spinner_module.container,role:"status",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(loader_circle/* default */.A,{className:(0,clsx/* default */.A)(Spinner_module.spinner,isOnColor&&Spinner_module.dark),size:small?16:32,strokeWidth:small?2:3,absoluteStrokeWidth:true}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Spinner_module.vsHidden,children:"Laddar, v\xE4nligen v\xE4nta."})]});};

/***/ })

}]);