"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[3681],{

/***/ 31590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_get_started_contribute_mdx_88c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-get-started-contribute-mdx-88c.json
const site_docs_get_started_contribute_mdx_88c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/contribute","title":"Bidra till komponentbiblioteket","description":"Att komma igång och bidra med kod till Midas är enkelt!","source":"@site/docs/get-started/contribute.mdx","sourceDirName":"get-started","slug":"/get-started/contribute","permalink":"/pr-preview/pr-496/get-started/contribute","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Bidra","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/get-started/contribute.mdx


const frontMatter = {
	sidebar_label: 'Bidra',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Bidra till komponentbiblioteket';

const assets = {

};



const toc = [{
  "value": "Du behöver",
  "id": "du-behöver",
  "level": 2
}, {
  "value": "Starta Storybook",
  "id": "starta-storybook",
  "level": 3
}, {
  "value": "Starta Playground-appen (React)",
  "id": "starta-playground-appen-react",
  "level": 3
}, {
  "value": "Komponentbibliotek",
  "id": "komponentbibliotek",
  "level": 3
}, {
  "value": "Dokumentationswebb",
  "id": "dokumentationswebb",
  "level": 3
}, {
  "value": "Bygg komponentbibliotek",
  "id": "bygg-komponentbibliotek",
  "level": 3
}, {
  "value": "Instruktioner för Git",
  "id": "instruktioner-för-git",
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
  "value": "Varför conventional commits?",
  "id": "varför-conventional-commits",
  "level": 4
}, {
  "value": "Commit message på en rad",
  "id": "commit-message-på-en-rad",
  "level": 4
}, {
  "value": "Commit message med header och body",
  "id": "commit-message-med-header-och-body",
  "level": 4
}, {
  "value": "Bygga komponenter",
  "id": "bygga-komponenter",
  "level": 2
}, {
  "value": "Styleguide",
  "id": "styleguide",
  "level": 3
}, {
  "value": "Importera headless-bibliotek",
  "id": "importera-headless-bibliotek",
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
  "value": "Testa komponenter",
  "id": "testa-komponenter",
  "level": 2
}, {
  "value": "Webbläsartester",
  "id": "webbläsartester",
  "level": 3
}, {
  "value": "Kör webbläsartester lokalt",
  "id": "kör-webbläsartester-lokalt",
  "level": 4
}, {
  "value": "Kör tester i light mode",
  "id": "kör-tester-i-light-mode",
  "level": 5
}, {
  "value": "Kör tester i dark mode",
  "id": "kör-tester-i-dark-mode",
  "level": 5
}, {
  "value": "Kör tester kontinuerligt när du sparar en fil",
  "id": "kör-tester-kontinuerligt-när-du-sparar-en-fil",
  "level": 5
}, {
  "value": "Skriva webbläsartester",
  "id": "skriva-webbläsartester",
  "level": 4
}, {
  "value": "Interaktioner och förväntade tillstånd",
  "id": "interaktioner-och-förväntade-tillstånd",
  "level": 5
}, {
  "value": "Tillgänglighetstester",
  "id": "tillgänglighetstester",
  "level": 5
}, {
  "value": "Bugrättning med TDD",
  "id": "bugrättning-med-tdd",
  "level": 5
}, {
  "value": "Visuella tester",
  "id": "visuella-tester",
  "level": 5
}, {
  "value": "toHaveStyle",
  "id": "tohavestyle",
  "level": 6
}, {
  "value": "Enhetstester eller tester med emulerad webbläsare",
  "id": "enhetstester-eller-tester-med-emulerad-webbläsare",
  "level": 3
}, {
  "value": "Kör enhetstester",
  "id": "kör-enhetstester",
  "level": 4
}, {
  "value": "Kör enhetstester kontinuerligt när du sparar en fil",
  "id": "kör-enhetstester-kontinuerligt-när-du-sparar-en-fil",
  "level": 4
}, {
  "value": "Skriva enhetstester",
  "id": "skriva-enhetstester",
  "level": 4
}, {
  "value": "Skriva komponenttester med emulerad webbläsare",
  "id": "skriva-komponenttester-med-emulerad-webbläsare",
  "level": 4
}, {
  "value": "Arbetsflöde versionshantering",
  "id": "arbetsflöde-versionshantering",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    header: "header",
    hr: "hr",
    li: "li",
    mermaid: "mermaid",
    p: "p",
    pre: "pre",
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
      id: "du-behöver",
      children: "Du behöver"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "En normalt fungerande WSL eller motsvarande setup med Node version >22."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://nx.dev",
          children: "Nx"
        }), " installerat globalt ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm install --global nx@latest"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "starta-storybook",
      children: "Starta Storybook"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx run components:storybook\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "starta-playground-appen-react",
      children: "Starta Playground-appen (React)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kan användas för att testa komponenter i ett sammanhang utanför Storybook."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx serve playground\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vi har även en remix och en next.js-app uppsatta - byt playground mot ", (0,jsx_runtime.jsx)(_components.code, {
        children: "remix|next"
      })]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kör enhetstester för komponentbiblioteket"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx test components\n"
      })
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kör dokumentationen lokalt:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx serve docs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bygg-komponentbibliotek",
      children: "Bygg komponentbibliotek"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponentbibliotek och appar kan byggas med:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "nx build <namn>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["och allt som byggs hamnar i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/dist"
      }), ". Om du vill testa utanför monorepot går det att zippa med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm pack"
      }), " och installera i\nseparat app med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install [sökväg]"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "instruktioner-för-git",
      children: "Instruktioner för Git"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "branch",
      children: "Branch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Branch namnges enligt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[feature|bugfix|hotfix|docs|refactor|chore|test]/[scope]/"
      }), ", till exempel ", (0,jsx_runtime.jsx)(_components.code, {
        children: "feature/button"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "commit",
      children: "Commit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Commits görs enligt ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.conventionalcommits.org/en/v1.0.0/#summary",
        children: "conventional commits"
      }), ". Använd engelska,\nimperativ form, definiera type ", (0,jsx_runtime.jsx)(_components.code, {
        children: "feat|docs|fix|refactor|test|ci"
      }), " och scope ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(button|etc...)"
      }), " och lägg till referenser\ntill andra issues vid behov. Tänk på att även en merge (med squash) skapar en commit så lägg en extra tanke på\nvilken information som kommer med och inte kommer med. Våra commits är hela projektets historik och är indata till\nchangelogs och release notes så lägg gärna en extra minut på att vara tydlig."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "varför-conventional-commits",
      children: "Varför conventional commits?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generera automatisk CHANGELOG"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Automatiskt bestämma ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semantic version"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kommunicera inom team och till andra intressenter vad förändringen gäller."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trigga byggen och andra åtgärder."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bidra till att hålla en konsekvent och strukturerad historik."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "commit-message-på-en-rad",
      children: "Commit message på en rad"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docs(lang): add Swedish language"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "commit-message-med-header-och-body",
      children: "Commit message med header och body"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "fix: prevent red color on button hover\n\nIntroduce new css variable to automatically\nselect style based on input type\n\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ta dig gärna tid att läsa igenom ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.conventionalcommits.org/en/v1.0.0-beta.3/#summary",
        children: "conventional commit summary"
      }), "\noch försök jobba enligt det flödet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Jobbar du ensam i en feature branch och vill städa upp? Använd ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git rebase -i"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Har du en feature branch som egentligen bara rör ett fåtal områden? Då kanske du vill vara mindre strikt\nmed commits och använda ", (0,jsx_runtime.jsx)(_components.code, {
            children: "git squash"
          }), " istället"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bygga-komponenter",
      children: "Bygga komponenter"
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
        children: "Målet är små funktioner, små komponenter, clean code. Det uppmuntras att hela tiden göra inkrementella förbättringar"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Formatera enligt ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://prettier.io/",
          children: "Prettier"
        }), " standard"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Importera och använd tokens i ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[component].module.css"
        }), " enligt"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        metastring: "title=\"Button.module.css\"",
        children: "// highlight-start\n@value tokens: \"../theme/tokens.css\";\n@value --button-background-primary from tokens;\n// highlight-end\n.button {\n    background-color: --button-background-primary;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "importera-headless-bibliotek",
      children: "Importera headless-bibliotek"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Komponenter ska i första hand byggas på ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/getting-started.html",
        children: "React Aria"
      }), " i den mån det går. React Aria har ett omfattande bibliotek av\nfärdiga komponenter och hooks som går att kombinera ihop för att uppnå önskat resultat. Fördelen med att följa React Arias\nkonventioner är att det följer med mycket gratis i form av stöd för skärmläsare, tangentbordsnavigation och olika states."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "skapa-stories",
      children: "Skapa stories"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I utgångspunkt bör alla states finnas representerade som stories i Storybook. Storybook är i första hand ett internt\nverktyg för UX och utvecklare i designsystemet men också en publikt exponerad referens med API och visuell\nrepresentation av komponenterna."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "skriv-enhetstester",
      children: "Skriv enhetstester"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ur perspektivet att tillgänglighet är ett av designsystemets viktigaste fokusområden är det viktigt att vi regressionstestar och testar\nså stor del av möjliga states av alla komponenter på enhetsnivå. MIDAS använder primärt\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://storybook.js.org/docs/writing-tests",
        children: "Storybook som testplattform"
      }), ". De stories du skapat för komponenter kan du nu använda som utgångspunkt för dina tester. Läs mer om ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#testa-komponenter",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "testa-komponenter",
      children: "Testa komponenter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För tillfället har vi ", (0,jsx_runtime.jsx)(_components.em, {
        children: "komponenttester"
      }), ", som testar renderade komponenter i en riktig eller emulerad webbläsare.\nI de riktiga webbläsarna utförs ", (0,jsx_runtime.jsx)(_components.em, {
        children: "tillgänglighetstester"
      }), " och på sikt även ", (0,jsx_runtime.jsx)(_components.em, {
        children: "visuella tester"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vi har också möjlighet att skriva ", (0,jsx_runtime.jsx)(_components.em, {
        children: "enhetstester"
      }), " som testar delar ur JavaScript-moduler."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "webbläsartester",
      children: "Webbläsartester"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Som redan nämnts så använder Midas Storybook som primär testplattform, med Storybooks playfunktion får vi tillgång till ett flertal riktiga webbläsare som kan köra våra tester lokalt och i våra CI/CD pipelines.\nSkriv ditt test här i första hand, det hjälper oss att säkerställa att vi har stories för en komponents samtliga tillstånd."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kör-webbläsartester-lokalt",
      children: "Kör webbläsartester lokalt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tester som använder Storybooks play-funktion kan köras via terminalen med hjälp av ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://storybook.js.org/docs/writing-tests/test-runner",
        children: "Storybook test runner"
      }), ".\nUnder huven används ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://jestjs.io/",
        children: "Jest"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://playwright.dev/",
        children: "Playwright"
      }), " och ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://testing-library.com/",
        children: "Testing library"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Se till att ha din lokala Storybook igång innan du kör några tester:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx run components:storybook\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "kör-tester-i-light-mode",
      children: "Kör tester i light mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx run components:test-storybook\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "kör-tester-i-dark-mode",
      children: "Kör tester i dark mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi behöver åtminstone testa att våra komponenter uppfyller tillgänglighetskrav även i mörkt läge, vi testar detta med följande kommando:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx run components:test-storybook:dark-mode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "kör-tester-kontinuerligt-när-du-sparar-en-fil",
      children: "Kör tester kontinuerligt när du sparar en fil"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx run components:test-storybook --watch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "skriva-webbläsartester",
      children: "Skriva webbläsartester"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mycket kan testas på våra komponenter, och mycket kanske redan testas av de bibliotek vi utgår ifrån.\nFundera om ditt test är värt att skriva, kom ihåg att det kommer behöva underhållas i framtiden."
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "interaktioner-och-förväntade-tillstånd",
      children: "Interaktioner och förväntade tillstånd"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Erbjuder din komponent interaktion kan du skriva tester där en simulerad användare använder musen eller tangentbordet för att framkalla ett visst tillstånd.\nAnvänd enbart ", (0,jsx_runtime.jsx)(_components.code, {
        children: "userEvent"
      }), " från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@storybook/test"
      }), " när du simulerar din användare."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "tillgänglighetstester",
      children: "Tillgänglighetstester"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Med ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://storybook.js.org/docs/writing-tests/accessibility-testing",
        children: "@storybook/addon-a11y"
      }), " utförs tillgänglighetstester på varje komponent, dessa testas även av Storybook test runner i samtliga play tester, se ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/components/.storybook/test-runner.ts"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Automatiserade tillgänglighetstester fångar upp en stor del av brister jämtemot ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
        children: "WCAG"
      }), "-standarden men kan självklart kompletteras."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Med hjälp av tangentbords-interaktion i dina interaktionstester testar du att din komponent kan användas med enbart tangentbordet.\nDu kan också välja att använda queries för att säkerställa att du använder DOM-element som säger något åt en skärmläsare, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getByRole"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getByLabelText"
        }), " osv."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "bugrättning-med-tdd",
      children: "Bugrättning med TDD"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Om du rättar en bug erbjuds du ett unikt tillfälle att skriva ett test som återskapar din bug, förhoppningsvis kommer vi då inte att återinföra bugen."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Börja med att sätta upp berörd komponent i en separat story, skriv sedan ett test som återskapar din bug, ditt mål är att få ett test som \"failar\"."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "// Ett bra tillfälle att notera ärendenumret som beskriver felet\nexport const DS123: Story = {\n  // Dölj gärna storyn från Storybooks UI om den inte ger något direkt värde åt andra intressenter\n  tags: ['!dev', '!autodocs'],\n  args: {\n    label: 'Select a value',\n    options: [{ id: 'banana', name: 'Banana' }],\n  },\n  play: async ({ args, step, canvas }) => {\n    // Använd gärna den inbyggda step-funktionen för att beskriva vad ditt test gör\n    await step('It should be possible to select a value with the keyboard', async () => {\n      // Interagera med userEvent\n      await userEvent.tab()\n      await userEvent.keyboard('[Space]')\n      await userEvent.keyboard('[Space]')\n      // Skriv minst en förväntning med expect\n      expect(canvas.getByLabelText(args.label as string)).toHaveDisplayValue('banana')\n    })\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nu kan du åtgärda din bug, när du är klar bör ditt test passera."
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "visuella-tester",
      children: "Visuella tester"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För närvarande utför vi inga visuella tester där screenshots används för att jämföra komponenters utseende."
    }), "\n", (0,jsx_runtime.jsx)(_components.h6, {
      id: "tohavestyle",
      children: "toHaveStyle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "expect"
      }), " från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@storybook/test"
      }), " erbjuder dig att skriva förväntningar på hur en komponent ser ut med hjälp av ", (0,jsx_runtime.jsx)(_components.code, {
        children: "toHaveStyle"
      }), "-metoden.\nDå ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/testing-library/jest-dom/issues/350",
        children: "metoden inte är helt pålitlig"
      }), " bör den användas som en sista utväg tillsammans med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lightDark"
      }), "-utilityn från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/components/src/utils/test.ts"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enhetstester-eller-tester-med-emulerad-webbläsare",
      children: "Enhetstester eller tester med emulerad webbläsare"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Behöver du skriva enhetstester av rena JavaScript-moduler eller använda en emulerad webbläsare (jsdom) för att testa dina komponenter kan du använda filnamn enligt mönstret ", (0,jsx_runtime.jsx)(_components.code, {
        children: "**/?(*.)+(spec|test).[jt]s?(x)"
      }), ".\nExempelvis: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/components/src/badge/badge.spec.ts"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kör-enhetstester",
      children: "Kör enhetstester"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx test components\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kör-enhetstester-kontinuerligt-när-du-sparar-en-fil",
      children: "Kör enhetstester kontinuerligt när du sparar en fil"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx test components --watch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "skriva-enhetstester",
      children: "Skriva enhetstester"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["I våra ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".spec|.test"
      }), "-filer används Jest för att köra tester och metoder är definerade globalt, det krävs därför inga importer, se exempel nedan."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Om du har en separerad kod kan du importera delar av en JavaScript-modul och kontrollera att den fungerar som du vill med hjälp av ett test.\nGör något i stil med:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        metastring: "title=\"sum.spec.ts\"",
        children: "import sum from './sum'\n\ntest('adds 1 + 2 to equal 3', () => {\n  expect(sum(1, 2)).toBe(3)\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "skriva-komponenttester-med-emulerad-webbläsare",
      children: "Skriva komponenttester med emulerad webbläsare"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om du av någon anledning behöver skriva ett komponenttest med en emulerad webbläsare behöver du använda ", (0,jsx_runtime.jsx)(_components.code, {
        children: "screen"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expect"
      }), " från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@testing-library/react"
      }), ".\nHämta även en uppsatt simulerad användare från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/components/tests/utils/user"
      }), " om du behöver interagera med din komponent."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sätt gärna upp en komponent i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "beforeEach"
      }), "-hooken så att det är lätt att skriva flera tester på samma tillstånd."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"Button.spec.tsx\"",
        children: "describe('given a default Button', () => {\n  const label = 'my button'\n\n  beforeEach(() => {\n    render(<Button>{label}</Button>)\n  })\n\n  it('should be visible', async () => {\n    expect(screen.getByLabelText(label)).toBeVisible()\n  })\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arbetsflöde-versionshantering",
      children: "Arbetsflöde versionshantering"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "    gitGraph\n       commit tag: \"8.7.4\"\n       commit\n       branch dev\n       commit\n       commit\n       commit\n       branch feature\n       commit\n       commit\n       checkout dev\n       merge feature\n       checkout main\n       merge dev tag: \"8.8.0\" type: HIGHLIGHT\n       checkout dev\n       merge main\n       branch bugfix\n       commit\n       checkout dev\n       merge bugfix\n       checkout main\n       merge dev id: \"trigger release\" type: HIGHLIGHT tag: \"8.8.1\"\n       commit\n"
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