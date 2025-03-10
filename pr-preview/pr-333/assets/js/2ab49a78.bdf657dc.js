"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[7677],{

/***/ 65808:
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
  metadata: () => (/* reexport */ site_docs_components_calendar_mdx_2ab_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-calendar-mdx-2ab.json
const site_docs_components_calendar_mdx_2ab_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/calendar","title":"Calendar","description":"Använd en kalender när användaren ska välja ett datum eller visualisera ett datum valt på annat sätt.","source":"@site/docs/components/calendar.mdx","sourceDirName":"components","slug":"/components/calendar","permalink":"/pr-preview/pr-333/components/calendar","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Calendar","description":"Använd en kalender när användaren ska välja ett datum eller visualisera ett datum valt på annat sätt.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./packages/components/src/calendar/Calendar.tsx + 1 modules
var Calendar = __webpack_require__(55351);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(71372);
;// ./apps/docs/docs/components/calendar.mdx


const frontMatter = {
	title: 'Calendar',
	description: 'Använd en kalender när användaren ska välja ett datum eller visualisera ett datum valt på annat sätt.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};









const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      Calendar: Calendar/* Calendar */.V
    },
    ...props,
    children: `<Calendar/>`
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
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: "Calendar",
      friendlyName: "Kalender",
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/Calendar.html"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kalender kan användas när användaren ska välja ett datum eller visualisera ett valt datum. Normalt sett\när ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/date-picker",
        children: "DatePicker"
      }), " standardvalet men kalendern kan användas när inputfältet inte\nbehövs, inte ligger i direkt anslutning till kalendern, eller om kalendern inte ska presenteras som en popover."]
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
        children: "import { Calendar } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Calendar"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
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

/***/ 55351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ Calendar_Calendar)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Calendar.mjs + 44 modules
var Calendar = __webpack_require__(88519);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs + 1 modules
var Button = __webpack_require__(44080);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Heading.mjs
var Heading = __webpack_require__(57936);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
;// ./packages/components/src/calendar/Calendar.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Calendar_module = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","gray10":"#f2f2f2","gray20":"#e6e6e6","blue150":"#143c50","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","calendar":"calendar_Zofv","day":"day_OZ3K","header":"header_VHXU","heading":"heading_Dldu","today":"today_rAcb"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(60250);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(87677);
// EXTERNAL MODULE: ./node_modules/@internationalized/date/dist/queries.mjs + 1 modules
var queries = __webpack_require__(97819);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/calendar/Calendar.tsx
var _excluded=["errorMessage","weekdayStyle","className"];function Calendar_Calendar(_ref){var errorMessage=_ref.errorMessage,_ref$weekdayStyle=_ref.weekdayStyle,weekdayStyle=_ref$weekdayStyle===void 0?'short':_ref$weekdayStyle,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Calendar/* Calendar */.Vv,Object.assign({},props,{className:(0,clsx/* clsx */.$)(Calendar_module.calendar,className),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{className:Calendar_module.header,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"previous",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_left/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{className:Calendar_module.heading}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"next",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar/* CalendarGrid */.r8,{className:Calendar_module.calendar,weekdayStyle:weekdayStyle,children:function children(date){return/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar/* CalendarCell */.Zr,{date:date,className:(0,clsx/* clsx */.$)(Calendar_module.day,(0,queries/* isToday */.cK)(date,(0,queries/* getLocalTimeZone */.Xj)())&&Calendar_module.today)});}}),errorMessage&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"errorMessage",children:errorMessage})]}));}

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

/***/ 27279:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $514c0188e459b4c0$export$5f1af8db9871e1d6),
/* harmony export */   h: () => (/* binding */ $514c0188e459b4c0$export$9afb8bc826b033ea)
/* harmony export */ });
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

const $514c0188e459b4c0$export$9afb8bc826b033ea = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $514c0188e459b4c0$export$5f1af8db9871e1d6 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Text(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, $514c0188e459b4c0$export$9afb8bc826b033ea);
    let { elementType: ElementType = 'span', ...domProps } = props;
    // @ts-ignore
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement(ElementType, {
        className: "react-aria-Text",
        ...domProps,
        ref: ref
    });
});



//# sourceMappingURL=Text.module.js.map


/***/ })

}]);