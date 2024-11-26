(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[3207],{

/***/ 11668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_date_picker_mdx_03d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-date-picker-mdx-03d.json
const site_docs_components_date_picker_mdx_03d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/date-picker","title":"DatePicker","description":"Fält för att välja ett datum eller ett spann av datum med kalender.","source":"@site/docs/components/date-picker.mdx","sourceDirName":"components","slug":"/components/date-picker","permalink":"/pr-preview/pr-155/components/date-picker","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"DatePicker","tags":[],"description":"Fält för att välja ett datum eller ett spann av datum med kalender."},"sidebar":"sideBar","previous":{"title":"ComboBox","permalink":"/pr-preview/pr-155/components/combobox"},"next":{"title":"FileUpload","permalink":"/pr-preview/pr-155/components/fileupload"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(11470);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(19365);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx
var propsTable = __webpack_require__(91117);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx
var getComponentMetaData = __webpack_require__(13225);
;// ./apps/docs/static/data/date-picker.json
const date_picker_namespaceObject = /*#__PURE__*/JSON.parse('{"_id":"@midas-ds/date-picker@1.0.5","_rev":"9-b8977a3ea7421ee11ce4eb20dbe06a1f","name":"@midas-ds/date-picker","dist-tags":{"latest":"1.0.5"},"versions":["0.0.1","0.1.0","0.1.1","0.2.0","1.0.0","1.0.1","1.0.2","1.0.3","1.0.5"],"time":{"created":"2024-09-10T14:36:31.432Z","modified":"2024-11-19T14:49:32.380Z","0.0.1":"2024-09-10T14:36:31.793Z","0.1.0":"2024-09-12T09:22:57.399Z","0.1.1":"2024-09-12T12:23:40.759Z","0.2.0":"2024-10-07T12:11:26.810Z","1.0.0":"2024-10-18T13:40:58.357Z","1.0.1":"2024-10-24T13:26:54.194Z","1.0.2":"2024-11-15T14:06:32.456Z","1.0.3":"2024-11-15T14:24:15.558Z","1.0.5":"2024-11-19T14:49:32.210Z"},"bugs":{"url":"https://github.com/migrationsverket/midas/issues"},"homepage":"https://github.com/migrationsverket/midas#readme","repository":{"type":"git","url":"git+https://github.com/migrationsverket/midas.git"},"description":"```bash npm i @midas-ds/date-picker ```","maintainers":["wilhelmconsid <wilhelm.hjelm@consid.se>"],"readmeFilename":"README.md","_contentLength":14714,"version":"1.0.5","main":"./index.js","types":"./index.d.ts","exports":{".":{"import":"./index.mjs","require":"./index.js","types":"./index.d.ts"}},"peerDependencies":{"@midas-ds/textfield":"1.0.4","react-aria-components":"^1.1.1","lucide-react":"^0.453.0"},"publishConfig":{"access":"public"},"gitHead":"e2a88e481aaa098829e25a125a7767fcbc430170","_nodeVersion":"20.11.1","_npmVersion":"10.2.4","dist":{"integrity":"sha512-KQ7YvmIOqSD0KsNfDd9HdilgvRZuaMUmFXEMlPgXgmRzPX1H3GwpBD7pF1u0+XL5CwJh/E0uydp+VDV3F22FAA==","shasum":"eb7f559780b8575ef939a82c2fe7dc16751b1351","tarball":"https://registry.npmjs.org/@midas-ds/date-picker/-/date-picker-1.0.5.tgz","fileCount":8,"unpackedSize":552797,"signatures":[{"keyid":"SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA","sig":"MEUCIDnY1ChaiaTMP0tCt8bQWOxCgEmfUAKZPw7wK/PRPm/kAiEAoky86+IrFMvKTt6Je4mqgU4SMMLa/nlfKDw5tizDUt8="}]},"_npmUser":"wilhelmconsid <wilhelm.hjelm@consid.se>","directories":{},"_npmOperationalInternal":{"host":"s3://npm-registry-packages","tmp":"tmp/date-picker_1.0.5_1732027771970_0.29215202131023754"},"_hasShrinkwrap":false}');
// EXTERNAL MODULE: ./packages/date-picker/src/index.ts + 2 modules
var src = __webpack_require__(56657);
// EXTERNAL MODULE: ./apps/docs/src/components/CodeBlock/CodeBlock.tsx + 1 modules
var CodeBlock = __webpack_require__(29511);
;// ./apps/docs/docs/components/date-picker.mdx


const frontMatter = {
	title: 'DatePicker',
	tags: [],
	description: 'Fält för att välja ett datum eller ett spann av datum med kalender.'
};
const contentTitle = undefined;

const assets = {

};










const toc = [{
  "value": "Introduktion",
  "id": "introduktion",
  "level": 2
}, {
  "value": "Installation och användning",
  "id": "installation-och-användning",
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
  "value": "Beroenden",
  "id": "beroenden",
  "level": 2
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
      info: date_picker_namespaceObject,
      friendlyName: 'Datumväljare'
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduktion",
      children: "Introduktion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fält för att välja ett datum eller ett spann av datum med kalender. Består av två komponenter ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DatePicker"
      }), " för att välja ett datum samt ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DateRangePicker"
      }), " för att välja ett spann av (2) datum."]
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
            children: "npm install @midas-ds/date-picker\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        label: "Yarn",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @midas-ds/date-picker\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "pnpm",
        label: "pnpm",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pnpm add @midas-ds/date-picker\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "datepicker",
      children: "DatePicker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { DatePicker } from '@midas-ds/date-picker'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        DatePicker: src/* DatePicker */.l
      },
      children: `<DatePicker />`
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "daterangepicker",
      children: "DateRangePicker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { DateRangePicker } from '@midas-ds/date-picker'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(CodeBlock/* default */.A, {
      scope: {
        DateRangePicker: src/* DateRangePicker */.U
      },
      children: `<DateRangePicker />`
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "beroenden",
      children: "Beroenden"
    }), "\n", (0,jsx_runtime.jsx)(getComponentMetaData/* ComponentFooter */.p, {
      info: date_picker_namespaceObject
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

/***/ 13225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ComponentHeader),
/* harmony export */   p: () => (/* binding */ ComponentFooter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95093);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _midas_ds_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85560);
/* harmony import */ var _midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93294);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
var ComponentFooter=function ComponentFooter(_ref){var info=_ref.info,children=_ref.children;if(!info||!info.dependencies)return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul",{children:Object.keys(info.dependencies).map(function(k,i){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li",{children:k+"@"+info.dependencies[k]},'dep'+i);})});};var ComponentHeader=function ComponentHeader(_ref2){var name=_ref2.name,info=_ref2.info,friendlyName=_ref2.friendlyName,overrideHeadlessLink=_ref2.overrideHeadlessLink;moment__WEBPACK_IMPORTED_MODULE_1___default().locale('sv');var storybookLink=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay)("/storybook/?path=/docs/components-"+name.toLowerCase()+"--docs");if(!info){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{display:'flex',justifyContent:'space-between'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:'badge badge--secondary',children:"Under utveckling"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{display:'flex',gap:'3px'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a",{href:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img",{alt:"Static Badge",src:"https://img.shields.io/badge/React%20Aria-FF0000?style=for-the-badge&logo=adobe&logoColor=white"})})})]});}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section",{style:{marginBottom:32,marginTop:-20},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{marginBottom:16},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b",{children:friendlyName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .s,{fluid:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{children:["Version: ",info.version]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_link__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N,{href:"https://github.com/migrationsverket/midas/tree/main/packages/"+name.toLowerCase()+"/CHANGELOG.md",target:"_blank",standalone:true,children:"Versionslogg"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_link__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N,{href:storybookLink,standalone:true,children:"Storybook"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_flex__WEBPACK_IMPORTED_MODULE_3__/* .FlexItem */ .Z,{col:"auto",children:overrideHeadlessLink!==''&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_midas_ds_link__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N,{href:overrideHeadlessLink?overrideHeadlessLink:"https://react-spectrum.adobe.com/react-aria/"+name+".html",target:"_blank",standalone:true,children:"Referens"})})]})]});};

/***/ }),

/***/ 91117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export PropTable */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
// import useDynamicImport from 'docusaurus-plugin-react-docgen-typescript'
var PropTable=function PropTable(_ref){var name=_ref.name;return null;var props=useDynamicImport(name);if(!props){return null;}return/*#__PURE__*/_jsx(_Fragment,{children:/*#__PURE__*/_jsxs("table",{children:[/*#__PURE__*/_jsx("thead",{children:/*#__PURE__*/_jsxs("tr",{children:[/*#__PURE__*/_jsx("th",{children:"Name"}),/*#__PURE__*/_jsx("th",{children:"Type"}),/*#__PURE__*/_jsx("th",{children:"Default Value"}),/*#__PURE__*/_jsx("th",{children:"Required"}),/*#__PURE__*/_jsx("th",{children:"Description"})]})}),/*#__PURE__*/_jsx("tbody",{children:Object.keys(props).map(function(key){var _props$key$type;return/*#__PURE__*/_jsxs("tr",{children:[/*#__PURE__*/_jsx("td",{children:/*#__PURE__*/_jsx("code",{children:key})}),/*#__PURE__*/_jsx("td",{children:/*#__PURE__*/_jsx("code",{children:(_props$key$type=props[key].type)==null?void 0:_props$key$type.name})}),/*#__PURE__*/_jsx("td",{children:props[key].defaultValue&&/*#__PURE__*/_jsx("code",{children:props[key].defaultValue.value})}),/*#__PURE__*/_jsx("td",{children:props[key].required?'Yes':'No'}),/*#__PURE__*/_jsx("td",{style:{width:'30%'},children:props[key].description})]},key);})})]})});};

/***/ }),

/***/ 56657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Popover.mjs + 5 modules
var Popover = __webpack_require__(8119);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(86484);
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
/* harmony default export */ const DatePicker_module = ({"tokens":"\"../../../theme/src/lib/tokens.css\"","display":"\"Inter\", sans-serif","gray10":"#f2f2f2","gray20":"#e6e6e6","gray60":"#b3b3b3","gray150":"#1f1f1f","blue20":"#d5e5ed","focus":"0 0 0 2px #ffffff, 0 0 0 4px #000000","blue150":"#143c50","datePicker":"datePicker_o9AA","datePickerTextfield":"datePickerTextfield_Ugf1","date":"date_HzvK","dialog":"dialog_M74H","dialogHeader":"dialogHeader_Pvcw","dialogHeading":"dialogHeading_lDjb","day":"day_x9rH","calendar":"calendar_Bnb1"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/date-picker/src/lib/DatePicker.tsx
'use client';var _excluded=["label","description","errorMessage"],_excluded2=["label","description","errorMessage"];var DateRangePicker=function DateRangePicker(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_DatePicker/* DateRangePicker */.Ur,Object.assign({},props,{className:(0,clsx/* clsx */.$)(src/* TextFieldStyles */.Ql.inputField,DatePicker_module.datePicker,props.className),children:/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Group/* Group */.Y,{className:(0,clsx/* clsx */.$)(src/* TextFieldStyles */.Ql.input,DatePicker_module.datePickerTextfield),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateInput */.J3,{slot:"start",className:DatePicker_module.date,children:function children(segment){return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateSegment */.Eu,{className:DatePicker_module.dateSegment,segment:segment});}}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",children:"-"}),/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateInput */.J3,{slot:"end",className:DatePicker_module.date,children:function children(segment){return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateSegment */.Eu,{segment:segment,className:DatePicker_module.dateSegment});}}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_days/* default */.A,{size:20,"aria-hidden":true})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Dialog/* Dialog */.lG,{className:DatePicker_module.dialog,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Calendar/* RangeCalendar */._e,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{className:DatePicker_module.dialogHeader,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"previous",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_left/* default */.A,{size:20,"aria-hidden":true})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{className:DatePicker_module.dialogHeading}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"next",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{size:20,"aria-hidden":true})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar/* CalendarGrid */.r8,{className:DatePicker_module.calendar,children:function children(date){return/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar/* CalendarCell */.Zr,{date:date,className:DatePicker_module.day});}})]})})})]})}));};var DatePicker=function DatePicker(_ref2){var label=_ref2.label,description=_ref2.description,errorMessage=_ref2.errorMessage,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref2,_excluded2);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_DatePicker/* DatePicker */.lr,Object.assign({},props,{className:(0,clsx/* clsx */.$)(src/* TextFieldStyles */.Ql.inputField,DatePicker_module.datePicker,props.className),children:/*#__PURE__*/(0,jsx_runtime.jsxs)(src/* InputWrapper */.oi,{label:label,description:description,errorMessage:errorMessage,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Group/* Group */.Y,{className:(0,clsx/* clsx */.$)(src/* TextFieldStyles */.Ql.input,DatePicker_module.datePickerTextfield),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateInput */.J3,{className:DatePicker_module.date,children:function children(segment){return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateSegment */.Eu,{segment:segment,className:DatePicker_module.dateSegment});}}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(calendar_days/* default */.A,{size:16})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Dialog/* Dialog */.lG,{className:DatePicker_module.dialog,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Calendar/* Calendar */.Vv,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{className:DatePicker_module.dialogHeader,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"previous",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_left/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* Heading */.D,{className:DatePicker_module.dialogHeading}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"next",children:/*#__PURE__*/(0,jsx_runtime.jsx)(chevron_right/* default */.A,{})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar/* CalendarGrid */.r8,{className:DatePicker_module.calendar,children:function children(date){return/*#__PURE__*/(0,jsx_runtime.jsx)(Calendar/* CalendarCell */.Zr,{date:date,className:DatePicker_module.day});}})]})})})]})}));};
;// ./packages/date-picker/src/index.ts


/***/ }),

/***/ 42619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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
// EXTERNAL MODULE: ./packages/button/src/index.ts + 5 modules
var src = __webpack_require__(63918);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/textfield/src/lib/TextField.tsx
'use client';var _excluded=["label","description","errorMessage","validationType"];var TextField=function TextField(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,validationType=_ref.validationType,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var _React$useState=react.useState(''),input=_React$useState[0],setInput=_React$useState[1];var _React$useState2=react.useState(true),isValid=_React$useState2[0],setIsValid=_React$useState2[1];var validateInput=function validateInput(value){if(validationType===undefined)return true;if(validationType==='ssn')setIsValid(ssnRegEx.test(value));if(validationType instanceof RegExp)setIsValid(new RegExp(validationType).test(value));};var handleInputBlur=function handleInputBlur(e){var value=e.target.value;validateInput(value);};var handleInputChange=function handleInputChange(e){setInput(e.target.value);};return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_TextField/* TextField */.A,Object.assign({className:TextField_module.inputField,isInvalid:validationType!==undefined?!isValid:props.isInvalid},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(InputWrapper,{label:label,description:description,errorMessage:errorMessage,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module.wrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* Input */.p,{type:props.type,className:TextField_module.input,onChange:handleInputChange,onBlur:handleInputBlur}),/*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField,{type:props.type,input:input})]})})}));};var PasswordField=function PasswordField(_ref2){var type=_ref2.type,input=_ref2.input;var _React$useState3=react.useState(false),showPassword=_React$useState3[0],setShowPassword=_React$useState3[1];if(type==='password')return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showPassword&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module.passwordText,children:input}),/*#__PURE__*/(0,jsx_runtime.jsx)(src/* Button */.$n,{variant:"tertiary",onPress:function onPress(){return setShowPassword(!showPassword);},className:TextField_module.passwordButton,children:showPassword?'Dölj':'Visa'})]});return null;};var InputWrapper=function InputWrapper(_ref3){var label=_ref3.label,description=_ref3.description,errorMessage=_ref3.errorMessage,children=_ref3.children;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TextField_module.inputWrapper,children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{className:TextField_module.label,children:label}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:TextField_module.text,children:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{className:TextField_module.fieldError,children:errorMessage}),children]});};var ssnRegEx=new RegExp('^(?:(?:19|20)?\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4})?|\\d{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])(?:[-+ ]?\\d{4}))$');
;// ./packages/textfield/src/lib/index.ts

;// ./packages/textfield/src/index.ts


/***/ }),

/***/ 35358:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 25177,
	"./af.js": 25177,
	"./ar": 61509,
	"./ar-dz": 41488,
	"./ar-dz.js": 41488,
	"./ar-kw": 58676,
	"./ar-kw.js": 58676,
	"./ar-ly": 42353,
	"./ar-ly.js": 42353,
	"./ar-ma": 24496,
	"./ar-ma.js": 24496,
	"./ar-ps": 6947,
	"./ar-ps.js": 6947,
	"./ar-sa": 82682,
	"./ar-sa.js": 82682,
	"./ar-tn": 89756,
	"./ar-tn.js": 89756,
	"./ar.js": 61509,
	"./az": 95533,
	"./az.js": 95533,
	"./be": 28959,
	"./be.js": 28959,
	"./bg": 47777,
	"./bg.js": 47777,
	"./bm": 54903,
	"./bm.js": 54903,
	"./bn": 61290,
	"./bn-bd": 17357,
	"./bn-bd.js": 17357,
	"./bn.js": 61290,
	"./bo": 31545,
	"./bo.js": 31545,
	"./br": 89089,
	"./br.js": 89089,
	"./bs": 44429,
	"./bs.js": 44429,
	"./ca": 7306,
	"./ca.js": 7306,
	"./cs": 56464,
	"./cs.js": 56464,
	"./cv": 73635,
	"./cv.js": 73635,
	"./cy": 64226,
	"./cy.js": 64226,
	"./da": 93601,
	"./da.js": 93601,
	"./de": 77853,
	"./de-at": 26111,
	"./de-at.js": 26111,
	"./de-ch": 54697,
	"./de-ch.js": 54697,
	"./de.js": 77853,
	"./dv": 60708,
	"./dv.js": 60708,
	"./el": 54691,
	"./el.js": 54691,
	"./en-au": 53872,
	"./en-au.js": 53872,
	"./en-ca": 28298,
	"./en-ca.js": 28298,
	"./en-gb": 56195,
	"./en-gb.js": 56195,
	"./en-ie": 66584,
	"./en-ie.js": 66584,
	"./en-il": 65543,
	"./en-il.js": 65543,
	"./en-in": 9033,
	"./en-in.js": 9033,
	"./en-nz": 79402,
	"./en-nz.js": 79402,
	"./en-sg": 43004,
	"./en-sg.js": 43004,
	"./eo": 32934,
	"./eo.js": 32934,
	"./es": 97650,
	"./es-do": 20838,
	"./es-do.js": 20838,
	"./es-mx": 17730,
	"./es-mx.js": 17730,
	"./es-us": 56575,
	"./es-us.js": 56575,
	"./es.js": 97650,
	"./et": 3035,
	"./et.js": 3035,
	"./eu": 3508,
	"./eu.js": 3508,
	"./fa": 119,
	"./fa.js": 119,
	"./fi": 90527,
	"./fi.js": 90527,
	"./fil": 95995,
	"./fil.js": 95995,
	"./fo": 52477,
	"./fo.js": 52477,
	"./fr": 85498,
	"./fr-ca": 26435,
	"./fr-ca.js": 26435,
	"./fr-ch": 37892,
	"./fr-ch.js": 37892,
	"./fr.js": 85498,
	"./fy": 37071,
	"./fy.js": 37071,
	"./ga": 41734,
	"./ga.js": 41734,
	"./gd": 70217,
	"./gd.js": 70217,
	"./gl": 77329,
	"./gl.js": 77329,
	"./gom-deva": 32124,
	"./gom-deva.js": 32124,
	"./gom-latn": 93383,
	"./gom-latn.js": 93383,
	"./gu": 95050,
	"./gu.js": 95050,
	"./he": 11713,
	"./he.js": 11713,
	"./hi": 43861,
	"./hi.js": 43861,
	"./hr": 26308,
	"./hr.js": 26308,
	"./hu": 90609,
	"./hu.js": 90609,
	"./hy-am": 17160,
	"./hy-am.js": 17160,
	"./id": 74063,
	"./id.js": 74063,
	"./is": 89374,
	"./is.js": 89374,
	"./it": 88383,
	"./it-ch": 21827,
	"./it-ch.js": 21827,
	"./it.js": 88383,
	"./ja": 23827,
	"./ja.js": 23827,
	"./jv": 89722,
	"./jv.js": 89722,
	"./ka": 41794,
	"./ka.js": 41794,
	"./kk": 27088,
	"./kk.js": 27088,
	"./km": 96870,
	"./km.js": 96870,
	"./kn": 84451,
	"./kn.js": 84451,
	"./ko": 63164,
	"./ko.js": 63164,
	"./ku": 98174,
	"./ku-kmr": 6181,
	"./ku-kmr.js": 6181,
	"./ku.js": 98174,
	"./ky": 78474,
	"./ky.js": 78474,
	"./lb": 79680,
	"./lb.js": 79680,
	"./lo": 15867,
	"./lo.js": 15867,
	"./lt": 45766,
	"./lt.js": 45766,
	"./lv": 69532,
	"./lv.js": 69532,
	"./me": 58076,
	"./me.js": 58076,
	"./mi": 41848,
	"./mi.js": 41848,
	"./mk": 30306,
	"./mk.js": 30306,
	"./ml": 73739,
	"./ml.js": 73739,
	"./mn": 99053,
	"./mn.js": 99053,
	"./mr": 86169,
	"./mr.js": 86169,
	"./ms": 73386,
	"./ms-my": 92297,
	"./ms-my.js": 92297,
	"./ms.js": 73386,
	"./mt": 77075,
	"./mt.js": 77075,
	"./my": 72264,
	"./my.js": 72264,
	"./nb": 22274,
	"./nb.js": 22274,
	"./ne": 8235,
	"./ne.js": 8235,
	"./nl": 92572,
	"./nl-be": 43784,
	"./nl-be.js": 43784,
	"./nl.js": 92572,
	"./nn": 54566,
	"./nn.js": 54566,
	"./oc-lnc": 69330,
	"./oc-lnc.js": 69330,
	"./pa-in": 29849,
	"./pa-in.js": 29849,
	"./pl": 94418,
	"./pl.js": 94418,
	"./pt": 79834,
	"./pt-br": 48303,
	"./pt-br.js": 48303,
	"./pt.js": 79834,
	"./ro": 24457,
	"./ro.js": 24457,
	"./ru": 82271,
	"./ru.js": 82271,
	"./sd": 1221,
	"./sd.js": 1221,
	"./se": 33478,
	"./se.js": 33478,
	"./si": 17538,
	"./si.js": 17538,
	"./sk": 5784,
	"./sk.js": 5784,
	"./sl": 46637,
	"./sl.js": 46637,
	"./sq": 86794,
	"./sq.js": 86794,
	"./sr": 45719,
	"./sr-cyrl": 3322,
	"./sr-cyrl.js": 3322,
	"./sr.js": 45719,
	"./ss": 56000,
	"./ss.js": 56000,
	"./sv": 41011,
	"./sv.js": 41011,
	"./sw": 40748,
	"./sw.js": 40748,
	"./ta": 11025,
	"./ta.js": 11025,
	"./te": 11885,
	"./te.js": 11885,
	"./tet": 28861,
	"./tet.js": 28861,
	"./tg": 86571,
	"./tg.js": 86571,
	"./th": 55802,
	"./th.js": 55802,
	"./tk": 59527,
	"./tk.js": 59527,
	"./tl-ph": 29231,
	"./tl-ph.js": 29231,
	"./tlh": 31052,
	"./tlh.js": 31052,
	"./tr": 85096,
	"./tr.js": 85096,
	"./tzl": 79846,
	"./tzl.js": 79846,
	"./tzm": 81765,
	"./tzm-latn": 97711,
	"./tzm-latn.js": 97711,
	"./tzm.js": 81765,
	"./ug-cn": 48414,
	"./ug-cn.js": 48414,
	"./uk": 16618,
	"./uk.js": 16618,
	"./ur": 57777,
	"./ur.js": 57777,
	"./uz": 57609,
	"./uz-latn": 72475,
	"./uz-latn.js": 72475,
	"./uz.js": 57609,
	"./vi": 21135,
	"./vi.js": 21135,
	"./x-pseudo": 64051,
	"./x-pseudo.js": 64051,
	"./yo": 82218,
	"./yo.js": 82218,
	"./zh-cn": 52648,
	"./zh-cn.js": 52648,
	"./zh-hk": 1632,
	"./zh-hk.js": 1632,
	"./zh-mo": 31541,
	"./zh-mo.js": 31541,
	"./zh-tw": 50304,
	"./zh-tw.js": 50304
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 35358;

/***/ }),

/***/ 82627:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ $325a3faab7a68acd$export$a16aca283550c30d)
/* harmony export */ });
/* harmony import */ var _context_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39892);


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
let $325a3faab7a68acd$var$cache = new Map();
function $325a3faab7a68acd$export$a16aca283550c30d(options) {
    let { locale: locale } = (0, _context_mjs__WEBPACK_IMPORTED_MODULE_0__/* .useLocale */ .Y)();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
    if ($325a3faab7a68acd$var$cache.has(cacheKey)) return $325a3faab7a68acd$var$cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    $325a3faab7a68acd$var$cache.set(cacheKey, formatter);
    return formatter;
}



//# sourceMappingURL=useCollator.module.js.map


/***/ }),

/***/ 47912:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ $cc38e7bd3fc7b213$export$2bb74740c4e19def)
/* harmony export */ });
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $cc38e7bd3fc7b213$export$2bb74740c4e19def(node, checkForOverflow) {
    let style = window.getComputedStyle(node);
    let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
    if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
    return isScrollable;
}



//# sourceMappingURL=isScrollable.module.js.map


/***/ }),

/***/ 6868:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* binding */ $2f04cbc44ee30ce0$export$53a0910f038337bd),
  o: () => (/* binding */ $2f04cbc44ee30ce0$export$c826860796309d1b)
});

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/isScrollable.mjs
var isScrollable = __webpack_require__(47912);
;// ./node_modules/@react-aria/utils/dist/getScrollParents.mjs


/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $a40c673dc9f6d9c7$export$94ed1c92c7beeb22(node, checkForOverflow) {
    const scrollParents = [];
    while(node && node !== document.documentElement){
        if ((0, isScrollable/* isScrollable */.o)(node, checkForOverflow)) scrollParents.push(node);
        node = node.parentElement;
    }
    return scrollParents;
}



//# sourceMappingURL=getScrollParents.module.js.map

;// ./node_modules/@react-aria/utils/dist/scrollIntoView.mjs


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
function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
    let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'left');
    let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'top');
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    let x = scrollView.scrollLeft;
    let y = scrollView.scrollTop;
    // Account for top/left border offsetting the scroll top/Left
    let { borderTopWidth: borderTopWidth, borderLeftWidth: borderLeftWidth } = getComputedStyle(scrollView);
    let borderAdjustedX = scrollView.scrollLeft + parseInt(borderLeftWidth, 10);
    let borderAdjustedY = scrollView.scrollTop + parseInt(borderTopWidth, 10);
    // Ignore end/bottom border via clientHeight/Width instead of offsetHeight/Width
    let maxX = borderAdjustedX + scrollView.clientWidth;
    let maxY = borderAdjustedY + scrollView.clientHeight;
    if (offsetX <= x) x = offsetX - parseInt(borderLeftWidth, 10);
    else if (offsetX + width > maxX) x += offsetX + width - maxX;
    if (offsetY <= borderAdjustedY) y = offsetY - parseInt(borderTopWidth, 10);
    else if (offsetY + height > maxY) y += offsetY + height - maxY;
    scrollView.scrollLeft = x;
    scrollView.scrollTop = y;
}
/**
 * Computes the offset left or top from child to ancestor by accumulating
 * offsetLeft or offsetTop through intervening offsetParents.
 */ function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
    const prop = axis === 'left' ? 'offsetLeft' : 'offsetTop';
    let sum = 0;
    while(child.offsetParent){
        sum += child[prop];
        if (child.offsetParent === ancestor) break;
        else if (child.offsetParent.contains(ancestor)) {
            // If the ancestor is not `position:relative`, then we stop at
            // _its_ offset parent, and we subtract off _its_ offset, so that
            // we end up with the proper offset from child to ancestor.
            sum -= ancestor[prop];
            break;
        }
        child = child.offsetParent;
    }
    return sum;
}
function $2f04cbc44ee30ce0$export$c826860796309d1b(targetElement, opts) {
    if (document.contains(targetElement)) {
        let root = document.scrollingElement || document.documentElement;
        let isScrollPrevented = window.getComputedStyle(root).overflow === 'hidden';
        // If scrolling is not currently prevented then we aren’t in a overlay nor is a overlay open, just use element.scrollIntoView to bring the element into view
        if (!isScrollPrevented) {
            var // use scrollIntoView({block: 'nearest'}) instead of .focus to check if the element is fully in view or not since .focus()
            // won't cause a scroll if the element is already focused and doesn't behave consistently when an element is partially out of view horizontally vs vertically
            _targetElement_scrollIntoView;
            let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
            targetElement === null || targetElement === void 0 ? void 0 : (_targetElement_scrollIntoView = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView === void 0 ? void 0 : _targetElement_scrollIntoView.call(targetElement, {
                block: 'nearest'
            });
            let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                var _opts_containingElement_scrollIntoView, _opts_containingElement, _targetElement_scrollIntoView1;
                opts === null || opts === void 0 ? void 0 : (_opts_containingElement = opts.containingElement) === null || _opts_containingElement === void 0 ? void 0 : (_opts_containingElement_scrollIntoView = _opts_containingElement.scrollIntoView) === null || _opts_containingElement_scrollIntoView === void 0 ? void 0 : _opts_containingElement_scrollIntoView.call(_opts_containingElement, {
                    block: 'center',
                    inline: 'center'
                });
                (_targetElement_scrollIntoView1 = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView1 === void 0 ? void 0 : _targetElement_scrollIntoView1.call(targetElement, {
                    block: 'nearest'
                });
            }
        } else {
            let scrollParents = (0, $a40c673dc9f6d9c7$export$94ed1c92c7beeb22)(targetElement);
            // If scrolling is prevented, we don't want to scroll the body since it might move the overlay partially offscreen and the user can't scroll it back into view.
            for (let scrollParent of scrollParents)$2f04cbc44ee30ce0$export$53a0910f038337bd(scrollParent, targetElement);
        }
    }
}



//# sourceMappingURL=scrollIntoView.module.js.map


/***/ }),

/***/ 44346:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ $ef06256079686ba0$export$f8aeda7b10753fa1)
/* harmony export */ });
/* harmony import */ var _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



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

let $ef06256079686ba0$var$descriptionId = 0;
const $ef06256079686ba0$var$descriptionNodes = new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
    let [id, setId] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .N)(()=>{
        if (!description) return;
        let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
            setId(id);
            let node = document.createElement('div');
            node.id = id;
            node.style.display = 'none';
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $ef06256079686ba0$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (desc && --desc.refCount === 0) {
                desc.element.remove();
                $ef06256079686ba0$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        'aria-describedby': description ? id : undefined
    };
}



//# sourceMappingURL=useDescription.module.js.map


/***/ }),

/***/ 17460:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ $e9faafb641e167db$export$90fc3a17d93f704c)
/* harmony export */ });
/* harmony import */ var _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7049);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);



/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler, options) {
    let handleEvent = (0, _useEffectEvent_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .J)(handler);
    let isDisabled = handler == null;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (isDisabled || !ref.current) return;
        let element = ref.current;
        element.addEventListener(event, handleEvent, options);
        return ()=>{
            element.removeEventListener(event, handleEvent, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled,
        handleEvent
    ]);
}



//# sourceMappingURL=useEvent.module.js.map


/***/ })

}]);