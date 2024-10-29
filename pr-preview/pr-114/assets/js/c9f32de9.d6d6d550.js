"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5426],{

/***/ 61038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	title: 'Om Designsystemet',
	description: 'Midas',
	hide_table_of_contents: true
};
const contentTitle = 'Migrationsverkets designsystem';
const metadata = {
  "type": "mdx",
  "permalink": "/pr-preview/pr-114/about",
  "source": "@site/src/pages/about.mdx",
  "title": "Om Designsystemet",
  "description": "Midas",
  "frontMatter": {
    "title": "Om Designsystemet",
    "description": "Midas",
    "hide_table_of_contents": true
  },
  "unlisted": false
};
const assets = {

};



const toc = [{
  "value": "Varför ska vi ha ett designsystem?",
  "id": "varför-ska-vi-ha-ett-designsystem",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.header, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
        id: "migrationsverkets-designsystem",
        children: "Migrationsverkets designsystem"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "row",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col col--8",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Designsystem består av två delar. En del är verktygslådan som samlar verktyg, processer och riktlinjer på ett ställe. Den andra delen består av människorna som samarbetar kring designsystemet med målet att tillsammans ta fram så bra tjänster och produkter för våra användare som möjligt."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Dokumentationswebben är en del av verktygslådan, vilket omfattar kvalitetssäkrade gemensamma komponenter samt visualisering och dokumentation om hur de ska användas i våra it-lösningar. Komponenterna är utformade enligt Migrationsverket grafiska profil, utifrån god kodstandard, utifrån användbarhetsprinciper och enligt regler för digital tillgänglighet.\nPrecis som att vår design och våra guidande principer förändras över tid för att möta förändrade användarbehov kommer designsystemet att vara ett levande material. Målgruppen för designsystemet är alla som arbetar med utveckling av Migrationsverkets tjänster och system."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
          id: "varför-ska-vi-ha-ett-designsystem",
          children: "Varför ska vi ha ett designsystem?"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "Enhetlighet. Öka intern/extern enhetligheten mellan olika nyutvecklade system och tjänster."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "Tillgänglighet. Öka graden av tillgänglighet hos nyutvecklade system och tjänster."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "Samarbete. Ett gemensamt språk, tydligare kommunikation mellan designer och utvecklare. Gemensam utgångspunkt, en gemensam \"sanning\". Samverkan mellan värdeflödesteam blir enklare, t.ex. i framställandet av gemensamma funktioner."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "Effektivitet. Lättare att ta fram koncept, snabbare utveckling. Löpande förbättringar i UX och kod kommer enkelt alla till del. Komponenter testas grundligt av ett centralt team och teamen behöver därför inte testa på komponentnivå. Lägre tröskel för team (externa/interna) att komma igång med utveckling."
            }), "\n"]
          }), "\n"]
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);