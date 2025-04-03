"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6505],{

/***/ 21202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Example: () => (/* binding */ Example),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_link_mdx_7d4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-link-mdx-7d4.json
const site_docs_components_link_mdx_7d4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/link","title":"Link","description":"Komponent som skapar en länk","source":"@site/docs/components/link.mdx","sourceDirName":"components","slug":"/components/link","permalink":"/pr-preview/pr-409/components/link","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Link","description":"Komponent som skapar en länk","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 1 modules
var propsTable = __webpack_require__(38355);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 2 modules
var Link = __webpack_require__(46964);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(93361);
// EXTERNAL MODULE: ./packages/components/src/theme/tokens.ts
var tokens = __webpack_require__(66995);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(71372);
;// ./apps/docs/docs/components/link.mdx


const frontMatter = {
	title: 'Link',
	description: 'Komponent som skapar en länk',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};










const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      Link: Link/* Link */.N,
      Text: Text/* Text */.E
    },
    ...props,
    children: `<Text elementType="p">I vår <Link href="/changelog">Changelog</Link> dokumenterar vi de senaste ändringarna i komponenterna.</Text>`
  });
};
const toc = [{
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "Länk",
  "id": "länk",
  "level": 3
}, {
  "value": "Fristående",
  "id": "fristående",
  "level": 3
}, {
  "value": "&quot;Utsträckt&quot;",
  "id": "utsträckt",
  "level": 3
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "Val av komponent",
  "id": "val-av-komponent",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'Link',
      friendlyName: 'Länk'
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponenten Link skapar en länk som kan vara i ett textstycke eller fristående."
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideCode: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "npm2yarn",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "npm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/components\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/components\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/components\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Link } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "länk",
      children: "Länk"
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Link: Link/* Link */.N,
        Text: Text/* Text */.E
      },
      children: `<Text elementType="p">Designsystemet utvecklas ständigt, <Link href="/changelog">vilket du kan kan se i vår Changelog</Link>. Vi släpper kontinuerligt nya versioner med buggfixar, nya komponenter och nya funktioner på befintliga komponenter.</Text>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fristående",
      children: "Fristående"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "standalone"
      }), " för att använda komponenten som en fristående länk under t.ex ett textblock."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Link: Link/* Link */.N,
        Text: Text/* Text */.E
      },
      children: `<>
  <Text elementType="p">Designsystemet utvecklas ständigt. Vi släpper kontinuerligt nya versioner med buggfixar, nya komponenter och nya funktioner på befintliga komponenter.</Text>
  <Link
      standalone
      href="/changelog"
  >
      Se vad som har ändrats i senaste versionen
  </Link>
</>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "utsträckt",
      children: "\"Utsträckt\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stretched"
      }), " för att låta hela förälderelementet vara klickbart till länken. Föräldern måste ha ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position: relative;"
      }), " för att länkens klickyta inte ska gå för långt."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Link: Link/* Link */.N,
        semantic: tokens.semantic,
        Text: Text/* Text */.E
      },
      children: `<div
    style={{
      position: 'relative',
      background: semantic.layer01,
      padding: '1rem'
    }}
  >
   <Text elementType="p">Designsystemet utvecklas ständigt. Vi släpper kontinuerligt nya versioner med buggfixar, nya komponenter och nya funktioner på befintliga komponenter.</Text>
  <Link
      standalone
      stretched
      href="/changelog"
  >
      Se vad som har ändrats i senaste versionen
  </Link>
</div>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "val-av-komponent",
      children: "Val av komponent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Se mönstret ", (0,jsx_runtime.jsx)(Link/* Link */.N, {
        href: "/design-patterns/buttons-and-links",
        children: 'Knappar och länkar'
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Link"
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

/***/ 93361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var dist_Text = __webpack_require__(27279);
;// ./packages/components/src/text/Text.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Text_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--size-02":"0.875rem","--size-03":"1rem","--line-height-02":"1.125rem","--line-height-03":"1.25rem","--line-height-04":"1.375rem","--line-height-05":"1.5rem","--text-disabled":"light-dark(#bfbfbf, #525252)","body-01":"body-01_whJM","body-02":"body-02_Xi1v","description":"description_XYgX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","variant","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'body-02':_ref$variant,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames={'body-01':Text_module['body-01'],'body-02':Text_module['body-02']};var textProps=Object.assign({className:(0,clsx/* default */.A)(rest.slot==='description'?Text_module.description:classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

/***/ }),

/***/ 66995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baseColors: () => (/* binding */ baseColors),
/* harmony export */   breakpoints: () => (/* binding */ breakpoints),
/* harmony export */   semantic: () => (/* binding */ semantic),
/* harmony export */   spacing: () => (/* binding */ spacing),
/* harmony export */   states: () => (/* binding */ states),
/* harmony export */   transitions: () => (/* binding */ transitions),
/* harmony export */   typography: () => (/* binding */ typography),
/* harmony export */   zIndex: () => (/* binding */ zIndex)
/* harmony export */ });
var baseColors={black:'#000000',white:'#ffffff',blackHover:'#0d0d0d',whiteHover:'#e6e6e6',gray10:'#f2f2f2',gray20:'#e6e6e6',gray30:'#d9d9d9',gray40:'#cccccc',gray50:'#bfbfbf',gray60:'#b3b3b3',gray70:'#a6a6a6',gray80:'#999999',gray90:'#8c8c8c',gray100:'#808080',gray110:'#737373',gray120:'#666666',gray130:'#5d5d5d',gray140:'#525252',gray150:'#474747',gray160:'#383838',gray170:'#333333',gray180:'#262626',gray190:'#212121',gray200:'#171717',blue10:'#eaf2f6',blue20:'#d5e5ed',blue40:'#abcbdb',blue60:'#82b0c9',blue80:'#5897b8',blue90:'#4289ad',blue100:'#2e7ca5',blue140:'#25607f',blue170:'#143c50',purple80:'#b46ab4',purple140:'#954b95',red100:'#b90835',signalBlue20:'#eaf2f6',signalBlue140:'#0066cc',signalGreen20:'#d5f2d9',signalGreen140:'#008d3c',signalRed20:'#ffdfdf',signalRed140:'#e62323',signalRed160:'#b31b1b',signalRed180:'#801313',signalYellow20:'#fff8e1',signalYellow140:'#fdb813'};var typography={fontFamily:'"Inter", sans-serif',lineHeight01:1,// 16px
lineHeight02:1.125,// 18px (18/16)
lineHeight03:1.25,// 20px (20/16)
lineHeight04:1.375,// 22px (22/16)
lineHeight05:1.5,// 24px (24/16)
lineHeight06:1.75,// 28px (28/16)
lineHeight07:2,// 32px (32/16)
lineHeight08:2.25,// 36px (36/16)
lineHeight09:2.5,// 40px (40/16)
size01:'0.75rem',// 12px (12/16)
size02:'0.875rem',// 14px (14/16)
size03:'1rem',// 16px (16/16)
size04:'1.125rem',// 18px (18/16)
size05:'1.25rem',// 20px (20/16)
size06:'1.5rem',// 24px (24/16)
size07:'1.75rem',// 28px (28/16)
size08:'2rem',// 32px (32/16)
size09:'2.25rem',// 36px (36/16)
size10:'2.625rem',// 42px (40/16)
weightThin:100,weightExtraLight:200,weightLight:300,weightRegular:400,weightMedium:500,weightSemiBold:600,weightBold:700,weightExtraBold:800,weightBlack:900};var spacing={'01':'0.125rem',// 2px
'02':'0.25rem',// 4px
'03':'0.5rem',// 8px
'04':'0.75rem',// 12px
'05':'1rem',// 16px
'06':'1.5rem',// 24px
'07':'2rem',// 32px
'08':'2.5rem',// 40px
'09':'3rem',// 48px
'10':'4rem',// 64px
'11':'5rem',// 80px
'12':'6rem'// 96px
};var states={focus:'0 0 0 2px white, 0 0 0 4px black'};var transitions={slow:'500ms',normal:'300ms',fast:'250ms'};var breakpoints={sm:'(max-width: 767px)',md:'(min-width: 768px)',lg:'(min-width: 1200px)',xl:'(min-width: 1440px)',forcedColorsMode:'(forced-colors: active)',darkMode:'(prefers-color-scheme: dark)',prefersReducedMotion:'(prefers-reduced-motion: reduced)'};var semantic={background01:"light-dark("+baseColors.white+", "+baseColors.gray200+")",backgroundHover01:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",backgroundInverse01:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",layer01:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",layerHover01:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",layerSelected01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",layerSelectedHover01:"light-dark("+baseColors.gray40+", "+baseColors.gray150+")",layer02:"light-dark("+baseColors.white+", "+baseColors.gray160+")",layerHover02:"light-dark("+baseColors.whiteHover+", "+baseColors.gray150+")",layerSelected02:"light-dark("+baseColors.gray30+", "+baseColors.gray140+")",layerSelectedHover02:"light-dark("+baseColors.gray40+", "+baseColors.gray130+")",layerAccent01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",layerAccentHover01:"light-dark("+baseColors.gray40+", "+baseColors.gray150+")",layerAccentSelected01:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",layerAccent02:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",layerAccentHover02:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",layerAccentSelected02:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",brandPrimary:"light-dark("+baseColors.red100+", "+baseColors.red100+")",borderStrong:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",borderMedium:"light-dark("+baseColors.gray110+", "+baseColors.gray90+")",borderSubtle:"light-dark("+baseColors.gray50+", "+baseColors.gray160+")",borderBrand:"light-dark("+baseColors.blue170+", "+baseColors.blue170+")",borderInvalid:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",borderDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",borderSkeleton:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",borderInverse:"light-dark("+baseColors.white+", "+baseColors.gray180+")",field01:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",fieldHover01:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",fieldActive01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",field02:"light-dark("+baseColors.white+", "+baseColors.gray160+")",fieldHover02:"light-dark("+baseColors.whiteHover+", "+baseColors.gray150+")",fieldActive02:"light-dark("+baseColors.gray30+", "+baseColors.gray140+")",fieldDisabled:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",fieldSkeleton:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",iconPrimary:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",iconSecondary:"light-dark("+baseColors.blue170+", "+baseColors.gray10+")",iconInverse:"light-dark("+baseColors.white+", "+baseColors.gray200+")",iconOnColor:"light-dark("+baseColors.white+", "+baseColors.white+")",iconDanger:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",iconDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",iconSuccess:"light-dark("+baseColors.signalGreen140+", "+baseColors.signalGreen140+")",iconInfo:"light-dark("+baseColors.signalBlue140+", "+baseColors.signalBlue140+")",iconWarning:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",iconImportant:"light-dark("+baseColors.signalYellow140+", "+baseColors.signalYellow140+")",linkEnabled:"light-dark("+baseColors.blue100+", "+baseColors.blue90+")",linkHover:"light-dark("+baseColors.blue170+", "+baseColors.blue80+")",linkPressed:"light-dark("+baseColors.gray200+", "+baseColors.blue60+")",linkVisited:"light-dark("+baseColors.purple140+", "+baseColors.purple80+")",notificationBorderSuccess:"light-dark("+baseColors.signalGreen140+", "+baseColors.signalGreen140+")",notificationBorderInfo:"light-dark("+baseColors.signalBlue140+", "+baseColors.signalBlue140+")",notificationBorderImportant:"light-dark("+baseColors.signalYellow140+", "+baseColors.signalYellow140+")",notificationBorderWarning:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",notificationBackgroundSuccess:"light-dark("+baseColors.signalGreen20+", "+baseColors.gray180+")",notificationBackgroundInfo:"light-dark("+baseColors.signalBlue20+", "+baseColors.gray180+")",notificationBackgroundImportant:"light-dark("+baseColors.signalYellow20+", "+baseColors.gray180+")",notificationBackgroundWarning:"light-dark("+baseColors.signalRed20+", "+baseColors.gray180+")",textPrimary:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",textSecondary:"light-dark("+baseColors.gray140+", "+baseColors.gray70+")",textBrand:"light-dark("+baseColors.blue170+", "+baseColors.gray10+")",textOnColor:"light-dark("+baseColors.white+", "+baseColors.white+")",textInverse:"light-dark("+baseColors.gray10+", "+baseColors.gray200+")",textSubtle:"light-dark("+baseColors.gray90+", "+baseColors.gray90+")",textDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",textInvalid:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",textPlaceholder:"light-dark("+baseColors.gray70+", "+baseColors.gray140+")",buttonBackgroundPrimary:"light-dark("+baseColors.blue170+", "+baseColors.blue100+")",buttonBackgroundPrimaryHover:"light-dark("+baseColors.blue140+", "+baseColors.blue140+")",buttonBackgroundPrimaryActive:"light-dark("+baseColors.blue100+", "+baseColors.blue170+")",buttonBackgroundSecondary:"light-dark("+baseColors.white+", "+baseColors.gray200+")",buttonBackgroundSecondaryHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",buttonBackgroundSecondaryActive:"light-dark("+baseColors.gray30+", "+baseColors.gray180+")",buttonBackgroundTertiaryHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",buttonBackgroundTertiaryActive:"light-dark("+baseColors.gray30+", "+baseColors.gray180+")",buttonBackgroundDanger:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",buttonBackgroundDangerHover:"light-dark("+baseColors.signalRed160+", "+baseColors.signalRed160+")",buttonBackgroundDangerActive:"light-dark("+baseColors.signalRed180+", "+baseColors.signalRed180+")",buttonBackgroundDisabled:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",buttonBackgroundSkeleton:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",buttonBackgroundGhostHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",buttonBackgroundGhostActive:"light-dark("+baseColors.gray30+", "+baseColors.gray190+")",buttonBorderPrimary:"light-dark("+baseColors.blue170+", "+baseColors.gray10+")",logoPrimary:"light-dark("+baseColors.red100+", "+baseColors.white+")"};var zIndex={base:1,above:10,modal:1000,toast:1100,skipToContent:1200};

/***/ }),

/***/ 27279:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $514c0188e459b4c0$export$5f1af8db9871e1d6),
/* harmony export */   h: () => (/* binding */ $514c0188e459b4c0$export$9afb8bc826b033ea)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5933);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $514c0188e459b4c0$export$9afb8bc826b033ea = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $514c0188e459b4c0$export$5f1af8db9871e1d6 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Text(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, $514c0188e459b4c0$export$9afb8bc826b033ea);
    let { elementType: ElementType = 'span', ...domProps } = props;
    // @ts-ignore
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement(ElementType, {
        className: "react-aria-Text",
        ...domProps,
        ref: ref
    });
});



//# sourceMappingURL=Text.module.js.map


/***/ })

}]);