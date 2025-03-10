"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6445],{

/***/ 37946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CircleAlert)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const CircleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);


//# sourceMappingURL=circle-alert.js.map


/***/ }),

/***/ 79804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CircleCheck)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const CircleCheck = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);


//# sourceMappingURL=circle-check.js.map


/***/ }),

/***/ 97213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Info)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Info = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);


//# sourceMappingURL=info.js.map


/***/ }),

/***/ 418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TriangleAlert)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const TriangleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);


//# sourceMappingURL=triangle-alert.js.map


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

/***/ 58493:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var React = __webpack_require__(96540);
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is,
  useState = React.useState,
  useEffect = React.useEffect,
  useLayoutEffect = React.useLayoutEffect,
  useDebugValue = React.useDebugValue;
function useSyncExternalStore$2(subscribe, getSnapshot) {
  var value = getSnapshot(),
    _useState = useState({ inst: { value: value, getSnapshot: getSnapshot } }),
    inst = _useState[0].inst,
    forceUpdate = _useState[1];
  useLayoutEffect(
    function () {
      inst.value = value;
      inst.getSnapshot = getSnapshot;
      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
    },
    [subscribe, value, getSnapshot]
  );
  useEffect(
    function () {
      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
      return subscribe(function () {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
      });
    },
    [subscribe]
  );
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return !0;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot) {
  return getSnapshot();
}
var shim =
  "undefined" === typeof window ||
  "undefined" === typeof window.document ||
  "undefined" === typeof window.document.createElement
    ? useSyncExternalStore$1
    : useSyncExternalStore$2;
exports.useSyncExternalStore =
  void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;


/***/ }),

/***/ 19888:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(58493);
} else {}


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

/***/ 93749:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ $7853651519a70071$exports)
});

;// ./node_modules/@react-aria/toast/dist/ar-AE.mjs
var $ff9177efc58547ad$exports = {};
$ff9177efc58547ad$exports = {
    "close": `\u{625}\u{63A}\u{644}\u{627}\u{642}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{625}\u{634}\u{639}\u{627}\u{631}`,
            other: ()=>`${formatter.number(args.count)} \u{625}\u{634}\u{639}\u{627}\u{631}\u{627}\u{62A}`
        })}.`
};



//# sourceMappingURL=ar-AE.module.js.map

;// ./node_modules/@react-aria/toast/dist/bg-BG.mjs
var $25eb7c0c0c45e544$exports = {};
$25eb7c0c0c45e544$exports = {
    "close": `\u{417}\u{430}\u{442}\u{432}\u{43E}\u{440}\u{438}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{438}\u{435}`,
            other: ()=>`${formatter.number(args.count)} \u{438}\u{437}\u{432}\u{435}\u{441}\u{442}\u{438}\u{44F}`
        })}.`
};



//# sourceMappingURL=bg-BG.module.js.map

;// ./node_modules/@react-aria/toast/dist/cs-CZ.mjs
var $28feffc3d61a8691$exports = {};
$28feffc3d61a8691$exports = {
    "close": `Zav\u{159}\xedt`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} ozn\xe1men\xed`,
            other: ()=>`${formatter.number(args.count)} ozn\xe1men\xed`
        })}.`
};



//# sourceMappingURL=cs-CZ.module.js.map

;// ./node_modules/@react-aria/toast/dist/da-DK.mjs
var $390d441203d25ff4$exports = {};
$390d441203d25ff4$exports = {
    "close": `Luk`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} besked`,
            other: ()=>`${formatter.number(args.count)} beskeder`
        })}.`
};



//# sourceMappingURL=da-DK.module.js.map

;// ./node_modules/@react-aria/toast/dist/de-DE.mjs
var $7063c2d0f14f979a$exports = {};
$7063c2d0f14f979a$exports = {
    "close": `Schlie\xdfen`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} Benachrichtigung`,
            other: ()=>`${formatter.number(args.count)} Benachrichtigungen`
        })}.`
};



//# sourceMappingURL=de-DE.module.js.map

;// ./node_modules/@react-aria/toast/dist/el-GR.mjs
var $2dfc1dbb6590af88$exports = {};
$2dfc1dbb6590af88$exports = {
    "close": `\u{39A}\u{3BB}\u{3B5}\u{3AF}\u{3C3}\u{3B9}\u{3BC}\u{3BF}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{3B5}\u{3B9}\u{3B4}\u{3BF}\u{3C0}\u{3BF}\u{3AF}\u{3B7}\u{3C3}\u{3B7}`,
            other: ()=>`${formatter.number(args.count)} \u{3B5}\u{3B9}\u{3B4}\u{3BF}\u{3C0}\u{3BF}\u{3B9}\u{3AE}\u{3C3}\u{3B5}\u{3B9}\u{3C2}`
        })}.`
};



//# sourceMappingURL=el-GR.module.js.map

;// ./node_modules/@react-aria/toast/dist/en-US.mjs
var $9a12ff1caae5a7a5$exports = {};
$9a12ff1caae5a7a5$exports = {
    "close": `Close`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} notification`,
            other: ()=>`${formatter.number(args.count)} notifications`
        })}.`
};



//# sourceMappingURL=en-US.module.js.map

;// ./node_modules/@react-aria/toast/dist/es-ES.mjs
var $f4095fb5a72adbe6$exports = {};
$f4095fb5a72adbe6$exports = {
    "close": `Cerrar`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} notificaci\xf3n`,
            other: ()=>`${formatter.number(args.count)} notificaciones`
        })}.`
};



//# sourceMappingURL=es-ES.module.js.map

;// ./node_modules/@react-aria/toast/dist/et-EE.mjs
var $75bc5191b9d7826a$exports = {};
$75bc5191b9d7826a$exports = {
    "close": `Sule`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} teatis`,
            other: ()=>`${formatter.number(args.count)} teatist`
        })}.`
};



//# sourceMappingURL=et-EE.module.js.map

;// ./node_modules/@react-aria/toast/dist/fi-FI.mjs
var $e4b9aef18b0db8dc$exports = {};
$e4b9aef18b0db8dc$exports = {
    "close": `Sulje`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} ilmoitus`,
            other: ()=>`${formatter.number(args.count)} ilmoitusta`
        })}.`
};



//# sourceMappingURL=fi-FI.module.js.map

;// ./node_modules/@react-aria/toast/dist/fr-FR.mjs
var $888756784d832bd7$exports = {};
$888756784d832bd7$exports = {
    "close": `Fermer`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} notification`,
            other: ()=>`${formatter.number(args.count)} notifications`
        })}.`
};



//# sourceMappingURL=fr-FR.module.js.map

;// ./node_modules/@react-aria/toast/dist/he-IL.mjs
var $6835949b68a1fabf$exports = {};
$6835949b68a1fabf$exports = {
    "close": `\u{5E1}\u{5D2}\u{5D5}\u{5E8}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{5D4}\u{5EA}\u{5E8}\u{5D0}\u{5D4}`,
            other: ()=>`${formatter.number(args.count)} \u{5D4}\u{5EA}\u{5E8}\u{5D0}\u{5D5}\u{5EA}`
        })}.`
};



//# sourceMappingURL=he-IL.module.js.map

;// ./node_modules/@react-aria/toast/dist/hr-HR.mjs
var $87ffcbc0b651e40b$exports = {};
$87ffcbc0b651e40b$exports = {
    "close": `Zatvori`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} obavijest`,
            other: ()=>`${formatter.number(args.count)} obavijesti`
        })}.`
};



//# sourceMappingURL=hr-HR.module.js.map

;// ./node_modules/@react-aria/toast/dist/hu-HU.mjs
var $dc6e3b2813600d69$exports = {};
$dc6e3b2813600d69$exports = {
    "close": `Bez\xe1r\xe1s`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \xe9rtes\xedt\xe9s`,
            other: ()=>`${formatter.number(args.count)} \xe9rtes\xedt\xe9s`
        })}.`
};



//# sourceMappingURL=hu-HU.module.js.map

;// ./node_modules/@react-aria/toast/dist/it-IT.mjs
var $fe136bcbacfcfa14$exports = {};
$fe136bcbacfcfa14$exports = {
    "close": `Chiudi`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} notifica`,
            other: ()=>`${formatter.number(args.count)} notifiche`
        })}.`
};



//# sourceMappingURL=it-IT.module.js.map

;// ./node_modules/@react-aria/toast/dist/ja-JP.mjs
var $8fb53a929b46df83$exports = {};
$8fb53a929b46df83$exports = {
    "close": `\u{9589}\u{3058}\u{308B}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{500B}\u{306E}\u{901A}\u{77E5}`,
            other: ()=>`${formatter.number(args.count)} \u{500B}\u{306E}\u{901A}\u{77E5}`
        })}\u{3002}`
};



//# sourceMappingURL=ja-JP.module.js.map

;// ./node_modules/@react-aria/toast/dist/ko-KR.mjs
var $2c38dbfaf041a865$exports = {};
$2c38dbfaf041a865$exports = {
    "close": `\u{B2EB}\u{AE30}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C54C}\u{B9BC}`,
            other: ()=>`${formatter.number(args.count)}\u{AC1C} \u{C54C}\u{B9BC}`
        })}.`
};



//# sourceMappingURL=ko-KR.module.js.map

;// ./node_modules/@react-aria/toast/dist/lt-LT.mjs
var $48f3f33a29908d4c$exports = {};
$48f3f33a29908d4c$exports = {
    "close": `U\u{17E}daryti`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} prane\u{161}imas`,
            other: ()=>`${formatter.number(args.count)} prane\u{161}imai`
        })}.`
};



//# sourceMappingURL=lt-LT.module.js.map

;// ./node_modules/@react-aria/toast/dist/lv-LV.mjs
var $9867160d996455a0$exports = {};
$9867160d996455a0$exports = {
    "close": `Aizv\u{113}rt`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} pazi\u{146}ojums`,
            other: ()=>`${formatter.number(args.count)} pazi\u{146}ojumi`
        })}.`
};



//# sourceMappingURL=lv-LV.module.js.map

;// ./node_modules/@react-aria/toast/dist/nb-NO.mjs
var $196258ea25c96487$exports = {};
$196258ea25c96487$exports = {
    "close": `Lukk`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} varsling`,
            other: ()=>`${formatter.number(args.count)} varsler`
        })}.`
};



//# sourceMappingURL=nb-NO.module.js.map

;// ./node_modules/@react-aria/toast/dist/nl-NL.mjs
var $949061cb954e8000$exports = {};
$949061cb954e8000$exports = {
    "close": `Sluiten`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} melding`,
            other: ()=>`${formatter.number(args.count)} meldingen`
        })}.`
};



//# sourceMappingURL=nl-NL.module.js.map

;// ./node_modules/@react-aria/toast/dist/pl-PL.mjs
var $8189bed27add1ad3$exports = {};
$8189bed27add1ad3$exports = {
    "close": `Zamknij`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} powiadomienie`,
            few: ()=>`${formatter.number(args.count)} powiadomienia`,
            many: ()=>`${formatter.number(args.count)} powiadomie\u{144}`,
            other: ()=>`${formatter.number(args.count)} powiadomienia`
        })}.`
};



//# sourceMappingURL=pl-PL.module.js.map

;// ./node_modules/@react-aria/toast/dist/pt-BR.mjs
var $a361756a93b6e28c$exports = {};
$a361756a93b6e28c$exports = {
    "close": `Fechar`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} notifica\xe7\xe3o`,
            other: ()=>`${formatter.number(args.count)} notifica\xe7\xf5es`
        })}.`
};



//# sourceMappingURL=pt-BR.module.js.map

;// ./node_modules/@react-aria/toast/dist/pt-PT.mjs
var $034c7393857c8db0$exports = {};
$034c7393857c8db0$exports = {
    "close": `Fechar`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} notifica\xe7\xe3o`,
            other: ()=>`${formatter.number(args.count)} notifica\xe7\xf5es`
        })}.`
};



//# sourceMappingURL=pt-PT.module.js.map

;// ./node_modules/@react-aria/toast/dist/ro-RO.mjs
var $e33d3b3868478b04$exports = {};
$e33d3b3868478b04$exports = {
    "close": `\xcenchide\u{163}i`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} notificare`,
            other: ()=>`${formatter.number(args.count)} notific\u{103}ri`
        })}.`
};



//# sourceMappingURL=ro-RO.module.js.map

;// ./node_modules/@react-aria/toast/dist/ru-RU.mjs
var $9a7dcb914b29cd9f$exports = {};
$9a7dcb914b29cd9f$exports = {
    "close": `\u{417}\u{430}\u{43A}\u{440}\u{44B}\u{442}\u{44C}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{443}\u{432}\u{435}\u{434}\u{43E}\u{43C}\u{43B}\u{435}\u{43D}\u{438}\u{435}`,
            other: ()=>`${formatter.number(args.count)} \u{443}\u{432}\u{435}\u{434}\u{43E}\u{43C}\u{43B}\u{435}\u{43D}\u{438}\u{44F}`
        })}.`
};



//# sourceMappingURL=ru-RU.module.js.map

;// ./node_modules/@react-aria/toast/dist/sk-SK.mjs
var $e43d964a0c7f1266$exports = {};
$e43d964a0c7f1266$exports = {
    "close": `Zatvori\u{165}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} ozn\xe1menie`,
            few: ()=>`${formatter.number(args.count)} ozn\xe1menia`,
            other: ()=>`${formatter.number(args.count)} ozn\xe1men\xed`
        })}.`
};



//# sourceMappingURL=sk-SK.module.js.map

;// ./node_modules/@react-aria/toast/dist/sl-SI.mjs
var $0bc56cee3275bcaa$exports = {};
$0bc56cee3275bcaa$exports = {
    "close": `Zapri`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} obvestilo`,
            two: ()=>`${formatter.number(args.count)} obvestili`,
            few: ()=>`${formatter.number(args.count)} obvestila`,
            other: ()=>`${formatter.number(args.count)} obvestil`
        })}.`
};



//# sourceMappingURL=sl-SI.module.js.map

;// ./node_modules/@react-aria/toast/dist/sr-SP.mjs
var $7dbdd7289c10d2ba$exports = {};
$7dbdd7289c10d2ba$exports = {
    "close": `Zatvori`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} obave\u{161}tenje`,
            other: ()=>`${formatter.number(args.count)} obave\u{161}tenja`
        })}.`
};



//# sourceMappingURL=sr-SP.module.js.map

;// ./node_modules/@react-aria/toast/dist/sv-SE.mjs
var $ccbe6066c10b1e53$exports = {};
$ccbe6066c10b1e53$exports = {
    "close": `St\xe4ng`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} meddelande`,
            other: ()=>`${formatter.number(args.count)} meddelanden`
        })}.`
};



//# sourceMappingURL=sv-SE.module.js.map

;// ./node_modules/@react-aria/toast/dist/tr-TR.mjs
var $9d503476b9d858b7$exports = {};
$9d503476b9d858b7$exports = {
    "close": `Kapat`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} bildirim`,
            other: ()=>`${formatter.number(args.count)} bildirim`
        })}.`
};



//# sourceMappingURL=tr-TR.module.js.map

;// ./node_modules/@react-aria/toast/dist/uk-UA.mjs
var $32ee419c7b9b7a83$exports = {};
$32ee419c7b9b7a83$exports = {
    "close": `\u{417}\u{430}\u{43A}\u{440}\u{438}\u{442}\u{438}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{441}\u{43F}\u{43E}\u{432}\u{456}\u{449}\u{435}\u{43D}\u{43D}\u{44F}`,
            other: ()=>`${formatter.number(args.count)} \u{441}\u{43F}\u{43E}\u{432}\u{456}\u{449}\u{435}\u{43D}\u{43D}\u{44F}`
        })}.`
};



//# sourceMappingURL=uk-UA.module.js.map

;// ./node_modules/@react-aria/toast/dist/zh-CN.mjs
var $122525af1cb737c7$exports = {};
$122525af1cb737c7$exports = {
    "close": `\u{5173}\u{95ED}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{4E2A}\u{901A}\u{77E5}`,
            other: ()=>`${formatter.number(args.count)} \u{4E2A}\u{901A}\u{77E5}`
        })}\u{3002}`
};



//# sourceMappingURL=zh-CN.module.js.map

;// ./node_modules/@react-aria/toast/dist/zh-TW.mjs
var $52e8b1b00094e5a3$exports = {};
$52e8b1b00094e5a3$exports = {
    "close": `\u{95DC}\u{9589}`,
    "notifications": (args, formatter)=>`${formatter.plural(args.count, {
            one: ()=>`${formatter.number(args.count)} \u{500B}\u{901A}\u{77E5}`,
            other: ()=>`${formatter.number(args.count)} \u{500B}\u{901A}\u{77E5}`
        })}\u{3002}`
};



//# sourceMappingURL=zh-TW.module.js.map

;// ./node_modules/@react-aria/toast/dist/intlStrings.mjs



































var $7853651519a70071$exports = {};


































$7853651519a70071$exports = {
    "ar-AE": $ff9177efc58547ad$exports,
    "bg-BG": $25eb7c0c0c45e544$exports,
    "cs-CZ": $28feffc3d61a8691$exports,
    "da-DK": $390d441203d25ff4$exports,
    "de-DE": $7063c2d0f14f979a$exports,
    "el-GR": $2dfc1dbb6590af88$exports,
    "en-US": $9a12ff1caae5a7a5$exports,
    "es-ES": $f4095fb5a72adbe6$exports,
    "et-EE": $75bc5191b9d7826a$exports,
    "fi-FI": $e4b9aef18b0db8dc$exports,
    "fr-FR": $888756784d832bd7$exports,
    "he-IL": $6835949b68a1fabf$exports,
    "hr-HR": $87ffcbc0b651e40b$exports,
    "hu-HU": $dc6e3b2813600d69$exports,
    "it-IT": $fe136bcbacfcfa14$exports,
    "ja-JP": $8fb53a929b46df83$exports,
    "ko-KR": $2c38dbfaf041a865$exports,
    "lt-LT": $48f3f33a29908d4c$exports,
    "lv-LV": $9867160d996455a0$exports,
    "nb-NO": $196258ea25c96487$exports,
    "nl-NL": $949061cb954e8000$exports,
    "pl-PL": $8189bed27add1ad3$exports,
    "pt-BR": $a361756a93b6e28c$exports,
    "pt-PT": $034c7393857c8db0$exports,
    "ro-RO": $e33d3b3868478b04$exports,
    "ru-RU": $9a7dcb914b29cd9f$exports,
    "sk-SK": $e43d964a0c7f1266$exports,
    "sl-SI": $0bc56cee3275bcaa$exports,
    "sr-SP": $7dbdd7289c10d2ba$exports,
    "sv-SE": $ccbe6066c10b1e53$exports,
    "tr-TR": $9d503476b9d858b7$exports,
    "uk-UA": $32ee419c7b9b7a83$exports,
    "zh-CN": $122525af1cb737c7$exports,
    "zh-TW": $52e8b1b00094e5a3$exports
};



//# sourceMappingURL=intlStrings.module.js.map


/***/ }),

/***/ 93187:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ $d6542812f0669241$export$a407b657d3044108)
/* harmony export */ });
/* harmony import */ var _intlStrings_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93749);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84137);
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29571);






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



function $d6542812f0669241$export$a407b657d3044108(props, state, ref) {
    let { key: key, timer: timer, timeout: timeout, animation: animation } = props.toast;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (timer == null || timeout == null) return;
        timer.reset(timeout);
        return ()=>{
            timer.pause();
        };
    }, [
        timer,
        timeout
    ]);
    let [isEntered, setIsEntered] = (0, react__WEBPACK_IMPORTED_MODULE_0__).useState(false);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (animation === 'entering' || animation === 'queued') setIsEntered(true);
    }, [
        animation
    ]);
    let titleId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Bi)();
    let descriptionId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useSlotId */ .X1)();
    let stringFormatter = (0, _react_aria_i18n__WEBPACK_IMPORTED_MODULE_2__/* .useLocalizedStringFormatter */ .o)((0, ($parcel$interopDefault(_intlStrings_mjs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A))), '@react-aria/toast');
    return {
        toastProps: {
            role: 'alertdialog',
            'aria-modal': 'false',
            'aria-label': props['aria-label'],
            'aria-labelledby': props['aria-labelledby'] || titleId,
            'aria-describedby': props['aria-describedby'] || descriptionId,
            'aria-details': props['aria-details'],
            // Hide toasts that are animating out so VoiceOver doesn't announce them.
            'aria-hidden': animation === 'exiting' ? 'true' : undefined,
            tabIndex: 0
        },
        contentProps: {
            role: 'alert',
            'aria-atomic': 'true',
            style: {
                visibility: isEntered || animation === null ? 'visible' : 'hidden'
            }
        },
        titleProps: {
            id: titleId
        },
        descriptionProps: {
            id: descriptionId
        },
        closeButtonProps: {
            'aria-label': stringFormatter.format('close'),
            onPress: ()=>state.close(key)
        }
    };
}



//# sourceMappingURL=useToast.module.js.map


/***/ }),

/***/ 96766:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ $6cc546b19ee7130a$export$b8cbbb20a51697de)
});

// EXTERNAL MODULE: ./node_modules/@react-aria/toast/dist/intlStrings.mjs + 34 modules
var intlStrings = __webpack_require__(93749);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(49953);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
var focusWithoutScrolling = __webpack_require__(32268);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
var useFocusWithin = __webpack_require__(59461);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(95562);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/use-sync-external-store/shim/index.js
var shim = __webpack_require__(19888);
;// ./node_modules/@react-aria/landmark/dist/useLandmark.mjs




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


// Increment this version number whenever the
// LandmarkManagerApi or Landmark interfaces change.
const $a86207c5d7f7e1fb$var$LANDMARK_API_VERSION = 1;
// Symbol under which the singleton landmark manager instance is attached to the document.
const $a86207c5d7f7e1fb$var$landmarkSymbol = Symbol.for('react-aria-landmark-manager');
function $a86207c5d7f7e1fb$var$subscribe(fn) {
    document.addEventListener('react-aria-landmark-manager-change', fn);
    return ()=>document.removeEventListener('react-aria-landmark-manager-change', fn);
}
function $a86207c5d7f7e1fb$var$getLandmarkManager() {
    if (typeof document === 'undefined') return null;
    // Reuse an existing instance if it has the same or greater version.
    let instance = document[$a86207c5d7f7e1fb$var$landmarkSymbol];
    if (instance && instance.version >= $a86207c5d7f7e1fb$var$LANDMARK_API_VERSION) return instance;
    // Otherwise, create a new instance and dispatch an event so anything using the existing
    // instance updates and re-registers their landmarks with the new one.
    document[$a86207c5d7f7e1fb$var$landmarkSymbol] = new $a86207c5d7f7e1fb$var$LandmarkManager();
    document.dispatchEvent(new CustomEvent('react-aria-landmark-manager-change'));
    return document[$a86207c5d7f7e1fb$var$landmarkSymbol];
}
// Subscribes a React component to the current landmark manager instance.
function $a86207c5d7f7e1fb$var$useLandmarkManager() {
    return (0, shim.useSyncExternalStore)($a86207c5d7f7e1fb$var$subscribe, $a86207c5d7f7e1fb$var$getLandmarkManager, $a86207c5d7f7e1fb$var$getLandmarkManager);
}
class $a86207c5d7f7e1fb$var$LandmarkManager {
    setupIfNeeded() {
        if (this.isListening) return;
        document.addEventListener('keydown', this.f6Handler, {
            capture: true
        });
        document.addEventListener('focusin', this.focusinHandler, {
            capture: true
        });
        document.addEventListener('focusout', this.focusoutHandler, {
            capture: true
        });
        this.isListening = true;
    }
    teardownIfNeeded() {
        if (!this.isListening || this.landmarks.length > 0 || this.refCount > 0) return;
        document.removeEventListener('keydown', this.f6Handler, {
            capture: true
        });
        document.removeEventListener('focusin', this.focusinHandler, {
            capture: true
        });
        document.removeEventListener('focusout', this.focusoutHandler, {
            capture: true
        });
        this.isListening = false;
    }
    focusLandmark(landmark, direction) {
        var _this_landmarks_find_focus, _this_landmarks_find;
        (_this_landmarks_find = this.landmarks.find((l)=>l.ref.current === landmark)) === null || _this_landmarks_find === void 0 ? void 0 : (_this_landmarks_find_focus = _this_landmarks_find.focus) === null || _this_landmarks_find_focus === void 0 ? void 0 : _this_landmarks_find_focus.call(_this_landmarks_find, direction);
    }
    /**
   * Return set of landmarks with a specific role.
   */ getLandmarksByRole(role) {
        return new Set(this.landmarks.filter((l)=>l.role === role));
    }
    /**
   * Return first landmark with a specific role.
   */ getLandmarkByRole(role) {
        return this.landmarks.find((l)=>l.role === role);
    }
    addLandmark(newLandmark) {
        this.setupIfNeeded();
        if (this.landmarks.find((landmark)=>landmark.ref === newLandmark.ref) || !newLandmark.ref.current) return;
        if (this.landmarks.filter((landmark)=>landmark.role === 'main').length > 1) console.error('Page can contain no more than one landmark with the role "main".');
        if (this.landmarks.length === 0) {
            this.landmarks = [
                newLandmark
            ];
            this.checkLabels(newLandmark.role);
            return;
        }
        // Binary search to insert new landmark based on position in document relative to existing landmarks.
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        let start = 0;
        let end = this.landmarks.length - 1;
        while(start <= end){
            let mid = Math.floor((start + end) / 2);
            let comparedPosition = newLandmark.ref.current.compareDocumentPosition(this.landmarks[mid].ref.current);
            let isNewAfterExisting = Boolean(comparedPosition & Node.DOCUMENT_POSITION_PRECEDING || comparedPosition & Node.DOCUMENT_POSITION_CONTAINS);
            if (isNewAfterExisting) start = mid + 1;
            else end = mid - 1;
        }
        this.landmarks.splice(start, 0, newLandmark);
        this.checkLabels(newLandmark.role);
    }
    updateLandmark(landmark) {
        let index = this.landmarks.findIndex((l)=>l.ref === landmark.ref);
        if (index >= 0) {
            this.landmarks[index] = {
                ...this.landmarks[index],
                ...landmark
            };
            this.checkLabels(this.landmarks[index].role);
        }
    }
    removeLandmark(ref) {
        this.landmarks = this.landmarks.filter((landmark)=>landmark.ref !== ref);
        this.teardownIfNeeded();
    }
    /**
   * Warn if there are 2+ landmarks with the same role but no label.
   * Labels for landmarks with the same role must also be unique.
   *
   * See https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/.
   */ checkLabels(role) {
        let landmarksWithRole = this.getLandmarksByRole(role);
        if (landmarksWithRole.size > 1) {
            let duplicatesWithoutLabel = [
                ...landmarksWithRole
            ].filter((landmark)=>!landmark.label);
            if (duplicatesWithoutLabel.length > 0) console.warn(`Page contains more than one landmark with the '${role}' role. If two or more landmarks on a page share the same role, all must be labeled with an aria-label or aria-labelledby attribute: `, duplicatesWithoutLabel.map((landmark)=>landmark.ref.current));
            else {
                let labels = [
                    ...landmarksWithRole
                ].map((landmark)=>landmark.label);
                let duplicateLabels = labels.filter((item, index)=>labels.indexOf(item) !== index);
                duplicateLabels.forEach((label)=>{
                    console.warn(`Page contains more than one landmark with the '${role}' role and '${label}' label. If two or more landmarks on a page share the same role, they must have unique labels: `, [
                        ...landmarksWithRole
                    ].filter((landmark)=>landmark.label === label).map((landmark)=>landmark.ref.current));
                });
            }
        }
    }
    /**
   * Get the landmark that is the closest parent in the DOM.
   * Returns undefined if no parent is a landmark.
   */ closestLandmark(element) {
        let landmarkMap = new Map(this.landmarks.map((l)=>[
                l.ref.current,
                l
            ]));
        let currentElement = element;
        while(currentElement && !landmarkMap.has(currentElement) && currentElement !== document.body && currentElement.parentElement)currentElement = currentElement.parentElement;
        return landmarkMap.get(currentElement);
    }
    /**
   * Gets the next landmark, in DOM focus order, or previous if backwards is specified.
   * If last landmark, next should be the first landmark.
   * If not inside a landmark, will return first landmark.
   * Returns undefined if there are no landmarks.
   */ getNextLandmark(element, { backward: backward }) {
        var _this_landmarks_nextLandmarkIndex_ref_current;
        let currentLandmark = this.closestLandmark(element);
        let nextLandmarkIndex = backward ? this.landmarks.length - 1 : 0;
        if (currentLandmark) nextLandmarkIndex = this.landmarks.indexOf(currentLandmark) + (backward ? -1 : 1);
        let wrapIfNeeded = ()=>{
            // When we reach the end of the landmark sequence, fire a custom event that can be listened for by applications.
            // If this event is canceled, we return immediately. This can be used to implement landmark navigation across iframes.
            if (nextLandmarkIndex < 0) {
                if (!element.dispatchEvent(new CustomEvent('react-aria-landmark-navigation', {
                    detail: {
                        direction: 'backward'
                    },
                    bubbles: true,
                    cancelable: true
                }))) return true;
                nextLandmarkIndex = this.landmarks.length - 1;
            } else if (nextLandmarkIndex >= this.landmarks.length) {
                if (!element.dispatchEvent(new CustomEvent('react-aria-landmark-navigation', {
                    detail: {
                        direction: 'forward'
                    },
                    bubbles: true,
                    cancelable: true
                }))) return true;
                nextLandmarkIndex = 0;
            }
            if (nextLandmarkIndex < 0 || nextLandmarkIndex >= this.landmarks.length) return true;
            return false;
        };
        if (wrapIfNeeded()) return undefined;
        // Skip over hidden landmarks.
        let i = nextLandmarkIndex;
        while((_this_landmarks_nextLandmarkIndex_ref_current = this.landmarks[nextLandmarkIndex].ref.current) === null || _this_landmarks_nextLandmarkIndex_ref_current === void 0 ? void 0 : _this_landmarks_nextLandmarkIndex_ref_current.closest('[aria-hidden=true]')){
            nextLandmarkIndex += backward ? -1 : 1;
            if (wrapIfNeeded()) return undefined;
            if (nextLandmarkIndex === i) break;
        }
        return this.landmarks[nextLandmarkIndex];
    }
    /**
   * Look at next landmark. If an element was previously focused inside, restore focus there.
   * If not, focus the landmark itself.
   * If no landmarks at all, or none with focusable elements, don't move focus.
   */ f6Handler(e) {
        if (e.key === 'F6') {
            // If alt key pressed, focus main landmark, otherwise navigate forward or backward based on shift key.
            let handled = e.altKey ? this.focusMain() : this.navigate(e.target, e.shiftKey);
            if (handled) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    }
    focusMain() {
        let main = this.getLandmarkByRole('main');
        if (main && main.ref.current && document.contains(main.ref.current)) {
            this.focusLandmark(main.ref.current, 'forward');
            return true;
        }
        return false;
    }
    navigate(from, backward) {
        let nextLandmark = this.getNextLandmark(from, {
            backward: backward
        });
        if (!nextLandmark) return false;
        // If something was previously focused in the next landmark, then return focus to it
        if (nextLandmark.lastFocused) {
            let lastFocused = nextLandmark.lastFocused;
            if (document.body.contains(lastFocused)) {
                lastFocused.focus();
                return true;
            }
        }
        // Otherwise, focus the landmark itself
        if (nextLandmark.ref.current && document.contains(nextLandmark.ref.current)) {
            this.focusLandmark(nextLandmark.ref.current, backward ? 'backward' : 'forward');
            return true;
        }
        return false;
    }
    /**
   * Sets lastFocused for a landmark, if focus is moved within that landmark.
   * Lets the last focused landmark know it was blurred if something else is focused.
   */ focusinHandler(e) {
        let currentLandmark = this.closestLandmark(e.target);
        if (currentLandmark && currentLandmark.ref.current !== e.target) this.updateLandmark({
            ref: currentLandmark.ref,
            lastFocused: e.target
        });
        let previousFocusedElement = e.relatedTarget;
        if (previousFocusedElement) {
            let closestPreviousLandmark = this.closestLandmark(previousFocusedElement);
            if (closestPreviousLandmark && closestPreviousLandmark.ref.current === previousFocusedElement) closestPreviousLandmark.blur();
        }
    }
    /**
   * Track if the focus is lost to the body. If it is, do cleanup on the landmark that last had focus.
   */ focusoutHandler(e) {
        let previousFocusedElement = e.target;
        let nextFocusedElement = e.relatedTarget;
        // the === document seems to be a jest thing for focus to go there on generic blur event such as landmark.blur();
        // browsers appear to send focus instead to document.body and the relatedTarget is null when that happens
        if (!nextFocusedElement || nextFocusedElement === document) {
            let closestPreviousLandmark = this.closestLandmark(previousFocusedElement);
            if (closestPreviousLandmark && closestPreviousLandmark.ref.current === previousFocusedElement) closestPreviousLandmark.blur();
        }
    }
    createLandmarkController() {
        let instance = this;
        instance.refCount++;
        instance.setupIfNeeded();
        return {
            navigate (direction, opts) {
                let element = (opts === null || opts === void 0 ? void 0 : opts.from) || document.activeElement;
                return instance.navigate(element, direction === 'backward');
            },
            focusNext (opts) {
                let element = (opts === null || opts === void 0 ? void 0 : opts.from) || document.activeElement;
                return instance.navigate(element, false);
            },
            focusPrevious (opts) {
                let element = (opts === null || opts === void 0 ? void 0 : opts.from) || document.activeElement;
                return instance.navigate(element, true);
            },
            focusMain () {
                return instance.focusMain();
            },
            dispose () {
                if (instance) {
                    instance.refCount--;
                    instance.teardownIfNeeded();
                    instance = null;
                }
            }
        };
    }
    registerLandmark(landmark) {
        if (this.landmarks.find((l)=>l.ref === landmark.ref)) this.updateLandmark(landmark);
        else this.addLandmark(landmark);
        return ()=>this.removeLandmark(landmark.ref);
    }
    constructor(){
        this.landmarks = [];
        this.isListening = false;
        this.refCount = 0;
        this.version = $a86207c5d7f7e1fb$var$LANDMARK_API_VERSION;
        this.f6Handler = this.f6Handler.bind(this);
        this.focusinHandler = this.focusinHandler.bind(this);
        this.focusoutHandler = this.focusoutHandler.bind(this);
    }
}
function $a86207c5d7f7e1fb$export$f50151dbd51cd1d9() {
    // Get the current landmark manager and create a controller using it.
    let instance = $a86207c5d7f7e1fb$var$getLandmarkManager();
    let controller = instance === null || instance === void 0 ? void 0 : instance.createLandmarkController();
    let unsubscribe = $a86207c5d7f7e1fb$var$subscribe(()=>{
        // If the landmark manager changes, dispose the old
        // controller and create a new one.
        controller === null || controller === void 0 ? void 0 : controller.dispose();
        instance = $a86207c5d7f7e1fb$var$getLandmarkManager();
        controller = instance === null || instance === void 0 ? void 0 : instance.createLandmarkController();
    });
    // Return a wrapper that proxies requests to the current controller instance.
    return {
        navigate (direction, opts) {
            return controller.navigate(direction, opts);
        },
        focusNext (opts) {
            return controller.focusNext(opts);
        },
        focusPrevious (opts) {
            return controller.focusPrevious(opts);
        },
        focusMain () {
            return controller.focusMain();
        },
        dispose () {
            controller === null || controller === void 0 ? void 0 : controller.dispose();
            unsubscribe();
            controller = undefined;
            instance = null;
        }
    };
}
function $a86207c5d7f7e1fb$export$4cc632584fd87fae(props, ref) {
    const { role: role, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, focus: focus } = props;
    let manager = $a86207c5d7f7e1fb$var$useLandmarkManager();
    let label = ariaLabel || ariaLabelledby;
    let [isLandmarkFocused, setIsLandmarkFocused] = (0, react.useState)(false);
    let defaultFocus = (0, react.useCallback)(()=>{
        setIsLandmarkFocused(true);
    }, [
        setIsLandmarkFocused
    ]);
    let blur = (0, react.useCallback)(()=>{
        setIsLandmarkFocused(false);
    }, [
        setIsLandmarkFocused
    ]);
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        if (manager) return manager.registerLandmark({
            ref: ref,
            label: label,
            role: role,
            focus: focus || defaultFocus,
            blur: blur
        });
    }, [
        manager,
        label,
        ref,
        role,
        focus,
        defaultFocus,
        blur
    ]);
    (0, react.useEffect)(()=>{
        var _ref_current;
        if (isLandmarkFocused) (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.focus();
    }, [
        isLandmarkFocused,
        ref
    ]);
    return {
        landmarkProps: {
            role: role,
            tabIndex: isLandmarkFocused ? -1 : undefined,
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabelledby
        }
    };
}



//# sourceMappingURL=useLandmark.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(29571);
;// ./node_modules/@react-aria/toast/dist/useToastRegion.mjs








function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}






function $6cc546b19ee7130a$export$b8cbbb20a51697de(props, state, ref) {
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault(intlStrings/* default */.A))), '@react-aria/toast');
    let { landmarkProps: landmarkProps } = (0, $a86207c5d7f7e1fb$export$4cc632584fd87fae)({
        role: 'region',
        'aria-label': props['aria-label'] || stringFormatter.format('notifications', {
            count: state.visibleToasts.length
        })
    }, ref);
    let { hoverProps: hoverProps } = (0, useHover/* useHover */.M)({
        onHoverStart: state.pauseAll,
        onHoverEnd: state.resumeAll
    });
    // Manage focus within the toast region.
    // If a focused containing toast is removed, move focus to the next toast, or the previous toast if there is no next toast.
    // We might be making an assumption with how this works if someone implements the priority queue differently, or
    // if they only show one toast at a time.
    let toasts = (0, react.useRef)([]);
    let prevVisibleToasts = (0, react.useRef)(state.visibleToasts);
    let focusedToast = (0, react.useRef)(null);
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        // If no toast has focus, then don't do anything.
        if (focusedToast.current === -1 || state.visibleToasts.length === 0 || !ref.current) {
            toasts.current = [];
            prevVisibleToasts.current = state.visibleToasts;
            return;
        }
        toasts.current = [
            ...ref.current.querySelectorAll('[role="alertdialog"]')
        ];
        // If the visible toasts haven't changed, we don't need to do anything.
        if (prevVisibleToasts.current.length === state.visibleToasts.length && state.visibleToasts.every((t, i)=>t.key === prevVisibleToasts.current[i].key)) {
            prevVisibleToasts.current = state.visibleToasts;
            return;
        }
        // Get a list of all toasts by index and add info if they are removed.
        let allToasts = prevVisibleToasts.current.map((t, i)=>({
                ...t,
                i: i,
                isRemoved: !state.visibleToasts.some((t2)=>t.key === t2.key)
            }));
        let removedFocusedToastIndex = allToasts.findIndex((t)=>t.i === focusedToast.current);
        // If the focused toast was removed, focus the next or previous toast.
        if (removedFocusedToastIndex > -1) {
            let i = 0;
            let nextToast;
            let prevToast;
            while(i <= removedFocusedToastIndex){
                if (!allToasts[i].isRemoved) prevToast = Math.max(0, i - 1);
                i++;
            }
            while(i < allToasts.length){
                if (!allToasts[i].isRemoved) {
                    nextToast = i - 1;
                    break;
                }
                i++;
            }
            // in the case where it's one toast at a time, both will be undefined, but we know the index must be 0
            if (prevToast === undefined && nextToast === undefined) prevToast = 0;
            // prioritize going to newer toasts
            if (prevToast >= 0 && prevToast < toasts.current.length) (0, focusWithoutScrolling/* focusWithoutScrolling */.e)(toasts.current[prevToast]);
            else if (nextToast >= 0 && nextToast < toasts.current.length) (0, focusWithoutScrolling/* focusWithoutScrolling */.e)(toasts.current[nextToast]);
        }
        prevVisibleToasts.current = state.visibleToasts;
    }, [
        state.visibleToasts,
        ref
    ]);
    let lastFocused = (0, react.useRef)(null);
    let { focusWithinProps: focusWithinProps } = (0, useFocusWithin/* useFocusWithin */.R)({
        onFocusWithin: (e)=>{
            state.pauseAll();
            lastFocused.current = e.relatedTarget;
        },
        onBlurWithin: ()=>{
            state.resumeAll();
            lastFocused.current = null;
        }
    });
    // When the number of visible toasts becomes 0 or the region unmounts,
    // restore focus to the last element that had focus before the user moved focus
    // into the region. FocusScope restore focus doesn't update whenever the focus
    // moves in, it only happens once, so we correct it.
    // Because we're in a hook, we can't control if the user unmounts or not.
    (0, react.useEffect)(()=>{
        if (state.visibleToasts.length === 0 && lastFocused.current && document.body.contains(lastFocused.current)) {
            if ((0, useFocusVisible/* getInteractionModality */.ME)() === 'pointer') (0, focusWithoutScrolling/* focusWithoutScrolling */.e)(lastFocused.current);
            else lastFocused.current.focus();
            lastFocused.current = null;
        }
    }, [
        ref,
        state.visibleToasts.length
    ]);
    (0, react.useEffect)(()=>{
        return ()=>{
            if (lastFocused.current && document.body.contains(lastFocused.current)) {
                if ((0, useFocusVisible/* getInteractionModality */.ME)() === 'pointer') (0, focusWithoutScrolling/* focusWithoutScrolling */.e)(lastFocused.current);
                else lastFocused.current.focus();
                lastFocused.current = null;
            }
        };
    }, [
        ref
    ]);
    return {
        regionProps: (0, mergeProps/* mergeProps */.v)(landmarkProps, hoverProps, focusWithinProps, {
            tabIndex: -1,
            // Mark the toast region as a "top layer", so that it:
            //   - is not aria-hidden when opening an overlay
            //   - allows focus even outside a containing focus scope
            //   - doesn’t dismiss overlays when clicking on it, even though it is outside
            // @ts-ignore
            'data-react-aria-top-layer': true,
            // listen to focus events separate from focuswithin because that will only fire once
            // and we need to follow all focus changes
            onFocus: (e)=>{
                let target = e.target.closest('[role="alertdialog"]');
                focusedToast.current = toasts.current.findIndex((t)=>t === target);
            },
            onBlur: ()=>{
                focusedToast.current = -1;
            }
        })
    };
}



//# sourceMappingURL=useToastRegion.module.js.map


/***/ }),

/***/ 8737:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vv: () => (/* binding */ $77b352cf12efcf73$export$f1f8569633bbbec4),
/* harmony export */   oS: () => (/* binding */ $77b352cf12efcf73$export$84726ef35ca2129a)
/* harmony export */ });
/* unused harmony export useToastState */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19888);



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

function $77b352cf12efcf73$export$c7b26b20d3ced9c5(props = {}) {
    let { maxVisibleToasts: maxVisibleToasts = 1, hasExitAnimation: hasExitAnimation = false } = props;
    let queue = (0, $cNx9A$useMemo)(()=>new $77b352cf12efcf73$export$f1f8569633bbbec4({
            maxVisibleToasts: maxVisibleToasts,
            hasExitAnimation: hasExitAnimation
        }), [
        maxVisibleToasts,
        hasExitAnimation
    ]);
    return $77b352cf12efcf73$export$84726ef35ca2129a(queue);
}
function $77b352cf12efcf73$export$84726ef35ca2129a(queue) {
    let subscribe = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((fn)=>queue.subscribe(fn), [
        queue
    ]);
    let getSnapshot = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>queue.visibleToasts, [
        queue
    ]);
    let visibleToasts = (0, use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
    return {
        visibleToasts: visibleToasts,
        add: (content, options)=>queue.add(content, options),
        close: (key)=>queue.close(key),
        remove: (key)=>queue.remove(key),
        pauseAll: ()=>queue.pauseAll(),
        resumeAll: ()=>queue.resumeAll()
    };
}
class $77b352cf12efcf73$export$f1f8569633bbbec4 {
    /** Subscribes to updates to the visible toasts. */ subscribe(fn) {
        this.subscriptions.add(fn);
        return ()=>this.subscriptions.delete(fn);
    }
    /** Adds a new toast to the queue. */ add(content, options = {}) {
        let toastKey = Math.random().toString(36);
        let toast = {
            ...options,
            content: content,
            key: toastKey,
            timer: options.timeout ? new $77b352cf12efcf73$var$Timer(()=>this.close(toastKey), options.timeout) : undefined
        };
        let low = 0;
        let high = this.queue.length;
        while(low < high){
            let mid = Math.floor((low + high) / 2);
            if ((toast.priority || 0) > (this.queue[mid].priority || 0)) high = mid;
            else low = mid + 1;
        }
        this.queue.splice(low, 0, toast);
        toast.animation = low < this.maxVisibleToasts ? 'entering' : 'queued';
        let i = this.maxVisibleToasts;
        while(i < this.queue.length)this.queue[i++].animation = 'queued';
        this.updateVisibleToasts({
            action: 'add'
        });
        return toastKey;
    }
    /**
   * Closes a toast. If `hasExitAnimation` is true, the toast
   * transitions to an "exiting" state instead of being removed immediately.
   */ close(key) {
        let index = this.queue.findIndex((t)=>t.key === key);
        if (index >= 0) {
            var _this_queue_index_onClose, _this_queue_index;
            (_this_queue_index_onClose = (_this_queue_index = this.queue[index]).onClose) === null || _this_queue_index_onClose === void 0 ? void 0 : _this_queue_index_onClose.call(_this_queue_index);
            this.queue.splice(index, 1);
        }
        this.updateVisibleToasts({
            action: 'close',
            key: key
        });
    }
    /** Removes a toast from the visible toasts after an exiting animation. */ remove(key) {
        this.updateVisibleToasts({
            action: 'remove',
            key: key
        });
    }
    updateVisibleToasts(options) {
        let { action: action, key: key } = options;
        let toasts = this.queue.slice(0, this.maxVisibleToasts);
        if (action === 'add' && this.hasExitAnimation) {
            let prevToasts = this.visibleToasts.filter((t)=>!toasts.some((t2)=>t.key === t2.key)).map((t)=>({
                    ...t,
                    animation: 'exiting'
                }));
            this.visibleToasts = prevToasts.concat(toasts).sort((a, b)=>{
                var _b_priority, _a_priority;
                return ((_b_priority = b.priority) !== null && _b_priority !== void 0 ? _b_priority : 0) - ((_a_priority = a.priority) !== null && _a_priority !== void 0 ? _a_priority : 0);
            });
        } else if (action === 'close' && this.hasExitAnimation) // Cause a rerender to happen for exit animation
        this.visibleToasts = this.visibleToasts.map((t)=>{
            if (t.key !== key) return t;
            else return {
                ...t,
                animation: 'exiting'
            };
        });
        else this.visibleToasts = toasts;
        for (let fn of this.subscriptions)fn();
    }
    /** Pauses the timers for all visible toasts. */ pauseAll() {
        for (let toast of this.visibleToasts)if (toast.timer) toast.timer.pause();
    }
    /** Resumes the timers for all visible toasts. */ resumeAll() {
        for (let toast of this.visibleToasts)if (toast.timer) toast.timer.resume();
    }
    constructor(options){
        this.queue = [];
        this.subscriptions = new Set();
        /** The currently visible toasts. */ this.visibleToasts = [];
        var _options_maxVisibleToasts;
        this.maxVisibleToasts = (_options_maxVisibleToasts = options === null || options === void 0 ? void 0 : options.maxVisibleToasts) !== null && _options_maxVisibleToasts !== void 0 ? _options_maxVisibleToasts : 1;
        var _options_hasExitAnimation;
        this.hasExitAnimation = (_options_hasExitAnimation = options === null || options === void 0 ? void 0 : options.hasExitAnimation) !== null && _options_hasExitAnimation !== void 0 ? _options_hasExitAnimation : false;
    }
}
class $77b352cf12efcf73$var$Timer {
    reset(delay) {
        this.remaining = delay;
        this.resume();
    }
    pause() {
        if (this.timerId == null) return;
        clearTimeout(this.timerId);
        this.timerId = null;
        this.remaining -= Date.now() - this.startTime;
    }
    resume() {
        if (this.remaining <= 0) return;
        this.startTime = Date.now();
        this.timerId = setTimeout(()=>{
            this.timerId = null;
            this.remaining = 0;
            this.callback();
        }, this.remaining);
    }
    constructor(callback, delay){
        this.startTime = null;
        this.remaining = delay;
        this.callback = callback;
    }
}



//# sourceMappingURL=useToastState.module.js.map


/***/ })

}]);