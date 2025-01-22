"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5521],{

/***/ 30930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_modal_mdx_902_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-modal-mdx-902.json
const site_docs_components_modal_mdx_902_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/modal","title":"Modal","description":"Modal som lägger sig över allt annat innehåll.","source":"@site/docs/components/modal.mdx","sourceDirName":"components","slug":"/components/modal","permalink":"/pr-preview/pr-200/components/modal","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Modal","description":"Modal som lägger sig över allt annat innehåll.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
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
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 3 modules
var getComponentMetaData = __webpack_require__(32705);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(29511);
// EXTERNAL MODULE: ./packages/modal/src/index.ts + 2 modules
var src = __webpack_require__(16771);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var button_src = __webpack_require__(63918);
// EXTERNAL MODULE: ./packages/flex/src/index.ts + 4 modules
var flex_src = __webpack_require__(93294);
// EXTERNAL MODULE: ./packages/textarea/src/index.ts + 2 modules
var textarea_src = __webpack_require__(26196);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Heading.mjs
var Heading = __webpack_require__(57936);
;// ./apps/docs/docs/components/modal.mdx


const frontMatter = {
	title: 'Modal',
	description: 'Modal som lägger sig över allt annat innehåll.',
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
  "value": "Avancerat innehåll",
  "id": "avancerat-innehåll",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(getComponentMetaData/* ComponentHeader */.B, {
      name: 'Modal',
      friendlyName: "Modal, Dialog, Dialogruta",
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/Dialog.html"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modaler lägger sig över allt annat innehåll för att fokusera användarens fokus på en sak."
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
            children: "npm install @midas-ds/modal\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/modal\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/modal\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Modal } from '@midas-ds/modal'\n\nconst [isOpen, setIsOpen] = React.useState<boolean>(false)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Button: button_src/* Button */.$n,
        Modal: src/* Modal */.a,
        Flex: flex_src/* Flex */.s,
        FlexItem: flex_src/* FlexItem */.Z
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "avancerat-innehåll",
      children: "Avancerat innehåll"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modaler kan även innehålla mer avancerat innehåll som ett formulär. Använd då autoFocus på första element för att användarens fokus ska flyttas dit när modalen öppnas."
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        Button: button_src/* Button */.$n,
        Modal: src/* Modal */.a,
        Flex: flex_src/* Flex */.s,
        FlexItem: flex_src/* FlexItem */.Z,
        Heading: Heading/* Heading */.D,
        TextArea: textarea_src/* TextArea */.f
      },
      children: `<>
  <Button onPress={setIsOpen}>Öppna modal</Button>
  <Modal id="avsluta" title="Vill du avsluta uppdraget?" isOpen={isOpen} onOpenChange={setIsOpen}>
      <Flex fluid={true} style={{marginBottom: '1rem'}}>
          <FlexItem col>
              <TextArea
                  autoFocus
                  label='Ange anledning'
                  description='Skriv anledning'
                  maxCharacters={100}
              />
          </FlexItem>
      </Flex>
      <Flex fluid={true}>
          <FlexItem col='auto'>
              <Button onPress={() => setIsOpen(false)}>Spara korrespondens</Button>
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Modal"
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

/***/ 16771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* reexport */ Modal)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/modal/src/lib/Modal.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Modal_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","white":"#ffffff","gray10":"#f2f2f2","modal":"modal_oR1A","modalHeader":"modalHeader_StAp","modalBody":"modalBody_C0aM","modalHeading":"modalHeading_flMZ"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var src = __webpack_require__(63918);
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

/***/ 57936:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ $5cb03073d3f54797$export$a8a3e93435678ff9)
/* harmony export */ });
/* harmony import */ var _RSPContexts_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32373);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5933);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);




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


function $5cb03073d3f54797$var$Heading(props, ref) {
    [props, ref] = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useContextProps */ .JT)(props, ref, (0, _RSPContexts_mjs__WEBPACK_IMPORTED_MODULE_2__/* .HeadingContext */ .A3));
    let { children: children, level: level = 3, className: className, ...domProps } = props;
    let Element = `h${level}`;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement(Element, {
        ...domProps,
        ref: ref,
        className: className !== null && className !== void 0 ? className : 'react-aria-Heading'
    }, children);
}
const $5cb03073d3f54797$export$a8a3e93435678ff9 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)($5cb03073d3f54797$var$Heading);



//# sourceMappingURL=Heading.module.js.map


/***/ }),

/***/ 32373:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A3: () => (/* binding */ $4e85f108e88277b8$export$d688439359537581),
/* harmony export */   BP: () => (/* binding */ $4e85f108e88277b8$export$b085522c77523c51)
/* harmony export */ });
/* unused harmony exports ColorAreaContext, ColorFieldContext, ColorSliderContext, ColorWheelContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $4e85f108e88277b8$export$b085522c77523c51 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$ebe63fadcdce34ed = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$44644b8a16031b5b = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$717b2c0a523a0b53 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$265015d6dc85bf21 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const $4e85f108e88277b8$export$d688439359537581 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});



//# sourceMappingURL=RSPContexts.module.js.map


/***/ })

}]);