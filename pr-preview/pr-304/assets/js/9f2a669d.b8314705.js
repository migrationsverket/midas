"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4230],{

/***/ 92711:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28453);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94129);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34068);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89672);
/* harmony import */ var _midas_ds_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97100);
/* harmony import */ var _site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71372);


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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      scope: {
        ComboBox: _midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .ComboBox */ .a,
        ComboBoxItem: _midas_ds_components__WEBPACK_IMPORTED_MODULE_4__/* .ComboBoxItem */ .x
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      scope: {
        DatePicker: _midas_ds_components__WEBPACK_IMPORTED_MODULE_5__/* .DatePicker */ .l
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      scope: {
        InfoBanner: _midas_ds_components__WEBPACK_IMPORTED_MODULE_6__/* .InfoBanner */ .z
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_CodeBlock_CodeBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      scope: {
        SearchField: _midas_ds_components__WEBPACK_IMPORTED_MODULE_7__/* .SearchField */ .L
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
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

/***/ 3538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88519);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44080);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57936);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(27279);
/* harmony import */ var _Calendar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18292);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60250);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87677);
/* harmony import */ var _internationalized_date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97819);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["errorMessage","weekdayStyle","className"];function Calendar(_ref){var errorMessage=_ref.errorMessage,_ref$weekdayStyle=_ref.weekdayStyle,weekdayStyle=_ref$weekdayStyle===void 0?'short':_ref$weekdayStyle,className=_ref.className,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .Calendar */ .Vv,Object.assign({},props,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .clsx */ .$)(_Calendar_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.calendar,className),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header",{className:_Calendar_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.header,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$,{slot:"previous",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_8__/* .Heading */ .D,{className:_Calendar_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.heading}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$,{slot:"next",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .CalendarGrid */ .r8,{className:_Calendar_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.calendar,weekdayStyle:weekdayStyle,children:function children(date){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .CalendarCell */ .Zr,{date:date,className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .clsx */ .$)(_Calendar_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.day,(0,_internationalized_date__WEBPACK_IMPORTED_MODULE_10__/* .isToday */ .cK)(date,(0,_internationalized_date__WEBPACK_IMPORTED_MODULE_10__/* .getLocalTimeZone */ .Xj)())&&_Calendar_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.today)});}}),errorMessage&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_11__/* .Text */ .E,{slot:"errorMessage",children:errorMessage})]}));}

/***/ }),

/***/ 94129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ ComboBox_ComboBox),
  x: () => (/* binding */ ComboBoxItem)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/combobox/ComboBox.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ComboBox_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--layer-02":"light-dark(#ffffff, #383838)","--layer-hover-02":"light-dark(#e6e6e6, #474747)","--border-strong":"light-dark(#171717, #f2f2f2)","--focus":"0 0 0 2px white, 0 0 0 4px black","--field-disabled":"light-dark(#f2f2f2, #262626)","--border-disabled":"light-dark(#bfbfbf, #525252)","--text-placeholder":"light-dark(#a6a6a6, #525252)","--icon-primary":"light-dark(#171717, #f2f2f2)","--text-primary":"light-dark(#171717, #f2f2f2)","--layer-selected-02":"light-dark(#d9d9d9, #525252)","--border-invalid":"light-dark(#e62323, #e62323)","--text-invalid":"light-dark(#e62323, #e62323)","input":"input_Ttd0","combobox":"combobox_kSJb","text":"text_ngKo","wrap":"wrap_JKDx","button":"button_yH32","icon":"icon_C34F","popover":"popover_OCYC","fieldError":"fieldError_o6Mj","listBoxItem":"listBoxItem_snA8"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ComboBox.mjs + 37 modules
var ComboBox = __webpack_require__(20050);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Input.mjs
var Input = __webpack_require__(79950);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs + 1 modules
var Button = __webpack_require__(44080);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ListBox.mjs
var ListBox = __webpack_require__(97849);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(75107);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx
var TextField = __webpack_require__(69240);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/combobox/ComboBox.tsx
'use client';var _excluded=["label","description","errorMessage","children","items","className"];function ComboBox_ComboBox(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,children=_ref.children,items=_ref.items,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var ref=react.useRef(null);return/*#__PURE__*/(0,jsx_runtime.jsxs)(ComboBox/* ComboBox */.a3,Object.assign({className:(0,clsx/* default */.A)(ComboBox_module.combobox,className),ref:ref},props,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:ComboBox_module.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,{className:ComboBox_module.input}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{className:ComboBox_module.button,"aria-label":"Visa lista",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:ComboBox_module.icon,"aria-hidden":"true",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_down/* default */.A,{size:20,"aria-hidden":true})})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{className:ComboBox_module.popover,offset:0,UNSTABLE_portalContainer:ref.current||undefined,children:/*#__PURE__*/(0,jsx_runtime.jsx)(ListBox/* ListBox */.qF,{items:items,children:children})})]}));}function ComboBoxItem(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(ListBox/* ListBoxItem */.nh,Object.assign({className:ComboBox_module.listBoxItem},props));}

/***/ }),

/***/ 34068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ DatePicker),
  U: () => (/* binding */ DateRangePicker)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/DatePicker.mjs + 4 modules
var dist_DatePicker = __webpack_require__(98013);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Group.mjs
var Group = __webpack_require__(63899);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/DateField.mjs + 42 modules
var DateField = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs + 1 modules
var Button = __webpack_require__(44080);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs
var Dialog = __webpack_require__(54194);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar-days.js
var calendar_days = __webpack_require__(93347);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/date-picker/DatePicker.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DatePicker_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--field-01":"light-dark(#f2f2f2, #262626)","--icon-primary":"light-dark(#171717, #f2f2f2)","--text-invalid":"light-dark(#e62323, #e62323)","--border-strong":"light-dark(#171717, #f2f2f2)","--border-invalid":"light-dark(#e62323, #e62323)","--text-placeholder":"light-dark(#a6a6a6, #525252)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--focus":"0 0 0 2px white, 0 0 0 4px black","--layer-01":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--border-brand":"light-dark(#143c50, #143c50)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","datePicker":"datePicker_haMa","inputField":"inputField_luYV","buttonInvalid":"buttonInvalid_IhTz","date":"date_KkTk","divider":"divider_vzN5","segment":"segment_XJ48","label":"label_Ibh5","description":"description_edRI","fieldError":"fieldError_t4GR"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Calendar.mjs + 44 modules
var Calendar = __webpack_require__(88519);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Heading.mjs
var Heading = __webpack_require__(57936);
// EXTERNAL MODULE: ./packages/components/src/calendar/Calendar.module.css
var Calendar_module = __webpack_require__(18292);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(60250);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(87677);
// EXTERNAL MODULE: ./node_modules/@internationalized/date/dist/queries.mjs + 1 modules
var queries = __webpack_require__(97819);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/calendar/RangeCalendar.tsx
var _excluded=["errorMessage","weekdayStyle","className"];function RangeCalendar(_ref){var errorMessage=_ref.errorMessage,_ref$weekdayStyle=_ref.weekdayStyle,weekdayStyle=_ref$weekdayStyle===void 0?'short':_ref$weekdayStyle,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Calendar/* RangeCalendar */._e,Object.assign({},props,{className:(0,clsx/* clsx */.$)(Calendar_module/* default */.A.calendar,className),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{className:Calendar_module/* default */.A.header,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"previous",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_left/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{className:Calendar_module/* default */.A.heading}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"next",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar/* CalendarGrid */.r8,{className:Calendar_module/* default */.A.calendar,weekdayStyle:weekdayStyle,children:function children(date){return/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar/* CalendarCell */.Zr,{date:date,className:(0,clsx/* clsx */.$)(Calendar_module/* default */.A.day,(0,queries/* isToday */.cK)(date,(0,queries/* getLocalTimeZone */.Xj)())&&Calendar_module/* default */.A.today)});}}),errorMessage&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"errorMessage",children:errorMessage})]}));}
// EXTERNAL MODULE: ./packages/components/src/calendar/Calendar.tsx
var calendar_Calendar = __webpack_require__(3538);
;// ./packages/components/src/date-picker/DatePicker.tsx
'use client';var DatePicker_excluded=["label","description","errorMessage"],_excluded2=["label","description","errorMessage"];var DateRangePicker=function DateRangePicker(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,DatePicker_excluded);var ref=react.useRef(null);return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_DatePicker/* DateRangePicker */.Ur,Object.assign({},props,{className:(0,clsx/* clsx */.$)(DatePicker_module.datePicker,props.className),ref:ref,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{className:DatePicker_module.label,children:label}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:DatePicker_module.description,children:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{className:DatePicker_module.fieldError,children:errorMessage}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Group/* Group */.Y,{className:(0,clsx/* clsx */.$)(DatePicker_module.inputField),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateInput */.J3,{slot:"start",className:DatePicker_module.date,children:function children(segment){return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateSegment */.Eu,{className:DatePicker_module.segment,segment:segment});}}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",className:DatePicker_module.divider,children:"-"}),/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateInput */.J3,{slot:"end",className:DatePicker_module.date,children:function children(segment){return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateSegment */.Eu,{segment:segment,className:DatePicker_module.segment});}}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{className:(0,clsx/* clsx */.$)(props.isInvalid&&DatePicker_module.buttonInvalid),children:/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_days/* default */.A,{size:20,"aria-hidden":true})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{UNSTABLE_portalContainer:ref.current||undefined,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Dialog/* Dialog */.lG,{className:DatePicker_module.dialog,children:/*#__PURE__*/(0,jsx_runtime.jsx)(RangeCalendar,{})})})]}));};var DatePicker=function DatePicker(_ref2){var label=_ref2.label,description=_ref2.description,errorMessage=_ref2.errorMessage,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);var ref=react.useRef(null);return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_DatePicker/* DatePicker */.lr,Object.assign({},props,{className:(0,clsx/* clsx */.$)(DatePicker_module.datePicker,props.className),ref:ref,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{className:DatePicker_module.label,children:label}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:DatePicker_module.description,children:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{className:DatePicker_module.fieldError,children:errorMessage}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Group/* Group */.Y,{className:(0,clsx/* clsx */.$)(DatePicker_module.inputField),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateInput */.J3,{className:DatePicker_module.date,children:function children(segment){return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateSegment */.Eu,{segment:segment,className:DatePicker_module.segment});}}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{className:(0,clsx/* clsx */.$)(props.isInvalid&&DatePicker_module.buttonInvalid),children:/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_days/* default */.A,{size:20,"aria-hidden":true})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{UNSTABLE_portalContainer:ref.current||undefined,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Dialog/* Dialog */.lG,{className:DatePicker_module.dialog,children:/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_Calendar/* Calendar */.V,{})})})]}));};

/***/ }),

/***/ 89672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ InfoBanner)
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
;// ./packages/components/src/info-banner/InfoBanner.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const InfoBanner_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--notification-border-success":"light-dark(#008d3c, #008d3c)","--notification-background-success":"light-dark(#d5f2d9, light-dark(#f2f2f2, #262626))","--notification-border-info":"light-dark(#0066cc, #0066cc)","--notification-background-info":"light-dark(#eaf2f6, light-dark(#f2f2f2, #262626))","--notification-border-warning":"light-dark(#e62323, #e62323)","--notification-background-warning":"light-dark(#ffdfdf, light-dark(#f2f2f2, #262626))","--notification-border-important":"light-dark(#fdb813, #fdb813)","--notification-background-important":"light-dark(#fff8e1, light-dark(#f2f2f2, #262626))","infoBanner":"infoBanner_SGaB","success":"success_tp2_","info":"info_M4dU","important":"important_LJBl","warning":"warning_El6H","content":"content_DhUR","heading":"heading_iaBZ","text":"text_FCS8","icon":"icon_F71c","dismissable":"dismissable_tG9p"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/info-banner/InfoBanner.tsx
var _excluded=["title","message","type","children","dismissable"];var iconMap={success:circle_check/* default */.A,info:info/* default */.A,important:circle_alert/* default */.A,warning:triangle_alert/* default */.A};/**
 * Displays a static message as an inline banner
 */var InfoBanner=function InfoBanner(_ref){var title=_ref.title,message=_ref.message,type=_ref.type,children=_ref.children,_ref$dismissable=_ref.dismissable,dismissable=_ref$dismissable===void 0?false:_ref$dismissable,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var Icon=iconMap[type];var _React$useState=react.useState(true),show=_React$useState[0],setShow=_React$useState[1];if(show)return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",Object.assign({className:(0,clsx/* default */.A)(InfoBanner_module.infoBanner,InfoBanner_module[type],rest.className)},rest,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{size:20,"aria-hidden":true,className:InfoBanner_module.icon}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:InfoBanner_module.content,children:[title&&/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{className:InfoBanner_module.heading,children:title}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:InfoBanner_module.text,children:[message,children]})]}),dismissable&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:InfoBanner_module.dismissable,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{variant:"icon","aria-label":"St\xE4ng",onPress:function onPress(){return setShow(false);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20})})})]}));return null;};

/***/ }),

/***/ 97100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ SearchField)
});

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.js
var search = __webpack_require__(98445);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(48697);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(53502);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
;// ./packages/components/src/search-field/SearchField.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SearchField_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-invalid":"light-dark(#e62323, #e62323)","--field-01":"light-dark(#f2f2f2, #262626)","--border-strong":"light-dark(#171717, #f2f2f2)","--focus":"0 0 0 2px white, 0 0 0 4px black","--border-invalid":"light-dark(#e62323, #e62323)","--icon-primary":"light-dark(#171717, #f2f2f2)","--text-primary":"light-dark(#171717, #f2f2f2)","fieldError":"fieldError_ivkE","container":"container_o5YK","inputContainer":"inputContainer_hVqH","icon":"icon_KMPT","clear":"clear_cC1p","input":"input_Z0RI"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-stately/searchfield/dist/useSearchFieldState.mjs
var useSearchFieldState = __webpack_require__(7633);
// EXTERNAL MODULE: ./node_modules/@react-aria/searchfield/dist/useSearchField.mjs + 35 modules
var useSearchField = __webpack_require__(46243);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/search-field/SearchField.tsx
'use client';function isValidationError(error){return!!(error!=null&&error.length);}var SearchField=function SearchField(props){var _props$errorMessage;var _useSearchFieldState=(0,useSearchFieldState/* useSearchFieldState */.V)(props),value=_useSearchFieldState.value,setValue=_useSearchFieldState.setValue;var ref=react.useRef(null);var _useSearchField=(0,useSearchField/* useSearchField */.Q)(Object.assign({},props,{label:props.placeholder,validationBehavior:'native'}),{value:value,setValue:setValue},ref),inputProps=_useSearchField.inputProps,errorMessageProps=_useSearchField.errorMessageProps,isInvalid=_useSearchField.isInvalid,validationErrors=_useSearchField.validationErrors,clearButtonProps=_useSearchField.clearButtonProps;var handleChange=function handleChange(_ref){var target=_ref.target;return setValue(target.value);};var handleClear=function handleClear(){return setValue('');};var handleSubmit=function handleSubmit(){var reFocus=props.validate&&isValidationError(props.validate(value))||isInvalid||!value;if(reFocus){var _ref$current;(_ref$current=ref.current)==null||_ref$current.focus();return;}if(props.onSubmit){props.onSubmit(value);}};var handleKeyDown=function handleKeyDown(_ref2){var key=_ref2.key;if(key==='Enter'){handleSubmit();}};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[isInvalid&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",Object.assign({},errorMessageProps,{className:SearchField_module.fieldError,children:(_props$errorMessage=props.errorMessage)!=null?_props$errorMessage:validationErrors.join(' ')})),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:SearchField_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:SearchField_module.inputContainer,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(search/* default */.A,{size:20,className:SearchField_module.icon}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",Object.assign({},inputProps,{className:(0,clsx/* default */.A)(TextField_module/* default */.A.input,SearchField_module.input,inputProps.className),ref:ref,onChange:handleChange,value:value,"aria-invalid":isInvalid,onKeyDown:handleKeyDown,"aria-label":props.placeholder,"aria-labelledby":""})),value.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,Object.assign({variant:"icon",size:"small",className:SearchField_module.clear,onPress:handleClear},clearButtonProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.A,{size:20,"aria-hidden":true})}))]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{isDisabled:props.isDisabled,excludeFromTabOrder:true,onPress:handleSubmit,type:"button",children:props.buttonText?props.buttonText:'Sök'})]})]});};

/***/ }),

/***/ 69240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A_: () => (/* binding */ TextField),
/* harmony export */   oi: () => (/* binding */ InputWrapper)
/* harmony export */ });
/* unused harmony exports ssnRegEx, dossNrRegEx */
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32945);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79950);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27279);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21704);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44300);
/* harmony import */ var _TextField_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53502);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86559);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
'use client';var _excluded=["label","description","errorMessage","validationType","validate","maxLength","showCounter","className"];var TextField=function TextField(_ref){var _ref2,_props$defaultValue;var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,validationType=_ref.validationType,validate=_ref.validate,maxLength=_ref.maxLength,showCounter=_ref.showCounter,className=_ref.className,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState((_ref2=(_props$defaultValue=props.defaultValue)!=null?_props$defaultValue:props.value)!=null?_ref2:''),value=_React$useState[0],setValue=_React$useState[1];var handleChange=function handleChange(event){var newValue=event.target.value;setValue(newValue);};var validateInput=function validateInput(value){if(validationType==='ssn')return ssnRegEx.test(value)?null:'Felaktigt personnummer';if(validationType==='dossnr')return dossNrRegEx.test(value)?null:'Felaktigt dossiernummer';if(validationType instanceof RegExp)return new RegExp(validationType).test(value)?null:errorMessage==null?void 0:errorMessage.toString();if(maxLength)return maxLength&&value.length>maxLength?"Du har angett "+(value.length-maxLength)+" tecken f\xF6r mycket. F\xE4ltet \xE4r begr\xE4nsat till "+maxLength+" tecken.":null;if(validate)return validate(value);return true;};var Count=function Count(){if(maxLength){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.count,value.length>maxLength&&_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.countExceeded),children:[value.length," / ",maxLength]});}if(showCounter){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.count,children:value.length});}return null;};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_5__/* .TextField */ .A,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.inputField,className),validate:validateInput},props,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(InputWrapper,{label:label,description:description,errorMessage:errorMessage,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Count,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.wrap,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_6__/* .Input */ .p,{type:props.type,className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.input,onChange:handleChange,onBlur:handleChange}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PasswordField,{type:props.type,input:value})]})]})}));};var PasswordField=function PasswordField(_ref3){var type=_ref3.type,input=_ref3.input;var _React$useState2=react__WEBPACK_IMPORTED_MODULE_0__.useState(false),showPassword=_React$useState2[0],setShowPassword=_React$useState2[1];if(type==='password')return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[showPassword&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .E,{slot:"description",className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.passwordText,children:input}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .$,{variant:"tertiary",onPress:function onPress(){return setShowPassword(!showPassword);},className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.passwordButton,children:showPassword?'Dölj':'Visa'})]});return null;};var InputWrapper=function InputWrapper(_ref4){var label=_ref4.label,description=_ref4.description,errorMessage=_ref4.errorMessage,children=_ref4.children;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.inputWrapper,children:[label&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_9__/* .Label */ .J,{className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.label,children:label}),description&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .E,{slot:"description",className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.text,children:description}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_10__/* .FieldError */ .b,{"data-testid":"fieldError",className:_TextField_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fieldError,children:errorMessage}),children]});};var ssnRegEx=new RegExp('^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$');var dossNrRegEx=new RegExp('^(\\d{1,2}\\+\\d{6}-\\d{1,2}$|\\d{1,2}-\\d{6}(/\\d{1,2})?$|\\d{1,2}\\d{6}$|\\d{6,8}$)');

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

/***/ 98445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Search = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);


//# sourceMappingURL=search.js.map


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

/***/ 18292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--field-01":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--text-on-color":"light-dark(#ffffff, #ffffff)","--text-disabled":"light-dark(#bfbfbf, #525252)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--border-strong":"light-dark(#171717, #f2f2f2)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--focus":"0 0 0 2px white, 0 0 0 4px black","calendar":"calendar_Zofv","day":"day_OZ3K","header":"header_VHXU","heading":"heading_Dldu","today":"today_rAcb"});

/***/ }),

/***/ 53502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--border-strong":"light-dark(#171717, #f2f2f2)","--border-invalid":"light-dark(#e62323, #e62323)","--text-disabled":"light-dark(#bfbfbf, #525252)","--text-invalid":"light-dark(#e62323, #e62323)","--field-disabled":"light-dark(#f2f2f2, #262626)","--focus":"0 0 0 2px white, 0 0 0 4px black","inputField":"inputField_NRYV","inputWrapper":"inputWrapper_NR0B","label":"label_UgTd","text":"text_E1GG","fieldError":"fieldError_GOHN","passwordText":"passwordText_gBIs","count":"count_PsfX","countExceeded":"countExceeded_hrAA","input":"input_g6A6","wrap":"wrap_ljmz","passwordButton":"passwordButton_kacG"});

/***/ }),

/***/ 46243:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ $4d52238874b24f86$export$9bb30bbe003b82e0)
});

;// ./node_modules/@react-aria/searchfield/dist/ar-AE.mjs
var $03c9a1a10de12f06$exports = {};
$03c9a1a10de12f06$exports = {
    "Clear search": `\u{645}\u{633}\u{62D} \u{627}\u{644}\u{628}\u{62D}\u{62B}`
};



//# sourceMappingURL=ar-AE.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/bg-BG.mjs
var $4da0c2ffa4ba4159$exports = {};
$4da0c2ffa4ba4159$exports = {
    "Clear search": `\u{418}\u{437}\u{447}\u{438}\u{441}\u{442}\u{432}\u{430}\u{43D}\u{435} \u{43D}\u{430} \u{442}\u{44A}\u{440}\u{441}\u{435}\u{43D}\u{435}`
};



//# sourceMappingURL=bg-BG.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/cs-CZ.mjs
var $8c59fd0c2c96821b$exports = {};
$8c59fd0c2c96821b$exports = {
    "Clear search": `Vymazat hled\xe1n\xed`
};



//# sourceMappingURL=cs-CZ.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/da-DK.mjs
var $0a371f9c1df8120f$exports = {};
$0a371f9c1df8120f$exports = {
    "Clear search": `Ryd s\xf8gning`
};



//# sourceMappingURL=da-DK.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/de-DE.mjs
var $67f4d0b0de9f8a52$exports = {};
$67f4d0b0de9f8a52$exports = {
    "Clear search": `Suche zur\xfccksetzen`
};



//# sourceMappingURL=de-DE.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/el-GR.mjs
var $72a312d948f0214b$exports = {};
$72a312d948f0214b$exports = {
    "Clear search": `\u{391}\u{3C0}\u{3B1}\u{3BB}\u{3BF}\u{3B9}\u{3C6}\u{3AE} \u{3B1}\u{3BD}\u{3B1}\u{3B6}\u{3AE}\u{3C4}\u{3B7}\u{3C3}\u{3B7}\u{3C2}`
};



//# sourceMappingURL=el-GR.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/en-US.mjs
var $5012d21d933388c1$exports = {};
$5012d21d933388c1$exports = {
    "Clear search": `Clear search`
};



//# sourceMappingURL=en-US.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/es-ES.mjs
var $0159854399308e2e$exports = {};
$0159854399308e2e$exports = {
    "Clear search": `Borrar b\xfasqueda`
};



//# sourceMappingURL=es-ES.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/et-EE.mjs
var $390613981d970276$exports = {};
$390613981d970276$exports = {
    "Clear search": `T\xfchjenda otsing`
};



//# sourceMappingURL=et-EE.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/fi-FI.mjs
var $961ae0833f811705$exports = {};
$961ae0833f811705$exports = {
    "Clear search": `Tyhjenn\xe4 haku`
};



//# sourceMappingURL=fi-FI.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/fr-FR.mjs
var $26d76742decfd829$exports = {};
$26d76742decfd829$exports = {
    "Clear search": `Effacer la recherche`
};



//# sourceMappingURL=fr-FR.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/he-IL.mjs
var $92ef254c82a5c769$exports = {};
$92ef254c82a5c769$exports = {
    "Clear search": `\u{5E0}\u{5E7}\u{5D4} \u{5D7}\u{5D9}\u{5E4}\u{5D5}\u{5E9}`
};



//# sourceMappingURL=he-IL.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/hr-HR.mjs
var $e0321b43bdefb8b3$exports = {};
$e0321b43bdefb8b3$exports = {
    "Clear search": `Obri\u{161}i pretragu`
};



//# sourceMappingURL=hr-HR.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/hu-HU.mjs
var $0c1ee0b8d50940d9$exports = {};
$0c1ee0b8d50940d9$exports = {
    "Clear search": `Keres\xe9s t\xf6rl\xe9se`
};



//# sourceMappingURL=hu-HU.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/it-IT.mjs
var $b09198915a38946f$exports = {};
$b09198915a38946f$exports = {
    "Clear search": `Cancella ricerca`
};



//# sourceMappingURL=it-IT.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/ja-JP.mjs
var $3a9a3d180c3145c0$exports = {};
$3a9a3d180c3145c0$exports = {
    "Clear search": `\u{691C}\u{7D22}\u{3092}\u{30AF}\u{30EA}\u{30A2}`
};



//# sourceMappingURL=ja-JP.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/ko-KR.mjs
var $b7a611726449f4a3$exports = {};
$b7a611726449f4a3$exports = {
    "Clear search": `\u{AC80}\u{C0C9} \u{C9C0}\u{C6B0}\u{AE30}`
};



//# sourceMappingURL=ko-KR.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/lt-LT.mjs
var $d9a3d49db610dd5c$exports = {};
$d9a3d49db610dd5c$exports = {
    "Clear search": `I\u{161}valyti ie\u{161}k\u{105}`
};



//# sourceMappingURL=lt-LT.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/lv-LV.mjs
var $3ab64b73ea27c23a$exports = {};
$3ab64b73ea27c23a$exports = {
    "Clear search": `Not\u{12B}r\u{12B}t mekl\u{113}\u{161}anu`
};



//# sourceMappingURL=lv-LV.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/nb-NO.mjs
var $bf5cce1b47d23baf$exports = {};
$bf5cce1b47d23baf$exports = {
    "Clear search": `T\xf8m s\xf8k`
};



//# sourceMappingURL=nb-NO.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/nl-NL.mjs
var $4e0c9a9a010e4598$exports = {};
$4e0c9a9a010e4598$exports = {
    "Clear search": `Zoekactie wissen`
};



//# sourceMappingURL=nl-NL.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/pl-PL.mjs
var $63cf4a75ec270508$exports = {};
$63cf4a75ec270508$exports = {
    "Clear search": `Wyczy\u{15B}\u{107} zawarto\u{15B}\u{107} wyszukiwania`
};



//# sourceMappingURL=pl-PL.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/pt-BR.mjs
var $083b0cad27fdbd06$exports = {};
$083b0cad27fdbd06$exports = {
    "Clear search": `Limpar pesquisa`
};



//# sourceMappingURL=pt-BR.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/pt-PT.mjs
var $1b7f0864d830ba6d$exports = {};
$1b7f0864d830ba6d$exports = {
    "Clear search": `Limpar pesquisa`
};



//# sourceMappingURL=pt-PT.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/ro-RO.mjs
var $d6d2588377fc9718$exports = {};
$d6d2588377fc9718$exports = {
    "Clear search": `\u{15E}terge\u{163}i c\u{103}utarea`
};



//# sourceMappingURL=ro-RO.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/ru-RU.mjs
var $701c918a4653e946$exports = {};
$701c918a4653e946$exports = {
    "Clear search": `\u{41E}\u{447}\u{438}\u{441}\u{442}\u{438}\u{442}\u{44C} \u{43F}\u{43E}\u{438}\u{441}\u{43A}`
};



//# sourceMappingURL=ru-RU.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/sk-SK.mjs
var $7cacc29a1e5f4fbe$exports = {};
$7cacc29a1e5f4fbe$exports = {
    "Clear search": `Vymaza\u{165} vyh\u{13E}ad\xe1vanie`
};



//# sourceMappingURL=sk-SK.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/sl-SI.mjs
var $c63231bcc300d0df$exports = {};
$c63231bcc300d0df$exports = {
    "Clear search": `Po\u{10D}isti iskanje`
};



//# sourceMappingURL=sl-SI.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/sr-SP.mjs
var $b61510478bc0e6f6$exports = {};
$b61510478bc0e6f6$exports = {
    "Clear search": `Obri\u{161}i pretragu`
};



//# sourceMappingURL=sr-SP.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/sv-SE.mjs
var $ce325e6dd3f9c37a$exports = {};
$ce325e6dd3f9c37a$exports = {
    "Clear search": `Rensa s\xf6kning`
};



//# sourceMappingURL=sv-SE.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/tr-TR.mjs
var $1f7e1cf2285af2b2$exports = {};
$1f7e1cf2285af2b2$exports = {
    "Clear search": `Aramay\u{131} temizle`
};



//# sourceMappingURL=tr-TR.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/uk-UA.mjs
var $2d999353ca652e34$exports = {};
$2d999353ca652e34$exports = {
    "Clear search": `\u{41E}\u{447}\u{438}\u{441}\u{442}\u{438}\u{442}\u{438} \u{43F}\u{43E}\u{448}\u{443}\u{43A}`
};



//# sourceMappingURL=uk-UA.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/zh-CN.mjs
var $117b536bfb1ae554$exports = {};
$117b536bfb1ae554$exports = {
    "Clear search": `\u{6E05}\u{9664}\u{641C}\u{7D22}`
};



//# sourceMappingURL=zh-CN.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/zh-TW.mjs
var $525f6fa4ac26e278$exports = {};
$525f6fa4ac26e278$exports = {
    "Clear search": `\u{6E05}\u{9664}\u{641C}\u{5C0B}\u{689D}\u{4EF6}`
};



//# sourceMappingURL=zh-TW.module.js.map

;// ./node_modules/@react-aria/searchfield/dist/intlStrings.mjs



































var $8112f8b883c0272d$exports = {};


































$8112f8b883c0272d$exports = {
    "ar-AE": $03c9a1a10de12f06$exports,
    "bg-BG": $4da0c2ffa4ba4159$exports,
    "cs-CZ": $8c59fd0c2c96821b$exports,
    "da-DK": $0a371f9c1df8120f$exports,
    "de-DE": $67f4d0b0de9f8a52$exports,
    "el-GR": $72a312d948f0214b$exports,
    "en-US": $5012d21d933388c1$exports,
    "es-ES": $0159854399308e2e$exports,
    "et-EE": $390613981d970276$exports,
    "fi-FI": $961ae0833f811705$exports,
    "fr-FR": $26d76742decfd829$exports,
    "he-IL": $92ef254c82a5c769$exports,
    "hr-HR": $e0321b43bdefb8b3$exports,
    "hu-HU": $0c1ee0b8d50940d9$exports,
    "it-IT": $b09198915a38946f$exports,
    "ja-JP": $3a9a3d180c3145c0$exports,
    "ko-KR": $b7a611726449f4a3$exports,
    "lt-LT": $d9a3d49db610dd5c$exports,
    "lv-LV": $3ab64b73ea27c23a$exports,
    "nb-NO": $bf5cce1b47d23baf$exports,
    "nl-NL": $4e0c9a9a010e4598$exports,
    "pl-PL": $63cf4a75ec270508$exports,
    "pt-BR": $083b0cad27fdbd06$exports,
    "pt-PT": $1b7f0864d830ba6d$exports,
    "ro-RO": $d6d2588377fc9718$exports,
    "ru-RU": $701c918a4653e946$exports,
    "sk-SK": $7cacc29a1e5f4fbe$exports,
    "sl-SI": $c63231bcc300d0df$exports,
    "sr-SP": $b61510478bc0e6f6$exports,
    "sv-SE": $ce325e6dd3f9c37a$exports,
    "tr-TR": $1f7e1cf2285af2b2$exports,
    "uk-UA": $2d999353ca652e34$exports,
    "zh-CN": $117b536bfb1ae554$exports,
    "zh-TW": $525f6fa4ac26e278$exports
};



//# sourceMappingURL=intlStrings.module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/chain.mjs
var chain = __webpack_require__(72166);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs
var useLocalizedStringFormatter = __webpack_require__(29571);
// EXTERNAL MODULE: ./node_modules/@react-aria/textfield/dist/useTextField.mjs
var useTextField = __webpack_require__(11811);
;// ./node_modules/@react-aria/searchfield/dist/useSearchField.mjs






function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $4d52238874b24f86$export$9bb30bbe003b82e0(props, state, inputRef) {
    let stringFormatter = (0, useLocalizedStringFormatter/* useLocalizedStringFormatter */.o)((0, ($parcel$interopDefault($8112f8b883c0272d$exports))), '@react-aria/searchfield');
    let { isDisabled: isDisabled, isReadOnly: isReadOnly, onSubmit: onSubmit, onClear: onClear, type: type = 'search' } = props;
    let onKeyDown = (e)=>{
        const key = e.key;
        if (key === 'Enter' && (isDisabled || isReadOnly)) e.preventDefault();
        if (isDisabled || isReadOnly) return;
        // for backward compatibility;
        // otherwise, "Enter" on an input would trigger a form submit, the default browser behavior
        if (key === 'Enter' && onSubmit) {
            e.preventDefault();
            onSubmit(state.value);
        }
        if (key === 'Escape') {
            // Also check the inputRef value for the case where the value was set directly on the input element instead of going through
            // the hook
            if (state.value === '' && (!inputRef.current || inputRef.current.value === '')) e.continuePropagation();
            else {
                e.preventDefault();
                state.setValue('');
                if (onClear) onClear();
            }
        }
    };
    let onClearButtonClick = ()=>{
        state.setValue('');
        if (onClear) onClear();
    };
    let onPressStart = ()=>{
        var // this is in PressStart for mobile so that touching the clear button doesn't remove focus from
        // the input and close the keyboard
        _inputRef_current;
        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
    };
    let { labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, useTextField/* useTextField */.v)({
        ...props,
        value: state.value,
        onChange: state.setValue,
        onKeyDown: !isReadOnly ? (0, chain/* chain */.c)(onKeyDown, props.onKeyDown) : props.onKeyDown,
        type: type
    }, inputRef);
    return {
        labelProps: labelProps,
        inputProps: {
            ...inputProps,
            // already handled by useSearchFieldState
            defaultValue: undefined
        },
        clearButtonProps: {
            'aria-label': stringFormatter.format('Clear search'),
            excludeFromTabOrder: true,
            preventFocusOnPress: true,
            isDisabled: isDisabled || isReadOnly,
            onPress: onClearButtonClick,
            onPressStart: onPressStart
        },
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        ...validation
    };
}



//# sourceMappingURL=useSearchField.module.js.map


/***/ }),

/***/ 7633:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ $0b2218c4e3fe7d7e$export$3f8be18b0f41eaf2)
/* harmony export */ });
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8356);


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $0b2218c4e3fe7d7e$export$3f8be18b0f41eaf2(props) {
    let [value, setValue] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_0__/* .useControlledState */ .P)($0b2218c4e3fe7d7e$var$toString(props.value), $0b2218c4e3fe7d7e$var$toString(props.defaultValue) || '', props.onChange);
    return {
        value: value,
        setValue: setValue
    };
}
function $0b2218c4e3fe7d7e$var$toString(val) {
    if (val == null) return;
    return val.toString();
}



//# sourceMappingURL=useSearchFieldState.module.js.map


/***/ }),

/***/ 44662:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/pr-preview/pr-304/blog/release-12","source":"@site/blog/release12.mdx","title":"Release 12","description":".","date":"2024-10-03T08:17:53.000Z","tags":[],"readingTime":1.27,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Release 12","description":".","slug":"release-12","pagination_prev":null,"pagination_next":null},"unlisted":false,"prevItem":{"title":"Release 13","permalink":"/pr-preview/pr-304/blog/release-13"},"nextItem":{"title":"Midas har nu öppen källkod","permalink":"/pr-preview/pr-304/blog/midas-open-source"}}');

/***/ })

}]);