"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4827],{

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

/***/ 51939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_get_started_about_mdx_c0f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-get-started-about-mdx-c0f.json
const site_docs_get_started_about_mdx_c0f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/about","title":"Om Midas","description":"Midas är Migrationsverkets designsystem. Designsystemet består av två delar: verktygslådan som samlar verktyg, processer och riktlinjer på ett ställe och människorna som samarbetar kring designsystemet med målet att tillsammans ta fram så bra produkter och tjänster för våra användare som möjligt.","source":"@site/docs/get-started/about.mdx","sourceDirName":"get-started","slug":"/get-started/about","permalink":"/pr-preview/pr-753/get-started/about","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Om Midas","sidebar_label":"Om","sidebar_position":1,"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/get-started/about.mdx


const frontMatter = {
	title: 'Om Midas',
	sidebar_label: 'Om',
	sidebar_position: 1,
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Varför ska vi använda Midas?",
  "id": "varför-ska-vi-använda-midas",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Midas är Migrationsverkets designsystem. Designsystemet består av två delar: verktygslådan som samlar verktyg, processer och riktlinjer på ett ställe och människorna som samarbetar kring designsystemet med målet att tillsammans ta fram så bra produkter och tjänster för våra användare som möjligt."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Här på dokumentationswebben hittar du allt som ingår i verktygslådan, vilket innefattar designriktlinjer och -principer, designmönster, komponenter, guider för utvecklare och UI-kit till Figma och Adobe XD. Syftet är att stödja designers och utvecklare i att arbeta mer effektivt, konsekvent och användarcentrerat."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varför-ska-vi-använda-midas",
      children: "Varför ska vi använda Midas?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enhetlighet"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Att ha ett enhetligt visuellt uttryck och enhetliga interaktionsmönster i våra produkter och tjänster är huvudmålet med designsystemet."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Effektivitet och skalbarhet"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Genom att återanvända färdiga komponenter sparar vi både tid och pengar. Med en central källa för alla komponenter så kan vi göra ändringar på ett ställe och få genomslag överallt."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enklare samarbete"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "När alla använder designsystemet fungerar det som ett gemensamt språk mellan designers och utvecklare. Det skapar en gemensam utgångspunkt, minskar missförstånd och underlättar samarbete."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kvalitet och tillgänglighet"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Genom att använda färdiga byggstenar med hög kvalitet våra UX-desigers och frontendutvecklare fokusera mer på att skapa värde för användaren istället för att skapa ännu en version av en dropdown. Komponenterna i Midas bygger på React Aria, ett headlessbibliotek med fokus på tillgängliga komponenter, och tillgänglighetstestas noga, så våra team behöver endast testa sina flöden."
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