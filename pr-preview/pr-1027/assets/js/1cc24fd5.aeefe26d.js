"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[3051],{

/***/ 35690
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_common_issues_mdx_1cc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-common-issues-mdx-1cc.json
const site_docs_dev_common_issues_mdx_1cc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/common-issues","title":"Vanliga problem","description":"Hantera Client Side Navigation tillsammans med designsystemet","source":"@site/docs/dev/common-issues.mdx","sourceDirName":"dev","slug":"/dev/common-issues","permalink":"/pr-preview/pr-1027/dev/common-issues","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Vanliga problem","description":"Hantera Client Side Navigation tillsammans med designsystemet"},"sidebar":"sideBar","previous":{"title":"Routing på klientnivå","permalink":"/pr-preview/pr-1027/dev/client-side-routing"},"next":{"title":"Mörkt läge","permalink":"/pr-preview/pr-1027/dev/dark-mode"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/dev/common-issues.mdx


const frontMatter = {
	title: 'Vanliga problem',
	description: 'Hantera Client Side Navigation tillsammans med designsystemet'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Remix",
  "id": "remix",
  "level": 2
}, {
  "value": "Remix med Vite",
  "id": "remix-med-vite",
  "level": 3
}, {
  "value": "Äldre Remix - Classic Remix Compiler",
  "id": "äldre-remix---classic-remix-compiler",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "remix",
      children: "Remix"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använder ni Remix? Då behöver ni lägga till följande i er config för att låta CSS ladda korrekt."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "remix-med-vite",
      children: "Remix med Vite"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{2-4} title=\"vite.config.ts\"",
        children: "export default defineConfig({\n  ssr: {\n    noExternal: [/^@midas-ds\\/.+/],\n  },\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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



/***/ }

}]);