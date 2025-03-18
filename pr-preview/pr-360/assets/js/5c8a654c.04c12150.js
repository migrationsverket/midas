"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8978],{

/***/ 74568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_19_mdx_5c8_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_19_mdx_5c8_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70328);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28453);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65537);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79329);
/* harmony import */ var _site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71372);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3348);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57389);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78815);


const frontMatter = {
	title: 'Release 19 (v1.1.0)',
	description: 'I och med release 19 går vi över till ett komponentpaket.',
	slug: 'release-19',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [],
};

/*truncate*/






const toc = [{
  "value": "Ett komponentpaket",
  "id": "ett-komponentpaket",
  "level": 2
}, {
  "value": "Ny version av Accordion",
  "id": "ny-version-av-accordion",
  "level": 2
}, {
  "value": "Uncontained",
  "id": "uncontained",
  "level": 3
}, {
  "value": "Contained",
  "id": "contained",
  "level": 3
}, {
  "value": "Uppdatering av DocWebben",
  "id": "uppdatering-av-docwebben",
  "level": 2
}, {
  "value": "Releaseversioner",
  "id": "releaseversioner",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "I och med release 19 går vi över till ett komponentpaket."
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "ett-komponentpaket",
      children: "Ett komponentpaket"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "@midas-ds/components"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Istället för att varje komponent har varsitt installerbart paket kommer nu alla komponenter att finnas i ett paket. Detta för att underlätta installation, uppdateringar och användning av komponenterna. Byt gärna så snart du kan för att få framtida uppdateringar. Installera nya paketet och byt importer bör räcka. Vi finns i supportkanalen för assistans."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      groupId: "npm2yarn",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        value: "npm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/components\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        value: "yarn",
        label: "Yarn",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/components\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/components\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Du kan då alltså importera samtliga komponenter från detta paket istället för från flertalet olika."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Button, Modal, Checkbox } from '@midas-ds/components'\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Det innebär att du endast behöver installera Midas en gång och uppdatera ett paket för att få alla uppdateringar på samtliga komponenter. Vi gör detta för att underlätta för alla att hålla sig uppdaterade. Vi ser ofta att många problem uppstår då man inte har uppdateringar mellan komponenterna i synk med varandra då många komponenter ska fungera ihop."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Vi har även uppdaterat hur typsnittet Inter installeras. Detta är det nya rekommenderade sättet att installera vårt typsnitt Inter. Det går självklart att använda andra metoder så länge vikterna 400, 500 och 600 inkluderas."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{1} title=\"App.tsx (rootfilen i din app)\"",
        children: "import '@midas-ds/components/global.css'\n\nexport default function App({ children }) {\n  return <main>{children}</main>\n}\n\nexport default App\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "ny-version-av-accordion",
      children: "Ny version av Accordion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Vi har bytt API på Accordion då den tidigare byggde på Radix UI. Nu har React Aria lagt till Accordions i sitt paket så därför har vi följt detta istället. Det nya APIet är förenklat från den tidigare vilket vi tror kommer underlätta. Tillsammmans med förenklingen av APIet kommer även en ny varaint av Accordion."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "uncontained",
      children: "Uncontained"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      scope: {
        Accordion: _midas_ds_components__WEBPACK_IMPORTED_MODULE_6__/* .Accordion */ .n,
        AccordionItem: _midas_ds_components__WEBPACK_IMPORTED_MODULE_7__/* .AccordionItem */ .A
      },
      children: `<Accordion>
  {fruits.shuffled().map(fruit => (
    <AccordionItem key={fruit.value} id={fruit.value} title={fruit.name}>
        {fruit.description}
    </AccordionItem>
  ))}
</Accordion>`
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "contained",
      children: "Contained"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      scope: {
        Accordion: _midas_ds_components__WEBPACK_IMPORTED_MODULE_6__/* .Accordion */ .n,
        AccordionItem: _midas_ds_components__WEBPACK_IMPORTED_MODULE_7__/* .AccordionItem */ .A
      },
      children: `<Accordion variant="contained">
  {fruits.shuffled().map(fruit => (
    <AccordionItem key={fruit.value} id={fruit.value} title={fruit.name}>
        {fruit.description}
    </AccordionItem>
  ))}
</Accordion>`
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_8__/* .Link */ .N, {
      href: "/components/accordion",
      standalone: true,
      children: 'Läs mer på komponentens sida'
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "uppdatering-av-docwebben",
      children: "Uppdatering av DocWebben"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Här på DocWebben har vi flyttat om saker samt skapat en ny startsida. Varje komponentsida har en ny tydligare struktur samt API-tabeller. Flertalet sidor har också gjorts om och slagits ihop för en enklare navigering."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "releaseversioner",
      children: "Releaseversioner"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "I och med att vi går över till ett paket så kommer vi endast ha ett versionsnummer att hålla koll på. Framöver kommer dessa releasenotes följa den strukturen. Senaste release är alltså egentligen v1.1.0."
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
/* harmony default export */ const Link_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--link-enabled":"light-dark(#2e7ca5, #4289ad)","--link-hover":"light-dark(#143c50, #5897b8)","--link-pressed":"light-dark(#171717, #82b0c9)","--link-visited":"light-dark(#954b95, #b46ab4)","--text-disabled":"light-dark(#bfbfbf, #525252)","--focus":"0 0 0 2px white, 0 0 0 4px black","link":"link_RCbb","icon":"icon_Bxuv","standalone":"standalone_Cg9F","stretched":"stretched_pvQw"});
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


/***/ }),

/***/ 70328:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/pr-preview/pr-360/blog/release-19","source":"@site/blog/release19.mdx","title":"Release 19 (v1.1.0)","description":"I och med release 19 går vi över till ett komponentpaket.","date":"2025-01-31T09:11:58.000Z","tags":[],"readingTime":2.09,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Release 19 (v1.1.0)","description":"I och med release 19 går vi över till ett komponentpaket.","slug":"release-19","pagination_prev":null,"pagination_next":null},"unlisted":false,"nextItem":{"title":"Release 18","permalink":"/pr-preview/pr-360/blog/release-18"}}');

/***/ })

}]);