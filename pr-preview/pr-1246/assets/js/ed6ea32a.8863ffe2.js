"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1296],{

/***/ 75601
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_feedback_mdx_ed6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-feedback-mdx-ed6.json
const site_docs_design_patterns_feedback_mdx_ed6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/feedback","title":"Handlingar och återkoppling","description":"Detta mönster beskriver hur vi hanterar handlingar i våra gränssnitt. Mönstret definierar tre olika typer av handlingar, hur vi bekräftar användarens intention och vilken typ av återkoppling vi ger i respektive fall.","source":"@site/docs/design-patterns/feedback.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/feedback","permalink":"/pr-preview/pr-1246/design-patterns/feedback","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sideBar","previous":{"title":"Knappar och länkar","permalink":"/pr-preview/pr-1246/design-patterns/buttons-and-links"},"next":{"title":"Formulär","permalink":"/pr-preview/pr-1246/design-patterns/forms"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/design-patterns/feedback.mdx


const frontMatter = {};
const contentTitle = 'Handlingar och återkoppling';

const assets = {

};



const toc = [{
  "value": "Definition",
  "id": "definition",
  "level": 3
}, {
  "value": "Typer av Handlingar",
  "id": "typer-av-handlingar",
  "level": 3
}, {
  "value": "Från handling till återkoppling",
  "id": "från-handling-till-återkoppling",
  "level": 3
}, {
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
  "value": "Otillgänglig handling",
  "id": "otillgänglig-handling",
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
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "handlingar-och-återkoppling",
        children: "Handlingar och återkoppling"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detta mönster beskriver hur vi hanterar handlingar i våra gränssnitt. Mönstret definierar tre olika typer av handlingar, hur vi bekräftar användarens intention och vilken typ av återkoppling vi ger i respektive fall."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi använder handling för att beskriva ett medvetet initiativ av användaren för att få systemet att göra något. Handlingar utförs typiskt genom knappar eller menyalternativ."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typer-av-handlingar",
      children: "Typer av Handlingar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi skiljer mellan tre sorters handlingar:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#tillg%C3%A4ngliga-handlingar",
          children: "Tillgängliga handlingar"
        }), ": handlingar som alltid är möjliga att utföra och som systemet sedan utvärderar"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#f%C3%B6ruts%C3%A4ttningsstyrda-handlingar",
          children: "Villkorade handlingar"
        }), ": handlingar som kräver specifika förutsättningar för att kunna utföras"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#otillg%C3%A4nglig-handling",
          children: "Otillgängliga handlingar"
        }), ": handlingar som inte är möjliga att utföra"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "från-handling-till-återkoppling",
      children: "Från handling till återkoppling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interaktionen följer alltid samma logik:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Användaren försöker utföra en handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handlingstypen avgör om och när handlingen kan utföras"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ett återkopplingsmönster avgör hur systemet svarar användaren"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tillgängliga-handlingar",
      children: "Tillgängliga handlingar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Denna sortens handling utförs alltid när den initieras av användaren. Därefter utvärderar systemet resultatet genom validering eller affärslogik. Fel eller saknade förutsättningar kommuniceras efter användarens försök att genomföra handling, inte genom att hindra handlingen."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "användning",
      children: "Användning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detta är normallfallet för handlingar. Typiska exempel:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "När användaren går vidare till nästa sida i en process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "När användaren skickar in ett formulär"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "När användaren sparar data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "krav-på-återkoppling",
      children: "Krav på återkoppling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resultatet ska kommuniceras tydligt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eventuella fel ska kopplas till relevant innehåll/kontroll och vara tillgängliga för hjälpmedel"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "villkorade-handlingar",
      children: "Villkorade handlingar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En villkorad handling är endast möjlig att utföra när vissa krav är uppfyllda. Om kraven inte är uppfyllda ska handlingen inte kunna utföras, men användaren ska få tydlig vägledning om vad som krävs för att kunna göra det."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "användning-1",
      children: "Användning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "När det inte är meningsfullt eller tillåtet att utföra handlingen om inte kraven är uppfyllda"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "När ett minsta antal val krävs (t.ex. markera minst ett objekt)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "krav-på-återkoppling-1",
      children: "Krav på återkoppling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Återkopplingen ska vara omedelbar"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Återkoppling ska vara tillgänglig även för skärmläsaranvändare"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Det ska tydligt framgå vad som saknas och hur användaren går vidare"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "otillgänglig-handling",
      children: "Otillgänglig handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "I våra externa system ska det inte finnas några otillgängliga handlingar."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En otillgänglig åtgärd är en handling som användaren inte kan utföra i aktuell kontext och där användaren själv inte kan uppfylla kraven för att handlingen ska vara möjlig."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "användning-2",
      children: "Användning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "När användaren inte har rätt behörighetsnivå"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "När funktionaliteten är avstängd i systemet"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "krav-på-återkoppling-2",
      children: "Krav på återkoppling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "En förklaring ska alltid finnas i direkt anslutning till komponenten som utför handlingen."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Förklaringen ska vara tillgänglig utan hover"
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