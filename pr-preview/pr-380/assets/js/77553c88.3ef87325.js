"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[3697],{

/***/ 23537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Example: () => (/* binding */ Example),
  I18nExample: () => (/* binding */ I18nExample),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_datefield_mdx_775_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-datefield-mdx-775.json
const site_docs_components_datefield_mdx_775_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/datefield","title":"DateField","description":"Använd ett datumfält när användaren ska fylla i ett datum.","source":"@site/docs/components/datefield.mdx","sourceDirName":"components","slug":"/components/datefield","permalink":"/pr-preview/pr-380/components/datefield","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"DateField","description":"Använd ett datumfält när användaren ska fylla i ett datum.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 1 modules
var propsTable = __webpack_require__(38355);
// EXTERNAL MODULE: ./packages/components/src/date-field/DateField.tsx + 1 modules
var DateField = __webpack_require__(78785);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(71372);
;// ./apps/docs/docs/components/datefield.mdx


const frontMatter = {
	title: 'DateField',
	description: 'Använd ett datumfält när användaren ska fylla i ett datum.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};










const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      DateField: DateField/* DateField */.v
    },
    ...props,
    children: `<DateField
        label="Etikett"
        description="Beskrivning"
    />`
  });
};
const I18nExample = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      DateField: DateField/* DateField */.v,
      I18nProvider: context/* I18nProvider */.C
    },
    ...props,
    children: `
<I18nProvider locale={'fr-Fr'}>
    <DateField
        label="Välj ett datum"
        description="vilket datum som helst"/>
</I18nProvider>
`
  });
};
const toc = [{
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Användning",
  "id": "användning",
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
      name: "Datefield",
      friendlyName: "Datumfält",
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/DateField.html"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Datumfält används när användaren ska fylla i ett datum eller som ett fält där datum är representerat."
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideCode: true
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
        children: "import { DateField } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "användning",
      children: "Användning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tänk på att formatet för inmatning (exempelvis YYYY/MM/DD) beror av användarens språkinställning så referera inte till\ndet i etikett eller hjälptext."
    }), "\n", (0,jsx_runtime.jsx)(I18nExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "DateField"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {})
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

/***/ 78785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ DateField_DateField)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/DateField.mjs + 41 modules
var DateField = __webpack_require__(68407);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(93361);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(20143);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(80554);
;// ./packages/components/src/date-field/DateField.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DateField_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-placeholder":"light-dark(#a6a6a6, #525252)","--text-invalid":"light-dark(#e62323, #e62323)","--border-invalid":"light-dark(#e62323, #e62323)","--focus":"0 0 0 2px white, 0 0 0 4px black","--field-hover-01":"light-dark(#e6e6e6, #333333)","--border-strong":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--text-disabled":"light-dark(#bfbfbf, #525252)","dateField":"dateField_w_5V","isDisabled":"isDisabled_v4dE","inputField":"inputField_RpLn","segment":"segment_zhbe"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/date-field/DateField.tsx
var _excluded=["label","description","errorMessage","className"];function DateField_DateField(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(DateField/* DateField */.vM,Object.assign({},props,{className:(0,clsx/* default */.A)(DateField_module.dateField,props.isDisabled&&DateField_module.isDisabled,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{variant:"label-02",children:label}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:errorMessage}),/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateInput */.J3,{className:DateField_module.inputField,children:function children(segment){return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateSegment */.Eu,{segment:segment,className:DateField_module.segment});}})]}));}

/***/ }),

/***/ 80554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ FieldError_FieldError)
});

// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/field-error/FieldError.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const FieldError_module = ({"tokens":"\"../theme/tokens.css\"","--text-invalid":"light-dark(#e62323, #e62323)","--font-family":"\"Inter\", sans-serif","fieldError":"fieldError_K9VX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/field-error/FieldError.tsx
var FieldError_FieldError=/*#__PURE__*/react.forwardRef(function(props,ref){var validation=react.useContext(FieldError/* FieldErrorContext */.C);if(!(validation!=null&&validation.isInvalid))return null;return/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,Object.assign({},props,{ref:ref,className:(0,clsx/* default */.A)(FieldError_module.fieldError,props.className)}));});

/***/ }),

/***/ 20143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Label)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var dist_Label = __webpack_require__(21704);
;// ./packages/components/src/label/Label.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Label_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--size-02":"0.875rem","--line-height-02":"1.125rem","--size-03":"1rem","--line-height-03":"1.25rem","--text-disabled":"light-dark(#bfbfbf, #525252)","label-01":"label-01_rWfb","label-02":"label-02_LZ3P"});
// EXTERNAL MODULE: ./packages/components/src/utils/useIsDisabled.tsx
var useIsDisabled = __webpack_require__(29390);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/Label.tsx
var _excluded=["children","className","variant","elementType"];var DEFAULT_ELEMENT='label';var Label=function Label(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'label-01':_ref$variant,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var isDisabled=(0,useIsDisabled/* default */.A)();var classNames={'label-01':Label_module['label-01'],'label-02':Label_module['label-02']};var labelProps=Object.assign({className:(0,clsx/* default */.A)(classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Label/* Label */.J,Object.assign({},labelProps,{"data-disabled":isDisabled,children:children}));};

/***/ }),

/***/ 93361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var dist_Text = __webpack_require__(27279);
;// ./packages/components/src/text/Text.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Text_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--size-02":"0.875rem","--size-03":"1rem","--line-height-02":"1.125rem","--line-height-03":"1.25rem","--line-height-04":"1.375rem","--line-height-05":"1.5rem","--text-disabled":"light-dark(#bfbfbf, #525252)","body-01":"body-01_whJM","body-02":"body-02_Xi1v","description":"description_XYgX"});
// EXTERNAL MODULE: ./packages/components/src/utils/useIsDisabled.tsx
var useIsDisabled = __webpack_require__(29390);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","variant","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'body-02':_ref$variant,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var isDisabled=(0,useIsDisabled/* default */.A)()&&(rest.slot==='description'||undefined);var classNames={'body-01':Text_module['body-01'],'body-02':Text_module['body-02']};var textProps=Object.assign({className:(0,clsx/* default */.A)(rest.slot==='description'?Text_module.description:classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Text/* Text */.E,Object.assign({},textProps,{"data-disabled":isDisabled,children:children}));};

/***/ }),

/***/ 29390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useIsDisabled)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5933);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79950);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96325);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68407);
/**
 * Figure out if the surrounding context is disabled
 */function useIsDisabled(){var inputProps=(0,react_aria_components__WEBPACK_IMPORTED_MODULE_1__/* .useSlottedContext */ .CC)(react_aria_components__WEBPACK_IMPORTED_MODULE_2__/* .InputContext */ .E);var radioProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .RadioGroupStateContext */ .NF);var dateFieldStartProps=(0,react_aria_components__WEBPACK_IMPORTED_MODULE_1__/* .useSlottedContext */ .CC)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .DateFieldContext */ .cQ,'start');var dateFieldEndProps=(0,react_aria_components__WEBPACK_IMPORTED_MODULE_1__/* .useSlottedContext */ .CC)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .DateFieldContext */ .cQ,'end');return(inputProps==null?void 0:inputProps.disabled)||(radioProps==null?void 0:radioProps.isDisabled)||(dateFieldStartProps==null?void 0:dateFieldStartProps.isDisabled)||(dateFieldEndProps==null?void 0:dateFieldEndProps.isDisabled)||undefined;}

/***/ })

}]);