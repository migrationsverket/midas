"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["3423"], {
53602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_16_3_1_mdx_2d8_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_16_3_1_mdx_2d8_json__rspack_import_0 = __webpack_require__(38041);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


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
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Den här releasen fokuserar på tillgänglighet, förbättrad komponenthantering och nya funktioner för tabeller. Vi har lagt till stöd för React 19, förbättrat tillgänglighet med prefers-reduced-motion och forced colors, samt lagt till en ny Pagination-komponent för Tanstack Table."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-nya-funktioner",
      children: "🚀 Nya funktioner"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "table-styles:"
        }), " Ny ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/dev/tanstack-table#paginering",
          children: "Pagination-komponent för Tanstack Table"
        }), " som gör det enkelt att hantera sidnumrering i tabeller."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "components:"
        }), " Alla forwardRef-komponenter har nu displayName för bättre debugging i React DevTools."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "components:"
        }), " CSS-animationer respekterar nu användarens prefers-reduced-motion inställning för bättre tillgänglighet."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "theme, button, link-button:"
        }), " Sekundära knappar har fått uppdaterad bakgrundsfärg."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-fixar",
      children: "🩹 Fixar"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "layout:"
        }), " Aktiva menyalternativ visas nu korrekt även på undersidor."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "layout:"
        }), " Förbättrat stöd för forced colors mode (Windows High Contrast) för aktiva länkar."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-uppdateringar",
      children: "🔧 Uppdateringar"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "components:"
        }), " Stöd för React 19 samtidigt som bakåtkompatibilitet med React 18 bibehålls."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "components:"
        }), " React.forwardRef behålls för att bibehålla bakåtkompatibilitet med React 18."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "components:"
        }), " React.FC wrapper har tagits bort för renare typning."]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__rspack_import_1.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
38041(module) {
module.exports = JSON.parse('{"permalink":"/pr-preview/pr-1400/release-notes/16.3.1","source":"@site/blog/release-notes/16.3.1.mdx","title":"Release 16.3.1","description":"Den här releasen fokuserar på tillgänglighet, förbättrad komponenthantering och nya funktioner för tabeller. Vi har lagt till stöd för React 19, förbättrat tillgänglighet med prefers-reduced-motion och forced colors, samt lagt till en ny Pagination-komponent för Tanstack Table.","date":"2026-01-13T00:00:00.000Z","tags":[{"inline":true,"label":"release-notes","permalink":"/pr-preview/pr-1400/release-notes/tags/release-notes"},{"inline":true,"label":"v16","permalink":"/pr-preview/pr-1400/release-notes/tags/v-16"}],"readingTime":0.97,"hasTruncateMarker":true,"authors":[{"name":"Midas","title":"Midas Core Team","utl":"https://github.com/migrationsverket/midas","imageURL":"https://avatars.githubusercontent.com/u/110020437?s=200&v=4","key":"midas","page":null}],"frontMatter":{"slug":"16.3.1","title":"Release 16.3.1","authors":"midas","tags":["release-notes","v16"],"date":"2026-01-13T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Release 17.0.0","permalink":"/pr-preview/pr-1400/release-notes/17.0.0"},"nextItem":{"title":"Release 16.0.0","permalink":"/pr-preview/pr-1400/release-notes/16.0.0"}}')

},

}]);