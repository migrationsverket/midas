"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6881],{

/***/ 75380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_15_mdx_9c8_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_15_mdx_9c8_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27648);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28453);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65537);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79329);
/* harmony import */ var _site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71372);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1353);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39996);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52981);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78815);
/* harmony import */ var _midas_ds_components_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66995);


const frontMatter = {
	title: 'Release 15',
	description: '.',
	slug: 'release-15',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [],
};

/*truncate*/












const toc = [{
  "value": "Ny komponent: Multiselect",
  "id": "ny-komponent-multiselect",
  "level": 2
}, {
  "value": "Uppdatering: LinkButton",
  "id": "uppdatering-linkbutton",
  "level": 2
}, {
  "value": "Uppdatering: Link",
  "id": "uppdatering-link",
  "level": 2
}, {
  "value": "Fristående länk",
  "id": "fristående-länk",
  "level": 3
}, {
  "value": "Utsträckt länk",
  "id": "utsträckt-länk",
  "level": 3
}, {
  "value": "Nytt designmönster för knappar och länkar",
  "id": "nytt-designmönster-för-knappar-och-länkar",
  "level": 2
}, {
  "value": "Mindre justeringar",
  "id": "mindre-justeringar",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Nedan är en sammanfattning av nyheterna i release 15."
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "ny-komponent-multiselect",
      children: "Ny komponent: Multiselect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      groupId: "npm2yarn",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        value: "npm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/multi-select\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        value: "yarn",
        label: "Yarn",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/multi-select\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/multi-select\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "uppdatering-linkbutton",
      children: "Uppdatering: LinkButton"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["LinkButton har en ny, förtydligande design. LinkButton var tydligare grafiskt exakt lik en ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Button"
      }), " fast som ett ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "<a>-element"
      }), ". Det nya utseendet förtydligar att detta är just en länk. Däremot har den fortfarande varianter och storlekar som en ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Button"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      scope: {
        Flex: _midas_ds_components__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .s,
        FlexItem: _midas_ds_components__WEBPACK_IMPORTED_MODULE_7__/* .FlexItem */ .Z,
        LinkButton: _midas_ds_components__WEBPACK_IMPORTED_MODULE_8__/* .LinkButton */ .z
      },
      children: `<LinkButton href="#">Starta tjänst</LinkButton>`
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "uppdatering-link",
      children: "Uppdatering: Link"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Komponenten ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_9__/* .Link */ .N, {
        href: "/components/link",
        children: "Link"
      }), " är nu uppdaterad med varianterna Fristående och Utsträckt."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "fristående-länk",
      children: "Fristående länk"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Fristående länk används när länken ligger utanför ett textstycke."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      scope: {
        Link: _midas_ds_components__WEBPACK_IMPORTED_MODULE_9__/* .Link */ .N
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "utsträckt-länk",
      children: "Utsträckt länk"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Utsträckt länk används för att göra hela föräldraelementet klickbart."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      scope: {
        Link: _midas_ds_components__WEBPACK_IMPORTED_MODULE_9__/* .Link */ .N,
        baseColors: _midas_ds_components_theme__WEBPACK_IMPORTED_MODULE_10__.baseColors
      },
      children: `<div
    style={{
      position: 'relative',
      background: baseColors.gray10,
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "nytt-designmönster-för-knappar-och-länkar",
      children: "Nytt designmönster för knappar och länkar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "I syfte att göra våra applikationer så tillgängliga som möjligt har vi skapat ett designmönster som stöd för att välja rätt komponent."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_9__/* .Link */ .N, {
      standalone: true,
      href: "/design-patterns/buttons-and-links",
      children: 'Läs mer om designmönstret här'
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "mindre-justeringar",
      children: "Mindre justeringar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Alla ikoner är nu 20x20px"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Merparten av komponenternas fokusutseende är uppdaterat så att det följer vårt mönster"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Riktlinjer för ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_9__/* .Link */ .N, {
          href: "/design-patterns/personnummer",
          children: "Personnummer"
        }), " har fått ett eget designmönster"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_9__/* .Link */ .N, {
          href: "/components/card",
          children: "Card"
        }), " har ny design med Fristående länk"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
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

/***/ 66995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baseColors: () => (/* binding */ baseColors),
/* harmony export */   spacing: () => (/* binding */ spacing),
/* harmony export */   states: () => (/* binding */ states),
/* harmony export */   typography: () => (/* binding */ typography)
/* harmony export */ });
var baseColors={black:'#000000',white:'#ffffff',blackHover:'#0d0d0d',whiteHover:'#e6e6e6',gray100:'#f2f2f2',gray150:'#e6e6e6',gray200:'#bfbfbf',gray250:'#cccccc',gray300:'#bfbfbf',gray350:'#b3b3b3',gray400:'#a6a6a6',gray450:'#999999',gray500:'#8c8c8c',gray550:'#808080',gray600:'#737373',gray650:'#666666',gray700:'#525252',gray750:'#5d5d5d',gray800:'#383838',gray850:'#474747',gray900:'#262626',gray950:'#333333',blue700:'#2e7ca5',blue800:'#25607f',blue900:'#143c50',purple:'#663366',red700:'#b90835',signalBlue100:'#eaf2f6',signalBlue700:'#0066cc',signalGreen100:'#d5f2d9',signalGreen700:'#008d3c',signalRed100:'#ffdfdf',signalRed700:'#e62323',signalRed800:'#b31b1b',signalRed900:'#801313',signalYellow100:'#fff8e1',signalYellow700:'#fdb813'};var typography={fontFamily:'"Inter", sans-serif',lineHeight01:1,// 16px
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
};var states={focus:'0 0 0 2px white, 0 0 0 4px black'};

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


/***/ }),

/***/ 27648:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/pr-preview/pr-340/blog/release-15","source":"@site/blog/release15.mdx","title":"Release 15","description":".","date":"2024-11-15T07:33:50.000Z","tags":[],"readingTime":1.695,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Release 15","description":".","slug":"release-15","pagination_prev":null,"pagination_next":null},"unlisted":false,"prevItem":{"title":"Release 16","permalink":"/pr-preview/pr-340/blog/release-16"},"nextItem":{"title":"Release 14","permalink":"/pr-preview/pr-340/blog/release-14"}}');

/***/ })

}]);