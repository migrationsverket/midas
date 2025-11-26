"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[3290],{

/***/ 7344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ iconMap)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(418);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45773);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59155);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97213);
var iconMap={success:lucide_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,info:lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,important:lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,warning:lucide_react__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A};

/***/ }),

/***/ 30601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
var useToastState = __webpack_require__(8737);
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
// EXTERNAL MODULE: ./packages/components/src/common/icon-map.ts
var icon_map = __webpack_require__(7344);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/toast/Toast.tsx
'use client';var _excluded=(/* unused pure expression or super */ null && (["children"])),_excluded2=["state","className"],_excluded3=["state","className"];var toastStateProps={wrapUpdate:function wrapUpdate(fn){if('startViewTransition'in document){document.startViewTransition(function(){(0,react_dom.flushSync)(fn);});}else{fn();}},maxVisibleToasts:5};/**
 * Temporary implementation of https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/toast/src/useToastState.ts#L59
 * TODO: Erase this as soon as react-stately is released
 */function Toast_useToastState(props){if(props===void 0){props={};}var _props=props,_props$maxVisibleToas=_props.maxVisibleToasts,maxVisibleToasts=_props$maxVisibleToas===void 0?1:_props$maxVisibleToas,wrapUpdate=_props.wrapUpdate;var queue=useMemo(function(){return new ToastQueue({maxVisibleToasts:maxVisibleToasts,wrapUpdate:wrapUpdate});},[maxVisibleToasts,wrapUpdate]);return useToastQueue(queue);}var toastQueue=new useToastState/* ToastQueue */.Vv(toastStateProps);var GlobalToastRegion=function GlobalToastRegion(props){var state=(0,useToastState/* useToastQueue */.oS)(toastQueue);return state.visibleToasts.length>0?/*#__PURE__*/(0,react_dom.createPortal)(/*#__PURE__*/(0,jsx_runtime.jsx)(ToastRegion,Object.assign({},props,{state:state})),document.body):null;};var ToastProvider=function ToastProvider(_ref){var children=_ref.children,props=_objectWithoutPropertiesLoose(_ref,_excluded);var state=Toast_useToastState(toastStateProps);return/*#__PURE__*/_jsxs(_Fragment,{children:[typeof children==='function'?children(state):children,state.visibleToasts.length>0&&/*#__PURE__*/_jsx(ToastRegion,Object.assign({},props,{state:state}))]});};function ToastRegion(_ref2){var state=_ref2.state,className=_ref2.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);var ref=react.useRef(null);var _useToastRegion=(0,useToastRegion/* useToastRegion */.J)(props,state,ref),regionProps=_useToastRegion.regionProps;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},regionProps,{ref:ref,className:(0,clsx/* default */.A)(Toast_module.toastRegion,className),children:state.visibleToasts.map(function(toast){return/*#__PURE__*/(0,jsx_runtime.jsx)(Toast,{toast:toast,state:state},toast.key);})}));}function Toast(_ref3){var state=_ref3.state,className=_ref3.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref3,_excluded3);var ref=react.useRef(null);var _useToast=(0,useToast/* useToast */.d)(props,state,ref),toastProps=_useToast.toastProps,contentProps=_useToast.contentProps,titleProps=_useToast.titleProps,closeButtonProps=_useToast.closeButtonProps;var Icon=icon_map/* iconMap */.K[props.toast.content.type];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({},toastProps,{ref:ref,className:(0,clsx/* default */.A)(Toast_module.toast,Toast_module[props.toast.content.type],className),style:{viewTransitionName:props.toast.key},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({},contentProps,{className:(0,clsx/* default */.A)(Toast_module.toastContent,contentProps.className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{className:Toast_module.icon,size:20,"aria-hidden":true}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",Object.assign({className:Toast_module.toastMessage},titleProps,{children:props.toast.content.message})),props.toast.content.children]})]})),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,Object.assign({variant:"icon"},closeButtonProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})}))]}));}

/***/ }),

/***/ 86470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_basics_icons_mdx_79d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-basics-icons-mdx-79d.json
const site_docs_basics_icons_mdx_79d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"basics/icons","title":"Ikoner","description":"Ikoner används som ett komplement till text för att underlätta för användaren. Midas använder Lucide Icons som ikonbibliotek. Vi använder ikonerna direkt från Lucide, utan några modifieringar.","source":"@site/docs/basics/icons.mdx","sourceDirName":"basics","slug":"/basics/icons","permalink":"/pr-preview/pr-945/basics/icons","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"icons","title":"Ikoner","sidebar_position":3,"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/menu.js
var menu = __webpack_require__(89230);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js
var ellipsis_vertical = __webpack_require__(3213);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.js
var arrow_left = __webpack_require__(90232);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-up.js
var chevron_up = __webpack_require__(72102);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(45773);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(97213);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/flag.js
var flag = __webpack_require__(59155);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(418);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/plus.js
var plus = __webpack_require__(80697);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/minus.js
var minus = __webpack_require__(86241);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trash-2.js
var trash_2 = __webpack_require__(32708);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/pencil.js
var pencil = __webpack_require__(65892);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.js
var search = __webpack_require__(98445);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js
var arrow_down_to_line = __webpack_require__(69750);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
var square_arrow_out_up_right = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/log-in.js
var log_in = __webpack_require__(6443);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/log-out.js
var log_out = __webpack_require__(55042);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar-days.js
var calendar_days = __webpack_require__(93347);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bell.js
var bell = __webpack_require__(49436);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/house.js
var house = __webpack_require__(91805);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/languages.js
var languages = __webpack_require__(91378);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/moon.js
var moon = __webpack_require__(88676);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/sun.js
var sun = __webpack_require__(14539);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/laptop.js
var laptop = __webpack_require__(15117);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regenerator.js
var regenerator = __webpack_require__(22007);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(10467);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/copy.js
var copy = __webpack_require__(35404);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
;// ./apps/docs/src/components/CopyButton.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CopyButton_module = ({"copyButtonContainer":"copyButtonContainer_oAdl","copyButton":"copyButton_Qjsd","copied":"copied_Ap6K"});
;// ./apps/docs/src/components/CopyButton.tsx
function CopyButton(_ref){var text=_ref.text;var _useState=(0,react.useState)(false),copied=_useState[0],setCopied=_useState[1];var handleClick=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee(){var _t;return (0,regenerator/* default */.A)().w(function(_context){while(1)switch(_context.n){case 0:_context.p=0;_context.n=1;return navigator.clipboard.writeText(text);case 1:setCopied(true);setTimeout(function(){return setCopied(false);},2000);_context.n=3;break;case 2:_context.p=2;_t=_context.v;console.error('Failed to copy:',_t);case 3:return _context.a(2);}},_callee,null,[[0,2]]);}));return function handleClick(){return _ref2.apply(this,arguments);};}();return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:CopyButton_module.copyButtonContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:CopyButton_module.text,children:text}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* Button */.$,{variant:"icon",size:"medium",onPress:handleClick,"aria-label":"Copy "+text,className:CopyButton_module.copyButton+" "+(copied?CopyButton_module.copied:''),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(copy/* default */.A,{size:16,"aria-hidden":true}),/*#__PURE__*/(0,jsx_runtime.jsx)(check/* default */.A,{size:16,"aria-hidden":true})]})]});}
// EXTERNAL MODULE: ./packages/components/src/toast/Toast.tsx + 1 modules
var Toast = __webpack_require__(30601);
;// ./apps/docs/docs/basics/icons.mdx


const frontMatter = {
	id: 'icons',
	title: 'Ikoner',
	sidebar_position: 3,
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};








const toc = [{
  "value": "Standardikoner",
  "id": "standardikoner",
  "level": 2
}, {
  "value": "Navigation",
  "id": "navigation",
  "level": 3
}, {
  "value": "Pilar/riktning",
  "id": "pilarriktning",
  "level": 3
}, {
  "value": "Status",
  "id": "status",
  "level": 3
}, {
  "value": "Action",
  "id": "action",
  "level": 3
}, {
  "value": "Länkar/Media",
  "id": "länkarmedia",
  "level": 3
}, {
  "value": "Övrigt",
  "id": "övrigt",
  "level": 3
}, {
  "value": "Egna ikoner",
  "id": "egna-ikoner",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ikoner används som ett komplement till text för att underlätta för användaren. Midas använder ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://lucide.dev/guide/packages/lucide-react",
        children: "Lucide Icons"
      }), " som ikonbibliotek. Vi använder ikonerna direkt från Lucide, utan några modifieringar."]
    }), "\n", (0,jsx_runtime.jsx)(Toast/* GlobalToastRegion */.r$, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "standardikoner",
      children: "Standardikoner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För att säkerställga enhetlighet och tydlighet har vi ett antal standardikoner som ska användas på samma sätt i alla system."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "navigation",
      children: "Navigation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ikon"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Namn"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Användning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(menu/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "Menu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Huvudmeny, meny"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(ellipsis_vertical/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "EllipsisVertical"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Meny"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pilarriktning",
      children: "Pilar/riktning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ikon"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Namn"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Användning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(arrow_right/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "ArrowRight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Höger, nästa"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(arrow_left/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "ArrowLeft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Vänster, tillbaka"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(chevron_down/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "ChevronDown"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Fäll ut, nedåt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(chevron_up/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "ChevronUp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Fäll ihop, uppåt"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "status",
      children: "Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ikon"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Namn"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Användning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(check/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "Check"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ok, slutfört"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(info/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "Info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(flag/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "Flag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Viktig information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(triangle_alert/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "TriangleAlert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Varning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "action",
      children: "Action"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ikon"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Namn"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Användning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(plus/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "Plus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Lägg till, öka"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(minus/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "Minus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ta bort, minska"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(trash_2/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "Trash2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ta bort, släng"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(pencil/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "Pencil"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Redigera"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(x/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "X"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Stäng, avbryt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(search/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sök"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "länkarmedia",
      children: "Länkar/Media"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ikon"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Namn"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Användning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(arrow_down_to_line/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "ArrowDownToLine"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ladda ner"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(square_arrow_out_up_right/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "SquareArrowOutUpRight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Extern länk"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "övrigt",
      children: "Övrigt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Ikon"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Namn"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Användning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(log_in/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "LogIn"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Logga in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(log_out/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "LogOut"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Logga ut"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(calendar_days/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "CalendarDays"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Kalender, datum, bokning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(bell/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "Bell"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Notifiering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(house/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "House"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Hem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(languages/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "Languages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Språkväxlare"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(moon/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "Moon"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Mörkt läge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(sun/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "Sun"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ljust läge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(laptop/* default */.A, {
              size: 20
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(CopyButton, {
              text: "Laptop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Systemläge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "egna-ikoner",
      children: "Egna ikoner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Om du har behov av en ikon som inte finns i Lucide icons, kontakta Midas-teamet för analys av behovet och möjliga lösningar."
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