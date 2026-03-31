"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2786],{

/***/ 89349
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_layout_components_sidebar_mdx_542_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-layout-components-sidebar-mdx-542.json
const site_docs_dev_layout_components_sidebar_mdx_542_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/layout/components/sidebar","title":"Sidebar","description":"Kollapsbar sidomeny för desktop.","source":"@site/docs/dev/layout/components/sidebar.mdx","sourceDirName":"dev/layout/components","slug":"/dev/layout/components/sidebar","permalink":"/pr-preview/pr-1203/dev/layout/components/sidebar","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Sidebar","description":"Kollapsbar sidomeny för desktop."},"sidebar":"sideBar","previous":{"title":"Panel","permalink":"/pr-preview/pr-1203/dev/layout/components/panel"},"next":{"title":"Routing på klientnivå","permalink":"/pr-preview/pr-1203/dev/client-side-routing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/dev/layout/components/sidebar.mdx


const frontMatter = {
	title: 'Sidebar',
	description: 'Kollapsbar sidomeny för desktop.'
};
const contentTitle = 'Sidebar';

const assets = {

};



const toc = [{
  "value": "Grundläggande användning",
  "id": "grundläggande-användning",
  "level": 2
}, {
  "value": "Kollapsläge",
  "id": "kollapsläge",
  "level": 2
}, {
  "value": "Okontrollerat",
  "id": "okontrollerat",
  "level": 3
}, {
  "value": "Kontrollerat",
  "id": "kontrollerat",
  "level": 3
}, {
  "value": "Props",
  "id": "props",
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
        id: "sidebar",
        children: "Sidebar"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En kollapsbar sidomeny som visas på desktop. På mobil döljs den automatiskt — använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MobileMenu"
      }), " i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Header"
      }), " för mobilnavigering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "grundläggande-användning",
      children: "Grundläggande användning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Sidebar, Navigation, NavigationLink } from '@midas-ds/layout'\nimport { House, Settings } from 'lucide-react'\n\n<Sidebar title='Min applikation'>\n  <Navigation>\n    <NavigationLink href='/' icon={<House />} isActive>Hem</NavigationLink>\n    <NavigationLink href='/installningar' icon={<Settings />}>Inställningar</NavigationLink>\n  </Navigation>\n</Sidebar>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kollapsläge",
      children: "Kollapsläge"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sidomenyn kan kollapsa ihop till enbart ikoner. Det kan styras antingen okontrollerat (internt tillstånd) eller kontrollerat av föräldrakomponenten."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "okontrollerat",
      children: "Okontrollerat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Sidebar title='Min applikation' defaultCollapsed={false}>\n  ...\n</Sidebar>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kontrollerat",
      children: "Kontrollerat"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "const [isCollapsed, setIsCollapsed] = useState(false)\n\n<Sidebar\n  title='Min applikation'\n  isCollapsed={isCollapsed}\n  onCollapseChange={setIsCollapsed}\n>\n  ...\n</Sidebar>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["När sidomenyn är kollapsad visas etiketten i ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NavigationLink"
        }), " som en tooltip vid hover. Se till att varje länk alltid har en ", (0,jsx_runtime.jsx)(_components.code, {
          children: "children"
        }), "-prop (etikett) — den är nödvändig för tillgänglighet i kollapsad vy."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
              children: "title"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "string"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Titel som visas högst upp i sidomenyn (dold vid kollaps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "isCollapsed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "boolean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kontrollerat kollapsläge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "defaultCollapsed"
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
            children: "Starttillstånd för okontrollerat läge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "onCollapseChange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(isCollapsed: boolean) => void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback vid kollaps/expansion"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Sidomenysinnehåll (typiskt ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Navigation"
            }), ")"]
          })]
        })]
      })]
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