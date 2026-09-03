"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4166],{

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
const site_docs_dev_dark_mode_mdx_861_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/dark-mode","title":"Mörkt läge","description":"Hantera mörkt läge i designsystemet","source":"@site/docs/dev/dark-mode.mdx","sourceDirName":"dev","slug":"/dev/dark-mode","permalink":"/pr-preview/pr-1345/dev/dark-mode","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Mörkt läge","description":"Hantera mörkt läge i designsystemet"},"sidebar":"sideBar","previous":{"title":"Vanliga problem","permalink":"/pr-preview/pr-1345/dev/common-issues"},"next":{"title":"Formulär","permalink":"/pr-preview/pr-1345/dev/forms"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/components/src/color-scheme-switch/ColorSchemeSwitch.tsx + 1 modules
var ColorSchemeSwitch = __webpack_require__(75183);
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

/***/ 75183
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ ColorSchemeSwitch)
});

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/sun.js
var sun = __webpack_require__(14539);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/moon.js
var moon = __webpack_require__(88676);
// EXTERNAL MODULE: ./packages/components/src/icons/ContrastFilled.tsx
var ContrastFilled = __webpack_require__(93277);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(81013);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/SelectionIndicator.mjs
var SelectionIndicator = __webpack_require__(17863);
// EXTERNAL MODULE: ./packages/components/src/toggle-button/ToggleButtonGroup.tsx
var ToggleButtonGroup = __webpack_require__(32793);
// EXTERNAL MODULE: ./packages/components/src/toggle-button/ToggleButton.tsx
var ToggleButton = __webpack_require__(86974);
;// ./packages/components/src/color-scheme-switch/ColorSchemeSwitch.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ColorSchemeSwitch_module = ({"button":"button_XTm0","selectionIndicator":"selectionIndicator_zTl_"});
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
// EXTERNAL MODULE: ./packages/components/src/color-scheme-switch/intl/translations.json
var translations = __webpack_require__(10621);
// EXTERNAL MODULE: ./packages/components/src/color-scheme-switch/useColorScheme.ts
var useColorScheme = __webpack_require__(85402);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/color-scheme-switch/ColorSchemeSwitch.tsx
'use client';var ColorSchemeSwitch=function ColorSchemeSwitch(_ref){var _ref$selector=_ref.selector,selector=_ref$selector===void 0?':root':_ref$selector,_ref$defaultScheme=_ref.defaultScheme,defaultScheme=_ref$defaultScheme===void 0?'light dark':_ref$defaultScheme,scheme=_ref.scheme,onSchemeChange=_ref.onSchemeChange,defaultValue=_ref.defaultValue,className=_ref.className;var _useColorScheme=(0,useColorScheme/* useColorScheme */.U)({selector:selector,defaultScheme:defaultValue?Array.from(defaultValue)[0]:defaultScheme,scheme:scheme,onSchemeChange:onSchemeChange}),resolved=_useColorScheme.resolved,onChange=_useColorScheme.onChange;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations);var handleSelectionChange=function handleSelectionChange(keys){onChange(Array.from(keys)[0]);};return/*#__PURE__*/(0,jsx_runtime.jsxs)(ToggleButtonGroup/* ToggleButtonGroup */.W,{selectionMode:"single",selectedKeys:new Set([resolved]),onSelectionChange:handleSelectionChange,disallowEmptySelection:true,"aria-label":strings.format('colorScheme'),className:className,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(ToggleButton/* ToggleButton */.f,{id:"light",className:ColorSchemeSwitch_module.button,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(sun/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:strings.format('lightMode')}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectionIndicator/* SelectionIndicator */.i,{className:ColorSchemeSwitch_module.selectionIndicator})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(ToggleButton/* ToggleButton */.f,{id:"dark",className:ColorSchemeSwitch_module.button,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(moon/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:strings.format('darkMode')}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectionIndicator/* SelectionIndicator */.i,{className:ColorSchemeSwitch_module.selectionIndicator})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(ToggleButton/* ToggleButton */.f,{id:"light dark",className:ColorSchemeSwitch_module.button,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ContrastFilled/* ContrastFilled */.J,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:strings.format('system')}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectionIndicator/* SelectionIndicator */.i,{className:ColorSchemeSwitch_module.selectionIndicator})]})]});};

/***/ },

/***/ 85402
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ useColorScheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
'use client';var useColorScheme=function useColorScheme(_ref){var _ref$selector=_ref.selector,selector=_ref$selector===void 0?':root':_ref$selector,_ref$defaultScheme=_ref.defaultScheme,defaultScheme=_ref$defaultScheme===void 0?'light dark':_ref$defaultScheme,scheme=_ref.scheme,onSchemeChange=_ref.onSchemeChange;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(scheme!=null?scheme:defaultScheme),internal=_useState[0],setInternal=_useState[1];var resolved=scheme!=null?scheme:internal;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var target=document.querySelector(selector);if(!target){console.warn("No element found for selector: \""+selector+"\"");return;}if(resolved==='light dark'){delete target.dataset.colorScheme;}else{target.dataset.colorScheme=resolved;}},[resolved,selector]);var onChange=function onChange(next){setInternal(next);onSchemeChange==null||onSchemeChange(next);};return{resolved:resolved,onChange:onChange};};

/***/ },

/***/ 93277
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ ContrastFilled)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["size","color","strokeWidth","className"];var ContrastFilled=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_ref,ref){var _ref$size=_ref.size,size=_ref$size===void 0?24:_ref$size,_ref$color=_ref.color,color=_ref$color===void 0?'currentColor':_ref$color,_ref$strokeWidth=_ref.strokeWidth,strokeWidth=_ref$strokeWidth===void 0?2:_ref$strokeWidth,className=_ref.className,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg",Object.assign({ref:ref,xmlns:"http://www.w3.org/2000/svg",width:size,height:size,viewBox:"0 0 24 24",fill:"none",stroke:color,strokeWidth:strokeWidth,strokeLinecap:"round",strokeLinejoin:"round",className:className},rest,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle",{cx:"12",cy:"12",r:"10"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M12 2a10 10 0 0 1 0 20Z",fill:color,stroke:"none"})]}));});ContrastFilled.displayName='ContrastFilled';

/***/ },

/***/ 86974
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ ToggleButton)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20454);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54158);
/* harmony import */ var _button_Button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86707);
/* harmony import */ var _ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85468);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1160);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
var ToggleButton=function ToggleButton(_ref){var rest=Object.assign({},((0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref),_ref));return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_1__/* .ToggleButton */ .f,Object.assign({},rest,{className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_button_Button_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.button,_button_Button_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.iconBtn,_ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.toggleButton,rest.className)}));};

/***/ },

/***/ 32793
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ ToggleButtonGroup)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20454);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95132);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);
/* harmony import */ var _ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85468);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1160);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
var ToggleButtonGroup=function ToggleButtonGroup(_ref){var rest=Object.assign({},((0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref),_ref));return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_1__/* .ToggleButtonGroup */ .WK,Object.assign({},rest,{className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.group,rest.className)}));};

/***/ },

/***/ 85468
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"group":"group_RECg","toggleButton":"toggleButton_vLWl"});

/***/ },

/***/ 10621
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"en":{"colorScheme":"Color scheme","darkMode":"Dark mode","lightMode":"Light mode","system":"Follows system","triggerDarkMode":"Color scheme: Dark mode","triggerLightMode":"Color scheme: Light mode","triggerSystem":"Color scheme: Follows system"},"sv":{"colorScheme":"Färgschema","darkMode":"Mörkt läge","lightMode":"Ljust läge","system":"Följer systemet","triggerDarkMode":"Färgschema: Mörkt läge","triggerLightMode":"Färgschema: Ljust läge","triggerSystem":"Färgschema: Följer systemet"}}');

/***/ }

}]);