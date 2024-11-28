(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[6796],{

/***/ 27942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
const site_docs_components_toast_mdx_a2c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/toast","title":"Toast","description":"Toasts visar korta, tillfälliga meddelanden om åtgärder, fel eller andra händelser i en applikation.","source":"@site/docs/components/toast.mdx","sourceDirName":"components","slug":"/components/toast","permalink":"/pr-preview/pr-160/components/toast","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Toast","description":"Toasts visar korta, tillfälliga meddelanden om åtgärder, fel eller andra händelser i en applikation.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(11470);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(19365);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx
var propsTable = __webpack_require__(91117);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/toast/dist/useToastRegion.mjs + 1 modules
var useToastRegion = __webpack_require__(96766);
// EXTERNAL MODULE: ./node_modules/@react-aria/toast/dist/useToast.mjs
var useToast = __webpack_require__(93187);
// EXTERNAL MODULE: ./node_modules/@react-stately/toast/dist/useToastState.mjs
var dist_useToastState = __webpack_require__(8737);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var src = __webpack_require__(63918);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-check.js
var circle_check = __webpack_require__(79804);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(97213);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-alert.js
var circle_alert = __webpack_require__(37946);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(418);
;// ./packages/toast/src/lib/Toast.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Toast_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","signalGreen10":"#d5f2d9","signalGreen100":"#008d3c","signalBlue10":"#eaf2f6","signalBlue100":"#0066cc","signalYellow10":"#fff8e1","signalYellow100":"#f1c21b","signalRed10":"#ffdfdf","signalRed100":"#e62323","gray150":"#1f1f1f","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","toastRegion":"toastRegion_D8P5","toast":"toast_KTs7","success":"success_uWpg","info":"info_gZit","important":"important_NPeI","warning":"warning_QRWE","icon":"icon_KIoW","slideIn":"slideIn_VQTe","slideOut":"slideOut_wWyA","fadeIn":"fadeIn_cOPN"});
;// ./packages/toast/src/lib/Toast.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */'use client';var _excluded=(/* unused pure expression or super */ null && (["children"])),_excluded2=["state"],_excluded3=["state"];function ToastProvider(_ref){var children=_ref.children,props=_objectWithoutPropertiesLoose(_ref,_excluded);var state=useToastState({maxVisibleToasts:5,hasExitAnimation:true});return/*#__PURE__*/_jsxs(_Fragment,{children:[children(state),state.visibleToasts.length>0&&/*#__PURE__*/_jsx(ToastRegion,Object.assign({},props,{state:state}))]});}function ToastRegion(_ref2){var state=_ref2.state,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);var ref=react.useRef(null);var _useToastRegion=(0,useToastRegion/* useToastRegion */.J)(props,state,ref),regionProps=_useToastRegion.regionProps;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},regionProps,{ref:ref,className:Toast_module.toastRegion,children:state.visibleToasts.map(function(toast){return/*#__PURE__*/(0,jsx_runtime.jsx)(Toast,{toast:toast,state:state},toast.key);})}));}function Toast(_ref3){var state=_ref3.state,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref3,_excluded3);var ref=react.useRef(null);var _useToast=(0,useToast/* useToast */.d)(props,state,ref),toastProps=_useToast.toastProps,closeButtonProps=_useToast.closeButtonProps;var Icon=iconMap[props.toast.content.type];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({},toastProps,{ref:ref,className:(0,clsx/* default */.A)(Toast_module.toast,Toast_module[props.toast.content.type]),"data-animation":props.toast.animation,onAnimationEnd:function onAnimationEnd(){// Remove the toast when the exiting animation completes.
if(props.toast.animation==='exiting'){state.remove(props.toast.key);}},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{className:Toast_module.icon,size:20,"aria-hidden":true}),props.toast.content.message]}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$n,Object.assign({},closeButtonProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})}))]}));}// Create a global toast queue.
var toastQueue=new dist_useToastState/* ToastQueue */.Vv({maxVisibleToasts:5,hasExitAnimation:true});function GlobalToastRegion(props){// Subscribe to it.
var state=(0,dist_useToastState/* useToastQueue */.oS)(toastQueue);// Render toast region.
return state.visibleToasts.length>0?/*#__PURE__*/(0,react_dom.createPortal)(/*#__PURE__*/(0,jsx_runtime.jsx)(ToastRegion,Object.assign({},props,{state:state,type:props})),document.body):null;}var iconMap={success:circle_check/* default */.A,info:info/* default */.A,important:circle_alert/* default */.A,warning:triangle_alert/* default */.A};
;// ./packages/toast/src/index.ts

// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
;// ./apps/docs/static/data/toast.json
const toast_namespaceObject = /*#__PURE__*/JSON.parse('{"_id":"@midas-ds/toast@1.0.3","_rev":"8-490d1ead9ef3a35f4b2621fa1b1622e7","name":"@midas-ds/toast","dist-tags":{"latest":"1.0.3"},"versions":["0.4.0","0.5.0","0.5.1","0.5.2","1.0.0","1.0.1","1.0.2","1.0.3"],"time":{"created":"2024-09-10T14:39:22.818Z","modified":"2024-11-15T14:06:21.227Z","0.4.0":"2024-09-10T14:39:23.053Z","0.5.0":"2024-09-12T05:55:09.470Z","0.5.1":"2024-09-12T12:58:03.661Z","0.5.2":"2024-10-07T12:28:12.102Z","1.0.0":"2024-10-18T13:40:35.175Z","1.0.1":"2024-10-22T14:09:08.896Z","1.0.2":"2024-11-01T10:27:37.626Z","1.0.3":"2024-11-15T14:06:21.034Z"},"bugs":{"url":"https://github.com/migrationsverket/midas/issues"},"homepage":"https://github.com/migrationsverket/midas#readme","repository":{"type":"git","url":"git+https://github.com/migrationsverket/midas.git"},"description":"```bash npm i @midas-ds/toast ```","maintainers":["wilhelmconsid <wilhelm.hjelm@consid.se>"],"readmeFilename":"README.md","_contentLength":14165,"version":"1.0.3","main":"./index.js","types":"./index.d.ts","exports":{".":{"import":"./index.mjs","require":"./index.js","types":"./index.d.ts"}},"dependencies":{"@midas-ds/button":"1.1.1","react":"^18.3.1","@react-aria/toast":"^3.0.0-beta.12","@react-stately/toast":"3.0.0-beta.6","react-dom":"18.3.1","lucide-react":"^0.453.0"},"peerDependencies":{},"gitHead":"660173f9a53a45cd053cc3ee2523dc3bcc65d9fa","publishConfig":{"access":"public"},"_nodeVersion":"20.11.1","_npmVersion":"10.2.4","dist":{"integrity":"sha512-/uPAJpW3ubq8G2XunmYFYBt3FK8XRk2URRFDQGIp/iKAnGcwcMIfwGdH/CldFna9pk6sSnu3iFrU3OWDTuugJg==","shasum":"3dd20a34ffb6cfb07bbeccbe42c17149a020a350","tarball":"https://registry.npmjs.org/@midas-ds/toast/-/toast-1.0.3.tgz","fileCount":10,"unpackedSize":158663,"signatures":[{"keyid":"SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA","sig":"MEYCIQDjaS9i9pS060ddce6/FF8+S29Np6HKSzWfK3erS5zhkgIhAImb4cbEeq7puaqmgC/CqHXyTIZLYvHskl6fpAGjD5b5"}]},"_npmUser":"wilhelmconsid <wilhelm.hjelm@consid.se>","directories":{},"_npmOperationalInternal":{"host":"s3://npm-registry-packages","tmp":"tmp/toast_1.0.3_1731679580803_0.7545325299342285"},"_hasShrinkwrap":false}');
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
  "value": "Introduktion",
  "id": "introduktion",
  "level": 2
}, {
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Varianter",
  "id": "varianter",
  "level": 3
}, {
  "value": "Lokal implementation",
  "id": "lokal-implementation",
  "level": 3
}, {
  "value": "Global implementation",
  "id": "global-implementation",
  "level": 3
}, {
  "value": "Beroenden",
  "id": "beroenden",
  "level": 2
}, {
  "value": "Riktlinjer",
  "id": "riktlinjer",
  "level": 2
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
      info: toast_namespaceObject,
      friendlyName: 'Notifiering, notiser',
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/useToast.html"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduktion",
      children: "Introduktion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En notifiering är ett kort, tillfälligt meddelanden om åtgärder, fel eller andra händelser i en applikation. De är utformade för att vara diskreta och inte kräva att användaren stänger dem omedelbart."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Notifieringarna sätts i en kö för att visas i turordning. Maximala antalet är för närvarande satt till 5. En notifiering kan stängas via kryssrutan\neller via en timeout som sätts via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{timeout: ms}"
      }), ". Det går även att sätta en prioritet på meddelanden relativt andra i kön. Notifieringar renderas i en", (0,jsx_runtime.jsx)(_components.code, {
        children: "<ToastRegion>"
      }), " som i\nnuvarande implementation återfinns i skärmens nedre högra hörn."]
    }), "\n", (0,jsx_runtime.jsxs)("section", {
      style: {
        marginBottom: '1rem'
      },
      children: [(0,jsx_runtime.jsx)(GlobalToastRegion, {}), (0,jsx_runtime.jsx)(src/* Button */.$n, {
        onPress: () => toastQueue.add({
          type: 'success',
          message: 'Allt funkar som det ska!'
        }, {
          timeout: 5000
        }),
        children: 'Tryck här för en notifiering'
      })]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
      }), ". Använd lämplig typ beroende på vilken information som ska visas."]
    }), "\n", (0,jsx_runtime.jsxs)(flex_src/* Flex */.s, {
      fluid: true,
      children: [(0,jsx_runtime.jsx)(flex_src/* FlexItem */.Z, {
        col: 3,
        children: (0,jsx_runtime.jsx)(src/* Button */.$n, {
          onPress: () => toastQueue.add({
            type: 'success',
            message: 'Allt funkar som det ska!'
          }, {
            timeout: 5000
          }),
          children: 'Success'
        })
      }), (0,jsx_runtime.jsx)(flex_src/* FlexItem */.Z, {
        col: 3,
        children: (0,jsx_runtime.jsx)(src/* Button */.$n, {
          onPress: () => toastQueue.add({
            type: 'info',
            message: 'Här kommer ett meddelande'
          }, {
            timeout: 5000
          }),
          children: 'Info'
        })
      }), (0,jsx_runtime.jsx)(flex_src/* FlexItem */.Z, {
        col: 3,
        children: (0,jsx_runtime.jsx)(src/* Button */.$n, {
          onPress: () => toastQueue.add({
            message: 'Viktigt meddelande',
            type: 'important'
          }, {
            timeout: 5000
          }),
          children: 'Important'
        })
      }), (0,jsx_runtime.jsx)(flex_src/* FlexItem */.Z, {
        col: 3,
        children: (0,jsx_runtime.jsx)(src/* Button */.$n, {
          onPress: () => toastQueue.add({
            message: 'Farlig varning!',
            type: 'warning'
          }, {
            timeout: 5000
          }),
          children: 'Warning'
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lokal-implementation",
      children: "Lokal implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd ", (0,jsx_runtime.jsx)(_components.code, {
        children: "toastProvider"
      }), " för att sätta en kö av Toasts på valfritt ställe i en app. Om det inte går att wrappa hela appen i en kö med en provider,\nanvänd den ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#global-implementation",
        children: "globala varianten"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { ToastProvider, MidasToastState } from '@midas-ds/toast'\n;<ToastProvider>\n  {(state: MidasToastState) => (\n    <Button onPress={() => state.add({ message: 'Success', type: 'success' }, { timeout: 5000 })}>Show toast</Button>\n  )}\n</ToastProvider>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "global-implementation",
      children: "Global implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Välj en global kö för toasts om det passar ditt användsningsscenario bättre. Lägg en ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<GlobalToastRegion>"
      }), " någonstans i appen\noch lägg nya toasts i kön enligt:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { GlobalToastRegion, toastQueue } from '@midas-ds/toast';\n\n<GlobalToastRegion />\n//...\n<Button onPress={\n  () => toastQueue.add({type: 'success', message: 'Toast is done'})\n}>Show toast</Button>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "beroenden",
      children: "Beroenden"
    }), "\n", (0,jsx_runtime.jsx)(getComponentMetaData/* ComponentFooter */.p, {
      info: toast_namespaceObject
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riktlinjer",
      children: "Riktlinjer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Timeout ska av tillgänglighetsskäl vara minst 5000ms:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "{timeout: 5000ms}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(getComponentMetaData/* ComponentFooter */.p, {
      info: toast_namespaceObject
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ComponentHeader),
/* harmony export */   p: () => (/* binding */ ComponentFooter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95093);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _midas_ds_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85560);
/* harmony import */ var _midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86025);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2543);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74848);
var ComponentFooter=function ComponentFooter(_ref){var info=_ref.info,children=_ref.children;if(!info)return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2",{id:"dependencies",children:"Beroenden"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul",{style:{marginBottom:0},children:(info==null?void 0:info.dependencies)&&Object.keys(info.dependencies).map(function(k,i){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li",{children:k+"@"+info.dependencies[k]},'dep'+i);})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul",{children:(info==null?void 0:info.peerDependencies)&&Object.keys(info.peerDependencies).map(function(k,i){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li",{children:k+"@"+info.peerDependencies[k]},'dep'+i);})})]});};var ComponentHeader=function ComponentHeader(_ref2){var name=_ref2.name,info=_ref2.info,friendlyName=_ref2.friendlyName,overrideHeadlessLink=_ref2.overrideHeadlessLink;moment__WEBPACK_IMPORTED_MODULE_1___default().locale('sv');var storybookLink= false?0:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay)("/storybook/?path=/docs/components-"+name.toLowerCase()+"--docs");if(!info){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{style:{display:'flex',justifyContent:'space-between'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span",{className:'badge badge--secondary',children:"Under utveckling"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{display:'flex',gap:'3px'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a",{href:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img",{alt:"Static Badge",src:"https://img.shields.io/badge/React%20Aria-FF0000?style=for-the-badge&logo=adobe&logoColor=white"})})})]});}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section",{style:{marginBottom:32,marginTop:-20},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{marginBottom:16},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .s,{fluid:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{children:["Version: ",info.version]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_link__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N,{href:"https://github.com/migrationsverket/midas/tree/main/packages/"+(0,lodash__WEBPACK_IMPORTED_MODULE_5__.kebabCase)(name)+"/CHANGELOG.md",target:"_blank",standalone:true,children:"Versionslogg"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_link__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N,{href:storybookLink,standalone:true,children:"Storybook"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_midas_ds_link__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",standalone:true,children:"Referens"})})]})]});};

/***/ }),

/***/ 91117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export PropTable */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
// import useDynamicImport from 'docusaurus-plugin-react-docgen-typescript'
var PropTable=function PropTable(_ref){var name=_ref.name;return null;var props=useDynamicImport(name);if(!props){return null;}return/*#__PURE__*/_jsx(_Fragment,{children:/*#__PURE__*/_jsxs("table",{children:[/*#__PURE__*/_jsx("thead",{children:/*#__PURE__*/_jsxs("tr",{children:[/*#__PURE__*/_jsx("th",{children:"Name"}),/*#__PURE__*/_jsx("th",{children:"Type"}),/*#__PURE__*/_jsx("th",{children:"Default Value"}),/*#__PURE__*/_jsx("th",{children:"Required"}),/*#__PURE__*/_jsx("th",{children:"Description"})]})}),/*#__PURE__*/_jsx("tbody",{children:Object.keys(props).map(function(key){var _props$key$type;return/*#__PURE__*/_jsxs("tr",{children:[/*#__PURE__*/_jsx("td",{children:/*#__PURE__*/_jsx("code",{children:key})}),/*#__PURE__*/_jsx("td",{children:/*#__PURE__*/_jsx("code",{children:(_props$key$type=props[key].type)==null?void 0:_props$key$type.name})}),/*#__PURE__*/_jsx("td",{children:props[key].defaultValue&&/*#__PURE__*/_jsx("code",{children:props[key].defaultValue.value})}),/*#__PURE__*/_jsx("td",{children:props[key].required?'Yes':'No'}),/*#__PURE__*/_jsx("td",{style:{width:'30%'},children:props[key].description})]},key);})})]})});};

/***/ }),

/***/ 35358:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 25177,
	"./af.js": 25177,
	"./ar": 61509,
	"./ar-dz": 41488,
	"./ar-dz.js": 41488,
	"./ar-kw": 58676,
	"./ar-kw.js": 58676,
	"./ar-ly": 42353,
	"./ar-ly.js": 42353,
	"./ar-ma": 24496,
	"./ar-ma.js": 24496,
	"./ar-ps": 6947,
	"./ar-ps.js": 6947,
	"./ar-sa": 82682,
	"./ar-sa.js": 82682,
	"./ar-tn": 89756,
	"./ar-tn.js": 89756,
	"./ar.js": 61509,
	"./az": 95533,
	"./az.js": 95533,
	"./be": 28959,
	"./be.js": 28959,
	"./bg": 47777,
	"./bg.js": 47777,
	"./bm": 54903,
	"./bm.js": 54903,
	"./bn": 61290,
	"./bn-bd": 17357,
	"./bn-bd.js": 17357,
	"./bn.js": 61290,
	"./bo": 31545,
	"./bo.js": 31545,
	"./br": 89089,
	"./br.js": 89089,
	"./bs": 44429,
	"./bs.js": 44429,
	"./ca": 7306,
	"./ca.js": 7306,
	"./cs": 56464,
	"./cs.js": 56464,
	"./cv": 73635,
	"./cv.js": 73635,
	"./cy": 64226,
	"./cy.js": 64226,
	"./da": 93601,
	"./da.js": 93601,
	"./de": 77853,
	"./de-at": 26111,
	"./de-at.js": 26111,
	"./de-ch": 54697,
	"./de-ch.js": 54697,
	"./de.js": 77853,
	"./dv": 60708,
	"./dv.js": 60708,
	"./el": 54691,
	"./el.js": 54691,
	"./en-au": 53872,
	"./en-au.js": 53872,
	"./en-ca": 28298,
	"./en-ca.js": 28298,
	"./en-gb": 56195,
	"./en-gb.js": 56195,
	"./en-ie": 66584,
	"./en-ie.js": 66584,
	"./en-il": 65543,
	"./en-il.js": 65543,
	"./en-in": 9033,
	"./en-in.js": 9033,
	"./en-nz": 79402,
	"./en-nz.js": 79402,
	"./en-sg": 43004,
	"./en-sg.js": 43004,
	"./eo": 32934,
	"./eo.js": 32934,
	"./es": 97650,
	"./es-do": 20838,
	"./es-do.js": 20838,
	"./es-mx": 17730,
	"./es-mx.js": 17730,
	"./es-us": 56575,
	"./es-us.js": 56575,
	"./es.js": 97650,
	"./et": 3035,
	"./et.js": 3035,
	"./eu": 3508,
	"./eu.js": 3508,
	"./fa": 119,
	"./fa.js": 119,
	"./fi": 90527,
	"./fi.js": 90527,
	"./fil": 95995,
	"./fil.js": 95995,
	"./fo": 52477,
	"./fo.js": 52477,
	"./fr": 85498,
	"./fr-ca": 26435,
	"./fr-ca.js": 26435,
	"./fr-ch": 37892,
	"./fr-ch.js": 37892,
	"./fr.js": 85498,
	"./fy": 37071,
	"./fy.js": 37071,
	"./ga": 41734,
	"./ga.js": 41734,
	"./gd": 70217,
	"./gd.js": 70217,
	"./gl": 77329,
	"./gl.js": 77329,
	"./gom-deva": 32124,
	"./gom-deva.js": 32124,
	"./gom-latn": 93383,
	"./gom-latn.js": 93383,
	"./gu": 95050,
	"./gu.js": 95050,
	"./he": 11713,
	"./he.js": 11713,
	"./hi": 43861,
	"./hi.js": 43861,
	"./hr": 26308,
	"./hr.js": 26308,
	"./hu": 90609,
	"./hu.js": 90609,
	"./hy-am": 17160,
	"./hy-am.js": 17160,
	"./id": 74063,
	"./id.js": 74063,
	"./is": 89374,
	"./is.js": 89374,
	"./it": 88383,
	"./it-ch": 21827,
	"./it-ch.js": 21827,
	"./it.js": 88383,
	"./ja": 23827,
	"./ja.js": 23827,
	"./jv": 89722,
	"./jv.js": 89722,
	"./ka": 41794,
	"./ka.js": 41794,
	"./kk": 27088,
	"./kk.js": 27088,
	"./km": 96870,
	"./km.js": 96870,
	"./kn": 84451,
	"./kn.js": 84451,
	"./ko": 63164,
	"./ko.js": 63164,
	"./ku": 98174,
	"./ku-kmr": 6181,
	"./ku-kmr.js": 6181,
	"./ku.js": 98174,
	"./ky": 78474,
	"./ky.js": 78474,
	"./lb": 79680,
	"./lb.js": 79680,
	"./lo": 15867,
	"./lo.js": 15867,
	"./lt": 45766,
	"./lt.js": 45766,
	"./lv": 69532,
	"./lv.js": 69532,
	"./me": 58076,
	"./me.js": 58076,
	"./mi": 41848,
	"./mi.js": 41848,
	"./mk": 30306,
	"./mk.js": 30306,
	"./ml": 73739,
	"./ml.js": 73739,
	"./mn": 99053,
	"./mn.js": 99053,
	"./mr": 86169,
	"./mr.js": 86169,
	"./ms": 73386,
	"./ms-my": 92297,
	"./ms-my.js": 92297,
	"./ms.js": 73386,
	"./mt": 77075,
	"./mt.js": 77075,
	"./my": 72264,
	"./my.js": 72264,
	"./nb": 22274,
	"./nb.js": 22274,
	"./ne": 8235,
	"./ne.js": 8235,
	"./nl": 92572,
	"./nl-be": 43784,
	"./nl-be.js": 43784,
	"./nl.js": 92572,
	"./nn": 54566,
	"./nn.js": 54566,
	"./oc-lnc": 69330,
	"./oc-lnc.js": 69330,
	"./pa-in": 29849,
	"./pa-in.js": 29849,
	"./pl": 94418,
	"./pl.js": 94418,
	"./pt": 79834,
	"./pt-br": 48303,
	"./pt-br.js": 48303,
	"./pt.js": 79834,
	"./ro": 24457,
	"./ro.js": 24457,
	"./ru": 82271,
	"./ru.js": 82271,
	"./sd": 1221,
	"./sd.js": 1221,
	"./se": 33478,
	"./se.js": 33478,
	"./si": 17538,
	"./si.js": 17538,
	"./sk": 5784,
	"./sk.js": 5784,
	"./sl": 46637,
	"./sl.js": 46637,
	"./sq": 86794,
	"./sq.js": 86794,
	"./sr": 45719,
	"./sr-cyrl": 3322,
	"./sr-cyrl.js": 3322,
	"./sr.js": 45719,
	"./ss": 56000,
	"./ss.js": 56000,
	"./sv": 41011,
	"./sv.js": 41011,
	"./sw": 40748,
	"./sw.js": 40748,
	"./ta": 11025,
	"./ta.js": 11025,
	"./te": 11885,
	"./te.js": 11885,
	"./tet": 28861,
	"./tet.js": 28861,
	"./tg": 86571,
	"./tg.js": 86571,
	"./th": 55802,
	"./th.js": 55802,
	"./tk": 59527,
	"./tk.js": 59527,
	"./tl-ph": 29231,
	"./tl-ph.js": 29231,
	"./tlh": 31052,
	"./tlh.js": 31052,
	"./tr": 85096,
	"./tr.js": 85096,
	"./tzl": 79846,
	"./tzl.js": 79846,
	"./tzm": 81765,
	"./tzm-latn": 97711,
	"./tzm-latn.js": 97711,
	"./tzm.js": 81765,
	"./ug-cn": 48414,
	"./ug-cn.js": 48414,
	"./uk": 16618,
	"./uk.js": 16618,
	"./ur": 57777,
	"./ur.js": 57777,
	"./uz": 57609,
	"./uz-latn": 72475,
	"./uz-latn.js": 72475,
	"./uz.js": 57609,
	"./vi": 21135,
	"./vi.js": 21135,
	"./x-pseudo": 64051,
	"./x-pseudo.js": 64051,
	"./yo": 82218,
	"./yo.js": 82218,
	"./zh-cn": 52648,
	"./zh-cn.js": 52648,
	"./zh-hk": 1632,
	"./zh-hk.js": 1632,
	"./zh-mo": 31541,
	"./zh-mo.js": 31541,
	"./zh-tw": 50304,
	"./zh-tw.js": 50304
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 35358;

/***/ })

}]);