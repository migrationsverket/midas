"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6796],{

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

/***/ 13225
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ComponentHeader)
/* harmony export */ });
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74351);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56636);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93574);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42350);
/* harmony import */ var _site_src_components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75575);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74848);
/* eslint-disable @nx/enforce-module-boundaries */var ComponentHeader=function ComponentHeader(_ref){var name=_ref.name,friendlyName=_ref.friendlyName,overrideHeadlessLink=_ref.overrideHeadlessLink,overrideHeadlessLinkTitle=_ref.overrideHeadlessLinkTitle;var baseUrl=_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay;var componentPath="?path=/docs/components-"+name.toLowerCase()+"--docs";var storybookHost= false?0:baseUrl('/storybook');var storybookLink=storybookHost+"/"+componentPath;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section",{className:"component-header",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_0__/* .Grid */ .x,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .GridItem */ .E,{size:"auto",className:"friendlyName",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_1__/* .LinkButton */ .z,{href:storybookLink,variant:"tertiary",icon:_site_src_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .EmptyIcon */ .F,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_site_src_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .StorybookIcon */ .q,{size:24,color:"#FF4785"}),"Storybook"]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .GridItem */ .E,{size:"auto",className:"headerLink",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_1__/* .LinkButton */ .z,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",variant:"tertiary",icon:lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,iconPlacement:"left",children:overrideHeadlessLinkTitle?overrideHeadlessLinkTitle:'React Aria'})})]})});};

/***/ },

/***/ 22244
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
const site_docs_components_toast_mdx_a2c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/toast","title":"Toast","description":"Toasts visar korta, tillfälliga meddelanden om åtgärder, fel eller andra händelser i en applikation.","source":"@site/docs/components/toast.mdx","sourceDirName":"components","slug":"/components/toast","permalink":"/pr-preview/pr-1023/components/toast","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Toast","description":"Toasts visar korta, tillfälliga meddelanden om åtgärder, fel eller andra händelser i en applikation."},"sidebar":"sideBar","previous":{"title":"TextField","permalink":"/pr-preview/pr-1023/components/textfield"},"next":{"title":"Tooltip","permalink":"/pr-preview/pr-1023/components/tooltip"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/PropsTable.tsx + 2 modules
var PropsTable = __webpack_require__(68713);
// EXTERNAL MODULE: ./packages/components/src/toast/Toast.tsx + 1 modules
var Toast = __webpack_require__(30601);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/grid/Grid.tsx
var Grid = __webpack_require__(74351);
// EXTERNAL MODULE: ./packages/components/src/grid/GridItem.tsx
var GridItem = __webpack_require__(93574);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
;// ./apps/docs/docs/components/toast.mdx


const frontMatter = {
	title: 'Toast',
	description: 'Toasts visar korta, tillfälliga meddelanden om åtgärder, fel eller andra händelser i en applikation.'
};
const contentTitle = undefined;

const assets = {

};






const toc = [{
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
  "value": "Toastkö",
  "id": "toastkö",
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
      name: "Toast",
      friendlyName: "Notifiering, notiser",
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/useToast.html"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponent för att visa ett kort, tillfälligt meddelanden om åtgärder, fel eller andra händelser i en applikation."
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      className: "card",
      style: {
        display: 'block'
      },
      children: [(0,jsx_runtime.jsx)(Toast/* GlobalToastRegion */.r$, {}), (0,jsx_runtime.jsx)(Button/* Button */.$, {
        onPress: () => Toast/* toastQueue */.ni.add({
          type: 'success',
          message: 'Allt funkar som det ska!'
        }, {
          timeout: 5000
        }),
        children: 'Tryck här för en notifiering'
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Toast har fyra olika varianter som matchar InfoBanner: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "success"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "info"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "important"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "warning"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsxs)(Grid/* Grid */.x, {
        children: [(0,jsx_runtime.jsx)(GridItem/* GridItem */.E, {
          size: 3,
          children: (0,jsx_runtime.jsx)(Button/* Button */.$, {
            onPress: () => Toast/* toastQueue */.ni.add({
              type: 'success',
              message: 'Allt funkar som det ska!'
            }, {
              timeout: 5000
            }),
            children: 'Success'
          })
        }), (0,jsx_runtime.jsx)(GridItem/* GridItem */.E, {
          size: 3,
          children: (0,jsx_runtime.jsx)(Button/* Button */.$, {
            onPress: () => Toast/* toastQueue */.ni.add({
              type: 'info',
              message: 'Här kommer ett meddelande'
            }, {
              timeout: 5000
            }),
            children: 'Info'
          })
        }), (0,jsx_runtime.jsx)(GridItem/* GridItem */.E, {
          size: 3,
          children: (0,jsx_runtime.jsx)(Button/* Button */.$, {
            onPress: () => Toast/* toastQueue */.ni.add({
              message: 'Viktigt meddelande',
              type: 'important'
            }, {
              timeout: 5000
            }),
            children: 'Important'
          })
        }), (0,jsx_runtime.jsx)(GridItem/* GridItem */.E, {
          size: 3,
          children: (0,jsx_runtime.jsx)(Button/* Button */.$, {
            onPress: () => Toast/* toastQueue */.ni.add({
              message: 'Farlig varning!',
              type: 'warning'
            }, {
              timeout: 5000,
              priority: 1
            }),
            children: 'Warning'
          })
        })]
      })
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
      children: ["Välj en global kö för toasts om det passar ditt användningsscenario bättre. Lägg en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<GlobalToastRegion>"
      }), " någonstans i appen\noch lägg nya toasts i kön enligt:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { GlobalToastRegion, toastQueue } from '@midas-ds/components'\n\n<GlobalToastRegion />\n//...\n<Button onPress={\n  () => toastQueue.add({type: 'success', message: 'Toast is done'})\n}>Visa notis</Button>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "toastkö",
      children: "Toastkö"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om det triggas flera Toast sätts de i en kö för att visas i turordning. Maximala antalet som visas samtidigt är 5. Varje gång en toast läggs till i kön går det att bestämma livslängd och prioritering. Prioritet kan sättas till 1, 2 eller 3. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "warning"
      }), " har dock alltid högsta prioritet och kommer därmed först i kön."]
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
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "Toast"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "toastregion",
      children: "ToastRegion"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "ToastRegion",
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "globaltoastregion",
      children: "GlobalToastRegion"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
      name: "GlobalToastRegion",
      defaultOpen: false
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "toastprovider",
      children: "ToastProvider"
    }), "\n", (0,jsx_runtime.jsx)(PropsTable/* PropTable */.U, {
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



/***/ },

/***/ 28777
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover_Popover)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
;// ./packages/components/src/popover/Popover.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Popover_module = ({"popover":"popover_qr_p","arrow":"arrow_bhQK"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(45745);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/popover/Popover.tsx
var _excluded=["children","className","offset","hideArrow"];function Popover_Popover(_ref){var children=_ref.children,className=_ref.className,_ref$offset=_ref.offset,offset=_ref$offset===void 0?4:_ref$offset,_ref$hideArrow=_ref.hideArrow,hideArrow=_ref$hideArrow===void 0?false:_ref$hideArrow,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Popover/* Popover */.A,Object.assign({},props,{offset:offset,className:(0,clsx/* default */.A)(Popover_module.popover,className),children:[!hideArrow&&/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Popover_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L8 8 L16 0"})})}),children]}));}

/***/ },

/***/ 30601
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r$: () => (/* binding */ GlobalToastRegion),
  ni: () => (/* binding */ toastQueue)
});

// UNUSED EXPORTS: Toast, ToastProvider, ToastRegion, useToastState

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/@react-aria/toast/dist/useToastRegion.mjs + 1 modules
var useToastRegion = __webpack_require__(96766);
// EXTERNAL MODULE: ./node_modules/@react-aria/toast/dist/useToast.mjs
var useToast = __webpack_require__(15568);
// EXTERNAL MODULE: ./node_modules/@react-stately/toast/dist/useToastState.mjs
var dist_useToastState = __webpack_require__(8737);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
;// ./packages/components/src/toast/Toast.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Toast_module = ({"toastRegion":"toastRegion_KbVp","toast":"toast_gxso","success":"success_KyPa","info":"info_RCx7","important":"important_YYqr","warning":"warning_Rmak","icon":"icon_ZuqY","toastContent":"toastContent_LoSC","toastMessage":"toastMessage_HVa6","slideInTop":"slideInTop_NcfI","slideInEnd":"slideInEnd_Alfu","slideOutTop":"slideOutTop_Hd_W","slideOutEnd":"slideOutEnd_O0VY"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/common/FeedbackStatusIcon.tsx + 1 modules
var FeedbackStatusIcon = __webpack_require__(74890);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/toast/Toast.tsx
'use client';var _excluded=(/* unused pure expression or super */ null && (["children"])),_excluded2=["state","className"],_excluded3=["state","className"];var toastStateProps={wrapUpdate:function wrapUpdate(fn){if('startViewTransition'in document){document.startViewTransition(function(){(0,react_dom.flushSync)(fn);});}else{fn();}},maxVisibleToasts:5};var toastQueue=new dist_useToastState/* ToastQueue */.Vv(toastStateProps);var GlobalToastRegion=function GlobalToastRegion(props){var state=(0,dist_useToastState/* useToastQueue */.oS)(toastQueue);return state.visibleToasts.length>0?/*#__PURE__*/(0,react_dom.createPortal)(/*#__PURE__*/(0,jsx_runtime.jsx)(ToastRegion,Object.assign({},props,{state:state})),document.body):null;};var ToastProvider=function ToastProvider(_ref){var children=_ref.children,props=_objectWithoutPropertiesLoose(_ref,_excluded);var state=useToastState(toastStateProps);return/*#__PURE__*/_jsxs(_Fragment,{children:[typeof children==='function'?children(state):children,state.visibleToasts.length>0&&/*#__PURE__*/_jsx(ToastRegion,Object.assign({},props,{state:state}))]});};function ToastRegion(_ref2){var state=_ref2.state,className=_ref2.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);var ref=react.useRef(null);var _useToastRegion=(0,useToastRegion/* useToastRegion */.J)(props,state,ref),regionProps=_useToastRegion.regionProps;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},regionProps,{ref:ref,className:(0,clsx/* default */.A)(Toast_module.toastRegion,className),children:state.visibleToasts.map(function(toast){return/*#__PURE__*/(0,jsx_runtime.jsx)(Toast,{toast:toast,state:state},toast.key);})}));}function Toast(_ref3){var state=_ref3.state,className=_ref3.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref3,_excluded3);var ref=react.useRef(null);var _useToast=(0,useToast/* useToast */.d)(props,state,ref),toastProps=_useToast.toastProps,contentProps=_useToast.contentProps,titleProps=_useToast.titleProps,closeButtonProps=_useToast.closeButtonProps;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({},toastProps,{ref:ref,className:(0,clsx/* default */.A)(Toast_module.toast,Toast_module[props.toast.content.type],className),style:{viewTransitionName:props.toast.key},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({},contentProps,{className:(0,clsx/* default */.A)(Toast_module.toastContent,contentProps.className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FeedbackStatusIcon/* FeedbackStatusIcon */.$,{"aria-hidden":true,className:Toast_module.icon,status:props.toast.content.type}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",Object.assign({className:Toast_module.toastMessage},titleProps,{children:props.toast.content.message})),props.toast.content.children]})]})),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,Object.assign({variant:"icon"},closeButtonProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})}))]}));}

/***/ },

/***/ 38739
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container_uCKZ","removeMargins":"removeMargins_rQ9U","contained":"contained_R9lB","flex":"flex_LQ20","fluid":"fluid_Y1tE","col":"col_tmG6","col-1":"col-1_OVvW","col-2":"col-2_XfVI","col-3":"col-3_KxqE","col-quarter":"col-quarter_eUut","col-4":"col-4_Ovxr","col-third":"col-third_FUaF","col-5":"col-5_uIyd","col-6":"col-6_i8WR","col-half":"col-half_GzSn","col-7":"col-7_devX","col-8":"col-8_tlAZ","col-9":"col-9_Nbjm","col-10":"col-10_rwyP","col-11":"col-11_ShOw","col-12":"col-12_eQeJ","col-full":"col-full_K_XT","col-auto":"col-auto_nMhH","col-grow":"col-grow_TBON","col-xs-1":"col-xs-1_Bg_O","col-xs-2":"col-xs-2_UhmL","col-xs-3":"col-xs-3_mEvh","col-xs-quarter":"col-xs-quarter_mtoI","col-xs-4":"col-xs-4_Uv5i","col-xs-third":"col-xs-third_AHrM","col-xs-5":"col-xs-5_Gdnm","col-xs-6":"col-xs-6_z366","col-xs-half":"col-xs-half_vH6m","col-xs-7":"col-xs-7_HNwO","col-xs-8":"col-xs-8_Vwih","col-xs-9":"col-xs-9_vfTc","col-xs-10":"col-xs-10_wJWt","col-xs-11":"col-xs-11_KTEA","col-xs-12":"col-xs-12_TaE_","col-xs-full":"col-xs-full_enWi","col-xs-auto":"col-xs-auto_G2jj","col-xs-grow":"col-xs-grow_kY1W","col-sm-1":"col-sm-1_YvIs","col-sm-2":"col-sm-2_NSCq","col-sm-3":"col-sm-3_cJ0H","col-sm-quarter":"col-sm-quarter_WWBJ","col-sm-4":"col-sm-4_dtZx","col-sm-third":"col-sm-third_g3dG","col-sm-5":"col-sm-5_C87q","col-sm-6":"col-sm-6_SkMd","col-sm-half":"col-sm-half_QX4f","col-sm-7":"col-sm-7_wa6s","col-sm-8":"col-sm-8_zH5I","col-sm-9":"col-sm-9_ym4Z","col-sm-10":"col-sm-10_jE4j","col-sm-11":"col-sm-11_Va2g","col-sm-12":"col-sm-12_BgjD","col-sm-full":"col-sm-full_Nb6O","col-sm-auto":"col-sm-auto_Qj4m","col-sm-grow":"col-sm-grow_mAH5","col-md-1":"col-md-1_Zeqd","col-md-2":"col-md-2_DR6K","col-md-3":"col-md-3_OZK7","col-md-quarter":"col-md-quarter_AmxM","col-md-4":"col-md-4_NxEu","col-md-third":"col-md-third_J4Ja","col-md-5":"col-md-5_cBkY","col-md-6":"col-md-6_it5t","col-md-half":"col-md-half_aEv_","col-md-7":"col-md-7__sAT","col-md-8":"col-md-8_WfW7","col-md-9":"col-md-9_orzQ","col-md-10":"col-md-10_wh5t","col-md-11":"col-md-11_Wsgq","col-md-12":"col-md-12_gZQg","col-md-full":"col-md-full_Ow4Z","col-md-auto":"col-md-auto_e67j","col-md-grow":"col-md-grow_quHq","col-lg-1":"col-lg-1_e1au","col-lg-2":"col-lg-2_fUsj","col-lg-3":"col-lg-3_EhhM","col-lg-quarter":"col-lg-quarter_SI9I","col-lg-4":"col-lg-4_VuKz","col-lg-third":"col-lg-third_Lf2A","col-lg-5":"col-lg-5_TF5r","col-lg-6":"col-lg-6_E93v","col-lg-half":"col-lg-half_ZdoE","col-lg-7":"col-lg-7_L5CO","col-lg-8":"col-lg-8_ZBHN","col-lg-9":"col-lg-9_TbUu","col-lg-10":"col-lg-10_Tsqu","col-lg-11":"col-lg-11_Eg8x","col-lg-12":"col-lg-12_eNvi","col-lg-full":"col-lg-full_SaRE","col-lg-auto":"col-lg-auto_fNRO","col-lg-grow":"col-lg-grow_XTrt","col-xl-1":"col-xl-1_BRna","col-xl-2":"col-xl-2_eGSK","col-xl-3":"col-xl-3_RrW2","col-xl-quarter":"col-xl-quarter_V_Yw","col-xl-4":"col-xl-4_R4AZ","col-xl-third":"col-xl-third_W3hT","col-xl-5":"col-xl-5_k7Gx","col-xl-6":"col-xl-6_xZyb","col-xl-half":"col-xl-half_V9xE","col-xl-7":"col-xl-7_lJfg","col-xl-8":"col-xl-8_zErQ","col-xl-9":"col-xl-9_oYwQ","col-xl-10":"col-xl-10_cLTa","col-xl-11":"col-xl-11_xqWK","col-xl-12":"col-xl-12_Vrsf","col-xl-full":"col-xl-full_vVSm","col-xl-auto":"col-xl-auto_YBap","col-xl-grow":"col-xl-grow_YMBn","offset-1":"offset-1_ZQkJ","offset-2":"offset-2_Reek","offset-3":"offset-3_SDkl","offset-quarter":"offset-quarter_ho5e","offset-4":"offset-4_L0XB","offset-third":"offset-third_dE8e","offset-5":"offset-5_Mz95","offset-6":"offset-6_Zp68","offset-half":"offset-half_nGtc","offset-7":"offset-7_ZApX","offset-8":"offset-8_UZTZ","offset-9":"offset-9_FiKS","offset-10":"offset-10_hN9R","offset-11":"offset-11_cqgv","offset-auto":"offset-auto_ZBrI","offset-xs-1":"offset-xs-1__ZrT","offset-xs-2":"offset-xs-2_WySR","offset-xs-3":"offset-xs-3_u9Tb","offset-xs-quarter":"offset-xs-quarter_Pd1o","offset-xs-4":"offset-xs-4_Bibg","offset-xs-third":"offset-xs-third_CeeW","offset-xs-5":"offset-xs-5_OgED","offset-xs-6":"offset-xs-6_ihSu","offset-xs-half":"offset-xs-half_Vrdz","offset-xs-7":"offset-xs-7_TtZQ","offset-xs-8":"offset-xs-8_Ftc2","offset-xs-9":"offset-xs-9_HptZ","offset-xs-10":"offset-xs-10_umjb","offset-xs-11":"offset-xs-11_Suix","offset-xs-auto":"offset-xs-auto_fxe8","offset-sm-1":"offset-sm-1_knSM","offset-sm-2":"offset-sm-2_zWxo","offset-sm-3":"offset-sm-3_oqp6","offset-sm-quarter":"offset-sm-quarter_Nav1","offset-sm-4":"offset-sm-4_EvUX","offset-sm-third":"offset-sm-third_tGgh","offset-sm-5":"offset-sm-5_raNi","offset-sm-6":"offset-sm-6_KTA8","offset-sm-half":"offset-sm-half_ab81","offset-sm-7":"offset-sm-7_duQl","offset-sm-8":"offset-sm-8_uRxp","offset-sm-9":"offset-sm-9_AqYl","offset-sm-10":"offset-sm-10_Wt6J","offset-sm-11":"offset-sm-11_yAYq","offset-sm-auto":"offset-sm-auto_FAp6","offset-md-1":"offset-md-1_OpgB","offset-md-2":"offset-md-2_U24n","offset-md-3":"offset-md-3_YxnQ","offset-md-quarter":"offset-md-quarter_y53T","offset-md-4":"offset-md-4_ZaOC","offset-md-third":"offset-md-third_HZWP","offset-md-5":"offset-md-5_KVFL","offset-md-6":"offset-md-6_bZvL","offset-md-half":"offset-md-half_yilA","offset-md-7":"offset-md-7_fs04","offset-md-8":"offset-md-8_QmYF","offset-md-9":"offset-md-9_QoVc","offset-md-10":"offset-md-10_OrE0","offset-md-11":"offset-md-11_reKz","offset-md-auto":"offset-md-auto_ETdh","offset-lg-1":"offset-lg-1_zi3j","offset-lg-2":"offset-lg-2_YgjU","offset-lg-3":"offset-lg-3_CHdw","offset-lg-quarter":"offset-lg-quarter_Chor","offset-lg-4":"offset-lg-4_NOCF","offset-lg-third":"offset-lg-third_LTbL","offset-lg-5":"offset-lg-5_dGzM","offset-lg-6":"offset-lg-6_kXXi","offset-lg-half":"offset-lg-half_vFHN","offset-lg-7":"offset-lg-7_jIth","offset-lg-8":"offset-lg-8_T0Jx","offset-lg-9":"offset-lg-9_mYmL","offset-lg-10":"offset-lg-10_clJ6","offset-lg-11":"offset-lg-11_zFW2","offset-lg-auto":"offset-lg-auto_W3q4","offset-xl-1":"offset-xl-1_pRWH","offset-xl-2":"offset-xl-2_FX3q","offset-xl-3":"offset-xl-3_P8xx","offset-xl-quarter":"offset-xl-quarter_RLTy","offset-xl-4":"offset-xl-4_n7Vy","offset-xl-third":"offset-xl-third_w0fc","offset-xl-5":"offset-xl-5_vC_8","offset-xl-6":"offset-xl-6_BvQ2","offset-xl-half":"offset-xl-half_HQ16","offset-xl-7":"offset-xl-7_m1bv","offset-xl-8":"offset-xl-8_FJ1u","offset-xl-9":"offset-xl-9_oAbC","offset-xl-10":"offset-xl-10_wwaH","offset-xl-11":"offset-xl-11_HpDF","offset-xl-auto":"offset-xl-auto_Dv5P"});

/***/ },

/***/ 45644
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ AccordionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var AccordionContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

/***/ },

/***/ 56636
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ LinkButton)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(20454);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var Link = __webpack_require__(73099);
;// ./packages/components/src/link-button/LinkButton.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const LinkButton_module = ({"linkButton":"linkButton_DlJV","secondary":"secondary_aNB6","icon":"icon_g3pu","tertiary":"tertiary_tl3f","danger":"danger_qkvT","iconBtn":"iconBtn_Ngss","medium":"medium_St93","iconLeft":"iconLeft_r90N","fullwidth":"fullwidth_yUSG","button":"button_CzNs"});
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
var square_arrow_out_up_right = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.js
var arrow_left = __webpack_require__(90232);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/link-button/LinkButton.tsx
'use client';var _excluded=["children","variant","fullwidth","icon","iconPlacement","className","as","size"];/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */var LinkButton=function LinkButton(_ref){var children=_ref.children,variant=_ref.variant,fullwidth=_ref.fullwidth,IconComponent=_ref.icon,iconPlacement=_ref.iconPlacement,className=_ref.className,as=_ref.as,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||Link/* Link */.N;var Icon=function Icon(_ref2){var rest=Object.assign({},((0,objectDestructuringEmpty/* default */.A)(_ref2),_ref2));if(IconComponent)return/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,Object.assign({},rest));if(rest.target==='_blank')return/*#__PURE__*/(0,jsx_runtime.jsx)(square_arrow_out_up_right/* default */.A,Object.assign({},rest));if(iconPlacement==='left')return/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_left/* default */.A,Object.assign({},rest));return/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_right/* default */.A,Object.assign({},rest));};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,Object.assign({className:(0,clsx/* default */.A)(LinkButton_module.linkButton,variant==='primary'&&LinkButton_module.primary,variant==='secondary'&&LinkButton_module.secondary,variant==='tertiary'&&LinkButton_module.tertiary,variant==='danger'&&LinkButton_module.danger,variant==='icon'&&LinkButton_module.iconBtn,size==='medium'&&LinkButton_module.medium,fullwidth&&LinkButton_module.fullwidth,iconPlacement==='left'&&LinkButton_module.iconLeft,className)},rest,{children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{size:20,className:LinkButton_module.icon})]}));};

/***/ },

/***/ 68713
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ PropTable)
});

// UNUSED EXPORTS: DisplayCompositeTypes

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useGlobalData.js
var useGlobalData = __webpack_require__(66588);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(28777);
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx + 1 modules
var Accordion = __webpack_require__(11046);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx + 1 modules
var AccordionItem = __webpack_require__(93777);
;// ./apps/docs/src/css/propstable.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const propstable_module = ({"accordion":"accordion_M8EQ","propsGridTable":"propsGridTable_luj3","popover":"popover_gEf7","arrow":"arrow_kUCF"});
// EXTERNAL MODULE: ./node_modules/react-markdown/lib/index.js + 138 modules
var lib = __webpack_require__(61522);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/Lowlight.js + 2 modules
var Lowlight = __webpack_require__(80556);
// EXTERNAL MODULE: ./node_modules/react-lowlight/src/common.js + 38 modules
var common = __webpack_require__(12665);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/Pressable.mjs
var Pressable = __webpack_require__(94752);
;// ./apps/docs/src/utils/jsdocLinkToMarkdown.ts
var jsdocLinkToMarkdown=function jsdocLinkToMarkdown(jsdocLink){if(!jsdocLink.includes('@link')){return jsdocLink;}var textBefore=jsdocLink.substring(0,jsdocLink.indexOf('{@link')).replace(/@\S*/g,'');var url=jsdocLink.substring(jsdocLink.indexOf('http'),jsdocLink.lastIndexOf('/'));var linkText=jsdocLink.substring(jsdocLink.lastIndexOf('/')+2,jsdocLink.lastIndexOf('}'));return textBefore+". See ["+linkText+"]("+url+").";};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/PropsTable.tsx
var DisplayCompositeTypes=function DisplayCompositeTypes(_ref){var props=_ref.props;switch(props.type.name){case'enum':{return/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Pressable/* Pressable */.o,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{role:"button",style:{cursor:'pointer'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props.type.raw,inline:true,language:"typescript",markers:[]})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"hljs-code",children:props.type.value.map(function(r,i){return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{children:[i===0?' ':' | ',/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:r.value.replace(/"/g,"'"),inline:true,language:"typescript",markers:[]})]},""+r.value+i);})})})]});}default:return/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props.type.name,inline:true,language:"typescript",markers:[]});}};var PropTable=function PropTable(_ref2){var _globalData$docusauru,_componentsDocs$find;var name=_ref2.name,_ref2$defaultOpen=_ref2.defaultOpen,defaultOpen=_ref2$defaultOpen===void 0?true:_ref2$defaultOpen;var globalData=(0,useGlobalData/* default */.Ay)();var componentsDocs=(_globalData$docusauru=globalData['docusaurus-plugin-react-docgen-typescript'])==null?void 0:_globalData$docusauru["default"];if(!componentsDocs){return null;}var props=(_componentsDocs$find=componentsDocs.find(function(componentDoc){return componentDoc.displayName===name;}))==null?void 0:_componentsDocs$find.props;if(!props){return null;}var _Object$entries$reduc=Object.entries(props).reduce(function(acc,_ref3){var key=_ref3[0],value=_ref3[1];if(key.startsWith('on')){acc.events[key]=value;}else if(key.startsWith('aria-')){acc.accessibility[key]=value;}else{acc.rest[key]=value;}return acc;},{events:{},accessibility:{},rest:{}}),events=_Object$entries$reduc.events,accessibility=_Object$entries$reduc.accessibility,rest=_Object$entries$reduc.rest;var Grid=function Grid(_ref4){var propGroup=_ref4.propGroup,_ref4$showDefault=_ref4.showDefault,showDefault=_ref4$showDefault===void 0?true:_ref4$showDefault;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:propstable_module.propsGridTable,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Name"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Type"}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:showDefault&&'Default'}),/*#__PURE__*/(0,jsx_runtime.jsx)("th",{children:"Description"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{children:Object.keys(propGroup).map(function(key){return/*#__PURE__*/(0,jsx_runtime.jsxs)("tr",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("td",{"data-title":"Name",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:key,inline:true,language:"typescript",markers:[]}),props[key].required&&' *']}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Type",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DisplayCompositeTypes,{props:props[key]})}),showDefault?/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Default",children:props[key].defaultValue?/*#__PURE__*/(0,jsx_runtime.jsx)(Lowlight/* default */.A,{value:props[key].defaultValue.value,inline:true,language:"typescript",markers:[]}):'-'}):/*#__PURE__*/(0,jsx_runtime.jsx)("td",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("td",{"data-title":"Description",children:/*#__PURE__*/(0,jsx_runtime.jsx)(lib/* Markdown */.oz,{children:jsdocLinkToMarkdown(props[key].description)})})]},key);})})]})});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Accordion/* Accordion */.n,{className:propstable_module.accordion,allowsMultipleExpanded:true,defaultExpandedKeys:defaultOpen?['props']:[],children:[Object.getOwnPropertyNames(rest).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"props",title:"Props",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:rest})}),Object.getOwnPropertyNames(events).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"events",title:"Events",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:events,showDefault:false})}),Object.getOwnPropertyNames(accessibility).length!==0&&/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionItem/* AccordionItem */.A,{id:"accessibility",title:"Tillg\xE4nglighet",className:propstable_module.accordionItem,hasBackground:false,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{propGroup:accessibility,showDefault:false})})]});};

/***/ },

/***/ 74351
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38739);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1160);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
var _excluded=["children","isContained","removeMargins"];/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/grid}
 */var Grid=function Grid(_ref){var children=_ref.children,_ref$isContained=_ref.isContained,isContained=_ref$isContained===void 0?false:_ref$isContained,_ref$removeMargins=_ref.removeMargins,removeMargins=_ref$removeMargins===void 0?false:_ref$removeMargins,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",Object.assign({},rest,{className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.container,isContained&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.contained,removeMargins&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.removeMargins,rest.className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.flex,children:children})}));};

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

/***/ 75575
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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
var _excluded=["color","size"];var StorybookIcon=/* @__PURE__ */react.forwardRef(function(_ref,forwardedRef){var _ref$color=_ref.color,color=_ref$color===void 0?'currentColor':_ref$color,_ref$size=_ref.size,size=_ref$size===void 0?20:_ref$size,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{viewBox:"-31.5 0 319 319",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",fill:"#000000",width:size,height:size,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),/*#__PURE__*/(0,jsx_runtime.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("defs",{children:[' ',/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z",id:"path-1",children:' '}),' ']}),' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("g",{children:[' ',/*#__PURE__*/(0,jsx_runtime.jsxs)("mask",{id:"mask-2",fill:"white",children:[' ',/*#__PURE__*/(0,jsx_runtime.jsx)("use",{href:"#path-1",children:" "}),' ']}),' ',/*#__PURE__*/(0,jsx_runtime.jsx)("use",{fill:color,fillRule:"nonzero",href:"#path-1",children:' '}),' ',/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z",fill:"#FFFFFF",fillRule:"nonzero",mask:"url(#mask-2)",children:' '}),' ']}),' ']})]});});
;// ./apps/docs/src/components/icons/Empty.tsx
var EmptyIcon=function EmptyIcon(){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{height:0,width:0});};
;// ./apps/docs/src/components/icons/index.ts


/***/ },

/***/ 93574
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ GridItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38739);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1160);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
var _excluded=["children","size","offset"];/**
 * Columns based on display: flex;
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */var GridItem=function GridItem(_ref){var children=_ref.children,size=_ref.size,offset=_ref.offset,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref,_excluded);var offsetClass=offset?"offset-"+offset:'';var sizeClasses=getSizeClasses(size);var offsetClasses=getOffsetClasses(offset);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",Object.assign({},props,{className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.col,_Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A[offsetClass],sizeClasses.map(function(cls){return _Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A[cls];}),offsetClasses.map(function(cls){return _Grid_module_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A[cls];}),props.className),children:children}));};var getSizeClasses=function getSizeClasses(size){if(!size)return[];if(typeof size==='object'){return Object.entries(size).map(function(_ref2){var breakpoint=_ref2[0],value=_ref2[1];return breakpoint==='xs'?"col-"+value:"col-"+breakpoint+"-"+value;});}return["col-"+size];};var getOffsetClasses=function getOffsetClasses(offset){if(!offset)return[];if(typeof offset==='object'){return Object.entries(offset).map(function(_ref3){var breakpoint=_ref3[0],value=_ref3[1];return breakpoint==='xs'?"offset-"+value:"offset-"+breakpoint+"-"+value;});}return["offset-"+offset];};

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

/***/ }

}]);