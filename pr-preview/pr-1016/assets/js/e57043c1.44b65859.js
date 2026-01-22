"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6043],{

/***/ 40492
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
const site_docs_get_started_contribute_coding_mdx_e57_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/contribute/coding","title":"🛠️ Sätt upp utvecklingsmiljön","description":"Här beskriver vi hur du sätter upp din utvecklingsmiljö för att kunna bidra till Midas.","source":"@site/docs/get-started/contribute/coding.mdx","sourceDirName":"get-started/contribute","slug":"/get-started/contribute/coding","permalink":"/pr-preview/pr-1016/get-started/contribute/coding","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Utvecklingsmiljö","sidebar_position":1},"sidebar":"sideBar","previous":{"title":"Översikt","permalink":"/pr-preview/pr-1016/get-started/contribute/"},"next":{"title":"Bidra med kod","permalink":"/pr-preview/pr-1016/get-started/contribute/contributing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/get-started/contribute/coding.mdx


const frontMatter = {
	sidebar_label: 'Utvecklingsmiljö',
	sidebar_position: 1
};
const contentTitle = '🛠️ Sätt upp utvecklingsmiljön';

const assets = {

};



const toc = [{
  "value": "🐳 Docker (Rekommenderat)",
  "id": "-docker-rekommenderat",
  "level": 2
}, {
  "value": "Starta",
  "id": "starta",
  "level": 3
}, {
  "value": "Kör kommandon",
  "id": "kör-kommandon",
  "level": 3
}, {
  "value": "Stoppa",
  "id": "stoppa",
  "level": 3
}, {
  "value": "Felsökning",
  "id": "felsökning",
  "level": 3
}, {
  "value": "💻 Lokal installation (Alternativ)",
  "id": "-lokal-installation-alternativ",
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
  "value": "🧪 Testa lokalt end-to-end",
  "id": "-testa-lokalt-end-to-end",
  "level": 2
}, {
  "value": "Med Docker",
  "id": "med-docker",
  "level": 3
}, {
  "value": "Utan Docker",
  "id": "utan-docker",
  "level": 3
}, {
  "value": "📚 Fördjupning",
  "id": "-fördjupning",
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
        id: "️-sätt-upp-utvecklingsmiljön",
        children: "🛠️ Sätt upp utvecklingsmiljön"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Här beskriver vi hur du sätter upp din utvecklingsmiljö för att kunna bidra till Midas."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-docker-rekommenderat",
      children: "🐳 Docker (Rekommenderat)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Det snabbaste sättet att komma igång är med Docker. Då behöver du inte installera Node.js, npm eller några beroenden lokalt - allt körs i en isolerad miljö med exakt rätt versioner."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Krav:"
      }), " Endast Docker Desktop (eller Docker Engine + Docker Compose)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "starta",
      children: "Starta"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker compose up -d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detta startar i bakgrunden:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storybook"
        }), " på ", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://localhost:4400",
          children: "http://localhost:4400"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dokumentation"
        }), " på ", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://localhost:3000",
          children: "http://localhost:3000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Playground"
        }), " på ", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://localhost:4200",
          children: "http://localhost:4200"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Första uppstarten tar några minuter för att installera beroenden. Följ processen med ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docker compose logs -f"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Starta en specifik app:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker compose up -d storybook  # Endast Storybook\ndocker compose up -d docs       # Endast dokumentation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kör-kommandon",
      children: "Kör kommandon"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker compose exec docs nx test components   # Kör tester\ndocker compose exec docs nx build components  # Bygg komponenter\ndocker compose exec docs npm install <paket>  # Installera beroenden\ndocker compose exec docs sh                   # Öppna shell i containern\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stoppa",
      children: "Stoppa"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker compose down\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "felsökning",
      children: "Felsökning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Port redan upptagen:"
      }), " Stoppa processen som använder porten, eller ändra portmappning i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker-compose.yml"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ändringar syns inte:"
      }), " Kontrollera loggarna med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker compose logs -f <service>"
      }), " eller starta om med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker compose restart <service>"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bygga om efter beroendeändringar:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker compose down\ndocker compose build --no-cache\ndocker compose up -d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ren omstart:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker compose down -v\ndocker compose build --no-cache\ndocker compose up -d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-lokal-installation-alternativ",
      children: "💻 Lokal installation (Alternativ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Om du föredrar att köra allt lokalt behöver du:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Node version ", (0,jsx_runtime.jsx)(_components.code, {
        children: "^22.12.0"
      }), " krävs. Installera ", (0,jsx_runtime.jsx)(_components.a, {
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
      }), ". Det innebär att vi har flera olika projekt i samma repo, till exempel komponentbiblioteket, dokumentationswebben och andra verktyg. Du kan köra ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nx graph"
      }), " för att se en visuell representation av hur projekten är relaterade till varandra."]
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
        href: "/get-started/contribute/tests",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-testa-lokalt-end-to-end",
      children: "🧪 Testa lokalt end-to-end"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För att testa komponentbiblioteket i en annan app kan du publicera det till ett lokalt Verdaccio-registry."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "med-docker",
      children: "Med Docker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Starta Verdaccio-tjänsten\ndocker compose up -d verdaccio\n\n# 2. Publicera paketen (från docs-containern)\ndocker compose exec docs npx nx run @midas-ds/source:release:local:docker:dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Installera sedan i ditt testprojekt:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Från host-maskinen\nnpm install @midas-ds/components@latest --registry=http://localhost:4873/\n\n# Från en Docker-container\nnpm install @midas-ds/components@latest --registry=http://verdaccio:4873/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "utan-docker",
      children: "Utan Docker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx run @midas-ds/source:release:local:dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detta startar Verdaccio och publicerar alla paket. Installera sedan i ditt testprojekt:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @midas-ds/components@latest --registry=http://localhost:4873/\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tryck ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Ctrl+C"
      }), " när du är klar."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "warning",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Skriptet ändrar ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), "-filer med temporära versioner (t.ex. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "15.2.7-local.0"
        }), "). ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Committa inte dessa ändringar!"
        }), " Återställ efter testning:"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "git checkout -- packages/*/package.json\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-fördjupning",
      children: "📚 Fördjupning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/get-started/contribute/architecture",
          children: "Arkitektur"
        }), " - Vår designfilosofi och val av beroenden"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/get-started/contribute/conventions",
          children: "Arbetsflöde"
        }), " - Commit-format och versionshantering"]
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