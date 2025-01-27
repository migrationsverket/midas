"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5605],{

/***/ 14001:
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
const site_docs_components_checkbox_mdx_1c7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/checkbox","title":"Checkbox","description":"Används för att låta användaren välja inget, ett eller flera alternativ.","source":"@site/docs/components/checkbox.mdx","sourceDirName":"components","slug":"/components/checkbox","permalink":"/pr-preview/pr-208/components/checkbox","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Checkbox","description":"Används för att låta användaren välja inget, ett eller flera alternativ.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 3 modules
var getComponentMetaData = __webpack_require__(32705);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx
var Checkbox = __webpack_require__(38545);
// EXTERNAL MODULE: ./packages/components/src/flex/Flex.tsx
var Flex = __webpack_require__(84065);
// EXTERNAL MODULE: ./packages/components/src/flex/FlexItem.tsx
var FlexItem = __webpack_require__(56176);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(64161);
// EXTERNAL MODULE: ./packages/components/src/checkbox/CheckboxGroup.tsx
var CheckboxGroup = __webpack_require__(39220);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(29511);
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
  "value": "Installation och användning",
  "id": "installation-och-användning",
  "level": 2
}, {
  "value": "Gruppera flera checkboxar",
  "id": "gruppera-flera-checkboxar",
  "level": 3
}, {
  "value": "Etikett och beskrivning",
  "id": "etikett-och-beskrivning",
  "level": 3
}, {
  "value": "Disabled",
  "id": "disabled",
  "level": 3
}, {
  "value": "Validering",
  "id": "validering",
  "level": 3
}, {
  "value": "Readonly och defaultSelected",
  "id": "readonly-och-defaultselected",
  "level": 3
}, {
  "value": "Välj alla",
  "id": "välj-alla",
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
    mermaid: "mermaid",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'Checkbox',
      friendlyName: 'Kryssruta'
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kryssrutor används för att låta användaren välja inget, ett eller flera alternativ. Om det är många alternativ så bör ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pr-preview/pr-208/components/multi-select",
        children: "MultiSelect"
      }), " användas istället."]
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
        children: "import { Checkbox } from '@midas-ds/components'\n;<Checkbox>Jag godkänner villkoren</Checkbox>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Checkbox: Checkbox/* Checkbox */.S,
        Flex: Flex/* Flex */.s,
        FlexItem: FlexItem/* FlexItem */.Z,
        Button: Button/* Button */.$
      },
      children: `<Flex>
  <FlexItem style={{alignSelf: 'center'}}>
    <Checkbox>Jag godkänner villkoren</Checkbox>
  </FlexItem>
  <FlexItem col="auto" style={{display: 'flex', flexFlow: 'row wrap', gap: '0.5rem'}}>
    <Button
      variant='secondary'
    >
      Bakåt
    </Button>
    <Button>Fortsätt</Button>
  </FlexItem>
</Flex>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gruppera-flera-checkboxar",
      children: "Gruppera flera checkboxar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<CheckboxGroup>"
      }), " för att gruppera flera checkboxar som hör samman."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Checkbox: Checkbox/* Checkbox */.S,
        CheckboxGroup: CheckboxGroup/* CheckboxGroup */.$
      },
      children: `<CheckboxGroup
      label='Etikett'
      description='Beskrivande text'
    >
      <Checkbox value='1'>Jag har läst texten</Checkbox>
      <Checkbox value='2'>Jag godkänner villkoren</Checkbox>
      <Checkbox value='3'>Jag är över 20 år gammal</Checkbox>
  </CheckboxGroup>
`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "etikett-och-beskrivning",
      children: "Etikett och beskrivning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Etikett för enskild checkbox sätts i template via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Checkbox>Etikett</Checkbox>"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<CheckboxGroup>"
      }), " har en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "label"
      }), " och en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "desciption"
      }), " för ytterligare förklarande text."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "disabled",
      children: "Disabled"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["När en kryssruta inte är tillämplig i den aktuella situationen ska kryssruta och fältetikett tonas ned via attributet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isDisabled"
      }), " men inte tas bort."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Checkbox: Checkbox/* Checkbox */.S
      },
      children: `<Checkbox
      isDisabled
      isSelected
    >
      Jag har läst texten
  </Checkbox>
`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validering",
      children: "Validering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Används prop ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isInvalid"
      }), " och implementera lämplig logik för att hantera fel och felmeddelanden. Se ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/CheckboxGroup.html#validation",
        children: "React Aria"
      }), "\nför ytterligare referens."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Checkbox: Checkbox/* Checkbox */.S,
        CheckboxGroup: CheckboxGroup/* CheckboxGroup */.$
      },
      children: `<CheckboxGroup
    label="Bekräfta att du är med på tåget"
    errorMessage="Det här ser inte bra ut!"
    isInvalid
  >
    <Checkbox
      value="1"
      isRequired
    >
      Jag har läst texten
    </Checkbox>
    <Checkbox
      value="2"
      isRequired
    >
      Jag godkänner villkoren
    </Checkbox>
</CheckboxGroup>
`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "readonly-och-defaultselected",
      children: "Readonly och defaultSelected"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sätt prop ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isReadonly"
      }), " när användaren inte ska kunna påverka checkboxens tillstånd. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "defaultSelected"
      }), " sätter checkboxen i ett\nvalt läge."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "välj-alla",
      children: "Välj alla"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ibland kan det vara lämligt att inkludera en checkbox för att \"Välja alla\". Denna funktion finns inbyggt i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<CheckboxGroup />"
      }), " via egenskapen: showSelectAll"]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Checkbox: Checkbox/* Checkbox */.S,
        CheckboxGroup: CheckboxGroup/* CheckboxGroup */.$
      },
      children: `<CheckboxGroup
  label={'Välj en frukt'}
  description={'Välj alla eller bara några'}
  showSelectAll
  >
    <Checkbox
      value="1"
      isRequired
    >
      Jag har läst texten
    </Checkbox>
    <Checkbox
      value="2"
      isRequired
    >
      Jag godkänner villkoren
    </Checkbox>
</CheckboxGroup>
`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "val-av-komponent",
      children: "Val av komponent"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD;\n  A[Hur många val ska presenteras för användaren?]:::primary\n  A ---> B[1]:::primary\n  A ---> C[2 - 4]:::primary\n  A ---> D[5 - 10]\n  A ---> E[11 +]\n  B ---> F[Använd Checkbox]:::primary\n  C ---> G[Hur många val kan göras?]:::primary\n  G --->|Flera| F:::primary\n  G --->|Ett| H[Använd Radio]\n  D ---> I[Hur många val kan göras?]\n  I --->|Flera| J[Använd MultiSelect]\n  I --->|Ett| K[Använd Select]\n  E ---> L[Hur många val kan göras?]\n  L -.Flera.-> M[Använd ComboBox multiple]\n  L --->|Ett| N[Använd ComboBox]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Använd inte kryssruta om användaren väntar sig att valet ska få effekt direkt"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Om flera kryssrutor är placerade under varandra, kan det ibland vara lämpligt att användaren kan markera alla kryssrutor\ngenom att klicka i det översta alternativet, ”Alla”, som är placerat direkt ovanför de ordinarie kryssrutorna.\nRutan ska vara avmarkerad tills användaren klickar i den och då ska alla följande rutor och eventuella subrutor markeras.\nOm användaren väljer att avmarkera en post så ska kryssrutan avmarkeras."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Om ”Markera alla”-kryssruta används på en sida med paginerat innehåll så skall endast de kryssrutor som finns på den aktuella sidan väljas."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Fältetikett ska inledas med en stor bokstav och inte följas av punkt."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "checkbox",
      children: "Checkbox"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: 'Checkbox'
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "checkboxgroup",
      children: "CheckboxGroup"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: 'Checkbox'
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

/***/ 38545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98587);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92466);
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
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92466);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63899);
/* harmony import */ var _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16025);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38545);
/* harmony import */ var _textfield__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58637);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["label","description","errorMessage","showSelectAll","children"];var CheckboxGroup=function CheckboxGroup(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,showSelectAll=_ref.showSelectAll,children=_ref.children,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(),isAllSelected=_React$useState[0],setIsAllSelected=_React$useState[1];var ToogleAll=function ToogleAll(){// Get the current state of the checkbox group
var state=react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .CheckboxGroupStateContext */ .pf);// Retrieve all childern
var childValues=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement).map(function(child){return child.props.value;});// Toogle all values
var toggleAll=function toggleAll(){if(isAllSelected!=='all'){setIsAllSelected('all');return state==null?void 0:state.setValue(['toggleAll'].concat(childValues));}setIsAllSelected('none');return state==null?void 0:state.setValue([]);};//listen and change the select all accordingly
react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function(){var _state$value,_state$value2;var amountOfChildren=childValues.length;var totalAmount=childValues.length+1;var currentAmount=(state==null||(_state$value=state.value)==null?void 0:_state$value.length)||0;if(currentAmount===0)setIsAllSelected('none');if(currentAmount>0&&currentAmount<amountOfChildren)setIsAllSelected('some');if(currentAmount!==totalAmount)state==null||state.removeValue('toggleAll');if(currentAmount===amountOfChildren&&!(state!=null&&(_state$value2=state.value)!=null&&_state$value2.includes('toggleAll'))){state==null||state.addValue('toggleAll');setIsAllSelected('all');}// eslint-disable-next-line react-hooks/exhaustive-deps
},[childValues.length,state==null?void 0:state.value]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_5__/* .Checkbox */ .S,{value:"toggleAll",isSelected:isAllSelected==='all',isIndeterminate:isAllSelected==='some',onChange:function onChange(){return toggleAll();},children:"V\xE4lj alla"});};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .CheckboxGroup */ .$Q,Object.assign({className:_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.checkboxGroup},props,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_textfield__WEBPACK_IMPORTED_MODULE_6__/* .InputWrapper */ .oi,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_aria_components__WEBPACK_IMPORTED_MODULE_7__/* .Group */ .Y,{className:_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.wrap,children:[showSelectAll&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToogleAll,{}),children]})})}));};

/***/ }),

/***/ 58637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A_: () => (/* binding */ TextField),
/* harmony export */   oi: () => (/* binding */ InputWrapper)
/* harmony export */ });
/* unused harmony export ssnRegEx */
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32945);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79950);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27279);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21704);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44300);
/* harmony import */ var _TextField_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73413);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64161);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["label","description","errorMessage","validationType","validate","maxCharacters","showCounter"];var TextField=function TextField(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,validationType=_ref.validationType,validate=_ref.validate,maxCharacters=_ref.maxCharacters,showCounter=_ref.showCounter,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(''),value=_React$useState[0],setValue=_React$useState[1];var handleChange=function handleChange(event){var newValue=event.target.value;setValue(newValue);};var validateInput=function validateInput(value){if(validationType==='ssn')return ssnRegEx.test(value)?null:'Felaktigt personnummer';if(validationType instanceof RegExp)return new RegExp(validationType).test(value)?null:errorMessage==null?void 0:errorMessage.toString();if(maxCharacters)return maxCharacters&&value.length>maxCharacters?"Du har angett "+(value.length-maxCharacters)+" tecken f\xF6r mycket. F\xE4ltet \xE4r begr\xE4nsat till "+maxCharacters+" tecken.":null;if(validate)return validate(value);return true;};var Count=function Count(){if(maxCharacters){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.count,value.length>maxCharacters&&_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.countExceeded),children:[value.length," / ",maxCharacters]});}if(showCounter){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.count,children:value.length});}return null;};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_5__/* .TextField */ .A,Object.assign({className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.inputField,validate:validateInput},props,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(InputWrapper,{label:label,description:description,errorMessage:errorMessage,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Count,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.wrap,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_6__/* .Input */ .p,{type:props.type,className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.input,onChange:handleChange,onBlur:handleChange}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PasswordField,{type:props.type,input:value})]})]})}));};var PasswordField=function PasswordField(_ref2){var type=_ref2.type,input=_ref2.input;var _React$useState2=react__WEBPACK_IMPORTED_MODULE_0__.useState(false),showPassword=_React$useState2[0],setShowPassword=_React$useState2[1];if(type==='password')return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[showPassword&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .E,{slot:"description",className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.passwordText,children:input}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .$,{variant:"tertiary",onPress:function onPress(){return setShowPassword(!showPassword);},className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.passwordButton,children:showPassword?'Dölj':'Visa'})]});return null;};var InputWrapper=function InputWrapper(_ref3){var label=_ref3.label,description=_ref3.description,errorMessage=_ref3.errorMessage,children=_ref3.children;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.inputWrapper,children:[label&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_9__/* .Label */ .J,{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.label,children:label}),description&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .E,{slot:"description",className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.text,children:description}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_10__/* .FieldError */ .b,{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fieldError,children:errorMessage}),children]});};var ssnRegEx=new RegExp('^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$');

/***/ }),

/***/ 16025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","black":"#000000","primaryBackground":"#143c50","blue80":"#5897b8","blue130":"#25607f","signalRed10":"#ffdfdf","signalRed100":"#e62323","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","signalRed130":"#b31b1b","white":"#ffffff","gray10":"#f2f2f2","gray40":"#cccccc","gray100":"#808080","gray50":"#bfbfbf","gray20":"#e6e6e6","regularWeight":"400","mediumWeight":"500","smBreakpoint":"(max-width: 767px)","borderSecondary":"#b3b3b3","wrap":"wrap_YzPY","checkboxInner":"checkboxInner_Nam1","checkbox":"checkbox_J2GB","checkboxGroup":"checkboxGroup_iAq9"});

/***/ }),

/***/ 73413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","signalRed10":"#ffdfdf","gray10":"#f2f2f2","gray20":"#e6e6e6","gray50":"#bfbfbf","black":"#000000","signalRed100":"#e62323","mediumWeight":"500","regularWeight":"400","inputText":"#1f1f1f","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","inputField":"inputField_NRYV","inputWrapper":"inputWrapper_NR0B","label":"label_UgTd","text":"text_E1GG","fieldError":"fieldError_GOHN","passwordText":"passwordText_gBIs","count":"count_PsfX","countExceeded":"countExceeded_hrAA","input":"input_g6A6","wrap":"wrap_ljmz","passwordButton":"passwordButton_kacG"});

/***/ })

}]);