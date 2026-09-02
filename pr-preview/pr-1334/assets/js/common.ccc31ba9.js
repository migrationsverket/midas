"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2076],{

/***/ 54031
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93426);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95841);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1160);
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41326);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86707);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74848);
'use client';var _excluded=["className","fullwidth","icon","iconPlacement","iconSize","isPending","size","variant"];/**
 * Button to perform various actions.
 *
 * @interface ButtonProps
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 *//**
 * @deprecated since v17.0.0 please use `ButtonProps` instead
 */var Button=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(props,ref){var _useContextProps=(0,react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .useContextProps */ .JT)(props,ref,react_aria_components__WEBPACK_IMPORTED_MODULE_2__/* .ButtonContext */ .k),mergedProps=_useContextProps[0],mergedRef=_useContextProps[1];var className=mergedProps.className,fullwidth=mergedProps.fullwidth,IconComponent=mergedProps.icon,iconPlacement=mergedProps.iconPlacement,iconSize=mergedProps.iconSize,isPending=mergedProps.isPending,_mergedProps$size=mergedProps.size,size=_mergedProps$size===void 0?'large':_mergedProps$size,_mergedProps$variant=mergedProps.variant,variant=_mergedProps$variant===void 0?'primary':_mergedProps$variant,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(mergedProps,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$,Object.assign({className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.button,variant==='primary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.primary,variant==='secondary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.secondary,variant==='tertiary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.tertiary,variant==='danger'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.danger,variant==='icon'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.iconBtn,fullwidth&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.fullwidth,size==='medium'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.medium,iconPlacement==='right'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.iconRight,className),ref:mergedRef},rest,{children:(0,react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .composeRenderProps */ .HW)(mergedProps.children,function(children){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[IconComponent&&!isPending&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(IconComponent,{"aria-hidden":true,size:iconSize!=null?iconSize:20}),isPending&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_spinner__WEBPACK_IMPORTED_MODULE_5__/* .Spinner */ .y,{small:true}),children]});})}));});Button.displayName='Button';

/***/ },

/***/ 41326
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ Spinner)
});

;// ./packages/components/src/spinner/Spinner.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Spinner_module = ({"container":"container_ytPE","spinner":"spinner_eR4D","rotating":"rotating_m95R","large":"large_hgjo"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 7 modules
var createLucideIcon = __webpack_require__(59582);
;// ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = (0,createLucideIcon/* default */.A)("loader-circle", __iconNode);


//# sourceMappingURL=loader-circle.js.map

// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/spinner/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"loadingPleaseWait":"Loading, please wait..."},"sv":{"loadingPleaseWait":"Laddar, vänligen vänta..."}}');
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(81013);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/spinner/Spinner.tsx
var Spinner=function Spinner(_ref){var small=_ref.small,color=_ref.color,className=_ref.className;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(Spinner_module.container,className),role:"status",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LoaderCircle,{className:(0,clsx/* default */.A)(Spinner_module.spinner,!small&&Spinner_module.large),size:small?20:96,strokeWidth:small?2:8,absoluteStrokeWidth:true,color:color}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:strings.format('loadingPleaseWait')})]});};

/***/ },

/***/ 1160
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ clsx),
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34164);
/* eslint-disable no-redeclare *//**
 * A wrapper around `clsx` for working with the `ClassNameOrFunction` type used by RAC
 */function clsx(){for(var _len=arguments.length,classNames=new Array(_len),_key=0;_key<_len;_key++){classNames[_key]=arguments[_key];}if(classNames.some(function(className){return typeof className==='function';})){return function(renderProps){return (0,clsx__WEBPACK_IMPORTED_MODULE_0__/* .clsx */ .$)(classNames.map(function(className){return typeof className==='function'?className(renderProps):className;}));};}return (0,clsx__WEBPACK_IMPORTED_MODULE_0__/* .clsx */ .$)(classNames);}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ },

/***/ 88413
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oe: () => (/* binding */ useLocalizedStringFormatter)
/* harmony export */ });
/* unused harmony export useLocalizedStringDictionary */
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62230);
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56480);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78352);
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
 */var DEFAULT_LANGUAGE='sv';var cache=new WeakMap();function getCachedDictionary(strings){var dictionary=cache.get(strings);if(!dictionary){dictionary=new _internationalized_string__WEBPACK_IMPORTED_MODULE_0__/* .LocalizedStringDictionary */ .B(strings,DEFAULT_LANGUAGE);cache.set(strings,dictionary);}return dictionary;}/**
 * Returns a cached LocalizedStringDictionary for the given strings.
 */function useLocalizedStringDictionary(strings,packageName){return packageName&&_internationalized_string__WEBPACK_IMPORTED_MODULE_0__/* .LocalizedStringDictionary */ .B.getGlobalDictionaryForPackage(packageName)||getCachedDictionary(strings);}/**
 * Provides localized string formatting for the current locale. Supports interpolating variables,
 * selecting the correct pluralization, and formatting numbers. Automatically updates when the locale changes.
 * @param strings - A mapping of languages to localized strings by key.
 */function useLocalizedStringFormatter(strings,packageName){if(!strings||typeof strings!=='object'||!(DEFAULT_LANGUAGE in strings)){throw new Error("useLocalizedStringFormatter: Default language \""+DEFAULT_LANGUAGE+"\" must be defined in dictionary.");}var _useLocale=(0,react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .useLocale */ .Y)(),locale=_useLocale.locale;var dictionary=useLocalizedStringDictionary(strings,packageName);return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function(){return new _internationalized_string__WEBPACK_IMPORTED_MODULE_1__/* .LocalizedStringFormatter */ .J(locale,dictionary);},[dictionary,locale]);}

/***/ },

/***/ 59582
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ createLucideIcon)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();


//# sourceMappingURL=mergeClasses.js.map

;// ./node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();


//# sourceMappingURL=toKebabCase.js.map

;// ./node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);


//# sourceMappingURL=toCamelCase.js.map

;// ./node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};


//# sourceMappingURL=toPascalCase.js.map

;// ./node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map

;// ./node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};


//# sourceMappingURL=hasA11yProp.js.map

;// ./node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */






const Icon = (0,react.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => (0,react.createElement)(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => (0,react.createElement)(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);


//# sourceMappingURL=Icon.js.map

;// ./node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */







const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,react.forwardRef)(
    ({ className, ...props }, ref) => (0,react.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map


/***/ },

/***/ 86707
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"button":"button_RcXK","secondary":"secondary_h5I_","tertiary":"tertiary_xq7E","iconBtn":"iconBtn__8qK","medium":"medium_uqO9","danger":"danger_iFp6","iconRight":"iconRight_iW1e","fullwidth":"fullwidth_WWNT","primary":"primary_JNNk"});

/***/ },

/***/ 59381
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ $1dfb119a85e764e5$export$cc77c4ff7e8673c5)
/* harmony export */ });
/* unused harmony export numberFormatSignDisplayPolyfill */
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
 */ let $1dfb119a85e764e5$var$formatterCache = new Map();
let $1dfb119a85e764e5$var$supportsSignDisplay = false;
try {
    $1dfb119a85e764e5$var$supportsSignDisplay = new Intl.NumberFormat('de-DE', {
        signDisplay: 'exceptZero'
    }).resolvedOptions().signDisplay === 'exceptZero';
// eslint-disable-next-line no-empty
} catch  {}
let $1dfb119a85e764e5$var$supportsUnit = false;
try {
    $1dfb119a85e764e5$var$supportsUnit = new Intl.NumberFormat('de-DE', {
        style: 'unit',
        unit: 'degree'
    }).resolvedOptions().style === 'unit';
// eslint-disable-next-line no-empty
} catch  {}
// Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.
const $1dfb119a85e764e5$var$UNITS = {
    degree: {
        narrow: {
            default: "\xb0",
            'ja-JP': " \u5EA6",
            'zh-TW': "\u5EA6",
            'sl-SI': " \xb0"
        }
    }
};
class $1dfb119a85e764e5$export$cc77c4ff7e8673c5 {
    constructor(locale, options = {}){
        this.numberFormatter = $1dfb119a85e764e5$var$getCachedNumberFormatter(locale, options);
        this.options = options;
    }
    /**
   * Formats a number value as a string, according to the locale and options provided to the
   * constructor.
   */ format(value) {
        let res = '';
        if (!$1dfb119a85e764e5$var$supportsSignDisplay && this.options.signDisplay != null) res = $1dfb119a85e764e5$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
        else res = this.numberFormatter.format(value);
        if (this.options.style === 'unit' && !$1dfb119a85e764e5$var$supportsUnit) {
            let { unit: unit, unitDisplay: unitDisplay = 'short', locale: locale } = this.resolvedOptions();
            if (!unit) return res;
            let values = $1dfb119a85e764e5$var$UNITS[unit]?.[unitDisplay];
            res += values[locale] || values.default;
        }
        return res;
    }
    /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */ formatToParts(value) {
        // TODO: implement signDisplay for formatToParts
        return this.numberFormatter.formatToParts(value);
    }
    /** Formats a number range as a string. */ formatRange(start, end) {
        if (typeof this.numberFormatter.formatRange === 'function') return this.numberFormatter.formatRange(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        // Very basic fallback for old browsers.
        return `${this.format(start)} \u{2013} ${this.format(end)}`;
    }
    /** Formats a number range as an array of parts. */ formatRangeToParts(start, end) {
        if (typeof this.numberFormatter.formatRangeToParts === 'function') return this.numberFormatter.formatRangeToParts(start, end);
        if (end < start) throw new RangeError('End date must be >= start date');
        let startParts = this.numberFormatter.formatToParts(start);
        let endParts = this.numberFormatter.formatToParts(end);
        return [
            ...startParts.map((p)=>({
                    ...p,
                    source: 'startRange'
                })),
            {
                type: 'literal',
                value: " \u2013 ",
                source: 'shared'
            },
            ...endParts.map((p)=>({
                    ...p,
                    source: 'endRange'
                }))
        ];
    }
    /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
        let options = this.numberFormatter.resolvedOptions();
        if (!$1dfb119a85e764e5$var$supportsSignDisplay && this.options.signDisplay != null) options = {
            ...options,
            signDisplay: this.options.signDisplay
        };
        if (!$1dfb119a85e764e5$var$supportsUnit && this.options.style === 'unit') options = {
            ...options,
            style: 'unit',
            unit: this.options.unit,
            unitDisplay: this.options.unitDisplay
        };
        return options;
    }
}
function $1dfb119a85e764e5$var$getCachedNumberFormatter(locale, options = {}) {
    let { numberingSystem: numberingSystem } = options;
    if (numberingSystem && locale.includes('-nu-')) {
        if (!locale.includes('-u-')) locale += '-u-';
        locale += `-nu-${numberingSystem}`;
    }
    if (options.style === 'unit' && !$1dfb119a85e764e5$var$supportsUnit) {
        let { unit: unit, unitDisplay: unitDisplay = 'short' } = options;
        if (!unit) throw new Error('unit option must be provided with style: "unit"');
        if (!$1dfb119a85e764e5$var$UNITS[unit]?.[unitDisplay]) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
        options = {
            ...options,
            style: 'decimal'
        };
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($1dfb119a85e764e5$var$formatterCache.has(cacheKey)) return $1dfb119a85e764e5$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.NumberFormat(locale, options);
    $1dfb119a85e764e5$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
function $1dfb119a85e764e5$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
    if (signDisplay === 'auto') return numberFormat.format(num);
    else if (signDisplay === 'never') return numberFormat.format(Math.abs(num));
    else {
        let needsPositiveSign = false;
        if (signDisplay === 'always') needsPositiveSign = num > 0 || Object.is(num, 0);
        else if (signDisplay === 'exceptZero') {
            if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
            else needsPositiveSign = num > 0;
        }
        if (needsPositiveSign) {
            let negative = numberFormat.format(-num);
            let noSign = numberFormat.format(num);
            // ignore RTL/LTR marker character
            let minus = negative.replace(noSign, '').replace(/\u200e|\u061C/, '');
            if ([
                ...minus
            ].length !== 1) console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case');
            let positive = negative.replace(noSign, '!!!').replace(minus, '+').replace('!!!', noSign);
            return positive;
        } else return numberFormat.format(num);
    }
}



//# sourceMappingURL=NumberFormatter.mjs.map


/***/ },

/***/ 62230
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ $a747a10fe70a57da$export$c17fa47878dc55b6)
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
 */ const $a747a10fe70a57da$var$localeSymbol = Symbol.for('react-aria.i18n.locale');
const $a747a10fe70a57da$var$stringsSymbol = Symbol.for('react-aria.i18n.strings');
let $a747a10fe70a57da$var$cachedGlobalStrings = undefined;
class $a747a10fe70a57da$export$c17fa47878dc55b6 {
    constructor(messages, defaultLocale = 'en-US'){
        // Clone messages so we don't modify the original object.
        // Filter out entries with falsy values which may have been caused by applying optimize-locales-plugin.
        this.strings = Object.fromEntries(Object.entries(messages).filter(([, v])=>v));
        this.defaultLocale = defaultLocale;
    }
    /** Returns a localized string for the given key and locale. */ getStringForLocale(key, locale) {
        let strings = this.getStringsForLocale(locale);
        let string = strings[key];
        if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
        return string;
    }
    /** Returns all localized strings for the given locale. */ getStringsForLocale(locale) {
        let strings = this.strings[locale];
        if (!strings) {
            strings = $a747a10fe70a57da$var$getStringsForLocale(locale, this.strings, this.defaultLocale);
            this.strings[locale] = strings;
        }
        return strings;
    }
    static getGlobalDictionaryForPackage(packageName) {
        if (typeof window === 'undefined') return null;
        let locale = window[$a747a10fe70a57da$var$localeSymbol];
        if ($a747a10fe70a57da$var$cachedGlobalStrings === undefined) {
            let globalStrings = window[$a747a10fe70a57da$var$stringsSymbol];
            if (!globalStrings) return null;
            $a747a10fe70a57da$var$cachedGlobalStrings = {};
            for(let pkg in globalStrings)$a747a10fe70a57da$var$cachedGlobalStrings[pkg] = new $a747a10fe70a57da$export$c17fa47878dc55b6({
                [locale]: globalStrings[pkg]
            }, locale);
        }
        let dictionary = $a747a10fe70a57da$var$cachedGlobalStrings?.[packageName];
        if (!dictionary) throw new Error(`Strings for package "${packageName}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
        return dictionary;
    }
}
function $a747a10fe70a57da$var$getStringsForLocale(locale, strings, defaultLocale = 'en-US') {
    // If there is an exact match, use it.
    if (strings[locale]) return strings[locale];
    // Attempt to find the closest match by language.
    // For example, if the locale is fr-CA (French Canadian), but there is only
    // an fr-FR (France) set of strings, use that.
    // This could be replaced with Intl.LocaleMatcher once it is supported.
    // https://github.com/tc39/proposal-intl-localematcher
    let language = $a747a10fe70a57da$var$getLanguage(locale);
    // If the locale has an explicit script (e.g. sr-Latn-RS), prefer a
    // language-script match (sr-Latn) over a language-only match (sr), since
    // those may represent entirely different scripts.
    let script = $a747a10fe70a57da$var$getScript(locale);
    if (script && strings[`${language}-${script}`]) return strings[`${language}-${script}`];
    if (strings[language]) return strings[language];
    for(let key in strings){
        if (key.startsWith(language + '-')) return strings[key];
    }
    // Nothing close, use english.
    return strings[defaultLocale];
}
function $a747a10fe70a57da$var$getLanguage(locale) {
    // @ts-ignore
    if (Intl.Locale) // @ts-ignore
    return new Intl.Locale(locale).language;
    return locale.split('-')[0];
}
function $a747a10fe70a57da$var$getScript(locale) {
    // @ts-ignore
    if (Intl.Locale) // @ts-ignore
    return new Intl.Locale(locale).script;
    return undefined;
}



//# sourceMappingURL=LocalizedStringDictionary.mjs.map


/***/ },

/***/ 56480
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ $b27c684a33948c64$export$2f817fcdc4b89ae0)
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
 */ const $b27c684a33948c64$var$pluralRulesCache = new Map();
const $b27c684a33948c64$var$numberFormatCache = new Map();
class $b27c684a33948c64$export$2f817fcdc4b89ae0 {
    constructor(locale, strings){
        this.locale = locale;
        this.strings = strings;
    }
    /** Formats a localized string for the given key with the provided variables. */ format(key, variables) {
        let message = this.strings.getStringForLocale(key, this.locale);
        return typeof message === 'function' ? message(variables, this) : message;
    }
    plural(count, options, type = 'cardinal') {
        let opt = options['=' + count];
        if (opt) return typeof opt === 'function' ? opt() : opt;
        let key = this.locale + ':' + type;
        let pluralRules = $b27c684a33948c64$var$pluralRulesCache.get(key);
        if (!pluralRules) {
            pluralRules = new Intl.PluralRules(this.locale, {
                type: type
            });
            $b27c684a33948c64$var$pluralRulesCache.set(key, pluralRules);
        }
        let selected = pluralRules.select(count);
        opt = options[selected] || options.other;
        return typeof opt === 'function' ? opt() : opt;
    }
    number(value) {
        let numberFormat = $b27c684a33948c64$var$numberFormatCache.get(this.locale);
        if (!numberFormat) {
            numberFormat = new Intl.NumberFormat(this.locale);
            $b27c684a33948c64$var$numberFormatCache.set(this.locale, numberFormat);
        }
        return numberFormat.format(value);
    }
    select(options, value) {
        let opt = options[value] || options.other;
        return typeof opt === 'function' ? opt() : opt;
    }
}



//# sourceMappingURL=LocalizedStringFormatter.mjs.map


/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ },

/***/ 93426
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $7705c033048f6da7$export$353f5b6fc5456de1),
/* harmony export */   k: () => (/* binding */ $7705c033048f6da7$export$24d547caef80ccd1)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95841);
/* harmony import */ var _ProgressBar_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46469);
/* harmony import */ var react_aria_private_live_announcer_LiveAnnouncer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35355);
/* harmony import */ var react_aria_useButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96645);
/* harmony import */ var react_aria_private_collections_Hidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61207);
/* harmony import */ var react_aria_filterDOMProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46683);
/* harmony import */ var react_aria_mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47425);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96540);
/* harmony import */ var react_aria_useFocusRing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66683);
/* harmony import */ var react_aria_useHover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68068);
/* harmony import */ var react_aria_useId__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19633);












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










const $7705c033048f6da7$export$24d547caef80ccd1 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_7__.createContext)({});
const $7705c033048f6da7$export$353f5b6fc5456de1 = /*#__PURE__*/ (0, react_aria_private_collections_Hidden__WEBPACK_IMPORTED_MODULE_4__/* .createHideableComponent */ .U7)(function Button(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $7705c033048f6da7$export$24d547caef80ccd1);
    let ctx = props;
    let { isPending: isPending } = ctx;
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, react_aria_useButton__WEBPACK_IMPORTED_MODULE_3__/* .useButton */ .s)(props, ref);
    buttonProps = $7705c033048f6da7$var$useDisableInteractions(buttonProps, isPending);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, react_aria_useFocusRing__WEBPACK_IMPORTED_MODULE_8__/* .useFocusRing */ .o)(props);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria_useHover__WEBPACK_IMPORTED_MODULE_9__/* .useHover */ .M)({
        ...props,
        isDisabled: props.isDisabled || isPending
    });
    let renderValues = {
        isHovered: isHovered,
        isPressed: (ctx.isPressed || isPressed) && !isPending,
        isFocused: isFocused,
        isFocusVisible: isFocusVisible,
        isDisabled: props.isDisabled || false,
        isPending: isPending ?? false
    };
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useRenderProps */ .Sl)({
        ...props,
        values: renderValues,
        defaultClassName: 'react-aria-Button'
    });
    let buttonId = (0, react_aria_useId__WEBPACK_IMPORTED_MODULE_10__/* .useId */ .Bi)(buttonProps.id);
    let progressId = (0, react_aria_useId__WEBPACK_IMPORTED_MODULE_10__/* .useId */ .Bi)();
    let ariaLabelledby = buttonProps['aria-labelledby'];
    if (isPending) {
        // aria-labelledby wins over aria-label
        // https://www.w3.org/TR/accname-1.2/#computation-steps
        if (ariaLabelledby) ariaLabelledby = `${ariaLabelledby} ${progressId}`;
        else if (buttonProps['aria-label']) ariaLabelledby = `${buttonId} ${progressId}`;
    }
    let wasPending = (0, react__WEBPACK_IMPORTED_MODULE_7__.useRef)(isPending);
    (0, react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        let message = {
            'aria-labelledby': ariaLabelledby || buttonId
        };
        if (!wasPending.current && isFocused && isPending) (0, react_aria_private_live_announcer_LiveAnnouncer__WEBPACK_IMPORTED_MODULE_2__/* .announce */ .iP)(message, 'assertive');
        else if (wasPending.current && isFocused && !isPending) (0, react_aria_private_live_announcer_LiveAnnouncer__WEBPACK_IMPORTED_MODULE_2__/* .announce */ .iP)(message, 'assertive');
        wasPending.current = isPending;
    }, [
        isPending,
        isFocused,
        ariaLabelledby,
        buttonId
    ]);
    let DOMProps = (0, react_aria_filterDOMProps__WEBPACK_IMPORTED_MODULE_5__/* .filterDOMProps */ .$)(props, {
        global: true
    });
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_7__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT).button, {
        ...(0, react_aria_mergeProps__WEBPACK_IMPORTED_MODULE_6__/* .mergeProps */ .v)(DOMProps, renderProps, buttonProps, focusProps, hoverProps),
        // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
        // We do this by changing the button's type to button.
        type: buttonProps.type === 'submit' && isPending ? 'button' : buttonProps.type,
        id: buttonId,
        ref: ref,
        "aria-labelledby": ariaLabelledby,
        slot: props.slot || undefined,
        "aria-disabled": isPending ? 'true' : buttonProps['aria-disabled'],
        "data-disabled": props.isDisabled || undefined,
        "data-pressed": renderValues.isPressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-pending": isPending || undefined,
        "data-focus-visible": isFocusVisible || undefined
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_7__).createElement((0, _ProgressBar_mjs__WEBPACK_IMPORTED_MODULE_1__/* .ProgressBarContext */ .K).Provider, {
        value: {
            id: progressId
        }
    }, renderProps.children));
});
// Events to preserve when isPending is true (for tooltips and other overlays)
const $7705c033048f6da7$var$PRESERVED_EVENT_PATTERN = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
function $7705c033048f6da7$var$useDisableInteractions(props, isPending) {
    if (isPending) {
        for(const key in props)if (key.startsWith('on') && !$7705c033048f6da7$var$PRESERVED_EVENT_PATTERN.test(key)) props[key] = undefined;
        props.href = undefined;
        props.target = undefined;
    }
    return props;
}



//# sourceMappingURL=Button.mjs.map


/***/ },

/***/ 37820
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ $43a3b93638fe5db9$export$75b6ee27786ba447),
/* harmony export */   J: () => (/* binding */ $43a3b93638fe5db9$export$b04be29aa201d4f5)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95841);
/* harmony import */ var react_aria_private_collections_Hidden__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61207);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);




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


const $43a3b93638fe5db9$export$75b6ee27786ba447 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});
const $43a3b93638fe5db9$export$b04be29aa201d4f5 = /*#__PURE__*/ (0, react_aria_private_collections_Hidden__WEBPACK_IMPORTED_MODULE_1__/* .createHideableComponent */ .U7)(function Label(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $43a3b93638fe5db9$export$75b6ee27786ba447);
    let { elementType: elementType = 'label', ...labelProps } = props;
    let ElementType = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT)[elementType];
    // @ts-ignore
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_2__).createElement(ElementType, {
        className: "react-aria-Label",
        ...labelProps,
        ref: ref
    });
});



//# sourceMappingURL=Label.mjs.map


/***/ },

/***/ 46469
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ $6c0095e7e99364f2$export$c17561cb55d4db30),
  K: () => (/* binding */ $6c0095e7e99364f2$export$e9f3bf65a26ce129)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Label.mjs
var Label = __webpack_require__(37820);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(46683);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/label/useLabel.mjs
var useLabel = __webpack_require__(60741);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/i18n/I18nProvider.mjs + 2 modules
var I18nProvider = __webpack_require__(78352);
// EXTERNAL MODULE: ./node_modules/@internationalized/number/dist/private/NumberFormatter.mjs
var NumberFormatter = __webpack_require__(59381);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria/dist/private/i18n/useNumberFormatter.mjs




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


function $bd90acf18e792be6$export$b7a616150fdb9f44(options = {}) {
    let { locale: locale } = (0, I18nProvider/* useLocale */.Y)();
    return (0, react.useMemo)(()=>new (0, NumberFormatter/* NumberFormatter */.K)(locale, options), [
        locale,
        options
    ]);
}



//# sourceMappingURL=useNumberFormatter.mjs.map

// EXTERNAL MODULE: ./node_modules/react-stately/dist/private/utils/number.mjs
var number = __webpack_require__(95677);
;// ./node_modules/react-aria/dist/private/progress/useProgressBar.mjs






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




function $723aca2821613fe7$export$ed5abd763a836edc(props) {
    let { value: value = 0, minValue: minValue = 0, maxValue: maxValue = 100, valueLabel: valueLabel, isIndeterminate: isIndeterminate, formatOptions: formatOptions = {
        style: 'percent'
    } } = props;
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        labelable: true
    });
    let { labelProps: labelProps, fieldProps: fieldProps } = (0, useLabel/* useLabel */.M)({
        ...props,
        // Progress bar is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: 'span'
    });
    value = (0, number/* clamp */.qE)(value, minValue, maxValue);
    let range = maxValue - minValue;
    let percentage = range === 0 ? 0 : (value - minValue) / range;
    let formatter = (0, $bd90acf18e792be6$export$b7a616150fdb9f44)(formatOptions);
    if (!isIndeterminate && !valueLabel) {
        let valueToFormat = formatOptions.style === 'percent' ? percentage : value;
        valueLabel = formatter.format(valueToFormat);
    }
    return {
        progressBarProps: (0, mergeProps/* mergeProps */.v)(domProps, {
            ...fieldProps,
            'aria-valuenow': isIndeterminate ? undefined : value,
            'aria-valuemin': minValue,
            'aria-valuemax': maxValue,
            'aria-valuetext': isIndeterminate ? undefined : valueLabel,
            role: 'progressbar'
        }),
        labelProps: labelProps
    };
}



//# sourceMappingURL=useProgressBar.mjs.map

;// ./node_modules/react-aria-components/dist/private/ProgressBar.mjs








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






const $6c0095e7e99364f2$export$e9f3bf65a26ce129 = /*#__PURE__*/ (0, react.createContext)(null);
const $6c0095e7e99364f2$export$c17561cb55d4db30 = /*#__PURE__*/ (0, react.forwardRef)(function ProgressBar(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $6c0095e7e99364f2$export$e9f3bf65a26ce129);
    let { value: value = 0, minValue: minValue = 0, maxValue: maxValue = 100, isIndeterminate: isIndeterminate = false } = props;
    value = (0, number/* clamp */.qE)(value, minValue, maxValue);
    let [labelRef, label] = (0, utils/* useSlot */._E)(!props['aria-label'] && !props['aria-labelledby']);
    let { progressBarProps: progressBarProps, labelProps: labelProps } = (0, $723aca2821613fe7$export$ed5abd763a836edc)({
        ...props,
        label: label
    });
    let range = maxValue - minValue;
    // Calculate the width of the progress bar as a percentage
    let percentage = undefined;
    if (!isIndeterminate) {
        if (range === 0) percentage = 0;
        else percentage = (value - minValue) / range * 100;
    }
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-ProgressBar',
        values: {
            percentage: percentage,
            valueText: progressBarProps['aria-valuetext'],
            isIndeterminate: isIndeterminate
        }
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, react).createElement((0, utils/* dom */.tT).div, {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, progressBarProps),
        ref: ref,
        slot: props.slot || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, Label/* LabelContext */.I).Provider, {
        value: {
            ...labelProps,
            ref: labelRef,
            elementType: 'span'
        }
    }, renderProps.children));
});



//# sourceMappingURL=ProgressBar.mjs.map


/***/ },

/***/ 95841
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CC: () => (/* binding */ $7230ffa83bc0c2cf$export$fabf2dc03a41866e),
/* harmony export */   HW: () => (/* binding */ $7230ffa83bc0c2cf$export$c245e6201fed2f75),
/* harmony export */   JT: () => (/* binding */ $7230ffa83bc0c2cf$export$29f1550f4b0d4415),
/* harmony export */   Kq: () => (/* binding */ $7230ffa83bc0c2cf$export$2881499e37b75b9a),
/* harmony export */   P_: () => (/* binding */ $7230ffa83bc0c2cf$export$c62b8e45d58ddad9),
/* harmony export */   SK: () => (/* binding */ $7230ffa83bc0c2cf$export$ef03459518577ad4),
/* harmony export */   Sl: () => (/* binding */ $7230ffa83bc0c2cf$export$4d86445c2cf5e3),
/* harmony export */   _E: () => (/* binding */ $7230ffa83bc0c2cf$export$9d4c57ee4c6ffdd8),
/* harmony export */   tT: () => (/* binding */ $7230ffa83bc0c2cf$export$df3a06d6289f983e)
/* harmony export */ });
/* harmony import */ var react_aria_mergeProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47425);
/* harmony import */ var react_aria_mergeRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24211);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);
/* harmony import */ var react_aria_private_utils_useLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74441);
/* harmony import */ var react_aria_useObjectRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80716);






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




const $7230ffa83bc0c2cf$export$c62b8e45d58ddad9 = Symbol('default');
function $7230ffa83bc0c2cf$export$2881499e37b75b9a({ values: values, children: children }) {
    for (let [Context, value] of values)// @ts-ignore
    children = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_2__).createElement(Context.Provider, {
        value: value
    }, children);
    return children;
}
function $7230ffa83bc0c2cf$export$4d86445c2cf5e3(props) {
    let { className: className, style: style, children: children, defaultClassName: defaultClassName, defaultChildren: defaultChildren, defaultStyle: defaultStyle, values: values, render: render } = props;
    return (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        let computedClassName;
        let computedStyle;
        let computedChildren;
        if (typeof className === 'function') computedClassName = className({
            ...values,
            defaultClassName: defaultClassName
        });
        else computedClassName = className;
        if (typeof style === 'function') computedStyle = style({
            ...values,
            defaultStyle: defaultStyle || {}
        });
        else computedStyle = style;
        if (typeof children === 'function') computedChildren = children({
            ...values,
            defaultChildren: defaultChildren
        });
        else if (children == null) computedChildren = defaultChildren;
        else computedChildren = children;
        return {
            className: computedClassName ?? defaultClassName,
            style: computedStyle || defaultStyle ? {
                ...defaultStyle,
                ...computedStyle
            } : undefined,
            children: computedChildren ?? defaultChildren,
            'data-rac': '',
            render: render ? (props)=>render(props, values) : undefined
        };
    }, [
        className,
        style,
        children,
        defaultClassName,
        defaultChildren,
        defaultStyle,
        values,
        render
    ]);
}
function $7230ffa83bc0c2cf$export$c245e6201fed2f75(// https://stackoverflow.com/questions/60898079/typescript-type-t-or-function-t-usage
value, wrap) {
    return (renderProps)=>wrap(typeof value === 'function' ? value(renderProps) : value, renderProps);
}
function $7230ffa83bc0c2cf$export$fabf2dc03a41866e(context, slot) {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_2__.useContext)(context);
    if (slot === null) // An explicit `null` slot means don't use context.
    return null;
    if (ctx && typeof ctx === 'object' && 'slots' in ctx && ctx.slots) {
        let slotKey = slot || $7230ffa83bc0c2cf$export$c62b8e45d58ddad9;
        if (!ctx.slots[slotKey]) {
            let availableSlots = new Intl.ListFormat().format(Object.keys(ctx.slots).map((p)=>`"${p}"`));
            let errorMessage = slot ? `Invalid slot "${slot}".` : 'A slot prop is required.';
            throw new Error(`${errorMessage} Valid slot names are ${availableSlots}.`);
        }
        return ctx.slots[slotKey];
    }
    // @ts-ignore
    return ctx;
}
function $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, context) {
    let ctx = $7230ffa83bc0c2cf$export$fabf2dc03a41866e(context, props.slot) || {};
    let { ref: contextRef, ...contextProps } = ctx;
    let mergedRef = (0, react_aria_useObjectRef__WEBPACK_IMPORTED_MODULE_4__/* .useObjectRef */ .U)((0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>(0, react_aria_mergeRefs__WEBPACK_IMPORTED_MODULE_1__/* .mergeRefs */ .P)(ref, contextRef), [
        ref,
        contextRef
    ]));
    let mergedProps = (0, react_aria_mergeProps__WEBPACK_IMPORTED_MODULE_0__/* .mergeProps */ .v)(contextProps, props);
    // mergeProps does not merge `style`. Adding this there might be a breaking change.
    if ('style' in contextProps && contextProps.style && 'style' in props && props.style) {
        if (typeof contextProps.style === 'function' || typeof props.style === 'function') // @ts-ignore
        mergedProps.style = (renderProps)=>{
            let contextStyle = typeof contextProps.style === 'function' ? contextProps.style(renderProps) : contextProps.style;
            let defaultStyle = {
                ...renderProps.defaultStyle,
                ...contextStyle
            };
            let style = typeof props.style === 'function' ? props.style({
                ...renderProps,
                defaultStyle: defaultStyle
            }) : props.style;
            return {
                ...defaultStyle,
                ...style
            };
        };
        else // @ts-ignore
        mergedProps.style = {
            ...contextProps.style,
            ...props.style
        };
    }
    return [
        mergedProps,
        mergedRef
    ];
}
function $7230ffa83bc0c2cf$export$9d4c57ee4c6ffdd8(initialState = true) {
    // Initial state is typically based on the parent having an aria-label or aria-labelledby.
    // If it does, this value should be false so that we don't update the state and cause a rerender when we go through the layoutEffect
    let [hasSlot, setHasSlot] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialState);
    let hasRun = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
    // A callback ref which will run when the slotted element mounts.
    // This should happen before the useLayoutEffect below.
    let ref = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((el)=>{
        hasRun.current = true;
        setHasSlot(!!el);
    }, []);
    // If the callback hasn't been called, then reset to false.
    (0, react_aria_private_utils_useLayoutEffect__WEBPACK_IMPORTED_MODULE_3__/* .useLayoutEffect */ .N)(()=>{
        if (!hasRun.current) setHasSlot(false);
    }, []);
    return [
        ref,
        hasSlot
    ];
}
function $7230ffa83bc0c2cf$export$ef03459518577ad4(props) {
    const prefix = /^(data-.*)$/;
    let filteredProps = {};
    for(const prop in props)if (!prefix.test(prop)) filteredProps[prop] = props[prop];
    return filteredProps;
}
function $7230ffa83bc0c2cf$var$DOMElement(ElementType, props, forwardedRef) {
    let { render: render, ...otherProps } = props;
    let elementRef = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    let ref = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>(0, react_aria_mergeRefs__WEBPACK_IMPORTED_MODULE_1__/* .mergeRefs */ .P)(forwardedRef, elementRef), [
        forwardedRef,
        elementRef
    ]);
    (0, react_aria_private_utils_useLayoutEffect__WEBPACK_IMPORTED_MODULE_3__/* .useLayoutEffect */ .N)(()=>{
        if (false) // removed by dead control flow
{}
    }, [
        ElementType,
        render
    ]);
    let domProps = {
        ...otherProps,
        ref: ref
    };
    if (render) return render(domProps, undefined);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_2__).createElement(ElementType, domProps);
}
const $7230ffa83bc0c2cf$var$domComponentCache = {};
const $7230ffa83bc0c2cf$export$df3a06d6289f983e = new Proxy({}, {
    get (target, elementType) {
        if (typeof elementType !== 'string') return undefined;
        let res = $7230ffa83bc0c2cf$var$domComponentCache[elementType];
        if (!res) {
            res = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)($7230ffa83bc0c2cf$var$DOMElement.bind(null, elementType));
            $7230ffa83bc0c2cf$var$domComponentCache[elementType] = res;
        }
        return res;
    }
});



//# sourceMappingURL=utils.mjs.map


/***/ },

/***/ 96645
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ $ac4318a9c075bb9f$export$ea18c227d4417cc3)
/* harmony export */ });
/* harmony import */ var _utils_filterDOMProps_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46683);
/* harmony import */ var _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47425);
/* harmony import */ var _interactions_useFocusable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55602);
/* harmony import */ var _interactions_usePress_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23580);





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



function $ac4318a9c075bb9f$export$ea18c227d4417cc3(props, ref) {
    let { elementType: elementType = 'button', isDisabled: isDisabled, onPress: onPress, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressUp: onPressUp, onPressChange: onPressChange, preventFocusOnPress: preventFocusOnPress, allowFocusWhenDisabled: // @ts-ignore - undocumented
    allowFocusWhenDisabled, onClick: onClick, href: href, target: target, rel: rel, type: type = 'button' } = props;
    let additionalProps;
    if (elementType === 'button') additionalProps = {
        type: type,
        disabled: isDisabled,
        form: props.form,
        formAction: props.formAction,
        formEncType: props.formEncType,
        formMethod: props.formMethod,
        formNoValidate: props.formNoValidate,
        formTarget: props.formTarget,
        name: props.name,
        value: props.value
    };
    else additionalProps = {
        role: 'button',
        href: elementType === 'a' && !isDisabled ? href : undefined,
        target: elementType === 'a' ? target : undefined,
        type: elementType === 'input' ? type : undefined,
        disabled: elementType === 'input' ? isDisabled : undefined,
        'aria-disabled': !isDisabled || elementType === 'input' ? undefined : isDisabled,
        rel: elementType === 'a' ? rel : undefined
    };
    let { pressProps: pressProps, isPressed: isPressed } = (0, _interactions_usePress_mjs__WEBPACK_IMPORTED_MODULE_3__/* .usePress */ .d)({
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        onPressChange: onPressChange,
        onPress: onPress,
        onPressUp: onPressUp,
        onClick: onClick,
        isDisabled: isDisabled,
        preventFocusOnPress: preventFocusOnPress,
        ref: ref
    });
    let { focusableProps: focusableProps } = (0, _interactions_useFocusable_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useFocusable */ .Wc)(props, ref);
    if (allowFocusWhenDisabled) // oxlint-disable-next-line react/react-compiler
    focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
    let buttonProps = (0, _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .v)(focusableProps, pressProps, (0, _utils_filterDOMProps_mjs__WEBPACK_IMPORTED_MODULE_0__/* .filterDOMProps */ .$)(props, {
        labelable: true
    }));
    return {
        isPressed: isPressed,
        buttonProps: (0, _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .v)(additionalProps, buttonProps, {
            'aria-haspopup': props['aria-haspopup'],
            'aria-expanded': props['aria-expanded'],
            'aria-controls': props['aria-controls'],
            'aria-pressed': props['aria-pressed'],
            'aria-current': props['aria-current'],
            'aria-disabled': props['aria-disabled']
        })
    };
}



//# sourceMappingURL=useButton.mjs.map


/***/ },

/***/ 61207
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U7: () => (/* binding */ $d7f64c32b702fe2c$export$86427a43e3e48ebb),
/* harmony export */   jZ: () => (/* binding */ $d7f64c32b702fe2c$export$8dc98ba7eadeaa56),
/* harmony export */   m_: () => (/* binding */ $d7f64c32b702fe2c$export$b5d7cc18bb8d2b59)
/* harmony export */ });
/* unused harmony export HiddenContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// React doesn't understand the <template> element, which doesn't have children like a normal element.
// It will throw an error during hydration when it expects the firstChild to contain content rendered
// on the server, when in reality, the browser will have placed this inside the `content` document fragment.
// This monkey patches the firstChild property for our special hidden template elements to work around this error.
// does the same for appendChild/removeChild/insertBefore as per the issue below
// See https://github.com/facebook/react/issues/19932
if (typeof HTMLTemplateElement !== 'undefined') {
    Object.defineProperty(HTMLTemplateElement.prototype, 'firstChild', {
        configurable: true,
        enumerable: true,
        get: function() {
            return this.content.firstChild;
        }
    });
    Object.defineProperty(HTMLTemplateElement.prototype, 'appendChild', {
        configurable: true,
        enumerable: true,
        value: function(node) {
            return this.content.appendChild(node);
        }
    });
    Object.defineProperty(HTMLTemplateElement.prototype, 'removeChild', {
        configurable: true,
        enumerable: true,
        value: function(node) {
            return this.content.removeChild(node);
        }
    });
    Object.defineProperty(HTMLTemplateElement.prototype, 'insertBefore', {
        configurable: true,
        enumerable: true,
        value: function(node, child) {
            return this.content.insertBefore(node, child);
        }
    });
}
const $d7f64c32b702fe2c$export$94b6d0abf7d33e8c = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
function $d7f64c32b702fe2c$export$8dc98ba7eadeaa56(props) {
    let isHidden = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($d7f64c32b702fe2c$export$94b6d0abf7d33e8c);
    if (isHidden) // Don't hide again if we are already hidden.
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, react__WEBPACK_IMPORTED_MODULE_0__).Fragment, null, props.children);
    let children = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($d7f64c32b702fe2c$export$94b6d0abf7d33e8c.Provider, {
        value: true
    }, props.children);
    // In SSR, portals are not supported by React. Instead, always render into a <template>
    // element, which the browser will never display to the user. In addition, the
    // content is not part of the accessible DOM tree, so it won't affect ids or other accessibility attributes.
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("template", null, children);
}
function $d7f64c32b702fe2c$export$86427a43e3e48ebb(fn) {
    let Wrapper = (props, ref)=>{
        let isHidden = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($d7f64c32b702fe2c$export$94b6d0abf7d33e8c);
        if (isHidden) return null;
        // oxlint-disable-next-line react/react-compiler
        return fn(props, ref);
    };
    // @ts-ignore - for react dev tools
    Wrapper.displayName = fn.displayName || fn.name;
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Wrapper);
}
function $d7f64c32b702fe2c$export$b5d7cc18bb8d2b59() {
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($d7f64c32b702fe2c$export$94b6d0abf7d33e8c);
}



//# sourceMappingURL=Hidden.mjs.map


/***/ },

/***/ 66683
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ $0c4a58759813079a$export$4e328f61c538687f)
/* harmony export */ });
/* harmony import */ var _interactions_useFocusVisible_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35692);
/* harmony import */ var _interactions_useFocus_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21978);
/* harmony import */ var _interactions_useFocusWithin_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75655);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);









function $0c4a58759813079a$export$4e328f61c538687f(props = {}) {
    let { autoFocus: autoFocus = false, isTextInput: isTextInput, within: within } = props;
    let state = (0, react__WEBPACK_IMPORTED_MODULE_3__.useRef)({
        isFocused: false,
        isFocusVisible: autoFocus || (0, _interactions_useFocusVisible_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isFocusVisible */ .pP)()
    });
    let [isFocused, setFocused] = (0, react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    let [isFocusVisibleState, setFocusVisible] = (0, react__WEBPACK_IMPORTED_MODULE_3__.useState)(// oxlint-disable-next-line react/react-compiler
    ()=>state.current.isFocused && state.current.isFocusVisible);
    let updateState = (0, react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = (0, react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((isFocused)=>{
        state.current.isFocused = isFocused;
        state.current.isFocusVisible = (0, _interactions_useFocusVisible_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isFocusVisible */ .pP)();
        setFocused(isFocused);
        updateState();
    }, [
        updateState
    ]);
    (0, _interactions_useFocusVisible_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useFocusVisibleListener */ .K7)((isFocusVisible)=>{
        state.current.isFocusVisible = isFocusVisible;
        updateState();
    }, [
        isTextInput,
        isFocused
    ], {
        enabled: isFocused,
        isTextInput: isTextInput
    });
    let { focusProps: focusProps } = (0, _interactions_useFocus_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useFocus */ .i)({
        isDisabled: within,
        onFocusChange: onFocusChange
    });
    let { focusWithinProps: focusWithinProps } = (0, _interactions_useFocusWithin_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useFocusWithin */ .R)({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused: isFocused,
        isFocusVisible: isFocusVisibleState,
        focusProps: within ? focusWithinProps : focusProps
    };
}



//# sourceMappingURL=useFocusRing.mjs.map


/***/ },

/***/ 78352
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ $2eb8e6d23f3d0cb0$export$a54013f0d02a8f82),
  Y: () => (/* binding */ $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7)
});

;// ./node_modules/react-aria/dist/private/i18n/utils.mjs
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
const $d805ff57cab8bee2$var$RTL_SCRIPTS = new Set([
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
const $d805ff57cab8bee2$var$RTL_LANGS = new Set([
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
function $d805ff57cab8bee2$export$702d680b21cbd764(localeString) {
    // If the Intl.Locale API is available, use it to get the locale's text direction.
    if (Intl.Locale) {
        let locale = new Intl.Locale(localeString).maximize();
        // Use the text info object to get the direction if possible.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
        let textInfo = // @ts-ignore - this was implemented as a property by some browsers before it was standardized as a function.
        typeof locale.getTextInfo === 'function' ? locale.getTextInfo() : locale.textInfo;
        if (textInfo) return textInfo.direction === 'rtl';
        // Fallback: guess using the script.
        // This is more accurate than guessing by language, since languages can be written in multiple scripts.
        if (locale.script) return $d805ff57cab8bee2$var$RTL_SCRIPTS.has(locale.script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = localeString.split('-')[0];
    return $d805ff57cab8bee2$var$RTL_LANGS.has(lang);
}



//# sourceMappingURL=utils.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/ssr/SSRProvider.mjs
var SSRProvider = __webpack_require__(51601);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria/dist/private/i18n/useDefaultLocale.mjs




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
const $520a025cdb0d710d$var$localeSymbol = Symbol.for('react-aria.i18n.locale');
function $520a025cdb0d710d$export$f09106e7c6677ec5() {
    let locale = typeof window !== 'undefined' && window[$520a025cdb0d710d$var$localeSymbol] || // @ts-ignore
    typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
    try {
        Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]);
    } catch  {
        locale = 'en-US';
    }
    return {
        locale: locale,
        direction: (0, $d805ff57cab8bee2$export$702d680b21cbd764)(locale) ? 'rtl' : 'ltr'
    };
}
let $520a025cdb0d710d$var$currentLocale = $520a025cdb0d710d$export$f09106e7c6677ec5();
let $520a025cdb0d710d$var$listeners = new Set();
function $520a025cdb0d710d$var$updateLocale() {
    $520a025cdb0d710d$var$currentLocale = $520a025cdb0d710d$export$f09106e7c6677ec5();
    for (let listener of $520a025cdb0d710d$var$listeners)listener($520a025cdb0d710d$var$currentLocale);
}
function $520a025cdb0d710d$export$188ec29ebc2bdc3a() {
    let isSSR = (0, SSRProvider/* useIsSSR */.wR)();
    let [defaultLocale, setDefaultLocale] = (0, react.useState)($520a025cdb0d710d$var$currentLocale);
    (0, react.useEffect)(()=>{
        if ($520a025cdb0d710d$var$listeners.size === 0) window.addEventListener('languagechange', $520a025cdb0d710d$var$updateLocale);
        $520a025cdb0d710d$var$listeners.add(setDefaultLocale);
        return ()=>{
            $520a025cdb0d710d$var$listeners.delete(setDefaultLocale);
            if ($520a025cdb0d710d$var$listeners.size === 0) window.removeEventListener('languagechange', $520a025cdb0d710d$var$updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) {
        let locale = typeof window !== 'undefined' && window[$520a025cdb0d710d$var$localeSymbol];
        return {
            locale: locale || 'en-US',
            direction: 'ltr'
        };
    }
    return defaultLocale;
}



//# sourceMappingURL=useDefaultLocale.mjs.map

;// ./node_modules/react-aria/dist/private/i18n/I18nProvider.mjs




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


const $2eb8e6d23f3d0cb0$var$I18nContext = /*#__PURE__*/ (0, react).createContext(null);
/**
 * Internal component that handles the case when locale is provided.
 */ function $2eb8e6d23f3d0cb0$var$I18nProviderWithLocale(props) {
    let { locale: locale, children: children } = props;
    let value = (0, react).useMemo(()=>({
            locale: locale,
            direction: (0, $d805ff57cab8bee2$export$702d680b21cbd764)(locale) ? 'rtl' : 'ltr'
        }), [
        locale
    ]);
    return /*#__PURE__*/ (0, react).createElement($2eb8e6d23f3d0cb0$var$I18nContext.Provider, {
        value: value
    }, children);
}
/**
 * Internal component that handles the case when no locale is provided.
 */ function $2eb8e6d23f3d0cb0$var$I18nProviderWithDefaultLocale(props) {
    let { children: children } = props;
    let defaultLocale = (0, $520a025cdb0d710d$export$188ec29ebc2bdc3a)();
    return /*#__PURE__*/ (0, react).createElement($2eb8e6d23f3d0cb0$var$I18nContext.Provider, {
        value: defaultLocale
    }, children);
}
function $2eb8e6d23f3d0cb0$export$a54013f0d02a8f82(props) {
    let { locale: locale, children: children } = props;
    // Conditionally render different components to avoid calling useDefaultLocale.
    // This is necessary because useDefaultLocale triggers a re-render.
    if (locale) return /*#__PURE__*/ (0, react).createElement($2eb8e6d23f3d0cb0$var$I18nProviderWithLocale, {
        locale: locale,
        children: children
    });
    return /*#__PURE__*/ (0, react).createElement($2eb8e6d23f3d0cb0$var$I18nProviderWithDefaultLocale, {
        children: children
    });
}
function $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7() {
    let defaultLocale = (0, $520a025cdb0d710d$export$188ec29ebc2bdc3a)();
    let context = (0, react.useContext)($2eb8e6d23f3d0cb0$var$I18nContext);
    return context || defaultLocale;
}



//# sourceMappingURL=I18nProvider.mjs.map


/***/ },

/***/ 64874
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ $24f9a20f226ad820$export$5165eccb35aaadb5)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


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
const $24f9a20f226ad820$export$5165eccb35aaadb5 = (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext({
    register: ()=>{}
});
$24f9a20f226ad820$export$5165eccb35aaadb5.displayName = 'PressResponderContext';



//# sourceMappingURL=context.mjs.map


/***/ },

/***/ 75105
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ $f192c2f16961cbe0$export$80f3e147d781571c)
/* harmony export */ });
/* harmony import */ var _utils_focusWithoutScrolling_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62975);
/* harmony import */ var _useFocusVisible_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35692);
/* harmony import */ var _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1612);
/* harmony import */ var _utils_runAfterTransition_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30921);






/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $f192c2f16961cbe0$export$80f3e147d781571c(element) {
    if (!element.isConnected) return;
    // If the user is interacting with a virtual cursor, e.g. screen reader, then
    // wait until after any animated transitions that are currently occurring on
    // the page before shifting focus. This avoids issues with VoiceOver on iOS
    // causing the page to scroll when moving focus if the element is transitioning
    // from off the screen.
    const ownerDocument = (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_3__/* .getOwnerDocument */ .TW)(element);
    if ((0, _useFocusVisible_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getInteractionModality */ .ME)() === 'virtual') {
        let lastFocusedElement = (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getActiveElement */ .bq)(ownerDocument);
        (0, _utils_runAfterTransition_mjs__WEBPACK_IMPORTED_MODULE_4__/* .runAfterTransition */ .v)(()=>{
            const activeElement = (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getActiveElement */ .bq)(ownerDocument);
            // If focus did not move or focus was lost to the body, and the element is still in the document, focus it.
            if ((activeElement === lastFocusedElement || activeElement === ownerDocument.body) && element.isConnected) (0, _utils_focusWithoutScrolling_mjs__WEBPACK_IMPORTED_MODULE_0__/* .focusWithoutScrolling */ .e)(element);
        });
    } else (0, _utils_focusWithoutScrolling_mjs__WEBPACK_IMPORTED_MODULE_0__/* .focusWithoutScrolling */ .e)(element);
}



//# sourceMappingURL=focusSafely.mjs.map


/***/ },

/***/ 21978
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ $1e74c67db218ce67$export$f8168d8dd8fd66e6)
/* harmony export */ });
/* harmony import */ var _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62975);
/* harmony import */ var _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1612);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26044);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);





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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions




function $1e74c67db218ce67$export$f8168d8dd8fd66e6(props) {
    let { isDisabled: isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange: onFocusChange } = props;
    const onBlur = (0, react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e)=>{
        if ((0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getEventTarget */ .wt)(e) === e.currentTarget) {
            if (onBlurProp) onBlurProp(e);
            if (onFocusChange) onFocusChange(false);
            return true;
        }
    }, [
        onBlurProp,
        onFocusChange
    ]);
    const onSyntheticFocus = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useSyntheticBlurEvent */ .yB)(onBlur);
    const onFocus = (0, react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        let eventTarget = (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getEventTarget */ .wt)(e);
        const ownerDocument = (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .TW)(eventTarget);
        const activeElement = ownerDocument ? (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getActiveElement */ .bq)(ownerDocument) : (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getActiveElement */ .bq)();
        if (eventTarget === e.currentTarget && eventTarget === activeElement) {
            if (onFocusProp) onFocusProp(e);
            if (onFocusChange) onFocusChange(true);
            onSyntheticFocus(e);
        }
    }, [
        onFocusChange,
        onFocusProp,
        onSyntheticFocus
    ]);
    return {
        focusProps: {
            onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : undefined,
            onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : undefined
        }
    };
}



//# sourceMappingURL=useFocus.mjs.map


/***/ },

/***/ 35692
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cl: () => (/* binding */ $8f5a2122b0992be3$export$8397ddfc504fdb9a),
/* harmony export */   K7: () => (/* binding */ $8f5a2122b0992be3$export$ec71b4b83ac08ec3),
/* harmony export */   ME: () => (/* binding */ $8f5a2122b0992be3$export$630ff653c5ada6a9),
/* harmony export */   lb: () => (/* binding */ $8f5a2122b0992be3$export$98e20ec92f614cfe),
/* harmony export */   pP: () => (/* binding */ $8f5a2122b0992be3$export$b9b3dfddab17db27)
/* harmony export */ });
/* unused harmony exports changeHandlers, hasSetupGlobalListeners, addWindowFocusTracking, getPointerType, useFocusVisible */
/* unused harmony import specifier */ var $7U4qw$useState;
/* harmony import */ var _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62975);
/* harmony import */ var _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1612);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26044);
/* harmony import */ var _utils_platform_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87082);
/* harmony import */ var _utils_isVirtualEvent_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78748);
/* harmony import */ var _utils_openLink_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46271);
/* harmony import */ var _ssr_SSRProvider_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51601);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96540);









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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions








let $8f5a2122b0992be3$var$currentModality = null;
let $8f5a2122b0992be3$var$currentPointerType = 'keyboard';
const $8f5a2122b0992be3$export$901e90a13c50a14e = new Set();
let $8f5a2122b0992be3$export$d90243b58daecda7 = new Map(); // We use a map here to support setting event listeners across multiple document objects.
let $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
let $8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
// Only Tab or Esc keys will make focus visible on text input elements
const $8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
};
function $8f5a2122b0992be3$var$triggerChangeHandlers(modality, e) {
    for (let handler of $8f5a2122b0992be3$export$901e90a13c50a14e)handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus
 * styles visible.
 */ function $8f5a2122b0992be3$var$isValidKey(e) {
    // Control and Shift keys trigger when navigating back to the tab with keyboard.
    return !(e.metaKey || !(0, _utils_platform_mjs__WEBPACK_IMPORTED_MODULE_3__/* .isMac */ .cX)() && e.altKey || e.ctrlKey || e.key === 'Control' || e.key === 'Shift' || e.key === 'Meta');
}
function $8f5a2122b0992be3$var$handleKeyboardEvent(e) {
    $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
    if (!(0, _utils_openLink_mjs__WEBPACK_IMPORTED_MODULE_5__/* .openLink */ .Fe).isOpening && $8f5a2122b0992be3$var$isValidKey(e)) {
        $8f5a2122b0992be3$var$currentModality = 'keyboard';
        $8f5a2122b0992be3$var$currentPointerType = 'keyboard';
        $8f5a2122b0992be3$var$triggerChangeHandlers('keyboard', e);
    }
}
function $8f5a2122b0992be3$var$handlePointerEvent(e) {
    $8f5a2122b0992be3$var$currentModality = 'pointer';
    $8f5a2122b0992be3$var$currentPointerType = 'pointerType' in e ? e.pointerType : 'mouse';
    if (e.type === 'mousedown' || e.type === 'pointerdown') {
        $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
        $8f5a2122b0992be3$var$triggerChangeHandlers('pointer', e);
    }
}
function $8f5a2122b0992be3$var$handleClickEvent(e) {
    if (!(0, _utils_openLink_mjs__WEBPACK_IMPORTED_MODULE_5__/* .openLink */ .Fe).isOpening && (0, _utils_isVirtualEvent_mjs__WEBPACK_IMPORTED_MODULE_4__/* .isVirtualClick */ .Y)(e)) {
        $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
        $8f5a2122b0992be3$var$currentModality = 'virtual';
        $8f5a2122b0992be3$var$currentPointerType = 'virtual';
    }
}
function $8f5a2122b0992be3$var$handleFocusEvent(e) {
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    let ownerWindow = (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .mD)((0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getEventTarget */ .wt)(e));
    let ownerDocument = (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .TW)((0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getEventTarget */ .wt)(e));
    if ((0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getEventTarget */ .wt)(e) === ownerWindow || (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getEventTarget */ .wt)(e) === ownerDocument || (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .ignoreFocusEvent */ .lR) || !e.isTrusted) return;
    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!$8f5a2122b0992be3$var$hasEventBeforeFocus && !$8f5a2122b0992be3$var$hasBlurredWindowRecently) {
        $8f5a2122b0992be3$var$currentModality = 'virtual';
        $8f5a2122b0992be3$var$currentPointerType = 'virtual';
        $8f5a2122b0992be3$var$triggerChangeHandlers('virtual', e);
    }
    $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
    $8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
}
function $8f5a2122b0992be3$var$handleWindowBlur() {
    if (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .ignoreFocusEvent */ .lR) return;
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
    $8f5a2122b0992be3$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */ function $8f5a2122b0992be3$var$setupGlobalFocusEvents(element) {
    // eslint-disable-next-line no-restricted-globals
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const windowObject = (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .mD)(element);
    const documentObject = (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .TW)(element);
    if ($8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject)) return;
    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    // defineProperty (not assignment) so this works even if `focus` is currently
    // a getter-only accessor — e.g. when @testing-library/user-event's setup()
    // has instrumented it. Plain assignment throws in that case.
    let focus = windowObject.HTMLElement.prototype.focus;
    Reflect.defineProperty(windowObject.HTMLElement.prototype, 'focus', {
        configurable: true,
        writable: true,
        value: function() {
            $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
            focus.apply(this, arguments);
        }
    });
    documentObject.addEventListener('keydown', $8f5a2122b0992be3$var$handleKeyboardEvent, true);
    documentObject.addEventListener('keyup', $8f5a2122b0992be3$var$handleKeyboardEvent, true);
    documentObject.addEventListener('click', $8f5a2122b0992be3$var$handleClickEvent, true);
    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    windowObject.addEventListener('focus', $8f5a2122b0992be3$var$handleFocusEvent, true);
    windowObject.addEventListener('blur', $8f5a2122b0992be3$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.addEventListener('pointerdown', $8f5a2122b0992be3$var$handlePointerEvent, true);
        documentObject.addEventListener('pointermove', $8f5a2122b0992be3$var$handlePointerEvent, true);
        documentObject.addEventListener('pointerup', $8f5a2122b0992be3$var$handlePointerEvent, true);
    } else if (false) // removed by dead control flow
{}
    // Add unmount handler
    windowObject.addEventListener('beforeunload', ()=>{
        $8f5a2122b0992be3$var$tearDownWindowFocusTracking(element);
    }, {
        once: true
    });
    $8f5a2122b0992be3$export$d90243b58daecda7.set(windowObject, {
        focus: focus
    });
}
const $8f5a2122b0992be3$var$tearDownWindowFocusTracking = (element, loadListener)=>{
    const windowObject = (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .mD)(element);
    const documentObject = (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .TW)(element);
    if (loadListener) documentObject.removeEventListener('DOMContentLoaded', loadListener);
    if (!$8f5a2122b0992be3$export$d90243b58daecda7.has(windowObject)) return;
    Reflect.defineProperty(windowObject.HTMLElement.prototype, 'focus', {
        configurable: true,
        writable: true,
        value: $8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject).focus
    });
    documentObject.removeEventListener('keydown', $8f5a2122b0992be3$var$handleKeyboardEvent, true);
    documentObject.removeEventListener('keyup', $8f5a2122b0992be3$var$handleKeyboardEvent, true);
    documentObject.removeEventListener('click', $8f5a2122b0992be3$var$handleClickEvent, true);
    windowObject.removeEventListener('focus', $8f5a2122b0992be3$var$handleFocusEvent, true);
    windowObject.removeEventListener('blur', $8f5a2122b0992be3$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.removeEventListener('pointerdown', $8f5a2122b0992be3$var$handlePointerEvent, true);
        documentObject.removeEventListener('pointermove', $8f5a2122b0992be3$var$handlePointerEvent, true);
        documentObject.removeEventListener('pointerup', $8f5a2122b0992be3$var$handlePointerEvent, true);
    } else if (false) // removed by dead control flow
{}
    $8f5a2122b0992be3$export$d90243b58daecda7.delete(windowObject);
};
function $8f5a2122b0992be3$export$2f1888112f558a7d(element) {
    const documentObject = (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .TW)(element);
    let loadListener;
    if (documentObject.readyState !== 'loading') $8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
    else {
        loadListener = ()=>{
            $8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
        };
        documentObject.addEventListener('DOMContentLoaded', loadListener);
    }
    return ()=>$8f5a2122b0992be3$var$tearDownWindowFocusTracking(element, loadListener);
}
// Server-side rendering does not have the document object defined
// eslint-disable-next-line no-restricted-globals
if (typeof document !== 'undefined') $8f5a2122b0992be3$export$2f1888112f558a7d();
function $8f5a2122b0992be3$export$b9b3dfddab17db27() {
    return $8f5a2122b0992be3$var$currentModality !== 'pointer';
}
function $8f5a2122b0992be3$export$630ff653c5ada6a9() {
    return $8f5a2122b0992be3$var$currentModality;
}
function $8f5a2122b0992be3$export$8397ddfc504fdb9a(modality) {
    $8f5a2122b0992be3$var$currentModality = modality;
    $8f5a2122b0992be3$var$currentPointerType = modality === 'pointer' ? 'mouse' : modality;
    $8f5a2122b0992be3$var$triggerChangeHandlers(modality, null);
}
function $8f5a2122b0992be3$export$887a228355cf7d95() {
    return $8f5a2122b0992be3$var$currentPointerType;
}
function $8f5a2122b0992be3$export$98e20ec92f614cfe() {
    $8f5a2122b0992be3$var$setupGlobalFocusEvents();
    let [modality, setModality] = (0, react__WEBPACK_IMPORTED_MODULE_7__.useState)($8f5a2122b0992be3$var$currentModality);
    (0, react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        let handler = ()=>{
            setModality($8f5a2122b0992be3$var$currentModality);
        };
        $8f5a2122b0992be3$export$901e90a13c50a14e.add(handler);
        return ()=>{
            $8f5a2122b0992be3$export$901e90a13c50a14e.delete(handler);
        };
    }, []);
    return (0, _ssr_SSRProvider_mjs__WEBPACK_IMPORTED_MODULE_6__/* .useIsSSR */ .wR)() ? null : modality;
}
const $8f5a2122b0992be3$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape
 * keys pressed) so that focus visible style can be properly set.
 */ function $8f5a2122b0992be3$var$isKeyboardFocusEvent(isTextInput, modality, e) {
    let eventTarget = e ? (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getEventTarget */ .wt)(e) : undefined;
    let ownerDocument = (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .TW)(eventTarget);
    let ownerWindow = (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .mD)(eventTarget);
    const IHTMLInputElement = typeof ownerWindow !== 'undefined' ? ownerWindow.HTMLInputElement : HTMLInputElement;
    const IHTMLTextAreaElement = typeof ownerWindow !== 'undefined' ? ownerWindow.HTMLTextAreaElement : HTMLTextAreaElement;
    const IHTMLElement = typeof ownerWindow !== 'undefined' ? ownerWindow.HTMLElement : HTMLElement;
    const IKeyboardEvent = typeof ownerWindow !== 'undefined' ? ownerWindow.KeyboardEvent : KeyboardEvent;
    // For keyboard events that occur on a non-input element that will move focus into input element (aka ArrowLeft going from Datepicker button to the main input group)
    // we need to rely on the user passing isTextInput into here. This way we can skip toggling focus visiblity for said input element
    let activeElement = (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getActiveElement */ .bq)(ownerDocument);
    isTextInput = isTextInput || activeElement instanceof IHTMLInputElement && !$8f5a2122b0992be3$var$nonTextInputTypes.has(activeElement.type) || activeElement instanceof IHTMLTextAreaElement || activeElement instanceof IHTMLElement && activeElement.isContentEditable;
    return !(isTextInput && modality === 'keyboard' && e instanceof IKeyboardEvent && !$8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $8f5a2122b0992be3$export$ffd9e5021c1fb2d6(props = {}) {
    let { isTextInput: isTextInput, autoFocus: autoFocus } = props;
    let [isFocusVisibleState, setFocusVisible] = (0, $7U4qw$useState)(autoFocus || $8f5a2122b0992be3$export$b9b3dfddab17db27());
    $8f5a2122b0992be3$export$ec71b4b83ac08ec3((isFocusVisible)=>{
        setFocusVisible(isFocusVisible);
    }, [
        isTextInput
    ], {
        isTextInput: isTextInput
    });
    return {
        isFocusVisible: isFocusVisibleState
    };
}
function $8f5a2122b0992be3$export$ec71b4b83ac08ec3(fn, deps, opts) {
    $8f5a2122b0992be3$var$setupGlobalFocusEvents();
    (0, react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (opts?.enabled === false) return;
        let handler = (modality, e)=>{
            // We want to early return for any keyboard events that occur inside text inputs EXCEPT for Tab and Escape
            if (!$8f5a2122b0992be3$var$isKeyboardFocusEvent(!!opts?.isTextInput, modality, e)) return;
            fn($8f5a2122b0992be3$export$b9b3dfddab17db27());
        };
        $8f5a2122b0992be3$export$901e90a13c50a14e.add(handler);
        return ()=>{
            $8f5a2122b0992be3$export$901e90a13c50a14e.delete(handler);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}



//# sourceMappingURL=useFocusVisible.mjs.map


/***/ },

/***/ 75655
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ $2c9edc598a03d523$export$420e68273165f4ec)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26044);
/* harmony import */ var _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62975);
/* harmony import */ var _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1612);
/* harmony import */ var _utils_useGlobalListeners_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74876);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96540);






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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions





function $2c9edc598a03d523$export$420e68273165f4ec(props) {
    let { isDisabled: isDisabled, onBlurWithin: onBlurWithin, onFocusWithin: onFocusWithin, onFocusWithinChange: onFocusWithinChange } = props;
    let state = (0, react__WEBPACK_IMPORTED_MODULE_4__.useRef)({
        isFocusWithin: false
    });
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = (0, _utils_useGlobalListeners_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useGlobalListeners */ .A)();
    let onBlur = (0, react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((e)=>{
        // Ignore events bubbling through portals.
        if (!(0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .nodeContains */ .sD)(e.currentTarget, (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getEventTarget */ .wt)(e))) return;
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.current.isFocusWithin && !(0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .nodeContains */ .sD)(e.currentTarget, e.relatedTarget)) {
            state.current.isFocusWithin = false;
            removeAllGlobalListeners();
            if (onBlurWithin) onBlurWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(false);
        }
    }, [
        onBlurWithin,
        onFocusWithinChange,
        state,
        removeAllGlobalListeners
    ]);
    let onSyntheticFocus = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useSyntheticBlurEvent */ .yB)(onBlur);
    let onFocus = (0, react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((e)=>{
        // Ignore events bubbling through portals.
        if (!(0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .nodeContains */ .sD)(e.currentTarget, (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getEventTarget */ .wt)(e))) return;
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        let eventTarget = (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getEventTarget */ .wt)(e);
        const ownerDocument = (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getOwnerDocument */ .TW)(eventTarget);
        const activeElement = (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getActiveElement */ .bq)(ownerDocument);
        if (!state.current.isFocusWithin && activeElement === eventTarget) {
            if (onFocusWithin) onFocusWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(true);
            state.current.isFocusWithin = true;
            onSyntheticFocus(e);
            // Browsers don't fire blur events when elements are removed from the DOM.
            // However, if a focus event occurs outside the element we're tracking, we
            // can manually fire onBlur.
            let currentTarget = e.currentTarget;
            addGlobalListener(ownerDocument, 'focus', (e)=>{
                let eventTarget = (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getEventTarget */ .wt)(e);
                if (state.current.isFocusWithin && !(0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .nodeContains */ .sD)(currentTarget, eventTarget)) {
                    let nativeEvent = new ownerDocument.defaultView.FocusEvent('blur', {
                        relatedTarget: eventTarget
                    });
                    (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .setEventTarget */ .o1)(nativeEvent, currentTarget);
                    let event = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createSyntheticEvent */ .eg)(nativeEvent);
                    onBlur(event);
                }
            }, {
                capture: true
            });
        }
    }, [
        onFocusWithin,
        onFocusWithinChange,
        onSyntheticFocus,
        addGlobalListener,
        onBlur
    ]);
    if (isDisabled) return {
        focusWithinProps: {
            // These cannot be null, that would conflict in mergeProps
            onFocus: undefined,
            onBlur: undefined
        }
    };
    return {
        focusWithinProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}



//# sourceMappingURL=useFocusWithin.mjs.map


/***/ },

/***/ 55602
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M2: () => (/* binding */ $d1116acdf220c2da$export$13f3202a3e5ddd5),
/* harmony export */   Wc: () => (/* binding */ $d1116acdf220c2da$export$4c014de7c8940b4c),
/* harmony export */   gY: () => (/* binding */ $d1116acdf220c2da$export$f9762fab77588ecb),
/* harmony export */   zo: () => (/* binding */ $d1116acdf220c2da$export$35a3bebf7ef2d934)
/* harmony export */ });
/* harmony import */ var _focusSafely_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75105);
/* harmony import */ var _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47425);
/* harmony import */ var _utils_mergeRefs_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24211);
/* harmony import */ var _useFocus_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21978);
/* harmony import */ var _useKeyboard_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91357);
/* harmony import */ var _utils_useObjectRef_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80716);
/* harmony import */ var _utils_useSyncRef_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80428);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96540);











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









let $d1116acdf220c2da$export$f9762fab77588ecb = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_7__).createContext(null);
function $d1116acdf220c2da$var$useFocusableContext(ref) {
    let context = (0, react__WEBPACK_IMPORTED_MODULE_7__.useContext)($d1116acdf220c2da$export$f9762fab77588ecb) || {};
    (0, _utils_useSyncRef_mjs__WEBPACK_IMPORTED_MODULE_6__/* .useSyncRef */ .w)(context, ref);
    // eslint-disable-next-line
    let { ref: _, ...otherProps } = context;
    return otherProps;
}
const $d1116acdf220c2da$export$13f3202a3e5ddd5 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_7__).forwardRef(function FocusableProvider(props, ref) {
    let { children: children, ...otherProps } = props;
    let objRef = (0, _utils_useObjectRef_mjs__WEBPACK_IMPORTED_MODULE_5__/* .useObjectRef */ .U)(ref);
    let context = {
        ...otherProps,
        ref: objRef
    };
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_7__).createElement($d1116acdf220c2da$export$f9762fab77588ecb.Provider, {
        value: context
    }, children);
});
function $d1116acdf220c2da$export$4c014de7c8940b4c(props, domRef) {
    let { focusProps: focusProps } = (0, _useFocus_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useFocus */ .i)(props);
    let { keyboardProps: keyboardProps } = (0, _useKeyboard_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useKeyboard */ .d)(props);
    let interactions = (0, _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .v)(focusProps, keyboardProps);
    let domProps = $d1116acdf220c2da$var$useFocusableContext(domRef);
    let interactionProps = props.isDisabled ? {} : domProps;
    let autoFocusRef = (0, react__WEBPACK_IMPORTED_MODULE_7__.useRef)(props.autoFocus);
    (0, react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (autoFocusRef.current && domRef.current) (0, _focusSafely_mjs__WEBPACK_IMPORTED_MODULE_0__/* .focusSafely */ .l)(domRef.current);
        autoFocusRef.current = false;
    }, [
        domRef
    ]);
    // Always set a tabIndex so that Safari allows focusing native buttons and inputs.
    let tabIndex = props.excludeFromTabOrder ? -1 : 0;
    if (props.isDisabled) tabIndex = undefined;
    return {
        focusableProps: (0, _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .v)({
            ...interactions,
            tabIndex: tabIndex
        }, interactionProps)
    };
}
const $d1116acdf220c2da$export$35a3bebf7ef2d934 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_7__.forwardRef)(({ children: children, ...props }, ref)=>{
    ref = (0, _utils_useObjectRef_mjs__WEBPACK_IMPORTED_MODULE_5__/* .useObjectRef */ .U)(ref);
    let { focusableProps: focusableProps } = $d1116acdf220c2da$export$4c014de7c8940b4c(props, ref);
    let child = (0, react__WEBPACK_IMPORTED_MODULE_7__).Children.only(children);
    (0, react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        if (true) return;
        // removed by dead control flow

        // removed by dead control flow

        // removed by dead control flow

        // removed by dead control flow

    }, [
        ref,
        props.isDisabled
    ]);
    // @ts-ignore
    let childRef = parseInt((0, react__WEBPACK_IMPORTED_MODULE_7__).version, 10) < 19 ? child.ref : child.props.ref;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_7__).cloneElement(child, {
        ...(0, _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .v)(focusableProps, child.props),
        // @ts-ignore
        // oxlint-disable-next-line react/react-compiler
        ref: (0, _utils_mergeRefs_mjs__WEBPACK_IMPORTED_MODULE_2__/* .mergeRefs */ .P)(childRef, ref)
    });
});



//# sourceMappingURL=useFocusable.mjs.map


/***/ },

/***/ 68068
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ $e969f22b6713ca4a$export$ae780daf29e6d456)
/* harmony export */ });
/* harmony import */ var _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62975);
/* harmony import */ var _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1612);
/* harmony import */ var _utils_useGlobalListeners_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74876);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);





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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions




// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
let $e969f22b6713ca4a$var$hoverCount = 0;
function $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents() {
    $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = true;
    // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
    // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
    // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
    // the distant future because a user previously touched the element.
    setTimeout(()=>{
        $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
    }, 500);
}
function $e969f22b6713ca4a$var$handleGlobalPointerEvent(e) {
    if (e.pointerType === 'touch') $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $e969f22b6713ca4a$var$setupGlobalTouchEvents() {
    let ownerDocument = (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .TW)(null);
    if (typeof ownerDocument === 'undefined') return;
    if ($e969f22b6713ca4a$var$hoverCount === 0) {
        if (typeof PointerEvent !== 'undefined') ownerDocument.addEventListener('pointerup', $e969f22b6713ca4a$var$handleGlobalPointerEvent);
        else if (false) // removed by dead control flow
{}
    }
    $e969f22b6713ca4a$var$hoverCount++;
    return ()=>{
        $e969f22b6713ca4a$var$hoverCount--;
        if ($e969f22b6713ca4a$var$hoverCount > 0) return;
        if (typeof PointerEvent !== 'undefined') ownerDocument.removeEventListener('pointerup', $e969f22b6713ca4a$var$handleGlobalPointerEvent);
        else if (false) // removed by dead control flow
{}
    };
}
function $e969f22b6713ca4a$export$ae780daf29e6d456(props) {
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, isDisabled: isDisabled } = props;
    let [isHovered, setHovered] = (0, react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    let state = (0, react__WEBPACK_IMPORTED_MODULE_3__.useRef)({
        isHovered: false,
        ignoreEmulatedMouseEvents: false,
        pointerType: '',
        target: null
    }).current;
    (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)($e969f22b6713ca4a$var$setupGlobalTouchEvents, []);
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = (0, _utils_useGlobalListeners_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useGlobalListeners */ .A)();
    let { hoverProps: hoverProps, triggerHoverEnd: triggerHoverEnd } = (0, react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        let triggerHoverStart = (event, pointerType)=>{
            state.pointerType = pointerType;
            if (isDisabled || pointerType === 'touch' || state.isHovered || !(0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .nodeContains */ .sD)(event.currentTarget, (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getEventTarget */ .wt)(event))) return;
            state.isHovered = true;
            let target = event.currentTarget;
            state.target = target;
            // When an element that is hovered over is removed, no pointerleave event is fired by the browser,
            // even though the originally hovered target may have shrunk in size so it is no longer hovered.
            // However, a pointerover event will be fired on the new target the mouse is over.
            // In Chrome this happens immediately. In Safari and Firefox, it happens upon moving the mouse one pixel.
            addGlobalListener((0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .TW)((0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getEventTarget */ .wt)(event)), 'pointerover', (e)=>{
                if (state.isHovered && state.target && !(0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .nodeContains */ .sD)(state.target, (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getEventTarget */ .wt)(e))) // oxlint-disable-next-line react/react-compiler
                triggerHoverEnd(e, e.pointerType);
            }, {
                capture: true
            });
            if (onHoverStart) onHoverStart({
                type: 'hoverstart',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(true);
            setHovered(true);
        };
        let triggerHoverEnd = (event, pointerType)=>{
            let target = state.target;
            state.pointerType = '';
            state.target = null;
            if (pointerType === 'touch' || !state.isHovered || !target) return;
            state.isHovered = false;
            removeAllGlobalListeners();
            if (onHoverEnd) onHoverEnd({
                type: 'hoverend',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(false);
            setHovered(false);
        };
        let hoverProps = {};
        if (typeof PointerEvent !== 'undefined') {
            hoverProps.onPointerEnter = (e)=>{
                if ($e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents && e.pointerType === 'mouse') return;
                triggerHoverStart(e, e.pointerType);
            };
            hoverProps.onPointerLeave = (e)=>{
                if (!isDisabled && (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .nodeContains */ .sD)(e.currentTarget, (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getEventTarget */ .wt)(e))) triggerHoverEnd(e, e.pointerType);
            };
        } else if (false) // removed by dead control flow
{}
        return {
            hoverProps: hoverProps,
            triggerHoverEnd: triggerHoverEnd
        };
    }, [
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled,
        state,
        addGlobalListener,
        removeAllGlobalListeners
    ]);
    (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // Call the triggerHoverEnd as soon as isDisabled changes to true
        // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
        if (isDisabled) triggerHoverEnd({
            currentTarget: state.target
        }, state.pointerType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled
    ]);
    return {
        hoverProps: hoverProps,
        isHovered: isHovered
    };
}



//# sourceMappingURL=useHover.mjs.map


/***/ },

/***/ 91357
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ $8296dad1a4c5e0dc$export$8f71654801c2f7cd)
});

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/chain.mjs
var chain = __webpack_require__(96558);
;// ./node_modules/react-aria/dist/private/interactions/createEventHandler.mjs
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
 */ function $8dba16319206abb6$export$48d1ea6320830260(handler) {
    if (!handler) return undefined;
    return (e)=>{
        let shouldStopPropagation = true;
        let event = {
            ...e,
            preventDefault () {
                e.preventDefault();
            },
            isDefaultPrevented () {
                return e.isDefaultPrevented();
            },
            stopPropagation () {
                if (shouldStopPropagation && "production" !== 'production') // removed by dead control flow
{}
                else shouldStopPropagation = true;
            },
            continuePropagation () {
                shouldStopPropagation = false;
                // nested createEventHandler might have set continue propagation so we should continue
                // propagation on wrappers
                if (typeof e.continuePropagation === 'function') e.continuePropagation();
            },
            isPropagationStopped () {
                return shouldStopPropagation;
            }
        };
        handler(event);
        // nested createEventHandler calls may already have stopped propagation
        if (shouldStopPropagation && !(typeof e.isPropagationStopped === 'function' && e.isPropagationStopped())) e.stopPropagation();
    };
}



//# sourceMappingURL=createEventHandler.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/platform.mjs
var platform = __webpack_require__(87082);
;// ./node_modules/react-aria/dist/private/interactions/createKeyboardShortcutHandler.mjs


/*
 * Copyright 2025 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/** Modifier names in shortcut strings (case-insensitive). Order in the string does not matter. */ const $cbf729ad7eb217b0$var$MODIFIER_NAMES = new Set([
    'shift',
    'alt',
    'control',
    'meta',
    'mod' // OS dependent - Cmd on Mac, Control on Windows/Linux
]);
/** Canonical modifier order for stable keys (sorted, fixed order). */ const $cbf729ad7eb217b0$var$CANONICAL_MODIFIER_ORDER = [
    'Alt',
    'Control',
    'Meta',
    'Shift'
];
function $cbf729ad7eb217b0$export$9932402e211e7315(parsed) {
    let set = new Set();
    if (parsed.alt) set.add('Alt');
    if (parsed.shift) set.add('Shift');
    if (parsed.ctrl) set.add('Control');
    if (parsed.meta) set.add('Meta');
    if (parsed.mod) set.add((0, platform/* isMac */.cX)() ? 'Meta' : 'Control');
    return set;
}
function $cbf729ad7eb217b0$export$bf26c410e1f8fe6d(e) {
    let set = new Set();
    if (e.altKey) set.add('Alt');
    if (e.ctrlKey) set.add('Control');
    if (e.metaKey) set.add('Meta');
    if (e.shiftKey) set.add('Shift');
    return set;
}
function $cbf729ad7eb217b0$var$sortedModifierTokens(set) {
    return $cbf729ad7eb217b0$var$CANONICAL_MODIFIER_ORDER.filter((name)=>set.has(name));
}
function $cbf729ad7eb217b0$export$d636f01a2eaffd51(spec) {
    let parts = spec.split('+').reduce((prev, part)=>{
        let lower = part.toLowerCase();
        if ($cbf729ad7eb217b0$var$MODIFIER_NAMES.has(lower)) {
            if (lower === 'shift') prev.shift = true;
            else if (lower === 'alt') prev.alt = true;
            else if (lower === 'control') prev.ctrl = true;
            else if (lower === 'meta') prev.meta = true;
            else if (lower === 'mod') prev.mod = true;
        } else prev.key = part;
        return prev;
    }, {
        shift: false,
        alt: false,
        ctrl: false,
        meta: false,
        mod: false,
        key: ''
    });
    if (parts.key === '') throw new Error(`Invalid keyboard shortcut: "${spec}". Must include exactly one non-modifier key (e.g. "a", "Enter", "ArrowDown"). Combine any of Shift, Alt, Ctrl, Meta, and Mod.`);
    return parts;
}
function $cbf729ad7eb217b0$var$normalizeEventKey(key) {
    return key.toLowerCase();
}
/** Short aliases for common keys (shortcut side, before match). */ const $cbf729ad7eb217b0$var$KEY_ALIASES = {
    space: ' ',
    esc: 'escape',
    del: 'delete',
    ins: 'insert',
    left: 'arrowleft',
    right: 'arrowright',
    up: 'arrowup',
    down: 'arrowdown',
    pageup: 'pageup',
    pagedown: 'pagedown'
};
/** Canonical key segment (lowercase); aliases like `down` → `arrowdown`. */ function $cbf729ad7eb217b0$var$canonicalKeyFromSpecKey(specKey) {
    let k = $cbf729ad7eb217b0$var$normalizeEventKey(specKey);
    let aliased = $cbf729ad7eb217b0$var$KEY_ALIASES[k];
    return aliased != null ? aliased : k;
}
function $cbf729ad7eb217b0$export$6cfa2ace150c84a5(parsed) {
    let mods = $cbf729ad7eb217b0$var$sortedModifierTokens($cbf729ad7eb217b0$export$9932402e211e7315(parsed));
    let key = $cbf729ad7eb217b0$var$canonicalKeyFromSpecKey(parsed.key);
    return mods.length > 0 ? `${mods.join('+')}+${key}` : key;
}
function $cbf729ad7eb217b0$export$786304bda41dd69f(e) {
    let mods = $cbf729ad7eb217b0$var$sortedModifierTokens($cbf729ad7eb217b0$export$bf26c410e1f8fe6d(e));
    let key = $cbf729ad7eb217b0$var$normalizeEventKey(e.key);
    let prefix = mods.length > 0 ? `${mods.join('+')}+` : '';
    return prefix + key;
}
function $cbf729ad7eb217b0$export$2fd1fc8039383ae1(bindings) {
    let map = new Map();
    for (let [spec, action] of Object.entries(bindings)){
        let parsed = $cbf729ad7eb217b0$export$d636f01a2eaffd51(spec);
        map.set($cbf729ad7eb217b0$export$6cfa2ace150c84a5(parsed), action);
    }
    return (e)=>{
        let canonical = $cbf729ad7eb217b0$export$786304bda41dd69f(e);
        let action = map.get(canonical);
        let result = action?.(e);
        if (result === undefined && action !== undefined) result = {
            shouldContinuePropagation: false,
            shouldPreventDefault: true
        };
        else if (typeof result === 'boolean') result = {
            shouldContinuePropagation: !result,
            shouldPreventDefault: result
        };
        if (result?.shouldPreventDefault) e.preventDefault();
        if (!action || result?.shouldContinuePropagation) e.continuePropagation();
    };
}



//# sourceMappingURL=createKeyboardShortcutHandler.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(62975);
;// ./node_modules/react-aria/dist/private/interactions/useKeyboard.mjs





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



function $8296dad1a4c5e0dc$export$8f71654801c2f7cd(props) {
    let { shortcuts: shortcuts, allowRepeats: allowRepeats = false, allowComposing: allowComposing = false } = props;
    let onKeyDown;
    let onKeyUp;
    if (shortcuts) {
        let shortcutHandler = (0, $cbf729ad7eb217b0$export$2fd1fc8039383ae1)(shortcuts);
        let shortcutOnKeyDown = (0, $8dba16319206abb6$export$48d1ea6320830260)((e)=>{
            // If keyboard event didn't originate from a child of the current target,
            // then it's a React event coming through a portal. We should ignore it.
            if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e))) {
                e.continuePropagation();
                return;
            }
            if (e.nativeEvent?.repeat && !allowRepeats || e.nativeEvent?.isComposing && !allowComposing) {
                e.continuePropagation();
                return;
            }
            shortcutHandler(e);
        });
        let shortcutOnKeyUp = (0, $8dba16319206abb6$export$48d1ea6320830260)((e)=>{
            // If keyboard event didn't originate from a child of the current target,
            // then it's a React event coming through a portal. We should ignore it.
            if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e))) {
                e.continuePropagation();
                return;
            }
            if (e.nativeEvent?.repeat && !allowRepeats || e.nativeEvent?.isComposing && !allowComposing) {
                e.continuePropagation();
                return;
            }
            // implement shortcut handler on keyup, what should the map be called? or should it be another syntax on shortcuts?
            e.continuePropagation();
        });
        onKeyDown = props.onKeyDown ? (0, chain/* chain */.c)(props.onKeyDown, shortcutOnKeyDown) : shortcutOnKeyDown;
        onKeyUp = props.onKeyUp ? (0, chain/* chain */.c)(props.onKeyUp, shortcutOnKeyUp) : shortcutOnKeyUp;
    } else {
        onKeyDown = (0, $8dba16319206abb6$export$48d1ea6320830260)(props.onKeyDown);
        onKeyUp = (0, $8dba16319206abb6$export$48d1ea6320830260)(props.onKeyUp);
    }
    return {
        keyboardProps: props.isDisabled ? {} : {
            onKeyDown: onKeyDown,
            onKeyUp: onKeyUp
        }
    };
}



//# sourceMappingURL=useKeyboard.mjs.map


/***/ },

/***/ 23580
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ $d27d541f9569d26d$export$45712eceda6fad21)
});

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/chain.mjs
var chain = __webpack_require__(96558);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/utils.mjs
var utils = __webpack_require__(26044);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/domHelpers.mjs
var domHelpers = __webpack_require__(1612);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/platform.mjs
var platform = __webpack_require__(87082);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/runAfterTransition.mjs
var runAfterTransition = __webpack_require__(30921);
;// ./node_modules/react-aria/dist/private/interactions/textSelection.mjs




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


// Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
let $cbf007e418543821$var$state = 'default';
let $cbf007e418543821$var$savedUserSelect = '';
let $cbf007e418543821$var$modifiedElementMap = new WeakMap();
function $cbf007e418543821$export$16a4697467175487(target) {
    if ((0, platform/* isIOS */.un)() && (0, platform/* isWebKit */.Tc)()) {
        if ($cbf007e418543821$var$state === 'default') {
            const documentObject = (0, domHelpers/* getOwnerDocument */.TW)(target);
            $cbf007e418543821$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
            documentObject.documentElement.style.webkitUserSelect = 'none';
        }
        $cbf007e418543821$var$state = 'disabled';
    } else if (target instanceof HTMLElement || target instanceof SVGElement) {
        // If not iOS, store the target's original user-select and change to user-select: none
        // Ignore state since it doesn't apply for non iOS
        let property = 'userSelect' in target.style ? 'userSelect' : 'webkitUserSelect';
        $cbf007e418543821$var$modifiedElementMap.set(target, target.style[property]);
        target.style[property] = 'none';
    }
}
function $cbf007e418543821$export$b0d6fa1ab32e3295(target) {
    if ((0, platform/* isIOS */.un)() && (0, platform/* isWebKit */.Tc)()) {
        // If the state is already default, there's nothing to do.
        // If it is restoring, then there's no need to queue a second restore.
        if ($cbf007e418543821$var$state !== 'disabled') return;
        $cbf007e418543821$var$state = 'restoring';
        // There appears to be a delay on iOS where selection still might occur
        // after pointer up, so wait a bit before removing user-select.
        setTimeout(()=>{
            // Wait for any CSS transitions to complete so we don't recompute style
            // for the whole page in the middle of the animation and cause jank.
            (0, runAfterTransition/* runAfterTransition */.v)(()=>{
                // Avoid race conditions
                if ($cbf007e418543821$var$state === 'restoring') {
                    const documentObject = (0, domHelpers/* getOwnerDocument */.TW)(target);
                    if (documentObject.documentElement.style.webkitUserSelect === 'none') documentObject.documentElement.style.webkitUserSelect = $cbf007e418543821$var$savedUserSelect || '';
                    $cbf007e418543821$var$savedUserSelect = '';
                    $cbf007e418543821$var$state = 'default';
                }
            });
        }, 300);
    } else if (target instanceof HTMLElement || target instanceof SVGElement) // If not iOS, restore the target's original user-select if any
    // Ignore state since it doesn't apply for non iOS
    {
        if (target && $cbf007e418543821$var$modifiedElementMap.has(target)) {
            let targetOldUserSelect = $cbf007e418543821$var$modifiedElementMap.get(target);
            let property = 'userSelect' in target.style ? 'userSelect' : 'webkitUserSelect';
            if (target.style[property] === 'none') target.style[property] = targetOldUserSelect;
            if (target.getAttribute('style') === '') target.removeAttribute('style');
            $cbf007e418543821$var$modifiedElementMap.delete(target);
        }
    }
}



//# sourceMappingURL=textSelection.mjs.map

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/focusWithoutScrolling.mjs
var focusWithoutScrolling = __webpack_require__(5460);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
var DOMFunctions = __webpack_require__(62975);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/getNonce.mjs
var getNonce = __webpack_require__(52662);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/isVirtualEvent.mjs
var isVirtualEvent = __webpack_require__(78748);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/mergeProps.mjs
var mergeProps = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/openLink.mjs
var openLink = __webpack_require__(46271);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/interactions/context.mjs
var interactions_context = __webpack_require__(64874);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useEffectEvent.mjs
var useEffectEvent = __webpack_require__(83265);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useGlobalListeners.mjs
var useGlobalListeners = __webpack_require__(74876);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useSyncRef.mjs
var useSyncRef = __webpack_require__(80428);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria/dist/private/interactions/usePress.mjs


















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
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions

















function $d27d541f9569d26d$var$usePressResponderContext(props) {
    // Consume context from <PressResponder> and merge with props.
    let context = (0, react.useContext)((0, interactions_context/* PressResponderContext */.F));
    if (context) {
        // Prevent mergeProps from merging ref.
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let { register: register, ref: ref, ...contextProps } = context;
        props = (0, mergeProps/* mergeProps */.v)(contextProps, props);
        register();
    }
    (0, useSyncRef/* useSyncRef */.w)(context, props.ref);
    return props;
}
class $d27d541f9569d26d$var$PressEvent {
    #shouldStopPropagation;
    constructor(type, pointerType, originalEvent, state){
        this.#shouldStopPropagation = true;
        let currentTarget = state?.target ?? originalEvent.currentTarget;
        const rect = currentTarget?.getBoundingClientRect();
        let x, y = 0;
        let clientX, clientY = null;
        if (originalEvent.clientX != null && originalEvent.clientY != null) {
            clientX = originalEvent.clientX;
            clientY = originalEvent.clientY;
        }
        if (rect) {
            if (clientX != null && clientY != null) {
                x = clientX - rect.left;
                y = clientY - rect.top;
            } else {
                x = rect.width / 2;
                y = rect.height / 2;
            }
        }
        this.type = type;
        this.pointerType = pointerType;
        this.target = originalEvent.currentTarget;
        this.shiftKey = originalEvent.shiftKey;
        this.metaKey = originalEvent.metaKey;
        this.ctrlKey = originalEvent.ctrlKey;
        this.altKey = originalEvent.altKey;
        this.x = x;
        this.y = y;
        this.key = originalEvent.key;
    }
    continuePropagation() {
        this.#shouldStopPropagation = false;
    }
    get shouldStopPropagation() {
        return this.#shouldStopPropagation;
    }
}
const $d27d541f9569d26d$var$LINK_CLICKED = Symbol('linkClicked');
const $d27d541f9569d26d$var$STYLE_ID = 'react-aria-pressable-style';
const $d27d541f9569d26d$var$PRESSABLE_ATTRIBUTE = 'data-react-aria-pressable';
function $d27d541f9569d26d$export$45712eceda6fad21(props) {
    let { onPress: onPress, onPressChange: onPressChange, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressUp: onPressUp, onClick: onClick, isDisabled: isDisabled, isPressed: isPressedProp, preventFocusOnPress: preventFocusOnPress, shouldCancelOnPointerExit: shouldCancelOnPointerExit, allowTextSelectionOnPress: allowTextSelectionOnPress, ref: domRef, ...domProps } = $d27d541f9569d26d$var$usePressResponderContext(props);
    let [isPressed, setPressed] = (0, react.useState)(false);
    let ref = (0, react.useRef)({
        isPressed: false,
        ignoreEmulatedMouseEvents: false,
        didFirePressStart: false,
        isTriggeringEvent: false,
        activePointerId: null,
        target: null,
        isOverTarget: false,
        pointerType: null,
        disposables: []
    });
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = (0, useGlobalListeners/* useGlobalListeners */.A)();
    let triggerPressStart = (0, react.useCallback)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled || state.didFirePressStart) return false;
        let shouldStopPropagation = true;
        state.isTriggeringEvent = true;
        if (onPressStart) {
            let event = new $d27d541f9569d26d$var$PressEvent('pressstart', pointerType, originalEvent);
            onPressStart(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(true);
        state.isTriggeringEvent = false;
        state.didFirePressStart = true;
        setPressed(true);
        return shouldStopPropagation;
    }, [
        isDisabled,
        onPressStart,
        onPressChange
    ]);
    let triggerPressEnd = (0, react.useCallback)((originalEvent, pointerType, wasPressed = true)=>{
        let state = ref.current;
        if (!state.didFirePressStart) return false;
        state.didFirePressStart = false;
        state.isTriggeringEvent = true;
        let shouldStopPropagation = true;
        if (onPressEnd) {
            let event = new $d27d541f9569d26d$var$PressEvent('pressend', pointerType, originalEvent);
            onPressEnd(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(false);
        setPressed(false);
        if (onPress && wasPressed && !isDisabled) {
            let event = new $d27d541f9569d26d$var$PressEvent('press', pointerType, originalEvent);
            onPress(event);
            shouldStopPropagation &&= event.shouldStopPropagation;
        }
        state.isTriggeringEvent = false;
        return shouldStopPropagation;
    }, [
        isDisabled,
        onPressEnd,
        onPressChange,
        onPress
    ]);
    let triggerPressEndEvent = (0, useEffectEvent/* useEffectEvent */.J)(triggerPressEnd);
    let triggerPressUp = (0, react.useCallback)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled) return false;
        if (onPressUp) {
            state.isTriggeringEvent = true;
            let event = new $d27d541f9569d26d$var$PressEvent('pressup', pointerType, originalEvent);
            onPressUp(event);
            state.isTriggeringEvent = false;
            return event.shouldStopPropagation;
        }
        return true;
    }, [
        isDisabled,
        onPressUp
    ]);
    let triggerPressUpEvent = (0, useEffectEvent/* useEffectEvent */.J)(triggerPressUp);
    let cancel = (0, react.useCallback)((e)=>{
        let state = ref.current;
        if (state.isPressed && state.target) {
            if (state.didFirePressStart && state.pointerType != null) triggerPressEnd($d27d541f9569d26d$var$createEvent(state.target, e), state.pointerType, false);
            state.isPressed = false;
            state.isOverTarget = false;
            state.activePointerId = null;
            state.pointerType = null;
            removeAllGlobalListeners();
            if (!allowTextSelectionOnPress) (0, $cbf007e418543821$export$b0d6fa1ab32e3295)(state.target);
            for (let dispose of state.disposables)dispose();
            state.disposables = [];
        }
    }, [
        allowTextSelectionOnPress,
        removeAllGlobalListeners,
        triggerPressEnd
    ]);
    let cancelEvent = (0, useEffectEvent/* useEffectEvent */.J)(cancel);
    (0, react.useEffect)(()=>{
        if (isDisabled && ref.current.isPressed) cancelEvent({
            currentTarget: ref.current.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false,
            altKey: false
        });
    }, [
        isDisabled
    ]);
    let cancelOnPointerExit = (0, react.useCallback)((e)=>{
        if (shouldCancelOnPointerExit) cancel(e);
    }, [
        shouldCancelOnPointerExit,
        cancel
    ]);
    let triggerClick = (0, react.useCallback)((e)=>{
        if (isDisabled) return;
        onClick?.(e);
    }, [
        isDisabled,
        onClick
    ]);
    let triggerSyntheticClick = (0, react.useCallback)((e, target)=>{
        if (isDisabled) return;
        // Some third-party libraries pass in onClick instead of onPress.
        // Create a fake mouse event and trigger onClick as well.
        // This matches the browser's native activation behavior for certain elements (e.g. button).
        // https://html.spec.whatwg.org/#activation
        // https://html.spec.whatwg.org/#fire-a-synthetic-pointer-event
        if (onClick) {
            let event = new MouseEvent('click', e);
            (0, utils/* setEventTarget */.o1)(event, target);
            onClick((0, utils/* createSyntheticEvent */.eg)(event));
        }
    }, [
        isDisabled,
        onClick
    ]);
    let pressProps = (0, react.useMemo)(()=>{
        let state = ref.current;
        let pressProps = {
            onKeyDown (e) {
                if ($d27d541f9569d26d$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && (0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e))) {
                    if ($d27d541f9569d26d$var$shouldPreventDefaultKeyboard((0, DOMFunctions/* getEventTarget */.wt)(e), e.key)) e.preventDefault();
                    // If the event is repeating, it may have started on a different element
                    // after which focus moved to the current element. Ignore these events and
                    // only handle the first key down event.
                    let shouldStopPropagation = true;
                    if (!state.isPressed && !e.repeat) {
                        state.target = e.currentTarget;
                        state.isPressed = true;
                        state.pointerType = 'keyboard';
                        shouldStopPropagation = triggerPressStart(e, 'keyboard');
                    }
                    // Focus may move before the key up event, so register the event on the document
                    // instead of the same element where the key down event occurred. Make it capturing so that it will trigger
                    // before stopPropagation from useKeyboard on a child element may happen and thus we can still call triggerPress for the parent element.
                    let originalTarget = e.currentTarget;
                    let pressUp = (e)=>{
                        if ($d27d541f9569d26d$var$isValidKeyboardEvent(e, originalTarget) && !e.repeat && (0, DOMFunctions/* nodeContains */.sD)(originalTarget, (0, DOMFunctions/* getEventTarget */.wt)(e)) && state.target) triggerPressUpEvent($d27d541f9569d26d$var$createEvent(state.target, e), 'keyboard');
                    };
                    addGlobalListener((0, domHelpers/* getOwnerDocument */.TW)(e.currentTarget), 'keyup', (0, chain/* chain */.c)(pressUp, onKeyUp), true);
                    if (shouldStopPropagation) e.stopPropagation();
                    // Keep track of the keydown events that occur while the Meta (e.g. Command) key is held.
                    // macOS has a bug where keyup events are not fired while the Meta key is down.
                    // When the Meta key itself is released we will get an event for that, and we'll act as if
                    // all of these other keys were released as well.
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1393524
                    // https://bugs.webkit.org/show_bug.cgi?id=55291
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=1299553
                    if (e.metaKey && (0, platform/* isMac */.cX)()) state.metaKeyEvents?.set(e.key, e.nativeEvent);
                } else if (e.key === 'Meta') state.metaKeyEvents = new Map();
            },
            onClick (e) {
                if (e && !(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e))) return;
                if (e && e.button === 0 && !state.isTriggeringEvent && !(0, openLink/* openLink */.Fe).isOpening) {
                    let shouldStopPropagation = true;
                    if (isDisabled) e.preventDefault();
                    // If triggered from a screen reader or by using element.click(),
                    // trigger as if it were a keyboard click.
                    if (!state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === 'virtual' || (0, isVirtualEvent/* isVirtualClick */.Y)(e.nativeEvent))) {
                        let stopPressStart = triggerPressStart(e, 'virtual');
                        let stopPressUp = triggerPressUpEvent(e, 'virtual');
                        let stopPressEnd = triggerPressEndEvent(e, 'virtual');
                        triggerClick(e);
                        shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
                    } else if (state.isPressed && state.pointerType !== 'keyboard') {
                        let pointerType = state.pointerType || e.nativeEvent.pointerType || 'virtual';
                        let stopPressUp = triggerPressUpEvent($d27d541f9569d26d$var$createEvent(e.currentTarget, e), pointerType);
                        let stopPressEnd = triggerPressEndEvent($d27d541f9569d26d$var$createEvent(e.currentTarget, e), pointerType, true);
                        shouldStopPropagation = stopPressUp && stopPressEnd;
                        state.isOverTarget = false;
                        triggerClick(e);
                        // oxlint-disable-next-line react/react-compiler
                        cancelEvent(e);
                    }
                    state.ignoreEmulatedMouseEvents = false;
                    if (shouldStopPropagation) e.stopPropagation();
                }
            }
        };
        let onKeyUp = (e)=>{
            if (state.isPressed && state.target && $d27d541f9569d26d$var$isValidKeyboardEvent(e, state.target)) {
                if ($d27d541f9569d26d$var$shouldPreventDefaultKeyboard((0, DOMFunctions/* getEventTarget */.wt)(e), e.key)) e.preventDefault();
                let target = (0, DOMFunctions/* getEventTarget */.wt)(e);
                let wasPressed = (0, DOMFunctions/* nodeContains */.sD)(state.target, target);
                triggerPressEndEvent($d27d541f9569d26d$var$createEvent(state.target, e), 'keyboard', wasPressed);
                if (wasPressed) triggerSyntheticClick(e, state.target);
                removeAllGlobalListeners();
                // If a link was triggered with a key other than Enter, open the URL ourselves.
                // This means the link has a role override, and the default browser behavior
                // only applies when using the Enter key.
                if (e.key !== 'Enter' && $d27d541f9569d26d$var$isHTMLAnchorLink(state.target) && (0, DOMFunctions/* nodeContains */.sD)(state.target, target) && !e[$d27d541f9569d26d$var$LINK_CLICKED]) {
                    // Store a hidden property on the event so we only trigger link click once,
                    // even if there are multiple usePress instances attached to the element.
                    e[$d27d541f9569d26d$var$LINK_CLICKED] = true;
                    (0, openLink/* openLink */.Fe)(state.target, e, false);
                }
                state.isPressed = false;
                state.metaKeyEvents?.delete(e.key);
            } else if (e.key === 'Meta' && state.metaKeyEvents?.size) {
                // If we recorded keydown events that occurred while the Meta key was pressed,
                // and those haven't received keyup events already, fire keyup events ourselves.
                // See comment above for more info about the macOS bug causing this.
                let events = state.metaKeyEvents;
                state.metaKeyEvents = undefined;
                for (let event of events.values())state.target?.dispatchEvent(new KeyboardEvent('keyup', event));
            }
        };
        if (typeof PointerEvent !== 'undefined') {
            pressProps.onPointerDown = (e)=>{
                // Only handle left clicks, and ignore events that bubbled through portals.
                if (e.button !== 0 || !(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e))) return;
                // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
                // Ignore and let the onClick handler take care of it instead.
                // https://bugs.webkit.org/show_bug.cgi?id=222627
                // https://bugs.webkit.org/show_bug.cgi?id=223202
                if ((0, isVirtualEvent/* isVirtualPointerEvent */.P)(e.nativeEvent)) {
                    state.pointerType = 'virtual';
                    return;
                }
                state.pointerType = e.pointerType;
                let shouldStopPropagation = true;
                if (!state.isPressed) {
                    state.isPressed = true;
                    state.isOverTarget = true;
                    state.activePointerId = e.pointerId;
                    state.target = e.currentTarget;
                    if (!allowTextSelectionOnPress) (0, $cbf007e418543821$export$16a4697467175487)(state.target);
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                    // Release pointer capture so that touch interactions can leave the original target.
                    // This enables onPointerLeave and onPointerEnter to fire.
                    let target = (0, DOMFunctions/* getEventTarget */.wt)(e);
                    if ('releasePointerCapture' in target) {
                        if ('hasPointerCapture' in target) {
                            if (target.hasPointerCapture(e.pointerId)) target.releasePointerCapture(e.pointerId);
                        } else target.releasePointerCapture(e.pointerId);
                    }
                    addGlobalListener((0, domHelpers/* getOwnerDocument */.TW)(e.currentTarget), 'pointerup', onPointerUp, false);
                    addGlobalListener((0, domHelpers/* getOwnerDocument */.TW)(e.currentTarget), 'pointercancel', onPointerCancel, false);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseDown = (e)=>{
                if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e))) return;
                if (e.button === 0) {
                    if (preventFocusOnPress) {
                        let dispose = (0, utils/* preventFocus */.LE)(e.target);
                        if (dispose) state.disposables.push(dispose);
                    }
                    e.stopPropagation();
                }
            };
            pressProps.onPointerUp = (e)=>{
                // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
                if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e)) || state.pointerType === 'virtual') return;
                // Only handle left clicks. If isPressed is true, delay until onClick.
                if (e.button === 0 && !state.isPressed) triggerPressUpEvent(e, state.pointerType || e.pointerType);
            };
            pressProps.onPointerEnter = (e)=>{
                if (e.pointerId === state.activePointerId && state.target && !state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = true;
                    triggerPressStart($d27d541f9569d26d$var$createEvent(state.target, e), state.pointerType);
                }
            };
            pressProps.onPointerLeave = (e)=>{
                if (e.pointerId === state.activePointerId && state.target && state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = false;
                    triggerPressEndEvent($d27d541f9569d26d$var$createEvent(state.target, e), state.pointerType, false);
                    cancelOnPointerExit(e);
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
                    if ((0, DOMFunctions/* nodeContains */.sD)(state.target, (0, DOMFunctions/* getEventTarget */.wt)(e)) && state.pointerType != null) {
                        // Wait for onClick to fire onPress. This avoids browser issues when the DOM
                        // is mutated between onPointerUp and onClick, and is more compatible with third party libraries.
                        // https://github.com/adobe/react-spectrum/issues/1513
                        // https://issues.chromium.org/issues/40732224
                        // However, iOS and Android do not focus or fire onClick after a long press.
                        // We work around this by triggering a click ourselves after a timeout.
                        // This timeout is canceled during the click event in case the real one fires first.
                        // The timeout must be at least 32ms, because Safari on iOS delays the click event on
                        // non-form elements without certain ARIA roles (for hover emulation).
                        // https://github.com/WebKit/WebKit/blob/dccfae42bb29bd4bdef052e469f604a9387241c0/Source/WebKit/WebProcess/WebPage/ios/WebPageIOS.mm#L875-L892
                        let clicked = false;
                        let timeout = setTimeout(()=>{
                            if (state.isPressed && state.target instanceof HTMLElement) {
                                if (clicked) cancelEvent(e);
                                else {
                                    (0, focusWithoutScrolling/* focusWithoutScrolling */.e)(state.target);
                                    state.target.click();
                                }
                            }
                        }, 80);
                        // Use a capturing listener to track if a click occurred.
                        // If stopPropagation is called it may never reach our handler.
                        addGlobalListener(e.currentTarget, 'click', ()=>clicked = true, true);
                        state.disposables.push(()=>clearTimeout(timeout));
                    } else cancelEvent(e);
                    // Ignore subsequent onPointerLeave event before onClick on touch devices.
                    state.isOverTarget = false;
                }
            };
            let onPointerCancel = (e)=>{
                cancelEvent(e);
            };
            pressProps.onDragStart = (e)=>{
                if (!(0, DOMFunctions/* nodeContains */.sD)(e.currentTarget, (0, DOMFunctions/* getEventTarget */.wt)(e))) return;
                // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
                cancelEvent(e);
            };
        } else if (false) // removed by dead control flow
{}
        return pressProps;
    }, [
        addGlobalListener,
        isDisabled,
        preventFocusOnPress,
        removeAllGlobalListeners,
        allowTextSelectionOnPress,
        cancelOnPointerExit,
        triggerPressStart,
        triggerClick,
        triggerSyntheticClick
    ]);
    // Avoid onClick delay for double tap to zoom by default.
    (0, react.useEffect)(()=>{
        if (!domRef || "production" === 'test') return;
        const ownerDocument = (0, domHelpers/* getOwnerDocument */.TW)(domRef.current);
        if (!ownerDocument || !ownerDocument.head || ownerDocument.getElementById($d27d541f9569d26d$var$STYLE_ID)) return;
        const style = ownerDocument.createElement('style');
        style.id = $d27d541f9569d26d$var$STYLE_ID;
        let nonce = (0, getNonce/* getNonce */.m)(ownerDocument);
        if (nonce) style.nonce = nonce;
        // touchAction: 'manipulation' is supposed to be equivalent, but in
        // Safari it causes onPointerCancel not to fire on scroll.
        // https://bugs.webkit.org/show_bug.cgi?id=240917
        style.textContent = `
@layer {
  [${$d27d541f9569d26d$var$PRESSABLE_ATTRIBUTE}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim();
        ownerDocument.head.prepend(style);
    }, [
        domRef
    ]);
    // Remove user-select: none in case component unmounts immediately after pressStart
    (0, react.useEffect)(()=>{
        let state = ref.current;
        return ()=>{
            if (!allowTextSelectionOnPress) (0, $cbf007e418543821$export$b0d6fa1ab32e3295)(state.target ?? undefined);
            for (let dispose of state.disposables)dispose();
            state.disposables = [];
        };
    }, [
        allowTextSelectionOnPress
    ]);
    return {
        isPressed: isPressedProp || isPressed,
        // oxlint-disable-next-line react/react-compiler
        pressProps: (0, mergeProps/* mergeProps */.v)(domProps, pressProps, {
            [$d27d541f9569d26d$var$PRESSABLE_ATTRIBUTE]: true
        })
    };
}
function $d27d541f9569d26d$var$isHTMLAnchorLink(target) {
    return target.tagName === 'A' && target.hasAttribute('href');
}
function $d27d541f9569d26d$var$isValidKeyboardEvent(event, currentTarget) {
    const { key: key, code: code } = event;
    const element = currentTarget;
    const role = element.getAttribute('role');
    // Accessibility for keyboards. Space and Enter only.
    // "Spacebar" is for IE 11
    return (key === 'Enter' || key === ' ' || key === 'Spacebar' || code === 'Space') && !(element instanceof (0, domHelpers/* getOwnerWindow */.mD)(element).HTMLInputElement && !$d27d541f9569d26d$var$isValidInputKey(element, key) || element instanceof (0, domHelpers/* getOwnerWindow */.mD)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
    !((role === 'link' || !role && $d27d541f9569d26d$var$isHTMLAnchorLink(element)) && key !== 'Enter');
}
function $d27d541f9569d26d$var$getTouchFromEvent(event) {
    const { targetTouches: targetTouches } = event;
    if (targetTouches.length > 0) return targetTouches[0];
    return null;
}
function $d27d541f9569d26d$var$getTouchById(event, pointerId) {
    const changedTouches = event.changedTouches;
    for(let i = 0; i < changedTouches.length; i++){
        const touch = changedTouches[i];
        if (touch.identifier === pointerId) return touch;
    }
    return null;
}
function $d27d541f9569d26d$var$createTouchEvent(target, e) {
    let clientX = 0;
    let clientY = 0;
    if (e.targetTouches && e.targetTouches.length === 1) {
        clientX = e.targetTouches[0].clientX;
        clientY = e.targetTouches[0].clientY;
    }
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        clientX: clientX,
        clientY: clientY
    };
}
function $d27d541f9569d26d$var$createEvent(target, e) {
    let clientX = e.clientX;
    let clientY = e.clientY;
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        clientX: clientX,
        clientY: clientY,
        key: e.key
    };
}
function $d27d541f9569d26d$var$getPointClientRect(point) {
    let offsetX = 0;
    let offsetY = 0;
    if (point.width !== undefined) offsetX = point.width / 2;
    else if (point.radiusX !== undefined) offsetX = point.radiusX;
    if (point.height !== undefined) offsetY = point.height / 2;
    else if (point.radiusY !== undefined) offsetY = point.radiusY;
    return {
        top: point.clientY - offsetY,
        right: point.clientX + offsetX,
        bottom: point.clientY + offsetY,
        left: point.clientX - offsetX
    };
}
function $d27d541f9569d26d$var$areRectanglesOverlapping(a, b) {
    // check if they cannot overlap on x axis
    if (a.left > b.right || b.left > a.right) return false;
    // check if they cannot overlap on y axis
    if (a.top > b.bottom || b.top > a.bottom) return false;
    return true;
}
function $d27d541f9569d26d$var$isOverTarget(point, target) {
    let rect = target.getBoundingClientRect();
    let pointRect = $d27d541f9569d26d$var$getPointClientRect(point);
    return $d27d541f9569d26d$var$areRectanglesOverlapping(rect, pointRect);
}
function $d27d541f9569d26d$var$shouldPreventDefaultUp(target) {
    if (target instanceof HTMLInputElement) return false;
    if (target instanceof HTMLButtonElement) return target.type !== 'submit' && target.type !== 'reset';
    if ($d27d541f9569d26d$var$isHTMLAnchorLink(target)) return false;
    return true;
}
function $d27d541f9569d26d$var$shouldPreventDefaultKeyboard(target, key) {
    // Don't prevent the contextmenu shortcut on mac.
    if ((0, platform/* isMac */.cX)() && key === 'Enter') return false;
    if (target instanceof HTMLInputElement) {
        if (key === 'Enter' && (target.type === 'checkbox' || target.type === 'radio')) // Enter on a checkbox or radio should do an implicit form submission, but not toggle the input.
        return false;
        return !$d27d541f9569d26d$var$isValidInputKey(target, key);
    }
    return $d27d541f9569d26d$var$shouldPreventDefaultUp(target);
}
const $d27d541f9569d26d$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
function $d27d541f9569d26d$var$isValidInputKey(target, key) {
    // Only space should toggle checkboxes and radios, not enter.
    return target.type === 'checkbox' || target.type === 'radio' ? key === ' ' : $d27d541f9569d26d$var$nonTextInputTypes.has(target.type);
}



//# sourceMappingURL=usePress.mjs.map


/***/ },

/***/ 26044
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LE: () => (/* binding */ $a92dc41f639950be$export$cabe61c495ee3649),
/* harmony export */   eg: () => (/* binding */ $a92dc41f639950be$export$525bc4921d56d4a),
/* harmony export */   lR: () => (/* binding */ $a92dc41f639950be$export$fda7da73ab5d4c48),
/* harmony export */   o1: () => (/* binding */ $a92dc41f639950be$export$c2b7abe5d61ec696),
/* harmony export */   yB: () => (/* binding */ $a92dc41f639950be$export$715c682d09d639cc)
/* harmony export */ });
/* harmony import */ var _utils_focusWithoutScrolling_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62975);
/* harmony import */ var _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1612);
/* harmony import */ var _utils_isFocusable_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53685);
/* harmony import */ var _utils_useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74441);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96540);







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





function $a92dc41f639950be$export$525bc4921d56d4a(nativeEvent) {
    let event = nativeEvent;
    event.nativeEvent = nativeEvent;
    event.isDefaultPrevented = ()=>event.defaultPrevented;
    // cancelBubble is technically deprecated in the spec, but still supported in all browsers.
    event.isPropagationStopped = ()=>event.cancelBubble;
    event.persist = ()=>{};
    return event;
}
function $a92dc41f639950be$export$c2b7abe5d61ec696(event, target) {
    Object.defineProperty(event, 'target', {
        value: target
    });
    Object.defineProperty(event, 'currentTarget', {
        value: target
    });
}
function $a92dc41f639950be$export$715c682d09d639cc(onBlur) {
    let stateRef = (0, react__WEBPACK_IMPORTED_MODULE_5__.useRef)({
        isFocused: false,
        observer: null
    });
    // Clean up MutationObserver on unmount. See below.
    (0, _utils_useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useLayoutEffect */ .N)(()=>{
        const state = stateRef.current;
        return ()=>{
            if (state.observer) {
                state.observer.disconnect();
                state.observer = null;
            }
        };
    }, []);
    // This function is called during a React onFocus event.
    return (0, react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((e)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        let eventTarget = (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getEventTarget */ .wt)(e);
        if (eventTarget instanceof HTMLButtonElement || eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement || eventTarget instanceof HTMLSelectElement) {
            stateRef.current.isFocused = true;
            let target = eventTarget;
            let onBlurHandler = (e)=>{
                stateRef.current.isFocused = false;
                if (target.disabled) {
                    // For backward compatibility, dispatch a (fake) React synthetic event.
                    let event = $a92dc41f639950be$export$525bc4921d56d4a(e);
                    onBlur?.(event);
                }
                // We no longer need the MutationObserver once the target is blurred.
                if (stateRef.current.observer) {
                    stateRef.current.observer.disconnect();
                    stateRef.current.observer = null;
                }
            };
            target.addEventListener('focusout', onBlurHandler, {
                once: true
            });
            stateRef.current.observer = new MutationObserver(()=>{
                if (stateRef.current.isFocused && target.disabled) {
                    stateRef.current.observer?.disconnect();
                    let relatedTargetEl = target === (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getActiveElement */ .bq)() ? null : (0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getActiveElement */ .bq)();
                    target.dispatchEvent(new FocusEvent('blur', {
                        relatedTarget: relatedTargetEl
                    }));
                    target.dispatchEvent(new FocusEvent('focusout', {
                        bubbles: true,
                        relatedTarget: relatedTargetEl
                    }));
                }
            });
            stateRef.current.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    'disabled'
                ]
            });
        }
    }, [
        onBlur
    ]);
}
let $a92dc41f639950be$export$fda7da73ab5d4c48 = false;
function $a92dc41f639950be$export$cabe61c495ee3649(target) {
    // The browser will focus the nearest focusable ancestor of our target.
    while(target && !(0, _utils_isFocusable_mjs__WEBPACK_IMPORTED_MODULE_3__/* .isFocusable */ .t)(target, {
        skipVisibilityCheck: true
    }))target = target.parentElement;
    let ownerWindow = (0, _utils_domHelpers_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getOwnerWindow */ .mD)(target);
    let activeElement = ownerWindow.document.activeElement;
    if (!activeElement || activeElement === target) return;
    $a92dc41f639950be$export$fda7da73ab5d4c48 = true;
    let isRefocusing = false;
    let onBlur = (e)=>{
        if ((0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getEventTarget */ .wt)(e) === activeElement || isRefocusing) e.stopImmediatePropagation();
    };
    let onFocusOut = (e)=>{
        if ((0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getEventTarget */ .wt)(e) === activeElement || isRefocusing) {
            e.stopImmediatePropagation();
            // If there was no focusable ancestor, we don't expect a focus event.
            // Re-focus the original active element here.
            if (!target && !isRefocusing) {
                isRefocusing = true;
                (0, _utils_focusWithoutScrolling_mjs__WEBPACK_IMPORTED_MODULE_0__/* .focusWithoutScrolling */ .e)(activeElement);
                cleanup();
            }
        }
    };
    let onFocus = (e)=>{
        if ((0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getEventTarget */ .wt)(e) === target || isRefocusing) e.stopImmediatePropagation();
    };
    let onFocusIn = (e)=>{
        if ((0, _utils_shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_1__/* .getEventTarget */ .wt)(e) === target || isRefocusing) {
            e.stopImmediatePropagation();
            if (!isRefocusing) {
                isRefocusing = true;
                (0, _utils_focusWithoutScrolling_mjs__WEBPACK_IMPORTED_MODULE_0__/* .focusWithoutScrolling */ .e)(activeElement);
                cleanup();
            }
        }
    };
    ownerWindow.addEventListener('blur', onBlur, true);
    ownerWindow.addEventListener('focusout', onFocusOut, true);
    ownerWindow.addEventListener('focusin', onFocusIn, true);
    ownerWindow.addEventListener('focus', onFocus, true);
    let cleanup = ()=>{
        cancelAnimationFrame(raf);
        ownerWindow.removeEventListener('blur', onBlur, true);
        ownerWindow.removeEventListener('focusout', onFocusOut, true);
        ownerWindow.removeEventListener('focusin', onFocusIn, true);
        ownerWindow.removeEventListener('focus', onFocus, true);
        $a92dc41f639950be$export$fda7da73ab5d4c48 = false;
        isRefocusing = false;
    };
    let raf = requestAnimationFrame(cleanup);
    return cleanup;
}



//# sourceMappingURL=utils.mjs.map


/***/ },

/***/ 60741
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ $0beb20c9744a2065$export$8467354a121f1b9f)
/* harmony export */ });
/* harmony import */ var _utils_useId_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19633);
/* harmony import */ var _utils_useLabels_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72765);



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

function $0beb20c9744a2065$export$8467354a121f1b9f(props) {
    let { id: id, label: label, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel, labelElementType: labelElementType = 'label' } = props;
    id = (0, _utils_useId_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useId */ .Bi)(id);
    let labelId = (0, _utils_useId_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useId */ .Bi)();
    let labelProps = {};
    if (label) {
        ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === 'label' ? id : undefined
        };
    } else if (!ariaLabelledby && !ariaLabel && "production" !== 'production') // removed by dead control flow
{}
    let fieldProps = (0, _utils_useLabels_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useLabels */ .b)({
        id: id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps
    };
}



//# sourceMappingURL=useLabel.mjs.map


/***/ },

/***/ 35355
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iP: () => (/* binding */ $a46cf152bb926da5$export$a9b970dcc4ae71a9),
/* harmony export */   pA: () => (/* binding */ $a46cf152bb926da5$export$d10ae4f68404609a)
/* harmony export */ });
/* unused harmony export destroyAnnouncer */
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
 */ /* Inspired by https://github.com/AlmeroSteyn/react-aria-live */ const $a46cf152bb926da5$var$LIVEREGION_TIMEOUT_DELAY = 7000;
let $a46cf152bb926da5$var$liveAnnouncer = null;
function $a46cf152bb926da5$export$a9b970dcc4ae71a9(message, assertiveness = 'assertive', timeout = $a46cf152bb926da5$var$LIVEREGION_TIMEOUT_DELAY) {
    if (!$a46cf152bb926da5$var$liveAnnouncer) {
        $a46cf152bb926da5$var$liveAnnouncer = new $a46cf152bb926da5$var$LiveAnnouncer();
        // wait for the live announcer regions to be added to the dom, then announce
        // otherwise Safari won't announce the message if it's added too quickly
        // found most times less than 100ms were not consistent when announcing with Safari
        // IS_REACT_ACT_ENVIRONMENT is used by React 18. Previous versions checked for the `jest` global.
        // https://github.com/reactwg/react-18/discussions/102
        // if we're in a test environment, announce without waiting
        if (// @ts-ignore
        !(typeof IS_REACT_ACT_ENVIRONMENT === 'boolean' ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== 'undefined')) setTimeout(()=>{
            if ($a46cf152bb926da5$var$liveAnnouncer?.isAttached()) $a46cf152bb926da5$var$liveAnnouncer?.announce(message, assertiveness, timeout);
        }, 100);
        else $a46cf152bb926da5$var$liveAnnouncer.announce(message, assertiveness, timeout);
    } else $a46cf152bb926da5$var$liveAnnouncer.announce(message, assertiveness, timeout);
}
function $a46cf152bb926da5$export$d10ae4f68404609a(assertiveness) {
    if ($a46cf152bb926da5$var$liveAnnouncer) $a46cf152bb926da5$var$liveAnnouncer.clear(assertiveness);
}
function $a46cf152bb926da5$export$d8686216b8b81b2f() {
    if ($a46cf152bb926da5$var$liveAnnouncer) {
        $a46cf152bb926da5$var$liveAnnouncer.destroy();
        $a46cf152bb926da5$var$liveAnnouncer = null;
    }
}
// LiveAnnouncer is implemented using vanilla DOM, not React. That's because as of React 18
// ReactDOM.render is deprecated, and the replacement, ReactDOM.createRoot is moved into a
// subpath import `react-dom/client`. That makes it hard for us to support multiple React versions.
// As a global API, we can't use portals without introducing a breaking API change. LiveAnnouncer
// is simple enough to implement without React, so that's what we do here.
// See this discussion for more details: https://github.com/reactwg/react-18/discussions/125#discussioncomment-2382638
class $a46cf152bb926da5$var$LiveAnnouncer {
    constructor(){
        this.node = null;
        this.assertiveLog = null;
        this.politeLog = null;
        if (typeof document !== 'undefined') {
            this.node = document.createElement('div');
            this.node.dataset.liveAnnouncer = 'true';
            // copied from VisuallyHidden
            Object.assign(this.node.style, {
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
            });
            this.assertiveLog = this.createLog('assertive');
            this.node.appendChild(this.assertiveLog);
            this.politeLog = this.createLog('polite');
            this.node.appendChild(this.politeLog);
            document.body.prepend(this.node);
        }
    }
    isAttached() {
        return this.node?.isConnected;
    }
    createLog(ariaLive) {
        let node = document.createElement('div');
        node.setAttribute('role', 'log');
        node.setAttribute('aria-live', ariaLive);
        node.setAttribute('aria-relevant', 'additions');
        return node;
    }
    destroy() {
        if (!this.node) return;
        document.body.removeChild(this.node);
        this.node = null;
    }
    announce(message, assertiveness = 'assertive', timeout = $a46cf152bb926da5$var$LIVEREGION_TIMEOUT_DELAY) {
        if (!this.node) return;
        let node = document.createElement('div');
        if (typeof message === 'object') {
            // To read an aria-labelledby, the element must have an appropriate role, such as img.
            node.setAttribute('role', 'img');
            node.setAttribute('aria-labelledby', message['aria-labelledby']);
        } else node.textContent = message;
        if (assertiveness === 'assertive') this.assertiveLog?.appendChild(node);
        else this.politeLog?.appendChild(node);
        if (message !== '') setTimeout(()=>{
            node.remove();
        }, timeout);
    }
    clear(assertiveness) {
        if (!this.node) return;
        if ((!assertiveness || assertiveness === 'assertive') && this.assertiveLog) this.assertiveLog.innerHTML = '';
        if ((!assertiveness || assertiveness === 'polite') && this.politeLog) this.politeLog.innerHTML = '';
    }
}



//# sourceMappingURL=LiveAnnouncer.mjs.map


/***/ },

/***/ 51601
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cc: () => (/* binding */ $c7eafbbe1ea5834e$export$619500959fc48b26),
/* harmony export */   wR: () => (/* binding */ $c7eafbbe1ea5834e$export$535bd6ca7f90a273)
/* harmony export */ });
/* unused harmony export SSRProvider */
/* unused harmony import specifier */ var $bl59K$useContext;
/* unused harmony import specifier */ var $bl59K$useState;
/* unused harmony import specifier */ var $bl59K$useMemo;
/* unused harmony import specifier */ var $bl59K$useLayoutEffect;
/* unused harmony import specifier */ var $bl59K$react;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


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
 */ // We must avoid a circular dependency with @react-aria/utils, and this useLayoutEffect is
// guarded by a check that it only runs on the client side.
// eslint-disable-next-line rsp-rules/use-layout-effect-rule

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $c7eafbbe1ea5834e$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 10000000000)),
    current: 0
};
const $c7eafbbe1ea5834e$var$SSRContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext($c7eafbbe1ea5834e$var$defaultContext);
const $c7eafbbe1ea5834e$var$IsSSRContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext(false);
// This is only used in React < 18.
function $c7eafbbe1ea5834e$var$LegacySSRProvider(props) {
    let cur = (0, $bl59K$useContext)($c7eafbbe1ea5834e$var$SSRContext);
    let counter = $c7eafbbe1ea5834e$var$useCounter(cur === $c7eafbbe1ea5834e$var$defaultContext);
    let [isSSR, setIsSSR] = (0, $bl59K$useState)(true);
    let value = (0, $bl59K$useMemo)(()=>({
            // If this is the first SSRProvider, start with an empty string prefix, otherwise
            // append and increment the counter.
            prefix: cur === $c7eafbbe1ea5834e$var$defaultContext ? '' : `${cur.prefix}-${counter}`,
            current: 0
        }), [
        cur,
        counter
    ]);
    // If on the client, and the component was initially server rendered,
    // then schedule a layout effect to update the component after hydration.
    if (typeof document !== 'undefined') // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // oxlint-disable-next-line react/react-compiler, react-hooks/rules-of-hooks
    (0, $bl59K$useLayoutEffect)(()=>{
        // oxlint-disable-next-line react/react-compiler
        setIsSSR(false);
    }, []);
    return /*#__PURE__*/ (0, $bl59K$react).createElement($c7eafbbe1ea5834e$var$SSRContext.Provider, {
        value: value
    }, /*#__PURE__*/ (0, $bl59K$react).createElement($c7eafbbe1ea5834e$var$IsSSRContext.Provider, {
        value: isSSR
    }, props.children));
}
let $c7eafbbe1ea5834e$var$warnedAboutSSRProvider = false;
function $c7eafbbe1ea5834e$export$9f8ac96af4b1b2ae(props) {
    // oxlint-disable-next-line react/react-compiler
    if (typeof (0, $bl59K$react)['useId'] === 'function') {
        if (false) // removed by dead control flow
{}
        return /*#__PURE__*/ (0, $bl59K$react).createElement((0, $bl59K$react).Fragment, null, props.children);
    }
    return /*#__PURE__*/ (0, $bl59K$react).createElement($c7eafbbe1ea5834e$var$LegacySSRProvider, props);
}
let $c7eafbbe1ea5834e$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let $c7eafbbe1ea5834e$var$componentIds = new WeakMap();
function $c7eafbbe1ea5834e$var$useCounter(isDisabled = false) {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($c7eafbbe1ea5834e$var$SSRContext);
    let ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // eslint-disable-next-line rsp-rules/pure-render
    // oxlint-disable-next-line react/react-compiler, rsp-rules/pure-render
    if (ref.current === null && !isDisabled) {
        // In strict mode, React renders components twice, and the ref will be reset to null on the second render.
        // This means our id counter will be incremented twice instead of once. This is a problem because on the
        // server, components are only rendered once and so ids generated on the server won't match the client.
        // In React 18, useId was introduced to solve this, but it is not available in older versions. So to solve this
        // we need to use some React internals to access the underlying Fiber instance, which is stable between renders.
        // This is exposed as ReactCurrentOwner in development, which is all we need since StrictMode only runs in development.
        // To ensure that we only increment the global counter once, we store the starting id for this component in
        // a weak map associated with the Fiber. On the second render, we reset the global counter to this value.
        // Since React runs the second render immediately after the first, this is safe.
        let currentOwner = // @ts-ignore
        (0, react__WEBPACK_IMPORTED_MODULE_0__).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
        if (currentOwner) {
            let prevComponentValue = $c7eafbbe1ea5834e$var$componentIds.get(currentOwner);
            if (prevComponentValue == null) // On the first render, and first call to useId, store the id and state in our weak map.
            $c7eafbbe1ea5834e$var$componentIds.set(currentOwner, {
                id: ctx.current,
                state: currentOwner.memoizedState
            });
            else if (currentOwner.memoizedState !== prevComponentValue.state) {
                // On the second render, the memoizedState gets reset by React.
                // Reset the counter, and remove from the weak map so we don't
                // do this for subsequent useId calls.
                // oxlint-disable-next-line react/react-compiler
                ctx.current = prevComponentValue.id;
                $c7eafbbe1ea5834e$var$componentIds.delete(currentOwner);
            }
        }
        // eslint-disable-next-line rsp-rules/pure-render
        // oxlint-disable-next-line react/react-compiler, rsp-rules/pure-render
        ref.current = ++ctx.current;
    }
    // eslint-disable-next-line rsp-rules/pure-render
    // oxlint-disable-next-line react/react-compiler, rsp-rules/pure-render
    return ref.current;
}
function $c7eafbbe1ea5834e$var$useLegacySSRSafeId(defaultId) {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($c7eafbbe1ea5834e$var$SSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider,
    // provide a warning to hint to the developer to add one.
    if (ctx === $c7eafbbe1ea5834e$var$defaultContext && !$c7eafbbe1ea5834e$var$canUseDOM && "production" !== 'production') // removed by dead control flow
{}
    let counter = $c7eafbbe1ea5834e$var$useCounter(!!defaultId);
    let prefix = ctx === $c7eafbbe1ea5834e$var$defaultContext && "production" === 'test' ? 0 : `react-aria${ctx.prefix}`;
    return defaultId || `${prefix}-${counter}`;
}
function $c7eafbbe1ea5834e$var$useModernSSRSafeId(defaultId) {
    let id = (0, react__WEBPACK_IMPORTED_MODULE_0__).useId();
    let [didSSR] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)($c7eafbbe1ea5834e$export$535bd6ca7f90a273());
    let prefix = didSSR || "production" === 'test' ? 'react-aria' : `react-aria${$c7eafbbe1ea5834e$var$defaultContext.prefix}`;
    return defaultId || `${prefix}-${id}`;
}
const $c7eafbbe1ea5834e$export$619500959fc48b26 = typeof (0, react__WEBPACK_IMPORTED_MODULE_0__)['useId'] === 'function' ? $c7eafbbe1ea5834e$var$useModernSSRSafeId : $c7eafbbe1ea5834e$var$useLegacySSRSafeId;
function $c7eafbbe1ea5834e$var$getSnapshot() {
    return false;
}
function $c7eafbbe1ea5834e$var$getServerSnapshot() {
    return true;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function $c7eafbbe1ea5834e$var$subscribe(onStoreChange) {
    // noop
    return ()=>{};
}
function $c7eafbbe1ea5834e$export$535bd6ca7f90a273() {
    // In React 18, we can use useSyncExternalStore to detect if we're server rendering or hydrating.
    // oxlint-disable-next-line react/react-compiler
    if (typeof (0, react__WEBPACK_IMPORTED_MODULE_0__)['useSyncExternalStore'] === 'function') // oxlint-disable-next-line react/react-compiler
    return (0, react__WEBPACK_IMPORTED_MODULE_0__)['useSyncExternalStore']($c7eafbbe1ea5834e$var$subscribe, $c7eafbbe1ea5834e$var$getSnapshot, $c7eafbbe1ea5834e$var$getServerSnapshot);
    // oxlint-disable-next-line react/react-compiler, react-hooks/rules-of-hooks
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($c7eafbbe1ea5834e$var$IsSSRContext);
}



//# sourceMappingURL=SSRProvider.mjs.map


/***/ },

/***/ 96558
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ $a4e76a5424781910$export$e08e3b67e392101e)
/* harmony export */ });
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
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ function $a4e76a5424781910$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}



//# sourceMappingURL=chain.mjs.map


/***/ },

/***/ 1612
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ng: () => (/* binding */ $d447af545b77c9f1$export$af51f0f06c0f328a),
/* harmony export */   TW: () => (/* binding */ $d447af545b77c9f1$export$b204af158042fbac),
/* harmony export */   W2: () => (/* binding */ $d447af545b77c9f1$export$f531f92e2a15358f),
/* harmony export */   mD: () => (/* binding */ $d447af545b77c9f1$export$f21a1ffae260145a)
/* harmony export */ });
/* unused harmony exports isDocument, isNode */
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
 */ const $d447af545b77c9f1$export$b204af158042fbac = (target)=>{
    if ($d447af545b77c9f1$var$isWindow(target)) return target.document;
    if ($d447af545b77c9f1$export$62858bae88b53fd0(target)) return target;
    // @ts-expect-error Ensure safe access in SSR environments.
    return target?.ownerDocument ?? (typeof document !== 'undefined' ? document : undefined);
};
const $d447af545b77c9f1$export$f21a1ffae260145a = (target)=>{
    let ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(target);
    // @ts-expect-error Ensure safe access in SSR environments.
    return ownerDocument?.defaultView ?? (typeof window !== 'undefined' ? window : undefined);
};
function $d447af545b77c9f1$export$8ee0fc9ee280b4ee(value) {
    return value !== null && typeof value === 'object' && 'nodeType' in value && typeof value.nodeType === 'number';
}
/**
 * Type guard that checks if a value is a Window. Uses window self reference checks to
 * distinguish Window from other values.
 */ function $d447af545b77c9f1$var$isWindow(value) {
    return typeof value === 'object' && value != null && 'window' in value && value.window === value;
}
function $d447af545b77c9f1$export$62858bae88b53fd0(value) {
    return $d447af545b77c9f1$export$8ee0fc9ee280b4ee(value) && value.nodeType === 9;
}
function $d447af545b77c9f1$export$af51f0f06c0f328a(value) {
    // 11 = DOCUMENT_FRAGMENT_NODE
    return $d447af545b77c9f1$export$8ee0fc9ee280b4ee(value) && value.nodeType === 11 && 'host' in value;
}
function $d447af545b77c9f1$export$f531f92e2a15358f(target, event, listener, options) {
    if (listener == null || target == null) return ()=>{};
    let eventTargets = Array.isArray(target) ? target : [
        target
    ];
    for (let eventTarget of eventTargets)eventTarget.addEventListener(event, listener, options);
    return ()=>{
        for (let eventTarget of eventTargets)eventTarget.removeEventListener(event, listener, options);
    };
}



//# sourceMappingURL=domHelpers.mjs.map


/***/ },

/***/ 46683
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $8e9d2fae0ecb9001$export$457c3d6518dd4c6f)
/* harmony export */ });
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
 */ const $8e9d2fae0ecb9001$var$DOMPropNames = new Set([
    'id'
]);
const $8e9d2fae0ecb9001$var$labelablePropNames = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details'
]);
// See LinkDOMProps in dom.d.ts.
const $8e9d2fae0ecb9001$var$linkPropNames = new Set([
    'href',
    'hrefLang',
    'target',
    'rel',
    'download',
    'ping',
    'referrerPolicy'
]);
const $8e9d2fae0ecb9001$var$globalAttrs = new Set([
    'dir',
    'lang',
    'hidden',
    'inert',
    'translate'
]);
const $8e9d2fae0ecb9001$var$globalEvents = new Set([
    'onClick',
    'onAuxClick',
    'onContextMenu',
    'onDoubleClick',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onPointerDown',
    'onPointerMove',
    'onPointerUp',
    'onPointerCancel',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerOver',
    'onPointerOut',
    'onGotPointerCapture',
    'onLostPointerCapture',
    'onScroll',
    'onWheel',
    'onAnimationStart',
    'onAnimationEnd',
    'onAnimationIteration',
    'onTransitionCancel',
    'onTransitionEnd',
    'onTransitionRun',
    'onTransitionStart'
]);
const $8e9d2fae0ecb9001$var$propRe = /^(data-.*)$/;
function $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, opts = {}) {
    let { labelable: labelable, isLink: isLink, global: global, events: events = global, propNames: propNames } = opts;
    let filteredProps = {};
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($8e9d2fae0ecb9001$var$DOMPropNames.has(prop) || labelable && $8e9d2fae0ecb9001$var$labelablePropNames.has(prop) || isLink && $8e9d2fae0ecb9001$var$linkPropNames.has(prop) || global && $8e9d2fae0ecb9001$var$globalAttrs.has(prop) || events && ($8e9d2fae0ecb9001$var$globalEvents.has(prop) || prop.endsWith('Capture') && $8e9d2fae0ecb9001$var$globalEvents.has(prop.slice(0, -7))) || propNames?.has(prop) || $8e9d2fae0ecb9001$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}



//# sourceMappingURL=filterDOMProps.mjs.map


/***/ },

/***/ 5460
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ $1969ac565cfec8d0$export$de79e2c695e052f3)
/* harmony export */ });
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
 */ function $1969ac565cfec8d0$export$de79e2c695e052f3(element) {
    if ($1969ac565cfec8d0$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $1969ac565cfec8d0$var$getScrollableElements(element);
        element.focus();
        $1969ac565cfec8d0$var$restoreScrollPosition(scrollableElements);
    }
}
let $1969ac565cfec8d0$var$supportsPreventScrollCached = null;
function $1969ac565cfec8d0$var$supportsPreventScroll() {
    if ($1969ac565cfec8d0$var$supportsPreventScrollCached == null) {
        $1969ac565cfec8d0$var$supportsPreventScrollCached = false;
        try {
            let focusElem = document.createElement('div');
            focusElem.focus({
                get preventScroll () {
                    $1969ac565cfec8d0$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch  {
        // Ignore
        }
    }
    return $1969ac565cfec8d0$var$supportsPreventScrollCached;
}
function $1969ac565cfec8d0$var$getScrollableElements(element) {
    let parent = element.parentNode;
    let scrollableElements = [];
    let rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
            element: parent,
            scrollTop: parent.scrollTop,
            scrollLeft: parent.scrollLeft
        });
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
}
function $1969ac565cfec8d0$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element, scrollTop: scrollTop, scrollLeft: scrollLeft } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}



//# sourceMappingURL=focusWithoutScrolling.mjs.map


/***/ },

/***/ 52662
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ $2b2d34ff061957fb$export$2b85b721e524d74b)
/* harmony export */ });
/* unused harmony export resetNonceCache */
/* harmony import */ var _domHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1612);


/*
 * Copyright 2026 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $2b2d34ff061957fb$var$getWebpackNonce(doc) {
    let ownerWindow = doc?.defaultView;
    return ownerWindow?.__webpack_nonce__ || globalThis['__webpack_nonce__'] || undefined;
}
let $2b2d34ff061957fb$var$nonceCache = new WeakMap();
function $2b2d34ff061957fb$export$88b319273f3705b4() {
    $2b2d34ff061957fb$var$nonceCache = new WeakMap();
}
function $2b2d34ff061957fb$export$2b85b721e524d74b(doc) {
    let d = doc ?? (typeof document !== 'undefined' ? document : undefined);
    if (!d) return $2b2d34ff061957fb$var$getWebpackNonce(d);
    if ($2b2d34ff061957fb$var$nonceCache.has(d)) return $2b2d34ff061957fb$var$nonceCache.get(d);
    let meta = d.querySelector('meta[property="csp-nonce"]');
    let nonce = meta && meta instanceof (0, _domHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getOwnerWindow */ .mD)(meta).HTMLMetaElement && (meta.nonce || meta.content) || $2b2d34ff061957fb$var$getWebpackNonce(d) || undefined;
    if (nonce !== undefined) $2b2d34ff061957fb$var$nonceCache.set(d, nonce);
    return nonce;
}



//# sourceMappingURL=getNonce.mjs.map


/***/ },

/***/ 36105
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ $ae77152785188400$export$e989c0fffaa6b27a)
/* harmony export */ });
/* harmony import */ var _domHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1612);


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $ae77152785188400$var$supportsCheckVisibility = typeof Element !== 'undefined' && 'checkVisibility' in Element.prototype;
function $ae77152785188400$var$isStyleVisible(element) {
    const windowObject = (0, _domHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getOwnerWindow */ .mD)(element);
    if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement)) return false;
    let { display: display, visibility: visibility } = element.style;
    let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';
    if (isVisible) {
        const { getComputedStyle: getComputedStyle } = (0, _domHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getOwnerWindow */ .mD)(element);
        let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
        isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
    }
    return isVisible;
}
function $ae77152785188400$var$isAttributeVisible(element, childElement) {
    return !element.hasAttribute('hidden') && // Ignore HiddenSelect when tree walking.
    !element.hasAttribute('data-react-aria-prevent-focus') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}
function $ae77152785188400$export$e989c0fffaa6b27a(element, childElement) {
    if ($ae77152785188400$var$supportsCheckVisibility) return element.checkVisibility({
        visibilityProperty: true
    }) && !element.closest('[data-react-aria-prevent-focus]');
    return element.nodeName !== '#comment' && $ae77152785188400$var$isStyleVisible(element) && $ae77152785188400$var$isAttributeVisible(element, childElement) && (!element.parentElement || $ae77152785188400$export$e989c0fffaa6b27a(element.parentElement, element));
}



//# sourceMappingURL=isElementVisible.mjs.map


/***/ },

/***/ 53685
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ $3b8b240c1bf84ab9$export$bebd5a1431fec25d),
/* harmony export */   t: () => (/* binding */ $3b8b240c1bf84ab9$export$4c063cf1350e6fed)
/* harmony export */ });
/* harmony import */ var _domHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1612);
/* harmony import */ var _isElementVisible_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36105);



/*
 * Copyright 2025 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $3b8b240c1bf84ab9$var$focusableElements = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable^="false"])',
    'permission'
];
const $3b8b240c1bf84ab9$var$FOCUSABLE_ELEMENT_SELECTOR = $3b8b240c1bf84ab9$var$focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
$3b8b240c1bf84ab9$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $3b8b240c1bf84ab9$var$TABBABLE_ELEMENT_SELECTOR = $3b8b240c1bf84ab9$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $3b8b240c1bf84ab9$export$4c063cf1350e6fed(element, options) {
    return element.matches($3b8b240c1bf84ab9$var$FOCUSABLE_ELEMENT_SELECTOR) && !$3b8b240c1bf84ab9$var$isInert(element) && (options?.skipVisibilityCheck || (0, _isElementVisible_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isElementVisible */ .J)(element));
}
function $3b8b240c1bf84ab9$export$bebd5a1431fec25d(element) {
    return element.matches($3b8b240c1bf84ab9$var$TABBABLE_ELEMENT_SELECTOR) && (0, _isElementVisible_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isElementVisible */ .J)(element) && !$3b8b240c1bf84ab9$var$isInert(element);
}
function $3b8b240c1bf84ab9$var$isInert(element) {
    let node = element;
    while(node != null){
        if (node instanceof (0, _domHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getOwnerWindow */ .mD)(node).HTMLElement && node.inert) return true;
        node = node.parentElement;
    }
    return false;
}



//# sourceMappingURL=isFocusable.mjs.map


/***/ },

/***/ 78748
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ $b5c62b033c25b96d$export$29bf1b5f2c56cf63),
/* harmony export */   Y: () => (/* binding */ $b5c62b033c25b96d$export$60278871457622de)
/* harmony export */ });
/* harmony import */ var _platform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87082);


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
function $b5c62b033c25b96d$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.pointerType === '' && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if ((0, _platform_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isAndroid */ .m0)() && event.pointerType) return event.type === 'click' && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function $b5c62b033c25b96d$export$29bf1b5f2c56cf63(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return !(0, _platform_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isAndroid */ .m0)() && event.width === 0 && event.height === 0 || (0, _platform_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isAndroid */ .m0)() && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse';
}



//# sourceMappingURL=isVirtualEvent.mjs.map


/***/ },

/***/ 47425
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ $bbaa08b3cd72f041$export$9d1611c77c2fe928)
/* harmony export */ });
/* harmony import */ var _chain_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96558);
/* harmony import */ var _useId_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19633);
/* harmony import */ var _mergeRefs_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24211);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34164);





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



function $bbaa08b3cd72f041$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = (0, _chain_mjs__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .c)(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = (0, clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(a, b);
            else if (key === 'id' && a && b) result.id = (0, _useId_mjs__WEBPACK_IMPORTED_MODULE_1__/* .mergeIds */ .Tw)(a, b);
            else if (key === 'ref' && a && b) result.ref = (0, _mergeRefs_mjs__WEBPACK_IMPORTED_MODULE_2__/* .mergeRefs */ .P)(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}



//# sourceMappingURL=mergeProps.mjs.map


/***/ },

/***/ 24211
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ $4064df0d6f9620e1$export$c9058316764c140e)
/* harmony export */ });
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
 */ function $4064df0d6f9620e1$export$c9058316764c140e(...refs) {
    if (refs.length === 1 && refs[0]) return refs[0];
    return (value)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = $4064df0d6f9620e1$var$setRef(ref, value);
            hasCleanup ||= typeof cleanup == 'function';
            return cleanup;
        });
        if (hasCleanup) return ()=>{
            cleanups.forEach((cleanup, i)=>{
                if (typeof cleanup === 'function') cleanup();
                else $4064df0d6f9620e1$var$setRef(refs[i], null);
            });
        };
    };
}
function $4064df0d6f9620e1$var$setRef(ref, value) {
    if (typeof ref === 'function') return ref(value);
    else if (ref != null) ref.current = value;
}



//# sourceMappingURL=mergeRefs.mjs.map


/***/ },

/***/ 46271
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fe: () => (/* binding */ $caaf0dd3060ed57c$export$95185d699e05d4d7),
/* harmony export */   HI: () => (/* binding */ $caaf0dd3060ed57c$export$bdc77b0c0a3a85d6),
/* harmony export */   PJ: () => (/* binding */ $caaf0dd3060ed57c$export$13aea1a3cb5e3f1f),
/* harmony export */   _h: () => (/* binding */ $caaf0dd3060ed57c$export$7e924b3091a3bd18),
/* harmony export */   pg: () => (/* binding */ $caaf0dd3060ed57c$export$323e4fc2fa4753fb),
/* harmony export */   rd: () => (/* binding */ $caaf0dd3060ed57c$export$9a302a45f65d0572)
/* harmony export */ });
/* unused harmony exports shouldClientNavigate, getSyntheticLinkProps */
/* harmony import */ var _focusWithoutScrolling_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var _platform_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87082);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);




/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $caaf0dd3060ed57c$var$RouterContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_2__.createContext)({
    isNative: true,
    open: $caaf0dd3060ed57c$var$openSyntheticLink,
    useHref: (href)=>href
});
function $caaf0dd3060ed57c$export$323e4fc2fa4753fb(props) {
    let { children: children, navigate: navigate, useHref: useHref } = props;
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
            isNative: false,
            open: (target, modifiers, href, routerOptions)=>{
                $caaf0dd3060ed57c$var$getSyntheticLink(target, (link)=>{
                    if ($caaf0dd3060ed57c$export$efa8c9099e530235(link, modifiers)) navigate(href, routerOptions);
                    else $caaf0dd3060ed57c$export$95185d699e05d4d7(link, modifiers);
                });
            },
            useHref: useHref || ((href)=>href)
        }), [
        navigate,
        useHref
    ]);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_2__).createElement($caaf0dd3060ed57c$var$RouterContext.Provider, {
        value: ctx
    }, children);
}
function $caaf0dd3060ed57c$export$9a302a45f65d0572() {
    return (0, react__WEBPACK_IMPORTED_MODULE_2__.useContext)($caaf0dd3060ed57c$var$RouterContext);
}
function $caaf0dd3060ed57c$export$efa8c9099e530235(link, modifiers) {
    // Use getAttribute here instead of link.target. Firefox will default link.target to "_parent" when inside an iframe.
    let target = link.getAttribute('target');
    return (!target || target === '_self') && link.origin === location.origin && !link.hasAttribute('download') && !modifiers.metaKey && // open in new tab (mac)
    !modifiers.ctrlKey && // open in new tab (windows)
    !modifiers.altKey && // download
    !modifiers.shiftKey;
}
function $caaf0dd3060ed57c$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
    let { metaKey: metaKey, ctrlKey: ctrlKey, altKey: altKey, shiftKey: shiftKey } = modifiers;
    // Firefox does not recognize keyboard events as a user action by default, and the popup blocker
    // will prevent links with target="_blank" from opening. However, it does allow the event if the
    // Command/Control key is held, which opens the link in a background tab. This seems like the best we can do.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=257870 and https://bugzilla.mozilla.org/show_bug.cgi?id=746640.
    if (!(0, _platform_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isWebKit */ .Tc)() && (0, _platform_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isFirefox */ .gm)() && window.event?.type?.startsWith('key') && target.target === '_blank') {
        if ((0, _platform_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isMac */ .cX)()) metaKey = true;
        else ctrlKey = true;
    }
    // WebKit does not support firing click events with modifier keys, but does support keyboard events.
    // https://github.com/WebKit/WebKit/blob/c03d0ac6e6db178f90923a0a63080b5ca210d25f/Source/WebCore/html/HTMLAnchorElement.cpp#L184
    let event = (0, _platform_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isWebKit */ .Tc)() && (0, _platform_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isMac */ .cX)() && !(0, _platform_mjs__WEBPACK_IMPORTED_MODULE_1__/* .isIPad */ .bh)() && "production" !== 'test' ? new KeyboardEvent('keydown', {
        keyIdentifier: 'Enter',
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey
    }) : new MouseEvent('click', {
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey,
        detail: 1,
        bubbles: true,
        cancelable: true
    });
    $caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = setOpening;
    (0, _focusWithoutScrolling_mjs__WEBPACK_IMPORTED_MODULE_0__/* .focusWithoutScrolling */ .e)(target);
    target.dispatchEvent(event);
    $caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = false;
}
// https://github.com/parcel-bundler/parcel/issues/8724
$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = false;
function $caaf0dd3060ed57c$var$getSyntheticLink(target, open) {
    if (target instanceof HTMLAnchorElement) open(target);
    else if (target.hasAttribute('data-href')) {
        let link = document.createElement('a');
        link.href = target.getAttribute('data-href');
        if (target.hasAttribute('data-target')) link.target = target.getAttribute('data-target');
        if (target.hasAttribute('data-rel')) link.rel = target.getAttribute('data-rel');
        if (target.hasAttribute('data-download')) link.download = target.getAttribute('data-download');
        if (target.hasAttribute('data-ping')) link.ping = target.getAttribute('data-ping');
        if (target.hasAttribute('data-referrer-policy')) link.referrerPolicy = target.getAttribute('data-referrer-policy');
        target.appendChild(link);
        open(link);
        target.removeChild(link);
    }
}
function $caaf0dd3060ed57c$var$openSyntheticLink(target, modifiers) {
    $caaf0dd3060ed57c$var$getSyntheticLink(target, (link)=>$caaf0dd3060ed57c$export$95185d699e05d4d7(link, modifiers));
}
function $caaf0dd3060ed57c$export$bdc77b0c0a3a85d6(props) {
    let router = $caaf0dd3060ed57c$export$9a302a45f65d0572();
    // oxlint-disable-next-line react/react-compiler
    const href = router.useHref(props.href ?? '');
    return {
        'data-href': props.href ? href : undefined,
        'data-target': props.target,
        'data-rel': props.rel,
        'data-download': props.download,
        'data-ping': props.ping,
        'data-referrer-policy': props.referrerPolicy
    };
}
function $caaf0dd3060ed57c$export$51437d503373d223(props) {
    return {
        'data-href': props.href,
        'data-target': props.target,
        'data-rel': props.rel,
        'data-download': props.download,
        'data-ping': props.ping,
        'data-referrer-policy': props.referrerPolicy
    };
}
function $caaf0dd3060ed57c$export$7e924b3091a3bd18(props) {
    let router = $caaf0dd3060ed57c$export$9a302a45f65d0572();
    // oxlint-disable-next-line react/react-compiler
    const href = router.useHref(props?.href ?? '');
    let linkProps = {};
    if (props) {
        for (let key of [
            'href',
            'target',
            'rel',
            'download',
            'ping',
            'referrerPolicy'
        ])if (key in props && props[key] !== undefined) linkProps[key] = key === 'href' ? href : props[key];
    }
    return linkProps;
}
function $caaf0dd3060ed57c$export$13aea1a3cb5e3f1f(e, router, href, routerOptions) {
    // If a custom router is provided, prevent default and forward if this link should client navigate.
    if (!router.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
    !e.isDefaultPrevented() && $caaf0dd3060ed57c$export$efa8c9099e530235(e.currentTarget, e) && href) {
        e.preventDefault();
        router.open(e.currentTarget, e, href, routerOptions);
    }
}



//# sourceMappingURL=openLink.mjs.map


/***/ },

/***/ 87082
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H8: () => (/* binding */ $2add3ce32c6007eb$export$6446a186d09e379e),
/* harmony export */   Tc: () => (/* binding */ $2add3ce32c6007eb$export$78551043582a6a98),
/* harmony export */   bh: () => (/* binding */ $2add3ce32c6007eb$export$7bef049ce92e4224),
/* harmony export */   cX: () => (/* binding */ $2add3ce32c6007eb$export$9ac100e40613ea10),
/* harmony export */   gm: () => (/* binding */ $2add3ce32c6007eb$export$b7d78993b74f766d),
/* harmony export */   lg: () => (/* binding */ $2add3ce32c6007eb$export$e1865c3bedcd822b),
/* harmony export */   m0: () => (/* binding */ $2add3ce32c6007eb$export$a11b0059900ceec8),
/* harmony export */   un: () => (/* binding */ $2add3ce32c6007eb$export$fedb369cb70207f1)
/* harmony export */ });
/* unused harmony exports isIPhone, isSafari */
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
 */ function $2add3ce32c6007eb$var$testUserAgent(re) {
    if (typeof window === 'undefined' || window.navigator == null) return false;
    let brands = window.navigator['userAgentData']?.brands;
    return Array.isArray(brands) && brands.some((brand)=>re.test(brand.brand)) || re.test(window.navigator.userAgent);
}
function $2add3ce32c6007eb$var$testPlatform(re) {
    return typeof window !== 'undefined' && window.navigator != null ? re.test(window.navigator['userAgentData']?.platform || window.navigator.platform) : false;
}
function $2add3ce32c6007eb$var$cached(fn) {
    if (false) // removed by dead control flow
{}
    let res = null;
    return ()=>{
        if (res == null) res = fn();
        return res;
    };
}
const $2add3ce32c6007eb$export$9ac100e40613ea10 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testPlatform(/^Mac/i);
});
const $2add3ce32c6007eb$export$186c6964ca17d99 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testPlatform(/^iPhone/i);
});
const $2add3ce32c6007eb$export$7bef049ce92e4224 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $2add3ce32c6007eb$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
const $2add3ce32c6007eb$export$fedb369cb70207f1 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$export$186c6964ca17d99() || $2add3ce32c6007eb$export$7bef049ce92e4224();
});
const $2add3ce32c6007eb$export$e1865c3bedcd822b = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$export$9ac100e40613ea10() || $2add3ce32c6007eb$export$fedb369cb70207f1();
});
const $2add3ce32c6007eb$export$78551043582a6a98 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testUserAgent(/AppleWebKit/i) && ($2add3ce32c6007eb$export$fedb369cb70207f1() || !$2add3ce32c6007eb$export$6446a186d09e379e());
});
const $2add3ce32c6007eb$export$95df08bae54cb4df = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$export$78551043582a6a98() && !$2add3ce32c6007eb$export$6446a186d09e379e() && !$2add3ce32c6007eb$export$b7d78993b74f766d();
});
const $2add3ce32c6007eb$export$6446a186d09e379e = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testUserAgent(/Chrome|CriOS|CrMo/i);
});
const $2add3ce32c6007eb$export$a11b0059900ceec8 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testUserAgent(/Android/i);
});
const $2add3ce32c6007eb$export$b7d78993b74f766d = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testUserAgent(/(Firefox|FxiOS)/i);
});



//# sourceMappingURL=platform.mjs.map


/***/ },

/***/ 30921
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ $081cb5757e08788e$export$24490316f764c430)
/* harmony export */ });
/* harmony import */ var _shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62975);


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
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.

let $081cb5757e08788e$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $081cb5757e08788e$var$transitionCallbacks = new Set();
function $081cb5757e08788e$var$setupGlobalEvents() {
    if (typeof window === 'undefined') return;
    function isTransitionEvent(event) {
        return 'propertyName' in event;
    }
    let onTransitionStart = (e)=>{
        let eventTarget = (0, _shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getEventTarget */ .wt)(e);
        if (!isTransitionEvent(e) || !eventTarget) return;
        // Add the transitioning property to the list for this element.
        let transitions = $081cb5757e08788e$var$transitionsByElement.get(eventTarget);
        if (!transitions) {
            transitions = new Set();
            $081cb5757e08788e$var$transitionsByElement.set(eventTarget, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            eventTarget.addEventListener('transitioncancel', onTransitionEnd, {
                once: true
            });
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        let eventTarget = (0, _shadowdom_DOMFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getEventTarget */ .wt)(e);
        if (!isTransitionEvent(e) || !eventTarget) return;
        // Remove property from list of transitioning properties.
        let properties = $081cb5757e08788e$var$transitionsByElement.get(eventTarget);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            eventTarget.removeEventListener('transitioncancel', onTransitionEnd);
            $081cb5757e08788e$var$transitionsByElement.delete(eventTarget);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($081cb5757e08788e$var$transitionsByElement.size === 0) {
            for (let cb of $081cb5757e08788e$var$transitionCallbacks)cb();
            $081cb5757e08788e$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener('transitionrun', onTransitionStart);
    document.body.addEventListener('transitionend', onTransitionEnd);
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $081cb5757e08788e$var$setupGlobalEvents();
    else document.addEventListener('DOMContentLoaded', $081cb5757e08788e$var$setupGlobalEvents);
}
/**
 * Cleans up any elements that are no longer in the document.
 * This is necessary because we can't rely on transitionend events to fire
 * for elements that are removed from the document while transitioning.
 */ function $081cb5757e08788e$var$cleanupDetachedElements() {
    for (const [eventTarget] of $081cb5757e08788e$var$transitionsByElement)// Similar to `eventTarget instanceof Element && !eventTarget.isConnected`, but avoids
    // the explicit instanceof check, since it may be different in different contexts.
    if ('isConnected' in eventTarget && !eventTarget.isConnected) $081cb5757e08788e$var$transitionsByElement.delete(eventTarget);
}
function $081cb5757e08788e$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        $081cb5757e08788e$var$cleanupDetachedElements();
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($081cb5757e08788e$var$transitionsByElement.size === 0) fn();
        else $081cb5757e08788e$var$transitionCallbacks.add(fn);
    });
}



//# sourceMappingURL=runAfterTransition.mjs.map


/***/ },

/***/ 62975
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ae: () => (/* binding */ $23f2114a1b82827e$export$b4f377a2b6254582),
/* harmony export */   bq: () => (/* binding */ $23f2114a1b82827e$export$cd4e5573fbe2b576),
/* harmony export */   sD: () => (/* binding */ $23f2114a1b82827e$export$4282f70798064fe0),
/* harmony export */   vK: () => (/* binding */ $23f2114a1b82827e$export$da7af4355d792141),
/* harmony export */   wt: () => (/* binding */ $23f2114a1b82827e$export$e58f029f0fbfdb29)
/* harmony export */ });
/* harmony import */ var _domHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1612);
/* harmony import */ var react_stately_private_flags_flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92589);



// Source: https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/DOMFunctions.ts#L16
/* eslint-disable rsp-rules/no-non-shadow-contains, rsp-rules/safe-event-target */ 

function $23f2114a1b82827e$export$4282f70798064fe0(node, otherNode) {
    if (!(0, react_stately_private_flags_flags__WEBPACK_IMPORTED_MODULE_1__/* .shadowDOM */ .Nf)()) return otherNode && node ? node.contains(otherNode) : false;
    if (!node || !otherNode) return false;
    let currentNode = otherNode;
    while(currentNode !== null){
        if (currentNode === node) return true;
        if (typeof currentNode.assignedElements !== 'function' && currentNode.assignedSlot?.parentNode) // Element is slotted
        currentNode = currentNode.assignedSlot.parentNode;
        else if ((0, _domHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isShadowRoot */ .Ng)(currentNode)) // Element is in shadow root
        currentNode = currentNode.host;
        else currentNode = currentNode.parentNode;
    }
    return false;
}
const $23f2114a1b82827e$export$cd4e5573fbe2b576 = (doc = document)=>{
    if (!(0, react_stately_private_flags_flags__WEBPACK_IMPORTED_MODULE_1__/* .shadowDOM */ .Nf)()) return doc.activeElement;
    let activeElement = doc.activeElement;
    while(activeElement && 'shadowRoot' in activeElement && activeElement.shadowRoot?.activeElement)activeElement = activeElement.shadowRoot.activeElement;
    return activeElement;
};
function $23f2114a1b82827e$export$e58f029f0fbfdb29(event) {
    if ((0, react_stately_private_flags_flags__WEBPACK_IMPORTED_MODULE_1__/* .shadowDOM */ .Nf)() && event.target instanceof Element && event.target.shadowRoot) {
        if ('composedPath' in event) return event.composedPath()[0] ?? null;
        else if ('composedPath' in event.nativeEvent) return event.nativeEvent.composedPath()[0] ?? null;
    }
    return event.target;
}
function $23f2114a1b82827e$export$da7af4355d792141(from, to) {
    // If `to` is coming from a ref, its type technically allows `null`.
    // In practice, this function will generally be called from within a useEffect.
    // If the ref has not resolved by that point, then a coding error has been made.
    // Better to return an empty array than `[window]`, which may appear to work
    // in the light DOM, but fail in the shadow DOM.
    if (to === null) return [];
    to = to ?? (0, _domHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getOwnerWindow */ .mD)(from);
    let targets = [
        to
    ];
    if (!(0, react_stately_private_flags_flags__WEBPACK_IMPORTED_MODULE_1__/* .shadowDOM */ .Nf)() || !from || from === to) return targets;
    // The root `to` itself lives in. The event already reaches `to` once
    // it is inside this root, so we must NOT collect this root or anything above
    // it — only the shadow roots strictly between `refNode` and `to`.
    // `window` has no getRootNode; its boundary is the document, which the walk
    // reaches naturally (the document is not a ShadowRoot, so the loop exits).
    let toRoot = 'getRootNode' in to ? to.getRootNode() : null;
    let current = from.getRootNode() ?? null;
    while((0, _domHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isShadowRoot */ .Ng)(current) && current !== toRoot){
        // order shouldn't matter
        targets.push(current);
        current = current.host.getRootNode();
    }
    return targets;
}
function $23f2114a1b82827e$export$b4f377a2b6254582(node) {
    if (!node) return false;
    // Get the active element within the node's parent shadow root (or the document). Can return null.
    let root = node.getRootNode();
    let ownerWindow = (0, _domHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getOwnerWindow */ .mD)(node);
    if (!(root instanceof ownerWindow.Document || root instanceof ownerWindow.ShadowRoot)) return false;
    let activeElement = root.activeElement;
    // Check if the active element is within this node. These nodes are within the same shadow root.
    return activeElement != null && node.contains(activeElement);
}



//# sourceMappingURL=DOMFunctions.mjs.map


/***/ },

/***/ 83265
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ $fe16bffc7a557bf0$export$7f54fc3180508a52)
/* harmony export */ });
/* harmony import */ var _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74441);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);



/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

// Use the earliest effect type possible. useInsertionEffect runs during the mutation phase,
// before all layout effects, but is available only in React 18 and later.
const $fe16bffc7a557bf0$var$useEarlyEffect = (0, react__WEBPACK_IMPORTED_MODULE_1__)['useInsertionEffect'] ?? (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLayoutEffect */ .N);
function $fe16bffc7a557bf0$export$7f54fc3180508a52(fn) {
    const ref = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    $fe16bffc7a557bf0$var$useEarlyEffect(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((...args)=>{
        const f = ref.current;
        return f?.(...args);
    }, []);
}



//# sourceMappingURL=useEffectEvent.mjs.map


/***/ },

/***/ 74876
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ $48a7d519b337145d$export$4eaf04e54aa8eed6)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


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
function $48a7d519b337145d$export$4eaf04e54aa8eed6() {
    let globalListeners = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());
    let addGlobalListener = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = options?.once ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, fn, options);
    }, []);
    let removeGlobalListener = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((eventTarget, type, listener, options)=>{
        let fn = globalListeners.current.get(listener)?.fn || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}



//# sourceMappingURL=useGlobalListeners.mjs.map


/***/ },

/***/ 19633
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Tw: () => (/* binding */ $390e54f620492c70$export$cd8c9cb68f842629),
  Bi: () => (/* binding */ $390e54f620492c70$export$f680877a34711e37),
  X1: () => (/* binding */ $390e54f620492c70$export$b4cc09c592e8fdb8)
});

// UNUSED EXPORTS: idsUpdaterMap

// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(74441);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/ssr/SSRProvider.mjs
var SSRProvider = __webpack_require__(51601);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/react-aria/dist/private/utils/useValueEffect.mjs



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

function $1a716630a9e3a599$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = (0, react.useState)(defaultValue);
    // Keep an up to date copy of value in a ref so we can access the current value in the generator.
    // This allows us to maintain a stable queue function.
    let currValue = (0, react.useRef)(value);
    let effect = (0, react.useRef)(null);
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = (0, react.useRef)(()=>{
        if (!effect.current) return;
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (currValue.current === newValue.value) nextRef.current();
        else setValue(newValue.value);
    });
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        currValue.current = value;
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef.current();
    });
    let queue = (0, react.useCallback)((fn)=>{
        effect.current = fn(currValue.current);
        nextRef.current();
    }, [
        nextRef
    ]);
    return [
        value,
        queue
    ];
}



//# sourceMappingURL=useValueEffect.mjs.map

;// ./node_modules/react-aria/dist/private/utils/useId.mjs





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



// copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let $390e54f620492c70$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let $390e54f620492c70$export$d41a04c74483c6ef = new Map();
// This allows us to clean up the idsUpdaterMap when the id is no longer used.
// Map is a strong reference, so unused ids wouldn't be cleaned up otherwise.
// This can happen in suspended components where mount/unmount is not called.
let $390e54f620492c70$var$registry;
if (typeof FinalizationRegistry !== 'undefined') $390e54f620492c70$var$registry = new FinalizationRegistry((heldValue)=>{
    $390e54f620492c70$export$d41a04c74483c6ef.delete(heldValue);
});
let $390e54f620492c70$var$registeredIds = new WeakMap();
function $390e54f620492c70$export$f680877a34711e37(defaultId) {
    let [value, setValue] = (0, react.useState)(defaultId);
    let nextId = (0, react.useRef)(null);
    let res = (0, SSRProvider/* useSSRSafeId */.Cc)(value);
    let cleanupRef = (0, react.useRef)(null);
    // These are intentionally disabled the compiler, these functions just read the identity
    // of the ref, not the value inside current.
    // oxlint-disable-next-line react/react-compiler
    let registeredId = $390e54f620492c70$var$registeredIds.get(cleanupRef);
    if ($390e54f620492c70$var$registry && registeredId !== res) {
        if (registeredId != null) // oxlint-disable-next-line react/react-compiler
        $390e54f620492c70$var$registry.unregister(cleanupRef);
        // oxlint-disable-next-line react/react-compiler
        $390e54f620492c70$var$registry.register(cleanupRef, res, cleanupRef);
        // oxlint-disable-next-line react/react-compiler
        $390e54f620492c70$var$registeredIds.set(cleanupRef, res);
    }
    if ($390e54f620492c70$var$canUseDOM) {
        const cacheIdRef = $390e54f620492c70$export$d41a04c74483c6ef.get(res);
        // oxlint-disable-next-line react/react-compiler
        if (cacheIdRef && !cacheIdRef.includes(nextId)) // oxlint-disable-next-line react/react-compiler
        cacheIdRef.push(nextId);
        else // oxlint-disable-next-line react/react-compiler
        $390e54f620492c70$export$d41a04c74483c6ef.set(res, [
            nextId
        ]);
    }
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        let r = res;
        return ()=>{
            // In Suspense, the cleanup function may be not called
            // when it is though, also remove it from the finalization registry.
            if ($390e54f620492c70$var$registry) {
                $390e54f620492c70$var$registry.unregister(cleanupRef);
                $390e54f620492c70$var$registeredIds.delete(cleanupRef);
            }
            $390e54f620492c70$export$d41a04c74483c6ef.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is always cleaned up.
    // eslint-disable-next-line
    (0, react.useEffect)(()=>{
        let newId = nextId.current;
        if (newId) setValue(newId);
        return ()=>{
            if (newId) nextId.current = null;
        };
    });
    return res;
}
function $390e54f620492c70$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdsA = $390e54f620492c70$export$d41a04c74483c6ef.get(idA);
    if (setIdsA) {
        setIdsA.forEach((ref)=>ref.current = idB);
        return idB;
    }
    let setIdsB = $390e54f620492c70$export$d41a04c74483c6ef.get(idB);
    if (setIdsB) {
        setIdsB.forEach((ref)=>ref.current = idA);
        return idA;
    }
    return idB;
}
function $390e54f620492c70$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $390e54f620492c70$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = (0, $1a716630a9e3a599$export$14d238f342723f25)(id);
    let updateId = (0, react.useCallback)(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    // oxlint-disable-next-line react/react-compiler
    }, [
        id,
        setResolvedId
    ]);
    (0, useLayoutEffect/* useLayoutEffect */.N)(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}



//# sourceMappingURL=useId.mjs.map


/***/ },

/***/ 72765
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ $e8ac3c3f5d4bae7f$export$d6875122194c7b44)
/* harmony export */ });
/* harmony import */ var _useId_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19633);


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
function $e8ac3c3f5d4bae7f$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id, 'aria-label': label, 'aria-labelledby': labelledBy } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = (0, _useId_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useId */ .Bi)(id);
    if (labelledBy && label) {
        let ids = new Set([
            id,
            ...labelledBy.trim().split(/\s+/)
        ]);
        labelledBy = [
            ...ids
        ].join(' ');
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' ');
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        'aria-label': label,
        'aria-labelledby': labelledBy
    };
}



//# sourceMappingURL=useLabels.mjs.map


/***/ },

/***/ 74441
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ $c4867b2f328c2698$export$e5c5a5f917a5871c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


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
const $c4867b2f328c2698$export$e5c5a5f917a5871c = typeof document !== 'undefined' ? (0, react__WEBPACK_IMPORTED_MODULE_0__).useLayoutEffect : ()=>{};



//# sourceMappingURL=useLayoutEffect.mjs.map


/***/ },

/***/ 80716
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ $03e8ab2d84d7657a$export$4338b53315abf666)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $03e8ab2d84d7657a$export$4338b53315abf666(ref) {
    const objRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const cleanupRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
    const refEffect = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((instance)=>{
        if (typeof ref === 'function') {
            const refCallback = ref;
            const refCleanup = refCallback(instance);
            return ()=>{
                if (typeof refCleanup === 'function') refCleanup();
                else refCallback(null);
            };
        } else if (ref) {
            // oxlint-disable-next-line react/react-compiler
            ref.current = instance;
            return ()=>{
                ref.current = null;
            };
        }
    }, [
        ref
    ]);
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            get current () {
                return objRef.current;
            },
            set current (value){
                objRef.current = value;
                if (cleanupRef.current) {
                    cleanupRef.current();
                    cleanupRef.current = undefined;
                }
                if (value != null) cleanupRef.current = refEffect(value);
            }
        }), // oxlint-disable-next-line react/react-compiler
    [
        refEffect
    ]);
}



//# sourceMappingURL=useObjectRef.mjs.map


/***/ },

/***/ 80428
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ $b7115c395c64f7b5$export$4debdb1a3f0fa79e)
/* harmony export */ });
/* harmony import */ var _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74441);


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
function $b7115c395c64f7b5$export$4debdb1a3f0fa79e(context, ref) {
    // oxlint-disable-next-line react/react-compiler
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLayoutEffect */ .N)(()=>{
        if (context && context.ref && ref) {
            // oxlint-disable-next-line react/react-compiler
            context.ref.current = ref.current;
            return ()=>{
                if (context.ref) // oxlint-disable-next-line react-hooks/exhaustive-deps
                context.ref.current = null;
            };
        }
    });
}



//# sourceMappingURL=useSyncRef.mjs.map


/***/ },

/***/ 81013
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ $ea3928288112382f$export$a966af930f325cab),
/* harmony export */   s: () => (/* binding */ $ea3928288112382f$export$439d29a4e110a164)
/* harmony export */ });
/* harmony import */ var _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47425);
/* harmony import */ var _interactions_useFocusWithin_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75655);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);




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


const $ea3928288112382f$var$styles = {
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
function $ea3928288112382f$export$a966af930f325cab(props = {}) {
    let { style: style, isFocusable: isFocusable } = props;
    let [isFocused, setFocused] = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    let { focusWithinProps: focusWithinProps } = (0, _interactions_useFocusWithin_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useFocusWithin */ .R)({
        isDisabled: !isFocusable,
        onFocusWithinChange: (val)=>setFocused(val)
    });
    // If focused, don't hide the element.
    let combinedStyles = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (isFocused) // oxlint-disable-next-line react/react-compiler
        return style;
        else if (style) return {
            ...$ea3928288112382f$var$styles,
            ...style
        };
        else return $ea3928288112382f$var$styles;
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
function $ea3928288112382f$export$439d29a4e110a164(props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children: children, elementType: Element = 'div', isFocusable: isFocusable, style: style, ...otherProps } = props;
    let { visuallyHiddenProps: visuallyHiddenProps } = $ea3928288112382f$export$a966af930f325cab(props);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_2__).createElement(Element, (0, _utils_mergeProps_mjs__WEBPACK_IMPORTED_MODULE_0__/* .mergeProps */ .v)(otherProps, visuallyHiddenProps), children);
}



//# sourceMappingURL=VisuallyHidden.mjs.map


/***/ },

/***/ 92589
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nf: () => (/* binding */ $6a20a7989e6c817a$export$98658e8c59125e6a)
/* harmony export */ });
/* unused harmony exports enableTableNestedRows, tableNestedRows, enableShadowDOM */
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $6a20a7989e6c817a$var$_tableNestedRows = false;
let $6a20a7989e6c817a$var$_shadowDOM = false;
function $6a20a7989e6c817a$export$d9d8a0f82de49530() {
    $6a20a7989e6c817a$var$_tableNestedRows = true;
}
function $6a20a7989e6c817a$export$1b00cb14a96194e6() {
    return $6a20a7989e6c817a$var$_tableNestedRows;
}
function $6a20a7989e6c817a$export$12b151d9882e9985() {
    $6a20a7989e6c817a$var$_shadowDOM = true;
}
function $6a20a7989e6c817a$export$98658e8c59125e6a() {
    return $6a20a7989e6c817a$var$_shadowDOM;
}



//# sourceMappingURL=flags.mjs.map


/***/ },

/***/ 95677
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   qE: () => (/* binding */ $240e9101ba2842f5$export$7d15b64cf5a3a4c4)
/* harmony export */ });
/* unused harmony exports roundToStepPrecision, snapValueToStep, toFixedNumber */
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
 */ /**
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest
 * valid step.
 */ function $240e9101ba2842f5$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $240e9101ba2842f5$export$e1a7b8e69ef6c52f(value, step) {
    let roundedValue = value;
    let precision = 0;
    let stepString = step.toString();
    // Handle negative exponents in exponential notation (e.g., "1e-7" → precision 8)
    let eIndex = stepString.toLowerCase().indexOf('e-');
    if (eIndex > 0) precision = Math.abs(Math.floor(Math.log10(Math.abs(step)))) + eIndex;
    else {
        let pointIndex = stepString.indexOf('.');
        if (pointIndex >= 0) precision = stepString.length - pointIndex;
    }
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        roundedValue = Math.round(roundedValue * pow) / pow;
    }
    return roundedValue;
}
function $240e9101ba2842f5$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $240e9101ba2842f5$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($240e9101ba2842f5$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($240e9101ba2842f5$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $240e9101ba2842f5$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $240e9101ba2842f5$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
}



//# sourceMappingURL=number.mjs.map


/***/ },

/***/ 32240
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ $3e6197669829fe11$export$40bfa8c7b0832715)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


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
// Use the earliest effect possible to reset the ref below.
const $3e6197669829fe11$var$useEarlyEffect = typeof document !== 'undefined' ? (0, react__WEBPACK_IMPORTED_MODULE_0__)['useInsertionEffect'] ?? (0, react__WEBPACK_IMPORTED_MODULE_0__).useLayoutEffect : ()=>{};
function $3e6197669829fe11$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    // Store the value in both state and a ref. The state value will only be used when uncontrolled.
    // The ref is used to track the most current value, which is passed to the function setState callback.
    let [stateValue, setStateValue] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || defaultValue);
    let valueRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(stateValue);
    let isControlledRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled && "production" !== 'production') // removed by dead control flow
{}
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    // After each render, update the ref to the current value.
    // This ensures that the setState callback argument is reset.
    // Note: the effect should not have any dependencies so that controlled values always reset.
    let currentValue = isControlled ? value : stateValue;
    $3e6197669829fe11$var$useEarlyEffect(()=>{
        valueRef.current = currentValue;
    });
    let [, forceUpdate] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(()=>({}), {});
    let setValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value, ...args)=>{
        // @ts-ignore - TS doesn't know that T cannot be a function.
        let newValue = typeof value === 'function' ? value(valueRef.current) : value;
        if (!Object.is(valueRef.current, newValue)) {
            // Update the ref so that the next setState callback has the most recent value.
            valueRef.current = newValue;
            setStateValue(newValue);
            // Always trigger a re-render, even when controlled, so that the layout effect above runs to reset the value.
            forceUpdate();
            // Trigger onChange. Note that if setState is called multiple times in a single event,
            // onChange will be called for each one instead of only once.
            onChange?.(newValue, ...args);
        }
    }, [
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
}



//# sourceMappingURL=useControlledState.mjs.map


/***/ }

}]);