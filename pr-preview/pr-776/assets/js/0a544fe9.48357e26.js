"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2989,8401],{

/***/ 6429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ theme_MDXComponents)
});

// NAMESPACE OBJECT: ./apps/docs/src/components/mvdsExports.ts
var mvdsExports_namespaceObject = {};
__webpack_require__.r(mvdsExports_namespaceObject);
__webpack_require__.d(mvdsExports_namespaceObject, {
  Accordion: () => (Accordion/* Accordion */.n),
  AccordionItem: () => (AccordionItem/* AccordionItem */.A),
  Breadcrumbs: () => (Breadcrumbs/* Breadcrumbs */.B),
  Button: () => (Button/* Button */.$),
  Card: () => (Card/* Card */.Zp),
  Checkbox: () => (Checkbox/* Checkbox */.S),
  CheckboxGroup: () => (CheckboxGroup/* CheckboxGroup */.$),
  DialogTrigger: () => (Dialog/* DialogTrigger */.zM),
  Dropdown: () => (Dropdown/* Dropdown */.m),
  DropdownItem: () => (Dropdown/* DropdownItem */.t),
  Grid: () => (Grid/* Grid */.x),
  GridItem: () => (GridItem/* GridItem */.E),
  InfoBanner: () => (InfoBanner/* InfoBanner */.z),
  Link: () => (link_Link/* Link */.N),
  LinkButton: () => (LinkButton/* LinkButton */.z),
  Logo: () => (Logo/* Logo */.g),
  Popover: () => (Popover/* Popover */.A),
  Radio: () => (Radio/* Radio */.s),
  RadioGroup: () => (Radio/* RadioGroup */.z),
  SearchField: () => (SearchField/* SearchField */.L),
  Select: () => (Select/* Select */.l),
  Spinner: () => (Spinner/* Spinner */.y),
  Tabs: () => (Tabs/* Tabs */.t),
  TextArea: () => (TextArea/* TextArea */.f),
  TextField: () => (TextField/* TextField */.A),
  Tooltip: () => (Tooltip/* Tooltip */.m),
  theme: () => (theme/* theme */.w4)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js + 28 modules
var CodeBlock = __webpack_require__(21028);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeInline/index.js
var CodeInline = __webpack_require__(13230);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/theme/MDXComponents/Code.js
function shouldBeInline(props){return(// empty code blocks have no props.children,
// see https://github.com/facebook/docusaurus/pull/9704
typeof props.children!=='undefined'&&react.Children.toArray(props.children).every(function(el){return typeof el==='string'&&!el.includes('\n');}));}function MDXCode(props){return shouldBeInline(props)?/*#__PURE__*/(0,jsx_runtime.jsx)(CodeInline/* default */.A,Object.assign({},props)):/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlock/* default */.A,Object.assign({},props));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28774);
;// ./apps/docs/src/theme/MDXComponents/A.js
function MDXA(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,Object.assign({},props));}
;// ./apps/docs/src/theme/MDXComponents/Pre.js
function MDXPre(props){// With MDX 2, this element is only used for fenced code blocks
// It always receives a MDXComponents/Code as children
// eslint-disable-next-line
return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.children});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 3 modules
var Details = __webpack_require__(41622);
;// ./apps/docs/src/theme/MDXComponents/Details.js
function MDXDetails(props){var items=react.Children.toArray(props.children);// Split summary item from the rest to pass it as a separate prop to the
// Details theme component
var summary=items.find(function(item){return/*#__PURE__*/react.isValidElement(item)&&item.type==='summary';});var children=/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:items.filter(function(item){return item!==summary;})});return/*#__PURE__*/(0,jsx_runtime.jsx)(Details/* default */.A,Object.assign({},props,{summary:summary,children:children}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(51107);
;// ./apps/docs/src/theme/MDXComponents/Heading.js
function MDXHeading(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,Object.assign({},props));}
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./apps/docs/src/theme/MDXComponents/Ul/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"containsTaskList":"containsTaskList_kJf0"});
;// ./apps/docs/src/theme/MDXComponents/Ul/index.js
function transformUlClassName(className){// Fix https://github.com/facebook/docusaurus/issues/9098
if(typeof className==='undefined'){return undefined;}return (0,clsx/* default */.A)(className,// This class is set globally by GitHub/MDX. We keep the global class, and
// add another class to get a task list without the default ul styling
// See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
(className==null?void 0:className.includes('contains-task-list'))&&styles_module.containsTaskList);}function MDXUl(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",Object.assign({},props,{className:transformUlClassName(props.className)}));}
;// ./apps/docs/src/theme/MDXComponents/Img/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Img_styles_module = ({"img":"img_DqHw"});
;// ./apps/docs/src/theme/MDXComponents/Img/index.js
function transformImgClassName(className){return (0,clsx/* default */.A)(className,Img_styles_module.img);}function MDXImg(props){return(/*#__PURE__*/// eslint-disable-next-line jsx-a11y/alt-text
(0,jsx_runtime.jsx)("img",Object.assign({loading:"lazy"},props,{className:transformImgClassName(props.className)})));}
// EXTERNAL MODULE: ./apps/docs/src/theme/Admonition.js
var Admonition = __webpack_require__(25076);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-mermaid/lib/theme/Mermaid/index.js + 8 modules
var Mermaid = __webpack_require__(66406);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/accordion/Accordion.tsx + 1 modules
var Accordion = __webpack_require__(11046);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionItem.tsx + 1 modules
var AccordionItem = __webpack_require__(93777);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx + 3 modules
var Checkbox = __webpack_require__(8807);
// EXTERNAL MODULE: ./packages/components/src/checkbox/CheckboxGroup.tsx + 3 modules
var CheckboxGroup = __webpack_require__(75394);
// EXTERNAL MODULE: ./packages/components/src/logo/Logo.tsx + 2 modules
var Logo = __webpack_require__(56392);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx + 3 modules
var TextField = __webpack_require__(13332);
// EXTERNAL MODULE: ./packages/components/src/radio/Radio.tsx + 1 modules
var Radio = __webpack_require__(49936);
// EXTERNAL MODULE: ./packages/components/src/breadcrumbs/Breadcrumbs.tsx + 1 modules
var Breadcrumbs = __webpack_require__(70847);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var link_Link = __webpack_require__(25441);
// EXTERNAL MODULE: ./packages/components/src/grid/Grid.tsx
var Grid = __webpack_require__(74351);
// EXTERNAL MODULE: ./packages/components/src/grid/GridItem.tsx
var GridItem = __webpack_require__(93574);
// EXTERNAL MODULE: ./packages/components/src/spinner/Spinner.tsx + 2 modules
var Spinner = __webpack_require__(37195);
// EXTERNAL MODULE: ./packages/components/src/card/Card.tsx + 1 modules
var Card = __webpack_require__(86544);
// EXTERNAL MODULE: ./packages/components/src/link-button/LinkButton.tsx + 1 modules
var LinkButton = __webpack_require__(56636);
// EXTERNAL MODULE: ./packages/components/src/search-field/SearchField.tsx + 2 modules
var SearchField = __webpack_require__(62497);
// EXTERNAL MODULE: ./packages/components/src/select/Select.tsx + 11 modules
var Select = __webpack_require__(44672);
// EXTERNAL MODULE: ./packages/components/src/tabs/Tabs.tsx
var Tabs = __webpack_require__(33359);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextArea.tsx
var TextArea = __webpack_require__(71034);
// EXTERNAL MODULE: ./packages/components/src/tooltip/Tooltip.tsx + 1 modules
var Tooltip = __webpack_require__(93509);
// EXTERNAL MODULE: ./packages/components/src/popover/Popover.tsx + 1 modules
var Popover = __webpack_require__(28777);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
// EXTERNAL MODULE: ./packages/components/src/dropdown/Dropdown.tsx + 1 modules
var Dropdown = __webpack_require__(43406);
// EXTERNAL MODULE: ./packages/components/src/info-banner/InfoBanner.tsx + 2 modules
var InfoBanner = __webpack_require__(59560);
// EXTERNAL MODULE: ./packages/components/src/theme/index.ts + 1 modules
var theme = __webpack_require__(35676);
;// ./apps/docs/src/components/mvdsExports.ts

;// ./apps/docs/src/theme/MDXComponents/index.js
var MDXComponents={Head:Head/* default */.A,details:MDXDetails,Details:MDXDetails,// This is a fix to allow for importing of our custom components in any code block
// code: MDXCode,
code:function code(props){var children=props.children;var scope=Object.assign({},react,mvdsExports_namespaceObject);if(typeof children==='string'){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXCode,Object.assign({},props,{scope:scope}));}return children;},a:MDXA,pre:MDXPre,ul:MDXUl,img:MDXImg,h1:function h1(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h1"},props));},h2:function h2(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h2"},props));},h3:function h3(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h3"},props));},h4:function h4(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h4"},props));},h5:function h5(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h5"},props));},h6:function h6(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h6"},props));},admonition:Admonition/* default */.A,mermaid:Mermaid/* default */.A};/* harmony default export */ const theme_MDXComponents = (MDXComponents);

/***/ }),

/***/ 6974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"listBox":"listBox_l3jg","listBoxPopover":"listBoxPopover_OG2Y","listBoxSectionHeading":"listBoxSectionHeading_R5mH","listBoxButton":"listBoxButton_LfGK","listBoxItem":"listBoxItem_eA9_","listBoxLoadMoreItem":"listBoxLoadMoreItem_RWDs"});

/***/ }),

/***/ 7344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ iconMap)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45773);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97213);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59155);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(418);
var iconMap={success:lucide_react__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,info:lucide_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,important:lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,warning:lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A};

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

/***/ 11046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ Accordion)
});

// UNUSED EXPORTS: ACCORDION_TEST_ID

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/accordion/Accordion.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Accordion_module = ({"root":"root_dwc1","contained":"contained_snuo","triggerButton":"triggerButton_v7ly"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(48569);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(45644);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/accordion/Accordion.tsx
'use client';var _excluded=["variant","children","className","isContained"];var ACCORDION_TEST_ID='accordion';/**
 * Accordions help reduce visual clutter on a page by organizing content into collapsible sections.
 */var Accordion=function Accordion(_ref){var variant=_ref.variant,children=_ref.children,className=_ref.className,isContainedFromProp=_ref.isContained,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var isContained=isContainedFromProp||variant==='contained';return/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionContext/* AccordionContext */.C.Provider,{value:{isContained:isContained},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Disclosure/* DisclosureGroup */.Tw,Object.assign({"data-testid":ACCORDION_TEST_ID,className:(0,clsx/* default */.A)(Accordion_module.root,isContained?Accordion_module.contained:Accordion_module.uncontained,className)},props,{children:children}))});};

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
'use client';var TextField_excluded=["className","form","list","type"];var TextField=/*#__PURE__*/react.forwardRef(function(_ref,ref){var className=_ref.className,form=_ref.form,list=_ref.list,type=_ref.type,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,TextField_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(TextFieldBase/* TextFieldBase */.J,Object.assign({},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input_Input,{className:(0,clsx/* default */.A)(className),form:form,list:list,ref:ref,type:type,skipContext:true})}));});

/***/ }),

/***/ 16025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"checkboxInner":"checkboxInner_Nam1","checkbox":"checkbox_J2GB","checkboxGroup":"checkboxGroup_iAq9"});

/***/ }),

/***/ 16388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ChangelogItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/index.js + 3 modules
var client = __webpack_require__(44096);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/index.js + 1 modules
var Title = __webpack_require__(92357);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/index.js + 1 modules
var Info = __webpack_require__(61219);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28774);
;// ./apps/docs/src/plugins/changelog/theme/ChangelogItem/Header/Author/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"image":"image_FOuN"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/plugins/changelog/theme/ChangelogItem/Header/Author/index.tsx
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ChangelogAuthor(_ref){var author=_ref.author,className=_ref.className;var name=author.name,url=author.url,imageURL=author.imageURL;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('avatar margin-bottom--sm',className),children:imageURL&&/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"avatar__photo-link avatar__photo",href:url,children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{className:styles_module.image,src:imageURL,alt:name,onError:function onError(e){// Image returns 404 if the user's handle changes. We display a
// fallback instead.
e.currentTarget.src='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" fill="none" stroke="%2325c2a0" stroke-width="30" version="1.1"><circle cx="300" cy="230" r="115"/><path stroke-linecap="butt" d="M106.81863443903,481.4 a205,205 1 0,1 386.36273112194,0"/></svg>';}})})});}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./apps/docs/src/plugins/changelog/theme/Icon/Expand/index.tsx
var _excluded=["expanded"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconExpand(_ref){var expanded=_ref.expanded,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);if(expanded){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 1024 1024",width:"20",height:"20",fill:"currentColor"},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M783.915092 1009.031953l-271.898251-277.615587-271.930737 277.550617a49.214558 49.214558 0 0 1-70.752018 0 51.780862 51.780862 0 0 1 0-72.246322l307.274261-313.706262a49.279528 49.279528 0 0 1 70.784503 0l307.33923 313.706262a51.975771 51.975771 0 0 1 0 72.311292 49.409467 49.409467 0 0 1-70.816988 0z m-307.306745-608.05155L169.269117 87.274141A51.975771 51.975771 0 0 1 169.269117 14.96285a49.409467 49.409467 0 0 1 70.816987 0l271.930737 277.615586L783.850122 14.96285a49.409467 49.409467 0 0 1 70.816988 0 51.975771 51.975771 0 0 1 0 72.311291l-307.33923 313.706262a49.376982 49.376982 0 0 1-70.719533 0z"})}));}return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 1024 1024",width:"20",height:"20",fill:"currentColor"},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M476.612887 1009.12034L169.240699 695.380437a51.981345 51.981345 0 0 1 0-72.319045 49.382277 49.382277 0 0 1 70.824582 0l271.959897 277.645356 271.862433-277.645356a49.382277 49.382277 0 0 1 70.824582 0 51.981345 51.981345 0 0 1 0 72.319045l-307.307212 313.739903a49.447254 49.447254 0 0 1-70.792094 0z m307.274724-608.116755L511.99269 123.455693l-271.959897 277.645357a49.382277 49.382277 0 0 1-70.824582 0 51.981345 51.981345 0 0 1 0-72.319045L476.580399 15.042102a49.382277 49.382277 0 0 1 70.727117 0l307.372188 313.739903a51.981345 51.981345 0 0 1 0 72.319045 49.414766 49.414766 0 0 1-70.824582 0z"})}));}
;// ./apps/docs/src/plugins/changelog/theme/ChangelogItem/Header/Authors/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Authors_styles_module = ({"authorCol":"authorCol_FtxR","imageOnlyAuthorRow":"imageOnlyAuthorRow_L7Xa","imageOnlyAuthorCol":"imageOnlyAuthorCol_F1wP","toggleButton":"toggleButton_rAm1","toggleButtonIconExpanded":"toggleButtonIconExpanded_iRjU"});
;// ./apps/docs/src/plugins/changelog/theme/ChangelogItem/Header/Authors/index.tsx
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Component responsible for the authors layout
function BlogPostAuthors(_ref){var className=_ref.className;var _useBlogPost=(0,client/* useBlogPost */.e7)(),authors=_useBlogPost.metadata.authors,assets=_useBlogPost.assets;var _useState=(0,react.useState)(false),expanded=_useState[0],setExpanded=_useState[1];var authorsCount=authors.length;if(authorsCount===0){return null;}var filteredAuthors=authors.slice(0,expanded?authors.length:10);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('margin-top--md margin-bottom--sm',Authors_styles_module.imageOnlyAuthorRow,className),children:[filteredAuthors.map(function(author,idx){var _assets$authorsImageU;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Authors_styles_module.imageOnlyAuthorCol,children:/*#__PURE__*/(0,jsx_runtime.jsx)(ChangelogAuthor,{author:Object.assign({},author,{// Handle author images using relative paths
imageURL:(_assets$authorsImageU=assets.authorsImageUrls[idx])!=null?_assets$authorsImageU:author.imageURL})})},idx);}),authors.length>10&&/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:(0,clsx/* default */.A)('clean-btn',Authors_styles_module.toggleButton),type:"button",onClick:function onClick(){return setExpanded(function(v){return!v;});},"aria-label":"expand",children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconExpand,{expanded:expanded})})]});}
;// ./apps/docs/src/plugins/changelog/theme/ChangelogItem/Header/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Header_styles_module = ({"changelogItemTitleList":"changelogItemTitleList_lonz"});
;// ./apps/docs/src/plugins/changelog/theme/ChangelogItem/Header/index.tsx
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Reduce changelog title size, but only on list view
function ChangelogTitle(){var _useBlogPost=(0,client/* useBlogPost */.e7)(),isBlogPostPage=_useBlogPost.isBlogPostPage;return/*#__PURE__*/(0,jsx_runtime.jsx)(Title/* default */.A,{className:isBlogPostPage?undefined:Header_styles_module.changelogItemTitleList});}function ChangelogItemHeader(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ChangelogTitle,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Info/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostAuthors,{})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Container/index.js
var Container = __webpack_require__(32819);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Content/index.js
var Content = __webpack_require__(23125);
;// ./apps/docs/src/plugins/changelog/theme/ChangelogItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ChangelogItem_styles_module = ({"changelogItemContainer":"changelogItemContainer_zr9I"});
;// ./apps/docs/src/plugins/changelog/theme/ChangelogItem/index.tsx
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ChangelogItem(_ref){var children=_ref.children;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.A,{className:ChangelogItem_styles_module.changelogItemContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ChangelogItemHeader,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Content/* default */.A,{children:children})]});}

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

/***/ 25076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Admonition)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59560);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
function Admonition(props){var typeMapping={tip:'success',note:'info',info:'info',warning:'important',danger:'warning'};var bannerType=typeMapping[props.type]||'info';return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_midas_ds_components__WEBPACK_IMPORTED_MODULE_2__/* .InfoBanner */ .z,{className:"no-margin-children",type:bannerType,title:props.title,children:props.children});}

/***/ }),

/***/ 25441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ Link)
});

// UNUSED EXPORTS: RouterProvider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(20454);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/link/Link.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Link_module = ({"link":"link_RCbb","icon":"icon_Bxuv","standalone":"standalone_Cg9F","stretched":"stretched_pvQw"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var dist_Link = __webpack_require__(73099);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js
var arrow_down_to_line = __webpack_require__(69750);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-arrow-out-up-right.js
var square_arrow_out_up_right = __webpack_require__(8866);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/link/Link.tsx
'use client';var _excluded=["children","standalone","target","stretched","download","icon","className","as"];var Link=function Link(_ref){var children=_ref.children,standalone=_ref.standalone,target=_ref.target,stretched=_ref.stretched,download=_ref.download,IconComponent=_ref.icon,className=_ref.className,as=_ref.as,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Component=as||dist_Link/* Link */.N;var Icon=function Icon(_ref2){var rest=Object.assign({},((0,objectDestructuringEmpty/* default */.A)(_ref2),_ref2));if(IconComponent)return/*#__PURE__*/(0,jsx_runtime.jsx)(IconComponent,Object.assign({},rest));if(download)return/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_down_to_line/* default */.A,Object.assign({},rest));if(target==='_blank')return/*#__PURE__*/(0,jsx_runtime.jsx)(square_arrow_out_up_right/* default */.A,Object.assign({},rest));if(standalone)return/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_right/* default */.A,Object.assign({},rest));return null;};return/*#__PURE__*/(0,jsx_runtime.jsx)(Component,Object.assign({className:(0,clsx/* default */.A)(Link_module.link,standalone&&Link_module.standalone,stretched&&Link_module.stretched,className)},rest,{target:target,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{size:16,className:Link_module.icon})]})}));};

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

/***/ 33359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63917);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34164);
/* harmony import */ var _utils_useObserveElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67603);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46090);
/* harmony import */ var _Tabs_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93075);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["children","className"];var Tabs=function Tabs(_ref){var children=_ref.children,className=_ref.className,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var _useObserveElement=(0,_utils_useObserveElement__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(typeof document==='undefined'?null:document.body,{includePadding:true}),bodyWidth=_useObserveElement.width;var orientation=rest.orientation||bodyWidth>=_theme__WEBPACK_IMPORTED_MODULE_5__.windowSizes.sm?'horizontal':'vertical';return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_6__/* .Tabs */ .tU,Object.assign({},rest,{orientation:orientation,className:(0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(_Tabs_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.container,className),children:children}));};

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

/***/ 35676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w4: () => (/* binding */ theme),
  lO: () => (/* binding */ tokenObject)
});

// UNUSED EXPORTS: baseColors, breakpoints, flat, semantic, sizing, spacing, states, transitions, typography, windowSizes, zIndex

// EXTERNAL MODULE: ./packages/components/src/theme/tokens.ts
var tokens = __webpack_require__(46090);
;// ./packages/components/src/theme/generated-object.js
/**
 * Do not edit directly, this file was auto-generated.
 *//* harmony default export */ const generated_object = ({windowSizes:{sm:{key:"{windowSizes.sm}",$value:"480px",filePath:"packages/components/src/theme/tokens/breakpoints.json",isSource:true,$type:"dimension",original:{$value:"480px",$type:"dimension",key:"{windowSizes.sm}"},name:"windowSizesSm",attributes:{},path:["windowSizes","sm"]},md:{key:"{windowSizes.md}",$value:"768px",filePath:"packages/components/src/theme/tokens/breakpoints.json",isSource:true,$type:"dimension",original:{$value:"768px",$type:"dimension",key:"{windowSizes.md}"},name:"windowSizesMd",attributes:{},path:["windowSizes","md"]},lg:{key:"{windowSizes.lg}",$value:"1024px",filePath:"packages/components/src/theme/tokens/breakpoints.json",isSource:true,$type:"dimension",original:{$value:"1024px",$type:"dimension",key:"{windowSizes.lg}"},name:"windowSizesLg",attributes:{},path:["windowSizes","lg"]},xl:{key:"{windowSizes.xl}",$value:"1280px",filePath:"packages/components/src/theme/tokens/breakpoints.json",isSource:true,$type:"dimension",original:{$value:"1280px",$type:"dimension",key:"{windowSizes.xl}"},name:"windowSizesXl",attributes:{},path:["windowSizes","xl"]}},breakpoints:{xs:{key:"{breakpoints.xs}",$value:"'(max-width: calc(480px - 1px))'",filePath:"packages/components/src/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"'(max-width: calc({windowSizes.sm} - 1px))'",$type:"string",key:"{breakpoints.xs}"},name:"breakpointsXs",attributes:{},path:["breakpoints","xs"]},sm:{key:"{breakpoints.sm}",$value:"'(min-width: 480px)'",filePath:"packages/components/src/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"'(min-width: {windowSizes.sm})'",$type:"string",key:"{breakpoints.sm}"},name:"breakpointsSm",attributes:{},path:["breakpoints","sm"]},md:{key:"{breakpoints.md}",$value:"'(min-width: 768px)'",filePath:"packages/components/src/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"'(min-width: {windowSizes.md})'",$type:"string",key:"{breakpoints.md}"},name:"breakpointsMd",attributes:{},path:["breakpoints","md"]},lg:{key:"{breakpoints.lg}",$value:"'(min-width: 1024px)'",filePath:"packages/components/src/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"'(min-width: {windowSizes.lg})'",$type:"string",key:"{breakpoints.lg}"},name:"breakpointsLg",attributes:{},path:["breakpoints","lg"]},xl:{key:"{breakpoints.xl}",$value:"'(min-width: 1280px)'",$comment:"This is the largest breakpoint",filePath:"packages/components/src/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"'(min-width: {windowSizes.xl})'",$comment:"This is the largest breakpoint",$type:"string",key:"{breakpoints.xl}"},name:"breakpointsXl",attributes:{},path:["breakpoints","xl"]},forcedColorsMode:{key:"{breakpoints.forcedColorsMode}",$value:"'(forced-colors: active)'",filePath:"packages/components/src/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"'(forced-colors: active)'",$type:"string",key:"{breakpoints.forcedColorsMode}"},name:"breakpointsForcedColorsMode",attributes:{},path:["breakpoints","forcedColorsMode"]},darkMode:{key:"{breakpoints.darkMode}",$value:"'(prefers-color-scheme: dark)'",filePath:"packages/components/src/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"'(prefers-color-scheme: dark)'",$type:"string",key:"{breakpoints.darkMode}"},name:"breakpointsDarkMode",attributes:{},path:["breakpoints","darkMode"]},prefersReducedMotion:{key:"{breakpoints.prefersReducedMotion}",$value:"'(prefers-reduced-motion: reduced)'",filePath:"packages/components/src/theme/tokens/breakpoints.json",isSource:true,$type:"string",original:{$value:"'(prefers-reduced-motion: reduced)'",$type:"string",key:"{breakpoints.prefersReducedMotion}"},name:"breakpointsPrefersReducedMotion",attributes:{},path:["breakpoints","prefersReducedMotion"]}},color:{black:{key:"{color.black}",$value:"#000",$description:"Black",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#000",$description:"Black",$type:"color",key:"{color.black}"},name:"colorBlack",attributes:{},path:["color","black"]},white:{key:"{color.white}",$value:"#fff",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fff",$type:"color",key:"{color.white}"},name:"colorWhite",attributes:{},path:["color","white"]},blackHover:{key:"{color.blackHover}",$value:"#0d0d0d",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#0d0d0d",$type:"color",key:"{color.blackHover}"},name:"colorBlackHover",attributes:{},path:["color","blackHover"]},whiteHover:{key:"{color.whiteHover}",$value:"#e6e6e6",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#e6e6e6",$type:"color",key:"{color.whiteHover}"},name:"colorWhiteHover",attributes:{},path:["color","whiteHover"]},gray:{10:{key:"{color.gray.10}",$value:"#f2f2f2",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#f2f2f2",$type:"color",key:"{color.gray.10}"},name:"colorGray10",attributes:{},path:["color","gray","10"]},20:{key:"{color.gray.20}",$value:"#e6e6e6",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#e6e6e6",$type:"color",key:"{color.gray.20}"},name:"colorGray20",attributes:{},path:["color","gray","20"]},30:{key:"{color.gray.30}",$value:"#d9d9d9",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d9d9d9",$type:"color",key:"{color.gray.30}"},name:"colorGray30",attributes:{},path:["color","gray","30"]},40:{key:"{color.gray.40}",$value:"#ccc",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ccc",$type:"color",key:"{color.gray.40}"},name:"colorGray40",attributes:{},path:["color","gray","40"]},50:{key:"{color.gray.50}",$value:"#bfbfbf",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#bfbfbf",$type:"color",key:"{color.gray.50}"},name:"colorGray50",attributes:{},path:["color","gray","50"]},60:{key:"{color.gray.60}",$value:"#b3b3b3",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#b3b3b3",$type:"color",key:"{color.gray.60}"},name:"colorGray60",attributes:{},path:["color","gray","60"]},70:{key:"{color.gray.70}",$value:"#a6a6a6",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#a6a6a6",$type:"color",key:"{color.gray.70}"},name:"colorGray70",attributes:{},path:["color","gray","70"]},80:{key:"{color.gray.80}",$value:"#999",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#999",$type:"color",key:"{color.gray.80}"},name:"colorGray80",attributes:{},path:["color","gray","80"]},90:{key:"{color.gray.90}",$value:"#8c8c8c",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#8c8c8c",$type:"color",key:"{color.gray.90}"},name:"colorGray90",attributes:{},path:["color","gray","90"]},100:{key:"{color.gray.100}",$value:"#808080",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#808080",$type:"color",key:"{color.gray.100}"},name:"colorGray100",attributes:{},path:["color","gray","100"]},110:{key:"{color.gray.110}",$value:"#737373",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#737373",$type:"color",key:"{color.gray.110}"},name:"colorGray110",attributes:{},path:["color","gray","110"]},120:{key:"{color.gray.120}",$value:"#666",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#666",$type:"color",key:"{color.gray.120}"},name:"colorGray120",attributes:{},path:["color","gray","120"]},130:{key:"{color.gray.130}",$value:"#5d5d5d",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#5d5d5d",$type:"color",key:"{color.gray.130}"},name:"colorGray130",attributes:{},path:["color","gray","130"]},140:{key:"{color.gray.140}",$value:"#525252",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#525252",$type:"color",key:"{color.gray.140}"},name:"colorGray140",attributes:{},path:["color","gray","140"]},150:{key:"{color.gray.150}",$value:"#474747",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#474747",$type:"color",key:"{color.gray.150}"},name:"colorGray150",attributes:{},path:["color","gray","150"]},160:{key:"{color.gray.160}",$value:"#383838",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#383838",$type:"color",key:"{color.gray.160}"},name:"colorGray160",attributes:{},path:["color","gray","160"]},170:{key:"{color.gray.170}",$value:"#333",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#333",$type:"color",key:"{color.gray.170}"},name:"colorGray170",attributes:{},path:["color","gray","170"]},180:{key:"{color.gray.180}",$value:"#262626",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#262626",$type:"color",key:"{color.gray.180}"},name:"colorGray180",attributes:{},path:["color","gray","180"]},190:{key:"{color.gray.190}",$value:"#212121",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#212121",$type:"color",key:"{color.gray.190}"},name:"colorGray190",attributes:{},path:["color","gray","190"]},200:{key:"{color.gray.200}",$value:"#171717",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#171717",$type:"color",key:"{color.gray.200}"},name:"colorGray200",attributes:{},path:["color","gray","200"]}},blue:{10:{key:"{color.blue.10}",$value:"#eaf2f6",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#eaf2f6",$type:"color",key:"{color.blue.10}"},name:"colorBlue10",attributes:{},path:["color","blue","10"]},20:{key:"{color.blue.20}",$value:"#d5e5ed",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d5e5ed",$type:"color",key:"{color.blue.20}"},name:"colorBlue20",attributes:{},path:["color","blue","20"]},40:{key:"{color.blue.40}",$value:"#abcbdb",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#abcbdb",$type:"color",key:"{color.blue.40}"},name:"colorBlue40",attributes:{},path:["color","blue","40"]},50:{key:"{color.blue.50}",$value:"#94BCD1",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#94BCD1",$type:"color",key:"{color.blue.50}"},name:"colorBlue50",attributes:{},path:["color","blue","50"]},60:{key:"{color.blue.60}",$value:"#82b0c9",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#82b0c9",$type:"color",key:"{color.blue.60}"},name:"colorBlue60",attributes:{},path:["color","blue","60"]},70:{key:"{color.blue.70}",$value:"#6CA3C0",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#6CA3C0",$type:"color",key:"{color.blue.70}"},name:"colorBlue70",attributes:{},path:["color","blue","70"]},80:{key:"{color.blue.80}",$value:"#5897b8",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#5897b8",$type:"color",key:"{color.blue.80}"},name:"colorBlue80",attributes:{},path:["color","blue","80"]},90:{key:"{color.blue.90}",$value:"#4289ad",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#4289ad",$type:"color",key:"{color.blue.90}"},name:"colorBlue90",attributes:{},path:["color","blue","90"]},100:{key:"{color.blue.100}",$value:"#2e7ca5",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#2e7ca5",$type:"color",key:"{color.blue.100}"},name:"colorBlue100",attributes:{},path:["color","blue","100"]},110:{key:"{color.blue.110}",$value:"#2C7399",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#2C7399",$type:"color",key:"{color.blue.110}"},name:"colorBlue110",attributes:{},path:["color","blue","110"]},120:{key:"{color.blue.120}",$value:"#29698C",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#29698C",$type:"color",key:"{color.blue.120}"},name:"colorBlue120",attributes:{},path:["color","blue","120"]},130:{key:"{color.blue.130}",$value:"#25607f",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#25607f",$type:"color",key:"{color.blue.130}"},name:"colorBlue130",attributes:{},path:["color","blue","130"]},150:{key:"{color.blue.150}",$value:"#143c50",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#143c50",$type:"color",key:"{color.blue.150}"},name:"colorBlue150",attributes:{},path:["color","blue","150"]}},purple:{80:{key:"{color.purple.80}",$value:"#b46ab4",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#b46ab4",$type:"color",key:"{color.purple.80}"},name:"colorPurple80",attributes:{},path:["color","purple","80"]},110:{key:"{color.purple.110}",$value:"#954b95",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#954b95",$type:"color",key:"{color.purple.110}"},name:"colorPurple110",attributes:{},path:["color","purple","110"]}},red:{100:{key:"{color.red.100}",$value:"#b90835",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#b90835",$type:"color",key:"{color.red.100}"},name:"colorRed100",attributes:{},path:["color","red","100"]}},signalBlue:{10:{key:"{color.signalBlue.10}",$value:"#eaf2f6",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#eaf2f6",$type:"color",key:"{color.signalBlue.10}"},name:"colorSignalBlue10",attributes:{},path:["color","signalBlue","10"]},20:{key:"{color.signalBlue.20}",$value:"#d5e5ed",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d5e5ed",$type:"color",key:"{color.signalBlue.20}"},name:"colorSignalBlue20",attributes:{},path:["color","signalBlue","20"]},100:{key:"{color.signalBlue.100}",$value:"#06c",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#06c",$type:"color",key:"{color.signalBlue.100}"},name:"colorSignalBlue100",attributes:{},path:["color","signalBlue","100"]}},signalGreen:{20:{key:"{color.signalGreen.20}",$value:"#d5f2d9",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d5f2d9",$type:"color",key:"{color.signalGreen.20}"},name:"colorSignalGreen20",attributes:{},path:["color","signalGreen","20"]},30:{key:"{color.signalGreen.30}",$value:"#bae5c5",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#bae5c5",$type:"color",key:"{color.signalGreen.30}"},name:"colorSignalGreen30",attributes:{},path:["color","signalGreen","30"]},100:{key:"{color.signalGreen.100}",$value:"#008d3c",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#008d3c",$type:"color",key:"{color.signalGreen.100}"},name:"colorSignalGreen100",attributes:{},path:["color","signalGreen","100"]}},signalYellow:{10:{key:"{color.signalYellow.10}",$value:"#fff8e1",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fff8e1",$type:"color",key:"{color.signalYellow.10}"},name:"colorSignalYellow10",attributes:{},path:["color","signalYellow","10"]},20:{key:"{color.signalYellow.20}",$value:"#FFEBA8",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#FFEBA8",$type:"color",key:"{color.signalYellow.20}"},name:"colorSignalYellow20",attributes:{},path:["color","signalYellow","20"]},100:{key:"{color.signalYellow.100}",$value:"#fdb813",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fdb813",$type:"color",key:"{color.signalYellow.100}"},name:"colorSignalYellow100",attributes:{},path:["color","signalYellow","100"]}},signalRed:{10:{key:"{color.signalRed.10}",$value:"#ffefef",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffefef",$type:"color",key:"{color.signalRed.10}"},name:"colorSignalRed10",attributes:{},path:["color","signalRed","10"]},20:{key:"{color.signalRed.20}",$value:"#ffdfdf",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ffdfdf",$type:"color",key:"{color.signalRed.20}"},name:"colorSignalRed20",attributes:{},path:["color","signalRed","20"]},30:{key:"{color.signalRed.30}",$value:"#fcc8c8",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#fcc8c8",$type:"color",key:"{color.signalRed.30}"},name:"colorSignalRed30",attributes:{},path:["color","signalRed","30"]},40:{key:"{color.signalRed.40}",$value:"#f9b0b0",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#f9b0b0",$type:"color",key:"{color.signalRed.40}"},name:"colorSignalRed40",attributes:{},path:["color","signalRed","40"]},50:{key:"{color.signalRed.50}",$value:"#f69999",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#f69999",$type:"color",key:"{color.signalRed.50}"},name:"colorSignalRed50",attributes:{},path:["color","signalRed","50"]},60:{key:"{color.signalRed.60}",$value:"#f38181",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#f38181",$type:"color",key:"{color.signalRed.60}"},name:"colorSignalRed60",attributes:{},path:["color","signalRed","60"]},70:{key:"{color.signalRed.70}",$value:"#ef6a6a",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#ef6a6a",$type:"color",key:"{color.signalRed.70}"},name:"colorSignalRed70",attributes:{},path:["color","signalRed","70"]},80:{key:"{color.signalRed.80}",$value:"#eb4e4e",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#eb4e4e",$type:"color",key:"{color.signalRed.80}"},name:"colorSignalRed80",attributes:{},path:["color","signalRed","80"]},90:{key:"{color.signalRed.90}",$value:"#e93b3b",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#e93b3b",$type:"color",key:"{color.signalRed.90}"},name:"colorSignalRed90",attributes:{},path:["color","signalRed","90"]},100:{key:"{color.signalRed.100}",$value:"#e62323",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#e62323",$type:"color",key:"{color.signalRed.100}"},name:"colorSignalRed100",attributes:{},path:["color","signalRed","100"]},110:{key:"{color.signalRed.110}",$value:"#d12020",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#d12020",$type:"color",key:"{color.signalRed.110}"},name:"colorSignalRed110",attributes:{},path:["color","signalRed","110"]},120:{key:"{color.signalRed.120}",$value:"#bc1d1d",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#bc1d1d",$type:"color",key:"{color.signalRed.120}"},name:"colorSignalRed120",attributes:{},path:["color","signalRed","120"]},130:{key:"{color.signalRed.130}",$value:"#a71919",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#a71919",$type:"color",key:"{color.signalRed.130}"},name:"colorSignalRed130",attributes:{},path:["color","signalRed","130"]},140:{key:"{color.signalRed.140}",$value:"#921616",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#921616",$type:"color",key:"{color.signalRed.140}"},name:"colorSignalRed140",attributes:{},path:["color","signalRed","140"]},150:{key:"{color.signalRed.150}",$value:"#7d1313",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#7d1313",$type:"color",key:"{color.signalRed.150}"},name:"colorSignalRed150",attributes:{},path:["color","signalRed","150"]},160:{key:"{color.signalRed.160}",$value:"#691010",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#691010",$type:"color",key:"{color.signalRed.160}"},name:"colorSignalRed160",attributes:{},path:["color","signalRed","160"]},170:{key:"{color.signalRed.170}",$value:"#540d0d",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#540d0d",$type:"color",key:"{color.signalRed.170}"},name:"colorSignalRed170",attributes:{},path:["color","signalRed","170"]},180:{key:"{color.signalRed.180}",$value:"#3f0a0a",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#3f0a0a",$type:"color",key:"{color.signalRed.180}"},name:"colorSignalRed180",attributes:{},path:["color","signalRed","180"]},190:{key:"{color.signalRed.190}",$value:"#2a0606",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#2a0606",$type:"color",key:"{color.signalRed.190}"},name:"colorSignalRed190",attributes:{},path:["color","signalRed","190"]},200:{key:"{color.signalRed.200}",$value:"#150303",filePath:"packages/components/src/theme/tokens/colors.json",isSource:true,$type:"color",original:{$value:"#150303",$type:"color",key:"{color.signalRed.200}"},name:"colorSignalRed200",attributes:{},path:["color","signalRed","200"]}}},background:{"@":{key:"{background.@}",$value:"light-dark(#fff, #171717)",$description:"Standardbakgrund för våra applikationer",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white}, {color.gray.200})",$description:"Standardbakgrund för våra applikationer",key:"{background.@}"},name:"background",attributes:{},path:["background","@"]},hover:{key:"{background.hover}",$value:"light-dark(#e6e6e6, #212121)",$description:"Hoverfärg för bakgrund",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.whiteHover}, {color.gray.190})",$description:"Hoverfärg för bakgrund",key:"{background.hover}"},name:"backgroundHover",attributes:{},path:["background","hover"]},inverse:{key:"{background.inverse}",$value:"light-dark(#171717, #f2f2f2)",$description:"Bakgrund eller element i med hög kontrast",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.200}, {color.gray.10})",$description:"Bakgrund eller element i med hög kontrast",key:"{background.inverse}"},name:"backgroundInverse",attributes:{},path:["background","inverse"]}},layer:{"01":{base:{key:"{layer.01.base}",$value:"light-dark(#f2f2f2, #262626)",$description:"Yta som används på background. Sekundär bakgrundsfärg",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Yta som används på background. Sekundär bakgrundsfärg",key:"{layer.01.base}"},name:"layer01Base",attributes:{},path:["layer","01","base"]},hover:{key:"{layer.01.hover}",$value:"light-dark(#e6e6e6, #333)",$description:"Hover state för layer01",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.20}, {color.gray.170})",$description:"Hover state för layer01",key:"{layer.01.hover}"},name:"layer01Hover",attributes:{},path:["layer","01","hover"]},selected:{key:"{layer.01.selected}",$value:"light-dark(#d9d9d9, #383838)",$description:"Selected state för layer01",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Selected state för layer01",key:"{layer.01.selected}"},name:"layer01Selected",attributes:{},path:["layer","01","selected"]},selectedHover:{key:"{layer.01.selectedHover}",$value:"light-dark(#ccc, #474747)",$description:"Hover state för layerSelected01",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.40}, {color.gray.150})",$description:"Hover state för layerSelected01",key:"{layer.01.selectedHover}"},name:"layer01SelectedHover",attributes:{},path:["layer","01","selectedHover"]}},"02":{base:{key:"{layer.02.base}",$value:"light-dark(#fff, #383838)",$description:"Yta som ligger på layer01",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white}, {color.gray.160})",$description:"Yta som ligger på layer01",key:"{layer.02.base}"},name:"layer02Base",attributes:{},path:["layer","02","base"]},hover:{key:"{layer.02.hover}",$value:"light-dark(#e6e6e6, #474747)",$description:"Hover state för layer02",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.whiteHover}, {color.gray.150})",$description:"Hover state för layer02",key:"{layer.02.hover}"},name:"layer02Hover",attributes:{},path:["layer","02","hover"]},selected:{key:"{layer.02.selected}",$value:"light-dark(#d9d9d9, #525252)",$description:"Selected state för layer02",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.140})",$description:"Selected state för layer02",key:"{layer.02.selected}"},name:"layer02Selected",attributes:{},path:["layer","02","selected"]},selectedHover:{key:"{layer.02.selectedHover}",$value:"light-dark(#ccc, #5d5d5d)",$description:"Hover state för layerSelected02",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.40}, {color.gray.130})",$description:"Hover state för layerSelected02",key:"{layer.02.selectedHover}"},name:"layer02SelectedHover",attributes:{},path:["layer","02","selectedHover"]}}},layerAccent:{"01":{base:{key:"{layerAccent.01.base}",$value:"light-dark(#d9d9d9, #383838)",$description:"Accentfärg som används tillsammans med layer01",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Accentfärg som används tillsammans med layer01",key:"{layerAccent.01.base}"},name:"layerAccent01Base",attributes:{},path:["layerAccent","01","base"]},hover:{key:"{layerAccent.01.hover}",$value:"light-dark(#ccc, #474747)",$description:"Hover state för layerAccent01",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.40}, {color.gray.150})",$description:"Hover state för layerAccent01",key:"{layerAccent.01.hover}"},name:"layerAccent01Hover",attributes:{},path:["layerAccent","01","hover"]},selected:{key:"{layerAccent.01.selected}",$value:"light-dark(#bfbfbf, #525252)",$description:"Selected state för layerAccent01",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Selected state för layerAccent01",key:"{layerAccent.01.selected}"},name:"layerAccent01Selected",attributes:{},path:["layerAccent","01","selected"]}},"02":{base:{key:"{layerAccent.02.base}",$value:"light-dark(#f2f2f2, #262626)",$description:"Accentfärg som används tillsammans med layer02",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Accentfärg som används tillsammans med layer02",key:"{layerAccent.02.base}"},name:"layerAccent02Base",attributes:{},path:["layerAccent","02","base"]},hover:{key:"{layerAccent.02.hover}",$value:"light-dark(#e6e6e6, #333)",$description:"Hover state för layerAccent02",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.20}, {color.gray.170})",$description:"Hover state för layerAccent02",key:"{layerAccent.02.hover}"},name:"layerAccent02Hover",attributes:{},path:["layerAccent","02","hover"]},selected:{key:"{layerAccent.02.selected}",$value:"light-dark(#d9d9d9, #383838)",$description:"Selected state för layerAccent02",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Selected state för layerAccent02",key:"{layerAccent.02.selected}"},name:"layerAccent02Selected",attributes:{},path:["layerAccent","02","selected"]}}},brand:{primary:{key:"{brand.primary}",$value:"light-dark(#b90835, #b90835)",$description:"Primära röda färgen",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.red.100}, {color.red.100})",$description:"Primära röda färgen",key:"{brand.primary}"},name:"brandPrimary",attributes:{},path:["brand","primary"]}},border:{color:{primary:{key:"{border.color.primary}",$value:"light-dark(#171717, #f2f2f2)",$description:"Kantlinje med hög kontrast, används med field01",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.200}, {color.gray.10})",$description:"Kantlinje med hög kontrast, används med field01",key:"{border.color.primary}"},name:"borderColorPrimary",attributes:{},path:["border","color","primary"]},secondary:{key:"{border.color.secondary}",$value:"light-dark(#737373, #8c8c8c)",$description:"Kantlinje med medelög kontrast",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.110}, {color.gray.90})",$description:"Kantlinje med medelög kontrast",key:"{border.color.secondary}"},name:"borderColorSecondary",attributes:{},path:["border","color","secondary"]},subtle:{key:"{border.color.subtle}",$value:"light-dark(#bfbfbf, #383838)",$description:"Kantlinje med låg kontrast",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.50}, {color.gray.160})",$description:"Kantlinje med låg kontrast",key:"{border.color.subtle}"},name:"borderColorSubtle",attributes:{},path:["border","color","subtle"]},tertiary:{key:"{border.color.tertiary}",$value:"light-dark(#143c50, #2e7ca5)",$description:"Primärblå kantlinje",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.blue.100})",$description:"Primärblå kantlinje",key:"{border.color.tertiary}"},name:"borderColorTertiary",attributes:{},path:["border","color","tertiary"]},disabled:{key:"{border.color.disabled}",$value:"light-dark(#bfbfbf, #525252)",$description:"Kantlinje för disabled state",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Kantlinje för disabled state",key:"{border.color.disabled}"},name:"borderColorDisabled",attributes:{},path:["border","color","disabled"]}},width:{key:"{border.width}",$type:"size",$value:"1px",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$type:"size",$value:"1px",key:"{border.width}"},name:"borderWidth",attributes:{},path:["border","width"]}},field:{"01":{base:{key:"{field.01.base}",$value:"light-dark(#f2f2f2, #262626)",$description:"Standardfärg för fält, som ligger på background",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Standardfärg för fält, som ligger på background",key:"{field.01.base}"},name:"field01Base",attributes:{},path:["field","01","base"]},hover:{key:"{field.01.hover}",$value:"light-dark(#e6e6e6, #333)",$description:"Hover state för field01",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.20}, {color.gray.170})",$description:"Hover state för field01",key:"{field.01.hover}"},name:"field01Hover",attributes:{},path:["field","01","hover"]},active:{key:"{field.01.active}",$value:"light-dark(#d9d9d9, #383838)",$description:"Active state för field01",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Active state för field01",key:"{field.01.active}"},name:"field01Active",attributes:{},path:["field","01","active"]}},"02":{base:{key:"{field.02.base}",$value:"light-dark(#fff, #383838)",$description:"Sekundfärfärg för fält, som ligger på layer01",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white}, {color.gray.160})",$description:"Sekundfärfärg för fält, som ligger på layer01",key:"{field.02.base}"},name:"field02Base",attributes:{},path:["field","02","base"]},hover:{key:"{field.02.hover}",$value:"light-dark(#e6e6e6, #474747)",$description:"Hover state för field02",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.whiteHover}, {color.gray.150})",$description:"Hover state för field02",key:"{field.02.hover}"},name:"field02Hover",attributes:{},path:["field","02","hover"]},active:{key:"{field.02.active}",$value:"light-dark(#d9d9d9, #525252)",$description:"Active state för field02",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.140})",$description:"Active state för field02",key:"{field.02.active}"},name:"field02Active",attributes:{},path:["field","02","active"]}},disabled:{key:"{field.disabled}",$value:"light-dark(#f2f2f2, #262626)",$description:"Disabled state för fält",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Disabled state för fält",key:"{field.disabled}"},name:"fieldDisabled",attributes:{},path:["field","disabled"]}},skeleton:{"01":{key:"{skeleton.01}",$value:"light-dark(#f2f2f2, #262626)",$description:"Standardfärg för skeleton",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Standardfärg för skeleton",key:"{skeleton.01}"},name:"skeleton01",attributes:{},path:["skeleton","01"]},"02":{key:"{skeleton.02}",$value:"light-dark(#d9d9d9, #383838)",$description:"Färg som används när Skeleton ligger på bakgrundsfärgen `layer01` eller `light-dark(#f2f2f2,#262626)`",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.160})",$description:"Färg som används när Skeleton ligger på bakgrundsfärgen `layer01` eller `light-dark(#f2f2f2,#262626)`",key:"{skeleton.02}"},name:"skeleton02",attributes:{},path:["skeleton","02"]}},icon:{primary:{key:"{icon.primary}",$value:"light-dark(#171717, #f2f2f2)",$description:"Primär ikonfärg",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.200}, {color.gray.10})",$description:"Primär ikonfärg",key:"{icon.primary}"},name:"iconPrimary",attributes:{},path:["icon","primary"]},secondary:{key:"{icon.secondary}",$value:"light-dark(#525252, #a6a6a6)",$description:"Sekundär ikonfärg",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.140}, {color.gray.70})",$description:"Sekundär ikonfärg",key:"{icon.secondary}"},name:"iconSecondary",attributes:{},path:["icon","secondary"]},tertiary:{key:"{icon.tertiary}",$value:"light-dark(#143c50, #f2f2f2)",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.gray.10})",key:"{icon.tertiary}"},name:"iconTertiary",attributes:{},path:["icon","tertiary"]},inverse:{key:"{icon.inverse}",$value:"light-dark(#fff, #171717)",$description:"Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white}, {color.gray.200})",$description:"Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge",key:"{icon.inverse}"},name:"iconInverse",attributes:{},path:["icon","inverse"]},onColor:{key:"{icon.onColor}",$value:"light-dark(#fff, #fff)",$description:"Ikonfärg på färgade ytor som inte är lager",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white}, {color.white})",$description:"Ikonfärg på färgade ytor som inte är lager",key:"{icon.onColor}"},name:"iconOnColor",attributes:{},path:["icon","onColor"]},disabled:{key:"{icon.disabled}",$value:"light-dark(#bfbfbf, #525252)",$description:"Ikoner som är disabled",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Ikoner som är disabled",key:"{icon.disabled}"},name:"iconDisabled",attributes:{},path:["icon","disabled"]},success:{key:"{icon.success}",$value:"light-dark(#008d3c, #008d3c)",$description:"Ikonfär för success state",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalGreen.100}, {color.signalGreen.100})",$description:"Ikonfär för success state",key:"{icon.success}"},name:"iconSuccess",attributes:{},path:["icon","success"]},info:{key:"{icon.info}",$value:"light-dark(#06c, #06c)",$description:"Ikonfärg för informationsikoner",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalBlue.100}, {color.signalBlue.100})",$description:"Ikonfärg för informationsikoner",key:"{icon.info}"},name:"iconInfo",attributes:{},path:["icon","info"]},warning:{key:"{icon.warning}",$value:"light-dark(#e62323, #e62323)",$description:"Ikonfärg för varningsikoner och invalid state",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.100})",$description:"Ikonfärg för varningsikoner och invalid state",key:"{icon.warning}"},name:"iconWarning",attributes:{},path:["icon","warning"]},important:{key:"{icon.important}",$value:"light-dark(#fdb813, #fdb813)",$description:"Ikonfärg för viktig information",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalYellow.100}, {color.signalYellow.100})",$description:"Ikonfärg för viktig information",key:"{icon.important}"},name:"iconImportant",attributes:{},path:["icon","important"]}},link:{enabled:{key:"{link.enabled}",$value:"light-dark(#29698C, #6CA3C0)",$description:"Primärlänkfärg",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.120}, {color.blue.70})",$description:"Primärlänkfärg",key:"{link.enabled}"},name:"linkEnabled",attributes:{},path:["link","enabled"]},hover:{key:"{link.hover}",$value:"light-dark(#143c50, #94BCD1)",$description:"Hover state för länkar",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.blue.50})",$description:"Hover state för länkar",key:"{link.hover}"},name:"linkHover",attributes:{},path:["link","hover"]},pressed:{key:"{link.pressed}",$value:"light-dark(#171717, #abcbdb)",$description:"Active/pressed state för länkar",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.200}, {color.blue.40})",$description:"Active/pressed state för länkar",key:"{link.pressed}"},name:"linkPressed",attributes:{},path:["link","pressed"]},visited:{key:"{link.visited}",$value:"light-dark(#954b95, #b46ab4)",$description:"Färg för besökta länkar",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.purple.110}, {color.purple.80})",$description:"Färg för besökta länkar",key:"{link.visited}"},name:"linkVisited",attributes:{},path:["link","visited"]}},support:{border:{success:{key:"{support.border.success}",$value:"light-dark(#008d3c, #008d3c)",$description:"Kantlinje för success-notifikationer",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalGreen.100}, {color.signalGreen.100})",$description:"Kantlinje för success-notifikationer",key:"{support.border.success}"},name:"supportBorderSuccess",attributes:{},path:["support","border","success"]},info:{key:"{support.border.info}",$value:"light-dark(#06c, #06c)",$description:"Kantlinje för notifikationer med information",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalBlue.100}, {color.signalBlue.100})",$description:"Kantlinje för notifikationer med information",key:"{support.border.info}"},name:"supportBorderInfo",attributes:{},path:["support","border","info"]},important:{key:"{support.border.important}",$value:"light-dark(#fdb813, #fdb813)",$description:"Kantlinje för notifikationer med viktig information",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalYellow.100}, {color.signalYellow.100})",$description:"Kantlinje för notifikationer med viktig information",key:"{support.border.important}"},name:"supportBorderImportant",attributes:{},path:["support","border","important"]},warning:{key:"{support.border.warning}",$value:"light-dark(#e62323, #e62323)",$description:"Kantlinje för notifikationer med varningar",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.100})",$description:"Kantlinje för notifikationer med varningar",key:"{support.border.warning}"},name:"supportBorderWarning",attributes:{},path:["support","border","warning"]}},background:{success:{key:"{support.background.success}",$value:"light-dark(#d5f2d9, #262626)",$description:"Bakgrund för success-notifikationer",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalGreen.20}, {color.gray.180})",$description:"Bakgrund för success-notifikationer",key:"{support.background.success}"},name:"supportBackgroundSuccess",attributes:{},path:["support","background","success"]},successHover:{key:"{support.background.successHover}",$value:"light-dark(#bae5c5, #333)",$description:"Hoverbakgrund för success-notifikationer",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalGreen.30}, {color.gray.170})",$description:"Hoverbakgrund för success-notifikationer",key:"{support.background.successHover}"},name:"supportBackgroundSuccessHover",attributes:{},path:["support","background","successHover"]},info:{key:"{support.background.info}",$value:"light-dark(#eaf2f6, #262626)",$description:"Bakgrund för notifikationer med information",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalBlue.10}, {color.gray.180})",$description:"Bakgrund för notifikationer med information",key:"{support.background.info}"},name:"supportBackgroundInfo",attributes:{},path:["support","background","info"]},infoHover:{key:"{support.background.infoHover}",$value:"light-dark(#d5e5ed, light-dark(#e6e6e6, #333))",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalBlue.20}, {layer.01.hover})",key:"{support.background.infoHover}"},name:"supportBackgroundInfoHover",attributes:{},path:["support","background","infoHover"]},important:{key:"{support.background.important}",$value:"light-dark(#fff8e1, #262626)",$description:"Bakgrund för notifikationer med viktig information",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalYellow.10}, {color.gray.180})",$description:"Bakgrund för notifikationer med viktig information",key:"{support.background.important}"},name:"supportBackgroundImportant",attributes:{},path:["support","background","important"]},importantHover:{key:"{support.background.importantHover}",$value:"light-dark(#FFEBA8, light-dark(#e6e6e6, #333))",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalYellow.20}, {layer.01.hover})",key:"{support.background.importantHover}"},name:"supportBackgroundImportantHover",attributes:{},path:["support","background","importantHover"]},warning:{key:"{support.background.warning}",$value:"light-dark(#ffdfdf, #262626)",$description:"Bakgrund för notifikationer med varningar",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.20}, {color.gray.180})",$description:"Bakgrund för notifikationer med varningar",key:"{support.background.warning}"},name:"supportBackgroundWarning",attributes:{},path:["support","background","warning"]},warningHover:{key:"{support.background.warningHover}",$value:"light-dark(#fcc8c8, #333)",$description:"Hoverbakgrund för notifikationer med varningar",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.30}, {color.gray.170})",$description:"Hoverbakgrund för notifikationer med varningar",key:"{support.background.warningHover}"},name:"supportBackgroundWarningHover",attributes:{},path:["support","background","warningHover"]}}},text:{primary:{key:"{text.primary}",$value:"light-dark(#171717, #f2f2f2)",$description:"Primär textfärg. Rubriker och brödtext.",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.200}, {color.gray.10})",$description:"Primär textfärg. Rubriker och brödtext.",key:"{text.primary}"},name:"textPrimary",attributes:{},path:["text","primary"]},secondary:{key:"{text.secondary}",$value:"light-dark(#525252, #a6a6a6)",$description:"Sekundär textfärg",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.140}, {color.gray.70})",$description:"Sekundär textfärg",key:"{text.secondary}"},name:"textSecondary",attributes:{},path:["text","secondary"]},tertiary:{key:"{text.tertiary}",$value:"light-dark(#143c50, #f2f2f2)",$description:"Textfärg på tertiär knapp",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.gray.10})",$description:"Textfärg på tertiär knapp",key:"{text.tertiary}"},name:"textTertiary",attributes:{},path:["text","tertiary"]},onColor:{key:"{text.onColor}",$value:"light-dark(#fff, #fff)",$description:"Textfärg på färgade bakgrunder som inte är lager",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white}, {color.white})",$description:"Textfärg på färgade bakgrunder som inte är lager",key:"{text.onColor}"},name:"textOnColor",attributes:{},path:["text","onColor"]},inverse:{key:"{text.inverse}",$value:"light-dark(#f2f2f2, #171717)",$description:"Inverterad textfärg",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.10}, {color.gray.200})",$description:"Inverterad textfärg",key:"{text.inverse}"},name:"textInverse",attributes:{},path:["text","inverse"]},disabled:{key:"{text.disabled}",$value:"light-dark(#bfbfbf, #525252)",$description:"Textfärg för disabled state",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.50}, {color.gray.140})",$description:"Textfärg för disabled state",key:"{text.disabled}"},name:"textDisabled",attributes:{},path:["text","disabled"]},warning:{key:"{text.warning}",$value:"light-dark(#e62323, #eb4e4e)",$description:"Textfärg för felmeddelanden",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.80})",$description:"Textfärg för felmeddelanden",key:"{text.warning}"},name:"textWarning",attributes:{},path:["text","warning"]},placeholder:{key:"{text.placeholder}",$value:"light-dark(#a6a6a6, #525252)",$description:"Textfärg för platshållare",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.70}, {color.gray.140})",$description:"Textfärg för platshållare",key:"{text.placeholder}"},name:"textPlaceholder",attributes:{},path:["text","placeholder"]}},button:{background:{primary:{"@":{key:"{button.background.primary.@}",$value:"light-dark(#143c50, #2e7ca5)",$description:"Färg på primärknapp",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.blue.100})",$description:"Färg på primärknapp",key:"{button.background.primary.@}"},name:"buttonBackgroundPrimary",attributes:{},path:["button","background","primary","@"]},hover:{key:"{button.background.primary.hover}",$value:"light-dark(#25607f, #25607f)",$description:"Hover state på primärknapp",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.130}, {color.blue.130})",$description:"Hover state på primärknapp",key:"{button.background.primary.hover}"},name:"buttonBackgroundPrimaryHover",attributes:{},path:["button","background","primary","hover"]},active:{key:"{button.background.primary.active}",$value:"light-dark(#2e7ca5, #143c50)",$description:"Active state för primärknapp",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.100}, {color.blue.150})",$description:"Active state för primärknapp",key:"{button.background.primary.active}"},name:"buttonBackgroundPrimaryActive",attributes:{},path:["button","background","primary","active"]}},secondary:{"@":{key:"{button.background.secondary.@}",$value:"light-dark(#fff, #171717)",$description:"Färg på sekundärknapp",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white}, {color.gray.200})",$description:"Färg på sekundärknapp",key:"{button.background.secondary.@}"},name:"buttonBackgroundSecondary",attributes:{},path:["button","background","secondary","@"]},hover:{key:"{button.background.secondary.hover}",$value:"light-dark(#e6e6e6, #212121)",$description:"Hover state på sekundärknapp",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.whiteHover}, {color.gray.190})",$description:"Hover state på sekundärknapp",key:"{button.background.secondary.hover}"},name:"buttonBackgroundSecondaryHover",attributes:{},path:["button","background","secondary","hover"]},active:{key:"{button.background.secondary.active}",$value:"light-dark(#d9d9d9, #262626)",$description:"Active state för sekundärknapp",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.180})",$description:"Active state för sekundärknapp",key:"{button.background.secondary.active}"},name:"buttonBackgroundSecondaryActive",attributes:{},path:["button","background","secondary","active"]}},tertiary:{hover:{key:"{button.background.tertiary.hover}",$value:"light-dark(#e6e6e6, #212121)",$description:"Hover state för tertiär knapp",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.whiteHover}, {color.gray.190})",$description:"Hover state för tertiär knapp",key:"{button.background.tertiary.hover}"},name:"buttonBackgroundTertiaryHover",attributes:{},path:["button","background","tertiary","hover"]},active:{key:"{button.background.tertiary.active}",$value:"light-dark(#d9d9d9, #262626)",$description:"Active state för tertiär knapp",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.30}, {color.gray.180})",$description:"Active state för tertiär knapp",key:"{button.background.tertiary.active}"},name:"buttonBackgroundTertiaryActive",attributes:{},path:["button","background","tertiary","active"]}},danger:{"@":{key:"{button.background.danger.@}",$value:"light-dark(#e62323, #e62323)",$description:"Färg på danger knapp",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.100})",$description:"Färg på danger knapp",key:"{button.background.danger.@}"},name:"buttonBackgroundDanger",attributes:{},path:["button","background","danger","@"]},hover:{key:"{button.background.danger.hover}",$value:"light-dark(#bc1d1d, #bc1d1d)",$description:"Hover state för danger knapp",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.120}, {color.signalRed.120})",$description:"Hover state för danger knapp",key:"{button.background.danger.hover}"},name:"buttonBackgroundDangerHover",attributes:{},path:["button","background","danger","hover"]},active:{key:"{button.background.danger.active}",$value:"light-dark(#7d1313, #7d1313)",$description:"Active state för danger knapp",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.150}, {color.signalRed.150})",$description:"Active state för danger knapp",key:"{button.background.danger.active}"},name:"buttonBackgroundDangerActive",attributes:{},path:["button","background","danger","active"]}},disabled:{key:"{button.background.disabled}",$value:"light-dark(#f2f2f2, #262626)",$description:"Disabled state för knappar",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Disabled state för knappar",key:"{button.background.disabled}"},name:"buttonBackgroundDisabled",attributes:{},path:["button","background","disabled"]}},border:{secondary:{key:"{button.border.secondary}",$value:"light-dark(#143c50, #f2f2f2)",$description:"Kantfärg för sekundärknapp",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.gray.10})",$description:"Kantfärg för sekundärknapp",key:"{button.border.secondary}"},name:"buttonBorderSecondary",attributes:{},path:["button","border","secondary"]}},icon:{hover:{key:"{button.icon.hover}",$value:"light-dark(rgba(0 0 0 / 10%), rgba(255 255 255 / 10%))",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark(rgba(0 0 0 / 10%), rgba(255 255 255 / 10%))",key:"{button.icon.hover}"},name:"buttonIconHover",attributes:{},path:["button","icon","hover"]},active:{key:"{button.icon.active}",$value:"light-dark(rgba(0 0 0 / 20%), rgba(255 255 255 / 20%))",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark(rgba(0 0 0 / 20%), rgba(255 255 255 / 20%))",key:"{button.icon.active}"},name:"buttonIconActive",attributes:{},path:["button","icon","active"]}}},badge:{background:{key:"{badge.background}",$value:"light-dark(#e62323, #eb4e4e)",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.signalRed.100}, {color.signalRed.80})",key:"{badge.background}"},name:"badgeBackground",attributes:{},path:["badge","background"]},label:{key:"{badge.label}",$value:"light-dark(#fff, #000)",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.white}, {color.black})",key:"{badge.label}"},name:"badgeLabel",attributes:{},path:["badge","label"]}},calendar:{date:{background:{hover:{key:"{calendar.date.background.hover}",$value:"light-dark(rgba(0 0 0 / 10%), rgba(255 255 255 / 10%))",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark(rgba(0 0 0 / 10%), rgba(255 255 255 / 10%))",key:"{calendar.date.background.hover}"},name:"calendarDateBackgroundHover",attributes:{},path:["calendar","date","background","hover"]},selected:{key:"{calendar.date.background.selected}",$value:"light-dark(#143c50, #5897b8)",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.blue.80})",key:"{calendar.date.background.selected}"},name:"calendarDateBackgroundSelected",attributes:{},path:["calendar","date","background","selected"]},startRange:{key:"{calendar.date.background.startRange}",$value:"light-dark(#143c50, #5897b8)",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.blue.80})",key:"{calendar.date.background.startRange}"},name:"calendarDateBackgroundStartRange",attributes:{},path:["calendar","date","background","startRange"]},inRange:{key:"{calendar.date.background.inRange}",$value:"light-dark(#d5e5ed, #143c50)",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.20}, {color.blue.150})",key:"{calendar.date.background.inRange}"},name:"calendarDateBackgroundInRange",attributes:{},path:["calendar","date","background","inRange"]},endRange:{key:"{calendar.date.background.endRange}",$value:"light-dark(#143c50, #5897b8)",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.150}, {color.blue.80})",key:"{calendar.date.background.endRange}"},name:"calendarDateBackgroundEndRange",attributes:{},path:["calendar","date","background","endRange"]}}}},logo:{primary:{key:"{logo.primary}",$value:"light-dark(#b90835, #fff)",$description:"Färg på logotypen",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.red.100}, {color.white})",$description:"Färg på logotypen",key:"{logo.primary}"},name:"logoPrimary",attributes:{},path:["logo","primary"]}},menu:{item:{background:{hover:{key:"{menu.item.background.hover}",$value:"light-dark(#e6e6e6, #212121)",$description:"Bakgrundsfärg för menu vid hover",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.20}, {color.gray.190})",$description:"Bakgrundsfärg för menu vid hover",key:"{menu.item.background.hover}"},name:"menuItemBackgroundHover",attributes:{},path:["menu","item","background","hover"]},selected:{key:"{menu.item.background.selected}",$value:"light-dark(#f2f2f2, #262626)",$description:"Bakgrundsfärg för aktiv menu",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.gray.10}, {color.gray.180})",$description:"Bakgrundsfärg för aktiv menu",key:"{menu.item.background.selected}"},name:"menuItemBackgroundSelected",attributes:{},path:["menu","item","background","selected"]}}},text:{sectionHeader:{key:"{menu.text.sectionHeader}",$value:"light-dark(#29698C, #5897b8)",filePath:"packages/components/src/theme/tokens/object-values.json",isSource:true,original:{$value:"light-dark({color.blue.120}, {color.blue.80})",key:"{menu.text.sectionHeader}"},name:"menuTextSectionHeader",attributes:{},path:["menu","text","sectionHeader"]}}},size:{10:{key:"{size.10}",$value:"0.125rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.125rem",$type:"dimension",key:"{size.10}"},name:"size10",attributes:{},path:["size","10"]},15:{key:"{size.15}",$value:"0.188rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.188rem",$type:"dimension",key:"{size.15}"},name:"size15",attributes:{},path:["size","15"]},20:{key:"{size.20}",$value:"0.25rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.25rem",$type:"dimension",key:"{size.20}"},name:"size20",attributes:{},path:["size","20"]},30:{key:"{size.30}",$value:"0.375rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.375rem",$type:"dimension",key:"{size.30}"},name:"size30",attributes:{},path:["size","30"]},40:{key:"{size.40}",$value:"0.5rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.5rem",$type:"dimension",key:"{size.40}"},name:"size40",attributes:{},path:["size","40"]},50:{key:"{size.50}",$value:"0.625rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.625rem",$type:"dimension",key:"{size.50}"},name:"size50",attributes:{},path:["size","50"]},60:{key:"{size.60}",$value:"0.75rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.75rem",$type:"dimension",key:"{size.60}"},name:"size60",attributes:{},path:["size","60"]},70:{key:"{size.70}",$value:"0.875rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.875rem",$type:"dimension",key:"{size.70}"},name:"size70",attributes:{},path:["size","70"]},75:{key:"{size.75}",$value:"0.938rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.938rem",$type:"dimension",key:"{size.75}"},name:"size75",attributes:{},path:["size","75"]},80:{key:"{size.80}",$value:"1rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"1rem",$type:"dimension",key:"{size.80}"},name:"size80",attributes:{},path:["size","80"]},90:{key:"{size.90}",$value:"1.25rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"1.25rem",$type:"dimension",key:"{size.90}"},name:"size90",attributes:{},path:["size","90"]},100:{key:"{size.100}",$value:"1.5rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"1.5rem",$type:"dimension",key:"{size.100}"},name:"size100",attributes:{},path:["size","100"]},110:{key:"{size.110}",$value:"1.75rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"1.75rem",$type:"dimension",key:"{size.110}"},name:"size110",attributes:{},path:["size","110"]},120:{key:"{size.120}",$value:"2rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"2rem",$type:"dimension",key:"{size.120}"},name:"size120",attributes:{},path:["size","120"]},130:{key:"{size.130}",$value:"2.5rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"2.5rem",$type:"dimension",key:"{size.130}"},name:"size130",attributes:{},path:["size","130"]},140:{key:"{size.140}",$value:"2.75rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"2.75rem",$type:"dimension",key:"{size.140}"},name:"size140",attributes:{},path:["size","140"]},150:{key:"{size.150}",$value:"3rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"3rem",$type:"dimension",key:"{size.150}"},name:"size150",attributes:{},path:["size","150"]},"00":{key:"{size.00}",$value:0,filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:0,$type:"dimension",key:"{size.00}"},name:"size00",attributes:{},path:["size","00"]},"05":{key:"{size.05}",$value:"0.063rem",filePath:"packages/components/src/theme/tokens/sizing.json",isSource:true,$type:"dimension",original:{$value:"0.063rem",$type:"dimension",key:"{size.05}"},name:"size05",attributes:{},path:["size","05"]}},spacing:{10:{key:"{spacing.10}",$type:"dimension",$value:"0.125rem",filePath:"packages/components/src/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"0.125rem",key:"{spacing.10}"},name:"spacing10",attributes:{},path:["spacing","10"]},20:{key:"{spacing.20}",$type:"dimension",$value:"0.25rem",filePath:"packages/components/src/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"0.25rem",key:"{spacing.20}"},name:"spacing20",attributes:{},path:["spacing","20"]},30:{key:"{spacing.30}",$type:"dimension",$value:"0.5rem",filePath:"packages/components/src/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"0.5rem",key:"{spacing.30}"},name:"spacing30",attributes:{},path:["spacing","30"]},40:{key:"{spacing.40}",$type:"dimension",$value:"0.75rem",filePath:"packages/components/src/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"0.75rem",key:"{spacing.40}"},name:"spacing40",attributes:{},path:["spacing","40"]},50:{key:"{spacing.50}",$type:"dimension",$value:"1rem",filePath:"packages/components/src/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"1rem",key:"{spacing.50}"},name:"spacing50",attributes:{},path:["spacing","50"]},60:{key:"{spacing.60}",$type:"dimension",$value:"1.5rem",filePath:"packages/components/src/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"1.5rem",key:"{spacing.60}"},name:"spacing60",attributes:{},path:["spacing","60"]},70:{key:"{spacing.70}",$type:"dimension",$value:"2rem",filePath:"packages/components/src/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"2rem",key:"{spacing.70}"},name:"spacing70",attributes:{},path:["spacing","70"]},80:{key:"{spacing.80}",$type:"dimension",$value:"2.5rem",filePath:"packages/components/src/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"2.5rem",key:"{spacing.80}"},name:"spacing80",attributes:{},path:["spacing","80"]},90:{key:"{spacing.90}",$type:"dimension",$value:"3rem",filePath:"packages/components/src/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"3rem",key:"{spacing.90}"},name:"spacing90",attributes:{},path:["spacing","90"]},100:{key:"{spacing.100}",$type:"dimension",$value:"4rem",filePath:"packages/components/src/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"4rem",key:"{spacing.100}"},name:"spacing100",attributes:{},path:["spacing","100"]},110:{key:"{spacing.110}",$type:"dimension",$value:"5rem",filePath:"packages/components/src/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"5rem",key:"{spacing.110}"},name:"spacing110",attributes:{},path:["spacing","110"]},120:{key:"{spacing.120}",$type:"dimension",$value:"6rem",filePath:"packages/components/src/theme/tokens/spacing.json",isSource:true,original:{$type:"dimension",$value:"6rem",key:"{spacing.120}"},name:"spacing120",attributes:{},path:["spacing","120"]}},state:{focus:{key:"{state.focus}",$type:"string",$value:"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)",filePath:"packages/components/src/theme/tokens/states.json",isSource:true,original:{$type:"string",$value:"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)",key:"{state.focus}"},name:"stateFocus",attributes:{},path:["state","focus"]},focusInset:{key:"{state.focusInset}",$type:"string",$value:"inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)",filePath:"packages/components/src/theme/tokens/states.json",isSource:true,original:{$type:"string",$value:"inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)",key:"{state.focusInset}"},name:"stateFocusInset",attributes:{},path:["state","focusInset"]}},transitions:{slow:{key:"{transitions.slow}",$type:"duration",$value:"500ms",filePath:"packages/components/src/theme/tokens/transitions.json",isSource:true,original:{$type:"duration",$value:"500ms",key:"{transitions.slow}"},name:"transitionsSlow",attributes:{},path:["transitions","slow"]},normal:{key:"{transitions.normal}",$type:"duration",$value:"300ms",filePath:"packages/components/src/theme/tokens/transitions.json",isSource:true,original:{$type:"duration",$value:"300ms",key:"{transitions.normal}"},name:"transitionsNormal",attributes:{},path:["transitions","normal"]},fast:{key:"{transitions.fast}",$type:"duration",$value:"250ms",filePath:"packages/components/src/theme/tokens/transitions.json",isSource:true,original:{$type:"duration",$value:"250ms",key:"{transitions.fast}"},name:"transitionsFast",attributes:{},path:["transitions","fast"]}},typography:{font:{family:{key:"{typography.font.family}",$type:"fontFamily",$value:"Inter, sans-serif",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontFamily",$value:"Inter, sans-serif",key:"{typography.font.family}"},name:"typographyFontFamily",attributes:{},path:["typography","font","family"]},size:{10:{key:"{typography.font.size.10}",$type:"fontSize",$value:"0.75rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"0.75rem",key:"{typography.font.size.10}"},name:"typographyFontSize10",attributes:{},path:["typography","font","size","10"]},20:{key:"{typography.font.size.20}",$type:"fontSize",$value:"0.875rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"0.875rem",key:"{typography.font.size.20}"},name:"typographyFontSize20",attributes:{},path:["typography","font","size","20"]},30:{key:"{typography.font.size.30}",$type:"fontSize",$value:"1rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"1rem",key:"{typography.font.size.30}"},name:"typographyFontSize30",attributes:{},path:["typography","font","size","30"]},40:{key:"{typography.font.size.40}",$type:"fontSize",$value:"1.125rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"1.125rem",key:"{typography.font.size.40}"},name:"typographyFontSize40",attributes:{},path:["typography","font","size","40"]},50:{key:"{typography.font.size.50}",$type:"fontSize",$value:"1.25rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"1.25rem",key:"{typography.font.size.50}"},name:"typographyFontSize50",attributes:{},path:["typography","font","size","50"]},60:{key:"{typography.font.size.60}",$type:"fontSize",$value:"1.5rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"1.5rem",key:"{typography.font.size.60}"},name:"typographyFontSize60",attributes:{},path:["typography","font","size","60"]},70:{key:"{typography.font.size.70}",$type:"fontSize",$value:"1.75rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"1.75rem",key:"{typography.font.size.70}"},name:"typographyFontSize70",attributes:{},path:["typography","font","size","70"]},80:{key:"{typography.font.size.80}",$type:"fontSize",$value:"2rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"2rem",key:"{typography.font.size.80}"},name:"typographyFontSize80",attributes:{},path:["typography","font","size","80"]},90:{key:"{typography.font.size.90}",$type:"fontSize",$value:"2.25rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"2.25rem",key:"{typography.font.size.90}"},name:"typographyFontSize90",attributes:{},path:["typography","font","size","90"]},100:{key:"{typography.font.size.100}",$type:"fontSize",$value:"2.625rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontSize",$value:"2.625rem",key:"{typography.font.size.100}"},name:"typographyFontSize100",attributes:{},path:["typography","font","size","100"]}}},lineHeight:{10:{key:"{typography.lineHeight.10}",$type:"lineHeight",$value:"1rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"1rem",key:"{typography.lineHeight.10}"},name:"typographyLineHeight10",attributes:{},path:["typography","lineHeight","10"]},20:{key:"{typography.lineHeight.20}",$type:"lineHeight",$value:"1.125rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"1.125rem",key:"{typography.lineHeight.20}"},name:"typographyLineHeight20",attributes:{},path:["typography","lineHeight","20"]},30:{key:"{typography.lineHeight.30}",$type:"lineHeight",$value:"1.25rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"1.25rem",key:"{typography.lineHeight.30}"},name:"typographyLineHeight30",attributes:{},path:["typography","lineHeight","30"]},40:{key:"{typography.lineHeight.40}",$type:"lineHeight",$value:"1.375rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"1.375rem",key:"{typography.lineHeight.40}"},name:"typographyLineHeight40",attributes:{},path:["typography","lineHeight","40"]},50:{key:"{typography.lineHeight.50}",$type:"lineHeight",$value:"1.5rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"1.5rem",key:"{typography.lineHeight.50}"},name:"typographyLineHeight50",attributes:{},path:["typography","lineHeight","50"]},60:{key:"{typography.lineHeight.60}",$type:"lineHeight",$value:"1.75rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"1.75rem",key:"{typography.lineHeight.60}"},name:"typographyLineHeight60",attributes:{},path:["typography","lineHeight","60"]},70:{key:"{typography.lineHeight.70}",$type:"lineHeight",$value:"2rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"2rem",key:"{typography.lineHeight.70}"},name:"typographyLineHeight70",attributes:{},path:["typography","lineHeight","70"]},80:{key:"{typography.lineHeight.80}",$type:"lineHeight",$value:"2.25rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"2.25rem",key:"{typography.lineHeight.80}"},name:"typographyLineHeight80",attributes:{},path:["typography","lineHeight","80"]},90:{key:"{typography.lineHeight.90}",$type:"lineHeight",$value:"2.5rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"2.5rem",key:"{typography.lineHeight.90}"},name:"typographyLineHeight90",attributes:{},path:["typography","lineHeight","90"]},100:{key:"{typography.lineHeight.100}",$type:"lineHeight",$value:"2.75rem",filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"lineHeight",$value:"2.75rem",key:"{typography.lineHeight.100}"},name:"typographyLineHeight100",attributes:{},path:["typography","lineHeight","100"]}},weight:{thin:{key:"{typography.weight.thin}",$type:"fontWeight",$value:100,filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:100,key:"{typography.weight.thin}"},name:"typographyWeightThin",attributes:{},path:["typography","weight","thin"]},extraLight:{key:"{typography.weight.extraLight}",$type:"fontWeight",$value:200,filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:200,key:"{typography.weight.extraLight}"},name:"typographyWeightExtraLight",attributes:{},path:["typography","weight","extraLight"]},light:{key:"{typography.weight.light}",$type:"fontWeight",$value:300,filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:300,key:"{typography.weight.light}"},name:"typographyWeightLight",attributes:{},path:["typography","weight","light"]},regular:{key:"{typography.weight.regular}",$type:"fontWeight",$value:400,filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:400,key:"{typography.weight.regular}"},name:"typographyWeightRegular",attributes:{},path:["typography","weight","regular"]},medium:{key:"{typography.weight.medium}",$type:"fontWeight",$value:500,filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:500,key:"{typography.weight.medium}"},name:"typographyWeightMedium",attributes:{},path:["typography","weight","medium"]},semiBold:{key:"{typography.weight.semiBold}",$type:"fontWeight",$value:600,filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:600,key:"{typography.weight.semiBold}"},name:"typographyWeightSemiBold",attributes:{},path:["typography","weight","semiBold"]},bold:{key:"{typography.weight.bold}",$type:"fontWeight",$value:700,filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:700,key:"{typography.weight.bold}"},name:"typographyWeightBold",attributes:{},path:["typography","weight","bold"]},extraBold:{key:"{typography.weight.extraBold}",$type:"fontWeight",$value:800,filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:800,key:"{typography.weight.extraBold}"},name:"typographyWeightExtraBold",attributes:{},path:["typography","weight","extraBold"]},black:{key:"{typography.weight.black}",$type:"fontWeight",$value:900,filePath:"packages/components/src/theme/tokens/typography.json",isSource:true,original:{$type:"fontWeight",$value:900,key:"{typography.weight.black}"},name:"typographyWeightBlack",attributes:{},path:["typography","weight","black"]}}},zIndex:{base:{key:"{zIndex.base}",$value:1,filePath:"packages/components/src/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:1,$type:"number",key:"{zIndex.base}"},name:"zIndexBase",attributes:{},path:["zIndex","base"]},above:{key:"{zIndex.above}",$value:10,filePath:"packages/components/src/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:10,$type:"number",key:"{zIndex.above}"},name:"zIndexAbove",attributes:{},path:["zIndex","above"]},modal:{key:"{zIndex.modal}",$value:1000,filePath:"packages/components/src/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:1000,$type:"number",key:"{zIndex.modal}"},name:"zIndexModal",attributes:{},path:["zIndex","modal"]},toast:{key:"{zIndex.toast}",$value:1100,filePath:"packages/components/src/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:1100,$type:"number",key:"{zIndex.toast}"},name:"zIndexToast",attributes:{},path:["zIndex","toast"]},skipToContent:{key:"{zIndex.skipToContent}",$value:1200,filePath:"packages/components/src/theme/tokens/z-index.json",isSource:true,$type:"number",original:{$value:1200,$type:"number",key:"{zIndex.skipToContent}"},name:"zIndexSkipToContent",attributes:{},path:["zIndex","skipToContent"]}}});
;// ./packages/components/src/theme/index.ts
var tokenObject=generated_object;var flat=(/* unused pure expression or super */ null && (gen2));var theme=Object.assign({},tokens);

/***/ }),

/***/ 37195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ Spinner)
});

;// ./packages/components/src/spinner/Spinner.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Spinner_module = ({"container":"container_ytPE","spinner":"spinner_eR4D","rotating":"rotating_m95R","dark":"dark_YbwO"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(8723);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/spinner/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"loadingPleaseWait":"Loading, please wait..."},"sv":{"loadingPleaseWait":"Laddar, vänligen vänta..."}}');
// EXTERNAL MODULE: ./node_modules/@react-aria/visually-hidden/dist/VisuallyHidden.mjs
var VisuallyHidden = __webpack_require__(87979);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/spinner/Spinner.tsx
var Spinner=function Spinner(_ref){var small=_ref.small,_ref$isOnColor=_ref.isOnColor,isOnColor=_ref$isOnColor===void 0?false:_ref$isOnColor,className=_ref.className;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(Spinner_module.container,className),role:"status",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(loader_circle/* default */.A,{className:(0,clsx/* default */.A)(Spinner_module.spinner,isOnColor&&Spinner_module.dark),size:small?16:32,strokeWidth:small?2:3,absoluteStrokeWidth:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.s,{children:strings.format('loadingPleaseWait')})]});};

/***/ }),

/***/ 38739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container_uCKZ","removeMargins":"removeMargins_rQ9U","contained":"contained_R9lB","flex":"flex_LQ20","fluid":"fluid_Y1tE","col":"col_tmG6","col-1":"col-1_OVvW","col-2":"col-2_XfVI","col-3":"col-3_KxqE","col-quarter":"col-quarter_eUut","col-4":"col-4_Ovxr","col-third":"col-third_FUaF","col-5":"col-5_uIyd","col-6":"col-6_i8WR","col-half":"col-half_GzSn","col-7":"col-7_devX","col-8":"col-8_tlAZ","col-9":"col-9_Nbjm","col-10":"col-10_rwyP","col-11":"col-11_ShOw","col-12":"col-12_eQeJ","col-full":"col-full_K_XT","col-auto":"col-auto_nMhH","col-grow":"col-grow_TBON","col-xs-1":"col-xs-1_Bg_O","col-xs-2":"col-xs-2_UhmL","col-xs-3":"col-xs-3_mEvh","col-xs-quarter":"col-xs-quarter_mtoI","col-xs-4":"col-xs-4_Uv5i","col-xs-third":"col-xs-third_AHrM","col-xs-5":"col-xs-5_Gdnm","col-xs-6":"col-xs-6_z366","col-xs-half":"col-xs-half_vH6m","col-xs-7":"col-xs-7_HNwO","col-xs-8":"col-xs-8_Vwih","col-xs-9":"col-xs-9_vfTc","col-xs-10":"col-xs-10_wJWt","col-xs-11":"col-xs-11_KTEA","col-xs-12":"col-xs-12_TaE_","col-xs-full":"col-xs-full_enWi","col-xs-auto":"col-xs-auto_G2jj","col-xs-grow":"col-xs-grow_kY1W","col-sm-1":"col-sm-1_YvIs","col-sm-2":"col-sm-2_NSCq","col-sm-3":"col-sm-3_cJ0H","col-sm-quarter":"col-sm-quarter_WWBJ","col-sm-4":"col-sm-4_dtZx","col-sm-third":"col-sm-third_g3dG","col-sm-5":"col-sm-5_C87q","col-sm-6":"col-sm-6_SkMd","col-sm-half":"col-sm-half_QX4f","col-sm-7":"col-sm-7_wa6s","col-sm-8":"col-sm-8_zH5I","col-sm-9":"col-sm-9_ym4Z","col-sm-10":"col-sm-10_jE4j","col-sm-11":"col-sm-11_Va2g","col-sm-12":"col-sm-12_BgjD","col-sm-full":"col-sm-full_Nb6O","col-sm-auto":"col-sm-auto_Qj4m","col-sm-grow":"col-sm-grow_mAH5","col-md-1":"col-md-1_Zeqd","col-md-2":"col-md-2_DR6K","col-md-3":"col-md-3_OZK7","col-md-quarter":"col-md-quarter_AmxM","col-md-4":"col-md-4_NxEu","col-md-third":"col-md-third_J4Ja","col-md-5":"col-md-5_cBkY","col-md-6":"col-md-6_it5t","col-md-half":"col-md-half_aEv_","col-md-7":"col-md-7__sAT","col-md-8":"col-md-8_WfW7","col-md-9":"col-md-9_orzQ","col-md-10":"col-md-10_wh5t","col-md-11":"col-md-11_Wsgq","col-md-12":"col-md-12_gZQg","col-md-full":"col-md-full_Ow4Z","col-md-auto":"col-md-auto_e67j","col-md-grow":"col-md-grow_quHq","col-lg-1":"col-lg-1_e1au","col-lg-2":"col-lg-2_fUsj","col-lg-3":"col-lg-3_EhhM","col-lg-quarter":"col-lg-quarter_SI9I","col-lg-4":"col-lg-4_VuKz","col-lg-third":"col-lg-third_Lf2A","col-lg-5":"col-lg-5_TF5r","col-lg-6":"col-lg-6_E93v","col-lg-half":"col-lg-half_ZdoE","col-lg-7":"col-lg-7_L5CO","col-lg-8":"col-lg-8_ZBHN","col-lg-9":"col-lg-9_TbUu","col-lg-10":"col-lg-10_Tsqu","col-lg-11":"col-lg-11_Eg8x","col-lg-12":"col-lg-12_eNvi","col-lg-full":"col-lg-full_SaRE","col-lg-auto":"col-lg-auto_fNRO","col-lg-grow":"col-lg-grow_XTrt","col-xl-1":"col-xl-1_BRna","col-xl-2":"col-xl-2_eGSK","col-xl-3":"col-xl-3_RrW2","col-xl-quarter":"col-xl-quarter_V_Yw","col-xl-4":"col-xl-4_R4AZ","col-xl-third":"col-xl-third_W3hT","col-xl-5":"col-xl-5_k7Gx","col-xl-6":"col-xl-6_xZyb","col-xl-half":"col-xl-half_V9xE","col-xl-7":"col-xl-7_lJfg","col-xl-8":"col-xl-8_zErQ","col-xl-9":"col-xl-9_oYwQ","col-xl-10":"col-xl-10_cLTa","col-xl-11":"col-xl-11_xqWK","col-xl-12":"col-xl-12_Vrsf","col-xl-full":"col-xl-full_vVSm","col-xl-auto":"col-xl-auto_YBap","col-xl-grow":"col-xl-grow_YMBn","offset-1":"offset-1_ZQkJ","offset-2":"offset-2_Reek","offset-3":"offset-3_SDkl","offset-quarter":"offset-quarter_ho5e","offset-4":"offset-4_L0XB","offset-third":"offset-third_dE8e","offset-5":"offset-5_Mz95","offset-6":"offset-6_Zp68","offset-half":"offset-half_nGtc","offset-7":"offset-7_ZApX","offset-8":"offset-8_UZTZ","offset-9":"offset-9_FiKS","offset-10":"offset-10_hN9R","offset-11":"offset-11_cqgv","offset-auto":"offset-auto_ZBrI","offset-xs-1":"offset-xs-1__ZrT","offset-xs-2":"offset-xs-2_WySR","offset-xs-3":"offset-xs-3_u9Tb","offset-xs-quarter":"offset-xs-quarter_Pd1o","offset-xs-4":"offset-xs-4_Bibg","offset-xs-third":"offset-xs-third_CeeW","offset-xs-5":"offset-xs-5_OgED","offset-xs-6":"offset-xs-6_ihSu","offset-xs-half":"offset-xs-half_Vrdz","offset-xs-7":"offset-xs-7_TtZQ","offset-xs-8":"offset-xs-8_Ftc2","offset-xs-9":"offset-xs-9_HptZ","offset-xs-10":"offset-xs-10_umjb","offset-xs-11":"offset-xs-11_Suix","offset-xs-auto":"offset-xs-auto_fxe8","offset-sm-1":"offset-sm-1_knSM","offset-sm-2":"offset-sm-2_zWxo","offset-sm-3":"offset-sm-3_oqp6","offset-sm-quarter":"offset-sm-quarter_Nav1","offset-sm-4":"offset-sm-4_EvUX","offset-sm-third":"offset-sm-third_tGgh","offset-sm-5":"offset-sm-5_raNi","offset-sm-6":"offset-sm-6_KTA8","offset-sm-half":"offset-sm-half_ab81","offset-sm-7":"offset-sm-7_duQl","offset-sm-8":"offset-sm-8_uRxp","offset-sm-9":"offset-sm-9_AqYl","offset-sm-10":"offset-sm-10_Wt6J","offset-sm-11":"offset-sm-11_yAYq","offset-sm-auto":"offset-sm-auto_FAp6","offset-md-1":"offset-md-1_OpgB","offset-md-2":"offset-md-2_U24n","offset-md-3":"offset-md-3_YxnQ","offset-md-quarter":"offset-md-quarter_y53T","offset-md-4":"offset-md-4_ZaOC","offset-md-third":"offset-md-third_HZWP","offset-md-5":"offset-md-5_KVFL","offset-md-6":"offset-md-6_bZvL","offset-md-half":"offset-md-half_yilA","offset-md-7":"offset-md-7_fs04","offset-md-8":"offset-md-8_QmYF","offset-md-9":"offset-md-9_QoVc","offset-md-10":"offset-md-10_OrE0","offset-md-11":"offset-md-11_reKz","offset-md-auto":"offset-md-auto_ETdh","offset-lg-1":"offset-lg-1_zi3j","offset-lg-2":"offset-lg-2_YgjU","offset-lg-3":"offset-lg-3_CHdw","offset-lg-quarter":"offset-lg-quarter_Chor","offset-lg-4":"offset-lg-4_NOCF","offset-lg-third":"offset-lg-third_LTbL","offset-lg-5":"offset-lg-5_dGzM","offset-lg-6":"offset-lg-6_kXXi","offset-lg-half":"offset-lg-half_vFHN","offset-lg-7":"offset-lg-7_jIth","offset-lg-8":"offset-lg-8_T0Jx","offset-lg-9":"offset-lg-9_mYmL","offset-lg-10":"offset-lg-10_clJ6","offset-lg-11":"offset-lg-11_zFW2","offset-lg-auto":"offset-lg-auto_W3q4","offset-xl-1":"offset-xl-1_pRWH","offset-xl-2":"offset-xl-2_FX3q","offset-xl-3":"offset-xl-3_P8xx","offset-xl-quarter":"offset-xl-quarter_RLTy","offset-xl-4":"offset-xl-4_n7Vy","offset-xl-third":"offset-xl-third_w0fc","offset-xl-5":"offset-xl-5_vC_8","offset-xl-6":"offset-xl-6_BvQ2","offset-xl-half":"offset-xl-half_HQ16","offset-xl-7":"offset-xl-7_m1bv","offset-xl-8":"offset-xl-8_FJ1u","offset-xl-9":"offset-xl-9_oAbC","offset-xl-10":"offset-xl-10_wwaH","offset-xl-11":"offset-xl-11_HpDF","offset-xl-auto":"offset-xl-auto_Dv5P"});

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

/***/ 43406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ Dropdown),
  t: () => (/* binding */ DropdownItem)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Menu.mjs + 7 modules
var Menu = __webpack_require__(6484);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js
var ellipsis_vertical = __webpack_require__(3213);
;// ./packages/components/src/dropdown/Dropdown.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Dropdown_module = ({"dropDownMenu":"dropDownMenu_VQGa","menuItem":"menuItem_ssbG"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/dropdown/Dropdown.tsx
var _excluded=["label","title","children","icon"];function Dropdown(_ref){var label=_ref.label,title=_ref.title,children=_ref.children,_ref$icon=_ref.icon,Icon=_ref$icon===void 0?ellipsis_vertical/* default */.A:_ref$icon,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Menu/* MenuTrigger */.cQ,Object.assign({},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* Button */.$,{"aria-label":label||props['aria-label'],variant:"icon",children:[title,/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{size:20,"aria-hidden":true})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Menu/* Menu */.W1,Object.assign({},props,{className:Dropdown_module.dropDownMenu,children:children}))})]}));}function DropdownItem(props){var textValue=props.textValue||(typeof props.children==='string'?props.children:undefined);return/*#__PURE__*/(0,jsx_runtime.jsx)(Menu/* MenuItem */.Dr,Object.assign({},props,{textValue:textValue,className:function className(_ref2){var isFocused=_ref2.isFocused,isOpen=_ref2.isOpen;return (0,clsx/* default */.A)(Dropdown_module.menuItem,props.className,isFocused&&'focused',isOpen&&'open');},children:function children(_ref3){var hasSubmenu=_ref3.hasSubmenu;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[props.children,hasSubmenu&&/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{className:"chevron",viewBox:"0 0 24 24",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"m9 18 6-6-6-6"})})]});}}));}

/***/ }),

/***/ 44672:
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
/* harmony default export */ const Select_module = ({"wrapper":"wrapper_VDHP","trigger":"trigger_YoQG","medium":"medium_IF05","icon":"icon_roiA","tagGroup":"tagGroup_t6GX","listBoxItemCheckmark":"listBoxItemCheckmark_Dz5t","triggerContainer":"triggerContainer_JBm2","selectValueTag":"selectValueTag_Bx1C","clearButton":"clearButton_p8du","truncate":"truncate_J6cE","checkboxContainer":"checkboxContainer_u2A7"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/select/SelectListBox.tsx
var _excluded=["state"];var Option=function Option(_ref){var item=_ref.item;return/*#__PURE__*/(0,jsx_runtime.jsx)(ListBoxItem/* ListBoxItem */.n,Object.assign({},item.value,{textValue:item.textValue,children:function children(_ref2){var isDisabled=_ref2.isDisabled,isSelected=_ref2.isSelected,selectionMode=_ref2.selectionMode;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[selectionMode==='multiple'?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.checkboxContainer,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{isDisabled:isDisabled,isSelected:isSelected,isReadOnly:true,excludeFromTabOrder:true,"aria-label":item.textValue})}):null,item.rendered,isSelected&&selectionMode==='single'?/*#__PURE__*/(0,jsx_runtime.jsx)(check/* default */.A,{size:20,className:Select_module.listBoxItemCheckmark}):null]});}}));};var SelectListBox_Section=function Section(_ref3){var section=_ref3.section,state=_ref3.state;return/*#__PURE__*/(0,jsx_runtime.jsx)(ListBoxSection/* ListBoxSection */.r,Object.assign({},section.value,{children:state.collection.getChildren?/*#__PURE__*/(0,jsx_runtime.jsx)(CollectionBuilder/* Collection */.pM,{items:state.collection.getChildren(section.key),children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Option,{item:item});}}):null}));};var SelectListBox=function SelectListBox(_ref4){var state=_ref4.state,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref4,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(ListBox/* ListBox */.q,Object.assign({},rest,state,{escapeKeyBehavior:"none",onSelectionChange:state.setSelectedKeys,items:state.collection,children:function children(item){return item.type==='section'?/*#__PURE__*/(0,jsx_runtime.jsx)(SelectListBox_Section,{state:state,section:item}):/*#__PURE__*/(0,jsx_runtime.jsx)(Option,{item:item});}}));};
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
// EXTERNAL MODULE: ./packages/components/src/list-box/ListBox.module.css
var ListBox_module = __webpack_require__(6974);
;// ./packages/components/src/list-box/ListBoxButton.tsx
var ListBoxButton_excluded=["className","children"];var ListBoxButton=function ListBoxButton(_ref){var className=_ref.className,children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,ListBoxButton_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("button",Object.assign({type:"button",className:(0,clsx/* default */.A)(ListBox_module/* default */.A.listBoxItem,ListBox_module/* default */.A.listBoxButton,className)},rest,{children:children}));};
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
var Select_excluded=["isClearable","popover"],_excluded2=["options"];var SelectComponent=/*#__PURE__*/react.forwardRef(function(_ref,ref){var _ref$isClearable=_ref.isClearable,isClearable=_ref$isClearable===void 0?true:_ref$isClearable,popover=_ref.popover,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,Select_excluded);var props=Object.assign({selectionMode:'single',errorPosition:'top',disallowEmptySelection:!isClearable,isClearable:isClearable,size:'large',popover:popover},rest);var triggerRef=(0,useObjectRef/* useObjectRef */.U)(ref);var state=useMultiSelectState(props);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var _useMultiSelect=useMultiSelect(props,state,triggerRef),labelProps=_useMultiSelect.labelProps,triggerProps=_useMultiSelect.triggerProps,valueProps=_useMultiSelect.valueProps,menuProps=_useMultiSelect.menuProps;var _useObserveElement=(0,useObserveElement/* default */.A)(triggerRef.current,{includePadding:true}),triggerWidth=_useObserveElement.width;return/*#__PURE__*/(0,jsx_runtime.jsxs)(TextField/* TextField */.A,Object.assign({},props,{className:(0,clsx/* default */.A)(Select_module.wrapper,props.className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HiddenMultiSelect,Object.assign({},props,{state:state,triggerRef:triggerRef})),/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapper/* LabelWrapper */.cR,{popover:popover,children:props.label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,Object.assign({},labelProps,{"data-disabled":props.isDisabled||undefined,children:props.label}))}),props.description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:props.description}),props.errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(SelectFieldError,Object.assign({},props,{state:state})),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectTrigger,Object.assign({},props,triggerProps,{isInvalid:state.displayValidation.isInvalid,triggerRef:triggerRef,state:state,children:props.selectionMode==='multiple'&&state.selectedItems?/*#__PURE__*/(0,jsx_runtime.jsx)("span",Object.assign({},valueProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(MultiSelectValueTag,Object.assign({},props,{state:state,parentWidth:triggerWidth,onClear:function onClear(){return state.selectionManager.clearSelection();},triggerRef:triggerRef}))})):null})),props.errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(SelectFieldError,Object.assign({},props,{state:state})),/*#__PURE__*/(0,jsx_runtime.jsxs)(ListBoxPopover/* ListBoxPopover */.f,{isOpen:state.isOpen,onOpenChange:function onOpenChange(isOpen){if(!isOpen){state.close();}},triggerRef:triggerRef,style:{width:triggerWidth},children:[props.isSelectableAll&&/*#__PURE__*/(0,jsx_runtime.jsxs)(ListBoxButton,{onClick:function onClick(){return state.selectionManager.toggleSelectAll();},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Select_module.checkboxContainer,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{isSelected:state.selectionManager.isSelectAll,isIndeterminate:!state.selectionManager.isSelectAll&&!state.selectionManager.isEmpty,isReadOnly:true,excludeFromTabOrder:true,"aria-label":strings.format('selectAll')})}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:strings.format('selectAll')})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(SelectListBox,Object.assign({},menuProps,{state:state}))]}),props.showTags&&!!state.selectedItems&&/*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* TagGroup */.C,{"aria-label":strings.format('selectedItems'),selectionBehavior:"toggle",onRemove:function onRemove(keys){return state.selectionManager.toggleSelection(Array.from(keys)[0]);},className:Select_module.tagGroup,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TagGroup/* TagList */.LY,{items:state.selectedItems,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* Tag */.v,{textValue:item.textValue,id:item.key,dismissable:true,isDisabled:props.isDisabled,children:item.textValue},item.key);}})})]}));});var Select=/*#__PURE__*/react.forwardRef(function(_ref2,ref){var options=_ref2.options,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(SelectComponent,Object.assign({},props,{items:options,ref:ref,children:function children(section){return section.children?/*#__PURE__*/(0,jsx_runtime.jsx)(Section/* Section */.w,{items:section.children,title:section.name,children:function children(item){return/*#__PURE__*/(0,jsx_runtime.jsx)(Item/* Item */.q,{textValue:item.textValue,children:item.name});}},section.name):/*#__PURE__*/(0,jsx_runtime.jsx)(Item/* Item */.q,{textValue:section.textValue,children:section.name});}}));});Select.displayName='Select';

/***/ }),

/***/ 45644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ AccordionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
var AccordionContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);

/***/ }),

/***/ 46090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baseColors: () => (/* binding */ baseColors),
/* harmony export */   breakpoints: () => (/* binding */ breakpoints),
/* harmony export */   semantic: () => (/* binding */ semantic),
/* harmony export */   sizing: () => (/* binding */ sizing),
/* harmony export */   spacing: () => (/* binding */ spacing),
/* harmony export */   states: () => (/* binding */ states),
/* harmony export */   transitions: () => (/* binding */ transitions),
/* harmony export */   typography: () => (/* binding */ typography),
/* harmony export */   windowSizes: () => (/* binding */ windowSizes),
/* harmony export */   zIndex: () => (/* binding */ zIndex)
/* harmony export */ });
var baseColors={black:'#000',white:'#fff',blackHover:'#0d0d0d',whiteHover:'#e6e6e6',gray10:'#f2f2f2',gray20:'#e6e6e6',gray30:'#d9d9d9',gray40:'#ccc',gray50:'#bfbfbf',gray60:'#b3b3b3',gray70:'#a6a6a6',gray80:'#999',gray90:'#8c8c8c',gray100:'#808080',gray110:'#737373',gray120:'#666',gray130:'#5d5d5d',gray140:'#525252',gray150:'#474747',gray160:'#383838',gray170:'#333',gray180:'#262626',gray190:'#212121',gray200:'#171717',blue10:'#eaf2f6',blue20:'#d5e5ed',blue40:'#abcbdb',blue50:'#94BCD1',blue60:'#82b0c9',blue70:'#6CA3C0',blue80:'#5897b8',blue90:'#4289ad',blue100:'#2e7ca5',blue110:'#2C7399',blue120:'#29698C',blue130:'#25607f',blue150:'#143c50',purple80:'#b46ab4',purple110:'#954b95',red100:'#b90835',signalBlue10:'#eaf2f6',signalBlue100:'#06c',signalGreen20:'#d5f2d9',signalGreen30:'#bae5c5',signalGreen100:'#008d3c',signalYellow10:'#fff8e1',signalYellow20:'#FFEBA8',signalYellow100:'#fdb813',signalRed10:'#ffefef',signalRed20:'#ffdfdf',signalRed30:'#fcc8c8',signalRed40:'#f9b0b0',signalRed50:'#f69999',signalRed60:'#f38181',signalRed70:'#ef6a6a',signalRed80:'#eb4e4e',signalRed90:'#e93b3b',signalRed100:'#e62323',signalRed110:'#d12020',signalRed120:'#bc1d1d',signalRed130:'#a71919',signalRed140:'#921616',signalRed150:'#7d1313',signalRed160:'#691010',signalRed170:'#540d0d',signalRed180:'#3f0a0a',signalRed190:'#2a0606',signalRed200:'#150303'};var typography={fontFamily:'"Inter", sans-serif',lineHeight10:'1rem',// 16px
lineHeight20:'1.125rem',// 18px (18/16)
lineHeight30:'1.25rem',// 20px (20/16)
lineHeight40:'1.375rem',// 22px (22/16)
lineHeight50:'1.5rem',// 24px (24/16)
lineHeight60:'1.75rem',// 28px (28/16)
lineHeight70:'2rem',// 32px (32/16)
lineHeight80:'2.25rem',// 36px (36/16)
lineHeight90:'2.5rem',// 40px (40/16)
lineHeight100:'2.75rem',// 44px (44/16)
fontSize10:'0.75rem',// 12px (12/16)
fontSize20:'0.875rem',// 14px (14/16)
fontSize30:'1rem',// 16px (16/16)
fontSize40:'1.125rem',// 18px (18/16)
fontSize50:'1.25rem',// 20px (20/16)
fontSize60:'1.5rem',// 24px (24/16)
fontSize70:'1.75rem',// 28px (28/16)
fontSize80:'2rem',// 32px (32/16)
fontSize90:'2.25rem',// 36px (36/16)
fontSize100:'2.625rem',// 42px (40/16)
weightThin:100,weightExtraLight:200,weightLight:300,weightRegular:400,weightMedium:500,weightSemiBold:600,weightBold:700,weightExtraBold:800,weightBlack:900};var spacing={'10':'0.125rem',// 2px
'20':'0.25rem',// 4px
'30':'0.5rem',// 8px
'40':'0.75rem',// 12px
'50':'1rem',// 16px
'60':'1.5rem',// 24px
'70':'2rem',// 32px
'80':'2.5rem',// 40px
'90':'3rem',// 48px
'100':'4rem',// 64px
'110':'5rem',// 80px
'120':'6rem'// 96px
};var states={focus:'0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)',focusInset:'inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)'};var transitions={slow:'500ms',normal:'300ms',fast:'250ms'};var windowSizes={sm:480,md:768,lg:1024,xl:1280};var breakpoints={xs:"(max-width: "+(windowSizes.sm-1)+"px)",sm:"(min-width: "+windowSizes.sm+"px)",md:"(min-width: "+windowSizes.md+"px)",lg:"(min-width: "+windowSizes.lg+"px)",xl:"(min-width: "+windowSizes.xl+"px)",forcedColorsMode:'(forced-colors: active)',darkMode:'(prefers-color-scheme: dark)',prefersReducedMotion:'(prefers-reduced-motion: reduced)'};var semantic={background:"light-dark("+baseColors.white+", "+baseColors.gray200+")",backgroundHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",backgroundInverse:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",layer01:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",layerHover01:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",layerSelected01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",layerSelectedHover01:"light-dark("+baseColors.gray40+", "+baseColors.gray150+")",layer02:"light-dark("+baseColors.white+", "+baseColors.gray160+")",layerHover02:"light-dark("+baseColors.whiteHover+", "+baseColors.gray150+")",layerSelected02:"light-dark("+baseColors.gray30+", "+baseColors.gray140+")",layerSelectedHover02:"light-dark("+baseColors.gray40+", "+baseColors.gray130+")",layerAccent01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",layerAccentHover01:"light-dark("+baseColors.gray40+", "+baseColors.gray150+")",layerAccentSelected01:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",layerAccent02:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",layerAccentHover02:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",layerAccentSelected02:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",brandPrimary:"light-dark("+baseColors.red100+", "+baseColors.red100+")",borderPrimary:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",borderSecondary:"light-dark("+baseColors.gray110+", "+baseColors.gray90+")",borderSubtle:"light-dark("+baseColors.gray50+", "+baseColors.gray160+")",borderTertiary:"light-dark("+baseColors.blue150+", "+baseColors.blue100+")",borderDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",field01:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",fieldHover01:"light-dark("+baseColors.gray20+", "+baseColors.gray170+")",fieldActive01:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",field02:"light-dark("+baseColors.white+", "+baseColors.gray160+")",fieldHover02:"light-dark("+baseColors.whiteHover+", "+baseColors.gray150+")",fieldActive02:"light-dark("+baseColors.gray30+", "+baseColors.gray140+")",fieldDisabled:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",skeleton01:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",skeleton02:"light-dark("+baseColors.gray30+", "+baseColors.gray160+")",iconPrimary:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",iconSecondary:"light-dark("+baseColors.gray140+", "+baseColors.gray70+")",iconTertiary:"light-dark("+baseColors.blue150+", "+baseColors.gray10+")",iconInverse:"light-dark("+baseColors.white+", "+baseColors.gray200+")",iconOnColor:"light-dark("+baseColors.white+", "+baseColors.white+")",iconDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",iconSuccess:"light-dark("+baseColors.signalGreen100+", "+baseColors.signalGreen100+")",iconInfo:"light-dark("+baseColors.signalBlue100+", "+baseColors.signalBlue100+")",iconWarning:"light-dark("+baseColors.signalRed100+", "+baseColors.signalRed100+")",iconImportant:"light-dark("+baseColors.signalYellow100+", "+baseColors.signalYellow100+")",linkEnabled:"light-dark("+baseColors.blue120+", "+baseColors.blue70+")",linkHover:"light-dark("+baseColors.blue150+", "+baseColors.blue50+")",linkPressed:"light-dark("+baseColors.gray200+", "+baseColors.blue40+")",linkVisited:"light-dark("+baseColors.purple110+", "+baseColors.purple80+")",supportBorderSuccess:"light-dark("+baseColors.signalGreen100+", "+baseColors.signalGreen100+")",supportBorderInfo:"light-dark("+baseColors.signalBlue100+", "+baseColors.signalBlue100+")",supportBorderImportant:"light-dark("+baseColors.signalYellow100+", "+baseColors.signalYellow100+")",supportBorderWarning:"light-dark("+baseColors.signalRed100+", "+baseColors.signalRed100+")",supportBackgroundSuccess:"light-dark("+baseColors.signalGreen20+", "+baseColors.gray180+")",supportBackgroundSuccessHover:"light-dark("+baseColors.signalGreen30+", "+baseColors.gray170+")",supportBackgroundInfo:"light-dark("+baseColors.signalBlue10+", "+baseColors.gray180+")",supportBackgroundImportant:"light-dark("+baseColors.signalYellow10+", "+baseColors.gray180+")",supportBackgroundWarning:"light-dark("+baseColors.signalRed20+", "+baseColors.gray180+")",supportBackgroundWarningHover:"light-dark("+baseColors.signalRed30+", "+baseColors.gray170+")",textPrimary:"light-dark("+baseColors.gray200+", "+baseColors.gray10+")",textSecondary:"light-dark("+baseColors.gray140+", "+baseColors.gray70+")",textTertiary:"light-dark("+baseColors.blue150+", "+baseColors.gray10+")",textOnColor:"light-dark("+baseColors.white+", "+baseColors.white+")",textInverse:"light-dark("+baseColors.gray10+", "+baseColors.gray200+")",textDisabled:"light-dark("+baseColors.gray50+", "+baseColors.gray140+")",textWarning:"light-dark("+baseColors.signalRed100+", "+baseColors.signalRed80+")",textPlaceholder:"light-dark("+baseColors.gray70+", "+baseColors.gray140+")",buttonBackgroundPrimary:"light-dark("+baseColors.blue150+", "+baseColors.blue100+")",buttonBackgroundPrimaryHover:"light-dark("+baseColors.blue130+", "+baseColors.blue130+")",buttonBackgroundPrimaryActive:"light-dark("+baseColors.blue100+", "+baseColors.blue150+")",buttonBackgroundSecondary:"light-dark("+baseColors.white+", "+baseColors.gray200+")",buttonBackgroundSecondaryHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",buttonBackgroundSecondaryActive:"light-dark("+baseColors.gray30+", "+baseColors.gray180+")",buttonBackgroundTertiaryHover:"light-dark("+baseColors.whiteHover+", "+baseColors.gray190+")",buttonBackgroundTertiaryActive:"light-dark("+baseColors.gray30+", "+baseColors.gray180+")",buttonBackgroundDanger:"light-dark("+baseColors.signalRed100+", "+baseColors.signalRed100+")",buttonBackgroundDangerHover:"light-dark("+baseColors.signalRed120+", "+baseColors.signalRed120+")",buttonBackgroundDangerActive:"light-dark("+baseColors.signalRed150+", "+baseColors.signalRed150+")",buttonBackgroundDisabled:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",buttonBorderSecondary:"light-dark("+baseColors.blue150+", "+baseColors.gray10+")",buttonBackgroundIconHover:"light-dark(rgba(0 0 0 / 10%), rgba(255 255 255 / 10%))",buttonBackgroundIconActive:"light-dark(rgba(0 0 0 / 20%), rgba(255 255 255 / 20%))",badgeBackground:"light-dark("+baseColors.signalRed100+", "+baseColors.signalRed80+")",badgeLabel:"light-dark("+baseColors.white+", "+baseColors.black+")",calendarDateBackgroundHover:"light-dark(rgba(0 0 0 / 10%), rgba(255 255 255 / 10%))",calendarDateBackgroundSelected:"light-dark("+baseColors.blue150+", "+baseColors.blue80+")",calendarDateBackgroundStartRange:"light-dark("+baseColors.blue150+", "+baseColors.blue80+")",calendarDateBackgroundInRange:"light-dark("+baseColors.blue20+", "+baseColors.blue150+")",calendarDateBackgroundEndRange:"light-dark("+baseColors.blue150+", "+baseColors.blue80+")",logoPrimary:"light-dark("+baseColors.red100+", "+baseColors.white+")",menuItemBackgroundHover:"light-dark("+baseColors.gray20+", "+baseColors.gray190+")",menuItemBackgroundSelected:"light-dark("+baseColors.gray10+", "+baseColors.gray180+")",menuTextSectionHeader:"light-dark("+baseColors.blue120+", "+baseColors.blue80+")"};var zIndex={base:1,above:10,modal:1000,toast:1100,skipToContent:1200};var sizing={'00':'0',// 0px
'05':'0.063rem',// 1px
'10':'0.125rem',// 2px
'15':'0.188rem',// 3px
'20':'0.25rem',// 4px
'30':'0.375rem',// 6px
'40':'0.5rem',// 8px
'50':'0.625rem',// 10px
'60':'0.75rem',// 12px
'70':'0.875rem',// 14px
'75':'0.938rem',// 15px
'80':'1rem',// 16px
'90':'1.25rem',// 20px
'100':'1.5rem',// 24px
'110':'1.75rem',// 28px
'120':'2rem',// 32px
'130':'2.5rem',// 40px
'140':'2.75rem',// 44px
'150':'3rem'// 48px
};

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

/***/ 49936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ Radio),
  z: () => (/* binding */ RadioGroup)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./packages/components/src/radio/Radio.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Radio_module = ({"radioGroup":"radioGroup_EgZH","wrap":"wrap_R8gp","radio":"radio_U9gG"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/RadioGroup.mjs + 4 modules
var dist_RadioGroup = __webpack_require__(96325);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Group.mjs
var Group = __webpack_require__(63899);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(34704);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(19060);
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/radio/Radio.tsx
'use client';var _excluded=["label","description","errorMessage","children","className","errorPosition","popover"],_excluded2=["className"];/**
 * RadioGroup is used to group several radio items together
 */var RadioGroup=function RadioGroup(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,children=_ref.children,className=_ref.className,_ref$errorPosition=_ref.errorPosition,errorPosition=_ref$errorPosition===void 0?'top':_ref$errorPosition,popover=_ref.popover,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_RadioGroup/* RadioGroup */.z6,Object.assign({},props,{className:(0,clsx/* default */.A)(Radio_module.radioGroup,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapper/* LabelWrapper */.cR,{popover:popover,children:label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{children:label})}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:description}),errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",children:errorMessage}),/*#__PURE__*/(0,jsx_runtime.jsx)(Group/* Group */.Y,{className:Radio_module.wrap,children:children}),errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{"data-testid":"fieldError",children:errorMessage})]}));};var Radio=function Radio(_ref2){var className=_ref2.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_RadioGroup/* Radio */.sx,Object.assign({className:(0,clsx/* default */.A)(Radio_module.radio,className)},rest));};

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

/***/ 56392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ Logo)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/logo/Logo.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Logo_module = ({"container":"container_U3H4","noPadding":"noPadding__BF5","logo":"logo_GI7z","primary":"primary_TCiF","dark":"dark_F_Ks","xSmall":"xSmall_IZ4K","small":"small_KAZl","large":"large_iAB3"});
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/logo/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"logotype":"Logotype of the Swedish Migration Agency"},"sv":{"logotype":"Migrationsverkets logotyp"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/logo/Logo.tsx
var _excluded=["primary","size","padding","className"];var Logo=function Logo(_ref){var _ref$primary=_ref.primary,primary=_ref$primary===void 0?true:_ref$primary,_ref$size=_ref.size,size=_ref$size===void 0?'medium':_ref$size,_ref$padding=_ref.padding,padding=_ref$padding===void 0?true:_ref$padding,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames=(0,clsx/* default */.A)(Logo_module.logo,primary?Logo_module.primary:Logo_module.dark,size==='x-small'&&Logo_module.xSmall,size==='medium'&&Logo_module.medium,size==='large'&&Logo_module.large,size==='small'&&Logo_module.small);var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var SVG=function SVG(){if(size==='x-small')return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 92",className:classNames,role:"img","aria-hidden":"false",focusable:"false","aria-label":strings.format('logotype'),children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M99.99,91.69c-1.84-1.11-4.05-4.55-4.05-9.46V9.15c0-4.79,1.96-7.25,3.81-8.85h-14.75l-33.91,65.47L12.41.3H0c1.6,1.59,3.93,3.07,3.93,8.23v75.55c0,3.56-2.21,6.51-3.81,7.61h16.34c-1.72-1.22-3.93-4.18-3.93-7.98V25.97l36.24,61.42,33.04-63.26v58.96c0,5.53-2.21,7.61-3.81,8.6h21.99Z"})});return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 112 40",className:classNames,"aria-hidden":"false",focusable:"false","aria-label":strings.format('logotype'),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M97.78,21.61c-7.48-9.73-20.06-16.03-34.32-16.03-13.07,0-24.86,5.27-32.46,13.65,6.56-5.83,15.64-9.44,25.66-9.44,11.37,0,21.52,4.56,28.18,11.83h12.94Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M90.45,12.58C70.67-1.51,41.26,2.77,27.49,21.61h-12.23C30.56-2.89,68.29-7.47,90.45,12.58h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M11.89,37.13c-.22-.13-.48-.53-.48-1.11v-8.58c0-.56.23-.85.45-1.04h-1.73l-3.98,7.69-4.54-7.69H.15c.19.19.46.36.46.97v8.87c0,.42-.26.76-.45.89h1.92c-.2-.14-.46-.49-.46-.94v-6.78l4.25,7.21,3.88-7.43v6.92c0,.65-.26.89-.45,1.01h2.58Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M15.81,26.86c0-.45-.36-.81-.81-.81s-.81.36-.81.81.36.81.81.81.81-.36.81-.81h0ZM16.22,37.13c-.3-.23-.45-.5-.45-1.07v-6.4h-1.98c.37.19.49.58.49,1.17v5.23c0,.48-.09.79-.46,1.07h2.39Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M24.52,30.97c-.04-.33-.17-.68-.37-.95h-1.36c-.29-.26-.87-.58-1.96-.58-1.53,0-2.8.92-2.8,2.58,0,1.02.52,1.86,1.31,2.26-.43.37-1.38.98-1.38,1.61,0,.71.79.99,1.38,1.1-.88.26-1.67.82-1.67,1.59,0,1.14,1.73,1.41,2.64,1.41,1.54,0,3.91-.78,3.91-2.64,0-1.21-1.23-1.49-2.22-1.5-2.42-.06-2.51-.2-2.51-.56,0-.2.42-.68.55-.81.23.03.48.06.71.06,1.76,0,2.93-.94,2.93-2.7,0-.48-.14-.91-.29-1.11.12-.04.25-.04.37-.04.27,0,.55.12.76.27h0ZM22.27,32.21c0,.79-.37,1.61-1.36,1.61-1.07,0-1.47-1.21-1.47-2.09,0-.95.5-1.57,1.31-1.57,1.2,0,1.51,1.25,1.51,2.05h0ZM22.89,37.92c0,.76-.82,1.31-1.93,1.31-.59,0-1.7-.3-1.69-1.15,0-.45.26-.74.59-.99l1.96.04c.5.01,1.07.1,1.07.79h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M30.11,31.22l-.23-1.63c-.2-.1-.43-.14-.65-.14-.85,0-1.46.68-1.79,1.37v-1.15h-1.96c.45.27.48.76.48,1.14v5.19c0,.58-.1.89-.45,1.14h2.35c-.36-.29-.42-.63-.42-1.12v-4.27c.22-.58.78-1.04,1.43-1.04.46,0,.97.26,1.24.52h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M36.87,37.13c-.37-.33-.43-.59-.43-1.25v-3.89c0-2.21-1.43-2.55-2.8-2.55-.61,0-1.67.22-2.03.42-.2.4-.3,1.24-.4,1.67.46-.56,1.27-1.37,2.39-1.37,1.18,0,1.36.82,1.36,1.7v.39l-2.21.76c-1.04.36-1.87,1.08-1.87,2.26,0,1.31.88,2.08,2.15,2.08.87,0,1.46-.43,1.93-.94v.72h1.92ZM34.95,35.62c-.26.32-.74.85-1.37.85-.75,0-1.18-.79-1.18-1.54,0-.71.35-1.15.89-1.37l1.66-.63v2.7h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M42.58,36.15c-.29.27-.71.46-1.11.46-.87,0-1.07-.98-1.07-1.66v-4.51h.85c.43,0,.94.13,1.33.35l-.17-1.12h-2v-1.76c-.68.95-1.54,1.96-2.58,2.54h1.1v4.43c0,1.43.32,2.47,1.95,2.47.48,0,.98-.1,1.38-.36.14-.25.25-.55.33-.82h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M45.63,26.86c0-.45-.36-.81-.81-.81s-.81.36-.81.81.36.81.81.81.81-.36.81-.81h0ZM46.04,37.13c-.3-.23-.45-.5-.45-1.07v-6.4h-1.98c.37.19.49.58.49,1.17v5.23c0,.48-.09.79-.46,1.07h2.39Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M54.96,33.37c0-2.06-1.3-3.95-3.5-3.95s-3.84,1.76-3.84,4.01c0,2.06,1.28,3.95,3.49,3.95s3.85-1.76,3.85-4.01h0ZM53.43,34.04c0,1.27-.52,2.57-1.86,2.57-1.79,0-2.42-2.44-2.42-3.86,0-1.21.48-2.57,1.87-2.57,1.79,0,2.41,2.44,2.41,3.86h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M63.37,37.13c-.27-.22-.45-.42-.45-1.11v-3.94c0-1.63-.39-2.64-2.18-2.64-1.01,0-1.79.56-2.38,1.12v-.91h-1.98c.3.17.49.46.49,1.05v5.33c0,.59-.14.88-.48,1.08h2.39c-.23-.23-.43-.37-.43-1.17v-4.4c.32-.45,1.07-1.24,1.85-1.24,1.01,0,1.23,1.01,1.23,1.8v3.95c0,.74-.26.87-.46,1.05h2.39Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M69.79,35.2c0-2.21-3.42-2.71-3.42-4.07,0-.75.71-.98,1.34-.98s1.33.29,1.74.81l-.07-1.18c-.46-.17-1.11-.35-1.69-.35-1.44,0-2.68.63-2.68,1.89,0,2.36,3.46,2.68,3.46,4.25,0,.79-.62,1.05-1.31,1.05-1.01,0-1.86-.46-2.52-1.21v.1c0,.4-.03.99.3,1.27.53.43,1.53.56,2.18.56,1.36,0,2.67-.62,2.67-2.15h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M77.98,29.66h-1.43c.13.1.11.56-.19,1.33l-1.86,4.72-1.87-4.7c-.26-.65-.32-1.15-.16-1.34h-2.06c.19.1.49.85.82,1.67l2.31,5.8h1.31l2.35-5.97c.32-.81.56-1.36.78-1.5h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M84.91,33.54v-.23c0-1.92-.62-3.88-2.88-3.88s-3.56,2.02-3.56,4.11,1.41,3.81,3.58,3.81c.78,0,1.62-.17,2.13-.45.32-.35.49-.79.59-1.27-.69.5-1.41.84-2.31.84-1.49,0-2.35-1.57-2.38-2.88l4.83-.04h0ZM83.34,32.88c-1.1.09-2.16.1-3.27.1.01-.78.29-2.83,1.7-2.83,1.33,0,1.57,1.72,1.57,2.73h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M90.95,31.22l-.23-1.63c-.2-.1-.43-.14-.65-.14-.85,0-1.46.68-1.79,1.37v-1.15h-1.96c.45.27.48.76.48,1.14v5.19c0,.58-.1.89-.45,1.14h2.35c-.36-.29-.42-.63-.42-1.12v-4.27c.22-.58.78-1.04,1.43-1.04.46,0,.97.26,1.24.52h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M99.79,37.16c-2.26-.37-2.49-4.04-4.7-4.04l2.62-2.8c.22-.23.5-.48.75-.66h-1.77c.14.14.13.39-.13.66l-2.65,2.83v-7.07h-1.98c.33.2.49.56.49,1.01v9.01c0,.58-.22.81-.46,1.02h2.35c-.26-.25-.4-.49-.4-1.02v-2.57c.27,0,.62.13.82.26,1.28.82,1.95,3.11,2.67,3.45.14.07.94.1,1.14.1.45,0,.84-.03,1.25-.19h0Z"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M106.3,33.54v-.23c0-1.92-.62-3.88-2.88-3.88s-3.56,2.02-3.56,4.11,1.41,3.81,3.58,3.81c.78,0,1.62-.17,2.13-.45.32-.35.49-.79.59-1.27-.69.5-1.41.84-2.31.84-1.49,0-2.35-1.57-2.38-2.88l4.83-.04h0ZM104.73,32.88c-1.1.09-2.16.1-3.27.1.01-.78.29-2.83,1.7-2.83,1.33,0,1.57,1.72,1.57,2.73h0Z",fillRule:"evenodd"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M111.85,36.15c-.29.27-.71.46-1.11.46-.86,0-1.07-.98-1.07-1.66v-4.51h.85c.43,0,.94.13,1.33.35l-.17-1.12h-2v-1.76c-.68.95-1.54,1.96-2.58,2.54h1.1v4.43c0,1.43.32,2.47,1.95,2.47.48,0,.98-.1,1.38-.36.14-.25.25-.55.33-.82h0Z"})]});};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({className:(0,clsx/* default */.A)(Logo_module.container,padding===false&&Logo_module.noPadding,className)},rest,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(SVG,{})}));};

/***/ }),

/***/ 56636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
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

/***/ }),

/***/ 59560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ InfoBanner)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/common/icon-map.ts
var icon_map = __webpack_require__(7344);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
;// ./packages/components/src/info-banner/InfoBanner.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const InfoBanner_module = ({"infoBanner":"infoBanner_SGaB","success":"success_tp2_","info":"info_M4dU","important":"important_LJBl","warning":"warning_El6H","content":"content_DhUR","heading":"heading_iaBZ","text":"text_FCS8","icon":"icon_F71c","dismissable":"dismissable_tG9p"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/info-banner/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"close":"Close"},"sv":{"close":"Stäng"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/info-banner/InfoBanner.tsx
var _excluded=["title","message","type","children","isDismissable","defaultOpen","isOpen","onOpenChange"];/**
 * Displays a static message as an inline banner
 */var InfoBanner=function InfoBanner(_ref){var title=_ref.title,message=_ref.message,type=_ref.type,children=_ref.children,_ref$isDismissable=_ref.isDismissable,isDismissable=_ref$isDismissable===void 0?false:_ref$isDismissable,_ref$defaultOpen=_ref.defaultOpen,defaultOpen=_ref$defaultOpen===void 0?true:_ref$defaultOpen,controlledIsOpen=_ref.isOpen,onOpenChange=_ref.onOpenChange,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var isInitialRender=react.useRef(true);var isControlled=typeof controlledIsOpen!=='undefined';var _React$useState=react.useState(isControlled?controlledIsOpen:defaultOpen),isOpen=_React$useState[0],setIsOpen=_React$useState[1];var Icon=icon_map/* iconMap */.K[type];var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var handleClose=function handleClose(){onOpenChange==null||onOpenChange(false);if(!isControlled){setIsOpen(false);}};react.useEffect(function(){if(isInitialRender.current){isInitialRender.current=false;return;}setIsOpen(function(previousOpen){var isOpening=isControlled&&controlledIsOpen||!isControlled&&!previousOpen;if(isOpening){onOpenChange==null||onOpenChange(true);}return isOpening;});},[controlledIsOpen,isControlled,onOpenChange]);if(isOpen)return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({},rest,{className:(0,clsx/* default */.A)(InfoBanner_module.infoBanner,InfoBanner_module[type],rest.className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{size:20,"aria-hidden":true,className:InfoBanner_module.icon}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:InfoBanner_module.content,children:[title&&/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{className:InfoBanner_module.heading,children:title}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:InfoBanner_module.text,children:[message,children]})]}),isDismissable&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:InfoBanner_module.dismissable,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon","aria-label":strings.format('close'),onPress:handleClose,children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20})})})]}));return null;};

/***/ }),

/***/ 62497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ SearchField)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.js
var search = __webpack_require__(98445);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(73413);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
;// ./packages/components/src/search-field/SearchField.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SearchField_module = ({"container":"container_o5YK","inner":"inner_lbDs","inputContainer":"inputContainer_hVqH","medium":"medium_sM7f","icon":"icon_KMPT","clear":"clear_cC1p","input":"input_Z0RI"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-stately/searchfield/dist/useSearchFieldState.mjs
var useSearchFieldState = __webpack_require__(7633);
// EXTERNAL MODULE: ./node_modules/@react-aria/searchfield/dist/useSearchField.mjs + 35 modules
var useSearchField = __webpack_require__(46243);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var FieldError = __webpack_require__(19060);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
;// ./packages/components/src/search-field/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"search":"Search"},"sv":{"search":"Sök"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/search-field/SearchField.tsx
'use client';var _excluded=["errorPosition","size"];function isValidationError(error){return!!(error!=null&&error.length);}var SearchField=function SearchField(_ref){var _props$errorMessage,_clsx,_clsx2,_clsx3,_props$errorMessage2;var _ref$errorPosition=_ref.errorPosition,errorPosition=_ref$errorPosition===void 0?'top':_ref$errorPosition,_ref$size=_ref.size,size=_ref$size===void 0?'large':_ref$size,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _useSearchFieldState=(0,useSearchFieldState/* useSearchFieldState */.V)(props),value=_useSearchFieldState.value,setValue=_useSearchFieldState.setValue;var strings=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var ref=react.useRef(null);var _useSearchField=(0,useSearchField/* useSearchField */.Q)(Object.assign({},props,{label:props.placeholder,validationBehavior:'native'}),{value:value,setValue:setValue},ref),inputProps=_useSearchField.inputProps,isInvalid=_useSearchField.isInvalid,validationErrors=_useSearchField.validationErrors,clearButtonProps=_useSearchField.clearButtonProps;var handleChange=function handleChange(_ref2){var target=_ref2.target;return setValue(target.value);};var handleClear=function handleClear(){return setValue('');};var handleSubmit=function handleSubmit(){var reFocus=props.validate&&isValidationError(props.validate(value))||isInvalid||!value;if(reFocus){var _ref$current;(_ref$current=ref.current)==null||_ref$current.focus();return;}if(props.onSubmit){props.onSubmit(value);}};var handleKeyDown=function handleKeyDown(_ref3){var key=_ref3.key;if(key==='Enter'){handleSubmit();}};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(SearchField_module.container,props.className),"data-disabled":inputProps.disabled,children:[errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{isInvalid:isInvalid,children:(_props$errorMessage=props.errorMessage)!=null?_props$errorMessage:validationErrors.join(' ')}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:SearchField_module.inner,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(SearchField_module.inputContainer,(_clsx={},_clsx[SearchField_module.medium]=size==='medium',_clsx)),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(search/* default */.A,{size:20,className:SearchField_module.icon}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",Object.assign({},inputProps,inputProps.disabled&&{'data-disabled':true},{className:(0,clsx/* default */.A)(TextField_module/* default */.A.input,SearchField_module.input,inputProps.className,(_clsx2={},_clsx2[SearchField_module.medium]=size==='medium',_clsx2)),ref:ref,onChange:handleChange,value:value,"aria-invalid":isInvalid,onKeyDown:handleKeyDown,"aria-label":props.placeholder,"aria-labelledby":""})),value.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,Object.assign({variant:"icon",size:size,className:(0,clsx/* default */.A)(SearchField_module.clear,(_clsx3={},_clsx3[SearchField_module.medium]=size==='medium',_clsx3)),onPress:handleClear},clearButtonProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})}))]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{size:size,isDisabled:props.isDisabled,excludeFromTabOrder:true,onPress:handleSubmit,type:"button",children:props.buttonText?props.buttonText:strings.format('search')})]}),errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{isInvalid:isInvalid,children:(_props$errorMessage2=props.errorMessage)!=null?_props$errorMessage2:validationErrors.join(' ')})]});};

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

/***/ 70847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ Breadcrumbs)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Breadcrumbs.mjs + 36 modules
var dist_Breadcrumbs = __webpack_require__(57214);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var Link = __webpack_require__(25441);
;// ./packages/components/src/breadcrumbs/Breadcrumbs.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Breadcrumbs_module = ({"container":"container_QqG_"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/breadcrumbs/Breadcrumbs.tsx
var _excluded=["items","className"];var Breadcrumbs=function Breadcrumbs(_ref){var items=_ref.items,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Breadcrumbs/* Breadcrumbs */.BI,Object.assign({className:(0,clsx/* default */.A)(Breadcrumbs_module.container,className)},rest,{children:items.map(function(_ref2,index){var title=_ref2.title,href=_ref2.href,isDisabled=_ref2.isDisabled;return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Breadcrumbs/* Breadcrumb */.Qp,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* Link */.N,{href:href,isDisabled:isDisabled,children:title})},title.toLocaleLowerCase()+index);})}));};

/***/ }),

/***/ 71034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ TextArea)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _TextFieldBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39107);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43660);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34164);
/* harmony import */ var _TextField_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73413);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["className","form","rows","wrap"];var TextArea=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_ref,ref){var className=_ref.className,form=_ref.form,rows=_ref.rows,wrap=_ref.wrap,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextFieldBase__WEBPACK_IMPORTED_MODULE_4__/* .TextFieldBase */ .J,Object.assign({},rest,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_5__/* .TextArea */ .f,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.textArea,className),form:form,ref:ref,rows:rows,wrap:wrap})}));});

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

/***/ 74351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38739);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","isContained","removeMargins"];/**
 * Grid based on display: flex;
 * Calculates breakpoints and distributes columns according to MV specifications
 *
 * ### Children
 * Use GridItem to manage each column.
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/grid}
 */var Grid=function Grid(_ref){var children=_ref.children,_ref$isContained=_ref.isContained,isContained=_ref$isContained===void 0?false:_ref$isContained,_ref$removeMargins=_ref.removeMargins,removeMargins=_ref$removeMargins===void 0?false:_ref$removeMargins,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({},rest,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.container,isContained&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.contained,removeMargins&&_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.removeMargins,rest.className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.flex,children:children})}));};

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

/***/ 75394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ CheckboxGroup)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/checkbox/dist/useCheckboxGroup.mjs
var useCheckboxGroup = __webpack_require__(91936);
// EXTERNAL MODULE: ./node_modules/@react-stately/checkbox/dist/useCheckboxGroupState.mjs
var useCheckboxGroupState = __webpack_require__(34650);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(34704);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/components/src/utils/intl/useLocalizedStringFormatter.ts
var useLocalizedStringFormatter = __webpack_require__(88413);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx + 3 modules
var Checkbox = __webpack_require__(8807);
;// ./packages/components/src/checkbox/useSelectAll.ts
var useSelectAll=function useSelectAll(children,_ref){var selectedItems=_ref.value;var checkboxes=react.Children.toArray(children).filter(function(child){return/*#__PURE__*/react.isValidElement(child)&&child.type===Checkbox/* Checkbox */.S;});var numberOfCheckboxes=react.Children.count(checkboxes);var checkboxValues=react.Children.toArray(children).filter(function(child){return/*#__PURE__*/react.isValidElement(child);}).filter(function(child){return!!child&&child.type===Checkbox/* Checkbox */.S;}).map(function(child){return child.props.value;});var noneSelected=selectedItems.length===0;var allSelected=selectedItems.length===numberOfCheckboxes;var someSelected=!noneSelected&&!allSelected;return{allSelected:allSelected,someSelected:someSelected,checkboxValues:checkboxValues};};
// EXTERNAL MODULE: ./packages/components/src/checkbox/context.ts
var context = __webpack_require__(20011);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./packages/components/src/field-error/FieldError.tsx + 1 modules
var field_error_FieldError = __webpack_require__(19060);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/checkbox/CheckboxGroupFieldError.tsx
var CheckboxGroupFieldError=function CheckboxGroupFieldError(_ref){var state=_ref.state,errorMessage=_ref.errorMessage;return/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldErrorContext */.C.Provider,{value:state.displayValidation,children:/*#__PURE__*/(0,jsx_runtime.jsx)(field_error_FieldError/* FieldError */.b,{children:errorMessage})});};
;// ./packages/components/src/checkbox/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"selectAll":"Select all"},"sv":{"selectAll":"Välj alla"}}');
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.module.css
var Checkbox_module = __webpack_require__(16025);
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
;// ./packages/components/src/checkbox/CheckboxGroup.tsx
function CheckboxGroup(props){var state=(0,useCheckboxGroupState/* useCheckboxGroupState */.h)(props);var stringFormatter=(0,useLocalizedStringFormatter/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);var _useCheckboxGroup=(0,useCheckboxGroup/* useCheckboxGroup */.M)(props,state),groupProps=_useCheckboxGroup.groupProps,labelProps=_useCheckboxGroup.labelProps,descriptionProps=_useCheckboxGroup.descriptionProps;var _useSelectAll=useSelectAll(props.children,state),allSelected=_useSelectAll.allSelected,someSelected=_useSelectAll.someSelected,checkboxValues=_useSelectAll.checkboxValues;var handleChange=function handleChange(checked){state.setValue(checked?checkboxValues:[]);};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({},groupProps,{className:Checkbox_module/* default */.A.checkboxGroup,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapper/* LabelWrapper */.cR,{popover:props.popover,children:props.label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,Object.assign({},labelProps,{children:props.label}))}),props.description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,Object.assign({slot:"description"},descriptionProps,{children:props.description})),props.errorPosition==='top'&&/*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxGroupFieldError,Object.assign({},props,{state:state})),props.showSelectAll&&/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{isSelected:allSelected,isIndeterminate:someSelected,onChange:handleChange,children:props.selectAllLabel||stringFormatter.format('selectAll')}),/*#__PURE__*/(0,jsx_runtime.jsx)(context/* CheckboxGroupContext */.I.Provider,{value:state,children:props.children}),props.errorPosition==='bottom'&&/*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxGroupFieldError,Object.assign({},props,{state:state}))]}));}

/***/ }),

/***/ 86544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Zp: () => (/* binding */ Card),
  s$: () => (/* binding */ CardActionArea),
  w: () => (/* binding */ CardActions),
  Wu: () => (/* binding */ CardContent),
  MH: () => (/* binding */ CardImage),
  hB: () => (/* binding */ CardLink),
  ZB: () => (/* binding */ CardTitle)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/card/Card.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Card_module = ({"card":"card_Ssoo","horizontal":"horizontal_p4Mn","cardLink":"cardLink_gsBo","cardContent":"cardContent_JE5V","cardActions":"cardActions_HxzH","cardActionArea":"cardActionArea_re2y","cardImage":"cardImage_BIZa","cardLinkIcon":"cardLinkIcon_av9l"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(93683);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs
var Button = __webpack_require__(65014);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Link.mjs + 1 modules
var Link = __webpack_require__(73099);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-right.js
var arrow_right = __webpack_require__(48635);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/card/Card.tsx
var _excluded=["horizontal","className","children"],_excluded2=["children"],_excluded3=["children"],_excluded4=["children","className"],_excluded5=["as","className"],_excluded6=["children","as"];var CardContext=/*#__PURE__*/react.createContext({horizontal:undefined,titleId:undefined});var Card=function Card(_ref){var horizontal=_ref.horizontal,className=_ref.className,children=_ref.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var id=react.useId();var titleId="card-title-"+id;return/*#__PURE__*/(0,jsx_runtime.jsx)(CardContext.Provider,{value:{horizontal:horizontal,titleId:titleId},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},rest,{className:(0,clsx/* default */.A)(Card_module.card,horizontal&&Card_module.horizontal,className),children:children}))});};var CardContent=function CardContent(_ref2){var children=_ref2.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);var _React$useContext=react.useContext(CardContext),horizontal=_React$useContext.horizontal;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},rest,{className:(0,clsx/* default */.A)(Card_module.cardContent,horizontal&&Card_module.horizontal),children:children}));};var CardTitle=function CardTitle(_ref3){var _ref3$elementType=_ref3.elementType,elementType=_ref3$elementType===void 0?'h2':_ref3$elementType,children=_ref3.children;var _React$useContext2=react.useContext(CardContext),horizontal=_React$useContext2.horizontal,titleId=_React$useContext2.titleId;return/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{level:horizontal?5:3,elementType:elementType,isExpressive:horizontal,className:(0,clsx/* default */.A)(Card_module.cardTitle,horizontal&&Card_module.horizontal),id:titleId,children:children});};var CardActions=function CardActions(_ref4){var children=_ref4.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref4,_excluded3);var _React$useContext3=react.useContext(CardContext),horizontal=_React$useContext3.horizontal;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},rest,{className:(0,clsx/* default */.A)(Card_module.cardActions,horizontal&&Card_module.horizontal),children:children}));};var CardActionArea=function CardActionArea(_ref5){var children=_ref5.children,className=_ref5.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref5,_excluded4);var _React$useContext4=react.useContext(CardContext),titleId=_React$useContext4.titleId;return/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,Object.assign({},rest,{"aria-labelledby":titleId,className:(0,clsx/* default */.A)(Card_module.cardActionArea,className),children:children}));};var CardImage=function CardImage(_ref6){var _ref6$as=_ref6.as,ImageComponent=_ref6$as===void 0?'img':_ref6$as,className=_ref6.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref6,_excluded5);return/*#__PURE__*/(0,jsx_runtime.jsx)(ImageComponent,Object.assign({},rest,{className:(0,clsx/* default */.A)(Card_module.cardImage,className)}));};var CardLink=function CardLink(_ref7){var children=_ref7.children,as=_ref7.as,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref7,_excluded6);var Component=as||Link/* Link */.N;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Component,Object.assign({},rest,{className:(0,clsx/* default */.A)(Card_module.cardLink,rest.className),children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_right/* default */.A,{className:Card_module.cardLinkIcon,size:24})]}));};

/***/ }),

/***/ 86707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"button":"button_RcXK","secondary":"secondary_h5I_","tertiary":"tertiary_xq7E","iconBtn":"iconBtn__8qK","medium":"medium_uqO9","danger":"danger_iFp6","iconRight":"iconRight_iW1e","fullwidth":"fullwidth_WWNT","primary":"primary_JNNk"});

/***/ }),

/***/ 88205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ChangelogList)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
var metadataUtils = __webpack_require__(45500);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(17559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js + 6 modules
var BlogLayout = __webpack_require__(28027);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogListPaginator/index.js
var BlogListPaginator = __webpack_require__(47713);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItems/index.js
var BlogPostItems = __webpack_require__(33892);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(41463);
// EXTERNAL MODULE: ./apps/docs/src/plugins/changelog/theme/ChangelogItem/index.tsx + 8 modules
var ChangelogItem = __webpack_require__(16388);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28774);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(51107);
;// ./apps/docs/src/plugins/changelog/theme/ChangelogList/Header/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"rss":"rss_ox3n","x":"x_UvX4"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./apps/docs/src/plugins/changelog/theme/ChangelogList/Header/index.tsx
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function RssLink(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{href:"pathname:///changelog/rss.xml",className:styles_module.rss,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"changelog.description.rssLink",children:"RSS feeds"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{style:{fill:'#f26522',position:'relative',left:4,top:1,marginRight:8},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"})})]});}function ChangelogListHeader(_ref){var blogTitle=_ref.blogTitle;return/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{className:"margin-bottom--lg",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",style:{fontSize:'3rem'},children:blogTitle}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"changelog.description",values:{rssLink:/*#__PURE__*/(0,jsx_runtime.jsx)(RssLink,{})},children:'Subscribe through {rssLink} to stay up-to-date with new releases!'})})]});}
;// ./apps/docs/src/plugins/changelog/theme/ChangelogList/index.tsx
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ChangelogListMetadata(props){var metadata=props.metadata;var blogTitle=metadata.blogTitle,blogDescription=metadata.blogDescription;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{title:blogTitle,description:blogDescription}),/*#__PURE__*/(0,jsx_runtime.jsx)(SearchMetadata/* default */.A,{tag:"blog_posts_list"})]});}function ChangelogListContent(props){var metadata=props.metadata,items=props.items,sidebar=props.sidebar;var blogTitle=metadata.blogTitle;return/*#__PURE__*/(0,jsx_runtime.jsxs)(BlogLayout/* default */.A,{sidebar:sidebar,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ChangelogListHeader,{blogTitle:blogTitle}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItems/* default */.A,{items:items,component:ChangelogItem/* default */.A}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogListPaginator/* default */.A,{metadata:metadata})]});}function ChangelogList(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.e3,{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.wrapper.blogPages,ThemeClassNames/* ThemeClassNames */.G.page.blogListPage),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ChangelogListMetadata,Object.assign({},props)),/*#__PURE__*/(0,jsx_runtime.jsx)(ChangelogListContent,Object.assign({},props))]});}

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

/***/ 93075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container_eqN_","list":"list_hLP_","listItem":"listItem_P0Ws","panel":"panel_Geh5"});

/***/ }),

/***/ 93509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ Tooltip_Tooltip),
  k: () => (/* binding */ TooltipTrigger)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/tooltip/Tooltip.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tooltip_module = ({"tooltip":"tooltip_L2zx","arrow":"arrow_bl7N"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Tooltip.mjs + 4 modules
var Tooltip = __webpack_require__(9741);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(45745);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/tooltip/Tooltip.tsx
var _excluded=["children","className"],_excluded2=["children","delay"];function Tooltip_Tooltip(_ref){var children=_ref.children,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Tooltip/* Tooltip */.m_,Object.assign({className:(0,clsx/* default */.A)(Tooltip_module.tooltip,className)},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Tooltip_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:8,height:8,viewBox:"0 0 8 8",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L4 4 L8 0"})})}),children]}));}function TooltipTrigger(_ref2){var children=_ref2.children,_ref2$delay=_ref2.delay,delay=_ref2$delay===void 0?0:_ref2$delay,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* TooltipTrigger */.k$,Object.assign({delay:delay},props,{children:children}));}

/***/ }),

/***/ 93574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ GridItem)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38739);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["children","size","offset"];/**
 * Columns based on display: flex;
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */var GridItem=function GridItem(_ref){var children=_ref.children,size=_ref.size,offset=_ref.offset,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var offsetClass=offset?"offset-"+offset:'';var sizeClasses=getSizeClasses(size);var offsetClasses=getOffsetClasses(offset);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({},props,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.col,_Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[offsetClass],sizeClasses.map(function(cls){return _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[cls];}),offsetClasses.map(function(cls){return _Grid_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[cls];}),props.className),children:children}));};var getSizeClasses=function getSizeClasses(size){if(!size)return[];if(typeof size==='object'){return Object.entries(size).map(function(_ref2){var breakpoint=_ref2[0],value=_ref2[1];return breakpoint==='xs'?"col-"+value:"col-"+breakpoint+"-"+value;});}return["col-"+size];};var getOffsetClasses=function getOffsetClasses(offset){if(!offset)return[];if(typeof offset==='object'){return Object.entries(offset).map(function(_ref3){var breakpoint=_ref3[0],value=_ref3[1];return breakpoint==='xs'?"offset-"+value:"offset-"+breakpoint+"-"+value;});}return["offset-"+offset];};

/***/ }),

/***/ 93683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ Heading)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Heading.mjs
var dist_Heading = __webpack_require__(57936);
;// ./packages/components/src/heading/Heading.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Heading_module = ({"h1":"h1_fQIH","h2":"h2_fBmz","h3":"h3_xOF5","h4":"h4_AF6p","h5":"h5_slY8","h6":"h6_loS0"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/heading/Heading.tsx
var _excluded=["children","className","isExpressive","level","elementType"];var Heading=function Heading(_ref){var children=_ref.children,className=_ref.className,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$level=_ref.level,level=_ref$level===void 0?3:_ref$level,elementType=_ref.elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var semanticLevel=elementType&&parseInt(elementType.split('h')[1]);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Heading/* Heading */.D,Object.assign({level:semanticLevel||level,className:(0,clsx/* default */.A)([Heading_module.h1,Heading_module.h2,Heading_module.h3,Heading_module.h4,Heading_module.h5,Heading_module.h6][level-1],className)},isExpressive&&{'data-expressive':true},rest,{children:children}));};

/***/ }),

/***/ 93777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccordionItem)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./packages/components/src/common/icon-map.ts
var icon_map = __webpack_require__(7344);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Disclosure.mjs + 3 modules
var Disclosure = __webpack_require__(48569);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/accordion/AccordionItem.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const AccordionItem_module = ({"item":"item_VttG","contained":"contained_ub98","success":"success_cpFV","warning":"warning_NxFE","info":"info_suK1","important":"important_n_K6","triggerButton":"triggerButton_En7k","triggerText":"triggerText_VvwO","trigger":"trigger_dCCq","triggerMainContent":"triggerMainContent_WoSV","chevronIcon":"chevronIcon_kSND","statusIcon":"statusIcon_DtWQ","panel":"panel_RCRU","content":"content_EuZw","hasBackground":"hasBackground_E4qK","header":"header_kp5y"});
// EXTERNAL MODULE: ./packages/components/src/heading/Heading.tsx + 1 modules
var Heading = __webpack_require__(93683);
// EXTERNAL MODULE: ./packages/components/src/accordion/AccordionContext.ts
var AccordionContext = __webpack_require__(45644);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/accordion/AccordionItem.tsx
var _excluded=["title","children","className","headingLevel","type","hasBackground","isContained"];var AccordionItem=function AccordionItem(_ref){var _ref2;var title=_ref.title,children=_ref.children,className=_ref.className,_ref$headingLevel=_ref.headingLevel,headingLevel=_ref$headingLevel===void 0?'h2':_ref$headingLevel,type=_ref.type,_ref$hasBackground=_ref.hasBackground,hasBackground=_ref$hasBackground===void 0?true:_ref$hasBackground,isContainedFromProp=_ref.isContained,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var context=(0,react.useContext)(AccordionContext/* AccordionContext */.C);var isContained=(_ref2=isContainedFromProp!=null?isContainedFromProp:context==null?void 0:context.isContained)!=null?_ref2:false;var titleIsReactNode=typeof title==='object';(0,react.useEffect)(function(){if(type&&!isContained){console.warn("AccordionItem: When 'type' is set, it is recommended to also set 'isContained' to true for visual consistency.");}},[type,isContained]);var Icon=type?icon_map/* iconMap */.K[type]:null;var renderedIcon=Icon?/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{size:20,className:AccordionItem_module.statusIcon}):null;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Disclosure/* Disclosure */.EN,Object.assign({},props,{className:(0,clsx/* default */.A)(AccordionItem_module.item,type&&AccordionItem_module[type],isContained&&AccordionItem_module.contained,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:AccordionItem_module.trigger,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* Button */.$,{className:AccordionItem_module.triggerButton,slot:"trigger",variant:"icon",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20,className:AccordionItem_module.chevronIcon}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:AccordionItem_module.triggerMainContent,children:titleIsReactNode?title:/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{level:3,elementType:headingLevel,className:AccordionItem_module.triggerText,children:title})}),renderedIcon]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Disclosure/* DisclosurePanel */.kS,{className:AccordionItem_module.panel,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(AccordionItem_module.content,hasBackground&&AccordionItem_module.hasBackground),children:children})})]}));};

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