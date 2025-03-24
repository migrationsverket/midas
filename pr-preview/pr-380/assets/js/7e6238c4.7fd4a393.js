"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4595],{

/***/ 39890:
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
  metadata: () => (/* reexport */ site_docs_components_radio_mdx_7e6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-radio-mdx-7e6.json
const site_docs_components_radio_mdx_7e6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/radio","title":"Radio","description":"Radio är en typ av inmatningsfält som används för att välja ett alternativ från en uppsättning alternativ","source":"@site/docs/components/radio.mdx","sourceDirName":"components","slug":"/components/radio","permalink":"/pr-preview/pr-380/components/radio","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Radio","description":"Radio är en typ av inmatningsfält som används för att välja ett alternativ från en uppsättning alternativ","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./packages/components/src/radio/Radio.tsx + 1 modules
var Radio = __webpack_require__(80408);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(71372);
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









const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      RadioGroup: Radio/* RadioGroup */.z,
      Radio: Radio/* Radio */.s
    },
    ...props,
    children: `<RadioGroup label={'Välj din favoritfrukt'} description={'Du kan bara välja en'} defaultValue={fruits[0].value}>
        {fruits.slice(0,3).map(fruit => (
          <Radio key={fruit.value} value={fruit.value}>{fruit.name}</Radio>
        )))</RadioGroup>`
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'Radio',
      friendlyName: 'Radioknappar',
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/RadioGroup.html"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inmatningsfält som används för att välja exakt ett alternativ."
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
        children: "import { Radio, RadioGroup } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "En av radioknapparna ska alltid vara ifylld. Om du misstänker att användaren vill kunna avstå från att välja något,\nskapa ett sista alternativ som du kallar \"Inget av ovanstående\" eller liknande."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Radioknapparna placeras som regel vertikalt för att underlätta avläsning. Om antalet alternativ för en given fråga är\nbegränsat till två (2) och det är ont om vertikalt utrymme så kan en horisontell orientering användas."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fältetiketten ska inledas med stor bokstav och inte följas av punkt."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Om alternativen inte utesluter varandra, använd ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/pr-preview/pr-380/components/checkbox",
          children: "Checkbox"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Om det är fler alternativ än fem bör ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/pr-preview/pr-380/components/select",
          children: "Select"
        }), " användas istället."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "radio",
      children: "Radio"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Radio"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "radiogroup",
      children: "RadioGroup"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
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
/* harmony default export */ const Radio_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-disabled":"light-dark(#bfbfbf, #525252)","--size-03":"1rem","--text-primary":"light-dark(#171717, #f2f2f2)","--border-strong":"light-dark(#171717, #f2f2f2)","--focus":"0 0 0 2px white, 0 0 0 4px black","--fast-transition":"250ms","--border-disabled":"light-dark(#bfbfbf, #525252)","--icon-secondary":"light-dark(#143c50, #2e7ca5)","--border-medium":"light-dark(#737373, #8c8c8c)","--border-subtle":"light-dark(#bfbfbf, #383838)","--breakpoint-sm":"(max-width: 767px)","--field-hover-02":"light-dark(#e6e6e6, #474747)","--border-invalid":"light-dark(#e62323, #e62323)","radioGroup":"radioGroup_EgZH","wrap":"wrap_R8gp","radio":"radio_U9gG"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/RadioGroup.mjs + 4 modules
var dist_RadioGroup = __webpack_require__(96325);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Group.mjs
var Group = __webpack_require__(63899);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx + 2 modules
var TextField = __webpack_require__(49154);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/radio/Radio.tsx
'use client';var _excluded=["label","description","errorMessage","children","className"];/**
 * RadioGroup is used to group several radio items together
 */var RadioGroup=function RadioGroup(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,children=_ref.children,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_RadioGroup/* RadioGroup */.z6,Object.assign({},props,{className:(0,clsx/* default */.A)(Radio_module.radioGroup,className),children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Group/* Group */.Y,{className:Radio_module.wrap,children:children})})}));};/**
 * Radio item
 * */var Radio=function Radio(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_RadioGroup/* Radio */.sx,Object.assign({className:Radio_module.radio},props));};

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

/***/ }),

/***/ 11811:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ $2d73ec29415bd339$export$712718f7aec83d5)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5987);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8343);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24836);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8356);
/* harmony import */ var _react_aria_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85441);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28940);
/* harmony import */ var _react_aria_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48868);
/* harmony import */ var _react_stately_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71144);








/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
    let { inputElementType: inputElementType = 'input', isDisabled: isDisabled = false, isRequired: isRequired = false, isReadOnly: isReadOnly = false, type: type = 'text', validationBehavior: validationBehavior = 'aria' } = props;
    let [value, setValue] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__/* .useControlledState */ .P)(props.value, props.defaultValue || '', props.onChange);
    let { focusableProps: focusableProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__/* .useFocusable */ .Wc)(props, ref);
    let validationState = (0, _react_stately_form__WEBPACK_IMPORTED_MODULE_3__/* .useFormValidationState */ .KZ)({
        ...props,
        value: value
    });
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = validationState.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, _react_aria_label__WEBPACK_IMPORTED_MODULE_4__/* .useField */ .M)({
        ...props,
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let domProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__/* .filterDOMProps */ .$)(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type: type,
        pattern: props.pattern
    };
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__/* .useFormReset */ .F)(ref, value, setValue);
    (0, _react_aria_form__WEBPACK_IMPORTED_MODULE_7__/* .useFormValidation */ .X)(props, validationState, ref);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // This works around a React/Chrome bug that prevents textarea elements from validating when controlled.
        // We prevent React from updating defaultValue (i.e. children) of textarea when `value` changes,
        // which causes Chrome to skip validation. Only updating `value` is ok in our case since our
        // textareas are always controlled. React is planning on removing this synchronization in a
        // future major version.
        // https://github.com/facebook/react/issues/19474
        // https://github.com/facebook/react/issues/11896
        if (ref.current instanceof (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__/* .getOwnerWindow */ .mD)(ref.current).HTMLTextAreaElement) {
            let input = ref.current;
            Object.defineProperty(input, 'defaultValue', {
                get: ()=>input.value,
                set: ()=>{},
                configurable: true
            });
        }
    }, [
        ref
    ]);
    return {
        labelProps: labelProps,
        inputProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_9__/* .mergeProps */ .v)(domProps, inputElementType === 'input' ? inputOnlyProps : undefined, {
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired && validationBehavior === 'native',
            'aria-required': isRequired && validationBehavior === 'aria' || undefined,
            'aria-invalid': isInvalid || undefined,
            'aria-errormessage': props['aria-errormessage'],
            'aria-activedescendant': props['aria-activedescendant'],
            'aria-autocomplete': props['aria-autocomplete'],
            'aria-haspopup': props['aria-haspopup'],
            'aria-controls': props['aria-controls'],
            value: value,
            onChange: (e)=>setValue(e.target.value),
            autoComplete: props.autoComplete,
            autoCapitalize: props.autoCapitalize,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            autoCorrect: props.autoCorrect,
            spellCheck: props.spellCheck,
            [parseInt((0, react__WEBPACK_IMPORTED_MODULE_0__).version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: props.enterKeyHint,
            // Clipboard events
            onCopy: props.onCopy,
            onCut: props.onCut,
            onPaste: props.onPaste,
            // Composition events
            onCompositionEnd: props.onCompositionEnd,
            onCompositionStart: props.onCompositionStart,
            onCompositionUpdate: props.onCompositionUpdate,
            // Selection events
            onSelect: props.onSelect,
            // Input events
            onBeforeInput: props.onBeforeInput,
            onInput: props.onInput,
            ...focusableProps,
            ...fieldProps
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}



//# sourceMappingURL=useTextField.module.js.map


/***/ }),

/***/ 87979:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ $5c3e21d68f1c4674$export$a966af930f325cab),
/* harmony export */   s: () => (/* binding */ $5c3e21d68f1c4674$export$439d29a4e110a164)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59461);




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $5c3e21d68f1c4674$var$styles = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap'
};
function $5c3e21d68f1c4674$export$a966af930f325cab(props = {}) {
    let { style: style, isFocusable: isFocusable } = props;
    let [isFocused, setFocused] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let { focusWithinProps: focusWithinProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__/* .useFocusWithin */ .R)({
        isDisabled: !isFocusable,
        onFocusWithinChange: (val)=>setFocused(val)
    });
    // If focused, don't hide the element.
    let combinedStyles = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (isFocused) return style;
        else if (style) return {
            ...$5c3e21d68f1c4674$var$styles,
            ...style
        };
        else return $5c3e21d68f1c4674$var$styles;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isFocused
    ]);
    return {
        visuallyHiddenProps: {
            ...focusWithinProps,
            style: combinedStyles
        }
    };
}
function $5c3e21d68f1c4674$export$439d29a4e110a164(props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children: children, elementType: Element = 'div', isFocusable: isFocusable, style: style, ...otherProps } = props;
    let { visuallyHiddenProps: visuallyHiddenProps } = $5c3e21d68f1c4674$export$a966af930f325cab(props);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement(Element, (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(otherProps, visuallyHiddenProps), children);
}



//# sourceMappingURL=VisuallyHidden.module.js.map


/***/ }),

/***/ 79950:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $3985021b0ad6602f$export$37fb8590cf2c088c),
/* harmony export */   p: () => (/* binding */ $3985021b0ad6602f$export$f5b8910cec6cf069)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5933);
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75127);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32217);
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



const $3985021b0ad6602f$export$37fb8590cf2c088c = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
let $3985021b0ad6602f$var$filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $3985021b0ad6602f$export$f5b8910cec6cf069 = /*#__PURE__*/ (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__/* .createHideableComponent */ .U7)(function Input(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useContextProps */ .JT)(props, ref, $3985021b0ad6602f$export$37fb8590cf2c088c);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .useHover */ .M)(props);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria__WEBPACK_IMPORTED_MODULE_4__/* .useFocusRing */ .o)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useRenderProps */ .Sl)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.disabled || false,
            isInvalid: isInvalid
        },
        defaultClassName: 'react-aria-Input'
    });
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("input", {
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_5__/* .mergeProps */ .v)($3985021b0ad6602f$var$filterHoverProps(props), focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
});



//# sourceMappingURL=Input.module.js.map


/***/ }),

/***/ 43660:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ $216918bed6669f72$export$f5c9f3c2c4054eec),
/* harmony export */   k: () => (/* binding */ $216918bed6669f72$export$2dc6166a7e65358c)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5933);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);







const $216918bed6669f72$export$2dc6166a7e65358c = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
let $216918bed6669f72$var$filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $216918bed6669f72$export$f5c9f3c2c4054eec = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function TextArea(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, $216918bed6669f72$export$2dc6166a7e65358c);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_2__/* .useHover */ .M)(props);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .useFocusRing */ .o)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useRenderProps */ .Sl)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.disabled || false,
            isInvalid: isInvalid
        },
        defaultClassName: 'react-aria-TextArea'
    });
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("textarea", {
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_4__/* .mergeProps */ .v)($216918bed6669f72$var$filterHoverProps(props), focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
});



//# sourceMappingURL=TextArea.module.js.map


/***/ }),

/***/ 32945:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ $bcdf0525bf22703d$export$2c73285ae9390cec)
/* harmony export */ });
/* unused harmony export TextFieldContext */
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5933);
/* harmony import */ var _FieldError_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44300);
/* harmony import */ var _Form_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23128);
/* harmony import */ var _Input_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79950);
/* harmony import */ var _Label_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21704);
/* harmony import */ var _TextArea_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43660);
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27279);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11811);
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75127);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5987);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32217);
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










const $bcdf0525bf22703d$export$2129e27b3ef0d483 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $bcdf0525bf22703d$export$2c73285ae9390cec = /*#__PURE__*/ (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__/* .createHideableComponent */ .U7)(function TextField(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useContextProps */ .JT)(props, ref, $bcdf0525bf22703d$export$2129e27b3ef0d483);
    let { validationBehavior: formValidationBehavior } = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useSlottedContext */ .CC)((0, _Form_mjs__WEBPACK_IMPORTED_MODULE_3__/* .FormContext */ .c)) || {};
    var _props_validationBehavior, _ref;
    let validationBehavior = (_ref = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : formValidationBehavior) !== null && _ref !== void 0 ? _ref : 'native';
    let inputRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    let [inputContextProps, mergedInputRef] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useContextProps */ .JT)({}, inputRef, (0, _Input_mjs__WEBPACK_IMPORTED_MODULE_4__/* .InputContext */ .E));
    let [labelRef, label] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useSlot */ ._E)(!props['aria-label'] && !props['aria-labelledby']);
    let [inputElementType, setInputElementType] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)('input');
    let { labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, react_aria__WEBPACK_IMPORTED_MODULE_5__/* .useTextField */ .v)({
        ...(0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .removeDataAttributes */ .SK)(props),
        inputElementType: inputElementType,
        label: label,
        validationBehavior: validationBehavior
    }, mergedInputRef);
    // Intercept setting the input ref so we can determine what kind of element we have.
    // useTextField uses this to determine what props to include.
    let inputOrTextAreaRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((el)=>{
        mergedInputRef.current = el;
        if (el) setInputElementType(el instanceof HTMLTextAreaElement ? 'textarea' : 'input');
    }, [
        mergedInputRef
    ]);
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useRenderProps */ .Sl)({
        ...props,
        values: {
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid,
            isReadOnly: props.isReadOnly || false,
            isRequired: props.isRequired || false
        },
        defaultClassName: 'react-aria-TextField'
    });
    let DOMProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__/* .filterDOMProps */ .$)(props);
    delete DOMProps.id;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("div", {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": validation.isInvalid || undefined,
        "data-readonly": props.isReadOnly || undefined,
        "data-required": props.isRequired || undefined
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Provider */ .Kq), {
        values: [
            [
                (0, _Label_mjs__WEBPACK_IMPORTED_MODULE_7__/* .LabelContext */ .I),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ],
            [
                (0, _Input_mjs__WEBPACK_IMPORTED_MODULE_4__/* .InputContext */ .E),
                {
                    ...(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__/* .mergeProps */ .v)(inputProps, inputContextProps),
                    ref: inputOrTextAreaRef
                }
            ],
            [
                (0, _TextArea_mjs__WEBPACK_IMPORTED_MODULE_9__/* .TextAreaContext */ .k),
                {
                    ...inputProps,
                    ref: inputOrTextAreaRef
                }
            ],
            [
                (0, _Text_mjs__WEBPACK_IMPORTED_MODULE_10__/* .TextContext */ .h),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            [
                (0, _FieldError_mjs__WEBPACK_IMPORTED_MODULE_11__/* .FieldErrorContext */ .C),
                validation
            ]
        ]
    }, renderProps.children));
});



//# sourceMappingURL=TextField.module.js.map


/***/ })

}]);