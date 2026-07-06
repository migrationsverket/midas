"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[3633],{

/***/ 23319
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_17_11_0_mdx_3e5_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_notes_17_11_0_mdx_3e5_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96431);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: '17.11.0',
	title: 'Release 17.11–17.16',
	authors: 'midas',
	tags: [
		'release-notes',
		'v17'
	],
	date: new Date('2026-04-09T00:00:00.000Z')
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};

/*truncate*/


const toc = [{
  "value": "📦 @midas-ds/layout — nu i beta",
  "id": "-midas-dslayout--nu-i-beta",
  "level": 2
}, {
  "value": "Vad händer med gamla Layout?",
  "id": "vad-händer-med-gamla-layout",
  "level": 3
}, {
  "value": "Panel",
  "id": "panel",
  "level": 3
}, {
  "value": "Sidebar-animationer",
  "id": "sidebar-animationer",
  "level": 3
}, {
  "value": "🆕 Ny komponent: TimeField",
  "id": "-ny-komponent-timefield",
  "level": 2
}, {
  "value": "🚀 Nya funktioner",
  "id": "-nya-funktioner",
  "level": 2
}, {
  "value": "Card — CardHeader och CardBody",
  "id": "card--cardheader-och-cardbody",
  "level": 3
}, {
  "value": "ColorSchemeSwitch — kontrollerat läge",
  "id": "colorschemeswitch--kontrollerat-läge",
  "level": 3
}, {
  "value": "Modal — förbättrad fokushantering",
  "id": "modal--förbättrad-fokushantering",
  "level": 3
}, {
  "value": "Tag — förbättrad tokenarkitektur",
  "id": "tag--förbättrad-tokenarkitektur",
  "level": 3
}, {
  "value": "DateField, TimeField",
  "id": "datefield-timefield",
  "level": 3
}, {
  "value": "Övriga tillägg",
  "id": "övriga-tillägg",
  "level": 3
}, {
  "value": "🩹 Fixar",
  "id": "-fixar",
  "level": 2
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
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Den här posten samlar det viktigaste sedan 17.10.0 — ett nytt layoutpaket, fyra nya komponenter och en hel del förbättringar."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-midas-dslayout--nu-i-beta",
      children: "📦 @midas-ds/layout — nu i beta"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "@midas-ds/layout"
      }), " är nu officiellt tillgängligt och redo att börja användas. Det ersätter ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Layout"
      }), " från ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "@midas-ds/components"
      }), " med ett komponentbaserat API — du sätter ihop strukturen med JSX i stället för att konfigurera en enda stor komponent via props."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import {\n  Layout, LayoutContent, Main,\n  Header, HeaderActions, HeaderAction,\n  Sidebar, Navigation, NavigationLink,\n  Navbar,\n} from '@midas-ds/layout'\n\n<Layout>\n  <Header>\n    <HeaderActions>\n      <HeaderAction icon={<User />}>Anna Andersson</HeaderAction>\n    </HeaderActions>\n  </Header>\n\n  <LayoutContent>\n    <Sidebar title='Min applikation'>\n      <Navigation>\n        <NavigationLink href='/' icon={<House />} isActive>\n          Hem\n        </NavigationLink>\n      </Navigation>\n    </Sidebar>\n    <Main>{/* ditt innehåll */}</Main>\n  </LayoutContent>\n\n  <Navbar>\n    <Navigation>\n      <NavigationLink href='/' icon={<House />} isActive>\n        Hem\n      </NavigationLink>\n    </Navigation>\n  </Navbar>\n</Layout>\n"
      })
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Paketet är redo att ta i bruk — men räkna med att API, design och UX kan förändras under arbetets gång. Vi tar gärna emot feedback."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @midas-ds/layout\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Se ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "/dev/layout",
        children: "dokumentationen"
      }), " och ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "/dev/layout/migration",
        children: "migrationsguiden"
      }), " för mer information."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "vad-händer-med-gamla-layout",
      children: "Vad händer med gamla Layout?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Layout"
      }), " från ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "@midas-ds/components"
      }), " fortsätter att fungera, men kommer inte att få nya funktioner. Nya projekt bör använda ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "@midas-ds/layout"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "panel",
      children: "Panel"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Panel"
      }), " är en ny komponent i ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "@midas-ds/layout"
      }), " för detaljvyer och sidopaneler. Den stöder två lägen:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "overlay"
        }), " — öppnar som ett lager ovanpå innehållet"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "push"
        }), " — skjuter undan innehållet och tar upp plats i layouten"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Panel, PanelHeader, PanelContent } from '@midas-ds/layout'\n\n<Panel id='details' variant='push'>\n  <PanelHeader>Detaljer</PanelHeader>\n  <PanelContent>...</PanelContent>\n</Panel>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "sidebar-animationer",
      children: "Sidebar-animationer"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Sidomenyn animerar nu titeln och navigationsrubrikerna mjukt vid kollaps och expansion."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-ny-komponent-timefield",
      children: "🆕 Ny komponent: TimeField"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "/components/timefield",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "TimeField"
        })
      }), " är en ny komponent för att mata in klockslag. Den delar API och stil med ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "DateField"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { TimeField } from '@midas-ds/components'\n\n<TimeField label='Starttid' />\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-nya-funktioner",
      children: "🚀 Nya funktioner"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "card--cardheader-och-cardbody",
      children: "Card — CardHeader och CardBody"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Card"
      }), " har fått ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "CardHeader"
      }), " och ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "CardBody"
      }), " som ersätter de gamla slot-baserade mönstren. Det gamla API", ":et", " är markerat som deprecated."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "// Före\n<Card heading='Rubrik'>Innehåll</Card>\n\n// Efter\n<Card>\n  <CardHeader>Rubrik</CardHeader>\n  <CardBody>Innehåll</CardBody>\n</Card>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "colorschemeswitch--kontrollerat-läge",
      children: "ColorSchemeSwitch — kontrollerat läge"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "ColorSchemeSwitch"
      }), " stöder nu kontrollerat läge via ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "scheme"
      }), " och ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onSchemeChange"
      }), ". Använd det när du vill spara valet externt, t.ex. i ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "localStorage"
      }), " eller i serverstatus."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "const [scheme, setScheme] = useState<ColorScheme>('light dark')\n\n<ColorSchemeSwitch\n  scheme={scheme}\n  onSchemeChange={setScheme}\n/>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "modal--förbättrad-fokushantering",
      children: "Modal — förbättrad fokushantering"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Fokusringen visas nu korrekt på dialogen vid tangentbordsnavigering."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "tag--förbättrad-tokenarkitektur",
      children: "Tag — förbättrad tokenarkitektur"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Tag-komponentens färgtokens har fått dedikerade primitiver i temat."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "datefield-timefield",
      children: "DateField, TimeField"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Båda är nu wrappade i ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "forwardRef"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "övriga-tillägg",
      children: "Övriga tillägg"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "ComboBox:"
        }), " Ny prop ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "listBoxProps"
        }), " för att skicka props direkt till listrutan."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Select:"
        }), " Ny prop ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "popoverProps"
        }), " för att skicka props till popoverkontainern."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Select:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "SelectAll"
        }), " nollställer nu valideringsstatus korrekt."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Radio, Accordion:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "children"
        }), " kan nu vara en funktion (render prop)."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "-fixar",
      children: "🩹 Fixar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Link:"
        }), " Nytt visuellt dolt beskrivande label på ikoner för \"öppnas i nytt fönster\" och \"ladda ner\" — förbättrar tillgängligheten för skärmläsare."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Accordion:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "type"
        }), "-prop ignoreras nu korrekt när ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "isContained"
        }), " är false."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Flera komponenter:"
        }), " Hover- och tryckstilar är förbättrade på pekskärmar — ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: ":hover"
        }), " ersatt med ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "[data-hovered]"
        }), " och hover-regler wrappade i ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "@media (hover: hover)"
        }), ". Berörda komponenter: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Checkbox"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Card"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Select"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Calendar"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "DateField"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ListBox"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "LinkButton"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Link"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Table:"
        }), " Sorteringsikonen visas nu vid låg opacitet på pekenheter och uppfyller WCAG-kontrastkrav."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Select, ComboBox:"
        }), " Listrutan har nu en relativ maxhöjd och scrollar korrekt i trånga layouter."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "SearchField:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "inputMode=\"search\""
        }), " satt som standard."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Se alla förändringar i detalj på changelog:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.11.0",
          children: "components@v17.11.0"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.12.0",
          children: "components@v17.12.0"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.13.0",
          children: "components@v17.13.0"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.14.0",
          children: "components@v17.14.0"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.15.0",
          children: "components@v17.15.0"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/components%40v17.16.0",
          children: "components@v17.16.0"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%400.0.44",
          children: "layout@v0.0.44"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%400.1.0",
          children: "layout@v0.1.0"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas/releases/tag/layout%400.2.0",
          children: "layout@v0.2.0"
        })
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 96431
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/pr-preview/pr-1213/release-notes/17.11.0","source":"@site/blog/release-notes/17.11.0.mdx","title":"Release 17.11–17.16","description":"Den här posten samlar det viktigaste sedan 17.10.0 — ett nytt layoutpaket, fyra nya komponenter och en hel del förbättringar.","date":"2026-04-09T00:00:00.000Z","tags":[{"inline":true,"label":"release-notes","permalink":"/pr-preview/pr-1213/release-notes/tags/release-notes"},{"inline":true,"label":"v17","permalink":"/pr-preview/pr-1213/release-notes/tags/v-17"}],"readingTime":3.2,"hasTruncateMarker":true,"authors":[{"name":"Midas","title":"Midas Core Team","utl":"https://github.com/migrationsverket/midas","imageURL":"https://avatars.githubusercontent.com/u/110020437?s=200&v=4","key":"midas","page":null}],"frontMatter":{"slug":"17.11.0","title":"Release 17.11–17.16","authors":"midas","tags":["release-notes","v17"],"date":"2026-04-09T00:00:00.000Z"},"unlisted":false,"nextItem":{"title":"Release 17.10.0","permalink":"/pr-preview/pr-1213/release-notes/17.10.0"}}');

/***/ }

}]);