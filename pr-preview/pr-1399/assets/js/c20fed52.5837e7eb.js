"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([["4809"], {
23899(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_components_card_mdx_c20_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-card-mdx-c20.json
var site_docs_components_card_mdx_c20_namespaceObject = JSON.parse('{"id":"components/card","title":"Card","description":"Ett card är en modulär komponent som används för att presentera innehåll på ett strukturerat och visuellt tilltalande sätt.","source":"@site/docs/components/card.mdx","sourceDirName":"components","slug":"/components/card","permalink":"/pr-preview/pr-1399/components/card","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Card","description":"Ett card är en modulär komponent som används för att presentera innehåll på ett strukturerat och visuellt tilltalande sätt."},"sidebar":"sideBar","previous":{"title":"Calendar","permalink":"/pr-preview/pr-1399/components/calendar"},"next":{"title":"Checkbox","permalink":"/pr-preview/pr-1399/components/checkbox"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(82737);
// EXTERNAL MODULE: ./packages/components/src/card/Card.tsx + 1 modules
var Card = __webpack_require__(32262);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(20883);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/card/card-header/CardHeader.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const CardHeader_module = ({"cardHeader":"cardHeader_ivsQ","textContainer":"textContainer_qZaf","subHeading":"subHeading_DJJ5"});
;// CONCATENATED MODULE: ./packages/components/src/card/card-header/CardHeader.tsx





const CardHeader = (param)=>{
    let { children, className, heading, headingLevel, subHeading, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* ["default"] */.A)(className, CardHeader_module.cardHeader),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: CardHeader_module.textContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* .CardTitle */.ZB, {
                        elementType: headingLevel,
                        children: heading
                    }),
                    subHeading && /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                        slot: "description",
                        className: CardHeader_module.subHeading,
                        children: subHeading
                    })
                ]
            }),
            children
        ]
    });
};

;// CONCATENATED MODULE: ./packages/components/src/card/card-body/CardBody.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const CardBody_module = ({"cardBody":"cardBody_Ba55"});
;// CONCATENATED MODULE: ./packages/components/src/card/card-body/CardBody.tsx



const CardBody = (param)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* ["default"] */.A)(className, CardBody_module.cardBody),
        ...rest
    });
};

// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(67191);
// EXTERNAL MODULE: ./packages/components/src/grid/Grid.tsx
var Grid = __webpack_require__(25879);
// EXTERNAL MODULE: ./packages/components/src/grid/GridItem.tsx
var GridItem = __webpack_require__(80782);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Menu.mjs + 7 modules
var Menu = __webpack_require__(21233);
// EXTERNAL MODULE: ./packages/components/src/menu/MenuPopover.tsx
var MenuPopover = __webpack_require__(44838);
// EXTERNAL MODULE: ./packages/components/src/menu/Menu.tsx
var menu_Menu = __webpack_require__(22505);
// EXTERNAL MODULE: ./packages/components/src/menu/MenuItem.tsx
var MenuItem = __webpack_require__(69048);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 7 modules
var createLucideIcon = __webpack_require__(83573);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/pen.js
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
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
];
const Pen = (0,createLucideIcon/* ["default"] */.A)("pen", __iconNode);


//# sourceMappingURL=pen.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trash-2.js
var trash_2 = __webpack_require__(32708);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js
var ellipsis_vertical = __webpack_require__(3213);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/phone.js
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const phone_iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = (0,createLucideIcon/* ["default"] */.A)("phone", phone_iconNode);


//# sourceMappingURL=phone.js.map

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(66497);
;// CONCATENATED MODULE: ./apps/docs/src/components/examples/card/CardExamples.tsx





const BasicExample = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* .Card */.Zp, {
            style: {
                maxWidth: '320px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader, {
                    heading: "Sven Svensson"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CardBody, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                        children: "Sven \xe4r en designer p\xe5 Migrationsverket"
                    })
                })
            ]
        })
    });
const ActionExample = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* .Card */.Zp, {
            style: {
                maxWidth: '320px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader, {
                    heading: "Ink\xf6pslista"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CardBody, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: "3 bananer"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: "2 meloner"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: "4 kiwi"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: "2 citroner"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* .CardActions */.w, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                            variant: "secondary",
                            "aria-label": "Redigera ink\xf6pslista",
                            icon: Pen,
                            children: "Redigera"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                            variant: "tertiary",
                            "aria-label": "Ta bort ink\xf6pslista",
                            icon: trash_2/* ["default"] */.A,
                            children: "Ta bort"
                        })
                    ]
                })
            ]
        })
    });
const ActionAreaExample = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* .Card */.Zp, {
            style: {
                maxWidth: '320px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* .CardActionArea */.s$, {
                    onPress: ()=>alert('Klickat på CardActionArea'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* .CardContent */.Wu, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* .CardTitle */.ZB, {
                                children: "Dina uppgifter"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                                children: "Namn: Namn Namnsson"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* .CardContent */.Wu, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* .CardActions */.w, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                                variant: "icon",
                                icon: Pen,
                                children: "\xc4ndra"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                                variant: "icon",
                                icon: x/* ["default"] */.A,
                                children: "Avbryt"
                            })
                        ]
                    })
                })
            ]
        })
    });
const LinkExample = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* .Card */.Zp, {
            style: {
                maxWidth: '320px'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* .CardContent */.Wu, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* .CardLink */.hB, {
                        href: "#",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* .CardTitle */.ZB, {
                            children: "Min sida"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                        children: "P\xe5 min sida kan du \xe4ndra dina uppgifter och se status p\xe5 dina ans\xf6kningar"
                    })
                ]
            })
        })
    });
const ImageExample = ()=>{
    const imgSrc = (0,useBaseUrl/* ["default"] */.Ay)('/img/CardImage.jpg');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* .Grid */.x, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(GridItem/* .GridItem */.E, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* .Card */.Zp, {
                        style: {
                            maxWidth: '320px'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* .CardImage */.MH, {
                                src: imgSrc,
                                alt: "Illustration av en ung man"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader, {
                                heading: "Sven Svensson"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardBody, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                                    children: "Sven \xe4r en designer p\xe5 Migrationsverket"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(GridItem/* .GridItem */.E, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* .Card */.Zp, {
                        style: {
                            maxWidth: '320px'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader, {
                                heading: "Sven Svensson"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* .CardImage */.MH, {
                                src: imgSrc,
                                alt: "Illustration av en ung man"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardBody, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                                    children: "Sven \xe4r en designer p\xe5 Migrationsverket"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
const MenuExample = ()=>{
    const imgSrc = (0,useBaseUrl/* ["default"] */.Ay)('/img/CardImage.jpg');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* .Card */.Zp, {
            style: {
                maxWidth: '320px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader, {
                    heading: "Sven Svensson",
                    subHeading: "Designer p\xe5 Migrationsverket",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Menu/* .MenuTrigger */.cQ, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                                "aria-label": "Menu",
                                variant: "icon",
                                size: "medium",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ellipsis_vertical/* ["default"] */.A, {
                                    size: 20
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuPopover/* .MenuPopover */.b, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(menu_Menu/* .Menu */.W, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* .MenuItem */.D, {
                                            id: "spara",
                                            children: "Spara kontaktuppgifter"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* .MenuItem */.D, {
                                            id: "epost",
                                            children: "Skicka mejl"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* .CardImage */.MH, {
                    src: imgSrc
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CardBody, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                        children: "Prata med Sven Svensson om du har fr\xe5gor om design tokens"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* .CardActions */.w, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                        variant: "secondary",
                        "aria-label": "Boka m\xf6te med Sven Svensson",
                        icon: Phone,
                        children: "Boka m\xf6te"
                    })
                })
            ]
        })
    });
};
const HorizontalExample = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* .Card */.Zp, {
            horizontal: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* .CardContent */.Wu, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* .CardTitle */.ZB, {
                        children: "Dina uppgifter"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Text/* .Text */.E, {
                        children: "Namn: Namn Namnsson"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* .CardActions */.w, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
                            variant: "icon",
                            icon: Pen,
                            children: "Redigera"
                        })
                    })
                ]
            })
        })
    });

;// CONCATENATED MODULE: ./apps/docs/docs/components/card.mdx


const frontMatter = {
	title: 'Card',
	description: 'Ett card är en modulär komponent som används för att presentera innehåll på ett strukturerat och visuellt tilltalande sätt.'
};
const contentTitle = undefined;

const assets = {

};





const toc = [{
  "value": "Användningsområden",
  "id": "användningsområden",
  "level": 2
}, {
  "value": "Samlingar av objekt",
  "id": "samlingar-av-objekt",
  "level": 3
}, {
  "value": "Dataöversikter och dashboards",
  "id": "dataöversikter-och-dashboards",
  "level": 3
}, {
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "Kort med handlingar",
  "id": "kort-med-handlingar",
  "level": 3
}, {
  "value": "Kort med bild",
  "id": "kort-med-bild",
  "level": 3
}, {
  "value": "Kort med meny",
  "id": "kort-med-meny",
  "level": 3
}, {
  "value": "Länkkort",
  "id": "länkkort",
  "level": 3
}, {
  "value": "Primär handling",
  "id": "primär-handling",
  "level": 3
}, {
  "value": "Horisontell layout",
  "id": "horisontell-layout",
  "level": 3
}, {
  "value": "Implementation",
  "id": "implementation",
  "level": 2
}, {
  "value": "Client Side Routing",
  "id": "client-side-routing",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* .ComponentHeader */.B, {
      name: 'Card',
      friendlyName: 'Kort',
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponent som samlar logiskt relaterad information om ett ämne i en visuellt distinkt och avgränsad enhet. Ett kort består alltid av minst två olika typer av innehåll: en rubrik och därutöver något mer, till exempel en bild, en text, metadata eller en knapp. Syftet är vanligtvis att ge en kortfattad representation av ett ämne och leda användaren vidare till mer detaljerad information."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Card, CardHeader, CardBody, Text } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Card>\n  <CardHeader heading='Sven Svensson' />\n  <CardBody>\n    <Text>Sven är en designer på Migrationsverket</Text>\n  </CardBody>\n</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(BasicExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "användningsområden",
      children: "Användningsområden"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kort passar särskilt bra i följande två situationer:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Samlingar av objekt, till exempel artiklar, produkter, personer eller inlägg"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dataöversikter och dashboards"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "samlingar-av-objekt",
      children: "Samlingar av objekt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Om du vill visa en samling objekt av samma typ med återkommande innehållsdelar bör du i första hand överväga en lista, särskilt om det är viktigt att användaren ska kunna jämföra objekten. Är objekten mer heterogena eller innehåller bilder, kan kort vara ett lämpligt val."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["När kort används bör de struktureras i en ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/grid",
        children: "grid-layout"
      }), " som gör det enkelt för användaren att läsa av samlingen. Det underlättas av att korten placeras i raka kolumner och rader. En utmaning med grid-layouter är varierad höjd på korten. Är variationen liten kan du fylla ut med whitespace så att korten får samma höjd och innehållet linjerar. Är variationen stor kan det behövas en maxhöjd i kombination med trunkering av texter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dataöversikter-och-dashboards",
      children: "Dataöversikter och dashboards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["I en dataöversikt eller en dashboard kan kort användas för att dela upp och presentera olika datamängder i separata, lättöverskådliga enheter. Varje kort representerar ett avgränsat informationsområde, vilket gör det enkelt för användaren att snabbt få en överblick och identifiera det som är relevant.\nKort i dashboards behöver inte ha samma storlek. Anpassa storleken efter innehållet, till exempel kan ett nyckeltal rymmas i ett litet kort medan ett diagram eller en tabell kan kräva mer utrymme. Använd ett ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/grid",
        children: "grid-layout"
      }), " för att skapa ordning och struktur."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kort-med-handlingar",
      children: "Kort med handlingar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "<CardActions>"
      }), " används för att gruppera kortets primära handlingar. Om kortet har många möjliga handlingar lägger vi de två eller tre mest relevanta handlingarna på kortet och övriga i en ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/card/#kort-med-meny",
        children: "Meny"
      }), ". För att säkerställa att användare som använder hjälpmedel t.ex. skärmläsare ska få en tydlig förståelse för kortets handlingar är det lämpligt att inkludera kortets rubrik i handlingens aria-label."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Card>\n  <CardHeader heading='Inköpslista' />\n  <CardBody>\n    <Text>\n      <ul>\n        <li>3 bananer</li>\n        <li>2 meloner</li>\n        <li>4 kiwi</li>\n        <li>2 citroner</li>\n      </ul>\n    </Text>\n  </CardBody>\n  <CardActions>\n    <Button\n      variant='secondary'\n      aria-label='Redigera inköpslista'\n      icon={Pen}\n    >\n      Redigera\n    </Button>\n    <Button\n      variant='tertiary'\n      aria-label='Ta bort inköpslista'\n      icon={Trash2}\n    >\n      Ta bort\n    </Button>\n  </CardActions>\n</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(ActionExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kort-med-bild",
      children: "Kort med bild"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<CardImage>"
      }), " för att visa en bild på kortet. Om bilden är den tydligaste identifieraren kan den placeras först, annars placeras rubriken alltid överst och bilden direkt under."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Card>\n  <CardImage\n    src={imgSrc}\n    alt='Illustration av en ung man'\n  />\n  <CardHeader heading='Sven Svensson' />\n  <CardBody>\n    <Text>Sven är en designer på Migrationsverket</Text>\n  </CardBody>\n</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(ImageExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kort-med-meny",
      children: "Kort med meny"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om kortet rymmer många handlingar kan de sekundära handlingarna placeras i en meny. För att skapa en meny i ett kort används ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/menu",
        children: "Menu"
      }), " i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<CardHeader>"
      }), " med en ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/button",
        children: "Button"
      }), " med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "variant='icon'"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "size='medium'"
      }), ", med ikonen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<EllipsisVertical>"
      }), " som trigger."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Card>\n  <CardHeader\n    heading='Sven Svensson'\n    subHeading='Designer på Migrationsverket'\n  >\n    <MenuTrigger>\n      <Button\n        aria-label='Menu'\n        variant='icon'\n        size='medium'\n      >\n        <EllipsisVertical size={20} />\n      </Button>\n      <MenuPopover>\n        <Menu>\n          <MenuItem id='spara'>Spara kontaktuppgifter</MenuItem>\n          <MenuItem id='epost'>Skicka mejl</MenuItem>\n        </Menu>\n      </MenuPopover>\n    </MenuTrigger>\n  </CardHeader>\n  <CardImage src={imgSrc} />\n  <CardBody>\n    <Text>Prata med Sven om du har frågor om design tokens</Text>\n  </CardBody>\n  <CardActions>\n    <Button\n      variant='secondary'\n      aria-label='Boka möte med Sven Svensson'\n      icon={Phone}\n    >\n      Boka möte\n    </Button>\n  </CardActions>\n</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(MenuExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "länkkort",
      children: "Länkkort"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["I de flesta fall räcker texten på ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/link",
        children: "Link"
      }), " eller ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/link-button",
        children: "Link button"
      }), " för att beskriva var länken leder och vad de kan förvänta sig när de trycker på den. Men i de fall där användaren behöver mer information om var länken leder kan ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<CardLink>"
      }), " användas för att göra hela kortet till en länk."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Card>\n  <CardContent>\n    <CardLink href='#'>\n      <CardTitle>Min sida</CardTitle>\n    </CardLink>\n    <Text>På min sida kan du ändra dina uppgifter och se status på dina ansökningar</Text>\n  </CardContent>\n</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(LinkExample, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "CardLink"
      }), " stöder även egenskapen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "as"
      }), " för att ersätta grundkomponenten med länken från ditt ramverk, för client-side routing. Se ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/client-side-routing",
        children: "Routing på klientnivå"
      }), " för mer information."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Link as ReactRouterLink } from 'react-router'\n\n<Card>\n  <CardContent>\n    <CardLink as={ReactRouterLink} to='/min-sida'>\n      <CardTitle>Min sida</CardTitle>\n    </CardLink>\n    <Text>På min sida kan du ändra dina uppgifter och se status på dina ansökningar</Text>\n  </CardContent>\n</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primär-handling",
      children: "Primär handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Sedan version 17.14 fasar vi ut primär handling och ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CardActionArea"
        }), ", vänligen använd ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CardActions"
        }), " istället."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ett kort kan även ha en primär handling med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<CardActionArea>"
      }), " som är den mest relevanta åtgärden för kortet. Denna gör att hela ytan blir klickbar. En ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<CardActionArea>"
      }), " bör alltid innehålla en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<CardTitle>"
      }), " för att ge en beskrivning av vad kortet innebär för skärmläsare."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Card>\n  <CardActionArea onPress={() => alert('Clicked!')}>\n    <CardContent>\n      <CardTitle>Dina uppgifter</CardTitle>\n      <Text>Namn: Namn Namnsson</Text>\n      <CardActions>\n        <Button\n          variant='icon'\n          icon={Pen}\n        >\n          Ändra\n        </Button>\n        <Button\n          variant='icon'\n          icon={X}\n        >\n          Avbryt\n        </Button>\n      </CardActions>\n    </CardContent>\n  </CardActionArea>\n</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(ActionAreaExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "horisontell-layout",
      children: "Horisontell layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Sedan version 17.14 fasar vi ut horisontella kort, vänligen gå över till ett vertikalt orienterat kort."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Card stödjer även horisontell layout för att visa korten som en avlång rad. Detta kan vara användbart för att visa flera kort ovanpå varandra, som en lista med mycket detaljer och information. Använder du underkomponenterna för Card kommer dessa att justeras automatiskt när Card sätts i horisontellt läge."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Card\n  //highlight-start\n  horizontal\n  //highlight-end\n>\n  <CardContent>\n    <CardTitle>Dina uppgifter</CardTitle>\n    <Text>Namn: Namn Namnsson</Text>\n    <CardActions>\n      <Button\n        variant='icon'\n        icon={Pen}\n      >\n        Redigera\n      </Button>\n    </CardActions>\n  </CardContent>\n</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(HorizontalExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kortet byggs upp av flera underkomponenter."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Komponent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Beskrivning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<CardHeader>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plats för rubrik och eventuell underrubrik. Måste alltid finnas på kortet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<CardBody>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrapper för kortets huvudsakliga innehåll."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<CardActions>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skapar en yta för kortets handlingar."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<CardImage>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Används för att visa en bild på kortet."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<CardLink>"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Läggs runt ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<CardTitle>"
            }), " för att skapa en länk."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "client-side-routing",
      children: "Client Side Routing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Läs mer om hur du kan använda komponenten med ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/client-side-routing",
        children: "Client Side Routing"
      }), "."]
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
66881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"menu":"menu_V22E","menuSection":"menuSection_CHG7","medium":"medium_Ooqg","menuItem":"menuItem_xt3h","mainContent":"mainContent_GA8r","checkMark":"checkMark_KYFR","separator":"separator_YUxq","menuPopover":"menuPopover_c4Km dropdownAnimation_MaN2"});

},
90232(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (ArrowLeft)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
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
const ArrowLeft = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("arrow-left", __iconNode);


//# sourceMappingURL=arrow-left.js.map


},
48635(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (ArrowRight)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
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
const ArrowRight = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("arrow-right", __iconNode);


//# sourceMappingURL=arrow-right.js.map


},
42350(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (BookText)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
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
const BookText = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("book-text", __iconNode);


//# sourceMappingURL=book-text.js.map


},
45773(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (Check)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("check", __iconNode);


//# sourceMappingURL=check.js.map


},
87677(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (ChevronRight)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("chevron-right", __iconNode);


//# sourceMappingURL=chevron-right.js.map


},
3213(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (EllipsisVertical)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
];
const EllipsisVertical = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("ellipsis-vertical", __iconNode);


//# sourceMappingURL=ellipsis-vertical.js.map


},
8866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (SquareArrowOutUpRight)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
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
const SquareArrowOutUpRight = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("square-arrow-out-up-right", __iconNode);


//# sourceMappingURL=square-arrow-out-up-right.js.map


},
32708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (Trash2)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("trash-2", __iconNode);


//# sourceMappingURL=trash-2.js.map


},
48697(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (X)
});
/* import */ var _createLucideIcon_js__rspack_import_0 = __webpack_require__(83573);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = (0,_createLucideIcon_js__rspack_import_0/* ["default"] */.A)("x", __iconNode);


//# sourceMappingURL=x.js.map


},
82737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  B: () => (ComponentHeader)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _midas_ds_components__rspack_import_3 = __webpack_require__(25879);
/* import */ var _midas_ds_components__rspack_import_4 = __webpack_require__(80782);
/* import */ var _midas_ds_components__rspack_import_5 = __webpack_require__(35900);
/* import */ var lucide_react__rspack_import_6 = __webpack_require__(42350);
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
32262(__unused_rspack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZB: () => (/* binding */ CardTitle),
  hB: () => (/* binding */ CardLink),
  s$: () => (/* binding */ CardActionArea),
  w: () => (/* binding */ CardActions),
  Wu: () => (/* binding */ CardContent),
  Zp: () => (/* binding */ Card),
  MH: () => (/* binding */ CardImage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(18496);
;// CONCATENATED MODULE: ./packages/components/src/card/Card.module.css
// extracted by css-extract-rspack-plugin
/* export default */ const Card_module = ({"card":"card_Ssoo","horizontal":"horizontal_p4Mn","cardLink":"cardLink_gsBo","cardContent":"cardContent_JE5V","cardActions":"cardActions_HxzH","deprecated":"deprecated_Ibjw","cardActionArea":"cardActionArea_re2y","cardImage":"cardImage_BIZa","cardLinkIcon":"cardLinkIcon_av9l"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(72201);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Button.mjs
var Button = __webpack_require__(93426);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Link.mjs + 1 modules
var Link = __webpack_require__(10068);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
;// CONCATENATED MODULE: ./packages/components/src/card/Card.tsx







const CardContext = /*#__PURE__*/ react.createContext({
    horizontal: undefined,
    titleId: undefined
});
const CardContentContext = /*#__PURE__*/ react.createContext(undefined);
const Card = (param)=>{
    let { horizontal, className, children, ...rest } = param;
    const id = react.useId();
    const titleId = `card-title-${id}`;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContext.Provider, {
        value: {
            horizontal,
            titleId
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            ...rest,
            className: (0,clsx/* ["default"] */.A)(Card_module.card, horizontal && Card_module.horizontal, className),
            children: children
        })
    });
};
const CardContent = (param)=>{
    let { children, ...rest } = param;
    const { horizontal } = react.useContext(CardContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContentContext.Provider, {
        value: {},
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            ...rest,
            className: (0,clsx/* ["default"] */.A)(Card_module.cardContent, horizontal && Card_module.horizontal),
            children: children
        })
    });
};
const CardTitle = (param)=>{
    let { elementType = 'h2', children, className, ...rest } = param;
    const { horizontal, titleId } = react.useContext(CardContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* .Heading */.D, {
        level: 3,
        elementType: elementType,
        className: (0,clsx/* ["default"] */.A)(className, Card_module.cardTitle, horizontal && Card_module.horizontal),
        id: titleId,
        ...rest,
        children: children
    });
};
const CardActions = (param)=>{
    let { children, ...rest } = param;
    const { horizontal } = react.useContext(CardContext);
    const isDeprecatedUsage = !!react.useContext(CardContentContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ...rest,
        className: (0,clsx/* ["default"] */.A)(Card_module.cardActions, horizontal && Card_module.horizontal, isDeprecatedUsage && Card_module.deprecated),
        children: children
    });
};
/**
 *
 * @deprecated since v17.14.0 please use `CardActions` instead
 */ const CardActionArea = (param)=>{
    let { children, className, ...rest } = param;
    const { titleId } = react.useContext(CardContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* .Button */.$, {
        ...rest,
        "aria-labelledby": titleId,
        className: (0,clsx/* ["default"] */.A)(Card_module.cardActionArea, className),
        children: children
    });
};
const CardImage = (param)=>{
    let { as: ImageComponent = 'img', className, ...rest } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageComponent, {
        ...rest,
        "data-card-image": true,
        className: (0,clsx/* ["default"] */.A)(Card_module.cardImage, className)
    });
};
const CardLink = (param)=>{
    let { children, as, ...rest } = param;
    const Component = as || Link/* .Link */.N;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Component, {
        ...rest,
        className: (0,clsx/* ["default"] */.A)(Card_module.cardLink, rest.className),
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_right/* ["default"] */.A, {
                className: Card_module.cardLinkIcon,
                size: 24
            })
        ]
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
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
var square_arrow_out_up_right = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.js
var arrow_left = __webpack_require__(90232);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
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
22505(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  W: () => (Menu)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react_aria_components__rspack_import_2 = __webpack_require__(21233);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(18496);
/* import */ var _Menu_module_css__rspack_import_1 = __webpack_require__(66881);





const Menu = (param)=>{
    let { className, size = 'large', ...rest } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_2/* .Menu */.W1, {
        className: (0,_utils_clsx__rspack_import_3/* ["default"] */.A)(className, _Menu_module_css__rspack_import_1/* ["default"].menu */.A.menu, size === 'medium' && _Menu_module_css__rspack_import_1/* ["default"].medium */.A.medium),
        ...rest
    });
};


},
69048(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  D: () => (MenuItem)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(18496);
/* import */ var react_aria_components__rspack_import_2 = __webpack_require__(21233);
/* import */ var lucide_react__rspack_import_4 = __webpack_require__(45773);
/* import */ var lucide_react__rspack_import_5 = __webpack_require__(87677);
/* import */ var _Menu_module_css__rspack_import_1 = __webpack_require__(66881);





const MenuItem = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_2/* .MenuItem */.Dr, {
        ...props,
        textValue: props.textValue || (typeof props.children === 'string' ? props.children : undefined),
        className: (0,_utils_clsx__rspack_import_3/* ["default"] */.A)(_Menu_module_css__rspack_import_1/* ["default"].menuItem */.A.menuItem, props.className),
        children: (renderProps)=>{
            const { children } = props;
            const { selectionMode, isSelected, hasSubmenu } = renderProps;
            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                children: [
                    selectionMode !== 'none' && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_4/* ["default"] */.A, {
                        size: 16,
                        className: _Menu_module_css__rspack_import_1/* ["default"].checkMark */.A.checkMark,
                        "data-selected": isSelected || undefined
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: _Menu_module_css__rspack_import_1/* ["default"].mainContent */.A.mainContent,
                        children: typeof children === 'function' ? children(renderProps) : children
                    }),
                    hasSubmenu && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_5/* ["default"] */.A, {
                        size: 20
                    })
                ]
            });
        }
    });


},
44838(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  b: () => (MenuPopover)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _utils_clsx__rspack_import_3 = __webpack_require__(18496);
/* import */ var react_aria_components__rspack_import_2 = __webpack_require__(30900);
/* import */ var _Menu_module_css__rspack_import_1 = __webpack_require__(66881);




const MenuPopover = (param)=>{
    let { className, ...rest } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_aria_components__rspack_import_2/* .Popover */.A, {
        className: (0,_utils_clsx__rspack_import_3/* ["default"] */.A)(className, _Menu_module_css__rspack_import_1/* ["default"].menuPopover */.A.menuPopover),
        offset: 4,
        ...rest
    });
};


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
10068(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ $984a1fc08f87e4f3$export$e2509388b49734e7),
  N: () => (/* binding */ $984a1fc08f87e4f3$export$a6c7ac8248d6e38a)
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
var usePress = __webpack_require__(59437);
;// CONCATENATED MODULE: ./node_modules/react-aria/dist/private/link/useLink.mjs






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
    let { focusableProps: focusableProps } = (0, useFocusable/* .useFocusable */.Wc)(props, ref);
    let { pressProps: pressProps, isPressed: isPressed } = (0, usePress/* .usePress */.d)({
        onPress: onPress,
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        onPressChange: onPressChange,
        onClick: onClick,
        isDisabled: isDisabled,
        ref: ref
    });
    let domProps = (0, filterDOMProps/* .filterDOMProps */.$)(otherProps, {
        labelable: true
    });
    let interactionHandlers = (0, mergeProps/* .mergeProps */.v)(focusableProps, pressProps);
    let router = (0, openLink/* .useRouter */.rd)();
    let routerLinkProps = (0, openLink/* .useLinkProps */._h)(props);
    return {
        isPressed: isPressed,
        linkProps: (0, mergeProps/* .mergeProps */.v)(domProps, routerLinkProps, {
            ...interactionHandlers,
            ...linkProps,
            'aria-disabled': isDisabled || undefined,
            'aria-current': props['aria-current'],
            onClick: (e)=>{
                pressProps.onClick?.(e);
                (0, openLink/* .handleLinkClick */.PJ)(e, router, props.href, props.routerOptions);
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
;// CONCATENATED MODULE: ./node_modules/react-aria-components/dist/private/Link.mjs








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
    [props, ref] = (0, utils/* .useContextProps */.JT)(props, ref, $984a1fc08f87e4f3$export$e2509388b49734e7);
    let elementType = props.href && !props.isDisabled ? 'a' : 'span';
    let { linkProps: linkProps, isPressed: isPressed } = (0, $40d752843fab8930$export$dcf14c9974fe2767)({
        ...props,
        elementType: elementType
    }, ref);
    let ElementType = (0, utils/* .dom */.tT)[elementType];
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* .useHover */.M)(props);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* .useFocusRing */.o)();
    let renderProps = (0, utils/* .useRenderProps */.Sl)({
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
    let DOMProps = (0, filterDOMProps/* .filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, react).createElement(ElementType, {
        ref: ref,
        slot: props.slot || undefined,
        ...(0, mergeProps/* .mergeProps */.v)(DOMProps, renderProps, linkProps, hoverProps, focusProps),
        "data-focused": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-pressed": isPressed || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-current": !!props['aria-current'] || undefined,
        "data-disabled": props.isDisabled || undefined
    }, renderProps.children);
});



//# sourceMappingURL=Link.mjs.map


},

}]);