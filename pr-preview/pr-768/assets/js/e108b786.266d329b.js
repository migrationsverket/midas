"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8714],{

/***/ 7344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ iconMap)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45773);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97213);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59155);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(418);
var iconMap={success:lucide_react__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,info:lucide_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,important:lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,warning:lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A};

/***/ }),

/***/ 11046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ Accordion)
});

// UNUSED EXPORTS: ACCORDION_TEST_ID

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/accordion/Accordion.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Accordion_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--text-disabled":"light-dark(#bfbfbf, #525252)","root":"root_dwc1","contained":"contained_snuo","triggerButton":"triggerButton_v7ly"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(48569);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(45644);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/accordion/Accordion.tsx
'use client';var _excluded=["variant","children","className","isContained"];var ACCORDION_TEST_ID='accordion';/**
 * Accordions help reduce visual clutter on a page by organizing content into collapsible sections.
 */var Accordion=function Accordion(_ref){var variant=_ref.variant,children=_ref.children,className=_ref.className,isContainedFromProp=_ref.isContained,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var isContained=isContainedFromProp||variant==='contained';return/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionContext/* AccordionContext */.C.Provider,{value:{isContained:isContained},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Disclosure/* DisclosureGroup */.Tw,Object.assign({"data-testid":ACCORDION_TEST_ID,className:(0,clsx/* default */.A)(Accordion_module.root,isContained?Accordion_module.contained:Accordion_module.uncontained,className)},props,{children:children}))});};

/***/ }),

/***/ 45644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ AccordionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var AccordionContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

/***/ }),

/***/ 47271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
const site_docs_basics_principles_mdx_e10_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"basics/principles","title":"Designprinciper","description":"Generella designprinciper","source":"@site/docs/basics/principles.mdx","sourceDirName":"basics","slug":"/basics/principles","permalink":"/pr-preview/pr-768/basics/principles","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Designprinciper","sidebar_position":1,"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
	sidebar_position: 1,
	pagination_prev: null,
	pagination_next: null
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



/***/ }),

/***/ 54031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86707);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65014);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["variant","fullwidth","className","iconPlacement","size","icon","iconSize"];/**
 * Button to perform various actions.
 *
 * @interface MidasButton
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */var Button=function Button(_ref){var _ref$variant=_ref.variant,variant=_ref$variant===void 0?'primary':_ref$variant,fullwidth=_ref.fullwidth,className=_ref.className,iconPlacement=_ref.iconPlacement,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,IconComponent=_ref.icon,iconSize=_ref.iconSize,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.button,variant==='primary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.primary,variant==='secondary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.secondary,variant==='tertiary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.tertiary,variant==='danger'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.danger,variant==='icon'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.iconBtn,fullwidth&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fullwidth,size==='medium'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.medium,iconPlacement==='right'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.iconRight,className)},rest,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[IconComponent&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IconComponent,{"aria-hidden":true,size:iconSize!=null?iconSize:20}),rest.children]})}));};

/***/ }),

/***/ 86707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--button-background-primary-hover":"light-dark(#25607f, #25607f)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--icon-primary":"light-dark(#171717, #f2f2f2)","--button-background-primary-active":"light-dark(#2e7ca5, #143c50)","--button-background-secondary":"light-dark(#ffffff, #171717)","--font-size-30":"1rem","--text-on-color":"light-dark(#ffffff, #ffffff)","--button-border-secondary":"light-dark(light-dark(#143c50, #2e7ca5), #f2f2f2)","--button-background-secondary-hover":"light-dark(#e6e6e6, #212121)","--button-background-disabled":"light-dark(#f2f2f2, #262626)","--white":"#ffffff","--border-disabled":"light-dark(#bfbfbf, #525252)","--button-background-secondary-active":"light-dark(#d9d9d9, #262626)","--button-background-tertiary-hover":"light-dark(#e6e6e6, #212121)","--button-background-tertiary-active":"light-dark(#d9d9d9, #262626)","--text-tertiary":"light-dark(#143c50, #f2f2f2)","--button-background-danger":"light-dark(#e62323, #e62323)","--button-background-danger-hover":"light-dark(#bc1d1d, #bc1d1d)","--text-disabled":"light-dark(#bfbfbf, #525252)","--button-background-danger-active":"light-dark(#7d1313, #7d1313)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--button-background-icon-hover":"light-dark(rgba(0 0 0 / 10%), rgba(255 255 255 / 10%))","--button-background-icon-active":"light-dark(rgba(0 0 0 / 20%), rgba(255 255 255 / 20%))","--size-50":"0.625rem","--size-70":"0.875rem","--size-80":"1rem","--size-100":"1.5rem","--size-130":"2.5rem","--size-150":"3rem","--line-height-30":"1.25rem","button":"button_RcXK","secondary":"secondary_h5I_","tertiary":"tertiary_xq7E","iconBtn":"iconBtn__8qK","medium":"medium_uqO9","danger":"danger_iFp6","iconRight":"iconRight_iW1e","fullwidth":"fullwidth_WWNT","primary":"primary_JNNk"});

/***/ }),

/***/ 93683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ Heading)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Heading.mjs
var dist_Heading = __webpack_require__(57936);
;// ./packages/components/src/heading/Heading.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Heading_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--font-size-30":"1rem","--font-size-40":"1.125rem","--font-size-50":"1.25rem","--font-size-90":"2.25rem","--line-height-50":"1.5rem","--line-height-60":"1.75rem","--line-height-70":"2rem","h1":"h1_fQIH","h2":"h2_fBmz","h3":"h3_xOF5","h4":"h4_AF6p","h5":"h5_slY8","h6":"h6_loS0"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/heading/Heading.tsx
var _excluded=["children","className","isExpressive","level","elementType"];var Heading=function Heading(_ref){var children=_ref.children,className=_ref.className,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$level=_ref.level,level=_ref$level===void 0?3:_ref$level,elementType=_ref.elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var semanticLevel=elementType&&parseInt(elementType.split('h')[1]);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Heading/* Heading */.D,Object.assign({level:semanticLevel||level,className:(0,clsx/* default */.A)([Heading_module.h1,Heading_module.h2,Heading_module.h3,Heading_module.h4,Heading_module.h5,Heading_module.h6][level-1],className)},isExpressive&&{'data-expressive':true},rest,{children:children}));};

/***/ }),

/***/ 93777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccordionItem)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/common/icon-map.ts
var icon_map = __webpack_require__(7344);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(48569);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/accordion/AccordionItem.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const AccordionItem_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--layer-01":"light-dark(#f2f2f2, #262626)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--normal-transition":"300ms","--text-primary":"light-dark(#171717, #f2f2f2)","--fast-transition":"250ms","--border-secondary":"light-dark(#737373, #8c8c8c)","--support-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--support-border-success":"light-dark(#008d3c, #008d3c)","--support-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--support-border-warning":"light-dark(#e62323, #e62323)","--icon-success":"light-dark(#008d3c, #008d3c)","--icon-warning":"light-dark(#e62323, #e62323)","--support-background-success-hover":"light-dark(#bae5c5, light-dark(#e6e6e6, #333333))","--support-background-warning-hover":"light-dark(#fcc8c8, light-dark(#e6e6e6, #333333))","--border-disabled":"light-dark(#bfbfbf, #525252)","--text-disabled":"light-dark(#bfbfbf, #525252)","--layer-02":"light-dark(#ffffff, #383838)","--background":"light-dark(#ffffff, #171717)","--support-background-info":"light-dark(#eaf2f6, light-dark(#f2f2f2, #262626))","--support-border-info":"light-dark(#0066cc, #0066cc)","--icon-info":"light-dark(#0066cc, #0066cc)","--support-background-info-hover":"light-dark(#d5e5ed, light-dark(#e6e6e6, #333333))","--support-background-important":"light-dark(#fff8e1, light-dark(#f2f2f2, #262626))","--support-border-important":"light-dark(#fdb813, #fdb813)","--icon-important":"light-dark(#fdb813, #fdb813)","--support-background-important-hover":"light-dark(#FFEBA8, light-dark(#e6e6e6, #333333))","item":"item_VttG","contained":"contained_ub98","success":"success_cpFV","warning":"warning_NxFE","info":"info_suK1","important":"important_n_K6","triggerButton":"triggerButton_En7k","triggerText":"triggerText_VvwO","trigger":"trigger_dCCq","triggerMainContent":"triggerMainContent_WoSV","chevronIcon":"chevronIcon_kSND","statusIcon":"statusIcon_DtWQ","panel":"panel_RCRU","content":"content_EuZw","hasBackground":"hasBackground_E4qK","header":"header_kp5y"});
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(93683);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(45644);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/accordion/AccordionItem.tsx
var _excluded=["title","children","className","headingLevel","type","hasBackground","isContained"];var AccordionItem=function AccordionItem(_ref){var _ref2;var title=_ref.title,children=_ref.children,className=_ref.className,_ref$headingLevel=_ref.headingLevel,headingLevel=_ref$headingLevel===void 0?'h2':_ref$headingLevel,type=_ref.type,_ref$hasBackground=_ref.hasBackground,hasBackground=_ref$hasBackground===void 0?true:_ref$hasBackground,isContainedFromProp=_ref.isContained,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var context=(0,react.useContext)(AccordionContext/* AccordionContext */.C);var isContained=(_ref2=isContainedFromProp!=null?isContainedFromProp:context==null?void 0:context.isContained)!=null?_ref2:false;var titleIsReactNode=typeof title==='object';(0,react.useEffect)(function(){if(type&&!isContained){console.warn("AccordionItem: When 'type' is set, it is recommended to also set 'isContained' to true for visual consistency.");}},[type,isContained]);var Icon=type?icon_map/* iconMap */.K[type]:null;var renderedIcon=Icon?/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{size:20,className:AccordionItem_module.statusIcon}):null;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Disclosure/* Disclosure */.EN,Object.assign({},props,{className:(0,clsx/* default */.A)(AccordionItem_module.item,type&&AccordionItem_module[type],isContained&&AccordionItem_module.contained,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:AccordionItem_module.trigger,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* Button */.$,{className:AccordionItem_module.triggerButton,slot:"trigger",variant:"icon",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20,className:AccordionItem_module.chevronIcon}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:AccordionItem_module.triggerMainContent,children:titleIsReactNode?title:/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{level:3,elementType:headingLevel,className:AccordionItem_module.triggerText,children:title})}),renderedIcon]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Disclosure/* DisclosurePanel */.kS,{className:AccordionItem_module.panel,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(AccordionItem_module.content,hasBackground&&AccordionItem_module.hasBackground),children:children})})]}));};

/***/ })

}]);