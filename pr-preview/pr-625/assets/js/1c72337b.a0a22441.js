"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5605],{

/***/ 41199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_checkbox_mdx_1c7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-checkbox-mdx-1c7.json
const site_docs_components_checkbox_mdx_1c7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/checkbox","title":"Checkbox","description":"Används för att låta användaren välja inget, ett eller flera alternativ.","source":"@site/docs/components/checkbox.mdx","sourceDirName":"components","slug":"/components/checkbox","permalink":"/pr-preview/pr-625/components/checkbox","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Checkbox","description":"Används för att låta användaren välja inget, ett eller flera alternativ.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(11470);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(19365);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx
var Checkbox = __webpack_require__(38545);
// EXTERNAL MODULE: ./packages/components/src/checkbox/CheckboxGroup.tsx
var CheckboxGroup = __webpack_require__(39220);
;// ./apps/docs/src/components/examples/checkbox/CheckboxExamples.tsx
var ControlledExample=function ControlledExample(){var _React$useState=react.useState(false),isSelected=_React$useState[0],setIsSelected=_React$useState[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{isSelected:isSelected,onChange:setIsSelected,children:"Jag godk\xE4nner villkoren"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("pre",{children:["Du har",isSelected?'':' inte'," godk\xE4nt villkoren"]})]});};var ControlledGroupExample=function ControlledGroupExample(){var _React$useState2=react.useState(),value=_React$useState2[0],setValue=_React$useState2[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(CheckboxGroup/* CheckboxGroup */.$,{label:"Favoritfrukt",value:value,onChange:setValue,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{value:"banan",children:"Banan"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{value:"melon",children:"Melon"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{value:"kiwi",children:"Kiwi"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{value:"satsumas",children:"Satsumas"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("pre",{children:["Valda alternativ: ",value==null?void 0:value.join(', ')]})]});};
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(68713);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
;// ./apps/docs/docs/components/checkbox.mdx


const frontMatter = {
	title: 'Checkbox',
	description: 'Används för att låta användaren välja inget, ett eller flera alternativ.',
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
  "value": "Ensam checkbox",
  "id": "ensam-checkbox",
  "level": 3
}, {
  "value": "Förvalt alternativ (okontrollerat)",
  "id": "förvalt-alternativ-okontrollerat",
  "level": 3
}, {
  "value": "Kontrollerat val",
  "id": "kontrollerat-val",
  "level": 3
}, {
  "value": "Varianter för flera checkboxar",
  "id": "varianter-för-flera-checkboxar",
  "level": 2
}, {
  "value": "Välj alla",
  "id": "välj-alla",
  "level": 3
}, {
  "value": "Förvalda alternativ (okontrollerat)",
  "id": "förvalda-alternativ-okontrollerat",
  "level": 3
}, {
  "value": "Kontrollerat val",
  "id": "kontrollerat-val-1",
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
  "value": "Checkbox",
  "id": "checkbox",
  "level": 3
}, {
  "value": "CheckboxGroup",
  "id": "checkboxgroup",
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
      name: "Checkbox",
      friendlyName: "Kryssruta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inmatningsfält för att låta användaren välja inget, ett eller flera av ett antal förvalda alternativ."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Checkbox>Jag godkänner villkoren</Checkbox>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S, {
        children: "Jag godkänner villkoren"
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
        children: "import { Checkbox } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ensam-checkbox",
      children: "Ensam checkbox"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Checkbox>Jag godkänner villkoren</Checkbox>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S, {
        children: "Jag godkänner villkoren"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "förvalt-alternativ-okontrollerat",
      children: "Förvalt alternativ (okontrollerat)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd attributet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "defaultSelected"
      }), " för att en checkbox ska vara förvald."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Checkbox defaultSelected />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S, {
        defaultSelected: true
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kontrollerat-val",
      children: "Kontrollerat val"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd attributet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isSelected"
      }), " och eventet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onChange"
      }), " för att använda controlled mode på Checkbox."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import React from 'react'\n\nconst [isSelected, setIsSelected] = React.useState(false)\n\nreturn (\n  <Checkbox\n    isSelected={isSelected}\n    onChange={setIsSelected}\n  >\n    Jag godkänner villkoren\n  </Checkbox>\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(ControlledExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter-för-flera-checkboxar",
      children: "Varianter för flera checkboxar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<CheckboxGroup>"
      }), " för att gruppera flera checkboxar som hör samman."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<CheckboxGroup\n  label='Godkänner du våra villkor?'\n  description='Läs texten först'\n>\n  <Checkbox value='1'>Jag har läst texten</Checkbox>\n  <Checkbox value='2'>Jag godkänner villkoren</Checkbox>\n</CheckboxGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(CheckboxGroup/* CheckboxGroup */.$, {
        label: "Godkänner du våra villkor?",
        description: "Läs texten först",
        children: [(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S, {
          value: "1",
          children: "Jag har läst texten"
        }), (0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S, {
          value: "2",
          children: "Jag godkänner villkoren"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "välj-alla",
      children: "Välj alla"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ibland kan det vara lämpligt att ge användaren möjlighet att snabbt kryssa i alla kryssrutor.\nDenna funktion finns inbyggt i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<CheckboxGroup>"
      }), " via egenskapen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "showSelectAll"
      }), ".\nOm detta används på en sida med paginerat innehåll så skall endast de kryssrutor som finns på den aktuella sidan väljas."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<CheckboxGroup\n  label='Godkänner du våra villkor'\n  description='Läs texten först'\n  // highlight-start\n  showSelectAll\n  // highlight-end\n>\n  <Checkbox value='1'>Jag har läst texten</Checkbox>\n  <Checkbox value='2'>Jag godkänner villkoren</Checkbox>\n</CheckboxGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(CheckboxGroup/* CheckboxGroup */.$, {
        label: "Godkänner du våra villkor",
        description: "Läs texten först",
        showSelectAll: true,
        children: [(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S, {
          value: "1",
          children: "Jag har läst texten"
        }), (0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S, {
          value: "2",
          children: "Jag godkänner villkoren"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "förvalda-alternativ-okontrollerat",
      children: "Förvalda alternativ (okontrollerat)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd attributet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "defaultValue"
      }), " för att en eller flera kryssrutor ska vara förvalda."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<CheckboxGroup\n  label='Favoritfrukt'\n  // highlight-start\n  defaultValue={['banan', 'melon']}\n  // highlight-end\n>\n  <Checkbox value='banan'>Banan</Checkbox>\n  <Checkbox value='melon'>Melon</Checkbox>\n  <Checkbox value='kiwi'>Kiwi</Checkbox>\n  <Checkbox value='satsumas'>Satsumas</Checkbox>\n</CheckboxGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(CheckboxGroup/* CheckboxGroup */.$, {
        label: "Favoritfrukt",
        defaultValue: ['banan', 'melon'],
        children: [(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S, {
          value: "banan",
          children: "Banan"
        }), (0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S, {
          value: "melon",
          children: "Melon"
        }), (0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S, {
          value: "kiwi",
          children: "Kiwi"
        }), (0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S, {
          value: "satsumas",
          children: "Satsumas"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kontrollerat-val-1",
      children: "Kontrollerat val"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd attributet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), " och eventet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onChange"
      }), " för att använda controlled mode på CheckboxGroup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import React from 'react'\n\nconst [value, setValue] = React.useState<string[]>()\n\nreturn (\n  <CheckboxGroup\n    label='Favoritfrukt'\n    // highlight-start\n    value={value}\n    onChange={setValue}\n    // highlight-end\n  >\n    <Checkbox value='banan'>Banan</Checkbox>\n    <Checkbox value='melon'>Melon</Checkbox>\n    <Checkbox value='kiwi'>Kiwi</Checkbox>\n    <Checkbox value='satsumas'>Satsumas</Checkbox>\n  </CheckboxGroup>\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(ControlledGroupExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Om det är många alternativ så bör ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/components/select",
          children: "Select"
        }), " användas istället."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Använd inte kryssruta om användaren väntar sig att valet ska få effekt direkt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fältetikett ska inledas med en stor bokstav och inte följas av punkt."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "checkbox",
      children: "Checkbox"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "Checkbox"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "checkboxgroup",
      children: "CheckboxGroup"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "CheckboxGroup",
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

/***/ 68713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ PropTable)
});

// UNUSED EXPORTS: DisplayCompositeTypes

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useGlobalData.js
var useGlobalData = __webpack_require__(66588);
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx
var Accordion = __webpack_require__(78033);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx
var AccordionItem = __webpack_require__(29184);
// EXTERNAL MODULE: ./packages/components/src/theme/tokens.ts
var tokens = __webpack_require__(46090);
;// ./apps/docs/src/css/propstable.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const propstable_module = ({"accordion":"accordion_M8EQ","propsGridTable":"propsGridTable_luj3","popover":"popover_gEf7","arrow":"arrow_kUCF"});
// EXTERNAL MODULE: ./node_modules/react-markdown/lib/index.js + 139 modules
var lib = __webpack_require__(56380);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/Lowlight.js + 2 modules
var Lowlight = __webpack_require__(80556);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/common.js + 38 modules
var common = __webpack_require__(48004);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/Pressable.mjs
var Pressable = __webpack_require__(94752);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(45745);
;// ./apps/docs/src/utils/jsdocLinkToMarkdown.ts
var jsdocLinkToMarkdown=function jsdocLinkToMarkdown(jsdocLink){if(!jsdocLink.includes('@link')){return jsdocLink;}var textBefore=jsdocLink.substring(0,jsdocLink.indexOf('{@link')).replace(/@\S*/g,'');var url=jsdocLink.substring(jsdocLink.indexOf('http'),jsdocLink.lastIndexOf('/'));var linkText=jsdocLink.substring(jsdocLink.lastIndexOf('/')+2,jsdocLink.lastIndexOf('}'));return textBefore+". See ["+linkText+"]("+url+").";};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/PropsTable.tsx
var DisplayCompositeTypes=function DisplayCompositeTypes(_ref){var props=_ref.props;switch(props.type.name){case'enum':{return/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Pressable/* Pressable */.o,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{role:"button",style:{cursor:'pointer'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props.type.raw,inline:true,language:"typescript",markers:[]})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Popover/* Popover */.A,{style:{'--background':tokens.semantic.background,'--border':tokens.semantic.borderPrimary},className:propstable_module.popover,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:propstable_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:12,height:12,viewBox:"0 0 12 12",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L6 6 L12 0"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Dialog/* Dialog */.lG,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"hljs-code",children:props.type.value.map(function(r,i){return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{children:[i===0?' ':' | ',/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:r.value.replace(/"/g,"'"),inline:true,language:"typescript",markers:[]})]},""+r.value+i);})})})]})]});}default:return/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props.type.name,inline:true,language:"typescript",markers:[]});}};var PropTable=function PropTable(_ref2){var _ComponentsDocs$find;var name=_ref2.name,_ref2$defaultOpen=_ref2.defaultOpen,defaultOpen=_ref2$defaultOpen===void 0?true:_ref2$defaultOpen;var globalData=(0,useGlobalData/* default */.Ay)();var ComponentsDocs=globalData['docusaurus-plugin-react-docgen-typescript']["default"];var props=(_ComponentsDocs$find=ComponentsDocs.find(function(componentDoc){return componentDoc.displayName===name;}))==null?void 0:_ComponentsDocs$find.props;if(!props){return null;}var _Object$entries$reduc=Object.entries(props).reduce(function(acc,_ref3){var key=_ref3[0],value=_ref3[1];if(key.startsWith('on')){acc.events[key]=value;}else if(key.startsWith('aria-')){acc.accessibility[key]=value;}else{acc.rest[key]=value;}return acc;},{events:{},accessibility:{},rest:{}}),events=_Object$entries$reduc.events,accessibility=_Object$entries$reduc.accessibility,rest=_Object$entries$reduc.rest;var Grid=function Grid(_ref4){var propGroup=_ref4.propGroup,_ref4$showDefault=_ref4.showDefault,showDefault=_ref4$showDefault===void 0?true:_ref4$showDefault;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:propstable_module.propsGridTable,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Name"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Type"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:showDefault&&'Default'}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Description"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{children:Object.keys(propGroup).map(function(key){return/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("td",{"data-title":"Name",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:key,inline:true,language:"typescript",markers:[]}),props[key].required&&' *']}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Type",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DisplayCompositeTypes,{props:props[key]})}),showDefault?/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Default",children:props[key].defaultValue?/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props[key].defaultValue.value,inline:true,language:"typescript",markers:[]}):'-'}):/*#__PURE__*/(0,jsx_runtime.jsx)("td",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Description",children:/*#__PURE__*/(0,jsx_runtime.jsx)(lib/* Markdown */.oz,{children:jsdocLinkToMarkdown(props[key].description)})})]},key);})})]})});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Accordion/* Accordion */.n,{className:propstable_module.accordion,allowsMultipleExpanded:true,defaultExpandedKeys:defaultOpen?['props']:[],children:[Object.getOwnPropertyNames(rest).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"props",title:"Props",className:propstable_module.accordionItem,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:rest})}),Object.getOwnPropertyNames(events).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"events",title:"Events",className:propstable_module.accordionItem,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:events,showDefault:false})}),Object.getOwnPropertyNames(accessibility).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"accessibility",title:"Tillg\xE4nglighet",className:propstable_module.accordionItem,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:accessibility,showDefault:false})})]});};

/***/ }),

/***/ 13225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ComponentHeader)
/* harmony export */ });
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84065);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56176);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56636);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92457);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42350);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44586);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
var CHROMATIC_APP_ID='6810d578d5507438df0f0d22';// move
var ComponentHeader=function ComponentHeader(_ref){var name=_ref.name,friendlyName=_ref.friendlyName,overrideHeadlessLink=_ref.overrideHeadlessLink,overrideHeadlessLinkTitle=_ref.overrideHeadlessLinkTitle;var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(),customFields=_useDocusaurusContext.siteConfig.customFields;var componentPath="?path=/docs/components-"+name.toLowerCase()+"--docs";var storybookHost= false?0:customFields!=null&&customFields.currentChromaticBranchUrl?"https://"+(customFields==null?void 0:customFields.currentChromaticBranchUrl)+"--"+CHROMATIC_APP_ID+".chromatic.com":"https://main--"+CHROMATIC_APP_ID+".chromatic.com";var storybookLink=storybookHost+"/"+componentPath;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section",{className:"component-header",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .s,{fluid:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",className:"friendlyName",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",className:"headerLink",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:storybookLink,variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,iconPlacement:"left",children:"Storybook"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",className:"headerLink",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,iconPlacement:"left",children:overrideHeadlessLinkTitle?overrideHeadlessLinkTitle:'React Aria'})})]})});};

/***/ }),

/***/ 78033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ Accordion)
/* harmony export */ });
/* unused harmony export ACCORDION_TEST_ID */
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var _Accordion_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43249);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48569);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["variant","children","className"];var ACCORDION_TEST_ID='accordion';/**
 * Accordions are used primarily to reduce the direct amount of information on a page and to sort it clearly.
 */var Accordion=function Accordion(_ref){var _ref$variant=_ref.variant,variant=_ref$variant===void 0?'uncontained':_ref$variant,children=_ref.children,className=_ref.className,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .DisclosureGroup */ .Tw,Object.assign({"data-testid":ACCORDION_TEST_ID,className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_Accordion_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.root,variant==='contained'?_Accordion_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.contained:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.uncontained,className)},props,{children:children}));};

/***/ }),

/***/ 29184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AccordionItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48569);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54031);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45773);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(418);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75107);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34164);
/* harmony import */ var _Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43249);
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93683);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["title","children","className","headingLevel","type","hasBackground"];var AccordionItem=function AccordionItem(_ref){var title=_ref.title,children=_ref.children,className=_ref.className,_ref$headingLevel=_ref.headingLevel,headingLevel=_ref$headingLevel===void 0?'h2':_ref$headingLevel,type=_ref.type,_ref$hasBackground=_ref.hasBackground,hasBackground=_ref$hasBackground===void 0?true:_ref$hasBackground,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var titleIsReactNode=typeof title==='object';var iconMap={success:lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,warning:lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,"default":null};var Icon=iconMap[type||'default'];var renderedIcon=Icon?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon,{size:20,className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.statusIcon}):null;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_aria_components__WEBPACK_IMPORTED_MODULE_6__/* .Disclosure */ .EN,Object.assign({},props,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.item,type==='success'&&_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.success,type==='warning'&&_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.warning,className),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.trigger,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .$,{className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.triggerButton,slot:"trigger",variant:"icon",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{size:20,className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.chevronIcon}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.triggerMainContent,children:titleIsReactNode?title:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heading__WEBPACK_IMPORTED_MODULE_10__/* .Heading */ .D,{level:3,elementType:headingLevel,className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.triggerText,children:title})}),renderedIcon]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_6__/* .DisclosurePanel */ .kS,{className:_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.panel,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.content,hasBackground&&_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.hasBackground),children:children})})]}));};

/***/ }),

/***/ 38545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98587);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2581);
/* harmony import */ var _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
'use client';var _excluded=["children"];var Checkbox=function Checkbox(_ref){var _children=_ref.children,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .Checkbox */ .Sc,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.checkbox,props.className)},props,{children:function children(_ref2){var isIndeterminate=_ref2.isIndeterminate;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.checkboxInner,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:16,height:16,viewBox:"0 0 18 18","aria-hidden":"true",children:isIndeterminate?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:4,y:8,width:10,height:2}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline",{points:"3,9 7,13 15,4"})})}),_children]});}}));};

/***/ }),

/***/ 39220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ CheckboxGroup)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2581);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63899);
/* harmony import */ var _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16025);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38545);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34704);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19615);
/* harmony import */ var _field_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19060);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["label","description","errorMessage","showSelectAll","children","errorPosition"];var CheckboxGroup=function CheckboxGroup(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,showSelectAll=_ref.showSelectAll,children=_ref.children,_ref$errorPosition=_ref.errorPosition,errorPosition=_ref$errorPosition===void 0?'top':_ref$errorPosition,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(),isAllSelected=_React$useState[0],setIsAllSelected=_React$useState[1];var ToogleAll=function ToogleAll(){var state=react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .CheckboxGroupStateContext */ .pf);var childValues=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement).map(function(child){return child.props.value;});var toggleAll=function toggleAll(){if(isAllSelected!=='all'){setIsAllSelected('all');return state==null?void 0:state.setValue(['toggleAll'].concat(childValues));}setIsAllSelected('none');return state==null?void 0:state.setValue([]);};react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function(){var _state$value,_state$value2;var amountOfChildren=childValues.length;var totalAmount=childValues.length+1;var currentAmount=(state==null||(_state$value=state.value)==null?void 0:_state$value.length)||0;if(currentAmount===0)setIsAllSelected('none');if(currentAmount>0&&currentAmount<amountOfChildren)setIsAllSelected('some');if(currentAmount!==totalAmount)state==null||state.removeValue('toggleAll');if(currentAmount===amountOfChildren&&!(state!=null&&(_state$value2=state.value)!=null&&_state$value2.includes('toggleAll'))){state==null||state.addValue('toggleAll');setIsAllSelected('all');}// eslint-disable-next-line react-hooks/exhaustive-deps
},[childValues.length,state==null?void 0:state.value]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_5__/* .Checkbox */ .S,{value:"toggleAll",isSelected:isAllSelected==='all',isIndeterminate:isAllSelected==='some',onChange:function onChange(){return toggleAll();},children:"V\xE4lj alla"});};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .CheckboxGroup */ .$Q,Object.assign({className:_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.checkboxGroup},props,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_label__WEBPACK_IMPORTED_MODULE_6__/* .Label */ .J,{children:label}),description&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_text__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .E,{slot:"description",children:description}),errorPosition==='top'&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_field_error__WEBPACK_IMPORTED_MODULE_8__/* .FieldError */ .b,{children:errorMessage}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_aria_components__WEBPACK_IMPORTED_MODULE_9__/* .Group */ .Y,{className:_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.wrap,children:[showSelectAll&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToogleAll,{}),children]}),errorPosition==='bottom'&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_field_error__WEBPACK_IMPORTED_MODULE_8__/* .FieldError */ .b,{children:errorMessage})]}));};

/***/ }),

/***/ 19060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ FieldError_FieldError)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/field-error/FieldError.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const FieldError_module = ({"tokens":"\"../theme/tokens.css\"","--text-warning":"light-dark(#e62323, #eb4e4e)","--font-family":"\"Inter\", sans-serif","fieldError":"fieldError_K9VX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/field-error/FieldError.tsx
var FieldError_FieldError=/*#__PURE__*/react.forwardRef(function(props,ref){var validation=react.useContext(FieldError/* FieldErrorContext */.C);if(!(validation!=null&&validation.isInvalid))return null;return/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,Object.assign({},props,{ref:ref,className:(0,clsx/* default */.A)(FieldError_module.fieldError,props.className)}));});

/***/ }),

/***/ 84065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ Flex)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Flex_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55809);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","fluid"];/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use FlexItem to manage each column.
 * FlexItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */var Flex=function Flex(_ref){var children=_ref.children,_ref$fluid=_ref.fluid,fluid=_ref$fluid===void 0?false:_ref$fluid,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({},rest,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.container,fluid&&_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fluid,rest.className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.flex,children:children})}));};

/***/ }),

/***/ 56176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FlexItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Flex_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55809);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","col","offset"];/**
 * Columns based on display: flex;
 * FlexItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */var FlexItem=function FlexItem(_ref){var children=_ref.children,col=_ref.col,offset=_ref.offset,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var colClass=col?"col-"+col:'';var offsetClass=offset?"offset-"+offset:'';return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({},props,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.col,_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[colClass],_Flex_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[offsetClass],props.className),children:children}));};

/***/ }),

/***/ 93683:
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
/* harmony default export */ const Heading_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--font-size-30":"1rem","--font-size-40":"1.125rem","--font-size-50":"1.25rem","--font-size-90":"2.25rem","--line-height-50":"1.5rem","--line-height-60":"1.75rem","--line-height-70":"2rem","h1":"h1_fQIH","h2":"h2_fBmz","h3":"h3_xOF5","h4":"h4_AF6p","h5":"h5_slY8","h6":"h6_loS0"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/heading/Heading.tsx
var _excluded=["children","className","isExpressive","level","elementType"];var Heading=function Heading(_ref){var children=_ref.children,className=_ref.className,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$level=_ref.level,level=_ref$level===void 0?3:_ref$level,elementType=_ref.elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var semanticLevel=elementType&&parseInt(elementType.split('h')[1]);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Heading/* Heading */.D,Object.assign({level:semanticLevel||level,className:(0,clsx/* default */.A)([Heading_module.h1,Heading_module.h2,Heading_module.h3,Heading_module.h4,Heading_module.h5,Heading_module.h6][level-1],className)},isExpressive&&{'data-expressive':true},rest,{children:children}));};

/***/ }),

/***/ 34704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Label)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var dist_Label = __webpack_require__(21704);
;// ./packages/components/src/label/Label.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Label_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--font-size-30":"1rem","--line-height-30":"1.25rem","--text-disabled":"light-dark(#bfbfbf, #525252)","labelBase":"labelBase_BRgo"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/Label.tsx
var _excluded=["children","className","elementType"];var DEFAULT_ELEMENT='label';var Label=function Label(_ref){var children=_ref.children,className=_ref.className,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var labelProps=Object.assign({className:(0,clsx/* default */.A)(Label_module.labelBase,className),elementType:elementType||DEFAULT_ELEMENT},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Label/* Label */.J,Object.assign({},labelProps,{children:children}));};

/***/ }),

/***/ 56636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ LinkButton)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(20454);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var Link = __webpack_require__(73099);
;// ./packages/components/src/link-button/LinkButton.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const LinkButton_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--font-size-30":"1rem","--breakpoint-sm":"(max-width: 767px)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--button-border-secondary":"light-dark(light-dark(#143c50, #2e7ca5), #f2f2f2)","--text-on-color":"light-dark(#ffffff, #ffffff)","--button-background-primary-hover":"light-dark(#25607f, #25607f)","--button-background-primary-active":"light-dark(#2e7ca5, #143c50)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--button-background-disabled":"light-dark(#f2f2f2, #262626)","--text-disabled":"light-dark(#bfbfbf, #525252)","--text-tertiary":"light-dark(#143c50, #f2f2f2)","--border-tertiary":"light-dark(#143c50, #2e7ca5)","--button-background-secondary":"light-dark(#ffffff, #171717)","--button-background-secondary-hover":"light-dark(#e6e6e6, #212121)","--button-background-secondary-active":"light-dark(#d9d9d9, #262626)","--border-disabled":"light-dark(#bfbfbf, #525252)","--button-background-tertiary-hover":"light-dark(#e6e6e6, #212121)","--button-background-tertiary-active":"light-dark(#d9d9d9, #262626)","--button-background-danger":"light-dark(#e62323, #e62323)","--button-background-danger-hover":"light-dark(#bc1d1d, #bc1d1d)","--button-background-danger-active":"light-dark(#7d1313, #7d1313)","--white":"#ffffff","--icon-secondary":"light-dark(#525252, #a6a6a6)","--button-background-icon-hover":"light-dark(rgba(0 0 0 / 10%), rgba(255 255 255 / 10%))","--icon-tertiary":"light-dark(#143c50, #f2f2f2)","--size-50":"0.625rem","--size-70":"0.875rem","--size-80":"1rem","linkButton":"linkButton_DlJV","secondary":"secondary_aNB6","icon":"icon_g3pu","tertiary":"tertiary_tl3f","danger":"danger_qkvT","iconBtn":"iconBtn_Ngss","iconLeft":"iconLeft_r90N","fullwidth":"fullwidth_yUSG","medium":"medium_St93","button":"button_CzNs"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
var square_arrow_out_up_right = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(60250);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(87677);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/link-button/LinkButton.tsx
'use client';var _excluded=["children","variant","fullwidth","icon","iconPlacement","className","as","size"];/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */var LinkButton=function LinkButton(_ref){var children=_ref.children,variant=_ref.variant,fullwidth=_ref.fullwidth,IconComponent=_ref.icon,iconPlacement=_ref.iconPlacement,className=_ref.className,as=_ref.as,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||Link/* Link */.N;var Icon=function Icon(_ref2){var rest=Object.assign({},((0,objectDestructuringEmpty/* default */.A)(_ref2),_ref2));if(IconComponent)return/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,Object.assign({},rest));if(rest.target==='_blank')return/*#__PURE__*/(0,jsx_runtime.jsx)(square_arrow_out_up_right/* default */.A,Object.assign({},rest));if(iconPlacement==='left')return/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_left/* default */.A,Object.assign({},rest));return/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,Object.assign({},rest));};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,Object.assign({className:(0,clsx/* default */.A)(LinkButton_module.linkButton,variant==='primary'&&LinkButton_module.primary,variant==='secondary'&&LinkButton_module.secondary,variant==='tertiary'&&LinkButton_module.tertiary,variant==='danger'&&LinkButton_module.danger,variant==='icon'&&LinkButton_module.iconBtn,size==='medium'&&LinkButton_module.medium,fullwidth&&LinkButton_module.fullwidth,iconPlacement==='left'&&LinkButton_module.iconLeft,className)},rest,{children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{size:20,className:LinkButton_module.icon})]}));};

/***/ }),

/***/ 19615:
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

/***/ 46090:
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
/* harmony export */   windowSizes: () => (/* binding */ windowSizes),
/* harmony export */   zIndex: () => (/* binding */ zIndex)
/* harmony export */ });
var baseColors={black:'#000000',white:'#ffffff',blackHover:'#0d0d0d',whiteHover:'#e6e6e6',gray10:'#f2f2f2',gray20:'#e6e6e6',gray30:'#d9d9d9',gray40:'#cccccc',gray50:'#bfbfbf',gray60:'#b3b3b3',gray70:'#a6a6a6',gray80:'#999999',gray90:'#8c8c8c',gray100:'#808080',gray110:'#737373',gray120:'#666666',gray130:'#5d5d5d',gray140:'#525252',gray150:'#474747',gray160:'#383838',gray170:'#333333',gray180:'#262626',gray190:'#212121',gray200:'#171717',blue10:'#eaf2f6',blue20:'#d5e5ed',blue40:'#abcbdb',blue50:'#94BCD1',blue60:'#82b0c9',blue70:'#6CA3C0',blue80:'#5897b8',blue90:'#4289ad',blue100:'#2e7ca5',blue110:'#2C7399',blue120:'#29698C',blue130:'#25607f',blue150:'#143c50',purple80:'#b46ab4',purple110:'#954b95',red100:'#b90835',signalBlue10:'#eaf2f6',signalBlue100:'#0066cc',signalGreen20:'#d5f2d9',signalGreen30:'#bae5c5',signalGreen100:'#008d3c',signalYellow10:'#fff8e1',signalYellow100:'#fdb813',signalRed10:'#ffefef',signalRed20:'#ffdfdf',signalRed30:'#fcc8c8',signalRed40:'#f9b0b0',signalRed50:'#f69999',signalRed60:'#f38181',signalRed70:'#ef6a6a',signalRed80:'#eb4e4e',signalRed90:'#e93b3b',signalRed100:'#e62323',signalRed110:'#d12020',signalRed120:'#bc1d1d',signalRed130:'#a71919',signalRed140:'#921616',signalRed150:'#7d1313',signalRed160:'#691010',signalRed170:'#540d0d',signalRed180:'#3f0a0a',signalRed190:'#2a0606',signalRed200:'#150303'};var typography={fontFamily:'"Inter", sans-serif',lineHeight10:1,// 16px
lineHeight20:1.125,// 18px (18/16)
lineHeight30:1.25,// 20px (20/16)
lineHeight40:1.375,// 22px (22/16)
lineHeight50:1.5,// 24px (24/16)
lineHeight60:1.75,// 28px (28/16)
lineHeight70:2,// 32px (32/16)
lineHeight80:2.25,// 36px (36/16)
lineHeight90:2.5,// 40px (40/16)
lineHeight100:2.75,// 44px (44/16)
fontSize10:'0.75rem',// 12px (12/16)
fontSize20:'0.875rem',// 14px (14/16)
fontSize30:'1rem',// 16px (16/16)
fontSize40:'1.125rem',// 18px (18/16)
fontSize50:'1.25rem',// 20px (20/16)
fontSize60:'1.5rem',// 24px (24/16)
fontSize70:'1.75rem',// 28px (28/16)
fontSize80:'2rem',// 32px (32/16)
fontSize90:'2.25rem',// 36px (36/16)
fontSize100:'2.625rem',// 42px (40/16)
weightThin:100,weightExtraLight:200,weightLight:300,weightRegular:400,weightMedium:500,weightSemiBold:600,weightBold:700,weightExtraBold:800,weightBlack:900};var spacing={'10':'0.125rem',// 2px
'20':'0.25rem',// 4px
'30':'0.5rem',// 8px
'40':'0.75rem',// 12px
'50':'1rem',// 16px
'60':'1.5rem',// 24px
'70':'2rem',// 32px
'80':'2.5rem',// 40px
'90':'3rem',// 48px
'100':'4rem',// 64px
'110':'5rem',// 80px
'120':'6rem'// 96px
};var states={focus:'0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)'};var transitions={slow:'500ms',normal:'300ms',fast:'250ms'};var windowSizes={md:768,lg:1200,xl:1440};var breakpoints={sm:"(max-width: "+(windowSizes.md-1)+"px)",md:"(min-width: "+windowSizes.md+"px)",lg:"(min-width: "+windowSizes.lg+"px)",xl:"(min-width: "+windowSizes.xl+"px)",forcedColorsMode:'(forced-colors: active)',darkMode:'(prefers-color-scheme: dark)',prefersReducedMotion:'(prefers-reduced-motion: reduced)'};var semantic={background:"light-dark("+baseColors.white+", "+baseColors.gray200+")",backgroundHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",backgroundInverse:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",layer01:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",layerHover01:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",layerSelected01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",layerSelectedHover01:"light-dark("+baseColors.gray40+", "+baseColors.gray150+")",layer02:"light-dark("+baseColors.white+", "+baseColors.gray160+")",layerHover02:"light-dark("+baseColors.whiteHover+", "+baseColors.gray150+")",layerSelected02:"light-dark("+baseColors.gray30+", "+baseColors.gray140+")",layerSelectedHover02:"light-dark("+baseColors.gray40+", "+baseColors.gray130+")",layerAccent01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",layerAccentHover01:"light-dark("+baseColors.gray40+", "+baseColors.gray150+")",layerAccentSelected01:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",layerAccent02:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",layerAccentHover02:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",layerAccentSelected02:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",brandPrimary:"light-dark("+baseColors.red100+", "+baseColors.red100+")",borderPrimary:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",borderSecondary:"light-dark("+baseColors.gray110+", "+baseColors.gray90+")",borderSubtle:"light-dark("+baseColors.gray50+", "+baseColors.gray160+")",borderTertiary:"light-dark("+baseColors.blue150+", "+baseColors.blue100+")",borderDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",field01:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",fieldHover01:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",fieldActive01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",field02:"light-dark("+baseColors.white+", "+baseColors.gray160+")",fieldHover02:"light-dark("+baseColors.whiteHover+", "+baseColors.gray150+")",fieldActive02:"light-dark("+baseColors.gray30+", "+baseColors.gray140+")",fieldDisabled:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",fieldSkeleton:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",iconPrimary:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",iconSecondary:"light-dark("+baseColors.gray140+", "+baseColors.gray70+")",iconTertiary:"light-dark("+baseColors.blue150+", "+baseColors.gray10+")",iconInverse:"light-dark("+baseColors.white+", "+baseColors.gray200+")",iconOnColor:"light-dark("+baseColors.white+", "+baseColors.white+")",iconDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",iconSuccess:"light-dark("+baseColors.signalGreen100+", "+baseColors.signalGreen100+")",iconInfo:"light-dark("+baseColors.signalBlue100+", "+baseColors.signalBlue100+")",iconWarning:"light-dark("+baseColors.signalRed100+", "+baseColors.signalRed100+")",iconImportant:"light-dark("+baseColors.signalYellow100+", "+baseColors.signalYellow100+")",linkEnabled:"light-dark("+baseColors.blue120+", "+baseColors.blue70+")",linkHover:"light-dark("+baseColors.blue150+", "+baseColors.blue50+")",linkPressed:"light-dark("+baseColors.gray200+", "+baseColors.blue40+")",linkVisited:"light-dark("+baseColors.purple110+", "+baseColors.purple80+")",supportBorderSuccess:"light-dark("+baseColors.signalGreen100+", "+baseColors.signalGreen100+")",supportBorderInfo:"light-dark("+baseColors.signalBlue100+", "+baseColors.signalBlue100+")",supportBorderImportant:"light-dark("+baseColors.signalYellow100+", "+baseColors.signalYellow100+")",supportBorderWarning:"light-dark("+baseColors.signalRed100+", "+baseColors.signalRed100+")",supportBackgroundSuccess:"light-dark("+baseColors.signalGreen20+", "+baseColors.gray180+")",supportBackgroundSuccessHover:"light-dark("+baseColors.signalGreen30+", "+baseColors.gray170+")",supportBackgroundInfo:"light-dark("+baseColors.signalBlue10+", "+baseColors.gray180+")",supportBackgroundImportant:"light-dark("+baseColors.signalYellow10+", "+baseColors.gray180+")",supportBackgroundWarning:"light-dark("+baseColors.signalRed20+", "+baseColors.gray180+")",supportBackgroundWarningHover:"light-dark("+baseColors.signalRed30+", "+baseColors.gray170+")",textPrimary:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",textSecondary:"light-dark("+baseColors.gray140+", "+baseColors.gray70+")",textTertiary:"light-dark("+baseColors.blue150+", "+baseColors.gray10+")",textOnColor:"light-dark("+baseColors.white+", "+baseColors.white+")",textInverse:"light-dark("+baseColors.gray10+", "+baseColors.gray200+")",textDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",textWarning:"light-dark("+baseColors.signalRed100+", "+baseColors.signalRed80+")",textPlaceholder:"light-dark("+baseColors.gray70+", "+baseColors.gray140+")",buttonBackgroundPrimary:"light-dark("+baseColors.blue150+", "+baseColors.blue100+")",buttonBackgroundPrimaryHover:"light-dark("+baseColors.blue130+", "+baseColors.blue130+")",buttonBackgroundPrimaryActive:"light-dark("+baseColors.blue100+", "+baseColors.blue150+")",buttonBackgroundSecondary:"light-dark("+baseColors.white+", "+baseColors.gray200+")",buttonBackgroundSecondaryHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",buttonBackgroundSecondaryActive:"light-dark("+baseColors.gray30+", "+baseColors.gray180+")",buttonBackgroundTertiaryHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",buttonBackgroundTertiaryActive:"light-dark("+baseColors.gray30+", "+baseColors.gray180+")",buttonBackgroundDanger:"light-dark("+baseColors.signalRed100+", "+baseColors.signalRed100+")",buttonBackgroundDangerHover:"light-dark("+baseColors.signalRed120+", "+baseColors.signalRed120+")",buttonBackgroundDangerActive:"light-dark("+baseColors.signalRed150+", "+baseColors.signalRed150+")",buttonBackgroundDisabled:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",buttonBackgroundSkeleton:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",buttonBorderSecondary:"light-dark("+baseColors.blue150+", "+baseColors.gray10+")",logoPrimary:"light-dark("+baseColors.red100+", "+baseColors.white+")",menuItemBackgroundHover:"light-dark("+baseColors.gray20+", "+baseColors.gray190+")",menuItemBackgroundSelected:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")"};var zIndex={base:1,above:10,modal:1000,toast:1100,skipToContent:1200};

/***/ }),

/***/ 43249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--layer-01":"light-dark(#f2f2f2, #262626)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--normal-transition":"300ms","--text-primary":"light-dark(#171717, #f2f2f2)","--fast-transition":"250ms","--border-secondary":"light-dark(#737373, #8c8c8c)","--support-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--support-border-success":"light-dark(#008d3c, #008d3c)","--support-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--support-border-warning":"light-dark(#e62323, #e62323)","--icon-success":"light-dark(#008d3c, #008d3c)","--icon-warning":"light-dark(#e62323, #e62323)","--support-background-success-hover":"light-dark(#bae5c5, light-dark(#e6e6e6, #333333))","--support-background-warning-hover":"light-dark(#fcc8c8, light-dark(#e6e6e6, #333333))","--border-disabled":"light-dark(#bfbfbf, #525252)","--text-disabled":"light-dark(#bfbfbf, #525252)","--layer-02":"light-dark(#ffffff, #383838)","--background":"light-dark(#ffffff, #171717)","root":"root_dwc1","contained":"contained_snuo","item":"item_EcMn","success":"success_djlE","warning":"warning_tBhi","uncontained":"uncontained_kQy1","content":"content_eG9O","triggerButton":"triggerButton_v7ly","trigger":"trigger_H4x6","triggerMainContent":"triggerMainContent_lUNS","triggerText":"triggerText_v8dS","chevronIcon":"chevronIcon_mkt7","statusIcon":"statusIcon_PzPO","panel":"panel_aCgP","hasBackground":"hasBackground_K0Q9","header":"header_KTZ_"});

/***/ }),

/***/ 16025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--text-disabled":"light-dark(#bfbfbf, #525252)","--border-primary":"light-dark(#171717, #f2f2f2)","--border-disabled":"light-dark(#bfbfbf, #525252)","--breakpoint-sm":"(max-width: 767px)","--support-border-warning":"light-dark(#e62323, #e62323)","--icon-on-color":"light-dark(#ffffff, #ffffff)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--button-background-primary-active":"light-dark(#2e7ca5, #143c50)","--button-background-primary-hover":"light-dark(#25607f, #25607f)","--field-disabled":"light-dark(#f2f2f2, #262626)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--line-height-30":"1.25rem","wrap":"wrap_YzPY","checkboxInner":"checkboxInner_Nam1","checkbox":"checkbox_J2GB","checkboxGroup":"checkboxGroup_iAq9"});

/***/ }),

/***/ 55809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--breakpoint-md":"(min-width: 768px)","--breakpoint-lg":"(min-width: 1200px)","--breakpoint-xl":"(min-width: 1440px)","container":"container_M2rG","flex":"flex_UojW","fluid":"fluid_lF5E","col":"col_Taxb","col-1":"col-1_z0bQ","col-2":"col-2_HAuY","col-3":"col-3_oSCH","col-4":"col-4_eIG4","col-5":"col-5_JlYB","col-6":"col-6_dZDY","col-7":"col-7_UoF_","col-8":"col-8_zyia","col-9":"col-9_H77l","col-10":"col-10_zbp5","col-11":"col-11_N7LS","col-12":"col-12_HChu","col-auto":"col-auto_JGok","offset-1":"offset-1_e_Jy","offset-2":"offset-2_p5mN","offset-3":"offset-3_Dz4V","offset-4":"offset-4_Uwlu","offset-5":"offset-5_DYvi","offset-6":"offset-6_pWn0","offset-7":"offset-7_iSDK","offset-8":"offset-8_RIDq","offset-9":"offset-9_Unq7","offset-10":"offset-10_OUtT","offset-11":"offset-11_ySZ3"});

/***/ }),

/***/ 63899:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ $a049562f99e7db0e$export$eb2fcfdbd7ba97d4),
/* harmony export */   t: () => (/* binding */ $a049562f99e7db0e$export$f9c6924e160136d1)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5933);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32217);
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


const $a049562f99e7db0e$export$f9c6924e160136d1 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $a049562f99e7db0e$export$eb2fcfdbd7ba97d4 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Group(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, $a049562f99e7db0e$export$f9c6924e160136d1);
    let { isDisabled: isDisabled, isInvalid: isInvalid, onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_2__/* .useHover */ .M)({
        onHoverStart: onHoverStart,
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd,
        isDisabled: isDisabled
    });
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .useFocusRing */ .o)({
        within: true
    });
    isDisabled !== null && isDisabled !== void 0 ? isDisabled : isDisabled = !!props['aria-disabled'] && props['aria-disabled'] !== 'false';
    isInvalid !== null && isInvalid !== void 0 ? isInvalid : isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useRenderProps */ .Sl)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocusWithin: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: isDisabled,
            isInvalid: isInvalid
        },
        defaultClassName: 'react-aria-Group'
    });
    var _props_role, _props_slot;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("div", {
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_4__/* .mergeProps */ .v)(otherProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        role: (_props_role = props.role) !== null && _props_role !== void 0 ? _props_role : 'group',
        slot: (_props_slot = props.slot) !== null && _props_slot !== void 0 ? _props_slot : undefined,
        "data-focus-within": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-invalid": isInvalid || undefined
    }, renderProps.children);
});



//# sourceMappingURL=Group.module.js.map


/***/ })

}]);