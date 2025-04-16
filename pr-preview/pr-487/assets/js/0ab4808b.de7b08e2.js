"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1982],{

/***/ 70645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_link_button_mdx_0ab_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-link-button-mdx-0ab.json
const site_docs_components_link_button_mdx_0ab_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/link-button","title":"LinkButton","description":"Komponent med samma utseende och beteende som knapp men avsedd att använda som länk internt eller externt i en applikation.","source":"@site/docs/components/link-button.mdx","sourceDirName":"components","slug":"/components/link-button","permalink":"/pr-preview/pr-487/components/link-button","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"LinkButton","description":"Komponent med samma utseende och beteende som knapp men avsedd att använda som länk internt eller externt i en applikation.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 141 modules
var propsTable = __webpack_require__(55468);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js + 19 modules
var CodeBlock = __webpack_require__(58069);
// EXTERNAL MODULE: ./packages/components/src/link-button/LinkButton.tsx + 2 modules
var LinkButton = __webpack_require__(1353);
;// ./apps/docs/src/components/examples/link-button/LinkButtonExamples.tsx
var Example=function Example(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LinkButton/* LinkButton */.z,{href:"#",children:"Starta tj\xE4nst"}),/*#__PURE__*/(0,jsx_runtime.jsx)(LinkButton/* LinkButton */.z,{variant:"secondary",href:"#",children:"Starta tj\xE4nst"}),/*#__PURE__*/(0,jsx_runtime.jsx)(LinkButton/* LinkButton */.z,{variant:"tertiary",href:"#",children:"Starta tj\xE4nst"})]});};
;// ./node_modules/raw-loader/dist/cjs.js!./apps/docs/src/components/examples/link-button/LinkButtonExamples.tsx
/* harmony default export */ const LinkButtonExamples = ("import { LinkButton } from '@midas-ds/components'\n\nexport const Example = () => {\n  return (\n    <>\n      <LinkButton href='#'>Starta tjänst</LinkButton>\n      <LinkButton\n        variant='secondary'\n        href='#'\n      >\n        Starta tjänst\n      </LinkButton>\n      <LinkButton\n        variant='tertiary'\n        href='#'\n      >\n        Starta tjänst\n      </LinkButton>\n    </>\n  )\n}\n");
;// ./apps/docs/docs/components/link-button.mdx


const frontMatter = {
	title: 'LinkButton',
	description: 'Komponent med samma utseende och beteende som knapp men avsedd att använda som länk internt eller externt i en applikation.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};

/*eslint-disable-next-line import/no-webpack-loader-syntax*/









const toc = [{
  "value": "Installation",
  "id": "installation",
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
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'LinkButton',
      friendlyName: 'Länkknapp',
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/Link.html"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Komponent med samma utseende och beteende som ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/button",
        children: "Button"
      }), " men avsedd att använda som länk internt eller externt i en applikation."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: 'card',
      style: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem'
      },
      children: (0,jsx_runtime.jsx)(Example, {})
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
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      language: 'tsx',
      children: LinkButtonExamples
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: 'card',
      style: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem'
      },
      children: (0,jsx_runtime.jsx)(Example, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Se mönstret ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/design-patterns/buttons-and-links",
        children: "Knappar och länkar"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "LinkButton"
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