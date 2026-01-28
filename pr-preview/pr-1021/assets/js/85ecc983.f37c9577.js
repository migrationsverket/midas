"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[9949],{

/***/ 98832
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_get_started_contribute_tests_mdx_85e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-get-started-contribute-tests-mdx-85e.json
const site_docs_get_started_contribute_tests_mdx_85e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/contribute/tests","title":"🧪 Tester","description":"Översikt","source":"@site/docs/get-started/contribute/tests.mdx","sourceDirName":"get-started/contribute","slug":"/get-started/contribute/tests","permalink":"/pr-preview/pr-1021/get-started/contribute/tests","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_label":"Tester","sidebar_position":3},"sidebar":"sideBar","previous":{"title":"Bidra med kod","permalink":"/pr-preview/pr-1021/get-started/contribute/contributing"},"next":{"title":"Arkitektur","permalink":"/pr-preview/pr-1021/get-started/contribute/architecture"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/get-started/contribute/tests.mdx


const frontMatter = {
	sidebar_label: 'Tester',
	sidebar_position: 3
};
const contentTitle = '🧪 Tester';

const assets = {

};



const toc = [{
  "value": "Översikt",
  "id": "översikt",
  "level": 2
}, {
  "value": "Skriva tester",
  "id": "skriva-tester",
  "level": 2
}, {
  "value": "🧩 Komponenttester",
  "id": "-komponenttester",
  "level": 2
}, {
  "value": "Kör komponenttester",
  "id": "kör-komponenttester",
  "level": 3
}, {
  "value": "🧪 Enhetstester",
  "id": "-enhetstester",
  "level": 2
}, {
  "value": "Lägg till konfiguration för enhetstester",
  "id": "lägg-till-konfiguration-för-enhetstester",
  "level": 3
}, {
  "value": "♿ Tillgänglighetstester",
  "id": "-tillgänglighetstester",
  "level": 2
}, {
  "value": "👀 Snapshottester",
  "id": "-snapshottester",
  "level": 2
}, {
  "value": "Trigga snapshottester",
  "id": "trigga-snapshottester",
  "level": 3
}, {
  "value": "Hoppa över stories",
  "id": "hoppa-över-stories",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-tester",
        children: "🧪 Tester"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "översikt",
      children: "Översikt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tester i Midas utgörs främst av ", (0,jsx_runtime.jsx)(_components.em, {
        children: "komponenttester"
      }), " med hjälp av ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://vitest.dev/guide/browser/component-testing",
        children: "Vitest Component Testing"
      }), ".\nVi gör också automatiska ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://storybook.js.org/docs/writing-tests/accessibility-testing",
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "tillgänglighetstester"
        }), " i Storybook"]
      }), ". Våra ", (0,jsx_runtime.jsx)(_components.em, {
        children: "snapshottester"
      }), " körs i Chromatic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "skriva-tester",
      children: "Skriva tester"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi strävar efter en hög testtäckning, vi tror att en vältestad kodbas ökar förvaltningsbarheten och ger utvecklaren trygghet att förbättra befintlig kod."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bidrag till kodbasen ska kompletteras med åtminstone ett test."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-komponenttester",
      children: "🧩 Komponenttester"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Midas använder ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://storybook.js.org",
        children: "Storybook"
      }), " för att presentera komponenter, med hjälp av ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#composestories",
        children: "portable stories"
      }), " kan vi använda en renderad story som utgångspunkt för våra tester.\nTesterna körs sedan via en riktig browser. Läs gärna mer om komponenttestning hos ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://vitest.dev/guide/browser/component-testing",
        children: "Vitest"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kör-komponenttester",
      children: "Kör komponenttester"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx test components                         # Lokal installation\ndocker compose exec docs nx test components # Docker\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-enhetstester",
      children: "🧪 Enhetstester"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att testa JavaScriptmoduler i nodemiljö används ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://vitest.dev/guide/",
        children: "vitest"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lägg-till-konfiguration-för-enhetstester",
      children: "Lägg till konfiguration för enhetstester"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Alla paket och appar i Midas har inte enhetstester konfigurerade. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://nx.dev/docs/technologies/test-tools/vitest/introduction",
        children: "@nx/vitest"
      }), " kommer automatiskt att skapa kommandot ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nx test <package>"
      }), " om paketet har en konfigurationsfil för vitest (", (0,jsx_runtime.jsx)(_components.code, {
        children: "vitest.config.*"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        metastring: "title=\"vitest.config.ts\"",
        children: "import { defineProject } from 'vitest/config'\n\nexport default defineProject({\n  test: {\n    name: 'unit',\n  },\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tillgänglighetstester",
      children: "♿ Tillgänglighetstester"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Med ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://storybook.js.org/docs/writing-tests/accessibility-testing",
        children: "@storybook/addon-a11y"
      }), " utförs tillgänglighetstester med ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.deque.com/axe/",
        children: "axe"
      }), " på varje komponent, dessa testas i våra workflows med kommandot:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx a11y storybook                         # Lokal installation\ndocker compose exec docs nx a11y storybook # Docker\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Automatiserade tillgänglighetstester fångar upp en stor del av brister gentemot ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
        children: "WCAG"
      }), "-standarden men kan självklart kompletteras."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För att kontrollera tillgängligheten i dark-mode eller forced-colors:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "nx run storybook:a11y-dark-mode      # Dark mode\nnx run storybook:a11y-forced-colors  # Forced colors\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För Docker, lägg till ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docker compose exec docs"
      }), " före kommandot."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-snapshottester",
      children: "👀 Snapshottester"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vi använder ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://chromatic.com",
        children: "Chromatic"
      }), " för att köra snapshottester som jämför visuella ändringar i komponenter.\nChromatic utgår från vår Storybook och tar snapshots på samtliga stories."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trigga-snapshottester",
      children: "Trigga snapshottester"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Snapshottester körs automatiskt vid push till följande brancher:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["brancher som startar med ", (0,jsx_runtime.jsx)(_components.code, {
          children: "feature"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["brancher som startar med ", (0,jsx_runtime.jsx)(_components.code, {
          children: "feat"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["brancher som startar med ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fix"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["brancher som startar med ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bugfix"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hoppa-över-stories",
      children: "Hoppa över stories"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För att reducera antalet snapshots bör vi bara ta en snap per tillstånd i en komponent, vänligen använd följande kod om du vill att chromatic ska hoppa över din story:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "export const PrimaryWithAnotherLabel: Story = {\n  args: {\n    label: 'Just another label',\n  },\n  parameters: {\n    chromatic: {\n      disableSnapshot: true,\n    },\n  },\n  // ...\n}\n"
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



/***/ }

}]);