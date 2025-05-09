"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6299],{

/***/ 60123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Example: () => (/* binding */ Example),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_tooltip_mdx_1e8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-tooltip-mdx-1e8.json
const site_docs_components_tooltip_mdx_1e8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/tooltip","title":"Tooltip","description":"Tooltip kan användas för att förklara en knapp eller annan interaktion när det inte går att få plats med informationen i knappen.","source":"@site/docs/components/tooltip.mdx","sourceDirName":"components","slug":"/components/tooltip","permalink":"/pr-preview/pr-554/components/tooltip","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Tooltip","description":"Tooltip kan användas för att förklara en knapp eller annan interaktion när det inte går att få plats med informationen i knappen.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./packages/components/src/tooltip/Tooltip.tsx + 5 modules
var Tooltip = __webpack_require__(61632);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(35518);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(84722);
;// ./node_modules/lucide-react/dist/esm/icons/save.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Save = (0,createLucideIcon/* default */.A)("Save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
]);


//# sourceMappingURL=save.js.map

;// ./node_modules/lucide-react/dist/esm/icons/arrow-left.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ArrowLeft = (0,createLucideIcon/* default */.A)("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);


//# sourceMappingURL=arrow-left.js.map

;// ./node_modules/lucide-react/dist/esm/icons/arrow-up.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ArrowUp = (0,createLucideIcon/* default */.A)("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);


//# sourceMappingURL=arrow-up.js.map

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusable.mjs
var useFocusable = __webpack_require__(28940);
;// ./apps/docs/src/components/examples/tooltip/TooltipExamples.tsx
var TooltipDelay=function TooltipDelay(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"card",style:{display:'flex',flexDirection:'row',justifyContent:'start',gap:'1rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Tooltip/* TooltipTrigger */.k,{delay:600,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"secondary",children:"Hover me first"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* Tooltip */.m,{children:"F\xF6rsta Tooltip som hovras visas efter f\xF6rdr\xF6jning."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Tooltip/* TooltipTrigger */.k,{delay:600,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"primary",children:"Hover later"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* Tooltip */.m,{children:"Och n\xE4sta Tooltip visas d\xE5 snabbare!"})]})]});};var TooltipPlacement=function TooltipPlacement(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"card",style:{display:'flex',alignItems:'center',flexDirection:'row',gap:'1rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Tooltip/* TooltipTrigger */.k,{delay:600,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ArrowLeft,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* Tooltip */.m,{placement:"left",children:"Tooltip visas till v\xE4nster om trigger-elementet"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Tooltip/* TooltipTrigger */.k,{delay:600,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ArrowUp,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* Tooltip */.m,{placement:"top",children:"Tooltip visas p\xE5 ovansidan av trigger-elementet"})]})]});};var ControlledTooltip=function ControlledTooltip(){var _React$useState=react.useState(false),isOpen=_React$useState[0],setOpen=_React$useState[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Tooltip/* TooltipTrigger */.k,{isOpen:isOpen,onOpenChange:setOpen,delay:500,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{children:"Hover me"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* Tooltip */.m,{children:"Enligt botanisk definition r\xE4knas bananer faktiskt som b\xE4r, medan jordgubbar inte g\xF6r det."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("pre",{children:["Tooltip ",isOpen?'visas':'visas inte']})]});};var CustomTriggerTooltip=function CustomTriggerTooltip(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Tooltip/* TooltipTrigger */.k,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(useFocusable/* Focusable */.zo,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{role:"button",children:"Trigger"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* Tooltip */.m,{children:"Med hj\xE4lp av Focusable kan vilket element som helst bli en trigger!"})]});};
;// ./apps/docs/docs/components/tooltip.mdx


const frontMatter = {
	title: 'Tooltip',
	description: 'Tooltip kan användas för att förklara en knapp eller annan interaktion när det inte går att få plats med informationen i knappen.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};










const Example = props => {
  return (0,jsx_runtime.jsxs)(Tooltip/* TooltipTrigger */.k, {
    isOpen: true,
    children: [(0,jsx_runtime.jsx)(Button/* Button */.$, {
      variant: "tertiary",
      "aria-label": "Spara",
      children: (0,jsx_runtime.jsx)(Save, {})
    }), (0,jsx_runtime.jsx)(Tooltip/* Tooltip */.m, {
      children: "Spara"
    })]
  });
};
const toc = [{
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Funktioner",
  "id": "funktioner",
  "level": 2
}, {
  "value": "Delay",
  "id": "delay",
  "level": 3
}, {
  "value": "Placement",
  "id": "placement",
  "level": 3
}, {
  "value": "Controlled state",
  "id": "controlled-state",
  "level": 3
}, {
  "value": "Valfritt element som Trigger",
  "id": "valfritt-element-som-trigger",
  "level": 3
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Tooltip",
  "id": "tooltip",
  "level": 3
}, {
  "value": "TooltipTrigger",
  "id": "tooltiptrigger",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: "Tooltip",
      friendlyName: "Hjälptext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tooltip kan användas för att förklara en knapp eller annan interaktion när det inte går att få plats med informationen i knappen."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<TooltipTrigger isOpen>\n  <Button\n    variant='tertiary'\n    aria-label='Spara'\n  >\n    <Save />\n  </Button>\n  <Tooltip>Spara</Tooltip>\n</TooltipTrigger>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        display: 'block'
      },
      children: (0,jsx_runtime.jsx)(Example, {})
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
        children: "import { Tooltip, TooltipTrigger, Button } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "funktioner",
      children: "Funktioner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tooltip är byggd på ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/Tooltip.html",
        children: "React Aria Tooltip"
      }), " och med det\nföljer inbyggd tillgänglighet som till exempel sammankoppling mellan trigger och tooltip. För mer detaljerad\ndokumentation hänvisas till React Aria."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delay",
      children: "Delay"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tooltips visas efter en kort fördröjning (via prop ", (0,jsx_runtime.jsx)(_components.code, {
        children: "delay"
      }), ") när man håller muspekaren över utlösaren,\neller omedelbart vid användning av tangentbordsfokus. Denna fördröjning kallas för \"uppvärmningsperiod\"\n(warmup period), och det är en global timer som delas av alla Tooltip. När ett Tooltip väl har\nvisats, visas andra Tooltips omedelbart. Om användaren väntar under \"nedkylningsperioden\" (cooldown period)\ninnan de för muspekaren över ett annat element, startar uppvärmningstimern om."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<TooltipTrigger delay={600}>\n  <Button variant='secondary'>Hover me first</Button>\n  <Tooltip>Första Tooltip som hovras visas efter fördröjning.</Tooltip>\n</TooltipTrigger>\n<TooltipTrigger>\n  <Button variant='primary'>Hover later</Button>\n  <Tooltip>Och nästa Tooltip visas då snabbare!</Tooltip>\n</TooltipTrigger>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(TooltipDelay, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "placement",
      children: "Placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tooltipens placering i förhållande till dess trigger-element kan justeras med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "placement"
      }), " (i mån av plats)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<TooltipTrigger delay={600}>\n  <Button>\n    <ArrowLeft />\n  </Button>\n  <Tooltip placement='left'>\n  Tooltip visas till vänster om trigger-elementet\n  </Tooltip>\n</TooltipTrigger>\n<TooltipTrigger delay={600}>\n  <Button>\n  <ArrowUp />\n  </Button>\n  <Tooltip placement='top'>\n  Tooltip visas på ovansidan av trigger-elementet\n</Tooltip></TooltipTrigger>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(TooltipPlacement, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "controlled-state",
      children: "Controlled state"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "export const ControlledTooltip = () => {\n  const [isOpen, setOpen] = React.useState(false)\n\n  return (\n    <>\n      <TooltipTrigger\n        isOpen={isOpen}\n        onOpenChange={setOpen}\n        delay={500}\n      >\n        <Button>Hover me</Button>\n        <Tooltip>Message</Tooltip>\n      </TooltipTrigger>\n      <pre>Tooltip {isOpen ? 'visas' : 'visas inte'}</pre>\n    </>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(ControlledTooltip, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "valfritt-element-som-trigger",
      children: "Valfritt element som Trigger"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TooltipTrigger fungerar direkt med alla ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "focusable"
      }), " React Aria-komponenter (t.ex. Button, Link, etc.). Anpassade trigger-element,\nsåsom tredjepartskomponenter och andra DOM-element, stöds också genom att de omsluts med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Focusable>"
      }), "-komponenten."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Focusable } from 'react-aria-components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<TooltipTrigger>\n  <Focusable>\n    <span role='button'>Trigger</span>\n  </Focusable>\n  <Tooltip>Med hjälp av Focusable kan vilket element som helst bli en trigger!</Tooltip>\n</TooltipTrigger>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        display: 'block'
      },
      children: (0,jsx_runtime.jsx)(CustomTriggerTooltip, {})
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Observera att element under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Focusable>"
      }), " måste ha en ARIA-roll eller använda ett lämpligt semantiskt HTML-element\nså att skärmläsare kan läsa upp innehållet i verktygstipset. Detta gäller bara element som inte redan är ", (0,jsx_runtime.jsx)(_components.em, {
        children: "focusable"
      }), "\neller ", (0,jsx_runtime.jsx)(_components.em, {
        children: "pressable"
      }), ". Se ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/Tooltip.html#custom-trigger",
        children: "React Aria Tooltip Custom trigger"
      }), "\nför referens."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "I första hand skall elementet vara tydligt nog så användaren förstår innebörden. Tooltip är till för en design där detta\ninte är möjligt och vi måste gömma undan informationen."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tooltips kan också användas för att berätta mer information än vad som framkommer visuellt på knappen."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tooltip",
      children: "Tooltip"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "Tooltip"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tooltiptrigger",
      children: "TooltipTrigger"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "TooltipTrigger",
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