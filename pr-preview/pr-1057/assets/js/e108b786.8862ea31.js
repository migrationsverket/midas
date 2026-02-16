"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8714],{

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

/***/ 11046
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ Accordion)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/accordion/Accordion.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Accordion_module = ({"root":"root_dwc1","contained":"contained_snuo","triggerButton":"triggerButton_v7ly"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(48569);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(45644);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/accordion/Accordion.tsx
'use client';var _excluded=["children","className","isContained","size"];/**
 * @deprecated since v 16.4.1 please use AccordionProps instead
 *//**
 * Accordions help reduce visual clutter on a page by organizing content into collapsible sections.
 */var Accordion=function Accordion(_ref){var children=_ref.children,className=_ref.className,isContained=_ref.isContained,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionContext/* AccordionContext */.C.Provider,{value:{isContained:isContained,size:size},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Disclosure/* DisclosureGroup */.Tw,Object.assign({className:(0,clsx/* default */.A)(Accordion_module.root,isContained?Accordion_module.contained:Accordion_module.uncontained,className)},props,{children:children}))});};

/***/ },

/***/ 17460
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ $e9faafb641e167db$export$90fc3a17d93f704c)
/* harmony export */ });
/* harmony import */ var _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7049);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);



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

function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler, options) {
    let handleEvent = (0, _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useEffectEvent */ .J)(handler);
    let isDisabled = handler == null;
    (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isDisabled || !ref.current) return;
        let element = ref.current;
        element.addEventListener(event, handleEvent, options);
        return ()=>{
            element.removeEventListener(event, handleEvent, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled
    ]);
}



//# sourceMappingURL=useEvent.module.js.map


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

/***/ 45644
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ AccordionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var AccordionContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

/***/ },

/***/ 47271
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_basics_principles_mdx_e10_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-basics-principles-mdx-e10.json
const site_docs_basics_principles_mdx_e10_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"basics/principles","title":"Designprinciper","description":"Generella designprinciper","source":"@site/docs/basics/principles.mdx","sourceDirName":"basics","slug":"/basics/principles","permalink":"/pr-preview/pr-1057/basics/principles","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Designprinciper","sidebar_position":1},"sidebar":"sideBar","previous":{"title":"Designa","permalink":"/pr-preview/pr-1057/get-started/designer"},"next":{"title":"Tokens","permalink":"/pr-preview/pr-1057/basics/tokens"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx + 1 modules
var Accordion = __webpack_require__(11046);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx + 1 modules
var AccordionItem = __webpack_require__(93777);
;// ./apps/docs/docs/basics/principles.mdx


const frontMatter = {
	title: 'Designprinciper',
	sidebar_position: 1
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Generella designprinciper",
  "id": "generella-designprinciper",
  "level": 2
}, {
  "value": "Designprinciper för extern webbplats",
  "id": "designprinciper-för-extern-webbplats",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "generella-designprinciper",
      children: "Generella designprinciper"
    }), "\n", (0,jsx_runtime.jsxs)(Accordion/* Accordion */.n, {
      variant: "contained",
      allowsMultipleExpanded: true,
      children: [(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "1",
        title: "Utgå från målgruppens behov",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Om du inte vet vilka användarna är och vilka behov de har kommer du inte bygga rätt sak. Gör inga antaganden.\nUtforska, gör användarstudier och analysera data."
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "2",
        title: "Etisk och inkluderande design",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Det vi bygger ska fungera för alla. Tillgänglighet och användbarhet står i första rummet. De som är i störst behov\nav våra tjänster är ofta de personer som har svårast att använda dem. Arbeta inkluderande och prioritera att våra\nsystem och tjänster ska kunna användas av alla."
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "3",
        title: "Helhet",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Ha förståelse för kontexten. Vi designar flöden, kundresor och tjänster, inte enstaka webbplatser. En tjänst är\nnågot som hjälper människor att göra något. Vårt jobb är att ta reda på i vilka sammanhang våra användare befinner\nsig i och skapa tjänster som tar hänsyn till dessa."
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "4",
        title: "Iterera",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Arbeta med ständiga förbättringar. Vi är aldrig klara med något; allt kan alltid bli lite bättre. Det bästa sättet\natt bygga bra tjänster är att börja smått, testa med användare och iterera. Om och om igen. Om en prototyp eller\nskiss inte fungerar, var inte rädd för att skrota den och börja om. Misslyckas tidigt och gör om."
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "5",
        title: "Datadrivet arbetssätt",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Tillämpa alltid ett datadrivet arbetssätt. Gissa inte - ta beslut utifrån fakta. Detta gäller både under analysfasen\noch utvecklingsfasen, men också när en tjänst eller ett system är lanserat. Gör fältstudier, intervjua användare,\nanalysera hur liknande tjänster ser ut och används. Testa skisser och prototyper med representanter ur målgruppen.\nAnvänd analysverktyg för att se hur en tjänst fungerar i drift och var eventuella problem eller flaskhalsar uppstår."
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "6",
        title: "Arbeta enligt en designorienterad process",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Design bygger på att kontinuerligt involvera användare i designprocessen för att se till att lösningen blir lätt att\nanvända för målgruppen. Det är en iterativ process som består av fyra delar: utforska målgruppen och\nanvändningssituationen, definiera målgruppen behov och mål med användningen, utforma och utforska lösningsidéer,\nspecificera lösningar och testa med målgruppen."
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "7",
        title: "Enhetlighet",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Det är viktigt att våra användare känner igen sig i mötet med Migrationsverket. Det skapar förtroende och trygghet.\nDärför strävar vi efter enhetlighet. Var konsekvent när det gäller designmönster, grafiskt uttryck och språklig\ntonalitet - även mellan olika tjänster och system."
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "designprinciper-för-extern-webbplats",
      children: "Designprinciper för extern webbplats"
    }), "\n", (0,jsx_runtime.jsxs)(Accordion/* Accordion */.n, {
      variant: "contained",
      allowsMultipleExpanded: true,
      children: [(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "8",
        title: "De sökande först",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Vi sätter de sökandes behov först och kompromissar inte på deras bekostnad."
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "9",
        title: "Tydlig guidning",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Vi guidar användarna med utgångspunkt i vem de är och vilken situation de befinner sig i just nu. De är experter på\nsin situation, inte på Migrationsverkets processer. Vi ger dem möjlighet att avgränsa information och fördjupa sig\nvid behov."
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "10",
        title: "Trygghet genom hela processen",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Vi vill att användarna ska känna sig trygga och ha förtroende för Migrationsverket. Den tilliten bygger vi bland\nannat genom att vara transparenta med vad som händer och ge tydlig information om status i ärenden."
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "11",
        title: "Mobilt först",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Majoriteten av våra användare besöker vår webbplats via sina mobiltelefoner. Genom att designa för mobilanvändning\nförst så tvingas vi prioritera och förenkla för att skapa en bra användarupplevelse. Det är enklare att skala upp\ntill större format än att skala ner till ett mindre format."
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "12",
        title: "Inkluderande design",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Vi designar för tillgänglighet, mångfald och med respekt för olika kognitiva förmågor och livssituationer. Det gör\nvi bland annat genom en medveten visuell tonalitet med fokus på tydlighet."
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "13",
        title: "Ett språk anpassat efter användaren",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Vi skriver vårdat, enkelt och begripligt med ett språk anpassat efter användarens behov. Vi erbjuder förklaringar av\nbegrepp när det behövs."
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "14",
        title: "Enhetlig användarupplevelse",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Vi skapar en sammanhängande upplevelse genom konsekvent användning av element, komponenter och designmönster, så att\nanvändaren kan känna igen sig genom hela användarresan."
        })
      }), (0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A, {
        id: "15",
        title: "Enkelt att orientera sig",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Vi vet att en stor del av våra användare landar på någon av våra undersidor via sökmotorer eller länkar. Därför\nbehöver vi på varje sida ge dem möjlighet att orientera sig och förstå var de hamnat. Det gör vi till exempel med\nhjälp av brödsmulor, tydliga rubriker, ingresser samt lokal och global navigering."
        })
      })]
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

/***/ 93683
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ Heading)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Heading.mjs
var dist_Heading = __webpack_require__(57936);
;// ./packages/components/src/heading/Heading.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Heading_module = ({"h1":"h1_fQIH","h2":"h2_fBmz","h3":"h3_xOF5","h4":"h4_AF6p","h5":"h5_slY8","h6":"h6_loS0"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/heading/Heading.tsx
var _excluded=["children","className","enableMargins","isExpressive","level","elementType"];var Heading=function Heading(_ref){var children=_ref.children,className=_ref.className,_ref$enableMargins=_ref.enableMargins,enableMargins=_ref$enableMargins===void 0?false:_ref$enableMargins,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$level=_ref.level,level=_ref$level===void 0?3:_ref$level,elementType=_ref.elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var semanticLevel=elementType&&parseInt(elementType.split('h')[1]);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Heading/* Heading */.D,Object.assign({level:semanticLevel||level,className:(0,clsx/* default */.A)([Heading_module.h1,Heading_module.h2,Heading_module.h3,Heading_module.h4,Heading_module.h5,Heading_module.h6][level-1],className)},isExpressive&&{'data-expressive':true},enableMargins&&{'data-margin':true},rest,{children:children}));};

/***/ },

/***/ 93777
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccordionItem)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(48569);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
;// ./packages/components/src/accordion/AccordionItem.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const AccordionItem_module = ({"item":"item_VttG","contained":"contained_ub98","medium":"medium_WM8r","success":"success_cpFV","warning":"warning_NxFE","info":"info_suK1","important":"important_n_K6","triggerButton":"triggerButton_En7k","triggerText":"triggerText_VvwO","trigger":"trigger_dCCq","triggerMainContent":"triggerMainContent_WoSV","\t":"\t_YXX_","chevronIcon":"chevronIcon_kSND","statusIcon":"statusIcon_DtWQ","panel":"panel_RCRU","content":"content_EuZw","hasBackground":"hasBackground_E4qK","header":"header_kp5y"});
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(93683);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(45644);
// EXTERNAL MODULE: ./packages/components/src/common/FeedbackStatusIcon.tsx + 1 modules
var FeedbackStatusIcon = __webpack_require__(74890);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/accordion/AccordionItem.tsx
var _excluded=["title","children","className","headingLevel","type","hasBackground","size","isContained","iconAriaLabel"];var AccordionItem=function AccordionItem(_ref){var _ref2;var title=_ref.title,children=_ref.children,className=_ref.className,_ref$headingLevel=_ref.headingLevel,headingLevel=_ref$headingLevel===void 0?'h2':_ref$headingLevel,type=_ref.type,_ref$hasBackground=_ref.hasBackground,hasBackground=_ref$hasBackground===void 0?true:_ref$hasBackground,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,isContainedFromProp=_ref.isContained,iconAriaLabel=_ref.iconAriaLabel,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var context=(0,react.useContext)(AccordionContext/* AccordionContext */.C);var isContained=(_ref2=isContainedFromProp!=null?isContainedFromProp:context==null?void 0:context.isContained)!=null?_ref2:false;var titleIsReactNode=typeof title==='object';(0,react.useEffect)(function(){if(type&&!isContained){console.warn("AccordionItem: When 'type' is set, it is recommended to also set 'isContained' to true for visual consistency.");}},[type,isContained]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Disclosure/* Disclosure */.EN,Object.assign({},props,{className:(0,clsx/* default */.A)(AccordionItem_module.item,type&&AccordionItem_module[type],(size==='medium'||(context==null?void 0:context.size)==='medium')&&AccordionItem_module.medium,isContained&&AccordionItem_module.contained,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:AccordionItem_module.trigger,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* Button */.$,{className:AccordionItem_module.triggerButton,slot:"trigger",variant:"icon",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20,className:AccordionItem_module.chevronIcon}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:AccordionItem_module.triggerMainContent,children:titleIsReactNode?title:/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{level:3,elementType:headingLevel,className:AccordionItem_module.triggerText,children:title})}),type&&/*#__PURE__*/(0,jsx_runtime.jsx)(FeedbackStatusIcon/* FeedbackStatusIcon */.$,{"aria-label":iconAriaLabel,className:AccordionItem_module.statusIcon,status:type})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Disclosure/* DisclosurePanel */.kS,{className:AccordionItem_module.panel,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(AccordionItem_module.content,hasBackground&&AccordionItem_module.hasBackground),children:children})})]}));};

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