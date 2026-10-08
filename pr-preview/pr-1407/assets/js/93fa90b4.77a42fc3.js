"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["1022"], {
12262(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_10_4_0_mdx_937_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_10_4_0_mdx_937_json__rspack_import_0 = __webpack_require__(85550);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	title: 'Release 10.4.0',
	authors: 'midas',
	date: new Date('2025-07-02T00:00:00.000Z')
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-nya-funktioner",
      children: "🚀 Nya funktioner"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Tabs exporterar nu samtliga Tab-komponenter från React Aria så att komponenten enklare kan anpassas\noch stämmer bättre med ursprungligt API,"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "tabs:"
        }), " refactor tabs to support declarative children structure (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/pull/678",
          children: "#678"
        }), ")"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-fixar",
      children: "🩹 Fixar"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Inga hårdkodade strängar för enbart svenska, komponenter går att anpassa efter olika språk. Samtliga komponenter\naccepterar nu ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "className"
      }), " för att applicera egen css."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["add translations for all text strings (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/pull/689",
          children: "#689"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "breadcrumbs:"
        }), " 💄 accept custom className (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/pull/683",
          children: "#683"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "calendar:"
        }), " in range states (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/commit/3b7bcd03da",
          children: "3b7bcd03da"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "calendar:"
        }), " change text color token for dates in range (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/commit/1656d6d7a1",
          children: "1656d6d7a1"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "checkbox:"
        }), " 💄 accept custom className (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/pull/684",
          children: "#684"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "checkbox:"
        }), " add margin-bottom to checkboxgroup-items [run-chromatic] (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/commit/0637fd9a5d",
          children: "0637fd9a5d"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "color-scheme-switch:"
        }), " 💄 accept custom className (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/pull/685",
          children: "#685"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "file-upload:"
        }), " 💄 accept custom className (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/pull/686",
          children: "#686"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "layout:"
        }), " 💄 accept custom className (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/pull/687",
          children: "#687"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "radio:"
        }), " 💄 accept custom className (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/pull/688",
          children: "#688"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "search-field:"
        }), " 💄 accept custom className (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/pull/690",
          children: "#690"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "spinner:"
        }), " 💄 accept custom className (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/pull/691",
          children: "#691"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "theme:"
        }), " new tokens for calendar date states (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/commit/0f819928d0",
          children: "0f819928d0"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "theme:"
        }), " change dark mode color on calendarBackgroundInRange (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/commit/d745cb2adf",
          children: "d745cb2adf"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "toast:"
        }), " 💄 accept custom className (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/pull/692",
          children: "#692"
        }), ")"]
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
85550(module) {
module.exports = JSON.parse('{"permalink":"/pr-preview/pr-1407/release-notes/10.4.0","source":"@site/blog/release-notes/10.4.0.mdx","title":"Release 10.4.0","description":"🚀 Nya funktioner","date":"2025-07-02T00:00:00.000Z","tags":[],"readingTime":1.32,"hasTruncateMarker":true,"authors":[{"name":"Midas","title":"Midas Core Team","utl":"https://github.com/migrationsverket/midas","imageURL":"https://avatars.githubusercontent.com/u/110020437?s=200&v=4","key":"midas","page":null}],"frontMatter":{"title":"Release 10.4.0","authors":"midas","date":"2025-07-02T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Release 11.0.0","permalink":"/pr-preview/pr-1407/release-notes/11.0.0"},"nextItem":{"title":"Release 10.3.0","permalink":"/pr-preview/pr-1407/release-notes/10.3.0"}}')

},

}]);