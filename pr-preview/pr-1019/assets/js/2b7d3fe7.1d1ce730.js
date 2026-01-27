"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2917],{

/***/ 45328
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_get_started_contribute_contributing_mdx_2b7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-get-started-contribute-contributing-mdx-2b7.json
const site_docs_get_started_contribute_contributing_mdx_2b7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/contribute/contributing","title":"🔨 Bidra med kod","description":"Den här guiden beskriver hur du bygger och bidrar med komponenter till Midas. Vi uppskattar alla bidrag - stora som små!","source":"@site/docs/get-started/contribute/contributing.mdx","sourceDirName":"get-started/contribute","slug":"/get-started/contribute/contributing","permalink":"/pr-preview/pr-1019/get-started/contribute/contributing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_label":"Bidra med kod","sidebar_position":2},"sidebar":"sideBar","previous":{"title":"Utvecklingsmiljö","permalink":"/pr-preview/pr-1019/get-started/contribute/coding"},"next":{"title":"Tester","permalink":"/pr-preview/pr-1019/get-started/contribute/tests"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/get-started/contribute/contributing.mdx


const frontMatter = {
	sidebar_label: 'Bidra med kod',
	sidebar_position: 2
};
const contentTitle = '🔨 Bidra med kod';

const assets = {

};



const toc = [{
  "value": "📦 Bygga komponenter",
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
  "value": "Skriv tester",
  "id": "skriv-tester",
  "level": 3
}, {
  "value": "Dokumentation",
  "id": "dokumentation",
  "level": 3
}, {
  "value": "🌿 Versionshantering",
  "id": "-versionshantering",
  "level": 2
}, {
  "value": "✅ Checklista för PR",
  "id": "-checklista-för-pr",
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
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-bidra-med-kod",
        children: "🔨 Bidra med kod"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Den här guiden beskriver hur du bygger och bidrar med komponenter till Midas. Vi uppskattar alla bidrag - stora som små!"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Innan du börjar koda, läs gärna om vår ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/get-started/contribute/architecture",
          children: "designfilosofi och arkitektur"
        }), " för att förstå hur vi bygger komponenter."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-bygga-komponenter",
      children: "📦 Bygga komponenter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "styleguide",
      children: "Styleguide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd befintliga komponenter som referens för struktur och namngivning. Se även ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/adobe/react-spectrum/tree/main/packages/react-aria-components",
        children: "React Aria"
      }), " för inspiration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "skapa-stories",
      children: "Skapa stories"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alla states bör finnas representerade som stories i Storybook. Storybook är i första hand ett internt verktyg för UX och utvecklare i designsystemet men också en publikt exponerad referens med API och visuell representation av komponenterna."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "skriv-tester",
      children: "Skriv tester"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["De stories du skapat kan användas som utgångspunkt för komponenttester. Läs mer om ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/get-started/contribute/tests",
        children: "hur vi testar komponenter"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dokumentation",
      children: "Dokumentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dokumentera komponentens API (props, events etc.) med TypeScript-typer så genereras API-dokumentationen automatiskt. Lägg även till relevanta exempel och användningsfall med kodexempel."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-versionshantering",
      children: "🌿 Versionshantering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vi använder en enkel branchstrategi med en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), "-branch som alltid ska vara i ett deploybart skick. Utveckling sker i feature- eller bugfix-brancher som sedan mergas in i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ". Följ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.conventionalcommits.org/en/v1.0.0/#summary",
        children: "conventional commits"
      }), " - det avgör vilken versionsändring som sker."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Se ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/get-started/contribute/conventions",
        children: "arbetsflöde"
      }), " för detaljerad guide om commits och release-processen."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-checklista-för-pr",
      children: "✅ Checklista för PR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Innan du skapar en pull request, kontrollera att:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Komponenten följer befintliga patterns och styleguide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Alla relevanta states finns som stories i Storybook"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Komponenttester är skrivna och passerar (", (0,jsx_runtime.jsx)(_components.code, {
          children: "nx test components"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Dokumentation är uppdaterad"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Commits följer conventional commits-format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Commit-historiken är städad (använd ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git rebase -i"
        }), " vid behov)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Release sker automatiskt via CI/CD när din PR mergas till ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), ". Du behöver inte köra några manuella release-kommandon! 🎉"]
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