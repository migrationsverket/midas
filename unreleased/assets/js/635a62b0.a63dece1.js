"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[902],{

/***/ 13225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ComponentHeader)
/* harmony export */ });
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74351);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93574);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56636);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42350);
/* harmony import */ var _site_src_components_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75575);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
/* eslint-disable @nx/enforce-module-boundaries */var ComponentHeader=function ComponentHeader(_ref){var name=_ref.name,friendlyName=_ref.friendlyName,overrideHeadlessLink=_ref.overrideHeadlessLink,overrideHeadlessLinkTitle=_ref.overrideHeadlessLinkTitle;var baseUrl=_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay;var componentPath="?path=/docs/components-"+name.toLowerCase()+"--docs";var storybookHost= false?0:baseUrl('/storybook');var storybookLink=storybookHost+"/"+componentPath;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section",{className:"component-header",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_3__/* .Grid */ .x,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .GridItem */ .E,{size:"auto",className:"friendlyName",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_5__/* .LinkButton */ .z,{href:storybookLink,variant:"tertiary",icon:_site_src_components_icons__WEBPACK_IMPORTED_MODULE_0__/* .EmptyIcon */ .F,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_site_src_components_icons__WEBPACK_IMPORTED_MODULE_0__/* .StorybookIcon */ .q,{size:24,color:'#FF4785'}),"Storybook"]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_5__/* .LinkButton */ .z,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,iconPlacement:"left",children:overrideHeadlessLinkTitle?overrideHeadlessLinkTitle:'React Aria'})})]})});};

/***/ }),

/***/ 18925:
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
  metadata: () => (/* reexport */ site_docs_components_menu_mdx_635_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-menu-mdx-635.json
const site_docs_components_menu_mdx_635_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/menu","title":"Menu","description":"En meny kan användas för att samla ihop funktioner som sällan används eller som kompletterar nuvarande funktion.","source":"@site/docs/components/menu.mdx","sourceDirName":"components","slug":"/components/menu","permalink":"/unreleased/components/menu","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Menu","description":"En meny kan användas för att samla ihop funktioner som sällan används eller som kompletterar nuvarande funktion.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Menu.mjs + 7 modules
var dist_Menu = __webpack_require__(6484);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
;// ./packages/components/src/menu/Menu.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Menu_module = ({"menu":"menu_V22E","menuSection":"menuSection_CHG7","medium":"medium_Ooqg","menuItem":"menuItem_xt3h","mainContent":"mainContent_GA8r","checkMark":"checkMark_KYFR","separator":"separator_YUxq","menuPopover":"menuPopover_c4Km"});
;// ./packages/components/src/menu/MenuPopover.tsx
var _excluded=["className"];var MenuPopover=function MenuPopover(_ref){var className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,Object.assign({className:(0,clsx/* default */.A)(className,Menu_module.menuPopover),offset:4},rest));};
;// ./packages/components/src/menu/Menu.tsx
var Menu_excluded=["className","size"];var Menu=function Menu(_ref){var className=_ref.className,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,Menu_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Menu/* Menu */.W1,Object.assign({className:(0,clsx/* default */.A)(className,Menu_module.menu,size==='medium'&&Menu_module.medium)},rest));};
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(45773);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(87677);
;// ./packages/components/src/menu/MenuItem.tsx
var MenuItem=function MenuItem(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Menu/* MenuItem */.Dr,Object.assign({},props,{textValue:props.textValue||(typeof props.children==='string'?props.children:undefined),className:(0,clsx/* default */.A)(Menu_module.menuItem,props.className),children:function children(renderProps){var children=props.children;var selectionMode=renderProps.selectionMode,isSelected=renderProps.isSelected,hasSubmenu=renderProps.hasSubmenu;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[selectionMode!=='none'&&/*#__PURE__*/(0,jsx_runtime.jsx)(check/* default */.A,{size:16,className:Menu_module.checkMark,"data-selected":isSelected||undefined}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Menu_module.mainContent,children:typeof children==='function'?children(renderProps):children}),hasSubmenu&&/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{size:20})]});}}));};
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/menu.js
var menu = __webpack_require__(89230);
;// ./apps/docs/docs/components/menu.mdx


const frontMatter = {
	title: 'Menu',
	description: 'En meny kan användas för att samla ihop funktioner som sällan används eller som kompletterar nuvarande funktion.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};






const Example = () => {
  return (0,jsx_runtime.jsxs)(dist_Menu/* MenuTrigger */.cQ, {
    children: [(0,jsx_runtime.jsx)(Button/* Button */.$, {
      "aria-label": "Menu",
      variant: "icon",
      children: (0,jsx_runtime.jsx)(menu/* default */.A, {
        size: 20
      })
    }), (0,jsx_runtime.jsx)(MenuPopover, {
      children: (0,jsx_runtime.jsxs)(Menu, {
        children: [(0,jsx_runtime.jsx)(MenuItem, {
          id: "open",
          children: "Open"
        }), (0,jsx_runtime.jsx)(MenuItem, {
          id: "rename",
          children: "Rename..."
        }), (0,jsx_runtime.jsx)(MenuItem, {
          id: "duplicate",
          children: " Duplicate"
        }), (0,jsx_runtime.jsx)(MenuItem, {
          id: "share",
          children: "Share..."
        }), (0,jsx_runtime.jsx)(MenuItem, {
          id: "delete",
          children: "Delete..."
        })]
      })
    })]
  });
};
const toc = [{
  "value": "Beskrivning",
  "id": "beskrivning",
  "level": 2
}, {
  "value": "Länkar",
  "id": "länkar",
  "level": 3
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
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
      name: "Menu",
      friendlyName: "Meny, menylist, kontextmeny"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En meny kan användas för att samla ihop funktioner som sällan används eller som kompletterar nuvarande funktion."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Button, Menu, MenuItem, MenuPopover, MenuTrigger } from '@midas-ds/components'\nimport { MenuIcon } from 'lucide-react'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<MenuTrigger>\n  <Button\n    aria-label='Menu'\n    variant='icon'\n  >\n    <MenuIcon size={20} />\n  </Button>\n  <MenuPopover>\n    <Menu>\n      <MenuItem>Open</MenuItem>\n      <MenuItem>Rename...</MenuItem>\n      <MenuItem>Duplicate</MenuItem>\n      <MenuItem>Share...</MenuItem>\n      <MenuItem>Delete...</MenuItem>\n    </Menu>\n  </MenuPopover>\n</MenuTrigger>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        display: 'block'
      },
      children: (0,jsx_runtime.jsx)(Example, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "beskrivning",
      children: "Beskrivning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Komponenten bygger på ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/Menu.html",
        children: "React Aria Menu"
      }), ", kodexempel i React Arias dokumentation är applicerbara genom att importera komponeterna från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/components"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Midas exporterar följande komponenter och typer:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Menu"
        }), " & ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MenuProps"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MenuItem"
        }), " & ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MenuItemProps"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MenuPopover"
        }), " & ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MenuPopoverProps"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MenuSection"
        }), " & ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MenuSectionProps"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Separator"
        }), " & ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SeparatorProps"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "MenuTrigger"
        }), " & ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MenuTriggerProps"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "länkar",
      children: "Länkar"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["I React Arias dokumentation visas ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://react-spectrum.adobe.com/react-aria/Menu.html#links",
          children: "exempel på hur menyn kan innehålla länkar"
        }), ", länkarna uppfyller inte våra krav på tillgänglighet och ska därför undvikas."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Använd endast till sekundära handlingar som inte är högt prioriterade."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knappen ska helst ha en titel, annars bör en aria-label användas."
      }), "\n"]
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

/***/ 42350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BookText)
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
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["path", { d: "M8 11h8", key: "vwpz6n" }],
  ["path", { d: "M8 7h6", key: "1f0q6e" }]
];
const BookText = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("book-text", __iconNode);


//# sourceMappingURL=book-text.js.map


/***/ }),

/***/ 45773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Check)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("check", __iconNode);


//# sourceMappingURL=check.js.map


/***/ }),

/***/ 74351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38739);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1160);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","isContained","removeMargins"];/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/grid}
 */var Grid=function Grid(_ref){var children=_ref.children,_ref$isContained=_ref.isContained,isContained=_ref$isContained===void 0?false:_ref$isContained,_ref$removeMargins=_ref.removeMargins,removeMargins=_ref$removeMargins===void 0?false:_ref$removeMargins,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({},rest,{className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.container,isContained&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.contained,removeMargins&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.removeMargins,rest.className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.flex,children:children})}));};

/***/ }),

/***/ 75575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* reexport */ EmptyIcon),
  q: () => (/* reexport */ StorybookIcon)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/icons/Storybook.tsx
var _excluded=["color","size"];var StorybookIcon=/* @__PURE__ */react.forwardRef(function(_ref,forwardedRef){var _ref$color=_ref.color,color=_ref$color===void 0?'currentColor':_ref$color,_ref$size=_ref.size,size=_ref$size===void 0?20:_ref$size,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{viewBox:"-31.5 0 319 319",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",fill:"#000000",width:size,height:size,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),/*#__PURE__*/(0,jsx_runtime.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("defs",{children:[' ',/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z",id:"path-1",children:' '}),' ']}),' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{children:[' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("mask",{id:"mask-2",fill:"white",children:[' ',/*#__PURE__*/(0,jsx_runtime.jsx)("use",{href:"#path-1",children:" "}),' ']}),' ',/*#__PURE__*/(0,jsx_runtime.jsx)("use",{fill:color,"fill-rule":"nonzero",href:"#path-1",children:' '}),' ',/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z",fill:"#FFFFFF","fill-rule":"nonzero",mask:"url(#mask-2)",children:' '}),' ']}),' ']})]});});
;// ./apps/docs/src/components/icons/Empty.tsx
var EmptyIcon=function EmptyIcon(){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{height:0,width:0});};
;// ./apps/docs/src/components/icons/index.ts


/***/ }),

/***/ 87677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ChevronRight)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("chevron-right", __iconNode);


//# sourceMappingURL=chevron-right.js.map


/***/ }),

/***/ 89230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Menu)
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
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
];
const Menu = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("menu", __iconNode);


//# sourceMappingURL=menu.js.map


/***/ })

}]);