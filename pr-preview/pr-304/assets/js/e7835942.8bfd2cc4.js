"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[9636],{

/***/ 56131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_localization_mdx_e78_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-localization-mdx-e78.json
const site_docs_dev_localization_mdx_e78_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/localization","title":"Lokalisering","description":"React Aria har en rad inbyggda funktioner som underlättar skapandet av tillgängliga","source":"@site/docs/dev/localization.mdx","sourceDirName":"dev","slug":"/dev/localization","permalink":"/pr-preview/pr-304/dev/localization","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Lokalisering","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/context.mjs + 2 modules
var context = __webpack_require__(39892);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/useDateFormatter.mjs
var useDateFormatter = __webpack_require__(64653);
// EXTERNAL MODULE: ./node_modules/@internationalized/date/dist/string.mjs
var string = __webpack_require__(77282);
// EXTERNAL MODULE: ./packages/components/src/table/Table.tsx + 1 modules
var Table = __webpack_require__(7465);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Table.mjs + 56 modules
var dist_Table = __webpack_require__(87316);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx + 1 modules
var Button = __webpack_require__(86559);
// EXTERNAL MODULE: ./packages/components/src/date-field/DateField.tsx + 1 modules
var DateField = __webpack_require__(78785);
// EXTERNAL MODULE: ./packages/components/src/textfield/TextField.tsx
var TextField = __webpack_require__(69240);
;// ./apps/docs/src/components/examples/LocalizationExamples.tsx
var LocaleExample=function LocaleExample(){var _useLocale=(0,context/* useLocale */.Y)(),locale=_useLocale.locale,direction=_useLocale.direction;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{lang:locale,dir:direction,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* Table */.XI,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* TableHeader */.A0,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Column */.VP,{isRowHeader:true,children:"Nuvarande spr\xE5k"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Column */.VP,{children:"Nuvarande textriktning"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Table/* TableBody */.BF,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* Row */.fI,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Cell */.fh,{children:locale}),/*#__PURE__*/(0,jsx_runtime.jsx)(Table/* Cell */.fh,{children:direction})]})})]})});};var I18nExample=function I18nExample(){var _React$useState=react.useState('fr-Fr'),locale=_React$useState[0],setLocale=_React$useState[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',gap:'1rem',marginBottom:'1rem'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return setLocale('fr-Fr');},variant:locale==='fr-Fr'?'primary':'secondary',children:"Fran\xE7ais"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return setLocale('sv-Sv');},variant:locale==='sv-Sv'?'primary':'secondary',children:"Svenska"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{onPress:function onPress(){return setLocale('en-En');},variant:locale==='en-En'?'primary':'secondary',children:"English"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{lang:locale,children:/*#__PURE__*/(0,jsx_runtime.jsx)(context/* I18nProvider */.C,{locale:locale,children:/*#__PURE__*/(0,jsx_runtime.jsx)(CurrentDate,{})})})]});};function CurrentDate(){var formatter=(0,useDateFormatter/* useDateFormatter */.i)();return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateField */.v,{defaultValue:(0,string/* parseDate */._U)('2025-02-28'),label:'Datumväljare',description:'Format kan styras med i18nProvider'});}var ErrorMessageExample=function ErrorMessageExample(){return/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* TextField */.A_,{label:'Skriv e-post',type:'email',description:'Validering/Felmeddelanden beror av inställningarna i browser'});};
;// ./apps/docs/docs/dev/localization.mdx


const frontMatter = {
	title: 'Lokalisering',
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Lokalisering';

const assets = {

};




const toc = [{
  "value": "useLocale",
  "id": "uselocale",
  "level": 2
}, {
  "value": "I18nProvider",
  "id": "i18nprovider",
  "level": 2
}, {
  "value": "useMessageFormatter",
  "id": "usemessageformatter",
  "level": 2
}, {
  "value": "Midas komponenter",
  "id": "midas-komponenter",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "lokalisering",
        children: "Lokalisering"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["React Aria har en rad inbyggda funktioner som underlättar skapandet av tillgängliga\noch internationella användargränssnitt. Midas komponenter, som bygger på React Aria\nuppdateras automatiskt när språkmiljön ändras. Detta innebär att din applikation kan anpassa\nsig dynamiskt till olika språk utan alltför mycket manuell handpåläggning. För mer ingående dokumentation,\nse ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/internationalization.html",
        children: "React Aria Internationalization"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uselocale",
      children: "useLocale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att säkerställa att lokalisering fungerar bör ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useLocale"
      }), " användas i root av applikationen. På så sätt får\ndu tillgång till browserns språkinställning. Normalt fungerar ", (0,jsx_runtime.jsx)(_components.code, {
        children: "locale"
      }), " utan att hämta in den explicit men för till\nexempel SSR bör ", (0,jsx_runtime.jsx)(_components.code, {
        children: "useLocale"
      }), " användas, se ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/internationalization.html",
        children: "React Aria"
      }), " för referens."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        metastring: "jsx",
        children: "import {useLocale} from 'react-aria-components';\nfunction YourApp() {\n  let {locale, direction} = useLocale();\n\n  return (\n    <div lang={locale} dir={direction}>\n      {/* your app here */}\n    </div>\n  );\n}\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(LocaleExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "i18nprovider",
      children: "I18nProvider"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Om det finns behov av att skriva över användarens inställningar går det att använda ", (0,jsx_runtime.jsx)(_components.code, {
        children: "I18nProvider"
      }), " från React Aria.\nVia I18nProvider går det att styra beteendet för datum och tidsrelaterade komponenter men ", (0,jsx_runtime.jsx)(_components.em, {
        children: "inte"
      }), " ta kontroll över felmeddelanden\neller annan information, det sätts via browsern."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        metastring: "jsx",
        children: "<I18nProvider locale={locale}>\n  <DateField/>\n</I18nProvider>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(I18nExample, {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(ErrorMessageExample, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usemessageformatter",
      children: "useMessageFormatter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["För att översätta eller anpassa enskilda strängar finns\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/useMessageFormatter.html",
        children: "useMessageFormatter"
      }), ". Motsvarande för\nsiffror och valutor är ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-spectrum.adobe.com/react-aria/useNumberFormatter.html",
        children: "useNumberFormatter"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "midas-komponenter",
      children: "Midas komponenter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Officiellt har Midas inte fullt stöd för flera språk men i utgångsläget fungerar de flesta komponenter\noch respekterar användarens inställningar i browsern. Framtida uppdateringar eller nya komponenter\nbygger på React Arias ramverk så den allmänna rekommendationen är att använda metoder och hooks därifrån för\natt lösa eventuella lokaliseringsproblem. Buggrapport eller Feature requests kan skapas via\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/migrationsverket/midas/issues",
        children: "github issues"
      }), "."]
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

/***/ 93284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var _home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98587);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var react_aria_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92466);
/* harmony import */ var _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76578);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
'use client';var _excluded=["children"];var Checkbox=function Checkbox(_ref){var _children=_ref.children,props=(0,_home_runner_work_midas_midas_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_ref,_excluded);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_aria_components__WEBPACK_IMPORTED_MODULE_3__/* .Checkbox */ .Sc,Object.assign({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.checkbox,props.className)},props,{children:function children(_ref2){var isIndeterminate=_ref2.isIndeterminate;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.checkboxInner,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:16,height:16,viewBox:"0 0 18 18","aria-hidden":"true",children:isIndeterminate?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:4,y:8,width:10,height:2}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline",{points:"3,9 7,13 15,4"})})}),_children]});}}));};

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
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/DateField.mjs + 42 modules
var DateField = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Label.mjs
var Label = __webpack_require__(21704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Text.mjs
var Text = __webpack_require__(27279);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/FieldError.mjs
var FieldError = __webpack_require__(44300);
;// ./packages/components/src/date-field/DateField.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DateField_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-placeholder":"light-dark(#a6a6a6, #525252)","--text-invalid":"light-dark(#e62323, #e62323)","--border-invalid":"light-dark(#e62323, #e62323)","--focus":"0 0 0 2px white, 0 0 0 4px black","--field-hover-01":"light-dark(#e6e6e6, #333333)","--border-strong":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--text-primary":"light-dark(#171717, #f2f2f2)","--text-disabled":"light-dark(#bfbfbf, #525252)","dateField":"dateField_w_5V","isDisabled":"isDisabled_v4dE","inputField":"inputField_RpLn","segment":"segment_zhbe","label":"label_ki1W","description":"description_fiZV","fieldError":"fieldError_Sgyk"});
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/date-field/DateField.tsx
var _excluded=["label","description","errorMessage","className"];function DateField_DateField(_ref){var label=_ref.label,description=_ref.description,errorMessage=_ref.errorMessage,className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsxs)(DateField/* DateField */.vM,Object.assign({},props,{className:(0,clsx/* default */.A)(DateField_module.dateField,props.isDisabled&&DateField_module.isDisabled,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{className:DateField_module.label,children:label}),description&&/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",className:DateField_module.description,children:description}),/*#__PURE__*/(0,jsx_runtime.jsx)(FieldError/* FieldError */.b,{className:DateField_module.fieldError,children:errorMessage}),/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateInput */.J3,{className:DateField_module.inputField,children:function children(segment){return/*#__PURE__*/(0,jsx_runtime.jsx)(DateField/* DateSegment */.Eu,{segment:segment,className:DateField_module.segment});}})]}));}

/***/ }),

/***/ 7465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fh: () => (/* binding */ Cell),
  VP: () => (/* binding */ Column),
  fI: () => (/* binding */ Row),
  XI: () => (/* binding */ Table),
  A0: () => (/* binding */ TableHeader)
});

// UNUSED EXPORTS: TableBody

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(20454);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
;// ./packages/components/src/table/Table.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Table_module = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--layer-accent-01":"light-dark(#d9d9d9, #383838)","--layer-01":"light-dark(#f2f2f2, #262626)","--border-subtle":"light-dark(#bfbfbf, #383838)","--layer-accent-hover-01":"light-dark(#cccccc, #474747)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--border-strong":"light-dark(#171717, #f2f2f2)","--text-primary":"light-dark(#171717, #f2f2f2)","cell":"cell_BlIu","table":"table_nvoM","narrow":"narrow_Jh7A","striped":"striped_wp0e","row":"row_o3yW","tableHeader":"tableHeader_BmsY","column":"column_NPIT"});
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Table.mjs + 56 modules
var dist_Table = __webpack_require__(87316);
// EXTERNAL MODULE: ./node_modules/@react-aria/collections/dist/CollectionBuilder.mjs + 1 modules
var CollectionBuilder = __webpack_require__(41177);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/Button.mjs + 1 modules
var Button = __webpack_require__(44080);
// EXTERNAL MODULE: ./packages/components/src/checkbox/Checkbox.tsx
var Checkbox = __webpack_require__(93284);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/grip-vertical.js
var grip_vertical = __webpack_require__(21436);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-up-wide-narrow.js
var arrow_up_wide_narrow = __webpack_require__(4804);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-down-narrow-wide.js
var arrow_down_narrow_wide = __webpack_require__(85785);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/table/Table.tsx
'use client';var _excluded=["narrow","striped","className"],_excluded2=["id","columns","children"],_excluded3=["children"];var Table=function Table(_ref){var narrow=_ref.narrow,striped=_ref.striped,className=_ref.className,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames=(0,clsx/* default */.A)(Table_module.table,narrow&&Table_module.narrow,striped&&Table_module.striped,className);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Table/* Table */.XI,Object.assign({className:classNames},rest));};var TableHeader=function TableHeader(_ref2){var columns=_ref2.columns,children=_ref2.children;var _useTableOptions=(0,dist_Table/* useTableOptions */.mz)(),selectionBehavior=_useTableOptions.selectionBehavior,selectionMode=_useTableOptions.selectionMode,allowsDragging=_useTableOptions.allowsDragging;return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_Table/* TableHeader */.A0,{className:Table_module.tableHeader,children:[allowsDragging&&/*#__PURE__*/(0,jsx_runtime.jsx)(Column,{}),selectionBehavior==='toggle'&&/*#__PURE__*/(0,jsx_runtime.jsx)(Column,{width:50,children:selectionMode==='multiple'&&/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{slot:"selection"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(CollectionBuilder/* Collection */.pM,{items:columns,children:children})]});};var Row=function Row(_ref3){var id=_ref3.id,columns=_ref3.columns,children=_ref3.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref3,_excluded2);var _useTableOptions2=(0,dist_Table/* useTableOptions */.mz)(),selectionBehavior=_useTableOptions2.selectionBehavior,allowsDragging=_useTableOptions2.allowsDragging;return/*#__PURE__*/(0,jsx_runtime.jsxs)(dist_Table/* Row */.fI,Object.assign({id:id,className:(0,clsx/* default */.A)(Table_module.row)},rest,{children:[allowsDragging&&/*#__PURE__*/(0,jsx_runtime.jsx)(Cell,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{slot:"drag",children:/*#__PURE__*/(0,jsx_runtime.jsx)(grip_vertical/* default */.A,{size:20})})}),selectionBehavior==='toggle'&&/*#__PURE__*/(0,jsx_runtime.jsx)(Cell,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Checkbox/* Checkbox */.S,{slot:"selection"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(CollectionBuilder/* Collection */.pM,{items:columns,children:children})]}));};var Column=function Column(_ref4){var _children=_ref4.children,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref4,_excluded3);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Table/* Column */.VP,Object.assign({className:Table_module.column},rest,{children:function children(_ref5){var allowsSorting=_ref5.allowsSorting,sortDirection=_ref5.sortDirection;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[_children,allowsSorting&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",className:"sort-indicator",children:sortDirection==='ascending'?/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_up_wide_narrow/* default */.A,{size:20}):/*#__PURE__*/(0,jsx_runtime.jsx)(arrow_down_narrow_wide/* default */.A,{size:20})})]});}}));};var Cell=function Cell(_ref6){var rest=Object.assign({},((0,objectDestructuringEmpty/* default */.A)(_ref6),_ref6));return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Table/* Cell */.fh,Object.assign({className:Table_module.cell},rest));};

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

/***/ 76578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--text-disabled":"light-dark(#bfbfbf, #525252)","--border-strong":"light-dark(#171717, #f2f2f2)","--layer-hover-01":"light-dark(#e6e6e6, #333333)","--border-disabled":"light-dark(#bfbfbf, #525252)","--breakpoint-sm":"(max-width: 767px)","--border-invalid":"light-dark(#e62323, #e62323)","--icon-on-color":"light-dark(#ffffff, #ffffff)","--button-background-primary":"light-dark(#143c50, #2e7ca5)","--button-background-primary-active":"light-dark(#2e7ca5, #143c50)","--button-background-primary-hover":"light-dark(#25607f, #25607f)","wrap":"wrap_YzPY","checkboxInner":"checkboxInner_Nam1","checkbox":"checkbox_J2GB","checkboxGroup":"checkboxGroup_iAq9"});

/***/ }),

/***/ 53502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tokens":"\"../theme/tokens.css\"","--font-family":"\"Inter\", sans-serif","--text-primary":"light-dark(#171717, #f2f2f2)","--field-01":"light-dark(#f2f2f2, #262626)","--field-hover-01":"light-dark(#e6e6e6, #333333)","--border-strong":"light-dark(#171717, #f2f2f2)","--border-invalid":"light-dark(#e62323, #e62323)","--text-disabled":"light-dark(#bfbfbf, #525252)","--text-invalid":"light-dark(#e62323, #e62323)","--field-disabled":"light-dark(#f2f2f2, #262626)","--focus":"0 0 0 2px white, 0 0 0 4px black","inputField":"inputField_NRYV","inputWrapper":"inputWrapper_NR0B","label":"label_UgTd","text":"text_E1GG","fieldError":"fieldError_GOHN","passwordText":"passwordText_gBIs","count":"count_PsfX","countExceeded":"countExceeded_hrAA","input":"input_g6A6","wrap":"wrap_ljmz","passwordButton":"passwordButton_kacG"});

/***/ })

}]);