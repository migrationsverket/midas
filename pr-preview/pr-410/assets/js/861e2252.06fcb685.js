"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4166],{

/***/ 70980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_dark_mode_mdx_861_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-dark-mode-mdx-861.json
const site_docs_dev_dark_mode_mdx_861_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/dark-mode","title":"Mörkt läge","description":"Hantera mörkt i designsystemet","source":"@site/docs/dev/dark-mode.mdx","sourceDirName":"dev","slug":"/dev/dark-mode","permalink":"/pr-preview/pr-410/dev/dark-mode","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Mörkt läge","description":"Hantera mörkt i designsystemet","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 2 modules
var Link = __webpack_require__(46964);
;// ./apps/docs/docs/dev/dark-mode.mdx


const frontMatter = {
	title: 'Mörkt läge',
	description: 'Hantera mörkt i designsystemet',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Dark Mode / Mörkt läge';

const assets = {

};




const toc = [{
  "value": "Kontrollera val av tema",
  "id": "kontrollera-val-av-tema",
  "level": 2
}, {
  "value": "Tokens",
  "id": "tokens",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "dark-mode--mörkt-läge",
        children: "Dark Mode / Mörkt läge"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Från och med version ", (0,jsx_runtime.jsx)(_components.code, {
        children: "5.0.0"
      }), " finns våra komponenter både ljust och mörkt tema. Det innebär att designsystemets komponenter kan anpassa sig till användarens inställningar för mörkt läge i operativsystemet eller webbläsaren. Detta sker automatiskt om du använder vår globala stylesheet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "global.css"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Link/* Link */.N, {
      standalone: true,
      href: "/get-started/use/#installera-inter-som-typsnitt",
      children: 'Läs mer om hur du installerar global.css'
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kontrollera-val-av-tema",
      children: "Kontrollera val av tema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om projektet har uppdaterat ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/components"
      }), " och använder vår globala stylesheet så följer komponenterna automatiskt användarens inställningar. Om du manuellt vill styra temat, t.ex. om ert projekt inte är redo att stödja mörkt läge, kan du stänga av mörkt läge genom att ändra färgschemat i CSS på vilken nivå som passar projektet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "body {\n  color-scheme: light;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använder du inte vår globala stylesheet kan du aktivera mörkt läge genom att definera bägge färgscheman."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "body {\n  color-scheme: light dark;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tokens",
      children: "Tokens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Du kan fortfarande använda tokens för att importera färger på egen hand. Observera dock att färgerna i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "baseColors"
      }), " är fasta värden och är inte dynamiska för ljust/mörkt läge. För att få en färg som anpassar sig behöver du importera en semantisk token."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { semantic, baseColors } from '@midas-ds/components/theme'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<div style={{ backgroundColor: semantic.background01 }}>\n  <p style={{ color: semantic.textPrimary }}>\n    En text som är mörk i ljust läge men ljus i mörkt läge på en bakgrund som gör tvärt om!\n  </p>\n  <p style={{ color: baseColors.black }}>En text som alltid är svart</p>\n</div>\n"
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



/***/ })

}]);