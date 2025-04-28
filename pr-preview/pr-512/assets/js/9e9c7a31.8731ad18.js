"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2169],{

/***/ 88300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_accordion_mdx_9e9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-accordion-mdx-9e9.json
const site_docs_components_accordion_mdx_9e9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/accordion","title":"Accordion","description":"Dragspelskomponenten låter användare visa och dölja delar av relaterat innehåll på en sida.","source":"@site/docs/components/accordion.mdx","sourceDirName":"components","slug":"/components/accordion","permalink":"/pr-preview/pr-512/components/accordion","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Accordion","sidebar_position":1,"description":"Dragspelskomponenten låter användare visa och dölja delar av relaterat innehåll på en sida.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx
var Accordion = __webpack_require__(3348);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx
var AccordionItem = __webpack_require__(57389);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./apps/docs/src/components/examples/accordion/AccordionExamples.tsx
var AccordionExample=function AccordionExample(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:'card',children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Accordion/* Accordion */.n,Object.assign({},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,Object.assign({},props,{id:'mandarin',title:'Mandarin',children:"Liten orange citrusfrukt"})),/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:'sharon',title:'Sharon',children:"Persikoliknande frukt med fast k\xF6tt"}),/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:'watermelon',title:'Vattenmelon',children:"Stor frukt med r\xF6tt, saftigt k\xF6tt"})]}))});};var AccordionExampleControlled=function AccordionExampleControlled(props){var _React$useState=react.useState(new Set(['mandarin'])),expandedKeys=_React$useState[0],setExpandedKeys=_React$useState[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:'card',style:{display:'flex',flexDirection:'column',gap:'2rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Accordion/* Accordion */.n,Object.assign({},props,{expandedKeys:expandedKeys,onExpandedChange:setExpandedKeys,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,Object.assign({},props,{id:'mandarin',title:'Mandarin',children:"Liten orange citrusfrukt"})),/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:'sharon',title:'Sharon',children:"Persikoliknande frukt med fast k\xF6tt"}),/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:'watermelon',title:'Vattenmelon',children:"Stor frukt med r\xF6tt, saftigt k\xF6tt"})]})),/*#__PURE__*/(0,jsx_runtime.jsxs)("pre",{children:["F\xF6ljande AccordionItems \xE4r \xF6ppna: ",Array.from(expandedKeys).join(', ')]})]});};
;// ./apps/docs/docs/components/accordion.mdx


const frontMatter = {
	title: 'Accordion',
	sidebar_position: 1,
	description: 'Dragspelskomponenten låter användare visa och dölja delar av relaterat innehåll på en sida.',
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
  "value": "Beskrivning",
  "id": "beskrivning",
  "level": 2
}, {
  "value": "Egenskaper",
  "id": "egenskaper",
  "level": 2
}, {
  "value": "Contained",
  "id": "contained",
  "level": 3
}, {
  "value": "Status",
  "id": "status",
  "level": 3
}, {
  "value": "Multiple",
  "id": "multiple",
  "level": 3
}, {
  "value": "Uncontrolled expanded",
  "id": "uncontrolled-expanded",
  "level": 3
}, {
  "value": "Controlled expanded",
  "id": "controlled-expanded",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Accordion",
  "id": "accordion",
  "level": 3
}, {
  "value": "AccordionItem",
  "id": "accordionitem",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'Accordion',
      friendlyName: 'Dragspel',
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/DisclosureGroup.html"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Utfällbar komponent som används för att minska informationsmängden som direkt presenteras för användaren."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Accordion>\n  <AccordionItem\n    id={'mandarin'}\n    title={'Mandarin'}\n  >\n    Liten orange citrusfrukt\n  </AccordionItem>\n  <AccordionItem\n    id={'sharon'}\n    title={'Sharon'}\n  >\n    Persikoliknande frukt med fast kött\n  </AccordionItem>\n  <AccordionItem\n    id={'watermelon'}\n    title={'Vattenmelon'}\n  >\n    Stor frukt med rött, saftigt kött\n  </AccordionItem>\n</Accordion>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: 'card',
      children: (0,jsx_runtime.jsxs)(Accordion/* Accordion */.n, {
        children: [(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
          id: 'mandarin',
          title: 'Mandarin',
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Liten orange citrusfrukt"
          })
        }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
          id: 'sharon',
          title: 'Sharon',
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Persikoliknande frukt med fast kött"
          })
        }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
          id: 'watermelon',
          title: 'Vattenmelon',
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Stor frukt med rött, saftigt kött"
          })
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
        children: "import { Accordion, AccordionItem } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "beskrivning",
      children: "Beskrivning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Accordion"
      }), " bygger på React Arias ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/DisclosureGroup.html",
        children: "DisclosureGroup"
      }), "\nmedan ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AccordionItem"
      }), " är motsvarande ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/Disclosure.html",
        children: "Disclosure"
      }), ". Se\ndokumentation för respektive komponent för fler detaljer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "egenskaper",
      children: "Egenskaper"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Accordion har flertalet varianter och egenskaper."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "contained",
      children: "Contained"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En tydligare variant av layouten när det finns en tydlig gräns mellan varje sektion."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Accordion variant={'contained'}>\n  {/* more items */}\n  <AccordionItem\n    id={'mandarin'}\n    title={'Mandarin'}\n  >\n    Liten orange citrusfrukt\n  </AccordionItem>\n</Accordion>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Accordion/* Accordion */.n, {
      variant: 'contained',
      children: [(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: 'mandarin',
        title: 'Mandarin',
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Liten orange citrusfrukt"
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: 'sharon',
        title: 'Sharon',
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Persikoliknande frukt med fast kött"
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: 'watermelon',
        title: 'Vattenmelon',
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Stor frukt med rött, saftigt kött"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "status",
      children: "Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AccordionItems kan ha en status för att förtydliga för användaren att hen antingen är klar med det steget eller påkalla uppmärksamhet till att det t.ex finns fler åtgärder att utföra."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{6,13}",
        children: "<Accordion variant='contained'>\n  {/* more items */}\n  <AccordionItem\n    id='mandarin'\n    title='Mandarin'\n    type='success'\n  >\n    Liten orange citrusfrukt\n  </AccordionItem>\n  <AccordionItem\n    id='sharon'\n    title='Sharon'\n    type='warning'\n  >\n    Persikoliknande frukt med fast kött\n  </AccordionItem>\n</Accordion>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Accordion/* Accordion */.n, {
      variant: "contained",
      children: [(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "mandarin",
        title: "Mandarin",
        type: "success",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Liten orange citrusfrukt"
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "sharon",
        title: "Sharon",
        type: "warning",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Persikoliknande frukt med fast kött"
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "watermelon",
        title: "Vattenmelon",
        type: "default",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Stor frukt med rött, saftigt kött"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multiple",
      children: "Multiple"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En accordion har som standard bara en öppet samtidigt och stänger automatiskt andra sektioner när en ny öppnas.\nDetta kan ändras genom att sätta prop ", (0,jsx_runtime.jsx)(_components.code, {
        children: "allowsMultipleExpanded"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Accordion allowsMultipleExpanded>\n  <AccordionItem>...</AccordionItem>\n</Accordion>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(AccordionExample, {
      allowsMultipleExpanded: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uncontrolled-expanded",
      children: "Uncontrolled expanded"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En Accordion kan ha en eller flera sektioner öppna som förvalt värde. Detta görs genom att sätta ", (0,jsx_runtime.jsx)(_components.code, {
        children: "defaultExpandedKeys"
      }), "\npå ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Accordion"
      }), ". Värdena i defaultExpandedKeys måste matcha ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), " på de AccordionItem som du vill expandera."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Accordion defaultExpandedKeys={['sharon']}>\n  <AccordionItem\n    id={'mandarin'}\n    title={'Mandarin'}\n  >\n    Liten orange citrusfrukt\n  </AccordionItem>\n  <AccordionItem\n    id={'sharon'}\n    title={'Sharon'}\n  >\n    Persikoliknande frukt med fast kött\n  </AccordionItem>\n  <AccordionItem\n    id={'watermelon'}\n    title={'Vattenmelon'}\n  >\n    Stor frukt med rött, saftigt kött\n  </AccordionItem>\n</Accordion>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(AccordionExample, {
      defaultExpandedKeys: ['sharon']
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "controlled-expanded",
      children: "Controlled expanded"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En controlled Accordion kan expanderas programmatiskt med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expandedKeys"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onExpandedChange"
      }), ".\nVärdena i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expandedKeys"
      }), " måste matcha ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), " på de AccordionItem-komponenter du vill expandera."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "//highlight-next-line\nconst [expandedKeys, setExpandedKeys] =\nReact.useState<Set<Key>>(new Set(['mandarin']))\n\n<Accordion\n//highlight-start\n  expandedKeys={expandedKeys}\n  onExpandedChange={setExpandedKeys}\n//highlight-end\n  type={'multiple'}\n>\n  <AccordionItem\n    {...props}\n    id={'mandarin'}\n    title={'Mandarin'}\n  >\n    Liten orange citrusfrukt\n  </AccordionItem>\n  <AccordionItem\n    id={'sharon'}\n    title={'Sharon'}\n  >\n    Persikoliknande frukt med fast kött\n  </AccordionItem>\n  <AccordionItem\n    id={'watermelon'}\n    title={'Vattenmelon'}\n  >\n    Stor frukt med rött, saftigt kött\n  </AccordionItem>\n</Accordion>\n<pre>\nFöljande AccordionItems är öppna: {Array.from(expandedKeys).join(', ')}\n</pre>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(AccordionExampleControlled, {
      type: 'multiple'
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "accordion",
      children: "Accordion"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: 'Accordion'
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "accordionitem",
      children: "AccordionItem"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: 'AccordionItem',
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



/***/ })

}]);