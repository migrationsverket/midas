"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1135],{

/***/ 87628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_get_started_develop_index_mdx_a32_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-get-started-develop-index-mdx-a32.json
const site_docs_get_started_develop_index_mdx_a32_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/develop/index","title":"Att utveckla med designsystemet","description":"Installera komponenter via npm install @midas-ds/[component].","source":"@site/docs/get-started/develop/index.mdx","sourceDirName":"get-started/develop","slug":"/get-started/develop/","permalink":"/pr-preview/pr-171/get-started/develop/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"För utvecklare","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(11470);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(19365);
;// ./apps/docs/docs/get-started/develop/index.mdx


const frontMatter = {
	sidebar_label: 'För utvecklare',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Att utveckla med designsystemet';

const assets = {

};





const toc = [{
  "value": "Importera och använd komponent",
  "id": "importera-och-använd-komponent",
  "level": 2
}, {
  "value": "Installera globala stilmallen",
  "id": "installera-globala-stilmallen",
  "level": 2
}, {
  "value": "Vanliga problem",
  "id": "vanliga-problem",
  "level": 2
}, {
  "value": "Remix",
  "id": "remix",
  "level": 3
}, {
  "value": "Remix med Vite",
  "id": "remix-med-vite",
  "level": 4
}, {
  "value": "Äldre Remix - Classic Remix Compiler",
  "id": "äldre-remix---classic-remix-compiler",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "att-utveckla-med-designsystemet",
        children: "Att utveckla med designsystemet"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Installera komponenter via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install @midas-ds/[component]"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "importera-och-använd-komponent",
      children: "Importera och använd komponent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generellt, importera och använd direkt:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Component } from '@midas-ds/component';\n...\n<Component/>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För specfika instruktioner, se respektive ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components",
        children: "komponent"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installera-globala-stilmallen",
      children: "Installera globala stilmallen"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att komponenterna ska renderas exakt korrekt behövs lite global css. Detta finns i paketet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/theme"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "npm2yarn",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "npm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/theme\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/theme\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/theme\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{1} title=\"App.tsx (rootfilen i din app)\"",
        children: "import \"@midas-ds/theme/index.css\";\n\nexport default function App({children}) {\n  return <main>\n    {children}\n  </main>\n}\n\nexport default App;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mer info finns på ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/migrationsverket/midas",
        children: "GitHub"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vanliga-problem",
      children: "Vanliga problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "remix",
      children: "Remix"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använder ni Remix? Då behöver ni lägga till följande i er config för att låta CSS ladda korrekt."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "remix-med-vite",
      children: "Remix med Vite"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{2-4} title=\"vite.config.ts\"",
        children: "export default defineConfig({\n  ssr: {\n    noExternal: [/^@midas-ds\\/.+/],\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "äldre-remix---classic-remix-compiler",
      children: "Äldre Remix - Classic Remix Compiler"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Följ detta: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://remix.run/docs/en/main/styling/bundling",
        children: "CSS Bundling"
      }), " och ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://remix.run/docs/en/main/styling/css-imports",
        children: "CSS Imports"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"root.tsx\"",
        children: "import { cssBundleHref } from '@remix-run/css-bundle'\nimport type { LinksFunction } from '@remix-run/node'\n\n// ...\n\nexport const links: LinksFunction = () => [\n  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),\n  // ...\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        metastring: "{4} title=\"remix.config.js\"",
        children: "// ...\nexport default {\n  // ...\n  serverDependenciesToBundle: [/^@midas-ds\\/.+/],\n}\n"
      })
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