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
const site_docs_components_link_mdx_7d4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/link","title":"Link","description":"Komponent som skapar en länk","source":"@site/docs/components/link.mdx","sourceDirName":"components","slug":"/components/link","permalink":"/pr-preview/pr-350/components/link","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Link","description":"Komponent som skapar en länk","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var Link = __webpack_require__(78815);
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
      Link: Link/* Link */.N
    },
    ...props,
    children: `<p>Varannan vecka släpper vi en ny release, vilket du kan <Link href="/blog">läsa mer om här.</Link></p>`
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
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        Link: Link/* Link */.N
      },
      children: `<p>Designsystemet utvecklas ständigt, <Link href="/blog">vilket du kan läsa mer om här i vår releasefeed.</Link> Varannan vecka kommer det ett nytt släpp med buggfixar, nya komponenter eller nya funktioner på befintliga komponenter.</p>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fristående",
      children: "Fristående"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "standalone"
      }), " för att använda komponenten som en fristående länk under t.ex ett textblock."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Link: Link/* Link */.N
      },
      children: `<>
  <p>Designsystemet utvecklas ständigt. Varannan vecka kommer det ett nytt släpp med buggfixar, nya komponenter eller nya funktioner på befintliga komponenter.</p>
  <Link
      standalone
      href="/blog"
  >
      Läs mer om designsystemets nyheter
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
        semantic: tokens.semantic
      },
      children: `<div
    style={{
      position: 'relative',
      background: semantic.layer01,
      padding: '1rem'
    }}
  >
  <p>Designsystemet utvecklas ständigt. Varannan vecka kommer det ett nytt släpp med buggfixar, nya komponenter eller nya funktioner på befintliga komponenter. Om du håller muspekaren här så kan du klicka på länken över hela den gråa ytan.</p>
  <Link
      standalone
      stretched
      href="/blog"
  >
      Läs mer om designsystemets nyheter
  </Link>
</div>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Se mönstret ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/design-patterns/buttons-and-links",
        children: "Knappar och länkar"
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
/* harmony default export */ const Link_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--link-enabled":"light-dark(#2e7ca5, #4289ad)","--link-hover":"light-dark(#143c50, #5897b8)","--link-pressed":"light-dark(#171717, #82b0c9)","--link-visited":"light-dark(#663366, #663366)","--text-disabled":"light-dark(#bfbfbf, #525252)","--focus":"0 0 0 2px white, 0 0 0 4px black","link":"link_RCbb","icon":"icon_Bxuv","standalone":"standalone_Cg9F","stretched":"stretched_pvQw"});
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
/* harmony export */   typography: () => (/* binding */ typography)
/* harmony export */ });
var baseColors={black:'#000000',white:'#ffffff',blackHover:'#0d0d0d',whiteHover:'#e6e6e6',gray100:'#f2f2f2',gray150:'#e6e6e6',gray200:'#d9d9d9',gray250:'#cccccc',gray300:'#bfbfbf',gray350:'#b3b3b3',gray400:'#a6a6a6',gray450:'#999999',gray500:'#8c8c8c',gray550:'#808080',gray600:'#737373',gray650:'#666666',gray700:'#525252',gray750:'#5d5d5d',gray800:'#383838',gray850:'#474747',gray900:'#262626',gray950:'#333333',gray1000:'#171717',gray1050:'#212121',blue100:'#eaf2f6',blue300:'#abcbdb',blue400:'#82b0c9',blue500:'#5897b8',blue600:'#4289ad',blue700:'#2e7ca5',blue800:'#25607f',blue900:'#143c50',blue200:'#d5e5ed',purple:'#663366',red700:'#b90835',signalBlue100:'#eaf2f6',signalBlue700:'#0066cc',signalGreen100:'#d5f2d9',signalGreen700:'#008d3c',signalRed100:'#ffdfdf',signalRed700:'#e62323',signalRed800:'#b31b1b',signalRed900:'#801313',signalYellow100:'#fff8e1',signalYellow700:'#fdb813'};var typography={fontFamily:'"Inter", sans-serif',lineHeight01:1,// 16px
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
};var states={focus:'0 0 0 2px white, 0 0 0 4px black'};var transitions={slow:'500ms',normal:'300ms',fast:'250ms'};var breakpoints={sm:'(max-width: 767px)',md:'(min-width: 768px)',lg:'(min-width: 1200px)',xl:'(min-width: 1440px)',forcedColorsMode:'(forced-colors: active)',darkMode:'(prefers-color-scheme: dark)',prefersReducedMotion:'(prefers-reduced-motion: reduced)'};var semantic={background01:"light-dark("+baseColors.white+", "+baseColors.gray1000+")",backgroundHover01:"light-dark("+baseColors.whiteHover+", "+baseColors.gray1050+")",backgroundInverse01:"light-dark("+baseColors.gray1000+", "+baseColors.gray100+")",layer01:"light-dark("+baseColors.gray100+", "+baseColors.gray900+")",layerHover01:"light-dark("+baseColors.gray150+", "+baseColors.gray950+")",layerSelected01:"light-dark("+baseColors.gray200+", "+baseColors.gray800+")",layerSelectedHover01:"light-dark("+baseColors.gray250+", "+baseColors.gray850+")",layer02:"light-dark("+baseColors.white+", "+baseColors.gray800+")",layerHover02:"light-dark("+baseColors.whiteHover+", "+baseColors.gray850+")",layerSelected02:"light-dark("+baseColors.gray200+", "+baseColors.gray700+")",layerSelectedHover02:"light-dark("+baseColors.gray250+", "+baseColors.gray750+")",layerAccent01:"light-dark("+baseColors.gray200+", "+baseColors.gray800+")",layerAccentHover01:"light-dark("+baseColors.gray250+", "+baseColors.gray850+")",layerAccentSelected01:"light-dark("+baseColors.gray300+", "+baseColors.gray700+")",layerAccent02:"light-dark("+baseColors.gray100+", "+baseColors.gray900+")",layerAccentHover02:"light-dark("+baseColors.gray150+", "+baseColors.gray950+")",layerAccentSelected02:"light-dark("+baseColors.gray200+", "+baseColors.gray800+")",brandPrimary:"light-dark("+baseColors.red700+", "+baseColors.red700+")",borderStrong:"light-dark("+baseColors.gray1000+", "+baseColors.gray100+")",borderMedium:"light-dark("+baseColors.gray600+", "+baseColors.gray500+")",borderSubtle:"light-dark("+baseColors.gray300+", "+baseColors.gray800+")",borderBrand:"light-dark("+baseColors.blue900+", "+baseColors.blue900+")",borderInvalid:"light-dark("+baseColors.signalRed700+", "+baseColors.signalRed700+")",borderDisabled:"light-dark("+baseColors.gray300+", "+baseColors.gray700+")",borderSkeleton:"light-dark("+baseColors.gray100+", "+baseColors.gray900+")",borderInverse:"light-dark("+baseColors.white+", "+baseColors.gray900+")",field01:"light-dark("+baseColors.gray100+", "+baseColors.gray900+")",fieldHover01:"light-dark("+baseColors.gray150+", "+baseColors.gray950+")",fieldActive01:"light-dark("+baseColors.gray200+", "+baseColors.gray800+")",field02:"light-dark("+baseColors.white+", "+baseColors.gray800+")",fieldHover02:"light-dark("+baseColors.whiteHover+", "+baseColors.gray850+")",fieldActive02:"light-dark("+baseColors.gray200+", "+baseColors.gray700+")",fieldDisabled:"light-dark("+baseColors.gray100+", "+baseColors.gray900+")",fieldSkeleton:"light-dark("+baseColors.gray100+", "+baseColors.gray900+")",iconPrimary:"light-dark("+baseColors.gray1000+", "+baseColors.gray100+")",iconSecondary:"light-dark("+baseColors.blue900+", "+baseColors.blue900+")",iconInverse:"light-dark("+baseColors.white+", "+baseColors.black+")",iconOnColor:"light-dark("+baseColors.white+", "+baseColors.white+")",iconDanger:"light-dark("+baseColors.signalRed700+", "+baseColors.signalRed700+")",iconDisabled:"light-dark("+baseColors.gray300+", "+baseColors.gray700+")",iconSuccess:"light-dark("+baseColors.signalGreen700+", "+baseColors.signalGreen700+")",iconInfo:"light-dark("+baseColors.signalBlue700+", "+baseColors.signalBlue700+")",iconWarning:"light-dark("+baseColors.signalRed700+", "+baseColors.signalRed700+")",iconImportant:"light-dark("+baseColors.signalYellow700+", "+baseColors.signalYellow700+")",linkEnabled:"light-dark("+baseColors.blue700+", "+baseColors.blue600+")",linkHover:"light-dark("+baseColors.blue900+", "+baseColors.blue500+")",linkPressed:"light-dark("+baseColors.black+", "+baseColors.blue400+")",linkVisited:"light-dark("+baseColors.purple+", "+baseColors.purple+")",notificationBorderSuccess:"light-dark("+baseColors.signalGreen700+", "+baseColors.signalGreen700+")",notificationBorderInfo:"light-dark("+baseColors.signalBlue700+", "+baseColors.signalBlue700+")",notificationBorderImportant:"light-dark("+baseColors.signalYellow700+", "+baseColors.signalYellow700+")",notificationBorderWarning:"light-dark("+baseColors.signalRed700+", "+baseColors.signalRed700+")",notificationBackgroundSuccess:"light-dark("+baseColors.signalGreen100+", "+baseColors.gray100+")",notificationBackgroundInfo:"light-dark("+baseColors.signalBlue100+", "+baseColors.gray100+")",notificationBackgroundImportant:"light-dark("+baseColors.signalYellow100+", "+baseColors.gray100+")",notificationBackgroundWarning:"light-dark("+baseColors.signalRed100+", "+baseColors.gray100+")",textPrimary:"light-dark("+baseColors.gray1000+", "+baseColors.gray100+")",textSecondary:"light-dark("+baseColors.gray700+", "+baseColors.gray400+")",textBrand:"light-dark("+baseColors.blue900+", "+baseColors.gray100+")",textOnColor:"light-dark("+baseColors.white+", "+baseColors.white+")",textInverse:"light-dark("+baseColors.white+", "+baseColors.black+")",textSubtle:"light-dark("+baseColors.gray500+", "+baseColors.gray500+")",textDisabled:"light-dark("+baseColors.gray300+", "+baseColors.gray700+")",textInvalid:"light-dark("+baseColors.signalRed700+", "+baseColors.signalRed700+")",textPlaceholder:"light-dark("+baseColors.gray400+", "+baseColors.gray700+")",buttonBackgroundPrimary:"light-dark("+baseColors.blue900+", "+baseColors.blue700+")",buttonBackgroundPrimaryHover:"light-dark("+baseColors.blue800+", "+baseColors.blue800+")",buttonBackgroundPrimaryActive:"light-dark("+baseColors.blue700+", "+baseColors.blue900+")",buttonBackgroundSecondary:"light-dark("+baseColors.white+", "+baseColors.gray1000+")",buttonBackgroundSecondaryHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray1050+")",buttonBackgroundSecondaryActive:"light-dark("+baseColors.gray200+", "+baseColors.gray900+")",buttonBackgroundTertiaryHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray1050+")",buttonBackgroundTertiaryActive:"light-dark("+baseColors.gray200+", "+baseColors.gray900+")",buttonBackgroundDanger:"light-dark("+baseColors.signalRed700+", "+baseColors.signalRed700+")",buttonBackgroundDangerHover:"light-dark("+baseColors.signalRed800+", "+baseColors.signalRed800+")",buttonBackgroundDangerActive:"light-dark("+baseColors.signalRed900+", "+baseColors.signalRed900+")",buttonBackgroundDisabled:"light-dark("+baseColors.gray100+", "+baseColors.gray900+")",buttonBackgroundSkeleton:"light-dark("+baseColors.gray100+", "+baseColors.gray900+")",buttonBackgroundGhostHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray1050+")",buttonBackgroundGhostActive:"light-dark("+baseColors.gray200+", "+baseColors.gray1050+")",buttonBorderPrimary:"light-dark("+baseColors.blue900+", "+baseColors.gray100+")",logoPrimary:"light-dark("+baseColors.red700+", "+baseColors.white+")"};

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