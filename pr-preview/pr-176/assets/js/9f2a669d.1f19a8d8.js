"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4230],{

/***/ 49529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_12_mdx_9f2_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_release_12_mdx_9f2_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44662);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28453);
/* harmony import */ var _midas_ds_combobox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48517);
/* harmony import */ var _midas_ds_date_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56657);
/* harmony import */ var _midas_ds_info_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28778);
/* harmony import */ var _midas_ds_search_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91725);
/* harmony import */ var _site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29511);


const frontMatter = {
	title: 'Release 12',
	description: '.',
	slug: 'release-12',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [],
};

/*truncate*/







const toc = [{
  "value": "Ny komponent: ComboBox",
  "id": "ny-komponent-combobox",
  "level": 2
}, {
  "value": "Ny komponent: DatePicker",
  "id": "ny-komponent-datepicker",
  "level": 2
}, {
  "value": "Refactor av inmatningskomponenter",
  "id": "refactor-av-inmatningskomponenter",
  "level": 2
}, {
  "value": "InfoBanner kan nu stängas",
  "id": "infobanner-kan-nu-stängas",
  "level": 2
}, {
  "value": "SearchField har nu rätt props",
  "id": "searchfield-har-nu-rätt-props",
  "level": 2
}, {
  "value": "Kodexempel i Storybook",
  "id": "kodexempel-i-storybook",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Nedan är en sammanfattning av nyheterna i release 12. Med denna release går Designsystemet över från kontinuerliga uppdateringar till att släppa en release varannan vecka."
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "ny-komponent-combobox",
      children: "Ny komponent: ComboBox"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "ComboBox är ett alternativ till Select som lämpar sig bra när listan har fler än runt 10 val. Användaren kan då filtrera listan genom att skriva i fältet."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      scope: {
        ComboBox: _midas_ds_combobox__WEBPACK_IMPORTED_MODULE_2__/* .ComboBox */ .a,
        ComboBoxItem: _midas_ds_combobox__WEBPACK_IMPORTED_MODULE_2__/* .ComboBoxItem */ .x
      },
      children: `<ComboBox
  label="Vad är din favoritfrukt?"
  placeholder="Välj en frukt"
  items={fruits.map(fruit => {return {id: fruit.value, name: fruit.name}})}
>
  {(item) => <ComboBoxItem>{item.name}</ComboBoxItem>}
</ComboBox>`
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "ny-komponent-datepicker",
      children: "Ny komponent: DatePicker"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["DatePicker har delats upp i två komponenter: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "DatePicker"
      }), " och ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "DateRangePicker"
      }), ". Om du använde DatePicker innan behöver du troligtvis byta namn till ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "DateRangePicker"
      }), ".\nDatePicker används för att välja ett (1) datum, DateRangePicker för att välja flera datum i ett intervall."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      scope: {
        DatePicker: _midas_ds_date_picker__WEBPACK_IMPORTED_MODULE_3__/* .DatePicker */ .l
      },
      children: `<DatePicker label="Välj datum" />`
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "refactor-av-inmatningskomponenter",
      children: "Refactor av inmatningskomponenter"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Samtliga inmatningskomponenter har uppdaterats med en wrapper för etikett, hjälptext och validering."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "infobanner-kan-nu-stängas",
      children: "InfoBanner kan nu stängas"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Vi har lagt till en property som ger användaren möjlighet att stänga en InfoBanner. Standardbeteende är att InfoBanner inte kan stängas."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      scope: {
        InfoBanner: _midas_ds_info_banner__WEBPACK_IMPORTED_MODULE_4__/* .InfoBanner */ .z
      },
      children: `<InfoBanner
dismissable
message="Ditt formulär skickades korrekt."
title="Tack!"
type="success"
/>`
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "searchfield-har-nu-rätt-props",
      children: "SearchField har nu rätt props"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Ett tidigare fel gjorde att inga props kunde passas till SearchField. Nu är det rättat!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      scope: {
        SearchField: _midas_ds_search_field__WEBPACK_IMPORTED_MODULE_5__/* .SearchField */ .L
      },
      children: `<SearchField placeholder="Sök..." />`
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "kodexempel-i-storybook",
      children: "Kodexempel i Storybook"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Vi har börjat med en sektion i Storybook där vi samlar exempel på layouter med flera komponenter."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__/* .useMDXComponents */ .R)(),
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

/***/ 48517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* reexport */ ComboBox_ComboBox),
  x: () => (/* reexport */ ComboBoxItem)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/combobox/src/lib/ComboBox.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ComboBox_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","black":"#000000","signalRed130":"#b31b1b","smBreakpoint":"(max-width: 767px)","gray50":"#bfbfbf","gray20":"#e6e6e6","gray10":"#f2f2f2","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","backgroundSecondary":"#f2f2f2","input":"input_gDb3","combobox":"combobox_rehA","text":"text_A7Tx","wrap":"wrap_UCxY","button":"button_teGE","icon":"icon_DT7M","popover":"popover_qr5d","fieldError":"fieldError_secg","listBoxItem":"listBoxItem_fgbv"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ComboBox.mjs + 37 modules
var ComboBox = __webpack_require__(20050);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs + 1 modules
var Button = __webpack_require__(44080);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 44 modules
var Popover = __webpack_require__(86351);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ListBox.mjs + 5 modules
var ListBox = __webpack_require__(79046);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/combobox/src/lib/ComboBox.tsx
'use client';var _excluded=["label","description","errorMessage","children","items"];function ComboBox_ComboBox(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,children=_ref.children,items=_ref.items,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var ref=react.useRef(null);return/*#__PURE__*/(0,jsx_runtime.jsxs)(ComboBox/* ComboBox */.a3,Object.assign({className:ComboBox_module.combobox,ref:ref},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(src/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:ComboBox_module.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,{className:ComboBox_module.input}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{className:ComboBox_module.button,"aria-label":"Visa lista",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:ComboBox_module.icon,"aria-hidden":"true",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20,"aria-hidden":true})})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{className:ComboBox_module.popover,offset:0,UNSTABLE_portalContainer:ref.current||undefined,children:/*#__PURE__*/(0,jsx_runtime.jsx)(ListBox/* ListBox */.qF,{items:items,children:children})})]}));}function ComboBoxItem(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(ListBox/* ListBoxItem */.nh,Object.assign({className:ComboBox_module.listBoxItem},props));}
;// ./packages/combobox/src/index.ts


/***/ }),

/***/ 56657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* reexport */ DatePicker),
  U: () => (/* reexport */ DateRangePicker)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/DatePicker.mjs + 4 modules
var dist_DatePicker = __webpack_require__(98013);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Group.mjs
var Group = __webpack_require__(63899);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/DateField.mjs + 42 modules
var DateField = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs + 1 modules
var Button = __webpack_require__(44080);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 44 modules
var Popover = __webpack_require__(86351);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 3 modules
var Dialog = __webpack_require__(17772);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Calendar.mjs + 44 modules
var Calendar = __webpack_require__(88519);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Heading.mjs
var Heading = __webpack_require__(57936);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar-days.js
var calendar_days = __webpack_require__(93347);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(60250);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(87677);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
;// ./packages/date-picker/src/lib/DatePicker.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DatePicker_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","black":"#000000","gray10":"#f2f2f2","gray20":"#e6e6e6","gray60":"#b3b3b3","gray150":"#1f1f1f","blue20":"#d5e5ed","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","blue150":"#143c50","datePicker":"datePicker_o9AA","datePickerTextfield":"datePickerTextfield_Ugf1","date":"date_HzvK","dialog":"dialog_M74H","dialogHeader":"dialogHeader_Pvcw","dialogHeading":"dialogHeading_lDjb","day":"day_x9rH","calendar":"calendar_Bnb1"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/date-picker/src/lib/DatePicker.tsx
'use client';var _excluded=["label","description","errorMessage"],_excluded2=["label","description","errorMessage"];var DateRangePicker=function DateRangePicker(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var ref=react.useRef(null);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_DatePicker/* DateRangePicker */.Ur,Object.assign({},props,{className:(0,clsx/* clsx */.$)(src/* TextFieldStyles */.Ql.inputField,DatePicker_module.datePicker,props.className),ref:ref,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Group/* Group */.Y,{className:(0,clsx/* clsx */.$)(src/* TextFieldStyles */.Ql.input,DatePicker_module.datePickerTextfield),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateInput */.J3,{slot:"start",className:DatePicker_module.date,children:function children(segment){return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateSegment */.Eu,{className:DatePicker_module.dateSegment,segment:segment});}}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",children:"-"}),/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateInput */.J3,{slot:"end",className:DatePicker_module.date,children:function children(segment){return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateSegment */.Eu,{segment:segment,className:DatePicker_module.dateSegment});}}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_days/* default */.A,{size:20,"aria-hidden":true})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{UNSTABLE_portalContainer:ref.current||undefined,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Dialog/* Dialog */.lG,{className:DatePicker_module.dialog,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Calendar/* RangeCalendar */._e,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{className:DatePicker_module.dialogHeader,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"previous",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_left/* default */.A,{size:20,"aria-hidden":true})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{className:DatePicker_module.dialogHeading}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"next",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{size:20,"aria-hidden":true})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar/* CalendarGrid */.r8,{className:DatePicker_module.calendar,children:function children(date){return/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar/* CalendarCell */.Zr,{date:date,className:DatePicker_module.day});}})]})})})]})}));};var DatePicker=function DatePicker(_ref2){var label=_ref2.label,description=_ref2.description,errorMessage=_ref2.errorMessage,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);var ref=react.useRef(null);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_DatePicker/* DatePicker */.lr,Object.assign({},props,{className:(0,clsx/* clsx */.$)(src/* TextFieldStyles */.Ql.inputField,DatePicker_module.datePicker,props.className),ref:ref,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Group/* Group */.Y,{className:(0,clsx/* clsx */.$)(src/* TextFieldStyles */.Ql.input,DatePicker_module.datePickerTextfield),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateInput */.J3,{className:DatePicker_module.date,children:function children(segment){return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateSegment */.Eu,{segment:segment,className:DatePicker_module.dateSegment});}}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_days/* default */.A,{size:20,"aria-hidden":true})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{UNSTABLE_portalContainer:ref.current||undefined,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Dialog/* Dialog */.lG,{className:DatePicker_module.dialog,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Calendar/* Calendar */.Vv,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{className:DatePicker_module.dialogHeader,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"previous",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_left/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{className:DatePicker_module.dialogHeading}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"next",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar/* CalendarGrid */.r8,{className:DatePicker_module.calendar,children:function children(date){return/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar/* CalendarCell */.Zr,{date:date,className:DatePicker_module.day});}})]})})})]})}));};
;// ./packages/date-picker/src/index.ts


/***/ }),

/***/ 28778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* reexport */ InfoBanner)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
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
;// ./packages/info-banner/src/lib/InfoBanner.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const InfoBanner_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","signalGreen10":"#d5f2d9","signalGreen100":"#008d3c","signalBlue10":"#eaf2f6","signalBlue100":"#0066cc","signalYellow10":"#fff8e1","signalYellow100":"#f1c21b","signalRed10":"#ffdfdf","signalRed100":"#e62323","black":"#000000","semiBoldWeight":"600","infoBanner":"infoBanner_cizv","success":"success_Sofu","info":"info_rwrL","important":"important__cl2","warning":"warning_pWtc","content":"content_ilT8","heading":"heading_SQci","text":"text_ZMqb","icon":"icon_KCl7","dismissable":"dismissable_JVLF"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var src = __webpack_require__(63918);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/info-banner/src/lib/InfoBanner.tsx
var _excluded=["title","message","type","children","dismissable"];var iconMap={success:circle_check/* default */.A,info:info/* default */.A,important:circle_alert/* default */.A,warning:triangle_alert/* default */.A};var InfoBanner=function InfoBanner(_ref){var title=_ref.title,message=_ref.message,type=_ref.type,children=_ref.children,_ref$dismissable=_ref.dismissable,dismissable=_ref$dismissable===void 0?false:_ref$dismissable,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Icon=iconMap[type];var _React$useState=react.useState(true),show=_React$useState[0],setShow=_React$useState[1];if(show)return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({className:(0,clsx/* default */.A)(InfoBanner_module.infoBanner,InfoBanner_module[type],rest.className)},rest,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{size:20,"aria-hidden":true,className:InfoBanner_module.icon}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:InfoBanner_module.content,children:[title&&/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{className:InfoBanner_module.heading,children:title}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:InfoBanner_module.text,children:[message,children]})]}),dismissable&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:InfoBanner_module.dismissable,children:/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$n,{variant:"icon","aria-label":"St\xE4ng",onPress:function onPress(){return setShow(false);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20})})})]}));return null;};
;// ./packages/info-banner/src/index.ts


/***/ }),

/***/ 91725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* reexport */ SearchField)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/SearchField.mjs + 37 modules
var dist_SearchField = __webpack_require__(91521);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.js
var search = __webpack_require__(98445);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/textfield/src/index.ts + 3 modules
var src = __webpack_require__(42619);
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var button_src = __webpack_require__(63918);
;// ./packages/search-field/src/lib/SearchField.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SearchField_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","blue150":"#143c50","gray150":"#1f1f1f","container":"container_bTyD","inputContainer":"inputContainer_FEyv","icon":"icon_fL1_","clear":"clear_PAHR","input":"input_Mp7b"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/search-field/src/lib/SearchField.tsx
'use client';var _excluded=["placeholder","buttonText"];var SearchField=function SearchField(_ref){var placeholder=_ref.placeholder,buttonText=_ref.buttonText,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _React$useState=react.useState(false),hasInput=_React$useState[0],setHasInput=_React$useState[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_SearchField/* SearchField */.L,Object.assign({onInput:function onInput(){return setHasInput(true);},onClear:function onClear(){return setHasInput(false);},className:SearchField_module.container},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{hidden:true,children:placeholder}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:SearchField_module.inputContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(search/* default */.A,{size:20,className:SearchField_module.icon}),/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,{className:(0,clsx/* default */.A)(src/* TextFieldStyles */.Ql.input,SearchField_module.input),placeholder:placeholder}),hasInput&&/*#__PURE__*/(0,jsx_runtime.jsx)(button_src/* Button */.$n,{variant:"icon",size:"small",className:SearchField_module.clear,children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(button_src/* Button */.$n,{type:"submit",children:buttonText?buttonText:'Sök'})]}));};
;// ./packages/search-field/src/index.ts


/***/ }),

/***/ 37946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CircleAlert)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const CircleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);


//# sourceMappingURL=circle-alert.js.map


/***/ }),

/***/ 79804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CircleCheck)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const CircleCheck = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);


//# sourceMappingURL=circle-check.js.map


/***/ }),

/***/ 97213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Info)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Info = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);


//# sourceMappingURL=info.js.map


/***/ }),

/***/ 418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TriangleAlert)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const TriangleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);


//# sourceMappingURL=triangle-alert.js.map


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

/***/ 44662:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/pr-preview/pr-176/blog/release-12","source":"@site/blog/release12.mdx","title":"Release 12","description":".","date":"2024-10-03T08:17:53.000Z","tags":[],"readingTime":1.345,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Release 12","description":".","slug":"release-12","pagination_prev":null,"pagination_next":null},"unlisted":false,"prevItem":{"title":"Release 13","permalink":"/pr-preview/pr-176/blog/release-13"},"nextItem":{"title":"Midas har nu öppen källkod","permalink":"/pr-preview/pr-176/blog/midas-open-source"}}');

/***/ })

}]);