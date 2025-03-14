"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6299],{

/***/ 23647:
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
  metadata: () => (/* reexport */ site_docs_components_tooltip_mdx_1e8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-tooltip-mdx-1e8.json
const site_docs_components_tooltip_mdx_1e8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/tooltip","title":"Tooltip","description":"Kort beskrivning av Tooltip","source":"@site/docs/components/tooltip.mdx","sourceDirName":"components","slug":"/components/tooltip","permalink":"/pr-preview/pr-349/components/tooltip","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Tooltip","description":"Kort beskrivning av Tooltip","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./packages/components/src/tooltip/Tooltip.tsx + 1 modules
var Tooltip = __webpack_require__(39051);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(71372);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(84722);
;// ./node_modules/lucide-react/dist/esm/icons/save.js
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Save = (0,createLucideIcon/* default */.A)("Save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
]);


//# sourceMappingURL=save.js.map

;// ./apps/docs/docs/components/tooltip.mdx


const frontMatter = {
	title: 'Tooltip',
	description: 'Kort beskrivning av Tooltip',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};










const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      Tooltip: Tooltip/* Tooltip */.m,
      TooltipTrigger: Tooltip/* TooltipTrigger */.k,
      Button: Button/* Button */.$,
      Save: Save
    },
    ...props,
    children: `<TooltipTrigger isOpen>
      <Button
        variant='tertiary'
        aria-label='Spara'
      >
        <Save />
      </Button>
      <Tooltip>Spara</Tooltip>
    </TooltipTrigger>`
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
  "value": "Tooltip",
  "id": "tooltip",
  "level": 3
}, {
  "value": "TooltipTrigger",
  "id": "tooltiptrigger",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
      name: 'Tooltip',
      friendlyName: "Hjälptext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tooltip kan användas för att förklara en knapp eller annan interaktion när det inte går att få plats med informationen i knappen."
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
        children: "import { Tooltip, TooltipTrigger, Button } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "I första hand skall knappen vara tydlig nog så användaren förstår innebörden. Tooltip är till för en design där detta inte är möjligt och vi måste gömma undan informationen. Tooltip måste alltid kompletteras med en aria-label eller text som är dold visuellt men läses upp av skärmläsare."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tooltips kan också användas för att berätta mer information än vad som framkommer visuellt på knappen."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tooltip",
      children: "Tooltip"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: 'Tooltip'
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tooltiptrigger",
      children: "TooltipTrigger"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: 'TooltipTrigger',
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

/***/ 39051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ Tooltip_Tooltip),
  k: () => (/* binding */ TooltipTrigger)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/tooltip/Tooltip.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tooltip_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--background-inverse-01":"light-dark(#171717, #f2f2f2)","--text-inverse":"light-dark(#ffffff, #000000)","tooltip":"tooltip_L2zx","arrow":"arrow_bl7N"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Tooltip.mjs + 3 modules
var Tooltip = __webpack_require__(39013);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(45745);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/tooltip/Tooltip.tsx
var _excluded=["children","placement","className"],_excluded2=["children","delay"];function Tooltip_Tooltip(_ref){var children=_ref.children,placement=_ref.placement,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Tooltip/* Tooltip */.m_,Object.assign({className:(0,clsx/* default */.A)(Tooltip_module.tooltip,className),placement:placement},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Tooltip_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:8,height:8,viewBox:"0 0 8 8",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L4 4 L8 0"})})}),children]}));}function TooltipTrigger(_ref2){var children=_ref2.children,_ref2$delay=_ref2.delay,delay=_ref2$delay===void 0?0:_ref2$delay,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* TooltipTrigger */.k$,Object.assign({delay:delay},props,{children:children}));}

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

/***/ 59875:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sf: () => (/* binding */ $f57aed4a881a3485$export$b47c3594eab58386)
/* harmony export */ });
/* unused harmony exports ModalProvider, useModalProvider, OverlayProvider, useModal */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40961);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60415);




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


const $f57aed4a881a3485$var$Context = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext(null);
function $f57aed4a881a3485$export$178405afcd8c5eb(props) {
    let { children: children } = props;
    let parent = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f57aed4a881a3485$var$Context);
    let [modalCount, setModalCount] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            parent: parent,
            modalCount: modalCount,
            addModal () {
                setModalCount((count)=>count + 1);
                if (parent) parent.addModal();
            },
            removeModal () {
                setModalCount((count)=>count - 1);
                if (parent) parent.removeModal();
            }
        }), [
        parent,
        modalCount
    ]);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($f57aed4a881a3485$var$Context.Provider, {
        value: context
    }, children);
}
function $f57aed4a881a3485$export$d9aaed4c3ece1bc0() {
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f57aed4a881a3485$var$Context);
    return {
        modalProviderProps: {
            'aria-hidden': context && context.modalCount > 0 ? true : undefined
        }
    };
}
/**
 * Creates a root node that will be aria-hidden if there are other modals open.
 */ function $f57aed4a881a3485$var$OverlayContainerDOM(props) {
    let { modalProviderProps: modalProviderProps } = $f57aed4a881a3485$export$d9aaed4c3ece1bc0();
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("div", {
        "data-overlay-container": true,
        ...props,
        ...modalProviderProps
    });
}
function $f57aed4a881a3485$export$bf688221f59024e5(props) {
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($f57aed4a881a3485$export$178405afcd8c5eb, null, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($f57aed4a881a3485$var$OverlayContainerDOM, props));
}
function $f57aed4a881a3485$export$b47c3594eab58386(props) {
    let isSSR = (0, _react_aria_ssr__WEBPACK_IMPORTED_MODULE_2__/* .useIsSSR */ .wR)();
    let { portalContainer: portalContainer = isSSR ? null : document.body, ...rest } = props;
    (0, react__WEBPACK_IMPORTED_MODULE_0__).useEffect(()=>{
        if (portalContainer === null || portalContainer === void 0 ? void 0 : portalContainer.closest('[data-overlay-container]')) throw new Error('An OverlayContainer must not be inside another container. Please change the portalContainer prop.');
    }, [
        portalContainer
    ]);
    if (!portalContainer) return null;
    let contents = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($f57aed4a881a3485$export$bf688221f59024e5, rest);
    return /*#__PURE__*/ (0, react_dom__WEBPACK_IMPORTED_MODULE_1__).createPortal(contents, portalContainer);
}
function $f57aed4a881a3485$export$33ffd74ebf07f060(options) {
    // Add aria-hidden to all parent providers on mount, and restore on unmount.
    let context = (0, $4AOtR$useContext)($f57aed4a881a3485$var$Context);
    if (!context) throw new Error('Modal is not contained within a provider');
    (0, $4AOtR$useEffect)(()=>{
        if ((options === null || options === void 0 ? void 0 : options.isDisabled) || !context || !context.parent) return;
        // The immediate context is from the provider containing this modal, so we only
        // want to trigger aria-hidden on its parents not on the modal provider itself.
        context.parent.addModal();
        return ()=>{
            if (context && context.parent) context.parent.removeModal();
        };
    }, [
        context,
        context.parent,
        options === null || options === void 0 ? void 0 : options.isDisabled
    ]);
    return {
        modalProps: {
            'data-ismodal': !(options === null || options === void 0 ? void 0 : options.isDisabled)
        }
    };
}



//# sourceMappingURL=useModal.module.js.map


/***/ }),

/***/ 13807:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ $d3f049242431219c$export$45fda7c47f93fd48),
/* harmony export */   _: () => (/* binding */ $d3f049242431219c$export$6d3443f2c48bfc20)
/* harmony export */ });
/* harmony import */ var _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49953);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40961);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);




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


function $d3f049242431219c$export$6d3443f2c48bfc20(ref, isReady = true) {
    let [isEntering, setEntering] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    let isAnimationReady = isEntering && isReady;
    // There are two cases for entry animations:
    // 1. CSS @keyframes. The `animation` property is set during the isEntering state, and it is removed after the animation finishes.
    // 2. CSS transitions. The initial styles are applied during the isEntering state, and removed immediately, causing the transition to occur.
    //
    // In the second case, cancel any transitions that were triggered prior to the isEntering = false state (when the transition is supposed to start).
    // This can happen when isReady starts as false (e.g. popovers prior to placement calculation).
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useLayoutEffect */ .N)(()=>{
        if (isAnimationReady && ref.current && 'getAnimations' in ref.current) {
            for (let animation of ref.current.getAnimations())if (animation instanceof CSSTransition) animation.cancel();
        }
    }, [
        ref,
        isAnimationReady
    ]);
    $d3f049242431219c$var$useAnimation(ref, isAnimationReady, (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setEntering(false), []));
    return isAnimationReady;
}
function $d3f049242431219c$export$45fda7c47f93fd48(ref, isOpen) {
    let [exitState, setExitState] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(isOpen ? 'open' : 'closed');
    switch(exitState){
        case 'open':
            // If isOpen becomes false, set the state to exiting.
            if (!isOpen) setExitState('exiting');
            break;
        case 'closed':
        case 'exiting':
            // If we are exiting and isOpen becomes true, the animation was interrupted.
            // Reset the state to open.
            if (isOpen) setExitState('open');
            break;
    }
    let isExiting = exitState === 'exiting';
    $d3f049242431219c$var$useAnimation(ref, isExiting, (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        // Set the state to closed, which will cause the element to be unmounted.
        setExitState((state)=>state === 'exiting' ? 'closed' : state);
    }, []));
    return isExiting;
}
function $d3f049242431219c$var$useAnimation(ref, isActive, onEnd) {
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useLayoutEffect */ .N)(()=>{
        if (isActive && ref.current) {
            if (!('getAnimations' in ref.current)) {
                // JSDOM
                onEnd();
                return;
            }
            let animations = ref.current.getAnimations();
            if (animations.length === 0) {
                onEnd();
                return;
            }
            let canceled = false;
            Promise.all(animations.map((a)=>a.finished)).then(()=>{
                if (!canceled) (0, react_dom__WEBPACK_IMPORTED_MODULE_0__.flushSync)(()=>{
                    onEnd();
                });
            }).catch(()=>{});
            return ()=>{
                canceled = true;
            };
        }
    }, [
        ref,
        isActive,
        onEnd
    ]);
}



//# sourceMappingURL=animation.module.js.map


/***/ }),

/***/ 45745:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ $44f671af83e7d9e0$export$2de4954e8ae13b9f),
/* harmony export */   k: () => (/* binding */ $44f671af83e7d9e0$export$746d02f47f4d381)
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

const $44f671af83e7d9e0$export$2de4954e8ae13b9f = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    placement: 'bottom'
});
const $44f671af83e7d9e0$export$746d02f47f4d381 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function OverlayArrow(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, $44f671af83e7d9e0$export$2de4954e8ae13b9f);
    let placement = props.placement;
    let style = {
        position: 'absolute',
        transform: placement === 'top' || placement === 'bottom' ? 'translateX(-50%)' : 'translateY(-50%)'
    };
    if (placement != null) style[placement] = '100%';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useRenderProps */ .Sl)({
        ...props,
        defaultClassName: 'react-aria-OverlayArrow',
        values: {
            placement: placement
        }
    });
    // remove undefined values from renderProps.style object so that it can be
    // spread merged with the other style object
    if (renderProps.style) Object.keys(renderProps.style).forEach((key)=>renderProps.style[key] === undefined && delete renderProps.style[key]);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("div", {
        ...props,
        ...renderProps,
        style: {
            ...style,
            ...renderProps.style
        },
        ref: ref,
        "data-placement": placement
    });
});



//# sourceMappingURL=OverlayArrow.module.js.map


/***/ }),

/***/ 39013:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m_: () => (/* binding */ $4e3b923658d69c60$export$28c660c63b792dea),
  k$: () => (/* binding */ $4e3b923658d69c60$export$8c610744efcf8a1d)
});

// UNUSED EXPORTS: TooltipContext, TooltipTriggerStateContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(45745);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(95562);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useId.mjs + 1 modules
var useId = __webpack_require__(84137);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusable.mjs
var useFocusable = __webpack_require__(4351);
;// ./node_modules/@react-aria/tooltip/dist/useTooltipTrigger.mjs





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



function $4e1b34546679e357$export$a6da6c504e4bba8b(props, state, ref) {
    let { isDisabled: isDisabled, trigger: trigger } = props;
    let tooltipId = (0, useId/* useId */.Bi)();
    let isHovered = (0, react.useRef)(false);
    let isFocused = (0, react.useRef)(false);
    let handleShow = ()=>{
        if (isHovered.current || isFocused.current) state.open(isFocused.current);
    };
    let handleHide = (immediate)=>{
        if (!isHovered.current && !isFocused.current) state.close(immediate);
    };
    (0, react.useEffect)(()=>{
        let onKeyDown = (e)=>{
            if (ref && ref.current) // Escape after clicking something can give it keyboard focus
            // dismiss tooltip on esc key press
            {
                if (e.key === 'Escape') {
                    e.stopPropagation();
                    state.close(true);
                }
            }
        };
        if (state.isOpen) {
            document.addEventListener('keydown', onKeyDown, true);
            return ()=>{
                document.removeEventListener('keydown', onKeyDown, true);
            };
        }
    }, [
        ref,
        state
    ]);
    let onHoverStart = ()=>{
        if (trigger === 'focus') return;
        // In chrome, if you hover a trigger, then another element obscures it, due to keyboard
        // interactions for example, hover will end. When hover is restored after that element disappears,
        // focus moves on for example, then the tooltip will reopen. We check the modality to know if the hover
        // is the result of moving the mouse.
        if ((0, useFocusVisible/* getInteractionModality */.ME)() === 'pointer') isHovered.current = true;
        else isHovered.current = false;
        handleShow();
    };
    let onHoverEnd = ()=>{
        if (trigger === 'focus') return;
        // no matter how the trigger is left, we should close the tooltip
        isFocused.current = false;
        isHovered.current = false;
        handleHide();
    };
    let onPressStart = ()=>{
        // no matter how the trigger is pressed, we should close the tooltip
        isFocused.current = false;
        isHovered.current = false;
        handleHide(true);
    };
    let onFocus = ()=>{
        let isVisible = (0, useFocusVisible/* isFocusVisible */.pP)();
        if (isVisible) {
            isFocused.current = true;
            handleShow();
        }
    };
    let onBlur = ()=>{
        isFocused.current = false;
        isHovered.current = false;
        handleHide(true);
    };
    let { hoverProps: hoverProps } = (0, useHover/* useHover */.M)({
        isDisabled: isDisabled,
        onHoverStart: onHoverStart,
        onHoverEnd: onHoverEnd
    });
    let { focusableProps: focusableProps } = (0, useFocusable/* useFocusable */.W)({
        isDisabled: isDisabled,
        onFocus: onFocus,
        onBlur: onBlur
    }, ref);
    return {
        triggerProps: {
            'aria-describedby': state.isOpen ? tooltipId : undefined,
            ...(0, mergeProps/* mergeProps */.v)(focusableProps, hoverProps, {
                onPointerDown: onPressStart,
                onKeyDown: onPressStart
            })
        },
        tooltipProps: {
            id: tooltipId
        }
    };
}



//# sourceMappingURL=useTooltipTrigger.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/useModal.mjs
var useModal = __webpack_require__(59875);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/useOverlayPosition.mjs + 2 modules
var useOverlayPosition = __webpack_require__(61340);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
;// ./node_modules/@react-aria/tooltip/dist/useTooltip.mjs



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

function $326e436e94273fe1$export$1c4b08e0eca38426(props, state) {
    let domProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        labelable: true
    });
    let { hoverProps: hoverProps } = (0, useHover/* useHover */.M)({
        onHoverStart: ()=>state === null || state === void 0 ? void 0 : state.open(true),
        onHoverEnd: ()=>state === null || state === void 0 ? void 0 : state.close()
    });
    return {
        tooltipProps: (0, mergeProps/* mergeProps */.v)(domProps, hoverProps, {
            role: 'tooltip'
        })
    };
}



//# sourceMappingURL=useTooltip.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs
var useOverlayTriggerState = __webpack_require__(71732);
;// ./node_modules/@react-stately/tooltip/dist/useTooltipTriggerState.mjs



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

const $8796f90736e175cb$var$TOOLTIP_DELAY = 1500; // this seems to be a 1.5 second delay, check with design
const $8796f90736e175cb$var$TOOLTIP_COOLDOWN = 500;
let $8796f90736e175cb$var$tooltips = {};
let $8796f90736e175cb$var$tooltipId = 0;
let $8796f90736e175cb$var$globalWarmedUp = false;
let $8796f90736e175cb$var$globalWarmUpTimeout = null;
let $8796f90736e175cb$var$globalCooldownTimeout = null;
function $8796f90736e175cb$export$4d40659c25ecb50b(props = {}) {
    let { delay: delay = $8796f90736e175cb$var$TOOLTIP_DELAY, closeDelay: closeDelay = $8796f90736e175cb$var$TOOLTIP_COOLDOWN } = props;
    let { isOpen: isOpen, open: open, close: close } = (0, useOverlayTriggerState/* useOverlayTriggerState */.T)(props);
    let id = (0, react.useMemo)(()=>`${++$8796f90736e175cb$var$tooltipId}`, []);
    let closeTimeout = (0, react.useRef)(null);
    let closeCallback = (0, react.useRef)(close);
    let ensureTooltipEntry = ()=>{
        $8796f90736e175cb$var$tooltips[id] = hideTooltip;
    };
    let closeOpenTooltips = ()=>{
        for(let hideTooltipId in $8796f90736e175cb$var$tooltips)if (hideTooltipId !== id) {
            $8796f90736e175cb$var$tooltips[hideTooltipId](true);
            delete $8796f90736e175cb$var$tooltips[hideTooltipId];
        }
    };
    let showTooltip = ()=>{
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        closeTimeout.current = null;
        closeOpenTooltips();
        ensureTooltipEntry();
        $8796f90736e175cb$var$globalWarmedUp = true;
        open();
        if ($8796f90736e175cb$var$globalWarmUpTimeout) {
            clearTimeout($8796f90736e175cb$var$globalWarmUpTimeout);
            $8796f90736e175cb$var$globalWarmUpTimeout = null;
        }
        if ($8796f90736e175cb$var$globalCooldownTimeout) {
            clearTimeout($8796f90736e175cb$var$globalCooldownTimeout);
            $8796f90736e175cb$var$globalCooldownTimeout = null;
        }
    };
    let hideTooltip = (immediate)=>{
        if (immediate || closeDelay <= 0) {
            if (closeTimeout.current) clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
            closeCallback.current();
        } else if (!closeTimeout.current) closeTimeout.current = setTimeout(()=>{
            closeTimeout.current = null;
            closeCallback.current();
        }, closeDelay);
        if ($8796f90736e175cb$var$globalWarmUpTimeout) {
            clearTimeout($8796f90736e175cb$var$globalWarmUpTimeout);
            $8796f90736e175cb$var$globalWarmUpTimeout = null;
        }
        if ($8796f90736e175cb$var$globalWarmedUp) {
            if ($8796f90736e175cb$var$globalCooldownTimeout) clearTimeout($8796f90736e175cb$var$globalCooldownTimeout);
            $8796f90736e175cb$var$globalCooldownTimeout = setTimeout(()=>{
                delete $8796f90736e175cb$var$tooltips[id];
                $8796f90736e175cb$var$globalCooldownTimeout = null;
                $8796f90736e175cb$var$globalWarmedUp = false;
            }, Math.max($8796f90736e175cb$var$TOOLTIP_COOLDOWN, closeDelay));
        }
    };
    let warmupTooltip = ()=>{
        closeOpenTooltips();
        ensureTooltipEntry();
        if (!isOpen && !$8796f90736e175cb$var$globalWarmUpTimeout && !$8796f90736e175cb$var$globalWarmedUp) $8796f90736e175cb$var$globalWarmUpTimeout = setTimeout(()=>{
            $8796f90736e175cb$var$globalWarmUpTimeout = null;
            $8796f90736e175cb$var$globalWarmedUp = true;
            showTooltip();
        }, delay);
        else if (!isOpen) showTooltip();
    };
    (0, react.useEffect)(()=>{
        closeCallback.current = close;
    }, [
        close
    ]);
    (0, react.useEffect)(()=>{
        return ()=>{
            if (closeTimeout.current) clearTimeout(closeTimeout.current);
            let tooltip = $8796f90736e175cb$var$tooltips[id];
            if (tooltip) delete $8796f90736e175cb$var$tooltips[id];
        };
    }, [
        id
    ]);
    return {
        isOpen: isOpen,
        open: (immediate)=>{
            if (!immediate && delay > 0 && !closeTimeout.current) warmupTooltip();
            else showTooltip();
        },
        close: hideTooltip
    };
}



//# sourceMappingURL=useTooltipTriggerState.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/animation.mjs
var animation = __webpack_require__(13807);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(49953);
;// ./node_modules/react-aria-components/dist/Tooltip.mjs








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






const $4e3b923658d69c60$export$7a7623236eec67fa = /*#__PURE__*/ (0, react.createContext)(null);
const $4e3b923658d69c60$export$39ae08fa83328b12 = /*#__PURE__*/ (0, react.createContext)(null);
function $4e3b923658d69c60$export$8c610744efcf8a1d(props) {
    let state = (0, $8796f90736e175cb$export$4d40659c25ecb50b)(props);
    let ref = (0, react.useRef)(null);
    let { triggerProps: triggerProps, tooltipProps: tooltipProps } = (0, $4e1b34546679e357$export$a6da6c504e4bba8b)(props, state, ref);
    return /*#__PURE__*/ (0, react).createElement((0, utils/* Provider */.Kq), {
        values: [
            [
                $4e3b923658d69c60$export$7a7623236eec67fa,
                state
            ],
            [
                $4e3b923658d69c60$export$39ae08fa83328b12,
                {
                    ...tooltipProps,
                    triggerRef: ref
                }
            ]
        ]
    }, /*#__PURE__*/ (0, react).createElement((0, useFocusable/* FocusableProvider */.M), {
        ...triggerProps,
        ref: ref
    }, props.children));
}
const $4e3b923658d69c60$export$28c660c63b792dea = /*#__PURE__*/ (0, react.forwardRef)(function Tooltip({ UNSTABLE_portalContainer: UNSTABLE_portalContainer, ...props }, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $4e3b923658d69c60$export$39ae08fa83328b12);
    let contextState = (0, react.useContext)($4e3b923658d69c60$export$7a7623236eec67fa);
    let localState = (0, $8796f90736e175cb$export$4d40659c25ecb50b)(props);
    let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
    let isExiting = (0, animation/* useExitAnimation */.O)(ref, state.isOpen) || props.isExiting || false;
    if (!state.isOpen && !isExiting) return null;
    return /*#__PURE__*/ (0, react).createElement((0, useModal/* OverlayContainer */.Sf), {
        portalContainer: UNSTABLE_portalContainer
    }, /*#__PURE__*/ (0, react).createElement($4e3b923658d69c60$var$TooltipInner, {
        ...props,
        tooltipRef: ref,
        isExiting: isExiting
    }));
});
function $4e3b923658d69c60$var$TooltipInner(props) {
    let state = (0, react.useContext)($4e3b923658d69c60$export$7a7623236eec67fa);
    // Calculate the arrow size internally
    // Referenced from: packages/@react-spectrum/tooltip/src/TooltipTrigger.tsx
    let arrowRef = (0, react.useRef)(null);
    let [arrowWidth, setArrowWidth] = (0, react.useState)(0);
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        if (arrowRef.current && state.isOpen) setArrowWidth(arrowRef.current.getBoundingClientRect().width);
    }, [
        state.isOpen,
        arrowRef
    ]);
    let { overlayProps: overlayProps, arrowProps: arrowProps, placement: placement } = (0, useOverlayPosition/* useOverlayPosition */.v)({
        placement: props.placement || 'top',
        targetRef: props.triggerRef,
        overlayRef: props.tooltipRef,
        offset: props.offset,
        crossOffset: props.crossOffset,
        isOpen: state.isOpen,
        arrowSize: arrowWidth,
        arrowBoundaryOffset: props.arrowBoundaryOffset,
        shouldFlip: props.shouldFlip,
        onClose: ()=>state.close(true)
    });
    let isEntering = (0, animation/* useEnterAnimation */._)(props.tooltipRef, !!placement) || props.isEntering || false;
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        defaultClassName: 'react-aria-Tooltip',
        values: {
            placement: placement,
            isEntering: isEntering,
            isExiting: props.isExiting,
            state: state
        }
    });
    props = (0, mergeProps/* mergeProps */.v)(props, overlayProps);
    let { tooltipProps: tooltipProps } = (0, $326e436e94273fe1$export$1c4b08e0eca38426)(props, state);
    return /*#__PURE__*/ (0, react).createElement("div", {
        ...tooltipProps,
        ref: props.tooltipRef,
        ...renderProps,
        style: {
            ...overlayProps.style,
            ...renderProps.style
        },
        "data-placement": placement !== null && placement !== void 0 ? placement : undefined,
        "data-entering": isEntering || undefined,
        "data-exiting": props.isExiting || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, OverlayArrow/* OverlayArrowContext */.J).Provider, {
        value: {
            ...arrowProps,
            placement: placement,
            ref: arrowRef
        }
    }, renderProps.children));
}



//# sourceMappingURL=Tooltip.module.js.map


/***/ })

}]);