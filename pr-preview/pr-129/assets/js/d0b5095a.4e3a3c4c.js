"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1343],{

/***/ 83920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_forms_md_d0b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-forms-md-d0b.json
const site_docs_design_patterns_forms_md_d0b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/forms","title":"Frågeformulär","description":"Obligatorisk vs valfri","source":"@site/docs/design-patterns/forms.md","sourceDirName":"design-patterns","slug":"/design-patterns/forms","permalink":"/pr-preview/pr-129/design-patterns/forms","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sideBar","previous":{"title":"Fokus","permalink":"/pr-preview/pr-129/design-patterns/focus"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/design-patterns/forms.md


const frontMatter = {};
const contentTitle = 'Frågeformulär';

const assets = {

};



const toc = [{
  "value": "Obligatorisk vs valfri",
  "id": "obligatorisk-vs-valfri",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "frågeformulär",
        children: "Frågeformulär"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "obligatorisk-vs-valfri",
      children: "Obligatorisk vs valfri"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Huvudregeln är att bara fråga användaren om uppgifter som är nödvändiga för att ta ett beslut eller liknande.\nFöljer vi den regeln faller det sig naturligt att de flesta fält i ett formulär är obligatoriska."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grundregel: Vi markerar endast eventuella valfria fält med text ”(valfritt)”."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Undantag 1: Valfria fält är fler än de obligatoriska – markera obligatoriska fält med svart asterisk\noch informera över formuläret att obligatoriska fält markeras med en asterisk."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Undantag 2: Valfria fält och obligatoriska fält är (ungefär) lika många – markera valfria fält med\n”(valfritt)” och obligatoriska fält med svart asterisk och informera över formuläret att obligatoriska fält\nmarkeras med en asterisk."
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