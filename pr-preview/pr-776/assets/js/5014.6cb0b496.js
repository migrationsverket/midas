"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5014],{

/***/ 21704:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ $01b77f81d0f07f68$export$75b6ee27786ba447),
/* harmony export */   J: () => (/* binding */ $01b77f81d0f07f68$export$b04be29aa201d4f5)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5933);
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75127);
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


const $01b77f81d0f07f68$export$75b6ee27786ba447 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $01b77f81d0f07f68$export$b04be29aa201d4f5 = /*#__PURE__*/ (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__/* .createHideableComponent */ .U7)(function Label(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useContextProps */ .JT)(props, ref, $01b77f81d0f07f68$export$75b6ee27786ba447);
    let { elementType: ElementType = 'label', ...labelProps } = props;
    // @ts-ignore
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement(ElementType, {
        className: "react-aria-Label",
        ...labelProps,
        ref: ref
    });
});



//# sourceMappingURL=Label.module.js.map


/***/ }),

/***/ 37061:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ $313b98861ee5dd6c$export$d6875122194c7b44)
/* harmony export */ });
/* harmony import */ var _useId_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84137);


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
function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
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



//# sourceMappingURL=useLabels.module.js.map


/***/ }),

/***/ 39565:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ $0393f8ab869a0f1a$export$c17561cb55d4db30),
  K: () => (/* binding */ $0393f8ab869a0f1a$export$e9f3bf65a26ce129)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/number.mjs
var number = __webpack_require__(91945);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/label/dist/useLabel.mjs
var useLabel = __webpack_require__(64887);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
// EXTERNAL MODULE: ./node_modules/@internationalized/number/dist/NumberFormatter.mjs
var NumberFormatter = __webpack_require__(80137);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@react-aria/i18n/dist/useNumberFormatter.mjs




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


function $a916eb452884faea$export$b7a616150fdb9f44(options = {}) {
    let { locale: locale } = (0, context/* useLocale */.Y)();
    return (0, react.useMemo)(()=>new (0, NumberFormatter/* NumberFormatter */.K)(locale, options), [
        locale,
        options
    ]);
}



//# sourceMappingURL=useNumberFormatter.module.js.map

;// ./node_modules/@react-aria/progress/dist/useProgressBar.mjs




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


function $204d9ebcedfb8806$export$ed5abd763a836edc(props) {
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
    let percentage = (value - minValue) / (maxValue - minValue);
    let formatter = (0, $a916eb452884faea$export$b7a616150fdb9f44)(formatOptions);
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



//# sourceMappingURL=useProgressBar.module.js.map

;// ./node_modules/react-aria-components/dist/ProgressBar.mjs







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





const $0393f8ab869a0f1a$export$e9f3bf65a26ce129 = /*#__PURE__*/ (0, react.createContext)(null);
const $0393f8ab869a0f1a$export$c17561cb55d4db30 = /*#__PURE__*/ (0, react.forwardRef)(function ProgressBar(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $0393f8ab869a0f1a$export$e9f3bf65a26ce129);
    let { value: value = 0, minValue: minValue = 0, maxValue: maxValue = 100, isIndeterminate: isIndeterminate = false } = props;
    value = (0, number/* clamp */.qE)(value, minValue, maxValue);
    let [labelRef, label] = (0, utils/* useSlot */._E)(!props['aria-label'] && !props['aria-labelledby']);
    let { progressBarProps: progressBarProps, labelProps: labelProps } = (0, $204d9ebcedfb8806$export$ed5abd763a836edc)({
        ...props,
        label: label
    });
    // Calculate the width of the progress bar as a percentage
    let percentage = isIndeterminate ? undefined : (value - minValue) / (maxValue - minValue) * 100;
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
    return /*#__PURE__*/ (0, react).createElement("div", {
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



//# sourceMappingURL=ProgressBar.module.js.map


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
/**
 * Internal component that handles the case when locale is provided.
 */ function $18f2051aff69b9bf$var$I18nProviderWithLocale(props) {
    let { locale: locale, children: children } = props;
    let value = (0, react).useMemo(()=>({
            locale: locale,
            direction: (0, $148a7a147e38ea7f$export$702d680b21cbd764)(locale) ? 'rtl' : 'ltr'
        }), [
        locale
    ]);
    return /*#__PURE__*/ (0, react).createElement($18f2051aff69b9bf$var$I18nContext.Provider, {
        value: value
    }, children);
}
/**
 * Internal component that handles the case when no locale is provided.
 */ function $18f2051aff69b9bf$var$I18nProviderWithDefaultLocale(props) {
    let { children: children } = props;
    let defaultLocale = (0, $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a)();
    return /*#__PURE__*/ (0, react).createElement($18f2051aff69b9bf$var$I18nContext.Provider, {
        value: defaultLocale
    }, children);
}
function $18f2051aff69b9bf$export$a54013f0d02a8f82(props) {
    let { locale: locale, children: children } = props;
    // Conditionally render different components to avoid calling useDefaultLocale.
    // This is necessary because useDefaultLocale triggers a re-render.
    if (locale) return /*#__PURE__*/ (0, react).createElement($18f2051aff69b9bf$var$I18nProviderWithLocale, {
        locale: locale,
        children: children
    });
    return /*#__PURE__*/ (0, react).createElement($18f2051aff69b9bf$var$I18nProviderWithDefaultLocale, {
        children: children
    });
}
function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7() {
    let defaultLocale = (0, $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a)();
    let context = (0, react.useContext)($18f2051aff69b9bf$var$I18nContext);
    return context || defaultLocale;
}



//# sourceMappingURL=context.module.js.map


/***/ }),

/***/ 60771:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iP: () => (/* binding */ $319e236875307eab$export$a9b970dcc4ae71a9),
/* harmony export */   pA: () => (/* binding */ $319e236875307eab$export$d10ae4f68404609a)
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
 */ /* Inspired by https://github.com/AlmeroSteyn/react-aria-live */ const $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY = 7000;
let $319e236875307eab$var$liveAnnouncer = null;
function $319e236875307eab$export$a9b970dcc4ae71a9(message, assertiveness = 'assertive', timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
    if (!$319e236875307eab$var$liveAnnouncer) {
        $319e236875307eab$var$liveAnnouncer = new $319e236875307eab$var$LiveAnnouncer();
        // wait for the live announcer regions to be added to the dom, then announce
        // otherwise Safari won't announce the message if it's added too quickly
        // found most times less than 100ms were not consistent when announcing with Safari
        // IS_REACT_ACT_ENVIRONMENT is used by React 18. Previous versions checked for the `jest` global.
        // https://github.com/reactwg/react-18/discussions/102
        // if we're in a test environment, announce without waiting
        // @ts-ignore
        if (!(typeof IS_REACT_ACT_ENVIRONMENT === 'boolean' ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== 'undefined')) setTimeout(()=>{
            if ($319e236875307eab$var$liveAnnouncer === null || $319e236875307eab$var$liveAnnouncer === void 0 ? void 0 : $319e236875307eab$var$liveAnnouncer.isAttached()) $319e236875307eab$var$liveAnnouncer === null || $319e236875307eab$var$liveAnnouncer === void 0 ? void 0 : $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
        }, 100);
        else $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
    } else $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
}
function $319e236875307eab$export$d10ae4f68404609a(assertiveness) {
    if ($319e236875307eab$var$liveAnnouncer) $319e236875307eab$var$liveAnnouncer.clear(assertiveness);
}
function $319e236875307eab$export$d8686216b8b81b2f() {
    if ($319e236875307eab$var$liveAnnouncer) {
        $319e236875307eab$var$liveAnnouncer.destroy();
        $319e236875307eab$var$liveAnnouncer = null;
    }
}
// LiveAnnouncer is implemented using vanilla DOM, not React. That's because as of React 18
// ReactDOM.render is deprecated, and the replacement, ReactDOM.createRoot is moved into a
// subpath import `react-dom/client`. That makes it hard for us to support multiple React versions.
// As a global API, we can't use portals without introducing a breaking API change. LiveAnnouncer
// is simple enough to implement without React, so that's what we do here.
// See this discussion for more details: https://github.com/reactwg/react-18/discussions/125#discussioncomment-2382638
class $319e236875307eab$var$LiveAnnouncer {
    isAttached() {
        var _this_node;
        return (_this_node = this.node) === null || _this_node === void 0 ? void 0 : _this_node.isConnected;
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
    announce(message, assertiveness = 'assertive', timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
        var _this_assertiveLog, _this_politeLog;
        if (!this.node) return;
        let node = document.createElement('div');
        if (typeof message === 'object') {
            // To read an aria-labelledby, the element must have an appropriate role, such as img.
            node.setAttribute('role', 'img');
            node.setAttribute('aria-labelledby', message['aria-labelledby']);
        } else node.textContent = message;
        if (assertiveness === 'assertive') (_this_assertiveLog = this.assertiveLog) === null || _this_assertiveLog === void 0 ? void 0 : _this_assertiveLog.appendChild(node);
        else (_this_politeLog = this.politeLog) === null || _this_politeLog === void 0 ? void 0 : _this_politeLog.appendChild(node);
        if (message !== '') setTimeout(()=>{
            node.remove();
        }, timeout);
    }
    clear(assertiveness) {
        if (!this.node) return;
        if ((!assertiveness || assertiveness === 'assertive') && this.assertiveLog) this.assertiveLog.innerHTML = '';
        if ((!assertiveness || assertiveness === 'polite') && this.politeLog) this.politeLog.innerHTML = '';
    }
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
}



//# sourceMappingURL=LiveAnnouncer.module.js.map


/***/ }),

/***/ 64887:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ $d191a55c9702f145$export$8467354a121f1b9f)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84137);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37061);


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
function $d191a55c9702f145$export$8467354a121f1b9f(props) {
    let { id: id, label: label, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel, labelElementType: labelElementType = 'label' } = props;
    id = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .useId */ .Bi)(id);
    let labelId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .useId */ .Bi)();
    let labelProps = {};
    if (label) {
        ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === 'label' ? id : undefined
        };
    } else if (!ariaLabelledby && !ariaLabel && "production" !== 'production') // removed by dead control flow
{}
    let fieldProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLabels */ .b)({
        id: id,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps
    };
}



//# sourceMappingURL=useLabel.module.js.map


/***/ }),

/***/ 65014:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $d2b4bc8c273e7be6$export$353f5b6fc5456de1),
/* harmony export */   k: () => (/* binding */ $d2b4bc8c273e7be6$export$24d547caef80ccd1)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5933);
/* harmony import */ var _ProgressBar_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39565);
/* harmony import */ var _react_aria_live_announcer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60771);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69229);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84137);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32217);
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75127);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5987);
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






const $d2b4bc8c273e7be6$export$24d547caef80ccd1 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $d2b4bc8c273e7be6$export$353f5b6fc5456de1 = /*#__PURE__*/ (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__/* .createHideableComponent */ .U7)(function Button(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useContextProps */ .JT)(props, ref, $d2b4bc8c273e7be6$export$24d547caef80ccd1);
    props = $d2b4bc8c273e7be6$var$disablePendingProps(props);
    let ctx = props;
    let { isPending: isPending } = ctx;
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .useButton */ .s)(props, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, react_aria__WEBPACK_IMPORTED_MODULE_4__/* .useFocusRing */ .o)(props);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_5__/* .useHover */ .M)({
        ...props,
        isDisabled: props.isDisabled || isPending
    });
    let renderValues = {
        isHovered: isHovered,
        isPressed: (ctx.isPressed || isPressed) && !isPending,
        isFocused: isFocused,
        isFocusVisible: isFocusVisible,
        isDisabled: props.isDisabled || false,
        isPending: isPending !== null && isPending !== void 0 ? isPending : false
    };
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useRenderProps */ .Sl)({
        ...props,
        values: renderValues,
        defaultClassName: 'react-aria-Button'
    });
    let buttonId = (0, react_aria__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .Bi)(buttonProps.id);
    let progressId = (0, react_aria__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .Bi)();
    let ariaLabelledby = buttonProps['aria-labelledby'];
    if (isPending) {
        // aria-labelledby wins over aria-label
        // https://www.w3.org/TR/accname-1.2/#computation-steps
        if (ariaLabelledby) ariaLabelledby = `${ariaLabelledby} ${progressId}`;
        else if (buttonProps['aria-label']) ariaLabelledby = `${buttonId} ${progressId}`;
    }
    let wasPending = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isPending);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let message = {
            'aria-labelledby': ariaLabelledby || buttonId
        };
        if (!wasPending.current && isFocused && isPending) (0, _react_aria_live_announcer__WEBPACK_IMPORTED_MODULE_7__/* .announce */ .iP)(message, 'assertive');
        else if (wasPending.current && isFocused && !isPending) (0, _react_aria_live_announcer__WEBPACK_IMPORTED_MODULE_7__/* .announce */ .iP)(message, 'assertive');
        wasPending.current = isPending;
    }, [
        isPending,
        isFocused,
        ariaLabelledby,
        buttonId
    ]);
    let DOMProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_8__/* .filterDOMProps */ .$)(props, {
        global: true
    });
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("button", {
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_9__/* .mergeProps */ .v)(DOMProps, renderProps, buttonProps, focusProps, hoverProps),
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
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, _ProgressBar_mjs__WEBPACK_IMPORTED_MODULE_10__/* .ProgressBarContext */ .K).Provider, {
        value: {
            id: progressId
        }
    }, renderProps.children));
});
function $d2b4bc8c273e7be6$var$disablePendingProps(props) {
    // Don't allow interaction while isPending is true
    if (props.isPending) {
        props.onPress = undefined;
        props.onPressStart = undefined;
        props.onPressEnd = undefined;
        props.onPressChange = undefined;
        props.onPressUp = undefined;
        props.onKeyDown = undefined;
        props.onKeyUp = undefined;
        props.onClick = undefined;
        props.href = undefined;
    }
    return props;
}



//# sourceMappingURL=Button.module.js.map


/***/ }),

/***/ 69229:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ $701a24aa0da5b062$export$ea18c227d4417cc3)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32217);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5987);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35044);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28940);



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

function $701a24aa0da5b062$export$ea18c227d4417cc3(props, ref) {
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
    let { pressProps: pressProps, isPressed: isPressed } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_0__/* .usePress */ .d)({
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
    let { focusableProps: focusableProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__/* .useFocusable */ .Wc)(props, ref);
    if (allowFocusWhenDisabled) focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
    let buttonProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(focusableProps, pressProps, (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .filterDOMProps */ .$)(props, {
        labelable: true
    }));
    return {
        isPressed: isPressed,
        buttonProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(additionalProps, buttonProps, {
            'aria-haspopup': props['aria-haspopup'],
            'aria-expanded': props['aria-expanded'],
            'aria-controls': props['aria-controls'],
            'aria-pressed': props['aria-pressed'],
            'aria-current': props['aria-current'],
            'aria-disabled': props['aria-disabled']
        })
    };
}



//# sourceMappingURL=useButton.module.js.map


/***/ }),

/***/ 75127:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U7: () => (/* binding */ $f39a9eba43920ace$export$86427a43e3e48ebb),
/* harmony export */   jZ: () => (/* binding */ $f39a9eba43920ace$export$8dc98ba7eadeaa56),
/* harmony export */   m_: () => (/* binding */ $f39a9eba43920ace$export$b5d7cc18bb8d2b59)
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
// See https://github.com/facebook/react/issues/19932
if (typeof HTMLTemplateElement !== 'undefined') {
    const getFirstChild = Object.getOwnPropertyDescriptor(Node.prototype, 'firstChild').get;
    Object.defineProperty(HTMLTemplateElement.prototype, 'firstChild', {
        configurable: true,
        enumerable: true,
        get: function() {
            if (this.dataset.reactAriaHidden) return this.content.firstChild;
            else return getFirstChild.call(this);
        }
    });
}
const $f39a9eba43920ace$export$94b6d0abf7d33e8c = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
function $f39a9eba43920ace$export$8dc98ba7eadeaa56(props) {
    let isHidden = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f39a9eba43920ace$export$94b6d0abf7d33e8c);
    if (isHidden) // Don't hide again if we are already hidden.
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, react__WEBPACK_IMPORTED_MODULE_0__).Fragment, null, props.children);
    let children = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($f39a9eba43920ace$export$94b6d0abf7d33e8c.Provider, {
        value: true
    }, props.children);
    // In SSR, portals are not supported by React. Instead, always render into a <template>
    // element, which the browser will never display to the user. In addition, the
    // content is not part of the accessible DOM tree, so it won't affect ids or other accessibility attributes.
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("template", {
        "data-react-aria-hidden": true
    }, children);
}
function $f39a9eba43920ace$export$86427a43e3e48ebb(fn) {
    let Wrapper = (props, ref)=>{
        let isHidden = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f39a9eba43920ace$export$94b6d0abf7d33e8c);
        if (isHidden) return null;
        return fn(props, ref);
    };
    // @ts-ignore - for react dev tools
    Wrapper.displayName = fn.displayName || fn.name;
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Wrapper);
}
function $f39a9eba43920ace$export$b5d7cc18bb8d2b59() {
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f39a9eba43920ace$export$94b6d0abf7d33e8c);
}



//# sourceMappingURL=Hidden.module.js.map


/***/ }),

/***/ 80137:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5)
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
 */ let $488c6ddbf4ef74c2$var$formatterCache = new Map();
let $488c6ddbf4ef74c2$var$supportsSignDisplay = false;
try {
    $488c6ddbf4ef74c2$var$supportsSignDisplay = new Intl.NumberFormat('de-DE', {
        signDisplay: 'exceptZero'
    }).resolvedOptions().signDisplay === 'exceptZero';
// eslint-disable-next-line no-empty
} catch  {}
let $488c6ddbf4ef74c2$var$supportsUnit = false;
try {
    $488c6ddbf4ef74c2$var$supportsUnit = new Intl.NumberFormat('de-DE', {
        style: 'unit',
        unit: 'degree'
    }).resolvedOptions().style === 'unit';
// eslint-disable-next-line no-empty
} catch  {}
// Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.
const $488c6ddbf4ef74c2$var$UNITS = {
    degree: {
        narrow: {
            default: "\xb0",
            'ja-JP': " \u5EA6",
            'zh-TW': "\u5EA6",
            'sl-SI': " \xb0"
        }
    }
};
class $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5 {
    /** Formats a number value as a string, according to the locale and options provided to the constructor. */ format(value) {
        let res = '';
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) res = $488c6ddbf4ef74c2$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
        else res = this.numberFormatter.format(value);
        if (this.options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
            var _UNITS_unit;
            let { unit: unit, unitDisplay: unitDisplay = 'short', locale: locale } = this.resolvedOptions();
            if (!unit) return res;
            let values = (_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay];
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
        if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) options = {
            ...options,
            signDisplay: this.options.signDisplay
        };
        if (!$488c6ddbf4ef74c2$var$supportsUnit && this.options.style === 'unit') options = {
            ...options,
            style: 'unit',
            unit: this.options.unit,
            unitDisplay: this.options.unitDisplay
        };
        return options;
    }
    constructor(locale, options = {}){
        this.numberFormatter = $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options);
        this.options = options;
    }
}
function $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options = {}) {
    let { numberingSystem: numberingSystem } = options;
    if (numberingSystem && locale.includes('-nu-')) {
        if (!locale.includes('-u-')) locale += '-u-';
        locale += `-nu-${numberingSystem}`;
    }
    if (options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
        var _UNITS_unit;
        let { unit: unit, unitDisplay: unitDisplay = 'short' } = options;
        if (!unit) throw new Error('unit option must be provided with style: "unit"');
        if (!((_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay])) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
        options = {
            ...options,
            style: 'decimal'
        };
    }
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($488c6ddbf4ef74c2$var$formatterCache.has(cacheKey)) return $488c6ddbf4ef74c2$var$formatterCache.get(cacheKey);
    let numberFormatter = new Intl.NumberFormat(locale, options);
    $488c6ddbf4ef74c2$var$formatterCache.set(cacheKey, numberFormatter);
    return numberFormatter;
}
function $488c6ddbf4ef74c2$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
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



//# sourceMappingURL=NumberFormatter.module.js.map


/***/ }),

/***/ 91945:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   qE: () => (/* binding */ $9446cca9a3875146$export$7d15b64cf5a3a4c4)
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
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $9446cca9a3875146$export$e1a7b8e69ef6c52f(value, step) {
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
function $9446cca9a3875146$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = $9446cca9a3875146$export$e1a7b8e69ef6c52f(Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder, step);
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor($9446cca9a3875146$export$e1a7b8e69ef6c52f((max - min) / step, step)) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor($9446cca9a3875146$export$e1a7b8e69ef6c52f(max / step, step)) * step;
    // correct floating point behavior by rounding to step precision
    snappedValue = $9446cca9a3875146$export$e1a7b8e69ef6c52f(snappedValue, step);
    return snappedValue;
}
function $9446cca9a3875146$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
}



//# sourceMappingURL=number.module.js.map


/***/ })

}]);