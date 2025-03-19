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
const site_docs_get_started_contribute_mdx_88c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/contribute","title":"Bidra till komponentbiblioteket","description":"Att komma igång och bidra med kod till Midas är enkelt!","source":"@site/docs/get-started/contribute.mdx","sourceDirName":"get-started","slug":"/get-started/contribute","permalink":"/pr-preview/pr-366/get-started/contribute","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Bidra","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
  "value": "Starta Dokumentationswebben",
  "id": "starta-dokumentationswebben",
  "level": 3
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
  "value": "Skriv enhetstester",
  "id": "skriv-enhetstester",
  "level": 3
}, {
  "value": "Skapa stories",
  "id": "skapa-stories",
  "level": 3
}, {
  "value": "Dokumentation",
  "id": "dokumentation",
  "level": 3
}, {
  "value": "Release &amp; publish",
  "id": "release--publish",
  "level": 2
}, {
  "value": "Arbetsflöde",
  "id": "arbetsflöde",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
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
      id: "starta-dokumentationswebben",
      children: "Starta Dokumentationswebben"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx serve docs\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bygga-komponenter",
      children: "Bygga komponenter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "styleguide",
      children: "Styleguide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generellt, använd övriga komponenter som referens när nya läggs till."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Som standard, exportera en komponent per fil"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Använd barrel-files ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index.ts"
        }), " för att exportera hela mappar"]
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
      id: "skriv-enhetstester",
      children: "Skriv enhetstester"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ur perspektivet att tillgänglighet är ett av designsystemets viktigaste fokusområden är det viktigt att vi regressionstestar.\nAnvänd ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/dequelabs/axe-core",
        children: "axe-core"
      }), " för att fånga upp problem innan de blir buggar. Det finns inget\nspecificerat mål någon viss code coverage men ta inspiration från headless-biblioteken. Grundläggande funktion av komponenter\nbör också täckas av enhetstester."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "skapa-stories",
      children: "Skapa stories"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I utgångspunkt bör alla states finnas representerade som stories i Storybook. Storybook är i första hand ett internt\nverktyg för UX och utvecklare i designsystemet men också en publikt exponerad referens för komponenterna."
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
      id: "release--publish",
      children: "Release & publish"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Designsystemet använder Nx för versionshantering och release enligt ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://nx.dev/recipes/nx-release/get-started-with-nx-release",
        children: "nx release"
      }), ".\nNär du kör ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nx release --skip-publish"
      }), " räknas komponentbiblioteket upp till rätt version\noch Nx gör en commit med uppdaterad changelog samt sätter en git tag med rätt versionsnummer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx release --skip-publish --dry-run // remove dry-run when you know it works\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kontrollera att allt stämmer, gör release utan ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--dry-run"
      }), ", skapa en release-branch och pusha till remote."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git checkout -b release/[insert version number here]\ngit push -u origin release/[insert version number here] --follow-tags\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["När en ny tag ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v{x.x.x}"
      }), " finns på remote triggas ett workflow med publicering till NPM.\nFör att slutföra release, gör en PR till main och gör en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "merge"
      }), " när den är godkänd. Observera\natt du ", (0,jsx_runtime.jsx)(_components.em, {
        children: "inte"
      }), " ska göra en rebase eftersom git tags då inte är kopplade till rätt commit och\nNx kan inte längre räkna ut vilken version som är aktuell."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arbetsflöde",
      children: "Arbetsflöde"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR;\n    A1-->B1\n    B1-->B2\n    B2-->|GH Action|C1\n    B2-->E1\n    E1-->|GH Action|C2\n    E1-->|Triggered manually|D1\n    E1-->|Triggered on release|F1\n    subgraph \"Jira\"\n        A1@{ shape: procs, label: \"Tickets\"}\n    end\n    subgraph \"GitHub\"\n        subgraph \"Repo\"\n            B1@{ shape: procs, label: \"Brancher [type/scope/desc]\"}\n            B2@{ shape: procs, label: \"Pull requests [pr-xxx]\"}\n        end\n        subgraph \"Pages\"\n            C1@{ shape: div-rect, label: \"/pr-preview/pr-xxx\" }\n            C2@{shape: div-rect, label: \"designsystem.migrationsverket.se\"}\n        end\n        subgraph \"Releases\"\n            D1@{ shape: procs, label: \"Release vX.X.X\"}\n        end\n        E1[\"Godkänd PR\"]\n    end\n    subgraph \"npm\"\n        F1[\"@midas-ds/components\"]\n    end"
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