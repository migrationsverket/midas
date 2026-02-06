"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6618],{

/***/ 16467
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FilterPopup: () => (/* binding */ FilterPopup),
  InlineFilter: () => (/* binding */ InlineFilter),
  InlineFilterAccordion: () => (/* binding */ InlineFilterAccordion),
  SelectColumns: () => (/* binding */ SelectColumns),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_tables_mdx_93c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-tables-mdx-93c.json
const site_docs_design_patterns_tables_mdx_93c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/tables","title":"Tabeller","description":"Tabeller används för att presentera strukturerad data på ett tydligt och jämförbart sätt. För att stödja olika användarbehov och datamängder innehåller designsystemet ett antal etablerade mönster för tabeller.","source":"@site/docs/design-patterns/tables.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/tables","permalink":"/pr-preview/pr-1044/design-patterns/tables","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sideBar","previous":{"title":"Read-only","permalink":"/pr-preview/pr-1044/design-patterns/read-only"},"next":{"title":"Validering i formulär","permalink":"/pr-preview/pr-1044/design-patterns/validation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(86025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/index.js + 2 modules
var ThemedImage = __webpack_require__(21122);
;// ./apps/docs/docs/design-patterns/tables.mdx


const frontMatter = {};
const contentTitle = 'Tabeller';

const assets = {

};





function InlineFilter() {
  const lightSrc = (0,useBaseUrl/* default */.Ay)('/img/inline-filter-light.svg');
  const darkSrc = (0,useBaseUrl/* default */.Ay)('/img/inline-filter-dark.svg');
  return (0,jsx_runtime.jsx)(ThemedImage/* default */.A, {
    alt: "Inline filter",
    sources: {
      light: lightSrc,
      dark: darkSrc
    }
  });
}
function InlineFilterAccordion() {
  const lightSrc = (0,useBaseUrl/* default */.Ay)('/img/inline-accordion-light.svg');
  const darkSrc = (0,useBaseUrl/* default */.Ay)('/img/inline-accordion-dark.svg');
  return (0,jsx_runtime.jsx)(ThemedImage/* default */.A, {
    alt: "Inline filter",
    sources: {
      light: lightSrc,
      dark: darkSrc
    }
  });
}
function FilterPopup() {
  const lightSrc = (0,useBaseUrl/* default */.Ay)('/img/filter-popover-light.svg');
  const darkSrc = (0,useBaseUrl/* default */.Ay)('/img/filter-popover-dark.svg');
  return (0,jsx_runtime.jsx)(ThemedImage/* default */.A, {
    alt: "Inline filter",
    sources: {
      light: lightSrc,
      dark: darkSrc
    }
  });
}
function SelectColumns() {
  const lightSrc = (0,useBaseUrl/* default */.Ay)('/img/select-columns-light.svg');
  const darkSrc = (0,useBaseUrl/* default */.Ay)('/img/select-columns-dark.svg');
  return (0,jsx_runtime.jsx)(ThemedImage/* default */.A, {
    alt: "Select columns",
    sources: {
      light: lightSrc,
      dark: darkSrc
    }
  });
}
const toc = [{
  "value": "Val av kolumner",
  "id": "val-av-kolumner",
  "level": 2
}, {
  "value": "Filtrering",
  "id": "filtrering",
  "level": 2
}, {
  "value": "Inline-filter",
  "id": "inline-filter",
  "level": 3
}, {
  "value": "Filter i popover",
  "id": "filter-i-popover",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "tabeller",
        children: "Tabeller"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tabeller används för att presentera strukturerad data på ett tydligt och jämförbart sätt. För att stödja olika användarbehov och datamängder innehåller designsystemet ett antal etablerade mönster för tabeller."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "val-av-kolumner",
      children: "Val av kolumner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För tabeller med många kolumner kan det vara lämpligt att låta användaren styra vilka kolumner som ska visas. Detta gör vi genom att ha en knapp placerad i anslutning till tabellen som öppnar en popover. Popovern innehåller en lista med kryssrutor där varje kryssruta representerar en kolumn i tabellen. Genom att markera eller avmarkera kryssrutorna kan användaren välja vilka kolumner som ska vara synliga."
    }), "\n", (0,jsx_runtime.jsx)(SelectColumns, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filtrering",
      children: "Filtrering"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inline-filter",
      children: "Inline-filter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inline-filter innebär att filtren placeras direkt ovanför tabellen och är alltid synliga. Detta gör det enkelt att upptäcka vilka filter som finns tillgängliga, se vilka filter som redan är aktiva samt justera flera filter på en gång utan extra interaktioner. Du kan ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/tanstack-table/#filtrering",
        children: "se ett exempel på detta mönster här"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använd detta mönster när"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "du har ett fåtal filter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "användaren snabbt behöver kunna justera flera filter på en gång"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "det är viktigt att direkt kunna se vilka filter som är aktiva"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(InlineFilter, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Filtren kan vid behov läggas i en ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/accordion",
        children: "Accordion"
      }), " för att kunna fällas ihop och ta mindre plats."]
    }), "\n", (0,jsx_runtime.jsx)(InlineFilterAccordion, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filter-i-popover",
      children: "Filter i popover"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["I detta mönster öppnas filtervalen i en popover via en knapp eller en ikon. Det ger en fokuserad tabellvy och är användbart filtrering inte är användarens primära handling. Inne i popovern läggs filtren i ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/accordion",
        children: "Accordion"
      }), " som kan expanderas och fällas ihop, vilket ger en tydlig och skalbar struktur även när det är många filter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använd detta mönster när"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "filtreringen inte är en primär uppgift för de flesta användare"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "det finns många filter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "du vill kunna gruppera filter"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(FilterPopup, {})]
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