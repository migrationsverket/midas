"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5095],{

/***/ 17131:
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
  metadata: () => (/* reexport */ site_docs_components_combobox_mdx_9b9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-combobox-mdx-9b9.json
const site_docs_components_combobox_mdx_9b9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/combobox","title":"ComboBox","description":"Sökbar version av Select","source":"@site/docs/components/combobox.mdx","sourceDirName":"components","slug":"/components/combobox","permalink":"/pr-preview/pr-380/components/combobox","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ComboBox","description":"Sökbar version av Select","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/combobox/ComboBox.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ComboBox_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--layer-02":"light-dark(#ffffff, #383838)","--layer-hover-02":"light-dark(#e6e6e6, #474747)","--border-strong":"light-dark(#171717, #f2f2f2)","--focus":"0 0 0 2px white, 0 0 0 4px black","--field-disabled":"light-dark(#f2f2f2, #262626)","--border-disabled":"light-dark(#bfbfbf, #525252)","--text-placeholder":"light-dark(#a6a6a6, #525252)","--icon-primary":"light-dark(#171717, #f2f2f2)","--text-primary":"light-dark(#171717, #f2f2f2)","--layer-selected-02":"light-dark(#d9d9d9, #525252)","--border-invalid":"light-dark(#e62323, #e62323)","--text-invalid":"light-dark(#e62323, #e62323)","input":"input_Ttd0","combobox":"combobox_kSJb","text":"text_ngKo","wrap":"wrap_JKDx","button":"button_yH32","icon":"icon_C34F","popover":"popover_OCYC","fieldError":"fieldError_o6Mj","listBoxItem":"listBoxItem_snA8"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ComboBox.mjs + 37 modules
var ComboBox = __webpack_require__(20050);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ListBox.mjs
var ListBox = __webpack_require__(97849);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx + 2 modules
var TextField = __webpack_require__(49154);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/combobox/ComboBox.tsx
'use client';var _excluded=["label","description","errorMessage","children","items","className"];function ComboBox_ComboBox(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,children=_ref.children,items=_ref.items,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var ref=react.useRef(null);return/*#__PURE__*/(0,jsx_runtime.jsxs)(ComboBox/* ComboBox */.a3,Object.assign({className:(0,clsx/* default */.A)(ComboBox_module.combobox,className),ref:ref},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:ComboBox_module.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,{className:ComboBox_module.input}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{className:ComboBox_module.button,"aria-label":"Visa lista",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:ComboBox_module.icon,"aria-hidden":"true",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20,"aria-hidden":true})})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{className:ComboBox_module.popover,offset:0,UNSTABLE_portalContainer:ref.current||undefined,children:/*#__PURE__*/(0,jsx_runtime.jsx)(ListBox/* ListBox */.qF,{items:items,children:children})})]}));}function ComboBoxItem(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(ListBox/* ListBoxItem */.nh,Object.assign({className:ComboBox_module.listBoxItem},props));}
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(71372);
;// ./apps/docs/docs/components/combobox.mdx


const frontMatter = {
	title: 'ComboBox',
	description: 'Sökbar version av Select',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};









const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      ComboBox: ComboBox_ComboBox,
      ComboBoxItem: ComboBoxItem
    },
    ...props,
    children: `<ComboBox
          label="Vad är din favoritfrukt?"
          placeholder="Välj en frukt"
          items={fruits.map(fruit => {return {id: fruit.value, name: fruit.name}})}
        >
          {(item) => <ComboBoxItem>{item.name}</ComboBoxItem>}
      </ComboBox>`
  });
};
const toc = [{
  "value": "Installation",
  "id": "installation",
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
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "ComboBox",
  "id": "combobox",
  "level": 3
}, {
  "value": "ComboBoxItem",
  "id": "comboboxitem",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'Combobox',
      friendlyName: "Flerval med sök, väljare med sök, dropdown med sök",
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/ComboBox.html"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En ComboBox är en sökbar version av Select. Combobox används för att välja ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ett"
      }), " alternativ av fler än fyra (4) alternativ."]
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
        children: "import { ComboBox } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "val-av-komponent",
      children: "Val av komponent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Om det ska gå att välja flera eller inget alternativ är det ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/pr-preview/pr-380/components/checkbox",
          children: "Checkbox"
        }), " eller ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/pr-preview/pr-380/components/select",
          children: "Select"
        }), " som ska användas."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Om det är färre alternativ än fyra (4) används med fördel ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/pr-preview/pr-380/components/radio",
          children: "Radio"
        }), " istället."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "combobox",
      children: "ComboBox"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "ComboBox"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comboboxitem",
      children: "ComboBoxItem"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "ComboBoxItem",
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

/***/ 49154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  oi: () => (/* binding */ InputWrapper),
  A_: () => (/* binding */ TextField)
});

// UNUSED EXPORTS: dossNrRegEx, ssnRegEx

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/input/Input.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Input_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--border-strong":"light-dark(#171717, #f2f2f2)","--border-invalid":"light-dark(#e62323, #e62323)","--text-disabled":"light-dark(#bfbfbf, #525252)","--text-invalid":"light-dark(#e62323, #e62323)","--field-disabled":"light-dark(#f2f2f2, #262626)","--focus":"0 0 0 2px white, 0 0 0 4px black","input":"input_dpRX","passwordText":"passwordText_EPDy"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/input/Input.tsx
var Input_Input=/*#__PURE__*/react.forwardRef(function(props,ref){;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,Input/* InputContext */.E);props=_useContextProps[0];ref=_useContextProps[1];return/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,Object.assign({},props,{ref:ref,className:(0,clsx/* default */.A)(Input_module.input,props.className)}));});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextField.mjs
var dist_TextField = __webpack_require__(32945);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(53502);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
;// ./packages/components/src/textfield/TextField.tsx
'use client';var _excluded=["label","description","errorMessage","validationType","validate","maxLength","showCounter","className"];var TextField=function TextField(_ref){var _ref2,_props$defaultValue;var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,validationType=_ref.validationType,validate=_ref.validate,maxLength=_ref.maxLength,showCounter=_ref.showCounter,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _React$useState=react.useState((_ref2=(_props$defaultValue=props.defaultValue)!=null?_props$defaultValue:props.value)!=null?_ref2:''),value=_React$useState[0],setValue=_React$useState[1];var handleChange=function handleChange(event){var newValue=event.target.value;setValue(newValue);};var validateInput=function validateInput(value){if(validationType==='ssn')return ssnRegEx.test(value)?null:'Felaktigt personnummer';if(validationType==='dossnr')return dossNrRegEx.test(value)?null:'Felaktigt dossiernummer';if(validationType instanceof RegExp)return new RegExp(validationType).test(value)?null:errorMessage==null?void 0:errorMessage.toString();if(maxLength)return maxLength&&value.length>maxLength?"Du har angett "+(value.length-maxLength)+" tecken f\xF6r mycket. F\xE4ltet \xE4r begr\xE4nsat till "+maxLength+" tecken.":null;if(validate)return validate(value);return true;};var Count=function Count(){if(maxLength){return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:(0,clsx/* default */.A)(TextField_module/* default */.A.count,value.length>maxLength&&TextField_module/* default */.A.countExceeded),children:[value.length," / ",maxLength]});}if(showCounter){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:TextField_module/* default */.A.count,children:value.length});}return null;};return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TextField/* TextField */.A,Object.assign({className:(0,clsx/* default */.A)(TextField_module/* default */.A.inputField,className),validate:validateInput},props,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(InputWrapper,{label:label,description:description,errorMessage:errorMessage,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Count,{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module/* default */.A.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input_Input,{type:props.type,className:TextField_module/* default */.A.input,onChange:handleChange,onBlur:handleChange}),/*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField,{type:props.type,input:value})]})]})}));};var PasswordField=function PasswordField(_ref3){var type=_ref3.type,input=_ref3.input;var _React$useState2=react.useState(false),showPassword=_React$useState2[0],setShowPassword=_React$useState2[1];if(type==='password')return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showPassword&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module/* default */.A.passwordText,children:input}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"tertiary",onPress:function onPress(){return setShowPassword(!showPassword);},className:TextField_module/* default */.A.passwordButton,children:showPassword?'Dölj':'Visa'})]});return null;};var InputWrapper=function InputWrapper(_ref4){var label=_ref4.label,description=_ref4.description,errorMessage=_ref4.errorMessage,children=_ref4.children;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module/* default */.A.inputWrapper,children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{className:TextField_module/* default */.A.label,children:label}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module/* default */.A.text,children:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",className:TextField_module/* default */.A.fieldError,children:errorMessage}),children]});};var ssnRegEx=new RegExp('^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$');var dossNrRegEx=new RegExp('^(\\d{1,2}\\+\\d{6}-\\d{1,2}$|\\d{1,2}-\\d{6}(/\\d{1,2})?$|\\d{1,2}\\d{6}$|\\d{6,8}$)');

/***/ }),

/***/ 53502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--border-strong":"light-dark(#171717, #f2f2f2)","--border-invalid":"light-dark(#e62323, #e62323)","--text-disabled":"light-dark(#bfbfbf, #525252)","--text-invalid":"light-dark(#e62323, #e62323)","--field-disabled":"light-dark(#f2f2f2, #262626)","--focus":"0 0 0 2px white, 0 0 0 4px black","inputField":"inputField_NRYV","inputWrapper":"inputWrapper_NR0B","label":"label_UgTd","text":"text_E1GG","fieldError":"fieldError_GOHN","passwordText":"passwordText_gBIs","count":"count_PsfX","countExceeded":"countExceeded_hrAA","wrap":"wrap_ljmz","passwordButton":"passwordButton_kacG"});

/***/ })

}]);