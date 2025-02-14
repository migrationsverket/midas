"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5990],{

/***/ 2690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_get_started_use_mdx_f81_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-get-started-use-mdx-f81.json
const site_docs_get_started_use_mdx_f81_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/use","title":"Använda Midas","description":"Designer","source":"@site/docs/get-started/use.mdx","sourceDirName":"get-started","slug":"/get-started/use","permalink":"/pr-preview/pr-258/get-started/use","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Använda Midas","sidebar_label":"Använda","sidebar_position":1,"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/get-started/use.mdx


const frontMatter = {
	title: 'Använda Midas',
	sidebar_label: 'Använda',
	sidebar_position: 1,
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Designer",
  "id": "designer",
  "level": 2
}, {
  "value": "Utvecklare",
  "id": "utvecklare",
  "level": 2
}, {
  "value": "Importera och använd komponent",
  "id": "importera-och-använd-komponent",
  "level": 3
}, {
  "value": "Installera Inter som typsnitt",
  "id": "installera-inter-som-typsnitt",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "designer",
      children: "Designer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För dig som designar gränssnitt finns ett UI-kit till Adobe XD. Det innehåller färdiga designkomponenter och layoutmallar som följer Migrationsverkets digitala stil och grafiska profil."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Här kan du ladda ner vårt ", (0,jsx_runtime.jsx)("a", {
          target: "\\_blank",
          href: (__webpack_require__(38929)/* ["default"] */ .A),
          download: true,
          children: "UI-kit till Adobe XD (version 17)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Om du inte har Adobe XD kan se hur komponenterna ser ut via ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://xd.adobe.com/view/95ad014c-2540-44e2-9adf-5ad4c8751bbd-c0fe/?hints=off",
          children: "onlineversionen"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "utvecklare",
      children: "Utvecklare"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Installera komponenter via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install @midas-ds/components"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "importera-och-använd-komponent",
      children: "Importera och använd komponent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generellt, importera och använd direkt:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Component } from '@midas-ds/components';\n...\n<Component/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För specfika instruktioner, se respektive komponent."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installera-inter-som-typsnitt",
      children: "Installera Inter som typsnitt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detta är ett rekommenderat sätt att installera vårt typsnitt Inter. Det går självklart att använda andra metoder så länge vikterna 400, 500 och 600 inkluderas."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{1} title=\"App.tsx (rootfilen i din app)\"",
        children: "import '@midas-ds/components/global.css'\n\nexport default function App({ children }) {\n  return <main>{children}</main>\n}\n\nexport default App\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mer info finns på ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/migrationsverket/midas",
        children: "GitHub"
      }), " samt under ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/common-issues",
        children: "guider"
      })]
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

/***/ 38929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/MIDAS_UIkit_17-14cd24abcfaef03c4fb8674f0dde483c.zip");

/***/ })

}]);