"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["6321"], {
53352(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_design_patterns_page_layout_header_sidebar_panel_mdx_afe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-page-layout-header-sidebar-panel-mdx-afe.json
var site_docs_design_patterns_page_layout_header_sidebar_panel_mdx_afe_namespaceObject = JSON.parse('{"id":"design-patterns/page-layout/header-sidebar-panel","title":"Applikationer med sidomeny","description":"Detta mönster passar applikationer med flera navigeringsalternativ och ett innehåll som behöver visas på en större skärm.","source":"@site/docs/design-patterns/page-layout/header-sidebar-panel.mdx","sourceDirName":"design-patterns/page-layout","slug":"/design-patterns/page-layout/header-sidebar-panel","permalink":"/pr-preview/pr-1410/design-patterns/page-layout/header-sidebar-panel","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"header-sidebar-panel","title":"Applikationer med sidomeny","sidebar_position":2},"sidebar":"sideBar","previous":{"title":"Applikationer utan huvudmeny","permalink":"/pr-preview/pr-1410/design-patterns/page-layout/header"},"next":{"title":"Mobilorienterade applikationer","permalink":"/pr-preview/pr-1410/design-patterns/page-layout/header-navbar-panel"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/examples/layout/PageLayoutExamples.tsx + 3 modules
var PageLayoutExamples = __webpack_require__(84871);
;// CONCATENATED MODULE: ./apps/docs/docs/design-patterns/page-layout/header-sidebar-panel.mdx


const frontMatter = {
	id: 'header-sidebar-panel',
	title: 'Applikationer med sidomeny',
	sidebar_position: 2
};
const contentTitle = 'Applikationer med sidomeny';

const assets = {

};




const toc = [{
  "value": "Navigation",
  "id": "navigation",
  "level": 2
}, {
  "value": "Exempelkod",
  "id": "exempelkod",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "applikationer-med-sidomeny",
        children: "Applikationer med sidomeny"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detta mönster passar applikationer med flera navigeringsalternativ och ett innehåll som behöver visas på en större skärm."
    }), "\n", (0,jsx_runtime.jsx)(PageLayoutExamples/* .DesktopAppExample */.gt, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigation",
      children: "Navigation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att stödja navigation för alla fönster- och skärmstorlekar måste navigation via ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/layout/header/#mobilemenu",
        children: "MobileMenu"
      }), " alltid inkluderas i trädet. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Sidebar"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MobileMenu"
      }), " visas respektive döljs automatiskt vid brytpunkten 640px. För att undvika kodduplicering rekommenderas att lägga navigationsinnehållet i en delad komponent och använda den till MobileMenu och Sidebar."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exempelkod",
      children: "Exempelkod"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Exempelkoden visar en applikation med bara en Panel. Om applikationen behöver fler paneler används ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/layout/panel/#flera-paneler-med-panelprovider",
        children: "PanelProvider och usePanels-hooken"
      })]
    }), "\n", (0,jsx_runtime.jsx)("style", {
      children: `.snabbstart .theme-code-block { max-height: none; }`
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "snabbstart",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-tsx",
          children: "import {\n  Header,\n  HeaderAction,\n  HeaderActions,\n  HeaderLogo,\n  HeaderTitle,\n  Layout,\n  LayoutContent,\n  Main,\n  Sidebar,\n  Navigation,\n  NavigationItem,\n  NavigationLink,\n  Panel,\n  MobileMenu,\n} from '@midas-ds/layout'\nimport { House, Bell } from 'lucide-react'\nimport { Button } from '@midas-ds/components'\nimport { useState } from 'react'\n\nexport const NavigationContent = () => (\n  <Navigation>\n    <NavigationItem>\n      <NavigationLink\n        href='/'\n        icon={<House />}\n        isActive\n      >\n        Hem\n      </NavigationLink>\n    </NavigationItem>\n    {/* Fler länkar */}\n  </Navigation>\n)\n\nexport default function App() {\n  const [isOpen, setIsOpen] = useState(false)\n  return (\n    <Layout>\n      <Header>\n        <MobileMenu title='Meny'>\n          <NavigationContent />\n        </MobileMenu>\n        <HeaderLogo />\n        <HeaderTitle>Mitt system</HeaderTitle>\n        <HeaderActions>\n          <HeaderAction icon={<Bell />}>Notifieringar</HeaderAction>\n          {/* Fler actions */}\n        </HeaderActions>\n      </Header>\n      <LayoutContent>\n        <Sidebar title='Navigation'>\n          <NavigationContent />\n        </Sidebar>\n        <Main>\n          <Button onPress={() => setIsOpen(true)}>Öppna panel</Button>\n        </Main>\n        <Panel\n          id='detaljer'\n          title='Detaljer'\n          isOpen={isOpen}\n          onOpenChange={setIsOpen}\n        >\n          {/* Panelinnehåll */}\n        </Panel>\n      </LayoutContent>\n    </Layout>\n  )\n}\n"
        })
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
84871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  eI: () => (/* binding */ OnlyHeaderExample),
  gt: () => (/* binding */ DesktopAppExample),
  qh: () => (/* binding */ MobileAppSidebarNavbarExample)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/layout/src/header/Header.tsx + 1 modules
var Header = __webpack_require__(12987);
// EXTERNAL MODULE: ./packages/layout/src/header/header-logo/HeaderLogo.tsx + 1 modules
var HeaderLogo = __webpack_require__(42922);
// EXTERNAL MODULE: ./packages/layout/src/header/header-title/HeaderTitle.tsx + 1 modules
var HeaderTitle = __webpack_require__(29543);
// EXTERNAL MODULE: ./packages/layout/src/header/header-actions/HeaderActions.tsx + 1 modules
var HeaderActions = __webpack_require__(54647);
// EXTERNAL MODULE: ./packages/layout/src/header/header-action/HeaderAction.tsx + 1 modules
var HeaderAction = __webpack_require__(60231);
// EXTERNAL MODULE: ./packages/layout/src/navigation/Navigation.tsx + 1 modules
var Navigation = __webpack_require__(29769);
// EXTERNAL MODULE: ./packages/layout/src/navigation/navigation-item/NavigationItem.tsx + 1 modules
var NavigationItem = __webpack_require__(86998);
// EXTERNAL MODULE: ./packages/layout/src/navigation/navigation-link/NavigationLink.tsx + 1 modules
var NavigationLink = __webpack_require__(1143);
// EXTERNAL MODULE: ./packages/layout/src/layout/Layout.tsx + 4 modules
var Layout = __webpack_require__(70871);
// EXTERNAL MODULE: ./packages/layout/src/header/mobile-menu/MobileMenu.tsx + 2 modules
var MobileMenu = __webpack_require__(34685);
// EXTERNAL MODULE: ./packages/layout/src/layout/layout-content/LayoutContent.tsx + 1 modules
var LayoutContent = __webpack_require__(54171);
// EXTERNAL MODULE: ./packages/layout/src/sidebar/Sidebar.tsx + 2 modules
var Sidebar = __webpack_require__(98554);
// EXTERNAL MODULE: ./packages/layout/src/main/Main.tsx + 1 modules
var Main = __webpack_require__(61054);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.mjs
var x = __webpack_require__(69237);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/utils/useControlledState.mjs
var useControlledState = __webpack_require__(32240);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/animation.mjs
var animation = __webpack_require__(26855);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useObjectRef.mjs
var useObjectRef = __webpack_require__(80716);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
// EXTERNAL MODULE: ./packages/layout/src/panel/panel-body/PanelBody.tsx + 1 modules
var PanelBody = __webpack_require__(69843);
// EXTERNAL MODULE: ./packages/layout/src/panel/panel-content/PanelContent.tsx + 1 modules
var PanelContent = __webpack_require__(72280);
// EXTERNAL MODULE: ./packages/layout/src/panel/panel-header/PanelHeader.tsx + 1 modules
var PanelHeader = __webpack_require__(92479);
// EXTERNAL MODULE: ./packages/layout/src/panel/panel-title/PanelTitle.tsx + 1 modules
var PanelTitle = __webpack_require__(85096);
;// CONCATENATED MODULE: ./packages/layout/src/panel/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"closePanel":"Close panel"},"sv":{"closePanel":"Stäng panel"}}')
;// CONCATENATED MODULE: ./packages/layout/src/panel/Panel.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Panel_module = ({"panel":"panel_gfSy","promote":"promote_F9ZB","slide-horizontally":"slide-horizontally_LlDf","slide-vertically":"slide-vertically_JBYI","panelActions":"panelActions_dGUU","panelTitle":"panelTitle_bOPO"});
;// CONCATENATED MODULE: ./packages/layout/src/panel/Panel.tsx
'use client';













const Panel = (props)=>{
    const { onExited } = props;
    const [isOpen, setIsOpen] = (0,useControlledState/* .useControlledState */.P)(props.isOpen, props.defaultOpen || false, props.onOpenChange);
    const ref = (0,react.useRef)(null);
    const isExiting = (0,animation/* .useExitAnimation */.O)(ref, isOpen);
    const handlePress = ()=>setIsOpen((previouslyOpen)=>!previouslyOpen);
    (0,react.useEffect)(()=>{
        if (!isOpen && !isExiting) {
            onExited?.();
        }
    }, [
        isOpen,
        isExiting,
        onExited
    ]);
    if (!isOpen && !isExiting) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PanelInner, {
        isExiting: isExiting,
        onPress: handlePress,
        ref: ref,
        ...props
    });
};
const PanelInner = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { className, title, actions, onPress, children, isExiting, defaultOpen, promoting, onPromotionEnd, 'aria-hidden': ariaHidden, ...rest } = param;
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const objectRef = (0,useObjectRef/* .useObjectRef */.U)(ref);
    const isEntering = (0,animation/* .useEnterAnimation */._)(objectRef, !defaultOpen);
    const handleAnimationEnd = (e)=>{
        if (e.target === e.currentTarget && promoting) {
            onPromotionEnd?.();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(PanelBody/* .PanelBody */.l, {
        "aria-hidden": ariaHidden || undefined,
        "aria-label": title,
        className: (0,clsx/* ["default"] */.A)(className, Panel_module.panel),
        ref: objectRef,
        "data-entering": isEntering || undefined,
        "data-exiting": isExiting || undefined,
        "data-promoting": promoting || undefined,
        onAnimationEnd: handleAnimationEnd,
        ...(0,filterDOMProps/* .filterDOMProps */.$)(rest),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(PanelHeader/* .PanelHeader */.a, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PanelTitle/* .PanelTitle */.x, {
                        className: Panel_module.panelTitle,
                        title: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: Panel_module.panelActions,
                        children: [
                            actions,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                                "aria-label": strings.format('closePanel'),
                                onPress: onPress,
                                size: "medium",
                                variant: "icon",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* ["default"] */.A, {
                                    size: 20
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PanelContent/* .PanelContent */.w, {
                children: children
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/layout/src/navbar/Navbar.tsx + 1 modules
var Navbar = __webpack_require__(31331);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bell.mjs
var bell = __webpack_require__(40608);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.mjs
var user = __webpack_require__(94574);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/settings.mjs
var settings = __webpack_require__(43588);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/house.mjs
var house = __webpack_require__(60857);
;// CONCATENATED MODULE: ./apps/docs/src/components/examples/layout/PageLayoutExamples.tsx






const OnlyHeaderExample = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        style: {
            overflow: 'hidden',
            padding: 0
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Header/* .Header */.Y, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderLogo/* .HeaderLogo */.b, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderTitle/* .HeaderTitle */.g, {
                            children: "Mitt system"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(HeaderActions/* .HeaderActions */.l, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderAction/* .HeaderAction */.u, {
                                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(bell/* ["default"] */.A, {
                                        size: 20
                                    }),
                                    children: "Notiser"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderAction/* .HeaderAction */.u, {
                                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(user/* ["default"] */.A, {
                                        size: 20
                                    }),
                                    children: "Min profil"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderAction/* .HeaderAction */.u, {
                                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(settings/* ["default"] */.A, {
                                        size: 20
                                    }),
                                    children: "Inst\xe4llningar"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: {
                        padding: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: 180,
                        textAlign: 'center',
                        color: 'var(--ifm-color-content-secondary)'
                    },
                    children: "Din applikation"
                })
            ]
        })
    });
const NavigationContent = ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Navigation/* .Navigation */.V, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigationItem/* .NavigationItem */.s, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigationLink/* .NavigationLink */.T, {
                    href: "#",
                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(house/* ["default"] */.A, {}),
                    isActive: true,
                    children: "Hem"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigationItem/* .NavigationItem */.s, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigationLink/* .NavigationLink */.T, {
                    href: "#",
                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(settings/* ["default"] */.A, {}),
                    children: "Inst\xe4llningar"
                })
            })
        ]
    });
const DesktopAppExample = ()=>{
    const [isOpen, setIsOpen] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        style: {
            padding: 0
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* .Layout */.P, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Header/* .Header */.Y, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MobileMenu/* .MobileMenu */.q, {
                            title: "Meny",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigationContent, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderLogo/* .HeaderLogo */.b, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderTitle/* .HeaderTitle */.g, {
                            children: "Mitt system"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(HeaderActions/* .HeaderActions */.l, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderAction/* .HeaderAction */.u, {
                                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(bell/* ["default"] */.A, {}),
                                    children: "Notifieringar"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderAction/* .HeaderAction */.u, {
                                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(user/* ["default"] */.A, {}),
                                    children: "Min profil"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(LayoutContent/* .LayoutContent */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Sidebar/* .Sidebar */.B, {
                            title: "Navigation",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigationContent, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Main/* .Main */.g, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                                onPress: ()=>setIsOpen(true),
                                children: "\xd6ppna panel"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Panel, {
                            id: "detaljer",
                            title: "Detaljer",
                            isOpen: isOpen,
                            onOpenChange: setIsOpen,
                            children: "Panel med detaljer"
                        })
                    ]
                })
            ]
        })
    });
};
const MobileAppSidebarNavbarExample = ()=>{
    const [isOpen, setIsOpen] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        style: {
            padding: 0
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* .Layout */.P, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Header/* .Header */.Y, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderLogo/* .HeaderLogo */.b, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderTitle/* .HeaderTitle */.g, {
                            children: "Mitt system"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(HeaderActions/* .HeaderActions */.l, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderAction/* .HeaderAction */.u, {
                                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(bell/* ["default"] */.A, {}),
                                    children: "Notifieringar"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(HeaderAction/* .HeaderAction */.u, {
                                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(user/* ["default"] */.A, {}),
                                    children: "Min profil"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(LayoutContent/* .LayoutContent */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Sidebar/* .Sidebar */.B, {
                            title: "Navigation",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigationContent, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Main/* .Main */.g, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                                onPress: ()=>setIsOpen(true),
                                children: "\xd6ppna panel"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Panel, {
                            id: "detaljer",
                            title: "Detaljer",
                            isOpen: isOpen,
                            onOpenChange: setIsOpen,
                            children: "Panel med detaljer"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Navbar/* .Navbar */.F, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigationContent, {})
                })
            ]
        })
    });
};


},
6944(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ Logo)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/logo/Logo.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Logo_module = ({"container":"container_U3H4","noPadding":"noPadding__BF5","logo":"logo_GI7z","primary":"primary_TCiF","dark":"dark_F_Ks","xSmall":"xSmall_IZ4K","small":"small_KAZl","large":"large_iAB3"});
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
;// CONCATENATED MODULE: ./packages/components/src/logo/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"logotype":"Logotype of the Swedish Migration Agency"},"sv":{"logotype":"Migrationsverkets logotyp"}}')
;// CONCATENATED MODULE: ./packages/components/src/logo/LogoContext.tsx

const LogoContext = /*#__PURE__*/ (0,react.createContext)({
    size: undefined
});

;// CONCATENATED MODULE: ./packages/components/src/logo/Logo.tsx








const Logo = (param)=>{
    let { primary = true, size, padding = true, className, ...rest } = param;
    const context = (0,react.useContext)(LogoContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* ["default"] */.A)(Logo_module.container, padding === false && Logo_module.noPadding, className),
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SVG, {
            size: size ?? context.size ?? 'medium',
            primary: primary
        })
    });
};
const SVG = (param)=>{
    let { size, primary } = param;
    const classNames = (0,clsx/* ["default"] */.A)(Logo_module.logo, primary ? Logo_module.primary : Logo_module.dark, size === 'x-small' && Logo_module.xSmall, size === 'medium' && Logo_module.medium, size === 'large' && Logo_module.large, size === 'small' && Logo_module.small);
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    if (size === 'x-small') return /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 100 92",
        className: classNames,
        role: "img",
        "aria-hidden": "false",
        focusable: "false",
        "aria-label": strings.format('logotype'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M99.99,91.69c-1.84-1.11-4.05-4.55-4.05-9.46V9.15c0-4.79,1.96-7.25,3.81-8.85h-14.75l-33.91,65.47L12.41.3H0c1.6,1.59,3.93,3.07,3.93,8.23v75.55c0,3.56-2.21,6.51-3.81,7.61h16.34c-1.72-1.22-3.93-4.18-3.93-7.98V25.97l36.24,61.42,33.04-63.26v58.96c0,5.53-2.21,7.61-3.81,8.6h21.99Z"
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 112 40",
        className: classNames,
        "aria-hidden": "false",
        focusable: "false",
        "aria-label": strings.format('logotype'),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M97.78,21.61c-7.48-9.73-20.06-16.03-34.32-16.03-13.07,0-24.86,5.27-32.46,13.65,6.56-5.83,15.64-9.44,25.66-9.44,11.37,0,21.52,4.56,28.18,11.83h12.94Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M90.45,12.58C70.67-1.51,41.26,2.77,27.49,21.61h-12.23C30.56-2.89,68.29-7.47,90.45,12.58h0Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M11.89,37.13c-.22-.13-.48-.53-.48-1.11v-8.58c0-.56.23-.85.45-1.04h-1.73l-3.98,7.69-4.54-7.69H.15c.19.19.46.36.46.97v8.87c0,.42-.26.76-.45.89h1.92c-.2-.14-.46-.49-.46-.94v-6.78l4.25,7.21,3.88-7.43v6.92c0,.65-.26.89-.45,1.01h2.58Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M15.81,26.86c0-.45-.36-.81-.81-.81s-.81.36-.81.81.36.81.81.81.81-.36.81-.81h0ZM16.22,37.13c-.3-.23-.45-.5-.45-1.07v-6.4h-1.98c.37.19.49.58.49,1.17v5.23c0,.48-.09.79-.46,1.07h2.39Z",
                fillRule: "evenodd"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M24.52,30.97c-.04-.33-.17-.68-.37-.95h-1.36c-.29-.26-.87-.58-1.96-.58-1.53,0-2.8.92-2.8,2.58,0,1.02.52,1.86,1.31,2.26-.43.37-1.38.98-1.38,1.61,0,.71.79.99,1.38,1.1-.88.26-1.67.82-1.67,1.59,0,1.14,1.73,1.41,2.64,1.41,1.54,0,3.91-.78,3.91-2.64,0-1.21-1.23-1.49-2.22-1.5-2.42-.06-2.51-.2-2.51-.56,0-.2.42-.68.55-.81.23.03.48.06.71.06,1.76,0,2.93-.94,2.93-2.7,0-.48-.14-.91-.29-1.11.12-.04.25-.04.37-.04.27,0,.55.12.76.27h0ZM22.27,32.21c0,.79-.37,1.61-1.36,1.61-1.07,0-1.47-1.21-1.47-2.09,0-.95.5-1.57,1.31-1.57,1.2,0,1.51,1.25,1.51,2.05h0ZM22.89,37.92c0,.76-.82,1.31-1.93,1.31-.59,0-1.7-.3-1.69-1.15,0-.45.26-.74.59-.99l1.96.04c.5.01,1.07.1,1.07.79h0Z",
                fillRule: "evenodd"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M30.11,31.22l-.23-1.63c-.2-.1-.43-.14-.65-.14-.85,0-1.46.68-1.79,1.37v-1.15h-1.96c.45.27.48.76.48,1.14v5.19c0,.58-.1.89-.45,1.14h2.35c-.36-.29-.42-.63-.42-1.12v-4.27c.22-.58.78-1.04,1.43-1.04.46,0,.97.26,1.24.52h0Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M36.87,37.13c-.37-.33-.43-.59-.43-1.25v-3.89c0-2.21-1.43-2.55-2.8-2.55-.61,0-1.67.22-2.03.42-.2.4-.3,1.24-.4,1.67.46-.56,1.27-1.37,2.39-1.37,1.18,0,1.36.82,1.36,1.7v.39l-2.21.76c-1.04.36-1.87,1.08-1.87,2.26,0,1.31.88,2.08,2.15,2.08.87,0,1.46-.43,1.93-.94v.72h1.92ZM34.95,35.62c-.26.32-.74.85-1.37.85-.75,0-1.18-.79-1.18-1.54,0-.71.35-1.15.89-1.37l1.66-.63v2.7h0Z",
                fillRule: "evenodd"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M42.58,36.15c-.29.27-.71.46-1.11.46-.87,0-1.07-.98-1.07-1.66v-4.51h.85c.43,0,.94.13,1.33.35l-.17-1.12h-2v-1.76c-.68.95-1.54,1.96-2.58,2.54h1.1v4.43c0,1.43.32,2.47,1.95,2.47.48,0,.98-.1,1.38-.36.14-.25.25-.55.33-.82h0Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M45.63,26.86c0-.45-.36-.81-.81-.81s-.81.36-.81.81.36.81.81.81.81-.36.81-.81h0ZM46.04,37.13c-.3-.23-.45-.5-.45-1.07v-6.4h-1.98c.37.19.49.58.49,1.17v5.23c0,.48-.09.79-.46,1.07h2.39Z",
                fillRule: "evenodd"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M54.96,33.37c0-2.06-1.3-3.95-3.5-3.95s-3.84,1.76-3.84,4.01c0,2.06,1.28,3.95,3.49,3.95s3.85-1.76,3.85-4.01h0ZM53.43,34.04c0,1.27-.52,2.57-1.86,2.57-1.79,0-2.42-2.44-2.42-3.86,0-1.21.48-2.57,1.87-2.57,1.79,0,2.41,2.44,2.41,3.86h0Z",
                fillRule: "evenodd"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M63.37,37.13c-.27-.22-.45-.42-.45-1.11v-3.94c0-1.63-.39-2.64-2.18-2.64-1.01,0-1.79.56-2.38,1.12v-.91h-1.98c.3.17.49.46.49,1.05v5.33c0,.59-.14.88-.48,1.08h2.39c-.23-.23-.43-.37-.43-1.17v-4.4c.32-.45,1.07-1.24,1.85-1.24,1.01,0,1.23,1.01,1.23,1.8v3.95c0,.74-.26.87-.46,1.05h2.39Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M69.79,35.2c0-2.21-3.42-2.71-3.42-4.07,0-.75.71-.98,1.34-.98s1.33.29,1.74.81l-.07-1.18c-.46-.17-1.11-.35-1.69-.35-1.44,0-2.68.63-2.68,1.89,0,2.36,3.46,2.68,3.46,4.25,0,.79-.62,1.05-1.31,1.05-1.01,0-1.86-.46-2.52-1.21v.1c0,.4-.03.99.3,1.27.53.43,1.53.56,2.18.56,1.36,0,2.67-.62,2.67-2.15h0Z",
                fillRule: "evenodd"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M77.98,29.66h-1.43c.13.1.11.56-.19,1.33l-1.86,4.72-1.87-4.7c-.26-.65-.32-1.15-.16-1.34h-2.06c.19.1.49.85.82,1.67l2.31,5.8h1.31l2.35-5.97c.32-.81.56-1.36.78-1.5h0Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M84.91,33.54v-.23c0-1.92-.62-3.88-2.88-3.88s-3.56,2.02-3.56,4.11,1.41,3.81,3.58,3.81c.78,0,1.62-.17,2.13-.45.32-.35.49-.79.59-1.27-.69.5-1.41.84-2.31.84-1.49,0-2.35-1.57-2.38-2.88l4.83-.04h0ZM83.34,32.88c-1.1.09-2.16.1-3.27.1.01-.78.29-2.83,1.7-2.83,1.33,0,1.57,1.72,1.57,2.73h0Z",
                fillRule: "evenodd"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M90.95,31.22l-.23-1.63c-.2-.1-.43-.14-.65-.14-.85,0-1.46.68-1.79,1.37v-1.15h-1.96c.45.27.48.76.48,1.14v5.19c0,.58-.1.89-.45,1.14h2.35c-.36-.29-.42-.63-.42-1.12v-4.27c.22-.58.78-1.04,1.43-1.04.46,0,.97.26,1.24.52h0Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M99.79,37.16c-2.26-.37-2.49-4.04-4.7-4.04l2.62-2.8c.22-.23.5-.48.75-.66h-1.77c.14.14.13.39-.13.66l-2.65,2.83v-7.07h-1.98c.33.2.49.56.49,1.01v9.01c0,.58-.22.81-.46,1.02h2.35c-.26-.25-.4-.49-.4-1.02v-2.57c.27,0,.62.13.82.26,1.28.82,1.95,3.11,2.67,3.45.14.07.94.1,1.14.1.45,0,.84-.03,1.25-.19h0Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M106.3,33.54v-.23c0-1.92-.62-3.88-2.88-3.88s-3.56,2.02-3.56,4.11,1.41,3.81,3.58,3.81c.78,0,1.62-.17,2.13-.45.32-.35.49-.79.59-1.27-.69.5-1.41.84-2.31.84-1.49,0-2.35-1.57-2.38-2.88l4.83-.04h0ZM104.73,32.88c-1.1.09-2.16.1-3.27.1.01-.78.29-2.83,1.7-2.83,1.33,0,1.57,1.72,1.57,2.73h0Z",
                fillRule: "evenodd"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M111.85,36.15c-.29.27-.71.46-1.11.46-.86,0-1.07-.98-1.07-1.66v-4.51h.85c.43,0,.94.13,1.33.35l-.17-1.12h-2v-1.76c-.68.95-1.54,1.96-2.58,2.54h1.1v4.43c0,1.43.32,2.47,1.95,2.47.48,0,.98-.1,1.38-.36.14-.25.25-.55.33-.82h0Z"
            })
        ]
    });
};


},
72419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ ModalOverlay)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Modal.mjs + 2 modules
var Modal = __webpack_require__(45147);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/modal/modal-overlay/ModalOverlay.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const ModalOverlay_module = ({"modalOverlay":"modalOverlay_Z0Xb","modal-fade":"modal-fade_oa7s"});
;// CONCATENATED MODULE: ./packages/components/src/modal/modal-overlay/ModalOverlay.tsx





const ModalOverlay = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Modal/* .ModalOverlay */.mH, {
        className: (0,clsx/* ["default"] */.A)(className, ModalOverlay_module.modalOverlay),
        ref: ref,
        ...rest
    });
});
ModalOverlay.displayName = 'ModalOverlay';


},
20883(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text_Text)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Text.mjs
var Text = __webpack_require__(20987);
;// CONCATENATED MODULE: ./packages/components/src/text/Text.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Text_module = ({"body":"body_Vxmv","body-small":"body-small_JwBE","description":"description_XYgX","description-small":"description-small_tno4","bold":"bold_YLmd","italic":"italic_CnUx"});
;// CONCATENATED MODULE: ./packages/components/src/text/Text.tsx





const DEFAULT_ELEMENT = 'span';
const Text_Text = (param)=>{
    let { children, className, size, isExpressive = false, elementType = DEFAULT_ELEMENT, ...rest } = param;
    const getClassName = ()=>{
        const isDescription = rest.slot === 'description';
        if (isDescription) {
            return size === 'small' ? Text_module["description-small"] : Text_module.description;
        }
        return size === 'small' ? Text_module["body-small"] : Text_module.body;
    };
    const textProps = {
        className: (0,clsx/* ["default"] */.A)(getClassName(), {
            [Text_module.bold]: [
                'b',
                'strong'
            ].includes(elementType),
            [Text_module.italic]: [
                'i',
                'em'
            ].includes(elementType)
        }, className),
        elementType: elementType || DEFAULT_ELEMENT,
        ...isExpressive && {
            'data-expressive': true
        },
        ...rest
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
        ...textProps,
        children: children
    });
};


},
22068(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ Tooltip_Tooltip),
  k: () => (/* binding */ TooltipTrigger)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/tooltip/Tooltip.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Tooltip_module = ({"tooltip":"tooltip_L2zx","arrow":"arrow_bl7N"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Tooltip.mjs + 4 modules
var Tooltip = __webpack_require__(3930);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(57653);
;// CONCATENATED MODULE: ./packages/components/src/tooltip/Tooltip.tsx





function Tooltip_Tooltip(param) {
    let { children, className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* .Tooltip */.m_, {
        className: (0,clsx/* ["default"] */.A)(Tooltip_module.tooltip, className),
        ...props,
        children: (renderProps)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OverlayArrow/* .OverlayArrow */.k, {
                        className: Tooltip_module.arrow,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                            width: 8,
                            height: 8,
                            viewBox: "0 0 8 8",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M0 0 L4 4 L8 0"
                            })
                        })
                    }),
                    typeof children === 'function' ? children(renderProps) : children
                ]
            })
    });
}
function TooltipTrigger(param) {
    let { delay = 0, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* .TooltipTrigger */.k$, {
        delay: delay,
        ...props
    });
}


},
12987(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* binding */ Header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// CONCATENATED MODULE: ./packages/layout/src/header/Header.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Header_module = ({"header":"header_cbgi"});
;// CONCATENATED MODULE: ./packages/layout/src/header/Header.tsx
'use client';



const Header = (param)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
        className: (0,clsx/* ["default"] */.A)(className, Header_module.header),
        ...rest
    });
};


},
60231(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ HeaderAction)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
;// CONCATENATED MODULE: ./packages/layout/src/header/header-action/HeaderAction.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const HeaderAction_module = ({"headerAction":"headerAction_l3SX","label":"label_Yxp2"});
;// CONCATENATED MODULE: ./packages/layout/src/header/header-action/HeaderAction.tsx
'use client';






const HeaderAction = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { children, icon, className, ...props } = param;
    if (!children && !props['aria-label'] && "production" !== 'production') {}
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
        ref: ref,
        size: "medium",
        variant: "tertiary",
        className: (0,clsx/* ["default"] */.A)(HeaderAction_module.headerAction, className),
        ...props,
        children: (0,utils/* .composeRenderProps */.HW)(children, (children)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    icon,
                    typeof children !== 'undefined' && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: HeaderAction_module.label,
                        children: children
                    })
                ]
            }))
    });
});
HeaderAction.displayName = 'HeaderAction';


},
54647(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ HeaderActions)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// CONCATENATED MODULE: ./packages/layout/src/header/header-actions/HeaderActions.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const HeaderActions_module = ({"headerActions":"headerActions_r0j7"});
;// CONCATENATED MODULE: ./packages/layout/src/header/header-actions/HeaderActions.tsx
'use client';



const HeaderActions = (param)=>{
    let { children, className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* ["default"] */.A)(HeaderActions_module.headerActions, className),
        children: children
    });
};


},
42922(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ HeaderLogo)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./packages/components/src/logo/Logo.tsx + 3 modules
var Logo = __webpack_require__(6944);
;// CONCATENATED MODULE: ./packages/layout/src/header/header-logo/HeaderLogo.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const HeaderLogo_module = ({"mobile":"mobile_uWfK","desktop":"desktop_I1ZT"});
;// CONCATENATED MODULE: ./packages/layout/src/header/header-logo/HeaderLogo.tsx
'use client';



const HeaderLogo = (param)=>{
    let { primary } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Logo/* .Logo */.g, {
                size: "x-small",
                primary: primary,
                padding: false,
                className: HeaderLogo_module.mobile
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Logo/* .Logo */.g, {
                size: "small",
                primary: primary,
                padding: false,
                className: HeaderLogo_module.desktop
            })
        ]
    });
};


},
29543(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ HeaderTitle)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// CONCATENATED MODULE: ./packages/layout/src/header/header-title/HeaderTitle.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const HeaderTitle_module = ({"headerTitle":"headerTitle_bJCT"});
;// CONCATENATED MODULE: ./packages/layout/src/header/header-title/HeaderTitle.tsx



const HeaderTitle = (param)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: (0,clsx/* ["default"] */.A)(HeaderTitle_module.headerTitle, className),
        ...rest
    });
};


},
34685(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ MobileMenu)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/menu.mjs
var menu = __webpack_require__(93274);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Modal.mjs + 2 modules
var Modal = __webpack_require__(45147);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(5245);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./packages/components/src/modal/modal-overlay/ModalOverlay.tsx + 1 modules
var ModalOverlay = __webpack_require__(72419);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(20883);
// EXTERNAL MODULE: ./packages/layout/src/utils/useIsMobileDevice.ts
var useIsMobileDevice = __webpack_require__(367);
// EXTERNAL MODULE: ./packages/layout/src/header/mobile-menu/MobileMenuContext.tsx
var MobileMenuContext = __webpack_require__(90549);
;// CONCATENATED MODULE: ./packages/layout/src/header/mobile-menu/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"openMenu":"Open menu"},"sv":{"openMenu":"Öppna meny"}}')
;// CONCATENATED MODULE: ./packages/layout/src/header/mobile-menu/MobileMenu.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const MobileMenu_module = ({"triggerButton":"triggerButton_NREF","overlay":"overlay_Zzls","drawer-blur":"drawer-blur_g02Y","drawer":"drawer_H_wn","drawer-slide":"drawer-slide_Mtkt","dialog":"dialog_KEPB","header":"header__BSE"});
;// CONCATENATED MODULE: ./packages/layout/src/header/mobile-menu/MobileMenu.tsx
'use client';








const MobileMenu = (param)=>{
    let { children, className, defaultOpen, isOpen, onOpenChange, title, ...rest } = param;
    const isMobile = (0,useIsMobileDevice/* .useIsMobileDevice */.o)();
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    return isMobile ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MobileMenuContext/* .MobileMenuContext.Provider */.x.Provider, {
        value: {},
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* .DialogTrigger */.zM, {
            isOpen: isOpen,
            onOpenChange: onOpenChange,
            defaultOpen: defaultOpen,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                    "aria-label": strings.format('openMenu'),
                    icon: menu/* ["default"] */.A,
                    variant: "icon",
                    size: "medium",
                    className: MobileMenu_module.triggerButton
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ModalOverlay/* .ModalOverlay */.m, {
                    className: (0,clsx/* .clsx */.$)(className, MobileMenu_module.overlay),
                    isDismissable: true,
                    ...rest,
                    children: (0,utils/* .composeRenderProps */.HW)(children, (children)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Modal/* .Modal */.aF, {
                            className: MobileMenu_module.drawer,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* .Dialog */.lG, {
                                className: MobileMenu_module.dialog,
                                children: [
                                    title && /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                                        className: MobileMenu_module.header,
                                        children: title
                                    }),
                                    children
                                ]
                            })
                        }))
                })
            ]
        })
    }) : null;
};


},
90549(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  x: () => (MobileMenuContext)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
'use client';

const MobileMenuContext = /*#__PURE__*/ (0,react__rspack_import_0.createContext)(undefined);


},
70871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// CONCATENATED MODULE: ./packages/layout/src/layout/Layout.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Layout_module = ({"layout":"layout_MzRV"});
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
;// CONCATENATED MODULE: ./packages/layout/src/layout/skip-to-content/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"skipToContent":"Skip to main content"},"sv":{"skipToContent":"Hoppa till huvudinnehåll"}}')
;// CONCATENATED MODULE: ./packages/layout/src/layout/skip-to-content/SkipToContent.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const SkipToContent_module = ({"skipToContent":"skipToContent_YFi8"});
;// CONCATENATED MODULE: ./packages/layout/src/layout/skip-to-content/SkipToContent.tsx
'use client';




const SkipToContent = (param)=>{
    let { selector = 'main:first-of-type' } = param;
    const handlePress = ()=>{
        const container = document.querySelector(selector);
        if (container) {
            container.tabIndex = -1;
            container.focus();
            container.addEventListener('blur', ()=>container.removeAttribute('tabindex'), {
                once: true
            });
        }
    };
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
        onPress: handlePress,
        className: SkipToContent_module.skipToContent,
        children: strings.format('skipToContent')
    });
};

;// CONCATENATED MODULE: ./packages/layout/src/layout/Layout.tsx




const Layout = (param)=>{
    let { children, className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* ["default"] */.A)(className, Layout_module.layout),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SkipToContent, {}),
            children
        ]
    });
};


},
54171(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ LayoutContent)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// CONCATENATED MODULE: ./packages/layout/src/layout/layout-content/LayoutContent.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const LayoutContent_module = ({"layoutContent":"layoutContent_KYbf"});
;// CONCATENATED MODULE: ./packages/layout/src/layout/layout-content/LayoutContent.tsx



const LayoutContent = (param)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* ["default"] */.A)(className, LayoutContent_module.layoutContent),
        ...rest
    });
};


},
61054(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ Main)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// CONCATENATED MODULE: ./packages/layout/src/main/Main.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Main_module = ({"main":"main_P1t_"});
;// CONCATENATED MODULE: ./packages/layout/src/main/Main.tsx



const Main = (param)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
        className: (0,clsx/* ["default"] */.A)(className, Main_module.main),
        ...rest
    });
};


},
31331(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/layout/src/navbar/NavbarContext.tsx
var NavbarContext = __webpack_require__(64300);
;// CONCATENATED MODULE: ./packages/layout/src/navbar/Navbar.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Navbar_module = ({"navbar":"navbar_TBxr"});
;// CONCATENATED MODULE: ./packages/layout/src/navbar/Navbar.tsx
'use client';




const Navbar = (param)=>{
    let { className, children, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("footer", {
        className: (0,clsx/* ["default"] */.A)(className, Navbar_module.navbar),
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavbarContext/* .NavbarContext.Provider */.q.Provider, {
            value: {},
            children: children
        })
    });
};


},
64300(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  q: () => (NavbarContext)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
'use client';

const NavbarContext = /*#__PURE__*/ (0,react__rspack_import_0.createContext)(undefined);


},
29769(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ Navigation)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// CONCATENATED MODULE: ./packages/layout/src/navigation/Navigation.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Navigation_module = ({"rootList":"rootList_h7yc"});
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(7079);
;// CONCATENATED MODULE: ./packages/layout/src/navigation/Navigation.tsx
'use client';



const Navigation = (param)=>{
    let { className, items, children, dependencies, idScope, addIdAndValue, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
        className: className,
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
            className: Navigation_module.rootList,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionBuilder/* .Collection */.pM, {
                items: items,
                children: children,
                dependencies: dependencies,
                idScope: idScope,
                addIdAndValue: addIdAndValue
            })
        })
    });
};


},
86998(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ NavigationItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/layout/src/sidebar/SidebarContext.tsx
var SidebarContext = __webpack_require__(76174);
;// CONCATENATED MODULE: ./packages/layout/src/navigation/navigation-item/NavigationItem.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const NavigationItem_module = ({"navigationItem":"navigationItem_i3Ha"});
;// CONCATENATED MODULE: ./packages/layout/src/navigation/navigation-item/NavigationItem.tsx
'use client';





const NavigationItem = (param)=>{
    let { className, ...rest } = param;
    const sidebarContext = (0,react.useContext)(SidebarContext/* .SidebarContext */.I);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        className: (0,clsx/* ["default"] */.A)(className, NavigationItem_module.navigationItem, {
            [NavigationItem_module.collapsed]: sidebarContext?.isCollapsed
        }),
        ...rest
    });
};


},
1143(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ NavigationLink)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(5245);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Link.mjs + 1 modules
var Link = __webpack_require__(10068);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/useFocusable.mjs
var useFocusable = __webpack_require__(55602);
// EXTERNAL MODULE: ./packages/components/src/tooltip/Tooltip.tsx + 1 modules
var Tooltip = __webpack_require__(22068);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/layout/src/navigation/navigation-link/NavigationLink.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const NavigationLink_module = ({"navigationLink":"navigationLink_Q681","sidebar":"sidebar_A3L6","collapsed":"collapsed_ApWA","navbar":"navbar_s_WU","title":"title_iyJ5"});
// EXTERNAL MODULE: ./packages/layout/src/header/mobile-menu/MobileMenuContext.tsx
var MobileMenuContext = __webpack_require__(90549);
// EXTERNAL MODULE: ./packages/layout/src/navbar/NavbarContext.tsx
var NavbarContext = __webpack_require__(64300);
// EXTERNAL MODULE: ./packages/layout/src/sidebar/SidebarContext.tsx
var SidebarContext = __webpack_require__(76174);
;// CONCATENATED MODULE: ./packages/layout/src/navigation/navigation-link/NavigationLink.tsx
'use client';








const NavigationLink = (param)=>{
    let { as, children, className, isActive, isDisabled, icon, 'aria-label': ariaLabel, ...rest } = param;
    const mobileMenuContext = (0,react.useContext)(MobileMenuContext/* .MobileMenuContext */.x);
    const sidebarContext = (0,react.useContext)(SidebarContext/* .SidebarContext */.I);
    const navbarContext = (0,react.useContext)(NavbarContext/* .NavbarContext */.q);
    const isCollapsed = sidebarContext?.isCollapsed;
    const ctx = (0,react.useContext)(Dialog/* .OverlayTriggerStateContext */.RG);
    const Component = as || Link/* .Link */.N;
    const toggle = ()=>{
        if (ctx?.isOpen) {
            ctx?.setOpen(false);
        }
    };
    const title = typeof children === 'string' ? children : undefined;
    if (!title && !ariaLabel && "production" !== 'production') {}
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tooltip/* .TooltipTrigger */.k, {
        isDisabled: !isCollapsed || !title && !ariaLabel,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(useFocusable/* .Focusable */.zo, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Component, {
                    "aria-current": isActive && 'page',
                    "aria-label": ariaLabel || (isCollapsed ? title : undefined),
                    className: (0,clsx/* .clsx */.$)(className, NavigationLink_module.navigationLink, {
                        [NavigationLink_module.sidebar]: sidebarContext || mobileMenuContext,
                        [NavigationLink_module.navbar]: navbarContext,
                        [NavigationLink_module.collapsed]: isCollapsed
                    }),
                    "aria-disabled": isDisabled || undefined,
                    "data-active": isActive || undefined,
                    "data-disabled": isDisabled || undefined,
                    ...as ? {
                        tabIndex: isDisabled ? -1 : undefined,
                        onClick: (e)=>{
                            if (isDisabled) {
                                e.preventDefault();
                                return;
                            }
                            toggle();
                            rest.onClick?.(e);
                        }
                    } : {
                        isDisabled,
                        onPress: (e)=>{
                            toggle();
                            rest.onPress?.(e);
                        }
                    },
                    ...rest,
                    children: [
                        icon,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: NavigationLink_module.title,
                            children: children
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* .Tooltip */.m, {
                placement: "right",
                children: title
            })
        ]
    });
};


},
69843(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ PanelBody)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./packages/layout/src/panel/panel-body/PanelBody.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const PanelBody_module = ({"panelBody":"panelBody_OFgk"});
;// CONCATENATED MODULE: ./packages/layout/src/panel/panel-body/PanelBody.tsx




const PanelBody = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("aside", {
        ref: ref,
        className: (0,clsx/* ["default"] */.A)(className, PanelBody_module.panelBody),
        ...rest
    });
});


},
72280(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w: () => (/* binding */ PanelContent)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./packages/layout/src/panel/panel-content/PanelContent.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const PanelContent_module = ({"panelContent":"panelContent_WJah"});
;// CONCATENATED MODULE: ./packages/layout/src/panel/panel-content/PanelContent.tsx




const PanelContent = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        tabIndex: 0,
        className: (0,clsx/* ["default"] */.A)(className, PanelContent_module.panelContent),
        ...rest
    });
});


},
92479(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ PanelHeader)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// CONCATENATED MODULE: ./packages/layout/src/panel/panel-header/PanelHeader.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const PanelHeader_module = ({"panelHeader":"panelHeader_K3Yg"});
;// CONCATENATED MODULE: ./packages/layout/src/panel/panel-header/PanelHeader.tsx



const PanelHeader = (param)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* ["default"] */.A)(className, PanelHeader_module.panelHeader),
        ...rest
    });
};


},
85096(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: () => (/* binding */ PanelTitle)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(20883);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/layout/src/panel/panel-title/PanelTitle.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const PanelTitle_module = ({"panelTitle":"panelTitle_z2zr"});
;// CONCATENATED MODULE: ./packages/layout/src/panel/panel-title/PanelTitle.tsx



const PanelTitle = (param)=>{
    let { className, title, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
        className: (0,clsx/* .clsx */.$)(className, PanelTitle_module.panelTitle),
        ...rest,
        children: title
    });
};


},
98554(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ Sidebar)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/panel-left-close.mjs
var panel_left_close = __webpack_require__(47520);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/utils/useControlledState.mjs
var useControlledState = __webpack_require__(32240);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
// EXTERNAL MODULE: ./packages/layout/src/panel/panel-body/PanelBody.tsx + 1 modules
var PanelBody = __webpack_require__(69843);
// EXTERNAL MODULE: ./packages/layout/src/panel/panel-header/PanelHeader.tsx + 1 modules
var PanelHeader = __webpack_require__(92479);
// EXTERNAL MODULE: ./packages/layout/src/panel/panel-title/PanelTitle.tsx + 1 modules
var PanelTitle = __webpack_require__(85096);
// EXTERNAL MODULE: ./packages/layout/src/panel/panel-content/PanelContent.tsx + 1 modules
var PanelContent = __webpack_require__(72280);
;// CONCATENATED MODULE: ./packages/layout/src/sidebar/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"expandSidebar":"Expand sidebar","collapseSidebar":"Collapse sidebar"},"sv":{"expandSidebar":"Expandera sidopanel","collapseSidebar":"Minimera sidopanel"}}')
// EXTERNAL MODULE: ./packages/layout/src/utils/useIsMobileDevice.ts
var useIsMobileDevice = __webpack_require__(367);
// EXTERNAL MODULE: ./packages/layout/src/sidebar/SidebarContext.tsx
var SidebarContext = __webpack_require__(76174);
;// CONCATENATED MODULE: ./packages/layout/src/sidebar/Sidebar.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Sidebar_module = ({"sidebar":"sidebar_aG_T","collapsed":"collapsed__6AI","sidebarHeader":"sidebarHeader_KGRi","sidebarTitle":"sidebarTitle_r6Dn","collapseButton":"collapseButton_uzbt","sidebarContent":"sidebarContent_dmFt"});
;// CONCATENATED MODULE: ./packages/layout/src/sidebar/Sidebar.tsx
'use client';












const Sidebar = (param)=>{
    let { children, className, title, ...props } = param;
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const isMobileDevice = (0,useIsMobileDevice/* .useIsMobileDevice */.o)();
    const [isCollapsed, setIsCollapsed] = (0,useControlledState/* .useControlledState */.P)(props.isCollapsed, props.defaultCollapsed || false, props.onCollapseChange);
    const [isTransitioning, setIsTransitioning] = react.useState(false);
    const handlePress = ()=>{
        setIsTransitioning(true);
        setIsCollapsed((previouslyCollapsed)=>!previouslyCollapsed);
    };
    const handleTransitionEnd = (e)=>{
        if (e.propertyName === 'width' && e.target === e.currentTarget) {
            setIsTransitioning(false);
        }
    };
    return isMobileDevice ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(SidebarContext/* .SidebarContext.Provider */.I.Provider, {
        value: {
            isCollapsed
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(PanelBody/* .PanelBody */.l, {
            className: (0,clsx/* ["default"] */.A)(className, Sidebar_module.sidebar, {
                [Sidebar_module.collapsed]: isCollapsed
            }),
            "data-transitioning": isTransitioning || undefined,
            onTransitionEnd: handleTransitionEnd,
            ...(0,filterDOMProps/* .filterDOMProps */.$)(props, {
                propNames: new Set([
                    'style'
                ])
            }),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(PanelHeader/* .PanelHeader */.a, {
                    className: (0,clsx/* ["default"] */.A)(Sidebar_module.sidebarHeader, {
                        [Sidebar_module.collapsed]: isCollapsed
                    }),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(PanelTitle/* .PanelTitle */.x, {
                            className: (0,clsx/* ["default"] */.A)(Sidebar_module.sidebarTitle, {
                                [Sidebar_module.collapsed]: isCollapsed
                            }),
                            title: title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                            "aria-label": isCollapsed ? strings.format('expandSidebar') : strings.format('collapseSidebar'),
                            onPress: handlePress,
                            variant: "icon",
                            size: "medium",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: (0,clsx/* ["default"] */.A)(Sidebar_module.collapseButton, {
                                    [Sidebar_module.collapsed]: isCollapsed
                                }),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(panel_left_close/* ["default"] */.A, {
                                    size: 20
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PanelContent/* .PanelContent */.w, {
                    className: Sidebar_module.sidebarContent,
                    children: children
                })
            ]
        })
    });
};


},
76174(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  I: () => (SidebarContext)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
'use client';

const SidebarContext = /*#__PURE__*/ (0,react__rspack_import_0.createContext)(undefined);


},
367(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  o: () => (useIsMobileDevice)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
'use client';

const QUERY = '(max-width: 640px)';
const subscribe = (onChange)=>{
    const media = window.matchMedia(QUERY);
    media.addEventListener('change', onChange);
    return ()=>media.removeEventListener('change', onChange);
};
const getSnapshot = ()=>window.matchMedia(QUERY).matches;
// No window on the server, and the first client render has to match it
const getServerSnapshot = ()=>false;
function useIsMobileDevice() {
    return (0,react__rspack_import_0.useSyncExternalStore)(subscribe, getSnapshot, getServerSnapshot);
}


},
47520(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (PanelLeftClose)
});
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(18913);
/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "panel-left-close",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
  ],
  aliases: ["sidebar-close"]
};
__iconData.node;
const PanelLeftClose = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)(__iconData);


//# sourceMappingURL=panel-left-close.mjs.map


},
43588(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (Settings)
});
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(18913);
/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "settings",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
        key: "1i5ecw"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
  ]
};
__iconData.node;
const Settings = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)(__iconData);


//# sourceMappingURL=settings.mjs.map


},
69237(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (X)
});
/* import */ var _createLucideIcon_mjs__rspack_import_0 = __webpack_require__(18913);
/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconData = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
__iconData.node;
const X = (0,_createLucideIcon_mjs__rspack_import_0/* ["default"] */.A)(__iconData);


//# sourceMappingURL=x.mjs.map


},

}]);