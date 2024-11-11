"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8915],{

/***/ 64931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_error_message_mdx_0de_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-error-message-mdx-0de.json
const site_docs_design_patterns_error_message_mdx_0de_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/error-message","title":"Validering","description":"Sammanfattning","source":"@site/docs/design-patterns/error-message.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/error-message","permalink":"/pr-preview/pr-129/design-patterns/error-message","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sideBar","previous":{"title":"Knappar och länkar","permalink":"/pr-preview/pr-129/design-patterns/buttons-and-links"},"next":{"title":"Fokus","permalink":"/pr-preview/pr-129/design-patterns/focus"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/design-patterns/error-message.mdx


const frontMatter = {};
const contentTitle = 'Validering';

const assets = {

};



const toc = [{
  "value": "Sammanfattning",
  "id": "sammanfattning",
  "level": 2
}, {
  "value": "Felmeddelande",
  "id": "felmeddelande",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "validering",
        children: "Validering"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sammanfattning",
      children: "Sammanfattning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vid valideringsfel visas en sammanfattning av de fel som förekommer högst upp på sidan. Sammanfattningen ska bestå av förklaring\npå vad som är fel och konkreta råd på hur det/de går att åtgärda för att undvika nya fel. Sammanfattningen går endast att ta bort genom att åtgärda de fel som anges."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "felmeddelande",
      children: "Felmeddelande"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "När det sker ett fel eller om det saknas obligatorisk information visas ett felmeddelande under komponenten. Meddelandet ska förklara\nvad som är fel och hur det går att åtgärda."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Felmeddelandet skrivs med text i svart och placeras nedanför komponenten där felet uppstod. Meddelandet inleds\nmed varningstriangel i rött."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "En röd vertikal linje i vänstermarginalen markerar det område som innehåller felet, inklusive frågan eller etiketten, felmeddelandet och fältet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Om felet berör ett specifikt inmatningsfält ska även detta markeras med en röd ram."
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