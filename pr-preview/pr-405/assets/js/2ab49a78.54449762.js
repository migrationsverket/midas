"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[7677],{

/***/ 67963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_calendar_mdx_2ab_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-calendar-mdx-2ab.json
const site_docs_components_calendar_mdx_2ab_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/calendar","title":"Calendar","description":"Använd en kalender när användaren ska välja ett datum eller visualisera ett datum valt på annat sätt.","source":"@site/docs/components/calendar.mdx","sourceDirName":"components","slug":"/components/calendar","permalink":"/pr-preview/pr-405/components/calendar","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Calendar","description":"Använd en kalender när användaren ska välja ett datum eller visualisera ett datum valt på annat sätt.","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 187 modules
var propsTable = __webpack_require__(35926);
// EXTERNAL MODULE: ./packages/components/src/calendar/Calendar.tsx
var Calendar = __webpack_require__(3538);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/components/src/calendar/RangeCalendar.tsx
var RangeCalendar = __webpack_require__(69455);
;// ./apps/docs/src/components/examples/calendar/CalendarExamples.tsx
var RangeCalendarExample=function RangeCalendarExample(){var _React$useState=react.useState(null),selected=_React$useState[0],setSelected=_React$useState[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(RangeCalendar/* RangeCalendar */._,{value:selected,onChange:setSelected}),/*#__PURE__*/(0,jsx_runtime.jsxs)("pre",{style:{marginTop:'1rem'},children:["Valda datum:",' ',selected&&(selected==null?void 0:selected.start.toString())+" till: "+(selected==null?void 0:selected.end.toString())]})]});};
;// ./apps/docs/docs/components/calendar.mdx


const frontMatter = {
	title: 'Calendar',
	description: 'Använd en kalender när användaren ska välja ett datum eller visualisera ett datum valt på annat sätt.',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = undefined;

const assets = {

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
  "value": "Calendar",
  "id": "calendar",
  "level": 3
}, {
  "value": "RangeCalendar",
  "id": "rangecalendar",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      name: "Calendar",
      friendlyName: "Kalender",
      overrideHeadlessLink: "https://react-spectrum.adobe.com/react-aria/Calendar.html"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kalender kan användas när användaren ska välja ett datum eller visualisera ett valt datum. Normalt sett\när ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/date-picker",
        children: "DatePicker"
      }), " standardvalet men kalendern kan användas när inputfältet inte\nbehövs, inte ligger i direkt anslutning till kalendern, eller om kalendern inte ska presenteras som en popover."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Calendar />\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        display: 'block'
      },
      children: (0,jsx_runtime.jsx)(Calendar/* Calendar */.V, {})
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
        children: "import { Calendar } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "användning",
      children: "Användning"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "calendar",
      children: "Calendar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kalendern accepterar samma props som ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../date-picker",
        children: "DatePicker"
      }), " och controlled value sätts med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), " respektive ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onChange"
      }), ",\nuncontrolled value sätts med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "defaultValue"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rangecalendar",
      children: "RangeCalendar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Samma props som ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../date-picker#daterangepicker",
        children: "DateRangePicker"
      }), ", exempel nedan med controlled value:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { RangeCalendar } from '@midas-ds/components'\nimport { DateValue } from 'react-aria-components'\n\nexport const RangeCalendarExample = () => {\n  const [selected, setSelected] = React.useState<{\n    start: DateValue\n    end: DateValue\n  } | null>(null)\n\n  return (\n    <>\n      <RangeCalendar\n        value={selected}\n        onChange={setSelected}\n      />\n      <pre>\n        Valda datum:{' '}\n        {selected &&\n          `${selected?.start.toString()}\n           till: ${selected?.end.toString()}`}\n      </pre>\n    </>\n  )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        display: 'block'
      },
      children: (0,jsx_runtime.jsx)(RangeCalendarExample, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Calendar"
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

/***/ 3538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88519);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var _CalendarGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50478);
/* harmony import */ var _CalendarHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44205);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93361);
/* harmony import */ var _Calendar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18292);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["className","errorMessage"];var Calendar=function Calendar(_ref){var className=_ref.className,errorMessage=_ref.errorMessage,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .Calendar */ .Vv,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .clsx */ .$)(_Calendar_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.calendar,className)},rest,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CalendarHeader__WEBPACK_IMPORTED_MODULE_6__/* .CalendarHeader */ .M,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CalendarGrid__WEBPACK_IMPORTED_MODULE_7__/* .CalendarGrid */ .r,Object.assign({},rest)),errorMessage&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .E,{slot:"errorMessage",children:errorMessage})]}));};

/***/ }),

/***/ 50478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ CalendarGrid)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88519);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var _internationalized_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97819);
/* harmony import */ var _Calendar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18292);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var CalendarGrid=function CalendarGrid(_ref){var _ref$weekdayStyle=_ref.weekdayStyle,weekdayStyle=_ref$weekdayStyle===void 0?'short':_ref$weekdayStyle;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .CalendarGrid */ .r8,{weekdayStyle:weekdayStyle,children:function children(date){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .CalendarCell */ .Zr,{date:date,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Calendar_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.day,(0,_internationalized_date__WEBPACK_IMPORTED_MODULE_5__/* .isToday */ .cK)(date,(0,_internationalized_date__WEBPACK_IMPORTED_MODULE_5__/* .getLocalTimeZone */ .Xj)())&&_Calendar_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.today)});}});};

/***/ }),

/***/ 44205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ CalendarHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60250);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87677);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35518);
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71098);
/* harmony import */ var _Calendar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18292);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var CalendarHeader=function CalendarHeader(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header",{className:_Calendar_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.header,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$,{slot:"previous",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heading__WEBPACK_IMPORTED_MODULE_5__/* .Heading */ .D,{level:3,elementType:"h2"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .$,{slot:"next",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{})})]});};

/***/ }),

/***/ 69455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ RangeCalendar)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88519);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var _CalendarGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50478);
/* harmony import */ var _CalendarHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44205);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93361);
/* harmony import */ var _Calendar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18292);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
var _excluded=["className","errorMessage"];var RangeCalendar=function RangeCalendar(_ref){var className=_ref.className,errorMessage=_ref.errorMessage,rest=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_aria_components__WEBPACK_IMPORTED_MODULE_4__/* .RangeCalendar */ ._e,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .clsx */ .$)(_Calendar_module_css__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.calendar,className)},rest,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CalendarHeader__WEBPACK_IMPORTED_MODULE_6__/* .CalendarHeader */ .M,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CalendarGrid__WEBPACK_IMPORTED_MODULE_7__/* .CalendarGrid */ .r,Object.assign({},rest)),errorMessage&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .E,{slot:"errorMessage",children:errorMessage})]}));};

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
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","variant","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'body-02':_ref$variant,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames={'body-01':Text_module['body-01'],'body-02':Text_module['body-02']};var textProps=Object.assign({className:(0,clsx/* default */.A)(rest.slot==='description'?Text_module.description:classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

/***/ }),

/***/ 18292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--layer-01":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--text-on-color":"light-dark(#ffffff, #ffffff)","--text-disabled":"light-dark(#bfbfbf, #525252)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--border-primary":"light-dark(#171717, #f2f2f2)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--focus":"0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)","calendar":"calendar_Zofv","day":"day_OZ3K","header":"header_VHXU","today":"today_rAcb"});

/***/ })

}]);