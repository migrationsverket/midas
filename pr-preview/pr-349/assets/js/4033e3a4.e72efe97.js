"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6238],{

/***/ 48249:
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
  metadata: () => (/* reexport */ site_docs_components_textfield_mdx_403_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-textfield-mdx-403.json
const site_docs_components_textfield_mdx_403_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/textfield","title":"TextField","description":"Använd ett textfält när användaren ska fylla i en rad med text.","source":"@site/docs/components/textfield.mdx","sourceDirName":"components","slug":"/components/textfield","permalink":"/pr-preview/pr-349/components/textfield","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"TextField","description":"Använd ett textfält när användaren ska fylla i en rad med text.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 1 modules
var propsTable = __webpack_require__(38355);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx
var TextField = __webpack_require__(69240);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(71372);
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










const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      TextField: TextField/* TextField */.A_
    },
    ...props,
    children: `<TextField
        label="Etikett"
        description="Beskrivning"
    />`
  });
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
  "value": "Lösenord",
  "id": "lösenord",
  "level": 3
}, {
  "value": "Validering",
  "id": "validering",
  "level": 2
}, {
  "value": "Personnummer",
  "id": "personnummer",
  "level": 3
}, {
  "value": "Dossiernummer",
  "id": "dossiernummer",
  "level": 3
}, {
  "value": "Egen validering",
  "id": "egen-validering",
  "level": 3
}, {
  "value": "Egna felmeddelanden",
  "id": "egna-felmeddelanden",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 2
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
      name: "Textfield",
      friendlyName: "Inmatningsfält, textfält, nummerfält, lösenordsfält",
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/TextField.html"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inmatningsfält när användaren ska fylla i kortare information, tex namn, personnummer eller epostadress. För längre inmatning används ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/pr-preview/pr-349/components/textarea",
        children: "TextArea"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideCode: true
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
        children: "import { TextField } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lösenord",
      children: "Lösenord"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sätt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "type=\"password\""
      }), " för att kunna visa och dölja inmatad text."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        TextField: TextField/* TextField */.A_
      },
      children: `<TextField
  type="password"
  name="pw"
  label="Skriv in ditt lösenord"
  autoComplete="off"
/>
`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validering",
      children: "Validering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TextField validerar automatiskt på ", (0,jsx_runtime.jsx)(_components.code, {
        children: "type"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isRequired"
      }), " eller ett eget ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pattern"
      }), " samt våra fördefinerade mönster i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validationType"
      }), ". Komponenten innehåller vissa förbestämda valideringsmönster för typiska format. Dessa läggs till löpande efter förfrågan och behov. Valideringen är alltid väldigt förlåtande mot användaren och accepterar alla möjliga versioner av ett formats regler. Dessa förklaras i detalj nedan."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        TextField: TextField/* TextField */.A_
      },
      children: `<TextField
  label="Skriv in din e-post"
  description="Obligatorisk"
  isRequired
  errorMessage="Felaktig e-postadress"
  type="email"
/>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "personnummer",
      children: "Personnummer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd egenskapen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validationType=\"ssn\""
      }), " för att slå på vår validering av personnummer."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Följande RegEx används ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01]))(?:[-+ ]?\\d{4})?$"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Frivilliga sekelsiffor: 19 eller 20 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(?:19:20)?"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verifierar att det är minst två siffror i början av personnumret (ÅÅ)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verifierar att MM är 01 - 12 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(?:0[1-9]|1[0-2])"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verifierar att DD är 01 - 31 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(?:0[1-9]|[12]\\\\d|3[01])"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tillåter avgränsare: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "blanksteg"
        }), " eller ingen, samt."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verifierar att det är fyra siffror efter avgränsaren ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(?:[-+ ]?\\\\d{4})?"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        TextField: TextField/* TextField */.A_
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dossiernummer",
      children: "Dossiernummer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd egenskapen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validationType=\"dossnr\""
      }), " för att slå på vår validering av dossiernummer.\nFöljande RegEx används ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "^(\\\\d{1,2}\\\\+\\\\d{6}-\\\\d{1,2}$|\\\\d{1,2}-\\\\d{6}(/\\\\d{1,2})?$|\\\\d{1,2}\\\\d{6}$|\\\\d{6,8}$)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["En eller två siffror ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\d{1,2}"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Följt av antingen ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), " och sex siffror, följt av ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-"
        }), " och en eller två siffror ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\\\+\\\\d{6}-\\\\d{1,2}"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Eller följt av ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-"
        }), " och sex siffror, eventuellt följt av ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/"
        }), " och en eller två siffror ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-\\\\d{6}(/\\\\d{1,2})?"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Eller en eller två siffror följt av sex siffror ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\d{1,2}\\d{6}"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Eller sex till åtta siffror ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\d{6,8}"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        TextField: TextField/* TextField */.A_
      },
      children: `<TextField
  type="text"
  name="dossnr"
  label="Dossiernummer"
  validationType="dossnr"
  errorMessage="Fel format för ett dossiernummer"
  autoComplete="off"
/>
`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "egen-validering",
      children: "Egen validering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Det går också att definiera en egen funktion för validering:"
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        TextField: TextField/* TextField */.A_
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "TextField"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
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

/***/ 69240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A_: () => (/* binding */ TextField),
/* harmony export */   oi: () => (/* binding */ InputWrapper)
/* harmony export */ });
/* unused harmony exports ssnRegEx, dossNrRegEx */
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32945);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79950);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27279);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21704);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44300);
/* harmony import */ var _TextField_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53502);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86559);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["label","description","errorMessage","validationType","validate","maxLength","showCounter","className"];var TextField=function TextField(_ref){var _ref2,_props$defaultValue;var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,validationType=_ref.validationType,validate=_ref.validate,maxLength=_ref.maxLength,showCounter=_ref.showCounter,className=_ref.className,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState((_ref2=(_props$defaultValue=props.defaultValue)!=null?_props$defaultValue:props.value)!=null?_ref2:''),value=_React$useState[0],setValue=_React$useState[1];var handleChange=function handleChange(event){var newValue=event.target.value;setValue(newValue);};var validateInput=function validateInput(value){if(validationType==='ssn')return ssnRegEx.test(value)?null:'Felaktigt personnummer';if(validationType==='dossnr')return dossNrRegEx.test(value)?null:'Felaktigt dossiernummer';if(validationType instanceof RegExp)return new RegExp(validationType).test(value)?null:errorMessage==null?void 0:errorMessage.toString();if(maxLength)return maxLength&&value.length>maxLength?"Du har angett "+(value.length-maxLength)+" tecken f\xF6r mycket. F\xE4ltet \xE4r begr\xE4nsat till "+maxLength+" tecken.":null;if(validate)return validate(value);return true;};var Count=function Count(){if(maxLength){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.count,value.length>maxLength&&_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.countExceeded),children:[value.length," / ",maxLength]});}if(showCounter){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.count,children:value.length});}return null;};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_5__/* .TextField */ .A,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.inputField,className),validate:validateInput},props,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(InputWrapper,{label:label,description:description,errorMessage:errorMessage,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Count,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.wrap,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_6__/* .Input */ .p,{type:props.type,className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.input,onChange:handleChange,onBlur:handleChange}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PasswordField,{type:props.type,input:value})]})]})}));};var PasswordField=function PasswordField(_ref3){var type=_ref3.type,input=_ref3.input;var _React$useState2=react__WEBPACK_IMPORTED_MODULE_0__.useState(false),showPassword=_React$useState2[0],setShowPassword=_React$useState2[1];if(type==='password')return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[showPassword&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .E,{slot:"description",className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.passwordText,children:input}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .$,{variant:"tertiary",onPress:function onPress(){return setShowPassword(!showPassword);},className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.passwordButton,children:showPassword?'Dölj':'Visa'})]});return null;};var InputWrapper=function InputWrapper(_ref4){var label=_ref4.label,description=_ref4.description,errorMessage=_ref4.errorMessage,children=_ref4.children;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.inputWrapper,children:[label&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_9__/* .Label */ .J,{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.label,children:label}),description&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .E,{slot:"description",className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.text,children:description}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_10__/* .FieldError */ .b,{"data-testid":"fieldError",className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fieldError,children:errorMessage}),children]});};var ssnRegEx=new RegExp('^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$');var dossNrRegEx=new RegExp('^(\\d{1,2}\\+\\d{6}-\\d{1,2}$|\\d{1,2}-\\d{6}(/\\d{1,2})?$|\\d{1,2}\\d{6}$|\\d{6,8}$)');

/***/ }),

/***/ 53502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--border-strong":"light-dark(#171717, #f2f2f2)","--border-invalid":"light-dark(#e62323, #e62323)","--text-disabled":"light-dark(#bfbfbf, #525252)","--text-invalid":"light-dark(#e62323, #e62323)","--field-disabled":"light-dark(#f2f2f2, #262626)","--focus":"0 0 0 2px white, 0 0 0 4px black","inputField":"inputField_NRYV","inputWrapper":"inputWrapper_NR0B","label":"label_UgTd","text":"text_E1GG","fieldError":"fieldError_GOHN","passwordText":"passwordText_gBIs","count":"count_PsfX","countExceeded":"countExceeded_hrAA","input":"input_g6A6","wrap":"wrap_ljmz","passwordButton":"passwordButton_kacG"});

/***/ })

}]);