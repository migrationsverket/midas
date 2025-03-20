"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4583],{

/***/ 66276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Startpage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 74 modules
var Layout = __webpack_require__(64948);
// EXTERNAL MODULE: ./packages/components/src/button/ButtonGroup.tsx + 1 modules
var ButtonGroup = __webpack_require__(94839);
// EXTERNAL MODULE: ./packages/components/src/link-button/LinkButton.tsx + 2 modules
var LinkButton = __webpack_require__(1353);
;// ./apps/docs/src/css/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"text":"text_ysZI","code":"code_BaOa","display1":"display1_tOb_","image":"image_HbCB"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(56289);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(29030);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-live-codeblock/lib/theme/CodeBlock/index.js + 23 modules
var CodeBlock = __webpack_require__(89014);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/BrowserOnly.js
var BrowserOnly = __webpack_require__(35363);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(8532);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/pages/index.tsx
function Startpage(){return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{title:"Migrationsverkets designsystem",description:"Midas \xE4r Migrationsverkets designsystem f\xF6r att skapa anv\xE4ndarv\xE4nliga, tillg\xE4ngliga och enhetliga tj\xE4nster och produkter. Det inneh\xE5ller designkomponenter, kod och riktlinjer som underl\xE4ttar utveckling och design.",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container container--fullscreen",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"row row--no-gutters",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col col--6 textColumn",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:index_module.text,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:index_module.display1,children:"Midas"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Midas \xE4r Migrationsverkets designsystem f\xF6r att skapa anv\xE4ndarv\xE4nliga, tillg\xE4ngliga och enhetliga tj\xE4nster och produkter. Det inneh\xE5ller designkomponenter, kod och riktlinjer som underl\xE4ttar utveckling och design."}),/*#__PURE__*/(0,jsx_runtime.jsxs)(ButtonGroup/* ButtonGroup */.e,{"aria-label":"L\xE4nkar",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LinkButton/* LinkButton */.z,{as:Link/* default */.A,to:"/get-started/use",children:"Kom ig\xE5ng"}),/*#__PURE__*/(0,jsx_runtime.jsx)(LinkButton/* LinkButton */.z,{variant:"secondary",as:Link/* default */.A,to:"/components/accordion",children:"Komponenter"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlock/* default */.A,{className:index_module.code,children:"npm install @midas-ds/components"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col col--6",children:/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderImage,{})})]})})});}function HeaderImage(){var imgSrc=(0,useBaseUrl/* default */.Ay)('/img/HeroImage.png');var imgSrcDark=(0,useBaseUrl/* default */.Ay)('/img/HeroImageDark.png');var _useColorMode=(0,contexts_colorMode/* useColorMode */.G)(),colorMode=_useColorMode.colorMode;return/*#__PURE__*/(0,jsx_runtime.jsx)(BrowserOnly/* default */.A,{children:function children(){return/*#__PURE__*/(0,jsx_runtime.jsx)("img",{className:index_module.image,src:colorMode==='light'?imgSrc:imgSrcDark,alt:""});}});}

/***/ }),

/***/ 94839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ ButtonGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/button/ButtonGroup.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ButtonGroup_module = ({"tokens":"\"../theme/tokens.css\"","smBreakpoint":"undefined","buttonGroup":"buttonGroup_mVqm"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/button/ButtonGroup.tsx
var _excluded=["children","className","contextValue"];/**
 * Group several buttons together.
 *
 * @interface MidasButtonGroupProps
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */var ButtonGroup=function ButtonGroup(_ref){var children=_ref.children,className=_ref.className,contextValue=_ref.contextValue,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({role:"group",className:(0,clsx/* default */.A)(ButtonGroup_module.buttonGroup,className)},rest,{children:contextValue?/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* ButtonContext */.k.Provider,{value:contextValue,children:children}):children}));};

/***/ })

}]);