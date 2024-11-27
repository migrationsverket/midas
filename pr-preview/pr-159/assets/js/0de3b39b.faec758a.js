"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8915],{

/***/ 64931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_error_message_mdx_0de_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-error-message-mdx-0de.json
const site_docs_design_patterns_error_message_mdx_0de_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/error-message","title":"Validering","description":"Sammanfattning","source":"@site/docs/design-patterns/error-message.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/error-message","permalink":"/pr-preview/pr-159/design-patterns/error-message","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
// EXTERNAL MODULE: ./packages/grid/src/index.ts + 4 modules
var grid_src = __webpack_require__(17172);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(29511);
;// ./apps/docs/docs/design-patterns/error-message.mdx


const frontMatter = {
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Validering';

const assets = {

};






const toc = [{
  "value": "Sammanfattning",
  "id": "sammanfattning",
  "level": 2
}, {
  "value": "Felmeddelande",
  "id": "felmeddelande",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "validering",
        children: "Validering"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sammanfattning",
      children: "Sammanfattning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vid valideringsfel visas en sammanfattning av de fel som förekommer högst upp på sidan. Sammanfattningen ska bestå av förklaring\npå vad som är fel och konkreta råd på hur det/de går att åtgärda för att undvika nya fel. Sammanfattningen går endast att ta bort genom att åtgärda de fel som anges."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "felmeddelande",
      children: "Felmeddelande"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "När det sker ett fel eller om det saknas obligatorisk information visas ett felmeddelande under komponenten. Meddelandet ska förklara\nvad som är fel och hur det går att åtgärda. Felmeddelandet skrivs med text i rött och inleds med en varningstriangel."
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        TextField: src/* TextField */.A_
      },
      children: `<TextField
  label="Exempel på validering"
  description="Oavsett vad du skriver i fältet så visar vi ett felmeddelande"
  isInvalid
  errorMessage="Eftersom komponenten är satt till isInvalid går detta fel inte att åtgärda utan att ändra i koden. Om du vill ta bort felmeddelandet, ta bort isInvalid i exempelkoden nedan"
/>`
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

/***/ 17172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: () => (/* reexport */ Grid),
  E: () => (/* reexport */ GridItem)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/grid/src/lib/Grid.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Grid_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","mdBreakpoint":"(min-width: 768px)","lgBreakpoint":"(min-width: 1200px)","xlBreakpoint":"(min-width: 1440px)","container":"container_lmBC","grid":"grid_mI9C","fluid":"fluid_KIzx","col":"col_kaYV","col-1":"col-1_Y6p8","col-2":"col-2_lCuZ","col-3":"col-3_tBWx","col-4":"col-4_gBWu","col-5":"col-5_sq5b","col-6":"col-6_FKf3","col-7":"col-7_Aug2","col-8":"col-8_enZy","col-9":"col-9_y37e","col-10":"col-10_LlVF","col-11":"col-11_rc_R","col-12":"col-12_svqf","offset-1":"offset-1_GJj8","offset-2":"offset-2_M090","offset-3":"offset-3_B_Bj","offset-4":"offset-4_uBLN","offset-5":"offset-5_zJ4M","offset-6":"offset-6_C6Yz","offset-7":"offset-7_LlzJ","offset-8":"offset-8_Gxmr","offset-9":"offset-9_ZbLa","offset-10":"offset-10_Z5yB","offset-11":"offset-11__W4d"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/grid/src/lib/Grid.tsx
var _excluded=["children","fluid"];/**
 * Grid baserat på display: grid;
 * Använder grid-template för att bygga rätt antal kolumner per breakpoint.
 *
 * ### Children
 * Använd "grid-column: span $antalKollumner';" för att låta en child växa över flera kolumner.
 */var Grid=function Grid(_ref){var children=_ref.children,fluid=_ref.fluid,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(Grid_module.container,fluid&&Grid_module.fluid,rest.className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Grid_module.grid,children:children})}));};
;// ./packages/grid/src/lib/GridItem.tsx
var GridItem_excluded=["children","col"];var GridItem=function GridItem(_ref){var children=_ref.children,col=_ref.col,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,GridItem_excluded);// Convert numeric values to string if necessary
var colClass=col?"col-"+col:'';return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(Grid_module.col,Grid_module[colClass],rest.className)},rest,{children:children}));};
;// ./packages/grid/src/lib/index.ts

;// ./packages/grid/src/index.ts


/***/ })

}]);