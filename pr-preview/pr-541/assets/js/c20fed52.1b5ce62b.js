"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1680],{

/***/ 2441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_card_mdx_c20_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-card-mdx-c20.json
const site_docs_components_card_mdx_c20_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/card","title":"Card","description":"Ett card är en modulär komponent som används för att presentera innehåll på ett strukturerat och visuellt tilltalande sätt.","source":"@site/docs/components/card.mdx","sourceDirName":"components","slug":"/components/card","permalink":"/pr-preview/pr-541/components/card","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Card","description":"Ett card är en modulär komponent som används för att presentera innehåll på ett strukturerat och visuellt tilltalande sätt.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 187 modules
var propsTable = __webpack_require__(35926);
// EXTERNAL MODULE: ./packages/components/src/card/Card.tsx + 1 modules
var Card = __webpack_require__(26333);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(93361);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(35518);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(84722);
;// ./node_modules/lucide-react/dist/esm/icons/pen.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Pen = (0,createLucideIcon/* default */.A)("Pen", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
]);


//# sourceMappingURL=pen.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./apps/docs/src/components/examples/card/CardExamples.tsx
var BasicExample=function BasicExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* Card */.Zp,{style:{maxWidth:'320px'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Card/* CardContent */.Wu,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* CardTitle */.ZB,{children:"H\xE4r \xE4r en titel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{children:"H\xE4r \xE4r lite inneh\xE5ll"})]})})});};var ActionExample=function ActionExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* Card */.Zp,{style:{maxWidth:'320px'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Card/* CardContent */.Wu,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* CardTitle */.ZB,{children:"H\xE4r \xE4r en titel"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{children:"H\xE4r \xE4r lite inneh\xE5ll"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Card/* CardActions */.w,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",icon:Pen,children:"\xC4ndra"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",icon:x/* default */.A,children:"Avbryt"})]})]})})});};var ActionAreaExample=function ActionAreaExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Card/* Card */.Zp,{style:{maxWidth:'320px'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* CardActionArea */.s$,{onPress:function onPress(){return alert('Klickat på CardActionArea');},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Card/* CardContent */.Wu,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* CardTitle */.ZB,{children:"Dina uppgifter"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{children:"Namn: Namn Namnsson"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* CardContent */.Wu,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Card/* CardActions */.w,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",icon:Pen,children:"\xC4ndra"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",icon:x/* default */.A,children:"Avbryt"})]})})]})});};var LinkExample=function LinkExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* Card */.Zp,{style:{maxWidth:'320px'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Card/* CardContent */.Wu,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* CardLink */.hB,{href:"#",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* CardTitle */.ZB,{children:"Dina uppgifter"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{children:"H\xE4r \xE4r lite inneh\xE5ll"})]})})});};var ImageExample=function ImageExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Card/* Card */.Zp,{style:{maxWidth:'320px'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* CardImage */.MH,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg",alt:"Ananas"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Card/* CardContent */.Wu,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* CardLink */.hB,{href:"#",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* CardTitle */.ZB,{children:"Dina uppgifter"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{children:"Namn: Namn Namnsson"})]})]})});};var HorizontalExample=function HorizontalExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* Card */.Zp,{horizontal:true,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Card/* CardContent */.Wu,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* CardTitle */.ZB,{children:"Dina uppgifter"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{children:"Namn: Namn Namnsson"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* CardActions */.w,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",icon:Pen,children:"Redigera"})})]})})});};
;// ./apps/docs/docs/components/card.mdx


const frontMatter = {
	title: 'Card',
	description: 'Ett card är en modulär komponent som används för att presentera innehåll på ett strukturerat och visuellt tilltalande sätt.',
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
  "value": "Användning",
  "id": "användning",
  "level": 2
}, {
  "value": "Titel",
  "id": "titel",
  "level": 3
}, {
  "value": "Actions",
  "id": "actions",
  "level": 3
}, {
  "value": "Primär action",
  "id": "primär-action",
  "level": 3
}, {
  "value": "Länk",
  "id": "länk",
  "level": 3
}, {
  "value": "Media",
  "id": "media",
  "level": 3
}, {
  "value": "Horisontell layout",
  "id": "horisontell-layout",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
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
      name: 'Card',
      friendlyName: 'Kort',
      overrideHeadlessLink: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponent som är en yta med plats för information och åtgärder relaterat till ett specifikt ämne. Kort används primärt för att presentera innehåll på ett visuellt tilltalande sätt samt länka till innehållet."
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
        children: "import { Card } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Card>Kort</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Card/* Card */.Zp, {
        children: "Kort"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "användning",
      children: "Användning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kort börjar med en grundläggande komponent som endast definerar kortytan. Sedan finns flertalet underkomponenter som kan användas för att flexibelt bygga upp kortet med olika innehåll."
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
              children: "<CardContent>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Läggs runt content i ett kort."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<CardTitle>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidrar med konsekvent style för titel på kort."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<CardActions>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skapar en yta för knappar eller annat som användaren kan klicka på på kortet."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<CardImage>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Används för att visa media på kortet."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<CardActionArea>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gör hela kortytan klickbar."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Card, CardContent, CardTitle, Text } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Card>\n  <CardContent>\n    <CardTitle>Här är en titel</CardTitle>\n    <Text>Här är lite innehåll</Text>\n  </CardContent>\n</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(BasicExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "titel",
      children: "Titel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Titeln har alltid samma storlek rent grafiskt och är som standard en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<h2>"
      }), " men för korrekt semantik kan den ändras med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "elementType"
      }), ". I exemplet nedan har titeln samma grafiska utseende som innan men beroende på vart kortet används kan semantiken behöva justeras."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Card>\n  <CardContent>\n    <CardTitle\n      // highlight-start\n      elementType='h3'\n      // highlight-end\n    >\n      Här är en titel\n    </CardTitle>\n    <Text>Här är lite innehåll</Text>\n  </CardContent>\n</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "actions",
      children: "Actions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "<CardActions>"
      }), " används för att gruppera knappar eller andra interaktiva element i kortet. Det är viktigt att tänka på att inte överbelasta kortet med för många knappar, utan istället fokusera på de mest relevanta åtgärderna."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Card, CardContent, CardActions, CardTitle, Button, Text } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Card>\n  <CardContent>\n    <CardTitle>Här är en titel</CardTitle>\n    <Text>Här är lite innehåll</Text>\n    <CardActions>\n      <Button\n        variant='icon'\n        icon={Pen}\n      >\n        Ändra\n      </Button>\n      <Button\n        variant='icon'\n        icon={X}\n      >\n        Avbryt\n      </Button>\n    </CardActions>\n  </CardContent>\n</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(ActionExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primär-action",
      children: "Primär action"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ett kort kan även ha en primär action med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<CardActionArea>"
      }), " som är den mest relevanta åtgärden för kortet. Denna gör att hela ytan blir klickbar. En ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<CardActionArea>"
      }), " bör alltid innehålla en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<CardTitle>"
      }), " för att ge en beskrivning av vad kortet innebär för skärmläsare."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Card, CardTitle, Text, CardActions, Button, CardActionArea } from '@midas-ds/components'\nimport { Pen, X } from 'lucide-react'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Card>\n  <CardActionArea onPress={() => alert('Clicked!')}>\n    <CardContent>\n      <CardTitle>Dina uppgifter</CardTitle>\n      <Text>Namn: Namn Namnsson</Text>\n      <CardActions>\n        <Button\n          variant='icon'\n          icon={Pen}\n        >\n          Ändra\n        </Button>\n        <Button\n          variant='icon'\n          icon={X}\n        >\n          Avbryt\n        </Button>\n      </CardActions>\n    </CardContent>\n  </CardActionArea>\n</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(ActionAreaExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "länk",
      children: "Länk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Det går även bra att kombinera standalone Link med card för att få en hel klickbar yta om kortet ska länka till något snarare än att göra något på sidan."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Card, CardTitle, Text, CardActions, Link } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Card>\n  <CardContent>\n    <CardLink>\n      <CardTitle>Här är en titel</CardTitle>\n    </CardLink>\n    <Text>Här är lite innehåll</Text>\n  </CardContent>\n</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(LinkExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "media",
      children: "Media"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "<CardImage>"
      }), " används för att visa bilder på kortet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Card, CardImage, CardContent, CardTitle, Text } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Card>\n  <CardImage\n    src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg'\n    alt='Ananas'\n  />\n  <CardContent>\n    <CardLink href='#'>\n      <CardTitle>Dina uppgifter</CardTitle>\n    </CardLink>\n    <Text>Namn: Namn Namnsson</Text>\n  </CardContent>\n</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(ImageExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "horisontell-layout",
      children: "Horisontell layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Card stödjer även horisontell layout för att visa korten som en avlång rad. Detta kan vara användbart för att visa flera kort ovanpå varandra, som en lista med mycket detaljer och information. Använder du underkomponenterna för Card kommer dessa att justeras automatiskt när Card sätts i horisontellt läge."
    }), "\n", (0,jsx_runtime.jsx)(HorizontalExample, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Card\n  //highlight-start\n  horizontal\n  //highlight-end\n>\n  <CardContent>\n    <CardTitle>Dina uppgifter</CardTitle>\n    <Text>Namn: Namn Namnsson</Text>\n    <CardActions>\n      <Button\n        variant='icon'\n        icon={Pen}\n      >\n        Redigera\n      </Button>\n    </CardActions>\n  </CardContent>\n</Card>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Card"
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

/***/ 26333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Zp: () => (/* binding */ Card),
  s$: () => (/* binding */ CardActionArea),
  w: () => (/* binding */ CardActions),
  Wu: () => (/* binding */ CardContent),
  MH: () => (/* binding */ CardImage),
  hB: () => (/* binding */ CardLink),
  ZB: () => (/* binding */ CardTitle)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/card/Card.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Card_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--background":"light-dark(#ffffff, #171717)","--border-primary":"light-dark(#171717, #f2f2f2)","--layer-01":"light-dark(#f2f2f2, #262626)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--border-secondary":"light-dark(#737373, #8c8c8c)","--support-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--support-border-success":"light-dark(#008d3c, #008d3c)","--support-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--support-border-warning":"light-dark(#e62323, #e62323)","--button-background-icon-hover":"light-dark(rgba(0 0 0 / 10%), rgba(255 255 255 / 10%))","--button-background-icon-active":"light-dark(rgba(0 0 0 / 20%), rgba(255 255 255 / 20%))","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--z-index-base":"1","--icon-primary":"light-dark(#171717, #f2f2f2)","card":"card_Ssoo","horizontal":"horizontal_p4Mn","cardLink":"cardLink_gsBo","cardContent":"cardContent_JE5V","cardActions":"cardActions_HxzH","cardActionArea":"cardActionArea_re2y","cardImage":"cardImage_BIZa","cardLinkIcon":"cardLinkIcon_av9l"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 2 modules
var Heading = __webpack_require__(71098);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var Link = __webpack_require__(73099);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/card/Card.tsx
var _excluded=["horizontal","className","children"],_excluded2=["children"],_excluded3=["children"],_excluded4=["children","className"],_excluded5=["as","className"],_excluded6=["children","as"];var CardContext=/*#__PURE__*/react.createContext({horizontal:undefined,titleId:undefined});var Card=function Card(_ref){var horizontal=_ref.horizontal,className=_ref.className,children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var id=react.useId();var titleId="card-title-"+id;return/*#__PURE__*/(0,jsx_runtime.jsx)(CardContext.Provider,{value:{horizontal:horizontal,titleId:titleId},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},rest,{className:(0,clsx/* default */.A)(Card_module.card,horizontal&&Card_module.horizontal,className),children:children}))});};var CardContent=function CardContent(_ref2){var children=_ref2.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);var _React$useContext=react.useContext(CardContext),horizontal=_React$useContext.horizontal;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},rest,{className:(0,clsx/* default */.A)(Card_module.cardContent,horizontal&&Card_module.horizontal),children:children}));};var CardTitle=function CardTitle(_ref3){var _ref3$elementType=_ref3.elementType,elementType=_ref3$elementType===void 0?'h2':_ref3$elementType,children=_ref3.children;var _React$useContext2=react.useContext(CardContext),horizontal=_React$useContext2.horizontal,titleId=_React$useContext2.titleId;return/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{level:horizontal?5:3,elementType:elementType,isExpressive:horizontal,className:(0,clsx/* default */.A)(Card_module.cardTitle,horizontal&&Card_module.horizontal),id:titleId,children:children});};var CardActions=function CardActions(_ref4){var children=_ref4.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref4,_excluded3);var _React$useContext3=react.useContext(CardContext),horizontal=_React$useContext3.horizontal;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},rest,{className:(0,clsx/* default */.A)(Card_module.cardActions,horizontal&&Card_module.horizontal),children:children}));};var CardActionArea=function CardActionArea(_ref5){var children=_ref5.children,className=_ref5.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref5,_excluded4);var _React$useContext4=react.useContext(CardContext),titleId=_React$useContext4.titleId;return/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,Object.assign({},rest,{"aria-labelledby":titleId,className:(0,clsx/* default */.A)(Card_module.cardActionArea,className),children:children}));};var CardImage=function CardImage(_ref6){var _ref6$as=_ref6.as,ImageComponent=_ref6$as===void 0?'img':_ref6$as,className=_ref6.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref6,_excluded5);return/*#__PURE__*/(0,jsx_runtime.jsx)(ImageComponent,Object.assign({},rest,{className:(0,clsx/* default */.A)(Card_module.cardImage,className)}));};var CardLink=function CardLink(_ref7){var children=_ref7.children,as=_ref7.as,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref7,_excluded6);var Component=as||Link/* Link */.N;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,Object.assign({},rest,{className:(0,clsx/* default */.A)(Card_module.cardLink,rest.className),children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_right/* default */.A,{className:Card_module.cardLinkIcon,size:24})]}));};

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
/* harmony default export */ const Text_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--font-size-20":"0.875rem","--font-size-30":"1rem","--line-height-20":"1.125rem","--line-height-30":"1.25rem","--line-height-40":"1.375rem","--line-height-50":"1.5rem","--text-disabled":"light-dark(#bfbfbf, #525252)","body-01":"body-01_whJM","body-02":"body-02_Xi1v","description":"description_XYgX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","variant","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'body-02':_ref$variant,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames={'body-01':Text_module['body-01'],'body-02':Text_module['body-02']};var textProps=Object.assign({className:(0,clsx/* default */.A)(rest.slot==='description'?Text_module.description:classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

/***/ }),

/***/ 48635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ArrowRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);


//# sourceMappingURL=arrow-right.js.map


/***/ }),

/***/ 48697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);


//# sourceMappingURL=x.js.map


/***/ })

}]);