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
const site_docs_components_radio_mdx_7e6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/radio","title":"Radio","description":"Radio är en typ av inmatningsfält som används för att välja ett alternativ från en uppsättning alternativ","source":"@site/docs/components/radio.mdx","sourceDirName":"components","slug":"/components/radio","permalink":"/pr-preview/pr-345/components/radio","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Radio","description":"Radio är en typ av inmatningsfält som används för att välja ett alternativ från en uppsättning alternativ","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
          href: "/pr-preview/pr-345/components/checkbox",
          children: "Checkbox"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Om det är fler alternativ än fem bör ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/pr-preview/pr-345/components/select",
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
/* harmony default export */ const Radio_module = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","inputLabel":"undefined","inputText":"#1f1f1f","black":"#000000","blue150":"#143c50","gray50":"#bfbfbf","gray60":"#b3b3b3","gray10":"#f2f2f2","signalRed10":"#ffdfdf","signalRed100":"#e62323","medium":"undefined","gray150":"#1f1f1f","regular":"undefined","smBreakpoint":"(max-width: 767px)","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","mdBreakpoint":"(min-width: 768px)","borderSecondary":"#b3b3b3","radioGroup":"radioGroup_EgZH","wrap":"wrap_R8gp","radio":"radio_U9gG"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/RadioGroup.mjs + 4 modules
var dist_RadioGroup = __webpack_require__(96325);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Group.mjs
var Group = __webpack_require__(63899);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx
var TextField = __webpack_require__(69240);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","signalRed10":"#ffdfdf","gray10":"#f2f2f2","gray20":"#e6e6e6","gray50":"#bfbfbf","black":"#000000","signalRed100":"#e62323","mediumWeight":"500","regularWeight":"400","inputText":"#1f1f1f","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","inputField":"inputField_NRYV","inputWrapper":"inputWrapper_NR0B","label":"label_UgTd","text":"text_E1GG","fieldError":"fieldError_GOHN","passwordText":"passwordText_gBIs","count":"count_PsfX","countExceeded":"countExceeded_hrAA","input":"input_g6A6","wrap":"wrap_ljmz","passwordButton":"passwordButton_kacG"});

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


/***/ })

}]);