"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2770],{

/***/ 30228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_client_side_routing_mdx_870_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-client-side-routing-mdx-870.json
const site_docs_dev_client_side_routing_mdx_870_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/client-side-routing","title":"Routing på klientnivå","description":"Hantera Client Side Navigation tillsammans med designsystemet","source":"@site/docs/dev/client-side-routing.mdx","sourceDirName":"dev","slug":"/dev/client-side-routing","permalink":"/pr-preview/pr-405/dev/client-side-routing","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Routing på klientnivå","description":"Hantera Client Side Navigation tillsammans med designsystemet","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var Link = __webpack_require__(78815);
;// ./apps/docs/docs/dev/client-side-routing.mdx


const frontMatter = {
	title: 'Routing på klientnivå',
	description: 'Hantera Client Side Navigation tillsammans med designsystemet',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Routing på klientnivå';

const assets = {

};




const toc = [{
  "value": "RouterProvider",
  "id": "routerprovider",
  "level": 2
}, {
  "value": "Ersätt grundkomponent",
  "id": "ersätt-grundkomponent",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "routing-på-klientnivå",
        children: "Routing på klientnivå"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Client Side Routing, navigering i webbläsaren"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Våra komponenter har i grunden vanliga ankarlänkar (", (0,jsx_runtime.jsx)(_components.code, {
        children: "<a>"
      }), "-element) för att navigera mellan URL", ":er", " då dessa är absolut mest tillgänliga från grunden och standardiserade.\nOfta vill man dock använda sig av olika ramverks möjligheter till att navigera mellan routes på klientnivå. För att integrera detta med designsystemets komponenter kan man gå tillväga på två olika sätt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "routerprovider",
      children: "RouterProvider"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Från vardera komponent som exponerar en länk kan man även importera en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RouterProvider"
      }), ". Denna accepterar navigatorn från ditt ramverk. Följande exempel är för komponenten ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Link />"
      }), " och ramverket React Router men fungerar likadant med respektive komponent samt ramverk."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Link, RouterProvider } from '@midas-ds/components'\nimport { useNavigate, useHref } from 'react-router';\n...\nexport default function App() {\n  const navigate = useNavigate();\n\n  return (\n      <RouterProvider navigate={navigate} useHref={useHref}>\n          <Link href=\"/\">Startsida</Link>\n          <Link href=\"/om\">Om oss</Link>\n          <Link href=\"/kontakta-oss\">Kontakta oss</Link>\n      </RouterProvider>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ersätt-grundkomponent",
      children: "Ersätt grundkomponent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Istället för en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<RouterProvider>"
      }), " går det att ersätta grundkomponenten till en från ditt ramverk. Detta gör vi med en egenskap vi kallar ", (0,jsx_runtime.jsx)(_components.code, {
        children: "as"
      }), ". Observera att egenskaperna på komponenten då förändras något.\nEgenskaper som vi från designsystemet erbjuder är kvar men egenskaper från grundkomponenten som man nu ersätt försvinner och ersätts med egenskaper från ramverkets komponent. Vi ser i exemplet nedan att komponenten ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Link />"
      }), " justerats för att använda ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Link />"
      }), " från React Router och inte från React Aria.\nIstället för att skriva ", (0,jsx_runtime.jsx)(_components.code, {
        children: "href"
      }), " för länken som vi hade gjort i React Arias komponent skriver vi ", (0,jsx_runtime.jsx)(_components.code, {
        children: "to"
      }), " som React Router vill ha det. Däremot är vår egenskap ", (0,jsx_runtime.jsx)(_components.code, {
        children: "standalone"
      }), " fortfarande möjlig att använda."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Link } from '@midas-ds/components'\nimport { Link as ReactRouterLink } from 'react-router';\n...\nexport default function App() {\n  return <Link as={ReactRouterLink} to=\"/\" standalone>Startsida</Link>;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Du kan läsa mer om detta på React Arias dokumentationswebb. ", (0,jsx_runtime.jsx)(Link/* Link */.N, {
        href: "https://react-spectrum.adobe.com/react-aria/routing.html",
        children: 'React Aria Client Side Routing'
      }), "."]
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


/***/ })

}]);