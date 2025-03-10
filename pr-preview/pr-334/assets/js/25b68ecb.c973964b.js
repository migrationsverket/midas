"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6158],{

/***/ 38434:
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
  metadata: () => (/* reexport */ site_docs_components_skeleton_mdx_25b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-skeleton-mdx-25b.json
const site_docs_components_skeleton_mdx_25b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/skeleton","title":"Skeleton","description":"Laddningsindikator för komponenter","source":"@site/docs/components/skeleton.mdx","sourceDirName":"components","slug":"/components/skeleton","permalink":"/pr-preview/pr-334/components/skeleton","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Skeleton","description":"Laddningsindikator för komponenter","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(71372);
// EXTERNAL MODULE: ./packages/components/src/skeleton/Skeleton.tsx + 1 modules
var Skeleton = __webpack_require__(3264);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var Link = __webpack_require__(78815);
;// ./apps/docs/docs/components/skeleton.mdx


const frontMatter = {
	title: 'Skeleton',
	description: 'Laddningsindikator för komponenter',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};









const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      Skeleton: Skeleton/* Skeleton */.E
    },
    ...props,
    children: `<Skeleton height='48px'/>`
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
  "value": "Rectangular",
  "id": "rectangular",
  "level": 3
}, {
  "value": "Circle",
  "id": "circle",
  "level": 3
}, {
  "value": "Animation",
  "id": "animation",
  "level": 2
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
      name: 'Skeleton',
      friendlyName: 'Laddningsindikator',
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponent som används som en platshållare för den riktiga komponenten innan sidan laddat klart"
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
        children: "import { Skeleton } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rectangular",
      children: "Rectangular"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Detta är standardvarianten. Används som platshållare för text och de flesta komponenter vi har. Ange storleken i px, rem eller % med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "width"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "height"
      }), ". Om inget anges kommer den att fylla sin parent container."]
    }), "\n", (0,jsx_runtime.jsx)(Example, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "circle",
      children: "Circle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Används för cirkulära komponenter, tex avatar. Circle behöver bara ", (0,jsx_runtime.jsx)(_components.code, {
        children: "width"
      }), " och sätter automatiskt höjden så att den blir rund."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Skeleton: Skeleton/* Skeleton */.E
      },
      children: `<Skeleton variant='circle' width='48px'/>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "animation",
      children: "Animation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Skeleton har som standard en animationen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "wave"
      }), " aktiverad. Den går att stänga av med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "animation= 'false'"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Skeleton: Skeleton/* Skeleton */.E
      },
      children: `<Skeleton height='48px' animation='false'/>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För val av laddningsindikator se ", (0,jsx_runtime.jsx)(Link/* Link */.N, {
        href: "/design-patterns/page-loading",
        children: "Mönster för laddningsindikatorer"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: 'Skeleton'
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
/* harmony default export */ const Link_module = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","blue130":"#25607f","blue150":"#143c50","gray150":"#1f1f1f","gray50":"#bfbfbf","mediumWeight":"500","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","regularWeight":"400","linkVisited":"#663366","black":"#000000","link":"link_RCbb","icon":"icon_Bxuv","standalone":"standalone_Cg9F","stretched":"stretched_pvQw"});
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

/***/ 3264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Skeleton)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/components/src/skeleton/Skeleton.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Skeleton_module = ({"skeleton":"skeleton_r1UF","circle":"circle_V2WO","wave":"wave_h9Fk"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/skeleton/Skeleton.tsx
var Skeleton=function Skeleton(_ref){var _ref$variant=_ref.variant,variant=_ref$variant===void 0?'rectangular':_ref$variant,width=_ref.width,height=_ref.height,_ref$animation=_ref.animation,animation=_ref$animation===void 0?'wave':_ref$animation;if(variant==='circle'&&height!==undefined){console.warn('Height is not allowed when using circle, control size with width');}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(Skeleton_module.skeleton,Skeleton_module[variant],animation&&Skeleton_module[animation]),style:{width:width,height:height}});};

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