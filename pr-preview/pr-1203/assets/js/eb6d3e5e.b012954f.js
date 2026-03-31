"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1698],{

/***/ 37725
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_layout_migration_mdx_eb6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-layout-migration-mdx-eb6.json
const site_docs_dev_layout_migration_mdx_eb6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/layout/migration","title":"Migrationsguide","description":"Hur du går över från Layout i @midas-ds/components till @midas-ds/layout.","source":"@site/docs/dev/layout/migration.mdx","sourceDirName":"dev/layout","slug":"/dev/layout/migration","permalink":"/pr-preview/pr-1203/dev/layout/migration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Migrationsguide","description":"Hur du går över från Layout i @midas-ds/components till @midas-ds/layout.","sidebar_position":2},"sidebar":"sideBar","previous":{"title":"Layout","permalink":"/pr-preview/pr-1203/dev/layout/"},"next":{"title":"Header","permalink":"/pr-preview/pr-1203/dev/layout/components/header"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/dev/layout/migration.mdx


const frontMatter = {
	title: 'Migrationsguide',
	description: 'Hur du går över från Layout i @midas-ds/components till @midas-ds/layout.',
	sidebar_position: 2
};
const contentTitle = 'Migrationsguide';

const assets = {

};



const toc = [{
  "value": "Vad är nytt?",
  "id": "vad-är-nytt",
  "level": 2
}, {
  "value": "Steg för steg",
  "id": "steg-för-steg",
  "level": 2
}, {
  "value": "1. Installera det nya paketet",
  "id": "1-installera-det-nya-paketet",
  "level": 3
}, {
  "value": "2. Byt ut import",
  "id": "2-byt-ut-import",
  "level": 3
}, {
  "value": "3. Bygg om strukturen",
  "id": "3-bygg-om-strukturen",
  "level": 3
}, {
  "value": "4. Migrera routing",
  "id": "4-migrera-routing",
  "level": 3
}, {
  "value": "5. Ta bort <code>variant=&quot;external&quot;</code>",
  "id": "5-ta-bort-variantexternal",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "migrationsguide",
        children: "Migrationsguide"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Layout"
      }), " från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/components"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/layout"
      }), " kan användas parallellt — du behöver inte migrera allt på en gång. Ta det i din egen takt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vad-är-nytt",
      children: "Vad är nytt?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Den gamla ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Layout"
      }), " är en monolitisk komponent som konfigureras med en enda stor props-struktur. Det nya paketet är komponentbaserat — du sätter ihop strukturen med JSX istället för dataobjekt."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspekt"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Gammalt (", (0,jsx_runtime.jsx)(_components.code, {
              children: "@midas-ds/components"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Nytt (", (0,jsx_runtime.jsx)(_components.code, {
              children: "@midas-ds/layout"
            }), ")"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Menystruktur"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "items"
            }), "-array med dataobjekt"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Navigation"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NavigationLink"
            }), " i JSX"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Användarinfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "user"
            }), "-prop (", (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "title"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ditt eget innehåll i ", (0,jsx_runtime.jsx)(_components.code, {
              children: "HeaderActions"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Appnamn"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "app"
            }), "-prop (", (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "color"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ditt eget innehåll i ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Header"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "clientSideRouter"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "clientSideHref"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "as"
            }), "-prop på ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NavigationLink"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobil"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "variant=\"external\""
            }), " för navbar-layout"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Navbar"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Sidebar"
            }), " hanteras automatiskt"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sidopanel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finns inte"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Panel"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PanelProvider"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hanteras internt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-baserat, du styr"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "steg-för-steg",
      children: "Steg för steg"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-installera-det-nya-paketet",
      children: "1. Installera det nya paketet"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @midas-ds/layout\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-byt-ut-import",
      children: "2. Byt ut import"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "// Gammalt\nimport { Layout } from '@midas-ds/components'\n\n// Nytt\nimport { Layout, LayoutContent, Main, Header, ... } from '@midas-ds/layout'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-bygg-om-strukturen",
      children: "3. Bygg om strukturen"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gammalt — konfiguration via props:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Layout\n  variant='internal'\n  items={[\n    {\n      items: [\n        { title: 'Hem', href: '/', icon: House },\n      ],\n    },\n    {\n      title: 'Ansökan',\n      items: [\n        { title: 'Skapa ansökan', href: '/ansökan', icon: Plus },\n      ],\n    },\n  ]}\n  title='Min app'\n  user={{ name: 'Anna Andersson', title: 'Handläggare' }}\n  app={{ name: 'Min applikation' }}\n>\n  {/* innehåll */}\n</Layout>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nytt — komposition med JSX:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Layout>\n  <Header>\n    <HeaderActions>\n      <HeaderAction icon={<User />}>Anna Andersson</HeaderAction>\n    </HeaderActions>\n  </Header>\n\n  <LayoutContent>\n    <Sidebar title='Min applikation'>\n      <Navigation>\n        <NavigationLink href='/' icon={<House />}>Hem</NavigationLink>\n        <NavigationSection title='Ansökan'>\n          <NavigationLink href='/ansökan' icon={<Plus />}>Skapa ansökan</NavigationLink>\n        </NavigationSection>\n      </Navigation>\n    </Sidebar>\n\n    <Main>\n      {/* innehåll */}\n    </Main>\n  </LayoutContent>\n\n  <Navbar>\n    <ul>\n      <NavigationLink href='/' icon={<House />}>Hem</NavigationLink>\n    </ul>\n  </Navbar>\n</Layout>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-migrera-routing",
      children: "4. Migrera routing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gammalt:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Layout\n  clientSideRouter={navigate}\n  clientSideHref={useHref}\n  ...\n>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nytt"
      }), " — använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "as"
      }), "-propen på ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NavigationLink"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Link as RouterLink } from 'react-router'\n\n<NavigationLink as={RouterLink} to='/' icon={<House />}>\n  Hem\n</NavigationLink>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "5-ta-bort-variantexternal",
      children: ["5. Ta bort ", (0,jsx_runtime.jsx)(_components.code, {
        children: "variant=\"external\""
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Den externa varianten (navbar längst ned på mobil) hanteras automatiskt av det nya paketet. Lägg till ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Navbar"
      }), " i din struktur — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Sidebar"
      }), " döljer sig automatiskt på mobil."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Layout>\n  ...\n  <Sidebar>...</Sidebar>   {/* syns bara på desktop */}\n  <Navbar>...</Navbar>     {/* syns bara på mobil */}\n</Layout>\n"
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