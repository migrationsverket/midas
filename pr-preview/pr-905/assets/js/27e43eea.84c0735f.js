"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[883],{

/***/ 6974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"listBox":"listBox_l3jg","listBoxPopover":"listBoxPopover_OG2Y","listBoxSectionHeading":"listBoxSectionHeading_R5mH","listBoxButton":"listBoxButton_LfGK","listBoxItem":"listBoxItem_eA9_","listBoxLoadMoreItem":"listBoxLoadMoreItem_RWDs"});

/***/ }),

/***/ 8807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ Checkbox)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useHover.mjs
var useHover = __webpack_require__(16638);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/usePress.mjs + 6 modules
var usePress = __webpack_require__(35044);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/useFocusRing.mjs
var useFocusRing = __webpack_require__(16133);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/RSPContexts.mjs
var RSPContexts = __webpack_require__(32373);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Form.mjs
var Form = __webpack_require__(23128);
// EXTERNAL MODULE: ./packages/components/src/checkbox/context.ts
var context = __webpack_require__(20011);
// EXTERNAL MODULE: ./node_modules/@react-aria/checkbox/dist/useCheckboxGroupItem.mjs
var useCheckboxGroupItem = __webpack_require__(26493);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(87979);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.module.css
var Checkbox_module = __webpack_require__(16025);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/checkbox/CheckboxInner.tsx
var CheckboxInner=/*#__PURE__*/react.forwardRef(function(props,ref){var _props$hoverResult=props.hoverResult,hoverProps=_props$hoverResult.hoverProps,isHovered=_props$hoverResult.isHovered;var _props$pressResult=props.pressResult,pressProps=_props$pressResult.pressProps,isPressed=_props$pressResult.isPressed;var _props$focusRingAria=props.focusRingAria,isFocused=_props$focusRingAria.isFocused,isFocusVisible=_props$focusRingAria.isFocusVisible,focusProps=_props$focusRingAria.focusProps;return/*#__PURE__*/(0,jsx_runtime.jsxs)("label",Object.assign({ref:ref},(0,mergeProps/* mergeProps */.v)(hoverProps,pressProps,props.labelProps),{slot:props.slot||undefined,className:(0,clsx/* clsx */.$)(Checkbox_module/* default */.A.checkbox,props.className),"data-hovered":isHovered||undefined,"data-selected":props.isSelected||undefined,"data-indeterminate":props.isIndeterminate||undefined,"data-pressed":isPressed||undefined,"data-disabled":props.isDisabled||undefined,"data-readonly":props.isReadOnly||undefined,"data-invalid":props.isInvalid||undefined,"data-focused":isFocused||undefined,"data-focus-visible":isFocusVisible||undefined,"data-required":props.isRequired||undefined,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* clsx */.$)(Checkbox_module/* default */.A.checkboxInner),children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:16,height:16,viewBox:"0 0 18 18","aria-hidden":"true",children:props.isIndeterminate?/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:4,y:8,width:10,height:2}):/*#__PURE__*/(0,jsx_runtime.jsx)("polyline",{points:"3,9 7,13 15,4"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("input",Object.assign({},(0,mergeProps/* mergeProps */.v)(props.inputProps,focusProps),{ref:props.inputRef}))}),props.children]}));});
;// ./packages/components/src/checkbox/CheckboxGroupItem.tsx
var CheckBoxGroupItem=/*#__PURE__*/react.forwardRef(function(props,ref){var checkboxGroupItem=(0,useCheckboxGroupItem/* useCheckboxGroupItem */.B)(Object.assign({},props,{value:props.value||''}),props.state,props.inputRef);return/*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxInner,Object.assign({},props,checkboxGroupItem,{ref:ref}));});
// EXTERNAL MODULE: ./node_modules/@react-aria/checkbox/dist/useCheckbox.mjs + 1 modules
var useCheckbox = __webpack_require__(58044);
// EXTERNAL MODULE: ./node_modules/@react-stately/toggle/dist/useToggleState.mjs
var useToggleState = __webpack_require__(51623);
;// ./packages/components/src/checkbox/SingleCheckbox.tsx
var SingleCheckbox=/*#__PURE__*/react.forwardRef(function(props,ref){var item=(0,useCheckbox/* useCheckbox */.v)(props,(0,useToggleState/* useToggleState */.H)(props),props.inputRef);return/*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxInner,Object.assign({},props,item,{ref:ref}));});
;// ./packages/components/src/checkbox/Checkbox.tsx
var Checkbox=/*#__PURE__*/react.forwardRef(function(props,ref){var _ref,_props$validationBeha;;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,RSPContexts/* CheckboxContext */.BP);props=_useContextProps[0];ref=_useContextProps[1];var formProps=(0,utils/* useSlottedContext */.CC)(Form/* FormContext */.c);var validationBehavior=(_ref=(_props$validationBeha=props.validationBehavior)!=null?_props$validationBeha:formProps==null?void 0:formProps.validationBehavior)!=null?_ref:'native';var state=react.useContext(context/* CheckboxGroupContext */.I);var inputRef=react.useRef(null);var hoverResult=(0,useHover/* useHover */.M)(props);var pressResult=(0,usePress/* usePress */.d)({ref:ref,isDisabled:props.isDisabled});var focusRingAria=(0,useFocusRing/* useFocusRing */.o)();if(state){return/*#__PURE__*/(0,jsx_runtime.jsx)(CheckBoxGroupItem,Object.assign({},props,{state:state,inputRef:inputRef,hoverResult:hoverResult,pressResult:pressResult,focusRingAria:focusRingAria,validationBehavior:validationBehavior}));}return/*#__PURE__*/(0,jsx_runtime.jsx)(SingleCheckbox,Object.assign({},props,{inputRef:inputRef,hoverResult:hoverResult,pressResult:pressResult,focusRingAria:focusRingAria,validationBehavior:validationBehavior}));});

/***/ }),

/***/ 13332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TextField)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextFieldBase.tsx + 2 modules
var TextFieldBase = __webpack_require__(39107);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(73413);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/textfield/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"hide":"Hide","show":"Show"},"sv":{"hide":"Dölj","show":"Visa"}}');
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/textfield/PasswordField.tsx
var PasswordField=/*#__PURE__*/react.forwardRef(function(props,ref){;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,Input/* InputContext */.E);props=_useContextProps[0];ref=_useContextProps[1];var _React$useState=react.useState(false),showPassword=_React$useState[0],setShowPassword=_React$useState[1];var handlePress=function handlePress(){return setShowPassword(function(previousValue){return!previousValue;});};var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showPassword&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module/* default */.A.passwordText,children:props.value}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"tertiary",onPress:handlePress,className:TextField_module/* default */.A.passwordButton,children:showPassword?strings.format('hide'):strings.format('show')})]});});
;// ./packages/components/src/textfield/Input.tsx
var _excluded=["skipContext"];var Input_Input=/*#__PURE__*/react.forwardRef(function(_ref,localRef){var _ref$skipContext=_ref.skipContext,skipContext=_ref$skipContext===void 0?false:_ref$skipContext,localProps=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _useContextProps=(0,utils/* useContextProps */.JT)(localProps,localRef,Input/* InputContext */.E),contextProps=_useContextProps[0],contextRef=_useContextProps[1];var ref=skipContext?localRef:contextRef;var props=skipContext?localProps:contextProps;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module/* default */.A.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,Object.assign({},props,{ref:ref,className:(0,clsx/* default */.A)(TextField_module/* default */.A.input,props.className)})),props.type==='password'&&/*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField,Object.assign({},props))]});});
;// ./packages/components/src/textfield/TextField.tsx
'use client';var TextField_excluded=["className","list","type"];var TextField=/*#__PURE__*/react.forwardRef(function(_ref,ref){var className=_ref.className,list=_ref.list,type=_ref.type,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,TextField_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(TextFieldBase/* TextFieldBase */.J,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_Input,{className:(0,clsx/* default */.A)(className),list:list,ref:ref,type:type,skipContext:true})}));});

/***/ }),

/***/ 16025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"checkboxInner":"checkboxInner_Nam1","checkbox":"checkbox_J2GB","checkboxGroup":"checkboxGroup_iAq9"});

/***/ }),

/***/ 19060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ FieldError_FieldError)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
;// ./packages/components/src/field-error/FieldError.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const FieldError_module = ({"fieldError":"fieldError_K9VX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/field-error/FieldError.tsx
var FieldError_FieldError=/*#__PURE__*/react.forwardRef(function(props,ref){var children=props.children,isInvalid=props.isInvalid;var className=(0,clsx/* default */.A)(FieldError_module.fieldError,props.className);var context=react.useContext(FieldError/* FieldErrorContext */.C);if(!context&&isInvalid&&typeof children!=='function'){return/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{className:className,children:children});}if(!(context!=null&&context.isInvalid))return null;return/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,Object.assign({},props,{ref:ref,className:className}));});

/***/ }),

/***/ 19615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var dist_Text = __webpack_require__(27279);
;// ./packages/components/src/text/Text.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Text_module = ({"body-01":"body-01_whJM","body-02":"body-02_Xi1v","description":"description_XYgX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","variant","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'body-02':_ref$variant,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames={'body-01':Text_module['body-01'],'body-02':Text_module['body-02']};var textProps=Object.assign({className:(0,clsx/* default */.A)(rest.slot==='description'?Text_module.description:classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

/***/ }),

/***/ 20011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ CheckboxGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var CheckboxGroupContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

/***/ }),

/***/ 22247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ ListBox)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Virtualizer.mjs + 9 modules
var Virtualizer = __webpack_require__(424);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ListBox.mjs + 3 modules
var dist_ListBox = __webpack_require__(79255);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/callSuper.js + 2 modules
var callSuper = __webpack_require__(31013);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(77387);
// EXTERNAL MODULE: ./node_modules/@react-stately/layout/dist/ListLayout.mjs + 2 modules
var ListLayout = __webpack_require__(12939);
;// ./packages/components/src/list-box/SectionedListLayout.ts
var SectionedListLayout=/*#__PURE__*/function(_ListLayout){function SectionedListLayout(){return (0,callSuper/* default */.A)(this,SectionedListLayout,arguments);}(0,inheritsLoose/* default */.A)(SectionedListLayout,_ListLayout);var _proto=SectionedListLayout.prototype;/**
   * When using the ListLayout our scroll container height is not calculated properly when the content is partially sectioned.
   * ```ts
   * const partiallySectionedContent = [
   *  {
   *    name: 'fruit section',
   *    children: [{ id: 'kiwi', name: 'Kiwi' }]
   *  },
   *  // berries have no section, because it's optional
   *  { id: 'lingonberries', name: 'Lingonberries' }
   * ];
   * ```
   * If we load the layout info for each key in the collection the calculation is correct.
   *
   * This might not be optional for performance, FYI
   */_proto.getContentSize=function getContentSize(){var _this$virtualizer,_this=this;var keys=this==null||(_this$virtualizer=this.virtualizer)==null?void 0:_this$virtualizer.collection.getKeys();Array.from(keys||[]).forEach(function(key){_this.getLayoutInfo(key);});return this.contentSize;};return SectionedListLayout;}(ListLayout/* ListLayout */.$);
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBox.module.css
var ListBox_module = __webpack_require__(6974);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/list-box/ListBox.tsx
var _excluded=["className","children"];var ListBox=function ListBox(_ref){var className=_ref.className,children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Virtualizer/* Virtualizer */.Y,{layout:SectionedListLayout,layoutOptions:{headingHeight:38},children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_ListBox/* ListBox */.qF,Object.assign({className:(0,clsx/* default */.A)(ListBox_module/* default */.A.listBox,className)},rest,{children:children}))});};

/***/ }),

/***/ 22536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_react_datepicker_mdx_27e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-react-datepicker-mdx-27e.json
const site_docs_dev_react_datepicker_mdx_27e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/react-datepicker","title":"React Datepicker","description":"Använda React Datepicker med Midas-stilar","source":"@site/docs/dev/react-datepicker.mdx","sourceDirName":"dev","slug":"/dev/react-datepicker","permalink":"/pr-preview/pr-905/dev/react-datepicker","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"React Datepicker","description":"Använda React Datepicker med Midas-stilar","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./apps/docs/src/components/examples/index.ts + 5 modules
var examples = __webpack_require__(61130);
;// ./apps/docs/docs/dev/react-datepicker.mdx


const frontMatter = {
	title: 'React Datepicker',
	description: 'Använda React Datepicker med Midas-stilar',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'React Datepicker';

const assets = {

};




const toc = [{
  "value": "När du ska använda React Datepicker",
  "id": "när-du-ska-använda-react-datepicker",
  "level": 2
}, {
  "value": "Komma igång",
  "id": "komma-igång",
  "level": 2
}, {
  "value": "Språkstöd (Locale Support)",
  "id": "språkstöd-locale-support",
  "level": 3
}, {
  "value": "Användbara länkar",
  "id": "användbara-länkar",
  "level": 2
}, {
  "value": "Exempel",
  "id": "exempel",
  "level": 2
}, {
  "value": "Månadsväljare",
  "id": "månadsväljare",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "react-datepicker",
        children: "React Datepicker"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För de flesta användningsfall rekommenderar vi att du använder Midas inbyggda datumkomponenter, då de är fullt integrerade med vårt designsystem och erbjuder god tillgänglighet. Om du däremot behöver en datumväljare med mer avancerade funktioner som inte finns tillgängliga i Midas standardkomponenter, kan du använda det populära tredjepartsbiblioteket ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://reactdatepicker.com/",
        children: "React Datepicker"
      }), ". Vi har tillhandahållit stilar för att säkerställa att den matchar Midas utseende och känsla."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Stilarna för React Datepicker är just nu i en tidig version och är ett arbete som pågår. React Datepicker är inte en del av kärnbiblioteket i Midas, vilket innebär att supporten är begränsad. Vi är öppna för kodbidrag till vårt ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas",
          children: "repo"
        }), " och tar gärna emot förslag på stilar som saknas när du implementerar React Datepicker."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "när-du-ska-använda-react-datepicker",
      children: "När du ska använda React Datepicker"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använd Midas inbyggda datumkomponenter som standard. React Datepicker är ett alternativ när du har specifika behov som kräver dess utökade funktionalitet, såsom:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avancerade datumintervall"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Månads- eller årsväljare"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anpassade datumformat och validering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tidsväljare"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Och andra specialfunktioner som inte stöds av Midas standardkomponenter."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "komma-igång",
      children: "Komma igång"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För att använda React Datepicker med Midas-stilar måste du först installera de nödvändiga beroendena:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install react-datepicker @midas-ds/datepicker-styles date-fns\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Importera sedan Midas-stilarna för datumväljaren:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "@import '@midas-ds/datepicker-styles/react-datepicker.css';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "språkstöd-locale-support",
      children: "Språkstöd (Locale Support)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["React Datepicker använder ", (0,jsx_runtime.jsx)(_components.code, {
        children: "date-fns"
      }), " för hantering av språk och lokala inställningar. För att lägga till språkstöd, installera önskat språkpaket från ", (0,jsx_runtime.jsx)(_components.code, {
        children: "date-fns"
      }), " och registrera det med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "react-datepicker"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { registerLocale, setDefaultLocale } from 'react-datepicker'\nimport { sv } from 'date-fns/locale/sv'\nregisterLocale('sv', sv)\nsetDefaultLocale('sv')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "användbara-länkar",
      children: "Användbara länkar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Här är några resurser som hjälper dig att komma igång med React Datepicker:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Hacker0x01/react-datepicker",
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "React Datepicker GitHub"
          })
        }), ": Officiella GitHub-repot."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://reactdatepicker.com/",
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "React Datepicker Docs"
          })
        }), ": Den officiella dokumentationen är den bästa platsen att lära sig om alla funktioner och hur man använder dem."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exempel",
      children: "Exempel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Här är ett exempel på en datumväljare byggd med React Datepicker och stylad med Midas:"
    }), "\n", (0,jsx_runtime.jsx)(examples/* DefaultReactDatepickerExample */.JV, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"DatePickerExample.tsx\"",
        children: "import { CalendarDays } from 'lucide-react'\nimport DatePicker from 'react-datepicker'\nimport { useState } from 'react'\nimport '@midas-ds/datepicker-styles/lib/react-datepicker.css'\n\nexport const DefaultReactDatepickerExample = () => {\n  const [selectedDate, setSelectedDate] = useState<Date | null>(null)\n  return (\n    <DatePicker\n      showIcon\n      selected={selectedDate}\n      onChange={(date: Date | null) => setSelectedDate(date)}\n      formatWeekDay={date => date[0].toUpperCase()} // Capitalize first letter of the weekday\n      toggleCalendarOnIconClick\n      icon={<CalendarDays height={20} />}\n      showPopperArrow={false}\n      dateFormat='dd-MM-yyyy'\n      placeholderText='Select a date'\n    />\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "månadsväljare",
      children: "Månadsväljare"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Här är ett exempel på en månadsväljare byggd med React Datepicker och stylad med Midas:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"MonthPickerExample.tsx\"",
        children: "const [selectedDate, setSelectedDate] = useState<Date | null>(null)\nreturn (\n  <DatePicker\n    showPopperArrow={false}\n    selected={selectedDate}\n    showIcon\n    toggleCalendarOnIconClick\n    icon={<CalendarDays height={20} />}\n    showMonthYearPicker\n    onChange={(date: Date | null) => setSelectedDate(date)}\n    dateFormat='MM-yyyy'\n    placeholderText='Select a date'\n  />\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(examples/* MonthSelectExample */.N_, {})]
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

/***/ 28777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
var _excluded=["children","className","offset","hideArrow"];function Popover_Popover(_ref){var children=_ref.children,className=_ref.className,_ref$offset=_ref.offset,offset=_ref$offset===void 0?4:_ref$offset,_ref$hideArrow=_ref.hideArrow,hideArrow=_ref$hideArrow===void 0?false:_ref$hideArrow,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Popover/* Popover */.A,Object.assign({},props,{offset:offset,className:(0,clsx/* default */.A)(Popover_module.popover,className),children:[!hideArrow&&/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Popover_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:8,height:8,viewBox:"0 0 8 8",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L4 4 L8 0"})})}),children]}));}

/***/ }),

/***/ 34704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Label)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var dist_Label = __webpack_require__(21704);
;// ./packages/components/src/label/Label.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Label_module = ({"labelBase":"labelBase_BRgo"});
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/Label.tsx
var _excluded=["children","className","elementType"];var DEFAULT_ELEMENT='label';var Label=function Label(_ref){var children=_ref.children,className=_ref.className,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var labelProps=Object.assign({className:(0,clsx/* default */.A)(Label_module.labelBase,className),elementType:elementType||DEFAULT_ELEMENT},rest);var ctx=react.useContext(LabelWrapper/* LabelWrapperContext */.d$);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Label/* Label */.J,Object.assign({},labelProps,{"aria-describedby":ctx==null?void 0:ctx.popoverId,children:children}));};

/***/ }),

/***/ 39107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ TextFieldBase)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextField.mjs
var TextField = __webpack_require__(32945);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(73413);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(19060);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
;// ./packages/components/src/character-counter/CharacterCounter.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CharacterCounter_module = ({"characterCounter":"characterCounter_Rd9H"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/character-counter/CharacterCounter.tsx
var CharacterCounter=/*#__PURE__*/react.forwardRef(function(props,ref){var _value$toString;;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,Input/* InputContext */.E);props=_useContextProps[0];var _props=props,maxLength=_props.maxLength,value=_props.value,isLonely=_props.isLonely;var _ref=(_value$toString=value==null?void 0:value.toString())!=null?_value$toString:'',length=_ref.length;var isMaxLengthDefined=maxLength!==undefined;return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:CharacterCounter_module.characterCounter,"data-exceeded":isMaxLengthDefined&&length>maxLength||undefined,"data-lonely":isLonely||undefined,children:isMaxLengthDefined?length+" / "+maxLength:length});});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(34704);
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
;// ./packages/components/src/textfield/TextFieldBase.tsx
var TextFieldBase=/*#__PURE__*/react.forwardRef(function(props,ref){var _clsx;;var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,TextField/* TextFieldContext */.H);props=_useContextProps[0];var _props=props,label=_props.label,description=_props.description,errorMessage=_props.errorMessage,showCounter=_props.showCounter,_props$errorPosition=_props.errorPosition,errorPosition=_props$errorPosition===void 0?'top':_props$errorPosition,_props$size=_props.size,size=_props$size===void 0?'large':_props$size,popover=_props.popover,children=_props.children;return/*#__PURE__*/(0,jsx_runtime.jsxs)(TextField/* TextField */.A,Object.assign({},props,{className:(0,clsx/* clsx */.$)(TextField_module/* default */.A.textField,(_clsx={},_clsx[TextField_module/* default */.A.medium]=size==='medium',_clsx)),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapper/* LabelWrapper */.cR,{popover:popover,children:label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{children:label})}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:description}),showCounter&&/*#__PURE__*/(0,jsx_runtime.jsx)(CharacterCounter,{isLonely:!description}),errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",children:errorMessage}),children,errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",className:TextField_module/* default */.A.bottomError,children:errorMessage})]}));});

/***/ }),

/***/ 51397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Select_Select)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Select.mjs + 4 modules
var Select = __webpack_require__(84521);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/FocusScope.mjs + 1 modules
var FocusScope = __webpack_require__(49336);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(34704);
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(19060);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx + 3 modules
var Checkbox = __webpack_require__(8807);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/select/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"clearAll":"Clear all","selectAll":"Select all","selectedItems":"Selected items","selected":"selected"},"sv":{"clearAll":"Rensa alla","selectAll":"Välj alla","selectedItems":"Valda objekt","selected":"valda"}}');
;// ./packages/components/src/select/Select.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Select_module = ({"select":"select_Fsxg","triggerContainer":"triggerContainer_JBm2","trigger":"trigger_YoQG","medium":"medium_IF05","icon":"icon_roiA","selectValue":"selectValue_pNd2","placeholder":"placeholder_R_6a","selectValueTag":"selectValueTag_Bx1C","clearButton":"clearButton_p8du","truncate":"truncate_J6cE","popover":"popover_Bl6D","selectAll":"selectAll_YD8u","tagGroup":"tagGroup_t6GX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/select/SelectAll.tsx
var SelectAll=function SelectAll(){var state=react.useContext(Select/* SelectStateContext */.nT);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var handleChange=function handleChange(){return state==null?void 0:state.setValue(state!=null&&state.selectionManager.isSelectAll?null:Array.from(state.collection.getKeys()));};return/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{className:Select_module.selectAll,isIndeterminate:!(state!=null&&state.selectionManager.isSelectAll)&&!(state!=null&&state.selectionManager.isEmpty),isSelected:state==null?void 0:state.selectionManager.isSelectAll,onChange:handleChange,children:strings.format('selectAll')});};
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
;// ./packages/components/src/select/SelectValueTag.tsx
var SelectValueTag=function SelectValueTag(_ref){var isDisabled=_ref.isDisabled,selectedItems=_ref.selectedItems,selectedText=_ref.selectedText;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var formatString=function formatString(){if(selectedItems.length===1){return selectedText;}return selectedItems.length+" "+strings.format('selected');};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.selectValueTag,"data-disabled":isDisabled||undefined,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Select_module.truncate,children:formatString()}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectClearButton,{isDisabled:isDisabled})]});};var SelectClearButton=function SelectClearButton(_ref2){var isDisabled=_ref2.isDisabled;var state=react.useContext(Select/* SelectStateContext */.nT);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var focusManager=(0,FocusScope/* useFocusManager */.H8)();var handlePress=function handlePress(){focusManager==null||focusManager.focusFirst();state==null||state.setValue(null);};return/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{"aria-label":strings.format('clearAll'),className:Select_module.clearButton,onPress:handlePress,slot:null,isDisabled:isDisabled,children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{width:20,height:20})});};
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBox.tsx + 1 modules
var ListBox = __webpack_require__(22247);
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(28777);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TagGroup.mjs + 40 modules
var TagGroup = __webpack_require__(99628);
// EXTERNAL MODULE: ./packages/components/src/tag/Tag.tsx + 1 modules
var Tag = __webpack_require__(74658);
;// ./packages/components/src/select/SelectTags.tsx
var SelectTags=function SelectTags(_ref){var showTags=_ref.showTags,isDisabled=_ref.isDisabled;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var state=(0,react.useContext)(Select/* SelectStateContext */.nT);var handleRemove=function handleRemove(keys){state==null||state.selectionManager.toggleSelection(Array.from(keys)[0]);};if(!(state!=null&&state.selectedItems.length)||!showTags){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* TagGroup */.C,{"aria-label":strings.format('selectedItems'),className:Select_module.tagGroup,onRemove:handleRemove,selectionBehavior:"toggle",children:/*#__PURE__*/(0,jsx_runtime.jsx)(TagGroup/* TagList */.LY,{items:state.selectedItems,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* Tag */.v,{dismissable:true,id:item.key,isDisabled:isDisabled,textValue:item.textValue,children:item.textValue},item.key);}})});};
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var dist_clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
;// ./packages/components/src/select/SelectTrigger.tsx
var SelectTrigger=function SelectTrigger(_ref){var _clsx;var size=_ref.size;var state=(0,react.useContext)(Select/* SelectStateContext */.nT);return/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{className:(0,dist_clsx/* default */.A)((_clsx={},_clsx[Select_module.medium]=size==='medium',_clsx),Select_module.trigger),"data-invalid":!!(state!=null&&state.displayValidation.isInvalid)||undefined,children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",style:{display:'flex'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20})})});};
;// ./packages/components/src/select/Select.tsx
var _excluded=["children","description","errorMessage","errorPosition","items","label","popover","size"];function Select_Select(_ref){var children=_ref.children,description=_ref.description,errorMessage=_ref.errorMessage,_ref$errorPosition=_ref.errorPosition,errorPosition=_ref$errorPosition===void 0?'top':_ref$errorPosition,items=_ref.items,label=_ref.label,popover=_ref.popover,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(FocusScope/* FocusScope */.n1,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Select/* Select */.l6,Object.assign({},props,{className:(0,clsx/* default */.A)(props.className,Select_module.select),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapper/* LabelWrapper */.cR,{popover:popover,children:label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{"data-disabled":props.isDisabled||undefined,children:label})}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:description}),errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:errorMessage}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.triggerContainer,"data-disabled":props.isDisabled||undefined,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SelectTrigger,{size:size}),/*#__PURE__*/(0,jsx_runtime.jsx)(Select/* SelectValue */.yv,{className:Select_module.selectValue,"data-disabled":props.isDisabled||undefined,children:function children(renderProps){return renderProps.isPlaceholder||props.selectionMode!=='multiple'?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(Select_module.placeholder),children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:(0,clsx/* default */.A)(Select_module.truncate),children:renderProps.defaultChildren})}):/*#__PURE__*/(0,jsx_runtime.jsx)(SelectValueTag,Object.assign({},props,renderProps));}})]}),errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{children:errorMessage}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Popover/* Popover */.A,{className:Select_module.popover,offset:0,hideArrow:true,children:[props.isSelectableAll&&/*#__PURE__*/(0,jsx_runtime.jsx)(SelectAll,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(ListBox/* ListBox */.q,{escapeKeyBehavior:"none",items:items,children:children})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectTags,Object.assign({},props))]}))});}

/***/ }),

/***/ 61130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  JV: () => (/* reexport */ DefaultReactDatepickerExample),
  N_: () => (/* reexport */ MonthSelectExample),
  F0: () => (/* reexport */ PaginationExample)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-table/build/lib/index.mjs
var lib = __webpack_require__(1530);
// EXTERNAL MODULE: ./node_modules/@tanstack/table-core/build/lib/index.mjs
var build_lib = __webpack_require__(33888);
// EXTERNAL MODULE: ./node_modules/@faker-js/faker/dist/chunk-4X5ZEQ5K.js + 2 modules
var chunk_4X5ZEQ5K = __webpack_require__(71556);
;// ./apps/docs/src/components/examples/tanstack-table/makeData.ts
var range=function range(len){var arr=[];for(var i=0;i<len;i++){arr.push(i);}return arr;};var newPerson=function newPerson(){return{firstName:chunk_4X5ZEQ5K.a.person.firstName(),lastName:chunk_4X5ZEQ5K.a.person.lastName(),age:chunk_4X5ZEQ5K.a.number["int"](40),visits:chunk_4X5ZEQ5K.a.number["int"](1000),progress:chunk_4X5ZEQ5K.a.number["int"](100),status:chunk_4X5ZEQ5K.a.helpers.shuffle(['relationship','complicated','single'])[0]};};function makeData(){for(var _len=arguments.length,lens=new Array(_len),_key=0;_key<_len;_key++){lens[_key]=arguments[_key];}var _makeDataLevel=function makeDataLevel(depth){if(depth===void 0){depth=0;}var len=lens[depth];return range(len).map(function(d){return Object.assign({},newPerson(),{subRows:lens[depth+1]?_makeDataLevel(depth+1):undefined});});};return _makeDataLevel();}
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx + 3 modules
var TextField = __webpack_require__(13332);
// EXTERNAL MODULE: ./packages/components/src/select/Select.tsx + 6 modules
var Select = __webpack_require__(51397);
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBoxItem.tsx
var ListBoxItem = __webpack_require__(98437);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevrons-left.js
var chevrons_left = __webpack_require__(33079);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(60250);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(87677);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevrons-right.js
var chevrons_right = __webpack_require__(63286);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/components/examples/tanstack-table/TanstackTableExamples.tsx
var defaultColumns=[{accessorKey:'firstName',header:function header(){return'First Name';},cell:function cell(info){return info.getValue();},footer:function footer(props){return props.column.id;}},{accessorFn:function accessorFn(row){return row.lastName;},id:'lastName',cell:function cell(info){return info.getValue();},header:function header(){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Last Name"});},footer:function footer(props){return props.column.id;}},{accessorKey:'age',header:function header(){return'Age';},footer:function footer(props){return props.column.id;}},{accessorKey:'visits',header:function header(){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Visits"});},footer:function footer(props){return props.column.id;}},{accessorKey:'status',header:'Status',footer:function footer(props){return props.column.id;}},{accessorKey:'progress',header:'Profile Progress',footer:function footer(props){return props.column.id;}}];var PaginationExample=function PaginationExample(){var _React$useState=react.useState(function(){return makeData(1000);}),data=_React$useState[0];var _React$useState2=react.useState(function(){return[].concat(defaultColumns);}),columns=_React$useState2[0];// Create the table and pass your options
var table=(0,lib/* useReactTable */.N4)({data:data,columns:columns,getCoreRowModel:(0,build_lib/* getCoreRowModel */.HT)(),getPaginationRowModel:(0,build_lib/* getPaginationRowModel */.kW)()});// Manage your own state
var _React$useState3=react.useState(table.initialState),state=_React$useState3[0],setState=_React$useState3[1];// Override the state managers for the table to your own
table.setOptions(function(prev){return Object.assign({},prev,{state:state,onStateChange:setState// These are just table options, so if things
// need to change based on your state, you can
// derive them here
});});return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{className:"table",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{children:table.getHeaderGroups().map(function(headerGroup){return/*#__PURE__*/(0,jsx_runtime.jsx)("tr",{children:headerGroup.headers.map(function(header){return/*#__PURE__*/(0,jsx_runtime.jsx)("th",{colSpan:header.colSpan,children:header.isPlaceholder?null:(0,lib/* flexRender */.Kv)(header.column.columnDef.header,header.getContext())},header.id);})},headerGroup.id);})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{children:table.getRowModel().rows.map(function(row){return/*#__PURE__*/(0,jsx_runtime.jsx)("tr",{children:row.getVisibleCells().map(function(cell){return/*#__PURE__*/(0,jsx_runtime.jsx)("td",{children:(0,lib/* flexRender */.Kv)(cell.column.columnDef.cell,cell.getContext())},cell.id);})},row.id);})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tfoot",{children:table.getFooterGroups().map(function(footerGroup){return/*#__PURE__*/(0,jsx_runtime.jsx)("tr",{children:footerGroup.headers.map(function(header){return/*#__PURE__*/(0,jsx_runtime.jsx)("th",{colSpan:header.colSpan,children:header.isPlaceholder?null:(0,lib/* flexRender */.Kv)(header.column.columnDef.footer,header.getContext())},header.id);})},footerGroup.id);})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',gap:'0.5rem',margin:'1rem 0'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return table.setPageIndex(0);},isDisabled:!table.getCanPreviousPage(),children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevrons_left/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return table.previousPage();},isDisabled:!table.getCanPreviousPage(),children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_left/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return table.nextPage();},isDisabled:!table.getCanNextPage(),children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return table.setPageIndex(table.getPageCount()-1);},isDisabled:!table.getCanNextPage(),children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevrons_right/* default */.A,{})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',gap:'0.5rem',margin:'1rem 0'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{value:table.getState().pagination.pageIndex+1+" of "+table.getPageCount(),isReadOnly:true,label:"Page"}),/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"Go to page",type:"number",min:1,max:table.getPageCount(),value:(table.getState().pagination.pageIndex+1).toString(),onChange:function onChange(e){var page=e?Number(e)-1:0;table.setPageIndex(page);}}),/*#__PURE__*/(0,jsx_runtime.jsx)(Select/* Select */.l,{style:{minWidth:'200px'},label:"Rows per page",value:table.getState().pagination.pageSize.toString(),onChange:function onChange(key){return key!==null&&table.setPageSize(typeof key==='string'?parseInt(key):key);},items:[10,20,30,40,50].map(function(pageSize){return{id:pageSize.toString(),name:"Show "+pageSize};}),children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(ListBoxItem/* ListBoxItem */.n,Object.assign({},item,{children:item.name}));}})]})]});};
;// ./apps/docs/src/components/examples/tanstack-table/index.ts

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar-days.js
var calendar_days = __webpack_require__(93347);
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/index.es.js + 134 modules
var index_es = __webpack_require__(7171);
// EXTERNAL MODULE: ./node_modules/date-fns/locale/sv.js + 5 modules
var sv = __webpack_require__(96967);
;// ./apps/docs/src/components/examples/react-datepicker/ReactDatepickerExamples.tsx
(0,index_es/* registerLocale */.E)('sv',sv.sv);(0,index_es/* setDefaultLocale */.YC)('sv');var DefaultReactDatepickerExample=function DefaultReactDatepickerExample(){var _useState=(0,react.useState)(null),selectedDate=_useState[0],setSelectedDate=_useState[1];return/*#__PURE__*/(0,jsx_runtime.jsx)(index_es/* default */.Ay,{showIcon:true,selected:selectedDate,onChange:function onChange(date){return setSelectedDate(date);},formatWeekDay:function formatWeekDay(date){return date[0].toUpperCase();},toggleCalendarOnIconClick:true,icon:/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_days/* default */.A,{height:20}),showPopperArrow:false,dateFormat:"dd-MM-yyyy",placeholderText:"Select a date"});};var MonthSelectExample=function MonthSelectExample(){var _useState2=(0,react.useState)(null),selectedDate=_useState2[0],setSelectedDate=_useState2[1];return/*#__PURE__*/(0,jsx_runtime.jsx)(index_es/* default */.Ay,{showPopperArrow:false,selected:selectedDate,showIcon:true,toggleCalendarOnIconClick:true,icon:/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_days/* default */.A,{height:20}),showMonthYearPicker:true,onChange:function onChange(date){return setSelectedDate(date);},dateFormat:"MM-yyyy",placeholderText:"Select a date"});};
;// ./apps/docs/src/components/examples/react-datepicker/index.ts

;// ./apps/docs/src/components/examples/index.ts


/***/ }),

/***/ 73202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  cR: () => (/* binding */ LabelWrapper),
  d$: () => (/* binding */ LabelWrapperContext)
});

// UNUSED EXPORTS: useLabelWrapperContext

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/components/src/label/LabelWrapper.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const LabelWrapper_module = ({"labelPopover":"labelPopover_QNhJ","labelPopoverTrigger":"labelPopoverTrigger_iTpE"});
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(28777);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(97213);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/label/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"moreInfo":"More info"},"sv":{"moreInfo":"Mer information"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/InfoPopover.tsx
/** Display an info-icon with popover next to the label to further explain what the user should enter in the field */var InfoPopover=function InfoPopover(_ref){var children=_ref.children,ariaLabel=_ref['aria-label'];var _React$useState=react.useState(false),isOpen=_React$useState[0],setIsOpen=_React$useState[1];var ctx=react.useContext(LabelWrapperContext);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{isOpen:isOpen,onOpenChange:setIsOpen,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",size:"medium",className:LabelWrapper_module.labelPopoverTrigger,"aria-label":ariaLabel||strings.format('moreInfo'),id:ctx==null?void 0:ctx.popoverId,children:/*#__PURE__*/(0,jsx_runtime.jsx)(info/* default */.A,{size:20})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:children})]});};
;// ./packages/components/src/label/LabelWrapper.tsx
var LabelWrapperContext=/*#__PURE__*/react.createContext(undefined);var useLabelWrapperContext=function useLabelWrapperContext(){return React.useContext(LabelWrapperContext);};var LabelWrapper=function LabelWrapper(_ref){var children=_ref.children,popover=_ref.popover;var popoverId=react.useId();if(popover)return/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapperContext.Provider,{value:{popoverId:popoverId},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:LabelWrapper_module.labelPopover,children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(InfoPopover,Object.assign({},popover))]})});return children;};

/***/ }),

/***/ 73413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"textField":"textField_IarX","bottomError":"bottomError_XU77","textArea":"textArea_M6yF","wrap":"wrap_ljmz","medium":"medium_jalb","input":"input_g6A6","passwordText":"passwordText_gBIs","passwordButton":"passwordButton_kacG"});

/***/ }),

/***/ 74658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ Tag),
  C: () => (/* binding */ TagGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/components/src/tag/Tag.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tag_module = ({"button":"button_Loby","success":"success_GxEq","warning":"warning_MXCT","info":"info_xrqn","important":"important_QbWH","tag":"tag_WAeO","tagText":"tagText_f_lx","dismissable":"dismissable_Tfml","tagList":"tagList_sxPC"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TagGroup.mjs + 40 modules
var dist_TagGroup = __webpack_require__(99628);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/utils/clsx.ts
var clsx = __webpack_require__(1160);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/tag/Tag.tsx
var _excluded=["children"],_excluded2=["children","dismissable","className","type"];var TagGroup=function TagGroup(_ref){var children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagGroup */.CR,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagList */.LY,{className:Tag_module.tagList,children:children})}));};var Tag=function Tag(_ref2){var children=_ref2.children,dismissable=_ref2.dismissable,className=_ref2.className,type=_ref2.type,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_TagGroup/* Tag */.vw,Object.assign({className:(0,clsx/* default */.A)(Tag_module.tag,dismissable&&Tag_module.dismissable,type==='success'&&Tag_module.success,type==='info'&&Tag_module.info,type==='important'&&Tag_module.important,type==='warning'&&Tag_module.warning,className)},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Tag_module.tagText,children:children}),dismissable&&/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",size:"medium",className:Tag_module.button,slot:"remove",children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20})})]}));};

/***/ }),

/***/ 88413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oe: () => (/* binding */ useLocalizedStringFormatter)
/* harmony export */ });
/* unused harmony export useLocalizedStringDictionary */
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92122);
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57612);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39892);
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
 */var DEFAULT_LANGUAGE='sv';var cache=new WeakMap();function getCachedDictionary(strings){var dictionary=cache.get(strings);if(!dictionary){dictionary=new _internationalized_string__WEBPACK_IMPORTED_MODULE_1__/* .LocalizedStringDictionary */ .B(strings,DEFAULT_LANGUAGE);cache.set(strings,dictionary);}return dictionary;}/**
 * Returns a cached LocalizedStringDictionary for the given strings.
 */function useLocalizedStringDictionary(strings,packageName){return packageName&&_internationalized_string__WEBPACK_IMPORTED_MODULE_1__/* .LocalizedStringDictionary */ .B.getGlobalDictionaryForPackage(packageName)||getCachedDictionary(strings);}/**
 * Provides localized string formatting for the current locale. Supports interpolating variables,
 * selecting the correct pluralization, and formatting numbers. Automatically updates when the locale changes.
 * @param strings - A mapping of languages to localized strings by key.
 */function useLocalizedStringFormatter(strings,packageName){if(!strings||typeof strings!=='object'||!(DEFAULT_LANGUAGE in strings)){throw new Error("useLocalizedStringFormatter: Default language \""+DEFAULT_LANGUAGE+"\" must be defined in dictionary.");}var _useLocale=(0,react_aria_components__WEBPACK_IMPORTED_MODULE_2__/* .useLocale */ .Y)(),locale=_useLocale.locale;var dictionary=useLocalizedStringDictionary(strings,packageName);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return new _internationalized_string__WEBPACK_IMPORTED_MODULE_3__/* .LocalizedStringFormatter */ .J(locale,dictionary);},[dictionary,locale]);}

/***/ }),

/***/ 98437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ ListBoxItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98587);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79255);
/* harmony import */ var _utils_clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1160);
/* harmony import */ var _ListBox_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
var _excluded=["children","className","hideSelectionIndicator"];var ListBoxItem=function ListBoxItem(_ref){var children=_ref.children,className=_ref.className,hideSelectionIndicator=_ref.hideSelectionIndicator,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .ListBoxItem */ .nh,Object.assign({className:(0,_utils_clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_ListBox_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.listBoxItem,className),"data-show-selection":!hideSelectionIndicator||undefined},rest,{children:children}));};

/***/ })

}]);