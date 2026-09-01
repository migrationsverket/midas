"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4390],{

/***/ 95342
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_layout_get_started_mdx_b03_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-layout-get-started-mdx-b03.json
const site_docs_dev_layout_get_started_mdx_b03_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/layout/get-started","title":"Kom igång","description":"Modulärt layoutpaket för att sätta ihop sidstruktur med komponenter.","source":"@site/docs/dev/layout/get-started.mdx","sourceDirName":"dev/layout","slug":"/dev/layout/get-started","permalink":"/pr-preview/pr-1340/dev/layout/get-started","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Kom igång","description":"Modulärt layoutpaket för att sätta ihop sidstruktur med komponenter.","sidebar_position":1},"sidebar":"sideBar","previous":{"title":"validation","permalink":"/pr-preview/pr-1340/design-patterns/validation"},"next":{"title":"Migrationsguide","permalink":"/pr-preview/pr-1340/dev/layout/migration"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/Link.tsx
var Link = __webpack_require__(30951);
;// ./apps/docs/docs/dev/layout/get-started.mdx


const frontMatter = {
	title: 'Kom igång',
	description: 'Modulärt layoutpaket för att sätta ihop sidstruktur med komponenter.',
	sidebar_position: 1
};
const contentTitle = 'Kom igång';

const assets = {

};

/*Header*/
/*Content row*/
/*Sidebar*/
/*Main*/
/*Panel*/
/*Navbar*/



const toc = [{
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Översikt",
  "id": "översikt",
  "level": 2
}, {
  "value": "Grundstrukturen",
  "id": "grundstrukturen",
  "level": 2
}, {
  "value": "Layout",
  "id": "layout",
  "level": 3
}, {
  "value": "LayoutContent",
  "id": "layoutcontent",
  "level": 3
}, {
  "value": "Main",
  "id": "main",
  "level": 3
}, {
  "value": "Exempel",
  "id": "exempel",
  "level": 2
}, {
  "value": "Exempelapp",
  "id": "exempelapp",
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
        id: "kom-igång",
        children: "Kom igång"
      })
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        marginBottom: 16
      },
      children: [(0,jsx_runtime.jsx)(Link/* Link */.N, {
        href: "https://www.npmjs.com/package/@midas-ds/layout",
        target: "_blank",
        rel: "noopener noreferrer",
        children: (0,jsx_runtime.jsx)("img", {
          src: "https://img.shields.io/npm/v/@midas-ds/layout?style=flat-square&label=npm&color=cb3837",
          alt: "npm version"
        })
      }), (0,jsx_runtime.jsx)(Link/* Link */.N, {
        href: "https://www.npmjs.com/package/@midas-ds/layout",
        target: "_blank",
        rel: "noopener noreferrer",
        children: (0,jsx_runtime.jsx)("img", {
          src: "https://img.shields.io/npm/dm/@midas-ds/layout?style=flat-square&label=downloads&color=informational",
          alt: "npm downloads"
        })
      }), (0,jsx_runtime.jsx)(Link/* Link */.N, {
        href: "https://www.npmjs.com/package/@midas-ds/layout",
        target: "_blank",
        rel: "noopener noreferrer",
        children: (0,jsx_runtime.jsx)("img", {
          src: "https://img.shields.io/npm/last-update/@midas-ds/layout?style=flat-square&label=senast+publicerad&color=success",
          alt: "Last publish date"
        })
      }), (0,jsx_runtime.jsx)(Link/* Link */.N, {
        href: "https://github.com/migrationsverket/midas/tree/main/packages/layout",
        target: "_blank",
        rel: "noopener noreferrer",
        children: (0,jsx_runtime.jsx)("img", {
          src: "https://img.shields.io/badge/source-GitHub-24292e?style=flat-square&logo=github",
          alt: "Source on GitHub"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Beta",
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@midas-ds/layout"
        }), " är i beta. Paketet är installationsbart och redo att användas, men visuell design och vissa API", ":er", " kan förändras innan stabil release."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/layout"
      }), " är ett modulärt layoutpaket som ersätter ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Layout"
      }), " från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/components"
      }), ". Om du använder det gamla paketet idag så kan du följa ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/layout/migration",
        children: "migrationsguiden"
      }), " för att gå över till det nya paketet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @midas-ds/layout\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Importera ", (0,jsx_runtime.jsx)(_components.code, {
        children: "default.css"
      }), " i roten av din applikation. Denna fil innehåller global CSS som krävs för att layout-komponenterna ska fylla hela viewporten korrekt, bland annat ", (0,jsx_runtime.jsx)(_components.code, {
        children: "body { margin: 0 }"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "html { overflow: hidden }"
      }), " för att förhindra att sidans scrollning konkurrerar med layoutens egna scrollbara regioner."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"main.tsx\"",
        children: "import '@midas-ds/layout/default.css'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Avancerad installation",
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Använder du den avancerade installationen och importerar ", (0,jsx_runtime.jsx)(_components.code, {
          children: "variables.css"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fonts.css"
        }), " och ", (0,jsx_runtime.jsx)(_components.code, {
          children: "color-scheme.css"
        }), " separat istället för ", (0,jsx_runtime.jsx)(_components.code, {
          children: "default.css"
        }), "? Kom då ihåg att lägga till nedanstående i din rot-CSS manuellt."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        metastring: "title=\"index.css\"",
        children: "html {\n  overflow: hidden;\n}\n\nbody {\n  margin: 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "översikt",
      children: "Översikt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Layoutpaketet innehåller ett antal komponenter som tillsammans används för att bygga upp de sidlayouter som används i våra applikationer."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Grupp"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Komponenter"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/dev/layout/components/layout",
              children: "Layout"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Layout"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "LayoutContent"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Main"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/dev/layout/components/header",
              children: "Header"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Header"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "HeaderActions"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "HeaderAction"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MobileMenu"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/dev/layout/components/navigation",
              children: "Navigation"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Navigation"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NavigationLink"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NavigationSection"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NavigationSubMenu"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NavigationItem"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NavigationHeader"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/dev/layout/components/sidebar",
              children: "Sidebar"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Sidebar"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/dev/layout/components/panel",
              children: "Panel"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Panel"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PanelProvider"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PanelBody"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "usePanels"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/dev/layout/components/navbar",
              children: "Navbar"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Navbar"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "I skissen nedan visas var på skärmen som komponenterna renderas."
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      style: {
        fontSize: '0.8rem',
        border: '2px solid var(--ifm-color-emphasis-300)',
        overflow: 'hidden',
        maxWidth: '100%',
        userSelect: 'none',
        color: 'var(--ifm-color-content)'
      },
      children: [(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'var(--ifm-color-emphasis-100)',
          borderBottom: '2px solid var(--ifm-color-emphasis-300)',
          padding: '8px 16px'
        },
        children: [(0,jsx_runtime.jsx)("span", {
          style: {
            fontWeight: 'bold'
          },
          children: "Header"
        }), (0,jsx_runtime.jsx)("div", {
          style: {
            display: 'flex',
            gap: 8
          },
          children: (0,jsx_runtime.jsxs)(Link/* Link */.N, {
            href: "/dev/layout/components/header",
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              border: '1px dashed var(--ifm-color-emphasis-300)',
              padding: '4px 8px',
              textDecoration: 'none',
              color: 'inherit'
            },
            children: [(0,jsx_runtime.jsx)("span", {
              style: {
                fontSize: '0.65rem',
                color: 'var(--ifm-color-content-secondary)'
              },
              children: "HeaderActions"
            }), (0,jsx_runtime.jsx)("div", {
              style: {
                background: 'var(--ifm-color-emphasis-200)',
                border: '1px solid var(--ifm-color-emphasis-300)',
                padding: '3px 8px',
                fontSize: '0.75rem'
              },
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "HeaderAction"
              })
            }), (0,jsx_runtime.jsx)("div", {
              style: {
                background: 'var(--ifm-color-emphasis-200)',
                border: '1px solid var(--ifm-color-emphasis-300)',
                padding: '3px 8px',
                fontSize: '0.75rem'
              },
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "HeaderAction"
              })
            })]
          })
        })]
      }), (0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          minHeight: 180
        },
        children: [(0,jsx_runtime.jsxs)("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            width: 140,
            background: 'var(--ifm-color-emphasis-100)',
            borderRight: '2px solid var(--ifm-color-emphasis-300)',
            flexShrink: 0
          },
          children: [(0,jsx_runtime.jsx)(Link/* Link */.N, {
            href: "/dev/layout/components/sidebar",
            style: {
              display: 'block',
              fontWeight: 'bold',
              fontSize: '0.7rem',
              color: 'var(--ifm-color-content-secondary)',
              padding: '10px 10px 4px',
              textDecoration: 'none'
            },
            children: "Sidebar"
          }), (0,jsx_runtime.jsxs)(Link/* Link */.N, {
            href: "/dev/layout/components/navigation",
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              flex: 1,
              border: '1px dashed var(--ifm-color-emphasis-300)',
              margin: '0 8px 10px',
              padding: '8px',
              textDecoration: 'none',
              color: 'inherit'
            },
            children: [(0,jsx_runtime.jsx)("span", {
              style: {
                fontSize: '0.65rem',
                color: 'var(--ifm-color-content-secondary)',
                marginBottom: 2
              },
              children: "Navigation"
            }), [0, 1, 2].map(i => (0,jsx_runtime.jsx)("div", {
              style: {
                background: 'var(--ifm-color-emphasis-200)',
                border: '1px solid var(--ifm-color-emphasis-300)',
                padding: '3px 8px',
                fontSize: '0.7rem'
              },
              children: "NavigationLink"
            }, i))]
          })]
        }), (0,jsx_runtime.jsx)(Link/* Link */.N, {
          href: "/dev/layout/components/layout",
          style: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--ifm-background-color)',
            padding: 16,
            textDecoration: 'none',
            color: 'var(--ifm-color-content-secondary)'
          },
          children: (0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold'
            },
            children: "Main"
          })
        }), (0,jsx_runtime.jsx)(Link/* Link */.N, {
          href: "/dev/layout/components/panel",
          style: {
            display: 'flex',
            flexDirection: 'column',
            width: 110,
            background: 'var(--ifm-color-emphasis-100)',
            borderLeft: '2px solid var(--ifm-color-emphasis-300)',
            padding: '12px 10px',
            textDecoration: 'none',
            color: 'inherit',
            flexShrink: 0
          },
          children: (0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold',
              fontSize: '0.7rem',
              color: 'var(--ifm-color-content-secondary)'
            },
            children: "Panel"
          })
        })]
      }), (0,jsx_runtime.jsxs)("div", {
        style: {
          background: 'var(--ifm-color-emphasis-100)',
          borderTop: '2px solid var(--ifm-color-emphasis-300)',
          padding: '8px 16px'
        },
        children: [(0,jsx_runtime.jsx)(Link/* Link */.N, {
          href: "/dev/layout/components/navbar",
          style: {
            display: 'block',
            fontWeight: 'bold',
            fontSize: '0.7rem',
            color: 'var(--ifm-color-content-secondary)',
            textDecoration: 'none',
            marginBottom: 6
          },
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Navbar"
          })
        }), (0,jsx_runtime.jsxs)(Link/* Link */.N, {
          href: "/dev/layout/components/navigation",
          style: {
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            border: '1px dashed var(--ifm-color-emphasis-300)',
            padding: '6px',
            textDecoration: 'none',
            color: 'inherit'
          },
          children: [(0,jsx_runtime.jsx)("span", {
            style: {
              fontSize: '0.65rem',
              color: 'var(--ifm-color-content-secondary)',
              alignSelf: 'center',
              marginRight: 8
            },
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Navigation"
            })
          }), [0, 1, 2].map(i => (0,jsx_runtime.jsx)("div", {
            style: {
              background: 'var(--ifm-color-emphasis-200)',
              border: '1px solid var(--ifm-color-emphasis-300)',
              padding: '4px 14px',
              fontSize: '0.75rem'
            },
            children: "NavigationLink"
          }, i))]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "grundstrukturen",
      children: "Grundstrukturen"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För att bygga en fungerande sida behövs tre grundkomponenter som utgör stommen i ramverket. Genom att kombinera grundstrukturen med övriga komponenter i ramverket är det enkelt att bygga de sidlayouter som passar din applikation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layout",
      children: "Layout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Den yttersta wrappern som sätter upp den globala layouten för skärmen. Den ser till att ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Header"
      }), " hamnar i toppen och om det finns en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Navbar"
      }), " så läggs den längst ner på skärmen."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Layout } from '@midas-ds/layout'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Layout>{/* Header, LayoutContent, Navbar */}</Layout>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layoutcontent",
      children: "LayoutContent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En wrapper som ligger inuti ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Layout"
      }), ". Den ansvarar för att lägga ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Sidebar"
      }), ", huvudinnehållet och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Panel"
      }), " bredvid varandra."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Layout, LayoutContent, Main } from '@midas-ds/layout'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Layout>\n  <LayoutContent>\n    <Sidebar>...</Sidebar>\n    <Main>...</Main>\n  </LayoutContent>\n</Layout>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "main",
      children: "Main"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Här läggs sidans huvudinnehåll. Detta renderar ett semantiskt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<main>"
      }), "-element."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Main } from '@midas-ds/layout'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Main>\n  <h1>Rubrik</h1>\n  <p>Sidans innehåll</p>\n</Main>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exempel",
      children: "Exempel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Här är ett exempel med sidhuvud, sidomeny, huvudinnehåll och navbar. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Sidebar"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Navbar"
      }), " döljer sig\nautomatiskt beroende på skärmstorlek, så det är säkert att inkludera båda i trädet samtidigt."]
    }), "\n", (0,jsx_runtime.jsx)("style", {
      children: `.komplett-exempel .theme-code-block { max-height: none; }`
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "komplett-exempel",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import {\n  Layout,\n  LayoutContent,\n  Main,\n  Header,\n  HeaderLogo,\n  HeaderTitle,\n  HeaderActions,\n  HeaderAction,\n  Sidebar,\n  Navigation,\n  NavigationItem,\n  NavigationLink,\n  Navbar,\n} from '@midas-ds/layout'\nimport { House, Settings, Bell, User } from 'lucide-react'\n\nexport const App = () => {\n  return (\n    <Layout>\n      <Header>\n        <HeaderLogo />\n        <HeaderTitle>Min applikation</HeaderTitle>\n        <HeaderActions>\n          <HeaderAction icon={<Bell />}>Notiser</HeaderAction>\n          <HeaderAction icon={<User />}>Min profil</HeaderAction>\n        </HeaderActions>\n      </Header>\n\n      <LayoutContent>\n        <Sidebar title='Navigation'>\n          <Navigation>\n            <NavigationItem>\n              <NavigationLink href='/' icon={<House />} isActive>\n                Hem\n              </NavigationLink>\n            </NavigationItem>\n            <NavigationItem>\n              <NavigationLink href='/installningar' icon={<Settings />}>\n                Inställningar\n              </NavigationLink>\n            </NavigationItem>\n          </Navigation>\n        </Sidebar>\n\n        <Main>{/* Applikationens huvudinnehåll */}</Main>\n      </LayoutContent>\n\n      <Navbar>\n        <Navigation>\n          <NavigationItem>\n            <NavigationLink href='/' icon={<House />} isActive>\n              Hem\n            </NavigationLink>\n          </NavigationItem>\n          <NavigationItem>\n            <NavigationLink href='/installningar' icon={<Settings />}>\n              Inställningar\n            </NavigationLink>\n          </NavigationItem>\n        </Navigation>\n      </Navbar>\n    </Layout>\n  )\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exempelapp",
      children: "Exempelapp"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vi håller på att ta fram en fristående exempelapp med Vite som visar paketet i ett realistiskt sammanhang. Under tiden finns ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/migrationsverket/midas/tree/main/apps/next",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "apps/next"
        })
      }), " i monorepon, en Next.js-app som använder paketet fullt ut och är öppen att titta på för inspiration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Next.js / SSR",
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Vissa komponenter i paketet (bl.a. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Header"
        }), ") kräver ", (0,jsx_runtime.jsx)(_components.code, {
          children: "'use client'"
        }), " i Next.js App Router. Använd dem i klientkomponenter eller wrappa dem i en egen ", (0,jsx_runtime.jsx)(_components.code, {
          children: "'use client'"
        }), "-komponent. Se ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/tree/main/apps/next",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "apps/next"
          })
        }), " för ett fungerande exempel."]
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



/***/ },

/***/ 30951
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86757);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28774);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74848);
/**
 * A wrapper to implement docusaurus broken link collector around Midas Link
 */var Link=function Link(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .N,Object.assign({as:_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A},props));};

/***/ },

/***/ 86757
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ Link)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/link/Link.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Link_module = ({"link":"link_RCbb","icon":"icon_Bxuv","standalone":"standalone_Cg9F","stretched":"stretched_pvQw"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Link.mjs + 1 modules
var private_Link = __webpack_require__(67452);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(81013);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js
var arrow_down_to_line = __webpack_require__(69750);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
var square_arrow_out_up_right = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/link/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"opensInNewTab":"Opens in new tab","downloadsFile":"Downloads file"},"sv":{"opensInNewTab":"Öppnas i ny flik","downloadsFile":"Hämtar fil"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/link/Link.tsx
'use client';var _excluded=["children","standalone","target","stretched","download","icon","className","as"],_excluded2=["icon"];var Link=function Link(_ref){var children=_ref.children,standalone=_ref.standalone,target=_ref.target,stretched=_ref.stretched,download=_ref.download,customIcon=_ref.icon,className=_ref.className,as=_ref.as,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||private_Link/* Link */.N;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var getIcon=function getIcon(){if(customIcon)return{icon:customIcon};if(download)return{icon:arrow_down_to_line/* default */.A,label:strings.format('downloadsFile')};if(target==='_blank')return{icon:square_arrow_out_up_right/* default */.A,label:strings.format('opensInNewTab')};if(standalone)return{icon:arrow_right/* default */.A};return null;};var iconConfig=getIcon();return/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,Object.assign({className:(0,clsx/* default */.A)(Link_module.link,standalone&&Link_module.standalone,stretched&&Link_module.stretched,className)},rest,{target:target,download:download,children:[children,iconConfig?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{className:Link_module.icon,icon:iconConfig.icon,size:16,"aria-hidden":true}),iconConfig.label&&/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:iconConfig.label})]}):null]}));};var Icon=function Icon(_ref2){var IconComponent=_ref2.icon,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,Object.assign({},rest));};

/***/ },

/***/ 69750
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowDownToLine)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
];
const ArrowDownToLine = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("arrow-down-to-line", __iconNode);


//# sourceMappingURL=arrow-down-to-line.js.map


/***/ },

/***/ 48635
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowRight)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("arrow-right", __iconNode);


//# sourceMappingURL=arrow-right.js.map


/***/ },

/***/ 8866
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SquareArrowOutUpRight)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6", key: "y09zxi" }],
  ["path", { d: "m21 3-9 9", key: "mpx6sq" }],
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }]
];
const SquareArrowOutUpRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("square-arrow-out-up-right", __iconNode);


//# sourceMappingURL=square-arrow-out-up-right.js.map


/***/ },

/***/ 67452
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ $984a1fc08f87e4f3$export$a6c7ac8248d6e38a),
  s: () => (/* binding */ $984a1fc08f87e4f3$export$e2509388b49734e7)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/openLink.mjs
var openLink = __webpack_require__(46271);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var useFocusable = __webpack_require__(55602);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/usePress.mjs + 1 modules
var usePress = __webpack_require__(23580);
;// ./node_modules/react-aria/dist/private/link/useLink.mjs






/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $40d752843fab8930$export$dcf14c9974fe2767(props, ref) {
    let { elementType: elementType = 'a', onPress: onPress, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressChange: onPressChange, onClick: onClick, isDisabled: isDisabled, ...otherProps } = props;
    let linkProps = {};
    if (elementType !== 'a') linkProps = {
        role: 'link',
        tabIndex: !isDisabled ? 0 : undefined
    };
    let { focusableProps: focusableProps } = (0, useFocusable/* useFocusable */.Wc)(props, ref);
    let { pressProps: pressProps, isPressed: isPressed } = (0, usePress/* usePress */.d)({
        onPress: onPress,
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        onPressChange: onPressChange,
        onClick: onClick,
        isDisabled: isDisabled,
        ref: ref
    });
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(otherProps, {
        labelable: true
    });
    let interactionHandlers = (0, mergeProps/* mergeProps */.v)(focusableProps, pressProps);
    let router = (0, openLink/* useRouter */.rd)();
    let routerLinkProps = (0, openLink/* useLinkProps */._h)(props);
    return {
        isPressed: isPressed,
        linkProps: (0, mergeProps/* mergeProps */.v)(domProps, routerLinkProps, {
            ...interactionHandlers,
            ...linkProps,
            'aria-disabled': isDisabled || undefined,
            'aria-current': props['aria-current'],
            onClick: (e)=>{
                pressProps.onClick?.(e);
                (0, openLink/* handleLinkClick */.PJ)(e, router, props.href, props.routerOptions);
            }
        })
    };
}



//# sourceMappingURL=useLink.mjs.map

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/focus/useFocusRing.mjs
var useFocusRing = __webpack_require__(66683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useHover.mjs
var useHover = __webpack_require__(68068);
;// ./node_modules/react-aria-components/dist/private/Link.mjs








/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






const $984a1fc08f87e4f3$export$e2509388b49734e7 = /*#__PURE__*/ (0, react.createContext)(null);
const $984a1fc08f87e4f3$export$a6c7ac8248d6e38a = /*#__PURE__*/ (0, react.forwardRef)(function Link(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $984a1fc08f87e4f3$export$e2509388b49734e7);
    let elementType = props.href && !props.isDisabled ? 'a' : 'span';
    let { linkProps: linkProps, isPressed: isPressed } = (0, $40d752843fab8930$export$dcf14c9974fe2767)({
        ...props,
        elementType: elementType
    }, ref);
    let ElementType = (0, utils/* dom */.tT)[elementType];
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* useHover */.M)(props);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)();
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-Link',
        values: {
            isCurrent: !!props['aria-current'],
            isDisabled: props.isDisabled || false,
            isPressed: isPressed,
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible
        }
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, react).createElement(ElementType, {
        ref: ref,
        slot: props.slot || undefined,
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, linkProps, hoverProps, focusProps),
        "data-focused": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-pressed": isPressed || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-current": !!props['aria-current'] || undefined,
        "data-disabled": props.isDisabled || undefined
    }, renderProps.children);
});



//# sourceMappingURL=Link.mjs.map


/***/ }

}]);