"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[3290],{

/***/ 48455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_basics_icons_mdx_79d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-basics-icons-mdx-79d.json
const site_docs_basics_icons_mdx_79d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"basics/icons","title":"Ikoner","description":"Ikoner används på Migrationsverkets webbplatser, i e-tjänster och interna system.","source":"@site/docs/basics/icons.mdx","sourceDirName":"basics","slug":"/basics/icons","permalink":"/pr-preview/pr-144/basics/icons","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Ikoner","sidebar_position":4},"sidebar":"sideBar","previous":{"title":"Typografi","permalink":"/pr-preview/pr-144/basics/typography"},"next":{"title":"Tillgänglighetsriktlinjer","permalink":"/pr-preview/pr-144/basics/accessibility"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/basics/icons.mdx


const frontMatter = {
	title: 'Ikoner',
	sidebar_position: 4
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Generella riktlinjer",
  "id": "generella-riktlinjer",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Ikoner används på Migrationsverkets webbplatser, i e-tjänster och interna system.\nDe ska underlätta för användaren att navigera och bidra till en intuitiv förståelse av innehållet.\nDe ska därför ha ett utseende som användaren känner igen och förstår innebörden av."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generella-riktlinjer",
      children: "Generella riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Migrationsverket använder ikoner från ikonbiblioteket ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fontawesome.com/",
          children: "Font Awesome"
        }), ". Designsystemet använder dessutom ikoner från ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://lucide.dev/",
          children: "Lucide"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alla ikoner ska alltid kompletteras med en förklarande text. Undantag är t.ex. pilar, extern länk eller kryss."
      }), "\n"]
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