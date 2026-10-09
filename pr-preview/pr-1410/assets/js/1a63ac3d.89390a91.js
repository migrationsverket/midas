"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["4310"], {
47106(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_components_tabs_mdx_1a6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-tabs-mdx-1a6.json
var site_docs_components_tabs_mdx_1a6_namespaceObject = JSON.parse('{"id":"components/tabs","title":"Tabs","description":"Organisera information med hjälp av flikar.","source":"@site/docs/components/tabs.mdx","sourceDirName":"components","slug":"/components/tabs","permalink":"/pr-preview/pr-1410/components/tabs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Tabs","description":"Organisera information med hjälp av flikar."},"sidebar":"sideBar","previous":{"title":"Table","permalink":"/pr-preview/pr-1410/components/table"},"next":{"title":"Tag","permalink":"/pr-preview/pr-1410/components/tag"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(28247);
;// CONCATENATED MODULE: ./dist/api/components/Tabs.json
var Tabs_namespaceObject = JSON.parse('{"schemaVersion":1,"package":"@midas-ds/components","displayName":"Tabs","description":"","sourceFile":"packages/components/src/tabs/Tabs.tsx","props":{"variant":{"defaultValue":{"value":"uncontained"},"description":"","name":"variant","required":false,"parent":{"fileName":"midas/packages/components/src/tabs/Tabs.tsx","name":"TabsProps"},"declarations":[{"fileName":"midas/packages/components/src/tabs/Tabs.tsx","name":"TabsProps"}],"type":{"name":"enum","raw":"\\"contained\\" | \\"uncontained\\"","value":[{"value":"\\"contained\\""},{"value":"\\"uncontained\\""}]}},"size":{"defaultValue":{"value":"large"},"description":"","name":"size","required":false,"parent":{"fileName":"midas/packages/components/src/tabs/Tabs.tsx","name":"TabsProps"},"declarations":[{"fileName":"midas/packages/components/src/tabs/Tabs.tsx","name":"TabsProps"}],"type":{"name":"enum","raw":"Size","value":[{"value":"\\"large\\""},{"value":"\\"medium\\""}]}},"className":{"defaultValue":{"value":"\'react-aria-Tabs\'"},"description":"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\\nelement. A function may be provided to compute the class based on component state.","name":"className","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Tabs.d.ts","name":"TabsProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/Tabs.d.ts","name":"TabsProps"}],"type":{"name":"enum","raw":"ClassNameOrFunction<TabsRenderProps>","value":[{"value":"(values: TabsRenderProps & { defaultClassName: string | undefined; }) => string","description":"","fullComment":"","tags":{}},{"value":"string"}]}},"isDisabled":{"defaultValue":null,"description":"Whether the TabList is disabled.\\nShows that a selection exists, but is not available in that circumstance.","name":"isDisabled","required":false,"parent":{"fileName":"midas/node_modules/react-stately/dist/types/src/tabs/useTabListState.d.ts","name":"TabListProps"},"declarations":[{"fileName":"midas/node_modules/react-stately/dist/types/src/tabs/useTabListState.d.ts","name":"TabListProps"}],"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"orientation":{"defaultValue":{"value":"\'horizontal\'"},"description":"The orientation of the tabs.","name":"orientation","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/tabs/useTabList.d.ts","name":"AriaTabListProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/tabs/useTabList.d.ts","name":"AriaTabListProps"}],"type":{"name":"enum","raw":"Orientation","value":[{"value":"\\"horizontal\\""},{"value":"\\"vertical\\""}]}},"disabledKeys":{"defaultValue":null,"description":"The item keys that are disabled. These items cannot be selected, focused, or otherwise\\ninteracted with.","name":"disabledKeys","required":false,"parent":{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"CollectionBase"},"declarations":[{"fileName":"midas/node_modules/@react-types/shared/src/collections.d.ts","name":"CollectionBase"}],"type":{"name":"Iterable<Key>","raw":"Iterable<Key>"}},"selectedKey":{"defaultValue":null,"description":"The currently selected key in the collection (controlled).","name":"selectedKey","required":false,"parent":{"fileName":"midas/node_modules/react-stately/dist/types/src/tabs/useTabListState.d.ts","name":"TabListProps"},"declarations":[{"fileName":"midas/node_modules/react-stately/dist/types/src/tabs/useTabListState.d.ts","name":"TabListProps"}],"type":{"name":"enum","raw":"Key","value":[{"value":"number"},{"value":"string"}]}},"defaultSelectedKey":{"defaultValue":null,"description":"The initial selected keys in the collection (uncontrolled).","name":"defaultSelectedKey","required":false,"parent":{"fileName":"midas/node_modules/react-stately/dist/types/src/tabs/useTabListState.d.ts","name":"TabListProps"},"declarations":[{"fileName":"midas/node_modules/react-stately/dist/types/src/tabs/useTabListState.d.ts","name":"TabListProps"}],"type":{"name":"enum","raw":"Key","value":[{"value":"number"},{"value":"string"}]}},"onSelectionChange":{"defaultValue":null,"description":"Handler that is called when the selection changes.","name":"onSelectionChange","required":false,"parent":{"fileName":"midas/node_modules/react-stately/dist/types/src/tabs/useTabListState.d.ts","name":"TabListProps"},"declarations":[{"fileName":"midas/node_modules/react-stately/dist/types/src/tabs/useTabListState.d.ts","name":"TabListProps"}],"type":{"name":"enum","raw":"((key: Key) => void)","value":[{"value":"(key: Key) => void","description":"","fullComment":"","tags":{}}]}},"keyboardActivation":{"defaultValue":{"value":"\'automatic\'"},"description":"Whether tabs are activated automatically on focus or manually.","name":"keyboardActivation","required":false,"parent":{"fileName":"midas/node_modules/react-aria/dist/types/src/tabs/useTabList.d.ts","name":"AriaTabListProps"},"declarations":[{"fileName":"midas/node_modules/react-aria/dist/types/src/tabs/useTabList.d.ts","name":"AriaTabListProps"}],"type":{"name":"enum","raw":"\\"automatic\\" | \\"manual\\"","value":[{"value":"\\"automatic\\""},{"value":"\\"manual\\""}]}},"children":{"defaultValue":null,"description":"The children of the component. A function may be provided to alter the children based on\\ncomponent state.","name":"children","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"RenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"RenderProps"}],"type":{"name":"enum","raw":"ChildrenOrFunction<TabsRenderProps>","value":[{"value":"(values: TabsRenderProps & { defaultChildren: ReactNode; }) => ReactNode","description":"","fullComment":"","tags":{}},{"value":"Iterable<ReactNode>","description":"","fullComment":"","tags":{}},{"value":"Promise<AwaitedReactNode>","description":"Represents the completion of an asynchronous operation","fullComment":"Represents the completion of an asynchronous operation","tags":{}},{"value":"ReactElement<unknown, string | JSXElementConstructor<any>>","description":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.","fullComment":"Represents a JSX element.\\n\\nWhere {@link ReactNode} represents everything that can be rendered, `ReactElement`\\nonly represents JSX.\\n@template P The type of the props object\\n@template T The type of the component or tag\\n@example ```tsx\\nconst element: ReactElement = <div />;\\n```","tags":{"template":"P The type of the props object\\nT The type of the component or tag","example":"```tsx\\nconst element: ReactElement = <div />;\\n```"}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}},{"value":"bigint"},{"value":"false"},{"value":"null"},{"value":"number"},{"value":"string"},{"value":"true"}]}},"style":{"defaultValue":null,"description":"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\\nelement. A function may be provided to compute the style based on component state.","name":"style","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"StyleRenderProps"}],"type":{"name":"enum","raw":"StyleOrFunction<TabsRenderProps>","value":[{"value":"(values: TabsRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties | undefined","description":"","fullComment":"","tags":{}},{"value":"CSSProperties","description":"","fullComment":"","tags":{}}]}},"render":{"defaultValue":null,"description":"Overrides the default DOM element with a custom render function.\\nThis allows rendering existing components with built-in styles and behaviors\\nsuch as router links, animation libraries, and pre-styled components.\\n\\nRequirements:\\n\\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\\n  `<a>`).\\n- Only a single root DOM element can be rendered (no fragments).\\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\\n  as appropriate.","name":"render","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"DOMRenderProps"}],"type":{"name":"DOMRenderFunction<\\"div\\", TabsRenderProps>","raw":"DOMRenderFunction<\\"div\\", TabsRenderProps>"}},"slot":{"defaultValue":null,"description":"A slot name for the component. Slots allow the component to receive props from a parent\\ncomponent. An explicit `null` value indicates that the local props completely override all\\nprops received from a parent.","name":"slot","required":false,"parent":{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"SlotProps"},"declarations":[{"fileName":"midas/node_modules/react-aria-components/dist/types/src/utils.d.ts","name":"SlotProps"}],"type":{"name":"enum","raw":"string | null","value":[{"value":"null"},{"value":"string"}]}}},"types":{}}')
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(82737);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/tabs/Tabs.tsx
var Tabs = __webpack_require__(52439);
// EXTERNAL MODULE: ./packages/components/src/tabs/TabList.tsx
var TabList = __webpack_require__(76482);
// EXTERNAL MODULE: ./packages/components/src/tabs/Tab.tsx
var Tab = __webpack_require__(53802);
// EXTERNAL MODULE: ./packages/components/src/tabs/TabPanel.tsx
var TabPanel = __webpack_require__(28674);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(20883);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.mjs
var x = __webpack_require__(69237);
// EXTERNAL MODULE: ./packages/theme/src/index.ts + 3 modules
var src = __webpack_require__(10734);
;// CONCATENATED MODULE: ./apps/docs/src/components/examples/tabs/TabsExamples.tsx





const BasicExample = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* .Tabs */.t, {
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabList/* .TabList */.w, {
                "aria-label": "Viktig information om frukter och b\xe4r",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* .Tab */.o, {
                        id: "vitaminer",
                        children: "Vitaminer"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* .Tab */.o, {
                        id: "frukter",
                        children: "Frysta frukter och b\xe4r"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* .Tab */.o, {
                        id: "hallon",
                        children: "Frysta importerade hallon"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* .TabPanel */.K, {
                id: "vitaminer",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                    children: "Oavsett om du \xe4ter en frukt, lite b\xe4r, en n\xe4ve gr\xf6nsaker eller baljv\xe4xter, f\xe5r du i dig m\xe5nga viktiga n\xe4rings\xe4mnen som kroppen beh\xf6ver f\xf6r att m\xe5 bra - fibrer, C-vitamin, folat/folsyra, vitamin K, kalium och antioxidanter, som karotenoider. Eftersom olika sorters frukt och gr\xf6nt inneh\xe5ller olika n\xe4rings\xe4mnen \xe4r det bra att \xe4ta varierat."
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* .TabPanel */.K, {
                id: "frukter",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                    children: "F\xf6r n\xe4ringsv\xe4rdet spelar det mindre roll om man \xe4ter f\xe4rska eller frysta frukter och gr\xf6nsaker. Frysta produkter h\xe5ller l\xe4ngre och \xe4r ett smart s\xe4tt att minska matsvinnet."
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* .TabPanel */.K, {
                id: "hallon",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                    children: "Frysta importerade hallon kan vara f\xf6rorenade med norovirus, som orsakar vinterkr\xe4ksjukan. Det kan ocks\xe5 finnas norovirus och hepatit A-virus p\xe5 andra frysta b\xe4r men det \xe4r mycket ovanligare."
                })
            })
        ]
    });
const ControlledExample = (props)=>{
    const [selectedTab, setSelectedTab] = react.useState('frukter');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* .Tabs */.t, {
                ...props,
                selectedKey: selectedTab,
                onSelectionChange: setSelectedTab,
                style: {
                    marginBottom: '1rem'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabList/* .TabList */.w, {
                        "aria-label": "Viktig information om frukter och b\xe4r",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* .Tab */.o, {
                                id: "vitaminer",
                                children: "Vitaminer"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* .Tab */.o, {
                                id: "frukter",
                                children: "Frysta frukter och b\xe4r"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* .Tab */.o, {
                                id: "hallon",
                                children: "Frysta importerade hallon"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* .TabPanel */.K, {
                        id: "vitaminer",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                            children: "Oavsett om du \xe4ter en frukt, lite b\xe4r, en n\xe4ve gr\xf6nsaker eller baljv\xe4xter, f\xe5r du i dig m\xe5nga viktiga n\xe4rings\xe4mnen som kroppen beh\xf6ver f\xf6r att m\xe5 bra - fibrer, C-vitamin, folat/folsyra, vitamin K, kalium och antioxidanter, som karotenoider. Eftersom olika sorters frukt och gr\xf6nt inneh\xe5ller olika n\xe4rings\xe4mnen \xe4r det bra att \xe4ta varierat."
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* .TabPanel */.K, {
                        id: "frukter",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                            children: "F\xf6r n\xe4ringsv\xe4rdet spelar det mindre roll om man \xe4ter f\xe4rska eller frysta frukter och gr\xf6nsaker. Frysta produkter h\xe5ller l\xe4ngre och \xe4r ett smart s\xe4tt att minska matsvinnet."
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* .TabPanel */.K, {
                        id: "hallon",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                            children: "Frysta importerade hallon kan vara f\xf6rorenade med norovirus, som orsakar vinterkr\xe4ksjukan. Det kan ocks\xe5 finnas norovirus och hepatit A-virus p\xe5 andra frysta b\xe4r men det \xe4r mycket ovanligare."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("pre", {
                children: [
                    "Vald flik: ",
                    selectedTab
                ]
            })
        ]
    });
};
const ClosableTabsExample = ()=>{
    const [openTabs, setOpenTabs] = (0,react.useState)([
        {
            id: 'bananer',
            title: 'Bananer'
        },
        {
            id: 'applen',
            title: 'Äpplen'
        }
    ]);
    const handleCloseTab = (idToClose)=>{
        if (openTabs.length > 1) setOpenTabs((prevTabs)=>prevTabs.filter((tab)=>tab.id !== idToClose));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* .Tabs */.t, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabList/* .TabList */.w, {
                children: openTabs.map((tab)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Tab/* .Tab */.o, {
                        id: tab.id,
                        style: {
                            display: 'flex',
                            gap: '0.5rem',
                            alignItems: 'center',
                            padding: 0,
                            paddingLeft: (/* inlined export .variables.spaceMedium */"1rem")
                        },
                        children: [
                            tab.title,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                                variant: "icon",
                                onPress: ()=>handleCloseTab(tab.id),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* ["default"] */.A, {
                                    size: 16
                                })
                            })
                        ]
                    }, tab.id))
            }),
            openTabs.map((tab)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* .TabPanel */.K, {
                    id: tab.id,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Text/* .Text */.E, {
                        children: [
                            "Information om ",
                            tab.title
                        ]
                    })
                }, tab.id))
        ]
    });
};

;// CONCATENATED MODULE: ./apps/docs/docs/components/tabs.mdx


const frontMatter = {
	title: 'Tabs',
	description: 'Organisera information med hjälp av flikar.'
};
const contentTitle = undefined;

const assets = {

};







const toc = [{
  "value": "Beskrivning",
  "id": "beskrivning",
  "level": 2
}, {
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "Contained",
  "id": "contained",
  "level": 3
}, {
  "value": "Användning",
  "id": "användning",
  "level": 2
}, {
  "value": "Standardval (okontrollerad)",
  "id": "standardval-okontrollerad",
  "level": 3
}, {
  "value": "Kontrollerat läge",
  "id": "kontrollerat-läge",
  "level": 3
}, {
  "value": "Flikar med stängningsknapp",
  "id": "flikar-med-stängningsknapp",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* .ComponentHeader */.B, {
      name: "Tabs",
      friendlyName: "Flikar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En komponent för att segmentera information och minska den mängd som direkt presenteras för användaren."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Tabs, TabList, Tab, TabPanel } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Tabs>\n  <TabList aria-label='Viktig information om frukter och bär'>\n    <Tab id='vitaminer'>...</Tab>\n    <Tab id='frukter'>...</Tab>\n    <Tab id='hallon'>...</Tab>\n  </TabList>\n  <TabPanel id='vitaminer'>...</TabPanel>\n  <TabPanel id='frukter'>...</TabPanel>\n  <TabPanel id='hallon'>...</TabPanel>\n</Tabs>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(BasicExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "beskrivning",
      children: "Beskrivning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Midas ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tabs"
      }), " är en wrapperkomponent som används tillsammans med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TabList"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tab"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TabPanel"
      }), ".\nSamtliga komponenter utgår från React Arias komponenter med samma namn, vänligen se ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/Tabs.html",
        children: "dokumentationen för Tabs hos React Aria"
      }), " för en djupare förklaring."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tabs finns i varianterna ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"uncontained\" | \"contained\""
      }), ", där den senare passar bra för äldre appar som använder tabs mer som \"flikar\":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "contained",
      children: "Contained"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{1}",
        children: "<Tabs variant='contained'>\n  <TabList aria-label='Viktig information om frukter och bär'>\n    <Tab id='vitaminer'>...</Tab>\n    <Tab id='frukter'>...</Tab>\n    <Tab id='hallon'>...</Tab>\n  </TabList>\n  <TabPanel id='vitaminer'>...</TabPanel>\n  <TabPanel id='frukter'>...</TabPanel>\n  <TabPanel id='hallon'>...</TabPanel>\n</Tabs>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(BasicExample, {
        variant: "contained"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "användning",
      children: "Användning"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "standardval-okontrollerad",
      children: "Standardval (okontrollerad)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Välj vilket alternativ som ska vara förvalt med attributet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "defaultSelectedKey"
      }), ", använd id för den flik som ska vara förvald."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{1}",
        children: "<Tabs defaultSelectedKey='frukter'>\n  <TabList aria-label='Viktig information om frukter och bär'>\n    <Tab id='vitaminer'>...</Tab>\n    <Tab id='frukter'>...</Tab>\n    <Tab id='hallon'>...</Tab>\n  </TabList>\n  <TabPanel id='vitaminer'>...</TabPanel>\n  <TabPanel id='frukter'>...</TabPanel>\n  <TabPanel id='hallon'>...</TabPanel>\n</Tabs>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(BasicExample, {
        defaultSelectedKey: "frukter"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kontrollerat-läge",
      children: "Kontrollerat läge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Valet av flik kan kontrolleras med hjälp av attributet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "selectedKey"
      }), " tillsammans med eventet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onSelectionChange"
      }), ".\nFlikens ID skickas tillbaka i callbacken vid valändring, vilket kan användas för att uppdatera ditt state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import React from 'react'\nimport type { Key } from 'react-aria-components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "const [selectedTab, setSelectedTab] = React.useState<Key>('frukter')\n\nreturn (\n  <Tabs\n    // highlight-start\n    selectedKey={selectedTab}\n    onSelectionChange={setSelectedTab}\n    // highlight-end\n  >\n    <TabList aria-label='Viktig information om frukter och bär'>\n      <Tab id='vitaminer'>...</Tab>\n      <Tab id='frukter'>...</Tab>\n      <Tab id='hallon'>...</Tab>\n    </TabList>\n    <TabPanel id='vitaminer'>...</TabPanel>\n    <TabPanel id='frukter'>...</TabPanel>\n    <TabPanel id='hallon'>...</TabPanel>\n  </Tabs>\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(ControlledExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flikar-med-stängningsknapp",
      children: "Flikar med stängningsknapp"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Här är ett exempel på flikar där varje flik har en stängningsknapp. Detta är användbart för scenarion där flikar kan läggas till eller tas bort dynamiskt av användaren. För mer information om dynamiska flikar, se ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/Tabs.html#dynamic-items",
        children: "React Aria dynamic tabs"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import React, { useState } from 'react'\nimport { X } from 'lucide-react'\nimport { Tab, TabList, Tabs, TabPanel, Text, Button } from '@midas-ds/components'\nimport { variables } from '@midas-ds/theme'\n\nexport const ClosableTabsExample = () => {\n  const [openTabs, setOpenTabs] = useState([\n    { id: 'bananer', title: 'Bananer' },\n    { id: 'applen', title: 'Äpplen' },\n  ])\n\n  const handleCloseTab = (idToClose: string) => {\n    if (openTabs.length > 1) setOpenTabs(prevTabs => prevTabs.filter(tab => tab.id !== idToClose))\n  }\n\n  return (\n    <Tabs>\n      <TabList>\n        {openTabs.map(tab => (\n          <Tab\n            key={tab.id}\n            id={tab.id}\n            style={{\n              display: 'flex',\n              gap: '0.5rem',\n              alignItems: 'center',\n              padding: 0,\n              paddingLeft: variables.spacing50,\n            }}\n          >\n            {tab.title}\n            <Button\n              variant='icon'\n              onPress={() => handleCloseTab(tab.id)}\n            >\n              <X size={16} />\n            </Button>\n          </Tab>\n        ))}\n      </TabList>\n      {openTabs.map(tab => (\n        <TabPanel\n          key={tab.id}\n          id={tab.id}\n        >\n          <Text>Information om {tab.title}</Text>\n        </TabPanel>\n      ))}\n    </Tabs>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(ClosableTabsExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* .PropTable */.U, {
      doc: Tabs_namespaceObject
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
52072(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"container":"container_uCKZ","removeMargins":"removeMargins_rQ9U","contained":"contained_R9lB","flex":"flex_LQ20","fluid":"fluid_Y1tE","col":"col_tmG6","col-1":"col-1_OVvW","col-2":"col-2_XfVI","col-3":"col-3_KxqE","col-quarter":"col-quarter_eUut","col-4":"col-4_Ovxr","col-third":"col-third_FUaF","col-5":"col-5_uIyd","col-6":"col-6_i8WR","col-half":"col-half_GzSn","col-7":"col-7_devX","col-8":"col-8_tlAZ","col-9":"col-9_Nbjm","col-10":"col-10_rwyP","col-11":"col-11_ShOw","col-12":"col-12_eQeJ","col-full":"col-full_K_XT","col-auto":"col-auto_nMhH","col-grow":"col-grow_TBON","col-xs-1":"col-xs-1_Bg_O","col-xs-2":"col-xs-2_UhmL","col-xs-3":"col-xs-3_mEvh","col-xs-quarter":"col-xs-quarter_mtoI","col-xs-4":"col-xs-4_Uv5i","col-xs-third":"col-xs-third_AHrM","col-xs-5":"col-xs-5_Gdnm","col-xs-6":"col-xs-6_z366","col-xs-half":"col-xs-half_vH6m","col-xs-7":"col-xs-7_HNwO","col-xs-8":"col-xs-8_Vwih","col-xs-9":"col-xs-9_vfTc","col-xs-10":"col-xs-10_wJWt","col-xs-11":"col-xs-11_KTEA","col-xs-12":"col-xs-12_TaE_","col-xs-full":"col-xs-full_enWi","col-xs-auto":"col-xs-auto_G2jj","col-xs-grow":"col-xs-grow_kY1W","col-sm-1":"col-sm-1_YvIs","col-sm-2":"col-sm-2_NSCq","col-sm-3":"col-sm-3_cJ0H","col-sm-quarter":"col-sm-quarter_WWBJ","col-sm-4":"col-sm-4_dtZx","col-sm-third":"col-sm-third_g3dG","col-sm-5":"col-sm-5_C87q","col-sm-6":"col-sm-6_SkMd","col-sm-half":"col-sm-half_QX4f","col-sm-7":"col-sm-7_wa6s","col-sm-8":"col-sm-8_zH5I","col-sm-9":"col-sm-9_ym4Z","col-sm-10":"col-sm-10_jE4j","col-sm-11":"col-sm-11_Va2g","col-sm-12":"col-sm-12_BgjD","col-sm-full":"col-sm-full_Nb6O","col-sm-auto":"col-sm-auto_Qj4m","col-sm-grow":"col-sm-grow_mAH5","col-md-1":"col-md-1_Zeqd","col-md-2":"col-md-2_DR6K","col-md-3":"col-md-3_OZK7","col-md-quarter":"col-md-quarter_AmxM","col-md-4":"col-md-4_NxEu","col-md-third":"col-md-third_J4Ja","col-md-5":"col-md-5_cBkY","col-md-6":"col-md-6_it5t","col-md-half":"col-md-half_aEv_","col-md-7":"col-md-7__sAT","col-md-8":"col-md-8_WfW7","col-md-9":"col-md-9_orzQ","col-md-10":"col-md-10_wh5t","col-md-11":"col-md-11_Wsgq","col-md-12":"col-md-12_gZQg","col-md-full":"col-md-full_Ow4Z","col-md-auto":"col-md-auto_e67j","col-md-grow":"col-md-grow_quHq","col-lg-1":"col-lg-1_e1au","col-lg-2":"col-lg-2_fUsj","col-lg-3":"col-lg-3_EhhM","col-lg-quarter":"col-lg-quarter_SI9I","col-lg-4":"col-lg-4_VuKz","col-lg-third":"col-lg-third_Lf2A","col-lg-5":"col-lg-5_TF5r","col-lg-6":"col-lg-6_E93v","col-lg-half":"col-lg-half_ZdoE","col-lg-7":"col-lg-7_L5CO","col-lg-8":"col-lg-8_ZBHN","col-lg-9":"col-lg-9_TbUu","col-lg-10":"col-lg-10_Tsqu","col-lg-11":"col-lg-11_Eg8x","col-lg-12":"col-lg-12_eNvi","col-lg-full":"col-lg-full_SaRE","col-lg-auto":"col-lg-auto_fNRO","col-lg-grow":"col-lg-grow_XTrt","col-xl-1":"col-xl-1_BRna","col-xl-2":"col-xl-2_eGSK","col-xl-3":"col-xl-3_RrW2","col-xl-quarter":"col-xl-quarter_V_Yw","col-xl-4":"col-xl-4_R4AZ","col-xl-third":"col-xl-third_W3hT","col-xl-5":"col-xl-5_k7Gx","col-xl-6":"col-xl-6_xZyb","col-xl-half":"col-xl-half_V9xE","col-xl-7":"col-xl-7_lJfg","col-xl-8":"col-xl-8_zErQ","col-xl-9":"col-xl-9_oYwQ","col-xl-10":"col-xl-10_cLTa","col-xl-11":"col-xl-11_xqWK","col-xl-12":"col-xl-12_Vrsf","col-xl-full":"col-xl-full_vVSm","col-xl-auto":"col-xl-auto_YBap","col-xl-grow":"col-xl-grow_YMBn","offset-1":"offset-1_ZQkJ","offset-2":"offset-2_Reek","offset-3":"offset-3_SDkl","offset-quarter":"offset-quarter_ho5e","offset-4":"offset-4_L0XB","offset-third":"offset-third_dE8e","offset-5":"offset-5_Mz95","offset-6":"offset-6_Zp68","offset-half":"offset-half_nGtc","offset-7":"offset-7_ZApX","offset-8":"offset-8_UZTZ","offset-9":"offset-9_FiKS","offset-10":"offset-10_hN9R","offset-11":"offset-11_cqgv","offset-auto":"offset-auto_ZBrI","offset-xs-1":"offset-xs-1__ZrT","offset-xs-2":"offset-xs-2_WySR","offset-xs-3":"offset-xs-3_u9Tb","offset-xs-quarter":"offset-xs-quarter_Pd1o","offset-xs-4":"offset-xs-4_Bibg","offset-xs-third":"offset-xs-third_CeeW","offset-xs-5":"offset-xs-5_OgED","offset-xs-6":"offset-xs-6_ihSu","offset-xs-half":"offset-xs-half_Vrdz","offset-xs-7":"offset-xs-7_TtZQ","offset-xs-8":"offset-xs-8_Ftc2","offset-xs-9":"offset-xs-9_HptZ","offset-xs-10":"offset-xs-10_umjb","offset-xs-11":"offset-xs-11_Suix","offset-xs-auto":"offset-xs-auto_fxe8","offset-sm-1":"offset-sm-1_knSM","offset-sm-2":"offset-sm-2_zWxo","offset-sm-3":"offset-sm-3_oqp6","offset-sm-quarter":"offset-sm-quarter_Nav1","offset-sm-4":"offset-sm-4_EvUX","offset-sm-third":"offset-sm-third_tGgh","offset-sm-5":"offset-sm-5_raNi","offset-sm-6":"offset-sm-6_KTA8","offset-sm-half":"offset-sm-half_ab81","offset-sm-7":"offset-sm-7_duQl","offset-sm-8":"offset-sm-8_uRxp","offset-sm-9":"offset-sm-9_AqYl","offset-sm-10":"offset-sm-10_Wt6J","offset-sm-11":"offset-sm-11_yAYq","offset-sm-auto":"offset-sm-auto_FAp6","offset-md-1":"offset-md-1_OpgB","offset-md-2":"offset-md-2_U24n","offset-md-3":"offset-md-3_YxnQ","offset-md-quarter":"offset-md-quarter_y53T","offset-md-4":"offset-md-4_ZaOC","offset-md-third":"offset-md-third_HZWP","offset-md-5":"offset-md-5_KVFL","offset-md-6":"offset-md-6_bZvL","offset-md-half":"offset-md-half_yilA","offset-md-7":"offset-md-7_fs04","offset-md-8":"offset-md-8_QmYF","offset-md-9":"offset-md-9_QoVc","offset-md-10":"offset-md-10_OrE0","offset-md-11":"offset-md-11_reKz","offset-md-auto":"offset-md-auto_ETdh","offset-lg-1":"offset-lg-1_zi3j","offset-lg-2":"offset-lg-2_YgjU","offset-lg-3":"offset-lg-3_CHdw","offset-lg-quarter":"offset-lg-quarter_Chor","offset-lg-4":"offset-lg-4_NOCF","offset-lg-third":"offset-lg-third_LTbL","offset-lg-5":"offset-lg-5_dGzM","offset-lg-6":"offset-lg-6_kXXi","offset-lg-half":"offset-lg-half_vFHN","offset-lg-7":"offset-lg-7_jIth","offset-lg-8":"offset-lg-8_T0Jx","offset-lg-9":"offset-lg-9_mYmL","offset-lg-10":"offset-lg-10_clJ6","offset-lg-11":"offset-lg-11_zFW2","offset-lg-auto":"offset-lg-auto_W3q4","offset-xl-1":"offset-xl-1_pRWH","offset-xl-2":"offset-xl-2_FX3q","offset-xl-3":"offset-xl-3_P8xx","offset-xl-quarter":"offset-xl-quarter_RLTy","offset-xl-4":"offset-xl-4_n7Vy","offset-xl-third":"offset-xl-third_w0fc","offset-xl-5":"offset-xl-5_vC_8","offset-xl-6":"offset-xl-6_BvQ2","offset-xl-half":"offset-xl-half_HQ16","offset-xl-7":"offset-xl-7_m1bv","offset-xl-8":"offset-xl-8_FJ1u","offset-xl-9":"offset-xl-9_oAbC","offset-xl-10":"offset-xl-10_wwaH","offset-xl-11":"offset-xl-11_HpDF","offset-xl-auto":"offset-xl-auto_Dv5P"});

},
17456(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"tabs":"tabs_XlEI","tabList":"tabList_X4g6","tab":"tab_huWb","contained":"contained_mqxp","medium":"medium_GkYV","label":"label_tRaD","labelSizer":"labelSizer_e6XW","selectionIndicator":"selectionIndicator_hVSM","animated":"animated_ZUTI","tabPanel":"tabPanel_IyRj"});

},
28247(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ PropTable)
});

// UNUSED EXPORTS: DisplayCompositeTypes

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(5245);
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(11728);
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx + 1 modules
var Accordion = __webpack_require__(18003);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx + 1 modules
var AccordionItem = __webpack_require__(69130);
;// CONCATENATED MODULE: ./apps/docs/src/css/propstable.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const propstable_module = ({"accordion":"accordion_M8EQ","propsGridTable":"propsGridTable_luj3","membersTable":"membersTable_K5oi","popover":"popover_gEf7","arrow":"arrow_kUCF"});
// EXTERNAL MODULE: ./node_modules/react-markdown/lib/index.js + 137 modules
var lib = __webpack_require__(24649);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/Lowlight.js + 2 modules
var Lowlight = __webpack_require__(2268);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/common.js + 38 modules
var common = __webpack_require__(14788);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/Pressable.mjs
var Pressable = __webpack_require__(45210);
;// CONCATENATED MODULE: ./apps/docs/src/utils/jsdocLinkToMarkdown.ts
const jsdocLinkToMarkdown = (comment)=>// {@link URL|Text} or {@link URL Text} format (JSDoc style)
    comment.replace(/\{@link\s+([^|\s}]+)\s*\|?\s*([^}]+)\}/g, (match, url, text)=>`[${text.trim()}](${url})`)// Replace @see with "See " at the beginning of lines
    .replace(/^\s*@see\s+/gm, 'See ')// Remove @link tags from the beginning of lines (but keep the markdown link)
    .replace(/^\s*@link\s+/gm, '')// Remove any extra @link tags that might be inline
    .replace(/\s*@link\s+/g, ' ');

;// CONCATENATED MODULE: ./apps/docs/src/components/PropsTable.tsx









/**
 * Generated docs store drill-down members once per file in `doc.types` and
 * refer to them by key. Resolves those references into nested `members`.
 */ function resolveProps(doc) {
    const tables = new Map();
    const resolve = (ref)=>{
        if (!ref) return undefined;
        if (!tables.has(ref)) {
            tables.set(ref, doc.types[ref].map((param)=>{
                let { membersRef, ...member } = param;
                return {
                    ...member,
                    members: resolve(membersRef)
                };
            }));
        }
        return tables.get(ref);
    };
    return Object.fromEntries(Object.entries(doc.props).map((param)=>{
        let [key, prop] = param;
        const { membersRef, value, ...type } = prop.type;
        return [
            key,
            {
                ...prop,
                type: {
                    ...type,
                    value: value?.map((param)=>{
                        let { membersRef, ...entry } = param;
                        return {
                            ...entry,
                            members: resolve(membersRef)
                        };
                    }),
                    members: resolve(membersRef)
                }
            }
        ];
    }));
}
function hasMembers(type) {
    return Array.isArray(type.members) && type.members.length > 0;
}
/** Renders a type name — clickable with drill-down popover if it has members */ const DrillableType = (param)=>{
    let { typeStr, members } = param;
    if (members && members.length > 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* .DialogTrigger */.zM, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Pressable/* .Pressable */.o, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        role: "button",
                        style: {
                            cursor: 'pointer'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                            value: typeStr,
                            inline: true,
                            language: "typescript",
                            markers: []
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* .Popover */.A, {
                    style: {
                        maxWidth: 'min(90vw, 800px)'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MembersTable, {
                        members: members
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
        value: typeStr,
        inline: true,
        language: "typescript",
        markers: []
    });
};
const MembersTable = (param)=>{
    let { members } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: propstable_module.membersTable,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Name"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Type"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Description"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                    children: members.map((member)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                                        value: `${member.name}${member.required ? '' : '?'}`,
                                        inline: true,
                                        language: "typescript",
                                        markers: []
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DrillableType, {
                                        typeStr: member.type,
                                        members: member.members
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    children: member.description || '-'
                                })
                            ]
                        }, member.name))
                })
            ]
        })
    });
};
const DisplayCompositeTypes = (param)=>{
    let { props } = param;
    if (hasMembers(props.type)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(DrillableType, {
            typeStr: props.type.name,
            members: props.type.members
        });
    }
    switch(props.type.name){
        case 'enum':
            {
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* .DialogTrigger */.zM, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Pressable/* .Pressable */.o, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                role: "button",
                                style: {
                                    cursor: 'pointer'
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                                    value: props.type.raw,
                                    inline: true,
                                    language: "typescript",
                                    markers: []
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* .Popover */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "hljs-code",
                                children: props.type.value?.map((r, i)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            i === 0 ? ' ' : ' | ',
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(DrillableType, {
                                                typeStr: r.value.replace(/"/g, "'"),
                                                members: r.members
                                            })
                                        ]
                                    }, `${r.value}${i}`);
                                })
                            })
                        })
                    ]
                });
            }
        default:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                value: props.type.name,
                inline: true,
                language: "typescript",
                markers: []
            });
    }
};
/**
 * Props table for a component. Import the component's generated API doc in
 * the MDX file and pass it as `doc`:
 *
 * ```mdx
 * import ButtonApi from '@midas-ds/api/components/Button.json'
 *
 * <PropTable doc={ButtonApi} />
 * ```
 */ const PropTable = (param)=>{
    let { doc, defaultOpen = true } = param;
    const props = (0,react.useMemo)(()=>resolveProps(doc), [
        doc
    ]);
    const { events, accessibility, rest } = Object.entries(props).reduce((acc, param)=>{
        let [key, value] = param;
        if (key.startsWith('on')) {
            acc.events[key] = value;
        } else if (key.startsWith('aria-')) {
            acc.accessibility[key] = value;
        } else {
            acc.rest[key] = value;
        }
        return acc;
    }, {
        events: {},
        accessibility: {},
        rest: {}
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* .Accordion */.n, {
        className: propstable_module.accordion,
        allowsMultipleExpanded: true,
        defaultExpandedKeys: defaultOpen ? [
            'props'
        ] : [],
        children: [
            Object.getOwnPropertyNames(rest).length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionItem/* .AccordionItem */.A, {
                id: "props",
                title: "Props",
                className: propstable_module.accordionItem,
                hasBackground: false,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid, {
                    propGroup: rest,
                    props: props
                })
            }),
            Object.getOwnPropertyNames(events).length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionItem/* .AccordionItem */.A, {
                id: "events",
                title: "Events",
                className: propstable_module.accordionItem,
                hasBackground: false,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid, {
                    propGroup: events,
                    props: props,
                    showDefault: false
                })
            }),
            Object.getOwnPropertyNames(accessibility).length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionItem/* .AccordionItem */.A, {
                id: "accessibility",
                title: "Tillg\xe4nglighet",
                className: propstable_module.accordionItem,
                hasBackground: false,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid, {
                    propGroup: accessibility,
                    props: props,
                    showDefault: false
                })
            })
        ]
    });
};
const Grid = (param)=>{
    let { propGroup, props, showDefault = true } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: propstable_module.propsGridTable,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Name"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Type"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: showDefault && 'Default'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                children: "Description"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                    children: Object.keys(propGroup).map((key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("td", {
                                    "data-title": "Name",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                                            value: key,
                                            inline: true,
                                            language: "typescript",
                                            markers: []
                                        }),
                                        props[key].required && ' *'
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    "data-title": "Type",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DisplayCompositeTypes, {
                                        props: props[key]
                                    })
                                }),
                                showDefault ? /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    "data-title": "Default",
                                    children: props[key].defaultValue ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Lowlight/* ["default"] */.A, {
                                        value: props[key].defaultValue.value,
                                        inline: true,
                                        language: "typescript",
                                        markers: []
                                    }) : '-'
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                    "data-title": "Description",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* .Markdown */.oz, {
                                        children: jsdocLinkToMarkdown(props[key].description)
                                    })
                                })
                            ]
                        }, key))
                })
            ]
        })
    });
};


},
82737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  B: () => (ComponentHeader)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _midas_ds_components__rspack_import_3 = __webpack_require__(25879);
/* import */ var _midas_ds_components__rspack_import_4 = __webpack_require__(80782);
/* import */ var _midas_ds_components__rspack_import_5 = __webpack_require__(35900);
/* import */ var lucide_react__rspack_import_6 = __webpack_require__(85304);
/* import */ var _site_src_components_icons__rspack_import_1 = __webpack_require__(95860);
/* import */ var _docusaurus_useBaseUrl__rspack_import_2 = __webpack_require__(66497);



/* eslint-disable @nx/enforce-module-boundaries */ 

const ComponentHeader = (param)=>{
    let { name, friendlyName, overrideHeadlessLink, overrideHeadlessLinkTitle, hideStorybookLink, overrideStorybookPath } = param;
    const baseUrl = _docusaurus_useBaseUrl__rspack_import_2/* ["default"] */.Ay;
    const componentPath = overrideStorybookPath ?? `?path=/docs/components-${name.toLowerCase()}--docs`;
    const storybookHost =  false ? 0 : baseUrl('/storybook');
    const storybookLink = `${storybookHost}/${componentPath}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: "component-header",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_midas_ds_components__rspack_import_3/* .Grid */.x, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_midas_ds_components__rspack_import_4/* .GridItem */.E, {
                    size: "auto",
                    className: "friendlyName",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                        children: friendlyName
                    })
                }),
                !hideStorybookLink && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_midas_ds_components__rspack_import_4/* .GridItem */.E, {
                    size: "auto",
                    className: "headerLink",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_midas_ds_components__rspack_import_5/* .LinkButton */.z, {
                        href: storybookLink,
                        variant: "tertiary",
                        icon: _site_src_components_icons__rspack_import_1/* .EmptyIcon */.F,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_site_src_components_icons__rspack_import_1/* .StorybookIcon */.q, {
                                size: 24,
                                color: "#FF4785"
                            }),
                            "Storybook"
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_midas_ds_components__rspack_import_4/* .GridItem */.E, {
                    size: "auto",
                    className: "headerLink",
                    children: overrideHeadlessLink !== '' && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_midas_ds_components__rspack_import_5/* .LinkButton */.z, {
                        href: overrideHeadlessLink ? overrideHeadlessLink : `https://react-spectrum.adobe.com/react-aria/${name}.html`,
                        target: "_blank",
                        variant: "tertiary",
                        icon: lucide_react__rspack_import_6/* ["default"] */.A,
                        iconPlacement: "left",
                        children: overrideHeadlessLinkTitle ? overrideHeadlessLinkTitle : 'React Aria'
                    })
                })
            ]
        })
    });
};


},
95860(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* reexport */ EmptyIcon),
  q: () => (/* reexport */ StorybookIcon)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./apps/docs/src/components/icons/Storybook.tsx


const StorybookIcon = /* @__PURE__ */ /*#__PURE__*/ react.forwardRef((param, forwardedRef)=>{
    let { color = 'currentColor', size = 20, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        viewBox: "-31.5 0 319 319",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        fill: "#000000",
        width: size,
        height: size,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                id: "SVGRepo_bgCarrier",
                strokeWidth: "0"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                id: "SVGRepo_tracerCarrier",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                id: "SVGRepo_iconCarrier",
                children: [
                    ' ',
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                        children: [
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z",
                                id: "path-1",
                                children: ' '
                            }),
                            ' '
                        ]
                    }),
                    ' ',
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                        children: [
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("mask", {
                                id: "mask-2",
                                fill: "white",
                                children: [
                                    ' ',
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("use", {
                                        href: "#path-1",
                                        children: " "
                                    }),
                                    ' '
                                ]
                            }),
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("use", {
                                fill: color,
                                fillRule: "nonzero",
                                href: "#path-1",
                                children: ' '
                            }),
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z",
                                fill: "#FFFFFF",
                                fillRule: "nonzero",
                                mask: "url(#mask-2)",
                                children: ' '
                            }),
                            ' '
                        ]
                    }),
                    ' '
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ./apps/docs/src/components/icons/Empty.tsx

const EmptyIcon = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        height: 0,
        width: 0
    });

;// CONCATENATED MODULE: ./apps/docs/src/components/icons/index.ts




},
18003(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ Accordion)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// CONCATENATED MODULE: ./packages/components/src/accordion/Accordion.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Accordion_module = ({"root":"root_dwc1","contained":"contained_snuo","triggerButton":"triggerButton_v7ly"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(13827);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(52436);
;// CONCATENATED MODULE: ./packages/components/src/accordion/Accordion.tsx
'use client';






/**
 * Accordions help reduce visual clutter on a page by organizing content into collapsible sections.
 */ const Accordion = (param)=>{
    let { children, className, isContained, size = 'large', ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionContext/* .AccordionContext.Provider */.C.Provider, {
        value: {
            isContained,
            size
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Disclosure/* .DisclosureGroup */.Tw, {
            className: (0,clsx/* ["default"] */.A)(Accordion_module.root, isContained ? Accordion_module.contained : Accordion_module.uncontained, className),
            ...props,
            children: children
        })
    });
};


},
52436(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  C: () => (AccordionContext)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);

const AccordionContext = (0,react__rspack_import_0.createContext)(undefined);


},
69130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccordionItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(13827);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.mjs
var chevron_down = __webpack_require__(16749);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/accordion/AccordionItem.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const AccordionItem_module = ({"item":"item_VttG","contained":"contained_ub98","medium":"medium_WM8r","success":"success_cpFV","warning":"warning_NxFE","info":"info_suK1","important":"important_n_K6","triggerButton":"triggerButton_En7k","triggerText":"triggerText_VvwO","trigger":"trigger_dCCq","triggerMainContent":"triggerMainContent_WoSV","\t":"\t_YXX_","chevronIcon":"chevronIcon_kSND","statusIcon":"statusIcon_DtWQ","panel":"panel_RCRU","content":"content_EuZw","hasBackground":"hasBackground_E4qK","header":"header_kp5y"});
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(72201);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(52436);
// EXTERNAL MODULE: ./packages/components/src/common/FeedbackStatusIcon.tsx + 1 modules
var FeedbackStatusIcon = __webpack_require__(19573);
;// CONCATENATED MODULE: ./packages/components/src/accordion/AccordionItem.tsx











const AccordionItem = (param)=>{
    let { title, children, className, headingLevel = 'h2', type, hasBackground = true, size = 'large', isContained: isContainedFromProp, iconAriaLabel, ...props } = param;
    const context = (0,react.useContext)(AccordionContext/* .AccordionContext */.C);
    const isContained = isContainedFromProp ?? context?.isContained ?? false;
    const titleIsReactNode = typeof title === 'object';
    (0,react.useEffect)(()=>{
        if (type && !isContained) {
            console.warn(`AccordionItem: When 'type' is set, it is recommended to also set 'isContained' to true for visual consistency.`);
        }
    }, [
        type,
        isContained
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Disclosure/* .Disclosure */.EN, {
        ...props,
        className: (0,clsx/* ["default"] */.A)(AccordionItem_module.item, type && isContained && AccordionItem_module[type], (size === 'medium' || context?.size === 'medium') && AccordionItem_module.medium, isContained && AccordionItem_module.contained, className),
        children: (0,utils/* .composeRenderProps */.HW)(children, (children)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: AccordionItem_module.trigger,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* .Button */.$, {
                            className: AccordionItem_module.triggerButton,
                            slot: "trigger",
                            variant: "icon",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* ["default"] */.A, {
                                    size: 20,
                                    className: AccordionItem_module.chevronIcon
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: AccordionItem_module.triggerMainContent,
                                    children: titleIsReactNode ? title : /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* .Heading */.D, {
                                        level: 3,
                                        elementType: headingLevel,
                                        className: AccordionItem_module.triggerText,
                                        children: title
                                    })
                                }),
                                type && isContained && /*#__PURE__*/ (0,jsx_runtime.jsx)(FeedbackStatusIcon/* .FeedbackStatusIcon */.$, {
                                    "aria-label": iconAriaLabel,
                                    className: AccordionItem_module.statusIcon,
                                    status: type
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Disclosure/* .DisclosurePanel */.kS, {
                        className: AccordionItem_module.panel,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (0,clsx/* ["default"] */.A)(AccordionItem_module.content, hasBackground && AccordionItem_module.hasBackground),
                            children: children
                        })
                    })
                ]
            }))
    });
};


},
19573(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ FeedbackStatusIcon)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.mjs
var check = __webpack_require__(53729);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.mjs
var info = __webpack_require__(50643);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/flag.mjs
var flag = __webpack_require__(4329);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs
var triangle_alert = __webpack_require__(63626);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
;// CONCATENATED MODULE: ./packages/components/src/common/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"ok":"okay","information":"information","importantInformation":"important information","warning":"warning"},"sv":{"ok":"okej","information":"information","importantInformation":"viktig information","warning":"varning"}}')
;// CONCATENATED MODULE: ./packages/components/src/common/FeedbackStatusIcon.tsx




const icons = {
    success: check/* ["default"] */.A,
    info: info/* ["default"] */.A,
    important: flag/* ["default"] */.A,
    warning: triangle_alert/* ["default"] */.A
};
const labels = {
    success: 'ok',
    info: 'information',
    important: 'importantInformation',
    warning: 'warning'
};
const FeedbackStatusIcon = (param)=>{
    let { status, 'aria-label': ariaLabel, size = 20, ...rest } = param;
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const Icon = icons[status];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
        "aria-label": ariaLabel || strings.format(labels[status]),
        size: size,
        ...rest
    });
};


},
25879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  x: () => (Grid)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _Grid_module_css__rspack_import_2 = __webpack_require__(52072);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(18496);




/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/grid}
 */ const Grid = (param)=>{
    let { children, isContained = false, removeMargins = false, ...rest } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        ...rest,
        className: (0,_utils_clsx__rspack_import_3/* ["default"] */.A)(_Grid_module_css__rspack_import_2/* ["default"].container */.A.container, isContained && _Grid_module_css__rspack_import_2/* ["default"].contained */.A.contained, removeMargins && _Grid_module_css__rspack_import_2/* ["default"].removeMargins */.A.removeMargins, rest.className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: _Grid_module_css__rspack_import_2/* ["default"].flex */.A.flex,
            children: children
        })
    });
};


},
80782(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  E: () => (GridItem)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var _Grid_module_css__rspack_import_2 = __webpack_require__(52072);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(18496);




/**
 * Columns based on display: flex;
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */ const GridItem = (param)=>{
    let { children, size, offset, ...props } = param;
    const offsetClass = offset ? `offset-${offset}` : '';
    const sizeClasses = getSizeClasses(size);
    const offsetClasses = getOffsetClasses(offset);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        ...props,
        className: (0,_utils_clsx__rspack_import_3/* ["default"] */.A)(_Grid_module_css__rspack_import_2/* ["default"].col */.A.col, _Grid_module_css__rspack_import_2/* ["default"] */.A[offsetClass], sizeClasses.map((cls)=>_Grid_module_css__rspack_import_2/* ["default"] */.A[cls]), offsetClasses.map((cls)=>_Grid_module_css__rspack_import_2/* ["default"] */.A[cls]), props.className),
        children: children
    });
};
const getSizeClasses = (size)=>{
    if (!size) return [];
    if (typeof size === 'object') {
        return Object.entries(size).map((param)=>{
            let [breakpoint, value] = param;
            return breakpoint === 'xs' ? `col-${value}` : `col-${breakpoint}-${value}`;
        });
    }
    return [
        `col-${size}`
    ];
};
const getOffsetClasses = (offset)=>{
    if (!offset) return [];
    if (typeof offset === 'object') {
        return Object.entries(offset).map((param)=>{
            let [breakpoint, value] = param;
            return breakpoint === 'xs' ? `offset-${value}` : `offset-${breakpoint}-${value}`;
        });
    }
    return [
        `offset-${offset}`
    ];
};


},
72201(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ Heading_Heading)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Heading.mjs
var Heading = __webpack_require__(91820);
;// CONCATENATED MODULE: ./packages/components/src/heading/Heading.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Heading_module = ({"h1":"h1_fQIH","h2":"h2_fBmz","h3":"h3_xOF5","h4":"h4_AF6p","h5":"h5_slY8","h6":"h6_loS0"});
;// CONCATENATED MODULE: ./packages/components/src/heading/Heading.tsx





const Heading_Heading = (param)=>{
    let { children, className, enableMargins = false, isExpressive = false, level = 3, elementType, ...rest } = param;
    const semanticLevel = elementType && parseInt(elementType.split('h')[1]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* .Heading */.D, {
        level: semanticLevel || level,
        className: (0,clsx/* ["default"] */.A)([
            Heading_module.h1,
            Heading_module.h2,
            Heading_module.h3,
            Heading_module.h4,
            Heading_module.h5,
            Heading_module.h6
        ][level - 1], className),
        ...isExpressive && {
            'data-expressive': true
        },
        ...enableMargins && {
            'data-margin': true
        },
        ...rest,
        children: children
    });
};


},
35900(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ LinkButton)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Link.mjs + 1 modules
var Link = __webpack_require__(10068);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(81013);
;// CONCATENATED MODULE: ./packages/components/src/link-button/LinkButton.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const LinkButton_module = ({"linkButton":"linkButton_DlJV","secondary":"secondary_aNB6","icon":"icon_g3pu","tertiary":"tertiary_tl3f","danger":"danger_qkvT","iconBtn":"iconBtn_Ngss","medium":"medium_St93","iconLeft":"iconLeft_r90N","fullwidth":"fullwidth_yUSG","button":"button_CzNs"});
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.mjs
var square_arrow_out_up_right = __webpack_require__(38012);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.mjs
var arrow_left = __webpack_require__(8252);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.mjs
var arrow_right = __webpack_require__(25279);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(26821);
;// CONCATENATED MODULE: ./packages/components/src/link-button/intl/translations.json
var translations_namespaceObject = JSON.parse('{"en":{"opensInNewTab":"Opens in new tab"},"sv":{"opensInNewTab":"Öppnas i ny flik"}}')
;// CONCATENATED MODULE: ./packages/components/src/link-button/LinkButton.tsx
'use client';









/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */ const LinkButton = (param)=>{
    let { children, variant, fullwidth, icon: customIcon, iconPlacement, className, as, size = 'large', ...rest } = param;
    const Component = as || Link/* .Link */.N;
    const strings = (0,useLocalizedStringFormatter/* .useLocalizedStringFormatter */.oe)(translations_namespaceObject);
    const getIcon = ()=>{
        if (customIcon) return {
            icon: customIcon
        };
        if (rest.target === '_blank') return {
            icon: square_arrow_out_up_right/* ["default"] */.A,
            label: strings.format('opensInNewTab')
        };
        if (iconPlacement === 'left') return {
            icon: arrow_left/* ["default"] */.A
        };
        return {
            icon: arrow_right/* ["default"] */.A
        };
    };
    const iconConfig = getIcon();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Component, {
        className: (0,clsx/* ["default"] */.A)(LinkButton_module.linkButton, variant === 'primary' && LinkButton_module.primary, variant === 'secondary' && LinkButton_module.secondary, variant === 'tertiary' && LinkButton_module.tertiary, variant === 'danger' && LinkButton_module.danger, variant === 'icon' && LinkButton_module.iconBtn, size === 'medium' && LinkButton_module.medium, fullwidth && LinkButton_module.fullwidth, iconPlacement === 'left' && LinkButton_module.iconLeft, className),
        ...rest,
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                className: LinkButton_module.icon,
                icon: iconConfig.icon,
                size: 20,
                "aria-hidden": true
            }),
            iconConfig.label && /*#__PURE__*/ (0,jsx_runtime.jsx)(VisuallyHidden/* .VisuallyHidden */.s, {
                children: iconConfig.label
            })
        ]
    });
};
const Icon = (param)=>{
    let { icon: IconComponent, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(IconComponent, {
        ...rest
    });
};



},
11728(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover_Popover)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Popover.mjs + 1 modules
var Popover = __webpack_require__(30900);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(57653);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/popover/Popover.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Popover_module = ({"popover":"popover_qr_p","arrow":"arrow_bhQK"});
;// CONCATENATED MODULE: ./packages/components/src/popover/Popover.tsx





const Popover_Popover = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [mergedProps, mergedRef] = (0,utils/* .useContextProps */.JT)(props, ref, Popover/* .PopoverContext */.n);
    const { className, hideArrow = false, offset = 4, ...rest } = mergedProps;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* .Popover */.A, {
        className: (0,clsx/* ["default"] */.A)(Popover_module.popover, className),
        offset: offset,
        ref: mergedRef,
        ...rest,
        children: (0,utils/* .composeRenderProps */.HW)(mergedProps.children, (children)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    !hideArrow && /*#__PURE__*/ (0,jsx_runtime.jsx)(OverlayArrow/* .OverlayArrow */.k, {
                        className: Popover_module.arrow,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                            height: 16,
                            viewBox: "0 0 16 16",
                            width: 16,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M0 0 L8 8 L16 0"
                            })
                        })
                    }),
                    children
                ]
            }))
    });
});


},
53802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  o: () => (Tab)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react_aria_components__rspack_import_4 = __webpack_require__(5245);
/* import */ var react_aria_components__rspack_import_5 = __webpack_require__(62551);
/* import */ var react_aria_components__rspack_import_7 = __webpack_require__(95841);
/* import */ var react_aria_components__rspack_import_8 = __webpack_require__(17863);
/* import */ var _utils_clsx__rspack_import_6 = __webpack_require__(18496);
/* import */ var _Tabs_module_css__rspack_import_2 = __webpack_require__(17456);
/* import */ var _TabsContext__rspack_import_3 = __webpack_require__(76254);
'use client';






const Tab = (param)=>{
    let { className, ...props } = param;
    const { variant, size } = (0,react__rspack_import_1.useContext)(_TabsContext__rspack_import_3/* .TabsContext */.w);
    const dialogContext = (0,react__rspack_import_1.useContext)(react_aria_components__rspack_import_4/* .DialogContext */.MV);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_5/* .Tab */.oz, {
        ...props,
        className: (0,_utils_clsx__rspack_import_6/* ["default"] */.A)(_Tabs_module_css__rspack_import_2/* ["default"].tab */.A.tab, {
            [_Tabs_module_css__rspack_import_2/* ["default"].contained */.A.contained]: variant === 'contained',
            [_Tabs_module_css__rspack_import_2/* ["default"].medium */.A.medium]: size === 'medium'
        }, className),
        children: (0,react_aria_components__rspack_import_7/* .composeRenderProps */.HW)(props.children, (children)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                children: [
                    typeof children === 'string' || typeof children === 'number' ? // The selected tab's label is heavier, and so wider. The label
                    // reserves that width up front (see .labelSizer in the CSS), so
                    // selecting a tab doesn't shift the tabs next to it
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
                        className: _Tabs_module_css__rspack_import_2/* ["default"].label */.A.label,
                        children: [
                            children,
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                "aria-hidden": true,
                                className: _Tabs_module_css__rspack_import_2/* ["default"].labelSizer */.A.labelSizer,
                                "data-label": children
                            })
                        ]
                    }) : children,
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_8/* .SelectionIndicator */.i, {
                        className: (0,_utils_clsx__rspack_import_6/* ["default"] */.A)(_Tabs_module_css__rspack_import_2/* ["default"].selectionIndicator */.A.selectionIndicator, {
                            [_Tabs_module_css__rspack_import_2/* ["default"].contained */.A.contained]: variant === 'contained',
                            // This is a workaround for preventing a bug with animations
                            // See: https://github.com/adobe/react-spectrum/issues/9931
                            [_Tabs_module_css__rspack_import_2/* ["default"].animated */.A.animated]: !dialogContext
                        })
                    })
                ]
            }))
    });
};


},
76482(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  w: () => (TabList)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react_aria_components__rspack_import_3 = __webpack_require__(62551);
/* import */ var _utils_clsx__rspack_import_4 = __webpack_require__(18496);
/* import */ var _Tabs_module_css__rspack_import_2 = __webpack_require__(17456);
'use client';





const TabList = (param)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_3/* .TabList */.wb, {
        className: (0,_utils_clsx__rspack_import_4/* ["default"] */.A)(_Tabs_module_css__rspack_import_2/* ["default"].tabList */.A.tabList, className),
        ...props
    });
};


},
28674(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  K: () => (TabPanel)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react_aria_components__rspack_import_4 = __webpack_require__(62551);
/* import */ var _utils_clsx__rspack_import_5 = __webpack_require__(18496);
/* import */ var _Tabs_module_css__rspack_import_2 = __webpack_require__(17456);
/* import */ var _TabsContext__rspack_import_3 = __webpack_require__(76254);
'use client';






const TabPanel = (param)=>{
    let { className, ...props } = param;
    const { variant, size } = react__rspack_import_1.useContext(_TabsContext__rspack_import_3/* .TabsContext */.w);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_4/* .TabPanel */.Kp, {
        className: (0,_utils_clsx__rspack_import_5/* ["default"] */.A)(_Tabs_module_css__rspack_import_2/* ["default"].tabPanel */.A.tabPanel, {
            [_Tabs_module_css__rspack_import_2/* ["default"].contained */.A.contained]: variant === 'contained',
            [_Tabs_module_css__rspack_import_2/* ["default"].medium */.A.medium]: size === 'medium'
        }, className),
        ...props
    });
};


},
52439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  t: () => (Tabs)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react_aria_components__rspack_import_4 = __webpack_require__(62551);
/* import */ var _utils_clsx__rspack_import_5 = __webpack_require__(18496);
/* import */ var _TabsContext__rspack_import_3 = __webpack_require__(76254);
/* import */ var _Tabs_module_css__rspack_import_2 = __webpack_require__(17456);
'use client';






const Tabs = (param)=>{
    let { className, variant = 'uncontained', size = 'large', ...rest } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_TabsContext__rspack_import_3/* .TabsContext.Provider */.w.Provider, {
        value: {
            variant,
            size
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_4/* .Tabs */.tU, {
            className: (0,_utils_clsx__rspack_import_5/* ["default"] */.A)(_Tabs_module_css__rspack_import_2/* ["default"].tabs */.A.tabs, className),
            ...rest
        })
    });
};


},
76254(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  w: () => (TabsContext)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);

const TabsContext = (0,react__rspack_import_0.createContext)({
    variant: 'uncontained',
    size: 'large'
});


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
10734(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* reexport */ variables_namespaceObject),
  S: () => (/* reexport */ token_dictionary)
});
// NAMESPACE OBJECT: ./packages/theme/src/lib/style-dictionary-dist/variables.js
var variables_namespaceObject = {};
__webpack_require__.r(variables_namespaceObject);
__webpack_require__.d(variables_namespaceObject, { 
  w$9: () => (backgroundBase),
  _2e: () => (borderColorPrimary),
  l9i: () => (borderColorSubtle),
  A1M: () => (brandPrimary),
  Qni: () => (buttonBackgroundPrimaryBase),
  jc5: () => (colorGray200),
  tK4: () => (field01Base),
  w1t: () => (iconOnColor),
  ak9: () => (layer01Base),
  JI6: () => (layer02Base),
  EWd: () => (stateFocus),
  Q0Q: () => (textOnColor),
  eku: () => (textPrimary) });


;// CONCATENATED MODULE: ./packages/theme/src/lib/style-dictionary-dist/token-dictionary.js
/**
 * Do not edit directly, this file was auto-generated.
 */ /* export default */ const token_dictionary = ({
    base: {
        10: {
            key: "{base.10}",
            $value: "0.125rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.125,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.10}"
            },
            name: "base10",
            attributes: {},
            path: [
                "base",
                "10"
            ]
        },
        15: {
            key: "{base.15}",
            $value: "0.188rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.188,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.15}"
            },
            name: "base15",
            attributes: {},
            path: [
                "base",
                "15"
            ]
        },
        20: {
            key: "{base.20}",
            $value: "0.25rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.25,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.20}"
            },
            name: "base20",
            attributes: {},
            path: [
                "base",
                "20"
            ]
        },
        30: {
            key: "{base.30}",
            $value: "0.375rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.375,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.30}"
            },
            name: "base30",
            attributes: {},
            path: [
                "base",
                "30"
            ]
        },
        40: {
            key: "{base.40}",
            $value: "0.5rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.5,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.40}"
            },
            name: "base40",
            attributes: {},
            path: [
                "base",
                "40"
            ]
        },
        50: {
            key: "{base.50}",
            $value: "0.625rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.625,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.50}"
            },
            name: "base50",
            attributes: {},
            path: [
                "base",
                "50"
            ]
        },
        60: {
            key: "{base.60}",
            $value: "0.75rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.75,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.60}"
            },
            name: "base60",
            attributes: {},
            path: [
                "base",
                "60"
            ]
        },
        70: {
            key: "{base.70}",
            $value: "0.875rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.875,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.70}"
            },
            name: "base70",
            attributes: {},
            path: [
                "base",
                "70"
            ]
        },
        75: {
            key: "{base.75}",
            $value: "0.938rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.938,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.75}"
            },
            name: "base75",
            attributes: {},
            path: [
                "base",
                "75"
            ]
        },
        80: {
            key: "{base.80}",
            $value: "1rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 1,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.80}"
            },
            name: "base80",
            attributes: {},
            path: [
                "base",
                "80"
            ]
        },
        90: {
            key: "{base.90}",
            $value: "1.25rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 1.25,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.90}"
            },
            name: "base90",
            attributes: {},
            path: [
                "base",
                "90"
            ]
        },
        100: {
            key: "{base.100}",
            $value: "1.5rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 1.5,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.100}"
            },
            name: "base100",
            attributes: {},
            path: [
                "base",
                "100"
            ]
        },
        110: {
            key: "{base.110}",
            $value: "1.75rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 1.75,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.110}"
            },
            name: "base110",
            attributes: {},
            path: [
                "base",
                "110"
            ]
        },
        120: {
            key: "{base.120}",
            $value: "2rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 2,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.120}"
            },
            name: "base120",
            attributes: {},
            path: [
                "base",
                "120"
            ]
        },
        130: {
            key: "{base.130}",
            $value: "2.5rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 2.5,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.130}"
            },
            name: "base130",
            attributes: {},
            path: [
                "base",
                "130"
            ]
        },
        140: {
            key: "{base.140}",
            $value: "2.75rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 2.75,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.140}"
            },
            name: "base140",
            attributes: {},
            path: [
                "base",
                "140"
            ]
        },
        150: {
            key: "{base.150}",
            $value: "3rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 3,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.150}"
            },
            name: "base150",
            attributes: {},
            path: [
                "base",
                "150"
            ]
        },
        "00": {
            key: "{base.00}",
            $type: "dimension",
            $value: "0rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            original: {
                $type: "dimension",
                $value: {
                    value: 0,
                    unit: "rem"
                },
                key: "{base.00}"
            },
            name: "base00",
            attributes: {},
            path: [
                "base",
                "00"
            ]
        },
        "05": {
            key: "{base.05}",
            $value: "0.063rem",
            filePath: "packages/theme/tokens/base.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: {
                    value: 0.063,
                    unit: "rem"
                },
                $type: "dimension",
                key: "{base.05}"
            },
            name: "base05",
            attributes: {},
            path: [
                "base",
                "05"
            ]
        }
    },
    windowSizes: {
        sm: {
            key: "{windowSizes.sm}",
            $value: "480px",
            $description: "Liten skärmstorlek. 480px.",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "480px",
                $description: "Liten skärmstorlek. 480px.",
                $type: "dimension",
                key: "{windowSizes.sm}"
            },
            name: "windowSizesSm",
            attributes: {},
            path: [
                "windowSizes",
                "sm"
            ]
        },
        md: {
            key: "{windowSizes.md}",
            $value: "768px",
            $description: "Mellanstor skärmstorlek. 768px.",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "768px",
                $description: "Mellanstor skärmstorlek. 768px.",
                $type: "dimension",
                key: "{windowSizes.md}"
            },
            name: "windowSizesMd",
            attributes: {},
            path: [
                "windowSizes",
                "md"
            ]
        },
        lg: {
            key: "{windowSizes.lg}",
            $value: "1024px",
            $description: "Stor skärmstorlek. 1024px.",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "1024px",
                $description: "Stor skärmstorlek. 1024px.",
                $type: "dimension",
                key: "{windowSizes.lg}"
            },
            name: "windowSizesLg",
            attributes: {},
            path: [
                "windowSizes",
                "lg"
            ]
        },
        xl: {
            key: "{windowSizes.xl}",
            $value: "1280px",
            $description: "Extra stor skärmstorlek. 1280px.",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "1280px",
                $description: "Extra stor skärmstorlek. 1280px.",
                $type: "dimension",
                key: "{windowSizes.xl}"
            },
            name: "windowSizesXl",
            attributes: {},
            path: [
                "windowSizes",
                "xl"
            ]
        }
    },
    breakpoints: {
        xs: {
            key: "{breakpoints.xs}",
            $value: "(max-width: calc(480px - 1px))",
            $description: "Extra liten skärm. Upp till 479px (max-width).",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "(max-width: calc({windowSizes.sm} - 1px))",
                $description: "Extra liten skärm. Upp till 479px (max-width).",
                $type: "string",
                key: "{breakpoints.xs}"
            },
            name: "breakpointsXs",
            attributes: {},
            path: [
                "breakpoints",
                "xs"
            ]
        },
        sm: {
            key: "{breakpoints.sm}",
            $value: "(min-width: 480px)",
            $description: "Liten skärm och uppåt. Från 480px (min-width).",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "(min-width: {windowSizes.sm})",
                $description: "Liten skärm och uppåt. Från 480px (min-width).",
                $type: "string",
                key: "{breakpoints.sm}"
            },
            name: "breakpointsSm",
            attributes: {},
            path: [
                "breakpoints",
                "sm"
            ]
        },
        md: {
            key: "{breakpoints.md}",
            $value: "(min-width: 768px)",
            $description: "Mellanstor skärm och uppåt. Från 768px (min-width).",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "(min-width: {windowSizes.md})",
                $description: "Mellanstor skärm och uppåt. Från 768px (min-width).",
                $type: "string",
                key: "{breakpoints.md}"
            },
            name: "breakpointsMd",
            attributes: {},
            path: [
                "breakpoints",
                "md"
            ]
        },
        lg: {
            key: "{breakpoints.lg}",
            $value: "(min-width: 1024px)",
            $description: "Stor skärm och uppåt. Från 1024px (min-width).",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "(min-width: {windowSizes.lg})",
                $description: "Stor skärm och uppåt. Från 1024px (min-width).",
                $type: "string",
                key: "{breakpoints.lg}"
            },
            name: "breakpointsLg",
            attributes: {},
            path: [
                "breakpoints",
                "lg"
            ]
        },
        xl: {
            key: "{breakpoints.xl}",
            $value: "(min-width: 1280px)",
            $description: "Extra stor skärm och uppåt. Från 1280px (min-width).",
            filePath: "packages/theme/tokens/breakpoints.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "(min-width: {windowSizes.xl})",
                $description: "Extra stor skärm och uppåt. Från 1280px (min-width).",
                $type: "string",
                key: "{breakpoints.xl}"
            },
            name: "breakpointsXl",
            attributes: {},
            path: [
                "breakpoints",
                "xl"
            ]
        }
    },
    button: {
        background: {
            primary: {
                base: {
                    key: "{button.background.primary.base}",
                    $value: "light-dark(#143c50, #2e7ca5)",
                    $description: "Färg på primärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.150}, {color.blue.100})",
                        $description: "Färg på primärknapp",
                        $type: "string",
                        key: "{button.background.primary.base}"
                    },
                    name: "buttonBackgroundPrimaryBase",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "primary",
                        "base"
                    ]
                },
                hover: {
                    key: "{button.background.primary.hover}",
                    $value: "light-dark(#25607f, #25607f)",
                    $description: "Hover state på primärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.130}, {color.blue.130})",
                        $description: "Hover state på primärknapp",
                        $type: "string",
                        key: "{button.background.primary.hover}"
                    },
                    name: "buttonBackgroundPrimaryHover",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "primary",
                        "hover"
                    ]
                },
                active: {
                    key: "{button.background.primary.active}",
                    $value: "light-dark(#2e7ca5, #143c50)",
                    $description: "Active state för primärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.100}, {color.blue.150})",
                        $description: "Active state för primärknapp",
                        $type: "string",
                        key: "{button.background.primary.active}"
                    },
                    name: "buttonBackgroundPrimaryActive",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "primary",
                        "active"
                    ]
                }
            },
            secondary: {
                base: {
                    key: "{button.background.secondary.base}",
                    $value: "transparent",
                    $description: "Färg på sekundärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "transparent",
                        $description: "Färg på sekundärknapp",
                        $type: "string",
                        key: "{button.background.secondary.base}"
                    },
                    name: "buttonBackgroundSecondaryBase",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "secondary",
                        "base"
                    ]
                },
                hover: {
                    key: "{button.background.secondary.hover}",
                    $value: "light-dark(#0000000d, #ffffff21)",
                    $description: "Hover state på sekundärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.black.opacity5}, {color.white.opacity13})",
                        $description: "Hover state på sekundärknapp",
                        $type: "string",
                        key: "{button.background.secondary.hover}"
                    },
                    name: "buttonBackgroundSecondaryHover",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "secondary",
                        "hover"
                    ]
                },
                active: {
                    key: "{button.background.secondary.active}",
                    $value: "light-dark(#0000001a, #ffffff26)",
                    $description: "Active state för sekundärknapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.black.opacity10}, {color.white.opacity15})",
                        $description: "Active state för sekundärknapp",
                        $type: "string",
                        key: "{button.background.secondary.active}"
                    },
                    name: "buttonBackgroundSecondaryActive",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "secondary",
                        "active"
                    ]
                }
            },
            tertiary: {
                hover: {
                    key: "{button.background.tertiary.hover}",
                    $value: "light-dark(#0000000d, #ffffff21)",
                    $description: "Hover state för tertiär knapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.black.opacity5}, {color.white.opacity13})",
                        $description: "Hover state för tertiär knapp",
                        $type: "string",
                        key: "{button.background.tertiary.hover}"
                    },
                    name: "buttonBackgroundTertiaryHover",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "tertiary",
                        "hover"
                    ]
                },
                active: {
                    key: "{button.background.tertiary.active}",
                    $value: "light-dark(#0000001a, #ffffff26)",
                    $description: "Active state för tertiär knapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.black.opacity10}, {color.white.opacity15})",
                        $description: "Active state för tertiär knapp",
                        $type: "string",
                        key: "{button.background.tertiary.active}"
                    },
                    name: "buttonBackgroundTertiaryActive",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "tertiary",
                        "active"
                    ]
                }
            },
            danger: {
                base: {
                    key: "{button.background.danger.base}",
                    $value: "light-dark(#e62323, #e62323)",
                    $description: "Färg på danger knapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.signalRed.100}, {color.signalRed.100})",
                        $description: "Färg på danger knapp",
                        $type: "string",
                        key: "{button.background.danger.base}"
                    },
                    name: "buttonBackgroundDangerBase",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "danger",
                        "base"
                    ]
                },
                hover: {
                    key: "{button.background.danger.hover}",
                    $value: "light-dark(#bc1d1d, #bc1d1d)",
                    $description: "Hover state för danger knapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.signalRed.120}, {color.signalRed.120})",
                        $description: "Hover state för danger knapp",
                        $type: "string",
                        key: "{button.background.danger.hover}"
                    },
                    name: "buttonBackgroundDangerHover",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "danger",
                        "hover"
                    ]
                },
                active: {
                    key: "{button.background.danger.active}",
                    $value: "light-dark(#7d1313, #7d1313)",
                    $description: "Active state för danger knapp",
                    filePath: "packages/theme/tokens/buttons.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.signalRed.150}, {color.signalRed.150})",
                        $description: "Active state för danger knapp",
                        $type: "string",
                        key: "{button.background.danger.active}"
                    },
                    name: "buttonBackgroundDangerActive",
                    attributes: {},
                    path: [
                        "button",
                        "background",
                        "danger",
                        "active"
                    ]
                }
            },
            disabled: {
                key: "{button.background.disabled}",
                $value: "light-dark(#0000000d,#ffffff21)",
                $description: "Disabled state för knappar",
                filePath: "packages/theme/tokens/buttons.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.black.opacity5},{color.white.opacity13})",
                    $description: "Disabled state för knappar",
                    $type: "string",
                    key: "{button.background.disabled}"
                },
                name: "buttonBackgroundDisabled",
                attributes: {},
                path: [
                    "button",
                    "background",
                    "disabled"
                ]
            }
        },
        border: {
            secondary: {
                key: "{button.border.secondary}",
                $value: "light-dark(#143c50, #f2f2f2)",
                $description: "Kantfärg för sekundärknapp",
                filePath: "packages/theme/tokens/buttons.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.blue.150}, {color.gray.10})",
                    $description: "Kantfärg för sekundärknapp",
                    $type: "string",
                    key: "{button.border.secondary}"
                },
                name: "buttonBorderSecondary",
                attributes: {},
                path: [
                    "button",
                    "border",
                    "secondary"
                ]
            }
        },
        icon: {
            hover: {
                key: "{button.icon.hover}",
                $value: "light-dark(#0000000d, #ffffff21)",
                $description: "Hover state för ikonknappar",
                filePath: "packages/theme/tokens/buttons.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.black.opacity5}, {color.white.opacity13})",
                    $description: "Hover state för ikonknappar",
                    $type: "string",
                    key: "{button.icon.hover}"
                },
                name: "buttonIconHover",
                attributes: {},
                path: [
                    "button",
                    "icon",
                    "hover"
                ]
            },
            active: {
                key: "{button.icon.active}",
                $value: "light-dark(#00000033, #ffffff33)",
                $description: "Active state för ikoner",
                filePath: "packages/theme/tokens/buttons.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark(#00000033, #ffffff33)",
                    $description: "Active state för ikoner",
                    $type: "string",
                    key: "{button.icon.active}"
                },
                name: "buttonIconActive",
                attributes: {},
                path: [
                    "button",
                    "icon",
                    "active"
                ]
            }
        }
    },
    color: {
        black: {
            base: {
                key: "{color.black.base}",
                $value: "#000",
                $description: "Black",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#000",
                    $description: "Black",
                    $type: "color",
                    key: "{color.black.base}"
                },
                name: "colorBlackBase",
                attributes: {},
                path: [
                    "color",
                    "black",
                    "base"
                ]
            },
            hover: {
                key: "{color.black.hover}",
                $value: "#0d0d0d",
                $description: "Black hover",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0d0d0d",
                    $description: "Black hover",
                    $type: "color",
                    key: "{color.black.hover}"
                },
                name: "colorBlackHover",
                attributes: {},
                path: [
                    "color",
                    "black",
                    "hover"
                ]
            },
            opacity5: {
                key: "{color.black.opacity5}",
                $value: "#0000000d",
                $description: "Black with 5% opacity",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0000000d",
                    $description: "Black with 5% opacity",
                    $type: "color",
                    key: "{color.black.opacity5}"
                },
                name: "colorBlackOpacity5",
                attributes: {},
                path: [
                    "color",
                    "black",
                    "opacity5"
                ]
            },
            opacity10: {
                key: "{color.black.opacity10}",
                $value: "#0000001a",
                $description: "Black with 10% opacity",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0000001a",
                    $description: "Black with 10% opacity",
                    $type: "color",
                    key: "{color.black.opacity10}"
                },
                name: "colorBlackOpacity10",
                attributes: {},
                path: [
                    "color",
                    "black",
                    "opacity10"
                ]
            }
        },
        white: {
            base: {
                key: "{color.white.base}",
                $value: "#fff",
                $description: "White",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fff",
                    $description: "White",
                    $type: "color",
                    key: "{color.white.base}"
                },
                name: "colorWhiteBase",
                attributes: {},
                path: [
                    "color",
                    "white",
                    "base"
                ]
            },
            hover: {
                key: "{color.white.hover}",
                $value: "#e6e6e6",
                $description: "White hover",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#e6e6e6",
                    $description: "White hover",
                    $type: "color",
                    key: "{color.white.hover}"
                },
                name: "colorWhiteHover",
                attributes: {},
                path: [
                    "color",
                    "white",
                    "hover"
                ]
            },
            opacity13: {
                key: "{color.white.opacity13}",
                $value: "#ffffff21",
                $description: "White with 13% opacity",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffffff21",
                    $description: "White with 13% opacity",
                    $type: "color",
                    key: "{color.white.opacity13}"
                },
                name: "colorWhiteOpacity13",
                attributes: {},
                path: [
                    "color",
                    "white",
                    "opacity13"
                ]
            },
            opacity15: {
                key: "{color.white.opacity15}",
                $value: "#ffffff26",
                $description: "White with 15% opacity",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffffff26",
                    $description: "White with 15% opacity",
                    $type: "color",
                    key: "{color.white.opacity15}"
                },
                name: "colorWhiteOpacity15",
                attributes: {},
                path: [
                    "color",
                    "white",
                    "opacity15"
                ]
            }
        },
        gray: {
            10: {
                key: "{color.gray.10}",
                $value: "#f2f2f2",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f2f2f2",
                    $type: "color",
                    key: "{color.gray.10}"
                },
                name: "colorGray10",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "10"
                ]
            },
            20: {
                key: "{color.gray.20}",
                $value: "#e6e6e6",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#e6e6e6",
                    $type: "color",
                    key: "{color.gray.20}"
                },
                name: "colorGray20",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "20"
                ]
            },
            30: {
                key: "{color.gray.30}",
                $value: "#d9d9d9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d9d9d9",
                    $type: "color",
                    key: "{color.gray.30}"
                },
                name: "colorGray30",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "30"
                ]
            },
            40: {
                key: "{color.gray.40}",
                $value: "#ccc",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ccc",
                    $type: "color",
                    key: "{color.gray.40}"
                },
                name: "colorGray40",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "40"
                ]
            },
            50: {
                key: "{color.gray.50}",
                $value: "#bfbfbf",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#bfbfbf",
                    $type: "color",
                    key: "{color.gray.50}"
                },
                name: "colorGray50",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "50"
                ]
            },
            60: {
                key: "{color.gray.60}",
                $value: "#b3b3b3",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#b3b3b3",
                    $type: "color",
                    key: "{color.gray.60}"
                },
                name: "colorGray60",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "60"
                ]
            },
            70: {
                key: "{color.gray.70}",
                $value: "#a6a6a6",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#a6a6a6",
                    $type: "color",
                    key: "{color.gray.70}"
                },
                name: "colorGray70",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "70"
                ]
            },
            80: {
                key: "{color.gray.80}",
                $value: "#999",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#999",
                    $type: "color",
                    key: "{color.gray.80}"
                },
                name: "colorGray80",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "80"
                ]
            },
            90: {
                key: "{color.gray.90}",
                $value: "#8c8c8c",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#8c8c8c",
                    $type: "color",
                    key: "{color.gray.90}"
                },
                name: "colorGray90",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "90"
                ]
            },
            100: {
                key: "{color.gray.100}",
                $value: "#808080",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#808080",
                    $type: "color",
                    key: "{color.gray.100}"
                },
                name: "colorGray100",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "100"
                ]
            },
            110: {
                key: "{color.gray.110}",
                $value: "#737373",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#737373",
                    $type: "color",
                    key: "{color.gray.110}"
                },
                name: "colorGray110",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "110"
                ]
            },
            120: {
                key: "{color.gray.120}",
                $value: "#666",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#666",
                    $type: "color",
                    key: "{color.gray.120}"
                },
                name: "colorGray120",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "120"
                ]
            },
            130: {
                key: "{color.gray.130}",
                $value: "#5d5d5d",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#5d5d5d",
                    $type: "color",
                    key: "{color.gray.130}"
                },
                name: "colorGray130",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "130"
                ]
            },
            140: {
                key: "{color.gray.140}",
                $value: "#525252",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#525252",
                    $type: "color",
                    key: "{color.gray.140}"
                },
                name: "colorGray140",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "140"
                ]
            },
            150: {
                key: "{color.gray.150}",
                $value: "#474747",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#474747",
                    $type: "color",
                    key: "{color.gray.150}"
                },
                name: "colorGray150",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "150"
                ]
            },
            160: {
                key: "{color.gray.160}",
                $value: "#383838",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#383838",
                    $type: "color",
                    key: "{color.gray.160}"
                },
                name: "colorGray160",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "160"
                ]
            },
            170: {
                key: "{color.gray.170}",
                $value: "#333",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#333",
                    $type: "color",
                    key: "{color.gray.170}"
                },
                name: "colorGray170",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "170"
                ]
            },
            180: {
                key: "{color.gray.180}",
                $value: "#262626",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#262626",
                    $type: "color",
                    key: "{color.gray.180}"
                },
                name: "colorGray180",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "180"
                ]
            },
            190: {
                key: "{color.gray.190}",
                $value: "#212121",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#212121",
                    $type: "color",
                    key: "{color.gray.190}"
                },
                name: "colorGray190",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "190"
                ]
            },
            200: {
                key: "{color.gray.200}",
                $value: "#171717",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#171717",
                    $type: "color",
                    key: "{color.gray.200}"
                },
                name: "colorGray200",
                attributes: {},
                path: [
                    "color",
                    "gray",
                    "200"
                ]
            }
        },
        blue: {
            10: {
                key: "{color.blue.10}",
                $value: "#eaf2f6",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#eaf2f6",
                    $type: "color",
                    key: "{color.blue.10}"
                },
                name: "colorBlue10",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "10"
                ]
            },
            20: {
                key: "{color.blue.20}",
                $value: "#d5e5ed",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d5e5ed",
                    $type: "color",
                    key: "{color.blue.20}"
                },
                name: "colorBlue20",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "20"
                ]
            },
            40: {
                key: "{color.blue.40}",
                $value: "#abcbdb",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#abcbdb",
                    $type: "color",
                    key: "{color.blue.40}"
                },
                name: "colorBlue40",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "40"
                ]
            },
            50: {
                key: "{color.blue.50}",
                $value: "#94BCD1",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#94BCD1",
                    $type: "color",
                    key: "{color.blue.50}"
                },
                name: "colorBlue50",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "50"
                ]
            },
            60: {
                key: "{color.blue.60}",
                $value: "#82b0c9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#82b0c9",
                    $type: "color",
                    key: "{color.blue.60}"
                },
                name: "colorBlue60",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "60"
                ]
            },
            70: {
                key: "{color.blue.70}",
                $value: "#6CA3C0",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#6CA3C0",
                    $type: "color",
                    key: "{color.blue.70}"
                },
                name: "colorBlue70",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "70"
                ]
            },
            80: {
                key: "{color.blue.80}",
                $value: "#5897b8",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#5897b8",
                    $type: "color",
                    key: "{color.blue.80}"
                },
                name: "colorBlue80",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "80"
                ]
            },
            90: {
                key: "{color.blue.90}",
                $value: "#4289ad",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#4289ad",
                    $type: "color",
                    key: "{color.blue.90}"
                },
                name: "colorBlue90",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "90"
                ]
            },
            100: {
                key: "{color.blue.100}",
                $value: "#2e7ca5",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#2e7ca5",
                    $type: "color",
                    key: "{color.blue.100}"
                },
                name: "colorBlue100",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "100"
                ]
            },
            110: {
                key: "{color.blue.110}",
                $value: "#2C7399",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#2C7399",
                    $type: "color",
                    key: "{color.blue.110}"
                },
                name: "colorBlue110",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "110"
                ]
            },
            120: {
                key: "{color.blue.120}",
                $value: "#29698C",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#29698C",
                    $type: "color",
                    key: "{color.blue.120}"
                },
                name: "colorBlue120",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "120"
                ]
            },
            130: {
                key: "{color.blue.130}",
                $value: "#25607f",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#25607f",
                    $type: "color",
                    key: "{color.blue.130}"
                },
                name: "colorBlue130",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "130"
                ]
            },
            150: {
                key: "{color.blue.150}",
                $value: "#143c50",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#143c50",
                    $type: "color",
                    key: "{color.blue.150}"
                },
                name: "colorBlue150",
                attributes: {},
                path: [
                    "color",
                    "blue",
                    "150"
                ]
            }
        },
        purple: {
            80: {
                key: "{color.purple.80}",
                $value: "#b46ab4",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#b46ab4",
                    $type: "color",
                    key: "{color.purple.80}"
                },
                name: "colorPurple80",
                attributes: {},
                path: [
                    "color",
                    "purple",
                    "80"
                ]
            },
            110: {
                key: "{color.purple.110}",
                $value: "#954b95",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#954b95",
                    $type: "color",
                    key: "{color.purple.110}"
                },
                name: "colorPurple110",
                attributes: {},
                path: [
                    "color",
                    "purple",
                    "110"
                ]
            }
        },
        red: {
            100: {
                key: "{color.red.100}",
                $value: "#b90835",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#b90835",
                    $type: "color",
                    key: "{color.red.100}"
                },
                name: "colorRed100",
                attributes: {},
                path: [
                    "color",
                    "red",
                    "100"
                ]
            }
        },
        orange: {
            100: {
                key: "{color.orange.100}",
                $value: "oklch(0.66 0.18 45)",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "oklch(0.66 0.18 45)",
                    $type: "color",
                    key: "{color.orange.100}"
                },
                name: "colorOrange100",
                attributes: {},
                path: [
                    "color",
                    "orange",
                    "100"
                ]
            }
        },
        signalBlue: {
            10: {
                key: "{color.signalBlue.10}",
                $value: "#eaf2f6",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#eaf2f6",
                    $type: "color",
                    key: "{color.signalBlue.10}"
                },
                name: "colorSignalBlue10",
                attributes: {},
                path: [
                    "color",
                    "signalBlue",
                    "10"
                ]
            },
            20: {
                key: "{color.signalBlue.20}",
                $value: "#d5e5ed",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d5e5ed",
                    $type: "color",
                    key: "{color.signalBlue.20}"
                },
                name: "colorSignalBlue20",
                attributes: {},
                path: [
                    "color",
                    "signalBlue",
                    "20"
                ]
            },
            100: {
                key: "{color.signalBlue.100}",
                $value: "#06c",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#06c",
                    $type: "color",
                    key: "{color.signalBlue.100}"
                },
                name: "colorSignalBlue100",
                attributes: {},
                path: [
                    "color",
                    "signalBlue",
                    "100"
                ]
            },
            170: {
                key: "{color.signalBlue.170}",
                $value: "#162b33",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#162b33",
                    $type: "color",
                    key: "{color.signalBlue.170}"
                },
                name: "colorSignalBlue170",
                attributes: {},
                path: [
                    "color",
                    "signalBlue",
                    "170"
                ]
            },
            180: {
                key: "{color.signalBlue.180}",
                $value: "#112127",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#112127",
                    $type: "color",
                    key: "{color.signalBlue.180}"
                },
                name: "colorSignalBlue180",
                attributes: {},
                path: [
                    "color",
                    "signalBlue",
                    "180"
                ]
            }
        },
        signalGreen: {
            20: {
                key: "{color.signalGreen.20}",
                $value: "#d5f2d9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d5f2d9",
                    $type: "color",
                    key: "{color.signalGreen.20}"
                },
                name: "colorSignalGreen20",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "20"
                ]
            },
            30: {
                key: "{color.signalGreen.30}",
                $value: "#bae5c5",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#bae5c5",
                    $type: "color",
                    key: "{color.signalGreen.30}"
                },
                name: "colorSignalGreen30",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "30"
                ]
            },
            100: {
                key: "{color.signalGreen.100}",
                $value: "#008d3c",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#008d3c",
                    $type: "color",
                    key: "{color.signalGreen.100}"
                },
                name: "colorSignalGreen100",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "100"
                ]
            },
            150: {
                key: "{color.signalGreen.150}",
                $value: "#194B33",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#194B33",
                    $type: "color",
                    key: "{color.signalGreen.150}"
                },
                name: "colorSignalGreen150",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "150"
                ]
            },
            170: {
                key: "{color.signalGreen.170}",
                $value: "#163328",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#163328",
                    $type: "color",
                    key: "{color.signalGreen.170}"
                },
                name: "colorSignalGreen170",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "170"
                ]
            },
            180: {
                key: "{color.signalGreen.180}",
                $value: "#112722",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#112722",
                    $type: "color",
                    key: "{color.signalGreen.180}"
                },
                name: "colorSignalGreen180",
                attributes: {},
                path: [
                    "color",
                    "signalGreen",
                    "180"
                ]
            }
        },
        signalYellow: {
            10: {
                key: "{color.signalYellow.10}",
                $value: "#fff8e2",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fff8e2",
                    $type: "color",
                    key: "{color.signalYellow.10}"
                },
                name: "colorSignalYellow10",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "10"
                ]
            },
            20: {
                key: "{color.signalYellow.20}",
                $value: "#fff1cd",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fff1cd",
                    $type: "color",
                    key: "{color.signalYellow.20}"
                },
                name: "colorSignalYellow20",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "20"
                ]
            },
            30: {
                key: "{color.signalYellow.30}",
                $value: "#ffeab8",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffeab8",
                    $type: "color",
                    key: "{color.signalYellow.30}"
                },
                name: "colorSignalYellow30",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "30"
                ]
            },
            40: {
                key: "{color.signalYellow.40}",
                $value: "#ffe3a3",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffe3a3",
                    $type: "color",
                    key: "{color.signalYellow.40}"
                },
                name: "colorSignalYellow40",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "40"
                ]
            },
            50: {
                key: "{color.signalYellow.50}",
                $value: "#ffdc8b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffdc8b",
                    $type: "color",
                    key: "{color.signalYellow.50}"
                },
                name: "colorSignalYellow50",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "50"
                ]
            },
            60: {
                key: "{color.signalYellow.60}",
                $value: "#ffd47b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffd47b",
                    $type: "color",
                    key: "{color.signalYellow.60}"
                },
                name: "colorSignalYellow60",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "60"
                ]
            },
            70: {
                key: "{color.signalYellow.70}",
                $value: "#fdcd5d",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fdcd5d",
                    $type: "color",
                    key: "{color.signalYellow.70}"
                },
                name: "colorSignalYellow70",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "70"
                ]
            },
            80: {
                key: "{color.signalYellow.80}",
                $value: "#fbc640",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fbc640",
                    $type: "color",
                    key: "{color.signalYellow.80}"
                },
                name: "colorSignalYellow80",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "80"
                ]
            },
            90: {
                key: "{color.signalYellow.90}",
                $value: "#fabf1b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fabf1b",
                    $type: "color",
                    key: "{color.signalYellow.90}"
                },
                name: "colorSignalYellow90",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "90"
                ]
            },
            100: {
                key: "{color.signalYellow.100}",
                $value: "#fab900",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fab900",
                    $type: "color",
                    key: "{color.signalYellow.100}"
                },
                name: "colorSignalYellow100",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "100"
                ]
            },
            110: {
                key: "{color.signalYellow.110}",
                $value: "#daa105",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#daa105",
                    $type: "color",
                    key: "{color.signalYellow.110}"
                },
                name: "colorSignalYellow110",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "110"
                ]
            },
            120: {
                key: "{color.signalYellow.120}",
                $value: "#bd8c1e",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#bd8c1e",
                    $type: "color",
                    key: "{color.signalYellow.120}"
                },
                name: "colorSignalYellow120",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "120"
                ]
            },
            130: {
                key: "{color.signalYellow.130}",
                $value: "#a17927",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#a17927",
                    $type: "color",
                    key: "{color.signalYellow.130}"
                },
                name: "colorSignalYellow130",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "130"
                ]
            },
            140: {
                key: "{color.signalYellow.140}",
                $value: "#88672a",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#88672a",
                    $type: "color",
                    key: "{color.signalYellow.140}"
                },
                name: "colorSignalYellow140",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "140"
                ]
            },
            150: {
                key: "{color.signalYellow.150}",
                $value: "#70562b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#70562b",
                    $type: "color",
                    key: "{color.signalYellow.150}"
                },
                name: "colorSignalYellow150",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "150"
                ]
            },
            160: {
                key: "{color.signalYellow.160}",
                $value: "#5a4629",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#5a4629",
                    $type: "color",
                    key: "{color.signalYellow.160}"
                },
                name: "colorSignalYellow160",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "160"
                ]
            },
            170: {
                key: "{color.signalYellow.170}",
                $value: "#453826",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#453826",
                    $type: "color",
                    key: "{color.signalYellow.170}"
                },
                name: "colorSignalYellow170",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "170"
                ]
            },
            180: {
                key: "{color.signalYellow.180}",
                $value: "#322a20",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#322a20",
                    $type: "color",
                    key: "{color.signalYellow.180}"
                },
                name: "colorSignalYellow180",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "180"
                ]
            },
            190: {
                key: "{color.signalYellow.190}",
                $value: "#201c18",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#201c18",
                    $type: "color",
                    key: "{color.signalYellow.190}"
                },
                name: "colorSignalYellow190",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "190"
                ]
            },
            200: {
                key: "{color.signalYellow.200}",
                $value: "#0f0e0e",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0f0e0e",
                    $type: "color",
                    key: "{color.signalYellow.200}"
                },
                name: "colorSignalYellow200",
                attributes: {},
                path: [
                    "color",
                    "signalYellow",
                    "200"
                ]
            }
        },
        signalRed: {
            10: {
                key: "{color.signalRed.10}",
                $value: "#ffefef",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffefef",
                    $type: "color",
                    key: "{color.signalRed.10}"
                },
                name: "colorSignalRed10",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "10"
                ]
            },
            20: {
                key: "{color.signalRed.20}",
                $value: "#ffdfdf",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffdfdf",
                    $type: "color",
                    key: "{color.signalRed.20}"
                },
                name: "colorSignalRed20",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "20"
                ]
            },
            30: {
                key: "{color.signalRed.30}",
                $value: "#fcc8c8",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fcc8c8",
                    $type: "color",
                    key: "{color.signalRed.30}"
                },
                name: "colorSignalRed30",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "30"
                ]
            },
            40: {
                key: "{color.signalRed.40}",
                $value: "#f9b0b0",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f9b0b0",
                    $type: "color",
                    key: "{color.signalRed.40}"
                },
                name: "colorSignalRed40",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "40"
                ]
            },
            50: {
                key: "{color.signalRed.50}",
                $value: "#f69999",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f69999",
                    $type: "color",
                    key: "{color.signalRed.50}"
                },
                name: "colorSignalRed50",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "50"
                ]
            },
            60: {
                key: "{color.signalRed.60}",
                $value: "#f38181",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f38181",
                    $type: "color",
                    key: "{color.signalRed.60}"
                },
                name: "colorSignalRed60",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "60"
                ]
            },
            70: {
                key: "{color.signalRed.70}",
                $value: "#ef6a6a",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ef6a6a",
                    $type: "color",
                    key: "{color.signalRed.70}"
                },
                name: "colorSignalRed70",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "70"
                ]
            },
            80: {
                key: "{color.signalRed.80}",
                $value: "#EC5252",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#EC5252",
                    $type: "color",
                    key: "{color.signalRed.80}"
                },
                name: "colorSignalRed80",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "80"
                ]
            },
            90: {
                key: "{color.signalRed.90}",
                $value: "#e93b3b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#e93b3b",
                    $type: "color",
                    key: "{color.signalRed.90}"
                },
                name: "colorSignalRed90",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "90"
                ]
            },
            100: {
                key: "{color.signalRed.100}",
                $value: "#e62323",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#e62323",
                    $type: "color",
                    key: "{color.signalRed.100}"
                },
                name: "colorSignalRed100",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "100"
                ]
            },
            110: {
                key: "{color.signalRed.110}",
                $value: "#d12020",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d12020",
                    $type: "color",
                    key: "{color.signalRed.110}"
                },
                name: "colorSignalRed110",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "110"
                ]
            },
            120: {
                key: "{color.signalRed.120}",
                $value: "#bc1d1d",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#bc1d1d",
                    $type: "color",
                    key: "{color.signalRed.120}"
                },
                name: "colorSignalRed120",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "120"
                ]
            },
            130: {
                key: "{color.signalRed.130}",
                $value: "#a71919",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#a71919",
                    $type: "color",
                    key: "{color.signalRed.130}"
                },
                name: "colorSignalRed130",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "130"
                ]
            },
            140: {
                key: "{color.signalRed.140}",
                $value: "#921616",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#921616",
                    $type: "color",
                    key: "{color.signalRed.140}"
                },
                name: "colorSignalRed140",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "140"
                ]
            },
            150: {
                key: "{color.signalRed.150}",
                $value: "#7d1313",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#7d1313",
                    $type: "color",
                    key: "{color.signalRed.150}"
                },
                name: "colorSignalRed150",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "150"
                ]
            },
            160: {
                key: "{color.signalRed.160}",
                $value: "#691010",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#691010",
                    $type: "color",
                    key: "{color.signalRed.160}"
                },
                name: "colorSignalRed160",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "160"
                ]
            },
            170: {
                key: "{color.signalRed.170}",
                $value: "#540d0d",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#540d0d",
                    $type: "color",
                    key: "{color.signalRed.170}"
                },
                name: "colorSignalRed170",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "170"
                ]
            },
            180: {
                key: "{color.signalRed.180}",
                $value: "#3f0a0a",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#3f0a0a",
                    $type: "color",
                    key: "{color.signalRed.180}"
                },
                name: "colorSignalRed180",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "180"
                ]
            },
            190: {
                key: "{color.signalRed.190}",
                $value: "#2a0606",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#2a0606",
                    $type: "color",
                    key: "{color.signalRed.190}"
                },
                name: "colorSignalRed190",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "190"
                ]
            },
            200: {
                key: "{color.signalRed.200}",
                $value: "#150303",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#150303",
                    $type: "color",
                    key: "{color.signalRed.200}"
                },
                name: "colorSignalRed200",
                attributes: {},
                path: [
                    "color",
                    "signalRed",
                    "200"
                ]
            }
        },
        sky: {
            20: {
                key: "{color.sky.20}",
                $value: "#cde6f3",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#cde6f3",
                    $type: "color",
                    key: "{color.sky.20}"
                },
                name: "colorSky20",
                attributes: {},
                path: [
                    "color",
                    "sky",
                    "20"
                ]
            },
            60: {
                key: "{color.sky.60}",
                $value: "#4a95df",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#4a95df",
                    $type: "color",
                    key: "{color.sky.60}"
                },
                name: "colorSky60",
                attributes: {},
                path: [
                    "color",
                    "sky",
                    "60"
                ]
            },
            180: {
                key: "{color.sky.180}",
                $value: "#101037",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#101037",
                    $type: "color",
                    key: "{color.sky.180}"
                },
                name: "colorSky180",
                attributes: {},
                path: [
                    "color",
                    "sky",
                    "180"
                ]
            }
        },
        mint: {
            20: {
                key: "{color.mint.20}",
                $value: "#d5f2d9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d5f2d9",
                    $type: "color",
                    key: "{color.mint.20}"
                },
                name: "colorMint20",
                attributes: {},
                path: [
                    "color",
                    "mint",
                    "20"
                ]
            },
            60: {
                key: "{color.mint.60}",
                $value: "#75b47d",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#75b47d",
                    $type: "color",
                    key: "{color.mint.60}"
                },
                name: "colorMint60",
                attributes: {},
                path: [
                    "color",
                    "mint",
                    "60"
                ]
            },
            180: {
                key: "{color.mint.180}",
                $value: "#07270b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#07270b",
                    $type: "color",
                    key: "{color.mint.180}"
                },
                name: "colorMint180",
                attributes: {},
                path: [
                    "color",
                    "mint",
                    "180"
                ]
            }
        },
        cream: {
            20: {
                key: "{color.cream.20}",
                $value: "#fff5db",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#fff5db",
                    $type: "color",
                    key: "{color.cream.20}"
                },
                name: "colorCream20",
                attributes: {},
                path: [
                    "color",
                    "cream",
                    "20"
                ]
            },
            60: {
                key: "{color.cream.60}",
                $value: "#ecbe4a",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ecbe4a",
                    $type: "color",
                    key: "{color.cream.60}"
                },
                name: "colorCream60",
                attributes: {},
                path: [
                    "color",
                    "cream",
                    "60"
                ]
            },
            180: {
                key: "{color.cream.180}",
                $value: "#2c2719",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#2c2719",
                    $type: "color",
                    key: "{color.cream.180}"
                },
                name: "colorCream180",
                attributes: {},
                path: [
                    "color",
                    "cream",
                    "180"
                ]
            }
        },
        teal: {
            20: {
                key: "{color.teal.20}",
                $value: "#cdf2f2",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#cdf2f2",
                    $type: "color",
                    key: "{color.teal.20}"
                },
                name: "colorTeal20",
                attributes: {},
                path: [
                    "color",
                    "teal",
                    "20"
                ]
            },
            60: {
                key: "{color.teal.60}",
                $value: "#43bcbc",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#43bcbc",
                    $type: "color",
                    key: "{color.teal.60}"
                },
                name: "colorTeal60",
                attributes: {},
                path: [
                    "color",
                    "teal",
                    "60"
                ]
            },
            180: {
                key: "{color.teal.180}",
                $value: "#0d2c2c",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0d2c2c",
                    $type: "color",
                    key: "{color.teal.180}"
                },
                name: "colorTeal180",
                attributes: {},
                path: [
                    "color",
                    "teal",
                    "180"
                ]
            }
        },
        lagoon: {
            20: {
                key: "{color.lagoon.20}",
                $value: "#d2daf9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#d2daf9",
                    $type: "color",
                    key: "{color.lagoon.20}"
                },
                name: "colorLagoon20",
                attributes: {},
                path: [
                    "color",
                    "lagoon",
                    "20"
                ]
            },
            60: {
                key: "{color.lagoon.60}",
                $value: "#7088e0",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#7088e0",
                    $type: "color",
                    key: "{color.lagoon.60}"
                },
                name: "colorLagoon60",
                attributes: {},
                path: [
                    "color",
                    "lagoon",
                    "60"
                ]
            },
            180: {
                key: "{color.lagoon.180}",
                $value: "#0a1332",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#0a1332",
                    $type: "color",
                    key: "{color.lagoon.180}"
                },
                name: "colorLagoon180",
                attributes: {},
                path: [
                    "color",
                    "lagoon",
                    "180"
                ]
            }
        },
        lavender: {
            20: {
                key: "{color.lavender.20}",
                $value: "#f6d0f9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f6d0f9",
                    $type: "color",
                    key: "{color.lavender.20}"
                },
                name: "colorLavender20",
                attributes: {},
                path: [
                    "color",
                    "lavender",
                    "20"
                ]
            },
            60: {
                key: "{color.lavender.60}",
                $value: "#b77dbc",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#b77dbc",
                    $type: "color",
                    key: "{color.lavender.60}"
                },
                name: "colorLavender60",
                attributes: {},
                path: [
                    "color",
                    "lavender",
                    "60"
                ]
            },
            180: {
                key: "{color.lavender.180}",
                $value: "#391c3b",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#391c3b",
                    $type: "color",
                    key: "{color.lavender.180}"
                },
                name: "colorLavender180",
                attributes: {},
                path: [
                    "color",
                    "lavender",
                    "180"
                ]
            }
        },
        peach: {
            20: {
                key: "{color.peach.20}",
                $value: "#ffe6d9",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffe6d9",
                    $type: "color",
                    key: "{color.peach.20}"
                },
                name: "colorPeach20",
                attributes: {},
                path: [
                    "color",
                    "peach",
                    "20"
                ]
            },
            60: {
                key: "{color.peach.60}",
                $value: "#e87031",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#e87031",
                    $type: "color",
                    key: "{color.peach.60}"
                },
                name: "colorPeach60",
                attributes: {},
                path: [
                    "color",
                    "peach",
                    "60"
                ]
            },
            180: {
                key: "{color.peach.180}",
                $value: "#421d0a",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#421d0a",
                    $type: "color",
                    key: "{color.peach.180}"
                },
                name: "colorPeach180",
                attributes: {},
                path: [
                    "color",
                    "peach",
                    "180"
                ]
            }
        },
        pippin: {
            20: {
                key: "{color.pippin.20}",
                $value: "#ffe0e0",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#ffe0e0",
                    $type: "color",
                    key: "{color.pippin.20}"
                },
                name: "colorPippin20",
                attributes: {},
                path: [
                    "color",
                    "pippin",
                    "20"
                ]
            },
            60: {
                key: "{color.pippin.60}",
                $value: "#f17575",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#f17575",
                    $type: "color",
                    key: "{color.pippin.60}"
                },
                name: "colorPippin60",
                attributes: {},
                path: [
                    "color",
                    "pippin",
                    "60"
                ]
            },
            180: {
                key: "{color.pippin.180}",
                $value: "#431919",
                filePath: "packages/theme/tokens/colors.json",
                isSource: true,
                $type: "color",
                original: {
                    $value: "#431919",
                    $type: "color",
                    key: "{color.pippin.180}"
                },
                name: "colorPippin180",
                attributes: {},
                path: [
                    "color",
                    "pippin",
                    "180"
                ]
            }
        }
    },
    spacing: {
        10: {
            key: "{spacing.10}",
            $value: "0.125rem",
            $description: "@deprecated Use space.10 (--midas-space-10) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.10}",
                $description: "@deprecated Use space.10 (--midas-space-10) instead",
                $type: "dimension",
                key: "{spacing.10}"
            },
            name: "spacing10",
            attributes: {},
            path: [
                "spacing",
                "10"
            ]
        },
        20: {
            key: "{spacing.20}",
            $value: "0.25rem",
            $description: "@deprecated Use space.xsmall (--midas-space-xsmall) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.xsmall}",
                $description: "@deprecated Use space.xsmall (--midas-space-xsmall) instead",
                $type: "dimension",
                key: "{spacing.20}"
            },
            name: "spacing20",
            attributes: {},
            path: [
                "spacing",
                "20"
            ]
        },
        30: {
            key: "{spacing.30}",
            $value: "0.5rem",
            $description: "@deprecated Use space.small (--midas-space-small) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.small}",
                $description: "@deprecated Use space.small (--midas-space-small) instead",
                $type: "dimension",
                key: "{spacing.30}"
            },
            name: "spacing30",
            attributes: {},
            path: [
                "spacing",
                "30"
            ]
        },
        40: {
            key: "{spacing.40}",
            $value: "0.75rem",
            $description: "@deprecated Use space.60 (--midas-space-60) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.60}",
                $description: "@deprecated Use space.60 (--midas-space-60) instead",
                $type: "dimension",
                key: "{spacing.40}"
            },
            name: "spacing40",
            attributes: {},
            path: [
                "spacing",
                "40"
            ]
        },
        50: {
            key: "{spacing.50}",
            $value: "1rem",
            $description: "@deprecated Use space.medium (--midas-space-medium) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.medium}",
                $description: "@deprecated Use space.medium (--midas-space-medium) instead",
                $type: "dimension",
                key: "{spacing.50}"
            },
            name: "spacing50",
            attributes: {},
            path: [
                "spacing",
                "50"
            ]
        },
        60: {
            key: "{spacing.60}",
            $value: "1.5rem",
            $description: "@deprecated Use space.large (--midas-space-large) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.large}",
                $description: "@deprecated Use space.large (--midas-space-large) instead",
                $type: "dimension",
                key: "{spacing.60}"
            },
            name: "spacing60",
            attributes: {},
            path: [
                "spacing",
                "60"
            ]
        },
        70: {
            key: "{spacing.70}",
            $value: "2rem",
            $description: "@deprecated Use space.xlarge (--midas-space-xlarge) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.xlarge}",
                $description: "@deprecated Use space.xlarge (--midas-space-xlarge) instead",
                $type: "dimension",
                key: "{spacing.70}"
            },
            name: "spacing70",
            attributes: {},
            path: [
                "spacing",
                "70"
            ]
        },
        80: {
            key: "{spacing.80}",
            $value: "2.5rem",
            $description: "@deprecated Use space.130 (--midas-space-130) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.130}",
                $description: "@deprecated Use space.130 (--midas-space-130) instead",
                $type: "dimension",
                key: "{spacing.80}"
            },
            name: "spacing80",
            attributes: {},
            path: [
                "spacing",
                "80"
            ]
        },
        90: {
            key: "{spacing.90}",
            $value: "3rem",
            $description: "@deprecated Use space.150 (--midas-space-150) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.150}",
                $description: "@deprecated Use space.150 (--midas-space-150) instead",
                $type: "dimension",
                key: "{spacing.90}"
            },
            name: "spacing90",
            attributes: {},
            path: [
                "spacing",
                "90"
            ]
        },
        xsmall: {
            key: "{spacing.xsmall}",
            $value: "0.25rem",
            $description: "@deprecated Use space.xsmall (--midas-space-xsmall) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.xsmall}",
                $description: "@deprecated Use space.xsmall (--midas-space-xsmall) instead",
                $type: "dimension",
                key: "{spacing.xsmall}"
            },
            name: "spacingXsmall",
            attributes: {},
            path: [
                "spacing",
                "xsmall"
            ]
        },
        small: {
            key: "{spacing.small}",
            $value: "0.5rem",
            $description: "@deprecated Use space.small (--midas-space-small) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.small}",
                $description: "@deprecated Use space.small (--midas-space-small) instead",
                $type: "dimension",
                key: "{spacing.small}"
            },
            name: "spacingSmall",
            attributes: {},
            path: [
                "spacing",
                "small"
            ]
        },
        medium: {
            key: "{spacing.medium}",
            $value: "1rem",
            $description: "@deprecated Use space.medium (--midas-space-medium) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.medium}",
                $description: "@deprecated Use space.medium (--midas-space-medium) instead",
                $type: "dimension",
                key: "{spacing.medium}"
            },
            name: "spacingMedium",
            attributes: {},
            path: [
                "spacing",
                "medium"
            ]
        },
        large: {
            key: "{spacing.large}",
            $value: "1.5rem",
            $description: "@deprecated Use space.large (--midas-space-large) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.large}",
                $description: "@deprecated Use space.large (--midas-space-large) instead",
                $type: "dimension",
                key: "{spacing.large}"
            },
            name: "spacingLarge",
            attributes: {},
            path: [
                "spacing",
                "large"
            ]
        },
        xlarge: {
            key: "{spacing.xlarge}",
            $value: "2rem",
            $description: "@deprecated Use space.xlarge (--midas-space-xlarge) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{space.xlarge}",
                $description: "@deprecated Use space.xlarge (--midas-space-xlarge) instead",
                $type: "dimension",
                key: "{spacing.xlarge}"
            },
            name: "spacingXlarge",
            attributes: {},
            path: [
                "spacing",
                "xlarge"
            ]
        }
    },
    size: {
        10: {
            key: "{size.10}",
            $value: "0.125rem",
            $description: "@deprecated Use base.10 (--midas-base-10) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.10}",
                $description: "@deprecated Use base.10 (--midas-base-10) instead",
                $type: "dimension",
                key: "{size.10}"
            },
            name: "size10",
            attributes: {},
            path: [
                "size",
                "10"
            ]
        },
        15: {
            key: "{size.15}",
            $value: "0.188rem",
            $description: "@deprecated Use base.15 (--midas-base-15) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.15}",
                $description: "@deprecated Use base.15 (--midas-base-15) instead",
                $type: "dimension",
                key: "{size.15}"
            },
            name: "size15",
            attributes: {},
            path: [
                "size",
                "15"
            ]
        },
        20: {
            key: "{size.20}",
            $value: "0.25rem",
            $description: "@deprecated Use base.20 (--midas-base-20) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.20}",
                $description: "@deprecated Use base.20 (--midas-base-20) instead",
                $type: "dimension",
                key: "{size.20}"
            },
            name: "size20",
            attributes: {},
            path: [
                "size",
                "20"
            ]
        },
        30: {
            key: "{size.30}",
            $value: "0.375rem",
            $description: "@deprecated Use base.30 (--midas-base-30) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.30}",
                $description: "@deprecated Use base.30 (--midas-base-30) instead",
                $type: "dimension",
                key: "{size.30}"
            },
            name: "size30",
            attributes: {},
            path: [
                "size",
                "30"
            ]
        },
        40: {
            key: "{size.40}",
            $value: "0.5rem",
            $description: "@deprecated Use base.40 (--midas-base-40) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.40}",
                $description: "@deprecated Use base.40 (--midas-base-40) instead",
                $type: "dimension",
                key: "{size.40}"
            },
            name: "size40",
            attributes: {},
            path: [
                "size",
                "40"
            ]
        },
        50: {
            key: "{size.50}",
            $value: "0.625rem",
            $description: "@deprecated Use base.50 (--midas-base-50) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.50}",
                $description: "@deprecated Use base.50 (--midas-base-50) instead",
                $type: "dimension",
                key: "{size.50}"
            },
            name: "size50",
            attributes: {},
            path: [
                "size",
                "50"
            ]
        },
        60: {
            key: "{size.60}",
            $value: "0.75rem",
            $description: "@deprecated Use base.60 (--midas-base-60) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.60}",
                $description: "@deprecated Use base.60 (--midas-base-60) instead",
                $type: "dimension",
                key: "{size.60}"
            },
            name: "size60",
            attributes: {},
            path: [
                "size",
                "60"
            ]
        },
        70: {
            key: "{size.70}",
            $value: "0.875rem",
            $description: "@deprecated Use base.70 (--midas-base-70) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.70}",
                $description: "@deprecated Use base.70 (--midas-base-70) instead",
                $type: "dimension",
                key: "{size.70}"
            },
            name: "size70",
            attributes: {},
            path: [
                "size",
                "70"
            ]
        },
        75: {
            key: "{size.75}",
            $value: "0.938rem",
            $description: "@deprecated Use base.75 (--midas-base-75) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.75}",
                $description: "@deprecated Use base.75 (--midas-base-75) instead",
                $type: "dimension",
                key: "{size.75}"
            },
            name: "size75",
            attributes: {},
            path: [
                "size",
                "75"
            ]
        },
        80: {
            key: "{size.80}",
            $value: "1rem",
            $description: "@deprecated Use base.80 (--midas-base-80) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.80}",
                $description: "@deprecated Use base.80 (--midas-base-80) instead",
                $type: "dimension",
                key: "{size.80}"
            },
            name: "size80",
            attributes: {},
            path: [
                "size",
                "80"
            ]
        },
        90: {
            key: "{size.90}",
            $value: "1.25rem",
            $description: "@deprecated Use base.90 (--midas-base-90) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.90}",
                $description: "@deprecated Use base.90 (--midas-base-90) instead",
                $type: "dimension",
                key: "{size.90}"
            },
            name: "size90",
            attributes: {},
            path: [
                "size",
                "90"
            ]
        },
        100: {
            key: "{size.100}",
            $value: "1.5rem",
            $description: "@deprecated Use base.100 (--midas-base-100) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.100}",
                $description: "@deprecated Use base.100 (--midas-base-100) instead",
                $type: "dimension",
                key: "{size.100}"
            },
            name: "size100",
            attributes: {},
            path: [
                "size",
                "100"
            ]
        },
        110: {
            key: "{size.110}",
            $value: "1.75rem",
            $description: "@deprecated Use base.110 (--midas-base-110) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.110}",
                $description: "@deprecated Use base.110 (--midas-base-110) instead",
                $type: "dimension",
                key: "{size.110}"
            },
            name: "size110",
            attributes: {},
            path: [
                "size",
                "110"
            ]
        },
        120: {
            key: "{size.120}",
            $value: "2rem",
            $description: "@deprecated Use base.120 (--midas-base-120) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.120}",
                $description: "@deprecated Use base.120 (--midas-base-120) instead",
                $type: "dimension",
                key: "{size.120}"
            },
            name: "size120",
            attributes: {},
            path: [
                "size",
                "120"
            ]
        },
        130: {
            key: "{size.130}",
            $value: "2.5rem",
            $description: "@deprecated Use base.130 (--midas-base-130) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.130}",
                $description: "@deprecated Use base.130 (--midas-base-130) instead",
                $type: "dimension",
                key: "{size.130}"
            },
            name: "size130",
            attributes: {},
            path: [
                "size",
                "130"
            ]
        },
        140: {
            key: "{size.140}",
            $value: "2.75rem",
            $description: "@deprecated Use base.140 (--midas-base-140) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.140}",
                $description: "@deprecated Use base.140 (--midas-base-140) instead",
                $type: "dimension",
                key: "{size.140}"
            },
            name: "size140",
            attributes: {},
            path: [
                "size",
                "140"
            ]
        },
        150: {
            key: "{size.150}",
            $value: "3rem",
            $description: "@deprecated Use base.150 (--midas-base-150) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.150}",
                $description: "@deprecated Use base.150 (--midas-base-150) instead",
                $type: "dimension",
                key: "{size.150}"
            },
            name: "size150",
            attributes: {},
            path: [
                "size",
                "150"
            ]
        },
        "00": {
            key: "{size.00}",
            $value: "0rem",
            $description: "@deprecated Use base.00 (--midas-base-00) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.00}",
                $description: "@deprecated Use base.00 (--midas-base-00) instead",
                $type: "dimension",
                key: "{size.00}"
            },
            name: "size00",
            attributes: {},
            path: [
                "size",
                "00"
            ]
        },
        "05": {
            key: "{size.05}",
            $value: "0.063rem",
            $description: "@deprecated Use base.05 (--midas-base-05) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.05}",
                $description: "@deprecated Use base.05 (--midas-base-05) instead",
                $type: "dimension",
                key: "{size.05}"
            },
            name: "size05",
            attributes: {},
            path: [
                "size",
                "05"
            ]
        },
        "control-sm": {
            key: "{size.control-sm}",
            $value: "2.5rem",
            $description: "@deprecated Use size.control-md (--midas-size-control-md) instead",
            filePath: "packages/theme/tokens/deprecated.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{size.control-md}",
                $description: "@deprecated Use size.control-md (--midas-size-control-md) instead",
                $type: "dimension",
                key: "{size.control-sm}"
            },
            name: "sizeControlSm",
            attributes: {},
            path: [
                "size",
                "control-sm"
            ]
        },
        icon: {
            key: "{size.icon}",
            $value: "1.25rem",
            $description: "Standardstorlek för ikoner. 1.25rem / 20px.",
            filePath: "packages/theme/tokens/size.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.90}",
                $description: "Standardstorlek för ikoner. 1.25rem / 20px.",
                $type: "dimension",
                key: "{size.icon}"
            },
            name: "sizeIcon",
            attributes: {},
            path: [
                "size",
                "icon"
            ]
        },
        "icon-sm": {
            key: "{size.icon-sm}",
            $value: "1rem",
            $description: "Liten ikonstorlek för kompakta kontexter. 1rem / 16px.",
            filePath: "packages/theme/tokens/size.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.80}",
                $description: "Liten ikonstorlek för kompakta kontexter. 1rem / 16px.",
                $type: "dimension",
                key: "{size.icon-sm}"
            },
            name: "sizeIconSm",
            attributes: {},
            path: [
                "size",
                "icon-sm"
            ]
        },
        option: {
            key: "{size.option}",
            $value: "2rem",
            $description: "Höjd för alternativ i dropdown-listor, t.ex. Select och Combobox. 2rem / 32px.",
            filePath: "packages/theme/tokens/size.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.120}",
                $description: "Höjd för alternativ i dropdown-listor, t.ex. Select och Combobox. 2rem / 32px.",
                $type: "dimension",
                key: "{size.option}"
            },
            name: "sizeOption",
            attributes: {},
            path: [
                "size",
                "option"
            ]
        },
        "control-md": {
            key: "{size.control-md}",
            $value: "2.5rem",
            $description: "Medelstor interaktiv kontrollhöjd. 2.5rem / 40px.",
            filePath: "packages/theme/tokens/size.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.130}",
                $description: "Medelstor interaktiv kontrollhöjd. 2.5rem / 40px.",
                $type: "dimension",
                key: "{size.control-md}"
            },
            name: "sizeControlMd",
            attributes: {},
            path: [
                "size",
                "control-md"
            ]
        },
        control: {
            key: "{size.control}",
            $value: "3rem",
            $description: "Standardhöjd för interaktiva kontroller, t.ex. TextField och Button. 3rem / 48px.",
            filePath: "packages/theme/tokens/size.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.150}",
                $description: "Standardhöjd för interaktiva kontroller, t.ex. TextField och Button. 3rem / 48px.",
                $type: "dimension",
                key: "{size.control}"
            },
            name: "sizeControl",
            attributes: {},
            path: [
                "size",
                "control"
            ]
        }
    },
    background: {
        base: {
            key: "{background.base}",
            $value: "light-dark(#fff, #171717)",
            $description: "Standardbakgrund för våra applikationer",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.white.base}, {color.gray.200})",
                $description: "Standardbakgrund för våra applikationer",
                $type: "string",
                key: "{background.base}"
            },
            name: "backgroundBase",
            attributes: {},
            path: [
                "background",
                "base"
            ]
        },
        hover: {
            key: "{background.hover}",
            $value: "light-dark(#e6e6e6, #212121)",
            $description: "Hoverfärg för bakgrund",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.white.hover}, {color.gray.190})",
                $description: "Hoverfärg för bakgrund",
                $type: "string",
                key: "{background.hover}"
            },
            name: "backgroundHover",
            attributes: {},
            path: [
                "background",
                "hover"
            ]
        },
        inverse: {
            key: "{background.inverse}",
            $value: "light-dark(#171717, #f2f2f2)",
            $description: "Bakgrund med inverterade färger",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.200}, {color.gray.10})",
                $description: "Bakgrund med inverterade färger",
                $type: "string",
                key: "{background.inverse}"
            },
            name: "backgroundInverse",
            attributes: {},
            path: [
                "background",
                "inverse"
            ]
        }
    },
    layer: {
        "01": {
            base: {
                key: "{layer.01.base}",
                $value: "light-dark(#f2f2f2, #262626)",
                $description: "Färg för lager som läggs på Background.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.10}, {color.gray.180})",
                    $description: "Färg för lager som läggs på Background.",
                    $type: "string",
                    key: "{layer.01.base}"
                },
                name: "layer01Base",
                attributes: {},
                path: [
                    "layer",
                    "01",
                    "base"
                ]
            },
            hover: {
                key: "{layer.01.hover}",
                $value: "light-dark(#e6e6e6, #333)",
                $description: "Hover state för layer01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.20}, {color.gray.170})",
                    $description: "Hover state för layer01",
                    $type: "string",
                    key: "{layer.01.hover}"
                },
                name: "layer01Hover",
                attributes: {},
                path: [
                    "layer",
                    "01",
                    "hover"
                ]
            },
            selected: {
                key: "{layer.01.selected}",
                $value: "light-dark(#d9d9d9, #383838)",
                $description: "Selected state för layer01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.160})",
                    $description: "Selected state för layer01",
                    $type: "string",
                    key: "{layer.01.selected}"
                },
                name: "layer01Selected",
                attributes: {},
                path: [
                    "layer",
                    "01",
                    "selected"
                ]
            },
            selectedHover: {
                key: "{layer.01.selectedHover}",
                $value: "light-dark(#ccc, #474747)",
                $description: "Hover state för layerSelected01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.40}, {color.gray.150})",
                    $description: "Hover state för layerSelected01",
                    $type: "string",
                    key: "{layer.01.selectedHover}"
                },
                name: "layer01SelectedHover",
                attributes: {},
                path: [
                    "layer",
                    "01",
                    "selectedHover"
                ]
            }
        },
        "02": {
            base: {
                key: "{layer.02.base}",
                $value: "light-dark(#fff, #383838)",
                $description: "Färg för lager som läggs på layer 01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.base}, {color.gray.160})",
                    $description: "Färg för lager som läggs på layer 01",
                    $type: "string",
                    key: "{layer.02.base}"
                },
                name: "layer02Base",
                attributes: {},
                path: [
                    "layer",
                    "02",
                    "base"
                ]
            },
            hover: {
                key: "{layer.02.hover}",
                $value: "light-dark(#e6e6e6, #474747)",
                $description: "Hover state för layer02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.hover}, {color.gray.150})",
                    $description: "Hover state för layer02",
                    $type: "string",
                    key: "{layer.02.hover}"
                },
                name: "layer02Hover",
                attributes: {},
                path: [
                    "layer",
                    "02",
                    "hover"
                ]
            },
            selected: {
                key: "{layer.02.selected}",
                $value: "light-dark(#d9d9d9, #525252)",
                $description: "Selected state för layer02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.140})",
                    $description: "Selected state för layer02",
                    $type: "string",
                    key: "{layer.02.selected}"
                },
                name: "layer02Selected",
                attributes: {},
                path: [
                    "layer",
                    "02",
                    "selected"
                ]
            },
            selectedHover: {
                key: "{layer.02.selectedHover}",
                $value: "light-dark(#ccc, #5d5d5d)",
                $description: "Hover state för layerSelected02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.40}, {color.gray.130})",
                    $description: "Hover state för layerSelected02",
                    $type: "string",
                    key: "{layer.02.selectedHover}"
                },
                name: "layer02SelectedHover",
                attributes: {},
                path: [
                    "layer",
                    "02",
                    "selectedHover"
                ]
            }
        }
    },
    layerAccent: {
        "01": {
            base: {
                key: "{layerAccent.01.base}",
                $value: "light-dark(#d9d9d9, #383838)",
                $description: "Accentfärg som används tillsammans med layer 01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.160})",
                    $description: "Accentfärg som används tillsammans med layer 01",
                    $type: "string",
                    key: "{layerAccent.01.base}"
                },
                name: "layerAccent01Base",
                attributes: {},
                path: [
                    "layerAccent",
                    "01",
                    "base"
                ]
            },
            hover: {
                key: "{layerAccent.01.hover}",
                $value: "light-dark(#ccc, #474747)",
                $description: "Hover state för layerAccent01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.40}, {color.gray.150})",
                    $description: "Hover state för layerAccent01",
                    $type: "string",
                    key: "{layerAccent.01.hover}"
                },
                name: "layerAccent01Hover",
                attributes: {},
                path: [
                    "layerAccent",
                    "01",
                    "hover"
                ]
            },
            selected: {
                key: "{layerAccent.01.selected}",
                $value: "light-dark(#bfbfbf, #525252)",
                $description: "Selected state för layerAccent01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.50}, {color.gray.140})",
                    $description: "Selected state för layerAccent01",
                    $type: "string",
                    key: "{layerAccent.01.selected}"
                },
                name: "layerAccent01Selected",
                attributes: {},
                path: [
                    "layerAccent",
                    "01",
                    "selected"
                ]
            }
        },
        "02": {
            base: {
                key: "{layerAccent.02.base}",
                $value: "light-dark(#d9d9d9, #383838)",
                $description: "Accentfärg som används tillsammans med layer 02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.160})",
                    $description: "Accentfärg som används tillsammans med layer 02",
                    $type: "string",
                    key: "{layerAccent.02.base}"
                },
                name: "layerAccent02Base",
                attributes: {},
                path: [
                    "layerAccent",
                    "02",
                    "base"
                ]
            },
            hover: {
                key: "{layerAccent.02.hover}",
                $value: "light-dark(#ccc, #474747)",
                $description: "Hover state för layerAccent02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.40}, {color.gray.150})",
                    $description: "Hover state för layerAccent02",
                    $type: "string",
                    key: "{layerAccent.02.hover}"
                },
                name: "layerAccent02Hover",
                attributes: {},
                path: [
                    "layerAccent",
                    "02",
                    "hover"
                ]
            },
            selected: {
                key: "{layerAccent.02.selected}",
                $value: "light-dark(#bfbfbf, #525252)",
                $description: "Selected state för layerAccent02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.50}, {color.gray.140})",
                    $description: "Selected state för layerAccent02",
                    $type: "string",
                    key: "{layerAccent.02.selected}"
                },
                name: "layerAccent02Selected",
                attributes: {},
                path: [
                    "layerAccent",
                    "02",
                    "selected"
                ]
            }
        }
    },
    brand: {
        primary: {
            key: "{brand.primary}",
            $value: "light-dark(#b90835, #b90835)",
            $description: "Migrationsverkets primära röda färg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.red.100}, {color.red.100})",
                $description: "Migrationsverkets primära röda färg",
                $type: "string",
                key: "{brand.primary}"
            },
            name: "brandPrimary",
            attributes: {},
            path: [
                "brand",
                "primary"
            ]
        }
    },
    border: {
        color: {
            primary: {
                key: "{border.color.primary}",
                $value: "light-dark(#171717, #f2f2f2)",
                $description: "Kantlinje med hög kontrast",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.200}, {color.gray.10})",
                    $description: "Kantlinje med hög kontrast",
                    $type: "string",
                    key: "{border.color.primary}"
                },
                name: "borderColorPrimary",
                attributes: {},
                path: [
                    "border",
                    "color",
                    "primary"
                ]
            },
            secondary: {
                key: "{border.color.secondary}",
                $value: "light-dark(#737373, #8c8c8c)",
                $description: "Kantlinje med medelhög kontrast",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.110}, {color.gray.90})",
                    $description: "Kantlinje med medelhög kontrast",
                    $type: "string",
                    key: "{border.color.secondary}"
                },
                name: "borderColorSecondary",
                attributes: {},
                path: [
                    "border",
                    "color",
                    "secondary"
                ]
            },
            subtle: {
                key: "{border.color.subtle}",
                $value: "light-dark(#bfbfbf, #525252)",
                $description: "Kantlinje med låg kontrast",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.50}, {color.gray.140})",
                    $description: "Kantlinje med låg kontrast",
                    $type: "string",
                    key: "{border.color.subtle}"
                },
                name: "borderColorSubtle",
                attributes: {},
                path: [
                    "border",
                    "color",
                    "subtle"
                ]
            },
            tertiary: {
                key: "{border.color.tertiary}",
                $value: "light-dark(#143c50, #2e7ca5)",
                $description: "Primärblå kantlinje",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.blue.150}, {color.blue.100})",
                    $description: "Primärblå kantlinje",
                    $type: "string",
                    key: "{border.color.tertiary}"
                },
                name: "borderColorTertiary",
                attributes: {},
                path: [
                    "border",
                    "color",
                    "tertiary"
                ]
            },
            disabled: {
                key: "{border.color.disabled}",
                $value: "light-dark(#bfbfbf, #525252)",
                $description: "Kantlinje för disabled state",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.50}, {color.gray.140})",
                    $description: "Kantlinje för disabled state",
                    $type: "string",
                    key: "{border.color.disabled}"
                },
                name: "borderColorDisabled",
                attributes: {},
                path: [
                    "border",
                    "color",
                    "disabled"
                ]
            }
        },
        width: {
            key: "{border.width}",
            $value: "1px",
            $type: "dimension",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $value: {
                    value: 1,
                    unit: "px"
                },
                $type: "dimension",
                key: "{border.width}"
            },
            name: "borderWidth",
            attributes: {},
            path: [
                "border",
                "width"
            ]
        }
    },
    field: {
        "01": {
            base: {
                key: "{field.01.base}",
                $value: "light-dark(#f2f2f2, #262626)",
                $description: "färg för fält som ligger på Background",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.10}, {color.gray.180})",
                    $description: "färg för fält som ligger på Background",
                    $type: "string",
                    key: "{field.01.base}"
                },
                name: "field01Base",
                attributes: {},
                path: [
                    "field",
                    "01",
                    "base"
                ]
            },
            hover: {
                key: "{field.01.hover}",
                $value: "light-dark(#e6e6e6, #333)",
                $description: "Hover state för field01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.20}, {color.gray.170})",
                    $description: "Hover state för field01",
                    $type: "string",
                    key: "{field.01.hover}"
                },
                name: "field01Hover",
                attributes: {},
                path: [
                    "field",
                    "01",
                    "hover"
                ]
            },
            active: {
                key: "{field.01.active}",
                $value: "light-dark(#d9d9d9, #383838)",
                $description: "Active state för field01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.160})",
                    $description: "Active state för field01",
                    $type: "string",
                    key: "{field.01.active}"
                },
                name: "field01Active",
                attributes: {},
                path: [
                    "field",
                    "01",
                    "active"
                ]
            },
            disabled: {
                key: "{field.01.disabled}",
                $value: "light-dark(#f2f2f2, #262626)",
                $description: "Disabled state för fält som ligger på Background",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.10}, {color.gray.180})",
                    $description: "Disabled state för fält som ligger på Background",
                    $type: "string",
                    key: "{field.01.disabled}"
                },
                name: "field01Disabled",
                attributes: {},
                path: [
                    "field",
                    "01",
                    "disabled"
                ]
            }
        },
        "02": {
            base: {
                key: "{field.02.base}",
                $value: "light-dark(#fff, #383838)",
                $description: "Färg för fält som ligger på layer 01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.base}, {color.gray.160})",
                    $description: "Färg för fält som ligger på layer 01",
                    $type: "string",
                    key: "{field.02.base}"
                },
                name: "field02Base",
                attributes: {},
                path: [
                    "field",
                    "02",
                    "base"
                ]
            },
            hover: {
                key: "{field.02.hover}",
                $value: "light-dark(#e6e6e6, #474747)",
                $description: "Hover state för field02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.hover}, {color.gray.150})",
                    $description: "Hover state för field02",
                    $type: "string",
                    key: "{field.02.hover}"
                },
                name: "field02Hover",
                attributes: {},
                path: [
                    "field",
                    "02",
                    "hover"
                ]
            },
            active: {
                key: "{field.02.active}",
                $value: "light-dark(#d9d9d9, #525252)",
                $description: "Active state för field02",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.30}, {color.gray.140})",
                    $description: "Active state för field02",
                    $type: "string",
                    key: "{field.02.active}"
                },
                name: "field02Active",
                attributes: {},
                path: [
                    "field",
                    "02",
                    "active"
                ]
            },
            disabled: {
                key: "{field.02.disabled}",
                $value: "light-dark(#fff, #383838)",
                $description: "Disabled state för fält som ligger på layer 01",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.base}, {color.gray.160})",
                    $description: "Disabled state för fält som ligger på layer 01",
                    $type: "string",
                    key: "{field.02.disabled}"
                },
                name: "field02Disabled",
                attributes: {},
                path: [
                    "field",
                    "02",
                    "disabled"
                ]
            }
        }
    },
    skeleton: {
        "01": {
            key: "{skeleton.01}",
            $value: "light-dark(#f2f2f2, #262626)",
            $description: "Färg som används när Skeleton ligger på Background",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.10}, {color.gray.180})",
                $description: "Färg som används när Skeleton ligger på Background",
                $type: "string",
                key: "{skeleton.01}"
            },
            name: "skeleton01",
            attributes: {},
            path: [
                "skeleton",
                "01"
            ]
        },
        "02": {
            key: "{skeleton.02}",
            $value: "light-dark(#d9d9d9, #383838)",
            $description: "Färg som används när Skeleton ligger på Layer 01",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.30}, {color.gray.160})",
                $description: "Färg som används när Skeleton ligger på Layer 01",
                $type: "string",
                key: "{skeleton.02}"
            },
            name: "skeleton02",
            attributes: {},
            path: [
                "skeleton",
                "02"
            ]
        }
    },
    icon: {
        primary: {
            key: "{icon.primary}",
            $value: "light-dark(#171717, #f2f2f2)",
            $description: "Primär ikonfärg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.200}, {color.gray.10})",
                $description: "Primär ikonfärg",
                $type: "string",
                key: "{icon.primary}"
            },
            name: "iconPrimary",
            attributes: {},
            path: [
                "icon",
                "primary"
            ]
        },
        secondary: {
            key: "{icon.secondary}",
            $value: "light-dark(#525252, #a6a6a6)",
            $description: "Sekundär ikonfärg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.140}, {color.gray.70})",
                $description: "Sekundär ikonfärg",
                $type: "string",
                key: "{icon.secondary}"
            },
            name: "iconSecondary",
            attributes: {},
            path: [
                "icon",
                "secondary"
            ]
        },
        tertiary: {
            key: "{icon.tertiary}",
            $value: "light-dark(#143c50, #f2f2f2)",
            $description: "Tertiär ikonfärg, används för ikoner i tertiary-knappar",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.blue.150}, {color.gray.10})",
                $description: "Tertiär ikonfärg, används för ikoner i tertiary-knappar",
                $type: "string",
                key: "{icon.tertiary}"
            },
            name: "iconTertiary",
            attributes: {},
            path: [
                "icon",
                "tertiary"
            ]
        },
        inverse: {
            key: "{icon.inverse}",
            $value: "light-dark(#fff, #171717)",
            $description: "Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.white.base}, {color.gray.200})",
                $description: "Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge",
                $type: "string",
                key: "{icon.inverse}"
            },
            name: "iconInverse",
            attributes: {},
            path: [
                "icon",
                "inverse"
            ]
        },
        onColor: {
            key: "{icon.onColor}",
            $value: "light-dark(#fff, #fff)",
            $description: "Ikonfärg på färgade ytor som inte är lager",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.white.base}, {color.white.base})",
                $description: "Ikonfärg på färgade ytor som inte är lager",
                $type: "string",
                key: "{icon.onColor}"
            },
            name: "iconOnColor",
            attributes: {},
            path: [
                "icon",
                "onColor"
            ]
        },
        disabled: {
            key: "{icon.disabled}",
            $value: "light-dark(#bfbfbf, #525252)",
            $description: "Färg för ikoner som är disabled",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.50}, {color.gray.140})",
                $description: "Färg för ikoner som är disabled",
                $type: "string",
                key: "{icon.disabled}"
            },
            name: "iconDisabled",
            attributes: {},
            path: [
                "icon",
                "disabled"
            ]
        },
        success: {
            key: "{icon.success}",
            $value: "light-dark(#008d3c, #008d3c)",
            $description: "Ikonfärg för success state",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.signalGreen.100}, {color.signalGreen.100})",
                $description: "Ikonfärg för success state",
                $type: "string",
                key: "{icon.success}"
            },
            name: "iconSuccess",
            attributes: {},
            path: [
                "icon",
                "success"
            ]
        },
        info: {
            key: "{icon.info}",
            $value: "light-dark(#06c, #06c)",
            $description: "Ikonfärg för informationsikoner",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.signalBlue.100}, {color.signalBlue.100})",
                $description: "Ikonfärg för informationsikoner",
                $type: "string",
                key: "{icon.info}"
            },
            name: "iconInfo",
            attributes: {},
            path: [
                "icon",
                "info"
            ]
        },
        warning: {
            key: "{icon.warning}",
            $value: "light-dark(#e62323, #e62323)",
            $description: "Ikonfärg för varningsikoner och invalid state",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.signalRed.100}, {color.signalRed.100})",
                $description: "Ikonfärg för varningsikoner och invalid state",
                $type: "string",
                key: "{icon.warning}"
            },
            name: "iconWarning",
            attributes: {},
            path: [
                "icon",
                "warning"
            ]
        },
        important: {
            key: "{icon.important}",
            $type: "color",
            $value: "oklch(0.66 0.18 45)",
            $description: "Ikonfärg för viktig information",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $type: "color",
                $value: "{color.orange.100}",
                $description: "Ikonfärg för viktig information",
                key: "{icon.important}"
            },
            name: "iconImportant",
            attributes: {},
            path: [
                "icon",
                "important"
            ]
        },
        readOnly: {
            key: "{icon.readOnly}",
            $value: "light-dark(#bfbfbf, #383838)",
            $description: "Färg för ikoner som är read-only",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.50}, {color.gray.160})",
                $description: "Färg för ikoner som är read-only",
                $type: "string",
                key: "{icon.readOnly}"
            },
            name: "iconReadOnly",
            attributes: {},
            path: [
                "icon",
                "readOnly"
            ]
        }
    },
    link: {
        enabled: {
            key: "{link.enabled}",
            $value: "light-dark(#29698C, #6CA3C0)",
            $description: "Primär länkfärg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.blue.120}, {color.blue.70})",
                $description: "Primär länkfärg",
                $type: "string",
                key: "{link.enabled}"
            },
            name: "linkEnabled",
            attributes: {},
            path: [
                "link",
                "enabled"
            ]
        },
        hover: {
            key: "{link.hover}",
            $value: "light-dark(#143c50, #94BCD1)",
            $description: "Hover state för länkar",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.blue.150}, {color.blue.50})",
                $description: "Hover state för länkar",
                $type: "string",
                key: "{link.hover}"
            },
            name: "linkHover",
            attributes: {},
            path: [
                "link",
                "hover"
            ]
        },
        pressed: {
            key: "{link.pressed}",
            $value: "light-dark(#171717, #abcbdb)",
            $description: "Active/pressed state för länkar",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.200}, {color.blue.40})",
                $description: "Active/pressed state för länkar",
                $type: "string",
                key: "{link.pressed}"
            },
            name: "linkPressed",
            attributes: {},
            path: [
                "link",
                "pressed"
            ]
        },
        visited: {
            key: "{link.visited}",
            $value: "light-dark(#954b95, #b46ab4)",
            $description: "Färg för besökta länkar",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.purple.110}, {color.purple.80})",
                $description: "Färg för besökta länkar",
                $type: "string",
                key: "{link.visited}"
            },
            name: "linkVisited",
            attributes: {},
            path: [
                "link",
                "visited"
            ]
        }
    },
    progressBar: {
        track: {
            background: {
                key: "{progressBar.track.background}",
                $type: "string",
                $value: "light-dark(#d9d9d9, #383838)",
                $description: "Bakgrundsfärg för progress bar track",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "string",
                    $value: "light-dark({color.gray.30}, {color.gray.160})",
                    $description: "Bakgrundsfärg för progress bar track",
                    key: "{progressBar.track.background}"
                },
                name: "progressBarTrackBackground",
                attributes: {},
                path: [
                    "progressBar",
                    "track",
                    "background"
                ]
            }
        },
        indicator: {
            background: {
                key: "{progressBar.indicator.background}",
                $type: "color",
                $value: "#008d3c",
                $description: "Bakgrundsfärg för progress bar indicator",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.signalGreen.100}",
                    $description: "Bakgrundsfärg för progress bar indicator",
                    key: "{progressBar.indicator.background}"
                },
                name: "progressBarIndicatorBackground",
                attributes: {},
                path: [
                    "progressBar",
                    "indicator",
                    "background"
                ]
            }
        }
    },
    support: {
        border: {
            success: {
                key: "{support.border.success}",
                $value: "light-dark(#008d3c, #008d3c)",
                $description: "Kantlinje för success-notifikationer",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalGreen.100}, {color.signalGreen.100})",
                    $description: "Kantlinje för success-notifikationer",
                    $type: "string",
                    key: "{support.border.success}"
                },
                name: "supportBorderSuccess",
                attributes: {},
                path: [
                    "support",
                    "border",
                    "success"
                ]
            },
            info: {
                key: "{support.border.info}",
                $value: "light-dark(#06c, #06c)",
                $description: "Kantlinje för notifikationer med information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalBlue.100}, {color.signalBlue.100})",
                    $description: "Kantlinje för notifikationer med information",
                    $type: "string",
                    key: "{support.border.info}"
                },
                name: "supportBorderInfo",
                attributes: {},
                path: [
                    "support",
                    "border",
                    "info"
                ]
            },
            important: {
                key: "{support.border.important}",
                $type: "color",
                $value: "oklch(0.66 0.18 45)",
                $description: "Kantlinje för notifikationer med viktig information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.orange.100}",
                    $description: "Kantlinje för notifikationer med viktig information",
                    key: "{support.border.important}"
                },
                name: "supportBorderImportant",
                attributes: {},
                path: [
                    "support",
                    "border",
                    "important"
                ]
            },
            warning: {
                key: "{support.border.warning}",
                $value: "light-dark(#e62323, #e62323)",
                $description: "Kantlinje för notifikationer med varningar",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalRed.100}, {color.signalRed.100})",
                    $description: "Kantlinje för notifikationer med varningar",
                    $type: "string",
                    key: "{support.border.warning}"
                },
                name: "supportBorderWarning",
                attributes: {},
                path: [
                    "support",
                    "border",
                    "warning"
                ]
            }
        },
        background: {
            success: {
                key: "{support.background.success}",
                $value: "light-dark(#d5f2d9, #112722)",
                $description: "Bakgrund för success-notifikationer",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalGreen.20}, {color.signalGreen.180})",
                    $description: "Bakgrund för success-notifikationer",
                    $type: "string",
                    key: "{support.background.success}"
                },
                name: "supportBackgroundSuccess",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "success"
                ]
            },
            successHover: {
                key: "{support.background.successHover}",
                $value: "light-dark(#bae5c5, #163328)",
                $description: "Hoverbakgrund för success-notifikationer",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalGreen.30}, {color.signalGreen.170})",
                    $description: "Hoverbakgrund för success-notifikationer",
                    $type: "string",
                    key: "{support.background.successHover}"
                },
                name: "supportBackgroundSuccessHover",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "successHover"
                ]
            },
            info: {
                key: "{support.background.info}",
                $value: "light-dark(#eaf2f6, #112127)",
                $description: "Bakgrund för notifikationer med information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalBlue.10}, {color.signalBlue.180})",
                    $description: "Bakgrund för notifikationer med information",
                    $type: "string",
                    key: "{support.background.info}"
                },
                name: "supportBackgroundInfo",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "info"
                ]
            },
            infoHover: {
                key: "{support.background.infoHover}",
                $value: "light-dark(#d5e5ed, #162b33)",
                $description: "Hoverbakgrund för notifikationer med information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalBlue.20}, {color.signalBlue.170})",
                    $description: "Hoverbakgrund för notifikationer med information",
                    $type: "string",
                    key: "{support.background.infoHover}"
                },
                name: "supportBackgroundInfoHover",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "infoHover"
                ]
            },
            important: {
                key: "{support.background.important}",
                $value: "light-dark(#fff8e2, #322a20)",
                $description: "Bakgrund för notifikationer med viktig information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalYellow.10}, {color.signalYellow.180})",
                    $description: "Bakgrund för notifikationer med viktig information",
                    $type: "string",
                    key: "{support.background.important}"
                },
                name: "supportBackgroundImportant",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "important"
                ]
            },
            importantHover: {
                key: "{support.background.importantHover}",
                $value: "light-dark(#fff1cd, #453826)",
                $description: "Hoverbakgrund för notifikationer med viktig information",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalYellow.20}, {color.signalYellow.170})",
                    $description: "Hoverbakgrund för notifikationer med viktig information",
                    $type: "string",
                    key: "{support.background.importantHover}"
                },
                name: "supportBackgroundImportantHover",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "importantHover"
                ]
            },
            warning: {
                key: "{support.background.warning}",
                $value: "light-dark(#ffdfdf, #3f0a0a)",
                $description: "Bakgrund för notifikationer med varningar",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalRed.20}, {color.signalRed.180})",
                    $description: "Bakgrund för notifikationer med varningar",
                    $type: "string",
                    key: "{support.background.warning}"
                },
                name: "supportBackgroundWarning",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "warning"
                ]
            },
            warningHover: {
                key: "{support.background.warningHover}",
                $value: "light-dark(#fcc8c8, #540d0d)",
                $description: "Hoverbakgrund för notifikationer med varningar",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.signalRed.30}, {color.signalRed.170})",
                    $description: "Hoverbakgrund för notifikationer med varningar",
                    $type: "string",
                    key: "{support.background.warningHover}"
                },
                name: "supportBackgroundWarningHover",
                attributes: {},
                path: [
                    "support",
                    "background",
                    "warningHover"
                ]
            }
        }
    },
    tag: {
        sky: {
            background: {
                key: "{tag.sky.background}",
                $value: "light-dark(#cde6f3, #101037)",
                $description: "Tag bakgrund blå",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.sky.20}, {color.sky.180})",
                    $description: "Tag bakgrund blå",
                    $type: "string",
                    key: "{tag.sky.background}"
                },
                name: "tagSkyBackground",
                attributes: {},
                path: [
                    "tag",
                    "sky",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.sky.borderColor}",
                $type: "color",
                $value: "#4a95df",
                $description: "Tag kantlinje blå",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.sky.60}",
                    $description: "Tag kantlinje blå",
                    key: "{tag.sky.borderColor}"
                },
                name: "tagSkyBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "sky",
                    "borderColor"
                ]
            }
        },
        blue: {
            background: {
                key: "{tag.blue.background}",
                $value: "light-dark(#cde6f3, #101037)",
                $description: "@deprecated Använd tag.sky istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.sky.20}, {color.sky.180})",
                    $description: "@deprecated Använd tag.sky istället.",
                    $type: "string",
                    key: "{tag.blue.background}"
                },
                name: "tagBlueBackground",
                attributes: {},
                path: [
                    "tag",
                    "blue",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.blue.borderColor}",
                $type: "color",
                $value: "#4a95df",
                $description: "@deprecated Använd tag.sky istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.sky.60}",
                    $description: "@deprecated Använd tag.sky istället.",
                    key: "{tag.blue.borderColor}"
                },
                name: "tagBlueBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "blue",
                    "borderColor"
                ]
            }
        },
        mint: {
            background: {
                key: "{tag.mint.background}",
                $value: "light-dark(#d5f2d9, #07270b)",
                $description: "Tag bakgrund grön",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.mint.20}, {color.mint.180})",
                    $description: "Tag bakgrund grön",
                    $type: "string",
                    key: "{tag.mint.background}"
                },
                name: "tagMintBackground",
                attributes: {},
                path: [
                    "tag",
                    "mint",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.mint.borderColor}",
                $type: "color",
                $value: "#75b47d",
                $description: "Tag kantlinje grön",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.mint.60}",
                    $description: "Tag kantlinje grön",
                    key: "{tag.mint.borderColor}"
                },
                name: "tagMintBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "mint",
                    "borderColor"
                ]
            }
        },
        green: {
            background: {
                key: "{tag.green.background}",
                $value: "light-dark(#d5f2d9, #07270b)",
                $description: "@deprecated Använd tag.mint istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.mint.20}, {color.mint.180})",
                    $description: "@deprecated Använd tag.mint istället.",
                    $type: "string",
                    key: "{tag.green.background}"
                },
                name: "tagGreenBackground",
                attributes: {},
                path: [
                    "tag",
                    "green",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.green.borderColor}",
                $type: "color",
                $value: "#75b47d",
                $description: "@deprecated Använd tag.mint istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.mint.60}",
                    $description: "@deprecated Använd tag.mint istället.",
                    key: "{tag.green.borderColor}"
                },
                name: "tagGreenBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "green",
                    "borderColor"
                ]
            }
        },
        cream: {
            background: {
                key: "{tag.cream.background}",
                $value: "light-dark(#fff5db, #2c2719)",
                $description: "Tag bakgrund gul",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.cream.20}, {color.cream.180})",
                    $description: "Tag bakgrund gul",
                    $type: "string",
                    key: "{tag.cream.background}"
                },
                name: "tagCreamBackground",
                attributes: {},
                path: [
                    "tag",
                    "cream",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.cream.borderColor}",
                $type: "color",
                $value: "#ecbe4a",
                $description: "Tag kantlinje gul",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.cream.60}",
                    $description: "Tag kantlinje gul",
                    key: "{tag.cream.borderColor}"
                },
                name: "tagCreamBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "cream",
                    "borderColor"
                ]
            }
        },
        yellow: {
            background: {
                key: "{tag.yellow.background}",
                $value: "light-dark(#fff5db, #2c2719)",
                $description: "@deprecated Använd tag.cream istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.cream.20}, {color.cream.180})",
                    $description: "@deprecated Använd tag.cream istället.",
                    $type: "string",
                    key: "{tag.yellow.background}"
                },
                name: "tagYellowBackground",
                attributes: {},
                path: [
                    "tag",
                    "yellow",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.yellow.borderColor}",
                $type: "color",
                $value: "#ecbe4a",
                $description: "@deprecated Använd tag.cream istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.cream.60}",
                    $description: "@deprecated Använd tag.cream istället.",
                    key: "{tag.yellow.borderColor}"
                },
                name: "tagYellowBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "yellow",
                    "borderColor"
                ]
            }
        },
        teal: {
            background: {
                key: "{tag.teal.background}",
                $value: "light-dark(#cdf2f2, #0d2c2c)",
                $description: "Tag bakgrund blågrön",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.teal.20}, {color.teal.180})",
                    $description: "Tag bakgrund blågrön",
                    $type: "string",
                    key: "{tag.teal.background}"
                },
                name: "tagTealBackground",
                attributes: {},
                path: [
                    "tag",
                    "teal",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.teal.borderColor}",
                $type: "color",
                $value: "#43bcbc",
                $description: "Tag kantlinje blågrön",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.teal.60}",
                    $description: "Tag kantlinje blågrön",
                    key: "{tag.teal.borderColor}"
                },
                name: "tagTealBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "teal",
                    "borderColor"
                ]
            }
        },
        lagoon: {
            background: {
                key: "{tag.lagoon.background}",
                $value: "light-dark(#d2daf9, #0a1332)",
                $description: "Tag bakgrund lagunblå",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.lagoon.20}, {color.lagoon.180})",
                    $description: "Tag bakgrund lagunblå",
                    $type: "string",
                    key: "{tag.lagoon.background}"
                },
                name: "tagLagoonBackground",
                attributes: {},
                path: [
                    "tag",
                    "lagoon",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.lagoon.borderColor}",
                $type: "color",
                $value: "#7088e0",
                $description: "Tag kantlinje lagunblå",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.lagoon.60}",
                    $description: "Tag kantlinje lagunblå",
                    key: "{tag.lagoon.borderColor}"
                },
                name: "tagLagoonBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "lagoon",
                    "borderColor"
                ]
            }
        },
        lagoonblue: {
            background: {
                key: "{tag.lagoonblue.background}",
                $value: "light-dark(#d2daf9, #0a1332)",
                $description: "@deprecated Använd tag.lagoon istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.lagoon.20}, {color.lagoon.180})",
                    $description: "@deprecated Använd tag.lagoon istället.",
                    $type: "string",
                    key: "{tag.lagoonblue.background}"
                },
                name: "tagLagoonblueBackground",
                attributes: {},
                path: [
                    "tag",
                    "lagoonblue",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.lagoonblue.borderColor}",
                $type: "color",
                $value: "#7088e0",
                $description: "@deprecated Använd tag.lagoon istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.lagoon.60}",
                    $description: "@deprecated Använd tag.lagoon istället.",
                    key: "{tag.lagoonblue.borderColor}"
                },
                name: "tagLagoonblueBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "lagoonblue",
                    "borderColor"
                ]
            }
        },
        lavender: {
            background: {
                key: "{tag.lavender.background}",
                $value: "light-dark(#f6d0f9, #391c3b)",
                $description: "Tag bakgrund lila",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.lavender.20}, {color.lavender.180})",
                    $description: "Tag bakgrund lila",
                    $type: "string",
                    key: "{tag.lavender.background}"
                },
                name: "tagLavenderBackground",
                attributes: {},
                path: [
                    "tag",
                    "lavender",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.lavender.borderColor}",
                $type: "color",
                $value: "#b77dbc",
                $description: "Tag kantlinje lila",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.lavender.60}",
                    $description: "Tag kantlinje lila",
                    key: "{tag.lavender.borderColor}"
                },
                name: "tagLavenderBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "lavender",
                    "borderColor"
                ]
            }
        },
        purple: {
            background: {
                key: "{tag.purple.background}",
                $value: "light-dark(#f6d0f9, #391c3b)",
                $description: "@deprecated Använd tag.lavender istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.lavender.20}, {color.lavender.180})",
                    $description: "@deprecated Använd tag.lavender istället.",
                    $type: "string",
                    key: "{tag.purple.background}"
                },
                name: "tagPurpleBackground",
                attributes: {},
                path: [
                    "tag",
                    "purple",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.purple.borderColor}",
                $type: "color",
                $value: "#b77dbc",
                $description: "@deprecated Använd tag.lavender istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.lavender.60}",
                    $description: "@deprecated Använd tag.lavender istället.",
                    key: "{tag.purple.borderColor}"
                },
                name: "tagPurpleBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "purple",
                    "borderColor"
                ]
            }
        },
        peach: {
            background: {
                key: "{tag.peach.background}",
                $value: "light-dark(#ffe6d9, #421d0a)",
                $description: "Tag bakgrund orange",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.peach.20}, {color.peach.180})",
                    $description: "Tag bakgrund orange",
                    $type: "string",
                    key: "{tag.peach.background}"
                },
                name: "tagPeachBackground",
                attributes: {},
                path: [
                    "tag",
                    "peach",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.peach.borderColor}",
                $type: "color",
                $value: "#e87031",
                $description: "Tag kantlinje orange",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.peach.60}",
                    $description: "Tag kantlinje orange",
                    key: "{tag.peach.borderColor}"
                },
                name: "tagPeachBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "peach",
                    "borderColor"
                ]
            }
        },
        orange: {
            background: {
                key: "{tag.orange.background}",
                $value: "light-dark(#ffe6d9, #421d0a)",
                $description: "@deprecated Använd tag.peach istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.peach.20}, {color.peach.180})",
                    $description: "@deprecated Använd tag.peach istället.",
                    $type: "string",
                    key: "{tag.orange.background}"
                },
                name: "tagOrangeBackground",
                attributes: {},
                path: [
                    "tag",
                    "orange",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.orange.borderColor}",
                $type: "color",
                $value: "#e87031",
                $description: "@deprecated Använd tag.peach istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.peach.60}",
                    $description: "@deprecated Använd tag.peach istället.",
                    key: "{tag.orange.borderColor}"
                },
                name: "tagOrangeBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "orange",
                    "borderColor"
                ]
            }
        },
        pippin: {
            background: {
                key: "{tag.pippin.background}",
                $value: "light-dark(#ffe0e0, #431919)",
                $description: "Tag bakgrund röd",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.pippin.20}, {color.pippin.180})",
                    $description: "Tag bakgrund röd",
                    $type: "string",
                    key: "{tag.pippin.background}"
                },
                name: "tagPippinBackground",
                attributes: {},
                path: [
                    "tag",
                    "pippin",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.pippin.borderColor}",
                $type: "color",
                $value: "#f17575",
                $description: "Tag kantlinje röd",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.pippin.60}",
                    $description: "Tag kantlinje röd",
                    key: "{tag.pippin.borderColor}"
                },
                name: "tagPippinBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "pippin",
                    "borderColor"
                ]
            }
        },
        red: {
            background: {
                key: "{tag.red.background}",
                $value: "light-dark(#ffe0e0, #431919)",
                $description: "@deprecated Använd tag.pippin istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.pippin.20}, {color.pippin.180})",
                    $description: "@deprecated Använd tag.pippin istället.",
                    $type: "string",
                    key: "{tag.red.background}"
                },
                name: "tagRedBackground",
                attributes: {},
                path: [
                    "tag",
                    "red",
                    "background"
                ]
            },
            borderColor: {
                key: "{tag.red.borderColor}",
                $type: "color",
                $value: "#f17575",
                $description: "@deprecated Använd tag.pippin istället.",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                original: {
                    $type: "color",
                    $value: "{color.pippin.60}",
                    $description: "@deprecated Använd tag.pippin istället.",
                    key: "{tag.red.borderColor}"
                },
                name: "tagRedBorderColor",
                attributes: {},
                path: [
                    "tag",
                    "red",
                    "borderColor"
                ]
            }
        }
    },
    text: {
        primary: {
            key: "{text.primary}",
            $value: "light-dark(#171717, #f2f2f2)",
            $description: "Primär textfärg.",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.200}, {color.gray.10})",
                $description: "Primär textfärg.",
                $type: "string",
                key: "{text.primary}"
            },
            name: "textPrimary",
            attributes: {},
            path: [
                "text",
                "primary"
            ]
        },
        secondary: {
            key: "{text.secondary}",
            $value: "light-dark(#525252, #a6a6a6)",
            $description: "Sekundär textfärg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.140}, {color.gray.70})",
                $description: "Sekundär textfärg",
                $type: "string",
                key: "{text.secondary}"
            },
            name: "textSecondary",
            attributes: {},
            path: [
                "text",
                "secondary"
            ]
        },
        tertiary: {
            key: "{text.tertiary}",
            $value: "light-dark(#143c50, #f2f2f2)",
            $description: "Textfärg på tertiär knapp",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.blue.150}, {color.gray.10})",
                $description: "Textfärg på tertiär knapp",
                $type: "string",
                key: "{text.tertiary}"
            },
            name: "textTertiary",
            attributes: {},
            path: [
                "text",
                "tertiary"
            ]
        },
        onColor: {
            key: "{text.onColor}",
            $value: "light-dark(#fff, #fff)",
            $description: "Textfärg på färgade bakgrunder som inte är lager",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.white.base}, {color.white.base})",
                $description: "Textfärg på färgade bakgrunder som inte är lager",
                $type: "string",
                key: "{text.onColor}"
            },
            name: "textOnColor",
            attributes: {},
            path: [
                "text",
                "onColor"
            ]
        },
        inverse: {
            key: "{text.inverse}",
            $value: "light-dark(#f2f2f2, #171717)",
            $description: "Inverterad textfärg",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.10}, {color.gray.200})",
                $description: "Inverterad textfärg",
                $type: "string",
                key: "{text.inverse}"
            },
            name: "textInverse",
            attributes: {},
            path: [
                "text",
                "inverse"
            ]
        },
        disabled: {
            key: "{text.disabled}",
            $value: "light-dark(#bfbfbf, #525252)",
            $description: "Färg för disabled text",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.50}, {color.gray.140})",
                $description: "Färg för disabled text",
                $type: "string",
                key: "{text.disabled}"
            },
            name: "textDisabled",
            attributes: {},
            path: [
                "text",
                "disabled"
            ]
        },
        warning: {
            key: "{text.warning}",
            $value: "light-dark(#e62323, #EC5252)",
            $description: "Färg för felmeddelanden",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.signalRed.100}, {color.signalRed.80})",
                $description: "Färg för felmeddelanden",
                $type: "string",
                key: "{text.warning}"
            },
            name: "textWarning",
            attributes: {},
            path: [
                "text",
                "warning"
            ]
        },
        placeholder: {
            key: "{text.placeholder}",
            $value: "light-dark(#a6a6a6, #525252)",
            $description: "Färg för platshållare",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.70}, {color.gray.140})",
                $description: "Färg för platshållare",
                $type: "string",
                key: "{text.placeholder}"
            },
            name: "textPlaceholder",
            attributes: {},
            path: [
                "text",
                "placeholder"
            ]
        },
        readOnly: {
            key: "{text.readOnly}",
            $value: "light-dark(#737373, #999)",
            $description: "Färg för read-only state",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.gray.110}, {color.gray.80})",
                $description: "Färg för read-only state",
                $type: "string",
                key: "{text.readOnly}"
            },
            name: "textReadOnly",
            attributes: {},
            path: [
                "text",
                "readOnly"
            ]
        }
    },
    badge: {
        background: {
            key: "{badge.background}",
            $value: "light-dark(#e62323, #e62323)",
            $description: "Bakgrundsfärg för badge",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.signalRed.100}, {color.signalRed.100})",
                $description: "Bakgrundsfärg för badge",
                $type: "string",
                key: "{badge.background}"
            },
            name: "badgeBackground",
            attributes: {},
            path: [
                "badge",
                "background"
            ]
        }
    },
    calendar: {
        date: {
            background: {
                hover: {
                    key: "{calendar.date.background.hover}",
                    $value: "light-dark(#0000001a, #ffffff1a)",
                    $description: "Hover-bakgrund för datumcell",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark(#0000001a, #ffffff1a)",
                        $description: "Hover-bakgrund för datumcell",
                        $type: "string",
                        key: "{calendar.date.background.hover}"
                    },
                    name: "calendarDateBackgroundHover",
                    attributes: {},
                    path: [
                        "calendar",
                        "date",
                        "background",
                        "hover"
                    ]
                },
                selected: {
                    key: "{calendar.date.background.selected}",
                    $value: "light-dark(#143c50, #5897b8)",
                    $description: "Bakgrund för ett valt datum",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.150}, {color.blue.80})",
                        $description: "Bakgrund för ett valt datum",
                        $type: "string",
                        key: "{calendar.date.background.selected}"
                    },
                    name: "calendarDateBackgroundSelected",
                    attributes: {},
                    path: [
                        "calendar",
                        "date",
                        "background",
                        "selected"
                    ]
                },
                startRange: {
                    key: "{calendar.date.background.startRange}",
                    $value: "light-dark(#143c50, #5897b8)",
                    $description: "Bakgrund för det första datumet i ett intervallval",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.150}, {color.blue.80})",
                        $description: "Bakgrund för det första datumet i ett intervallval",
                        $type: "string",
                        key: "{calendar.date.background.startRange}"
                    },
                    name: "calendarDateBackgroundStartRange",
                    attributes: {},
                    path: [
                        "calendar",
                        "date",
                        "background",
                        "startRange"
                    ]
                },
                inRange: {
                    key: "{calendar.date.background.inRange}",
                    $value: "light-dark(#d5e5ed, #143c50)",
                    $description: "Bakgrund för datum som ligger inom ett valt intervall",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.20}, {color.blue.150})",
                        $description: "Bakgrund för datum som ligger inom ett valt intervall",
                        $type: "string",
                        key: "{calendar.date.background.inRange}"
                    },
                    name: "calendarDateBackgroundInRange",
                    attributes: {},
                    path: [
                        "calendar",
                        "date",
                        "background",
                        "inRange"
                    ]
                },
                endRange: {
                    key: "{calendar.date.background.endRange}",
                    $value: "light-dark(#143c50, #5897b8)",
                    $description: "Bakgrund för det sista datumet i ett intervallval",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.blue.150}, {color.blue.80})",
                        $description: "Bakgrund för det sista datumet i ett intervallval",
                        $type: "string",
                        key: "{calendar.date.background.endRange}"
                    },
                    name: "calendarDateBackgroundEndRange",
                    attributes: {},
                    path: [
                        "calendar",
                        "date",
                        "background",
                        "endRange"
                    ]
                }
            }
        }
    },
    logo: {
        primary: {
            key: "{logo.primary}",
            $value: "light-dark(#b90835, #fff)",
            $description: "Färg på logotypen",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            $type: "string",
            original: {
                $value: "light-dark({color.red.100}, {color.white.base})",
                $description: "Färg på logotypen",
                $type: "string",
                key: "{logo.primary}"
            },
            name: "logoPrimary",
            attributes: {},
            path: [
                "logo",
                "primary"
            ]
        }
    },
    menu: {
        item: {
            background: {
                hover: {
                    key: "{menu.item.background.hover}",
                    $value: "light-dark(#e6e6e6, #212121)",
                    $description: "Bakgrundsfärg för menu vid hover",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.gray.20}, {color.gray.190})",
                        $description: "Bakgrundsfärg för menu vid hover",
                        $type: "string",
                        key: "{menu.item.background.hover}"
                    },
                    name: "menuItemBackgroundHover",
                    attributes: {},
                    path: [
                        "menu",
                        "item",
                        "background",
                        "hover"
                    ]
                },
                selected: {
                    key: "{menu.item.background.selected}",
                    $value: "light-dark(#f2f2f2, #262626)",
                    $description: "Bakgrundsfärg för aktiv menu",
                    filePath: "packages/theme/tokens/object-values.json",
                    isSource: true,
                    $type: "string",
                    original: {
                        $value: "light-dark({color.gray.10}, {color.gray.180})",
                        $description: "Bakgrundsfärg för aktiv menu",
                        $type: "string",
                        key: "{menu.item.background.selected}"
                    },
                    name: "menuItemBackgroundSelected",
                    attributes: {},
                    path: [
                        "menu",
                        "item",
                        "background",
                        "selected"
                    ]
                }
            }
        },
        text: {
            sectionHeader: {
                key: "{menu.text.sectionHeader}",
                $value: "light-dark(#525252, #a6a6a6)",
                $description: "Textfärg för sektionsrubriker i navigationsmenyn",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.140}, {color.gray.70})",
                    $description: "Textfärg för sektionsrubriker i navigationsmenyn",
                    $type: "string",
                    key: "{menu.text.sectionHeader}"
                },
                name: "menuTextSectionHeader",
                attributes: {},
                path: [
                    "menu",
                    "text",
                    "sectionHeader"
                ]
            }
        }
    },
    navigationLink: {
        background: {
            hover: {
                key: "{navigationLink.background.hover}",
                $value: "light-dark(#e6e6e6, #212121)",
                $description: "Bakgrundsfärg vid hover",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.20}, {color.gray.190})",
                    $description: "Bakgrundsfärg vid hover",
                    $type: "string",
                    key: "{navigationLink.background.hover}"
                },
                name: "navigationLinkBackgroundHover",
                attributes: {},
                path: [
                    "navigationLink",
                    "background",
                    "hover"
                ]
            },
            selected: {
                key: "{navigationLink.background.selected}",
                $value: "light-dark(#f2f2f2, #262626)",
                $description: "Bakgrundsfärg för aktiv länk",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.10}, {color.gray.180})",
                    $description: "Bakgrundsfärg för aktiv länk",
                    $type: "string",
                    key: "{navigationLink.background.selected}"
                },
                name: "navigationLinkBackgroundSelected",
                attributes: {},
                path: [
                    "navigationLink",
                    "background",
                    "selected"
                ]
            },
            selectedHover: {
                key: "{navigationLink.background.selectedHover}",
                $value: "light-dark(#e6e6e6, #212121)",
                $description: "Bakgrundsfärg vid hover på aktiv länk",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.gray.20}, {color.gray.190})",
                    $description: "Bakgrundsfärg vid hover på aktiv länk",
                    $type: "string",
                    key: "{navigationLink.background.selectedHover}"
                },
                name: "navigationLinkBackgroundSelectedHover",
                attributes: {},
                path: [
                    "navigationLink",
                    "background",
                    "selectedHover"
                ]
            }
        }
    },
    overlay: {
        background: {
            key: "{overlay.background}",
            $type: "color",
            $value: "rgba(0 0 0 / 30%)",
            $description: "Bakrundsfärg för overlays",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $type: "color",
                $value: "rgba(0 0 0 / 30%)",
                $description: "Bakrundsfärg för overlays",
                key: "{overlay.background}"
            },
            name: "overlayBackground",
            attributes: {},
            path: [
                "overlay",
                "background"
            ]
        },
        blur: {
            key: "{overlay.blur}",
            $type: "string",
            $value: "blur(2px)",
            $description: "Blur för overlays",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "blur(2px)",
                $description: "Blur för overlays",
                key: "{overlay.blur}"
            },
            name: "overlayBlur",
            attributes: {},
            path: [
                "overlay",
                "blur"
            ]
        }
    },
    card: {
        background: {
            base: {
                key: "{card.background.base}",
                $value: "light-dark(#fff, #262626)",
                $description: "Bakrundsfärg för Card",
                filePath: "packages/theme/tokens/object-values.json",
                isSource: true,
                $type: "string",
                original: {
                    $value: "light-dark({color.white.base}, {color.gray.180})",
                    $description: "Bakrundsfärg för Card",
                    $type: "string",
                    key: "{card.background.base}"
                },
                name: "cardBackgroundBase",
                attributes: {},
                path: [
                    "card",
                    "background",
                    "base"
                ]
            }
        },
        shadow: {
            key: "{card.shadow}",
            $type: "string",
            $value: "0 3px 5px 0 rgba(0, 0, 0, 0.30)",
            $description: "Skugga för Card",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "0 3px 5px 0 rgba(0, 0, 0, 0.30)",
                $description: "Skugga för Card",
                key: "{card.shadow}"
            },
            name: "cardShadow",
            attributes: {},
            path: [
                "card",
                "shadow"
            ]
        }
    },
    panel: {
        shadow: {
            key: "{panel.shadow}",
            $type: "string",
            $value: "-2px 0px 12px -2px rgba(0, 0, 0, 0.10)",
            $description: "Skugga för Panel",
            filePath: "packages/theme/tokens/object-values.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "-2px 0px 12px -2px rgba(0, 0, 0, 0.10)",
                $description: "Skugga för Panel",
                key: "{panel.shadow}"
            },
            name: "panelShadow",
            attributes: {},
            path: [
                "panel",
                "shadow"
            ]
        }
    },
    space: {
        10: {
            key: "{space.10}",
            $value: "0.125rem",
            $description: "0.125rem / 2px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.10}",
                $description: "0.125rem / 2px.",
                $type: "dimension",
                key: "{space.10}"
            },
            name: "space10",
            attributes: {},
            path: [
                "space",
                "10"
            ]
        },
        30: {
            key: "{space.30}",
            $value: "0.375rem",
            $description: "0.375rem / 6px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.30}",
                $description: "0.375rem / 6px.",
                $type: "dimension",
                key: "{space.30}"
            },
            name: "space30",
            attributes: {},
            path: [
                "space",
                "30"
            ]
        },
        50: {
            key: "{space.50}",
            $value: "0.625rem",
            $description: "0.625rem / 10px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.50}",
                $description: "0.625rem / 10px.",
                $type: "dimension",
                key: "{space.50}"
            },
            name: "space50",
            attributes: {},
            path: [
                "space",
                "50"
            ]
        },
        60: {
            key: "{space.60}",
            $value: "0.75rem",
            $description: "0.75rem / 12px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.60}",
                $description: "0.75rem / 12px.",
                $type: "dimension",
                key: "{space.60}"
            },
            name: "space60",
            attributes: {},
            path: [
                "space",
                "60"
            ]
        },
        70: {
            key: "{space.70}",
            $value: "0.875rem",
            $description: "0.875rem / 14px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.70}",
                $description: "0.875rem / 14px.",
                $type: "dimension",
                key: "{space.70}"
            },
            name: "space70",
            attributes: {},
            path: [
                "space",
                "70"
            ]
        },
        75: {
            key: "{space.75}",
            $value: "0.938rem",
            $description: "0.938rem / 15px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.75}",
                $description: "0.938rem / 15px.",
                $type: "dimension",
                key: "{space.75}"
            },
            name: "space75",
            attributes: {},
            path: [
                "space",
                "75"
            ]
        },
        90: {
            key: "{space.90}",
            $value: "1.25rem",
            $description: "1.25rem / 20px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.90}",
                $description: "1.25rem / 20px.",
                $type: "dimension",
                key: "{space.90}"
            },
            name: "space90",
            attributes: {},
            path: [
                "space",
                "90"
            ]
        },
        130: {
            key: "{space.130}",
            $value: "2.5rem",
            $description: "2.5rem / 40px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.130}",
                $description: "2.5rem / 40px.",
                $type: "dimension",
                key: "{space.130}"
            },
            name: "space130",
            attributes: {},
            path: [
                "space",
                "130"
            ]
        },
        150: {
            key: "{space.150}",
            $value: "3rem",
            $description: "3rem / 48px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.150}",
                $description: "3rem / 48px.",
                $type: "dimension",
                key: "{space.150}"
            },
            name: "space150",
            attributes: {},
            path: [
                "space",
                "150"
            ]
        },
        xsmall: {
            key: "{space.xsmall}",
            $value: "0.25rem",
            $description: "Extra litet avstånd. 0.25rem / 4px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.20}",
                $description: "Extra litet avstånd. 0.25rem / 4px.",
                $type: "dimension",
                key: "{space.xsmall}"
            },
            name: "spaceXsmall",
            attributes: {},
            path: [
                "space",
                "xsmall"
            ]
        },
        small: {
            key: "{space.small}",
            $value: "0.5rem",
            $description: "Litet avstånd. 0.5rem / 8px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.40}",
                $description: "Litet avstånd. 0.5rem / 8px.",
                $type: "dimension",
                key: "{space.small}"
            },
            name: "spaceSmall",
            attributes: {},
            path: [
                "space",
                "small"
            ]
        },
        medium: {
            key: "{space.medium}",
            $value: "1rem",
            $description: "Medelstort avstånd. 1rem / 16px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.80}",
                $description: "Medelstort avstånd. 1rem / 16px.",
                $type: "dimension",
                key: "{space.medium}"
            },
            name: "spaceMedium",
            attributes: {},
            path: [
                "space",
                "medium"
            ]
        },
        large: {
            key: "{space.large}",
            $value: "1.5rem",
            $description: "Stort avstånd. 1.5rem / 24px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.100}",
                $description: "Stort avstånd. 1.5rem / 24px.",
                $type: "dimension",
                key: "{space.large}"
            },
            name: "spaceLarge",
            attributes: {},
            path: [
                "space",
                "large"
            ]
        },
        xlarge: {
            key: "{space.xlarge}",
            $value: "2rem",
            $description: "Extra stort avstånd. 2rem / 32px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.120}",
                $description: "Extra stort avstånd. 2rem / 32px.",
                $type: "dimension",
                key: "{space.xlarge}"
            },
            name: "spaceXlarge",
            attributes: {},
            path: [
                "space",
                "xlarge"
            ]
        },
        "05": {
            key: "{space.05}",
            $value: "0.063rem",
            $description: "0.063rem / 1px.",
            filePath: "packages/theme/tokens/space.json",
            isSource: true,
            $type: "dimension",
            original: {
                $value: "{base.05}",
                $description: "0.063rem / 1px.",
                $type: "dimension",
                key: "{space.05}"
            },
            name: "space05",
            attributes: {},
            path: [
                "space",
                "05"
            ]
        }
    },
    state: {
        focus: {
            key: "{state.focus}",
            $type: "string",
            $value: "0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)",
            $description: "Focus style used when the component is focused (box-shadow).",
            filePath: "packages/theme/tokens/states.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)",
                $description: "Focus style used when the component is focused (box-shadow).",
                key: "{state.focus}"
            },
            name: "stateFocus",
            attributes: {},
            path: [
                "state",
                "focus"
            ]
        },
        focusInset: {
            key: "{state.focusInset}",
            $type: "string",
            $value: "inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)",
            $description: "Inset variant of the focus ring (box-shadow inset).",
            filePath: "packages/theme/tokens/states.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)",
                $description: "Inset variant of the focus ring (box-shadow inset).",
                key: "{state.focusInset}"
            },
            name: "stateFocusInset",
            attributes: {},
            path: [
                "state",
                "focusInset"
            ]
        },
        focusContrastMode: {
            outline: {
                key: "{state.focusContrastMode.outline}",
                $value: "2px",
                $description: "Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.",
                filePath: "packages/theme/tokens/states.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: "2px",
                    $description: "Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.",
                    $type: "dimension",
                    key: "{state.focusContrastMode.outline}"
                },
                name: "stateFocusContrastModeOutline",
                attributes: {},
                path: [
                    "state",
                    "focusContrastMode",
                    "outline"
                ]
            },
            offset: {
                key: "{state.focusContrastMode.offset}",
                $value: "2px",
                $description: "Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active.",
                filePath: "packages/theme/tokens/states.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: "2px",
                    $description: "Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active.",
                    $type: "dimension",
                    key: "{state.focusContrastMode.offset}"
                },
                name: "stateFocusContrastModeOffset",
                attributes: {},
                path: [
                    "state",
                    "focusContrastMode",
                    "offset"
                ]
            }
        },
        invalid: {
            key: "{state.invalid}",
            $type: "string",
            $value: "inset 0 0 0 2px light-dark(#e62323, #e62323)",
            $description: "Invalid state style for form fields (box-shadow).",
            filePath: "packages/theme/tokens/states.json",
            isSource: true,
            original: {
                $type: "string",
                $value: "inset 0 0 0 2px {support.border.warning}",
                $description: "Invalid state style for form fields (box-shadow).",
                key: "{state.invalid}"
            },
            name: "stateInvalid",
            attributes: {},
            path: [
                "state",
                "invalid"
            ]
        }
    },
    transition: {
        duration: {
            slow: {
                key: "{transition.duration.slow}",
                $value: "400ms",
                $type: "duration",
                $description: "Långsam övergång. 400ms. Används för större layoutförändringar som sidopaneler och expanderbara sektioner.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: "400ms",
                    $type: "duration",
                    $description: "Långsam övergång. 400ms. Används för större layoutförändringar som sidopaneler och expanderbara sektioner.",
                    key: "{transition.duration.slow}"
                },
                name: "transitionDurationSlow",
                attributes: {},
                path: [
                    "transition",
                    "duration",
                    "slow"
                ]
            },
            normal: {
                key: "{transition.duration.normal}",
                $value: "300ms",
                $type: "duration",
                $description: "Normal övergångshastighet. 300ms. Standardval för de flesta animationer.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: "300ms",
                    $type: "duration",
                    $description: "Normal övergångshastighet. 300ms. Standardval för de flesta animationer.",
                    key: "{transition.duration.normal}"
                },
                name: "transitionDurationNormal",
                attributes: {},
                path: [
                    "transition",
                    "duration",
                    "normal"
                ]
            },
            fast: {
                key: "{transition.duration.fast}",
                $value: "250ms",
                $type: "duration",
                $description: "Snabb övergång. 250ms. Används för kortlivade övergångar som tooltips och dropdowns — inte hover.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: "250ms",
                    $type: "duration",
                    $description: "Snabb övergång. 250ms. Används för kortlivade övergångar som tooltips och dropdowns — inte hover.",
                    key: "{transition.duration.fast}"
                },
                name: "transitionDurationFast",
                attributes: {},
                path: [
                    "transition",
                    "duration",
                    "fast"
                ]
            },
            quick: {
                key: "{transition.duration.quick}",
                $value: "150ms",
                $type: "duration",
                $description: "Kort mikroanimation. 150ms. Används för snabba overlay-rörelser som modaler och select-öppningar som är perceptibelt animerade men ändå snabba.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: "150ms",
                    $type: "duration",
                    $description: "Kort mikroanimation. 150ms. Används för snabba overlay-rörelser som modaler och select-öppningar som är perceptibelt animerade men ändå snabba.",
                    key: "{transition.duration.quick}"
                },
                name: "transitionDurationQuick",
                attributes: {},
                path: [
                    "transition",
                    "duration",
                    "quick"
                ]
            },
            instant: {
                key: "{transition.duration.instant}",
                $value: "100ms",
                $type: "duration",
                $description: "Omedelbar återkoppling. 100ms. Används för direkta tillståndsförändringar som hover-bakgrunder och färgövergångar — allt längre upplevs som tröghet.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: "100ms",
                    $type: "duration",
                    $description: "Omedelbar återkoppling. 100ms. Används för direkta tillståndsförändringar som hover-bakgrunder och färgövergångar — allt längre upplevs som tröghet.",
                    key: "{transition.duration.instant}"
                },
                name: "transitionDurationInstant",
                attributes: {},
                path: [
                    "transition",
                    "duration",
                    "instant"
                ]
            }
        },
        timing: {
            easeOut: {
                key: "{transition.timing.easeOut}",
                $value: [
                    0,
                    0,
                    0.58,
                    1
                ],
                $type: "cubicBezier",
                $description: "Decelererar mot slutet. Används för element som glider in i vyn.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: [
                        0,
                        0,
                        0.58,
                        1
                    ],
                    $type: "cubicBezier",
                    $description: "Decelererar mot slutet. Används för element som glider in i vyn.",
                    key: "{transition.timing.easeOut}"
                },
                name: "transitionTimingEaseOut",
                attributes: {},
                path: [
                    "transition",
                    "timing",
                    "easeOut"
                ]
            },
            easeIn: {
                key: "{transition.timing.easeIn}",
                $value: [
                    0.42,
                    0,
                    1,
                    1
                ],
                $type: "cubicBezier",
                $description: "Accelererar mot slutet. Används för element som lämnar vyn.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: [
                        0.42,
                        0,
                        1,
                        1
                    ],
                    $type: "cubicBezier",
                    $description: "Accelererar mot slutet. Används för element som lämnar vyn.",
                    key: "{transition.timing.easeIn}"
                },
                name: "transitionTimingEaseIn",
                attributes: {},
                path: [
                    "transition",
                    "timing",
                    "easeIn"
                ]
            },
            easeInOut: {
                key: "{transition.timing.easeInOut}",
                $value: [
                    0.42,
                    0,
                    0.58,
                    1
                ],
                $type: "cubicBezier",
                $description: "Accelererar sedan decelererar symmetriskt. Används för element som rör sig mellan två positioner på skärmen.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: [
                        0.42,
                        0,
                        0.58,
                        1
                    ],
                    $type: "cubicBezier",
                    $description: "Accelererar sedan decelererar symmetriskt. Används för element som rör sig mellan två positioner på skärmen.",
                    key: "{transition.timing.easeInOut}"
                },
                name: "transitionTimingEaseInOut",
                attributes: {},
                path: [
                    "transition",
                    "timing",
                    "easeInOut"
                ]
            }
        },
        panel: {
            collapse: {
                key: "{transition.panel.collapse}",
                $value: {
                    delay: "0ms",
                    duration: "300ms",
                    timingFunction: [
                        0,
                        0,
                        0.58,
                        1
                    ]
                },
                $type: "transition",
                $description: "Komprimerar en panel med easeOut-timing. Används i Accordion och expanderbara ytor.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: {
                        delay: "0ms",
                        duration: "{transition.duration.normal}",
                        timingFunction: "{transition.timing.easeOut}"
                    },
                    $type: "transition",
                    $description: "Komprimerar en panel med easeOut-timing. Används i Accordion och expanderbara ytor.",
                    key: "{transition.panel.collapse}"
                },
                name: "transitionPanelCollapse",
                attributes: {},
                path: [
                    "transition",
                    "panel",
                    "collapse"
                ]
            },
            expand: {
                key: "{transition.panel.expand}",
                $value: {
                    delay: "0ms",
                    duration: "300ms",
                    timingFunction: [
                        0.42,
                        0,
                        1,
                        1
                    ]
                },
                $type: "transition",
                $description: "Expanderar en panel med easeIn-timing. Används i Accordion och expanderbara ytor.",
                filePath: "packages/theme/tokens/transitions.json",
                isSource: true,
                original: {
                    $value: {
                        delay: "0ms",
                        duration: "{transition.duration.normal}",
                        timingFunction: "{transition.timing.easeIn}"
                    },
                    $type: "transition",
                    $description: "Expanderar en panel med easeIn-timing. Används i Accordion och expanderbara ytor.",
                    key: "{transition.panel.expand}"
                },
                name: "transitionPanelExpand",
                attributes: {},
                path: [
                    "transition",
                    "panel",
                    "expand"
                ]
            }
        }
    },
    typography: {
        font: {
            family: {
                key: "{typography.font.family}",
                $type: "fontFamily",
                $value: "Inter, sans-serif",
                $description: "Primär typsnittsfamilj för hela design systemet.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                original: {
                    $type: "fontFamily",
                    $value: "Inter, sans-serif",
                    $description: "Primär typsnittsfamilj för hela design systemet.",
                    key: "{typography.font.family}"
                },
                name: "typographyFontFamily",
                attributes: {},
                path: [
                    "typography",
                    "font",
                    "family"
                ]
            },
            size: {
                10: {
                    key: "{typography.font.size.10}",
                    $value: "0.75rem",
                    $description: "0.75rem / 12px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 0.75,
                            unit: "rem"
                        },
                        $description: "0.75rem / 12px.",
                        $type: "dimension",
                        key: "{typography.font.size.10}"
                    },
                    name: "typographyFontSize10",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "10"
                    ]
                },
                20: {
                    key: "{typography.font.size.20}",
                    $value: "0.875rem",
                    $description: "0.875rem / 14px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 0.875,
                            unit: "rem"
                        },
                        $description: "0.875rem / 14px.",
                        $type: "dimension",
                        key: "{typography.font.size.20}"
                    },
                    name: "typographyFontSize20",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "20"
                    ]
                },
                30: {
                    key: "{typography.font.size.30}",
                    $value: "1rem",
                    $description: "1rem / 16px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 1,
                            unit: "rem"
                        },
                        $description: "1rem / 16px.",
                        $type: "dimension",
                        key: "{typography.font.size.30}"
                    },
                    name: "typographyFontSize30",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "30"
                    ]
                },
                40: {
                    key: "{typography.font.size.40}",
                    $value: "1.125rem",
                    $description: "1.125rem / 18px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 1.125,
                            unit: "rem"
                        },
                        $description: "1.125rem / 18px.",
                        $type: "dimension",
                        key: "{typography.font.size.40}"
                    },
                    name: "typographyFontSize40",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "40"
                    ]
                },
                50: {
                    key: "{typography.font.size.50}",
                    $value: "1.25rem",
                    $description: "1.25rem / 20px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 1.25,
                            unit: "rem"
                        },
                        $description: "1.25rem / 20px.",
                        $type: "dimension",
                        key: "{typography.font.size.50}"
                    },
                    name: "typographyFontSize50",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "50"
                    ]
                },
                60: {
                    key: "{typography.font.size.60}",
                    $value: "1.5rem",
                    $description: "1.5rem / 24px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 1.5,
                            unit: "rem"
                        },
                        $description: "1.5rem / 24px.",
                        $type: "dimension",
                        key: "{typography.font.size.60}"
                    },
                    name: "typographyFontSize60",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "60"
                    ]
                },
                70: {
                    key: "{typography.font.size.70}",
                    $value: "1.625rem",
                    $description: "1.625rem / 26px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 1.625,
                            unit: "rem"
                        },
                        $description: "1.625rem / 26px.",
                        $type: "dimension",
                        key: "{typography.font.size.70}"
                    },
                    name: "typographyFontSize70",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "70"
                    ]
                },
                80: {
                    key: "{typography.font.size.80}",
                    $value: "2rem",
                    $description: "2rem / 32px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 2,
                            unit: "rem"
                        },
                        $description: "2rem / 32px.",
                        $type: "dimension",
                        key: "{typography.font.size.80}"
                    },
                    name: "typographyFontSize80",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "80"
                    ]
                },
                90: {
                    key: "{typography.font.size.90}",
                    $value: "2.25rem",
                    $description: "2.25rem / 36px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 2.25,
                            unit: "rem"
                        },
                        $description: "2.25rem / 36px.",
                        $type: "dimension",
                        key: "{typography.font.size.90}"
                    },
                    name: "typographyFontSize90",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "90"
                    ]
                },
                100: {
                    key: "{typography.font.size.100}",
                    $value: "2.625rem",
                    $description: "2.625rem / 42px.",
                    filePath: "packages/theme/tokens/typography.json",
                    isSource: true,
                    $type: "dimension",
                    original: {
                        $value: {
                            value: 2.625,
                            unit: "rem"
                        },
                        $description: "2.625rem / 42px.",
                        $type: "dimension",
                        key: "{typography.font.size.100}"
                    },
                    name: "typographyFontSize100",
                    attributes: {},
                    path: [
                        "typography",
                        "font",
                        "size",
                        "100"
                    ]
                }
            }
        },
        lineHeight: {
            10: {
                key: "{typography.lineHeight.10}",
                $value: "1rem",
                $description: "1rem / 16px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1,
                        unit: "rem"
                    },
                    $description: "1rem / 16px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.10}"
                },
                name: "typographyLineHeight10",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "10"
                ]
            },
            20: {
                key: "{typography.lineHeight.20}",
                $value: "1.125rem",
                $description: "1.125rem / 18px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1.125,
                        unit: "rem"
                    },
                    $description: "1.125rem / 18px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.20}"
                },
                name: "typographyLineHeight20",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "20"
                ]
            },
            30: {
                key: "{typography.lineHeight.30}",
                $value: "1.25rem",
                $description: "1.25rem / 20px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1.25,
                        unit: "rem"
                    },
                    $description: "1.25rem / 20px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.30}"
                },
                name: "typographyLineHeight30",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "30"
                ]
            },
            40: {
                key: "{typography.lineHeight.40}",
                $value: "1.375rem",
                $description: "1.375rem / 22px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1.375,
                        unit: "rem"
                    },
                    $description: "1.375rem / 22px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.40}"
                },
                name: "typographyLineHeight40",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "40"
                ]
            },
            50: {
                key: "{typography.lineHeight.50}",
                $value: "1.5rem",
                $description: "1.5rem / 24px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1.5,
                        unit: "rem"
                    },
                    $description: "1.5rem / 24px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.50}"
                },
                name: "typographyLineHeight50",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "50"
                ]
            },
            60: {
                key: "{typography.lineHeight.60}",
                $value: "1.75rem",
                $description: "1.75rem / 28px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 1.75,
                        unit: "rem"
                    },
                    $description: "1.75rem / 28px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.60}"
                },
                name: "typographyLineHeight60",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "60"
                ]
            },
            70: {
                key: "{typography.lineHeight.70}",
                $value: "2rem",
                $description: "2rem / 32px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 2,
                        unit: "rem"
                    },
                    $description: "2rem / 32px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.70}"
                },
                name: "typographyLineHeight70",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "70"
                ]
            },
            80: {
                key: "{typography.lineHeight.80}",
                $value: "2.25rem",
                $description: "2.25rem / 36px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 2.25,
                        unit: "rem"
                    },
                    $description: "2.25rem / 36px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.80}"
                },
                name: "typographyLineHeight80",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "80"
                ]
            },
            90: {
                key: "{typography.lineHeight.90}",
                $value: "2.5rem",
                $description: "2.5rem / 40px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 2.5,
                        unit: "rem"
                    },
                    $description: "2.5rem / 40px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.90}"
                },
                name: "typographyLineHeight90",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "90"
                ]
            },
            100: {
                key: "{typography.lineHeight.100}",
                $value: "3rem",
                $description: "3rem / 48px.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "dimension",
                original: {
                    $value: {
                        value: 3,
                        unit: "rem"
                    },
                    $description: "3rem / 48px.",
                    $type: "dimension",
                    key: "{typography.lineHeight.100}"
                },
                name: "typographyLineHeight100",
                attributes: {},
                path: [
                    "typography",
                    "lineHeight",
                    "100"
                ]
            }
        },
        weight: {
            thin: {
                key: "{typography.weight.thin}",
                $value: 100,
                $description: "100 – Tunnast möjliga vikt.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 100,
                    $description: "100 – Tunnast möjliga vikt.",
                    $type: "fontWeight",
                    key: "{typography.weight.thin}"
                },
                name: "typographyWeightThin",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "thin"
                ]
            },
            extraLight: {
                key: "{typography.weight.extraLight}",
                $value: 200,
                $description: "200 – Extra tunn.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 200,
                    $description: "200 – Extra tunn.",
                    $type: "fontWeight",
                    key: "{typography.weight.extraLight}"
                },
                name: "typographyWeightExtraLight",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "extraLight"
                ]
            },
            light: {
                key: "{typography.weight.light}",
                $value: 300,
                $description: "300 – Tunn.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 300,
                    $description: "300 – Tunn.",
                    $type: "fontWeight",
                    key: "{typography.weight.light}"
                },
                name: "typographyWeightLight",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "light"
                ]
            },
            regular: {
                key: "{typography.weight.regular}",
                $value: 400,
                $description: "400 – Standardvikt för brödtext.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 400,
                    $description: "400 – Standardvikt för brödtext.",
                    $type: "fontWeight",
                    key: "{typography.weight.regular}"
                },
                name: "typographyWeightRegular",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "regular"
                ]
            },
            medium: {
                key: "{typography.weight.medium}",
                $value: 500,
                $description: "500 – Mellantung, för betoning utan fet stil.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 500,
                    $description: "500 – Mellantung, för betoning utan fet stil.",
                    $type: "fontWeight",
                    key: "{typography.weight.medium}"
                },
                name: "typographyWeightMedium",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "medium"
                ]
            },
            semiBold: {
                key: "{typography.weight.semiBold}",
                $value: 600,
                $description: "600 – Halvfet, för underrubriker och etiketter.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 600,
                    $description: "600 – Halvfet, för underrubriker och etiketter.",
                    $type: "fontWeight",
                    key: "{typography.weight.semiBold}"
                },
                name: "typographyWeightSemiBold",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "semiBold"
                ]
            },
            bold: {
                key: "{typography.weight.bold}",
                $value: 700,
                $description: "700 – Fet, för rubriker och framhävning.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 700,
                    $description: "700 – Fet, för rubriker och framhävning.",
                    $type: "fontWeight",
                    key: "{typography.weight.bold}"
                },
                name: "typographyWeightBold",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "bold"
                ]
            },
            extraBold: {
                key: "{typography.weight.extraBold}",
                $value: 800,
                $description: "800 – Extra fet.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 800,
                    $description: "800 – Extra fet.",
                    $type: "fontWeight",
                    key: "{typography.weight.extraBold}"
                },
                name: "typographyWeightExtraBold",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "extraBold"
                ]
            },
            black: {
                key: "{typography.weight.black}",
                $value: 900,
                $description: "900 – Tyngsta möjliga vikt.",
                filePath: "packages/theme/tokens/typography.json",
                isSource: true,
                $type: "fontWeight",
                original: {
                    $value: 900,
                    $description: "900 – Tyngsta möjliga vikt.",
                    $type: "fontWeight",
                    key: "{typography.weight.black}"
                },
                name: "typographyWeightBlack",
                attributes: {},
                path: [
                    "typography",
                    "weight",
                    "black"
                ]
            }
        },
        body: {
            key: "{typography.body}",
            $type: "typography",
            $description: "Standardtypografi för brödtext. Används i löptext, listor och stycken.",
            $value: {
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: "1.25rem"
            },
            filePath: "packages/theme/tokens/typography.json",
            isSource: true,
            original: {
                $type: "typography",
                $description: "Standardtypografi för brödtext. Används i löptext, listor och stycken.",
                $value: {
                    fontFamily: "{typography.font.family}",
                    fontSize: "{typography.font.size.30}",
                    fontWeight: "{typography.weight.regular}",
                    lineHeight: "{typography.lineHeight.30}"
                },
                key: "{typography.body}"
            },
            name: "typographyBody",
            attributes: {},
            path: [
                "typography",
                "body"
            ]
        },
        "body-small": {
            key: "{typography.body-small}",
            $type: "typography",
            $description: "Liten brödtextstil. Används för kompakt text i t.ex. tabeller och listor.",
            $value: {
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                fontWeight: 400,
                lineHeight: "1.125rem"
            },
            filePath: "packages/theme/tokens/typography.json",
            isSource: true,
            original: {
                $type: "typography",
                $description: "Liten brödtextstil. Används för kompakt text i t.ex. tabeller och listor.",
                $value: {
                    fontFamily: "{typography.font.family}",
                    fontSize: "{typography.font.size.20}",
                    fontWeight: "{typography.weight.regular}",
                    lineHeight: "{typography.lineHeight.20}"
                },
                key: "{typography.body-small}"
            },
            name: "typographyBodySmall",
            attributes: {},
            path: [
                "typography",
                "body-small"
            ]
        },
        description: {
            key: "{typography.description}",
            $type: "typography",
            $description: "Beskrivningstext, t.ex. för hjälptexter och ledtexter i formulär.",
            $value: {
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                fontWeight: 400,
                lineHeight: "1.125rem"
            },
            filePath: "packages/theme/tokens/typography.json",
            isSource: true,
            original: {
                $type: "typography",
                $description: "Beskrivningstext, t.ex. för hjälptexter och ledtexter i formulär.",
                $value: {
                    fontFamily: "{typography.font.family}",
                    fontSize: "{typography.font.size.20}",
                    fontWeight: "{typography.weight.regular}",
                    lineHeight: "{typography.lineHeight.20}"
                },
                key: "{typography.description}"
            },
            name: "typographyDescription",
            attributes: {},
            path: [
                "typography",
                "description"
            ]
        },
        "description-small": {
            key: "{typography.description-small}",
            $type: "typography",
            $description: "Liten beskrivningstext, t.ex. för felmeddelanden och teckenräknare i formulär.",
            $value: {
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 400,
                lineHeight: "1rem"
            },
            filePath: "packages/theme/tokens/typography.json",
            isSource: true,
            original: {
                $type: "typography",
                $description: "Liten beskrivningstext, t.ex. för felmeddelanden och teckenräknare i formulär.",
                $value: {
                    fontFamily: "{typography.font.family}",
                    fontSize: "{typography.font.size.10}",
                    fontWeight: "{typography.weight.regular}",
                    lineHeight: "{typography.lineHeight.10}"
                },
                key: "{typography.description-small}"
            },
            name: "typographyDescriptionSmall",
            attributes: {},
            path: [
                "typography",
                "description-small"
            ]
        }
    },
    zIndex: {
        base: {
            key: "{zIndex.base}",
            $value: 1,
            $description: "Basnivå för normala element. z-index: 1.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 1,
                $description: "Basnivå för normala element. z-index: 1.",
                $type: "number",
                key: "{zIndex.base}"
            },
            name: "zIndexBase",
            attributes: {},
            path: [
                "zIndex",
                "base"
            ]
        },
        above: {
            key: "{zIndex.above}",
            $value: 10,
            $description: "Placerar element ovanför normala element, t.ex. tooltips i flödet. z-index: 10.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 10,
                $description: "Placerar element ovanför normala element, t.ex. tooltips i flödet. z-index: 10.",
                $type: "number",
                key: "{zIndex.above}"
            },
            name: "zIndexAbove",
            attributes: {},
            path: [
                "zIndex",
                "above"
            ]
        },
        sidebar: {
            key: "{zIndex.sidebar}",
            $value: 500,
            $description: "Z-index för sidopaneler och navigationsdrawers. z-index: 500.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 500,
                $description: "Z-index för sidopaneler och navigationsdrawers. z-index: 500.",
                $type: "number",
                key: "{zIndex.sidebar}"
            },
            name: "zIndexSidebar",
            attributes: {},
            path: [
                "zIndex",
                "sidebar"
            ]
        },
        modal: {
            key: "{zIndex.modal}",
            $value: 1000,
            $description: "Z-index för modaler och dialoger. z-index: 1000.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 1000,
                $description: "Z-index för modaler och dialoger. z-index: 1000.",
                $type: "number",
                key: "{zIndex.modal}"
            },
            name: "zIndexModal",
            attributes: {},
            path: [
                "zIndex",
                "modal"
            ]
        },
        toast: {
            key: "{zIndex.toast}",
            $value: 1100,
            $description: "Z-index för toast-notifikationer, ovanför modaler. z-index: 1100.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 1100,
                $description: "Z-index för toast-notifikationer, ovanför modaler. z-index: 1100.",
                $type: "number",
                key: "{zIndex.toast}"
            },
            name: "zIndexToast",
            attributes: {},
            path: [
                "zIndex",
                "toast"
            ]
        },
        skipToContent: {
            key: "{zIndex.skipToContent}",
            $value: 1200,
            $description: "Z-index för 'hoppa till innehåll'-länken för tillgänglighet, alltid överst. z-index: 1200.",
            filePath: "packages/theme/tokens/z-index.json",
            isSource: true,
            $type: "number",
            original: {
                $value: 1200,
                $description: "Z-index för 'hoppa till innehåll'-länken för tillgänglighet, alltid överst. z-index: 1200.",
                $type: "number",
                key: "{zIndex.skipToContent}"
            },
            name: "zIndexSkipToContent",
            attributes: {},
            path: [
                "zIndex",
                "skipToContent"
            ]
        }
    }
});

;// CONCATENATED MODULE: ./packages/theme/src/lib/style-dictionary-dist/variables.js
/**
 * Do not edit directly, this file was auto-generated.
 */ const base10 = "0.125rem";
const base15 = "0.188rem";
const base20 = "0.25rem";
const base30 = "0.375rem";
const base40 = "0.5rem";
const base50 = "0.625rem";
const base60 = "0.75rem";
const base70 = "0.875rem";
const base75 = "0.938rem";
const base80 = "1rem";
const base90 = "1.25rem";
const base100 = "1.5rem";
const base110 = "1.75rem";
const base120 = "2rem";
const base130 = "2.5rem";
const base140 = "2.75rem";
const base150 = "3rem";
const base00 = "0rem";
const base05 = "0.063rem";
const windowSizesSm = "480px"; // Liten skärmstorlek. 480px.
const windowSizesMd = "768px"; // Mellanstor skärmstorlek. 768px.
const windowSizesLg = "1024px"; // Stor skärmstorlek. 1024px.
const windowSizesXl = "1280px"; // Extra stor skärmstorlek. 1280px.
const breakpointsXs = "(max-width: calc(480px - 1px))"; // Extra liten skärm. Upp till 479px (max-width).
const breakpointsSm = "(min-width: 480px)"; // Liten skärm och uppåt. Från 480px (min-width).
const breakpointsMd = "(min-width: 768px)"; // Mellanstor skärm och uppåt. Från 768px (min-width).
const breakpointsLg = "(min-width: 1024px)"; // Stor skärm och uppåt. Från 1024px (min-width).
const breakpointsXl = "(min-width: 1280px)"; // Extra stor skärm och uppåt. Från 1280px (min-width).
const buttonBackgroundPrimaryBase = "light-dark(#143c50, #2e7ca5)"; // Färg på primärknapp
const buttonBackgroundPrimaryHover = "light-dark(#25607f, #25607f)"; // Hover state på primärknapp
const buttonBackgroundPrimaryActive = "light-dark(#2e7ca5, #143c50)"; // Active state för primärknapp
const buttonBackgroundSecondaryBase = "transparent"; // Färg på sekundärknapp
const buttonBackgroundSecondaryHover = "light-dark(#0000000d, #ffffff21)"; // Hover state på sekundärknapp
const buttonBackgroundSecondaryActive = "light-dark(#0000001a, #ffffff26)"; // Active state för sekundärknapp
const buttonBackgroundTertiaryHover = "light-dark(#0000000d, #ffffff21)"; // Hover state för tertiär knapp
const buttonBackgroundTertiaryActive = "light-dark(#0000001a, #ffffff26)"; // Active state för tertiär knapp
const buttonBackgroundDangerBase = "light-dark(#e62323, #e62323)"; // Färg på danger knapp
const buttonBackgroundDangerHover = "light-dark(#bc1d1d, #bc1d1d)"; // Hover state för danger knapp
const buttonBackgroundDangerActive = "light-dark(#7d1313, #7d1313)"; // Active state för danger knapp
const buttonBackgroundDisabled = "light-dark(#0000000d,#ffffff21)"; // Disabled state för knappar
const buttonBorderSecondary = "light-dark(#143c50, #f2f2f2)"; // Kantfärg för sekundärknapp
const buttonIconHover = "light-dark(#0000000d, #ffffff21)"; // Hover state för ikonknappar
const buttonIconActive = "light-dark(#00000033, #ffffff33)"; // Active state för ikoner
const colorBlackBase = "#000"; // Black
const colorBlackHover = "#0d0d0d"; // Black hover
const colorBlackOpacity5 = "#0000000d"; // Black with 5% opacity
const colorBlackOpacity10 = "#0000001a"; // Black with 10% opacity
const colorWhiteBase = "#fff"; // White
const colorWhiteHover = "#e6e6e6"; // White hover
const colorWhiteOpacity13 = "#ffffff21"; // White with 13% opacity
const colorWhiteOpacity15 = "#ffffff26"; // White with 15% opacity
const colorGray10 = "#f2f2f2";
const colorGray20 = "#e6e6e6";
const colorGray30 = "#d9d9d9";
const colorGray40 = "#ccc";
const colorGray50 = "#bfbfbf";
const colorGray60 = "#b3b3b3";
const colorGray70 = "#a6a6a6";
const colorGray80 = "#999";
const colorGray90 = "#8c8c8c";
const colorGray100 = "#808080";
const colorGray110 = "#737373";
const colorGray120 = "#666";
const colorGray130 = "#5d5d5d";
const colorGray140 = "#525252";
const colorGray150 = "#474747";
const colorGray160 = "#383838";
const colorGray170 = "#333";
const colorGray180 = "#262626";
const colorGray190 = "#212121";
const colorGray200 = "#171717";
const colorBlue10 = "#eaf2f6";
const colorBlue20 = "#d5e5ed";
const colorBlue40 = "#abcbdb";
const colorBlue50 = "#94BCD1";
const colorBlue60 = "#82b0c9";
const colorBlue70 = "#6CA3C0";
const colorBlue80 = "#5897b8";
const colorBlue90 = "#4289ad";
const colorBlue100 = "#2e7ca5";
const colorBlue110 = "#2C7399";
const colorBlue120 = "#29698C";
const colorBlue130 = "#25607f";
const colorBlue150 = "#143c50";
const colorPurple80 = "#b46ab4";
const colorPurple110 = "#954b95";
const colorRed100 = "#b90835";
const colorOrange100 = "oklch(0.66 0.18 45)";
const colorSignalBlue10 = "#eaf2f6";
const colorSignalBlue20 = "#d5e5ed";
const colorSignalBlue100 = "#06c";
const colorSignalBlue170 = "#162b33";
const colorSignalBlue180 = "#112127";
const colorSignalGreen20 = "#d5f2d9";
const colorSignalGreen30 = "#bae5c5";
const colorSignalGreen100 = "#008d3c";
const colorSignalGreen150 = "#194B33";
const colorSignalGreen170 = "#163328";
const colorSignalGreen180 = "#112722";
const colorSignalYellow10 = "#fff8e2";
const colorSignalYellow20 = "#fff1cd";
const colorSignalYellow30 = "#ffeab8";
const colorSignalYellow40 = "#ffe3a3";
const colorSignalYellow50 = "#ffdc8b";
const colorSignalYellow60 = "#ffd47b";
const colorSignalYellow70 = "#fdcd5d";
const colorSignalYellow80 = "#fbc640";
const colorSignalYellow90 = "#fabf1b";
const colorSignalYellow100 = "#fab900";
const colorSignalYellow110 = "#daa105";
const colorSignalYellow120 = "#bd8c1e";
const colorSignalYellow130 = "#a17927";
const colorSignalYellow140 = "#88672a";
const colorSignalYellow150 = "#70562b";
const colorSignalYellow160 = "#5a4629";
const colorSignalYellow170 = "#453826";
const colorSignalYellow180 = "#322a20";
const colorSignalYellow190 = "#201c18";
const colorSignalYellow200 = "#0f0e0e";
const colorSignalRed10 = "#ffefef";
const colorSignalRed20 = "#ffdfdf";
const colorSignalRed30 = "#fcc8c8";
const colorSignalRed40 = "#f9b0b0";
const colorSignalRed50 = "#f69999";
const colorSignalRed60 = "#f38181";
const colorSignalRed70 = "#ef6a6a";
const colorSignalRed80 = "#EC5252";
const colorSignalRed90 = "#e93b3b";
const colorSignalRed100 = "#e62323";
const colorSignalRed110 = "#d12020";
const colorSignalRed120 = "#bc1d1d";
const colorSignalRed130 = "#a71919";
const colorSignalRed140 = "#921616";
const colorSignalRed150 = "#7d1313";
const colorSignalRed160 = "#691010";
const colorSignalRed170 = "#540d0d";
const colorSignalRed180 = "#3f0a0a";
const colorSignalRed190 = "#2a0606";
const colorSignalRed200 = "#150303";
const colorSky20 = "#cde6f3";
const colorSky60 = "#4a95df";
const colorSky180 = "#101037";
const colorMint20 = "#d5f2d9";
const colorMint60 = "#75b47d";
const colorMint180 = "#07270b";
const colorCream20 = "#fff5db";
const colorCream60 = "#ecbe4a";
const colorCream180 = "#2c2719";
const colorTeal20 = "#cdf2f2";
const colorTeal60 = "#43bcbc";
const colorTeal180 = "#0d2c2c";
const colorLagoon20 = "#d2daf9";
const colorLagoon60 = "#7088e0";
const colorLagoon180 = "#0a1332";
const colorLavender20 = "#f6d0f9";
const colorLavender60 = "#b77dbc";
const colorLavender180 = "#391c3b";
const colorPeach20 = "#ffe6d9";
const colorPeach60 = "#e87031";
const colorPeach180 = "#421d0a";
const colorPippin20 = "#ffe0e0";
const colorPippin60 = "#f17575";
const colorPippin180 = "#431919";
const spacing10 = "0.125rem"; // @deprecated Use space.10 (--midas-space-10) instead
const spacing20 = "0.25rem"; // @deprecated Use space.xsmall (--midas-space-xsmall) instead
const spacing30 = "0.5rem"; // @deprecated Use space.small (--midas-space-small) instead
const spacing40 = "0.75rem"; // @deprecated Use space.60 (--midas-space-60) instead
const spacing50 = "1rem"; // @deprecated Use space.medium (--midas-space-medium) instead
const spacing60 = "1.5rem"; // @deprecated Use space.large (--midas-space-large) instead
const spacing70 = "2rem"; // @deprecated Use space.xlarge (--midas-space-xlarge) instead
const spacing80 = "2.5rem"; // @deprecated Use space.130 (--midas-space-130) instead
const spacing90 = "3rem"; // @deprecated Use space.150 (--midas-space-150) instead
const spacingXsmall = "0.25rem"; // @deprecated Use space.xsmall (--midas-space-xsmall) instead
const spacingSmall = "0.5rem"; // @deprecated Use space.small (--midas-space-small) instead
const spacingMedium = "1rem"; // @deprecated Use space.medium (--midas-space-medium) instead
const spacingLarge = "1.5rem"; // @deprecated Use space.large (--midas-space-large) instead
const spacingXlarge = "2rem"; // @deprecated Use space.xlarge (--midas-space-xlarge) instead
const size10 = "0.125rem"; // @deprecated Use base.10 (--midas-base-10) instead
const size15 = "0.188rem"; // @deprecated Use base.15 (--midas-base-15) instead
const size20 = "0.25rem"; // @deprecated Use base.20 (--midas-base-20) instead
const size30 = "0.375rem"; // @deprecated Use base.30 (--midas-base-30) instead
const size40 = "0.5rem"; // @deprecated Use base.40 (--midas-base-40) instead
const size50 = "0.625rem"; // @deprecated Use base.50 (--midas-base-50) instead
const size60 = "0.75rem"; // @deprecated Use base.60 (--midas-base-60) instead
const size70 = "0.875rem"; // @deprecated Use base.70 (--midas-base-70) instead
const size75 = "0.938rem"; // @deprecated Use base.75 (--midas-base-75) instead
const size80 = "1rem"; // @deprecated Use base.80 (--midas-base-80) instead
const size90 = "1.25rem"; // @deprecated Use base.90 (--midas-base-90) instead
const size100 = "1.5rem"; // @deprecated Use base.100 (--midas-base-100) instead
const size110 = "1.75rem"; // @deprecated Use base.110 (--midas-base-110) instead
const size120 = "2rem"; // @deprecated Use base.120 (--midas-base-120) instead
const size130 = "2.5rem"; // @deprecated Use base.130 (--midas-base-130) instead
const size140 = "2.75rem"; // @deprecated Use base.140 (--midas-base-140) instead
const size150 = "3rem"; // @deprecated Use base.150 (--midas-base-150) instead
const size00 = "0rem"; // @deprecated Use base.00 (--midas-base-00) instead
const size05 = "0.063rem"; // @deprecated Use base.05 (--midas-base-05) instead
const sizeControlSm = "2.5rem"; // @deprecated Use size.control-md (--midas-size-control-md) instead
const sizeIcon = "1.25rem"; // Standardstorlek för ikoner. 1.25rem / 20px.
const sizeIconSm = "1rem"; // Liten ikonstorlek för kompakta kontexter. 1rem / 16px.
const sizeOption = "2rem"; // Höjd för alternativ i dropdown-listor, t.ex. Select och Combobox. 2rem / 32px.
const sizeControlMd = "2.5rem"; // Medelstor interaktiv kontrollhöjd. 2.5rem / 40px.
const sizeControl = "3rem"; // Standardhöjd för interaktiva kontroller, t.ex. TextField och Button. 3rem / 48px.
const backgroundBase = "light-dark(#fff, #171717)"; // Standardbakgrund för våra applikationer
const backgroundHover = "light-dark(#e6e6e6, #212121)"; // Hoverfärg för bakgrund
const backgroundInverse = "light-dark(#171717, #f2f2f2)"; // Bakgrund med inverterade färger
const layer01Base = "light-dark(#f2f2f2, #262626)"; // Färg för lager som läggs på Background.
const layer01Hover = "light-dark(#e6e6e6, #333)"; // Hover state för layer01
const layer01Selected = "light-dark(#d9d9d9, #383838)"; // Selected state för layer01
const layer01SelectedHover = "light-dark(#ccc, #474747)"; // Hover state för layerSelected01
const layer02Base = "light-dark(#fff, #383838)"; // Färg för lager som läggs på layer 01
const layer02Hover = "light-dark(#e6e6e6, #474747)"; // Hover state för layer02
const layer02Selected = "light-dark(#d9d9d9, #525252)"; // Selected state för layer02
const layer02SelectedHover = "light-dark(#ccc, #5d5d5d)"; // Hover state för layerSelected02
const layerAccent01Base = "light-dark(#d9d9d9, #383838)"; // Accentfärg som används tillsammans med layer 01
const layerAccent01Hover = "light-dark(#ccc, #474747)"; // Hover state för layerAccent01
const layerAccent01Selected = "light-dark(#bfbfbf, #525252)"; // Selected state för layerAccent01
const layerAccent02Base = "light-dark(#d9d9d9, #383838)"; // Accentfärg som används tillsammans med layer 02
const layerAccent02Hover = "light-dark(#ccc, #474747)"; // Hover state för layerAccent02
const layerAccent02Selected = "light-dark(#bfbfbf, #525252)"; // Selected state för layerAccent02
const brandPrimary = "light-dark(#b90835, #b90835)"; // Migrationsverkets primära röda färg
const borderColorPrimary = "light-dark(#171717, #f2f2f2)"; // Kantlinje med hög kontrast
const borderColorSecondary = "light-dark(#737373, #8c8c8c)"; // Kantlinje med medelhög kontrast
const borderColorSubtle = "light-dark(#bfbfbf, #525252)"; // Kantlinje med låg kontrast
const borderColorTertiary = "light-dark(#143c50, #2e7ca5)"; // Primärblå kantlinje
const borderColorDisabled = "light-dark(#bfbfbf, #525252)"; // Kantlinje för disabled state
const borderWidth = "1px";
const field01Base = "light-dark(#f2f2f2, #262626)"; // färg för fält som ligger på Background
const field01Hover = "light-dark(#e6e6e6, #333)"; // Hover state för field01
const field01Active = "light-dark(#d9d9d9, #383838)"; // Active state för field01
const field01Disabled = "light-dark(#f2f2f2, #262626)"; // Disabled state för fält som ligger på Background
const field02Base = "light-dark(#fff, #383838)"; // Färg för fält som ligger på layer 01
const field02Hover = "light-dark(#e6e6e6, #474747)"; // Hover state för field02
const field02Active = "light-dark(#d9d9d9, #525252)"; // Active state för field02
const field02Disabled = "light-dark(#fff, #383838)"; // Disabled state för fält som ligger på layer 01
const skeleton01 = "light-dark(#f2f2f2, #262626)"; // Färg som används när Skeleton ligger på Background
const skeleton02 = "light-dark(#d9d9d9, #383838)"; // Färg som används när Skeleton ligger på Layer 01
const iconPrimary = "light-dark(#171717, #f2f2f2)"; // Primär ikonfärg
const iconSecondary = "light-dark(#525252, #a6a6a6)"; // Sekundär ikonfärg
const iconTertiary = "light-dark(#143c50, #f2f2f2)"; // Tertiär ikonfärg, används för ikoner i tertiary-knappar
const iconInverse = "light-dark(#fff, #171717)"; // Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge
const iconOnColor = "light-dark(#fff, #fff)"; // Ikonfärg på färgade ytor som inte är lager
const iconDisabled = "light-dark(#bfbfbf, #525252)"; // Färg för ikoner som är disabled
const iconSuccess = "light-dark(#008d3c, #008d3c)"; // Ikonfärg för success state
const iconInfo = "light-dark(#06c, #06c)"; // Ikonfärg för informationsikoner
const iconWarning = "light-dark(#e62323, #e62323)"; // Ikonfärg för varningsikoner och invalid state
const iconImportant = "oklch(0.66 0.18 45)"; // Ikonfärg för viktig information
const iconReadOnly = "light-dark(#bfbfbf, #383838)"; // Färg för ikoner som är read-only
const linkEnabled = "light-dark(#29698C, #6CA3C0)"; // Primär länkfärg
const linkHover = "light-dark(#143c50, #94BCD1)"; // Hover state för länkar
const linkPressed = "light-dark(#171717, #abcbdb)"; // Active/pressed state för länkar
const linkVisited = "light-dark(#954b95, #b46ab4)"; // Färg för besökta länkar
const progressBarTrackBackground = "light-dark(#d9d9d9, #383838)"; // Bakgrundsfärg för progress bar track
const progressBarIndicatorBackground = "#008d3c"; // Bakgrundsfärg för progress bar indicator
const supportBorderSuccess = "light-dark(#008d3c, #008d3c)"; // Kantlinje för success-notifikationer
const supportBorderInfo = "light-dark(#06c, #06c)"; // Kantlinje för notifikationer med information
const supportBorderImportant = "oklch(0.66 0.18 45)"; // Kantlinje för notifikationer med viktig information
const supportBorderWarning = "light-dark(#e62323, #e62323)"; // Kantlinje för notifikationer med varningar
const supportBackgroundSuccess = "light-dark(#d5f2d9, #112722)"; // Bakgrund för success-notifikationer
const supportBackgroundSuccessHover = "light-dark(#bae5c5, #163328)"; // Hoverbakgrund för success-notifikationer
const supportBackgroundInfo = "light-dark(#eaf2f6, #112127)"; // Bakgrund för notifikationer med information
const supportBackgroundInfoHover = "light-dark(#d5e5ed, #162b33)"; // Hoverbakgrund för notifikationer med information
const supportBackgroundImportant = "light-dark(#fff8e2, #322a20)"; // Bakgrund för notifikationer med viktig information
const supportBackgroundImportantHover = "light-dark(#fff1cd, #453826)"; // Hoverbakgrund för notifikationer med viktig information
const supportBackgroundWarning = "light-dark(#ffdfdf, #3f0a0a)"; // Bakgrund för notifikationer med varningar
const supportBackgroundWarningHover = "light-dark(#fcc8c8, #540d0d)"; // Hoverbakgrund för notifikationer med varningar
const tagSkyBackground = "light-dark(#cde6f3, #101037)"; // Tag bakgrund blå
const tagSkyBorderColor = "#4a95df"; // Tag kantlinje blå
const tagBlueBackground = "light-dark(#cde6f3, #101037)"; // @deprecated Använd tag.sky istället.
const tagBlueBorderColor = "#4a95df"; // @deprecated Använd tag.sky istället.
const tagMintBackground = "light-dark(#d5f2d9, #07270b)"; // Tag bakgrund grön
const tagMintBorderColor = "#75b47d"; // Tag kantlinje grön
const tagGreenBackground = "light-dark(#d5f2d9, #07270b)"; // @deprecated Använd tag.mint istället.
const tagGreenBorderColor = "#75b47d"; // @deprecated Använd tag.mint istället.
const tagCreamBackground = "light-dark(#fff5db, #2c2719)"; // Tag bakgrund gul
const tagCreamBorderColor = "#ecbe4a"; // Tag kantlinje gul
const tagYellowBackground = "light-dark(#fff5db, #2c2719)"; // @deprecated Använd tag.cream istället.
const tagYellowBorderColor = "#ecbe4a"; // @deprecated Använd tag.cream istället.
const tagTealBackground = "light-dark(#cdf2f2, #0d2c2c)"; // Tag bakgrund blågrön
const tagTealBorderColor = "#43bcbc"; // Tag kantlinje blågrön
const tagLagoonBackground = "light-dark(#d2daf9, #0a1332)"; // Tag bakgrund lagunblå
const tagLagoonBorderColor = "#7088e0"; // Tag kantlinje lagunblå
const tagLagoonblueBackground = "light-dark(#d2daf9, #0a1332)"; // @deprecated Använd tag.lagoon istället.
const tagLagoonblueBorderColor = "#7088e0"; // @deprecated Använd tag.lagoon istället.
const tagLavenderBackground = "light-dark(#f6d0f9, #391c3b)"; // Tag bakgrund lila
const tagLavenderBorderColor = "#b77dbc"; // Tag kantlinje lila
const tagPurpleBackground = "light-dark(#f6d0f9, #391c3b)"; // @deprecated Använd tag.lavender istället.
const tagPurpleBorderColor = "#b77dbc"; // @deprecated Använd tag.lavender istället.
const tagPeachBackground = "light-dark(#ffe6d9, #421d0a)"; // Tag bakgrund orange
const tagPeachBorderColor = "#e87031"; // Tag kantlinje orange
const tagOrangeBackground = "light-dark(#ffe6d9, #421d0a)"; // @deprecated Använd tag.peach istället.
const tagOrangeBorderColor = "#e87031"; // @deprecated Använd tag.peach istället.
const tagPippinBackground = "light-dark(#ffe0e0, #431919)"; // Tag bakgrund röd
const tagPippinBorderColor = "#f17575"; // Tag kantlinje röd
const tagRedBackground = "light-dark(#ffe0e0, #431919)"; // @deprecated Använd tag.pippin istället.
const tagRedBorderColor = "#f17575"; // @deprecated Använd tag.pippin istället.
const textPrimary = "light-dark(#171717, #f2f2f2)"; // Primär textfärg.
const textSecondary = "light-dark(#525252, #a6a6a6)"; // Sekundär textfärg
const textTertiary = "light-dark(#143c50, #f2f2f2)"; // Textfärg på tertiär knapp
const textOnColor = "light-dark(#fff, #fff)"; // Textfärg på färgade bakgrunder som inte är lager
const textInverse = "light-dark(#f2f2f2, #171717)"; // Inverterad textfärg
const textDisabled = "light-dark(#bfbfbf, #525252)"; // Färg för disabled text
const textWarning = "light-dark(#e62323, #EC5252)"; // Färg för felmeddelanden
const textPlaceholder = "light-dark(#a6a6a6, #525252)"; // Färg för platshållare
const textReadOnly = "light-dark(#737373, #999)"; // Färg för read-only state
const badgeBackground = "light-dark(#e62323, #e62323)"; // Bakgrundsfärg för badge
const calendarDateBackgroundHover = "light-dark(#0000001a, #ffffff1a)"; // Hover-bakgrund för datumcell
const calendarDateBackgroundSelected = "light-dark(#143c50, #5897b8)"; // Bakgrund för ett valt datum
const calendarDateBackgroundStartRange = "light-dark(#143c50, #5897b8)"; // Bakgrund för det första datumet i ett intervallval
const calendarDateBackgroundInRange = "light-dark(#d5e5ed, #143c50)"; // Bakgrund för datum som ligger inom ett valt intervall
const calendarDateBackgroundEndRange = "light-dark(#143c50, #5897b8)"; // Bakgrund för det sista datumet i ett intervallval
const logoPrimary = "light-dark(#b90835, #fff)"; // Färg på logotypen
const menuItemBackgroundHover = "light-dark(#e6e6e6, #212121)"; // Bakgrundsfärg för menu vid hover
const menuItemBackgroundSelected = "light-dark(#f2f2f2, #262626)"; // Bakgrundsfärg för aktiv menu
const menuTextSectionHeader = "light-dark(#525252, #a6a6a6)"; // Textfärg för sektionsrubriker i navigationsmenyn
const navigationLinkBackgroundHover = "light-dark(#e6e6e6, #212121)"; // Bakgrundsfärg vid hover
const navigationLinkBackgroundSelected = "light-dark(#f2f2f2, #262626)"; // Bakgrundsfärg för aktiv länk
const navigationLinkBackgroundSelectedHover = "light-dark(#e6e6e6, #212121)"; // Bakgrundsfärg vid hover på aktiv länk
const overlayBackground = "rgba(0 0 0 / 30%)"; // Bakrundsfärg för overlays
const overlayBlur = "blur(2px)"; // Blur för overlays
const cardBackgroundBase = "light-dark(#fff, #262626)"; // Bakrundsfärg för Card
const cardShadow = "0 3px 5px 0 rgba(0, 0, 0, 0.30)"; // Skugga för Card
const panelShadow = "-2px 0px 12px -2px rgba(0, 0, 0, 0.10)"; // Skugga för Panel
const space10 = "0.125rem"; // 0.125rem / 2px.
const space30 = "0.375rem"; // 0.375rem / 6px.
const space50 = "0.625rem"; // 0.625rem / 10px.
const space60 = "0.75rem"; // 0.75rem / 12px.
const space70 = "0.875rem"; // 0.875rem / 14px.
const space75 = "0.938rem"; // 0.938rem / 15px.
const space90 = "1.25rem"; // 1.25rem / 20px.
const space130 = "2.5rem"; // 2.5rem / 40px.
const space150 = "3rem"; // 3rem / 48px.
const spaceXsmall = "0.25rem"; // Extra litet avstånd. 0.25rem / 4px.
const spaceSmall = "0.5rem"; // Litet avstånd. 0.5rem / 8px.
const spaceMedium = "1rem"; // Medelstort avstånd. 1rem / 16px.
const spaceLarge = "1.5rem"; // Stort avstånd. 1.5rem / 24px.
const spaceXlarge = "2rem"; // Extra stort avstånd. 2rem / 32px.
const space05 = "0.063rem"; // 0.063rem / 1px.
const stateFocus = "0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)"; // Focus style used when the component is focused (box-shadow).
const stateFocusInset = "inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)"; // Inset variant of the focus ring (box-shadow inset).
const stateFocusContrastModeOutline = "2px"; // Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.
const stateFocusContrastModeOffset = "2px"; // Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active.
const stateInvalid = "inset 0 0 0 2px light-dark(#e62323, #e62323)"; // Invalid state style for form fields (box-shadow).
const transitionDurationSlow = "400ms"; // Långsam övergång. 400ms. Används för större layoutförändringar som sidopaneler och expanderbara sektioner.
const transitionDurationNormal = "300ms"; // Normal övergångshastighet. 300ms. Standardval för de flesta animationer.
const transitionDurationFast = "250ms"; // Snabb övergång. 250ms. Används för kortlivade övergångar som tooltips och dropdowns — inte hover.
const transitionDurationQuick = "150ms"; // Kort mikroanimation. 150ms. Används för snabba overlay-rörelser som modaler och select-öppningar som är perceptibelt animerade men ändå snabba.
const transitionDurationInstant = "100ms"; // Omedelbar återkoppling. 100ms. Används för direkta tillståndsförändringar som hover-bakgrunder och färgövergångar — allt längre upplevs som tröghet.
const transitionTimingEaseOut = (/* unused pure expression or super */ null && ([
    0,
    0,
    0.58,
    1
])); // Decelererar mot slutet. Används för element som glider in i vyn.
const transitionTimingEaseIn = (/* unused pure expression or super */ null && ([
    0.42,
    0,
    1,
    1
])); // Accelererar mot slutet. Används för element som lämnar vyn.
const transitionTimingEaseInOut = (/* unused pure expression or super */ null && ([
    0.42,
    0,
    0.58,
    1
])); // Accelererar sedan decelererar symmetriskt. Används för element som rör sig mellan två positioner på skärmen.
const transitionPanelCollapse = (/* unused pure expression or super */ null && ({
    delay: "0ms",
    duration: "300ms",
    timingFunction: [
        0,
        0,
        0.58,
        1
    ]
})); // Komprimerar en panel med easeOut-timing. Används i Accordion och expanderbara ytor.
const transitionPanelExpand = (/* unused pure expression or super */ null && ({
    delay: "0ms",
    duration: "300ms",
    timingFunction: [
        0.42,
        0,
        1,
        1
    ]
})); // Expanderar en panel med easeIn-timing. Används i Accordion och expanderbara ytor.
const typographyFontFamily = "Inter, sans-serif"; // Primär typsnittsfamilj för hela design systemet.
const typographyFontSize10 = "0.75rem"; // 0.75rem / 12px.
const typographyFontSize20 = "0.875rem"; // 0.875rem / 14px.
const typographyFontSize30 = "1rem"; // 1rem / 16px.
const typographyFontSize40 = "1.125rem"; // 1.125rem / 18px.
const typographyFontSize50 = "1.25rem"; // 1.25rem / 20px.
const typographyFontSize60 = "1.5rem"; // 1.5rem / 24px.
const typographyFontSize70 = "1.625rem"; // 1.625rem / 26px.
const typographyFontSize80 = "2rem"; // 2rem / 32px.
const typographyFontSize90 = "2.25rem"; // 2.25rem / 36px.
const typographyFontSize100 = "2.625rem"; // 2.625rem / 42px.
const typographyLineHeight10 = "1rem"; // 1rem / 16px.
const typographyLineHeight20 = "1.125rem"; // 1.125rem / 18px.
const typographyLineHeight30 = "1.25rem"; // 1.25rem / 20px.
const typographyLineHeight40 = "1.375rem"; // 1.375rem / 22px.
const typographyLineHeight50 = "1.5rem"; // 1.5rem / 24px.
const typographyLineHeight60 = "1.75rem"; // 1.75rem / 28px.
const typographyLineHeight70 = "2rem"; // 2rem / 32px.
const typographyLineHeight80 = "2.25rem"; // 2.25rem / 36px.
const typographyLineHeight90 = "2.5rem"; // 2.5rem / 40px.
const typographyLineHeight100 = "3rem"; // 3rem / 48px.
const typographyWeightThin = 100; // 100 – Tunnast möjliga vikt.
const typographyWeightExtraLight = 200; // 200 – Extra tunn.
const typographyWeightLight = 300; // 300 – Tunn.
const typographyWeightRegular = 400; // 400 – Standardvikt för brödtext.
const typographyWeightMedium = 500; // 500 – Mellantung, för betoning utan fet stil.
const typographyWeightSemiBold = 600; // 600 – Halvfet, för underrubriker och etiketter.
const typographyWeightBold = 700; // 700 – Fet, för rubriker och framhävning.
const typographyWeightExtraBold = 800; // 800 – Extra fet.
const typographyWeightBlack = 900; // 900 – Tyngsta möjliga vikt.
const typographyBody = (/* unused pure expression or super */ null && ({
    fontFamily: "Inter, sans-serif",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "1.25rem"
})); // Standardtypografi för brödtext. Används i löptext, listor och stycken.
const typographyBodySmall = (/* unused pure expression or super */ null && ({
    fontFamily: "Inter, sans-serif",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.125rem"
})); // Liten brödtextstil. Används för kompakt text i t.ex. tabeller och listor.
const typographyDescription = (/* unused pure expression or super */ null && ({
    fontFamily: "Inter, sans-serif",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.125rem"
})); // Beskrivningstext, t.ex. för hjälptexter och ledtexter i formulär.
const typographyDescriptionSmall = (/* unused pure expression or super */ null && ({
    fontFamily: "Inter, sans-serif",
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: "1rem"
})); // Liten beskrivningstext, t.ex. för felmeddelanden och teckenräknare i formulär.
const zIndexBase = 1; // Basnivå för normala element. z-index: 1.
const zIndexAbove = 10; // Placerar element ovanför normala element, t.ex. tooltips i flödet. z-index: 10.
const zIndexSidebar = 500; // Z-index för sidopaneler och navigationsdrawers. z-index: 500.
const zIndexModal = 1000; // Z-index för modaler och dialoger. z-index: 1000.
const zIndexToast = 1100; // Z-index för toast-notifikationer, ovanför modaler. z-index: 1100.
const zIndexSkipToContent = 1200; // Z-index för 'hoppa till innehåll'-länken för tillgänglighet, alltid överst. z-index: 1200.

;// CONCATENATED MODULE: ./packages/theme/src/lib/index.ts





;// CONCATENATED MODULE: ./packages/theme/src/index.ts



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
16466(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  $: () => ($bf14c9739fda2eb3$export$eac1895992b9f3d6)
});
/* import */ var _FocusScope_mjs__rspack_import_2 = __webpack_require__(46686);
/* import */ var _utils_useLayoutEffect_mjs__rspack_import_1 = __webpack_require__(74441);
/* import */ var react__rspack_import_0 = __webpack_require__(96540);




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


function $bf14c9739fda2eb3$export$eac1895992b9f3d6(ref, options) {
    let isDisabled = options?.isDisabled;
    let [hasTabbableChild, setHasTabbableChild] = (0, react__rspack_import_0.useState)(false);
    (0, _utils_useLayoutEffect_mjs__rspack_import_1/* .useLayoutEffect */.N)(()=>{
        if (ref?.current && !isDisabled) {
            let update = ()=>{
                if (ref.current) {
                    let walker = (0, _FocusScope_mjs__rspack_import_2/* .getFocusableTreeWalker */.N$)(ref.current, {
                        tabbable: true
                    });
                    setHasTabbableChild(!!walker.nextNode());
                }
            };
            update();
            // Update when new elements are inserted, or the tabIndex/disabled attribute updates.
            let observer = new MutationObserver(update);
            observer.observe(ref.current, {
                subtree: true,
                childList: true,
                attributes: true,
                attributeFilter: [
                    'tabIndex',
                    'disabled'
                ]
            });
            return ()=>{
                // Disconnect mutation observer when a React update occurs on the top-level component
                // so we update synchronously after re-rendering. Otherwise React will emit act warnings
                // in tests since mutation observers fire asynchronously. The mutation observer is necessary
                // so we also update if a child component re-renders and adds/removes something tabbable.
                observer.disconnect();
            };
        }
    });
    return isDisabled ? false : hasTabbableChild;
}



//# sourceMappingURL=useHasTabbableChild.mjs.map


},
94447(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  J: () => ($f664a81d022446b5$export$d085fb9e920b5ca7)
});
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
 */ class $f664a81d022446b5$export$d085fb9e920b5ca7 {
    constructor(nodes){
        this.keyMap = new Map();
        this.firstKey = null;
        this.lastKey = null;
        this.iterable = nodes;
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && node.type === 'section') for (let child of node.childNodes)visit(child);
        };
        for (let node of nodes)visit(node);
        let last = null;
        let index = 0;
        let size = 0;
        for (let [key, node] of this.keyMap){
            if (last) {
                last.nextKey = key;
                node.prevKey = last.key;
            } else {
                this.firstKey = key;
                node.prevKey = undefined;
            }
            if (node.type === 'item') node.index = index++;
            // Only count sections and items when determining size so that
            // loaders and separators in RAC/S2 don't influence the emptyState determination
            if (node.type === 'section' || node.type === 'item') size++;
            last = node;
            // Set nextKey as undefined since this might be the last node
            // If it isn't the last node, last.nextKey will properly set at start of new loop
            last.nextKey = undefined;
        }
        this._size = size;
        this.lastKey = last?.key ?? null;
    }
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this._size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        return node ? node.prevKey ?? null : null;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        return node ? node.nextKey ?? null : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(key) {
        return this.keyMap.get(key) ?? null;
    }
    at(idx) {
        const keys = [
            ...this.getKeys()
        ];
        return this.getItem(keys[idx]);
    }
    getChildren(key) {
        let node = this.keyMap.get(key);
        return node?.childNodes || [];
    }
}



//# sourceMappingURL=ListCollection.mjs.map


},
40447(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => ($b14b6f590b50af39$export$ba9d38c0f1bf2b36),
  p: () => ($b14b6f590b50af39$export$2f645645f7bca764)
});
/* import */ var _ListCollection_mjs__rspack_import_2 = __webpack_require__(94447);
/* import */ var _selection_useMultipleSelectionState_mjs__rspack_import_1 = __webpack_require__(74219);
/* import */ var _selection_SelectionManager_mjs__rspack_import_4 = __webpack_require__(93854);
/* import */ var _collections_useCollection_mjs__rspack_import_3 = __webpack_require__(34933);
/* import */ var react__rspack_import_0 = __webpack_require__(96540);






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




function $b14b6f590b50af39$export$2f645645f7bca764(props) {
    let { filter: filter, layoutDelegate: layoutDelegate } = props;
    let selectionState = (0, _selection_useMultipleSelectionState_mjs__rspack_import_1/* .useMultipleSelectionState */.R)(props);
    let disabledKeys = (0, react__rspack_import_0.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let factory = (0, react__rspack_import_0.useCallback)((nodes)=>filter ? new (0, _ListCollection_mjs__rspack_import_2/* .ListCollection */.J)(filter(nodes)) : new (0, _ListCollection_mjs__rspack_import_2/* .ListCollection */.J)(nodes), [
        filter
    ]);
    let context = (0, react__rspack_import_0.useMemo)(()=>({
            suppressTextValueWarning: props.suppressTextValueWarning
        }), [
        props.suppressTextValueWarning
    ]);
    let collection = (0, _collections_useCollection_mjs__rspack_import_3/* .useCollection */.G)(props, factory, context);
    let selectionManager = (0, react__rspack_import_0.useMemo)(()=>new (0, _selection_SelectionManager_mjs__rspack_import_4/* .SelectionManager */.Y)(collection, selectionState, {
            layoutDelegate: layoutDelegate
        }), [
        collection,
        selectionState,
        layoutDelegate
    ]);
    $b14b6f590b50af39$var$useFocusedKeyReset(collection, selectionManager);
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: selectionManager
    };
}
function $b14b6f590b50af39$export$ba9d38c0f1bf2b36(state, filterFn) {
    let collection = (0, react__rspack_import_0.useMemo)(()=>filterFn ? state.collection.filter(filterFn) : state.collection, [
        state.collection,
        filterFn
    ]);
    let selectionManager = state.selectionManager.withCollection(collection);
    $b14b6f590b50af39$var$useFocusedKeyReset(collection, selectionManager);
    return {
        collection: collection,
        selectionManager: selectionManager,
        disabledKeys: state.disabledKeys
    };
}
function $b14b6f590b50af39$var$useFocusedKeyReset(collection, selectionManager) {
    // Reset focused key if that item is deleted from the collection.
    const cachedCollection = (0, react__rspack_import_0.useRef)(null);
    (0, react__rspack_import_0.useEffect)(()=>{
        if (selectionManager.focusedKey != null && !collection.getItem(selectionManager.focusedKey) && cachedCollection.current) {
            // Walk forward in the old collection to find the next key that still exists in the new collection.
            let key = cachedCollection.current.getKeyAfter(selectionManager.focusedKey);
            let nextFocusedKey = null;
            while(key != null){
                let node = collection.getItem(key);
                if (node && node.type === 'item' && !selectionManager.isDisabled(key)) {
                    nextFocusedKey = key;
                    break;
                }
                key = cachedCollection.current.getKeyAfter(key);
            }
            // If no such key exists, walk backward.
            if (nextFocusedKey == null) {
                key = cachedCollection.current.getKeyBefore(selectionManager.focusedKey);
                while(key != null){
                    let node = collection.getItem(key);
                    if (node && node.type === 'item' && !selectionManager.isDisabled(key)) {
                        nextFocusedKey = key;
                        break;
                    }
                    key = cachedCollection.current.getKeyBefore(key);
                }
            }
            selectionManager.setFocusedKey(nextFocusedKey);
        }
        cachedCollection.current = collection;
    }, [
        collection,
        selectionManager
    ]);
}



//# sourceMappingURL=useListState.mjs.map


},

}]);