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
  "description": "Personnummer skrivs ihop med bindestreck (eller med plustecken för personer som är äldre än",
  "source": "@site/docs/design-patterns/personnummer.mdx",
  "sourceDirName": "design-patterns",
  "slug": "/design-patterns/personnummer",
  "permalink": "/pr-preview/pr-132/design-patterns/personnummer",
  "draft": false,
  "unlisted": false,
  "tags": [],
  "version": "current",
  "frontMatter": {},
  "sidebar": "sideBar",
  "previous": {
    "title": "Frågeformulär",
    "permalink": "/pr-preview/pr-132/design-patterns/forms"
  }
};
const assets = {

};




const toc = [{
  "value": "Födelsedatum",
  "id": "födelsedatum",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      children: ["Personnummer skrivs ihop med bindestreck (eller med plustecken för personer som är äldre än\nhundra år) före de fyra sista siffrorna, dvs ÅÅMMDD-XXXX (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.isof.se/stod-och-sprakrad/vagledningar/myndigheternas-skrivregler",
        children: "Myndigheternas skrivregler, s103"
      }), ")."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Det finns en färdig implementation av en förlåtande personnummerinmatning som en egenskap till ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_midas_ds_link__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .N, {
        href: "/components/textfield",
        children: "TextField"
      }), ". Med den blir de flesta inmatningar rätt så länge det är 10 eller 12 siffror.\nImplementationen är uppbyggd så att den:"]
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
      children: "Mer information om förlåtande personnummerinmatning"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "födelsedatum",
      children: "Födelsedatum"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "I flera av våra tjänster är endast födelsedatum obligatoriskt då det inte är säkert att sökande har svenskt personnummer. Födelsedatum skrivs, på samma sätt som personnummer, ihop, dvs ÅÅMMDD"
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