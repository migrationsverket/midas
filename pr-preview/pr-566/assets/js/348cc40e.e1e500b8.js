"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4741],{

/***/ 98330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_layout_mdx_348_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-layout-mdx-348.json
const site_docs_components_layout_mdx_348_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/layout","title":"Layout","description":"En skalkomponent för att få en simpel sidomeny och sidhuvud.","source":"@site/docs/components/layout.mdx","sourceDirName":"components","slug":"/components/layout","permalink":"/pr-preview/pr-566/components/layout","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Layout","description":"En skalkomponent för att få en simpel sidomeny och sidhuvud.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 187 modules
var PropsTable = __webpack_require__(12761);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(29030);
;// ./apps/docs/src/components/examples/layout/LayoutExamples.tsx
var BasicExample=function BasicExample(props){var layoutExampleUrl=(0,useBaseUrl/* default */.Ay)('/layout-examples/layout');return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",children:/*#__PURE__*/(0,jsx_runtime.jsx)("iframe",{title:"Layout example",style:{width:'100%',height:500,border:'none'},src:layoutExampleUrl})});};var ExternalExample=function ExternalExample(props){var layoutExampleUrl=(0,useBaseUrl/* default */.Ay)('/layout-examples/layout-external');return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",children:/*#__PURE__*/(0,jsx_runtime.jsx)("iframe",{title:"Layout external example",style:{width:'100%',height:500,border:'none'},src:layoutExampleUrl})});};
;// ./apps/docs/docs/components/layout.mdx


const frontMatter = {
	title: 'Layout',
	description: 'En skalkomponent för att få en simpel sidomeny och sidhuvud.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};








const toc = [{
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Extern variant",
  "id": "extern-variant",
  "level": 2
}, {
  "value": "Separat användning",
  "id": "separat-användning",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: "Layout",
      friendlyName: "Meny, baslayout, sidomeny, sidhuvud",
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En skalkomponent för att få en simpel sidomeny och sidhuvud."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Layout\n  variant='internal'\n  items={[\n    {\n      items: [\n        {\n          title: 'Översikt',\n          href: '#',\n          icon: House,\n        },\n      ],\n    },\n    {\n      title: 'Ansökan',\n      items: [\n        {\n          title: 'Skapa ansökan',\n          href: '#',\n          icon: Plus,\n        },\n        {\n          title: 'Beslut',\n          href: '#',\n          icon: Gavel,\n        },\n      ],\n    },\n    {\n      title: 'Kort och konto',\n      items: [\n        {\n          title: 'LMA-kort',\n          href: '#',\n          icon: Calendar,\n        },\n        {\n          title: 'Avvikelser',\n          href: '#',\n          icon: ClipboardList,\n          hasBadge: true,\n        },\n      ],\n    },\n  ]}\n  title='Skapa ansökningar'\n  user={{ name: 'Namn Namnsson', title: 'Roll eller behörighet' }}\n  app={{ name: 'Namn på applikationen' }}\n  headerChildren={\n    <LinkButton\n      variant='tertiary'\n      target='_blank'\n    >\n      Öppna annan tjänst\n    </LinkButton>\n  }\n>\n  {/* Din applikation */}\n</Layout>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(BasicExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "npm2yarn",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "npm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/components\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/components\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/components\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Layout } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extern-variant",
      children: "Extern variant"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "variant=\"external\""
      }), " för en förenklad version av Layout med Navbar i botten av fönstret i mobilt läge."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Layout\n  // highlight-start\n  variant='external'\n  // highlight-end\n  items={[\n    {\n      items: [\n        {\n          title: 'Hem',\n          href: '#',\n          icon: House,\n          active: true,\n        },\n        {\n          title: 'Ansökan',\n          href: '#',\n          icon: Search,\n        },\n        {\n          title: 'Boka',\n          href: '#',\n          icon: Calendar,\n          hasBadge: true,\n        },\n        {\n          title: 'Profil',\n          href: '#',\n          icon: User,\n        },\n        {\n          title: 'Kontakt',\n          href: '#',\n          icon: Plus,\n        },\n      ],\n    },\n    {\n      title: 'Kort och konto',\n      items: [\n        {\n          title: 'LMA-kort',\n          href: '#',\n          icon: Calendar,\n        },\n        {\n          title: 'Avvikelser',\n          href: '#',\n          icon: ClipboardList,\n          hasBadge: true,\n        },\n      ],\n    },\n  ]}\n  title='Skapa ansökningar'\n  user={{ name: 'Namn Namnsson', title: 'Roll eller behörighet' }}\n  app={{ name: 'Namn på applikationen' }}\n  headerChildren={\n    <LinkButton\n      variant='tertiary'\n      target='_blank'\n    >\n      Öppna annan tjänst\n    </LinkButton>\n  }\n>\n  {/* Din applikation */}\n</Layout>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(ExternalExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "separat-användning",
      children: "Separat användning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Det går att importera sidomenyn samt sidhuvudet som separata komponenter om så önskas, det är dock rekommenderat att använda hela Layoutkomponenten."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Layout.Header, Layout.Sidebar } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kommer snart"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "Layout"
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