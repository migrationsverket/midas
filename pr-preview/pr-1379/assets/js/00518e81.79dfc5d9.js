"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[5453],{

/***/ 82157
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dev_react_select_mdx_005_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dev-react-select-mdx-005.json
const site_docs_dev_react_select_mdx_005_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dev/react-select","title":"react-select","description":"Implementation av react-select","source":"@site/docs/dev/react-select.mdx","sourceDirName":"dev","slug":"/dev/react-select","permalink":"/pr-preview/pr-1379/dev/react-select","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"react-select","description":"Implementation av react-select"},"sidebar":"sideBar","previous":{"title":"React Datepicker","permalink":"/pr-preview/pr-1379/dev/react-datepicker"},"next":{"title":"Tailwind CSS","permalink":"/pr-preview/pr-1379/dev/tailwind"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.esm.js + 38 modules
var react_select_esm = __webpack_require__(23172);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(34704);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
// EXTERNAL MODULE: ./packages/theme/src/lib/style-dictionary-dist/variables.js
var variables = __webpack_require__(90904);
// EXTERNAL MODULE: ./tools/test-utils/src/index.ts + 4 modules
var src = __webpack_require__(71498);
;// ./apps/docs/src/components/examples/react-select/MultiComboBox.tsx
var MultiComboBox=function MultiComboBox(_ref){var _ref$id=_ref.id,id=_ref$id===void 0?'basic-example':_ref$id,_ref$className=_ref.className,className=_ref$className===void 0?'select':_ref$className;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:'flex',flexDirection:'column'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,{htmlFor:id,children:"Select employee"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.E,{slot:"description",children:"Employees from all departments"}),/*#__PURE__*/(0,jsx_runtime.jsx)(react_select_esm/* default */.A,{className:className,classNamePrefix:"midas",closeMenuOnSelect:false,hideSelectedOptions:false,inputId:id,isMulti:true,isSearchable:true,noOptionsMessage:function noOptionsMessage(){return'No match';},options:src/* employees */.K1.map(function(_ref2){var id=_ref2.id,firstName=_ref2.firstName,lastName=_ref2.lastName;return{value:id,label:[firstName,lastName].join(' ')};}),placeholder:"Select an employee",styles:{multiValue:function multiValue(provided,_ref3){var isFocused=_ref3.isFocused;return Object.assign({},provided,{boxShadow:isFocused?variables/* stateFocus */.EWd:undefined});}},unstyled:true})]});};
;// ./apps/docs/src/components/examples/react-select/index.ts

;// ./apps/docs/docs/dev/react-select.mdx


const frontMatter = {
	title: 'react-select',
	description: 'Implementation av react-select'
};
const contentTitle = 'react-select';

const assets = {

};




const toc = [{
  "value": "När du ska använda react-select",
  "id": "när-du-ska-använda-react-select",
  "level": 2
}, {
  "value": "Komma igång",
  "id": "komma-igång",
  "level": 2
}, {
  "value": "Exempel",
  "id": "exempel",
  "level": 2
}, {
  "value": "ComboBox med flerval",
  "id": "combobox-med-flerval",
  "level": 3
}, {
  "value": "Medium size",
  "id": "medium-size",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "react-select",
        children: "react-select"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["I ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@midas-ds/components"
      }), " finns komponenterna ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/select",
        children: "Select"
      }), " och ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/combobox",
        children: "ComboBox"
      }), "\ndär användaren kan kan klicka eller söka fram ett val. Select stödjer flerval, ComboBox gör det ej för närvarande."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ett annat populärt bibliotek som kombinerar dessa mönster är ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://react-select.com/",
        children: "react-select"
      }), ".\nTack vare sitt API kan samma komponent leverera snarlik funktionalitet som komponenter i Midas och dessutom t.ex. flerval för ComboBox."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Stilarna för react-select är just nu i en tidig version och är ett arbete som pågår. react-select är inte en del av kärnbiblioteket i Midas, vilket innebär att supporten är begränsad. Vi är öppna för kodbidrag till vårt ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/migrationsverket/midas",
          children: "repo"
        }), " och tar gärna emot förslag på stilar som saknas när du implementerar react-select."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "när-du-ska-använda-react-select",
      children: "När du ska använda react-select"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flerval kombinerat med sökbarhet (ComboBox med flerval)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "komma-igång",
      children: "Komma igång"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "För att använda react-select med Midas-stilar måste du först installera de nödvändiga beroendena:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @midas-ds/select-styles react-select\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Importera sedan Midas-stilarna för react-select:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "@import '@midas-ds/select-styles/react-select.css';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Använd åtminstone följande props:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "{2,3,4}",
        children: "<Select\n  className='select'\n  classNamePrefix='midas'\n  unstyled\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exempel",
      children: "Exempel"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "combobox-med-flerval",
      children: "ComboBox med flerval"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Följande exempel visar hur du kan använda react-select för att sätta upp en komponent som efterliknar ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/components/combobox",
        children: "ComboBox"
      }), " med flerval."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        overflow: 'visible'
      },
      children: (0,jsx_runtime.jsx)(MultiComboBox, {
        id: "multi-combo-box"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import Select, { CSSObjectWithLabel, MultiValueProps } from 'react-select'\nimport { Label, Text } from '@midas-ds/components'\nimport { variables } from '@midas-ds/theme'\nimport '@midas-ds/select-styles/react-select.css'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<div style={{ display: 'flex', flexDirection: 'column' }}>\n  <Label htmlFor='employee'>Select employee</Label>\n  <Text slot='description'>Employees from all departments</Text>\n  <Select\n    className='select'\n    classNamePrefix='midas'\n    closeMenuOnSelect={false}\n    hideSelectedOptions={false}\n    inputId='employee'\n    isMulti\n    isSearchable\n    noOptionsMessage={() => 'No match'}\n    options={[\n      { value: '0', label: 'Anna Andersson' },\n      { value: '1', label: 'Erik Eriksson' },\n      // ...\n    ]}\n    placeholder='Select an employee'\n    styles={{\n      multiValue: (provided: CSSObjectWithLabel, { isFocused }: MultiValueProps) => ({\n        ...provided,\n        boxShadow: isFocused ? variables.stateFocus : undefined,\n      }),\n    }}\n    unstyled\n  />\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medium-size",
      children: "Medium size"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Midas formulärkomponenter stödjer två storlekar ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"large\" | \"medium\""
      }), ". Använd klassnamnet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"medium\""
      }), " för att åstadkomma samma resultat för react-select."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      style: {
        overflow: 'visible'
      },
      children: (0,jsx_runtime.jsx)(MultiComboBox, {
        id: "multi-combo-box-medium",
        className: "select medium"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Select className=\"select medium\"\n// ...\n>\n"
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



/***/ },

/***/ 34704
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Label)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/utils/src/index.ts + 3 modules
var src = __webpack_require__(51704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Label.mjs
var private_Label = __webpack_require__(37820);
;// ./packages/components/src/label/Label.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Label_module = ({"labelBase":"labelBase_BRgo"});
// EXTERNAL MODULE: ./packages/components/src/label/LabelWrapper.tsx + 3 modules
var LabelWrapper = __webpack_require__(73202);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/Label.tsx
var _excluded=["children","className","elementType"];var DEFAULT_ELEMENT='label';var Label=function Label(_ref){var children=_ref.children,className=_ref.className,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var labelProps=Object.assign({className:(0,src/* clsx */.$z)(Label_module.labelBase,className),elementType:elementType||DEFAULT_ELEMENT},rest);var ctx=react.useContext(LabelWrapper/* LabelWrapperContext */.d$);return/*#__PURE__*/(0,jsx_runtime.jsx)(private_Label/* Label */.J,Object.assign({},labelProps,{"aria-describedby":ctx==null?void 0:ctx.popoverId,children:children}));};

/***/ },

/***/ 73202
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Dialog.mjs + 1 modules
var Dialog = __webpack_require__(99592);
// EXTERNAL MODULE: ./packages/utils/src/index.ts + 3 modules
var src = __webpack_require__(51704);
;// ./packages/components/src/label/intl/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"moreInfo":"More info"},"sv":{"moreInfo":"Mer information"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/InfoPopover.tsx
/** Display an info-icon with popover next to the label to further explain what the user should enter in the field */var InfoPopover=function InfoPopover(_ref){var children=_ref.children,ariaLabel=_ref['aria-label'];var ctx=(0,react.useContext)(LabelWrapperContext);var strings=(0,src/* useLocalizedStringFormatter */.oe)(translations_namespaceObject);return/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* DialogTrigger */.zM,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.$,{"aria-label":ariaLabel||strings.format('moreInfo'),className:LabelWrapper_module.labelPopoverTrigger,id:ctx==null?void 0:ctx.popoverId,size:"medium",slot:null,variant:"icon",children:/*#__PURE__*/(0,jsx_runtime.jsx)(info/* default */.A,{size:20})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,{children:children})]});};
;// ./packages/components/src/label/LabelWrapper.tsx
/* unused harmony import specifier */ var React;
var LabelWrapperContext=/*#__PURE__*/react.createContext(undefined);var useLabelWrapperContext=function useLabelWrapperContext(){return React.useContext(LabelWrapperContext);};var LabelWrapper=function LabelWrapper(_ref){var children=_ref.children,popover=_ref.popover;var popoverId=react.useId();if(popover)return/*#__PURE__*/(0,jsx_runtime.jsx)(LabelWrapperContext.Provider,{value:{popoverId:popoverId},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:LabelWrapper_module.labelPopover,children:[children,/*#__PURE__*/(0,jsx_runtime.jsx)(InfoPopover,Object.assign({},popover))]})});return children;};

/***/ },

/***/ 28777
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Popover_Popover)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/utils.mjs
var utils = __webpack_require__(95841);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Popover.mjs + 1 modules
var Popover = __webpack_require__(51146);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var OverlayArrow = __webpack_require__(57653);
// EXTERNAL MODULE: ./packages/utils/src/index.ts + 3 modules
var src = __webpack_require__(51704);
;// ./packages/components/src/popover/Popover.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Popover_module = ({"popover":"popover_qr_p","arrow":"arrow_bhQK"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/popover/Popover.tsx
var _excluded=["className","hideArrow","offset"];/**
 * @deprecated since v17.0.0 please use `PopoverProps` instead
 */var Popover_Popover=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){var _useContextProps=(0,utils/* useContextProps */.JT)(props,ref,Popover/* PopoverContext */.n),mergedProps=_useContextProps[0],mergedRef=_useContextProps[1];var className=mergedProps.className,_mergedProps$hideArro=mergedProps.hideArrow,hideArrow=_mergedProps$hideArro===void 0?false:_mergedProps$hideArro,_mergedProps$offset=mergedProps.offset,offset=_mergedProps$offset===void 0?4:_mergedProps$offset,rest=(0,objectWithoutPropertiesLoose/* default */.A)(mergedProps,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A,Object.assign({className:(0,src/* clsx */.$z)(Popover_module.popover,className),offset:offset,ref:mergedRef},rest,{children:(0,utils/* composeRenderProps */.HW)(mergedProps.children,function(children){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!hideArrow&&/*#__PURE__*/(0,jsx_runtime.jsx)(OverlayArrow/* OverlayArrow */.k,{className:Popover_module.arrow,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{height:16,viewBox:"0 0 16 16",width:16,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M0 0 L8 8 L16 0"})})}),children]});})}));});

/***/ },

/***/ 19615
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./packages/utils/src/index.ts + 3 modules
var src = __webpack_require__(51704);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/private/Text.mjs
var private_Text = __webpack_require__(20987);
;// ./packages/components/src/text/Text.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Text_module = ({"body":"body_Vxmv","body-small":"body-small_JwBE","description":"description_XYgX","description-small":"description-small_tno4","bold":"bold_YLmd","italic":"italic_CnUx"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/text/Text.tsx
var _excluded=["children","className","size","isExpressive","elementType"];var DEFAULT_ELEMENT='span';var Text=function Text(_ref){var _clsx;var children=_ref.children,className=_ref.className,size=_ref.size,_ref$isExpressive=_ref.isExpressive,isExpressive=_ref$isExpressive===void 0?false:_ref$isExpressive,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var getClassName=function getClassName(){var isDescription=rest.slot==='description';if(isDescription){return size==='small'?Text_module['description-small']:Text_module['description'];}return size==='small'?Text_module['body-small']:Text_module['body'];};var textProps=Object.assign({className:(0,src/* clsx */.$z)(getClassName(),(_clsx={},_clsx[Text_module.bold]=['b','strong'].includes(elementType),_clsx[Text_module.italic]=['i','em'].includes(elementType),_clsx),className),elementType:elementType||DEFAULT_ELEMENT},isExpressive&&{'data-expressive':true},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(private_Text/* Text */.E,Object.assign({},textProps,{children:children}));};

/***/ },

/***/ 90904
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A1M: () => (/* binding */ brandPrimary),
/* harmony export */   EWd: () => (/* binding */ stateFocus),
/* harmony export */   JI6: () => (/* binding */ layer02Base),
/* harmony export */   Q0Q: () => (/* binding */ textOnColor),
/* harmony export */   Qni: () => (/* binding */ buttonBackgroundPrimaryBase),
/* harmony export */   Sjf: () => (/* binding */ spaceMedium),
/* harmony export */   _2e: () => (/* binding */ borderColorPrimary),
/* harmony export */   ak9: () => (/* binding */ layer01Base),
/* harmony export */   eku: () => (/* binding */ textPrimary),
/* harmony export */   jc5: () => (/* binding */ colorGray200),
/* harmony export */   l9i: () => (/* binding */ borderColorSubtle),
/* harmony export */   tK4: () => (/* binding */ field01Base),
/* harmony export */   w$9: () => (/* binding */ backgroundBase),
/* harmony export */   w1t: () => (/* binding */ iconOnColor)
/* harmony export */ });
/* unused harmony exports base10, base15, base20, base30, base40, base50, base60, base70, base75, base80, base90, base100, base110, base120, base130, base140, base150, base00, base05, windowSizesSm, windowSizesMd, windowSizesLg, windowSizesXl, breakpointsXs, breakpointsSm, breakpointsMd, breakpointsLg, breakpointsXl, buttonBackgroundPrimaryHover, buttonBackgroundPrimaryActive, buttonBackgroundSecondaryBase, buttonBackgroundSecondaryHover, buttonBackgroundSecondaryActive, buttonBackgroundTertiaryHover, buttonBackgroundTertiaryActive, buttonBackgroundDangerBase, buttonBackgroundDangerHover, buttonBackgroundDangerActive, buttonBackgroundDisabled, buttonBorderSecondary, buttonIconHover, buttonIconActive, colorBlackBase, colorBlackHover, colorBlackOpacity5, colorBlackOpacity10, colorWhiteBase, colorWhiteHover, colorWhiteOpacity13, colorWhiteOpacity15, colorGray10, colorGray20, colorGray30, colorGray40, colorGray50, colorGray60, colorGray70, colorGray80, colorGray90, colorGray100, colorGray110, colorGray120, colorGray130, colorGray140, colorGray150, colorGray160, colorGray170, colorGray180, colorGray190, colorBlue10, colorBlue20, colorBlue40, colorBlue50, colorBlue60, colorBlue70, colorBlue80, colorBlue90, colorBlue100, colorBlue110, colorBlue120, colorBlue130, colorBlue150, colorPurple80, colorPurple110, colorRed100, colorOrange100, colorSignalBlue10, colorSignalBlue20, colorSignalBlue100, colorSignalBlue170, colorSignalBlue180, colorSignalGreen20, colorSignalGreen30, colorSignalGreen100, colorSignalGreen150, colorSignalGreen170, colorSignalGreen180, colorSignalYellow10, colorSignalYellow20, colorSignalYellow30, colorSignalYellow40, colorSignalYellow50, colorSignalYellow60, colorSignalYellow70, colorSignalYellow80, colorSignalYellow90, colorSignalYellow100, colorSignalYellow110, colorSignalYellow120, colorSignalYellow130, colorSignalYellow140, colorSignalYellow150, colorSignalYellow160, colorSignalYellow170, colorSignalYellow180, colorSignalYellow190, colorSignalYellow200, colorSignalRed10, colorSignalRed20, colorSignalRed30, colorSignalRed40, colorSignalRed50, colorSignalRed60, colorSignalRed70, colorSignalRed80, colorSignalRed90, colorSignalRed100, colorSignalRed110, colorSignalRed120, colorSignalRed130, colorSignalRed140, colorSignalRed150, colorSignalRed160, colorSignalRed170, colorSignalRed180, colorSignalRed190, colorSignalRed200, colorSky20, colorSky60, colorSky180, colorMint20, colorMint60, colorMint180, colorCream20, colorCream60, colorCream180, colorTeal20, colorTeal60, colorTeal180, colorLagoon20, colorLagoon60, colorLagoon180, colorLavender20, colorLavender60, colorLavender180, colorPeach20, colorPeach60, colorPeach180, colorPippin20, colorPippin60, colorPippin180, spacing10, spacing20, spacing30, spacing40, spacing50, spacing60, spacing70, spacing80, spacing90, spacingXsmall, spacingSmall, spacingMedium, spacingLarge, spacingXlarge, size10, size15, size20, size30, size40, size50, size60, size70, size75, size80, size90, size100, size110, size120, size130, size140, size150, size00, size05, sizeControlSm, sizeIcon, sizeIconSm, sizeOption, sizeControlMd, sizeControl, backgroundHover, backgroundInverse, layer01Hover, layer01Selected, layer01SelectedHover, layer02Hover, layer02Selected, layer02SelectedHover, layerAccent01Base, layerAccent01Hover, layerAccent01Selected, layerAccent02Base, layerAccent02Hover, layerAccent02Selected, borderColorSecondary, borderColorTertiary, borderColorDisabled, borderWidth, field01Hover, field01Active, field01Disabled, field02Base, field02Hover, field02Active, field02Disabled, skeleton01, skeleton02, iconPrimary, iconSecondary, iconTertiary, iconInverse, iconDisabled, iconSuccess, iconInfo, iconWarning, iconImportant, iconReadOnly, linkEnabled, linkHover, linkPressed, linkVisited, progressBarTrackBackground, progressBarIndicatorBackground, supportBorderSuccess, supportBorderInfo, supportBorderImportant, supportBorderWarning, supportBackgroundSuccess, supportBackgroundSuccessHover, supportBackgroundInfo, supportBackgroundInfoHover, supportBackgroundImportant, supportBackgroundImportantHover, supportBackgroundWarning, supportBackgroundWarningHover, tagSkyBackground, tagSkyBorderColor, tagBlueBackground, tagBlueBorderColor, tagMintBackground, tagMintBorderColor, tagGreenBackground, tagGreenBorderColor, tagCreamBackground, tagCreamBorderColor, tagYellowBackground, tagYellowBorderColor, tagTealBackground, tagTealBorderColor, tagLagoonBackground, tagLagoonBorderColor, tagLagoonblueBackground, tagLagoonblueBorderColor, tagLavenderBackground, tagLavenderBorderColor, tagPurpleBackground, tagPurpleBorderColor, tagPeachBackground, tagPeachBorderColor, tagOrangeBackground, tagOrangeBorderColor, tagPippinBackground, tagPippinBorderColor, tagRedBackground, tagRedBorderColor, textSecondary, textTertiary, textInverse, textDisabled, textWarning, textPlaceholder, textReadOnly, badgeBackground, calendarDateBackgroundHover, calendarDateBackgroundSelected, calendarDateBackgroundStartRange, calendarDateBackgroundInRange, calendarDateBackgroundEndRange, logoPrimary, menuItemBackgroundHover, menuItemBackgroundSelected, menuTextSectionHeader, navigationLinkBackgroundHover, navigationLinkBackgroundSelected, navigationLinkBackgroundSelectedHover, overlayBackground, overlayBlur, cardBackgroundBase, cardShadow, panelShadow, space10, space30, space50, space60, space70, space75, space90, space130, space150, spaceXsmall, spaceSmall, spaceLarge, spaceXlarge, space05, stateFocusInset, stateFocusContrastModeOutline, stateFocusContrastModeOffset, stateInvalid, transitionDurationSlow, transitionDurationNormal, transitionDurationFast, transitionDurationQuick, transitionDurationInstant, transitionTimingEaseOut, transitionTimingEaseIn, transitionTimingEaseInOut, transitionPanelCollapse, transitionPanelExpand, typographyFontFamily, typographyFontSize10, typographyFontSize20, typographyFontSize30, typographyFontSize40, typographyFontSize50, typographyFontSize60, typographyFontSize70, typographyFontSize80, typographyFontSize90, typographyFontSize100, typographyLineHeight10, typographyLineHeight20, typographyLineHeight30, typographyLineHeight40, typographyLineHeight50, typographyLineHeight60, typographyLineHeight70, typographyLineHeight80, typographyLineHeight90, typographyLineHeight100, typographyWeightThin, typographyWeightExtraLight, typographyWeightLight, typographyWeightRegular, typographyWeightMedium, typographyWeightSemiBold, typographyWeightBold, typographyWeightExtraBold, typographyWeightBlack, typographyBody, typographyBodySmall, typographyDescription, typographyDescriptionSmall, zIndexBase, zIndexAbove, zIndexSidebar, zIndexModal, zIndexToast, zIndexSkipToContent */
/**
 * Do not edit directly, this file was auto-generated.
 */var base10="0.125rem";var base15="0.188rem";var base20="0.25rem";var base30="0.375rem";var base40="0.5rem";var base50="0.625rem";var base60="0.75rem";var base70="0.875rem";var base75="0.938rem";var base80="1rem";var base90="1.25rem";var base100="1.5rem";var base110="1.75rem";var base120="2rem";var base130="2.5rem";var base140="2.75rem";var base150="3rem";var base00="0rem";var base05="0.063rem";var windowSizesSm="480px";// Liten skärmstorlek. 480px.
var windowSizesMd="768px";// Mellanstor skärmstorlek. 768px.
var windowSizesLg="1024px";// Stor skärmstorlek. 1024px.
var windowSizesXl="1280px";// Extra stor skärmstorlek. 1280px.
var breakpointsXs="(max-width: calc(480px - 1px))";// Extra liten skärm. Upp till 479px (max-width).
var breakpointsSm="(min-width: 480px)";// Liten skärm och uppåt. Från 480px (min-width).
var breakpointsMd="(min-width: 768px)";// Mellanstor skärm och uppåt. Från 768px (min-width).
var breakpointsLg="(min-width: 1024px)";// Stor skärm och uppåt. Från 1024px (min-width).
var breakpointsXl="(min-width: 1280px)";// Extra stor skärm och uppåt. Från 1280px (min-width).
var buttonBackgroundPrimaryBase="light-dark(#143c50, #2e7ca5)";// Färg på primärknapp
var buttonBackgroundPrimaryHover="light-dark(#25607f, #25607f)";// Hover state på primärknapp
var buttonBackgroundPrimaryActive="light-dark(#2e7ca5, #143c50)";// Active state för primärknapp
var buttonBackgroundSecondaryBase="transparent";// Färg på sekundärknapp
var buttonBackgroundSecondaryHover="light-dark(#0000000d, #ffffff21)";// Hover state på sekundärknapp
var buttonBackgroundSecondaryActive="light-dark(#0000001a, #ffffff26)";// Active state för sekundärknapp
var buttonBackgroundTertiaryHover="light-dark(#0000000d, #ffffff21)";// Hover state för tertiär knapp
var buttonBackgroundTertiaryActive="light-dark(#0000001a, #ffffff26)";// Active state för tertiär knapp
var buttonBackgroundDangerBase="light-dark(#e62323, #e62323)";// Färg på danger knapp
var buttonBackgroundDangerHover="light-dark(#bc1d1d, #bc1d1d)";// Hover state för danger knapp
var buttonBackgroundDangerActive="light-dark(#7d1313, #7d1313)";// Active state för danger knapp
var buttonBackgroundDisabled="light-dark(#0000000d,#ffffff21)";// Disabled state för knappar
var buttonBorderSecondary="light-dark(#143c50, #f2f2f2)";// Kantfärg för sekundärknapp
var buttonIconHover="light-dark(#0000000d, #ffffff21)";// Hover state för ikonknappar
var buttonIconActive="light-dark(#00000033, #ffffff33)";// Active state för ikoner
var colorBlackBase="#000";// Black
var colorBlackHover="#0d0d0d";// Black hover
var colorBlackOpacity5="#0000000d";// Black with 5% opacity
var colorBlackOpacity10="#0000001a";// Black with 10% opacity
var colorWhiteBase="#fff";// White
var colorWhiteHover="#e6e6e6";// White hover
var colorWhiteOpacity13="#ffffff21";// White with 13% opacity
var colorWhiteOpacity15="#ffffff26";// White with 15% opacity
var colorGray10="#f2f2f2";var colorGray20="#e6e6e6";var colorGray30="#d9d9d9";var colorGray40="#ccc";var colorGray50="#bfbfbf";var colorGray60="#b3b3b3";var colorGray70="#a6a6a6";var colorGray80="#999";var colorGray90="#8c8c8c";var colorGray100="#808080";var colorGray110="#737373";var colorGray120="#666";var colorGray130="#5d5d5d";var colorGray140="#525252";var colorGray150="#474747";var colorGray160="#383838";var colorGray170="#333";var colorGray180="#262626";var colorGray190="#212121";var colorGray200="#171717";var colorBlue10="#eaf2f6";var colorBlue20="#d5e5ed";var colorBlue40="#abcbdb";var colorBlue50="#94BCD1";var colorBlue60="#82b0c9";var colorBlue70="#6CA3C0";var colorBlue80="#5897b8";var colorBlue90="#4289ad";var colorBlue100="#2e7ca5";var colorBlue110="#2C7399";var colorBlue120="#29698C";var colorBlue130="#25607f";var colorBlue150="#143c50";var colorPurple80="#b46ab4";var colorPurple110="#954b95";var colorRed100="#b90835";var colorOrange100="oklch(0.66 0.18 45)";var colorSignalBlue10="#eaf2f6";var colorSignalBlue20="#d5e5ed";var colorSignalBlue100="#06c";var colorSignalBlue170="#162b33";var colorSignalBlue180="#112127";var colorSignalGreen20="#d5f2d9";var colorSignalGreen30="#bae5c5";var colorSignalGreen100="#008d3c";var colorSignalGreen150="#194B33";var colorSignalGreen170="#163328";var colorSignalGreen180="#112722";var colorSignalYellow10="#fff8e2";var colorSignalYellow20="#fff1cd";var colorSignalYellow30="#ffeab8";var colorSignalYellow40="#ffe3a3";var colorSignalYellow50="#ffdc8b";var colorSignalYellow60="#ffd47b";var colorSignalYellow70="#fdcd5d";var colorSignalYellow80="#fbc640";var colorSignalYellow90="#fabf1b";var colorSignalYellow100="#fab900";var colorSignalYellow110="#daa105";var colorSignalYellow120="#bd8c1e";var colorSignalYellow130="#a17927";var colorSignalYellow140="#88672a";var colorSignalYellow150="#70562b";var colorSignalYellow160="#5a4629";var colorSignalYellow170="#453826";var colorSignalYellow180="#322a20";var colorSignalYellow190="#201c18";var colorSignalYellow200="#0f0e0e";var colorSignalRed10="#ffefef";var colorSignalRed20="#ffdfdf";var colorSignalRed30="#fcc8c8";var colorSignalRed40="#f9b0b0";var colorSignalRed50="#f69999";var colorSignalRed60="#f38181";var colorSignalRed70="#ef6a6a";var colorSignalRed80="#EC5252";var colorSignalRed90="#e93b3b";var colorSignalRed100="#e62323";var colorSignalRed110="#d12020";var colorSignalRed120="#bc1d1d";var colorSignalRed130="#a71919";var colorSignalRed140="#921616";var colorSignalRed150="#7d1313";var colorSignalRed160="#691010";var colorSignalRed170="#540d0d";var colorSignalRed180="#3f0a0a";var colorSignalRed190="#2a0606";var colorSignalRed200="#150303";var colorSky20="#cde6f3";var colorSky60="#4a95df";var colorSky180="#101037";var colorMint20="#d5f2d9";var colorMint60="#75b47d";var colorMint180="#07270b";var colorCream20="#fff5db";var colorCream60="#ecbe4a";var colorCream180="#2c2719";var colorTeal20="#cdf2f2";var colorTeal60="#43bcbc";var colorTeal180="#0d2c2c";var colorLagoon20="#d2daf9";var colorLagoon60="#7088e0";var colorLagoon180="#0a1332";var colorLavender20="#f6d0f9";var colorLavender60="#b77dbc";var colorLavender180="#391c3b";var colorPeach20="#ffe6d9";var colorPeach60="#e87031";var colorPeach180="#421d0a";var colorPippin20="#ffe0e0";var colorPippin60="#f17575";var colorPippin180="#431919";var spacing10="0.125rem";// @deprecated Use space.10 (--midas-space-10) instead
var spacing20="0.25rem";// @deprecated Use space.xsmall (--midas-space-xsmall) instead
var spacing30="0.5rem";// @deprecated Use space.small (--midas-space-small) instead
var spacing40="0.75rem";// @deprecated Use space.60 (--midas-space-60) instead
var spacing50="1rem";// @deprecated Use space.medium (--midas-space-medium) instead
var spacing60="1.5rem";// @deprecated Use space.large (--midas-space-large) instead
var spacing70="2rem";// @deprecated Use space.xlarge (--midas-space-xlarge) instead
var spacing80="2.5rem";// @deprecated Use space.130 (--midas-space-130) instead
var spacing90="3rem";// @deprecated Use space.150 (--midas-space-150) instead
var spacingXsmall="0.25rem";// @deprecated Use space.xsmall (--midas-space-xsmall) instead
var spacingSmall="0.5rem";// @deprecated Use space.small (--midas-space-small) instead
var spacingMedium="1rem";// @deprecated Use space.medium (--midas-space-medium) instead
var spacingLarge="1.5rem";// @deprecated Use space.large (--midas-space-large) instead
var spacingXlarge="2rem";// @deprecated Use space.xlarge (--midas-space-xlarge) instead
var size10="0.125rem";// @deprecated Use base.10 (--midas-base-10) instead
var size15="0.188rem";// @deprecated Use base.15 (--midas-base-15) instead
var size20="0.25rem";// @deprecated Use base.20 (--midas-base-20) instead
var size30="0.375rem";// @deprecated Use base.30 (--midas-base-30) instead
var size40="0.5rem";// @deprecated Use base.40 (--midas-base-40) instead
var size50="0.625rem";// @deprecated Use base.50 (--midas-base-50) instead
var size60="0.75rem";// @deprecated Use base.60 (--midas-base-60) instead
var size70="0.875rem";// @deprecated Use base.70 (--midas-base-70) instead
var size75="0.938rem";// @deprecated Use base.75 (--midas-base-75) instead
var size80="1rem";// @deprecated Use base.80 (--midas-base-80) instead
var size90="1.25rem";// @deprecated Use base.90 (--midas-base-90) instead
var size100="1.5rem";// @deprecated Use base.100 (--midas-base-100) instead
var size110="1.75rem";// @deprecated Use base.110 (--midas-base-110) instead
var size120="2rem";// @deprecated Use base.120 (--midas-base-120) instead
var size130="2.5rem";// @deprecated Use base.130 (--midas-base-130) instead
var size140="2.75rem";// @deprecated Use base.140 (--midas-base-140) instead
var size150="3rem";// @deprecated Use base.150 (--midas-base-150) instead
var size00="0rem";// @deprecated Use base.00 (--midas-base-00) instead
var size05="0.063rem";// @deprecated Use base.05 (--midas-base-05) instead
var sizeControlSm="2.5rem";// @deprecated Use size.control-md (--midas-size-control-md) instead
var sizeIcon="1.25rem";// Standardstorlek för ikoner. 1.25rem / 20px.
var sizeIconSm="1rem";// Liten ikonstorlek för kompakta kontexter. 1rem / 16px.
var sizeOption="2rem";// Höjd för alternativ i dropdown-listor, t.ex. Select och Combobox. 2rem / 32px.
var sizeControlMd="2.5rem";// Medelstor interaktiv kontrollhöjd. 2.5rem / 40px.
var sizeControl="3rem";// Standardhöjd för interaktiva kontroller, t.ex. TextField och Button. 3rem / 48px.
var backgroundBase="light-dark(#fff, #171717)";// Standardbakgrund för våra applikationer
var backgroundHover="light-dark(#e6e6e6, #212121)";// Hoverfärg för bakgrund
var backgroundInverse="light-dark(#171717, #f2f2f2)";// Bakgrund med inverterade färger
var layer01Base="light-dark(#f2f2f2, #262626)";// Färg för lager som läggs på Background.
var layer01Hover="light-dark(#e6e6e6, #333)";// Hover state för layer01
var layer01Selected="light-dark(#d9d9d9, #383838)";// Selected state för layer01
var layer01SelectedHover="light-dark(#ccc, #474747)";// Hover state för layerSelected01
var layer02Base="light-dark(#fff, #383838)";// Färg för lager som läggs på layer 01
var layer02Hover="light-dark(#e6e6e6, #474747)";// Hover state för layer02
var layer02Selected="light-dark(#d9d9d9, #525252)";// Selected state för layer02
var layer02SelectedHover="light-dark(#ccc, #5d5d5d)";// Hover state för layerSelected02
var layerAccent01Base="light-dark(#d9d9d9, #383838)";// Accentfärg som används tillsammans med layer 01
var layerAccent01Hover="light-dark(#ccc, #474747)";// Hover state för layerAccent01
var layerAccent01Selected="light-dark(#bfbfbf, #525252)";// Selected state för layerAccent01
var layerAccent02Base="light-dark(#d9d9d9, #383838)";// Accentfärg som används tillsammans med layer 02
var layerAccent02Hover="light-dark(#ccc, #474747)";// Hover state för layerAccent02
var layerAccent02Selected="light-dark(#bfbfbf, #525252)";// Selected state för layerAccent02
var brandPrimary="light-dark(#b90835, #b90835)";// Migrationsverkets primära röda färg
var borderColorPrimary="light-dark(#171717, #f2f2f2)";// Kantlinje med hög kontrast
var borderColorSecondary="light-dark(#737373, #8c8c8c)";// Kantlinje med medelhög kontrast
var borderColorSubtle="light-dark(#bfbfbf, #525252)";// Kantlinje med låg kontrast
var borderColorTertiary="light-dark(#143c50, #2e7ca5)";// Primärblå kantlinje
var borderColorDisabled="light-dark(#bfbfbf, #525252)";// Kantlinje för disabled state
var borderWidth="1px";var field01Base="light-dark(#f2f2f2, #262626)";// färg för fält som ligger på Background
var field01Hover="light-dark(#e6e6e6, #333)";// Hover state för field01
var field01Active="light-dark(#d9d9d9, #383838)";// Active state för field01
var field01Disabled="light-dark(#f2f2f2, #262626)";// Disabled state för fält som ligger på Background
var field02Base="light-dark(#fff, #383838)";// Färg för fält som ligger på layer 01
var field02Hover="light-dark(#e6e6e6, #474747)";// Hover state för field02
var field02Active="light-dark(#d9d9d9, #525252)";// Active state för field02
var field02Disabled="light-dark(#fff, #383838)";// Disabled state för fält som ligger på layer 01
var skeleton01="light-dark(#f2f2f2, #262626)";// Färg som används när Skeleton ligger på Background
var skeleton02="light-dark(#d9d9d9, #383838)";// Färg som används när Skeleton ligger på Layer 01
var iconPrimary="light-dark(#171717, #f2f2f2)";// Primär ikonfärg
var iconSecondary="light-dark(#525252, #a6a6a6)";// Sekundär ikonfärg
var iconTertiary="light-dark(#143c50, #f2f2f2)";// Tertiär ikonfärg, används för ikoner i tertiary-knappar
var iconInverse="light-dark(#fff, #171717)";// Inverterad ikonfärg. Ljus ikon i ljust läge och mörk ikon i mörkt läge
var iconOnColor="light-dark(#fff, #fff)";// Ikonfärg på färgade ytor som inte är lager
var iconDisabled="light-dark(#bfbfbf, #525252)";// Färg för ikoner som är disabled
var iconSuccess="light-dark(#008d3c, #008d3c)";// Ikonfärg för success state
var iconInfo="light-dark(#06c, #06c)";// Ikonfärg för informationsikoner
var iconWarning="light-dark(#e62323, #e62323)";// Ikonfärg för varningsikoner och invalid state
var iconImportant="oklch(0.66 0.18 45)";// Ikonfärg för viktig information
var iconReadOnly="light-dark(#bfbfbf, #383838)";// Färg för ikoner som är read-only
var linkEnabled="light-dark(#29698C, #6CA3C0)";// Primär länkfärg
var linkHover="light-dark(#143c50, #94BCD1)";// Hover state för länkar
var linkPressed="light-dark(#171717, #abcbdb)";// Active/pressed state för länkar
var linkVisited="light-dark(#954b95, #b46ab4)";// Färg för besökta länkar
var progressBarTrackBackground="light-dark(#d9d9d9, #383838)";// Bakgrundsfärg för progress bar track
var progressBarIndicatorBackground="#008d3c";// Bakgrundsfärg för progress bar indicator
var supportBorderSuccess="light-dark(#008d3c, #008d3c)";// Kantlinje för success-notifikationer
var supportBorderInfo="light-dark(#06c, #06c)";// Kantlinje för notifikationer med information
var supportBorderImportant="oklch(0.66 0.18 45)";// Kantlinje för notifikationer med viktig information
var supportBorderWarning="light-dark(#e62323, #e62323)";// Kantlinje för notifikationer med varningar
var supportBackgroundSuccess="light-dark(#d5f2d9, #112722)";// Bakgrund för success-notifikationer
var supportBackgroundSuccessHover="light-dark(#bae5c5, #163328)";// Hoverbakgrund för success-notifikationer
var supportBackgroundInfo="light-dark(#eaf2f6, #112127)";// Bakgrund för notifikationer med information
var supportBackgroundInfoHover="light-dark(#d5e5ed, #162b33)";// Hoverbakgrund för notifikationer med information
var supportBackgroundImportant="light-dark(#fff8e2, #322a20)";// Bakgrund för notifikationer med viktig information
var supportBackgroundImportantHover="light-dark(#fff1cd, #453826)";// Hoverbakgrund för notifikationer med viktig information
var supportBackgroundWarning="light-dark(#ffdfdf, #3f0a0a)";// Bakgrund för notifikationer med varningar
var supportBackgroundWarningHover="light-dark(#fcc8c8, #540d0d)";// Hoverbakgrund för notifikationer med varningar
var tagSkyBackground="light-dark(#cde6f3, #101037)";// Tag bakgrund blå
var tagSkyBorderColor="#4a95df";// Tag kantlinje blå
var tagBlueBackground="light-dark(#cde6f3, #101037)";// @deprecated Använd tag.sky istället.
var tagBlueBorderColor="#4a95df";// @deprecated Använd tag.sky istället.
var tagMintBackground="light-dark(#d5f2d9, #07270b)";// Tag bakgrund grön
var tagMintBorderColor="#75b47d";// Tag kantlinje grön
var tagGreenBackground="light-dark(#d5f2d9, #07270b)";// @deprecated Använd tag.mint istället.
var tagGreenBorderColor="#75b47d";// @deprecated Använd tag.mint istället.
var tagCreamBackground="light-dark(#fff5db, #2c2719)";// Tag bakgrund gul
var tagCreamBorderColor="#ecbe4a";// Tag kantlinje gul
var tagYellowBackground="light-dark(#fff5db, #2c2719)";// @deprecated Använd tag.cream istället.
var tagYellowBorderColor="#ecbe4a";// @deprecated Använd tag.cream istället.
var tagTealBackground="light-dark(#cdf2f2, #0d2c2c)";// Tag bakgrund blågrön
var tagTealBorderColor="#43bcbc";// Tag kantlinje blågrön
var tagLagoonBackground="light-dark(#d2daf9, #0a1332)";// Tag bakgrund lagunblå
var tagLagoonBorderColor="#7088e0";// Tag kantlinje lagunblå
var tagLagoonblueBackground="light-dark(#d2daf9, #0a1332)";// @deprecated Använd tag.lagoon istället.
var tagLagoonblueBorderColor="#7088e0";// @deprecated Använd tag.lagoon istället.
var tagLavenderBackground="light-dark(#f6d0f9, #391c3b)";// Tag bakgrund lila
var tagLavenderBorderColor="#b77dbc";// Tag kantlinje lila
var tagPurpleBackground="light-dark(#f6d0f9, #391c3b)";// @deprecated Använd tag.lavender istället.
var tagPurpleBorderColor="#b77dbc";// @deprecated Använd tag.lavender istället.
var tagPeachBackground="light-dark(#ffe6d9, #421d0a)";// Tag bakgrund orange
var tagPeachBorderColor="#e87031";// Tag kantlinje orange
var tagOrangeBackground="light-dark(#ffe6d9, #421d0a)";// @deprecated Använd tag.peach istället.
var tagOrangeBorderColor="#e87031";// @deprecated Använd tag.peach istället.
var tagPippinBackground="light-dark(#ffe0e0, #431919)";// Tag bakgrund röd
var tagPippinBorderColor="#f17575";// Tag kantlinje röd
var tagRedBackground="light-dark(#ffe0e0, #431919)";// @deprecated Använd tag.pippin istället.
var tagRedBorderColor="#f17575";// @deprecated Använd tag.pippin istället.
var textPrimary="light-dark(#171717, #f2f2f2)";// Primär textfärg.
var textSecondary="light-dark(#525252, #a6a6a6)";// Sekundär textfärg
var textTertiary="light-dark(#143c50, #f2f2f2)";// Textfärg på tertiär knapp
var textOnColor="light-dark(#fff, #fff)";// Textfärg på färgade bakgrunder som inte är lager
var textInverse="light-dark(#f2f2f2, #171717)";// Inverterad textfärg
var textDisabled="light-dark(#bfbfbf, #525252)";// Färg för disabled text
var textWarning="light-dark(#e62323, #EC5252)";// Färg för felmeddelanden
var textPlaceholder="light-dark(#a6a6a6, #525252)";// Färg för platshållare
var textReadOnly="light-dark(#737373, #999)";// Färg för read-only state
var badgeBackground="light-dark(#e62323, #e62323)";// Bakgrundsfärg för badge
var calendarDateBackgroundHover="light-dark(#0000001a, #ffffff1a)";// Hover-bakgrund för datumcell
var calendarDateBackgroundSelected="light-dark(#143c50, #5897b8)";// Bakgrund för ett valt datum
var calendarDateBackgroundStartRange="light-dark(#143c50, #5897b8)";// Bakgrund för det första datumet i ett intervallval
var calendarDateBackgroundInRange="light-dark(#d5e5ed, #143c50)";// Bakgrund för datum som ligger inom ett valt intervall
var calendarDateBackgroundEndRange="light-dark(#143c50, #5897b8)";// Bakgrund för det sista datumet i ett intervallval
var logoPrimary="light-dark(#b90835, #fff)";// Färg på logotypen
var menuItemBackgroundHover="light-dark(#e6e6e6, #212121)";// Bakgrundsfärg för menu vid hover
var menuItemBackgroundSelected="light-dark(#f2f2f2, #262626)";// Bakgrundsfärg för aktiv menu
var menuTextSectionHeader="light-dark(#525252, #a6a6a6)";// Textfärg för sektionsrubriker i navigationsmenyn
var navigationLinkBackgroundHover="light-dark(#e6e6e6, #212121)";// Bakgrundsfärg vid hover
var navigationLinkBackgroundSelected="light-dark(#f2f2f2, #262626)";// Bakgrundsfärg för aktiv länk
var navigationLinkBackgroundSelectedHover="light-dark(#e6e6e6, #212121)";// Bakgrundsfärg vid hover på aktiv länk
var overlayBackground="rgba(0 0 0 / 30%)";// Bakrundsfärg för overlays
var overlayBlur="blur(2px)";// Blur för overlays
var cardBackgroundBase="light-dark(#fff, #262626)";// Bakrundsfärg för Card
var cardShadow="0 3px 5px 0 rgba(0, 0, 0, 0.30)";// Skugga för Card
var panelShadow="-2px 0px 12px -2px rgba(0, 0, 0, 0.10)";// Skugga för Panel
var space10="0.125rem";// 0.125rem / 2px.
var space30="0.375rem";// 0.375rem / 6px.
var space50="0.625rem";// 0.625rem / 10px.
var space60="0.75rem";// 0.75rem / 12px.
var space70="0.875rem";// 0.875rem / 14px.
var space75="0.938rem";// 0.938rem / 15px.
var space90="1.25rem";// 1.25rem / 20px.
var space130="2.5rem";// 2.5rem / 40px.
var space150="3rem";// 3rem / 48px.
var spaceXsmall="0.25rem";// Extra litet avstånd. 0.25rem / 4px.
var spaceSmall="0.5rem";// Litet avstånd. 0.5rem / 8px.
var spaceMedium="1rem";// Medelstort avstånd. 1rem / 16px.
var spaceLarge="1.5rem";// Stort avstånd. 1.5rem / 24px.
var spaceXlarge="2rem";// Extra stort avstånd. 2rem / 32px.
var space05="0.063rem";// 0.063rem / 1px.
var stateFocus="0 0 0 2px light-dark(white, black), 0 0 0 4px light-dark(black, white)";// Focus style used when the component is focused (box-shadow).
var stateFocusInset="inset 0 0 0 2px light-dark(black, white), inset 0 0 0 4px light-dark(white, black)";// Inset variant of the focus ring (box-shadow inset).
var stateFocusContrastModeOutline="2px";// Outline style for focus ring when Windows High Contrast (forced-colors) mode is active.
var stateFocusContrastModeOffset="2px";// Outline offset for focus ring when Windows High Contrast (forced-colors) mode is active.
var stateInvalid="inset 0 0 0 2px light-dark(#e62323, #e62323)";// Invalid state style for form fields (box-shadow).
var transitionDurationSlow="400ms";// Långsam övergång. 400ms. Används för större layoutförändringar som sidopaneler och expanderbara sektioner.
var transitionDurationNormal="300ms";// Normal övergångshastighet. 300ms. Standardval för de flesta animationer.
var transitionDurationFast="250ms";// Snabb övergång. 250ms. Används för kortlivade övergångar som tooltips och dropdowns — inte hover.
var transitionDurationQuick="150ms";// Kort mikroanimation. 150ms. Används för snabba overlay-rörelser som modaler och select-öppningar som är perceptibelt animerade men ändå snabba.
var transitionDurationInstant="100ms";// Omedelbar återkoppling. 100ms. Används för direkta tillståndsförändringar som hover-bakgrunder och färgövergångar — allt längre upplevs som tröghet.
var transitionTimingEaseOut=(/* unused pure expression or super */ null && ([0,0,0.58,1]));// Decelererar mot slutet. Används för element som glider in i vyn.
var transitionTimingEaseIn=(/* unused pure expression or super */ null && ([0.42,0,1,1]));// Accelererar mot slutet. Används för element som lämnar vyn.
var transitionTimingEaseInOut=(/* unused pure expression or super */ null && ([0.42,0,0.58,1]));// Accelererar sedan decelererar symmetriskt. Används för element som rör sig mellan två positioner på skärmen.
var transitionPanelCollapse=(/* unused pure expression or super */ null && ({delay:"0ms",duration:"300ms",timingFunction:[0,0,0.58,1]}));// Komprimerar en panel med easeOut-timing. Används i Accordion och expanderbara ytor.
var transitionPanelExpand=(/* unused pure expression or super */ null && ({delay:"0ms",duration:"300ms",timingFunction:[0.42,0,1,1]}));// Expanderar en panel med easeIn-timing. Används i Accordion och expanderbara ytor.
var typographyFontFamily="Inter, sans-serif";// Primär typsnittsfamilj för hela design systemet.
var typographyFontSize10="0.75rem";// 0.75rem / 12px.
var typographyFontSize20="0.875rem";// 0.875rem / 14px.
var typographyFontSize30="1rem";// 1rem / 16px.
var typographyFontSize40="1.125rem";// 1.125rem / 18px.
var typographyFontSize50="1.25rem";// 1.25rem / 20px.
var typographyFontSize60="1.5rem";// 1.5rem / 24px.
var typographyFontSize70="1.625rem";// 1.625rem / 26px.
var typographyFontSize80="2rem";// 2rem / 32px.
var typographyFontSize90="2.25rem";// 2.25rem / 36px.
var typographyFontSize100="2.625rem";// 2.625rem / 42px.
var typographyLineHeight10="1rem";// 1rem / 16px.
var typographyLineHeight20="1.125rem";// 1.125rem / 18px.
var typographyLineHeight30="1.25rem";// 1.25rem / 20px.
var typographyLineHeight40="1.375rem";// 1.375rem / 22px.
var typographyLineHeight50="1.5rem";// 1.5rem / 24px.
var typographyLineHeight60="1.75rem";// 1.75rem / 28px.
var typographyLineHeight70="2rem";// 2rem / 32px.
var typographyLineHeight80="2.25rem";// 2.25rem / 36px.
var typographyLineHeight90="2.5rem";// 2.5rem / 40px.
var typographyLineHeight100="3rem";// 3rem / 48px.
var typographyWeightThin=100;// 100 – Tunnast möjliga vikt.
var typographyWeightExtraLight=200;// 200 – Extra tunn.
var typographyWeightLight=300;// 300 – Tunn.
var typographyWeightRegular=400;// 400 – Standardvikt för brödtext.
var typographyWeightMedium=500;// 500 – Mellantung, för betoning utan fet stil.
var typographyWeightSemiBold=600;// 600 – Halvfet, för underrubriker och etiketter.
var typographyWeightBold=700;// 700 – Fet, för rubriker och framhävning.
var typographyWeightExtraBold=800;// 800 – Extra fet.
var typographyWeightBlack=900;// 900 – Tyngsta möjliga vikt.
var typographyBody=(/* unused pure expression or super */ null && ({fontFamily:"Inter, sans-serif",fontSize:"1rem",fontWeight:400,lineHeight:"1.25rem"}));// Standardtypografi för brödtext. Används i löptext, listor och stycken.
var typographyBodySmall=(/* unused pure expression or super */ null && ({fontFamily:"Inter, sans-serif",fontSize:"0.875rem",fontWeight:400,lineHeight:"1.125rem"}));// Liten brödtextstil. Används för kompakt text i t.ex. tabeller och listor.
var typographyDescription=(/* unused pure expression or super */ null && ({fontFamily:"Inter, sans-serif",fontSize:"0.875rem",fontWeight:400,lineHeight:"1.125rem"}));// Beskrivningstext, t.ex. för hjälptexter och ledtexter i formulär.
var typographyDescriptionSmall=(/* unused pure expression or super */ null && ({fontFamily:"Inter, sans-serif",fontSize:"0.75rem",fontWeight:400,lineHeight:"1rem"}));// Liten beskrivningstext, t.ex. för felmeddelanden och teckenräknare i formulär.
var zIndexBase=1;// Basnivå för normala element. z-index: 1.
var zIndexAbove=10;// Placerar element ovanför normala element, t.ex. tooltips i flödet. z-index: 10.
var zIndexSidebar=500;// Z-index för sidopaneler och navigationsdrawers. z-index: 500.
var zIndexModal=1000;// Z-index för modaler och dialoger. z-index: 1000.
var zIndexToast=1100;// Z-index för toast-notifikationer, ovanför modaler. z-index: 1100.
var zIndexSkipToContent=1200;// Z-index för 'hoppa till innehåll'-länken för tillgänglighet, alltid överst. z-index: 1200.

/***/ },

/***/ 71498
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K1: () => (/* reexport */ employees)
});

// UNUSED EXPORTS: departments, findTranslationIssues, fruit, mockedNow, options, optionsWithSections, statuses

// EXTERNAL MODULE: ./node_modules/@faker-js/faker/dist/locale/en.js + 2 modules
var en = __webpack_require__(43944);
;// ./tools/test-utils/src/utils.ts
var getRandomElement=function getRandomElement(elements){return elements[Math.floor(Math.random()*elements.length)];};
;// ./tools/test-utils/src/data.ts
var departments=['Engineering','Finance','HR','Marketing','Sales'];var statuses=['Active','Inactive','Pending'];var employees=Array.from({length:32},function(_,index){return{id:index.toString(),firstName:en/* faker */.a.person.firstName(),lastName:en/* faker */.a.person.lastName(),email:en/* faker */.a.internet.email(),department:getRandomElement(departments),status:getRandomElement(statuses)};});var fruit=[{id:'ananas',name:'Ananas',description:'Tropisk frukt med taggigt skal',value:'ananas',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/320px-Pineapple_and_cross_section.jpg',category:'Tropiska frukter'},{id:'apelsin',name:'Apelsin',description:'Citrusfrukt med orange skal',value:'apelsin',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/320px-Orange-Fruit-Pieces.jpg',category:'Citrusfrukter'},{id:'aprikos',name:'Aprikos',description:'Stenfrukt med orange färg',value:'aprikos',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apricot_and_cross_section.jpg/320px-Apricot_and_cross_section.jpg',category:'Stenfrukter'},{id:'avokado',name:'Avokado',description:'Grönsaksfrukt med krämig konsistens',value:'avokado',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Avocado_IMGP1082.jpg/320px-Avocado_IMGP1082.jpg',category:'Exotiska frukter'},{id:'banan',name:'Banan',description:'Långsmal frukt med gult skal',value:'banan',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/320px-Banana-Single.jpg',category:'Tropiska frukter'},{id:'björnbär',name:'Björnbär',description:'Små svarta bär',value:'bjornbar',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Blackberries_%28Rubus_fruticosus%29.jpg/320px-Blackberries_%28Rubus_fruticosus%29.jpg',category:'Bär'},{id:'blåbär',name:'Blåbär',description:'Små blå bär',value:'blabar',image:'https://upload.wikimedia.org/wikipedia/commons/1/15/Blueberries.jpg',category:'Bär'},{id:'carambola',name:'Carambola',description:'Stjärnformad exotisk frukt',value:'carambola',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Averrhoa_carambola_ARS_k5735-7.jpg/160px-Averrhoa_carambola_ARS_k5735-7.jpg',category:'Exotiska frukter'},{id:'citron',name:'Citron',description:'Citrusfrukt med gult skal',value:'citron',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lemon.jpg/320px-Lemon.jpg',category:'Citrusfrukter'},{id:'clementin',name:'Clementin',description:'Liten citrusfrukt med löst skal',value:'clementin',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Oh_my_darling.jpg/320px-Oh_my_darling.jpg',category:'Citrusfrukter'},{id:'drakfrukt',name:'Drakfrukt',description:'Exotisk frukt med rött skal',value:'drakfrukt',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Pitaya_cross_section_ed2.jpg/294px-Pitaya_cross_section_ed2.jpg',category:'Exotiska frukter'},{id:'granatäpple',name:'Granatäpple',description:'Frukt med många kärnor',value:'granatapple',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Pomegranate_fruit_-_whole_and_piece_with_arils.jpg/320px-Pomegranate_fruit_-_whole_and_piece_with_arils.jpg',category:'Exotiska frukter'},{id:'grapefrukt',name:'Grapefrukt',description:'Stor citrusfrukt med rosa eller gult kött',value:'grapefrukt',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg/320px-Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg',category:'Citrusfrukter'},{id:'hallon',name:'Hallon',description:'Röda bär som växer på buskar',value:'hallon',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Raspberries_%28Rubus_idaeus%29.jpg/320px-Raspberries_%28Rubus_idaeus%29.jpg',category:'Bär'},{id:'jordgubbe',name:'Jordgubbe',description:'Röda bär med frön på utsidan',value:'jordgubbe',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Strawberries.jpg/320px-Strawberries.jpg',category:'Bär'},{id:'kiwi',name:'Kiwi',description:'Frukt med hårig brun skal och grönt kött',value:'kiwi',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/320px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg',category:'Exotiska frukter'},{id:'kokosnöt',name:'Kokosnöt',description:'Stor nöt med hårt skal',value:'kokosnot',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Coconuts_-_single_and_cracked_open.jpg/320px-Coconuts_-_single_and_cracked_open.jpg',category:'Nötter'},{id:'körsbär',name:'Körsbär',description:'Små röda stenfrukter',value:'korsbar',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Cherry_Stella444.jpg/320px-Cherry_Stella444.jpg',category:'Stenfrukter'},{id:'lime',name:'Lime',description:'Liten grön citrusfrukt',value:'lime',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Citrus_×aurantiifolia927505341.jpg/320px-Citrus_×aurantiifolia927505341.jpg',category:'Citrusfrukter'},{id:'litchi',name:'Litchi',description:'Liten frukt med tunt rosa skal',value:'litchi',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lychee_fruits_and_seed.jpg/320px-Lychee_fruits_and_seed.jpg',category:'Exotiska frukter'},{id:'mandarin',name:'Mandarin',description:'Liten orange citrusfrukt',value:'mandarin',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mandarin_Oranges_%28Citrus_Reticulata%29.jpg/320px-Mandarin_Oranges_%28Citrus_Reticulata%29.jpg',category:'Citrusfrukter'},{id:'mango',name:'Mango',description:'Söt exotisk frukt med stor kärna',value:'mango',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mango_-_single.jpg/320px-Mango_-_single.jpg',category:'Tropiska frukter'},{id:'melon',name:'Melon',description:'Stor frukt med saftigt kött',value:'melon',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Muskmelon.jpg/320px-Muskmelon.jpg',category:'Meloner'},{id:'nektarin',name:'Nektarin',description:'Slät variant av persika',value:'nektarin',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Autumn_Red_peaches.jpg/320px-Autumn_Red_peaches.jpg',category:'Stenfrukter'},{id:'papaya',name:'Papaya',description:'Exotisk frukt med orange kött',value:'papaya',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Papaya_cross_section_BNC.jpg/320px-Papaya_cross_section_BNC.jpg',category:'Tropiska frukter'},{id:'passionsfrukt',name:'Passionsfrukt',description:'Frukt med många kärnor och syrligt kött',value:'passionsfrukt',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Passion_fruits_-_whole_and_halved.jpg/320px-Passion_fruits_-_whole_and_halved.jpg',category:'Exotiska frukter'},{id:'persika',name:'Persika',description:'Mjuk stenfrukt med ludet skal',value:'persika',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Autumn_Red_peaches.jpg/320px-Autumn_Red_peaches.jpg',category:'Stenfrukter'},{id:'physalis',name:'Physalis',description:'Liten frukt som växer i pappershölje',value:'physalis',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Physalis_peruviana_calix_open_close-up.jpg/300px-Physalis_peruviana_calix_open_close-up.jpg',category:'Exotiska frukter'},{id:'plommon',name:'Plommon',description:'Söt eller syrlig stenfrukt',value:'plommon',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Bluebyrd_plum.jpg/167px-Bluebyrd_plum.jpg',category:'Stenfrukter'},{id:'päron',name:'Päron',description:'Avlång frukt med smal midja',value:'paron',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/393px-Pears.jpg',category:'Pomefrukter'},{id:'rambutan',name:'Rambutan',description:'Exotisk frukt med hårig skal',value:'rambutan',image:'https://upload.wikimedia.org/wikipedia/commons/a/ae/Rambutan_Fruit.jpg',category:'Exotiska frukter'},{id:'röda vinbär',name:'Röda vinbär',description:'Små röda bär i klasar',value:'roda vinbar',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Hjulsta_koloni_2010h.jpg/256px-Hjulsta_koloni_2010h.jpg',category:'Bär'},{id:'sharon',name:'Sharon',description:'Persikoliknande frukt med fast kött',value:'sharon',image:'https://upload.wikimedia.org/wikipedia/commons/9/95/Diospyros_kaki_-_persimmon_at_Paro_during_LGFC_-_Bhutan_2019_%283%29.jpg',category:'Stenfrukter'},{id:'stjärnfrukt',name:'Stjärnfrukt',description:'Stjärnformad frukt med syrligt kött',value:'stjarnfrukt',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Carambola_Starfruit.jpg/320px-Carambola_Starfruit.jpg',category:'Exotiska frukter'},{id:'svarta vinbär',name:'Svarta vinbär',description:'Små svarta bär i klasar',value:'svarta vinbar',image:'https://upload.wikimedia.org/wikipedia/commons/1/17/Blackcurrants2.jpg',category:'Bär'},{id:'vattenmelon',name:'Vattenmelon',description:'Stor frukt med rött, saftigt kött',value:'vattenmelon',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Water_melon_2015.jpg/320px-Water_melon_2015.jpg',category:'Meloner'},{id:'vindruvor',name:'Vindruvor',description:'Små gröna eller blå frukter i klasar',value:'vindruvor',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Thompson_seedless_grapes.JPG/320px-Thompson_seedless_grapes.JPG',category:'Vindruvor'},{id:'äpple',name:'Äpple',description:'Rund frukt med kärnhus',value:'apple',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/320px-Red_Apple.jpg',category:'Pomefrukter'}];
;// ./tools/test-utils/src/fruit.ts
var options=fruit.map(function(_ref){var id=_ref.id,name=_ref.name;return{id:id,name:name};});var optionsWithSections=fruit.reduce(function(categories,currentFruit,index){var foundCategory=categories.find(function(_ref2){var name=_ref2.name;return name===currentFruit.category;});if(foundCategory){foundCategory.children.push(currentFruit);}if(!foundCategory){categories.push({children:[currentFruit],id:index,name:currentFruit.category});}return categories;},[]);
// EXTERNAL MODULE: ./node_modules/@internationalized/date/dist/private/string.mjs
var string = __webpack_require__(16006);
;// ./tools/test-utils/src/time.ts
var mockedNow=(0,string/* parseDate */._U)('2025-05-29');
;// ./tools/test-utils/src/index.ts


/***/ }

}]);