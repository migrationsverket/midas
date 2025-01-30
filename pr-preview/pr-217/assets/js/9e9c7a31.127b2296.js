"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2169],{

/***/ 35368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_accordion_mdx_9e9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-accordion-mdx-9e9.json
const site_docs_components_accordion_mdx_9e9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/accordion","title":"Accordion","description":"Dragspelskomponenten låter användare visa och dölja delar av relaterat innehåll på en sida.","source":"@site/docs/components/accordion.mdx","sourceDirName":"components","slug":"/components/accordion","permalink":"/pr-preview/pr-217/components/accordion","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Accordion","sidebar_position":1,"description":"Dragspelskomponenten låter användare visa och dölja delar av relaterat innehåll på en sida.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 1 modules
var propsTable = __webpack_require__(38355);
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx
var Accordion = __webpack_require__(3348);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx
var AccordionItem = __webpack_require__(57389);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionTrigger.tsx
var AccordionTrigger = __webpack_require__(47886);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContent.tsx
var AccordionContent = __webpack_require__(65153);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 3 modules
var getComponentMetaData = __webpack_require__(68219);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(71372);
;// ./apps/docs/docs/components/accordion.mdx


const frontMatter = {
	title: 'Accordion',
	sidebar_position: 1,
	description: 'Dragspelskomponenten låter användare visa och dölja delar av relaterat innehåll på en sida.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};









const toc = [{
  "value": "Installation och användning",
  "id": "installation-och-användning",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Accordion",
  "id": "accordion",
  "level": 3
}, {
  "value": "AccordionContent",
  "id": "accordioncontent",
  "level": 3
}, {
  "value": "AccordionTrigger",
  "id": "accordiontrigger",
  "level": 3
}, {
  "value": "AccordionItem",
  "id": "accordionitem",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'Accordion',
      friendlyName: 'Dragspel',
      overrideHeadlessLink: "https://www.radix-ui.com/primitives/docs/components/accordion",
      overrideHeadlessLinkTitle: "Radix UI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dragspelskomponenten låter användare visa och dölja delar av relaterat innehåll på en sida. Den används primärt för att minska informationsmängden som direkt presenteras för användaren."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation-och-användning",
      children: "Installation och användning"
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
        children: "import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Accordion: Accordion/* Accordion */.n,
        AccordionItem: AccordionItem/* AccordionItem */.A,
        AccordionTrigger: AccordionTrigger/* AccordionTrigger */.$,
        AccordionContent: AccordionContent/* AccordionContent */.u
      },
      children: `<Accordion type={'multiple'}>
  {fruits.shuffled().map(fruit => (
    <AccordionItem key={fruit.value} value={fruit.value}>
      <AccordionTrigger>{fruit.name}</AccordionTrigger>
      <AccordionContent>
        {fruit.description}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dragspelet är komprimerat som standard och expanderas genom att klicka på rubrikytan."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "accordion",
      children: "Accordion"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: 'Accordion'
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "accordioncontent",
      children: "AccordionContent"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: 'AccordionContent',
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "accordiontrigger",
      children: "AccordionTrigger"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: 'AccordionTrigger',
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "accordionitem",
      children: "AccordionItem"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: 'AccordionItem',
      defaultOpen: false
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