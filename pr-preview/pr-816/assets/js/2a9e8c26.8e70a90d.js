"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[7165],{

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 90754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_get_started_contribute_tokens_index_mdx_2a9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-get-started-contribute-tokens-index-mdx-2a9.json
const site_docs_get_started_contribute_tokens_index_mdx_2a9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/contribute/tokens/index","title":"Design Tokens","description":"Design tokens är de minsta beståndsdelarna i designsystemet och utgör grunden för all styling. De representerar","source":"@site/docs/get-started/contribute/tokens/index.mdx","sourceDirName":"get-started/contribute/tokens","slug":"/get-started/contribute/tokens/","permalink":"/pr-preview/pr-816/get-started/contribute/tokens/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Theme/Tokens","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/get-started/contribute/tokens/index.mdx


const frontMatter = {
	sidebar_label: 'Theme/Tokens',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Design Tokens';

const assets = {

};



const toc = [{
  "value": "Style Dictionary",
  "id": "style-dictionary",
  "level": 2
}, {
  "value": "DTCG-standard",
  "id": "dtcg-standard",
  "level": 2
}, {
  "value": "Generering av variabler",
  "id": "generering-av-variabler",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "design-tokens",
        children: "Design Tokens"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design tokens är de minsta beståndsdelarna i designsystemet och utgör grunden för all styling. De representerar\ndesignbeslut som färger, typsnitt, avstånd och andra visuella egenskaper."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "style-dictionary",
      children: "Style Dictionary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vi använder ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://styledictionary.com/",
        children: "Style Dictionary"
      }), " för att transformera våra design tokens till olika format\nsom kan användas i våra applikationer. Style Dictionary är ett verktyg som tar en uppsättning design tokens i ett\nstandardiserat format och genererar plattformsspecifika filer, till exempel CSS-variabler, JavaScript-objekt eller iOS/Android-resurser."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dtcg-standard",
      children: "DTCG-standard"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Våra design tokens följer ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://design-tokens.github.io/community-group/format/",
        children: "Design Tokens Community Group (DTCG)"
      }), " standarden. Detta innebär att våra tokens\när strukturerade på ett sätt som är kompatibelt med andra verktyg och plattformar som också följer denna standard.\nDet gör det enklare att dela och återanvända våra designbeslut över olika projekt och teknologier."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        metastring: "title=\"tokens.json\"",
        children: "{\n  \"color\": {\n    \"$type\": \"color\",\n    \"black\": {\n      \"base\": {\n        \"$value\": \"#000\",\n        \"$description\": \"Black\"\n      },\n      \"hover\": {\n        \"$value\": \"#0d0d0d\",\n        \"$description\": \"Black hover\"\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generering-av-variabler",
      children: "Generering av variabler"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att generera CSS-variabler från våra design tokens använder vi ett skript som heter ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sd.build.mjs"
      }), ". Detta skript körs med kommandot ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nx run theme:build"
      }), " och gör följande:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Läser in tokens:"
        }), " Skriptet läser in alla token-filer från ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/packages/theme/tokens"
        }), " och slår ihop dem till ett enda stort objekt."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transformerar tokens:"
        }), " Style Dictionary transformerar sedan detta objekt enligt de konfigurationer som finns i ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sd.build.mjs"
        }), ". Detta inkluderar att omvandla färger till rätt format, lägga till prefix och andra anpassningar."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Genererar filer:"
        }), " Slutligen genererar Style Dictionary CSS-filer med alla våra design tokens som CSS-variabler. Dessa filer sparas i ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/dist/packages/theme"
        }), " och kan sedan importeras och användas i våra komponenter och applikationer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["De genererade filerna publiceras som ett eget npm-paket med namnet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/theme"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En komplett lista över alla tillgängliga tokens finns på sidan ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pr-preview/pr-816/get-started/contribute/tokens/dev-tokens",
        children: "token reference"
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



/***/ })

}]);