"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4166],{

/***/ 70980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_dark_mode_mdx_861_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-dark-mode-mdx-861.json
const site_docs_dev_dark_mode_mdx_861_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/dark-mode","title":"Mörkt läge","description":"Hantera mörkt i designsystemet","source":"@site/docs/dev/dark-mode.mdx","sourceDirName":"dev","slug":"/dev/dark-mode","permalink":"/pr-preview/pr-336/dev/dark-mode","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Mörkt läge","description":"Hantera mörkt i designsystemet","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var Link = __webpack_require__(78815);
;// ./apps/docs/docs/dev/dark-mode.mdx


const frontMatter = {
	title: 'Mörkt läge',
	description: 'Hantera mörkt i designsystemet',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Dark Mode / Mörkt läge';

const assets = {

};




const toc = [{
  "value": "Inte redo för mörkt läge?",
  "id": "inte-redo-för-mörkt-läge",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "dark-mode--mörkt-läge",
        children: "Dark Mode / Mörkt läge"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Från och med version ", (0,jsx_runtime.jsx)(_components.code, {
        children: "whatever"
      }), " stödjer designsystemet mörkt läge. Detta innebär att designsystemets komponenter kan anpassa sig till användarens inställningar för mörkt läge i operativsystemet eller webbläsaren. Detta sker automatiskt om du använder vår globala stylesheet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "global.css"
      }), ".\nI punkt 11.7 av EN 301 549 beskrivs krav på att följa en användares inställningar. Mörkt läge är ett av dessa val, därav stödjer Midas mörkt läge."]
    }), "\n", (0,jsx_runtime.jsx)(Link/* Link */.N, {
      standalone: true,
      href: "/get-started/use/#installera-inter-som-typsnitt",
      children: 'Läs mer om hur du installerar global.css'
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inte-redo-för-mörkt-läge",
      children: "Inte redo för mörkt läge?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implementationen sker som sagt automatiskt om projektet har uppdaterat ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/components"
      }), " och använder vår globala stylesheet. Om ert projekt inte är redo att stödja mörkt läge kan du stänga av mörkt läge genom att ändra färgschemat i CSS på vilken nivå som passar projektet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "body {\n    color-scheme: light;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använder du inte vår globala stylesheet kan du aktivera mörkt läge genom att definera bägge färgscheman."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "body {\n    color-scheme: light dark;\n}\n"
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
/* harmony default export */ const Link_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--link-enabled":"light-dark(#2e7ca5, #2e7ca5)","--link-hover":"light-dark(#143c50, #143c50)","--link-pressed":"light-dark(#000000, #000000)","--link-visited":"light-dark(#663366, #663366)","--text-disabled":"light-dark(#bfbfbf, #525252)","--focus":"0 0 0 2px white, 0 0 0 4px black","link":"link_RCbb","icon":"icon_Bxuv","standalone":"standalone_Cg9F","stretched":"stretched_pvQw"});
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