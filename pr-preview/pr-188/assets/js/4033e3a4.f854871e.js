"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6238],{

/***/ 55988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_textfield_mdx_403_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-textfield-mdx-403.json
const site_docs_components_textfield_mdx_403_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/textfield","title":"TextField","description":"Använd ett textfält när användaren ska fylla i en rad med text.","source":"@site/docs/components/textfield.mdx","sourceDirName":"components","slug":"/components/textfield","permalink":"/pr-preview/pr-188/components/textfield","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"TextField","description":"Använd ett textfält när användaren ska fylla i en rad med text.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
// EXTERNAL MODULE: ./packages/grid/src/index.ts + 4 modules
var grid_src = __webpack_require__(17172);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(29511);
;// ./apps/docs/docs/components/textfield.mdx


const frontMatter = {
	title: 'TextField',
	description: 'Använd ett textfält när användaren ska fylla i en rad med text.',
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
  "value": "Validering",
  "id": "validering",
  "level": 2
}, {
  "value": "Egen validering",
  "id": "egen-validering",
  "level": 3
}, {
  "value": "Egna felmeddelanden",
  "id": "egna-felmeddelanden",
  "level": 3
}, {
  "value": "Personnummer",
  "id": "personnummer",
  "level": 3
}, {
  "value": "Lösenord",
  "id": "lösenord",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "Desktop",
  "id": "desktop",
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
      name: 'Textfield',
      friendlyName: 'Inmatningsfält, textfält, nummerfält, lösenordsfält',
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/TextField.html"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ett inmatningsfält när användaren ska fylla i kortare information, tex namn, personnummer eller epostadress. För längre inmatning används ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pr-preview/pr-188/components/textarea",
        children: "TextArea"
      }), "."]
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
            children: "npm install @midas-ds/textfield\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/textfield\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/textfield\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { TextField } from '@midas-ds/textfield'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        TextField: src/* TextField */.A_
      },
      children: `<TextField 
  label={'Etikett'}
  description={'Beskrivning'}
/>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validering",
      children: "Validering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TextField validerar automatiskt på ", (0,jsx_runtime.jsx)(_components.code, {
        children: "type"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isRequired"
      }), " eller ett eget ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pattern"
      }), ". Vi erbjuder även färdiga valideringar på typiska scenarion, mer om det längre ner."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        TextField: src/* TextField */.A_
      },
      children: `<TextField
  label="Skriv in din e-post"
  description="Obligatorisk"
  isRequired
  errorMessage="Felaktig e-postadress"
  type="email"
/>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "egen-validering",
      children: "Egen validering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Det går också att definiera en egen funktion för validering:"
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        TextField: src/* TextField */.A_
      },
      children: `<TextField
  label="Skriv in frukt"
  errorMessage="Du måste skriva 'frukt'!"
  validate={(value) => (value === 'frukt' ? true : 'Du måste skriva "frukt"!')}
/>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "egna-felmeddelanden",
      children: "Egna felmeddelanden"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponenten har flertalet inbyggda valideringsmetoder beroende på vad som händer. Dessa går att justera genom att skicka in olika felmeddelanden bereoende på fel."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<TextField\n  label='Skriv in frukt'\n  errorMessage=\"Du måste skriva 'frukt'!\"\n  isRequired\n  validate={value => (value === 'frukt' ? true : 'Du måste skriva \"frukt\"')}\n  errorMessage={validation => {\n    if (validation.validationDetails.valueMissing) return 'Det måste finnas en frukt.'\n    if (validation.validationDetails.badInput) return 'Det där är inte en frukt.'\n    if (validation.validationDetails.customError) return 'Du måste skriva frukt.'\n\n    // Det finns flertalet typer på validationDetails\n    // if (validation.validationDetails.patternMismatch) return \"Det där ser inte ut som en frukt.\";\n    // if (validation.validationDetails.rangeOverflow) return \"Nu blev det nog för många frukter.\";\n    // med flera\n\n    return 'Jag vet inte riktigt vad som blev fel men jag vill ha en frukt.'\n  }}\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Läs mer om validering i ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/forms.html#validation",
        children: "React Arias dokumentation"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "personnummer",
      children: "Personnummer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd egenskapen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validationType=\"ssn\""
      }), " för att slå på vår validering av personnummer. Valideringen är väldigt förlåtande mot användaren och accepterar alla möjliga versioner av ett giltigt personnummer."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Följande RegEx används ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01]))(?:[-+ ]?\\d{4})?$"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Frivilliga sekelsiffor: 19 eller 20 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(?:19:20)?"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verifierar att det är minst två siffror i början av personnumret (ÅÅ)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verifierar att MM är 01 - 12 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(?:0[1-9]|1[0-2])"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verifierar att DD är 01 - 31 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(?:0[1-9]|[12]\\\\d|3[01])"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tillåter avgränsare: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "blanksteg"
        }), " eller ingen, samt"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verifierar att det är fyra siffror efter avgränsaren ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(?:[-+ ]?\\\\d{4})?"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        TextField: src/* TextField */.A_
      },
      children: `<TextField 
  type="text"
  name="ssn"
  label="Personnummer"
  validationType="ssn"
  errorMessage="Fel format för ett personnummer"
  autoComplete="off"
/>
`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lösenord",
      children: "Lösenord"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sätt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "type={'password'}"
      }), " för att kunna visa och dölja inmatad text."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        TextField: src/* TextField */.A_
      },
      children: `<TextField 
  type="password" 
  name="pw" 
  label="Skriv in ditt lösenord" 
  autoComplete="off"
/>
`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "desktop",
      children: "Desktop"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Anpassa längden på inmatningsfält, tex med ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pr-preview/pr-188/components/grid",
        children: "Grid"
      }), " eller ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pr-preview/pr-188/components/flex",
        children: "Flex"
      }), ", så att det matchar förväntad längd på det användaren ska mata in. Ett svenskt postnummer är alltid 5 siffror och då bör fältet vara kort medan ett fält där användaren ska fylla i alla sina namn behöver vara långt"]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Grid: grid_src/* Grid */.x,
        TextField: src/* TextField */.A_,
        GridItem: grid_src/* GridItem */.E
      },
      children: `<Grid fluid={true}>
  <GridItem col={2}>
    <TextField name={'nameExample'} label={'Postnummer'} description="XXX XX" /> 
  </GridItem>
  <GridItem col={8}>
    <TextField name={'nameExample'} label={'Fyll i alla dina namn'} /> 
  </GridItem>
</Grid>`
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

/***/ 17172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: () => (/* reexport */ Grid),
  E: () => (/* reexport */ GridItem)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/grid/src/lib/Grid.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Grid_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","mdBreakpoint":"(min-width: 768px)","lgBreakpoint":"(min-width: 1200px)","xlBreakpoint":"(min-width: 1440px)","container":"container_lmBC","grid":"grid_mI9C","fluid":"fluid_KIzx","col":"col_kaYV","col-1":"col-1_Y6p8","col-2":"col-2_lCuZ","col-3":"col-3_tBWx","col-4":"col-4_gBWu","col-5":"col-5_sq5b","col-6":"col-6_FKf3","col-7":"col-7_Aug2","col-8":"col-8_enZy","col-9":"col-9_y37e","col-10":"col-10_LlVF","col-11":"col-11_rc_R","col-12":"col-12_svqf","offset-1":"offset-1_GJj8","offset-2":"offset-2_M090","offset-3":"offset-3_B_Bj","offset-4":"offset-4_uBLN","offset-5":"offset-5_zJ4M","offset-6":"offset-6_C6Yz","offset-7":"offset-7_LlzJ","offset-8":"offset-8_Gxmr","offset-9":"offset-9_ZbLa","offset-10":"offset-10_Z5yB","offset-11":"offset-11__W4d"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/grid/src/lib/Grid.tsx
var _excluded=["children","fluid"];/**
 * Grid baserat på display: grid;
 * Använder grid-template för att bygga rätt antal kolumner per breakpoint.
 *
 * ### Children
 * Använd "grid-column: span $antalKollumner';" för att låta en child växa över flera kolumner.
 */var Grid=function Grid(_ref){var children=_ref.children,fluid=_ref.fluid,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(Grid_module.container,fluid&&Grid_module.fluid,rest.className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Grid_module.grid,children:children})}));};
;// ./packages/grid/src/lib/GridItem.tsx
var GridItem_excluded=["children","col"];var GridItem=function GridItem(_ref){var children=_ref.children,col=_ref.col,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,GridItem_excluded);// Convert numeric values to string if necessary
var colClass=col?"col-"+col:'';return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(Grid_module.col,Grid_module[colClass],rest.className)},rest,{children:children}));};
;// ./packages/grid/src/lib/index.ts

;// ./packages/grid/src/index.ts


/***/ })

}]);