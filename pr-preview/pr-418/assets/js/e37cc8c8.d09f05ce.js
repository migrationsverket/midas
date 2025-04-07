"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[9065],{

/***/ 29289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Token: () => (/* binding */ Token),
  TokenGroup: () => (/* binding */ TokenGroup),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_basics_tokens_mdx_e37_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-basics-tokens-mdx-e37.json
const site_docs_basics_tokens_mdx_e37_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"basics/tokens","title":"Färger och tokens","description":"Här kan du läsa om hur vi använder färger i Midas. Vi har definierat ett antal paletter som används i designsystemets komponenter.","source":"@site/docs/basics/tokens.mdx","sourceDirName":"basics","slug":"/basics/tokens","permalink":"/pr-preview/pr-418/basics/tokens","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"tokens","title":"Färger och tokens","sidebar_label":"Färger","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/components/src/flex/Flex.tsx
var Flex = __webpack_require__(39996);
// EXTERNAL MODULE: ./packages/components/src/flex/FlexItem.tsx
var FlexItem = __webpack_require__(52981);
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(55402);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(93361);
// EXTERNAL MODULE: ./packages/components/src/theme/tokens.ts
var tokens = __webpack_require__(66995);
;// ./apps/docs/docs/basics/tokens.mdx


const frontMatter = {
	id: 'tokens',
	title: 'Färger och tokens',
	sidebar_label: 'Färger',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};





const TokenGroup = ({title, children}) => {
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Flex/* Flex */.s, {
      fluid: true,
      children: (0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z, {
        col: 12,
        children: (0,jsx_runtime.jsx)(Heading/* Heading */.D, {
          level: 3,
          children: title
        })
      })
    }), (0,jsx_runtime.jsx)(Flex/* Flex */.s, {
      fluid: true,
      className: "docs-card",
      children: children
    })]
  });
};
const Token = ({token, desc}) => {
  const tokenValue = tokens.semantic[token];
  if (tokenValue === undefined) {
    console.warn(`Token ${token} not found in semantic tokens`);
    return null;
  }
  return (0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z, {
    col: 12,
    style: {
      borderBottom: '1px solid var(--ifm-color-emphasis-200)',
      paddingBottom: '1rem'
    },
    children: (0,jsx_runtime.jsxs)(Flex/* Flex */.s, {
      fluid: true,
      children: [(0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z, {
        col: 3,
        children: (0,jsx_runtime.jsx)("small", {
          style: {
            wordBreak: 'break-all'
          },
          children: token
        })
      }), (0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z, {
        col: 3,
        children: (0,jsx_runtime.jsx)("small", {
          children: desc
        })
      }), (0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z, {
        col: 6,
        style: {
          alignItems: 'flex-end'
        },
        children: (0,jsx_runtime.jsxs)("div", {
          style: {
            display: 'flex',
            flexDirection: 'row',
            gap: '0.5rem'
          },
          children: [(0,jsx_runtime.jsxs)("div", {
            style: {
              display: 'flex',
              flexDirection: 'column'
            },
            children: [(0,jsx_runtime.jsxs)("small", {
              children: ["Ljust: #", tokenValue.match(/light-dark\(#(.*?),/)[1]]
            }), (0,jsx_runtime.jsxs)("small", {
              children: ["Mörkt: #", tokenValue.match(/light-dark\(.*?, #(.*?)\)/)[1]]
            })]
          }), (0,jsx_runtime.jsx)("div", {
            style: {
              colorScheme: 'light',
              backgroundColor: tokenValue,
              width: 60,
              height: 60,
              border: '1px solid var(--ifm-color-emphasis-100)'
            }
          }), (0,jsx_runtime.jsx)("div", {
            style: {
              colorScheme: 'dark',
              backgroundColor: tokenValue,
              width: 60,
              height: 60,
              border: '1px solid var(--ifm-color-emphasis-100)'
            }
          })]
        })
      })]
    })
  });
};
const toc = [{
  "value": "Referenser och semantiska tokens",
  "id": "referenser-och-semantiska-tokens",
  "level": 2
}, {
  "value": "Referenstokens",
  "id": "referenstokens",
  "level": 3
}, {
  "value": "Semantiska tokens",
  "id": "semantiska-tokens",
  "level": 3
}, {
  "value": "Lager",
  "id": "lager",
  "level": 2
}, {
  "value": "Namngivning",
  "id": "namngivning",
  "level": 2
}, {
  "value": "Tokenslista",
  "id": "tokenslista",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Här kan du läsa om hur vi använder färger i Midas. Vi har definierat ett antal paletter som används i designsystemets komponenter."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        display: 'flex',
        flexFlow: 'row wrap',
        marginBottom: '2rem'
      },
      children: Object.entries(tokens.baseColors).filter(([key]) => key.startsWith('gray') || key.startsWith('blue') || key.startsWith('signal')).reduce((acc, [key, value], index, array) => {
        const prefix = key.split(/(?=[A-Z0-9])/)[0];
        const lastPrefix = index > 0 ? array[index - 1][0].split(/(?=[A-Z0-9])/)[0] : null;
        if (prefix !== lastPrefix) {
          acc.push((0,jsx_runtime.jsx)("div", {
            style: {
              flexBasis: '100%'
            }
          }, `break-${index}`));
        }
        acc.push((0,jsx_runtime.jsx)("div", {
          style: {
            backgroundColor: value,
            width: 60,
            height: 60
          }
        }, key));
        return acc;
      }, [])
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { semantic } from '@midas-ds/components/theme'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "referenser-och-semantiska-tokens",
      children: "Referenser och semantiska tokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Våra färgtokens är uppdelade i två grupper: referenstokens och semantiska tokens."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "referenstokens",
      children: "Referenstokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Referenstokens är direkt kopplade till färgvärden och används för att bygga upp våra paletter. Varje palett har 20 steg, från 10 (ljusast) till 200 (mörkast). Referenstokens används endast som byggstenar och ska inte användas direkt i koden. Där används istället semantiska tokens."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "semantiska-tokens",
      children: "Semantiska tokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Semantiska tokens är kopplade till referenstokens och är döpta för att beskriva var de bör användas. Varje semantisk token har två referenstokens kopplade till sig, en för ljust och en för mörk läge. Nedan ser vi ett enkelt exempel med bakgrund och text med en semantisk token men olika färger i ljust respektive mörkt läge."
    }), "\n", (0,jsx_runtime.jsxs)(Flex/* Flex */.s, {
      className: "docs-card",
      children: [(0,jsx_runtime.jsxs)(FlexItem/* FlexItem */.Z, {
        col: 12,
        children: [(0,jsx_runtime.jsx)(Text/* Text */.E, {
          children: "Bakgrund: semantic.layer01"
        }), (0,jsx_runtime.jsx)(Text/* Text */.E, {
          children: "Text: semantic.textPrimary"
        })]
      }), (0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z, {
        col: 6,
        style: {
          backgroundColor: tokens.semantic.layer01,
          colorScheme: 'light',
          padding: '1rem'
        },
        children: (0,jsx_runtime.jsx)(Text/* Text */.E, {
          children: "Ljust läge"
        })
      }), (0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z, {
        col: 6,
        style: {
          backgroundColor: tokens.semantic.layer01,
          colorScheme: 'dark',
          padding: '1rem'
        },
        children: (0,jsx_runtime.jsx)(Text/* Text */.E, {
          children: "Mörkt läge"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lager",
      children: "Lager"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Färgerna är strukturerade i lager. Detta gör det lättare att förstå hur de ska användas. Varje lager representerar en nivå av information eller innehåll. Det första lagret är det mest grundläggande och används för bakgrunder, medan de högre lagren används för text och andra element.\nDet finns två lager: layer01 och layer02. Dessa lager används för att skapa djup och hierarki i designen. De används också för att separera olika delar av gränssnittet."
    }), "\n", (0,jsx_runtime.jsxs)(Flex/* Flex */.s, {
      fluid: true,
      className: "docs-card",
      children: [(0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z, {
        col: 6,
        style: {
          colorScheme: 'light',
          border: '1px solid var(--ifm-color-emphasis-200)'
        },
        children: (0,jsx_runtime.jsxs)("div", {
          style: {
            backgroundColor: tokens.semantic.background,
            padding: '1rem'
          },
          children: [(0,jsx_runtime.jsx)(Text/* Text */.E, {
            children: "background"
          }), (0,jsx_runtime.jsxs)("div", {
            style: {
              backgroundColor: tokens.semantic.layer01,
              padding: '1rem',
              margin: '1rem 0'
            },
            children: [(0,jsx_runtime.jsx)(Text/* Text */.E, {
              children: "layer01"
            }), (0,jsx_runtime.jsx)("div", {
              style: {
                backgroundColor: tokens.semantic.layer02,
                padding: '1rem',
                margin: '1rem 0'
              },
              children: (0,jsx_runtime.jsx)(Text/* Text */.E, {
                children: "layer02"
              })
            })]
          })]
        })
      }), (0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z, {
        col: 6,
        style: {
          colorScheme: 'dark'
        },
        children: (0,jsx_runtime.jsxs)("div", {
          style: {
            backgroundColor: tokens.semantic.background,
            padding: '1rem'
          },
          children: [(0,jsx_runtime.jsx)(Text/* Text */.E, {
            children: "background"
          }), (0,jsx_runtime.jsxs)("div", {
            style: {
              backgroundColor: tokens.semantic.layer01,
              padding: '1rem',
              margin: '1rem 0'
            },
            children: [(0,jsx_runtime.jsx)(Text/* Text */.E, {
              children: "layer01"
            }), (0,jsx_runtime.jsx)("div", {
              style: {
                backgroundColor: tokens.semantic.layer02,
                padding: '1rem',
                margin: '1rem 0'
              },
              children: (0,jsx_runtime.jsx)(Text/* Text */.E, {
                children: "layer02"
              })
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Båda lagren har även accentfärger som används för att markera viktiga element eller interaktioner. Dessa accentfärger är också namngivna med prefixet \"layer\" följt av \"Accent\" och en siffra som anger vilket lager de tillhör. Till exempel ", (0,jsx_runtime.jsx)(_components.code, {
        children: "layerAccent02"
      }), " används för att markera viktiga element på det andra lagret."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "namngivning",
      children: "Namngivning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tokens är namngivna med en prefix som anger deras syfte. Prefixet kan vara \"layer\", \"text\", \"border\" eller \"shadow\". Detta gör det lättare att förstå hur och var de ska användas."
    }), "\n", (0,jsx_runtime.jsx)(Flex/* Flex */.s, {
      className: "docs-card",
      children: "Här ska till en bild som förklarar hur tokens bygger upp t.ex ett inputfield"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tokenslista",
      children: "Tokenslista"
    }), "\n", (0,jsx_runtime.jsxs)(TokenGroup, {
      title: "Background",
      children: [(0,jsx_runtime.jsx)(Token, {
        token: "background",
        desc: "Standardbakgrund för våra applikationer"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "backgroundHover",
        desc: "Hoverfärg för bakgrund"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "backgroundInverse",
        desc: "Bakgrund eller element i med hög kontrast"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(TokenGroup, {
      title: "Layer",
      children: [(0,jsx_runtime.jsx)(Token, {
        token: "layer01",
        desc: "Yta som används på background. Sekundär bakgrundsfärg"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "layerHover01",
        desc: "Hover state för layer01"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "layerSelected01",
        desc: "Selected state för layer01"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "layerSelectedHover01",
        desc: "Hover state för layerSelected01"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "layer02",
        desc: "Yta som ligger på layer01"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "layerHover02",
        desc: "Hover state för layer02"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "layerSelected02",
        desc: "Selected state för layer02"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "layerSelectedHover02",
        desc: "Hover state för layerSelected02"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(TokenGroup, {
      title: "Layer accent",
      children: [(0,jsx_runtime.jsx)(Token, {
        token: "layerAccent01",
        desc: "Accentfärg som används tillsammans med layer01"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "layerAccentHover01",
        desc: "Hover state för layerAccent01"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "layerAccentSelected01",
        desc: "Selected state för layerAccent01"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "layerAccent02",
        desc: "Accentfärg som används tillsammans med layer02"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "layerAccentHover02",
        desc: "Hover state för layerAccent02"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "layerAccentSelected02",
        desc: "Selected state för layerAccent02"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(TokenGroup, {
      title: "Varumärke",
      children: [(0,jsx_runtime.jsx)(Token, {
        token: "brandPrimary",
        desc: "Primära röda färgen"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "logoPrimary",
        desc: "Färg på logotypen"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(TokenGroup, {
      title: "Border",
      children: [(0,jsx_runtime.jsx)(Token, {
        token: "borderStrong",
        desc: "Kantlinje med hög kontrast, används med field01"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "borderMedium",
        desc: "Kantlinje med medelög kontrast"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "borderSubtle",
        desc: "Kantlinje med låg kontrast"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "borderBrand",
        desc: "Primärblå kantlinje"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "borderInvalid",
        desc: "Kantlinje för invalid state"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "borderDisabled",
        desc: "Kantlinke för disabled state"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(TokenGroup, {
      title: "Field",
      children: [(0,jsx_runtime.jsx)(Token, {
        token: "field01",
        desc: "Standardfärg för fält, som ligger på background"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "fieldHover01",
        desc: "Hover state för field01"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "fieldActive01",
        desc: "Active state för field01"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "field02",
        desc: "Sekundfärfärg för fält, som ligger på layer01"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "fieldHover02",
        desc: "Hover state för field02"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "fieldActive02",
        desc: "Active state för field02"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "fieldDisabled",
        desc: "Disabled state för fält"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "fieldSkeleton",
        desc: "Skeleton state för fält"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(TokenGroup, {
      title: "Icon",
      children: [(0,jsx_runtime.jsx)(Token, {
        token: "iconPrimary",
        desc: "Primär ikonfärg"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "iconSecondary",
        desc: "Sekundär ikonfärg"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "iconInverse",
        desc: "Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "iconOnColor",
        desc: "Ikonfärg på färgade ytor som inte är lager"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "iconDisabled",
        desc: "Ikoner som är disabled"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "iconSuccess",
        desc: "Ikonfär för success state"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "iconInfo",
        desc: "Ikonfärg för informationsikoner"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "iconImportant",
        desc: "Ikonfärg för viktig information"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "iconWarning",
        desc: "Ikonfärg för varningsikoner och invalid state"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(TokenGroup, {
      title: "Link",
      children: [(0,jsx_runtime.jsx)(Token, {
        token: "linkEnabled",
        desc: "Primärlänkfärg"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "linkHover",
        desc: "Hover state för länkar"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "linkPressed",
        desc: "Active/pressed state för länkar"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "linkVisited",
        desc: "Färg för besökta länkar"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(TokenGroup, {
      title: "Notifikationer",
      children: [(0,jsx_runtime.jsx)(Token, {
        token: "notificationBorderSuccess",
        desc: "Kantlinje för success-notifikationer"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "notificationBorderInfo",
        desc: "Kantlinje för notifikationer med information"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "notificationBorderImportant",
        desc: "Kantlinje för notifikationer med viktig information"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "notificationBorderWarning",
        desc: "Kantlinje för notifikationer med varningar"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "notificationBackgroundSuccess",
        desc: "Bakgrund för success-notifikationer"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "notificationBackgroundInfo",
        desc: "Bakgrund för notifikationer med information"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "notificationBackgroundImportant",
        desc: "Bakgrund för notifikationer med viktig information"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "notificationBackgroundWarning",
        desc: "Bakgrund för notifikationer med varningar"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(TokenGroup, {
      title: "Text",
      children: [(0,jsx_runtime.jsx)(Token, {
        token: "textPrimary",
        desc: "Primär textfärg. Rubriker och brödtext."
      }), (0,jsx_runtime.jsx)(Token, {
        token: "textSecondary",
        desc: "Sekundär textfärg"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "textTertiary",
        desc: "Textfärg på tertiär knapp"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "textOnColor",
        desc: "Textfärg på färgade bakgrunder som inte är lager"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "textInverse",
        desc: "Inverterad textfärg"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "textDisabled",
        desc: "Textfärg för disabled state"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "textInvalid",
        desc: "Textfärg för felmeddelanden"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "textPlaceholder",
        desc: "Textfärg för platshållare"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(TokenGroup, {
      title: "Button",
      children: [(0,jsx_runtime.jsx)(Token, {
        token: "buttonBackgroundPrimary",
        desc: "Färg på primärknapp"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "buttonBackgroundPrimaryHover",
        desc: "Hover state på primärknapp"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "buttonBackgroundPrimaryActive",
        desc: "Active state för primärknapp"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "buttonBackgroundSecondary",
        desc: "Färg på sekundärknapp"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "buttonBackgroundSecondaryHover",
        desc: "Hover state på sekundärknapp"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "buttonBackgroundSecondaryActive",
        desc: "Active state för sekundärknapp"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "buttonBackgroundTertiaryHover",
        desc: "Hover state för tertiär knapp"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "buttonBackgroundTertiaryActive",
        desc: "Active state för tertiär knapp"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "buttonBackgroundDanger",
        desc: "Färg på danger knapp"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "buttonBackgroundDangerHover",
        desc: "Hover state för danger knapp"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "buttonBackgroundDangerActive",
        desc: "Active state för danger knapp"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "buttonBackgroundDisabled",
        desc: "Disabled state för knappar"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "buttonBackgroundSkeleton",
        desc: "Skeleton state för knappar"
      }), (0,jsx_runtime.jsx)(Token, {
        token: "buttonBorderSecondary",
        desc: "Kantfärg för sekundärknapp"
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



/***/ }),

/***/ 55402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ Heading)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Heading.mjs
var dist_Heading = __webpack_require__(57936);
;// ./packages/components/src/heading/Heading.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Heading_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--size-03":"1rem","--size-04":"1.125rem","--size-05":"1.25rem","--size-06":"1.5rem","--size-07":"1.75rem","--size-09":"2.25rem","--line-height-04":"1.375rem","--line-height-05":"1.5rem","--line-height-06":"1.75rem","--line-height-07":"2rem","--line-height-08":"2.25rem","--line-height-09":"2.5rem","--line-height-10":"2.75rem","h1":"h1_fQIH","h2":"h2_fBmz","h3":"h3_xOF5","h4":"h4_AF6p","h5":"h5_slY8","h6":"h6_loS0"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/heading/Heading.tsx
var _excluded=["children","className","isExpressive","level","elementType"];var Heading=function Heading(_ref){var children=_ref.children,className=_ref.className,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$level=_ref.level,level=_ref$level===void 0?3:_ref$level,elementType=_ref.elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var semanticLevel=elementType&&parseInt(elementType.split('h')[1]);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Heading/* Heading */.D,Object.assign({level:semanticLevel||level,className:(0,clsx/* default */.A)([Heading_module.h1,Heading_module.h2,Heading_module.h3,Heading_module.h4,Heading_module.h5,Heading_module.h6][level-1],className)},isExpressive&&{'data-expressive':true},rest,{children:children}));};

/***/ }),

/***/ 93361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var dist_Text = __webpack_require__(27279);
;// ./packages/components/src/text/Text.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Text_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--size-02":"0.875rem","--size-03":"1rem","--line-height-02":"1.125rem","--line-height-03":"1.25rem","--line-height-04":"1.375rem","--line-height-05":"1.5rem","--text-disabled":"light-dark(#bfbfbf, #525252)","body-01":"body-01_whJM","body-02":"body-02_Xi1v","description":"description_XYgX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","variant","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'body-02':_ref$variant,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames={'body-01':Text_module['body-01'],'body-02':Text_module['body-02']};var textProps=Object.assign({className:(0,clsx/* default */.A)(rest.slot==='description'?Text_module.description:classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

/***/ }),

/***/ 66995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baseColors: () => (/* binding */ baseColors),
/* harmony export */   breakpoints: () => (/* binding */ breakpoints),
/* harmony export */   semantic: () => (/* binding */ semantic),
/* harmony export */   spacing: () => (/* binding */ spacing),
/* harmony export */   states: () => (/* binding */ states),
/* harmony export */   transitions: () => (/* binding */ transitions),
/* harmony export */   typography: () => (/* binding */ typography),
/* harmony export */   zIndex: () => (/* binding */ zIndex)
/* harmony export */ });
var baseColors={black:'#000000',white:'#ffffff',blackHover:'#0d0d0d',whiteHover:'#e6e6e6',gray10:'#f2f2f2',gray20:'#e6e6e6',gray30:'#d9d9d9',gray40:'#cccccc',gray50:'#bfbfbf',gray60:'#b3b3b3',gray70:'#a6a6a6',gray80:'#999999',gray90:'#8c8c8c',gray100:'#808080',gray110:'#737373',gray120:'#666666',gray130:'#5d5d5d',gray140:'#525252',gray150:'#474747',gray160:'#383838',gray170:'#333333',gray180:'#262626',gray190:'#212121',gray200:'#171717',blue10:'#eaf2f6',blue20:'#d5e5ed',blue40:'#abcbdb',blue60:'#82b0c9',blue80:'#5897b8',blue90:'#4289ad',blue100:'#2e7ca5',blue140:'#25607f',blue170:'#143c50',purple80:'#b46ab4',purple140:'#954b95',red100:'#b90835',signalBlue20:'#eaf2f6',signalBlue140:'#0066cc',signalGreen20:'#d5f2d9',signalGreen140:'#008d3c',signalRed20:'#ffdfdf',signalRed140:'#e62323',signalRed160:'#b31b1b',signalRed180:'#801313',signalYellow20:'#fff8e1',signalYellow140:'#fdb813'};var typography={fontFamily:'"Inter", sans-serif',lineHeight01:1,// 16px
lineHeight02:1.125,// 18px (18/16)
lineHeight03:1.25,// 20px (20/16)
lineHeight04:1.375,// 22px (22/16)
lineHeight05:1.5,// 24px (24/16)
lineHeight06:1.75,// 28px (28/16)
lineHeight07:2,// 32px (32/16)
lineHeight08:2.25,// 36px (36/16)
lineHeight09:2.5,// 40px (40/16)
size01:'0.75rem',// 12px (12/16)
size02:'0.875rem',// 14px (14/16)
size03:'1rem',// 16px (16/16)
size04:'1.125rem',// 18px (18/16)
size05:'1.25rem',// 20px (20/16)
size06:'1.5rem',// 24px (24/16)
size07:'1.75rem',// 28px (28/16)
size08:'2rem',// 32px (32/16)
size09:'2.25rem',// 36px (36/16)
size10:'2.625rem',// 42px (40/16)
weightThin:100,weightExtraLight:200,weightLight:300,weightRegular:400,weightMedium:500,weightSemiBold:600,weightBold:700,weightExtraBold:800,weightBlack:900};var spacing={'01':'0.125rem',// 2px
'02':'0.25rem',// 4px
'03':'0.5rem',// 8px
'04':'0.75rem',// 12px
'05':'1rem',// 16px
'06':'1.5rem',// 24px
'07':'2rem',// 32px
'08':'2.5rem',// 40px
'09':'3rem',// 48px
'10':'4rem',// 64px
'11':'5rem',// 80px
'12':'6rem'// 96px
};var states={focus:'0 0 0 2px white, 0 0 0 4px black'};var transitions={slow:'500ms',normal:'300ms',fast:'250ms'};var breakpoints={sm:'(max-width: 767px)',md:'(min-width: 768px)',lg:'(min-width: 1200px)',xl:'(min-width: 1440px)',forcedColorsMode:'(forced-colors: active)',darkMode:'(prefers-color-scheme: dark)',prefersReducedMotion:'(prefers-reduced-motion: reduced)'};var semantic={background:"light-dark("+baseColors.white+", "+baseColors.gray200+")",backgroundHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",backgroundInverse:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",layer01:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",layerHover01:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",layerSelected01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",layerSelectedHover01:"light-dark("+baseColors.gray40+", "+baseColors.gray150+")",layer02:"light-dark("+baseColors.white+", "+baseColors.gray160+")",layerHover02:"light-dark("+baseColors.whiteHover+", "+baseColors.gray150+")",layerSelected02:"light-dark("+baseColors.gray30+", "+baseColors.gray140+")",layerSelectedHover02:"light-dark("+baseColors.gray40+", "+baseColors.gray130+")",layerAccent01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",layerAccentHover01:"light-dark("+baseColors.gray40+", "+baseColors.gray150+")",layerAccentSelected01:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",layerAccent02:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",layerAccentHover02:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",layerAccentSelected02:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",brandPrimary:"light-dark("+baseColors.red100+", "+baseColors.red100+")",borderStrong:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",borderMedium:"light-dark("+baseColors.gray110+", "+baseColors.gray90+")",borderSubtle:"light-dark("+baseColors.gray50+", "+baseColors.gray160+")",borderBrand:"light-dark("+baseColors.blue170+", "+baseColors.blue170+")",borderInvalid:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",borderDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",field01:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",fieldHover01:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",fieldActive01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",field02:"light-dark("+baseColors.white+", "+baseColors.gray160+")",fieldHover02:"light-dark("+baseColors.whiteHover+", "+baseColors.gray150+")",fieldActive02:"light-dark("+baseColors.gray30+", "+baseColors.gray140+")",fieldDisabled:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",fieldSkeleton:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",iconPrimary:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",iconSecondary:"light-dark("+baseColors.blue170+", "+baseColors.gray10+")",iconInverse:"light-dark("+baseColors.white+", "+baseColors.gray200+")",iconOnColor:"light-dark("+baseColors.white+", "+baseColors.white+")",iconDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",iconSuccess:"light-dark("+baseColors.signalGreen140+", "+baseColors.signalGreen140+")",iconInfo:"light-dark("+baseColors.signalBlue140+", "+baseColors.signalBlue140+")",iconWarning:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",iconImportant:"light-dark("+baseColors.signalYellow140+", "+baseColors.signalYellow140+")",linkEnabled:"light-dark("+baseColors.blue100+", "+baseColors.blue90+")",linkHover:"light-dark("+baseColors.blue170+", "+baseColors.blue80+")",linkPressed:"light-dark("+baseColors.gray200+", "+baseColors.blue60+")",linkVisited:"light-dark("+baseColors.purple140+", "+baseColors.purple80+")",notificationBorderSuccess:"light-dark("+baseColors.signalGreen140+", "+baseColors.signalGreen140+")",notificationBorderInfo:"light-dark("+baseColors.signalBlue140+", "+baseColors.signalBlue140+")",notificationBorderImportant:"light-dark("+baseColors.signalYellow140+", "+baseColors.signalYellow140+")",notificationBorderWarning:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",notificationBackgroundSuccess:"light-dark("+baseColors.signalGreen20+", "+baseColors.gray180+")",notificationBackgroundInfo:"light-dark("+baseColors.signalBlue20+", "+baseColors.gray180+")",notificationBackgroundImportant:"light-dark("+baseColors.signalYellow20+", "+baseColors.gray180+")",notificationBackgroundWarning:"light-dark("+baseColors.signalRed20+", "+baseColors.gray180+")",textPrimary:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",textSecondary:"light-dark("+baseColors.gray140+", "+baseColors.gray70+")",textTertiary:"light-dark("+baseColors.blue170+", "+baseColors.gray10+")",textOnColor:"light-dark("+baseColors.white+", "+baseColors.white+")",textInverse:"light-dark("+baseColors.gray10+", "+baseColors.gray200+")",textDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",textInvalid:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",textPlaceholder:"light-dark("+baseColors.gray70+", "+baseColors.gray140+")",buttonBackgroundPrimary:"light-dark("+baseColors.blue170+", "+baseColors.blue100+")",buttonBackgroundPrimaryHover:"light-dark("+baseColors.blue140+", "+baseColors.blue140+")",buttonBackgroundPrimaryActive:"light-dark("+baseColors.blue100+", "+baseColors.blue170+")",buttonBackgroundSecondary:"light-dark("+baseColors.white+", "+baseColors.gray200+")",buttonBackgroundSecondaryHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",buttonBackgroundSecondaryActive:"light-dark("+baseColors.gray30+", "+baseColors.gray180+")",buttonBackgroundTertiaryHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",buttonBackgroundTertiaryActive:"light-dark("+baseColors.gray30+", "+baseColors.gray180+")",buttonBackgroundDanger:"light-dark("+baseColors.signalRed140+", "+baseColors.signalRed140+")",buttonBackgroundDangerHover:"light-dark("+baseColors.signalRed160+", "+baseColors.signalRed160+")",buttonBackgroundDangerActive:"light-dark("+baseColors.signalRed180+", "+baseColors.signalRed180+")",buttonBackgroundDisabled:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",buttonBackgroundSkeleton:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",buttonBorderSecondary:"light-dark("+baseColors.blue170+", "+baseColors.gray10+")",logoPrimary:"light-dark("+baseColors.red100+", "+baseColors.white+")"};var zIndex={base:1,above:10,modal:1000,toast:1100,skipToContent:1200};

/***/ }),

/***/ 27279:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $514c0188e459b4c0$export$5f1af8db9871e1d6),
/* harmony export */   h: () => (/* binding */ $514c0188e459b4c0$export$9afb8bc826b033ea)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5933);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



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

const $514c0188e459b4c0$export$9afb8bc826b033ea = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $514c0188e459b4c0$export$5f1af8db9871e1d6 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Text(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, $514c0188e459b4c0$export$9afb8bc826b033ea);
    let { elementType: ElementType = 'span', ...domProps } = props;
    // @ts-ignore
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement(ElementType, {
        className: "react-aria-Text",
        ...domProps,
        ref: ref
    });
});



//# sourceMappingURL=Text.module.js.map


/***/ })

}]);