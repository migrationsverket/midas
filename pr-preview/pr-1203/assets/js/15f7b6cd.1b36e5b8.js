"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8613],{

/***/ 93619
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_layout_components_panel_mdx_15f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-layout-components-panel-mdx-15f.json
const site_docs_dev_layout_components_panel_mdx_15f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/layout/components/panel","title":"Panel","description":"Animerad sidopanel för att visa extra innehåll bredvid huvudinnehållet.","source":"@site/docs/dev/layout/components/panel.mdx","sourceDirName":"dev/layout/components","slug":"/dev/layout/components/panel","permalink":"/pr-preview/pr-1203/dev/layout/components/panel","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Panel","description":"Animerad sidopanel för att visa extra innehåll bredvid huvudinnehållet."},"sidebar":"sideBar","previous":{"title":"Navigation","permalink":"/pr-preview/pr-1203/dev/layout/components/navigation"},"next":{"title":"Sidebar","permalink":"/pr-preview/pr-1203/dev/layout/components/sidebar"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./apps/docs/docs/dev/layout/components/panel.mdx


const frontMatter = {
	title: 'Panel',
	description: 'Animerad sidopanel för att visa extra innehåll bredvid huvudinnehållet.'
};
const contentTitle = 'Panel';

const assets = {

};



const toc = [{
  "value": "Enkel panel",
  "id": "enkel-panel",
  "level": 2
}, {
  "value": "Flera paneler med PanelProvider",
  "id": "flera-paneler-med-panelprovider",
  "level": 2
}, {
  "value": "panelBehavior",
  "id": "panelbehavior",
  "level": 3
}, {
  "value": "usePanels",
  "id": "usepanels",
  "level": 2
}, {
  "value": "Props — Panel",
  "id": "props--panel",
  "level": 2
}, {
  "value": "Props — PanelProvider",
  "id": "props--panelprovider",
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
        id: "panel",
        children: "Panel"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En animerad sidopanel som visas bredvid ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Main"
      }), " i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LayoutContent"
      }), ". Vanlig användning är för detaljvyer, formulär eller annan kontextuell information."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enkel-panel",
      children: "Enkel panel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Layout, LayoutContent, Main, Panel } from '@midas-ds/layout'\nimport { useState } from 'react'\nimport { Button } from '@midas-ds/components'\n\nfunction App() {\n  const [isOpen, setIsOpen] = useState(false)\n\n  return (\n    <Layout>\n      <LayoutContent>\n        <Main>\n          <Button onPress={() => setIsOpen(true)}>Öppna panel</Button>\n        </Main>\n\n        <Panel\n          id='detaljer'\n          title='Detaljer'\n          isOpen={isOpen}\n          onOpenChange={setIsOpen}\n          style={{ gridArea: 'panelRight' }}\n        >\n          {/* Panelinnehåll */}\n        </Panel>\n      </LayoutContent>\n    </Layout>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " är obligatoriskt och måste vara unikt på sidan. Det används internt för att hantera panelens tillstånd."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flera-paneler-med-panelprovider",
      children: "Flera paneler med PanelProvider"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["När du har flera paneler som kan öppnas och stängas oberoende av varandra, använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PanelProvider"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "usePanels"
      }), "-hooken."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { PanelProvider, Panel, usePanels } from '@midas-ds/layout'\nimport { Button } from '@midas-ds/components'\n\nfunction PanelControls() {\n  const { addPanel, closePanel } = usePanels()\n\n  return (\n    <>\n      <Button onPress={() => addPanel({ id: 'panel-a', title: 'Panel A' })}>\n        Öppna Panel A\n      </Button>\n      <Button onPress={() => addPanel({ id: 'panel-b', title: 'Panel B' })}>\n        Öppna Panel B\n      </Button>\n    </>\n  )\n}\n\nfunction App() {\n  return (\n    <PanelProvider panelBehavior='bring-to-front'>\n      <Layout>\n        <LayoutContent>\n          <Main>\n            <PanelControls />\n          </Main>\n          <Panel id='panel-a' title='Panel A' style={{ gridArea: 'panelRight' }} />\n          <Panel id='panel-b' title='Panel B' style={{ gridArea: 'panelRight' }} />\n        </LayoutContent>\n      </Layout>\n    </PanelProvider>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "panelbehavior",
      children: "panelBehavior"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Styr vad som händer när man öppnar en panel som redan är öppen:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Värde"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Beteende"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "bring-to-front"
            }), " (standard)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Panelen flyttas framåt i ordningen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pop-to"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alla paneler ovanför stängs, den klickade visas"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usepanels",
      children: "usePanels"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hook för att komma åt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PanelContext"
      }), " och hantera panelernas tillstånd programmatiskt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "const { panels, addPanel, closePanel, removePanel } = usePanels()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metod"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Beskrivning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "addPanel(panel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Öppnar eller aktiverar en panel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "closePanel(id)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stänger en panel (animeras ut)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "removePanel(id)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tar permanent bort en panel från tillståndet"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "props--panel",
      children: "Props — Panel"
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
              children: "id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "string"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Obligatorisk."
            }), " Unikt id"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
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
            children: "Panelrubrik"
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
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kontrollerat öppet-läge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "defaultOpen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "boolean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Okontrollerat starttillstånd"
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
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback vid öppning/stängning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "props--panelprovider",
      children: "Props — PanelProvider"
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
              children: "panelBehavior"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "'bring-to-front' | 'pop-to'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "'bring-to-front'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beteende vid aktivering av befintlig panel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "defaultPanels"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PanelItem[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Förhandsöppnade paneler"
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