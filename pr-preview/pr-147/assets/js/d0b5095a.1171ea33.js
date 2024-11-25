"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[1343],{

/***/ 83920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_forms_md_d0b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-forms-md-d0b.json
const site_docs_design_patterns_forms_md_d0b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/forms","title":"Frågeformulär","description":"Obligatorisk vs valfri","source":"@site/docs/design-patterns/forms.md","sourceDirName":"design-patterns","slug":"/design-patterns/forms","permalink":"/pr-preview/pr-147/design-patterns/forms","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sideBar","previous":{"title":"Fokus","permalink":"/pr-preview/pr-147/design-patterns/focus"},"next":{"title":"Personnummer","permalink":"/pr-preview/pr-147/design-patterns/personnummer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
// EXTERNAL MODULE: ./packages/flex/src/index.ts + 4 modules
var flex_src = __webpack_require__(93294);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(29511);
;// ./apps/docs/docs/design-patterns/forms.md


const frontMatter = {};
const contentTitle = 'Frågeformulär';

const assets = {

};






const toc = [{
  "value": "Obligatorisk vs valfri",
  "id": "obligatorisk-vs-valfri",
  "level": 2
}, {
  "value": "Undantag 1: Valfria fält är fler än de obligatoriska",
  "id": "undantag-1-valfria-fält-är-fler-än-de-obligatoriska",
  "level": 3
}, {
  "value": "Undantag 2: Valfria fält och obligatoriska fält är (ungefär) lika många",
  "id": "undantag-2-valfria-fält-och-obligatoriska-fält-är-ungefär-lika-många",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "frågeformulär",
        children: "Frågeformulär"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "obligatorisk-vs-valfri",
      children: "Obligatorisk vs valfri"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Huvudregeln är att bara fråga användaren om uppgifter som är nödvändiga för att ta ett beslut eller liknande.\nFöljer vi den regeln faller det sig naturligt att de flesta fält i ett formulär är obligatoriska. Det ger oss grundregeln: Vi markerar endast eventuella valfria fält med texten ", (0,jsx_runtime.jsx)(_components.code, {
        children: "”(valfritt)”"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      hideCode: true,
      scope: {
        Flex: flex_src/* Flex */.s,
        FlexItem: flex_src/* FlexItem */.Z,
        TextField: src/* TextField */.A_
      },
      children: `<Flex>
<FlexItem col="fluid">
<TextField
  label="Skriv ditt fullständiga namn"
  description="Både för och efternamn"
  isRequired
  errorMessage="Detta är ett obligatoriskt fält"
/>
</FlexItem>
<FlexItem col="fluid">
<TextField
  label="Skriv dina favoritfrukter (Valfritt)"
  description="Du kan lämna fältet tomt om du inte har någon favoritfrukt"
/>
</FlexItem>
</Flex>`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "undantag-1-valfria-fält-är-fler-än-de-obligatoriska",
      children: "Undantag 1: Valfria fält är fler än de obligatoriska"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Markera obligatoriska fält med svart asterisk och informera över formuläret att obligatoriska fält markeras med en asterisk."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "undantag-2-valfria-fält-och-obligatoriska-fält-är-ungefär-lika-många",
      children: "Undantag 2: Valfria fält och obligatoriska fält är (ungefär) lika många"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Markera valfria fält med ”(valfritt)” och obligatoriska fält med svart asterisk och informera över formuläret att obligatoriska fält\nmarkeras med en asterisk."
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

/***/ 42619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  oi: () => (/* reexport */ InputWrapper),
  A_: () => (/* reexport */ TextField),
  Ql: () => (/* reexport */ TextField_module)
});

// UNUSED EXPORTS: ssnRegEx

;// ./packages/textfield/src/lib/TextField.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TextField_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","signalRed10":"#ffdfdf","gray10":"#f2f2f2","gray20":"#e6e6e6","gray50":"#bfbfbf","black":"#000000","signalRed100":"#e62323","mediumWeight":"500","regularWeight":"400","inputText":"#1f1f1f","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","inputField":"inputField_kJaH","inputWrapper":"inputWrapper_RfiT","label":"label_Pxyb","text":"text_CvV8","fieldError":"fieldError_kz46","passwordText":"passwordText_Gtww","input":"input_B57n","wrap":"wrap_g1RZ","passwordButton":"passwordButton_bCY3"});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextField.mjs
var dist_TextField = __webpack_require__(32945);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 3 modules
var src = __webpack_require__(81706);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/textfield/src/lib/TextField.tsx
'use client';var _excluded=["label","description","errorMessage","validationType"];var TextField=function TextField(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,validationType=_ref.validationType,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _React$useState=react.useState(''),input=_React$useState[0],setInput=_React$useState[1];var _React$useState2=react.useState(true),isValid=_React$useState2[0],setIsValid=_React$useState2[1];var validateInput=function validateInput(value){if(validationType===undefined)return true;if(validationType==='ssn')setIsValid(ssnRegEx.test(value));if(validationType instanceof RegExp)setIsValid(new RegExp(validationType).test(value));};var handleInputBlur=function handleInputBlur(e){var value=e.target.value;validateInput(value);};var handleInputChange=function handleInputChange(e){setInput(e.target.value);};return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TextField/* TextField */.A,Object.assign({className:TextField_module.inputField,isInvalid:validationType!==undefined?!isValid:props.isInvalid},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(InputWrapper,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,{type:props.type,className:TextField_module.input,onChange:handleInputChange,onBlur:handleInputBlur}),/*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField,{type:props.type,input:input})]})})}));};var PasswordField=function PasswordField(_ref2){var type=_ref2.type,input=_ref2.input;var _React$useState3=react.useState(false),showPassword=_React$useState3[0],setShowPassword=_React$useState3[1];if(type==='password')return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showPassword&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module.passwordText,children:input}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$,{variant:"tertiary",onPress:function onPress(){return setShowPassword(!showPassword);},className:TextField_module.passwordButton,children:showPassword?'Dölj':'Visa'})]});return null;};var InputWrapper=function InputWrapper(_ref3){var label=_ref3.label,description=_ref3.description,errorMessage=_ref3.errorMessage,children=_ref3.children;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module.inputWrapper,children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{className:TextField_module.label,children:label}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module.text,children:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{className:TextField_module.fieldError,children:errorMessage}),children]});};var ssnRegEx=new RegExp('^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$');
;// ./packages/textfield/src/lib/index.ts

;// ./packages/textfield/src/index.ts


/***/ })

}]);