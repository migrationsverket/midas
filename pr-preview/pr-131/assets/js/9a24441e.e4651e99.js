"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[7893],{

/***/ 37202:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _midas_ds_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85560);


const frontMatter = {};
const contentTitle = 'Personnummer';
const metadata = {
  "id": "design-patterns/personnummer",
  "title": "Personnummer",
  "description": "Vi följer Skatteverkets regler gällande hur ett personnummer är formaterat. Personnummer består av födelsetid (ÅÅMMDD) och födelsenummer (NNNN) separerat med bindestreck - eller med plus + för personer som är äldre än hundra år. Ett personnummer skrivs alltså på formen ÅÅMMDD-NNNN och det är så vi anger det i hjälptexter m.m.",
  "source": "@site/docs/design-patterns/personnummer.mdx",
  "sourceDirName": "design-patterns",
  "slug": "/design-patterns/personnummer",
  "permalink": "/pr-preview/pr-131/design-patterns/personnummer",
  "draft": false,
  "unlisted": false,
  "tags": [],
  "version": "current",
  "frontMatter": {},
  "sidebar": "sideBar",
  "previous": {
    "title": "Frågeformulär",
    "permalink": "/pr-preview/pr-131/design-patterns/forms"
  }
};
const assets = {

};




const toc = [{
  "value": "Födelsetid",
  "id": "födelsetid",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.header, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
        id: "personnummer",
        children: "Personnummer"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Vi följer Skatteverkets regler gällande hur ett personnummer är formaterat. Personnummer består av födelsetid (ÅÅMMDD) och födelsenummer (NNNN) separerat med bindestreck ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "-"
      }), " eller med plus ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "+"
      }), " för personer som är äldre än hundra år. Ett personnummer skrivs alltså på formen ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ÅÅMMDD-NNNN"
      }), " och det är så vi anger det i hjälptexter m.m."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Men för att göra det så lätt som möjligt för användaren att mata in personnummer finns det en förlåtande personnummerinmatning som en egenskap till ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_midas_ds_link__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .N, {
        href: "/components/textfield",
        children: "TextField"
      }), ". Med den accepteras alla möjliga sätt att skriva ett (giltigt) personnummer. Implementationen är uppbyggd så att den:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Tillåter frivilliga sekelsiffor: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "19"
        }), " eller ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "20"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Tillåter flera olika avgränsare: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "+"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "-"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "blanksteg"
        }), " eller inget"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_midas_ds_link__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .N, {
      standalone: true,
      href: "/components/textfield/#personnummer",
      children: "Mer information om vår förlåtande personnummerinmatning"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "födelsetid",
      children: "Födelsetid"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "I flera av våra tjänster är endast födelsetid obligatoriskt då det inte är säkert att användaren har svenskt personnummer. Födelstid skrivs ÅÅMMDD."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
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