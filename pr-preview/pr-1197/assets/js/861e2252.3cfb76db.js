"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4166],{

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

/***/ 14539
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Sun)
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
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("sun", __iconNode);


//# sourceMappingURL=sun.js.map


/***/ },

/***/ 15117
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Laptop)
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
      d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
      key: "1pdavp"
    }
  ],
  ["path", { d: "M20.054 15.987H3.946", key: "14rxg9" }]
];
const Laptop = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("laptop", __iconNode);


//# sourceMappingURL=laptop.js.map


/***/ },

/***/ 32793
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ ToggleButtonGroup)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20454);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82597);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);
/* harmony import */ var _ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85468);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1160);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
var ToggleButtonGroup=function ToggleButtonGroup(_ref){var rest=Object.assign({},((0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref),_ref));return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_1__/* .ToggleButtonGroup */ .WK,Object.assign({},rest,{className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.group,rest.className)}));};

/***/ },

/***/ 74624
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_dark_mode_mdx_861_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-dark-mode-mdx-861.json
const site_docs_dev_dark_mode_mdx_861_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/dark-mode","title":"Mörkt läge","description":"Hantera mörkt läge i designsystemet","source":"@site/docs/dev/dark-mode.mdx","sourceDirName":"dev","slug":"/dev/dark-mode","permalink":"/pr-preview/pr-1197/dev/dark-mode","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Mörkt läge","description":"Hantera mörkt läge i designsystemet"},"sidebar":"sideBar","previous":{"title":"Vanliga problem","permalink":"/pr-preview/pr-1197/dev/common-issues"},"next":{"title":"Formulär","permalink":"/pr-preview/pr-1197/dev/forms"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/components/src/color-scheme-switch/ColorSchemeSwitch.tsx + 2 modules
var ColorSchemeSwitch = __webpack_require__(82483);
;// ./apps/docs/docs/dev/dark-mode.mdx


const frontMatter = {
	title: 'Mörkt läge',
	description: 'Hantera mörkt läge i designsystemet'
};
const contentTitle = 'Dark Mode / Mörkt läge';

const assets = {

};




const toc = [{
  "value": "Styr val av tema",
  "id": "styr-val-av-tema",
  "level": 2
}, {
  "value": "ColorSchemeSwitch",
  "id": "colorschemeswitch",
  "level": 3
}, {
  "value": "Tokens",
  "id": "tokens",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "dark-mode--mörkt-läge",
        children: "Dark Mode / Mörkt läge"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Midas komponenter går att använda i både ljust och mörkt tema. Det innebär att designsystemets komponenter\nkan anpassa sig till användarens inställningar för mörkt läge i operativsystemet eller webbläsaren. Detta sker\nautomatiskt om du använder vår globala stylesheet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "default.css"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{1} title=\"App.tsx (rootfilen i din app)\"",
        children: "import '@midas-ds/components/default.css'\n\nexport default function App({ children }) {\n  return <main>{children}</main>\n}\n\nexport default App\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "styr-val-av-tema",
      children: "Styr val av tema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om projektet har uppdaterat ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/components"
      }), " och använder vår globala stylesheet så följer komponenterna\nautomatiskt användarens inställningar. Om du manuellt vill styra temat, t.ex. om ert projekt inte är redo att stödja\nmörkt läge, kan du stänga av mörkt läge genom att ändra färgschemat i CSS på vilken nivå som passar projektet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        metastring: "{2}",
        children: ":root {\n  color-scheme: light;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använder du inte vår globala stylesheet kan du aktivera mörkt läge genom att definiera bägge färgscheman."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        metastring: "{2}",
        children: ":root {\n  color-scheme: light dark;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Inkludera meta-taggen ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<meta name=\"color-scheme\">"
        }), " i dokumentets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<head>"
        }), " före all CSS för att meddela webbläsaren\nvilket färgschema som sidan stödjer. Detta förhindrar att applikationen blinkar till i vitt innan rätt färgschema\nhar applicerats."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "colorschemeswitch",
      children: "ColorSchemeSwitch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vi erbjuder även en komponent för att låta användaren kontrollera val av tema i applikationen."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { ColorSchemeSwitch } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ColorSchemeSwitch />\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      className: "card",
      children: [(0,jsx_runtime.jsx)(ColorSchemeSwitch/* ColorSchemeSwitch */.v, {
        selector: "#dark-mode-target"
      }), (0,jsx_runtime.jsx)("div", {
        id: "dark-mode-target"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ColorSchemeSwitch justerar ", (0,jsx_runtime.jsx)(_components.code, {
        children: "color-scheme"
      }), " på ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":root"
      }), " som standard. Du kan justera vilken selector som ska användas\nom color-scheme i din applikation är definierad på en annan DOM-nod. Detta kan du göra genom att skicka in en egen\nselector i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "selector"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ColorSchemeSwitch selector='main' />\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Komponenten accepterar tre värden: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "light"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dark"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "light dark"
      }), " — enbart ljust läge, enbart mörkt läge eller\natt följa systemets inställningar. Default är ", (0,jsx_runtime.jsx)(_components.code, {
        children: "light dark"
      }), ". Om du vill att ett specifikt tema är förvalt\nkan du skicka in standardvärdet direkt i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "defaultScheme"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ColorSchemeSwitch defaultScheme='dark' />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tokens",
      children: "Tokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Du kan fortfarande använda tokens för att importera färger på egen hand. Observera dock att vissa tokens har\nfasta värden och inte är dynamiska för ljust/mörkt läge. För att få en färg som anpassar sig behöver du importera\nen semantisk token."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { variables } from '@midas-ds/theme'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{1,2,5}",
        children: "<div style={{ backgroundColor: variables.backgroundBase }}>\n  <p style={{ color: variables.textPrimary }}>\n    En text som är mörk i ljust läge men ljus i mörkt läge\n    på en bakgrund som gör tvärt om!\n  </p>\n  <p style={{ color: variables.colorBlackBase }}>En text som alltid är svart</p>\n</div>\n"
      })
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

/***/ 82483
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ ColorSchemeSwitch)
});

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/laptop.js
var laptop = __webpack_require__(15117);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/sun.js
var sun = __webpack_require__(14539);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/moon.js
var moon = __webpack_require__(88676);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(87979);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/SelectionIndicator.mjs
var SelectionIndicator = __webpack_require__(70291);
// EXTERNAL MODULE: ./packages/components/src/toggle-button/ToggleButtonGroup.tsx
var ToggleButtonGroup = __webpack_require__(32793);
// EXTERNAL MODULE: ./packages/components/src/toggle-button/ToggleButton.tsx
var ToggleButton = __webpack_require__(86974);
;// ./packages/components/src/color-scheme-switch/ColorSchemeSwitch.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ColorSchemeSwitch_module = ({"button":"button_XTm0","selectionIndicator":"selectionIndicator_zTl_"});
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/color-scheme-switch/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"darkMode":"Dark Mode","lightMode":"Light Mode","system":"System Setting"},"sv":{"darkMode":"Mörkt läge","lightMode":"Ljust läge","system":"Systeminställning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/color-scheme-switch/ColorSchemeSwitch.tsx
'use client';var ColorSchemeSwitch=function ColorSchemeSwitch(_ref){var _ref$selector=_ref.selector,selector=_ref$selector===void 0?':root':_ref$selector,_ref$defaultScheme=_ref.defaultScheme,defaultScheme=_ref$defaultScheme===void 0?'light dark':_ref$defaultScheme,defaultValue=_ref.defaultValue,className=_ref.className;var _React$useState=react.useState(defaultValue!=null?defaultValue:new Set([defaultScheme])),colorScheme=_React$useState[0],setColorScheme=_React$useState[1];react.useEffect(function(){var targetElement=document.querySelector(selector);if(targetElement){var scheme=Array.from(colorScheme).join(' ');targetElement.style.removeProperty('color-scheme');if(scheme==='light dark'){delete targetElement.dataset.colorScheme;}else{targetElement.dataset.colorScheme=scheme;}}else{console.warn("No element found for selector: \""+selector+"\"");}},[colorScheme,selector]);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)(ToggleButtonGroup/* ToggleButtonGroup */.W,{selectionMode:"single",selectedKeys:colorScheme,onSelectionChange:setColorScheme,disallowEmptySelection:true,className:className,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(ToggleButton/* ToggleButton */.f,{id:"light dark",className:ColorSchemeSwitch_module.button,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(laptop/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:strings.format('system')}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectionIndicator/* SelectionIndicator */.i,{className:ColorSchemeSwitch_module.selectionIndicator})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(ToggleButton/* ToggleButton */.f,{id:"light",className:ColorSchemeSwitch_module.button,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(sun/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:strings.format('lightMode')}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectionIndicator/* SelectionIndicator */.i,{className:ColorSchemeSwitch_module.selectionIndicator})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(ToggleButton/* ToggleButton */.f,{id:"dark",className:ColorSchemeSwitch_module.button,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(moon/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:strings.format('darkMode')}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectionIndicator/* SelectionIndicator */.i,{className:ColorSchemeSwitch_module.selectionIndicator})]})]});};

/***/ },

/***/ 85468
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"group":"group_RECg","toggleButton":"toggleButton_vLWl"});

/***/ },

/***/ 86974
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ ToggleButton)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20454);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76754);
/* harmony import */ var _button_Button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86707);
/* harmony import */ var _ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85468);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1160);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
var ToggleButton=function ToggleButton(_ref){var rest=Object.assign({},((0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref),_ref));return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_1__/* .ToggleButton */ .f,Object.assign({},rest,{className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_button_Button_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.button,_button_Button_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.iconBtn,_ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.toggleButton,rest.className)}));};

/***/ },

/***/ 88676
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Moon)
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
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
const Moon = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("moon", __iconNode);


//# sourceMappingURL=moon.js.map


/***/ }

}]);