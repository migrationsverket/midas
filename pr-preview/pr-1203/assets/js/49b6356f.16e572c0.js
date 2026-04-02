"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5566],{

/***/ 42633
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_layout_index_mdx_49b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-layout-index-mdx-49b.json
const site_docs_dev_layout_index_mdx_49b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/layout/index","title":"Layout","description":"Modulärt layoutpaket för att sätta ihop sidstruktur med komponenter.","source":"@site/docs/dev/layout/index.mdx","sourceDirName":"dev/layout","slug":"/dev/layout/","permalink":"/pr-preview/pr-1203/dev/layout/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Layout","description":"Modulärt layoutpaket för att sätta ihop sidstruktur med komponenter.","sidebar_position":1},"sidebar":"sideBar","previous":{"title":"Validering i formulär","permalink":"/pr-preview/pr-1203/design-patterns/validation"},"next":{"title":"Migrationsguide","permalink":"/pr-preview/pr-1203/dev/layout/migration"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/dev/layout/index.mdx


const frontMatter = {
	title: 'Layout',
	description: 'Modulärt layoutpaket för att sätta ihop sidstruktur med komponenter.',
	sidebar_position: 1
};
const contentTitle = 'Layout';

const assets = {

};

/*Header*/
/*Content row*/
/*Sidebar*/
/*Main*/
/*Panel*/
/*Navbar*/


const toc = [{
  "value": "Struktur",
  "id": "struktur",
  "level": 2
}, {
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Snabbstart",
  "id": "snabbstart",
  "level": 2
}, {
  "value": "Exempelapp",
  "id": "exempelapp",
  "level": 2
}, {
  "value": "Komponenter",
  "id": "komponenter",
  "level": 2
}, {
  "value": "Migrera från gamla Layout",
  "id": "migrera-från-gamla-layout",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "layout",
        children: "Layout"
      })
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        marginBottom: 16
      },
      children: [(0,jsx_runtime.jsx)("a", {
        href: "https://www.npmjs.com/package/@midas-ds/layout",
        target: "_blank",
        rel: "noopener noreferrer",
        children: (0,jsx_runtime.jsx)("img", {
          src: "https://img.shields.io/npm/v/@midas-ds/layout?style=flat-square&label=npm&color=cb3837",
          alt: "npm version"
        })
      }), (0,jsx_runtime.jsx)("a", {
        href: "https://www.npmjs.com/package/@midas-ds/layout",
        target: "_blank",
        rel: "noopener noreferrer",
        children: (0,jsx_runtime.jsx)("img", {
          src: "https://img.shields.io/npm/dm/@midas-ds/layout?style=flat-square&label=downloads&color=informational",
          alt: "npm downloads"
        })
      }), (0,jsx_runtime.jsx)("a", {
        href: "https://www.npmjs.com/package/@midas-ds/layout",
        target: "_blank",
        rel: "noopener noreferrer",
        children: (0,jsx_runtime.jsx)("img", {
          src: "https://img.shields.io/npm/last-update/@midas-ds/layout?style=flat-square&label=senast+publicerad&color=success",
          alt: "Last publish date"
        })
      }), (0,jsx_runtime.jsx)("a", {
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
      }), " är ett nytt, modulärt layoutpaket som ersätter ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Layout"
      }), " från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/components"
      }), ". Istället för en enda stor komponent som konfigureras via props sätter du ihop strukturen med mindre, utbytbara komponenter — du väljer vilka delar du behöver."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "struktur",
      children: "Struktur"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Skissen nedan visar ett exempel på hur komponenterna kan sättas ihop. Vilket upplägg som passar din applikation är upp till dig."
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
          children: (0,jsx_runtime.jsxs)("a", {
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
              children: "HeaderAction"
            }), (0,jsx_runtime.jsx)("div", {
              style: {
                background: 'var(--ifm-color-emphasis-200)',
                border: '1px solid var(--ifm-color-emphasis-300)',
                padding: '3px 8px',
                fontSize: '0.75rem'
              },
              children: "HeaderAction"
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
          children: [(0,jsx_runtime.jsx)("a", {
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
          }), (0,jsx_runtime.jsxs)("a", {
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
        }), (0,jsx_runtime.jsx)("a", {
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
        }), (0,jsx_runtime.jsx)("a", {
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
        children: [(0,jsx_runtime.jsx)("a", {
          href: "/dev/layout/components/navbar",
          style: {
            display: 'block',
            fontWeight: 'bold',
            fontSize: '0.7rem',
            color: 'var(--ifm-color-content-secondary)',
            textDecoration: 'none',
            marginBottom: 6
          },
          children: "Navbar"
        }), (0,jsx_runtime.jsxs)("a", {
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
            children: "Navigation"
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
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @midas-ds/layout\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "snabbstart",
      children: "Snabbstart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Så här ser ett komplett upplägg ut med sidhuvud, sidomeny, huvudinnehåll och navbar:"
    }), "\n", (0,jsx_runtime.jsx)("style", {
      children: `.snabbstart .theme-code-block { max-height: none; }`
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "snabbstart",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import {\n  Layout,\n  LayoutContent,\n  Main,\n  Header,\n  HeaderActions,\n  HeaderAction,\n  Sidebar,\n  Navigation,\n  NavigationItem,\n  NavigationLink,\n  Navbar,\n} from '@midas-ds/layout'\nimport { House, Settings, Bell, User } from 'lucide-react'\n\nexport default function App() {\n  return (\n    <Layout>\n      <Header>\n        <HeaderActions>\n          <HeaderAction icon={<Bell />}>Notiser</HeaderAction>\n          <HeaderAction icon={<User />}>Min profil</HeaderAction>\n        </HeaderActions>\n      </Header>\n\n      <LayoutContent>\n        <Sidebar title='Min applikation'>\n          <Navigation>\n            <NavigationItem>\n              <NavigationLink href='/' icon={<House />} isActive>\n                Hem\n              </NavigationLink>\n            </NavigationItem>\n            <NavigationItem>\n              <NavigationLink href='/installningar' icon={<Settings />}>\n                Inställningar\n              </NavigationLink>\n            </NavigationItem>\n          </Navigation>\n        </Sidebar>\n\n        <Main>\n          {/* Ditt innehåll */}\n        </Main>\n      </LayoutContent>\n\n      <Navbar>\n        <Navigation>\n          <NavigationItem>\n            <NavigationLink href='/' icon={<House />} isActive>\n              Hem\n            </NavigationLink>\n          </NavigationItem>\n          <NavigationItem>\n            <NavigationLink href='/installningar' icon={<Settings />}>\n              Inställningar\n            </NavigationLink>\n          </NavigationItem>\n        </Navigation>\n      </Navbar>\n    </Layout>\n  )\n}\n"
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
      }), " i monorepon — en Next.js-app som använder paketet fullt ut och är öppen att titta på för inspiration."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "komponenter",
      children: "Komponenter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Paketet exporterar komponenter organiserade i grupper. Välj de du behöver — du behöver inte använda allt."
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
              href: "./components/layout",
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
              href: "./components/header",
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
              href: "./components/navigation",
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
              href: "./components/sidebar",
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
              href: "./components/panel",
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
              href: "./components/navbar",
              children: "Navbar"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Navbar"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "migrera-från-gamla-layout",
      children: "Migrera från gamla Layout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använder du ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Layout"
      }), " från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/components"
      }), " idag? Se ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./migration",
        children: "migrationsguiden"
      }), " för hur du går över till det nya paketet."]
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