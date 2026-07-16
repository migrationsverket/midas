"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[9856],{

/***/ 48097
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
const site_docs_dev_layout_components_header_mdx_019_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/layout/components/header","title":"Header","description":"Sidhuvud med stöd för logotyp, systemnamn, åtgärdsknappar och mobilmeny.","source":"@site/docs/dev/layout/components/header.mdx","sourceDirName":"dev/layout/components","slug":"/dev/layout/components/header","permalink":"/pr-preview/pr-1308/dev/layout/components/header","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Header","description":"Sidhuvud med stöd för logotyp, systemnamn, åtgärdsknappar och mobilmeny."},"sidebar":"sideBar","previous":{"title":"Migrationsguide","permalink":"/pr-preview/pr-1308/dev/layout/migration"},"next":{"title":"Layout, LayoutContent & Main","permalink":"/pr-preview/pr-1308/dev/layout/components/layout"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(86025);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.js
var user = __webpack_require__(48686);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/settings.js
var settings = __webpack_require__(80964);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-question-mark.js
var circle_question_mark = __webpack_require__(93610);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bell.js
var bell = __webpack_require__(49436);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/ellipsis.js
var ellipsis = __webpack_require__(54718);
// EXTERNAL MODULE: ./node_modules/@react-spectrum/utils/dist/useMediaQuery.mjs
var useMediaQuery = __webpack_require__(15886);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Menu.mjs + 7 modules
var Menu = __webpack_require__(6484);
// EXTERNAL MODULE: ./packages/components/src/menu/MenuPopover.tsx
var MenuPopover = __webpack_require__(51950);
// EXTERNAL MODULE: ./packages/components/src/menu/Menu.tsx
var menu_Menu = __webpack_require__(86401);
// EXTERNAL MODULE: ./packages/components/src/menu/MenuItem.tsx
var MenuItem = __webpack_require__(1328);
// EXTERNAL MODULE: ./packages/layout/src/header/Header.tsx + 1 modules
var Header = __webpack_require__(46468);
// EXTERNAL MODULE: ./packages/layout/src/header/header-logo/HeaderLogo.tsx + 1 modules
var HeaderLogo = __webpack_require__(34262);
// EXTERNAL MODULE: ./packages/layout/src/header/header-title/HeaderTitle.tsx + 1 modules
var HeaderTitle = __webpack_require__(34842);
// EXTERNAL MODULE: ./packages/layout/src/header/header-actions/HeaderActions.tsx + 1 modules
var HeaderActions = __webpack_require__(28911);
// EXTERNAL MODULE: ./packages/layout/src/header/header-action/HeaderAction.tsx + 1 modules
var HeaderAction = __webpack_require__(53467);
;// ./apps/docs/src/components/examples/layout/HeaderExamples.tsx
var collapsibleActions=[{id:'profile',label:'Min profil',icon:/*#__PURE__*/(0,jsx_runtime.jsx)(user/* default */.A,{size:20})},{id:'settings',label:'Inställningar',icon:/*#__PURE__*/(0,jsx_runtime.jsx)(settings/* default */.A,{size:20})},{id:'help',label:'Hjälp',icon:/*#__PURE__*/(0,jsx_runtime.jsx)(circle_question_mark/* default */.A,{size:20})}];var BasicHeaderExample=function BasicHeaderExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",style:{overflow:'hidden',padding:0},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Header/* Header */.Y,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderLogo/* HeaderLogo */.b,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderTitle/* HeaderTitle */.g,{children:"Mitt system"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(HeaderActions/* HeaderActions */.l,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderAction/* HeaderAction */.u,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(bell/* default */.A,{size:20}),children:"Notiser"}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderAction/* HeaderAction */.u,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(user/* default */.A,{size:20}),children:"Min profil"}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderAction/* HeaderAction */.u,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(settings/* default */.A,{size:20}),children:"Inst\xE4llningar"})]})]})});};var OverflowHeaderExample=function OverflowHeaderExample(){var isNarrow=(0,useMediaQuery/* useMediaQuery */.U)('(max-width: 700px)');return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",style:{overflow:'hidden',padding:0},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Header/* Header */.Y,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderLogo/* HeaderLogo */.b,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderTitle/* HeaderTitle */.g,{children:"Mitt system"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(HeaderActions/* HeaderActions */.l,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderAction/* HeaderAction */.u,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(bell/* default */.A,{size:20}),children:"Notiser"}),isNarrow?/*#__PURE__*/(0,jsx_runtime.jsxs)(Menu/* MenuTrigger */.cQ,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderAction/* HeaderAction */.u,{"aria-label":"Fler alternativ",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(ellipsis/* default */.A,{size:20})}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuPopover/* MenuPopover */.b,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(menu_Menu/* Menu */.W,{children:collapsibleActions.map(function(action){return/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* MenuItem */.D,{id:action.id,children:action.label},action.id);})})})]}):collapsibleActions.map(function(action){return/*#__PURE__*/(0,jsx_runtime.jsx)(HeaderAction/* HeaderAction */.u,{icon:action.icon,children:action.label},action.id);})]})]})});};var MobileHeaderExample=function MobileHeaderExample(){var url=(0,useBaseUrl/* default */.Ay)('/layout-examples/header-mobile');return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",style:{overflow:'hidden',padding:0,maxWidth:480},children:/*#__PURE__*/(0,jsx_runtime.jsx)("iframe",{title:"Header with mobile menu example",style:{width:'100%',height:72,border:'none',display:'block'},src:url})});};
;// ./apps/docs/docs/dev/layout/components/header.mdx


const frontMatter = {
	title: 'Header',
	description: 'Sidhuvud med stöd för logotyp, systemnamn, åtgärdsknappar och mobilmeny.'
};
const contentTitle = 'Header';

const assets = {

};





const toc = [{
  "value": "Grundläggande exempel",
  "id": "grundläggande-exempel",
  "level": 2
}, {
  "value": "Med MobileMenu",
  "id": "med-mobilemenu",
  "level": 2
}, {
  "value": "Overflow-meny för många åtgärder",
  "id": "overflow-meny-för-många-åtgärder",
  "level": 2
}, {
  "value": "HeaderLogo",
  "id": "headerlogo",
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
  "value": "HeaderTitle",
  "id": "headertitle",
  "level": 3
}, {
  "value": "HeaderLogo",
  "id": "headerlogo-1",
  "level": 3
}, {
  "value": "MobileMenu",
  "id": "mobilemenu",
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
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: "Header",
      friendlyName: "Sidhuvud, Applikationshuvud",
      overrideStorybookPath: "?path=/docs/layout-header--docs",
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "header",
        children: "Header"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sidhuvudet innehåller logotyp, systemnamn och åtgärdsknappar. På mobil används ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MobileMenu"
      }), " för att visa navigationen som ett drawer-mönster."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "grundläggande-exempel",
      children: "Grundläggande exempel"
    }), "\n", (0,jsx_runtime.jsx)(BasicHeaderExample, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Bell, Settings, User } from 'lucide-react'\nimport { Header, HeaderAction, HeaderActions, HeaderLogo, HeaderTitle } from '@midas-ds/layout'\n\n<Header>\n  <HeaderLogo />\n  <HeaderTitle>Mitt system</HeaderTitle>\n  <HeaderActions>\n    <HeaderAction icon={<Bell size={20} />}>Notiser</HeaderAction>\n    <HeaderAction icon={<User size={20} />}>Min profil</HeaderAction>\n    <HeaderAction icon={<Settings size={20} />}>Inställningar</HeaderAction>\n  </HeaderActions>\n</Header>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "med-mobilemenu",
      children: "Med MobileMenu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["På smala skärmar (≤ 640px) döljs sidomenyn. Lägg till ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MobileMenu"
      }), " i headern så att mobilanvändare ändå kan nå navigationen."]
    }), "\n", (0,jsx_runtime.jsx)(MobileHeaderExample, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Header, HeaderLogo, HeaderTitle, HeaderActions, HeaderAction, MobileMenu, Navigation, NavigationItem, NavigationLink } from '@midas-ds/layout'\nimport { Bell, House } from 'lucide-react'\n\n<Header>\n  <MobileMenu title='Mitt system'>\n    <Navigation>\n      <NavigationItem>\n        <NavigationLink href='/' icon={<House />} isActive>Hem</NavigationLink>\n      </NavigationItem>\n    </Navigation>\n  </MobileMenu>\n  <HeaderLogo />\n  <HeaderTitle>Mitt system</HeaderTitle>\n  <HeaderActions>\n    <HeaderAction icon={<Bell size={20} />}>Notiser</HeaderAction>\n  </HeaderActions>\n</Header>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MobileMenu"
        }), " renderar ingenting på desktop — den är villkorsstyrd via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "useIsMobileDevice()"
        }), ". Det är säkert att alltid inkludera den i trädet."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overflow-meny-för-många-åtgärder",
      children: "Overflow-meny för många åtgärder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "HeaderActions"
      }), " hanterar inte overflow automatiskt. När din app har många åtgärder och du vill dölja några i en meny på smala skärmar, löser du det med en mediaquery. Det ger full kontroll — rätt breakpoint beror på kombinationen av systemnamn, logotyp och antal knappar."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prova att ändra bredden på fönstret nedan för att se beteendet:"
    }), "\n", (0,jsx_runtime.jsx)(OverflowHeaderExample, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useMediaQuery } from '@react-spectrum/utils'\nimport { Menu, MenuItem, MenuPopover, MenuTrigger } from '@midas-ds/components'\nimport { Bell, MoreHorizontal, Settings, User } from 'lucide-react'\n\nconst collapsibleActions = [\n  { id: 'profile', label: 'Min profil', icon: <User size={20} /> },\n  { id: 'settings', label: 'Inställningar', icon: <Settings size={20} /> },\n]\n\nfunction AppHeader() {\n  // Välj den breakpoint som passar din app\n  const isNarrow = useMediaQuery('(max-width: 700px)')\n\n  return (\n    <Header>\n      <HeaderActions>\n        <HeaderAction icon={<Bell size={20} />}>Notiser</HeaderAction>\n        {isNarrow ? (\n          <MenuTrigger>\n            <HeaderAction aria-label='Fler alternativ' icon={<MoreHorizontal size={20} />} />\n            <MenuPopover>\n              <Menu>\n                {collapsibleActions.map(action => (\n                  <MenuItem key={action.id} id={action.id}>\n                    {action.label}\n                  </MenuItem>\n                ))}\n              </Menu>\n            </MenuPopover>\n          </MenuTrigger>\n        ) : (\n          collapsibleActions.map(action => (\n            <HeaderAction key={action.id} icon={action.icon}>\n              {action.label}\n            </HeaderAction>\n          ))\n        )}\n      </HeaderActions>\n    </Header>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "headerlogo",
      children: "HeaderLogo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hanterar responsiv logotyp automatiskt — visar ikonversionen (", (0,jsx_runtime.jsx)(_components.code, {
        children: "x-small"
      }), ") på mobil och den fullständiga logotypen (", (0,jsx_runtime.jsx)(_components.code, {
        children: "small"
      }), ") på desktop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { HeaderLogo } from '@midas-ds/layout'\n\n<HeaderLogo />\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stöder ", (0,jsx_runtime.jsx)(_components.code, {
        children: "primary"
      }), "-prop från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Logo"
      }), " för att byta till monokrom variant:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<HeaderLogo primary={false} />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vill du länka logotypen till startsidan, wrappa den i din routing-komponent:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "// Vanilla HTML\n<a href='/'><HeaderLogo /></a>\n\n// Next.js\nimport Link from 'next/link'\n<Link href='/'><HeaderLogo /></Link>\n\n// React Router\nimport { Link } from 'react-router-dom'\n<Link to='/'><HeaderLogo /></Link>\n"
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
            children: "Etikett — visas på desktop, döljs som sr-only på mobil"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Alternativt om ", (0,jsx_runtime.jsx)(_components.code, {
              children: "children"
            }), " inte används"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "headertitle",
      children: "HeaderTitle"
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
              children: "children"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ReactNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systemnamnet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "className"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "string"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra CSS-klass"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "headerlogo-1",
      children: "HeaderLogo"
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "primary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "boolean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Monokrom variant om ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mobilemenu",
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
              children: "defaultOpen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "boolean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Okontrollerat starttillstånd"
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



/***/ },

/***/ 13225
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ComponentHeader)
/* harmony export */ });
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74351);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10809);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93574);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42350);
/* harmony import */ var _site_src_components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75575);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74848);
/* eslint-disable @nx/enforce-module-boundaries */var ComponentHeader=function ComponentHeader(_ref){var name=_ref.name,friendlyName=_ref.friendlyName,overrideHeadlessLink=_ref.overrideHeadlessLink,overrideHeadlessLinkTitle=_ref.overrideHeadlessLinkTitle,hideStorybookLink=_ref.hideStorybookLink,overrideStorybookPath=_ref.overrideStorybookPath;var baseUrl=_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay;var componentPath=overrideStorybookPath!=null?overrideStorybookPath:"?path=/docs/components-"+name.toLowerCase()+"--docs";var storybookHost= false?0:baseUrl('/storybook');var storybookLink=storybookHost+"/"+componentPath;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section",{className:"component-header",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_0__/* .Grid */ .x,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .GridItem */ .E,{size:"auto",className:"friendlyName",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b",{children:friendlyName})}),!hideStorybookLink&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_1__/* .LinkButton */ .z,{href:storybookLink,variant:"tertiary",icon:_site_src_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .EmptyIcon */ .F,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_site_src_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .StorybookIcon */ .q,{size:24,color:"#FF4785"}),"Storybook"]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_1__/* .LinkButton */ .z,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,iconPlacement:"left",children:overrideHeadlessLinkTitle?overrideHeadlessLinkTitle:'React Aria'})})]})});};

/***/ },

/***/ 75575
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* reexport */ EmptyIcon),
  q: () => (/* reexport */ StorybookIcon)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/icons/Storybook.tsx
var _excluded=["color","size"];var StorybookIcon=/* @__PURE__ */react.forwardRef(function(_ref,forwardedRef){var _ref$color=_ref.color,color=_ref$color===void 0?'currentColor':_ref$color,_ref$size=_ref.size,size=_ref$size===void 0?20:_ref$size,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{viewBox:"-31.5 0 319 319",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",fill:"#000000",width:size,height:size,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),/*#__PURE__*/(0,jsx_runtime.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("defs",{children:[' ',/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z",id:"path-1",children:' '}),' ']}),' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{children:[' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("mask",{id:"mask-2",fill:"white",children:[' ',/*#__PURE__*/(0,jsx_runtime.jsx)("use",{href:"#path-1",children:" "}),' ']}),' ',/*#__PURE__*/(0,jsx_runtime.jsx)("use",{fill:color,fillRule:"nonzero",href:"#path-1",children:' '}),' ',/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z",fill:"#FFFFFF",fillRule:"nonzero",mask:"url(#mask-2)",children:' '}),' ']}),' ']})]});});
;// ./apps/docs/src/components/icons/Empty.tsx
var EmptyIcon=function EmptyIcon(){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{height:0,width:0});};
;// ./apps/docs/src/components/icons/index.ts


/***/ },

/***/ 54031
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65014);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5933);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1160);
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37195);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86707);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74848);
'use client';var _excluded=["className","fullwidth","icon","iconPlacement","iconSize","isPending","size","variant"];/**
 * Button to perform various actions.
 *
 * @interface ButtonProps
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 *//**
 * @deprecated since v17.0.0 please use `ButtonProps` instead
 */var Button=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(props,ref){var _useContextProps=(0,react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .useContextProps */ .JT)(props,ref,react_aria_components__WEBPACK_IMPORTED_MODULE_2__/* .ButtonContext */ .k),mergedProps=_useContextProps[0],mergedRef=_useContextProps[1];var className=mergedProps.className,fullwidth=mergedProps.fullwidth,IconComponent=mergedProps.icon,iconPlacement=mergedProps.iconPlacement,iconSize=mergedProps.iconSize,isPending=mergedProps.isPending,_mergedProps$size=mergedProps.size,size=_mergedProps$size===void 0?'large':_mergedProps$size,_mergedProps$variant=mergedProps.variant,variant=_mergedProps$variant===void 0?'primary':_mergedProps$variant,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(mergedProps,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$,Object.assign({className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.button,variant==='primary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.primary,variant==='secondary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.secondary,variant==='tertiary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.tertiary,variant==='danger'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.danger,variant==='icon'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.iconBtn,fullwidth&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.fullwidth,size==='medium'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.medium,iconPlacement==='right'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.iconRight,className),ref:mergedRef},rest,{children:(0,react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .composeRenderProps */ .HW)(mergedProps.children,function(children){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[IconComponent&&!isPending&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(IconComponent,{"aria-hidden":true,size:iconSize!=null?iconSize:20}),isPending&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_spinner__WEBPACK_IMPORTED_MODULE_5__/* .Spinner */ .y,{small:true}),children]});})}));});Button.displayName='Button';

/***/ },

/***/ 74351
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38739);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1160);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
var _excluded=["children","isContained","removeMargins"];/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/grid}
 */var Grid=function Grid(_ref){var children=_ref.children,_ref$isContained=_ref.isContained,isContained=_ref$isContained===void 0?false:_ref$isContained,_ref$removeMargins=_ref.removeMargins,removeMargins=_ref$removeMargins===void 0?false:_ref$removeMargins,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",Object.assign({},rest,{className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.container,isContained&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.contained,removeMargins&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.removeMargins,rest.className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.flex,children:children})}));};

/***/ },

/***/ 93574
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ GridItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38739);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1160);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
var _excluded=["children","size","offset"];/**
 * Columns based on display: flex;
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */var GridItem=function GridItem(_ref){var children=_ref.children,size=_ref.size,offset=_ref.offset,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref,_excluded);var offsetClass=offset?"offset-"+offset:'';var sizeClasses=getSizeClasses(size);var offsetClasses=getOffsetClasses(offset);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",Object.assign({},props,{className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.col,_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A[offsetClass],sizeClasses.map(function(cls){return _Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A[cls];}),offsetClasses.map(function(cls){return _Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A[cls];}),props.className),children:children}));};var getSizeClasses=function getSizeClasses(size){if(!size)return[];if(typeof size==='object'){return Object.entries(size).map(function(_ref2){var breakpoint=_ref2[0],value=_ref2[1];return breakpoint==='xs'?"col-"+value:"col-"+breakpoint+"-"+value;});}return["col-"+size];};var getOffsetClasses=function getOffsetClasses(offset){if(!offset)return[];if(typeof offset==='object'){return Object.entries(offset).map(function(_ref3){var breakpoint=_ref3[0],value=_ref3[1];return breakpoint==='xs'?"offset-"+value:"offset-"+breakpoint+"-"+value;});}return["offset-"+offset];};

/***/ },

/***/ 10809
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ LinkButton)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var Link = __webpack_require__(73099);
// EXTERNAL MODULE: ./node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(87979);
;// ./packages/components/src/link-button/LinkButton.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const LinkButton_module = ({"linkButton":"linkButton_DlJV","secondary":"secondary_aNB6","icon":"icon_g3pu","tertiary":"tertiary_tl3f","danger":"danger_qkvT","iconBtn":"iconBtn_Ngss","medium":"medium_St93","iconLeft":"iconLeft_r90N","fullwidth":"fullwidth_yUSG","button":"button_CzNs"});
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
var square_arrow_out_up_right = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.js
var arrow_left = __webpack_require__(90232);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/link-button/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"opensInNewTab":"Opens in new tab"},"sv":{"opensInNewTab":"Öppnas i ny flik"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/link-button/LinkButton.tsx
'use client';var _excluded=["children","variant","fullwidth","icon","iconPlacement","className","as","size"],_excluded2=["icon"];/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */var LinkButton=function LinkButton(_ref){var children=_ref.children,variant=_ref.variant,fullwidth=_ref.fullwidth,customIcon=_ref.icon,iconPlacement=_ref.iconPlacement,className=_ref.className,as=_ref.as,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||Link/* Link */.N;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var getIcon=function getIcon(){if(customIcon)return{icon:customIcon};if(rest.target==='_blank')return{icon:square_arrow_out_up_right/* default */.A,label:strings.format('opensInNewTab')};if(iconPlacement==='left')return{icon:arrow_left/* default */.A};return{icon:arrow_right/* default */.A};};var iconConfig=getIcon();return/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,Object.assign({className:(0,clsx/* default */.A)(LinkButton_module.linkButton,variant==='primary'&&LinkButton_module.primary,variant==='secondary'&&LinkButton_module.secondary,variant==='tertiary'&&LinkButton_module.tertiary,variant==='danger'&&LinkButton_module.danger,variant==='icon'&&LinkButton_module.iconBtn,size==='medium'&&LinkButton_module.medium,fullwidth&&LinkButton_module.fullwidth,iconPlacement==='left'&&LinkButton_module.iconLeft,className)},rest,{children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{className:LinkButton_module.icon,icon:iconConfig.icon,size:20,"aria-hidden":true}),iconConfig.label&&/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:iconConfig.label})]}));};var Icon=function Icon(_ref2){var IconComponent=_ref2.icon,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,Object.assign({},rest));};

/***/ },

/***/ 5031
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ Logo)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
;// ./packages/components/src/logo/Logo.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Logo_module = ({"container":"container_U3H4","noPadding":"noPadding__BF5","logo":"logo_GI7z","primary":"primary_TCiF","dark":"dark_F_Ks","xSmall":"xSmall_IZ4K","small":"small_KAZl","large":"large_iAB3"});
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/logo/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"logotype":"Logotype of the Swedish Migration Agency"},"sv":{"logotype":"Migrationsverkets logotyp"}}');
;// ./packages/components/src/logo/LogoContext.tsx
var LogoContext=/*#__PURE__*/(0,react.createContext)({size:undefined});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/logo/Logo.tsx
var _excluded=["primary","size","padding","className"];var Logo=function Logo(_ref){var _ref2;var _ref$primary=_ref.primary,primary=_ref$primary===void 0?true:_ref$primary,size=_ref.size,_ref$padding=_ref.padding,padding=_ref$padding===void 0?true:_ref$padding,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var context=(0,react.useContext)(LogoContext);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(Logo_module.container,padding===false&&Logo_module.noPadding,className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(SVG,{size:(_ref2=size!=null?size:context.size)!=null?_ref2:'medium',primary:primary})}));};var SVG=function SVG(_ref3){var size=_ref3.size,primary=_ref3.primary;var classNames=(0,clsx/* default */.A)(Logo_module.logo,primary?Logo_module.primary:Logo_module.dark,size==='x-small'&&Logo_module.xSmall,size==='medium'&&Logo_module.medium,size==='large'&&Logo_module.large,size==='small'&&Logo_module.small);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);if(size==='x-small')return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 92",className:classNames,role:"img","aria-hidden":"false",focusable:"false","aria-label":strings.format('logotype'),children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M99.99,91.69c-1.84-1.11-4.05-4.55-4.05-9.46V9.15c0-4.79,1.96-7.25,3.81-8.85h-14.75l-33.91,65.47L12.41.3H0c1.6,1.59,3.93,3.07,3.93,8.23v75.55c0,3.56-2.21,6.51-3.81,7.61h16.34c-1.72-1.22-3.93-4.18-3.93-7.98V25.97l36.24,61.42,33.04-63.26v58.96c0,5.53-2.21,7.61-3.81,8.6h21.99Z"})});return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 112 40",className:classNames,"aria-hidden":"false",focusable:"false","aria-label":strings.format('logotype'),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M97.78,21.61c-7.48-9.73-20.06-16.03-34.32-16.03-13.07,0-24.86,5.27-32.46,13.65,6.56-5.83,15.64-9.44,25.66-9.44,11.37,0,21.52,4.56,28.18,11.83h12.94Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M90.45,12.58C70.67-1.51,41.26,2.77,27.49,21.61h-12.23C30.56-2.89,68.29-7.47,90.45,12.58h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M11.89,37.13c-.22-.13-.48-.53-.48-1.11v-8.58c0-.56.23-.85.45-1.04h-1.73l-3.98,7.69-4.54-7.69H.15c.19.19.46.36.46.97v8.87c0,.42-.26.76-.45.89h1.92c-.2-.14-.46-.49-.46-.94v-6.78l4.25,7.21,3.88-7.43v6.92c0,.65-.26.89-.45,1.01h2.58Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M15.81,26.86c0-.45-.36-.81-.81-.81s-.81.36-.81.81.36.81.81.81.81-.36.81-.81h0ZM16.22,37.13c-.3-.23-.45-.5-.45-1.07v-6.4h-1.98c.37.19.49.58.49,1.17v5.23c0,.48-.09.79-.46,1.07h2.39Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M24.52,30.97c-.04-.33-.17-.68-.37-.95h-1.36c-.29-.26-.87-.58-1.96-.58-1.53,0-2.8.92-2.8,2.58,0,1.02.52,1.86,1.31,2.26-.43.37-1.38.98-1.38,1.61,0,.71.79.99,1.38,1.1-.88.26-1.67.82-1.67,1.59,0,1.14,1.73,1.41,2.64,1.41,1.54,0,3.91-.78,3.91-2.64,0-1.21-1.23-1.49-2.22-1.5-2.42-.06-2.51-.2-2.51-.56,0-.2.42-.68.55-.81.23.03.48.06.71.06,1.76,0,2.93-.94,2.93-2.7,0-.48-.14-.91-.29-1.11.12-.04.25-.04.37-.04.27,0,.55.12.76.27h0ZM22.27,32.21c0,.79-.37,1.61-1.36,1.61-1.07,0-1.47-1.21-1.47-2.09,0-.95.5-1.57,1.31-1.57,1.2,0,1.51,1.25,1.51,2.05h0ZM22.89,37.92c0,.76-.82,1.31-1.93,1.31-.59,0-1.7-.3-1.69-1.15,0-.45.26-.74.59-.99l1.96.04c.5.01,1.07.1,1.07.79h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M30.11,31.22l-.23-1.63c-.2-.1-.43-.14-.65-.14-.85,0-1.46.68-1.79,1.37v-1.15h-1.96c.45.27.48.76.48,1.14v5.19c0,.58-.1.89-.45,1.14h2.35c-.36-.29-.42-.63-.42-1.12v-4.27c.22-.58.78-1.04,1.43-1.04.46,0,.97.26,1.24.52h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M36.87,37.13c-.37-.33-.43-.59-.43-1.25v-3.89c0-2.21-1.43-2.55-2.8-2.55-.61,0-1.67.22-2.03.42-.2.4-.3,1.24-.4,1.67.46-.56,1.27-1.37,2.39-1.37,1.18,0,1.36.82,1.36,1.7v.39l-2.21.76c-1.04.36-1.87,1.08-1.87,2.26,0,1.31.88,2.08,2.15,2.08.87,0,1.46-.43,1.93-.94v.72h1.92ZM34.95,35.62c-.26.32-.74.85-1.37.85-.75,0-1.18-.79-1.18-1.54,0-.71.35-1.15.89-1.37l1.66-.63v2.7h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M42.58,36.15c-.29.27-.71.46-1.11.46-.87,0-1.07-.98-1.07-1.66v-4.51h.85c.43,0,.94.13,1.33.35l-.17-1.12h-2v-1.76c-.68.95-1.54,1.96-2.58,2.54h1.1v4.43c0,1.43.32,2.47,1.95,2.47.48,0,.98-.1,1.38-.36.14-.25.25-.55.33-.82h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M45.63,26.86c0-.45-.36-.81-.81-.81s-.81.36-.81.81.36.81.81.81.81-.36.81-.81h0ZM46.04,37.13c-.3-.23-.45-.5-.45-1.07v-6.4h-1.98c.37.19.49.58.49,1.17v5.23c0,.48-.09.79-.46,1.07h2.39Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M54.96,33.37c0-2.06-1.3-3.95-3.5-3.95s-3.84,1.76-3.84,4.01c0,2.06,1.28,3.95,3.49,3.95s3.85-1.76,3.85-4.01h0ZM53.43,34.04c0,1.27-.52,2.57-1.86,2.57-1.79,0-2.42-2.44-2.42-3.86,0-1.21.48-2.57,1.87-2.57,1.79,0,2.41,2.44,2.41,3.86h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M63.37,37.13c-.27-.22-.45-.42-.45-1.11v-3.94c0-1.63-.39-2.64-2.18-2.64-1.01,0-1.79.56-2.38,1.12v-.91h-1.98c.3.17.49.46.49,1.05v5.33c0,.59-.14.88-.48,1.08h2.39c-.23-.23-.43-.37-.43-1.17v-4.4c.32-.45,1.07-1.24,1.85-1.24,1.01,0,1.23,1.01,1.23,1.8v3.95c0,.74-.26.87-.46,1.05h2.39Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M69.79,35.2c0-2.21-3.42-2.71-3.42-4.07,0-.75.71-.98,1.34-.98s1.33.29,1.74.81l-.07-1.18c-.46-.17-1.11-.35-1.69-.35-1.44,0-2.68.63-2.68,1.89,0,2.36,3.46,2.68,3.46,4.25,0,.79-.62,1.05-1.31,1.05-1.01,0-1.86-.46-2.52-1.21v.1c0,.4-.03.99.3,1.27.53.43,1.53.56,2.18.56,1.36,0,2.67-.62,2.67-2.15h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M77.98,29.66h-1.43c.13.1.11.56-.19,1.33l-1.86,4.72-1.87-4.7c-.26-.65-.32-1.15-.16-1.34h-2.06c.19.1.49.85.82,1.67l2.31,5.8h1.31l2.35-5.97c.32-.81.56-1.36.78-1.5h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M84.91,33.54v-.23c0-1.92-.62-3.88-2.88-3.88s-3.56,2.02-3.56,4.11,1.41,3.81,3.58,3.81c.78,0,1.62-.17,2.13-.45.32-.35.49-.79.59-1.27-.69.5-1.41.84-2.31.84-1.49,0-2.35-1.57-2.38-2.88l4.83-.04h0ZM83.34,32.88c-1.1.09-2.16.1-3.27.1.01-.78.29-2.83,1.7-2.83,1.33,0,1.57,1.72,1.57,2.73h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M90.95,31.22l-.23-1.63c-.2-.1-.43-.14-.65-.14-.85,0-1.46.68-1.79,1.37v-1.15h-1.96c.45.27.48.76.48,1.14v5.19c0,.58-.1.89-.45,1.14h2.35c-.36-.29-.42-.63-.42-1.12v-4.27c.22-.58.78-1.04,1.43-1.04.46,0,.97.26,1.24.52h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M99.79,37.16c-2.26-.37-2.49-4.04-4.7-4.04l2.62-2.8c.22-.23.5-.48.75-.66h-1.77c.14.14.13.39-.13.66l-2.65,2.83v-7.07h-1.98c.33.2.49.56.49,1.01v9.01c0,.58-.22.81-.46,1.02h2.35c-.26-.25-.4-.49-.4-1.02v-2.57c.27,0,.62.13.82.26,1.28.82,1.95,3.11,2.67,3.45.14.07.94.1,1.14.1.45,0,.84-.03,1.25-.19h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M106.3,33.54v-.23c0-1.92-.62-3.88-2.88-3.88s-3.56,2.02-3.56,4.11,1.41,3.81,3.58,3.81c.78,0,1.62-.17,2.13-.45.32-.35.49-.79.59-1.27-.69.5-1.41.84-2.31.84-1.49,0-2.35-1.57-2.38-2.88l4.83-.04h0ZM104.73,32.88c-1.1.09-2.16.1-3.27.1.01-.78.29-2.83,1.7-2.83,1.33,0,1.57,1.72,1.57,2.73h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M111.85,36.15c-.29.27-.71.46-1.11.46-.86,0-1.07-.98-1.07-1.66v-4.51h.85c.43,0,.94.13,1.33.35l-.17-1.12h-2v-1.76c-.68.95-1.54,1.96-2.58,2.54h1.1v4.43c0,1.43.32,2.47,1.95,2.47.48,0,.98-.1,1.38-.36.14-.25.25-.55.33-.82h0Z"})]});};

/***/ },

/***/ 86401
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6484);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1160);
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77121);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
var _excluded=["className","size"];var Menu=function Menu(_ref){var className=_ref.className,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_1__/* .Menu */ .W1,Object.assign({className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(className,_Menu_module_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.menu,size==='medium'&&_Menu_module_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.medium)},rest));};

/***/ },

/***/ 1328
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ MenuItem)
/* harmony export */ });
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1160);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6484);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45773);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87677);
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77121);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
var MenuItem=function MenuItem(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_1__/* .MenuItem */ .Dr,Object.assign({},props,{textValue:props.textValue||(typeof props.children==='string'?props.children:undefined),className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.menuItem,props.className),children:function children(renderProps){var children=props.children;var selectionMode=renderProps.selectionMode,isSelected=renderProps.isSelected,hasSubmenu=renderProps.hasSubmenu;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[selectionMode!=='none'&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{size:16,className:_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.checkMark,"data-selected":isSelected||undefined}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.mainContent,children:typeof children==='function'?children(renderProps):children}),hasSubmenu&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{size:20})]});}}));};

/***/ },

/***/ 51950
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ MenuPopover)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1160);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21416);
/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77121);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
var _excluded=["className"];var MenuPopover=function MenuPopover(_ref){var className=_ref.className,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_2__/* .Popover */ .A,Object.assign({className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(className,_Menu_module_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.menuPopover),offset:4},rest));};

/***/ },

/***/ 37195
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ Spinner)
});

;// ./packages/components/src/spinner/Spinner.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Spinner_module = ({"container":"container_ytPE","spinner":"spinner_eR4D","rotating":"rotating_m95R","large":"large_hgjo"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(8723);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/spinner/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"loadingPleaseWait":"Loading, please wait..."},"sv":{"loadingPleaseWait":"Laddar, vänligen vänta..."}}');
// EXTERNAL MODULE: ./node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(87979);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/spinner/Spinner.tsx
var Spinner=function Spinner(_ref){var small=_ref.small,color=_ref.color,className=_ref.className;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(Spinner_module.container,className),role:"status",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(loader_circle/* default */.A,{className:(0,clsx/* default */.A)(Spinner_module.spinner,!small&&Spinner_module.large),size:small?20:96,strokeWidth:small?2:8,absoluteStrokeWidth:true,color:color}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:strings.format('loadingPleaseWait')})]});};

/***/ },

/***/ 46468
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* binding */ Header)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/layout/src/header/Header.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Header_module = ({"header":"header_cbgi"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/header/Header.tsx
'use client';var _excluded=["className"];var Header=function Header(_ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("header",Object.assign({className:(0,clsx/* default */.A)(className,Header_module.header)},rest));};

/***/ },

/***/ 53467
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ HeaderAction)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
;// ./packages/layout/src/header/header-action/HeaderAction.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const HeaderAction_module = ({"headerAction":"headerAction_l3SX","label":"label_Yxp2"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/header/header-action/HeaderAction.tsx
'use client';var _excluded=["children","icon","className"];var HeaderAction=/*#__PURE__*/(0,react.forwardRef)(function(_ref,ref){var children=_ref.children,icon=_ref.icon,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);if(!children&&!props['aria-label']&&"production"!=='production')// removed by dead control flow
{}return/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,Object.assign({ref:ref,size:"medium",variant:"tertiary",className:(0,clsx/* default */.A)(HeaderAction_module.headerAction,className)},props,{children:(0,utils/* composeRenderProps */.HW)(children,function(children){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[icon,typeof children!=='undefined'&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:HeaderAction_module.label,children:children})]});})}));});HeaderAction.displayName='HeaderAction';

/***/ },

/***/ 28911
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ HeaderActions)
});

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/layout/src/header/header-actions/HeaderActions.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const HeaderActions_module = ({"headerActions":"headerActions_r0j7"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/header/header-actions/HeaderActions.tsx
'use client';var HeaderActions=function HeaderActions(_ref){var children=_ref.children,className=_ref.className;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(HeaderActions_module.headerActions,className),children:children});};

/***/ },

/***/ 34262
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ HeaderLogo)
});

// EXTERNAL MODULE: ./packages/components/src/logo/Logo.tsx + 3 modules
var Logo = __webpack_require__(5031);
;// ./packages/layout/src/header/header-logo/HeaderLogo.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const HeaderLogo_module = ({"mobile":"mobile_uWfK","desktop":"desktop_I1ZT"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/header/header-logo/HeaderLogo.tsx
'use client';var HeaderLogo=function HeaderLogo(_ref){var primary=_ref.primary;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Logo/* Logo */.g,{size:"x-small",primary:primary,padding:false,className:HeaderLogo_module.mobile}),/*#__PURE__*/(0,jsx_runtime.jsx)(Logo/* Logo */.g,{size:"small",primary:primary,padding:false,className:HeaderLogo_module.desktop})]});};

/***/ },

/***/ 34842
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ HeaderTitle)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/layout/src/header/header-title/HeaderTitle.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const HeaderTitle_module = ({"headerTitle":"headerTitle_bJCT"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/layout/src/header/header-title/HeaderTitle.tsx
var _excluded=["className"];var HeaderTitle=function HeaderTitle(_ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("span",Object.assign({className:(0,clsx/* default */.A)(HeaderTitle_module.headerTitle,className)},rest));};

/***/ },

/***/ 90232
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowLeft)
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
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("arrow-left", __iconNode);


//# sourceMappingURL=arrow-left.js.map


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

/***/ 49436
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Bell)
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
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("bell", __iconNode);


//# sourceMappingURL=bell.js.map


/***/ },

/***/ 42350
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BookText)
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
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["path", { d: "M8 11h8", key: "vwpz6n" }],
  ["path", { d: "M8 7h6", key: "1f0q6e" }]
];
const BookText = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("book-text", __iconNode);


//# sourceMappingURL=book-text.js.map


/***/ },

/***/ 45773
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Check)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("check", __iconNode);


//# sourceMappingURL=check.js.map


/***/ },

/***/ 87677
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ChevronRight)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("chevron-right", __iconNode);


//# sourceMappingURL=chevron-right.js.map


/***/ },

/***/ 93610
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CircleQuestionMark)
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
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleQuestionMark = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("circle-question-mark", __iconNode);


//# sourceMappingURL=circle-question-mark.js.map


/***/ },

/***/ 54718
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Ellipsis)
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
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
];
const Ellipsis = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ellipsis", __iconNode);


//# sourceMappingURL=ellipsis.js.map


/***/ },

/***/ 8723
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LoaderCircle)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("loader-circle", __iconNode);


//# sourceMappingURL=loader-circle.js.map


/***/ },

/***/ 80964
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Settings)
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
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("settings", __iconNode);


//# sourceMappingURL=settings.js.map


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

/***/ 48686
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ User)
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
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("user", __iconNode);


//# sourceMappingURL=user.js.map


/***/ },

/***/ 38739
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container_uCKZ","removeMargins":"removeMargins_rQ9U","contained":"contained_R9lB","flex":"flex_LQ20","fluid":"fluid_Y1tE","col":"col_tmG6","col-1":"col-1_OVvW","col-2":"col-2_XfVI","col-3":"col-3_KxqE","col-quarter":"col-quarter_eUut","col-4":"col-4_Ovxr","col-third":"col-third_FUaF","col-5":"col-5_uIyd","col-6":"col-6_i8WR","col-half":"col-half_GzSn","col-7":"col-7_devX","col-8":"col-8_tlAZ","col-9":"col-9_Nbjm","col-10":"col-10_rwyP","col-11":"col-11_ShOw","col-12":"col-12_eQeJ","col-full":"col-full_K_XT","col-auto":"col-auto_nMhH","col-grow":"col-grow_TBON","col-xs-1":"col-xs-1_Bg_O","col-xs-2":"col-xs-2_UhmL","col-xs-3":"col-xs-3_mEvh","col-xs-quarter":"col-xs-quarter_mtoI","col-xs-4":"col-xs-4_Uv5i","col-xs-third":"col-xs-third_AHrM","col-xs-5":"col-xs-5_Gdnm","col-xs-6":"col-xs-6_z366","col-xs-half":"col-xs-half_vH6m","col-xs-7":"col-xs-7_HNwO","col-xs-8":"col-xs-8_Vwih","col-xs-9":"col-xs-9_vfTc","col-xs-10":"col-xs-10_wJWt","col-xs-11":"col-xs-11_KTEA","col-xs-12":"col-xs-12_TaE_","col-xs-full":"col-xs-full_enWi","col-xs-auto":"col-xs-auto_G2jj","col-xs-grow":"col-xs-grow_kY1W","col-sm-1":"col-sm-1_YvIs","col-sm-2":"col-sm-2_NSCq","col-sm-3":"col-sm-3_cJ0H","col-sm-quarter":"col-sm-quarter_WWBJ","col-sm-4":"col-sm-4_dtZx","col-sm-third":"col-sm-third_g3dG","col-sm-5":"col-sm-5_C87q","col-sm-6":"col-sm-6_SkMd","col-sm-half":"col-sm-half_QX4f","col-sm-7":"col-sm-7_wa6s","col-sm-8":"col-sm-8_zH5I","col-sm-9":"col-sm-9_ym4Z","col-sm-10":"col-sm-10_jE4j","col-sm-11":"col-sm-11_Va2g","col-sm-12":"col-sm-12_BgjD","col-sm-full":"col-sm-full_Nb6O","col-sm-auto":"col-sm-auto_Qj4m","col-sm-grow":"col-sm-grow_mAH5","col-md-1":"col-md-1_Zeqd","col-md-2":"col-md-2_DR6K","col-md-3":"col-md-3_OZK7","col-md-quarter":"col-md-quarter_AmxM","col-md-4":"col-md-4_NxEu","col-md-third":"col-md-third_J4Ja","col-md-5":"col-md-5_cBkY","col-md-6":"col-md-6_it5t","col-md-half":"col-md-half_aEv_","col-md-7":"col-md-7__sAT","col-md-8":"col-md-8_WfW7","col-md-9":"col-md-9_orzQ","col-md-10":"col-md-10_wh5t","col-md-11":"col-md-11_Wsgq","col-md-12":"col-md-12_gZQg","col-md-full":"col-md-full_Ow4Z","col-md-auto":"col-md-auto_e67j","col-md-grow":"col-md-grow_quHq","col-lg-1":"col-lg-1_e1au","col-lg-2":"col-lg-2_fUsj","col-lg-3":"col-lg-3_EhhM","col-lg-quarter":"col-lg-quarter_SI9I","col-lg-4":"col-lg-4_VuKz","col-lg-third":"col-lg-third_Lf2A","col-lg-5":"col-lg-5_TF5r","col-lg-6":"col-lg-6_E93v","col-lg-half":"col-lg-half_ZdoE","col-lg-7":"col-lg-7_L5CO","col-lg-8":"col-lg-8_ZBHN","col-lg-9":"col-lg-9_TbUu","col-lg-10":"col-lg-10_Tsqu","col-lg-11":"col-lg-11_Eg8x","col-lg-12":"col-lg-12_eNvi","col-lg-full":"col-lg-full_SaRE","col-lg-auto":"col-lg-auto_fNRO","col-lg-grow":"col-lg-grow_XTrt","col-xl-1":"col-xl-1_BRna","col-xl-2":"col-xl-2_eGSK","col-xl-3":"col-xl-3_RrW2","col-xl-quarter":"col-xl-quarter_V_Yw","col-xl-4":"col-xl-4_R4AZ","col-xl-third":"col-xl-third_W3hT","col-xl-5":"col-xl-5_k7Gx","col-xl-6":"col-xl-6_xZyb","col-xl-half":"col-xl-half_V9xE","col-xl-7":"col-xl-7_lJfg","col-xl-8":"col-xl-8_zErQ","col-xl-9":"col-xl-9_oYwQ","col-xl-10":"col-xl-10_cLTa","col-xl-11":"col-xl-11_xqWK","col-xl-12":"col-xl-12_Vrsf","col-xl-full":"col-xl-full_vVSm","col-xl-auto":"col-xl-auto_YBap","col-xl-grow":"col-xl-grow_YMBn","offset-1":"offset-1_ZQkJ","offset-2":"offset-2_Reek","offset-3":"offset-3_SDkl","offset-quarter":"offset-quarter_ho5e","offset-4":"offset-4_L0XB","offset-third":"offset-third_dE8e","offset-5":"offset-5_Mz95","offset-6":"offset-6_Zp68","offset-half":"offset-half_nGtc","offset-7":"offset-7_ZApX","offset-8":"offset-8_UZTZ","offset-9":"offset-9_FiKS","offset-10":"offset-10_hN9R","offset-11":"offset-11_cqgv","offset-auto":"offset-auto_ZBrI","offset-xs-1":"offset-xs-1__ZrT","offset-xs-2":"offset-xs-2_WySR","offset-xs-3":"offset-xs-3_u9Tb","offset-xs-quarter":"offset-xs-quarter_Pd1o","offset-xs-4":"offset-xs-4_Bibg","offset-xs-third":"offset-xs-third_CeeW","offset-xs-5":"offset-xs-5_OgED","offset-xs-6":"offset-xs-6_ihSu","offset-xs-half":"offset-xs-half_Vrdz","offset-xs-7":"offset-xs-7_TtZQ","offset-xs-8":"offset-xs-8_Ftc2","offset-xs-9":"offset-xs-9_HptZ","offset-xs-10":"offset-xs-10_umjb","offset-xs-11":"offset-xs-11_Suix","offset-xs-auto":"offset-xs-auto_fxe8","offset-sm-1":"offset-sm-1_knSM","offset-sm-2":"offset-sm-2_zWxo","offset-sm-3":"offset-sm-3_oqp6","offset-sm-quarter":"offset-sm-quarter_Nav1","offset-sm-4":"offset-sm-4_EvUX","offset-sm-third":"offset-sm-third_tGgh","offset-sm-5":"offset-sm-5_raNi","offset-sm-6":"offset-sm-6_KTA8","offset-sm-half":"offset-sm-half_ab81","offset-sm-7":"offset-sm-7_duQl","offset-sm-8":"offset-sm-8_uRxp","offset-sm-9":"offset-sm-9_AqYl","offset-sm-10":"offset-sm-10_Wt6J","offset-sm-11":"offset-sm-11_yAYq","offset-sm-auto":"offset-sm-auto_FAp6","offset-md-1":"offset-md-1_OpgB","offset-md-2":"offset-md-2_U24n","offset-md-3":"offset-md-3_YxnQ","offset-md-quarter":"offset-md-quarter_y53T","offset-md-4":"offset-md-4_ZaOC","offset-md-third":"offset-md-third_HZWP","offset-md-5":"offset-md-5_KVFL","offset-md-6":"offset-md-6_bZvL","offset-md-half":"offset-md-half_yilA","offset-md-7":"offset-md-7_fs04","offset-md-8":"offset-md-8_QmYF","offset-md-9":"offset-md-9_QoVc","offset-md-10":"offset-md-10_OrE0","offset-md-11":"offset-md-11_reKz","offset-md-auto":"offset-md-auto_ETdh","offset-lg-1":"offset-lg-1_zi3j","offset-lg-2":"offset-lg-2_YgjU","offset-lg-3":"offset-lg-3_CHdw","offset-lg-quarter":"offset-lg-quarter_Chor","offset-lg-4":"offset-lg-4_NOCF","offset-lg-third":"offset-lg-third_LTbL","offset-lg-5":"offset-lg-5_dGzM","offset-lg-6":"offset-lg-6_kXXi","offset-lg-half":"offset-lg-half_vFHN","offset-lg-7":"offset-lg-7_jIth","offset-lg-8":"offset-lg-8_T0Jx","offset-lg-9":"offset-lg-9_mYmL","offset-lg-10":"offset-lg-10_clJ6","offset-lg-11":"offset-lg-11_zFW2","offset-lg-auto":"offset-lg-auto_W3q4","offset-xl-1":"offset-xl-1_pRWH","offset-xl-2":"offset-xl-2_FX3q","offset-xl-3":"offset-xl-3_P8xx","offset-xl-quarter":"offset-xl-quarter_RLTy","offset-xl-4":"offset-xl-4_n7Vy","offset-xl-third":"offset-xl-third_w0fc","offset-xl-5":"offset-xl-5_vC_8","offset-xl-6":"offset-xl-6_BvQ2","offset-xl-half":"offset-xl-half_HQ16","offset-xl-7":"offset-xl-7_m1bv","offset-xl-8":"offset-xl-8_FJ1u","offset-xl-9":"offset-xl-9_oAbC","offset-xl-10":"offset-xl-10_wwaH","offset-xl-11":"offset-xl-11_HpDF","offset-xl-auto":"offset-xl-auto_Dv5P"});

/***/ },

/***/ 77121
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"menu":"menu_V22E","menuSection":"menuSection_CHG7","medium":"medium_Ooqg","menuItem":"menuItem_xt3h","mainContent":"mainContent_GA8r","checkMark":"checkMark_KYFR","separator":"separator_YUxq","menuPopover":"menuPopover_c4Km dropdownAnimation_MaN2"});

/***/ },

/***/ 15886
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ $3df547e395c4522f$export$32d5543ab307c01)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60415);



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

function $3df547e395c4522f$export$32d5543ab307c01(query) {
    let supportsMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia === 'function';
    let [matches, setMatches] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>supportsMatchMedia ? window.matchMedia(query).matches : false);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!supportsMatchMedia) return;
        let mq = window.matchMedia(query);
        let onChange = (evt)=>{
            setMatches(evt.matches);
        };
        mq.addListener(onChange);
        return ()=>{
            mq.removeListener(onChange);
        };
    }, [
        supportsMatchMedia,
        query
    ]);
    // If in SSR, the media query should never match. Once the page hydrates,
    // this will update and the real value will be returned.
    let isSSR = (0, _react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__/* .useIsSSR */ .wR)();
    return isSSR ? false : matches;
}



//# sourceMappingURL=useMediaQuery.module.js.map


/***/ },

/***/ 73099
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ $4f118338184dc1d9$export$a6c7ac8248d6e38a),
  s: () => (/* binding */ $4f118338184dc1d9$export$e2509388b49734e7)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/openLink.mjs
var openLink = __webpack_require__(43831);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusable.mjs
var useFocusable = __webpack_require__(28940);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/usePress.mjs + 6 modules
var usePress = __webpack_require__(35044);
;// ./node_modules/@react-aria/link/dist/useLink.mjs



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

function $298d61e98472621b$export$dcf14c9974fe2767(props, ref) {
    let { elementType: elementType = 'a', onPress: onPress, onPressStart: onPressStart, onPressEnd: onPressEnd, onClick: onClick, isDisabled: isDisabled, ...otherProps } = props;
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
                var _pressProps_onClick;
                (_pressProps_onClick = pressProps.onClick) === null || _pressProps_onClick === void 0 ? void 0 : _pressProps_onClick.call(pressProps, e);
                (0, openLink/* handleLinkClick */.PJ)(e, router, props.href, props.routerOptions);
            }
        })
    };
}



//# sourceMappingURL=useLink.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria-components/dist/Link.mjs





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



const $4f118338184dc1d9$export$e2509388b49734e7 = /*#__PURE__*/ (0, react.createContext)(null);
const $4f118338184dc1d9$export$a6c7ac8248d6e38a = /*#__PURE__*/ (0, react.forwardRef)(function Link(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $4f118338184dc1d9$export$e2509388b49734e7);
    let elementType = props.href && !props.isDisabled ? 'a' : 'span';
    let { linkProps: linkProps, isPressed: isPressed } = (0, $298d61e98472621b$export$dcf14c9974fe2767)({
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



//# sourceMappingURL=Link.module.js.map


/***/ }

}]);