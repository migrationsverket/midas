"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6482],{

/***/ 70051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_13_0_0_mdx_8e2_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_13_0_0_mdx_8e2_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72497);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: '13.0.0',
	title: 'Release 13.0.0',
	authors: 'midas',
	tags: [
		'release-notes',
		'v13'
	],
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "💥 Breaking Changes",
  "id": "-breaking-changes",
  "level": 2
}, {
  "value": "⬆️ Migrationsguide",
  "id": "️-migrationsguide",
  "level": 2
}, {
  "value": "🚀 Nya funktioner",
  "id": "-nya-funktioner",
  "level": 2
}, {
  "value": "🩹 Fixar",
  "id": "-fixar",
  "level": 2
}, {
  "value": "🏭 Refactoring",
  "id": "-refactoring",
  "level": 2
}, {
  "value": "🐣 Support för Tanstack Table",
  "id": "-support-för-tanstack-table",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Den här releasen innehåller en del större förändringar under huven. Vi har separerat vårt tema/css från komponenterna för att\ngöra det mer flexibelt och för att kunna erbjuda fler anpassningsmöjligheter i framtiden."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-breaking-changes",
      children: "💥 Breaking Changes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["CSS/Styles är nu tillgängliga från ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "import '@midas-ds/components/default.css'"
      }), " eller via ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "@midas-ds/theme"
      }), "-paketet. Läs mer\npå ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "/get-started/install/",
        children: "instruktioner för att komma igång"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "️-migrationsguide",
      children: "⬆️ Migrationsguide"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "För att uppgradera från version 12 till 13 behöver du uppdatera hur du importerar CSS-filerna."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Tidigare importerades CSS direkt från komponentpaketet. Nu måste du istället importera en global stilmall."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Gör så här:"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Ta bort alla CSS-importer från ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "@midas-ds/components"
        }), " som du har i din applikation."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Lägg till en ny import i din huvudsakliga ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "App"
        }), " komponent eller motsvarande:"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-javascript",
        children: "import '@midas-ds/components/default.css'\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Denna import innehåller allt du behöver för att komma igång.\nOm du istället vill importera olika delar av Midas stilar kan du använda ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "@midas-ds/theme"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @midas-ds/theme\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-javascript",
        children: "import '@midas-ds/theme/fonts.css'\nimport '@midas-ds/theme/variables.css'\nimport '@midas-ds/theme/color-scheme.css'\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-nya-funktioner",
      children: "🚀 Nya funktioner"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "components:"
        }), " Ikonfärgen för feedback-status har ändrats till ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "--midas-icon-primary"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "theme:"
        }), " Signal-färgerna har uppdaterats."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-fixar",
      children: "🩹 Fixar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "textfield:"
        }), " Inbyggda (native) attribut har lagts till för textfield och textarea."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "table:"
        }), " Korrekt bakgrundsfärg används nu för rader i tabellen."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "layout:"
        }), " Hash har tagits bort från main role querySelector."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-refactoring",
      children: "🏭 Refactoring"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Temat har helt separerats från komponentprojektet och ligger nu i ett eget paket."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Style dictionary build-skriptet har refaktorerats till en nx executor."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-support-för-tanstack-table",
      children: "🐣 Support för Tanstack Table"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Vi introducerar ett nytt paket ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "@midas-ds/table-styles"
      }), " för att hjälpa till med styling för utvecklare som använder\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://tanstack.com/table/latest",
        children: "Tanstack Table"
      }), ". Läs mer på ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "/dev/tanstack-table/",
        children: "instruktioner för Tanstack Table"
      }), ".\nDet är en css-fil i tidig version som vi hoppas kunna bygga mer på som ett stöd för de utvecklare som vill komma åt mer\navancerade tabellfunktioner än vad som ingår i Midas-table."]
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



/***/ }),

/***/ 72497:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/pr-preview/pr-840/release-notes/13.0.0","source":"@site/blog/release-notes/13.0.0.mdx","title":"Release 13.0.0","description":"Den här releasen innehåller en del större förändringar under huven. Vi har separerat vårt tema/css från komponenterna för att","date":"2025-09-23T13:36:37.000Z","tags":[{"inline":true,"label":"release-notes","permalink":"/pr-preview/pr-840/release-notes/tags/release-notes"},{"inline":true,"label":"v13","permalink":"/pr-preview/pr-840/release-notes/tags/v-13"}],"readingTime":1.84,"hasTruncateMarker":true,"authors":[{"name":"Midas","title":"Midas Core Team","utl":"https://github.com/migrationsverket/midas","imageURL":"https://avatars.githubusercontent.com/u/110020437?s=200&v=4","key":"midas","page":null}],"frontMatter":{"slug":"13.0.0","title":"Release 13.0.0","authors":"midas","tags":["release-notes","v13"],"pagination_prev":null,"pagination_next":null},"unlisted":false,"nextItem":{"title":"Release 12.1.0","permalink":"/pr-preview/pr-840/release-notes/12.1.0"}}');

/***/ })

}]);