"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[7054],{

/***/ 10874
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_actions_mdx_ab8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-actions-mdx-ab8.json
const site_docs_design_patterns_actions_mdx_ab8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/actions","title":"Handlingar","description":"Detta mönster beskriver hur vi hanterar handlingar i våra system. Vi använder begreppet handling för att beskriva ett medvetet initiativ från användaren för att göra något i systemet. Handlingar utförs typiskt via knappar eller menyalternativ.","source":"@site/docs/design-patterns/actions.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/actions","permalink":"/pr-preview/pr-1246/design-patterns/actions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sideBar","previous":{"title":"Tooltip","permalink":"/pr-preview/pr-1246/components/tooltip"},"next":{"title":"Knappar och länkar","permalink":"/pr-preview/pr-1246/design-patterns/buttons-and-links"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/design-patterns/actions.mdx


const frontMatter = {};
const contentTitle = 'Handlingar';

const assets = {

};



const toc = [{
  "value": "Tillgängliga handlingar",
  "id": "tillgängliga-handlingar",
  "level": 2
}, {
  "value": "Användning",
  "id": "användning",
  "level": 3
}, {
  "value": "Krav på återkoppling",
  "id": "krav-på-återkoppling",
  "level": 3
}, {
  "value": "Villkorade handlingar",
  "id": "villkorade-handlingar",
  "level": 2
}, {
  "value": "Användning",
  "id": "användning-1",
  "level": 3
}, {
  "value": "Krav på återkoppling",
  "id": "krav-på-återkoppling-1",
  "level": 3
}, {
  "value": "Otillgängliga handlingar",
  "id": "otillgängliga-handlingar",
  "level": 2
}, {
  "value": "Användning",
  "id": "användning-2",
  "level": 3
}, {
  "value": "Krav på återkoppling",
  "id": "krav-på-återkoppling-2",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    em: "em",
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
        id: "handlingar",
        children: "Handlingar"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Detta mönster beskriver hur vi hanterar handlingar i våra system. Vi använder begreppet ", (0,jsx_runtime.jsx)(_components.em, {
        children: "handling"
      }), " för att beskriva ett medvetet initiativ från användaren för att göra något i systemet. Handlingar utförs typiskt via knappar eller menyalternativ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi skiljer mellan tre sorters handlingar:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tillgängliga handlingar: handlingar som alltid är möjliga att utföra"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "villkorade handlingar: handlingar som kräver specifika förutsättningar för att kunna utföras"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "otillgängliga handlingar: handlingar som inte är möjliga att utföra."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tillgängliga-handlingar",
      children: "Tillgängliga handlingar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tillgängliga handlingar är den vanligaste typen. Den sortens handling utförs alltid när den initieras av användaren. Fel eller saknade förutsättningar kommuniceras efter användarens försök att utföra handlingen."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "användning",
      children: "Användning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "De flesta tillgängliga handlingar behöver inte valideras, utan kan utföras direkt när användaren initierar dem."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typiska exempel på handlingar som inte behöver valideras:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "användaren klickar på en knapp för att skapa ett nytt ärende"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "användaren väljer Ta bort i en kontextmeny och får en bekräftelsemodal."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typiska exempel på tillgängliga handlingar som kräver validering:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "användaren skickar in ett formulär"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "användaren sparar data."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "krav-på-återkoppling",
      children: "Krav på återkoppling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eventuella fel ska, visuellt och i kod, kopplas till relevant innehåll/kontroll och vara tillgängliga för hjälpmedel."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "villkorade-handlingar",
      children: "Villkorade handlingar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En villkorad handling är endast möjlig att utföra när vissa villkor är uppfyllda. Om villkoren inte är uppfyllda ska handlingen inte kunna utföras, men användaren ska få tydlig vägledning om vad som krävs för att kunna göra det."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "användning-1",
      children: "Användning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "När det inte är meningsfullt eller tillåtet att utföra handlingen om inte villkoren är uppfyllda."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "När ett minsta antal val krävs av användaren (t.ex. markera minst ett objekt)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "krav-på-återkoppling-1",
      children: "Krav på återkoppling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Återkopplingen ska visas omedelbart efter att användaren försökt utföra handlingen."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Återkopplingen ska vara tillgänglig för hjälpmedel."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Det ska tydligt framgå vad som saknas och hur användaren går vidare."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "otillgängliga-handlingar",
      children: "Otillgängliga handlingar"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "En designriktlinje är att det inte ska finnas några otillgängliga handlingar i våra externa system och tjänster."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En otillgänglig handling är en handling som användaren inte kan utföra i aktuell kontext och där användaren själv inte kan uppfylla kraven för att handlingen ska vara möjlig."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "användning-2",
      children: "Användning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "När användaren inte har rätt behörighetsnivå."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "När funktionaliteten är avstängd i systemet."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "krav-på-återkoppling-2",
      children: "Krav på återkoppling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "En förklaring av varför handlingen är otillgänglig ska alltid finnas i direkt anslutning till komponenten som utför handlingen."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Förklaringen ska vara tillgänglig utan hover."
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



/***/ }

}]);