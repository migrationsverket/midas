"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8357],{

/***/ 43294
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_get_started_contribute_conventions_mdx_5c5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-get-started-contribute-conventions-mdx-5c5.json
const site_docs_get_started_contribute_conventions_mdx_5c5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"get-started/contribute/conventions","title":"🌿 Arbetsflöde","description":"Denna sida beskriver våra konventioner för versionshantering, commits och release-processen.","source":"@site/docs/get-started/contribute/conventions.mdx","sourceDirName":"get-started/contribute","slug":"/get-started/contribute/conventions","permalink":"/pr-preview/pr-1050/get-started/contribute/conventions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_label":"Arbetsflöde","sidebar_position":5},"sidebar":"sideBar","previous":{"title":"Arkitektur","permalink":"/pr-preview/pr-1050/get-started/contribute/architecture"},"next":{"title":"Design Tokens","permalink":"/pr-preview/pr-1050/get-started/contribute/tokens/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/get-started/contribute/conventions.mdx


const frontMatter = {
	sidebar_label: 'Arbetsflöde',
	sidebar_position: 5
};
const contentTitle = '🌿 Arbetsflöde';

const assets = {

};



const toc = [{
  "value": "Versionshantering",
  "id": "versionshantering",
  "level": 2
}, {
  "value": "📝 Conventional commits",
  "id": "-conventional-commits",
  "level": 2
}, {
  "value": "Exempel",
  "id": "exempel",
  "level": 3
}, {
  "value": "Types och versionsändringar",
  "id": "types-och-versionsändringar",
  "level": 3
}, {
  "value": "Breaking changes och major-versioner",
  "id": "breaking-changes-och-major-versioner",
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
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-arbetsflöde",
        children: "🌿 Arbetsflöde"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Denna sida beskriver våra konventioner för versionshantering, commits och release-processen."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "versionshantering",
      children: "Versionshantering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vi använder en enkel branchstrategi med en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), "-branch som alltid ska vara i ett deploybart skick. Utveckling sker i feature- eller bugfix-brancher som sedan mergas in i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ". Vi använder inte ", (0,jsx_runtime.jsx)(_components.code, {
        children: "develop"
      }), " eller andra liknande brancher för att hålla det enkelt och för att passa ett arbetssätt med kontinuerlig integration och leverans (CI/CD)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-conventional-commits",
      children: "📝 Conventional commits"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Commits görs enligt ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.conventionalcommits.org/en/v1.0.0/#summary",
        children: "conventional commits"
      }), ". Använd engelska, ", (0,jsx_runtime.jsx)(_components.strong, {
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
      }), ", etc.) för att versionshanteringen ska fungera korrekt. Du kan lägga till flera scopes med kommatecken, t.ex. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "feat(components,button): ..."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exempel",
      children: "Exempel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "feat(components, button): add new button variant   # Minor bump för components\nfix(theme): fix button hover color                 # Patch för theme\ndocs: update contribution guide                    # Ingen bump\n\n# Med body för mer kontext\nfix(theme): prevent red color on button hover\n\nIntroduce new css variable to automatically\nselect style based on input type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-och-versionsändringar",
      children: "Types och versionsändringar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Beskrivning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Version"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "feat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ny funktionalitet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buggfix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dokumentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ingen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "refactor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kodrefaktorering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ingen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tester"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ingen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "chore"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Underhåll"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ingen"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "breaking-changes-och-major-versioner",
      children: "Breaking changes och major-versioner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att trigga en major-version, lägg till ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BREAKING CHANGE:"
      }), " i commit-meddelandets body:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "feat(components, button): remove deprecated size prop\n\nBREAKING CHANGE: The size prop has been removed. Use variant instead.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Ta aldrig bort funktionalitet direkt - deprecera först! Markera med ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@deprecated"
        }), " i koden och dokumentera i release notes. Ge användare minst en major-version att migrera innan borttagning."]
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
        }), ": Se till att dina commits följer conventional commits-standarden, eftersom det avgör vilken versionsändring som sker (major, minor, patch)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Skapa en PR"
        }), ": Alla kan skapa pull requests, men Midas core-team ansvarar för granskning och merge."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Invänta merge"
        }), ": När din PR godkänns och mergas till ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " sker resten automatiskt."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Du behöver inte köra några manuella release-kommandon. CI/CD-pipelinen hanterar hela releasen automatiskt! 🎉"
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