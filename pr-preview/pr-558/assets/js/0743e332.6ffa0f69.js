"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[396],{

/***/ 45361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_button_mdx_074_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-button-mdx-074.json
const site_docs_components_button_mdx_074_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/button","title":"Button","description":"Knappar används när användaren vill utföra en handling t.ex. spara ifylld information eller öppna ett formulär.","source":"@site/docs/components/button.mdx","sourceDirName":"components","slug":"/components/button","permalink":"/pr-preview/pr-558/components/button","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Button","description":"Knappar används när användaren vill utföra en handling t.ex. spara ifylld information eller öppna ett formulär.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 187 modules
var PropsTable = __webpack_require__(12761);
// EXTERNAL MODULE: ./packages/components/src/button/ButtonGroup.tsx + 1 modules
var ButtonGroup = __webpack_require__(94839);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(35518);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/plus.js
var plus = __webpack_require__(80697);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var dist_Button = __webpack_require__(65014);
;// ./apps/docs/docs/components/button.mdx


const frontMatter = {
	title: 'Button',
	description: 'Knappar används när användaren vill utföra en handling t.ex. spara ifylld information eller öppna ett formulär.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};










const toc = [{
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "Primär",
  "id": "primär",
  "level": 3
}, {
  "value": "Sekundär",
  "id": "sekundär",
  "level": 3
}, {
  "value": "Tertiär",
  "id": "tertiär",
  "level": 3
}, {
  "value": "Grupp av knappar",
  "id": "grupp-av-knappar",
  "level": 2
}, {
  "value": "Label",
  "id": "label",
  "level": 3
}, {
  "value": "Kontrollera flertalet knappar",
  "id": "kontrollera-flertalet-knappar",
  "level": 3
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "Val av komponent",
  "id": "val-av-komponent",
  "level": 3
}, {
  "value": "Generella riktlinjer",
  "id": "generella-riktlinjer",
  "level": 3
}, {
  "value": "Placering och ordning",
  "id": "placering-och-ordning",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Button",
  "id": "button",
  "level": 3
}, {
  "value": "ButtonGroup",
  "id": "buttongroup",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  if (!dist_Button/* ButtonContext */.k) _missingMdxReference("ButtonContext", false);
  if (!dist_Button/* ButtonContext */.k.Provider) _missingMdxReference("ButtonContext.Provider", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: "Button",
      friendlyName: "Knapp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponent som används för att låta användaren utföra en handling t.ex. spara ifylld information eller öppna ett formulär."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ButtonGroup aria-label='Välj knapp'>\n  <Button>Primary</Button>\n  <Button variant='secondary'>Secondary</Button>\n  <Button variant='tertiary'>Tertiary</Button>\n  <Button isDisabled>Disabled</Button>\n</ButtonGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(ButtonGroup/* ButtonGroup */.e, {
        "aria-label": "Välj knapp",
        children: [(0,jsx_runtime.jsx)(Button/* Button */.$, {
          children: "Primary"
        }), (0,jsx_runtime.jsx)(Button/* Button */.$, {
          variant: "secondary",
          children: "Secondary"
        }), (0,jsx_runtime.jsx)(Button/* Button */.$, {
          variant: "tertiary",
          children: "Tertiary"
        }), (0,jsx_runtime.jsx)(Button/* Button */.$, {
          isDisabled: true,
          children: "Disabled"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "npm2yarn",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "npm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/components\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/components\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/components\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Button } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primär",
      children: "Primär"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En primär knapp används för den primära eller positiva handlingen i ett flöde (OK, Skicka, Nästa). Det bör endast finnas en primärknapp per sida, sektion eller tydligt avgränsad yta."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Button>Slutför</Button>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        display: 'block'
      },
      children: (0,jsx_runtime.jsx)(Button/* Button */.$, {
        children: "Slutför"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sekundär",
      children: "Sekundär"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En sekundär knapp används för underordnade handlingar i ett flöde (Avbryt, Tillbaka). Används alltid tillsammans med en primär knapp."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ButtonGroup aria-label='Välj knapp'>\n  <Button>Slutför</Button>\n  <Button variant='secondary'>Tillbaka</Button>\n</ButtonGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(ButtonGroup/* ButtonGroup */.e, {
        "aria-label": "Välj knapp",
        children: [(0,jsx_runtime.jsx)(Button/* Button */.$, {
          children: "Slutför"
        }), (0,jsx_runtime.jsx)(Button/* Button */.$, {
          variant: "secondary",
          children: "Tillbaka"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tertiär",
      children: "Tertiär"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Den tertiära knappen kan användas tillsammans med primär- och sekundär knapp där det finns behov av ett ytterligare val"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ButtonGroup aria-label='Hantera anmälan'>\n  <Button>Slutför</Button>\n  <Button variant='secondary'>Tillbaka</Button>\n  <Button variant='tertiary'>Ta bort anmälan</Button>\n</ButtonGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(ButtonGroup/* ButtonGroup */.e, {
        "aria-label": "Hantera anmälan",
        children: [(0,jsx_runtime.jsx)(Button/* Button */.$, {
          children: "Slutför"
        }), (0,jsx_runtime.jsx)(Button/* Button */.$, {
          variant: "secondary",
          children: "Tillbaka"
        }), (0,jsx_runtime.jsx)(Button/* Button */.$, {
          variant: "tertiary",
          children: "Ta bort anmälan"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om den tertiära knappen används fristående från andra knappar ska den ha en ikon. Ikonen läggs till via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "icon"
      }), ".\nDu kan välja vilken sida av texten ikonen ska vara på med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "iconPlacement"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Button\n  variant='tertiary'\n  // highlight-start\n  icon={Plus}\n  iconPlacement='left'\n  // highlight-end\n>\n  Lägg till rad\n</Button>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        display: 'block'
      },
      children: (0,jsx_runtime.jsx)(Button/* Button */.$, {
        icon: plus/* default */.A,
        variant: "tertiary",
        iconPlacement: "left",
        children: 'Lägg till rad'
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "grupp-av-knappar",
      children: "Grupp av knappar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att få korrekt layout på flertalet knappar kan komponenten ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ButtonGroup"
      }), " användas."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { ButtonGroup } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ButtonGroup aria-label='Välj en frukt'>\n  <Button>Pineapple</Button>\n  <Button variant='secondary'>Apple</Button>\n  <Button isDisabled>Orange</Button>\n</ButtonGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(ButtonGroup/* ButtonGroup */.e, {
        "aria-label": "Välj en frukt",
        children: [(0,jsx_runtime.jsx)(Button/* Button */.$, {
          children: "Pineapple"
        }), (0,jsx_runtime.jsx)(Button/* Button */.$, {
          variant: "secondary",
          children: "Apple"
        }), (0,jsx_runtime.jsx)(Button/* Button */.$, {
          isDisabled: true,
          children: "Orange"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "label",
      children: "Label"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För god tillgänglighet bör du sätta en aria-label på ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ButtonGroup"
      }), " för att beskriva vad knapparna gör."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "// highlight-start\n<ButtonGroup aria-label='Välj en frukt'>\n  // highlight-end\n  <Button>Pear</Button>\n  <Button variant='secondary'>Apple</Button>\n  <Button isDisabled>Grape</Button>\n</ButtonGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(ButtonGroup/* ButtonGroup */.e, {
        "aria-label": "Välj en frukt",
        children: [(0,jsx_runtime.jsx)(Button/* Button */.$, {
          children: "Pear"
        }), (0,jsx_runtime.jsx)(Button/* Button */.$, {
          variant: "secondary",
          children: "Apple"
        }), (0,jsx_runtime.jsx)(Button/* Button */.$, {
          isDisabled: true,
          children: "Grape"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kontrollera-flertalet-knappar",
      children: "Kontrollera flertalet knappar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att kontrollera flertalet knappar kan ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ButtonContext"
      }), " användas runtom flertalet knappar för att kontrollera attribut på samtliga knappar på ett ställe."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { ButtonContext } from 'react-aria-components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "// highlight-start\n<ButtonContext.Provider value={{ isDisabled: true }}>\n  // highlight-end\n  <ButtonGroup>\n    <Button>Grape</Button>\n    <Button variant='secondary'>Pear</Button>\n    <Button variant='tertiary'>Banana</Button>\n  </ButtonGroup>\n  // highlight-start\n</ButtonContext.Provider>\n// highlight-end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(dist_Button/* ButtonContext */.k.Provider, {
        value: {
          isDisabled: true
        },
        children: (0,jsx_runtime.jsxs)(ButtonGroup/* ButtonGroup */.e, {
          children: [(0,jsx_runtime.jsx)(Button/* Button */.$, {
            children: "Grape"
          }), (0,jsx_runtime.jsx)(Button/* Button */.$, {
            variant: "secondary",
            children: "Pear"
          }), (0,jsx_runtime.jsx)(Button/* Button */.$, {
            variant: "tertiary",
            children: "Banana"
          })]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "val-av-komponent",
      children: "Val av komponent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Se mönstret ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/design-patterns/buttons-and-links",
        children: "Knappar och länkar"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generella-riktlinjer",
      children: "Generella riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undvik inaktiva knappar. Alla knappar i externa system ska gå att interagera med. Om användaren inte uppfyllt kraven, t.ex för att gå till nästa sida i en e-tjänst, ska ett felmeddelande visas som påtalar vad som krävs för att kunna gå vidare."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undvik att ha för många knappar på samma sida."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "placering-och-ordning",
      children: "Placering och ordning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Knappar placeras i regel i nedre vänstra hörnet. Vi sätter alltid den primära knappen till vänster."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ButtonGroup aria-label='Skicka formulär'>\n  <Button>Skicka</Button>\n  <Button variant='secondary'>Avbryt</Button>\n</ButtonGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(ButtonGroup/* ButtonGroup */.e, {
        "aria-label": "Skicka formulär",
        children: [(0,jsx_runtime.jsx)(Button/* Button */.$, {
          children: "Skicka"
        }), (0,jsx_runtime.jsx)(Button/* Button */.$, {
          variant: "secondary",
          children: "Avbryt"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "button",
      children: "Button"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "Button"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buttongroup",
      children: "ButtonGroup"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "ButtonGroup",
      defaultOpen: false
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 94839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ ButtonGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/button/ButtonGroup.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ButtonGroup_module = ({"tokens":"\"../theme/tokens.css\"","--breakpoint-sm":"(max-width: 767px)","buttonGroup":"buttonGroup_mVqm"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/button/ButtonGroup.tsx
var _excluded=["children","className","aria-label"];/**
 * Group several buttons together.
 *
 * @interface React.HTMLAttributes<HTMLDivElement>
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */var ButtonGroup=function ButtonGroup(_ref){var children=_ref.children,className=_ref.className,ariaLabel=_ref['aria-label'],rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({role:"group","aria-label":ariaLabel,className:(0,clsx/* default */.A)(ButtonGroup_module.buttonGroup,className)},rest,{children:children}));};

/***/ }),

/***/ 80697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Plus)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Plus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);


//# sourceMappingURL=plus.js.map


/***/ })

}]);