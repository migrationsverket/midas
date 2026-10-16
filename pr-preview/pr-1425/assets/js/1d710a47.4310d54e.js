"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["7507"], {
22678(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_17_32_0_mdx_1d7_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_17_32_0_mdx_1d7_json__rspack_import_0 = __webpack_require__(3485);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(74848);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);


const frontMatter = {
	slug: '17.32.0',
	title: 'Release 17.32.0',
	authors: 'midas',
	tags: [
		'release-notes',
		'v17'
	],
	date: new Date('2026-10-14T00:00:00.000Z')
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};

/*truncate*/


const toc = [{
  "value": "🆕 Ny komponent: Stack",
  "id": "-ny-komponent-stack",
  "level": 2
}, {
  "value": "🚀 Nya funktioner",
  "id": "-nya-funktioner",
  "level": 2
}, {
  "value": "Modal: ny design och sticky footer",
  "id": "modal-ny-design-och-sticky-footer",
  "level": 3
}, {
  "value": "FileList: uppladdningsförlopp",
  "id": "filelist-uppladdningsförlopp",
  "level": 3
}, {
  "value": "ProgressBar: cirkulär variant",
  "id": "progressbar-cirkulär-variant",
  "level": 3
}, {
  "value": "Calendar: månads- och årsväljare",
  "id": "calendar-månads--och-årsväljare",
  "level": 3
}, {
  "value": "Accordion: <code>contentBackground</code>",
  "id": "accordion-contentbackground",
  "level": 3
}, {
  "value": "lucide-react är nu ett beroende",
  "id": "lucide-react-är-nu-ett-beroende",
  "level": 3
}, {
  "value": "🩹 Fixar",
  "id": "-fixar",
  "level": 2
}, {
  "value": "@midas-ds/components",
  "id": "midas-dscomponents",
  "level": 3
}, {
  "value": "@midas-ds/layout",
  "id": "midas-dslayout",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
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
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Sedan 17.26.0 har ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Modal"
      }), " fått ny design och en sticky footer, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Stack"
      }), " har tillkommit, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FileList"
      }), " visar uppladdningsförlopp och ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Calendar"
      }), " har fått en månads- och årsväljare."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Paket"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Version"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@midas-ds/components"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "17.32.0"
            })
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@midas-ds/layout"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "0.2.54"
            })
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "@midas-ds/theme"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "3.17.8"
            })
          })]
        })]
      })]
    }), "\n", "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-ny-komponent-stack",
      children: "🆕 Ny komponent: Stack"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Stack"
      }), " placerar children i en riktning, med standardavstånd från Midas semantiska space-tokens. En förenklad flexbox helt enkelt!"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Stack, Button } from '@midas-ds/components'\n\n;<Stack\n  direction='row'\n  spacing='medium'\n  justifyContent='end'\n>\n  <Button variant='secondary'>Avbryt</Button>\n  <Button>Spara</Button>\n</Stack>\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "spacing"
      }), " tar ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "xsmall"
      }), "–", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "xlarge"
      }), " (standard ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "small"
      }), "). Med ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "elementType"
      }), " väljer du vilket element som renderas, t.ex. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ul"
      }), " för en lista. Se ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/components/stack",
        children: "dokumentationen"
      }), " för fler exempel."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-nya-funktioner",
      children: "🚀 Nya funktioner"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "modal-ny-design-och-sticky-footer",
      children: "Modal: ny design och sticky footer"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Modal"
      }), " har fått ny design: stängknappen visar bara en ikon (med ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "aria-label"
      }), "), headern har ny bakgrundsfärg och paddingen är justerad. Med nya ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "footer"
      }), "-propen hamnar handlingarna i en footer som alltid är synlig, även när innehållet är långt."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-tsx",
        children: "<DialogTrigger>\n  <Button>Öppna modal</Button>\n  <Modal\n    title='Rubrik'\n    footer={<Button slot='close'>Bekräfta</Button>}\n  >\n    Innehåll i modal\n  </Modal>\n</DialogTrigger>\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Se ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/components/modal",
        children: "riktlinjerna"
      }), " för var handlingar ska placeras."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "filelist-uppladdningsförlopp",
      children: "FileList: uppladdningsförlopp"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "FileListItem"
      }), " har fått ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "status"
      }), " (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "idle"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "uploading"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "success"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "error"
      }), "), ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "progress"
      }), " och ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "errorMessage"
      }), " för att visa var i uppladdningsflödet en fil befinner sig."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-tsx",
        children: "<FileListItem\n  fileName='video.mp4'\n  fileSize='128 MB'\n  status='uploading'\n  progress={40}\n  onCancel={handleCancel}\n/>\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Se ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/components/file-list",
        children: "dokumentationen"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "progressbar-cirkulär-variant",
      children: "ProgressBar: cirkulär variant"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "ProgressBar"
      }), " kan nu renderas som en ring med ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "shape='circular'"
      }), ", och med ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "small"
      }), " blir den 20px, lika stor som en liten ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Spinner"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "calendar-månads--och-årsväljare",
      children: "Calendar: månads- och årsväljare"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Calendar"
      }), " och ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "RangeCalendar"
      }), " kan visa månad och år som dropdown-väljare i headern med ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "showMonthYearPicker"
      }), ", så att användaren kan hoppa direkt till en annan månad eller ett annat år."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Calendar\n  aria-label='Kalender'\n  showMonthYearPicker\n/>\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.h3, {
      id: "accordion-contentbackground",
      children: ["Accordion: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "contentBackground"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "AccordionItem"
      }), " har fått ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "contentBackground"
      }), " (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "neutral"
      }), " eller ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "inherit"
      }), "). ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "hasBackground"
      }), " är deprecated, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "hasBackground={false}"
      }), " motsvarar ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "contentBackground='inherit'"
      }), "."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "lucide-react-är-nu-ett-beroende",
      children: "lucide-react är nu ett beroende"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@midas-ds/components"
      }), " och ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "@midas-ds/layout"
      }), " bundlar inte längre egna kopior av ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "lucide-react"
      }), ", utan deklarerar det som beroende. Använder du själv Lucide delar ni nu på samma kopia, och typer som ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "icon?: LucideIcon"
      }), " på ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Button"
      }), " och ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "Link"
      }), " fungerar utan att du installerar paketet själv."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "-fixar",
      children: "🩹 Fixar"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "midas-dscomponents",
      children: "@midas-ds/components"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "TextField"
        }), ": Texten är nu nedtonad i disabled-tillstånd."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Checkbox, Radio"
        }), ": ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "data-*"
        }), "-attribut hamnar återigen på knappen, inte på fältet runt. Det hade ändrats sedan de började bygga på ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "CheckboxField"
        }), "/", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "RadioField"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "RangeCalendar"
        }), ": Använder nu ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "commitBehavior='reset'"
        }), " som standard, så att ett påbörjat val inte försvinner."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Calendar"
        }), ": Fixat en regression i ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "commitBehavior"
        }), " och specificiteten i kalenderns style-reset."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Typer"
        }), ": Publicerade typer importerar inte längre odeklarerade paket. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "clsx"
        }), " är nu ett deklarerat beroende, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@react-types/shared"
        }), " används inte längre och ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: ".stories.d.ts"
        }), "-filer publiceras inte. Tidigare kunde du få ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "any"
        }), " eller fel med pnpm eller ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "skipLibCheck: false"
        }), "."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Beroenden"
        }), ": React Aria och React Spectrum är uppdaterade."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "midas-dslayout",
      children: "@midas-ds/layout"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Typer"
        }), ": Publicerade typer importerar nu från ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@midas-ds/components"
        }), " i stället för sökvägar som inte finns i ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "node_modules"
        }), ". Tidigare saknade bl.a. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "PanelTitle"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "NavigationHeader"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "MobileMenu"
        }), " och ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "HeaderAction"
        }), " typer från components."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "useMediaQuery"
        }), ": Bygger nu på ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "useSyncExternalStore"
        }), " i stället för ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "@react-spectrum/utils"
        }), ", så paketet bundlar inte längre en egen kopia av React Arias SSR-kontext."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Se alla förändringar i detalj på changelog:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.27.0",
          children: "components@v17.27.0"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.27.1",
          children: "components@v17.27.1"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.27.2",
          children: "components@v17.27.2"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.27.3",
          children: "components@v17.27.3"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.27.4",
          children: "components@v17.27.4"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.27.5",
          children: "components@v17.27.5"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.28.0",
          children: "components@v17.28.0"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.28.1",
          children: "components@v17.28.1"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.28.2",
          children: "components@v17.28.2"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.29.0",
          children: "components@v17.29.0"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.30.0",
          children: "components@v17.30.0"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.30.1",
          children: "components@v17.30.1"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.30.2",
          children: "components@v17.30.2"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.31.0",
          children: "components@v17.31.0"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.32.0",
          children: "components@v17.32.0"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%40v0.2.40",
          children: "layout@v0.2.40"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%40v0.2.41",
          children: "layout@v0.2.41"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%40v0.2.42",
          children: "layout@v0.2.42"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%40v0.2.43",
          children: "layout@v0.2.43"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%40v0.2.44",
          children: "layout@v0.2.44"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%40v0.2.45",
          children: "layout@v0.2.45"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%40v0.2.46",
          children: "layout@v0.2.46"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%40v0.2.47",
          children: "layout@v0.2.47"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%40v0.2.48",
          children: "layout@v0.2.48"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%40v0.2.49",
          children: "layout@v0.2.49"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%40v0.2.50",
          children: "layout@v0.2.50"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%40v0.2.51",
          children: "layout@v0.2.51"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%40v0.2.52",
          children: "layout@v0.2.52"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%40v0.2.53",
          children: "layout@v0.2.53"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%40v0.2.54",
          children: "layout@v0.2.54"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/theme%40v3.17.2",
          children: "theme@v3.17.2"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/theme%40v3.17.3",
          children: "theme@v3.17.3"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/theme%40v3.17.4",
          children: "theme@v3.17.4"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/theme%40v3.17.5",
          children: "theme@v3.17.5"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/theme%40v3.17.6",
          children: "theme@v3.17.6"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/theme%40v3.17.7",
          children: "theme@v3.17.7"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/theme%40v3.17.8",
          children: "theme@v3.17.8"
        })
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__rspack_import_1.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
3485(module) {
module.exports = JSON.parse('{"permalink":"/pr-preview/pr-1425/release-notes/17.32.0","source":"@site/blog/release-notes/17.32.0.mdx","title":"Release 17.32.0","description":"Sedan 17.26.0 har Modal fått ny design och en sticky footer, Stack har tillkommit, FileList visar uppladdningsförlopp och Calendar har fått en månads- och årsväljare.","date":"2026-10-14T00:00:00.000Z","tags":[{"inline":true,"label":"release-notes","permalink":"/pr-preview/pr-1425/release-notes/tags/release-notes"},{"inline":true,"label":"v17","permalink":"/pr-preview/pr-1425/release-notes/tags/v-17"}],"readingTime":4.5,"hasTruncateMarker":true,"authors":[{"name":"Midas","title":"Midas Core Team","utl":"https://github.com/migrationsverket/midas","imageURL":"https://avatars.githubusercontent.com/u/110020437?s=200&v=4","key":"midas","page":null}],"frontMatter":{"slug":"17.32.0","title":"Release 17.32.0","authors":"midas","tags":["release-notes","v17"],"date":"2026-10-14T00:00:00.000Z"},"unlisted":false,"nextItem":{"title":"Release 17.26.0","permalink":"/pr-preview/pr-1425/release-notes/17.26.0"}}')

},

}]);