"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[3290],{

/***/ 34542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_basics_icons_mdx_79d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-basics-icons-mdx-79d.json
const site_docs_basics_icons_mdx_79d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"basics/icons","title":"Ikoner","description":"Ikoner används som ett komplement till text för att underlätta för användaren. Midas använder Lucide Icons som ikonbibliotek. Vi använder ikonerna direkt från Lucide, utan några modifieringar.","source":"@site/docs/basics/icons.mdx","sourceDirName":"basics","slug":"/basics/icons","permalink":"/pr-preview/pr-945/basics/icons","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"icons","title":"Ikoner","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/plus.js
var plus = __webpack_require__(80697);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/minus.js
var minus = __webpack_require__(86241);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(45773);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(84722);
;// ./node_modules/lucide-react/dist/esm/icons/log-in.js
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
];
const LogIn = (0,createLucideIcon/* default */.A)("log-in", __iconNode);


//# sourceMappingURL=log-in.js.map

;// ./apps/docs/docs/basics/icons.mdx


const frontMatter = {
	id: 'icons',
	title: 'Ikoner',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Riktlinjer för ikoner",
  "id": "riktlinjer-för-ikoner",
  "level": 2
}, {
  "value": "Standardikoner",
  "id": "standardikoner",
  "level": 2
}, {
  "value": "Egna ikoner",
  "id": "egna-ikoner",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ikoner används som ett komplement till text för att underlätta för användaren. Midas använder ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://lucide.dev/guide/packages/lucide-react",
        children: "Lucide Icons"
      }), " som ikonbibliotek. Vi använder ikonerna direkt från Lucide, utan några modifieringar."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer-för-ikoner",
      children: "Riktlinjer för ikoner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ikonen ligger som standard till vänster om texten."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ikoner kan användas fristående, tex där det är ont om plats. Rekommendationen är dock att komplettera ikonen med en beskrivande text så ofta det går."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ikonen ska ha samma färg som den kompletterande texten."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Färgen på ikoner sätts via våra ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/pr-preview/pr-945/basics/tokens#ikoner",
          children: "icon tokens"
        }), ". Inga egna färger utanför tokens används."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ikoner ska alltid ha tillräcklig kontrast mot bakgrund."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standardstorleken på ikonerna är 20px. Om textstorleken är liten eller ikonen används i en tabell kan 16px användas istället."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "standardikoner",
      children: "Standardikoner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För att säkerställga enhetlighet och tydlighet har vi ett antal standardikoner som ska användas på samma sätt i alla system."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ikon"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Namn"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Semantisk användning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(plus/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "plus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Lägg till"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(minus/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "minus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ta bort, minska, indeterminate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(check/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ok, slutfört"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(LogIn, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "log-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Logga in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(LogIn, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "log-out"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Logga ut"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "egna-ikoner",
      children: "Egna ikoner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Om du har behov av en ikon som inte finns i Lucide icons, kontakta Midas-teamet för analys av behovet och möjliga lösningar."
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

/***/ 45773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Check)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("check", __iconNode);


//# sourceMappingURL=check.js.map


/***/ }),

/***/ 80697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Plus)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("plus", __iconNode);


//# sourceMappingURL=plus.js.map


/***/ }),

/***/ 86241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Minus)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("minus", __iconNode);


//# sourceMappingURL=minus.js.map


/***/ })

}]);