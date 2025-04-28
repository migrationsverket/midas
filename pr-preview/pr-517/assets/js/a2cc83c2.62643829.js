"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6796],{

/***/ 19893:
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
const site_docs_components_toast_mdx_a2c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/toast","title":"Toast","description":"Toasts visar korta, tillfälliga meddelanden om åtgärder, fel eller andra händelser i en applikation.","source":"@site/docs/components/toast.mdx","sourceDirName":"components","slug":"/components/toast","permalink":"/pr-preview/pr-517/components/toast","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Toast","description":"Toasts visar korta, tillfälliga meddelanden om åtgärder, fel eller andra händelser i en applikation.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 187 modules
var propsTable = __webpack_require__(35926);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(35518);
// EXTERNAL MODULE: ./node_modules/@react-aria/toast/dist/useToastRegion.mjs + 1 modules
var useToastRegion = __webpack_require__(96766);
// EXTERNAL MODULE: ./node_modules/@react-aria/toast/dist/useToast.mjs
var useToast = __webpack_require__(93187);
// EXTERNAL MODULE: ./node_modules/@react-stately/toast/dist/useToastState.mjs
var useToastState = __webpack_require__(8737);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
;// ./packages/components/src/toast/Toast.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Toast_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--support-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--support-border-success":"light-dark(#008d3c, #008d3c)","--support-background-info":"light-dark(#eaf2f6, light-dark(#f2f2f2, #262626))","--support-border-info":"light-dark(#0066cc, #0066cc)","--support-background-important":"light-dark(#fff8e1, light-dark(#f2f2f2, #262626))","--support-border-important":"light-dark(#fdb813, #fdb813)","--support-border-warning":"light-dark(#e62323, #e62323)","--support-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--breakpoint-md":"(min-width: 768px)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","--z-index-toast":"1100","toastRegion":"toastRegion_KbVp","toast":"toast_gxso","success":"success_KyPa","info":"info_RCx7","important":"important_YYqr","warning":"warning_Rmak","icon":"icon_ZuqY","toastContent":"toastContent_LoSC","toastMessage":"toastMessage_HVa6","slideInTop":"slideInTop_NcfI","slideInEnd":"slideInEnd_Alfu","slideOutTop":"slideOutTop_Hd_W","slideOutEnd":"slideOutEnd_O0VY"});
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
;// ./packages/components/src/toast/Toast.tsx
'use client';var _excluded=(/* unused pure expression or super */ null && (["children"])),_excluded2=["state"],_excluded3=["state"];var iconMap={success:circle_check/* default */.A,info:info/* default */.A,important:circle_alert/* default */.A,warning:triangle_alert/* default */.A};var toastStateProps={wrapUpdate:function wrapUpdate(fn){if('startViewTransition'in document){document.startViewTransition(function(){(0,react_dom.flushSync)(fn);});}else{fn();}},maxVisibleToasts:5};/**
 * Temporary implementation of https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/toast/src/useToastState.ts#L59
 * TODO: Erase this as soon as react-stately is released
 */function Toast_useToastState(props){if(props===void 0){props={};}var _props=props,_props$maxVisibleToas=_props.maxVisibleToasts,maxVisibleToasts=_props$maxVisibleToas===void 0?1:_props$maxVisibleToas,wrapUpdate=_props.wrapUpdate;var queue=useMemo(function(){return new ToastQueue({maxVisibleToasts:maxVisibleToasts,wrapUpdate:wrapUpdate});},[maxVisibleToasts,wrapUpdate]);return useToastQueue(queue);}var toastQueue=new useToastState/* ToastQueue */.Vv(toastStateProps);var GlobalToastRegion=function GlobalToastRegion(props){var state=(0,useToastState/* useToastQueue */.oS)(toastQueue);return state.visibleToasts.length>0?/*#__PURE__*/(0,react_dom.createPortal)(/*#__PURE__*/(0,jsx_runtime.jsx)(ToastRegion,Object.assign({},props,{state:state})),document.body):null;};var ToastProvider=function ToastProvider(_ref){var children=_ref.children,props=_objectWithoutPropertiesLoose(_ref,_excluded);var state=Toast_useToastState(toastStateProps);return/*#__PURE__*/_jsxs(_Fragment,{children:[typeof children==='function'?children(state):children,state.visibleToasts.length>0&&/*#__PURE__*/_jsx(ToastRegion,Object.assign({},props,{state:state}))]});};function ToastRegion(_ref2){var state=_ref2.state,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);var ref=react.useRef(null);var _useToastRegion=(0,useToastRegion/* useToastRegion */.J)(props,state,ref),regionProps=_useToastRegion.regionProps;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},regionProps,{ref:ref,className:Toast_module.toastRegion,children:state.visibleToasts.map(function(toast){return/*#__PURE__*/(0,jsx_runtime.jsx)(Toast,{toast:toast,state:state},toast.key);})}));}function Toast(_ref3){var state=_ref3.state,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref3,_excluded3);var ref=react.useRef(null);var _useToast=(0,useToast/* useToast */.d)(props,state,ref),toastProps=_useToast.toastProps,contentProps=_useToast.contentProps,titleProps=_useToast.titleProps,closeButtonProps=_useToast.closeButtonProps;var Icon=iconMap[props.toast.content.type];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({},toastProps,{ref:ref,className:(0,clsx/* default */.A)(Toast_module.toast,Toast_module[props.toast.content.type]),style:{viewTransitionName:props.toast.key},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({className:Toast_module.toastContent},contentProps,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{className:Toast_module.icon,size:20,"aria-hidden":true}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",Object.assign({className:Toast_module.toastMessage},titleProps,{children:props.toast.content.message})),props.toast.content.children]})]})),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,Object.assign({variant:"icon"},closeButtonProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})}))]}));}
// EXTERNAL MODULE: ./packages/components/src/flex/Flex.tsx
var Flex = __webpack_require__(39996);
// EXTERNAL MODULE: ./packages/components/src/flex/FlexItem.tsx
var FlexItem = __webpack_require__(52981);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
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
  "value": "Installation",
  "id": "installation",
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
      name: 'Toast',
      friendlyName: 'Notifiering, notiser',
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/useToast.html"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponent för att visa ett kort, tillfälligt meddelanden om åtgärder, fel eller andra händelser i en applikation."
    }), "\n", (0,jsx_runtime.jsx)(GlobalToastRegion, {}), "\n", (0,jsx_runtime.jsx)(Button/* Button */.$, {
      onPress: () => toastQueue.add({
        type: 'success',
        message: 'Allt funkar som det ska!'
      }, {
        timeout: 5000
      }),
      children: 'Tryck här för en notifiering'
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
        children: "import { ToastProvider } from '@midas-ds/components'\n"
      })
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
    }), "\n", (0,jsx_runtime.jsxs)(Flex/* Flex */.s, {
      fluid: true,
      children: [(0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z, {
        col: 3,
        children: (0,jsx_runtime.jsx)(Button/* Button */.$, {
          onPress: () => toastQueue.add({
            type: 'success',
            message: 'Allt funkar som det ska!'
          }, {
            timeout: 5000
          }),
          children: 'Success'
        })
      }), (0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z, {
        col: 3,
        children: (0,jsx_runtime.jsx)(Button/* Button */.$, {
          onPress: () => toastQueue.add({
            type: 'info',
            message: 'Här kommer ett meddelande'
          }, {
            timeout: 5000
          }),
          children: 'Info'
        })
      }), (0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z, {
        col: 3,
        children: (0,jsx_runtime.jsx)(Button/* Button */.$, {
          onPress: () => toastQueue.add({
            message: 'Viktigt meddelande',
            type: 'important'
          }, {
            timeout: 5000
          }),
          children: 'Important'
        })
      }), (0,jsx_runtime.jsx)(FlexItem/* FlexItem */.Z, {
        col: 3,
        children: (0,jsx_runtime.jsx)(Button/* Button */.$, {
          onPress: () => toastQueue.add({
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



/***/ })

}]);