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
const site_docs_components_button_mdx_074_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/button","title":"Button","description":"Knappar används när användaren vill utföra en handling t.ex. spara ifylld information eller öppna ett formulär.","source":"@site/docs/components/button.mdx","sourceDirName":"components","slug":"/components/button","permalink":"/pr-preview/pr-187/components/button","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Button","description":"Knappar används när användaren vill utföra en handling t.ex. spara ifylld information eller öppna ett formulär.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
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
  "value": "Primärknapp",
  "id": "primärknapp",
  "level": 2
}, {
  "value": "Sekundär knapp",
  "id": "sekundär-knapp",
  "level": 2
}, {
  "value": "Tertiär knapp",
  "id": "tertiär-knapp",
  "level": 2
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
      children: `<ButtonGroup aria-label="Välj frukt">
  <Button>{fruits.shuffled(1).name}</Button>
  <Button variant="secondary">{fruits.shuffled(1).name}</Button>
  <Button isDisabled>{fruits.shuffled(1).name}</Button>
</ButtonGroup>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "primärknapp",
      children: "Primärknapp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Den primära knapp används för den primära/positiva handlingar i ett flöde (OK ,Skicka, Nästa). Det bör endast finnas en primärknapp per sida/sektion/tydligt avgränsad yta."
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      hideCode: true,
      scope: {
        Flex: flex_src/* Flex */.s,
        FlexItem: flex_src/* FlexItem */.Z,
        Button: src/* Button */.$n
      },
      children: `<Flex fluid>
<FlexItem col="auto">
  <Button>Slutför</Button>
</FlexItem>
</Flex>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sekundär-knapp",
      children: "Sekundär knapp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sekundär knapp används för underordnade handlingar i ett flöde (Avbryt, Tillbaka)."
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      hideCode: true,
      scope: {
        Flex: flex_src/* Flex */.s,
        FlexItem: flex_src/* FlexItem */.Z,
        Button: src/* Button */.$n
      },
      children: `<Flex fluid>
<FlexItem col="auto">
  <Button variant={'secondary'}>Tillbaka</Button>
</FlexItem>
</Flex>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tertiär-knapp",
      children: "Tertiär knapp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Den tertiära knappen kan användas tillsammans med primär- och sekundärknapp där det finns behov av ett ytterligare val"
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
        Flex: flex_src/* Flex */.s,
        FlexItem: flex_src/* FlexItem */.Z,
        Button: src/* Button */.$n,
        Plus: plus/* default */.A
      },
      children: `<Flex fluid>
<FlexItem col="auto">
  <Button
    icon={Plus}
    variant='tertiary'
    iconPlacement='left'
    >
    {'Lägg till rad'}
  </Button>
</FlexItem>
</Flex>`
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

/***/ 13225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ComponentHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86025);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2543);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _midas_ds_link_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80269);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9245);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92457);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42350);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
var ComponentHeader=function ComponentHeader(_ref){var name=_ref.name,friendlyName=_ref.friendlyName,overrideHeadlessLink=_ref.overrideHeadlessLink,overrideHeadlessLinkTitle=_ref.overrideHeadlessLinkTitle;var storybookLink= false?0:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)("/storybook/?path=/docs/components-"+name.toLowerCase()+"--docs");return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section",{style:{marginBottom:32,marginTop:-20},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .s,{fluid:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__/* .FlexItem */ .Z,{style:{alignSelf:'center'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__/* .FlexItem */ .Z,{col:"auto",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_link_button__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:"https://github.com/migrationsverket/midas/tree/main/packages/"+(0,lodash__WEBPACK_IMPORTED_MODULE_3__.kebabCase)(name)+"/CHANGELOG.md",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,iconPlacement:"left",children:"Versionslogg"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__/* .FlexItem */ .Z,{col:"auto",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_link_button__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:storybookLink,variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,iconPlacement:"left",children:"Storybook"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__/* .FlexItem */ .Z,{col:"auto",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_link_button__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,iconPlacement:"left",children:overrideHeadlessLinkTitle?overrideHeadlessLinkTitle:'React Aria'})})]})});};

/***/ }),

/***/ 4928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ PropTable)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useGlobalData.js
var useGlobalData = __webpack_require__(66588);
// EXTERNAL MODULE: ./packages/accordion/src/index.ts + 22 modules
var src = __webpack_require__(17986);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./apps/docs/src/css/propstable.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const propstable_module = ({"table":"table_p75e","thead":"thead_NOJG","tbody":"tbody_wu48","item":"item_chxT"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/propsTable.tsx
var PropTable=function PropTable(_ref){var _ComponentsDocs$find;var name=_ref.name,_ref$defaultOpen=_ref.defaultOpen,defaultOpen=_ref$defaultOpen===void 0?true:_ref$defaultOpen;var globalData=(0,useGlobalData/* default */.Ay)();var ComponentsDocs=globalData['docusaurus-plugin-react-docgen-typescript']["default"];var props=(_ComponentsDocs$find=ComponentsDocs.find(function(componentDoc){return componentDoc.displayName===name;}))==null?void 0:_ComponentsDocs$find.props;if(!props){return null;}var _Object$entries$reduc=Object.entries(props).reduce(function(acc,_ref2){var key=_ref2[0],value=_ref2[1];if(key.startsWith('on')){acc.events[key]=value;}else if(key.startsWith('aria-')){acc.accessibility[key]=value;}else{acc.rest[key]=value;}return acc;},{events:{},accessibility:{},rest:{}}),events=_Object$entries$reduc.events,accessibility=_Object$entries$reduc.accessibility,rest=_Object$entries$reduc.rest;var Table=function Table(_ref3){var propGroup=_ref3.propGroup;return/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{className:propstable_module.table,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{className:propstable_module.thead,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Namn"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Typ"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Standard"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Beskrivning"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{className:propstable_module.tbody,children:Object.keys(propGroup).map(function(key){var _props$key$type;return/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("td",{style:{verticalAlign:'top'},children:[key," ",props[key].required&&' *']}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{verticalAlign:'top',maxWidth:'250px'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("code",{children:(_props$key$type=props[key].type)==null?void 0:_props$key$type.name})}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{verticalAlign:'top',maxWidth:'50px'},children:props[key].defaultValue?/*#__PURE__*/(0,jsx_runtime.jsx)("code",{children:props[key].defaultValue.value}):'-'}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{verticalAlign:'top'},children:props[key].description})]},key);})})]});};return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* Accordion */.nD,{headingTag:"h3",type:"multiple",defaultValue:defaultOpen?['props']:[],children:[Object.getOwnPropertyNames(rest).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* AccordionItem */.As,{value:"props",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionTrigger */.$m,{children:"Props"}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionContent */.ub,{className:propstable_module.item,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Table,{propGroup:rest})})]}),Object.getOwnPropertyNames(events).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* AccordionItem */.As,{value:"events",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionTrigger */.$m,{children:"Events"}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionContent */.ub,{className:propstable_module.item,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Table,{propGroup:events})})]}),Object.getOwnPropertyNames(accessibility).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* AccordionItem */.As,{value:"accessibility",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionTrigger */.$m,{children:"Tillg\xE4nglighet"}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionContent */.ub,{className:propstable_module.item,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Table,{propGroup:accessibility})})]})]})});};

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