"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6505],{

/***/ 21202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_link_mdx_7d4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-link-mdx-7d4.json
const site_docs_components_link_mdx_7d4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/link","title":"Link","description":"Komponent som skapar en länk","source":"@site/docs/components/link.mdx","sourceDirName":"components","slug":"/components/link","permalink":"/pr-preview/pr-534/components/link","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Link","description":"Komponent som skapar en länk","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var Link = __webpack_require__(78815);
// EXTERNAL MODULE: ./packages/components/src/theme/tokens.ts
var tokens = __webpack_require__(66995);
;// ./apps/docs/docs/components/link.mdx


const frontMatter = {
	title: 'Link',
	description: 'Komponent som skapar en länk',
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
  "value": "Länk",
  "id": "länk",
  "level": 3
}, {
  "value": "Fristående",
  "id": "fristående",
  "level": 3
}, {
  "value": "Stretched",
  "id": "stretched",
  "level": 3
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "Val av komponent",
  "id": "val-av-komponent",
  "level": 3
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
      name: "Link",
      friendlyName: "Länk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponenten Link skapar en länk som kan vara i ett textstycke eller fristående."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=Link",
        children: "<p>\n  I vår\n  <Link href='/changelog'>Changelog</Link>\n  dokumenterar vi de senaste ändringarna i komponenterna.\n</p>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["I vår ", (0,jsx_runtime.jsx)(Link/* Link */.N, {
          href: "/changelog",
          children: "Changelog"
        }), " dokumenterar vi de senaste ändringarna i komponenterna."]
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
        className: "language-jsx",
        children: "import { Link } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "länk",
      children: "Länk"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{3} title=\"default\"",
        children: "<p>\n  Designsystemet utvecklas ständigt,\n  <Link href='/changelog'>vilket du kan kan se i vår Changelog</Link>\n  Vi släpper kontinuerligt nya versioner med buggfixar, nya komponenter och nya funktioner.\n</p>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Designsystemet utvecklas ständigt, ", (0,jsx_runtime.jsx)(Link/* Link */.N, {
          href: "/changelog",
          children: "vilket du kan kan se i vår Changelog"
        }), ". Vi släpper\nkontinuerligt nya versioner med buggfixar, nya komponenter och nya funktioner."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fristående",
      children: "Fristående"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "standalone"
      }), " för att använda komponenten som en fristående länk under t.ex ett textblock."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"standalone\"",
        children: "<p>\n  Designsystemet utvecklas ständigt. Vi släpper kontinuerligt nya versioner med buggfixar, nya komponenter och nya funktioner på befintliga komponenter.\n</p>\n<Link\n  // highlight-start\n  standalone\n  // highlight-end\n  href=\"/changelog\"\n>\n  Se vad som har ändrats i senaste versionen\n</Link>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      className: "card",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Designsystemet utvecklas ständigt. Vi släpper kontinuerligt nya versioner med buggfixar, nya komponenter och nya\nfunktioner på befintliga komponenter."
      }), (0,jsx_runtime.jsx)(Link/* Link */.N, {
        standalone: true,
        href: "/changelog",
        children: 'Se vad som har ändrats i senaste versionen'
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stretched",
      children: "Stretched"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stretched"
      }), " för att låta hela föräldraelementet vara klickbart till länken. Föräldern måste ha ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position: relative;"
      }), " för att länkens klickyta inte ska gå för långt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"stretched\"",
        children: "<div style={{ position: 'relative' }}>\n  <p>\n    Designsystemet utvecklas ständigt. Varannan vecka kommer det ett nytt släpp med buggfixar, nya komponenter eller nya\n    funktioner på befintliga komponenter. Om du håller muspekaren här så kan du klicka på länken över hela den gråa\n    ytan.\n  </p>\n  <Link\n    standalone\n    //highlight-start\n    stretched\n    //highlight-end\n    href='/#'\n  >\n    Läs mer om designsystemets nyheter\n  </Link>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)("div", {
        style: {
          position: 'relative',
          background: tokens.semantic.layer01,
          padding: '1rem'
        },
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "Designsystemet utvecklas ständigt. Varannan vecka kommer det ett nytt släpp med buggfixar, nya komponenter eller nya\nfunktioner på befintliga komponenter. Om du håller muspekaren här så kan du klicka på länken över hela den gråa\nytan."
        }), (0,jsx_runtime.jsx)(Link/* Link */.N, {
          standalone: true,
          stretched: true,
          href: "#",
          children: 'Läs mer om designsystemets nyheter'
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "val-av-komponent",
      children: "Val av komponent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Se mönstret ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/design-patterns/buttons-and-links",
        children: "Knappar och länkar"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Link"
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
/* harmony default export */ const Link_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--link-enabled":"light-dark(#2e7ca5, #4289ad)","--link-hover":"light-dark(#143c50, #5897b8)","--link-pressed":"light-dark(#171717, #82b0c9)","--link-visited":"light-dark(#954b95, #b46ab4)","--text-disabled":"light-dark(#bfbfbf, #525252)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--z-index-base":"1","link":"link_RCbb","icon":"icon_Bxuv","standalone":"standalone_Cg9F","stretched":"stretched_pvQw"});
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