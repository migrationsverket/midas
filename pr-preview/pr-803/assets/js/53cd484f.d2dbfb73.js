"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6356],{

/***/ 26210:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/pr-preview/pr-803/changelog/10.3.0","source":"@site/changelog/source/10.3.0.md","title":"10.3.0","description":"🚀 Features","date":"2025-06-25T20:00:00.000Z","tags":[],"hasTruncateMarker":true,"authors":[],"frontMatter":{"mdx":{"format":"md"},"date":"2025-06-25T20:00","pagination_prev":null,"pagination_next":null},"unlisted":false,"prevItem":{"title":"10.4.0","permalink":"/pr-preview/pr-803/changelog/10.4.0"},"nextItem":{"title":"10.2.0","permalink":"/pr-preview/pr-803/changelog/10.2.0"},"listPageLink":"/pr-preview/pr-803/changelog/"}');

/***/ }),

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

/***/ 46059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_changelog_plugin_default_site_changelog_source_10_3_0_md_53c_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_changelog_plugin_default_site_changelog_source_10_3_0_md_53c_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26210);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	mdx: {
		format: 'md'
	},
	date: '2025-06-25T20:00',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = '10.3.0';

const assets = {
"authorsImageUrls": [],
};



const toc = [{
  "value": "🚀 Features",
  "id": "-features",
  "level": 2
}, {
  "value": "🩹 Fixes",
  "id": "-fixes",
  "level": 2
}, {
  "value": "💅 Refactors",
  "id": "-refactors",
  "level": 2
}, {
  "value": "📖 Documentation changes",
  "id": "-documentation-changes",
  "level": 2
}, {
  "value": "🧪 Tests updated",
  "id": "-tests-updated",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-features",
      children: "🚀 Features"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "popover:"
        }), " new component popover (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/pull/672",
          children: "#672"
        }), ")"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-fixes",
      children: "🩹 Fixes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "combobox:"
        }), " select the previous value on click (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/commit/b2440e9d2b",
          children: "b2440e9d2b"
        }), ")"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-refactors",
      children: "💅 Refactors"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["♻️ checkbox (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/pull/640",
          children: "#640"
        }), ")"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-documentation-changes",
      children: "📖 Documentation changes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["add release notes for 10.2.0 (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/commit/c1b525fdf0",
          children: "c1b525fdf0"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["edit changelog autoformatting (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/commit/bfefac35fe",
          children: "bfefac35fe"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["typo on numbers in grid sizing table (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/pull/671",
          children: "#671"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "select:"
        }), " add docs on controlled selection for single select (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/commit/9ea323915d",
          children: "9ea323915d"
        }), ")"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-tests-updated",
      children: "🧪 Tests updated"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["remove storybook background transiton (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/commit/a7b633dca8",
          children: "a7b633dca8"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["opt-in for chromatic on PRs (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/pull/675",
          children: "#675"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "grid:"
        }), " remove a11y test bypass (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/commit/ca09acfd1c",
          children: "ca09acfd1c"
        }), ")"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);