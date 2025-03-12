"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[9758],{

/***/ 56304:
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
  metadata: () => (/* reexport */ site_docs_components_search_field_mdx_8ac_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-search-field-mdx-8ac.json
const site_docs_components_search_field_mdx_8ac_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/search-field","title":"SearchField","description":"Sökfält är ett inmatningsfält anpassat för sökning","source":"@site/docs/components/search-field.mdx","sourceDirName":"components","slug":"/components/search-field","permalink":"/pr-preview/pr-343/components/search-field","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SearchField","description":"Sökfält är ett inmatningsfält anpassat för sökning","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./packages/components/src/search-field/SearchField.tsx + 1 modules
var SearchField = __webpack_require__(97100);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(71372);
;// ./apps/docs/docs/components/search-field.mdx


const frontMatter = {
	title: 'SearchField',
	description: 'Sökfält är ett inmatningsfält anpassat för sökning',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};









const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      SearchField: SearchField/* SearchField */.L
    },
    ...props,
    children: `<SearchField placeholder="Sök efter frukter"/>`
  });
};
const toc = [{
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'SearchField',
      friendlyName: 'Sökfält'
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inmatningsfält anpassat för sökning."
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
        children: "import { SearchField } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: 'SearchField'
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

/***/ 97100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ SearchField)
});

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.js
var search = __webpack_require__(98445);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(53502);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
;// ./packages/components/src/search-field/SearchField.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SearchField_module = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","signalRed100":"#e62323","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","gray10":"#f2f2f2","black":"#000000","fieldError":"fieldError_ivkE","container":"container_o5YK","inputContainer":"inputContainer_hVqH","icon":"icon_KMPT","clear":"clear_cC1p","input":"input_Z0RI"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-stately/searchfield/dist/useSearchFieldState.mjs
var useSearchFieldState = __webpack_require__(7633);
// EXTERNAL MODULE: ./node_modules/@react-aria/searchfield/dist/useSearchField.mjs + 35 modules
var useSearchField = __webpack_require__(46243);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/search-field/SearchField.tsx
'use client';function isValidationError(error){return!!(error!=null&&error.length);}var SearchField=function SearchField(props){var _props$errorMessage;var _useSearchFieldState=(0,useSearchFieldState/* useSearchFieldState */.V)(props),value=_useSearchFieldState.value,setValue=_useSearchFieldState.setValue;var ref=react.useRef(null);var _useSearchField=(0,useSearchField/* useSearchField */.Q)(Object.assign({},props,{label:props.placeholder,validationBehavior:'native'}),{value:value,setValue:setValue},ref),inputProps=_useSearchField.inputProps,errorMessageProps=_useSearchField.errorMessageProps,isInvalid=_useSearchField.isInvalid,validationErrors=_useSearchField.validationErrors,clearButtonProps=_useSearchField.clearButtonProps;var handleChange=function handleChange(_ref){var target=_ref.target;return setValue(target.value);};var handleClear=function handleClear(){return setValue('');};var handleSubmit=function handleSubmit(){var reFocus=props.validate&&isValidationError(props.validate(value))||isInvalid||!value;if(reFocus){var _ref$current;(_ref$current=ref.current)==null||_ref$current.focus();return;}if(props.onSubmit){props.onSubmit(value);}};var handleKeyDown=function handleKeyDown(_ref2){var key=_ref2.key;if(key==='Enter'){handleSubmit();}};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[isInvalid&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},errorMessageProps,{className:SearchField_module.fieldError,children:(_props$errorMessage=props.errorMessage)!=null?_props$errorMessage:validationErrors.join(' ')})),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:SearchField_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:SearchField_module.inputContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(search/* default */.A,{size:20,className:SearchField_module.icon}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",Object.assign({},inputProps,{className:(0,clsx/* default */.A)(TextField_module/* default */.A.input,SearchField_module.input,inputProps.className),ref:ref,onChange:handleChange,value:value,"aria-invalid":isInvalid,onKeyDown:handleKeyDown,"aria-label":props.placeholder,"aria-labelledby":""})),value.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,Object.assign({variant:"icon",size:"small",className:SearchField_module.clear,onPress:handleClear},clearButtonProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})}))]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{isDisabled:props.isDisabled,excludeFromTabOrder:true,onPress:handleSubmit,type:"button",children:props.buttonText?props.buttonText:'Sök'})]})]});};

/***/ }),

/***/ 98445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Search = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);


//# sourceMappingURL=search.js.map


/***/ }),

/***/ 48697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);


//# sourceMappingURL=x.js.map


/***/ }),

/***/ 53502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","signalRed10":"#ffdfdf","gray10":"#f2f2f2","gray20":"#e6e6e6","gray50":"#bfbfbf","black":"#000000","signalRed100":"#e62323","mediumWeight":"500","regularWeight":"400","inputText":"#1f1f1f","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","inputField":"inputField_NRYV","inputWrapper":"inputWrapper_NR0B","label":"label_UgTd","text":"text_E1GG","fieldError":"fieldError_GOHN","passwordText":"passwordText_gBIs","count":"count_PsfX","countExceeded":"countExceeded_hrAA","input":"input_g6A6","wrap":"wrap_ljmz","passwordButton":"passwordButton_kacG"});

/***/ }),

/***/ 92122:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ $5b160d28a433310d$export$c17fa47878dc55b6)
/* harmony export */ });
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
 */ const $5b160d28a433310d$var$localeSymbol = Symbol.for('react-aria.i18n.locale');
const $5b160d28a433310d$var$stringsSymbol = Symbol.for('react-aria.i18n.strings');
let $5b160d28a433310d$var$cachedGlobalStrings = undefined;
class $5b160d28a433310d$export$c17fa47878dc55b6 {
    /** Returns a localized string for the given key and locale. */ getStringForLocale(key, locale) {
        let strings = this.getStringsForLocale(locale);
        let string = strings[key];
        if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
        return string;
    }
    /** Returns all localized strings for the given locale. */ getStringsForLocale(locale) {
        let strings = this.strings[locale];
        if (!strings) {
            strings = $5b160d28a433310d$var$getStringsForLocale(locale, this.strings, this.defaultLocale);
            this.strings[locale] = strings;
        }
        return strings;
    }
    static getGlobalDictionaryForPackage(packageName) {
        if (typeof window === 'undefined') return null;
        let locale = window[$5b160d28a433310d$var$localeSymbol];
        if ($5b160d28a433310d$var$cachedGlobalStrings === undefined) {
            let globalStrings = window[$5b160d28a433310d$var$stringsSymbol];
            if (!globalStrings) return null;
            $5b160d28a433310d$var$cachedGlobalStrings = {};
            for(let pkg in globalStrings)$5b160d28a433310d$var$cachedGlobalStrings[pkg] = new $5b160d28a433310d$export$c17fa47878dc55b6({
                [locale]: globalStrings[pkg]
            }, locale);
        }
        let dictionary = $5b160d28a433310d$var$cachedGlobalStrings === null || $5b160d28a433310d$var$cachedGlobalStrings === void 0 ? void 0 : $5b160d28a433310d$var$cachedGlobalStrings[packageName];
        if (!dictionary) throw new Error(`Strings for package "${packageName}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
        return dictionary;
    }
    constructor(messages, defaultLocale = 'en-US'){
        // Clone messages so we don't modify the original object.
        // Filter out entries with falsy values which may have been caused by applying optimize-locales-plugin.
        this.strings = Object.fromEntries(Object.entries(messages).filter(([, v])=>v));
        this.defaultLocale = defaultLocale;
    }
}
function $5b160d28a433310d$var$getStringsForLocale(locale, strings, defaultLocale = 'en-US') {
    // If there is an exact match, use it.
    if (strings[locale]) return strings[locale];
    // Attempt to find the closest match by language.
    // For example, if the locale is fr-CA (French Canadian), but there is only
    // an fr-FR (France) set of strings, use that.
    // This could be replaced with Intl.LocaleMatcher once it is supported.
    // https://github.com/tc39/proposal-intl-localematcher
    let language = $5b160d28a433310d$var$getLanguage(locale);
    if (strings[language]) return strings[language];
    for(let key in strings){
        if (key.startsWith(language + '-')) return strings[key];
    }
    // Nothing close, use english.
    return strings[defaultLocale];
}
function $5b160d28a433310d$var$getLanguage(locale) {
    // @ts-ignore
    if (Intl.Locale) // @ts-ignore
    return new Intl.Locale(locale).language;
    return locale.split('-')[0];
}



//# sourceMappingURL=LocalizedStringDictionary.module.js.map


/***/ }),

/***/ 57612:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ $6db58dc88e78b024$export$2f817fcdc4b89ae0)
/* harmony export */ });
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
 */ const $6db58dc88e78b024$var$pluralRulesCache = new Map();
const $6db58dc88e78b024$var$numberFormatCache = new Map();
class $6db58dc88e78b024$export$2f817fcdc4b89ae0 {
    /** Formats a localized string for the given key with the provided variables. */ format(key, variables) {
        let message = this.strings.getStringForLocale(key, this.locale);
        return typeof message === 'function' ? message(variables, this) : message;
    }
    plural(count, options, type = 'cardinal') {
        let opt = options['=' + count];
        if (opt) return typeof opt === 'function' ? opt() : opt;
        let key = this.locale + ':' + type;
        let pluralRules = $6db58dc88e78b024$var$pluralRulesCache.get(key);
        if (!pluralRules) {
            pluralRules = new Intl.PluralRules(this.locale, {
                type: type
            });
            $6db58dc88e78b024$var$pluralRulesCache.set(key, pluralRules);
        }
        let selected = pluralRules.select(count);
        opt = options[selected] || options.other;
        return typeof opt === 'function' ? opt() : opt;
    }
    number(value) {
        let numberFormat = $6db58dc88e78b024$var$numberFormatCache.get(this.locale);
        if (!numberFormat) {
            numberFormat = new Intl.NumberFormat(this.locale);
            $6db58dc88e78b024$var$numberFormatCache.set(this.locale, numberFormat);
        }
        return numberFormat.format(value);
    }
    select(options, value) {
        let opt = options[value] || options.other;
        return typeof opt === 'function' ? opt() : opt;
    }
    constructor(locale, strings){
        this.locale = locale;
        this.strings = strings;
    }
}



//# sourceMappingURL=LocalizedStringFormatter.module.js.map


/***/ }),

/***/ 39892:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ $18f2051aff69b9bf$export$a54013f0d02a8f82),
  Y: () => (/* binding */ $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)
});

;// ./node_modules/@react-aria/i18n/dist/utils.mjs
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
 */ // https://en.wikipedia.org/wiki/Right-to-left
const $148a7a147e38ea7f$var$RTL_SCRIPTS = new Set([
    'Arab',
    'Syrc',
    'Samr',
    'Mand',
    'Thaa',
    'Mend',
    'Nkoo',
    'Adlm',
    'Rohg',
    'Hebr'
]);
const $148a7a147e38ea7f$var$RTL_LANGS = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi'
]);
function $148a7a147e38ea7f$export$702d680b21cbd764(localeString) {
    // If the Intl.Locale API is available, use it to get the locale's text direction.
    if (Intl.Locale) {
        let locale = new Intl.Locale(localeString).maximize();
        // Use the text info object to get the direction if possible.
        // @ts-ignore - this was implemented as a property by some browsers before it was standardized as a function.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
        let textInfo = typeof locale.getTextInfo === 'function' ? locale.getTextInfo() : locale.textInfo;
        if (textInfo) return textInfo.direction === 'rtl';
        // Fallback: guess using the script.
        // This is more accurate than guessing by language, since languages can be written in multiple scripts.
        if (locale.script) return $148a7a147e38ea7f$var$RTL_SCRIPTS.has(locale.script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = localeString.split('-')[0];
    return $148a7a147e38ea7f$var$RTL_LANGS.has(lang);
}



//# sourceMappingURL=utils.module.js.map

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var SSRProvider = __webpack_require__(60415);
;// ./node_modules/@react-aria/i18n/dist/useDefaultLocale.mjs




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


// Locale passed from server by PackageLocalizationProvider.
const $1e5a04cdaf7d1af8$var$localeSymbol = Symbol.for('react-aria.i18n.locale');
function $1e5a04cdaf7d1af8$export$f09106e7c6677ec5() {
    let locale = typeof window !== 'undefined' && window[$1e5a04cdaf7d1af8$var$localeSymbol] || typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
    try {
        Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]);
    } catch  {
        locale = 'en-US';
    }
    return {
        locale: locale,
        direction: (0, $148a7a147e38ea7f$export$702d680b21cbd764)(locale) ? 'rtl' : 'ltr'
    };
}
let $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
let $1e5a04cdaf7d1af8$var$listeners = new Set();
function $1e5a04cdaf7d1af8$var$updateLocale() {
    $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
    for (let listener of $1e5a04cdaf7d1af8$var$listeners)listener($1e5a04cdaf7d1af8$var$currentLocale);
}
function $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a() {
    let isSSR = (0, SSRProvider/* useIsSSR */.wR)();
    let [defaultLocale, setDefaultLocale] = (0, react.useState)($1e5a04cdaf7d1af8$var$currentLocale);
    (0, react.useEffect)(()=>{
        if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.addEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale);
        $1e5a04cdaf7d1af8$var$listeners.add(setDefaultLocale);
        return ()=>{
            $1e5a04cdaf7d1af8$var$listeners.delete(setDefaultLocale);
            if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.removeEventListener('languagechange', $1e5a04cdaf7d1af8$var$updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) return {
        locale: 'en-US',
        direction: 'ltr'
    };
    return defaultLocale;
}



//# sourceMappingURL=useDefaultLocale.module.js.map

;// ./node_modules/@react-aria/i18n/dist/context.mjs




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


const $18f2051aff69b9bf$var$I18nContext = /*#__PURE__*/ (0, react).createContext(null);
function $18f2051aff69b9bf$export$a54013f0d02a8f82(props) {
    let { locale: locale, children: children } = props;
    let defaultLocale = (0, $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a)();
    let value = (0, react).useMemo(()=>{
        if (!locale) return defaultLocale;
        return {
            locale: locale,
            direction: (0, $148a7a147e38ea7f$export$702d680b21cbd764)(locale) ? 'rtl' : 'ltr'
        };
    }, [
        defaultLocale,
        locale
    ]);
    return /*#__PURE__*/ (0, react).createElement($18f2051aff69b9bf$var$I18nContext.Provider, {
        value: value
    }, children);
}
function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7() {
    let defaultLocale = (0, $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a)();
    let context = (0, react.useContext)($18f2051aff69b9bf$var$I18nContext);
    return context || defaultLocale;
}



//# sourceMappingURL=context.module.js.map


/***/ }),

/***/ 29571:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ $fca6afa0e843324b$export$87b761675e8eaa10),
/* harmony export */   o: () => (/* binding */ $fca6afa0e843324b$export$f12b703ca79dfbb1)
/* harmony export */ });
/* harmony import */ var _context_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39892);
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92122);
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57612);
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


const $fca6afa0e843324b$var$cache = new WeakMap();
function $fca6afa0e843324b$var$getCachedDictionary(strings) {
    let dictionary = $fca6afa0e843324b$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new (0, _internationalized_string__WEBPACK_IMPORTED_MODULE_1__/* .LocalizedStringDictionary */ .B)(strings);
        $fca6afa0e843324b$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName) {
    return packageName && (0, _internationalized_string__WEBPACK_IMPORTED_MODULE_1__/* .LocalizedStringDictionary */ .B).getGlobalDictionaryForPackage(packageName) || $fca6afa0e843324b$var$getCachedDictionary(strings);
}
function $fca6afa0e843324b$export$f12b703ca79dfbb1(strings, packageName) {
    let { locale: locale } = (0, _context_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useLocale */ .Y)();
    let dictionary = $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName);
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new (0, _internationalized_string__WEBPACK_IMPORTED_MODULE_3__/* .LocalizedStringFormatter */ .J)(locale, dictionary), [
        locale,
        dictionary
    ]);
}



//# sourceMappingURL=useLocalizedStringFormatter.module.js.map


/***/ }),

/***/ 46243:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ $4d52238874b24f86$export$9bb30bbe003b82e0)
});

;// ./node_modules/@react-aria/searchfield/dist/ar-AE.mjs
var $03c9a1a10de12f06$exports = {};
$03c9a1a10de12f06$exports = {
    "Clear search": `\u{645}\u{633}\u{62D} \u{627}\u{644}\u{628}\u{62D}\u{62B}`
};



//# sourceMappingURL=ar-AE.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/bg-BG.mjs
var $4da0c2ffa4ba4159$exports = {};
$4da0c2ffa4ba4159$exports = {
    "Clear search": `\u{418}\u{437}\u{447}\u{438}\u{441}\u{442}\u{432}\u{430}\u{43D}\u{435} \u{43D}\u{430} \u{442}\u{44A}\u{440}\u{441}\u{435}\u{43D}\u{435}`
};



//# sourceMappingURL=bg-BG.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/cs-CZ.mjs
var $8c59fd0c2c96821b$exports = {};
$8c59fd0c2c96821b$exports = {
    "Clear search": `Vymazat hled\xe1n\xed`
};



//# sourceMappingURL=cs-CZ.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/da-DK.mjs
var $0a371f9c1df8120f$exports = {};
$0a371f9c1df8120f$exports = {
    "Clear search": `Ryd s\xf8gning`
};



//# sourceMappingURL=da-DK.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/de-DE.mjs
var $67f4d0b0de9f8a52$exports = {};
$67f4d0b0de9f8a52$exports = {
    "Clear search": `Suche zur\xfccksetzen`
};



//# sourceMappingURL=de-DE.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/el-GR.mjs
var $72a312d948f0214b$exports = {};
$72a312d948f0214b$exports = {
    "Clear search": `\u{391}\u{3C0}\u{3B1}\u{3BB}\u{3BF}\u{3B9}\u{3C6}\u{3AE} \u{3B1}\u{3BD}\u{3B1}\u{3B6}\u{3AE}\u{3C4}\u{3B7}\u{3C3}\u{3B7}\u{3C2}`
};



//# sourceMappingURL=el-GR.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/en-US.mjs
var $5012d21d933388c1$exports = {};
$5012d21d933388c1$exports = {
    "Clear search": `Clear search`
};



//# sourceMappingURL=en-US.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/es-ES.mjs
var $0159854399308e2e$exports = {};
$0159854399308e2e$exports = {
    "Clear search": `Borrar b\xfasqueda`
};



//# sourceMappingURL=es-ES.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/et-EE.mjs
var $390613981d970276$exports = {};
$390613981d970276$exports = {
    "Clear search": `T\xfchjenda otsing`
};



//# sourceMappingURL=et-EE.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/fi-FI.mjs
var $961ae0833f811705$exports = {};
$961ae0833f811705$exports = {
    "Clear search": `Tyhjenn\xe4 haku`
};



//# sourceMappingURL=fi-FI.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/fr-FR.mjs
var $26d76742decfd829$exports = {};
$26d76742decfd829$exports = {
    "Clear search": `Effacer la recherche`
};



//# sourceMappingURL=fr-FR.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/he-IL.mjs
var $92ef254c82a5c769$exports = {};
$92ef254c82a5c769$exports = {
    "Clear search": `\u{5E0}\u{5E7}\u{5D4} \u{5D7}\u{5D9}\u{5E4}\u{5D5}\u{5E9}`
};



//# sourceMappingURL=he-IL.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/hr-HR.mjs
var $e0321b43bdefb8b3$exports = {};
$e0321b43bdefb8b3$exports = {
    "Clear search": `Obri\u{161}i pretragu`
};



//# sourceMappingURL=hr-HR.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/hu-HU.mjs
var $0c1ee0b8d50940d9$exports = {};
$0c1ee0b8d50940d9$exports = {
    "Clear search": `Keres\xe9s t\xf6rl\xe9se`
};



//# sourceMappingURL=hu-HU.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/it-IT.mjs
var $b09198915a38946f$exports = {};
$b09198915a38946f$exports = {
    "Clear search": `Cancella ricerca`
};



//# sourceMappingURL=it-IT.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/ja-JP.mjs
var $3a9a3d180c3145c0$exports = {};
$3a9a3d180c3145c0$exports = {
    "Clear search": `\u{691C}\u{7D22}\u{3092}\u{30AF}\u{30EA}\u{30A2}`
};



//# sourceMappingURL=ja-JP.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/ko-KR.mjs
var $b7a611726449f4a3$exports = {};
$b7a611726449f4a3$exports = {
    "Clear search": `\u{AC80}\u{C0C9} \u{C9C0}\u{C6B0}\u{AE30}`
};



//# sourceMappingURL=ko-KR.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/lt-LT.mjs
var $d9a3d49db610dd5c$exports = {};
$d9a3d49db610dd5c$exports = {
    "Clear search": `I\u{161}valyti ie\u{161}k\u{105}`
};



//# sourceMappingURL=lt-LT.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/lv-LV.mjs
var $3ab64b73ea27c23a$exports = {};
$3ab64b73ea27c23a$exports = {
    "Clear search": `Not\u{12B}r\u{12B}t mekl\u{113}\u{161}anu`
};



//# sourceMappingURL=lv-LV.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/nb-NO.mjs
var $bf5cce1b47d23baf$exports = {};
$bf5cce1b47d23baf$exports = {
    "Clear search": `T\xf8m s\xf8k`
};



//# sourceMappingURL=nb-NO.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/nl-NL.mjs
var $4e0c9a9a010e4598$exports = {};
$4e0c9a9a010e4598$exports = {
    "Clear search": `Zoekactie wissen`
};



//# sourceMappingURL=nl-NL.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/pl-PL.mjs
var $63cf4a75ec270508$exports = {};
$63cf4a75ec270508$exports = {
    "Clear search": `Wyczy\u{15B}\u{107} zawarto\u{15B}\u{107} wyszukiwania`
};



//# sourceMappingURL=pl-PL.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/pt-BR.mjs
var $083b0cad27fdbd06$exports = {};
$083b0cad27fdbd06$exports = {
    "Clear search": `Limpar pesquisa`
};



//# sourceMappingURL=pt-BR.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/pt-PT.mjs
var $1b7f0864d830ba6d$exports = {};
$1b7f0864d830ba6d$exports = {
    "Clear search": `Limpar pesquisa`
};



//# sourceMappingURL=pt-PT.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/ro-RO.mjs
var $d6d2588377fc9718$exports = {};
$d6d2588377fc9718$exports = {
    "Clear search": `\u{15E}terge\u{163}i c\u{103}utarea`
};



//# sourceMappingURL=ro-RO.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/ru-RU.mjs
var $701c918a4653e946$exports = {};
$701c918a4653e946$exports = {
    "Clear search": `\u{41E}\u{447}\u{438}\u{441}\u{442}\u{438}\u{442}\u{44C} \u{43F}\u{43E}\u{438}\u{441}\u{43A}`
};



//# sourceMappingURL=ru-RU.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/sk-SK.mjs
var $7cacc29a1e5f4fbe$exports = {};
$7cacc29a1e5f4fbe$exports = {
    "Clear search": `Vymaza\u{165} vyh\u{13E}ad\xe1vanie`
};



//# sourceMappingURL=sk-SK.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/sl-SI.mjs
var $c63231bcc300d0df$exports = {};
$c63231bcc300d0df$exports = {
    "Clear search": `Po\u{10D}isti iskanje`
};



//# sourceMappingURL=sl-SI.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/sr-SP.mjs
var $b61510478bc0e6f6$exports = {};
$b61510478bc0e6f6$exports = {
    "Clear search": `Obri\u{161}i pretragu`
};



//# sourceMappingURL=sr-SP.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/sv-SE.mjs
var $ce325e6dd3f9c37a$exports = {};
$ce325e6dd3f9c37a$exports = {
    "Clear search": `Rensa s\xf6kning`
};



//# sourceMappingURL=sv-SE.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/tr-TR.mjs
var $1f7e1cf2285af2b2$exports = {};
$1f7e1cf2285af2b2$exports = {
    "Clear search": `Aramay\u{131} temizle`
};



//# sourceMappingURL=tr-TR.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/uk-UA.mjs
var $2d999353ca652e34$exports = {};
$2d999353ca652e34$exports = {
    "Clear search": `\u{41E}\u{447}\u{438}\u{441}\u{442}\u{438}\u{442}\u{438} \u{43F}\u{43E}\u{448}\u{443}\u{43A}`
};



//# sourceMappingURL=uk-UA.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/zh-CN.mjs
var $117b536bfb1ae554$exports = {};
$117b536bfb1ae554$exports = {
    "Clear search": `\u{6E05}\u{9664}\u{641C}\u{7D22}`
};



//# sourceMappingURL=zh-CN.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/zh-TW.mjs
var $525f6fa4ac26e278$exports = {};
$525f6fa4ac26e278$exports = {
    "Clear search": `\u{6E05}\u{9664}\u{641C}\u{5C0B}\u{689D}\u{4EF6}`
};



//# sourceMappingURL=zh-TW.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/intlStrings.mjs



































var $8112f8b883c0272d$exports = {};


































$8112f8b883c0272d$exports = {
    "ar-AE": $03c9a1a10de12f06$exports,
    "bg-BG": $4da0c2ffa4ba4159$exports,
    "cs-CZ": $8c59fd0c2c96821b$exports,
    "da-DK": $0a371f9c1df8120f$exports,
    "de-DE": $67f4d0b0de9f8a52$exports,
    "el-GR": $72a312d948f0214b$exports,
    "en-US": $5012d21d933388c1$exports,
    "es-ES": $0159854399308e2e$exports,
    "et-EE": $390613981d970276$exports,
    "fi-FI": $961ae0833f811705$exports,
    "fr-FR": $26d76742decfd829$exports,
    "he-IL": $92ef254c82a5c769$exports,
    "hr-HR": $e0321b43bdefb8b3$exports,
    "hu-HU": $0c1ee0b8d50940d9$exports,
    "it-IT": $b09198915a38946f$exports,
    "ja-JP": $3a9a3d180c3145c0$exports,
    "ko-KR": $b7a611726449f4a3$exports,
    "lt-LT": $d9a3d49db610dd5c$exports,
    "lv-LV": $3ab64b73ea27c23a$exports,
    "nb-NO": $bf5cce1b47d23baf$exports,
    "nl-NL": $4e0c9a9a010e4598$exports,
    "pl-PL": $63cf4a75ec270508$exports,
    "pt-BR": $083b0cad27fdbd06$exports,
    "pt-PT": $1b7f0864d830ba6d$exports,
    "ro-RO": $d6d2588377fc9718$exports,
    "ru-RU": $701c918a4653e946$exports,
    "sk-SK": $7cacc29a1e5f4fbe$exports,
    "sl-SI": $c63231bcc300d0df$exports,
    "sr-SP": $b61510478bc0e6f6$exports,
    "sv-SE": $ce325e6dd3f9c37a$exports,
    "tr-TR": $1f7e1cf2285af2b2$exports,
    "uk-UA": $2d999353ca652e34$exports,
    "zh-CN": $117b536bfb1ae554$exports,
    "zh-TW": $525f6fa4ac26e278$exports
};



//# sourceMappingURL=intlStrings.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/chain.mjs
var chain = __webpack_require__(72166);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(29571);
// EXTERNAL MODULE: ./node_modules/@react-aria/textfield/dist/useTextField.mjs
var useTextField = __webpack_require__(11811);
;// ./node_modules/@react-aria/searchfield/dist/useSearchField.mjs






function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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



function $4d52238874b24f86$export$9bb30bbe003b82e0(props, state, inputRef) {
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault($8112f8b883c0272d$exports))), '@react-aria/searchfield');
    let { isDisabled: isDisabled, isReadOnly: isReadOnly, onSubmit: onSubmit, onClear: onClear, type: type = 'search' } = props;
    let onKeyDown = (e)=>{
        const key = e.key;
        if (key === 'Enter' && (isDisabled || isReadOnly)) e.preventDefault();
        if (isDisabled || isReadOnly) return;
        // for backward compatibility;
        // otherwise, "Enter" on an input would trigger a form submit, the default browser behavior
        if (key === 'Enter' && onSubmit) {
            e.preventDefault();
            onSubmit(state.value);
        }
        if (key === 'Escape') {
            // Also check the inputRef value for the case where the value was set directly on the input element instead of going through
            // the hook
            if (state.value === '' && (!inputRef.current || inputRef.current.value === '')) e.continuePropagation();
            else {
                e.preventDefault();
                state.setValue('');
                if (onClear) onClear();
            }
        }
    };
    let onClearButtonClick = ()=>{
        state.setValue('');
        if (onClear) onClear();
    };
    let onPressStart = ()=>{
        var // this is in PressStart for mobile so that touching the clear button doesn't remove focus from
        // the input and close the keyboard
        _inputRef_current;
        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
    };
    let { labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, useTextField/* useTextField */.v)({
        ...props,
        value: state.value,
        onChange: state.setValue,
        onKeyDown: !isReadOnly ? (0, chain/* chain */.c)(onKeyDown, props.onKeyDown) : props.onKeyDown,
        type: type
    }, inputRef);
    return {
        labelProps: labelProps,
        inputProps: {
            ...inputProps,
            // already handled by useSearchFieldState
            defaultValue: undefined
        },
        clearButtonProps: {
            'aria-label': stringFormatter.format('Clear search'),
            excludeFromTabOrder: true,
            preventFocusOnPress: true,
            isDisabled: isDisabled || isReadOnly,
            onPress: onClearButtonClick,
            onPressStart: onPressStart
        },
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        ...validation
    };
}



//# sourceMappingURL=useSearchField.module.js.map


/***/ }),

/***/ 11811:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ $2d73ec29415bd339$export$712718f7aec83d5)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5987);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8343);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24836);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32217);
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8356);
/* harmony import */ var _react_aria_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85441);
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4351);
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
    let { focusableProps: focusableProps } = (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_2__/* .useFocusable */ .W)(props, ref);
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
        if (ref.current instanceof (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__/* .getOwnerWindow */ .m)(ref.current).HTMLTextAreaElement) {
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

/***/ 7633:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ $0b2218c4e3fe7d7e$export$3f8be18b0f41eaf2)
/* harmony export */ });
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8356);


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
function $0b2218c4e3fe7d7e$export$3f8be18b0f41eaf2(props) {
    let [value, setValue] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__/* .useControlledState */ .P)($0b2218c4e3fe7d7e$var$toString(props.value), $0b2218c4e3fe7d7e$var$toString(props.defaultValue) || '', props.onChange);
    return {
        value: value,
        setValue: setValue
    };
}
function $0b2218c4e3fe7d7e$var$toString(val) {
    if (val == null) return;
    return val.toString();
}



//# sourceMappingURL=useSearchFieldState.module.js.map


/***/ })

}]);