"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[2488],{

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

/***/ 69750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrowDownToLine)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84722);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
];
const ArrowDownToLine = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("arrow-down-to-line", __iconNode);


//# sourceMappingURL=arrow-down-to-line.js.map


/***/ }),

/***/ 74082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_design_patterns_buttons_and_links_mdx_3c9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./apps/docs/.docusaurus/docusaurus-plugin-content-docs/default/site-docs-design-patterns-buttons-and-links-mdx-3c9.json
const site_docs_design_patterns_buttons_and_links_mdx_3c9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"design-patterns/buttons-and-links","title":"Knappar och länkar","description":"Detta mönster är till för beskriva i vilka situationer Knapp, Länkknapp och Länk ska användas","source":"@site/docs/design-patterns/buttons-and-links.mdx","sourceDirName":"design-patterns","slug":"/design-patterns/buttons-and-links","permalink":"/pr-preview/pr-835/design-patterns/buttons-and-links","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"pagination_prev":null,"pagination_next":null},"sidebar":"sideBar"}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./packages/components/src/button/Button.tsx
var Button = __webpack_require__(54031);
// EXTERNAL MODULE: ./packages/components/src/link-button/LinkButton.tsx + 1 modules
var LinkButton = __webpack_require__(56636);
// EXTERNAL MODULE: ./packages/components/src/link/Link.tsx + 1 modules
var Link = __webpack_require__(25441);
// EXTERNAL MODULE: ./packages/components/src/text/Text.tsx + 1 modules
var Text = __webpack_require__(19615);
;// ./apps/docs/docs/design-patterns/buttons-and-links.mdx


const frontMatter = {
	pagination_prev: null,
	pagination_next: null
};
const contentTitle = 'Knappar och länkar';

const assets = {

};




const toc = [{
  "value": "Knappar",
  "id": "knappar",
  "level": 2
}, {
  "value": "Länkar",
  "id": "länkar",
  "level": 2
}, {
  "value": "Länkknapp",
  "id": "länkknapp",
  "level": 3
}, {
  "value": "Fristående länk",
  "id": "fristående-länk",
  "level": 3
}, {
  "value": "Länk",
  "id": "länk",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "knappar-och-länkar",
        children: "Knappar och länkar"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detta mönster är till för beskriva i vilka situationer Knapp, Länkknapp och Länk ska användas"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knappar",
      children: "Knappar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Knappar används för att initiera en aktivitet. När användaren interagerar med en knapp händer något på sidan.\nExempel på situationer där det är lämpligt med en knapp:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "När ett formulär ska skickas in."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "För att initiera en sökning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "För att öppna en modal"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Button/* Button */.$, {
      onPress: () => {
        alert('Du tryckte på knappen och här är din popup');
      },
      children: 'Visa en popup'
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "länkar",
      children: "Länkar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Länkar används för att ta användaren till en ny sida eller en annan del av en sida/applikation. På en webbsida eller i en webbapplikation syns detta som en ny URL."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "länkknapp",
      children: "Länkknapp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Länkknappen är tekniskt en länk men visuellt lik en knapp. Den används vid navigering när det behövs en tydligare visuell signal till användaren att välja länken, än vad en vanlig länk ger.\nAnvändaren ska uppfatta att en handling utförs. Exempel på situationer där det är lämpligt med en länkknapp:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vid navigering inom en applikation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Som en startpunkt, t.ex. en länk från webben till en e-tjänst"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(LinkButton/* LinkButton */.z, {
      href: "/components/link-button",
      children: 'Till sidan för Länkknapp'
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fristående-länk",
      children: "Fristående länk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fristående länk är en variant av länk som används när en länk ligger utanför ett textstycke."
    }), "\n", (0,jsx_runtime.jsx)(Link/* Link */.N, {
      standalone: true,
      href: "/components/link",
      children: 'Läs mer om länkar'
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "länk",
      children: "Länk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Länk används när länken är i ett textstycke."
    }), "\n", (0,jsx_runtime.jsx)(Text/* Text */.E, {
      elementType: "p",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Designsystemet har två olika varianter av ", (0,jsx_runtime.jsx)(Link/* Link */.N, {
          href: "/components/link",
          children: 'länkar'
        }), "."]
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



/***/ })

}]);