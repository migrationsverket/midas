"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[9065],{

/***/ 132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/theme/src/index.ts + 2 modules
var src = __webpack_require__(32976);
;// ./apps/docs/src/components/getThemeProps.tsx
var TokensTable=function TokensTable(){return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Object.keys(src/* theme */.w4).sort(function(a,b){if(a.includes('Color')&&!b.includes('Color')){return-1;}if(!a.includes('Color')&&b.includes('Color')){return 1;}return 0;}).map(function(themeKey){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{children:themeKey}),/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{className:'token-table',children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("th",{style:{flexBasis:'40%'},children:"Name"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{style:{flexBasis:'20%'},children:"Value"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{style:{flexBasis:'40%'}})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{children:Object.entries(src/* theme */.w4[themeKey]).map(function(e,index){return/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{flexBasis:'40%'},children:e[0]}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{flexBasis:'20%'},children:e[1]}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{backgroundColor:e[1],flexBasis:'40%'}})]},index);})})]})]},themeKey);})});};
;// ./apps/docs/docs/basics/tokens.mdx


const frontMatter = {
	title: 'Designtokens',
	sidebar_position: 2
};
const contentTitle = 'Designtokens';
const metadata = {
  "id": "basics/tokens",
  "title": "Designtokens",
  "description": "Designtokens representerar de grundläggande byggstenarna som utgör ett designsystems visuella stil. Tokens",
  "source": "@site/docs/basics/tokens.mdx",
  "sourceDirName": "basics",
  "slug": "/basics/tokens",
  "permalink": "/pr-preview/pr-124/basics/tokens",
  "draft": false,
  "unlisted": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 2,
  "frontMatter": {
    "title": "Designtokens",
    "sidebar_position": 2
  },
  "sidebar": "sideBar",
  "previous": {
    "title": "Designprinciper",
    "permalink": "/pr-preview/pr-124/basics/principles"
  },
  "next": {
    "title": "Typografi",
    "permalink": "/pr-preview/pr-124/basics/typography"
  }
};
const assets = {

};





const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "designtokens",
        children: "Designtokens"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Designtokens representerar de grundläggande byggstenarna som utgör ett designsystems visuella stil. Tokens\när oberoende av plattform och kan användas utanför komponentbiblioteket. Använd alltid tokens istället för\nhårdkodade värden."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @midas-ds/theme\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använd som variabler genom att importera temafilen"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        children: "import { theme } from '@midas-ds/theme'\nconst blue = theme.baseColors.blue150; // #143c50\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nedan finner du tabeller över alla värden som finns som tokens i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "theme"
      }), "\nOm du inte vill importera hela theme kan du importera delarna för sig"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        children: "import { baseColors } from '@midas-ds/theme'\nconst blue = baseColors.blue150; // #143c50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(TokensTable, {})]
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

/***/ 32976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w4: () => (/* reexport */ theme)
});

// UNUSED EXPORTS: accessibility, baseColors, borderRadius, borderWidths, breakpoints, buttonColors, font, fontSizes, fontWeights, inputColor, midasColors, midasTransitions, signalColors

// NAMESPACE OBJECT: ./packages/theme/src/lib/tokens.ts
var tokens_namespaceObject = {};
__webpack_require__.r(tokens_namespaceObject);
__webpack_require__.d(tokens_namespaceObject, {
  accessibility: () => (accessibility),
  baseColors: () => (baseColors),
  borderRadius: () => (borderRadius),
  borderWidths: () => (borderWidths),
  breakpoints: () => (breakpoints),
  buttonColors: () => (buttonColors),
  font: () => (font),
  fontSizes: () => (fontSizes),
  fontWeights: () => (fontWeights),
  inputColor: () => (inputColor),
  midasColors: () => (midasColors),
  midasTransitions: () => (midasTransitions),
  signalColors: () => (signalColors)
});

;// ./packages/theme/src/lib/tokens.ts
var baseColors={white:'#ffffff',black:'#000000',gray10:'#f2f2f2',gray20:'#e6e6e6',gray30:'#d9d9d9',gray40:'#cccccc',gray50:'#bfbfbf',gray60:'#b3b3b3',gray70:'#a6a6a6',gray80:'#999999',gray90:'#8c8c8c',gray100:'#808080',gray130:'#5d5d5d',gray150:'#1f1f1f',red10:'#f7e9e7',red20:'#f1d4d1',red30:'#e9beba',red40:'#e2a8a4',red50:'#d9918e',red60:'#d37a7a',red70:'#cc6467',red80:'#c54c56',red90:'#be3345',red100:'#b90835',red130:'#8b1327',red150:'#641018',blue10:'#eaf2f6',blue20:'#d5e5ed',blue30:'#c0d7e4',blue40:'#abcbdb',blue50:'#94bcd1',blue60:'#82b0c9',blue70:'#6ca3c0',blue80:'#5897b8',blue90:'#4289ad',blue100:'#2e7ca5',blue130:'#25607f',blue150:'#143c50'};var buttonColors={outline:'#303030',primaryBackground:baseColors['blue150'],primaryText:'#303030',primaryHover:baseColors['blue130'],primaryFocus:baseColors['black'],primaryActive:'#4289ae',secondaryBackground:baseColors['gray130'],secondaryText:baseColors['white'],secondaryHover:'#303030',secondaryActive:'#303030'};var inputColor={inputText:baseColors['gray150']};var signalColors={signalGreen10:'#d5f2d9',signalGreen100:'#008d3c',signalBlue10:baseColors['blue10'],signalBlue100:'#0066cc',signalYellow10:'#fff8e1',signalYellow100:'#f1c21b',signalRed10:'#ffdfdf',signalRed100:'#e62323',signalRed130:'#b31b1b',signalRed150:'#801313'};var borderRadius={sRadius:' 0.125rem',// 2px
mRadius:' 0.25rem'// 4px
};var borderWidths={xsWidth:' 0.0625rem',// 1px
sWidth:' 0.125rem',// 2px
mWidth:' 0.25rem'// 4px
};var fontWeights={lightWeight:'300',regularWeight:'400',mediumWeight:'500',semiBoldWeight:'600',boldWeight:'700',blackWeight:'900'};var fontSizes={desktopSize:'1rem',mobileSize:'1rem',largeSize:'1.5rem',inputNormalSize:'0.875rem',inputMessageSize:'0.75rem',inputLabelSize:'1rem',inputDescriptionSize:'0.875rem'};var midasColors={logoPrimary:baseColors['red100'],logoSecondary:baseColors['white'],textPrimary:baseColors['gray150'],textSecondary:baseColors['white'],textTertiary:baseColors['red100'],link:baseColors['blue130'],linkVisited:'#663366',backgroundPrimary:baseColors['white'],backgroundSecondary:baseColors['gray10'],backgroundFooter1:baseColors['red100'],backgroundFooter2:baseColors['red130'],backgroundInfo:baseColors['blue10'],backgroundImportant:signalColors['signalYellow10'],borderPrimary:baseColors['black'],borderSecondary:baseColors['gray60'],borderFocusOuter:baseColors['black'],borderFocusInner:baseColors['white'],iconPrimary:baseColors['black'],iconInverted:baseColors['white']};var midasTransitions={slowTransition:'500ms',normalTransition:'300ms',fastTransition:'250ms'};var breakpoints={smBreakpoint:'(max-width: 767px)',mdBreakpoint:'(min-width: 768px)',lgBreakpoint:'(min-width: 1200px)',xlBreakpoint:'(min-width: 1440px)'};var accessibility={forcedColorsMode:'(forced-colors: active)',prefersReducedMotion:'(prefers-reduced-motion: reduced)'};var font={display:'"Inter", sans-serif'};
;// ./packages/theme/src/lib/index.ts
var theme=Object.assign({},tokens_namespaceObject);
;// ./packages/theme/src/index.ts


/***/ })

}]);