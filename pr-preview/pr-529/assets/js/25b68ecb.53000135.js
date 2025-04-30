"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6158],{

/***/ 38434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_skeleton_mdx_25b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-skeleton-mdx-25b.json
const site_docs_components_skeleton_mdx_25b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/skeleton","title":"Skeleton","description":"Laddningsindikator för komponenter","source":"@site/docs/components/skeleton.mdx","sourceDirName":"components","slug":"/components/skeleton","permalink":"/pr-preview/pr-529/components/skeleton","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Skeleton","description":"Laddningsindikator för komponenter","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 187 modules
var propsTable = __webpack_require__(35926);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./packages/components/src/skeleton/Skeleton.tsx + 1 modules
var Skeleton = __webpack_require__(3264);
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
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'Skeleton',
      friendlyName: 'Laddningsindikator',
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponent som används som en platshållare för den riktiga komponenten innan sidan laddat klart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Skeleton height='48px' />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Skeleton/* Skeleton */.E, {
        height: "48px"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Skeleton height='48px' />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Skeleton/* Skeleton */.E, {
        height: "48px"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "circle",
      children: "Circle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Används för cirkulära komponenter, tex avatar. Circle behöver bara ", (0,jsx_runtime.jsx)(_components.code, {
        children: "width"
      }), " och sätter automatiskt höjden så att den blir rund."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Skeleton\n  variant='circle'\n  width='48px'\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Skeleton/* Skeleton */.E, {
        variant: "circle",
        width: "48px"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "animation",
      children: "Animation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Skeleton har som standard en animationen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "wave"
      }), " aktiverad. Den går att stänga av med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "animation='false'"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Skeleton\n  height='48px'\n  animation='false'\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Skeleton/* Skeleton */.E, {
        height: "48px",
        animation: "false"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För val av laddningsindikator se ", (0,jsx_runtime.jsx)(_components.a, {
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
/* harmony default export */ const Skeleton_module = ({"tokens":"\"../theme/tokens.css\"","--field-skeleton":"light-dark(#f2f2f2, #262626)","--background-inverse":"light-dark(#171717, #f2f2f2)","skeleton":"skeleton_r1UF","circle":"circle_V2WO","wave":"wave_h9Fk"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/skeleton/Skeleton.tsx
var Skeleton=function Skeleton(_ref){var _ref$variant=_ref.variant,variant=_ref$variant===void 0?'rectangular':_ref$variant,width=_ref.width,height=_ref.height,_ref$animation=_ref.animation,animation=_ref$animation===void 0?'wave':_ref$animation;if(variant==='circle'&&height!==undefined){console.warn('Height is not allowed when using circle, control size with width');}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(Skeleton_module.skeleton,Skeleton_module[variant],animation&&Skeleton_module[animation]),style:{width:width,height:height}});};

/***/ })

}]);