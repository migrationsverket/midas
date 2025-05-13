"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4595],{

/***/ 31687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_radio_mdx_7e6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-radio-mdx-7e6.json
const site_docs_components_radio_mdx_7e6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/radio","title":"Radio","description":"Radio är en typ av inmatningsfält som används för att välja ett alternativ från en uppsättning alternativ","source":"@site/docs/components/radio.mdx","sourceDirName":"components","slug":"/components/radio","permalink":"/pr-preview/pr-563/components/radio","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Radio","description":"Radio är en typ av inmatningsfält som används för att välja ett alternativ från en uppsättning alternativ","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/radio/Radio.tsx + 1 modules
var Radio = __webpack_require__(80408);
;// ./apps/docs/src/components/examples/radio/RadioExamples.tsx
var BasicExample=function BasicExample(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Radio/* RadioGroup */.z,{label:"V\xE4lj din favoritfrukt",description:"Du kan bara v\xE4lja en",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"apple",children:"\xC4pple"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"banan",children:"Banan"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"kiwi",children:"Kiwi"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"apelsin",children:"Apelsin"})]});};var ControlledExample=function ControlledExample(){var _useState=(0,react.useState)(''),selectedFruit=_useState[0],setSelectedFruit=_useState[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Radio/* RadioGroup */.z,{label:"V\xE4lj din favoritfrukt",description:"Du kan bara v\xE4lja en",value:selectedFruit,onChange:setSelectedFruit,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"apple",children:"\xC4pple"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"banan",children:"Banan"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"kiwi",children:"Kiwi"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"apelsin",children:"Apelsin"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{marginTop:'1rem'},children:["selectedFruit: ",selectedFruit]})]});};var HorizontalExample=function HorizontalExample(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Radio/* RadioGroup */.z,{label:"V\xE4lj din favoritfrukt",description:"Max 2 val vid horisontellt l\xE4ge",orientation:"horizontal",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"apple",children:"\xC4pple"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"banan",children:"Banan"})]});};var DefaultValueExample=function DefaultValueExample(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Radio/* RadioGroup */.z,{label:"Vill du l\xE4gga till din favoritfrukt i fruktkorgen?",description:"Det blir gott!",defaultValue:"yes",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"yes",children:"Ja"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"no",children:"Nej"})]});};var NoneOfTheAboveExample=function NoneOfTheAboveExample(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Radio/* RadioGroup */.z,{label:"V\xE4lj din favoritfrukt",description:"Du kan bara v\xE4lja en",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"apple",children:"\xC4pple"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"banan",children:"Banan"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"kiwi",children:"Kiwi"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"apelsin",children:"Apelsin"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Radio/* Radio */.s,{value:"none",children:"Inget av givna alternativ"})]});};
;// ./apps/docs/docs/components/radio.mdx


const frontMatter = {
	title: 'Radio',
	description: 'Radio är en typ av inmatningsfält som används för att välja ett alternativ från en uppsättning alternativ',
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
  "value": "Kontrollerat val",
  "id": "kontrollerat-val",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}, {
  "value": "Mönster",
  "id": "mönster",
  "level": 3
}, {
  "value": "Val av komponent",
  "id": "val-av-komponent",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Radio",
  "id": "radio",
  "level": 3
}, {
  "value": "RadioGroup",
  "id": "radiogroup",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: "Radio",
      friendlyName: "Radioknappar",
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/RadioGroup.html"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inmatningsfält som används för att välja exakt ett alternativ."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<RadioGroup\n  label='Välj din favoritfrukt'\n  description='Du kan bara välja en'\n>\n  <Radio value='apple'>Äpple</Radio>\n  <Radio value='banan'>Banan</Radio>\n  <Radio value='kiwi'>Kiwi</Radio>\n  <Radio value='apelsin'>Apelsin</Radio>\n</RadioGroup>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(BasicExample, {})
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
        children: "import { Radio, RadioGroup } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kontrollerat-val",
      children: "Kontrollerat val"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd attributet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), " och eventet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onChange"
      }), " för att använda controlled value på RadioGroup.\nDen valda radioknappens värde skickas till callbacken, så kan du använda det för att uppdatera ditt state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import React from 'react'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "const [selectedFruit, setSelectedFruit] = useState('')\n\nreturn (\n  <RadioGroup\n    label='Välj din favoritfrukt'\n    description='Du kan bara välja en'\n    // highlight-start\n    value={selectedFruit}\n    onChange={setSelectedFruit}\n    // highlight-end\n  >\n    <Radio value='apple'>Äpple</Radio>\n    <Radio value='banan'>Banan</Radio>\n    <Radio value='kiwi'>Kiwi</Radio>\n    <Radio value='apelsin'>Apelsin</Radio>\n  </RadioGroup>\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(ControlledExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fältetiketten ska inledas med stor bokstav och inte följas av punkt."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lägg valen i bokstavsordning om ingen annan given ordning är mer lämplig, t.ex. det mest populära valet först."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Radioknapparna placeras som regel vertikalt för att underlätta avläsning. Om antalet alternativ för en given fråga är\nbegränsat till två och det är ont om vertikalt utrymme så kan en horisontell orientering användas."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(HorizontalExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mönster",
      children: "Mönster"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Det finns två mönster för Radioknappar:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inget alternativ är valt från början"
        }), ". Detta alternativ kräver att användaren tar ställning för att kunna gå vidare, vilket i de flesta fall är lämpligt. Välj detta mönster om det är svårt att förutse eller olämpligt att ge ett förval."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(BasicExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Om användaren behöver ha möjligthet att avstå från att välja ett de givna alternativen är rekommendationen att skapa ett sista alternativ som du kallar \"Inget av givna alternativ\" eller liknande."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(NoneOfTheAboveExample, {})
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ett av alternativen är valt från början"
        }), ". Välj detta mönster om det finns ett val som är förväntat eller önskvärt och det inte ger stora konsekvenser för användaren att inte ta ställning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(DefaultValueExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "val-av-komponent",
      children: "Val av komponent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd Radioknappar när användaren bara ska göra ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ett"
      }), " av flera val i en lista. Använd ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/checkbox",
        children: "Checkbox"
      }), " om flera val ska kunna göras. Om det är fler alternativ än fem bör ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/select",
        children: "Select"
      }), " användas istället."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "radio",
      children: "Radio"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "Radio"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "radiogroup",
      children: "RadioGroup"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "RadioGroup"
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
/* harmony default export */ const FieldError_module = ({"tokens":"\"../theme/tokens.css\"","--text-warning":"light-dark(#e62323, #eb4e4e)","--font-family":"\"Inter\", sans-serif","fieldError":"fieldError_K9VX"});
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
/* harmony default export */ const Label_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--font-size-20":"0.875rem","--line-height-20":"1.125rem","--font-size-30":"1rem","--line-height-30":"1.25rem","--text-disabled":"light-dark(#bfbfbf, #525252)","labelBase":"labelBase_BRgo","label-01":"label-01_rWfb","label-02":"label-02_LZ3P"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/Label.tsx
var _excluded=["children","className","variant","elementType"];var DEFAULT_ELEMENT='label';var Label=function Label(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'label-02':_ref$variant,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames={'label-01':Label_module['label-01'],'label-02':Label_module['label-02']};var labelProps=Object.assign({className:(0,clsx/* default */.A)(Label_module.labelBase,classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Label/* Label */.J,Object.assign({},labelProps,{children:children}));};

/***/ }),

/***/ 80408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ Radio),
  z: () => (/* binding */ RadioGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/components/src/radio/Radio.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Radio_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-disabled":"light-dark(#bfbfbf, #525252)","--font-size-30":"1rem","--text-primary":"light-dark(#171717, #f2f2f2)","--border-primary":"light-dark(#171717, #f2f2f2)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--fast-transition":"250ms","--border-disabled":"light-dark(#bfbfbf, #525252)","--icon-secondary":"light-dark(#525252, #a6a6a6)","--border-secondary":"light-dark(#737373, #8c8c8c)","--border-subtle":"light-dark(#bfbfbf, #383838)","--breakpoint-sm":"(max-width: 767px)","--field-hover-02":"light-dark(#e6e6e6, #474747)","--support-border-warning":"light-dark(#e62323, #e62323)","--icon-tertiary":"light-dark(#143c50, #f2f2f2)","radioGroup":"radioGroup_EgZH","wrap":"wrap_R8gp","radio":"radio_U9gG"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/RadioGroup.mjs + 4 modules
var dist_RadioGroup = __webpack_require__(96325);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Group.mjs
var Group = __webpack_require__(63899);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(20143);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(93361);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(80554);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/radio/Radio.tsx
'use client';var _excluded=["label","description","errorMessage","children","className","errorPosition"];/**
 * RadioGroup is used to group several radio items together
 */var RadioGroup=function RadioGroup(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,children=_ref.children,className=_ref.className,_ref$errorPosition=_ref.errorPosition,errorPosition=_ref$errorPosition===void 0?'top':_ref$errorPosition,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_RadioGroup/* RadioGroup */.z6,Object.assign({},props,{className:(0,clsx/* default */.A)(Radio_module.radioGroup,className),children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{children:label}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:description}),errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",children:errorMessage}),/*#__PURE__*/(0,jsx_runtime.jsx)(Group/* Group */.Y,{className:Radio_module.wrap,children:children}),errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",children:errorMessage})]}));};/**
 * Radio item
 * */var Radio=function Radio(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_RadioGroup/* Radio */.sx,Object.assign({className:Radio_module.radio},props));};

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

/***/ })

}]);