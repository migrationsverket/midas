"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[8197],{

/***/ 18594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_components_label_mdx_6d0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-components-label-mdx-6d0.json
const site_docs_components_label_mdx_6d0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"components/label","title":"Label","description":"<ComponentHeader","source":"@site/docs/components/label.mdx","sourceDirName":"components","slug":"/components/label","permalink":"/pr-preview/pr-504/components/label","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Label","pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(65537);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(79329);
// EXTERNAL MODULE: ./packages/components/src/label/Label.tsx + 1 modules
var Label = __webpack_require__(20143);
// EXTERNAL MODULE: ./apps/docs/src/components/propsTable.tsx + 141 modules
var propsTable = __webpack_require__(55468);
// EXTERNAL MODULE: ./apps/docs/src/components/getComponentMetaData.tsx + 2 modules
var getComponentMetaData = __webpack_require__(80059);
;// ./apps/docs/docs/components/label.mdx


const frontMatter = {
	title: 'Label',
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
  "value": "Stil",
  "id": "stil",
  "level": 3
}, {
  "value": "Val av element",
  "id": "val-av-element",
  "level": 3
}, {
  "value": "Användning i formulär",
  "id": "användning-i-formulär",
  "level": 2
}, {
  "value": "Manuell koppling med <code>htmlFor</code>",
  "id": "manuell-koppling-med-htmlfor",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 2
}, {
  "value": "Label",
  "id": "label",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
      name: 'typography-label',
      friendlyName: 'Etikett',
      overrideHeadlessLink: "https://github.com/adobe/react-spectrum/blob/main/packages/react-aria-components/src/Label.tsx"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Etikett med fördefinerad stil, för användning i ett formulär."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Label>Jag är en vanlig etikett</Label>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Label/* Label */.J, {
        children: "Jag är en vanlig etikett"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Notera att samtliga formulärkomponenter som midas exporterar redan använder ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Label"
        }), " internt, komponenterna exponerar istället attributet ", (0,jsx_runtime.jsx)(_components.code, {
          children: "label"
        }), " för textvärdet.\nAnvänd denna dokumentation om du avser att själv sätta ihop ett formulärelement, eller behöver en etikett till ett annat syfte."]
      }), "\n"]
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
        children: "import { Label } from '@midas-ds/components'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "varianter",
      children: "Varianter"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stil",
      children: "Stil"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Använd egenskapen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "variant"
      }), " för att justera etikettens utseende"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Label variant='label-02'>Jag är en etikett av varianten 'label-02'</Label>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Label/* Label */.J, {
        variant: "label-02",
        children: "Jag är en etikett av varianten 'label-02'"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "val-av-element",
      children: "Val av element"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Egenskapen ", (0,jsx_runtime.jsx)(_components.code, {
        children: "elementType"
      }), " kan användas för att ändra etikettens DOM-element."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Label elementType='div'>Jag är en div</Label>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "card",
      children: (0,jsx_runtime.jsx)(Label/* Label */.J, {
        elementType: "div",
        children: "Jag är en div"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "användning-i-formulär",
      children: "Användning i formulär"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Midas ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Label"
      }), " bygger på ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/adobe/react-spectrum/blob/main/packages/react-aria-components/src/Label.tsx",
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Label"
        }), " från react-aria-components"]
      }), "\nUtöver ovan nämnda attribut accepteras samtliga attribut som för HTMLelementet ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L3220",
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<label>"
        }), " i react"]
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "manuell-koppling-med-htmlfor",
      children: ["Manuell koppling med ", (0,jsx_runtime.jsx)(_components.code, {
        children: "htmlFor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Label htmlFor=\"firstname\">Förnamn</Label>\n<input id=\"firstname\" />\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      className: "card",
      children: [(0,jsx_runtime.jsx)(Label/* Label */.J, {
        htmlFor: "firstname",
        children: "Förnamn"
      }), (0,jsx_runtime.jsx)("input", {
        id: "firstname",
        style: {
          maxWidth: 200
        }
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "label",
      children: "Label"
    }), "\n", (0,jsx_runtime.jsx)(propsTable/* PropTable */.U, {
      name: "Label"
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
/* harmony default export */ const Label_module = ({"tokens":"\"../theme/tokens.css\"","--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":"\"Inter\", sans-serif","--size-02":"0.875rem","--line-height-02":"1.125rem","--size-03":"1rem","--line-height-03":"1.25rem","--text-disabled":"light-dark(#bfbfbf, #525252)","label-01":"label-01_rWfb","label-02":"label-02_LZ3P"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./packages/components/src/label/Label.tsx
var _excluded=["children","className","variant","elementType"];var DEFAULT_ELEMENT='label';var Label=function Label(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'label-01':_ref$variant,_ref$elementType=_ref.elementType,elementType=_ref$elementType===void 0?DEFAULT_ELEMENT:_ref$elementType,rest=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var classNames={'label-01':Label_module['label-01'],'label-02':Label_module['label-02']};var labelProps=Object.assign({className:(0,clsx/* default */.A)(classNames[variant],className),elementType:elementType||DEFAULT_ELEMENT},rest);return/*#__PURE__*/(0,jsx_runtime.jsx)(dist_Label/* Label */.J,Object.assign({},labelProps,{children:children}));};

/***/ })

}]);