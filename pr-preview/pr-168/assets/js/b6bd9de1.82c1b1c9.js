"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[3172],{

/***/ 21911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_14_mdx_b6b_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_14_mdx_b6b_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94281);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28453);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11470);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19365);
/* harmony import */ var _site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29511);
/* harmony import */ var _midas_ds_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16771);
/* harmony import */ var _midas_ds_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63918);
/* harmony import */ var _midas_ds_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93294);
/* harmony import */ var _midas_ds_textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26196);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80697);


const frontMatter = {
	title: 'Release 14',
	description: '.',
	slug: 'release-14',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [],
};

/*truncate*/











const toc = [{
  "value": "Ny komponent: Modal",
  "id": "ny-komponent-modal",
  "level": 2
}, {
  "value": "Ikoner på Button",
  "id": "ikoner-på-button",
  "level": 2
}, {
  "value": "Mindre justeringar",
  "id": "mindre-justeringar",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Nedan är en sammanfattning av nyheterna i release 14."
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "ny-komponent-modal",
      children: "Ny komponent: Modal"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Modalen öppnar en ruta ovanför gränssnittet som användaren måste interagera med innan den kan gå vidare. Modalen har flera användningsområden, t.ex. för att förtydliga konsekvenserna av ett val i gränssnittet eller presentera mer information. Läs mer på komponentsidan för ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "/components/modal",
        children: "Modal"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      groupId: "npm2yarn",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        value: "npm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @midas-ds/modal\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        value: "yarn",
        label: "Yarn",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/modal\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/modal\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      scope: {
        Button: _midas_ds_button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$n,
        Modal: _midas_ds_modal__WEBPACK_IMPORTED_MODULE_5__/* .Modal */ .a,
        Flex: _midas_ds_flex__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .s,
        FlexItem: _midas_ds_flex__WEBPACK_IMPORTED_MODULE_7__/* .FlexItem */ .Z
      },
      children: `<>
  <Button onPress={setIsOpen}>Radera frukter</Button>
  <Modal id="modal" title="Vill du radera alla frukter?" isOpen={isOpen} onOpenChange={setIsOpen}>
      <p>Är du säker? De går inte att återskapa.</p>
      <Flex fluid={true}>
          <FlexItem col='auto'>
              <Button onPress={() => setIsOpen(false)} variant="danger">Radera frukter</Button>
          </FlexItem>
          <FlexItem>
              <Button
                  onPress={() => setIsOpen(false)}
                  variant='secondary'
              >
                  Avbryt
              </Button>
          </FlexItem>
      </Flex>
  </Modal>

</>`
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "ikoner-på-button",
      children: "Ikoner på Button"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Button kan nu acceptera ikoner som prop. Ikonen läggs till via ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "icon"
      }), ".\nDu kan välja vilken sida av texten ikonen ska vara på med ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "iconPlacement"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      scope: {
        Plus: lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,
        Button: _midas_ds_button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$n
      },
      children: `<Button
  icon={Plus}
  variant='tertiary'
  iconPlacement="right"
>
  {"Lägg till rad"}
</Button>
`
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "mindre-justeringar",
      children: "Mindre justeringar"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Varningsmeddelanden på samtliga inputfält är ny röda för tydlighetens skull."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["InfoBanner beter sig nu som en vanlig ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "<div>"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "LinkButton har nu samma egenskaper som Button"
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 16771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* reexport */ Modal)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/modal/src/lib/Modal.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Modal_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","white":"#ffffff","gray10":"#f2f2f2","modal":"modal_oR1A","modalHeader":"modalHeader_StAp","modalBody":"modalBody_C0aM","modalHeading":"modalHeading_flMZ"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var src = __webpack_require__(63918);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/modal/src/lib/Modal.tsx
'use client';var _excluded=["id","isOpen","onOpenChange","children","title","className"];var Modal=function Modal(_ref){var id=_ref.id,isOpen=_ref.isOpen,onOpenChange=_ref.onOpenChange,children=_ref.children,title=_ref.title,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var ref=react.useRef(null);react.useEffect(function(){if(isOpen){var _ref$current;(_ref$current=ref.current)==null||_ref$current.showModal();}else{var _ref$current2;(_ref$current2=ref.current)==null||_ref$current2.close();}},[isOpen]);var handleClose=function handleClose(){var _ref$current3;(_ref$current3=ref.current)==null||_ref$current3.close();onOpenChange(false);};var headingId=id+'_heading';return/*#__PURE__*/(0,jsx_runtime.jsxs)("dialog",Object.assign({id:id,ref:ref,onCancel:function onCancel(){return onOpenChange(false);},className:(0,clsx/* default */.A)(Modal_module.modal,className),"aria-labelledby":headingId},rest,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Modal_module.modalHeader,children:/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$n,{onPress:function onPress(){return handleClose();},variant:"tertiary",icon:x/* default */.A,iconPlacement:"right",children:"St\xE4ng"})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Modal_module.modalBody,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:Modal_module.modalHeading,id:headingId,children:title}),children]})]}));};
;// ./packages/modal/src/index.ts


/***/ }),

/***/ 26196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* reexport */ TextArea)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/textarea/src/lib/TextArea.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TextArea_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","signalRed10":"#ffdfdf","smBreakpoint":"(max-width: 767px)","gray10":"#f2f2f2","gray20":"#e6e6e6","gray50":"#bfbfbf","black":"#000000","signalRed100":"#e62323","blue100":"#2e7ca5","mediumWeight":"500","regularWeight":"400","inputText":"#1f1f1f","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","textArea":"textArea_tiIs","count":"count_OzSk","countExceeded":"countExceeded_YJf_"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextField.mjs
var TextField = __webpack_require__(32945);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextArea.mjs
var dist_TextArea = __webpack_require__(43660);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/textarea/src/lib/TextArea.tsx
'use client';var _excluded=["label","description","rows","maxCharacters","errorMessage","showCounter","validate"];var TextArea=function TextArea(_ref){var label=_ref.label,description=_ref.description,rows=_ref.rows,maxCharacters=_ref.maxCharacters,errorMessage=_ref.errorMessage,showCounter=_ref.showCounter,validate=_ref.validate,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _React$useState=react.useState(''),value=_React$useState[0],setValue=_React$useState[1];var handleChange=function handleChange(event){var newValue=event.target.value;setValue(newValue);};var Count=function Count(){if(maxCharacters){return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:(0,clsx/* default */.A)(TextArea_module.count,value.length>maxCharacters&&TextArea_module.countExceeded),children:[value.length," / ",maxCharacters]});}if(showCounter){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:TextArea_module.count,children:value.length});}return null;};var validateInput=function validateInput(value){var maxCharactersError=maxCharacters&&value.length>maxCharacters?"Du har angett "+(value.length-maxCharacters)+" tecken f\xF6r mycket. F\xE4ltet \xE4r begr\xE4nsat till "+maxCharacters+" tecken.":null;var otherValidationError=validate?validate(value):null;return maxCharactersError||otherValidationError||true;};return/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,Object.assign({className:src/* TextFieldStyles */.Ql.inputField,validate:validateInput},props,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Count,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TextArea/* TextArea */.f,{className:TextArea_module.textArea,rows:rows,onFocus:handleChange,onChange:handleChange})]})}));};
;// ./packages/textarea/src/index.ts


/***/ }),

/***/ 80697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Plus)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Plus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);


//# sourceMappingURL=plus.js.map


/***/ }),

/***/ 48697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);


//# sourceMappingURL=x.js.map


/***/ }),

/***/ 94281:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/pr-preview/pr-168/blog/release-14","source":"@site/blog/release14.mdx","title":"Release 14","description":".","date":"2024-10-31T15:22:12.000Z","tags":[],"readingTime":1.17,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Release 14","description":".","slug":"release-14","pagination_prev":null,"pagination_next":null},"unlisted":false,"prevItem":{"title":"Release 15","permalink":"/pr-preview/pr-168/blog/release-15"},"nextItem":{"title":"Release 13","permalink":"/pr-preview/pr-168/blog/release-13"}}');

/***/ })

}]);