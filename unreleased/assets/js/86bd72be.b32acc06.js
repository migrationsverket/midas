"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[7895],{

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
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
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
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
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
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
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
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
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
var _excluded=["className","children"];var ListBox=function ListBox(_ref){var className=_ref.className,children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Virtualizer/* Virtualizer */.Y,{layout:SectionedListLayout,layoutOptions:{headingHeight:44},children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_ListBox/* ListBox */.qF,Object.assign({className:(0,clsx/* default */.A)(ListBox_module/* default */.A.listBox,className)},rest,{children:children}))});};

/***/ }),

/***/ 28549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Select)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useObjectRef.mjs
var useObjectRef = __webpack_require__(83908);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/Section.mjs
var Section = __webpack_require__(72487);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/Item.mjs
var Item = __webpack_require__(48639);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextField.mjs
var TextField = __webpack_require__(32945);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TagGroup.mjs + 40 modules
var TagGroup = __webpack_require__(99628);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(45773);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx + 3 modules
var Checkbox = __webpack_require__(8807);
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBoxItem.tsx
var ListBoxItem = __webpack_require__(98437);
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBoxSection.tsx
var ListBoxSection = __webpack_require__(73807);
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBox.tsx + 1 modules
var ListBox = __webpack_require__(22247);
;// ./packages/components/src/select/Select.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Select_module = ({"wrapper":"wrapper_VDHP","trigger":"trigger_YoQG","medium":"medium_IF05","icon":"icon_roiA","tagGroup":"tagGroup_t6GX","listBoxItemCheckmark":"listBoxItemCheckmark_Dz5t","triggerContainer":"triggerContainer_JBm2","selectValueTag":"selectValueTag_Bx1C","clearButton":"clearButton_p8du","truncate":"truncate_J6cE","checkboxContainer":"checkboxContainer_u2A7","selectAll":"selectAll_YD8u"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/select/SelectListBox.tsx
var _excluded=["state"];var Option=function Option(_ref){var item=_ref.item;return/*#__PURE__*/(0,jsx_runtime.jsx)(ListBoxItem/* ListBoxItem */.n,Object.assign({},item.value,{textValue:item.textValue,"aria-label":item.textValue,children:function children(_ref2){var isDisabled=_ref2.isDisabled,isSelected=_ref2.isSelected,selectionMode=_ref2.selectionMode;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[selectionMode==='multiple'?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.checkboxContainer,"aria-hidden":true,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{isDisabled:isDisabled,isSelected:isSelected,isReadOnly:true,excludeFromTabOrder:true,"aria-label":item.textValue})}):null,item.rendered,isSelected&&selectionMode==='single'?/*#__PURE__*/(0,jsx_runtime.jsx)(check/* default */.A,{size:20,className:Select_module.listBoxItemCheckmark}):null]});}}));};var SelectListBox_Section=function Section(_ref3){var section=_ref3.section,state=_ref3.state;return/*#__PURE__*/(0,jsx_runtime.jsx)(ListBoxSection/* ListBoxSection */.r,Object.assign({},section.value,{children:state.collection.getChildren?/*#__PURE__*/(0,jsx_runtime.jsx)(CollectionBuilder/* Collection */.pM,{items:state.collection.getChildren(section.key),children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Option,{item:item});}}):null}));};var SelectListBox=function SelectListBox(_ref4){var state=_ref4.state,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref4,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(ListBox/* ListBox */.q,Object.assign({},rest,state,{escapeKeyBehavior:"none",onSelectionChange:state.setSelectedKeys,items:state.collection,children:function children(item){return item.type==='section'?/*#__PURE__*/(0,jsx_runtime.jsx)(SelectListBox_Section,{state:state,section:item}):/*#__PURE__*/(0,jsx_runtime.jsx)(Option,{item:item});}}));};
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useCollator.mjs
var useCollator = __webpack_require__(82627);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var useFocusVisible = __webpack_require__(95562);
// EXTERNAL MODULE: ./node_modules/@react-aria/label/dist/useField.mjs
var useField = __webpack_require__(85441);
// EXTERNAL MODULE: ./node_modules/@react-aria/menu/dist/useMenuTrigger.mjs + 35 modules
var useMenuTrigger = __webpack_require__(25263);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/ListKeyboardDelegate.mjs
var ListKeyboardDelegate = __webpack_require__(96584);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/useTypeSelect.mjs
var useTypeSelect = __webpack_require__(18399);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var filterDOMProps = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/mergeProps.mjs
var mergeProps = __webpack_require__(32217);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useId.mjs + 1 modules
var useId = __webpack_require__(84137);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/chain.mjs
var chain = __webpack_require__(72166);
;// ./packages/components/src/select/useMultiSelect.ts
function useMultiSelect(props,state,ref){var disallowEmptySelection=props.disallowEmptySelection,isDisabled=props.isDisabled;var collator=(0,useCollator/* useCollator */.Q)({usage:'search',sensitivity:'base'});var delegate=(0,react.useMemo)(function(){return new ListKeyboardDelegate/* ListKeyboardDelegate */.n(state.collection,state.disabledKeys,null,collator);},[state.collection,state.disabledKeys,collator]);var _useMenuTrigger=(0,useMenuTrigger/* useMenuTrigger */.V)({isDisabled:isDisabled,type:'listbox'},state,ref),menuTriggerProps=_useMenuTrigger.menuTriggerProps,menuProps=_useMenuTrigger.menuProps;var triggerOnKeyDown=function triggerOnKeyDown(e){var selectedKeys=state.selectedKeys,selectionMode=state.selectionMode;var firstKey=selectedKeys.values().next().value;// Select items when trigger has focus - imitating default `<select>` behaviour.
// In multi selection mode it does not make sense.
if(selectionMode==='single'){switch(e.key){case'ArrowLeft':{// prevent scrolling containers
e.preventDefault();var key=selectedKeys.size>0?delegate.getKeyAbove(firstKey):delegate.getFirstKey();if(key){state.setSelectedKeys([key]);}break;}case'ArrowRight':{// prevent scrolling containers
e.preventDefault();var _key=selectedKeys.size>0?delegate.getKeyBelow(firstKey):delegate.getFirstKey();if(_key){state.setSelectedKeys([_key]);}break;}// no default
}}};// Typeahead functionality - imitating default `<select>` behaviour.
var _useTypeSelect=(0,useTypeSelect/* useTypeSelect */.I)({keyboardDelegate:delegate,selectionManager:state.selectionManager,onTypeSelect:function onTypeSelect(key){state.setSelectedKeys([key]);}}),typeSelectProps=_useTypeSelect.typeSelectProps;var _useField=(0,useField/* useField */.M)(Object.assign({},props,{labelElementType:'span'})),labelProps=_useField.labelProps,fieldProps=_useField.fieldProps;typeSelectProps.onKeyDown=typeSelectProps.onKeyDownCapture;delete typeSelectProps.onKeyDownCapture;var domProps=(0,filterDOMProps/* filterDOMProps */.$)(props,{labelable:true});var triggerProps=(0,mergeProps/* mergeProps */.v)(typeSelectProps,menuTriggerProps,fieldProps);var valueId=(0,useId/* useId */.Bi)();return{labelProps:Object.assign({},labelProps,{onClick:function onClick(){if(!props.isDisabled){var _ref$current;(_ref$current=ref.current)==null||_ref$current.focus();// Show the focus ring so the user knows where focus went
(0,useFocusVisible/* setInteractionModality */.Cl)('keyboard');}}}),triggerProps:(0,mergeProps/* mergeProps */.v)(domProps,Object.assign({},triggerProps,{onKeyDown:(0,chain/* chain */.c)(triggerProps.onKeyDown,triggerOnKeyDown,props.onKeyDown),onKeyUp:props.onKeyUp,'aria-labelledby':[triggerProps['aria-labelledby'],triggerProps['aria-label']&&!triggerProps['aria-labelledby']?triggerProps.id:null,valueId].filter(Boolean).join(' '),onFocus:function onFocus(e){if(state.isFocused){return;}if(props.onFocus){props.onFocus(e);}state.setFocused(true);},onBlur:function onBlur(e){if(state.isOpen){return;}if(props.onBlur){props.onBlur(e);}state.setFocused(false);}})),valueProps:{id:valueId},menuProps:Object.assign({},menuProps,{disallowEmptySelection:disallowEmptySelection,autoFocus:state.focusStrategy||true,shouldSelectOnPressUp:true,shouldFocusOnHover:true,onBlur:function onBlur(e){if(e.currentTarget.contains(e.relatedTarget)){return;}if(props.onBlur){props.onBlur(e);}state.setFocused(false);},'aria-labelledby':[fieldProps['aria-labelledby'],triggerProps['aria-label']&&!fieldProps['aria-labelledby']?triggerProps.id:null].filter(Boolean).join(' ')})};}
// EXTERNAL MODULE: ./node_modules/@react-stately/menu/dist/useMenuTriggerState.mjs
var useMenuTriggerState = __webpack_require__(55745);
// EXTERNAL MODULE: ./node_modules/@react-stately/form/dist/useFormValidationState.mjs
var useFormValidationState = __webpack_require__(71144);
// EXTERNAL MODULE: ./node_modules/@react-stately/list/dist/useListState.mjs
var useListState = __webpack_require__(46655);
;// ./packages/components/src/select/useMultiSelectListState.ts
function useMultiSelectListState(props){var _useListState=(0,useListState/* useListState */.p)(props),collection=_useListState.collection,disabledKeys=_useListState.disabledKeys,selectionManager=_useListState.selectionManager,_useListState$selecti=_useListState.selectionManager,setSelectedKeys=_useListState$selecti.setSelectedKeys,selectedKeys=_useListState$selecti.selectedKeys,selectionMode=_useListState$selecti.selectionMode;var missingKeys=[];var selectedItems=selectedKeys.size!==0?Array.from(selectedKeys).map(function(key){var item=collection.getItem(key);if(!item){missingKeys.push(key);}return item;}).filter(Boolean):null;if(missingKeys.length){console.warn("Select: Keys \""+missingKeys.join(', ')+"\" passed to \"selectedKeys\" are not present in the collection.");}return{collection:collection,disabledKeys:disabledKeys,selectionManager:selectionManager,selectionMode:selectionMode,selectedKeys:selectedKeys,setSelectedKeys:setSelectedKeys.bind(selectionManager),selectedItems:selectedItems};}
;// ./packages/components/src/select/useMultiSelectState.ts
function useMultiSelectState(props){var _useState=(0,react.useState)(false),isFocused=_useState[0],setFocused=_useState[1];var triggerState=(0,useMenuTriggerState/* useMenuTriggerState */.I)(props);var isSingleSelect=props.selectionMode==='single';var multiSelectListState=useMultiSelectListState(Object.assign({},props,{onSelectionChange:function onSelectionChange(keys){props.onSelectionChange&&props.onSelectionChange(keys);if(isSingleSelect){triggerState.close();}}}));var validationState=(0,useFormValidationState/* useFormValidationState */.KZ)(Object.assign({},props,{validationBehavior:'native',value:multiSelectListState.selectedKeys}));var isCollectionEmpty=multiSelectListState.collection.size===0;var isAnyKeySelected=!!multiSelectListState.selectedKeys.size;var resetValidation=(0,react.useCallback)(function(){validationState.resetValidation();validationState.commitValidation();},[validationState]);(0,react.useEffect)(function(){if(isSingleSelect&&isAnyKeySelected){resetValidation();}},[isAnyKeySelected,isSingleSelect,resetValidation]);return Object.assign({},multiSelectListState,triggerState,{close:function close(){triggerState.close();if(isAnyKeySelected){resetValidation();}},open:function open(){if(!isCollectionEmpty){triggerState.open();}},toggle:function toggle(focusStrategy){if(!isCollectionEmpty){triggerState.toggle(focusStrategy);}},isFocused:isFocused,setFocused:setFocused},validationState);}
// EXTERNAL MODULE: ./packages/components/src/tag/Tag.tsx + 1 modules
var Tag = __webpack_require__(74658);
// EXTERNAL MODULE: ./packages/components/src/utils/useObserveElement.tsx
var useObserveElement = __webpack_require__(67603);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/useFormReset.mjs
var useFormReset = __webpack_require__(8343);
// EXTERNAL MODULE: ./node_modules/@react-aria/form/dist/useFormValidation.mjs
var useFormValidation = __webpack_require__(48868);
// EXTERNAL MODULE: ./node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(87979);
;// ./packages/components/src/select/HiddenMultiSelect.tsx
/**
 * Provides the behavior and accessibility implementation for a hidden `<select>` element, which
 * can be used in combination with `useSelect` to support browser form autofill, mobile form
 * navigation, and native HTML form submission.
 */function useHiddenMultiSelect(_ref,state,triggerRef){var autoComplete=_ref.autoComplete,name=_ref.name,isDisabled=_ref.isDisabled,isRequired=_ref.isRequired,selectRef=_ref.selectRef;var _useVisuallyHidden=(0,VisuallyHidden/* useVisuallyHidden */.B)(),visuallyHiddenProps=_useVisuallyHidden.visuallyHiddenProps;(0,useFormReset/* useFormReset */.F)(selectRef,state.selectedKeys,state.setSelectedKeys);(0,useFormValidation/* useFormValidation */.X)({validationBehavior:'native',focus:function focus(){var _triggerRef$current;return(_triggerRef$current=triggerRef.current)==null?void 0:_triggerRef$current.focus();}},state,selectRef);// In Safari, the <select> cannot have `display: none` or `hidden` for autofill to work.
// In Firefox, there must be a <label> to identify the <select> whereas other browsers
// seem to identify it just by surrounding text.
// The solution is to use <VisuallyHidden> to hide the elements, which clips the elements to a
// 1px rectangle. In addition, we hide from screen readers with aria-hidden, and make the <select>
// non tabbable with tabIndex={-1}.
return{containerProps:Object.assign({},visuallyHiddenProps,{'aria-hidden':true,// @ts-expect-error - data-a11y-ignore is not a standard attribute
'data-react-aria-prevent-focus':true,'data-a11y-ignore':'aria-hidden-focus'}),inputProps:{style:{display:'none'}},selectProps:{tabIndex:-1,autoComplete:autoComplete,disabled:isDisabled,required:isRequired,name:name,value:Array.from(state.selectedKeys).map(function(key){return key.toString();}),onChange:function onChange(e){return state.setSelectedKeys(e.target.value);},multiple:true}};}/**
 * Renders a hidden native `<select>` element, which can be used to support browser
 * form autofill, mobile form navigation, and native form submission.
 */function HiddenMultiSelect(props){var state=props.state,triggerRef=props.triggerRef,name=props.name,isDisabled=props.isDisabled;var label=props.label+"-hidden";var selectRef=(0,react.useRef)(null);var _useHiddenMultiSelect=useHiddenMultiSelect(Object.assign({},props,{selectRef:selectRef}),state,triggerRef),containerProps=_useHiddenMultiSelect.containerProps,selectProps=_useHiddenMultiSelect.selectProps;// If used in a <form>, use a hidden input so the value can be submitted to a server.
// If the collection isn't too big, use a hidden <select> element for this so that browser
// autofill will work. Otherwise, use an <input type="hidden">.
if(state.collection.size<=300){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},containerProps,{"data-testid":"hidden-select-container",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{children:[label,/*#__PURE__*/(0,jsx_runtime.jsxs)("select",Object.assign({},selectProps,{ref:selectRef,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("option",{}),[].concat(state.collection.getKeys()).map(function(key){var item=state.collection.getItem(key);if(item&&item.type==='item'){return/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:item.key,children:item.textValue},item.key);}return null;})]}))]})}));}else if(name){var _Array$from$map;return/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"hidden",autoComplete:selectProps.autoComplete,name:name,disabled:isDisabled,value:(_Array$from$map=Array.from(state.selectedKeys).map(function(key){return key.toString();}))!=null?_Array$from$map:['']});}return null;}
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(34704);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBoxPopover.tsx
var ListBoxPopover = __webpack_require__(48001);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/select/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"clearAll":"Clear all","selectAll":"Select all","selectedItems":"Selected items","chosen":"chosen"},"sv":{"clearAll":"Rensa alla","selectAll":"Välj alla","selectedItems":"Valda objekt","chosen":"valda"}}');
;// ./packages/components/src/select/MultiSelectValueTag.tsx
var MultiSelectValueTag=function MultiSelectValueTag(_ref){var items=_ref.state.selectedItems,isDisabled=_ref.isDisabled,parentWidth=_ref.parentWidth,onClear=_ref.onClear,triggerRef=_ref.triggerRef,isClearable=_ref.isClearable;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.selectValueTag,"data-disabled":isDisabled||undefined,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Select_module.truncate,style:{maxWidth:parentWidth-92},children:items!=null&&items.length&&items.length>1?items.length+" "+strings.format('chosen'):items==null?void 0:items[0].textValue}),isClearable&&/*#__PURE__*/(0,jsx_runtime.jsx)("button",{disabled:isDisabled,"aria-label":strings.format('clearAll'),className:Select_module.clearButton,onClick:function onClick(){var _triggerRef$current;onClear();triggerRef==null||(_triggerRef$current=triggerRef.current)==null||_triggerRef$current.focus();},children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{width:20,height:20})})]});};
// EXTERNAL MODULE: ./node_modules/@react-aria/button/dist/useButton.mjs
var useButton = __webpack_require__(69229);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
;// ./packages/components/src/select/SelectTrigger.tsx
var SelectTrigger_excluded=["autoFocus","excludeFromTabOrder","isDisabled","size","isOpen","isInvalid","selectionMode","state","placeholder","children","triggerRef"];var SelectTrigger=function SelectTrigger(_ref){var _clsx;var autoFocus=_ref.autoFocus,excludeFromTabOrder=_ref.excludeFromTabOrder,isDisabled=_ref.isDisabled,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,isOpen=_ref.isOpen,isInvalid=_ref.isInvalid,selectionMode=_ref.selectionMode,selectedItems=_ref.state.selectedItems,placeholder=_ref.placeholder,children=_ref.children,triggerRef=_ref.triggerRef,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,SelectTrigger_excluded);var _useButton=(0,useButton/* useButton */.s)(Object.assign({autoFocus:autoFocus,excludeFromTabOrder:excludeFromTabOrder,isDisabled:isDisabled},rest),triggerRef),buttonProps=_useButton.buttonProps;var isMultiSelect=selectionMode==='multiple';return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Select_module.triggerContainer,"data-disabled":isDisabled||undefined,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",Object.assign({},buttonProps,{autoFocus:autoFocus,className:(0,clsx/* default */.A)(Select_module.trigger,(_clsx={},_clsx[Select_module.medium]=size==='medium',_clsx)),"data-disabled":isDisabled||undefined,"data-invalid":isInvalid||undefined,"data-open":isOpen||undefined,ref:triggerRef,type:"button",children:[isMultiSelect&&!selectedItems?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:placeholder}):null,!isMultiSelect?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:selectedItems?selectedItems[0].textValue:placeholder}):null,/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.icon,"aria-hidden":"true",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20})})]})),children]});};
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var field_error_FieldError = __webpack_require__(19060);
;// ./packages/components/src/select/SelectFieldError.tsx
var SelectFieldError=function SelectFieldError(_ref){var state=_ref.state,errorMessage=_ref.errorMessage;return/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldErrorContext */.C.Provider,{value:Object.assign({},state.displayValidation),children:/*#__PURE__*/(0,jsx_runtime.jsx)(field_error_FieldError/* FieldError */.b,{children:errorMessage})});};
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
;// ./packages/components/src/select/Select.tsx
var Select_excluded=["isClearable","popover"],_excluded2=["options"];var SelectComponent=/*#__PURE__*/react.forwardRef(function(_ref,ref){var _ref$isClearable=_ref.isClearable,isClearable=_ref$isClearable===void 0?true:_ref$isClearable,popover=_ref.popover,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,Select_excluded);var props=Object.assign({selectionMode:'single',errorPosition:'top',disallowEmptySelection:!isClearable,isClearable:isClearable,size:'large',popover:popover},rest);var triggerRef=(0,useObjectRef/* useObjectRef */.U)(ref);var state=useMultiSelectState(props);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var _useMultiSelect=useMultiSelect(props,state,triggerRef),labelProps=_useMultiSelect.labelProps,triggerProps=_useMultiSelect.triggerProps,valueProps=_useMultiSelect.valueProps,menuProps=_useMultiSelect.menuProps;var _useObserveElement=(0,useObserveElement/* default */.A)(triggerRef.current,{includePadding:true}),triggerWidth=_useObserveElement.width;return/*#__PURE__*/(0,jsx_runtime.jsxs)(TextField/* TextField */.A,Object.assign({},props,{className:(0,clsx/* default */.A)(Select_module.wrapper,props.className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HiddenMultiSelect,Object.assign({},props,{state:state,triggerRef:triggerRef})),/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapper/* LabelWrapper */.cR,{popover:popover,children:props.label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,Object.assign({},labelProps,{"data-disabled":props.isDisabled||undefined,children:props.label}))}),props.description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:props.description}),props.errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(SelectFieldError,Object.assign({},props,{state:state})),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectTrigger,Object.assign({},props,triggerProps,{isInvalid:state.displayValidation.isInvalid,triggerRef:triggerRef,state:state,children:props.selectionMode==='multiple'&&state.selectedItems?/*#__PURE__*/(0,jsx_runtime.jsx)("span",Object.assign({},valueProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(MultiSelectValueTag,Object.assign({},props,{state:state,parentWidth:triggerWidth,onClear:function onClear(){return state.selectionManager.clearSelection();},triggerRef:triggerRef}))})):null})),props.errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(SelectFieldError,Object.assign({},props,{state:state})),/*#__PURE__*/(0,jsx_runtime.jsxs)(ListBoxPopover/* ListBoxPopover */.f,{isOpen:state.isOpen,onOpenChange:function onOpenChange(isOpen){if(!isOpen){state.close();}},triggerRef:triggerRef,style:{width:triggerWidth},children:[props.isSelectableAll&&/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{isSelected:state.selectionManager.isSelectAll,isIndeterminate:!state.selectionManager.isSelectAll&&!state.selectionManager.isEmpty,className:Select_module.selectAll,onChange:function onChange(){return state.selectionManager.toggleSelectAll();},children:strings.format('selectAll')}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectListBox,Object.assign({},menuProps,{state:state}))]}),props.showTags&&!!state.selectedItems&&/*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* TagGroup */.C,{"aria-label":strings.format('selectedItems'),selectionBehavior:"toggle",onRemove:function onRemove(keys){return state.selectionManager.toggleSelection(Array.from(keys)[0]);},className:Select_module.tagGroup,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TagGroup/* TagList */.LY,{items:state.selectedItems,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* Tag */.v,{textValue:item.textValue,id:item.key,dismissable:true,isDisabled:props.isDisabled,children:item.textValue},item.key);}})})]}));});var Select=/*#__PURE__*/react.forwardRef(function(_ref2,ref){var options=_ref2.options,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(SelectComponent,Object.assign({},props,{items:options,ref:ref,children:function children(section){return section.children?/*#__PURE__*/(0,jsx_runtime.jsx)(Section/* Section */.w,{items:section.children,title:section.name,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Item/* Item */.q,{textValue:item.textValue,children:item.name});}},section.name):/*#__PURE__*/(0,jsx_runtime.jsx)(Item/* Item */.q,{textValue:section.textValue,children:section.name});}}));});Select.displayName='Select';

/***/ }),

/***/ 28777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover_Popover)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
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
var _excluded=["children","className","offset"];function Popover_Popover(_ref){var children=_ref.children,className=_ref.className,_ref$offset=_ref.offset,offset=_ref$offset===void 0?4:_ref$offset,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Popover/* Popover */.A,Object.assign({},props,{offset:offset,className:(0,clsx/* default */.A)(Popover_module.popover,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Popover_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:8,height:8,viewBox:"0 0 8 8",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L4 4 L8 0"})})}),children]}));}

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
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
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

/***/ 48001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ ListBoxPopover)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21416);
/* harmony import */ var _ListBox_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["className","children"];var ListBoxPopover=function ListBoxPopover(_ref){var className=_ref.className,children=_ref.children,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .Popover */ .A,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(className,_ListBox_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.listBoxPopover),offset:0},rest,{children:children}));};

/***/ }),

/***/ 54031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86707);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65014);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["variant","fullwidth","className","iconPlacement","size","icon","iconSize"];/**
 * Button to perform various actions.
 *
 * @interface MidasButton
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */var Button=function Button(_ref){var _ref$variant=_ref.variant,variant=_ref$variant===void 0?'primary':_ref$variant,fullwidth=_ref.fullwidth,className=_ref.className,iconPlacement=_ref.iconPlacement,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,IconComponent=_ref.icon,iconSize=_ref.iconSize,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.button,variant==='primary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.primary,variant==='secondary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.secondary,variant==='tertiary'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.tertiary,variant==='danger'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.danger,variant==='icon'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.iconBtn,fullwidth&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fullwidth,size==='medium'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.medium,iconPlacement==='right'&&_Button_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.iconRight,className)},rest,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[IconComponent&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IconComponent,{"aria-hidden":true,size:iconSize!=null?iconSize:20}),rest.children]})}));};

/***/ }),

/***/ 63078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_tanstack_table_mdx_86b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-tanstack-table-mdx-86b.json
const site_docs_dev_tanstack_table_mdx_86b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/tanstack-table","title":"Tanstack Table","description":"Implementation av Tanstack Table","source":"@site/docs/dev/tanstack-table.mdx","sourceDirName":"dev","slug":"/dev/tanstack-table","permalink":"/unreleased/dev/tanstack-table","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Tanstack Table","description":"Implementation av Tanstack Table","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-table/build/lib/index.mjs
var build_lib = __webpack_require__(1530);
// EXTERNAL MODULE: ./node_modules/@tanstack/table-core/build/lib/index.mjs
var table_core_build_lib = __webpack_require__(33888);
// EXTERNAL MODULE: ./node_modules/@faker-js/faker/dist/chunk-4X5ZEQ5K.js + 2 modules
var chunk_4X5ZEQ5K = __webpack_require__(71556);
;// ./apps/docs/src/components/examples/tanstack-table/makeData.ts
var range=function range(len){var arr=[];for(var i=0;i<len;i++){arr.push(i);}return arr;};var newPerson=function newPerson(){return{firstName:chunk_4X5ZEQ5K.a.person.firstName(),lastName:chunk_4X5ZEQ5K.a.person.lastName(),age:chunk_4X5ZEQ5K.a.number["int"](40),visits:chunk_4X5ZEQ5K.a.number["int"](1000),progress:chunk_4X5ZEQ5K.a.number["int"](100),status:chunk_4X5ZEQ5K.a.helpers.shuffle(['relationship','complicated','single'])[0]};};function makeData(){for(var _len=arguments.length,lens=new Array(_len),_key=0;_key<_len;_key++){lens[_key]=arguments[_key];}var _makeDataLevel=function makeDataLevel(depth){if(depth===void 0){depth=0;}var len=lens[depth];return range(len).map(function(d){return Object.assign({},newPerson(),{subRows:lens[depth+1]?_makeDataLevel(depth+1):undefined});});};return _makeDataLevel();}
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx + 3 modules
var TextField = __webpack_require__(13332);
// EXTERNAL MODULE: ./packages/components/src/select/Select.tsx + 10 modules
var Select = __webpack_require__(28549);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevrons-left.js
var chevrons_left = __webpack_require__(33079);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(60250);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(87677);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevrons-right.js
var chevrons_right = __webpack_require__(63286);
;// ./apps/docs/src/components/examples/tanstack-table/TanstackTableExamples.tsx
// eslint-disable-next-line @nx/enforce-module-boundaries
var defaultColumns=[{accessorKey:'firstName',header:function header(){return'First Name';},cell:function cell(info){return info.getValue();},footer:function footer(props){return props.column.id;}},{accessorFn:function accessorFn(row){return row.lastName;},id:'lastName',cell:function cell(info){return info.getValue();},header:function header(){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Last Name"});},footer:function footer(props){return props.column.id;}},{accessorKey:'age',header:function header(){return'Age';},footer:function footer(props){return props.column.id;}},{accessorKey:'visits',header:function header(){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Visits"});},footer:function footer(props){return props.column.id;}},{accessorKey:'status',header:'Status',footer:function footer(props){return props.column.id;}},{accessorKey:'progress',header:'Profile Progress',footer:function footer(props){return props.column.id;}}];var PaginationExample=function PaginationExample(){var _React$useState=react.useState(function(){return makeData(1000);}),data=_React$useState[0];var _React$useState2=react.useState(function(){return[].concat(defaultColumns);}),columns=_React$useState2[0];// Create the table and pass your options
var table=(0,build_lib/* useReactTable */.N4)({data:data,columns:columns,getCoreRowModel:(0,table_core_build_lib/* getCoreRowModel */.HT)(),getPaginationRowModel:(0,table_core_build_lib/* getPaginationRowModel */.kW)()});// Manage your own state
var _React$useState3=react.useState(table.initialState),state=_React$useState3[0],setState=_React$useState3[1];// Override the state managers for the table to your own
table.setOptions(function(prev){return Object.assign({},prev,{state:state,onStateChange:setState// These are just table options, so if things
// need to change based on your state, you can
// derive them here
});});return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("table",{className:"table",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("thead",{children:table.getHeaderGroups().map(function(headerGroup){return/*#__PURE__*/(0,jsx_runtime.jsx)("tr",{children:headerGroup.headers.map(function(header){return/*#__PURE__*/(0,jsx_runtime.jsx)("th",{colSpan:header.colSpan,children:header.isPlaceholder?null:(0,build_lib/* flexRender */.Kv)(header.column.columnDef.header,header.getContext())},header.id);})},headerGroup.id);})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tbody",{children:table.getRowModel().rows.map(function(row){return/*#__PURE__*/(0,jsx_runtime.jsx)("tr",{children:row.getVisibleCells().map(function(cell){return/*#__PURE__*/(0,jsx_runtime.jsx)("td",{children:(0,build_lib/* flexRender */.Kv)(cell.column.columnDef.cell,cell.getContext())},cell.id);})},row.id);})}),/*#__PURE__*/(0,jsx_runtime.jsx)("tfoot",{children:table.getFooterGroups().map(function(footerGroup){return/*#__PURE__*/(0,jsx_runtime.jsx)("tr",{children:footerGroup.headers.map(function(header){return/*#__PURE__*/(0,jsx_runtime.jsx)("th",{colSpan:header.colSpan,children:header.isPlaceholder?null:(0,build_lib/* flexRender */.Kv)(header.column.columnDef.footer,header.getContext())},header.id);})},footerGroup.id);})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',gap:'0.5rem',margin:'1rem 0'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return table.setPageIndex(0);},isDisabled:!table.getCanPreviousPage(),children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevrons_left/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return table.previousPage();},isDisabled:!table.getCanPreviousPage(),children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_left/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return table.nextPage();},isDisabled:!table.getCanNextPage(),children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return table.setPageIndex(table.getPageCount()-1);},isDisabled:!table.getCanNextPage(),children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevrons_right/* default */.A,{})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',gap:'0.5rem',margin:'1rem 0'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{value:table.getState().pagination.pageIndex+1+" of "+table.getPageCount(),isReadOnly:true,label:"Page"}),/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A,{label:"Go to page",type:"number",min:1,max:table.getPageCount(),value:(table.getState().pagination.pageIndex+1).toString(),onChange:function onChange(e){var page=e?Number(e)-1:0;table.setPageIndex(page);}}),/*#__PURE__*/(0,jsx_runtime.jsx)(Select/* Select */.l,{style:{minWidth:'200px'},label:"Rows per page",selectedKeys:[table.getState().pagination.pageSize],onSelectionChange:function onSelectionChange(keys){return table.setPageSize(Number(Array.from(keys)[0]));},options:[10,20,30,40,50].map(function(pageSize){return{id:pageSize,name:"Show "+pageSize};})})]})]});};
;// ./apps/docs/src/components/examples/tanstack-table/index.ts

;// ./apps/docs/src/components/examples/index.ts

;// ./apps/docs/docs/dev/tanstack-table.mdx


const frontMatter = {
	title: 'Tanstack Table',
	description: 'Implementation av Tanstack Table',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Tanstack Table';

const assets = {

};




const toc = [{
  "value": "När du ska använda Tanstack Table",
  "id": "när-du-ska-använda-tanstack-table",
  "level": 2
}, {
  "value": "Komma igång",
  "id": "komma-igång",
  "level": 2
}, {
  "value": "Användbara länkar",
  "id": "användbara-länkar",
  "level": 2
}, {
  "value": "Exempel",
  "id": "exempel",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "tanstack-table",
        children: "Tanstack Table"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "När du behöver mer avancerade funktioner för tabeller rekommenderar vi att du använder Tanstack Table. Det är ett\nkraftfullt \"headless\"-verktyg, vilket innebär att det inte renderar någon markup eller stilar åt dig. Detta ger dig\nfull kontroll över tabellens utseende, och vi har tillhandahållit stilar för att säkerställa att den matchar Midas utseende och känsla."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Stilarna för Tanstack Table är just nu i en tidig version och är ett arbete som pågår. Tanstack Table är inte en del av kärnbiblioteket i Midas, vilket innebär att supporten är begränsad. Vi är öppna för kodbidrag till vårt ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/midas-ds/midas",
          children: "repo"
        }), " och tar gärna emot förslag på stilar som saknas när du implementerar Tanstack Table."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "när-du-ska-använda-tanstack-table",
      children: "När du ska använda Tanstack Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använd Tanstack Table när du behöver funktioner som:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Paginering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sortering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Filtrering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Radmarkering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kolumnordning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Och mycket mer!"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För enklare tabeller som inte kräver denna funktionalitet kan du använda den grundläggande Midas-tabellkomponenten."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "komma-igång",
      children: "Komma igång"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För att använda Tanstack Table med Midas-stilar måste du först installera de nödvändiga beroendena:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @tanstack/react-table\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Importera sedan Midas-stilarna för tabellen:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "@import '@midas-ds/table-styles/tanstack-table.css';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "table"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<table className={'table'}>\n...\n</table>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "användbara-länkar",
      children: "Användbara länkar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Här är några resurser som hjälper dig att komma igång med TanStack Table:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://tanstack.com/table/v8/docs/introduction",
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "TanStack Table v8 Docs"
          })
        }), ": Den officiella dokumentationen är den bästa platsen att lära sig om alla funktioner och hur man använder dem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://tanstack.com/table/v8/docs/framework/react/examples/basic",
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Exempel"
          })
        }), ": En stor samling exempel som visar hur man implementerar olika funktioner."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exempel",
      children: "Exempel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Här är ett exempel på en paginerad tabell byggd med Tanstack Table och stylad med Midas\n(exempel taget officiella dokumentationen):"
    }), "\n", (0,jsx_runtime.jsx)(PaginationExample, {}), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"Table.tsx\"",
        children: "import React from 'react'\nimport '@midas-ds/table-styles/tanstack-table.css'\n\nimport {\n  type ColumnDef,\n  flexRender,\n  getCoreRowModel,\n  getPaginationRowModel,\n  useReactTable,\n} from '@tanstack/react-table'\nimport { makeData } from './makeData'\nimport { Button, TextField, Select } from '@midas-ds/components'\nimport {\n  ChevronLeft,\n  ChevronsLeft,\n  ChevronRight,\n  ChevronsRight,\n} from 'lucide-react'\n\ntype Person = {\n  firstName: string\n  lastName: string\n  age: number\n  visits: number\n  status: string\n  progress: number\n}\n\nconst defaultColumns: ColumnDef<Person>[] = [\n  {\n    accessorKey: 'firstName',\n    header: () => 'First Name',\n    cell: info => info.getValue(),\n    footer: props => props.column.id,\n  },\n  {\n    accessorFn: row => row.lastName,\n    id: 'lastName',\n    cell: info => info.getValue(),\n    header: () => <span>Last Name</span>,\n    footer: props => props.column.id,\n  },\n  {\n    accessorKey: 'age',\n    header: () => 'Age',\n    footer: props => props.column.id,\n  },\n  {\n    accessorKey: 'visits',\n    header: () => <span>Visits</span>,\n    footer: props => props.column.id,\n  },\n  {\n    accessorKey: 'status',\n    header: 'Status',\n    footer: props => props.column.id,\n  },\n  {\n    accessorKey: 'progress',\n    header: 'Profile Progress',\n    footer: props => props.column.id,\n  },\n]\n\nexport const PaginationExample = () => {\n  const [data] = React.useState(() => makeData(1000))\n  const [columns] = React.useState<typeof defaultColumns>(() => [\n    ...defaultColumns,\n  ])\n\n  // Create the table and pass your options\n  const table = useReactTable({\n    data,\n    columns,\n    getCoreRowModel: getCoreRowModel(),\n    getPaginationRowModel: getPaginationRowModel(),\n  })\n\n  // Manage your own state\n  const [state, setState] = React.useState(table.initialState)\n\n  // Override the state managers for the table to your own\n  table.setOptions(prev => ({\n    ...prev,\n    state,\n    onStateChange: setState,\n    // These are just table options, so if things\n    // need to change based on your state, you can\n    // derive them here\n  }))\n\n  return (\n    <div>\n      <table className={'table'}>\n        <thead>\n          {table.getHeaderGroups().map(headerGroup => (\n            <tr key={headerGroup.id}>\n              {headerGroup.headers.map(header => (\n                <th\n                  key={header.id}\n                  colSpan={header.colSpan}\n                >\n                  {header.isPlaceholder\n                    ? null\n                    : flexRender(\n                        header.column.columnDef.header,\n                        header.getContext(),\n                      )}\n                </th>\n              ))}\n            </tr>\n          ))}\n        </thead>\n        <tbody>\n          {table.getRowModel().rows.map(row => (\n            <tr key={row.id}>\n              {row.getVisibleCells().map(cell => (\n                <td key={cell.id}>\n                  {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                </td>\n              ))}\n            </tr>\n          ))}\n        </tbody>\n        <tfoot>\n          {table.getFooterGroups().map(footerGroup => (\n            <tr key={footerGroup.id}>\n              {footerGroup.headers.map(header => (\n                <th\n                  key={header.id}\n                  colSpan={header.colSpan}\n                >\n                  {header.isPlaceholder\n                    ? null\n                    : flexRender(\n                        header.column.columnDef.footer,\n                        header.getContext(),\n                      )}\n                </th>\n              ))}\n            </tr>\n          ))}\n        </tfoot>\n      </table>\n      <div />\n      <div style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0' }}>\n          <Button\n            onPress={() => table.setPageIndex(0)}\n            isDisabled={!table.getCanPreviousPage()}\n          >\n            <ChevronsLeft />\n          </Button>\n          <Button\n            onPress={() => table.previousPage()}\n            isDisabled={!table.getCanPreviousPage()}\n          >\n            <ChevronLeft />\n          </Button>\n          <Button\n            onPress={() => table.nextPage()}\n            isDisabled={!table.getCanNextPage()}\n          >\n            <ChevronRight />\n          </Button>\n          <Button\n            onPress={() => table.setPageIndex(table.getPageCount() - 1)}\n            isDisabled={!table.getCanNextPage()}\n          >\n            <ChevronsRight />\n          </Button>\n      </div>\n      <div style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0' }}>\n          <TextField\n            value={`${table.getState().pagination.pageIndex + 1} of ${table.getPageCount()}`}\n            isReadOnly\n            label={'Page'}\n          />\n          <TextField\n            label={'Go to page'}\n            type='number'\n            min={1}\n            max={table.getPageCount()}\n            value={(table.getState().pagination.pageIndex + 1).toString()}\n            onChange={e => {\n              const page = e ? Number(e) - 1 : 0\n              table.setPageIndex(page)\n            }}\n          />\n        <Select\n          style={{minWidth: '200px'}}\n          label='Rows per page'\n          selectedKeys={[table.getState().pagination.pageSize]}\n          onSelectionChange={keys =>\n            table.setPageSize(Number(Array.from(keys)[0]))\n          }\n          options={[10, 20, 30, 40, 50].map(pageSize => ({\n            id: pageSize,\n            name: `Show ${pageSize}`,\n          }))}\n        ></Select>\n      </div>\n    </div>\n  )\n}\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        metastring: "title=makeData.ts",
        children: "import { faker } from '@faker-js/faker'\n\nexport type Person = {\n  firstName: string\n  lastName: string\n  age: number\n  visits: number\n  progress: number\n  status: 'relationship' | 'complicated' | 'single'\n  subRows?: Person[]\n}\n\nconst range = (len: number) => {\n  const arr: number[] = []\n  for (let i = 0; i < len; i++) {\n    arr.push(i)\n  }\n  return arr\n}\n\nconst newPerson = (): Person => {\n  return {\n    firstName: faker.person.firstName(),\n    lastName: faker.person.lastName(),\n    age: faker.number.int(40),\n    visits: faker.number.int(1000),\n    progress: faker.number.int(100),\n    status: faker.helpers.shuffle<Person['status']>([\n      'relationship',\n      'complicated',\n      'single',\n    ])[0]!,\n  }\n}\n\nexport function makeData(...lens: number[]) {\n  const makeDataLevel = (depth = 0): Person[] => {\n    const len = lens[depth]!\n    return range(len).map((d): Person => {\n      return {\n        ...newPerson(),\n        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,\n      }\n    })\n  }\n\n  return makeDataLevel()\n}\n\n"
      })
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

/***/ 67603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useObserveElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * Observe an elements size change on resize
 */function useObserveElement(element,options){if(options===void 0){options={};}var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({width:0,height:0}),size=_useState[0],setSize=_useState[1];var delay=options.delay===undefined?500:options.delay;var includePadding=!!options.includePadding;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(!element)return;var resizeObserver=new ResizeObserver(debounce(function(_ref){var entry=_ref[0];var _ref2=includePadding?entry.borderBoxSize[0]:entry.contentBoxSize[0],inlineSize=_ref2.inlineSize,blockSize=_ref2.blockSize;setSize({width:inlineSize,height:blockSize});},delay));resizeObserver.observe(element);return function(){resizeObserver.disconnect();};},[delay,element,includePadding]);return size;}function debounce(callback,delay){var timeout;return function(entries,observer){clearTimeout(timeout);timeout=setTimeout(function(){callback(entries,observer);},delay);};}

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

/***/ 73807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ ListBoxSection)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79255);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83181);
/* harmony import */ var _ListBox_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","name"];var ListBoxSection=function ListBoxSection(_ref){var children=_ref.children,name=_ref.name,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .ListBoxSection */ .rd,Object.assign({},rest,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_5__/* .Header */ .Y,{className:_ListBox_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.listBoxSectionHeading,children:name}),children]}));};

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
/* harmony default export */ const Tag_module = ({"button":"button_Loby","success":"success_GxEq","warning":"warning_MXCT","info":"info_xrqn","important":"important_QbWH","tag":"tag_WAeO","dismissable":"dismissable_Tfml","tagText":"tagText_f_lx","tagList":"tagList_sxPC"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TagGroup.mjs + 40 modules
var dist_TagGroup = __webpack_require__(99628);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/tag/Tag.tsx
var _excluded=["children"],_excluded2=["children","dismissable","className","type"];var TagGroup=function TagGroup(_ref){var children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagGroup */.CR,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagList */.LY,{className:Tag_module.tagList,children:children})}));};var Tag=function Tag(_ref2){var children=_ref2.children,dismissable=_ref2.dismissable,className=_ref2.className,type=_ref2.type,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_TagGroup/* Tag */.vw,Object.assign({className:(0,clsx/* default */.A)(Tag_module.tag,dismissable&&Tag_module.dismissable,type==='success'&&Tag_module.success,type==='info'&&Tag_module.info,type==='important'&&Tag_module.important,type==='warning'&&Tag_module.warning,className)},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Tag_module.tagText,children:children}),dismissable&&/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon",size:"medium",className:Tag_module.button,slot:"remove",children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20})})]}));};

/***/ }),

/***/ 86707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"button":"button_RcXK","secondary":"secondary_h5I_","tertiary":"tertiary_xq7E","iconBtn":"iconBtn__8qK","medium":"medium_uqO9","danger":"danger_iFp6","iconRight":"iconRight_iW1e","fullwidth":"fullwidth_WWNT","primary":"primary_JNNk"});

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
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79255);
/* harmony import */ var _ListBox_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","className"];var ListBoxItem=function ListBoxItem(_ref){var children=_ref.children,className=_ref.className,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .ListBoxItem */ .nh,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_ListBox_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.listBoxItem,className)},rest,{children:children}));};

/***/ })

}]);