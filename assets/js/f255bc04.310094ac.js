"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[7708],{

/***/ 10584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_progress_bar_mdx_f25_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-progress-bar-mdx-f25.json
const site_docs_components_progress_bar_mdx_f25_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/progress-bar","title":"ProgressBar","description":"<ProgressBar","source":"@site/docs/components/progress-bar.mdx","sourceDirName":"components","slug":"/components/progress-bar","permalink":"/components/progress-bar","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ProgressBar","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-aria-components/dist/ProgressBar.mjs + 2 modules
var dist_ProgressBar = __webpack_require__(39565);
;// ./packages/components/src/progress-bar/ProgressBar.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ProgressBar_module = ({"tokens":"\"../theme/tokens.css\"","--layer-accent-01":"light-dark(#d9d9d9, #383838)","--signal-green-100":"#008d3c","progressBar":"progressBar_fYul","label":"label_qT2F","value":"value_KQQb","bar":"bar_WK5A","fill":"fill_xgsq","indeterminate":"indeterminate_xtlO"});
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(20143);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./packages/components/src/progress-bar/ProgressBar.tsx
var _excluded=["label","labelProps","showValueLabel"];var ProgressBar=function ProgressBar(_ref){var label=_ref.label,labelProps=_ref.labelProps,_ref$showValueLabel=_ref.showValueLabel,showValueLabel=_ref$showValueLabel===void 0?false:_ref$showValueLabel,progressBarProps=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_ProgressBar/* ProgressBar */.z,Object.assign({},progressBarProps,{className:(0,clsx/* default */.A)(ProgressBar_module.progressBar,progressBarProps.className),children:function children(_ref2){var percentage=_ref2.percentage,valueLabel=_ref2.valueText,isIndeterminate=_ref2.isIndeterminate;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[label&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,Object.assign({elementType:"span"},labelProps,{className:(0,clsx/* default */.A)(labelProps==null?void 0:labelProps.className,ProgressBar_module.label),children:label})),showValueLabel&&/*#__PURE__*/(0,jsx_runtime.jsx)(Label/* Label */.J,Object.assign({elementType:"span"},labelProps,{// Override the label id to prevent duplicates
id:"",className:(0,clsx/* default */.A)(labelProps==null?void 0:labelProps.className,ProgressBar_module.value),children:valueLabel})),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:ProgressBar_module.bar,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:ProgressBar_module.fill,style:{width:(isIndeterminate?50:percentage)+"%"}})})]});}}));};
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 187 modules
var propsTable = __webpack_require__(35926);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
;// ./apps/docs/docs/components/progress-bar.mdx


const frontMatter = {
	title: 'ProgressBar',
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
  "value": "Varianter",
  "id": "varianter",
  "level": 2
}, {
  "value": "Utan etiketter",
  "id": "utan-etiketter",
  "level": 3
}, {
  "value": "Anpassad <code>valueLabel</code>",
  "id": "anpassad-valuelabel",
  "level": 3
}, {
  "value": "Obestämdhet",
  "id": "obestämdhet",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "ProgressBar",
  "id": "progressbar",
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
      name: "ProgressBar"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ProgressBar\n  label='Laddar...'\n  showValueLabel\n  value={30}\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(ProgressBar, {
        label: "Laddar...",
        showValueLabel: true,
        value: 30
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Progress bar med fördefinerad stil, använder ", (0,jsx_runtime.jsx)(_components.code, {
        children: "role=\"progressbar\""
      }), " under huven"]
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
        children: "import { ProgressBar } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "utan-etiketter",
      children: "Utan etiketter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Utelämna ", (0,jsx_runtime.jsx)(_components.code, {
        children: "label"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "showValueLabel"
      }), " för att dölja komponentens etiketter. Kom ihåg att ersätta ", (0,jsx_runtime.jsx)(_components.code, {
        children: "label"
      }), " med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "aria-label"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ProgressBar\n  // highlight-start\n  aria-label='Laddar...'\n  // highlight-end\n  value={30}\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(ProgressBar, {
        "aria-label": "Laddar...",
        value: 30
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "anpassad-valuelabel",
      children: ["Anpassad ", (0,jsx_runtime.jsx)(_components.code, {
        children: "valueLabel"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Egenskapen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "valueLabel"
      }), " och ", (0,jsx_runtime.jsx)(_components.code, {
        children: "showValueLabel"
      }), " kan användas för att ändra den högerställda etiketten."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ProgressBar\n  aria-label='Dina framsteg'\n  value={2}\n  maxValue={3}\n  // highlight-start\n  valueLabel='Steg 2 av 3'\n  showValueLabel\n  // highlight-end\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(ProgressBar, {
        "aria-label": "Dina framsteg",
        value: 2,
        maxValue: 3,
        valueLabel: "Steg 2 av 3",
        showValueLabel: true
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "obestämdhet",
      children: "Obestämdhet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Egenskapen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isIndeterminate"
      }), " kan användas för att indikera att ett förlopp är obestämt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<ProgressBar\n  label='Väntar...'\n  // highlight-start\n  isIndeterminate\n  // highlight-end\n/>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(ProgressBar, {
        label: "Väntar...",
        isIndeterminate: true
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "progressbar",
      children: "ProgressBar"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "ProgressBar"
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

/***/ 20143:
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
/* harmony default export */ const Label_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--size-02":"0.875rem","--line-height-02":"1.125rem","--size-03":"1rem","--line-height-03":"1.25rem","--text-disabled":"light-dark(#bfbfbf, #525252)","labelBase":"labelBase_BRgo","label-01":"label-01_rWfb","label-02":"label-02_LZ3P"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/Label.tsx
var _excluded=["children","className","variant","elementType"];var DEFAULT_ELEMENT='label';var Label=function Label(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'label-02':_ref$variant,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames={'label-01':Label_module['label-01'],'label-02':Label_module['label-02']};var labelProps=Object.assign({className:(0,clsx/* default */.A)(Label_module.labelBase,classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Label/* Label */.J,Object.assign({},labelProps,{children:children}));};

/***/ })

}]);