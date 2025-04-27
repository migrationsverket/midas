"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8271],{

/***/ 376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_heading_mdx_a80_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-heading-mdx-a80.json
const site_docs_components_heading_mdx_a80_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/heading","title":"Heading","description":"<ComponentHeader","source":"@site/docs/components/heading.mdx","sourceDirName":"components","slug":"/components/heading","permalink":"/pr-preview/pr-511/components/heading","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Heading","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 2 modules
var Heading = __webpack_require__(71098);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 187 modules
var propsTable = __webpack_require__(35926);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
;// ./apps/docs/docs/components/heading.mdx


const frontMatter = {
	title: 'Heading',
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
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "Nivå",
  "id": "nivå",
  "level": 3
}, {
  "value": "Extern",
  "id": "extern",
  "level": 3
}, {
  "value": "Val av semantiskt element",
  "id": "val-av-semantiskt-element",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Heading",
  "id": "heading",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'typography-heading',
      friendlyName: 'Rubrik, h1, h2, h3, h4, h5, h6',
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-spectrum/Heading.html"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rubrik med fördefinerad stil"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Heading level={2}>Jag är en vanlig h2-rubrik</Heading>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Heading/* Heading */.D, {
        level: 2,
        children: "Jag är en vanlig h2-rubrik"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        children: "import { Heading } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nivå",
      children: "Nivå"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd egenskapen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "level"
      }), " för att justera rubrikens nivå"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Heading level={3}>Jag är en vanlig h3-rubrik</Heading>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Heading/* Heading */.D, {
        level: 3,
        children: "Jag är en vanlig h3-rubrik"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "extern",
      children: "Extern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd egenskapen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isExpressive"
      }), " för ett externt och luftigare utseende."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Heading\n  level={2}\n  isExpressive\n>\n  Jag är en luftig h2-rubrik\n</Heading>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Heading/* Heading */.D, {
        level: 2,
        isExpressive: true,
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Jag är en luftig h2-rubrik"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "val-av-semantiskt-element",
      children: "Val av semantiskt element"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Egenskapen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "elementType"
      }), " kan användas för att ändra rubrikens semantiska nivå utan att påverka utseendet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Heading\n  level={1}\n  elementType='h3'\n>\n  Jag är h3:a som ser ut som en vanlig h1:a\n</Heading>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Heading/* Heading */.D, {
        level: 1,
        elementType: "h3",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Jag är h3", ":a", " som ser ut som en vanlig h1", ":a"]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "heading",
      children: "Heading"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Heading"
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