"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4105],{

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

/***/ 24514:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ $62d8ded9296f3872$export$cfa2225e87938781)
/* harmony export */ });
/* harmony import */ var _isScrollable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47912);


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
function $62d8ded9296f3872$export$cfa2225e87938781(node, checkForOverflow) {
    let scrollableNode = node;
    if ((0, _isScrollable_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isScrollable */ .o)(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
    while(scrollableNode && !(0, _isScrollable_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isScrollable */ .o)(scrollableNode, checkForOverflow))scrollableNode = scrollableNode.parentElement;
    return scrollableNode || document.scrollingElement || document.documentElement;
}



//# sourceMappingURL=getScrollParent.module.js.map


/***/ }),

/***/ 47912:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ $cc38e7bd3fc7b213$export$2bb74740c4e19def)
/* harmony export */ });
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
 */ function $cc38e7bd3fc7b213$export$2bb74740c4e19def(node, checkForOverflow) {
    let style = window.getComputedStyle(node);
    let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
    if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
    return isScrollable;
}



//# sourceMappingURL=isScrollable.module.js.map


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

/***/ 57936:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ $5cb03073d3f54797$export$a8a3e93435678ff9)
/* harmony export */ });
/* harmony import */ var _RSPContexts_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32373);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5933);
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


function $5cb03073d3f54797$var$Heading(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, (0, _RSPContexts_mjs__WEBPACK_IMPORTED_MODULE_2__/* .HeadingContext */ .A3));
    let { children: children, level: level = 3, className: className, ...domProps } = props;
    let Element = `h${level}`;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement(Element, {
        ...domProps,
        ref: ref,
        className: className !== null && className !== void 0 ? className : 'react-aria-Heading'
    }, children);
}
const $5cb03073d3f54797$export$a8a3e93435678ff9 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)($5cb03073d3f54797$var$Heading);



//# sourceMappingURL=Heading.module.js.map


/***/ }),

/***/ 4477:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  aF: () => (/* binding */ $f3f84453ead64de5$export$2b77a92f1a5ad772),
  mH: () => (/* binding */ $f3f84453ead64de5$export$8948f78d83984c69)
});

// UNUSED EXPORTS: ModalContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var SSRProvider = __webpack_require__(60415);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/ariaHideOutside.mjs
var ariaHideOutside = __webpack_require__(2269);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/useOverlay.mjs + 1 modules
var useOverlay = __webpack_require__(90757);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/Overlay.mjs + 1 modules
var Overlay = __webpack_require__(75963);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/usePreventScroll.mjs
var usePreventScroll = __webpack_require__(20445);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@react-aria/overlays/dist/useModalOverlay.mjs







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





function $8ac8429251c45e4b$export$dbc0f175b25fb0fb(props, state, ref) {
    let { overlayProps: overlayProps, underlayProps: underlayProps } = (0, useOverlay/* useOverlay */.e)({
        ...props,
        isOpen: state.isOpen,
        onClose: state.close
    }, ref);
    (0, usePreventScroll/* usePreventScroll */.H)({
        isDisabled: !state.isOpen
    });
    (0, Overlay/* useOverlayFocusContain */.Se)();
    (0, react.useEffect)(()=>{
        if (state.isOpen) return (0, ariaHideOutside/* ariaHideOutside */.h)([
            ref.current
        ]);
    }, [
        state.isOpen,
        ref
    ]);
    return {
        modalProps: (0, mergeProps/* mergeProps */.v)(overlayProps),
        underlayProps: underlayProps
    };
}



//# sourceMappingURL=useModalOverlay.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/DismissButton.mjs + 35 modules
var DismissButton = __webpack_require__(91821);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useObjectRef.mjs
var useObjectRef = __webpack_require__(83908);
;// ./node_modules/@react-aria/utils/dist/useViewportSize.mjs



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

// @ts-ignore
let $5df64b3807dc15ee$var$visualViewport = typeof document !== 'undefined' && window.visualViewport;
function $5df64b3807dc15ee$export$d699905dd57c73ca() {
    let isSSR = (0, SSRProvider/* useIsSSR */.wR)();
    let [size, setSize] = (0, react.useState)(()=>isSSR ? {
            width: 0,
            height: 0
        } : $5df64b3807dc15ee$var$getViewportSize());
    (0, react.useEffect)(()=>{
        // Use visualViewport api to track available height even on iOS virtual keyboard opening
        let onResize = ()=>{
            setSize((size)=>{
                let newSize = $5df64b3807dc15ee$var$getViewportSize();
                if (newSize.width === size.width && newSize.height === size.height) return size;
                return newSize;
            });
        };
        if (!$5df64b3807dc15ee$var$visualViewport) window.addEventListener('resize', onResize);
        else $5df64b3807dc15ee$var$visualViewport.addEventListener('resize', onResize);
        return ()=>{
            if (!$5df64b3807dc15ee$var$visualViewport) window.removeEventListener('resize', onResize);
            else $5df64b3807dc15ee$var$visualViewport.removeEventListener('resize', onResize);
        };
    }, []);
    return size;
}
function $5df64b3807dc15ee$var$getViewportSize() {
    return {
        width: $5df64b3807dc15ee$var$visualViewport && ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.width) || window.innerWidth,
        height: $5df64b3807dc15ee$var$visualViewport && ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.height) || window.innerHeight
    };
}



//# sourceMappingURL=useViewportSize.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeRefs.mjs
var mergeRefs = __webpack_require__(17099);
// EXTERNAL MODULE: ./node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs
var useOverlayTriggerState = __webpack_require__(71732);
;// ./node_modules/react-aria-components/dist/Modal.mjs







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





const $f3f84453ead64de5$export$ab57792b9b6974a6 = /*#__PURE__*/ (0, react.createContext)(null);
const $f3f84453ead64de5$var$InternalModalContext = /*#__PURE__*/ (0, react.createContext)(null);
function $f3f84453ead64de5$var$Modal(props, ref) {
    let ctx = (0, react.useContext)($f3f84453ead64de5$var$InternalModalContext);
    if (ctx) return /*#__PURE__*/ (0, react).createElement($f3f84453ead64de5$var$ModalContent, {
        ...props,
        modalRef: ref
    }, props.children);
    let { isDismissable: isDismissable, isKeyboardDismissDisabled: isKeyboardDismissDisabled, isOpen: isOpen, defaultOpen: defaultOpen, onOpenChange: onOpenChange, children: children, isEntering: isEntering, isExiting: isExiting, UNSTABLE_portalContainer: UNSTABLE_portalContainer, shouldCloseOnInteractOutside: shouldCloseOnInteractOutside, ...otherProps } = props;
    return /*#__PURE__*/ (0, react).createElement($f3f84453ead64de5$export$8948f78d83984c69, {
        isDismissable: isDismissable,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        isOpen: isOpen,
        defaultOpen: defaultOpen,
        onOpenChange: onOpenChange,
        isEntering: isEntering,
        isExiting: isExiting,
        UNSTABLE_portalContainer: UNSTABLE_portalContainer,
        shouldCloseOnInteractOutside: shouldCloseOnInteractOutside
    }, /*#__PURE__*/ (0, react).createElement($f3f84453ead64de5$var$ModalContent, {
        ...otherProps,
        modalRef: ref
    }, children));
}
/**
 * A modal is an overlay element which blocks interaction with elements outside it.
 */ const $f3f84453ead64de5$export$2b77a92f1a5ad772 = /*#__PURE__*/ (0, react.forwardRef)($f3f84453ead64de5$var$Modal);
function $f3f84453ead64de5$var$ModalOverlayWithForwardRef(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $f3f84453ead64de5$export$ab57792b9b6974a6);
    let contextState = (0, react.useContext)((0, Dialog/* OverlayTriggerStateContext */.RG));
    let localState = (0, useOverlayTriggerState/* useOverlayTriggerState */.T)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    let objectRef = (0, useObjectRef/* useObjectRef */.U)(ref);
    let modalRef = (0, react.useRef)(null);
    let isOverlayExiting = (0, utils/* useExitAnimation */.OD)(objectRef, state.isOpen);
    let isModalExiting = (0, utils/* useExitAnimation */.OD)(modalRef, state.isOpen);
    let isExiting = isOverlayExiting || isModalExiting || props.isExiting || false;
    let isSSR = (0, SSRProvider/* useIsSSR */.wR)();
    if (!state.isOpen && !isExiting || isSSR) return null;
    return /*#__PURE__*/ (0, react).createElement($f3f84453ead64de5$var$ModalOverlayInner, {
        ...props,
        state: state,
        isExiting: isExiting,
        overlayRef: objectRef,
        modalRef: modalRef
    });
}
const $f3f84453ead64de5$export$8948f78d83984c69 = /*#__PURE__*/ (0, react.forwardRef)($f3f84453ead64de5$var$ModalOverlayWithForwardRef);
function $f3f84453ead64de5$var$ModalOverlayInner({ UNSTABLE_portalContainer: UNSTABLE_portalContainer, ...props }) {
    let modalRef = props.modalRef;
    let { state: state } = props;
    let { modalProps: modalProps, underlayProps: underlayProps } = (0, $8ac8429251c45e4b$export$dbc0f175b25fb0fb)(props, state, modalRef);
    let entering = (0, utils/* useEnterAnimation */._6)(props.overlayRef) || props.isEntering || false;
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-ModalOverlay',
        values: {
            isEntering: entering,
            isExiting: props.isExiting,
            state: state
        }
    });
    let viewport = (0, $5df64b3807dc15ee$export$d699905dd57c73ca)();
    let style = {
        ...renderProps.style,
        '--visual-viewport-height': viewport.height + 'px'
    };
    return /*#__PURE__*/ (0, react).createElement((0, Overlay/* Overlay */.hJ), {
        isExiting: props.isExiting,
        portalContainer: UNSTABLE_portalContainer
    }, /*#__PURE__*/ (0, react).createElement("div", {
        ...(0, mergeProps/* mergeProps */.v)((0, filterDOMProps/* filterDOMProps */.$)(props), underlayProps),
        ...renderProps,
        style: style,
        ref: props.overlayRef,
        "data-entering": entering || undefined,
        "data-exiting": props.isExiting || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $f3f84453ead64de5$var$InternalModalContext,
                {
                    modalProps: modalProps,
                    modalRef: modalRef,
                    isExiting: props.isExiting,
                    isDismissable: props.isDismissable
                }
            ],
            [
                (0, Dialog/* OverlayTriggerStateContext */.RG),
                state
            ]
        ]
    }, renderProps.children)));
}
function $f3f84453ead64de5$var$ModalContent(props) {
    let { modalProps: modalProps, modalRef: modalRef, isExiting: isExiting, isDismissable: isDismissable } = (0, react.useContext)($f3f84453ead64de5$var$InternalModalContext);
    let state = (0, react.useContext)((0, Dialog/* OverlayTriggerStateContext */.RG));
    let mergedRefs = (0, react.useMemo)(()=>(0, mergeRefs/* mergeRefs */.P)(props.modalRef, modalRef), [
        props.modalRef,
        modalRef
    ]);
    let ref = (0, useObjectRef/* useObjectRef */.U)(mergedRefs);
    let entering = (0, utils/* useEnterAnimation */._6)(ref);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-Modal',
        values: {
            isEntering: entering,
            isExiting: isExiting,
            state: state
        }
    });
    return /*#__PURE__*/ (0, react).createElement("div", {
        ...(0, mergeProps/* mergeProps */.v)((0, filterDOMProps/* filterDOMProps */.$)(props), modalProps),
        ...renderProps,
        ref: ref,
        "data-entering": entering || undefined,
        "data-exiting": isExiting || undefined
    }, isDismissable && /*#__PURE__*/ (0, react).createElement((0, DismissButton/* DismissButton */.R), {
        onDismiss: state.close
    }), renderProps.children);
}



//# sourceMappingURL=Modal.module.js.map


/***/ }),

/***/ 32373:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A3: () => (/* binding */ $4e85f108e88277b8$export$d688439359537581),
/* harmony export */   BP: () => (/* binding */ $4e85f108e88277b8$export$b085522c77523c51)
/* harmony export */ });
/* unused harmony exports ColorAreaContext, ColorFieldContext, ColorSliderContext, ColorWheelContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $4e85f108e88277b8$export$b085522c77523c51 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$ebe63fadcdce34ed = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$44644b8a16031b5b = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$717b2c0a523a0b53 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$265015d6dc85bf21 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$d688439359537581 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});



//# sourceMappingURL=RSPContexts.module.js.map


/***/ })

}]);