"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6885],{

/***/ 418
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TriangleAlert)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("triangle-alert", __iconNode);


//# sourceMappingURL=triangle-alert.js.map


/***/ },

/***/ 8356
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ $458b0a5536c1a7cf$export$40bfa8c7b0832715)
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
var $458b0a5536c1a7cf$var$_React_useInsertionEffect;
// Use the earliest effect possible to reset the ref below.
const $458b0a5536c1a7cf$var$useEarlyEffect = typeof document !== 'undefined' ? ($458b0a5536c1a7cf$var$_React_useInsertionEffect = (0, react__WEBPACK_IMPORTED_MODULE_0__)['useInsertionEffect']) !== null && $458b0a5536c1a7cf$var$_React_useInsertionEffect !== void 0 ? $458b0a5536c1a7cf$var$_React_useInsertionEffect : (0, react__WEBPACK_IMPORTED_MODULE_0__).useLayoutEffect : ()=>{};
function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value, defaultValue, onChange) {
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
    $458b0a5536c1a7cf$var$useEarlyEffect(()=>{
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
            onChange === null || onChange === void 0 ? void 0 : onChange(newValue, ...args);
        }
    }, [
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
}



//# sourceMappingURL=useControlledState.module.js.map


/***/ },

/***/ 11811
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ $2d73ec29415bd339$export$712718f7aec83d5)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99672);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32217);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5987);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8343);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96540);
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8356);
/* harmony import */ var _react_aria_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85441);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28940);
/* harmony import */ var _react_aria_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48868);
/* harmony import */ var _react_stately_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71144);








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
    let [value, setValue] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_5__/* .useControlledState */ .P)(props.value, props.defaultValue || '', props.onChange);
    let { focusableProps: focusableProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_7__/* .useFocusable */ .Wc)(props, ref);
    let validationState = (0, _react_stately_form__WEBPACK_IMPORTED_MODULE_9__/* .useFormValidationState */ .KZ)({
        ...props,
        value: value
    });
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = validationState.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, _react_aria_label__WEBPACK_IMPORTED_MODULE_6__/* .useField */ .M)({
        ...props,
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let domProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .filterDOMProps */ .$)(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type: type,
        pattern: props.pattern
    };
    let [initialValue] = (0, react__WEBPACK_IMPORTED_MODULE_4__.useState)(value);
    var _props_defaultValue;
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .useFormReset */ .F)(ref, (_props_defaultValue = props.defaultValue) !== null && _props_defaultValue !== void 0 ? _props_defaultValue : initialValue, setValue);
    (0, _react_aria_form__WEBPACK_IMPORTED_MODULE_8__/* .useFormValidation */ .X)(props, validationState, ref);
    return {
        labelProps: labelProps,
        inputProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .v)(domProps, inputElementType === 'input' ? inputOnlyProps : undefined, {
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
            onChange: (e)=>setValue((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .getEventTarget */ .wt)(e).value),
            autoComplete: props.autoComplete,
            autoCapitalize: props.autoCapitalize,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            form: props.form,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            autoCorrect: props.autoCorrect,
            spellCheck: props.spellCheck,
            [parseInt((0, react__WEBPACK_IMPORTED_MODULE_4__).version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: props.enterKeyHint,
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


/***/ },

/***/ 17795
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FilterPopup: () => (/* binding */ FilterPopup),
  InlineFilter: () => (/* binding */ InlineFilter),
  InlineFilterAccordion: () => (/* binding */ InlineFilterAccordion),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_search_and_filter_mdx_8b3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-search-and-filter-mdx-8b3.json
const site_docs_design_patterns_search_and_filter_mdx_8b3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/search-and-filter","title":"Sökning och filtrering","description":"På denna sida beskrivs begreppen sökning och filtrering samt designmönster för respektive situation.","source":"@site/docs/design-patterns/search-and-filter.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/search-and-filter","permalink":"/pr-preview/pr-1051/design-patterns/search-and-filter","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sideBar","previous":{"title":"Read-only","permalink":"/pr-preview/pr-1051/design-patterns/read-only"},"next":{"title":"Tabeller","permalink":"/pr-preview/pr-1051/design-patterns/tables"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(86025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/index.js + 2 modules
var ThemedImage = __webpack_require__(21122);
// EXTERNAL MODULE: ./packages/components/src/search-field/SearchField.tsx + 2 modules
var search_field_SearchField = __webpack_require__(62497);
// EXTERNAL MODULE: ./packages/components/src/info-banner/InfoBanner.tsx + 2 modules
var InfoBanner = __webpack_require__(59560);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./apps/docs/src/components/examples/search-and-filter/SearchExamples.tsx
var SimpleSearchExample=function SimpleSearchExample(){var _useState=useState(''),value=_useState[0],setValue=_useState[1];var _useState2=useState(null),submittedValue=_useState2[0],setSubmittedValue=_useState2[1];return/*#__PURE__*/_jsxs("div",{className:"card",children:[/*#__PURE__*/_jsx(SearchField,{placeholder:"Skriv in s\xF6kterm",value:value,onChange:setValue,onSubmit:setSubmittedValue}),submittedValue&&/*#__PURE__*/_jsxs("p",{children:["Du s\xF6kte p\xE5: ",/*#__PURE__*/_jsx("strong",{children:submittedValue})]})]});};var NoHitsExample=function NoHitsExample(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"card",style:{display:'flex',flexDirection:'column',gap:'1rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(search_field_SearchField/* SearchField */.L,{placeholder:"S\xF6k frukt"}),/*#__PURE__*/(0,jsx_runtime.jsx)(InfoBanner/* InfoBanner */.z,{type:"info",title:"S\xF6kningen gav inga tr\xE4ffar",message:"Kontrollera stavningen och testa att ta bort filter om s\xE5dana \xE4r aktiva."})]});};
;// ./apps/docs/docs/design-patterns/search-and-filter.mdx


const frontMatter = {};
const contentTitle = 'Sökning och filtrering';

const assets = {

};






function InlineFilter() {
  const lightSrc = (0,useBaseUrl/* default */.Ay)('/img/inline-filter-light.svg');
  const darkSrc = (0,useBaseUrl/* default */.Ay)('/img/inline-filter-dark.svg');
  return (0,jsx_runtime.jsx)(ThemedImage/* default */.A, {
    alt: "Inline filter",
    sources: {
      light: lightSrc,
      dark: darkSrc
    }
  });
}
function InlineFilterAccordion() {
  const lightSrc = (0,useBaseUrl/* default */.Ay)('/img/inline-accordion-light.svg');
  const darkSrc = (0,useBaseUrl/* default */.Ay)('/img/inline-accordion-dark.svg');
  return (0,jsx_runtime.jsx)(ThemedImage/* default */.A, {
    alt: "Inline filter",
    sources: {
      light: lightSrc,
      dark: darkSrc
    }
  });
}
function FilterPopup() {
  const lightSrc = (0,useBaseUrl/* default */.Ay)('/img/filter-popover-light.svg');
  const darkSrc = (0,useBaseUrl/* default */.Ay)('/img/filter-popover-dark.svg');
  return (0,jsx_runtime.jsx)(ThemedImage/* default */.A, {
    alt: "Inline filter",
    sources: {
      light: lightSrc,
      dark: darkSrc
    }
  });
}
const toc = [{
  "value": "Sökning",
  "id": "sökning",
  "level": 2
}, {
  "value": "Inga träffar",
  "id": "inga-träffar",
  "level": 3
}, {
  "value": "Filtrering",
  "id": "filtrering",
  "level": 2
}, {
  "value": "Inline-filter",
  "id": "inline-filter",
  "level": 3
}, {
  "value": "Filter i popover",
  "id": "filter-i-popover",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "sökning-och-filtrering",
        children: "Sökning och filtrering"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "På denna sida beskrivs begreppen sökning och filtrering samt designmönster för respektive situation.\nTekniskt är det inte någon skillnad på sökning och filtrering, båda är sätt att begränsa mängden data som visas i en tabell eller en lista. Men från användarens perspektiv är detta två olika uppgifter och det är därför vi väljer att skilja på dem."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi definierar en sökning som det användaren gör innan det finns någon data att ta ställning till. Syftet med sökningen är att se vad det finns för data. En filtrering görs efter sökningen, när användaren har tillgång till datan. Syftet med filtrering är att begränsa mängden data till det som är relevant för användaren."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sökning",
      children: "Sökning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En sökning sker alltså innan det finns någon data att ta ställning till. Användaren vet inte vilka värden som finns och sökningen är därför öppen och ostrukturerad, vanligtvis formulerar användaren själv söktermen. I vissa fall krävs en avancerad sökning med flera alternativ och då använder vi samma designmönster som för filtrering."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inga-träffar",
      children: "Inga träffar"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "OBS: Det är skillnad mellan tekniskt fel och tomt resultat. Om det är ett tekniskt fel så visar vi ett felmeddelande."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "När användaren söker finns det en risk att de inte får några träffar. Om detta händer visar vi en Infobanner där träffarna skulle ha varit. I meddelandet bör vi också ge användaren konstruktiva förslag på vad de kan göra för att få träffar."
    }), "\n", (0,jsx_runtime.jsx)(NoHitsExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filtrering",
      children: "Filtrering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Till skillnad från sökning, som är mer utforskande, bygger filtrering oftast på fördefinierade värden. Användaren väljer aktivt vilka kriterier som ska gälla och kan kombinera flera filter för att begränsa träffmängden. Filtrering ska vara tydlig, kontrollerbar och göra det enkelt att förstå vilka urval som påverkar den visade datan.\nFiltreringen är därför mer styrd och användaren väljer oftast från en uppsättning av fördefinierade val."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nedan följer ett antal designmönster för filtrering i tabeller och listor"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inline-filter",
      children: "Inline-filter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inline-filter innebär att filtren placeras direkt ovanför tabellen och är alltid synliga. Detta gör det enkelt att upptäcka vilka filter som finns tillgängliga, se vilka filter som redan är aktiva samt justera flera filter på en gång utan extra interaktioner. Du kan ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/dev/tanstack-table/#filtrering",
        children: "se ett exempel på detta mönster här"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använd detta mönster när"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "du har ett fåtal filter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "användaren snabbt behöver kunna justera flera filter på en gång"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "det är viktigt att direkt kunna se vilka filter som är aktiva"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(InlineFilter, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Filtren kan vid behov läggas i en ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/accordion",
        children: "Accordion"
      }), " för att kunna fällas ihop och ta mindre plats."]
    }), "\n", (0,jsx_runtime.jsx)(InlineFilterAccordion, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filter-i-popover",
      children: "Filter i popover"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["I detta mönster öppnas filtervalen i en popover via en knapp eller en ikon. Det ger en fokuserad tabellvy och är användbart filtrering inte är användarens primära handling. Inne i popovern läggs filtren i ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/accordion",
        children: "Accordion"
      }), " som kan expanderas och fällas ihop, vilket ger en tydlig och skalbar struktur även när det är många filter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använd detta mönster när"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "filtreringen inte är en primär uppgift för de flesta användare"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "det finns många filter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "du vill kunna gruppera filter"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(FilterPopup, {})]
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



/***/ },

/***/ 19060
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ FieldError_FieldError)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
;// ./packages/components/src/field-error/FieldError.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const FieldError_module = ({"fieldError":"fieldError_K9VX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/field-error/FieldError.tsx
var FieldError_FieldError=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){var children=props.children,isInvalid=props.isInvalid;var className=(0,clsx/* default */.A)(FieldError_module.fieldError,props.className);var context=(0,react.useContext)(FieldError/* FieldErrorContext */.C);if(!context&&isInvalid&&typeof children!=='function'){return/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{className:className,children:children});}if(!(context!=null&&context.isInvalid))return null;return/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,Object.assign({},props,{ref:ref,className:className}));});FieldError_FieldError.displayName='FieldError';

/***/ },

/***/ 19615
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var dist_Text = __webpack_require__(27279);
;// ./packages/components/src/text/Text.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Text_module = ({"body":"body_Vxmv","body-small":"body-small_JwBE","description":"description_XYgX","description-small":"description-small_tno4","bold":"bold_YLmd","italic":"italic_CnUx"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","size","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var _clsx;var children=_ref.children,className=_ref.className,size=_ref.size,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var getClassName=function getClassName(){var isDescription=rest.slot==='description';if(isDescription){return size==='small'?Text_module['description-small']:Text_module['description'];}return size==='small'?Text_module['body-small']:Text_module['body'];};var textProps=Object.assign({className:(0,clsx/* default */.A)(getClassName(),(_clsx={},_clsx[Text_module.bold]=['b','strong'].includes(elementType),_clsx[Text_module.italic]=['i','em'].includes(elementType),_clsx),className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

/***/ },

/***/ 27279
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $514c0188e459b4c0$export$5f1af8db9871e1d6),
/* harmony export */   h: () => (/* binding */ $514c0188e459b4c0$export$9afb8bc826b033ea)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5933);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);



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

const $514c0188e459b4c0$export$9afb8bc826b033ea = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const $514c0188e459b4c0$export$5f1af8db9871e1d6 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Text(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $514c0188e459b4c0$export$9afb8bc826b033ea);
    let { elementType: elementType = 'span', ...domProps } = props;
    let ElementType = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT)[elementType];
    // @ts-ignore
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_1__).createElement(ElementType, {
        className: "react-aria-Text",
        ...domProps,
        ref: ref
    });
});



//# sourceMappingURL=Text.module.js.map


/***/ },

/***/ 29571
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ $fca6afa0e843324b$export$87b761675e8eaa10),
/* harmony export */   o: () => (/* binding */ $fca6afa0e843324b$export$f12b703ca79dfbb1)
/* harmony export */ });
/* harmony import */ var _context_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39892);
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92122);
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57612);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);




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
    let { locale: locale } = (0, _context_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLocale */ .Y)();
    let dictionary = $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName);
    return (0, react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>new (0, _internationalized_string__WEBPACK_IMPORTED_MODULE_2__/* .LocalizedStringFormatter */ .J)(locale, dictionary), [
        locale,
        dictionary
    ]);
}



//# sourceMappingURL=useLocalizedStringFormatter.module.js.map


/***/ },

/***/ 32373
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A3: () => (/* binding */ $4e85f108e88277b8$export$d688439359537581),
/* harmony export */   BP: () => (/* binding */ $4e85f108e88277b8$export$b085522c77523c51),
/* harmony export */   Co: () => (/* binding */ $4e85f108e88277b8$export$b0d3ecf7112093a7),
/* harmony export */   wv: () => (/* binding */ $4e85f108e88277b8$export$698f465ec27e93df)
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
const $4e85f108e88277b8$export$b0d3ecf7112093a7 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$698f465ec27e93df = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);



//# sourceMappingURL=RSPContexts.module.js.map


/***/ },

/***/ 44300
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ $ee014567cb39d3f0$export$ff05c3ac10437e03),
/* harmony export */   b: () => (/* binding */ $ee014567cb39d3f0$export$f551688fc98f2e09)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5933);
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27279);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);





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



const $ee014567cb39d3f0$export$ff05c3ac10437e03 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__.createContext)(null);
const $ee014567cb39d3f0$export$f551688fc98f2e09 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function FieldError(props, ref) {
    let validation = (0, react__WEBPACK_IMPORTED_MODULE_3__.useContext)($ee014567cb39d3f0$export$ff05c3ac10437e03);
    if (!(validation === null || validation === void 0 ? void 0 : validation.isInvalid)) return null;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__).createElement($ee014567cb39d3f0$var$FieldErrorInner, {
        ...props,
        ref: ref
    });
});
const $ee014567cb39d3f0$var$FieldErrorInner = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)((props, ref)=>{
    let validation = (0, react__WEBPACK_IMPORTED_MODULE_3__.useContext)($ee014567cb39d3f0$export$ff05c3ac10437e03);
    let domProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .filterDOMProps */ .$)(props, {
        global: true
    });
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useRenderProps */ .Sl)({
        ...props,
        defaultClassName: 'react-aria-FieldError',
        defaultChildren: validation.validationErrors.length === 0 ? undefined : validation.validationErrors.join(' '),
        values: validation
    });
    if (renderProps.children == null) return null;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_3__).createElement((0, _Text_mjs__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .E), {
        slot: "errorMessage",
        ...domProps,
        ...renderProps,
        ref: ref
    });
});



//# sourceMappingURL=FieldError.module.js.map


/***/ },

/***/ 45773
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Check)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("check", __iconNode);


//# sourceMappingURL=check.js.map


/***/ },

/***/ 48697
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ X)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("x", __iconNode);


//# sourceMappingURL=x.js.map


/***/ },

/***/ 59155
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Flag)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      key: "1jaruq"
    }
  ]
];
const Flag = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("flag", __iconNode);


//# sourceMappingURL=flag.js.map


/***/ },

/***/ 59560
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ InfoBanner)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
;// ./packages/components/src/info-banner/InfoBanner.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const InfoBanner_module = ({"infoBanner":"infoBanner_SGaB","success":"success_tp2_","info":"info_M4dU","important":"important_LJBl","warning":"warning_El6H","content":"content_DhUR","heading":"heading_iaBZ","text":"text_FCS8","icon":"icon_F71c","dismissable":"dismissable_tG9p"});
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/info-banner/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"close":"Close"},"sv":{"close":"Stäng"}}');
// EXTERNAL MODULE: ./packages/components/src/common/FeedbackStatusIcon.tsx + 1 modules
var FeedbackStatusIcon = __webpack_require__(74890);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/useControlledState.mjs
var useControlledState = __webpack_require__(8356);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/info-banner/InfoBanner.tsx
var _excluded=["title","message","type","children","isDismissable","defaultOpen","isOpen","onOpenChange"];/**
 * Displays a static message as an inline banner
 */var InfoBanner=function InfoBanner(_ref){var title=_ref.title,message=_ref.message,type=_ref.type,children=_ref.children,_ref$isDismissable=_ref.isDismissable,isDismissable=_ref$isDismissable===void 0?false:_ref$isDismissable,_ref$defaultOpen=_ref.defaultOpen,defaultOpen=_ref$defaultOpen===void 0?true:_ref$defaultOpen,controlledIsOpen=_ref.isOpen,onOpenChange=_ref.onOpenChange,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _useControlledState=(0,useControlledState/* useControlledState */.P)(controlledIsOpen,defaultOpen,onOpenChange),isOpen=_useControlledState[0],setIsOpen=_useControlledState[1];var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var handleClose=function handleClose(){setIsOpen(false);};if(!isOpen){return null;}return/*#__PURE__*/(0,jsx_runtime.jsxs)("aside",Object.assign({},rest,{className:(0,clsx/* default */.A)(InfoBanner_module.infoBanner,InfoBanner_module[type],rest.className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FeedbackStatusIcon/* FeedbackStatusIcon */.$,{"aria-hidden":true,className:InfoBanner_module.icon,status:type}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:InfoBanner_module.content,children:[title&&/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{className:InfoBanner_module.heading,children:title}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:InfoBanner_module.text,children:[message,children]})]}),isDismissable&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:InfoBanner_module.dismissable,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon","aria-label":strings.format('close'),onPress:handleClose,children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20})})})]}));};

/***/ },

/***/ 62497
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ SearchField)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Form.mjs
var Form = __webpack_require__(23128);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/SearchField.mjs + 37 modules
var dist_SearchField = __webpack_require__(91521);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.js
var search = __webpack_require__(98445);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(73413);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
;// ./packages/components/src/search-field/SearchField.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SearchField_module = ({"container":"container_o5YK","inner":"inner_lbDs","inputContainer":"inputContainer_hVqH","medium":"medium_sM7f","icon":"icon_KMPT","clear":"clear_cC1p","input":"input_Z0RI"});
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(19060);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/search-field/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"search":"Search"},"sv":{"search":"Sök"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/search-field/SearchField.tsx
'use client';var _excluded=["errorPosition","size","showButton","className","errorMessage","placeholder","validationBehavior"];function isValidationError(error){return!!(error!=null&&error.length);}var SearchField=function SearchField(_ref){var _ref2,_props$ariaLabel;var _ref$errorPosition=_ref.errorPosition,errorPosition=_ref$errorPosition===void 0?'top':_ref$errorPosition,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,showButton=_ref.showButton,className=_ref.className,errorMessage=_ref.errorMessage,placeholder=_ref.placeholder,validationBehavior=_ref.validationBehavior,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var formProps=(0,utils/* useSlottedContext */.CC)(Form/* FormContext */.c);var resolvedValidationBehavior=(_ref2=validationBehavior!=null?validationBehavior:formProps==null?void 0:formProps.validationBehavior)!=null?_ref2:'aria';var shouldShowButton=showButton!==false;var handleSubmit=function handleSubmit(value){if(!value||props.isInvalid)return;if(props.validate&&isValidationError(props.validate(value)))return;props.onSubmit==null||props.onSubmit(value);};return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_SearchField/* SearchField */.L,Object.assign({},props,{onSubmit:handleSubmit,"aria-label":(_props$ariaLabel=props['aria-label'])!=null?_props$ariaLabel:placeholder,className:(0,clsx/* default */.A)(SearchField_module.container,className),validationBehavior:resolvedValidationBehavior,children:function children(_ref3){var _clsx,_clsx2,_clsx3,_props$buttonText;var state=_ref3.state;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:function children(_ref4){var validationErrors=_ref4.validationErrors;return errorMessage!=null?errorMessage:validationErrors.join(' ');}}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:SearchField_module.inner,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(SearchField_module.inputContainer,(_clsx={},_clsx[SearchField_module.medium]=size==='medium',_clsx)),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(search/* default */.A,{size:20,className:SearchField_module.icon}),/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,{placeholder:placeholder,className:(0,clsx/* default */.A)(TextField_module/* default */.A.input,SearchField_module.input,(_clsx2={},_clsx2[SearchField_module.medium]=size==='medium',_clsx2))}),state.value.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",size:size,className:(0,clsx/* default */.A)(SearchField_module.clear,(_clsx3={},_clsx3[SearchField_module.medium]=size==='medium',_clsx3)),children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})})]}),shouldShowButton&&/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:null,excludeFromTabOrder:true,size:size,isDisabled:props.isDisabled,type:"button",onPress:function onPress(){return handleSubmit(state.value);},children:(_props$buttonText=props.buttonText)!=null?_props$buttonText:strings.format('search')})]}),errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:function children(_ref5){var validationErrors=_ref5.validationErrors;return errorMessage!=null?errorMessage:validationErrors.join(' ');}})]});}}));};

/***/ },

/***/ 63899
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ $a049562f99e7db0e$export$eb2fcfdbd7ba97d4),
/* harmony export */   t: () => (/* binding */ $a049562f99e7db0e$export$f9c6924e160136d1)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5933);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96540);




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


const $a049562f99e7db0e$export$f9c6924e160136d1 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_4__.createContext)({});
const $a049562f99e7db0e$export$eb2fcfdbd7ba97d4 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function Group(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $a049562f99e7db0e$export$f9c6924e160136d1);
    let { isDisabled: isDisabled, isInvalid: isInvalid, isReadOnly: isReadOnly, onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    isDisabled !== null && isDisabled !== void 0 ? isDisabled : isDisabled = !!props['aria-disabled'] && props['aria-disabled'] !== 'false';
    isInvalid !== null && isInvalid !== void 0 ? isInvalid : isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_2__/* .useHover */ .M)({
        onHoverStart: onHoverStart,
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd,
        isDisabled: isDisabled
    });
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria__WEBPACK_IMPORTED_MODULE_1__/* .useFocusRing */ .o)({
        within: true
    });
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useRenderProps */ .Sl)({
        ...props,
        values: {
            isHovered: isHovered,
            isFocusWithin: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: isDisabled,
            isInvalid: isInvalid
        },
        defaultClassName: 'react-aria-Group'
    });
    var _props_role, _props_slot;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_4__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT).div, {
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .mergeProps */ .v)(otherProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        role: (_props_role = props.role) !== null && _props_role !== void 0 ? _props_role : 'group',
        slot: (_props_slot = props.slot) !== null && _props_slot !== void 0 ? _props_slot : undefined,
        "data-focus-within": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-invalid": isInvalid || undefined,
        "data-readonly": isReadOnly || undefined
    }, renderProps.children);
});



//# sourceMappingURL=Group.module.js.map


/***/ },

/***/ 73413
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"textField":"textField_IarX","bottomError":"bottomError_XU77","textArea":"textArea_M6yF","input":"input_g6A6","wrap":"wrap_ljmz","medium":"medium_jalb","passwordText":"passwordText_gBIs","passwordButton":"passwordButton_kacG"});

/***/ },

/***/ 74890
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ FeedbackStatusIcon)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(45773);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(97213);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/flag.js
var flag = __webpack_require__(59155);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(418);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/common/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"ok":"okay","information":"information","importantInformation":"important information","warning":"warning"},"sv":{"ok":"okej","information":"information","importantInformation":"viktig information","warning":"varning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/common/FeedbackStatusIcon.tsx
var _excluded=["status","aria-label","size"];var icons={success:check/* default */.A,info:info/* default */.A,important:flag/* default */.A,warning:triangle_alert/* default */.A};var labels={success:'ok',info:'information',important:'importantInformation',warning:'warning'};var FeedbackStatusIcon=function FeedbackStatusIcon(_ref){var status=_ref.status,ariaLabel=_ref['aria-label'],_ref$size=_ref.size,size=_ref$size===void 0?20:_ref$size,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var Icon=icons[status];return/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,Object.assign({"aria-label":ariaLabel||strings.format(labels[status]),size:size},rest));};

/***/ },

/***/ 79950
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $3985021b0ad6602f$export$37fb8590cf2c088c),
/* harmony export */   p: () => (/* binding */ $3985021b0ad6602f$export$f5b8910cec6cf069)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5933);
/* harmony import */ var _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75127);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16133);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16638);
/* harmony import */ var react_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96540);





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



const $3985021b0ad6602f$export$37fb8590cf2c088c = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_5__.createContext)({});
let $3985021b0ad6602f$var$filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $3985021b0ad6602f$export$f5b8910cec6cf069 = /*#__PURE__*/ (0, _react_aria_collections__WEBPACK_IMPORTED_MODULE_1__/* .createHideableComponent */ .U7)(function Input(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useContextProps */ .JT)(props, ref, $3985021b0ad6602f$export$37fb8590cf2c088c);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, react_aria__WEBPACK_IMPORTED_MODULE_3__/* .useHover */ .M)({
        ...props,
        isDisabled: props.disabled
    });
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, react_aria__WEBPACK_IMPORTED_MODULE_2__/* .useFocusRing */ .o)({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useRenderProps */ .Sl)({
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
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_5__).createElement((0, _utils_mjs__WEBPACK_IMPORTED_MODULE_0__/* .dom */ .tT).input, {
        ...(0, react_aria__WEBPACK_IMPORTED_MODULE_4__/* .mergeProps */ .v)($3985021b0ad6602f$var$filterHoverProps(props), focusProps, hoverProps),
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


/***/ },

/***/ 85441
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ $2baaea4c71418dea$export$294aa081a6c6f55d)
/* harmony export */ });
/* harmony import */ var _useLabel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64887);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84137);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32217);



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

function $2baaea4c71418dea$export$294aa081a6c6f55d(props) {
    let { description: description, errorMessage: errorMessage, isInvalid: isInvalid, validationState: validationState } = props;
    let { labelProps: labelProps, fieldProps: fieldProps } = (0, _useLabel_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLabel */ .M)(props);
    let descriptionId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useSlotId */ .X1)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    let errorMessageId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useSlotId */ .X1)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    fieldProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(fieldProps, {
        'aria-describedby': [
            descriptionId,
            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
            errorMessageId,
            props['aria-describedby']
        ].filter(Boolean).join(' ') || undefined
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps,
        descriptionProps: {
            id: descriptionId
        },
        errorMessageProps: {
            id: errorMessageId
        }
    };
}



//# sourceMappingURL=useField.module.js.map


/***/ },

/***/ 97213
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Info)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59582);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("info", __iconNode);


//# sourceMappingURL=info.js.map


/***/ }

}]);