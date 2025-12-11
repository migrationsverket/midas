"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6043],{

/***/ 40492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_get_started_contribute_coding_mdx_e57_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-get-started-contribute-coding-mdx-e57.json
const site_docs_get_started_contribute_coding_mdx_e57_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/contribute/coding","title":"Bidra till komponentbiblioteket","description":"Att komma igång och bidra med kod till Midas är enkelt!","source":"@site/docs/get-started/contribute/coding.mdx","sourceDirName":"get-started/contribute","slug":"/get-started/contribute/coding","permalink":"/pr-preview/pr-978/get-started/contribute/coding","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Utveckling","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/get-started/contribute/coding.mdx


const frontMatter = {
	sidebar_label: 'Utveckling',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Bidra till komponentbiblioteket';

const assets = {

};



const toc = [{
  "value": "🤝 Gemenskapsdriven utveckling",
  "id": "-gemenskapsdriven-utveckling",
  "level": 2
}, {
  "value": "🛠️ Kom igång",
  "id": "️-kom-igång",
  "level": 2
}, {
  "value": "Nx",
  "id": "nx",
  "level": 3
}, {
  "value": "Starta Storybook",
  "id": "starta-storybook",
  "level": 3
}, {
  "value": "Komponentbibliotek",
  "id": "komponentbibliotek",
  "level": 3
}, {
  "value": "Tester",
  "id": "tester",
  "level": 3
}, {
  "value": "Dokumentationswebb",
  "id": "dokumentationswebb",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 4
}, {
  "value": "Testa lokalt end-to-end",
  "id": "testa-lokalt-end-to-end",
  "level": 3
}, {
  "value": "🌿 Arbetsflöde versionshantering",
  "id": "-arbetsflöde-versionshantering",
  "level": 2
}, {
  "value": "Branch",
  "id": "branch",
  "level": 3
}, {
  "value": "Commit",
  "id": "commit",
  "level": 3
}, {
  "value": "🏗️ Designfilosofi och arkitektur",
  "id": "️-designfilosofi-och-arkitektur",
  "level": 2
}, {
  "value": "✨ Clean Code-principer",
  "id": "-clean-code-principer",
  "level": 3
}, {
  "value": "🏛️ Clean Architecture-principer",
  "id": "️-clean-architecture-principer",
  "level": 3
}, {
  "value": "📦 Beroendestrategi: Headless-bibliotek",
  "id": "-beroendestrategi-headless-bibliotek",
  "level": 3
}, {
  "value": "React Aria Components (RAC) - Förstahandsval",
  "id": "react-aria-components-rac---förstahandsval",
  "level": 4
}, {
  "value": "Alternativa headless-bibliotek",
  "id": "alternativa-headless-bibliotek",
  "level": 4
}, {
  "value": "Undvik custom-lösningar",
  "id": "undvik-custom-lösningar",
  "level": 4
}, {
  "value": "🔨 Bygga komponenter",
  "id": "-bygga-komponenter",
  "level": 2
}, {
  "value": "Styleguide",
  "id": "styleguide",
  "level": 3
}, {
  "value": "Skapa stories",
  "id": "skapa-stories",
  "level": 3
}, {
  "value": "Skriv enhetstester",
  "id": "skriv-enhetstester",
  "level": 3
}, {
  "value": "Dokumentation",
  "id": "dokumentation",
  "level": 3
}, {
  "value": "🚀 Release",
  "id": "-release",
  "level": 2
}, {
  "value": "Hur det fungerar",
  "id": "hur-det-fungerar",
  "level": 3
}, {
  "value": "Vad du behöver göra",
  "id": "vad-du-behöver-göra",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "bidra-till-komponentbiblioteket",
        children: "Bidra till komponentbiblioteket"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Att komma igång och bidra med kod till Midas är enkelt!"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-gemenskapsdriven-utveckling",
      children: "🤝 Gemenskapsdriven utveckling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Midas komponentbibliotek är ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "gemenskapsdriven"
      }), " - det är ett strategiskt mål att biblioteket produceras av och för användarcommunityn. Ett litet core-team ansvarar för att hantera projektet och säkerställa kvalitet, men ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bidrag från användare är mer än välkomna"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ett av våra viktigaste mål är att erbjuda en så bra ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "developer experience (DX)"
      }), " som möjligt. För att uppnå detta behöver vi er feedback, era idéer och era bidrag. Genom att vara gemenskapsdrivna säkerställer vi att biblioteket möter verkliga behov och utmaningar som ni stöter på i era projekt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hur du kan bidra:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rapportera buggar och föreslå förbättringar"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bidra med kod för nya komponenter eller funktionalitet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Förbättra dokumentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delta i diskussioner och code reviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dela din erfarenhet av att använda Midas"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Din feedback och ditt engagemang är avgörande för att göra Midas bättre. Tveka inte att höra av dig!"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-kom-igång",
      children: "🛠️ Kom igång"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Node version >22 krävs. Installera ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://nx.dev",
        children: "Nx"
      }), " globalt: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install --global nx@latest"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nx",
      children: "Nx"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Midas är ett monorepo som hanteras med ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://nx.dev",
        children: "Nx"
      }), ". Det innebär att vi har flera olika projekt i samma repo, till exempel komponentbiblioteket, dokumentationswebben och andra verktyg. Varje projekt har sitt eget scope och kan hanteras individuellt. Du kan köra ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nx graph"
      }), " för att se en visuell representation av hur projekten är relaterade till varandra. Eftersom vissa projekt är beroende av andra, kan en ändring i ett projekt innebära att ett annat projekt också behöver en ny version. Till exempel, om ", (0,jsx_runtime.jsx)(_components.code, {
        children: "theme"
      }), " uppdateras, så kommer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "components"
      }), " som är beroende av ", (0,jsx_runtime.jsx)(_components.code, {
        children: "theme"
      }), " också att få en ny version."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "starta-storybook",
      children: "Starta Storybook"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx serve storybook\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "komponentbibliotek",
      children: "Komponentbibliotek"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Alla komponenter ligger under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/packages/components"
      }), " och exporteras som ett npm-paket ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.npmjs.com/package/@midas-ds/components",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "@midas-ds/components"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tester",
      children: "Tester"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx test components\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mer info finns på ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../tests",
        children: "sidan om tester"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dokumentationswebb",
      children: "Dokumentationswebb"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dokumentationswebben ligger i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "apps/docs"
      }), " och är byggd med ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://docusaurus.io/",
        children: "Docusaurus"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx serve docs    # Kör lokalt\nnx build docs    # Produktionsbygge\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vid ett produktionsbygge samlas information om komponenternas typescript-typer in och visas med hjälp av en tabell under rubriken API på varje komponentsida.\nFör snabbare uppstart är detta inaktiverat per default i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "serve"
      }), "-kommandot, men du kan aktivera det om du behöver se API-tabellerna under utveckling:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "DOCUSAURUS_HIDE_API=false nx serve docs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testa-lokalt-end-to-end",
      children: "Testa lokalt end-to-end"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För att testa komponentbiblioteket i en annan app kan du publicera det till ett lokalt npm-registry:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx run @midas-ds/source:release:local:dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detta startar ett lokalt Verdaccio-registry och publicerar alla paket. Du kan sedan installera dem i ett testprojekt:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @midas-ds/components@latest --registry=http://localhost:4873/\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mer information finns i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tools/release-local/README.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-arbetsflöde-versionshantering",
      children: "🌿 Arbetsflöde versionshantering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vi använder en enkel branchstrategi med en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), "-branch som alltid ska vara i ett deploybart skick. Utveckling sker i feature- eller bugfix-brancher som sedan mergas in i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ". Vi använder inte ", (0,jsx_runtime.jsx)(_components.code, {
        children: "develop"
      }), " eller andra liknande brancher för att hålla det enkelt och för att passa ett arbetssätt med kontinuerlig integration och leverans (CI/CD)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ett exempel på hur det kan se ut i praktiken:"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "---\nconfig:\n  logLevel: 'debug'\n  theme: 'neutral'\n  gitGraph:\n    showBranches: true\n---\ngitGraph\n  commit tag: \"theme@4.1.4\"\n  commit id: \"8db8ba0b0a\"\n  branch feature/new-button\n  commit id: \"81eb8978a9\"\n  commit id: \"6aef7a733f\"\n  checkout main\n  branch bugfix/button-color\n  commit id: \"6560249c6d\"\n  checkout feature/new-button\n  commit id: \"446b0bb972\"\n  checkout main\n  merge bugfix/button-color\n  checkout feature/new-button\n  commit id: \"b682194518\"\n  checkout main\n  merge feature/new-button\n  commit tag: \"components@14.1.0\"\n  commit id: \"a27c4f41d9\"\n  commit id: \"5dec5b5dd3\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "branch",
      children: "Branch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Brancher namnges enligt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[feature|bugfix|hotfix|docs|refactor|chore|test]/[scope]/"
      }), ", till exempel ", (0,jsx_runtime.jsx)(_components.code, {
        children: "feature/button"
      }), ". Scope är valfritt men om det används ska det referera till ett av projekten i monorepot, till exempel ", (0,jsx_runtime.jsx)(_components.code, {
        children: "components"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs"
      }), " eller ", (0,jsx_runtime.jsx)(_components.code, {
        children: "theme"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "commit",
      children: "Commit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Commits görs enligt ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.conventionalcommits.org/en/v1.0.0/#summary",
        children: "conventional commits"
      }), ". Använd engelska,\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "imperativ form"
      }), ", definiera type ", (0,jsx_runtime.jsx)(_components.code, {
        children: "feat|docs|fix|refactor|test|chore|ops..."
      }), " för att avgöra vilken versionsändring du vill göra och scope ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(project, component)"
      }), " som rubrik för changelog."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Viktigt"
      }), ": Scope börjar alltid med ett av Nx-projekten (", (0,jsx_runtime.jsx)(_components.code, {
        children: "components"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "theme"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs"
      }), ", etc.) för att versionshanteringen ska fungera korrekt. Komponenter eller features anges som andra parametern efter kommatecken."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Se ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".commitlintrc.js"
      }), " för tillåtna types och scopes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exempel:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "feat(components, button): add new button variant   # Minor bump för components\nfix(theme): fix button hover color                 # Patch för theme\ndocs: update contribution guide                    # Ingen bump\n\n# Med body för mer kontext\nfix(theme): prevent red color on button hover\n\nIntroduce new css variable to automatically\nselect style based on input type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Innan du skapar en PR, städa gärna commit-historiken med ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git rebase -i"
        }), " om du har många commits i din feature branch. ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase",
          children: "Guide till git rebase"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-designfilosofi-och-arkitektur",
      children: "🏗️ Designfilosofi och arkitektur"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Midas designsystem följer principer från Clean Code och Clean Architecture för att säkerställa hög kvalitet, underhållbarhet och långsiktig stabilitet."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-clean-code-principer",
      children: "✨ Clean Code-principer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi strävar efter ren, läsbar och underhållbar kod:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Små funktioner och komponenter"
        }), ": Varje komponent har ett tydligt, avgränsat ansvar (Single Responsibility Principle)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Beskrivande namn"
        }), ": Funktioner, variabler och komponenter har namn som tydligt beskriver vad de gör"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testbar kod"
        }), ": Kod struktureras för att vara enkel att testa"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DRY (Don't Repeat Yourself)"
        }), ": Undvik kodduplicering genom återanvändning och abstraktion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inkrementella förbättringar"
        }), ": Lämna koden bättre än du hittade den - fixa gärna problem du ser även om de inte är en del av din uppgift"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stateless komponenter"
        }), ": Komponenter är i möjlig mån stateless och stödjer designsystemet på ett generiskt sätt"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-clean-architecture-principer",
      children: "🏛️ Clean Architecture-principer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi tillämpar principer från clean architecture för att skapa ett underhållbart och stabilt komponentbibliotek:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Separera styling från beteende"
        }), ": Använd headless-bibliotek för logik och tillgänglighet, applicera endast visuell stil"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimera beroenden"
        }), ": Håll komponenter löst kopplade och undvik onödiga beroenden mellan dem"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testbarhet"
        }), ": Komponenter är enkla att testa isolerat utan omfattande setup"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stabilitet över flexibilitet"
        }), ": Välj stabila, välunderhållna beroenden framför att bygga egen komplexitet"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-beroendestrategi-headless-bibliotek",
      children: "📦 Beroendestrategi: Headless-bibliotek"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "react-aria-components-rac---förstahandsval",
      children: "React Aria Components (RAC) - Förstahandsval"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Komponenter byggs ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "i första hand"
      }), " på ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/getting-started.html",
        children: "React Aria Components"
      }), ". React Aria tillhandahåller:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tillgänglighet"
        }), ": Fullständigt stöd för WCAG, skärmläsare och tangentbordsnavigation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plattformsstöd"
        }), ": Touch, mouse och keyboard fungerar sömlöst"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Produktionstestad"
        }), ": Vältestad kod från Adobe som används i stora produktionsmiljöer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internationalisering"
        }), ": Inbyggt stöd för olika språk och lokalisering"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Viktigt"
      }), ": Följ React Aria's API och mönster så nära som möjligt. Undvik att avvika för mycket från originalet då det:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Försvårar uppgraderingar när React Aria uppdaterar sitt API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ökar underhållsbördan för teamet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Riskerar att vi bygger egen komplexitet som redan är löst"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practice"
      }), ": Om du behöver anpassa beteende, fråga dig först om React Aria redan har en lösning via props, composition eller hooks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "alternativa-headless-bibliotek",
      children: "Alternativa headless-bibliotek"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["När funktionalitet ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inte finns"
      }), " i React Aria Components, välj andra välunderhållna headless-bibliotek."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exempel på bibliotek vi redan använder:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://tanstack.com/table",
            children: "TanStack Table"
          })
        }), ": För avancerad tabellhantering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://react-select.com/",
            children: "React Select"
          })
        }), ": För komplexa select-komponenter"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kriterier för att välja ett bibliotek:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Välunderhållet och aktivt utvecklat"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Headless (ingen inbyggd styling)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stort community och bra dokumentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TypeScript-stöd"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stabilt API med tydlig versionshantering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Produktionstestat och används av många projekt"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tveka inte att föreslå andra välunderhållna headless-bibliotek om de passar användarfallet bättre."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "undvik-custom-lösningar",
      children: "Undvik custom-lösningar"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Bygg inte egen logik för tangentbordshantering, focus management, ARIA eller accessibility-funktionalitet. Custom-lösningar är svåra att få rätt, ökar underhållsbördan dramatiskt och riskerar att introducera tillgänglighetsbrister."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "När är custom OK?"
      }), " Endast för ren visuell styling eller små, väldefinierade utilities som inte existerar i headless-bibliotek."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-bygga-komponenter",
      children: "🔨 Bygga komponenter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "styleguide",
      children: "Styleguide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Generellt, använd övriga komponenter som referens när nya läggs till. React Aria är en bra inspiration för namngivning\noch struktur, både via deras ostylade komponentbibliotek och via sin designsystemsimplementation\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/adobe/react-spectrum/tree/main/packages/%40react-spectrum",
        children: "React Spectrum"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Formatera enligt ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://prettier.io/",
            children: "Prettier"
          }), " standard"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Följ existerande patterns"
        }), ": Se hur liknande komponenter är strukturerade"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "skapa-stories",
      children: "Skapa stories"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alla states bör finnas representerade som stories i Storybook. Storybook är i första hand ett internt\nverktyg för UX och utvecklare i designsystemet men också en publikt exponerad referens med API och visuell\nrepresentation av komponenterna."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "skriv-enhetstester",
      children: "Skriv enhetstester"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Eftersom tillgänglighet är ett av designsystemets viktigaste fokusområden är det viktigt att vi regressionstestar och testar\nså stor del av möjliga states av alla komponenter på enhetsnivå. MIDAS använder primärt\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://storybook.js.org/docs/writing-tests",
        children: "Storybook som testplattform"
      }), ". De stories du skapat för komponenter kan du nu använda som utgångspunkt för dina tester.\nLäs mer om ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../tests",
        children: "hur vi förhåller oss till tester av våra komponenter"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dokumentation",
      children: "Dokumentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Komponenten dokumenteras på dokumentationswebben med lämpliga exempel, beskrivning och properties. Normalt plockas\nproperties upp från komponenten via ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/styleguidist/react-docgen-typescript",
        children: "react-docgen-typescript"
      }), "\nmen om det har införts nya types eller interfaces kan de behöva specificeras enligt ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://jsdoc.app/",
        children: "JSDoc"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-release",
      children: "🚀 Release"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release sker automatiskt via CI/CD när ändringar mergas till ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), "-branchen."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hur-det-fungerar",
      children: "Hur det fungerar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Automatiska versioner"
          }), ": När en pull request mergas till ", (0,jsx_runtime.jsx)(_components.code, {
            children: "main"
          }), " analyserar Nx Release alla commits sedan senaste release och räknar fram rätt version baserat på conventional commits."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Publicering"
          }), ": Om någon package får en ny version publiceras den automatiskt till npm."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Changelog och taggar"
          }), ": Changelog uppdateras automatiskt och nya git-taggar skapas enligt formatet ", (0,jsx_runtime.jsx)(_components.code, {
            children: "nx-project@version"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dokumentation"
          }), ": Dokumentationswebben byggs och publiceras automatiskt med de senaste ändringarna."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vad-du-behöver-göra",
      children: "Vad du behöver göra"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Följ conventional commits"
        }), ": Dina commits följer conventional commits-standarden, eftersom det avgör vilken versionsändring som sker (major, minor, patch)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Merge till main"
        }), ": När din pull request godkänns och mergas till ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " sker resten automatiskt."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Du behöver inte köra några manuella release-kommandon. CI/CD-pipelinen hanterar hela releasen automatiskt."
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