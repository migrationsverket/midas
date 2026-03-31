"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[9856],{

/***/ 86148
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_layout_components_header_mdx_019_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-layout-components-header-mdx-019.json
const site_docs_dev_layout_components_header_mdx_019_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/layout/components/header","title":"Header","description":"Sidhuvud med stöd för logotyp, åtgärdsknappar och mobilmeny.","source":"@site/docs/dev/layout/components/header.mdx","sourceDirName":"dev/layout/components","slug":"/dev/layout/components/header","permalink":"/pr-preview/pr-1203/dev/layout/components/header","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Header","description":"Sidhuvud med stöd för logotyp, åtgärdsknappar och mobilmeny."},"sidebar":"sideBar","previous":{"title":"Migrationsguide","permalink":"/pr-preview/pr-1203/dev/layout/migration"},"next":{"title":"Layout, LayoutContent & Main","permalink":"/pr-preview/pr-1203/dev/layout/components/layout"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/dev/layout/components/header.mdx


const frontMatter = {
	title: 'Header',
	description: 'Sidhuvud med stöd för logotyp, åtgärdsknappar och mobilmeny.'
};
const contentTitle = 'Header';

const assets = {

};



const toc = [{
  "value": "Header",
  "id": "header-1",
  "level": 2
}, {
  "value": "HeaderActions &amp; HeaderAction",
  "id": "headeractions--headeraction",
  "level": 2
}, {
  "value": "MobileMenu",
  "id": "mobilemenu",
  "level": 2
}, {
  "value": "Props",
  "id": "props",
  "level": 2
}, {
  "value": "HeaderAction",
  "id": "headeraction",
  "level": 3
}, {
  "value": "MobileMenu",
  "id": "mobilemenu-1",
  "level": 3
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
        id: "header",
        children: "Header"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sidhuvudet innehåller logotypen och plats för åtgärdsknappar. På mobil används ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MobileMenu"
      }), " för att visa navigationen som ett drawer-mönster."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "header-1",
      children: "Header"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Semantiskt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<header>"
      }), "-element. Tillhandahåller kontext för logotypstorlek (responsiv)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Header } from '@midas-ds/layout'\n\n<Header>\n  {/* Logotyp renderas automatiskt */}\n</Header>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "headeractions--headeraction",
      children: "HeaderActions & HeaderAction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "HeaderActions"
      }), " är en container för knappar längst till höger i sidhuvudet. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HeaderAction"
      }), " är en enskild knapp med ikon och/eller etikett."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Header, HeaderActions, HeaderAction } from '@midas-ds/layout'\nimport { Bell, User } from 'lucide-react'\n\n<Header>\n  <HeaderActions>\n    <HeaderAction icon={<Bell />}>Notiser</HeaderAction>\n    <HeaderAction icon={<User />}>Min profil</HeaderAction>\n  </HeaderActions>\n</Header>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "HeaderAction"
        }), " renderar som en ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tertiary"
        }), "-knapp av storlek ", (0,jsx_runtime.jsx)(_components.code, {
          children: "medium"
        }), ". Om du utelämnar både ", (0,jsx_runtime.jsx)(_components.code, {
          children: "icon"
        }), " och ", (0,jsx_runtime.jsx)(_components.code, {
          children: "children"
        }), " får du en varning i development-läge."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mobilemenu",
      children: "MobileMenu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En drawer-meny som bara visas på mobila enheter. Används för att ge mobilanvändare tillgång till navigationen."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Header, MobileMenu, Navigation, NavigationLink } from '@midas-ds/layout'\nimport { Menu, House } from 'lucide-react'\nimport { Button } from '@midas-ds/components'\nimport { useId, useState } from 'react'\n\nfunction AppHeader() {\n  const menuId = useId()\n  const [isOpen, setIsOpen] = useState(false)\n\n  return (\n    <Header>\n      <Button\n        variant='icon'\n        icon={Menu}\n        aria-controls={menuId}\n        aria-expanded={isOpen}\n        aria-haspopup='dialog'\n        onPress={() => setIsOpen(true)}\n      />\n      <MobileMenu\n        id={menuId}\n        title='Meny'\n        isOpen={isOpen}\n        onOpenChange={setIsOpen}\n      >\n        <Navigation>\n          <NavigationLink href='/' icon={<House />} isActive>Hem</NavigationLink>\n        </Navigation>\n      </MobileMenu>\n    </Header>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MobileMenu"
        }), " renderar ingenting på desktop — den är villkorsstyrd via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useIsMobileDevice()"
        }), ". Det är alltså säkert att alltid inkludera den i trädet."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "props",
      children: "Props"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "headeraction",
      children: "HeaderAction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Prop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typ"
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
            children: "Valfri ikon"
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
            children: "Etikett"
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
            children: "Krävs om varken ikon eller etikett anges"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mobilemenu-1",
      children: "MobileMenu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Prop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typ"
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
            children: "Rubrik i menyn"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "isOpen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "boolean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kontrollerat öppet-läge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "onOpenChange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(isOpen: boolean) => void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback vid öppning/stängning"
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
            children: "Menyinnehåll"
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