"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2494],{

/***/ 94453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_validation_mdx_f40_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-validation-mdx-f40.json
const site_docs_design_patterns_validation_mdx_f40_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/validation","title":"Validering i formulär","description":"Validering ska hjälpa våra användare att fylla i formulär rätt. Syftet är att ge tydlig återkoppling vid fel och samtidigt underlätta för användaren att rätta till dessa. Vi har två sätt att visa fel: direkt vid fältet eller som en lista högst upp på sidan när formuläret skickas in.","source":"@site/docs/design-patterns/validation.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/validation","permalink":"/pr-preview/pr-574/design-patterns/validation","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/design-patterns/validation.mdx


const frontMatter = {
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Validering i formulär';

const assets = {

};



const toc = [{
  "value": "Felmeddelande",
  "id": "felmeddelande",
  "level": 2
}, {
  "value": "Direktvalidering",
  "id": "direktvalidering",
  "level": 2
}, {
  "value": "Felmeddelandelista",
  "id": "felmeddelandelista",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
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
        id: "validering-i-formulär",
        children: "Validering i formulär"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Validering ska hjälpa våra användare att fylla i formulär rätt. Syftet är att ge tydlig återkoppling vid fel och samtidigt underlätta för användaren att rätta till dessa. Vi har två sätt att visa fel: direkt vid fältet eller som en lista högst upp på sidan när formuläret skickas in."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "felmeddelande",
      children: "Felmeddelande"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alla inmatningskomponenter har ett felmeddelande som kan visas vid valideringsfel. Felmeddelandet kan visas antingen ovanför eller under fältet. Som standard visas felmeddelandet ovanför fältet och det är detta vi rekommenderar eftersom det blir en logisk läsordning."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "direktvalidering",
      children: "Direktvalidering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fält där vi har en formateringsregel eller kan validera mot en databas ska valideras när användaren lämnar fältet."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "felmeddelandelista",
      children: "Felmeddelandelista"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om det finns fält som har valideringsfel efter att användaren skickat in formuläret eller gått vidare till en ny sida, så ska dessa sammanfattas i en felmeddelandelista som visas högst upp på sidan. Felmeddelandelistan är en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Infobanner"
      }), " som innehåller länkar till de komponenter som behöver rättas till.\nLänkarnas text ska vara felmeddelandet från komponeterna med valideringsfel."]
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