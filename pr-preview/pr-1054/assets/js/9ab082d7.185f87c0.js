"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1974],{

/***/ 9798
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/pr-preview/pr-1054/release-notes/17.0.0","source":"@site/blog/release-notes/17.0.0.mdx","title":"Release 17.0.0","description":"Den här releasen fokuserar på att rensa bort utfasad funktionalitet som har varit markerad som deprecated sedan v15.0.0. Vi har även lagt till flera förbättringar och buggfixar sedan v16.3.1. Eftersom releasen innehåller många breaking changes rekommenderar vi att avsätta tid för migreringen — men det är värt det, eftersom v17 lägger grunden för framtida funktioner och fixar.","date":"2026-02-12T00:00:00.000Z","tags":[{"inline":true,"label":"release-notes","permalink":"/pr-preview/pr-1054/release-notes/tags/release-notes"},{"inline":true,"label":"v17","permalink":"/pr-preview/pr-1054/release-notes/tags/v-17"}],"readingTime":1.87,"hasTruncateMarker":true,"authors":[{"name":"Midas","title":"Midas Core Team","utl":"https://github.com/migrationsverket/midas","imageURL":"https://avatars.githubusercontent.com/u/110020437?s=200&v=4","key":"midas","page":null}],"frontMatter":{"slug":"17.0.0","title":"Release 17.0.0","authors":"midas","tags":["release-notes","v17"],"date":"2026-02-12T00:00:00.000Z"},"unlisted":false,"nextItem":{"title":"Release 16.3.1","permalink":"/pr-preview/pr-1054/release-notes/16.3.1"}}');

/***/ },

/***/ 38127
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_17_0_0_mdx_dec_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_17_0_0_mdx_dec_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9798);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: '17.0.0',
	title: 'Release 17.0.0',
	authors: 'midas',
	tags: [
		'release-notes',
		'v17'
	],
	date: new Date('2026-02-12T00:00:00.000Z')
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
  "value": "🔄 Migrering",
  "id": "-migrering",
  "level": 2
}, {
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
    code: "code",
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
      children: "Den här releasen fokuserar på att rensa bort utfasad funktionalitet som har varit markerad som deprecated sedan v15.0.0. Vi har även lagt till flera förbättringar och buggfixar sedan v16.3.1. Eftersom releasen innehåller många breaking changes rekommenderar vi att avsätta tid för migreringen — men det är värt det, eftersom v17 lägger grunden för framtida funktioner och fixar."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Långlivad version"
      }), " — Ambitionen är att v17 ska kunna användas under en längre period. Vi planerar att undvika breaking changes så långt det är möjligt."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-breaking-changes",
      children: "💥 Breaking Changes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "I den här releasen har vi tagit bort funktioner som varit markerade som deprecated i tidigare versioner:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "tooltip:"
        }), " Type ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "MidasTooltipProps"
        }), " är borttagen. Använd ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "TooltipProps"
        }), " istället."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "accordion:"
        }), " Type ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "MidasAccordion"
        }), " är borttagen. Använd ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "AccordionProps"
        }), " istället."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "menu:"
        }), " Type ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "MenuItemObject"
        }), " är borttagen."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "text:"
        }), " Prop ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "variant"
        }), " och type ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "TextVariant"
        }), " är borttagna. Använd ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "size"
        }), " prop istället."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "breadcrumbs:"
        }), " Interfacet ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "BreadcrumbItem"
        }), " och det automatiska renderingsläget via ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "items"
        }), " prop med ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "{href, title}"
        }), "-objekt är borttaget. Använd det sammansatta API", ":et", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "<Breadcrumbs>"
        }), " + ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "<Breadcrumb>"
        }), " istället."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "combobox:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ComboBoxItem"
        }), " och ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ComboBoxSection"
        }), " är borttagna. Använd ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ListBoxItem"
        }), " och ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ListBoxSection"
        }), " istället."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "list-box:"
        }), " Types ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ListBoxItemElement"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ListBoxSectionElement"
        }), " och ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ListBoxOption"
        }), " är borttagna. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "name"
        }), " prop på ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ListBoxSection"
        }), " är borttagen — använd ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ListBoxHeader"
        }), " som children istället."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "legacy-select:"
        }), " Hela ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "LegacySelect"
        }), "-komponenten och ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "LegacySelectProps"
        }), " är borttagna. Använd ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Select"
        }), "-komponenten istället."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-migrering",
      children: "🔄 Migrering"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Alla borttagna exporter har haft dokumenterade ersättningar sedan de markerades som deprecated. Se respektive komponents dokumentation för aktuellt API."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-nya-funktioner",
      children: "🚀 Nya funktioner"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "breadcrumbs:"
        }), " Breadcrumbs är omstrukturerade till separata komponenter med ett sammansatt API (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "<Breadcrumbs>"
        }), " + ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "<Breadcrumb>"
        }), ")."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "date-field, date-picker, search-field:"
        }), " Ny rensa-knapp (clear button) för att tömma fält."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "button:"
        }), " Stöd för context props."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "tooltip:"
        }), " Ökad fontstorlek."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "layout:"
        }), " Ny navigeringslänk-variant och klickhändelse för sidopanelslänkar."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "theme:"
        }), " Ny invalid-state stil för formulärfält (box-shadow)."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-fixar",
      children: "🩹 Fixar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "toast:"
        }), " Synligt tangentbordsfokus (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "focus-visible"
        }), ") för toast-regionen."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "select:"
        }), " Chevron-ikonen roterar nu korrekt när select är öppen. Justerad horisontell padding."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "select-styles:"
        }), " Justerad höjd och pixelkorrigeringar för react-select-komponenten."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "date-picker:"
        }), " Justerad höjd för ikonknappar. Borttagen fokusindikator för föräldraelementet. Uppdaterade stilar för ikonknappar."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "date-field:"
        }), " Uppdaterade stilar för rensa-knappen. Korrekt invalid-kantlinje och box-shadow."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "accordion:"
        }), " Justerad padding för oinneslutna innehållscontainrar."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "tooltip:"
        }), " Använder nu CSS-variabler för styling."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "text, grid:"
        }), " Borttagen global CSS till förmån för CSS Modules."]
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