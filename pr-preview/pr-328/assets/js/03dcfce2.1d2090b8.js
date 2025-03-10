"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[3207],{

/***/ 27813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Example: () => (/* binding */ Example),
  UnavailableDateExample: () => (/* binding */ UnavailableDateExample),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_date_picker_mdx_03d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-date-picker-mdx-03d.json
const site_docs_components_date_picker_mdx_03d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/date-picker","title":"DatePicker","description":"Fält för att välja ett datum eller ett spann av datum med kalender.","source":"@site/docs/components/date-picker.mdx","sourceDirName":"components","slug":"/components/date-picker","permalink":"/pr-preview/pr-328/components/date-picker","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"DatePicker","description":"Fält för att välja ett datum eller ett spann av datum med kalender.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./node_modules/@internationalized/date/dist/queries.mjs + 1 modules
var queries = __webpack_require__(97819);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 1 modules
var propsTable = __webpack_require__(38355);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./packages/components/src/date-picker/DatePicker.tsx + 1 modules
var DatePicker = __webpack_require__(94064);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(71372);
;// ./apps/docs/docs/components/date-picker.mdx


const frontMatter = {
	title: 'DatePicker',
	description: 'Fält för att välja ett datum eller ett spann av datum med kalender.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

};










const Example = props => {
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      DatePicker: DatePicker/* DatePicker */.l
    },
    ...props,
    children: `<DatePicker label="Välj ett datum" aria-label="Välj datum" />`
  });
};
const UnavailableDateExample = props => {
  const getTodayAndNextFiveDays = date => {
    const now = (0,queries/* today */.Ec)((0,queries/* getLocalTimeZone */.Xj)());
    const disabledRanges = [[now, now.add({
      days: 5
    })]];
    return disabledRanges.some(([start, end]) => date.compare(start) >= 0 && date.compare(end) <= 0);
  };
  return (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
    scope: {
      DatePicker: DatePicker/* DatePicker */.l,
      getTodayAndNextFiveDays
    },
    ...props,
    children: `<DatePicker label="Välj ett datum" aria-label="Välj datum" isDateUnavailable={getTodayAndNextFiveDays} />`
  });
};
const toc = [{
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "DatePicker",
  "id": "datepicker",
  "level": 3
}, {
  "value": "DateRangePicker",
  "id": "daterangepicker",
  "level": 3
}, {
  "value": "Begränsa val",
  "id": "begränsa-val",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "DatePicker",
  "id": "datepicker-1",
  "level": 3
}, {
  "value": "DateRangePicker",
  "id": "daterangepicker-1",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
      name: 'DatePicker',
      friendlyName: 'Datumväljare'
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inmatningsfält för att välja ett eller flera datum. Består av två komponenter ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DatePicker"
      }), " för att välja ett datum samt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DateRangePicker"
      }), " för att välja ett spann mellan två datum."]
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
        children: "import { DatePicker } from '@midas-ds/components'\n// import { DateRangePicker } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Example, {
      hideExample: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "datepicker",
      children: "DatePicker"
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        DatePicker: DatePicker/* DatePicker */.l
      },
      children: `<DatePicker label="Välj ett datum när du vill vara ledig" aria-label="Välj datum" />`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "daterangepicker",
      children: "DateRangePicker"
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        DateRangePicker: DatePicker/* DateRangePicker */.U
      },
      children: `<DateRangePicker label="Ange din semesterperiod" aria-label="Välj spann av datum" />`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "begränsa-val",
      children: "Begränsa val"
    }), "\n", (0,jsx_runtime.jsx)(UnavailableDateExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "datepicker-1",
      children: "DatePicker"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "DatePicker"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "daterangepicker-1",
      children: "DateRangePicker"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "DateRangePicker",
      defaultOpen: false
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

/***/ 55351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ Calendar_Calendar)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Calendar.mjs + 44 modules
var Calendar = __webpack_require__(88519);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs + 1 modules
var Button = __webpack_require__(44080);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Heading.mjs
var Heading = __webpack_require__(57936);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
;// ./packages/components/src/calendar/Calendar.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Calendar_module = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","gray10":"#f2f2f2","gray20":"#e6e6e6","blue150":"#143c50","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","calendar":"calendar_Zofv","day":"day_OZ3K","header":"header_VHXU","heading":"heading_Dldu","today":"today_rAcb"});
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-left.js
var chevron_left = __webpack_require__(60250);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-right.js
var chevron_right = __webpack_require__(87677);
// EXTERNAL MODULE: ./node_modules/@internationalized/date/dist/queries.mjs + 1 modules
var queries = __webpack_require__(97819);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/calendar/Calendar.tsx
var _excluded=["errorMessage","weekdayStyle","className"];function Calendar_Calendar(_ref){var errorMessage=_ref.errorMessage,_ref$weekdayStyle=_ref.weekdayStyle,weekdayStyle=_ref$weekdayStyle===void 0?'short':_ref$weekdayStyle,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Calendar/* Calendar */.Vv,Object.assign({},props,{className:(0,clsx/* clsx */.$)(Calendar_module.calendar,className),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{className:Calendar_module.header,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"previous",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_left/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{className:Calendar_module.heading}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"next",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar/* CalendarGrid */.r8,{className:Calendar_module.calendar,weekdayStyle:weekdayStyle,children:function children(date){return/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar/* CalendarCell */.Zr,{date:date,className:(0,clsx/* clsx */.$)(Calendar_module.day,(0,queries/* isToday */.cK)(date,(0,queries/* getLocalTimeZone */.Xj)())&&Calendar_module.today)});}}),errorMessage&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"errorMessage",children:errorMessage})]}));}

/***/ }),

/***/ 94064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ DatePicker),
  U: () => (/* binding */ DateRangePicker)
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
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 1 modules
var Popover = __webpack_require__(21416);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs
var Dialog = __webpack_require__(54194);
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
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx
var TextField = __webpack_require__(69240);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.module.css
var TextField_module = __webpack_require__(53502);
;// ./packages/components/src/date-picker/DatePicker.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DatePicker_module = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","black":"#000000","gray10":"#f2f2f2","gray20":"#e6e6e6","gray60":"#b3b3b3","gray150":"#1f1f1f","blue20":"#d5e5ed","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","blue150":"#143c50","datePicker":"datePicker_haMa","datePickerTextfield":"datePickerTextfield_ALJK","buttonInvalid":"buttonInvalid_IhTz","date":"date_KkTk","dialog":"dialog_YZ_z","dialogHeader":"dialogHeader_dLeC","dialogHeading":"dialogHeading_khTB","day":"day_rqGe","calendar":"calendar_X6VN"});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/calendar/Calendar.tsx + 1 modules
var calendar_Calendar = __webpack_require__(55351);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/date-picker/DatePicker.tsx
'use client';var _excluded=["label","description","errorMessage"],_excluded2=["label","description","errorMessage"];var DateRangePicker=function DateRangePicker(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var ref=react.useRef(null);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_DatePicker/* DateRangePicker */.Ur,Object.assign({},props,{className:(0,clsx/* clsx */.$)(TextField_module/* default */.A.inputField,DatePicker_module.datePicker,props.className),ref:ref,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(TextField/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Group/* Group */.Y,{className:(0,clsx/* clsx */.$)(TextField_module/* default */.A.input,DatePicker_module.datePickerTextfield),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateInput */.J3,{slot:"start",className:DatePicker_module.date,children:function children(segment){return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateSegment */.Eu,{className:DatePicker_module.dateSegment,segment:segment});}}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",children:"-"}),/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateInput */.J3,{slot:"end",className:DatePicker_module.date,children:function children(segment){return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateSegment */.Eu,{segment:segment,className:DatePicker_module.dateSegment});}}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_days/* default */.A,{size:20,"aria-hidden":true})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{UNSTABLE_portalContainer:ref.current||undefined,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Dialog/* Dialog */.lG,{className:DatePicker_module.dialog,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Calendar/* RangeCalendar */._e,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{className:DatePicker_module.dialogHeader,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"previous",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_left/* default */.A,{size:20,"aria-hidden":true})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{className:DatePicker_module.dialogHeading}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"next",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{size:20,"aria-hidden":true})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar/* CalendarGrid */.r8,{className:DatePicker_module.calendar,weekdayStyle:"short",children:function children(date){return/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar/* CalendarCell */.Zr,{date:date,className:DatePicker_module.day});}})]})})})]})}));};var DatePicker=function DatePicker(_ref2){var label=_ref2.label,description=_ref2.description,errorMessage=_ref2.errorMessage,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);var ref=react.useRef(null);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_DatePicker/* DatePicker */.lr,Object.assign({},props,{className:(0,clsx/* clsx */.$)(TextField_module/* default */.A.inputField,DatePicker_module.datePicker,props.className),ref:ref,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(TextField/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Group/* Group */.Y,{className:(0,clsx/* clsx */.$)(TextField_module/* default */.A.input,DatePicker_module.datePickerTextfield),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateInput */.J3,{className:DatePicker_module.date,children:function children(segment){return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateSegment */.Eu,{segment:segment,className:DatePicker_module.dateSegment});}}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{className:(0,clsx/* clsx */.$)(props.isInvalid&&DatePicker_module.buttonInvalid),children:/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_days/* default */.A,{size:20,"aria-hidden":true})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{UNSTABLE_portalContainer:ref.current||undefined,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Dialog/* Dialog */.lG,{className:DatePicker_module.dialog,children:/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_Calendar/* Calendar */.V,{})})})]})}));};

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

/***/ 53502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","display":"\"Inter\", sans-serif","signalRed10":"#ffdfdf","gray10":"#f2f2f2","gray20":"#e6e6e6","gray50":"#bfbfbf","black":"#000000","signalRed100":"#e62323","mediumWeight":"500","regularWeight":"400","inputText":"#1f1f1f","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","inputField":"inputField_NRYV","inputWrapper":"inputWrapper_NR0B","label":"label_UgTd","text":"text_E1GG","fieldError":"fieldError_GOHN","passwordText":"passwordText_gBIs","count":"count_PsfX","countExceeded":"countExceeded_hrAA","input":"input_g6A6","wrap":"wrap_ljmz","passwordButton":"passwordButton_kacG"});

/***/ })

}]);