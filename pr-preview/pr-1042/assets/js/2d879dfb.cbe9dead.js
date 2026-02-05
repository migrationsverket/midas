"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5409],{

/***/ 38041
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/pr-preview/pr-1042/release-notes/16.3.1","source":"@site/blog/release-notes/16.3.1.mdx","title":"Release 16.3.1","description":"Den här releasen fokuserar på tillgänglighet, förbättrad komponenthantering och nya funktioner för tabeller. Vi har lagt till stöd för React 19, förbättrat tillgänglighet med prefers-reduced-motion och forced colors, samt lagt till en ny Pagination-komponent för Tanstack Table.","date":"2026-01-13T00:00:00.000Z","tags":[{"inline":true,"label":"release-notes","permalink":"/pr-preview/pr-1042/release-notes/tags/release-notes"},{"inline":true,"label":"v16","permalink":"/pr-preview/pr-1042/release-notes/tags/v-16"}],"readingTime":0.97,"hasTruncateMarker":true,"authors":[{"name":"Midas","title":"Midas Core Team","utl":"https://github.com/migrationsverket/midas","imageURL":"https://avatars.githubusercontent.com/u/110020437?s=200&v=4","key":"midas","page":null}],"frontMatter":{"slug":"16.3.1","title":"Release 16.3.1","authors":"midas","tags":["release-notes","v16"],"date":"2026-01-13T00:00:00.000Z"},"unlisted":false,"nextItem":{"title":"Release 16.0.0","permalink":"/pr-preview/pr-1042/release-notes/16.0.0"}}');

/***/ },

/***/ 93150
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_16_3_1_mdx_2d8_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_16_3_1_mdx_2d8_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38041);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: '16.3.1',
	title: 'Release 16.3.1',
	authors: 'midas',
	tags: [
		'release-notes',
		'v16'
	],
	date: new Date('2026-01-13T00:00:00.000Z')
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};

/*truncate*/


const toc = [{
  "value": "🚀 Nya funktioner",
  "id": "-nya-funktioner",
  "level": 2
}, {
  "value": "🩹 Fixar",
  "id": "-fixar",
  "level": 2
}, {
  "value": "🔧 Uppdateringar",
  "id": "-uppdateringar",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Den här releasen fokuserar på tillgänglighet, förbättrad komponenthantering och nya funktioner för tabeller. Vi har lagt till stöd för React 19, förbättrat tillgänglighet med prefers-reduced-motion och forced colors, samt lagt till en ny Pagination-komponent för Tanstack Table."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-nya-funktioner",
      children: "🚀 Nya funktioner"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "table-styles:"
        }), " Ny ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "/dev/tanstack-table#paginering",
          children: "Pagination-komponent för Tanstack Table"
        }), " som gör det enkelt att hantera sidnumrering i tabeller."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "components:"
        }), " Alla forwardRef-komponenter har nu displayName för bättre debugging i React DevTools."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "components:"
        }), " CSS-animationer respekterar nu användarens prefers-reduced-motion inställning för bättre tillgänglighet."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "theme, button, link-button:"
        }), " Sekundära knappar har fått uppdaterad bakgrundsfärg."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-fixar",
      children: "🩹 Fixar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "layout:"
        }), " Aktiva menyalternativ visas nu korrekt även på undersidor."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "layout:"
        }), " Förbättrat stöd för forced colors mode (Windows High Contrast) för aktiva länkar."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-uppdateringar",
      children: "🔧 Uppdateringar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "components:"
        }), " Stöd för React 19 samtidigt som bakåtkompatibilitet med React 18 bibehålls."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "components:"
        }), " React.forwardRef behålls för att bibehålla bakåtkompatibilitet med React 18."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "components:"
        }), " React.FC wrapper har tagits bort för renare typning."]
      }), "\n"]
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Se alla förändringar i detalj på changelog:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components@v16.3.1",
          children: "components@v16.3.1"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/table-styles@v1.2.0",
          children: "table-styles@v1.2.0"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/theme@v3.9.3",
          children: "theme@v3.9.3"
        })
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



/***/ }

}]);