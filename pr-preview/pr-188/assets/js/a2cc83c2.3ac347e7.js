"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6796],{

/***/ 22244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_toast_mdx_a2c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-toast-mdx-a2c.json
const site_docs_components_toast_mdx_a2c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/toast","title":"Toast","description":"Toasts visar korta, tillfälliga meddelanden om åtgärder, fel eller andra händelser i en applikation.","source":"@site/docs/components/toast.mdx","sourceDirName":"components","slug":"/components/toast","permalink":"/pr-preview/pr-188/components/toast","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Toast","description":"Toasts visar korta, tillfälliga meddelanden om åtgärder, fel eller andra händelser i en applikation.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(11470);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(19365);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 1 modules
var propsTable = __webpack_require__(4928);
// EXTERNAL MODULE: ./packages/toast/src/index.ts + 2 modules
var src = __webpack_require__(96573);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var button_src = __webpack_require__(63918);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
// EXTERNAL MODULE: ./packages/flex/src/index.ts + 4 modules
var flex_src = __webpack_require__(93294);
;// ./apps/docs/docs/components/toast.mdx


const frontMatter = {
	title: 'Toast',
	description: 'Toasts visar korta, tillfälliga meddelanden om åtgärder, fel eller andra händelser i en applikation.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};










const toc = [{
  "value": "Installation och användning",
  "id": "installation-och-användning",
  "level": 2
}, {
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "Implementationer",
  "id": "implementationer",
  "level": 2
}, {
  "value": "Lokalt",
  "id": "lokalt",
  "level": 3
}, {
  "value": "Globalt",
  "id": "globalt",
  "level": 3
}, {
  "value": "Notiskön",
  "id": "notiskön",
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
  "value": "Toast",
  "id": "toast",
  "level": 3
}, {
  "value": "ToastRegion",
  "id": "toastregion",
  "level": 3
}, {
  "value": "GlobalToastRegion",
  "id": "globaltoastregion",
  "level": 3
}, {
  "value": "ToastProvider",
  "id": "toastprovider",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'Toast',
      friendlyName: 'Notifiering, notiser',
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/useToast.html"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En notifiering är ett kort, tillfälligt meddelanden om åtgärder, fel eller andra händelser i en applikation. De är utformade för att vara diskreta och inte kräva att användaren stänger dem omedelbart."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Notifieringarna sätts i en kö för att visas i turordning. Maximala antalet är för närvarande satt till 5. En notifiering kan stängas via kryssrutan\neller via en timeout. Det går även att sätta en prioritet på meddelanden relativt andra i kön. Notifieringar renderas i en", (0,jsx_runtime.jsx)(_components.code, {
        children: "<ToastRegion>"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation-och-användning",
      children: "Installation och användning"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "npm2yarn",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "npm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/toast\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/toast\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/toast\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { ToastProvider } from '@midas-ds/toast'\n;<ToastProvider>\n  {state => (\n    <Button onPress={() => state.add({ message: 'Allt funkar som det ska!', type: 'success' }, { timeout: 5000 })}>\n      Tryck här för en notifiering\n    </Button>\n  )}\n</ToastProvider>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(src/* GlobalToastRegion */.r$, {}), "\n", (0,jsx_runtime.jsx)(button_src/* Button */.$n, {
      onPress: () => src/* toastQueue */.ni.add({
        type: 'success',
        message: 'Allt funkar som det ska!'
      }, {
        timeout: 5000
      }),
      children: 'Tryck här för en notifiering'
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En toast har fyra olika varianter, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "success"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "info"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "warning"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "important"
      }), ". Använd lämplig typ beroende på vilken information som ska visas. Här har även varningsnotisen högsta prioritet vilket gör att den alltid går före i kön."]
    }), "\n", (0,jsx_runtime.jsxs)(flex_src/* Flex */.s, {
      fluid: true,
      children: [(0,jsx_runtime.jsx)(flex_src/* FlexItem */.Z, {
        col: 3,
        children: (0,jsx_runtime.jsx)(button_src/* Button */.$n, {
          onPress: () => src/* toastQueue */.ni.add({
            type: 'success',
            message: 'Allt funkar som det ska!'
          }, {
            timeout: 5000
          }),
          children: 'Success'
        })
      }), (0,jsx_runtime.jsx)(flex_src/* FlexItem */.Z, {
        col: 3,
        children: (0,jsx_runtime.jsx)(button_src/* Button */.$n, {
          onPress: () => src/* toastQueue */.ni.add({
            type: 'info',
            message: 'Här kommer ett meddelande'
          }, {
            timeout: 5000
          }),
          children: 'Info'
        })
      }), (0,jsx_runtime.jsx)(flex_src/* FlexItem */.Z, {
        col: 3,
        children: (0,jsx_runtime.jsx)(button_src/* Button */.$n, {
          onPress: () => src/* toastQueue */.ni.add({
            message: 'Viktigt meddelande',
            type: 'important'
          }, {
            timeout: 5000
          }),
          children: 'Important'
        })
      }), (0,jsx_runtime.jsx)(flex_src/* FlexItem */.Z, {
        col: 3,
        children: (0,jsx_runtime.jsx)(button_src/* Button */.$n, {
          onPress: () => src/* toastQueue */.ni.add({
            message: 'Farlig varning!',
            type: 'warning'
          }, {
            timeout: 5000,
            priority: 1
          }),
          children: 'Warning'
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementationer",
      children: "Implementationer"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lokalt",
      children: "Lokalt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "toastProvider"
      }), " för att sätta en kö av Toasts på valfritt ställe i en app. Om det inte går att wrappa hela appen i en kö med en provider,\nanvänd den ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#globalt",
        children: "globala varianten"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ToastProvider>\n  {state => (\n    <Button onPress={() => state.add({ message: 'Allt funkar som det ska!', type: 'success' }, { timeout: 5000 })}>\n      Tryck här för en notifiering\n    </Button>\n  )}\n</ToastProvider>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "globalt",
      children: "Globalt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Välj en global kö för toasts om det passar ditt användsningsscenario bättre. Lägg en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<GlobalToastRegion>"
      }), " någonstans i appen\noch lägg nya toasts i kön enligt:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { GlobalToastRegion, toastQueue } from '@midas-ds/toast';\n\n<GlobalToastRegion />\n//...\n<Button onPress={\n  () => toastQueue.add({type: 'success', message: 'Toast is done'})\n}>Visa notis</Button>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notiskön",
      children: "Notiskön"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Varje gång en toast läggs till i kön går det att bestämma livslängs och prioritering för notisen. Prioritet kan sättas till 1, 2 eller 3 och notiserna kommer gå före i kön beroende på detta."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{3}",
        children: ".add(\n  {...},\n  { priority: 1 }\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Timeout ska av tillgänglighetsskäl vara minst 5000ms:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{3}",
        children: ".add(\n  {...},\n  { timeout: 5000 }\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "toast",
      children: "Toast"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Toast"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "toastregion",
      children: "ToastRegion"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "ToastRegion",
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "globaltoastregion",
      children: "GlobalToastRegion"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "GlobalToastRegion",
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "toastprovider",
      children: "ToastProvider"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "ToastProvider",
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

/***/ 13225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ComponentHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86025);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2543);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _midas_ds_link_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80269);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9245);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92457);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42350);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
var ComponentHeader=function ComponentHeader(_ref){var name=_ref.name,friendlyName=_ref.friendlyName,overrideHeadlessLink=_ref.overrideHeadlessLink,overrideHeadlessLinkTitle=_ref.overrideHeadlessLinkTitle;var storybookLink= false?0:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)("/storybook/?path=/docs/components-"+name.toLowerCase()+"--docs");return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section",{style:{marginBottom:32,marginTop:-20},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .s,{fluid:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__/* .FlexItem */ .Z,{style:{alignSelf:'center'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__/* .FlexItem */ .Z,{col:"auto",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_link_button__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:"https://github.com/migrationsverket/midas/tree/main/packages/"+(0,lodash__WEBPACK_IMPORTED_MODULE_3__.kebabCase)(name)+"/CHANGELOG.md",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,iconPlacement:"left",children:"Versionslogg"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__/* .FlexItem */ .Z,{col:"auto",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_link_button__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:storybookLink,variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,iconPlacement:"left",children:"Storybook"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_1__/* .FlexItem */ .Z,{col:"auto",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_link_button__WEBPACK_IMPORTED_MODULE_4__/* .LinkButton */ .z,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,iconPlacement:"left",children:overrideHeadlessLinkTitle?overrideHeadlessLinkTitle:'React Aria'})})]})});};

/***/ }),

/***/ 4928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ PropTable)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useGlobalData.js
var useGlobalData = __webpack_require__(66588);
// EXTERNAL MODULE: ./packages/accordion/src/index.ts + 22 modules
var src = __webpack_require__(17986);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./apps/docs/src/css/propstable.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const propstable_module = ({"table":"table_p75e","thead":"thead_NOJG","tbody":"tbody_wu48","item":"item_chxT"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/propsTable.tsx
var PropTable=function PropTable(_ref){var _ComponentsDocs$find;var name=_ref.name,_ref$defaultOpen=_ref.defaultOpen,defaultOpen=_ref$defaultOpen===void 0?true:_ref$defaultOpen;var globalData=(0,useGlobalData/* default */.Ay)();var ComponentsDocs=globalData['docusaurus-plugin-react-docgen-typescript']["default"];var props=(_ComponentsDocs$find=ComponentsDocs.find(function(componentDoc){return componentDoc.displayName===name;}))==null?void 0:_ComponentsDocs$find.props;if(!props){return null;}var _Object$entries$reduc=Object.entries(props).reduce(function(acc,_ref2){var key=_ref2[0],value=_ref2[1];if(key.startsWith('on')){acc.events[key]=value;}else if(key.startsWith('aria-')){acc.accessibility[key]=value;}else{acc.rest[key]=value;}return acc;},{events:{},accessibility:{},rest:{}}),events=_Object$entries$reduc.events,accessibility=_Object$entries$reduc.accessibility,rest=_Object$entries$reduc.rest;var Table=function Table(_ref3){var propGroup=_ref3.propGroup;return/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{className:propstable_module.table,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{className:propstable_module.thead,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Namn"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Typ"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Standard"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Beskrivning"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{className:propstable_module.tbody,children:Object.keys(propGroup).map(function(key){var _props$key$type;return/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("td",{style:{verticalAlign:'top'},children:[key," ",props[key].required&&' *']}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{verticalAlign:'top',maxWidth:'250px'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("code",{children:(_props$key$type=props[key].type)==null?void 0:_props$key$type.name})}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{verticalAlign:'top',maxWidth:'50px'},children:props[key].defaultValue?/*#__PURE__*/(0,jsx_runtime.jsx)("code",{children:props[key].defaultValue.value}):'-'}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{style:{verticalAlign:'top'},children:props[key].description})]},key);})})]});};return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* Accordion */.nD,{headingTag:"h3",type:"multiple",defaultValue:defaultOpen?['props']:[],children:[Object.getOwnPropertyNames(rest).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* AccordionItem */.As,{value:"props",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionTrigger */.$m,{children:"Props"}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionContent */.ub,{className:propstable_module.item,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Table,{propGroup:rest})})]}),Object.getOwnPropertyNames(events).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* AccordionItem */.As,{value:"events",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionTrigger */.$m,{children:"Events"}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionContent */.ub,{className:propstable_module.item,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Table,{propGroup:events})})]}),Object.getOwnPropertyNames(accessibility).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* AccordionItem */.As,{value:"accessibility",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionTrigger */.$m,{children:"Tillg\xE4nglighet"}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* AccordionContent */.ub,{className:propstable_module.item,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Table,{propGroup:accessibility})})]})]})});};

/***/ }),

/***/ 96573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r$: () => (/* reexport */ GlobalToastRegion),
  ni: () => (/* reexport */ toastQueue)
});

// UNUSED EXPORTS: Toast, ToastProvider, ToastRegion

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var src = __webpack_require__(63918);
// EXTERNAL MODULE: ./node_modules/@react-aria/toast/dist/useToastRegion.mjs + 1 modules
var useToastRegion = __webpack_require__(96766);
// EXTERNAL MODULE: ./node_modules/@react-aria/toast/dist/useToast.mjs
var useToast = __webpack_require__(93187);
// EXTERNAL MODULE: ./node_modules/@react-stately/toast/dist/useToastState.mjs
var dist_useToastState = __webpack_require__(8737);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
;// ./packages/toast/src/lib/Toast.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Toast_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","signalGreen10":"#d5f2d9","signalGreen100":"#008d3c","signalBlue10":"#eaf2f6","signalBlue100":"#0066cc","signalYellow10":"#fff8e1","signalYellow100":"#f1c21b","signalRed10":"#ffdfdf","signalRed100":"#e62323","gray150":"#1f1f1f","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","mdBreakpoint":"(min-width: 768px)","toastRegion":"toastRegion_D8P5","toast":"toast_KTs7","success":"success_uWpg","info":"info_gZit","important":"important_NPeI","warning":"warning_QRWE","icon":"icon_KIoW","toastContent":"toastContent_U3Cz","toastMessage":"toastMessage_p9OY","slideInTop":"slideInTop_l9cG","slideInEnd":"slideInEnd_nrEv","slideOutTop":"slideOutTop_ENmT","slideOutEnd":"slideOutEnd_Pml0"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-check.js
var circle_check = __webpack_require__(79804);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(97213);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-alert.js
var circle_alert = __webpack_require__(37946);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(418);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/toast/src/lib/Toast.tsx
'use client';var _excluded=(/* unused pure expression or super */ null && (["children"])),_excluded2=["state"],_excluded3=["state"];var iconMap={success:circle_check/* default */.A,info:info/* default */.A,important:circle_alert/* default */.A,warning:triangle_alert/* default */.A};var toastQueue=new dist_useToastState/* ToastQueue */.Vv({maxVisibleToasts:5,hasExitAnimation:true});var GlobalToastRegion=function GlobalToastRegion(props){var state=(0,dist_useToastState/* useToastQueue */.oS)(toastQueue);return state.visibleToasts.length>0?/*#__PURE__*/(0,react_dom.createPortal)(/*#__PURE__*/(0,jsx_runtime.jsx)(ToastRegion,Object.assign({},props,{state:state})),document.body):null;};var ToastProvider=function ToastProvider(_ref){var children=_ref.children,props=_objectWithoutPropertiesLoose(_ref,_excluded);var state=useToastState({maxVisibleToasts:5,hasExitAnimation:true});return/*#__PURE__*/_jsxs(_Fragment,{children:[typeof children==='function'?children(state):children,state.visibleToasts.length>0&&/*#__PURE__*/_jsx(ToastRegion,Object.assign({},props,{state:state}))]});};function ToastRegion(_ref2){var state=_ref2.state,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);var ref=react.useRef(null);var _useToastRegion=(0,useToastRegion/* useToastRegion */.J)(props,state,ref),regionProps=_useToastRegion.regionProps;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},regionProps,{ref:ref,className:Toast_module.toastRegion,children:state.visibleToasts.map(function(toast){return/*#__PURE__*/(0,jsx_runtime.jsx)(Toast,{toast:toast,state:state},toast.key);})}));}function Toast(_ref3){var state=_ref3.state,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref3,_excluded3);var ref=react.useRef(null);var _useToast=(0,useToast/* useToast */.d)(props,state,ref),toastProps=_useToast.toastProps,contentProps=_useToast.contentProps,titleProps=_useToast.titleProps,closeButtonProps=_useToast.closeButtonProps;var Icon=iconMap[props.toast.content.type];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({},toastProps,{ref:ref,className:(0,clsx/* default */.A)(Toast_module.toast,Toast_module[props.toast.content.type]),"data-animation":props.toast.animation,onAnimationEnd:function onAnimationEnd(){if(props.toast.animation==='exiting'){state.remove(props.toast.key);}},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({className:Toast_module.toastContent},contentProps,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{className:Toast_module.icon,size:20,"aria-hidden":true}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",Object.assign({className:Toast_module.toastMessage},titleProps,{children:props.toast.content.message})),props.toast.content.children]})]})),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$n,Object.assign({variant:"icon"},closeButtonProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})}))]}));}
;// ./packages/toast/src/index.ts


/***/ })

}]);