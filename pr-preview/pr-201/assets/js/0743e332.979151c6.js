"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[396],{

/***/ 8094:
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
const site_docs_components_button_mdx_074_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/button","title":"Button","description":"Knappar används när användaren vill utföra en handling t.ex. spara ifylld information eller öppna ett formulär.","source":"@site/docs/components/button.mdx","sourceDirName":"components","slug":"/components/button","permalink":"/pr-preview/pr-201/components/button","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Button","description":"Knappar används när användaren vill utföra en handling t.ex. spara ifylld information eller öppna ett formulär.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(11470);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(19365);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 1 modules
var propsTable = __webpack_require__(4928);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var src = __webpack_require__(63918);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 3 modules
var getComponentMetaData = __webpack_require__(32705);
// EXTERNAL MODULE: ./packages/flex/src/index.ts + 4 modules
var flex_src = __webpack_require__(93294);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(29511);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/plus.js
var plus = __webpack_require__(80697);
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
  "value": "Installation och användning",
  "id": "installation-och-användning",
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
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'Button',
      friendlyName: 'Knapp'
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Knappar används när användaren vill utföra en handling t.ex. spara ifylld information eller öppna ett formulär."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation-och-användning",
      children: "Installation och användning"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "npm2yarn",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "npm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/button\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/button\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/button\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Button } from '@midas-ds/button'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        ButtonGroup: src/* ButtonGroup */.e2,
        Button: src/* Button */.$n
      },
      children: `<ButtonGroup aria-label="Välj knapp">
  <Button>Primär</Button>
  <Button variant="secondary">Sekundär</Button>
  <Button variant='tertiary'>Tertiär</Button>
  <Button isDisabled>Disabled</Button>
</ButtonGroup>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primär",
      children: "Primär"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En primär knapp används för den primära eller positiva handlingen i ett flöde (OK, Skicka, Nästa). Det bör endast finnas en primärknapp per sida, sektion eller tydligt avgränsad yta."
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      hideCode: true,
      scope: {
        ButtonGroup: src/* ButtonGroup */.e2,
        Button: src/* Button */.$n
      },
      children: `<ButtonGroup aria-label="Välj knapp">
  <Button>Slutför</Button>
</ButtonGroup>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sekundär",
      children: "Sekundär"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En sekundär knapp används för underordnade handlingar i ett flöde (Avbryt, Tillbaka). Används alltid tillsammans med en primär knapp."
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      hideCode: true,
      scope: {
        ButtonGroup: src/* ButtonGroup */.e2,
        Button: src/* Button */.$n
      },
      children: `<ButtonGroup aria-label="Välj knapp">
  <Button>Slutför</Button>
  <Button variant={'secondary'}>Tillbaka</Button>
</ButtonGroup>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tertiär",
      children: "Tertiär"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Den tertiära knappen kan användas tillsammans med primär- och sekundär knapp där det finns behov av ett ytterligare val"
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      hideCode: true,
      scope: {
        ButtonGroup: src/* ButtonGroup */.e2,
        Button: src/* Button */.$n
      },
      children: `<ButtonGroup aria-label='Hantera anmälan'>
<Button>Slutför</Button>
<Button variant='secondary'>Tillbaka</Button>
<Button variant='tertiary'>Ta bort anmälan</Button>
</ButtonGroup>`
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om den tertiära knappen används fristående från andra knappar ska den ha en ikon. Ikonen läggs till via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "icon"
      }), ".\nDu kan välja vilken sida av texten ikonen ska vara på med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "iconPlacement"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Button: src/* Button */.$n,
        Plus: plus/* default */.A
      },
      children: `<Button
    icon={Plus}
    variant='tertiary'
    iconPlacement='left'
  >
    {'Lägg till rad'}
  </Button>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "grupp-av-knappar",
      children: "Grupp av knappar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att få korrekt layout på flertalet knappar kan komponenten ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ButtonGroup"
      }), " användas."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        ButtonGroup: src/* ButtonGroup */.e2,
        Button: src/* Button */.$n
      },
      children: `<ButtonGroup aria-label="Välj frukt">
  <Button>{fruits.shuffled(1).name}</Button>
  <Button variant="secondary">{fruits.shuffled(1).name}</Button>
  <Button isDisabled>{fruits.shuffled(1).name}</Button>
</ButtonGroup>`
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
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      hideCode: true,
      scope: {
        ButtonGroup: src/* ButtonGroup */.e2,
        Button: src/* Button */.$n
      },
      children: `<ButtonGroup aria-label='Skicka formulär'>
<Button>Skicka</Button>
<Button variant='secondary'>Avbryt</Button>
</ButtonGroup>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "button",
      children: "Button"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Button"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buttongroup",
      children: "ButtonGroup"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
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