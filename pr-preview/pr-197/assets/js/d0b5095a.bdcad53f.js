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
const site_docs_design_patterns_forms_md_d0b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/forms","title":"Formulär","description":"Obligatorisk vs valfri","source":"@site/docs/design-patterns/forms.md","sourceDirName":"design-patterns","slug":"/design-patterns/forms","permalink":"/pr-preview/pr-197/design-patterns/forms","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
// EXTERNAL MODULE: ./packages/flex/src/index.ts + 4 modules
var flex_src = __webpack_require__(93294);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(29511);
;// ./apps/docs/docs/design-patterns/forms.md


const frontMatter = {
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Formulär';

const assets = {

};






const toc = [{
  "value": "Obligatorisk vs valfri",
  "id": "obligatorisk-vs-valfri",
  "level": 2
}, {
  "value": "Undantag 1: Valfria fält är fler än de obligatoriska",
  "id": "undantag-1-valfria-fält-är-fler-än-de-obligatoriska",
  "level": 3
}, {
  "value": "Undantag 2: Valfria fält och obligatoriska fält är (ungefär) lika många",
  "id": "undantag-2-valfria-fält-och-obligatoriska-fält-är-ungefär-lika-många",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "formulär",
        children: "Formulär"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "obligatorisk-vs-valfri",
      children: "Obligatorisk vs valfri"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Huvudregeln är att bara fråga användaren om uppgifter som är nödvändiga för att ta ett beslut eller liknande.\nFöljer vi den regeln faller det sig naturligt att de flesta fält i ett formulär är obligatoriska. Det ger oss grundregeln: Vi markerar endast eventuella valfria fält med texten ", (0,jsx_runtime.jsx)(_components.code, {
        children: "”(valfritt)”"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      hideCode: true,
      scope: {
        Flex: flex_src/* Flex */.s,
        FlexItem: flex_src/* FlexItem */.Z,
        TextField: src/* TextField */.A_
      },
      children: `<Flex>
<FlexItem col="fluid">
<TextField
  label="Skriv ditt fullständiga namn"
  description="Både för och efternamn"
  isRequired
  errorMessage="Detta är ett obligatoriskt fält"
/>
</FlexItem>
<FlexItem col="fluid">
<TextField
  label="Skriv dina favoritfrukter (Valfritt)"
  description="Du kan lämna fältet tomt om du inte har någon favoritfrukt"
/>
</FlexItem>
</Flex>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "undantag-1-valfria-fält-är-fler-än-de-obligatoriska",
      children: "Undantag 1: Valfria fält är fler än de obligatoriska"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Markera obligatoriska fält med svart asterisk och informera över formuläret att obligatoriska fält markeras med en asterisk."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "undantag-2-valfria-fält-och-obligatoriska-fält-är-ungefär-lika-många",
      children: "Undantag 2: Valfria fält och obligatoriska fält är (ungefär) lika många"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Markera valfria fält med ”(valfritt)” och obligatoriska fält med svart asterisk och informera över formuläret att obligatoriska fält\nmarkeras med en asterisk."
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