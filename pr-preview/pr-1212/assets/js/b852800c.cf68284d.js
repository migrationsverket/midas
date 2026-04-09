"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[3783],{

/***/ 49802
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_layout_components_navigation_mdx_b85_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-layout-components-navigation-mdx-b85.json
const site_docs_dev_layout_components_navigation_mdx_b85_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/layout/components/navigation","title":"Navigation","description":"Navigationskomponenter för sidomeny och navbar.","source":"@site/docs/dev/layout/components/navigation.mdx","sourceDirName":"dev/layout/components","slug":"/dev/layout/components/navigation","permalink":"/pr-preview/pr-1212/dev/layout/components/navigation","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Navigation","description":"Navigationskomponenter för sidomeny och navbar."},"sidebar":"sideBar","previous":{"title":"Navbar","permalink":"/pr-preview/pr-1212/dev/layout/components/navbar"},"next":{"title":"Panel","permalink":"/pr-preview/pr-1212/dev/layout/components/panel"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/dev/layout/components/navigation.mdx


const frontMatter = {
	title: 'Navigation',
	description: 'Navigationskomponenter för sidomeny och navbar.'
};
const contentTitle = 'Navigation';

const assets = {

};



const toc = [{
  "value": "Navigation",
  "id": "navigation-1",
  "level": 2
}, {
  "value": "NavigationLink",
  "id": "navigationlink",
  "level": 2
}, {
  "value": "Routing",
  "id": "routing",
  "level": 3
}, {
  "value": "Props",
  "id": "props",
  "level": 3
}, {
  "value": "NavigationSection",
  "id": "navigationsection",
  "level": 2
}, {
  "value": "NavigationSubMenu",
  "id": "navigationsubmenu",
  "level": 2
}, {
  "value": "Dynamisk rendering",
  "id": "dynamisk-rendering",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
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
        id: "navigation",
        children: "Navigation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Navigationskomponenterna används både i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Sidebar"
      }), " och i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Navbar"
      }), ". De är identiska — kontexten avgör utseendet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigation-1",
      children: "Navigation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wrapper-komponent som renderar ett ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<nav>"
      }), "-element med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<ul>"
      }), " inuti. Stödjer både statiska barn och dynamisk rendering via Collections."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Navigation, NavigationItem, NavigationLink } from '@midas-ds/layout'\nimport { House, Settings } from 'lucide-react'\n\nexport default function App() {\n  return (\n    <Navigation>\n      <NavigationItem>\n        <NavigationLink\n          href='/'\n          icon={<House />}\n          isActive\n        >\n          Hem\n        </NavigationLink>\n      </NavigationItem>\n      <NavigationItem>\n        <NavigationLink\n          href='/installningar'\n          icon={<Settings />}\n        >\n          Inställningar\n        </NavigationLink>\n      </NavigationItem>\n    </Navigation>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigationlink",
      children: "NavigationLink"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En enskild länk med ikon, etikett och aktivt läge. Anpassar sig automatiskt efter om den befinner sig i en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Sidebar"
      }), " eller ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Navbar"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<NavigationLink\n  href='/mina-arenden'\n  icon={<FileText />}\n  isActive={pathname === '/mina-arenden'}\n>\n  Mina ärenden\n</NavigationLink>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "routing",
      children: "Routing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "as"
      }), "-propen för att byta ut grundkomponenten mot din routers länkkomponent:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Link as RouterLink } from 'react-router'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<NavigationLink\n  as={RouterLink}\n  to='/mina-arenden'\n  icon={<FileText />}\n>\n  Mina ärenden\n</NavigationLink>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["När du använder ", (0,jsx_runtime.jsx)(_components.code, {
          children: "as"
        }), " ersätts ", (0,jsx_runtime.jsx)(_components.code, {
          children: "href"
        }), " av den anpassade komponentens egenskaper. I exemplet ovan används ", (0,jsx_runtime.jsx)(_components.code, {
          children: "to"
        }), " istället för ", (0,jsx_runtime.jsx)(_components.code, {
          children: "href"
        }), " eftersom det är vad React Router förväntar sig."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "props",
      children: "Props"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Prop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Beskrivning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "icon"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ReactNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Obligatorisk."
            }), " Ikon för länken"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "children"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ReactNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Etikett (visas i sidebar, används som tooltip i kollapsad sidebar)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "isActive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "boolean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Markerar länken som aktiv sida"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "href"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "string"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL (standard)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "as"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ElementType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ersättningskomponent (t.ex. Next.js ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Link"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "aria-label"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "string"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Krävs om ", (0,jsx_runtime.jsx)(_components.code, {
              children: "children"
            }), " inte är ren text"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigationsection",
      children: "NavigationSection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grupperar navigeringslänkar under en valfri rubrik."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Navigation, NavigationItem, NavigationLink, NavigationSection } from '@midas-ds/layout'\nimport { FileText, House, Plus } from 'lucide-react'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Navigation>\n  <NavigationItem>\n    <NavigationLink\n      href='/'\n      icon={<House />}\n    >\n      Hem\n    </NavigationLink>\n  </NavigationItem>\n  <NavigationSection title='Ansökan'>\n    <NavigationItem>\n      <NavigationLink\n        href='/ny-ansokan'\n        icon={<Plus />}\n      >\n        Ny ansökan\n      </NavigationLink>\n    </NavigationItem>\n    <NavigationItem>\n      <NavigationLink\n        href='/mina-arenden'\n        icon={<FileText />}\n      >\n        Mina ärenden\n      </NavigationLink>\n    </NavigationItem>\n  </NavigationSection>\n</Navigation>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigationsubmenu",
      children: "NavigationSubMenu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nästlad undermeny för hierarkisk navigationsstruktur."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<NavigationSection title='Administration'>\n  <NavigationSubMenu>\n    <NavigationItem>\n      <NavigationLink\n        href='/anvandare'\n        icon={<Users />}\n      >\n        Användare\n      </NavigationLink>\n    </NavigationItem>\n    <NavigationItem>\n      <NavigationLink\n        href='/roller'\n        icon={<Shield />}\n      >\n        Roller\n      </NavigationLink>\n    </NavigationItem>\n  </NavigationSubMenu>\n</NavigationSection>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dynamisk-rendering",
      children: "Dynamisk rendering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alla navigationskomponenter stödjer React Arias Collection API för dynamisk rendering från data. Nedan följer ett exempel med submenyer och rekursiv rendering."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Navigation, NavigationItem, NavigationLink, NavigationSection, NavigationSubMenu } from '@midas-ds/layout'\nimport { Bell, FileText, House, Plus, Save, User } from 'lucide-react'\n\ntype Section = {\n  id: number\n  title?: string\n  children: Item[]\n}\n\ntype Item = {\n  id: number\n  title: string\n  href: string\n  icon: React.ReactNode\n  children?: Item[]\n}\n\nconst sections: Section[] = [\n  {\n    id: 0,\n    children: [\n      {\n        id: 1,\n        title: 'Home',\n        href: '/',\n        icon: <House />,\n      },\n      {\n        id: 2,\n        title: 'Applications',\n        href: '/applications',\n        icon: <FileText />,\n        children: [\n          {\n            id: 3,\n            title: 'New application',\n            href: '/applications/new',\n            icon: <Plus />,\n          },\n          {\n            id: 4,\n            title: 'Drafts',\n            href: '/applications/drafts',\n            icon: <Save />,\n          },\n        ],\n      },\n    ],\n  },\n  {\n    id: 5,\n    title: 'Account',\n    children: [\n      {\n        id: 6,\n        title: 'Profile',\n        href: '/profile',\n        icon: <User />,\n      },\n      {\n        id: 7,\n        title: 'Notifications',\n        href: '/notifications',\n      },\n    ],\n  },\n]\n\nexport default function App() {\n  return (\n    <Navigation items={sections}>\n      {section => (\n        <NavigationSection\n          title={section.title}\n          items={section.children}\n        >\n          {function renderItem(item) {\n            return (\n              <NavigationItem>\n                <NavigationLink\n                  href={item.href}\n                  icon={item.icon}\n                >\n                  {item.title}\n                </NavigationLink>\n                <NavigationSubMenu items={item.children}>{renderItem}</NavigationSubMenu>\n              </NavigationItem>\n            )\n          }}\n        </NavigationSection>\n      )}\n    </Navigation>\n  )\n}\n"
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