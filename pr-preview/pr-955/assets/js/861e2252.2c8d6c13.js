"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4166],{

/***/ 2214:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ $4547d1bf40011fdf$export$dd5580ae642f110f),
  O: () => (/* binding */ $4547d1bf40011fdf$export$bc53712daae3d6e6)
});

// EXTERNAL MODULE: ./node_modules/@react-aria/button/dist/useToggleButton.mjs
var useToggleButton = __webpack_require__(89869);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs + 1 modules
var FocusScope = __webpack_require__(49336);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var useLayoutEffect = __webpack_require__(49953);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
;// ./node_modules/@react-aria/toolbar/dist/useToolbar.mjs





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



function $2680b1829e803644$export$fa142eb1681c520(props, ref) {
    const { 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, orientation: orientation = 'horizontal' } = props;
    let [isInToolbar, setInToolbar] = (0, react.useState)(false);
    // should be safe because re-calling set state with the same value it already has is a no-op
    // this will allow us to react should a parent re-render and change its role though
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, useLayoutEffect/* useLayoutEffect */.N)(()=>{
        var _ref_current_parentElement;
        setInToolbar(!!(ref.current && ((_ref_current_parentElement = ref.current.parentElement) === null || _ref_current_parentElement === void 0 ? void 0 : _ref_current_parentElement.closest('[role="toolbar"]'))));
    });
    const { direction: direction } = (0, context/* useLocale */.Y)();
    const shouldReverse = direction === 'rtl' && orientation === 'horizontal';
    let focusManager = (0, FocusScope/* createFocusManager */.C7)(ref);
    const onKeyDown = (e)=>{
        // don't handle portalled events
        if (!e.currentTarget.contains(e.target)) return;
        if (orientation === 'horizontal' && e.key === 'ArrowRight' || orientation === 'vertical' && e.key === 'ArrowDown') {
            if (shouldReverse) focusManager.focusPrevious();
            else focusManager.focusNext();
        } else if (orientation === 'horizontal' && e.key === 'ArrowLeft' || orientation === 'vertical' && e.key === 'ArrowUp') {
            if (shouldReverse) focusManager.focusNext();
            else focusManager.focusPrevious();
        } else if (e.key === 'Tab') {
            // When the tab key is pressed, we want to move focus
            // out of the entire toolbar. To do this, move focus
            // to the first or last focusable child, and let the
            // browser handle the Tab key as usual from there.
            e.stopPropagation();
            lastFocused.current = document.activeElement;
            if (e.shiftKey) focusManager.focusFirst();
            else focusManager.focusLast();
            return;
        } else // if we didn't handle anything, return early so we don't preventDefault
        return;
        // Prevent arrow keys from being handled by nested action groups.
        e.stopPropagation();
        e.preventDefault();
    };
    // Record the last focused child when focus moves out of the toolbar.
    const lastFocused = (0, react.useRef)(null);
    const onBlur = (e)=>{
        if (!e.currentTarget.contains(e.relatedTarget) && !lastFocused.current) lastFocused.current = e.target;
    };
    // Restore focus to the last focused child when focus returns into the toolbar.
    // If the element was removed, do nothing, either the first item in the first group,
    // or the last item in the last group will be focused, depending on direction.
    const onFocus = (e)=>{
        var _ref_current;
        if (lastFocused.current && !e.currentTarget.contains(e.relatedTarget) && ((_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.contains(e.target))) {
            var _lastFocused_current;
            (_lastFocused_current = lastFocused.current) === null || _lastFocused_current === void 0 ? void 0 : _lastFocused_current.focus();
            lastFocused.current = null;
        }
    };
    return {
        toolbarProps: {
            ...(0, filterDOMProps/* filterDOMProps */.$)(props, {
                labelable: true
            }),
            role: !isInToolbar ? 'toolbar' : 'group',
            'aria-orientation': orientation,
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabel == null ? ariaLabelledBy : undefined,
            onKeyDownCapture: !isInToolbar ? onKeyDown : undefined,
            onFocusCapture: !isInToolbar ? onFocus : undefined,
            onBlurCapture: !isInToolbar ? onBlur : undefined
        }
    };
}



//# sourceMappingURL=useToolbar.module.js.map

;// ./node_modules/@react-aria/button/dist/useToggleButtonGroup.mjs



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

function $4547d1bf40011fdf$export$dd5580ae642f110f(props, state, ref) {
    let { isDisabled: isDisabled } = props;
    let { toolbarProps: toolbarProps } = (0, $2680b1829e803644$export$fa142eb1681c520)(props, ref);
    return {
        groupProps: {
            ...toolbarProps,
            role: state.selectionMode === 'single' ? 'radiogroup' : toolbarProps.role,
            'aria-disabled': isDisabled
        }
    };
}
function $4547d1bf40011fdf$export$bc53712daae3d6e6(props, state, ref) {
    let toggleState = {
        isSelected: state.selectedKeys.has(props.id),
        defaultSelected: false,
        setSelected (isSelected) {
            state.setSelected(props.id, isSelected);
        },
        toggle () {
            state.toggleKey(props.id);
        }
    };
    let { isPressed: isPressed, isSelected: isSelected, isDisabled: isDisabled, buttonProps: buttonProps } = (0, useToggleButton/* useToggleButton */.q)({
        ...props,
        id: undefined,
        isDisabled: props.isDisabled || state.isDisabled
    }, toggleState, ref);
    if (state.selectionMode === 'single') {
        buttonProps.role = 'radio';
        buttonProps['aria-checked'] = toggleState.isSelected;
        delete buttonProps['aria-pressed'];
    }
    return {
        isPressed: isPressed,
        isSelected: isSelected,
        isDisabled: isDisabled,
        buttonProps: buttonProps
    };
}



//# sourceMappingURL=useToggleButtonGroup.module.js.map


/***/ }),

/***/ 15117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Laptop)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.525.0 - ISC
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


/***/ }),

/***/ 20454:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _objectDestructuringEmpty)
/* harmony export */ });
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}


/***/ }),

/***/ 32793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ 51623:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ $3017fa7ffdddec74$export$8042c6c013fd5226)
/* harmony export */ });
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8356);
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

function $3017fa7ffdddec74$export$8042c6c013fd5226(props = {}) {
    let { isReadOnly: isReadOnly } = props;
    // have to provide an empty function so useControlledState doesn't throw a fit
    // can't use useControlledState's prop calling because we need the event object from the change
    let [isSelected, setSelected] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__/* .useControlledState */ .P)(props.isSelected, props.defaultSelected || false, props.onChange);
    let [initialValue] = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(isSelected);
    function updateSelected(value) {
        if (!isReadOnly) setSelected(value);
    }
    function toggleState() {
        if (!isReadOnly) setSelected(!isSelected);
    }
    var _props_defaultSelected;
    return {
        isSelected: isSelected,
        defaultSelected: (_props_defaultSelected = props.defaultSelected) !== null && _props_defaultSelected !== void 0 ? _props_defaultSelected : initialValue,
        setSelected: updateSelected,
        toggle: toggleState
    };
}



//# sourceMappingURL=useToggleState.module.js.map


/***/ }),

/***/ 63482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
const site_docs_dev_dark_mode_mdx_861_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/dark-mode","title":"Mörkt läge","description":"Hantera mörkt läge i designsystemet","source":"@site/docs/dev/dark-mode.mdx","sourceDirName":"dev","slug":"/dev/dark-mode","permalink":"/pr-preview/pr-955/dev/dark-mode","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Mörkt läge","description":"Hantera mörkt läge i designsystemet","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/laptop.js
var laptop = __webpack_require__(15117);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(84722);
;// ./node_modules/lucide-react/dist/esm/icons/sun.js
/**
 * @license lucide-react v0.525.0 - ISC
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
const Sun = (0,createLucideIcon/* default */.A)("sun", __iconNode);


//# sourceMappingURL=sun.js.map

;// ./node_modules/lucide-react/dist/esm/icons/moon.js
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const moon_iconNode = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
];
const Moon = (0,createLucideIcon/* default */.A)("moon", moon_iconNode);


//# sourceMappingURL=moon.js.map

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(87979);
// EXTERNAL MODULE: ./packages/components/src/toggle-button/ToggleButtonGroup.tsx
var ToggleButtonGroup = __webpack_require__(32793);
// EXTERNAL MODULE: ./packages/components/src/toggle-button/ToggleButton.tsx + 1 modules
var ToggleButton = __webpack_require__(88693);
;// ./packages/components/src/color-scheme-switch/ColorSchemeSwitch.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ColorSchemeSwitch_module = ({"button":"button_XTm0"});
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/color-scheme-switch/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"darkMode":"Dark Mode","lightMode":"Light Mode","system":"System Setting"},"sv":{"darkMode":"Mörkt läge","lightMode":"Ljust läge","system":"Systeminställning"}}');
;// ./packages/components/src/color-scheme-switch/ColorSchemeSwitch.tsx
'use client';var ColorSchemeSwitch=function ColorSchemeSwitch(_ref){var _ref$selector=_ref.selector,selector=_ref$selector===void 0?'body':_ref$selector,_ref$defaultValue=_ref.defaultValue,defaultValue=_ref$defaultValue===void 0?new Set(['light dark']):_ref$defaultValue,className=_ref.className;// set hard to light or dark or "light dark" for system
var _React$useState=react.useState(defaultValue),colorScheme=_React$useState[0],setColorScheme=_React$useState[1];react.useEffect(function(){var targetElement=document.querySelector(selector);if(targetElement){targetElement.style.setProperty('color-scheme',Array.from(colorScheme).join(' '));}else{console.warn("No element found for selector: \""+selector+"\"");}},[colorScheme,selector]);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)(ToggleButtonGroup/* ToggleButtonGroup */.W,{selectionMode:"single",selectedKeys:colorScheme,onSelectionChange:setColorScheme,disallowEmptySelection:true,className:className,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(ToggleButton/* ToggleButton */.f,{id:"light dark",className:ColorSchemeSwitch_module.button,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(laptop/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:strings.format('system')})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(ToggleButton/* ToggleButton */.f,{id:"light",className:ColorSchemeSwitch_module.button,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Sun,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:strings.format('lightMode')})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(ToggleButton/* ToggleButton */.f,{id:"dark",className:ColorSchemeSwitch_module.button,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Moon,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:strings.format('darkMode')})]})]});};
;// ./apps/docs/docs/dev/dark-mode.mdx


const frontMatter = {
	title: 'Mörkt läge',
	description: 'Hantera mörkt läge i designsystemet',
	pagination_prev: null,
	pagination_next: null
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
      children: [(0,jsx_runtime.jsx)(ColorSchemeSwitch, {
        selector: "#dark-mode-target"
      }), (0,jsx_runtime.jsx)("div", {
        id: "dark-mode-target"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ColorSchemeSwitch justerar ", (0,jsx_runtime.jsx)(_components.code, {
        children: "color-scheme"
      }), " värdet på body-elementet. Du kan justera vilken selector som ska användas\nom color-scheme i din applikation är definierad på en annan DOM-nod. Detta kan du göra genom att skicka in en egen\nselector i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "selector"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ColorSchemeSwitch selector='main' />\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Komponenten accepterar tre värden. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "light"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dark"
      }), ", och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "light dark"
      }), " dvs enbart ljust läge, enbart mörkt läge eller\natt följa systemets inställningar. Default är ", (0,jsx_runtime.jsx)(_components.code, {
        children: "light dark"
      }), ". Om du vill att ett specifikt tema är förvalt\nkan du skicka in standardvärdet direkt i ", (0,jsx_runtime.jsx)(_components.code, {
        children: "defaultValue"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ColorSchemeSwitch defaultValue='dark' />\n"
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



/***/ }),

/***/ 82597:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  WK: () => (/* binding */ $84b7d8702d4ff4a8$export$40258cc1d95ff477),
  G0: () => (/* binding */ $84b7d8702d4ff4a8$export$a8a71863db173133)
});

// UNUSED EXPORTS: ToggleButtonGroupContext

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/SharedElementTransition.mjs
var SharedElementTransition = __webpack_require__(10266);
// EXTERNAL MODULE: ./node_modules/@react-aria/button/dist/useToggleButtonGroup.mjs + 1 modules
var useToggleButtonGroup = __webpack_require__(2214);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/useControlledState.mjs
var useControlledState = __webpack_require__(8356);
;// ./node_modules/@react-stately/toggle/dist/useToggleGroupState.mjs



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

function $ad999b7f496648d1$export$8deac67f4addf270(props) {
    let { selectionMode: selectionMode = 'single', disallowEmptySelection: disallowEmptySelection, isDisabled: isDisabled = false } = props;
    let [selectedKeys, setSelectedKeys] = (0, useControlledState/* useControlledState */.P)((0, react.useMemo)(()=>props.selectedKeys ? new Set(props.selectedKeys) : undefined, [
        props.selectedKeys
    ]), (0, react.useMemo)(()=>props.defaultSelectedKeys ? new Set(props.defaultSelectedKeys) : new Set(), [
        props.defaultSelectedKeys
    ]), props.onSelectionChange);
    return {
        selectionMode: selectionMode,
        isDisabled: isDisabled,
        selectedKeys: selectedKeys,
        setSelectedKeys: setSelectedKeys,
        toggleKey (key) {
            let keys;
            if (selectionMode === 'multiple') {
                keys = new Set(selectedKeys);
                if (keys.has(key) && (!disallowEmptySelection || keys.size > 1)) keys.delete(key);
                else keys.add(key);
            } else keys = new Set(selectedKeys.has(key) && !disallowEmptySelection ? [] : [
                key
            ]);
            setSelectedKeys(keys);
        },
        setSelected (key, isSelected) {
            if (isSelected !== selectedKeys.has(key)) this.toggleKey(key);
        }
    };
}



//# sourceMappingURL=useToggleGroupState.module.js.map

;// ./node_modules/react-aria-components/dist/ToggleButtonGroup.mjs







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





const $84b7d8702d4ff4a8$export$298258635ae0dd97 = /*#__PURE__*/ (0, react.createContext)({});
const $84b7d8702d4ff4a8$export$a8a71863db173133 = /*#__PURE__*/ (0, react.createContext)(null);
const $84b7d8702d4ff4a8$export$40258cc1d95ff477 = /*#__PURE__*/ (0, react.forwardRef)(function ToggleButtonGroup(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $84b7d8702d4ff4a8$export$298258635ae0dd97);
    let state = (0, $ad999b7f496648d1$export$8deac67f4addf270)(props);
    let { groupProps: groupProps } = (0, useToggleButtonGroup/* useToggleButtonGroup */.$)(props, state, ref);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        values: {
            isDisabled: state.isDisabled,
            state: state
        },
        defaultClassName: 'react-aria-ToggleButtonGroup'
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    return /*#__PURE__*/ (0, react).createElement("div", {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, groupProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-orientation": props.orientation || 'horizontal',
        "data-disabled": props.isDisabled || undefined
    }, /*#__PURE__*/ (0, react).createElement($84b7d8702d4ff4a8$export$a8a71863db173133.Provider, {
        value: state
    }, /*#__PURE__*/ (0, react).createElement((0, SharedElementTransition/* SharedElementTransition */.D), null, renderProps.children)));
});



//# sourceMappingURL=ToggleButtonGroup.module.js.map


/***/ }),

/***/ 85468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"group":"group_RECg","toggleButton":"toggleButton_vLWl"});

/***/ }),

/***/ 88693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ ToggleButton)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(20454);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/SelectionIndicator.mjs
var SelectionIndicator = __webpack_require__(70291);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ToggleButtonGroup.mjs + 1 modules
var ToggleButtonGroup = __webpack_require__(82597);
// EXTERNAL MODULE: ./node_modules/@react-aria/button/dist/useToggleButtonGroup.mjs + 1 modules
var useToggleButtonGroup = __webpack_require__(2214);
// EXTERNAL MODULE: ./node_modules/@react-aria/button/dist/useToggleButton.mjs
var useToggleButton = __webpack_require__(89869);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-stately/toggle/dist/useToggleState.mjs
var useToggleState = __webpack_require__(51623);
;// ./node_modules/react-aria-components/dist/ToggleButton.mjs








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






const $efde0372d7a700fe$export$43506d75ebd2e218 = /*#__PURE__*/ (0, react.createContext)({});
const $efde0372d7a700fe$export$d2b052e7b4be1756 = /*#__PURE__*/ (0, react.forwardRef)(function ToggleButton(props, ref) {
    [props, ref] = (0, utils/* useContextProps */.JT)(props, ref, $efde0372d7a700fe$export$43506d75ebd2e218);
    let groupState = (0, react.useContext)((0, ToggleButtonGroup/* ToggleGroupStateContext */.G0));
    let state = (0, useToggleState/* useToggleState */.H)(groupState && props.id != null ? {
        isSelected: groupState.selectedKeys.has(props.id),
        onChange (isSelected) {
            groupState.setSelected(props.id, isSelected);
        }
    } : props);
    let { buttonProps: buttonProps, isPressed: isPressed, isSelected: isSelected, isDisabled: isDisabled } = groupState && props.id != null ? (0, useToggleButtonGroup/* useToggleButtonGroupItem */.O)({
        ...props,
        id: props.id
    }, groupState, ref) : (0, useToggleButton/* useToggleButton */.q)({
        ...props,
        id: props.id != null ? String(props.id) : undefined
    }, state, ref);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, useFocusRing/* useFocusRing */.o)(props);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, useHover/* useHover */.M)(props);
    let renderProps = (0, utils/* useRenderProps */.Sl)({
        ...props,
        id: undefined,
        values: {
            isHovered: isHovered,
            isPressed: isPressed,
            isFocused: isFocused,
            isSelected: state.isSelected,
            isFocusVisible: isFocusVisible,
            isDisabled: isDisabled,
            state: state
        },
        defaultClassName: 'react-aria-ToggleButton'
    });
    let DOMProps = (0, filterDOMProps/* filterDOMProps */.$)(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, react).createElement("button", {
        ...(0, mergeProps/* mergeProps */.v)(DOMProps, renderProps, buttonProps, focusProps, hoverProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-focused": isFocused || undefined,
        "data-disabled": isDisabled || undefined,
        "data-pressed": isPressed || undefined,
        "data-selected": isSelected || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined
    }, /*#__PURE__*/ (0, react).createElement((0, SelectionIndicator/* SelectionIndicatorContext */.r).Provider, {
        value: {
            isSelected: isSelected
        }
    }, renderProps.children));
});



//# sourceMappingURL=ToggleButton.module.js.map

// EXTERNAL MODULE: ./packages/components/src/button/Button.module.css
var Button_module = __webpack_require__(86707);
// EXTERNAL MODULE: ./packages/components/src/toggle-button/ToggleButton.module.css
var ToggleButton_module = __webpack_require__(85468);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/toggle-button/ToggleButton.tsx
var ToggleButton=function ToggleButton(_ref){var rest=Object.assign({},((0,objectDestructuringEmpty/* default */.A)(_ref),_ref));return/*#__PURE__*/(0,jsx_runtime.jsx)($efde0372d7a700fe$export$d2b052e7b4be1756,Object.assign({},rest,{className:(0,clsx/* default */.A)(Button_module/* default */.A.button,Button_module/* default */.A.iconBtn,ToggleButton_module/* default */.A.toggleButton,rest.className)}));};

/***/ }),

/***/ 89869:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ $55f54f7887471b58$export$51e84d46ca0bc451)
/* harmony export */ });
/* harmony import */ var _useButton_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69229);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72166);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32217);



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

function $55f54f7887471b58$export$51e84d46ca0bc451(props, state, ref) {
    const { isSelected: isSelected } = state;
    const { isPressed: isPressed, buttonProps: buttonProps } = (0, _useButton_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useButton */ .s)({
        ...props,
        onPress: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .chain */ .c)(state.toggle, props.onPress)
    }, ref);
    return {
        isPressed: isPressed,
        isSelected: isSelected,
        isDisabled: props.isDisabled || false,
        buttonProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v)(buttonProps, {
            'aria-pressed': isSelected
        })
    };
}



//# sourceMappingURL=useToggleButton.module.js.map


/***/ })

}]);