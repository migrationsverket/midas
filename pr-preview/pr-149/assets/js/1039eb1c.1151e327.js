"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[3293],{

/***/ 13214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_15_mdx_9c8_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_15_mdx_9c8_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27648);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28453);
/* harmony import */ var _site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29511);
/* harmony import */ var _midas_ds_multi_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21464);
/* harmony import */ var _midas_ds_link_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9687);
/* harmony import */ var _midas_ds_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93294);
/* harmony import */ var _midas_ds_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85560);
/* harmony import */ var _midas_ds_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32976);


const frontMatter = {
	title: 'Release 15',
	description: '.',
	slug: 'release-15',
	tags: [
		'releaser'
	]
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [],
};











const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_8__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
    children: "Nedan är en sammanfattning av nyheterna i release 15."
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_8__/* .useMDXComponents */ .R)(),
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

/***/ 61813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* reexport */ Checkbox),
  $: () => (/* reexport */ CheckboxGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Checkbox.mjs + 7 modules
var dist_Checkbox = __webpack_require__(92466);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Group.mjs
var Group = __webpack_require__(63899);
;// ./packages/checkbox/src/lib/Checkbox.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Checkbox_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","black":"#000000","primaryBackground":"#143c50","blue80":"#5897b8","blue130":"#25607f","signalRed10":"#ffdfdf","signalRed100":"#e62323","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","signalRed130":"#b31b1b","white":"#ffffff","gray10":"#f2f2f2","gray40":"#cccccc","gray100":"#808080","gray50":"#bfbfbf","gray20":"#e6e6e6","regularWeight":"400","mediumWeight":"500","smBreakpoint":"(max-width: 767px)","borderSecondary":"#b3b3b3","wrap":"wrap_gmzk","checkboxInner":"checkboxInner_QnDn","checkbox":"checkbox_Uv4H","checkboxGroup":"checkboxGroup_uby9"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/checkbox/src/lib/Checkbox.tsx
'use client';var _excluded=["children"];var Checkbox=function Checkbox(_ref){var _children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Checkbox/* Checkbox */.Sc,Object.assign({className:(0,clsx/* default */.A)(Checkbox_module.checkbox,props.className)},props,{children:function children(_ref2){var isIndeterminate=_ref2.isIndeterminate;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Checkbox_module.checkboxInner,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:16,height:16,viewBox:"0 0 18 18","aria-hidden":"true",children:isIndeterminate?/*#__PURE__*/(0,jsx_runtime.jsx)("rect",{x:4,y:8,width:10,height:2}):/*#__PURE__*/(0,jsx_runtime.jsx)("polyline",{points:"3,9 7,13 15,4"})})}),_children]});}}));};
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
;// ./packages/checkbox/src/lib/CheckboxGroup.tsx
'use client';var CheckboxGroup_excluded=["label","description","errorMessage","showSelectAll","children"];var CheckboxGroup=function CheckboxGroup(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,showSelectAll=_ref.showSelectAll,children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,CheckboxGroup_excluded);var _React$useState=react.useState(),isAllSelected=_React$useState[0],setIsAllSelected=_React$useState[1];var ToogleAll=function ToogleAll(){// Get the current state of the checkbox group
var state=react.useContext(dist_Checkbox/* CheckboxGroupStateContext */.pf);// Retrieve all childern
var childValues=react.Children.toArray(children).filter(react.isValidElement).map(function(child){return child.props.value;});// Toogle all values
var toggleAll=function toggleAll(){if(isAllSelected!=='all'){setIsAllSelected('all');return state.setValue(['toggleAll'].concat(childValues));}setIsAllSelected('none');return state.setValue([]);};//listen and change the select all accordingly
react.useEffect(function(){var amountOfChildren=childValues.length;var totalAmount=childValues.length+1;var currentAmount=state.value.length;if(currentAmount===0)setIsAllSelected('none');if(currentAmount>0&&currentAmount<amountOfChildren)setIsAllSelected('some');if(currentAmount!==totalAmount)state.removeValue('toggleAll');if(currentAmount===amountOfChildren&&!state.value.includes('toggleAll')){state.addValue('toggleAll');setIsAllSelected('all');}// eslint-disable-next-line react-hooks/exhaustive-deps
},[childValues.length,state.value]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox,{value:"toggleAll",isSelected:isAllSelected==='all',isIndeterminate:isAllSelected==='some',onChange:function onChange(){return toggleAll();},children:"V\xE4lj alla"});};return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Checkbox/* CheckboxGroup */.$Q,Object.assign({className:Checkbox_module.checkboxGroup},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(src/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Group/* Group */.Y,{className:Checkbox_module.wrap,children:[showSelectAll&&/*#__PURE__*/(0,jsx_runtime.jsx)(ToogleAll,{}),children]})})}));};
;// ./packages/checkbox/src/lib/index.ts

;// ./packages/checkbox/src/index.ts


/***/ }),

/***/ 9687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* reexport */ LinkButton)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var Link = __webpack_require__(73099);
;// ./packages/link-button/src/lib/LinkButton.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const LinkButton_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","blue150":"#143c50","blue130":"#25607f","blue90":"#4289ad","display":"\"Inter\", sans-serif","desktopSize":"1rem","mediumWeight":"500","white":"#ffffff","gray50":"#bfbfbf","gray10":"#f2f2f2","gray20":"#e6e6e6","black":"#000000","medium":"undefined","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","smBreakpoint":"(max-width: 767px)","signalRed100":"#e62323","signalRed130":"#b31b1b","signalRed150":"#801313","linkButton":"linkButton_YIrq","secondary":"secondary_fWmT","tertiary":"tertiary_mRIr","danger":"danger_VEbs","iconLeft":"iconLeft_vyt7","icon":"icon_d8GV","fullwidth":"fullwidth_EeuX","button":"button_rUVC"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(87677);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/link-button/src/lib/LinkButton.tsx
'use client';var _excluded=["children","variant","fullwidth","iconPlacement"];/**
 * A link to be used when a user expects a button but web technologies force us to use a a-tag
 * */var LinkButton=function LinkButton(_ref){var children=_ref.children,variant=_ref.variant,fullwidth=_ref.fullwidth,iconPlacement=_ref.iconPlacement,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* Link */.N,Object.assign({className:(0,clsx/* default */.A)(LinkButton_module.linkButton,variant==='primary'&&LinkButton_module.primary,variant==='secondary'&&LinkButton_module.secondary,variant==='tertiary'&&LinkButton_module.tertiary,variant==='danger'&&LinkButton_module.danger,fullwidth&&LinkButton_module.fullwidth,iconPlacement==='left'&&LinkButton_module.iconLeft,rest.className)},rest,{children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{size:20,className:LinkButton_module.icon})]}));};
;// ./packages/link-button/src/lib/index.ts

;// ./packages/link-button/src/index.ts


/***/ }),

/***/ 21464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* reexport */ MultiSelect)
});

;// ./packages/multi-select/src/lib/MultiSelect.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const MultiSelect_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","black":"#000000","signalRed130":"#b31b1b","smBreakpoint":"(max-width: 767px)","gray50":"#bfbfbf","gray20":"#e6e6e6","backgroundSecondary":"#f2f2f2","button":"button_ICtj","multiSelect":"multiSelect_Eode","popover":"popover_jYDN","icon":"icon_D7C5","listBoxItem":"listBoxItem_c3_5"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/utils.mjs
var utils = __webpack_require__(5933);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs + 1 modules
var Button = __webpack_require__(44080);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 5 modules
var Popover = __webpack_require__(8119);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/GridList.mjs + 1 modules
var GridList = __webpack_require__(65379);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
// EXTERNAL MODULE: ./packages/checkbox/src/index.ts + 4 modules
var checkbox_src = __webpack_require__(61813);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/tag/src/lib/Tag.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tag_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","black":"#000000","signalRed130":"#b31b1b","smBreakpoint":"(max-width: 767px)","gray50":"#bfbfbf","gray30":"#d9d9d9","gray20":"#e6e6e6","gray10":"#f2f2f2","backgroundSecondary":"#f2f2f2","button":"button_KL5r","tag":"tag_QfCn","dismissable":"dismissable_Ta3F","tagText":"tagText_tTSG","tagList":"tagList_CRsJ"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TagGroup.mjs + 37 modules
var dist_TagGroup = __webpack_require__(2790);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 3 modules
var button_src = __webpack_require__(81706);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/tag/src/lib/Tag.tsx
var _excluded=["children"],_excluded2=["children","dismissable"];var TagGroup=function TagGroup(_ref){var children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagGroup */.CR,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TagGroup/* TagList */.LY,{className:Tag_module.tagList,children:children})}));};var Tag=function Tag(_ref2){var children=_ref2.children,dismissable=_ref2.dismissable,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_TagGroup/* Tag */.vw,Object.assign({className:(0,clsx/* default */.A)(Tag_module.tag,dismissable&&Tag_module.dismissable)},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Tag_module.tagText,children:children}),dismissable&&/*#__PURE__*/(0,jsx_runtime.jsx)(button_src/* Button */.$,{variant:"icon",size:"small",className:Tag_module.button,slot:"remove",children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20})})]}));};
;// ./packages/tag/src/index.ts

// EXTERNAL MODULE: ./node_modules/@react-stately/data/dist/useListData.mjs
var useListData = __webpack_require__(7424);
;// ./packages/multi-select/src/lib/MultiSelect.tsx
'use client';var MultiSelect=function MultiSelect(_ref){var label=_ref.label,description=_ref.description,items=_ref.items,onSelectionChange=_ref.onSelectionChange,selectedKeys=_ref.selectedKeys,defaultSelectedKeys=_ref.defaultSelectedKeys,isDisabled=_ref.isDisabled,isInvalid=_ref.isInvalid,errorMessage=_ref.errorMessage;var triggerRef=react.useRef(null);var _React$useState=react.useState(undefined),popoverWidth=_React$useState[0],setPopoverWidth=_React$useState[1];var list=(0,useListData/* useListData */.u)({initialItems:items,initialSelectedKeys:defaultSelectedKeys});react.useEffect(function(){var updatePopoverWidth=function updatePopoverWidth(){if(triggerRef.current){setPopoverWidth(triggerRef.current.offsetWidth-2);}};updatePopoverWidth();window.addEventListener('resize',updatePopoverWidth);return function(){window.removeEventListener('resize',updatePopoverWidth);};},[]);react.useEffect(function(){if(onSelectionChange)onSelectionChange(new Set(list.selectedKeys));},[list.selectedKeys,onSelectionChange]);react.useEffect(function(){if(selectedKeys)list.setSelectedKeys(new Set(selectedKeys));// eslint-disable-next-line react-hooks/exhaustive-deps
},[selectedKeys]);var tagList=list.selectedKeys==='all'?new Set(list.items.map(function(item){return item.id;})):list.selectedKeys;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:MultiSelect_module.multiSelect,"data-disabled":isDisabled,"data-invalid":isInvalid,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(utils/* Provider */.Kq,{values:[[// we should maybe add more here
// [LabelContext, {...labelProps, ref: labelRef}],
// [InputContext, {...inputProps, ref: inputOrTextAreaRef}],
// [TextAreaContext, {...inputProps, ref: inputOrTextAreaRef}],
// [TextContext, {
//   slots: {
//     description: descriptionProps,
//     errorMessage: errorMessageProps
//   }
// }],
FieldError/* FieldErrorContext */.C,{isInvalid:isInvalid?isInvalid:false,validationErrors:[],validationDetails:{customError:isInvalid?isInvalid:false,badInput:false,patternMismatch:false,rangeOverflow:false,rangeUnderflow:false,stepMismatch:false,tooLong:false,tooShort:false,typeMismatch:false,valid:false,valueMissing:false}}]],children:[/*#__PURE__*/(0,jsx_runtime.jsx)(src/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* Button */.$,{className:MultiSelect_module.button,ref:triggerRef,isDisabled:isDisabled,children:["V\xE4lj",/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:MultiSelect_module.icon,"aria-hidden":"true",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{className:MultiSelect_module.popover,style:{width:popoverWidth},offset:0,children:/*#__PURE__*/(0,jsx_runtime.jsx)(GridList/* GridList */.FK,{"aria-label":label,selectionMode:"multiple",selectedKeys:list.selectedKeys,onSelectionChange:list.setSelectedKeys,children:list.items.map(function(item){return/*#__PURE__*/(0,jsx_runtime.jsxs)(GridList/* GridListItem */.KP,{id:item.id,textValue:item.name,className:MultiSelect_module.listBoxItem,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(checkbox_src/* Checkbox */.S,{slot:"selection"}),item.name]},item.id);})})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(TagGroup,{"aria-label":"Valda",onRemove:function onRemove(keys){var newSelectedKeys=new Set([].concat(list.selectedKeys).filter(function(key){return!keys.has(key);}));list.setSelectedKeys(newSelectedKeys);},children:Array.from(tagList).map(function(key){var item=list.getItem(key);return/*#__PURE__*/(0,jsx_runtime.jsx)(Tag,{id:item.id,textValue:item.name,isDisabled:isDisabled,dismissable:true,children:item.name},item.id);})})]})});};/* harmony default export */ const lib_MultiSelect = ((/* unused pure expression or super */ null && (MultiSelect)));
;// ./packages/multi-select/src/index.ts


/***/ }),

/***/ 42619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  oi: () => (/* reexport */ InputWrapper),
  A_: () => (/* reexport */ TextField),
  Ql: () => (/* reexport */ TextField_module)
});

// UNUSED EXPORTS: ssnRegEx

;// ./packages/textfield/src/lib/TextField.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TextField_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","signalRed10":"#ffdfdf","gray10":"#f2f2f2","gray20":"#e6e6e6","gray50":"#bfbfbf","black":"#000000","signalRed100":"#e62323","mediumWeight":"500","regularWeight":"400","inputText":"#1f1f1f","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","inputField":"inputField_kJaH","inputWrapper":"inputWrapper_RfiT","label":"label_Pxyb","text":"text_CvV8","fieldError":"fieldError_kz46","passwordText":"passwordText_Gtww","input":"input_B57n","wrap":"wrap_g1RZ","passwordButton":"passwordButton_bCY3"});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/TextField.mjs
var dist_TextField = __webpack_require__(32945);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 3 modules
var src = __webpack_require__(81706);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/textfield/src/lib/TextField.tsx
'use client';var _excluded=["label","description","errorMessage","validationType"];var TextField=function TextField(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,validationType=_ref.validationType,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _React$useState=react.useState(''),input=_React$useState[0],setInput=_React$useState[1];var _React$useState2=react.useState(true),isValid=_React$useState2[0],setIsValid=_React$useState2[1];var validateInput=function validateInput(value){if(validationType===undefined)return true;if(validationType==='ssn')setIsValid(ssnRegEx.test(value));if(validationType instanceof RegExp)setIsValid(new RegExp(validationType).test(value));};var handleInputBlur=function handleInputBlur(e){var value=e.target.value;validateInput(value);};var handleInputChange=function handleInputChange(e){setInput(e.target.value);};return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TextField/* TextField */.A,Object.assign({className:TextField_module.inputField,isInvalid:validationType!==undefined?!isValid:props.isInvalid},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(InputWrapper,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,{type:props.type,className:TextField_module.input,onChange:handleInputChange,onBlur:handleInputBlur}),/*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField,{type:props.type,input:input})]})})}));};var PasswordField=function PasswordField(_ref2){var type=_ref2.type,input=_ref2.input;var _React$useState3=react.useState(false),showPassword=_React$useState3[0],setShowPassword=_React$useState3[1];if(type==='password')return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showPassword&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module.passwordText,children:input}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$,{variant:"tertiary",onPress:function onPress(){return setShowPassword(!showPassword);},className:TextField_module.passwordButton,children:showPassword?'Dölj':'Visa'})]});return null;};var InputWrapper=function InputWrapper(_ref3){var label=_ref3.label,description=_ref3.description,errorMessage=_ref3.errorMessage,children=_ref3.children;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module.inputWrapper,children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{className:TextField_module.label,children:label}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module.text,children:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{className:TextField_module.fieldError,children:errorMessage}),children]});};var ssnRegEx=new RegExp('^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$');
;// ./packages/textfield/src/lib/index.ts

;// ./packages/textfield/src/index.ts


/***/ }),

/***/ 32976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  as: () => (/* reexport */ baseColors),
  w4: () => (/* reexport */ theme)
});

// UNUSED EXPORTS: accessibility, borderRadius, borderWidths, boxShadow, breakpoints, buttonColors, font, fontSizes, fontWeights, inputColor, midasColors, midasTransitions, signalColors

// NAMESPACE OBJECT: ./packages/theme/src/lib/tokens.ts
var tokens_namespaceObject = {};
__webpack_require__.r(tokens_namespaceObject);
__webpack_require__.d(tokens_namespaceObject, {
  accessibility: () => (accessibility),
  baseColors: () => (baseColors),
  borderRadius: () => (borderRadius),
  borderWidths: () => (borderWidths),
  boxShadow: () => (boxShadow),
  breakpoints: () => (breakpoints),
  buttonColors: () => (buttonColors),
  font: () => (font),
  fontSizes: () => (fontSizes),
  fontWeights: () => (fontWeights),
  inputColor: () => (inputColor),
  midasColors: () => (midasColors),
  midasTransitions: () => (midasTransitions),
  signalColors: () => (signalColors)
});

;// ./packages/theme/src/lib/tokens.ts
var baseColors={white:'#ffffff',black:'#000000',gray10:'#f2f2f2',gray20:'#e6e6e6',gray30:'#d9d9d9',gray40:'#cccccc',gray50:'#bfbfbf',gray60:'#b3b3b3',gray70:'#a6a6a6',gray80:'#999999',gray90:'#8c8c8c',gray100:'#808080',gray130:'#5d5d5d',gray150:'#1f1f1f',red10:'#f7e9e7',red20:'#f1d4d1',red30:'#e9beba',red40:'#e2a8a4',red50:'#d9918e',red60:'#d37a7a',red70:'#cc6467',red80:'#c54c56',red90:'#be3345',red100:'#b90835',red130:'#8b1327',red150:'#641018',blue10:'#eaf2f6',blue20:'#d5e5ed',blue30:'#c0d7e4',blue40:'#abcbdb',blue50:'#94bcd1',blue60:'#82b0c9',blue70:'#6ca3c0',blue80:'#5897b8',blue90:'#4289ad',blue100:'#2e7ca5',blue130:'#25607f',blue150:'#143c50'};var buttonColors={outline:'#303030',primaryBackground:baseColors['blue150'],primaryText:'#303030',primaryHover:baseColors['blue130'],primaryFocus:baseColors['black'],primaryActive:'#4289ae',secondaryBackground:baseColors['gray130'],secondaryText:baseColors['white'],secondaryHover:'#303030',secondaryActive:'#303030'};var inputColor={inputText:baseColors['gray150']};var signalColors={signalGreen10:'#d5f2d9',signalGreen100:'#008d3c',signalBlue10:baseColors['blue10'],signalBlue100:'#0066cc',signalYellow10:'#fff8e1',signalYellow100:'#f1c21b',signalRed10:'#ffdfdf',signalRed100:'#e62323',signalRed130:'#b31b1b',signalRed150:'#801313'};var borderRadius={sRadius:' 0.125rem',// 2px
mRadius:' 0.25rem'// 4px
};var borderWidths={xsWidth:' 0.0625rem',// 1px
sWidth:' 0.125rem',// 2px
mWidth:' 0.25rem'// 4px
};var fontWeights={lightWeight:'300',regularWeight:'400',mediumWeight:'500',semiBoldWeight:'600',boldWeight:'700',blackWeight:'900'};var fontSizes={desktopSize:'1rem',mobileSize:'1rem',largeSize:'1.5rem',inputNormalSize:'0.875rem',inputMessageSize:'0.75rem',inputLabelSize:'1rem',inputDescriptionSize:'0.875rem'};var midasColors={logoPrimary:baseColors['red100'],logoSecondary:baseColors['white'],textPrimary:baseColors['gray150'],textSecondary:baseColors['white'],textTertiary:baseColors['red100'],link:baseColors['blue130'],linkVisited:'#663366',backgroundPrimary:baseColors['white'],backgroundSecondary:baseColors['gray10'],backgroundFooter1:baseColors['red100'],backgroundFooter2:baseColors['red130'],backgroundInfo:baseColors['blue10'],backgroundImportant:signalColors['signalYellow10'],borderPrimary:baseColors['black'],borderSecondary:baseColors['gray60'],borderFocusOuter:baseColors['black'],borderFocusInner:baseColors['white'],iconPrimary:baseColors['black'],iconInverted:baseColors['white']};var midasTransitions={slowTransition:'500ms',normalTransition:'300ms',fastTransition:'250ms'};var breakpoints={smBreakpoint:'(max-width: 767px)',mdBreakpoint:'(min-width: 768px)',lgBreakpoint:'(min-width: 1200px)',xlBreakpoint:'(min-width: 1440px)'};var accessibility={forcedColorsMode:'(forced-colors: active)',prefersReducedMotion:'(prefers-reduced-motion: reduced)'};var font={display:'"Inter", sans-serif'};var boxShadow={focus:'0 0 0 2px white, 0 0 0 4px black'};
;// ./packages/theme/src/lib/index.ts
var theme=Object.assign({},tokens_namespaceObject);
;// ./packages/theme/src/index.ts


/***/ }),

/***/ 87677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ChevronRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const ChevronRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);


//# sourceMappingURL=chevron-right.js.map


/***/ }),

/***/ 27648:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/pr-preview/pr-149/blog/release-15","source":"@site/blog/release15.mdx","title":"Release 15","description":".","date":"2024-11-15T07:33:50.000Z","tags":[{"inline":true,"label":"releaser","permalink":"/pr-preview/pr-149/blog/tags/releaser"}],"readingTime":1.785,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Release 15","description":".","slug":"release-15","tags":["releaser"]},"unlisted":false,"nextItem":{"title":"Release 14","permalink":"/pr-preview/pr-149/blog/release-14"}}');

/***/ })

}]);