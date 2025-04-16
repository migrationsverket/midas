"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5990],{

/***/ 2690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_get_started_use_mdx_f81_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-get-started-use-mdx-f81.json
const site_docs_get_started_use_mdx_f81_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/use","title":"Använda Midas","description":"Designer","source":"@site/docs/get-started/use.mdx","sourceDirName":"get-started","slug":"/get-started/use","permalink":"/pr-preview/pr-484/get-started/use","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Använda Midas","sidebar_label":"Använda","sidebar_position":1,"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var Link = __webpack_require__(78815);
;// ./apps/docs/docs/get-started/use.mdx


const frontMatter = {
	title: 'Använda Midas',
	sidebar_label: 'Använda',
	sidebar_position: 1,
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Designer",
  "id": "designer",
  "level": 2
}, {
  "value": "Utvecklare",
  "id": "utvecklare",
  "level": 2
}, {
  "value": "Importera och använd komponent",
  "id": "importera-och-använd-komponent",
  "level": 3
}, {
  "value": "Installera Inter som typsnitt",
  "id": "installera-inter-som-typsnitt",
  "level": 3
}, {
  "value": "Rapportera buggar eller förslag till nya features",
  "id": "rapportera-buggar-eller-förslag-till-nya-features",
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
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "designer",
      children: "Designer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För dig som designar gränssnitt finns två UI-kit till Adobe XD, ett för ljust och ett för mörkt tema. De innehåller\nfärdiga designkomponenter och layoutmallar som följer Migrationsverkets digitala stil och grafiska profil. Om du inte\nhar Adobe XD har vi onlineversioner för både ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://xd.adobe.com/view/3956fdcc-49a2-4103-be79-826cd32b03a1-6c05/?hints=off",
        children: "ljust"
      }), " och\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://xd.adobe.com/view/e8603d75-698d-4896-a7ea-686d6847479e-bd33/?hints=off",
        children: "mörkt"
      }), " tema."]
    }), "\n", (0,jsx_runtime.jsx)(Link/* Link */.N, {
      target: "_blank",
      href: (__webpack_require__(77403)/* ["default"] */ .A),
      download: true,
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Här kan du ladda ner våra UI-kit till Adobe XD (version 20)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "utvecklare",
      children: "Utvecklare"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Installera komponenter via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install @midas-ds/components"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "importera-och-använd-komponent",
      children: "Importera och använd komponent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generellt, importera och använd direkt:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Component } from '@midas-ds/components';\n...\n<Component/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För specfika instruktioner, se respektive komponent."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installera-inter-som-typsnitt",
      children: "Installera Inter som typsnitt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detta är ett rekommenderat sätt att installera vårt typsnitt Inter."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{1} title=\"App.tsx (rootfilen i din app)\"",
        children: "import '@midas-ds/components/global.css'\n\nexport default function App({ children }) {\n  return <main>{children}</main>\n}\n\nexport default App\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Det går självklart att använda andra metoder så länge vikterna 400, 500 och 600 inkluderas samt att det importerade typsnittet heter just \"Inter\" för att komponenterna ska ta användning av det."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mer info finns på ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/migrationsverket/midas",
        children: "GitHub"
      }), " samt under ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/common-issues",
        children: "guider"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rapportera-buggar-eller-förslag-till-nya-features",
      children: "Rapportera buggar eller förslag till nya features"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hittat en bugg eller förbättringsmöjlighet? Det går utmärkt att skapa ärenden via ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/migrationsverket/midas/issues",
        children: "github issues"
      }), ".\nDet går naturligtvis också bra att kontakta MIDAS-teamet via alla de normala kontaktvägarna. Alla synpunkter är välkomna!"]
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
/* harmony default export */ const Link_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--link-enabled":"light-dark(#2e7ca5, #4289ad)","--link-hover":"light-dark(#143c50, #5897b8)","--link-pressed":"light-dark(#171717, #82b0c9)","--link-visited":"light-dark(#954b95, #b46ab4)","--text-disabled":"light-dark(#bfbfbf, #525252)","--focus":"0 0 0 2px white, 0 0 0 4px black","--z-index-base":"1","link":"link_RCbb","icon":"icon_Bxuv","standalone":"standalone_Cg9F","stretched":"stretched_pvQw"});
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

/***/ 77403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/MIDAS_UIkit_20-30c31b40ff68ffab01f03043c601f121.zip");

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