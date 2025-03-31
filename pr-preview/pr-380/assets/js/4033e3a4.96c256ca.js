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
const site_docs_components_textfield_mdx_403_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/textfield","title":"TextField","description":"Använd ett textfält när användaren ska fylla i en rad med text.","source":"@site/docs/components/textfield.mdx","sourceDirName":"components","slug":"/components/textfield","permalink":"/pr-preview/pr-380/components/textfield","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"TextField","description":"Använd ett textfält när användaren ska fylla i en rad med text.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx + 4 modules
var TextField = __webpack_require__(350);
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
      TextField: TextField/* TextField */.A
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
        href: "/pr-preview/pr-380/components/textarea",
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
        TextField: TextField/* TextField */.A
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
        TextField: TextField/* TextField */.A
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
        TextField: TextField/* TextField */.A
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
        TextField: TextField/* TextField */.A
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
        TextField: TextField/* TextField */.A
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

/***/ 80554:
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
/* harmony default export */ const FieldError_module = ({"tokens":"\"../theme/tokens.css\"","--text-invalid":"light-dark(#e62323, #e62323)","--font-family":"\"Inter\", sans-serif","fieldError":"fieldError_K9VX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/field-error/FieldError.tsx
var FieldError_FieldError=/*#__PURE__*/react.forwardRef(function(props,ref){var validation=react.useContext(FieldError/* FieldErrorContext */.C);if(!(validation!=null&&validation.isInvalid))return null;return/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,Object.assign({},props,{ref:ref,className:(0,clsx/* default */.A)(FieldError_module.fieldError,props.className)}));});

/***/ }),

/***/ 20143:
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
/* harmony default export */ const Label_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--size-02":"0.875rem","--line-height-02":"1.125rem","--size-03":"1rem","--line-height-03":"1.25rem","--text-disabled":"light-dark(#bfbfbf, #525252)","label-01":"label-01_rWfb","label-02":"label-02_LZ3P"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/Label.tsx
var _excluded=["children","className","variant","elementType"];var DEFAULT_ELEMENT='label';var Label=function Label(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'label-01':_ref$variant,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames={'label-01':Label_module['label-01'],'label-02':Label_module['label-02']};var labelProps=Object.assign({className:(0,clsx/* default */.A)(classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Label/* Label */.J,Object.assign({},labelProps,{children:children}));};

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
/* harmony default export */ const Text_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--size-02":"0.875rem","--size-03":"1rem","--line-height-02":"1.125rem","--line-height-03":"1.25rem","--line-height-04":"1.375rem","--line-height-05":"1.5rem","--text-disabled":"light-dark(#bfbfbf, #525252)","body-01":"body-01_whJM","body-02":"body-02_Xi1v","description":"description_XYgX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","variant","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'body-02':_ref$variant,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames={'body-01':Text_module['body-01'],'body-02':Text_module['body-02']};var textProps=Object.assign({className:(0,clsx/* default */.A)(rest.slot==='description'?Text_module.description:classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

/***/ }),

/***/ 350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TextField)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextFieldBase.tsx + 2 modules
var TextFieldBase = __webpack_require__(5619);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(53502);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/@internationalized/string/dist/LocalizedStringDictionary.mjs
var dist_LocalizedStringDictionary = __webpack_require__(92122);
// EXTERNAL MODULE: ./node_modules/@internationalized/string/dist/LocalizedStringFormatter.mjs
var LocalizedStringFormatter = __webpack_require__(57612);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
;// ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
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
 */var cache=new WeakMap();function getCachedDictionary(strings){var dictionary=cache.get(strings);if(!dictionary){dictionary=new LocalizedStringDictionary(strings);cache.set(strings,dictionary);}return dictionary;}/**
 * Returns a cached LocalizedStringDictionary for the given strings.
 */function useLocalizedStringDictionary(strings,packageName){return packageName&&LocalizedStringDictionary.getGlobalDictionaryForPackage(packageName)||getCachedDictionary(strings);}/**
 * Provides localized string formatting for the current locale. Supports interpolating variables,
 * selecting the correct pluralization, and formatting numbers. Automatically updates when the locale changes.
 * @param strings - A mapping of languages to localized strings by key.
 */function useLocalizedStringFormatter(strings,packageName){var _useLocale=(0,context/* useLocale */.Y)(),locale=_useLocale.locale;var dictionary=new dist_LocalizedStringDictionary/* LocalizedStringDictionary */.B(strings,'sv-SV');// let dictionary = useLocalizedStringDictionary(strings, packageName);
return (0,react.useMemo)(function(){return new LocalizedStringFormatter/* LocalizedStringFormatter */.J(locale,dictionary);},[locale,dictionary]);}
;// ./packages/components/src/textfield/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"hide":"Hide","show":"Show"},"sv":{"hide":"Dölj","show":"Visa"},"es":{"hide":"Ocultar","show":"Mostrar"},"fr":{"hide":"Cacher","show":"Afficher"},"de":{"hide":"Verstecken","show":"Anzeigen"},"ja":{"hide":"隠す","show":"表示"},"zh":{"hide":"隐藏","show":"显示"},"ar":{"hide":"إخفاء","show":"إظهار"},"ru":{"hide":"Скрыть","show":"Показать"},"pt":{"hide":"Ocultar","show":"Mostrar"},"it":{"hide":"Nascondi","show":"Mostra"},"ko":{"hide":"숨기기","show":"보여주기"},"hi":{"hide":"छुपाएँ","show":"दिखाएँ"},"nl":{"hide":"Verbergen","show":"Tonen"},"pl":{"hide":"Ukryj","show":"Pokaż"},"tr":{"hide":"Gizle","show":"Göster"},"vi":{"hide":"Ẩn","show":"Hiện"},"th":{"hide":"ซ่อน","show":"แสดง"},"id":{"hide":"Sembunyikan","show":"Tampilkan"},"ms":{"hide":"Sembunyikan","show":"Tunjukkan"}}');
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(93361);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/textfield/PasswordField.tsx
var PasswordField=function PasswordField(_ref){var value=_ref.value;var _React$useState=react.useState(false),showPassword=_React$useState[0],setShowPassword=_React$useState[1];var handlePress=function handlePress(){return setShowPassword(function(previousValue){return!previousValue;});};var stringFormatter=useLocalizedStringFormatter(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showPassword&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module/* default */.A.passwordText,children:value}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"tertiary",onPress:handlePress,className:TextField_module/* default */.A.passwordButton,children:showPassword?stringFormatter.format('hide'):stringFormatter.format('show')})]});};
;// ./packages/components/src/textfield/Input.tsx
var Input_Input=/*#__PURE__*/react.forwardRef(function(props,ref){;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,Input/* InputContext */.E);props=_useContextProps[0];ref=_useContextProps[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module/* default */.A.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,Object.assign({},props,{ref:ref,className:(0,clsx/* default */.A)(TextField_module/* default */.A.input,props.className)})),props.type==='password'&&/*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField,Object.assign({},props))]});});
;// ./packages/components/src/textfield/TextField.tsx
'use client';var _excluded=["className"];var TextField=/*#__PURE__*/react.forwardRef(function(_ref,ref){var className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(TextFieldBase/* TextFieldBase */.J,Object.assign({},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_Input,{className:className,ref:ref})}));});

/***/ }),

/***/ 5619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ TextFieldBase)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextField.mjs
var TextField = __webpack_require__(32945);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(53502);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(20143);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(93361);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(80554);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
;// ./packages/components/src/character-counter/CharacterCounter.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CharacterCounter_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--line-height-02":"1.125rem","--size-02":"0.875rem","--text-invalid":"light-dark(#e62323, #e62323)","--text-primary":"light-dark(#171717, #f2f2f2)","characterCounter":"characterCounter_Rd9H"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/character-counter/CharacterCounter.tsx
var CharacterCounter=/*#__PURE__*/react.forwardRef(function(props,ref){var _value$toString;;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,Input/* InputContext */.E);props=_useContextProps[0];var _props=props,maxLength=_props.maxLength,value=_props.value;var _ref=(_value$toString=value==null?void 0:value.toString())!=null?_value$toString:'',length=_ref.length;var isMaxLengthDefined=maxLength!==undefined;return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:CharacterCounter_module.characterCounter,"data-exceeded":isMaxLengthDefined&&length>maxLength||undefined,children:isMaxLengthDefined?length+" / "+maxLength:length});});
;// ./packages/components/src/textfield/TextFieldBase.tsx
var TextFieldBase=/*#__PURE__*/react.forwardRef(function(props,ref){;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,TextField/* TextFieldContext */.H);props=_useContextProps[0];var _props=props,label=_props.label,description=_props.description,errorMessage=_props.errorMessage,showCounter=_props.showCounter;return/*#__PURE__*/(0,jsx_runtime.jsxs)(TextField/* TextField */.A,Object.assign({},props,{className:TextField_module/* default */.A.textField,children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{variant:"label-02",children:label}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:description}),showCounter&&/*#__PURE__*/(0,jsx_runtime.jsx)(CharacterCounter,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",children:errorMessage}),props.children]}));});

/***/ }),

/***/ 53502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--focus":"0 0 0 2px white, 0 0 0 4px black","--field-disabled":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--text-invalid":"light-dark(#e62323, #e62323)","--border-invalid":"light-dark(#e62323, #e62323)","--border-strong":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--font-family":"\"Inter\", sans-serif","--text-disabled":"light-dark(#bfbfbf, #525252)","textField":"textField_IarX","textArea":"textArea_M6yF","wrap":"wrap_ljmz","input":"input_g6A6","passwordText":"passwordText_gBIs","passwordButton":"passwordButton_kacG"});

/***/ })

}]);