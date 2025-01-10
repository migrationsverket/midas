"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[7893],{

/***/ 36141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_personnummer_mdx_9a2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-personnummer-mdx-9a2.json
const site_docs_design_patterns_personnummer_mdx_9a2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/personnummer","title":"Personnummer","description":"Vi följer Skatteverkets regler gällande hur ett personnummer är formaterat. Personnummer består av födelsetid (ÅÅMMDD) och födelsenummer (NNNN) separerat med bindestreck - eller med plus + för personer som är äldre än hundra år. Ett personnummer skrivs alltså på formen ÅÅMMDD-NNNN och det är så vi anger det i hjälptexter m.m.","source":"@site/docs/design-patterns/personnummer.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/personnummer","permalink":"/pr-preview/pr-181/design-patterns/personnummer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/link/src/index.ts + 3 modules
var src = __webpack_require__(85560);
;// ./apps/docs/docs/design-patterns/personnummer.mdx


const frontMatter = {
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Personnummer';

const assets = {

};




const toc = [{
  "value": "Födelsetid",
  "id": "födelsetid",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
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
        id: "personnummer",
        children: "Personnummer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vi följer Skatteverkets regler gällande hur ett personnummer är formaterat. Personnummer består av födelsetid (ÅÅMMDD) och födelsenummer (NNNN) separerat med bindestreck ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-"
      }), " eller med plus ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " för personer som är äldre än hundra år. Ett personnummer skrivs alltså på formen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ÅÅMMDD-NNNN"
      }), " och det är så vi anger det i hjälptexter m.m."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Men för att göra det så lätt som möjligt för användaren att mata in personnummer finns det en förlåtande personnummerinmatning som en egenskap till ", (0,jsx_runtime.jsx)(src/* Link */.N, {
        href: "/components/textfield",
        children: "TextField"
      }), ". Med den accepteras alla möjliga sätt att skriva ett (giltigt) personnummer. Implementationen är uppbyggd så att den:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tillåter frivilliga sekelsiffor: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "19"
        }), " eller ", (0,jsx_runtime.jsx)(_components.code, {
          children: "20"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tillåter flera olika avgränsare: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "blanksteg"
        }), " eller inget"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(src/* Link */.N, {
      standalone: true,
      href: "/components/textfield/#personnummer",
      children: "Mer information om vår förlåtande personnummerinmatning"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "födelsetid",
      children: "Födelsetid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I flera av våra tjänster är endast födelsetid obligatoriskt då det inte är säkert att användaren har svenskt personnummer. Födelstid skrivs ÅÅMMDD."
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