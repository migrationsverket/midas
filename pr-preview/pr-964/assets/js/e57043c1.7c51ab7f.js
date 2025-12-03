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
const site_docs_get_started_contribute_coding_mdx_e57_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/contribute/coding","title":"Bidra till komponentbiblioteket","description":"Att komma igång och bidra med kod till Midas är enkelt!","source":"@site/docs/get-started/contribute/coding.mdx","sourceDirName":"get-started/contribute","slug":"/get-started/contribute/coding","permalink":"/pr-preview/pr-964/get-started/contribute/coding","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Utveckling","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
  "value": "Du behöver",
  "id": "du-behöver",
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
  "value": "Bygg komponentbibliotek",
  "id": "bygg-komponentbibliotek",
  "level": 3
}, {
  "value": "Arbetsflöde versionshantering",
  "id": "arbetsflöde-versionshantering",
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
  "value": "Release",
  "id": "release",
  "level": 2
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
      id: "du-behöver",
      children: "Du behöver"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "En normalt fungerande WSL2 eller motsvarande setup med Node version >22."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Storybook är ett verktyg för att bygga och visa upp UI-komponenter i en isolerad miljö. Det gör det enklare att utveckla, testa och dokumentera komponenter."
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kör enhetstester för komponentbiblioteket, mer info finns på ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../tests",
          children: "sidan om tester"
        })]
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
      id: "arbetsflöde-versionshantering",
      children: "Arbetsflöde versionshantering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vi använder en enkel branchstrategi med en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), "-branch som alltid ska vara i ett deploybart skick. Utveckling sker i feature- eller bugfix-branchar som sedan mergas in i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ". Vi använder inte ", (0,jsx_runtime.jsx)(_components.code, {
        children: "develop"
      }), " eller andra liknande branchar för att hålla det enkelt och för att passa ett arbetssätt med kontinuerlig integration och leverans (CI/CD)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ett exempel på hur det kan se ut i praktiken:"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "---\nconfig:\n  logLevel: 'debug'\n  theme: 'neutral'\n  gitGraph:\n    showBranches: true\n---\ngitGraph\n  commit tag: \"theme@4.1.4\"\n  commit id: \"8db8ba0b0a\"\n  branch feature/new-button\n  commit id: \"81eb8978a9\"\n  commit id: \"6aef7a733f\"\n  checkout main\n  branch bugfix/button-color\n  commit id: \"6560249c6d\"\n  checkout feature/new-button\n  commit id: \"446b0bb972\"\n  checkout main\n  merge bugfix/button-color\n  checkout feature/new-button\n  commit id: \"b682194518\"\n  checkout main\n  merge feature/new-button\n  commit tag: \"components@14.1.0\"\n  commit id: \"a27c4f41d9\"\n  commit id: \"5dec5b5dd3\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "branch",
      children: "Branch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Branch namnges enligt ", (0,jsx_runtime.jsx)(_components.code, {
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
        children: "(theme|button|etc...)"
      }), " som rubrik för changelog."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Se ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".commitlintrc.js"
      }), " för tillåtna types och scopes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Våra commits är hela projektets historik, avgör vilken version nästa release blir, samt är indata till\nchangelogs och release notes så lägg gärna en extra minut på att vara tydlig. Om du är osäker på vilken\ncommit du ska göra, titta på ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13",
          children: "conventional commits cheatsheet"
        }), "."]
      })
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
        children: "docs: update button variant docs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "commit-message-med-header-och-body",
      children: "Commit message med header och body"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "fix(theme): prevent red color on button hover\n\nIntroduce new css variable to automatically\nselect style based on input type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: ""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ta dig gärna tid att läsa igenom ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.conventionalcommits.org/en/v1.0.0-beta.3/#summary",
        children: "conventional commit summary"
      }), "\noch försök jobba enligt det flödet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Innan du skapar en PR, gå igenom så att du har commits som representerar vad du har gjort.\nJobbar du ensam i en feature branch och har skapat många commits? Använd ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git rebase -i"
        }), ",\ndå kan du välja vilka commits som ska vara med och vilka som kan kombineras. Du kan också passa på att\nändra commit messages."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instruktioner för hur du använder ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git rebase"
      }), " finns ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase",
        children: "här"
      }), "."]
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
        children: "Målet är små funktioner, små komponenter, clean code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Det uppmuntras att hela tiden göra inkrementella förbättringar i kringliggande kod"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Komponenter ska vara testbara och dokumenterade"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Komponenter ska stödja designsystemet på ett generiskt sätt och i möjlig mån vara stateless"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Formatera enligt ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://prettier.io/",
          children: "Prettier"
        }), " standard"]
      }), "\n"]
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
      id: "release",
      children: "Release"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Release görs med hjälp av Nx Release som räknar fram rätt version via commit messages."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använd följande kommando:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx release --skip-publish\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "eller välj vilka projekt du vill:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx release -p components theme --skip-publish\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Själva flödet är en uppdatering av changlog och package.json med ny version och en ny tagg enligt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nx-project@version"
      }), ".\nNx pushar sedan alla ändringar och taggar och berörda workflows triggas."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Behöver du skriva release notes får du commita desssa i efterhand och ompublicera dokumentationswebben, kör ", (0,jsx_runtime.jsx)(_components.code, {
        children: "publish-docs"
      }), "-workflowet från github."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Endast Midas core-team har de nödvändiga rättigheterna för att göra nya releaser."
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