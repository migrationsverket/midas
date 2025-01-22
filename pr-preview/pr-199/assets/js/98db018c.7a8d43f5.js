"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6960],{

/***/ 64661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_spinner_mdx_98d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-spinner-mdx-98d.json
const site_docs_components_spinner_mdx_98d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/spinner","title":"Spinner","description":"Upplys användaren om att systemet/tjänsten laddar","source":"@site/docs/components/spinner.mdx","sourceDirName":"components","slug":"/components/spinner","permalink":"/pr-preview/pr-199/components/spinner","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Spinner","description":"Upplys användaren om att systemet/tjänsten laddar","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(11470);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(19365);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 1 modules
var propsTable = __webpack_require__(4928);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 3 modules
var getComponentMetaData = __webpack_require__(32705);
// EXTERNAL MODULE: ./packages/spinner/src/index.ts + 2 modules
var src = __webpack_require__(75735);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var button_src = __webpack_require__(63918);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(29511);
;// ./apps/docs/docs/components/spinner.mdx


const frontMatter = {
	title: 'Spinner',
	description: 'Upplys användaren om att systemet/tjänsten laddar',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};










const toc = [{
  "value": "Installation och användning",
  "id": "installation-och-användning",
  "level": 2
}, {
  "value": "Kombinerat med andra komponenter",
  "id": "kombinerat-med-andra-komponenter",
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
      name: 'Spinner',
      friendlyName: 'Laddningsindikator',
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponenten används för att upplysa användaren om att systemet/tjänsten laddar eller jobbar på något i bakgrunden."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation-och-användning",
      children: "Installation och användning"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "npm2yarn",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "npm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/spinner\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/spinner\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/spinner\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Spinner } from '@midas-ds/spinner'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Spinner: src/* Spinner */.y
      },
      children: `<Spinner />`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kombinerat-med-andra-komponenter",
      children: "Kombinerat med andra komponenter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använd varianten small för att kombinera med andra komponenter t.ex Button"
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Spinner: src/* Spinner */.y,
        Button: button_src/* Button */.$n
      },
      children: `<Button>
<Spinner
  dark
  small
/>
Laddar
</Button>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Om det väntas ta mer än 10 sekunder att ladda sidan bör det förutom en spinner finnas ett meddelande till användaren om det."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: 'Spinner'
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

/***/ 75735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* reexport */ Spinner)
});

;// ./packages/spinner/src/lib/Spinner.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Spinner_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","red100":"#b90835","blue150":"#143c50","container":"container_q2e8","spinner":"spinner_TRW8","rotating":"rotating_kCFF","dark":"dark_Z44f","vsHidden":"vsHidden_FrrE"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(8723);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/spinner/src/lib/Spinner.tsx
var Spinner=function Spinner(_ref){var small=_ref.small,dark=_ref.dark;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Spinner_module.container,role:"status",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(loader_circle/* default */.A,{className:(0,clsx/* default */.A)(Spinner_module.spinner,dark&&Spinner_module.dark),size:small?16:32,strokeWidth:small?2:3,absoluteStrokeWidth:true}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Spinner_module.vsHidden,children:"Laddar, v\xE4nligen v\xE4nta."})]});};
;// ./packages/spinner/src/index.ts


/***/ }),

/***/ 8723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LoaderCircle)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const LoaderCircle = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);


//# sourceMappingURL=loader-circle.js.map


/***/ })

}]);